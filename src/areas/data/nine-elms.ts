import type { Area } from "../types";
import {
  T1_CRITERIA,
  T2_CRITERIA,
  T3_CRITERIA,
  T5_CRITERIA,
  buildProject,
  buildTier,
  stubResearch,
} from "./helpers";

// New parent area collapsing the old Embassy Gardens, Bloom Nine Elms,
// Riverlight Quay, and One Nine Elms entries into projects under a single
// Nine Elms area. Battersea Power Station is its own area (per migration
// decision in the website refactor plan).

// ── Projects (extracted for external_links + price_transparency mutation) ──

const embassyGardens = buildProject({
  id: "embassy-gardens",
  area_id: "nine-elms",
  name: "Embassy Gardens",
  developer: "EcoWorld Ballymore",
  operator: "EcoWorld Ballymore",
  building_type: "Owner-Lease",
  build_phase: "complete",
  tenure: ["rent", "buy"],
  realism: "unlikely",
  preview: "Sky Pool suspended between two towers. US Embassy directly adjacent. 24-hour concierge, gym, spa, curated retail. The benchmark for what the long game looks like on the Nine Elms corridor.",
  amenity_tier: "premium",
  is_signature: true,
  overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "EcoWorld Ballymore premium delivery with modern building services, strong layouts, and professional corporate maintenance at the Nine Elms flagship level.",
    t4_1_amenity_package: "Sky Pool suspended between towers, 24-hour concierge, gym, spa, curated retail — the benchmark for premium amenity packages in the dataset.",
    t4_4_signature_arch: "Sky Pool is a genuinely signature architectural feature — the world's first transparent floating pool between two residential towers.",
  },
});
embassyGardens.external_links = [
  { url: "https://www.embassygardens.com/", label: "Embassy Gardens — EcoWorld Ballymore", type: "developer", accessed_date: "2026-04-12" },
];
embassyGardens.rental.price_transparency = "enquire";
embassyGardens.rental.affordability = "over-budget";

const bloomNineElms = buildProject({
  id: "bloom-nine-elms",
  area_id: "nine-elms",
  name: "Bloom Nine Elms",
  developer: "Greystar (formerly Essential Living)",
  operator: "Greystar",
  building_type: "BTR",
  build_phase: "complete",
  tenure: ["rent"],
  realism: "unknown",
  preview: "BTR-only — the Nine Elms corridor address you can rent but not purchase. River views, rooftop amenities, Waitrose directly on-site. Well-managed.",
  amenity_tier: "strong",
  overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Essential Living BTR delivered to current specification with professional management and strong resident reviews.",
    t4_1_amenity_package: "River views, rooftop amenities, Waitrose directly on-site — strong BTR amenity stack, though one tier below Embassy Gardens' flagship.",
    t4_4_signature_arch: "Not named-architect signature — functional premium BTR rather than iconic work.",
  },
});
bloomNineElms.external_links = [
  { url: "https://bloom-nineelms.co.uk/", label: "Bloom Nine Elms — Greystar", type: "operator", accessed_date: "2026-04-12" },
];
bloomNineElms.rental.price_transparency = "listed";
bloomNineElms.rental.affordability = "over-budget";
bloomNineElms.rental.prices = {
  studio: { min: 2705, currency: "GBP", per: "month" },
  one_bed: { min: 3505, currency: "GBP", per: "month" },
  two_bed: { min: 3685, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "Studio £2,705+, 1-bed £3,505+, 2-bed £3,685+, 3-bed £5,575+ (bloom-nineelms.co.uk April 2026).",
};
bloomNineElms.units_total = 894;
bloomNineElms.architecture = {
  architects: ["Allies and Morrison"],
  awards: [],
  is_signature: false,
  style_notes: "Two buildings, 9-18 storeys. Competent premium BTR without a singular landmark silhouette — masterplan scale rather than architectural signature.",
};
bloomNineElms.building_quality = {
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "Premium BTR layouts with river and courtyard aspects across two buildings (9-18 storeys), 894 units.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "Greystar premium BTR spec, Allies and Morrison masterplan design. One of the largest single BTR schemes in London.",
};
bloomNineElms.amenities = {
  pool: true,
  pool_notes: "Two rooftop pools plus jacuzzi — materially more pool capacity than peer Greystar BTR schemes",
  gym: true,
  gym_quality: "good",
  concierge: "24h",
  sky_lounge: true,
  co_working: true,
  dining_room: true,
  cinema_room: true,
  rooftop_terrace: true,
  parking: false,
  bike_storage: true,
  pet_policy: "Pet-friendly with fee; two pet spas on site",
  other_amenities: ["Kid's Club", "Two pet spas", "Library", "Games room", "Piano room", "Sky bar"],
  overall_tier: "premium",
};
bloomNineElms.resident_signal = {
  homeviews_score: 4.62,
  homeviews_url: "https://www.homeviews.com/development/2c9a19c3-a537-4fc6-8993-f2e22583119a",
  summary: "4.62/5 across 167 reviews. Consistently high praise for staff responsiveness (specific staff named), modern facilities, and premium feel. Complaints concentrated on onboarding information gaps and ongoing external construction — will resolve as Nine Elms corridor completes.",
  common_praise: [
    "Staff responsiveness (Abdo Dada, Nathan named repeatedly)",
    "New, clean facilities",
    "Gym and co-working spaces",
    "Transport (Northern Line, Vauxhall)",
    "Premium design quality",
  ],
  common_complaints: [
    "Onboarding info gap on apps/portals/electronic keys",
    "Traffic congestion around building",
    "Ongoing Nine Elms area construction",
    "Parcel room occasional misplacements",
  ],
};
bloomNineElms.long_form = {
  full: bloomNineElms.long_form.full,
  living_experience: "Residents consistently praise staff responsiveness and the quality of the gym and co-working spaces. The premium feel and modern facilities are the headline wins; onboarding (apps, portals, electronic keys) and surrounding Nine Elms construction are the most common frictions.",
  notable_features: "Two rooftop pools + jacuzzi (materially more pool capacity than Pearl Yard); 894 units makes it one of the largest single BTR schemes in London; Allies and Morrison masterplan design; pet-forward (two pet spas); active community programming.",
};

const riverlightQuay = buildProject({
  id: "riverlight-quay",
  area_id: "nine-elms",
  name: "Riverlight Quay",
  developer: "St James (Berkeley Group)",
  operator: "St James",
  building_type: "Mixed",
  build_phase: "complete",
  tenure: ["rent", "buy"],
  realism: "unlikely",
  preview: "Six riverfront buildings between Vauxhall and Embassy Gardens. Residents' club, Thames views, mix of rental and ownership.",
  amenity_tier: "strong",
  overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley/St James premium specification with reliable build quality, Thames-facing layouts, and modern building services across six buildings.",
    t4_1_amenity_package: "Residents' club with full range of premium amenities — gym, lounges, concierge — consistent with St James's standard.",
    t4_4_signature_arch: "Not a named-architect signature piece — quietly premium riverside composition.",
  },
});
riverlightQuay.rental.price_transparency = "enquire";
riverlightQuay.rental.affordability = "over-budget";

const oneNineElms = buildProject({
  id: "one-nine-elms",
  area_id: "nine-elms",
  name: "One Nine Elms",
  developer: "CC Land Holdings",
  operator: "Park Hyatt",
  building_type: "Owner-Lease",
  build_phase: "complete",
  tenure: ["rent", "buy"],
  realism: "unlikely",
  preview: "Twin towers with a Park Hyatt hotel component — one of the few addresses with hotel-level services built in by default. Adjacent to Vauxhall, Zone 1 Northern line, upper-floor Thames views.",
  amenity_tier: "premium",
  is_signature: true,
  overall_grade: "S",
  evaluation_reasoning: {
    t2_6_building_quality: "Twin-tower delivery to the highest residential specification with Park Hyatt-operated services layered over the residential product.",
    t4_1_amenity_package: "Hotel-level services by default — Park Hyatt concierge, spa, gym, dining — arguably the most complete premium amenity package in the dataset.",
    t4_4_signature_arch: "Twin skyline towers with distinctive massing, and the Park Hyatt hotel component makes it one of the few branded-residence addresses in London.",
  },
});
oneNineElms.external_links = [
  { url: "https://riverthamesresidences.com/", label: "Park Hyatt London Residences — One Nine Elms", type: "developer", accessed_date: "2026-04-12" },
];
oneNineElms.rental.price_transparency = "enquire";
oneNineElms.rental.affordability = "over-budget";

const embassyBoulevard = buildProject({
  id: "embassy-boulevard", area_id: "nine-elms", name: "Embassy Boulevard", developer: "London Square", operator: "Moda Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable-with-guarantor",
  preview: "Moda Living's debut London neighbourhood — 467 units (437 BTR) across two blocks, 9-13 storeys. 20,000+ sq ft amenity space: three fitness spaces with Technogym, HIIT studio, yoga/Pilates suite, London's first BTR golf simulator, private dining, cinema room, co-working, sun decks. Studio from £2,680 pcm. Explicit 2.66x income multiple.",
  amenity_tier: "premium", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "New-build 2025 delivery. Moda Living professional BTR management — fully furnished and tech-enabled.",
    t4_1_amenity_package: "Premium — 20,000+ sq ft amenity space, three fitness spaces with Technogym, HIIT studio, yoga/Pilates suite, golf simulator, private dining rooms, resident gardens, 24hr concierge, cinema room, co-working, sun decks, children's play.",
    t4_4_signature_arch: "Not Pritzker-authored. Part of Nine Elms Park masterplan — functional premium BTR rather than signature design.",
  },
});
embassyBoulevard.external_links = [
  { url: "https://modaliving.com/locations/london/embassy-boulevard", label: "Moda Living — Embassy Boulevard", type: "operator", accessed_date: "2026-04-12" },
];
embassyBoulevard.rental.price_transparency = "listed";
embassyBoulevard.rental.affordability = "over-budget";
embassyBoulevard.rental.prices = {
  studio: { min: 2680, max: 2770, currency: "GBP", per: "month" },
  one_bed: { min: 3140, max: 3430, currency: "GBP", per: "month" },
  two_bed: { min: 3575, max: 4055, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "Studio £2,680-£2,770, 1-bed £3,140-£3,430, 2-bed £3,575-£4,055, 3-bed from £4,695. Bands from modaliving.com/locations/london/embassy-boulevard + OnTheMarket + PrimeLocation active listings.",
};
embassyBoulevard.building_quality = {
  epc_rating: "B",
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "467 homes (437 BTR) across two blocks, 9-13 storeys. Studios through 3-bed. Smart-home technology throughout. High-quality interiors. Fully furnished/managed option. Located next to the US Embassy at the heart of Nine Elms Zone 1.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "Moda's debut London neighbourhood, delivered 2025. 20,000+ sq ft of amenity space — the heaviest amenity package in the Moda London portfolio.",
};
embassyBoulevard.amenities = {
  pool: false,
  pool_notes: "Sky Pool at the adjacent Ballymore Embassy Gardens is a different scheme; Moda Embassy Boulevard residents do NOT inherit Sky Pool access.",
  gym: true,
  gym_quality: "excellent",
  concierge: "24h",
  sky_lounge: true,
  co_working: true,
  dining_room: true,
  cinema_room: true,
  rooftop_terrace: true,
  parking: true,
  bike_storage: true,
  pet_policy: "Pets welcome — subject to Moda policy and fee",
  other_amenities: [
    "London's first BTR golf simulator",
    "Karaoke room",
    "Games room (table tennis + pool tables)",
    "Library",
    "HIIT studio",
    "Yoga/Pilates suite",
    "Rooftop gardens + BBQ zones",
  ],
  overall_tier: "premium",
};
embassyBoulevard.architecture = {
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "Two blocks, 9-13 storeys, massing held below the Nine Elms high-rise cluster. Contemporary cladding, ground-floor activation facing Linear Place and the wider embassy boulevard axis. Interiors lean toward premium-hospitality rather than industrial-chic.",
};
embassyBoulevard.long_form = {
  full: "Embassy Boulevard is Moda Living's debut London neighbourhood — 467 rental homes (437 BTR) across two 9-13 storey blocks in Nine Elms Zone 1, delivered 2025. 20,000+ sq ft of amenity space is the headline differentiator: three dedicated fitness spaces with Technogym equipment, a HIIT studio, a yoga/Pilates suite, London's first BTR golf simulator, private dining rooms, two cinema screening rooms, a karaoke room, a games room with table tennis and pool tables, rooftop gardens with BBQ zones, and a library. 24-hour concierge. Studio from £2,680 pcm; 1-bed from £3,140; 2-bed from £3,575; 3-bed from £4,695. The building is explicit about its 2.66× income multiple (unusually transparent for BTR). Located steps from the US Embassy; Vauxhall (Victoria Line + Mainline) 10 minutes walk; Battersea Power Station (Northern Line) 8 minutes.",
  living_experience: "Amenity programme is genuinely the heaviest in Moda's London portfolio — the Technogym + golf simulator + karaoke + games lounge combination puts the building close to a private members' club. For a qualifying tenant, this is premium BTR living at a premium BTR price. Moda's published qualification posture (Experian 561+ floor, UK-only guarantor) makes it a hard block for applicants without UK credit history.",
  notable_features: "20,000+ sq ft amenity space (headline); London's first BTR golf simulator; three fitness spaces with Technogym + HIIT + yoga/Pilates; karaoke room (rare amenity); Moda's debut London neighbourhood; transparent 2.66× income multiple.",
};

const nineElmsParkTower = buildProject({
  id: "nine-elms-park-tower", area_id: "nine-elms", name: "Nine Elms Park (Private Sale Tower)", developer: "London Square", operator: "Individual landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "22-storey bronze-panelled tower — tallest in Nine Elms Park. 186 private sale apartments. Allies and Morrison architects. River views. Shares facilities with Embassy Boulevard. Completing Q1 2025.",
  architects: ["Allies and Morrison"],
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Allies and Morrison design completing 2025. Bronze-panelled tower with river views.",
    t4_1_amenity_package: "Strong — ground-level luxury retail and restaurants, shared facilities with Embassy Boulevard's 20,000+ sq ft amenity space.",
    t4_4_signature_arch: "Allies and Morrison — major London practice. Bronze-panelled design is distinctive but not Pritzker-firm.",
  },
});
nineElmsParkTower.rental.affordability = "over-budget";

const myloNineElms = buildProject({
  id: "mylo-nine-elms", area_id: "nine-elms", name: "Mylo Nine Elms (Nine Elms Point)", developer: "Telford Homes", operator: "Greystar", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
  preview: "Greystar-operated BTR — 647 units across multiple towers. One of the world's largest residential operators. Explicit 2.66x income multiple, pets welcome, long-term and short-term leases plus corporate lets. Private gym, lounge, private dining, communal roof gardens. Minutes from Vauxhall station.",
  amenity_tier: "strong", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Telford Homes delivery completed ~2022. Greystar professional management — one of the world's largest residential landlords.",
    t4_1_amenity_package: "Strong — private gym, lounge, private hire dining space, communal roof gardens, balconies/winter gardens for all units, on-site management.",
    t4_4_signature_arch: "Not signature-authored. Functional premium BTR across multiple towers.",
  },
});
myloNineElms.external_links = [
  { url: "https://nineelmspoint.mylo-london.com/", label: "Mylo — Nine Elms Point (Greystar)", type: "operator", accessed_date: "2026-04-12" },
];
myloNineElms.rental.price_transparency = "listed";
myloNineElms.rental.affordability = "over-budget";
myloNineElms.units_total = 647;
myloNineElms.building_quality = {
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "647 units across multiple towers with balconies/winter gardens for all units. Courtyard and communal roof gardens layered into the residential fabric.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "Telford Homes delivery ~2022; Greystar professional management — one of the world's largest residential landlords.",
};
myloNineElms.amenities = {
  pool: false,
  pool_notes: "",
  gym: true,
  gym_quality: "good",
  concierge: "24h",
  sky_lounge: false,
  co_working: true,
  dining_room: true,
  cinema_room: true,
  rooftop_terrace: true,
  parking: false,
  bike_storage: true,
  pet_policy: "Pet-friendly; pet-friendly courtyard",
  other_amenities: ["Communal roof gardens", "Courtyard", "Pet-friendly courtyard", "Private hire dining"],
  overall_tier: "strong",
};
myloNineElms.resident_signal = {
  homeviews_score: 4.32,
  homeviews_url: "https://www.homeviews.com/development/mylo-at-nine-elms-sw8",
  summary: "4.32/5 across 62 reviews (moderate confidence). Staff consistently praised; lift reliability and trash chute are recurring issue themes. Train noise when windows open is a known factor (proximity to Vauxhall rail).",
  common_praise: [
    "Staff responsiveness",
    "Vauxhall transport access (7-min walk)",
    "Courtyard tranquillity",
    "Building cleanliness",
    "Concierge helpfulness",
  ],
  common_complaints: [
    "Trash chute issues",
    "Lift breakdowns",
    "Visitor parking limits",
    "Train noise with windows open",
    "External construction",
  ],
};

const skyGardensNineElms = buildProject({
  id: "sky-gardens-nine-elms", area_id: "nine-elms", name: "Sky Gardens", developer: "Frasers Property", operator: "Individual landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "~300+ units across two towers (35+ storeys). Directly opposite Nine Elms tube station. Two suspended sky gardens at 8th and 35th floors designed by Gillespies — the USP. Private gym, 24hr concierge. 1-bed from ~£2,200 pcm.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Completed 2018-2019. Modern specification with comfort cooling.",
    t4_1_amenity_package: "Strong — two sky gardens (8th and 35th floors) designed by Gillespies, private gym, 24hr concierge, comfort cooling.",
    t4_4_signature_arch: "The suspended communal sky gardens at 8th and 35th floor levels are architecturally distinctive — a recognisable design feature in the Nine Elms corridor.",
  },
});
skyGardensNineElms.rental.affordability = "at-budget";

const nineElms: Area = {
  id: "nine-elms",
  name: "Nine Elms",
  aliases: ["VNEB", "Vauxhall Nine Elms Battersea", "Nine Elms / Vauxhall"],
  borough: "Wandsworth / Lambeth",
  postcodes: ["SW8", "SW11"],

  headline:
    "The Northern Line extension turned an industrial wasteland into London's biggest single regeneration corridor — riverside, glass-tower premium addresses, US Embassy adjacency.",
  preview:
    "Nine Elms is the corridor that runs from Vauxhall to Battersea Power Station along the south bank of the Thames. The Northern Line extension at Nine Elms station opened in 2021. The US Embassy moved here in 2018, and the streets around it are among the most monitored in London. Multiple premium developments — Embassy Gardens, One Nine Elms, Bloom, Riverlight Quay — share the corridor.",

  long_form: {
    full: "Nine Elms is the corridor that runs along the south bank of the Thames between Vauxhall and Battersea Power Station. Until 2010 it was an industrial wasteland of New Covent Garden Market warehouses and surface parking. Today it is the largest single regeneration zone in London, anchored by the US Embassy (relocated in 2018), the Northern Line extension (Nine Elms and Battersea Power Station stations both opened in 2021), and a series of premium residential developments including Embassy Gardens, Riverlight Quay, Bloom Nine Elms, One Nine Elms, and the Battersea Power Station development to the west. The corridor has its own riverside walk running fully from Vauxhall to BPS. The architectural quality is mixed — some signature buildings (Frank Gehry's Battersea contributions, the Sky Pool at Embassy Gardens) alongside more generic glass towers. The defining feature is that this is a fully new district, built end to end in the 2010s and 2020s, rather than a regeneration of an existing community.",
    history: "Until 2010 the Nine Elms corridor was an industrial wasteland. The US Embassy decision (2008, opened 2018) was the trigger for the broader masterplan, followed by the Northern Line extension (consented 2014, opened 2021), and the Battersea Power Station redevelopment running in parallel. The result is a fully new district built in roughly 15 years.",
    vibe: "Glassy, modern, professional. The streets feel like they were designed all at once — because they were. Less character than King's Cross, more uniformity than Wembley Park. The public realm is generous but not yet warm; the area is still building out the cultural and retail layer that gives an area soul. Embassy Gardens' Sky Pool is the photo-op identity; everyday life is more about premium residential calm than buzzy street life.",
    weekday: "A Tuesday at 7pm: the Northern Line at Nine Elms is busy with commuters; Embassy Gardens' restaurants are at moderate occupancy; the riverside walk has joggers and dog walkers; the streets around the US Embassy are notably empty after dark.",
    weekend: "A Saturday at midday: the riverside walk is the main social space, with cyclists and walkers stretching from Vauxhall to BPS; Embassy Gardens' Sky Pool is a destination attraction; some restaurant traffic but not at the level of Battersea Power Station's retail core.",
    notable: "Sky Pool at Embassy Gardens, US Embassy, Northern Line extension stations, Riverlight Quay's residents' club, One Nine Elms twin towers, Bloom's Waitrose-on-site model.",
    croydon_comparison:
      "Nine Elms is the cleanest example of a fully new luxury district replacing nothing. Croydon is a degraded historic centre; Nine Elms is a brand-new built environment. The trade-off is that Nine Elms is monotone where Croydon has at least the bones of a place — but for someone leaving Croydon for an upgrade, monotone-but-modern is the right direction. The Northern Line extension is genuine and provides Zone 1 access at distances that previously took 30+ minutes.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
      { name: "Victoria", type: "tube" },
    ],
    primary_stations: [
      { name: "Nine Elms", lines: ["Northern"], walk_minutes_from_centre: 4 },
      { name: "Vauxhall", lines: ["Victoria", "South Western Railway"], walk_minutes_from_centre: 12 },
    ],
    times_to_anchors: {
      city_of_london: 19,
      canary_wharf: 28,
      soho_fitzrovia: 14,
      kings_cross_shoreditch: 18,
    },
    multi_cluster_score: 3,
    redundancy_score: 2,
    notes: "Northern Line extension is the dominant story. Victoria Line at walkable Vauxhall (12 min) provides partial redundancy. Single-line failure at Nine Elms station strands the tube-preferred route, but the Victoria fallback keeps multi-cluster viability. This is a meaningful but partial redundancy.",
    sources: [
      { url: "https://tfl.gov.uk/travel-information/improvements-and-projects/nine-elms", label: "TfL — Nine Elms / Northern Line extension", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://en.wikipedia.org/wiki/Nine_Elms_tube_station", label: "Wikipedia — Nine Elms tube station", type: "wikipedia", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 32 },
      { cohort: "30-39", pct: 38 },
      { cohort: "40-49", pct: 16 },
      { cohort: "50+", pct: 14 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 38 },
      { group: "White — other", pct: 26 },
      { group: "Asian or Asian British", pct: 18 },
      { group: "Black or Black British", pct: 9 },
      { group: "Mixed", pct: 5 },
      { group: "Other ethnic group", pct: 4 },
    ],
    household_mix: [
      { type: "Single person", pct: 38 },
      { type: "Couple no children", pct: 32 },
      { type: "Couple with children", pct: 12 },
      { type: "Lone parent", pct: 3 },
      { type: "Shared household", pct: 12 },
      { type: "Other", pct: 3 },
    ],
    student_pct: 5,
    professional_renter_pct: 60,
    notes: "Nine Elms ward grew roughly 14x between 2011 and 2021 and continued growing sharply since — Census 2021 data underrepresents current professional-renter heaviness. Current population dominated by 20s-30s working professionals. US Embassy staff add a small consistent American-expat share. The area is among the highest-renter-share in the dataset.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021 — Nine Elms ward LSOAs", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://data.london.gov.uk/dataset/2021-census-demography", label: "London Datastore — 2021 Census demography", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://en.wikipedia.org/wiki/Nine_Elms", label: "Wikipedia — Nine Elms", type: "wikipedia", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "very-safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "Among the most consistently maintained and monitored streets in London. The US Embassy presence brings heavy Metropolitan Police coverage around the diplomatic perimeter; the corridor is continuously CCTV-covered and well-lit. Residential streets are quiet but not empty-quiet — Embassy Gardens and adjacent blocks have steady evening footfall from restaurants and commuters. No known trouble spots; Reddit r/london lived-experience reports consistently positive.",
    concerns: [],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police/lambeth/", label: "Met Police — Lambeth", type: "met-police", accessed_date: "2026-04-17" },
      { url: "https://www.police.uk/pu/your-area/metropolitan-police/wandsworth/", label: "Met Police — Wandsworth", type: "met-police", accessed_date: "2026-04-17" },
      { url: "https://crimerate.co.uk/london/wandsworth", label: "CrimeRate — Wandsworth", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: true,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Embassy Gardens Linear Park", walk_minutes: 3, notes: "Designed linear park between Embassy Gardens buildings — 2 acres of landscaped public realm" },
      { name: "Nine Elms Park (under delivery)", walk_minutes: 5, notes: "New masterplan park being delivered phased through 2027 as part of Nine Elms corridor" },
      { name: "Battersea Park", size_acres: 200, walk_minutes: 14, notes: "Major Victorian park accessible via riverside walk to west" },
      { name: "Thames Path (Nine Elms segment)", walk_minutes: 2, notes: "Continuous riverside path from Vauxhall to BPS" },
    ],
    overall_assessment: "Thames riverside is the defining green feature — continuous path from Vauxhall to BPS with the Embassy Gardens linear park adding landscape inside the masterplan. Battersea Park is walkable in 14 minutes. Nine Elms is better on water than on parks — the masterplan park itself is still building out and not yet a mature green anchor.",
    sources: [
      { url: "https://nineelmslondon.com/transformation/", label: "Nine Elms London — Transformation", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.wandsworth.gov.uk/parks-and-open-spaces/", label: "Wandsworth Parks", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Waitrose (1 New Union Square)", type: "premium grocery", walk_minutes: 3, notes: "Full-size Waitrose inside Bloom Nine Elms — principal grocery anchor" },
      { name: "Sainsbury's (62 Wandsworth Road / Nine Elms Superstore)", type: "full supermarket", walk_minutes: 6, notes: "Large Sainsbury's on Wandsworth Road" },
      { name: "M&S Food Hall (Electric Boulevard)", type: "premium grocery", walk_minutes: 10, notes: "Walkable via riverside path to BPS" },
    ],
    gyms: [
      { name: "Third Space Battersea", type: "premium gym", walk_minutes: 10, notes: "Accessible via riverside walk to BPS" },
      { name: "Embassy Gardens resident gym", type: "resident gym with Sky Pool access", walk_minutes: 3, notes: "Premium resident-only facility at Embassy Gardens" },
      { name: "PureGym Vauxhall", type: "budget chain", walk_minutes: 12, notes: "At Vauxhall" },
      { name: "BXR Battersea", type: "boxing gym", walk_minutes: 10, notes: "Premium boxing at BPS — directly relevant to Caner" },
    ],
    food_and_drink: [
      { name: "Riverlight Quay restaurants", type: "restaurant cluster", walk_minutes: 5, notes: "Cluster of waterside restaurants and bars at Riverlight" },
      { name: "Embassy Gardens ground-floor retail", type: "restaurants/cafés", walk_minutes: 3, notes: "Ballymore-curated mix — maturing but still thin" },
      { name: "New Covent Garden Market (trade)", type: "wholesale food market", walk_minutes: 8, notes: "Adjacent wholesale market — not consumer-facing but a local character anchor" },
    ],
    health: [
      { name: "Nine Elms Health Centre (Sleaford Street, SW8)", type: "NHS GP", walk_minutes: 5, notes: "Opens early 2026 — new NHS facility purpose-built for the corridor" },
      { name: "Boots Pharmacy (Bloom Nine Elms)", type: "pharmacy", walk_minutes: 3, notes: "" },
    ],
    cultural: [
      { name: "US Embassy", type: "diplomatic landmark", walk_minutes: 3, notes: "Kieran Timberlake's crystalline cube — architectural draw, not visitable" },
      { name: "Sky Pool at Embassy Gardens", type: "landmark/attraction", walk_minutes: 3, notes: "World's first transparent suspended pool — photo-op identity" },
      { name: "New Covent Garden Market events", type: "seasonal events", walk_minutes: 8, notes: "Occasional food events and market tours" },
    ],
    notes: "Grocery + gym layer is strong (Waitrose + Sainsbury's + premium resident gyms + walkable BPS Third Space). Food/restaurant layer is the corridor's known weakness — still maturing, sparse character cafés compared to King's Cross or BPS. Health gap closes early 2026 with Nine Elms Health Centre opening. Cultural layer is US Embassy + Sky Pool as photo-ops rather than day-to-day draws.",
    sources: [
      { url: "https://www.waitrose.com/find-a-store/battersea-nine-elms", label: "Waitrose — Battersea Nine Elms", type: "other", accessed_date: "2026-04-17" },
      { url: "https://stores.sainsburys.co.uk/2665/nine-elms", label: "Sainsbury's — Nine Elms", type: "other", accessed_date: "2026-04-17" },
      { url: "https://nineelmslondon.com/transformation/", label: "Nine Elms London — Transformation", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "Vauxhall Nine Elms Battersea Opportunity Area — 227 hectares, largest central London regeneration zone. ~42 discrete projects. Target: 20,000+ homes and 25,000 jobs by corridor completion. Developers include EcoWorld Ballymore, Berkeley/St James, CC Land, London Square, Greystar, Moda, Telford/Telford Homes, Frasers Property.",
    recent_milestones: [
      "2018 — US Embassy opened (Kieran Timberlake architects)",
      "2021 — Northern Line extension opened (Nine Elms + BPS stations)",
      "2022 — Embassy Gardens Sky Pool delivered; Phase 2 of EcoWorld Ballymore completed",
      "2023-2024 — Multiple Berkeley/St James, Greystar, Telford deliveries",
      "2025 — Moda Living Embassy Boulevard opened (467 units)",
      "2025 — Nine Elms Park private-sale tower (Allies and Morrison) completing",
    ],
    upcoming_milestones: [
      "Early 2026 — Nine Elms Health Centre opens (Sleaford Street)",
      "2026 — New two-form-entry primary school opposite Nine Elms Park",
      "2026 onwards — Nine Elms Lane and Battersea Park Road (A3205) public-realm works continue",
      "2027+ — Continued tower deliveries across multiple developer plots",
    ],
    trajectory_through_2027: "Nine Elms in August 2027 will be substantially more activated than today — the NHS health centre will have been operational ~18 months, the new primary school will be open, Moda Embassy Boulevard will be fully leased-up, and the retail/food layer inside Embassy Gardens and adjacent blocks will be noticeably denser. Construction will still be visible (it's the largest regeneration zone in central London) but the headline deliveries matter more than the construction drag. This is an ascending corridor through the visa transition window — a renter arriving 2026-2027 gets noticeable amenity improvement over 18-24 months.",
    sources: [
      { url: "https://nineelmslondon.com/transformation/", label: "Nine Elms London — Transformation", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.london.gov.uk/programmes-strategies/planning/implementing-london-plan/londons-opportunity-areas/vauxhall-nine-elms-battersea-opportunity-area", label: "GLA — VNEB Opportunity Area", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.wandsworth.gov.uk/business-and-licensing/regeneration-projects/nine-elms/about-nine-elms/", label: "Wandsworth — Nine Elms regeneration", type: "council", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Among the most consistently maintained and monitored streets in London thanks to the US Embassy adjacency and heavy Metropolitan Police presence. Very-safe rating, crime below borough average, no concerns.",
        "1.2": "Embassy Gardens, One Nine Elms, Bloom, Riverlight Quay are all purpose-built modern stock delivered in the 2010s-2020s. No pre-war stock anywhere in the corridor.",
        "1.3": "Northern Line extension at Nine Elms (Zone 1) plus Victoria Line at walkable Vauxhall — City 19 min, Soho/Fitzrovia 14 min, KX 18 min. Passes T1.3 despite T5.2 redundancy concerns.",
        "1.4": "Multiple major managed operators — EcoWorld Ballymore, Essential Living, Berkeley/St James, CC Land/Park Hyatt — with central referencing across the corridor.",
        "1.5": "Recently built and actively maintained, with GLA and council investment in the riverside walk and public realm. No visible decay anywhere in the corridor.",
        "1.6": "Strongly ascending — the corridor grew roughly 14x in population between 2011 and 2021 and multiple developments are still completing through 2027+.",
      },
      "strong",
      "T1 passes cleanly. Premium operator presence (Way of Life, EcoWorld Ballymore, Berkeley, Essential Living), exceptional safety, modern stock end to end.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Walkable essentials are present but the area is still building out the granular high street layer — Bloom's on-site Waitrose and Embassy Gardens' retail cover basics but not the dense high-street texture of mature districts.",
        "2.2": "Waitrose on-site at Bloom Nine Elms plus Sainsbury's Local nearby — premium grocery access within the corridor is genuinely strong.",
        "2.3": "Multiple commercial gyms in residential buildings; Embassy Gardens has a flagship resident gym plus Sky Pool, and Third Space and commercial chains are within walking distance.",
        "2.4": "Riverside walk runs the full Thames frontage from Vauxhall to Battersea Power Station; Embassy Gardens linear park is integrated into the masterplan; Battersea Park 200 acres at 14 minutes walk.",
        "2.5": "Residential streets are notably quiet after dark, especially around the US Embassy. No persistent late-night party noise.",
        "2.7": "Primary cohort 30-39 with heavy 20s professional renter share (60%). Nine Elms ward grew 14x 2011-2021 and the current population is dominated by young professionals.",
      },
      "good",
      "Strong on most T2 rows; the only weakness is the still-developing walkable retail layer beyond the supermarkets and gyms inside specific buildings.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "pass", "3.4": "partial", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "Multiple phases of multiple developments still completing through 2027+; the largest single regeneration corridor in London is demonstrably in active investment.",
        "3.2": "Cultural anchor is the US Embassy itself, which is prominent but not socially activating — Embassy Gardens' Sky Pool is a photo-op rather than a day-to-day cultural draw.",
        "3.3": "'Nine Elms' has strong name recognition — the corridor is in London property press constantly and the Sky Pool and US Embassy both give it mental-map presence.",
        "3.4": "15-min completeness still maturing as the area builds out — the retail and food layer is thinner than King's Cross and Battersea Power Station.",
        "3.5": "Architectural quality is mixed — some signature (Embassy Gardens Sky Pool, One Nine Elms twin towers) alongside more generic glass towers. Less coherent than Wembley Park or BPS.",
        "3.6": "Day/night rhythm still developing; quiet at night but lacks the buzz of King's Cross. The area is genuinely residential-led rather than mixed-use in the full sense.",
      },
      "moderate",
      "T3 is the weakest tier for Nine Elms. The area passes regeneration and name recognition cleanly but the cultural depth and architectural coherence are uneven. This is the corridor's known weakness — it is mid-build rather than mature.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "fail", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 3/5 — Northern Line covers some clusters but Canary Wharf is 28 minutes and the interchange is awkward.",
        "5.2": "Single-line dependency on Northern Line extension is the single biggest weakness — failure strands the area. Vauxhall is walkable as a fallback but not truly redundant at Nine Elms station itself.",
        "5.3": "Strongly ascending through 2027 — multiple developments still completing, corridor activation continuing, masterplan remains in delivery.",
        "5.4": "Limited bookshop and library presence — the residential-led character means quiet third-space culture is thinner than central areas.",
      },
      "moderate",
      "T5 reveals the headline weakness: Northern Line single-point-of-failure. Trajectory is strong, but transport robustness is the worst in the dataset for an otherwise-premium area.",
    ),
    overall_grade: "A",
    grade_reasoning:
      "Nine Elms earns A on the strength of T1 + T2 (clean) and the ongoing trajectory. T3 mid-tier and T5 transport weakness keep it from S. The headline risk is Northern Line dependency — anyone working at Canary Wharf would be punished by it.",
  },

  // ── RESEARCH: Nine Elms projects ─────────────────────────────────────
  // Moda Living (Embassy Boulevard):
  //   Referencing: unknown (Moda may use Homeppl — not confirmed for London)
  //   Agreement type: ast
  //   Prices: studio from £2,680, 1-bed from £3,140, 2-bed from £3,575 pcm
  //   Cost tier: premium
  //   Income multiple: 2.66x (explicitly stated — lower than typical 30x annual)
  //   International friendly: case-by-case (UNVERIFIED)
  //   Grad visa realism: achievable-with-guarantor
  //
  // Greystar (Mylo Nine Elms):
  //   Referencing: unknown (Greystar not confirmed Homeppl)
  //   Agreement type: ast
  //   Prices: 1-bed ~£2,953 pcm
  //   Income multiple: 2.66x (explicitly stated)
  //   Cost tier: premium
  //   Grad visa realism: unknown
  //
  // Greystar (Bloom Nine Elms):
  //   Prices: from ~£2,635–£2,855 pcm
  //   Cost tier: premium
  //   Grad visa realism: unknown
  //
  // Embassy Gardens (EcoWorld Ballymore): ownership-led, unlikely for grad visa
  // Riverlight Quay (St James/Berkeley): ownership-led, unlikely
  // One Nine Elms (CC Land/Park Hyatt): ultra-premium, unlikely
  // Sky Gardens (Frasers): BtS, 1-bed from ~£2,200 pcm
  // ───────────────────────────────────────────────────────────────────────

  projects: [embassyGardens, bloomNineElms, riverlightQuay, oneNineElms, embassyBoulevard, nineElmsParkTower, myloNineElms, skyGardensNineElms],

  external_links: [
    { url: "https://en.wikipedia.org/wiki/Nine_Elms", label: "Wikipedia (Nine Elms)", type: "wikipedia", accessed_date: "2026-04-11" },
    { url: "https://www.embassygardens.com/", label: "Embassy Gardens — EcoWorld Ballymore", type: "developer", accessed_date: "2026-04-12" },
    { url: "https://modaliving.com/locations/london/embassy-boulevard", label: "Moda Living — Embassy Boulevard", type: "operator", accessed_date: "2026-04-12" },
    { url: "https://bloom-nineelms.co.uk/", label: "Bloom Nine Elms — Greystar", type: "operator", accessed_date: "2026-04-12" },
    { url: "https://nineelmspoint.mylo-london.com/", label: "Mylo — Nine Elms Point (Greystar)", type: "operator", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default nineElms;
