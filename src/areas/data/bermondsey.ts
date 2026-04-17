import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects ─────────────────────────────────────────────────────────
// "Bermondsey Works" and "The Union" were REMOVED on 2026-04-12.
// Both were attributed to Essential Living, but Essential Living's confirmed 2026
// portfolio is: Vantage Point (Islington), Dressage Court (Bethnal Green), Union Wharf
// (Greenwich), Berkshire House (Maidenhead). No Bermondsey property has ever appeared
// on essentialliving.co.uk. The sweep agent likely conflated "Union Wharf" (Greenwich)
// with a Bermondsey location and fabricated "Bermondsey Works" as a second entry.
// Web search for both names returned zero results. These were hallucinated entries.

// REMOVED 2026-04-16 by data-upkeep skill: "The Copyhouse" (Grainger)
// Ghost-project flag raised by research agent. Evidence: (1) not found in
// Grainger's current portfolio via site crawl or search, (2) zero presence
// on Rightmove/Zoopla/HomeViews as a residential building, (3) only "Copyhouse"
// search matches were a content marketing agency and a film production company,
// neither residential. Matches the 2026-04-12 hallucination pattern.
// Blast radius was prose-only (T1.2 and T1.4 reasoning) — prose rewritten to
// drop Grainger reference, retain Greystar. No grade change needed because
// Bermondsey retains Pearl Yard + The Bermondsey Project as T1.4 pass conditions.

const pearlYard = buildProject({
  id: "pearl-yard", area_id: "bermondsey", name: "Pearl Yard", developer: "Grosvenor + Greystar", operator: "Greystar", building_type: "BTR", build_phase: "phased", tenure: ["rent"], realism: "unknown",
  preview: "One of London's largest single BTR schemes — 1,600+ units on the historic Biscuit Factory site in SE16. Greystar operator. 3 min from Bermondsey station (Jubilee). Studio from ~£2,183 pcm; 1-bed from ~£2,877 pcm.",
  amenity_tier: "premium", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Brand-new 2026 delivery by Greystar on former Peek Freans biscuit factory site. Multiple buildings up to ~20 storeys.",
    t4_1_amenity_package: "Gym, yoga studio, residents' lounge, co-working space, 24/7 concierge, games room, arts club, dining area, rooftop gardens, pet spa. Premium amenity stack.",
    t4_4_signature_arch: "Master-planned multi-architect scheme. Not a single signature piece.",
  },
});
pearlYard.rental.price_transparency = "listed";
// Per-project override: Pearl Yard publishes "Flexible leases from 3 months to 12 months"
// — uniquely short for Greystar (operator default is 12 months). Source:
// https://www.pearlyardbermondsey.com/faqs accessed 2026-04-16.
pearlYard.rental.qualification.min_tenancy_months = 3;
pearlYard.rental.qualification.qualification_flexibility_signal = "flexible";
// V2 enrichment applied 2026-04-17 (enrichment-greystar-fizzy.md)
pearlYard.rental.prices = {
  studio: { min: 2670, currency: "GBP", per: "month" },
  one_bed: { min: 3360, currency: "GBP", per: "month" },
  two_bed: { min: 3905, currency: "GBP", per: "month" },
  bills_included: false,
  notes: "Prices verified against pearlyardbermondsey.com April 2026. Early-bird 8 weeks rent-free active.",
};
pearlYard.rental.affordability = "over-budget";
pearlYard.building_quality = {
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "Greystar premium BTR specification — full kitchens with integrated appliances including dishwasher. Part E 2022+ sound; Part L 2022+ thermal.",
  kitchen_quality: "good",
  heating_type: "communal",
  notes: "Brand-new 2026 delivery on the former Peek Freans biscuit factory site. Multiple buildings up to ~20 storeys.",
};
pearlYard.amenities = {
  pool: true,
  pool_notes: "Pool + sauna opening 2027 per operator communications.",
  gym: true,
  gym_quality: "good",
  concierge: "24h",
  sky_lounge: true,
  co_working: true,
  dining_room: false,
  cinema_room: false,
  rooftop_terrace: true,
  parking: false,
  bike_storage: true,
  pet_policy: "Pet-friendly with fee; on-site pet spa.",
  other_amenities: ["Games room", "Arts club", "Yoga studio", "Pet spa", "Resident lounges"],
  overall_tier: "premium",
};
pearlYard.architecture = {
  architects: ["HTA Design", "Hawkins\\Brown", "Arney Fender Katsalidis (AFK)", "KPF (masterplan)"],
  awards: [],
  is_signature: false,
  style_notes: "Multi-architect masterplan on the Peek Frean biscuit factory site — not a singular landmark. Heritage integration references the Peek Frean industrial fabric.",
};
pearlYard.long_form = {
  full: pearlYard.long_form.full,
  living_experience: "Greystar-operated premium BTR with 3-12 month flexible leases — uniquely short within the Greystar portfolio. Pool/sauna opening 2027. Central public park on the masterplan.",
  notable_features: "3-12 month flexible lease terms (unique within Greystar); Peek Freans biscuit factory heritage integration; pool/sauna opening 2027; central public park.",
};
pearlYard.resident_signal = {
  homeviews_url: "https://www.homeviews.com/development/pearl-yard-se16",
  summary: "No HomeViews reviews yet — the building is too new (first phases trading from 2025-2026).",
  common_complaints: [],
  common_praise: [],
};
pearlYard.external_links = [
  { url: "https://www.pearlyardbermondsey.com/", label: "Pearl Yard Bermondsey — Greystar", type: "operator", accessed_date: "2026-04-16" },
  { url: "https://www.kpf.com/project/the-bermondsey-project-2", label: "KPF — Bermondsey masterplan", type: "other", accessed_date: "2026-04-17" },
  { url: "https://www.hawkinsbrown.com/projects/pearl-yard-bermondsey/", label: "Hawkins\\Brown — Pearl Yard", type: "other", accessed_date: "2026-04-17" },
];

const theBermondseyProject = buildProject({
  id: "the-bermondsey-project", area_id: "bermondsey", name: "The Bermondsey Project", developer: "Greystar", operator: "Greystar", building_type: "BTR", build_phase: "phased", tenure: ["rent"], realism: "unknown",
  preview: "1,624-home Greystar BTR at 100 Clements Road, SE16. Indoor swimming pool, gyms, roof terraces. ~£600m debt facility. First homes autumn 2025; full completion 2H 2027. Includes new 600-student secondary school.",
  amenity_tier: "premium", architects: ["HTA", "Hawkins\\Brown", "AFK"], overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Under construction — Greystar flagship BTR with ~£600m debt facility. Expected strong build quality.",
    t4_1_amenity_package: "Indoor swimming pool, lounges, workspaces, gyms, private dining rooms, roof terraces, 4,700 sqm play space. Premium.",
    t4_4_signature_arch: "HTA + Hawkins Brown + AFK — reputable practices but not singular signature authorship.",
  },
});
theBermondseyProject.rental.price_transparency = "enquire";
// V2 enrichment applied 2026-04-17 (enrichment-greystar-fizzy.md) — projected from sister scheme
theBermondseyProject.rental.affordability = "over-budget";
theBermondseyProject.amenities = {
  ...theBermondseyProject.amenities,
  pool: true,
  pool_notes: "Indoor swimming pool confirmed in Southwark planning doc 23/AP/2124.",
  gym: true,
  gym_quality: "good",
  concierge: "24h",
  sky_lounge: true,
  co_working: true,
  dining_room: true,
  rooftop_terrace: true,
  bike_storage: true,
  pet_policy: "Pet-friendly with fee (projected, sister-scheme parity).",
  other_amenities: ["Private dining rooms", "Indoor pool", "4,700 sqm play space", "Integrated 600-student secondary school"],
  overall_tier: "premium",
};
theBermondseyProject.architecture = {
  architects: ["HTA Design", "Hawkins\\Brown", "AFK"],
  awards: [],
  is_signature: false,
  style_notes: "Shared architect team with sister scheme Pearl Yard. Multi-architect scheme — not a singular landmark.",
};
theBermondseyProject.long_form = {
  full: theBermondseyProject.long_form.full,
  living_experience: "Under construction — first homes autumn 2025, full completion 2H 2027. Flagship Greystar scheme with integrated secondary school.",
  notable_features: "600-student secondary school integrated on site (unusual for BTR); ~£600m debt facility; shared architect team with Pearl Yard; 4,700 sqm play space.",
};
theBermondseyProject.resident_signal = {
  summary: "Under construction — Autumn 2025 first homes, 2H 2027 full completion; no resident signal yet.",
  common_complaints: [],
  common_praise: [],
};
theBermondseyProject.external_links = [
  { url: "https://greystar-bermondseyproject.com/", label: "The Bermondsey Project — Greystar", type: "operator", accessed_date: "2026-04-12" },
  { url: "https://www.architectsjournal.co.uk/news/hta-replaces-kpf-on-500m-bermondsey-biscuit-factory-job", label: "AJ — HTA replaces KPF on Bermondsey Project", type: "press", accessed_date: "2026-04-17" },
];

const bermondsey: Area = {
  id: "bermondsey",
  name: "Bermondsey",
  aliases: ["Bermondsey Street", "Maltby Street"],
  borough: "Southwark",
  postcodes: ["SE1", "SE16"],

  headline:
    "Warehouse-conversion character with Jubilee line access — 6 minutes to Canary Wharf, 13 to Bank. Bermondsey Street and Maltby Street Market give it a food-and-culture identity most inner-south areas lack.",
  preview:
    "Zone 1/2 Jubilee line access at a price point below London Bridge proper. Bermondsey Street is one of south London's strongest independent food-and-culture corridors. London Bridge walkable in 15 minutes for Northern + Thameslink redundancy. Appleby Blue (Stirling Prize 2025) anchors the architectural identity.",

  long_form: {
    full: "Bermondsey occupies the strip of south-east London between London Bridge and Rotherhithe, straddling Zone 1 (SE1 around Bermondsey Street) and Zone 2 (SE16 around the station and Pearl Yard). Its defining texture is warehouse-conversion character — the area was historically the \"larder of London\", dominated by tanneries, biscuit factories (Peek Frean's 1857-1989 on the Pearl Yard site), and food-processing warehouses servicing the City across London Bridge. The post-1980 trajectory is the standard south-east London warehouse-to-loft arc, but with a specific food-and-culture overlay: Bermondsey Street has become one of south London's strongest independent F&B corridors, Maltby Street Market anchors the weekend food scene, and the White Cube gallery established a contemporary-art presence in 2011. Transport is single-line at station level — Bermondsey (Jubilee) is the only underground station proper. Journey times are exceptional despite this: 6 minutes to Canary Wharf, 13 to Bank, 17 to Soho. London Bridge is a 15-minute walk for Northern + Thameslink + Southeastern + Southern redundancy. The residential story is distinct from Borough's in one key way — Bermondsey has a dominant BTR pipeline. Greystar is delivering two flagship schemes: Pearl Yard (1,600+ units on the former Peek Frean biscuit factory site, first phases trading from 2025) and The Bermondsey Project (1,624 homes, 100 Clements Road, phased through 2027). Pricing runs studios from ~£2,183 at Pearl Yard, 1-beds from ~£2,877. Appleby Blue (Stirling Prize 2025) sits in the social/intermediate segment but elevates the architectural ceiling.",
    history: "Bermondsey's medieval history runs through Bermondsey Abbey (founded 1082, dissolved 1538) and its position as a monastic-then-industrial riverside settlement. The industrial era (1800s-1950s) was tanneries, leather-working, and food processing — \"The Stink of Bermondsey\" was a documented Victorian public-health issue from the tanneries along the Neckinger river. Peek Frean's biscuit factory (1857-1989) was the dominant employer on the site now occupied by Pearl Yard. The area declined sharply after WW2 and the collapse of the docks in the 1970s. The post-1990 regeneration arc started with Jubilee Line Extension (1999, Bermondsey station opened) and gained momentum through White Cube gallery on Bermondsey Street (2011) and the warehouse-to-residential conversion wave of the 2000s-2010s. Greystar's entry with Pearl Yard (announced 2017, first phases 2025) and The Bermondsey Project (announced 2020, ~£600m debt facility) marks the transition from boutique-conversion to institutional BTR scale. Appleby Blue (Witherford Watson Mann, Southwark Council, delivered 2024, Stirling Prize 2025) is the architectural capstone of the current phase.",
    vibe: "Bermondsey Street is a genuinely complete independent high street — cafes, restaurants, delis, the White Cube gallery, independent bookshops, and the Leathermarket courtyard. Pace is calmer than Borough proper and the demographic skew is older-professional plus creative-industry (the area has been a London ad/media cluster since the early 2000s). Riverside character at Shad Thames (warehouse conversions) remains visually striking — Butler's Wharf, Anchor Brewhouse, Cinnamon Wharf. Saturday mornings at Maltby Street Market are the vibe peak — pedestrian density along Rope Walk spikes between 11:00-15:00.",
    weekday: "Monday to Friday the area is quieter than Borough — less tourism, more residential foot traffic. Bermondsey Street cafes (Watch House, Monmouth-affiliated) hit peak at 09:00 and 13:00. Jubilee line commuter flow from Bermondsey station is steady but not crushing (the station handles ~7.5m entries/year vs London Bridge's 70m+). Office presence is lighter than Borough — the ad/creative cluster generates daytime cafe activity but not station-forecourt density.",
    weekend: "Saturday is Maltby Street Market day — 09:00-16:00 along Rope Walk under the railway viaduct, with queue culture for St. JOHN Bakery, Monty's Deli, and the Little Bird Gin stall. Bermondsey Street restaurants (Jose, Pizarro, Flour & Grape on nearby Bermondsey Square) run waits from 18:30. Sunday is calmer — the market closes but brunch culture is strong, and Southwark Park (12 minutes east) absorbs weekend dog-walking and jogging activity.",
    notable: "Bermondsey Street (independent F&B corridor, White Cube gallery); Maltby Street Market (Rope Walk railway arches); Shad Thames warehouse conversions (Butler's Wharf, Anchor Brewhouse); Appleby Blue (Witherford Watson Mann, RIBA Stirling Prize 2025, Neave Brown Award, Client of the Year — triple RIBA win); Fashion and Textile Museum (Zandra Rhodes-founded, Bermondsey Street).",
    croydon_comparison: "Bermondsey is meaningfully safer after dark than East Croydon — the residential grain along Bermondsey Street and Grange Walk is well-lit and populated until ~22:30 from the restaurant scene, and the Jubilee line station itself is a calm, single-island interchange without the confrontational forecourt dynamic. Cafe density along Bermondsey Street exceeds anything Croydon offers on cleaner tier — WatchHouse, Fuckoffee, Grind, St. JOHN Bakery (Maltby) vs Croydon's predominantly chain-and-chicken-shop ground floor. Gyms: FLY LDN Bermondsey Street (boutique), Third Space Tower Bridge (15 min walk), Gymbox Bank (10 min via Jubilee), plus Third Space London Bridge is 13 minutes walk or 1 stop. Transport: Zone 1-2 with 6-minute Canary Wharf vs 35-minute Croydon-to-Canary. Price differential is the compromise — Pearl Yard studios from ~£2,183 all-in vs Ten Degrees ~£3,000 effective — making Bermondsey actually the rare Zone-1-adjacent area that can undercut Ten Degrees on bundled pricing.",
  },

  zones: ["Zone 1", "Zone 2"],
  connectivity: {
    lines: [
      { name: "Jubilee", type: "tube" },
    ],
    primary_stations: [
      { name: "Bermondsey", lines: ["Jubilee"], walk_minutes_from_centre: 5 },
      { name: "London Bridge", lines: ["Jubilee", "Northern", "Thameslink", "Southeastern"], walk_minutes_from_centre: 15 },
    ],
    times_to_anchors: { city_of_london: 13, canary_wharf: 6, soho_fitzrovia: 17, kings_cross_shoreditch: 17 },
    multi_cluster_score: 4,
    redundancy_score: 2,
    notes: "Single line (Jubilee) at Bermondsey proper, though London Bridge is walkable in 15 min (Northern + Jubilee + Thameslink + Southeastern). Average 13.25 min to anchors. Functionally ~4/5 redundancy with London Bridge walkover.",
    sources: [
      { url: "https://tfl.gov.uk/tube/stop/940GZZLUBMY/bermondsey-underground-station", label: "TfL — Bermondsey underground station", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL journey planner", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 27 },
      { cohort: "30-39", pct: 28 },
      { cohort: "40-49", pct: 18 },
      { cohort: "50+", pct: 27 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 44 },
      { group: "White — other", pct: 21 },
      { group: "Asian or Asian British", pct: 10 },
      { group: "Black or Black British", pct: 13 },
      { group: "Mixed", pct: 7 },
      { group: "Other ethnic group", pct: 5 },
    ],
    household_mix: [
      { type: "Single person", pct: 38 },
      { type: "Couple no children", pct: 26 },
      { type: "Couple with children", pct: 16 },
      { type: "Lone parent", pct: 8 },
      { type: "Shared household", pct: 8 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 7,
    professional_renter_pct: 50,
    notes: "London Bridge & West Bermondsey + Grange wards, Census 2021. 20-39 cohort at ~55%. Creative-industry and media-professional skew. Grange ward (east Bermondsey) more ethnically diverse than Bermondsey Street corridor proper.",
    sources: [
      { url: "https://www.ons.gov.uk/census/maps", label: "ONS Census 2021 — maps", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://crystalroof.co.uk/report/ward/E05014093", label: "CrystalRoof — London Bridge & West Bermondsey ward", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "below",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "Bermondsey Street is well-populated until ~22:30 from the restaurant scene; post-22:30 the street quiets but remains well-lit. The Bermondsey tube station walk south along Jamaica Road is the one stretch that feels quieter after 23:00 — not unsafe, but lower foot traffic than the Street itself. Residential blocks around Pearl Yard and the Grange are calm. Maltby Street / railway arches at night: the arch tenants close at ~16:00 Saturday, so the Rope Walk area is dead after 17:00, not a threat but not a destination.",
    concerns: [
      "Phone-snatch opportunist pattern extending from Tower Bridge Road north — light, but present",
      "Jamaica Road south of Bermondsey station quieter at 23:00+, lower foot traffic",
    ],
    sources: [
      { url: "https://www.met.police.uk/sd/stats-and-data/", label: "Met Police crime data — SE1/SE16", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: true,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Tanner Street Park", size_acres: 2, walk_minutes: 5, notes: "Small formal park, tennis courts" },
      { name: "Leathermarket Gardens", walk_minutes: 4, notes: "Pocket park off Bermondsey Street" },
      { name: "Bermondsey Square (gardens)", size_acres: 1, walk_minutes: 6, notes: "Small public garden adjoining Bermondsey Square" },
      { name: "Southwark Park", size_acres: 63, walk_minutes: 15, notes: "Genuine major park — 15 minutes east" },
      { name: "Potters Fields Park", size_acres: 2, walk_minutes: 10, notes: "Thames-side lawn adjacent to City Hall" },
    ],
    overall_assessment: "Core Bermondsey Street area is green-thin (pocket parks only), but Southwark Park within 15 minutes gives a genuine major green option. Thames frontage at Shad Thames is active waterside rather than park per se. Net: moderate — better than Borough proper because Southwark Park adds a real green destination within comfortable walking range.",
    sources: [
      { url: "https://www.southwark.gov.uk/parks-and-open-spaces", label: "Southwark Council — parks and open spaces", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Marks & Spencer Bermondsey", type: "supermarket", walk_minutes: 7, notes: "Full-range supermarket" },
      { name: "Sainsbury's Local Bermondsey Street", type: "convenience", walk_minutes: 4, notes: "Core convenience" },
      { name: "Tesco Express Grange Road", type: "convenience", walk_minutes: 5, notes: "Secondary top-up" },
      { name: "Maltby Street Market", type: "market", walk_minutes: 5, notes: "Saturday only — independent food corridor" },
    ],
    gyms: [
      { name: "FLY LDN Bermondsey Street", type: "boutique", walk_minutes: 3, notes: "Pilates/reformer boutique studio" },
      { name: "Third Space Tower Bridge", type: "premium", walk_minutes: 15, notes: "Full-service premium gym — walkable or 5 min cycle" },
      { name: "Gymbox Bermondsey (The Biscuit Factory)", type: "mid-tier boutique", walk_minutes: 4, notes: "Opened 2024 at Pearl Yard site" },
      { name: "PureGym Bermondsey", type: "budget", walk_minutes: 6, notes: "24h budget gym" },
      { name: "The Foundry Gym (Bermondsey Square)", type: "boutique/independent", walk_minutes: 5, notes: "Independent strength-focused gym" },
      { name: "Pearl Yard in-building gym", type: "resident-included", walk_minutes: 0, notes: "Included with Pearl Yard tenancy" },
    ],
    food_and_drink: [
      { name: "Pizarro (Bermondsey Street)", type: "restaurant", walk_minutes: 4, notes: "Spanish flagship" },
      { name: "Jose Pizarro", type: "tapas bar", walk_minutes: 4, notes: "Tapas anchor on Bermondsey Street" },
      { name: "WatchHouse Bermondsey Street", type: "cafe", walk_minutes: 3, notes: "Work-capable specialty cafe" },
      { name: "St. JOHN Bakery (Maltby Street)", type: "bakery", walk_minutes: 5, notes: "Iconic bakery — Maltby Street arches" },
      { name: "The Garrison (Bermondsey Street)", type: "gastropub", walk_minutes: 4, notes: "Gastropub anchor" },
      { name: "Flour & Grape", type: "restaurant", walk_minutes: 5, notes: "Bermondsey Street pasta institution" },
    ],
    health: [
      { name: "Guy's Hospital", type: "hospital", walk_minutes: 15, notes: "Major teaching hospital with A&E" },
      { name: "Bermondsey Spa Health Centre (GP)", type: "GP", walk_minutes: 8, notes: "NHS GP" },
      { name: "Boots Bermondsey Street", type: "pharmacy", walk_minutes: 4, notes: "Primary pharmacy" },
    ],
    cultural: [
      { name: "White Cube Bermondsey", type: "gallery", walk_minutes: 2, notes: "Contemporary art gallery — 2011 opening" },
      { name: "Fashion and Textile Museum", type: "museum", walk_minutes: 3, notes: "Zandra Rhodes-founded" },
      { name: "Bermondsey Project Space", type: "gallery", walk_minutes: 2, notes: "Independent gallery" },
      { name: "Menier Chocolate Factory", type: "theatre", walk_minutes: 10, notes: "Studio theatre" },
      { name: "Bridge Theatre", type: "theatre", walk_minutes: 12, notes: "Major theatre adjacent to Tower Bridge" },
    ],
    notes: "Gym density is genuinely strong for a Zone 1-2 area — FLY LDN + Gymbox + Third Space walkover + Pearl Yard in-building gives a four-tier offer. F&B is independent-skewed and high-quality. The only amenity gap is cultural institutions at cinema/major-theatre scale.",
    sources: [
      { url: "https://www.flyldn.co.uk/", label: "FLY LDN", type: "operator", accessed_date: "2026-04-17" },
      { url: "https://www.thirdspace.london/clubs/tower-bridge", label: "Third Space Tower Bridge", type: "operator", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "active",
    investment_pipeline: "Greystar ~£1bn+ across Pearl Yard and The Bermondsey Project combined (Pearl Yard 1,600+ units delivering phased 2025-2027, The Bermondsey Project 1,624 homes + 600-student secondary school delivering 2025-2027 with ~£600m debt facility). Southwark Council's Bermondsey Street conservation-area policy limits larger-scale intervention along the core corridor.",
    recent_milestones: [
      "2024 — Appleby Blue completed (Witherford Watson Mann, Southwark Council intermediate housing)",
      "2025 — Appleby Blue RIBA Stirling Prize + Neave Brown Award + Client of the Year (triple win)",
      "2025 — Pearl Yard first phases trading",
      "2025 — Gymbox Bermondsey (Biscuit Factory) opened",
    ],
    upcoming_milestones: [
      "2026-2027 — Pearl Yard remaining phases complete",
      "2027 — The Bermondsey Project full delivery + 600-student secondary school opens",
    ],
    trajectory_through_2027: "Genuinely ascending. The Greystar delivery doubles institutional BTR stock in the area, the Appleby Blue jury wins signal architectural quality trajectory, and the new Bermondsey Project secondary school adds a family-demographic anchor that will diversify the creative-industry skew. Caner's August 2027 window lands at full delivery — if the move is a 2-year commitment rather than a 6-month bridge, Bermondsey is the batch's strongest trajectory bet.",
    sources: [
      { url: "https://www.pearlyardbermondsey.com/", label: "Pearl Yard Bermondsey", type: "operator", accessed_date: "2026-04-17" },
      { url: "https://greystar-bermondseyproject.com/", label: "The Bermondsey Project — Greystar", type: "operator", accessed_date: "2026-04-17" },
      { url: "https://www.ribaj.com/buildings/riba-stirling-prize-2025-winner-appleby-blue", label: "RIBAJ — Stirling Prize 2025 winner Appleby Blue", type: "press", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Safe — Bermondsey ward is in the calmer half of Southwark. Materially safer than Croydon. Clean T1.1 pass.",
        "1.2": "Greystar Pearl Yard (1,600+ BTR units) and The Bermondsey Project (1,624 homes) — major modern managed rental stock present.",
        "1.3": "Jubilee line at Bermondsey — 6 min to Canary Wharf, 13 to Bank. London Bridge walkable for redundancy.",
        "1.4": "Greystar (Tier 1 global BTR operator) is delivering two major schemes — Pearl Yard and The Bermondsey Project. Active professional rental market.",
        "1.5": "Bermondsey Street corridor is well-maintained. Appleby Blue raises architectural quality.",
        "1.6": "Not in decline — active investment, Stirling Prize winner confirms ascending trajectory.",
      },
      "good",
      "T1 clean pass on all six rows. One of the cleanest T1 passes in inner-south London.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "partial", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Bermondsey Street provides strong walkable essentials — restaurants, cafes, independent retail.",
        "2.2": "Maltby Street Market and the surrounding food corridor give quality grocery and fresh food access.",
        "2.3": "FLY LDN + Gymbox + Third Space Tower Bridge + PureGym + Pearl Yard in-building gym — four-tier gym offer.",
        "2.4": "Thames-adjacent but limited dedicated green space in the core. Southwark Park is walkable (15 min).",
        "2.5": "Residential streets are calm at night. Not a nightlife destination.",
        "2.7": "20-39 cohort at 55% — top-skew young-professional demographic.",
      },
      "good",
      "Strong daily life quality driven by the Bermondsey Street food-and-culture corridor.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "pass", "3.6": "pass" },
      {
        "3.1": "Active investment — Appleby Blue Stirling Prize confirms the area's architectural trajectory.",
        "3.2": "Bermondsey Street + Maltby Street Market are genuine cultural and commercial anchors.",
        "3.3": "Strong distinct identity — warehouse-conversion character, food corridor, independent retail.",
        "3.4": "15-minute completeness is strong — food, drink, transport, culture all within walking distance.",
        "3.5": "Appleby Blue (Stirling Prize 2025) is the architectural headline. Warehouse conversions add character.",
        "3.6": "Day/night rhythm is balanced — busy food corridor by day, calm residential by night.",
      },
      "good",
      "T3 is strong. Bermondsey has one of the most distinctive identities in inner south London.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "partial", "5.3": "pass", "5.4": "pass" },
      {
        "5.1": "Multi-cluster score 4/5 — all four anchors reachable in ≤25 min. Average 13.25 min.",
        "5.2": "Single Jubilee line at Bermondsey — London Bridge walkable for redundancy but not at-station.",
        "5.3": "Ascending trajectory — Stirling Prize, strong food corridor, warehouse-conversion identity.",
        "5.4": "Bermondsey Street cafes and the White Cube gallery provide third-space options.",
      },
      "good",
      "Strong T5 — excellent multi-cluster, ascending trajectory, good third spaces.",
    ),
    overall_grade: "B",
    grade_reasoning: "B — T1 clean, T3 strong identity, excellent connectivity. Redundancy (single Jubilee line at station) is the main limitation. Greystar's two major BTR schemes (Pearl Yard + The Bermondsey Project) give Bermondsey one of the strongest managed-rental pipelines in inner south London.",
  },

  projects: [pearlYard, theBermondseyProject],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default bermondsey;
