// Phase B7 validation script.
//
// Loads every area file via tsx and reports structural problems:
//   - Missing required fields
//   - Inconsistent area_id ↔ project.area_id back-references
//   - Duplicate IDs
//   - Empty long-form fields (warns, doesn't fail)
//   - Open question count per area (informational)
//
// Run via: pnpm exec tsx scripts/validate-areas.ts

import { areas } from "../src/areas/data/index";
import type { Area, Project } from "../src/areas/types";

let errors = 0;
let warnings = 0;
const seenAreaIds = new Set<string>();
const seenProjectIds = new Map<string, Set<string>>(); // areaId → Set of project ids

const REQUIRED_AREA_FIELDS = [
  "id", "name", "borough", "headline", "preview",
  "long_form", "zones", "connectivity", "demographics", "safety",
  "green_and_water", "amenities", "regeneration", "evaluation",
  "projects", "external_links", "personal_notes", "research",
];

const REQUIRED_LONG_FORM_FIELDS = [
  "full", "history", "vibe", "weekday", "weekend", "notable", "croydon_comparison",
];

const REQUIRED_PROJECT_FIELDS = [
  "id", "name", "area_id", "headline", "preview",
  "developer", "operator", "building_type", "build_phase",
  "rental", "building_quality", "amenities", "architecture",
  "long_form", "resident_signal", "evaluation", "external_links", "research",
];

function err(msg: string): void {
  console.error(`✗ ${msg}`);
  errors++;
}

function warn(msg: string): void {
  console.warn(`⚠ ${msg}`);
  warnings++;
}

function checkArea(area: Area): void {
  // Required fields
  for (const f of REQUIRED_AREA_FIELDS) {
    if (!(f in area)) {
      err(`Area ${area.id ?? "?"} missing required field: ${f}`);
    }
  }

  // Duplicate ID
  if (seenAreaIds.has(area.id)) {
    err(`Duplicate area id: ${area.id}`);
  }
  seenAreaIds.add(area.id);

  // Long-form sub-fields
  if (area.long_form) {
    const lf = area.long_form as unknown as Record<string, unknown>;
    for (const f of REQUIRED_LONG_FORM_FIELDS) {
      if (!(f in lf)) {
        err(`Area ${area.id} missing long_form.${f}`);
      } else {
        const v = lf[f];
        if (typeof v === "string" && v.trim().length === 0) {
          warn(`Area ${area.id} has empty long_form.${f} (will be filled by Phase F sweep)`);
        }
      }
    }
  }

  // Connectivity sanity
  if (area.connectivity) {
    const ms = area.connectivity.multi_cluster_score;
    const rs = area.connectivity.redundancy_score;
    if (typeof ms !== "number" || ms < 0 || ms > 5) {
      err(`Area ${area.id} multi_cluster_score out of range: ${ms}`);
    }
    if (typeof rs !== "number" || rs < 0 || rs > 5) {
      err(`Area ${area.id} redundancy_score out of range: ${rs}`);
    }
  }

  // Evaluation sanity
  if (area.evaluation) {
    const tierKeys = ["t1_foundational", "t2_daily_life", "t3_identity", "t5_personal"] as const;
    for (const tier of tierKeys) {
      const tierEval = area.evaluation[tier];
      if (!tierEval) {
        err(`Area ${area.id} missing evaluation.${tier}`);
        continue;
      }
      if (!Array.isArray(tierEval.criteria) || tierEval.criteria.length === 0) {
        err(`Area ${area.id}.evaluation.${tier} has no criteria`);
      }
    }
    if (!area.evaluation.overall_grade) {
      err(`Area ${area.id} missing overall_grade`);
    }
  }

  // Open questions (informational)
  const openCount = area.research?.open_questions?.length ?? 0;
  if (openCount > 0) {
    console.log(`  ℹ ${area.id}: ${openCount} open question(s)`);
  }

  // Projects
  if (!Array.isArray(area.projects)) {
    err(`Area ${area.id} projects is not an array`);
    return;
  }

  if (!seenProjectIds.has(area.id)) {
    seenProjectIds.set(area.id, new Set());
  }
  const projectSet = seenProjectIds.get(area.id)!;

  for (const project of area.projects) {
    checkProject(project, area, projectSet);
  }
}

function checkProject(project: Project, area: Area, projectSet: Set<string>): void {
  // Required fields
  for (const f of REQUIRED_PROJECT_FIELDS) {
    if (!(f in project)) {
      err(`Project ${area.id}/${project.id ?? "?"} missing required field: ${f}`);
    }
  }

  // Back-reference
  if (project.area_id !== area.id) {
    err(`Project ${project.id} has area_id "${project.area_id}" but lives under area "${area.id}"`);
  }

  // Duplicate within area
  if (projectSet.has(project.id)) {
    err(`Duplicate project id "${project.id}" in area "${area.id}"`);
  }
  projectSet.add(project.id);

  // Rental qualification — the most important section
  if (!project.rental?.qualification) {
    err(`Project ${area.id}/${project.id} missing rental.qualification block`);
  } else {
    const realism = project.rental.qualification.grad_visa_realism;
    if (!["achievable", "achievable-with-guarantor", "licence-exempt", "unlikely", "blocked", "unclear", "unknown"].includes(realism)) {
      err(`Project ${area.id}/${project.id} has invalid grad_visa_realism: ${realism}`);
    }
  }

  // Evaluation
  if (!project.evaluation?.overall_grade) {
    err(`Project ${area.id}/${project.id} missing evaluation.overall_grade`);
  }
}

console.log(`\nValidating ${areas.length} areas...\n`);

for (const area of areas) {
  checkArea(area);
}

const projectCount = areas.reduce((sum, a) => sum + a.projects.length, 0);

console.log(`\n────────────────────────────`);
console.log(`Areas:    ${areas.length}`);
console.log(`Projects: ${projectCount}`);
console.log(`Errors:   ${errors}`);
console.log(`Warnings: ${warnings}`);
console.log(`────────────────────────────\n`);

if (errors > 0) {
  console.error("Validation FAILED.");
  process.exit(1);
}
console.log("Validation passed.");
