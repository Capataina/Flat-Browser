import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const vauxhall: Area = {
  id: "vauxhall",
  name: "Vauxhall",
  aliases: ["Vauxhall Cross"],
  borough: "Lambeth",
  postcodes: ["SW8", "SE11"],

  headline:
    "Zone 1 Victoria Line + SWR mainline — transport-dense interchange with LGBTQ+ heritage and Nine Elms adjacency. 14 min to Bank, 8 to Tottenham Court Road.",
  preview:
    "Vauxhall is a transport-dense Zone 1/2 interchange delivering Victoria Line to TCR in 8 minutes plus SWR mainline redundancy. The area has a distinct identity centred on the Royal Vauxhall Tavern (LGBTQ+ heritage pub), Vauxhall Pleasure Gardens, and the multi-bus interchange. Greystar Bloom and Essential Living operate nearby. The Lambeth borough safety profile makes T1.1 marginal.",

  long_form: {
    full: "Vauxhall is functionally distinct from the Nine Elms newbuild to its west. The station is a genuine multi-mode hub: Victoria Line, SWR mainline, multi-bus interchange. The Royal Vauxhall Tavern (Grade II listed LGBTQ+ heritage pub) and Vauxhall Pleasure Gardens anchor the cultural identity. Greystar Bloom sits on the Nine Elms/Vauxhall boundary. Essential Living operates The Dressage Court. Berkeley St James delivers Sky Gardens. The Nine Elms Northern Line extension branch (Vauxhall walkable in 10 min) adds a third corridor option. The limitation is the Lambeth nightlife-adjacent safety profile.",
    history: "Old Vauxhall — the cluster around the station, Royal Vauxhall Tavern, Vauxhall Pleasure Gardens, New Covent Garden Market spill. Historically gritty, transport-dense, and gay-scene-led.",
    vibe: "Gritty, historically gay-scene, transport-dense. Not a quiet residential neighbourhood — a transport hub with residential attached.",
    weekday: "A Tuesday at 7pm: transit-heavy. Commuters flowing through the interchange.",
    weekend: "A Saturday night: LGBTQ+ scene around Royal Vauxhall Tavern.",
    notable: "Royal Vauxhall Tavern (Grade II listed); Vauxhall Pleasure Gardens; multi-bus interchange; Nine Elms adjacency.",
    croydon_comparison: "Vauxhall is Zone 1 with Victoria Line and genuine transport redundancy. More expensive and less residential than Croydon but with incomparably better connectivity.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Victoria", type: "tube" },
      { name: "South Western Railway", type: "rail" },
    ],
    primary_stations: [
      { name: "Vauxhall", lines: ["Victoria", "South Western Railway"], walk_minutes_from_centre: 3 },
    ],
    times_to_anchors: { city_of_london: 14, canary_wharf: 21, soho_fitzrovia: 8, kings_cross_shoreditch: 15 },
    multi_cluster_score: 4,
    redundancy_score: 3,
    notes: "Victoria + SWR mainline. Nine Elms Northern branch 10 min walk. Average 14.5 min. T1.3 PASS, T5.1 PASS (4/4 ≤25), T5.2 PASS.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Vauxhall ward 20-39 at 51.6%. Top-skew — reads almost as young as Nine Elms.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "above", crime_vs_croydon: "similar", after_dark_assessment: "Lambeth nightlife-adjacent cluster. T1.1 marginal — leaning fail but strong fail-dissent recorded.", concerns: ["Lambeth borough headline", "Nightlife-adjacent ASB"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Vauxhall Pleasure Gardens", walk_minutes: 5, notes: "Historic pleasure gardens" }], overall_assessment: "Limited green. Vauxhall Pleasure Gardens is the main open space. Thames-adjacent but not Thames-fronting." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "Keybridge House redevelopment and related Nine Elms-side plots delivering 2027. Vauxhall benefits from Nine Elms corridor maturation.", recent_milestones: [], upcoming_milestones: ["Keybridge House delivery 2027 window"], trajectory_through_2027: "Ascending — benefits from the broader Nine Elms corridor maturation.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "partial", "1.6": "pass" },
      {
        "1.1": "Marginal — Lambeth nightlife-adjacent. Leaning fail with strong fail-dissent recorded.",
        "1.2": "Modern stock: Greystar Bloom (boundary), Essential Living Dressage Court, Berkeley St James Sky Gardens.",
        "1.3": "Victoria + SWR. Zone 1/2. 14 min to Bank, 8 to TCR.",
        "1.4": "Essential Living and Greystar Bloom operate nearby. Active rental market.",
        "1.5": "Mixed public realm — transport hub character rather than residential-first.",
        "1.6": "Not in decline — ascending with Nine Elms corridor.",
      },
      "moderate",
      "T1 passes but T1.1 is marginal and public realm is transport-hub-led.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "partial", "2.3": "partial", "2.4": "partial", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "Daily essentials layer is thin at the Vauxhall core — relies on Nine Elms and Oval adjacency.",
        "2.2": "Grocery access relies on adjacent areas.",
        "2.3": "Gym access via adjacent areas.",
        "2.4": "Vauxhall Pleasure Gardens is the main green. Limited.",
        "2.5": "Transport hub is noisy. Residential pockets vary.",
        "2.7": "Ward 20-39 at 51.6%. Top-skew.",
      },
      "weak",
      "T2 weak. Transport hub character means daily life essentials are thin at the core.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "partial", "3.4": "partial", "3.5": "partial", "3.6": "pass" },
      {
        "3.1": "Ascending with Nine Elms corridor. Keybridge House delivering.",
        "3.2": "Royal Vauxhall Tavern (Grade II LGBTQ+ heritage) + Vauxhall Pleasure Gardens.",
        "3.3": "Identity is contested — transport hub, nightlife, LGBTQ+ heritage, Nine Elms adjacency. Not a unified sense of place.",
        "3.4": "15-minute completeness is partial — transport-dense but amenity-thin.",
        "3.5": "Mixed architectural quality. Low standalone press signal.",
        "3.6": "Strong day/night rhythm — transit-heavy weekdays, LGBTQ+ scene weekends.",
      },
      "moderate",
      "T3 moderate. Cultural identity exists (LGBTQ+ heritage) but area cohesion is low.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "4/4 anchors ≤25 min. Average 14.5 min.",
        "5.2": "Victoria + SWR + Northern (walkable Nine Elms). Redundancy 3/5.",
        "5.3": "Ascending with Nine Elms corridor.",
        "5.4": "Thin third-space culture at the Vauxhall core itself.",
      },
      "good",
      "T5 strong on connectivity. Weak on third spaces.",
    ),
    overall_grade: "B",
    grade_reasoning: "B- — excellent connectivity and transport redundancy, but T1.1 marginal, T2 daily life thin, and area identity is more transport hub than residential neighbourhood.",
  },

  projects: [],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default vauxhall;
