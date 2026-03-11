import {
  type Establishment,
  type FilterState,
  type TagCategory,
  tagCategories,
} from "@/src/establishments/types";

export function createInitialFilterState(): FilterState {
  return tagCategories.reduce((accumulator, category) => {
    accumulator[category] = new Set();
    return accumulator;
  }, {} as FilterState);
}

export function toggleFilterValue(
  state: FilterState,
  category: TagCategory,
  value: string,
): FilterState {
  const nextState = tagCategories.reduce((accumulator, key) => {
    accumulator[key] = new Set(state[key]);
    return accumulator;
  }, {} as FilterState);

  if (nextState[category].has(value)) {
    nextState[category].delete(value);
  } else {
    nextState[category].add(value);
  }

  return nextState;
}

export function buildSearchableText(establishment: Establishment): string {
  return [
    establishment.name,
    establishment.dev,
    establishment.loc,
    establishment.preview,
    establishment.desc,
    ...establishment.projects.flatMap((project) => [project.name, project.note]),
    ...Object.values(establishment.tags).flat(),
  ]
    .join(" ")
    .toLowerCase();
}

export function matchesFilters(
  establishment: Establishment,
  filters: FilterState,
  query: string,
): boolean {
  for (const category of tagCategories) {
    const selectedValues = filters[category];

    if (!selectedValues.size) {
      continue;
    }

    const establishmentValues = establishment.tags[category];
    const matchesCategory = [...selectedValues].every((value) =>
      establishmentValues.includes(value),
    );

    if (!matchesCategory) {
      return false;
    }
  }

  if (!query) {
    return true;
  }

  return buildSearchableText(establishment).includes(query);
}

export function hasActiveFilters(filters: FilterState, query: string): boolean {
  return tagCategories.some((category) => filters[category].size > 0) || !!query;
}

export function getProjectCount(establishments: Establishment[]): number {
  return establishments.reduce(
    (projectCount, establishment) =>
      projectCount + establishment.projects.length,
    0,
  );
}

export function formatProjectCount(projectCount: number): string {
  if (projectCount >= 50) {
    return "50+";
  }

  return String(projectCount);
}
