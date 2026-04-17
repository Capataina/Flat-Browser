import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const ferryIsland1 = buildProject({
  id: "1-ferry-island", area_id: "tottenham-hale", name: "1 Ferry Island (Heart of Hale)", developer: "Related Argent", operator: "Related Argent", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
  preview: "108 homes, AHMM-designed, Phase 1 of Heart of Hale. Related Argent BTR — rental qualification policies opaque.",
  architects: ["AHMM"],
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "AHMM-designed, modern BTR specification. Related Argent management.",
    t4_1_amenity_package: "Strong shared amenities expected from Related Argent.",
    t4_4_signature_arch: "AHMM-designed — practice with Stirling Prize pedigree but not a Pritzker firm.",
  },
});
ferryIsland1.external_links = [
  { url: "https://heartofhale.co.uk/1-ferry-island", label: "Heart of Hale — 1 Ferry Island", type: "operator", accessed_date: "2026-04-12" },
];

const ferryIsland2 = buildProject({
  id: "2-ferry-island", area_id: "tottenham-hale", name: "2 Ferry Island (Heart of Hale Phase 2)", developer: "Related Argent", operator: "Related Argent", building_type: "BTR", build_phase: "in_delivery", tenure: ["rent"], realism: "unknown",
  preview: "Part of 484-home Phase 2 (ICG £243m loan, Oct 2023 construction start). Related Argent BTR.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Phase 2 delivery to Related Argent specification.",
    t4_1_amenity_package: "Strong shared amenities expected.",
    t4_4_signature_arch: "Architectural authorship not confirmed.",
  },
});
ferryIsland2.external_links = [
  { url: "https://heartofhale.co.uk/", label: "Heart of Hale official site", type: "operator", accessed_date: "2026-04-12" },
];

const windlassApartments = buildProject({
  id: "windlass-apartments", area_id: "tottenham-hale", name: "Windlass Apartments", developer: "Waterside Places", operator: "Grainger plc", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
  preview: "Grainger-operated BTR at Hale Wharf — ~180 units, up to 10 storeys. Next to Walthamstow Wetlands and River Lea. 24hr gym, co-working, private dining, on-site management. 1-bed from ~£2,150 pcm. Grainger is UK's largest listed residential landlord — structured referencing.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern BTR completed 2021. Waterside location with balconies for all units.",
    t4_1_amenity_package: "Strong — 24hr gym, co-working spaces, private dining, on-site management, all units have balconies.",
    t4_4_signature_arch: "Not signature-authored. Functional waterside BTR.",
  },
});
windlassApartments.external_links = [
  { url: "https://windlass-apartments.co.uk/", label: "Windlass Apartments official site", type: "operator", accessed_date: "2026-04-12" },
  { url: "https://www.graingerplc.co.uk/developments/windlass-apartments", label: "Grainger — Windlass Apartments", type: "operator", accessed_date: "2026-04-12" },
];
windlassApartments.rental.price_transparency = "listed";

// ── V2 enrichment (Grainger — Windlass Apartments) ──
windlassApartments.building_quality = {
  epc_rating: "B",
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "~180 units, up to 10 storeys (low-rise by BTR standard). All units carry balconies. Waterside orientation toward Walthamstow Wetlands and River Lea. Open-plan living with separate bedrooms. Furniture package included — beds and sofas provided.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "Completed 2021. Waterside with universal balconies is a genuine differentiator vs. the other two Grainger London buildings.",
};
windlassApartments.amenities = {
  pool: false,
  pool_notes: "",
  gym: true,
  gym_quality: "average",
  concierge: "daytime",
  sky_lounge: false,
  co_working: true,
  dining_room: false,
  cinema_room: false,
  rooftop_terrace: true,
  parking: false,
  bike_storage: true,
  pet_policy: "Pets considered on application",
  other_amenities: ["Super-fast Wi-Fi included", "Resident's lounge", "Furnished option (beds + sofas provided)"],
  overall_tier: "decent",
};
windlassApartments.architecture = {
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "Mid-rise waterside BTR at Hale Wharf. Contemporary brick-and-metal cladding, balconies on every elevation. Low-rise by London BTR standard — 10 storeys maximum.",
};
windlassApartments.long_form = {
  full: "Windlass Apartments is Grainger's 2021-delivered BTR at Hale Wharf, Tottenham Hale. ~180 units across a low-rise (≤10-storey) waterside massing with balconies on every unit. Developed by Waterside Places, operated in-house by Grainger. The site sits between Walthamstow Wetlands and the River Lea — genuinely tranquil setting five minutes from Tottenham Hale station. Furniture package is included by default (beds + sofas). 1-bed from ~£2,150 pcm; 2-bed from ~£2,500. The trade-off is no on-site parking and limited nearby parking supply.",
  living_experience: "HomeViews rates the building 4.24/5 — solid mid-range. Residents praise the furniture design and the location's proximity to Walthamstow Wetlands. Transport connectivity is consistently called out. The recurring complaints are building-management communication quality and the parking situation.",
  notable_features: "All-balcony layout; waterside orientation between Walthamstow Wetlands and River Lea; fully-furnished option with beds and sofas included; low-rise massing (10 storeys max); 24/7 in-building gym.",
};
windlassApartments.resident_signal = {
  homeviews_score: 4.24,
  homeviews_url: "https://www.homeviews.com/development/windlass-apartments-n17",
  summary: "4.24/5 on HomeViews. Consistent praise for furniture design, location, and transport links. Recurring complaints about management-team communication and lack of on-site parking. Gym and Wi-Fi included in rent.",
  common_complaints: [
    "Building-management communication quality — occasional incorrect/irrelevant email communications",
    "No on-site parking and limited nearby parking",
  ],
  common_praise: [
    "Fully-furnished design — beds and sofas included",
    "Proximity to Walthamstow Wetlands and River Lea",
    "Transport connectivity — 5 minutes to Tottenham Hale (Victoria Line)",
  ],
};
windlassApartments.rental.prices = {
  one_bed: { min: 2150, max: 2350, currency: "GBP", per: "month" },
  two_bed: { min: 2500, max: 2750, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "Bands from windlass-apartments.co.uk + Rightmove active listings. Wi-Fi included; utilities not.",
};
windlassApartments.rental.affordability = "at-budget";

const haleWorks = buildProject({
  id: "hale-works", area_id: "tottenham-hale", name: "Hale Works", developer: "Catalyst Housing (Peabody)", operator: "Individual landlords", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "32-storey landmark tower at Hale Village — 279 units. Hawkins\\Brown architects. Mixed-use ground floor. 1-bed from ~£1,600 pcm. Part of the earlier Hale Village delivery.",
  architects: ["Hawkins\\Brown"],
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Completed 2018. Hawkins\\Brown design. 32-storey tower — earlier generation of Tottenham Hale regeneration stock.",
    t4_1_amenity_package: "Decent — mixed-use ground floor commercial, cycle storage. No pool, gym, or concierge reported.",
    t4_4_signature_arch: "Hawkins\\Brown — respected practice. 32-storey landmark presence in the area.",
  },
});
haleWorks.external_links = [
  { url: "https://hale-works.uk/", label: "Hale Works official site", type: "developer", accessed_date: "2026-04-12" },
];

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
      { name: "Weaver line", type: "overground" },
    ],
    primary_stations: [
      { name: "Tottenham Hale", lines: ["Victoria", "Greater Anglia"], walk_minutes_from_centre: 5 },
      { name: "South Tottenham", lines: ["Weaver line"], walk_minutes_from_centre: 10 },
      { name: "Blackhorse Road (adjacent)", lines: ["Victoria", "Weaver line"], walk_minutes_from_centre: 14 },
    ],
    times_to_anchors: { city_of_london: 15, canary_wharf: 23, soho_fitzrovia: 14, kings_cross_shoreditch: 9 },
    multi_cluster_score: 4,
    redundancy_score: 4,
    notes: "Tottenham Hale is the north-east terminus of the Victoria Line — trains originate from here, which means seats available at morning peak and no crowding-at-arrival risk. The Victoria Line is among the most reliable and highest-frequency Tube lines (every 100 seconds peak). Greater Anglia mainline gives a second independent corridor — Stansted Express passes through (useful for Caner if flying to/from Turkey) and Cambridge / Stansted-Airport services run alongside regional trains to Liverpool Street. The Stansted Express specifically makes this one of the most airport-convenient areas in London for a Turkish renter. Step-free access at Tottenham Hale following 2019 station rebuild.",
    sources: [
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL JourneyPlanner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://www.greateranglia.co.uk/", label: "Greater Anglia — Tottenham Hale", type: "other", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/tube-dlr-overground/status/", label: "TfL line status", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 27 },
      { cohort: "30-39", pct: 24 },
      { cohort: "40-49", pct: 15 },
      { cohort: "50+", pct: 34 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 24 },
      { group: "White — other", pct: 22 },
      { group: "Black or Black British", pct: 23 },
      { group: "Asian or Asian British", pct: 14 },
      { group: "Mixed", pct: 10 },
      { group: "Other ethnic group", pct: 7 },
    ],
    household_mix: [
      { type: "Single person", pct: 34 },
      { type: "Couple no children", pct: 22 },
      { type: "Couple with children", pct: 22 },
      { type: "Lone parent", pct: 12 },
      { type: "Shared household", pct: 7 },
      { type: "Other", pct: 3 },
    ],
    student_pct: 8,
    professional_renter_pct: 44,
    notes: "Tottenham Hale is one of the single most rapidly-changing demographic profiles in London. The census (2021) predates the Heart of Hale, Hale Wharf, Ferro Building, and Two Berol Yard deliveries that have added ~2,000+ new professional-renter households to the area since 2022. Haringey has one of the largest Turkish and Turkish-Cypriot communities in London, with strong concentration in Tottenham / Green Lanes — Turkish-language signage on local shops, Turkish supermarkets (Yasar Halim, TFC Supermarket), Turkish restaurants and cafes, and a visible community presence. The Black British community is long-established (major Caribbean and West African populations). Ongoing BTR delivery is gentrifying the area but on a tenure-blind / high-DMR-proportion basis, so community diversity is augmented rather than displaced.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://www.haringey.gov.uk/local-democracy/about-haringey/ward-profiles", label: "Haringey ward profiles", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "moderate",
    crime_vs_borough: "average",
    crime_vs_croydon: "similar",
    after_dark_assessment: "Genuinely improving faster than almost anywhere else in this dataset, but the baseline is still Haringey-borough-moderate. The Heart of Hale masterplan footprint itself — 1 Ferry Island, 2 Ferry Island, Hale Wharf, the new public realm — is well-lit, low-friction, and quiet at night because it is new-build with concierge presence. The Victoria Line station approach has been rebuilt (2019) and is well-lit until last trains. Outside the masterplan footprint, the area carries Haringey-borough baseline — Tottenham High Road (15 min south) and the A10 corridor have real night-crime patterns, and the Seven Sisters / Broadwater Farm edges are separate safety concerns that don't directly touch the Heart of Hale core. Women-walking-alone reports specifically inside the new-build core describe it as 'safe and dead-quiet'. The ongoing regeneration is materially improving perimeter lighting and pedestrian density — by August 2027 the safety baseline inside the masterplan core will be materially better than today.",
    concerns: [
      "Haringey borough baseline carries real night-crime patterns on Tottenham High Road and A10 corridor — stay within masterplan footprint and station approach at night",
      "Wetlands and Lee Valley are genuinely dark after sunset — not a walking route after dusk",
      "Outer edges toward Broadwater Farm Estate have separate, documented safety issues — not the Heart of Hale cluster but within the broader 'Tottenham Hale' search radius",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police/tottenham-hale/", label: "Met Police — Tottenham Hale", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: true,
    has_canal: true,
    has_dock: false,
    parks: [
      { name: "Walthamstow Wetlands", size_acres: 520, walk_minutes: 5, notes: "Europe's largest urban wetland nature reserve — London Wildlife Trust-managed, free entry, reservoirs with bird hides and walking paths." },
      { name: "Tottenham Marshes", size_acres: 100, walk_minutes: 8, notes: "Lea Valley Regional Park north extent — cycling, walking, playing fields." },
      { name: "Lee Valley Regional Park (linear)", size_acres: 4000, walk_minutes: 8, notes: "1,000 hectare linear park along the Lea — cycling corridor connecting to Hertfordshire." },
      { name: "Down Lane Park", size_acres: 14, walk_minutes: 10, notes: "Local park with sports pitches and playground." },
      { name: "Markfield Park (adjacent)", size_acres: 17, walk_minutes: 15, notes: "Lea Valley edge park with Markfield Beam Engine heritage." },
    ],
    overall_assessment: "Exceptional green-and-water profile for a Zone 3 area — genuinely rare in the dataset. Walthamstow Wetlands (520 acres, Europe's largest urban wetland) is 5 minutes on foot and is one of the most distinctive nature assets in London. Lee Valley Regional Park's linear extent gives a 32-km car-free walking/cycling corridor north to Hertfordshire. The River Lea frontage is the defining landscape feature.",
    sources: [
      { url: "https://www.wildlondon.org.uk/walthamstow-wetlands", label: "Walthamstow Wetlands — London Wildlife Trust", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.visitleevalley.org.uk/", label: "Lee Valley Regional Park", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.haringey.gov.uk/parks", label: "Haringey Parks", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Tesco Extra Tottenham Hale", type: "supermarket", walk_minutes: 3, notes: "Large Extra-format Tesco at the retail park — full range, 24h." },
      { name: "Lidl Tottenham Hale", type: "budget-supermarket", walk_minutes: 4, notes: "Budget supermarket at the retail park." },
      { name: "Aldi Tottenham Hale", type: "budget-supermarket", walk_minutes: 7, notes: "Alternative budget option." },
      { name: "TFC Supermarket (Green Lanes — 20 min)", type: "turkish-supermarket", walk_minutes: 20, notes: "Major Turkish supermarket chain — full range of Turkish produce; direct Caner-specific relevance." },
      { name: "Yasar Halim (Green Lanes — 20 min)", type: "turkish-bakery", walk_minutes: 20, notes: "Landmark Turkish bakery and deli — Caner-specific cultural anchor." },
    ],
    gyms: [
      { name: "The Gym Tottenham Hale", type: "budget-gym", walk_minutes: 5, notes: "24h budget gym at the retail park." },
      { name: "Windlass Apartments gym (residents only)", type: "bound-residential", walk_minutes: 0, notes: "24hr Grainger resident gym — available to Windlass residents." },
      { name: "1 Ferry Island residents' gym (residents only)", type: "bound-residential", walk_minutes: 0, notes: "Related Argent resident gym." },
      { name: "ForFitness Tottenham", type: "boxing-gym", walk_minutes: 12, notes: "Boxing / strength gym in Tottenham." },
      { name: "Third Space (nearest — Old Street, 30 min)", type: "premium-gym", walk_minutes: 30, notes: "Nearest premium gym offer — not in area." },
    ],
    food_and_drink: [
      { name: "The Beehive (Hale Village)", type: "gastropub", walk_minutes: 5, notes: "Nearest traditional pub." },
      { name: "Lockwood restaurant (Hale Wharf)", type: "modern-restaurant", walk_minutes: 4, notes: "Quality restaurant inside the Hale Wharf development." },
      { name: "Craving Coffee", type: "cafe", walk_minutes: 6, notes: "Independent cafe — local institution." },
      { name: "Turkish-Kurdish independent restaurants (Green Lanes — 20 min bus)", type: "turkish-restaurants", walk_minutes: 20, notes: "Mangal 2, Diyarbakir Kitchen, Antepliler etc. — major London ocakbasi/kebab cluster." },
      { name: "Tottenham High Road (various)", type: "restaurants", walk_minutes: 15, notes: "Caribbean, African, Turkish mix — high-diversity cluster." },
    ],
    health: [
      { name: "Tottenham Hale Pharmacy", type: "pharmacy", walk_minutes: 3, notes: "Tesco Extra pharmacy + independent options." },
      { name: "Fountayne Road Medical Centre", type: "gp", walk_minutes: 10, notes: "NHS GP practice." },
      { name: "Bridge House Medical Practice", type: "gp", walk_minutes: 12, notes: "Alternative NHS GP." },
      { name: "North Middlesex Hospital (20 min)", type: "nhs-hospital", walk_minutes: 25, notes: "Major A&E at Edmonton — 20 min bus or Overground." },
    ],
    cultural: [
      { name: "Walthamstow Wetlands visitor centre", type: "nature-centre", walk_minutes: 5, notes: "Engine House cafe, exhibitions, educational programmes." },
      { name: "Tottenham Green Pools and Fitness (15 min)", type: "council-leisure", walk_minutes: 15, notes: "Council pool and leisure centre." },
      { name: "Bernie Grant Arts Centre (20 min)", type: "arts-centre", walk_minutes: 20, notes: "Community arts centre in Tottenham Green." },
      { name: "Tottenham Hotspur Stadium (20 min)", type: "sports-venue", walk_minutes: 25, notes: "Premier League stadium — concerts and NFL games in off-season." },
    ],
    notes: "Tottenham Hale's amenity density is a clear step behind Kentish Town and Swiss Cottage — the masterplan is still building out the daily-life retail layer. Today's reality: Tesco Extra + Lidl + Aldi at the retail park, The Gym and bound-residential gyms, thin independent-cafe/restaurant scene inside the masterplan itself. The real cultural and food depth sits 15-20 minutes away — Green Lanes (Turkish restaurants and supermarkets), Tottenham High Road (Caribbean, African, Turkish diverse cluster), Bernie Grant Arts Centre, Tottenham Hotspur Stadium. For Caner specifically, the Green Lanes Turkish cluster at 20-minute bus ride is a meaningful cultural asset.",
  },
  regeneration: {
    status: "active",
    investment_pipeline: "Tottenham Hale is one of London's flagship regeneration areas — Haringey Council's Tottenham Area Action Plan (2017) designated the Hale as a major housing-growth zone, with ~5,000 homes delivered or planned by 2030. Heart of Hale (Related Argent) is the central masterplan — 1,030 homes across multiple phases, with Argent's King's Cross-proven placemaking approach. 1 Ferry Island (108 homes, AHMM-designed, complete) and 2 Ferry Island (part of 484-home Phase 2, ICG £243m loan Oct 2023, construction started, expected 2027-2028 completion). Hale Wharf (Muse Developments + Canal & River Trust) delivering adjacent to Walthamstow Wetlands — Windlass Apartments (Grainger, 180 units, complete 2021) plus sales phases. Two Berol Yard (Berkeley Square Developments) — 33-storey flagship BTR tower. Ferro Building — complete. Total investment estimated £1bn+.",
    recent_milestones: [
      "2019 — Tottenham Hale station rebuild complete (step-free access, capacity upgrade)",
      "2021 — Windlass Apartments (Grainger, Hale Wharf) complete",
      "2022 — 1 Ferry Island (Heart of Hale Phase 1, 108 homes, AHMM) complete",
      "2023 — Heart of Hale Phase 2 loan secured (ICG £243m), construction started",
      "2024 — Hale Wharf further phases delivered",
      "2025 — Two Berol Yard approaching completion (33-storey BTR tower)",
    ],
    upcoming_milestones: [
      "2026 — Two Berol Yard expected completion; further Hale Wharf phases",
      "2027 — 2 Ferry Island Phase 2 expected completion (~200+ homes of the 484-home Phase 2)",
      "2027-2028 — Further Heart of Hale phases; Ashley Road corridor continues building out",
      "2028+ — Continued masterplan rollout; high-street activation with ground-floor retail letting",
    ],
    trajectory_through_2027: "Flagship ascending trajectory — one of the single strongest positive trajectories in the entire London dataset. In August 2027, Caner's visa window: Two Berol Yard will have completed and occupied, 2 Ferry Island Phase 2 will be completing or complete, the Heart of Hale public realm will be substantially built out, and Hale Wharf will be in its final occupation phase. The area will have transitioned from 'regeneration-in-progress with thin amenity' to 'new-town core with activating retail layer'. This is likely the best medium-term buy-and-hold value play in the dataset.",
    sources: [
      { url: "https://heartofhale.co.uk/", label: "Heart of Hale", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.relatedargent.co.uk/heart-of-hale", label: "Related Argent — Heart of Hale", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.haringey.gov.uk/regeneration/tottenham", label: "Haringey Council — Tottenham regeneration", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.museplaces.com/places/hale-wharf", label: "Muse Places — Hale Wharf", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.graingerplc.co.uk/developments/windlass-apartments", label: "Grainger — Windlass Apartments", type: "developer", accessed_date: "2026-04-17" },
    ],
  },

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
    ferryIsland1,
    ferryIsland2,
    windlassApartments,
    haleWorks,
    // RESEARCH: Two Berol Yard — 33-storey BTR, ~200 apartments. Operator unknown.
    // Expected completion 2025. 35% DMR. ~15,000 sq ft leisure/retail.
    // REALISM: unknown — operator and referencing not confirmed
    // COST_TIER: UNVERIFIED
    buildProject({
      id: "two-berol-yard", area_id: "tottenham-hale", name: "Two Berol Yard", developer: "Berkeley Square Developments", operator: "unknown", building_type: "BTR", build_phase: "in_delivery", tenure: ["rent"], realism: "unknown",
      preview: "33-storey BTR tower on Ashley Road — ~200 apartments plus 35% discount market rent. Part of wider Ashley Road regeneration (560+ homes). ~15,000 sq ft leisure and retail. Flagship BTR tower in the Heart of Hale masterplan area.",
      amenity_tier: "strong", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "In delivery — expected completion 2025. 33-storey flagship BTR tower to modern specification.",
        t4_1_amenity_package: "Strong — ~15,000 sq ft leisure and retail space, ground floor commercial. Full details TBC.",
        t4_4_signature_arch: "Not confirmed. Flagship 33-storey tower will be a significant addition to the Tottenham Hale skyline.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default tottenhamHale;
