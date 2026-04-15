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
      { name: "Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "Walthamstow Central", lines: ["Victoria", "Overground"], walk_minutes_from_centre: 5 },
      { name: "Blackhorse Road", lines: ["Victoria", "Overground"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 25, canary_wharf: 30, soho_fitzrovia: 20, kings_cross_shoreditch: 15 },
    multi_cluster_score: 3,
    redundancy_score: 3,
    notes: "Victoria Line is the headline — direct to Oxford Circus, King's Cross, etc. Overground adds Lea Valley corridor. Times are estimates; Zone 3 positioning means longer absolute journeys. Canary Wharf requires interchange.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Strong young-professional influx trend documented across multiple sources. Grass-roots framing: 'people in their mid-twenties and early thirties' with independent shops following. Exact ward-level Census figures not available from sweep data.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "average", crime_vs_croydon: "similar", after_dark_assessment: "Not covered in sweep-01 safety foundational. Needs dedicated safety research.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Walthamstow Wetlands", walk_minutes: 10, notes: "Major nature reserve — 211 hectares of reservoirs and wetlands" }], overall_assessment: "Walthamstow Wetlands is a major nature reserve. Strong green access for a Zone 3 area." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "L&G BTR at Blackhorse Mills (479 homes). Blackhorse Lane creative quarter. Broader Waltham Forest regeneration.", recent_milestones: ["Blackhorse Mills delivery", "Sunday Times Best Places 2025", "Two RIBA jury awards 2024-2025"], upcoming_milestones: [], trajectory_through_2027: "Ascending. Strong editorial signal. Rising prices. Young-professional influx continuing.", sources: [] },

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
