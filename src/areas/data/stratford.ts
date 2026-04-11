import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const stratford: Area = {
  id: "stratford",
  name: "Stratford / East Bank",
  aliases: ["Stratford", "East Bank", "Olympic Park"],
  borough: "Newham",
  postcodes: ["E15", "E20"],

  headline:
    "The largest single cultural investment in a generation — V&A East, Sadler's Wells East, UCL East, London College of Fashion, plus Olympic Park, Westfield, and four transport lines converging.",
  preview:
    "East Bank is operational. V&A East Storehouse is open; the V&A East Museum opens 2026 with BBC Music Studios. Sadler's Wells East, UCL East, and London College of Fashion are all live. 560-acre Olympic Park, Europe's largest urban shopping centre next door, Elizabeth + Jubilee + DLR + Overground all converge here.",

  long_form: {
    full: "The East Bank programme at Queen Elizabeth Olympic Park has turned Stratford into one of the most significant cultural destinations in Europe. The V&A East Storehouse is already open; the V&A East Museum opens in 2026 alongside the BBC Music Studios. Sadler's Wells East, UCL East, and London College of Fashion are all operational. Westfield Stratford is five minutes on foot. The Olympic Park provides 560 acres of managed green space and waterways. The Stratford Waterfront residential programme (700 homes by Ballymore + LLDC) is under construction, completing 2029. East Village — the former Athletes' Village — is already a fully functioning residential neighbourhood. Four transport lines make this one of the best-connected points in East London.",
    history:
      "Stratford was a transport interchange and a struggling town centre until London 2012 brought the Olympics, after which the LLDC was established to deliver the legacy. East Village (the Athletes' Village) became Get Living's flagship UK BTR; East Bank followed as the cultural quarter; the masterplan continues to deliver new residential phases.",
    vibe: "Stratford reads young and active. East Village is the canonical Caner-target — Get Living's BTR campus directly facing the park, with strong professional renter density. The wider area is more multi-ethnic and working-class than the polished West London masterplans, in a way that reads alive rather than gentrified.",
    weekday: "A Tuesday at 7pm: Westfield is winding down but still busy; East Bank cultural programming is active; the Olympic Park has joggers and dog walkers; East Village's amenity buildings are full.",
    weekend: "A Saturday: peak Westfield, peak Olympic Park, peak East Bank. One of the most active places in East London on weekends.",
    notable: "V&A East, Sadler's Wells East, UCL East, London College of Fashion, Olympic Park, Westfield Stratford, East Village (Get Living BTR campus).",
    croydon_comparison:
      "Stratford and Croydon are both major outer-London transport hubs with big retail. The differences: Stratford has Olympic Park, world-class cultural anchors, four transport lines including the Elizabeth Line, professional BTR at scale, and a young multi-ethnic energy that Croydon's commercial decline has lost.",
  },

  zones: ["Zone 2", "Zone 3"],
  connectivity: {
    lines: [
      { name: "Elizabeth", type: "elizabeth" },
      { name: "Jubilee", type: "tube" },
      { name: "Central", type: "tube" },
      { name: "DLR", type: "dlr" },
      { name: "Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "Stratford", lines: ["Elizabeth", "Jubilee", "Central", "DLR", "Overground"], walk_minutes_from_centre: 4 },
      { name: "Stratford International", lines: ["DLR", "Southeastern HS1"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 12, canary_wharf: 13, soho_fitzrovia: 18, kings_cross_shoreditch: 11 },
    multi_cluster_score: 5,
    redundancy_score: 5,
    notes: "Five-line interchange plus HS1. Among the best-connected points in London.",
    sources: [],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [],
    ethnic_composition: [
      { group: "White", pct: 43 },
      { group: "Asian", pct: 28 },
      { group: "Black", pct: 18 },
      { group: "Mixed", pct: 7 },
      { group: "Other", pct: 4 },
    ],
    household_mix: [],
    student_pct: 12,
    professional_renter_pct: 50,
    notes: "Census 2021 confirms genuinely multi-ethnic mix in Newham. Young professional + student blend.",
    sources: [],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "average",
    crime_vs_croydon: "safer",
    after_dark_assessment: "Stratford station and Westfield are busy and stewarded. The Olympic Park core is well-lit and patrolled. Streets further from the park can feel quieter and worth being aware of.",
    concerns: [],
    sources: [],
  },
  green_and_water: {
    has_river: false,
    has_canal: true,
    has_dock: false,
    parks: [{ name: "Queen Elizabeth Olympic Park", size_acres: 560, walk_minutes: 4, notes: "560 acres of managed parkland and waterways" }],
    overall_assessment: "560-acre Olympic Park is one of the largest contiguous green spaces in inner London. River Lea and Bow Back Rivers run through.",
  },
  amenities: {
    grocery: [],
    gyms: [],
    food_and_drink: [],
    health: [],
    cultural: [],
    notes: "Phase F to populate. Known: Westfield Stratford (largest urban shopping centre in Europe), all major chain gyms, full cultural programming via East Bank.",
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "Stratford Waterfront delivering 700 homes through 2029. East Bank programming continues to expand.",
    recent_milestones: ["V&A East Storehouse opened", "London College of Fashion delivered", "UCL East operational"],
    upcoming_milestones: ["V&A East Museum opens 2026", "BBC Music Studios", "Stratford Waterfront completion 2029"],
    trajectory_through_2027: "Stratford is on a strong ascending trajectory. East Bank fully matures during the visa transition window.",
    sources: [],
  },

  evaluation: {
    t1_foundational: buildTier(T1_CRITERIA, { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" }, {}, "strong", "T1 clean across the board."),
    t2_daily_life: buildTier(T2_CRITERIA, { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "pass" }, {}, "strong", "Strong on every T2 row. Olympic Park is the headline T2.4 win."),
    t3_identity: buildTier(T3_CRITERIA, { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "pass" }, { "3.5": "Architectural quality is mixed across the masterplan" }, "strong", "T3 is exceptional thanks to East Bank and the Olympic legacy."),
    t5_personal: buildTier(T5_CRITERIA, { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "partial" }, {}, "strong", "Five-line redundancy + multi-cluster reach + ascending trajectory. The strongest T5 in the dataset alongside King's Cross."),
    overall_grade: "S",
    grade_reasoning: "Stratford / East Bank earns S on the strength of every tier, with the only weaknesses being mixed architectural coherence and limited quiet third spaces. Among the strongest candidates in the dataset.",
  },

  projects: [
    buildProject({ id: "stratford-waterfront", area_id: "stratford", name: "Stratford Waterfront", developer: "Ballymore + LLDC", operator: "Ballymore", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "achievable-with-upfront", preview: "700 homes. Under construction from 2026, completing 2029. Directly facing V&A East and the cultural quarter.", amenity_tier: "premium", overall_grade: "A" }),
    buildProject({ id: "east-village", area_id: "stratford", name: "East Village", developer: "Get Living", operator: "Get Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable-with-upfront", preview: "Former Athletes' Village — 2,800 homes across multiple BTR buildings. Mature, functioning mixed-tenure neighbourhood directly on the park.", amenity_tier: "strong", overall_grade: "S" }),
    buildProject({ id: "here-east", area_id: "stratford", name: "Here East", developer: "iCITY / LLDC", operator: "Here East", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown", preview: "Converted press and broadcast centre. Tech and creative workspace campus anchoring the commercial side of the park.", amenity_tier: "decent", overall_grade: "B" }),
    buildProject({ id: "chobham-manor", area_id: "stratford", name: "Chobham Manor", developer: "Taylor Wimpey / L&Q", operator: "Various", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable-with-upfront", preview: "The most family-residential part of the post-Olympic build-out. Useful if East Village feels too rental-heavy.", amenity_tier: "decent", overall_grade: "B" }),
    buildProject({ id: "east-wick-sweetwater", area_id: "stratford", name: "East Wick + Sweetwater", developer: "Places for People + Balfour Beatty", operator: "Various", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "achievable-with-upfront", preview: "The Hackney Wick edge of the Olympic Park build-out. More creative-neighbourhood in tone than Stratford's polished retail core.", amenity_tier: "decent", overall_grade: "B" }),
    buildProject({ id: "glasshouse-gardens", area_id: "stratford", name: "Glasshouse Gardens", developer: "Lend Lease + LCR", operator: "Various", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable-with-upfront", preview: "Station-adjacent residential with immediate Westfield and transport access. Conventional high-rise but very liveable.", amenity_tier: "decent", overall_grade: "B" }),
  ],

  external_links: [
    { url: "https://www.queenelizabetholympicpark.co.uk/", label: "Queen Elizabeth Olympic Park", type: "developer", accessed_date: "2026-04-11" },
    { url: "https://www.eastbank.london/", label: "East Bank", type: "developer", accessed_date: "2026-04-11" },
    { url: "https://www.getliving.com/", label: "Get Living (East Village operator)", type: "operator", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default stratford;
