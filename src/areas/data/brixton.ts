import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

// ── Projects ─────────────────────────────────────────────────────────
const nodeBrixton = buildProject({
  id: "node-living-brixton", area_id: "brixton", name: "Node Living Brixton", developer: "Node Living", operator: "Node Living", building_type: "BTR", living_model: "co-living", build_phase: "complete", tenure: ["rent"], realism: "achievable-with-guarantor",
  preview: "Co-living studios from ~£1,675/month, bills included. Tier 12 hospitality-style operator — qualification-friendly but not a conventional BTR tenancy.",
  amenity_tier: "decent", overall_grade: "B",
  evaluation_reasoning: {
    t2_6_building_quality: "Co-living product — compact studios with shared amenity spaces.",
    t4_1_amenity_package: "Shared amenity spaces typical of co-living operators.",
    t4_4_signature_arch: "Not signature-authored.",
  },
});
nodeBrixton.rental.price_transparency = "listed";
nodeBrixton.external_links = [
  { url: "https://node-living.com/london/node-brixton/", label: "Node Living Brixton", type: "operator", accessed_date: "2026-04-12" },
];

const somerleytonRoad = buildProject({
  id: "somerleyton-road", area_id: "brixton", name: "Somerleyton Road", developer: "Lambeth Council + Igloo / Higgins Partnerships", operator: "Lambeth Council", building_type: "Mixed", build_phase: "phased", tenure: ["rent"], realism: "blocked",
  preview: "Community-led regeneration on Coldharbour Lane near Brixton centre. 378 homes (187 affordable incl. 63 extra care). Phase 1 complete; Phase 2 from early 2026, full completion ~2030. Primarily social/affordable housing — not market rent.",
  amenity_tier: "decent", architects: ["Metropolitan Workshop", "BPTW"], overall_grade: "C",
  evaluation_reasoning: {
    t2_6_building_quality: "Phase 1 complete (Metropolitan Workshop). Phase 2 under construction (BPTW). 4-13 storeys across five buildings.",
    t4_1_amenity_package: "Community gym, Ovalhouse Theatre relocation, commercial spaces, public realm improvements.",
    t4_4_signature_arch: "Metropolitan Workshop (Phase 1) — respected practice. Not singular signature.",
  },
});

const brixton: Area = {
  id: "brixton",
  name: "Brixton",
  aliases: ["Brixton Hill", "Brixton Village"],
  borough: "Lambeth",
  postcodes: ["SW2", "SW9"],

  headline:
    "Victoria line terminus — 13 minutes to Oxford Circus. Brixton's cultural identity is one of London's strongest, but T1.1 safety is a marginal-fail and there is no flagship BTR operator. Node Living co-living is the one qualification-friendly option.",
  preview:
    "Victoria line gives strong central London access (13 min to Oxford Circus, 17 to Bank). Brixton's Caribbean-heritage cultural identity, market scene, and nightlife are genuine strengths. T1.1 safety is marginal — the safety sweep leans fail on Brixton's crime profile. No flagship BTR; Node Living Brixton (co-living, ~£1,675/month studio) is the only operator-level option.",

  long_form: {
    full: "Brixton sits 13 minutes by Victoria Line from Oxford Circus at the southern terminus, Zone 2, Lambeth. The town centre is one of London's most densely layered — Brixton Village and Market Row form a covered-market core of fishmongers, butchers, grocers and prepared-food independents; Brixton Road's day-time retail fronts the Ritzy Picturehouse on Windrush Square and the Black Cultural Archives; the night-time economy anchors on the O2 Academy (currently closed for post-crush safety rebuild, reopening expected late 2026), Electric Brixton, and a long tail of independent bars on Coldharbour Lane. The area is a genuine food-and-culture destination, not a commuter dormitory. Demographically it is mixed in every dimension: 54% aged 18-39 but a real 31% 50+ (Croydon it isn't); 34% White British + 24% Black British + 18% White-other — the Caribbean heritage that defines Brixton's cultural identity is still present but the community is ~5 points smaller than in 2011. Single-person households at 38% are the largest category. Student share ~11%, professional-renter ~42%: a young-but-not-student-dominated professional population. Transport is the single strongest structural argument for Brixton. The Victoria Line terminus means every northbound train starts empty — a seat is guaranteed at peak — and the line hits Oxford Circus (13 min), Green Park, Victoria, King's Cross, and Highbury in quick succession. Bank is 17 minutes via a single change; Canary Wharf is 25 via Green Park. Brixton also has National Rail (Southeastern, Chatham Main Line) at a separate station ~10 min walk, with a thin 2tph service to Victoria — a theoretical redundancy rather than a practical alternative. Night Tube runs Fri/Sat.",
    history: "Brixton grew from a Surrey hamlet into a Victorian middle-class suburb after the opening of Brixton Road as a new turnpike in the 1820s and the arrival of the railway in 1862. The late-Victorian and Edwardian eras saw the construction of the Granville Arcade (now Brixton Village), the Electric Avenue (one of the UK's first electrically-lit shopping streets), and the Brixton Academy (opened 1929 as the Astoria cinema). Post-war Windrush migration — Caribbean migrants arriving from 1948 and housed in deep-shelter bunkers on Clapham Common before resettling in Brixton's cheaper rented rooms — established the Black British community that defines the area's cultural identity. By the 1970s Brixton was majority Black-heritage at its core; the 1981 Brixton uprising (following the SUS-laws controversy and the New Cross fire) and the 1985 riot became defining moments in UK race-relations history.",
    vibe: "Busy, layered, self-consciously identity-aware. Brixton knows it is Brixton and performs that identity to an audience — which is both its strength and the thing Brixton-natives find suffocating. On a Saturday in the Village, you will hear four languages in as many minutes, smell jerk chicken from Fish Wings & Tings, queue for Kricket or Franco Manca, and see white-collar Clapham commuters alongside Black Brixton elders and 20-something creatives mixing in a way that feels genuinely integrated rather than performed. The pace is faster than Herne Hill but slower than Soho; the streets are louder, the music is audible, the texture is denser. The night-time economy is real and, with the O2 Academy reopening, will intensify through late 2026. The day-time economy is the quieter story — cafes around Brixton Village, office-to-remote workers at third-space coffee shops like Brunswick House and The Lounge, and a steady market-and-library rhythm along Brixton Road.",
    weekday: "Weekday mornings peak hard: the Victoria Line pulls commuters toward the station from 07:30-09:00, with queues at Pret and Caffè Nero near the tube. The market stalls along Brixton Station Road set up from 09:00; Brixton Village cafes fill by 10:00 with freelancer-and-creative laptop traffic. Lunchtime at Market Row is genuinely busy even on a Tuesday — the independents like Kricket and Honest Burgers draw a lunch crowd beyond the residential population. After 18:00 the restaurants turn over to dinner traffic; office-returnees drop into The Effra Social or Market House before continuing home. Noise level through the week is moderate-to-loud in the town centre and quickly falls off on the residential streets east of Railton Road and west of Acre Lane. For standing-desk work-from-home, the town centre cafes offer genuine third-space options that are scarce in Croydon.",
    weekend: "Saturday is the peak day. Brixton Station Road market runs Mon-Sat but saturates on Saturday; Brixton Village and Market Row are packed 11:00-16:00 and again 19:00-22:00; the Ritzy's matinee pulls cinema-goers through Windrush Square; Brockwell Park Lido has queues on warm days. Nightlife starts earlier than Friday (Electric Brixton doors from 21:00; Phonox 22:00-04:00) and the 01:00-03:00 window pulls significant late-night foot traffic on Coldharbour Lane. The Night Tube (Fri/Sat) means return journeys north don't require the bus. Sunday is genuinely quieter. Roast dinners at The Craft Beer Co Brixton, The Effra Social, or Canova Hall anchor the afternoon; the market runs reduced; Brockwell Country Show (July) and Lambeth Country Show are the calendar peaks.",
    notable: "Brixton House (Foster Wilson Size) — RIBA London Award 2023. Pop Brixton. Brixton Village and Market Row. Brixton Academy.",
    croydon_comparison: "Brixton and East Croydon's aggregate crime statistics are uncomfortably similar — both boroughs sit above London median, both town centres carry a night-time-economy crime tail. The character of the risk differs: Croydon's East Croydon station forecourt produces the specific unsafe-pedestrian experience (aggressive begging, occasional fights, North End cut-throughs to West Croydon); Brixton's Coldharbour Lane and Moorlands estate edges produce a more pub-adjacent, late-night-specific pattern rather than an all-day ambient unease. Women-walking-alone reports favour Brixton marginally over Croydon for the 19:00-23:00 window; past 02:00 both areas have specific streets to avoid. Café density and quality is a clear upgrade. Brixton Village, Franco Manca, Brunswick House, and the Ritzy café floor produce genuine working-from-home third spaces; Croydon's ground-floor retail is predominantly chicken-shops and betting-shops with a few Pret / Caffè Nero outposts. Grocery is a significant upgrade — the Village + Market Row combination is one of London's best fresh-food markets, and Tesco Acre Lane covers the weekly-shop tail. Gyms are comparable: PureGym, The Gym Group, and Brixton Rec cover the budget-to-council tier, with F45 adding boutique. No Third Space / Equinox — premium tier is absent in both areas. Transport is a clean Brixton win. Victoria Line southern terminus gets you a guaranteed seat northbound, 13 minutes to Oxford Circus, 17 to Bank. Croydon requires Southern/Overground to a central interchange, adding 15-25 minutes. Zone 2 vs Zone 5.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Victoria", type: "tube" },
      { name: "Southeastern", type: "rail" },
    ],
    primary_stations: [
      { name: "Brixton", lines: ["Victoria"], walk_minutes_from_centre: 3 },
      { name: "Brixton NR", lines: ["Southeastern"], walk_minutes_from_centre: 10 },
    ],
    times_to_anchors: { city_of_london: 17, canary_wharf: 25, soho_fitzrovia: 13, kings_cross_shoreditch: 20 },
    multi_cluster_score: 4,
    redundancy_score: 3,
    notes: "Victoria terminus + Southeastern National Rail (separate infrastructure). Redundancy 3/5. Average 18.75 min. All four anchors ≤25 min (borderline).",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Brixton North ward: 20-39 43%. Above baseline but not extreme — genuine mixed-generation community. Census 2021 via CrystalRoof.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "above", crime_vs_croydon: "similar", after_dark_assessment: "T1.1 marginal — leaning fail under the Caner reading. Lambeth borough ~148/1k. Brixton has documented crime concerns.", concerns: ["T1.1 marginal-fail from safety sweep", "T3/T4 cultural strengths collide with T1.1 concerns", "Safety sweep preserves dissent — other agents may push for pass on cultural-identity grounds"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Brockwell Park", walk_minutes: 12, notes: "Large park — Brockwell Lido" }, { name: "Ruskin Park", walk_minutes: 15, notes: "" }], overall_assessment: "Brockwell Park is a significant green asset within walking distance." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated. Brixton Village and Market Row are headline food-and-culture anchors." },
  regeneration: { status: "active", investment_pipeline: "International House and Pop Brixton facing demolition for new towers (2025 coverage).", recent_milestones: ["Brixton House — RIBA London Award 2023"], upcoming_milestones: ["International House / Pop Brixton redevelopment"], trajectory_through_2027: "Through 2027, Brixton is actively regenerating but contested. The Pope's Road dispute set a precedent that Lambeth Council will side with heritage campaigners against tower-scale interventions — which caps the pace of change but protects the market character. For a 2026-2027 renter, Brixton will feel qualitatively similar to today, with the O2 Academy reopening restoring the night-time economy and Pop Brixton site transitioning from container village to construction hoarding. The cultural identity is not at risk through Caner's visa window.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "partial", "1.3": "pass", "1.4": "partial", "1.5": "partial", "1.6": "pass" },
      {
        "1.1": "MARGINAL — leaning fail. Classic case of T3/T4 strengths colliding with T1.1 concerns.",
        "1.2": "No flagship BTR. Node Living co-living is the only managed option. Rental is individual-landlord dominated.",
        "1.3": "Victoria line at Brixton — 13 min to Oxford Circus. Strong central London access.",
        "1.4": "Node Living Brixton is the one qualification-friendly operator. Otherwise individual-landlord.",
        "1.5": "Mixed public realm — Brixton Village is well-maintained, wider area is uneven.",
        "1.6": "Not in decline — active cultural and redevelopment activity.",
      },
      "moderate",
      "T1 is the constraint. T1.1 marginal-fail, T1.4 weak BTR operator presence.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "pass", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "Brixton Village, Market Row, and the High Street provide walkable daily essentials.",
        "2.2": "Market quality is genuinely strong — fresh food, independent traders.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Brockwell Park is a significant green asset within walking distance.",
        "2.5": "Brixton is a nightlife destination — not the quietest residential environment at night.",
        "2.7": "20-39 at 43% — above baseline, genuine mixed-generation community.",
      },
      "moderate",
      "Good daily life from the market scene and Brockwell Park. Quiet-at-night is partial.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "pass" },
      {
        "3.1": "Active investment — International House / Pop Brixton redevelopment. Brixton House RIBA award.",
        "3.2": "Brixton Village, Market Row, Brixton Academy — world-class cultural anchors.",
        "3.3": "One of London's most distinctive identities. Caribbean heritage, music, food culture.",
        "3.4": "15-minute completeness is strong.",
        "3.5": "Brixton House (RIBA 2023) is the architectural highlight. Wider area is mixed.",
        "3.6": "Strong day/night rhythm — markets by day, music and nightlife by night.",
      },
      "good",
      "T3 is Brixton's great strength — one of London's most culturally distinctive areas.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "partial", "5.4": "pass" },
      {
        "5.1": "Multi-cluster score 4/5 — all four anchors ≤25 min (borderline). Average 18.75 min.",
        "5.2": "Victoria + Southeastern = two independent products. Redundancy 3/5.",
        "5.3": "Trajectory mixed — cultural ascending but T1.1 safety concern persists.",
        "5.4": "Strong third-space culture — cafes, markets, independent shops.",
      },
      "moderate",
      "Good connectivity, strong third spaces. Trajectory is the uncertain axis.",
    ),
    overall_grade: "C",
    grade_reasoning: "C — strongest cultural identity in south London alongside Peckham, strong Victoria line connectivity. But T1.1 safety is marginal-fail and no flagship BTR operator means grad-visa realism is weak. T1 floor concerns hold the grade down.",
  },

  projects: [nodeBrixton, somerleytonRoad],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default brixton;
