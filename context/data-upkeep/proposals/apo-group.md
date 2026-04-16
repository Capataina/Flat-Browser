# Proposals — Apo Group

**Operator:** Apo Group (BlackRock-owned, BTR)
**Date:** 2026-04-16
**Project in scope:** `apo-kew-bridge` (kew-bridge-brentford)

Note: Apo is the structural exception in this batch. Unlike all other operators in this batch — which are hospitality-licence apart-hotels — Apo runs standard AST BTR at Kew Bridge. Qualification research is substantive, not the light touch applied to pure apart-hotels.

---

## Operator-level qualification block

| Field | Proposed value | Source |
|---|---|---|
| `agreement_type` | `"ast"` | Standard AST |
| `referencing_provider` | `"other"` (Reference My Tenant / RMT) — if schema permits free-text, use `"rmt"`; if enum-bound, use `"other"` and note in `notes` | FAQ verbatim |
| `min_tenancy_months` | `12` | Standard, flexibility on enquiry |
| `income_multiple` | `30` | RMT default 30× |
| `open_banking_accepted` | `"unclear"` | Not Apo-specific confirmed |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + RRA. Note: advance-rent fallback IS published but now 1-month-capped post-May-2026 |
| `accepts_professional_guarantor` | `"unclear"` | FAQ silent on Housing Hand / corporate services |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Topic not addressed |
| `credit_check` | `"standard"` | RMT standard credit check |
| `international_tenant_policy` | `"accepted-case-by-case"` | Visa-holder friendly (right-to-rent check), no explicit welcome |
| `visa_expiry_handling` | `"unclear"` | Not addressed |
| `qualification_flexibility_signal` | `"flexible"` | Two published fallbacks (advance rent + Flatfair No Deposit) |
| `realism_pathways` | `[]` | No pathway structurally clears under strict derivation (advance-rent fallback is now 1-month-capped) |
| `grad_visa_realism` | `"achievable-with-guarantor"` | **Preserve current value** — authored judgement reflecting published fallbacks, overrides empty pathway array |
| `research_status` | `"complete"` | |

---

## Per-project proposal — `apo-kew-bridge`

**Current state:**
- `operator: "Apo Group"` ✅
- `realism: "achievable-with-guarantor"` ✅ preserve
- `building_type: "BTR"` ✅
- `living_model` not set — proposal: add `living_model: "standard-btr"` for consistency with schema
- `preview`: mentions "studios from £1,400/mo" — **stale**, current pricing is ~£1,750/mo
- `price_transparency: "listed"` ✅
- `external_links`: single operator URL ✅

**Proposed changes:**

1. **Update `preview`** to current pricing: "BlackRock-owned BTR with 487 units, studios from ~£1,750/mo all-inclusive (council tax separate). Flatfair No Deposit (1 week's rent + VAT) alternative. RMT referencing with published advance-rent fallback. HomeViews 4.46/5 (97 reviews), ranked 1st of 12 in Brentford. Gym, co-working, roof terraces, residents' lounge."

2. **Apply operator-level qualification block** above.

3. **Update `rental.studio` and `rental.one_bed`** pricing:
   - `studio: { min: 1750, currency: "GBP", per: "month" }`
   - `one_bed: { min: 2000, currency: "GBP", per: "month" }` — approximate; verify on a-part-of.com/places/kew-bridge/1-bed
   - `bills_included: true` (monthly all-inclusive per FAQ)
   - `cost_tier: "affordable"` (studio ≥ £1,200 < £1,800)

4. **Update external_links accessed_date** to 2026-04-16.

5. **Add `notes`:**
   > Apo uses Reference My Tenant (RMT) with two published fallbacks — advance rent for failed income verification (now RRA-1-month-capped for ASTs) and Flatfair No Deposit at 1 week's rent + VAT. The deciding question for the professional-guarantor pathway is whether RMT accepts Housing Hand — Apo's own FAQ is silent on this. Direct enquiry (`yourhostKEW@a-part-of.com` / 020 8146 5040) is the cheapest next step.

6. **Preserve `realism: "achievable-with-guarantor"`** as authored state. Strict pathway derivation would yield an empty array (advance-rent post-RRA is no longer a pathway on its own, Housing Hand unverified), but the two published fallbacks justify the `achievable-with-guarantor` verdict as a flex signal. `deriveRealism([], "achievable-with-guarantor")` — if `"achievable-with-guarantor"` is not in the preserved-state list, the function may override; consider preserving via explicit authored state instead.

**Proposal for preserved-state handling:** current `deriveRealism` only preserves `"blocked"`, `"unlikely"`, `"unclear"`. `"achievable-with-guarantor"` would be recomputed from pathways — which would yield `"unknown"` here. **This is a schema gap.** Options:
   - (a) Add one pathway that reflects advance-rent fallback: `"with-upfront-licence"` doesn't fit (this is AST). Would require a new pathway like `"with-published-fallback"`.
   - (b) Extend `deriveRealism` to preserve `"achievable-with-guarantor"` when authored.
   - (c) Accept the derivation change to `"unknown"` and compensate in `notes`.
   - **Recommendation:** (b) — extending `deriveRealism` to also preserve `"achievable-with-guarantor"` when it is explicitly authored with the flex-signal rationale. This aligns with the realism-schema-redesign-pending note Caner flagged.

---

## Narrative notes (for `project.notes`)

> Apo Kew Bridge is a dedicated BTR (487 units, BlackRock-owned) with two published qualification fallbacks that few other BTR operators match: an advance-rent fallback for failed income verification (now RRA-1-month-capped for ASTs) and the Flatfair No Deposit option at 1 week's rent + VAT. Referencing runs through RMT with a standard 30× income multiple and standard credit check. The critical unverified question is whether RMT accepts Housing Hand as a corporate guarantor — Apo's FAQ is silent. Direct enquiry to `yourhostKEW@a-part-of.com` is the deciding step for the professional-guarantor pathway.

---

## Ghost-project checks — no issues

Apo Kew Bridge is confirmed in Apo's own portfolio (a-part-of.com/places/kew-bridge) and independently verified via HomeViews, CBRE, OnTheMarket, and press (BTRNews). Clean match.

---

## Sources

- https://a-part-of.com/faqs
- https://a-part-of.com/blog/renting-kew-bridge
- https://a-part-of.com/places/kew-bridge
- https://a-part-of.com/places/kew-bridge/1-bed
- https://www.homeviews.com/development/apo-kew-bridge-tw8
- https://help.flatfair.co.uk/hc/en-gb/articles/360015747420-What-are-flatfair-s-referencing-criteria-for-private-tenants
- https://help.flatfair.co.uk/hc/en-gb/articles/360015772439-What-does-flatfair-consider-rent-in-advance
- https://btrnews.co.uk/first-glimpse-of-apo-kew-bridge-btr-scheme/

All accessed 2026-04-16.
