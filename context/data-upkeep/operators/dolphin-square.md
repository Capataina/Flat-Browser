# Dolphin Square / Dolphin Living — operator findings

**Research date:** 2026-04-16
**Researcher:** data-upkeep agent (mid-tier / long-tail batch)

**Critical distinction — these are two separate entities sharing a name:**

1. **Dolphin Living** — *charitable* housing provider (part of the Dolphin Square Charitable Foundation / Dolphin Square Foundation). Delivers *intermediate rent* to Westminster key workers, with hard eligibility gates (income cap, savings cap, local-connection / key-worker test). **Caner is hard-blocked** at this operator.

2. **Dolphin Square Ltd** (also operates as "Dolphin Square Operator Limited") — the *commercial* rental arm that operates the 1930s Dolphin Square mansion blocks (Chichester Street, Pimlico SW1V), post-Delancey refurbishment. Markets as **"zero deposit" + "flexible tenancies"** — international-friendly commercial rental. **Caner is potentially viable here.**

Plus: **Dolphin House Serviced Apartments** — premium serviced apartment product at the same Dolphin Square complex, operated under the Dolphin Square brand. Licence-based, hospitality-flavoured. Also international-friendly.

---

## Entity 1 — Dolphin Living (charitable)

### Portfolio verification

One dataset project attributed to this operator:

| Dataset ID | Name | Verified? |
|---|---|---|
| `dolphin-square` (Pimlico) | "Dolphin Square" (PRS, Delancey dev) | **Probably mis-attributed.** The `dolphin-square` project in `pimlico.ts` has `operator: "Dolphin Living"` but describes the 1930s mansion-block redevelopment operated commercially by Dolphin Square Ltd. This appears to be a 2026-04-12 agent conflation. |

### Structural qualification facts

| Field | Value | Evidence |
|---|---|---|
| `agreement_type` | `ast` | Intermediate rent via assured shorthold tenancy, typical of housing-association products. |
| `referencing_provider` | `in-house` | Charitable provider with own application process. |
| `income_multiple` | n/a (income cap instead) | Upper income cap of £90,000 household (Mayoral intermediate limit) — *cap*, not multiple. Below a floor is also typically required. |
| `open_banking_accepted` | `unclear` | Not addressed in eligibility documentation. |
| `upfront_rent_policy` | `one-month-ast-cap` | AST + RRA. |
| `accepts_professional_guarantor` | n/a | Eligibility gate is the hard block, not guarantor acceptance. |
| `accepts_individual_overseas_guarantor` | n/a | Same. |
| `credit_check` | `standard` | Standard UK process. |
| `international_tenant_policy` | `rejected` | Eligibility requires *live or work in Westminster*, **key worker status** (NHS clinical, teachers, police, social care — with typically 12 months continuous Westminster employment), savings of £22,500, and earn less than £90k. Caner is unemployed, not a Westminster key worker, and on a Graduate visa — fails multiple eligibility tests. |
| `visa_expiry_handling` | `rejected` | Follows from eligibility failure. |
| `qualification_flexibility_signal` | `rigid` | Charitable eligibility tests are not discretion-flexed. |

### Realism for Caner

**`grad_visa_realism: "blocked"`** — charitable intermediate-rent product with key-worker + income + Westminster-connection gates Caner cannot pass.

Same category as councils / housing-association shared ownership: not accessible to private renters like Caner.

---

## Entity 2 — Dolphin Square Ltd (commercial)

### Portfolio verification

Two dataset projects belong here (after correcting attribution):

| Dataset ID | Name | Verified? |
|---|---|---|
| `dolphin-square` (Pimlico) | "Dolphin Square" (PRS, Delancey) | **Should be re-attributed to Dolphin Square Ltd**, not Dolphin Living. Delancey owns; Dolphin Square Ltd operates commercial rentals. The 1930s mansion-block refurbishment is now fully commercial rental with pricing published on `dolphinsquare.co.uk`. |
| `dolphin-house-pimlico` | "Dolphin House Serviced Apartments" | Correctly attributed to "Dolphin Square" (commercial brand). Premium serviced apartment product, all-inclusive, licence. |

### Structural qualification facts (commercial Dolphin Square)

| Field | Value | Evidence |
|---|---|---|
| `agreement_type` | `ast` for Dolphin Square flats; `licence` for Dolphin House Serviced Apartments | Dolphin Square rental listings reference "LONG LET" AST-style terms but also publish "zero deposit" + "flexible tenancies" options. Serviced apartments are explicitly licence-based. |
| `referencing_provider` | `unclear` | Not named on site. Application page (`uk.on-site.com/apply/property/267492`) runs on OnSite's application platform; could be in-house or light-touch. |
| `income_multiple` | `unclear` | Not published. |
| `open_banking_accepted` | `unclear` | Not addressed. |
| `upfront_rent_policy` | `multi-month-available` (zero-deposit model implies willingness to accept alternative qualification structures; typical commercial luxury-central-London rental accepts upfront offers); `one-month-ast-cap` strictly if AST | The "zero deposit" marketing line is evidence of commercial flexibility. |
| `accepts_professional_guarantor` | `unclear` | Not named; commercial luxury-central-London rental commonly accepts Housing Hand / corporate guarantors. |
| `accepts_individual_overseas_guarantor` | `unclear` | Not addressed. |
| `credit_check` | `standard` | Typical commercial rental. |
| `international_tenant_policy` | `accepted-case-by-case` / trending `welcomed` | Zero deposit + flexible tenancy + pet-friendly + long-let marketing to Zone 1 central London tenants strongly implies international-friendly positioning. Not verbatim. |
| `visa_expiry_handling` | `unclear` | Not addressed on marketing pages. |
| `qualification_flexibility_signal` | `flexible` | "Zero deposit" + "flexible tenancies" verbatim marketing = documented flex lever. |
| `min_tenancy_months` | `6` (Dolphin Square flats, AST); `1` (Dolphin House Serviced Apartments) | Commercial central London rental norms. |

### Realism pathways (Dolphin Square Ltd — commercial rental)

| Pathway | Fires? | Reason |
|---|---|---|
| `standard-passable` | No | Too many `unclear` fields on the happy-path check |
| `with-professional-guarantor` | No | `"unclear"` |
| `with-savings` | No | Not Homeppl-native |
| `with-co-signer-overseas` | No | `"unclear"` |
| `with-upfront-licence` | Yes (for serviced apartment) | Dolphin House = licence + multi-month supported |
| `licence-exempt-light-ref` | Yes (for serviced apartment) | Dolphin House Serviced Apartments = licence + effectively in-house/light referencing |

**Dolphin Square flats (AST):**
- Pathways: too many unclear, schema → `realism_pathways: []`, `grad_visa_realism: "unclear"`
- But with the `"flexible" qualification_flexibility_signal` + verbatim "zero deposit" + "flexible tenancy" marketing, **this is genuinely one of the more approachable central-London options for Caner** — direct enquiry is the deciding action.
- Suggest: preserve the previous `"unknown"` as a softer `"unclear"` rather than collapsing to `"blocked"`.

**Dolphin House Serviced Apartments:**
- Pathways fire: `["with-upfront-licence", "licence-exempt-light-ref"]`
- `grad_visa_realism: "licence-exempt"` (rule 2 — licence-exempt-light-ref priority)
- Current `licence-exempt` is correct; preserve.

---

## Pricing (side-effect)

| Project | studio | one_bed | two_bed | three_bed | bills_included | price_transparency |
|---|---|---|---|---|---|---|
| `dolphin-square` (commercial flats) | 2200+ | 2959-3532 | 3983-4600 | 6056+ | unknown (varies) | listed |
| `dolphin-house-pimlico` (serviced) | - | - | - | - | yes | enquire |

Verified from `dolphinsquare.co.uk/` and `dolphinsquare.co.uk/apartments` on 2026-04-16, plus Rightmove listings.

---

## Proposal — attribution correction

**`dolphin-square` project currently has `operator: "Dolphin Living"`.** This appears to be mis-attribution. Delancey owns the physical asset; Dolphin Square Ltd operates the commercial rental business; Dolphin Living is the separate charitable intermediate-rent arm that *does not* run the 1930s mansion-block commercial product.

**Suggested fix:** change `operator` from `"Dolphin Living"` to `"Dolphin Square"` (matching the `dolphin-house-pimlico` attribution, since they're the same commercial operator). Update `realism` from `unknown` → `unclear` with the flexible-signal narrative.

**Flag for user review:** this is a *Category B (wrong operator attribution)* flag per `ghost-project-detection.md`. Surface at Phase 3 for user confirmation before applying.

---

## Sources

- https://www.dolphinsquare.co.uk/ (accessed 2026-04-16, operator — commercial)
- https://www.dolphinsquare.co.uk/apartments (accessed 2026-04-16, operator — commercial)
- https://www.dolphinsquare.co.uk/Dolphin-House-serviced-apartments (accessed 2026-04-15, operator — serviced)
- https://www.rightmove.co.uk/property-to-rent/Dolphin-Square.html (accessed 2026-04-16, listings — verifies zero-deposit + flexible-tenancy marketing verbatim)
- https://www.zoopla.co.uk/find-agents/branch/dolphin-square-operator-limited-london-19088/ (accessed 2026-04-16, verifies "Dolphin Square Operator Limited" as the distinct letting agent entity)
- https://www.dolphinliving.com/find-a-home/am-i-eligible (accessed 2026-04-16, operator — charitable; eligibility gates)
- https://www.dolphinliving.com/ (accessed 2026-04-16, operator — charitable)
- https://www.dolphinsquarefoundation.com/what-we-do/accelerator-scheme (accessed 2026-04-16, foundation)
