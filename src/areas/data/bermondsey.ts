import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const bermondsey: Area = {
  id: "bermondsey",
  name: "Bermondsey",
  aliases: ["Bermondsey Street", "Maltby Street"],
  borough: "Southwark",
  postcodes: ["SE1", "SE16"],

  headline:
    "Warehouse-conversion character with Jubilee line access — 6 minutes to Canary Wharf, 13 to Bank. Bermondsey Street and Maltby Street Market give it a food-and-culture identity most inner-south areas lack.",
  preview:
    "Zone 1/2 Jubilee line access at a price point below London Bridge proper. Bermondsey Street is one of south London's strongest independent food-and-culture corridors. London Bridge walkable in 15 minutes for Northern + Thameslink redundancy. Appleby Blue (Stirling Prize 2025) anchors the architectural identity.",

  long_form: {
    full: "",
    history: "",
    vibe: "",
    weekday: "",
    weekend: "",
    notable: "Appleby Blue — RIBA Stirling Prize 2025, Neave Brown Award for Housing 2025, Client of the Year 2025. Three RIBA awards in a single year.",
    croydon_comparison: "",
  },

  zones: ["Zone 1", "Zone 2"],
  connectivity: {
    lines: [
      { name: "Jubilee", type: "tube" },
    ],
    primary_stations: [
      { name: "Bermondsey", lines: ["Jubilee"], walk_minutes_from_centre: 5 },
      { name: "London Bridge", lines: ["Jubilee", "Northern", "Thameslink", "Southeastern"], walk_minutes_from_centre: 15 },
    ],
    times_to_anchors: { city_of_london: 13, canary_wharf: 6, soho_fitzrovia: 17, kings_cross_shoreditch: 17 },
    multi_cluster_score: 4,
    redundancy_score: 2,
    notes: "Single line (Jubilee) at Bermondsey proper, though London Bridge is walkable in 15 min (Northern + Jubilee + Thameslink + Southeastern). Average 13.25 min to anchors.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "London Bridge & West Bermondsey ward: 20-39 51% — top-skew. Census 2021 via CrystalRoof.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "below", crime_vs_croydon: "much-safer", after_dark_assessment: "Bermondsey ward is in the calmer half of Southwark. Strong residential character along Bermondsey Street and the St Saviour's grid.", concerns: ["Mild adjacent phone-snatch concern from northern Southwark wards"], sources: [] },
  green_and_water: { has_river: true, has_canal: false, has_dock: false, parks: [], overall_assessment: "Thames-adjacent. Limited dedicated green space within the core." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. Bermondsey Street and Maltby Street Market are headline food-and-drink anchors." },
  regeneration: { status: "active", investment_pipeline: "", recent_milestones: ["Appleby Blue — Stirling Prize 2025"], upcoming_milestones: [], trajectory_through_2027: "", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Safe — Bermondsey ward is in the calmer half of Southwark. Materially safer than Croydon. Clean T1.1 pass.",
        "1.2": "Essential Living operates Bermondsey Works and The Union — modern managed rental stock present.",
        "1.3": "Jubilee line at Bermondsey — 6 min to Canary Wharf, 13 to Bank. London Bridge walkable for redundancy.",
        "1.4": "Essential Living (Tier 10) operates two buildings. Grainger plc operates The Copyhouse.",
        "1.5": "Bermondsey Street corridor is well-maintained. Appleby Blue raises architectural quality.",
        "1.6": "Not in decline — active investment, Stirling Prize winner confirms ascending trajectory.",
      },
      "good",
      "T1 clean pass on all six rows. One of the cleanest T1 passes in inner-south London.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "partial", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Bermondsey Street provides strong walkable essentials — restaurants, cafes, independent retail.",
        "2.2": "Maltby Street Market and the surrounding food corridor give quality grocery and fresh food access.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Thames-adjacent but limited dedicated green space in the core. Southwark Park is walkable.",
        "2.5": "Residential streets are calm at night. Not a nightlife destination.",
        "2.7": "20-39 cohort at 51% — top-skew young-professional demographic.",
      },
      "good",
      "Strong daily life quality driven by the Bermondsey Street food-and-culture corridor.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "pass", "3.6": "pass" },
      {
        "3.1": "Active investment — Appleby Blue Stirling Prize confirms the area's architectural trajectory.",
        "3.2": "Bermondsey Street + Maltby Street Market are genuine cultural and commercial anchors.",
        "3.3": "Strong distinct identity — warehouse-conversion character, food corridor, independent retail.",
        "3.4": "15-minute completeness is strong — food, drink, transport, culture all within walking distance.",
        "3.5": "Appleby Blue (Stirling Prize 2025) is the architectural headline. Warehouse conversions add character.",
        "3.6": "Day/night rhythm is balanced — busy food corridor by day, calm residential by night.",
      },
      "good",
      "T3 is strong. Bermondsey has one of the most distinctive identities in inner south London.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "partial", "5.3": "pass", "5.4": "pass" },
      {
        "5.1": "Multi-cluster score 4/5 — all four anchors reachable in ≤25 min. Average 13.25 min.",
        "5.2": "Single Jubilee line at Bermondsey — London Bridge walkable for redundancy but not at-station.",
        "5.3": "Ascending trajectory — Stirling Prize, strong food corridor, warehouse-conversion identity.",
        "5.4": "Bermondsey Street cafes and the White Cube gallery provide third-space options.",
      },
      "good",
      "Strong T5 — excellent multi-cluster, ascending trajectory, good third spaces.",
    ),
    overall_grade: "B",
    grade_reasoning: "B — T1 clean, T3 strong identity, excellent connectivity. Redundancy (single Jubilee line at station) is the main limitation. Essential Living operator presence is real but policy-opaque.",
  },

  projects: [
    buildProject({
      id: "bermondsey-works", area_id: "bermondsey", name: "Bermondsey Works", developer: "Essential Living", operator: "Essential Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Essential Living BTR building in Bermondsey. Tier 10 operator — qualification policy not publicly documented.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Modern BTR stock from Essential Living. Build quality details not yet researched.",
        t4_1_amenity_package: "Amenity package not yet researched.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    buildProject({
      id: "the-union-bermondsey", area_id: "bermondsey", name: "The Union", developer: "Essential Living", operator: "Essential Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Second Essential Living BTR building in Bermondsey. Same Tier 10 operator.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Modern BTR stock from Essential Living.",
        t4_1_amenity_package: "Amenity package not yet researched.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    buildProject({
      id: "the-copyhouse", area_id: "bermondsey", name: "The Copyhouse", developer: "Grainger", operator: "Grainger", building_type: "PRS", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Grainger plc PRS building in Bermondsey.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Grainger standard — details not yet researched.",
        t4_1_amenity_package: "Amenity package not yet researched.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    buildProject({
      id: "pearl-yard", area_id: "bermondsey", name: "Pearl Yard", developer: "Grosvenor + Greystar", operator: "Greystar", building_type: "BTR", build_phase: "phased", tenure: ["rent"], realism: "unknown",
      preview: "One of London's largest single BTR schemes — 1,600+ units on the historic Biscuit Factory site in SE16. Greystar operator. 3 min from Bermondsey station (Jubilee). Studio from ~£2,183 pcm; 1-bed from ~£2,877 pcm.",
      amenity_tier: "premium", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Brand-new 2026 delivery by Greystar on former Peek Freans biscuit factory site. Multiple buildings up to ~20 storeys.",
        t4_1_amenity_package: "Gym, yoga studio, residents' lounge, co-working space, 24/7 concierge, games room, arts club, dining area, rooftop gardens, pet spa. Premium amenity stack.",
        t4_4_signature_arch: "Master-planned multi-architect scheme. Not a single signature piece.",
      },
    }),
    buildProject({
      id: "the-bermondsey-project", area_id: "bermondsey", name: "The Bermondsey Project", developer: "Greystar", operator: "Greystar", building_type: "BTR", build_phase: "phased", tenure: ["rent"], realism: "unknown",
      preview: "1,624-home Greystar BTR at 100 Clements Road, SE16. Indoor swimming pool, gyms, roof terraces. ~£600m debt facility. First homes autumn 2025; full completion 2H 2027. Includes new 600-student secondary school.",
      amenity_tier: "premium", architects: ["HTA", "Hawkins\\Brown", "AFK"], overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Under construction — Greystar flagship BTR with ~£600m debt facility. Expected strong build quality.",
        t4_1_amenity_package: "Indoor swimming pool, lounges, workspaces, gyms, private dining rooms, roof terraces, 4,700 sqm play space. Premium.",
        t4_4_signature_arch: "HTA + Hawkins Brown + AFK — reputable practices but not singular signature authorship.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default bermondsey;
