import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const woolwich: Area = {
  id: "woolwich",
  name: "Woolwich",
  aliases: ["Royal Arsenal", "Woolwich Arsenal"],
  borough: "Greenwich",
  postcodes: ["SE18"],

  headline:
    "Elizabeth Line + DLR + Southeastern in Zone 3/4 — the strongest 'cheap Zone 4 with proper connectivity' hit in the entire dataset. 9 minutes to Canary Wharf via Elizabeth Line. But Woolwich Arsenal ward is the most dangerous ward in Greenwich borough.",
  preview:
    "Elizabeth Line gives 9 min to Canary Wharf and 23 min to TCR. Three genuinely independent products (Elizabeth + DLR + Southeastern). Redundancy 4/5. Berkeley Royal Arsenal masterplan (~5,000 homes) is the project anchor. T1.1 is split: Royal Arsenal masterplan interior passes on Finding C (private stewardship), Woolwich town centre fringe does not. 20-39 at 50% — top-skew.",

  long_form: {
    full: "",
    history: "",
    vibe: "",
    weekday: "",
    weekend: "",
    notable: "Woolwich Elizabeth Line station (Weston Williamson + Partners) — architecturally serious. Royal Arsenal heritage context. Firepower museum.",
    croydon_comparison: "",
  },

  zones: ["Zone 3", "Zone 4"],
  connectivity: {
    lines: [
      { name: "Elizabeth", type: "elizabeth" },
      { name: "DLR", type: "dlr" },
      { name: "Southeastern", type: "rail" },
    ],
    primary_stations: [
      { name: "Woolwich", lines: ["Elizabeth"], walk_minutes_from_centre: 5 },
      { name: "Woolwich Arsenal", lines: ["DLR", "Southeastern"], walk_minutes_from_centre: 5 },
    ],
    times_to_anchors: { city_of_london: 25, canary_wharf: 9, soho_fitzrovia: 23, kings_cross_shoreditch: 28 },
    multi_cluster_score: 3,
    redundancy_score: 4,
    notes: "Elizabeth + DLR + Southeastern = three genuinely independent products. Redundancy 4/5. Average 21.25 min. 3/4 anchors ≤25 (Old Street just over). Strongest 'cheap Zone 4 with proper connectivity' in the dataset.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Woolwich Arsenal ward: 20-39 50% — top-skew. Berkeley Royal Arsenal cluster drives it; Elizabeth Line 2022 pulls further. Census 2021 via CrystalRoof.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "above", crime_vs_croydon: "similar", after_dark_assessment: "Woolwich Arsenal ward is named as the most dangerous ward in Greenwich borough with 169 crimes per 1,000. Royal Arsenal masterplan interior benefits from private stewardship (Finding C). Woolwich town centre / Plumstead approach is rougher.", concerns: ["Woolwich Arsenal ward — most dangerous ward in Greenwich borough (169/1k)", "Woolwich town centre fringe does not pass T1.1", "T1.1 split: Royal Arsenal interior passes, town centre fails"], sources: [] },
  green_and_water: { has_river: true, has_canal: false, has_dock: false, parks: [{ name: "Woolwich Common", walk_minutes: 10, notes: "Large open common" }], overall_assessment: "Thames-side at Royal Arsenal. Woolwich Common is nearby." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "phased", investment_pipeline: "Berkeley Royal Arsenal Riverside (~5,000 homes). Spray Street Quarter (proposed).", recent_milestones: ["Woolwich Elizabeth Line station opened 2022"], upcoming_milestones: ["Spray Street Quarter regeneration", "Continued Royal Arsenal phased delivery"], trajectory_through_2027: "Ascending. Elizabeth Line is transformative. Royal Arsenal continues to deliver.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "partial", "1.5": "partial", "1.6": "pass" },
      {
        "1.1": "MARGINAL — split call. Royal Arsenal masterplan interior passes T1.1 on Finding C (private stewardship). Woolwich town centre fringe does not. Recommended: marginal pass for Royal Arsenal specifically.",
        "1.2": "Berkeley Royal Arsenal — modern stock present. Predominantly ownership-led with Berkeley Living rental.",
        "1.3": "Elizabeth + DLR + Southeastern. Three genuinely independent products.",
        "1.4": "Berkeley Living is the rental arm — referencing policy not publicly documented. No Quintain/Get Living/Vertus.",
        "1.5": "Royal Arsenal heritage context is well-maintained. Wider Woolwich town centre is uneven.",
        "1.6": "Ascending — Elizabeth Line transformative, Royal Arsenal continues to deliver.",
      },
      "moderate",
      "T1 is split by geography. Royal Arsenal passes cleanly; Woolwich town centre does not.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "partial", "2.3": "unknown", "2.4": "pass", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "Royal Arsenal has some retail. Woolwich town centre provides additional essentials.",
        "2.2": "Standard town-centre grocery. Not destination-quality.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Thames-side at Royal Arsenal. Woolwich Common walkable.",
        "2.5": "Royal Arsenal is quieter. Town centre is busier.",
        "2.7": "20-39 at 50% — top-skew.",
      },
      "moderate",
      "Functional daily life. Thames-side and demographics are the positives.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "pass", "3.4": "partial", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "Active — Berkeley Royal Arsenal phased delivery, Elizabeth Line station, Spray Street Quarter.",
        "3.2": "Royal Arsenal heritage is the anchor. Firepower museum. No major cultural institution.",
        "3.3": "Distinct identity — military heritage, riverside, Elizabeth Line gateway. 'New Woolwich' is forming.",
        "3.4": "15-minute completeness is partial — Royal Arsenal is still building out retail/amenity.",
        "3.5": "Woolwich Elizabeth Line station is architecturally serious (Weston Williamson + Partners). Royal Arsenal heritage.",
        "3.6": "Day/night rhythm is developing. Not yet a destination.",
      },
      "moderate",
      "T3 moderate. Heritage and Elizabeth Line station are the architectural anchors. Destination identity is still forming.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 3/5 — 3/4 anchors ≤25 (Old Street just over). Average 21.25 min.",
        "5.2": "Three genuinely independent products. Redundancy 4/5.",
        "5.3": "Ascending — Elizabeth Line transformative, Royal Arsenal delivering.",
        "5.4": "Third-space culture is thin. Still building out.",
      },
      "good",
      "Strong T5 — excellent redundancy, ascending trajectory, good connectivity for Zone 4 pricing.",
    ),
    overall_grade: "B",
    grade_reasoning: "B — Elizabeth Line connectivity is genuinely transformative for Zone 3/4 pricing. Royal Arsenal passes T1 on private stewardship. Constrained by Woolwich town centre safety (T1.1 split) and Berkeley Living's opaque qualification policy.",
  },

  projects: [
    buildProject({
      id: "royal-arsenal-riverside", area_id: "woolwich", name: "Royal Arsenal Riverside", developer: "Berkeley", operator: "Berkeley", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unknown",
      preview: "~5,000 home Berkeley masterplan. Elizabeth Line. Predominantly ownership-led with Berkeley Living rental arm. Qualification policy not publicly documented.",
      amenity_tier: "strong", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Berkeley's reliably strong build quality. Heritage context (former Royal Arsenal).",
        t4_1_amenity_package: "Strong shared amenities consistent with Berkeley's mid-premium standard.",
        t4_4_signature_arch: "Royal Arsenal heritage context. Woolwich Elizabeth Line station (Weston Williamson + Partners) is architecturally serious.",
      },
    }),
  ],

  external_links: [
    { url: "https://www.berkeleygroup.co.uk/developments/london/woolwich/royal-arsenal-riverside", label: "Royal Arsenal Riverside (Berkeley)", type: "developer", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default woolwich;
