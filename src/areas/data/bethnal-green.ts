import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects ─────────────────────────────────────────────────────────
const broadwayEast = buildProject({
  id: "broadway-east", area_id: "bethnal-green", name: "Broadway East (Regent's View)",
  developer: "St William (Berkeley Group / National Grid JV)", operator: "Various agents",
  building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "555 homes on former Bethnal Green gasworks. Canal-side with two restored Victorian gasholders. Rogers Stirk Harbour + Partners architecture. Phased delivery 2025-2026.",
  amenity_tier: "strong", overall_grade: "A", architects: ["Rogers Stirk Harbour + Partners"],
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley Group subsidiary delivery with RSHP architecture — among the most significant new developments in Bethnal Green.",
    t4_1_amenity_package: "Strong — 24-hour concierge, canal-side location with restored gasholders, landscaped gardens.",
    t4_4_signature_arch: "Rogers Stirk Harbour + Partners is a Stirling Prize-winning practice — genuine signature architecture.",
  },
});
broadwayEast.rental.price_transparency = "enquire";
broadwayEast.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/bethnal-green/regents-view", label: "Regent's View (Broadway East) — Berkeley Group", type: "developer", accessed_date: "2026-04-12" },
];

const bethnalGreen: Area = {
  id: "bethnal-green",
  name: "Bethnal Green",
  aliases: ["Bethnal Green Road"],
  borough: "Tower Hamlets",
  postcodes: ["E2"],

  headline:
    "Central Line in Zone 2 with an 11-minute average to employment anchors. East End character with Weavers Fields green spine and strong young demographic.",
  preview:
    "Central Line gives direct Bank (8 min) and Tottenham Court Road (10 min) access. Two separate stations (Bethnal Green tube + Overground) provide genuine redundancy. Young-skewed demographics with Bethnal Green West at 48% aged 20-39.",

  long_form: {
    full: "Bethnal Green sits at the intersection of Tower Hamlets' Bangladeshi community and its incoming young-professional wave. The Central Line at Bethnal Green tube gives direct access to Bank (8 min) and TCR (10 min), while a separate Overground station on the Weaver line adds genuine redundancy. Weavers Fields and Museum Gardens provide a green spine through the residential grain. The area carries authentic East End character — Bethnal Green Road market strip, Columbia Road (Sunday flower market nearby), and a genuine independent food scene. Safety passes cleanly on all six T1 rows.",
    history: "Historic East End — weavers' cottages, Victorian terraces, Bethnal Green tube shelter disaster of 1943. Columbia Road flower market nearby.",
    vibe: "Authentic East End residential. Bethnal Green Road is a busy, multicultural high street. Side streets are genuinely residential with Victorian terraces and newer infill.",
    weekday: "A Tuesday at 7pm: Bethnal Green Road still active with shops; commuters flowing from the tube; restaurants and pubs filling up.",
    weekend: "A Saturday: market activity, Weavers Fields busy with families and dog walkers; Columbia Road flower market nearby on Sundays.",
    notable: "Weavers Fields; Museum Gardens; V&A Museum of Childhood (Young V&A); Columbia Road nearby.",
    croydon_comparison: "Bethnal Green delivers Central Line Zone 2 access at comparable or lower rent to Croydon. The urban grain is denser but the connectivity is categorically stronger.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Central", type: "tube" },
      { name: "Overground (Weaver)", type: "overground" },
    ],
    primary_stations: [
      { name: "Bethnal Green", lines: ["Central"], walk_minutes_from_centre: 5 },
      { name: "Bethnal Green (Overground)", lines: ["Overground"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 8, canary_wharf: 15, soho_fitzrovia: 10, kings_cross_shoreditch: 11 },
    multi_cluster_score: 4,
    redundancy_score: 3,
    notes: "Central + Weaver Overground give two genuinely independent corridors at two adjacent stations. Central Line is the highest-volume tube line in the network and suffers frequent minor delays — Overground is the real redundancy asset, not cosmetic. 11-min average to anchors. All four anchors under 25 minutes. Night Tube runs Central Line Friday/Saturday.",
    sources: [
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL journey planner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://en.wikipedia.org/wiki/Bethnal_Green_tube_station", label: "Wikipedia — Bethnal Green tube station", type: "wikipedia", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 32 },
      { cohort: "30-39", pct: 20 },
      { cohort: "40-49", pct: 12 },
      { cohort: "50+", pct: 36 },
    ],
    ethnic_composition: [
      { group: "Asian or Asian British", pct: 34 },
      { group: "White — British", pct: 28 },
      { group: "White — other", pct: 15 },
      { group: "Mixed", pct: 9 },
      { group: "Other ethnic group", pct: 8 },
      { group: "Black or Black British", pct: 6 },
    ],
    household_mix: [
      { type: "Single person", pct: 32 },
      { type: "Couple with children", pct: 22 },
      { type: "Couple no children", pct: 20 },
      { type: "Shared household", pct: 12 },
      { type: "Lone parent", pct: 10 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 10,
    professional_renter_pct: 42,
    notes: "Census 2021 weighted across Bethnal Green West + East wards. BG West 20-39 at 48%, BG East 20-39 at 43% with a heavier under-20 family cohort. Bangladeshi-heritage population concentrated east of Cambridge Heath Road. Queen Mary University of London spillover at Mile End.",
    sources: [
      { url: "https://www.ons.gov.uk/census/maps/", label: "ONS Census 2021", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://www.towerhamlets.gov.uk/lgnl/community_and_living/borough_statistics/ward_profiles.aspx", label: "Tower Hamlets — ward profiles", type: "council", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "average",
    crime_vs_croydon: "safer",
    after_dark_assessment: "Bethnal Green tube station has steady foot traffic until last trains with TfL staff presence and good lighting; the Bethnal Green Road high-street strip is busy well into the evening with late-opening shops and restaurants. Side streets off the Road are genuinely quiet and residential by 21:00. No identified violent-crime hotspot around either station. The area west towards Shoreditch gets louder at weekends with nightlife crowd flow along Bethnal Green Road, but this is busy-drunk rather than hostile.",
    concerns: [],
    sources: [
      { url: "https://www.met.police.uk/a/your-area/met/tower-hamlets/bethnal-green-west/", label: "Met Police — Bethnal Green West", type: "met-police", accessed_date: "2026-04-17" },
      { url: "https://www.met.police.uk/a/your-area/met/tower-hamlets/bethnal-green-east/", label: "Met Police — Bethnal Green East", type: "met-police", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: true,
    has_dock: false,
    parks: [
      { name: "Weavers Fields", size_acres: 10, walk_minutes: 5, notes: "Green spine through residential grain — landscaped 1990s park" },
      { name: "Museum Gardens", walk_minutes: 5, notes: "Small garden adjacent to Young V&A" },
      { name: "Bethnal Green Gardens", walk_minutes: 3, notes: "Immediately at the tube station — Stairway to Heaven memorial sits here" },
      { name: "Victoria Park", size_acres: 218, walk_minutes: 15, notes: "London's oldest public park — genuine destination green space, walkable from eastern addresses" },
      { name: "Meath Gardens", walk_minutes: 12, notes: "Former burial ground, now a quiet local green" },
    ],
    overall_assessment: "Adequate-to-strong for an inner-East-End area. Weavers Fields and Museum Gardens give a genuine local green spine, and Victoria Park (218 acres, Regent's Canal frontage) is walkable in 15 minutes from eastern addresses — that is a genuinely destination-quality park. The Regent's Canal is walkable via Hackney Road.",
    sources: [
      { url: "https://www.towerhamlets.gov.uk/lgnl/leisure_and_culture/parks_and_open_spaces.aspx", label: "Tower Hamlets — parks and open spaces", type: "council", accessed_date: "2026-04-17" },
      { url: "https://en.wikipedia.org/wiki/Victoria_Park,_London", label: "Wikipedia — Victoria Park", type: "wikipedia", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Sainsbury's Local Bethnal Green Road", type: "supermarket", walk_minutes: 3, notes: "Primary daily essentials" },
      { name: "Tesco Express Bethnal Green Road", type: "supermarket", walk_minutes: 4, notes: "Secondary top-up" },
      { name: "Co-op Cambridge Heath Road", type: "supermarket", walk_minutes: 6, notes: "Alternative to Sainsbury's" },
      { name: "Turkish-led bakery/grocery cluster (Roman Road + Cambridge Heath Road)", type: "specialty grocer", walk_minutes: 8, notes: "Multiple Turkish bakeries and convenience stores" },
      { name: "Taj Stores (Brick Lane)", type: "South Asian grocer", walk_minutes: 10, notes: "Flagship Bangladeshi grocery" },
      { name: "Whitechapel Market", type: "street market", walk_minutes: 12, notes: "Fresh produce along Whitechapel Road" },
    ],
    gyms: [
      { name: "PureGym London Bethnal Green", type: "budget", walk_minutes: 5, notes: "24/7 budget tier" },
      { name: "The Gym Group Whitechapel", type: "budget", walk_minutes: 10, notes: "24/7 budget alternative" },
      { name: "York Hall Leisure Centre", type: "boxing / mixed", walk_minutes: 5, notes: "Grade II listed — amateur boxing venue plus pool and Turkish baths" },
      { name: "BLOK London (Shoreditch)", type: "boutique", walk_minutes: 15, notes: "Dance + strength boutique" },
      { name: "Third Space Liverpool Street", type: "premium", walk_minutes: 15, notes: "Walkable premium option via Bishopsgate" },
      { name: "F45 Bethnal Green / Shoreditch", type: "boutique", walk_minutes: 12, notes: "HIIT boutique" },
    ],
    food_and_drink: [
      { name: "E Pellicci", type: "Italian caff", walk_minutes: 3, notes: "Grade II listed 1900 family caff — cultural anchor" },
      { name: "The Marksman", type: "gastropub", walk_minutes: 7, notes: "Michelin Pub of the Year 2016" },
      { name: "Brick Lane Coffee / Allpress Bethnal Green", type: "specialty cafe", walk_minutes: 4, notes: "Specialty coffee cluster" },
      { name: "Bistrotheque", type: "French bistro", walk_minutes: 6, notes: "Long-running destination restaurant" },
      { name: "Oval Space / Pickle Factory", type: "music venue + bar", walk_minutes: 10, notes: "Mid-size music venue" },
      { name: "Columbia Road Sunday flower market cafes (Jones Dairy, Lily Vanilli, Campania)", type: "cafe cluster", walk_minutes: 8, notes: "Sunday brunch destination" },
    ],
    health: [
      { name: "Globe Town Surgery / Spitalfields Practice", type: "GP", walk_minutes: 5, notes: "Multiple GPs accepting new patients" },
      { name: "Boots Pharmacy Bethnal Green Road", type: "pharmacy", walk_minutes: 4, notes: "Primary pharmacy" },
      { name: "Royal London Hospital (Whitechapel)", type: "A&E / major hospital", walk_minutes: 15, notes: "Trauma centre — nearest A&E" },
    ],
    cultural: [
      { name: "Young V&A", type: "museum", walk_minutes: 5, notes: "V&A Museum of Childhood — free, reopened 2023 after £13m refurb" },
      { name: "York Hall", type: "venue", walk_minutes: 5, notes: "Grade II boxing + Turkish baths" },
      { name: "Richmix Cinema Shoreditch", type: "cinema", walk_minutes: 10, notes: "Independent + mainstream cinema" },
      { name: "Bethnal Green Working Men's Club", type: "cabaret / club", walk_minutes: 6, notes: "Alt-cabaret and club nights" },
      { name: "Bethnal Green Library", type: "library", walk_minutes: 4, notes: "Tower Hamlets public library" },
      { name: "Columbia Road Sunday flower market", type: "market", walk_minutes: 8, notes: "Weekly Sunday destination" },
    ],
    notes: "Strong daily-life amenity texture. T2.3 passes on gyms (PureGym + York Hall boxing specifically). Grocery is functional but not premium — no Waitrose or M&S Food in walking distance. Food-and-drink is a genuine strength. Cultural is strong for the tier — Young V&A is a proper free museum.",
    sources: [
      { url: "https://www.youngvam.ac.uk/", label: "Young V&A", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.timeout.com/london/things-to-do/the-best-things-to-do-in-bethnal-green", label: "Time Out — Bethnal Green", type: "press", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "active",
    investment_pipeline: "No single masterplan — regeneration here is organic and multi-developer. Headline active schemes: Broadway East / Regent's View (Berkeley Group / St William + National Grid JV, 555 homes on the former Bethnal Green gasworks canal frontage, Rogers Stirk Harbour + Partners, phased delivery 2025-2027). Bishopsgate Goodsyard (Ballymore + Hammerson consented 2023, 1,350 homes + office space, delivery through 2028). Smaller infill along Hackney Road and Cambridge Heath Road continuous.",
    recent_milestones: [
      "2023 — Young V&A reopening after £13m refurb",
      "2024 — Broadway East / Regent's View Phase 1 handover (Berkeley / St William, RSHP architecture)",
      "2024 — York Hall Turkish baths refurbishment completed",
      "2025 — Bishopsgate Goodsyard enabling works underway",
    ],
    upcoming_milestones: [
      "2026 — Broadway East / Regent's View further phases",
      "2027 — Bishopsgate Goodsyard Phase 1 completions",
    ],
    trajectory_through_2027: "Stable to ascending. Broadway East / Regent's View is delivering RSHP-authored new-build through 2026-2027. Bishopsgate Goodsyard enabling works underway — will materially shift the western edge of the area through 2027-2028. Organic gentrification continuing. Not a step-change regeneration arc like Wembley or Stratford — this is a steadily-improving mature area.",
    sources: [
      { url: "https://www.berkeleygroup.co.uk/developments/london/bethnal-green/regents-view", label: "Berkeley Group — Regent's View", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.bishopsgategoodsyard.com/", label: "Bishopsgate Goodsyard", type: "developer", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Clean pass. Ward tracks Tower Hamlets borough average. No specific violent-crime hotspot designation.",
        "1.2": "Modern rental stock present via newer infill developments.",
        "1.3": "Central Line gives direct multi-hub access; Overground adds genuine redundancy.",
        "1.4": "Active professional rental market.",
        "1.5": "Public realm in reasonable order — Weavers Fields maintained, streets well-lit.",
        "1.6": "Not in decline — young demographic skew confirms ongoing demand.",
      },
      "good",
      "T1 clean pass on all six rows.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Bethnal Green Road provides walkable daily essentials.",
        "2.2": "Grocery access present along Bethnal Green Road.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Weavers Fields and Museum Gardens provide genuine green space.",
        "2.5": "Residential side streets are calm. Main road carries some noise but residential grain is quiet.",
        "2.7": "Census 2021: West ward 48%, East ward 43% aged 20-39. Strong young-skew.",
      },
      "good",
      "T2 is solid — walkable essentials, green space, young demographic, residential calm.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "pass" },
      {
        "3.1": "Ongoing residential infill but no single flagship regeneration project.",
        "3.2": "Young V&A, Columbia Road nearby, independent food scene — genuine cultural anchors.",
        "3.3": "Distinctive East End identity — recognisable sense of place.",
        "3.4": "15-minute completeness is strong — transport, grocery, parks, culture, restaurants all walkable.",
        "3.5": "Architectural quality mixed — Victorian terraces give character but newer infill is functional rather than signature.",
        "3.6": "Good day/night rhythm — busy high street daytime, calmer residential evenings, some pub/restaurant activity.",
      },
      "good",
      "T3 is strong on identity and completeness. Architectural quality is the gap.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "pass" },
      {
        "5.1": "All four anchors under 25 minutes. 11-min average. Strong multi-cluster coverage.",
        "5.2": "Central + Overground at separate stations — genuine redundancy.",
        "5.3": "Stable to ascending trajectory.",
        "5.4": "Independent cafes, Young V&A, Weavers Fields — decent third-space options.",
      },
      "good",
      "T5 strong — excellent connectivity with genuine redundancy and third-space culture.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — T1 clean, strong T5 connectivity (11-min average), genuine East End identity. No flagship project to anchor a higher grade.",
  },

  projects: [broadwayEast],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default bethnalGreen;
