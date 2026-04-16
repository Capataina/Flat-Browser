# Berkeley family BTS + Related Argent — proposals

Research date: 2026-04-16. Corresponds to `context/data-upkeep/operators/berkeley-family-bts.md`.

---

## Scope

Nine St George / St James projects (all BTS, all secondary-market rental) + three Related Argent projects at Heart of Hale / Brent Cross Town (live BTR, opaque qualification) + Maple re-attribution.

---

## A. St George / St James BTS projects — apply secondary-market defaults

Projects covered:

| Area | Project | Current operator slug | Current realism |
|---|---|---|---|
| white-city | White City Living | `st-james` | `unlikely` |
| white-city | The Cascades | `st-james` | `unlikely` |
| white-city | The Solaris One & Two | `st-james` | `unlikely` |
| white-city | Westmont Apartments | `st-james` | `unlikely` |
| nine-elms | Riverlight Quay | `st-james` | `unlikely` |
| ealing-broadway | Ealing Filmworks | `st-george-berkeley` | `unlikely` |
| ealing-broadway | Dickens Yard | `st-george-berkeley` | `unlikely` |
| canary-wharf | South Quay Plaza | `st-george` | `unlikely` |
| hammersmith | Fulham Reach | `st-george-private-landlords` | `blocked` |

### Operator-level qualification defaults (shared)

| Field | Value | Reason |
|---|---|---|
| `agreement_type` | `"ast"` | Individual landlord default |
| `referencing_provider` | `"unclear"` | Per-agent variance |
| `min_tenancy_months` | `null` | Per-listing |
| `income_multiple` | `30` | Industry default |
| `open_banking_accepted` | `"unclear"` | Per-agent |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + RRA |
| `accepts_professional_guarantor` | `"unclear"` | Per-landlord |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Per-landlord |
| `credit_check` | `"standard"` | Individual-landlord default |
| `international_tenant_policy` | `"accepted-case-by-case"` | Varies |
| `visa_expiry_handling` | `"unclear"` | Per-listing |
| `qualification_flexibility_signal` | `"unclear"` | Can't generalise |
| `realism_pathways` | `[]` | No operator pathway |
| `grad_visa_realism` | **preserve existing** | Authored judgement |
| `research_status` | `"complete"` | Research conclusion is "no unified policy" |

### Shared narrative note

> Delivered by St George / St James as Build-to-Sale stock (both brands retired into "Berkeley" in March 2026). Rental availability is secondary-market only, via individual owner-occupiers letting through independent agents — there is no Berkeley Living BTR operator channel at this project. Qualification varies per listing and agent; no single referencing stack applies. Caner's standard route through St George / St James stock is the per-listing conversation via the listing agent, not a centrally-researched pathway.

### Presentation fixes

- `src/areas/data/white-city.ts` T1.4 reasoning: "Berkeley/St James operates White City Living... corporate referencing" — overstated. Replace with a framing that distinguishes the Television Centre corporate operator (Stanhope / Mitsui Fudosan) from White City Living's BTS-with-secondary-market reality.
- `src/areas/data/ealing-broadway.ts` T1.2 / T1.4 reasoning: drop the "modern rental stock" framing for Filmworks / Dickens Yard — rental availability exists but via secondary market, not via a managed landlord.
- `src/areas/data/hammersmith.ts` — existing framing ("owner-lease via private landlords") is already correct.
- Decide on brand rename: given March 2026 unification, operators could migrate to "Berkeley". Recommend **preserve** existing "St George (Berkeley)" / "St James" strings — these are historical identities that remain useful for grouping, and renaming would break the current enumeration.

---

## B. Related Argent — The Maple operator correction

**Status: Category B (wrong-operator attribution).**

| Project | Current operator | Proposed operator |
|---|---|---|
| The Maple (`the-maple`, brent-cross-town) | Be Living | Related Argent (or Related) |

Evidence:
- `themaplenw2.com` describes The Maple as "a BTR development from Related Argent".
- `related.com/our-company/properties/maple` — the Related properties portfolio lists The Maple.
- "Be Living" does not appear in any current 2026 marketing / press coverage of The Maple — the name appears to be an older transitional operator identity no longer in use.

Recommend updating operator from "Be Living" to "Related Argent" for consistency with the other three Brent Cross Town projects and the Heart of Hale projects.

### Qualification block for The Maple + Heart of Hale (operator-wide)

Related Argent has not published a tenant-facing FAQ. All structural fields `"unclear"` with direct-enquiry recommendation.

| Field | Proposed value |
|---|---|
| `agreement_type` | `"ast"` (BTR default, unverified) |
| `referencing_provider` | `"unclear"` |
| `min_tenancy_months` | `12` (BTR default, unverified) |
| `income_multiple` | `30` (industry default, unverified) |
| `open_banking_accepted` | `"unclear"` |
| `upfront_rent_policy` | `"one-month-ast-cap"` (AST + RRA default) |
| `accepts_professional_guarantor` | `"unclear"` |
| `accepts_individual_overseas_guarantor` | `"unclear"` |
| `credit_check` | `"unclear"` |
| `international_tenant_policy` | `"unclear"` — likely friendly but unstated |
| `visa_expiry_handling` | `"unclear"` |
| `qualification_flexibility_signal` | `"unclear"` |
| `realism_pathways` | `[]` |
| `grad_visa_realism` | **preserve or upgrade via direct enquiry** |
| `research_status` | `"complete"` — research conclusion is "policy not published" |

### Per-project adjustments

| Project | Current realism | Proposed realism | Rationale |
|---|---|---|---|
| The Maple (brent-cross-town) | `achievable` | **preserve `achievable` only if supported by direct enquiry confirming a pathway** — otherwise downgrade to `unclear`. The current "achievable" sits on thin evidence. | Price floor ~£1,950 is competitive but no operator pathway is confirmed. |
| 1 Ferry Island (tottenham-hale) | `unknown` | `"unclear"` — upgrade from unknown to unclear (researched, not resolved) | Research confirms BTR but no qualification pathway. |
| 2 Ferry Island (tottenham-hale) | `unknown` | `"unclear"` | Same — in delivery, same operator-wide opaque policy. |
| The Ashbee (brent-cross-town) | `blocked` | **preserve** | BTS, correct. |
| The Delamarre (brent-cross-town) | `blocked` | **preserve** | BTS, correct. |
| Conductor House (brent-cross-town) | `achievable` | Needs re-evaluation — reflects LLR allocation pathway (different rulebook) or something else | The current verdict assumes LLR eligibility; Caner's profile doesn't obviously satisfy LLR affordability thresholds. |

### Shared narrative for Related Argent BTR (The Maple + 1/2 Ferry Island)

> Related Argent operates Heart of Hale (1 Ferry Island delivered, 2 Ferry Island in delivery) and The Maple at Brent Cross Town as premium BTR. The operator has not published a tenant-facing FAQ or qualification page, so structural fields (referencing provider, guarantor policy, income multiple enforcement, visa handling) are genuinely unclear — direct enquiry to the building's leasing team is required to confirm what pathways exist. Pricing and amenity positioning are strong (Conran interiors, named architects, 25m pool at The Maple, AHMM at 1 Ferry Island), and if the qualification process turns out to be Homeppl-friendly or guarantor-accepting, these are shortlist-grade BTR addresses for Caner.

---

## Apply checklist

- [ ] Apply secondary-market qualification defaults to 9 St George / St James BTS projects (preserve realism)
- [ ] Correct T1.4 reasoning in white-city.ts and ealing-broadway.ts to drop unified-operator framing
- [ ] User-confirm: rename The Maple operator from "Be Living" to "Related Argent"
- [ ] Apply opaque-BTR qualification block to The Maple, 1 Ferry Island, 2 Ferry Island
- [ ] Flag The Maple's `achievable` verdict + Conductor House's `achievable` verdict for user reconfirmation — both may be premature
- [ ] Preserve "St George (Berkeley)" / "St James" operator slugs in the enumeration (historical grouping, not worth renaming despite March 2026 brand unification)

---

## Sources

See `operators/berkeley-family-bts.md`. All accessed 2026-04-16.
