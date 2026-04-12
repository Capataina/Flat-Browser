import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects ─────────────────────────────────────────────────────────
const broadwayEast = buildProject({
  id: "broadway-east", area_id: "bethnal-green", name: "Broadway East (Regent's View)",
  developer: "St William (Berkeley Group / National Grid JV)", operator: "Various agents",
  building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "555 homes on former Bethnal Green gasworks. Canal-side with two restored Victorian gasholders. Rogers Stirk Harbour + Partners architecture. Phased delivery 2025-2026.",
  amenity_tier: "strong", overall_grade: "A", architects: ["Rogers Stirk Harbour + Partners"],
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley Group subsidiary delivery with RSHP architecture — among the most significant new developments in Bethnal Green.",
    t4_1_amenity_package: "Strong — 24-hour concierge, canal-side location with restored gasholders, landscaped gardens.",
    t4_4_signature_arch: "Rogers Stirk Harbour + Partners is a Stirling Prize-winning practice — genuine signature architecture.",
  },
});
broadwayEast.rental.price_transparency = "enquire";
broadwayEast.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/bethnal-green/regents-view", label: "Regent's View (Broadway East) — Berkeley Group", type: "developer", accessed_date: "2026-04-12" },
];

const bethnalGreen: Area = {
  id: "bethnal-green",
  name: "Bethnal Green",
  aliases: ["Bethnal Green Road"],
  borough: "Tower Hamlets",
  postcodes: ["E2"],

  headline:
    "Central Line in Zone 2 with an 11-minute average to employment anchors. East End character with Weavers Fields green spine and strong young demographic.",
  preview:
    "Central Line gives direct Bank (8 min) and Tottenham Court Road (10 min) access. Two separate stations (Bethnal Green tube + Overground) provide genuine redundancy. Young-skewed demographics with Bethnal Green West at 48% aged 20-39.",

  long_form: {
    full: "Bethnal Green sits at the intersection of Tower Hamlets' Bangladeshi community and its incoming young-professional wave. The Central Line at Bethnal Green tube gives direct access to Bank (8 min) and TCR (10 min), while a separate Overground station on the Weaver line adds genuine redundancy. Weavers Fields and Museum Gardens provide a green spine through the residential grain. The area carries authentic East End character — Bethnal Green Road market strip, Columbia Road (Sunday flower market nearby), and a genuine independent food scene. Safety passes cleanly on all six T1 rows.",
    history: "Historic East End — weavers' cottages, Victorian terraces, Bethnal Green tube shelter disaster of 1943. Columbia Road flower market nearby.",
    vibe: "Authentic East End residential. Bethnal Green Road is a busy, multicultural high street. Side streets are genuinely residential with Victorian terraces and newer infill.",
    weekday: "A Tuesday at 7pm: Bethnal Green Road still active with shops; commuters flowing from the tube; restaurants and pubs filling up.",
    weekend: "A Saturday: market activity, Weavers Fields busy with families and dog walkers; Columbia Road flower market nearby on Sundays.",
    notable: "Weavers Fields; Museum Gardens; V&A Museum of Childhood (Young V&A); Columbia Road nearby.",
    croydon_comparison: "Bethnal Green delivers Central Line Zone 2 access at comparable or lower rent to Croydon. The urban grain is denser but the connectivity is categorically stronger.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Central", type: "tube" },
      { name: "Overground (Weaver)", type: "overground" },
    ],
    primary_stations: [
      { name: "Bethnal Green", lines: ["Central"], walk_minutes_from_centre: 5 },
      { name: "Bethnal Green (Overground)", lines: ["Overground"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 8, canary_wharf: 15, soho_fitzrovia: 10, kings_cross_shoreditch: 11 },
    multi_cluster_score: 4,
    redundancy_score: 3,
    notes: "Central + Overground = two genuinely independent corridors at two adjacent stations. 11-min average to anchors. All four anchors under 25 minutes.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Census 2021: Bethnal Green West 20-39 at 48% (top-skew-adjacent); Bethnal Green East 20-39 at 43% (family-heavy with under-20 at 27.5%). Strong young-skew overall.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "average", crime_vs_croydon: "safer", after_dark_assessment: "No specific recent violent-crime hotspot designation. Bethnal Green Road carries usual East End high-street mix of busy daytime and quieter evening footfall.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Weavers Fields", walk_minutes: 5, notes: "Green spine through the residential grain" }, { name: "Museum Gardens", walk_minutes: 5, notes: "Adjacent to Young V&A" }], overall_assessment: "Weavers Fields and Museum Gardens give a genuine green spine. Not waterfront but adequate park access." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "", recent_milestones: [], upcoming_milestones: [], trajectory_through_2027: "Stable to ascending. Ongoing residential infill and independent retail growth.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Clean pass. Ward tracks Tower Hamlets borough average. No specific violent-crime hotspot designation.",
        "1.2": "Modern rental stock present via newer infill developments.",
        "1.3": "Central Line gives direct multi-hub access; Overground adds genuine redundancy.",
        "1.4": "Active professional rental market.",
        "1.5": "Public realm in reasonable order — Weavers Fields maintained, streets well-lit.",
        "1.6": "Not in decline — young demographic skew confirms ongoing demand.",
      },
      "good",
      "T1 clean pass on all six rows.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Bethnal Green Road provides walkable daily essentials.",
        "2.2": "Grocery access present along Bethnal Green Road.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Weavers Fields and Museum Gardens provide genuine green space.",
        "2.5": "Residential side streets are calm. Main road carries some noise but residential grain is quiet.",
        "2.7": "Census 2021: West ward 48%, East ward 43% aged 20-39. Strong young-skew.",
      },
      "good",
      "T2 is solid — walkable essentials, green space, young demographic, residential calm.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "pass" },
      {
        "3.1": "Ongoing residential infill but no single flagship regeneration project.",
        "3.2": "Young V&A, Columbia Road nearby, independent food scene — genuine cultural anchors.",
        "3.3": "Distinctive East End identity — recognisable sense of place.",
        "3.4": "15-minute completeness is strong — transport, grocery, parks, culture, restaurants all walkable.",
        "3.5": "Architectural quality mixed — Victorian terraces give character but newer infill is functional rather than signature.",
        "3.6": "Good day/night rhythm — busy high street daytime, calmer residential evenings, some pub/restaurant activity.",
      },
      "good",
      "T3 is strong on identity and completeness. Architectural quality is the gap.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "pass" },
      {
        "5.1": "All four anchors under 25 minutes. 11-min average. Strong multi-cluster coverage.",
        "5.2": "Central + Overground at separate stations — genuine redundancy.",
        "5.3": "Stable to ascending trajectory.",
        "5.4": "Independent cafes, Young V&A, Weavers Fields — decent third-space options.",
      },
      "good",
      "T5 strong — excellent connectivity with genuine redundancy and third-space culture.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — T1 clean, strong T5 connectivity (11-min average), genuine East End identity. No flagship project to anchor a higher grade.",
  },

  projects: [broadwayEast],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default bethnalGreen;
