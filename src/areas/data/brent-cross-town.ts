import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const brentCrossTown: Area = {
  id: "brent-cross-town",
  name: "Brent Cross Town",
  aliases: ["Brent Cross", "Cricklewood"],
  borough: "Barnet",
  postcodes: ["NW2"],

  headline:
    "The most affordable high-quality BTR entry in the dataset — The Maple from £1,950/month. Conran & Partners interiors, 25m pool, Allies & Morrison architecture. Thameslink to King's Cross in 12 minutes.",
  preview:
    "The strongest value proposition for someone prioritising quality and price over immediate activation. The Maple delivers Conran & Partners interiors and Allies & Morrison architecture with a 25m pool and jacuzzi from £1,950/month. King's Cross in 12 minutes. Barnet is one of the safest boroughs in London. First residents moved in early 2025; neighbourhood is still activating.",

  long_form: {
    full: "Brent Cross Town is the strongest value proposition for someone prioritising quality and price over immediate activation. The Maple delivers Conran & Partners interiors and Allies & Morrison architecture with a 25m pool and jacuzzi from £1,950/month (studios) and £2,250/month (1-beds). The Thameslink from Brent Cross West station puts King's Cross at 12 minutes. The London Borough of Barnet consistently ranks in the top 10 safest in London — the environment around the development is well-maintained and low-friction. The honest limitation: first residents only moved in early 2025. The high street, bars, restaurants, and Sheffield Hallam satellite campus are future promises, not current reality. This is the right choice for someone who prioritises price and safety now and is comfortable living through a neighbourhood's activation phase.",
    history: "180-acre brownfield site north of the existing Brent Cross shopping centre. Related Argent (the team behind King's Cross) and Barnet Council took on the masterplan. First residents 2025; full delivery through the late 2020s.",
    vibe: "Brand new and quiet. The wider Cricklewood area is genuinely diverse and lively, but the masterplan footprint itself is still settling.",
    weekday: "A Tuesday at 7pm: The Maple's amenity spaces are full but the surrounding streets are quiet. The Thameslink runs through.",
    weekend: "A Saturday: Brent Cross shopping centre brings crowds but the masterplan core is still calm.",
    notable: "Conran & Partners interiors, Allies & Morrison architecture, 25m pool, the affordability story.",
    croydon_comparison: "Brent Cross Town's price floor is genuinely below most of the dataset and rivals the cheaper end of Croydon — but the build quality and safety are in a different league. The Thameslink connection to King's Cross at 12 minutes is a clean win.",
  },

  zones: ["Zone 3"],
  connectivity: {
    lines: [
      { name: "Thameslink", type: "rail" },
      { name: "Northern", type: "tube" },
    ],
    primary_stations: [
      { name: "Brent Cross West", lines: ["Thameslink"], walk_minutes_from_centre: 5 },
      { name: "Brent Cross", lines: ["Northern"], walk_minutes_from_centre: 12 },
    ],
    times_to_anchors: { city_of_london: 22, canary_wharf: 35, soho_fitzrovia: 20, kings_cross_shoreditch: 12 },
    multi_cluster_score: 3,
    redundancy_score: 2,
    notes: "Thameslink is the headline strength — direct to KX in 12 minutes. Northern Line adds redundancy.",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 5, professional_renter_pct: 45, notes: "Cricklewood ward is highly diverse. Brent Cross Town itself is too new for stable demographic data.", sources: [] },
  safety: { overall: "very-safe", crime_vs_borough: "below", crime_vs_croydon: "much-safer", after_dark_assessment: "Barnet is among the safest boroughs in London. The masterplan footprint is well-lit and low-friction.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Claremont Park", walk_minutes: 4, notes: "Park within the masterplan" }], overall_assessment: "Limited green features but a designed park within the masterplan." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Phase F to populate. Known: Brent Cross shopping centre nearby (full retail), The Maple amenities, planned new high street." },
  regeneration: { status: "active", investment_pipeline: "180 acres, 6,700 homes planned. Sheffield Hallam campus, new high street, leisure and retail all in planning or early delivery.", recent_milestones: ["The Maple first residents 2025", "Brent Cross West station opened"], upcoming_milestones: ["High street activation", "Sheffield Hallam campus", "Continued residential delivery"], trajectory_through_2027: "Strong ascending. The Maple's value proposition will compress as the area matures and prices rise.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(T1_CRITERIA, { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" }, {}, "strong", "T1 clean. Among the safest boroughs."),
    t2_daily_life: buildTier(T2_CRITERIA, { "2.1": "partial", "2.2": "pass", "2.3": "pass", "2.4": "partial", "2.5": "pass", "2.7": "partial" }, { "2.1": "Walkable essentials still building out", "2.7": "Too new for stable cohort data" }, "good", "T2 is decent but the activation is still in progress."),
    t3_identity: buildTier(T3_CRITERIA, { "3.1": "pass", "3.2": "partial", "3.3": "partial", "3.4": "partial", "3.5": "pass", "3.6": "fail" }, { "3.6": "Too new — day/night activity rhythm hasn't formed" }, "moderate", "T3 is the weak tier — the area is too early in its activation curve."),
    t5_personal: buildTier(T5_CRITERIA, { "5.1": "partial", "5.2": "pass", "5.3": "pass", "5.4": "partial" }, {}, "good", "Decent T5 — Thameslink is unique to this entry, ascending trajectory."),
    overall_grade: "B",
    grade_reasoning: "B grade — T1 + T5 strong, T2 + T3 decent. The price advantage is the real story; B accurately reflects 'good value, still maturing'.",
  },

  projects: [
    buildProject({ id: "the-maple", area_id: "brent-cross-town", name: "The Maple (BTR)", developer: "Related Argent", operator: "Be Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable", preview: "Studios from £1,950/month, 1-beds from £2,250/month. 25m pool, jacuzzi, Conran & Partners interiors, Allies & Morrison architecture. 535 units.", amenity_tier: "premium", architects: ["Allies and Morrison", "Conran & Partners"], overall_grade: "S" }),
    buildProject({ id: "the-delamarre", area_id: "brent-cross-town", name: "The Delamarre", developer: "Related Argent", operator: "Related", building_type: "Owner-Lease", build_phase: "in_delivery", tenure: ["buy"], realism: "blocked", preview: "Current private-sale phase. Cleanest ownership route into Brent Cross Town with the same park-town positioning as The Maple.", amenity_tier: "strong", overall_grade: "B" }),
    buildProject({ id: "conductor-house", area_id: "brent-cross-town", name: "Conductor House", developer: "Related Argent", operator: "Various", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable", preview: "Affordable and London Living Rent component within the wider neighbourhood.", amenity_tier: "decent", overall_grade: "B" }),
    buildProject({ id: "brent-cross-town-wider", area_id: "brent-cross-town", name: "Brent Cross Town (wider masterplan)", developer: "Related Argent", operator: "Various", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unknown", preview: "180 acres, 6,700 homes planned. Sheffield Hallam campus, new high street, leisure and retail in planning or early delivery.", amenity_tier: "decent", overall_grade: "B" }),
  ],

  external_links: [
    { url: "https://www.brentcrosstown.co.uk/", label: "Brent Cross Town official", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default brentCrossTown;
