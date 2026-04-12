import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const claphamCommon: Area = {
  id: "clapham-common",
  name: "Clapham Common",
  aliases: ["Clapham", "SW4"],
  borough: "Lambeth",
  postcodes: ["SW4"],

  headline:
    "Northern line Zone 2 — 13 minutes to Tottenham Court Road. Young-professional demographic at 50% in 20-39 cohort. Clapham Common park is the green anchor. No BTR operator; nightlife cluster makes T2.5 (quiet at night) the clearest fail.",
  preview:
    "Northern line gives strong central London access. Clapham Common & Abbeville ward is 50% in the 20-39 cohort — top-skew. The Common itself is a large green anchor. T1.1 safety is a marginal pass — Clapham Town is named in Lambeth's robbery-concentration list and the weekend nightlife ASB signature is real. No flagship BTR operator.",

  long_form: {
    full: "",
    history: "",
    vibe: "",
    weekday: "",
    weekend: "",
    notable: "Clapham Common — large green open space. Clapham nightlife cluster along the High Street.",
    croydon_comparison: "",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
    ],
    primary_stations: [
      { name: "Clapham Common", lines: ["Northern"], walk_minutes_from_centre: 5 },
      { name: "Clapham Junction", lines: ["Southern", "SWR", "Overground"], walk_minutes_from_centre: 15 },
    ],
    times_to_anchors: { city_of_london: 20, canary_wharf: 24, soho_fitzrovia: 13, kings_cross_shoreditch: 19 },
    multi_cluster_score: 4,
    redundancy_score: 2,
    notes: "Northern Line both branches merge here, but still one physical line — single failure point. Clapham Junction (all Southern/SWR) is a 15-min walk. Average 18.25 min. All four anchors ≤25 min (borderline).",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Clapham Common & Abbeville ward: 20-39 50% — top-skew. Census 2021 via CrystalRoof.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "average", crime_vs_croydon: "safer", after_dark_assessment: "Clapham Town named in Lambeth's robbery-concentration list. Weekend nightlife ASB signature is real. Residential grid away from High Street is notably calmer. Clapham Common park patchy after dark.", concerns: ["Clapham Town named in Lambeth robbery-concentration list", "Weekend nightlife ASB cluster", "T1.1 marginal pass — acceptable but not clean"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Clapham Common", walk_minutes: 3, notes: "Large open green space — the area's defining feature" }], overall_assessment: "Clapham Common is a major green asset. The park defines the area." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "complete", investment_pipeline: "", recent_milestones: [], upcoming_milestones: [], trajectory_through_2027: "Stable and mature. No major regeneration underway.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "partial", "1.3": "pass", "1.4": "fail", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "MARGINAL PASS. Clapham Town is named in Lambeth's robbery-concentration list. Weekend nightlife ASB is real.",
        "1.2": "No flagship BTR. Individual-landlord rental stock.",
        "1.3": "Northern line at Clapham Common. Clapham Junction walkable for redundancy.",
        "1.4": "No flagship BTR operator. Individual-landlord market.",
        "1.5": "Public realm is good — the Common is well-maintained, High Street is active.",
        "1.6": "Stable — not in decline.",
      },
      "moderate",
      "T1 passes but not cleanly. T1.1 marginal, T1.4 fails (no BTR operator).",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "pass", "2.5": "fail", "2.7": "pass" },
      {
        "2.1": "High Street provides walkable daily essentials.",
        "2.2": "Quality grocery access on and around the High Street.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Clapham Common is a major green asset.",
        "2.5": "FAIL — nightlife cluster makes this the clearest quiet-at-night fail in the dataset. T2.5 is a clearer fail than T1.1.",
        "2.7": "20-39 at 50% — top-skew young-professional demographic.",
      },
      "moderate",
      "Strong green space and demographics. Quiet-at-night is the clear fail.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "partial", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "No major regeneration — stable and mature.",
        "3.2": "Clapham Common park is the anchor. No museum, market, or cultural institution.",
        "3.3": "Recognisable identity — 'Clapham' is a strong London brand, though party-scene-coded.",
        "3.4": "15-minute completeness is good.",
        "3.5": "No architectural press signal. No jury architecture.",
        "3.6": "Day/night rhythm is uneven — quiet residential weekdays, busy nightlife weekends.",
      },
      "moderate",
      "T3 is moderate. Identity is strong but party-scene-coded. No architectural signal.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "partial", "5.3": "partial", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 4/5 — all four anchors ≤25 min (borderline). Average 18.25 min.",
        "5.2": "Single Northern line at station. Clapham Junction walkable but not at-station. Redundancy 2/5.",
        "5.3": "Stable rather than ascending. Mature area.",
        "5.4": "Third-space culture is thin — bar-coded rather than cafe-coded.",
      },
      "moderate",
      "Good multi-cluster reach but single-line dependency and weak third spaces.",
    ),
    overall_grade: "C",
    grade_reasoning: "C — strong young-professional demographic and Northern line access, but T1.1 marginal, T1.4 no BTR, T2.5 nightlife-noise fail, and party-scene identity. Not the upgrade Caner is looking for on the safety/quiet axis.",
  },

  projects: [
    // RESEARCH: Clapham Place — 1-bed from £2,275-£2,362/mo (Zoopla/OnTheMarket). 2-bed from £2,870/mo. Agent-managed (Savills etc).
    // REALISM: unlikely (standard agent referencing, no BTR operator, no documented flexibility)
    // COST_TIER: premium (1-bed from £2,275)
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "clapham-place", area_id: "clapham-common", name: "Clapham Place", developer: "unknown", operator: "Agent-managed", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "Boutique 62-unit, 9-storey development at 340A Clapham Road, SW9. 1-bed from £2,275 pcm. 24hr concierge, Technogym gym, landscaped courtyard, communal roof terrace. Near Stockwell (Victoria) and Clapham North (Northern) stations.",
      amenity_tier: "decent", architects: ["Piperwhitlock"], overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "2024 completion. Boutique scale. Penthouses and apartments.",
        t4_1_amenity_package: "24hr concierge, Technogym gym, landscaped courtyard garden, communal roof terrace with city views.",
        t4_4_signature_arch: "Piperwhitlock — boutique practice. Not a signature headline.",
      },
    }),
    // RESEARCH: One Clapham Junction (Mount Anvil + Peabody) — primarily for sale, rental via secondary market. Studio from ~£1,800/mo.
    // REALISM: unlikely (standard agent referencing, no BTR operator)
    // COST_TIER: mid-range (studio from ~£1,800)
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "one-clapham-junction", area_id: "clapham-common", name: "One Clapham Junction", developer: "Mount Anvil + Peabody", operator: "Agent-managed", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "~200+ units up to 16 storeys above Clapham Junction station area. Studio from ~£1,800 pcm. Concierge, gym, residents' lounge, rooftop terrace. Technically SW11 but within walking distance of Clapham Common.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "2023-2024 completion by Mount Anvil + Peabody. Build quality details not yet researched.",
        t4_1_amenity_package: "Concierge, gym, residents' lounge, rooftop terrace, cycle storage.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default claphamCommon;
