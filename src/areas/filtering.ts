// Pure filter functions for the area browser.
//
// All filter logic lives here. Functions are framework-agnostic and unit-testable
// in isolation. The data model is two-tier (Area → Project), and filters can apply
// at either layer:
//   - Area-level filters narrow the area grid directly.
//   - Project-level filters narrow which projects within an area pass — and
//     surface only areas containing at least one passing project.
//
// Within-category semantics are OR (selecting Zone 2 + Zone 3 matches either).
// Across-category semantics are AND (zones AND age cohort AND grade all apply).
// This is the standard faceted-search behaviour and is what every other tool does.
// The OR-within-category fix is deliberate; the previous AND-within-category bug
// was flagged in `notes.md` and is fixed here as part of the refactor.

import type {
  Area,
  FilterState,
  Grade,
  GradVisaRealism,
  Project,
  ProjectSortMode,
  SortMode,
} from "./types";
import { gradeOrder } from "./types";

// ────────────────────────────────────────────────────────────────────────────
// State construction and mutation
// ────────────────────────────────────────────────────────────────────────────

export function createInitialFilterState(): FilterState {
  return {
    zones: new Set(),
    primary_age_cohorts: new Set(),
    area_grades: new Set(),
    multi_cluster_min: 0,
    has_river: false,
    has_canal: false,
    has_dock: false,
    regeneration_status: new Set(),
    boroughs: new Set(),
    tenure: new Set(),
    building_types: new Set(),
    living_models: new Set(),
    grad_visa_realism: new Set(),
    affordability: new Set(),
    project_grades: new Set(),
    cost_tiers: new Set(),
    agreement_types: new Set(),
    referencing_providers: new Set(),
    price_transparency: new Set(),
    has_pool: false,
    has_concierge: false,
    query: "",
  };
}

/**
 * Immutably toggles a value in/out of a Set-typed filter category.
 * Returns a new FilterState with every Set freshly cloned, so React's
 * reference-based diffing sees a clean change.
 */
export function toggleSetFilter<K extends keyof FilterState>(
  state: FilterState,
  key: K,
  value: FilterState[K] extends Set<infer V> ? V : never,
): FilterState {
  const next = cloneFilterState(state);
  const target = next[key] as unknown as Set<unknown>;
  if (target.has(value)) {
    target.delete(value);
  } else {
    target.add(value);
  }
  return next;
}

export function setBooleanFilter<K extends keyof FilterState>(
  state: FilterState,
  key: K,
  value: FilterState[K] extends boolean ? boolean : never,
): FilterState {
  const next = cloneFilterState(state);
  (next as unknown as Record<string, unknown>)[key as string] = value;
  return next;
}

export function setNumberFilter<K extends keyof FilterState>(
  state: FilterState,
  key: K,
  value: FilterState[K] extends number ? number : never,
): FilterState {
  const next = cloneFilterState(state);
  (next as unknown as Record<string, unknown>)[key as string] = value;
  return next;
}

export function setQuery(state: FilterState, query: string): FilterState {
  const next = cloneFilterState(state);
  next.query = query;
  return next;
}

function cloneFilterState(state: FilterState): FilterState {
  return {
    zones: new Set(state.zones),
    primary_age_cohorts: new Set(state.primary_age_cohorts),
    area_grades: new Set(state.area_grades),
    multi_cluster_min: state.multi_cluster_min,
    has_river: state.has_river,
    has_canal: state.has_canal,
    has_dock: state.has_dock,
    regeneration_status: new Set(state.regeneration_status),
    boroughs: new Set(state.boroughs),
    tenure: new Set(state.tenure),
    building_types: new Set(state.building_types),
    living_models: new Set(state.living_models),
    grad_visa_realism: new Set(state.grad_visa_realism),
    affordability: new Set(state.affordability),
    project_grades: new Set(state.project_grades),
    cost_tiers: new Set(state.cost_tiers),
    agreement_types: new Set(state.agreement_types),
    referencing_providers: new Set(state.referencing_providers),
    price_transparency: new Set(state.price_transparency),
    has_pool: state.has_pool,
    has_concierge: state.has_concierge,
    query: state.query,
  };
}

// ────────────────────────────────────────────────────────────────────────────
// Search text construction
// ────────────────────────────────────────────────────────────────────────────

export function buildAreaSearchText(area: Area): string {
  const parts: string[] = [
    area.name,
    area.borough,
    ...area.aliases,
    ...area.postcodes,
    area.headline,
    area.preview,
    area.long_form.full,
    area.long_form.history,
    area.long_form.vibe,
    area.long_form.notable,
    area.long_form.croydon_comparison,
    ...area.connectivity.lines.map((l) => l.name),
    ...area.connectivity.primary_stations.map((s) => s.name),
  ];
  for (const project of area.projects) {
    parts.push(project.name, project.developer, project.operator, project.headline, project.preview);
  }
  return parts.join(" ").toLowerCase();
}

// ────────────────────────────────────────────────────────────────────────────
// Filter predicates
// ────────────────────────────────────────────────────────────────────────────

/**
 * Tests whether an Area passes the area-level portion of the filter state.
 * Project-level filters are evaluated separately by `projectPasses`.
 */
export function areaPassesAreaFilters(area: Area, state: FilterState): boolean {
  // Zones — OR within category
  if (state.zones.size > 0) {
    const anyZoneMatch = area.zones.some((z) => state.zones.has(z));
    if (!anyZoneMatch) return false;
  }

  // Primary age cohort — OR within
  if (state.primary_age_cohorts.size > 0) {
    if (!state.primary_age_cohorts.has(area.demographics.primary_age_cohort)) {
      return false;
    }
  }

  // Area grade — OR within
  if (state.area_grades.size > 0) {
    if (!state.area_grades.has(area.evaluation.overall_grade)) {
      return false;
    }
  }

  // Multi-cluster commute floor
  if (area.connectivity.multi_cluster_score < state.multi_cluster_min) {
    return false;
  }

  // Boolean toggles
  if (state.has_river && !area.green_and_water.has_river) return false;
  if (state.has_canal && !area.green_and_water.has_canal) return false;
  if (state.has_dock && !area.green_and_water.has_dock) return false;

  // Regeneration status — OR within
  if (state.regeneration_status.size > 0) {
    if (!state.regeneration_status.has(area.regeneration.status)) {
      return false;
    }
  }

  // Borough — OR within
  if (state.boroughs.size > 0) {
    if (!state.boroughs.has(area.borough)) return false;
  }

  return true;
}

/**
 * Tests whether a single project passes the project-level filters.
 */
export function projectPasses(project: Project, state: FilterState): boolean {
  // Tenure
  if (state.tenure.size > 0) {
    const anyTenure = project.rental.tenure.some((t) => state.tenure.has(t));
    if (!anyTenure) return false;
  }

  // Building type
  if (state.building_types.size > 0) {
    if (!state.building_types.has(project.building_type)) return false;
  }

  // Living model
  if (state.living_models.size > 0) {
    if (!state.living_models.has(project.living_model)) return false;
  }

  // Graduate-visa realism — the unique-to-Flatbrowser filter
  if (state.grad_visa_realism.size > 0) {
    if (!state.grad_visa_realism.has(project.rental.qualification.grad_visa_realism)) {
      return false;
    }
  }

  // Affordability — relative to Caner's envelope, pairs with realism on the card
  if (state.affordability.size > 0) {
    if (!state.affordability.has(project.rental.affordability)) {
      return false;
    }
  }

  // Project grade
  if (state.project_grades.size > 0) {
    if (!state.project_grades.has(project.evaluation.overall_grade)) {
      return false;
    }
  }

  // Cost tier
  if (state.cost_tiers.size > 0) {
    if (!project.rental.cost_tier || !state.cost_tiers.has(project.rental.cost_tier)) {
      return false;
    }
  }

  // Agreement type
  if (state.agreement_types.size > 0) {
    if (!state.agreement_types.has(project.rental.qualification.agreement_type)) {
      return false;
    }
  }

  // Referencing provider
  if (state.referencing_providers.size > 0) {
    if (!state.referencing_providers.has(project.rental.qualification.referencing_provider)) {
      return false;
    }
  }

  // Price transparency
  if (state.price_transparency.size > 0) {
    if (!state.price_transparency.has(project.rental.price_transparency)) {
      return false;
    }
  }

  // Pool / concierge toggles
  if (state.has_pool && !project.amenities.pool) return false;
  if (state.has_concierge && project.amenities.concierge === "none") {
    return false;
  }

  return true;
}

/**
 * Tests whether an Area should appear in the grid given the full filter state.
 * The Area must pass area-level filters AND, if any project-level filter is active,
 * must contain at least one project that passes the project filters.
 */
export function areaPasses(area: Area, state: FilterState): boolean {
  if (!areaPassesAreaFilters(area, state)) return false;

  if (hasActiveProjectFilters(state)) {
    const anyProjectMatches = area.projects.some((p) => projectPasses(p, state));
    if (!anyProjectMatches) return false;
  }

  // Free-text query
  if (state.query) {
    const text = buildAreaSearchText(area);
    if (!text.includes(state.query.toLowerCase())) return false;
  }

  return true;
}

export function hasActiveProjectFilters(state: FilterState): boolean {
  return (
    state.tenure.size > 0 ||
    state.building_types.size > 0 ||
    state.living_models.size > 0 ||
    state.grad_visa_realism.size > 0 ||
    state.affordability.size > 0 ||
    state.project_grades.size > 0 ||
    state.cost_tiers.size > 0 ||
    state.agreement_types.size > 0 ||
    state.referencing_providers.size > 0 ||
    state.price_transparency.size > 0 ||
    state.has_pool ||
    state.has_concierge
  );
}

export function hasActiveAreaFilters(state: FilterState): boolean {
  return (
    state.zones.size > 0 ||
    state.primary_age_cohorts.size > 0 ||
    state.area_grades.size > 0 ||
    state.multi_cluster_min > 0 ||
    state.has_river ||
    state.has_canal ||
    state.has_dock ||
    state.regeneration_status.size > 0 ||
    state.boroughs.size > 0
  );
}

export function hasAnyActiveFilters(state: FilterState): boolean {
  return (
    hasActiveAreaFilters(state) ||
    hasActiveProjectFilters(state) ||
    state.query.length > 0
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Sorting
// ────────────────────────────────────────────────────────────────────────────

export function sortAreas(areas: Area[], mode: SortMode): Area[] {
  const sorted = [...areas];
  switch (mode) {
    case "area-grade":
      sorted.sort((a, b) => {
        const ga = gradeOrder[a.evaluation.overall_grade];
        const gb = gradeOrder[b.evaluation.overall_grade];
        if (ga !== gb) return ga - gb;
        return a.name.localeCompare(b.name);
      });
      break;
    case "best-project-grade":
      sorted.sort((a, b) => {
        const ga = bestProjectGradeRank(a);
        const gb = bestProjectGradeRank(b);
        if (ga !== gb) return ga - gb;
        return a.name.localeCompare(b.name);
      });
      break;
    case "name":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }
  return sorted;
}

function bestProjectGradeRank(area: Area): number {
  if (area.projects.length === 0) {
    // Areas with no projects fall back to area grade so they don't sink.
    return gradeOrder[area.evaluation.overall_grade];
  }
  let best = Number.POSITIVE_INFINITY;
  for (const p of area.projects) {
    const r = gradeOrder[p.evaluation.overall_grade];
    if (r < best) best = r;
  }
  return best;
}

// ────────────────────────────────────────────────────────────────────────────
// Project-view filtering and sorting
// ────────────────────────────────────────────────────────────────────────────

/** Ordering for the `realism` project sort mode — achievable surfaces first. */
const realismOrder: Record<GradVisaRealism, number> = {
  achievable: 0,
  "licence-exempt": 1,
  "achievable-with-guarantor": 2,
  unclear: 3,
  unknown: 4,
  unlikely: 5,
  blocked: 6,
};

/**
 * Walks every project across every area and returns the flat list of
 * projects that pass the full filter state. The parent area is looked up
 * for each project to apply area-level filters inherited through the
 * project's `area_id` back-reference.
 *
 * This is the project-view counterpart to `areaPasses` — same semantics,
 * flattened result shape.
 */
export function flattenAndFilterProjects(
  areas: Area[],
  state: FilterState,
): Array<{ project: Project; area: Area }> {
  const areasById = new Map<string, Area>();
  for (const a of areas) areasById.set(a.id, a);

  const queryLower = state.query.trim().toLowerCase();

  const result: Array<{ project: Project; area: Area }> = [];
  for (const area of areas) {
    // Apply area-level filters inherited by every project in the area.
    if (!areaPassesAreaFilters(area, state)) continue;

    for (const project of area.projects) {
      if (!projectPasses(project, state)) continue;

      // Free-text search — run against both area and project fields.
      if (queryLower) {
        const areaText = buildAreaSearchText(area);
        const projectText = `${project.name} ${project.developer} ${project.operator} ${project.headline} ${project.preview}`.toLowerCase();
        if (!areaText.includes(queryLower) && !projectText.includes(queryLower)) continue;
      }

      result.push({ project, area });
    }
  }
  return result;
}

/** Returns the lowest (cheapest) monthly rent visible on a project, or Infinity. */
function minProjectPrice(project: Project): number {
  const { studio, one_bed, two_bed } = project.rental.prices;
  const candidates = [studio?.min, one_bed?.min, two_bed?.min].filter(
    (v): v is number => typeof v === "number",
  );
  if (candidates.length === 0) return Number.POSITIVE_INFINITY;
  return Math.min(...candidates);
}

export function sortProjects(
  entries: Array<{ project: Project; area: Area }>,
  mode: ProjectSortMode,
): Array<{ project: Project; area: Area }> {
  const sorted = [...entries];
  switch (mode) {
    case "realism":
      sorted.sort((a, b) => {
        const ra = realismOrder[a.project.rental.qualification.grad_visa_realism];
        const rb = realismOrder[b.project.rental.qualification.grad_visa_realism];
        if (ra !== rb) return ra - rb;
        // Ties broken by project grade, then name.
        const ga = gradeOrder[a.project.evaluation.overall_grade];
        const gb = gradeOrder[b.project.evaluation.overall_grade];
        if (ga !== gb) return ga - gb;
        return a.project.name.localeCompare(b.project.name);
      });
      break;
    case "project-grade":
      sorted.sort((a, b) => {
        const ga = gradeOrder[a.project.evaluation.overall_grade];
        const gb = gradeOrder[b.project.evaluation.overall_grade];
        if (ga !== gb) return ga - gb;
        return a.project.name.localeCompare(b.project.name);
      });
      break;
    case "price-asc":
      sorted.sort((a, b) => {
        const pa = minProjectPrice(a.project);
        const pb = minProjectPrice(b.project);
        if (pa !== pb) return pa - pb;
        return a.project.name.localeCompare(b.project.name);
      });
      break;
    case "area-grade":
      sorted.sort((a, b) => {
        const ga = gradeOrder[a.area.evaluation.overall_grade];
        const gb = gradeOrder[b.area.evaluation.overall_grade];
        if (ga !== gb) return ga - gb;
        return a.project.name.localeCompare(b.project.name);
      });
      break;
    case "name":
      sorted.sort((a, b) => a.project.name.localeCompare(b.project.name));
      break;
  }
  return sorted;
}

// ────────────────────────────────────────────────────────────────────────────
// Counts
// ────────────────────────────────────────────────────────────────────────────

export function getProjectCount(areas: Area[]): number {
  return areas.reduce((sum, a) => sum + a.projects.length, 0);
}

export function formatCount(n: number): string {
  if (n >= 100) return "100+";
  return String(n);
}

export function gradeRank(grade: Grade): number {
  return gradeOrder[grade];
}
