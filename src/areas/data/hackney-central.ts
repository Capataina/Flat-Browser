import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const hackneyCentral: Area = {
  id: "hackney-central",
  name: "Hackney Central",
  aliases: ["Hackney", "Mare Street"],
  borough: "Hackney",
  postcodes: ["E8", "E9"],

  headline:
    "Hackney's civic and commercial core with two Overground lines and Greater Anglia mainline. Continuous residential high street with strong young-professional demand.",
  preview:
    "Two Overground lines (Mildmay + Weaver) plus Greater Anglia at Hackney Downs give three-line redundancy. 23-minute average to anchors — adequate but not fast. Borough burglary concentration is a real signal. Strong young demographic at 42% aged 20-39.",

  long_form: {
    full: "Hackney Central is the civic heart of the London Borough of Hackney — Mare Street carries the town hall, Broadway Market is a short walk east, and the area has a continuous residential high street with strong independent retail. Two Overground lines at two stations (Hackney Central on Mildmay, Hackney Downs on Weaver) plus Greater Anglia mainline give three genuinely independent corridors, though no tube is directly available. The 23-minute average to employment anchors is adequate but positions Hackney Central in the mid-tier on connectivity. Safety is marginal — Hackney borough headline and burglary concentration are real signals, though the ward itself passes on balance. Peabody operates some market-rent inventory around Bohemia Place and the Town Hall Square regeneration.",
    history: "Historic borough centre. Mare Street has been Hackney's commercial spine for centuries. Town Hall Square regeneration ongoing.",
    vibe: "Independent, community-driven. Mare Street is a busy high street with a mix of chains and independents. Broadway Market nearby brings a weekend market culture.",
    weekday: "A Tuesday at 7pm: Mare Street busy with commuters and shoppers; restaurants filling; Hackney Picturehouse drawing evening crowds.",
    weekend: "A Saturday: Broadway Market in full swing; London Fields nearby draws crowds; independent shops and cafes busy.",
    notable: "Hackney Town Hall; Broadway Market; Hackney Picturehouse; London Fields nearby.",
    croydon_comparison: "Hackney Central trades Croydon's tram/rail speed for a much stronger independent-retail and cultural layer. Connectivity is comparable in absolute time but via Overground rather than mainline rail.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Overground (Mildmay)", type: "overground" },
      { name: "Overground (Weaver)", type: "overground" },
      { name: "Greater Anglia", type: "rail" },
    ],
    primary_stations: [
      { name: "Hackney Central", lines: ["Overground (Mildmay)"], walk_minutes_from_centre: 3 },
      { name: "Hackney Downs", lines: ["Overground (Weaver)", "Greater Anglia"], walk_minutes_from_centre: 6 },
    ],
    times_to_anchors: { city_of_london: 22, canary_wharf: 25, soho_fitzrovia: 28, kings_cross_shoreditch: 18 },
    multi_cluster_score: 3,
    redundancy_score: 3,
    notes: "Two Overground lines + Greater Anglia mainline. Independent lines, no tube direct. 23.25-min average. T5.1 partial (2/4 under 25).",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Census 2021: Hackney Central ward 20-39 at 42%. Solid young-skew with real family and older resident mix.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "average", crime_vs_croydon: "similar", after_dark_assessment: "Borough headline and burglary concentration are real signals. Ward itself passes on balance but nowhere near cleanly.", concerns: ["Hackney borough burglary concentration", "T1.1 marginal pass"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "London Fields", walk_minutes: 10, notes: "Major park nearby — lido, sports facilities" }], overall_assessment: "London Fields within walking distance. No immediate waterfront." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "Town Hall Square regeneration by Peabody. Bohemia Place development.", recent_milestones: [], upcoming_milestones: ["Town Hall Square completion"], trajectory_through_2027: "Ascending. Ongoing civic regeneration and continued demand from young professionals.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "partial", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Marginal pass. Borough headline and burglary concentration are real but the ward passes on balance.",
        "1.2": "Modern rental stock present — Peabody market-rent and newer infill.",
        "1.3": "Two Overground lines + Greater Anglia — multi-hub but no tube direct.",
        "1.4": "Partial — Peabody operates some market-rent but operator density is thinner than BTR-heavy areas.",
        "1.5": "Public realm in reasonable order. Town Hall Square improving.",
        "1.6": "Not in decline — active regeneration and strong demand.",
      },
      "moderate",
      "T1 passes but T1.1 is marginal and T1.4 is partial. Safety and operator density are the concerns.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Mare Street provides dense walkable essentials — strong independent retail layer.",
        "2.2": "Multiple grocery options along Mare Street.",
        "2.3": "Gym access not yet researched.",
        "2.4": "London Fields within walking distance. No immediate waterfront.",
        "2.5": "Residential streets are calm. Mare Street carries some evening activity but the area is not nightlife-dominated like Dalston.",
        "2.7": "Census 2021: 42% aged 20-39. Solid young-skew.",
      },
      "good",
      "T2 good — strong walkable essentials, green access, young demographic.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "pass" },
      {
        "3.1": "Town Hall Square regeneration by Peabody. Active civic investment.",
        "3.2": "Broadway Market, Hackney Picturehouse, independent retail — strong cultural anchors.",
        "3.3": "Distinctive sense of place — recognisable Hackney identity, independent-retail culture.",
        "3.4": "15-minute completeness strong — transport, grocery, culture, parks all walkable.",
        "3.5": "Continuous residential high street, not architecturally distinguished.",
        "3.6": "Good day/night rhythm — busy high street daytime, restaurants and cinema evening, calmer late night.",
      },
      "good",
      "T3 strong — genuine Hackney identity, cultural anchors, and 15-minute completeness.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "pass", "5.4": "pass" },
      {
        "5.1": "23-min average. Only 2/4 anchors under 25 minutes. Adequate but not fast.",
        "5.2": "Three independent lines — genuine redundancy despite no tube.",
        "5.3": "Ascending — Town Hall Square and continued young-professional demand.",
        "5.4": "Strong third-space culture — Broadway Market cafes, Hackney Picturehouse, London Fields.",
      },
      "moderate",
      "T5 moderate — good redundancy and third spaces, but connectivity average is mid-tier.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — strong T3 identity and T2 daily life, but mid-tier connectivity and marginal safety hold it back from A territory.",
  },

  projects: [
    buildProject({
      id: "hackney-central-peabody", area_id: "hackney-central", name: "Peabody Bohemia Place / Town Hall Square", developer: "Peabody", operator: "Peabody", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent"], realism: "unknown",
      preview: "Peabody market-rent inventory around Bohemia Place and the Town Hall Square regeneration.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Peabody modern delivery — functional build quality at housing-association-plus standard.",
        t4_1_amenity_package: "Decent amenity package appropriate for Peabody market-rent product.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    buildProject({
      id: "hackney-gardens",
      area_id: "hackney-central",
      name: "Hackney Gardens",
      developer: "Thornsett Group",
      operator: "Various agents",
      building_type: "Build-to-Sell",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unknown",
      preview: "58-unit boutique development (3-5 storeys) near Hackney Central station. Daytime concierge, social space, landscaped gardens, underfloor heating. Rental through individual landlords.",
      amenity_tier: "decent",
      overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Thornsett Group boutique development — Housing Design Awards listed. Small scale (58 units) with quality finishes (Siemens appliances, underfloor heating).",
        t4_1_amenity_package: "Decent — daytime concierge, social space, landscaped gardens, balconies, video entry. No premium gym/pool stack.",
        t4_4_signature_arch: "Not signature-authored but Housing Design Awards recognition.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default hackneyCentral;
