# Proposals — Councils + Social Housing Operators

Covers: Southwark Council, Greenwich Council, Lambeth Council, Camden Council, Hyde New Homes, Guinness Homes.

## Shared operator-level facts (apply to all)

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `ast` | Social rent AST norms (or n/a for shared ownership, which is buy-tenure). |
| `referencing_provider` | `in-house` | Council / HA / Homes England eligibility process. |
| `income_multiple` | n/a | Income *caps* apply (£90k London for shared ownership), not multiples. |
| `open_banking_accepted` | `unclear` | Not part of the eligibility model. |
| `upfront_rent_policy` | `one-month-ast-cap` | AST + RRA (for social rent); n/a for shared ownership. |
| `accepts_professional_guarantor` | `unclear` | Moot — eligibility gate is the block. |
| `accepts_individual_overseas_guarantor` | `unclear` | Moot. |
| `credit_check` | `standard` | Standard process. |
| `international_tenant_policy` | `rejected` | Council / HA eligibility requires UK-resident + local-authority-area connection (council); shared ownership requires first-time-buyer + income cap + cannot-afford-open-market tests. Caner fails multiple tests on a Graduate visa as a private renter. |
| `visa_expiry_handling` | `rejected` | Follows from eligibility. |
| `qualification_flexibility_signal` | `rigid` | Statutory eligibility — not discretionary. |
| `min_tenancy_months` | `12` | Council / HA tenancy term. |

## Realism pathway suggestions

`realism_pathways: []`
`grad_visa_realism: "blocked"` (authored state — eligibility block)

**Narrative (use for all projects in this batch):**
> Social housing — not accessible to private renters.

(Where more precision helps: "Council / housing-association allocation with eligibility tests Caner cannot pass on a Graduate visa as a private renter.")

## Per-project proposals

| Project | Area | Current realism | Suggested realism | Change |
|---|---|---|---|---|
| `canada-water-leisure` | Canada Water | `unknown` | `blocked` | Civic anchor, not primarily residential; social tenure. |
| `greenwich-council-royal-arsenal` | Woolwich | `unknown` | `blocked` | Greenwich Council allocation only. |
| `somerleyton-road` | Brixton | `blocked` | preserve `blocked` | Already correct. |
| `west-kentish-town-estate` | Kentish Town | `unknown` | `blocked` | Camden Council allocation; unbuilt pipeline. |
| `kidbrooke-hyde-shared-ownership` | Kidbrooke Village | `blocked` | preserve `blocked` | Already correct (shared ownership = buy, with eligibility). |
| `silvertown-lendlease` | Royal Wharf / Docks | `unknown` | `blocked` | Shared ownership via Guinness Homes allocation; broader masterplan scope imprecise. |

## Pricing (side-effect)

Not applicable — none of these are market-rate rental products.

## Ghost-project flags

None.

**Scope note:** `silvertown-lendlease` is attributed to Guinness Homes but the wider Silvertown masterplan (7,172 homes outline permission) includes market-rate phases by Lendlease / Starwood that are outside Guinness Homes' remit. This is a scope-imprecision flag for future research, not a ghost flag.

## Notes (for each project's `notes` field)

Use: "Social housing — not accessible to private renters."

Longer form where useful: "Council-allocated / housing-association / shared-ownership product. Eligibility requires UK residency + local-connection + income-cap / key-worker tests Caner cannot pass on a Graduate visa as a private renter without a UK job."

## Sources

- https://www.hydenewhomes.co.uk/ways-to-buy/shared-ownership/ (accessed 2026-04-16, Hyde operator)
- https://www.hydenewhomes.co.uk/faq/who-is-eligible-to-buy-a-home-through-the-shared-ownership-scheme/ (accessed 2026-04-16, Hyde eligibility)
- https://www.guinnesshomes.co.uk/developments/silvertown/shared-ownership-in-newham/ (accessed 2026-04-16, Guinness operator)
- https://www.sharetobuy.com/developments/6935/ (accessed 2026-04-16, Argenta shared ownership)
- https://www.london.gov.uk/programmes-strategies/housing-and-land/homes-londoners/search/property/argenta (accessed 2026-04-16, GLA)
