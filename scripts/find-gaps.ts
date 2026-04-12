// Gap-finder script.
//
// Scans every area and project for fields that are empty, unknown, or
// stubbed. Outputs a structured report that makes it easy to dispatch
// targeted research agents for specific missing data.
//
// Run via: pnpm exec tsx scripts/find-gaps.ts
//
// Options:
//   --json           Output as JSON instead of human-readable
//   --area <id>      Show gaps for a single area only
//   --field <name>   Show only areas/projects missing a specific field
//   --summary        Show only the summary table, not per-entry detail

import { areas } from "../src/areas/data/index";
import type { Area, Project } from "../src/areas/types";

const args = process.argv.slice(2);
const jsonMode = args.includes("--json");
const summaryOnly = args.includes("--summary");
const areaFilter = args.includes("--area") ? args[args.indexOf("--area") + 1] : null;
const fieldFilter = args.includes("--field") ? args[args.indexOf("--field") + 1] : null;

// ────────────────────────────────────────────────────────────────────
// Gap definitions
// ────────────────────────────────────────────────────────────────────

interface Gap {
  area: string;
  project?: string;
  field: string;
  reason: string;
}

function isEmpty(v: unknown): boolean {
  if (v === undefined || v === null) return true;
  if (typeof v === "string") return v.trim().length === 0;
  if (Array.isArray(v)) return v.length === 0;
  return false;
}

function isUnknown(v: unknown): boolean {
  return v === "unknown";
}

// ────────────────────────────────────────────────────────────────────
// Area-level gap checks
// ────────────────────────────────────────────────────────────────────

function checkAreaGaps(area: Area): Gap[] {
  const gaps: Gap[] = [];
  const g = (field: string, reason: string) =>
    gaps.push({ area: area.id, field, reason });

  // Long-form
  if (isEmpty(area.long_form.full)) g("long_form.full", "empty");
  if (isEmpty(area.long_form.history)) g("long_form.history", "empty");
  if (isEmpty(area.long_form.vibe)) g("long_form.vibe", "empty");
  if (isEmpty(area.long_form.weekday)) g("long_form.weekday", "empty");
  if (isEmpty(area.long_form.weekend)) g("long_form.weekend", "empty");
  if (isEmpty(area.long_form.notable)) g("long_form.notable", "empty");
  if (isEmpty(area.long_form.croydon_comparison)) g("long_form.croydon_comparison", "empty");

  // Demographics
  if (isEmpty(area.demographics.age_breakdown)) g("demographics.age_breakdown", "empty array");
  if (isEmpty(area.demographics.ethnic_composition)) g("demographics.ethnic_composition", "empty array");
  if (isEmpty(area.demographics.household_mix)) g("demographics.household_mix", "empty array");
  if (area.demographics.student_pct === 0 && area.demographics.professional_renter_pct === 0)
    g("demographics.pct_fields", "both zero — likely unstubbed");

  // Amenities
  if (isEmpty(area.amenities.grocery)) g("amenities.grocery", "empty array");
  if (isEmpty(area.amenities.gyms)) g("amenities.gyms", "empty array");
  if (isEmpty(area.amenities.food_and_drink)) g("amenities.food_and_drink", "empty array");

  // Safety
  if (isUnknown(area.safety.overall)) g("safety.overall", "unknown");
  if (isEmpty(area.safety.after_dark_assessment)) g("safety.after_dark_assessment", "empty");

  // Connectivity
  if (isEmpty(area.connectivity.primary_stations)) g("connectivity.primary_stations", "empty array");

  // Regeneration
  if (isEmpty(area.regeneration.recent_milestones)) g("regeneration.recent_milestones", "empty array");
  if (isEmpty(area.regeneration.upcoming_milestones)) g("regeneration.upcoming_milestones", "empty array");
  if (isEmpty(area.regeneration.trajectory_through_2027)) g("regeneration.trajectory_through_2027", "empty");

  // Evaluation
  for (const tier of ["t1_foundational", "t2_daily_life", "t3_identity", "t5_personal"] as const) {
    const te = area.evaluation[tier];
    const unknowns = te.criteria.filter((c) => c.status === "unknown").length;
    if (unknowns > 0) g(`evaluation.${tier}`, `${unknowns} unknown criteria`);
    const emptyReasoning = te.criteria.filter((c) => isEmpty(c.reasoning)).length;
    if (emptyReasoning > 0) g(`evaluation.${tier}.reasoning`, `${emptyReasoning} empty reasoning`);
  }

  // External links
  if (isEmpty(area.external_links)) g("external_links", "empty array");

  // Hero image
  if (!area.hero_image_url) g("hero_image_url", "missing");

  return gaps;
}

// ────────────────────────────────────────────────────────────────────
// Project-level gap checks
// ────────────────────────────────────────────────────────────────────

function checkProjectGaps(project: Project, areaId: string): Gap[] {
  const gaps: Gap[] = [];
  const g = (field: string, reason: string) =>
    gaps.push({ area: areaId, project: project.id, field, reason });

  // Rental qualification (most important)
  const q = project.rental.qualification;
  if (isUnknown(q.grad_visa_realism)) g("qualification.grad_visa_realism", "unknown");
  if (isUnknown(q.international_friendly)) g("qualification.international_friendly", "unknown");
  if (isUnknown(q.visa_friendly)) g("qualification.visa_friendly", "unknown");
  if (isUnknown(q.visa_expiry_handling)) g("qualification.visa_expiry_handling", "unknown");
  if (isUnknown(q.credit_check)) g("qualification.credit_check", "unknown — actually 'standard' stub");
  if (q.min_tenancy_months == null) g("qualification.min_tenancy_months", "missing");

  // Cost tier
  if (!project.rental.cost_tier) g("rental.cost_tier", "missing");

  // Prices
  const prices = project.rental.prices;
  if (!prices.studio && !prices.one_bed && !prices.two_bed) g("rental.prices", "no price bands");

  // Building quality
  const bq = project.building_quality;
  if (isUnknown(bq.sound_insulation)) g("building_quality.sound_insulation", "unknown");
  if (isUnknown(bq.thermal_performance)) g("building_quality.thermal_performance", "unknown");
  if (isUnknown(bq.kitchen_quality)) g("building_quality.kitchen_quality", "unknown");
  if (isUnknown(bq.heating_type)) g("building_quality.heating_type", "unknown");
  if (!bq.epc_rating) g("building_quality.epc_rating", "missing");

  // Amenities
  if (isUnknown(project.amenities.gym_quality)) g("amenities.gym_quality", "unknown");

  // Long-form
  if (isEmpty(project.long_form.full)) g("long_form.full", "empty");
  if (isEmpty(project.long_form.living_experience)) g("long_form.living_experience", "empty");

  // Resident signal
  if (isEmpty(project.resident_signal.summary)) g("resident_signal.summary", "empty");

  // Evaluation reasoning
  if (isEmpty(project.evaluation.t2_6_building_quality.reasoning))
    g("evaluation.t2_6.reasoning", "empty");
  if (isEmpty(project.evaluation.t4_1_amenity_package.reasoning))
    g("evaluation.t4_1.reasoning", "empty");
  if (isEmpty(project.evaluation.t4_4_signature_arch.reasoning))
    g("evaluation.t4_4.reasoning", "empty");

  // Hero image
  if (!project.hero_image_url) g("hero_image_url", "missing");

  // External links
  if (isEmpty(project.external_links)) g("external_links", "empty array");

  return gaps;
}

// ────────────────────────────────────────────────────────────────────
// Run
// ────────────────────────────────────────────────────────────────────

const allGaps: Gap[] = [];

for (const area of areas) {
  if (areaFilter && area.id !== areaFilter) continue;

  allGaps.push(...checkAreaGaps(area));

  for (const project of area.projects) {
    allGaps.push(...checkProjectGaps(project, area.id));
  }
}

// Apply field filter
const filtered = fieldFilter
  ? allGaps.filter((g) => g.field.includes(fieldFilter))
  : allGaps;

// ────────────────────────────────────────────────────────────────────
// Output
// ────────────────────────────────────────────────────────────────────

if (jsonMode) {
  console.log(JSON.stringify(filtered, null, 2));
  process.exit(0);
}

// Summary table: gap counts by field
const fieldCounts = new Map<string, number>();
for (const gap of filtered) {
  fieldCounts.set(gap.field, (fieldCounts.get(gap.field) ?? 0) + 1);
}

const sortedFields = [...fieldCounts.entries()].sort((a, b) => b[1] - a[1]);

const projectCount = areas.reduce((sum, a) => sum + a.projects.length, 0);

console.log(`\n  Gap analysis: ${areas.length} areas, ${projectCount} projects\n`);
console.log("  ┌─────────────────────────────────────────────────┬───────┐");
console.log("  │ Field                                           │ Gaps  │");
console.log("  ├─────────────────────────────────────────────────┼───────┤");
for (const [field, count] of sortedFields) {
  console.log(`  │ ${field.padEnd(47)} │ ${String(count).padStart(5)} │`);
}
console.log("  └─────────────────────────────────────────────────┴───────┘");
console.log(`\n  Total gaps: ${filtered.length}\n`);

if (summaryOnly) process.exit(0);

// Per-area detail
const byArea = new Map<string, Gap[]>();
for (const gap of filtered) {
  const key = gap.project ? `${gap.area} / ${gap.project}` : gap.area;
  if (!byArea.has(key)) byArea.set(key, []);
  byArea.get(key)!.push(gap);
}

for (const [key, gaps] of byArea) {
  console.log(`  ${key}:`);
  for (const gap of gaps) {
    console.log(`    · ${gap.field} — ${gap.reason}`);
  }
  console.log();
}
