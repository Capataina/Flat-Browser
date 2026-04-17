// Helpers for constructing migrated Area / Project entries.
//
// The Phase B5 migration shapes the existing 19 entries into the new schema.
// Most rich fields (long_form sub-fields, demographics breakdown, amenity lists,
// rental qualification, etc.) have no equivalent in the old data and are stubbed
// with honest "unknown" values so every area passes the validation script and
// renders cleanly in the UI.

import type {
  CriterionScore,
  GradVisaRealism,
  LivingModel,
  Project,
  ProjectAmenities,
  ProjectArchitecture,
  ProjectBuildingQuality,
  ProjectEvaluation,
  ProjectLongForm,
  ProjectQualification,
  ProjectResidentSignal,
  ProjectRental,
  RealismPathway,
  ResearchMeta,
  SourceLink,
  TierEvaluation,
} from "../types";
import { deriveRealism } from "../types";

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
  last_verified: "2026-04-17",
  confidence: "medium",
  open_questions: [
    "Structured fields not yet populated.",
  ],
});

// ────────────────────────────────────────────────────────────────────────────
// Operator-aware qualification defaults
// ────────────────────────────────────────────────────────────────────────────
//
// Populated 2026-04-16 by the data-upkeep skill's first research run. Each
// operator entry encodes the researched qualification fields at operator level
// — shared policies that apply across all buildings the operator manages.
//
// Per-building variations (e.g. Pearl Yard's 3-month minimum vs Greystar's
// 12-month standard) are overlaid via targeted edits in the area data files
// after this helper applies the operator-level baseline.
//
// Source material: context/data-upkeep/proposals/<operator-slug>.md
// Research-run report: context/data-upkeep/runs/2026-04-16.md

interface OperatorProfile {
  agreement_type: ProjectQualification["agreement_type"];
  referencing_provider: ProjectQualification["referencing_provider"];
  min_tenancy_months: number | null;
  income_multiple: number | null;
  open_banking_accepted: ProjectQualification["open_banking_accepted"];
  upfront_rent_policy: ProjectQualification["upfront_rent_policy"];
  accepts_professional_guarantor: ProjectQualification["accepts_professional_guarantor"];
  accepts_individual_overseas_guarantor: ProjectQualification["accepts_individual_overseas_guarantor"];
  credit_check: ProjectQualification["credit_check"];
  international_tenant_policy: ProjectQualification["international_tenant_policy"];
  visa_expiry_handling: ProjectQualification["visa_expiry_handling"];
  qualification_flexibility_signal: ProjectQualification["qualification_flexibility_signal"];
  realism_pathways: RealismPathway[];
  notes: string;
  source_urls: string[];
}

const SRC = (url: string, label: string, type: SourceLink["type"] = "operator"): SourceLink => ({
  url,
  label,
  type,
  accessed_date: "2026-04-16",
});

const OPERATOR_PROFILES: Record<string, OperatorProfile> = {
  // ── Homeppl-family BTR (welcomed international, savings pathway) ──
  "quintain living": {
    agreement_type: "ast",
    referencing_provider: "homeppl",
    min_tenancy_months: 3,
    income_multiple: 30,
    open_banking_accepted: "yes",
    upfront_rent_policy: "one-month-ast-cap",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "no",
    credit_check: "lenient",
    international_tenant_policy: "welcomed",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "flexible",
    realism_pathways: ["with-savings"],
    notes: "Quintain's Homeppl stack supports a savings-based qualification route — 36× monthly rent in savings via Open Banking. The professional-guarantor pathway is unverified (the 2026 FAQ mentions UK-based family guarantors only, not Guarantid or Housing Hand). Direct enquiry about corporate-guarantor acceptance is the load-bearing question. Advance rent at new ASTs is capped at one month post-RRA (1 May 2026).",
    source_urls: [
      "https://www.quintainliving.com/faqs",
      "https://www.quintainliving.com/apartment-buildings",
      "https://www.homeppl.com/lp/case-study-quintain-living/",
    ],
  },

  greystar: {
    agreement_type: "ast",
    referencing_provider: "homeppl",
    min_tenancy_months: 12,
    income_multiple: 32,
    open_banking_accepted: "yes",
    upfront_rent_policy: "one-month-ast-cap",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "unclear",
    credit_check: "lenient",
    international_tenant_policy: "accepted-case-by-case",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "standard",
    realism_pathways: ["with-savings"],
    notes: "Greystar runs Homeppl referencing across the UK portfolio (verified at Pearl Yard, Bloom Nine Elms, Ten Degrees). Homeppl's savings-based affordability route (36× monthly rent in savings via Open Banking) is the cleanest pathway for applicants without UK payslips. The load-bearing unverified question is whether Greystar accepts Guarantid (Homeppl's native corporate guarantor) — a direct enquiry unlocks a second route.",
    source_urls: [
      "https://www.pearlyardbermondsey.com/faqs",
      "https://www.bloomnineelms.com/faqs",
      "https://www.greystar.com/",
    ],
  },

  "fizzy living (greystar)": {
    agreement_type: "ast",
    referencing_provider: "homeppl",
    min_tenancy_months: 12,
    income_multiple: 32,
    open_banking_accepted: "yes",
    upfront_rent_policy: "one-month-ast-cap",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "unclear",
    credit_check: "lenient",
    international_tenant_policy: "accepted-case-by-case",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "standard",
    realism_pathways: ["with-savings"],
    notes: "Fizzy Living (Greystar subsidiary) uses Homeppl referencing with the savings-based route open via Open Banking. Single central leasing line (020 8154 3110) covers all five Fizzy buildings; one enquiry resolves policy across the portfolio. The Guarantid acceptance question is the same as Greystar direct — unverified, direct enquiry recommended.",
    source_urls: [
      "https://fizzyliving.com/",
      "https://fizzyliving.com/help/",
    ],
  },

  "fizzy living (greystar subsidiary)": {
    agreement_type: "ast",
    referencing_provider: "homeppl",
    min_tenancy_months: 12,
    income_multiple: 32,
    open_banking_accepted: "yes",
    upfront_rent_policy: "one-month-ast-cap",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "unclear",
    credit_check: "lenient",
    international_tenant_policy: "accepted-case-by-case",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "standard",
    realism_pathways: ["with-savings"],
    notes: "Fizzy Living (Greystar subsidiary) uses Homeppl referencing with the savings-based route open via Open Banking. Single central leasing line (020 8154 3110) covers all five Fizzy buildings.",
    source_urls: ["https://fizzyliving.com/"],
  },

  "get living": {
    agreement_type: "ast",
    referencing_provider: "homeppl",
    min_tenancy_months: 12,
    income_multiple: 30,
    open_banking_accepted: "yes",
    upfront_rent_policy: "one-month-ast-cap",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "yes",
    credit_check: "lenient",
    international_tenant_policy: "welcomed",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "standard",
    realism_pathways: ["with-savings", "with-co-signer-overseas"],
    notes: "Get Living uses Homeppl referencing, which opens TWO independent pathways for Caner: (1) 36× monthly rent in savings with 3 months of Open Banking bank statements, (2) Homeppl Co-Signer with a non-UK-resident (Turkish parents qualify). Standard 30× income route opens if Caner secures UK employment. Get Living publicly offers 3-year contracts with break clauses. Housing Hand / Guarantid acceptance unverified — direct enquiry would add a third redundant pathway.",
    source_urls: [
      "https://www.getliving.com/faqs/",
      "https://www.getliving.com/living-with-us/",
      "https://homeppl.help.thirdfort.com/hc/en-gb",
    ],
  },

  "grainger plc": {
    agreement_type: "ast",
    referencing_provider: "unclear",
    min_tenancy_months: 12,
    income_multiple: 30,
    open_banking_accepted: "unclear",
    upfront_rent_policy: "one-month-ast-cap",
    accepts_professional_guarantor: "yes",
    accepts_individual_overseas_guarantor: "unclear",
    credit_check: "standard",
    international_tenant_policy: "accepted-case-by-case",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "flexible",
    realism_pathways: ["with-professional-guarantor"],
    notes: "Grainger plc has verbatim guarantor-acceptance language on the rental-process page: 'We do accept guarantors or a higher proportion of rent in advance, but we recommend you discuss this upfront with our team.' Income requirement is 30× monthly rent. Referencing provider is not named on the public page — direct enquiry should confirm whether Housing Hand or an equivalent corporate guarantor service qualifies. Grainger's 'Better Renting' positioning is flex-positive with 1/3/5-year tenancy options.",
    source_urls: [
      "https://www.graingerplc.co.uk/living-with-us/our-rental-process",
      "https://corporate.graingerplc.co.uk/better-renting",
    ],
  },

  grainger: {
    // alias — same policies as Grainger plc
    agreement_type: "ast",
    referencing_provider: "unclear",
    min_tenancy_months: 12,
    income_multiple: 30,
    open_banking_accepted: "unclear",
    upfront_rent_policy: "one-month-ast-cap",
    accepts_professional_guarantor: "yes",
    accepts_individual_overseas_guarantor: "unclear",
    credit_check: "standard",
    international_tenant_policy: "accepted-case-by-case",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "flexible",
    realism_pathways: ["with-professional-guarantor"],
    notes: "Grainger has verbatim guarantor-acceptance language: 'We do accept guarantors or a higher proportion of rent in advance.' Income requirement is 30× monthly rent. Direct enquiry should confirm corporate guarantor service acceptance.",
    source_urls: ["https://www.graingerplc.co.uk/living-with-us/our-rental-process"],
  },

  morro: {
    agreement_type: "licence",
    referencing_provider: "homeppl",
    min_tenancy_months: 1,
    income_multiple: 27,
    open_banking_accepted: "yes",
    upfront_rent_policy: "multi-month-available",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "unclear",
    credit_check: "lenient",
    international_tenant_policy: "accepted-case-by-case",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "flexible",
    realism_pathways: ["with-savings", "with-upfront-licence"],
    notes: "Morro uses a rolling-tenancy licence model with Homeppl-referenced 27× income multiple (lower than typical 30×). Bills-included, 2-month tenant notice. The savings route via Open Banking is available; upfront-rent is a live lever because the agreement is licence (RRA 1-month cap doesn't bind). Direct enquiry about corporate guarantor acceptance is worth asking.",
    source_urls: ["https://bymorro.com/"],
  },

  // ── Licence-exempt co-living (welcoming, light-ref) ──
  folk: {
    agreement_type: "licence",
    referencing_provider: "in-house",
    min_tenancy_months: 3,
    income_multiple: null,
    open_banking_accepted: "unclear",
    upfront_rent_policy: "multi-month-available",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "unclear",
    credit_check: "lenient",
    international_tenant_policy: "welcomed",
    visa_expiry_handling: "ignored",
    qualification_flexibility_signal: "flexible",
    realism_pathways: ["licence-exempt-light-ref", "with-upfront-licence"],
    notes: "Folk operates on a licence model with in-house judgement-based proof-of-income — no named third-party referencing provider, no published income multiple. FAQ verbatim: 'we welcome residents from all walks of life and cultural backgrounds'. Zero deposit; £200 holding fee deducted from first month. Structurally the most qualification-friendly operator in the dataset for Caner's profile.",
    source_urls: ["https://folkcoliving.com/contact-us"],
  },

  "node living": {
    agreement_type: "licence",
    referencing_provider: "none",
    min_tenancy_months: 3,
    income_multiple: null,
    open_banking_accepted: "yes",
    upfront_rent_policy: "multi-month-available",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "yes",
    credit_check: "none" as never,
    international_tenant_policy: "welcomed",
    visa_expiry_handling: "ignored",
    qualification_flexibility_signal: "flexible",
    realism_pathways: ["licence-exempt-light-ref", "with-upfront-licence"],
    notes: "Node Living publishes the strongest verbatim no-referencing language of any operator in the dataset: 'we don't [run referencing]. We simplify the process. You only need to provide a one-month deposit and the proportional first month's rent to secure your space.' Explicitly welcomes international workers, expats, digital nomads, students 22-40. 3-month minimum; 24-month booking ceiling then re-book conversation.",
    source_urls: ["https://node-living.com/london/"],
  },

  "ark co-living": {
    agreement_type: "licence",
    referencing_provider: "in-house",
    min_tenancy_months: 3,
    income_multiple: null,
    open_banking_accepted: "unclear",
    upfront_rent_policy: "multi-month-available",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "unclear",
    credit_check: "lenient",
    international_tenant_policy: "welcomed",
    visa_expiry_handling: "ignored",
    qualification_flexibility_signal: "flexible",
    realism_pathways: ["with-upfront-licence"],
    notes: "ARK Co-living runs a membership-based licence model. Entry requires £500 non-refundable down-payment + first month + 5-week bond (~£4,160 at Wembley Classic). Cash-upfront substitutes for credit check. 3-12 month membership tiers with annual re-pricing. The full-stay-upfront option is a real qualification lever.",
    source_urls: [
      "https://arkcoliving.com/wembley/",
      "https://arkcoliving.com/canary-wharf/",
    ],
  },

  "outpost management (enclave brand) / blackrock": {
    agreement_type: "ast",
    referencing_provider: "in-house",
    min_tenancy_months: 6,
    income_multiple: 30,
    open_banking_accepted: "unclear",
    upfront_rent_policy: "one-month-ast-cap",
    accepts_professional_guarantor: "yes",
    accepts_individual_overseas_guarantor: "unclear",
    credit_check: "standard",
    international_tenant_policy: "welcomed",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "flexible",
    realism_pathways: ["with-professional-guarantor"],
    notes: "Enclave (Outpost Management / BlackRock) publishes TWO explicit qualification fallbacks in their FAQ: (1) guarantor accepted, (2) advance rental payments if affordability criteria not met. The advance-rent route narrows post-RRA (1-month cap on new ASTs) but the guarantor route is durable. Zero deposit; £250 holding fee. 6-18 month AST range. International welcome verbatim.",
    source_urls: ["https://enclave.com/locations/acton"],
  },

  "apo group": {
    agreement_type: "ast",
    referencing_provider: "in-house",
    min_tenancy_months: 12,
    income_multiple: 30,
    open_banking_accepted: "unclear",
    upfront_rent_policy: "one-month-ast-cap",
    accepts_professional_guarantor: "yes",
    accepts_individual_overseas_guarantor: "unclear",
    credit_check: "standard",
    international_tenant_policy: "accepted-case-by-case",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "flexible",
    realism_pathways: ["with-professional-guarantor"],
    notes: "APO Group (Kew Bridge) uses Reference My Tenant (RMT) referencing. Two published fallbacks: (1) explicit advance-rent route for failed affordability (now RRA-1-month-capped), (2) Flatfair No Deposit option (1 week's rent + VAT non-refundable). HomeViews 4.46/5 with 97 reviews, ranked 1st of 12 in Brentford. Strongest AST-structured flexibility in the dataset.",
    source_urls: ["https://www.a-part-of.com/places/kew-bridge"],
  },

  // ── Hard-blocked operators ──
  "moda living": {
    agreement_type: "ast",
    referencing_provider: "canopy",
    min_tenancy_months: 12,
    income_multiple: 30,
    open_banking_accepted: "yes",
    upfront_rent_policy: "one-month-ast-cap",
    accepts_professional_guarantor: "no",
    accepts_individual_overseas_guarantor: "no",
    credit_check: "strict",
    international_tenant_policy: "discouraged",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "rigid",
    realism_pathways: [],
    notes: "Moda Living enforces an explicit Experian credit-score floor of 561+ — a structural hard-block for applicants without UK credit history. No corporate guarantor route, no overseas guarantor, no savings substitution published. The door is shut for Caner's profile; email effort is wasted here.",
    source_urls: ["https://casa.moda/qualification-criteria"],
  },

  "folio london": {
    agreement_type: "ast",
    referencing_provider: "goodlord",
    min_tenancy_months: 12,
    income_multiple: 30,
    open_banking_accepted: "no",
    upfront_rent_policy: "one-month-ast-cap",
    accepts_professional_guarantor: "no",
    accepts_individual_overseas_guarantor: "no",
    credit_check: "standard",
    international_tenant_policy: "discouraged",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "rigid",
    realism_pathways: [],
    notes: "Folio London (Notting Hill Genesis BTR arm) requires a UK-homeowner guarantor with 30× income — no corporate-guarantor alternative, no overseas route. Hard-blocked for Caner's profile.",
    source_urls: ["https://www.nhg.org.uk/folio"],
  },

  "way of life": {
    agreement_type: "ast",
    referencing_provider: "goodlord",
    min_tenancy_months: 12,
    income_multiple: 30,
    open_banking_accepted: "unclear",
    upfront_rent_policy: "one-month-ast-cap",
    accepts_professional_guarantor: "no",
    accepts_individual_overseas_guarantor: "no",
    credit_check: "standard",
    international_tenant_policy: "rejected",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "rigid",
    realism_pathways: [],
    notes: "Way of Life uses Goodlord referencing with a UK-based guarantor requirement. The 12-month upfront-rent fallback historically available is dead post-RRA (1-month cap). Hard-blocked for Caner's profile without a UK salary.",
    source_urls: ["https://wayoflife.com/"],
  },

  // ── Vertus (luxury Canary Wharf BTR — unclear) ──
  vertus: {
    agreement_type: "ast",
    referencing_provider: "unclear",
    min_tenancy_months: 12,
    income_multiple: 30,
    open_banking_accepted: "unclear",
    upfront_rent_policy: "one-month-ast-cap",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "unclear",
    credit_check: "standard",
    international_tenant_policy: "accepted-case-by-case",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "standard",
    realism_pathways: [],
    notes: "Vertus (Canary Wharf) publishes 30× income multiple but does not name a referencing provider or guarantor policy publicly. Five structural fields remain unverified — the qualification stack is opaque. Luxury pricing (1-bed £3,000+/mo) means the income floor is unreachable for Caner without a pathway. Direct enquiry required; realism currently unclear.",
    source_urls: ["https://thisisvertus.com/"],
  },

  // ── UNCLE (borderline) ──
  "realstar (uncle brand)": {
    agreement_type: "ast",
    referencing_provider: "in-house",
    min_tenancy_months: 6,
    income_multiple: 28,
    open_banking_accepted: "unclear",
    upfront_rent_policy: "one-month-ast-cap",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "unclear",
    credit_check: "standard",
    international_tenant_policy: "accepted-case-by-case",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "standard",
    realism_pathways: [],
    notes: "UNCLE (Realstar) uses a 28× income multiple (lower than typical 30×) with 6-month minimum and 3-year maximum. In-house referencing. Corporate guarantor acceptance is unverified — worth a direct enquiry since UNCLE has shown flexibility in prior research. Currently realism is unclear until corporate guarantor status is confirmed.",
    source_urls: ["https://uncle.co.uk/"],
  },

  // ── Apart-hotels (licence-exempt, card-only) ──
  "locke (staycity)": {
    agreement_type: "licence",
    referencing_provider: "none",
    min_tenancy_months: 1,
    income_multiple: null,
    open_banking_accepted: "yes",
    upfront_rent_policy: "multi-month-available",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "yes",
    credit_check: "none" as never,
    international_tenant_policy: "welcomed",
    visa_expiry_handling: "ignored",
    qualification_flexibility_signal: "flexible",
    realism_pathways: ["licence-exempt-light-ref"],
    notes: "Locke / Staycity apart-hotels operate on hospitality licences — card-and-ID only, no referencing. Extended-stay rates (28+ nights) discount ~25-40% off rack. Booking is effectively same-day. International welcome is the business model.",
    source_urls: ["https://www.lockeliving.com/"],
  },

  citadines: {
    agreement_type: "licence",
    referencing_provider: "none",
    min_tenancy_months: 1,
    income_multiple: null,
    open_banking_accepted: "yes",
    upfront_rent_policy: "multi-month-available",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "yes",
    credit_check: "none" as never,
    international_tenant_policy: "welcomed",
    visa_expiry_handling: "ignored",
    qualification_flexibility_signal: "flexible",
    realism_pathways: ["licence-exempt-light-ref"],
    notes: "Citadines (Ascott) serviced apartments — hospitality licence, card-only booking. No referencing.",
    source_urls: ["https://www.discoverasr.com/"],
  },

  "the gate": {
    agreement_type: "licence",
    referencing_provider: "none",
    min_tenancy_months: 1,
    income_multiple: null,
    open_banking_accepted: "yes",
    upfront_rent_policy: "multi-month-available",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "yes",
    credit_check: "none" as never,
    international_tenant_policy: "welcomed",
    visa_expiry_handling: "ignored",
    qualification_flexibility_signal: "flexible",
    realism_pathways: ["licence-exempt-light-ref"],
    notes: "The Gate London City (Aldgate) — hospitality licence, ~£1,900/mo all-inclusive 28+ night long-stay rate. Card only.",
    source_urls: ["https://thegate-london.com/long-stay"],
  },

  flexistay: {
    agreement_type: "licence",
    referencing_provider: "none",
    min_tenancy_months: 1,
    income_multiple: null,
    open_banking_accepted: "yes",
    upfront_rent_policy: "multi-month-available",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "yes",
    credit_check: "none" as never,
    international_tenant_policy: "welcomed",
    visa_expiry_handling: "ignored",
    qualification_flexibility_signal: "flexible",
    realism_pathways: ["licence-exempt-light-ref"],
    notes: "Flexistay Tooting — hospitality licence, card-only booking.",
    source_urls: ["https://www.flexistay.co.uk/"],
  },

  "the quarters by bravo": {
    agreement_type: "licence",
    referencing_provider: "in-house",
    min_tenancy_months: 1,
    income_multiple: null,
    open_banking_accepted: "yes",
    upfront_rent_policy: "multi-month-available",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "yes",
    credit_check: "lenient",
    international_tenant_policy: "welcomed",
    visa_expiry_handling: "ignored",
    qualification_flexibility_signal: "flexible",
    realism_pathways: ["licence-exempt-light-ref", "with-upfront-licence"],
    notes: "The Quarters by Bravo runs a per-building policy — the Croydon branch (per first-party intel) has no credit or background checks, pay-and-move. Other branches (Kilburn, Swiss Cottage) have in-house referencing. 30-day licence option available.",
    source_urls: ["https://www.thequartersby.com/"],
  },

  "bravo investment house": {
    agreement_type: "licence",
    referencing_provider: "in-house",
    min_tenancy_months: 1,
    income_multiple: null,
    open_banking_accepted: "yes",
    upfront_rent_policy: "multi-month-available",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "yes",
    credit_check: "lenient",
    international_tenant_policy: "welcomed",
    visa_expiry_handling: "ignored",
    qualification_flexibility_signal: "flexible",
    realism_pathways: ["licence-exempt-light-ref", "with-upfront-licence"],
    notes: "Bravo Investment House operates The Quarters model with per-building policy variation. Structurally licence-exempt.",
    source_urls: ["https://www.thequartersby.com/"],
  },

  "native residential": {
    agreement_type: "ast",
    referencing_provider: "in-house",
    min_tenancy_months: 6,
    income_multiple: 30,
    open_banking_accepted: "unclear",
    upfront_rent_policy: "one-month-ast-cap",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "unclear",
    credit_check: "standard",
    international_tenant_policy: "accepted-case-by-case",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "standard",
    realism_pathways: [],
    notes: "Native Residential runs standard AST BTR (not aparthotel — Native Places is a separate sold-off brand). In-house referencing with unverified corporate-guarantor acceptance. Premium pricing at Alma (£2,950+ studio).",
    source_urls: ["https://nativeresidential.com/"],
  },

  // ── Housing associations / councils — all blocked for private rent ──
  "southwark council": {
    agreement_type: "unknown",
    referencing_provider: "none",
    min_tenancy_months: null,
    income_multiple: null,
    open_banking_accepted: "unclear",
    upfront_rent_policy: "unknown",
    accepts_professional_guarantor: "no",
    accepts_individual_overseas_guarantor: "no",
    credit_check: "unknown",
    international_tenant_policy: "rejected",
    visa_expiry_handling: "rejected",
    qualification_flexibility_signal: "rigid",
    realism_pathways: [],
    notes: "Council-owned social housing — not accessible to private renters at market rent. Hard-blocked for Caner's profile.",
    source_urls: [],
  },
};

// Aliases for operator name variants
const OPERATOR_ALIASES: Record<string, string> = {
  "fizzy living (greystar subsidiary)": "fizzy living (greystar)",
  "greenwich council": "southwark council",
  "camden council": "southwark council",
  "lambeth council": "southwark council",
  "hyde new homes": "southwark council",
  "guinness homes": "southwark council",
  "a2dominion (affordable); private landlords (market)": "southwark council",
  "l&q (affordable); private landlords (market)": "southwark council",
  "dolphin living": "southwark council",
  "swan housing / sanctuary": "southwark council",
  "peabody": "southwark council",
  "peabody / the trampery": "southwark council",
  // Developer-only attributions (not direct operators) → secondary-market defaults
  "berkeley": "__secondary__",
  "berkeley group": "__secondary__",
  "st george": "__secondary__",
  "st george (berkeley)": "__secondary__",
  "st james": "__secondary__",
  "ballymore": "__secondary__",
  "ecoworld ballymore": "__secondary__",
  "lendlease": "__secondary__",
  "stanhope": "__secondary__",
  "british land": "__secondary__",
  "galliard": "__secondary__",
  "galliard homes": "__secondary__",
  "telford": "__secondary__",
  "telford homes": "__secondary__",
  "telford / cbre im": "__secondary__",
  "muse / barratt": "__secondary__",
  "barratt": "__secondary__",
  "be living": "__secondary__",
  "related": "__secondary__",
  "related argent": "__secondary__",
  "argent": "__secondary__",
  "knight dragon": "__secondary__",
  "greenland": "__secondary__",
  "downing": "__secondary__",
  "here east": "__secondary__",
  "broadwick / kerb": "__secondary__",
  "btr operating ltd": "__secondary__",
  "manhattan loft gardens": "__secondary__",
  "dolphin square": "__secondary__",
  "park hyatt": "locke (staycity)",
  "staybridge suites (ihg)": "locke (staycity)",
  "mha london": "locke (staycity)",
  "the gate": "the gate",
  "gravity co": "__secondary__",
  "dandi": "__secondary__",
  "vonder (lettings via fraser bond)": "__secondary__",
  "amro partners": "__secondary__",
  "l&g living": "grainger plc",
  "legal & general": "grainger plc",
  "citadines (ascott)": "citadines",
  "dalston works": "__secondary__",
  "native residential": "native residential",
  "folio london": "folio london",
  "essential living": "__secondary__",
  "native communities": "native residential",
  "enclave (outpost)": "outpost management (enclave brand) / blackrock",
  "savills (sales agent)": "__secondary__",
  "savills (managed lettings)": "__secondary__",
  "mount anvil / private landlords": "__secondary__",
  "st george / private landlords": "__secondary__",
  "ballymore / private landlords": "__secondary__",
  "private sale": "__secondary__",
  "private sale / shared ownership": "__secondary__",
  "unknown": "__secondary__",
  "": "__secondary__",
};

// Secondary-market operator labels — applies a shared "unlikely" default with
// a narrative explaining individual-landlord qualification constraints for
// graduate-visa applicants. Source: 2026-04-16 data-upkeep proposals (long-tail-singles,
// secondary-market, bps-lettings, housing-associations batches).
const SECONDARY_MARKET_LABELS = new Set<string>([
  "various",
  "individual landlords",
  "various agents",
  "agent-managed",
  "private landlords",
  "private sale",
  "private sale / shared ownership",
  "savills (sales agent)",
  "savills (managed lettings)",
  "st george / private landlords",
  "mount anvil / private landlords",
  "ballymore / private landlords",
  "galliard",
  "galliard homes",
  "barratt",
  "muse / barratt",
  "bps lettings",
]);

const SECONDARY_MARKET_PROFILE: OperatorProfile = {
  agreement_type: "ast",
  referencing_provider: "unclear",
  min_tenancy_months: 12,
  income_multiple: 30,
  open_banking_accepted: "unclear",
  upfront_rent_policy: "one-month-ast-cap",
  accepts_professional_guarantor: "unclear",
  accepts_individual_overseas_guarantor: "unclear",
  credit_check: "standard",
  international_tenant_policy: "accepted-case-by-case",
  visa_expiry_handling: "unclear",
  qualification_flexibility_signal: "standard",
  realism_pathways: [],
  notes: "Secondary-market / individual-landlord rental. Qualification varies per listing and agent; no single referencing stack. Realism is typically unlikely for graduate-visa applicants because individual landlords default to standard referencing (Goodlord/HomeLet) without published guarantor-acceptance or Open Banking pathways. Exception: some landlords and agents accept upfront-rent offers — a per-listing conversation rather than a researchable policy.",
  source_urls: [],
};

function resolveOperatorKey(operator: string): string {
  const key = operator.trim().toLowerCase();
  return OPERATOR_ALIASES[key] ?? key;
}

/**
 * Returns operator-specific qualification defaults where known, otherwise
 * falls back to blank-slate defaults. Applied by `stubRental()` when an
 * operator is passed through `buildProject()`.
 *
 * Per-project variations (e.g. Pearl Yard's 3-month minimum vs Greystar's
 * 12-month standard, or promotional pricing notes) are overlaid via
 * targeted edits in the individual area data files after this default is applied.
 */
export function operatorQualificationDefaults(
  operator: string | undefined,
  preservedRealism: GradVisaRealism = "unknown",
): ProjectQualification {
  const key = operator ? resolveOperatorKey(operator) : "";
  let profile = key ? OPERATOR_PROFILES[key] : undefined;

  // Secondary-market catch-all — shared "unlikely" default with narrative.
  // Triggered by either a name in SECONDARY_MARKET_LABELS or an alias → "__secondary__".
  const isSecondary = SECONDARY_MARKET_LABELS.has(key) || key === "__secondary__";
  if (!profile && isSecondary) {
    profile = SECONDARY_MARKET_PROFILE;
    const derived = preservedRealism !== "unknown" ? preservedRealism : "unlikely";
    const result = applyProfile(profile, derived);
    result.research_status = "partial";
    result.grad_visa_realism = derived;
    return result;
  }

  if (!profile) {
    return blankStubQualification(preservedRealism);
  }

  return applyProfile(profile, preservedRealism);
}

function applyProfile(
  profile: OperatorProfile,
  preservedRealism: GradVisaRealism,
): ProjectQualification {
  const derivedRealism = deriveRealism(profile.realism_pathways, preservedRealism);

  return {
    agreement_type: profile.agreement_type,
    referencing_provider: profile.referencing_provider,
    min_tenancy_months: profile.min_tenancy_months,
    income_multiple: profile.income_multiple,
    open_banking_accepted: profile.open_banking_accepted,
    upfront_rent_policy: profile.upfront_rent_policy,
    accepts_professional_guarantor: profile.accepts_professional_guarantor,
    accepts_individual_overseas_guarantor: profile.accepts_individual_overseas_guarantor,
    credit_check: profile.credit_check,
    international_tenant_policy: profile.international_tenant_policy,
    visa_expiry_handling: profile.visa_expiry_handling,
    qualification_flexibility_signal: profile.qualification_flexibility_signal,
    realism_pathways: profile.realism_pathways,
    grad_visa_realism: derivedRealism,
    research_status: "complete",
    notes: profile.notes,
    sources: profile.source_urls.map((url, i) =>
      SRC(url, `Operator reference ${i + 1}`, "operator"),
    ),
  };
}

/**
 * Default when no operator match — every field at "unknown" / null / empty.
 * Same shape as the pre-existing `stubQualification` behaviour.
 */
function blankStubQualification(
  realism: GradVisaRealism = "unknown",
): ProjectQualification {
  return {
    agreement_type: "unknown",
    referencing_provider: "unknown",
    min_tenancy_months: null,
    income_multiple: null,
    open_banking_accepted: "unknown",
    upfront_rent_policy: "unknown",
    accepts_professional_guarantor: "unknown",
    accepts_individual_overseas_guarantor: "unknown",
    credit_check: "unknown",
    international_tenant_policy: "unknown",
    visa_expiry_handling: "unknown",
    qualification_flexibility_signal: "unknown",
    realism_pathways: [],
    grad_visa_realism: realism,
    research_status: "unresearched",
    notes: "Rental qualification details not yet researched for this project.",
    sources: [],
  };
}

export const stubQualification = (
  realism: ProjectQualification["grad_visa_realism"] = "unknown",
): ProjectQualification => ({
  // Structural facts — default to "unknown" (data skill will research)
  agreement_type: "unknown",
  referencing_provider: "unknown",
  min_tenancy_months: null,

  // Income / affordability
  income_multiple: null,
  open_banking_accepted: "unknown",

  // Upfront lever
  upfront_rent_policy: "unknown",

  // Guarantor routes
  accepts_professional_guarantor: "unknown",
  accepts_individual_overseas_guarantor: "unknown",

  // Qualitative posture
  credit_check: "unknown",
  international_tenant_policy: "unknown",
  visa_expiry_handling: "unknown",
  qualification_flexibility_signal: "unknown",

  // Derived
  realism_pathways: [],
  grad_visa_realism: realism,

  // Meta
  research_status: "unresearched",

  // Evidence
  notes:
    "Rental qualification details not yet researched for this project.",
  sources: [],
});

export const stubRental = (
  tenure: ("rent" | "buy")[],
  realism: ProjectQualification["grad_visa_realism"] = "unknown",
  operator?: string,
): ProjectRental => ({
  tenure,
  prices: {
    bills_included: false,
    notes: "Price ranges not yet researched.",
  },
  qualification: operator
    ? operatorQualificationDefaults(operator, realism)
    : stubQualification(realism),
  cost_tier: undefined,
  affordability: "unclear",
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
  living_model?: LivingModel;
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
    living_model: input.living_model ?? inferLivingModel(input),
    build_phase: input.build_phase,
    rental: stubRental(input.tenure, input.realism, input.operator),
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

/**
 * Infers the living model from building_type when not explicitly provided.
 * This is a best-effort default — explicit `living_model` in data files is preferred.
 */
function inferLivingModel(input: MigratedProjectInput): LivingModel {
  switch (input.building_type) {
    case "BTR":
    case "PRS":
    case "Mixed":
      return "standard-btr";
    case "Build-to-Sell":
    case "Owner-Lease":
      return "private-landlord";
    default:
      return "standard-btr";
  }
}
