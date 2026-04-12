import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const westHampstead: Area = {
  id: "west-hampstead",
  name: "West Hampstead",
  aliases: [],
  borough: "Camden",
  postcodes: ["NW6"],

  headline:
    "Jubilee + Thameslink + Overground at three separate stations — the most under-appreciated redundancy hub outside Stratford/King's Cross. Clean T1 pass, Zone 2.",
  preview:
    "West Hampstead has three separate stations (Jubilee, Thameslink, Overground) within 1-3 minutes walk of each other, giving it one of the best multi-line redundancy profiles in the candidate list. Clean T1 pass on all six rows. Ballymore's West Hampstead Square is the major project, substantially complete. Peaking 2025-2026.",

  long_form: {
    full: "West Hampstead is a transport-led area with three independent rail products at three separate stations within 1-3 minutes walk: Jubilee (tube), Thameslink (mainline), and Overground (Mildmay). This gives it redundancy score 5/5 — the most under-appreciated redundancy hub outside Stratford and King's Cross. West Hampstead ward recorded materially below-average crime for Camden borough. Ballymore's West Hampstead Square is the major residential delivery, substantially complete. The area is peaking 2025-2026 as the Square completes, after which it is stable.",
    history: "Mature residential north-west London neighbourhood. Ballymore's West Hampstead Square brought modern BTR/BTS stock.",
    vibe: "Village-feel high street (West End Lane) with independent cafes and restaurants. Quieter residential character than nearby Kilburn.",
    weekday: "",
    weekend: "",
    notable: "Three independent rail stations within walking distance. West End Lane village high street.",
    croydon_comparison: "West Hampstead has Zone 2 pricing and three-line redundancy that Croydon cannot match. The neighbourhood feel is more established and village-like. The trade-off is smaller scale and higher price per square foot.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Jubilee", type: "tube" },
      { name: "Thameslink", type: "rail" },
      { name: "London Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "West Hampstead (Jubilee)", lines: ["Jubilee"], walk_minutes_from_centre: 2 },
      { name: "West Hampstead (Thameslink)", lines: ["Thameslink"], walk_minutes_from_centre: 3 },
      { name: "West Hampstead (Overground)", lines: ["London Overground"], walk_minutes_from_centre: 3 },
    ],
    times_to_anchors: { city_of_london: 22, canary_wharf: 25, soho_fitzrovia: 15, kings_cross_shoreditch: 25 },
    multi_cluster_score: 3,
    redundancy_score: 5,
    notes: "Jubilee + Thameslink + Overground = three independent corridors at three stations. Redundancy 5/5. 3/4 anchors ≤25. Average 21.75 min. This is the most under-appreciated redundancy hub outside Stratford/King's Cross.",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Not yet populated.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "below", crime_vs_croydon: "much-safer", after_dark_assessment: "West Hampstead ward ~188 crimes/month, materially below Camden borough average. Top categories are ASB and shoplifting rather than violent crime.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Fortune Green", walk_minutes: 5, notes: "Local green" }, { name: "West End Green", walk_minutes: 5, notes: "Small local green" }, { name: "Kilburn Grange Park", walk_minutes: 5, notes: "Small local park" }], overall_assessment: "Nominal-to-moderate green + absent water. Transport-led rather than green-led. Local greens are small; Hampstead Heath is at the edge of range (20 min). T2.4: Partial-to-moderate." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. West End Lane has a strong independent high street." },
  regeneration: { status: "phased", investment_pipeline: "Ballymore's West Hampstead Square substantially complete.", recent_milestones: ["West Hampstead Square major delivery"], upcoming_milestones: ["West Hampstead Square final phases"], trajectory_through_2027: "Peaking 2025-2026. West Hampstead Square will complete inside the window, after which the area is stable.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Clean pass. Ward crime materially below Camden borough average. ASB and shoplifting, not violent crime.",
        "1.2": "Ballymore's West Hampstead Square provides modern stock.",
        "1.3": "Jubilee + Thameslink + Overground — three independent corridors. Zone 2. Standout strength.",
        "1.4": "Ballymore as BTR/BTS operator. Active professional rental market.",
        "1.5": "Public realm in good order.",
        "1.6": "Not in decline — West Hampstead Square completing.",
      },
      "good",
      "T1 clean pass on all six rows. T1.3 is a standout strength — one of the best multi-line redundancy profiles in the candidate list.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "unknown", "2.2": "unknown", "2.3": "unknown", "2.4": "partial", "2.5": "unknown", "2.7": "unknown" },
      {
        "2.4": "Nominal-to-moderate green. Local greens are small; Heath at edge of range.",
      },
      "moderate",
      "T2 largely unpopulated. Green access is partial; the area is transport-led.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "partial", "3.3": "pass", "3.4": "unknown", "3.5": "unknown", "3.6": "unknown" },
      {
        "3.1": "Ballymore final phases. Peaking not ascending.",
        "3.2": "West End Lane independent high street — cafes, restaurants, delis.",
        "3.3": "Distinct village-feel neighbourhood with a recognisable name.",
      },
      "moderate",
      "T3 moderate. Village character is real; regeneration is peaking.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "unknown", "5.4": "unknown" },
      {
        "5.1": "3/4 anchors ≤25 (CW at 25 borderline). Average 21.75 min.",
        "5.2": "Redundancy 5/5 — three independent corridors at three stations. Exceptional.",
      },
      "good",
      "T5 good. Exceptional redundancy is the standout feature.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — clean T1 pass, exceptional redundancy (5/5), and safe village character. Weaknesses are partial green access and peaking regeneration. A strong shortlist candidate on transport alone.",
  },

  projects: [
    // RESEARCH: West Hampstead Square (Ballymore) — 198 apartments, M&S, shops. Owner-lease model, rental via private landlords / agents. Specific prices UNVERIFIED but NW6 1-beds typically £1,800-£2,400/mo.
    // REALISM: unlikely (Ballymore BTS model, standard agent referencing, no dedicated BTR)
    // COST_TIER: premium (estimated 1-bed £2,000-£2,400 based on NW6 market)
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "west-hampstead-square", area_id: "west-hampstead", name: "West Hampstead Square", developer: "Ballymore", operator: "Ballymore", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "Ballymore's major residential delivery at West Hampstead. Substantially complete with final phases ongoing.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Ballymore 2017+ delivery — modern specification.",
        t4_1_amenity_package: "Not yet researched.",
        t4_4_signature_arch: "No 2024/25 jury architectural signal found.",
      },
    }),
    // RESEARCH: West Hampstead Central — mixed-tenure, private landlords for market rent.
    // REALISM: unlikely (standard agent referencing)
    // COST_TIER: UNVERIFIED
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "west-hampstead-central", area_id: "west-hampstead", name: "West Hampstead Central", developer: "Astir / Gamuda", operator: "A2Dominion (affordable); private landlords (market)", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "180-unit mixed-tenure development (94 private + 7 shared ownership + 79 affordable). 5 storeys. Recently completed 2025-2026. Co-working on ground/first floors. Private units enter rental market via individual landlords.",
      amenity_tier: "decent", architects: ["Chapman Taylor", "Child Graddon Lewis"], overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "2025-2026 completion. Chapman Taylor / Child Graddon Lewis design. Modern specification expected.",
        t4_1_amenity_package: "Co-working spaces, retail, commercial space. Decent for a mixed-tenure scheme but no premium communal amenities.",
        t4_4_signature_arch: "Chapman Taylor with Child Graddon Lewis refinements. Competent but not signature.",
      },
    }),
    // RESEARCH: The Clay Yard — for-sale only. No rental implications.
    // REALISM: blocked (for-sale scheme, not rentable)
    // COST_TIER: N/A
    // QUALIFICATION: N/A — for-sale only
    buildProject({
      id: "the-clay-yard", area_id: "west-hampstead", name: "The Clay Yard", developer: "unknown", operator: "Private sale", building_type: "Build-to-Sell", build_phase: "in_delivery", tenure: ["buy"], realism: "blocked",
      preview: "For-sale development with new phase (The Heights) launched May 2024. Primarily for-sale with minimal managed rental implications.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "In delivery — cannot fully verify. Modern new-build expected.",
        t4_1_amenity_package: "Not researched. For-sale scheme — likely basic communal amenities.",
        t4_4_signature_arch: "No architectural press signal.",
      },
    }),
  ],

  external_links: [
    { url: "https://www.ballymoregroup.com/en/developments/west-hampstead-square", label: "West Hampstead Square (Ballymore)", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default westHampstead;
