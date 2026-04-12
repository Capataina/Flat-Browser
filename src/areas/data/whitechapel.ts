import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const whitechapel: Area = {
  id: "whitechapel",
  name: "Whitechapel",
  aliases: ["Whitechapel Road", "Royal London"],
  borough: "Tower Hamlets",
  postcodes: ["E1"],

  headline:
    "Elizabeth Line transformed Whitechapel into one of London's best-connected Zone 2 stations — 3 minutes to Canary Wharf, 8 to Tottenham Court Road, four independent lines at one interchange.",
  preview:
    "The biggest connectivity upgrade winner of the Elizabeth Line era. Four lines at one interchange give a 7.5-minute average to all four employment anchors — tied with King's Cross and Canary Wharf for best in the dataset. Zone 2 pricing with Zone 1 reach.",

  long_form: {
    full: "Whitechapel sits at the heart of Tower Hamlets and was transformed by the Elizabeth Line opening in May 2022. Four lines at one interchange (Elizabeth, District, Hammersmith & City, Overground Windrush) give it a 7.5-minute average to the four employment anchors — tied with King's Cross and Canary Wharf for the best connectivity score in the entire candidate list. The area carries the East End's layered history: Bangladeshi community, street markets, the Royal London Hospital, and now a wave of modern residential delivery. Galliard Homes has delivered the bulk of modern stock. Safety is the main concern — Whitechapel ward tracks 167 crimes per 1,000 residents, which is elevated, and synthesis reads T1.1 as close to fail under a conservative reading.",
    history: "Historic East End gateway. Whitechapel Road market has operated for centuries. The Royal London Hospital is a major institutional anchor. Elizabeth Line arrival in 2022 was the transformative event.",
    vibe: "Busy, layered, multicultural. Whitechapel Road is a sensory-dense high street with market stalls, Bangladeshi restaurants, and continuous footfall. Side streets are calmer.",
    weekday: "A Tuesday at 7pm: Whitechapel Road still busy with market activity winding down; Elizabeth Line station generating steady commuter flow; restaurants filling up.",
    weekend: "A Saturday: market in full swing; Whitechapel Gallery draws visitors; residential side streets quiet.",
    notable: "Whitechapel Gallery; Royal London Hospital; Whitechapel Market; Elizabeth Line interchange.",
    croydon_comparison: "Whitechapel delivers vastly stronger connectivity than Croydon — 8 minutes to TCR vs 40+. The trade-off is a denser, noisier urban grain and a less clean safety profile, though the ward is safer than Croydon on most metrics.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Elizabeth", type: "tube" },
      { name: "District", type: "tube" },
      { name: "Hammersmith & City", type: "tube" },
      { name: "Overground (Windrush)", type: "overground" },
    ],
    primary_stations: [
      { name: "Whitechapel", lines: ["Elizabeth", "District", "Hammersmith & City", "Overground"], walk_minutes_from_centre: 5 },
      { name: "Aldgate East", lines: ["District", "Hammersmith & City"], walk_minutes_from_centre: 12 },
    ],
    times_to_anchors: { city_of_london: 9, canary_wharf: 3, soho_fitzrovia: 8, kings_cross_shoreditch: 10 },
    multi_cluster_score: 5,
    redundancy_score: 5,
    notes: "Elizabeth + District + H&C + Overground = 4 lines at one interchange. Strongest connectivity profile of any previously-unrated area in the sweep. 7.5-min average to anchors — tied for best in dataset.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Census 2021: 20-39 cohort at 54%. Population grew 14,190 to 18,841 between 2011–2021 (+32.8%). Strong top-skew young demographic.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "above", crime_vs_croydon: "safer", after_dark_assessment: "Whitechapel Road footfall keeps the main corridor safe; side streets are quieter. Ward tracks 167/1k which is elevated.", concerns: ["Elevated ward-level crime rate at 167 per 1,000 residents", "T1.1 close to fail under conservative reading"], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [], overall_assessment: "Limited green space within immediate area." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "Ongoing delivery by Galliard Homes and others. Royal London Hospital expansion. Whitechapel Estate regeneration.", recent_milestones: ["Elizabeth Line opening May 2022"], upcoming_milestones: [], trajectory_through_2027: "Ascending. Elizabeth Line effect still being priced in.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Ward tracks 167/1k — elevated. Close to fail under conservative reading. Footfall on Whitechapel Road mitigates but side streets carry concern.",
        "1.2": "Modern rental stock present — Galliard Homes delivery, Trinity Square, and nearby Goodman's Fields cluster.",
        "1.3": "Four lines at one interchange: Elizabeth, District, H&C, Overground. Emphatic pass.",
        "1.4": "Active professional rental market with multiple operators.",
        "1.5": "Public realm improving with Elizabeth Line station upgrade and ongoing regeneration.",
        "1.6": "Not in decline — major investment continuing.",
      },
      "moderate",
      "T1 passes on all rows except T1.1 which is marginal. Safety is the concern.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "unknown", "2.4": "partial", "2.5": "partial", "2.7": "pass" },
      {
        "2.1": "Whitechapel Road provides dense walkable essentials — market, convenience stores, restaurants.",
        "2.2": "Multiple grocery options along Whitechapel Road.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Limited green space within immediate walking distance.",
        "2.5": "Whitechapel Road is noisy; residential side streets are calmer but the main corridor carries late-night activity.",
        "2.7": "Census 2021: 20-39 at 54% — top-skew. Strong pass.",
      },
      "moderate",
      "Daily essentials are strong. Green space and night quiet are the gaps.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "pass", "3.5": "partial", "3.6": "pass" },
      {
        "3.1": "Active regeneration — Elizabeth Line, Whitechapel Estate, ongoing residential delivery.",
        "3.2": "Whitechapel Gallery, Royal London Hospital, Whitechapel Market — strong cultural anchors.",
        "3.3": "Distinctive sense of place — layered East End identity with Bangladeshi community, market culture, and institutional presence.",
        "3.4": "15-minute completeness strong — transport, grocery, restaurants, health (Royal London), culture all walkable.",
        "3.5": "Architectural quality is mixed — new stock is functional rather than signature; historic fabric gives character.",
        "3.6": "Day/night rhythm is active — busy market daytime, restaurant culture evening, quieter late night on residential streets.",
      },
      "good",
      "T3 is strong — genuine sense of place, cultural anchors, and 15-minute completeness.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "pass", "5.2": "pass", "5.3": "pass", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 5/5 — 7.5-min average to all four anchors. Tied for best in dataset with King's Cross and Canary Wharf.",
        "5.2": "Four independent lines at one interchange — bomb-proof redundancy.",
        "5.3": "Ascending — Elizabeth Line effect still being priced in; ongoing regeneration.",
        "5.4": "Third-space culture exists (Whitechapel Gallery, cafes) but thinner than established creative quarters.",
      },
      "strong",
      "T5 is the headline — best-in-class connectivity. 5/5 redundancy, 7.5-min average.",
    ),
    overall_grade: "B",
    grade_reasoning: "B grade — exceptional T5 connectivity (tied for best in dataset), strong T3 identity, but T1.1 safety marginal and T2 daily-life gaps in green space and night quiet.",
  },

  projects: [
    buildProject({
      id: "whitechapel-galliard", area_id: "whitechapel", name: "Galliard Homes Whitechapel", developer: "Galliard Homes", operator: "Galliard Homes", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Galliard delivered the bulk of modern stock in Whitechapel including Trinity Square.",
      amenity_tier: "decent", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Galliard's modern delivery — functional build quality at mid-market standard.",
        t4_1_amenity_package: "Decent amenity package typical of Galliard product.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default whitechapel;
