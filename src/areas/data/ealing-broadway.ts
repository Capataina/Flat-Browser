import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const ealingBroadway: Area = {
  id: "ealing-broadway",
  name: "Ealing Broadway",
  aliases: ["Ealing"],
  borough: "Ealing",
  postcodes: ["W5"],

  headline:
    "Elizabeth Line + Central + District at Zone 3 — a four-product transport hub with strong parks and a mature town centre. Peaking as the St George masterplans complete.",
  preview:
    "Ealing Broadway is a genuine four-product transport hub (Central, District, Elizabeth, GWR) at Zone 3 pricing. Walpole Park, Ealing Common, and Lammas Park give strong green access. The Filmworks and Dickens Yard masterplans are completing, making this a peaking-2025-2026 area rather than an ascending one.",

  long_form: {
    full: "Ealing Broadway benefits from the Elizabeth Line (opened 2022), Central, District, and GWR mainline services — four independent rail products at a single interchange. The Filmworks (St George / Berkeley) and Dickens Yard masterplans are the headline residential deliveries, both near completion. The town centre has a real ASB signal (Safer Streets Summer Initiative 2025, worst ASB rate in London in October 2025) concentrated around the Broadway itself, though violent crime remains below Croydon levels. Strong park access with Walpole Park, Ealing Common, and Lammas Park all within walking distance.",
    history: "Historic West London suburban centre. Elizabeth Line arrival in 2022 was the major recent infrastructure event.",
    vibe: "Suburban town centre with a strong high street, independent shops, and a real community feel. More established than regeneration-led areas.",
    weekday: "A Tuesday evening: Broadway commuter flow peaks 17:30-19:00 as Elizabeth Line / Central Line trains empty. Dickens Yard and Filmworks F&B tenants (Pergola, Heist, Gail's, Honest Burgers) run to ~22:30. Ealing Project cinema evening screenings 18:00-22:00. Questors Theatre performances run 19:30-22:00 on production nights. The residential streets south of the Broadway are quiet from ~21:00.",
    weekend: "A Saturday: Broadway shopping centre and street peak 11:00-16:00; Ealing Farmers Market (seasonal) on Leeland Road; Walpole Park weekend activity — dog walkers, families, café in the grounds of Pitzhanger; Ealing Project matinées; independent restaurants at brunch peak. Sunday is calmer — pub roasts, Ealing Common walkers, Pitzhanger gallery. Summer brings Ealing Comedy Festival in Walpole Park.",
    notable: "Pitzhanger Manor (Sir John Soane-designed, in Walpole Park). Elizabeth Line interchange.",
    croydon_comparison: "Similar suburban town-centre feel but with materially stronger transport — four independent rail products vs Croydon's two. Green access is comparable. ASB is a concern at the Broadway itself but violent crime is lower than Croydon.",
  },

  zones: ["Zone 3"],
  connectivity: {
    lines: [
      { name: "Central", type: "tube" },
      { name: "District", type: "tube" },
      { name: "Elizabeth", type: "elizabeth" },
      { name: "GWR", type: "rail" },
    ],
    primary_stations: [
      { name: "Ealing Broadway", lines: ["Central", "District", "Elizabeth", "GWR"], walk_minutes_from_centre: 3 },
    ],
    times_to_anchors: { city_of_london: 24, canary_wharf: 35, soho_fitzrovia: 18, kings_cross_shoreditch: 23 },
    multi_cluster_score: 2,
    redundancy_score: 5,
    notes: "Central + District + Elizabeth + GWR = 4 independent products. Average anchor time 25 min — right at the T5.1 boundary. Redundancy is exceptional (5/5). Elizabeth Line has materially improved anchor times; prior data anchored pre-Elizabeth.",
    sources: [
      { url: "https://tfl.gov.uk/modes/elizabeth-line/", label: "TfL — Elizabeth Line", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner — Ealing Broadway anchors", type: "tfl", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 24 },
      { cohort: "30-39", pct: 30 },
      { cohort: "40-49", pct: 19 },
      { cohort: "50+", pct: 27 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 34 },
      { group: "White — other", pct: 22 },
      { group: "Asian or Asian British", pct: 24 },
      { group: "Black or Black British", pct: 8 },
      { group: "Mixed", pct: 8 },
      { group: "Other ethnic group", pct: 4 },
    ],
    household_mix: [
      { type: "Single person", pct: 30 },
      { type: "Couple no children", pct: 23 },
      { type: "Couple with children", pct: 21 },
      { type: "Lone parent", pct: 10 },
      { type: "Shared household", pct: 12 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 7,
    professional_renter_pct: 50,
    notes: "Ealing is a family-commuter area with Elizabeth Line skew effects already visible — professional-renter share climbing since 2022. Asian share elevated by long-established Polish, Indian, and Afghan communities.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021 — Ealing Broadway ward", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: { overall: "moderate", crime_vs_borough: "above", crime_vs_croydon: "safer", after_dark_assessment: "Ealing Broadway town centre (the Broadway itself from Haven Green to The Mall) has a named ASB signal — Ealing Council ran a 'Safer Streets Summer Initiative' in 2025, and October 2025 local press reported Ealing Broadway with the worst ASB rate in London that month. However, violent crime remains below Croydon levels and the residential grain (The Grove, Mount Park Road, Walpole Park fringe) is calm and leafy.", concerns: ["ASB hotspot at Ealing Broadway town centre", "Worst ASB rate in London in October 2025", "Vodafone and O2 introduced locked-door retail policies"], sources: [
    { url: "https://www.police.uk/pu/your-area/metropolitan-police/ealing-broadway/", label: "Met Police — Ealing Broadway ward", type: "met-police", accessed_date: "2026-04-17" },
    { url: "https://www.ealing.gov.uk/info/201103/community_safety/2945/safer_streets_programme", label: "Ealing Council — Safer Streets", type: "council", accessed_date: "2026-04-17" },
  ] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [
    { name: "Walpole Park", size_acres: 28, walk_minutes: 10, notes: "Grounds of Pitzhanger Manor (Sir John Soane's country villa) — formal gardens, lake, summer programme with Ealing Comedy Festival" },
    { name: "Ealing Common", size_acres: 47, walk_minutes: 10, notes: "Large open common — cricket pitch, summer funfair, direct walking routes" },
    { name: "Lammas Park", size_acres: 25, walk_minutes: 10, notes: "Residential park with tennis, playground, pavilion" },
    { name: "Haven Green", size_acres: 5, walk_minutes: 1, notes: "Small triangular green in front of Ealing Broadway station — civic centrepiece" },
    { name: "Pitshanger Park", walk_minutes: 15, notes: "River Brent flows through — the closest the area gets to water" },
    { name: "Gunnersbury Park", size_acres: 185, walk_minutes: 20, notes: "Major park to the south on the borough boundary" },
  ], overall_assessment: "Exceptional green profile for a Zone 3 town centre. Three serious parks (Walpole 28 acres, Ealing Common 47 acres, Lammas 25 acres) all within 10 minutes walk, plus Haven Green at the station itself. Total proximate green acreage >100 acres is unusually generous for a commuter-hub town centre.", sources: [
    { url: "https://www.ealing.gov.uk/info/201077/parks_and_open_spaces/2310/walpole_park", label: "Ealing Council — Walpole Park", type: "council", accessed_date: "2026-04-17" },
  ] },
  amenities: {
    grocery: [
      { name: "M&S Ealing Broadway", type: "supermarket", walk_minutes: 3, notes: "Full M&S on the Broadway" },
      { name: "Waitrose Ealing (inside Dickens Yard)", type: "supermarket", walk_minutes: 5, notes: "New Waitrose in the Dickens Yard masterplan ground floor" },
      { name: "Sainsbury's Ealing (High Street)", type: "supermarket", walk_minutes: 5, notes: "Full-size Sainsbury's" },
      { name: "Morrisons Ealing", type: "supermarket", walk_minutes: 12, notes: "On The Broadway west" },
      { name: "Tesco Express (multiple)", type: "convenience", walk_minutes: 3, notes: "Several branches around the Broadway" },
    ],
    gyms: [
      { name: "Virgin Active Ealing", type: "mid-premium-gym", walk_minutes: 5, notes: "Inside The Mall / Ealing Shopping Centre — pool, sauna" },
      { name: "PureGym Ealing", type: "budget-gym", walk_minutes: 5, notes: "24-hour budget tier" },
      { name: "Nuffield Health Ealing", type: "mid-premium-gym", walk_minutes: 10, notes: "Pool + full classes" },
      { name: "Gym Box Ealing (in Dickens Yard)", type: "premium-gym", walk_minutes: 5, notes: "Boutique-style strong-equipment gym" },
      { name: "F45 Ealing", type: "boutique-studio", walk_minutes: 6, notes: "HIIT studio" },
      { name: "Ealing Martial Arts Centre", type: "combat-sport", walk_minutes: 12, notes: "BJJ / Muay Thai" },
    ],
    food_and_drink: [
      { name: "Ealing Broadway restaurant strip", type: "restaurant-cluster", walk_minutes: 3, notes: "Established mix — Pho, Dishoom (2024 opening), Honest Burgers, Rosa's Thai" },
      { name: "Dickens Yard ground-floor F&B", type: "restaurant-cluster", walk_minutes: 5, notes: "Newer tenant mix with Pergola, Heist, Gail's" },
      { name: "The Red Lion (St Mary's Road)", type: "historic-pub", walk_minutes: 10, notes: "Historic Ealing pub" },
      { name: "Santa Maria Pizzeria", type: "restaurant", walk_minutes: 5, notes: "Acclaimed Neapolitan pizza" },
      { name: "Gail's (Dickens Yard + Broadway)", type: "cafe", walk_minutes: 3, notes: "Two Gail's branches — premium bakery tier" },
    ],
    health: [
      { name: "Ealing Hospital", type: "hospital", walk_minutes: 25, notes: "Full NHS district general hospital — Southall-side" },
      { name: "The Mall Surgery", type: "gp", walk_minutes: 5, notes: "NHS GP inside the shopping centre" },
      { name: "Elthorne Park Health Centre", type: "gp", walk_minutes: 10, notes: "NHS GP accepting new patients" },
      { name: "Boots Ealing Broadway", type: "pharmacy", walk_minutes: 3, notes: "Flagship pharmacy" },
    ],
    cultural: [
      { name: "Pitzhanger Manor & Gallery", type: "heritage-gallery", walk_minutes: 10, notes: "Soane's restored country villa with contemporary art gallery programme — genuine cultural anchor" },
      { name: "Questors Theatre", type: "theatre", walk_minutes: 8, notes: "Community theatre with strong programming" },
      { name: "Ealing Project", type: "cinema-bar", walk_minutes: 5, notes: "Independent cinema + bar + food hall inside the Filmworks" },
      { name: "Ealing Library", type: "library", walk_minutes: 5, notes: "Well-stocked central library" },
      { name: "Ealing Comedy Festival (annual, Walpole Park)", type: "festival", walk_minutes: 10, notes: "Major summer comedy programme" },
    ],
    notes: "Ealing Broadway has a mature, established amenity stack that has tightened materially with Dickens Yard and Filmworks deliveries. Pitzhanger Manor + Questors + Ealing Project + Ealing Film Studios heritage give it real cultural identity.",
    sources: [
      { url: "https://www.pitzhanger.org.uk/", label: "Pitzhanger Manor & Gallery", type: "other", accessed_date: "2026-04-17" },
      { url: "https://ealingproject.co.uk/", label: "Ealing Project cinema / food hall", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: { status: "phased", investment_pipeline: "Dickens Yard (St George / Berkeley, ~698 homes) substantially complete. Filmworks (St George / Berkeley, ~210 homes, Ealing Project cinema) near completion. Elizabeth Line arrival 2022 was the defining infrastructure event. Total combined investment £2bn+.", recent_milestones: ["2022 — Elizabeth Line services commence at Ealing Broadway", "2023 — Dickens Yard substantially complete; Waitrose and Gail's opened", "2024 — Ealing Project cinema and food hall opened inside Filmworks", "2025 — Filmworks final phase handovers"], upcoming_milestones: ["2026 — Filmworks tail-end handovers", "2026-2027 — Elizabeth Line demand still absorbing; rent growth expected above London mean"], trajectory_through_2027: "Peaking 2025-2026 rather than continuing to ascend. Both St George masterplans are completing and there is no equivalent new masterplan queued. However the Elizabeth Line demand effect is still absorbing.", sources: [
    { url: "https://www.berkeleygroup.co.uk/developments/london/ealing/filmworks-ealing", label: "Berkeley — Filmworks", type: "developer", accessed_date: "2026-04-17" },
    { url: "https://www.berkeleygroup.co.uk/developments/london/ealing/dickens-yard", label: "Berkeley — Dickens Yard", type: "developer", accessed_date: "2026-04-17" },
  ] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "partial", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Borough rate below Croydon but Ealing Broadway town centre is a named ASB hotspot per Safer Streets 2025. Marginal pass.",
        "1.2": "Filmworks and Dickens Yard (St George / Berkeley) provide modern rental stock.",
        "1.3": "Central + District + Elizabeth + GWR — four independent rail products at a single interchange. Zone 3.",
        "1.4": "ASB is a meaningful T1.4 concern specifically at Ealing Broadway town centre.",
        "1.5": "Public realm in good order around the masterplan areas.",
        "1.6": "Not in decline — Filmworks completing, Elizabeth Line bedding in.",
      },
      "moderate",
      "T1 marginal pass. ASB hotspot at the town centre is a real concern but violent crime remains below Croydon.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "unknown", "2.3": "unknown", "2.4": "pass", "2.5": "unknown", "2.7": "unknown" },
      {
        "2.1": "Mature town centre with strong high street.",
        "2.4": "Strong green — Walpole Park (28 acres), Ealing Common (47 acres), Lammas Park all within 10 min walk.",
      },
      "moderate",
      "T2 partially populated. Strong green access confirmed; daily essentials present via mature town centre.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "pass", "3.3": "pass", "3.4": "unknown", "3.5": "unknown", "3.6": "unknown" },
      {
        "3.1": "Filmworks final phases — peaking not ascending.",
        "3.2": "Pitzhanger Manor and Gallery, strong high street, established cultural identity.",
        "3.3": "'Queen of the suburbs' — strong recognisable identity.",
      },
      "moderate",
      "T3 moderate. Strong established identity but regeneration is peaking rather than ascending.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "unknown", "5.4": "unknown" },
      {
        "5.1": "2/4 anchors ≤25 min. Average 25 min — right at boundary. City (24) and Soho (18) pass; Canary Wharf (35) and KX (23) mixed.",
        "5.2": "Redundancy 5/5 — four independent rail products. Exceptional.",
      },
      "moderate",
      "T5 moderate. Exceptional redundancy but anchor times are at the boundary.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — strong transport redundancy and green access, but ASB concern at town centre, peaking regeneration, and anchor times at the T5.1 boundary.",
  },

  projects: [
    // RESEARCH: Filmworks (St George / Berkeley) — 1-bed from ~£1,800-£1,850/mo (OnTheMarket). BTS via agents.
    // REALISM: unlikely (BTS via private landlords, standard agent referencing)
    // COST_TIER: mid-range (1-bed from ~£1,800)
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "ealing-filmworks", area_id: "ealing-broadway", name: "Ealing Filmworks", developer: "St George (Berkeley)", operator: "St George (Berkeley)", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "Headline St George residential masterplan at Ealing Broadway. Near completion.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "St George / Berkeley specification — reliably modern.",
        t4_1_amenity_package: "Not yet researched.",
        t4_4_signature_arch: "No 2024/25 jury architectural win.",
      },
    }),
    // RESEARCH: Dickens Yard (St George / Berkeley) — BTS, complete. Rental via agents.
    // REALISM: unlikely (BTS via private landlords, standard agent referencing)
    // COST_TIER: mid-range (est. similar to Filmworks £1,800-£2,000)
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "dickens-yard", area_id: "ealing-broadway", name: "Dickens Yard", developer: "St George (Berkeley)", operator: "St George (Berkeley)", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "Substantially complete St George masterplan. Established community.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "St George / Berkeley specification — reliably modern.",
        t4_1_amenity_package: "Not yet researched.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
    // RESEARCH: The Warwick — boutique BTS, under 30 units. Private landlords.
    // REALISM: unlikely (micro scheme, private landlord referencing)
    // COST_TIER: UNVERIFIED
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "the-warwick-ealing", area_id: "ealing-broadway", name: "The Warwick", developer: "unknown", operator: "Private landlords", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "Boutique low-rise scheme on Warwick Road, likely under 30 units. Completed 2025. For-sale with rental via private landlords. Minimal managed-rental implications.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "2025 boutique new-build. Likely modern specification but unverified.",
        t4_1_amenity_package: "Small boutique scheme — minimal communal amenities expected.",
        t4_4_signature_arch: "No architectural press signal.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

// ── Project external links & price transparency ──────────────────────────
const filmworks = ealingBroadway.projects.find(p => p.id === "ealing-filmworks")!;
filmworks.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/ealing/filmworks-ealing", label: "Berkeley Group — Filmworks Ealing", type: "developer", accessed_date: "2026-04-12" },
];
filmworks.rental.price_transparency = "enquire";

const dickensYard = ealingBroadway.projects.find(p => p.id === "dickens-yard")!;
dickensYard.external_links = [
  { url: "https://www.berkeleygroup.co.uk/developments/london/ealing/dickens-yard", label: "Berkeley Group — Dickens Yard", type: "developer", accessed_date: "2026-04-12" },
];
dickensYard.rental.price_transparency = "enquire";

const warwick = ealingBroadway.projects.find(p => p.id === "the-warwick-ealing")!;
warwick.external_links = [];
warwick.rental.price_transparency = "unknown";

export default ealingBroadway;
