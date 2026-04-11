// Helpers for constructing migrated Area / Project entries.
//
// The Phase B5 migration shapes the existing 19 entries into the new schema.
// Most rich fields (long_form sub-fields, demographics breakdown, amenity lists,
// rental qualification, etc.) have no equivalent in the old data and will be
// filled by the Phase F sweep. These helpers produce honest "unknown" stubs so
// every area passes the validation script and renders cleanly in the UI.

import type {
  CriterionScore,
  Project,
  ProjectAmenities,
  ProjectArchitecture,
  ProjectBuildingQuality,
  ProjectEvaluation,
  ProjectLongForm,
  ProjectQualification,
  ProjectResidentSignal,
  ProjectRental,
  ResearchMeta,
  TierEvaluation,
} from "../types";

export const T1_CRITERIA: { id: string; name: string }[] = [
  { id: "1.1", name: "Demonstrably safer than Croydon" },
  { id: "1.2", name: "Modern rental stock present" },
  { id: "1.3", name: "Strong connectivity to central London" },
  { id: "1.4", name: "Active professional rental market" },
  { id: "1.5", name: "Public realm in good order" },
  { id: "1.6", name: "Not actively in decline" },
];

export const T2_CRITERIA: { id: string; name: string }[] = [
  { id: "2.1", name: "Walkable daily essentials" },
  { id: "2.2", name: "Quality grocery and fresh food" },
  { id: "2.3", name: "Real gym access" },
  { id: "2.4", name: "Green space, water, or open element" },
  { id: "2.5", name: "Quiet at night for residents" },
  { id: "2.7", name: "Younger demographic skew" },
];

export const T3_CRITERIA: { id: string; name: string }[] = [
  { id: "3.1", name: "Active regeneration / current investment" },
  { id: "3.2", name: "Cultural or commercial anchor" },
  { id: "3.3", name: "Distinct, recognisable sense of place" },
  { id: "3.4", name: "15-minute neighbourhood completeness" },
  { id: "3.5", name: "Architectural and visual quality" },
  { id: "3.6", name: "Day/night activity rhythm" },
];

export const T5_CRITERIA: { id: string; name: string }[] = [
  { id: "5.1", name: "Multi-cluster commute coverage" },
  { id: "5.2", name: "Transport redundancy / line independence" },
  { id: "5.3", name: "Long-term ascending trajectory" },
  { id: "5.4", name: "Quiet third spaces" },
];

export type Verdict = "pass" | "partial" | "fail" | "unknown";

export function criterion(
  id: string,
  name: string,
  status: Verdict,
  reasoning = "",
): CriterionScore {
  return { id, name, status, reasoning, sources: [] };
}

export function buildTier(
  spec: { id: string; name: string }[],
  defaults: Record<string, Verdict>,
  reasoning: Record<string, string> = {},
  tierScore: TierEvaluation["tier_score"] = "moderate",
  tierSummary = "Awaiting Phase F sweep for full evaluation.",
): TierEvaluation {
  return {
    criteria: spec.map((c) =>
      criterion(c.id, c.name, defaults[c.id] ?? "unknown", reasoning[c.id] ?? ""),
    ),
    tier_score: tierScore,
    tier_summary: tierSummary,
  };
}

export const stubResearch = (primaryAgent: string): ResearchMeta => ({
  primary_agent: primaryAgent,
  research_date: "2026-03-11",
  last_verified: "2026-04-11",
  confidence: "medium",
  open_questions: [
    "Phase F sweep needs to populate structured fields not present in original dataset.",
  ],
});

export const stubQualification = (
  realism: ProjectQualification["grad_visa_realism"] = "unknown",
): ProjectQualification => ({
  income_multiple: 30,
  typical_income_floor: 0,
  upfront_max_months: 3,
  upfront_negotiable: false,
  guarantor_acceptable: false,
  international_friendly: "unknown",
  visa_friendly: "unknown",
  visa_expiry_handling: "unknown",
  credit_check: "standard",
  grad_visa_realism: realism,
  notes:
    "Rental qualification realism is the most important sweep agent target. Phase F agent #9 will fill this in per project.",
  sources: [],
});

export const stubRental = (
  tenure: ("rent" | "buy")[],
  realism: ProjectQualification["grad_visa_realism"] = "unknown",
): ProjectRental => ({
  tenure,
  prices: {
    bills_included: false,
    notes: "Phase F agent #9 to populate live price ranges per bedroom count.",
  },
  qualification: stubQualification(realism),
});

export const stubBuildingQuality = (): ProjectBuildingQuality => ({
  sound_insulation: "unknown",
  thermal_performance: "unknown",
  layout_notes: "",
  kitchen_quality: "unknown",
  heating_type: "unknown",
  notes: "Phase F sweep will populate building quality details.",
});

export const stubAmenities = (
  overall_tier: ProjectAmenities["overall_tier"] = "decent",
): ProjectAmenities => ({
  pool: false,
  pool_notes: "",
  gym: false,
  gym_quality: "unknown",
  concierge: "none",
  sky_lounge: false,
  co_working: false,
  dining_room: false,
  cinema_room: false,
  rooftop_terrace: false,
  parking: false,
  bike_storage: false,
  pet_policy: "unknown",
  other_amenities: [],
  overall_tier,
});

export const stubArchitecture = (): ProjectArchitecture => ({
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "",
});

export const stubLongForm = (note = ""): ProjectLongForm => ({
  full: note,
  living_experience: "",
  notable_features: "",
});

export const stubResidentSignal = (): ProjectResidentSignal => ({
  summary: "",
  common_complaints: [],
  common_praise: [],
});

export const stubProjectEvaluation = (
  overall_grade: ProjectEvaluation["overall_grade"] = "B",
  reasoning = "Migrated from original dataset; awaiting Phase F evaluation.",
): ProjectEvaluation => ({
  t2_6_building_quality: criterion("2.6", "Building quality at modern standard", "unknown"),
  t4_1_amenity_package: criterion("4.1", "Premium amenity packages", "unknown"),
  t4_4_signature_arch: criterion("4.4", "Signature architecture", "unknown"),
  overall_grade,
  grade_reasoning: reasoning,
});

export interface MigratedProjectInput {
  id: string;
  area_id: string;
  name: string;
  developer: string;
  operator: string;
  building_type: Project["building_type"];
  build_phase: Project["build_phase"];
  tenure: ("rent" | "buy")[];
  realism?: ProjectQualification["grad_visa_realism"];
  preview: string;
  long_form_full?: string;
  amenity_tier?: ProjectAmenities["overall_tier"];
  is_signature?: boolean;
  architects?: string[];
  overall_grade?: ProjectEvaluation["overall_grade"];
}

export function buildProject(input: MigratedProjectInput): Project {
  return {
    id: input.id,
    area_id: input.area_id,
    name: input.name,
    headline: input.preview.split(".")[0] ?? input.preview,
    preview: input.preview,
    developer: input.developer,
    operator: input.operator,
    building_type: input.building_type,
    build_phase: input.build_phase,
    rental: stubRental(input.tenure, input.realism),
    building_quality: stubBuildingQuality(),
    amenities: stubAmenities(input.amenity_tier),
    architecture: {
      architects: input.architects ?? [],
      awards: [],
      is_signature: input.is_signature ?? false,
      style_notes: "",
    },
    long_form: stubLongForm(input.long_form_full ?? ""),
    resident_signal: stubResidentSignal(),
    evaluation: stubProjectEvaluation(input.overall_grade ?? "B"),
    external_links: [],
    research: stubResearch("migrated-from-original-19"),
  };
}
