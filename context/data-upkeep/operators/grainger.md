# Grainger plc — Research Findings (2026-04-16)

## Operator summary

Grainger plc is the UK's largest listed residential landlord, FTSE 250, LSE ticker GRI. Operates a mixed PRS/BTR portfolio including institutional-scale new-build BTR (Fortunes Dock, Argo Apartments/Hallsville Quarter, Windlass Apartments, etc.) and legacy PRS stock. Long-stated "Better Renting" brand narrative: long tenancies (1/3/5 year options), professional management.

The 2026-04-16 research round flipped Grainger from a prior "blocked / Goodlord-stack" assumption to **achievable-with-guarantor** based on verbatim language on the operator's rental-process page.

## The flip — verbatim confirmation

https://www.graingerplc.co.uk/living-with-us/our-rental-process (accessed 2026-04-16):

> "We do accept guarantors or a higher proportion of rent in advance, but we recommend you discuss this upfront with our team."

This is the key unlock. Grainger:
1. Accepts guarantors (scope not limited to UK-resident or individual) — `accepts_professional_guarantor: "yes"`
2. Accepts a higher proportion of rent in advance — a second lever

Same page, verbatim, income multiple:

> "the collective annual salaries of everyone who'll be making rental payments would need to be around 30 times the monthly rent"

And verbatim on referencing:

> "We use a third-party referencing provider, which is done online and takes minutes to complete."

**The third-party provider is not named.** Goodlord was the inherited hypothesis (from prior Caner research in `src/areas/data/` and the playbook's "Goodlord-stack standard BTR" template), but the operator's current public text doesn't name it. Options:
- Recommend `referencing_provider: "unclear"` — honest to source.
- Or carry inherited `referencing_provider: "goodlord"` with a lower-confidence source type.

I'm going with **`referencing_provider: "unclear"`** because (a) naming a specific provider without a live citation is schema-incorrect per the playbook's "every field value must cite a URL" rule, and (b) the referencing provider is orthogonal to the key realism lever — Grainger's guarantor acceptance is what matters for Caner, not which Homeppl/Goodlord-equivalent runs the checks.

## Right to rent / international tenants

Same page, verbatim:

> "Right to rent verification: Required for all applicants; passport or share code needed for non-UK citizens"

Grainger accepts non-UK-citizen applicants — standard right-to-rent regulatory compliance (share code route for visa holders). This is operator-neutral: every UK landlord is legally required to do this. But the presence of the share-code language means international applicants are contemplated, not excluded. `international_tenant_policy: "accepted-case-by-case"` is the right read — not verbatim "welcomed" but actively documented accommodation for non-UK-citizen applicants.

## Overseas vs UK-resident guarantor

The operator's language — "We do accept guarantors" — does not specify UK-resident only. However, UK landlord industry practice is that guarantors are typically required to be UK-resident homeowners with UK credit history unless otherwise stated. Grainger's silence on overseas acceptance is ambiguous. Recommend `accepts_individual_overseas_guarantor: "unclear"` — direct enquiry required.

## Advance rent / RRA

The verbatim text "a higher proportion of rent in advance" was last updated before RRA commencement (1 May 2026). Post-RRA, advance rent on ASTs is capped at 1 month. Whether Grainger is maintaining this language post-1-May-2026 is an open operational question — the page text may be stale or Grainger may be preparing a revised policy.

For v1: keep `upfront_rent_policy: "one-month-ast-cap"` per the inferred default (AST + RRA). Flag in notes that Grainger's stated "higher proportion of rent in advance" may have become legally void or reduced to the 1-month cap post-1-May-2026.

## Tenancy length — Better Renting

Grainger's corporate "Better Renting" positioning (https://corporate.graingerplc.co.uk/better-renting) emphasises long tenancies — 1/3/5 year options, average tenancy 32 months. Consistent with the existing Argo research note in `src/areas/data/canning-town.ts`. Post-RRA, fixed-term ASTs are being phased out; whether Grainger will maintain equivalent long-stay security via rolling periodic tenancies is the direction of travel but not verbatim stated.

For v1: `min_tenancy_months: 12` (standard BTR floor; Grainger may accept shorter but not publicly stated).

## Open Banking

Not mentioned anywhere on the rental-process page. `open_banking_accepted: "unclear"`.

## Credit check

Grainger's rental-process page confirms referencing includes a credit check. No strictness/leniency language — no floor stated, no explicit "lenient" language. `credit_check: "standard"` is the right read.

## Portfolio verification

Grainger's main site (https://www.graingerplc.co.uk/) lists developments across 8+ East London developments. Search of their portfolio data layer confirmed:

- **Fortunes Dock** ✅ verified in Grainger portfolio (Royal Wharf / Silvertown area, E16)
- **Windlass Apartments** ✅ verified in Grainger portfolio (Tottenham Hale / Hale Wharf)
- **Argo Apartments** ✅ verified in Grainger portfolio (Canning Town / Hallsville Quarter)
- **The Copyhouse** ❌ **NOT found in Grainger portfolio**

### Ghost-project flag — The Copyhouse (Bermondsey)

Category A (true ghost) candidate. Search evidence:
- `"Copyhouse" OR "Copy House" apartments London SE1 Bermondsey PRS BTR` returned zero relevant results; only returned a content marketing agency ("Copy House Ltd.") and a film production company ("COPY HOUSE LONDON LIMITED") — neither a residential building.
- `Grainger plc portfolio "Bermondsey" OR "Copyhouse" site:graingerplc.co.uk` returned zero results.
- `"Grainger plc" "The Copyhouse" Bermondsey operator rental` returned zero results.
- Not listed in Grainger's main portfolio page as found via search.
- HomeViews, Trustpilot, Rightmove, Zoopla — no reference to "The Copyhouse" as a Grainger BTR/PRS building.

Current dataset state (`src/areas/data/bermondsey.ts` line 13-14): `id: "the-copyhouse", area_id: "bermondsey", name: "The Copyhouse", developer: "Grainger", operator: "Grainger", building_type: "PRS", build_phase: "complete", realism: "unknown", preview: "Grainger plc PRS building in Bermondsey."`

The project has minimal existing detail (single-sentence preview, no deep research). This matches the 2026-04-12 ghost-project pattern (e.g. "Bermondsey Works" attributed to Essential Living). Most likely origin: sweep agent hallucination — no cross-linked evidence, no HomeViews entry, no public-listing presence, doesn't appear on Grainger's portfolio.

**Blast radius from bermondsey.ts grep:**
- Line 13-14: `theCopyhouse` project definition
- Line 103: T1.2 reasoning — "Grainger operates The Copyhouse (PRS)"
- Line 105: T1.4 reasoning — "Grainger plc operates The Copyhouse"
- Line 156: `projects: [theCopyhouse, pearlYard, theBermondseyProject]`

Grade impact: Bermondsey's current grade would survive the removal — Pearl Yard (Greystar, 1,600 BTR) and The Bermondsey Project (Greystar, 1,624 homes) remain strong BTR signals. T1.4 prose needs minor rewrite to drop the Grainger claim; no grade recalculation required.

**Recommendation**: flag to user at Phase 3 gate. Category A ghost-project — likely delete + tombstone + rewrite T1.2 and T1.4 prose in bermondsey.ts.

## Flex signal

Grainger's "Better Renting" narrative is explicitly flex-positive — long tenancies, professional management, rent stability commitments. Their written submission to the Renters Rights Bill committee (https://committees.parliament.uk/writtenevidence/110554/pdf/) indicates active engagement with tenant-rights reform. No documented rigid-floor cases. Recommend `qualification_flexibility_signal: "flexible"` — the "discuss this upfront with our team" verbatim language is textbook flex-positive.

## Sources

- https://www.graingerplc.co.uk/living-with-us/our-rental-process (accessed 2026-04-16) — verbatim 30× + guarantor acceptance + right-to-rent language
- https://www.graingerplc.co.uk/ (accessed 2026-04-16) — portfolio confirmation for 3 of 4 projects
- https://www.graingerplc.co.uk/search/ (accessed 2026-04-16) — portfolio data layer
- https://corporate.graingerplc.co.uk/better-renting (accessed 2026-04-16) — long-stay positioning
- https://corporate.graingerplc.co.uk/sites/graingerplc-corp/files/2024-05/Grainger%20plc%20-%20Better%20Renting%20-%20Rental%20Reform%20Document%202024.pdf (accessed 2026-04-16) — rental reform stance
- https://www.londonstockexchange.com/news-article/GRI/grainger-welcomes-renters-rights-bill/16661359 (accessed 2026-04-16) — RRA engagement
- https://committees.parliament.uk/writtenevidence/110554/pdf/ (accessed 2026-04-16) — tenant-rights submission
