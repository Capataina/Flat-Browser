// Gap-finder and data query tool.
//
// Walks every field in every area and project, reports which ones are
// empty, unknown, stubbed, or unverified. Works like a SQL query tool
// over the TypeScript dataset — find exactly what's missing and where.
//
// Run via: pnpm exec tsx scripts/find-gaps.ts [command] [options]
//
// Commands:
//   gaps              Default. Show all empty/unknown/unverified fields.
//   query <expr>      Filter gaps by expression (see below).
//   stats             Dataset-wide statistics.
//   coverage          Per-area completion percentage.
//   fields            List every field path and how many entries have it filled.
//
// Options:
//   --json            Output as JSON instead of human-readable
//   --area <id>       Scope to a single area
//   --project <id>    Scope to a single project
//   --field <name>    Only show gaps matching this field path (substring match)
//   --summary         Summary table only, no per-entry detail
//   --empty           Only show fields that are empty/missing (not unknown)
//   --unknown         Only show fields with "unknown" values
//   --severity <s>    Filter by severity: critical | high | medium | low
//   --csv             Output as CSV (for spreadsheet import)

import { areas } from "../src/areas/data/index";
import type { Area, Project } from "../src/areas/types";

const args = process.argv.slice(2);
const command = !args[0]?.startsWith("--") ? args[0] ?? "gaps" : "gaps";
const jsonMode = args.includes("--json");
const csvMode = args.includes("--csv");
const summaryOnly = args.includes("--summary");
const onlyEmpty = args.includes("--empty");
const onlyUnknown = args.includes("--unknown");
const areaFilter = args.includes("--area") ? args[args.indexOf("--area") + 1] : null;
const projectFilter = args.includes("--project") ? args[args.indexOf("--project") + 1] : null;
const fieldFilter = args.includes("--field") ? args[args.indexOf("--field") + 1] : null;
const severityFilter = args.includes("--severity") ? args[args.indexOf("--severity") + 1] : null;

// ────────────────────────────────────────────────────────────────────
// Gap model
// ────────────────────────────────────────────────────────────────────

type GapSeverity = "critical" | "high" | "medium" | "low";
type GapReason = "empty" | "unknown" | "stubbed" | "zero" | "missing" | "default";

interface Gap {
  area: string;
  areaName: string;
  project?: string;
  projectName?: string;
  field: string;
  reason: GapReason;
  severity: GapSeverity;
  currentValue?: string;
}

// ────────────────────────────────────────────────────────────────────
// Value checks
// ────────────────────────────────────────────────────────────────────

function isEmpty(v: unknown): boolean {
  if (v === undefined || v === null) return true;
  if (typeof v === "string") return v.trim().length === 0;
  if (Array.isArray(v)) return v.length === 0;
  return false;
}

function isUnknown(v: unknown): boolean {
  if (v === "unknown") return true;
  if (typeof v === "string" && v.toLowerCase().includes("not yet")) return true;
  return false;
}

function isStubbed(v: unknown): boolean {
  if (typeof v === "string") {
    const lower = v.toLowerCase();
    return lower.includes("not yet populated") ||
           lower.includes("not yet researched") ||
           lower.includes("awaiting") ||
           lower.includes("not yet available");
  }
  return false;
}

function isDefault(v: unknown, defaultVal: unknown): boolean {
  return v === defaultVal;
}

// ────────────────────────────────────────────────────────────────────
// Field severity mapping — what matters most
// ────────────────────────────────────────────────────────────────────

const FIELD_SEVERITY: Record<string, GapSeverity> = {
  // Critical — these drive the core decision
  "qualification.grad_visa_realism": "critical",
  "qualification.agreement_type": "critical",
  "qualification.referencing_provider": "critical",
  "qualification.credit_check": "critical",
  "rental.prices": "critical",
  "rental.cost_tier": "critical",
  "qualification.min_tenancy_months": "critical",

  // High — important for evaluation
  "qualification.international_friendly": "high",
  "qualification.visa_friendly": "high",
  "qualification.visa_expiry_handling": "high",
  "qualification.professional_guarantor_accepted": "high",
  "qualification.open_banking_accepted": "high",
  "evaluation.overall_grade": "high",
  "safety.overall": "high",
  "connectivity.times_to_anchors": "high",
  "demographics.primary_age_cohort": "high",

  // Medium — enriches the experience
  "building_quality.kitchen_quality": "medium",
  "building_quality.sound_insulation": "medium",
  "building_quality.thermal_performance": "medium",
  "building_quality.heating_type": "medium",
  "building_quality.epc_rating": "medium",
  "amenities.gym_quality": "medium",
  "resident_signal.summary": "medium",
  "long_form.full": "medium",
  "long_form.living_experience": "medium",
  "hero_image_url": "medium",
  "external_links": "medium",

  // Low — nice to have
  "long_form.history": "low",
  "long_form.vibe": "low",
  "long_form.weekday": "low",
  "long_form.weekend": "low",
  "long_form.notable": "low",
  "long_form.croydon_comparison": "low",
  "demographics.household_mix": "low",
  "demographics.ethnic_composition": "low",
  "demographics.age_breakdown": "low",
  "regeneration.recent_milestones": "low",
  "regeneration.upcoming_milestones": "low",
};

function getSeverity(field: string): GapSeverity {
  if (FIELD_SEVERITY[field]) return FIELD_SEVERITY[field];
  if (field.startsWith("qualification.")) return "high";
  if (field.startsWith("building_quality.")) return "medium";
  if (field.startsWith("long_form.")) return "low";
  if (field.startsWith("evaluation.")) return "medium";
  return "medium";
}

// ────────────────────────────────────────────────────────────────────
// Area-level gap checks
// ────────────────────────────────────────────────────────────────────

function checkAreaGaps(area: Area): Gap[] {
  const gaps: Gap[] = [];
  const g = (field: string, reason: GapReason, currentValue?: string) =>
    gaps.push({ area: area.id, areaName: area.name, field, reason, severity: getSeverity(field), currentValue });

  // Identity
  if (!area.hero_image_url) g("hero_image_url", "missing");
  if (isEmpty(area.headline)) g("headline", "empty");
  if (isEmpty(area.preview)) g("preview", "empty");
  if (isEmpty(area.aliases)) g("aliases", "empty");

  // Long-form (every sub-field)
  if (isEmpty(area.long_form.full)) g("long_form.full", "empty");
  if (isEmpty(area.long_form.history)) g("long_form.history", "empty");
  if (isEmpty(area.long_form.vibe)) g("long_form.vibe", "empty");
  if (isEmpty(area.long_form.weekday)) g("long_form.weekday", "empty");
  if (isEmpty(area.long_form.weekend)) g("long_form.weekend", "empty");
  if (isEmpty(area.long_form.notable)) g("long_form.notable", "empty");
  if (isEmpty(area.long_form.croydon_comparison)) g("long_form.croydon_comparison", "empty");
  if (isStubbed(area.long_form.full)) g("long_form.full", "stubbed", area.long_form.full.slice(0, 60));

  // Demographics
  if (isEmpty(area.demographics.age_breakdown)) g("demographics.age_breakdown", "empty");
  if (isEmpty(area.demographics.ethnic_composition)) g("demographics.ethnic_composition", "empty");
  if (isEmpty(area.demographics.household_mix)) g("demographics.household_mix", "empty");
  if (area.demographics.student_pct === 0 && area.demographics.professional_renter_pct === 0)
    g("demographics.pct_fields", "zero");
  if (isEmpty(area.demographics.notes)) g("demographics.notes", "empty");

  // Amenities (structured arrays)
  if (isEmpty(area.amenities.grocery)) g("amenities.grocery", "empty");
  if (isEmpty(area.amenities.gyms)) g("amenities.gyms", "empty");
  if (isEmpty(area.amenities.food_and_drink)) g("amenities.food_and_drink", "empty");
  if (isEmpty(area.amenities.health)) g("amenities.health", "empty");
  if (isEmpty(area.amenities.cultural)) g("amenities.cultural", "empty");
  if (isStubbed(area.amenities.notes)) g("amenities.notes", "stubbed", area.amenities.notes.slice(0, 60));

  // Safety
  if (isUnknown(area.safety.overall)) g("safety.overall", "unknown", "unknown");
  if (isEmpty(area.safety.after_dark_assessment)) g("safety.after_dark_assessment", "empty");
  if (isEmpty(area.safety.concerns)) g("safety.concerns", "empty");

  // Connectivity
  if (isEmpty(area.connectivity.primary_stations)) g("connectivity.primary_stations", "empty");
  if (isEmpty(area.connectivity.notes)) g("connectivity.notes", "empty");
  if (isEmpty(area.connectivity.sources)) g("connectivity.sources", "empty");

  // Green & water
  if (isEmpty(area.green_and_water.parks)) g("green_and_water.parks", "empty");
  if (isEmpty(area.green_and_water.overall_assessment)) g("green_and_water.overall_assessment", "empty");

  // Regeneration
  if (isEmpty(area.regeneration.recent_milestones)) g("regeneration.recent_milestones", "empty");
  if (isEmpty(area.regeneration.upcoming_milestones)) g("regeneration.upcoming_milestones", "empty");
  if (isEmpty(area.regeneration.trajectory_through_2027)) g("regeneration.trajectory_through_2027", "empty");
  if (isEmpty(area.regeneration.investment_pipeline)) g("regeneration.investment_pipeline", "empty");

  // Evaluation — per tier
  for (const tier of ["t1_foundational", "t2_daily_life", "t3_identity", "t5_personal"] as const) {
    const te = area.evaluation[tier];
    const unknowns = te.criteria.filter((c) => c.status === "unknown").length;
    if (unknowns > 0) g(`evaluation.${tier}.unknown_criteria`, "unknown", `${unknowns}/${te.criteria.length}`);
    const emptyReasoning = te.criteria.filter((c) => isEmpty(c.reasoning)).length;
    if (emptyReasoning > 0) g(`evaluation.${tier}.empty_reasoning`, "empty", `${emptyReasoning}/${te.criteria.length}`);
    if (isEmpty(te.tier_summary)) g(`evaluation.${tier}.tier_summary`, "empty");
    if (isStubbed(te.tier_summary)) g(`evaluation.${tier}.tier_summary`, "stubbed", te.tier_summary.slice(0, 60));
  }
  if (isEmpty(area.evaluation.grade_reasoning)) g("evaluation.grade_reasoning", "empty");

  // External links
  if (isEmpty(area.external_links)) g("external_links", "empty");

  // Research
  if (area.research.confidence === "low") g("research.confidence", "default", "low");

  // Projects count
  if (area.projects.length === 0) g("projects", "empty", "no projects");

  return gaps;
}

// ────────────────────────────────────────────────────────────────────
// Project-level gap checks — exhaustive
// ────────────────────────────────────────────────────────────────────

function checkProjectGaps(project: Project, areaId: string, areaName: string): Gap[] {
  const gaps: Gap[] = [];
  const g = (field: string, reason: GapReason, currentValue?: string) =>
    gaps.push({ area: areaId, areaName, project: project.id, projectName: project.name, field, reason, severity: getSeverity(field), currentValue });

  // Identity
  if (!project.hero_image_url) g("hero_image_url", "missing");
  if (isEmpty(project.headline)) g("headline", "empty");
  if (isEmpty(project.preview)) g("preview", "empty");
  if (!project.units_total) g("units_total", "missing");
  if (!project.storeys) g("storeys", "missing");
  if (!project.build_completed && project.build_phase === "complete") g("build_completed", "missing");

  // Rental qualification — every single field (post-redesign schema)
  const q = project.rental.qualification;
  if (isUnknown(q.grad_visa_realism)) g("qualification.grad_visa_realism", "unknown", "unknown");
  if (isUnknown(q.agreement_type)) g("qualification.agreement_type", "unknown", "unknown");
  if (isUnknown(q.referencing_provider)) g("qualification.referencing_provider", "unknown", "unknown");
  if (isUnknown(q.international_tenant_policy)) g("qualification.international_tenant_policy", "unknown", "unknown");
  if (isUnknown(q.visa_expiry_handling)) g("qualification.visa_expiry_handling", "unknown", "unknown");
  if (isUnknown(q.credit_check)) g("qualification.credit_check", "unknown", "unknown");
  if (isUnknown(q.open_banking_accepted)) g("qualification.open_banking_accepted", "unknown", "unknown");
  if (isUnknown(q.accepts_professional_guarantor)) g("qualification.accepts_professional_guarantor", "unknown", "unknown");
  if (isUnknown(q.accepts_individual_overseas_guarantor)) g("qualification.accepts_individual_overseas_guarantor", "unknown", "unknown");
  if (isUnknown(q.upfront_rent_policy)) g("qualification.upfront_rent_policy", "unknown", "unknown");
  if (isUnknown(q.qualification_flexibility_signal)) g("qualification.qualification_flexibility_signal", "unknown", "unknown");
  if (q.min_tenancy_months == null) g("qualification.min_tenancy_months", "missing");
  if (q.income_multiple == null) g("qualification.income_multiple", "missing");
  if (q.research_status === "unresearched") g("qualification.research_status", "unknown", "unresearched");
  if (isStubbed(q.notes)) g("qualification.notes", "stubbed", q.notes.slice(0, 60));

  // Cost tier
  if (!project.rental.cost_tier) g("rental.cost_tier", "missing");

  // Prices
  const prices = project.rental.prices;
  if (!prices.studio && !prices.one_bed && !prices.two_bed) g("rental.prices", "missing", "no price bands");
  if (isStubbed(prices.notes)) g("rental.prices.notes", "stubbed", prices.notes.slice(0, 60));

  // Building quality — every field
  const bq = project.building_quality;
  if (isUnknown(bq.sound_insulation)) g("building_quality.sound_insulation", "unknown", "unknown");
  if (isUnknown(bq.thermal_performance)) g("building_quality.thermal_performance", "unknown", "unknown");
  if (isUnknown(bq.kitchen_quality)) g("building_quality.kitchen_quality", "unknown", "unknown");
  if (isUnknown(bq.heating_type)) g("building_quality.heating_type", "unknown", "unknown");
  if (!bq.epc_rating) g("building_quality.epc_rating", "missing");
  if (isEmpty(bq.layout_notes)) g("building_quality.layout_notes", "empty");
  if (isEmpty(bq.notes) || isStubbed(bq.notes)) g("building_quality.notes", isEmpty(bq.notes) ? "empty" : "stubbed");

  // Amenities
  if (isUnknown(project.amenities.gym_quality) && project.amenities.gym) g("amenities.gym_quality", "unknown");
  if (isEmpty(project.amenities.pet_policy) || project.amenities.pet_policy === "unknown")
    g("amenities.pet_policy", isUnknown(project.amenities.pet_policy) ? "unknown" : "empty");

  // Architecture
  if (isEmpty(project.architecture.architects)) g("architecture.architects", "empty");
  if (isEmpty(project.architecture.style_notes)) g("architecture.style_notes", "empty");

  // Long-form
  if (isEmpty(project.long_form.full)) g("long_form.full", "empty");
  if (isEmpty(project.long_form.living_experience)) g("long_form.living_experience", "empty");
  if (isEmpty(project.long_form.notable_features)) g("long_form.notable_features", "empty");

  // Resident signal
  if (isEmpty(project.resident_signal.summary)) g("resident_signal.summary", "empty");
  if (!project.resident_signal.homeviews_score) g("resident_signal.homeviews_score", "missing");
  if (isEmpty(project.resident_signal.common_praise)) g("resident_signal.common_praise", "empty");
  if (isEmpty(project.resident_signal.common_complaints)) g("resident_signal.common_complaints", "empty");

  // Evaluation reasoning
  if (isEmpty(project.evaluation.t2_6_building_quality.reasoning))
    g("evaluation.t2_6.reasoning", "empty");
  if (isEmpty(project.evaluation.t4_1_amenity_package.reasoning))
    g("evaluation.t4_1.reasoning", "empty");
  if (isEmpty(project.evaluation.t4_4_signature_arch.reasoning))
    g("evaluation.t4_4.reasoning", "empty");
  if (isEmpty(project.evaluation.grade_reasoning)) g("evaluation.grade_reasoning", "empty");

  // External links
  if (isEmpty(project.external_links)) g("external_links", "empty");

  return gaps;
}

// ────────────────────────────────────────────────────────────────────
// Run
// ────────────────────────────────────────────────────────────────────

let allGaps: Gap[] = [];

for (const area of areas) {
  if (areaFilter && area.id !== areaFilter) continue;

  allGaps.push(...checkAreaGaps(area));

  for (const project of area.projects) {
    if (projectFilter && project.id !== projectFilter) continue;
    allGaps.push(...checkProjectGaps(project, area.id, area.name));
  }
}

// Apply filters
if (fieldFilter) allGaps = allGaps.filter((g) => g.field.includes(fieldFilter));
if (onlyEmpty) allGaps = allGaps.filter((g) => g.reason === "empty" || g.reason === "missing");
if (onlyUnknown) allGaps = allGaps.filter((g) => g.reason === "unknown");
if (severityFilter) allGaps = allGaps.filter((g) => g.severity === severityFilter);

// ────────────────────────────────────────────────────────────────────
// Output: JSON
// ────────────────────────────────────────────────────────────────────

if (jsonMode) {
  console.log(JSON.stringify(allGaps, null, 2));
  process.exit(0);
}

// ────────────────────────────────────────────────────────────────────
// Output: CSV
// ────────────────────────────────────────────────────────────────────

if (csvMode) {
  console.log("area,area_name,project,project_name,field,reason,severity,current_value");
  for (const gap of allGaps) {
    const row = [
      gap.area,
      `"${gap.areaName}"`,
      gap.project ?? "",
      gap.projectName ? `"${gap.projectName}"` : "",
      gap.field,
      gap.reason,
      gap.severity,
      gap.currentValue ? `"${gap.currentValue}"` : "",
    ];
    console.log(row.join(","));
  }
  process.exit(0);
}

// ────────────────────────────────────────────────────────────────────
// Output: stats command
// ────────────────────────────────────────────────────────────────────

const projectCount = areas.reduce((sum, a) => sum + a.projects.length, 0);

if (command === "stats") {
  const bySeverity = { critical: 0, high: 0, medium: 0, low: 0 };
  const byReason = new Map<string, number>();
  for (const gap of allGaps) {
    bySeverity[gap.severity]++;
    byReason.set(gap.reason, (byReason.get(gap.reason) ?? 0) + 1);
  }

  console.log(`\n  Dataset: ${areas.length} areas, ${projectCount} projects\n`);
  console.log("  Gaps by severity:");
  console.log(`    Critical: ${bySeverity.critical}`);
  console.log(`    High:     ${bySeverity.high}`);
  console.log(`    Medium:   ${bySeverity.medium}`);
  console.log(`    Low:      ${bySeverity.low}`);
  console.log(`    Total:    ${allGaps.length}\n`);
  console.log("  Gaps by reason:");
  for (const [reason, count] of [...byReason.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`    ${reason.padEnd(12)} ${count}`);
  }
  console.log();
  process.exit(0);
}

// ────────────────────────────────────────────────────────────────────
// Output: coverage command
// ────────────────────────────────────────────────────────────────────

if (command === "coverage") {
  // Estimate total possible fields per area and per project
  const AREA_FIELDS = 35; // approximate field count for a fully populated area
  const PROJECT_FIELDS = 30; // approximate field count for a fully populated project

  console.log(`\n  Coverage by area:\n`);
  console.log("  ┌──────────────────────────────────┬──────┬──────────┬───────────┐");
  console.log("  │ Area                             │ Proj │ Area gaps│ Proj gaps │");
  console.log("  ├──────────────────────────────────┼──────┼──────────┼───────────┤");

  for (const area of areas) {
    if (areaFilter && area.id !== areaFilter) continue;
    const areaGaps = allGaps.filter((g) => g.area === area.id && !g.project);
    const projGaps = allGaps.filter((g) => g.area === area.id && g.project);
    console.log(`  │ ${area.name.slice(0, 32).padEnd(32)} │ ${String(area.projects.length).padStart(4)} │ ${String(areaGaps.length).padStart(8)} │ ${String(projGaps.length).padStart(9)} │`);
  }

  console.log("  └──────────────────────────────────┴──────┴──────────┴───────────┘\n");
  process.exit(0);
}

// ────────────────────────────────────────────────────────────────────
// Output: fields command
// ────────────────────────────────────────────────────────────────────

if (command === "fields") {
  const fieldCounts = new Map<string, { total: number; filled: number }>();

  // Count from gaps — every gap is a missing field
  for (const gap of allGaps) {
    if (!fieldCounts.has(gap.field)) fieldCounts.set(gap.field, { total: 0, filled: 0 });
  }

  // Build the total counts from the gap data
  const gapsByField = new Map<string, number>();
  for (const gap of allGaps) {
    gapsByField.set(gap.field, (gapsByField.get(gap.field) ?? 0) + 1);
  }

  console.log(`\n  Field completeness (${areas.length} areas, ${projectCount} projects):\n`);
  console.log("  ┌─────────────────────────────────────────────────┬───────┬──────────┐");
  console.log("  │ Field                                           │ Gaps  │ Severity │");
  console.log("  ├─────────────────────────────────────────────────┼───────┼──────────┤");

  const sorted = [...gapsByField.entries()].sort((a, b) => {
    const sevA = getSeverity(a[0]);
    const sevB = getSeverity(b[0]);
    const sevOrder = { critical: 0, high: 1, medium: 2, low: 3 };
    if (sevOrder[sevA] !== sevOrder[sevB]) return sevOrder[sevA] - sevOrder[sevB];
    return b[1] - a[1];
  });

  for (const [field, count] of sorted) {
    const sev = getSeverity(field);
    const sevLabel = sev === "critical" ? "CRIT" : sev === "high" ? "HIGH" : sev === "medium" ? "MED " : "LOW ";
    console.log(`  │ ${field.padEnd(47)} │ ${String(count).padStart(5)} │ ${sevLabel.padStart(8)} │`);
  }

  console.log("  └─────────────────────────────────────────────────┴───────┴──────────┘\n");
  process.exit(0);
}

// ────────────────────────────────────────────────────────────────────
// Output: gaps (default) — summary table
// ────────────────────────────────────────────────────────────────────

const fieldCounts = new Map<string, number>();
for (const gap of allGaps) {
  fieldCounts.set(gap.field, (fieldCounts.get(gap.field) ?? 0) + 1);
}

const sortedFields = [...fieldCounts.entries()].sort((a, b) => b[1] - a[1]);

console.log(`\n  Gap analysis: ${areas.length} areas, ${projectCount} projects\n`);
console.log("  ┌─────────────────────────────────────────────────┬───────┐");
console.log("  │ Field                                           │ Gaps  │");
console.log("  ├─────────────────────────────────────────────────┼───────┤");
for (const [field, count] of sortedFields) {
  console.log(`  │ ${field.padEnd(47)} │ ${String(count).padStart(5)} │`);
}
console.log("  └─────────────────────────────────────────────────┴───────┘");
console.log(`\n  Total gaps: ${allGaps.length}\n`);

if (summaryOnly) process.exit(0);

// Per-entry detail
const byEntry = new Map<string, Gap[]>();
for (const gap of allGaps) {
  const key = gap.project ? `${gap.areaName} / ${gap.projectName}` : gap.areaName;
  if (!byEntry.has(key)) byEntry.set(key, []);
  byEntry.get(key)!.push(gap);
}

for (const [key, gaps] of byEntry) {
  console.log(`  ${key}:`);
  for (const gap of gaps) {
    const sevTag = gap.severity === "critical" ? "[CRIT]" : gap.severity === "high" ? "[HIGH]" : gap.severity === "medium" ? "[MED]" : "[LOW]";
    const valTag = gap.currentValue ? ` (${gap.currentValue})` : "";
    console.log(`    ${sevTag} ${gap.field} — ${gap.reason}${valTag}`);
  }
  console.log();
}
