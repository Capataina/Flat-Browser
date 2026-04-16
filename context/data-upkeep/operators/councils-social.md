# Councils + Social Housing Operators — operator findings

**Research date:** 2026-04-16
**Researcher:** data-upkeep agent (long-tail batch)

Covers council-operated and housing-association operators in the dataset. All fall into the same category: **social / affordable / shared-ownership tenure not accessible to private renters on Graduate visas**.

| Operator | Project(s) | Area(s) | Tenure | Accessible to Caner? |
|---|---|---|---|---|
| Southwark Council | `canada-water-leisure` | Canada Water | Council-delivered civic anchor, not primarily residential rental | Not a market-rate rental |
| Greenwich Council | `greenwich-council-royal-arsenal` | Woolwich | 90 council flats purchased from Berkeley for council tenants | No |
| Lambeth Council | `somerleyton-road` | Brixton | Primarily social / affordable housing (187 of 378 affordable incl. extra care) | No |
| Camden Council | `west-kentish-town-estate` | Kentish Town | 850 homes (326 council); phased; planning approved Dec 2025, unbuilt | No |
| Hyde New Homes | `kidbrooke-hyde-shared-ownership` | Kidbrooke Village | Shared ownership (eligibility gates: income cap £90k London, first-time-buyer, cannot afford open market) | No (Caner isn't buying) |
| Guinness Homes | `silvertown-lendlease` | Royal Wharf / Royal Docks | Shared ownership via Homes England Guidelines, first-come-first-served; Argenta development | No (shared ownership, not rental) |

---

## Shared structural qualification facts

All these operators share the same qualification shape from Caner's perspective:

| Field | Value | Reason |
|---|---|---|
| `agreement_type` | `ast` (social rent) or n/a (shared ownership is a buy product, not rental) | Housing association / council / shared-ownership provider norms |
| `referencing_provider` | `in-house` | Council / HA / Homes England eligibility process |
| `income_multiple` | n/a | Income *caps* apply, not multiples |
| `open_banking_accepted` | `unclear` | Not relevant to the eligibility model |
| `upfront_rent_policy` | `one-month-ast-cap` or n/a | Social rent / shared ownership |
| `accepts_professional_guarantor` | n/a | Eligibility gate is the block, not guarantor acceptance |
| `accepts_individual_overseas_guarantor` | n/a | Same |
| `credit_check` | `standard` | Standard UK process |
| `international_tenant_policy` | `rejected` | Council and HA eligibility typically requires UK residency + local-authority-area connection; shared ownership requires first-time-buyer + income cap tests |
| `visa_expiry_handling` | `rejected` | Follows from eligibility failure |
| `qualification_flexibility_signal` | `rigid` | Statutory eligibility tests — not discretionary |
| `min_tenancy_months` | `12` | Standard council / HA tenancy term |

---

## Realism (Caner)

For every project in this group:

**`realism_pathways: []`**
**`grad_visa_realism: "blocked"`**

**Narrative (same for all):**
> Social housing / council / housing-association / shared-ownership product. Not accessible to private renters; allocation is through council / housing-association nomination pathways with statutory eligibility tests Caner cannot pass on a Graduate visa as a private renter.

---

## Per-project verification

### `canada-water-leisure` (Southwark Council)

- **Building type:** Not a residential building — the dataset describes this as a civic anchor (leisure centre) with some residential mix but primarily council-delivered leisure infrastructure.
- **Residential rental?** No — the dataset notes "Not scored on residential quality dimensions."
- **Suggested realism:** `blocked` with note "Civic anchor, not primarily a residential rental product."

### `greenwich-council-royal-arsenal` (Greenwich Council)

- **What it is:** 90 flats Berkeley sold to RB Greenwich for council tenants.
- **Accessible to Caner?** No — council-allocated to those on the Royal Borough of Greenwich housing waiting list.
- **Suggested realism:** `blocked` with note "Social housing — not accessible to private renters; Greenwich Council allocation only."

### `somerleyton-road` (Lambeth Council)

- **Current realism:** Already marked `blocked`. Preserve.
- **Confirm:** Yes — 187 of 378 affordable, including extra care. Primarily council / affordable.
- **Note:** Phase 1 complete, Phase 2 from early 2026. Some market-rate *may* exist in later phases but not a clear commercial-rental product Caner can target.

### `west-kentish-town-estate` (Camden Council)

- **Current realism:** `unknown`. Suggest `blocked`.
- **What it is:** Camden's Community Investment Programme project — 850 homes of which 326 council; AHMM architects; planning approved Dec 2025; delivery 10+ years.
- **Accessible to Caner?** No — pipeline social / council product. Non-council phases may exist long-term but not in Caner's 2026 move window.
- **Suggested realism:** `blocked` (primarily social) with note "Social housing — Camden Council allocation; not accessible to private renters. Unbuilt pipeline product."

### `kidbrooke-hyde-shared-ownership` (Hyde New Homes)

- **Current realism:** Already `blocked`. Preserve.
- **What it is:** Shared ownership via Hyde (housing association). Income cap £90k London, first-time-buyer test, "cannot afford suitable home on open market" test. 2-bed from £125k (25% share) — *buy* product, not rental.
- **Confirm:** Caner isn't buying on a Graduate visa; eligibility not satisfiable anyway.

### `silvertown-lendlease` (Guinness Homes — JV with Lendlease / Starwood)

- **Current realism:** `unknown`. Suggest `blocked` for the shared-ownership component; **flag the wider Silvertown masterplan for separate research** — the 7,172-home outline permission will eventually have market-rate phases that are *not* Guinness Homes products.
- **What Guinness Homes delivers:** Shared ownership (Argenta development — 430 homes, partnership with Lendlease; shared ownership allocation via Homes England first-come-first-served).
- **Suggested realism:** `blocked` for the shared-ownership-as-product scope. Note: the broader Silvertown masterplan includes market-rate phases by other operators (Lendlease, Starwood) that sit outside Guinness Homes' remit.

---

## Ghost-project flags

None — all operators exist and all projects are correctly attributed.

**Scope note for `silvertown-lendlease`:** The dataset attributes the entire Silvertown masterplan to `operator: "Guinness Homes"` but Guinness Homes only runs the shared-ownership phases. Market-rate rental phases (if/when delivered by Lendlease or other operators) would need separate research. This is a *scope-imprecision flag* rather than a ghost flag.

---

## Pricing (side-effect)

Not applicable — these are non-market-rate products. No pricing updates needed.

---

## Sources

- https://www.hydenewhomes.co.uk/ways-to-buy/shared-ownership/ (accessed 2026-04-16, operator — Hyde)
- https://www.hydenewhomes.co.uk/faq/who-is-eligible-to-buy-a-home-through-the-shared-ownership-scheme/ (accessed 2026-04-16, operator — Hyde eligibility)
- https://www.guinnesshomes.co.uk/developments/silvertown/shared-ownership-in-newham/ (accessed 2026-04-16, operator — Guinness)
- https://www.sharetobuy.com/developments/6935/ (accessed 2026-04-16 — Argenta shared ownership)
- https://www.london.gov.uk/programmes-strategies/housing-and-land/homes-londoners/search/property/argenta (accessed 2026-04-16, GLA)
