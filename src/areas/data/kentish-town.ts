import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const kentishTown: Area = {
  id: "kentish-town",
  name: "Kentish Town",
  aliases: ["KT", "NW5"],
  borough: "Camden",
  postcodes: ["NW5"],

  headline:
    "Zone 2 Northern Line + Thameslink — the calmer residential cousin of Camden Town with Hampstead Heath in walking range. 14 min to Bank, 9 to Tottenham Court Road.",
  preview:
    "Kentish Town delivers Camden-grade connectivity without Camden's nightlife noise. Northern Line + Thameslink give two independent corridors with Bank in 14 minutes. Hampstead Heath (East Heath) is a genuine 12-minute walk. The high street has a real butcher/baker/deli-independents pattern. Station is currently closed for step-free access works (multi-year programme).",

  long_form: {
    full: "Kentish Town is the calmer residential cousin of Camden Town — materially quieter, with a real high street of NW5 independents, and the same Northern Line connectivity. Thameslink at Kentish Town adds a genuine second corridor reaching Farringdon and the Elizabeth Line interchange. Hampstead Heath (East Heath) is 12 minutes on foot, which is genuine weekly-use walking range. The station is currently closed for step-free access works (2023 closure, multi-year programme), which is a meaningful disruption but also a delivery commitment to the area.",
    history: "Victorian residential suburb that has maintained a strong independent high street character. Kentish Town City Farm is a local institution.",
    vibe: "Residential neighbourhood with an independent high street. Calm, family-friendly, with a strong young professional rental layer.",
    weekday: "A Tuesday at 7pm: high street busy with after-work shoppers. Residents heading to the Heath.",
    weekend: "A Saturday: Hampstead Heath walks. High street cafes. Kentish Town City Farm.",
    notable: "Hampstead Heath proximity; Kentish Town City Farm; independent high street; Forum music venue.",
    croydon_comparison: "Kentish Town is Zone 2 with Northern + Thameslink and the Heath in walking range. More expensive than Croydon but meaningfully better connected and with a much stronger green/daily-life layer.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
      { name: "Thameslink", type: "rail" },
    ],
    primary_stations: [
      { name: "Kentish Town", lines: ["Northern", "Thameslink"], walk_minutes_from_centre: 3 },
      { name: "Kentish Town West", lines: ["Overground"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 14, canary_wharf: 22, soho_fitzrovia: 9, kings_cross_shoreditch: 11 },
    multi_cluster_score: 4,
    redundancy_score: 4,
    notes: "Northern + Thameslink at one station. Two independent corridors. Average 14 min. Kentish Town West adds Overground Mildmay as a third fallback.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Camden borough. Young professional rental skew.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "below", crime_vs_croydon: "safer", after_dark_assessment: "Safe. Calmer residential grain than Camden Town. Well inside the calmer half of Camden borough.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Hampstead Heath (East Heath)", walk_minutes: 12, notes: "790 acres, genuine weekly-use walking range" }, { name: "Talacre Gardens", walk_minutes: 5, notes: "Local gardens" }, { name: "Kentish Town City Farm", walk_minutes: 10, notes: "Community city farm" }], overall_assessment: "Core green (Heath-adjacent). The Heath at 12 min is genuine walking range — residents use it weekly. T2.4 pass — strong." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "Kentish Town station step-free access works (multi-year programme). Murphy's Yard regeneration.", recent_milestones: ["Kentish Town station closure for step-free works"], upcoming_milestones: ["Station reopening inside 2027 window", "Murphy's Yard delivery"], trajectory_through_2027: "Mild ascending via station upgrade and Murphy's Yard.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Pass with high confidence. Calmer residential cousin of Camden Town.",
        "1.2": "Modern rental stock exists. Murphy's Yard regeneration adding new stock.",
        "1.3": "Northern Line + Thameslink. Zone 2. 14 min to Bank, 9 to TCR.",
        "1.4": "No dominant BTR operator but active professional rental market.",
        "1.5": "Independent high street is well-maintained.",
        "1.6": "Not in decline — station works and Murphy's Yard show active investment.",
      },
      "good",
      "T1 clean on all six rows.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Independent high street delivers complete walkable essentials.",
        "2.2": "Quality grocery on the high street.",
        "2.3": "Gym options available in the Kentish Town / Camden corridor.",
        "2.4": "Hampstead Heath (East Heath) 12 min walk. Core green identity. T2.4 pass — strong.",
        "2.5": "Quiet residential at night. No nightlife pressure.",
        "2.7": "Camden borough young professional rental skew.",
      },
      "good",
      "T2 strong. Heath access and complete high street deliver excellent daily life.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "Station works and Murphy's Yard show active investment.",
        "3.2": "Forum music venue. Kentish Town City Farm. No major cultural institution.",
        "3.3": "Distinct sense of place — NW5 independent high street character.",
        "3.4": "Complete 15-minute neighbourhood.",
        "3.5": "No RIBA jury wins 2024/25. FT/Guardian high-street-revival features exist.",
        "3.6": "Residential rhythm — busy high street by day, quiet at night.",
      },
      "moderate",
      "T3 moderate. Good sense of place but no cultural institution or architectural distinction.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "pass" },
      {
        "5.1": "4/4 anchors ≤25 min. Average 14 min.",
        "5.2": "Northern + Thameslink — two independent corridors. Redundancy 4/5.",
        "5.3": "Mild ascending — station upgrade reopens inside 2027 window.",
        "5.4": "Strong cafe culture on the independent high street.",
      },
      "good",
      "T5 strong across all four rows. Good connectivity, redundancy, trajectory, and third spaces.",
    ),
    overall_grade: "B",
    grade_reasoning: "B+ — clean T1, strong T2 and T5, with Heath access and dual-line connectivity. T3 identity is the only moderate tier. A quiet strong performer.",
  },

  projects: [
    // RESEARCH: The Tipton — 47-unit boutique BTS, 2025 completion. Individual landlord rental.
    // 1-bed from ~£2,200 pcm. Two rooftop terraces with Heath/City views.
    // REALISM: unknown — individual landlord
    // COST_TIER: premium (1-bed from ~£2,200)
    buildProject({
      id: "the-tipton", area_id: "kentish-town", name: "The Tipton", developer: "GM London", operator: "Individual landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "47-unit boutique scheme at 27-29 Highgate Road, NW5. 6 storeys. Less than 0.1 miles from Kentish Town station. Two communal rooftop terraces with views over Hampstead Heath and City. 1-bed from ~£2,200 pcm.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "New-build 2025 to modern specification. Small scale allows attention to detail.",
        t4_1_amenity_package: "Decent — concierge, 2 communal rooftop terraces, private outdoor space for every unit. No gym or pool.",
        t4_4_signature_arch: "Not signature-authored. Scenesmith interior design.",
      },
    }),
    // RESEARCH: West Kentish Town Estate — Camden Council, 850 homes, AHMM architects.
    // Planning approved Dec 2025, phased delivery 10+ years. Not yet built.
    // REALISM: unknown — not yet built
    // COST_TIER: UNVERIFIED (unbuilt)
    buildProject({
      id: "west-kentish-town-estate", area_id: "kentish-town", name: "West Kentish Town Estate Redevelopment", developer: "Camden Council", operator: "Camden Council", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Camden's largest Community Investment Programme project. 850 homes (326 council), AHMM architects, £565M investment, 93% resident ballot approval. Planning approved Dec 2025, phased delivery over 10+ years.",
      architects: ["AHMM"],
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "AHMM-designed — Stirling Prize-winning practice. Unbuilt so quality cannot be verified yet.",
        t4_1_amenity_package: "New public open spaces, play areas, neighbourhood improvements planned.",
        t4_4_signature_arch: "AHMM (Allford Hall Monaghan Morris) — Stirling Prize-winning practice. Significant for the area's long-term trajectory.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default kentishTown;
