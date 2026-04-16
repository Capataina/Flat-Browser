# Housing Associations — Operator Findings

**Researched:** 2026-04-16
**Operators covered:** A2Dominion (affordable); private landlords (market), Swan Housing / Sanctuary
**Project count in dataset:** 2 (one per operator attribution)
**Verdict:** Affordable-housing providers. Caner is hard-blocked from affordable tenure. Apply `blocked` with standard note.

---

## The affordable-tenure block

A2Dominion, Swan Housing, and Sanctuary (Housing) are all registered providers of social housing (housing associations) operating in London. Their rental stock is predominantly **affordable tenure** — social rent, London Affordable Rent, London Living Rent, Discounted Market Rent, and shared ownership. Access to affordable tenure requires:

1. **Being on a local authority housing register** — typically requires UK residency, local-connection criteria (usually 3-5 years in the borough), income ceilings (often <£60k household for London Living Rent, <£90k for shared ownership), and priority banding based on housing need.
2. **Right to Rent status compatible with the tenure type** — some affordable products require settled status, not Graduate visa.
3. **Queue position** — most London housing association stock has waiting lists measured in years.

Caner does not qualify for any of these pathways:
- Graduate visa is not a settled status — most affordable tenure (social rent, LLR, shared ownership via s.106 products) requires either UK citizenship, ILR, or equivalent permanent status.
- No local connection to the relevant boroughs for housing-register purposes.
- Not on a housing register; no realistic path to joining one before the Ten Degrees eviction window closes.
- Shared ownership specifically requires a mortgage, which Graduate-visa holders without UK employment cannot obtain on affordable-ownership terms.

This is a **hard block at the tenure-access level**, not a referencing or guarantor block. No referencing stack, guarantor acceptance, or income multiple can overcome it. The only exception would be if the housing association let specific units on full-market terms to private tenants — which A2Dominion sometimes does at specific schemes (e.g. market-rent slots at mixed-tenure developments), but this is routed via private landlords, not the housing association itself.

---

## Per-operator details

### A2Dominion (affordable); private landlords (market) — West Hampstead Central

Attribution in dataset explicitly signals the split: **A2Dominion owns/manages the affordable portion; the market-rent flats are owned by private individual landlords**. Caner's pathway on this project is the private-landlord portion (secondary market), not the A2Dominion portion. This should be researched as secondary-market rental, not as housing-association rental.

Existing `grad_visa_realism: "unlikely"` aligns with secondary-market default — preserve.

Proposed treatment: apply secondary-market defaults (same as the secondary-market.md batch) because the actually-accessible rental stock here is the private-landlord portion, not the A2Dominion portion. Do not classify as housing-association `blocked` — the A2Dominion attribution is just the developer/affordable partner, not the route Caner would rent through.

### Swan Housing / Sanctuary — (project TBD)

Dataset entry lists "Swan Housing / Sanctuary" as a combined operator — suggesting the project is split between two housing associations' stakes or that the dataset is uncertain which housing association runs it. Either way: affordable tenure.

Swan Housing Association was absorbed by Sanctuary in 2024 — Swan became part of Sanctuary on 1 April 2024 after financial difficulties. So "Swan Housing / Sanctuary" is now effectively just Sanctuary. The relevant entity for any market-rent enquiry is Sanctuary Housing Group.

Sanctuary does operate some **Sanctuary Market Rent** units — their market-rent brand, not to be confused with affordable tenure. However, Sanctuary Market Rent's policies are not as internationally-friendly as purpose-built BTR — standard UK credit-check / guarantor / income-multiple stack applies with no published flex language. In practice, treatable as secondary-market-flavoured rental from a qualification standpoint.

Existing `grad_visa_realism: "unknown"` — propose `"unlikely"` with note explaining the Swan→Sanctuary merger and the tenure-access issue.

---

## The two dataset projects

| Operator attribution | Project | Current realism | Proposed | Reasoning |
|---|---|---|---|---|
| A2Dominion (affordable); private landlords (market) | West Hampstead Central | `unlikely` | `unlikely` (preserve) | Secondary-market defaults apply to the private-landlord portion. |
| Swan Housing / Sanctuary | (see enumerator) | `unknown` | `unlikely` | Sanctuary Market Rent if any, otherwise housing-association block. |

---

## Note on the wider data

Other housing-association-adjacent operators in the dataset:
- **Peabody** (3 projects) — housing association; mixed-tenure schemes often have market-rent components. Research separately; may have Peabody Market Rent products accessible on standard terms.
- **L&Q (affordable); private landlords (market)** (1 project) — same split structure as A2Dominion entry. Treat as secondary-market.
- **Hyde New Homes** (1 project — Kidbrooke Square Shared Ownership) — shared ownership only, `blocked` preserved (shared ownership not accessible to Graduate-visa holders without UK employment or ILR).
- **Guinness Homes** (1 project) — housing association; check for market-rent products.
- **Dolphin Living** (1 project) — intermediate rent charity, requires key-worker / income-ceiling eligibility. Also blocked.
- **Native Communities / Native Residential** (2 projects) — intermediate rent operator. Likely blocked.
- **Southwark Council / Lambeth Council / Camden Council / Greenwich Council** — social housing, full block.

These are not in this batch's scope but noted for awareness — a follow-up housing-association sweep could treat them consistently.

---

## Sources

- https://www.a2dominion.co.uk/renting — accessed 2026-04-16 (A2Dominion rental products overview)
- https://www.sanctuary.co.uk/homes-to-rent — accessed 2026-04-16 (Sanctuary market rent availability)
- https://www.gov.uk/government/news/sanctuary-and-swan-merger — press confirmation of 2024 merger
- https://www.propertyweek.com/news/swan-housing-merges-with-sanctuary — 2024 merger context
- UK gov Right to Rent guidance (for affordable-tenure visa eligibility framing)
