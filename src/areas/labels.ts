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
  CreditCheckStrictness,
  FlexibilitySignal,
  GradVisaRealism,
  Grade,
  HeatingType,
  IntlTenantPolicy,
  LivingModel,
  PriceTransparency,
  ProjectAmenityTier,
  Quality,
  RealismPathway,
  ReferencingProvider,
  ResearchStatus,
  TfLZone,
  TierId,
  UpfrontRentPolicy,
  VisaExpiryHandling,
  YesNoUncertain,
} from "./types";
import type { AreaRegeneration, AreaSafety } from "./types";

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

// ─── Living model ─────────────────────────────────────────────────────

export const LIVING_MODEL_LABELS: Record<LivingModel, string> = {
  "standard-btr": "Standard BTR",
  "co-living": "Co-living",
  "serviced-apartment": "Serviced apartment",
  "apart-hotel": "Apart-hotel",
  "managed-studio": "Managed studio",
  "private-landlord": "Private landlord",
};

export const LIVING_MODEL_DESCRIPTIONS: Record<LivingModel, string> = {
  "standard-btr": "Purpose-built rental with standard AST referencing. Professional operator, central process. The default model — requires income proof and credit checks under the RRA.",
  "co-living": "Bills-included, community-focused living. Private studio or room with shared amenity spaces — gym, co-working, events, roof terrace. Typically a licence agreement with lighter qualification. Operators: Folk, The Collective, Vonder, Node Living.",
  "serviced-apartment": "Self-contained furnished apartment with hotel-like services — cleaning, linen, reception, maintenance. Licence agreement. Higher monthly cost but zero-friction entry. Operators: SACO, Cheval, Native Places.",
  "apart-hotel": "Hotel-meets-apartment. Kitchen in the room, hotel reception, regular housekeeping, VAT on the rate. Hospitality licence — just need a credit card. Operators: Locke, Staycity, Room2.",
  "managed-studio": "Purpose-built managed studios with minimal referencing. Self-contained but simpler than a full apartment. Often no credit or background checks — just pay and move in. Operators: The Quarters by Bravo.",
  "private-landlord": "Renting from an individual owner via an agent on the secondary market. Referencing varies — typically harder and less standardised than BTR operators.",
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
  unclear: "Unclear",
  unknown: "Not yet researched",
};

export const GRAD_VISA_REALISM_DESCRIPTIONS: Record<GradVisaRealism, string> = {
  achievable: "At least one qualification route works without conditions. The operator's process accepts applicants without UK credit history or formal UK income.",
  "achievable-with-guarantor": "At least one pathway works — typically a professional guarantor service (Guarantid, Housing Hand), an Open Banking savings route, a non-UK co-signer, or multi-month upfront at a licence operator. Which specific pathway(s) applies is captured in `realism_pathways`.",
  "licence-exempt": "This is a licence agreement, not a tenancy — outside the Renters' Rights Act. The operator sets their own terms for qualification and upfront rent. Referencing is typically light or absent.",
  unlikely: "Researched and evidence leans negative. Standard BTR referencing with no published guarantor acceptance, or explicit requirements we cannot meet. Worth an email only as a fallback — not a top-of-list target.",
  blocked: "Known hard floor — explicit disqualification (Moda Experian 561+, Folio UK-homeowner-only), or the project is purchase-only. The door is shut.",
  unclear: "Researched but evidence is genuinely ambiguous. Could go either way on direct enquiry. Worth a speculative email.",
  unknown: "Not yet researched — data skill queue.",
};

// ─── Realism pathways ─────────────────────────────────────────────────────

export const REALISM_PATHWAY_LABELS: Record<RealismPathway, string> = {
  "standard-passable": "Standard route",
  "with-professional-guarantor": "With guarantor service",
  "with-savings": "With savings (Open Banking)",
  "with-co-signer-overseas": "With overseas co-signer",
  "with-upfront-licence": "With multi-month upfront",
  "licence-exempt-light-ref": "Licence — light referencing",
};

export const REALISM_PATHWAY_DESCRIPTIONS: Record<RealismPathway, string> = {
  "standard-passable": "Operator's standard referencing process accepts applicants without UK credit history or UK employment income. Rare — requires genuine zero-friction policy.",
  "with-professional-guarantor": "Operator accepts a corporate guarantor service (Guarantid, Housing Hand, or similar). The service underwrites rent for a fee (~3–5% of annual rent). Replaces the need for a personal UK guarantor.",
  "with-savings": "Operator accepts 36× monthly rent in savings — verified via Open Banking — as an alternative to the standard income multiple. Homeppl-using operators typically support this pathway.",
  "with-co-signer-overseas": "Operator accepts a non-UK-resident individual as co-signer / guarantor. Homeppl's Co-Signer route is the canonical example; self-employed Turkish parents qualify.",
  "with-upfront-licence": "Operator is licence-based (RRA-exempt) and accepts multi-month rent upfront as a qualification substitute. The upfront-payment lever still works here — unlike ASTs, which are capped at 1 month by the RRA.",
  "licence-exempt-light-ref": "Operator runs a licence model with minimal or no referencing — typically card-and-ID for apart-hotels, or a lightweight in-house check for co-living. No credit-score floor, no employment verification.",
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
  unclear: "Unclear",
  unknown: "Not yet researched",
};

export const AGREEMENT_TYPE_DESCRIPTIONS: Record<AgreementType, string> = {
  ast: "Standard UK rental tenancy. Subject to the Renters' Rights Act 2025 from 1 May 2026 — advance rent capped at 1 month, all tenancies periodic, Section 21 abolished.",
  licence: "A licence to occupy, not a tenancy. Exempt from the Renters' Rights Act. The operator can set their own terms for upfront rent, fixed periods, and qualification. Common for serviced apartments and extended-stay operators.",
  unclear: "Researched but the operator doesn't publicly state which agreement they use. Direct enquiry needed.",
  unknown: "Agreement type not yet researched.",
};

// ─── Referencing provider ─────────────────────────────────────────────────

export const REFERENCING_PROVIDER_LABELS: Record<ReferencingProvider, string> = {
  homeppl: "Homeppl",
  goodlord: "Goodlord",
  canopy: "Canopy",
  "in-house": "In-house",
  none: "No referencing",
  unclear: "Unclear",
  unknown: "Not yet researched",
};

export const REFERENCING_PROVIDER_DESCRIPTIONS: Record<ReferencingProvider, string> = {
  homeppl: "Uses Open Banking to verify income directly from bank transactions. Does not require UK credit history or formal payslips. The most accessible referencing system for international tenants and those without traditional employment.",
  goodlord: "Standard UK referencing — credit check, income verification via payslips, employer reference. Difficult for tenants without UK credit history.",
  canopy: "Uses Open Banking alongside traditional checks. More flexible than Goodlord but still runs a credit check.",
  "in-house": "The operator runs their own referencing process. Requirements vary — contact directly to find out.",
  none: "No referencing or credit checks. Typically licence-based operators where you just pay and move in.",
  unclear: "Researched but the operator doesn't state their referencing provider publicly. Direct enquiry needed.",
  unknown: "Referencing provider not yet researched.",
};

// ─── Qualification sub-fields ──────────────────────────────────────────────

export const INTL_TENANT_POLICY_LABELS: Record<IntlTenantPolicy, string> = {
  welcomed: "Welcomed",
  "accepted-case-by-case": "Case by case",
  discouraged: "Discouraged",
  rejected: "Rejected",
  unclear: "Unclear",
  unknown: "Not yet researched",
};

export const INTL_TENANT_POLICY_DESCRIPTIONS: Record<IntlTenantPolicy, string> = {
  welcomed: "Operator explicitly welcomes international applicants — often via language like 'we welcome residents from all walks of life' or an international-tenant information page on the site.",
  "accepted-case-by-case": "Operator accepts international applicants but on a case-by-case basis — no explicit welcome, no explicit refusal, depends on documentation.",
  discouraged: "Operator's documentation requirements skew heavily toward UK residents (UK credit history, UK employment, UK guarantor) with no documented alternative. Technically possible but uphill.",
  rejected: "Operator explicitly requires UK residency or a UK guarantor with no alternative — international applicants are not a supported path.",
  unclear: "Researched but the operator's policy on international applicants isn't stated. Direct enquiry needed.",
  unknown: "Not yet researched.",
};

export const VISA_EXPIRY_HANDLING_LABELS: Record<VisaExpiryHandling, string> = {
  ignored: "Ignored — visa expiry doesn't affect tenancy length",
  "tenancy-shortened": "Tenancy shortened to visa expiry",
  rejected: "Rejected if visa expires before tenancy end",
  unclear: "Unclear",
  unknown: "Not yet researched",
};

export const CREDIT_CHECK_LABELS: Record<CreditCheckStrictness, string> = {
  strict: "Strict — requires established UK credit",
  standard: "Standard UK credit reference check",
  lenient: "Lenient — minimal UK credit history accepted",
  unclear: "Unclear",
  unknown: "Not yet researched",
};

export const CREDIT_CHECK_DESCRIPTIONS: Record<CreditCheckStrictness, string> = {
  strict: "Operator runs a UK credit reference check via Equifax/Experian and rejects thin files. Effectively requires 12+ months of UK financial history.",
  standard: "Operator runs a standard UK credit reference check. Requires 6+ months of UK financial activity (bank account, utility bills, prior tenancy reports) to pass cleanly.",
  lenient: "Operator runs a credit check but accepts thin or international files. New UK arrivals are not auto-rejected.",
  unclear: "Researched but the operator's credit-check strictness isn't stated. Direct enquiry needed.",
  unknown: "Not yet researched.",
};

// ─── Upfront rent policy ──────────────────────────────────────────────────

export const UPFRONT_RENT_POLICY_LABELS: Record<UpfrontRentPolicy, string> = {
  "multi-month-available": "Multi-month upfront available",
  "one-month-ast-cap": "One month max (RRA-capped)",
  rejected: "Upfront rejected",
  unclear: "Unclear",
  unknown: "Not yet researched",
};

export const UPFRONT_RENT_POLICY_DESCRIPTIONS: Record<UpfrontRentPolicy, string> = {
  "multi-month-available": "Licence operator — the 1-month RRA cap does not apply. You can offer 3, 6, or 12 months upfront as a qualification lever; operator accepts it as substitute for standard referencing.",
  "one-month-ast-cap": "AST operator — from 1 May 2026 the Renters' Rights Act caps advance rent at one month. 'Pay upfront to bypass referencing' no longer works here.",
  rejected: "Operator explicitly refuses multi-month upfront even when offered — referencing must be cleared via other routes.",
  unclear: "Researched but the operator's upfront-payment policy isn't stated.",
  unknown: "Not yet researched.",
};

// ─── Flexibility signal ───────────────────────────────────────────────────

export const FLEXIBILITY_SIGNAL_LABELS: Record<FlexibilitySignal, string> = {
  flexible: "Flexible",
  standard: "Standard",
  rigid: "Rigid",
  unclear: "Unclear",
  unknown: "Not yet researched",
};

export const FLEXIBILITY_SIGNAL_DESCRIPTIONS: Record<FlexibilitySignal, string> = {
  flexible: "Documented cases of the operator flexing on their stated policy when applicants bring unusual circumstances (upfront offer, clean prior tenancy record, parental financial support). Email outreach is a real lever here.",
  standard: "No positive or negative signal. Operator likely runs their stated process without much deviation — treat the published rules as the actual rules.",
  rigid: "Documented cases of the operator holding the line on stated policy even when applicants bring alternative evidence. Don't expect flexibility.",
  unclear: "Researched but flexibility posture couldn't be determined.",
  unknown: "Not yet researched.",
};

// ─── YesNoUncertain (used for several tri-state fields) ───────────────────

export const YES_NO_UNCERTAIN_LABELS: Record<YesNoUncertain, string> = {
  yes: "Yes",
  no: "No",
  unclear: "Unclear",
  unknown: "Not yet researched",
};

// ─── Research status ──────────────────────────────────────────────────────

export const RESEARCH_STATUS_LABELS: Record<ResearchStatus, string> = {
  unresearched: "Not yet researched",
  partial: "Partially researched",
  complete: "Research complete",
};

export const RESEARCH_STATUS_DESCRIPTIONS: Record<ResearchStatus, string> = {
  unresearched: "Default state for new entries. The data skill will research every qualification field.",
  partial: "Some fields have definitive values, others are still at their `unknown` defaults. The data skill will complete the missing fields.",
  complete: "Every researchable field has a definitive value — including `unclear` where the answer genuinely couldn't be determined from primary sources.",
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
