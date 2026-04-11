import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const whiteCity: Area = {
  id: "white-city",
  name: "White City",
  aliases: ["Television Centre", "White City Living"],
  borough: "Hammersmith & Fulham",
  postcodes: ["W12"],

  headline:
    "Berkeley's White City Living plus Television Centre — beach club, pool, Soho House, Electric Cinema, Westfield + Imperial expansion next door.",
  preview:
    "One of the few London regeneration districts that combines premium managed living with genuine social energy. White City Living is Berkeley's flagship west London masterplan — 2,500+ homes set in eight acres of parks and gardens, with a rooftop beach club, pool, spa, gym, work lounges, cinemas. Television Centre adds restaurants, Electric Cinema, White City House, and real cultural identity.",

  long_form: {
    full: "White City is one of the few London regeneration districts that combines premium managed living with genuine social energy outside the building. White City Living is Berkeley's flagship west London masterplan: over 2,500 homes set in eight acres of parks and gardens, with a rooftop beach club, pool, spa, gym, work lounges, cinemas, and strong day-to-day retail already on site. Immediately alongside it, Television Centre gives the district a second identity that stops it feeling generic: the former BBC headquarters now holds homes, offices, restaurants, Electric Cinema, White City House, and Soho House wellness facilities. Westfield London is next door, Imperial's White City campus is expanding directly into the area, and White City and Wood Lane stations make the West End straightforward.",
    history: "White City was a media and BBC heartland through the 20th century. After the BBC moved out in the 2010s, Television Centre was redeveloped, and Berkeley took on the larger White City Living masterplan on the adjacent former rail and industrial lands.",
    vibe: "West London polish with younger, more international energy than the Notting Hill / Chelsea side. Imperial's expansion brings student presence; Television Centre brings creative-industry presence; Westfield brings shopping crowd. Mixed and active.",
    weekday: "A Tuesday at 7pm: Westfield is winding down; Television Centre's restaurants are full; Electric Cinema is busy; the White City Living amenity buildings are active.",
    weekend: "A Saturday: peak Westfield, peak Television Centre, brunch crowds at White City House, cyclists in Hammersmith Park.",
    notable: "Television Centre, White City House (Soho House), Electric Cinema, Imperial White City campus, Westfield London.",
    croydon_comparison: "White City is the polished west London upgrade that Croydon's commercial decline has made structurally impossible. Berkeley's management quality plus the cultural anchors plus the connectivity put it in a different category.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Central", type: "tube" },
      { name: "Hammersmith & City", type: "tube" },
      { name: "Circle", type: "tube" },
    ],
    primary_stations: [
      { name: "White City", lines: ["Central"], walk_minutes_from_centre: 4 },
      { name: "Wood Lane", lines: ["Hammersmith & City", "Circle"], walk_minutes_from_centre: 6 },
      { name: "Shepherd's Bush", lines: ["Central", "Overground"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 22, canary_wharf: 35, soho_fitzrovia: 14, kings_cross_shoreditch: 24 },
    multi_cluster_score: 3,
    redundancy_score: 4,
    notes: "Central Line is the headline; H&C and Circle add redundancy.",
    sources: [],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [],
    ethnic_composition: [],
    household_mix: [],
    student_pct: 18,
    professional_renter_pct: 48,
    notes: "Imperial campus expansion + Television Centre creative industry presence skews young and international.",
    sources: [],
  },
  safety: { overall: "very-safe", crime_vs_borough: "below", crime_vs_croydon: "much-safer", after_dark_assessment: "Very safe. Heavy footfall around Westfield and Television Centre, well-lit residential streets.", concerns: [], sources: [] },
  green_and_water: {
    has_river: false, has_canal: false, has_dock: false,
    parks: [
      { name: "White City Living parks", size_acres: 8, walk_minutes: 2, notes: "Eight acres of designed parks and gardens within the masterplan" },
      { name: "Hammersmith Park", walk_minutes: 5, notes: "Adjacent municipal park" },
    ],
    overall_assessment: "Strong on parkside identity even though no river/canal/dock. The 8 acres of integrated green space inside White City Living is unusually generous.",
  },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Phase F to populate. Known: Westfield London (largest urban shopping centre in Europe with full retail/food), multiple chain gyms, White City House (Soho House), Electric Cinema, Imperial gym facilities." },
  regeneration: { status: "phased", investment_pipeline: "Berkeley masterplan continues with new phases. Imperial expansion ongoing.", recent_milestones: ["The Cascades phase", "Solaris One & Two", "Television Centre fully tenanted"], upcoming_milestones: ["Continued Berkeley phase delivery", "Imperial campus growth"], trajectory_through_2027: "Strong ascending trajectory.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(T1_CRITERIA, { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" }, {}, "strong", "T1 clean."),
    t2_daily_life: buildTier(T2_CRITERIA, { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "pass" }, {}, "strong", "Strong on every T2 row."),
    t3_identity: buildTier(T3_CRITERIA, { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "pass", "3.6": "pass" }, {}, "strong", "Television Centre + White City House + Imperial give white city more cultural identity than most premium districts."),
    t5_personal: buildTier(T5_CRITERIA, { "5.1": "partial", "5.2": "pass", "5.3": "pass", "5.4": "partial" }, {}, "good", "Decent multi-cluster + redundancy. Trajectory ascending."),
    overall_grade: "A",
    grade_reasoning: "White City earns A grade on the strength of T1, T2, and T3, all clean. T5 partial on multi-cluster and third spaces keeps it from S.",
  },

  projects: [
    buildProject({ id: "white-city-living", area_id: "white-city", name: "White City Living", developer: "Berkeley Group / St James", operator: "St James", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unlikely", preview: "Berkeley's 2,500+ home masterplan. Eight acres of parks and gardens, pool, spa, gym, cinemas, work lounges, rooftop beach club.", amenity_tier: "premium", overall_grade: "A" }),
    buildProject({ id: "the-cascades", area_id: "white-city", name: "The Cascades", developer: "St James", operator: "St James", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely", preview: "Water-garden-facing phase within White City Living.", amenity_tier: "premium", overall_grade: "A" }),
    buildProject({ id: "solaris", area_id: "white-city", name: "The Solaris One & Two", developer: "St James", operator: "St James", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely", preview: "Premium Westmont phase within White City Living. Rooftop pool, beach club, sunset bar.", amenity_tier: "premium", overall_grade: "A" }),
    buildProject({ id: "westmont-apartments", area_id: "white-city", name: "Westmont Apartments", developer: "St James", operator: "St James", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely", preview: "Premium White City Living release between the wider masterplan and the most overtly flagship Solaris positioning.", amenity_tier: "strong", overall_grade: "A" }),
    buildProject({ id: "television-centre", area_id: "white-city", name: "Television Centre", developer: "Mitsui Fudosan UK / Stanhope", operator: "Stanhope", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely", preview: "Former BBC headquarters turned mixed-use destination. Homes, offices, restaurants, Electric Cinema, White City House, Soho House wellness.", amenity_tier: "premium", is_signature: true, overall_grade: "S" }),
    buildProject({ id: "the-ariel", area_id: "white-city", name: "The Ariel", developer: "Mitsui Fudosan / Stanhope", operator: "Stanhope", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely", preview: "One of the strongest residential pieces inside Television Centre. Better character than generic west London luxury.", amenity_tier: "premium", overall_grade: "A" }),
    buildProject({ id: "scenery-house", area_id: "white-city", name: "Scenery House", developer: "Mitsui Fudosan / Stanhope", operator: "Stanhope", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unknown", preview: "Current Television Centre residential launch beside Hammersmith Park. The TVC side is still actively improving.", amenity_tier: "strong", overall_grade: "A" }),
  ],

  external_links: [
    { url: "https://www.whitecityliving.co.uk/", label: "White City Living", type: "developer", accessed_date: "2026-04-11" },
    { url: "https://www.televisioncentre.com/", label: "Television Centre", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default whiteCity;
