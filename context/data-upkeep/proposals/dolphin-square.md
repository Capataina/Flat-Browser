# Proposals — Dolphin Square (commercial) + Dolphin Living (charitable)

## Critical — these are two separate operators sharing "Dolphin" in the name

- **Dolphin Living** — charitable intermediate-rent (Westminster key workers only). Caner is hard-blocked.
- **Dolphin Square Ltd** — commercial rental of the 1930s Pimlico mansion-block complex. Caner is potentially viable.
- **Dolphin Square / Dolphin House Serviced Apartments** — the commercial serviced-apartment product at the same complex. Caner is `licence-exempt`.

The dataset currently carries one project (`dolphin-square`) attributed to the wrong operator (`Dolphin Living`). This is a **Category B wrong-operator-attribution flag** per `ghost-project-detection.md`.

---

## Entity A — Dolphin Living (charitable) — applies to affected projects only

### Operator-level facts

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `ast` | Intermediate-rent housing product. |
| `referencing_provider` | `in-house` | Charitable provider runs own process. |
| `income_multiple` | n/a | Income *cap* of £90k (Mayoral) applies, not a multiple. |
| `open_banking_accepted` | `unclear` | Not addressed. |
| `upfront_rent_policy` | `one-month-ast-cap` | AST + RRA. |
| `accepts_professional_guarantor` | `unclear` | Moot — eligibility gate is the block. |
| `accepts_individual_overseas_guarantor` | `unclear` | Moot. |
| `credit_check` | `standard` | Standard process. |
| `international_tenant_policy` | `rejected` | Eligibility requires Westminster key-worker status, live/work in Westminster for 12 months continuous, £22,500 savings cap, income <£90k. Caner fails multiple tests. |
| `visa_expiry_handling` | `rejected` | Follows from eligibility. |
| `qualification_flexibility_signal` | `rigid` | Charitable eligibility tests are not flex-able. |
| `min_tenancy_months` | `12` | Standard housing-association term. |

### Realism

`realism_pathways: []`
`grad_visa_realism: "blocked"` (preserved via authored block — note: *eligibility block*, not a Homeppl-rejection block)

### Projects affected

| Project | Current realism | Suggested realism | Reason |
|---|---|---|---|
| `dolphin-square` in `pimlico.ts` | `unknown`, attributed to "Dolphin Living" | **Attribution is wrong** — this is actually a Dolphin Square Ltd commercial product, not a Dolphin Living charitable product. See Entity B below. |

No projects in the current dataset are *correctly* attributed to Dolphin Living as the charitable intermediate-rent operator. If such projects appear in future sweeps (e.g. Lanhill Road, Westminster-only sites), apply the eligibility block.

---

## Entity B — Dolphin Square Ltd (commercial)

### Operator-level facts

| Field | Dolphin Square flats (AST) | Dolphin House Serviced Apartments (licence) | Source |
|---|---|---|---|
| `agreement_type` | `ast` | `licence` | Marketing refers to "long let" + AST norms for flats; serviced apartments are explicit licence. |
| `referencing_provider` | `unclear` | `none` / very light | Application via OnSite platform; serviced apartments book directly. |
| `income_multiple` | `unclear` | n/a | Not published for commercial flats. |
| `open_banking_accepted` | `unclear` | n/a | Not addressed. |
| `upfront_rent_policy` | `one-month-ast-cap` (AST + RRA, strict reading) but zero-deposit marketing suggests alternative qualification structures | `multi-month-available` | "Zero deposit available" verbatim on Rightmove listings for Dolphin Square flats. |
| `accepts_professional_guarantor` | `unclear` | n/a | Not named; luxury-central rental commonly accepts. |
| `accepts_individual_overseas_guarantor` | `unclear` | n/a | Not addressed. |
| `credit_check` | `standard` | `none` | Commercial rental norm; serviced apartment = card on file. |
| `international_tenant_policy` | `accepted-case-by-case` (trending `welcomed`) | `welcomed` | Zero-deposit, flexible-tenancy, pet-friendly, Zone 1 marketing suggests international-friendly. Serviced apartments are explicitly for travellers. |
| `visa_expiry_handling` | `unclear` | `ignored` | Not addressed for AST; serviced apartments don't care about visa length. |
| `qualification_flexibility_signal` | `flexible` | `flexible` | Verbatim "zero deposit" + "flexible tenancies" marketing = documented flex. |
| `min_tenancy_months` | `6` | `1` | Commercial central-London rental norms. |

### Realism pathway suggestions

**Dolphin Square flats:**
- Pathway checks: too many `"unclear"` fields → `realism_pathways: []`, `grad_visa_realism: "unclear"`
- BUT the verbatim "zero deposit" + "flexible tenancy" marketing is a strong flex signal. **Preserve `"unclear"` rather than degrading to `"blocked"` or `"unlikely"`** — this is a genuinely approachable central-London option pending direct enquiry.

**Dolphin House Serviced Apartments:**
- Pathways fire: `["with-upfront-licence", "licence-exempt-light-ref"]`
- `grad_visa_realism: "licence-exempt"` (rule 2)
- Current `licence-exempt` is correct; preserve.

## Per-project proposals

| Project | Current state | Suggested state | Proposed changes |
|---|---|---|---|
| `dolphin-square` (pimlico) | `operator: "Dolphin Living"`, `realism: "unknown"` | `operator: "Dolphin Square"`, `realism: "unclear"` with flexible-signal narrative | **Category B attribution flag — surface to user before applying.** |
| `dolphin-house-pimlico` (pimlico) | `operator: "Dolphin Square"`, `realism: "licence-exempt"` | No change to operator or realism; apply structural fields per serviced-apartment column above | Pathways: `["with-upfront-licence", "licence-exempt-light-ref"]` |

## Pricing (side-effect)

Verified from operator site 2026-04-16:

| Project | studio | one_bed | two_bed | three_bed | bills_included | price_transparency |
|---|---|---|---|---|---|---|
| `dolphin-square` | 2200+ | 2959-3532 | 3983-4600 | 6056+ | unknown (varies by unit) | listed |
| `dolphin-house-pimlico` | enquire | - | - | - | yes | enquire |

## Ghost-project / attribution flags

**Flag 1 (Category B — wrong operator attribution):** `dolphin-square` project in `pimlico.ts` should have `operator: "Dolphin Square"` (commercial), not `"Dolphin Living"` (charitable). The dataset appears to have confused the two entities. Surface for user confirmation before applying.

No other flags.

## Notes (narrative)

**For `dolphin-square` (commercial flats, post-correction):**
> Dolphin Square Ltd runs commercial rental of the 1930s Pimlico mansion-block complex with verbatim "zero deposit" and "flexible tenancy" marketing — documented flex levers rare in Zone 1. Referencing provider and specific policies not disclosed on site. Genuinely approachable for a Graduate visa applicant; direct enquiry resolves the structural fields.

**For `dolphin-house-pimlico` (serviced apartments):**
> Dolphin House Serviced Apartments runs a premium serviced-apartment licence product inside the Dolphin Square complex. All-inclusive pricing, no credit check in the normal sense, book-and-move-in model. Licence-exempt-light-ref + with-upfront-licence pathways both fire; among the strongest fallback options in Pimlico.

## Sources

- https://www.dolphinsquare.co.uk/ (accessed 2026-04-16, operator)
- https://www.dolphinsquare.co.uk/apartments (accessed 2026-04-16, operator)
- https://www.dolphinsquare.co.uk/Dolphin-House-serviced-apartments (accessed 2026-04-15, operator)
- https://www.rightmove.co.uk/property-to-rent/Dolphin-Square.html (accessed 2026-04-16, listings — zero-deposit verbatim)
- https://www.zoopla.co.uk/find-agents/branch/dolphin-square-operator-limited-london-19088/ (accessed 2026-04-16 — verifies "Dolphin Square Operator Limited" entity)
- https://www.dolphinliving.com/find-a-home/am-i-eligible (accessed 2026-04-16, charitable eligibility)
- https://www.dolphinliving.com/ (accessed 2026-04-16, charitable operator)
