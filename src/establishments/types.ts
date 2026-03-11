export const tagCategories = [
  "zone",
  "tenure",
  "price",
  "status",
  "char",
  "comm",
  "demo",
  "age",
  "form",
  "conn",
] as const;

export type TagCategory = (typeof tagCategories)[number];

export type EstablishmentProject = {
  name: string;
  note: string;
};

export type EstablishmentTagMap = Record<TagCategory, string[]>;

export type FilterOption = {
  value: string;
  description: string;
};

export type Establishment = {
  id: string;
  name: string;
  dev: string;
  loc: string;
  preview: string;
  desc: string;
  ageNote: string;
  tags: EstablishmentTagMap;
  projects: EstablishmentProject[];
};

export type FilterGroup = {
  category: TagCategory;
  label: string;
  options: FilterOption[];
};

export type FilterState = Record<TagCategory, Set<string>>;

export type GuideMeta = {
  eyebrow: string;
  title: string;
  accent: string;
  subtitle: string;
  footerNote: string;
};
