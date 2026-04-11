import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const royalWharfAndDocks: Area = {
  id: "royal-wharf-and-docks",
  name: "Royal Wharf & Royal Docks",
  aliases: ["Royal Wharf", "Silvertown", "Royal Docks"],
  borough: "Newham",
  postcodes: ["E16"],

  headline:
    "A 40-acre purpose-built riverside neighbourhood plus the wider Royal Docks regeneration zone — Elizabeth Line transformed connectivity, Thames Clipper pier, full clubhouse amenities.",
  preview:
    "Royal Wharf is one of the most self-contained riverside developments in London — built from scratch on a former industrial site in Silvertown. 3,385 homes, Thames Clipper pier on site, a working high street, clubhouse with pool/spa/sauna/gym. Custom House Elizabeth line puts Liverpool Street at 8 minutes, Canary Wharf at 4. The wider Royal Docks zone (Silvertown Quays, Royal Albert Wharf) is in active expansion.",

  long_form: {
    full: "Royal Wharf is one of the most self-contained riverside developments in London — built from scratch on a former industrial site in Silvertown. The Clubhouse anchors the amenity offer: pool, spa, sauna, jacuzzi, gym, and a residents' lounge. A Thames Clipper pier sits on site and a kilometre of riverfront walk runs along the development's edge. The on-site high street has cafes, a Sainsbury's Local, and independent businesses already trading. Ballymore's management quality has been consistently above average relative to the price point. The Elizabeth line completely transformed the connectivity case: Custom House station puts Liverpool Street at 8 minutes, Canary Wharf at 4. The Silvertown Tunnel opened in April 2025, providing a new cross-river link to Greenwich Peninsula and The O2.",
    history: "The Royal Docks were the world's largest enclosed dock system until industrial decline in the 1980s. Royal Wharf is the first major residential development on the riverside. The wider Royal Docks regeneration is delivering Silvertown Quays, Royal Albert Wharf, and ExCeL expansion.",
    vibe: "Self-contained and family-leaning. The clubhouse and on-site high street give it real day-to-day liveability. The wider Royal Docks area is still industrial-edge in places, which can read as quiet rather than bleak depending on the day.",
    weekday: "A Tuesday at 7pm: clubhouse facilities are full, the high street has after-work activity, the Elizabeth line is busy, the riverfront walk has runners and dog walkers.",
    weekend: "A Saturday: brunch crowds at the high street, riverfront walk activity, ExCeL events bring crowds to the wider area.",
    notable: "Royal Wharf Clubhouse, Thames Clipper pier, Silvertown Tunnel (2025), ExCeL London, Royal Albert Dock.",
    croydon_comparison: "Royal Wharf is family-shaped and self-contained — calmer than central London but with the Elizabeth Line connectivity that makes any commute trivial. Croydon is denser but lower-quality; Royal Wharf is lower-density but higher-quality and meaningfully more pleasant to live in day to day.",
  },

  zones: ["Zone 3"],
  connectivity: {
    lines: [
      { name: "Elizabeth", type: "elizabeth" },
      { name: "DLR", type: "dlr" },
    ],
    primary_stations: [
      { name: "Custom House", lines: ["Elizabeth", "DLR"], walk_minutes_from_centre: 6 },
      { name: "Pontoon Dock", lines: ["DLR"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 14, canary_wharf: 4, soho_fitzrovia: 18, kings_cross_shoreditch: 16 },
    multi_cluster_score: 4,
    redundancy_score: 2,
    notes: "Elizabeth Line is the transformative addition. DLR adds redundancy.",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 4, professional_renter_pct: 50, notes: "Newham broader area is highly diverse. Royal Wharf itself is family-leaning professional.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "below", crime_vs_croydon: "much-safer", after_dark_assessment: "The Royal Wharf footprint is well-stewarded. The wider Royal Docks area is industrial-edge in places and quieter at night.", concerns: [], sources: [] },
  green_and_water: {
    has_river: true, has_canal: false, has_dock: true,
    parks: [{ name: "Lyle Park", walk_minutes: 5, notes: "Riverside park" }, { name: "Thames Barrier Park", walk_minutes: 12, notes: "Designed park beside the Thames Barrier" }],
    overall_assessment: "Strong waterside identity — Thames frontage, dock proximity, Thames Clipper pier on site.",
  },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Phase F to populate. Known: Sainsbury's Local, on-site high street, clubhouse facilities, ExCeL nearby." },
  regeneration: {
    status: "phased",
    investment_pipeline: "Royal Wharf core complete. Wider Royal Docks delivering Silvertown Quays, Royal Albert Wharf, Argenta, Thameside West.",
    recent_milestones: ["Silvertown Tunnel opened April 2025", "Argenta first residents late 2025", "Royal Wharf Clubhouse fully operational"],
    upcoming_milestones: ["Silvertown Quays continued delivery", "Royal Albert Wharf phases"],
    trajectory_through_2027: "Royal Docks area will be substantially more developed by 2027 with the Elizabeth Line accessibility advantage compounding.",
    sources: [],
  },

  evaluation: {
    t1_foundational: buildTier(T1_CRITERIA, { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" }, {}, "strong", "T1 clean."),
    t2_daily_life: buildTier(T2_CRITERIA, { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "partial" }, { "2.7": "Mature professional family skew rather than dominant young cohort" }, "good", "Strong T2 with the only weakness being demographic skew."),
    t3_identity: buildTier(T3_CRITERIA, { "3.1": "pass", "3.2": "partial", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "partial" }, {}, "good", "Identity is strong but the area is quieter than central destination areas."),
    t5_personal: buildTier(T5_CRITERIA, { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "partial" }, {}, "good", "Strong T5 — Elizabeth Line redundancy + ascending trajectory + multi-cluster."),
    overall_grade: "B",
    grade_reasoning: "B grade reflects clean T1, good T2, mid-tier T3, decent T5. The demographic skew and identity calm hold it back from A. Strong value at the price point.",
  },

  projects: [
    buildProject({ id: "royal-wharf-core", area_id: "royal-wharf-and-docks", name: "Royal Wharf by Ballymore (core masterplan)", developer: "Ballymore + Oxley", operator: "Ballymore", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable-with-upfront", preview: "Multiple phases delivered. Thames Clipper pier on-site. Clubhouse with pool, spa, sauna, jacuzzi, gym.", amenity_tier: "strong", overall_grade: "A" }),
    buildProject({ id: "royal-wharf-gardens", area_id: "royal-wharf-and-docks", name: "Royal Wharf Gardens", developer: "Ballymore", operator: "Ballymore", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable-with-upfront", preview: "Greener, more family-shaped side of the masterplan.", amenity_tier: "strong", overall_grade: "A" }),
    buildProject({ id: "riverscape", area_id: "royal-wharf-and-docks", name: "Riverscape", developer: "Ballymore + Oxley", operator: "Ballymore", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable-with-upfront", preview: "Adjacent riverside scheme in the wider Royal Docks orbit. More premium than Royal Wharf proper.", amenity_tier: "premium", overall_grade: "A" }),
    buildProject({ id: "argenta-silvertown", area_id: "royal-wharf-and-docks", name: "Argenta at Silvertown", developer: "Guinness Homes / Lendlease", operator: "Various", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "achievable", preview: "Brand new. First residents late 2025. Shared Ownership and private rent. Dock views toward North Greenwich.", amenity_tier: "decent", overall_grade: "B" }),
    buildProject({ id: "thameside-west", area_id: "royal-wharf-and-docks", name: "Thameside West", developer: "GLA / Silvertown Homes", operator: "Various", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown", preview: "Joint venture on the western edge of the Royal Docks. Riverside plots with Elizabeth line access.", amenity_tier: "decent", overall_grade: "B" }),
  ],

  external_links: [
    { url: "https://www.royalwharf.com/", label: "Royal Wharf official", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default royalWharfAndDocks;
