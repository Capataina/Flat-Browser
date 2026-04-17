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
      { name: "Mildmay line", type: "overground" },
      { name: "Weaver line", type: "overground" },
      { name: "Greater Anglia (Liverpool St mainline)", type: "rail" },
    ],
    primary_stations: [
      { name: "Hackney Central", lines: ["Mildmay line"], walk_minutes_from_centre: 3 },
      { name: "Hackney Downs", lines: ["Weaver line", "Greater Anglia"], walk_minutes_from_centre: 6 },
      { name: "London Fields", lines: ["Weaver line"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 22, canary_wharf: 24, soho_fitzrovia: 28, kings_cross_shoreditch: 18 },
    multi_cluster_score: 2,
    redundancy_score: 4,
    notes: "Genuine three-line redundancy despite no tube. Greater Anglia from Hackney Downs is the fastest City route (8 min to Liverpool St). Weaver was previously London Overground East London Line; Mildmay was previously NLL. Renamed November 2024.",
    sources: [
      { url: "https://tfl.gov.uk/tube-dlr-overground/status/", label: "TfL line status", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://www.greateranglia.co.uk/", label: "Greater Anglia — Hackney Downs", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 22 },
      { cohort: "30-39", pct: 25 },
      { cohort: "40-49", pct: 15 },
      { cohort: "50+", pct: 21 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 36 },
      { group: "White — other", pct: 19 },
      { group: "Asian or Asian British", pct: 8 },
      { group: "Black or Black British", pct: 20 },
      { group: "Mixed", pct: 11 },
      { group: "Other ethnic group", pct: 6 },
    ],
    household_mix: [
      { type: "Single person", pct: 30 },
      { type: "Couple no children", pct: 22 },
      { type: "Couple with children", pct: 17 },
      { type: "Lone parent", pct: 11 },
      { type: "Shared household", pct: 15 },
      { type: "Other", pct: 5 },
    ],
    student_pct: 9,
    professional_renter_pct: 44,
    notes: "The 30-39 cohort nominally leads but 18-39 together is ~47%. Strong professional-renter density. Notable creative-and-media occupation concentration in Census occupation data — consistent with the area's reputation.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "moderate",
    crime_vs_borough: "average",
    crime_vs_croydon: "safer",
    after_dark_assessment: "Mare Street is lit and active until ~23:00 — restaurants, Hackney Picturehouse, late-night cafes keep the high street busy. Side streets off Mare Street (Amhurst, Graham, Shacklewell) thin out and are residentially quiet rather than threatening. Hackney Downs station forecourt is the weakest point — the Greater Anglia last trains create low-footfall windows. Ward is calmer than Dalston but burglary remains the distinctive crime pattern.",
    concerns: [
      "Hackney Downs station forecourt, late evening — low-footfall window between last trains",
      "Lower Clapton Road / Lea Bridge Roundabout — edge of ward, historically flagged",
      "Ground-floor residential burglary concentration across the borough",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police/hackney-central/", label: "Met Police — Hackney Central ward", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: true,
    has_dock: false,
    parks: [
      { name: "London Fields", size_acres: 31, walk_minutes: 10, notes: "Lido (heated outdoor pool), BBQ area, BMX, cricket nets; peak-intensity weekend park." },
      { name: "Well Street Common", size_acres: 7, walk_minutes: 8, notes: "Residential common, low-intensity." },
      { name: "Hackney Downs", size_acres: 41, walk_minutes: 6, notes: "Broad flat common; tennis, basketball, weekend football." },
      { name: "Victoria Park (east edge)", size_acres: 218, walk_minutes: 20, notes: "Major Regency park; reachable by cycle in 8 min." },
    ],
    overall_assessment: "Strong green layer — Hackney Downs on the doorstep, London Fields and Well Street Common close, Victoria Park cyclable. Regent's Canal reachable in 10 minutes via London Fields. For a Zone 2 high-street-centred ward this is above-average green density.",
    sources: [
      { url: "https://hackney.gov.uk/parks", label: "Hackney Council — parks register", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Marks & Spencer Foodhall (Morning Lane)", type: "supermarket", walk_minutes: 5, notes: "Full-range M&S Food at Hackney Walk." },
      { name: "Tesco Metro (Morning Lane)", type: "supermarket", walk_minutes: 4, notes: "Main weekly-shop anchor." },
      { name: "Sainsbury's (Dalston Square) / Sainsbury's Local (Mare St)", type: "supermarket", walk_minutes: 5, notes: "Two options within 5 min." },
      { name: "Broadway Market (Saturdays)", type: "farmers market", walk_minutes: 10, notes: "Weekend fresh-food market; destination-tier." },
      { name: "Netil Market", type: "street market", walk_minutes: 12, notes: "Saturday food-and-independent market." },
    ],
    gyms: [
      { name: "Third Space Mare Street (opened 2024)", type: "premium chain", walk_minutes: 3, notes: "Premium-tier chain flagship for East London; pool, classes, spa." },
      { name: "PureGym Hackney Mare Street", type: "budget chain", walk_minutes: 4, notes: "24-hour budget option." },
      { name: "The Gym Group Hackney", type: "budget chain", walk_minutes: 8, notes: "24-hour budget alternative." },
      { name: "Britannia Leisure Centre (slightly south)", type: "public leisure", walk_minutes: 15, notes: "Refurbished council leisure centre with pool." },
      { name: "Kingdom BJJ / London Shootfighters East", type: "martial arts", walk_minutes: 15, notes: "Active BJJ / MMA scene on the ward edge." },
    ],
    food_and_drink: [
      { name: "Pidgin (Wilton Way)", type: "Michelin restaurant", walk_minutes: 10, notes: "Michelin-starred tasting menu." },
      { name: "Hackney Church Brew Co.", type: "brewery/taproom", walk_minutes: 3, notes: "Church-conversion brewery." },
      { name: "Chatsworth Road (Clapton edge)", type: "high street", walk_minutes: 15, notes: "Independent high street; Saturday street market." },
      { name: "Mare Street Market", type: "food hall/bar", walk_minutes: 4, notes: "All-day venue, DJ/events evenings." },
      { name: "E5 Bakehouse", type: "bakery/cafe", walk_minutes: 10, notes: "Destination bakery under London Fields arches." },
    ],
    health: [
      { name: "Well Street Surgery", type: "GP", walk_minutes: 5, notes: "NHS GP, new registrations catchment-dependent." },
      { name: "Elsdale Street Surgery", type: "GP", walk_minutes: 7, notes: "Alternative NHS GP." },
      { name: "Homerton University Hospital", type: "hospital", walk_minutes: 20, notes: "Major NHS hospital with A&E." },
      { name: "Boots Pharmacy (Mare Street)", type: "pharmacy", walk_minutes: 3, notes: "Full-service." },
    ],
    cultural: [
      { name: "Hackney Picturehouse", type: "cinema", walk_minutes: 3, notes: "3-screen arthouse cinema, cafe-bar." },
      { name: "Hackney Empire", type: "theatre", walk_minutes: 3, notes: "Historic variety theatre; pantomime, comedy, music." },
      { name: "Hackney Central Library (Hackney Museum)", type: "library/museum", walk_minutes: 3, notes: "Municipal library + local history museum." },
      { name: "Round Chapel", type: "music venue", walk_minutes: 12, notes: "Victorian chapel used for live recordings and classical." },
      { name: "Moth Club", type: "music venue", walk_minutes: 5, notes: "Gold-tinselled live music venue." },
    ],
    notes: "Amenity density is one of the strongest in East London — the Third Space Mare Street addition in 2024 plugged the last meaningful premium-gym gap. The Mare Street / Morning Lane / Chatsworth Road high-street spine is genuinely walkable-complete.",
  },
  regeneration: {
    status: "active",
    investment_pipeline: "Town Hall Square masterplan (Peabody, ~300 homes + civic public realm). Hackney Walk (fashion outlet cluster on Morning Lane) continuing to mature. Continued Hackney Council investment in Mare Street public realm and Narrow Way pedestrianisation. Not a single named billion-pound masterplan — the area regenerates organically rather than via one anchor scheme.",
    recent_milestones: [
      "2024 — Third Space Mare Street opened",
      "2024 — Overground renamed (Mildmay + Weaver); branding and wayfinding refreshed",
      "2025 — Town Hall Square Phase 1 residential completions",
    ],
    upcoming_milestones: [
      "2026 — Town Hall Square public realm completion",
      "2026-2027 — Morning Lane phase residential + retail",
      "2027 — Hackney Central bus interchange upgrade",
    ],
    trajectory_through_2027: "Stable-to-ascending. The area is already mature rather than mid-regeneration, so the trajectory is incremental rather than transformational. By August 2027 expect the Town Hall Square public realm finished, the Mare Street high-street spine more pedestrianised, and a slightly denser young-professional presence. No step-change event, but no regression.",
    sources: [
      { url: "https://hackney.gov.uk/town-hall-square", label: "Hackney Council — Town Hall Square", type: "council", accessed_date: "2026-04-17" },
    ],
  },

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
    // RESEARCH: Peabody Bohemia Place / Town Hall Square — Peabody market-rent BTR.
    // Peabody is a housing association with market-rent arm. Referencing provider: UNVERIFIED.
    // Peabody tends to use in-house referencing. International tenants: case-by-case.
    // AGREEMENT: ast
    // REFERENCING: unknown (likely in-house)
    // REALISM: unknown — Peabody referencing opacity
    // COST_TIER: UNVERIFIED
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
    // RESEARCH: Hackney Gardens — 58-unit boutique BTS. Rental via individual landlords.
    // REALISM: unknown — individual landlord, standard AST, standard credit check
    // COST_TIER: mid-range (estimated for Hackney Central)
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

// ── Project external links & price transparency ──────────────────────────
const peabodyBohemia = hackneyCentral.projects.find(p => p.id === "hackney-central-peabody")!;
peabodyBohemia.external_links = [
  { url: "https://www.peabodynewhomes.co.uk/developments/wisteria-apartments/", label: "Peabody — Wisteria Apartments (nearby)", type: "developer", accessed_date: "2026-04-12" },
];
peabodyBohemia.rental.price_transparency = "enquire";

const hackneyGardens = hackneyCentral.projects.find(p => p.id === "hackney-gardens")!;
hackneyGardens.external_links = [
  { url: "https://www.thornsett.co.uk/", label: "Thornsett Group", type: "developer", accessed_date: "2026-04-12" },
];
hackneyGardens.rental.price_transparency = "enquire";

export default hackneyCentral;
