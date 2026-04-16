# EcoWorld Ballymore — proposals

Research date: 2026-04-16. Corresponds to `context/data-upkeep/operators/ecoworld-ballymore.md`.

---

## Summary

EcoWorld Ballymore is a JV **holding company** (75% EcoWorld, 25% Ballymore; Ballymore manages the schemes). It develops; it does not operate lettings. The single dataset project attributed to the `ecoworld-ballymore` slug (`embassy-gardens` in nine-elms) is in reality a sales-led masterplan with secondary-market lettings via multiple agents (Foxtons, JLL, Dexters, Knight Frank, etc).

Because EcoWorld Ballymore doesn't operate lettings, there is no operator-level qualification policy. The secondary-market default block applies.

---

## Wrong-operator / developer-operator conflation flag (Category B — mild)

| Project ID | Current `operator` | Proposed `operator` | Rationale |
|---|---|---|---|
| `embassy-gardens` (nine-elms) | "EcoWorld Ballymore" | **"EcoWorld Ballymore / private landlords"** | EcoWorld Ballymore develops (and Ballymore manages the asset); lettings are secondary-market via individual landlords and multiple agents. Add `/ private landlords` suffix to match the existing pattern (`Ballymore / private landlords`, `A2Dominion (affordable); private landlords (market)`, etc) and accurately reflect the reality. |

**Not a full ghost flag.** The developer attribution is correct; the project exists in EcoWorld Ballymore's portfolio. The issue is the dataset conflating "developer" with "operator" — a systematic error that motivated this skill and the Newfoundland correction in 2026-04-12.

**Blast radius**:

- `src/areas/data/nine-elms.ts` — `embassy-gardens` project block (developer: correct as "EcoWorld Ballymore"; operator needs the `/ private landlords` addition). Multiple long-form prose mentions of "EcoWorld Ballymore" are appropriate as developer references — don't remove. T1.4 reasoning mentions "multiple major managed operators — EcoWorld Ballymore, Essential Living, Berkeley/St James, CC Land/Park Hyatt — with central referencing across the corridor." This is factually wrong for EcoWorld Ballymore (not a "managed operator" in the BTR sense) and should read "EcoWorld Ballymore (developer, secondary-market lettings), Way of Life, Berkeley/St James, Essential Living, CC Land/Park Hyatt".
- The T1.4 framing affects the area-level claim that there's a dense managed-BTR operator presence in Nine Elms. Reality is: Way of Life (Mylo), Greystar (Bloom), Berkeley/St James as developer, EcoWorld Ballymore as developer, Essential Living (if still active — was shrinking in 2026-04), and Park Hyatt serviced residences. The managed-BTR count is 2-3, not 4+.

**Recommendation**: user-confirm the re-attribution. T1.4 reasoning correction is low-magnitude (doesn't change the area grade) but improves factual accuracy.

---

## Qualification field proposals (secondary-market defaults)

| Field | Current | Proposed | Source |
|---|---|---|---|
| `agreement_type` | — | `"ast"` | Individual landlords default |
| `referencing_provider` | — | `"unclear"` | Varies per agent (JLL/Foxtons/Dexters/Knight Frank use different stacks) |
| `min_tenancy_months` | — | `12` | AST default |
| `income_multiple` | — | `30` | Industry default |
| `open_banking_accepted` | — | `"unclear"` | Varies |
| `upfront_rent_policy` | — | `"one-month-ast-cap"` | AST + RRA |
| `accepts_professional_guarantor` | — | `"unclear"` | Per-landlord |
| `accepts_individual_overseas_guarantor` | — | `"unclear"` | Per-landlord |
| `credit_check` | — | `"standard"` | Individual-landlord default |
| `international_tenant_policy` | — | `"accepted-case-by-case"` | Varies |
| `visa_expiry_handling` | — | `"unclear"` | Per-listing |
| `qualification_flexibility_signal` | — | `"unclear"` | Can't generalise |
| `realism_pathways` | — | `[]` | No operator-wide pathway |
| `grad_visa_realism` | `"unlikely"` | **preserve `"unlikely"`** | Prior authored verdict correct |
| `research_status` | `"unresearched"` | `"complete"` | Research done; answer is "no single operator policy" |

### Narrative notes (proposal)

> Developed by EcoWorld Ballymore (75/25 JV between EcoWorld and Ballymore; Ballymore manages the schemes). The US-Embassy-adjacent flagship Nine Elms project — Sky Pool, premium amenity stack. Lettings are secondary-market only: individual flat owners listing via Foxtons, JLL, Dexters, Knight Frank, and other agents, each applying their own referencing stack. No single operator qualification policy exists. At the prevailing price tier (1-beds routinely £2,800+/mo), the 30× income floor is ~£84k+/yr — unreachable for Caner without a pathway, and individual landlords default to Goodlord-style referencing without Homeppl Open-Banking. Realism stays `"unlikely"` — this is the "premium sales-led building with thin qualification-friendly rental channel" pattern.

---

## Sources

All sources from `operators/ecoworld-ballymore.md`. Primary: Wikipedia (JV structure), BDC Magazine (Wardian launch), Foxtons (Wardian lettings), EcoWorld International (LCI Phase 2), HAL Architects (Embassy Gardens Phase 2). Accessed 2026-04-16.

---

## Apply checklist

- [ ] User-confirm: update `embassy-gardens` operator from "EcoWorld Ballymore" to "EcoWorld Ballymore / private landlords"
- [ ] Apply secondary-market qualification block
- [ ] Preserve existing `grad_visa_realism: "unlikely"`
- [ ] Set `research_status: "complete"`
- [ ] User-confirm: reword nine-elms.ts T1.4 reasoning row to clarify that EcoWorld Ballymore is a developer (not a managed BTR operator), adjusting the "multiple major managed operators" framing accordingly
- [ ] Tombstone comment in nine-elms.ts noting the developer/operator distinction and the 2026-04-12 Newfoundland precedent
- [ ] Flag for skill report: **Wardian London is a coverage gap** — EcoWorld Ballymore flagship BTR-developable building in Canary Wharf not in the dataset. If added, should be attributed to secondary-market letting (sole agent: Foxtons).
