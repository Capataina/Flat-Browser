# Get Living — Research Findings (2026-04-16)

Research agent batch: Get Living, Grainger, L&G Living (three critical BTR operators for Caner's shortlist).

## Operator summary

Get Living is the UK's largest single-site BTR operator. Its flagship is East Village (Stratford — 2,445+ homes, converted Olympic Athletes' Village) and it also operates Elephant Central (Elephant & Castle) and The Filigree (Lewisham, currently closed for water remediation through mid-late 2026). Backed by Delancey; property management via Yardi software. The operator-level shortlist compiled 2026-04-16 marks East Village as the **#1 pick** with three documented qualification pathways for graduate-visa renters.

## Key findings

### Referencing provider — Homeppl (inherited high confidence)

Homeppl is not named verbatim on the public Get Living site in the pages crawled (https://www.getliving.com/faqs/, https://www.getliving.com/living-with-us/, https://www.getliving.com/renting-with-us/). However:

1. Prior Caner research (captured in `src/areas/data/stratford.ts` line 233-234 and `src/areas/data/elephant-park.ts` line 119-120) records Get Living as a confirmed Homeppl user.
2. Homeppl's own marketing site lists as clients: CBRE, JLL, Knight Frank, Greystar, Spotahome, Quintain Living — Homeppl is a BTR-focused provider and Get Living matches the client profile.
3. The 2026-04-16 shortlist compiled from 22 parallel research agents reconfirmed this attribution.

Recommendation: `referencing_provider: "homeppl"` with `type: "press"` source reflecting prior research, and a narrative note that direct Get Living-side confirmation is not in their public FAQ. This is consistent with how the skill's playbook handles "inherited" findings.

### The three documented pathways

All three derive from Homeppl's published rules (https://homeppl.help.thirdfort.com/hc/en-gb and mirrored in search-result extracts of their FAQ):

**Pathway 1 — standard Homeppl referencing (30× annual income)**
Verbatim: "if your yearly salary or self-employed income is at least 30x as much as the monthly price of your rent, they will confirm your affordability."
→ Caner cannot clear this unassisted (no UK payslips, no UK salary). But the pathway exists and matters for computation of what the standard route is.

**Pathway 2 — 36× monthly rent in savings via Open Banking**
Verbatim: "If you will be referencing savings, Homeppl will ask that you have 36x the monthly price of the rent in savings. You need to upload bank statements from the past three months to demonstrate this."
→ This is Caner's primary documented route. For a £2,000/mo rent, £72,000 in Monzo for 3 months of statements satisfies Homeppl.

**Pathway 3 — Homeppl Co-Signer (non-UK-resident overseas co-signer)**
Verbatim: "A Co-Signer is someone you know who will co-sign the agreement between us, and Homeppl needs to validate your Co-Signer and test their credit card details before approving them. They do not have to reside in the UK. Your Co-Signer will need to provide a copy of a valid Passport, proof of address dated within the last three months, and valid credit card details."
→ Caner's Turkish lawyer parents are eligible co-signers under this route. This is the strongest confirmation across the entire research batch that `accepts_individual_overseas_guarantor: "yes"`.

### Agreement type & tenancy length

From https://www.getliving.com/living-with-us/ (verbatim): "Our tenancy contracts are offered at three-years standard to give you security with the flexibility of a break clause."

That's AST with a 3-year fixed term + break clause. Post-RRA (May 2026), new assured tenancies cannot have end dates — they become periodic. Whether Get Living is maintaining 36-month fixed terms into May 2026+ is an unconfirmed operational question. For v1 research: `agreement_type: "ast"`, `min_tenancy_months: 12` as a conservative floor (3-year is offered but shorter commitments may exist).

### Advance rent / RRA

From https://www.getliving.com/faqs/ (verbatim): the reservation deposit is "no more than one week's rent" (Advanced Rental Payment). This is compliant with RRA 2025 and consistent with `upfront_rent_policy: "one-month-ast-cap"` (the hard cap post-RRA).

### International tenant policy

Get Living's neighbourhood pages (East Village, Elephant Central) emphasise the multi-national resident base. No verbatim "we welcome international residents" on FAQ pages surveyed, but the Homeppl stack (overseas co-signer, Open Banking) structurally supports international applicants. Recommend `international_tenant_policy: "welcomed"` with the understanding that the welcoming posture is inferred from the Homeppl stack rather than verbatim operator language.

### Credit check — lenient (Homeppl default)

Homeppl is explicitly designed for thin-credit applicants (its USP). `credit_check: "lenient"`.

### Visa expiry handling

Get Living offers 3-year standard contracts. Caner's graduate visa expires 2027-08-01 (~16 months from today 2026-04-16). A standard 3-year tenancy would run past visa expiry. FAQ pages don't address this. Recommend `visa_expiry_handling: "unclear"` pending direct enquiry — this is one of the few fields that needs the operator's confirmation for a specific application.

## The Filigree — closure confirmed

https://www.getliving.com/our-neighbourhoods/the-filigree/ verbatim: "In early 2025, we experienced a major leak caused by a burst mains water pipe, which led to flooding in the underground energy centre." And: "Although we can't confirm a reopening date yet, our early estimate is mid to late 2026."

Action: mark `grad_visa_realism: "blocked"` (not because of qualification but because of building unavailability). Populate the qualification block with Get Living operator defaults so that when the building reopens the data is correct and only the realism state needs to be flipped. Add note: `"CLOSED for water remediation; reopening mid-late 2026 per operator. All qualification data reflects Get Living operator defaults; realism will flip once building reopens."`

## Portfolio verification

Get Living's site (https://www.getliving.com/our-neighbourhoods/) lists:
- East Village (Stratford) — verified, active
- Elephant Central (Elephant & Castle) — verified, active
- The Filigree (Lewisham) — verified existence; currently closed

No ghost-project flags for Get Living.

## Flex signal

HomeViews reviews (https://www.homeviews.com/company/get-living) are mixed — operational complaints (maintenance response, rent escalation) dominate; no documented cases of qualification flex either way. `qualification_flexibility_signal: "standard"`.

## Grade-relevant caveat

East Village is the single strongest pathway-stack BTR for Caner's profile in the dataset — Homeppl 36× savings + Homeppl Co-Signer + standard Homeppl referencing (available if Caner secures UK employment between now and application). This is why the 2026-04-16 shortlist made it #1.

## Sources

- https://www.getliving.com/faqs/ (accessed 2026-04-16)
- https://www.getliving.com/living-with-us/ (accessed 2026-04-16)
- https://www.getliving.com/our-neighbourhoods/ (accessed 2026-04-16)
- https://www.getliving.com/our-neighbourhoods/the-filigree/ (accessed 2026-04-16) — closure confirmation
- https://www.getliving.com/our-neighbourhoods/east-village/ (accessed 2026-04-12 per prior research)
- https://www.getliving.com/our-neighbourhoods/elephant-central/ (accessed 2026-04-12 per prior research)
- https://homeppl.help.thirdfort.com/hc/en-gb (accessed 2026-04-16) — 36× savings rule, Co-Signer route
- https://www.homeppl.com/lp/case-study-quintain-living/ (accessed 2026-04-16) — confirms Homeppl client shape
- https://www.homeviews.com/company/get-living (accessed 2026-04-16) — flex signal check
- https://www.yardi.co.uk/about-us/our-clients/clients-success-get-living/ (accessed 2026-04-16) — Yardi property-management confirmation (not referencing)
