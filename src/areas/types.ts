// Flatbrowser data layer types.
//
// This file is the canonical TypeScript implementation of the schema documented
// in `context/references/data-schema.md`. The schema doc is the source of truth;
// any changes here should be made to the schema doc first, then propagated.
//
// The model is two-tier: Areas contain Projects. Areas carry T1, T2, T3, T5
// rubric evaluation; Projects carry T2.6, T4.1, T4.4 (the project-level rubric
// rows) plus the rental qualification realism block that is the most important
// piece of unique-to-Flatbrowser data.

// ────────────────────────────────────────────────────────────────────────────
// Shared primitives
// ────────────────────────────────────────────────────────────────────────────

/** Cernio-parity grade scale. SS exceptional → F avoid. */
export type Grade = "SS" | "S" | "A" | "B" | "C" | "F";

/** Five-step quality scale used for sub-aspects (building quality, gym quality, etc.). */
export type Quality = "excellent" | "good" | "average" | "poor" | "unknown";

/** TfL fare zones. London-only for now; Cambridge support is intentional via Area.borough being free string. */
export type TfLZone =
  | "Zone 1"
  | "Zone 2"
  | "Zone 3"
  | "Zone 4"
  | "Zone 5"
  | "Zone 6"
  | "Zone 7"
  | "Zone 8"
  | "Zone 9";

export type AgeCohort = "18-29" | "30-39" | "40-49" | "50+";

export type SourceType =
  | "operator"
  | "developer"
  | "rightmove"
  | "homeviews"
  | "tfl"
  | "ons"
  | "met-police"
  | "wikipedia"
  | "press"
  | "reddit"
  | "council"
  | "other";

export interface SourceLink {
  url: string;
  label: string;
  type: SourceType;
  /** ISO 8601 date the agent fetched / verified the source. */
  accessed_date: string;
}

export interface CriterionScore {
  /** Rubric ID, e.g. "1.1", "2.7", "5.4". */
  id: string;
  /** Human-readable name copied from the rubric. */
  name: string;
  status: "pass" | "partial" | "fail" | "unknown";
  reasoning: string;
  sources: SourceLink[];
}

export type TierScore = "strong" | "good" | "moderate" | "weak" | "fail";

export interface TierEvaluation {
  criteria: CriterionScore[];
  tier_score: TierScore;
  /** 2–4 sentence synthesis of the tier. */
  tier_summary: string;
  /** Provenance for this tier's synthesis. Optional pre-sweep. */
  provenance?: Provenance;
}

export interface ResearchMeta {
  primary_agent: string;
  /** ISO 8601. */
  research_date: string;
  /** ISO 8601. */
  last_verified: string;
  confidence: "high" | "medium" | "low";
  open_questions: string[];
}

// ────────────────────────────────────────────────────────────────────────────
// Provenance — consensus-model attribution per section
// ────────────────────────────────────────────────────────────────────────────
//
// Under the consensus synthesis model (see context/references/merge-protocol.md)
// every fact in the dataset traces to one or more sweep agents. The Provenance
// block records:
//   - which agents contributed to the section's content
//   - what consensus level the synthesis step assigned (high / medium / low)
//   - any minority claims that disagreed with the consensus, preserved with
//     attribution rather than silently dropped
//
// Provenance is OPTIONAL on every section so the existing migrated entries
// (which pre-date the consensus model) remain valid. Sections with no
// provenance render as "migrated entry — awaiting Phase F sweep" in the UI.
// After the sweep + synthesis, every section will have a populated Provenance.

export interface DissentingClaim {
  /** What the dissenting agents said, in their own words. */
  claim: string;
  /** Agent IDs that made the dissenting claim ("01" through "15"). */
  agents: string[];
  /** Source URLs cited by the dissenting agents. */
  sources: SourceLink[];
}

export type ConsensusLevel = "high" | "medium" | "low";

export interface Provenance {
  /**
   * Agent IDs that contributed to this section ("01" through "15").
   * Empty array means no agent has touched this section yet (pre-sweep state).
   */
  contributing_agents: string[];
  /**
   * Consensus tier assigned by the synthesis step:
   *   - "high"   — ≥10 of 15 agents agree on the central claims
   *   - "medium" — 5–9 agents agree
   *   - "low"    — 1–4 agents (or specialist topic with thin natural coverage)
   */
  consensus_level: ConsensusLevel;
  /**
   * Minority claims that disagreed with the consensus, preserved with full
   * attribution. The synthesis step writes the consensus into the section's
   * actual content fields and surfaces dissent here for honest contradiction.
   */
  dissenting_claims: DissentingClaim[];
}

export interface AmenityEntry {
  name: string;
  type: string;
  walk_minutes: number;
  notes: string;
}

// ────────────────────────────────────────────────────────────────────────────
// Area sub-types
// ────────────────────────────────────────────────────────────────────────────

export interface AreaLongForm {
  full: string;
  history: string;
  vibe: string;
  weekday: string;
  weekend: string;
  notable: string;
  /** Explicit "this is how it differs from Croydon" — mandatory upgrade-comparison. */
  croydon_comparison: string;
  /** Consensus attribution for the long-form prose. Optional pre-sweep. */
  provenance?: Provenance;
}

export type TransportLineType =
  | "tube"
  | "elizabeth"
  | "overground"
  | "dlr"
  | "rail"
  | "tram";

export interface TransportLine {
  name: string;
  type: TransportLineType;
}

export interface Station {
  name: string;
  lines: string[];
  walk_minutes_from_centre: number;
}

export interface AnchorTimes {
  city_of_london: number;
  canary_wharf: number;
  soho_fitzrovia: number;
  kings_cross_shoreditch: number;
}

export type ConnectivityScore = 0 | 1 | 2 | 3 | 4 | 5;

export interface AreaConnectivity {
  lines: TransportLine[];
  primary_stations: Station[];
  times_to_anchors: AnchorTimes;
  /** Derived: how many of the four anchors are reachable in ≤25 minutes. */
  multi_cluster_score: ConnectivityScore;
  /** Derived: line independence — protects against single-line failure. */
  redundancy_score: ConnectivityScore;
  notes: string;
  sources: SourceLink[];
  /** Consensus attribution from the synthesis step. Optional pre-sweep. */
  provenance?: Provenance;
}

export interface AgeBreakdownEntry {
  cohort: AgeCohort;
  pct: number;
}

export interface EthnicEntry {
  group: string;
  pct: number;
}

export interface HouseholdEntry {
  type: string;
  pct: number;
}

export interface AreaDemographics {
  primary_age_cohort: AgeCohort;
  age_breakdown: AgeBreakdownEntry[];
  ethnic_composition: EthnicEntry[];
  household_mix: HouseholdEntry[];
  student_pct: number;
  professional_renter_pct: number;
  notes: string;
  sources: SourceLink[];
  provenance?: Provenance;
}

export interface AreaSafety {
  overall: "very-safe" | "safe" | "moderate" | "concerning";
  crime_vs_borough: "below" | "average" | "above";
  crime_vs_croydon: "much-safer" | "safer" | "similar" | "worse";
  after_dark_assessment: string;
  concerns: string[];
  sources: SourceLink[];
  provenance?: Provenance;
}

export interface ParkEntry {
  name: string;
  size_acres?: number;
  walk_minutes: number;
  notes: string;
}

export interface AreaGreenAndWater {
  has_river: boolean;
  has_canal: boolean;
  has_dock: boolean;
  parks: ParkEntry[];
  overall_assessment: string;
  sources?: SourceLink[];
  provenance?: Provenance;
}

export interface AreaAmenities {
  grocery: AmenityEntry[];
  /** Critical for Caner — see rubric T2.3, the most load-bearing T2 row. */
  gyms: AmenityEntry[];
  food_and_drink: AmenityEntry[];
  health: AmenityEntry[];
  cultural: AmenityEntry[];
  notes: string;
  sources?: SourceLink[];
  provenance?: Provenance;
}

export interface AreaRegeneration {
  status: "complete" | "active" | "phased" | "early";
  investment_pipeline: string;
  recent_milestones: string[];
  upcoming_milestones: string[];
  /** Where this area is in August 2027 — Caner's visa transition window. */
  trajectory_through_2027: string;
  sources: SourceLink[];
  provenance?: Provenance;
}

export interface AreaEvaluation {
  /** T1 foundational viability — the hard floor (6 criteria). */
  t1_foundational: TierEvaluation;
  /** T2 daily life quality — the actual upgrade test (7 criteria, but T2.6 is project-level). */
  t2_daily_life: TierEvaluation;
  /** T3 place identity and trajectory (6 criteria). */
  t3_identity: TierEvaluation;
  /** T5 personal fit and edge differentiators (4 criteria). T4 lives at project level. */
  t5_personal: TierEvaluation;
  overall_grade: Grade;
  grade_reasoning: string;
  /** Provenance for the overall grade synthesis. Per-tier provenance lives on TierEvaluation. */
  provenance?: Provenance;
}

// ────────────────────────────────────────────────────────────────────────────
// Project sub-types
// ────────────────────────────────────────────────────────────────────────────

export type BuildingType =
  | "BTR"
  | "PRS"
  | "Owner-Lease"
  | "Build-to-Sell"
  | "Mixed";

export type BuildPhase = "complete" | "in_delivery" | "future" | "phased";

export interface PriceBand {
  min: number;
  max?: number;
  currency: "GBP";
  per: "month";
}

export interface ProjectPrices {
  studio?: PriceBand;
  one_bed?: PriceBand;
  two_bed?: PriceBand;
  bills_included: boolean;
  notes: string;
}

/**
 * Graduate-visa rental realism — the unique-to-Flatbrowser signal that no other
 * property tool produces. Surfaced on the project card as a coloured indicator.
 *
 * `unknown` is included so the dataset can carry honest gaps before the
 * Phase F sweep populates the value. The UI renders unknown as a neutral grey
 * indicator rather than green/amber/orange/red.
 */
export type GradVisaRealism =
  | "achievable"
  | "achievable-with-guarantor"
  | "licence-exempt"
  | "unlikely"
  | "blocked"
  | "unknown";

/** Whether the arrangement is a tenancy (subject to RRA) or a licence (exempt). */
export type AgreementType = "ast" | "licence" | "unknown";

/** Which referencing provider the operator uses. Homeppl uses Open Banking (works for international tenants). */
export type ReferencingProvider = "homeppl" | "goodlord" | "canopy" | "in-house" | "none" | "unknown";

/** Relative cost positioning among London rental projects. */
export type CostTier = "budget" | "affordable" | "mid-range" | "premium" | "luxury";

export interface ProjectQualification {
  /** Typical income multiple required, e.g. 30 means 30× monthly rent annually. */
  income_multiple: number;
  /** Typical income floor in GBP per year. */
  typical_income_floor: number;
  min_tenancy_months?: number;
  guarantor_acceptable: boolean;
  /** Whether the operator uses a tenancy (AST, subject to RRA) or a licence (exempt from RRA). */
  agreement_type: AgreementType;
  /** Which referencing provider the operator uses. */
  referencing_provider: ReferencingProvider;
  /** Whether the operator accepts professional guarantor services (Housing Hand, Guarantid, etc.). */
  professional_guarantor_accepted: boolean;
  /** Whether the operator accepts Open Banking income verification instead of payslips. */
  open_banking_accepted: boolean;
  // (rest of fields below — provenance attached at the bottom of the interface)
  international_friendly: "yes" | "case-by-case" | "no" | "unknown";
  visa_friendly: "yes" | "case-by-case" | "no" | "unknown";
  visa_expiry_handling:
    | "ignored"
    | "tenancy-shortened"
    | "rejected"
    | "unknown";
  credit_check: "strict" | "standard" | "lenient";
  /** The single derived signal that drives the green/amber/red card indicator. */
  grad_visa_realism: GradVisaRealism;
  notes: string;
  sources: SourceLink[];
  /** Consensus attribution from sweep agent #9. Optional pre-sweep. */
  provenance?: Provenance;
}

export interface ProjectRental {
  tenure: ("rent" | "buy")[];
  prices: ProjectPrices;
  qualification: ProjectQualification;
  cost_tier?: CostTier;
}

export type HeatingType =
  | "gas"
  | "electric"
  | "communal"
  | "heat-pump"
  | "mixed"
  | "unknown";

export interface ProjectBuildingQuality {
  epc_rating?: string;
  sound_insulation: Quality;
  thermal_performance: Quality;
  layout_notes: string;
  /** Caner cooks regularly — kitchen quality matters. */
  kitchen_quality: Quality;
  heating_type: HeatingType;
  notes: string;
  provenance?: Provenance;
}

export type ConciergeType = "24h" | "daytime" | "none";
export type ProjectAmenityTier = "premium" | "strong" | "decent" | "basic";

export interface ProjectAmenities {
  pool: boolean;
  pool_notes: string;
  gym: boolean;
  /** Distinct from area-level gym access — resident gyms can be present but inadequate. */
  gym_quality: Quality;
  concierge: ConciergeType;
  sky_lounge: boolean;
  co_working: boolean;
  dining_room: boolean;
  cinema_room: boolean;
  rooftop_terrace: boolean;
  parking: boolean;
  bike_storage: boolean;
  pet_policy: string;
  other_amenities: string[];
  overall_tier: ProjectAmenityTier;
  provenance?: Provenance;
}

export interface ProjectArchitecture {
  architects: string[];
  awards: string[];
  is_signature: boolean;
  style_notes: string;
  provenance?: Provenance;
}

export interface ProjectLongForm {
  full: string;
  living_experience: string;
  notable_features: string;
  provenance?: Provenance;
}

export interface ProjectResidentSignal {
  homeviews_score?: number;
  homeviews_url?: string;
  summary: string;
  common_complaints: string[];
  common_praise: string[];
  provenance?: Provenance;
}

export interface ProjectEvaluation {
  t2_6_building_quality: CriterionScore;
  t4_1_amenity_package: CriterionScore;
  t4_4_signature_arch: CriterionScore;
  overall_grade: Grade;
  grade_reasoning: string;
  provenance?: Provenance;
}

// ────────────────────────────────────────────────────────────────────────────
// Project
// ────────────────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  name: string;
  /** Back-reference to the parent Area's id — must match. */
  area_id: string;

  headline: string;
  preview: string;
  hero_image_url?: string;

  developer: string;
  operator: string;
  building_type: BuildingType;
  units_total?: number;
  storeys?: number;
  build_completed?: number;
  build_phase: BuildPhase;

  rental: ProjectRental;
  building_quality: ProjectBuildingQuality;
  amenities: ProjectAmenities;
  architecture: ProjectArchitecture;
  long_form: ProjectLongForm;
  resident_signal: ProjectResidentSignal;
  evaluation: ProjectEvaluation;

  external_links: SourceLink[];
  research: ResearchMeta;
}

// ────────────────────────────────────────────────────────────────────────────
// Area
// ────────────────────────────────────────────────────────────────────────────

export interface Area {
  id: string;
  name: string;
  aliases: string[];
  /** Free string so future Cambridge / non-London expansion needs no schema change. */
  borough: string;
  postcodes: string[];

  headline: string;
  preview: string;
  hero_image_url?: string;

  long_form: AreaLongForm;

  zones: TfLZone[];
  connectivity: AreaConnectivity;
  demographics: AreaDemographics;
  safety: AreaSafety;
  green_and_water: AreaGreenAndWater;
  amenities: AreaAmenities;
  regeneration: AreaRegeneration;

  evaluation: AreaEvaluation;

  projects: Project[];

  external_links: SourceLink[];

  /** Hand-authored by Caner alongside the data file. Can be empty string. */
  personal_notes: string;

  research: ResearchMeta;
}

// ────────────────────────────────────────────────────────────────────────────
// UI / filter helpers
// ────────────────────────────────────────────────────────────────────────────

/**
 * The five rubric tiers. Used for tier-colour CSS data attributes and for
 * rendering tier scores in the area modal.
 */
export const tierIds = ["t1", "t2", "t3", "t4", "t5"] as const;
export type TierId = (typeof tierIds)[number];

/** Grade ordering for sort + colour mapping. */
export const gradeOrder: Record<Grade, number> = {
  SS: 0,
  S: 1,
  A: 2,
  B: 3,
  C: 4,
  F: 5,
};

/** All grades in display order. Useful for filter pills. */
export const allGrades: Grade[] = ["SS", "S", "A", "B", "C", "F"];

/**
 * Filter state model. Mirrors the area-level + project-level dual filter set
 * described in the website refactor plan (Phase C7).
 */
export interface FilterState {
  // Area-level filters
  zones: Set<TfLZone>;
  primary_age_cohorts: Set<AgeCohort>;
  area_grades: Set<Grade>;
  multi_cluster_min: number; // 0..5
  has_river: boolean;
  has_canal: boolean;
  has_dock: boolean;
  regeneration_status: Set<AreaRegeneration["status"]>;
  boroughs: Set<string>;
  // Project-level filters (apply across nested projects)
  tenure: Set<"rent" | "buy">;
  building_types: Set<BuildingType>;
  grad_visa_realism: Set<GradVisaRealism>;
  project_grades: Set<Grade>;
  cost_tiers: Set<CostTier>;
  agreement_types: Set<AgreementType>;
  referencing_providers: Set<ReferencingProvider>;
  has_pool: boolean;
  has_concierge: boolean;
  // Free-text search
  query: string;
}

/** Sort modes for the main grid. */
export type SortMode = "area-grade" | "best-project-grade" | "name";
