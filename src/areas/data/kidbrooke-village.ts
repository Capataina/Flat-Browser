import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const kidbrookeVillage: Area = {
  id: "kidbrooke-village",
  name: "Kidbrooke Village",
  aliases: ["Kidbrooke"],
  borough: "Greenwich",
  postcodes: ["SE3"],

  headline:
    "A Berkeley Group masterplan most outsiders don't know about — which keeps pricing accessible. Cator Park integrated throughout, London Bridge in 15 minutes.",
  preview:
    "The quiet underperformer on this list — consistently well-built, well-managed, underpriced relative to what it delivers. Cator Park integrated physically, mature trees, proper green space. Blackheath village walkable, Greenwich close as a second anchor. London Bridge in 15 min from Kidbrooke station. 5,000 homes planned by 2032.",

  long_form: {
    full: "Kidbrooke Village is the quiet underperformer on this list — consistently well-built, well-managed, and underpriced relative to what it delivers. Cator Park is integrated physically into the development with mature trees and proper green space, not a token strip of lawn. Berkeley's build quality is reliably good: considered brick detailing, layouts that work, and maintenance that holds up. Blackheath village is walkable — the high street, the heath itself, and the independent cafes and restaurants are reachable on foot. Greenwich town centre is close enough to serve as a second social anchor. Kidbrooke station on the Southeastern line connects to London Bridge in around 15 minutes. The texture here is suburban and quiet — worth knowing going in — but it is a genuinely well-designed place.",
    history: "Kidbrooke Village replaced the Ferrier Estate, a 1960s council estate that was demolished from 2009. Berkeley took on the masterplan and has been delivering phases since 2010. 5,000 homes planned by 2032.",
    vibe: "Suburban and quiet. The most family-coded entry in the dataset. Calm rather than exciting.",
    weekday: "A Tuesday at 7pm: residential calm; Cator Park has dog walkers; the small retail strip near the station is winding down; the SE Railway runs through.",
    weekend: "A Saturday: park crowds, brunch at the small on-site cafes, families heading to Blackheath village.",
    notable: "Cator Park integration, Berkeley's build quality, proximity to Blackheath.",
    croydon_comparison: "Kidbrooke Village is genuinely quieter and more suburban than Croydon, but the build quality and public realm are in a different league. The Southeastern Railway connection to London Bridge is faster than most Croydon options.",
  },

  zones: ["Zone 3"],
  connectivity: {
    lines: [{ name: "Southeastern", type: "rail" }],
    primary_stations: [{ name: "Kidbrooke", lines: ["Southeastern"], walk_minutes_from_centre: 6 }],
    times_to_anchors: { city_of_london: 25, canary_wharf: 32, soho_fitzrovia: 30, kings_cross_shoreditch: 28 },
    multi_cluster_score: 1,
    redundancy_score: 1,
    notes: "Single Southeastern Railway connection. The headline transport weakness — all routes go via London Bridge.",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 3, professional_renter_pct: 40, notes: "Family-leaning suburban demographic.", sources: [] },
  safety: { overall: "very-safe", crime_vs_borough: "below", crime_vs_croydon: "much-safer", after_dark_assessment: "Very safe. Quiet residential streets, well-lit, low foot traffic.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Cator Park", walk_minutes: 1, notes: "Integrated throughout the development with mature trees" }, { name: "Blackheath", size_acres: 211, walk_minutes: 18, notes: "Famous heath" }], overall_assessment: "Strong parkside identity. Cator Park is the central design feature." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Phase F to populate. Known: Sainsbury's Local on site, PureGym on site, Blackheath village high street walkable." },
  regeneration: { status: "phased", investment_pipeline: "Multi-phase delivery through 2032.", recent_milestones: ["City Point delivered", "Kidbrooke Square latest phase"], upcoming_milestones: ["Continued delivery to 5,000 homes by 2032"], trajectory_through_2027: "Ascending — masterplan still has years of delivery ahead.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(T1_CRITERIA, { "1.1": "pass", "1.2": "pass", "1.3": "partial", "1.4": "pass", "1.5": "pass", "1.6": "pass" }, { "1.3": "Single rail line — borderline on T1.3" }, "good", "T1 mostly clean. Connectivity is borderline."),
    t2_daily_life: buildTier(T2_CRITERIA, { "2.1": "partial", "2.2": "partial", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "partial" }, {}, "moderate", "T2 is mid — walkable essentials decent but not dense, demographic skew is mature."),
    t3_identity: buildTier(T3_CRITERIA, { "3.1": "pass", "3.2": "fail", "3.3": "partial", "3.4": "partial", "3.5": "pass", "3.6": "fail" }, { "3.2": "No real cultural anchor", "3.6": "Quiet residential — no day/night activity rhythm" }, "weak", "T3 is the weakest tier. No cultural anchor, no day/night life. The trade-off for the calm and the price."),
    t5_personal: buildTier(T5_CRITERIA, { "5.1": "fail", "5.2": "fail", "5.3": "pass", "5.4": "fail" }, {}, "weak", "T5 is the second-weakest tier. Single line, no multi-cluster reach, no third-space culture."),
    overall_grade: "C",
    grade_reasoning: "C grade reflects strong T1+T2.3+T2.4 but weak T3 and T5. Kidbrooke Village is for someone who wants quiet and price over urban energy. For Caner specifically, the connectivity weakness and lack of T3/T5 character make it a backup rather than a primary candidate.",
  },

  projects: [
    buildProject({ id: "kidbrooke-village-core", area_id: "kidbrooke-village", name: "Kidbrooke Village (core masterplan)", developer: "Berkeley Group", operator: "Berkeley", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "achievable", preview: "Multiple phases delivered and ongoing. Cator Park integrated throughout. PureGym and Sainsbury's Local on site.", amenity_tier: "decent", overall_grade: "B" }),
    buildProject({ id: "city-point", area_id: "kidbrooke-village", name: "City Point", developer: "Berkeley", operator: "Berkeley", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable", preview: "Urban-feeling residential cluster near the station. Useful if the broader masterplan reads too suburban.", amenity_tier: "decent", overall_grade: "B" }),
    buildProject({ id: "kidbrooke-square", area_id: "kidbrooke-village", name: "Kidbrooke Square", developer: "Berkeley", operator: "Berkeley", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "achievable", preview: "Newest addition to the masterplan. Located close to the Blackheath border.", amenity_tier: "decent", overall_grade: "B" }),
    buildProject({ id: "blackheath-collection", area_id: "kidbrooke-village", name: "The Blackheath Collection", developer: "Berkeley", operator: "Berkeley", building_type: "Owner-Lease", build_phase: "complete", tenure: ["buy"], realism: "blocked", preview: "Boutique phase on the Blackheath border. Smaller scale, higher finish specification.", amenity_tier: "strong", overall_grade: "B" }),
  ],

  external_links: [
    { url: "https://www.kidbrookevillage.co.uk/", label: "Kidbrooke Village official", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default kidbrookeVillage;
