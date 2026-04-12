import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const poplarBlackwall: Area = {
  id: "poplar-blackwall",
  name: "Poplar / Blackwall",
  aliases: ["Poplar", "Blackwall", "London City Island", "Aspen Way"],
  borough: "Tower Hamlets",
  postcodes: ["E14"],

  headline:
    "Canary Wharf's lower-cost transition zone with DLR and Jubilee access. Ballymore's London City Island anchors the area. Adjacent to Canary Wharf without the premium pricing.",
  preview:
    "Poplar DLR and Blackwall DLR stations sit in the transition zone between Canary Wharf and the Limehouse/Bow corridor. Ballymore's London City Island is the headline development. Demographics: Poplar ward 43% aged 20-39. The area fills the gap between Canary Wharf's high-end coverage and the wider Tower Hamlets residential grain.",

  long_form: {
    full: "Poplar / Blackwall occupies the transition zone south-east of Canary Wharf — close enough to benefit from Canary Wharf's infrastructure and employment but at a meaningfully lower price floor. The DLR provides the primary transport spine, with Poplar station offering DLR interchange and Jubilee at Canary Wharf walkable. Ballymore's London City Island is the headline project — a self-contained residential island on the Leamouth Peninsula. Telford Homes has delivered multiple BTS projects in the area. The candidate list has the Canary Wharf entry covering the high end but nothing picking up this transition zone, which is a real gap in the dataset.",
    history: "Historic docklands area. Poplar was heavily bombed in WWII and rebuilt with council estates. Canary Wharf development in the 1990s began the transformation of the adjacent area.",
    vibe: "Transitional. Between Canary Wharf's glass towers and Tower Hamlets' residential grain. London City Island has a more self-contained island feel.",
    weekday: "A Tuesday at 7pm: DLR busy with Canary Wharf commuters; London City Island restaurants active; Poplar High Street quieter.",
    weekend: "A Saturday: London City Island draws visitors; broader Poplar is residential and quiet.",
    notable: "London City Island (Ballymore); English National Ballet HQ on London City Island; Poplar DLR interchange.",
    croydon_comparison: "Poplar / Blackwall delivers Canary Wharf adjacency at a lower price than the Wharf itself, with DLR connectivity. Less characterful than Croydon's town-centre grain but stronger employment-hub proximity.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "DLR", type: "dlr" },
      { name: "Jubilee", type: "tube" },
    ],
    primary_stations: [
      { name: "Poplar", lines: ["DLR"], walk_minutes_from_centre: 5 },
      { name: "Blackwall", lines: ["DLR"], walk_minutes_from_centre: 8 },
      { name: "East India", lines: ["DLR"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 15, canary_wharf: 5, soho_fitzrovia: 25, kings_cross_shoreditch: 20 },
    multi_cluster_score: 3,
    redundancy_score: 2,
    notes: "DLR is the primary line. Jubilee at Canary Wharf walkable from some addresses. Times are estimates based on DLR to Bank direct and interchange patterns. Canary Wharf proximity is the headline.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Census 2021: Poplar ward 20-39 at 43%. Blackwall & Cubitt Town ward 20-39 at 57.4%. Strong young-skew, especially on the Blackwall side closer to Canary Wharf.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "average", crime_vs_croydon: "similar", after_dark_assessment: "Not specifically covered in sweep-01 safety foundational as a standalone area. Tower Hamlets borough context applies.", concerns: [], sources: [] },
  green_and_water: { has_river: true, has_canal: false, has_dock: true, parks: [], overall_assessment: "Thames frontage at London City Island (Leamouth Peninsula). Dock access. Limited parkland within the immediate area but Canary Wharf's green spaces are walkable." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "Ballymore London City Island. Telford Homes multiple BTS projects. Ongoing Canary Wharf overspill development.", recent_milestones: ["London City Island delivery", "English National Ballet HQ relocation"], upcoming_milestones: [], trajectory_through_2027: "Ascending. Benefiting from Canary Wharf maturation and overspill demand.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "unknown", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Not specifically assessed. Tower Hamlets borough context applies.",
        "1.2": "Modern rental stock — London City Island (Ballymore), Telford Homes BTS deliveries.",
        "1.3": "DLR + walkable Jubilee at Canary Wharf. Zone 2.",
        "1.4": "Ballymore + Telford Homes operate in the area. No Vertus, Quintain, or Get Living direct.",
        "1.5": "London City Island is stewarded by Ballymore. Broader Poplar is mixed.",
        "1.6": "Not in decline — ascending with Canary Wharf overspill.",
      },
      "moderate",
      "T1 moderate — T1.1 unknown, all other rows pass.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "unknown", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Walkable essentials are thin in the immediate area. Canary Wharf retail is walkable for some addresses.",
        "2.2": "Grocery access not yet researched.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Thames frontage at London City Island. Dock access.",
        "2.5": "Residential. No nightlife generator on-site. Quiet at night.",
        "2.7": "Poplar 43%, Blackwall & Cubitt Town 57.4% aged 20-39. Strong young-skew.",
      },
      "moderate",
      "T2 moderate — strong demographics and waterfront, but thin everyday amenity layer outside Canary Wharf.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "partial", "3.4": "partial", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "Active development — London City Island, ongoing Telford Homes delivery.",
        "3.2": "English National Ballet HQ at London City Island is a genuine cultural anchor but niche.",
        "3.3": "Identity is transitional — between Canary Wharf and Tower Hamlets residential. London City Island has a more distinct character.",
        "3.4": "15-minute completeness partial — transport and waterfront strong, everyday retail thin.",
        "3.5": "London City Island is architecturally interesting; broader Poplar is mixed.",
        "3.6": "Day/night rhythm is uneven — Canary Wharf commuter flow daytime, quiet evenings.",
      },
      "moderate",
      "T3 moderate — London City Island gives some identity anchor but the broader area is transitional.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "partial", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Canary Wharf in 5 minutes. City in 15. All anchors reachable under 25 minutes (Soho borderline). Reasonable multi-cluster coverage.",
        "5.2": "DLR primary with walkable Jubilee at Canary Wharf. 2/5 redundancy — DLR is lightweight infrastructure.",
        "5.3": "Ascending — Canary Wharf overspill and ongoing development.",
        "5.4": "Limited third-space culture. London City Island restaurants but no deep cafe/bookshop layer.",
      },
      "moderate",
      "T5 moderate — Canary Wharf proximity is the strength. DLR-only redundancy and thin third spaces are the gaps.",
    ),
    overall_grade: "C",
    grade_reasoning: "C-B grade — Canary Wharf adjacency at lower price is the value proposition. DLR-only infrastructure, transitional identity, and thin everyday amenity layer keep it in C territory. London City Island is the strongest individual project.",
  },

  projects: [
    buildProject({
      id: "london-city-island", area_id: "poplar-blackwall", name: "London City Island", developer: "Ballymore", operator: "Ballymore", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Ballymore self-contained residential island on the Leamouth Peninsula. English National Ballet HQ. Thames frontage.",
      amenity_tier: "strong", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Ballymore delivery — mid-premium build quality consistent with their London portfolio.",
        t4_1_amenity_package: "Strong amenity package for a self-contained island development.",
        t4_4_signature_arch: "Distinctive island concept. Not Pritzker-authored but architecturally interesting.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default poplarBlackwall;
