import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const ealingBroadway: Area = {
  id: "ealing-broadway",
  name: "Ealing Broadway",
  aliases: ["Ealing"],
  borough: "Ealing",
  postcodes: ["W5"],

  headline:
    "Elizabeth Line + Central + District at Zone 3 — a four-product transport hub with strong parks and a mature town centre. Peaking as the St George masterplans complete.",
  preview:
    "Ealing Broadway is a genuine four-product transport hub (Central, District, Elizabeth, GWR) at Zone 3 pricing. Walpole Park, Ealing Common, and Lammas Park give strong green access. The Filmworks and Dickens Yard masterplans are completing, making this a peaking-2025-2026 area rather than an ascending one.",

  long_form: {
    full: "Ealing Broadway benefits from the Elizabeth Line (opened 2022), Central, District, and GWR mainline services — four independent rail products at a single interchange. The Filmworks (St George / Berkeley) and Dickens Yard masterplans are the headline residential deliveries, both near completion. The town centre has a real ASB signal (Safer Streets Summer Initiative 2025, worst ASB rate in London in October 2025) concentrated around the Broadway itself, though violent crime remains below Croydon levels. Strong park access with Walpole Park, Ealing Common, and Lammas Park all within walking distance.",
    history: "Historic West London suburban centre. Elizabeth Line arrival in 2022 was the major recent infrastructure event.",
    vibe: "Suburban town centre with a strong high street, independent shops, and a real community feel. More established than regeneration-led areas.",
    weekday: "",
    weekend: "",
    notable: "Pitzhanger Manor (Sir John Soane-designed, in Walpole Park). Elizabeth Line interchange.",
    croydon_comparison: "Similar suburban town-centre feel but with materially stronger transport — four independent rail products vs Croydon's two. Green access is comparable. ASB is a concern at the Broadway itself but violent crime is lower than Croydon.",
  },

  zones: ["Zone 3"],
  connectivity: {
    lines: [
      { name: "Central", type: "tube" },
      { name: "District", type: "tube" },
      { name: "Elizabeth", type: "elizabeth" },
      { name: "GWR", type: "rail" },
    ],
    primary_stations: [
      { name: "Ealing Broadway", lines: ["Central", "District", "Elizabeth", "GWR"], walk_minutes_from_centre: 3 },
    ],
    times_to_anchors: { city_of_london: 24, canary_wharf: 35, soho_fitzrovia: 18, kings_cross_shoreditch: 23 },
    multi_cluster_score: 2,
    redundancy_score: 5,
    notes: "Central + District + Elizabeth + GWR = 4 independent products. Average anchor time 25 min — right at the T5.1 boundary. Redundancy is exceptional (5/5).",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Not yet populated.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "above", crime_vs_croydon: "safer", after_dark_assessment: "Ealing Broadway town centre has a named ASB hotspot (Safer Streets 2025). Residential streets are calmer.", concerns: ["ASB hotspot at Ealing Broadway town centre", "Worst ASB rate in London in October 2025", "Vodafone and O2 introduced locked-door retail policies"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Walpole Park", size_acres: 28, walk_minutes: 10, notes: "Grounds of Pitzhanger Manor, Soane-designed" }, { name: "Ealing Common", size_acres: 47, walk_minutes: 10, notes: "Large open common" }, { name: "Lammas Park", walk_minutes: 10, notes: "" }], overall_assessment: "Strong green. Trio of real parks in walking range. River Brent runs through Pitshanger Park (15 min NW). T2.4: Pass — strong." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "phased", investment_pipeline: "Filmworks final phases. Dickens Yard substantially complete.", recent_milestones: ["Elizabeth Line opening 2022", "Filmworks near completion", "Dickens Yard substantially complete"], upcoming_milestones: ["Filmworks final phases"], trajectory_through_2027: "Peaking 2025-2026. The two major St George masterplans are completing and there is no equivalent new masterplan behind them.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "partial", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Borough rate below Croydon but Ealing Broadway town centre is a named ASB hotspot per Safer Streets 2025. Marginal pass.",
        "1.2": "Filmworks and Dickens Yard (St George / Berkeley) provide modern rental stock.",
        "1.3": "Central + District + Elizabeth + GWR — four independent rail products at a single interchange. Zone 3.",
        "1.4": "ASB is a meaningful T1.4 concern specifically at Ealing Broadway town centre.",
        "1.5": "Public realm in good order around the masterplan areas.",
        "1.6": "Not in decline — Filmworks completing, Elizabeth Line bedding in.",
      },
      "moderate",
      "T1 marginal pass. ASB hotspot at the town centre is a real concern but violent crime remains below Croydon.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "unknown", "2.3": "unknown", "2.4": "pass", "2.5": "unknown", "2.7": "unknown" },
      {
        "2.1": "Mature town centre with strong high street.",
        "2.4": "Strong green — Walpole Park (28 acres), Ealing Common (47 acres), Lammas Park all within 10 min walk.",
      },
      "moderate",
      "T2 partially populated. Strong green access confirmed; daily essentials present via mature town centre.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "unknown", "3.5": "unknown", "3.6": "unknown" },
      {
        "3.1": "Filmworks final phases — peaking not ascending.",
        "3.2": "Pitzhanger Manor and Gallery, strong high street, established cultural identity.",
        "3.3": "'Queen of the suburbs' — strong recognisable identity.",
      },
      "moderate",
      "T3 moderate. Strong established identity but regeneration is peaking rather than ascending.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "unknown", "5.4": "unknown" },
      {
        "5.1": "2/4 anchors ≤25 min. Average 25 min — right at boundary. City (24) and Soho (18) pass; Canary Wharf (35) and KX (23) mixed.",
        "5.2": "Redundancy 5/5 — four independent rail products. Exceptional.",
      },
      "moderate",
      "T5 moderate. Exceptional redundancy but anchor times are at the boundary.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — strong transport redundancy and green access, but ASB concern at town centre, peaking regeneration, and anchor times at the T5.1 boundary.",
  },

  projects: [
    // RESEARCH: Filmworks (St George / Berkeley) — 1-bed from ~£1,800-£1,850/mo (OnTheMarket). BTS via agents.
    // REALISM: unlikely (BTS via private landlords, standard agent referencing)
    // COST_TIER: mid-range (1-bed from ~£1,800)
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "ealing-filmworks", area_id: "ealing-broadway", name: "Ealing Filmworks", developer: "St George (Berkeley)", operator: "St George (Berkeley)", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "Headline St George residential masterplan at Ealing Broadway. Near completion.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "St George / Berkeley specification — reliably modern.",
        t4_1_amenity_package: "Not yet researched.",
        t4_4_signature_arch: "No 2024/25 jury architectural win.",
      },
    }),
    // RESEARCH: Dickens Yard (St George / Berkeley) — BTS, complete. Rental via agents.
    // REALISM: unlikely (BTS via private landlords, standard agent referencing)
    // COST_TIER: mid-range (est. similar to Filmworks £1,800-£2,000)
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "dickens-yard", area_id: "ealing-broadway", name: "Dickens Yard", developer: "St George (Berkeley)", operator: "St George (Berkeley)", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "Substantially complete St George masterplan. Established community.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "St George / Berkeley specification — reliably modern.",
        t4_1_amenity_package: "Not yet researched.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    // RESEARCH: The Warwick — boutique BTS, under 30 units. Private landlords.
    // REALISM: unlikely (micro scheme, private landlord referencing)
    // COST_TIER: UNVERIFIED
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "the-warwick-ealing", area_id: "ealing-broadway", name: "The Warwick", developer: "unknown", operator: "Private landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "Boutique low-rise scheme on Warwick Road, likely under 30 units. Completed 2025. For-sale with rental via private landlords. Minimal managed-rental implications.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "2025 boutique new-build. Likely modern specification but unverified.",
        t4_1_amenity_package: "Small boutique scheme — minimal communal amenities expected.",
        t4_4_signature_arch: "No architectural press signal.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

// ── Project external links & price transparency ──────────────────────────
const filmworks = ealingBroadway.projects.find(p => p.id === "ealing-filmworks")!;
filmworks.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/ealing/filmworks-ealing", label: "Berkeley Group — Filmworks Ealing", type: "developer", accessed_date: "2026-04-12" },
];
filmworks.rental.price_transparency = "enquire";

const dickensYard = ealingBroadway.projects.find(p => p.id === "dickens-yard")!;
dickensYard.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/ealing/dickens-yard", label: "Berkeley Group — Dickens Yard", type: "developer", accessed_date: "2026-04-12" },
];
dickensYard.rental.price_transparency = "enquire";

const warwick = ealingBroadway.projects.find(p => p.id === "the-warwick-ealing")!;
warwick.external_links = [];
warwick.rental.price_transparency = "unknown";

export default ealingBroadway;
