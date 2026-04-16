# Argent — proposals

Research date: 2026-04-16. Corresponds to `context/data-upkeep/operators/argent.md`.

---

## Ghost-operator flag (Category B — wrong-operator attribution)

| Project | Current operator (dataset) | Proposed operator | Reason |
|---|---|---|---|
| Enclave KX (`enclave-kx`, kings-cross) | Argent | Outpost Management (Enclave brand) | Confirmed via `enclave.com` footer + Outpost's own press; matches the `outpost-management-enclave-brand-blackrock` slug already in use for Enclave: Acton. |

**Blast radius for re-attribution**:

- `src/areas/data/kings-cross.ts` — `developer: "Argent"`, `operator: "Argent"` on the Enclave KX project block. Developer attribution to Argent is correct (Argent built the masterplan); operator should switch to match Enclave: Acton's slug / casing.
- `src/areas/data/kings-cross.ts` long-form prose + evaluation reasoning mentions "Argent BTR build standard" referencing Enclave — these sentences need gentle rewording to "the building was developed by Argent and is operated by Outpost Management under the Enclave brand".
- The `enclave-kx` project's `external_links` currently points at King's Cross masterplan / Argent pages. Should include `https://enclave.com/locations/kings-cross` as the operator link.
- Cross-check any area-level `T1.4` reasoning in kings-cross.ts that treats Argent as the "active professional rental operator" — it's Outpost Management operationally, Argent as developer + masterplan steward. This is a presentation fix, not a grade change.

**Recommendation**: user-confirm the reattribution. No grade impact (Enclave KX remains a live BTR in King's Cross, just under a different operator).

---

## Operator-level defaults (Argent, post-reclassification)

After moving Enclave KX to Outpost, the remaining five "Argent" projects are all ownership-led / sale-only + secondary-market. The appropriate operator-level frame is:

> Argent developed these buildings as part of the King's Cross masterplan. Argent does not run a central BTR lettings operation. All rentable units are secondary-market lettings via multiple independent agents (Chase Apartments, Knight Frank, Benham & Reeves, OnTheMarket listings), each applying their own referencing stack. There is no single Argent qualification policy.

This is essentially the `"secondary-market"` handling pattern from the operator-research playbook (`Private landlords`-style default), not a standard BTR operator profile.

### Proposed qualification field defaults for the five remaining Argent projects

| Field | Proposed value | Reason |
|---|---|---|
| `agreement_type` | `"ast"` | Individual landlords default to AST |
| `referencing_provider` | `"unclear"` | Varies per agent — Goodlord, Rightmove Referencing, Let Alliance all appear in listings |
| `min_tenancy_months` | `null` | Varies per listing |
| `income_multiple` | `30` | Industry default; each agent applies their own version |
| `open_banking_accepted` | `"unclear"` | Varies per agent's referencing stack |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + post-RRA 1-month cap |
| `accepts_professional_guarantor` | `"unclear"` | Per-landlord / per-agent decision |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Per-landlord / per-agent decision |
| `credit_check` | `"standard"` | Individual landlords default to standard UK credit check |
| `international_tenant_policy` | `"accepted-case-by-case"` | Varies |
| `visa_expiry_handling` | `"unclear"` | Per-listing |
| `qualification_flexibility_signal` | `"unclear"` | Can't generalise across many landlords |
| `realism_pathways` | `[]` | No operator-wide pathway |
| `grad_visa_realism` | **preserve existing** | Keep `"blocked"` / `"unlikely"` authored verdicts |
| `research_status` | `"complete"` | Research is done — the answer is "no single operator policy" |

### Per-project notes

| Project | Preserve realism | Notes field adjustment |
|---|---|---|
| Gasholders London | `"blocked"` | Drop "Argent BTR affordability wall" framing — it's sale-only with thin secondary lettings via multiple agents. |
| Capella by Argent | `"blocked"` | Same — sale-only, no primary rental channel. |
| Cadence | `"blocked"` | Same — sale-only, secondary lettings only. |
| The Plimsoll Building | `"unlikely"` | Correct the narrative: not "Argent BTR" mixed-tenure — it's mixed-sale with individual-landlord lettings. The "upfront workaround" anecdote is individual-landlord flex, not an Argent policy. |
| Author King's Cross | `"blocked"` | Sale-led, thin secondary rental — correct. |

---

## Enclave KX — full qualification block (once reattributed to Outpost)

Use these values if you move the project to the `outpost-management-enclave-brand-blackrock` operator slug. These come from the Enclave KX FAQ (accessed 2026-04-16).

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `"ast"` | FAQ: fixed-term 6-18 months |
| `referencing_provider` | `"rightmove-referencing"` or `"unclear"` — schema only documents homeppl/goodlord/canopy/in-house/none. Closest bucket is **"in-house"** if we treat Rightmove Referencing as a distinct third-party (currently unlisted in the enum). Safer: **"unclear"** with a note that the FAQ names Rightmove Referencing. | FAQ |
| `min_tenancy_months` | `6` | FAQ: fixed-term 6-18 months |
| `income_multiple` | `30` | FAQ verbatim |
| `open_banking_accepted` | `"unclear"` — Rightmove Referencing is not Open Banking-native; no FAQ statement | — |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + RRA. FAQ references "advance rental payments accepted if affordability criteria not met" but RRA kills this on 1 May 2026. |
| `accepts_professional_guarantor` | `"unclear"` | FAQ accepts "guarantors" without naming Housing Hand / Guarantid |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Not addressed in FAQ |
| `credit_check` | `"standard"` | Rightmove Referencing is a standard UK credit stack, no floor stated |
| `international_tenant_policy` | `"welcomed"` | FAQ verbatim: "Many of our residents come from overseas..." |
| `visa_expiry_handling` | `"unclear"` | Not addressed in FAQ |
| `qualification_flexibility_signal` | `"standard"` | Stated-policy operator, no flex anecdotes found |
| `realism_pathways` | `[]` | No pathway fires cleanly — professional guarantor unclear, no Homeppl Open-Banking, overseas guarantor unclear |
| `grad_visa_realism` | `"unlikely"` (preserve) | Income floor at 30× a £3,800/mo 1-bed is £114k — unreachable. Direct email required to confirm whether professional guarantor lifts this. |
| `research_status` | `"complete"` | Sufficient — remaining gaps are genuine unknowns |

### Enclave KX narrative notes (proposal)

> Operated by Outpost Management under the Enclave brand — not Argent directly. Referencing runs through Rightmove Referencing with a 30× income multiple. The FAQ accepts "guarantors" generically but doesn't name Housing Hand / Guarantid, so the professional-guarantor pathway is unverified — direct enquiry is the deciding question. International residents are explicitly welcomed (FAQ verbatim), but the £114k income floor on a 1-bed puts Caner below the line without a pathway. The FAQ's "advance rent if affordability not met" line becomes moot from 1 May 2026 under RRA's 1-month cap for ASTs.

---

## Sources

All sources from `operators/argent.md`. Primary: `enclave.com/locations/kings-cross/faqs`, `outpostmgt.com`, `btrnews.co.uk`. Accessed 2026-04-16.

---

## Apply checklist

- [ ] User-confirm: reattribute `enclave-kx` to the Outpost Management operator slug
- [ ] User-confirm: rewrite Plimsoll narrative to remove "Argent BTR units at the lower end" framing
- [ ] Apply secondary-market qualification defaults to Gasholders / Capella / Cadence / Plimsoll / Author (preserve existing `grad_visa_realism` values)
- [ ] If reattribution confirmed: apply the Outpost-based qualification block to Enclave KX
- [ ] Update `research_status` from `"partial"` → `"complete"` on all five remaining Argent projects (plus Enclave KX once moved)
