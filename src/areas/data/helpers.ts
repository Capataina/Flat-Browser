// Helpers for constructing migrated Area / Project entries.
//
// The Phase B5 migration shapes the existing 19 entries into the new schema.
// Most rich fields (long_form sub-fields, demographics breakdown, amenity lists,
// rental qualification, etc.) have no equivalent in the old data and are stubbed
// with honest "unknown" values so every area passes the validation script and
// renders cleanly in the UI.

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
  tierSummary = "Awaiting detailed evaluation.",
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
    "Structured fields not yet populated.",
  ],
});

export const stubQualification = (
  realism: ProjectQualification["grad_visa_realism"] = "unknown",
): ProjectQualification => ({
  income_multiple: 30,
  typical_income_floor: 0,
  min_tenancy_months: undefined,
  guarantor_acceptable: false,
  agreement_type: "unknown",
  referencing_provider: "unknown",
  professional_guarantor_accepted: false,
  open_banking_accepted: false,
  international_friendly: "unknown",
  visa_friendly: "unknown",
  visa_expiry_handling: "unknown",
  credit_check: "standard",
  grad_visa_realism: realism,
  notes:
    "Rental qualification details not yet researched for this project.",
  sources: [],
});

export const stubRental = (
  tenure: ("rent" | "buy")[],
  realism: ProjectQualification["grad_visa_realism"] = "unknown",
): ProjectRental => ({
  tenure,
  prices: {
    bills_included: false,
    notes: "Price ranges not yet researched.",
  },
  qualification: stubQualification(realism),
  cost_tier: undefined,
  price_transparency: "unknown",
});

export const stubBuildingQuality = (): ProjectBuildingQuality => ({
  sound_insulation: "unknown",
  thermal_performance: "unknown",
  layout_notes: "",
  kitchen_quality: "unknown",
  heating_type: "unknown",
  notes: "Building quality details not yet researched.",
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

export interface ProjectEvaluationReasoning {
  t2_6_building_quality?: string;
  t4_1_amenity_package?: string;
  t4_4_signature_arch?: string;
}

export const stubProjectEvaluation = (
  overall_grade: ProjectEvaluation["overall_grade"] = "B",
  reasoning = "Migrated from original dataset; awaiting detailed evaluation.",
  evaluationReasoning: ProjectEvaluationReasoning = {},
): ProjectEvaluation => ({
  t2_6_building_quality: criterion(
    "2.6",
    "Building quality at modern standard",
    "unknown",
    evaluationReasoning.t2_6_building_quality ?? "",
  ),
  t4_1_amenity_package: criterion(
    "4.1",
    "Premium amenity packages",
    "unknown",
    evaluationReasoning.t4_1_amenity_package ?? "",
  ),
  t4_4_signature_arch: criterion(
    "4.4",
    "Signature architecture",
    "unknown",
    evaluationReasoning.t4_4_signature_arch ?? "",
  ),
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
  /**
   * Optional per-project reasoning for the three project-level rubric rows.
   * Populated incrementally as area files are filled in; empty strings remain
   * for entries that have not yet been swept.
   */
  evaluation_reasoning?: ProjectEvaluationReasoning;
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
    evaluation: stubProjectEvaluation(
      input.overall_grade ?? "B",
      undefined,
      input.evaluation_reasoning,
    ),
    external_links: [],
    research: stubResearch("migrated-from-original-19"),
  };
}
