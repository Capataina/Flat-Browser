import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const ovalVillage: Area = {
  id: "oval-village",
  name: "Oval Village",
  aliases: ["Oval", "Kennington"],
  borough: "Lambeth",
  postcodes: ["SW8", "SE11"],

  headline:
    "Berkeley conversion of a former gasworks site on the Nine Elms corridor — Zone 1 Victoria line, 4 minutes to Victoria, 7 to Oxford Circus. Underrated for the connectivity it delivers.",
  preview:
    "Persistently underrated for what its Victoria line access delivers. Vauxhall puts Victoria in 4 minutes and Oxford Circus in 7 — Zone 1 numbers at a price point that does not reflect it. Canal-side former gasworks site. Multiple phases building out over the coming years.",

  long_form: {
    full: "Oval Village sits on the Nine Elms regeneration corridor between Battersea and Elephant & Castle and is persistently underrated for what its Victoria line access delivers. Vauxhall station puts Victoria in 4 minutes and Oxford Circus in 7. The development is canal-side on a former gasworks site, with multiple phases building out over the coming years. Berkeley's build quality is reliably good and the area will continue to improve as the Nine Elms corridor matures around it. The limitation is that Oval Village has no strong independent identity — there is no destination quality to the public realm the way BPS or King's Cross has. You are getting Zone 1 at a lower price than anything further north on the corridor.",
    history: "Former gasworks site. Berkeley took on the redevelopment and has been delivering phased residential since the early 2020s.",
    vibe: "Quiet residential. Less destination-led than Nine Elms or BPS. The Oval cricket ground anchors the wider area's identity rather than the masterplan itself.",
    weekday: "A Tuesday at 7pm: quiet residential; Vauxhall is busy with commuters; the canal walk has joggers.",
    weekend: "A Saturday: cricket match days bring crowds; otherwise quiet.",
    notable: "Former gasworks holder structure preserved; Oval cricket ground nearby.",
    croydon_comparison: "Oval Village is Zone 1 with Victoria line access at a price point closer to Croydon than to Nine Elms. The trade-off is that it's quieter and less destination-led, but the connectivity is unambiguously stronger.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Victoria", type: "tube" },
      { name: "Northern", type: "tube" },
    ],
    primary_stations: [
      { name: "Vauxhall", lines: ["Victoria"], walk_minutes_from_centre: 8 },
      { name: "Oval", lines: ["Northern"], walk_minutes_from_centre: 5 },
    ],
    times_to_anchors: { city_of_london: 16, canary_wharf: 28, soho_fitzrovia: 9, kings_cross_shoreditch: 14 },
    multi_cluster_score: 4,
    redundancy_score: 2,
    notes: "Victoria + Northern give two-line coverage. Victoria line is the headline.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 8, professional_renter_pct: 52, notes: "Census 2021 confirms 20-29 as largest cohort in Oval ward.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "average", crime_vs_croydon: "much-safer", after_dark_assessment: "Safe. Vauxhall station is busy at all hours.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: true, has_dock: false, parks: [{ name: "Vauxhall Park", walk_minutes: 8, notes: "Local park" }, { name: "Kennington Park", walk_minutes: 10, notes: "Larger park" }], overall_assessment: "Limited green frontage but parks within walking distance." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Phase F to populate." },
  regeneration: { status: "phased", investment_pipeline: "Berkeley delivering phases over the coming years.", recent_milestones: ["The Pinnacle current phase"], upcoming_milestones: ["The Halo flagship phase", "Continued delivery"], trajectory_through_2027: "Ascending. Will benefit from broader Nine Elms corridor maturation.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(T1_CRITERIA, { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" }, {}, "good", "T1 clean."),
    t2_daily_life: buildTier(T2_CRITERIA, { "2.1": "partial", "2.2": "partial", "2.3": "pass", "2.4": "partial", "2.5": "pass", "2.7": "pass" }, {}, "moderate", "T2 is decent but the area is still building out the everyday amenity layer."),
    t3_identity: buildTier(T3_CRITERIA, { "3.1": "pass", "3.2": "partial", "3.3": "partial", "3.4": "partial", "3.5": "partial", "3.6": "partial" }, {}, "moderate", "T3 is the weak tier. No strong independent identity. The Oval cricket ground is the only meaningful anchor."),
    t5_personal: buildTier(T5_CRITERIA, { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "partial" }, {}, "good", "Strong T5 — Victoria + Northern give multi-cluster + redundancy, ascending trajectory."),
    overall_grade: "B",
    grade_reasoning: "B grade — T1 clean, T5 strong, but T3 identity is the weak tier. Strong value play for the Zone 1 connectivity at a lower price than the rest of Nine Elms.",
  },

  projects: [
    buildProject({ id: "oval-village-core", area_id: "oval-village", name: "Oval Village by Berkeley", developer: "Berkeley", operator: "Berkeley", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "achievable-with-upfront", preview: "Conversion of a former gasworks site. Canal-side. Multiple residential phases delivering now.", amenity_tier: "strong", overall_grade: "B" }),
    buildProject({ id: "the-pinnacle", area_id: "oval-village", name: "The Pinnacle", developer: "Berkeley", operator: "Berkeley", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "achievable-with-upfront", preview: "Current headline phase. Strongest core ownership offer for buyers wanting Berkeley finish without the most future-facing delivery risk.", amenity_tier: "strong", overall_grade: "B" }),
    buildProject({ id: "the-halo", area_id: "oval-village", name: "The Halo", developer: "Berkeley", operator: "Berkeley", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown", preview: "Later flagship phase. The more skyline-oriented expression of Oval Village.", amenity_tier: "premium", overall_grade: "B" }),
    buildProject({ id: "zone-oval", area_id: "oval-village", name: "Zone at Oval Village", developer: "Berkeley", operator: "Berkeley", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable", preview: "Shared-ownership route inside the same scheme. Expands real entry points beyond pure full-market purchase.", amenity_tier: "decent", overall_grade: "B" }),
    buildProject({ id: "st-george-wharf", area_id: "oval-village", name: "St George Wharf", developer: "Berkeley", operator: "Berkeley", building_type: "Owner-Lease", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely", preview: "Established Berkeley riverside development at Vauxhall. Includes the Vauxhall Tower. More premium pricing.", amenity_tier: "premium", overall_grade: "A" }),
  ],

  external_links: [
    { url: "https://www.berkeleygroup.co.uk/developments/london/lambeth/oval-village", label: "Oval Village (Berkeley)", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default ovalVillage;
