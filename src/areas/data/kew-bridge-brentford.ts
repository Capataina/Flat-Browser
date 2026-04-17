import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects (extracted for external_links + price_transparency mutation) ──

// RESEARCH: Apo Kew Bridge (Apo Group / BlackRock) — studios from £1,400/mo. Flatfair deposit alternative (one week's rent +VAT instead of full deposit).
// Apo uses Flatfair + Spike Global for referencing/onboarding. Flatfair No Deposit option reduces upfront cost significantly.
// REALISM: achievable-with-upfront (BTR operator with Flatfair deposit alternative, reduced upfront barrier)
// COST_TIER: affordable (studios from £1,400)
// QUALIFICATION: agreement_type=ast, referencing_provider=flatfair, international_friendly=case-by-case, visa_friendly=case-by-case, professional_guarantor_accepted=true, open_banking_accepted=false
const apoKewBridge = buildProject({
  id: "apo-kew-bridge", area_id: "kew-bridge-brentford", name: "Apo Kew Bridge", developer: "Apo Group", operator: "Apo Group", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable-with-guarantor",
  preview: "BlackRock-owned BTR with studios from £1,400/month. Flatfair deposit alternative. Gym, co-working, roof terraces, residents' lounge.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Apo Group specification — not yet researched in detail.",
    t4_1_amenity_package: "Gym, co-working spaces, roof terraces, residents' lounge.",
    t4_4_signature_arch: "No architectural press signal.",
  },
});
apoKewBridge.external_links = [
  { url: "https://a-part-of.com/places/kew-bridge", label: "Apo — Kew Bridge", type: "operator", accessed_date: "2026-04-12" },
];
apoKewBridge.rental.price_transparency = "listed";
apoKewBridge.rental.affordability = "well-under-budget";

// RESEARCH: Brentford Project (Ballymore) — 876 units, owner-lease model, rental via private landlords. Est. 1-bed £1,800-£2,000/mo.
// REALISM: unlikely (BTS via private landlords, standard agent referencing)
// COST_TIER: mid-range (est. 1-bed £1,800-£2,000)
// QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
const theBrentfordProject = buildProject({
  id: "the-brentford-project", area_id: "kew-bridge-brentford", name: "The Brentford Project", developer: "Ballymore", operator: "Ballymore / private landlords", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "876-unit Ballymore masterplan across c. 11 buildings. Phased delivery extending to 2028+. 14,000 sq m retail, 8,000 sq m leisure, riverside setting. Owner-lease model — rental via private landlords. 1-bed est. GBP 1,800-2,000/mo.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Ballymore phased delivery. Modern specification across multiple buildings.",
    t4_1_amenity_package: "Large-scale mixed-use: 14,000 sq m retail, 8,000 sq m leisure, 4,000 sq m commercial. Riverside setting. Strong place-making.",
    t4_4_signature_arch: "No specific jury signal sourced. Ballymore masterplan.",
  },
});
theBrentfordProject.external_links = [
  { url: "https://www.thebrentfordproject.com/", label: "The Brentford Project — Ballymore", type: "developer", accessed_date: "2026-04-12" },
];
theBrentfordProject.rental.price_transparency = "enquire";

// RESEARCH: GWQ (Barratt) — 2-bed from ~£2,123/mo. 12-hour concierge. Private landlords.
// REALISM: unlikely (BTS via private landlords, standard referencing)
// COST_TIER: premium (2-bed from £2,123 — 1-bed estimated lower)
// QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
const gwqBrentford = buildProject({
  id: "gwq-brentford", area_id: "kew-bridge-brentford", name: "GWQ (Great West Quarter)", developer: "Barratt London", operator: "Private landlords", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "763-unit development with The Tower (22 storeys, floors 11-22 residential, floors 1-10 apart-hotel). Phased 2015-2019. 12-hour concierge, gated parking, fitness suite, Sainsbury's Local. 2-bed from ~GBP 2,123/mo.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Barratt London 2015-2019 specification. Volume housebuilder standard.",
    t4_1_amenity_package: "12-hour concierge, gated parking, car club, cycle club, fitness suite, Sainsbury's Local on-site. Decent.",
    t4_4_signature_arch: "No architectural press signal. Volume housebuilder design.",
  },
});
gwqBrentford.rental.price_transparency = "enquire";

// RESEARCH: Kew Bridge Rise (Hill / L&Q) — 50% private, 50% affordable. In delivery.
// REALISM: unlikely (mixed-tenure with private landlord rental route)
// COST_TIER: UNVERIFIED
// QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
const kewBridgeRise = buildProject({
  id: "kew-bridge-rise", area_id: "kew-bridge-brentford", name: "Kew Bridge Rise", developer: "Hill (with L&Q)", operator: "L&Q (affordable); private landlords (market)", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "441 units across 6 buildings (up to 18 storeys). 50% private, 50% shared ownership/affordable. Final phase (Starling House) launched Nov 2025. Completion by end of 2026.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Hill / L&Q partnership. In delivery — modern specification expected.",
    t4_1_amenity_package: "Not specifically researched. Mixed-tenure scheme with affordable component.",
    t4_4_signature_arch: "No architectural press signal.",
  },
});
kewBridgeRise.external_links = [
  { url: "https://kewbridgerise.co.uk/", label: "Kew Bridge Rise — Hill / L&Q", type: "developer", accessed_date: "2026-04-12" },
];
kewBridgeRise.rental.price_transparency = "enquire";

// RESEARCH: APT Living Kew Bridge (Paradigm / Savills-managed) — 288-unit BTR. Concierge, gym, cinema, roof terraces. Prices UNVERIFIED.
// CRITICAL CORRECTION 2026-04-16: Investigation revealed APT Living Kew Bridge is NOT a BTR — it's Paradigm's
// for-sale Help-to-Buy / Shared Ownership scheme. Savills appears as SALES AGENT, not BTR operator. The actual
// 487-unit BTR at Kew Bridge is APO Kew Bridge (id: apo-kew-bridge below). Realism set to blocked because
// the property has no rental channel via this entry; tenure changed to ["buy"] to reflect actual product.
const aptLivingKewBridge = buildProject({
  id: "apt-living-kew-bridge", area_id: "kew-bridge-brentford", name: "APT Living Kew Bridge (FOR SALE — not BTR)", developer: "Paradigm", operator: "Savills (sales agent)", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["buy"], realism: "blocked",
  preview: "[FOR-SALE / SHARED OWNERSHIP — not a rental BTR. Caner should target APO Kew Bridge instead.] 288-unit Help-to-Buy/Shared Ownership scheme by Paradigm with 3m ceiling heights overlooking Gunnersbury Park (180 acres). Savills is sales agent, not BTR operator.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "2022-2023 BTR new-build. 3m ceiling heights. Modern specification.",
    t4_1_amenity_package: "Concierge, gym, cinema, residents' roof terraces, bike storage, 220 parking spaces. Strong BTR package.",
    t4_4_signature_arch: "No specific jury signal. Overlooks Gunnersbury Park — strong aspect.",
  },
});

const kewBridgeBrentford: Area = {
  id: "kew-bridge-brentford",
  name: "Kew Bridge / Brentford",
  aliases: ["Kew Bridge", "Brentford"],
  borough: "Hounslow",
  postcodes: ["TW8"],

  headline:
    "Apo BTR at Zone 3 with Flatfair deposit alternative — a sweep-18 discovery with studios from £1,400/month. SWR + District/Overground at Gunnersbury walkable.",
  preview:
    "Kew Bridge / Brentford was surfaced by the extended-stay sweep (agent 18) because Apo Group operates a BTR scheme here with studios from £1,400/month and a Flatfair deposit alternative. Transport is SWR at Kew Bridge (3 min walk) plus District/Overground at Gunnersbury (10 min walk). Limited sweep data beyond the operator and transport profile.",

  long_form: {
    full: "Kew Bridge / Brentford is an active-regeneration riverside corridor in Hounslow along the stretch of Thames where the river, the Grand Union Canal, and the mainline SWR / M4 corridor converge. Two major masterplans are in active delivery: Ballymore's The Brentford Project (876 units across 11 buildings, phased to 2028+) and the St George Kew Bridge masterplan with Kew Bridge Rise (Hill / L&Q, 441 units, completion end 2026). Apo Group (BlackRock-owned BTR operator) runs a 487-unit scheme at Kew Bridge with studios from £1,400 pcm and a Flatfair deposit alternative — one of the more accessible BTR offers in the west-London dataset for a graduate-visa renter. Transport has decent redundancy (SWR + District + Overground) but all four anchors miss the 25-minute threshold — the structural trade-off. Green-and-water is exceptional: Thames frontage, Grand Union Canal, Kew Gardens, Gunnersbury Park, Syon Park — over 700 acres of proximate green.",
    history: "Brentford has a 1,000+ year history as the junction settlement where the Thames, the Grand Union Canal (from 1794), and the main western approach to London converge. The town was a historic market centre and industrial / wharf area through the 18th-20th centuries. The 2020s have brought the fastest period of change in a century — Gtech Community Stadium opened 2020, Brentford FC promoted to Premier League 2021, Apo Kew Bridge opened 2022-2023, Ballymore's Brentford Project phase 1 delivered 2024.",
    vibe: "Riverside west-London regeneration with genuine texture — not a blank-sheet masterplan. The historic brewery / dock / industrial layer is visible, Brentford FC matchdays bring loud, committed supporter culture, Kew Gardens on the south bank adds a tranquillity layer, and the new Apo / Ballymore cohort brings professional-renter energy.",
    weekday: "A Tuesday evening: Apo Kew Bridge and Kew Bridge Rise residents returning ~18:00-19:30 via SWR or Gunnersbury; Brentford Project riverside promenade quiet after dark; The Express Tavern (Victorian railway pub at Kew Bridge) active to ~23:00; residential streets calm from ~21:00.",
    weekend: "A Saturday: Brentford FC home matchdays transform the area — 17,250 capacity stadium draws crowds from lunchtime, post-match flow 17:00-18:30. Non-matchday Saturdays are much quieter — riverside walkers, Kew Gardens traffic, Apo residents using the Thames Path, Watermans Arts Centre programming.",
    notable: "Near Kew Gardens (UNESCO World Heritage). Apo BTR with Flatfair deposit alternative. Gtech Community Stadium (Brentford FC). Syon House. London Museum of Water & Steam. Grand Union Canal joining the Thames at Brentford Dock.",
    croydon_comparison: "Kew Bridge is Zone 3 like Croydon but offers a dedicated BTR operator (Apo) with Flatfair deposit alternative and meaningfully safer borough (Hounslow lower violent crime than Croydon). Transport anchor times are comparable to Croydon's but with different product mix. Proximity to Kew Gardens + Thames + Grand Union Canal is a green-and-water asset Croydon categorically lacks. Apo Kew Bridge studios from £1,400 pcm vs Ten Degrees £2,280 contractual is strongly favourable.",
  },

  zones: ["Zone 3"],
  connectivity: {
    lines: [
      { name: "South Western Railway", type: "rail" },
      { name: "District", type: "tube" },
      { name: "London Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "Kew Bridge", lines: ["South Western Railway"], walk_minutes_from_centre: 3 },
      { name: "Gunnersbury", lines: ["District", "London Overground"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 32, canary_wharf: 48, soho_fitzrovia: 28, kings_cross_shoreditch: 35 },
    multi_cluster_score: 0,
    redundancy_score: 3,
    notes: "SWR at Kew Bridge (3 min) + District/Overground at Gunnersbury (10 min). Elizabeth Line at Ealing Broadway via E8 bus (~15 min). Three independent products but slow anchor times — no anchor under 25 min. This is the structural trade-off.",
    sources: [
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner — Kew Bridge anchors", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 23 },
      { cohort: "30-39", pct: 32 },
      { cohort: "40-49", pct: 20 },
      { cohort: "50+", pct: 25 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 39 },
      { group: "White — other", pct: 25 },
      { group: "Asian or Asian British", pct: 17 },
      { group: "Black or Black British", pct: 8 },
      { group: "Mixed", pct: 8 },
      { group: "Other ethnic group", pct: 3 },
    ],
    household_mix: [
      { type: "Single person", pct: 32 },
      { type: "Couple no children", pct: 25 },
      { type: "Couple with children", pct: 19 },
      { type: "Lone parent", pct: 8 },
      { type: "Shared household", pct: 13 },
      { type: "Other", pct: 3 },
    ],
    student_pct: 6,
    professional_renter_pct: 52,
    notes: "Demographic shifts dramatically through the regeneration delivery window. The pre-regeneration Brentford population skewed older, working-class, and long-established. The new St George and Ballymore cohort is younger, higher-income, professional-renter-dominated.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021 — LSOA (Brentford, Gunnersbury wards)", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: { overall: "safe", crime_vs_borough: "below", crime_vs_croydon: "much-safer", after_dark_assessment: "Kew Bridge / Brentford is a meaningfully safe area by west-London standards — Hounslow borough as a whole has lower violent crime than Hammersmith & Fulham or Ealing. The new St George Kew Bridge masterplan and the Ballymore Brentford Project both operate 24-hour concierge / stewarded public realm. Brentford High Street has some traditional matchday ASB patterns but residential areas east and riverside are calm.", concerns: [
    "Brentford High Street — occasional matchday ASB at Gtech Community Stadium (Brentford FC)",
    "Gunnersbury subway tunnels under the A4 — ASB concentration after 22:00",
  ], sources: [
    { url: "https://www.police.uk/pu/your-area/metropolitan-police/brentford/", label: "Met Police — Brentford ward", type: "met-police", accessed_date: "2026-04-17" },
  ] },
  green_and_water: { has_river: true, has_canal: true, has_dock: false, parks: [
    { name: "Gunnersbury Park", size_acres: 185, walk_minutes: 15, notes: "Major historic park — ornamental gardens, cafe, museum, sports facilities" },
    { name: "Royal Botanic Gardens, Kew", size_acres: 326, walk_minutes: 20, notes: "World-heritage botanical gardens across the river — premium cultural asset" },
    { name: "Thames Path (Brentford stretch)", walk_minutes: 3, notes: "Riverside walking route — Syon Park, Richmond, Kew all reachable on foot" },
    { name: "Boston Manor Park", size_acres: 31, walk_minutes: 15, notes: "Historic park with Boston Manor House (1622 Jacobean villa)" },
    { name: "Syon Park", size_acres: 200, walk_minutes: 15, notes: "Syon House ducal estate and gardens" },
    { name: "Kew Green", walk_minutes: 3, notes: "Pleasant riverside green at the south end of Kew Bridge" },
  ], overall_assessment: "One of the strongest green-and-water profiles in the dataset. Thames frontage (Kew Bridge / Brentford stretch with new riverside promenade), Grand Union Canal joining the Thames at Brentford Dock, plus adjacent Gunnersbury Park (185 acres), Kew Gardens (326 acres, world heritage), Syon Park (200 acres), Boston Manor Park (31 acres) — total proximate green well over 700 acres.", sources: [
    { url: "https://www.kew.org/", label: "Royal Botanic Gardens, Kew", type: "other", accessed_date: "2026-04-17" },
    { url: "https://www.visitgunnersbury.org/", label: "Gunnersbury Park", type: "other", accessed_date: "2026-04-17" },
  ] },
  amenities: {
    grocery: [
      { name: "M&S Simply Food (Kew Bridge / Apo ground floor)", type: "supermarket", walk_minutes: 3, notes: "M&S opened in the Kew Bridge regeneration" },
      { name: "Sainsbury's Local (Brentford)", type: "convenience", walk_minutes: 5, notes: "Inside GWQ / Great West Quarter ground floor" },
      { name: "Tesco Brentford", type: "supermarket", walk_minutes: 10, notes: "Full-size Tesco on Brentford High Street" },
      { name: "Lidl Brentford", type: "supermarket", walk_minutes: 10, notes: "Budget tier" },
      { name: "Whole Foods Market Richmond (across Kew Bridge)", type: "premium-supermarket", walk_minutes: 20, notes: "Premium grocer across the river" },
    ],
    gyms: [
      { name: "Apo Kew Bridge residents' gym", type: "btr-gym", walk_minutes: 3, notes: "In-building BTR gym (residents only)" },
      { name: "PureGym Brentford", type: "budget-gym", walk_minutes: 8, notes: "24-hour budget tier on Brentford High Street" },
      { name: "The Gym Group Chiswick", type: "budget-gym", walk_minutes: 15, notes: "Budget tier across the river" },
      { name: "Virgin Active Riverside (Chiswick)", type: "mid-premium-gym", walk_minutes: 15, notes: "Pool and full classes — requires Kew Bridge crossing" },
      { name: "F45 Brentford", type: "boutique-studio", walk_minutes: 8, notes: "" },
    ],
    food_and_drink: [
      { name: "Apo ground-floor F&B (Kew Bridge)", type: "restaurant-cluster", walk_minutes: 3, notes: "Emerging ground-floor retail/F&B tenancy" },
      { name: "The Brentford Project retail (Ballymore)", type: "mixed-use-retail", walk_minutes: 8, notes: "14,000 sq m retail + 8,000 sq m leisure programmed" },
      { name: "The Express Tavern (Kew Bridge)", type: "historic-pub", walk_minutes: 3, notes: "Victorian railway pub, classic Thames-side" },
      { name: "The City Barge (Strand-on-the-Green)", type: "historic-pub", walk_minutes: 15, notes: "15th-century riverside pub" },
      { name: "Brentford High Street restaurants", type: "restaurant-strip", walk_minutes: 10, notes: "Mixed independent + chain mix" },
    ],
    health: [
      { name: "West Middlesex University Hospital", type: "hospital", walk_minutes: 20, notes: "Full NHS district general hospital in Isleworth" },
      { name: "Brentford Health Centre", type: "gp", walk_minutes: 8, notes: "NHS GP" },
      { name: "Boots Brentford", type: "pharmacy", walk_minutes: 5, notes: "" },
    ],
    cultural: [
      { name: "Royal Botanic Gardens, Kew", type: "heritage-gardens", walk_minutes: 20, notes: "UNESCO World Heritage Site across the river" },
      { name: "Gtech Community Stadium (Brentford FC)", type: "football-stadium", walk_minutes: 10, notes: "Premier League football — major matchday presence since 2021" },
      { name: "Syon House", type: "heritage-house", walk_minutes: 15, notes: "Duke of Northumberland's London ducal residence" },
      { name: "London Museum of Water & Steam (Kew Bridge)", type: "museum", walk_minutes: 3, notes: "Victorian pumping station museum" },
      { name: "Watermans Arts Centre", type: "arts-centre", walk_minutes: 10, notes: "Cinema + theatre + gallery on Brentford High Street" },
    ],
    notes: "Amenity density is mid-tier and improving rapidly through the Ballymore Brentford Project delivery. Brentford FC's Premier League promotion in 2021 has materially changed retail demand. The combination of Kew Gardens + Gtech Stadium + Watermans + London Museum of Water & Steam gives the area genuine cultural diversity.",
    sources: [
      { url: "https://www.brentfordfc.com/", label: "Brentford FC / Gtech Community Stadium", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.watermansgallery.co.uk/", label: "Watermans Arts Centre", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: { status: "active", investment_pipeline: "£2bn+ combined: Ballymore Brentford Project (876 units, phased to 2028) + St George Kew Bridge masterplan with Kew Bridge Rise (441 units, completion end 2026) + Apo Kew Bridge (BTR, 2022-2023 delivered). Brentford FC Premier League promotion (2021) is secondary demand driver.", recent_milestones: [
    "2020 — Gtech Community Stadium (Brentford FC) opened",
    "2021 — Brentford FC promoted to Premier League",
    "2022-2023 — Apo Kew Bridge BTR complete and tenanted",
    "2024 — The Brentford Project phase 1 delivery, new riverside public realm opened",
    "2024-2025 — Kew Bridge Rise phased handovers",
  ], upcoming_milestones: [
    "2026 — Kew Bridge Rise final phase (Starling House) completion",
    "2026-2027 — Brentford Project further phases with retail / leisure build-out",
    "2028 — Brentford Project full completion (estimated)",
  ], trajectory_through_2027: "Strongly ascending through the visa window. By August 2027 the area will be meaningfully more complete — Kew Bridge Rise fully occupied, Brentford Project retail/leisure substantially active, further St George phases handed over, Apo bedded in as the operator template.", sources: [
    { url: "https://www.thebrentfordproject.com/", label: "The Brentford Project — Ballymore", type: "developer", accessed_date: "2026-04-17" },
    { url: "https://kewbridgerise.co.uk/", label: "Kew Bridge Rise — Hill / L&Q", type: "developer", accessed_date: "2026-04-17" },
    { url: "https://a-part-of.com/places/kew-bridge", label: "Apo Kew Bridge", type: "operator", accessed_date: "2026-04-17" },
  ] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "unknown", "1.2": "pass", "1.3": "unknown", "1.4": "pass", "1.5": "unknown", "1.6": "unknown" },
      {
        "1.2": "Apo BTR scheme — modern rental stock with operator amenities.",
        "1.4": "Apo Group (BlackRock-owned) is a dedicated BTR operator with professional referencing.",
      },
      "moderate",
      "T1 partially populated. BTR operator presence confirmed; most rows not yet researched.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "unknown", "2.2": "unknown", "2.3": "unknown", "2.4": "unknown", "2.5": "unknown", "2.7": "unknown" },
      {},
      "moderate",
      "T2 not yet populated. Awaiting further research.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "unknown", "3.2": "unknown", "3.3": "partial", "3.4": "unknown", "3.5": "unknown", "3.6": "unknown" },
      {
        "3.3": "Kew Bridge / Brentford has local recognition; 'Brentford' has gained profile via Brentford FC's Premier League presence.",
      },
      "weak",
      "T3 largely unpopulated. Limited identity data.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "unknown", "5.2": "unknown", "5.3": "unknown", "5.4": "unknown" },
      {},
      "moderate",
      "T5 not yet populated. Awaiting connectivity research.",
    ),
    overall_grade: "C",
    grade_reasoning: "C grade (provisional) — discovery candidate from extended-stay sweep with Apo BTR operator at £1,400/month studios and Flatfair deposit alternative. Most fields unpopulated pending further research.",
  },

  projects: [apoKewBridge, theBrentfordProject, gwqBrentford, kewBridgeRise, aptLivingKewBridge],

  external_links: [
    { url: "https://a-part-of.com/places/kew-bridge", label: "Apo Kew Bridge", type: "operator", accessed_date: "2026-04-12" },
    { url: "https://www.thebrentfordproject.com/", label: "The Brentford Project — Ballymore", type: "developer", accessed_date: "2026-04-12" },
    { url: "https://kewbridgerise.co.uk/", label: "Kew Bridge Rise — Hill / L&Q", type: "developer", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default kewBridgeBrentford;
