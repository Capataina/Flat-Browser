import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const hackneyWick: Area = {
  id: "hackney-wick",
  name: "Hackney Wick",
  aliases: ["Fish Island", "Queen Elizabeth Olympic Park edge"],
  borough: "Hackney",
  postcodes: ["E9", "E15"],

  headline:
    "Creative quarter on the Olympic Park fringe with brewery culture and studio scene — but single Overground line and 24-minute average to anchors are real connectivity constraints.",
  preview:
    "Hackney Wick's creative reputation (studios, breweries, Here East, Fish Island) outpaces its resident demographics (39% aged 20-39 vs Dalston's 54%). Single Overground line gives only 1/5 redundancy. Peabody BTR (Neptune Wharf) is the main managed-rental presence. Olympic Park edge stewardship mitigates the Hackney borough safety concern.",

  long_form: {
    full: "Hackney Wick sits on the Olympic Park fringe and carries London's densest concentration of creative studio space (Fish Island, CEZ designation). The brewery scene, Here East tech campus, and canal-side grain give a distinctive post-industrial character. However, the area's creative vibe outpaces its resident demographics — 39% aged 20-39 is below Dalston or Whitechapel. The single Overground line (Mildmay) is the headline connectivity constraint: 24-minute average to anchors, 1/5 redundancy. Stratford is 2-3 stops away but requires a change. Peabody runs BTR at Neptune Wharf; Telford Homes delivered BTS (The Switch, H Wick). Safety is marginal — Olympic Park edge stewardship and the masterplan fringe mitigate but Hackney borough burglary concentration applies, especially ground-floor.",
    history: "Post-industrial canal-side area. Fish Island warehouse conversions. 2012 Olympics catalysed regeneration. CEZ (Creative Enterprise Zone) designation.",
    vibe: "Creative, post-industrial. Breweries, studios, canal walks. More visitor-driven than resident-driven character.",
    weekday: "A Tuesday at 7pm: brewery taprooms opening; Here East office workers leaving; canal towpath quiet.",
    weekend: "A Saturday: brewery crawls, studio open days, Olympic Park visitors passing through.",
    notable: "Fish Island; Here East; Crate Brewery; brewery cluster; CEZ designation; Queen Elizabeth Olympic Park adjacent.",
    croydon_comparison: "Hackney Wick offers a creative-quarter experience unavailable in Croydon but trades connectivity. Single Overground line is a weaker transport proposition than Croydon's tram + mainline rail combination.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Mildmay line", type: "overground" },
    ],
    primary_stations: [
      { name: "Hackney Wick", lines: ["Mildmay line"], walk_minutes_from_centre: 3 },
    ],
    times_to_anchors: { city_of_london: 24, canary_wharf: 18, soho_fitzrovia: 32, kings_cross_shoreditch: 25 },
    multi_cluster_score: 2,
    redundancy_score: 1,
    notes: "Mildmay line only; Stratford is the 3-stop interchange hub but every journey eats the change. TfL 2024 Overground renaming put Hackney Wick on Mildmay. Weekend engineering works on Mildmay are a recurring pattern — check TfL status before committing.",
    sources: [
      { url: "https://tfl.gov.uk/tube-dlr-overground/status/", label: "TfL line status — Mildmay", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL JourneyPlanner — Hackney Wick", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 25 },
      { cohort: "30-39", pct: 24 },
      { cohort: "40-49", pct: 15 },
      { cohort: "50+", pct: 20 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 33 },
      { group: "White — other", pct: 22 },
      { group: "Asian or Asian British", pct: 9 },
      { group: "Black or Black British", pct: 19 },
      { group: "Mixed", pct: 11 },
      { group: "Other ethnic group", pct: 6 },
    ],
    household_mix: [
      { type: "Single person", pct: 31 },
      { type: "Couple no children", pct: 23 },
      { type: "Couple with children", pct: 17 },
      { type: "Lone parent", pct: 10 },
      { type: "Shared household", pct: 14 },
      { type: "Other", pct: 5 },
    ],
    student_pct: 11,
    professional_renter_pct: 42,
    notes: "Strong creative-industry presence in the ward — census occupation data shows elevated arts/design/media employment vs Hackney mean. The 18-29 cohort dominates nominally but 30-39 is very close — the area reads as a young-adult rather than graduate-student zone. Roughly 45% of households rent privately (ONS rental tenure tabs).",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "moderate",
    crime_vs_borough: "average",
    crime_vs_croydon: "safer",
    after_dark_assessment: "The Olympic Park-edge grain is stewarded and visibly patrolled (London Legacy Development Corporation maintain public realm). Canal towpath is poorly lit after 22:00 — actively avoid as a solo walk-home route. Hackney Wick station forecourt is calm but footfall drops off fast after the last Mildmay train (~00:30). Ground-floor burglary is the distinctive local pattern, not street violence.",
    concerns: [
      "Regent's Canal towpath east of Hackney Wick — unlit, low footfall after dark",
      "Ground-floor flat burglary concentration across Fish Island",
      "White Post Lane / Wallis Road cut-throughs quiet late night",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police/hackney-wick/", label: "Met Police — Hackney Wick ward", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: true,
    has_dock: false,
    parks: [
      { name: "Queen Elizabeth Olympic Park", size_acres: 560, walk_minutes: 8, notes: "One of London's largest contemporary parks; wetlands bowl, Here East lawns, ArcelorMittal Orbit." },
      { name: "Victoria Park (north-west edge)", size_acres: 218, walk_minutes: 15, notes: "Regency park; lakes, cafes, weekend market." },
      { name: "Hackney Marshes", size_acres: 336, walk_minutes: 12, notes: "Sunday football; Lea-side open space." },
    ],
    overall_assessment: "Exceptional green + water footprint — Olympic Park is on the doorstep, Hertford Union and Regent's Canal both bound the area, and Hackney Marshes are a 12-minute walk. For a Zone 2 address this is one of the strongest green/water stacks in London.",
    sources: [
      { url: "https://www.queenelizabetholympicpark.co.uk/", label: "Queen Elizabeth Olympic Park", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Tesco Express (Wallis Road)", type: "supermarket", walk_minutes: 4, notes: "Daily essentials, long hours." },
      { name: "Sainsbury's Local (Here East)", type: "supermarket", walk_minutes: 7, notes: "Campus-side convenience store." },
      { name: "Randy's Wing Bar grocer / Crate Yard deli", type: "independent", walk_minutes: 4, notes: "Weekend-only fresh offer." },
    ],
    gyms: [
      { name: "PureGym Hackney Wick (Hepscott Road)", type: "budget chain", walk_minutes: 6, notes: "24-hour PureGym; the nearest unlimited-hours option." },
      { name: "Here East Sport", type: "campus gym", walk_minutes: 10, notes: "Loughborough London / UCL-affiliated sports hall; day-pass sometimes available." },
      { name: "Lee Valley VeloPark", type: "cycling/fitness", walk_minutes: 15, notes: "Olympic velodrome with public cycling/bouldering/road-circuit memberships." },
      { name: "Copper Box Arena", type: "leisure centre", walk_minutes: 14, notes: "Better-run public leisure centre with gym, pool, classes." },
    ],
    food_and_drink: [
      { name: "Crate Brewery", type: "brewery/pizza", walk_minutes: 3, notes: "Flagship canal-side taproom." },
      { name: "Howling Hops", type: "tank bar", walk_minutes: 4, notes: "Direct-from-tank beer, informal food." },
      { name: "Grow Hackney", type: "venue/restaurant", walk_minutes: 3, notes: "Live music, canal terrace." },
      { name: "Number 90 Bar & Kitchen", type: "all-day venue", walk_minutes: 3, notes: "Canal-front, brunch through evening." },
      { name: "Silo London", type: "restaurant", walk_minutes: 4, notes: "Zero-waste fine dining (Michelin Green Star)." },
    ],
    health: [
      { name: "Wick Health Centre (Gainsborough Road)", type: "GP surgery", walk_minutes: 8, notes: "NHS GP — accepts new registrations subject to catchment." },
      { name: "Boots Pharmacy (Stratford / Westfield)", type: "pharmacy", walk_minutes: 14, notes: "Nearest full-range pharmacy is Stratford-side." },
    ],
    cultural: [
      { name: "Stour Space", type: "gallery/cafe", walk_minutes: 3, notes: "Artist-run gallery, workshop space, canal-side cafe." },
      { name: "The Trampery Fish Island Village", type: "co-working/creative", walk_minutes: 5, notes: "63-studio creative workspace inside Fish Island Village." },
      { name: "Here East", type: "tech/innovation campus", walk_minutes: 10, notes: "UCL, Loughborough London, BBC, Plexal." },
      { name: "V&A East Storehouse", type: "museum", walk_minutes: 12, notes: "Opened 2025 — publicly accessible V&A collection store on Olympic Park." },
      { name: "ArcelorMittal Orbit / LLDC public art trail", type: "public art", walk_minutes: 10, notes: "Olympic Park art installations." },
    ],
    notes: "Amenity mix is brewery-and-studio weighted rather than supermarket-and-chain-cafe weighted. For a resident without a weekend-visitor mindset, day-to-day grocery and pharmacy depth is thinner than comparable Zone 2 wards — Westfield Stratford is the pressure-release (14-min walk or 1 Overground stop).",
  },
  regeneration: {
    status: "active",
    investment_pipeline: "~£1.5bn+ of committed mixed-use delivery centred on the LLDC (London Legacy Development Corporation) masterplan zone and the Hackney Wick Creative Enterprise Zone. Named schemes: Fish Island Village (Peabody/Hill, 588 homes, complete), Neptune Wharf (Peabody, in delivery), Wickside (Galliard, in delivery), Bream Street Lock No.19 (L&Q, complete), The Foundry (Weston, complete). Here East campus continues to expand its tech/innovation footprint. V&A East Storehouse + V&A East Museum (opening 2026) add a major cultural anchor.",
    recent_milestones: [
      "2024 — Fish Island Village Phase 2 completion (Haworth Tompkins masterplan)",
      "2024 — Hackney Wick station upgrade commissioned (new ticket hall, step-free access)",
      "2025 — V&A East Storehouse opened in Olympic Park",
    ],
    upcoming_milestones: [
      "2026 — V&A East Museum public opening (Olympic Park north)",
      "2026-2027 — Wickside Phase 2 delivery",
      "2027 — Bream Street/Sweetwater residential completions within LLDC zone",
    ],
    trajectory_through_2027: "Ascending. By August 2027 the Olympic Park cultural cluster will have V&A East Museum live, Sadler's Wells East already operating, and the UCL East campus fully in-teaching. The creative-quarter identity should be consolidated rather than contested. For Caner's visa transition window this is one of the more tangible 'improving-on-arrival' areas in London — the committed pipeline is concrete and institutionally backed, not speculative.",
    sources: [
      { url: "https://www.queenelizabetholympicpark.co.uk/the-park/attractions/east-bank", label: "East Bank cultural cluster", type: "other", accessed_date: "2026-04-17" },
      { url: "https://hackney.gov.uk/hackney-wick", label: "Hackney Council — Hackney Wick", type: "council", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "partial", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Marginal pass. Ward calmer than Dalston but Hackney borough burglary concentration applies. Ground-floor risk specifically.",
        "1.2": "Modern rental stock — Neptune Wharf (Peabody BTR), The Switch, H Wick (Telford Homes BTS), Fish Island Village.",
        "1.3": "Single Overground line. Fails line minimum despite adequate time average. Stratford interchange available but requires a change.",
        "1.4": "Peabody BTR + Telford Homes BTS — operators present.",
        "1.5": "Olympic Park edge stewardship keeps public realm in good order. Canal-side maintained.",
        "1.6": "Not in decline — active creative-quarter regeneration.",
      },
      "moderate",
      "T1 passes but T1.1 marginal and T1.3 partial. Single-line dependency is the structural weakness.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "partial", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Walkable essentials are thinner than a traditional high street. Brewery-and-studio economy rather than retail density.",
        "2.2": "Grocery access limited within immediate area.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Canal + Olympic Park adjacent. Strong green and water access.",
        "2.5": "Quiet residential area. No nightlife generator on-site.",
        "2.7": "Census 2021: 39% aged 20-39. Solid but below creative-reputation implied level.",
      },
      "moderate",
      "T2 moderate — strong green/water but thin everyday retail layer.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "partial", "3.5": "pass", "3.6": "partial" },
      {
        "3.1": "Active regeneration — Neptune Wharf, Fish Island Village, Here East.",
        "3.2": "Brewery cluster, Here East, studio scene — strong creative anchors. CEZ designation.",
        "3.3": "Highly distinctive post-industrial creative-quarter identity.",
        "3.4": "15-minute completeness is partial — transport, creative, green are strong but everyday retail is thin.",
        "3.5": "Strong creative-industry architecture. CEZ designation. Fish Island warehouse conversions.",
        "3.6": "Uneven day/night rhythm — brewery taprooms busy weekday evenings and weekends, quiet otherwise.",
      },
      "good",
      "T3 strong — distinctive creative identity, architectural interest, cultural anchors.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "fail", "5.3": "pass", "5.4": "pass" },
      {
        "5.1": "24-min average. Only 2/4 anchors under 25 minutes. Passes time but fails line minimum.",
        "5.2": "Single Overground line — 1/5 redundancy. Structural weakness.",
        "5.3": "Ascending — creative-quarter identity consolidating, ongoing regeneration.",
        "5.4": "Strong third-space culture — breweries, studios, canal walks, Here East co-working.",
      },
      "moderate",
      "T5 moderate — strong third spaces and trajectory but single-line dependency is a serious constraint.",
    ),
    overall_grade: "C",
    grade_reasoning: "C grade — distinctive creative identity (strong T3) but single-line dependency (T5.2 fail, T1.3 partial) and thin everyday amenity layer are real constraints. The vibe is better than the infrastructure.",
  },

  projects: [
    // RESEARCH: Neptune Wharf — Peabody BTR, part of Fish Island Village. 501 homes mixed tenure.
    // Peabody referencing: UNVERIFIED (likely in-house). International: case-by-case.
    // AGREEMENT: ast
    // REFERENCING: unknown
    // REALISM: unknown — Peabody referencing opacity
    // COST_TIER: UNVERIFIED (Hackney Wick 1-beds likely £1,600-2,000)
    buildProject({
      id: "neptune-wharf", area_id: "hackney-wick", name: "Neptune Wharf", developer: "Peabody", operator: "Peabody", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Peabody BTR on the Hackney Wick regeneration. Canal-side. Part of the Fish Island / Hackney Wick creative-quarter masterplan.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Peabody modern BTR delivery — functional build quality at housing-association-plus standard.",
        t4_1_amenity_package: "Decent amenity package for a Peabody market-rent product.",
        t4_4_signature_arch: "Not signature-authored but part of the creative-quarter architectural grain.",
      },
    }),
    // RESEARCH: The Switch — Telford Homes BTS. Individual landlord rental.
    // REALISM: unknown — individual landlord
    // COST_TIER: UNVERIFIED
    buildProject({
      id: "the-switch-hackney-wick", area_id: "hackney-wick", name: "The Switch", developer: "Telford Homes", operator: "Telford Homes", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Telford Homes BTS delivery in Hackney Wick.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Telford Homes modern BTS — functional mid-market build quality.",
        t4_1_amenity_package: "Decent standard amenity package.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    // RESEARCH: Fish Island Village — 588 homes, Peabody/Hill, Haworth Tompkins. Mixed tenure.
    // Individual landlord rental for private units. Peabody manages affordable.
    // REALISM: unknown — mixed tenure, individual landlord for private
    // COST_TIER: mid-range (estimated)
    buildProject({
      id: "fish-island-village",
      area_id: "hackney-wick",
      name: "Fish Island Village",
      developer: "Peabody / Hill Residential",
      operator: "Peabody / The Trampery",
      building_type: "Mixed",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unknown",
      preview: "588 homes across 17 linked blocks (3-10 storeys). Haworth Tompkins masterplan. Concierge, fitness centre, rooftop allotments, The Trampery workspace with 63 studios and co-working.",
      amenity_tier: "strong",
      overall_grade: "B",
      architects: ["Haworth Tompkins"],
      evaluation_reasoning: {
        t2_6_building_quality: "Haworth Tompkins-designed masterplan with Peabody and Hill delivery — strong architectural quality recognised by Housing Design Awards and RIBAJ.",
        t4_1_amenity_package: "Strong — concierge, fitness centre, rooftop allotments, The Trampery workspace (63 studios, 30-desk co-working, manufacturing suite, restaurant, event space).",
        t4_4_signature_arch: "Haworth Tompkins is Stirling Prize-winning — genuine signature architecture at masterplan level.",
      },
    }),
    // RESEARCH: Wickside — Galliard Homes BTS, individual landlord rental.
    // REALISM: unknown — individual landlord
    // COST_TIER: UNVERIFIED
    buildProject({
      id: "wickside",
      area_id: "hackney-wick",
      name: "Wickside",
      developer: "Galliard Homes",
      operator: "Various agents",
      building_type: "Mixed",
      build_phase: "in_delivery",
      tenure: ["rent", "buy"],
      realism: "unknown",
      preview: "176 homes across 18 apartment blocks + 5 retrofitted masonry buildings. Canal-side with brewery, rooftop bar, art galleries, boat club. One of the most character-rich developments in Hackney Wick.",
      amenity_tier: "strong",
      overall_grade: "B",
      architects: ["Ash Sakula Architects", "BUJ Architects"],
      evaluation_reasoning: {
        t2_6_building_quality: "Galliard Homes delivery with distinctive creative-industry mixed-use character. Partially complete, partially in delivery.",
        t4_1_amenity_package: "Strong and distinctive — residents' lounge, rooftop gardens, canal-side pedestrian bridge, brewery/rooftop bar, training restaurant, two art galleries, boat club.",
        t4_4_signature_arch: "Ash Sakula Architects — respected creative-sector practice. Character-rich design within the Hackney Wick creative grain.",
      },
    }),
    // RESEARCH: Lock No. 19 — L&Q BTS, individual landlord rental.
    // REALISM: unknown — individual landlord
    // COST_TIER: UNVERIFIED
    buildProject({
      id: "lock-no-19",
      area_id: "hackney-wick",
      name: "Lock No. 19",
      developer: "L&Q",
      operator: "Various agents",
      building_type: "Mixed",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unknown",
      preview: "170 homes on Bream Street, Fish Island. Riverside setting with views of Queen Elizabeth Olympic Park. 30% affordable. Rental via secondary market.",
      amenity_tier: "basic",
      overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "L&Q mid-rise riverside development, completed 2019-2020. Functional build quality.",
        t4_1_amenity_package: "Basic — parking, balconies, riverside walk. No concierge or premium amenity stack.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    // RESEARCH: The Foundry — Weston Homes BTS, individual landlord rental.
    // REALISM: unknown — individual landlord
    // COST_TIER: UNVERIFIED
    buildProject({
      id: "the-foundry-hackney-wick",
      area_id: "hackney-wick",
      name: "The Foundry",
      developer: "Weston Homes",
      operator: "Various agents",
      building_type: "Build-to-Sell",
      build_phase: "complete",
      tenure: ["rent", "buy"],
      realism: "unknown",
      preview: "121 apartments on Monier Road, Fish Island, near Hackney Wick station. Rental through individual landlords.",
      amenity_tier: "basic",
      overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Weston Homes mid-market delivery, completed 2020-2021. Functional build quality.",
        t4_1_amenity_package: "Basic — limited publicly available amenity information.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

// ── Project external links & price transparency ──────────────────────────
const neptuneWharf = hackneyWick.projects.find(p => p.id === "neptune-wharf")!;
neptuneWharf.external_links = [];
neptuneWharf.rental.price_transparency = "enquire";

const theSwitch = hackneyWick.projects.find(p => p.id === "the-switch-hackney-wick")!;
theSwitch.external_links = [];
theSwitch.rental.price_transparency = "enquire";

const fishIsland = hackneyWick.projects.find(p => p.id === "fish-island-village")!;
fishIsland.external_links = [
  { url: "https://www.hill.co.uk/all-developments/london/fish-island-village", label: "Hill — Fish Island Village", type: "developer", accessed_date: "2026-04-12" },
];
fishIsland.rental.price_transparency = "enquire";

const wickside = hackneyWick.projects.find(p => p.id === "wickside")!;
wickside.external_links = [
  { url: "https://www.galliardhomes.com/wickside", label: "Galliard Homes — Wickside", type: "developer", accessed_date: "2026-04-12" },
  { url: "https://www.wickside.com/", label: "Wickside — official site", type: "developer", accessed_date: "2026-04-12" },
];
wickside.rental.price_transparency = "enquire";

const lockNo19 = hackneyWick.projects.find(p => p.id === "lock-no-19")!;
lockNo19.external_links = [];
lockNo19.rental.price_transparency = "enquire";

const foundryHW = hackneyWick.projects.find(p => p.id === "the-foundry-hackney-wick")!;
foundryHW.external_links = [];
foundryHW.rental.price_transparency = "enquire";

export default hackneyWick;
