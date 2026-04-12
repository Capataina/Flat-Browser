import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Project consts (extracted for external_links / price_transparency mutation) ──

const newAcresWandsworth = buildProject({
  id: "new-acres-wandsworth", area_id: "wandsworth-town", name: "New Acres", developer: "Legal & General", operator: "L&G Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
  preview: "L&G's flagship UK BTR — 1,034 homes, completed 2024, over 75% let. Qualification policy not publicly documented (Tier 13 operator).",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern BTR — L&G flagship scheme. Expected to be strong build quality given the flagship positioning.",
    t4_1_amenity_package: "Flagship BTR expected to carry strong amenity package. Details not yet researched.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
newAcresWandsworth.external_links = [
  { url: "https://www.newacreswandsworth.com/", label: "New Acres — L&G Living", type: "operator", accessed_date: "2026-04-12" },
];
newAcresWandsworth.rental.price_transparency = "listed";

const ramQuarter = buildProject({
  id: "ram-quarter", area_id: "wandsworth-town", name: "Ram Quarter", developer: "Greenland Group", operator: "Greenland", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Former Young's Brewery site regeneration. Greenland's own letting team operates the rental arm. Standard agency referencing.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern masterplan stock. Greenland's build quality is standard.",
    t4_1_amenity_package: "Standard mixed-use amenity package.",
    t4_4_signature_arch: "Not signature-authored. Heritage context from brewery site.",
  },
});
ramQuarter.external_links = [
  { url: "https://www.ramquarter.com/", label: "Ram Quarter — Greenland", type: "developer", accessed_date: "2026-04-12" },
];
ramQuarter.rental.price_transparency = "enquire";

const wandsworthRiverside = buildProject({
  id: "wandsworth-riverside", area_id: "wandsworth-town", name: "Wandsworth Riverside", developer: "Berkeley", operator: "Berkeley", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Berkeley ownership-led riverside development.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley standard — reliably strong build quality.",
    t4_1_amenity_package: "Strong shared amenities consistent with Berkeley's standard.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
wandsworthRiverside.rental.price_transparency = "enquire";

const wandsworthMills = buildProject({
  id: "wandsworth-mills", area_id: "wandsworth-town", name: "Wandsworth Mills", developer: "Berkeley Group", operator: "Agent-managed", building_type: "Build-to-Sell", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unknown",
  preview: "~500+ units across full masterplan at 11 Armoury Way, SW18. 34-storey Artisan Tower is the landmark building. Riverside location. Sales £625,000-£1,836,000. Q1-Q3 2027 completion (Artisan Tower). Premium pricing — rental through buy-to-let market.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley Group delivery — reliably strong build quality. 34-storey landmark tower.",
    t4_1_amenity_package: "Riverside setting, wellness-led concept. Full amenity details not yet confirmed.",
    t4_4_signature_arch: "34-storey Artisan Tower is a landmark form. Not a named-architect signature piece.",
  },
});
wandsworthMills.rental.price_transparency = "enquire";

const riversideQuarter = buildProject({
  id: "riverside-quarter", area_id: "wandsworth-town", name: "Riverside Quarter", developer: "Frasers Property Group", operator: "Various", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unknown",
  preview: "475 apartments across 8 buildings (existing) + 172 apartments (final phase approved) = 647 total. Thames-facing opposite Hurlingham Club. Former Shell oil terminal site, 10-year regeneration. Adjacent to Wandsworth Park.",
  architects: ["Roz Barr", "Lori Pinkerton-Rolet Architects"], amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Multi-phase Frasers Property delivery. Thames-facing with landscaped terraces. Final phase includes 72 car + 340 cycle parking.",
    t4_1_amenity_package: "Decent — Thames riverside, landscaped terraces, retail/commercial at ground level, Wandsworth Park adjacency.",
    t4_4_signature_arch: "Not a signature-level practice but coherent riverside design language.",
  },
});
riversideQuarter.rental.price_transparency = "enquire";

const osiersPoint = buildProject({
  id: "osiers-point", area_id: "wandsworth-town", name: "Osiers Point", developer: "unknown", operator: "Various", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "1, 2, 3-bed apartments on Osiers Road along the river. Part of the Wandle Delta area with council regeneration vision for riverside living, working and leisure.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern riverside residential — limited detail available on specification.",
    t4_1_amenity_package: "Decent — riverside positioning. Benefits from broader Wandle Delta regeneration vision.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
osiersPoint.rental.price_transparency = "enquire";

const wandleDeltaFuture = buildProject({
  id: "wandle-delta-future", area_id: "wandsworth-town", name: "Wandle Delta (future pipeline)", developer: "Various", operator: "Various", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Wandsworth Council vision plan (2021) for the area between Armoury Way, Putney Bridge Road, Old York Road and the river. Planning framework that will yield multiple residential projects. Not yet a specific project.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Unbuilt — council vision plan only. No specific building quality to score.",
    t4_1_amenity_package: "Future promise — riverside quarter for living, working and leisure.",
    t4_4_signature_arch: "Unbuilt — no architects appointed to individual sites.",
  },
});
wandleDeltaFuture.rental.price_transparency = "unknown";

const wandsworthTown: Area = {
  id: "wandsworth-town",
  name: "Wandsworth Town",
  aliases: ["Wandsworth", "Ram Quarter"],
  borough: "Wandsworth",
  postcodes: ["SW18"],

  headline:
    "L&G New Acres — 1,034 homes, London's largest single BTR site in Wandsworth, completed 2024. Ram Quarter masterplan on the former Young's brewery site. Clean T1.1 safety pass in one of the safer inner-London boroughs.",
  preview:
    "Wandsworth borough is one of the safer inner-London boroughs (~70/1k). Two significant projects: L&G New Acres (1,034 homes, flagship UK BTR, 75%+ let, Tier 13 operator) and Ram Quarter (Greenland Group, former Young's brewery). SWR gives Waterloo in ~23 min. Single SWR line is the connectivity weakness — redundancy 2/5, average 25.75 min. 20-39 at 50% — top-skew.",

  long_form: {
    full: "",
    history: "",
    vibe: "",
    weekday: "",
    weekend: "",
    notable: "Ram Quarter — former Young's Brewery site. L&G New Acres — 1,034-home flagship UK BTR scheme.",
    croydon_comparison: "",
  },

  zones: ["Zone 2", "Zone 3"],
  connectivity: {
    lines: [
      { name: "South Western Railway", type: "rail" },
    ],
    primary_stations: [
      { name: "Wandsworth Town", lines: ["SWR"], walk_minutes_from_centre: 5 },
      { name: "Clapham Junction", lines: ["Southern", "SWR", "Overground"], walk_minutes_from_centre: 15 },
    ],
    times_to_anchors: { city_of_london: 23, canary_wharf: 28, soho_fitzrovia: 23, kings_cross_shoreditch: 28 },
    multi_cluster_score: 2,
    redundancy_score: 2,
    notes: "Single SWR line at Wandsworth Town. Clapham Junction walkable for redundancy. Redundancy 2/5. Average 25.75 min. 2/4 anchors ≤25.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Wandsworth Town ward: 20-39 50% — top-skew. Ram Quarter / Wandsworth Riverside drive the pattern. Census 2021 via CrystalRoof.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "below", crime_vs_croydon: "much-safer", after_dark_assessment: "Wandsworth Town ward inherits the borough's safer-than-average profile. Ram Quarter and Wandsworth Riverside benefit from masterplan-stewardship pattern. Wandsworth Town station is a quiet Southwestern hub, not a phone-snatch magnet.", concerns: [], sources: [] },
  green_and_water: { has_river: true, has_canal: false, has_dock: false, parks: [{ name: "Wandsworth Park", walk_minutes: 8, notes: "Thames-side park" }, { name: "King George's Park", walk_minutes: 10, notes: "" }], overall_assessment: "Thames-adjacent. Wandsworth Park and King George's Park within walking distance." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. Ram Quarter has some on-site retail." },
  regeneration: { status: "active", investment_pipeline: "Ram Quarter (Greenland Group). L&G New Acres. Wandsworth Riverside (Berkeley).", recent_milestones: ["L&G New Acres completed 2024 (1,034 homes, 75%+ let)"], upcoming_milestones: ["Continued Wandsworth Riverside delivery"], trajectory_through_2027: "Ascending. L&G flagship delivered. Ram Quarter mature. Riverside continuing.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "partial", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Clean pass. Wandsworth borough is one of the safer inner-London boroughs. No specific concentrated violent-crime signal.",
        "1.2": "L&G New Acres — 1,034 homes, modern managed BTR. Ram Quarter — modern masterplan stock.",
        "1.3": "PARTIAL. Single SWR line at Wandsworth Town. Average 25.75 min to anchors.",
        "1.4": "L&G (Tier 13) is the operator at New Acres. Greenland on Ram Quarter. Both have active rental markets.",
        "1.5": "Ram Quarter and New Acres benefit from masterplan-stewardship pattern.",
        "1.6": "Ascending — L&G flagship completed 2024, Ram Quarter mature.",
      },
      "good",
      "T1 clean on safety, strong on BTR operator presence. T1.3 connectivity is the partial — single SWR line.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "partial", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Ram Quarter has on-site retail. Wandsworth High Street provides additional essentials.",
        "2.2": "Standard local grocery. Not destination-quality.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Thames-adjacent. Wandsworth Park and King George's Park walkable.",
        "2.5": "Quiet residential. Not a nightlife destination.",
        "2.7": "20-39 at 50% — top-skew.",
      },
      "moderate",
      "Good daily life in a quiet residential setting. Amenity layer is functional but not deep.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "partial", "3.4": "partial", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "Active — L&G New Acres, Ram Quarter, Wandsworth Riverside.",
        "3.2": "Ram Quarter (former Young's Brewery) is the heritage anchor. No major cultural institution.",
        "3.3": "Identity is 'regenerating riverside residential' — recognisable but not a destination.",
        "3.4": "15-minute completeness is partial — functional but not dense.",
        "3.5": "No architectural press signal. Ram Quarter narrative but no jury architecture.",
        "3.6": "Quiet residential rhythm.",
      },
      "moderate",
      "T3 moderate. Ram Quarter gives heritage anchor. Destination identity is limited.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "partial", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 2/5 — 2/4 anchors ≤25. Average 25.75 min.",
        "5.2": "Single SWR line. Clapham Junction walkable. Redundancy 2/5.",
        "5.3": "Ascending — L&G flagship, Ram Quarter, Riverside.",
        "5.4": "Third-space culture is thin.",
      },
      "moderate",
      "T5 moderate. Ascending trajectory is the positive. Multi-cluster and redundancy are weak.",
    ),
    overall_grade: "B",
    grade_reasoning: "B — clean safety, L&G flagship BTR (1,034 homes), Ram Quarter heritage, strong demographics. Constrained by weak connectivity (single SWR line, slow anchor times) and L&G's opaque qualification policy (Tier 13, unknown grad-visa realism).",
  },

  // ── RESEARCH: Wandsworth Town projects ───────────────────────────────
  // L&G Living (New Acres):
  //   Operator: L&G Living (Legal & General)
  //   Referencing: unknown (L&G Living referencing not publicly documented)
  //   Agreement type: ast (institutional BTR)
  //   International friendly: unknown
  //   Visa friendly: unknown
  //   Prices: UNVERIFIED — L&G does not publicly list rental prices
  //     Amenities included: 25m heated lido, gym, workspaces, roof terrace
  //   Cost tier: premium (estimated for SW18 flagship BTR)
  //   Grad visa realism: unknown (L&G "Tier 13" operator — opaque policy)
  //
  // Ram Quarter (Greenland): standard agency referencing
  // Wandsworth Riverside / Mills (Berkeley): ownership-led
  // ───────────────────────────────────────────────────────────────────────

  projects: [
    newAcresWandsworth,
    ramQuarter,
    wandsworthRiverside,
    wandsworthMills,
    riversideQuarter,
    osiersPoint,
    wandleDeltaFuture,
  ],

  external_links: [
    { url: "https://www.ramquarter.com/", label: "Ram Quarter", type: "developer", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default wandsworthTown;
