import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildTier, stubResearch } from "./helpers";

const peckham: Area = {
  id: "peckham",
  name: "Peckham",
  aliases: ["Peckham Rye"],
  borough: "Southwark",
  postcodes: ["SE15"],

  headline:
    "South London's strongest creative identity — Peckham Levels, Copeland Gallery, Bussey Building. Zone 2 Overground with four products at Peckham Rye. T1.1 safety is the dissent point: named gang infrastructure and violent-crime history.",
  preview:
    "Peckham's cultural identity is real and deep — creative spaces, independent food scene, Time Out coolest-neighbourhood heritage. But T1.1 safety carries a marginal-fail signal from the safety sweep: North Peckham estate has documented gang-violence history. No flagship BTR operator. Redundancy score 4/5 from three Overground/NR products at Peckham Rye plus Suffragette line.",

  long_form: {
    full: "",
    history: "",
    vibe: "",
    weekday: "",
    weekend: "",
    notable: "Peckham House (Surman Weston) — RIBA London Project Architect of the Year 2024. Blenheim Grove — RIBA London Award 2025. Strong jury-architecture signal.",
    croydon_comparison: "",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Windrush", type: "overground" },
      { name: "Suffragette", type: "overground" },
      { name: "Southeastern", type: "rail" },
      { name: "Thameslink", type: "rail" },
    ],
    primary_stations: [
      { name: "Peckham Rye", lines: ["Windrush", "Southeastern", "Thameslink"], walk_minutes_from_centre: 5 },
      { name: "Queens Road Peckham", lines: ["Suffragette"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 22, canary_wharf: 28, soho_fitzrovia: 26, kings_cross_shoreditch: 20 },
    multi_cluster_score: 2,
    redundancy_score: 4,
    notes: "Three LO/NR products at Peckham Rye plus Suffragette line at Queens Road. No tube direct. Average 24 min. Redundancy 4/5.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Peckham ward demographic data not directly retrieved. Southwark borough young-skewed.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "above", crime_vs_croydon: "similar", after_dark_assessment: "North Peckham estate has documented gang-violence history (Peckham Boys, Ghetto Boys). Peckham ward carries violent-crime concentration above Southwark borough average.", concerns: ["Named gang infrastructure — North Peckham estate", "Violent-crime concentration above borough average", "T1.1 marginal-fail from safety sweep — dissent preserved"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Peckham Rye Park", walk_minutes: 10, notes: "Large park with Peckham Rye Common" }], overall_assessment: "Peckham Rye Park is the main green asset." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. Peckham Levels, Copeland Gallery, Bussey Building are cultural anchors." },
  regeneration: { status: "active", investment_pipeline: "", recent_milestones: ["Peckham House — RIBA London Project Architect of the Year 2024", "Blenheim Grove — RIBA London Award 2025"], upcoming_milestones: [], trajectory_through_2027: "", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "partial", "1.3": "pass", "1.4": "fail", "1.5": "partial", "1.6": "pass" },
      {
        "1.1": "MARGINAL — leaning fail. Named gang infrastructure and specific violent-crime history. Safety sweep preserves dissent.",
        "1.2": "No flagship BTR. Rental stock is individual-landlord dominated.",
        "1.3": "Four products at Peckham Rye give genuine redundancy. Zone 2.",
        "1.4": "No flagship BTR operator. No Quintain, no Greystar, no Berkeley BTR.",
        "1.5": "Mixed — creative spaces are well-maintained, but wider public realm is uneven.",
        "1.6": "Not in decline — ascending creative trajectory, RIBA awards signal investment.",
      },
      "moderate",
      "T1 is the constraint. T1.1 safety is marginal-fail, T1.4 no BTR operator. Cultural identity is strong but T1 floor is weak.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "pass", "2.5": "partial", "2.7": "unknown" },
      {
        "2.1": "Strong independent retail and food scene — Rye Lane, Peckham Levels.",
        "2.2": "Independent food markets and grocers. Quality fresh food available.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Peckham Rye Park is a genuine green asset.",
        "2.5": "Partial — busy nightlife scene around Peckham Levels and Rye Lane can be noisy.",
        "2.7": "Direct ward demographic data not retrieved.",
      },
      "moderate",
      "Good daily life quality driven by the food-and-culture scene. Quiet-at-night is partial.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "pass", "3.6": "pass" },
      {
        "3.1": "Active investment — RIBA awards, creative space development.",
        "3.2": "Peckham Levels, Copeland Gallery, Bussey Building — genuine cultural anchors.",
        "3.3": "One of south London's most distinctive identities. Time Out coolest-neighbourhood heritage.",
        "3.4": "15-minute completeness is strong — food, culture, transport, park all walkable.",
        "3.5": "Peckham House and Blenheim Grove are RIBA jury-tier architecture.",
        "3.6": "Strong day/night rhythm — creative spaces and food by day, bars and events by night.",
      },
      "good",
      "T3 is Peckham's strength. One of the most culturally distinctive areas in London.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "pass", "5.4": "pass" },
      {
        "5.1": "Multi-cluster score 2/5 — only 2 of 4 anchors ≤25 min. Average 24 min.",
        "5.2": "Redundancy 4/5 — four products across two stations.",
        "5.3": "Ascending creative trajectory with RIBA jury recognition.",
        "5.4": "Strong third-space culture — cafes, creative spaces, galleries.",
      },
      "moderate",
      "T5 moderate — strong redundancy and third spaces but multi-cluster reach is limited.",
    ),
    overall_grade: "C",
    grade_reasoning: "C — strongest cultural identity in south London but T1.1 safety carries a marginal-fail signal and no BTR operator for grad-visa realism. The T3 strengths do not override the T1 floor concerns.",
  },

  projects: [],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default peckham;
