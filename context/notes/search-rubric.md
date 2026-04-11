# London Search Rubric

The criteria framework that guides which London areas and projects belong in Flatbrowser, and how to evaluate them. Authored 2026-04-11, refined in chat against the existing exemplars (Nine Elms, King's Cross, Wembley Park, Canary Wharf), and locked in as the source of truth for the upcoming London-wide sweep and the data-model restructure.

This is a **discovery rubric**, not a **choosing rubric**. Its job is to identify every plausible upgrade-from-Croydon area in London, not to pick a single winner. The bureaucratic question of whether Caner can actually rent in any given area (visa, credit history, upfront capacity, referencing) is intentionally **outside this rubric** — that constraint is downstream and gets handled per-project after an area has earned its place in the dataset. See `relocation-constraints.md` for that side of the problem.

---

## Why this rubric exists

The original 19-establishment shortlist was built around the question "what are the best places to live in London". That question produced a real and well-researched dataset (see `docs/research/`), but it consistently chose trophy addresses without separating *what makes daily life genuinely better than Croydon* from *what looks impressive in a property listing*. Every premium BTR and signature address in the dataset clears the trophy bar. Many of them quietly fail the daily-life bar — they're amenity-heavy and identity-thin, or culturally rich and bureaucratically inaccessible, or visually striking and demographically wrong for a 24-year-old renter.

A rubric that fits all four of the user's named exemplars cannot be one-dimensional. King's Cross is the gold standard on culture, architecture, and connectivity but is loud at night and aesthetically maximalist. Wembley Park is functionally outstanding (managed BTR campus, real 15-minute neighbourhood, accessible price floor, professional referencing) but architecturally generic and culturally thinner than its 85-acre footprint suggests. Canary Wharf has exceptional transport and premium amenity packages but is famously dead at weekends in the financial core and only just becoming a real residential neighbourhood in Wood Wharf. Nine Elms has river, scale, and amenity but is single-line dependent on the Northern Line extension and lives or dies by it.

A rubric that flattens those four into a single score is the wrong rubric. They each fail differently, and the failures are informative. The rubric below has **five tiers**, each measuring something distinct, so the asymmetry between strong and weak areas is preserved instead of averaged away.

---

## How the tiers work

The tiers are ordered by importance, but importance does not mean linear weight. Each tier plays a different role:

| Tier | Name | Role | What failure means |
|---|---|---|---|
| **T1** | Foundational viability | The hard floor | Fail any T1 row → area should not be in Flatbrowser at all |
| **T2** | Daily life quality | The actual upgrade test | Fail multiple T2 rows → area is technically eligible but not really an upgrade from Croydon |
| **T3** | Place identity and trajectory | The character test | Fail T3 rows → area is functional but soulless, a Zone 3 commuter dormitory in a different postcode |
| **T4** | Premium experience and choice | The trophy overlay | T4 is additive — failing T4 doesn't disqualify, it just means the area is not "premium-grade" |
| **T5** | Personal fit and edge differentiators | The tiebreaker | T5 separates two otherwise-equivalent candidates; failure has minor weight only |

The hierarchy is therefore **T1 ≫ T2 > T3 > T4 ≈ T5**, where T4 and T5 sit roughly side by side but measure different things (one is universal premium signals, the other is Caner-specific edge cases).

Each criterion is also tagged by which layer of the data model it evaluates:

- **A** — area-level criterion (about the neighbourhood)
- **P** — project-level criterion (about a specific building / development)
- **A/P** — applies at both layers

When the data model gets restructured into areas-containing-projects, the area card carries T1, T2 (mostly), T3, T5 evaluations. Each project under an area carries T4 + the few P-tagged rows from T2. The accordions inside an area card map cleanly onto the tiers as collapsible sections.

---

## Tier 1 — Foundational viability

> The hard floor. If any of these fail, the area does not belong in Flatbrowser.

| # | Criterion | Layer | What it means | What good looks like |
|---|---|---|---|---|
| 1.1 | **Demonstrably safer than Croydon** | A | Lower violent and acquisitive crime, less visible anti-social behaviour, calmer street feel after dark | Met Police ward stats below borough average; no "high-risk after dark" reputation; absence of routine warnings about specific streets in the area |
| 1.2 | **Modern rental stock present** | A | The area has purpose-built modern apartments, not just Victorian conversions and ex-council blocks | At least one named modern development built in the last 10–15 years; not a place where the only options are pre-war terraces |
| 1.3 | **Strong connectivity to central London** | A | Reachable to multiple central work clusters (City of London, Canary Wharf, Soho/Fitzrovia, King's Cross/Shoreditch) without contortion | At least 2 distinct rail/tube lines OR 1 line with multi-hub coverage (Elizabeth Line, Jubilee). Average ≤30 min to the four anchor hubs |
| 1.4 | **Active professional rental market** | A | Established letting agents and managed BTR/landlord presence — not a market dominated by one-off private landlords | At least one named BTR operator (Vertus, Quintain, Get Living, Greystar, Way of Life, EcoWorld Ballymore, etc.) OR a large managed development with central referencing |
| 1.5 | **Public realm in good order** | A | Clean streets, working street lighting, maintained pavements, no visible decay | Recent or ongoing public realm investment; no visible neglect on Street View walks; council reinvestment evident |
| 1.6 | **Not actively in decline** | A | Trajectory at minimum stable, ideally improving | No recent retail closure cascade, no shrinking population, no major employer departures, no rising vacancy on the high street |

### Why this tier sits at the top

Every row here is something Caner is *escaping* in Croydon. An area that fails 1.1 or 1.5 isn't an upgrade by definition — it's a different bad situation in a different postcode, possibly cheaper, possibly more central, but not solving the actual problem. An area that fails 1.2 reduces him to the same Victorian-conversion ex-council market that defines a lot of low-end Croydon stock. An area that fails 1.3 traps him into one specific commute, which is incompatible with the fact that he doesn't yet have a job offer and doesn't know which work cluster he'll need to reach. An area that fails 1.4 means the only available rental routes are small private landlords, where the bureaucratic problem (no UK credit, no payslips, graduate visa) becomes much harder to navigate than at a corporate operator with standardised referencing.

1.6 — "not actively in decline" — is the row that catches the deceptively cheap places. There are pockets of London where rents look attractive but the area is sliding: high streets emptying, anchor employers leaving, public realm investment frozen. Cheap rent now, worse rent context in two years. The whole point of moving is to land somewhere on a stable or rising arc, not a falling one.

This tier should be ruthless. An area that scores well on T2–T5 but fails any T1 row should be excluded outright, not compromised on. The cost of a wrong exclusion is small (the area sits in research notes and can be re-evaluated later); the cost of a wrong inclusion is real (it consumes attention that could be spent on better options).

---

## Tier 2 — Daily life quality

> The actual upgrade test. Once an area passes T1, this is what makes daily life *meaningfully* better than Croydon — the things you'd notice in week one, not week ten.

| # | Criterion | Layer | What it means | What good looks like |
|---|---|---|---|---|
| 2.1 | **Walkable daily essentials** | A | Supermarket, pharmacy, GP, café, gym all reachable on foot in ≤10 min | Dense retail core or 15-minute neighbourhood model; not "drive to Tesco" |
| 2.2 | **Quality grocery and fresh food access** | A | At least one Waitrose / M&S Food / Whole Foods OR a strong independent fresh-food scene (markets, butchers, greengrocers) | Caner cooks regularly; ingredient quality matters as much as having *a* supermarket. A 5–10 minute Uber for the weekly shop is acceptable, but a real shop within reach is better |
| 2.3 | **Real gym access** | A | Proper commercial gyms (PureGym, The Gym, Nuffield, Third Space, Equinox, independent strength gyms) — not just resident gyms in the building | Caner trains seriously (3-day full-body rotation, recomp cut). Resident gyms are usually inadequate for proper hypertrophy work — wrong equipment, wrong weight ranges, often shared with hotel-style users. **This is the single most important T2 row for him.** |
| 2.4 | **Green space, water, or open element** | A | River, dock, canal, park, or designed open space within ≤10 min walk | Riverside or parkside identity is a meaningful upgrade for walking, mental health, and sense of space |
| 2.5 | **Quiet at night for residents** | A | Residential calm after ~10pm; not a party-zone with constant noise | Mixed cultural energy is fine; persistent late-night party noise (Camden, Shoreditch core, parts of Soho) is not |
| 2.6 | **Building quality at modern standard** | P | New-build or recently refurbished, properly insulated, modern fittings, working lifts, decent thermal performance | EPC C or above; no chronic leak/heating complaints in resident reviews; modern double-glazing; proper sound insulation between flats |
| 2.7 | **Younger demographic skew** | A | Local population concentrated in 20s and early-30s, not in 40s and above | Census 2021 ward data shows 20-29 and/or 30-39 as the largest age cohorts; visible young professional renter presence on the streets; not retiree-dominant or settled-family-with-school-age-kids dominant |

### Why this tier sits second

T2 is where the "is this actually better than Croydon" question gets answered. T1 says "it's not worse"; T2 says "it's meaningfully better in the things I notice every day". Walkable essentials, real food, real gym, green space, quiet at night, decent buildings, and people in roughly your age group — these are not abstract dimensions. They are the texture of a Tuesday evening.

Two rows in this tier are weighted heavier than the rest:

**2.3 (gym access) is the single most load-bearing row in T2 for Caner specifically.** His training is part of his identity, not a hobby — three sessions a week, programmed, recovery-conscious, currently in a recomp cut. Resident gyms in BTR developments are almost universally inadequate for serious training because they're equipped for casual users and shared use. An area with a proper PureGym, The Gym Group, Nuffield, or strong independent strength gym is materially better for him than an otherwise-equivalent area without one. The 5–10 minute Uber tolerance noted in 2.2 (groceries) explicitly does not apply to gym — gym access has to be local because it happens three times a week and Uber overhead would compound badly.

**2.7 (younger demographic skew) was promoted from T5 to T2 in the refinement pass on 2026-04-11.** The original draft put cosmopolitan young-professional mix in T5 as an edge differentiator; the user pushed back that feeling alienated by a 40+ population is a daily-life quality issue, not an edge case. He is 24, lives alone, and the difference between an area where most people on the street are his rough age cohort and one where most people are settled mid-career adults with families is the difference between "I belong here" and "I'm in someone else's neighbourhood". That's a T2 question. The criterion is intentionally about *skew*, not exclusivity — the goal is "20s and early-30s as the dominant signal", not "no other ages present". Caner is comfortable with mixed populations; he is uncomfortable with being demographically out of place.

The other T2 rows (walkable essentials, food quality, green space, quiet at night, building quality) are all real and noticeable, but they fail more gracefully than 2.3 and 2.7 — an area that's a bit short on walkable essentials but otherwise strong is still livable, while an area with no real gym access is genuinely worse for him every single week.

### What this tier *deliberately* does not include

- **Nightlife depth.** Caner is not a clubbing or party-scene person; areas with deep late-night offerings (Shoreditch, Soho, Camden) are not penalised for it but they also do not earn points. An area with no nightlife at all is fine for him.
- **Family-friendliness.** No partner, no kids, no plans on either horizon — T2 is built for a single-occupant adult life.
- **Schools.** Same reason.
- **Specialist hobby infrastructure.** Removed in refinement (Muay Thai gym, art supplies). The two interests Caner most wanted preserved are gym (2.3) and food (2.2), both of which are now in T2.

---

## Tier 3 — Place identity and trajectory

> The character test. What separates "an upgrade" from "an upgrade you'll actually enjoy living in for two years".

| # | Criterion | Layer | What it means | What good looks like |
|---|---|---|---|---|
| 3.1 | **Active regeneration / current investment** | A | Visible ongoing investment in the place — masterplan still being delivered, public realm being added, cranes still up | Argent at KX, Quintain at Wembley Park, Vertus + Ballymore at Wood Wharf, BPS at Battersea — ongoing not finished |
| 3.2 | **Cultural or commercial anchor** | A | Something on or near the site that draws people in: museum, market, university, major employer, landmark, food destination | Coal Drops Yard + British Library + Central Saint Martins (KX); Battersea Power Station (Nine Elms); Wembley Stadium + Boxpark + Designer Outlet (Wembley Park); Crossrail Place + retail malls (Canary Wharf); Olympic Park (Stratford) |
| 3.3 | **Distinct, recognisable sense of place** | A | The area has a name people know and a mental image they associate with it | "I live in King's Cross" lands differently from "I live near Norwood Junction". Recognisable identity matters — both for self-perception and for the area being genuinely well-known enough to attract investment, residents, and culture |
| 3.4 | **15-minute neighbourhood completeness** | A | Most of work, shopping, eating, exercising, socialising, healthcare, and green space achievable within walking distance | Wembley Park's leisure-led model and KX's mixed-use density are both good examples; Wood Wharf is the in-progress version |
| 3.5 | **Architectural and visual quality** | A | The area looks coherent and intentional — not a hodgepodge of low-effort residential blocks | Doesn't need signature architecture (that's T4.4), but the place should feel designed. KX's preserved Victorian + new-build integration is the canonical example |
| 3.6 | **Day/night activity rhythm** | A | The area is alive both during the day and after work — not a commuter dormitory, not a financial ghost town on weekends | KX nails this (mixed-use 24/7); Wood Wharf is improving toward it; the historic financial core of Canary Wharf famously failed it; Nine Elms is moderate (residential-led, getting better as Battersea Power Station's retail matures) |

### Why this tier sits third

T3 catches the failure mode where an area is technically functional but soulless. You can pass T1 (safe, modern, connected, professional rental market, clean, stable) and T2 (walkable, fed, gymmed, green, quiet, well-built, age-appropriate) and still end up in a place that has no character — a Zone 3 dormitory of identical glass blocks where nothing happens after 7pm and nobody has a reason to be there other than living there. Functional, but not interesting. Not somewhere you tell people you live with any pride.

T3 is also the tier where the existing exemplars start to differentiate sharply:

- **King's Cross is a clean five-out-of-six on T3** (active regeneration ✓, cultural anchor ✓, recognisable name ✓, 15-min completeness ✓, architectural quality ✓, day/night rhythm ✓ — arguably six-of-six). It is the gold standard on this tier.
- **Wembley Park is roughly 4/6** — strong on regeneration, anchor, name recognition, and 15-min completeness, but architecturally functional more than distinguished, and mixed on day/night rhythm because of stadium event days disrupting the usual residential calm.
- **Canary Wharf / Wood Wharf is roughly 4/6** — strong on regeneration and anchor and name recognition, partial on 15-min completeness (improving as Wood Wharf builds out), partial on architectural quality (signature towers in places, generic in others), and weak on day/night rhythm in the financial core (the Wood Wharf side is improving).
- **Nine Elms is roughly 3/6** — strong on regeneration and architecture (Battersea Power Station is exceptional), weak on cultural anchor in the residential streets themselves (the anchor *is* BPS, which is great if you live next to it but thinner in Vauxhall-side or Embassy Gardens-side residential blocks), and weak on day/night rhythm because the area is still building out its non-residential offer.

T3 differentiates the four exemplars in exactly the way they actually feel different to live in. That's the validation that this tier is well-shaped.

---

## Tier 4 — Premium experience and choice

> The trophy overlay. Required to mark an area or project as "premium-grade" but not required for the area to belong in Flatbrowser at all.

| # | Criterion | Layer | What it means | What good looks like |
|---|---|---|---|---|
| 4.1 | **Premium amenity packages in the building stock** | P | Buildings on the area's roster offer pool, concierge, sky lounge, screening room, co-working, dining room, etc. | 8 Water Street (Vertus), Newfoundland (Ballymore), Gasholders (Argent), Luna (Quintain), Battersea Power Station (BPS) |
| 4.2 | **Choice of operators / multiple managed projects** | A | Renters can pick between multiple operators / multiple buildings without leaving the area | Wood Wharf has Vertus + Ballymore + others; Nine Elms has Way of Life + EcoWorld Ballymore + multiple ownership-led; KX is mostly Argent (less choice depth); Wembley Park is mostly Quintain (single-operator BTR campus) |
| 4.3 | **Dining and retail destinations on-site** | A | The area itself is a dining/retail destination, not just walking distance to one | Coal Drops Yard, Wood Wharf, Battersea Power Station retail, Boxpark Wembley, Designer Outlet, East Bank Stratford |
| 4.4 | **Signature architecture or named architects** | P | At least one project with serious architectural pedigree — Pritzker, Stirling Prize, named practice | One Park Drive by Herzog & de Meuron (Wood Wharf, Pritzker); Battersea Power Station by Wilkinson Eyre + Frank Gehry + Foster (Nine Elms); Gasholders by Wilkinson Eyre (KX); Coal Drops Yard by Heatherwick (KX) |
| 4.5 | **Visible market validation** | A | Area appears in serious press, awards, "best places to live" lists, or shows demonstrable demand pressure | Sunday Times Best Place to Live (Wembley Park 2025); FT/Guardian/Times property pieces; sustained Rightmove demand; brand recognition outside London |

### Why this tier sits fourth

T4 is the right place for trophy markers because they're real signals worth preserving — these are the places Caner *can dream about*, the addresses that look impressive in property listings and that justified the original 19-establishment dataset's "best of London" framing. The original mistake wasn't including them; it was treating them as the *only* candidates worth listing, which collapsed the dataset toward areas that fail T1–T3 conversations entirely.

T4 is *additive*, not gating. Failing T4 doesn't disqualify an area — it just means the area is not in the trophy tier. An area that scores cleanly on T1–T3 and weakly on T4 is still a perfectly good entry; it just won't have the premium-overlay tag. Conversely, an area with a stunning Pritzker building (T4.4) but failing T1.1 (safety) or T2.3 (gym access) is *not* rescued by the architecture — it's still excluded or downranked.

The split between **T3.5 (architectural and visual quality)** and **T4.4 (signature architecture)** is deliberate and important. T3.5 is "this place looks coherent and intentional" — a solidly-designed but anonymous area can still feel pleasant to live in. T4.4 is "this building was designed by someone whose name appears in architecture textbooks" — a signature building does not redeem an otherwise generic area. The two are different signals at different tiers, and conflating them was one of the failures of the original dataset.

The split between **T1.4 (active professional rental market)** and **T4.1 (premium amenity packages)** is the same kind of fix. T1.4 is "is there a managed landlord here at all" — the basic precondition for being able to rent without navigating one-off private-landlord referencing. T4.1 is "does the building have a pool and a concierge". The original dataset treated these as one thing, which was the bug — Wembley Park has a strong T1.4 (Quintain runs the whole campus professionally) and a moderate T4.1 (Quintain buildings have decent amenities but not top-tier ones), and the previous dataset couldn't represent that distinction.

---

## Tier 5 — Personal fit and edge differentiators

> The tiebreakers. Specific to Caner's situation; would not appear in a generic London relocation rubric.

| # | Criterion | Layer | What it means | What good looks like |
|---|---|---|---|---|
| 5.1 | **Multi-cluster commute coverage** | A | Strong access to *all four* central work clusters (City of London / Canary Wharf / Soho-Fitzrovia / KX-Shoreditch), not just one | Caner doesn't yet have a job offer; betting on a single line locks him into one work cluster. Elizabeth Line, Jubilee Line, and KX-area multi-line stations all do well here |
| 5.2 | **Transport redundancy / line independence** | A | The area is served by more than one independent line, so no single line failure strands the resident | Different from 5.1: 5.1 is about *reaching* multiple clusters; 5.2 is about *robustness* if a line fails. Nine Elms via the Northern Line extension is a single point of failure even though it reaches multiple clusters; Wood Wharf has Elizabeth + Jubilee + DLR; KX has six lines |
| 5.3 | **Long-term ascending trajectory** | A | The area is still ascending toward 2027+, not at the top of its arc | Investment pipeline announcements; ongoing planning permissions; not "regeneration finished". Caner's visa transition lands in August 2027 — areas that are still improving across that horizon are better bets than areas peaking now |
| 5.4 | **Quiet third spaces** | A | Bookshops, libraries, cafés with workable seating, parks with benches — places to read and think outside the flat | Caner reads heavily (Camus, Kafka, Dostoevsky); needs quiet space outside the home for the parts of his life that aren't work or training |

### Why this tier sits last

T5 is deliberately the most idiosyncratic. Each row is something that wouldn't appear in a London relocation rubric for any other person and that Caner would not necessarily list as a top-five priority — but each row is also the kind of thing that decides between two areas that look identical on T1–T4. The difference between Wood Wharf and Royal Wharf might come down to T5 rather than T1–T4. The difference between Nine Elms and Stratford might come down to T5.2 alone (Northern Line dependency vs the multi-line Stratford hub).

T5 has been *deliberately trimmed* in the refinement pass on 2026-04-11. The earlier draft had six rows including a Muay Thai/boxing gym criterion and an art-supplies criterion. The user removed both — the Muay Thai gym is a personal interest but not a daily-life quality issue (gym access already covers what really matters), and art supplies are a once-a-month errand that doesn't constrain area selection. Cutting both trims T5 from six rows to four, which is fine — T5 should be sharp, not exhaustive.

The four remaining T5 rows are all genuine differentiators that the existing exemplars score differently on:

| Exemplar | 5.1 (multi-cluster) | 5.2 (redundancy) | 5.3 (trajectory) | 5.4 (third spaces) |
|---|---|---|---|---|
| King's Cross | ✓✓✓ | ✓✓✓ | ✓ | ✓✓✓ |
| Canary Wharf / Wood Wharf | ✓✓ | ✓✓ | ✓✓ | ⚠ |
| Nine Elms | ✓✓ | ⚠ (Northern Line dependent) | ✓✓ | ⚠ |
| Wembley Park | ✓ | ✓ | ✓✓ | ⚠ |

That spread is the validation: T5 is producing meaningful differentiation between four areas that are all strong on T1–T4. King's Cross runs away with T5, which matches reality — it's the only one of the four with deep bookshop and library culture (British Library, Caravan, Word on the Water, multiple independents), it has six-line transport redundancy, and it has uncontested multi-cluster commute coverage.

### What this tier *deliberately* does not include

- **Muay Thai / boxing gym proximity** — removed in refinement; covered functionally by 2.3 (gym access)
- **Art / craft material supplier access** — removed in refinement; not load-bearing on area choice
- **Demographic ethnicity composition** — the Census-demographics tag from the existing dataset was descriptive, not prescriptive. T2.7 captures the part Caner actually cares about (age skew). Ethnic composition becomes a *display* tag, not a *rubric* criterion
- **Hard rental qualification difficulty** — explicitly out of scope per the discovery vs choosing distinction at the top of this file. Belongs in `relocation-constraints.md` and a separate downstream tag
- **Price** — also out of scope per "no hard upper ceiling, find ALL options". Becomes a display tag, not a filter

---

## How this rubric maps to the data model

The rubric directly drives the upcoming data-model restructure (areas containing projects). The mapping is roughly:

```
Area (top-level entity)
   │
   ├── T1 evaluation     6 criteria, all area-level   → must all pass
   ├── T2 evaluation     7 criteria, mostly area-level → soft scoring
   ├── T3 evaluation     6 criteria, all area-level   → soft scoring
   ├── T5 evaluation     4 criteria, all area-level   → tiebreaker scoring
   │
   └── Projects[]
         │
         ├── Project A
         │     ├── T2.6 (building quality)
         │     ├── T4.1 (amenity package)
         │     └── T4.4 (signature architecture)
         │
         ├── Project B
         │     └── ...
         │
         └── ...
```

The accordions inside an area card map naturally onto the tiers:

```
[Area Card: Wembley Park]
  ┌─ Header: name, location, top-line summary, current price band
  │
  ├─ ▾ Foundational viability        (T1 — 6 criteria with status)
  ├─ ▾ Daily life quality             (T2 — 7 criteria with status, gym + age + food highlighted)
  ├─ ▾ Place identity & trajectory    (T3 — 6 criteria with status)
  ├─ ▾ Personal fit                   (T5 — 4 criteria with status)
  ├─ ▾ Notable projects               (collapsible list of projects under the area)
  │     │
  │     ├─ Luna by Quintain Living
  │     │    └─ T2.6 + T4 evaluation, photos, prices, link
  │     ├─ Ferrum
  │     ├─ Madison
  │     └─ ...
  │
  ├─ ▾ Connectivity detail            (line-by-line breakdown to anchor hubs)
  ├─ ▾ Demographic detail             (Census 2021, age cohort breakdown, descriptive)
  ├─ ▾ Investment trajectory          (regeneration pipeline, planning permissions, future phases)
  └─ ▾ Long description               (the genuine, long-form profile of the place)
```

The user's earlier request — accordions for different information so the app is self-contained and doesn't need external research — maps directly onto this. Each tier becomes one collapsible section. Projects become a nested collapsible list inside their area. Long-form descriptions, demographic detail, and trajectory live in their own dedicated sections rather than being squeezed into a single `desc` field as in the current dataset.

---

## Decisions and judgment calls — captured for later review

These are the calls made during the design and refinement of this rubric, surfaced here so a future session does not have to re-derive them and so the user can override any of them on second thought without re-reading the whole file.

1. **Safety lives in T1, not T2.** This was the original draft choice and was confirmed in refinement. Safety is the single biggest reason Caner is leaving Croydon, and "noticeably safer than Croydon" is a hard floor, not a quality-of-life nicety.

2. **Gym access lives in T2 (daily life), not T5 (personal).** This was the original draft choice and was reaffirmed in refinement. Caner trains seriously enough that an area without a real gym is genuinely worse to live in for him every single week, regardless of how the area scores elsewhere. It is therefore not an edge case.

3. **Younger demographic skew was promoted from T5 to T2 (criterion 2.7) in refinement.** The user pushed back that feeling alienated by a 40+ population is a daily-life quality issue, not a tiebreaker. This is the only rubric change made between the initial draft and the locked version.

4. **Muay Thai / boxing gym proximity was removed entirely in refinement.** It was originally a T5 row. Caner confirmed it is not load-bearing on area choice.

5. **Art / craft material access was removed entirely in refinement.** Same reason — not load-bearing.

6. **"Active professional rental market" (T1.4) is split from "premium amenity packages" (T4.1).** The first is about whether you can rent at all; the second is about whether the building has a pool. The original dataset treated them as one thing, which was the bug. Splitting them is what lets Wembley Park (strong T1.4 from Quintain, moderate T4.1) and Battersea Power Station (strong on both) be represented honestly.

7. **Architectural quality (T3.5) is split from signature architecture (T4.4).** The first is "this place looks coherent and intentional"; the second is "this building has a famous architect". A solidly-designed-but-anonymous area can still be very nice to live in; a single Pritzker building doesn't redeem an otherwise generic area. Different signals, different tiers.

8. **Rental qualification difficulty is explicitly outside this rubric.** This is a discovery rubric, not a choosing rubric. Bureaucracy comes after you find the place. Rental qualification (visa-friendliness, upfront flexibility, credit-history tolerance, referencing strictness) belongs in `relocation-constraints.md` and a separate downstream tag system that gets applied per-project after the area passes this rubric.

9. **Price is also explicitly outside this rubric.** Per the user's instruction: no hard upper ceiling, find ALL options. Price becomes a display tag on each project, not a filter that excludes areas from the dataset.

10. **Demographics-by-ethnicity is a display field, not a rubric criterion.** The Census-led demographic tag from the existing dataset was descriptive. T2.7 captures the only part Caner actually wants to use as a search criterion (age skew). Ethnic composition stays in the data as background context but does not score in this rubric.

11. **Cambridge is excluded throughout.** Per refinement, Cambridge is not in scope for the dataset even though `preferences.toml` allows it as a work location. Revisit if the work picture changes.

12. **Multi-cluster commute (T5.1) and transport redundancy (T5.2) are deliberately separate rows.** T5.1 is about *reach*: can you get to all four work clusters without contortion. T5.2 is about *resilience*: if your single line fails, are you stranded. Nine Elms via the Northern Line extension scores well on T5.1 (it does reach multiple clusters via Vauxhall and beyond) but poorly on T5.2 (one line, one mode of failure). Splitting them captures that nuance.

13. **No nightlife criterion.** Caner is not a clubbing or party-scene person; rewarding nightlife depth would distort the rubric toward areas (Shoreditch, Soho, Camden) that aren't actually a good fit for him. Areas with deep nightlife are not penalised, they're just not rewarded for it.

14. **No family-friendliness, no schools, no childcare.** Single occupant, no plans on either horizon. The rubric is built for an adult solo renter and explicitly does not pretend otherwise.

---

## How this rubric was validated against the existing exemplars

The rubric was sanity-checked against the four exemplars Caner specifically named (Nine Elms, King's Cross, Wembley Park, Canary Wharf). The expected behaviour was that all four should pass T1 cleanly, all four should be strong on T2–T3 with documented quirks, the trophy-tier exemplars should dominate T4, and T5 should produce meaningful differentiation between them. That's exactly what happened.

| Exemplar | T1 (floor) | T2 (daily) | T3 (identity) | T4 (premium) | T5 (personal) |
|---|---|---|---|---|---|
| **King's Cross** | ✓✓✓✓✓✓ all clear | ✓ strong, mild noise (T2.5) | ✓✓✓✓✓✓ gold standard | ✓✓✓✓✓ strong | ✓✓✓ strongest of the four |
| **Wood Wharf / Canary Wharf** | ✓✓✓✓✓✓ all clear | ✓ strong (gym ✓, food ✓), age ✓ | ✓ strong on anchor + name, partial on day/night rhythm | ✓✓✓✓✓ very strong | ✓✓ strong reach, partial on third spaces |
| **Nine Elms** | ✓✓✓✓✓✓ all clear | ✓ strong, building out | ✓ strong on regen + architecture, weaker on cultural anchor in residential streets | ✓✓✓✓✓ strong | ⚠ Northern Line dependency is the headline T5 weakness |
| **Wembley Park** | ✓✓✓✓✓✓ all clear | ✓ strong (real 15-min model), age ✓ (S Asian-led, young) | ✓ functional, less culturally distinguished | ✓✓✓ strong on amenity but single-operator (lower 4.2), Sunday Times validation | ✓ moderate (Jubilee + Met decent), trajectory still rising |

The discrimination is real and matches the user's intuition. King's Cross is the strongest of the four because it scores cleanly on every tier. Nine Elms has a single weakness (T5.2 transport redundancy) that is hidden in any single-score system but visible here. Wembley Park scores hard on T1, T2, T4 but softer on T3 and T5, which matches its actual character (functional and accessible, not culturally deep). Canary Wharf/Wood Wharf is strong across the board with its known weekend-quietness pattern showing up in T3.6.

If the rubric had failed to discriminate the four, or if it had ranked them in an order that didn't match Caner's intuition, that would be a sign the criteria were wrong. They produce the right ranking, so the rubric is well-shaped for the upcoming London-wide sweep.

---

## What happens next

This rubric is now the locked search criteria for the project. The next concrete steps it enables:

1. **Restructure the data model** into areas containing projects. T1–T3 + T5 attach at the area level; T2.6 + T4 attach at the project level. The current 19 establishments collapse from "flat list" to "areas with projects under them" — Embassy Gardens, One Nine Elms, Bloom Nine Elms, and Riverlight Quay become projects under a Nine Elms area; Battersea Power Station and Battersea Switch House become projects under either Battersea or Nine Elms (TBD); Kidbrooke Village and Greenwich Peninsula stay as area-with-single-project; the others are reorganised similarly.

2. **Run the London-wide sweep** using this rubric as the qualification filter. Every area that passes T1 cleanly and shows reasonable scores on T2–T3 belongs in the dataset, regardless of trophy-tier signals. The candidate list to evaluate is broad and includes areas the original dataset never considered: Acton, Ealing, Walthamstow, Hackney Wick, Leyton, Mile End, Bow, Bethnal Green, New Cross / Deptford, Tooting, Stockwell, Streatham, Brixton, Peckham, Bermondsey, Surrey Quays, Crystal Palace, Forest Hill, Lewisham, Catford, Vauxhall (separately from Nine Elms), Pimlico, Chelsea, South Kensington, Earl's Court, Hammersmith, Shepherd's Bush, Notting Hill, Maida Vale, St John's Wood, Marylebone, Fitzrovia, Clerkenwell, Farringdon, Old Street / Hoxton (carefully on noise), Angel / Islington, Camden (carefully on noise), Kentish Town, Tufnell Park, Highbury, Finsbury Park, Manor House, Stoke Newington, Dalston (carefully on noise), Hackney Central, Whitechapel, Aldgate East, Tower Hamlets, Surrey Quays / Rotherhithe, Plaistow, West Ham, etc. Each candidate gets a T1 pass first; survivors get the full rubric.

3. **Refactor the app** to support the new data model and the accordion-based area cards. The existing rendering layer (`src/components/relocation-guide/`) is well-isolated from the data layer, so the data model change is mostly upstream of the UI; the UI then needs the new accordion components to surface the per-tier evaluation cleanly.

4. **Re-run the research process** under the new rubric for the existing 19 entries first (since they're already partially documented), then for the new candidates. The `scripts/launch_research_agents.mjs` orchestrator is reusable but its prompts need updating to reflect the new criteria.

This rubric is the foundation for all of that. Treat it as authoritative until explicitly revised.
