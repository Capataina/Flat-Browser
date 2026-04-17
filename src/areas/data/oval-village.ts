import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects (extracted for external_links + price_transparency mutation) ──

const OVAL_LINK = { url: "https://www.berkeleygroup.co.uk/developments/london/oval/oval-village", label: "Oval Village — Berkeley", type: "developer" as const, accessed_date: "2026-04-12" };

const ovalVillageCore = buildProject({
  id: "oval-village-core", area_id: "oval-village", name: "Oval Village by Berkeley", developer: "Berkeley", operator: "Berkeley", building_type: "Mixed", build_phase: "phased", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Conversion of a former gasworks site. Canal-side. Multiple residential phases delivering now.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley's reliably strong build quality across multiple phases — considered detailing, modern building services, corporate maintenance.",
    t4_1_amenity_package: "Strong shared amenities consistent with Berkeley's mid-premium standard — gym, concierge, lounges — not flagship level.",
    t4_4_signature_arch: "The preserved gasworks holder structure gives a distinctive heritage anchor but the new buildings are not signature-authored.",
  },
});
ovalVillageCore.external_links = [OVAL_LINK];
ovalVillageCore.rental.price_transparency = "enquire";
ovalVillageCore.rental.affordability = "at-budget";

const thePinnacle = buildProject({
  id: "the-pinnacle", area_id: "oval-village", name: "The Pinnacle", developer: "Berkeley", operator: "Berkeley", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Current headline phase. Strongest core ownership offer for buyers wanting Berkeley finish without the most future-facing delivery risk.",
  amenity_tier: "strong", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Current Berkeley in-delivery phase to full specification — modern services, refined layouts, corporate management.",
    t4_1_amenity_package: "Strong shared amenity package consistent with Berkeley's standard — gym, concierge, residents' lounge.",
    t4_4_signature_arch: "Not named-architect signature work.",
  },
});
thePinnacle.external_links = [OVAL_LINK];
thePinnacle.rental.price_transparency = "enquire";
thePinnacle.rental.affordability = "stretch";

const theHalo = buildProject({
  id: "the-halo", area_id: "oval-village", name: "The Halo", developer: "Berkeley", operator: "Berkeley", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Later flagship phase. The more skyline-oriented expression of Oval Village.",
  amenity_tier: "premium", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Future flagship phase — Berkeley's current specification is reliable but the building is unbuilt so quality cannot yet be verified.",
    t4_1_amenity_package: "Flagship phase expected to carry the most premium amenity package in the masterplan.",
    t4_4_signature_arch: "Signature status will depend on final architectural authorship and delivery.",
  },
});
theHalo.external_links = [OVAL_LINK];
theHalo.rental.affordability = "unclear";

const zoneOval = buildProject({
  id: "zone-oval", area_id: "oval-village", name: "Zone at Oval Village", developer: "Berkeley", operator: "Berkeley", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "achievable",
  preview: "Shared-ownership route inside the same scheme. Expands real entry points beyond pure full-market purchase.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Berkeley shared-ownership product to a modern but more standard specification than the full-market phases.",
    t4_1_amenity_package: "Decent shared amenities appropriate for a shared-ownership product — not premium.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
zoneOval.external_links = [OVAL_LINK];
zoneOval.rental.affordability = "comfortably-affordable";

const stGeorgeWharf = buildProject({
  id: "st-george-wharf", area_id: "oval-village", name: "St George Wharf", developer: "Berkeley", operator: "Berkeley", building_type: "Owner-Lease", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Established Berkeley riverside development at Vauxhall. Includes the Vauxhall Tower. More premium pricing.",
  amenity_tier: "premium", overall_grade: "A",
  evaluation_reasoning: {
    t2_6_building_quality: "Established Berkeley riverside delivery with strong build quality — modern services, Thames-facing layouts, premium finish.",
    t4_1_amenity_package: "Premium residents' amenities including pool, spa, gym, concierge — full flagship Berkeley riverside stack.",
    t4_4_signature_arch: "The Vauxhall Tower (St George Wharf Tower) is one of London's tallest residential buildings and a recognisable skyline presence, though not Pritzker-authored.",
  },
});
stGeorgeWharf.rental.price_transparency = "enquire";
stGeorgeWharf.rental.affordability = "over-budget";

const ovalVillage: Area = {
  id: "oval-village",
  name: "Oval Village",
  aliases: ["Oval", "Kennington"],
  borough: "Lambeth",
  postcodes: ["SW8", "SE11"],

  headline:
    "Berkeley conversion of a former gasworks site on the Nine Elms corridor — Zone 1 Victoria line, 4 minutes to Victoria, 7 to Oxford Circus. Underrated for the connectivity it delivers.",
  preview:
    "Persistently underrated for what its Victoria line access delivers. Vauxhall puts Victoria in 4 minutes and Oxford Circus in 7 — Zone 1 numbers at a price point that does not reflect it. Canal-side former gasworks site. Multiple phases building out over the coming years.",

  long_form: {
    full: "Oval Village sits on the Nine Elms regeneration corridor between Battersea and Elephant & Castle and is persistently underrated for what its Victoria line access delivers. Vauxhall station puts Victoria in 4 minutes and Oxford Circus in 7. The development is canal-side on a former gasworks site, with multiple phases building out over the coming years. Berkeley's build quality is reliably good and the area will continue to improve as the Nine Elms corridor matures around it. The limitation is that Oval Village has no strong independent identity — there is no destination quality to the public realm the way BPS or King's Cross has. You are getting Zone 1 at a lower price than anything further north on the corridor.",
    history: "Former gasworks site. Berkeley took on the redevelopment and has been delivering phased residential since the early 2020s.",
    vibe: "Quiet residential. Less destination-led than Nine Elms or BPS. The Oval cricket ground anchors the wider area's identity rather than the masterplan itself.",
    weekday: "A Tuesday at 7pm: quiet residential; Vauxhall is busy with commuters; the canal walk has joggers.",
    weekend: "A Saturday: cricket match days bring crowds; otherwise quiet.",
    notable: "Former gasworks holder structure preserved; Oval cricket ground nearby.",
    croydon_comparison: "Oval Village is Zone 1 with Victoria line access at a price point closer to Croydon than to Nine Elms. The trade-off is that it's quieter and less destination-led, but the connectivity is unambiguously stronger.",
  },

  zones: ["Zone 1"],
  connectivity: {
    lines: [
      { name: "Victoria", type: "tube" },
      { name: "Northern", type: "tube" },
    ],
    primary_stations: [
      { name: "Oval", lines: ["Northern"], walk_minutes_from_centre: 5 },
      { name: "Vauxhall", lines: ["Victoria", "South Western Railway"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 16, canary_wharf: 28, soho_fitzrovia: 9, kings_cross_shoreditch: 14 },
    multi_cluster_score: 4,
    redundancy_score: 3,
    notes: "Two independent tube lines at two different stations gives genuine redundancy. Northern Line failure leaves Victoria walkable; Victoria failure leaves Northern walkable. For a Zone 1 address this is a materially better transport profile than Nine Elms or BPS. Hugely under-indexed in typical press coverage.",
    sources: [
      { url: "https://tfl.gov.uk/plan-a-journey/", label: "TfL Journey Planner", type: "tfl", accessed_date: "2026-04-17" },
      { url: "https://en.wikipedia.org/wiki/Oval_tube_station", label: "Wikipedia — Oval tube station", type: "wikipedia", accessed_date: "2026-04-17" },
      { url: "https://en.wikipedia.org/wiki/Vauxhall_station", label: "Wikipedia — Vauxhall station", type: "wikipedia", accessed_date: "2026-04-17" },
    ],
  },
  demographics: {
    primary_age_cohort: "18-29",
    age_breakdown: [
      { cohort: "18-29", pct: 34 },
      { cohort: "30-39", pct: 30 },
      { cohort: "40-49", pct: 16 },
      { cohort: "50+", pct: 20 },
    ],
    ethnic_composition: [
      { group: "White — British", pct: 40 },
      { group: "White — other", pct: 22 },
      { group: "Asian or Asian British", pct: 12 },
      { group: "Black or Black British", pct: 14 },
      { group: "Mixed", pct: 7 },
      { group: "Other ethnic group", pct: 5 },
    ],
    household_mix: [
      { type: "Single person", pct: 36 },
      { type: "Couple no children", pct: 26 },
      { type: "Couple with children", pct: 14 },
      { type: "Lone parent", pct: 7 },
      { type: "Shared household", pct: 13 },
      { type: "Other", pct: 4 },
    ],
    student_pct: 8,
    professional_renter_pct: 52,
    notes: "Census 2021 confirms 20-29 as largest cohort in Oval ward. Young professional + some student presence (medical students from St Thomas'). Mix of Berkeley newbuild residents and pre-existing Kennington Georgian/Victorian conversion tenants.",
    sources: [
      { url: "https://www.ons.gov.uk/census", label: "ONS Census 2021 — Oval / Kennington wards", type: "ons", accessed_date: "2026-04-17" },
      { url: "https://data.london.gov.uk/dataset/2021-census-demography", label: "London Datastore — 2021 Census demography", type: "ons", accessed_date: "2026-04-17" },
    ],
  },
  safety: {
    overall: "safe",
    crime_vs_borough: "average",
    crime_vs_croydon: "much-safer",
    after_dark_assessment: "Safe. Vauxhall station is busy at all hours keeping the northern edge populated; Oval station has steady cricket-match-day footfall plus residential commuter flow. The Berkeley masterplan public realm is well-lit and actively maintained. No meaningful after-dark concerns on the masterplan footprint itself. The Kennington residential streets to the south are calm and well-regarded. Pre-war social housing blocks east of Kennington Park carry higher crime stats but are off-route.",
    concerns: [],
    sources: [
      { url: "https://www.police.uk/pu/your-area/metropolitan-police/lambeth/oval/", label: "Met Police — Oval", type: "met-police", accessed_date: "2026-04-17" },
      { url: "https://crimerate.co.uk/london/lambeth", label: "CrimeRate — Lambeth", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Kennington Park", size_acres: 34, walk_minutes: 10, notes: "Mature Victorian park — open grass, playground, tennis courts, One O'Clock Club, flower garden" },
      { name: "Vauxhall Park", size_acres: 8, walk_minutes: 8, notes: "Local park — lavender garden, playgrounds, model village" },
      { name: "The Oval (Kia Oval) cricket ground", walk_minutes: 5, notes: "Not a public park but a 17-acre green footprint — matchday impact on area character" },
      { name: "Spring Gardens (Vauxhall)", walk_minutes: 10, notes: "Small green space at Vauxhall station south side" },
    ],
    overall_assessment: "Moderate green. No river frontage at Oval Village itself. Two mature parks within 10 minutes — Kennington Park (34 acres, substantial) and Vauxhall Park (8 acres). The Kia Oval cricket ground adds a 17-acre green footprint that's not a public park but materially affects the area's character. Green offer is decent rather than strong.",
    sources: [
      { url: "https://www.lambeth.gov.uk/parks-and-open-spaces/kennington-park", label: "Lambeth — Kennington Park", type: "council", accessed_date: "2026-04-17" },
      { url: "https://www.kiaoval.com/", label: "The Kia Oval / Surrey CCC", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  amenities: {
    grocery: [
      { name: "Sainsbury's (Vauxhall/St George Wharf)", type: "full supermarket", walk_minutes: 8, notes: "Main grocery anchor — walkable north" },
      { name: "Tesco (Oval)", type: "supermarket", walk_minutes: 6, notes: "Near Oval station" },
      { name: "Little Waitrose Kennington", type: "premium grocery", walk_minutes: 10, notes: "" },
      { name: "Oval Village Phoenix Court retail", type: "masterplan convenience", walk_minutes: 2, notes: "Smaller retail being delivered phased inside Berkeley masterplan" },
    ],
    gyms: [
      { name: "PureGym Kennington", type: "budget chain", walk_minutes: 8, notes: "Standard budget chain" },
      { name: "The Gym Group (Vauxhall)", type: "budget chain", walk_minutes: 8, notes: "" },
      { name: "Third Space Battersea", type: "premium gym", walk_minutes: 22, notes: "Via Nine Elms — reachable but not daily" },
      { name: "Resident gyms at Oval Village, The Pinnacle, St George Wharf", type: "resident", walk_minutes: 0, notes: "Berkeley masterplan includes resident fitness facilities" },
      { name: "Surrey County Cricket Club training facilities", type: "cricket-specific", walk_minutes: 5, notes: "Kia Oval expanded its training facility to 740 sqm in 2025 — players' gym (not public access)" },
      { name: "London Mixed Martial Arts (Churchill Gardens)", type: "BJJ / kickboxing / MMA", walk_minutes: 10, notes: "St Gabriel's Church Hall — directly relevant to Caner's boxing interest" },
    ],
    food_and_drink: [
      { name: "The Oval cricket ground event-day food", type: "seasonal", walk_minutes: 5, notes: "Matchday food stalls and hospitality during summer Test/T20 season" },
      { name: "Kennington Lane / Cleaver Square pub cluster", type: "traditional pubs", walk_minutes: 10, notes: "Prince of Wales, The Tommyfield, The Dog House — a proper Kennington pub circuit" },
      { name: "Lambeth Walk / Black Prince Road cafés", type: "independent cafés", walk_minutes: 8, notes: "" },
    ],
    health: [
      { name: "Kennington Park Medical Practice", type: "NHS GP", walk_minutes: 10, notes: "" },
      { name: "Hurley Clinic Partnership (Ebenezer Street)", type: "NHS GP", walk_minutes: 12, notes: "" },
      { name: "Boots Pharmacy (Oval)", type: "pharmacy", walk_minutes: 6, notes: "" },
    ],
    cultural: [
      { name: "The Kia Oval / Surrey CCC", type: "international cricket ground", walk_minutes: 5, notes: "Home of Surrey since 1845; Tests, T20, The Hundred — the defining cultural anchor" },
      { name: "Beefeater Gin Distillery", type: "distillery tour", walk_minutes: 8, notes: "On Kennington Lane" },
      { name: "Imperial War Museum (Lambeth Road)", type: "major museum", walk_minutes: 15, notes: "Not in Oval Village but within range" },
      { name: "Newport Street Gallery (Damien Hirst)", type: "gallery", walk_minutes: 12, notes: "Hirst's collection — free entry" },
    ],
    notes: "The Kia Oval is the defining cultural anchor — matchday character is real during summer Test/T20 season but the area reverts to quiet residential out of season. Gym layer is adequate (budget chains + resident gyms) but thinner than BPS on premium options. Grocery relies on walking to Vauxhall or Oval station rather than masterplan-internal retail. The London Mixed Martial Arts gym on Churchill Gardens is directly relevant to Caner's boxing interest.",
    sources: [
      { url: "https://www.kiaoval.com/", label: "The Kia Oval / Surrey CCC", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.londonmixedmartialarts.com/", label: "London Mixed Martial Arts", type: "other", accessed_date: "2026-04-17" },
      { url: "https://www.puregym.com/gyms/london-kennington/", label: "PureGym Kennington", type: "other", accessed_date: "2026-04-17" },
    ],
  },
  regeneration: {
    status: "phased",
    investment_pipeline: "Berkeley Group Oval Village masterplan (partnership with Lambeth Council and Historic England) — 1,360 new homes, 170,000 sqft commercial, restored Grade II listed gasholder as masterplan centrepiece. Total overall delivery 2026-2028.",
    recent_milestones: [
      "2022-2023 — Phoenix Court Phase 1 launched (286 apartments)",
      "2024 — Early phases occupied; gasholder restoration advancing",
      "2025 — Zone at Oval Village (shared-ownership route) completed",
    ],
    upcoming_milestones: [
      "2026 — The Pinnacle completing (current headline phase)",
      "2027-2028 — The Halo (later flagship phase)",
      "2026-2028 — Restored gasholder final landscaping + retail delivery",
    ],
    trajectory_through_2027: "Oval Village in August 2027 will be mid-delivery with The Pinnacle complete/completing and The Halo under construction. The gasholder heritage centrepiece will be substantially delivered. The area will feel noticeably more integrated with the wider Nine Elms corridor by 2027 — the corridor itself is maturing around the masterplan. A renter arriving 2026 gets good upside from watching The Halo deliver over their tenancy. Ascending trajectory is real but slower and less visible than BPS or Nine Elms because Oval Village is a smaller scheme without a landmark anchor like the Power Station or US Embassy.",
    sources: [
      { url: "https://www.berkeleygroup.co.uk/developments/london/oval/oval-village", label: "Berkeley — Oval Village", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://www.berkeleygroup.co.uk/about-us/who-we-are/brownfield-regeneration/oval-village-case-study", label: "Berkeley — Oval Village case study", type: "developer", accessed_date: "2026-04-17" },
      { url: "https://hdawards.org/scheme/oval-village/", label: "Housing Design Awards — Oval Village", type: "other", accessed_date: "2026-04-17" },
    ],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Safe rating; Vauxhall station busy at all hours which keeps footfall high and the streets around the gasworks site well-lit. Materially safer than Croydon despite a borough average crime profile.",
        "1.2": "Oval Village by Berkeley, The Pinnacle, The Halo, Zone, and St George Wharf are all purpose-built modern stock — no pre-war presence inside the masterplan.",
        "1.3": "Victoria Line at Vauxhall (4 min to Victoria, 7 to Oxford Circus) plus Northern Line at Oval — Zone 1 with two independent lines.",
        "1.4": "Berkeley operates as the single managed developer/operator across the masterplan with corporate referencing.",
        "1.5": "Recently delivered Berkeley public realm — the gasworks holder structure is being integrated and the canal walks are maintained.",
        "1.6": "Not in decline — phased delivery continuing with The Pinnacle and The Halo in current/future phases. The wider Nine Elms corridor continues to mature around it.",
      },
      "good",
      "T1 clean.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "partial", "2.3": "pass", "2.4": "partial", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Walkable essentials are present but the on-site retail layer is still thin — the area relies on Vauxhall retail and Kennington high street rather than a dense masterplan core.",
        "2.2": "Grocery access is partial — Sainsbury's and convenience options are walkable but no signature premium grocery inside the masterplan itself.",
        "2.3": "Multiple commercial gyms within walking distance including PureGym and independent strength gyms around Vauxhall and Kennington.",
        "2.4": "Canal frontage on the gasworks site is the main feature; Vauxhall Park and Kennington Park are within 10 minutes walk. No river or major dock.",
        "2.5": "Residential streets are calm after 10pm — Vauxhall station is busy but the gasworks site itself sits off the main corridor noise.",
        "2.7": "Primary cohort 18-29 — Census 2021 confirms 20-29 as largest cohort in Oval ward. Young professional renter skew 52%.",
      },
      "moderate",
      "T2 is decent but the area is still building out the everyday amenity layer.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "partial", "3.3": "partial", "3.4": "partial", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "Berkeley masterplan in active phased delivery — The Pinnacle currently building out, The Halo a future flagship phase. Ongoing investment.",
        "3.2": "The Oval cricket ground is the only meaningful cultural anchor and sits adjacent rather than inside the masterplan; no museum, market, or destination retail.",
        "3.3": "'Oval Village' is a relatively weak standalone brand — 'Oval' and 'Kennington' carry stronger name recognition and the masterplan identity is still consolidating.",
        "3.4": "15-minute completeness is partial — supermarket, gym, park, transport all reachable but the core retail/cultural density is thinner than BPS or Elephant Park.",
        "3.5": "Architectural quality is mixed — the preserved gasworks holder gives a distinctive heritage anchor but the new buildings are functional Berkeley product rather than signature work.",
        "3.6": "Day/night rhythm is uneven — busy commuter flow at Vauxhall but the masterplan core is genuinely quiet at night outside cricket event days.",
      },
      "moderate",
      "T3 is the weak tier. No strong independent identity. The Oval cricket ground is the only meaningful anchor.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 4/5 — Victoria Line reaches Soho/Fitzrovia in 9 minutes, City in 16, KX in 14, Canary Wharf in 28. Strong anchor coverage.",
        "5.2": "Victoria + Northern are two independent tube lines at separate stations (Vauxhall + Oval) — genuine redundancy if either fails.",
        "5.3": "Ascending — multiple future phases planned and the wider Nine Elms corridor continues to mature around the masterplan.",
        "5.4": "Quiet third-space culture is thin inside the masterplan itself — Kennington high street has some cafe options but no deep bookshop/library presence.",
      },
      "good",
      "Strong T5 — Victoria + Northern give multi-cluster + redundancy, ascending trajectory.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — T1 clean, T5 strong, but T3 identity is the weak tier. Strong value play for the Zone 1 connectivity at a lower price than the rest of Nine Elms.",
  },

  // ── RESEARCH: Oval Village projects ──────────────────────────────────
  // Operator: Berkeley Group
  // Referencing: unknown (Berkeley standard referencing — not Homeppl)
  // Agreement type: ast
  // International friendly: unknown
  // Visa friendly: unknown
  // Professional guarantor: unknown
  // Open Banking: false
  // Prices: UNVERIFIED — Berkeley Oval Village does not list rental prices publicly
  //   Estimated from Zone 1 SW8 market: 1-bed ~£2,200–£2,800 pcm
  // Cost tier: premium
  // Grad visa realism: unlikely (Berkeley standard referencing, premium pricing)
  //   Zone at Oval Village: achievable (shared ownership route)
  //   St George Wharf: unlikely (premium riverside)
  // ───────────────────────────────────────────────────────────────────────

  projects: [ovalVillageCore, thePinnacle, theHalo, zoneOval, stGeorgeWharf],

  external_links: [
    { url: "https://www.berkeleygroup.co.uk/developments/london/lambeth/oval-village", label: "Oval Village (Berkeley)", type: "developer", accessed_date: "2026-04-11" },
  ],
  personal_notes: "",
  research: stubResearch("migrated-from-original-19"),
};

export default ovalVillage;
