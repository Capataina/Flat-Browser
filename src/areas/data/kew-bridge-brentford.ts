import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const kewBridgeBrentford: Area = {
  id: "kew-bridge-brentford",
  name: "Kew Bridge / Brentford",
  aliases: ["Kew Bridge", "Brentford"],
  borough: "Hounslow",
  postcodes: ["TW8"],

  headline:
    "Apo BTR at Zone 3 with Flatfair deposit alternative — a sweep-18 discovery with studios from £1,400/month. SWR + District/Overground at Gunnersbury walkable.",
  preview:
    "Kew Bridge / Brentford was surfaced by the extended-stay sweep (agent 18) because Apo Group operates a BTR scheme here with studios from £1,400/month and a Flatfair deposit alternative. Transport is SWR at Kew Bridge (3 min walk) plus District/Overground at Gunnersbury (10 min walk). Limited sweep data beyond the operator and transport profile.",

  long_form: {
    full: "Kew Bridge / Brentford is a discovery candidate from the extended-stay sweep (agent 18). Apo Group (BlackRock-owned BTR operator) runs a scheme here with studios from £1,400/month, gym, co-working spaces, roof terraces, and a residents' lounge. The Flatfair deposit alternative reduces upfront cost. Transport is SWR at Kew Bridge station (3 min walk) plus District and Overground at Gunnersbury (10 min walk). The area sits near Kew Gardens. Most fields are unpopulated pending further research beyond the operator data.",
    history: "",
    vibe: "",
    weekday: "",
    weekend: "",
    notable: "Near Kew Gardens. Apo BTR with Flatfair deposit alternative.",
    croydon_comparison: "Kew Bridge is Zone 3 like Croydon but offers a dedicated BTR operator (Apo) with Flatfair deposit alternative. Transport is weaker than Croydon's mainline services. Proximity to Kew Gardens is a green asset Croydon lacks.",
  },

  zones: ["Zone 3"],
  connectivity: {
    lines: [
      { name: "South Western Railway", type: "rail" },
      { name: "District", type: "tube" },
      { name: "London Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "Kew Bridge", lines: ["South Western Railway"], walk_minutes_from_centre: 3 },
      { name: "Gunnersbury", lines: ["District", "London Overground"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 0, canary_wharf: 0, soho_fitzrovia: 0, kings_cross_shoreditch: 0 },
    multi_cluster_score: 0,
    redundancy_score: 0,
    notes: "SWR at Kew Bridge (3 min) + District/Overground at Gunnersbury (10 min). Elizabeth Line at nearby Ealing Broadway (further walk). Anchor times not yet researched.",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Not yet populated.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "average", crime_vs_croydon: "safer", after_dark_assessment: "", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [], overall_assessment: "Not yet populated. Kew Gardens is a major green asset nearby." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "complete", investment_pipeline: "", recent_milestones: [], upcoming_milestones: [], trajectory_through_2027: "Not yet researched.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "unknown", "1.2": "pass", "1.3": "unknown", "1.4": "pass", "1.5": "unknown", "1.6": "unknown" },
      {
        "1.2": "Apo BTR scheme — modern rental stock with operator amenities.",
        "1.4": "Apo Group (BlackRock-owned) is a dedicated BTR operator with professional referencing.",
      },
      "moderate",
      "T1 partially populated. BTR operator presence confirmed; most rows not yet researched.",
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
      { "3.1": "unknown", "3.2": "unknown", "3.3": "partial", "3.4": "unknown", "3.5": "unknown", "3.6": "unknown" },
      {
        "3.3": "Kew Bridge / Brentford has local recognition; 'Brentford' has gained profile via Brentford FC's Premier League presence.",
      },
      "weak",
      "T3 largely unpopulated. Limited identity data.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "unknown", "5.2": "unknown", "5.3": "unknown", "5.4": "unknown" },
      {},
      "moderate",
      "T5 not yet populated. Awaiting connectivity research.",
    ),
    overall_grade: "C",
    grade_reasoning: "C grade (provisional) — discovery candidate from extended-stay sweep with Apo BTR operator at £1,400/month studios and Flatfair deposit alternative. Most fields unpopulated pending further research.",
  },

  projects: [
    buildProject({
      id: "apo-kew-bridge", area_id: "kew-bridge-brentford", name: "Apo Kew Bridge", developer: "Apo Group", operator: "Apo Group", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "BlackRock-owned BTR with studios from £1,400/month. Flatfair deposit alternative. Gym, co-working, roof terraces, residents' lounge.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Apo Group specification — not yet researched in detail.",
        t4_1_amenity_package: "Gym, co-working spaces, roof terraces, residents' lounge.",
        t4_4_signature_arch: "No architectural press signal.",
      },
    }),
  ],

  external_links: [
    { url: "https://a-part-of.com/places/south-london", label: "Apo Kew Bridge", type: "operator", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default kewBridgeBrentford;
