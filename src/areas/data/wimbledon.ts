import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const wimbledon: Area = {
  id: "wimbledon",
  name: "Wimbledon",
  aliases: ["Wimbledon Centre Court"],
  borough: "Merton",
  postcodes: ["SW19"],

  headline:
    "District + Thameslink + Tramlink + rail at Zone 3 — a genuine upgrade target with Essential Living BTR presence. Discovery candidate from sweep agent 11.",
  preview:
    "Wimbledon is a discovery candidate surfaced by the BTR operator sweep — Essential Living has delivered a BTR scheme here, providing an operator-level BTR presence in an area the original candidate list did not include. District Line, Thameslink, Tramlink, and mainline rail give multi-modal access at Zone 3. Limited sweep data — most fields are unpopulated pending further research.",

  long_form: {
    full: "Wimbledon was surfaced as a discovery candidate by sweep agent 11 because Essential Living has delivered a BTR scheme here. The area benefits from District Line, Thameslink, Tramlink, and mainline rail services. It sits on the edge of the SW London sphere that the candidate list focused on less aggressively. The area is a genuine upgrade target on most T-rows but sweep data is thin — safety, demographics, and amenity data have not yet been populated.",
    history: "",
    vibe: "",
    weekday: "",
    weekend: "",
    notable: "The Championships (Wimbledon tennis). Essential Living BTR presence.",
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
    times_to_anchors: { city_of_london: 0, canary_wharf: 0, soho_fitzrovia: 0, kings_cross_shoreditch: 0 },
    multi_cluster_score: 0,
    redundancy_score: 0,
    notes: "District + Thameslink + Tramlink + SWR at a single station. Anchor times not yet researched. Multi-cluster and redundancy scores to be populated.",
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
        "1.2": "Essential Living BTR scheme provides modern rental stock.",
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
    overall_grade: "B",
    grade_reasoning: "B grade (provisional) — discovery candidate with Essential Living BTR presence, strong name recognition, and multi-modal transport. Most fields unpopulated pending further research.",
  },

  projects: [
    buildProject({
      id: "essential-living-wimbledon", area_id: "wimbledon", name: "Essential Living Wimbledon", developer: "Essential Living", operator: "Essential Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Essential Living BTR scheme at Wimbledon. Operator-managed rental in a discovery candidate area.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Essential Living specification — not yet researched in detail.",
        t4_1_amenity_package: "Not yet researched.",
        t4_4_signature_arch: "No architectural press signal.",
      },
    }),
  ],

  external_links: [
    { url: "https://www.essentialliving.uk.com/", label: "Essential Living", type: "operator", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default wimbledon;
