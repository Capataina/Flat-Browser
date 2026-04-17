# Area Research Playbook

How to research a single area to fill its area-level blocks. V4 agents consume this reference.

Area research is structurally different from operator research (`operator-research-playbook.md`). Sources are public-sector datasets rather than operator websites. One agent typically handles ~5 areas per batch — the reuse advantage of the operator model doesn't apply, but the canonical source list per field is short.

---

## Principle: public sources over hearsay

Every field in the area schema has a canonical primary source:

| Block | Primary source |
|---|---|
| `demographics` | ONS Census 2021 |
| `connectivity` | TfL JourneyPlanner + station pages |
| `safety` | Met Police Crime Map |
| `green_and_water` | Ordnance Survey / council park registers |
| `amenities` | Google Maps + cultural-venue sites |
| `regeneration` | GLA planning portal + council masterplan pages |
| `long_form` | Composed from the above + press |

Treat operator marketing prose, estate agent descriptions, and "best places to live" journalism as **secondary** — useful colour, not primary fact. The 2026-04 sweep that populated the dataset initially leaned too heavily on operator-and-press prose; V4 is the corrective pass.

---

## Research workflow per area

### Step 1 — Ground the area's footprint

Before pulling any data, resolve exactly what geographic footprint this area refers to:

- Check `src/areas/data/<slug>.ts` for `borough` and `postcodes`
- Confirm the area's natural centre (usually a named station or landmark)
- Decide the 10-minute-walk radius from that centre — this is the footprint for amenity + park counting

Areas in the dataset vary in size. Some are tightly defined (Gasholders KX = specific streets). Some are loose (Battersea = a broad strip). The footprint decision determines what counts as "in the area" for amenity and park fields.

### Step 2 — Connectivity

**Sources in order:**

1. **TfL JourneyPlanner** — https://tfl.gov.uk/plan-a-journey/
   - Use typical-weekday-09:00 departure time
   - From the area's primary station to each of the four anchors
   - Capture the recommended fastest journey time (inclusive of walking to origin)
   - Paste the specific journey URL into `sources`

2. **Station pages** — https://tfl.gov.uk/tube-dlr-overground/status/

3. **Crossrail / Elizabeth Line** — confirm current operating status if relevant

Anchor definitions:
- `city_of_london` → Bank station (or Cannon Street for Thameslink routes)
- `canary_wharf` → Canary Wharf (Jubilee or Elizabeth, whichever is faster)
- `soho_fitzrovia` → Tottenham Court Road
- `kings_cross_shoreditch` → King's Cross St Pancras

Derive `multi_cluster_score` by counting how many of the four times are ≤25 minutes.

Derive `redundancy_score` from the set of independent transit lines serving the area's primary stations.

### Step 3 — Demographics

**Primary source:** ONS Census 2021 at LSOA (Lower Super Output Area) level, aggregated to the area footprint.

Routes to the data:

1. **ONS bulk data** — https://www.ons.gov.uk/census
2. **LSOA lookups** — the area footprint usually spans 2-5 LSOAs
3. **GLA London Datastore** — https://data.london.gov.uk/ — borough-level summaries sometimes already aggregate the area's LSOAs

For smaller, well-known areas, the pre-aggregated census profile on Wikipedia (cite the underlying ONS source, not the Wikipedia page) is a shortcut.

### Step 4 — Safety

**Primary source:** Met Police Crime Map — https://www.police.uk/pu/your-area/

Pull last-12-months crime data for the area footprint. Categorise overall rate as:

- `"very-safe"` — well below borough mean, no violent-crime hotspots
- `"safe"` — at or below borough mean
- `"moderate"` — at borough mean, some elevated categories
- `"concerning"` — above borough mean, visible violent-crime hotspots

Cross-check with:
- Local press coverage of specific incidents
- Reddit r/London / r/AskUK for lived-experience reports
- Borough Safer Neighbourhood team pages

**Weight the `after_dark_assessment` field heavily.** Daytime crime stats do not tell the story the user cares about. Specifically look for:
- Pedestrian density on weekday evenings (Google Street View scrub + live data where available)
- Known trouble spots at 22:00+ (station forecourts, quiet routes through housing estates, dark park edges)
- Women-walking-alone reports

### Step 5 — Green and water

**Primary sources:**
- Ordnance Survey — https://www.ordnancesurvey.co.uk/
- Council park registers
- The Royal Parks / London Wildlife Trust for major parks
- Google Maps for distance confirmations

Confirm presence of named bodies of water (Thames, Wandle, Lea, Regent's Canal, Grand Union Canal, West India Dock, Royal Albert Dock, etc.).

List parks of ≥2 acres within 10 minutes' walk. For each: name, size in acres, walking minutes from centre, one-sentence character note.

### Step 6 — Amenities

**Primary sources:**
- Google Maps (structured queries — "supermarket near [station]", "gym near [station]")
- Council business directories
- Cultural venue official sites

**Gym field is critical.** List every commercial gym within ~15-min walk. Prioritise:
- Third Space / Equinox (premium tier)
- PureGym / The Gym Group / Anytime Fitness (budget tier)
- BJJ / Muay Thai / boxing gyms (Caner-specific interest)
- Boutique studios (Barry's, 1Rebel, F45)

Name each gym specifically in the `AmenityEntry.name`. Aggregate counts are useless — "5 gyms" vs "Third Space, PureGym, Boxworks BJJ" is the difference between an informative field and a filler field.

### Step 7 — Regeneration

**Primary sources:**
- GLA planning portal — https://www.london.gov.uk/programmes-strategies/planning
- Council masterplan pages (each borough publishes named schemes)
- Developer scheme sites (Canada Water Masterplan, Earl's Court Development Company, etc.)
- Press coverage of planning milestones

For each area, answer:
- Is there a named masterplan, or is regeneration organic?
- What was delivered in the last 24 months (with year)
- What's scheduled in the next 24-36 months (with year)
- Where will this area be in August 2027 (Caner's visa transition window)

The `trajectory_through_2027` field is load-bearing for the renter's decision. An area actively improving through 2026-27 is a different offer than an area stable or declining.

### Step 8 — Long-form composition

After the structured fields are populated, write the seven `long_form` string fields. Compose from the research above plus colour from:
- Press long-reads about the area
- Reddit threads on specific area questions
- Local journalism (Evening Standard local coverage, Time Out neighbourhood guides, local outlets)
- Wikipedia (backbone for `history`)

**The `croydon_comparison` field is mandatory and high-weight.** It's the literal decision-making prose the user reads. Cover at minimum:
- Night safety delta
- Café density + quality
- Gym options
- Zone + connectivity differential
- Price differential (cite typical 1-bed rent in the area vs Ten Degrees' ~£2,280 contractual / ~£3,000 effective)

---

## Canonical area archetypes

These patterns the skill should recognise. When research surfaces areas matching these shapes, defaults apply faster.

### Regenerated Zone 2 docklands (Canada Water, Canary Wharf, Royal Docks)

- `has_dock: true`
- `regeneration.status` typically `"phased"` or `"active"`
- Demographics skew young professional, ~60-75% 18-39
- `connectivity.multi_cluster_score` typically 3-4 (strong anchors)
- Safety usually `"safe"` in new-build cores, `"moderate"` edges
- Amenity density high but retail mix still maturing

### Olympic legacy (Stratford, Wembley Park)

- `regeneration.status: "active"` or `"phased"`
- `trajectory_through_2027` strong — committed pipeline
- Demographics mixed; family + young professional
- Gym density strong (legacy fitness infrastructure)

### Zone 1 mature (King's Cross, Farringdon, Shoreditch)

- `regeneration.status: "complete"` or late-`"active"`
- `connectivity.multi_cluster_score: 4-5`
- `redundancy_score: 4-5`
- Price ceiling high; most projects in dataset here are luxury tier
- Amenity density premium

### Commuter Zone 3-4 (Acton, Tooting, Forest Hill)

- `regeneration.status` varies — named masterplan or organic
- `connectivity.multi_cluster_score: 2-3` typically
- Demographics mixed
- Amenity density moderate; depends on specific cluster

### Outer-Zone BTR new towns (Wembley Park, Elephant Park, Nine Elms)

- `regeneration.status: "active"` or `"phased"`
- Demographics skew heavily renter-professional, 70%+ 18-39
- Amenity density increasing fast — capture current state + upcoming
- Safety usually `"safe"` in new-build cores

### Croydon (the baseline)

- Reference point for `croydon_comparison`
- Known: `safety.after_dark_assessment` poor (the reason Caner is leaving)
- Amenity density high but quality low (chicken-shop / betting-shop dominant ground-floor mix)
- `connectivity.multi_cluster_score: 3-4` (Overground + Southern + Tram), but requires Zone 5 trip to central

---

## Search phrasings that work

Good first-pass searches:

- `"<area>" regeneration masterplan 2026`
- `"<area>" London census 2021 demographics`
- `"<area>" crime map Met Police`
- `"<area>" London park`
- `"<area>" Crossrail Elizabeth Line`
- `"<area>" station TfL`
- `"<area>" London gym`

Avoid:
- ❌ `"<area>" best places to live` — returns marketing content
- ❌ `"<area>" upcoming investment` — returns press releases, often inflated

---

## When to mark `"unclear"` / leave blank

- **Numeric fields** (`student_pct`, `professional_renter_pct`, `times_to_anchors`) — use ONS / TfL data. If genuinely unavailable, leave at a flagged placeholder and note in `research.open_questions`.
- **Enum fields** (`safety.overall`, `regeneration.status`) — every area has a defensible classification. Don't leave as default; research enough to pick.
- **Array fields** (`parks`, `cultural`, `gyms`) — empty array is legitimate if nothing in radius. Don't pad.
- **Long-form fields** — do not leave empty. If genuinely thin-signal, write a short honest paragraph ("This area has limited press coverage. Lived experience summarised from X.").

---

## Output writing

Write findings to `context/data-upkeep/areas/<area-slug>.md` — long-form research notes, screenshots paraphrased, source citations.

Write proposals to `context/data-upkeep/proposals/area-<area-slug>.md` — structured field-level changes matching the `Area` schema.

Proposal structure:

```markdown
# Proposals — <area-name>

## Structured fields

### connectivity
- lines: [...]
- primary_stations: [...]
- times_to_anchors: {...}
- multi_cluster_score: N (derived)
- redundancy_score: N (derived)
- notes: "..."
- sources: [list of URLs]

### demographics
...

### safety
...

### green_and_water
...

### amenities (area-level)
...

### regeneration
...

## Long-form prose

### full
<full paragraph block>

### history
...

### vibe
...

### weekday
...

### weekend
...

### notable
...

### croydon_comparison
<MANDATORY paragraph block>

## Sources

Full URL list for orchestrator to copy into area.external_links
```

---

## Budget guidance

Per area: ~30-60k tokens.

Heavy:
- `demographics` — ONS data digging
- `regeneration` — GLA/council planning reads
- `long_form` — composition cost

Cheap:
- `zones` (often pre-set)
- `green_and_water` (one OS lookup)
- `safety` (one Met Police map view)

Per batch (5 areas): ~200-300k tokens.

If an area consumes >100k tokens without converging on definitive answers, stop. Mark open questions in `research.open_questions` and move on. The skill can be re-run on a specific area with `--areas <slug>`.

---

## What the playbook does NOT do

- Does not modify project-level fields (V1/V2 own those).
- Does not recalibrate grades (V3 owns that — orchestrator-only pass after research).
- Does not touch `personal_notes` (always user-authored).
- Does not chase down data on operator-brand social media for area-level research — stick to public-sector datasets and primary press.
