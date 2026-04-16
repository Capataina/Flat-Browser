import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects (extracted for external_links + price_transparency mutation) ──

// RESEARCH: Get Living "The Filigree" Lewisham — 1-bed from £1,750/mo. Homeppl referencing.
// CRITICAL UPDATE 2026-04-16: BUILDING CLOSED — major water main leak early 2025, reopening "mid to late 2026"
// per Get Living's own site. NOT AVAILABLE for late-May-2026 move-ins. Treat as unavailable until Get Living re-confirms.
const getLivingLewisham = buildProject({
  id: "get-living-lewisham", area_id: "lewisham-gateway", name: "Get Living Lewisham (CLOSED — water remediation)", developer: "Muse Developments / Barratt", operator: "Get Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "blocked",
  preview: "[BUILDING CLOSED MID-2025 — water main leak; reopening mid to late 2026 per operator] Get Living's third London location. Same Homeppl referencing backend as East Village. East Village is the live target operator-wise; Filigree returns once water remediation completes.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern BTR from Muse/Barratt with Get Living management. Build quality details not yet researched.",
    t4_1_amenity_package: "Get Living standard amenity package — details not yet researched.",
    t4_4_signature_arch: "Not signature-authored. Standard Gateway mixed-use.",
  },
});
getLivingLewisham.external_links = [
  { url: "https://www.getliving.com/our-neighbourhoods/the-filigree/", label: "Get Living — The Filigree, Lewisham", type: "operator", accessed_date: "2026-04-12" },
];
getLivingLewisham.rental.price_transparency = "listed";

const lewishamGatewayCore = buildProject({
  id: "lewisham-gateway-core", area_id: "lewisham-gateway", name: "Lewisham Gateway", developer: "Muse Developments / Barratt", operator: "Muse / Barratt", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Mixed ownership-led Gateway regeneration with some rental.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern mixed-use Gateway delivery.",
    t4_1_amenity_package: "Standard mixed-use amenity.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
lewishamGatewayCore.external_links = [
  { url: "https://lewishamgateway.com/", label: "Lewisham Gateway", type: "developer", accessed_date: "2026-04-12" },
];

// RESEARCH: Fizzy Lewisham (Greystar) — 1-bed from £1,280/mo. Homeppl referencing confirmed.
const fizzyLewisham = buildProject({
  id: "fizzy-lewisham", area_id: "lewisham-gateway", name: "Fizzy Lewisham", developer: "Watkin Jones / CBRE fund", operator: "Greystar", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable-with-guarantor",
  preview: "184-unit BTR scheme completed March 2024. Greystar (formerly Fizzy Living) operator. 1-bed from ~£1,280 pcm — notably lower price point than The Filigree. Fizzy brand known for flexible, renter-friendly approach. On-site property manager.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Modern BTR — Watkin Jones construction, Greystar/Fizzy management. ~12 storeys. 2024 completion.",
    t4_1_amenity_package: "Landscaped rooftop terrace, co-working space, fast WiFi included, secure bike storage, 24hr concierge, CCTV, video door entry.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
fizzyLewisham.external_links = [
  { url: "https://fizzyliving.com/locations/lewisham", label: "Fizzy Living — Lewisham", type: "operator", accessed_date: "2026-04-12" },
];
fizzyLewisham.rental.price_transparency = "listed";

const lewishamGateway: Area = {
  id: "lewisham-gateway",
  name: "Lewisham Gateway",
  aliases: ["Lewisham"],
  borough: "Lewisham",
  postcodes: ["SE13"],

  headline:
    "Get Living's third London location — DLR + Southeastern, Zone 2/3. The single most important sleeper grad-visa target from the BTR operator sweep. T1.1 safety is marginal — Lewisham town centre is structurally similar to Croydon.",
  preview:
    "Get Living operates at Lewisham Gateway (same Homeppl backend as East Village — potentially the same operator-level policy). DLR + Southeastern give two independent products. Lewisham Central ward is 53% in 20-39 — top-skew surprise. T1.1 safety is marginal: Lewisham town centre at ~119.4/1k is not the upgrade Caner is looking for. The BTR operator presence is what makes this interesting despite the T1.1 concern.",

  long_form: {
    full: "",
    history: "",
    vibe: "",
    weekday: "",
    weekend: "",
    notable: "Citizens House (Archio) — RIBA London Client of the Year 2025. 11 affordable homes on a former backyard garage site.",
    croydon_comparison: "",
  },

  zones: ["Zone 2", "Zone 3"],
  connectivity: {
    lines: [
      { name: "DLR", type: "dlr" },
      { name: "Southeastern", type: "rail" },
    ],
    primary_stations: [
      { name: "Lewisham", lines: ["DLR", "Southeastern"], walk_minutes_from_centre: 3 },
    ],
    times_to_anchors: { city_of_london: 20, canary_wharf: 13, soho_fitzrovia: 28, kings_cross_shoreditch: 25 },
    multi_cluster_score: 2,
    redundancy_score: 3,
    notes: "DLR + Southeastern — two independent products. Redundancy 3/5. Average 21.5 min. 2/4 anchors ≤25. Future Bakerloo extension would transform connectivity.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Lewisham Central ward: 20-39 53% — top-skew surprise. Gateway regeneration has already converted the ward. Census 2021 via CrystalRoof.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "above", crime_vs_croydon: "similar", after_dark_assessment: "Lewisham borough ~119.4/1k. Lewisham Central / town centre is busier than surrounding residential wards. Violent-crime level is above Croydon on per-capita headline. Structurally similar to Croydon on crime-and-decline axes.", concerns: ["T1.1 marginal — leaning fail", "Lewisham town centre does not pass the upgrade test", "Structurally similar to Croydon on crime-and-decline axes"], sources: [] },
  green_and_water: { has_river: true, has_canal: false, has_dock: false, parks: [{ name: "Ladywell Fields", walk_minutes: 10, notes: "River Ravensbourne corridor" }], overall_assessment: "River Ravensbourne runs through. Ladywell Fields walkable." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "Lewisham Gateway (Muse Developments / Barratt). LeeGate Shopping Centre regeneration proposed.", recent_milestones: ["Citizens House — RIBA London Client of the Year 2025", "Get Living Lewisham operational"], upcoming_milestones: ["LeeGate Shopping Centre regeneration", "Future Bakerloo extension (uncertain timeline)"], trajectory_through_2027: "Ascending. Gateway delivering. Get Living operational. But the Bakerloo extension timeline is uncertain.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "partial", "1.6": "pass" },
      {
        "1.1": "MARGINAL — leaning fail. Lewisham town centre at ~119.4/1k is structurally similar to Croydon. Does not pass the upgrade test.",
        "1.2": "Get Living operates at Lewisham Gateway — modern managed rental stock present.",
        "1.3": "DLR + Southeastern. Zone 2/3.",
        "1.4": "Get Living (same Homeppl backend as East Village). Genuine BTR operator presence.",
        "1.5": "Gateway is new but wider Lewisham town centre public realm is uneven.",
        "1.6": "Not in decline — active Gateway delivery, Get Living, RIBA award.",
      },
      "moderate",
      "T1 passes on BTR operator presence (Get Living) but T1.1 safety is the concern. The BTR operator makes this interesting despite the location.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "partial", "2.3": "unknown", "2.4": "partial", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "Town centre provides walkable daily essentials.",
        "2.2": "Standard town-centre grocery. Not destination-quality.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Ladywell Fields is the nearest green asset. Not frontage.",
        "2.5": "Town centre — busier than residential wards.",
        "2.7": "20-39 at 53% — top-skew. Surprise result.",
      },
      "moderate",
      "Functional daily life. Demographics are the headline positive.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "partial", "3.4": "partial", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "Active regeneration — Gateway delivery, Get Living, LeeGate proposed.",
        "3.2": "No strong cultural or commercial anchor beyond the town centre itself.",
        "3.3": "Identity is 'regenerating town centre' — not yet a destination.",
        "3.4": "15-minute completeness is partial — functional but not deep.",
        "3.5": "Citizens House (RIBA 2025) is an architectural signal. Gateway is standard mixed-use.",
        "3.6": "Town centre rhythm — busy daytime, quieter at night.",
      },
      "moderate",
      "T3 moderate. Regeneration is the story but destination identity is not yet formed.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 2/5 — 2/4 anchors ≤25. Canary Wharf 13 min is the headline. Average 21.5 min.",
        "5.2": "DLR + Southeastern — two genuinely independent products. Redundancy 3/5.",
        "5.3": "Ascending — Gateway delivering, Get Living, Bakerloo extension (if it happens).",
        "5.4": "Third-space culture is thin.",
      },
      "moderate",
      "Good redundancy and ascending trajectory. Multi-cluster reach is limited.",
    ),
    overall_grade: "B",
    grade_reasoning: "B — Get Living BTR presence is the standout finding (sleeper grad-visa target). T1.1 safety is the structural concern: Lewisham town centre is too similar to Croydon on the crime axis. If T1.1 resolves cleanly, this could upgrade.",
  },

  projects: [getLivingLewisham, lewishamGatewayCore, fizzyLewisham],

  external_links: [
    { url: "https://www.getliving.com/lewisham/", label: "Get Living Lewisham", type: "developer", accessed_date: "2026-04-12" },
    { url: "https://lewishamgateway.com/", label: "Lewisham Gateway", type: "developer", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default lewishamGateway;
