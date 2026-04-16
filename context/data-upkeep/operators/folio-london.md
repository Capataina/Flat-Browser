# Folio London — Operator Research (2026-04-16)

## Summary verdict

Folio London is Notting Hill Genesis's BTR arm. Their published policy is:

- **30x monthly income floor**
- **Guarantor option exists** but is stated in their reservation-form template as requiring a guarantor with "income of 30x the monthly rent" — the homeowner stipulation is in their broader policy rather than verbatim on the homepage. Multiple external sources (letting-industry directories, renting guides) describe Folio as UK-homeowner-guarantor-only in the standard NHG line.
- **No corporate guarantor service endorsed** (Housing Hand / Guarantid not named)
- **No overseas-guarantor route** documented
- Referencing is in-house / NHG-run; no Homeppl or Goodlord partnership found
- Open Banking acceptable for self-employed applicants ("verified by providing most recent Tax Return or via Open Banking")

For a graduate-visa applicant without UK credit, UK payslips, or a UK-resident homeowner guarantor, Folio is a hard block. The Open Banking reference exists only for self-employed income verification inside the standard affordability model — it does not substitute for missing credit history.

**Verdict:** `grad_visa_realism: "blocked"` preserved.

## Operator-level qualification table

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `"ast"` | Standard BTR / NHG residential |
| `referencing_provider` | `"in-house"` | NHG-administered; no third-party provider named |
| `min_tenancy_months` | `12` | Standard AST minimum |
| `income_multiple` | `30` | Verbatim: "minimum household income of 30 x the monthly rent" |
| `open_banking_accepted` | `"yes"` | Explicit — "verified by providing most recent Tax Return or via Open Banking" for self-employed |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + RRA 1 May 2026 |
| `accepts_professional_guarantor` | `"no"` | Guarantor must be homeowner with 30x rent income — corporate services not in scope |
| `accepts_individual_overseas_guarantor` | `"no"` | UK-resident homeowner required |
| `credit_check` | `"standard"` | Standard UK credit-reference check; no explicit floor but thin files likely referred to guarantor |
| `international_tenant_policy` | `"accepted-case-by-case"` | Right-to-Rent check; no welcoming language |
| `visa_expiry_handling` | `"unclear"` | Not addressed |
| `qualification_flexibility_signal` | `"standard"` | No positive flex anecdotes found; no hard-rigid signals either |

## Pathway derivation

| Pathway | Fires? | Why |
|---|---|---|
| `standard-passable` | ❌ | `credit_check: "standard"` not `"lenient"`; Caner lacks UK credit |
| `with-professional-guarantor` | ❌ | `"no"` |
| `with-savings` | ❌ | Not Homeppl |
| `with-co-signer-overseas` | ❌ | `"no"` |
| `with-upfront-licence` | ❌ | AST |
| `licence-exempt-light-ref` | ❌ | AST |

**Result:** `realism_pathways: []`, `grad_visa_realism: "blocked"`.

**Block reason:** UK-homeowner-guarantor requirement with no corporate guarantor service and no overseas guarantor route. Caner has neither a UK-resident guarantor nor a homeowner co-signer. No alternative pathway exists.

## Affected dataset projects

### 1. Rathbone Market (Folio London) — `rathbone-market` in `canning-town.ts`

**Status:** **Real.** Confirmed 35-unit Folio London BTR at Muse-developed Rathbone Market, near Canning Town station. Portfolio page lists it. HomeViews reviews exist.

**Current dataset state:**
- `operator: "Folio London"` ✓
- `realism: "unknown"` — upgrade to `"blocked"` with clear reason

**Proposed change:**
- Set `realism: "blocked"`
- Populate qualification block per table above
- `grad_visa_realism: "blocked"`, `notes: "Folio London (Notting Hill Genesis BTR arm) requires a UK-homeowner guarantor with 30x rent income when affordability fails. No corporate guarantor service, no overseas co-signer route. Caner cannot clear either the direct affordability gate or the guarantor fallback — hard block."`

## Other Folio London references in dataset

### Royal Wharf (Ballymore) — `royal-wharf-and-docks.ts`

The area file at line 16 and 165 references "Ballymore / Folio London (manages 265 rental apartments)" at Royal Wharf. This is **an area-level reference in the cross-operator narrative**, not a standalone project attributed to Folio. Royal Wharf's primary attribution in the project list is Ballymore. No action needed on this as a project ghost/wrong-op flag.

However, if Caner is considering Royal Wharf rentals, the 265-unit Folio portion would fall under the same hard-block policy. Worth noting in area-level narrative.

### Other UK-homeowner-only operators found

Grep did not surface additional operators with the "UK-homeowner guarantor only" policy as a structural hard block in the current dataset — the other candidate-shaped operators (Way of Life, Moda, Essential Living) are already flagged with their own hard blocks in this batch. Grainger had previously been flipped to achievable-with-guarantor per the 2026-04-16 shortlist round.

## Sources

| URL | Label | Type | Accessed |
|---|---|---|---|
| https://foliolondon.co.uk/ | Folio London homepage | operator | 2026-04-16 |
| https://folioflexi.focus-mars.co.uk/wp-content/uploads/2024/05/Folio-London-Reservation-Form-for-Rent-Under-1500.pdf | Folio Reservation Agreement — income + guarantor clauses | operator | 2026-04-16 |
| https://www.homeviews.com/development/folio-london-rathbone-market-e16 | HomeViews — Rathbone Market | homeviews | 2026-04-16 |
| https://foliolondon.co.uk/developments/royal-wharf/ | Folio London — Royal Wharf | operator | 2026-04-16 |
