# Proposals — Folk Co-living

**Operator batch:** Licence-based co-living operators
**Date:** 2026-04-16
**Projects covered in dataset:** `folk-florence-dock` (battersea-park)
**Projects NOT in dataset (research documented for future additions):** Folk at Sunday Mills (Earlsfield), Folk at The Palm House (Harrow)

---

## Operator-level proposed qualification block

Applies identically to all Folk buildings. Derived from `context/data-upkeep/operators/folk.md`.

| Field | Proposed value | Source |
|---|---|---|
| `agreement_type` | `"licence"` | Folk FAQ — "licence agreement" language; zero deposit + holding fee model |
| `referencing_provider` | `"in-house"` | Folk FAQ — "for you to do a reference/background check" (no named third party) |
| `min_tenancy_months` | `1` (Florence Dock) / `3` (Sunday Mills, Palm House) | Folk FAQ — "minimum of 3 months at Sunday Mills and The Palm House, and with shorter available at Florence Dock" |
| `income_multiple` | `null` | Not published — judgement-based proof-of-income review |
| `open_banking_accepted` | `"unclear"` | Not named; in-house review likely accepts bank statements but OB as platform not mentioned |
| `upfront_rent_policy` | `"multi-month-available"` | Licence operator — structurally available lever |
| `accepts_professional_guarantor` | `"unclear"` | Not addressed in FAQ — direct enquiry needed |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Not addressed in FAQ |
| `credit_check` | `"lenient"` | "proof of income" + in-house review model; no credit-score floor |
| `international_tenant_policy` | `"welcomed"` | Folk FAQ verbatim: "we welcome residents from all walks of life and cultural backgrounds" |
| `visa_expiry_handling` | `"unclear"` | Not addressed in FAQ |
| `qualification_flexibility_signal` | `"flexible"` | In-house non-scorecard referencing + welcome language + zero deposit + short-stay flexibility at Florence Dock |
| `realism_pathways` | `["licence-exempt-light-ref", "with-upfront-licence"]` | Both pathway rules clear |
| `grad_visa_realism` | `"licence-exempt"` | Derived — consistent with current dataset value for Florence Dock |
| `research_status` | `"complete"` | |

---

## Per-project proposals

### `folk-florence-dock` (battersea-park) — IN DATASET

**Current state:**
- operator = `"Folk"`
- realism = `"licence-exempt"`
- preview notes "£1,695 price floor" (STALE — current minimum is £1,758 pcm 12-month)
- price_transparency = `"listed"`
- external_links point to `https://www.folkcoliving.com/homes/florence-dock` ✓

**Proposed changes:**

1. **Qualification block:** apply operator-level values above.
2. **Pricing update:** studio `{ min: 1758, max: 2268, currency: "GBP", per: "month" }`. Prior `min: 1695` is stale — Folk bumped rates during 2026. Bills_included: `true` (utilities + council tax + WiFi).
3. **Preview / notes update:** current preview says "£1,695 price floor fits inside budget envelope" — update to £1,758 to avoid misleading Caner at email-round time.
4. **Min tenancy:** Florence Dock uniquely supports short stays per Folk FAQ — set `min_tenancy_months: 1`. Other Folk buildings would be `3`.
5. **Cost tier:** unchanged — `mid-range` (1758 < 2000).

### Sunday Mills & Palm House — NOT IN DATASET

The batch prompt treats these as in scope, but neither Earlsfield nor Harrow is in the current `src/areas/data/` file set. Two possible follow-up actions (user decision, not this skill's scope):

- **Option A** — add Earlsfield and Harrow as new areas, each with a single Folk project. Both are genuine graduate-visa-friendly rental clusters. Earlsfield (SW18) has a Southwestern Railway station → Clapham Junction in 3 minutes and to Waterloo in ~20 minutes. Harrow (HA1) has Euston in 12 minutes on the Euston line. Both would be net additions to the dataset's qualification-friendly coverage.
- **Option B** — leave them out of the dataset but capture research in `context/notes/` for direct email shortlisting. Faster, no area-level grade research burden.

**Recommendation:** Option B short-term (add to housing-shortlist.md for the email round), Option A medium-term. This is outside the `data-upkeep` skill's remit.

---

## Narrative notes (for `project.notes`)

> Folk is a London co-living operator with licence-based agreements and in-house referencing. FAQ language is verbatim welcoming to international applicants ("we welcome residents from all walks of life and cultural backgrounds") and the booking flow is zero-deposit with a £200 holding fee redeemable against first month's rent. Florence Dock uniquely supports short stays (single nights possible); Sunday Mills and The Palm House have 3-month minimums. Realism is `licence-exempt` via the `licence-exempt-light-ref` pathway — structurally friendly to graduate-visa applicants. Multi-month upfront is an available lever (`with-upfront-licence` also clear). Open Banking and guarantor policies are not addressed publicly — direct enquiry would resolve those but does not block the dominant pathway. The Graduate visa August 2027 expiry date is not mentioned in FAQ; worth confirming at enquiry, though short-stay flexibility at Florence Dock and 3-month commitments at the other two make visa truncation moot.

---

## Pricing updates

| Project | studio min | studio max | bills_included | price_transparency | Source |
|---|---|---|---|---|---|
| folk-florence-dock | 1758 | 2268 | true | listed | folkcoliving.com/homes/florence-dock 2026-04-16 |

(Sunday Mills and The Palm House pricing captured in operator notes for future use if added to dataset.)

---

## Ghost-project flags

None. All three Folk buildings confirmed on `folkcoliving.com`.

---

## Sources

- https://www.folkcoliving.com/faqs
- https://www.folkcoliving.com/homes/florence-dock
- https://www.folkcoliving.com/homes/sunday-mills
- https://www.folkcoliving.com/homes/the-palm-house
- https://www.folkcoliving.com/co-living-at-folk

All accessed 2026-04-16.
