import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const herneHill: Area = {
  id: "herne-hill",
  name: "Herne Hill",
  aliases: ["Loughborough Junction"],
  borough: "Lambeth",
  postcodes: ["SE24"],

  headline:
    "Residential calm between Brixton and Dulwich — Thameslink access, Brockwell Park frontage, and an L&G/Nomura BTR site incoming. Ward crime rate 14.3% below Lambeth average, but robbery is the fastest-growing category at +35.4% YoY.",
  preview:
    "Herne Hill sits in the calmer half of Lambeth with a 127.5/1k ward crime rate versus the Lambeth average of 148.8/1k. Brockwell Park is the major green asset. Thameslink gives access to Farringdon (Elizabeth Line) and St Pancras (Northern). L&G/Nomura partnership has its first BTR site here. Average 22.75 min to anchors — all four ≤25 min (borderline).",

  long_form: {
    full: "Herne Hill sits in southern Lambeth at Zone 2/3 boundary, on the Thameslink and Southeastern lines at Herne Hill station — 18 minutes to King's Cross St Pancras direct, 13 minutes to Farringdon (Elizabeth Line interchange), and 22 minutes to Bank via Blackfriars. The area presents as a 'village in Lambeth' — a tight commercial triangle of Railton Road, Half Moon Lane and Milkwood Road around the station, with Brockwell Park (126 acres) on its northern edge, Ruskin Park (36 acres) and Dulwich Park (72 acres) adding two more major green spaces within 15-18 min walk, and a residential footprint of late-Victorian and Edwardian terraces spilling toward Denmark Hill, Dulwich, and Brixton. Demographically Herne Hill is the quietest of this batch: 41% aged 18-39 (vs Brixton/Peckham 54-56%), 45% White British, 24% couple-with-children households — a settled, family-oriented community rather than a young-professional destination. Professional-renter share 38% is solid; student share 8% is low. Safety is the step-change from Brixton/Peckham. Herne Hill & Loughborough Junction ward crime rate ~127/1k is 14% below Lambeth mean — a genuine quieter half of the borough. The village core after 22:00 is qualitatively calm, well-lit, and low-incident. The specific concerns are the Loughborough Junction approach via Milkwood Road (less supervised, passes estate edges) and a rising robbery trend (+35.4% YoY, small absolute numbers). Women-walking-alone reports are strongly positive for the village core.",
    history: "Herne Hill grew as a Victorian middle-class suburb after the railway arrived in 1862. The name derives from a former farm ('Herne's Hill') on the slope toward Denmark Hill. John Ruskin lived at Denmark Hill (briefly at 28 Herne Hill Road as a child); the Ruskin Park name commemorates him. The Herne Hill Velodrome opened in 1891 and hosted the 1948 London Olympics cycling events — one of the oldest cycling venues in the world and the only surviving 1948 Olympics venue. The 1937 opening of Brockwell Lido (E.J. Edmondson, London County Council) is the defining interwar moment. The Art Deco open-air pool, later Grade-II listed, became and remains the area's cultural anchor. The 1948 Olympics cycling events at the Velodrome formed a second layer of sporting heritage.",
    vibe: "Quiet, settled, community-oriented, self-consciously 'village'. Saturday morning on Railton Road is joggers returning from Brockwell Park, Sunday Market stallholders setting up, couples with strollers at Milk café, and a palpable absence of the bass-and-crowd texture of Brixton three miles away. The pace is notably slower than either Brixton or Peckham. The age-range on the streets is genuinely mixed — young children, retirees, middle-aged couples, and a smaller population of 20-somethings who are usually locals-who-never-left rather than arrivals-from-elsewhere. Cultural texture is lower-intensity: the Velodrome cycling club, the Free Film Festival, Brockwell Lido's swimmers, and the Sunday Market carry the community-glue role that Peckham's creative-space density carries elsewhere.",
    weekday: "Weekday mornings peak 07:45-09:00 for Thameslink commuters — noticeable but nothing like Peckham Rye saturation. Milk café fills from 08:30 with locals and WFH freelancers. Railton Road shops open by 09:30-10:00; the retail pace through the midday is gentle. Lunchtime brings small local-office traffic plus residents returning from school runs and errands. After 18:00 the restaurants turn over to dinner traffic; by 22:00 the main streets are quiet. Brockwell Park at lunchtime is a genuine working-from-home amenity — the walled garden and hilltop views within 5 min walk are a step-change from Croydon's park options.",
    weekend: "Sunday is the peak day, uniquely. The Herne Hill Sunday Market (10:00-14:00 on Station Square) draws the weekly community flow; Brockwell Park is busy with joggers, dog-walkers, and Lido swimmers; the restaurants (Llewelyn's, The Florence) take their biggest bookings for Sunday lunch. Saturday is busier than a weekday but quieter than Sunday — more errands, less destination-traffic. July brings the Lambeth Country Show in Brockwell Park (100k+ visitors, free, two days) as the calendar peak.",
    notable: "Brockwell Park and Brockwell Lido. Herne Hill Velodrome — one of the oldest cycling venues in the world.",
    croydon_comparison: "Safety is the clearest upgrade in this entire batch. Herne Hill ward at 14% below Lambeth mean, and qualitatively the village core after 22:00 is calm, well-lit, and low-incident — the specific East Croydon station forecourt dynamic (begging, fights, North End cut-throughs) simply does not exist. Women-walking-alone reports are unambiguously positive for the village core. The trade-off is that the Loughborough Junction approach via Milkwood Road is less supervised; for someone arriving late via Thameslink to Loughborough Junction, the final 10-minute walk carries mild concern. Both areas have rising-robbery trends to watch. Café density is a cleaner upgrade than the raw count suggests — Milk, Llewelyn's, Bullfinch Taproom, and the Station Square cluster produce 3-4 genuine work-from-home third spaces of higher tier than Croydon's Caffè Nero / Costa mix. Grocery is a genuine upgrade: M&S Food on Railton Road is the premium-tier that Brixton and Peckham lack, Sunday Market adds specialist local produce, Co-op and Sainsbury's (Dog Kennel Hill, 15 min) cover weekly shop. Gyms are the Herne Hill weakness versus Croydon. Croydon has PureGym Whitgift, PureGym East Croydon, and The Gym Group all within the town centre; Herne Hill village has zero commercial gym — residents travel to Brixton Hill or use Brockwell Lido council facility. No Third Space / Equinox either way. If gym access is Caner's single T2 priority, Herne Hill underperforms Croydon, Brixton, and Peckham. Transport is a qualitative improvement: Zone 2/3 (vs Croydon Zone 5), Thameslink 18 min to King's Cross direct and 13 min to Farringdon (Elizabeth Line interchange) — genuinely competitive central access. Canary Wharf (28 min via Blackfriars → Jubilee) is the weak anchor. Croydon's Tramlink + Southern + Overground combination reaches London Bridge in 15-20 min frequently, but requires the Zone 5 journey cost.",
  },

  zones: ["Zone 2", "Zone 3"],
  connectivity: {
    lines: [
      { name: "Thameslink", type: "rail" },
      { name: "Southeastern", type: "rail" },
    ],
    primary_stations: [
      { name: "Herne Hill", lines: ["Thameslink", "Southeastern"], walk_minutes_from_centre: 5 },
    ],
    times_to_anchors: { city_of_london: 22, canary_wharf: 25, soho_fitzrovia: 22, kings_cross_shoreditch: 22 },
    multi_cluster_score: 4,
    redundancy_score: 2,
    notes: "Thameslink + Southeastern at one station but largely similar infrastructure. Redundancy 2/5. Average 22.75 min — all four anchors ≤25 min (borderline).",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Herne Hill & Loughborough Junction ward: 20-39 41%. Young-leaning residential. Census 2021 via CrystalRoof.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "below", crime_vs_croydon: "safer", after_dark_assessment: "Ward crime rate 127.5/1k — 14.3% below Lambeth district average. Calmer half of Lambeth. Robbery is the fastest-growing category at +35.4% YoY — watchlist concern.", concerns: ["Robbery +35.4% YoY — fastest-growing crime category in the ward"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Brockwell Park", walk_minutes: 5, notes: "Large park with Brockwell Lido" }], overall_assessment: "Brockwell Park is a major green asset — one of south London's best parks." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "early", investment_pipeline: "L&G / Nomura partnership first BTR site at Herne Hill.", recent_milestones: [], upcoming_milestones: ["L&G / Nomura BTR delivery"], trajectory_through_2027: "Through 2027, Herne Hill's trajectory is residential-stable with a meaningful BTR operator arrival (L&G / Nomura) in the pipeline. The area will feel qualitatively unchanged by August 2027 — the same village-scale amenity, the same Brockwell Park anchor, the same Thameslink access. The L&G BTR will likely not yet be operational by Caner's visa window. Regeneration is not a lever Herne Hill pulls through the 2026-2027 decision window; the area's value is in its steady-state character rather than its trajectory.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "partial", "1.3": "pass", "1.4": "partial", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Pass. Ward crime rate 14.3% below Lambeth average. Robbery trend is watchlist concern but does not fail T1.1.",
        "1.2": "L&G/Nomura BTR site incoming — not yet delivered. Current stock is individual-landlord.",
        "1.3": "Thameslink gives access to Farringdon (Elizabeth Line interchange) and St Pancras.",
        "1.4": "L&G is incoming (Tier 13, unknown qualification policy). Currently individual-landlord.",
        "1.5": "Brockwell Park frontage. Residential streets in good order.",
        "1.6": "Not in decline — residential-stable despite the Lambeth headline. L&G investment is ascending signal.",
      },
      "moderate",
      "T1 passes but T1.2 and T1.4 are partial — BTR incoming but not yet delivered.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "partial", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Village-centre character with walkable essentials.",
        "2.2": "Local grocery available — not destination-quality like Borough Market.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Brockwell Park is one of south London's best green assets.",
        "2.5": "Quiet residential — not a nightlife destination.",
        "2.7": "20-39 at 41% — young-leaning residential.",
      },
      "moderate",
      "Decent daily life. Brockwell Park is the headline asset. Amenity layer is village-scale.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "partial", "3.3": "pass", "3.4": "partial", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "L&G/Nomura BTR site is the investment signal. Otherwise residential-stable.",
        "3.2": "Brockwell Park and Herne Hill Velodrome are the anchors. No museum or major cultural institution.",
        "3.3": "Distinct residential identity — 'village in Lambeth' character. Recognisable.",
        "3.4": "15-minute completeness is partial — village-scale amenity, not dense urban.",
        "3.5": "No architectural press signal.",
        "3.6": "Quiet residential rhythm — not a day/night destination.",
      },
      "moderate",
      "T3 is moderate. Village character is genuine but the area lacks a strong cultural anchor beyond Brockwell Park.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "partial", "5.3": "partial", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 4/5 — all four anchors ≤25 min (borderline). Average 22.75 min.",
        "5.2": "Thameslink + Southeastern at one station — largely similar infrastructure. Redundancy 2/5.",
        "5.3": "L&G BTR is ascending signal. Otherwise stable.",
        "5.4": "Village cafes available but thin compared to Bermondsey or Peckham.",
      },
      "moderate",
      "Decent multi-cluster reach. Weak redundancy and thin third spaces.",
    ),
    overall_grade: "C",
    grade_reasoning: "C — calmer-than-Lambeth-average safety, Brockwell Park green asset, reasonable connectivity. Constrained by weak BTR operator presence (L&G incoming but Tier 13 unknown policy), weak redundancy, and village-scale amenity layer.",
  },

  projects: [
    // RESEARCH: Higgs Yard — small build-to-sell, agent-managed. ~30-40 units.
    // REALISM: unlikely (standard agent referencing, small scheme)
    // COST_TIER: UNVERIFIED
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "higgs-yard", area_id: "herne-hill", name: "Higgs Yard", developer: "unknown", operator: "Agent-managed", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "Small collection of 1, 2, and 3-bed apartments in SE24. ~30-40 units, ~6 storeys. 2 min walk to Loughborough Junction station. Residents' roof terrace with 360-degree London views. Pet-friendly. 2024-2025 completion.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Small-scale private development. Build quality details not researched.",
        t4_1_amenity_package: "Private balconies, residents' roof terrace. No communal gym or concierge.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    // RESEARCH: Ashwood Gate — very small (9 units) build-to-sell. Too small for meaningful managed-rental.
    // REALISM: unlikely (micro scheme, standard agent referencing)
    // COST_TIER: UNVERIFIED
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "ashwood-gate", area_id: "herne-hill", name: "Ashwood Gate", developer: "unknown", operator: "Agent-managed", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "Very small collection of 9 apartments (1, 2, and 3-bed) in the heart of Herne Hill. 3-4 storeys. 2024 completion. Over 80% sold. Too small for meaningful managed-rental option.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Boutique 9-unit scheme. Build quality details not researched.",
        t4_1_amenity_package: "Minimal communal amenity at this scale.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
  ],

  external_links: [
    { url: "https://www.cbreresidential.com/uk-resi/new-developments/buy/higgs-yard", label: "Higgs Yard (CBRE Residential)", type: "developer", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default herneHill;
