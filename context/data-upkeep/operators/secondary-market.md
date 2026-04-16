# Secondary-Market Categories — Operator Findings

**Researched:** 2026-04-16
**Categories covered:** Various, Individual landlords, Various agents, Agent-managed, Private landlords, Private sale, Private sale / shared ownership, unknown
**Total project count:** ~97 across all categories (see breakdown below)
**Verdict:** Not operator-researchable. Apply secondary-market defaults per playbook.

---

## What secondary-market means

These attributions represent rental stock where there is no single professional operator running a unified policy. The rental units are owned by individual investor-landlords (or held as owner-occupier stock with a few lettings slipping through), and letting is handled by high-street agents (Foxtons, Savills, Knight Frank, JLL, Chestertons, Hamptons, Dexters, Winkworth, etc.) on per-landlord mandates. The qualification experience is therefore heterogeneous — policies vary per landlord, not per building.

Per the operator-research-playbook.md § "Secondary-market categories":

> Operator-level research doesn't apply because there's no single operator. [...] Do not spend meaningful research budget on these — they're not operator-researchable.

---

## Category breakdown

| Attribution | Projects | Notes |
|---|---|---|
| Various | 21 | Broadly "mixed-tenure with multiple agents" — Ruskin Square, Woolwich, Battersea Park, etc. Many have both sales and rental streams. |
| Individual landlords | 20 | Explicit: unit-by-unit lettings by investor-landlords. Nine Elms, Angel, Vauxhall high-rise towers dominated by overseas-investor buyers. |
| Various agents | 20 | Multiple high-street agents marketing the same building. Aldgate, Whitechapel, Hackney Wick, Wapping, Mile End. |
| Agent-managed | 14 | Single agent mandate but agent-not-landlord relationship. Borough, Peckham, Clapham, Tooting, Herne Hill, Battersea Park. |
| unknown | 11 | Operator genuinely unknown. Typically early-pipeline or newly-completed sites where rental market hasn't settled. |
| Private landlords | 5 | Explicit individual-landlord attribution. Ealing, Hammersmith, Clapham Junction, Shepherd's Bush, Kew Bridge. |
| Private sale | 3 | Sale-first projects with secondary rental market. Wimbledon, West Hampstead. |
| Private sale / shared ownership | 1 | Clapham Junction — mixed sale and shared ownership, no BTR stream. |
| **Total** | **95** | |

Plus adjacent hybrid attributions covered for consistency:
- "St George / private landlords" (1) — Hammersmith Fulham Reach
- "Mount Anvil / private landlords" (1) — Queen's Wharf
- "Ballymore / private landlords" (1) — Embassy Gardens
- "L&Q (affordable); private landlords (market)" (1) — secondary-market stream
- "St James" (5) — Berkeley sales subsidiary, predominantly sale-first with secondary rental market

Grand total covered by secondary-market defaults: ~104 projects.

---

## Why one narrative covers all

Despite the volume, the qualification story is the same across every one of these projects. Caner's experience on any given unit will be:

1. **Agreement type:** Assured Shorthold Tenancy. Individual landlords default to ASTs; RRA 2025 reforms still allow them but cap advance rent at 1 month and make the tenancy periodic after the minimum term.

2. **Referencing:** standard UK stack — Goodlord, Let Alliance, Homelet, Rightmove's PropertyFile, RentProfile. Goodlord supports Open Banking as an option but whether individual landlords mandate Open Banking or insist on UK payslips varies case-by-case. No Homeppl — Homeppl is BTR-only in practice.

3. **Guarantor:** varies per landlord. Corporate guarantors (Housing Hand, Guarantid) are often accepted by high-street agents on behalf of landlords who don't otherwise care, but acceptance is discretionary and should not be relied on without confirmation on the specific listing.

4. **Income multiple:** near-universally 30× (2.5× annual) as the published floor. Enforced more rigidly than at most BTR operators because the individual landlord has no portfolio-level risk tolerance — one bad tenant is their entire income stream.

5. **International-tenant receptivity:** highly variable. Overseas-investor-owned stock (Nine Elms, Vauxhall, Canary Wharf, One Park Drive, DAMAC Tower, Sky Gardens, etc.) is often more receptive because the landlord is themselves international and understands the document shape. UK-investor-owned stock defaults to UK-payslips-required framing.

6. **Visa expiry:** agents frequently shorten tenancy length to visa expiry without discussion. Can be negotiated per-listing but not a structural policy.

7. **Post-RRA flex:** the upfront-rent lever (historically the secondary-market escape valve for thin-credit applicants) is now dead for ASTs. From 1 May 2026 no AST can accept >1 month advance. This closes the route that made secondary-market the pre-RRA fallback.

8. **Flex signal:** cannot be characterised operator-wide because there is no operator. Per-listing.

The upshot: `grad_visa_realism: "unlikely"` is the accurate default for all ~104 projects. Some specific listings will clear with the right landlord match, but the baseline expectation must be that enquiries on secondary-market listings will fail more often than they succeed, and the successful ones typically involve the landlord being internationally-flavoured and the agent being willing to push the landlord on non-standard docs.

---

## Field values (applied to all ~104 projects)

Per playbook "Secondary-market categories" section, verbatim:

| Field | Value |
|---|---|
| `agreement_type` | `ast` |
| `referencing_provider` | `unclear` |
| `open_banking_accepted` | `unclear` |
| `min_tenancy_months` | `12` |
| `income_multiple` | `30` |
| `upfront_rent_policy` | `one-month-ast-cap` |
| `accepts_professional_guarantor` | `unclear` |
| `accepts_individual_overseas_guarantor` | `unclear` |
| `credit_check` | `standard` |
| `international_tenant_policy` | `accepted-case-by-case` |
| `visa_expiry_handling` | `unclear` |
| `qualification_flexibility_signal` | `unclear` |
| `realism_pathways` | `[]` |
| `grad_visa_realism` | `unlikely` (unless previously `blocked` — preserve) |
| `research_status` | `partial` |

## Realism pathway derivation

`realism_pathways: []` across all projects. No pathway rule in `realism-pathway-derivation.md` fires on a wall of `"unclear"`:

- `standard-passable`: requires all four structural fields confirmed. ❌
- `with-professional-guarantor`: requires `"yes"`. ❌
- `with-savings`: requires `"homeppl"`. ❌
- `with-co-signer-overseas`: requires `"yes"`. ❌
- `with-upfront-licence`: requires licence + multi-month. ❌ (AST)
- `licence-exempt-light-ref`: requires licence. ❌ (AST)

The umbrella realism is `"unlikely"` as an authored judgement — individual landlords operating through standard UK referencing without Open Banking / guarantor / international-friendly flex form the classic non-pathway. This is not derived from an empty pathway array (which would give `"unknown"`); it's an explicit authored verdict that the playbook supports. Pass to `deriveRealism(pathways, preserved="unlikely")` which returns `"unlikely"` by the preserved-override rule.

## Per-project preservation rules

For any project currently marked:
- `blocked` — **preserve** (the block is a cost or structural constraint the skill should not overturn)
- `unlikely` — **preserve** (already aligned with the secondary-market default)
- `achievable` — **flag for review** (should not be `achievable` for secondary-market without specific evidence; propose downgrade to `unlikely` with user confirmation)
- `unknown` → propose `unlikely`

Currently-`achievable` outliers per the enumerator:
- "Argenta at Silvertown" (`royal-wharf-and-docks`, operator: Various) — achievable. Flag for review.
- "Conductor House" (`brent-cross-town`, operator: Various) — achievable. Flag for review.

These two probably reflect prior sweep agents overstating the realism for genuinely-secondary-market rentals. Propose user-confirmation to downgrade to `unlikely` unless the user has specific operator-side evidence.

## Ghost-project flags

None — these attributions are explicitly "non-operator" markers by design. The buildings exist; the operator attribution is deliberately vague.

## Notes (narrative — apply verbatim to all ~104 projects)

> Secondary-market / individual-landlord rental. Qualification varies per listing and agent — no single referencing stack, no operator-wide guarantor or international-tenant policy. Post-RRA (May 2026), the upfront-rent lever that historically helped thin-credit applicants is dead for ASTs; successful enquiries now require the listing's individual landlord to be internationally-flexible and the agent willing to push non-standard docs. Realism is `"unlikely"` as a baseline — some listings clear with the right match, but most do not. Direct enquiry on specific listings is the only route; budget for the conversation to go nowhere at several before one lands.

## Sources

No primary-source URLs cite operator-wide policies because there are no operators. Per playbook, secondary-market handling is by definition source-free at the operator level.

General context sources:
- https://www.gov.uk/renting-out-a-property — standard AST framework
- https://www.gov.uk/government/publications/guide-to-the-renters-rights-act-2025 — RRA 2025 caps on advance rent
- https://www.goodlord.co — standard individual-landlord referencing stack
- https://www.homelet.co.uk — alternative individual-landlord referencing stack
- https://letalliance.co.uk — alternative stack

These are contextual citations rather than operator-specific ones.
