import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const greenwichPeninsula: Area = {
  id: "greenwich-peninsula",
  name: "Greenwich Peninsula",
  aliases: ["North Greenwich", "Peninsula"],
  borough: "Greenwich",
  postcodes: ["SE10"],

  headline:
    "Europe's largest single residential regeneration project — 17,500 homes planned, 5,000+ already in place. The Tide elevated linear park, Design District, The O2 directly adjacent.",
  preview:
    "Knight Dragon's 30-year masterplan is past its halfway point. The Tide is a 5km elevated linear park along the Thames. Design District at the northern tip houses creative studios. The O2 brings live events. Upper Riverside Towers 4 & 5 with Tom Dixon and SOM design. Jubilee line from North Greenwich.",

  long_form: {
    full: "Knight Dragon's 30-year masterplan is past its halfway point with a fully functioning public realm and a resident community that has critical mass. The Tide is a 5km elevated linear park along the Thames — one of the most distinctive pieces of outdoor infrastructure built in London in recent years. The Design District at the northern tip houses creative studios, independent businesses, and cultural programming. The O2 Arena brings year-round live events. Upper Riverside towers No.4 and No.5 are the architectural centrepiece — No.4 with Tom Dixon interiors, No.5 by SOM. Entry-level riverside apartments from roughly GBP 2,100/month; Upper Riverside closer to GBP 2,500/month. The GLA's co-investment makes delivery risk structurally low.",
    history: "The Peninsula was a brownfield site dominated by the Millennium Dome (now The O2). Knight Dragon (a Hong Kong-based developer) took over the masterplan in the 2010s and has been delivering phased residential since.",
    vibe: "Quieter and more residential than the central destination areas. The crowd is professional and family-leaning. The Tide and Design District provide character; the rest is solid managed housing in a maturing district.",
    weekday: "A Tuesday at 7pm: O2 events generate sporadic crowds; the Tide has joggers and walkers; Upper Riverside lobbies are active but not buzzy.",
    weekend: "A Saturday: O2 event days bring large crowds; the Tide is the main social space.",
    notable: "The Tide elevated park, The O2 Arena, Design District, Upper Riverside Tom Dixon / SOM towers.",
    croydon_comparison: "Greenwich Peninsula is a fully new district built end to end. Croydon is a degraded historic centre. The Peninsula is quieter and less culturally dense than Croydon's town centre, but the public realm and building quality are in a different league. The Jubilee line is a clean upgrade on Croydon's overground-only options.",
  },

  zones: ["Zone 2", "Zone 3"],
  connectivity: {
    lines: [{ name: "Jubilee", type: "tube" }],
    primary_stations: [{ name: "North Greenwich", lines: ["Jubilee"], walk_minutes_from_centre: 5 }],
    times_to_anchors: { city_of_london: 18, canary_wharf: 4, soho_fitzrovia: 22, kings_cross_shoreditch: 25 },
    multi_cluster_score: 3,
    redundancy_score: 1,
    notes: "Single Jubilee line. One stop to Canary Wharf is the headline strength; multi-cluster reach is uneven.",
    sources: [],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [],
    ethnic_composition: [],
    household_mix: [],
    student_pct: 4,
    professional_renter_pct: 55,
    notes: "Established professional residential area. Working-age dominant with moderate family presence.",
    sources: [],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "Quiet, well-lit, well-maintained. Some residents find the nighttime atmosphere isolated outside event nights.",
    concerns: [],
    sources: [],
  },
  green_and_water: {
    has_river: true,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "The Tide", walk_minutes: 3, notes: "5km elevated linear park along the Thames" },
      { name: "Greenwich Park", size_acres: 183, walk_minutes: 25, notes: "Royal Park to the south" },
    ],
    overall_assessment: "Strong waterside identity. The Tide is a unique amenity in London.",
  },
  amenities: {
    grocery: [],
    gyms: [],
    food_and_drink: [],
    health: [],
    cultural: [],
    notes: "Not yet populated. Known: M&S, Sainsbury's, multiple gyms in residential buildings, Design District restaurants, The O2 venues.",
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "Multiple phases through 2030+. Morden Wharf next major phase being redesigned.",
    recent_milestones: ["Upper Riverside completed", "Peninsula Gardens late 2025", "Design District fully open"],
    upcoming_milestones: ["Morden Wharf 1,500 homes", "Continued masterplan delivery"],
    trajectory_through_2027: "Ascending. Peninsula will be substantially more developed by 2027.",
    sources: [],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Safe rating with Greenwich crime below borough average; the masterplan footprint is quiet and well-lit, though some residents describe after-dark atmosphere as isolated on non-event nights.",
        "1.2": "Upper Riverside 1-5, The Waterman, and Peninsula Gardens are all purpose-built Knight Dragon stock delivered recently. No pre-war stock on the Peninsula.",
        "1.3": "Jubilee line from North Greenwich puts Canary Wharf at 4 minutes, the City at 18, Soho at 22. Meets 1.3 on a single fast line despite the redundancy weakness.",
        "1.4": "Knight Dragon operates the majority of residential stock with corporate referencing across a single-developer masterplan — professional rental market in place.",
        "1.5": "Knight Dragon stewardship funds supplementary maintenance; The Tide, Peninsula Square, and the Design District public realm are actively maintained.",
        "1.6": "Masterplan is past the halfway point with multiple phases still in delivery through 2030+; GLA co-investment structurally underwrites continued progress.",
      },
      "strong",
      "T1 clean.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "partial" },
      {
        "2.1": "M&S, Sainsbury's, pharmacy, gyms, and Design District restaurants all within the masterplan footprint — walkable essentials layer is mature.",
        "2.2": "M&S and Sainsbury's provide the premium/standard grocery mix; the Design District adds independent food options.",
        "2.3": "Multiple gyms in residential buildings plus commercial options around North Greenwich station; the O2 cluster adds further fitness infrastructure.",
        "2.4": "The Tide 5km elevated linear park is a unique London amenity, the Thames is on the doorstep, and Greenwich Park (183 acres) is within 25 minutes walk.",
        "2.5": "Residential side is reliably quiet after 10pm — O2 event days bring periodic crowds but normal nights are calm.",
        "2.7": "Mature professional skew rather than dominant young cohort — primary cohort 30-39 with family presence; less young-professional-dominant than Stratford or Wembley Park.",
      },
      "good",
      "Strong on most T2 rows. Demographic skew is moderate rather than strongly young.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "partial", "3.5": "pass", "3.6": "partial" },
      {
        "3.1": "Knight Dragon masterplan in active delivery — Peninsula Gardens completed late 2025, Morden Wharf being redesigned, multiple phases scheduled through 2030+.",
        "3.2": "The O2 Arena is a major cultural/commercial anchor drawing year-round events; the Design District provides a secondary creative anchor.",
        "3.3": "'Greenwich Peninsula' has clear place identity anchored by The O2, The Tide, and Europe's largest single regeneration status.",
        "3.4": "15-min completeness is partial — the northern tip around the Design District is rich, but residential density is spread across a large area with uneven retail infill.",
        "3.5": "Architectural quality is strong in parts — Upper Riverside 4 & 5 have Tom Dixon interiors and SOM design — but the masterplan is mixed across its 17,500-home footprint.",
        "3.6": "Day/night rhythm is uneven outside event days — quiet residential character dominates until The O2 has a show, which creates sporadic rather than consistent activation.",
      },
      "good",
      "The Tide and The O2 give strong identity. Day/night rhythm is uneven outside event days.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "fail", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 3/5 — Jubilee reaches Canary Wharf instantly and the City and West End cleanly, but KX/Shoreditch is 25 minutes.",
        "5.2": "Single Jubilee line — major weakness if line fails. Redundancy score 1/5. Same single-point-of-failure weakness as Nine Elms.",
        "5.3": "Strongly ascending trajectory — Morden Wharf's 1,500 homes upcoming, Peninsula will be substantially more developed by 2027.",
        "5.4": "Limited quiet third spaces — The Tide serves as outdoor reading space, but bookshop/library culture is thin.",
      },
      "moderate",
      "T5 has the same single-line dependency weakness as Nine Elms. Trajectory is strong.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade reflects solid T1+T2+T3 with the T5 transport-redundancy failure and the moderate demographic skew. A reasonable working candidate but not a top-of-list pick.",
  },

  projects: [
    buildProject({
      id: "upper-riverside-1-3", area_id: "greenwich-peninsula", name: "Upper Riverside No.1 to No.3", developer: "Knight Dragon", operator: "Knight Dragon", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable-with-upfront",
      preview: "Earlier waterfront towers establishing the premium residential language of the Peninsula.",
      amenity_tier: "strong", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Knight Dragon delivery to the masterplan's early premium specification — modern building services, Thames-facing layouts.",
        t4_1_amenity_package: "Strong residents' amenities — gym, lounges, concierge — one tier below the No.4/5 flagship package.",
        t4_4_signature_arch: "Distinctive waterfront tower form but not named-architect signature work.",
      },
    }),
    buildProject({
      id: "upper-riverside-4-5", area_id: "greenwich-peninsula", name: "Upper Riverside No.4 & No.5", developer: "Knight Dragon", operator: "Knight Dragon", building_type: "Owner-Lease", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "Waterfront towers. Pool, gym, spa, cinema room. No.4 interiors by Tom Dixon; No.5 designed by SOM architects.",
      amenity_tier: "premium", is_signature: true, architects: ["Tom Dixon", "SOM"], overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Tom Dixon interiors at No.4 and SOM-designed No.5 — top-tier specification with modern building services and premium finish.",
        t4_1_amenity_package: "Pool, gym, spa, cinema room — full premium flagship stack on the Peninsula.",
        t4_4_signature_arch: "SOM is a major international architectural practice and Tom Dixon is a recognised design authorship — credible signature credentials for an owner-lease product.",
      },
    }),
    buildProject({
      id: "the-waterman", area_id: "greenwich-peninsula", name: "The Waterman", developer: "Knight Dragon", operator: "Knight Dragon", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "achievable-with-upfront",
      preview: "Key rental-led component within the masterplan. Broadens Greenwich Peninsula beyond the headline riverside towers.",
      amenity_tier: "strong", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Knight Dragon BTR with modern specification and professional management — consistent with the masterplan's baseline quality.",
        t4_1_amenity_package: "Strong BTR amenity set — gym, lounges, concierge. Not the absolute flagship tier.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    buildProject({
      id: "peninsula-gardens", area_id: "greenwich-peninsula", name: "Peninsula Gardens", developer: "Knight Dragon", operator: "Knight Dragon", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable-with-upfront",
      preview: "Four brickwork waterfront buildings. Studios and 1-2 bed apartments. Completed late 2025.",
      amenity_tier: "strong", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Brand new late-2025 delivery to current Knight Dragon specification — brickwork detailing and waterfront layouts.",
        t4_1_amenity_package: "Strong shared amenities consistent with the masterplan's current spec.",
        t4_4_signature_arch: "Distinctive brickwork composition but not named-architect signature work.",
      },
    }),
    buildProject({
      id: "morden-wharf", area_id: "greenwich-peninsula", name: "Morden Wharf", developer: "Galliard + CDL", operator: "Galliard", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Major upcoming phase. 1,500 homes in towers up to 36 storeys. Currently being redesigned by Jo Cowen Architects.",
      amenity_tier: "strong", architects: ["Jo Cowen Architects"], overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Unbuilt — specification and quality will be set by the Jo Cowen redesign and Galliard/CDL delivery.",
        t4_1_amenity_package: "1,500-home masterplan expected to include full amenity package but unbuilt and unconfirmed.",
        t4_4_signature_arch: "Jo Cowen Architects have a recognisable London practice but the signature status of the redesigned scheme is not yet established.",
      },
    }),
    buildProject({
      id: "peninsula-riverfront", area_id: "greenwich-peninsula", name: "Peninsula Riverfront", developer: "Knight Dragon", operator: "Knight Dragon", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Part of the Upper Riverside district, ~200 units, ~15-20 storeys. SOM glass facade with stepped roof terraces. Thames and Design District views. 2022-2023 completion. Rental through agents — 2-bed from ~£2,500 pcm. May overlap with existing Upper Riverside entries.",
      amenity_tier: "strong", architects: ["SOM"], overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Knight Dragon delivery within the Upper Riverside district. Glass facade with stepped roof terraces.",
        t4_1_amenity_package: "Swimming pool, gyms, roof terraces, media room — shared Upper Riverside amenities.",
        t4_4_signature_arch: "SOM (Skidmore, Owings & Merrill) — major international practice.",
      },
    }),
  ],

  external_links: [
    { url: "https://www.greenwichpeninsula.co.uk/", label: "Greenwich Peninsula official", type: "developer", accessed_date: "2026-04-11" },
    { url: "https://en.wikipedia.org/wiki/Greenwich_Peninsula", label: "Wikipedia", type: "wikipedia", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default greenwichPeninsula;
