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
 * This is the *derived dominant* — computed from `realism_pathways`. The full
 * route information lives in the pathways array. Keep `blocked` as an explicit
 * state (meaning "door shut, don't bother") rather than deriving it from
 * empty pathways (which means "no door found yet").
 *
 * `unknown` = pre-research default. `unclear` = researched, couldn't determine
 * from primary sources. The data skill queue treats these differently:
 * `unknown` is re-researched; `unclear` is left alone unless a signal change
 * is detected.
 */
export type GradVisaRealism =
  | "achievable"
  | "achievable-with-guarantor"
  | "licence-exempt"
  | "unlikely"
  | "blocked"
  | "unclear"
  | "unknown";

/**
 * A qualification pathway — one route to satisfying the operator's referencing.
 * Projects can have zero or more pathways. Empty array means no known route
 * yet (not the same as `blocked`). `grad_visa_realism` is derived from this
 * array plus the `blocked` override.
 */
export type RealismPathway =
  | "standard-passable"             // straight through referencing, no conditions
  | "with-professional-guarantor"   // Guarantid, Housing Hand, other corporate service
  | "with-savings"                  // 36x monthly rent in savings via Open Banking
  | "with-co-signer-overseas"       // non-UK co-signer accepted (e.g. Homeppl Co-Signer)
  | "with-upfront-licence"          // multi-month upfront at a licence operator
  | "licence-exempt-light-ref";     // operator doesn't meaningfully reference

/**
 * Universal tri-state boolean. Replaces plain booleans for any field where
 * "we researched, couldn't find it" is a distinct answer from "we haven't
 * researched it yet."
 */
export type YesNoUncertain = "yes" | "no" | "unknown" | "unclear";

/** Whether the arrangement is a tenancy (subject to RRA) or a licence (exempt). */
export type AgreementType = "ast" | "licence" | "unknown" | "unclear";

/** Which referencing provider the operator uses. Homeppl uses Open Banking (works for international tenants). */
export type ReferencingProvider =
  | "homeppl"
  | "goodlord"
  | "canopy"
  | "in-house"
  | "none"
  | "unknown"
  | "unclear";

/**
 * Whether upfront rent is a live qualification lever at this operator.
 * Post-RRA, ASTs are capped at 1 month; licence operators can still accept
 * multi-month. Critical for "will my upfront-payment offer work here" judgements.
 */
export type UpfrontRentPolicy =
  | "multi-month-available"  // licence operator, can accept 3+ months upfront
  | "one-month-ast-cap"      // AST, capped at 1 month by RRA
  | "rejected"               // operator explicitly refuses upfront as lever
  | "unknown"
  | "unclear";

/**
 * International-tenant acceptance posture. Merges the previous
 * `international_friendly` + `visa_friendly` fields which were near-duplicates.
 */
export type IntlTenantPolicy =
  | "welcomed"
  | "accepted-case-by-case"
  | "discouraged"
  | "rejected"
  | "unknown"
  | "unclear";

/**
 * Credit check strictness. Upgraded from a bare union to a proper enum so that
 * `unclear` is a legitimate post-research state, distinct from an unpopulated
 * default.
 */
export type CreditCheckStrictness =
  | "strict"
  | "standard"
  | "lenient"
  | "unknown"
  | "unclear";

/**
 * Whether the operator's posture is to flex on stated policy when applicants
 * bring unusual circumstances (upfront rent, clean prior tenancy, etc.).
 * Distinct from `credit_check` strictness — flexibility is "will they listen"
 * vs "how harshly they score." Inferred from reviews, FAQ tone, known cases.
 */
export type FlexibilitySignal =
  | "flexible"   // documented cases of operator flexing on stated policy
  | "standard"   // no positive or negative signal either way
  | "rigid"      // documented cases of operator holding the line
  | "unknown"
  | "unclear";

/**
 * Research state for the qualification block. Drives the data skill's queue.
 * - `unresearched`: default on new entries. Data skill will research fully.
 * - `partial`: some fields populated, others at their `unknown` defaults.
 * - `complete`: every researchable field has a definitive value (including
 *   `unclear` where the answer genuinely couldn't be determined).
 */
export type ResearchStatus = "unresearched" | "partial" | "complete";

/** How the visa-expiry-vs-tenancy mismatch is handled. */
export type VisaExpiryHandling =
  | "ignored"
  | "tenancy-shortened"
  | "rejected"
  | "unknown"
  | "unclear";

/**
 * The accommodation model — how you interact with the place as a renter.
 * Distinct from BuildingType (which is about construction/tenure) — LivingModel
 * captures the operational model that determines qualification difficulty,
 * what's included in the price, and the agreement type.
 */
export type LivingModel =
  | "standard-btr"
  | "co-living"
  | "serviced-apartment"
  | "apart-hotel"
  | "managed-studio"
  | "private-landlord";

/** Relative cost positioning among London rental projects. */
export type CostTier = "budget" | "affordable" | "mid-range" | "premium" | "luxury";

/**
 * Affordability relative to the user profile's monthly rent envelope — not
 * relative to the dataset distribution (that's `CostTier`). This is the signal
 * that answers "can I afford this?" for Caner specifically, paired with
 * `GradVisaRealism` which answers "can I qualify?". Both chips render next to
 * each other on the project card as the two-part rentability decision.
 *
 * The tag is researched and assigned by agents, not purely derived from price,
 * because the decision depends on `bills_included`, bills headroom, expected
 * deposit, promotional pricing, and price volatility — all of which need
 * agent judgement. Agents calibrate relatively across the dataset: a project
 * at £2,000/mo might be `"stretch"` in a dataset dominated by £1,500 projects
 * and `"comfortably-affordable"` in a dataset dominated by £2,500 projects.
 */
export type AffordabilityTag =
  | "well-under-budget"       // clearly below envelope — an easy win
  | "comfortably-affordable"  // within envelope with meaningful headroom
  | "at-budget"               // right at the envelope, little headroom
  | "stretch"                 // above envelope but defensible in some scenarios
  | "over-budget"             // clearly above envelope, not realistic
  | "unclear";                // pricing too volatile or unverified to classify

/**
 * Whether the operator publicly lists rental prices on their website.
 * Directly affects how convenient the project is to research — operators that
 * require enquiry for pricing are significantly harder for international renters
 * to evaluate remotely.
 */
export type PriceTransparency = "listed" | "enquire" | "unknown";

/**
 * The qualification block — the most important data on any project, and the
 * one section that determines whether the project is worth emailing at all
 * for a graduate-visa applicant without UK credit history or UK income proof.
 *
 * Schema redesigned 2026-04-16 for post-RRA reality. Every field is either
 * researchable from primary sources (operator FAQ, press, reviews) or an
 * explicit qualitative signal. The `realism_pathways` array + derived
 * `grad_visa_realism` together answer "can I rent here?" without losing the
 * route information the email round needs.
 *
 * See `context/plans/realism-redesign-and-project-view.md` for the full
 * design rationale and the migration rules from the previous schema.
 */
export interface ProjectQualification {
  // ── Structural facts (researchable)
  /** Tenancy (AST, subject to RRA) or licence (exempt from RRA). */
  agreement_type: AgreementType;
  /** Which referencing provider the operator uses. */
  referencing_provider: ReferencingProvider;
  /** Shortest commitment the operator will offer. null = not researched / not surfaced. */
  min_tenancy_months: number | null;

  // ── Income / affordability test
  /** Income multiple required, e.g. 30 means 30× monthly rent annually. null if not found. */
  income_multiple: number | null;
  /** Whether the operator accepts Open Banking income verification instead of payslips. */
  open_banking_accepted: YesNoUncertain;

  // ── Upfront-payment lever
  upfront_rent_policy: UpfrontRentPolicy;

  // ── Guarantor routes
  /** Whether the operator accepts any professional guarantor service (Housing Hand, Guarantid, etc.). */
  accepts_professional_guarantor: YesNoUncertain;
  /** Whether the operator accepts a non-UK-resident individual as guarantor / co-signer (e.g. Homeppl Co-Signer route). */
  accepts_individual_overseas_guarantor: YesNoUncertain;

  // ── Qualitative posture
  credit_check: CreditCheckStrictness;
  international_tenant_policy: IntlTenantPolicy;
  visa_expiry_handling: VisaExpiryHandling;
  qualification_flexibility_signal: FlexibilitySignal;

  // ── Derived
  /** The set of pathways that could work given the operator's stated policy. Empty array = no known route. */
  realism_pathways: RealismPathway[];
  /** Derived dominant from the pathway array + blocked override. Drives the card chip colour. */
  grad_visa_realism: GradVisaRealism;

  // ── Meta
  /** Research queue state for the data skill. */
  research_status: ResearchStatus;

  // ── Evidence
  notes: string;
  sources: SourceLink[];
  provenance?: Provenance;
}

export interface ProjectRental {
  tenure: ("rent" | "buy")[];
  prices: ProjectPrices;
  qualification: ProjectQualification;
  cost_tier?: CostTier;
  /** Affordability relative to the user profile's envelope — see `AffordabilityTag`. */
  affordability: AffordabilityTag;
  /** Whether the operator publicly lists prices on their website, requires enquiry, or hasn't been checked yet. */
  price_transparency: PriceTransparency;
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
  /** The accommodation model — co-living, serviced apartment, apart-hotel, managed studio, standard BTR, or private landlord. */
  living_model: LivingModel;
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
  living_models: Set<LivingModel>;
  grad_visa_realism: Set<GradVisaRealism>;
  affordability: Set<AffordabilityTag>;
  project_grades: Set<Grade>;
  cost_tiers: Set<CostTier>;
  agreement_types: Set<AgreementType>;
  referencing_providers: Set<ReferencingProvider>;
  price_transparency: Set<PriceTransparency>;
  has_pool: boolean;
  has_concierge: boolean;
  // Free-text search
  query: string;
}

/** Sort modes for the area grid. */
export type SortMode = "area-grade" | "best-project-grade" | "name";

/** Sort modes for the project grid (project-view). */
export type ProjectSortMode =
  | "realism"        // achievable first, blocked last — default in project view
  | "project-grade"  // SS → F
  | "price-asc"      // cheapest studio first (falls back to 1-bed if no studio)
  | "area-grade"     // best-area projects first
  | "name";

/** Which top-level view is active: the area grid or the project grid. */
export type ViewMode = "areas" | "projects";

// ────────────────────────────────────────────────────────────────────────────
// Derivation helpers (pure — no React, no data-layer imports beyond types)
// ────────────────────────────────────────────────────────────────────────────

/**
 * Derives the dominant `grad_visa_realism` tag from the pathway array.
 *
 * Priority order (first match wins):
 *   1. If pathways contains `standard-passable` → `"achievable"`
 *   2. If pathways contains `licence-exempt-light-ref` → `"licence-exempt"`
 *   3. If pathways contains any of the guarantor/savings/co-signer/upfront
 *      routes → `"achievable-with-guarantor"`
 *   4. Empty array → `"unknown"` (never auto-derive to `"blocked"` — that's
 *      an explicit authored state meaning "we know the door is shut")
 *
 * Callers that want to preserve `blocked` or `unlikely` must pass them in
 * via a preserved value — this function is a suggestion, not an override.
 *
 * @param pathways The viable pathways researched for this project
 * @param preserved If provided and value is `"blocked"`, `"unlikely"`, or
 *   `"unclear"`, returns that instead of deriving from pathways. Lets the
 *   authored explicit states survive a pathway recalculation.
 */
export function deriveRealism(
  pathways: RealismPathway[],
  preserved?: GradVisaRealism,
): GradVisaRealism {
  if (preserved === "blocked" || preserved === "unlikely" || preserved === "unclear") {
    return preserved;
  }
  if (pathways.includes("standard-passable")) return "achievable";
  if (pathways.includes("licence-exempt-light-ref")) return "licence-exempt";
  if (
    pathways.includes("with-professional-guarantor") ||
    pathways.includes("with-savings") ||
    pathways.includes("with-co-signer-overseas") ||
    pathways.includes("with-upfront-licence")
  ) {
    return "achievable-with-guarantor";
  }
  return "unknown";
}
