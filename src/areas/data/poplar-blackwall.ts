import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const londonCityIsland = buildProject({
  id: "london-city-island", area_id: "poplar-blackwall", name: "London City Island", developer: "Ballymore", operator: "Ballymore", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Ballymore self-contained residential island on the Leamouth Peninsula. English National Ballet HQ. Thames frontage.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Ballymore delivery — mid-premium build quality consistent with their London portfolio.",
    t4_1_amenity_package: "Strong amenity package for a self-contained island development.",
    t4_4_signature_arch: "Distinctive island concept. Not Pritzker-authored but architecturally interesting.",
  },
});
londonCityIsland.external_links = [
  { url: "https://www.londoncityisland.com/", label: "London City Island official site", type: "developer", accessed_date: "2026-04-12" },
];

const blackwallReach = buildProject({
  id: "blackwall-reach",
  area_id: "poplar-blackwall",
  name: "Blackwall Reach",
  developer: "Swan Housing (Sanctuary Group)",
  operator: "Swan Housing / Sanctuary",
  building_type: "Mixed",
  build_phase: "phased",
  tenure: ["rent", "buy"],
  realism: "unknown",
  preview: "Major £300m regeneration replacing 252 homes with 1,500+. Haworth Tompkins masterplan. Phase 1A complete, Phase 2 in delivery. Primarily affordable/social but some private rental units.",
  amenity_tier: "decent",
  overall_grade: "C",
  architects: ["Haworth Tompkins"],
  evaluation_reasoning: {
    t2_6_building_quality: "Haworth Tompkins-designed masterplan — strong architectural quality. Housing association delivery standard.",
    t4_1_amenity_package: "Decent — new primary school, community hub, public realm improvements. Not a premium residential amenity package.",
    t4_4_signature_arch: "Haworth Tompkins is Stirling Prize-winning — genuine signature architecture at masterplan level.",
  },
});
blackwallReach.external_links = [
  { url: "https://www.sanctuary.co.uk/about-sanctuary/development-and-regeneration/blackwall-reach", label: "Sanctuary — Blackwall Reach", type: "developer", accessed_date: "2026-04-12" },
];

const heronWharf = buildProject({
  id: "heron-wharf",
  area_id: "poplar-blackwall",
  name: "Heron Wharf",
  developer: "Berkeley Group",
  operator: "Various agents",
  building_type: "Build-to-Sell",
  build_phase: "in_delivery",
  tenure: ["rent", "buy"],
  realism: "unknown",
  preview: "643 homes (Phase 1) on River Lea. The Riverside Club: 20m pool, spa with treatment rooms, steam room, vitality pool, cinema, gym, games room. Sales-led with expected rental market.",
  amenity_tier: "premium",
  overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley Group delivery — premium specification. Phase 1 completing Q2 2025.",
    t4_1_amenity_package: "Premium — The Riverside Club with 20m pool, spa, treatment rooms, steam room, vitality pool, cinema, gym, games room.",
    t4_4_signature_arch: "Not confirmed as named-architect signature work.",
  },
});
heronWharf.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/poplar/heron-wharf", label: "Berkeley — Heron Wharf", type: "developer", accessed_date: "2026-04-12" },
];

const rivermark = buildProject({
  id: "rivermark",
  area_id: "poplar-blackwall",
  name: "Rivermark",
  developer: "Taylor Wimpey",
  operator: "Various agents",
  building_type: "Build-to-Sell",
  build_phase: "in_delivery",
  tenure: ["rent", "buy"],
  realism: "unknown",
  preview: "530 homes across 6 buildings on former Poplar Bus Depot, River Lea. Private lounge, concierge, courtyard garden, rooftop terrace. CZWG Architects. Expected completion 2026.",
  amenity_tier: "decent",
  overall_grade: "C",
  architects: ["CZWG Architects"],
  evaluation_reasoning: {
    t2_6_building_quality: "Taylor Wimpey delivery, in delivery for 2026 completion. Functional mid-market build quality.",
    t4_1_amenity_package: "Decent — private lounge, concierge, courtyard garden, rooftop terrace. Modest compared to Heron Wharf.",
    t4_4_signature_arch: "CZWG Architects — notable practice but not signature-tier.",
  },
});
rivermark.external_links = [
  { url: "https://www.taylorwimpey.co.uk/new-homes/poplar/rivermark", label: "Taylor Wimpey — Rivermark", type: "developer", accessed_date: "2026-04-12" },
];

const fizzyPoplar = buildProject({
  id: "fizzy-poplar",
  area_id: "poplar-blackwall",
  name: "Fizzy Poplar",
  developer: "Unknown",
  operator: "Fizzy Living (Greystar)",
  building_type: "BTR",
  build_phase: "complete",
  tenure: ["rent"],
  realism: "achievable-with-guarantor",
  preview: "Fizzy Living / Greystar BTR overlooking Bartlett Park near Poplar DLR. On-site gym, communal garden, 24-hour concierge, pet-friendly. 1-beds from approx. £2,155 pcm. Historically flexible on visa status.",
  amenity_tier: "decent",
  overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Fizzy Living BTR — functional build quality with professional Greystar management. Generally positive resident reviews.",
    t4_1_amenity_package: "Decent — on-site gym, communal garden, 24-hour concierge, bike storage, patio area, free broadband, pet-friendly.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
fizzyPoplar.external_links = [
  { url: "https://fizzyliving.com/locations/poplar", label: "Fizzy Living — Poplar", type: "operator", accessed_date: "2026-04-12" },
  { url: "https://www.homeviews.com/development/fizzy-poplar-e14", label: "HomeViews — Fizzy Poplar", type: "homeviews", accessed_date: "2026-04-17" },
];
fizzyPoplar.rental.price_transparency = "listed";
fizzyPoplar.rental.prices = {
  one_bed: { min: 1800, max: 2200, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "1-bed £1,800-£2,200 per Fizzy filter + Rightmove April 2026. V1 £2,155 still broadly accurate. Up to 4 weeks free rent promo active.",
};
fizzyPoplar.rental.affordability = "comfortably-affordable";
fizzyPoplar.building_quality = {
  sound_insulation: "average",
  thermal_performance: "average",
  layout_notes: "Mid-rise BTR overlooking Bartlett Park near Poplar DLR. HomeViews complaint theme: corridor heat and smell transfer between flats.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "Sound and thermal are average-tier within Fizzy portfolio — corridor heat and smell transfer are recurring complaints. On-site gym with free membership is the amenity differentiator vs Stepney Green.",
};
fizzyPoplar.amenities = {
  pool: false,
  pool_notes: "",
  gym: true,
  gym_quality: "average",
  concierge: "daytime",
  sky_lounge: false,
  co_working: false,
  dining_room: false,
  cinema_room: false,
  rooftop_terrace: false,
  parking: true,
  bike_storage: true,
  pet_policy: "Pet friendly",
  other_amenities: ["Communal garden overlooking Bartlett Park", "Paid parking", "Free broadband"],
  overall_tier: "decent",
};
fizzyPoplar.architecture = {
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "Mid-rise BTR facing Bartlett Park. Not signature-authored.",
};
fizzyPoplar.long_form = {
  full: "Fizzy Poplar is a Fizzy Living (Greystar subsidiary) BTR overlooking Bartlett Park near Poplar DLR. Decent amenity tier — on-site gym with free membership, communal garden, daytime concierge, paid parking (rare within Fizzy), free broadband. 1-beds £1,800-£2,200 pcm in Caner's comfortably-affordable range. Up-to-4-weeks free rent promo active signals demand softness. Greystar / Homeppl referencing backend opens the Open Banking savings pathway.",
  living_experience: "HomeViews 4.21/5 (114 reviews — lowest in the Fizzy portfolio and the calibration signal). Praised for modern finishes, management responsiveness, DLR + Canary Wharf proximity, pet-friendliness, and fair rent for the area. Recurring complaints: hot and smell-transferring corridors, lift outages (4+ times in 6 months), external ASB (yelling, smoking, drinking), common-area cleanliness, maintenance-only-on-Wednesdays scheduling friction.",
  notable_features: "On-site gym with free membership (tier above Stepney Green amenity); overlooks Bartlett Park; paid parking available (rare within Fizzy); 4-week rent-free promo signal of demand softness.",
};
fizzyPoplar.resident_signal = {
  homeviews_score: 4.21,
  homeviews_url: "https://www.homeviews.com/development/fizzy-poplar-e14",
  summary: "4.21/5 across 114 reviews (lowest in the Fizzy portfolio — the calibration signal). Solid on fundamentals (modern finishes, management, location, pet-friendly) but recurring complaints on corridor heat/smell, lift reliability, external ASB, and common-area cleanliness pull the score below sibling Fizzy buildings.",
  common_praise: [
    "Modern finishes",
    "Management responsiveness",
    "DLR + Canary Wharf proximity",
    "Pet-friendly",
    "Fair rent for area",
  ],
  common_complaints: [
    "Corridor very hot and collects smells from flats",
    "Lift out of service ≥4 times in 6 months",
    "External antisocial behaviour (yelling, smoking, drinking)",
    "Carpet/wall cleanliness in common areas",
    "Maintenance only comes on Wednesdays",
  ],
};

const nodeLimehouse = buildProject({
  id: "node-limehouse", area_id: "poplar-blackwall", name: "Node Limehouse", developer: "Node Living", operator: "Node Living", building_type: "BTR", living_model: "co-living", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Co-living on the Thames near Limehouse. Studios from £1,742/month all-inclusive (utilities, Wi-Fi, council tax). Co-working, lounge, communal garden. Licence agreement. 3-month minimum stay. Minimal referencing.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Co-living specification. Modern build near Thames.",
    t4_1_amenity_package: "Decent — co-working, residents' lounge, communal garden and BBQ, package lockers.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
nodeLimehouse.external_links = [
  { url: "https://node-living.com/london/node-limehouse/", label: "Node Limehouse", type: "operator", accessed_date: "2026-04-15" },
];
nodeLimehouse.rental.price_transparency = "listed";
nodeLimehouse.rental.prices = {
  studio: { min: 1742, max: 2000, currency: "GBP", per: "month" },
  bills_included: true,
  notes: "Studios from £1,742/mo all-inclusive (utilities + Wi-Fi + council tax). Band from node-living.com.",
};
nodeLimehouse.rental.affordability = "well-under-budget";
nodeLimehouse.building_quality = {
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "Historic warehouse converted for co-living, Thames-facing. Private studios with kitchenette (fridge + hob + combi microwave). Ensuite bathroom. Shared fully-equipped kitchen on each floor. Shared lounges, co-working spaces, and outdoor communal areas.",
  kitchen_quality: "average",
  heating_type: "communal",
  notes: "Historic warehouse + Thames frontage is a genuine differentiator vs any other co-living in the dataset. Regular cooks should plan to use the shared floor kitchen for serious prep — in-studio kitchenette is light (fridge + hob + combi microwave).",
};
nodeLimehouse.amenities = {
  pool: false,
  pool_notes: "",
  gym: false,
  gym_quality: "poor",
  concierge: "daytime",
  sky_lounge: false,
  co_working: true,
  dining_room: true,
  cinema_room: false,
  rooftop_terrace: true,
  parking: false,
  bike_storage: true,
  pet_policy: "No pets",
  other_amenities: [
    "Three co-working lounges",
    "Shared kitchen on each floor",
    "Thames-side setting",
    "Community events programme",
    "All-bills-inclusive",
  ],
  overall_tier: "decent",
};
nodeLimehouse.architecture = {
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "Historic Thames-side warehouse converted for co-living. Exposed-brick and industrial-character interiors; modern fit-out inside the preserved envelope. Setting > form — the Thames frontage is the defining quality.",
};
nodeLimehouse.long_form = {
  full: "Node Limehouse is Node Living's newest London co-living property, set within a historic warehouse directly on the Thames in Limehouse. Private studios with kitchenette (fridge + hob + combi microwave), ensuite bathroom, fully-furnished. Shared fully-equipped kitchens on each floor (the canonical midpoint 'average' kitchen experience in the dataset), three co-working lounges inside the building, communal outdoor areas, and regular community events. All-bills-inclusive licence: utilities, Wi-Fi, and council tax covered. Studios from £1,742/month. 3-month minimum stay. Limehouse DLR (1 stop from Canary Wharf, 2 from Tower Hill) is 6 minutes walk; the Thames Path runs along the building. Licence-exempt from RRA — Node's operator-set qualification rules are grad-visa-viable with minimal referencing.",
  living_experience: "Residents consistently praise the natural light, storage, community events, and the Thames-adjacent setting. The primary complaint thread is that prices skew slightly high for the unit size. Lighter amenity than ARK Canary Wharf (no pool, no gym) but the warehouse character and Thames frontage pull their own weight on daily-life quality.",
  notable_features: "Historic Thames-side warehouse conversion (genuine character); three co-working lounges inside the building; shared floor-kitchen model mitigates the studio kitchenette; all-bills-inclusive; 3-month minimum; licence-exempt qualification; direct Thames Path access.",
};
nodeLimehouse.resident_signal = {
  summary: "Thin review pool — Node Limehouse is Node's newer London building. Trustpilot + HomeViews company-level signal is mostly positive: natural light, storage, and community events praised; price point for the studio size noted as expensive.",
  common_praise: [
    "Thames-side warehouse setting",
    "Community events programme",
    "Three co-working lounges inside the building",
    "Natural light and storage design",
  ],
  common_complaints: [
    "Price-for-size perceived as high",
    "No in-building gym",
  ],
};

const poplarBlackwall: Area = {
  id: "poplar-blackwall",
  name: "Poplar / Blackwall",
  aliases: ["Poplar", "Blackwall", "London City Island", "Aspen Way"],
  borough: "Tower Hamlets",
  postcodes: ["E14"],

  headline:
    "Canary Wharf's lower-cost transition zone with DLR and Jubilee access. Ballymore's London City Island anchors the area. Adjacent to Canary Wharf without the premium pricing.",
  preview:
    "Poplar DLR and Blackwall DLR stations sit in the transition zone between Canary Wharf and the Limehouse/Bow corridor. Ballymore's London City Island is the headline development. Demographics: Poplar ward 43% aged 20-39. The area fills the gap between Canary Wharf's high-end coverage and the wider Tower Hamlets residential grain.",

  long_form: {
    full: "Poplar / Blackwall occupies the transition zone south-east of Canary Wharf — close enough to benefit from Canary Wharf's infrastructure and employment but at a meaningfully lower price floor. The DLR provides the primary transport spine, with Poplar station offering DLR interchange and Jubilee at Canary Wharf walkable. Ballymore's London City Island is the headline project — a self-contained residential island on the Leamouth Peninsula. Telford Homes has delivered multiple BTS projects in the area. The candidate list has the Canary Wharf entry covering the high end but nothing picking up this transition zone, which is a real gap in the dataset.",
    history: "Historic docklands area. Poplar was heavily bombed in WWII and rebuilt with council estates. Canary Wharf development in the 1990s began the transformation of the adjacent area.",
    vibe: "Transitional. Between Canary Wharf's glass towers and Tower Hamlets' residential grain. London City Island has a more self-contained island feel.",
    weekday: "A Tuesday at 7pm: DLR busy with Canary Wharf commuters; London City Island restaurants active; Poplar High Street quieter.",
    weekend: "A Saturday: London City Island draws visitors; broader Poplar is residential and quiet.",
    notable: "London City Island (Ballymore); English National Ballet HQ on London City Island; Poplar DLR interchange.",
    croydon_comparison: "Poplar / Blackwall delivers Canary Wharf adjacency at a lower price than the Wharf itself, with DLR connectivity. Less characterful than Croydon's town-centre grain but stronger employment-hub proximity.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "DLR", type: "dlr" },
      { name: "Jubilee", type: "tube" },
    ],
    primary_stations: [
      { name: "Poplar", lines: ["DLR"], walk_minutes_from_centre: 5 },
      { name: "Blackwall", lines: ["DLR"], walk_minutes_from_centre: 8 },
      { name: "East India", lines: ["DLR"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 15, canary_wharf: 5, soho_fitzrovia: 25, kings_cross_shoreditch: 20 },
    multi_cluster_score: 3,
    redundancy_score: 2,
    notes: "Poplar DLR is a junction station — multiple DLR branches converge (Bank/Tower Gateway north, Lewisham south via Canary Wharf, Stratford north-east, Beckton east). This gives good destination coverage but all on the DLR's single lightweight infrastructure. Jubilee + Elizabeth at Canary Wharf (12 min walk) are the genuine fallback. New DLR rolling stock by 2026 improves capacity. Thamesmead DLR extension through Silvertown opens 2032 — post-window. For commuter-grade resilience, DLR is weaker than tube but the Canary Wharf walkability largely compensates for addresses on the Blackwall / London City Island side.",
    sources: [
      { url: "https://tfl.gov.uk/modes/dlr/improving-the-dlr", label: "TfL — DLR improvements", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 40 },
      { cohort: "30-39", pct: 27 },
      { cohort: "40-49", pct: 13 },
      { cohort: "50+", pct: 20 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 18 },
      { group: "White — other", pct: 25 },
      { group: "Asian or Asian British", pct: 38 },
      { group: "Black or Black British", pct: 12 },
      { group: "Mixed", pct: 4 },
      { group: "Other", pct: 3 },
    ],
    household_mix: [
      { type: "Single person", pct: 32 },
      { type: "Couple no children", pct: 22 },
      { type: "Couple with children", pct: 22 },
      { type: "Lone parent", pct: 12 },
      { type: "Shared household", pct: 10 },
      { type: "Other", pct: 2 },
    ],
    student_pct: 8,
    professional_renter_pct: 48,
    notes: "Split between two distinct ward demographics. Poplar ward: 43% aged 20-39, more settled Bangladeshi-community-weighted, includes Lansbury Estate social housing. Blackwall & Cubitt Town ward: 57.4% aged 20-39 — one of the youngest ward profiles in London, dominated by Canary Wharf-commuter professional renters in Ballymore stock (New Providence Wharf, London City Island) and high Asian professional population. The area reads as two overlaid populations: the Lansbury-legacy council-estate East End and the Canary Wharf overspill riverside-professional cohort.",
    sources: [
      { url: "https://www.met.police.uk/a/your-area/met/tower-hamlets/blackwall-and-cubitt-town/", label: "Met Police — Blackwall & Cubitt Town ward", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "moderate",
    crime_vs_borough: "average",
    crime_vs_croydon: "similar",
    after_dark_assessment: "Moderate and variable by sub-area. Blackwall & Cubitt Town (south side, Canary Wharf-facing) is safer — continuous commuter footfall, new-build concierge blocks, visible Ballymore estate management at London City Island, and proximity to Canary Wharf Group's heavily-patrolled estate. Poplar ward (north side) is more mixed — Lansbury Estate and Robin Hood Gardens legacy area has historic council-estate character with some ASB and drug-related concerns, and Poplar High Street has thinner footfall after 21:00. 478 crimes within half-mile of Poplar High Street in June 2025 (Medium). 862 incidents in Blackwall & Cubitt Town in January 2025 — higher count but the ward is geographically larger. Walking from Poplar DLR to London City Island at 22:00 is fine on the main routes; cutting through Lansbury Estate is not recommended. Women-walking-alone reports: London City Island and Blackwall edge positive; Poplar High Street mixed.",
    concerns: [
      "Lansbury Estate cut-throughs after dark (avoid, use main roads)",
      "Poplar High Street after 21:00 — thin footfall",
      "A12 underpass crossings (poorly-lit pedestrian routes)",
      "Robin Hood Gardens site during demolition transition",
    ],
    sources: [
      { url: "https://www.met.police.uk/a/your-area/met/tower-hamlets/poplar/", label: "Met Police — Poplar SNT", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: true,
    has_canal: false,
    has_dock: true,
    parks: [
      { name: "Bartlett Park", size_acres: 9, walk_minutes: 5, notes: "Substantial park in Poplar — Fizzy Poplar overlooks it" },
      { name: "Langdon Park", size_acres: 6, walk_minutes: 10, notes: "Local park to be enhanced by Teviot Estate regeneration" },
      { name: "Leamouth Peninsula green space", walk_minutes: 10, notes: "Thames-frontage landscaping around London City Island" },
      { name: "Canary Wharf estate parks (Jubilee Park, Westferry Circus)", walk_minutes: 15, notes: "Walkable to the heavily-landscaped Canary Wharf estate" },
      { name: "Mudchute Park & Farm", size_acres: 32, walk_minutes: 20, notes: "Isle of Dogs major green — city farm + park, DLR-accessible" },
    ],
    overall_assessment: "Decent for Zone 2 inner East London. Bartlett Park (9 acres) is a genuine local park. Thames frontage at London City Island gives river access. East India Dock and Blackwall Basin add water character. Canary Wharf's Jubilee Park and Westferry Circus are walkable in 15 min for residents who want manicured commercial green. Mudchute Park & Farm (32 acres) is DLR-accessible one stop. Less impressive than Mile End Park or Wapping's Thames Path but comparable to Whitechapel.",
  },
  amenities: {
    grocery: [
      { name: "Waitrose Canary Wharf (Jubilee Place)", type: "supermarket", walk_minutes: 12, notes: "Large-format quality — 12-min walk to Canary Wharf retail complex" },
      { name: "M&S Food Canary Wharf", type: "supermarket", walk_minutes: 12, notes: "Secondary quality option" },
      { name: "Tesco Express Poplar DLR", type: "convenience", walk_minutes: 2, notes: "Immediate daily convenience" },
      { name: "Asda Isle of Dogs", type: "superstore", walk_minutes: 15, notes: "Large-format budget" },
      { name: "London City Island retail units", type: "convenience + specialty", walk_minutes: 5, notes: "Restaurants and small shops inside the Ballymore scheme" },
    ],
    gyms: [
      { name: "Third Space Canary Wharf", type: "premium", walk_minutes: 15, notes: "Premium — pool, classes, full stack" },
      { name: "Virgin Active Canary Wharf", type: "premium", walk_minutes: 15, notes: "Alternative premium" },
      { name: "PureGym Canary Wharf", type: "budget", walk_minutes: 12, notes: "Budget tier, 24/7" },
      { name: "London City Island residents' gym", type: "residents-only", walk_minutes: 0, notes: "Ballymore private gym for residents" },
      { name: "Tiller Leisure Centre", type: "council", walk_minutes: 18, notes: "Pool and gym — Tower Hamlets council-run" },
    ],
    food_and_drink: [
      { name: "London City Island restaurants", type: "restaurants", walk_minutes: 5, notes: "Ballymore-curated dining (various)" },
      { name: "Canary Wharf estate dining", type: "restaurants", walk_minutes: 12, notes: "Full range of chains + independents — Coqbull, Tom's Kitchen, etc" },
      { name: "Poplar High Street cafes + takeaways", type: "casual", walk_minutes: 2, notes: "Basic tier, student/worker pricing" },
      { name: "Tea House Theatre (ENB)", type: "cafe-theatre", walk_minutes: 5, notes: "English National Ballet HQ has cafe" },
    ],
    health: [
      { name: "Barkantine Practice", type: "GP", walk_minutes: 10, notes: "Canary Wharf-area GP" },
      { name: "St Paul's Way Medical Centre", type: "GP", walk_minutes: 8, notes: "Poplar GP" },
      { name: "Boots Canary Wharf", type: "pharmacy", walk_minutes: 12, notes: "Extended hours" },
      { name: "Barts Health Canary Wharf Walk-in Centre", type: "walk-in clinic", walk_minutes: 12, notes: "NHS walk-in" },
    ],
    cultural: [
      { name: "English National Ballet HQ", type: "arts institution", walk_minutes: 5, notes: "Relocated to London City Island — rehearsal, performance, community engagement" },
      { name: "London Film School (on site)", type: "arts institution", walk_minutes: 5, notes: "Also moved to London City Island" },
      { name: "Canary Wharf cultural programme (art trail, events)", type: "public art", walk_minutes: 12, notes: "Heavy public art investment by Canary Wharf Group" },
      { name: "Poplar Idea Store", type: "library", walk_minutes: 8, notes: "Tower Hamlets modern library" },
      { name: "Chrisp Street Market", type: "market", walk_minutes: 10, notes: "Historic Lansbury market due for £300m regeneration" },
    ],
    notes: "Amenity is geographically bipolar — world-class when you walk 12 min to Canary Wharf, mid-tier in the immediate Poplar footprint. English National Ballet HQ at London City Island is a genuine cultural gain. Chrisp Street Market regeneration will materially change the Poplar side by 2027-28. Most residents treat Canary Wharf as their de facto high street.",
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "Active multi-scheme pipeline. Berkeley Heron Wharf — 643 homes Phase 1 completing Q2 2025, Riverside Club amenity (20m pool, spa, cinema). Taylor Wimpey Rivermark — 530 homes in 6 buildings on former Poplar Bus Depot, completing 2026. Ballymore London City Island — substantially complete with ongoing final-phase delivery. Swan/Sanctuary Blackwall Reach — £300m, 1,500+ homes, Haworth Tompkins masterplan, Phase 1A complete, Phase 1B and 2 in delivery. Poplar HARCA Teviot Estate regeneration — Phase 1 construction starting 2026, 6,000sqm new public space + 7,000sqm play space + A12/DLR connectivity improvements. Chrisp Street Market £300m regeneration. Tower Hamlets borough 52,000-home pipeline has significant Poplar allocation.",
    recent_milestones: [
      "2023 — English National Ballet HQ opening at London City Island",
      "2023 — London Film School relocation to London City Island",
      "2024 — Blackwall Reach Phase 1A completion",
      "2025 Q2 — Berkeley Heron Wharf Phase 1 completion",
    ],
    upcoming_milestones: [
      "2026 — Taylor Wimpey Rivermark completion (530 homes)",
      "2026 — Teviot Estate Phase 1 construction begins",
      "2026-2027 — Blackwall Reach Phase 1B (24-storey tower + 2x 10-storey buildings at Blackwall DLR public square)",
      "2026 — new DLR rolling stock fleet-complete",
      "2027 — Heron Wharf Phase 2",
    ],
    trajectory_through_2027: "Ascending — highest-trajectory area in this five-area batch. By August 2027 Poplar/Blackwall will have absorbed 2,500+ new homes (Rivermark 530 + Heron Wharf Phase 1 643 + Blackwall Reach deliveries + Teviot early phases + London City Island finishing). Demographic will be even more professional-renter-weighted on the Blackwall side. DLR rolling stock fully modern. Blackwall DLR public square will be delivered as new community focal point. Rent growth expected 5-6% annually — stronger than Tower Hamlets average. Canary Wharf maturation continues to drive adjacent overspill demand. Teviot Estate groundworks visible.",
    sources: [
      { url: "https://www.berkeleygroup.co.uk/developments/london/poplar/heron-wharf", label: "Berkeley — Heron Wharf", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.sanctuary.co.uk/about-sanctuary/development-and-regeneration/blackwall-reach", label: "Sanctuary — Blackwall Reach", type: "developer", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "unknown", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Not specifically assessed. Tower Hamlets borough context applies.",
        "1.2": "Modern rental stock — London City Island (Ballymore), Telford Homes BTS deliveries.",
        "1.3": "DLR + walkable Jubilee at Canary Wharf. Zone 2.",
        "1.4": "Ballymore + Telford Homes operate in the area. No Vertus, Quintain, or Get Living direct.",
        "1.5": "London City Island is stewarded by Ballymore. Broader Poplar is mixed.",
        "1.6": "Not in decline — ascending with Canary Wharf overspill.",
      },
      "moderate",
      "T1 moderate — T1.1 unknown, all other rows pass.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "unknown", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Walkable essentials are thin in the immediate area. Canary Wharf retail is walkable for some addresses.",
        "2.2": "Grocery access not yet researched.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Thames frontage at London City Island. Dock access.",
        "2.5": "Residential. No nightlife generator on-site. Quiet at night.",
        "2.7": "Poplar 43%, Blackwall & Cubitt Town 57.4% aged 20-39. Strong young-skew.",
      },
      "moderate",
      "T2 moderate — strong demographics and waterfront, but thin everyday amenity layer outside Canary Wharf.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "partial", "3.4": "partial", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "Active development — London City Island, ongoing Telford Homes delivery.",
        "3.2": "English National Ballet HQ at London City Island is a genuine cultural anchor but niche.",
        "3.3": "Identity is transitional — between Canary Wharf and Tower Hamlets residential. London City Island has a more distinct character.",
        "3.4": "15-minute completeness partial — transport and waterfront strong, everyday retail thin.",
        "3.5": "London City Island is architecturally interesting; broader Poplar is mixed.",
        "3.6": "Day/night rhythm is uneven — Canary Wharf commuter flow daytime, quiet evenings.",
      },
      "moderate",
      "T3 moderate — London City Island gives some identity anchor but the broader area is transitional.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "partial", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Canary Wharf in 5 minutes. City in 15. All anchors reachable under 25 minutes (Soho borderline). Reasonable multi-cluster coverage.",
        "5.2": "DLR primary with walkable Jubilee at Canary Wharf. 2/5 redundancy — DLR is lightweight infrastructure.",
        "5.3": "Ascending — Canary Wharf overspill and ongoing development.",
        "5.4": "Limited third-space culture. London City Island restaurants but no deep cafe/bookshop layer.",
      },
      "moderate",
      "T5 moderate — Canary Wharf proximity is the strength. DLR-only redundancy and thin third spaces are the gaps.",
    ),
    overall_grade: "C",
    grade_reasoning: "C-B grade — Canary Wharf adjacency at lower price is the value proposition. DLR-only infrastructure, transitional identity, and thin everyday amenity layer keep it in C territory. London City Island is the strongest individual project.",
  },

  projects: [
    londonCityIsland,
    blackwallReach,
    heronWharf,
    rivermark,
    fizzyPoplar,
    nodeLimehouse,
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default poplarBlackwall;
