import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const elephantPark: Area = {
  id: "elephant-park",
  name: "Elephant Park",
  aliases: ["Elephant & Castle", "Lendlease masterplan"],
  borough: "Southwark",
  postcodes: ["SE17"],

  headline:
    "Lendlease's near-complete Zone 1 masterplan around a brand new two-acre park — Northern + Bakerloo on the doorstep, Palace Skatepark, 4.35/5 on Homeviews.",
  preview:
    "A Zone 1 neighbourhood centred on a two-acre park. The Lendlease footprint is self-contained and well-managed. 13,000 sqm of retail, cafes, restaurants are open. Northern + Bakerloo on the doorstep. The Wilderly is the final phase, completing mid-2026. Palace opened a skatepark here in Autumn 2025.",

  long_form: {
    full: "Elephant Park is a Zone 1 neighbourhood centred around a two-acre park — one of the largest new green spaces created in central London in over 70 years. The Lendlease footprint is self-contained and well-managed: 13,000 sqm of retail, cafes, and restaurants are open, and the Northern and Bakerloo lines are both on the doorstep. The Wilderly is the final phase — a 25-storey tower with SkyLounge, communal gym, and elevated garden, completing mid-2026. Palace Skatepark at the southern edge of the masterplan signals exactly what demographic Lendlease has been targeting. Rated 4.35/5 on Homeviews, which is strong for Zone 1 new-build.",
    history: "The Heygate Estate (a notorious 1970s council estate) was demolished from 2011, and Lendlease took on the masterplan. The first phases delivered from 2014; the masterplan is now substantially complete.",
    vibe: "Compact and walkable. Less polished than King's Cross or BPS but more honest. The Palace skatepark and the cultural mix of the wider Elephant & Castle area give it real urban character that pure new-build districts lack.",
    weekday: "A Tuesday at 7pm: the park is busy with after-work joggers and dog walkers; the retail core is active; the Northern and Bakerloo lines pulse through Elephant & Castle station.",
    weekend: "A Saturday: park crowds, skatepark crowds, food stall activity, and the surrounding Elephant & Castle market culture spilling into the masterplan.",
    notable: "The two-acre central park, Palace Skatepark, The Wilderly tower, the rebuilt Castle Square retail.",
    croydon_comparison: "Elephant Park is closer to Croydon geographically and culturally than most other entries — both are dense, mixed, multi-ethnic areas. The differences are: Zone 1 vs Zone 5, Lendlease management vs fragmented private rentals, modern public realm vs deteriorating, Northern + Bakerloo vs overground-only.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
      { name: "Bakerloo", type: "tube" },
    ],
    primary_stations: [
      { name: "Elephant & Castle", lines: ["Northern", "Bakerloo"], walk_minutes_from_centre: 3 },
    ],
    times_to_anchors: { city_of_london: 12, canary_wharf: 25, soho_fitzrovia: 12, kings_cross_shoreditch: 14 },
    multi_cluster_score: 4,
    redundancy_score: 2,
    notes: "Two tube lines plus rail. Decent multi-cluster reach.",
    sources: [],
  },
  demographics: {
    primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [],
    student_pct: 14, professional_renter_pct: 50,
    notes: "London College of Communication and South Bank University presence; mixed professional + student profile.",
    sources: [],
  },
  safety: { overall: "safe", crime_vs_borough: "average", crime_vs_croydon: "safer", after_dark_assessment: "Within the Lendlease masterplan, very safe. Outside the immediate footprint, the wider Elephant & Castle area has historically had rougher edges that are slowly improving.", concerns: ["Surrounding non-Lendlease streets are mixed"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Elephant Park", size_acres: 2, walk_minutes: 1, notes: "The two-acre central park; one of the largest new green spaces in central London in 70 years" }], overall_assessment: "The central park is the entire green proposition. No water frontage." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Phase F to populate. Known: Sainsbury's, multiple gyms, Castle Square retail, Palace Skatepark, food market." },
  regeneration: { status: "phased", investment_pipeline: "The Wilderly is the final phase, completing mid-2026.", recent_milestones: ["Park completed", "Castle Square retail open", "Palace Skatepark opened 2025"], upcoming_milestones: ["The Wilderly completion mid-2026"], trajectory_through_2027: "Substantially complete by 2027. At peak rather than ascending.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(T1_CRITERIA, { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" }, {}, "strong", "T1 clean."),
    t2_daily_life: buildTier(T2_CRITERIA, { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "partial", "2.5": "pass", "2.7": "pass" }, { "2.4": "Two-acre park is the only green amenity; no water" }, "good", "Strong on most T2 rows."),
    t3_identity: buildTier(T3_CRITERIA, { "3.1": "pass", "3.2": "partial", "3.3": "partial", "3.4": "pass", "3.5": "pass", "3.6": "pass" }, {}, "good", "Cultural anchor is the wider Elephant area more than Lendlease's masterplan itself."),
    t5_personal: buildTier(T5_CRITERIA, { "5.1": "pass", "5.2": "pass", "5.3": "partial", "5.4": "partial" }, {}, "good", "Decent T5 — multi-cluster + redundancy good, trajectory mature."),
    overall_grade: "A",
    grade_reasoning: "A grade on the strength of T1+T2 and decent T3+T5. Northern+Bakerloo connectivity and Zone 1 location are real wins.",
  },

  projects: [
    buildProject({ id: "trafalgar-place", area_id: "elephant-park", name: "Trafalgar Place", developer: "Lendlease", operator: "Lendlease", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable-with-upfront", preview: "First completed phase. Won Best New Place to Live at the London Planning Awards. Sets the quality benchmark.", amenity_tier: "strong", overall_grade: "A" }),
    buildProject({ id: "south-gardens", area_id: "elephant-park", name: "South Gardens", developer: "Lendlease", operator: "Lendlease", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable-with-upfront", preview: "Earlier Elephant Park phase framing the park itself. Strongest expression of the central green-space concept.", amenity_tier: "strong", overall_grade: "A" }),
    buildProject({ id: "park-sayer", area_id: "elephant-park", name: "Park & Sayer", developer: "Lendlease + Daiwa House", operator: "Lendlease", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable-with-upfront", preview: "Recently completed BTR phase on the southern edge. Consistently strong Homeviews scores.", amenity_tier: "strong", overall_grade: "A" }),
    buildProject({ id: "west-grove", area_id: "elephant-park", name: "West Grove", developer: "Lendlease", operator: "Lendlease", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable-with-upfront", preview: "Later phase wrapping retail and public realm into the core. More urban and integrated.", amenity_tier: "strong", overall_grade: "A" }),
    buildProject({ id: "the-wilderly", area_id: "elephant-park", name: "The Wilderly", developer: "Lendlease + Daiwa House", operator: "Lendlease", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "achievable-with-upfront", preview: "Final phase completing mid-2026. 25-storey tower + 11-storey mansion block. SkyLounge, communal gym, elevated garden.", amenity_tier: "premium", overall_grade: "A" }),
  ],

  external_links: [
    { url: "https://www.elephantpark.co.uk/", label: "Elephant Park official", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default elephantPark;
