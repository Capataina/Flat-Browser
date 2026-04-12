import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const tottenhamHale: Area = {
  id: "tottenham-hale",
  name: "Tottenham Hale",
  aliases: ["Heart of Hale", "Hale Village"],
  borough: "Haringey",
  postcodes: ["N17", "N15"],

  headline:
    "Zone 3 Victoria Line + Greater Anglia — flagship regeneration area with Related Argent's Heart of Hale masterplan. 15 min to Bank, step-change trajectory through 2027.",
  preview:
    "Tottenham Hale is one of London's strongest ascending regeneration stories. Victoria Line puts Bank at 15 minutes and TCR at 14. Greater Anglia adds a genuinely independent corridor. Related Argent's Heart of Hale masterplan (1 Ferry Island, 2 Ferry Island) is the BTR anchor, though Related Argent's rental qualification policies are opaque. Walthamstow Wetlands and the Lee Valley are genuine green assets.",

  long_form: {
    full: "Tottenham Hale sits at the junction of Victoria Line and Greater Anglia mainline, giving Zone 3 access to the City in 15 minutes with a second independent rail corridor. The area is undergoing a step-change regeneration led by Related Argent's Heart of Hale masterplan (1 Ferry Island complete, 2 Ferry Island in construction). Hale Wharf (Muse Developments + Canal & River Trust) adds adjacent owner-occupier delivery. Walthamstow Wetlands (directly adjacent) and the Lee Valley Regional Park give genuine green and water assets. The limitation is that Related Argent's rental qualification policies are opaque — the operator has no published FAQ.",
    history: "Former industrial area at the Lea Valley edge. Victoria Line access drove initial interest. The current regeneration wave started with Hale Village and is now centred on Heart of Hale.",
    vibe: "Regeneration-in-progress. Construction mixed with new residential delivery. Wetlands and waterways give a surprisingly green fringe to what was historically industrial.",
    weekday: "A Tuesday at 7pm: commuters flowing through Victoria Line interchange. New residents in Heart of Hale. Wetlands closing.",
    weekend: "A Saturday: Walthamstow Wetlands walkers. Lee Valley path cyclists. Hale Wharf waterfront.",
    notable: "Walthamstow Wetlands; Lee Valley Regional Park; Heart of Hale masterplan (Related Argent); Hale Wharf.",
    croydon_comparison: "Tottenham Hale is Zone 3 like Croydon but with Victoria Line direct to the City and a stronger regeneration trajectory. Less mature high street than Croydon but actively improving.",
  },

  zones: ["Zone 3"],
  connectivity: {
    lines: [
      { name: "Victoria", type: "tube" },
      { name: "Greater Anglia", type: "rail" },
    ],
    primary_stations: [
      { name: "Tottenham Hale", lines: ["Victoria", "Greater Anglia"], walk_minutes_from_centre: 5 },
    ],
    times_to_anchors: { city_of_london: 15, canary_wharf: 24, soho_fitzrovia: 14, kings_cross_shoreditch: 18 },
    multi_cluster_score: 4,
    redundancy_score: 4,
    notes: "Victoria + Greater Anglia mainline. Two entirely independent corridors. Average 17.75 min. T1.3 PASS, T5.1 PASS (4/4 ≤25), T5.2 PASS.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Tottenham Hale ward 20-39 at 39%. Step-change from Hale Wharf, Hale Works, Ferro Building deliveries 2022-2025.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "average", crime_vs_croydon: "similar", after_dark_assessment: "Actively improving faster than almost anywhere else. Positive trajectory for Caner's August 2027 horizon.", concerns: ["Haringey borough headline applies"], sources: [] },
  green_and_water: { has_river: false, has_canal: true, has_dock: false, parks: [{ name: "Walthamstow Wetlands", walk_minutes: 5, notes: "London Wildlife Trust, 211 hectares" }, { name: "Lee Valley Regional Park", walk_minutes: 8, notes: "Linear park along the Lea" }], overall_assessment: "Strong green and water. Walthamstow Wetlands and Lee Valley give genuine nature assets." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "Heart of Hale (Related Argent): 1 Ferry Island complete, 2 Ferry Island in construction. Hale Wharf delivering. Major pipeline.", recent_milestones: ["1 Ferry Island (108 homes, AHMM-designed) complete", "Hale Wharf delivery"], upcoming_milestones: ["2 Ferry Island (part of 484-home Phase 2, ICG £243m loan, Oct 2023 construction start)"], trajectory_through_2027: "Flagship ascending. One of the strongest T1 positive trajectories in the sweep.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Pass with positive trajectory. Actively improving faster than almost anywhere else.",
        "1.2": "Heart of Hale, Hale Wharf, Ferro Building — modern stock being delivered.",
        "1.3": "Victoria Line + Greater Anglia. Zone 3. 15 min to Bank.",
        "1.4": "Related Argent BTR at Heart of Hale. Active professional rental market emerging.",
        "1.5": "New public realm being delivered with the masterplan.",
        "1.6": "Actively ascending — flagship regeneration area.",
      },
      "good",
      "T1 clean. Strong ascending trajectory.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "partial", "2.3": "partial", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Daily essentials layer still building out with the regeneration. Not yet complete.",
        "2.2": "Grocery layer is thin — improving with new delivery.",
        "2.3": "Gym access still emerging.",
        "2.4": "Strong — Walthamstow Wetlands and Lee Valley give genuine green/water.",
        "2.5": "New residential areas are quiet at night.",
        "2.7": "Ward 20-39 at 39%. Solid young skew, strengthening with new delivery.",
      },
      "moderate",
      "T2 moderate. Green/water is strong but daily-life amenities are still building out.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "partial", "3.4": "partial", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "Flagship regeneration — Heart of Hale, Hale Wharf, multiple phases delivering.",
        "3.2": "Walthamstow Wetlands is the nature anchor. No major cultural institution yet.",
        "3.3": "'Tottenham Hale' identity is still forming — regeneration-in-progress rather than established place.",
        "3.4": "15-minute completeness still partial — improving with each delivery phase.",
        "3.5": "1 Ferry Island is AHMM-designed. No major jury wins.",
        "3.6": "Day/night rhythm still forming with the regeneration.",
      },
      "moderate",
      "T3 moderate. Identity is still consolidating. Strong regeneration signal but not yet a destination.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "4/4 anchors ≤25 min. Average 17.75 min.",
        "5.2": "Victoria + Greater Anglia. Two independent corridors. Redundancy 4/5.",
        "5.3": "Flagship ascending trajectory through 2027.",
        "5.4": "Third-space culture still thin — the wetlands are the main quiet space.",
      },
      "good",
      "T5 strong. Excellent connectivity, redundancy, and trajectory. Third spaces developing.",
    ),
    overall_grade: "B",
    grade_reasoning: "B — strong connectivity and ascending trajectory, but daily-life and identity layers are still building out. Best long-term value play in the north London set.",
  },

  projects: [
    buildProject({
      id: "1-ferry-island", area_id: "tottenham-hale", name: "1 Ferry Island (Heart of Hale)", developer: "Related Argent", operator: "Related Argent", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "108 homes, AHMM-designed, Phase 1 of Heart of Hale. Related Argent BTR — rental qualification policies opaque.",
      architects: ["AHMM"],
      amenity_tier: "strong", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "AHMM-designed, modern BTR specification. Related Argent management.",
        t4_1_amenity_package: "Strong shared amenities expected from Related Argent.",
        t4_4_signature_arch: "AHMM-designed — practice with Stirling Prize pedigree but not a Pritzker firm.",
      },
    }),
    buildProject({
      id: "2-ferry-island", area_id: "tottenham-hale", name: "2 Ferry Island (Heart of Hale Phase 2)", developer: "Related Argent", operator: "Related Argent", building_type: "BTR", build_phase: "in_delivery", tenure: ["rent"], realism: "unknown",
      preview: "Part of 484-home Phase 2 (ICG £243m loan, Oct 2023 construction start). Related Argent BTR.",
      amenity_tier: "strong", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Phase 2 delivery to Related Argent specification.",
        t4_1_amenity_package: "Strong shared amenities expected.",
        t4_4_signature_arch: "Architectural authorship not confirmed.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default tottenhamHale;
