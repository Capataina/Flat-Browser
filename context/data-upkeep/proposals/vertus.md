# Vertus — proposals

Research date: 2026-04-16. Corresponds to `context/data-upkeep/operators/vertus.md`.

---

## Ghost / wrong-operator flags

### Category B — wrong-operator attribution (two projects)

| Project ID | Current operator | Proposed operator | Reason |
|---|---|---|---|
| `10-park-drive` (canary-wharf) | Vertus | **"Canary Wharf Group / private landlords"** (ownership tower with secondary-market lettings) | 10 Park Drive is a 346-unit ownership tower completed by Canary Wharf Group at Wood Wharf. It is not in Vertus's `/apartments-to-rent` portfolio. Lettings occur via individual owner-landlords through external agents (Foxtons, JOHNS&CO, Circa London, Crown Home Buying & Letting). Vertus does not manage the tenant relationship. |
| `one-park-drive` (canary-wharf) | Vertus | **"Canary Wharf Group / private landlords"** (ownership tower with secondary-market lettings) | Same pattern. 434-484 apartment ownership tower by Herzog & de Meuron. Dataset already has `building_type: "Owner-Lease"` — `operator` must follow. |

**Blast radius (both)**:

- `src/areas/data/canary-wharf.ts` — direct operator field on both project blocks. Evaluation reasoning rows that invoke "Vertus campus across Wood Wharf" currently include these two buildings — language needs tightening to distinguish the four actual Vertus BTR buildings (10 George Street, 8 Water Street, Newfoundland, 50-60 Charter Street) from the Park Drive ownership towers.
- `src/areas/data/canary-wharf.ts` long-form prose — multiple mentions of "Vertus and Ballymore buildings still completing through 2027+". The Park Drive towers' ongoing references are correct but shouldn't be framed as Vertus BTR.
- The `10-park-drive` entry's sources point to `thisisvertus.com/apartments-to-rent/` — this URL doesn't actually surface 10 Park Drive (verified 2026-04-16). The link is broken / stale.

**Recommendation**: user-confirm the reattribution. The secondary-market playbook applies — these projects become `research_status: "complete"` with secondary-market default fields.

### Dataset naming error (one project)

| Project ID | Current name | Proposed name | Reason |
|---|---|---|---|
| `george-street-vertus` (canary-wharf) | "3 & 10 George Street (Vertus)" | **"10 George Street (Vertus)"** | Vertus operates only 10 George Street (327 apartments, 37 storeys, completed 2020). There is no Vertus building at 3 George Street — the "3 &" appears to be a dataset authoring artefact, possibly confusion with 3 Park Drive (a neighbour ownership tower, not Vertus). |

**Blast radius**:

- `src/areas/data/canary-wharf.ts` — only the project block itself plus any long-form prose that lists "George Street" buildings (singular, not pair).
- Evaluation reasoning — "Core Vertus product" framing is correct; just needs the name correction.

### Coverage gap (one building missing)

| Missing building | Area | Action |
|---|---|---|
| **50-60 Charter Street** | canary-wharf | Vertus's newest and largest BTR building — 756 apartments, opened November 2025 at Wood Wharf. Not currently in the dataset. Recommend adding a new project block under the Vertus operator attribution. |

This is not a ghost-project flag — it's a coverage gap the skill can surface but which the user decides whether to address. Adding it would give Canary Wharf a more accurate Vertus footprint (four buildings, ~1,998 apartments).

---

## Operator-level defaults (Vertus BTR — applies to the clean-match projects)

These values apply to: `8-water-street`, `newfoundland`, and `george-street-vertus` (once renamed). If the user opts to add `50-60 Charter Street` as a new project, these same defaults apply to it.

| Field | Value | Source / reasoning |
|---|---|---|
| `agreement_type` | `"ast"` | FAQ's RRA section explicitly describes AST → rolling periodic conversion from 1 May 2026 |
| `referencing_provider` | `"unclear"` | FAQ mentions referencing but does not name provider; no Homeppl / Goodlord / Canopy case study features Vertus. Direct enquiry required. |
| `min_tenancy_months` | `12` | Standard Vertus AST; flexible shorter tenancies available "on request" per Wharf Life interview with MD Alastair Mullens |
| `income_multiple` | `30` | FAQ verbatim: "combined annual income... more than, or equal to, 30 times the monthly rent" |
| `open_banking_accepted` | `"unclear"` | FAQ does not name Open Banking as a mechanism; depends on unnamed referencing provider |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + RRA 1 May 2026 cap. FAQ acknowledges pre-RRA advance-rent arrangements will continue for existing tenancies, but new signings from 1 May 2026 are capped. |
| `accepts_professional_guarantor` | `"unclear"` | FAQ is totally silent on guarantors — neither Housing Hand / Guarantid nor individual guarantors are mentioned. Direct enquiry required. |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Topic never addressed |
| `credit_check` | `"standard"` | Luxury BTR at CWG standard; no published floor but also no Homeppl-style thin-credit accommodation signal. Propertymark-regulated. |
| `international_tenant_policy` | `"accepted-case-by-case"` | FAQ does not state a policy but marketing targets international professionals; HomeViews reviews include non-UK residents |
| `visa_expiry_handling` | `"unclear"` | Not addressed in FAQ |
| `qualification_flexibility_signal` | `"standard"` | Mixed signals — flexible tenancy product + RRA acknowledgement of advance-rent history weigh positive; FAQ silence on guarantors + no documented flex anecdotes weigh neutral. Not enough evidence for "flexible" or "rigid". |
| `research_status` | `"complete"` | Research done; `"unclear"` fields are genuine terminal states resolvable only by direct enquiry |

### Derived realism pathways (per `realism-pathway-derivation.md`)

| Pathway | Fires? | Reason |
|---|---|---|
| `standard-passable` | ❌ No | Requires `open_banking_accepted: "yes"` and `credit_check: "lenient"` — neither holds |
| `with-professional-guarantor` | ❌ No | `accepts_professional_guarantor` is `"unclear"` — unverified guarantor acceptance does not fire the pathway |
| `with-savings` | ❌ No | Requires `referencing_provider: "homeppl"` — Vertus provider is unnamed, Homeppl-specific savings route can't be assumed |
| `with-co-signer-overseas` | ❌ No | `accepts_individual_overseas_guarantor: "unclear"` |
| `with-upfront-licence` | ❌ No | AST, not licence |
| `licence-exempt-light-ref` | ❌ No | AST, not licence |

**Zero pathways fire cleanly.** Applying the `realism-pathway-derivation.md` rule — "if more than 3 of the structural fields are `unclear` or `unknown`, set `grad_visa_realism: "unclear"`" — Vertus hits exactly this case: four `"unclear"` fields (`referencing_provider`, `open_banking_accepted`, `accepts_professional_guarantor`, `accepts_individual_overseas_guarantor`, plus `visa_expiry_handling`). That's five unclears.

### Realism derivation

| Project | Current `grad_visa_realism` | Derived (empty pathways) | `deriveRealism` with preserve | Proposed |
|---|---|---|---|---|
| `8-water-street` | `unknown` | `unclear` (5 unclears rule) | No preserve (not explicit) → `unclear` | **`unclear`** |
| `george-street-vertus` (10 George Street) | `unknown` | `unclear` | → `unclear` | **`unclear`** |
| `newfoundland` | `unknown` | `unclear` | → `unclear` | **`unclear`** |
| `one-park-drive` | `unlikely` | — (secondary market) | Preserve `"unlikely"` | **`unlikely`** (preserve) |
| `10-park-drive` | `unknown` | — (secondary market) | → `unlikely` (secondary-market default for non-Homeppl individual lettings) | **`unlikely`** |

### Narrative `notes` for Vertus BTR projects

> Operated by Vertus, Canary Wharf Group's residential-leasing arm. Income floor is 30× monthly rent verbatim (FAQ) — at a 1-bed from £3,000/mo that's £90,000/yr, unreachable for Caner without a pathway. The referencing provider is not publicly named, and the FAQ is silent on guarantors (individual or corporate), Open Banking, overseas co-signers, and visa-expiry handling. This is the "luxury BTR with strict income multiple and quiet fallback policies" pattern — any pathway for a non-standard applicant requires direct enquiry via `/register/`. Vertus did historically accept multi-month advance rent as an affordability lever (acknowledged in the RRA FAQ), but the 1 May 2026 RRA cap on AST advance rent kills that route for new tenancies.

---

## Per-project proposals

### `8-water-street` (canary-wharf)

| Field | Current | Proposed | Source |
|---|---|---|---|
| `operator` | "Vertus" | keep | operator verified |
| `agreement_type` | — (likely unknown) | `"ast"` | FAQ |
| `referencing_provider` | — | `"unclear"` | FAQ doesn't name |
| `min_tenancy_months` | — | `12` | Journal post |
| `income_multiple` | — | `30` | FAQ |
| `open_banking_accepted` | — | `"unclear"` | — |
| `upfront_rent_policy` | — | `"one-month-ast-cap"` | RRA + FAQ |
| `accepts_professional_guarantor` | — | `"unclear"` | FAQ silent |
| `accepts_individual_overseas_guarantor` | — | `"unclear"` | FAQ silent |
| `credit_check` | — | `"standard"` | inferred |
| `international_tenant_policy` | — | `"accepted-case-by-case"` | inferred |
| `visa_expiry_handling` | — | `"unclear"` | — |
| `qualification_flexibility_signal` | — | `"standard"` | inferred |
| `realism_pathways` | — | `[]` | derivation |
| `grad_visa_realism` | `"unknown"` | `"unclear"` | too many unclears rule |
| `research_status` | `"unresearched"` | `"complete"` | — |
| `prices.studio` | existing | update min to `2600` (from Vertus site) | /apartments-to-rent |
| `prices.one_bed` | existing | update min to `3100` | /apartments-to-rent |
| `prices.two_bed` | existing | update min to `4200` | /apartments-to-rent |
| `prices.three_bed` | existing | update min to `6900` | /apartments-to-rent |
| `prices.price_transparency` | — | `"listed"` | Vertus publishes numbers |
| `prices.notes` | — | "Prices verified from thisisvertus.com/apartments-to-rent on 2026-04-16." | — |

### `george-street-vertus` → rename to `10 George Street (Vertus)`

Same qualification block as 8 Water Street. Pricing:
- Studio from £2,600
- 1-bed from £3,000
- 2-bed from £4,200
- 3-bed from £5,200

### `newfoundland` (canary-wharf)

Same qualification block. Keep existing `developer: "EcoWorld Ballymore"` and `operator: "Vertus"` — the split is correct. Pricing:
- Studio from £2,700
- 1-bed from £3,100
- 2-bed from £4,000
- 3-bed from £8,500

### `one-park-drive` (canary-wharf) — wrong operator

Change `operator` from "Vertus" to **"Canary Wharf Group / private landlords"** (or another slug matching dataset conventions for ownership-tower-with-individual-lettings). Keep `building_type: "Owner-Lease"`.

| Field | Proposed | Source |
|---|---|---|
| `agreement_type` | `"ast"` | Individual landlords default |
| `referencing_provider` | `"unclear"` | Varies per agent |
| `min_tenancy_months` | `null` | Varies |
| `income_multiple` | `30` | Industry default |
| `open_banking_accepted` | `"unclear"` | Varies |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + RRA |
| `accepts_professional_guarantor` | `"unclear"` | Per-landlord |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Per-landlord |
| `credit_check` | `"standard"` | Individual-landlord default |
| `international_tenant_policy` | `"accepted-case-by-case"` | Varies |
| `visa_expiry_handling` | `"unclear"` | Per-listing |
| `qualification_flexibility_signal` | `"unclear"` | Varies |
| `realism_pathways` | `[]` | No operator-wide pathway |
| `grad_visa_realism` | **preserve `"unlikely"`** | Prior authored verdict correct given secondary-market nature |
| `research_status` | `"complete"` | — |

Narrative notes:
> Ownership tower (58 storeys, Herzog & de Meuron — Pritzker credential). Rentals are secondary-market only — individual owners letting via external agents (Crown Home Buying, Foxtons, Circa London, Canary Wharf Residential). Not part of Vertus's BTR portfolio despite sitting inside the Wood Wharf masterplan. Qualification varies per listing; no single operator policy. Income multiples at this price tier (1-beds commonly £3,500-5,000/mo) put affordability at £105-150k/year — realism stays `"unlikely"` for Caner.

### `10-park-drive` (canary-wharf) — wrong operator

Same treatment. Change `operator` from "Vertus" to **"Canary Wharf Group / private landlords"**. Update `building_type` from `"BTR"` to **`"Owner-Lease"`** (correction — the dataset currently marks it BTR, which is incorrect given the ownership-tower reality).

Qualification block identical to One Park Drive above. Preserve any existing authored `grad_visa_realism`; otherwise default `"unlikely"`.

Narrative notes:
> Ownership tower (42 storeys, Stanton Williams). First Wood Wharf residential completion; sold to individual owners. Rentals via Foxtons / JOHNS&CO / Circa London / Crown Home Buying & Letting. Not part of Vertus's BTR portfolio despite sitting in Wood Wharf. Qualification varies per listing; no single operator policy.

---

## Sources

All sources from `operators/vertus.md`. Primary: `thisisvertus.com/faqs`, `thisisvertus.com/apartments-to-rent`, `cwg.com/portfolio-and-places/residential-leasing`, Wharf Life interview, CWG 18 Nov 2025 press release. Accessed 2026-04-16.

---

## Apply checklist

- [ ] User-confirm: reattribute `one-park-drive` operator from "Vertus" to ownership-tower secondary-market attribution
- [ ] User-confirm: reattribute `10-park-drive` operator from "Vertus" to ownership-tower secondary-market attribution; correct `building_type` from "BTR" to "Owner-Lease"
- [ ] User-confirm: rename `george-street-vertus` project from "3 & 10 George Street (Vertus)" to "10 George Street (Vertus)"
- [ ] User-confirm: whether to add `50-60 Charter Street (Vertus)` as a new project in canary-wharf.ts
- [ ] Apply Vertus BTR qualification block to `8-water-street`, `newfoundland`, and renamed `10 George Street (Vertus)`
- [ ] Apply secondary-market qualification block to reattributed `10-park-drive` and `one-park-drive`
- [ ] Update pricing for all four Vertus BTR buildings to 2026-04-16 Vertus-site figures
- [ ] Set `research_status: "complete"` on all five Vertus-batch projects
- [ ] Tombstone comment in canary-wharf.ts noting the operator corrections + the "Newfoundland was originally miscategorised as EcoWorld Ballymore" fix precedent + the 2026-04-16 finding that 10 Park Drive and One Park Drive were similarly miscategorised as Vertus BTR
