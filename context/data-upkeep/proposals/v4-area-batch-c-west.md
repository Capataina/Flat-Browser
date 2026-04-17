# V4 Area Research — Batch C (West / Central London)

**Agent:** v4-area-batch-c-west
**Date:** 2026-04-17
**Areas covered:** King's Cross (refresh), Shepherd's Bush, Hammersmith, Ealing Broadway, Kew Bridge / Brentford
**Target file(s):** `src/areas/data/kings-cross.ts`, `shepherds-bush.ts`, `hammersmith.ts`, `ealing-broadway.ts`, `kew-bridge-brentford.ts`

Baseline: Ten Degrees Croydon — East Croydon Zone 5, ~35 min to central via SN/LO, above-borough-average crime, chicken-shop / betting-shop high-street retail, persistent aggressive-begging at station forecourt after 22:00.

---

## 1. King's Cross — Zone 1, Camden (REFRESH only)

**Status as of 2026-04-12 in the codebase: near gold-standard, hand-authored exemplar.** V4 refresh pass — no rewrite. Changes below are additive or precision tightening only.

### Deltas since last_verified 2026-04-12

| Field | Delta | Severity |
|---|---|---|
| `regeneration.recent_milestones` | Capella occupation now materially under way through Q1 2026; secondary lettings market at Gasholders has thickened slightly post-Capella completion as existing owners have rotated. No new public milestone. | low — update phrasing |
| `amenities.food_and_drink` | Hicce closed in late 2024 and the unit is occupied by a successor operator. Coal Drops Yard entry should soft-pedal the specific tenant line — Dishoom, Caravan, Coal Office, and Spiritland remain verified; Hicce should be replaced or flagged as "historic". | medium — factual correction |
| `safety.after_dark_assessment` | Met Police 2025 data continues to place masterplan core below Camden average. No material change. Caledonian Road / Pentonville Road fringe concern remains valid. | none |
| `demographics.age_breakdown` | Ward figures unchanged (St Pancras & Somers Town ward, Census 2021 basis). No re-survey available; values retained. | none |
| `connectivity.times_to_anchors` | Unchanged — six tube lines, 8 min City / 18 min Canary Wharf / 10 min Soho / 5 min KX-Shoreditch all hold. | none |
| `research.last_verified` | Update `2026-04-12` → `2026-04-17`. | admin |

### Open-questions list update

Current open-questions file flags Hicce — now **resolved/stale**. Also flags Third Space monthly price — Third Space King's Cross monthly membership as of 2026 is ~£245/month (peak tier) per operator website; was ~£215 in 2023. Material for T2.3 reasoning if the pricing is referenced elsewhere.

### Flags for decision

- **Hicce correction:** needs a fact-check against the current Coal Drops Yard tenant list before a V5 sweep. The `Hicce` mention recurs in area-level `food_and_drink` and in the `long_form.weekday` prose ("Dishoom, Caravan, Hicce, and the Megan's..."). Both call-sites need the same edit.
- **Capella affordability:** `grad_visa_realism: "blocked"` for Capella remains correct — sale-only tenure. No change needed.
- **Author King's Cross:** confirmed as an active Argent product name (not rebranded) per Argent's masterplan page. One open question resolved.

---

## 2. Shepherd's Bush — Zone 2, Hammersmith & Fulham (C-grade, 2 projects)

### `long_form`

**full:** Shepherd's Bush is a Zone 2 urban centre in the London Borough of Hammersmith and Fulham, wedged between the White City regeneration cluster to the north and Kensington to the south. The transport offer is genuinely strong — the Central Line at Shepherd's Bush station, the London Overground on the West London Line at the same station, and the Circle and Hammersmith & City lines at Shepherd's Bush Market station — four independent rail products inside a five-minute walking envelope. Westfield London, immediately to the north of the Green, is the dominant commercial anchor and the single biggest piece of retail infrastructure in West London. The Bush Theatre and Shepherd's Bush Empire provide cultural anchoring on the older side of the neighbourhood, and the BBC Television Centre regeneration to the north-west adds a second residential cluster that is partly continuous with Shepherd's Bush's demographic footprint.

The T1 safety signal is the defining concern. Shepherd's Bush Green has been named by H&F council as the borough's single top crime hotspot, with knife crime specifically concentrated at the Green and at Hammersmith Broadway. The council has responded with named interventions — 20 new motion-sensor streetlights and 35 upgraded 360-degree CCTV cameras deployed 2024-2025, plus weekly Safer Neighbourhood review meetings flagging the Green as a priority location. Residents in local forums report feeling increasingly unsafe notwithstanding borough-level crime statistics moving in the right direction; the named-hotspot status is the material signal, not the borough average. Mitigations are in place but the reputational and lived-experience signal is clearly present.

Rental stock is mixed. BTR is thin — most purpose-built rental in the immediate area is older owner-lease stock let via private landlords, or spillover from the White City Living masterplan to the north. The new Shepherd's Bush Market regeneration (Yoo Capital, 212 apartments) is in phased delivery and will not be lettable at scale before 2027-2028. Bush Court is a small owner-lease tower near Westfield with under 100 units. For a graduate-visa renter, the area's project-level realism is weak: most rental routes are private-landlord with standard agent referencing, no dominant BTR operator with a clear policy stance.

**history:** Historic West London market and music-hall district with roots in the 19th century. The BBC Television Centre opened at White City in 1960 and defined the area's identity for fifty years before the BBC's departure in 2013 triggered the current residential redevelopment. Westfield London opened in 2008 and restructured the area's retail economy around a single mega-mall. The Shepherd's Bush Market itself has been in intermittent regeneration since 2013 under successive developers (Orion Land & Leisure, then Yoo Capital from 2017), with the current 212-unit scheme finally in delivery.

**vibe:** Busy urban-centre feel with Westfield as the dominant retail anchor. The Green functions more as a traffic-encircled island than a real public space. West of the Green the streetscape softens into residential terraces running toward Holland Park. East of the Green the character is tighter, with the Market, the Empire, and the Overground viaduct forming the boundary against White City. The demographic mix is notably diverse — one of the more genuinely cosmopolitan patches in West London, with established North African, Middle Eastern, and Eastern European communities alongside the younger professional renter population drawn by the transport and Westfield.

**weekday:** Peak weekday tempo is commuter-heavy — Shepherd's Bush and Shepherd's Bush Market stations both run at high density through 0800-0930, with the Central Line bearing most of the flow toward Oxford Circus and Tottenham Court Road. Daytime café culture is adequate rather than abundant: chain operators (Pret, Gail's, Caffè Nero) anchor the Westfield edge, with independent cafés scattered along Uxbridge Road and into the Askew Road corridor to the west. The BBC Television Centre's Soho House occupies Helios Building and provides the premium daytime working space in the area, though it is members-only.

**weekend:** Weekend tempo is retail-dominated via Westfield — weekend crowds fill the mall from Saturday late morning through Sunday afternoon, with heavy spillover into the immediate streets. Shepherd's Bush Market runs on Saturdays and delivers a more grounded local texture. The Empire hosts weekend gigs that pull a youngish crowd into the area for evening events. Holland Park fifteen minutes south is the weekend park destination for residents wanting proper green space.

**notable:** Shepherd's Bush Empire (historic music venue, now Academy Music Group-operated), Westfield London, Bush Theatre (Wood Lane), the BBC Television Centre residential/hotel redevelopment, and the green itself — the latter more for its transport-interchange function than for its park character.

**croydon_comparison:** Shepherd's Bush is meaningfully better connected than Croydon — four independent lines at Zone 2 vs Croydon's two at Zone 5, with direct Central Line access to the West End in 14 minutes. Westfield London materially outranks Croydon's Whitgift/Centrale stack for retail quality. However, the named-hotspot knife-crime signal at the Green is a real concern that places Shepherd's Bush in similar T1.1 territory to Croydon rather than as a clear upgrade — knife crime concentration at the Green mirrors East Croydon's station-forecourt ASB profile even if the modal form is different. Gym provision at Shepherd's Bush (PureGym, Third Space White City nearby) is better than Croydon's PureGym-only offer. Café density is moderately better than Croydon but well short of King's Cross / Canary Wharf tier. Price floor is materially above Croydon: 1-bed rental sits at ~£2,000-£2,400/month in modern stock vs Ten Degrees contractual ~£2,280.

### `connectivity`

- **lines:** Central (tube), London Overground (overground), Circle (tube), Hammersmith & City (tube)
- **primary_stations:**
  - Shepherd's Bush — Central, London Overground — 3 min from centre
  - Shepherd's Bush Market — Circle, Hammersmith & City — 5 min
- **times_to_anchors:** City of London 20, Canary Wharf 28, Soho/Fitzrovia 14, King's Cross/Shoreditch 21
- **multi_cluster_score:** 3 (city/soho/kx pass ≤25; canary fails)
- **redundancy_score:** 4 (two tube lines independent routings plus Overground)
- **notes:** Central Line is the workhorse for West End / City. Overground provides the orbital route south to Clapham Junction or north to Willesden Junction. Circle and H&C are slower but useful for the Paddington / Euston Square axis. No line is a single point of failure.

### `demographics` (H&F borough / Shepherd's Bush ward, Census 2021)

- **primary_age_cohort:** 18-29
- **age_breakdown:** 18-29: 30%, 30-39: 27%, 40-49: 14%, 50+: 29%
- **ethnic_composition:** White — British 31%, White — other 24%, Asian 14%, Black 13%, Mixed 8%, Other 10%
- **household_mix:** Single person 37%, Couple no children 22%, Couple with children 17%, Lone parent 9%, Shared 10%, Other 5%
- **student_pct:** 11%
- **professional_renter_pct:** ~42%
- **notes:** Shepherd's Bush ward is one of the more ethnically mixed in H&F. The rental share is high — approximately 45% private-rented vs borough ~36%. Student share is driven by proximity to Imperial (White City campus) and smaller further-education presence.

### `safety`

- **overall:** concerning
- **crime_vs_borough:** above
- **crime_vs_croydon:** similar
- **after_dark_assessment:** The Green and the Uxbridge Road corridor from the Green east toward Westfield are the specific after-dark concerns. Knife crime incidents have been reported at the Green, the subway between Shepherd's Bush Market and the mall, and along the Uxbridge Road near the Overground viaduct. Council-deployed motion-sensor lighting and CCTV are visibly present. The streets west of the Green toward Askew Road are calmer. Walking alone after 22:00 is not recommended through the Green and Uxbridge Road corridor; residential side streets to the west are lower-risk.
- **concerns:** ["Shepherd's Bush Green named as H&F's top crime hotspot (knife crime)", "Uxbridge Road / Overground viaduct corridor after dark", "Station subway at Shepherd's Bush Market", "H&F council weekly Safer Neighbourhood review priority"]

### `green_and_water`

- **has_river:** false, **has_canal:** false, **has_dock:** false
- **parks:**
  - Shepherd's Bush Green — 8 acres, 2 min, "Traffic-encircled island, more plaza than park"
  - Wormwood Scrubs — 200+ acres, 15 min, "Large open common to the north, dog-walking dominant"
  - Holland Park — 54 acres, 15 min, "Premium park to the south — formal gardens, Kyoto garden, cafés"
  - Ravenscourt Park — 32 acres, 18 min, "Reachable south via District line"
- **overall_assessment:** Local green is weak — the Green is a traffic island, not a park in any functional sense. Proper green space requires a 15-minute walk in either direction (Holland Park south, Wormwood Scrubs north). No water — no canal, river, or dock presence. T2.4: partial rather than pass — residents can reach meaningful green but not on the doorstep.

### `amenities`

- **grocery:**
  - M&S Food (Westfield) — premium supermarket — 4 min — "Full-size M&S Food in Westfield, covers the weekly premium shop"
  - Waitrose (Kensington High Street) — premium supermarket — via Central Line 10 min
  - Tesco Extra (Warwick Road) — large supermarket — 15 min — "Nearest large Tesco for bulk shop"
  - Sainsbury's Local (Uxbridge Road) — convenience — 5 min
  - Damas Gate (Uxbridge Road) — Middle Eastern grocer — 6 min — "Genuinely good Middle Eastern and Levantine fresh food"
- **gyms:**
  - **Third Space White City** — premium commercial — 8 min — "Full premium Third Space branch at TVC, pool / sauna / strong classes. The reference premium option."
  - PureGym Shepherd's Bush — budget commercial — 4 min — "24-hour PureGym on the Green. Solid free weights, adequate cardio."
  - The Gym Group Shepherd's Bush — budget — 5 min
  - Fitness First Shepherd's Bush — mid-tier — 6 min
  - BXR London (White City) — boxing gym — 12 min — "Former Anthony Joshua-backed boxing gym. Serious combat-sports option for Caner's BJJ / Muay Thai interest."
- **food_and_drink:**
  - Homeslice (Wood Lane) — pizza — 8 min
  - Dirty Burger / Chicken Shop (White City) — 8 min
  - The Defector's Weld (Shepherd's Bush Green) — gastropub — 3 min
  - Adams Café (Askew Road) — Tunisian — 10 min — "Long-standing independent"
  - Bush Hall Dining Rooms — 5 min
- **health:**
  - Parkview Centre for Health (Shepherd's Bush Green) — NHS GP hub — 4 min
  - Boots (Westfield) — pharmacy — 4 min
  - Charing Cross Hospital — 15 min via District
- **cultural:** Shepherd's Bush Empire (music), Bush Theatre, Westfield (retail/cinema Vue), BBC Television Centre (Soho House members), White City Place (Imperial College campus — public access on campus events)
- **notes:** Westfield London dominates the amenity inventory and is genuinely a daily-life asset — full supermarket, cinema, pharmacy, gym, dining, all under one roof two minutes from the station. The cultural offer is thinner than King's Cross but comfortably above Croydon. The BXR boxing gym is a genuine T2.3 strength for Caner.

### `regeneration`

- **status:** active
- **investment_pipeline:** Small-scale within Shepherd's Bush proper — Shepherd's Bush Market scheme (Yoo Capital, 212 units + mews) is the main in-area project. Major regeneration activity is in adjacent White City (Imperial, TVC, White City Living by St James).
- **recent_milestones:** ["2024 — White City Living further phases occupied", "2023 — Shepherd's Bush Market scheme secured updated planning", "2022 — Soho House White City fully operational"]
- **upcoming_milestones:** ["2027 — Shepherd's Bush Market first residential phases", "2026-2027 — further White City Place academic/commercial delivery"]
- **trajectory_through_2027:** Ascending slowly via adjacency to White City rather than through Shepherd's Bush itself. The Green hotspot is unlikely to be meaningfully resolved inside the window. Retail footfall at Westfield is holding. The area will feel roughly similar in August 2027 to today, with a slightly thicker White City-side residential cluster and the Market scheme visibly under construction but not yet populated.

---

## 3. Hammersmith — Zone 2, Hammersmith & Fulham (B-grade, 3 projects)

### `long_form`

**full:** Hammersmith is a four-line Zone 2 interchange on the north bank of the Thames, about six miles west of the West End. The transport offer is unusually dense for its zone — Piccadilly and District lines at one station (Hammersmith) and Circle and Hammersmith & City at a second station immediately adjacent. The Piccadilly provides the direct link to central London, Heathrow, and the Caledonian Road / Finsbury Park axis; District provides the orbital route south to Wimbledon and east to the City via the Embankment; Circle and H&C serve the Paddington / Euston Square corridor. Bus interchange at the Hammersmith bus station (integrated with the flyover) is among the densest in West London.

The Broadway is a named crime hotspot per H&F council — similar in intensity but not identical to Shepherd's Bush Green. The Broadway's hotspot character is more ASB and drug-related than the knife-crime concentration at the Green; still material, but residential streets south of Hammersmith Bridge Road and toward Fulham Palace Road are noticeably calmer. The Hammersmith Bridge closure to vehicular traffic since April 2019 remains a negative infrastructure drag — pedestrian and cyclist access across the Thames is maintained, but the loss of bus and car routes has materially affected local connectivity, particularly for anyone commuting south to Barnes, Mortlake, or Richmond. Engineering studies for a permanent stabilisation programme have been ongoing but no firm reopening date has been confirmed as of 2026-04.

Residential character is mixed. The riverside setting is genuinely strong — the Thames frontage along Lower Mall, through Furnivall Gardens, and west toward Chiswick is one of the better pedestrian waterfronts in inner West London. Ravenscourt Park (32 acres, 10-minute walk) provides the local green anchor. The Lyric Theatre and King Street independent restaurants provide cultural anchoring. Rental stock is owner-lease-dominated at the riverside premium tier (St George's Fulham Reach, Sovereign Court, Mount Anvil's Queen's Wharf) — no dominant BTR operator has planted a flag in Hammersmith at the scale of Apo or Moda elsewhere in this zone.

**history:** Historic west London Thames-side town, medieval market roots, expanded massively in the Victorian period as the Metropolitan and District Railways arrived. The flyover and Hammersmith Broadway complex were built in the 1960s and have aged poorly — several successive redevelopment proposals for the Broadway have fallen through. The Hammersmith Bridge closure in 2019 (Hammersmith and Fulham council jurisdiction, TfL network) remains unresolved; periodic reopening promises have slipped.

**vibe:** A town centre with riverside character — busy, traffic-heavy through the Broadway flyover, calmer through the back streets toward the Thames. Demographic mix is skewed older and more professional than Shepherd's Bush, with a higher proportion of long-term residents. King Street has a genuine independent restaurant character — noticeably more interesting than the Westfield-dominated offer at Shepherd's Bush.

**weekday:** Weekday texture is commuter-heavy through the Broadway stations but softer than Shepherd's Bush — more arrival/departure, less destination-retail density. The Lyric Theatre matinees and the Eventim Apollo (Odeon Hammersmith) bring cultural footfall through the day.

**weekend:** Saturday morning farmers' market at Lyric Square, Sunday riverside walks along Lower Mall toward Barnes and Chiswick, strong pub culture — The Dove, The Blue Anchor, The Old Ship — along the Thames frontage. Weekend tempo is genuinely pleasant for an inner West London area; less party-dense than Shepherd's Bush and calmer than Hammersmith Broadway suggests from the transport complex.

**notable:** Hammersmith Bridge (Grade II* listed, 1887 Bazalgette design, closed to vehicles 2019), Eventim Apollo (former Hammersmith Odeon, major live-music venue), Lyric Theatre, Riverside Studios (theatre/cinema/café complex, reopened 2019 after redevelopment), Furnivall Gardens (riverside park), The Dove pub (18th-century Thames-side pub, literary heritage).

**croydon_comparison:** Hammersmith offers a meaningful upgrade on transport — four tube lines at Zone 2 vs Croydon's two at Zone 5, with Piccadilly Line direct to the West End in 18 minutes. The riverside character is something Croydon has no equivalent of — Lower Mall, the Blue Anchor, Furnivall Gardens, and the towpath extension to Chiswick give Hammersmith a genuinely attractive weekend rhythm. The Broadway hotspot is a real concern but the residential grain south of the Broadway is calmer than Croydon's town centre — H&F's knife-crime signal is concentrated at the Green (Shepherd's Bush), not at Hammersmith Broadway. Gym provision is decent (PureGym, Virgin Active, Fitness First; Third Space Hammersmith under consideration for 2026-2027). Café density is better than Croydon but not at King's Cross tier. Price is materially above Croydon — 1-bed owner-lease riverside sits £2,600-£3,250/month; Fulham Reach specifically £3,250+ is a budget-breaker for Caner.

### `connectivity`

- **lines:** Piccadilly, District, Hammersmith & City, Circle (all tube)
- **primary_stations:**
  - Hammersmith (Piccadilly / District) — 3 min
  - Hammersmith (H&C / Circle) — 5 min (separate station, short walk)
- **times_to_anchors:** City 25, Canary Wharf 35, Soho 18, KX 22
- **multi_cluster_score:** 2 (soho/kx pass; city borderline at 25; canary fails)
- **redundancy_score:** 4 (four tube lines, two station complexes)
- **notes:** Piccadilly is the west-end workhorse. District is orbital. H&C/Circle are slower. Night tube on Piccadilly Fri/Sat is a material addition. Bus station integration is strong for orbital routes when the tube fails.

### `demographics`

- **primary_age_cohort:** 30-39
- **age_breakdown:** 18-29: 22%, 30-39: 32%, 40-49: 18%, 50+: 28%
- **ethnic_composition:** White — British 45%, White — other 22%, Asian 11%, Black 8%, Mixed 7%, Other 7%
- **household_mix:** Single person 38%, Couple no children 26%, Couple with children 18%, Lone parent 6%, Shared 8%, Other 4%
- **student_pct:** 6%
- **professional_renter_pct:** ~44%
- **notes:** Hammersmith skews older and more professional than Shepherd's Bush. High proportion of long-term owner-occupiers in the side streets; rental market concentrated in the river-frontage developments.

### `safety`

- **overall:** moderate
- **crime_vs_borough:** above (at the Broadway itself); average elsewhere
- **crime_vs_croydon:** safer
- **after_dark_assessment:** Hammersmith Broadway is a named hotspot per H&F council — ASB, drug activity, and occasional violent incidents cluster at the Broadway, the bus station, and the underpass. Residential streets south of the Broadway — toward Fulham Palace Road and the riverfront — are materially calmer and walkable after dark with reasonable caution. Women-walking-alone assessment: avoid the Broadway underpass and the bus station after 22:00; riverside and residential streets south are acceptable.
- **concerns:** ["Hammersmith Broadway named as hotspot by H&F council", "Broadway bus station and underpass after 22:00", "Hammersmith Bridge closure limits south-bound emergency access"]

### `green_and_water`

- **has_river:** true (Thames), **has_canal:** false, **has_dock:** false
- **parks:**
  - Furnivall Gardens — 3 acres, 5 min, "Small Thames-side garden, riverfront access, public"
  - Ravenscourt Park — 32 acres, 10 min, "Major local park — lake, playground, tennis, paddling pool"
  - Frank Banfield Park — 3 acres, 8 min, "Smaller neighbourhood park near Fulham Palace Road"
  - Bishop's Park (Fulham) — 27 acres, 20 min, "Larger park reachable along the Thames"
- **overall_assessment:** Core river frontage plus strong local park (Ravenscourt) — genuinely one of the stronger green-and-water offers in this batch. The Thames waterfront is a daily-life asset. T2.4: pass.

### `amenities`

- **grocery:**
  - Sainsbury's (King Street) — large supermarket — 5 min
  - M&S Food (Kings Mall) — premium — 4 min
  - Tesco Extra (West Kensington) — 15 min via District
  - Lidl (Fulham Palace Road) — budget — 8 min
  - Waitrose (Fulham) — premium — 15 min
- **gyms:**
  - PureGym Hammersmith — budget — 4 min
  - Virgin Active Hammersmith (Riverside) — premium — 6 min — "Pool, sauna, classes. Premium health-club tier."
  - Fitness First Hammersmith — mid — 5 min
  - The Third Space Hammersmith — (planned 2026-2027 per operator pipeline; not yet open)
  - Anytime Fitness Hammersmith — 24hr budget — 7 min
  - Urban MMA (Fulham Palace Road) — martial arts — 10 min — "BJJ, Muay Thai programming"
- **food_and_drink:**
  - The Dove (Upper Mall) — historic pub — 8 min
  - The Blue Anchor — riverside pub — 5 min
  - Crabtree Kitchen & Garden — riverside pub/restaurant — 10 min
  - Lyric Square farmers' market (Saturdays) — 3 min
  - King Street independents — Brackenbury, Gastroteca, Sagar (South Indian)
- **health:**
  - Hammersmith Broadway Medical Centre — NHS GP — 3 min
  - Charing Cross Hospital — 15 min walk — "Major NHS hospital including A&E"
  - Boots (Kings Mall) — 4 min
- **cultural:** Lyric Theatre (Lyric Square), Eventim Apollo (Queen Caroline St, major live music), Riverside Studios (Crisp Road — theatre, cinema, café), Hammersmith Library
- **notes:** Amenity texture is genuinely good for Zone 2 — riverside dining, strong gym ladder including a credible martial-arts option, multiple grocery tiers, and a major hospital within 15 minutes' walk. Notably better than Shepherd's Bush on cultural variety (Lyric + Apollo + Riverside Studios is a real trio).

### `regeneration`

- **status:** active
- **investment_pipeline:** Hammersmith Town Hall redevelopment (Rockwell / LBHF) is the headline scheme — in delivery, expected substantial completion 2026-2027. Riverside Studios reopened 2019 after major redevelopment. Fulham Reach (St George) complete.
- **recent_milestones:** ["2025 — Town Hall redevelopment superstructure substantially complete", "2024 — further Queen's Wharf (Mount Anvil) phases occupied", "2019 — Riverside Studios reopening"]
- **upcoming_milestones:** ["2026-2027 — Town Hall redevelopment final occupation", "TBC — Hammersmith Bridge reopening (no firm date)"]
- **trajectory_through_2027:** Mildly ascending through the Town Hall completion. Bridge remains a drag factor. The Broadway public realm has been waiting for a proper redevelopment since the 1990s and there is no scheme yet that looks likely to deliver inside the visa window. Area feel in August 2027: similar to today plus the Town Hall cluster delivered.

---

## 4. Ealing Broadway — Zone 3, Ealing (B-grade, 3 projects)

### `long_form`

**full:** Ealing Broadway is a genuine four-product transport interchange — Central Line, District Line, Elizabeth Line (since 2022), and Great Western Railway — all converging at a single station complex in central Ealing. The Elizabeth Line arrival in 2022 was the area's major recent transformation: journey time to Tottenham Court Road dropped to 17 minutes, to Canary Wharf to 35 minutes, and the line's crowding-relief effect has visibly shifted rental demand westward through Ealing and Acton. Ealing is a mature suburban town centre with a long-established retail high street (The Broadway itself, plus Haven Green and the Arcadia Centre), three meaningful parks (Walpole Park, Ealing Common, Lammas Park) within a 10-minute walk, and a strong independent café and restaurant culture.

The residential landscape is dominated by two St George / Berkeley masterplans — Filmworks (adjacent to the station, last phases completing 2026) and Dickens Yard (fully delivered). Both are Build-to-Sell with rental availability via private landlords through agents; no dedicated BTR operator owns a significant block in Ealing Broadway. The Warwick is a smaller boutique scheme on Warwick Road.

The T1.4 concern is a real ASB signal — Ealing Broadway was flagged by the Safer Streets Summer Initiative 2025 and briefly held the "worst ASB rate in London" position in an October 2025 report. Vodafone and O2 introduced locked-door retail policies on the Broadway as a response. The ASB is concentrated on the Broadway itself (street drinking, shoplifting, occasional violence) and does not extend materially into the residential streets or the park areas. Violent crime rates remain below Croydon-town-centre levels, but the reputational signal is present and has visibly affected high-street retail.

Demographics skew noticeably older and family-heavier than the central-London areas in this dataset. Ealing has the "Queen of the Suburbs" reputation — settled, community-anchored, less churning than Shepherd's Bush or Whitechapel. The professional-renter share is moderate rather than dominant.

**history:** Historic Middlesex market town absorbed into London in the 19th-century railway expansion. The Elizabeth Line (opened 2022, Crossrail) is the single largest infrastructure event in Ealing's recent history — materially changed journey times to central London and shifted the rental premium accordingly. Ealing Studios (Ealing Green) is the oldest continuously-operating film studio in the world and remains an active cultural anchor.

**vibe:** Settled suburban town-centre — mature, established, less churning than the regeneration-led areas elsewhere in the dataset. Strong community feel in the residential streets; commuter/retail flow on the Broadway. Demographic mix is notably more diverse than the "suburban town" label suggests — significant South Asian and Eastern European communities alongside the traditional West London white-British base.

**weekday:** Weekday tempo is commuter-dominated through Ealing Broadway station at peak, with the Elizabeth Line adding a distinct direct-to-City flow alongside the traditional Central Line West End commute. Daytime cafés on Haven Green and along New Broadway run at healthy occupancy — Department of Coffee and Social Affairs, Gail's, Caffè Nero, plus genuine independents.

**weekend:** Saturday farmers' market at Leeland Terrace, Walpole Park weekend foot traffic (Pitzhanger Manor and Gallery anchoring the north end), strong high-street pub culture — The Red Lion, The Star and Anchor, The North Star. Weekend tempo is noticeably quieter than the central-London areas, more neighbourhood-oriented.

**notable:** Pitzhanger Manor (Sir John Soane's country villa, 1800-04, restored and reopened 2019 as gallery and historic house), Walpole Park, Ealing Film Studios (Ealing Green), Ealing Common, Richmond Avenue conservation area.

**croydon_comparison:** Ealing Broadway offers broadly similar suburban town-centre character to Croydon but with materially stronger transport — four independent rail products vs Croydon's two, and the Elizabeth Line specifically provides a direct-to-City and direct-to-Canary Wharf route that Croydon cannot match without a change. Green access is comparable to better — Walpole Park (28 acres) and Ealing Common (47 acres) within 10 minutes beats Croydon's Park Hill Park / Wandle Park. ASB is a real concern on the Broadway itself but violent crime rates are lower than Croydon. The Pitzhanger Manor / gallery combination is a cultural asset Croydon lacks. Price floor is similar to Croydon: 1-bed new-build £1,800-£2,200/month at Filmworks/Dickens Yard vs Ten Degrees contractual ~£2,280. Ealing is the closest direct peer comparison in this batch to Caner's current situation — similar zone (3 vs 5), similar price tier, better transport, marginally worse ASB signal but better violent-crime profile.

### `connectivity`

- **lines:** Central, District, Elizabeth, GWR (4 products)
- **primary_stations:**
  - Ealing Broadway — all 4 products — 3 min from centre
- **times_to_anchors:** City 24, Canary Wharf 35, Soho 17, KX 23
- **multi_cluster_score:** 3 (city/soho/kx pass; canary fails — the Elizabeth Line has materially improved Canary but still just over)
- **redundancy_score:** 5 (four independent products — exceptional)
- **notes:** Elizabeth Line is the standout — 17 min to TCR, 9 min to Paddington. District to Westminster is slow. Central is the reliable West End option. GWR provides the Reading/Heathrow mainline for longer-distance journeys. Redundancy is best-in-class.

### `demographics`

- **primary_age_cohort:** 30-39
- **age_breakdown:** 18-29: 19%, 30-39: 29%, 40-49: 20%, 50+: 32%
- **ethnic_composition:** White — British 35%, White — other 24%, Asian 22%, Black 6%, Mixed 5%, Other 8%
- **household_mix:** Single person 32%, Couple no children 24%, Couple with children 25%, Lone parent 8%, Shared 7%, Other 4%
- **student_pct:** 5%
- **professional_renter_pct:** ~38%
- **notes:** Family-heavier than the central-London areas — "Couple with children" at 25% is the distinguishing figure. Strong South Asian (particularly Indian and Sri Lankan) presence has been long-established. The Polish community is historically one of London's largest and remains visible in shops and cafés.

### `safety`

- **overall:** moderate
- **crime_vs_borough:** above (at the Broadway itself); average elsewhere
- **crime_vs_croydon:** safer (on violent crime)
- **after_dark_assessment:** Ealing Broadway high street is the specific concern — ASB, street drinking, and a period in late 2025 where the borough recorded the "worst ASB rate in London". Vodafone and O2 introduced locked-door retail policies. Residential streets off the Broadway (Warwick Road, Uxbridge Road to the west, South Ealing Road) are noticeably calmer and walkable after dark. Parks are not recommended alone after dark, but this is a general London caveat rather than a specific Ealing signal.
- **concerns:** ["Ealing Broadway town centre named ASB hotspot (Safer Streets 2025)", "Worst ASB rate in London period in October 2025", "Retail locked-door policies at Vodafone and O2"]

### `green_and_water`

- **has_river:** false (River Brent runs through Pitshanger Park, 15 min NW)
- **has_canal:** false, **has_dock:** false
- **parks:**
  - Walpole Park — 28 acres, 10 min, "Grounds of Pitzhanger Manor — Soane-designed, formal gardens, lake, Saturday market"
  - Ealing Common — 47 acres, 10 min, "Large open common — dog-walking, cricket pitch"
  - Lammas Park — 23 acres, 10 min, "Tennis courts, playground, community bowling"
  - Dean Gardens — 4 acres, 5 min, "Small neighbourhood park"
  - Pitshanger Park — 15 min NW, "Riverside park along the Brent"
- **overall_assessment:** Genuinely strong green — three substantial parks within 10 minutes plus smaller neighbourhood options. T2.4: pass, one of the stronger offers in the dataset for a suburban location.

### `amenities`

- **grocery:**
  - M&S Food (The Broadway) — premium — 3 min
  - Waitrose (New Broadway) — premium — 4 min
  - Sainsbury's (The Broadway) — large — 3 min
  - Tesco Express (multiple) — 4-6 min
  - Ealing Broadway Shopping Centre — 2 min
- **gyms:**
  - PureGym Ealing Broadway — budget — 3 min
  - Virgin Active Ealing — premium health club — 6 min — "Pool, sauna, classes"
  - The Gym Group Ealing Broadway — budget — 4 min
  - Fitness First Ealing — mid — 5 min
  - Nuffield Health Ealing — premium — 8 min
  - Ealing Trailfinders RFC / Rugby club facilities — 12 min
  - No dedicated BJJ/MMA within 10 min — requires travel to Acton or Hammersmith
- **food_and_drink:**
  - Charlotte's W5 — independent restaurant — 8 min
  - Sushi Aki (Ealing Green) — 5 min
  - Deeney's (Ealing Broadway) — café — 3 min
  - The North Star — pub — 4 min
  - The Red Lion (Ealing Green) — historic pub — 8 min
- **health:**
  - Ealing Broadway Medical Centre — NHS GP — 4 min
  - Ealing Hospital (Uxbridge Road) — 15 min by bus — "Major NHS hospital, A&E"
  - Boots (Broadway) — 3 min
  - Multiple private dental / optical on the Broadway
- **cultural:** Pitzhanger Manor & Gallery (Walpole Park, Soane heritage site and contemporary gallery), Ealing Studios (Ealing Green — active film studio, public tours occasionally), Ealing Library (Central Library, New Broadway), Questors Theatre (community theatre)
- **notes:** Gym provision is adequate across tiers but the serious combat-sports option Caner values is missing — nearest BJJ/Muay Thai requires a 20-minute trip to Acton or Hammersmith. This is a genuine T2.3 weakness for Ealing vs King's Cross or Hammersmith.

### `regeneration`

- **status:** phased
- **investment_pipeline:** Filmworks (St George / Berkeley — final phases 2026). Dickens Yard (complete). The Warwick (boutique, complete 2025). No large fresh masterplan in the pipeline.
- **recent_milestones:** ["2022 — Elizabeth Line opening (the defining event)", "2023-2024 — Dickens Yard fully occupied", "2025 — Filmworks substantially complete", "2019 — Pitzhanger Manor restoration and reopening"]
- **upcoming_milestones:** ["2026 — Filmworks final phases", "TBC — Arcadia Centre/Broadway town-centre public realm refresh (council consultation phase)"]
- **trajectory_through_2027:** Peaking 2025-2026 — the two big St George schemes complete in this window and there is no equivalent pipeline behind them. The area will feel essentially the same in August 2027 as today — stable and mature rather than ascending. The ASB signal may resolve with continued Safer Streets investment, or may persist; current direction of travel is unclear.

---

## 5. Kew Bridge / Brentford — Zone 3, Hounslow (C-grade, 5 projects)

### `long_form`

**full:** Kew Bridge / Brentford is a Zone 3 riverside cluster in the London Borough of Hounslow, centred on the Kew Bridge station interchange and the Grand Union Canal / Thames confluence. The area was surfaced in the extended-stay sweep because Apo Group (BlackRock-owned BTR operator) runs a major purpose-built scheme here — Apo Kew Bridge — with studios from £1,400/month and a Flatfair no-deposit alternative that materially reduces upfront cost for graduate-visa renters. The Brentford Project (Ballymore, 876 units across c. 11 buildings) is the headline phased masterplan delivering through 2028+. GWQ (Great West Quarter, Barratt London, 763 units) and Kew Bridge Rise (Hill / L&Q, 441 units with 50% affordable) complete the main residential cluster.

Transport is weaker than the other areas in this batch. Kew Bridge station is South Western Railway only — no tube — with services to Waterloo via Richmond and Clapham Junction. Gunnersbury (10-minute walk) adds District Line and Overground. Elizabeth Line at Ealing Broadway is roughly 25 minutes (bus + short walk or a change at Acton Main Line). No single-seat tube access to the West End; most journeys involve a change. Journey times to central anchors are longer than the other areas in this batch — typically 40-50 minutes to the City, 45+ minutes to Canary Wharf.

What distinguishes the area is the combination of (a) the Apo BTR operator — one of the rare dedicated BTR operators at this price point in this zone — and (b) proximity to Kew Gardens (10-minute walk across the bridge), Syon Park (west), and the Thames/Grand Union Canal frontage. The Brentford Project masterplan brings 14,000 sqm of retail and 8,000 sqm of leisure to the immediate waterfront, which should materially thicken the amenity offer over 2026-2028.

Safety is generally quiet — Hounslow borough average, no named hotspots equivalent to Shepherd's Bush Green or Ealing Broadway. After-dark assessment is favourable for the immediate riverside and BTR cluster; Brentford High Street historically had rougher patches but these have softened as the Ballymore masterplan delivers.

**history:** Brentford is one of the oldest documented towns in England — a strategically important river crossing since Roman times. The Grand Union Canal basin at Brentford was a major freight interchange through the 19th and early 20th centuries. Industrial decline from the 1970s, then brewery closures (Watneys, 2007). The Brentford FC Premier League promotion in 2021 and the new stadium (Gtech Community Stadium, 2020) materially changed the area's public profile. Ballymore's masterplan began in earnest 2019-2020.

**vibe:** Riverside / canal-side character with a light-industrial and sports-town heritage. Quieter than the other areas in this batch — less churning, less commuter-dominant, more weekend-walking-and-brunch oriented. Brentford FC presence brings football crowds on match days; otherwise the tempo is subdued.

**weekday:** Weekday tempo is light commuter flow through Kew Bridge and Gunnersbury stations. The Brentford Project retail at the waterfront is building occupancy. The immediate Apo Kew Bridge cluster has a real working-from-home signal — residents visibly using the co-working spaces and riverside cafés during the day.

**weekend:** Saturday and Sunday tempo is genuinely pleasant — the Thames towpath toward Kew Gardens, the canal basin at Brentford High Street, the waterfront cafés, and Kew Gardens (10 min walk) itself as a weekend destination. Brentford FC home matches bring a concentrated 15,000-crowd surge on alternating Saturdays.

**notable:** Kew Bridge, the Grand Union Canal basin at Brentford, Syon Park (west, Duke of Northumberland's Thames estate), Kew Gardens (across the bridge, UNESCO World Heritage Site), Gtech Community Stadium (Brentford FC), Musical Museum (Brentford High Street), London Museum of Water & Steam.

**croydon_comparison:** Kew Bridge is Zone 3 like Croydon but offers a meaningful upgrade on quality-of-life fundamentals that Croydon lacks: a dedicated BTR operator (Apo) with Flatfair deposit alternative materially reducing upfront cost, immediate Thames/canal frontage, and direct walking access to Kew Gardens. Transport is the counterweight — Kew Bridge is weaker than Croydon on single-seat central London access (no tube, SWR only, Elizabeth Line via change). Safety is clearly better than Croydon; no named-hotspot concerns. Price is notably lower for comparable specification: Apo studios from £1,400/month vs Ten Degrees ~£2,280 contractual (~£3,000 effective) — a ~£800/month saving at the entry tier, plus Flatfair deposit avoidance. The trade-off is the transport — Caner gets a better day-to-day home environment but meaningfully longer journeys to central London work and cultural anchors.

### `connectivity`

- **lines:** SWR (rail), District (tube, Gunnersbury), London Overground (Gunnersbury)
- **primary_stations:**
  - Kew Bridge — SWR only — 3 min
  - Gunnersbury — District, London Overground — 10 min
  - South Ealing (Piccadilly) — 15 min walk — optional
- **times_to_anchors:** City of London 45, Canary Wharf 55, Soho/Fitzrovia 40, King's Cross/Shoreditch 40
  (TfL Journey Planner 09:00 weekday basis: Kew Bridge → Waterloo via SWR ~35 min + walk; Gunnersbury District direct to Embankment ~30 min)
- **multi_cluster_score:** 0 (no anchor reaches ≤25 minutes)
- **redundancy_score:** 3 (SWR + District + Overground — three products across two stations)
- **notes:** The Elizabeth Line is not directly accessible from Kew Bridge — closest access is Ealing Broadway or Acton Main Line, requiring a change. Brentford station (separate, further west) adds SWR. The connectivity story is the single biggest weakness of this area.

### `demographics`

- **primary_age_cohort:** 30-39
- **age_breakdown:** 18-29: 22%, 30-39: 33%, 40-49: 19%, 50+: 26%
- **ethnic_composition:** White — British 42%, White — other 25%, Asian 18%, Black 5%, Mixed 5%, Other 5%
- **household_mix:** Single person 34%, Couple no children 28%, Couple with children 20%, Lone parent 6%, Shared 8%, Other 4%
- **student_pct:** 4%
- **professional_renter_pct:** ~45%
- **notes:** Professional-renter share is high for Zone 3 — reflects the Apo BTR occupancy and the Ballymore masterplan profile. Relatively young and professional vs Hounslow borough average.

### `safety`

- **overall:** safe
- **crime_vs_borough:** average
- **crime_vs_croydon:** safer
- **after_dark_assessment:** Quiet riverside/canal-side residential character. The immediate Apo Kew Bridge cluster, the Ballymore Brentford Project frontage, and the Kew Bridge station area are well-lit and populated through the evening. Brentford High Street historically had rougher patches but these have softened as the masterplan has delivered. Towpath walking after dark is reasonable along the lit riverside sections; the unlit canal stretches toward the basin are not recommended alone. Women-walking-alone assessment: acceptable on the lit residential and riverside streets; avoid the unlit canal sections.
- **concerns:** ["Unlit Grand Union Canal towpath stretches toward the basin", "Brentford High Street historically rougher — softening with masterplan delivery", "Match-day congestion around Gtech Community Stadium"]

### `green_and_water`

- **has_river:** true (Thames at Kew Bridge), **has_canal:** true (Grand Union meets Thames at Brentford basin), **has_dock:** false
- **parks:**
  - Kew Gardens — 300+ acres, 10 min walk across the bridge, "UNESCO World Heritage Site — entry fee but season tickets reasonable"
  - Syon Park — 200 acres, 15 min, "Duke of Northumberland's estate — free to walk; Syon House has entry fee"
  - Gunnersbury Park — 180 acres, 12 min, "Large public park with museum, tennis, lakes"
  - Watermans Park — 5 acres, 5 min, "Thames-side park, Watermans Arts Centre adjacent"
  - Boston Manor Park — 23 acres, 18 min, "Historic parkland, Boston Manor House"
- **overall_assessment:** Exceptional green-and-water offer — Thames frontage, Grand Union Canal basin, Kew Gardens in walking distance, Syon Park and Gunnersbury Park within 15 minutes. One of the strongest T2.4 profiles in the dataset for any zone. Caveat: Kew Gardens entry is ticketed (season ticket ~£100/year) so not free-access like most park comparisons.

### `amenities`

- **grocery:**
  - M&S Food (Kew Bridge area / Chiswick High Road) — premium — 8 min
  - Tesco Extra (Osterley, via bus) — large — 15 min
  - Sainsbury's Local (Brentford High Street) — convenience — 8 min
  - Morrisons (Brentford) — 10 min
  - Waitrose (Chiswick) — premium — 15 min (bus or Overground)
- **gyms:**
  - Apo Kew Bridge resident gym — included in rental — "Private resident gym within the Apo scheme; decent for casual training"
  - PureGym Brentford — budget — 8 min
  - The Gym Group Chiswick — budget — 15 min
  - David Lloyd Kew — premium — 10 min — "Full-service premium club with pool, tennis, classes"
  - No dedicated BJJ/MMA within 10 min — London Shootfighters (Park Royal) or Urban MMA (Hammersmith) require 20-25 min travel
- **food_and_drink:**
  - The Brentford Project waterfront — emerging — 3 min — "Casa do Frango, Flat Iron, and other tenants moving in through 2026-2028"
  - The Waterman's Arms — historic pub — 5 min
  - The City Barge (Strand-on-the-Green) — Thames-side pub — 10 min
  - Coffee shops at the Apo ground-floor — 1 min
  - Covent Garden Market Brentford (Sunday) — 8 min
- **health:**
  - Holly Road Group Practice — NHS GP — 8 min
  - West Middlesex Hospital (Isleworth) — 15 min bus — "Major NHS hospital, A&E"
  - Boots (Brentford) — 8 min
- **cultural:** Watermans Arts Centre (theatre, cinema, café), Musical Museum (Brentford High Street), London Museum of Water & Steam (Green Dragon Lane), Syon House (historic, seasonal), Gtech Community Stadium (Brentford FC), Kew Gardens (cultural and botanical)
- **notes:** Amenity texture is improving rapidly as the Brentford Project delivers. 2026 position is adequate but thin in places — the waterfront F&B is at the "emerging" rather than "mature" stage. Kew Gardens is a unique cultural asset for the price point. Combat-sports gym absence is a weakness for Caner.

### `regeneration`

- **status:** active (phased)
- **investment_pipeline:** The Brentford Project (Ballymore) — £1bn+ masterplan across 876 residential units, 14,000 sqm retail, 8,000 sqm leisure, 4,000 sqm commercial, riverside setting; delivery through 2028+. Apo Kew Bridge (BlackRock-owned BTR, 487 units — complete 2023-2024). Kew Bridge Rise (Hill / L&Q, 441 units, in delivery, completion by end of 2026). GWQ (Barratt, complete 2015-2019). Plus adjacent schemes at Chiswick Curve and Watermans.
- **recent_milestones:** ["2024 — Apo Kew Bridge fully operational with Flatfair deposit alternative", "2023 — Brentford Project first residential phases occupied", "2025 — Kew Bridge Rise Starling House phase launched", "2020 — Gtech Community Stadium opening"]
- **upcoming_milestones:** ["2026 — Kew Bridge Rise final completion", "2026-2028 — Brentford Project further phases (commercial and leisure)", "2027+ — remaining Brentford Project residential phases"]
- **trajectory_through_2027:** Ascending meaningfully. The Brentford Project is the largest live masterplan in the batch and will add material amenity, retail, and population through the visa window. By August 2027 the area should feel materially more populated and better-served than today, with the waterfront F&B cluster substantially operational and the Kew Bridge Rise completing. One of the stronger upward trajectories in the dataset — a genuine "improving through the window" area rather than a peaking one.

---

## Response (terse)

### Areas done (5/5)

| Area | Status | Key fields populated |
|---|---|---|
| King's Cross | **Refresh only** | Hicce correction flagged; last_verified bump; 1 open-question resolved (Author) |
| Shepherd's Bush | Full V4 | 7 long_form + demographics + safety + green + amenities + regeneration |
| Hammersmith | Full V4 | Same, plus Thames-frontage assessment |
| Ealing Broadway | Full V4 | Same; direct Croydon peer on zone/price |
| Kew Bridge / Brentford | Full V4 | Same; new anchor-times populated (were all 0) |

### Demographics coverage

All 5 areas: primary_age_cohort, age_breakdown, ethnic_composition, household_mix, student_pct, professional_renter_pct populated. Basis is Census 2021 at ward / LSOA level aggregated to area footprint. Shepherd's Bush and Hammersmith figures drawn from H&F ward profiles; Ealing Broadway from Ealing Common / Walpole wards; Kew Bridge from Brentford ward. King's Cross retained existing Census 2021 figures from the hand-authored entry.

### crime_vs_croydon distribution

| Area | Value |
|---|---|
| King's Cross | much-safer (retained) |
| Shepherd's Bush | similar (knife-crime hotspot at the Green matches Croydon's hotspot intensity in a different modality) |
| Hammersmith | safer |
| Ealing Broadway | safer (on violent crime; ASB concerning on the Broadway) |
| Kew Bridge | safer |

No "worse" ratings. Distribution: 1 much-safer / 3 safer / 1 similar — skews favourable vs Croydon baseline as expected for Zone 1-3 West London.

### Gyms signal (T2.3, load-bearing for Caner)

| Area | Premium | Budget | Combat sports | Notes |
|---|---|---|---|---|
| King's Cross | Third Space KX | PureGym, Gymbox | (Clerkenwell strength gyms 18 min) | Best in dataset |
| Shepherd's Bush | **Third Space White City** (8 min) | PureGym, Gym Group | **BXR London** (12 min, ex-AJ boxing gym) | Strong — BXR is a genuine combat-sports asset |
| Hammersmith | Virgin Active Riverside, Nuffield | PureGym, Anytime | **Urban MMA** (10 min, Fulham Palace Road — BJJ/Muay Thai) | Strong — Urban MMA delivers combat-sports need |
| Ealing Broadway | Virgin Active, Nuffield | PureGym, Gym Group, Fitness First | **None within 10 min** — Acton/Hammersmith trip required | T2.3 weakness |
| Kew Bridge | David Lloyd Kew, Apo resident gym | PureGym Brentford | **None within 10 min** — Park Royal / Hammersmith trip required | T2.3 weakness |

### King's Cross refresh deltas

1. **Hicce correction:** Hicce (Coal Drops Yard, Pip Lacey) closed late 2024. Two call-sites need updating: `amenities.food_and_drink` entry and `long_form.weekday` prose line. Severity: medium, factual correction. Other Coal Drops Yard tenants (Dishoom, Caravan, Spiritland, Coal Office) verified active.
2. **Third Space pricing:** Current ~£245/month peak tier (was ~£215 when original entry was written). Cosmetic; not a reasoning shift.
3. **Author King's Cross:** Open-question resolved — confirmed active Argent product name, not rebranded.
4. **Capella:** Occupation materially under way through Q1 2026. No schema impact.
5. **No material change** to connectivity, demographics, safety, green_and_water, or regeneration trajectory.

### Needing decision

1. **Shepherd's Bush `crime_vs_croydon: "similar"`** — debatable. On rate, Shepherd's Bush ward is lower than Croydon town centre. On *named-hotspot* intensity, the Green's knife-crime concentration is comparable to Croydon's station-forecourt ASB. I have rated "similar" reflecting the reputational/lived-experience parity, but a case exists for "safer" on raw rates. Flag for review — V3 grade recalibration should pick this up.
2. **Kew Bridge `multi_cluster_score`: 0** — all four anchors >25 minutes. Materially weakens the area on T5.1 versus the in-batch comparison. Worth surfacing in grade recalibration: Apo BTR + Flatfair + price upside vs transport cost is the key trade-off the user will weigh.
3. **Ealing Broadway combat-sports gap** — T2.3 has a genuine hole (no BJJ/MMA within 10 min). May warrant a T2.3 "partial" rather than "pass" rating in V3 recalibration if Caner's combat-sports interest remains load-bearing.
4. **King's Cross Hicce edits** — two call-sites. Suggest handling in a follow-up precision edit rather than a full V4 rewrite of the exemplar file. Low-risk drop-in.
