import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

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
    weekday: "",
    weekend: "",
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
    notes: "Central at North Acton + walkable Elizabeth at Acton Main Line. 3/4 anchors ≤25 min. Average 22.25 min. Redundancy 3/5 (Central + walkable Elizabeth counted as 2 real lines, weaker than having them at the same station).",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Not yet populated. BTR cluster skews young professional.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "average", crime_vs_croydon: "safer", after_dark_assessment: "Construction-fringe geometry is a T1.5 concern rather than a T1.1 concern. No specific violent-crime concentration surfaced.", concerns: ["Public realm in disarray due to active construction"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Wormwood Scrubs", walk_minutes: 12, notes: "Large open common to the east" }, { name: "Acton Park", size_acres: 23, walk_minutes: 15, notes: "To the south" }], overall_assessment: "Nominal green + nominal canal. New BTR cluster without strong green identity — tower-dominated. T2.4: Partial-to-moderate." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "Multiple mid-to-large-scale residential phases in active delivery.", recent_milestones: ["Imperial Square operational", "One Portal Way operational"], upcoming_milestones: ["One West Point delivery", "Adjacent plot completions through 2025-2028"], trajectory_through_2027: "Ascending through 2027. Multiple tall residential deliveries inside the window.", sources: [] },

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

  projects: [
    // RESEARCH: Imperial Square (Telford Homes / CBRE IM) — BTR. Prices UNVERIFIED. Telford Living (CBRE subsidiary) operates.
    // REALISM: unknown (BTR operator but referencing details not confirmed)
    // COST_TIER: UNVERIFIED
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=unknown, visa_friendly=unknown
    // TODO: convert to explicit Project object to set qualification fields
    buildProject({
      id: "imperial-square", area_id: "north-acton", name: "Imperial Square", developer: "Telford Homes", operator: "Telford / CBRE IM", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Operational BTR tower in the North Acton cluster. Telford Homes / CBRE IM.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "2020s new-build BTR specification.",
        t4_1_amenity_package: "Not yet researched.",
        t4_4_signature_arch: "No architectural press signal.",
      },
    }),
    // RESEARCH: One Portal Way (Essential Living) — BTR. Essential Living uses own referencing/affordability checks. Flexible tenancy lengths, no hidden fees.
    // REALISM: unknown (BTR operator, referencing details not fully confirmed for visa holders)
    // COST_TIER: UNVERIFIED
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=unknown, visa_friendly=unknown
    buildProject({
      id: "one-portal-way", area_id: "north-acton", name: "One Portal Way", developer: "Essential Living", operator: "Essential Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Essential Living BTR at North Acton. Operator-managed rental.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Essential Living BTR specification.",
        t4_1_amenity_package: "Not yet researched.",
        t4_4_signature_arch: "No architectural press signal.",
      },
    }),
    // RESEARCH: One West Point (Telford) — in delivery, not yet lettable at scale.
    // REALISM: unknown (future BTR)
    // COST_TIER: UNVERIFIED — not yet lettable
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown
    buildProject({
      id: "one-west-point", area_id: "north-acton", name: "One West Point", developer: "Telford Homes", operator: "Telford", building_type: "BTR", build_phase: "in_delivery", tenure: ["rent"], realism: "unknown",
      preview: "In-delivery BTR scheme. Delivers across the 2025-2028 window.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Unbuilt — cannot yet verify.",
        t4_1_amenity_package: "Not yet researched.",
        t4_4_signature_arch: "No architectural press signal.",
      },
    }),
    // RESEARCH: UNCLE Acton (Realstar/QuadReal) — 1-bed from £2,070-£2,130/mo, 2-bed from £2,593-£2,714/mo, 3-bed from £3,600/mo. HomeViews 4.65/5.
    // UNCLE BTR — income-based referencing (30x monthly rent). QuadReal acquired Realstar platform.
    // REALISM: achievable-with-upfront (BTR operator, income-based referencing, likely flexible on visa — BTR operators generally more accommodating)
    // COST_TIER: premium (1-bed from £2,070)
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case, professional_guarantor_accepted=true
    buildProject({
      id: "uncle-acton", area_id: "north-acton", name: "UNCLE Acton", developer: "Telford Homes (CBRE subsidiary)", operator: "Realstar (UNCLE brand)", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable-with-guarantor",
      preview: "238-unit BTR in the Perfume Factory scheme. 12/16/25-storey towers. HomeViews 4.65/5. 1-bed from GBP 2,130/mo. Gym, rooftop terrace, co-working, sky lounge, pet-friendly. BoConcept furnished, Bosch appliances.",
      long_form_full: "UNCLE Acton is the BTR portion (238 units) of the 374-home Perfume Factory scheme by Telford Homes. Operated by Realstar under the UNCLE brand. Three towers: 12, 16, and 25 storeys. Completed 2024. Pricing: 1-bed from GBP 2,130/mo, 2-bed from GBP 2,700/mo, 3-bed from GBP 3,600/mo. HomeViews rating 4.65/5.00 — praised for clean modern design, hands-on management, and station proximity. Some maintenance response complaints. BTR operator referencing — typically income-based (30x monthly rent annual salary), likely flexible on visa.",
      amenity_tier: "strong", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "2024 BTR new-build. BoConcept furnished interiors, Bosch appliances. Strong specification.",
        t4_1_amenity_package: "7-day gym, rooftop terrace with city views, co-working, sky lounge, pet-friendly, superfast Wi-Fi. Strong BTR package.",
        t4_4_signature_arch: "No specific jury signal. Functional BTR towers.",
      },
    }),
    // RESEARCH: Enclave Acton — studios from £1,388-£1,825/mo + £400/mo utilities (all-inclusive). 462 studios. Rightmove Referencing provider.
    // 30x monthly rent income requirement. Advance rental payments accepted if affordability fails. Guarantor option available.
    // Many residents from overseas — explicitly international-friendly. Right to Rent check required.
    // REALISM: achievable-with-upfront (co-living model, international-friendly by design, advance rent accepted, Rightmove Referencing)
    // COST_TIER: mid-range (studios from £1,388 + £400 utilities = £1,788 all-in; up to £2,225 all-in for larger studios)
    // QUALIFICATION: agreement_type=ast, referencing_provider=rightmove-referencing, international_friendly=yes, visa_friendly=yes, professional_guarantor_accepted=true, open_banking_accepted=false
    buildProject({
      id: "enclave-acton", area_id: "north-acton", name: "Enclave: Acton", developer: "Tide Construction", operator: "Outpost Management (Enclave brand) / BlackRock", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable",
      preview: "462 self-contained studios in a 32-storey tower. All-inclusive from GBP 1,975/mo. 18,000 sq ft amenity across 5 floors: sky lounge bar, spa, gym, cinema, karaoke, indoor basketball, 3D-golf. Co-living model with lighter referencing — likely visa-friendly.",
      long_form_full: "Enclave: Acton (formerly 'The Castle') is a 32-storey, 462-unit co-living/BTR tower by Tide Construction, operated by Outpost Management (BlackRock JV) under the Enclave brand. Opened 2025. All self-contained studios from GBP 1,975/mo all-inclusive (Wi-Fi, utilities). 18,000 sq ft amenity across 5 floors: sky lounge bar, private/communal dining, co-working, library, cinema, karaoke, spa (sauna + steam), gym, 3D-golf simulator, multi-sports simulation, indoor basketball court, 2,000 sq ft landscaped roof terrace (32nd floor). Smart home enabled. HTA Design architects. Co-living referencing is typically lighter than traditional AST — likely the most visa-friendly option in the North Acton cluster.",
      amenity_tier: "premium", is_signature: false, architects: ["HTA Design"], overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "2025 modular construction by Tide. Smart home enabled. Modern specification.",
        t4_1_amenity_package: "Premium: 18,000 sq ft across 5 floors. Sky lounge, spa, gym, cinema, karaoke, basketball, 3D-golf. One of the strongest amenity packages in the dataset.",
        t4_4_signature_arch: "HTA Design — featured in Architecture Today for modular construction. Distinctive 32-storey tower.",
      },
    }),
    // RESEARCH: Downing North Acton — planning approved, not yet lettable. Pipeline only.
    // REALISM: blocked (not yet built)
    // COST_TIER: N/A — future scheme
    // QUALIFICATION: N/A — future
    buildProject({
      id: "downing-north-acton", area_id: "north-acton", name: "Downing North Acton", developer: "Downing", operator: "Downing", building_type: "BTR", build_phase: "future", tenure: ["rent"], realism: "blocked",
      preview: "59 BTR apartments in a 17-storey tower on the former Holiday Inn Express site adjacent to North Acton tube. Planning approved. Mixed student/BTR scheme with 35% affordable. Pipeline — not yet lettable.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Unbuilt — cannot yet verify.",
        t4_1_amenity_package: "Not yet known. Small BTR scheme — likely basic amenity package.",
        t4_4_signature_arch: "No architectural press signal.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default northActon;
