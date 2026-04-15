import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const dandiBattersea = buildProject({
  id: "dandi-battersea", area_id: "clapham-junction", name: "Dandi Battersea", developer: "Dandi", operator: "Dandi", building_type: "BTR", living_model: "co-living", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Co-living at Haydon Way, SW11. Studios from ~£1,750/month all-inclusive. Licence agreement — Right to Rent check only, no formal credit/income referencing. Short stays available.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Co-living specification. Modern build.",
    t4_1_amenity_package: "Decent — communal spaces, all-inclusive living.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
dandiBattersea.external_links = [
  { url: "https://dandi.com/cityliving/dandi-battersea/", label: "Dandi Battersea", type: "operator", accessed_date: "2026-04-15" },
];
dandiBattersea.rental.price_transparency = "listed";

const claphamJunction: Area = {
  id: "clapham-junction",
  name: "Clapham Junction",
  aliases: ["The Junction"],
  borough: "Wandsworth",
  postcodes: ["SW11"],

  headline:
    "UK's busiest interchange — Southern + SWR + Overground at Zone 2. Strong redundancy but surprisingly slow anchor times because every journey requires a mainline-to-tube interchange.",
  preview:
    "Clapham Junction is the UK's busiest station by passenger movements, with Southern, SWR, and Overground services. The reputation as a mega-hub masks the fact that tube-equivalent journey times are not that fast — every anchor requires a mainline-to-tube interchange at Waterloo or Victoria, adding 5-10 minutes. Clean T1 pass. Plateaued regeneration — proposed masterplans at concept stage only.",

  long_form: {
    full: "Clapham Junction's reputation as 'the busiest station in the UK' is a passenger-count claim, not a speed claim. Every journey to a central anchor requires a mainline-to-tube interchange at Waterloo or Victoria, which adds 5-10 minutes. Average anchor time is 24.5 min — surprisingly weak given the scale. Southern + SWR + Overground give three genuinely independent services (redundancy 4/5), but there is no tube direct. The area has been the subject of long-running masterplan proposals (station air-rights schemes) none of which has reached delivery. Strong green access with Wandsworth Common and Clapham Common both in range.",
    history: "Victorian-era railway interchange. Busiest station in the UK by passenger movements. Long-running regeneration proposals have not materialised.",
    vibe: "Busy, well-connected south London hub. St John's Hill and Northcote Road provide strong independent retail and dining.",
    weekday: "",
    weekend: "",
    notable: "UK's busiest interchange by passenger movements. Northcote Road independent shopping street.",
    croydon_comparison: "Clapham Junction has stronger transport redundancy than Croydon (three independent mainline services) but the actual speed to anchors is surprisingly similar because of the interchange penalty. Green access is comparable (two commons).",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Southern", type: "rail" },
      { name: "South Western Railway", type: "rail" },
      { name: "London Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "Clapham Junction", lines: ["Southern", "South Western Railway", "London Overground"], walk_minutes_from_centre: 3 },
    ],
    times_to_anchors: { city_of_london: 22, canary_wharf: 35, soho_fitzrovia: 18, kings_cross_shoreditch: 23 },
    multi_cluster_score: 1,
    redundancy_score: 4,
    notes: "Southern + SWR + Overground — three genuinely independent services at one interchange. Not 5/5 because there is no tube direct. Average 24.5 min — surprisingly weak given the scale. 1/4 anchors ≤25 strictly.",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Not yet populated.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "average", crime_vs_croydon: "much-safer", after_dark_assessment: "Clean T1 pass. Station concentration is a caveat not a fail.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Wandsworth Common", size_acres: 175, walk_minutes: 10, notes: "Large common to the south-west" }, { name: "Clapham Common", walk_minutes: 15, notes: "Large common to the east" }], overall_assessment: "Strong green + absent water. Two real commons in range. T2.4: Pass — strong." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. Third Space Clapham Junction is nearby per gym sweep." },
  regeneration: { status: "early", investment_pipeline: "Proposed masterplans at concept stage; no delivery in the window.", recent_milestones: [], upcoming_milestones: [], trajectory_through_2027: "Stable. The transport proposition is unchanged but the land-use proposition is not delivering. Plateaued.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Clean pass. Wandsworth borough. Station concentration is a caveat not a fail.",
        "1.2": "Modern stock present — Victorian conversion stock plus smaller new-build.",
        "1.3": "Southern + SWR + Overground — three independent services. Zone 2.",
        "1.4": "Active rental market via letting agents. Operator-thin at BTR level.",
        "1.5": "Public realm in good order.",
        "1.6": "Not in decline — stable.",
      },
      "good",
      "T1 clean pass on all six rows.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "unknown", "2.2": "unknown", "2.3": "unknown", "2.4": "pass", "2.5": "unknown", "2.7": "unknown" },
      {
        "2.4": "Strong green — Wandsworth Common (175 acres, 10 min) and Clapham Common (15 min).",
      },
      "moderate",
      "T2 largely unpopulated. Strong green confirmed.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "fail", "3.2": "pass", "3.3": "pass", "3.4": "unknown", "3.5": "unknown", "3.6": "unknown" },
      {
        "3.1": "No active regeneration delivering. Proposed masterplans at concept stage only.",
        "3.2": "Northcote Road independent shopping street. Strong local retail identity.",
        "3.3": "Clapham Junction is a well-known London location.",
      },
      "moderate",
      "T3 moderate. Strong identity but no regeneration activity.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "unknown", "5.4": "unknown" },
      {
        "5.1": "1/4 anchors ≤25 strictly. Average 24.5 min. Surprisingly weak given the reputation.",
        "5.2": "Redundancy 4/5 — three independent mainline services. No tube direct.",
      },
      "moderate",
      "T5 moderate. Reputation exceeds reality on speed; redundancy is genuinely strong.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — clean T1 pass, strong green access, strong identity. The gap between reputation and reality on speed is a meaningful finding. Operator-thin at BTR level. Plateaued regeneration.",
  },

  projects: [
    // RESEARCH: One Clapham Junction (Mount Anvil / Peabody) — primarily for sale + shared ownership. Rental via secondary market. Est. 1-bed £2,200-£2,500/mo.
    // REALISM: unlikely (BTS via private landlords/agents, standard referencing)
    // COST_TIER: premium (est. 1-bed £2,200-£2,500)
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "one-clapham-junction", area_id: "clapham-junction", name: "One Clapham Junction", developer: "Mount Anvil / Peabody", operator: "Private sale / shared ownership", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "307 homes across 6 buildings (up to 11 storeys). The Ascent: 2025; The Approach: 2026. Hawkins\\Brown-designed. 24hr concierge, Peloton hub, landscaped courtyard. Rental via secondary market — 1-bed est. GBP 2,200-2,500/mo.",
      amenity_tier: "strong", is_signature: false, architects: ["Hawkins\\Brown"], overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Mount Anvil / Peabody 2025-2026 delivery. Modern specification expected.",
        t4_1_amenity_package: "24hr concierge, Peloton hub/fitness suite, landscaped courtyard and garden, secure parking, cycle storage. Strong for a for-sale scheme.",
        t4_4_signature_arch: "Hawkins\\Brown as architect — respected practice but not a jury-winning scheme.",
      },
    }),
    // RESEARCH: Junction House (Taylor Wimpey) — BTS complete, all sold. Rental via private landlords. Est. 1-bed £2,000-£2,400/mo.
    // REALISM: unlikely (standard private landlord referencing)
    // COST_TIER: premium (est. 1-bed £2,000-£2,400)
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "junction-house", area_id: "clapham-junction", name: "Junction House", developer: "Taylor Wimpey", operator: "Private landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "93-unit Taylor Wimpey development at York Gardens. Complete c. 2023, all sold. Roof terrace, residents' lounge, concierge. Rental via private landlords — 1-bed est. GBP 2,000-2,400/mo.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Taylor Wimpey 2023 specification. Volume housebuilder standard.",
        t4_1_amenity_package: "Roof terrace, residents' lounge, concierge. Decent.",
        t4_4_signature_arch: "No architectural press signal.",
      },
    }),
    dandiBattersea,
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

// ── Project external links & price transparency ──────────────────────────
const oneClaphamJunction = claphamJunction.projects.find(p => p.id === "one-clapham-junction")!;
oneClaphamJunction.external_links = [
  { url: "https://mountanvil.com/find-your-home/one-clapham/", label: "Mount Anvil — One Clapham", type: "developer", accessed_date: "2026-04-12" },
  { url: "https://www.peabodynewhomes.co.uk/find-a-home/one-clapham/", label: "Peabody — One Clapham", type: "developer", accessed_date: "2026-04-12" },
];
oneClaphamJunction.rental.price_transparency = "enquire";

const junctionHouse = claphamJunction.projects.find(p => p.id === "junction-house")!;
junctionHouse.external_links = [
  { url: "https://junctionhouse.uk/", label: "Junction House — official site", type: "developer", accessed_date: "2026-04-12" },
];
junctionHouse.rental.price_transparency = "enquire";

export default claphamJunction;
