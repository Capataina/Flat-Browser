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
    notes: "Thameslink is the headline strength — direct to KX in 12 minutes. Northern Line adds redundancy.",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 5, professional_renter_pct: 45, notes: "Cricklewood ward is highly diverse. Brent Cross Town itself is too new for stable demographic data.", sources: [] },
  safety: { overall: "very-safe", crime_vs_borough: "below", crime_vs_croydon: "much-safer", after_dark_assessment: "Barnet is among the safest boroughs in London. The masterplan footprint is well-lit and low-friction.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Claremont Park", walk_minutes: 4, notes: "Park within the masterplan" }], overall_assessment: "Limited green features but a designed park within the masterplan." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. Known: Brent Cross shopping centre nearby (full retail), The Maple amenities, planned new high street." },
  regeneration: { status: "active", investment_pipeline: "180 acres, 6,700 homes planned. Sheffield Hallam campus, new high street, leisure and retail all in planning or early delivery.", recent_milestones: ["The Maple first residents 2025", "Brent Cross West station opened"], upcoming_milestones: ["High street activation", "Sheffield Hallam campus", "Continued residential delivery"], trajectory_through_2027: "Strong ascending. The Maple's value proposition will compress as the area matures and prices rise.", sources: [] },

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
