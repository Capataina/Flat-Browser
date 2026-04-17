// NOTE: Operator portfolio buildings in areas NOT covered by this file set:
// - Fizzy Living: Lewisham, Stepney Green, Poplar, Walthamstow, Hayes, Epsom
// - Get Living: East Village (Stratford), Elephant & Castle, Lewisham (The Filigree — water leak, reopens mid-late 2026)
// - UNCLE: Elephant & Castle (RSHP architect), Stockwell, Wembley, Deptford, Acton, Southall, Colindale, Ealing
// - Way of Life: Poplar (Balfron Tower — Grade II* Goldfinger), Bromley North/Tower Hamlets, Tottenham Hale (The Sessile), Walthamstow (The Eades — 495 units, coming)
// - Essential Living: Archway (Vantage Point — retained), Greenwich (Union Wharf — for sale), Bethnal Green (Dressage Court — for sale), Maidenhead (for sale)
// - Apo: Kew Bridge (487 units, membership model), Barking Wharf, Hayes (The Gatefold)
// - Moda: Nine Elms (Embassy Boulevard — 467 units, from £2,680/mo), Bermondsey (Studio Living — 283 studios, 2026)
// - Grainger: Southall Sidings (460 homes, 40% affordable, planning approved), Nine Elms (510, planning approved), West London (195, construction Q1 2026)
// - Fizzy Canning Town & East 16 Silvertown are in E16 (royal-wharf-and-docks area)
// - Grainger Fortunes Dock is in E16 (royal-wharf-and-docks area)

import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects ─────────────────────────────────────────────────────────
const theMaple = buildProject({
  id: "the-maple", area_id: "brent-cross-town", name: "The Maple (BTR)", developer: "Related Argent", operator: "Be Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable",
  preview: "Studios from £1,950/month, 1-beds from £2,250/month. 25m pool, jacuzzi, Conran & Partners interiors, Allies & Morrison architecture. 535 units.",
  amenity_tier: "premium", architects: ["Allies and Morrison", "Conran & Partners"], overall_grade: "S",
  evaluation_reasoning: {
    t2_6_building_quality: "Brand new 2025 delivery to Conran & Partners interior specification and Allies & Morrison architectural detailing — among the best-specified BTR buildings in the dataset at this price point.",
    t4_1_amenity_package: "25m pool, jacuzzi, gym, and work lounges — a premium amenity stack that substantially overshoots the £1,950/month price floor.",
    t4_4_signature_arch: "Allies & Morrison is a major named British practice and Conran & Partners is a recognisable interior design authorship. Not Pritzker-level but credible signature credentials.",
  },
});
theMaple.rental.price_transparency = "listed";
theMaple.rental.affordability = "at-budget";
theMaple.external_links = [
  { url: "https://www.themaplenw2.com/", label: "The Maple — Be Living", type: "operator", accessed_date: "2026-04-12" },
];

const theDelamarre = buildProject({
  id: "the-delamarre", area_id: "brent-cross-town", name: "The Delamarre", developer: "Related Argent", operator: "Related", building_type: "Owner-Lease", build_phase: "in_delivery", tenure: ["buy"], realism: "blocked",
  preview: "Current private-sale phase. Cleanest ownership route into Brent Cross Town with the same park-town positioning as The Maple.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Related Argent delivery to a spec consistent with The Maple — modern building services and Allies & Morrison-aligned design language.",
    t4_1_amenity_package: "Strong but one tier below The Maple's flagship stack — concierge and shared amenity space without the signature pool.",
    t4_4_signature_arch: "Same masterplan architectural authorship as The Maple but not itself the flagship expression.",
  },
});
theDelamarre.rental.price_transparency = "listed";
theDelamarre.external_links = [
  { url: "https://www.brentcrosstownliving.co.uk/", label: "Brent Cross Town Living", type: "developer", accessed_date: "2026-04-12" },
];

const conductorHouse = buildProject({
  id: "conductor-house", area_id: "brent-cross-town", name: "Conductor House", developer: "Related Argent", operator: "Various", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable",
  preview: "Affordable and London Living Rent component within the wider neighbourhood.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern delivery but to a more standard affordable-housing specification rather than the Conran-finish tier.",
    t4_1_amenity_package: "Decent shared amenities consistent with a London Living Rent product — not premium.",
    t4_4_signature_arch: "Not a signature architectural piece — functional affordable delivery.",
  },
});

const theAshbee = buildProject({
  id: "the-ashbee", area_id: "brent-cross-town", name: "The Ashbee", developer: "Related Argent", operator: "Related Argent", building_type: "Mixed", build_phase: "in_delivery", tenure: ["buy"], realism: "blocked",
  preview: "Companion building to The Delamarre, sharing the Claremont Park Club ground-floor amenity. Residential sale + affordable. Details sparse.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Related Argent delivery consistent with The Delamarre — modern building services and masterplan design language.",
    t4_1_amenity_package: "Shares Claremont Park Club amenity with The Delamarre — residents' lounge, workspace, gym.",
    t4_4_signature_arch: "Same masterplan architectural authorship but not itself a flagship expression.",
  },
});

const bctWider = buildProject({
  id: "brent-cross-town-wider", area_id: "brent-cross-town", name: "Brent Cross Town (wider masterplan)", developer: "Related Argent", operator: "Various", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unknown",
  preview: "180 acres, 6,700 homes planned. Sheffield Hallam campus, new high street, leisure and retail in planning or early delivery.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Future phases will carry the same Related Argent quality benchmark set by The Maple, but buildings are not yet delivered.",
    t4_1_amenity_package: "Wider masterplan amenity depth is a future promise — high street, Sheffield Hallam campus, and leisure all planned.",
    t4_4_signature_arch: "Masterplan overall has Allies & Morrison architecture but individual unbuilt phases cannot be scored yet.",
  },
});

const brentCrossTown: Area = {
  id: "brent-cross-town",
  name: "Brent Cross Town",
  aliases: ["Brent Cross", "Cricklewood"],
  borough: "Barnet",
  postcodes: ["NW2"],

  headline:
    "The most affordable high-quality BTR entry in the dataset — The Maple from £1,950/month. Conran & Partners interiors, 25m pool, Allies & Morrison architecture. Thameslink to King's Cross in 12 minutes.",
  preview:
    "The strongest value proposition for someone prioritising quality and price over immediate activation. The Maple delivers Conran & Partners interiors and Allies & Morrison architecture with a 25m pool and jacuzzi from £1,950/month. King's Cross in 12 minutes. Barnet is one of the safest boroughs in London. First residents moved in early 2025; neighbourhood is still activating.",

  long_form: {
    full: "Brent Cross Town is the strongest value proposition for someone prioritising quality and price over immediate activation. The Maple delivers Conran & Partners interiors and Allies & Morrison architecture with a 25m pool and jacuzzi from £1,950/month (studios) and £2,250/month (1-beds). The Thameslink from Brent Cross West station puts King's Cross at 12 minutes. The London Borough of Barnet consistently ranks in the top 10 safest in London — the environment around the development is well-maintained and low-friction. The honest limitation: first residents only moved in early 2025. The high street, bars, restaurants, and Sheffield Hallam satellite campus are future promises, not current reality. This is the right choice for someone who prioritises price and safety now and is comfortable living through a neighbourhood's activation phase.",
    history: "180-acre brownfield site north of the existing Brent Cross shopping centre. Related Argent (the team behind King's Cross) and Barnet Council took on the masterplan. First residents 2025; full delivery through the late 2020s.",
    vibe: "Brand new and quiet. The wider Cricklewood area is genuinely diverse and lively, but the masterplan footprint itself is still settling.",
    weekday: "A Tuesday at 7pm: The Maple's amenity spaces are full but the surrounding streets are quiet. The Thameslink runs through.",
    weekend: "A Saturday: Brent Cross shopping centre brings crowds but the masterplan core is still calm.",
    notable: "Conran & Partners interiors, Allies & Morrison architecture, 25m pool, the affordability story.",
    croydon_comparison: "Brent Cross Town's price floor is genuinely below most of the dataset and rivals the cheaper end of Croydon — but the build quality and safety are in a different league. The Thameslink connection to King's Cross at 12 minutes is a clean win.",
  },

  zones: ["Zone 3"],
  connectivity: {
    lines: [
      { name: "Thameslink", type: "rail" },
      { name: "Northern", type: "tube" },
    ],
    primary_stations: [
      { name: "Brent Cross West", lines: ["Thameslink"], walk_minutes_from_centre: 5 },
      { name: "Brent Cross", lines: ["Northern"], walk_minutes_from_centre: 12 },
    ],
    times_to_anchors: { city_of_london: 22, canary_wharf: 35, soho_fitzrovia: 20, kings_cross_shoreditch: 12 },
    multi_cluster_score: 3,
    redundancy_score: 2,
    notes: "The Thameslink headline — direct King's Cross in 12 minutes, Farringdon in 8 — is the defining transport asset and is genuinely rare for a Zone 3 area. Brent Cross West station opened December 2023. The Northern Line at Brent Cross adds a second independent product but the 12-min walk is a meaningful friction. Canary Wharf at 34 minutes is the weakest-anchor problem.",
    sources: [
      { url: "https://www.thameslinkrailway.com/", label: "Thameslink Railway", type: "other", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://www.networkrail.co.uk/stations/brent-cross-west/", label: "Network Rail — Brent Cross West", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 21 },
      { cohort: "30-39", pct: 25 },
      { cohort: "40-49", pct: 17 },
      { cohort: "50+", pct: 37 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 32 },
      { group: "White — other", pct: 28 },
      { group: "Asian or Asian British", pct: 18 },
      { group: "Black or Black British", pct: 11 },
      { group: "Mixed", pct: 6 },
      { group: "Other ethnic group", pct: 5 },
    ],
    household_mix: [
      { type: "Single person", pct: 30 },
      { type: "Couple no children", pct: 22 },
      { type: "Couple with children", pct: 28 },
      { type: "Lone parent", pct: 9 },
      { type: "Shared household", pct: 7 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 6,
    professional_renter_pct: 45,
    notes: "Brent Cross Town itself is too new for stable demographic data — first residents arrived in The Maple in early 2025. Surrounding wards (Cricklewood, Childs Hill) show Barnet's family-heavy character (28% couple with children — notably higher than any other north-London batch area) with significant Jewish and Eastern European layers.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://www.barnet.gov.uk/your-council/about-barnet", label: "Barnet Council — about", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  safety: { overall: "very-safe", crime_vs_borough: "below", crime_vs_croydon: "much-safer", after_dark_assessment: "The London Borough of Barnet consistently ranks in the top 10 safest in London. The Brent Cross Town masterplan footprint delivers the strongest after-dark safety profile in the north-London batch. Well-lit, low-friction, well-maintained, low-pedestrian-but-not-abandoned new-build public realm with stewardship structures funded by Related Argent and Barnet Council.", concerns: [
    "Wider Cricklewood high street (15 min south) has more typical London high-street night-crime patterns — not the masterplan core itself",
    "A41 / Edgware Road corridor can feel isolating at night for pedestrians between Brent Cross Shopping Centre and Brent Cross West station",
  ], sources: [
    { url: "https://www.police.uk/pu/your-area/metropolitan-police/childs-hill/", label: "Met Police — Childs Hill ward", type: "met-police", accessed_date: "2026-04-17" },
    { url: "https://www.barnet.gov.uk/community-safety", label: "Barnet Council — community safety", type: "council", accessed_date: "2026-04-17" },
  ] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [
    { name: "Claremont Park", size_acres: 5, walk_minutes: 4, notes: "New park within the Brent Cross Town masterplan — the first of the designed public-realm parks; fully delivered and open" },
    { name: "Clitterhouse Playing Fields", size_acres: 50, walk_minutes: 6, notes: "Large Barnet Council playing fields — sports pitches, running, community use" },
    { name: "Hampstead Heath (West Heath extent)", size_acres: 790, walk_minutes: 28, notes: "Reachable by walking via Childs Hill; not within core footprint" },
    { name: "Brent Reservoir / Welsh Harp", size_acres: 170, walk_minutes: 20, notes: "Nature reserve with sailing club — the nearest body of water" },
  ], overall_assessment: "Limited green-and-water profile by raw count, but the designed masterplan parks are a distinct asset. Claremont Park is integrated into the masterplan as a genuinely new public-realm investment. Overall: mid-tier green, weaker than Kentish Town or Tottenham Hale.", sources: [
    { url: "https://www.brentcrosstown.co.uk/places/claremont-park", label: "Brent Cross Town — Claremont Park", type: "developer", accessed_date: "2026-04-17" },
    { url: "https://www.barnet.gov.uk/parks", label: "Barnet Council — parks", type: "council", accessed_date: "2026-04-17" },
  ] },
  amenities: {
    grocery: [
      { name: "Brent Cross Shopping Centre (M&S Food, Fenwick, Waitrose)", type: "mall-grocery", walk_minutes: 12, notes: "Full-range grocery inside Brent Cross Shopping Centre — M&S, Waitrose (Fenwick food hall), plus Boots" },
      { name: "Tesco Cricklewood Broadway", type: "supermarket", walk_minutes: 15, notes: "Full-range Tesco south of the masterplan on Cricklewood Broadway" },
      { name: "The Maple ground-floor convenience retail", type: "convenience", walk_minutes: 2, notes: "On-site retail as part of the masterplan — emerging, limited range" },
      { name: "Sainsbury's Hendon (Northern Line)", type: "supermarket", walk_minutes: 15, notes: "Alternative via Northern Line direction" },
    ],
    gyms: [
      { name: "The Maple resident gym + 25m pool (residents only)", type: "btr-gym", walk_minutes: 0, notes: "Genuinely premium resident amenity — 25m pool, jacuzzi, full gym — unusual for BTR at this price" },
      { name: "Virgin Active Classic Hendon", type: "premium-gym", walk_minutes: 15, notes: "Nearest premium-tier gym — 15 min via Northern Line" },
      { name: "David Lloyd Finchley", type: "premium-gym", walk_minutes: 20, notes: "Full-service country-club style premium gym" },
      { name: "PureGym Brent Cross", type: "budget-gym", walk_minutes: 12, notes: "Budget gym inside Brent Cross Shopping Centre" },
    ],
    food_and_drink: [
      { name: "The Maple resident dining / ground-floor retail", type: "mall-adjacent", walk_minutes: 2, notes: "Emerging — limited independent grain in masterplan footprint" },
      { name: "Brent Cross Shopping Centre restaurants (chains)", type: "mall-restaurants", walk_minutes: 12, notes: "Chain restaurants — Wagamama, GBK, Pizza Express" },
      { name: "Cricklewood Broadway independent restaurants", type: "restaurants", walk_minutes: 15, notes: "Cricklewood has a diverse independent food scene — Irish, Polish, Eastern European, Caribbean, Indian" },
      { name: "The Crown Cricklewood", type: "pub", walk_minutes: 15, notes: "Traditional pub south of masterplan" },
    ],
    health: [
      { name: "Boots Pharmacy (Brent Cross)", type: "pharmacy", walk_minutes: 12, notes: "Full-range pharmacy inside shopping centre" },
      { name: "Vale Drive Health Centre", type: "gp", walk_minutes: 15, notes: "NHS GP practice" },
      { name: "Hendon Way Medical Practice", type: "gp", walk_minutes: 12, notes: "Alternative NHS GP" },
      { name: "Royal Free Hospital (via Northern)", type: "nhs-hospital", walk_minutes: 20, notes: "Nearest major A&E — 20 min via Northern Line to Belsize Park" },
    ],
    cultural: [
      { name: "Brent Cross Shopping Centre cinema (Showcase)", type: "cinema", walk_minutes: 12, notes: "Multiplex inside Brent Cross" },
      { name: "The Maple Club (residents' lounge + co-working)", type: "residents-cultural", walk_minutes: 0, notes: "Resident cultural space — library, co-working, events" },
      { name: "Sheffield Hallam London campus", type: "higher-ed", walk_minutes: 2, notes: "Sheffield Hallam's London campus — key masterplan anchor, opening Sep 2026 for first intake" },
      { name: "Camden Arts Centre", type: "gallery", walk_minutes: 20, notes: "Nearest quality gallery offer via Finchley Road" },
    ],
    notes: "Brent Cross Town's amenity profile is the starkest example of 'masterplan still activating' in the north-London batch. The masterplan footprint itself delivers premium BTR amenity but thin public amenity — the new high street is in early delivery. This is an activation-gap area — the building is outstanding, the neighbourhood is forming.",
    sources: [
      { url: "https://www.brentcrosstown.co.uk/", label: "Brent Cross Town", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.themaplenw2.com/", label: "The Maple", type: "operator", accessed_date: "2026-04-17" },
      { url: "https://www.shu.ac.uk/about-us/campuses/london", label: "Sheffield Hallam London", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: { status: "active", investment_pipeline: "180-acre site north of Brent Cross Shopping Centre, 6,700 homes planned, £7bn total development value over ~15-year delivery timeline. Joint venture between Related Argent (the King's Cross delivery team) and Barnet Council. Major components: 6,700 residential units; 3 million sq ft commercial/office space; Sheffield Hallam University London campus (expected 2026 for first intake); new high street; two new parks (Claremont Park delivered); Brent Cross West Thameslink station (opened Dec 2023).", recent_milestones: [
    "2023 December — Brent Cross West Thameslink station opened",
    "2024 — Claremont Park delivered and opened",
    "2025 early — The Maple (535-unit BTR, Be Living operated) first residents moved in",
    "2025 — The Delamarre (sale) phase launched",
    "2025 — Conductor House (affordable / London Living Rent) delivered",
  ], upcoming_milestones: [
    "2026 September — Sheffield Hallam University London campus opens for first intake",
    "2026-2027 — High street first retail units letting; The Ashbee completes",
    "2027 — Further residential phases delivery; Claremont Park Club masterplan amenity opens",
    "2028+ — Continued residential phases; commercial/office delivery",
  ], trajectory_through_2027: "Early-to-mid-phase delivery through 2027. By August 2027, first residents will have been in The Maple for ~2.5 years, Sheffield Hallam campus will have completed its first academic year, partial high-street retail will have let, and Claremont Park will be settled. But the masterplan will still be visibly 'becoming'.", sources: [
    { url: "https://www.brentcrosstown.co.uk/", label: "Brent Cross Town", type: "developer", accessed_date: "2026-04-17" },
    { url: "https://www.relatedargent.co.uk/", label: "Related Argent", type: "developer", accessed_date: "2026-04-17" },
    { url: "https://www.barnet.gov.uk/planning-and-building/planning-policy/brent-cross", label: "Barnet Council — Brent Cross planning", type: "council", accessed_date: "2026-04-17" },
  ] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Barnet is consistently in the top 10 safest London boroughs; the masterplan footprint is well-lit, low-friction, and rated very-safe with crime below borough average.",
        "1.2": "The Maple, The Delamarre, and Conductor House are all purpose-built modern stock delivered from 2024-25. No pre-war stock inside the masterplan.",
        "1.3": "Thameslink from Brent Cross West puts King's Cross at 12 minutes and the City at 22. The Northern Line at Brent Cross adds a second route. Meets 1.3 even from Zone 3.",
        "1.4": "Related Argent (the King's Cross delivery team) and Be Living operate the BTR and managed rental stock with central referencing — active professional rental market in place.",
        "1.5": "The masterplan is newly delivered and actively maintained by Related Argent and Barnet Council under a stewardship structure; no visible neglect.",
        "1.6": "Trajectory is strongly ascending — 6,700 homes planned, new high street, Sheffield Hallam campus incoming. Not in decline on any measure.",
      },
      "strong",
      "T1 clean. Among the safest boroughs.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "pass", "2.3": "pass", "2.4": "partial", "2.5": "pass", "2.7": "partial" },
      {
        "2.1": "Walkable essentials still building out — the planned high street is not yet open and everyday errands rely on Brent Cross shopping centre or the limited on-site retail.",
        "2.2": "Brent Cross shopping centre is walkable with full supermarket range and fresh food; The Maple has on-site convenience retail integrating with the masterplan.",
        "2.3": "The Maple includes a 25m pool and resident gym; the wider area has commercial gyms inside Brent Cross shopping centre and surrounding Cricklewood within reach.",
        "2.4": "Claremont Park is integrated into the masterplan but the overall green-and-water palette is limited — no river, canal, or dock frontage.",
        "2.5": "The masterplan footprint is genuinely quiet at night — first residents only arrived in 2025, the surrounding streets are residential, and there is no late-night venue density.",
        "2.7": "Too new for stable cohort data — first residents arrived in early 2025 and Census 2021 predates the masterplan entirely. Primary cohort listed as 30-39 by default.",
      },
      "good",
      "T2 is decent but the activation is still in progress.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "partial", "3.4": "partial", "3.5": "pass", "3.6": "fail" },
      {
        "3.1": "180-acre Related Argent masterplan in active phased delivery with Brent Cross West station just opened, high street and Sheffield Hallam campus incoming — visibly ongoing investment.",
        "3.2": "The planned Sheffield Hallam campus and new high street will become anchors but neither is yet operational; current anchor depth is limited to Brent Cross shopping centre nearby.",
        "3.3": "'Brent Cross Town' is still building name recognition — the brand sits alongside the older Brent Cross shopping centre and has not yet fully distinguished itself.",
        "3.4": "15-minute completeness is part-built — The Maple's internal amenities plus Claremont Park get part of the way but the high street, cultural offer, and workplace anchors are still ahead.",
        "3.5": "Allies & Morrison architecture and Conran & Partners interiors give the delivered buildings coherent, intentional design quality well above the Zone 3 norm.",
        "3.6": "Too new — day/night activity rhythm hasn't formed. Residential streets are quiet after dark because the activation curve is just starting.",
      },
      "moderate",
      "T3 is the weak tier — the area is too early in its activation curve.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 3/5 — Thameslink covers KX and the City cleanly and Soho is 20 minutes, but Canary Wharf at 35 minutes is a meaningful gap.",
        "5.2": "Two independent lines — Thameslink at Brent Cross West and Northern at Brent Cross — give genuine redundancy if either fails.",
        "5.3": "Strongly ascending trajectory through 2027 — masterplan is only 1-2 years into a decade-long delivery and the price advantage will compress as activation matures.",
        "5.4": "Limited quiet third-space culture — no established bookshop/library scene yet; the planned high street may bring this but it is not current reality.",
      },
      "good",
      "Decent T5 — Thameslink is unique to this entry, ascending trajectory.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — T1 + T5 strong, T2 + T3 decent. The price advantage is the real story; B accurately reflects 'good value, still maturing'.",
  },

  // ── RESEARCH: Brent Cross Town projects ─────────────────────────────
  // The Maple (Be Living / Related Argent):
  //   Referencing: unknown (Be Living referencing not publicly documented)
  //   Agreement type: ast
  //   Open Banking: unknown
  //   International friendly: unknown
  //   Visa friendly: unknown
  //   Prices (from The Maple website / OnTheMarket 2025):
  //     Studio: from ~£1,950 pcm
  //     1-bed: from ~£2,250–£2,455 pcm
  //     3-bed: ~£3,795–£3,975 pcm
  //   Cost tier: mid-range (studios) to premium (larger)
  //   Grad visa realism: achievable (already marked — BTR, lower price floor)
  // ───────────────────────────────────────────────────────────────────────

  projects: [theMaple, theDelamarre, conductorHouse, theAshbee, bctWider],

  external_links: [
    { url: "https://www.brentcrosstown.co.uk/", label: "Brent Cross Town official", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default brentCrossTown;
