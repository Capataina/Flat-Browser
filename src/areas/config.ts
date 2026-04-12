// Filter taxonomy and page-level copy for the area browser.
//
// This file is the place where filter labels, options, and explanations live.
// It is consumed by the filter bar component and by the page header.

import type {
  AgeCohort,
  AgreementType,
  BuildingType,
  CostTier,
  GradVisaRealism,
  Grade,
  ReferencingProvider,
  TfLZone,
  AreaRegeneration,
} from "./types";

export interface BrowserMeta {
  eyebrow: string;
  title: string;
  accent: string;
  subtitle: string;
  footerNote: string;
}

export const browserMeta: BrowserMeta = {
  eyebrow: "Personal Relocation Research - April 2026",
  title: "London",
  accent: "Area & Project Browser",
  subtitle:
    "A rubric-driven, area-by-area, project-by-project sweep of London — built to be the last research tool needed for finding an upgrade from Croydon as a graduate-visa renter.",
  footerNote:
    "Research compiled April 2026 - every fact traces to a source. Verify rental qualification details with the operator before committing.",
};

// ────────────────────────────────────────────────────────────────────────────
// Filter group definitions
// ────────────────────────────────────────────────────────────────────────────

export interface FilterOption<T extends string> {
  value: T;
  label: string;
  description: string;
}

export interface FilterGroup<T extends string> {
  category: string;
  label: string;
  layer: "area" | "project";
  options: FilterOption<T>[];
}

export const zoneFilter: FilterGroup<TfLZone> = {
  category: "zones",
  label: "Zone",
  layer: "area",
  options: [
    {
      value: "Zone 1",
      label: "Zone 1",
      description:
        "Central London core. Fastest access, highest pricing pressure, most cultural density.",
    },
    {
      value: "Zone 2",
      label: "Zone 2",
      description:
        "Inner ring around the centre, balancing connectivity and liveability.",
    },
    {
      value: "Zone 3",
      label: "Zone 3",
      description:
        "Further out than the inner core, often with more space and calmer streets.",
    },
    {
      value: "Zone 4",
      label: "Zone 4",
      description:
        "Outer-zone candidates that still meet the upgrade-from-Croydon bar.",
    },
  ],
};

export const ageFilter: FilterGroup<AgeCohort> = {
  category: "primary_age_cohorts",
  label: "Primary age cohort",
  layer: "area",
  options: [
    {
      value: "18-29",
      label: "18-29",
      description:
        "Dominantly young — graduate, early-career, student-adjacent. Census 2021 confirms 18-29 as largest cohort.",
    },
    {
      value: "30-39",
      label: "30-39",
      description: "Established young professionals as the dominant cohort.",
    },
    {
      value: "40-49",
      label: "40-49",
      description: "Mature professional and early-family households dominant.",
    },
    {
      value: "50+",
      label: "50+",
      description: "Settled mature households dominant. Generally avoided for Caner's profile.",
    },
  ],
};

export const gradeFilter: FilterGroup<Grade> = {
  category: "area_grades",
  label: "Area grade",
  layer: "area",
  options: [
    {
      value: "SS",
      label: "SS",
      description:
        "Exceptional. Every rubric tier is strong. Top-of-shortlist material.",
    },
    {
      value: "S",
      label: "S",
      description: "Excellent. Most tiers strong, no failures.",
    },
    {
      value: "A",
      label: "A",
      description:
        "Very good. Clean T1 + T2, good or moderate elsewhere, no failures.",
    },
    { value: "B", label: "B", description: "Good. Passes T1, mostly good elsewhere." },
    {
      value: "C",
      label: "C",
      description: "Marginal. Passes T1 but weak elsewhere.",
    },
    {
      value: "F",
      label: "F",
      description: "Fails T1. Should not be in the dataset; vanishingly rare.",
    },
  ],
};

export const regenerationFilter: FilterGroup<AreaRegeneration["status"]> = {
  category: "regeneration_status",
  label: "Regeneration status",
  layer: "area",
  options: [
    {
      value: "complete",
      label: "Complete",
      description: "Masterplan delivered. Stable rather than ascending.",
    },
    {
      value: "active",
      label: "Active",
      description: "Cranes still up, ongoing investment, ascending trajectory.",
    },
    {
      value: "phased",
      label: "Phased",
      description: "Multi-phase delivery, partially live with future phases.",
    },
    {
      value: "early",
      label: "Early stage",
      description: "Planning or early delivery — future bet rather than live area.",
    },
  ],
};

export const tenureFilter: FilterGroup<"rent" | "buy"> = {
  category: "tenure",
  label: "Tenure (project)",
  layer: "project",
  options: [
    {
      value: "rent",
      label: "Rent",
      description: "Project offers rental units — managed BTR or active lettings.",
    },
    {
      value: "buy",
      label: "Buy",
      description: "Project offers ownership — leasehold or freehold purchase.",
    },
  ],
};

export const buildingTypeFilter: FilterGroup<BuildingType> = {
  category: "building_types",
  label: "Building type (project)",
  layer: "project",
  options: [
    {
      value: "BTR",
      label: "BTR",
      description:
        "Build-to-Rent. Purpose-built rental, professional operator, central referencing.",
    },
    {
      value: "PRS",
      label: "PRS",
      description: "Private Rented Sector. Mixed managed rental.",
    },
    {
      value: "Owner-Lease",
      label: "Owner-Lease",
      description:
        "Primarily ownership but with active lettings on the secondary market.",
    },
    {
      value: "Build-to-Sell",
      label: "Build-to-Sell",
      description: "Primarily ownership, weak rental presence.",
    },
    {
      value: "Mixed",
      label: "Mixed",
      description: "Meaningful split between rent and buy.",
    },
  ],
};

export const costTierFilter: FilterGroup<CostTier> = {
  category: "cost_tiers",
  label: "Cost tier (project)",
  layer: "project",
  options: [
    { value: "budget", label: "Budget", description: "Lowest cost tier. Extended-stay, older conversions, outer zones." },
    { value: "affordable", label: "Affordable", description: "Below London average. Managed BTR in zones 3-4 or older zones 1-2 stock." },
    { value: "mid-range", label: "Mid-range", description: "London average for managed rental. Standard BTR." },
    { value: "premium", label: "Premium", description: "Above average. High-spec BTR with strong amenities." },
    { value: "luxury", label: "Luxury", description: "Top tier. Trophy buildings, signature architecture." },
  ],
};

export const gradVisaFilter: FilterGroup<GradVisaRealism> = {
  category: "grad_visa_realism",
  label: "Graduate-visa realism (project)",
  layer: "project",
  options: [
    {
      value: "achievable",
      label: "Achievable",
      description:
        "Graduate-visa renters can pass referencing here through the standard route.",
    },
    {
      value: "achievable-with-guarantor",
      label: "With guarantor",
      description:
        "Standard referencing blocked, but the operator accepts professional guarantor services (Housing Hand, Guarantid, etc.).",
    },
    {
      value: "licence-exempt",
      label: "Licence exempt",
      description:
        "Licence agreement — outside the Renters' Rights Act entirely. The operator sets their own qualification terms.",
    },
    {
      value: "unlikely",
      label: "Unlikely",
      description:
        "Standard requirements above what a graduate-visa renter can meet. No documented flexibility.",
    },
    {
      value: "blocked",
      label: "Blocked",
      description:
        "Operator policies explicitly disqualify graduate-visa renters with no UK credit history.",
    },
  ],
};

export const agreementTypeFilter: FilterGroup<AgreementType> = {
  category: "agreement_types",
  label: "Agreement type (project)",
  layer: "project",
  options: [
    {
      value: "ast",
      label: "Assured Shorthold Tenancy",
      description:
        "Standard UK tenancy. Subject to the Renters' Rights Act from 1 May 2026 — advance rent capped at 1 month, all tenancies periodic.",
    },
    {
      value: "licence",
      label: "Licence agreement",
      description:
        "A licence to occupy, not a tenancy. Exempt from the RRA — the operator sets their own terms for upfront rent and qualification.",
    },
  ],
};

export const referencingProviderFilter: FilterGroup<ReferencingProvider> = {
  category: "referencing_providers",
  label: "Referencing provider (project)",
  layer: "project",
  options: [
    {
      value: "homeppl",
      label: "Homeppl",
      description:
        "Open Banking income verification. Does not require UK credit history or formal payslips.",
    },
    {
      value: "goodlord",
      label: "Goodlord",
      description:
        "Standard UK referencing — credit check, payslips, employer reference.",
    },
    {
      value: "canopy",
      label: "Canopy",
      description:
        "Open Banking alongside traditional checks. More flexible but still runs a credit check.",
    },
    {
      value: "in-house",
      label: "In-house",
      description:
        "Operator runs their own referencing. Requirements vary.",
    },
    {
      value: "none",
      label: "No referencing",
      description:
        "No referencing or credit checks. Typically licence-based operators.",
    },
  ],
};

export const projectGradeFilter: FilterGroup<Grade> = {
  category: "project_grades",
  label: "Project grade",
  layer: "project",
  options: gradeFilter.options,
};

/** All filter groups in display order. */
export const allFilterGroups = [
  zoneFilter,
  ageFilter,
  gradeFilter,
  regenerationFilter,
  tenureFilter,
  buildingTypeFilter,
  costTierFilter,
  agreementTypeFilter,
  referencingProviderFilter,
  gradVisaFilter,
  projectGradeFilter,
] as const;

/** Boolean filters that don't fit the pill model — rendered as toggles. */
export const booleanFilters = [
  { key: "has_river", label: "Has river", layer: "area" as const },
  { key: "has_canal", label: "Has canal", layer: "area" as const },
  { key: "has_dock", label: "Has dock", layer: "area" as const },
  { key: "has_pool", label: "Has pool (project)", layer: "project" as const },
  {
    key: "has_concierge",
    label: "Has concierge (project)",
    layer: "project" as const,
  },
] as const;
