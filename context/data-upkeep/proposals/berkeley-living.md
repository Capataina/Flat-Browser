# Berkeley Living — proposals

Research date: 2026-04-16. Corresponds to `context/data-upkeep/operators/berkeley-living.md`.

---

## Scope reminder

The 18-project "Berkeley" batch is overwhelmingly BTS (not BTR). Berkeley Living's only live BTR is **Foundry Yard at Alexandra Gate, Wood Green**, which does **not currently appear in the dataset** (wood-green area). The remaining 17 Berkeley projects need secondary-market defaults, not BTR-operator-level policy.

---

## Missing-project flag — Foundry Yard

**Status: not a ghost project — the reverse. A real BTR that should be added.**

| Detail | Value |
|---|---|
| Name | Foundry Yard |
| Area | wood-green (not yet in dataset? — requires check) |
| Developer | Berkeley Group |
| Operator | Berkeley Living |
| Building type | BTR |
| Living model | standard-btr |
| Units | Part of 187 initial / 402 total at Alexandra Gate |
| Pricing | Studio from £1,925, 1-bed from £1,900 (smaller) / £2,200 (larger), 2-bed from £2,525, 3-bed from £3,500 |
| Amenities | Indoor pool, sauna, steam, yoga/spin studios, gym, co-working, residents' lounge, rooftop terrace |

**Recommendation**: if wood-green exists as an area, add Foundry Yard as a project. If wood-green is not yet an area, this is a judgement call — Wood Green is Zone 3, Piccadilly + GTR, sits between Finsbury Park (Zone 2/3) and Alexandra Palace. Price-wise it could compete with Brent Cross Town / Fizzy Stepney Green at the affordable end of the shortlist.

---

## Proposed qualification block for Foundry Yard

Given Berkeley Living's opaque policy (no FAQ, no referencing provider named, no guarantor policy), all structural fields should be `"unclear"` with a note that direct enquiry is the only way to resolve.

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
| `international_tenant_policy` | `"unclear"` |
| `visa_expiry_handling` | `"unclear"` |
| `qualification_flexibility_signal` | `"unclear"` |
| `realism_pathways` | `[]` |
| `grad_visa_realism` | `"unclear"` |
| `research_status` | `"complete"` — the conclusion of research is "policy not published" |

### Narrative notes

> Berkeley Living is a new platform (first community opened early 2026) and has not yet published a qualification FAQ or referencing-provider statement. All structural qualification fields are genuinely unclear — direct enquiry to the Foundry Yard leasing team is the only way to confirm whether professional guarantor services are accepted, what the income multiple enforcement looks like for international applicants, and how visa expiry is handled. Price-wise Foundry Yard is genuinely competitive at Zone 3 — studios from £1,925, 1-beds from £1,900 — with a premium amenity stack (indoor pool, gym, sauna). If qualification proves to be Homeppl-friendly or explicitly guarantor-accepting, this enters the shortlist.

---

## The 17 BTS / secondary-market projects — proposals

Apply individual-landlord / secondary-market defaults. **Preserve all existing `grad_visa_realism` values** (they are authored judgement; the mechanism is individual-landlord market, not Berkeley operator policy).

### Operator-level defaults (apply to all 17)

| Field | Value | Source / reason |
|---|---|---|
| `agreement_type` | `"ast"` | Individual landlord default |
| `referencing_provider` | `"unclear"` | Varies per agent (Goodlord, Rightmove Referencing, Let Alliance all common) |
| `min_tenancy_months` | `null` | Per-listing |
| `income_multiple` | `30` | Industry default |
| `open_banking_accepted` | `"unclear"` | Varies per agent |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + RRA default |
| `accepts_professional_guarantor` | `"unclear"` | Per-landlord |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Per-landlord |
| `credit_check` | `"standard"` | Default for individual landlords |
| `international_tenant_policy` | `"accepted-case-by-case"` | Varies |
| `visa_expiry_handling` | `"unclear"` | Per-listing |
| `qualification_flexibility_signal` | `"unclear"` | Can't generalise |
| `realism_pathways` | `[]` | No operator-wide pathway |
| `grad_visa_realism` | **preserve existing** | Authored judgement |
| `research_status` | `"complete"` | Research conclusion is "no single operator policy" |

### Shared narrative note (for all 17)

> Delivered by Berkeley Group (or a legacy Berkeley sub-brand — St George, St James, etc. — since unified into "Berkeley" in March 2026) as Build-to-Sale stock. Rental availability is secondary-market only, via individual owner-occupiers letting through independent agents. There is no Berkeley Living operator channel at this project as of 2026-04-16 (Berkeley Living's only live BTR is Foundry Yard at Alexandra Gate). Qualification varies per listing and agent; no single referencing stack applies.

### Per-project flags to investigate

| Project (area) | Current realism | Flag |
|---|---|---|
| Royal Arsenal Riverside (woolwich) | `unknown` | The Woolwich area-level prose calls Berkeley Living the "rental arm" — **incorrect as of 2026-04-16**. Correction recommended in area narrative. |
| City Point (kidbrooke-village) | `achievable` | Unclear what pathway supports `achievable` — research did not surface a BTR operator at Kidbrooke. Recheck authorship of the verdict. |
| Kidbrooke Square (kidbrooke-village) | `achievable` | Same concern. |
| Meridian Gate (kidbrooke-village) | `achievable` | Same concern. |
| Zone at Oval Village (oval-village) | `achievable` | Same concern — no BTR operator confirmed at Oval Village. |
| Kidbrooke Village core masterplan (kidbrooke-village) | `achievable` | Same concern. |

If these `achievable` verdicts are based on upcoming Berkeley Living BTR delivery at Kidbrooke (which is on the 16-site pipeline), they're premature — delivery is late 2026 / 2027. If they're based on current secondary-market reality, they should probably be `unlikely` matching the other Berkeley BTS projects.

---

## Cross-reference corrections (blast radius)

1. **Woolwich area** (`src/areas/data/woolwich.ts`):
   - `preview`: "Berkeley Living rental arm" — incorrect.
   - `long_form` / evaluation prose: multiple references to Berkeley Living operating Royal Arsenal. Should be reworded to "rental via individual landlords and multiple independent agents (Greens Lettings, Bennett Mason, Clipper, LiFE Residential, Vanquish)".
   - `T1.4` reasoning: "Berkeley Living is the rental arm — referencing policy not publicly documented" should be replaced with "Royal Arsenal is a BTS masterplan with secondary-market lettings only — no unified BTR operator".

2. **Ealing Broadway** (`src/areas/data/ealing-broadway.ts`):
   - Filmworks + Dickens Yard currently `operator: "St George (Berkeley)"`. Since St George was retired into Berkeley in March 2026, the operator name is stale. Two options:
     - Leave as-is (historical accuracy — they were delivered under St George brand).
     - Rename to "Berkeley" for consistency with current brand identity.
   - The area-level T1.4 reasoning "Filmworks and Dickens Yard (St George / Berkeley) provide modern rental stock" — the rental route is secondary market through private landlords, not a unified operator. Mark accordingly.

3. **White City** (`src/areas/data/white-city.ts`):
   - Multiple St James projects (White City Living, The Cascades, Solaris, Westmont). St James retired into Berkeley in March 2026. Same rename choice as above.
   - T1.4 reasoning: "Berkeley/St James operates White City Living and Mitsui Fudosan/Stanhope operates Television Centre — two major managed landlord operators with corporate referencing" — the Berkeley/St James claim on White City Living should be re-verified. Research indicates White City Living is BTS with secondary-market rental — NOT a Berkeley Living BTR product. Recommend correcting the T1.4 reasoning.

These area-level cross-references are the real blast radius — the project-level defaults above are straightforward.

---

## Sources

See `operators/berkeley-living.md`. All URLs accessed 2026-04-16.

---

## Apply checklist

- [ ] User-confirm: add Foundry Yard as a new project (requires wood-green area to exist, or a judgement on area scope)
- [ ] Apply secondary-market qualification defaults to the 17 Berkeley BTS projects (preserve existing realism values)
- [ ] Correct Woolwich area narrative: remove Berkeley Living framing for Royal Arsenal
- [ ] Recheck / reconfirm the `achievable` realism flags on 6 Kidbrooke / Oval / Wandsworth Berkeley projects — these don't match the "BTS secondary-market" pattern and likely need re-evaluation
- [ ] Decide: rename St George / St James operator attributions to "Berkeley" (brand unified March 2026) or preserve historical brand names. Recommend preserving historical names to avoid breaking the operator enumeration grouping.
