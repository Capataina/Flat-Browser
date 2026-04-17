import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects (extracted for external_links + price_transparency mutation) ──

// RESEARCH: Imperial Square (Telford Homes / CBRE IM) — BTR. Prices UNVERIFIED.
const imperialSquare = buildProject({
  id: "imperial-square", area_id: "north-acton", name: "Imperial Square", developer: "Telford Homes", operator: "Telford / CBRE IM", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
  preview: "Operational BTR tower in the North Acton cluster. Telford Homes / CBRE IM.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "2020s new-build BTR specification.",
    t4_1_amenity_package: "Not yet researched.",
    t4_4_signature_arch: "No architectural press signal.",
  },
});

// RESEARCH: One Portal Way (Essential Living) — BTR.
const onePortalWay = buildProject({
  id: "one-portal-way", area_id: "north-acton", name: "One Portal Way", developer: "Essential Living", operator: "Essential Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
  preview: "Essential Living BTR at North Acton. Operator-managed rental.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Essential Living BTR specification.",
    t4_1_amenity_package: "Not yet researched.",
    t4_4_signature_arch: "No architectural press signal.",
  },
});
onePortalWay.external_links = [
  { url: "https://www.essentialliving.co.uk/", label: "Essential Living", type: "operator", accessed_date: "2026-04-12" },
];

// RESEARCH: One West Point (Telford) — in delivery.
const oneWestPoint = buildProject({
  id: "one-west-point", area_id: "north-acton", name: "One West Point", developer: "Telford Homes", operator: "Telford", building_type: "BTR", build_phase: "in_delivery", tenure: ["rent"], realism: "unknown",
  preview: "In-delivery BTR scheme. Delivers across the 2025-2028 window.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Unbuilt — cannot yet verify.",
    t4_1_amenity_package: "Not yet researched.",
    t4_4_signature_arch: "No architectural press signal.",
  },
});

// RESEARCH: UNCLE Acton (Realstar/QuadReal) — 1-bed from £2,070-£2,130/mo. HomeViews 4.65/5.
const uncleActon = buildProject({
  id: "uncle-acton", area_id: "north-acton", name: "UNCLE Acton", developer: "Telford Homes (CBRE subsidiary)", operator: "Realstar (UNCLE brand)", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable-with-guarantor",
  preview: "238-unit BTR in the Perfume Factory scheme. 12/16/25-storey towers. HomeViews 4.65/5. 1-bed from GBP 2,130/mo. Gym, rooftop terrace, co-working, sky lounge, pet-friendly. BoConcept furnished, Bosch appliances.",
  long_form_full: "UNCLE Acton is the BTR portion (238 units) of the 374-home Perfume Factory scheme by Telford Homes. Operated by Realstar under the UNCLE brand. Three towers: 12, 16, and 25 storeys. Completed 2024. Pricing: 1-bed from GBP 2,130/mo, 2-bed from GBP 2,700/mo, 3-bed from GBP 3,600/mo. HomeViews rating 4.65/5.00 — praised for clean modern design, hands-on management, and station proximity. Some maintenance response complaints. BTR operator referencing — typically income-based (30x monthly rent annual salary), likely flexible on visa.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "2024 BTR new-build. BoConcept furnished interiors, Bosch appliances. Strong specification.",
    t4_1_amenity_package: "7-day gym, rooftop terrace with city views, co-working, sky lounge, pet-friendly, superfast Wi-Fi. Strong BTR package.",
    t4_4_signature_arch: "No specific jury signal. Functional BTR towers.",
  },
});
uncleActon.external_links = [
  { url: "https://uncle.co.uk/acton/", label: "UNCLE — Acton", type: "operator", accessed_date: "2026-04-12" },
];
uncleActon.rental.price_transparency = "listed";
uncleActon.rental.affordability = "at-budget";

// RESEARCH: Enclave Acton — studios from £1,388-£1,825/mo + £400/mo utilities (all-inclusive).
const enclaveActon = buildProject({
  id: "enclave-acton", area_id: "north-acton", name: "Enclave: Acton", developer: "Tide Construction", operator: "Outpost Management (Enclave brand) / BlackRock", building_type: "BTR", living_model: "co-living", build_phase: "complete", tenure: ["rent"], realism: "achievable",
  preview: "462 self-contained studios in a 32-storey tower. All-inclusive from GBP 1,975/mo. 18,000 sq ft amenity across 5 floors: sky lounge bar, spa, gym, cinema, karaoke, indoor basketball, 3D-golf. Co-living model with lighter referencing — likely visa-friendly.",
  long_form_full: "Enclave: Acton (formerly 'The Castle') is a 32-storey, 462-unit co-living/BTR tower by Tide Construction, operated by Outpost Management (BlackRock JV) under the Enclave brand. Opened 2025. All self-contained studios from GBP 1,975/mo all-inclusive (Wi-Fi, utilities). 18,000 sq ft amenity across 5 floors: sky lounge bar, private/communal dining, co-working, library, cinema, karaoke, spa (sauna + steam), gym, 3D-golf simulator, multi-sports simulation, indoor basketball court, 2,000 sq ft landscaped roof terrace (32nd floor). Smart home enabled. HTA Design architects. Co-living referencing is typically lighter than traditional AST — likely the most visa-friendly option in the North Acton cluster.",
  amenity_tier: "premium", is_signature: false, architects: ["HTA Design"], overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "2025 modular construction by Tide. Smart home enabled. Modern specification.",
    t4_1_amenity_package: "Premium: 18,000 sq ft across 5 floors. Sky lounge, spa, gym, cinema, karaoke, basketball, 3D-golf. One of the strongest amenity packages in the dataset.",
    t4_4_signature_arch: "HTA Design — featured in Architecture Today for modular construction. Distinctive 32-storey tower.",
  },
});
enclaveActon.external_links = [
  { url: "https://enclave.com/locations/acton", label: "Enclave — Acton", type: "operator", accessed_date: "2026-04-12" },
];
enclaveActon.rental.price_transparency = "listed";
enclaveActon.rental.affordability = "comfortably-affordable";

// RESEARCH: Downing North Acton — planning approved, not yet lettable. Pipeline only.
const downingNorthActon = buildProject({
  id: "downing-north-acton", area_id: "north-acton", name: "Downing North Acton", developer: "Downing", operator: "Downing", building_type: "BTR", build_phase: "future", tenure: ["rent"], realism: "blocked",
  preview: "59 BTR apartments in a 17-storey tower on the former Holiday Inn Express site adjacent to North Acton tube. Planning approved. Mixed student/BTR scheme with 35% affordable. Pipeline — not yet lettable.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Unbuilt — cannot yet verify.",
    t4_1_amenity_package: "Not yet known. Small BTR scheme — likely basic amenity package.",
    t4_4_signature_arch: "No architectural press signal.",
  },
});

const northActon: Area = {
  id: "north-acton",
  name: "North Acton",
  aliases: ["North Acton BTR cluster"],
  borough: "Ealing",
  postcodes: ["W3"],

  headline:
    "West London's densest new BTR cluster — Central Line Zone 2/3, multiple tall residential towers, ascending through 2027. Greystar and Ballymore operator presence.",
  preview:
    "North Acton has become one of west London's densest new BTR clusters, with multiple tall residential towers built or under construction around the Central Line station. Imperial Square, One Portal Way, and One West Point are the named projects. Ascending through 2027 with multiple deliveries inside the window, though the public realm is currently poor due to active construction.",

  long_form: {
    full: "North Acton is a tower-dominated BTR cluster centred on the Central Line station. Ealing borough rate (~87/1k) is below London average and below Croydon. The area is dominated by Imperial Square (Telford Homes / CBRE IM), One Portal Way (Essential Living BTR), and multiple other buildings operational or in fit-out. Public realm around the cluster is currently poor because of active construction — a T1.5 concern that will improve over the Caner visa horizon. The Elizabeth Line at Acton Main Line is a 10-15 minute walk, adding a second rail product.",
    history: "Former light-industrial area around the Central Line station. Rapid BTR-led densification from the late 2010s onwards.",
    vibe: "Tower-dominated new-build cluster. Construction-site energy. Not yet a mature neighbourhood.",
    weekday: "Heavy AM and PM rush on the Central Line and on the walking corridor to Acton Main Line. Between peaks the cluster is quiet — most residents work out-of-area, the ground-floor coffee and convenience is sparse. The in-building amenity levels carry most of the daytime activity. Construction sites are active through the working day.",
    weekend: "Quietest of the commute-belt areas in this class. Saturday morning has light Central Line outbound flow as residents leave for central London weekend activities. There is no farmers' market, no weekend retail anchor, no pub belt. Nightlife is absent inside the cluster itself; residents travel to Shepherd's Bush, Notting Hill, or Fitzrovia for evenings out.",
    notable: "One of the densest new BTR clusters in west London.",
    croydon_comparison: "North Acton trades Croydon's established town centre for a purpose-built BTR cluster with Central Line access. The neighbourhood feel is thinner but the stock is newer and the operator landscape is more BTR-friendly.",
  },

  zones: ["Zone 2", "Zone 3"],
  connectivity: {
    lines: [
      { name: "Central", type: "tube" },
    ],
    primary_stations: [
      { name: "North Acton", lines: ["Central"], walk_minutes_from_centre: 3 },
      { name: "Acton Main Line", lines: ["Elizabeth"], walk_minutes_from_centre: 12 },
    ],
    times_to_anchors: { city_of_london: 22, canary_wharf: 30, soho_fitzrovia: 15, kings_cross_shoreditch: 22 },
    multi_cluster_score: 3,
    redundancy_score: 2,
    notes: "Central at North Acton + walkable Elizabeth at Acton Main Line. 3/4 anchors ≤25 min. Canary Wharf is the swing anchor at 30 min. Redundancy 2/5 — Central Line at the primary station, Elizabeth Line via a 12-min walk.",
    sources: [
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/tube-dlr-overground/stop/940gzznortac/north-acton-underground-station", label: "TfL — North Acton station", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 28 },
      { cohort: "30-39", pct: 32 },
      { cohort: "40-49", pct: 18 },
      { cohort: "50+", pct: 22 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 24 },
      { group: "White — other", pct: 18 },
      { group: "Asian or Asian British", pct: 36 },
      { group: "Black or Black British", pct: 10 },
      { group: "Mixed", pct: 6 },
      { group: "Other ethnic group", pct: 6 },
    ],
    household_mix: [
      { type: "Single person", pct: 38 },
      { type: "Couple no children", pct: 24 },
      { type: "Shared household", pct: 18 },
      { type: "Couple with children", pct: 10 },
      { type: "Lone parent", pct: 6 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 14,
    professional_renter_pct: 58,
    notes: "This is one of the London areas where Census 2021 is least reliable as a current demographic snapshot because ~40% of the 2026 residential stock did not exist at Census date. The direction of drift is consistent: younger, more international, more professional. The Indian / South Asian concentration is structurally durable (legacy Park Royal + Imperial College pipeline).",
    sources: [
      { url: "https://www.ons.gov.uk/census/maps", label: "ONS Census 2021 — East Acton, Park Royal wards", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://data.london.gov.uk/", label: "GLA London Datastore — Ealing borough profile", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: { overall: "safe", crime_vs_borough: "below", crime_vs_croydon: "safer", after_dark_assessment: "Safe in the conventional sense. Podium lighting in the operational towers is strong, station exit is directly onto Victoria Road which is well-lit. The genuine T1.5 concern is construction-fringe geometry — hoardings create long unmonitored stretches, wind microclimates make the pedestrian experience unpleasant. Compared with East Croydon station forecourt after 22:00, the safety differential is substantial.", concerns: [
    "Construction-fringe geometry (hoardings, dark podium voids between towers) — T1.5 not T1.1 concern",
    "Wind microclimates between the towers — unpleasant rather than unsafe",
    "Park Royal industrial estate edge (north of the A40) — commercial vehicle crime",
  ], sources: [
    { url: "https://www.met.police.uk/a/your-area/", label: "Met Police crime map — East Acton ward", type: "met-police", accessed_date: "2026-04-17" },
  ] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [
    { name: "Wormwood Scrubs", size_acres: 200, walk_minutes: 12, notes: "Large open common east of the cluster — dog-walker heavy, running loops, cricket grounds; the defining green space in range." },
    { name: "Acton Park", size_acres: 23, walk_minutes: 15, notes: "Mature Victorian park to the south with playground, tennis, bowls." },
    { name: "North Acton Playing Fields", size_acres: 20, walk_minutes: 8, notes: "Open playing fields immediately north-east of the cluster." },
    { name: "Gunnersbury Park", size_acres: 185, walk_minutes: 30, notes: "Major formal park to the south-west — destination rather than walk-distance green." },
  ], overall_assessment: "Nominal green access with one substantial space (Wormwood Scrubs) in walking range and a secondary formal park (Acton Park) within reach but not immediate. The cluster itself has no meaningful internal green. No canal or river within walking range.", sources: [
    { url: "https://www.wormwoodscrubs.london/", label: "Friends of Wormwood Scrubs", type: "other", accessed_date: "2026-04-17" },
  ] },
  amenities: {
    grocery: [
      { name: "Tesco Express", type: "convenience", walk_minutes: 3, notes: "Adjacent to North Acton station — essential-coverage rather than a full shop." },
      { name: "Sainsbury's Local", type: "convenience", walk_minutes: 5, notes: "Victoria Road — similar scale to the Tesco." },
      { name: "Asda Park Royal", type: "supermarket", walk_minutes: 20, notes: "Park Royal flagship — full weekly shop destination." },
      { name: "Morrisons Acton", type: "supermarket", walk_minutes: 18, notes: "Acton High Street — full weekly shop." },
      { name: "M&S Food", type: "supermarket", walk_minutes: 16, notes: "Ealing Broadway — 3 Central Line stops." },
    ],
    gyms: [
      { name: "PureGym North Acton", type: "budget-gym", walk_minutes: 3, notes: "24/7, adjacent to station; standard PureGym equipment." },
      { name: "Imperial Square gym", type: "btr-gym", walk_minutes: 3, notes: "Imperial Square residents only — standard BTR fit-out." },
      { name: "UNCLE Acton gym", type: "btr-gym", walk_minutes: 4, notes: "UNCLE residents only — included in rent." },
      { name: "Enclave: Acton gym", type: "btr-gym", walk_minutes: 4, notes: "Part of 18,000 sq ft amenity deck — sauna + steam, 3D-golf sim, indoor basketball; residents only." },
      { name: "One Portal Way gym", type: "btr-gym", walk_minutes: 5, notes: "Essential Living fit-out." },
      { name: "The Gym Group Acton", type: "budget-gym", walk_minutes: 14, notes: "Acton High Street — 24/7 budget tier." },
    ],
    food_and_drink: [
      { name: "The Gipsy Corner", type: "pub", walk_minutes: 6, notes: "Victoria Road — traditional pub, one of the few pre-BTR anchors." },
      { name: "Portal Way ground-floor units", type: "mixed-retail", walk_minutes: 2, notes: "Coffee concession + casual dining in Imperial Square / One Portal Way podiums — thin operational inventory." },
      { name: "UNCLE Acton ground-floor", type: "mixed-retail", walk_minutes: 4, notes: "Perfume Factory heritage-building retail units." },
      { name: "Acton High Street", type: "high-street-dining", walk_minutes: 18, notes: "Conventional high-street depth — pubs, Indian, Portuguese, Afghan." },
      { name: "Westfield London (Shepherd's Bush)", type: "mall-dining", walk_minutes: 12, notes: "3 stops east on Central + walk — practical evening-out destination." },
    ],
    health: [
      { name: "Old Oak Surgery", type: "gp", walk_minutes: 10, notes: "Main registration option for the cluster." },
      { name: "Acton Health Centre", type: "gp", walk_minutes: 16, notes: "Larger practice on Acton High Street." },
      { name: "Boots Pharmacy", type: "pharmacy", walk_minutes: 3, notes: "Adjacent to North Acton station." },
      { name: "Central Middlesex Hospital", type: "nhs-hospital", walk_minutes: 25, notes: "Park Royal — nearest hospital; A&E available." },
    ],
    cultural: [
      { name: "Park Royal Studios", type: "film-tv-production", walk_minutes: 20, notes: "Production facilities rather than public-access cultural venue." },
      { name: "Vue Cinema Acton", type: "cinema", walk_minutes: 18, notes: "Multiplex cinema at Acton Park complex." },
      { name: "Acton Library", type: "library", walk_minutes: 15, notes: "Ealing Council library on Acton High Street." },
      { name: "Bush Theatre (Shepherd's Bush)", type: "theatre", walk_minutes: 16, notes: "3 Central Line stops — nearest off-West-End theatre." },
      { name: "Westfield London", type: "retail-entertainment", walk_minutes: 12, notes: "Full-scale mall with cinema, dining, events." },
    ],
    notes: "The amenity picture at North Acton is the single most important structural weakness for a renter decision. The cluster has adequate essentials within a 5-minute walk but almost everything beyond essentials requires a Central Line trip. The in-building amenity layer at the operational towers partially compensates.",
    sources: [
      { url: "https://www.puregym.com/gyms/north-acton/", label: "PureGym North Acton", type: "other", accessed_date: "2026-04-17" },
      { url: "https://uk.westfield.com/londonwestfield", label: "Westfield London", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: { status: "active", investment_pipeline: "The North Acton cluster sits inside the OPDC regeneration envelope — one of the largest urban regeneration programmes in the UK by projected scale. Committed residential pipeline through 2028 is approximately 5,000 homes across Portal Way / Portal West / North Acton Station Area. HS2 Old Oak Common interchange programme is the decade-scale anchor (opening 2029-2033).", recent_milestones: [
    "2024 — UNCLE Acton / Perfume Factory completion (238 BTR units + 136 build-to-sell)",
    "2025 — Enclave: Acton completion (462 studios, tallest tower in cluster at 32 storeys)",
    "2024 — Elizabeth Line full operational timetable bedded in at Acton Main Line",
    "2025 — OPDC Local Plan reaffirmed after statutory review",
    "2025 — North Acton Area Action Plan supplementary planning document adopted",
  ], upcoming_milestones: [
    "2026 — One West Point completion (Telford BTR, ~100 units)",
    "2026-2027 — Portal Way spine public-realm Phase 1 (linear park + junction upgrade)",
    "2027 — Downing North Acton completion (~59 BTR units + student)",
    "2027-2028 — Further Portal Way BTR phases top-out",
    "2029+ — HS2 Old Oak Common earliest opening date (outside visa window)",
  ], trajectory_through_2027: "By August 2027 North Acton will be materially more populated and materially less construction-fringe than in mid-2026. One West Point and Downing will be operational, Portal Way Phase 1 public realm will be partially delivered, and operational-tower ground-floor retail is expected to be filling up.", sources: [
    { url: "https://www.london.gov.uk/programmes-strategies/planning/implementing-london-plan/planning-applications-and-decisions/old-oak-and-park-royal-development-corporation", label: "OPDC Local Plan", type: "council", accessed_date: "2026-04-17" },
    { url: "https://www.hs2.org.uk/where/old-oak-common/", label: "HS2 Old Oak Common", type: "other", accessed_date: "2026-04-17" },
  ] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "partial", "1.6": "pass" },
      {
        "1.1": "Ealing borough ~87/1k, below London average and below Croydon. No specific violent-crime concentration.",
        "1.2": "Dense BTR cluster — multiple 2020-2024 new-build towers.",
        "1.3": "Central Line at North Acton + walkable Elizabeth at Acton Main Line.",
        "1.4": "BTR operators (Greystar, Ballymore, Essential Living, Telford) form an active professional rental market.",
        "1.5": "Public realm currently poor due to active construction. Marginal pass on trajectory basis — will improve across visa horizon.",
        "1.6": "Ascending — multiple deliveries in progress.",
      },
      "moderate",
      "T1 pass with T1.5 construction-fringe caveat. The public realm will improve as deliveries complete.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "unknown", "2.2": "unknown", "2.3": "unknown", "2.4": "partial", "2.5": "unknown", "2.7": "unknown" },
      {
        "2.4": "Nominal green — Wormwood Scrubs 12 min, Acton Park 15 min. Tower-dominated cluster without strong green identity.",
      },
      "weak",
      "T2 largely unpopulated. Green access is partial; daily essentials around a construction-heavy BTR cluster are likely thin.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "fail", "3.3": "fail", "3.4": "unknown", "3.5": "partial", "3.6": "unknown" },
      {
        "3.1": "Multiple active deliveries — ascending through 2027.",
        "3.2": "No cultural or commercial anchor. Tower cluster only.",
        "3.3": "No distinct sense of place — tower-dominated construction zone.",
        "3.5": "Persistent contention over building heights and design quality in Ealing Council planning.",
      },
      "weak",
      "T3 weak. Active regeneration but no identity, no anchor, no sense of place yet.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "unknown" },
      {
        "5.1": "3/4 anchors ≤25 min. Average 22.25 min.",
        "5.2": "Central + walkable Elizabeth. Redundancy 3/5.",
        "5.3": "Ascending through 2027 — multiple deliveries inside the window.",
      },
      "moderate",
      "T5 moderate. Good anchor coverage and ascending trajectory, but redundancy is weaker than areas with co-located lines.",
    ),
    overall_grade: "C",
    grade_reasoning: "C grade — strong BTR density and ascending trajectory, but weak identity, poor current public realm, and no neighbourhood amenity layer yet. A pure connectivity-and-stock play.",
  },

  projects: [imperialSquare, onePortalWay, oneWestPoint, uncleActon, enclaveActon, downingNorthActon],

  external_links: [
    { url: "https://uncle.co.uk/acton/", label: "UNCLE — Acton", type: "operator", accessed_date: "2026-04-12" },
    { url: "https://enclave.com/locations/acton", label: "Enclave — Acton", type: "operator", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default northActon;
