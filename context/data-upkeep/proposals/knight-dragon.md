# Proposals — Knight Dragon / Greenwich Peninsula Living

## Operator-level facts (apply to every Knight Dragon BTR project)

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `ast` | Inferred — standard BTR structure; 1-week holding + 5-week deposit language on tenants page |
| `referencing_provider` | `unclear` | Not named publicly on operator site |
| `open_banking_accepted` | `unclear` | Not mentioned |
| `income_multiple` | `null` | Affordability calculator exists but specific multiple not published |
| `accepts_professional_guarantor` | `unclear` | Not addressed |
| `accepts_individual_overseas_guarantor` | `unclear` | Not addressed |
| `upfront_rent_policy` | `one-month-ast-cap` | Inferred from AST + post-RRA |
| `credit_check` | `unclear` | Standard referencing implied but strictness not stated |
| `international_tenant_policy` | `unclear` | Not addressed |
| `visa_expiry_handling` | `unclear` | Not addressed |
| `qualification_flexibility_signal` | `unclear` | No documented flex or rigidity cases |
| `min_tenancy_months` | `null` | Not stated; BTR-default is 12 but don't assert without verification |

## Realism pathway suggestions

All pathway tests fail due to the `unclear`-dominated field set. `>3 structural fields unclear/unknown` rule applies → force `grad_visa_realism: "unclear"`.

**Pathway array:** `[]`
**Suggested `grad_visa_realism`:** `"unclear"` (preserve authored state; previously `"unknown"` on all projects)

## Per-project variations

| Project | Variation from operator defaults |
|---|---|
| `upper-riverside-1-3` | None (structural); pricing `one_bed: { min: 2100, max: 2800 }` per preview; `price_transparency: "listed"` |
| `upper-riverside-4-5` | None (structural); pricing `one_bed: { min: 2500, max: 3500 }` per flagship tier |
| `the-waterman` | None (structural); pricing `one_bed: { min: 2250, max: 2600 }` per 2026-04-16 shortlist memory + operator range |
| `peninsula-gardens` | None (structural); pricing `studio: { min: 1900, max: 2150 }`, `one_bed: { min: 1900, max: 2400 }` per operator range |
| `peninsula-riverfront` | Structural same; **flag for user review** — overlaps with Upper Riverside 1-3 per preview's own admission; pricing `one_bed: { min: 2500, max: 3500 }` if retained |
| `morden-wharf` | Operator is Galliard/CDL, not Knight Dragon. No change — future phase, not a Knight Dragon research target |

## Pricing (side-effect)

| Project | studio | one_bed | two_bed | bills_included | price_transparency |
|---|---|---|---|---|---|
| `upper-riverside-1-3` | — | 2100–2800 | — | false | listed |
| `upper-riverside-4-5` | — | 2500–3500 | — | false | listed |
| `the-waterman` | — | 2250–2600 | — | false | listed |
| `peninsula-gardens` | 1900–2150 | 1900–2400 | 2050–3500 | false | listed |
| `peninsula-riverfront` | — | 2500–3500 | — | false | listed |
| `morden-wharf` | — | — | — | — | unknown (unchanged) |

Caveat: operator publishes portfolio-wide ranges rather than per-building rates; per-building figures above are reasonable extrapolations, not direct quotes. `prices.notes` should carry: "Extrapolated from Greenwich Peninsula Living portfolio-wide range published 2026-04-16; per-building precision requires direct enquiry."

## Ghost-project flags

**Category D — duplicate / overlap candidate (1 project):**
- `peninsula-riverfront` overlaps with the Upper Riverside entries per its own preview text: "May overlap with existing Upper Riverside entries." Recommend user review — either merge into an Upper Riverside-district entry with a consolidated architectural note, or keep as distinct Riverfront sub-cluster with explicit cross-reference in `notes`. Do not delete without user confirmation.

**Missing from dataset (discovery flags, not ghost):** The Lighterman (Lower Riverside), Roper (Parkside), The Moore (Parkside) — present on operator portfolio, absent from dataset. Additions are out of v1 scope — flag for Phase 1 discovery extension.

## Notes

**Operator-wide narrative (for all Knight Dragon projects):**
> Knight Dragon operates Greenwich Peninsula's residential portfolio via its ARLA-accredited lettings arm, Greenwich Peninsula Living. Referencing provider and qualification policies are not publicly documented — direct enquiry is the only path to resolve eligibility for applicants without UK payslips. Portfolio spans Upper Riverside (premium waterfront including Tom Dixon No.4 and SOM No.5), Lower Riverside (The Waterman BTR, Peninsula Gardens, The Lighterman), and Parkside (Roper, The Moore). Pricing around £1,900-2,150 for studios, £1,500-2,600 for 1-beds, £2,050-3,500 for 2-beds across the portfolio (Apr 2026).

## Sources

See `operators/knight-dragon.md` § "Sources" for the full URL list.
