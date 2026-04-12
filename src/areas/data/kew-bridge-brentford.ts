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
    buildProject({
      id: "the-brentford-project", area_id: "kew-bridge-brentford", name: "The Brentford Project", developer: "Ballymore", operator: "Ballymore / private landlords", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unknown",
      preview: "876-unit Ballymore masterplan across c. 11 buildings. Phased delivery extending to 2028+. 14,000 sq m retail, 8,000 sq m leisure, riverside setting. Owner-lease model — rental via private landlords. 1-bed est. GBP 1,800-2,000/mo.",
      amenity_tier: "strong", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Ballymore phased delivery. Modern specification across multiple buildings.",
        t4_1_amenity_package: "Large-scale mixed-use: 14,000 sq m retail, 8,000 sq m leisure, 4,000 sq m commercial. Riverside setting. Strong place-making.",
        t4_4_signature_arch: "No specific jury signal sourced. Ballymore masterplan.",
      },
    }),
    buildProject({
      id: "gwq-brentford", area_id: "kew-bridge-brentford", name: "GWQ (Great West Quarter)", developer: "Barratt London", operator: "Private landlords", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "763-unit development with The Tower (22 storeys, floors 11-22 residential, floors 1-10 apart-hotel). Phased 2015-2019. 12-hour concierge, gated parking, fitness suite, Sainsbury's Local. 2-bed from ~GBP 2,123/mo.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Barratt London 2015-2019 specification. Volume housebuilder standard.",
        t4_1_amenity_package: "12-hour concierge, gated parking, car club, cycle club, fitness suite, Sainsbury's Local on-site. Decent.",
        t4_4_signature_arch: "No architectural press signal. Volume housebuilder design.",
      },
    }),
    buildProject({
      id: "kew-bridge-rise", area_id: "kew-bridge-brentford", name: "Kew Bridge Rise", developer: "Hill (with L&Q)", operator: "L&Q (affordable); private landlords (market)", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unknown",
      preview: "441 units across 6 buildings (up to 18 storeys). 50% private, 50% shared ownership/affordable. Final phase (Starling House) launched Nov 2025. Completion by end of 2026.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Hill / L&Q partnership. In delivery — modern specification expected.",
        t4_1_amenity_package: "Not specifically researched. Mixed-tenure scheme with affordable component.",
        t4_4_signature_arch: "No architectural press signal.",
      },
    }),
    buildProject({
      id: "apt-living-kew-bridge", area_id: "kew-bridge-brentford", name: "APT Living Kew Bridge", developer: "Paradigm", operator: "Savills (BTR management)", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "288-unit BTR (studios, 1-bed, 2-bed) with 3m ceiling heights, overlooking Gunnersbury Park (180 acres). Savills-managed. Concierge, gym, cinema, roof terraces, 220 parking spaces. c. 2022-2023 completion.",
      amenity_tier: "strong", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "2022-2023 BTR new-build. 3m ceiling heights. Modern specification.",
        t4_1_amenity_package: "Concierge, gym, cinema, residents' roof terraces, bike storage, 220 parking spaces. Strong BTR package.",
        t4_4_signature_arch: "No specific jury signal. Overlooks Gunnersbury Park — strong aspect.",
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
