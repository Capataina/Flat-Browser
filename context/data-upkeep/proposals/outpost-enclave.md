# Proposals — Outpost Management / Enclave (BlackRock)

**Operator batch:** Licence-based co-living operators (scope audit — Enclave is AST with exceptional FAQ documentation)
**Date:** 2026-04-16
**Projects covered:** `enclave-acton` (north-acton), `enclave-croydon` (croydon)

---

## Operator-level proposed qualification block

Applies to both Enclave projects with Acton/Croydon variations noted below. Derived from `context/data-upkeep/operators/outpost-enclave.md`.

| Field | Proposed value | Source |
|---|---|---|
| `agreement_type` | `"ast"` | "tenancy agreement" language; 6-18 month terms |
| `referencing_provider` | `"in-house"` (Rightmove Referencing — not Homeppl/Goodlord/Canopy canonical) | Verbatim: "our referencing company" referring to Rightmove Referencing |
| `min_tenancy_months` | `6` | Verbatim: "minimum of 6-months & maximum of 18-months" |
| `income_multiple` | `30` (Acton) / `30` effective at Croydon (2.5× annual = 30× monthly, floor £27k) | Verbatim FAQ both sites |
| `open_banking_accepted` | `"unclear"` | Not addressed — Rightmove Referencing is not Open Banking-primary |
| `upfront_rent_policy` | `"multi-month-available"` | **Verbatim: "Advance rental payments are an option if a household does not pass the affordability criteria."** Critical — this is the strongest published fallback of any AST operator. Note RRA post-May-2026 policy re-verification needed. |
| `accepts_professional_guarantor` | `"yes"` | **Verbatim: "We also offer the option of securing an apartment with the assistance of a guarantor."** FAQ-published. |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Not explicitly addressed; international-welcome language suggests acceptance but not verbatim |
| `credit_check` | `"standard"` | Rightmove Referencing standard; "credit score checked" verbatim for overseas applicants |
| `international_tenant_policy` | `"welcomed"` | Verbatim: "Many of our residents come from overseas and move straight into Enclave buildings as soon as they land in the UK." |
| `visa_expiry_handling` | `"unclear"` | Not addressed |
| `qualification_flexibility_signal` | `"flexible"` | **Strongest FAQ-documented flexibility in the dataset** — two published fallback paths |
| `realism_pathways` | `["with-professional-guarantor"]` | Verbatim guarantor acceptance clears this rule |
| `grad_visa_realism` | `"achievable-with-guarantor"` | Derived — matches Croydon current, CORRECTS Acton from `"achievable"` |
| `research_status` | `"complete"` | |

---

## Per-project proposals

### `enclave-acton` (north-acton)

**Current state:**
- operator = `"Outpost Management (Enclave brand) / BlackRock"`
- realism = `"achievable"` ← CORRECT TO `"achievable-with-guarantor"`
- preview says "Co-living model with lighter referencing — likely visa-friendly"
- price_transparency = `"listed"`
- pricing £1,975 all-inclusive (dataset) vs. current enclave.com listed £1,860-£2,125

**Proposed changes:**

1. **Qualification block:** apply operator-level values above.
2. **Realism correction:** `achievable` → `achievable-with-guarantor`. Rationale: `with-professional-guarantor` is a conditional pathway — the umbrella verdict per `deriveRealism` is `"achievable-with-guarantor"`, not `"achievable"`. The `"achievable"` verdict requires `standard-passable` (all four fields clear), which Enclave doesn't satisfy (credit_check standard, Open Banking unclear).
3. **Preview rewrite:** current preview says "Co-living model with lighter referencing — likely visa-friendly". This undersells Enclave's actual strength. Replace with: "All-inclusive AST with exceptional FAQ-documented qualification flexibility — Rightmove Referencing with two published fallbacks: guarantor option OR advance rental payments if affordability fails. 6-18 month terms, no security deposit, £250 holding fee against first month. Verbatim international welcome. Best-in-class option among AST operators for graduate-visa applicants."
4. **Pricing update:** studio `{ min: 1860, max: 2125, currency: "GBP", per: "month" }`. Bills included: true. `price_transparency: "listed"`.
5. **External URL:** keep `https://enclave.com/locations/acton` — correct and current.
6. **Note on RRA:** add to project notes that the post-May-2026 Advance Rental Payments fallback status should be re-verified.

### `enclave-croydon` (croydon)

**Current state:**
- operator = `"Enclave (Outpost)"`
- realism = `"achievable-with-guarantor"` ✓ (correct)
- pricing £2,230 1-bed (dataset)
- all-inclusive, no deposit model

**Proposed changes:**

1. **Qualification block:** apply operator-level values (with Croydon income multiple note: `£27,000 floor OR 2.5× annual rent whichever is higher`).
2. **Realism:** no change.
3. **Per-building note on student policy:** Croydon FAQ has unique verbatim language for students: "students must either have a UK-based guarantor and pay 6-months upfront, or if a guarantor is not available, the full tenancy must be paid upfront." This is a partial qualification path available for Caner IF he applies under a student-adjacent status (unlikely given graduate-visa, but worth noting).
4. **Pricing:** no change.
5. **External URL:** add `https://enclave.com/locations/croydon` / `https://enclave.com/locations/croydon/faqs` if not already present.

---

## Narrative notes

### For `enclave-acton.notes`

> Enclave: Acton is operated by Outpost Management (BlackRock JV) with a 462-unit, 32-storey, 18,000 sq ft-amenity tower on the North Acton Central Line corridor. Despite the co-living-branded product, the agreement is standard AST (6-18 month terms) with Rightmove Referencing — the structural advantage is not the agreement type but Outpost's published qualification flexibility. The Enclave FAQ verbatim documents two fallback paths for applicants who fail the 30× income test: (1) professional guarantor, or (2) advance rental payments. This is the strongest FAQ-documented flexibility of any AST operator in the dataset. Realism for Caner derives to `achievable-with-guarantor` via `with-professional-guarantor` pathway (verbatim acceptance). The advance-rental-payments fallback is particularly interesting because it pre-dates the RRA 2025 1-month cap — post-May-2026 re-verification is needed on whether that fallback remains. International welcome is verbatim: "Many of our residents come from overseas and move straight into Enclave buildings as soon as they land in the UK."

### For `enclave-croydon.notes`

> Enclave: Croydon is the Outpost/BlackRock 817-unit, 50-storey tower — all-inclusive AST with no deposit, Rightmove Referencing, and the same two FAQ-published qualification fallbacks as Acton (guarantor + advance rental payments). Income floor is £27,000 annual OR 2.5× annual rent, whichever is higher. For students specifically, Croydon publishes a unique pathway: "students must either have a UK-based guarantor and pay 6-months upfront, or if a guarantor is not available, the full tenancy must be paid upfront" — this is the only operator in the dataset with an explicit no-guarantor / pay-everything-upfront student fallback. Realism `achievable-with-guarantor` via `with-professional-guarantor` stands. Same RRA post-May-2026 advance-rental re-verification caveat applies.

---

## Pricing updates

| Project | studio min | studio max | 1-bed min | bills_included | price_transparency | Source |
|---|---|---|---|---|---|---|
| enclave-acton | 1860 | 2125 | — | true | listed | enclave.com/locations/acton 2026-04-16 |
| enclave-croydon | (unchanged) | — | 2230 | true | listed | dataset value retained |

---

## Ghost-project flags

None. Both Enclave buildings confirmed. Outpost/BlackRock JV is an active, well-documented partnership.

---

## Sources

- https://enclave.com/faqs
- https://enclave.com/locations/acton
- https://enclave.com/locations/acton/faqs
- https://enclave.com/locations/croydon
- https://enclave.com/locations/croydon/faqs
- https://www.outpostmgt.com/page11.html
- https://realassets.ipe.com/news/blackrock-and-outposts-uk-residential-partnership-adds-462-unit-project/10071728.article
- https://tideconstruction.co.uk/latest-news/enclave-acton-opens/
- https://www.propertyweek.com/finance/blackrock-and-outpost-jv-closes-north-london-btr-acquisition-from-tide

All accessed 2026-04-16.
