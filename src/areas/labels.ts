// Display label maps for every enum value in the schema.
//
// The schema uses kebab-case / snake_case enum strings (e.g. "much-safer",
// "in_delivery", "achievable-with-guarantor") because they're stable identifiers
// for the data layer. The UI must NEVER show these raw — every enum value
// goes through the matching label here.
//
// Each export is keyed by the enum literal and returns a human-readable
// display label. Optional `description` maps return a short prose explanation
// suitable for inline help or tooltips. The description is intentionally
// short — long explainers live in `src/explainers/`.

import type {
  AgeCohort,
  AgreementType,
  BuildingType,
  BuildPhase,
  ConciergeType,
  CostTier,
  GradVisaRealism,
  Grade,
  HeatingType,
  PriceTransparency,
  ProjectAmenityTier,
  Quality,
  ReferencingProvider,
  TfLZone,
  TierId,
} from "./types";
import type { AreaRegeneration, AreaSafety, ProjectQualification } from "./types";

// ─── Grade ─────────────────────────────────────────────────────────────────

export const GRADE_LABELS: Record<Grade, string> = {
  SS: "SS",
  S: "S",
  A: "A",
  B: "B",
  C: "C",
  F: "F",
};

export const GRADE_DESCRIPTIONS: Record<Grade, string> = {
  SS: "Exceptional — every rubric tier is strong. Top-of-shortlist material.",
  S: "Excellent — most tiers strong, no failing rows.",
  A: "Very good — clean foundational tier, good or moderate elsewhere.",
  B: "Good — passes the foundational tier, mostly good elsewhere with one or two soft spots.",
  C: "Marginal — passes the foundational tier but weak in multiple other areas.",
  F: "Fails the foundational tier outright — should not be in the dataset at all.",
};

// ─── Tier (T1–T5) ──────────────────────────────────────────────────────────

export const TIER_LABELS: Record<TierId, string> = {
  t1: "Foundational viability",
  t2: "Daily life quality",
  t3: "Place identity & trajectory",
  t4: "Premium experience & choice",
  t5: "Personal fit & differentiators",
};

export const TIER_SHORT_LABELS: Record<TierId, string> = {
  t1: "T1",
  t2: "T2",
  t3: "T3",
  t4: "T4",
  t5: "T5",
};

export const TIER_DESCRIPTIONS: Record<TierId, string> = {
  t1: "The hard floor. Six criteria covering safety, modern stock, connectivity, professional rental market, public realm condition, and active trajectory. Failing any T1 row means the area should not be in Flatbrowser at all.",
  t2: "The actual upgrade test. Daily-life amenity quality — what you'd notice in week one. Walkability, grocery, gym access, green space, night quiet, building quality, and demographic skew.",
  t3: "Place identity and momentum. Whether the area has a recognisable character, a cultural anchor, architectural coherence, and a day/night activity rhythm. Catches 'soulless commuter dormitory' failures.",
  t4: "Premium experience overlay. Building amenity packages, signature architecture, retail destinations, multiple operators offering choice. Additive — not required, but distinguishes trophy-tier addresses.",
  t5: "Personal fit and edge differentiators. Specific to Caner: multi-cluster commute reach, transport line redundancy, long-term ascending trajectory, quiet third spaces. Tiebreakers between otherwise-equivalent candidates.",
};

// ─── Criterion status ──────────────────────────────────────────────────────

export const CRITERION_STATUS_LABELS = {
  pass: "Pass",
  partial: "Partial",
  fail: "Fail",
  unknown: "Unknown",
} as const;

export const CRITERION_STATUS_DESCRIPTIONS = {
  pass: "This criterion is fully met. The evidence cited supports a clean pass.",
  partial: "This criterion is partially met. Some evidence supports the pass call, but there's a meaningful weakness or caveat that's worth knowing about.",
  fail: "This criterion is not met. The evidence cited shows the area fails this row of the rubric.",
  unknown: "Not enough verified evidence either way. This will be resolved once further research is complete.",
} as const;

// ─── TfL Zone ──────────────────────────────────────────────────────────────

export const ZONE_LABELS: Record<TfLZone, string> = {
  "Zone 1": "Zone 1",
  "Zone 2": "Zone 2",
  "Zone 3": "Zone 3",
  "Zone 4": "Zone 4",
  "Zone 5": "Zone 5",
  "Zone 6": "Zone 6",
  "Zone 7": "Zone 7",
  "Zone 8": "Zone 8",
  "Zone 9": "Zone 9",
};

export const ZONE_DESCRIPTIONS: Record<TfLZone, string> = {
  "Zone 1": "Central London core. The most expensive zone, fastest access to everything, highest cultural density. King's Cross, Soho, the City all sit here.",
  "Zone 2": "Inner ring around the centre. Balances connectivity and liveability — most major regeneration areas (Canary Wharf, Greenwich Peninsula, Stratford) are Zone 2.",
  "Zone 3": "Outer-inner zone. More space and calmer streets, slightly longer commutes. Zone 3 areas often offer the best price-to-quality ratio.",
  "Zone 4": "Outer zone. Trades longer commutes for value and space. Wembley Park is the canonical Zone 4 candidate.",
  "Zone 5": "Outer-outer zone. Mostly suburban — rare in this dataset because the upgrade-from-Croydon question gets harder this far out.",
  "Zone 6": "Edge of the TfL network. Out of scope for most of this dataset.",
  "Zone 7": "Beyond TfL — typically Greater London fringe.",
  "Zone 8": "Beyond TfL.",
  "Zone 9": "Beyond TfL.",
};

// ─── Age cohort ────────────────────────────────────────────────────────────

export const AGE_COHORT_LABELS: Record<AgeCohort, string> = {
  "18-29": "18–29",
  "30-39": "30–39",
  "40-49": "40–49",
  "50+": "50 and above",
};

export const AGE_COHORT_DESCRIPTIONS: Record<AgeCohort, string> = {
  "18-29": "Dominated by younger adults — graduates, early-career professionals, students. The most aligned cohort for a 24-year-old solo renter.",
  "30-39": "Established young professionals as the dominant age group. Still works well for someone in their 20s, but the social fabric leans slightly older.",
  "40-49": "Mature professionals and early-family households dominant. Quieter, more settled, less of a young-adult social scene.",
  "50+": "Settled mature households dominant. Generally not a fit for a 24-year-old's social profile.",
};

// ─── Building type ─────────────────────────────────────────────────────────

export const BUILDING_TYPE_LABELS: Record<BuildingType, string> = {
  BTR: "Build-to-Rent",
  PRS: "Private Rented Sector",
  "Owner-Lease": "Owner-occupier with lettings",
  "Build-to-Sell": "Build-to-sell",
  Mixed: "Mixed tenure",
};

export const BUILDING_TYPE_DESCRIPTIONS: Record<BuildingType, string> = {
  BTR: "Purpose-built rental. Single professional operator, central referencing, standardised process. The most realistic route for a graduate-visa renter — operators like Vertus, Quintain Living, and Get Living run their entire portfolios this way.",
  PRS: "Private Rented Sector. Mixed managed rental — multiple owners, less standardised process than BTR, but still professional management.",
  "Owner-Lease": "Primarily ownership with active lettings on the secondary market. You're renting from a private owner via an agent rather than from the developer. Referencing is harder and less standardised.",
  "Build-to-Sell": "Built primarily for purchase. Rental availability is incidental — usually requires finding a private landlord on Rightmove rather than going through the developer.",
  Mixed: "Meaningful split between rent and buy in the same building. Both routes are real options.",
};

// ─── Build phase ───────────────────────────────────────────────────────────

export const BUILD_PHASE_LABELS: Record<BuildPhase, string> = {
  complete: "Complete",
  in_delivery: "In delivery",
  future: "Future phase",
  phased: "Phased delivery",
};

export const BUILD_PHASE_DESCRIPTIONS: Record<BuildPhase, string> = {
  complete: "Fully delivered. You can move in today.",
  in_delivery: "Actively under construction with residents already in some completed buildings. New phases coming online over the next 12–24 months.",
  future: "Planning consent or early-stage works only. No residents yet — this is a watch-list entry, not a 'move in next month' option.",
  phased: "Multi-phase development that's been delivering for years and continues to add new phases. Some buildings are mature, others still completing.",
};

// ─── Quality (used for several Quality-typed fields) ───────────────────────

export const QUALITY_LABELS: Record<Quality, string> = {
  excellent: "Excellent",
  good: "Good",
  average: "Average",
  poor: "Poor",
  unknown: "Not yet verified",
};

// ─── Heating type ──────────────────────────────────────────────────────────

export const HEATING_TYPE_LABELS: Record<HeatingType, string> = {
  gas: "Gas",
  electric: "Electric",
  communal: "Communal heating",
  "heat-pump": "Heat pump",
  mixed: "Mixed",
  unknown: "Not yet verified",
};

export const HEATING_TYPE_DESCRIPTIONS: Record<HeatingType, string> = {
  gas: "Individual gas boiler per flat. Generally cheap to run, easy to control, but ageing systems may need landlord investment.",
  electric: "Electric heating. Quick to control but historically expensive to run; modern flats often use efficient electric panel heaters or storage radiators.",
  communal: "Building-wide heating system serving all flats from a single source. You typically pay a flat monthly charge rather than per-use. Quality varies — some communal systems are notoriously inefficient and expensive.",
  "heat-pump": "Modern air-source or ground-source heat pump. Most efficient option, low running costs, common in newer BTR developments.",
  mixed: "Combination of heating sources across the building.",
  unknown: "Not yet verified.",
};

// ─── Concierge ─────────────────────────────────────────────────────────────

export const CONCIERGE_LABELS: Record<ConciergeType, string> = {
  "24h": "24-hour concierge",
  daytime: "Daytime concierge",
  none: "No concierge",
};

export const CONCIERGE_DESCRIPTIONS: Record<ConciergeType, string> = {
  "24h": "Concierge desk staffed around the clock. Parcels accepted any time, security presence overnight, contact for urgent maintenance.",
  daytime: "Concierge desk staffed during business hours. Parcels accepted during the day, no overnight presence.",
  none: "No concierge. Parcels go to neighbours, lockers, or the post office. You're responsible for your own security overnight.",
};

// ─── Project amenity tier ──────────────────────────────────────────────────

export const PROJECT_AMENITY_TIER_LABELS: Record<ProjectAmenityTier, string> = {
  premium: "Premium",
  strong: "Strong",
  decent: "Decent",
  basic: "Basic",
};

export const PROJECT_AMENITY_TIER_DESCRIPTIONS: Record<ProjectAmenityTier, string> = {
  premium: "Top-tier amenity package — pool, premium gym, 24h concierge, sky lounge, co-working, dining room, cinema room. The kind of building that justifies its premium pricing on amenity alone.",
  strong: "Above-average amenity package. Will typically have a meaningful gym, concierge, and one or two standout features (rooftop terrace, co-working, lounge). Comfortable everyday living.",
  decent: "Standard managed-building amenity. Resident gym, basic concierge or daytime cover, shared spaces. Functional but not distinctive.",
  basic: "Minimal amenity offer. Possibly a shared lobby and bike storage but no gym or concierge presence worth highlighting.",
};

// ─── Safety ────────────────────────────────────────────────────────────────

export const SAFETY_OVERALL_LABELS: Record<AreaSafety["overall"], string> = {
  "very-safe": "Very safe",
  safe: "Safe",
  moderate: "Moderate concerns",
  concerning: "Concerning",
};

export const SAFETY_OVERALL_DESCRIPTIONS: Record<AreaSafety["overall"], string> = {
  "very-safe": "Among the safest areas in London. Crime rates well below the borough average, visible street life, well-lit, no documented hotspots.",
  safe: "Safer than average. Crime rates at or below the borough average, no widespread concerns, normal urban awareness sufficient.",
  moderate: "Moderate concerns. Some pockets of higher crime or noticeable anti-social behaviour. Worth being aware of specific streets or times.",
  concerning: "Notable safety concerns. Should be approached with caution and probably ruled out for the upgrade-from-Croydon test.",
};

export const CRIME_VS_BOROUGH_LABELS: Record<AreaSafety["crime_vs_borough"], string> = {
  below: "Below borough average",
  average: "At borough average",
  above: "Above borough average",
};

export const CRIME_VS_CROYDON_LABELS: Record<AreaSafety["crime_vs_croydon"], string> = {
  "much-safer": "Much safer than Croydon",
  safer: "Safer than Croydon",
  similar: "Similar to Croydon",
  worse: "Worse than Croydon",
};

export const CRIME_VS_CROYDON_DESCRIPTIONS: Record<AreaSafety["crime_vs_croydon"], string> = {
  "much-safer": "Materially safer than East Croydon on every measurable metric — fewer reported violent incidents, less anti-social behaviour, no documented hotspots.",
  safer: "Safer than East Croydon overall, though not dramatically so. The upgrade is real but won't be the main reason to move.",
  similar: "Comparable safety profile to East Croydon. No upgrade on this dimension — the move would need to win on something else.",
  worse: "Less safe than East Croydon. This area defeats the upgrade-from-Croydon test and should not be a candidate.",
};

// ─── Regeneration status ───────────────────────────────────────────────────

export const REGENERATION_STATUS_LABELS: Record<AreaRegeneration["status"], string> = {
  complete: "Complete",
  active: "Active regeneration",
  phased: "Phased delivery",
  early: "Early stage",
};

export const REGENERATION_STATUS_DESCRIPTIONS: Record<AreaRegeneration["status"], string> = {
  complete: "Masterplan delivered. Stable rather than ascending — the area is at peak quality and will hold its character rather than improve dramatically.",
  active: "Cranes still up. The area is in active build-out with multiple phases delivering over the next 1–3 years. Strong ascending trajectory.",
  phased: "Multi-phase masterplan partially live. Some buildings mature, others under construction, ongoing public realm investment.",
  early: "Planning consent or early delivery only. A future bet rather than a live area — worth tracking but not a 'move in this year' option.",
};

// ─── Grad-visa realism ─────────────────────────────────────────────────────

export const GRAD_VISA_REALISM_LABELS: Record<GradVisaRealism, string> = {
  achievable: "Achievable",
  "achievable-with-guarantor": "With guarantor",
  "licence-exempt": "Licence exempt",
  unlikely: "Unlikely",
  blocked: "Blocked",
  unknown: "Not yet verified",
};

export const GRAD_VISA_REALISM_DESCRIPTIONS: Record<GradVisaRealism, string> = {
  achievable: "Graduate-visa renters with no UK credit history can realistically pass referencing here through the standard route. Either the operator's income test is lenient, the process is friendly to international tenants, or both.",
  "achievable-with-guarantor": "Standard referencing is blocked, but the operator accepts professional guarantor services (Housing Hand, Guarantid, etc.) as an alternative route. The guarantor underwrites your rent for a fee — typically 3–5% of annual rent.",
  "licence-exempt": "This is a licence agreement, not a tenancy — it sits outside the Renters' Rights Act entirely. The operator sets their own terms for qualification, upfront rent, and fixed periods. No advance rent cap, no mandatory periodic tenancy, no statutory referencing constraints.",
  unlikely: "Operator's standard requirements (30× income, UK credit check, UK guarantor) are above what a graduate-visa renter without UK payslips can meet. No documented flexibility — would require negotiation and probably wouldn't work.",
  blocked: "Operator policies explicitly disqualify graduate-visa renters with no UK credit history, OR the project is purchase-only (Caner cannot buy). This route is closed.",
  unknown: "Not yet verified by research.",
};

// ─── Cost tier ────────────────────────────────────────────────────────────

export const COST_TIER_LABELS: Record<CostTier, string> = {
  budget: "Budget",
  affordable: "Affordable",
  "mid-range": "Mid-range",
  premium: "Premium",
  luxury: "Luxury",
};

export const COST_TIER_DESCRIPTIONS: Record<CostTier, string> = {
  budget: "Lowest cost tier — typically under £1,200/month for a studio. Extended-stay operators, older conversions, outer zones.",
  affordable: "Below London average — typically £1,200–£1,600/month. Managed BTR in zones 3–4 or older stock in zones 1–2.",
  "mid-range": "London average for managed rental — typically £1,600–£2,000/month. Standard BTR in zones 2–3.",
  premium: "Above average — typically £2,000–£2,800/month. High-spec BTR with strong amenities in zones 1–2.",
  luxury: "Top tier — typically £2,800+/month. Trophy buildings, signature architecture, premium operators.",
};

// ─── Price transparency ──────────────────────────────────────────────

export const PRICE_TRANSPARENCY_LABELS: Record<PriceTransparency, string> = {
  listed: "Prices listed",
  enquire: "Enquire only",
  unknown: "Not yet checked",
};

export const PRICE_TRANSPARENCY_DESCRIPTIONS: Record<PriceTransparency, string> = {
  listed: "This operator publicly lists rental prices on their website. You can see what a studio or 1-bed costs before making any contact.",
  enquire: "This operator requires you to enquire for pricing — no public price list. You'll need to contact them or an agent to find out what it costs. Significantly harder to evaluate remotely.",
  unknown: "Price transparency not yet verified for this project.",
};

// ─── Agreement type ───────────────────────────────────────────────────────

export const AGREEMENT_TYPE_LABELS: Record<AgreementType, string> = {
  ast: "Assured Shorthold Tenancy",
  licence: "Licence agreement",
  unknown: "Unknown",
};

export const AGREEMENT_TYPE_DESCRIPTIONS: Record<AgreementType, string> = {
  ast: "Standard UK rental tenancy. Subject to the Renters' Rights Act 2025 from 1 May 2026 — advance rent capped at 1 month, all tenancies periodic, Section 21 abolished.",
  licence: "A licence to occupy, not a tenancy. Exempt from the Renters' Rights Act. The operator can set their own terms for upfront rent, fixed periods, and qualification. Common for serviced apartments and extended-stay operators.",
  unknown: "Agreement type not yet verified.",
};

// ─── Referencing provider ─────────────────────────────────────────────────

export const REFERENCING_PROVIDER_LABELS: Record<ReferencingProvider, string> = {
  homeppl: "Homeppl",
  goodlord: "Goodlord",
  canopy: "Canopy",
  "in-house": "In-house",
  none: "No referencing",
  unknown: "Unknown",
};

export const REFERENCING_PROVIDER_DESCRIPTIONS: Record<ReferencingProvider, string> = {
  homeppl: "Uses Open Banking to verify income directly from bank transactions. Does not require UK credit history or formal payslips. The most accessible referencing system for international tenants and those without traditional employment.",
  goodlord: "Standard UK referencing — credit check, income verification via payslips, employer reference. Difficult for tenants without UK credit history.",
  canopy: "Uses Open Banking alongside traditional checks. More flexible than Goodlord but still runs a credit check.",
  "in-house": "The operator runs their own referencing process. Requirements vary — contact directly to find out.",
  none: "No referencing or credit checks. Typically licence-based operators where you just pay and move in.",
  unknown: "Referencing provider not yet verified.",
};

// ─── Qualification sub-fields ──────────────────────────────────────────────

export const INTERNATIONAL_FRIENDLY_LABELS: Record<ProjectQualification["international_friendly"], string> = {
  yes: "Yes — accepts international references",
  "case-by-case": "Case by case",
  no: "No — UK references only",
  unknown: "Not yet verified",
};

export const VISA_FRIENDLY_LABELS: Record<ProjectQualification["visa_friendly"], string> = {
  yes: "Yes — visa-friendly",
  "case-by-case": "Case by case",
  no: "No",
  unknown: "Not yet verified",
};

export const VISA_EXPIRY_HANDLING_LABELS: Record<ProjectQualification["visa_expiry_handling"], string> = {
  ignored: "Ignored — visa expiry doesn't affect tenancy length",
  "tenancy-shortened": "Tenancy shortened to visa expiry",
  rejected: "Rejected if visa expires before tenancy end",
  unknown: "Not yet verified",
};

export const CREDIT_CHECK_LABELS: Record<ProjectQualification["credit_check"], string> = {
  strict: "Strict — requires established UK credit",
  standard: "Standard UK credit reference check",
  lenient: "Lenient — minimal UK credit history accepted",
};

export const CREDIT_CHECK_DESCRIPTIONS: Record<ProjectQualification["credit_check"], string> = {
  strict: "Operator runs a UK credit reference check via Equifax/Experian and rejects thin files. Effectively requires 12+ months of UK financial history.",
  standard: "Operator runs a standard UK credit reference check. Requires 6+ months of UK financial activity (bank account, utility bills, prior tenancy reports) to pass cleanly.",
  lenient: "Operator runs a credit check but accepts thin or international files. New UK arrivals are not auto-rejected.",
};

// ─── Helpers ───────────────────────────────────────────────────────────────

/**
 * Generic safe lookup with fallback to the raw value if no label exists.
 * Useful when rendering enum values whose label maps may be incomplete.
 */
export function labelOf<K extends string>(
  map: Record<K, string>,
  key: K | undefined | null,
  fallback = "—",
): string {
  if (key == null) return fallback;
  return map[key] ?? String(key);
}
