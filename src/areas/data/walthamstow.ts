import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Project consts (extracted for external_links / price_transparency mutation) ──

const blackhorseMills = buildProject({
  id: "blackhorse-mills", area_id: "walthamstow", name: "Blackhorse Mills", developer: "Legal & General", operator: "Legal & General", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable-with-guarantor",
  preview: "L&G BTR — 479 homes across five buildings (8-16 storeys). Assael Architecture. First residential building globally to achieve WiredScore Gold. Goodlord-backed referencing with 30x and case-by-case upfront flexibility.",
  long_form_full: "Blackhorse Mills is Legal & General's BTR project on Blackhorse Lane — 479 homes across five buildings from 8 to 16 storeys, designed by Assael Architecture. It was the first residential building globally to achieve WiredScore Gold. L&G's referencing is Goodlord-backed with 30x income multiple and case-by-case upfront flexibility.",
  amenity_tier: "strong", overall_grade: "B",
  architects: ["Assael Architecture"],
  evaluation_reasoning: {
    t2_6_building_quality: "L&G BTR with Assael Architecture — professional-level build quality. WiredScore Gold certification.",
    t4_1_amenity_package: "Strong amenity package consistent with institutional BTR standard.",
    t4_4_signature_arch: "Serious professional-level BTR architecture. Not Pritzker-authored but RIBA-quality.",
  },
});
blackhorseMills.external_links = [
  { url: "https://www.blackhorsemills.com/", label: "Blackhorse Mills — L&G BTR", type: "operator", accessed_date: "2026-04-12" },
];
blackhorseMills.rental.price_transparency = "listed";

const theAltham = buildProject({
  id: "the-altham",
  area_id: "walthamstow",
  name: "The Altham",
  developer: "Unknown",
  operator: "Morro",
  building_type: "BTR",
  build_phase: "complete",
  tenure: ["rent"],
  realism: "unknown",
  preview: "Studio-only BTR opposite Blackhorse Road station. Bills-included model with flexible tenancies. 24-hour gym, yoga studio, cinema, roof terrace, co-working, concierge, social events programme.",
  amenity_tier: "strong",
  overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Morro-operated BTR — new 2026 opening with professional management. Studio-only format with bills-included model.",
    t4_1_amenity_package: "Strong — 24-hour gym, yoga studio, games room, co-working areas, private work-from-home suites, concierge, cinema, roof terrace, residents' lounge, private dining room, bike storage.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
theAltham.external_links = [
  { url: "https://bymorro.com/walthamstow/the-altham/", label: "The Altham — Morro", type: "operator", accessed_date: "2026-04-12" },
];
theAltham.rental.price_transparency = "listed";

const blackhorseView = buildProject({
  id: "blackhorse-view",
  area_id: "walthamstow",
  name: "Blackhorse View",
  developer: "Barratt London",
  operator: "Various agents",
  building_type: "Build-to-Sell",
  build_phase: "complete",
  tenure: ["rent", "buy"],
  realism: "unknown",
  preview: "350 homes opposite Blackhorse Road station. Private outdoor space for all units, landscaped courtyard gardens. Part of the Blackhorse Road regeneration cluster. Rental through individual landlords.",
  amenity_tier: "decent",
  overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Barratt London delivery, completed 2021-2022. Functional mid-market build quality.",
    t4_1_amenity_package: "Decent — private outdoor space for all units, landscaped courtyard gardens. No premium amenity stack.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
blackhorseView.rental.price_transparency = "enquire";

const theEades = buildProject({
  id: "the-eades",
  area_id: "walthamstow",
  name: "The Eades",
  developer: "Unknown",
  operator: "Way of Life",
  building_type: "BTR",
  build_phase: "complete",
  tenure: ["rent"],
  realism: "unknown",
  preview: "Way of Life BTR near Walthamstow Central. 4.5-star Home Quality Mark. 24-hour gym, yoga studio, co-working, rooftop dining, 24-hour security. 1-beds from approx. £1,900 pcm.",
  amenity_tier: "strong",
  overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Way of Life BTR — professional operator with 4.5-star Home Quality Mark. Modern specification.",
    t4_1_amenity_package: "Strong — 24-hour gym, yoga studio, co-working spaces, roof terraces, rooftop dining area, on-site resident services team, 24-hour security, secure parcel lockers.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
theEades.external_links = [
  { url: "https://www.theeades.com/", label: "The Eades — Way of Life", type: "operator", accessed_date: "2026-04-12" },
  { url: "https://www.wayoflife.com/locations/london/the-eades", label: "Way of Life — The Eades", type: "operator", accessed_date: "2026-04-12" },
];
theEades.rental.price_transparency = "listed";

const theSceneWalthamstow = buildProject({
  id: "the-scene-walthamstow",
  area_id: "walthamstow",
  name: "The Scene",
  developer: "Hill",
  operator: "Various",
  building_type: "Mixed",
  build_phase: "complete",
  tenure: ["rent", "buy"],
  realism: "unknown",
  preview: "121 homes in central Walthamstow near the High Street. Integrated Empire multi-screen cinema. Some resident reports of maintenance issues. 1-beds from approx. £1,600 pcm.",
  amenity_tier: "decent",
  overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Hill delivery, completed 2019-2020. Some resident reports of hot water problems and management complaints.",
    t4_1_amenity_package: "Decent — integrated cinema is distinctive but limited residential amenity stack.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
theSceneWalthamstow.rental.price_transparency = "enquire";

const morroAltham = buildProject({
  id: "morro-altham", area_id: "walthamstow", name: "Morro The Altham", developer: "Morro", operator: "Morro", building_type: "BTR", living_model: "co-living", build_phase: "in_delivery", tenure: ["rent"], realism: "licence-exempt",
  preview: "Co-living opening Spring 2026. 1 min from Walthamstow Central tube. All bills included (Wi-Fi, water, heating, electricity, concierge). Council tax NOT included. Licence agreement expected.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "New-build co-living. Not yet open — cannot verify.",
    t4_1_amenity_package: "Expected decent — concierge, communal spaces. Details TBC.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
morroAltham.external_links = [
  { url: "https://bymorro.com/walthamstow/the-altham/", label: "Morro — The Altham", type: "operator", accessed_date: "2026-04-15" },
];
morroAltham.rental.price_transparency = "enquire";

const morroBlackhorse = buildProject({
  id: "morro-blackhorse", area_id: "walthamstow", name: "Morro Blackhorse Lane", developer: "Morro", operator: "Morro", building_type: "BTR", living_model: "co-living", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Co-living on Blackhorse Lane. Opened March 2026. All bills included expected. Licence agreement. Near Blackhorse Road station (Victoria line).",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "New-build co-living. Recently opened.",
    t4_1_amenity_package: "Expected decent — communal spaces, community focus.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
morroBlackhorse.external_links = [
  { url: "https://bymorro.com/locations/", label: "Morro — Blackhorse Lane", type: "operator", accessed_date: "2026-04-15" },
];
morroBlackhorse.rental.price_transparency = "enquire";

const walthamstow: Area = {
  id: "walthamstow",
  name: "Walthamstow",
  aliases: ["Walthamstow Village", "Walthamstow Central", "Blackhorse Road"],
  borough: "Waltham Forest",
  postcodes: ["E17"],

  headline:
    "Victoria Line Zone 3 with Sunday Times Best Places to Live 2025 recognition. Emerging young-professional quarter with L&G BTR at Blackhorse Mills and genuine village identity.",
  preview:
    "Victoria Line from Walthamstow Central gives strong central London access. Sunday Times Best Places to Live London 2025 regional winner and previous Time Out Coolest Neighbourhood 2022. Legal & General BTR at Blackhorse Mills (479 homes, Assael Architecture, WiredScore Gold). Rising prices signal the area is being discovered.",

  long_form: {
    full: "Walthamstow is a Zone 3 area that punches well above its weight on editorial signal: Sunday Times Best Places to Live London 2025 regional winner, previous Time Out Coolest Neighbourhood in London 2022. Walthamstow Village (conservation area) with cobbled streets is the premium sub-zone; broader Walthamstow around the high street is more mixed. Victoria Line at Walthamstow Central gives under-20-minute access to central London. Blackhorse Road (Overground + Victoria) adds the L&G BTR at Blackhorse Mills — 479 homes across five buildings from 8 to 16 storeys, designed by Assael Architecture, the first residential building globally to achieve WiredScore Gold. The grass-roots framing is consistent: an influx of people in their mid-twenties and early thirties with better pubs, restaurants, and independent shops following them. Property prices rising as more people discover the area.",
    history: "Former industrial area along the Lea Valley. William Morris Gallery (Arts & Crafts movement founder born here). Walthamstow Village conservation area preserves historic village character.",
    vibe: "Village-within-the-city feel in the conservation area. Broader Walthamstow has a mixed high street. Independent shops, pubs, and restaurants growing rapidly.",
    weekday: "A Tuesday at 7pm: Walthamstow Village pubs and restaurants filling; commuters flowing from Walthamstow Central; Blackhorse Road area quieter.",
    weekend: "A Saturday: Walthamstow Market (Europe's longest outdoor market) busy; Village cafes and pubs crowded; William Morris Gallery draws visitors.",
    notable: "Walthamstow Market (Europe's longest outdoor market); William Morris Gallery; Walthamstow Wetlands; Blackhorse Mills (L&G BTR); two RIBA jury awards in 2024-2025 window.",
    croydon_comparison: "Walthamstow offers Victoria Line Zone 3 at comparable or lower rent to Croydon, with a much stronger independent-retail and cultural layer. Both are 'affordable alternative to central London' areas but Walthamstow has stronger editorial momentum.",
  },

  zones: ["Zone 3"],
  connectivity: {
    lines: [
      { name: "Victoria", type: "tube" },
      { name: "Weaver line", type: "overground" },
      { name: "Suffragette line (Gospel Oak-Barking Riverside)", type: "overground" },
    ],
    primary_stations: [
      { name: "Walthamstow Central", lines: ["Victoria", "Weaver line"], walk_minutes_from_centre: 5 },
      { name: "Blackhorse Road", lines: ["Victoria", "Suffragette line"], walk_minutes_from_centre: 12 },
      { name: "Walthamstow Queens Road", lines: ["Suffragette line"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 20, canary_wharf: 28, soho_fitzrovia: 20, kings_cross_shoreditch: 14 },
    multi_cluster_score: 3,
    redundancy_score: 4,
    notes: "Victoria Line northbound terminus at Walthamstow Central — one of the stronger tube-terminus positions in London. Sit-down seat every morning southbound is a real quality-of-life differential. Suffragette line (renamed 2024, formerly GOB-Barking) gives east-west Overground redundancy. Zone 3 positioning means absolute journey times are longer than Zone 2 equivalents despite strong redundancy.",
    sources: [
      { url: "https://tfl.gov.uk/tube-dlr-overground/status/", label: "TfL line status", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 20 },
      { cohort: "30-39", pct: 24 },
      { cohort: "40-49", pct: 15 },
      { cohort: "50+", pct: 21 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 34 },
      { group: "White — other", pct: 18 },
      { group: "Asian or Asian British", pct: 22 },
      { group: "Black or Black British", pct: 12 },
      { group: "Mixed", pct: 9 },
      { group: "Other ethnic group", pct: 5 },
    ],
    household_mix: [
      { type: "Single person", pct: 26 },
      { type: "Couple no children", pct: 20 },
      { type: "Couple with children", pct: 24 },
      { type: "Lone parent", pct: 11 },
      { type: "Shared household", pct: 13 },
      { type: "Other", pct: 6 },
    ],
    student_pct: 6,
    professional_renter_pct: 36,
    notes: "Strong Pakistani/Bangladeshi community presence (Asian share at 22% is the highest in this batch) — long-established diaspora from the 1970s. Young-professional influx is the documented recent trend, but the existing demographic is substantially family and settled-community rather than a BTR-monoculture. Under-18 share at 20% is the highest in this batch — genuinely family-weighted.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "average",
    crime_vs_croydon: "safer",
    after_dark_assessment: "Walthamstow Village conservation area is materially the safest sub-zone — residentially quiet, well-lit, low-footfall after 23:00 but not threatening. Walthamstow High Street and the market area carry steady evening trade until ~22:00; footfall drops rapidly after. Blackhorse Road area is quieter residentially but the railway underpass is the one specific avoid-after-dark geometry. Waltham Forest borough crime rates are below London mean; Walthamstow sits around borough average. No named mugging or phone-theft hotspot in Met Police data for the ward.",
    concerns: [
      "Blackhorse Road railway underpass — poorly lit, solo-walking caution after dark",
      "St James Street station area — quieter, lower footfall",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police/walthamstow/", label: "Met Police — Walthamstow ward", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Walthamstow Wetlands", size_acres: 521, walk_minutes: 15, notes: "Europe's largest urban wetland nature reserve — ten reservoirs managed by London Wildlife Trust. A genuinely definitional feature of the area." },
      { name: "Lloyd Park", size_acres: 23, walk_minutes: 10, notes: "Victorian park; home to William Morris Gallery and weekly farmers' market." },
      { name: "Walthamstow Marshes", size_acres: 220, walk_minutes: 20, notes: "SSSI wetland; Lea Valley corridor." },
      { name: "Epping Forest (southern tip)", size_acres: 5900, walk_minutes: 25, notes: "Ancient forest; reachable via Forest Road." },
    ],
    overall_assessment: "One of the strongest green-and-water profiles in the entire dataset. Walthamstow Wetlands is Europe's largest urban wetland nature reserve and sits within walking distance. Lloyd Park + Walthamstow Marshes + Epping Forest fringe give an unusually complete green stack for a Zone 3 residential area. For a renter whose day-to-day reality includes weekend walking or nature, this is a peak-tier area.",
    sources: [
      { url: "https://www.walthamstowwetlands.com/", label: "Walthamstow Wetlands", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.wmgallery.org.uk/", label: "William Morris Gallery (Lloyd Park)", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Walthamstow Market (High Street)", type: "street market", walk_minutes: 5, notes: "Europe's longest outdoor street market — Tues/Wed/Fri/Sat." },
      { name: "Sainsbury's (Selborne Walk)", type: "supermarket", walk_minutes: 5, notes: "Full-range Sainsbury's at the shopping centre." },
      { name: "Asda (Hoe Street)", type: "supermarket", walk_minutes: 10, notes: "Large-format Asda." },
      { name: "Lloyd Park Farmers' Market (Sundays)", type: "farmers market", walk_minutes: 10, notes: "Weekly farmers' market." },
      { name: "The Hornbeam (Hoe Street)", type: "independent", walk_minutes: 10, notes: "Independent organic grocer and cafe." },
    ],
    gyms: [
      { name: "PureGym Walthamstow (High Street)", type: "budget chain", walk_minutes: 5, notes: "24-hour budget tier." },
      { name: "Better Waltham Forest Feel Good Centre", type: "public leisure", walk_minutes: 15, notes: "Council leisure centre with pool, gym, classes." },
      { name: "Fitness First Walthamstow (Wood Street)", type: "mid-market chain", walk_minutes: 15, notes: "Mid-market gym." },
      { name: "Yard Cycling Studio", type: "boutique", walk_minutes: 5, notes: "Indoor cycling." },
      { name: "Blackhorse Mills resident gym", type: "BTR gym", walk_minutes: 12, notes: "Private to L&G Blackhorse Mills residents only." },
    ],
    food_and_drink: [
      { name: "God's Own Junkyard", type: "destination bar", walk_minutes: 15, notes: "Neon-lit bar and gallery — destination venue." },
      { name: "Eat17 (Orford Road, Village)", type: "restaurant/grocer", walk_minutes: 10, notes: "Gastropub + boutique grocer hybrid." },
      { name: "The Chequers (Orford Road, Village)", type: "pub", walk_minutes: 10, notes: "Village-heart pub." },
      { name: "Mirth, Marvel & Maud", type: "cinema/bar", walk_minutes: 5, notes: "Former art deco cinema converted to bar + pop-up cinema." },
      { name: "Yard Sale Pizza / Spinach / Mandala", type: "independent", walk_minutes: 5, notes: "Independent restaurant cluster on Hoe Street." },
    ],
    health: [
      { name: "The Firs Practice", type: "GP", walk_minutes: 5, notes: "NHS GP, catchment-dependent." },
      { name: "Sinnott Road Medical Centre", type: "GP", walk_minutes: 10, notes: "Alternative GP." },
      { name: "Whipps Cross University Hospital", type: "hospital", walk_minutes: 25, notes: "Major NHS hospital with A&E." },
      { name: "Boots Pharmacy (High Street)", type: "pharmacy", walk_minutes: 3, notes: "Full-service." },
    ],
    cultural: [
      { name: "William Morris Gallery (Lloyd Park)", type: "museum", walk_minutes: 10, notes: "Art Fund Museum of the Year 2013 — Arts & Crafts movement founder's childhood home." },
      { name: "Walthamstow Market", type: "street market", walk_minutes: 5, notes: "Europe's longest outdoor market — cultural institution." },
      { name: "God's Own Junkyard", type: "gallery/venue", walk_minutes: 15, notes: "Neon art gallery in Ravenswood Industrial Estate." },
      { name: "The Scene (Empire Cinema)", type: "cinema", walk_minutes: 3, notes: "Multi-screen Empire Cinema at The Scene development." },
      { name: "Walthamstow Garden Party (annual)", type: "festival", walk_minutes: 10, notes: "Free weekend music festival in Lloyd Park." },
      { name: "E17 Art Trail (annual)", type: "art festival", walk_minutes: 0, notes: "Borough-wide open-studios festival." },
    ],
    notes: "Amenity layer is strong in culture and high-street grocery; premium gym tier remains the notable gap (GymBox pipeline has been mooted but is not confirmed). Walthamstow Village is the boutique sub-cluster; broader Walthamstow around the High Street is mixed-chain-and-independent. Two RIBA jury awards in the 2024-2025 window signal that architectural quality is being recognised.",
  },
  regeneration: {
    status: "active",
    investment_pipeline: "Blackhorse Lane creative quarter is the most active zone — Blackhorse Mills (L&G BTR, 479 homes, complete), Blackhorse View (Barratt BTS), multiple further phases planned. Mini Holland cycling infrastructure programme (Enjoy Waltham Forest) is among the most ambitious borough-level active-travel investments in London. Wood Street station area (Crossrail-adjacent on proposed extension) has been flagged for future intensification. Sunday Times Best Places to Live London 2025 regional winner and Time Out Coolest Neighbourhood in London 2022 — editorial momentum is genuine.",
    recent_milestones: [
      "2022 — Time Out Coolest Neighbourhood in London",
      "2024 — Blackhorse Mills (L&G) completion",
      "2024 — Overground renamed (Suffragette line — Gospel Oak to Barking Riverside)",
      "2024-2025 — Two RIBA jury awards in the ward",
      "2025 — Sunday Times Best Places to Live London 2025 regional winner",
    ],
    upcoming_milestones: [
      "2026 — Morro The Altham co-living opening (Walthamstow Central)",
      "2026 — Morro Blackhorse Lane co-living opening",
      "2026-2027 — Further Blackhorse Lane creative quarter phases",
    ],
    trajectory_through_2027: "Ascending. Walthamstow carries the strongest editorial signal in this batch — Time Out 2022, Sunday Times 2025, RIBA recognition 2024-25 — combined with active institutional BTR delivery (L&G, Morro, Barratt) and ongoing Mini Holland active-travel investment. By August 2027 expect the Blackhorse Lane creative quarter further consolidated, additional BTR supply online, and a materially denser young-professional presence. For Caner's visa transition window this is one of the strongest 'improving-on-arrival' areas outside Zone 2.",
    sources: [
      { url: "https://enjoywalthamforest.co.uk/", label: "Enjoy Waltham Forest — Mini Holland", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.walthamforest.gov.uk/", label: "Waltham Forest Council", type: "council", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "unknown", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Not covered in safety sweep. Needs dedicated research.",
        "1.2": "Modern rental stock — Blackhorse Mills (L&G BTR, 479 homes) plus Berkeley BTS phases.",
        "1.3": "Victoria Line gives direct central London access. Overground adds redundancy.",
        "1.4": "L&G BTR with Goodlord-backed referencing. Active professional rental market.",
        "1.5": "Public realm in good order — conservation area well-maintained, Blackhorse Mills new delivery.",
        "1.6": "Not in decline — ascending trajectory with strong editorial signal.",
      },
      "moderate",
      "T1 moderate — T1.1 unknown (safety not yet researched), all other rows pass.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Walthamstow Market (Europe's longest outdoor market) plus growing independent retail.",
        "2.2": "Market provides fresh food; multiple grocery options.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Walthamstow Wetlands — 211 hectares of nature reserve. Strong green access.",
        "2.5": "Residential area. No nightlife generator. Village feel in the conservation area.",
        "2.7": "Strong young-professional influx documented. Demographic trajectory ascending.",
      },
      "good",
      "T2 good — strong walkable essentials, excellent green space, residential calm, ascending demographic.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "pass", "3.6": "partial" },
      {
        "3.1": "Active regeneration — Blackhorse Mills, Blackhorse Lane creative quarter, broader Waltham Forest investment.",
        "3.2": "William Morris Gallery, Walthamstow Market, growing independent scene — genuine cultural anchors.",
        "3.3": "Distinctive village-within-the-city identity. Conservation area with cobbled streets. Strong editorial recognition.",
        "3.4": "15-minute completeness strong — market, transport, green space, cultural venues.",
        "3.5": "Blackhorse Mills by Assael Architecture is a serious professional-level BTR project. Two RIBA jury awards in 2024-2025.",
        "3.6": "Day rhythm strong (market, village); evening growing (pubs, restaurants); late night is quiet.",
      },
      "good",
      "T3 strong — distinctive village identity, editorial recognition, genuine architectural quality.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "pass", "5.4": "pass" },
      {
        "5.1": "Zone 3 means longer absolute journeys. Soho/Fitzrovia ~20 min (Victoria direct). Canary Wharf ~30 min (requires interchange). Partial on multi-cluster.",
        "5.2": "Victoria + Overground at two stations — genuine redundancy.",
        "5.3": "Ascending — editorial signal, price rises, young-professional influx all confirm trajectory.",
        "5.4": "Growing third-space culture — village cafes, pubs, William Morris Gallery, Walthamstow Wetlands.",
      },
      "good",
      "T5 good — ascending trajectory, genuine redundancy, strong third spaces. Zone 3 journey times are the constraint.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — strong T3 identity (editorial recognition, village character, architectural quality), good T2 daily life, but Zone 3 journey times and unknown safety profile prevent a higher grade. L&G BTR at Blackhorse Mills is a genuine grad-visa-relevant target.",
  },

  projects: [
    blackhorseMills,
    theAltham,
    blackhorseView,
    theEades,
    theSceneWalthamstow,
    morroAltham,
    morroBlackhorse,
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default walthamstow;
