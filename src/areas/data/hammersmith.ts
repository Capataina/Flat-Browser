import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const hammersmith: Area = {
  id: "hammersmith",
  name: "Hammersmith",
  aliases: [],
  borough: "Hammersmith and Fulham",
  postcodes: ["W6"],

  headline:
    "Piccadilly + District + H&C + Circle at Zone 2 — riverside location with strong transport but a Broadway hotspot and the Hammersmith Bridge closure drag.",
  preview:
    "Hammersmith is a four-line Zone 2 hub (Piccadilly, District, H&C, Circle) with riverside character and Ravenscourt Park access. Hammersmith Broadway is a named crime hotspot and the bridge closure since 2019 remains a negative infrastructure story. Mildly ascending via Town Hall redevelopment.",

  long_form: {
    full: "Hammersmith sits on the Thames with four tube lines at two closely-spaced stations (Piccadilly/District at one, Circle/H&C at the other). The Broadway is a named hotspot per H&F council crime statements, though the residential streets south toward Fulham Palace Road are calmer. The Hammersmith Bridge closure to vehicular traffic since 2019 remains a negative infrastructure story. The Town Hall redevelopment (Rockwell / LBHF) is in delivery. Operator presence is thin at the BTR level — most rental is BTS re-lets or older private-landlord stock.",
    history: "Historic west London riverside town. The bridge closure since 2019 has affected the area's connectivity to the south bank.",
    vibe: "Riverside west London with the Lyric Theatre, independent restaurants along King Street, and a busy Broadway interchange.",
    weekday: "",
    weekend: "",
    notable: "Hammersmith Bridge (closed to vehicles since 2019). Lyric Theatre. Thames riverside. Furnivall Gardens.",
    croydon_comparison: "Hammersmith offers Zone 2 riverside living with four tube lines — materially stronger transport than Croydon. The Broadway hotspot is a concern but the residential grain is calmer than Croydon's town centre.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Piccadilly", type: "tube" },
      { name: "District", type: "tube" },
      { name: "Hammersmith & City", type: "tube" },
      { name: "Circle", type: "tube" },
    ],
    primary_stations: [
      { name: "Hammersmith (Piccadilly/District)", lines: ["Piccadilly", "District"], walk_minutes_from_centre: 3 },
      { name: "Hammersmith (H&C/Circle)", lines: ["Hammersmith & City", "Circle"], walk_minutes_from_centre: 5 },
    ],
    times_to_anchors: { city_of_london: 25, canary_wharf: 35, soho_fitzrovia: 18, kings_cross_shoreditch: 18 },
    multi_cluster_score: 2,
    redundancy_score: 4,
    notes: "Piccadilly + District + H&C + Circle. 2/4 anchors ≤25 (borderline — City at 25 exactly). Average 24 min. Redundancy 4/5.",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Not yet populated.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "above", crime_vs_croydon: "safer", after_dark_assessment: "Hammersmith Broadway is a named hotspot. Residential streets south toward Fulham Palace Road are calmer.", concerns: ["Hammersmith Broadway named as hotspot by H&F council"], sources: [] },
  green_and_water: { has_river: true, has_canal: false, has_dock: false, parks: [{ name: "Furnivall Gardens", walk_minutes: 5, notes: "Small Thames-side garden" }, { name: "Ravenscourt Park", size_acres: 32, walk_minutes: 10, notes: "Major local park with lake" }], overall_assessment: "Core river (Thames frontage) + strong green (Ravenscourt Park). T2.4: Pass — strong." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "Hammersmith Town Hall redevelopment (Rockwell / LBHF) in delivery.", recent_milestones: [], upcoming_milestones: ["Hammersmith Town Hall phases deliver inside the window"], trajectory_through_2027: "Mildly ascending via Town Hall delivery. Hammersmith Bridge remains a drag factor.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "partial", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Hammersmith Broadway is a named hotspot; residential streets are calmer. Marginal pass.",
        "1.2": "Modern stock present — Town Hall redevelopment delivering, plus existing BTS stock.",
        "1.3": "Piccadilly + District + H&C + Circle — four tube lines at Zone 2.",
        "1.4": "Broadway hotspot is a T1.4 concern.",
        "1.5": "Public realm generally good; bridge closure is an infrastructure drag.",
        "1.6": "Not in decline — mildly ascending via Town Hall.",
      },
      "moderate",
      "T1 marginal pass. Broadway hotspot and bridge closure are meaningful caveats.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "unknown", "2.2": "unknown", "2.3": "unknown", "2.4": "pass", "2.5": "unknown", "2.7": "unknown" },
      {
        "2.4": "Core river + strong green. Thames frontage and Ravenscourt Park (32 acres, 10 min).",
      },
      "moderate",
      "T2 largely unpopulated. Strong green-and-water confirmed.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "unknown", "3.5": "unknown", "3.6": "unknown" },
      {
        "3.1": "Town Hall redevelopment in delivery. Mildly ascending.",
        "3.2": "Lyric Theatre, riverside, King Street restaurants.",
        "3.3": "Strong recognisable identity — Hammersmith is a well-known west London centre.",
      },
      "moderate",
      "T3 moderate. Strong identity and cultural anchors; regeneration is modest.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "partial", "5.4": "unknown" },
      {
        "5.1": "2/4 anchors ≤25. Average 24 min. City at 25 is borderline.",
        "5.2": "Redundancy 4/5 — four tube lines.",
        "5.3": "Mildly ascending via Town Hall. Bridge remains a drag.",
      },
      "moderate",
      "T5 moderate. Strong redundancy; anchor times are adequate but not exceptional.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — strong riverside Zone 2 location with four tube lines, but Broadway hotspot, bridge closure, and operator-thin BTR landscape limit the practical score.",
  },

  projects: [
    buildProject({
      id: "fulham-reach", area_id: "hammersmith", name: "Fulham Reach", developer: "St George (Berkeley Group)", operator: "St George / private landlords", building_type: "Owner-Lease", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "744-unit riverside development by St George. Owner-lease model — rental via individual landlords. 24hr concierge, The Tamesis Club (virtual golf, screening room, snooker, wine cellar), gym, cinema. 1-bed from ~GBP 3,250/mo.",
      amenity_tier: "premium", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "St George / Berkeley specification — phased 2015-2020. Reliably modern.",
        t4_1_amenity_package: "Premium: 24hr concierge, The Tamesis Club, gym, cinema. Strong amenity for a non-BTR development.",
        t4_4_signature_arch: "Riverside masterplan. No specific jury architectural win sourced.",
      },
    }),
    buildProject({
      id: "sovereign-court", area_id: "hammersmith", name: "Sovereign Court", developer: "St George (Berkeley Group)", operator: "Private landlords", building_type: "Owner-Lease", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "418-unit St George development, 2 min walk to Hammersmith tube. Owner-lease model. 24hr concierge, residents' gym, courtyard gardens. 1-bed from ~GBP 2,600/mo.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "St George / Berkeley specification — c. 2015. Modern.",
        t4_1_amenity_package: "24hr concierge, gym, courtyard gardens. Decent for owner-lease.",
        t4_4_signature_arch: "No architectural press signal.",
      },
    }),
    buildProject({
      id: "queens-wharf", area_id: "hammersmith", name: "Queen's Wharf", developer: "Mount Anvil / FABRICA (JV with A2Dominion)", operator: "Mount Anvil / private landlords", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "165-unit riverside development with Riverside Studios (theatre, cinema, cafe, bar) integrated. Up to 14 storeys. 24hr concierge, rooftop terrace. 1-bed from ~GBP 2,600/mo.",
      amenity_tier: "strong", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Mount Anvil 2024-2025 delivery — modern specification.",
        t4_1_amenity_package: "24hr concierge, rooftop terrace, Riverside Studios integrated into the development. Strong cultural amenity.",
        t4_4_signature_arch: "No specific jury signal, but Riverside Studios integration is distinctive.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default hammersmith;
