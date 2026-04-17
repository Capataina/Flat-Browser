import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const claphamCommon: Area = {
  id: "clapham-common",
  name: "Clapham Common",
  aliases: ["Clapham", "SW4"],
  borough: "Lambeth",
  postcodes: ["SW4"],

  headline:
    "Northern line Zone 2 — 13 minutes to Tottenham Court Road. Young-professional demographic at 50% in 20-39 cohort. Clapham Common park is the green anchor. No BTR operator; nightlife cluster makes T2.5 (quiet at night) the clearest fail.",
  preview:
    "Northern line gives strong central London access. Clapham Common & Abbeville ward is 50% in the 20-39 cohort — top-skew. The Common itself is a large green anchor. T1.1 safety is a marginal pass — Clapham Town is named in Lambeth's robbery-concentration list and the weekend nightlife ASB signature is real. No flagship BTR operator.",

  long_form: {
    full: "Clapham Common is the SW4 Northern Line Zone 2 archetype — one Tube line, one large park, one big High Street with a bar and restaurant scene, and a strong young-professional demographic. The Tube offer is excellent for time-to-central: Tottenham Court Road 13 minutes direct, Bank 20 minutes, King's Cross 19 minutes, Canary Wharf 24 minutes via Stockwell-to-Jubilee. All four anchors fall inside the 25-minute threshold, putting Clapham Common at a multi-cluster score of 4 — matching the best of any Zone 2 area in this batch. The offsetting weakness is line redundancy: the Northern Line is one physical line, and a closure of any duration simply leaves residents walking 15 minutes to Clapham Junction or taking replacement buses. The park is the second defining feature — Clapham Common is 220 acres with three ponds, football and cricket pitches, a paddling pool, a bandstand, and the Omnibus Theatre at the old Clapham Library on the north edge. On weekends it absorbs the SW4/SW2 outdoor life. On weekday evenings and after dark it empties out quickly, and the park's open-bowl geometry and weak lighting make it a known soft spot for robberies at the Long Pond / bandstand edges. Clapham High Street is the area's social gravitational centre and also the source of its strongest criticism as a place for quiet living. Between 22:00-02:00 Friday and Saturday it is a dedicated night-economy cluster, with the full signature of drunk crowds, noise spill, and occasional violence. Lambeth's Violence Reduction Unit has named Clapham Town as a borough robbery concentration. The residential grid south onto Abbeville Road and east onto Clapham Park Road is notably calmer and carries a different register entirely — quieter pavements, independent cafés, bookshops, wine bars.",
    history: "Clapham grew as an 18th-century village on the south-London high ground — Clapham Common was an open manorial waste that became a public common in 1878 under the Metropolitan Commons Act. The railway reached Clapham (via Clapham Junction in 1863, and the Northern Line's Clapham Common station in 1900) and transformed the village into a London suburb. Through the late Victorian and Edwardian period, the mansion blocks around the Common and the Abbeville Road terraces were built out. Post-war Clapham declined alongside much of inner south London — by the 1970s it had a reputation as a cheap area with poor housing stock and concentrated deprivation. The 1980s-1990s arc — shorthand as 'the yuppie invasion' in older accounts — saw young professionals rediscover the area for its Tube access and proximity to the City. Through the 2000s and 2010s, Clapham's gentrification was a defining inner-South-London story; the High Street nightlife cluster and the Nappy Valley overspill from Northcote Road are both outputs of that trajectory. The area has been effectively mature for over a decade — saturation rather than ascent.",
    vibe: "Clapham Common's daytime vibe is park-and-café — on a Saturday morning Venn Street has a queue outside Gail's and the Common has twenty separate groups doing pick-up football. The evening vibe at the south and east residential grid is quiet, cared-for, middle-class-renter — Abbeville Road feels village-scale and the mansion blocks on Clapham Common South Side have the stewarded-by-long-leaseholders grain. The evening vibe at the High Street is a different area entirely — pub crawl, noise, occasional aggression, bouncer-visibility. Whether you live in 'Clapham Common' or 'Clapham' depends heavily on which side of the Tube you are on.",
    weekday: "Weekday daytime is commuter-plus-remote-worker. Tube rush at Clapham Common station in AM peak is consistent — a Northern Line Charing Cross branch departure every ~2 minutes, usually full by the second stop. Café culture is strongest at Venn Street (Gail's, Minimo, The Dairy-adjacent cafés) and on Abbeville Road. The High Street is daytime-utilitarian — Sainsbury's, Boots, chain retail. Omnibus Theatre and the Picturehouse anchor the daytime-culture layer.",
    weekend: "Saturday mornings Venn Street hosts a food-stall market, and the Common fills by 10am. The Windmill and the Common-side pubs do strong Sunday roasts. Saturday nights are the High Street's peak — club queues, pre-drinks in the pub ribbon, the noise signature that carries 200m into residential streets. Sundays are markedly quieter — Common-based recovery, brunch queues, bookshop-browsing on Abbeville Road. The day/night delta on weekends is extreme.",
    notable: "Clapham Common — large green open space. Clapham nightlife cluster along the High Street.",
    croydon_comparison: "Safer than Croydon on most residential-vectors (south of the High Street the grid is notably calm, and Lambeth borough is above-London-average but nowhere near Croydon's acute concentration) — but not 'much-safer,' because the High Street nightlife cluster and the park-after-dark issues are real and named. Café density is higher and cleaner than Croydon — Gail's, Minimo, Venn Street cluster versus Croydon's chicken-shop floor. Gym offer is the strongest of any area in this batch: Third Space Clapham is a flagship-specification premium gym five minutes from the Tube, joined by PureGym, The Gym Group, F45, Barry's Bootcamp, KOBOX all inside the footprint. Zone 2 Northern Line versus Croydon Zone 5 — TCR 13 minutes direct versus Croydon's ~35 minutes, Bank 20 minutes versus ~30 via London Bridge. Price: 1-bed at £2,000-£2,500/mo via private agents, so above Caner's £2,250 envelope at the median; no meaningful BTR qualification flexibility — standard referencing is the dominant path, which is the bigger concern than raw price. Meaningful drawback versus Croydon: Clapham's nightlife noise footprint crosses into residential streets in a way Croydon's does not, which is a genuine T2.5 fail for anyone prioritising quiet-at-home.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Northern", type: "tube" },
    ],
    primary_stations: [
      { name: "Clapham Common", lines: ["Northern"], walk_minutes_from_centre: 5 },
      { name: "Clapham Junction", lines: ["Southern", "SWR", "Overground"], walk_minutes_from_centre: 15 },
    ],
    times_to_anchors: { city_of_london: 20, canary_wharf: 24, soho_fitzrovia: 13, kings_cross_shoreditch: 19 },
    multi_cluster_score: 4,
    redundancy_score: 2,
    notes: "Northern Line both branches merge here, but still one physical line — single failure point. Clapham Junction (all Southern/SWR) is a 15-min walk. Average 18.25 min. All four anchors ≤25 min (borderline).",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Clapham Common & Abbeville ward: 20-39 50% — top-skew. Census 2021 plurality is 30-39 (prior 18-29 default was a sweep-level artefact). Strong young-professional ribbon but settled into early career rather than pre-graduation. Via CrystalRoof.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "average", crime_vs_croydon: "safer", after_dark_assessment: "Clapham Town named in Lambeth's robbery-concentration list. Weekend nightlife ASB signature is real. Residential grid away from High Street is notably calmer. Clapham Common park patchy after dark.", concerns: ["Clapham Town named in Lambeth robbery-concentration list", "Weekend nightlife ASB cluster", "T1.1 marginal pass — acceptable but not clean"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Clapham Common", walk_minutes: 3, notes: "Large open green space — the area's defining feature" }], overall_assessment: "Clapham Common is a major green asset. The park defines the area." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "complete", investment_pipeline: "", recent_milestones: [], upcoming_milestones: [], trajectory_through_2027: "Stable and mature. No major regeneration underway.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "partial", "1.3": "pass", "1.4": "fail", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "MARGINAL PASS. Clapham Town is named in Lambeth's robbery-concentration list. Weekend nightlife ASB is real.",
        "1.2": "No flagship BTR. Individual-landlord rental stock.",
        "1.3": "Northern line at Clapham Common. Clapham Junction walkable for redundancy.",
        "1.4": "No flagship BTR operator. Individual-landlord market.",
        "1.5": "Public realm is good — the Common is well-maintained, High Street is active.",
        "1.6": "Stable — not in decline.",
      },
      "moderate",
      "T1 passes but not cleanly. T1.1 marginal, T1.4 fails (no BTR operator).",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "pass", "2.5": "fail", "2.7": "pass" },
      {
        "2.1": "High Street provides walkable daily essentials.",
        "2.2": "Quality grocery access on and around the High Street.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Clapham Common is a major green asset.",
        "2.5": "FAIL — nightlife cluster makes this the clearest quiet-at-night fail in the dataset. T2.5 is a clearer fail than T1.1.",
        "2.7": "20-39 at 50% — top-skew young-professional demographic.",
      },
      "moderate",
      "Strong green space and demographics. Quiet-at-night is the clear fail.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "partial", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "No major regeneration — stable and mature.",
        "3.2": "Clapham Common park is the anchor. No museum, market, or cultural institution.",
        "3.3": "Recognisable identity — 'Clapham' is a strong London brand, though party-scene-coded.",
        "3.4": "15-minute completeness is good.",
        "3.5": "No architectural press signal. No jury architecture.",
        "3.6": "Day/night rhythm is uneven — quiet residential weekdays, busy nightlife weekends.",
      },
      "moderate",
      "T3 is moderate. Identity is strong but party-scene-coded. No architectural signal.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "partial", "5.3": "partial", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 4/5 — all four anchors ≤25 min (borderline). Average 18.25 min.",
        "5.2": "Single Northern line at station. Clapham Junction walkable but not at-station. Redundancy 2/5.",
        "5.3": "Stable rather than ascending. Mature area.",
        "5.4": "Third-space culture is thin — bar-coded rather than cafe-coded.",
      },
      "moderate",
      "Good multi-cluster reach but single-line dependency and weak third spaces.",
    ),
    overall_grade: "C",
    grade_reasoning: "C — strong young-professional demographic and Northern line access, but T1.1 marginal, T1.4 no BTR, T2.5 nightlife-noise fail, and party-scene identity. Not the upgrade Caner is looking for on the safety/quiet axis.",
  },

  projects: [
    // RESEARCH: Clapham Place — 1-bed from £2,275-£2,362/mo (Zoopla/OnTheMarket). 2-bed from £2,870/mo. Agent-managed (Savills etc).
    // REALISM: unlikely (standard agent referencing, no BTR operator, no documented flexibility)
    // COST_TIER: premium (1-bed from £2,275)
    // QUALIFICATION: agreement_type=ast, referencing_provider=unknown, international_friendly=case-by-case, visa_friendly=case-by-case
    buildProject({
      id: "clapham-place", area_id: "clapham-common", name: "Clapham Place", developer: "unknown", operator: "Agent-managed", building_type: "Build-to-Sell", build_phase: "complete", tenure: ["rent", "buy"], realism: "unlikely",
      preview: "Boutique 62-unit, 9-storey development at 340A Clapham Road, SW9. 1-bed from £2,275 pcm. 24hr concierge, Technogym gym, landscaped courtyard, communal roof terrace. Near Stockwell (Victoria) and Clapham North (Northern) stations.",
      amenity_tier: "decent", architects: ["Piperwhitlock"], overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "2024 completion. Boutique scale. Penthouses and apartments.",
        t4_1_amenity_package: "24hr concierge, Technogym gym, landscaped courtyard garden, communal roof terrace with city views.",
        t4_4_signature_arch: "Piperwhitlock — boutique practice. Not a signature headline.",
      },
    }),
    // One Clapham Junction REMOVED from this file on 2026-04-12.
    // The project is physically at Clapham Junction station (SW11, Wandsworth borough)
    // and was duplicated here AND in clapham-junction.ts. The richer entry in
    // clapham-junction.ts is authoritative (307 homes, Hawkins\Brown, Peloton hub).
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

// ── Project external links & price transparency ──────────────────────────
const claphamPlace = claphamCommon.projects.find(p => p.id === "clapham-place")!;
claphamPlace.external_links = [
  { url: "https://claphamplace.uk/", label: "Clapham Place — official site", type: "developer", accessed_date: "2026-04-12" },
];
claphamPlace.rental.price_transparency = "listed";

export default claphamCommon;
