import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const hackneyWick: Area = {
  id: "hackney-wick",
  name: "Hackney Wick",
  aliases: ["Fish Island", "Queen Elizabeth Olympic Park edge"],
  borough: "Hackney",
  postcodes: ["E9", "E15"],

  headline:
    "Creative quarter on the Olympic Park fringe with brewery culture and studio scene — but single Overground line and 24-minute average to anchors are real connectivity constraints.",
  preview:
    "Hackney Wick's creative reputation (studios, breweries, Here East, Fish Island) outpaces its resident demographics (39% aged 20-39 vs Dalston's 54%). Single Overground line gives only 1/5 redundancy. Peabody BTR (Neptune Wharf) is the main managed-rental presence. Olympic Park edge stewardship mitigates the Hackney borough safety concern.",

  long_form: {
    full: "Hackney Wick sits on the Olympic Park fringe and carries London's densest concentration of creative studio space (Fish Island, CEZ designation). The brewery scene, Here East tech campus, and canal-side grain give a distinctive post-industrial character. However, the area's creative vibe outpaces its resident demographics — 39% aged 20-39 is below Dalston or Whitechapel. The single Overground line (Mildmay) is the headline connectivity constraint: 24-minute average to anchors, 1/5 redundancy. Stratford is 2-3 stops away but requires a change. Peabody runs BTR at Neptune Wharf; Telford Homes delivered BTS (The Switch, H Wick). Safety is marginal — Olympic Park edge stewardship and the masterplan fringe mitigate but Hackney borough burglary concentration applies, especially ground-floor.",
    history: "Post-industrial canal-side area. Fish Island warehouse conversions. 2012 Olympics catalysed regeneration. CEZ (Creative Enterprise Zone) designation.",
    vibe: "Creative, post-industrial. Breweries, studios, canal walks. More visitor-driven than resident-driven character.",
    weekday: "A Tuesday at 7pm: brewery taprooms opening; Here East office workers leaving; canal towpath quiet.",
    weekend: "A Saturday: brewery crawls, studio open days, Olympic Park visitors passing through.",
    notable: "Fish Island; Here East; Crate Brewery; brewery cluster; CEZ designation; Queen Elizabeth Olympic Park adjacent.",
    croydon_comparison: "Hackney Wick offers a creative-quarter experience unavailable in Croydon but trades connectivity. Single Overground line is a weaker transport proposition than Croydon's tram + mainline rail combination.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Overground (Mildmay)", type: "overground" },
    ],
    primary_stations: [
      { name: "Hackney Wick", lines: ["Overground (Mildmay)"], walk_minutes_from_centre: 5 },
    ],
    times_to_anchors: { city_of_london: 25, canary_wharf: 17, soho_fitzrovia: 28, kings_cross_shoreditch: 25 },
    multi_cluster_score: 2,
    redundancy_score: 1,
    notes: "Single Overground line. Stratford 2-3 stops away for interchange. 23.75-min average. T5.1 partial (2/4 under 25). T5.2 fail (single line). Bus fallback to Stratford exists.",
    sources: [],
  },
  demographics: { primary_age_cohort: "18-29", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Census 2021: Hackney Wick ward 20-39 at 39%. Below creative-reputation implied level. Vibe outpaces demographics — creative scene driven by visitors not residents. Fish Island Village raising number post-Census.", sources: [] },
  safety: { overall: "moderate", crime_vs_borough: "below", crime_vs_croydon: "similar", after_dark_assessment: "Ward calmer than Dalston or Hackney Central. Olympic Park edge + stewarded masterplan fringe mitigate. Burglary concentration is a real concern for ground-floor flats specifically.", concerns: ["Hackney borough burglary concentration", "Ground-floor burglary risk specifically", "T1.1 marginal pass"], sources: [] },
  green_and_water: { has_river: false, has_canal: true, has_dock: false, parks: [{ name: "Queen Elizabeth Olympic Park", walk_minutes: 10, notes: "Adjacent — major green space" }], overall_assessment: "Canal-side location with Olympic Park adjacent. Strong green and water access." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "active", investment_pipeline: "Peabody BTR at Neptune Wharf. Fish Island Village. Here East campus. Ongoing creative-quarter development.", recent_milestones: ["Neptune Wharf delivery", "Here East campus expansion"], upcoming_milestones: [], trajectory_through_2027: "Ascending. Creative-quarter identity consolidating. Post-Olympic regeneration continuing.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "partial", "1.2": "pass", "1.3": "partial", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Marginal pass. Ward calmer than Dalston but Hackney borough burglary concentration applies. Ground-floor risk specifically.",
        "1.2": "Modern rental stock — Neptune Wharf (Peabody BTR), The Switch, H Wick (Telford Homes BTS), Fish Island Village.",
        "1.3": "Single Overground line. Fails line minimum despite adequate time average. Stratford interchange available but requires a change.",
        "1.4": "Peabody BTR + Telford Homes BTS — operators present.",
        "1.5": "Olympic Park edge stewardship keeps public realm in good order. Canal-side maintained.",
        "1.6": "Not in decline — active creative-quarter regeneration.",
      },
      "moderate",
      "T1 passes but T1.1 marginal and T1.3 partial. Single-line dependency is the structural weakness.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "partial", "2.3": "unknown", "2.4": "pass", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Walkable essentials are thinner than a traditional high street. Brewery-and-studio economy rather than retail density.",
        "2.2": "Grocery access limited within immediate area.",
        "2.3": "Gym access not yet researched.",
        "2.4": "Canal + Olympic Park adjacent. Strong green and water access.",
        "2.5": "Quiet residential area. No nightlife generator on-site.",
        "2.7": "Census 2021: 39% aged 20-39. Solid but below creative-reputation implied level.",
      },
      "moderate",
      "T2 moderate — strong green/water but thin everyday retail layer.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "pass", "3.2": "pass", "3.3": "pass", "3.4": "partial", "3.5": "pass", "3.6": "partial" },
      {
        "3.1": "Active regeneration — Neptune Wharf, Fish Island Village, Here East.",
        "3.2": "Brewery cluster, Here East, studio scene — strong creative anchors. CEZ designation.",
        "3.3": "Highly distinctive post-industrial creative-quarter identity.",
        "3.4": "15-minute completeness is partial — transport, creative, green are strong but everyday retail is thin.",
        "3.5": "Strong creative-industry architecture. CEZ designation. Fish Island warehouse conversions.",
        "3.6": "Uneven day/night rhythm — brewery taprooms busy weekday evenings and weekends, quiet otherwise.",
      },
      "good",
      "T3 strong — distinctive creative identity, architectural interest, cultural anchors.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "fail", "5.3": "pass", "5.4": "pass" },
      {
        "5.1": "24-min average. Only 2/4 anchors under 25 minutes. Passes time but fails line minimum.",
        "5.2": "Single Overground line — 1/5 redundancy. Structural weakness.",
        "5.3": "Ascending — creative-quarter identity consolidating, ongoing regeneration.",
        "5.4": "Strong third-space culture — breweries, studios, canal walks, Here East co-working.",
      },
      "moderate",
      "T5 moderate — strong third spaces and trajectory but single-line dependency is a serious constraint.",
    ),
    overall_grade: "C",
    grade_reasoning: "C grade — distinctive creative identity (strong T3) but single-line dependency (T5.2 fail, T1.3 partial) and thin everyday amenity layer are real constraints. The vibe is better than the infrastructure.",
  },

  projects: [
    buildProject({
      id: "neptune-wharf", area_id: "hackney-wick", name: "Neptune Wharf", developer: "Peabody", operator: "Peabody", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Peabody BTR on the Hackney Wick regeneration. Canal-side. Part of the Fish Island / Hackney Wick creative-quarter masterplan.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Peabody modern BTR delivery — functional build quality at housing-association-plus standard.",
        t4_1_amenity_package: "Decent amenity package for a Peabody market-rent product.",
        t4_4_signature_arch: "Not signature-authored but part of the creative-quarter architectural grain.",
      },
    }),
    buildProject({
      id: "the-switch-hackney-wick", area_id: "hackney-wick", name: "The Switch", developer: "Telford Homes", operator: "Telford Homes", building_type: "Mixed", build_phase: "complete", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Telford Homes BTS delivery in Hackney Wick.",
      amenity_tier: "decent", overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "Telford Homes modern BTS — functional mid-market build quality.",
        t4_1_amenity_package: "Decent standard amenity package.",
        t4_4_signature_arch: "Not signature-authored.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default hackneyWick;
