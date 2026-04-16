# Proposals — Secondary-Market Categories

## Classification finding

All projects attributed to the following operator strings are secondary-market (individual-landlord) rentals without a unified operator policy. Apply playbook-standard secondary-market defaults:

- Various (21 projects)
- Individual landlords (20)
- Various agents (20)
- Agent-managed (14)
- unknown (11)
- Private landlords (5)
- Private sale (3)
- Private sale / shared ownership (1)
- St James (5) — Berkeley sales subsidiary, sale-first with secondary rental stream
- "St George / private landlords" (1)
- "Mount Anvil / private landlords" (1)
- "Ballymore / private landlords" (1)
- "L&Q (affordable); private landlords (market)" (1)

**Total covered: ~104 projects**

## Operator-level facts (apply to all ~104 projects)

| Field | Value | Source / Reasoning |
|---|---|---|
| `agreement_type` | `ast` | Individual-landlord UK default. |
| `referencing_provider` | `unclear` | Varies per landlord; no operator-wide stack. |
| `open_banking_accepted` | `unclear` | Goodlord/Let Alliance sometimes support; per-landlord choice. |
| `min_tenancy_months` | `12` | Standard UK AST. |
| `income_multiple` | `30` | Standard 2.5× annual floor. |
| `upfront_rent_policy` | `one-month-ast-cap` | AST + RRA 2026 cap. |
| `accepts_professional_guarantor` | `unclear` | Per-listing discretion. |
| `accepts_individual_overseas_guarantor` | `unclear` | Per-listing discretion. |
| `credit_check` | `standard` | UK default. |
| `international_tenant_policy` | `accepted-case-by-case` | Varies per landlord. |
| `visa_expiry_handling` | `unclear` | Often shortened by agent without discussion. |
| `qualification_flexibility_signal` | `unclear` | Cannot be characterised operator-wide. |

## Realism pathway suggestions

`realism_pathways: []` across all 104 projects. No pathway rule fires on `"unclear"` structural fields.

## Per-project proposed realism

Rule:
- If currently `blocked` → **preserve** (cost or structural constraint)
- If currently `unlikely` → **preserve** (matches default)
- If currently `unknown` → **propose `unlikely`**
- If currently `achievable` → **flag for user review** (inconsistent with secondary-market default)

### Outliers to flag for user review (currently `achievable` on secondary-market attribution)

| Project | Operator attribution | Current realism | Proposed | Reason |
|---|---|---|---|---|
| Argenta at Silvertown | Various | `achievable` | `unlikely` (flag) | Attribution is secondary-market; `achievable` implies operator-side evidence not present. |
| Conductor House | Various | `achievable` | `unlikely` (flag) | Same reasoning. |

**Do not auto-downgrade these.** Flag to user — there may be specific evidence the skill doesn't see (e.g. user knows a specific BTR stream at the site).

### Bulk `unknown` → `unlikely` candidates

Applied to all projects currently at `unknown` with secondary-market operator attribution. See the operator findings file for the full list derived from the enumerator output.

### `research_status` for all 104

Set `research_status: "partial"` — the secondary-market default treatment populates every field with a definitive value (including `"unclear"` where the schema accepts it), but the research is not operator-level "complete" in the Homeppl/Quintain sense. `"partial"` is the honest status.

## Pricing

Do not update pricing fields — pricing is per-listing on Rightmove / Zoopla / OnTheMarket and not worth the research budget per playbook.

## Ghost-project flags

None by design — these attributions are "non-operator" markers, so ghost-project detection doesn't apply at the operator level.

One adjacent observation: **"Battersea Power Station" projects (8 under BPS Lettings)** should structurally be reclassified into one of these secondary-market attributions (see bps-lettings.md). Not applied in this proposal — flagged for user decision.

## Notes (narrative — apply verbatim)

> Secondary-market / individual-landlord rental. Qualification varies per listing and agent — no single referencing stack, no operator-wide guarantor or international-tenant policy. Post-RRA (May 2026), the upfront-rent lever that historically helped thin-credit applicants is dead for ASTs; successful enquiries now require the listing's individual landlord to be internationally-flexible and the agent willing to push non-standard docs. Realism is `"unlikely"` as a baseline — some listings clear with the right match, but most do not. Direct enquiry on specific listings is the only route; budget for the conversation to go nowhere at several before one lands.

## Sources

Contextual only (no operator-specific sources exist for these categories by definition):
- https://www.gov.uk/government/publications/guide-to-the-renters-rights-act-2025 — RRA 2026 advance-rent cap
- https://www.goodlord.co — typical individual-landlord referencing stack
- https://www.homelet.co.uk — alternative stack
- https://letalliance.co.uk — alternative stack
