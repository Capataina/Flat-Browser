# Proposals — Housing Associations (A2Dominion, Swan, Sanctuary)

## Classification finding

Housing associations are registered providers of affordable tenure. Caner is hard-blocked from this tenure type on visa-status and register-access grounds; no referencing or guarantor pathway can overcome it. Exception: where the dataset entry signals a split (e.g. "A2Dominion (affordable); private landlords (market)"), the accessible stock is the private-landlord portion and should be treated as secondary-market.

## Per-project proposals

### A2Dominion (affordable); private landlords (market) — West Hampstead Central

Apply **secondary-market defaults** to the private-landlord market-rent portion (the actually-accessible stock):

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
| `grad_visa_realism` | `unlikely` (preserved) |
| `research_status` | `partial` |

### Swan Housing / Sanctuary

The 2024 Swan→Sanctuary merger makes this effectively Sanctuary. Sanctuary Market Rent is the only Caner-accessible product at this operator and it's a thin stack without published internationally-friendly policy.

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
| `grad_visa_realism` | `unlikely` (from `unknown`) |
| `research_status` | `partial` |

## Realism pathway suggestions

`realism_pathways: []` for both. Too many fields `"unclear"` for the playbook to derive a confident pathway.

## Ghost-project flags

None. Both projects exist.

**Note on operator attribution:** "Swan Housing / Sanctuary" should arguably be updated to "Sanctuary" post-merger, but the attribution is not incorrect (Swan's legal entity was absorbed into Sanctuary rather than dissolving). Not proposing a rename in this batch.

## Notes (narrative)

For A2Dominion-attributed project:

> West Hampstead Central is a mixed-tenure scheme where A2Dominion holds the affordable stock and individual investor-landlords let the market-rent flats via high-street agents. Caner's route is the private-landlord portion, which has no unified operator-wide qualification policy. Secondary-market defaults apply: per-listing referencing through standard stacks, post-RRA upfront-rent lever dead, realistic outcomes require individual enquiry.

For Swan / Sanctuary project:

> Sanctuary (which absorbed Swan Housing in 2024) is a registered housing provider. Affordable tenure is not accessible to Caner on visa-status and register-access grounds. Sanctuary Market Rent, where available, runs standard UK referencing without published internationally-friendly policy — realistic outcomes likely require the guarantor route via direct enquiry, with no pre-confirmation pathway.

## Sources

- https://www.a2dominion.co.uk/renting — accessed 2026-04-16
- https://www.sanctuary.co.uk/homes-to-rent — accessed 2026-04-16
- https://www.propertyweek.com/news/swan-housing-merges-with-sanctuary — merger context (2024)
