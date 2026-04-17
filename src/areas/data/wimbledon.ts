import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Project consts (extracted for external_links / price_transparency mutation) ──
// "Essential Living Wimbledon" was REMOVED on 2026-04-12.
// Essential Living's confirmed 2026 portfolio is: Vantage Point (Islington), Dressage Court
// (Bethnal Green), Union Wharf (Greenwich), Berkshire House (Maidenhead). No Wimbledon
// property has ever appeared on essentialliving.co.uk. Web search returned zero results.
// The sweep agent (agent 11, BTR operator discovery) hallucinated this entry — likely
// seeing Essential Living in a list of BTR operators and projecting a Wimbledon presence
// that doesn't exist. Wimbledon has no flagship BTR operator.

const wimbledonPlace = buildProject({
  id: "wimbledon-place", area_id: "wimbledon", name: "Wimbledon Place", developer: "Thornsett Group", operator: "Private sale", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "135 apartments + 120-room YMCA hostel. Near-complete, Q1 2026. For-sale scheme — rental via secondary market. Gym, concierge, co-working, cafes. 1-bed est. GBP 1,800-2,200/mo.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "2026 completion. Modern specification expected.",
    t4_1_amenity_package: "Gym, concierge, co-working, cafes. Decent for a for-sale scheme.",
    t4_4_signature_arch: "No architectural press signal.",
  },
});
wimbledonPlace.rental.price_transparency = "enquire";

const abbeyWall = buildProject({
  id: "abbey-wall", area_id: "wimbledon", name: "Abbey Wall", developer: "Indigo Scott", operator: "Private sale", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["buy"], realism: "blocked",
  preview: "Boutique 54-unit scheme (studios, apartments, penthouses) on Station Road. 6 storeys. c. 2025 completion. Balconies, social spaces, landscaped roof gardens. For-sale — minimal managed rental implications.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "2025 boutique new-build. Modern specification expected.",
    t4_1_amenity_package: "Balconies, social spaces, landscaped roof gardens. Decent for a boutique scheme.",
    t4_4_signature_arch: "No architectural press signal.",
  },
});
abbeyWall.rental.price_transparency = "unknown";

const wimbledon: Area = {
  id: "wimbledon",
  name: "Wimbledon",
  aliases: ["Wimbledon Centre Court"],
  borough: "Merton",
  postcodes: ["SW19"],

  headline:
    "District + Thameslink + Tramlink + rail at Zone 3 — strong multi-modal access and premium town-centre feel. Discovery candidate from sweep agent 11.",
  preview:
    "Wimbledon is a discovery candidate surfaced by the sweep. District Line, Thameslink, Tramlink, and mainline rail give multi-modal access at Zone 3. No flagship BTR operator — rental stock is BTS via agents. Limited sweep data — most fields are unpopulated pending further research.",

  long_form: {
    full: "Wimbledon was surfaced as a discovery candidate by the sweep. The area benefits from District Line, Thameslink, Tramlink, and mainline rail services. It sits on the edge of the SW London sphere that the candidate list focused on less aggressively. No flagship BTR operator is present — rental stock is BTS via letting agents. The area is a genuine upgrade target on most T-rows but sweep data is thin — safety, demographics, and amenity data have not yet been populated.",
    history: "",
    vibe: "",
    weekday: "",
    weekend: "",
    notable: "The Championships (Wimbledon tennis). Wimbledon Common (1,140 acres).",
    croydon_comparison: "Wimbledon has stronger transport (District Line, Thameslink, Tramlink) and a premium town-centre feel. Tramlink provides a direct connection to Croydon. Price point is higher than Croydon.",
  },

  zones: ["Zone 3"],
  connectivity: {
    lines: [
      { name: "District", type: "tube" },
      { name: "Thameslink", type: "rail" },
      { name: "Tramlink", type: "tram" },
      { name: "South Western Railway", type: "rail" },
    ],
    primary_stations: [
      { name: "Wimbledon", lines: ["District", "Thameslink", "Tramlink", "South Western Railway"], walk_minutes_from_centre: 3 },
    ],
    times_to_anchors: { city_of_london: 28, canary_wharf: 40, soho_fitzrovia: 22, kings_cross_shoreditch: 30 },
    multi_cluster_score: 1,
    redundancy_score: 5,
    notes: "District + Thameslink + Tramlink + SWR at a single station — strongest mode-redundancy outside Zone 1. But end-of-line position: only Soho/Fitzrovia under 25-min; Canary Wharf 40-min is the weakness. Quality-of-seat advantage at terminus.",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Not yet populated.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "average", crime_vs_croydon: "safer", after_dark_assessment: "", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [], overall_assessment: "Not yet populated. Wimbledon Common is a major green asset." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. Nuffield Health Wimbledon noted in gym sweep." },
  regeneration: { status: "complete", investment_pipeline: "", recent_milestones: [], upcoming_milestones: [], trajectory_through_2027: "Not yet researched.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "unknown", "1.2": "pass", "1.3": "pass", "1.4": "unknown", "1.5": "unknown", "1.6": "unknown" },
      {
        "1.2": "Modern rental stock present via BTS developments (Wimbledon Place, Abbey Wall). No flagship BTR operator.",
        "1.3": "District + Thameslink + Tramlink + SWR — multi-modal access at Zone 3.",
      },
      "moderate",
      "T1 partially populated. Modern stock and transport confirmed; other rows not yet researched.",
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
      { "3.1": "unknown", "3.2": "pass", "3.3": "pass", "3.4": "unknown", "3.5": "unknown", "3.6": "unknown" },
      {
        "3.2": "The Championships (Wimbledon tennis) — world-class cultural anchor.",
        "3.3": "Wimbledon is one of the most recognisable place names in London.",
      },
      "moderate",
      "T3 partially populated. Exceptional name recognition and cultural anchor.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "unknown", "5.2": "unknown", "5.3": "unknown", "5.4": "unknown" },
      {},
      "moderate",
      "T5 not yet populated. Awaiting connectivity research.",
    ),
    overall_grade: "C",
    grade_reasoning: "C grade (provisional, downgraded from B) — discovery candidate with strong name recognition and multi-modal transport, but no BTR operator and most fields unpopulated. The removal of the hallucinated Essential Living project weakens T1.4 (professional rental market).",
  },

  projects: [
    wimbledonPlace,
    abbeyWall,
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default wimbledon;
