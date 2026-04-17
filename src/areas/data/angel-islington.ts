import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects ─────────────────────────────────────────────────────────
const cityRoad250 = buildProject({
  id: "250-city-road", area_id: "angel-islington", name: "250 City Road", developer: "Berkeley Homes", operator: "Individual landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "Foster + Partners tower cluster on the Angel/Old Street border. ~400 units across Carrara Tower (42 storeys), Valencia Tower (36), Aurora, Siena House, Vermont House. Pool, spa, gym, screening room, 24hr concierge, nhow hotel on site. HomeViews ~4.0/5.",
  architects: ["Foster + Partners"],
  amenity_tier: "premium", is_signature: true, overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley Homes delivery to premium specification — modern services, strong layouts, phased completion 2019-2021.",
    t4_1_amenity_package: "Premium — 3-lane pool, spa, gym, screening room, karaoke room, lounge, yoga studio, 24hr concierge, nhow hotel on site.",
    t4_4_signature_arch: "Foster + Partners (Pritzker 1999) — signature firm. Multiple towers with distinctive massing on City Road.",
  },
});
cityRoad250.rental.price_transparency = "enquire";
cityRoad250.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/islington/250-city-road", label: "250 City Road — Berkeley Homes", type: "developer", accessed_date: "2026-04-12" },
];

const lexiconChronicle = buildProject({
  id: "lexicon-chronicle-tower", area_id: "angel-islington", name: "Lexicon / Chronicle Tower", developer: "Mount Anvil + Clarion Housing Group", operator: "Individual landlords", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "SOM-designed 36-storey tower — tallest building in Islington. 146 units on City Road by Regent's Canal. Gym, spa, sauna, 24hr concierge. HomeViews ~3.8/5.",
  architects: ["Skidmore, Owings & Merrill"],
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Mount Anvil delivery completed 2019. Modern specification with curved prism glass design.",
    t4_1_amenity_package: "Strong — gym, spa, sauna, private conference room, 24hr concierge, cycle storage, basement parking.",
    t4_4_signature_arch: "Skidmore, Owings & Merrill (SOM) — major international practice. Tallest building in Islington. Curved prism glass design.",
  },
});
lexiconChronicle.rental.price_transparency = "enquire";

const packingtonSquare = buildProject({
  id: "packington-square", area_id: "angel-islington", name: "Packington Square", developer: "The Hyde Group", operator: "Individual landlords", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
  preview: "142-unit mixed scheme between Essex Road and Angel stations. 4-6 storeys. Communal courtyard gardens, balconies throughout. Relatively affordable for Islington — 1-bed from ~£1,800 pcm.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Completed 2016. Modern low-rise with integrated appliances, underfloor heating, open-plan layouts.",
    t4_1_amenity_package: "Decent — balconies, communal courtyard gardens. No gym, pool, or concierge.",
    t4_4_signature_arch: "Not signature-authored. Functional low-rise residential.",
  },
});
packingtonSquare.rental.price_transparency = "enquire";

const citadinesIslington = buildProject({
  id: "citadines-islington", area_id: "angel-islington", name: "Citadines Islington", developer: "Ascott (CapitaLand)", operator: "Citadines (Ascott)", building_type: "BTR", living_model: "apart-hotel", build_phase: "complete", tenure: ["rent"], realism: "licence-exempt",
  preview: "Apart-hotel at Islington Square, Upper Street, N1. From ~£105/night; monthly ~£2,500–3,500. All-inclusive — utilities, Wi-Fi, weekly housekeeping. Hospitality licence — hotel booking, no referencing.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Apart-hotel in Islington Square development. Modern.",
    t4_1_amenity_package: "Decent — hotel services, housekeeping, Wi-Fi.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
citadinesIslington.external_links = [
  { url: "https://www.discoverasr.com/en/citadines/united-kingdom/citadines-islington-london", label: "Citadines Islington", type: "operator", accessed_date: "2026-04-15" },
];
citadinesIslington.rental.price_transparency = "enquire";
// V2 enrichment applied 2026-04-17 (enrichment-licence-exempt.md)
citadinesIslington.rental.prices = {
  studio: { min: 2500, max: 3500, currency: "GBP", per: "month" },
  bills_included: true,
  notes: "All-inclusive — utilities, Wi-Fi, weekly housekeeping. Monthly ~£2,500-£3,500 (~£105/night base).",
};
citadinesIslington.rental.affordability = "stretch";
citadinesIslington.building_quality = {
  sound_insulation: "good",
  thermal_performance: "good",
  layout_notes: "Apart-hotel studios and 1-beds within the Islington Square development on Upper Street. Kitchenette, en-suite bathroom, living/sleeping space.",
  kitchen_quality: "poor",
  heating_type: "communal",
  notes: "Apart-hotel kitchenette (hob + combi microwave, no oven, minimal prep space). Anchors the `poor` tier for licence-exempt kitchens.",
};
citadinesIslington.amenities = {
  ...citadinesIslington.amenities,
  concierge: "24h",
  gym: true,
  gym_quality: "average",
  bike_storage: true,
  pet_policy: "Hotel pet policy — check at enquiry.",
  other_amenities: ["Daily housekeeping", "24h reception", "Luggage storage"],
  overall_tier: "decent",
};
citadinesIslington.architecture = {
  architects: [],
  awards: [],
  is_signature: false,
  style_notes: "Apart-hotel occupies part of Islington Square — Upper Street mixed-use development completed ~2021. Retail + residential + hospitality layering.",
};

const angelIslington: Area = {
  id: "angel-islington",
  name: "Angel / Islington",
  aliases: ["Angel", "Islington", "Upper Street"],
  borough: "Islington",
  postcodes: ["N1", "EC1V"],

  headline:
    "Zone 1 Northern Line, 3 minutes to Old Street, 7 to Bank. Upper Street high street is one of London's most complete independent retail and dining corridors.",
  preview:
    "Mature, high-street-led Zone 1 living with Northern Line access that puts the City in 7 minutes and King's Cross within walking distance. Upper Street delivers a genuinely complete 15-minute neighbourhood. No major masterplan — the area is built out and stable.",

  long_form: {
    full: "Angel sits at the southern end of Upper Street, Islington's primary high street, and delivers Zone 1 Northern Line connectivity with Bank in 7 minutes and Old Street in 3. King's Cross is a 15–20 minute walk, giving walkable access to 6 additional tube lines. The area is mature — no major regeneration pipeline, no masterplan — which means what you see is what you get. Upper Street and Chapel Market provide a complete daily-life layer: grocery, dining, pubs, independent retail, gyms. The limitation is that Angel station is single-line (Northern only), so transport redundancy is structurally weak despite the excellent journey times.",
    history: "Angel was one of the original Monopoly board addresses. Islington's gentrification arc from the 1980s onward is one of London's most documented. Upper Street transitioned from working-class high street to restaurant-and-boutique corridor over two decades.",
    vibe: "Busy independent high street. Young professional and established Islington resident mix. Cafes, bookshops, pubs, restaurants. Not a masterplan — organic neighbourhood character.",
    weekday: "A Tuesday at 7pm: Upper Street is busy with after-work diners. Angel tube is commuter-packed. Chapel Market closing up.",
    weekend: "A Saturday: brunch queues on Upper Street. Camden Passage antiques market. Regent's Canal walk toward King's Cross.",
    notable: "Camden Passage antiques market; Chapel Market; Screen on the Green cinema; Sadler's Wells theatre.",
    croydon_comparison: "Angel delivers Zone 1 at a premium — significantly more expensive than Croydon but with incomparably better connectivity, a complete high street, and a safer residential grain.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
    ],
    primary_stations: [
      { name: "Angel", lines: ["Northern"], walk_minutes_from_centre: 3 },
    ],
    times_to_anchors: { city_of_london: 7, canary_wharf: 16, soho_fitzrovia: 8, kings_cross_shoreditch: 3 },
    multi_cluster_score: 4,
    redundancy_score: 2,
    notes: "Single Northern line at Angel but the 15-20 minute walk to King's Cross unlocks six additional lines. Angel's UK-longest escalator means a 2-minute escalator ride at peak. Night Tube on Northern Fri/Sat.",
    sources: [
      { url: "https://tfl.gov.uk/tube/stop/940GZZLUAGL/angel-underground-station", label: "TfL — Angel underground station", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 22 },
      { cohort: "30-39", pct: 25 },
      { cohort: "40-49", pct: 20 },
      { cohort: "50+", pct: 33 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 54 },
      { group: "White — other", pct: 22 },
      { group: "Asian or Asian British", pct: 7 },
      { group: "Black or Black British", pct: 8 },
      { group: "Mixed", pct: 6 },
      { group: "Other ethnic group", pct: 3 },
    ],
    household_mix: [
      { type: "Single person", pct: 36 },
      { type: "Couple no children", pct: 25 },
      { type: "Couple with children", pct: 17 },
      { type: "Lone parent", pct: 10 },
      { type: "Shared household", pct: 8 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 6,
    professional_renter_pct: 42,
    notes: "Canonbury + Barnsbury + St Peter's wards, Census 2021. Angel-proper demographics include a meaningful established-professional layer (40+ homeowner) that gives the area a more family-and-established-adult feel than Old Street or Borough.",
    sources: [
      { url: "https://www.ons.gov.uk/census/maps", label: "ONS Census 2021", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://crystalroof.co.uk/", label: "CrystalRoof — ward profiles", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "average",
    crime_vs_croydon: "safer",
    after_dark_assessment: "Upper Street is continuously populated until 23:00 from the restaurant-and-theatre scene. Angel station forecourt is busy at all hours and calm — no confrontational dynamic. Residential streets (Duncan Terrace, Noel Road, Colebrooke Row, Cloudesley Square) are quiet Georgian terraces with good lighting and low crime. The one caveat is the Liverpool Road / Caledonian Road corridor west of Upper Street — lower-income residential grain with higher ASB and occasional phone-snatch.",
    concerns: [
      "Liverpool Road / Caledonian Road corridor quieter after 22:00",
      "Occasional ASB around Angel tube forecourt on weekend nights (not confrontational)",
    ],
    sources: [
      { url: "https://www.met.police.uk/sd/stats-and-data/", label: "Met Police crime data — N1, EC1V", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: true,
    has_dock: false,
    parks: [
      { name: "Duncan Terrace Gardens", size_acres: 1, walk_minutes: 5, notes: "Small linear garden alongside Regent's Canal" },
      { name: "Islington Green", walk_minutes: 3, notes: "Tiny triangular green at the south end of Upper Street" },
      { name: "Regent's Canal towpath", walk_minutes: 5, notes: "City Road Basin access point, continuous towpath to Victoria Park east or Little Venice west" },
      { name: "Highbury Fields", size_acres: 30, walk_minutes: 15, notes: "Nearest genuine major park (15 min north)" },
      { name: "Barnard Park", size_acres: 3, walk_minutes: 10, notes: "Small local park, 10 min west" },
    ],
    overall_assessment: "Green-thin at neighbourhood scale but compensated by canal access and walkable reach to Highbury Fields. The canal towpath is the genuine asset — continuous walkable/cyclable infrastructure east to Victoria Park or west to Camden Lock, rare in Zone 1.",
    sources: [
      { url: "https://www.islington.gov.uk/parks-and-outdoor-activities", label: "Islington Council — parks", type: "council", accessed_date: "2026-04-17" },
      { url: "https://canalrivertrust.org.uk/", label: "Canal & River Trust", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Waitrose Islington (N1 Centre)", type: "supermarket", walk_minutes: 3, notes: "Premium supermarket" },
      { name: "M&S Food Angel", type: "supermarket", walk_minutes: 2, notes: "In-station food hall" },
      { name: "Sainsbury's Upper Street", type: "supermarket", walk_minutes: 4, notes: "Core supermarket" },
      { name: "Chapel Market", type: "market", walk_minutes: 5, notes: "Working market Tue-Sat" },
      { name: "Planet Organic Islington", type: "organic grocery", walk_minutes: 5, notes: "Organic / specialty" },
    ],
    gyms: [
      { name: "Third Space Islington", type: "premium", walk_minutes: 5, notes: "Flagship (opened 2023) — pool, spa, classes" },
      { name: "Psycle Angel", type: "boutique", walk_minutes: 3, notes: "Indoor cycling flagship" },
      { name: "1Rebel Angel", type: "boutique", walk_minutes: 4, notes: "Boutique HIIT/spin" },
      { name: "Gymbox Farringdon", type: "premium", walk_minutes: 10, notes: "Via Northern" },
      { name: "PureGym Islington Upper Street", type: "budget", walk_minutes: 3, notes: "24h budget" },
      { name: "PureGym Angel", type: "budget", walk_minutes: 4, notes: "Second PureGym" },
      { name: "The Fitness Mosaic (Angel)", type: "independent", walk_minutes: 5, notes: "Independent studio" },
    ],
    food_and_drink: [
      { name: "Ottolenghi Islington (Upper Street)", type: "restaurant", walk_minutes: 4, notes: "Flagship" },
      { name: "Trullo (Islington)", type: "restaurant", walk_minutes: 5, notes: "Italian anchor" },
      { name: "The Drapers Arms", type: "gastropub", walk_minutes: 6, notes: "Gastropub" },
      { name: "Caravan Exmouth Market", type: "cafe", walk_minutes: 5, notes: "Brunch destination" },
      { name: "Workshop Coffee Clerkenwell", type: "cafe", walk_minutes: 10, notes: "Specialty coffee" },
      { name: "The Compton Arms", type: "pub", walk_minutes: 8, notes: "Local pub" },
      { name: "The Marquess Tavern", type: "gastropub", walk_minutes: 10, notes: "Gastropub" },
    ],
    health: [
      { name: "Whittington Hospital", type: "hospital", walk_minutes: 20, notes: "Nearest major A&E via Northern" },
      { name: "Killick Street Health Centre (GP)", type: "GP", walk_minutes: 7, notes: "NHS GP" },
      { name: "Islington Central Medical Centre", type: "GP", walk_minutes: 6, notes: "Alternative GP" },
      { name: "Boots Angel", type: "pharmacy", walk_minutes: 2, notes: "Core pharmacy" },
    ],
    cultural: [
      { name: "Sadler's Wells Theatre", type: "theatre", walk_minutes: 6, notes: "Dance flagship" },
      { name: "Screen on the Green", type: "cinema", walk_minutes: 2, notes: "Historic independent cinema (1913)" },
      { name: "Almeida Theatre", type: "theatre", walk_minutes: 8, notes: "Leading new-writing theatre" },
      { name: "Little Angel Theatre", type: "theatre", walk_minutes: 5, notes: "Puppetry" },
      { name: "Camden Passage antiques market", type: "market", walk_minutes: 3, notes: "Wednesday + Saturday antiques market" },
      { name: "Business Design Centre", type: "venue", walk_minutes: 5, notes: "Trade-show venue" },
    ],
    notes: "Angel has the most complete all-rounder amenity offer in the batch — grocery (Waitrose + M&S + Sainsbury's + Chapel Market), gyms (Third Space flagship + boutique tier + budget tier), F&B (Ottolenghi/Trullo/Drapers + Workshop/Caravan cafes), cultural (Sadler's Wells + Screen on the Green + Almeida). The only gap is hospital (Whittington is ~20 min north).",
    sources: [
      { url: "https://www.thirdspace.london/clubs/islington", label: "Third Space Islington", type: "operator", accessed_date: "2026-04-17" },
      { url: "https://www.psyclelondon.com/studios/angel", label: "Psycle Angel", type: "operator", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "complete",
    investment_pipeline: "Small-scale residential infill only. 250 City Road (Berkeley) and Lexicon / Chronicle Tower (Mount Anvil) were the last major tower-scale deliveries and completed 2019. No active masterplan. Upper Street conservation-area policy limits larger-scale intervention on the high-street frontage itself.",
    recent_milestones: [
      "2019 — 250 City Road final phase completed (Foster + Partners)",
      "2019 — Lexicon / Chronicle Tower completed (SOM)",
      "2023 — Third Space Islington flagship opened",
    ],
    upcoming_milestones: [
      "Continued small-scale infill along City Road Basin",
    ],
    trajectory_through_2027: "Plateaued / mature. Angel is a stable end-state area — no masterplan, no step-change delivery expected, but no decline either. 'What you see is what you get' is both its strength and its limitation.",
    sources: [
      { url: "https://www.islington.gov.uk/about-islington/neighbourhoods/angel", label: "Islington — Angel neighbourhood", type: "council", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Safe. Islington borough headline applies but Angel ward is well within the calmer half of the borough distribution.",
        "1.2": "Modern rental stock exists — individual-landlord in modern blocks, some emerging BTR on City Road Basin.",
        "1.3": "Northern Line at Angel — 7 min to Bank, 3 min to Old Street. Zone 1.",
        "1.4": "Active professional rental market via individual landlords. No dominant BTR operator.",
        "1.5": "Upper Street and surrounding streets are well-maintained. Mature public realm.",
        "1.6": "Not in decline — stable mature area.",
      },
      "good",
      "T1 clean on all six rows.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "partial", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Upper Street is one of London's most complete independent high streets — grocery, dining, retail all walkable.",
        "2.2": "Quality grocery available on Upper Street and Chapel Market.",
        "2.3": "Multiple gym options in the Angel / Upper Street corridor.",
        "2.4": "Green space is thin — Duncan Terrace Gardens, Regent's Canal at City Road Basin. No major park within 10 min.",
        "2.5": "Residential streets are calm at night. Upper Street has late-night activity but residential grain is quiet.",
        "2.7": "Canonbury ward 20-39 at 40%. Solid young professional skew.",
      },
      "good",
      "T2 strong. The high street delivers daily life completeness. Green space is the only weak axis.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "pass" },
      {
        "3.1": "Mature — no active regeneration or current major investment.",
        "3.2": "Sadler's Wells, Screen on the Green, Camden Passage antiques market, Chapel Market — genuine cultural anchors.",
        "3.3": "Strong sense of place. 'Angel' and 'Islington' are immediately recognisable London names.",
        "3.4": "Genuinely complete 15-minute neighbourhood. Grocery, gym, dining, transport, culture all within walking range.",
        "3.5": "Mature residential coverage. No 2024/25 jury wins found. Architectural quality is Victorian/Georgian with modern infill.",
        "3.6": "Busy day/night rhythm driven by Upper Street dining and theatre scene.",
      },
      "good",
      "T3 strong. Identity is well-established. No regeneration uplift but no need for one.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "partial", "5.3": "partial", "5.4": "pass" },
      {
        "5.1": "Average 8.5 min to four anchors — top-tier multi-cluster coverage.",
        "5.2": "Single line at Angel. KX and Old Street walkable but not immediate redundancy.",
        "5.3": "Plateaued — no ascending trajectory, stable mature area.",
        "5.4": "Strong cafe and bookshop culture on Upper Street and side streets.",
      },
      "good",
      "T5 strong on times, weak on redundancy. Excellent third-space culture.",
    ),
    overall_grade: "B",
    grade_reasoning: "B — T1 clean, T2 and T3 strong on daily life and identity, but single-line dependency at Angel and no ascending trajectory limit the ceiling. Excellent for immediate liveability, less for future value.",
  },

  projects: [cityRoad250, lexiconChronicle, packingtonSquare, citadinesIslington],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default angelIslington;
