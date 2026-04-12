import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const oldStreetHoxton: Area = {
  id: "old-street-hoxton",
  name: "Old Street / Hoxton",
  aliases: ["Old Street", "Hoxton", "Shoreditch North"],
  borough: "Islington",
  postcodes: ["EC1V", "EC2A", "N1"],

  headline:
    "Zone 1 tech-city hub — Northern Line plus Overground at Hoxton. 4 minutes to Bank. The Shoreditch nightlife and dining ecosystem is on your doorstep but the residential grain is mixed.",
  preview:
    "Old Street is the tech-city centre of London with Northern Line access to Bank in 4 minutes and Canary Wharf in 13. Hoxton adds Overground (Windrush) for a second independent corridor. The nightlife fringe means T1.1 is a marginal pass rather than clean. Principal Tower (Foster + Partners) is the premium architectural anchor.",

  long_form: {
    full: "Old Street / Hoxton sits at the intersection of Islington and Hackney, anchored by the Old Street tech-city cluster and the Hoxton Square cultural scene. Northern Line at Old Street delivers Bank in 4 minutes. Hoxton (Overground Windrush) adds a second independent corridor reaching Whitechapel and the Elizabeth Line. The area is mature — the Old Street roundabout public realm transformation completed 2022–2023. The limitation is the Shoreditch nightclub belt, which generates ASB and noise on weekends, making T1.1 a marginal pass.",
    history: "The Old Street roundabout redevelopment (TfL + Islington Council) completed its public realm transformation in 2022-2023. The tech-city office cluster is mature. Hoxton Square area is mature.",
    vibe: "Tech-city by day, nightlife-adjacent by night. Hoxton Square has galleries and restaurants. The office tower cluster around the roundabout is busy weekdays, quiet weekends.",
    weekday: "A Tuesday at 7pm: office workers heading to bars and restaurants around Hoxton Square and Curtain Road.",
    weekend: "A Saturday night: Shoreditch nightlife spills into the area. Sunday morning is quiet with brunch cafes.",
    notable: "Principal Tower (Foster + Partners); Hoxton Square; Old Street roundabout redesign; tech-city office cluster.",
    croydon_comparison: "Old Street is Zone 1 with Bank in 4 minutes — incomparable to Croydon on connectivity. The nightlife fringe is the trade-off Croydon does not have.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
      { name: "Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "Old Street", lines: ["Northern"], walk_minutes_from_centre: 3 },
      { name: "Hoxton", lines: ["Overground"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 4, canary_wharf: 13, soho_fitzrovia: 10, kings_cross_shoreditch: 0 },
    multi_cluster_score: 5,
    redundancy_score: 3,
    notes: "Northern at Old Street + Great Northern mainline + Overground Windrush at Hoxton. Three independent corridors. Average ~7 min to anchors.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Hoxton East & Shoreditch ward 20-39 at 52%. Top-skew — one of the youngest wards in London.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "above", crime_vs_croydon: "safer", after_dark_assessment: "Safe by day, mixed after midnight on weekends due to Shoreditch nightclub belt. Marginal T1.1 pass.", concerns: ["Shoreditch nightlife ASB on weekends"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Shoreditch Park", walk_minutes: 10, notes: "15 acres, NE of centre" }, { name: "Hoxton Square", walk_minutes: 5, notes: "Designed square" }], overall_assessment: "Nominal green. Among the most green-poor central areas — parks are at the edge of walking range." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "complete", investment_pipeline: "Old Street roundabout redevelopment completed 2022-2023. No major pipeline.", recent_milestones: ["Old Street roundabout public realm completed"], upcoming_milestones: [], trajectory_through_2027: "Plateaued. Mature tech-city cluster.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Marginal pass. Shoreditch nightclub belt generates ASB. Closer to Dalston than Highbury on the safety axis.",
        "1.2": "Modern stock present — The Stage (Moda Living), Atlas Building, Bezier Apartments, Principal Tower.",
        "1.3": "Northern Line at Old Street, Overground Windrush at Hoxton. Zone 1. Bank in 4 min.",
        "1.4": "Active professional rental. The Stage is Moda Living BTR (Tier 8). Individual-landlord stock at Bezier/Atlas.",
        "1.5": "Old Street roundabout public realm recently completed. Hoxton Square well-maintained.",
        "1.6": "Not in decline — stable mature area.",
      },
      "moderate",
      "T1 passes but T1.1 is marginal due to Shoreditch nightlife fringe.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "partial", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "Walkable essentials via Hoxton Street, Old Street, and the broader Shoreditch dining ecosystem.",
        "2.2": "Grocery options present in the area.",
        "2.3": "Gym access available in the tech-city corridor.",
        "2.4": "Nominal green — Shoreditch Park 10 min NE, Hoxton Square. Among the most green-poor central areas.",
        "2.5": "Mixed. Tech-city core is quiet at night but Shoreditch nightlife belt generates noise on weekends.",
        "2.7": "Hoxton East & Shoreditch 20-39 at 52%. Top-skew.",
      },
      "moderate",
      "T2 is decent but green space and night quiet are weak axes.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "pass" },
      {
        "3.1": "Roundabout redesign completed. No major future pipeline.",
        "3.2": "Tech-city cluster, Hoxton Square galleries, Shoreditch dining scene — strong cultural anchors.",
        "3.3": "Strong sense of place. 'Old Street' and 'Hoxton' are recognisable London brands.",
        "3.4": "Complete 15-minute neighbourhood with dense dining and retail options.",
        "3.5": "Principal Tower (Foster + Partners — Pritzker 1999) is the premium architectural piece. Tech-press narrative dominates broader perception.",
        "3.6": "Strong day/night rhythm — office by day, nightlife by night.",
      },
      "good",
      "T3 strong on identity and cultural anchors. Principal Tower gives a real architectural piece.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "partial", "5.4": "pass" },
      {
        "5.1": "Average ~7 min to anchors. Bank in 4 min. Outstanding multi-cluster coverage.",
        "5.2": "Northern + Great Northern + Overground Windrush. Three independent corridors.",
        "5.3": "Plateaued — mature area, no ascending trajectory.",
        "5.4": "Dense cafe culture around Hoxton Square and surrounding streets.",
      },
      "good",
      "T5 strong. Excellent connectivity and redundancy. No trajectory uplift.",
    ),
    overall_grade: "B",
    grade_reasoning: "B — outstanding connectivity (Bank in 4 min, three independent corridors), strong identity, but T1.1 marginal and no ascending trajectory.",
  },

  projects: [
    buildProject({
      id: "the-stage-ec2", area_id: "old-street-hoxton", name: "The Stage EC2", developer: "Galliard + McCourt Group", operator: "Moda Living", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Moda Living BTR at Shoreditch edge. Tier 8 operator with referencing opacity.",
      amenity_tier: "strong", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Modern BTR build. Moda Living management.",
        t4_1_amenity_package: "Strong shared amenities — gym, co-working, lounge.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    buildProject({
      id: "principal-tower", area_id: "old-street-hoxton", name: "Principal Tower", developer: "Brookfield + Concord Pacific", operator: "Individual landlords", building_type: "Owner-Lease", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Foster + Partners (Pritzker 1999) tower visible from the Shoreditch skyline. Premium amenity stack: pool, gym, spa, 24h concierge, sky lounge.",
      amenity_tier: "premium", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Foster + Partners delivery. Premium specification.",
        t4_1_amenity_package: "Premium — pool, gym, spa, 24h concierge, sky lounge.",
        t4_4_signature_arch: "Foster + Partners — Pritzker-firm tower. Signature.",
      },
    }),
    buildProject({
      id: "shoreditch-parkside", area_id: "old-street-hoxton", name: "Shoreditch Parkside", developer: "London Borough of Hackney", operator: "Individual landlords", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unknown",
      preview: "290-unit scheme on Pitfield Street, north of Shoreditch Park. 4 blocks up to 10 storeys. Concierge, residents' lounge, workspaces, roof terrace. Completion expected 2026.",
      architects: ["Feilden Clegg Bradley Studios"],
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "New-build delivery by Feilden Clegg Bradley Studios — practice with strong reputation for housing quality.",
        t4_1_amenity_package: "Decent — 24/7 concierge, residents' lounge, workspaces, roof terrace.",
        t4_4_signature_arch: "Feilden Clegg Bradley Studios — RIBA Stirling Prize-winning practice. Not a flagship design but a quality architect.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default oldStreetHoxton;
