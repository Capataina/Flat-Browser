import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildTier, stubResearch } from "./helpers";

const shepherdsBush: Area = {
  id: "shepherds-bush",
  name: "Shepherd's Bush",
  aliases: ["Shepherds Bush"],
  borough: "Hammersmith and Fulham",
  postcodes: ["W12"],

  headline:
    "Central + Overground + Circle/H&C at Zone 2 — adjacent to Westfield and the White City cluster. Strong connectivity but a T1.1 safety concern at the Green.",
  preview:
    "Shepherd's Bush sits adjacent to Westfield London and the White City regeneration cluster. Four lines (Central, Overground, Circle, H&C) give strong connectivity at Zone 2 pricing. However, the Green is H&F's top crime hotspot with knife crime specifically concentrated there, and the council has deployed 20 new motion-sensor lights and 35 upgraded CCTV cameras in response.",

  long_form: {
    full: "Shepherd's Bush is a Zone 2 area adjacent to Westfield London and the White City cluster. The transport offer is strong — Central Line at Shepherd's Bush station, plus Circle and H&C at Shepherd's Bush Market station, plus Overground. However, Shepherd's Bush Green is H&F's top crime hotspot with knife crime specifically concentrated at the Green and Hammersmith Broadway. The council has explicitly named these as weekly-review priorities. Residents report feeling increasingly unsafe despite borough crime statistics falling. The area benefits from White City activity next door but has no single masterplan of its own.",
    history: "Historic west London neighbourhood. Westfield London (2008) transformed the retail landscape. Adjacent to the BBC Television Centre / White City regeneration.",
    vibe: "Busy urban neighbourhood with Westfield as the commercial anchor. The Green is a traffic-encircled island. Mixed residential character.",
    weekday: "",
    weekend: "",
    notable: "Shepherd's Bush Empire (music venue). Westfield London. Adjacent to White City / Television Centre.",
    croydon_comparison: "Shepherd's Bush has stronger transport (Zone 2, four lines) and Westfield retail, but the named-hotspot safety signal at the Green is a meaningful concern that Croydon's town centre does not have at the same knife-crime intensity.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Central", type: "tube" },
      { name: "London Overground", type: "overground" },
      { name: "Circle", type: "tube" },
      { name: "Hammersmith & City", type: "tube" },
    ],
    primary_stations: [
      { name: "Shepherd's Bush", lines: ["Central", "London Overground"], walk_minutes_from_centre: 3 },
      { name: "Shepherd's Bush Market", lines: ["Circle", "Hammersmith & City"], walk_minutes_from_centre: 5 },
    ],
    times_to_anchors: { city_of_london: 20, canary_wharf: 28, soho_fitzrovia: 14, kings_cross_shoreditch: 21 },
    multi_cluster_score: 3,
    redundancy_score: 4,
    notes: "Central + Overground + Circle + H&C. 3/4 anchors ≤25 min. Average 20.75 min. Redundancy 4/5.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Not yet populated.", sources: [] },
  safety: { overall: "concerning", crime_vs_borough: "above", crime_vs_croydon: "similar", after_dark_assessment: "Shepherd's Bush Green is H&F's top crime hotspot. Knife crime specifically concentrated at the Green. Council has deployed CCTV and lighting upgrades.", concerns: ["H&F's top named crime hotspot", "Knife crime concentrated at Shepherd's Bush Green", "Residents report feeling increasingly unsafe despite falling borough stats", "20 new motion-sensor lights + 35 upgraded 360-degree CCTV cameras deployed"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Shepherd's Bush Green", size_acres: 8, walk_minutes: 2, notes: "Traffic-encircled island, more plaza than park" }, { name: "Wormwood Scrubs", walk_minutes: 15, notes: "Large open common to the north" }, { name: "Holland Park", size_acres: 54, walk_minutes: 15, notes: "Premium park to the south" }], overall_assessment: "Nominal-to-moderate green + absent water. The Green is a traffic island; Wormwood Scrubs and Holland Park are walking-range but not on doorstep. T2.4: Partial-to-moderate." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. Westfield London provides comprehensive retail." },
  regeneration: { status: "active", investment_pipeline: "Small-scale within Shepherd's Bush proper; major activity in adjacent White City.", recent_milestones: [], upcoming_milestones: [], trajectory_through_2027: "Ascending slowly via adjacency to White City.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "fail", "1.2": "pass", "1.3": "pass", "1.4": "fail", "1.5": "partial", "1.6": "pass" },
      {
        "1.1": "T1.1 FAIL — ward is named-hotspot for knife crime with explicit council infrastructure response.",
        "1.2": "Modern stock present, including spillover from White City Living.",
        "1.3": "Central + Overground + Circle + H&C. Zone 2. Strong.",
        "1.4": "T1.4 FAIL — council-named weekly-review priority for ASB and knife crime.",
        "1.5": "Shepherd's Bush Green fringe is rough; areas closer to Westfield/White City are better.",
        "1.6": "Not in decline — ascending via White City adjacency.",
      },
      "fail",
      "T1 FAIL. T1.1 and T1.4 fail on the named-hotspot knife crime signal. Strong transport cannot compensate for the safety concern.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "unknown", "2.3": "unknown", "2.4": "partial", "2.5": "unknown", "2.7": "unknown" },
      {
        "2.1": "Westfield London provides comprehensive daily essentials.",
        "2.4": "Nominal-to-moderate green. The Green is a traffic island; real parks are 15 min walk.",
      },
      "moderate",
      "T2 partially populated. Strong retail via Westfield; green access is partial.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "unknown", "3.5": "unknown", "3.6": "unknown" },
      {
        "3.1": "Small-scale within Shepherd's Bush; major activity in adjacent White City.",
        "3.2": "Shepherd's Bush Empire, Westfield, Bush Theatre.",
        "3.3": "Strong recognisable identity — everyone knows Shepherd's Bush.",
      },
      "moderate",
      "T3 moderate. Strong identity and cultural anchors but regeneration activity is concentrated in adjacent White City.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "partial", "5.4": "unknown" },
      {
        "5.1": "3/4 anchors ≤25 min. Average 20.75 min.",
        "5.2": "Redundancy 4/5 — four lines.",
        "5.3": "Ascending slowly via White City adjacency.",
      },
      "moderate",
      "T5 moderate. Good connectivity and redundancy.",
    ),
    overall_grade: "C",
    grade_reasoning: "C grade — T1 FAIL on safety (named-hotspot knife crime at the Green) dominates the assessment despite strong connectivity. Would require the Caner-experience reading to accept the safety signal before considering.",
  },

  projects: [],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default shepherdsBush;
