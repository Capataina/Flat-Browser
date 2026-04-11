import type { Area } from "../types";
import {
  T1_CRITERIA,
  T2_CRITERIA,
  T3_CRITERIA,
  T5_CRITERIA,
  buildProject,
  buildTier,
  stubResearch,
} from "./helpers";

// New parent area collapsing the old Embassy Gardens, Bloom Nine Elms,
// Riverlight Quay, and One Nine Elms entries into projects under a single
// Nine Elms area. Battersea Power Station is its own area (per migration
// decision in the website refactor plan).

const nineElms: Area = {
  id: "nine-elms",
  name: "Nine Elms",
  aliases: ["VNEB", "Vauxhall Nine Elms Battersea", "Nine Elms / Vauxhall"],
  borough: "Wandsworth / Lambeth",
  postcodes: ["SW8", "SW11"],

  headline:
    "The Northern Line extension turned an industrial wasteland into London's biggest single regeneration corridor — riverside, glass-tower premium addresses, US Embassy adjacency.",
  preview:
    "Nine Elms is the corridor that runs from Vauxhall to Battersea Power Station along the south bank of the Thames. The Northern Line extension at Nine Elms station opened in 2021. The US Embassy moved here in 2018, and the streets around it are among the most monitored in London. Multiple premium developments — Embassy Gardens, One Nine Elms, Bloom, Riverlight Quay — share the corridor.",

  long_form: {
    full: "Nine Elms is the corridor that runs along the south bank of the Thames between Vauxhall and Battersea Power Station. Until 2010 it was an industrial wasteland of New Covent Garden Market warehouses and surface parking. Today it is the largest single regeneration zone in London, anchored by the US Embassy (relocated in 2018), the Northern Line extension (Nine Elms and Battersea Power Station stations both opened in 2021), and a series of premium residential developments including Embassy Gardens, Riverlight Quay, Bloom Nine Elms, One Nine Elms, and the Battersea Power Station development to the west. The corridor has its own riverside walk running fully from Vauxhall to BPS. The architectural quality is mixed — some signature buildings (Frank Gehry's Battersea contributions, the Sky Pool at Embassy Gardens) alongside more generic glass towers. The defining feature is that this is a fully new district, built end to end in the 2010s and 2020s, rather than a regeneration of an existing community.",
    history: "Until 2010 the Nine Elms corridor was an industrial wasteland. The US Embassy decision (2008, opened 2018) was the trigger for the broader masterplan, followed by the Northern Line extension (consented 2014, opened 2021), and the Battersea Power Station redevelopment running in parallel. The result is a fully new district built in roughly 15 years.",
    vibe: "Glassy, modern, professional. The streets feel like they were designed all at once — because they were. Less character than King's Cross, more uniformity than Wembley Park. The public realm is generous but not yet warm; the area is still building out the cultural and retail layer that gives an area soul. Embassy Gardens' Sky Pool is the photo-op identity; everyday life is more about premium residential calm than buzzy street life.",
    weekday: "A Tuesday at 7pm: the Northern Line at Nine Elms is busy with commuters; Embassy Gardens' restaurants are at moderate occupancy; the riverside walk has joggers and dog walkers; the streets around the US Embassy are notably empty after dark.",
    weekend: "A Saturday at midday: the riverside walk is the main social space, with cyclists and walkers stretching from Vauxhall to BPS; Embassy Gardens' Sky Pool is a destination attraction; some restaurant traffic but not at the level of Battersea Power Station's retail core.",
    notable: "Sky Pool at Embassy Gardens, US Embassy, Northern Line extension stations, Riverlight Quay's residents' club, One Nine Elms twin towers, Bloom's Waitrose-on-site model.",
    croydon_comparison:
      "Nine Elms is the cleanest example of a fully new luxury district replacing nothing. Croydon is a degraded historic centre; Nine Elms is a brand-new built environment. The trade-off is that Nine Elms is monotone where Croydon has at least the bones of a place — but for someone leaving Croydon for an upgrade, monotone-but-modern is the right direction. The Northern Line extension is genuine and provides Zone 1 access at distances that previously took 30+ minutes.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
      { name: "Victoria", type: "tube" },
    ],
    primary_stations: [
      { name: "Nine Elms", lines: ["Northern"], walk_minutes_from_centre: 4 },
      { name: "Vauxhall", lines: ["Victoria"], walk_minutes_from_centre: 12 },
    ],
    times_to_anchors: {
      city_of_london: 19,
      canary_wharf: 28,
      soho_fitzrovia: 14,
      kings_cross_shoreditch: 18,
    },
    multi_cluster_score: 3,
    redundancy_score: 2,
    notes: "Northern Line extension is the dominant story. Vauxhall (Victoria Line) is walkable but not on every block. Single-line failure stranding is the headline weakness — see T5.2 evaluation.",
    sources: [],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [],
    ethnic_composition: [],
    household_mix: [],
    student_pct: 5,
    professional_renter_pct: 60,
    notes: "Nine Elms ward grew roughly 14x in population between 2011 and 2021 — Census data underrepresents the current professional-renter heaviness. Predominantly 20s-30s working professionals.",
    sources: [],
  },
  safety: {
    overall: "very-safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "The streets around the US Embassy are among the most consistently maintained and monitored in London. The wider corridor is well-lit and quiet. No concerns.",
    concerns: [],
    sources: [],
  },
  green_and_water: {
    has_river: true,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Embassy Gardens linear park", walk_minutes: 3, notes: "Designed linear park between the Embassy Gardens buildings" },
      { name: "Battersea Park", size_acres: 200, walk_minutes: 14, notes: "Major Royal Park to the west, accessible via riverside walk" },
    ],
    overall_assessment: "Riverside identity is the defining green feature. The Thames frontage runs fully from Vauxhall to BPS. Battersea Park is walkable.",
  },
  amenities: {
    grocery: [],
    gyms: [],
    food_and_drink: [],
    health: [],
    cultural: [],
    notes: "Phase F to populate. Known: Waitrose at Bloom, multiple gyms in residential buildings, US Embassy commissary access for residents (informal), Riverlight Quay restaurants, Sainsbury's Local nearby.",
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "Multiple phases of multiple developments still completing. Battersea Power Station to the west (separate area entry) is itself in active delivery and reinforces the corridor.",
    recent_milestones: ["Northern Line extension opened 2021", "Embassy Gardens Sky Pool delivered", "US Embassy fully operational"],
    upcoming_milestones: ["Continued completions across multiple developments through 2027+"],
    trajectory_through_2027:
      "Nine Elms is on an ascending trajectory through the visa transition. The corridor will be substantially more activated by 2027 as the residential population grows and retail/cultural offering matures.",
    sources: [],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {},
      "strong",
      "T1 passes cleanly. Premium operator presence (Way of Life, EcoWorld Ballymore, Berkeley, Essential Living), exceptional safety, modern stock end to end.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Walkable essentials are present but the area is still building out the granular high street layer",
      },
      "good",
      "Strong on most T2 rows; the only weakness is the still-developing walkable retail layer beyond the supermarkets and gyms inside specific buildings.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "pass", "3.4": "partial", "3.5": "partial", "3.6": "partial" },
      {
        "3.2": "Cultural anchor is the US Embassy itself, which is prominent but not socially activating",
        "3.4": "15-min completeness still maturing as the area builds out",
        "3.5": "Architectural quality is mixed — some signature, some generic",
        "3.6": "Day/night rhythm still developing; quiet at night but lacks the buzz of King's Cross",
      },
      "moderate",
      "T3 is the weakest tier for Nine Elms. The area passes regeneration and name recognition cleanly but the cultural depth and architectural coherence are uneven. This is the corridor's known weakness — it is mid-build rather than mature.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "fail", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Northern Line covers some clusters but Canary Wharf is awkward",
        "5.2": "Single-line dependency on Northern Line extension is the single biggest weakness — failure strands the area",
        "5.4": "Limited bookshop and library presence",
      },
      "moderate",
      "T5 reveals the headline weakness: Northern Line single-point-of-failure. Trajectory is strong, but transport robustness is the worst in the dataset for an otherwise-premium area.",
    ),
    overall_grade: "A",
    grade_reasoning:
      "Nine Elms earns A on the strength of T1 + T2 (clean) and the ongoing trajectory. T3 mid-tier and T5 transport weakness keep it from S. The headline risk is Northern Line dependency — anyone working at Canary Wharf would be punished by it.",
  },

  projects: [
    buildProject({
      id: "embassy-gardens",
      area_id: "nine-elms",
      name: "Embassy Gardens",
      developer: "EcoWorld Ballymore",
      operator: "EcoWorld Ballymore",
      building_type: "Owner-Lease",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unlikely",
      preview: "Sky Pool suspended between two towers. US Embassy directly adjacent. 24-hour concierge, gym, spa, curated retail. The benchmark for what the long game looks like on the Nine Elms corridor.",
      amenity_tier: "premium",
      is_signature: true,
      overall_grade: "A",
    }),
    buildProject({
      id: "bloom-nine-elms",
      area_id: "nine-elms",
      name: "Bloom Nine Elms",
      developer: "Essential Living",
      operator: "Essential Living",
      building_type: "BTR",
      build_phase: "complete",
      tenure: ["rent"],
      realism: "achievable-with-upfront",
      preview: "BTR-only — the Nine Elms corridor address you can rent but not purchase. River views, rooftop amenities, Waitrose directly on-site. Well-managed.",
      amenity_tier: "strong",
      overall_grade: "A",
    }),
    buildProject({
      id: "riverlight-quay",
      area_id: "nine-elms",
      name: "Riverlight Quay",
      developer: "St James (Berkeley Group)",
      operator: "St James",
      building_type: "Mixed",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unlikely",
      preview: "Six riverfront buildings between Vauxhall and Embassy Gardens. Residents' club, Thames views, mix of rental and ownership.",
      amenity_tier: "strong",
      overall_grade: "A",
    }),
    buildProject({
      id: "one-nine-elms",
      area_id: "nine-elms",
      name: "One Nine Elms",
      developer: "CC Land Holdings",
      operator: "Park Hyatt",
      building_type: "Owner-Lease",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unlikely",
      preview: "Twin towers with a Park Hyatt hotel component — one of the few addresses with hotel-level services built in by default. Adjacent to Vauxhall, Zone 1 Northern line, upper-floor Thames views.",
      amenity_tier: "premium",
      is_signature: true,
      overall_grade: "S",
    }),
  ],

  external_links: [
    { url: "https://en.wikipedia.org/wiki/Nine_Elms", label: "Wikipedia (Nine Elms)", type: "wikipedia", accessed_date: "2026-04-11" },
    { url: "https://www.embassygardens.com/", label: "Embassy Gardens official site", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default nineElms;
