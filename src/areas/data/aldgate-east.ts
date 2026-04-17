import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects ─────────────────────────────────────────────────────────
const goodmansFields = buildProject({
  id: "goodmans-fields", area_id: "aldgate-east", name: "Goodman's Fields", developer: "Berkeley", operator: "Berkeley", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Dominant residential scheme at Aldgate. Berkeley. Substantially complete. BTS with fragmented letting routes.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley specification — 2016-2020 new-build. Developer-quality, not jury-winning.",
    t4_1_amenity_package: "Strong amenity package per Berkeley standard — gym, concierge, lounges.",
    t4_4_signature_arch: "No jury win. Goodman's Fields is developer-grade (Make Architects had earlier press for Aldgate Square nearby).",
  },
});
goodmansFields.rental.price_transparency = "enquire";
goodmansFields.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/aldgate/goodmans-fields", label: "Goodman's Fields — Berkeley Group", type: "developer", accessed_date: "2026-04-12" },
];

const aldgatePlace = buildProject({
  id: "aldgate-place", area_id: "aldgate-east", name: "Aldgate Place", developer: "Barratt / Londonewcastle", operator: "Barratt", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Mixed-tenure development at Aldgate. Barratt / Londonewcastle.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Barratt modern specification.",
    t4_1_amenity_package: "Not yet researched.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
aldgatePlace.rental.price_transparency = "enquire";

const almaAldgate = buildProject({
  id: "alma-aldgate", area_id: "aldgate-east", name: "Alma", developer: "Barratt Homes (McLaren Construction)", operator: "Native Communities", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "blocked",
  preview: "159-unit BTR tower (26 storeys) operated by Native Communities. Completed 2024. Studio from GBP 2,950/mo, 1-bed from GBP 3,325/mo. Premium specification: comfort cooling, underfloor heating, wine cooler, smart appliances. The first purpose-built BTR in the Aldgate East area.",
  long_form_full: "Alma is a 26-storey triangular tower at the corner of Whitechapel High Street and Commercial Road, part of Aldgate Place Phase 2. 159 BTR units operated by Native Communities. Completed 2024. Premium pricing: studio from GBP 2,950/mo, 1-bed from GBP 3,325/mo, 2-bed from GBP 4,172/mo, 3-bed from GBP 5,488/mo. All apartments furnished with American-style fridge-freezer, wine cooler, comfort cooling, washer-dryer, underfloor heating in bathrooms, smart appliances. Winter gardens or terraces on all units. Concierge, gym, residents' lounge, roof terrace. BTR operator referencing — likely income-based but premium pricing implies income requirement of ~GBP 88,500/yr for a studio.",
  amenity_tier: "strong", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "2024 BTR new-build. Premium specification: comfort cooling, underfloor heating, wine cooler, smart appliances, winter gardens. High quality.",
    t4_1_amenity_package: "Concierge, gym, residents' lounge, reading areas, roof terrace. Strong for a 159-unit BTR.",
    t4_4_signature_arch: "Distinctive triangular tower form at a prominent intersection. No specific jury win sourced.",
  },
});
almaAldgate.rental.price_transparency = "listed";
almaAldgate.external_links = [
  { url: "https://alma-aldgate.co.uk/", label: "Alma — Native Communities", type: "operator", accessed_date: "2026-04-12" },
  { url: "https://www.native-communities.com/portfolio/alma/", label: "Alma — Native Communities portfolio", type: "operator", accessed_date: "2026-04-12" },
];

const perillaHouse = buildProject({
  id: "perilla-house", area_id: "aldgate-east", name: "Perilla House", developer: "unknown", operator: "unknown", building_type: "PRS", build_phase: "complete", tenure: ["rent"], realism: "unknown",
  preview: "Small residential scheme with modern studio apartments overlooking landscaped gardens in Aldgate. Limited data sourced — needs further research.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Described as modern studios. Unverified specification.",
    t4_1_amenity_package: "Landscaped gardens mentioned. Limited data.",
    t4_4_signature_arch: "No architectural press signal.",
  },
});

const theGateAldgate = buildProject({
  id: "the-gate-aldgate", area_id: "aldgate-east", name: "The Gate London City", developer: "The Gate", operator: "The Gate", building_type: "BTR", living_model: "apart-hotel", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Apart-hotel at 41 White Church Lane, 3 min from Aldgate East tube. From £1,900/month all-inclusive. Wi-Fi, gym, yoga, residents' lounge with free beverages. Hospitality licence — no referencing.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Apart-hotel specification. Modern.",
    t4_1_amenity_package: "Decent — gym, yoga studio, residents' lounge, free beverages.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
theGateAldgate.external_links = [
  { url: "https://www.thegate-london.com/", label: "The Gate London City", type: "operator", accessed_date: "2026-04-15" },
];
theGateAldgate.rental.price_transparency = "listed";
theGateAldgate.rental.prices = {
  studio: { min: 1900, max: 2400, currency: "GBP", per: "month" },
  bills_included: true,
  notes: "From £1,900/month all-inclusive at 28+ night long-stay rate. Card-only booking.",
};
theGateAldgate.rental.affordability = "comfortably-affordable";
theGateAldgate.building_quality = {
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "Apart-hotel studios at 41 White Church Lane, 3 min from Aldgate East. Kitchenette, en-suite, workspace.",
  kitchen_quality: "poor",
  heating_type: "communal",
  notes: "Apart-hotel kitchenette standard — minimal prep, no full oven.",
};
theGateAldgate.amenities = {
  pool: false,
  pool_notes: "",
  gym: true,
  gym_quality: "average",
  concierge: "24h",
  sky_lounge: false,
  co_working: false,
  dining_room: false,
  cinema_room: false,
  rooftop_terrace: false,
  parking: false,
  bike_storage: false,
  pet_policy: "Pets considered on application (hotel-style)",
  other_amenities: [
    "Yoga studio",
    "Residents' lounge with free beverages",
    "Free Wi-Fi",
  ],
  overall_tier: "decent",
};
theGateAldgate.architecture = {
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "Apart-hotel on White Church Lane — competent modern building, not a landmark.",
};
theGateAldgate.long_form = {
  full: "The Gate London City is an apart-hotel at 41 White Church Lane, 3 minutes walk from Aldgate East tube. Hospitality licence — no referencing, no credit checks, card-only booking. 28+ night long-stay rate from £1,900/month all-inclusive (Wi-Fi, bills, cleaning, gym, yoga). One of the few genuinely-under-envelope Zone 1 licence-exempt options in the dataset — included in the Wave 4 bridge tier of the shortlist.",
  living_experience: "Apart-hotel specification. Kitchenette-only cooking setup (no full oven), but all-inclusive pricing and 24h front desk compensate on simplicity.",
  notable_features: "Hospitality licence (no referencing); £1,900 all-in long-stay rate — rare under-envelope Zone 1 option; 3 minutes walk from Aldgate East; yoga studio + residents' lounge with free beverages.",
};
theGateAldgate.resident_signal = {
  summary: "Apart-hotel review signal via Booking.com / Google typically strong on design and hospitality-desk responsiveness; thin long-stay-specific data in HomeViews.",
  common_praise: [],
  common_complaints: [],
};

const aldgateEast: Area = {
  id: "aldgate-east",
  name: "Aldgate East",
  aliases: ["Aldgate", "Aldgate East / Aldgate"],
  borough: "Tower Hamlets",
  postcodes: ["E1"],

  headline:
    "Zone 1 edge with functionally indestructible transport — Circle, Met, District, H&C plus Liverpool Street (6 lines) walkable. Clean T1 pass. Peaking 2025-2026 as Goodman's Fields completes.",
  preview:
    "Aldgate East sits on the Zone 1 fringe with one of the highest redundancy scores in the entire dataset (5/5). Liverpool Street interchange alone gives 6 lines. Goodman's Fields (Berkeley) is the dominant residential scheme, substantially complete. The area straddles Tower Hamlets and City of London — safe, well-connected, but office-dominant at weekends which limits neighbourhood feel.",

  long_form: {
    full: "Aldgate East sits on the Zone 1 fringe where the Tower Hamlets residential grain meets the City of London's office core. Four tube lines serve the station itself (District, H&C, Circle, Metropolitan via the paired Aldgate station), with Liverpool Street's six-line interchange a 10-minute walk north. Tower Hill adds further District/Circle; Fenchurch Street adds c2c mainline. This gives the area the highest transport redundancy in the Flatbrowser dataset — genuinely indestructible, never a one-line outage from being cut off.\n\nThe residential delivery of the last decade is substantially complete. Berkeley's Goodman's Fields (864 homes, 18m pool, spa, 2 acres of gardens) is the dominant scheme. Barratt/Londonewcastle's Aldgate Place (463 homes, Allies & Morrison) anchors the western corner. Native Communities' Alma tower (159 BTR, 2024) adds the first purpose-built BTR tower in the area — premium priced at £2,950+ for a studio. The Gate London City provides apart-hotel licence-route coverage for licence-exempt renters at £1,900 all-inclusive. Most rentals, however, are fragmented through individual landlords via letting agents — the area is BTS-heavy, BTR-light.\n\nDemographics split along the Tower Hamlets / City line. The Spitalfields & Banglatown ward (Tower Hamlets side) is 53% aged 20-39 with Bangladeshi community at 37-41% and Muslim population at 45% — one of the most distinctive demographic footprints in central London. The Portsoken ward (City side) is 28% Bangladeshi with lower residential density and an office-dominant grain that empties at 19:00. Most new residents are young professional renters; the Bangladeshi community is older and longer-resident.\n\nSafety is solid. City-side addresses have continuous office footfall and Security Group patrols — essentially risk-free after dark. Tower Hamlets side sits inside stewarded concierge-access blocks. Whitechapel High Street is busy and lit; Commercial Street south and Brick Lane cut-throughs are the only stretches that thin out after midnight. Met Police data shows Spitalfields & Banglatown at borough-average crime; Portsoken well below. The single biggest daily-life weakness is green space — Aldgate Square is a plaza, Altab Ali Park is a ceremonial pocket, and any real green requires a 15+ min walk or two tube stops.\n\nAmenity density is exceptional for gym options (PureGym, The Gym Group, Nuffield Health, Third Space within 12 min, F45) and outstanding for food and culture (Brick Lane curry, Spitalfields Market food stalls, Whitechapel Gallery, Barbican by tube). The weekend vibe is bifurcated — Tower Hamlets side stays busy with Brick Lane/Spitalfields visitors; Portsoken/City side empties out entirely, giving the 'Canary Wharf at weekends' hollow feeling on some streets.",
    history: "Aldgate is one of the original Roman gates to the City of London ('old gate' — Aldgate dates from at least the 10th century). The area served as the eastern approach to the City and accumulated waves of immigrant settlement from the 17th century onwards: Huguenot silk-weavers in Spitalfields, Jewish refugees escaping Eastern European pogroms in the 19th century (synagogues like Sandys Row remain), and Bangladeshi settlement from the 1970s onwards. Brick Lane's curry corridor and Altab Ali Park (renamed in 1998 after a Bangladeshi man murdered there in a racist attack in 1978) both encode that history. The modern regeneration arc starts in the 1990s with Aldgate Place's first phases and gathers pace through the 2010s: Goodman's Fields (Berkeley) delivered in phases from 2012 onwards; Aldgate Square's 2018 gyratory removal replaced hostile traffic with a pedestrian plaza; Alma (2024) marks the first dedicated BTR tower. The area is now 'arrived' — further regeneration is minor infill, with Tower Hamlets' borough-wide 52,000-home pipeline and the Barts Life Sciences Cluster (£800m at Whitechapel North) providing the next external growth tailwinds rather than on-site reshaping.",
    vibe: "City fringe in the truest sense — weekdays buzzing with office workers crossing between Aldgate's glass towers and Spitalfields' restored warehouses, weekends split between the Brick Lane / Spitalfields crowds and the eerie quiet of the Portsoken side where offices empty. Brick Lane is the cultural spine: curry corridor on the lower half, Sunday Upmarket and vintage shops on the upper half, 24-hour bagel shops at the northern end. Spitalfields Market's covered hall carries lunch trade all week and weekend crowds. The Tower Hamlets residential streets (Leman Street, Prescot Street, Royal Mint Street) read quieter — mid-rise new-build concierge blocks interspersed with Georgian terraces.",
    weekday: "A Tuesday at 08:00: commuter surge at Aldgate East and Liverpool Street, coffee queues at Notes and Department of Coffee. By 12:30, lunch scrum at Spitalfields Market food stalls and the Brick Lane curry houses doing bento trays. By 19:00, office workers dispersing; the Culpeper rooftop fills in summer; Dishoom's queue (Shoreditch but close) runs long. By 22:00 the City side is empty but the Tower Hamlets side (Brick Lane, Commercial Street north) stays active with bar trade until midnight.",
    weekend: "A Saturday: Brick Lane heaving with vintage shoppers, curry house touts, street food crowds. Spitalfields Market Sunday Upmarket draws heavy footfall. Aldgate Square sees picnicking in summer. The Portsoken / City side is almost completely empty — a stark Canary-Wharf-at-weekends hollow. Hipster crawls hit the Culpeper, the Ten Bells, Old Truman Brewery. Whitechapel Gallery does strong weekend visitor numbers. Tube still busy enough to feel lively.",
    notable: "Whitechapel Gallery (contemporary art). Brick Lane (curry + street art + Sunday Upmarket). Spitalfields Market (covered historic market). Altab Ali Park (memorial). Aldgate Square (post-gyratory plaza). Liverpool Street interchange (the transport trump card). Barts/Royal London Hospital (eastern edge). St Botolph's Aldgate (Christopher Wren precursor church).",
    croydon_comparison: "Categorically safer than East Croydon after dark — City-side addresses have continuous office footfall and Security Group patrols, Tower Hamlets side sits inside stewarded concierge blocks. No station-forecourt begging or late-night aggression that East Croydon carries. Café density and quality vastly stronger — Brick Lane / Spitalfields / Old Street cluster is London's densest specialty-coffee corridor. Gym density exceptional: PureGym, The Gym Group, Nuffield, Third Space, F45 all within 12-min walk vs Croydon's PureGym-and-little-else. Zone 1 (vs Croydon Zone 5) with 5 min to Bank, 10 to Soho, 12 to Canary Wharf — transport advantage is obliterating. Price differential: a fragmented-landlord 1-bed at Goodman's Fields runs £2,400-2,700 vs Ten Degrees' ~£2,280 contractual / ~£3,000 effective — similar or slightly higher headline but vastly better location. Alma BTR is premium (£2,950+ studio) out of envelope; The Gate apart-hotel is £1,900 all-in and under envelope. The trade-off vs Croydon: no tram/Overground rail mainline to Gatwick, no Whitgift / Centrale shopping scale, no meaningful park within 10-min walk.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "District", type: "tube" },
      { name: "Hammersmith & City", type: "tube" },
      { name: "Circle", type: "tube" },
      { name: "Metropolitan", type: "tube" },
      { name: "Central", type: "tube" },
      { name: "Elizabeth", type: "elizabeth" },
    ],
    primary_stations: [
      { name: "Aldgate East", lines: ["District", "Hammersmith & City"], walk_minutes_from_centre: 0 },
      { name: "Aldgate", lines: ["Circle", "Metropolitan"], walk_minutes_from_centre: 3 },
      { name: "Liverpool Street", lines: ["Central", "Circle", "Metropolitan", "Hammersmith & City", "Elizabeth", "National Rail"], walk_minutes_from_centre: 10 },
      { name: "Tower Hill", lines: ["District", "Circle"], walk_minutes_from_centre: 8 },
      { name: "Fenchurch Street", lines: ["c2c National Rail"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 5, canary_wharf: 12, soho_fitzrovia: 10, kings_cross_shoreditch: 8 },
    multi_cluster_score: 5,
    redundancy_score: 5,
    notes: "Functionally indestructible transport. Liverpool Street alone gives 6+ lines within 10-min walk. Aldgate/Aldgate East stations both operate standard service hours; no night tube on Circle/District/H&C/Met but Central and Elizabeth run late. If Aldgate East is shut, Aldgate is 3 min away; if both shut, Liverpool Street is 10 min. The area is never cut off.",
    sources: [
      { url: "https://tfl.gov.uk/tube-dlr-overground/status/", label: "TfL status and JourneyPlanner", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 34 },
      { cohort: "30-39", pct: 32 },
      { cohort: "40-49", pct: 14 },
      { cohort: "50+", pct: 20 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 24 },
      { group: "White — other", pct: 22 },
      { group: "Asian or Asian British", pct: 41 },
      { group: "Black or Black British", pct: 5 },
      { group: "Mixed", pct: 4 },
      { group: "Other", pct: 4 },
    ],
    household_mix: [
      { type: "Single person", pct: 40 },
      { type: "Couple no children", pct: 22 },
      { type: "Couple with children", pct: 15 },
      { type: "Lone parent", pct: 8 },
      { type: "Shared household", pct: 13 },
      { type: "Other", pct: 2 },
    ],
    student_pct: 10,
    professional_renter_pct: 48,
    notes: "Bifurcated demographic — Spitalfields & Banglatown (Tower Hamlets side) is 53% aged 20-39 with Bangladeshi community at 37-41%, Muslim 45%. Portsoken (City side) is 28% Bangladeshi, 33% Muslim, with lower residential density and more office-dominant. The combined footprint reads as young-skew professional mixed with established Bangladeshi community — a distinctive two-layer demographic unusual for Zone 1.",
    sources: [
      { url: "https://www.towerhamlets.gov.uk/Documents/Borough_statistics/Ward_profiles/SFBT-Ward-Profile.pdf", label: "Tower Hamlets Spitalfields & Banglatown ward profile", type: "council", accessed_date: "2026-04-17" },
      { url: "https://crystalroof.co.uk/report/ward/portsoken-city-of-london/demographics", label: "Crystal Roof — Portsoken demographics", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "average",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "City-side addresses (Portsoken) are exceptionally safe after dark — continuous office footfall, visible Security Group patrols, excellent lighting on Leadenhall Street / Aldgate High Street. Tower Hamlets side is safe within the stewarded Goodman's Fields / Aldgate Place concierge-access blocks. Walking Whitechapel High Street at 22:00 is busy but not threatening — lit and trafficked. Commercial Street south of the station is the thinnest stretch after midnight. Women-walking-alone reports: acceptable on main roads, use main roads not cut-throughs.",
    concerns: [
      "Brick Lane cut-throughs at closing time (pub crawl overspill)",
      "Commercial Street south after midnight is quieter than foot traffic suggests",
    ],
    sources: [
      { url: "https://www.met.police.uk/a/your-area/met/tower-hamlets/spitalfields-and-banglatown/", label: "Met Police — Spitalfields & Banglatown SNT", type: "met-police", accessed_date: "2026-04-17" },
      { url: "https://www.met.police.uk/a/your-area/city-of-london/portsoken/", label: "Met Police — Portsoken", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Aldgate Square", walk_minutes: 2, notes: "~0.6 acre pedestrianised plaza, not a park — benches, public art, gyratory removed 2018" },
      { name: "Altab Ali Park", size_acres: 1.2, walk_minutes: 5, notes: "Small memorial park on former St Mary Matfelon churchyard — quiet, some trees, ceremonial rather than recreational" },
      { name: "Postman's Park", size_acres: 0.7, walk_minutes: 15, notes: "Historic plaque garden — character but tiny" },
      { name: "Victoria Tower Gardens / St James's Park", walk_minutes: 25, notes: "Real parks are a tube ride away — Victoria Park is 20 min via bus; the nearest substantial green is Mile End Park (2 stops on H&C)" },
    ],
    overall_assessment: "Absent water, near-absent green. Aldgate Square is a plaza with paving and a handful of trees; Altab Ali Park is ceremonial and small; there is no meaningful park within the 10-min footprint. Residents who need green must walk to Spitalfields City Farm (15 min), bus to Victoria Park (20 min), or tube to Mile End Park (8 min). This is the area's single biggest daily-life weakness.",
  },
  amenities: {
    grocery: [
      { name: "Sainsbury's Local — Whitechapel High Street", type: "supermarket", walk_minutes: 3, notes: "Main daily-shop anchor" },
      { name: "Tesco Express — Leman Street", type: "convenience", walk_minutes: 4, notes: "Second tier" },
      { name: "Co-op — Goodman's Fields", type: "convenience", walk_minutes: 2, notes: "Inside the Berkeley scheme" },
      { name: "Spitalfields Market grocers", type: "market", walk_minutes: 8, notes: "Weekday produce stalls, quality mixed" },
      { name: "Waitrose — Tower 42 / Leadenhall", type: "supermarket", walk_minutes: 12, notes: "Quality grocer within reach" },
    ],
    gyms: [
      { name: "PureGym Aldgate", type: "budget", walk_minutes: 4, notes: "24/7, standard PureGym specification" },
      { name: "Third Space City Worship Street", type: "premium", walk_minutes: 12, notes: "Real Third Space — pool, classes, full stack" },
      { name: "The Gym Group Aldgate", type: "budget", walk_minutes: 5, notes: "Secondary budget option" },
      { name: "Nuffield Health City Aldgate", type: "mid-premium", walk_minutes: 7, notes: "Pool, sauna, classes" },
      { name: "F45 Aldgate", type: "boutique", walk_minutes: 6, notes: "HIIT/functional" },
    ],
    food_and_drink: [
      { name: "Brick Lane curry corridor", type: "restaurants", walk_minutes: 8, notes: "Dishoom City was here before relocation; Tayyabs-tier curry houses" },
      { name: "Spitalfields Market food stalls", type: "street food", walk_minutes: 8, notes: "Strong lunch scene" },
      { name: "Hawksmoor Guildhall / Gentlemen Baristas", type: "cafe / restaurant", walk_minutes: 10, notes: "City-side quality" },
      { name: "The Culpeper", type: "gastropub", walk_minutes: 5, notes: "Rooftop garden, local" },
    ],
    health: [
      { name: "Jubilee Street Practice", type: "GP", walk_minutes: 8, notes: "Tower Hamlets side" },
      { name: "Royal London Hospital (Whitechapel)", type: "hospital", walk_minutes: 12, notes: "Major A&E" },
      { name: "Boots Whitechapel", type: "pharmacy", walk_minutes: 5, notes: "Extended hours" },
    ],
    cultural: [
      { name: "Whitechapel Gallery", type: "gallery", walk_minutes: 4, notes: "Major contemporary art institution" },
      { name: "Brick Lane", type: "district", walk_minutes: 5, notes: "Markets, street art, bars, vintage" },
      { name: "Spitalfields Market", type: "market", walk_minutes: 8, notes: "Covered historic market + Sunday upmarket" },
      { name: "Barbican Centre", type: "arts centre", walk_minutes: 18, notes: "Via Liverpool Street tube link" },
    ],
    notes: "Amenity strength is cultural adjacency (Brick Lane, Spitalfields, Whitechapel Gallery all walkable). Gym density is outstanding for Zone 1. The missing piece is green — absent. Food anchors weekend life more than green does.",
  },
  regeneration: {
    status: "complete",
    investment_pipeline: "Major residential delivery (Goodman's Fields, Aldgate Place, Alma) substantially complete. Aldgate Square public realm delivered 2018. Tower Hamlets' 52,000-home borough-wide pipeline (March 2026) includes some Whitechapel overspill into Aldgate East corridor but no named flagship here. Barts Life Sciences Cluster at Whitechapel North (£800m, 5,000+ jobs) is 10-min walk and will strengthen the eastern edge.",
    recent_milestones: [
      "2018 — Aldgate Square gyratory removal + pedestrianisation",
      "2022 — Goodman's Fields Phase 5 delivery",
      "2024 — Alma (Native Communities, 159 BTR units) completion",
    ],
    upcoming_milestones: [
      "2026-2027 — Minor residential infill (Aldgate Place Phase 2 completion)",
      "2026-2030 — Barts Life Sciences Cluster phased delivery (Whitechapel adjacency)",
    ],
    trajectory_through_2027: "Peaking and stabilising. By August 2027 Aldgate East will be in steady-state — Goodman's Fields fully stabilised, Alma tenanted, Aldgate Square mature. The Barts Life Sciences Cluster opening to the east will push professional renter demand up but not dramatically reshape the area itself. This is a 'arrived' area, not an 'ascending' one. Rent trajectory: steady 2-4% annual growth, no step-change.",
    sources: [
      { url: "https://www.towerhamlets.gov.uk/News_events/2026/March/Tower-Hamlets-moves-to-unlock-52000-home-pipeline.aspx", label: "Tower Hamlets Local Plan — 52,000-home pipeline", type: "council", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Clean pass. City side exceptionally safe. Tower Hamlets side safe in the stewarded residential blocks.",
        "1.2": "Goodman's Fields, Aldgate Place — modern 2016-2020 new-build stock.",
        "1.3": "Zone 1 with functionally indestructible transport. Average 9 min to anchors.",
        "1.4": "BTS stock via letting agents. No dominant BTR operator.",
        "1.5": "Aldgate Square is excellent public realm. Stewarded developments.",
        "1.6": "Not in decline — peaking and stable.",
      },
      "strong",
      "T1 clean pass on all six rows. Transport is the standout — highest redundancy in the dataset.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "unknown", "2.2": "unknown", "2.3": "unknown", "2.4": "fail", "2.5": "unknown", "2.7": "pass" },
      {
        "2.4": "Absent-to-nominal green. No meaningful park in range; Aldgate Square is a plaza. T2.4 partial-to-fail.",
        "2.7": "Spitalfields & Banglatown 20-39 53%. Young demographic pass on the Tower Hamlets side.",
      },
      "moderate",
      "T2 partially populated. Green is a clear weakness; demographic skew is strong.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "partial", "3.4": "unknown", "3.5": "unknown", "3.6": "partial" },
      {
        "3.1": "Minor mid-scale ongoing, no masterplan. Peaking.",
        "3.2": "Brick Lane, Spitalfields Market, Whitechapel Gallery walkable. Strong cultural adjacency.",
        "3.3": "'Aldgate' has recognition but as a location, not a destination. Identity is City fringe, not standalone.",
        "3.6": "Office-dominant at weekends — echoes the Canary Wharf pattern at smaller scale.",
      },
      "moderate",
      "T3 moderate. Strong cultural adjacency (Brick Lane, Spitalfields) but the area itself is not a destination. Weekend emptiness is a real complaint.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "unknown", "5.4": "unknown" },
      {
        "5.1": "All 4 anchors ≤25 min. Average 9 min. Emphatic pass — best in the dataset.",
        "5.2": "Redundancy 5/5 — functionally indestructible.",
      },
      "strong",
      "T5 strong. Best multi-cluster score in the dataset. Transport is exceptional.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — exceptional transport (best anchor coverage and redundancy in the dataset) offset by absent green, weekend emptiness, no dominant BTR operator, and peaking regeneration. A pure connectivity play.",
  },

  projects: [goodmansFields, aldgatePlace, almaAldgate, perillaHouse, theGateAldgate],

  external_links: [
    { url: "https://www.berkeleygroup.co.uk/developments/london/aldgate/goodmans-fields", label: "Goodman's Fields (Berkeley)", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default aldgateEast;
