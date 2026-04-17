import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const stGeorgeWharf = buildProject({
  id: "st-george-wharf-vauxhall", area_id: "vauxhall", name: "St George Wharf", developer: "Berkeley Group (St George)", operator: "Individual landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "1,100+ apartments on 7-acre riverside site directly opposite Vauxhall station. The Tower (50 storeys) was London's tallest residential on completion. Pool, gym, health club, Sainsbury's on site, 24hr concierge. Pioneered the regeneration of Vauxhall. HomeViews ~3.7/5.",
  amenity_tier: "premium", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley St George delivery — estate completed 2004-2010, The Tower 2014. Older blocks showing age but The Tower remains premium.",
    t4_1_amenity_package: "Premium — pool, gym, health club, Sainsbury's on site, restaurant/bar, 24hr concierge, valet parking, communal gardens, business boardroom and lounge.",
    t4_4_signature_arch: "The Tower (50 storeys) was the tallest residential building in the UK on completion — a recognisable skyline landmark. Not Pritzker-authored but architecturally significant.",
  },
});
stGeorgeWharf.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/vauxhall/the-buckingham-suite", label: "Berkeley — St George Wharf / The Tower", type: "developer", accessed_date: "2026-04-12" },
];
stGeorgeWharf.rental.affordability = "over-budget";

const keybridge = buildProject({
  id: "keybridge", area_id: "vauxhall", name: "Keybridge", developer: "Mount Anvil + A2Dominion", operator: "Individual landlords", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "595-unit scheme with Keybridge Tower up to 37 storeys. 6-minute walk from Vauxhall station. 15m pool, gym, spa with sauna and steam, 24hr concierge, residents' business lounge. HomeViews ~3.9/5. Studio from ~£2,385 pcm.",
  amenity_tier: "premium", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Mount Anvil delivery completed 2020. Six individual buildings to modern specification.",
    t4_1_amenity_package: "Premium — 15m swimming pool, gym, spa with sauna and steam room, 24hr concierge, residents' business lounge.",
    t4_4_signature_arch: "Not Pritzker-authored but Keybridge Tower (37 storeys) is a significant Vauxhall skyline presence.",
  },
});
keybridge.external_links = [
  { url: "https://keybridge.uk/", label: "Keybridge official site", type: "developer", accessed_date: "2026-04-12" },
  { url: "https://mountanvil.com/find-your-home/keybridge/", label: "Mount Anvil — Keybridge", type: "developer", accessed_date: "2026-04-12" },
];
keybridge.rental.affordability = "at-budget";

const damacTower = buildProject({
  id: "damac-tower", area_id: "vauxhall", name: "DAMAC Tower (Aykon London One)", developer: "DAMAC Properties", operator: "Individual landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "50-storey ultra-luxury tower, 2-minute walk from Vauxhall station. ~360 units. Versace-designed interiors throughout. Pool, jacuzzi, gym, 8,000 sq ft roof gardens, 24hr concierge. Studio from ~£2,817 pcm.",
  amenity_tier: "premium", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Completed 2023. Ultra-luxury specification with Versace-branded interiors throughout.",
    t4_1_amenity_package: "Premium — indoor pool, jacuzzi, gym, 8,000 sq ft roof gardens, children's play areas, 24hr concierge.",
    t4_4_signature_arch: "Versace-branded interiors are the USP. 50-storey tower with distinctive presence. Not architect-signature but brand-signature.",
  },
});
damacTower.external_links = [
  { url: "https://damactower.co.uk/en/", label: "DAMAC Tower London official site", type: "developer", accessed_date: "2026-04-12" },
];
damacTower.rental.affordability = "over-budget";

const theDumont = buildProject({
  id: "the-dumont", area_id: "vauxhall", name: "The Dumont", developer: "St James (Berkeley Group)", operator: "Individual landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "162 apartments across 3 buildings at 22-29 Albert Embankment. 30 storeys. Thames frontage. Residents' lounge, gym, 24hr concierge, spa, screening room, roof terrace, shared pool with The Corniche. Studio from ~£2,200 pcm.",
  amenity_tier: "premium", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "St James (Berkeley) delivery completed 2019. Thames-fronting premium specification.",
    t4_1_amenity_package: "Premium — residents' lounge, gym, 24hr concierge, spa, screening room, roof terrace, swimming pool (shared with The Corniche).",
    t4_4_signature_arch: "Not Pritzker-authored. Premium Albert Embankment riverside composition.",
  },
});
theDumont.external_links = [
  { url: "https://thedumont.uk/", label: "The Dumont official site", type: "developer", accessed_date: "2026-04-12" },
];
theDumont.rental.affordability = "at-budget";

const theCorniche = buildProject({
  id: "the-corniche", area_id: "vauxhall", name: "The Corniche", developer: "St James (Berkeley Group)", operator: "Individual landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Foster + Partners twin towers (23 storeys) at 20-21 Albert Embankment. 253 units. Infinity pool, spa, screening room, 19th-floor Skyline Club Lounge with terrace, 24hr concierge. 1-bed from ~£3,033 pcm.",
  architects: ["Foster + Partners"],
  amenity_tier: "premium", is_signature: true, overall_grade: "S",
  evaluation_reasoning: {
    t2_6_building_quality: "Foster + Partners design completed 2018. Premium specification with Thames-fronting layouts.",
    t4_1_amenity_package: "Premium — 24hr concierge, gym, infinity pool, spa, screening room, 19th-floor Skyline Club Lounge with terrace.",
    t4_4_signature_arch: "Foster + Partners (Pritzker 1999) — signature-firm twin towers on Albert Embankment. Shared amenity deck with The Dumont.",
  },
});
theCorniche.external_links = [
  { url: "https://www.fosterandpartners.com/projects/the-corniche", label: "Foster + Partners — The Corniche", type: "other", accessed_date: "2026-04-12" },
];
theCorniche.rental.affordability = "over-budget";

const meranoResidences = buildProject({
  id: "merano-residences", area_id: "vauxhall", name: "Merano Residences", developer: "Berkeley Group (St James)", operator: "Individual landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Rogers Stirk Harbour + Partners ultra-boutique — only 40 units, 8 storeys, at 30-34 Albert Embankment. Roof garden, piazza, cafe, 24hr concierge. 1-bed from ~£3,000 pcm.",
  architects: ["Rogers Stirk Harbour + Partners"],
  amenity_tier: "strong", is_signature: true, overall_grade: "S",
  evaluation_reasoning: {
    t2_6_building_quality: "RSHP design completed 2015. Ultra-boutique 40-unit scheme with premium specification.",
    t4_1_amenity_package: "Strong — roof garden, piazza, cafe, 24hr concierge, secure underground parking. Small scale limits amenity breadth.",
    t4_4_signature_arch: "Rogers Stirk Harbour + Partners (Pritzker 2007) — same firm as One Hyde Park and Neo Bankside. Signature architecture on Albert Embankment.",
  },
});
meranoResidences.external_links = [
  { url: "https://rshp.com/projects/residential/merano/", label: "RSHP — Merano Residences", type: "other", accessed_date: "2026-04-12" },
];
meranoResidences.rental.affordability = "over-budget";

const staybridgeVauxhall = buildProject({
  id: "staybridge-vauxhall", area_id: "vauxhall", name: "Staybridge Suites Vauxhall", developer: "IHG", operator: "Staybridge Suites (IHG)", building_type: "BTR", living_model: "apart-hotel", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "IHG apart-hotel at Miles Street, Vauxhall. From ~£3,000–4,000/month. All-inclusive — breakfast, Wi-Fi, gym, laundry, weekly cleaning. Hotel booking — no referencing.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "IHG-grade apart-hotel specification.",
    t4_1_amenity_package: "Decent — breakfast, gym, laundry, weekly cleaning.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
staybridgeVauxhall.external_links = [
  { url: "https://www.ihg.com/staybridge/hotels/us/en/london/lonva/hoteldetail", label: "Staybridge Suites Vauxhall", type: "operator", accessed_date: "2026-04-15" },
];
staybridgeVauxhall.rental.price_transparency = "enquire";
staybridgeVauxhall.rental.affordability = "over-budget";
staybridgeVauxhall.building_quality = {
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "IHG Staybridge Suites format — studios and 1-beds with kitchenette, workspace, en-suite. Modern new-build on Miles Street.",
  kitchen_quality: "poor",
  heating_type: "communal",
  notes: "IHG apart-hotel kitchenette (hob, microwave, fridge, no full oven).",
};
staybridgeVauxhall.amenities = {
  pool: false,
  pool_notes: "",
  gym: true,
  gym_quality: "average",
  concierge: "24h",
  sky_lounge: false,
  co_working: false,
  dining_room: false,
  cinema_room: false,
  rooftop_terrace: false,
  parking: false,
  bike_storage: false,
  pet_policy: "Hotel-style — check with operator",
  other_amenities: ["Complimentary breakfast", "Laundry", "Weekly cleaning", "24h pantry"],
  overall_tier: "decent",
};

const vauxhall: Area = {
  id: "vauxhall",
  name: "Vauxhall",
  aliases: ["Vauxhall Cross"],
  borough: "Lambeth",
  postcodes: ["SW8", "SE11"],

  headline:
    "Zone 1 Victoria Line + SWR mainline — transport-dense interchange with LGBTQ+ heritage and Nine Elms adjacency. 14 min to Bank, 8 to Tottenham Court Road.",
  preview:
    "Vauxhall is a transport-dense Zone 1/2 interchange delivering Victoria Line to TCR in 8 minutes plus SWR mainline redundancy. The area has a distinct identity centred on the Royal Vauxhall Tavern (LGBTQ+ heritage pub), Vauxhall Pleasure Gardens, and the multi-bus interchange. Greystar Bloom sits on the Nine Elms/Vauxhall boundary. The Lambeth borough safety profile makes T1.1 marginal.",

  long_form: {
    full: "Vauxhall is functionally distinct from the Nine Elms newbuild to its west. The station is a genuine multi-mode hub: Victoria Line, SWR mainline, multi-bus interchange. The Royal Vauxhall Tavern (Grade II listed LGBTQ+ heritage pub) and Vauxhall Pleasure Gardens anchor the cultural identity. Greystar Bloom sits on the Nine Elms/Vauxhall boundary. Berkeley St James delivers Sky Gardens. The Nine Elms Northern Line extension branch (Vauxhall walkable in 10 min) adds a third corridor option. The limitation is the Lambeth nightlife-adjacent safety profile.",
    history: "Old Vauxhall — the cluster around the station, Royal Vauxhall Tavern, Vauxhall Pleasure Gardens, New Covent Garden Market spill. Historically gritty, transport-dense, and gay-scene-led.",
    vibe: "Gritty, historically gay-scene, transport-dense. Not a quiet residential neighbourhood — a transport hub with residential attached.",
    weekday: "A Tuesday at 7pm: transit-heavy. Commuters flowing through the interchange.",
    weekend: "A Saturday night: LGBTQ+ scene around Royal Vauxhall Tavern.",
    notable: "Royal Vauxhall Tavern (Grade II listed); Vauxhall Pleasure Gardens; multi-bus interchange; Nine Elms adjacency.",
    croydon_comparison: "Vauxhall is Zone 1 with Victoria Line and genuine transport redundancy. More expensive and less residential than Croydon but with incomparably better connectivity.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Victoria", type: "tube" },
      { name: "South Western Railway", type: "rail" },
      { name: "Northern (via walkable Nine Elms branch)", type: "tube" },
    ],
    primary_stations: [
      { name: "Vauxhall", lines: ["Victoria", "South Western Railway"], walk_minutes_from_centre: 3 },
      { name: "Nine Elms", lines: ["Northern"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 14, canary_wharf: 21, soho_fitzrovia: 8, kings_cross_shoreditch: 15 },
    multi_cluster_score: 4,
    redundancy_score: 3,
    notes: "Genuine multi-mode interchange. Victoria Line 8 min to TCR is one of the fastest central-London journeys in the dataset. SWR mainline at Vauxhall is a major commuter hub. Northern Line at Nine Elms 10 min walk adds third mode. Redundancy is real — any single line failing still leaves two viable alternatives.",
    sources: [
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://en.wikipedia.org/wiki/Vauxhall_station", label: "Wikipedia — Vauxhall station", type: "wikipedia", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 30 },
      { cohort: "30-39", pct: 32 },
      { cohort: "40-49", pct: 16 },
      { cohort: "50+", pct: 22 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 36 },
      { group: "White — other", pct: 24 },
      { group: "Asian or Asian British", pct: 13 },
      { group: "Black or Black British", pct: 15 },
      { group: "Mixed", pct: 7 },
      { group: "Other ethnic group", pct: 5 },
    ],
    household_mix: [
      { type: "Single person", pct: 37 },
      { type: "Couple no children", pct: 24 },
      { type: "Couple with children", pct: 13 },
      { type: "Lone parent", pct: 8 },
      { type: "Shared household", pct: 14 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 9,
    professional_renter_pct: 50,
    notes: "Vauxhall ward 20-39 reads around 51-52% — top-skew young professional. Significant social-housing share around Lambeth Walk / Ethelred and Vauxhall Gardens estates balances the private-market heavy St George Wharf / Keybridge / DAMAC towers. Mixed-income area by design — one of the few genuinely mixed zones on the Thames south bank.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021 — Vauxhall ward", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://data.london.gov.uk/dataset/2021-census-demography", label: "London Datastore — 2021 Census demography", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://en.wikipedia.org/wiki/Vauxhall", label: "Wikipedia — Vauxhall", type: "wikipedia", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "moderate",
    crime_vs_borough: "above",
    crime_vs_croydon: "similar",
    after_dark_assessment: "Mixed. The area around Vauxhall station and the Royal Vauxhall Tavern / Chariots cluster is LGBTQ+-nightlife-led and active until 4am on weekends — not dangerous but noisy and crowded with intoxicated patrons; some ASB incidents reported around the station forecourt and bus interchange. The newbuild residential cores (St George Wharf, Keybridge, DAMAC Tower, Riverlight-adjacent) feel notably safer and well-lit. The pre-war social-housing estates east of the station (Lambeth Walk area) have elevated crime concerns per Met Police data but are not on the typical resident walking routes. Women-walking-alone reports mixed — fine on the riverside and in the newbuild cores, flagged around the station late-night. Overall moderate-not-concerning — the nightlife activity generates footfall which is actively protective compared to Croydon's empty-late-night character.",
    concerns: [
      "Vauxhall station bus interchange and forecourt late-night — ASB, crowd density around nightlife venues",
      "Lambeth Walk / Ethelred Estate area east of station — elevated crime stats, generally off-route for newbuild residents",
      "Weekend LGBTQ+-nightlife noise around RVT / Albert Embankment south cluster — quality-of-life rather than safety issue",
    ],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police/lambeth/vauxhall/about-us/crime-map", label: "Met Police — Vauxhall crime map", type: "met-police", accessed_date: "2026-04-17" },
      { url: "https://crimerate.co.uk/london/lambeth", label: "CrimeRate — Lambeth", type: "other", accessed_date: "2026-04-17" },
      { url: "https://crimerate.co.uk/london/lambeth/vauxhall", label: "CrimeRate — Vauxhall", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: true,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Vauxhall Pleasure Gardens", size_acres: 6, walk_minutes: 5, notes: "Historic pleasure gardens (restored 2000s). Open green space with pitch, city farm (Vauxhall City Farm), playground. Main public green in the area." },
      { name: "Spring Gardens", walk_minutes: 4, notes: "Small green space at the south side of the station" },
      { name: "Archbishop's Park", walk_minutes: 12, notes: "Lambeth-side park near Lambeth Palace" },
      { name: "Thames Path (Albert Embankment)", walk_minutes: 3, notes: "Continuous riverside walk from Lambeth Bridge to Vauxhall Bridge" },
    ],
    overall_assessment: "Thames frontage at the south (Albert Embankment) is real and walkable. Vauxhall Pleasure Gardens is a meaningful 6-acre anchor with a city farm. Overall green offer is moderate — not the riverside destination BPS is, but better than Pimlico's thin park offer. Vauxhall Pleasure Gardens is the defining green feature.",
    sources: [
      { url: "https://love.lambeth.gov.uk/lambeth-to-launch-trial-of-new-healthy-neighbourhood-for-vauxhall-pleasure-gardens/", label: "Lambeth — Vauxhall Pleasure Gardens", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.vauxhallcityfarm.org/", label: "Vauxhall City Farm", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Sainsbury's (St George Wharf)", type: "full supermarket", walk_minutes: 3, notes: "On-site at St George Wharf — principal grocery anchor" },
      { name: "Tesco Express (Wandsworth Road)", type: "convenience", walk_minutes: 5, notes: "" },
      { name: "Waitrose (Nine Elms)", type: "premium grocery", walk_minutes: 12, notes: "Walkable into Nine Elms corridor" },
    ],
    gyms: [
      { name: "PureGym Vauxhall", type: "budget chain", walk_minutes: 5, notes: "Main budget chain option" },
      { name: "Queen Mother Sports Centre (Victoria — walking)", type: "leisure centre", walk_minutes: 15, notes: "Council-run facility" },
      { name: "Resident gyms at St George Wharf, Keybridge, DAMAC, Corniche, Dumont", type: "resident premium", walk_minutes: 0, notes: "Most premium buildings have on-site gyms/pools" },
      { name: "Third Space Battersea", type: "premium gym", walk_minutes: 18, notes: "Via riverside walk to BPS" },
    ],
    food_and_drink: [
      { name: "Royal Vauxhall Tavern", type: "Grade II listed LGBTQ+ pub", walk_minutes: 3, notes: "Historic gay-scene landmark, live performance venue" },
      { name: "Fentiman Arms / Black Dog", type: "traditional pubs", walk_minutes: 8, notes: "Fentiman Road gentrified pub cluster" },
      { name: "Little Portugal (South Lambeth Road)", type: "Portuguese restaurant cluster", walk_minutes: 8, notes: "Canton Arms and Portuguese cafés — area's distinctive food identity" },
      { name: "Brunswick House", type: "destination restaurant", walk_minutes: 4, notes: "Lassco antiques warehouse restaurant — iconic Vauxhall venue" },
    ],
    health: [
      { name: "Lambeth Walk Group Practice", type: "NHS GP", walk_minutes: 8, notes: "" },
      { name: "Vauxhall Health Centre", type: "NHS GP", walk_minutes: 6, notes: "" },
      { name: "Boots Pharmacy (Vauxhall station)", type: "pharmacy", walk_minutes: 2, notes: "" },
    ],
    cultural: [
      { name: "Royal Vauxhall Tavern", type: "LGBTQ+ heritage venue", walk_minutes: 3, notes: "Grade II listed — culturally significant beyond the building itself" },
      { name: "Newport Street Gallery (Damien Hirst)", type: "gallery", walk_minutes: 8, notes: "Hirst's personal collection — free entry" },
      { name: "Vauxhall City Farm", type: "community farm", walk_minutes: 4, notes: "Working urban farm inside Pleasure Gardens" },
      { name: "Beefeater Gin Distillery", type: "distillery tour", walk_minutes: 8, notes: "Distillery at Kennington Oval edge" },
    ],
    notes: "Cultural identity is genuinely distinctive — LGBTQ+ heritage + Portuguese community + Brunswick House character + Newport Street Gallery. Weaker on 15-minute grocery + premium gym than the newbuild Nine Elms/BPS cores but stronger on cultural texture. The Little Portugal cluster on South Lambeth Road is one of Zone 1's few genuinely distinctive food communities.",
    sources: [
      { url: "https://www.royalvauxhalltavern.com/", label: "Royal Vauxhall Tavern", type: "other", accessed_date: "2026-04-17" },
      { url: "https://londonist.com/london/features/what-it-s-like-to-live-in-london-s-little-portugal", label: "Londonist — Little Portugal", type: "press", accessed_date: "2026-04-17" },
      { url: "https://www.puregym.com/gyms/london-vauxhall/", label: "PureGym Vauxhall", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "active",
    investment_pipeline: "Vauxhall sits at the eastern end of the VNEB Opportunity Area. Recent and ongoing schemes: Keybridge House redevelopment (Mount Anvil, completing; Keybridge Tower at 37 storeys), Vauxhall Square (planned tall towers on the bus interchange site), and general spillover benefit from Nine Elms corridor maturation. Albert Embankment South / Hampton House redevelopment is active.",
    recent_milestones: [
      "2014 — St George Wharf Tower completed (50 storeys, UK's tallest residential on completion)",
      "2018 — The Corniche (Foster + Partners) completed",
      "2019 — The Dumont (St James) completed",
      "2020 — Keybridge Phase 1 completed (Mount Anvil)",
      "2023 — DAMAC Tower Aykon London One completed (50 storeys)",
    ],
    upcoming_milestones: [
      "2026-2027 — Keybridge House final phases",
      "2027 — Vauxhall Square consent progression (bus interchange site redevelopment)",
      "2026-2028 — Nine Elms corridor benefits continue spilling east into Vauxhall",
    ],
    trajectory_through_2027: "Vauxhall in August 2027 will benefit from continued Nine Elms corridor maturation — the area is effectively piggybacking on the Nine Elms investment story without being the primary beneficiary. Keybridge and Albert Embankment deliveries will continue. The nightlife-heritage character and mixed social-housing presence mean Vauxhall won't converge on Nine Elms's newbuild-homogeneity — it retains its own character. Ascending but more slowly than the newbuild cores.",
    sources: [
      { url: "https://www.lambeth.gov.uk/housing/regeneration-projects/regeneration-activity-lambeth/vauxhall", label: "Lambeth — Vauxhall regeneration", type: "council", accessed_date: "2026-04-17" },
      { url: "https://nineelmslondon.com/transformation/", label: "Nine Elms London — Transformation", type: "other", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "partial", "1.6": "pass" },
      {
        "1.1": "Marginal — Lambeth nightlife-adjacent. Leaning fail with strong fail-dissent recorded.",
        "1.2": "Modern stock: Greystar Bloom (Nine Elms/Vauxhall boundary), Berkeley St James Sky Gardens, St George Wharf.",
        "1.3": "Victoria + SWR. Zone 1/2. 14 min to Bank, 8 to TCR.",
        "1.4": "Greystar Bloom operates on the Nine Elms boundary. Active rental market via agents and individual landlords.",
        "1.5": "Mixed public realm — transport hub character rather than residential-first.",
        "1.6": "Not in decline — ascending with Nine Elms corridor.",
      },
      "moderate",
      "T1 passes but T1.1 is marginal and public realm is transport-hub-led.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "partial", "2.3": "partial", "2.4": "partial", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "Daily essentials layer is thin at the Vauxhall core — relies on Nine Elms and Oval adjacency.",
        "2.2": "Grocery access relies on adjacent areas.",
        "2.3": "Gym access via adjacent areas.",
        "2.4": "Vauxhall Pleasure Gardens is the main green. Limited.",
        "2.5": "Transport hub is noisy. Residential pockets vary.",
        "2.7": "Ward 20-39 at 51.6%. Top-skew.",
      },
      "weak",
      "T2 weak. Transport hub character means daily life essentials are thin at the core.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "partial", "3.4": "partial", "3.5": "partial", "3.6": "pass" },
      {
        "3.1": "Ascending with Nine Elms corridor. Keybridge House delivering.",
        "3.2": "Royal Vauxhall Tavern (Grade II LGBTQ+ heritage) + Vauxhall Pleasure Gardens.",
        "3.3": "Identity is contested — transport hub, nightlife, LGBTQ+ heritage, Nine Elms adjacency. Not a unified sense of place.",
        "3.4": "15-minute completeness is partial — transport-dense but amenity-thin.",
        "3.5": "Mixed architectural quality. Low standalone press signal.",
        "3.6": "Strong day/night rhythm — transit-heavy weekdays, LGBTQ+ scene weekends.",
      },
      "moderate",
      "T3 moderate. Cultural identity exists (LGBTQ+ heritage) but area cohesion is low.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "4/4 anchors ≤25 min. Average 14.5 min.",
        "5.2": "Victoria + SWR + Northern (walkable Nine Elms). Redundancy 3/5.",
        "5.3": "Ascending with Nine Elms corridor.",
        "5.4": "Thin third-space culture at the Vauxhall core itself.",
      },
      "good",
      "T5 strong on connectivity. Weak on third spaces.",
    ),
    overall_grade: "B",
    grade_reasoning: "B- — excellent connectivity and transport redundancy, but T1.1 marginal, T2 daily life thin, and area identity is more transport hub than residential neighbourhood.",
  },

  projects: [
    stGeorgeWharf,
    keybridge,
    damacTower,
    theDumont,
    theCorniche,
    meranoResidences,
    staybridgeVauxhall,
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default vauxhall;
