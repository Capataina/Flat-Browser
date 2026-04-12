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
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. Known: Sainsbury's Local, on-site high street, clubhouse facilities, ExCeL nearby." },
  regeneration: {
    status: "phased",
    investment_pipeline: "Royal Wharf core complete. Wider Royal Docks delivering Silvertown Quays, Royal Albert Wharf, Argenta, Thameside West.",
    recent_milestones: ["Silvertown Tunnel opened April 2025", "Argenta first residents late 2025", "Royal Wharf Clubhouse fully operational"],
    upcoming_milestones: ["Silvertown Quays continued delivery", "Royal Albert Wharf phases"],
    trajectory_through_2027: "Royal Docks area will be substantially more developed by 2027 with the Elizabeth Line accessibility advantage compounding.",
    sources: [],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Safe rating with Newham crime below borough average; Royal Wharf itself is well-stewarded by Ballymore. Wider Royal Docks industrial-edge is quieter at night but not unsafe.",
        "1.2": "Royal Wharf core, Royal Wharf Gardens, Riverscape, and Argenta are all purpose-built modern stock. Ballymore-delivered to consistent specification.",
        "1.3": "Elizabeth Line at Custom House puts Liverpool Street at 8 minutes and Canary Wharf at 4 — Zone 3 with Zone 1 travel times. DLR adds redundancy.",
        "1.4": "Ballymore operates the majority of the residential stock under a single managed umbrella with corporate referencing. Guinness/Lendlease at Argenta add a second operator.",
        "1.5": "Ballymore stewardship contract funds supplementary maintenance across the Royal Wharf footprint; the Clubhouse and high street are actively maintained.",
        "1.6": "Not in decline — Royal Docks wider regeneration is in active delivery with Silvertown Tunnel opened April 2025, Silvertown Quays and Royal Albert Wharf continuing.",
      },
      "strong",
      "T1 clean.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "pass", "2.5": "pass", "2.7": "partial" },
      {
        "2.1": "On-site high street with Sainsbury's Local, cafes, and independents plus the Clubhouse amenity block — 15-minute essentials are genuinely delivered.",
        "2.2": "Sainsbury's Local handles everyday grocery and the on-site independents add fresh food options; ExCeL retail is walkable for weekly shops.",
        "2.3": "The Clubhouse has pool, spa, sauna, jacuzzi, and gym — a serious amenity block rather than a token resident gym.",
        "2.4": "Thames frontage on the masterplan edge, Thames Clipper pier on-site, Lyle Park and Thames Barrier Park walkable. Strong dock and riverside identity.",
        "2.5": "Residential streets are reliably quiet at night — the self-contained footprint and family-leaning character keep the night-noise profile low.",
        "2.7": "Mature professional family skew rather than dominant young cohort — primary cohort 30-39 with family presence. Not dominantly 18-29.",
      },
      "good",
      "Strong T2 with the only weakness being demographic skew.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "Royal Wharf core is complete but the wider Royal Docks regeneration is in active phased delivery — Silvertown Quays, Royal Albert Wharf, Thameside West all upcoming.",
        "3.2": "ExCeL London provides a major commercial anchor with year-round events; the Silvertown Tunnel (April 2025) is a new infrastructure anchor. Less culturally rich than Stratford or KX.",
        "3.3": "'Royal Wharf' and 'Royal Docks' are established London place names with a strong dock heritage identity — clearly recognisable.",
        "3.4": "15-minute completeness is delivered within the Royal Wharf footprint — grocery, gym, retail, park, transport, pier all walkable.",
        "3.5": "Ballymore's masterplan design is coherent and intentional but not signature-architect work — the Clubhouse is the most distinctive piece.",
        "3.6": "Day/night rhythm is uneven — on-site high street wakes up around commute and evening hours but the wider Royal Docks area sleeps early outside ExCeL event days.",
      },
      "good",
      "Identity is strong but the area is quieter than central destination areas.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 4/5 — Elizabeth Line reaches Canary Wharf in 4, City in 14, Soho in 18, KX in 16. Strong anchor coverage.",
        "5.2": "Elizabeth Line plus DLR at Custom House gives two independent modes — genuine redundancy if either fails.",
        "5.3": "Ascending through 2027 — Silvertown Tunnel delivered April 2025, Silvertown Quays and Royal Albert Wharf continuing to build out.",
        "5.4": "Quiet third-space culture is thin — some cafes on the high street but no deep bookshop or library presence.",
      },
      "good",
      "Strong T5 — Elizabeth Line redundancy + ascending trajectory + multi-cluster.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade reflects clean T1, good T2, mid-tier T3, decent T5. The demographic skew and identity calm hold it back from A. Strong value at the price point.",
  },

  projects: [
    buildProject({
      id: "royal-wharf-core", area_id: "royal-wharf-and-docks", name: "Royal Wharf by Ballymore (core masterplan)", developer: "Ballymore + Oxley", operator: "Ballymore", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable-with-upfront",
      preview: "Multiple phases delivered. Thames Clipper pier on-site. Clubhouse with pool, spa, sauna, jacuzzi, gym.",
      amenity_tier: "strong", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Ballymore delivery across multiple phases with consistent modern specification — professional Ballymore management and reliable build quality.",
        t4_1_amenity_package: "The Clubhouse — pool, spa, sauna, jacuzzi, gym, residents' lounge — is a serious amenity block and one of the strongest in Zone 3.",
        t4_4_signature_arch: "Not signature-authored — Ballymore functional premium rather than named-practice work.",
      },
    }),
    buildProject({
      id: "royal-wharf-gardens", area_id: "royal-wharf-and-docks", name: "Royal Wharf Gardens", developer: "Ballymore", operator: "Ballymore", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable-with-upfront",
      preview: "Greener, more family-shaped side of the masterplan.",
      amenity_tier: "strong", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Ballymore delivery consistent with the Royal Wharf standard — modern services, park-facing layouts.",
        t4_1_amenity_package: "Strong shared amenity access via the Clubhouse plus additional garden-facing resident spaces.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    buildProject({
      id: "riverscape", area_id: "royal-wharf-and-docks", name: "Riverscape", developer: "Ballymore + Oxley", operator: "Ballymore", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable-with-upfront",
      preview: "Adjacent riverside scheme in the wider Royal Docks orbit. More premium than Royal Wharf proper.",
      amenity_tier: "premium", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Ballymore delivery to a higher specification than Royal Wharf core — premium finish and direct riverside layouts.",
        t4_1_amenity_package: "Premium amenity package with its own resident spaces layered on top of Clubhouse access.",
        t4_4_signature_arch: "Not signature-authored but materially more distinctive than the core masterplan.",
      },
    }),
    buildProject({
      id: "argenta-silvertown", area_id: "royal-wharf-and-docks", name: "Argenta at Silvertown", developer: "Guinness Homes / Lendlease", operator: "Various", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "achievable",
      preview: "Brand new. First residents late 2025. Shared Ownership and private rent. Dock views toward North Greenwich.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Brand new 2025 delivery to current Guinness/Lendlease specification — modern services and refined layouts.",
        t4_1_amenity_package: "Decent shared amenities appropriate for the mixed Shared Ownership/private rent positioning.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    buildProject({
      id: "thameside-west", area_id: "royal-wharf-and-docks", name: "Thameside West", developer: "GLA / Silvertown Homes", operator: "Various", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Joint venture on the western edge of the Royal Docks. Riverside plots with Elizabeth line access.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Unbuilt future delivery — quality cannot yet be scored.",
        t4_1_amenity_package: "Decent amenity package expected at a GLA joint venture scale but unconfirmed.",
        t4_4_signature_arch: "Unbuilt — signature status not yet determinable.",
      },
    }),
    buildProject({
      id: "silvertown-lendlease", area_id: "royal-wharf-and-docks", name: "Silvertown (Lendlease / Starwood Capital)", developer: "Lendlease + Starwood Capital", operator: "Guinness Homes", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unknown",
      preview: "7,172-home outline permission on the former Millennium Mills site. Phase 1 affordable homes topped out 2025. Historic Millennium Mills and Silo D (Grade II). 30% affordable. Multi-decade masterplan.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Phase 1 affordable block is 6 storeys — modern Lendlease/Guinness specification. Private phases unbuilt.",
        t4_1_amenity_package: "Heritage Millennium Mills and Silo D provide architectural character. Riverside park and public realm planned but unbuilt at scale.",
        t4_4_signature_arch: "Millennium Mills (Grade II) is architecturally significant industrial heritage. New-build phases do not yet have named architects confirmed.",
      },
    }),
    buildProject({
      id: "thames-road-ballymore", area_id: "royal-wharf-and-docks", name: "Thames Road", developer: "Ballymore", operator: "unknown", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Planning approved by LB Newham. 1,685 homes + 359 co-living suites. New primary school, 13,500 sq m workspace, riverside park. 173 social rent homes included.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Unbuilt — Ballymore track record from Royal Wharf gives confidence but specific quality cannot be scored yet.",
        t4_1_amenity_package: "Planned school, workspace, and riverside park indicate strong neighbourhood-level amenity but unbuilt.",
        t4_4_signature_arch: "Unbuilt — no architect confirmed.",
      },
    }),
    buildProject({
      id: "knights-road-ballymore", area_id: "royal-wharf-and-docks", name: "Knights Road", developer: "Ballymore", operator: "unknown", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Planning submitted, awaiting determination. 1,667 homes near West Silvertown DLR. 4,000 sq m workspace.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Unbuilt — planning not yet approved. Ballymore pedigree but no detail available.",
        t4_1_amenity_package: "Planned workspace but minimal confirmed amenity detail.",
        t4_4_signature_arch: "Unbuilt — no architect confirmed.",
      },
    }),
    buildProject({
      id: "fortunes-dock", area_id: "royal-wharf-and-docks", name: "Fortunes Dock (Grainger)", developer: "Grainger plc", operator: "Grainger plc", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "412-home Grainger BTR across 3 buildings (Argo, Nautilus, Seraphina). Phase 2 completed 2025, 50% leased in under a month. Near Canning Town station. 2-bed from ~£2,640 pcm.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Grainger institutional BTR — modern open-plan apartments with excellent storage. Phase 2 (Seraphina) delivered 2025.",
        t4_1_amenity_package: "Decent BTR amenity standard. Near Canning Town station provides transport convenience.",
        t4_4_signature_arch: "Not signature-authored — institutional BTR design.",
      },
    }),
  ],

  external_links: [
    { url: "https://www.royalwharf.com/", label: "Royal Wharf official", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default royalWharfAndDocks;
