import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects ─────────────────────────────────────────────────────────
const theFounding = buildProject({
  id: "the-founding", area_id: "canada-water", name: "The Founding", developer: "British Land", operator: "British Land", building_type: "Owner-Lease", build_phase: "in_delivery", tenure: ["buy"], realism: "blocked",
  preview: "35-storey for-sale tower. 186 apartments — Canada Water's first major residential address.",
  amenity_tier: "premium", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "British Land in-delivery tower to modern specification — the first flagship residential address and the architectural benchmark for the masterplan.",
    t4_1_amenity_package: "Premium package expected — concierge, residents' amenities, full British Land masterplan access.",
    t4_4_signature_arch: "Not named-architect signature but deliberately designed as the district's residential landmark.",
  },
});
theFounding.rental.price_transparency = "listed";
theFounding.rental.affordability = "over-budget";
theFounding.external_links = [
  { url: "https://thefounding.co.uk/", label: "The Founding — Canada Water", type: "developer", accessed_date: "2026-04-12" },
];

const dockShed = buildProject({
  id: "dock-shed", area_id: "canada-water", name: "Dock Shed", developer: "British Land", operator: "British Land", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Early commercial and cultural anchor within the masterplan. Helps prove the district is activating before the housing fully arrives.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Primarily commercial/mixed-use rather than a residential building — not scored on residential quality dimensions.",
    t4_1_amenity_package: "Functional mixed-use rather than amenity-heavy residential.",
    t4_4_signature_arch: "Not a signature piece — early activation infrastructure.",
  },
});

const cornerCorner = buildProject({
  id: "corner-corner", area_id: "canada-water", name: "Corner Corner (Broadwick + KERB)", developer: "British Land", operator: "Broadwick / KERB", building_type: "Mixed", build_phase: "complete", tenure: ["rent"], realism: "unknown",
  preview: "Leisure and dining venue already open. The first activated public space in the masterplan.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Primarily a leisure/dining venue rather than residential — not scored on residential quality dimensions.",
    t4_1_amenity_package: "Not a residential amenity package — Corner Corner functions as a neighbourhood-level anchor.",
    t4_4_signature_arch: "Not a signature architectural piece.",
  },
});

const cwLeisure = buildProject({
  id: "canada-water-leisure", area_id: "canada-water", name: "Canada Water Leisure Centre", developer: "Southwark Council / British Land", operator: "Southwark Council", building_type: "Mixed", build_phase: "complete", tenure: ["rent"], realism: "unknown",
  preview: "Major civic anchor already delivered. Strengthens the case that Canada Water is becoming a real district.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Civic leisure centre rather than a residential building — not scored on residential dimensions.",
    t4_1_amenity_package: "Neighbourhood amenity anchor rather than a residential amenity package.",
    t4_4_signature_arch: "Not a signature architectural piece.",
  },
});

const robertsClose = buildProject({
  id: "7-roberts-close", area_id: "canada-water", name: "7 Roberts Close (Affordable)", developer: "British Land + AustralianSuper", operator: "unknown", building_type: "Mixed", build_phase: "complete", tenure: ["rent"], realism: "unknown",
  preview: "79 affordable homes delivered as part of the masterplan. Affordable tenure — not standard market rental.",
  amenity_tier: "basic", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern delivery as part of the Canada Water masterplan — built to current standards but affordable specification.",
    t4_1_amenity_package: "Basic — affordable housing within the masterplan; benefits from proximity to wider masterplan amenities.",
    t4_4_signature_arch: "Not signature-authored — functional affordable delivery.",
  },
});
robertsClose.rental.affordability = "unclear";

const cwWider = buildProject({
  id: "canada-water-wider", area_id: "canada-water", name: "Canada Water Masterplan (wider)", developer: "British Land + AustralianSuper", operator: "British Land", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown",
  preview: "3,700 homes total, new high street, 12-acre park, 20,000 jobs of workspace. Planning under review as of December 2025.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Future-phase building quality cannot be scored until individual projects are specified; Roger Madelin's King's Cross pedigree suggests a high ceiling.",
    t4_1_amenity_package: "Masterplan-scale amenity promise includes new high street, 12-acre park, and 20,000 jobs of workspace — ambitious but unbuilt.",
    t4_4_signature_arch: "Signature potential pending individual project authorship and the resolution of the December 2025 planning call-in.",
  },
});

const canadaWater: Area = {
  id: "canada-water",
  name: "Canada Water",
  aliases: ["Rotherhithe"],
  borough: "Southwark",
  postcodes: ["SE16"],

  headline:
    "53 acres on the Zone 2 Jubilee line — the same lead developer who delivered King's Cross. Plans for the first new London high street in a century, 12-acre park, 3,700 homes.",
  preview:
    "The development with the strongest long-term bones and the most uncertain near-term timeline. British Land + AustralianSuper appointed Roger Madelin (who delivered King's Cross) to lead. Plan: 3,700 homes, new high street, 12-acre park, 20,000 jobs of workspace. Corner Corner leisure venue already open. Planning called in by Sadiq Khan in December 2025.",

  long_form: {
    full: "Canada Water is the development with the strongest long-term bones and the most uncertain near-term timeline. British Land and AustralianSuper have appointed Roger Madelin — who delivered the King's Cross masterplan — to lead the project. The plan is genuinely ambitious: 3,700 homes, a new high street (the first built in London in a century), a new town square, a 12-acre park, a new leisure centre, and 20,000 jobs of workspace. Corner Corner — a leisure venue by Broadwick and KERB — is already open and operating. Canada Water station on the Jubilee line puts London Bridge at 3 minutes and Canary Wharf at 5. Zone 2. The caveat: Sadiq Khan called in the revised masterplan in December 2025 over affordable housing delivery, introducing planning uncertainty.",
    history: "Former Canada Water docks. The Surrey Quays shopping centre dominated until British Land took on the wider masterplan in the 2010s.",
    vibe: "Dock-side and quietly transitioning. The Jubilee Line plus Overground make this one of the most well-connected Zone 2 spots; the activation is genuinely happening but slowly.",
    weekday: "A Tuesday at 7pm: Corner Corner has after-work crowds; Canada Water station is busy; the dock walks have joggers.",
    weekend: "A Saturday: dock walks, Surrey Quays shopping, growing food and drink scene at Corner Corner.",
    notable: "Roger Madelin (King's Cross delivery lead) leading the masterplan. Corner Corner. Canada Water Library.",
    croydon_comparison: "Canada Water has Jubilee + Overground + multi-cluster reach that Croydon's overground-only options can't match. The Roger Madelin pedigree gives it long-term credibility even with the current planning uncertainty.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Jubilee", type: "tube" },
      { name: "Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "Canada Water", lines: ["Jubilee", "Overground"], walk_minutes_from_centre: 4 },
      { name: "Surrey Quays", lines: ["Overground"], walk_minutes_from_centre: 10 },
      { name: "Rotherhithe", lines: ["Overground"], walk_minutes_from_centre: 12 },
    ],
    times_to_anchors: { city_of_london: 10, canary_wharf: 5, soho_fitzrovia: 15, kings_cross_shoreditch: 10 },
    multi_cluster_score: 5,
    redundancy_score: 3,
    notes: "Jubilee + Overground gives multi-cluster reach from a single station. Canary Wharf is 5 min (1 Jubilee stop), London Bridge 3 min, Stratford 8 min via Overground/Jubilee interchange at Canary Wharf. Overground (Windrush line) also connects directly to Shoreditch High Street and Dalston in 10-15 min. No tube night service but Jubilee has 24-hour weekend trains on the main central section.",
    sources: [
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/tube-dlr-overground/stops/940GZZLUCWR/canada-water-underground-station", label: "TfL — Canada Water station", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/modes/london-overground/", label: "TfL — London Overground", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 28 },
      { cohort: "30-39", pct: 37 },
      { cohort: "40-49", pct: 16 },
      { cohort: "50+", pct: 19 },
    ],
    ethnic_composition: [
      { group: "White", pct: 56 },
      { group: "Black or Black British", pct: 18 },
      { group: "Asian or Asian British", pct: 13 },
      { group: "Mixed", pct: 8 },
      { group: "Other ethnic group", pct: 5 },
    ],
    household_mix: [
      { type: "Single person", pct: 30 },
      { type: "Couple no children", pct: 27 },
      { type: "Couple with children", pct: 21 },
      { type: "Lone parent", pct: 9 },
      { type: "Shared household", pct: 10 },
      { type: "Other", pct: 3 },
    ],
    student_pct: 6,
    professional_renter_pct: 55,
    notes: "Rotherhithe/Canada Water is more established professional-family character than the Olympic legacy areas — 30-39 is the dominant cohort at 37%, and couple-with-children share (21%) is higher than other dataset areas except the family-coded parts of Wembley Park. Ethnic mix is more White-dominant than central Southwark's Newington ward, reflecting the dock-side housing history. Student share is low at 6%. Current demographics likely skewing younger as the British Land masterplan activates — Census 2021 predates The Founding delivery and Corner Corner opening.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021 — Rotherhithe ward, Southwark", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://www.ons.gov.uk/visualisations/censusareachanges/E05011099/", label: "ONS — Rotherhithe ward changes", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://www.southwark.gov.uk/council-and-democracy/data-and-statistics", label: "Southwark — data and statistics", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "Safe and well-stewarded. The dock area is well-lit and frequented into the evening by dog walkers and residents. The Jubilee line station is busy late evening. British Land's stewardship contract with Southwark Council adds supplementary cleaning and lighting within the masterplan footprint. Women-walking-alone assessment: comfortable around the dock and station area and along the main pedestrian routes. The edge transitions — Lower Road toward Surrey Quays shopping centre, or Salter Road toward Rotherhithe — are quieter but not known trouble spots. Russia Dock Woodland at 6 min is best used in daylight only (wooded, quiet by evening).",
    concerns: [
      "Russia Dock Woodland is wooded and dark after hours — use in daylight",
      "Surrey Quays retail park fringe can feel car-park-adjacent rather than pedestrian-scaled",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police-service/rotherhithe/", label: "Met Police — Rotherhithe", type: "met-police", accessed_date: "2026-04-17" },
      { url: "https://www.southwark.gov.uk/community-safety", label: "Southwark — community safety", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: true,
    parks: [
      { name: "Russia Dock Woodland", size_acres: 34, walk_minutes: 6, notes: "Wooded former dock; ecology-focused; good running loop" },
      { name: "Southwark Park", size_acres: 63, walk_minutes: 10, notes: "Large Victorian municipal park with lake, bandstand, galleries, sports courts" },
      { name: "Stave Hill Ecological Park", size_acres: 5, walk_minutes: 8, notes: "Ecological reserve on a built hill; Thames views from the top" },
      { name: "Greenland Dock waterside", walk_minutes: 5, notes: "Dock-side promenade, continuous to the Thames Path" },
      { name: "Canada Water dock", walk_minutes: 0, notes: "The central dock itself; wildfowl, reflection, small-scale water activity" },
    ],
    overall_assessment: "Strong dock and water-side identity — Canada Water itself, Greenland Dock, and South Dock together give continuous waterside walking from the station. Russia Dock Woodland (34 acres) and Southwark Park (63 acres) provide substantial green space within 10 min walk. Stave Hill offers elevated Thames views. Thames Path is 10-12 min via Rotherhithe. Overall green/water proposition is one of the strongest in the dataset for actual quantum of amenity per step.",
    sources: [
      { url: "https://www.southwark.gov.uk/parks-and-open-spaces", label: "Southwark parks", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.canadawater.co.uk/places-spaces/", label: "Canada Water — Places and Spaces", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.tcv.org.uk/volunteering/stave-hill-ecological-park/", label: "Stave Hill Ecological Park", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Tesco Extra Surrey Quays", type: "hypermarket", walk_minutes: 7, notes: "Full-size Tesco Extra at Surrey Quays; weekly shop" },
      { name: "Sainsbury's Local Canada Water", type: "convenience", walk_minutes: 3, notes: "Top-up shop at the station" },
      { name: "Aldi Surrey Quays", type: "supermarket", walk_minutes: 8, notes: "Budget option" },
      { name: "Decathlon Surrey Quays", type: "sports retail", walk_minutes: 7, notes: "Full-size Decathlon; relevant for equipment" },
    ],
    gyms: [
      { name: "Canada Water Leisure Centre", type: "council gym", walk_minutes: 4, notes: "Pool, gym floor, classes, studios; newly delivered 2022; excellent value at council rates" },
      { name: "PureGym Canada Water", type: "budget gym", walk_minutes: 4, notes: "24/7; inside the masterplan footprint; £25-30/mo" },
      { name: "Seven Islands Leisure Centre", type: "council", walk_minutes: 15, notes: "Alternative council facility at Rotherhithe" },
      { name: "The Gym Group Bermondsey", type: "budget gym", walk_minutes: 12, notes: "Alternative on the Bermondsey side" },
    ],
    food_and_drink: [
      { name: "Corner Corner (Broadwick + KERB)", type: "food hall", walk_minutes: 4, notes: "15+ KERB traders, bars, event space; the first activated public space in the masterplan" },
      { name: "Dock Shed", type: "restaurants + cafés", walk_minutes: 3, notes: "Early masterplan F&B anchor" },
      { name: "Surrey Quays Shopping Centre", type: "retail + F&B", walk_minutes: 8, notes: "Older retail park; chain restaurants and cinema" },
      { name: "The Mayflower", type: "historic pub", walk_minutes: 14, notes: "At Rotherhithe — historic Thames-side pub, noted for character" },
    ],
    health: [
      { name: "Albion Street Group Practice", type: "NHS GP", walk_minutes: 8, notes: "Accepts registrations" },
      { name: "Downtown Surgery", type: "NHS GP", walk_minutes: 5, notes: "Alternative GP option" },
      { name: "Boots Pharmacy Surrey Quays", type: "pharmacy", walk_minutes: 7, notes: "Full NHS services" },
      { name: "Canada Water Pharmacy", type: "pharmacy", walk_minutes: 4, notes: "Inside the station precinct" },
      { name: "Guy's Hospital", type: "NHS hospital", walk_minutes: 12, notes: "Via Jubilee to London Bridge — A&E, full secondary care" },
    ],
    cultural: [
      { name: "Canada Water Library", type: "public library", walk_minutes: 5, notes: "CZWG-designed landmark building (2011); genuinely good quiet study space" },
      { name: "Canada Water Theatre", type: "theatre", walk_minutes: 5, notes: "Community theatre attached to the library" },
      { name: "Printworks (on hiatus, redevelopment ongoing)", type: "former music venue", walk_minutes: 10, notes: "Landmark music venue; returning in new form as part of British Land masterplan" },
      { name: "Brunel Museum", type: "small museum", walk_minutes: 12, notes: "Thames Tunnel history; quirky" },
      { name: "Cinema Surrey Quays (Cineworld)", type: "cinema", walk_minutes: 8, notes: "Standard multiplex" },
    ],
    notes: "Canada Water Library is the single strongest quiet-third-space in this batch — CZWG's landmark building with genuinely good reading and study space. Corner Corner is the activated food-and-drink anchor, with Printworks returning as a music venue in the forthcoming masterplan phases. Independent retail and café density is thin relative to Canary Wharf or Stratford — this is the main amenity gap, which the planned new high street is designed to close. Gym offer is functional (Canada Water Leisure Centre plus PureGym) but lacks premium or specialist options; premium gym access via 5-min Jubilee to Canary Wharf.",
    sources: [
      { url: "https://www.canadawater.co.uk/places-spaces/corner-corner/", label: "Canada Water — Corner Corner", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.southwark.gov.uk/libraries/find-a-library/canada-water-library", label: "Southwark — Canada Water Library", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.cwlr.co.uk/", label: "Canada Water Leisure Centre", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.printworkslondon.co.uk/", label: "Printworks London", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "British Land and AustralianSuper's £3.5bn masterplan covers 53 acres. Total plan: 3,700 homes, a new high street (the first new high street built in central London in a century), a 3.5-acre town square, a 12-acre park, a new leisure centre (delivered), and 2m sq ft of workspace supporting 20,000 jobs. Roger Madelin — who delivered the King's Cross masterplan for Argent — leads the project. As of December 2025, Sadiq Khan called in the revised masterplan over affordable housing delivery, introducing planning uncertainty. The broader plan remains intact but the pace and exact mix of future phases is under review.",
    recent_milestones: [
      "2022 — Canada Water Leisure Centre delivered",
      "2022 — Canada Water Library established as masterplan landmark",
      "2023 — Corner Corner (Broadwick + KERB) opened as activation anchor",
      "2023 — Dock Shed early commercial pieces delivered",
      "2024 — 7 Roberts Close (79 affordable homes) completed",
      "2025 — The Founding tower construction active",
      "December 2025 — Masterplan revised scheme called in by Sadiq Khan for affordable housing review",
    ],
    upcoming_milestones: [
      "2026 — Revised masterplan call-in resolution expected",
      "2026-2027 — The Founding tower completion (186 homes)",
      "2027+ — New high street phases subject to call-in resolution",
      "2028-2032 — Additional residential phases (subject to planning)",
      "Long-term — 12-acre park, new town square, Printworks redevelopment",
    ],
    trajectory_through_2027: "Uncertain near-term but the long-term thesis is strong. The December 2025 call-in materially affects the 2026-2027 delivery pace; if the revised masterplan is approved with modifications in 2026, delivery resumes with ~12 month delay. If the Mayor rejects and a further revision is required, delivery could slip to 2027-2028 before the next major phases start. Roger Madelin's King's Cross track record is the credibility — he delivered one of the most successful masterplans in modern UK urbanism, and the bones of Canada Water are comparable. For Caner's 2026-2028 decision window, Canada Water is a bet on future upside rather than a current peak: the station, connectivity, dock identity, and existing Corner Corner/library/leisure centre anchors are already strong, but the transformative high street and town square are post-visa-window. The grade-B call reflects present uncertainty; if planning resolves cleanly in 2026, recalibration to A becomes defensible.",
    sources: [
      { url: "https://www.canadawater.co.uk/the-plan/", label: "Canada Water — The Plan", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.southwark.gov.uk/planning/planning-policy/area-action-plans/canada-water-area-action-plan", label: "Southwark — Canada Water AAP", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.london.gov.uk/programmes-strategies/planning", label: "GLA — Planning", type: "other", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Southwark crime below borough average at Canada Water; the dock area is well-lit and well-stewarded, with very-safe after-dark assessment.",
        "1.2": "The Founding tower plus the Corner Corner/Dock Shed commercial pieces plus the wider phased delivery give genuine modern stock presence — not a pre-war market.",
        "1.3": "Canada Water station carries Jubilee + Overground, putting Canary Wharf at 5 minutes, London Bridge at 3, and all four anchor clusters within 15 minutes. Connectivity is a headline strength.",
        "1.4": "British Land + AustralianSuper are running the masterplan with Roger Madelin (ex-King's Cross) leading — institutional professional landlord pedigree at the top of the scale.",
        "1.5": "Canada Water public realm is actively maintained by British Land and Southwark Council; the Leisure Centre and Library are recent civic investments.",
        "1.6": "Not in decline — the broader trajectory is strongly upward even with the December 2025 planning call-in introducing near-term uncertainty.",
      },
      "strong",
      "T1 clean.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "partial" },
      {
        "2.1": "Tesco Extra, Decathlon, Canada Water Library, and Corner Corner all walkable; the Surrey Quays retail anchor carries the everyday essentials layer.",
        "2.2": "Tesco Extra provides the full grocery range and the wider Rotherhithe area has independents plus dock-side food at Corner Corner.",
        "2.3": "Canada Water Leisure Centre is on the doorstep with pool, gym, and fitness studios; commercial gyms are reachable within the masterplan footprint.",
        "2.4": "Dock frontage is a core identity feature — Canada Water dock itself plus Russia Dock Woodland and Southwark Park add genuine green/water density within 10 minutes walk.",
        "2.5": "Residential calm after 10pm; Corner Corner is the only late-activity venue and winds down on a normal hospitality curve.",
        "2.7": "Primary cohort 30-39 — mature professional skew rather than dominant 18-29 presence. Census 2021 data is pre-activation.",
      },
      "good",
      "Strong T2.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "partial", "3.3": "pass", "3.4": "partial", "3.5": "pass", "3.6": "partial" },
      {
        "3.1": "Planning uncertainty after December 2025 call-in — the masterplan is in active delivery but the revised scheme is under Mayor's review, which partially obscures the ongoing investment story.",
        "3.2": "Canada Water Library, Leisure Centre, and Corner Corner all provide partial anchor presence but the area lacks a signature cultural or commercial magnet on the scale of Coal Drops Yard or the Power Station.",
        "3.3": "'Canada Water' is a recognisable London place name with strong dock identity — the Roger Madelin/British Land story plus the Jubilee line station give it genuine mental-map presence.",
        "3.4": "15-minute completeness is partial — the new high street is planned but not yet built, and current activation relies on older Surrey Quays retail plus the civic anchors.",
        "3.5": "Dock-side design quality is coherent — British Land has been deliberate about the public realm and the early buildings are intentionally designed rather than generic.",
        "3.6": "Day/night rhythm is thinner than a mature mixed-use district — Corner Corner is a real activation point but the 24/7 feel is still developing.",
      },
      "moderate",
      "T3 is mid — strong identity bones, weak current activation.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "partial", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 5/5 — all four anchors within 15 minutes. Jubilee + Overground genuinely unlocks the full anchor set from a single station.",
        "5.2": "Jubilee + Overground are independent lines through the same station; a single-line failure does not strand the area.",
        "5.3": "Ascending trajectory long-term but the December 2025 call-in introduces near-term timing uncertainty — not a clean upward slope through the visa window.",
        "5.4": "Canada Water Library is a genuine quiet third space, but broader bookshop/cafe culture is thinner than central areas.",
      },
      "good",
      "Strong T5 connectivity. Trajectory uncertain.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — strong T1+T2+T5, mid T3 due to planning uncertainty. The Roger Madelin pedigree is a long-term credibility play.",
  },

  projects: [theFounding, dockShed, cornerCorner, cwLeisure, robertsClose, cwWider],

  external_links: [
    { url: "https://www.canadawater.co.uk/", label: "Canada Water official", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default canadaWater;
