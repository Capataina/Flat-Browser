import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const royalWharfCore = buildProject({
  id: "royal-wharf-core", area_id: "royal-wharf-and-docks", name: "Royal Wharf by Ballymore (core masterplan)", developer: "Ballymore + Oxley", operator: "Ballymore", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Multiple phases delivered. Thames Clipper pier on-site. Clubhouse with pool, spa, sauna, jacuzzi, gym.",
  amenity_tier: "strong", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Ballymore delivery across multiple phases with consistent modern specification — professional Ballymore management and reliable build quality.",
    t4_1_amenity_package: "The Clubhouse — pool, spa, sauna, jacuzzi, gym, residents' lounge — is a serious amenity block and one of the strongest in Zone 3.",
    t4_4_signature_arch: "Not signature-authored — Ballymore functional premium rather than named-practice work.",
  },
});
royalWharfCore.external_links = [
  { url: "https://www.royalwharf.com/", label: "Royal Wharf official site", type: "developer", accessed_date: "2026-04-12" },
  { url: "https://foliolondon.co.uk/developments/royal-wharf/", label: "Folio London — Royal Wharf rentals", type: "operator", accessed_date: "2026-04-12" },
];

const fortunesDock = buildProject({
  id: "fortunes-dock", area_id: "royal-wharf-and-docks", name: "Fortunes Dock (Grainger)", developer: "Grainger plc", operator: "Grainger plc", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
  preview: "412-home Grainger BTR across 3 buildings (Argo, Nautilus, Seraphina). Phase 2 completed 2025, 50% leased in under a month. Near Canning Town station. 2-bed from ~£2,640 pcm.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Grainger institutional BTR — modern open-plan apartments with excellent storage. Phase 2 (Seraphina) delivered 2025.",
    t4_1_amenity_package: "Decent BTR amenity standard. Near Canning Town station provides transport convenience.",
    t4_4_signature_arch: "Not signature-authored — institutional BTR design.",
  },
});
fortunesDock.external_links = [
  { url: "https://fortunesdock.co.uk/", label: "Fortunes Dock official site", type: "operator", accessed_date: "2026-04-12" },
  { url: "https://www.graingerplc.co.uk/developments/fortunes-dock", label: "Grainger — Fortunes Dock", type: "operator", accessed_date: "2026-04-12" },
  { url: "https://www.homeviews.com/development/fortunes-dock-e16", label: "Fortunes Dock — HomeViews", type: "homeviews", accessed_date: "2026-04-17" },
];
fortunesDock.rental.price_transparency = "listed";
fortunesDock.rental.prices = {
  one_bed: { min: 2050, max: 2250, currency: "GBP", per: "month" },
  two_bed: { min: 2640, max: 2850, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "Bands from fortunesdock.co.uk + Grainger plc portfolio page; Phase 2 (Seraphina) carries the newest positioning",
};
fortunesDock.rental.affordability = "at-budget";
fortunesDock.building_quality = {
  epc_rating: "B",
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "Three buildings (Argo, Nautilus, Seraphina) — not to be confused with the Canning Town Argo. Open-plan living/kitchen, separate bedrooms, balcony on most units, integrated storage. Grainger's marketing explicitly flags 'excellent storage' for Seraphina.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "412-home cluster. Phase 2 delivered 2025 — newest Grainger London stock. Part of the wider Ballymore Royal Wharf masterplan so amenity extends beyond the building boundary.",
};
fortunesDock.amenities = {
  pool: false,
  pool_notes: "(Royal Wharf masterplan Clubhouse has pool/spa/gym — residents may access depending on masterplan terms; not inside the Grainger demise)",
  gym: true,
  gym_quality: "average",
  concierge: "daytime",
  sky_lounge: false,
  co_working: true,
  dining_room: true,
  cinema_room: false,
  rooftop_terrace: true,
  parking: true,
  bike_storage: true,
  pet_policy: "Pets considered on application",
  other_amenities: ["Residents' lounge", "Thames Clipper pier access (Royal Wharf masterplan)", "Royal Wharf high street + Sainsbury's Local + Clubhouse amenity"],
  overall_tier: "decent",
};
fortunesDock.architecture = {
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "Three-building BTR cluster within the Ballymore Royal Wharf masterplan. Brick and metal-cladding language consistent with the masterplan palette. Respects dock frontage without being landmark.",
};
fortunesDock.long_form = {
  full: "Fortunes Dock is Grainger's 412-home BTR cluster at Royal Wharf — three buildings (Argo, Nautilus, Seraphina), developed and operated in-house. Seraphina (Phase 2, 132 homes) completed 2025 and reached 50% let in under a month, confirming strong lease-up demand. The cluster sits inside Ballymore's Royal Wharf masterplan, so residents effectively inherit the masterplan's on-site high street, Sainsbury's Local, Thames Clipper pier, and the Clubhouse amenity block on top of Grainger's in-building gym, co-working, dining room, and rooftop terrace. Elizabeth Line at Custom House (6 min walk) puts Liverpool Street at 8 minutes, Canary Wharf at 4. 1-bed from ~£2,050 pcm; 2-bed from ~£2,640. Grainger's verbatim guarantor-acceptance is the grad-visa unlock.",
  living_experience: "HomeViews rates the cluster 4.79/5 — the highest of the three London Grainger buildings. Residents consistently praise the modern design, quality finishes, and proactive management. Long-term retention signal is strong (multiple reviewers mention extending into 2026). The masterplan overlay means daily-life quality substantially exceeds what the standalone building would deliver.",
  notable_features: "Newest Grainger London stock (Seraphina 2025); layered on top of Royal Wharf masterplan amenities (Clubhouse pool/spa/gym + high street + Thames Clipper pier); Elizabeth Line at 6 minutes; 50%-let-in-a-month Phase 2 lease-up as demand signal.",
};
fortunesDock.resident_signal = {
  homeviews_score: 4.79,
  homeviews_url: "https://www.homeviews.com/development/fortunes-dock-e16",
  summary: "4.79/5 on HomeViews — top of the Grainger London portfolio. Residents praise modern design, quality finishes, proactive management. Multiple reviewers mention renewing into 2026. Phase 2 (Seraphina) is the newest, so the review pool skews toward earlier phases.",
  common_complaints: ["Pricier than some competitors in the area", "Distance from Zone 1 (offset by Elizabeth Line)"],
  common_praise: ["Modern, stylish, well-designed units", "Proactive and helpful management", "High-quality finishes", "Strong amenity package on top of masterplan overlay"],
};

const argentaSilvertown = buildProject({
  id: "argenta-silvertown", area_id: "royal-wharf-and-docks", name: "Argenta at Silvertown", developer: "Guinness Homes / Lendlease", operator: "Various", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "achievable",
  preview: "Brand new. First residents late 2025. Shared Ownership and private rent. Dock views toward North Greenwich.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Brand new 2025 delivery to current Guinness/Lendlease specification — modern services and refined layouts.",
    t4_1_amenity_package: "Decent shared amenities appropriate for the mixed Shared Ownership/private rent positioning.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
argentaSilvertown.external_links = [
  { url: "https://www.guinnesshomes.co.uk/developments/silvertown/shared-ownership-in-newham/", label: "Guinness Homes — Argenta Silvertown", type: "developer", accessed_date: "2026-04-12" },
];

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
    times_to_anchors: { city_of_london: 14, canary_wharf: 4, soho_fitzrovia: 18, kings_cross_shoreditch: 22 },
    multi_cluster_score: 4,
    redundancy_score: 2,
    notes: "Elizabeth Line at Custom House is transformative — 4 min to Canary Wharf, 14 min to City. DLR provides a genuine second mode at Custom House and across Pontoon Dock / West Silvertown. Weekend service on DLR is reliable; Elizabeth Line has full weekend operation. Custom House is through-station (not terminus), so platform dwell is short.",
    sources: [
      { url: "https://tfl.gov.uk/tube-dlr-overground/status/", label: "TfL Custom House station", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 22 },
      { cohort: "30-39", pct: 31 },
      { cohort: "40-49", pct: 16 },
      { cohort: "50+", pct: 31 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 17 },
      { group: "White — other", pct: 16 },
      { group: "Asian or Asian British", pct: 35 },
      { group: "Black or Black British", pct: 19 },
      { group: "Mixed", pct: 6 },
      { group: "Other ethnic group", pct: 7 },
    ],
    household_mix: [
      { type: "Single person", pct: 28 },
      { type: "Couple no children", pct: 22 },
      { type: "Couple with children", pct: 28 },
      { type: "Lone parent", pct: 10 },
      { type: "Shared household", pct: 8 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 5,
    professional_renter_pct: 48,
    notes: "Royal Wharf itself skews meaningfully younger and more professional than the surrounding Silvertown / Custom House wards. The masterplan footprint is family-leaning 30-39; the wider Royal Docks ward context drags the composite toward a more mixed demographic. Newham is one of London's most diverse boroughs.",
    sources: [
      { url: "https://www.ons.gov.uk/visualisations/censusareachanges/E05013968", label: "ONS Census 2021 — Custom House ward", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "Royal Wharf's internal masterplan is reliably quiet and well-lit after 22:00. Pedestrian density drops sharply after the clubhouse closes (~22:00) but the routes from Custom House Elizabeth Line station back into the masterplan are well-maintained with visible residential presence. The biggest qualifier is the walk across Connaught Bridge / Silvertown Way if arriving by DLR or walking west — industrial-edge streetscape, low foot traffic, reads bleaker at night than the core. Women walking alone from Custom House into Royal Wharf proper is broadly fine; walking through Silvertown industrial strips past 23:00 is the specific route to avoid.",
    concerns: [
      "Silvertown Way / Connaught Bridge route after 22:00 — industrial edges, low lighting, low foot traffic",
      "ExCeL event turn-out peaks can crowd Custom House station aggressively on event days",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police-service/custom-house/", label: "Met Police — Custom House", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: true, has_canal: false, has_dock: true,
    parks: [
      { name: "Lyle Park", size_acres: 3.5, walk_minutes: 5, notes: "Small riverside park with Thames frontage — the immediate neighbourhood green" },
      { name: "Thames Barrier Park", size_acres: 22, walk_minutes: 12, notes: "Designed park beside the Thames Barrier — Green Flag awarded, sunken garden, Thames views" },
      { name: "Royal Victoria Dock waterfront", walk_minutes: 10, notes: "Kilometre-long dockside promenade with the cable car as anchor" },
    ],
    overall_assessment: "The strongest waterside identity of any dataset area. Thames, three dock basins, and a Thames Clipper pier on-site combine for a water-first character. Actual parkland is modest — Lyle Park is small and Barrier Park is a 12-minute walk — but the sheer amount of walkable waterfront compensates. The wider Royal Docks area has the cable car (IFS Cloud Cable Car), running / cycling routes around the docks, and riverside promenade continuity.",
    sources: [
      { url: "https://www.newham.gov.uk/parks-open-spaces/thames-barrier-park", label: "LB Newham — Thames Barrier Park", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Sainsbury's Local (Royal Wharf high street)", type: "convenience", walk_minutes: 3, notes: "On-site convenience grocery — covers daily basics" },
      { name: "Tesco Express (Pontoon Dock)", type: "convenience", walk_minutes: 8, notes: "Small local Tesco near the DLR" },
      { name: "ASDA Custom House Lane", type: "supermarket", walk_minutes: 14, notes: "Proper weekly shop option" },
    ],
    gyms: [
      { name: "Royal Wharf Clubhouse", type: "resident-premium", walk_minutes: 2, notes: "Pool, spa, sauna, jacuzzi, gym — for residents of Ballymore Royal Wharf phases. A genuine amenity block, not a token resident gym." },
      { name: "PureGym London Royal Docks", type: "commercial-budget", walk_minutes: 10, notes: "24/7 PureGym by ExCeL — standard budget stack" },
      { name: "Novotel Fitness (ExCeL Novotel)", type: "hotel-gym", walk_minutes: 12, notes: "Day-pass available" },
    ],
    food_and_drink: [
      { name: "Sunborn London (yacht hotel)", type: "restaurant-bar", walk_minutes: 10, notes: "Dockside yacht-hotel restaurant — novelty venue" },
      { name: "Royal Wharf high street independents", type: "cafe-cluster", walk_minutes: 2, notes: "Cafés and a wine bar along the on-site high street — decent but maturing" },
      { name: "The Crystal (restaurant/event space)", type: "restaurant", walk_minutes: 10, notes: "Dockside restaurant near the cable car" },
    ],
    health: [
      { name: "Sophia House Surgery", type: "GP", walk_minutes: 6, notes: "Registered GP accepting new patients in-area" },
      { name: "Boots (Custom House)", type: "pharmacy", walk_minutes: 8, notes: "Standard Boots near the station" },
    ],
    cultural: [
      { name: "ExCeL London", type: "exhibition-centre", walk_minutes: 10, notes: "Major events venue — conferences, trade shows, sometimes concerts" },
      { name: "IFS Cloud Cable Car (Royal Docks terminal)", type: "landmark", walk_minutes: 10, notes: "Tourist / commuter cable car across the Thames to Greenwich Peninsula" },
      { name: "Crystal (building)", type: "sustainability-venue", walk_minutes: 10, notes: "Former sustainability museum, now event space" },
    ],
    notes: "Amenity density within the Royal Wharf footprint is adequate rather than rich — the on-site high street has the essentials (grocery, café, wine bar, hair salon) but not the depth of a mature town centre. The Clubhouse is the defining amenity. ExCeL and the cable car are the walkable weekend destinations. Cultural depth is thin — this is a residential-first area with industrial edges, not a cultural quarter.",
    sources: [
      { url: "https://www.royalwharf.com/", label: "Royal Wharf high street directory", type: "developer", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "The Royal Docks as a whole is a Mayor's Opportunity Area with Good Growth Fund co-investment — GLA + Newham committed scale investment across Silvertown Quays (Lendlease + Starwood, 7,172 homes planned), Royal Albert Wharf (Notting Hill Genesis), Thameside West (GLA joint venture), Thames Road (Ballymore, 1,685 homes + 359 co-living approved), and Knights Road (Ballymore, 1,667 homes submitted). Total pipeline across the Royal Docks opportunity area is >30,000 homes over 2 decades. Silvertown Tunnel opened April 2025 — major infrastructure milestone providing the first new Thames crossing east of Tower Bridge in decades.",
    recent_milestones: [
      "2025 — Silvertown Tunnel opened (April)",
      "2025 — Argenta at Silvertown first residents (Guinness/Lendlease)",
      "2025 — Silvertown Quays Phase 1 affordable block topped out",
      "2024 — Royal Wharf Clubhouse fully operational",
      "2024 — Thames Road planning approved (Ballymore, 1,685 homes + 359 co-living)",
    ],
    upcoming_milestones: [
      "2026 — Silvertown Quays continued residential delivery (Lendlease)",
      "2026 — Royal Albert Wharf continuing phases",
      "2026-2027 — Thames Road construction commences (Ballymore)",
      "2027 — Knights Road planning determination (Ballymore)",
      "2027-2028 — Thameside West delivery trajectory",
    ],
    trajectory_through_2027: "By August 2027, Royal Wharf core will be in settled steady-state; Silvertown Quays will have its first private-sale towers partially delivered; Thames Road will be in construction; the Silvertown Tunnel will have been operational for >2 years, shifting the area's connectivity and noise profile. The wider Royal Docks will visibly be the largest active residential construction site in London.",
    sources: [
      { url: "https://www.royaldocks.london/", label: "Royal Docks Team (GLA)", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.silvertownlondon.com/", label: "Silvertown Quays", type: "developer", accessed_date: "2026-04-17" },
    ],
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

  // ── RESEARCH: Royal Wharf & Royal Docks projects ────────────────────
  // Royal Wharf (Ballymore):
  //   Operator: Ballymore / Folio London (manages 265 rental apartments)
  //   Referencing: unknown (not publicly documented)
  //   Agreement type: ast
  //   International friendly: case-by-case (Ballymore attracts international buyers/renters)
  //   Visa friendly: unknown
  //   Prices: 3-bed ~£3,600 pcm (Pinnacle House); 1-bed estimated ~£2,000–£2,400 pcm
  //   Cost tier: mid-range to premium
  //   Grad visa realism: unknown
  //
  // Grainger (Fortunes Dock):
  //   Referencing: unknown
  //   Agreement type: ast (institutional BTR)
  //   Prices: 2-bed from ~£2,640 pcm
  //   Cost tier: premium
  //   Grad visa realism: unknown
  //
  // Argenta (Guinness/Lendlease): shared ownership + private rent
  // Silvertown (Lendlease): multi-decade phased
  // ───────────────────────────────────────────────────────────────────────

  projects: [
    royalWharfCore,
    buildProject({
      id: "royal-wharf-gardens", area_id: "royal-wharf-and-docks", name: "Royal Wharf Gardens", developer: "Ballymore", operator: "Ballymore", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Greener, more family-shaped side of the masterplan.",
      amenity_tier: "strong", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Ballymore delivery consistent with the Royal Wharf standard — modern services, park-facing layouts.",
        t4_1_amenity_package: "Strong shared amenity access via the Clubhouse plus additional garden-facing resident spaces.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    buildProject({
      id: "riverscape", area_id: "royal-wharf-and-docks", name: "Riverscape", developer: "Ballymore + Oxley", operator: "Ballymore", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Adjacent riverside scheme in the wider Royal Docks orbit. More premium than Royal Wharf proper.",
      amenity_tier: "premium", overall_grade: "A",
      evaluation_reasoning: {
        t2_6_building_quality: "Ballymore delivery to a higher specification than Royal Wharf core — premium finish and direct riverside layouts.",
        t4_1_amenity_package: "Premium amenity package with its own resident spaces layered on top of Clubhouse access.",
        t4_4_signature_arch: "Not signature-authored but materially more distinctive than the core masterplan.",
      },
    }),
    argentaSilvertown,
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
    fortunesDock,
  ],

  external_links: [
    { url: "https://www.royalwharf.com/", label: "Royal Wharf official", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default royalWharfAndDocks;
