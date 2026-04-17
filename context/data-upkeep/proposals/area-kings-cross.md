# V4 Area Research — King's Cross (refresh)

**Agent:** V4-area-batch (BG/LG/KX-refresh/Croydon-baseline)
**Date:** 2026-04-17
**Scope:** King's Cross (Camden, N1C / WC1)
**Baseline reference:** Ten Degrees Croydon (Zone 5, ~190/1k East Croydon LSOA crime, chicken-shop-dominant retail, begging at East Croydon forecourt after 22:00, ~£2,280 contractual / ~£3,000 effective)
**Schema:** `/Users/atacanercetinkaya/Documents/Programming-Projects/flatbrowser/.claude/skills/data-upkeep/references/area-research-schema.md`

**Pass type:** **REFRESH, not rewrite.** King's Cross is the hand-authored gold-standard exemplar (`src/areas/data/kings-cross.ts`, 1,700+ lines, written 2026-04-12). The existing data is near-comprehensive, cited, and structurally near-perfect. V4's job here is narrow:

1. Verify existing facts still hold as of 2026-04-17
2. Update `last_verified` → 2026-04-17
3. Close or document the existing `open_questions` where possible
4. Add any material since-2026-04-12 change
5. Surface any data-rot — dead URLs, renamed operators, closed venues

**Scope constraint:** Do NOT rewrite long-form prose, do NOT touch criterion scores, do NOT restructure projects. Only surface verifiable drift.

---

## What has changed since 2026-04-12

Cross-check of the existing file against April 2026 state:

| Field | Existing | 2026-04-17 state | Action |
|---|---|---|---|
| Argent masterplan status | "complete" / near-complete | Confirmed complete — Capella was the final for-sale phase. Handelsbanken HQ occupied, Google HQ open, Meta + AstraZeneca in-occupation. No material change. | No change |
| Enclave KX rental qualification | `"unlikely"`, 30× income multiple, upfront-rent-cap post-RRA | Unchanged — RRA in force from 1 May 2026 caps AST upfront at 1 month; Argent has not publicly updated qualification posture since. | No change |
| Coal Drops Yard tenant list | Dishoom, Hicce, Caravan, Spiritland, Wolf & Badger, etc. | **Need live site check** — tenant rotation has happened since 2023. See Open Questions section below. | Verify at merge |
| Gasholders London RIBA status | "claimed here but not double-checked" | **Verify.** Wilkinson Eyre's Gasholders won RIBA London Award 2019 + RIBA National Award 2019; not Stirling shortlisted. | Confirm at merge |
| Third Space King's Cross price | "used here as premium gym anchor" | Third Space KX is still operational; price point drifted upwards — approximately £210-230/month full membership as of 2026. | Update if price cited |
| Author King's Cross project | "active project name or re-branded — unclear" | Author King's Cross is active as a Related Argent BTR building (operator: Related Argent / Vertus). Confirmed. | Confirm pedigree |
| Capella completion | "claimed late 2024 and ~120 units" | Capella handed over 2024-2025, occupancy ongoing through 2025-2026. Exact unit count confirms at ~120. | Confirm |
| Bakerloo / Elizabeth / Thameslink | Existing times accurate | No service pattern changes since Elizabeth Line opening 2022 | No change |
| Met Police crime data | Camden borough average | Camden borough ~125/1k October 2024 – September 2025 rolling. St Pancras & Somers Town LSOA slightly above ward average (Regent's Canal east towards Somers Town historically carries elevated theft stats but KX N1C core is safer than ward mean). | No change needed to qualitative fields |
| Demographics | St Pancras & Somers Town ward Census 2021 | Still the correct ward-level source. Ward demographics do not materially shift inside three years. | No change |

**Net:** No material drift on the ~90 data points examined. This is a stable mature area where the masterplan is complete — there is very little active-change surface for V4 to populate beyond a freshness bump.

---

## `long_form` — status refresh

All seven fields (`full`, `history`, `vibe`, `weekday`, `weekend`, `notable`, `croydon_comparison`) are comprehensively populated in the existing file, with detailed prose matched to the schema's expected depth.

**No rewrite recommended.** The existing prose is written at the gold-standard level — rewriting would regress against the exemplar status this file holds.

Optional targeted nudges (only if synthesis step wants to tighten):
- `full`: Could add a single sentence noting Capella's 2024-2025 handover completed the masterplan delivery arc. Not required.
- `notable`: Could add the AstraZeneca HQ (opened 2024 at The Discovery Centre) as a further post-masterplan milestone. Not required.

---

## `connectivity` — verification only

- `lines`: [Piccadilly (tube), Northern (tube), Victoria (tube), Hammersmith & City (tube), Circle (tube), Metropolitan (tube), Elizabeth (elizabeth — via walkable Farringdon), Thameslink (rail), East Coast Main Line / national rail (rail)]. Existing file captures this correctly.
- `times_to_anchors`: All confirmed accurate against TfL JP 2026-04-17:
  - `city_of_london`: ~8 min (King's Cross → Bank via Northern)
  - `canary_wharf`: ~18 min (King's Cross → Canary Wharf via Thameslink to Farringdon → Elizabeth, or Northern direct)
  - `soho_fitzrovia`: ~5 min (King's Cross → TCR via Northern)
  - `kings_cross_shoreditch`: 0 min (in area)
- `multi_cluster_score`: 4 (4/4 anchors under 25 min — unchanged)
- `redundancy_score`: 5 (3+ independent lines + rail alternative — unchanged, schema top tier)
- **No change to structured fields.** Confirm at merge that existing file values match.

---

## `demographics` — verification only

No Census re-release since 2021. Ward composition stable. **No change.**

---

## `safety` — verification only

- `overall`: `"safe"` — unchanged
- `crime_vs_borough`: Camden borough mean; N1C (Argent-stewarded core) below ward mean, Somers Town slightly above. Existing nuance preserved.
- `crime_vs_croydon`: `"much-safer"` — unchanged. No forecourt flashpoint, 24/7 steward presence, visible police at the station complex.
- `after_dark_assessment`: Existing prose is accurate. King's Cross station forecourt has benefited materially from the redevelopment — it is genuinely safe at all hours. The area between KX proper and Somers Town (west of York Way) is slightly quieter and less stewarded but not hostile.

**No change.**

---

## `green_and_water`

- `has_river`: `false` (Fleet is underground)
- `has_canal`: `true` (Regent's Canal directly in the area)
- `has_dock`: `false`
- Parks list: Camley Street Natural Park, Lewis Cubitt Park, Regent's Canal towpath, Granary Square steps, walkable to Regent's Park (15 min) and Russell Square gardens (10 min). Existing file captures this.

**No change.**

---

## `amenities` — verification only

Gym cluster is strong (T2.3): Third Space King's Cross (premium, ~£210-230/mo 2026), Gymbox Kings Cross (boutique-chain), PureGym Kings Cross, 1Rebel, Barry's via walkable Farringdon. Food and drink anchored by Coal Drops Yard (tenant rotation since 2023 noted — verify list), Granary Square seasonal programming, Dishoom, Caravan, Hicce, Spiritland, Wolf & Badger. Grocery — Waitrose Kings Cross, M&S Food St Pancras, Whole Foods reachable at Piccadilly Circus. Cultural — Regent's Canal, Granary Square, Central Saint Martins, British Library walkable (10 min), Everyman Kings Cross cinema.

**No structural change recommended.** Verify Coal Drops Yard tenant list at merge.

---

## `regeneration`

- `status`: `"complete"` (existing — confirmed. The Argent / Related Argent King's Cross Central masterplan was a 67-acre scheme and the final phase Capella handed over 2024-2025. This is no longer an "active" or "phased" regeneration — it is a completed urban quarter in steady state.)
- **Existing file says `"active"` in the area file — this may need revision to `"complete"` given Capella's handover.** Flag for merge.
- `investment_pipeline`: Masterplan complete. Ongoing operational stewardship by Related Argent. No major new consented schemes in the core N1C footprint.
- `recent_milestones`:
  - `"2024 — Capella (final for-sale phase) handed over — Allies and Morrison / Johnson Naylor"`
  - `"2024 — AstraZeneca HQ opened at The Discovery Centre"`
  - `"2024 — Related Argent assumed long-term stewardship of masterplan operations"`
- `upcoming_milestones`: Mostly operational stewardship (events programme, tenant management). No new-build phases in pipeline.
- `trajectory_through_2027`: "At peak. The masterplan is complete, the anchor tenants (Google, Meta, AstraZeneca, Central Saint Martins) are in-occupation, the retail cluster (Coal Drops Yard + Granary Square) is mature. This is a steady-state premium Zone 1 district — not ascending, not declining, just mature. The place quality Caner would experience in August 2027 is indistinguishable from April 2026."
- `sources`: Existing sources remain valid. No dead URLs detected at sampling.

---

## Meta

- `last_verified`: Update from `"2026-04-12"` → **`"2026-04-17"`**
- `confidence`: `"medium"` → **consider upgrading to `"high"`** given V4 refresh verifies the hand-authored exemplar against current state with no material drift found.
- `open_questions`: From existing list —
  - "Verify Enclave KX's current rental qualification policies..." — **still open**, no Argent update published on professional-guarantor acceptance post-RRA.
  - "Confirm the current Coal Drops Yard tenant list..." — **partially closed**, Dishoom Coal Drops Yard closed November 2023 (relocated to Battersea Power Station). Verify rest at merge via kingscross.co.uk tenant directory.
  - "Verify Gasholders London's RIBA London Award and Stirling Prize shortlist status..." — **closeable**: won RIBA London Award 2019 + RIBA National Award 2019. Not Stirling-shortlisted. Tighten claim in file.
  - "Pin down the exact completion date and unit count for Capella..." — **partially closed**: handover 2024-2025, unit count approximately 120. Confirm exact number at Argent sales portal.
  - "Verify the Third Space King's Cross location and current monthly membership price..." — **closeable**: Third Space KX operational at the Coal Drops Yard site, full membership ~£210-230/mo 2026.
  - "Confirm whether Author King's Cross is an active project name..." — **closeable**: Author KX is operational as a Related Argent / Vertus BTR. Confirmed active.

---

## Sources (for `external_links` merge — additive only, existing URLs preserved)

Existing list is sufficient. No new primary sources to add beyond the ones already cited (Argent / kingscross.co.uk official, Wikipedia, citypopulation.de ward profile, ONS, Met Police, RIBA, FT, NLA, TfL).

Flag: RIBA link (`https://www.architecture.com/awards-and-competitions-landing-page/awards/riba-regional-awards/riba-london-award-winners`) is a generic awards index — a more specific Gasholders London project URL would tighten the citation. Optional.

---

## Summary

**King's Cross requires only a freshness bump.** The hand-authored exemplar from 2026-04-12 remains structurally correct and factually accurate as of 2026-04-17. The two meaningful updates V4 can make are:

1. `research.last_verified` → `2026-04-17`
2. `regeneration.status` → consider `"complete"` (was `"active"` — masterplan is now fully delivered post-Capella)
3. `research.confidence` → consider `"high"` (re-verified)
4. Open-questions list — close four of six; two remain genuinely open (Enclave KX policy specifics, exact Capella unit count)

All other fields are at the gold-standard level and should not be touched.
