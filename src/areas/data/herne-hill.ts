import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const herneHill: Area = {
  id: "herne-hill",
  name: "Herne Hill",
  aliases: ["Loughborough Junction"],
  borough: "Lambeth",
  postcodes: ["SE24"],

  headline:
    "Residential calm between Brixton and Dulwich — Thameslink access, Brockwell Park frontage, and an L&G/Nomura BTR site incoming. Ward crime rate 14.3% below Lambeth average, but robbery is the fastest-growing category at +35.4% YoY.",
  preview:
    "Herne Hill sits in the calmer half of Lambeth with a 127.5/1k ward crime rate versus the Lambeth average of 148.8/1k. Brockwell Park is the major green asset. Thameslink gives access to Farringdon (Elizabeth Line) and St Pancras (Northern). L&G/Nomura partnership has its first BTR site here. Average 22.75 min to anchors — all four ≤25 min (borderline).",

  long_form: {
    full: "",
    history: "",
    vibe: "",
    weekday: "",
    weekend: "",
    notable: "Brockwell Park and Brockwell Lido. Herne Hill Velodrome — one of the oldest cycling venues in the world.",
    croydon_comparison: "",
  },

  zones: ["Zone 2", "Zone 3"],
  connectivity: {
    lines: [
      { name: "Thameslink", type: "rail" },
      { name: "Southeastern", type: "rail" },
    ],
    primary_stations: [
      { name: "Herne Hill", lines: ["Thameslink", "Southeastern"], walk_minutes_from_centre: 5 },
    ],
    times_to_anchors: { city_of_london: 22, canary_wharf: 25, soho_fitzrovia: 22, kings_cross_shoreditch: 22 },
    multi_cluster_score: 4,
    redundancy_score: 2,
    notes: "Thameslink + Southeastern at one station but largely similar infrastructure. Redundancy 2/5. Average 22.75 min — all four anchors ≤25 min (borderline).",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Herne Hill & Loughborough Junction ward: 20-39 41%. Young-leaning residential. Census 2021 via CrystalRoof.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "below", crime_vs_croydon: "safer", after_dark_assessment: "Ward crime rate 127.5/1k — 14.3% below Lambeth district average. Calmer half of Lambeth. Robbery is the fastest-growing category at +35.4% YoY — watchlist concern.", concerns: ["Robbery +35.4% YoY — fastest-growing crime category in the ward"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Brockwell Park", walk_minutes: 5, notes: "Large park with Brockwell Lido" }], overall_assessment: "Brockwell Park is a major green asset — one of south London's best parks." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "early", investment_pipeline: "L&G / Nomura partnership first BTR site at Herne Hill.", recent_milestones: [], upcoming_milestones: ["L&G / Nomura BTR delivery"], trajectory_through_2027: "", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "partial", "1.3": "pass", "1.4": "partial", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Pass. Ward crime rate 14.3% below Lambeth average. Robbery trend is watchlist concern but does not fail T1.1.",
        "1.2": "L&G/Nomura BTR site incoming — not yet delivered. Current stock is individual-landlord.",
        "1.3": "Thameslink gives access to Farringdon (Elizabeth Line interchange) and St Pancras.",
        "1.4": "L&G is incoming (Tier 13, unknown qualification policy). Currently individual-landlord.",
        "1.5": "Brockwell Park frontage. Residential streets in good order.",
        "1.6": "Not in decline — residential-stable despite the Lambeth headline. L&G investment is ascending signal.",
      },
      "moderate",
      "T1 passes but T1.2 and T1.4 are partial — BTR incoming but not yet delivered.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "partial", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Village-centre character with walkable essentials.",
        "2.2": "Local grocery available — not destination-quality like Borough Market.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Brockwell Park is one of south London's best green assets.",
        "2.5": "Quiet residential — not a nightlife destination.",
        "2.7": "20-39 at 41% — young-leaning residential.",
      },
      "moderate",
      "Decent daily life. Brockwell Park is the headline asset. Amenity layer is village-scale.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "partial", "3.3": "pass", "3.4": "partial", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "L&G/Nomura BTR site is the investment signal. Otherwise residential-stable.",
        "3.2": "Brockwell Park and Herne Hill Velodrome are the anchors. No museum or major cultural institution.",
        "3.3": "Distinct residential identity — 'village in Lambeth' character. Recognisable.",
        "3.4": "15-minute completeness is partial — village-scale amenity, not dense urban.",
        "3.5": "No architectural press signal.",
        "3.6": "Quiet residential rhythm — not a day/night destination.",
      },
      "moderate",
      "T3 is moderate. Village character is genuine but the area lacks a strong cultural anchor beyond Brockwell Park.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "partial", "5.3": "partial", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 4/5 — all four anchors ≤25 min (borderline). Average 22.75 min.",
        "5.2": "Thameslink + Southeastern at one station — largely similar infrastructure. Redundancy 2/5.",
        "5.3": "L&G BTR is ascending signal. Otherwise stable.",
        "5.4": "Village cafes available but thin compared to Bermondsey or Peckham.",
      },
      "moderate",
      "Decent multi-cluster reach. Weak redundancy and thin third spaces.",
    ),
    overall_grade: "C",
    grade_reasoning: "C — calmer-than-Lambeth-average safety, Brockwell Park green asset, reasonable connectivity. Constrained by weak BTR operator presence (L&G incoming but Tier 13 unknown policy), weak redundancy, and village-scale amenity layer.",
  },

  projects: [
    // RESEARCH: Higgs Yard — small build-to-sell, agent-managed. ~30-40 units.
    // REALISM: unlikely (standard agent referencing, small scheme)
    // COST_TIER: UNVERIFIED
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "higgs-yard", area_id: "herne-hill", name: "Higgs Yard", developer: "unknown", operator: "Agent-managed", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "Small collection of 1, 2, and 3-bed apartments in SE24. ~30-40 units, ~6 storeys. 2 min walk to Loughborough Junction station. Residents' roof terrace with 360-degree London views. Pet-friendly. 2024-2025 completion.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Small-scale private development. Build quality details not researched.",
        t4_1_amenity_package: "Private balconies, residents' roof terrace. No communal gym or concierge.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    // RESEARCH: Ashwood Gate — very small (9 units) build-to-sell. Too small for meaningful managed-rental.
    // REALISM: unlikely (micro scheme, standard agent referencing)
    // COST_TIER: UNVERIFIED
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "ashwood-gate", area_id: "herne-hill", name: "Ashwood Gate", developer: "unknown", operator: "Agent-managed", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "Very small collection of 9 apartments (1, 2, and 3-bed) in the heart of Herne Hill. 3-4 storeys. 2024 completion. Over 80% sold. Too small for meaningful managed-rental option.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Boutique 9-unit scheme. Build quality details not researched.",
        t4_1_amenity_package: "Minimal communal amenity at this scale.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default herneHill;
