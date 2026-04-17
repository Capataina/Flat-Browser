import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const theRuby = buildProject({
  id: "the-ruby", area_id: "peckham", name: "The Ruby (Ruby Triangle)", developer: "Avanton", operator: "unknown", building_type: "Mixed", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "1,152 homes across five buildings, up to 48 storeys — the first major Old Kent Road Opportunity Area development. 40%+ affordable housing. Not a dedicated BTR; rental via buy-to-let market. Phased 2027-2029.",
  amenity_tier: "decent", architects: ["Farrells"], overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Under construction — Avanton delivery. Build quality unconfirmed.",
    t4_1_amenity_package: "Community sports hall, fitness centre, public park, incubator workspace, studios.",
    t4_4_signature_arch: "Farrells is a recognised practice. 48-storey tower is a landmark form for Peckham.",
  },
});
theRuby.external_links = [
  { url: "https://avanton.co.uk/portfolio/ruby-triangle/", label: "Avanton — Ruby Triangle", type: "developer", accessed_date: "2026-04-12" },
];

const theBeca = buildProject({
  id: "the-beca", area_id: "peckham", name: "The BeCa", developer: "Avanton", operator: "Agent-managed", building_type: "Build-to-Sell", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "292 homes at 651 Old Kent Road, 18-storey tower with 170 private sale apartments. Farrells architect. Marketing suite launched March 2026. Winter 2026 completion.",
  amenity_tier: "decent", architects: ["Farrells"], overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Under construction — Avanton/Farrells delivery. 40% affordable housing.",
    t4_1_amenity_package: "Community spaces. Standard for build-to-sell.",
    t4_4_signature_arch: "Farrells — recognised practice.",
  },
});
theBeca.external_links = [
  { url: "https://thebeca.co.uk/", label: "The BeCa official site", type: "developer", accessed_date: "2026-04-12" },
  { url: "https://avanton.co.uk/portfolio/the-beca/", label: "Avanton — The BeCa", type: "developer", accessed_date: "2026-04-12" },
];

const ryeParkside = buildProject({
  id: "rye-parkside", area_id: "peckham", name: "Rye Parkside", developer: "Dominus New Homes", operator: "Agent-managed", building_type: "Build-to-Sell", build_phase: "in_delivery", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "Boutique 59-unit scheme at 40-46 Solomon's Passage, SE15. Adjacent to Peckham Rye Park. German kitchens, underfloor heating, air source heat pumps. Q1 2026 completion.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Boutique scale with premium specification — German kitchens, underfloor heating, air source heat pumps.",
    t4_1_amenity_package: "Private balconies/terraces. No communal amenity stack.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
ryeParkside.external_links = [
  { url: "https://dominusnewhomes.co.uk/projects/rye-parkside-se15/", label: "Dominus New Homes — Rye Parkside", type: "developer", accessed_date: "2026-04-12" },
];

const bermondsey = buildProject({
  id: "bermondsey-heights", area_id: "peckham", name: "Bermondsey Heights", developer: "Barratt London", operator: "Agent-managed", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
  preview: "163-unit Zone 2 development of 1, 2, and 3-bed apartments. Despite the name, marketed as near Peckham/SE15. Spring 2025 completion.",
  amenity_tier: "decent", overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Completed spring 2025. Build quality details not yet researched.",
    t4_1_amenity_package: "Not yet researched.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});

const peckham: Area = {
  id: "peckham",
  name: "Peckham",
  aliases: ["Peckham Rye"],
  borough: "Southwark",
  postcodes: ["SE15"],

  headline:
    "South London's strongest creative identity — Peckham Levels, Copeland Gallery, Bussey Building. Zone 2 Overground with four products at Peckham Rye. T1.1 safety is the dissent point: named gang infrastructure and violent-crime history.",
  preview:
    "Peckham's cultural identity is real and deep — creative spaces, independent food scene, Time Out coolest-neighbourhood heritage. But T1.1 safety carries a marginal-fail signal from the safety sweep: North Peckham estate has documented gang-violence history. No flagship BTR operator. Redundancy score 4/5 from three Overground/NR products at Peckham Rye plus Suffragette line.",

  long_form: {
    full: "Peckham sits in Southwark at Zone 2, served by Peckham Rye station (Windrush, Southeastern, Thameslink at one platform complex) and Queens Road Peckham (Suffragette line). The town centre's axis is Rye Lane — a 400m retail strip running north from Peckham Rye station to Peckham High Street, containing the densest concentration of African and Caribbean independent grocery in London alongside boutique independent restaurants, the £4.99 Peckhamplex cinema, and Peckham Library (Alsop & Störmer, 2000 Stirling Prize winner). Copeland Park and the Bussey Building just east of Rye Lane host Peckham Levels (seven-storey ex-car-park conversion, bars and workspaces), Bold Tendencies (summer rooftop arts programme with Frank's Cafe), and CLF Art Cafe (four-floor music club). This is one of London's most concentrated creative-cultural infrastructures outside Zone 1. Demographically: 56% aged 18-39, 37% Black British (London's largest single Nigerian/Ghanaian/wider-African diaspora concentration), 23% White British, 13% student, 40% professional-renter. The community skews young but is not student-dominated; lone-parent households at 14% reflect significant social-housing tenure across the ward (~40% of stock). Safety is the load-bearing weakness — the same structural problem as Brixton. Peckham ward sits in Southwark's top-3 for violent crime; North Peckham estate edges (historic gang territory) remain specific concern areas; opportunistic property crime (phone snatches) is elevated by the Rye Lane night-time economy. Reputation lags data: the 1990s-2000s gang-violence reputation is out of date by two decades, and the middle-class creative reputation has replaced it in press coverage — but the Met Police data still shows moderate-to-elevated patterns. The honest read is 'moderate' and 'above' borough — comparable to Brixton's Coldharbour ward without Brixton's Victoria Line.",
    history: "Peckham grew from a Kentish agricultural village (Saxon 'Peac-ham' = hill village) absorbed by London's south-east expansion in the 1860s-1880s when the railway arrived. The Victorian era built the Rye Lane retail strip and the terraced housing that still dominates the residential footprint. By the interwar years Peckham was a working-class retail destination with Jones & Higgins department store (closed 1980) as its anchor. Post-war, Peckham absorbed Caribbean migrants from the Windrush era (1948+) and, critically, large Nigerian and Ghanaian migrations from the 1970s onward — making Peckham one of the UK's most significant African diaspora concentrations, with Rye Lane becoming the retail expression of that community.",
    vibe: "Peckham is louder, rougher, more textured, and more creatively self-aware than Brixton. Rye Lane on a Saturday afternoon is one of the densest retail experiences in London — African grocers spilling onto the pavement, bass-heavy music from record shops, queues outside Khan's Bargains, churches converted into creative spaces, 20-something creative professionals in Forza Wine next door to a 60-year-old Nigerian fabric shop. The diversity is not performed; it is the working reality of daily commerce. Bellenden Road (west of Rye Lane) is the 'bougie Peckham' counterpoint — sourdough bakeries, General Store, artisanal butcher — serving the gentrifying middle-class pocket that has arrived since the 2010s. Queens Road (east) is rougher and less redeveloped, closer to the pre-2010s Peckham character.",
    weekday: "Weekday mornings on Rye Lane start earlier than Brixton — African-Caribbean grocers open from 07:00, Peckham High Street shops follow by 08:30. The Overground peak runs 07:45-09:00 with genuine crowding at Peckham Rye (the Windrush Line is popular for commuters to Shoreditch/Canada Wharf via a single change at Canada Water). Café culture is real on Bellenden Road and at the station-adjacent spots (Anderson & Co, Yanone); Peckham Levels' ground floor hosts working-from-home freelancers through the day. Noise through the weekday midsection is moderate on Rye Lane and low on the residential side-streets east of Bellenden Road or south of Nunhead. The late-afternoon school run (Harris Academy Peckham, multiple primaries) adds pedestrian density 15:00-16:30.",
    weekend: "Saturday peak is Rye Lane 11:00-16:00 — African grocers at saturation, Peckhamplex queues, Market Row equivalent traffic. Saturday night Bussey/Peckham Levels draw strongly from across London — not just south London residents. The 01:00-03:00 crowd-dispersal produces the late-night concerns. Sunday is quieter but not dead — Forza Wine, The Montpelier, Peckham Refreshment Rooms, and the Bellenden Road cafes anchor brunch and Sunday lunch; Peckham Rye Park fills on warm Sundays. Peckham Levels operates reduced-hours on Sundays.",
    notable: "Peckham House (Surman Weston) — RIBA London Project Architect of the Year 2024. Blenheim Grove — RIBA London Award 2025. Strong jury-architecture signal.",
    croydon_comparison: "Safety is the honest similarity. Peckham ward and East Croydon both sit above their respective borough averages; both carry specific street-level concerns; neither is categorically safer than the other on aggregate data. The character differs: Croydon's issue is the all-day ambient East Croydon station forecourt dynamic (aggressive begging, fights, drug use visible to commuters); Peckham's issue is concentrated on specific estate edges (North Peckham, Queens Road south) and late-night crowd-dispersal windows. Both require the same level of street awareness; neither is a 'safe' area in the sense Herne Hill or Earl's Court are. Café density is a significant upgrade — Bellenden Road alone outperforms Croydon's entire third-space offering, and adding Peckham Levels, Forza Wine, and the Rye Lane cluster produces genuine work-from-home infrastructure. Grocery is a mixed story: specialist African/Caribbean and discount grocery are exceptional on Rye Lane, and full-size Tesco + Morrisons + Lidl cover the weekly shop — but the premium tier (M&S Food, Waitrose) is absent, which Croydon's Whitgift Centre has. Gyms parity: PureGym + The Gym + Peckham Pulse council + Crossfit SE15 cover budget-to-specialist. No Third Space / Equinox — same gap as Brixton. Transport is the load-bearing Peckham weakness versus Croydon. Croydon's Overground/Southern/Tram combination reaches central (East Croydon to London Bridge 15-20 min, Victoria 15-25 min) with frequent services; Peckham's journey to Bank (22 min) and KX (20 min) is competitive, but Canary Wharf (28 min) and Tottenham Court Road (26 min) both underperform. Zone 2 vs Zone 5 favours Peckham on the flat, but Peckham's no-tube status means the tube-equivalent journeys often require a change.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Windrush", type: "overground" },
      { name: "Suffragette", type: "overground" },
      { name: "Southeastern", type: "rail" },
      { name: "Thameslink", type: "rail" },
    ],
    primary_stations: [
      { name: "Peckham Rye", lines: ["Windrush", "Southeastern", "Thameslink"], walk_minutes_from_centre: 5 },
      { name: "Queens Road Peckham", lines: ["Suffragette"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 22, canary_wharf: 28, soho_fitzrovia: 26, kings_cross_shoreditch: 20 },
    multi_cluster_score: 2,
    redundancy_score: 4,
    notes: "Three LO/NR products at Peckham Rye plus Suffragette line at Queens Road. No tube direct. Average 24 min. Redundancy 4/5.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Peckham ward demographic data not directly retrieved. Southwark borough young-skewed.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "above", crime_vs_croydon: "similar", after_dark_assessment: "North Peckham estate has documented gang-violence history (Peckham Boys, Ghetto Boys). Peckham ward carries violent-crime concentration above Southwark borough average.", concerns: ["Named gang infrastructure — North Peckham estate", "Violent-crime concentration above borough average", "T1.1 marginal-fail from safety sweep — dissent preserved"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Peckham Rye Park", walk_minutes: 10, notes: "Large park with Peckham Rye Common" }], overall_assessment: "Peckham Rye Park is the main green asset." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. Peckham Levels, Copeland Gallery, Bussey Building are cultural anchors." },
  regeneration: { status: "active", investment_pipeline: "Old Kent Road Opportunity Area driving major new delivery — Avanton's The Ruby (1,152 homes, 5 buildings, up to 48 storeys, 2027-2029) and The BeCa (292 homes, 2026). Town-centre public realm improvements and boutique new-build (Rye Parkside 2026). Bakerloo Line extension remains mooted but unfunded.", recent_milestones: ["Peckham House — RIBA London Project Architect of the Year 2024", "Blenheim Grove — RIBA London Award 2025"], upcoming_milestones: ["The BeCa completion (2026)", "Rye Parkside completion (Q1 2026)", "The Ruby phased delivery (2027-2029)"], trajectory_through_2027: "Through 2027, Peckham is actively regenerating at the town-centre level (public realm improvements, boutique new-build like Rye Parkside completing) and the Old Kent Road edge (Avanton towers rising). None of this will have transformed the area's character by August 2027 — it will still be recognisably Peckham, with the creative-space density and Rye Lane food-and-nightlife economy that currently defines it. The Bakerloo Line extension remains the transformative but unlikely-before-2030s catalyst. For a 2026-2027 renter, Peckham's trajectory is ascending but the improvement is incremental.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "partial", "1.3": "pass", "1.4": "fail", "1.5": "partial", "1.6": "pass" },
      {
        "1.1": "MARGINAL — leaning fail. Named gang infrastructure and specific violent-crime history. Safety sweep preserves dissent.",
        "1.2": "No flagship BTR. Rental stock is individual-landlord dominated.",
        "1.3": "Four products at Peckham Rye give genuine redundancy. Zone 2.",
        "1.4": "No flagship BTR operator. No Quintain, no Greystar, no Berkeley BTR.",
        "1.5": "Mixed — creative spaces are well-maintained, but wider public realm is uneven.",
        "1.6": "Not in decline — ascending creative trajectory, RIBA awards signal investment.",
      },
      "moderate",
      "T1 is the constraint. T1.1 safety is marginal-fail, T1.4 no BTR operator. Cultural identity is strong but T1 floor is weak.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "pass", "2.5": "partial", "2.7": "unknown" },
      {
        "2.1": "Strong independent retail and food scene — Rye Lane, Peckham Levels.",
        "2.2": "Independent food markets and grocers. Quality fresh food available.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Peckham Rye Park is a genuine green asset.",
        "2.5": "Partial — busy nightlife scene around Peckham Levels and Rye Lane can be noisy.",
        "2.7": "Direct ward demographic data not retrieved.",
      },
      "moderate",
      "Good daily life quality driven by the food-and-culture scene. Quiet-at-night is partial.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "pass", "3.6": "pass" },
      {
        "3.1": "Active investment — RIBA awards, creative space development.",
        "3.2": "Peckham Levels, Copeland Gallery, Bussey Building — genuine cultural anchors.",
        "3.3": "One of south London's most distinctive identities. Time Out coolest-neighbourhood heritage.",
        "3.4": "15-minute completeness is strong — food, culture, transport, park all walkable.",
        "3.5": "Peckham House and Blenheim Grove are RIBA jury-tier architecture.",
        "3.6": "Strong day/night rhythm — creative spaces and food by day, bars and events by night.",
      },
      "good",
      "T3 is Peckham's strength. One of the most culturally distinctive areas in London.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "pass", "5.4": "pass" },
      {
        "5.1": "Multi-cluster score 2/5 — only 2 of 4 anchors ≤25 min. Average 24 min.",
        "5.2": "Redundancy 4/5 — four products across two stations.",
        "5.3": "Ascending creative trajectory with RIBA jury recognition.",
        "5.4": "Strong third-space culture — cafes, creative spaces, galleries.",
      },
      "moderate",
      "T5 moderate — strong redundancy and third spaces but multi-cluster reach is limited.",
    ),
    overall_grade: "C",
    grade_reasoning: "C — strongest cultural identity in south London but T1.1 safety carries a marginal-fail signal and no BTR operator for grad-visa realism. The T3 strengths do not override the T1 floor concerns.",
  },

  projects: [
    theRuby,
    theBeca,
    ryeParkside,
    bermondsey,
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default peckham;
