import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const brixton: Area = {
  id: "brixton",
  name: "Brixton",
  aliases: ["Brixton Hill", "Brixton Village"],
  borough: "Lambeth",
  postcodes: ["SW2", "SW9"],

  headline:
    "Victoria line terminus — 13 minutes to Oxford Circus. Brixton's cultural identity is one of London's strongest, but T1.1 safety is a marginal-fail and there is no flagship BTR operator. Node Living co-living is the one qualification-friendly option.",
  preview:
    "Victoria line gives strong central London access (13 min to Oxford Circus, 17 to Bank). Brixton's Caribbean-heritage cultural identity, market scene, and nightlife are genuine strengths. T1.1 safety is marginal — the safety sweep leans fail on Brixton's crime profile. No flagship BTR; Node Living Brixton (co-living, ~£1,675/month studio) is the only operator-level option.",

  long_form: {
    full: "",
    history: "",
    vibe: "",
    weekday: "",
    weekend: "",
    notable: "Brixton House (Foster Wilson Size) — RIBA London Award 2023. Pop Brixton. Brixton Village and Market Row. Brixton Academy.",
    croydon_comparison: "",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Victoria", type: "tube" },
      { name: "Southeastern", type: "rail" },
    ],
    primary_stations: [
      { name: "Brixton", lines: ["Victoria"], walk_minutes_from_centre: 3 },
      { name: "Brixton NR", lines: ["Southeastern"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 17, canary_wharf: 25, soho_fitzrovia: 13, kings_cross_shoreditch: 20 },
    multi_cluster_score: 4,
    redundancy_score: 3,
    notes: "Victoria terminus + Southeastern National Rail (separate infrastructure). Redundancy 3/5. Average 18.75 min. All four anchors ≤25 min (borderline).",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Brixton North ward: 20-39 43%. Above baseline but not extreme — genuine mixed-generation community. Census 2021 via CrystalRoof.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "above", crime_vs_croydon: "similar", after_dark_assessment: "T1.1 marginal — leaning fail under the Caner reading. Lambeth borough ~148/1k. Brixton has documented crime concerns.", concerns: ["T1.1 marginal-fail from safety sweep", "T3/T4 cultural strengths collide with T1.1 concerns", "Safety sweep preserves dissent — other agents may push for pass on cultural-identity grounds"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Brockwell Park", walk_minutes: 12, notes: "Large park — Brockwell Lido" }, { name: "Ruskin Park", walk_minutes: 15, notes: "" }], overall_assessment: "Brockwell Park is a significant green asset within walking distance." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. Brixton Village and Market Row are headline food-and-culture anchors." },
  regeneration: { status: "active", investment_pipeline: "International House and Pop Brixton facing demolition for new towers (2025 coverage).", recent_milestones: ["Brixton House — RIBA London Award 2023"], upcoming_milestones: ["International House / Pop Brixton redevelopment"], trajectory_through_2027: "", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "partial", "1.3": "pass", "1.4": "partial", "1.5": "partial", "1.6": "pass" },
      {
        "1.1": "MARGINAL — leaning fail. Classic case of T3/T4 strengths colliding with T1.1 concerns.",
        "1.2": "No flagship BTR. Node Living co-living is the only managed option. Rental is individual-landlord dominated.",
        "1.3": "Victoria line at Brixton — 13 min to Oxford Circus. Strong central London access.",
        "1.4": "Node Living Brixton is the one qualification-friendly operator. Otherwise individual-landlord.",
        "1.5": "Mixed public realm — Brixton Village is well-maintained, wider area is uneven.",
        "1.6": "Not in decline — active cultural and redevelopment activity.",
      },
      "moderate",
      "T1 is the constraint. T1.1 marginal-fail, T1.4 weak BTR operator presence.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "pass", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "Brixton Village, Market Row, and the High Street provide walkable daily essentials.",
        "2.2": "Market quality is genuinely strong — fresh food, independent traders.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Brockwell Park is a significant green asset within walking distance.",
        "2.5": "Brixton is a nightlife destination — not the quietest residential environment at night.",
        "2.7": "20-39 at 43% — above baseline, genuine mixed-generation community.",
      },
      "moderate",
      "Good daily life from the market scene and Brockwell Park. Quiet-at-night is partial.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "pass" },
      {
        "3.1": "Active investment — International House / Pop Brixton redevelopment. Brixton House RIBA award.",
        "3.2": "Brixton Village, Market Row, Brixton Academy — world-class cultural anchors.",
        "3.3": "One of London's most distinctive identities. Caribbean heritage, music, food culture.",
        "3.4": "15-minute completeness is strong.",
        "3.5": "Brixton House (RIBA 2023) is the architectural highlight. Wider area is mixed.",
        "3.6": "Strong day/night rhythm — markets by day, music and nightlife by night.",
      },
      "good",
      "T3 is Brixton's great strength — one of London's most culturally distinctive areas.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "partial", "5.4": "pass" },
      {
        "5.1": "Multi-cluster score 4/5 — all four anchors ≤25 min (borderline). Average 18.75 min.",
        "5.2": "Victoria + Southeastern = two independent products. Redundancy 3/5.",
        "5.3": "Trajectory mixed — cultural ascending but T1.1 safety concern persists.",
        "5.4": "Strong third-space culture — cafes, markets, independent shops.",
      },
      "moderate",
      "Good connectivity, strong third spaces. Trajectory is the uncertain axis.",
    ),
    overall_grade: "C",
    grade_reasoning: "C — strongest cultural identity in south London alongside Peckham, strong Victoria line connectivity. But T1.1 safety is marginal-fail and no flagship BTR operator means grad-visa realism is weak. T1 floor concerns hold the grade down.",
  },

  projects: [
    buildProject({
      id: "node-living-brixton", area_id: "brixton", name: "Node Living Brixton", developer: "Node Living", operator: "Node Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Co-living studios from ~£1,675/month, bills included. Tier 12 hospitality-style operator — qualification-friendly but not a conventional BTR tenancy.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Co-living product — compact studios with shared amenity spaces.",
        t4_1_amenity_package: "Shared amenity spaces typical of co-living operators.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default brixton;
