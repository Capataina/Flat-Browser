import type { Area } from "../types";
import { T1_CRITERIA, T2_CRITERIA, T3_CRITERIA, T5_CRITERIA, buildProject, buildTier, stubResearch } from "./helpers";

const croydon: Area = {
  id: "croydon",
  name: "Croydon",
  aliases: ["East Croydon", "West Croydon", "Central Croydon"],
  borough: "Croydon",
  postcodes: ["CR0", "CR9"],

  headline:
    "The baseline. This is where Caner currently lives — every other area in the dataset is measured against Croydon. Zone 5, ~35 minutes to the City, crime above borough average, limited walkable amenities, stalled regeneration.",
  preview:
    "The thing being upgraded from. Ten Degrees is a decent building in a mediocre area. Croydon's connectivity is better than its reputation (East Croydon is one of the busiest stations in London) but the public realm, safety, identity, and daily-life quality do not justify £3k/month all-in.",

  long_form: {
    full: "Croydon is a large outer-London borough that has been promising regeneration for over a decade without delivering the transformation its scale warrants. The Westfield development was cancelled. The high street has visible vacancy. East Croydon station is genuinely well-connected — fast trains to Victoria and London Bridge, Thameslink through-running, Overground, tram — but the area around it does not feel like it earns the connectivity premium. The Ruskin Square development (where Ten Degrees sits) is a pocket of modern stock in a sea of older commercial conversions and 1960s tower blocks. There is no waterfront, no park of note within easy walking distance, and the cultural offer is thin. The night-time economy is centred on a handful of chain bars and clubs that draw a crowd Caner does not identify with. The area is not unsafe in absolute terms, but it is noticeably rougher than the inner-London alternatives at the same price point.",
    history: "Historic market town absorbed into London in 1965. Major Victorian and Edwardian commercial centre. Post-war decline followed by waves of promised regeneration — the Croydon Vision masterplan (2006), the Westfield partnership (cancelled 2019), the Brick by Brick scandal (council housing company that went bankrupt). East Croydon has always been the transport asset; the area around it has never matched the station's quality.",
    vibe: "Functional but uninspiring. The high street has visible vacancy and the public realm is tired. Ruskin Square is a pocket of modern glass towers surrounded by 1960s concrete. The tram gives it an oddly continental feel at ground level but the surrounding streets don't follow through.",
    weekday: "A Tuesday at 7pm: commuters streaming through East Croydon, Boxpark has some after-work drinks crowd, high street is quiet, most retail closed by 6. Some anti-social behaviour around West Croydon.",
    weekend: "A Saturday at midday: Boxpark has brunch energy, Surrey Street Market is active, the rest of the centre is thin. No destination quality — nobody comes to Croydon for the weekend.",
    notable: "East Croydon station (one of the busiest in London by passenger volume). Boxpark Croydon. Surrey Street Market. Fairfield Halls (arts venue, recently refurbished). Croydon Minster.",
    croydon_comparison: "This is Croydon. The baseline against which every other area is measured.",
  },

  zones: ["Zone 5"],
  connectivity: {
    lines: [
      { name: "Southern", type: "rail" },
      { name: "Thameslink", type: "rail" },
      { name: "Overground", type: "overground" },
      { name: "Tramlink", type: "tram" },
    ],
    primary_stations: [
      { name: "East Croydon", lines: ["Southern", "Thameslink", "Overground"], walk_minutes_from_centre: 3 },
      { name: "West Croydon", lines: ["Overground", "Southern"], walk_minutes_from_centre: 8 },
    ],
    times_to_anchors: { city_of_london: 35, canary_wharf: 50, soho_fitzrovia: 40, kings_cross_shoreditch: 45 },
    multi_cluster_score: 1,
    redundancy_score: 2,
    notes: "East Croydon is fast to Victoria (15 min) and London Bridge (17 min) but slow to everything else. No tube line. Canary Wharf requires a change. Soho requires Victoria + change or Thameslink + walk. The raw connectivity is deceptive — one fast corridor does not equal multi-cluster coverage.",
    sources: [],
  },
  demographics: {
    primary_age_cohort: "30-39",
    age_breakdown: [
      { cohort: "18-29", pct: 22 },
      { cohort: "30-39", pct: 28 },
      { cohort: "40-49", pct: 20 },
      { cohort: "50+", pct: 30 },
    ],
    ethnic_composition: [],
    household_mix: [],
    student_pct: 5,
    professional_renter_pct: 30,
    notes: "Census 2021 — Croydon central wards skew older than inner London. The 30-39 cohort is the largest but 50+ is substantial. Not a young-professional-dominated area.",
    sources: [],
  },
  safety: {
    overall: "concerning",
    crime_vs_borough: "above",
    crime_vs_croydon: "similar",
    after_dark_assessment: "Croydon town centre has visible anti-social behaviour after dark, particularly around West Croydon and the high street. East Croydon station area is better-lit and busier but surrounding residential streets are quiet and dimly lit.",
    concerns: [
      "Knife crime incidents in town centre",
      "Anti-social behaviour around West Croydon",
      "High street vacancy contributes to dead zones after dark",
      "Borough crime rate above London average",
    ],
    sources: [],
  },
  green_and_water: {
    has_river: false,
    has_canal: false,
    has_dock: false,
    parks: [
      { name: "Park Hill Recreation Ground", walk_minutes: 12, notes: "Local park, limited facilities" },
      { name: "Lloyd Park", walk_minutes: 15, notes: "Larger park but not walkable from the centre" },
    ],
    overall_assessment: "No waterfront. No major park within easy walking distance of the town centre. Green space requires a tram or bus ride. This is one of Croydon's weakest dimensions.",
  },
  amenities: {
    grocery: [],
    gyms: [],
    food_and_drink: [],
    health: [],
    cultural: [],
    notes: "Boxpark Croydon provides food/drink variety. Surrey Street Market is the fresh-food highlight. PureGym and The Gym Group are present. Fairfield Halls is the cultural anchor. Overall: functional but not walkable-destination quality.",
  },
  regeneration: {
    status: "early",
    investment_pipeline: "Croydon's regeneration has been promised and deferred repeatedly. The Westfield partnership collapsed in 2019. Brick by Brick (council housing company) went bankrupt. Current pipeline is fragmented — individual sites rather than a coherent masterplan.",
    recent_milestones: [
      "Ruskin Square partially delivered (includes Ten Degrees)",
      "Fairfield Halls refurbished and reopened",
      "Boxpark Croydon opened 2016",
    ],
    upcoming_milestones: [],
    trajectory_through_2027: "Uncertain. No major masterplan is in delivery. Individual sites may progress but there is no Argent/Quintain/Lendlease-scale operator driving a coherent transformation. The area could improve incrementally but is not on an ascending arc comparable to Wembley, Stratford, or Nine Elms.",
    sources: [],
  },

  evaluation: {
    t1_foundational: buildTier(
      T1_CRITERIA,
      { "1.1": "fail", "1.2": "partial", "1.3": "pass", "1.4": "partial", "1.5": "partial", "1.6": "partial" },
      {
        "1.1": "Croydon's crime rate is above the borough average and above the London average. Visible anti-social behaviour in the town centre. Does not clear the 'demonstrably safer than Croydon' bar because it IS Croydon.",
        "1.2": "Modern stock exists (Ten Degrees, Ruskin Square) but is a small pocket surrounded by older commercial conversions and 1960s towers. Not a modern-rental-led area.",
        "1.3": "East Croydon is genuinely well-connected to Victoria and London Bridge. But Zone 5, no tube, slow to Canary Wharf and Soho. Single fast corridor, not multi-cluster.",
        "1.4": "Some managed rental (Ten Degrees, The Quarters Croydon) but not a professional BTR-dominated market. Most rental is private landlord stock.",
        "1.5": "High street has visible vacancy. Public realm is tired in places. Ruskin Square pocket is maintained; surrounding streets are mixed.",
        "1.6": "Not actively in decline but not ascending either. Regeneration has stalled repeatedly. Trajectory is flat rather than falling, but not improving at any pace.",
      },
      "fail",
      "T1 fails on safety. Croydon cannot be 'demonstrably safer than Croydon' by definition. The baseline fails its own test — which is exactly why it's being upgraded from.",
    ),
    t2_daily_life: buildTier(
      T2_CRITERIA,
      { "2.1": "partial", "2.2": "partial", "2.3": "pass", "2.4": "fail", "2.5": "partial", "2.7": "fail" },
      {
        "2.1": "Walkable essentials exist (supermarket, pharmacy, GP) but the high street quality is low. You can get what you need; you won't enjoy the walk.",
        "2.2": "Surrey Street Market is the highlight. No Waitrose, no M&S Food, no premium grocery. Aldi and Lidl dominate. Functional but not quality-led.",
        "2.3": "PureGym and The Gym Group are both present. Adequate for serious training — this is one of Croydon's genuine passes.",
        "2.4": "No waterfront. No major park within easy walking distance. Green space requires a tram ride. The weakest dimension.",
        "2.5": "Town centre has noise and anti-social behaviour issues at night. Ruskin Square is calmer but the surrounding area is not quiet.",
        "2.7": "Primary cohort is 30-39 with substantial 50+ presence. Not a young-professional-dominated area. Caner at 24 is demographically out of place.",
      },
      "weak",
      "T2 is weak. Gym access passes but green space fails, demographic fit fails, and everything else is partial at best.",
    ),
    t3_identity: buildTier(
      T3_CRITERIA,
      { "3.1": "fail", "3.2": "partial", "3.3": "partial", "3.4": "fail", "3.5": "fail", "3.6": "partial" },
      {
        "3.1": "Regeneration has stalled. No active masterplan. Westfield cancelled. Brick by Brick bankrupt. Individual sites only.",
        "3.2": "Boxpark and Fairfield Halls are the anchors. Neither is a destination that draws people from outside the area.",
        "3.3": "Croydon has name recognition but it's negative — 'I live in Croydon' does not land well. The brand is working against the area.",
        "3.4": "Not a 15-minute neighbourhood. Daily essentials are walkable but the quality and density are not there for genuine completeness.",
        "3.5": "Architectural quality is poor. 1960s towers, commercial conversions, fragmented streetscape. Ruskin Square is the only coherent modern pocket.",
        "3.6": "Daytime activity exists (Surrey Street Market, Boxpark). Evening activity is thin and night-time has anti-social behaviour issues.",
      },
      "fail",
      "T3 fails. No active regeneration, negative brand, poor architecture, incomplete neighbourhood. This is the tier that most clearly explains why Croydon feels wrong at £3k/month.",
    ),
    t5_personal: buildTier(
      T5_CRITERIA,
      { "5.1": "fail", "5.2": "partial", "5.3": "fail", "5.4": "partial" },
      {
        "5.1": "Multi-cluster score 1/5. Fast to Victoria/London Bridge corridor only. Canary Wharf, Soho, King's Cross all require changes and 40+ minutes.",
        "5.2": "Southern + Thameslink + Overground give some redundancy, but all use the same East Croydon-to-London Bridge corridor. A failure at East Croydon strands everything.",
        "5.3": "No ascending trajectory. Flat at best. The area is not getting meaningfully better through 2027.",
        "5.4": "Some café options but no deep bookshop or library culture. The cultural density is thin for quiet third-space use.",
      },
      "weak",
      "T5 is weak. Single-corridor connectivity, no trajectory, thin third-space culture.",
    ),
    overall_grade: "C",
    grade_reasoning: "C grade. T1 fails on safety (by definition — the baseline cannot be safer than itself). T3 fails on identity and regeneration. T5 is weak. The only genuine pass is gym access. Croydon is in the dataset as the calibration point — every other area should be meaningfully better than this on at least two dimensions.",
  },

  projects: [
    buildProject({
      id: "ten-degrees",
      area_id: "croydon",
      name: "Ten Degrees",
      developer: "Tide Construction",
      operator: "Greystar",
      building_type: "BTR",
      build_phase: "complete",
      tenure: ["rent"],
      realism: "achievable-with-upfront",
      preview: "Where Caner currently lives. Modular-built BTR tower managed by Greystar. Secured with 3 months upfront — a concession from the standard 6-12 month requirement. The building is decent; the area is not.",
      amenity_tier: "decent",
      overall_grade: "B",
      evaluation_reasoning: {
        t2_6_building_quality: "Modern modular construction (Tide Construction). Build quality is acceptable — not premium but functional. Known issues: thin walls between units, HVAC noise from the modular system.",
        t4_1_amenity_package: "Decent resident amenities — gym (small, not adequate for serious training), lounge, co-working space. No pool, no concierge. Standard mid-tier BTR package.",
        t4_4_signature_arch: "Not signature architecture. Modular construction is the engineering story but the building is visually generic.",
      },
    }),
    buildProject({
      id: "quarters-croydon",
      area_id: "croydon",
      name: "The Quarters Croydon",
      developer: "Bravo Investment House",
      operator: "The Quarters by Bravo",
      building_type: "BTR",
      build_phase: "complete",
      tenure: ["rent"],
      realism: "achievable",
      preview: "Extended-stay serviced studios. 151 units. 1960s office conversion. 3-month minimum stay (recently changed from monthly). No credit or background checks — just pay and move in. Cheapest option in the Croydon area at ~£900-1,100/month.",
      amenity_tier: "basic",
      overall_grade: "C",
      evaluation_reasoning: {
        t2_6_building_quality: "1960s office block conversion (St Anne House). Sound insulation is notably poor — multiple resident reviews mention thin walls. Functional but not modern standard.",
        t4_1_amenity_package: "Basic — gym (small), courtyard, laundry room, parking. No concierge, no pool, no co-working. Bills add-on £40/month.",
        t4_4_signature_arch: "Not signature. 1960s commercial conversion with no architectural distinction.",
      },
    }),
  ],

  external_links: [],
  personal_notes: "The baseline. Everything else is measured against this. Currently paying ~£3k/month all-in which is excessive for what Croydon delivers.",
  research: stubResearch("sweep-2026-04"),
};

export default croydon;
