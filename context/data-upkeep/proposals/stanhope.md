# Proposals — Stanhope

## Operator-level facts

Stanhope is **a developer/development-manager, not a residential operator.** No operator-level qualification defaults apply. Every project tagged `operator: "Stanhope"` must fall back to secondary-market defaults or a specific verified operator.

## Proposed operator reattribution + secondary-market defaults

| Project | Area | Current `operator` | Proposed `operator` | Proposed qualification block |
|---|---|---|---|---|
| `television-centre` | `white-city` | `Stanhope` | `Various agents` | Secondary-market defaults (see below) |
| `the-ariel` | `white-city` | `Stanhope` | `Various agents` | Same |
| `scenery-house` | `white-city` | `Stanhope` | `unknown` | `research_status: "partial"` — operator TBD pending 2026 Phase 2 completion |
| `vita-apartments` | `croydon` | `Various` (already correct) | `Various` (no change) | Already secondary-market — no action |

**Secondary-market default block** (apply to `television-centre` and `the-ariel`):

| Field | Value |
|---|---|
| `agreement_type` | `ast` |
| `referencing_provider` | `unclear` |
| `open_banking_accepted` | `unclear` |
| `income_multiple` | `null` |
| `accepts_professional_guarantor` | `unclear` |
| `accepts_individual_overseas_guarantor` | `unclear` |
| `upfront_rent_policy` | `one-month-ast-cap` |
| `credit_check` | `unclear` |
| `international_tenant_policy` | `accepted-case-by-case` |
| `visa_expiry_handling` | `unclear` |
| `qualification_flexibility_signal` | `unclear` |
| `min_tenancy_months` | `null` |

**Preserved/derived `grad_visa_realism`:** `"unlikely"` (per playbook secondary-market default)

## Realism pathway suggestions

All pathway tests fail for secondary-market. `realism_pathways: []`, `grad_visa_realism: "unlikely"` (explicit authored state preserved by `deriveRealism(pathways, "unlikely")`).

## Per-project variations

None beyond the operator reattribution above.

## Pricing (side-effect)

No reliable pricing captured from Stanhope — not an operator. Existing per-project prices (if any) come from agent listings and should not be attributed to Stanhope.

| Project | studio | one_bed | two_bed | bills_included | price_transparency |
|---|---|---|---|---|---|
| `television-centre` | — | — | — | — | `enquire` (no change) |
| `the-ariel` | — | — | — | — | `enquire` |
| `scenery-house` | — | — | — | — | `enquire` (Phase 2 not yet open) |
| `vita-apartments` | — | — | — | — | existing (no change) |

## Ghost-project flags

**Category B — wrong-operator attribution (3 projects):**
1. `television-centre` — Stanhope is developer/DM only. Actual rental is secondary-market via agents (Savills, Knight Frank, Hamptons, Benhams, etc.). Mitsui Fudosan + AIMCo (Phase 1) are the owners, not operators of rental.
2. `the-ariel` — same pattern.
3. `scenery-house` — Phase 2 in-delivery; operator structure not yet announced. Should be `operator: "unknown"` pending completion.

**Blast-radius check:**
- `white-city.ts` T1.4 reasoning: "Berkeley/St James operates White City Living and Mitsui Fudosan/Stanhope operates Television Centre — two major managed landlord operators with corporate referencing." The second half is wrong — Television Centre is BTS with secondary-market letting. Recommend softening to: "Berkeley/St James operates White City Living with corporate referencing; Television Centre is a Mitsui Fudosan / Stanhope masterplan with for-sale stock now let on the secondary market via various agents." This weakens White City's T1.4 slightly — flag for area grade review in v3 (no change to grade in v1 scope).
- `white-city.ts` line ~170 "Mitsui Fudosan/Stanhope operates Television Centre" — same correction.
- `white-city.ts` line ~171 refers to stewardship — correct as "Mitsui Fudosan and Stanhope under stewardship contracts" (ownership + masterplan management, not rental operation).

**Category A/C/D:** None.

## Notes

**Reattributed-projects narrative:**
> Television Centre and The Ariel were delivered as for-sale (BTS) schemes by the Mitsui Fudosan / Stanhope / AIMCo partnership in White City. Individual flats are now let on the secondary market via various agents — no single operator runs referencing. Qualification is per-listing; assume Goodlord/standard referencing with no published guarantor-acceptance or Open Banking pathway. Upfront-rent offers may unlock individual flats but this is a per-listing conversation.

**Scenery House narrative:**
> Television Centre Phase 2 — part of the 511-home release completing 2026 across four plots. Operator structure not yet publicly announced; could follow Phase 1 BTS pattern or be a named BTR scheme. Research status remains partial until 2026 lettings open.

## Sources

See `operators/stanhope.md` § "Sources" for full URL list.
