# V2 Enrichment — Mixed BTR Cohort (2026-04-17)

Scope: V2 project-enrichment (building_quality, amenities, architecture, long_form, resident_signal, rental.prices, affordability) for the mixed BTR cohort. Moda Living, Way of Life, Apo Group, Realstar/UNCLE, L&G Living / Legal & General, Fizzy Living (Greystar) single-building, Be Living, Camden Council, Dolphin Living. Budget envelope: Caner, £3,000/month, ≤£2,250 studio / ≤£2,750 1-bed.

## Cohort — project IDs found

| Operator | Project ID | Area | Realism (current) | Notes |
|---|---|---|---|---|
| Moda Living | `embassy-boulevard` | nine-elms | achievable-with-guarantor → blocked (per moda-living.md) | Confirmed |
| Moda Living | `the-stage-ec2` | old-street-hoxton | unknown | **Wrong-operator flag already raised in `moda-living.md` — enrich cautiously, defer resident/pricing to reattribution** |
| Way of Life | `the-eades` | walthamstow | unknown | Only Way of Life project currently in dataset |
| Apo Group | `apo-kew-bridge` | kew-bridge-brentford | achievable-with-guarantor | Confirmed |
| Realstar / UNCLE | `uncle-acton` | north-acton | achievable-with-guarantor | Confirmed; already partially enriched |
| Legal & General | `blackhorse-mills` | walthamstow | achievable-with-guarantor | Label "Legal & General" |
| L&G Living | `new-acres-wandsworth` | wandsworth-town | unknown | Label "L&G Living" — **same entity as above** |
| Fizzy (Greystar) single | `fizzy-stepney-green` | mile-end | achievable-with-guarantor | The "lone" Fizzy building in this batch; the 3-building cohort (Lewisham, Poplar, Canning Town) lives elsewhere |
| Be Living | `the-maple` | brent-cross-town | achievable | Only Be Living project |
| Camden Council | `west-kentish-town-estate` | kentish-town | unknown | Unbuilt — future phase; enrichment is largely speculative |
| Dolphin Living | `dolphin-square` | pimlico | unknown | Covered by apart-hotel batch partly — enrich core mansion-block BTR here; `dolphin-house-pimlico` (serviced apartments) owned by other batch |

**Not found / outside London:** No UNCLE Leeds entry in dataset (correctly excluded — UNCLE Leeds is outside the London scope). UNCLE Wembley *not* currently in dataset — flag for future sweep, not part of this V2 run.

## L&G / Legal & General disambiguation

`blackhorse-mills` labels the operator as `"Legal & General"`. `new-acres-wandsworth` labels it `"L&G Living"`. These are the same operator — L&G Living is the BTR brand of Legal & General. The inconsistency is a Category B normalisation task outside V2 scope.

**Recommendation:** normalise to `"L&G Living"` on both projects in a follow-up pass. V2 enrichment applies the same building_quality/amenity research to both; qualification research should treat them as one operator. For this proposal, keep labels as-is and flag the normalisation separately.

## Credit-strictness findings

- **Moda Living:** Experian 561+ hard floor published on `casa.moda/qualification-criteria`. Canopy RentPassport referencing (not Homeppl). No overseas-guarantor route. Already documented in `moda-living.md`. V2 enrichment does not change qualification — but `resident_signal.summary` should note the credit gate is a dominant friction point in public review sentiment.
- **L&G Living:** Uses Goodlord referencing (per `blackhorse-mills` preview). 30x income multiple, case-by-case upfront flexibility. New Acres is opaque ("Tier 13" per existing notes). Less strict than Moda on credit but requires written confirmation.
- **UNCLE (Realstar):** 28x income (distinctive low), 6-month minimum, 3-year maximum, in-house referencing. No documented corporate guarantor acceptance — flagged as verification-needed.
- **Way of Life:** Goodlord historically. The Eades enrichment should not assume policy — flag for V1 research.
- **Apo Group:** Flatfair deposit alternative; Spike Global + Flatfair referencing. Professional guarantor accepted. Standard 30x. Credit-check posture appears moderate.
- **Be Living:** Not explicitly researched; BTR standard expected.
- **Fizzy (Greystar):** 30x income, Homeppl referencing. Historically flexible on visa status per existing notes.

## Pricing + affordability distribution

Per-building refresh bands (per operator site, verified 2026-04-17 where accessible):

| Project | Studio | 1-bed | 2-bed | Affordability (Caner) |
|---|---|---|---|---|
| `embassy-boulevard` | £2,680 | £3,140 | £3,575 | **stretch / above-envelope** — above £2,750 1-bed floor |
| `the-stage-ec2` | ~£2,400-2,750 (OTM) | ~£2,750-3,200 | — | stretch (secondary market) |
| `the-eades` | ~£1,700-1,850 | ~£1,900-2,150 | £2,400+ | **comfortably** |
| `apo-kew-bridge` | £1,400-1,600 | £1,750-2,050 | £2,400+ | **well-under / comfortably** |
| `uncle-acton` | £1,800-1,950 | £2,070-2,130 | — | **comfortably** |
| `blackhorse-mills` | £1,650-1,850 | £1,950-2,250 | £2,500+ | **comfortably** |
| `new-acres-wandsworth` | £2,100-2,450 | £2,550-2,950 | £3,300+ | **at-budget / stretch** (1-bed crosses envelope) |
| `fizzy-stepney-green` | — (no studios) | £1,900-2,100 | £2,300+ | **comfortably** |
| `the-maple` | £1,950 | £2,250 | £2,800+ | **comfortably** (studio) / **at-budget** (1-bed edge) |
| `west-kentish-town-estate` | unbuilt | unbuilt | unbuilt | UNVERIFIED — affordability: `unclear` |
| `dolphin-square` | £1,895-2,200 | £2,395-2,795 | £3,200+ | **at-budget / stretch** (1-bed edge) |

Distribution (against injected comparables — Fizzy Lewisham £1,280-1,450 well-under; Node Brixton £1,675 well-under; Quintain Ferrum £1,829 comfortably; ARK CW £2,150 at-budget; Landmark Pinnacle £2,800+ stretch):

- **well-under:** 1 (apo-kew-bridge studios)
- **comfortably:** 5 (apo-kew-bridge 1-bed, uncle-acton, blackhorse-mills, fizzy-stepney-green, the-eades)
- **at-budget:** 3 (the-maple 1-bed, dolphin-square 1-bed, new-acres 1-bed at lower end)
- **stretch:** 2 (embassy-boulevard, the-stage-ec2)
- **unclear:** 1 (west-kentish-town-estate, unbuilt)

This is a healthy spread — no clustering. The cohort skews toward "comfortably" with Moda as the single consistent stretch outlier.

## HomeViews coverage

| Project | HomeViews | Score | Review count |
|---|---|---|---|
| `embassy-boulevard` | Yes | ~4.2/5 (early — <15 reviews) | Thin — low confidence |
| `the-stage-ec2` | Yes | ~4.1/5 | Reasonable (building 2019+) |
| `the-eades` | Yes | 4.3/5 | ~20+ |
| `apo-kew-bridge` | Yes | ~4.5/5 | ~30+ |
| `uncle-acton` | Yes | 4.65/5 | 40+ (strong confidence) |
| `blackhorse-mills` | Yes | ~4.4/5 | 25+ |
| `new-acres-wandsworth` | Thin/none | — | Too new — <5 reviews; mark summary "Too few reviews for reliable signal" |
| `fizzy-stepney-green` | Yes | ~4.2/5 | 20+ (PRS Development of the Year award — historical press signal stronger than HomeViews) |
| `the-maple` | Thin | — | 2025 delivery — <10 reviews currently |
| `west-kentish-town-estate` | — | — | Unbuilt |
| `dolphin-square` | Yes | ~3.9/5 (mixed — heritage building with ongoing refurbishment complaints) | 30+ |

**Coverage summary:** 8/11 have trustable HomeViews signal (≥5 reviews). `new-acres-wandsworth`, `the-maple`, and `west-kentish-town-estate` must be flagged `"Too few reviews for reliable signal (N reviews on HomeViews)"` per schema guidance.

## Buildings outside London / flag for removal

None. All 11 are within London. The brief raised UNCLE Leeds as a concern — confirmed no UNCLE Leeds project exists in the dataset. UNCLE Wembley exists in UNCLE's actual portfolio (per `brent-cross-town.ts` note comment) but is not currently a dataset entry, so no V2 enrichment applies.

## Enrichment by operator (abridged — field-by-field payloads to be emitted in orchestrator merge)

Operator-wide architecture / amenity defaults are captured below. Per-building variation is small for most of this cohort; I've flagged where the default doesn't apply.

### Moda Living (2 projects)

- `heating_type`: communal (BTR default, not explicitly published)
- `kitchen_quality`: excellent (Bosch appliances standard; full integrated kitchens — confirmed on Moda Living operator pages)
- Architects: Embassy Boulevard — **Allies and Morrison** (Nine Elms Park masterplan); The Stage EC2 — **Perkins & Will** (Galliard-led scheme)
- `is_signature`: false for both (Moda operates in named-practice schemes but not jury-level architecture)
- Amenity tier: `premium` (Embassy Boulevard — 20,000+ sq ft amenity confirmed); `strong` (Stage EC2 — standard)
- Resident signal — **Embassy Boulevard:** common complaints: pricing positioning, early-stage amenity teething. Praise: premium finish, Technogym, concierge responsiveness. **Stage EC2:** individual-landlord variance — quality inconsistent (HomeViews aggregates across all units).

### Way of Life (1 project — the-eades)

- `heating_type`: communal
- `kitchen_quality`: good (standard appliances, dishwasher; not named-brand spec)
- Architects: **Pollard Thomas Edwards** (typical Way of Life architect — verify for The Eades specifically)
- `is_signature`: false
- `overall_tier`: strong (24h gym, yoga studio, co-working, rooftop dining, 24h security — meets "strong" threshold)
- HomeViews praise: gym + yoga studio, security, on-site team responsiveness; complaints: lift waits (seems common), occasional noise transmission between units

### Apo Group (1 project — apo-kew-bridge)

- `heating_type`: communal
- `kitchen_quality`: good (full kitchen; Apo's mid-market BTR spec; no Bosch/Miele signal)
- Architects: **Sheppard Robson** (for Apo Kew Bridge) — verify
- `is_signature`: false
- `overall_tier`: strong (gym, co-working, roof terraces, residents' lounge — no pool/concierge 24h visible)
- HomeViews praise: price-to-quality, Flatfair upfront reduction, building cleanliness; complaints: basic amenity stack vs higher-priced peers

### Realstar / UNCLE (1 project — uncle-acton)

Already substantially enriched. Refresh:
- `heating_type`: communal
- `kitchen_quality`: good (Bosch appliances confirmed in preview, BoConcept furnished)
- `is_signature`: false (Perfume Factory towers are landmark for North Acton but not jury-signature)
- `overall_tier`: strong (already captured)
- HomeViews: 4.65/5 is one of the strongest signals in the dataset — praise concentrated on building management, concierge, amenity quality

### L&G Living / Legal & General (2 projects)

- `heating_type`: communal (both)
- `kitchen_quality`: good (standard BTR; no premium appliance brand publicised)
- `blackhorse-mills` architects: **Assael Architecture** (confirmed in preview)
- `new-acres-wandsworth` architects: **EPR Architects / BPTW** — verify
- `is_signature`: false (both) — WiredScore Gold is infrastructural, not architectural
- `overall_tier`: strong (both — 25m lido at New Acres; Blackhorse Mills has gym, co-working, roof terraces)
- Resident signal: Blackhorse Mills — praise for building management, sustainability credentials; New Acres — too few reviews

### Fizzy Living (Greystar) — fizzy-stepney-green

- `heating_type`: communal
- `kitchen_quality`: average (standard Fizzy kitchen spec — functional, dishwasher typically present but no premium appliances)
- Architects: **Unknown** (not publicly credited — Fizzy buildings rarely have named architectural authorship)
- `is_signature`: false
- `overall_tier`: basic (confirmed — no gym/pool/concierge; communal courtyard, bike storage, on-site manager only — **distinctive below other Fizzys** like Lewisham which have gyms)
- Award: "PRS Development of the Year" already noted — add to `awards` array with year
- HomeViews praise: professional management, pet-friendly, Fizzy's flexibility on visa status; complaints: basic amenity stack, no concierge, lift reliability

### Be Living — the-maple

Already enriched with architects (Allies and Morrison, Conran & Partners). Refresh:
- `heating_type`: communal (BTR — Brent Cross Town masterplan, communal system confirmed)
- `kitchen_quality`: excellent (Conran & Partners interior spec — quality appliances standard)
- `is_signature`: false but borderline — Allies and Morrison + Conran interiors is close; hold false until award signal
- `overall_tier`: premium (25m pool, jacuzzi, gym, work lounges — clearly premium)
- Resident signal: 2025 delivery — "Too few reviews for reliable signal (N reviews on HomeViews)"; early press coverage strongly positive
- Awards: **none yet** — Be Living / The Maple has not accumulated awards

### Camden Council — west-kentish-town-estate

- **Unbuilt** — enrichment is largely unavailable. Emit minimal V2:
  - `architects`: `["AHMM"]` (confirmed — Stirling Prize-winning practice)
  - `is_signature`: true (AHMM + 850 homes + major Camden programme + planning approval — defensibly signature-level for the area's long-term trajectory)
  - All building_quality / amenity / resident_signal fields: `undefined` / `"unknown"`
  - `affordability`: `unclear`
  - `long_form.full` can be populated from the existing preview; `living_experience` and `notable_features` should be `undefined` until the first phase is lettable.

### Dolphin Living — dolphin-square

Complex because the mansion block is 1930s with ongoing refurbishment — enrichment varies by which phase/apartment a renter ends up in.

- `epc_rating`: mixed by block (heritage building — many flats EPC D/E unless refurbished)
- `heating_type`: communal (central plant — 1930s system being progressively upgraded)
- `kitchen_quality`: good for refurbished flats; average for unrefurbished — **note in layout_notes**
- `sound_insulation`: average (1930s construction predates modern Part E; reviews mention some noise transmission)
- `architects`: **Gordon Jeeves** (original 1930s architect)
- `is_signature`: true (1930s landmark mansion block, historically significant, major Delancey refurbishment programme)
- Awards: heritage — none in Modern-era architecture sense
- `overall_tier`: strong (pool, gym, gardens, restaurant, concierge — the full mansion-block amenity stack)
- `rooftop_terrace`: no; `pool`: yes (heritage pool); `dining_room`: yes (on-site restaurant qualifies)
- Resident signal: praise — amenity stack, gardens, community feel; complaints — refurbishment inconsistency between flats, some flats show age, lift reliability in older blocks

## V1 contradictions / re-research flags

- `moda-living.md` flags `the-stage-ec2` as wrong-operator — V2 enrichment for that project should be deferred until Category B reattribution is resolved. Captured here as placeholder.
- L&G label normalisation (`"Legal & General"` vs `"L&G Living"`) flagged as Category B task outside V2.
- Dolphin Living — refurbishment-phase variance means per-flat enrichment is impossible at building level; `layout_notes` and `notes` must explicitly call out the phase-dependent quality.

## Sources (operator-level)

- https://www.modaliving.com/ + https://casa.moda/qualification-criteria (Moda)
- https://www.wayoflife.co.uk/ + https://www.theeades.com/
- https://apoliving.co.uk/ + https://a-part-of.com/places/kew-bridge
- https://uncle.co.uk/acton/
- https://www.landg.com/living/ + https://www.newacreswandsworth.com/
- https://fizzyliving.com/locations/stepney-green
- https://www.themaplenw2.com/
- https://www.belivinglondon.com/
- https://www.dolphinsquare.co.uk/
- https://find-energy-certificate.service.gov.uk/ (EPC register — per-address lookup required)
- https://www.homeviews.com/ (resident signal)

## Outstanding verification (for orchestrator merge)

1. Confirm Moda Embassy Boulevard architect attribution (Allies and Morrison is the masterplan; per-block authorship needs verification).
2. Confirm Apo Kew Bridge architect (Sheppard Robson plausible per Kew Bridge masterplan, not explicitly verified).
3. Verify New Acres architect (EPR vs BPTW).
4. Way of Life The Eades — architect not confirmed; Pollard Thomas Edwards is a guess based on operator pattern.
5. Fizzy Stepney Green — award year (PRS Development of the Year — 2015? verify).
