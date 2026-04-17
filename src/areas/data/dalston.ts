import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const kingslandLocke = buildProject({
  id: "kingsland-locke", area_id: "dalston", name: "Kingsland Locke", developer: "Staycity Group", operator: "Locke (Staycity)", building_type: "BTR", living_model: "apart-hotel", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Design-led apart-hotel on Kingsland Road. From ~£3,900/month all-inclusive. No deposit, no admin fees, no referencing. Hospitality licence. Cafe, bar, gym, coworking. 1-night minimum stay.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern apart-hotel specification. Design-led by Locke brand.",
    t4_1_amenity_package: "Strong — cafe, bar, gym, coworking space. Hotel-grade services.",
    t4_4_signature_arch: "Not signature-authored but design-led brand.",
  },
});
kingslandLocke.external_links = [
  { url: "https://www.lockeliving.com/en/london/kingsland-locke", label: "Kingsland Locke", type: "operator", accessed_date: "2026-04-15" },
];
kingslandLocke.rental.price_transparency = "listed";

// ── V2 enrichment (Locke / Staycity — Kingsland Locke) ──
kingslandLocke.building_quality = {
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "Design-led studio and suite layouts — kitchen along wall with full appliances, open-plan living, separated shower room, statement interior design (bold colour, mid-century furniture). Studios ~25-35 sqm; suites up to ~45 sqm with separate sleeping area.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "Locke sits structurally between serviced-apartment and co-living — full kitchen means cooking properly is possible. Design identity is strong.",
};
kingslandLocke.amenities = {
  pool: false,
  pool_notes: "",
  gym: true,
  gym_quality: "average",
  concierge: "24h",
  sky_lounge: false,
  co_working: true,
  dining_room: false,
  cinema_room: false,
  rooftop_terrace: true,
  parking: false,
  bike_storage: true,
  pet_policy: "Pets considered on application (hotel-style)",
  other_amenities: ["On-site cafe/bar", "Co-working hot-desks", "Lounge / social programming"],
  overall_tier: "strong",
};
kingslandLocke.architecture = {
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "Contemporary mid-rise on Kingsland Road, design-led by Locke's in-house creative direction (Grzywinski+Pons associated with other Locke sites) — bold interiors, exterior massing subordinate to streetline.",
};
kingslandLocke.rental.affordability = "over-budget";

const dalston: Area = {
  id: "dalston",
  name: "Dalston",
  aliases: ["Dalston Junction", "Dalston Kingsland", "Kingsland High Street"],
  borough: "Hackney",
  postcodes: ["E8"],

  headline:
    "Hackney's nightlife and cultural hub with two Overground stations and top-skew young demographics (54% aged 20-39) — but named mugging/drug-crime concentration is a real T1.1 concern.",
  preview:
    "Two Overground lines at two stations (Dalston Junction on Mildmay + Windrush, Dalston Kingsland on Mildmay) give 3/5 redundancy. 19-minute average to anchors. Demographics are top-skew at 54% aged 20-39 — close to a young-professional monoculture. Safety is the weakest point: explicitly named in press as a mugging, drug-crime and vehicle-theft concentration.",

  long_form: {
    full: "Dalston is Hackney's nightlife and cultural centre — Kingsland High Street, the clubbing cluster, Turkish and Vietnamese restaurant scenes, and Ridley Road Market give it one of the strongest identity profiles in East London. Two Overground stations two minutes apart provide three-line redundancy (Mildmay + Windrush at Junction, Mildmay at Kingsland). Demographics are top-skew at 54% aged 20-39, matching the nightlife reputation. The serious concern is safety: Dalston is explicitly named in national press as a mugging, drug-crime, and vehicle-theft concentration in Hackney's nightlife belt. Kingsland High Street carries persistent late-night ASB. The side-street walk home post-2am is one of the longer-tail mugging-risk geometries in London. T2.5 (quiet at night) is a separate concern from T1.1 — the nightlife cluster generates real residential noise.",
    history: "Historic Hackney nightlife district. Ridley Road Market has operated since the 1880s. Turkish and Kurdish community established since the 1980s. Dalston Junction rebuilt and reopened 2010.",
    vibe: "Vibrant, nightlife-driven, multicultural. Kingsland High Street is dense with restaurants, bars, clubs. Ridley Road Market is the daytime anchor.",
    weekday: "A Tuesday at 7pm: restaurants filling up; Kingsland High Street busy; after 10pm the bar/club scene starts.",
    weekend: "A Saturday: Ridley Road Market busy daytime; Kingsland High Street peak nightlife after 10pm; late-night activity until 3-4am.",
    notable: "Ridley Road Market; Dalston Superstore; Rio Cinema; Turkish restaurant strip; nightlife cluster.",
    croydon_comparison: "Dalston offers a cultural and nightlife layer that Croydon cannot match, but the safety trade-off is real. Connectivity is comparable in absolute time (Overground vs Croydon mainline) but Dalston has no tube direct.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Mildmay line", type: "overground" },
      { name: "Windrush line", type: "overground" },
    ],
    primary_stations: [
      { name: "Dalston Junction", lines: ["Mildmay line", "Windrush line"], walk_minutes_from_centre: 3 },
      { name: "Dalston Kingsland", lines: ["Mildmay line"], walk_minutes_from_centre: 5 },
      { name: "Haggerston", lines: ["Windrush line"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 18, canary_wharf: 22, soho_fitzrovia: 22, kings_cross_shoreditch: 13 },
    multi_cluster_score: 4,
    redundancy_score: 3,
    notes: "Windrush line connects to Whitechapel where Elizabeth Line + District + Hammersmith & City all interchange — genuine multi-corridor access. Mildmay covers the east-west Hackney spine. Post-November-2024 rename. Victoria tube at Highbury adds backup corridor for a long walk.",
    sources: [
      { url: "https://tfl.gov.uk/tube-dlr-overground/status/", label: "TfL line status", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 33 },
      { cohort: "30-39", pct: 28 },
      { cohort: "40-49", pct: 12 },
      { cohort: "50+", pct: 14 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 28 },
      { group: "White — other", pct: 26 },
      { group: "Asian or Asian British", pct: 10 },
      { group: "Black or Black British", pct: 18 },
      { group: "Mixed", pct: 12 },
      { group: "Other ethnic group", pct: 6 },
    ],
    household_mix: [
      { type: "Single person", pct: 32 },
      { type: "Couple no children", pct: 24 },
      { type: "Couple with children", pct: 13 },
      { type: "Lone parent", pct: 9 },
      { type: "Shared household", pct: 17 },
      { type: "Other", pct: 5 },
    ],
    student_pct: 13,
    professional_renter_pct: 48,
    notes: "One of the strongest young-professional-renter skews in the dataset — 61% in the 18-39 combined bands. Shared-household rate of 17% is elevated vs Hackney borough mean, consistent with the HMO-and-flatshare culture. Turkish-Kurdish community concentration persists in the resident base despite decades of creative-sector gentrification.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "moderate",
    crime_vs_borough: "above",
    crime_vs_croydon: "similar",
    after_dark_assessment: "Explicitly flagged in national press (Evening Standard, Time Out) as a mugging, drug-crime and phone-theft concentration in Hackney's nightlife belt. Kingsland High Street itself is busy and patrolled until ~02:00 — the danger window is the side-street walk home after bar/club closing. Dalston Junction and Dalston Kingsland station forecourts have persistent phone-theft reports. Both Overground stations are specifically named in Met Police phone-theft hotspot data. The nightlife cluster is a feature for evening economy but a real residential-noise cost for anyone living within 100m of Kingsland High Street.",
    concerns: [
      "Kingsland High Street late-night ASB and fights (Friday/Saturday 23:00-03:00)",
      "Dalston Junction + Kingsland station forecourts — phone-theft hotspots",
      "Side-street walk home post-02:00 (Sandringham, Shacklewell, Boleyn)",
      "Moped-enabled phone snatching at traffic-light pause points",
      "T2.5 fail — residential noise from nightlife cluster",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police/dalston/", label: "Met Police — Dalston ward", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Dalston Curve Garden", size_acres: 0.5, walk_minutes: 3, notes: "Community garden built on disused rail cutting; cafe, events, plants-for-sale." },
      { name: "Gillett Square", size_acres: 0.2, walk_minutes: 3, notes: "Public square used for events, markets, performances." },
      { name: "Haggerston Park", size_acres: 14, walk_minutes: 10, notes: "Sports pitches, skate, BMX." },
      { name: "London Fields", size_acres: 31, walk_minutes: 15, notes: "Lido, peak-intensity weekend park." },
      { name: "Abney Park Cemetery", size_acres: 32, walk_minutes: 15, notes: "Woodland nature reserve and Victorian cemetery." },
    ],
    overall_assessment: "Thin immediate green space — the area's compensating features are Dalston Curve Garden (a beloved micro-park) and Gillett Square (event-led) rather than traditional parkland. Haggerston Park + London Fields + Abney Park all sit at the 10-15 min walk radius. Regent's Canal is 12 minutes south. For a Zone 2 nightlife-centred ward the green layer is adequate rather than strong.",
    sources: [
      { url: "https://hackney.gov.uk/parks", label: "Hackney Council — parks", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Ridley Road Market", type: "street market", walk_minutes: 3, notes: "Operating since 1880s — fresh fruit/veg, Caribbean/African/Turkish groceries, meat, fish." },
      { name: "Sainsbury's Dalston Square", type: "supermarket", walk_minutes: 3, notes: "Full-range Sainsbury's at Dalston Junction." },
      { name: "Turkish Food Centre (Ridley Road)", type: "independent supermarket", walk_minutes: 4, notes: "Major Turkish-community food anchor." },
      { name: "Tesco Express (Kingsland High Street)", type: "convenience", walk_minutes: 2, notes: "Late-night convenience." },
    ],
    gyms: [
      { name: "PureGym Dalston Kingsland", type: "budget chain", walk_minutes: 4, notes: "24-hour PureGym." },
      { name: "Kingsland Boxing Gym", type: "boxing", walk_minutes: 5, notes: "Working-class boxing gym, long-established." },
      { name: "Third Space Mare Street", type: "premium chain", walk_minutes: 18, notes: "Nearest premium option — Hackney Central side." },
      { name: "The Gym Group Shoreditch", type: "budget chain", walk_minutes: 15, notes: "Alternative budget option." },
    ],
    food_and_drink: [
      { name: "Dalston Superstore", type: "bar/club", walk_minutes: 3, notes: "Flagship LGBTQ+ nightlife venue." },
      { name: "Mangal 2 / Mangal 1 (Ocakbasi)", type: "Turkish grill", walk_minutes: 4, notes: "Destination Turkish ocakbasi." },
      { name: "Brilliant Corners", type: "jazz restaurant", walk_minutes: 4, notes: "Hi-fi listening bar, tasting menu." },
      { name: "Rio Cinema (cafe-bar)", type: "cinema", walk_minutes: 3, notes: "Historic independent cinema with bar." },
      { name: "Voodoo Ray's / Café OTO / Birthdays", type: "late-night", walk_minutes: 3, notes: "Clubbing cluster anchors." },
    ],
    health: [
      { name: "Lawson Practice", type: "GP", walk_minutes: 5, notes: "NHS GP, new registrations catchment-dependent." },
      { name: "Boots Pharmacy (Kingsland High Street)", type: "pharmacy", walk_minutes: 3, notes: "Full-service." },
    ],
    cultural: [
      { name: "Rio Cinema", type: "cinema", walk_minutes: 3, notes: "Art deco independent cinema, 1937." },
      { name: "Café OTO", type: "experimental music venue", walk_minutes: 5, notes: "Internationally-known avant-garde music venue." },
      { name: "Arcola Theatre", type: "theatre", walk_minutes: 5, notes: "Off-West-End theatre." },
      { name: "Vortex Jazz Club", type: "jazz venue", walk_minutes: 3, notes: "Gillett Square jazz venue." },
      { name: "Dalston CLR James Library", type: "library", walk_minutes: 3, notes: "Modern library at Dalston Square." },
    ],
    notes: "Amenity density is extreme for food-and-drink and cultural venues — one of the strongest clusters in the dataset — but premium gym tier is absent, and the grocery layer relies on Ridley Road + Sainsbury's rather than a diverse supermarket mix. Healthcare is thinly provisioned relative to the population density.",
  },
  regeneration: {
    status: "complete",
    investment_pipeline: "No single named masterplan. Incremental additions: Dalston Square (Barratt, 2010-2014, ~600 homes) was the signature regen scheme; FiftySevenEast (Taylor Wimpey, 2018); Dalston Works (Regal, 2017, world's largest CLT building); Kingsland Locke (Staycity apart-hotel, 2020). Hackney Council Dalston Plan (2021) sets cultural-quarter protection framework rather than delivery pipeline.",
    recent_milestones: [
      "2020 — Kingsland Locke apart-hotel opened",
      "2021 — Hackney Council Dalston Plan published (cultural-quarter protection)",
      "2024 — Overground renamed (Mildmay + Windrush)",
    ],
    upcoming_milestones: [
      "2026-2027 — minor infill around Kingsland High Street; no major schemes confirmed",
    ],
    trajectory_through_2027: "Plateaued. Dalston is an already-gentrified, already-saturated cultural quarter — the regeneration phase effectively ended with Dalston Square / Dalston Works. The Hackney Council Dalston Plan explicitly prioritises protection of existing cultural infrastructure over delivery of new build. By August 2027 expect the area to be materially unchanged in character and infrastructure from today — a stable rather than ascending story.",
    sources: [
      { url: "https://hackney.gov.uk/dalston-plan", label: "Hackney Council — Dalston Plan", type: "council", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "fail", "1.6": "pass" },
      {
        "1.1": "Marginal, leaning fail. Named mugging/drug-crime concentration. Nightlife cluster plus side-street risk geometry.",
        "1.2": "Modern rental stock present.",
        "1.3": "Two Overground lines — multi-hub especially with Windrush to Whitechapel Elizabeth Line connection.",
        "1.4": "Active professional rental market — high young-professional demand.",
        "1.5": "T2.5 fail flagged separately — nightlife cluster generates real residential noise and late-night ASB.",
        "1.6": "Not in decline — sustained cultural demand.",
      },
      "weak",
      "T1 weak — T1.1 marginal leaning fail, T1.5 fails on night quiet. Safety and nightlife noise are real concerns.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "partial", "2.5": "fail", "2.7": "pass" },
      {
        "2.1": "Kingsland High Street and Ridley Road Market provide dense walkable essentials.",
        "2.2": "Ridley Road Market for fresh food; multiple grocery options along Kingsland High Street.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Limited green space within immediate walking distance.",
        "2.5": "FAIL — nightlife cluster generates real residential noise. Late-night ASB from the clubbing belt.",
        "2.7": "Census 2021: 54% aged 20-39. Top-skew — strongest in the Hackney group.",
      },
      "moderate",
      "T2 moderate — excellent walkable essentials and demographics but T2.5 fails on night quiet and green space is thin.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "pass" },
      {
        "3.1": "Established cultural quarter rather than active regeneration zone.",
        "3.2": "Ridley Road Market, Rio Cinema, restaurant scenes, nightlife cluster — very strong cultural anchors.",
        "3.3": "Highly distinctive sense of place — recognisable identity, multicultural character.",
        "3.4": "15-minute completeness strong — transport, grocery, market, culture, restaurants.",
        "3.5": "Not architecturally distinguished in the 2024/25 window. Narrative-driven identity rather than jury-backed.",
        "3.6": "Very strong day/night rhythm — market daytime, restaurant evening, nightlife late.",
      },
      "good",
      "T3 strong — one of the strongest identity profiles in East London. Cultural and narrative strength.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "partial", "5.4": "pass" },
      {
        "5.1": "19-min average. Only 2/4 anchors under 25 minutes. Adequate but not strong.",
        "5.2": "Two Overground lines at two stations — 3/5 redundancy. No tube direct.",
        "5.3": "Stable rather than ascending — already established.",
        "5.4": "Strong third-space culture — cafes, restaurants, Rio Cinema, bars.",
      },
      "moderate",
      "T5 moderate — good redundancy and third spaces but connectivity average and trajectory flat.",
    ),
    overall_grade: "C",
    grade_reasoning: "C grade — exceptional T3 identity and top-skew demographics, but T1 safety/noise concerns (marginal T1.1, T2.5 fail) and mid-tier connectivity hold it back. The cultural layer is best-in-class for East London but the safety trade-off is real.",
  },

  projects: [
    // RESEARCH: Dalston Works — 121-unit BTR (101 private rent + 15 affordable + 5 shared ownership).
    // Regal Homes developer/operator. World's largest CLT building. Waugh Thistleton Architects.
    // 2-bed ~£2,190/mo (2017 data — likely higher now). Conran-furnished. Free WiFi.
    // Referencing: UNVERIFIED — Regal Homes is a smaller developer, not institutional BTR.
    // AGREEMENT: ast
    // REFERENCING: unknown
    // INTERNATIONAL: unknown
    // REALISM: unknown — Regal Homes referencing not documented
    // COST_TIER: mid-range to premium (estimated £1,800-2,200 for 1-bed based on 2017 2-bed data)
    buildProject({
      id: "dalston-works",
      area_id: "dalston",
      name: "Dalston Works",
      developer: "Regal Homes",
      operator: "Dalston Works",
      building_type: "BTR",
      build_phase: "complete",
      tenure: ["rent"],
      realism: "unknown",
      preview: "121-unit purpose-built BTR. World's largest Cross Laminated Timber building (~50% less embodied carbon). 10 storeys, Conran-furnished interiors, rooftop terraces. Waugh Thistleton Architects.",
      amenity_tier: "strong",
      overall_grade: "B",
      architects: ["Waugh Thistleton Architects"],
      evaluation_reasoning: {
        t2_6_building_quality: "Cross Laminated Timber construction — world's largest CLT building. Architecturally significant and environmentally innovative. Dedicated BTR management.",
        t4_1_amenity_package: "Strong — Conran-furnished interiors, private balconies, resident-only roof terraces, free super-fast WiFi, 1,500 sqm retail/restaurant at ground level.",
        t4_4_signature_arch: "Waugh Thistleton Architects — globally recognised for CLT innovation. ArchDaily featured. Genuine architectural significance.",
      },
    }),
    // RESEARCH: Dalston Square — Barratt London BTS 2010-2014. Individual landlord rental.
    // REALISM: unknown — individual landlord, standard AST
    // COST_TIER: mid-range (estimated for Dalston 1-beds)
    buildProject({
      id: "dalston-square",
      area_id: "dalston",
      name: "Dalston Square",
      developer: "Barratt London",
      operator: "Various agents",
      building_type: "Mixed",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unknown",
      preview: "244+ homes (up to 17 storeys) with residents' gym, 24-hour concierge, public square, integrated library. Built alongside Dalston Junction Overground station. Rental through individual landlords.",
      amenity_tier: "decent",
      overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Barratt London delivery, completed 2010-2014. Established development — some resident reports of build quality ageing.",
        t4_1_amenity_package: "Decent — residents' gym, 24-hour concierge, public square, integrated Dalston CLR James Library.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    // RESEARCH: FiftySevenEast — Taylor Wimpey BTS 2018. Individual landlord rental.
    // REALISM: unknown — individual landlord
    // COST_TIER: mid-range (estimated)
    buildProject({
      id: "fiftyseveneast",
      area_id: "dalston",
      name: "FiftySevenEast",
      developer: "Taylor Wimpey",
      operator: "Various agents",
      building_type: "Build-to-Sell",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unknown",
      preview: "83-98 homes (15-storey tower + 5-storey building) at 51-57 Kingsland High Street, directly at Dalston Kingsland station. Concierge, landscaped courtyard. Rental through individual landlords.",
      amenity_tier: "decent",
      overall_grade: "C",
      architects: ["Jestico + Whiles"],
      evaluation_reasoning: {
        t2_6_building_quality: "Taylor Wimpey delivery, completed 2018. Functional mid-market build quality.",
        t4_1_amenity_package: "Decent — concierge, landscaped courtyard, secure bicycle storage, ground floor retail.",
        t4_4_signature_arch: "Jestico + Whiles — respected practice but not signature-tier.",
      },
    }),
    kingslandLocke,
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

// ── Project external links & price transparency ──────────────────────────
const dalstonWorks = dalston.projects.find(p => p.id === "dalston-works")!;
dalstonWorks.external_links = [
  { url: "https://www.dalston-works.co.uk/", label: "Dalston Works — official site", type: "operator", accessed_date: "2026-04-12" },
  { url: "https://www.regal-london.co.uk/developments/dalston-works/", label: "Regal London — Dalston Works", type: "developer", accessed_date: "2026-04-12" },
];
dalstonWorks.rental.price_transparency = "enquire";

const dalstonSquare = dalston.projects.find(p => p.id === "dalston-square")!;
dalstonSquare.external_links = [];
dalstonSquare.rental.price_transparency = "enquire";

const fiftySevenEast = dalston.projects.find(p => p.id === "fiftyseveneast")!;
fiftySevenEast.external_links = [];
fiftySevenEast.rental.price_transparency = "enquire";

export default dalston;
