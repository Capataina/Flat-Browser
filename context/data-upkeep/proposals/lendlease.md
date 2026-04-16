# Proposals — Lendlease / Living by Lendlease

## Operator-level facts (BTR buildings only — Park Central West/East, City Lights Point, Parkside)

These are NOT currently in the dataset. See `operators/lendlease.md` for context. If user opts to add them (out of v1 scope unless confirmed), apply:

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `ast` | Inferred — standard BTR with 12-month minimum |
| `referencing_provider` | `in-house` (with HomeLet/Barbon as back-end) | `livingbylendlease.com/uk/rental-application-terms/` verbatim — closest schema match is "in-house with third-party screening"; if the schema strictly enforces the enum, use `unclear` and add note citing HomeLet |
| `open_banking_accepted` | `unclear` | Not mentioned; HomeLet is payslip-centric traditionally |
| `income_multiple` | `null` | Not stated publicly |
| `accepts_professional_guarantor` | `unclear` | Housing Hand acceptance unconfirmed at operator level (2026-04-16 shortlist memory); direct enquiry required |
| `accepts_individual_overseas_guarantor` | `unclear` | Not addressed |
| `upfront_rent_policy` | `one-month-ast-cap` | Inferred from AST + post-RRA |
| `credit_check` | `standard` | HomeLet runs standard UK checks; nothing signals lenient or strict |
| `international_tenant_policy` | `unclear` | Zone 1 BTR in an international-friendly market, but policy not stated; "no students" is the only excluded category stated |
| `visa_expiry_handling` | `unclear` | Not addressed |
| `qualification_flexibility_signal` | `standard` | No positive or negative flex cases found |
| `min_tenancy_months` | `12` | Verbatim "minimum tenancy of 12 months" on `livingbylendlease.com/uk/` |

**Note on `referencing_provider`:** HomeLet is not in the schema's enum. The closest fits are (a) `"unclear"` with HomeLet mentioned in `notes`, or (b) adding HomeLet to the enum if the schema is extended in a future v1.x. Recommended: `"unclear"` with a note. This is also consistent with the Way of Life treatment (Goodlord-stack but fully verified policy exists).

## Realism pathway suggestions (for BTR buildings)

Pathway derivation applied to Caner's profile:

| Pathway | Result | Reason |
|---|---|---|
| `standard-passable` | ❌ | Open Banking not confirmed + credit check not marked lenient |
| `with-professional-guarantor` | ❌ | `accepts_professional_guarantor: "unclear"` blocks the pathway from being added |
| `with-savings` | ❌ | Requires Homeppl; Lendlease uses HomeLet |
| `with-co-signer-overseas` | ❌ | Not documented |
| `with-upfront-licence` | ❌ | AST |
| `licence-exempt-light-ref` | ❌ | AST |

**Resulting array:** `[]`
**Derived `grad_visa_realism`:** `unknown` from pathway derivation.
**But the rule "if >3 structural fields are unclear/unknown, force `grad_visa_realism: unclear`"** applies here — multiple key fields are unclear. Set `grad_visa_realism: "unclear"` with note: "Direct enquiry about Housing Hand / professional-guarantor acceptance is the unlock question for this operator."

## Per-project variations — BTR buildings (if added)

Out of v1 scope — buildings do not yet exist in dataset.

## Per-project variations — existing BTS-mislabelled buildings

For the five existing entries currently tagged `operator: "Lendlease"` but actually BTS, **change operator attribution** to `"Various agents"` and apply secondary-market defaults per `operator-research-playbook.md`:

| Project | area | Current operator | Proposed operator | Proposed qualification block |
|---|---|---|---|---|
| `trafalgar-place` | `elephant-park` | `Lendlease` | `Various agents` | Secondary-market defaults: `agreement_type: "ast"`, `referencing_provider: "unclear"`, `upfront_rent_policy: "one-month-ast-cap"`, `accepts_professional_guarantor: "unclear"`, `international_tenant_policy: "accepted-case-by-case"`, `grad_visa_realism: "unlikely"` (default for individual landlords per playbook) |
| `south-gardens` | `elephant-park` | `Lendlease` | `Various agents` | Same |
| `park-sayer` | `elephant-park` | `Lendlease` | `Various agents` | Same — note Daiwa House JV in ownership but BTS rental via agents |
| `west-grove` | `elephant-park` | `Lendlease` | `Various agents` | Same |
| `the-wilderly` | `elephant-park` | `Lendlease` | `Various agents` (pending — currently in-delivery) | Same — additional note: mid-2026 completion; verify BTR/BTS split once open |

**For all five, suggested `notes`:**
> Delivered as for-sale homes within the Lendlease Elephant Park masterplan. Individual flats now let on the secondary market via various agents. No single operator runs referencing. Qualification varies per listing — default assumption is Goodlord/standard referencing with no published guarantor-acceptance or Open Banking pathway. Upfront-rent offers may unlock individual listings but this is a per-listing conversation. Distinct from Living by Lendlease's BTR portfolio (Park Central West/East, City Lights Point, Parkside) which IS a professional-operator scheme.

## Pricing (side-effect)

No reliable pricing captured — Lendlease Living site does not publicly list prices for any building; BTS buildings have per-listing variance on secondary-market portals.

| Project | studio | one_bed | two_bed | bills_included | price_transparency |
|---|---|---|---|---|---|
| `trafalgar-place` | — | — | — | — | `enquire` (no change) |
| `south-gardens` | — | — | — | — | `enquire` |
| `park-sayer` | — | — | — | — | `enquire` |
| `west-grove` | — | — | — | — | `enquire` |
| `the-wilderly` | — | — | — | — | `enquire` |

## Ghost-project flags

**Category B — wrong-operator attribution (5 projects):** `trafalgar-place`, `south-gardens`, `park-sayer`, `west-grove`, `the-wilderly` — all attributed to `operator: "Lendlease"` but none appear in Living by Lendlease's published BTR portfolio. All five are BTS with secondary-market rental.

**Recommended action:** Do not delete. Reattribute operator to `"Various agents"` + apply secondary-market qualification defaults. Leave the projects in place because the buildings exist, retain Elephant Park area reasoning value, and are legitimate secondary-market listings.

**Blast-radius check — references outside the project definitions:**
- `elephant-park.ts` T1.4 reasoning says "Lendlease runs the BTR and managed rental components under a single operator with corporate referencing — active professional rental market at scale." This is **still accurate** because Park Central West/East and City Lights Point ARE Living by Lendlease BTR — but the five named buildings are not the ones this reasoning refers to. Either (a) add the actual BTR buildings as new projects, or (b) soften the T1.4 reasoning to reference "Lendlease's BTR buildings at the Elephant Park masterplan (Park Central West, Park Central East, City Lights Point, Parkside)" without relying on the BTS buildings as evidence.
- Multiple other references to "Lendlease" in area prose refer to the masterplan developer — those remain correct. Only the `operator:` field on the five BTS projects is wrong.
- `external_links` on the five BTS projects currently point at `lendleaseliving.co.uk/to-rent/` — these should be removed or redirected to `homesbylendlease.co.uk` (sales) once reattributed.

**Missing buildings (discovery flag, not ghost):** Park Central West, Park Central East, City Lights Point, Parkside are all missing from the Elephant Park project list. Adding them would: (a) make T1.4 reasoning land on real BTR, (b) give Caner four pathway-unclear-but-achievable-with-Housing-Hand options in Zone 1, (c) require new `buildProject({})` calls. Proposed additions are out of v1 scope — flag for Phase 1 discovery extension or a dedicated session.

## Notes

**Operator-wide narrative (for the BTR buildings, if added to dataset):**
> Living by Lendlease uses HomeLet (Barbon Insurance Group) for referencing — a traditional payslip/credit-file stack rather than Open Banking-native like Homeppl. 12-month minimum tenancy, no students. Guarantor policy not publicly documented — direct enquiry about Housing Hand or Guarantid acceptance is the single-question unlock for qualification. Elephant Park BTR portfolio comprises Park Central West, Park Central East, City Lights Point, and (newest) Parkside — around 900 BTR homes total alongside the masterplan's BTS buildings.

**Operator-wide narrative (for BTS mislabels, i.e., the five existing projects):**
> Built and sold by Lendlease within the Elephant Park masterplan. Individual flats now let on the secondary market via various agents — no single operator. Qualification is per-listing; default assumption is standard Goodlord-family referencing with no special guarantor pathway. Upfront-rent offers may unlock individual flats but this is a per-listing conversation, not operator policy.

## Sources

See `operators/lendlease.md` § "Sources" for the full URL list.
