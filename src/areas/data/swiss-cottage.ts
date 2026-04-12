import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const swissCottage: Area = {
  id: "swiss-cottage",
  name: "Swiss Cottage",
  aliases: ["Finchley Road", "South Hampstead"],
  borough: "Camden",
  postcodes: ["NW3", "NW6"],

  headline:
    "Zone 2 Jubilee + Metropolitan at Finchley Road — two lines at one station plus Overground at South Hampstead. The Quarters Swiss Cottage is the flagship Bravo building (HomeViews 4.84/5.00).",
  preview:
    "Swiss Cottage delivers Jubilee + Metropolitan lines at Finchley Road (2-minute walk), Swiss Cottage station (Jubilee, 5 min), and South Hampstead (Overground, 8 min). The Quarters Swiss Cottage is Bravo's flagship building — 103 studios, HomeViews 4.84/5.00 across 144 reviews. ~£2,000 pcm for a standard 26 sqm studio. Primrose Hill and Hampstead Heath are accessible. Safe Camden residential.",

  long_form: {
    full: "Swiss Cottage sits at the intersection of Finchley Road (Jubilee + Metropolitan) and Swiss Cottage (Jubilee), giving two-line access with Canary Wharf in ~22 minutes via Jubilee direct and TCR in ~15 minutes. South Hampstead (Overground) adds a third fallback. The Quarters Swiss Cottage is Bravo Investment House's flagship building — completed 2020 by Vascroft Contractors, 103 studios from 26 to 43 sqm, with gym, courtyard, Terra Terra restaurant, 24h security. HomeViews 4.84/5.00 across 144 reviews — the best-reviewed building in the Quarters portfolio. ~£2,000 pcm for a standard studio. The area is safe Camden residential with Primrose Hill and Hampstead Heath accessible.",
    history: "Swiss Cottage takes its name from a pub. Finchley Road has been a major north-south corridor. The area is mature residential Camden.",
    vibe: "Quiet residential with good transport links. Not destination-led — a comfortable residential base.",
    weekday: "A Tuesday at 7pm: Finchley Road station commuters. Quiet residential streets.",
    weekend: "A Saturday: Primrose Hill walk. Swiss Cottage Leisure Centre. Local cafes.",
    notable: "The Quarters Swiss Cottage (Bravo); Finchley Road Jubilee + Metropolitan interchange; Hampstead Theatre; Swiss Cottage Library.",
    croydon_comparison: "Swiss Cottage is Zone 2 with Jubilee + Metropolitan lines. More expensive than Croydon (£2,000 pcm at The Quarters) but with meaningfully better connectivity and a safe residential grain.",
  },

  zones: ["Zone 2"],
  connectivity: {
    lines: [
      { name: "Jubilee", type: "tube" },
      { name: "Metropolitan", type: "tube" },
      { name: "Overground", type: "overground" },
    ],
    primary_stations: [
      { name: "Finchley Road", lines: ["Jubilee", "Metropolitan"], walk_minutes_from_centre: 2 },
      { name: "Swiss Cottage", lines: ["Jubilee"], walk_minutes_from_centre: 5 },
      { name: "South Hampstead", lines: ["Overground"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 25, canary_wharf: 22, soho_fitzrovia: 15, kings_cross_shoreditch: 25 },
    multi_cluster_score: 3,
    redundancy_score: 3,
    notes: "Jubilee + Metropolitan at Finchley Road, but they share trackbed north of Finchley Road. Overground at South Hampstead adds a third independent corridor. Average ~22 min. Bank and Old Street are slow.",
    sources: [],
  },
  demographics: { primary_age_cohort: "30-39", age_breakdown: [], ethnic_composition: [], household_mix: [], student_pct: 0, professional_renter_pct: 0, notes: "Camden borough. Professional renter and owner-occupier mix.", sources: [] },
  safety: { overall: "safe", crime_vs_borough: "below", crime_vs_croydon: "safer", after_dark_assessment: "Safe. Quiet residential Camden. No specific safety concerns.", concerns: [], sources: [] },
  green_and_water: { has_river: false, has_canal: false, has_dock: false, parks: [{ name: "Primrose Hill", walk_minutes: 15, notes: "65 acres, iconic London viewpoint" }, { name: "Hampstead Heath", walk_minutes: 20, notes: "790 acres, further than from Kentish Town" }], overall_assessment: "Nominal green. Primrose Hill is 15 min, Heath is 20 min — accessible but not core identity." },
  amenities: { grocery: [], gyms: [], food_and_drink: [], health: [], cultural: [], notes: "Not yet populated." },
  regeneration: { status: "complete", investment_pipeline: "No major pipeline. Mature area.", recent_milestones: [], upcoming_milestones: [], trajectory_through_2027: "Plateaued. Stable residential area.", sources: [] },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "pass", "1.2": "pass", "1.3": "pass", "1.4": "pass", "1.5": "pass", "1.6": "pass" },
      {
        "1.1": "Pass. Safe residential Camden.",
        "1.2": "The Quarters Swiss Cottage is modern (2020). Modern rental stock present.",
        "1.3": "Jubilee + Metropolitan at Finchley Road. Zone 2.",
        "1.4": "The Quarters by Bravo operates here — 103 studios. Active professional rental.",
        "1.5": "Mature residential public realm in good order.",
        "1.6": "Not in decline. Stable.",
      },
      "good",
      "T1 clean.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "pass", "2.2": "pass", "2.3": "pass", "2.4": "partial", "2.5": "pass", "2.7": "pass" },
      {
        "2.1": "Finchley Road and Swiss Cottage have walkable essentials.",
        "2.2": "Grocery available on Finchley Road.",
        "2.3": "The Quarters Swiss Cottage has a 'fully fitted top spec gymnasium'. Swiss Cottage Leisure Centre nearby.",
        "2.4": "Primrose Hill 15 min, Hampstead Heath 20 min. Accessible but not core.",
        "2.5": "Quiet residential at night.",
        "2.7": "Camden borough professional renter skew.",
      },
      "good",
      "T2 strong. The Quarters provides on-site gym. Green space is accessible but not immediate.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "partial", "3.2": "partial", "3.3": "partial", "3.4": "pass", "3.5": "partial", "3.6": "partial" },
      {
        "3.1": "No active regeneration. Mature area.",
        "3.2": "Hampstead Theatre. Swiss Cottage Library. No major cultural institution.",
        "3.3": "Moderate sense of place. 'Swiss Cottage' is recognisable but not strongly destination-led.",
        "3.4": "Complete 15-minute neighbourhood.",
        "3.5": "No 2024/25 jury wins. Mature residential coverage.",
        "3.6": "Residential rhythm. Not strongly day/night differentiated.",
      },
      "moderate",
      "T3 moderate. Comfortable residential but no strong identity anchor.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "partial", "5.2": "pass", "5.3": "partial", "5.4": "partial" },
      {
        "5.1": "2/4 anchors ≤25 (Canary Wharf 22, TCR 15). Bank 25 borderline, Old Street 25 borderline. Average ~22 min.",
        "5.2": "Jubilee + Metropolitan + Overground. Three products but Jubilee + Met share trackbed. Redundancy 3/5.",
        "5.3": "Plateaued. No ascending trajectory.",
        "5.4": "Local cafes but not a standout third-space area.",
      },
      "moderate",
      "T5 moderate. Connectivity is decent but not top-tier. No trajectory.",
    ),
    overall_grade: "B",
    grade_reasoning: "B — clean T1, strong T2 daily life, but T3 identity is moderate and T5 connectivity is decent rather than outstanding. The Quarters Swiss Cottage is the headline finding — 4.84/5.00 HomeViews with strong management reviews.",
  },

  projects: [
    buildProject({
      id: "quarters-swiss-cottage", area_id: "swiss-cottage", name: "The Quarters Swiss Cottage", developer: "Bravo Investment House", operator: "Bravo Investment House", building_type: "BTR", build_phase: "complete", tenure: ["rent"], realism: "unknown",
      preview: "Bravo's flagship building — 103 studios (26–43 sqm), completed 2020, HomeViews 4.84/5.00 (144 reviews). ~£2,000 pcm standard. Gym, courtyard, Terra Terra restaurant, 24h security.",
      long_form_full: "The Quarters Swiss Cottage is Bravo Investment House's flagship building at 120 Finchley Road. Completed 2020 by Vascroft Contractors. Two buildings linked by a three-storey connecting structure — 103 studios from 26 sqm (Standard) to 43 sqm (Premium). Ground floor: Terra Terra restaurant + retail. Landscaped private courtyard with green walls and extensive green roofs. Gym described as 'fully fitted top spec' by residents. HomeViews 4.84/5.00 across 144 reviews — Location 4.9, Management 4.8, Experience 4.8, Design 4.8, Facilities 4.7, Value 4.6. Building manager Selna Franco named repeatedly. Common praise: management quality, security, cleanliness, courtyard, gym, Jubilee line proximity. Common complaints: compact rooms (standard 26 sqm), premium pricing. ~£2,000 pcm for a standard studio. Standard contract 6-month AST; 30-day minimum on serviced licence. Move-in: reservation fee (one week), reference documents within 48h, right-to-rent check, booking monies 7 days before (rent + utilities + 5 weeks' deposit). Referencing is present but opaque. No specific sound insulation complaints found — best-reviewed building for quality.",
      amenity_tier: "strong", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Newest building in portfolio (2020). Modern finishes. Reviews describe 'stunning' and 'modern and well-designed'. No recurring noise or maintenance complaints.",
        t4_1_amenity_package: "Strong — gym, courtyard garden, restaurant (Terra Terra), 24h security, CCTV, housekeeping, air conditioning, fibre broadband. No pool, no concierge desk.",
        t4_4_signature_arch: "Not signature-authored. Vascroft Contractors — good specification but not jury architecture.",
      },
    }),
    buildProject({
      id: "o2-centre-redevelopment", area_id: "swiss-cottage", name: "O2 Centre (Finchley Road Masterplan)", developer: "Landsec", operator: "unknown", building_type: "Mixed", build_phase: "future", tenure: ["rent", "buy"], realism: "unknown",
      preview: "Camden's largest planning application since King's Cross. ~1,800 homes on 14-acre site. 7+ acres of new parkland. Third Space health club, cinema, supermarket, health centre, town square. Planning approved 2023, first homes 2027, full build-out 2037+. Transformative for the area.",
      amenity_tier: "premium", overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Unbuilt — Landsec major masterplan. Quality cannot be verified but Landsec's institutional grade suggests strong delivery.",
        t4_1_amenity_package: "Premium at masterplan level — new park (7+ acres), Third Space luxury health club, cinema, supermarket, health centre, community centres, town square with restaurants, ~180,000 sq ft commercial space. Car-free development.",
        t4_4_signature_arch: "Architectural authorship not yet confirmed. The scale (Camden's largest since King's Cross) and car-free design are significant. Over 50% of site designated as parkland.",
      },
    }),
  ],

  external_links: [
    { url: "https://thequarters.co.uk/", label: "The Quarters by Bravo", type: "developer", accessed_date: "2026-04-12" },
    { url: "https://www.homeviews.com/development/the-quarters-swiss-cottage", label: "HomeViews — The Quarters Swiss Cottage", type: "other", accessed_date: "2026-04-12" },
  ],
  personal_notes: "",
  research: stubResearch("sweep-2026-04"),
};

export default swissCottage;
