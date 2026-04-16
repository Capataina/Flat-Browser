# Proposals — Gravity Co

**Operator batch:** Licence-based co-living operators
**Date:** 2026-04-16
**Projects covered:** `gravity-west-hampstead` (west-hampstead)

---

## Operator-level proposed qualification block

| Field | Proposed value | Source |
|---|---|---|
| `agreement_type` | `"unclear"` | "customer/member" language suggests licence; deposit protection + PRS membership suggests AST; research inconclusive |
| `referencing_provider` | `"in-house"` | Gravity runs own checks; no named third-party |
| `min_tenancy_months` | `1` | T&Cs document 1-12 month stays |
| `income_multiple` | `25` | Verbatim T&Cs: "You must earn at least 25 times the monthly rent per year" |
| `open_banking_accepted` | `"unclear"` | Not addressed |
| `upfront_rent_policy` | `"unclear"` | Batch prompt hypothesises a workaround; research couldn't verify verbatim |
| `accepts_professional_guarantor` | `"unclear"` | "Guarantor earning 30x" clause not specific to corporate-service acceptance |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Not addressed; "30x monthly rent" guarantor doesn't specify UK residency |
| `credit_check` | `"standard"` | "Fail the checks" language in holding fee clause implies screening |
| `international_tenant_policy` | `"accepted-case-by-case"` | No explicit welcome statement; generic professional targeting |
| `visa_expiry_handling` | `"unclear"` | Not addressed |
| `qualification_flexibility_signal` | `"standard"` | No positive or negative signal |
| `realism_pathways` | `[]` | No pathway clears without upfront workaround verification |
| `grad_visa_realism` | `"unclear"` | **DOWNGRADE from `"licence-exempt"`** — see rationale |
| `research_status` | `"complete"` | |

### Realism downgrade rationale

Current dataset tag is `"licence-exempt"`. Research reveals Gravity Co publishes a 25× income floor and a 30× guarantor floor — neither pathway is viable for Caner without a verified upfront workaround. The pathway rules don't clear with the evidence surfaced.

The `"licence-exempt"` tag assumed a Folk/Node-style no-referencing flow. Gravity's published T&Cs are closer to a BTR operator — income multiple, guarantor income test, holding-fee forfeiture on failed checks. The honest realism is `"unclear"` pending direct enquiry about:

- Whether full-stay-upfront is an accepted alternative path (would clear `with-upfront-licence`)
- Whether the agreement type for 12-month is actually licence or AST

Per the realism-pathway derivation rules, when more than 3 fields are `"unclear"`/`"unknown"`, realism becomes `"unclear"` regardless of pathway derivation. Gravity has 6 fields at `unclear` — well above the threshold.

---

## Per-project proposals

### `gravity-west-hampstead` (west-hampstead)

**Current state:**
- operator = `"Gravity Co"`
- realism = `"licence-exempt"` ← DOWNGRADE to `"unclear"`
- preview mentions £1,400/month, 3-month minimum
- price_transparency = `"listed"`

**Proposed changes:**

1. **Qualification block:** apply operator-level values above.
2. **Realism downgrade:** `licence-exempt` → `unclear`. Rationale: published income/guarantor thresholds + too many unclear fields. Preserved state `"unclear"` is authored judgement via `deriveRealism(pathways, "unclear")`.
3. **Pricing:** no change to £1,400 if unverified — but flag for re-verification. Bills partial (utilities yes, council tax no) — update `bills_included: true` only if utilities-inclusive counts as "bills included" in this dataset's convention. See note below.
4. **External URL:** no change.
5. **Preview update:** current preview says "Licence agreement" — this should be softened to "Co-living agreement (licence/AST unclear)" to match research.

---

## Narrative notes (for `project.notes`)

> Gravity Co publishes a 25× monthly rent annual income threshold or a 30× guarantor-income threshold as the affordability gate — strictest of any operator in this licence-class batch. The agreement type (licence vs AST) is ambiguous in their public T&Cs; they use "customer/member" language but also reference deposit protection schemes and PRS redress membership, suggesting a hybrid or mixed model. The hypothesised "pay-upfront-for-entire-stay" international workaround was not verifiable from public sources on this research pass — it may exist operationally but is not published. For Caner, this makes Gravity an `unclear` realism pending direct enquiry on two specific questions: (1) is the 12-month agreement a licence, and (2) will they accept full-stay-upfront in lieu of the income/guarantor test. If yes to both, Gravity is a clear `achievable-with-guarantor` via `with-upfront-licence`; if no, it's close to `unlikely`. Bills-inclusive covers utilities but excludes council tax — factor this into the total monthly budget. West Hampstead location has good connectivity via underground, overground, and Thameslink.

---

## Pricing updates

| Project | studio min | bills_included | price_transparency | Source |
|---|---|---|---|---|
| gravity-west-hampstead | 1400 (re-verify) | true (utilities only; council tax excluded) | listed | gravityco.co/location/west-hampstead/ — needs refresh |

---

## Ghost-project flags

None. Gravity Co West Hampstead confirmed at 11 Dennington Park Road NW6 1BB.

---

## Sources

- https://gravityco.co/
- https://gravityco.co/faq/
- https://gravityco.co/terms-and-conditions/
- https://gravityco.co/location/west-hampstead/
- https://gravityco.co/how-co-living-gravity/
- https://gravityco.co/process-booking-co-living-space-and-what-expect/
- https://proptech-x.com/proptech-x-gravity-co-expands-london-portfolio-with-new-west-hampstead-property/
- https://btrnews.co.uk/gravity-co-opens-its-west-hampstead-co-living-scheme/

All accessed 2026-04-16.
