import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const mileEnd: Area = {
  id: "mile-end",
  name: "Mile End",
  aliases: ["Mile End Road", "Queen Mary"],
  borough: "Tower Hamlets",
  postcodes: ["E3", "E1"],

  headline:
    "Three lines at one station (Central, District, H&C) in Zone 2 with Mile End Park and Queen Mary University anchoring a student-heavy young demographic.",
  preview:
    "Central + District + H&C at Mile End give a 14-minute average to employment anchors with 4/5 redundancy. Mile End Park provides a linear green spine. Queen Mary campus drives a student-heavy 47% aged 20-39 demographic. Safety is marginal — acceptable but not clean.",

  long_form: {
    full: "Mile End sits along the Regent's Canal with three tube lines at one station giving strong multi-hub connectivity. Queen Mary University anchors a student-heavy demographic and keeps footfall continuous through the residential grain. Mile End Park — a linear green corridor running north-south — is a genuine amenity. Safety passes but is marginal: the ward is not a known violent-crime hotspot but Tower Hamlets borough context means it is not a clean pass either. The area benefits from its position between Bow and Bethnal Green, with good access to both areas' amenities.",
    history: "Named after a medieval milestone on the road from London to Colchester. Queen Mary University (founded 1785 as London Hospital Medical College) is the major institutional anchor.",
    vibe: "Student-influenced, multicultural. Mile End Road is busy; the park and canal provide calm corridors.",
    weekday: "A Tuesday at 7pm: students heading to/from Queen Mary; Mile End Park with joggers; Mile End Road busy with traffic.",
    weekend: "A Saturday: Mile End Park busy with families and runners; quieter campus; Regent's Canal towpath walkers.",
    notable: "Mile End Park; Regent's Canal; Queen Mary University of London.",
    croydon_comparison: "Mile End delivers Central Line Zone 2 access — Bank in 13 minutes, TCR in 15. Stronger connectivity than Croydon with comparable rental pricing and better green space via Mile End Park.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Central", type: "tube" },
      { name: "District", type: "tube" },
      { name: "Hammersmith & City", type: "tube" },
    ],
    primary_stations: [
      { name: "Mile End", lines: ["Central", "District", "Hammersmith & City"], walk_minutes_from_centre: 4 },
    ],
    times_to_anchors: { city_of_london: 13, canary_wharf: 10, soho_fitzrovia: 15, kings_cross_shoreditch: 17 },
    multi_cluster_score: 4,
    redundancy_score: 4,
    notes: "Three lines at one station. Central is the multi-hub backbone. District + H&C share platforms but different operational segments. 13.75-min average to anchors. All four under 25 minutes.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 15, professional_renter_pct: 0, notes: "Census 2021: Mile End ward 20-39 at 47%. Queen Mary undergrad spillover drives under-20 to 26%. Strong young-skew, student-heavy.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "average", crime_vs_croydon: "safer", after_dark_assessment: "Queen Mary's continuous footfall and Mile End Park's linear calmness dominate the lived experience. Not a known violent-crime hotspot but Tower Hamlets borough context applies.", concerns: ["T1.1 marginal pass — acceptable but not clean"], sources: [] },
  green_and_water: { has_river: false, has_canal: true, has_dock: false, parks: [{ name: "Mile End Park", walk_minutes: 3, notes: "Linear green corridor running north-south — genuine amenity" }, { name: "Regent's Canal towpath", walk_minutes: 5, notes: "Canal walk access" }], overall_assessment: "Strong green and water presence for an inner East London area. Mile End Park + Regent's Canal give genuine outdoor amenity." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "", recent_milestones: [], upcoming_milestones: [], trajectory_through_2027: "Stable. No major flagship regeneration but ongoing residential infill.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Marginal pass. Not a known violent-crime hotspot. Queen Mary footfall and Mile End Park's calmness dominate. Acceptable but not clean.",
        "1.2": "Modern rental stock present.",
        "1.3": "Three lines at one station — Central, District, H&C. Strong multi-hub access.",
        "1.4": "Active professional and student rental market.",
        "1.5": "Mile End Park well-maintained; streets in reasonable order.",
        "1.6": "Not in decline — stable area with ongoing residential demand.",
      },
      "moderate",
      "T1 passes but T1.1 is marginal. Safety acceptable, not clean.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "unknown", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Mile End Road provides walkable essentials. Student-oriented retail present.",
        "2.2": "Grocery access not yet researched in detail.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Mile End Park + Regent's Canal provide strong green and water access.",
        "2.5": "Residential streets calm. Mile End Road is busy but the park side is quiet.",
        "2.7": "Census 2021: 47% aged 20-39. Strong young-skew, student-heavy.",
      },
      "moderate",
      "T2 decent — strong green space and young demographic. Grocery and gym detail needed.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "partial", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "No flagship regeneration project. Ongoing residential infill.",
        "3.2": "Queen Mary University is an institutional anchor but not a cultural destination in the Whitechapel Gallery sense.",
        "3.3": "Recognisable sense of place — Mile End Park, canal, university campus give distinctiveness.",
        "3.4": "15-minute completeness is reasonable — transport, parks, university, basic retail.",
        "3.5": "Mixed architectural quality — university campus is well-maintained; residential stock varies.",
        "3.6": "Day/night rhythm is student-influenced — busy during term, quieter in vacations.",
      },
      "moderate",
      "T3 moderate — recognisable place identity anchored by park and university, but no strong cultural destination.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "partial", "5.4": "partial" },
      {
        "5.1": "All four anchors under 25 minutes. 13.75-min average. Strong multi-cluster coverage.",
        "5.2": "Three lines at one station with Central as multi-hub backbone. 4/5 redundancy.",
        "5.3": "Stable rather than ascending — no major regeneration trajectory.",
        "5.4": "Limited third-space culture — some cafes, university library not publicly accessible.",
      },
      "good",
      "T5 good — strong connectivity and redundancy. Trajectory and third spaces are the gaps.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — strong connectivity (4/5 redundancy, 14-min average), genuine green space, but marginal safety and no flagship project.",
  },

  projects: [],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default mileEnd;
