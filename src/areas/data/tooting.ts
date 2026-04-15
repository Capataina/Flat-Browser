import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const springfieldPlace = buildProject({
  id: "springfield-place", area_id: "tooting", name: "Springfield Place", developer: "Barratt London", operator: "Agent-managed", building_type: "Build-to-Sell", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "232 units (part of wider Springfield Village with ~1,800 homes) on former Springfield Hospital site. New 32-acre public park. 9 min walk to Tooting Bec (Northern line). Sales from £470,000; rental est. 1-bed ~£1,700-£2,000 pcm. 2025-2027 phased.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Barratt London delivery. Mixed low-to-mid rise. In delivery 2025-2027.",
    t4_1_amenity_package: "New 32-acre public park, retail/cafe space, public square. No private communal amenity researched.",
    t4_4_signature_arch: "Not signature-authored. IKEA-designed show apartments (partnership).",
  },
});
springfieldPlace.external_links = [
  { url: "https://www.barratthomes.co.uk/new-homes/dev001958-springfield-place/", label: "Barratt London — Springfield Place", type: "developer", accessed_date: "2026-04-12" },
];

const flexistayTooting = buildProject({
  id: "flexistay-tooting", area_id: "tooting", name: "Flexistay Tooting", developer: "Flexistay", operator: "Flexistay", building_type: "BTR", living_model: "apart-hotel", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Budget apart-hotel. 5 min walk from Tooting Broadway (Northern line). Studio apartments from ~£1,800–£2,500+VAT/month all-inclusive. Free Wi-Fi, cleaning, 24h self-service breakfast. Hospitality licence — no referencing.",
  amenity_tier: "basic", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Budget apart-hotel specification. Functional, not premium.",
    t4_1_amenity_package: "Basic — Wi-Fi, cleaning, self-service breakfast. No gym, no concierge.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
flexistayTooting.external_links = [
  { url: "https://www.flexistay.com/H-80-Flexistay-Tooting-Aparthotel.aspx", label: "Flexistay Tooting", type: "operator", accessed_date: "2026-04-15" },
];
flexistayTooting.rental.price_transparency = "enquire";

const tooting: Area = {
  id: "tooting",
  name: "Tooting",
  aliases: ["Tooting Broadway", "Tooting Bec"],
  borough: "Wandsworth",
  postcodes: ["SW17"],

  headline:
    "Northern line Zone 3 in one of the safer inner-London boroughs — Wandsworth at ~70/1k, materially below Croydon. Tooting Market is the daily-life anchor. No flagship BTR operator. Average 24 min to anchors.",
  preview:
    "Clean T1.1 safety pass — Wandsworth is one of the safer inner-London boroughs. Tooting Market is a genuine food destination. Northern line gives central access but Zone 3 means slower times. 20-39 at 49% — strong young-professional skew along the Northern Line corridor. No flagship BTR. Average 24 min to anchors, 2/4 ≤25.",

  long_form: {
    full: "",
    history: "",
    vibe: "",
    weekday: "",
    weekend: "",
    notable: "Tooting Market — one of south London's best indoor food markets. Tooting Bec Lido — one of Europe's largest outdoor swimming pools.",
    croydon_comparison: "",
  },

  zones: ["Zone 3"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
      { name: "Thameslink", type: "rail" },
    ],
    primary_stations: [
      { name: "Tooting Broadway", lines: ["Northern"], walk_minutes_from_centre: 3 },
      { name: "Tooting Bec", lines: ["Northern"], walk_minutes_from_centre: 8 },
      { name: "Tooting NR", lines: ["Thameslink"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 22, canary_wharf: 30, soho_fitzrovia: 18, kings_cross_shoreditch: 26 },
    multi_cluster_score: 2,
    redundancy_score: 2,
    notes: "Northern primary, Thameslink fallback at Tooting NR (distinct station, low frequency). Redundancy 2/5. Average 24 min. 2/4 anchors ≤25.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Tooting Broadway ward: 20-39 49%. Matches Clapham/Balham Northern Line young-professional ribbon. Census 2021 via CrystalRoof.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "below", crime_vs_croydon: "much-safer", after_dark_assessment: "Wandsworth ~70–103/1k — one of the safer inner-south London boroughs. Tooting ward sits in the calmer half. Tooting Market is family-friendly daytime anchor. No specific violent-crime concentration.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Tooting Bec Common", walk_minutes: 5, notes: "Large common with Tooting Bec Lido" }, { name: "Tooting Graveney Common", walk_minutes: 8, notes: "" }], overall_assessment: "Tooting Bec Common with its Lido is a major green and recreational asset." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. Tooting Market is the headline food anchor." },
  regeneration: { status: "complete", investment_pipeline: "", recent_milestones: [], upcoming_milestones: [], trajectory_through_2027: "Stable. No major regeneration underway.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "partial", "1.3": "pass", "1.4": "fail", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Clean pass. Wandsworth is one of the safer inner-London boroughs, materially below Croydon.",
        "1.2": "No flagship BTR. Individual-landlord rental stock.",
        "1.3": "Northern line at Tooting Broadway.",
        "1.4": "No flagship BTR operator. Apo does not currently operate at Tooting.",
        "1.5": "Tooting Market is well-maintained. Residential streets in good order.",
        "1.6": "Stable — not in decline.",
      },
      "moderate",
      "T1 clean on safety. T1.4 fails — no BTR operator.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Tooting Market and the High Street provide walkable daily essentials.",
        "2.2": "Tooting Market is quality fresh food — South Asian and international cuisine.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Tooting Bec Common with Lido is a significant green/recreational asset.",
        "2.5": "Quieter than Clapham or Brixton. Family-friendly residential grain.",
        "2.7": "20-39 at 49% — strong young-professional skew.",
      },
      "good",
      "Strong daily life. Tooting Market, Tooting Bec Common/Lido, quiet residential grain.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "No major regeneration. Stable and mature.",
        "3.2": "Tooting Market is a genuine commercial and cultural anchor.",
        "3.3": "Distinct identity — South Asian heritage, food culture, Northern Line young-professional ribbon.",
        "3.4": "15-minute completeness is good.",
        "3.5": "No architectural press signal. No jury architecture.",
        "3.6": "Market-driven daytime rhythm. Residential at night. Not a day/night destination.",
      },
      "moderate",
      "T3 moderate. Tooting Market is the identity anchor. No architectural signal.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "partial", "5.3": "partial", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 2/5 — 2 of 4 anchors ≤25 min. Average 24 min.",
        "5.2": "Northern primary, Thameslink fallback (low frequency). Redundancy 2/5.",
        "5.3": "Stable rather than ascending.",
        "5.4": "Tooting Market cafes. Third-space culture is decent but not deep.",
      },
      "moderate",
      "T5 is moderate. Multi-cluster and redundancy are the weak axes.",
    ),
    overall_grade: "C",
    grade_reasoning: "C — clean safety, good daily life with Tooting Market and Lido, strong demographics. Constrained by no BTR operator (T1.4 fail), weaker multi-cluster reach (Zone 3), and limited redundancy.",
  },

  projects: [
    springfieldPlace,
    // RESEARCH: The Broadway Tooting — mixed-use, agent-managed. 111 units.
    // REALISM: unlikely (standard agent referencing)
    // COST_TIER: UNVERIFIED
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "the-broadway-tooting", area_id: "tooting", name: "The Broadway", developer: "unknown", operator: "Agent-managed", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "111 units (83 private + 28 affordable) across two buildings (~8-10 storeys) at 181-207 Tooting High Street. Mixed-use with 22,738 sq ft retail space. Near Tooting Broadway station. 2023-2024 completion.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "2023-2024 completion. Residential-led mixed-use. Build quality details not researched.",
        t4_1_amenity_package: "Private outdoor space, some units with spacious terraces. Retail ground floor.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    flexistayTooting,
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default tooting;
