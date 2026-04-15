import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects ─────────────────────────────────────────────────────────
const triptychBankside = buildProject({
  id: "triptych-bankside", area_id: "borough-london-bridge", name: "Triptych Bankside",
  developer: "Great Portland Estates", operator: "Agent-managed", building_type: "Build-to-Sell",
  build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Art-led twin towers (16 and 19 storeys) at 185 Park Street by Squire and Partners. 169 units. Direct access to Tate Modern and Borough Market. Premium Zone 1 pricing — 1-bed from ~£2,800 pcm.",
  amenity_tier: "decent", is_signature: true, architects: ["Squire and Partners"], overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "2024 completion by Great Portland Estates. Generally positive finish-quality reviews.",
    t4_1_amenity_package: "Concierge, residents' lounge, gym, landscaped gardens, cycle storage.",
    t4_4_signature_arch: "Squire and Partners — recognised London practice with art-led design language.",
  },
});
triptychBankside.rental.price_transparency = "enquire";
triptychBankside.external_links = [
  { url: "https://triptychbankside.com/", label: "Triptych Bankside", type: "developer", accessed_date: "2026-04-12" },
];

const banksideYardsOpus = buildProject({
  id: "bankside-yards-opus", area_id: "borough-london-bridge", name: "Bankside Yards — Opus",
  developer: "Native Land + Gamuda Land", operator: "unknown", building_type: "Mixed",
  build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "50-storey tower by PLP Architecture. 249 apartments in Opus tower; ~700+ across full scheme. Ultra-premium SE1 riverside position. Expected 2027-2028 completion.",
  amenity_tier: "premium", is_signature: true, architects: ["PLP Architecture"], overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Unbuilt — expected ultra-premium specification given 50-storey riverside tower positioning.",
    t4_1_amenity_package: "Pool, spa, gym, residents' lounges, rooftop terrace, commercial arches below.",
    t4_4_signature_arch: "PLP Architecture — internationally recognised practice. 50-storey tower is a landmark form.",
  },
});
banksideYardsOpus.rental.price_transparency = "enquire";
banksideYardsOpus.external_links = [
  { url: "https://banksideyards.com/", label: "Bankside Yards", type: "developer", accessed_date: "2026-04-12" },
  { url: "https://www.native-land.com/projects/opus/", label: "Opus — Native Land", type: "developer", accessed_date: "2026-04-12" },
];

const southwarkBridgeRoad251 = buildProject({
  id: "251-southwark-bridge-road", area_id: "borough-london-bridge", name: "251 Southwark Bridge Road",
  developer: "London Square", operator: "Agent-managed", building_type: "Build-to-Sell",
  build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Boutique 8-storey scheme of ~50 units near Bankside. 1-bed from ~£2,200 pcm. Standard AST via agent.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "2023 completion by London Square. Boutique scale.",
    t4_1_amenity_package: "Concierge, gym, landscaped courtyard.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
southwarkBridgeRoad251.rental.price_transparency = "enquire";

const bermondsLocke = buildProject({
  id: "bermonds-locke", area_id: "borough-london-bridge", name: "Bermonds Locke", developer: "Staycity Group", operator: "Locke (Staycity)", building_type: "BTR", living_model: "apart-hotel", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Apart-hotel at 157 Tower Bridge Road, SE1. All-inclusive — bills, council tax, Wi-Fi, weekly cleaning. No deposit, no admin fees. Hospitality licence — not an AST. Cafe, bar, gym, coworking.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern apart-hotel specification. Design-led Locke brand.",
    t4_1_amenity_package: "Strong — cafe, bar, gym, coworking. Hotel-grade services.",
    t4_4_signature_arch: "Not signature-authored but design-led.",
  },
});
bermondsLocke.external_links = [
  { url: "https://www.lockeliving.com/en/london/bermonds-locke", label: "Bermonds Locke", type: "operator", accessed_date: "2026-04-15" },
];
bermondsLocke.rental.price_transparency = "enquire";

const boroughLondonBridge: Area = {
  id: "borough-london-bridge",
  name: "Borough / London Bridge",
  aliases: ["Borough", "London Bridge", "Borough Market"],
  borough: "Southwark",
  postcodes: ["SE1"],

  headline:
    "Zone 1 with five transport products at London Bridge — 4 minutes to Bank, 7 to Canary Wharf. Borough Market is the cultural anchor. The best connectivity in south London, tied with King's Cross for fastest average anchor time.",
  preview:
    "London Bridge gives five products at one interchange (Northern, Jubilee, Thameslink, Southeastern, Southern). Average 7.25 min to anchors — tied for best in the entire dataset. Borough Market is a world-class food anchor. The limitation is that this is premium Zone 1 pricing with no dominant BTR operator for adult renters.",

  long_form: {
    full: "",
    history: "",
    vibe: "",
    weekday: "",
    weekend: "",
    notable: "Borough Market — one of London's oldest and most significant food markets. The Shard. Southwark Cathedral.",
    croydon_comparison: "",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
      { name: "Jubilee", type: "tube" },
      { name: "Thameslink", type: "rail" },
      { name: "Southeastern", type: "rail" },
      { name: "Southern", type: "rail" },
    ],
    primary_stations: [
      { name: "London Bridge", lines: ["Northern", "Jubilee", "Thameslink", "Southeastern", "Southern"], walk_minutes_from_centre: 5 },
      { name: "Borough", lines: ["Northern"], walk_minutes_from_centre: 5 },
    ],
    times_to_anchors: { city_of_london: 4, canary_wharf: 7, soho_fitzrovia: 10, kings_cross_shoreditch: 8 },
    multi_cluster_score: 5,
    redundancy_score: 5,
    notes: "London Bridge gives 5 products at one interchange. Redundancy 5/5. Average 7.25 min — tied for best with King's Cross.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "London Bridge & West Bermondsey ward: 20-39 51% — top-skew. Census 2021 via CrystalRoof.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "average", crime_vs_croydon: "much-safer", after_dark_assessment: "Busy transport hub with high footfall at all hours. Borough Market area is well-lit and active.", concerns: [], sources: [] },
  green_and_water: { has_river: true, has_canal: false, has_dock: false, parks: [], overall_assessment: "Thames-side. Limited dedicated green space — Potters Fields Park small but Thames-adjacent." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. Borough Market is the headline food anchor." },
  regeneration: { status: "complete", investment_pipeline: "London Bridge Quarter. The Shard ecosystem.", recent_milestones: [], upcoming_milestones: [], trajectory_through_2027: "Mature. Already at peak development.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "partial", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Safe. Strong T1.3 and T1.5.",
        "1.2": "One Tower Bridge (Berkeley) and Borough Yards — modern stock present, though ownership-led.",
        "1.3": "Five products at London Bridge. Best connectivity score in the dataset.",
        "1.4": "No dominant BTR operator for adult renters. Borough Yards ownership-led. One Tower Bridge premium ownership-led.",
        "1.5": "Public realm is strong — Borough Market, The Shard, London Bridge station redevelopment.",
        "1.6": "Not in decline — mature and stable.",
      },
      "good",
      "T1 pass on all six rows. T1.4 is partial — no dominant BTR operator.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "partial", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "Borough Market and the surrounding retail make daily essentials walkable and high-quality.",
        "2.2": "Borough Market is world-class for quality grocery and fresh food.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Thames-adjacent but limited dedicated green space. Potters Fields Park is small.",
        "2.5": "Busy transport hub and Borough Market area — not the quietest residential environment at night.",
        "2.7": "20-39 cohort at 51% — top-skew.",
      },
      "good",
      "Strong daily life driven by Borough Market. Quiet-at-night is the weakest row.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "pass", "3.6": "pass" },
      {
        "3.1": "Mature investment — London Bridge Quarter, The Shard, Borough Market renovations.",
        "3.2": "Borough Market is a world-class cultural and commercial anchor.",
        "3.3": "Very strong identity — Borough Market, The Shard, Southwark Cathedral, Thames-side.",
        "3.4": "15-minute completeness is excellent — food, drink, transport, culture, health all within walking distance.",
        "3.5": "The Shard (Renzo Piano) is architecturally significant. London Bridge station redevelopment.",
        "3.6": "Strong day/night rhythm — Borough Market daytime, restaurant scene evening, busy transport hub.",
      },
      "good",
      "T3 is excellent. Borough / London Bridge has one of the strongest identities in London.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "pass" },
      {
        "5.1": "Multi-cluster score 5/5 — all four anchors ≤10 min. Average 7.25 min.",
        "5.2": "Five products at London Bridge — maximum redundancy.",
        "5.3": "Mature and stable rather than ascending. Already at peak.",
        "5.4": "Numerous cafes, restaurants, and cultural venues for third-space use.",
      },
      "good",
      "Strongest T5 in the dataset — unmatched connectivity.",
    ),
    overall_grade: "A",
    grade_reasoning: "A — best connectivity in the dataset, strongest identity in south London, world-class food anchor. No dominant BTR operator (T1.4 partial) and premium Zone 1 pricing makes grad-visa realism unknown, but the location quality is unambiguous.",
  },

  projects: [triptychBankside, banksideYardsOpus, southwarkBridgeRoad251, bermondsLocke],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default boroughLondonBridge;
