# Proposals — The Quarters by Bravo + Bravo Investment House

**Operator group:** Bravo (brand: The Quarters by Bravo)
**Date:** 2026-04-16
**Projects covered:** `quarters-croydon`, `quarters-kilburn`, `quarters-swiss-cottage`

**Core finding:** Per-building policy variation is significant. Croydon is meaningfully different (no checks) from Kilburn/Swiss Cottage (in-house referencing). Operator-wide block does not apply uniformly — must split.

---

## Operator-level baseline (shared fields)

| Field | Value | Applies |
|---|---|---|
| `agreement_type` | `"licence"` | All three (30-day serviced licence; 6-month AST is standard but licence is the operator's primary framework) |
| `referencing_provider` | `"in-house"` at Kilburn/Swiss; `"none"` at Croydon | Differs per building |
| `income_multiple` | `null` | All three — not publicly stated |
| `open_banking_accepted` | `"unclear"` | All three |
| `accepts_professional_guarantor` | `"unclear"` | All three |
| `accepts_individual_overseas_guarantor` | `"unclear"` | All three |
| `international_tenant_policy` | `"accepted-case-by-case"` | All three |
| `visa_expiry_handling` | `"unclear"` | All three |
| `qualification_flexibility_signal` | `"flexible"` | All three |
| `upfront_rent_policy` | `"multi-month-available"` | All three (licence permits; Kilburn case of 6 months upfront demanded) |
| `research_status` | `"complete"` | All three |

---

## Per-project proposals

### `quarters-croydon` (croydon)

**Current:** operator = `"The Quarters by Bravo"`, realism = `"licence-exempt"`, living_model = `"managed-studio"`, preview mentions "no credit or background checks — just pay and move in" and 3-month min stay

**Proposed qualification block:**

| Field | Value |
|---|---|
| `agreement_type` | `"licence"` |
| `referencing_provider` | `"none"` — per Caner's first-party intel |
| `min_tenancy_months` | `3` |
| `credit_check` | `"none"` |
| `realism_pathways` | `["licence-exempt-light-ref", "with-upfront-licence"]` |
| `grad_visa_realism` | `"licence-exempt"` ✅ preserve |

**Other changes:** None substantial. Preserve current state. Accessed_date → 2026-04-16.

**Narrative notes:**
> The Quarters Croydon is the operator's no-checks building (first-party confirmed): pay a reservation fee, provide ID for right-to-rent, move in. 3-month minimum (recently changed from monthly). Cheapest building in the dataset at ~£900-1,100/mo, with noted sound-insulation complaints. Licence-exempt path clears cleanly.

---

### `quarters-kilburn` (kilburn)

**Current:** operator = `"Bravo Investment House"`, realism = `"licence-exempt"`, living_model = `"managed-studio"`

**Proposed qualification block:**

| Field | Value |
|---|---|
| `agreement_type` | `"licence"` (primary) — 6-month AST is the contract but the referencing intensity is licence-flavoured |
| `referencing_provider` | `"in-house"` |
| `min_tenancy_months` | `1` on serviced licence, `6` on AST — use `1` |
| `credit_check` | `"standard"` — £400 credit check fee reported |
| `realism_pathways` | `["with-upfront-licence"]` (strict reading: licence-exempt-light-ref fails because credit_check=standard not lenient) |
| `grad_visa_realism` | **Two options:**<br>(a) `"licence-exempt"` — preserve current state, lenient interpretation<br>(b) `"achievable-with-guarantor"` — tighter, reflects the referencing process |

**Recommendation:** (a) preserve `"licence-exempt"` on the grounds that:
1. The serviced-licence 30-day short-stay option bypasses AST referencing entirely
2. Qualification flexibility signal is flexible (upfront substitutes for referencing)
3. Downgrading would be a meaningful shortlist shift from prior research

But flag the ambiguity in notes: "Kilburn has in-house referencing with standard credit check — lighter than BTR but not zero-friction like Croydon. One documented case of 6 months rent demanded upfront despite references."

**Narrative notes:**
> The Quarters Kilburn uses in-house referencing with a standard credit check (one Trustpilot case reports a £400 credit check fee). The 30-day serviced licence option bypasses AST referencing entirely and is the pathway to target — on the licence model, upfront rent substitutes for full referencing. Compact 19 sqm standard studios; HomeViews 4.72/5 (135 reviews), management rated 4.9.

---

### `quarters-swiss-cottage` (swiss-cottage)

**Current:** operator = `"Bravo Investment House"`, realism = `"licence-exempt"`, living_model = `"managed-studio"`

**Proposed qualification block:**

| Field | Value |
|---|---|
| `agreement_type` | `"licence"` (primary) |
| `referencing_provider` | `"in-house"` |
| `min_tenancy_months` | `1` on serviced licence |
| `credit_check` | `"standard"` |
| `realism_pathways` | `["with-upfront-licence"]` strict; keep `["licence-exempt-light-ref", "with-upfront-licence"]` if preserving current verdict |
| `grad_visa_realism` | `"licence-exempt"` — preserve |

Same recommendation as Kilburn — preserve via licence-path flex.

**Narrative notes:**
> Bravo's flagship building (HomeViews 4.84/5, 144 reviews) with 103 studios and 2020 completion. Same in-house referencing as Kilburn, but 26-43 sqm standard means more liveable units and a better-reviewed management experience. Terra Terra restaurant and gym on-site. ~£2,000/mo standard. The 30-day serviced licence is the qualification-light pathway; 6-month AST requires fuller in-house referencing.

---

## Operator attribution consolidation

Current dataset has **inconsistent operator naming**:
- `quarters-croydon`: `operator: "The Quarters by Bravo"`
- `quarters-kilburn`: `operator: "Bravo Investment House"`
- `quarters-swiss-cottage`: `operator: "Bravo Investment House"`

**Proposal:** unify on `operator: "The Quarters by Bravo"` for all three. Rationale:
- Brand/website is "The Quarters by Bravo" (thequarters.co.uk)
- "Bravo Investment House" is the holding company, not the operating brand
- Unified attribution simplifies operator-level outreach

Alternative: keep current bifurcation if there's an authored distinction (e.g. different legal entities). **Needs user decision.** Recommendation is unification.

---

## Ghost-project checks — no issues

All three buildings verified in thequarters.co.uk footer and location pages. Clean matches. "Watford" is the fourth location per the website but is outside Caner's London scope — no dataset entry required.

---

## Sources

- https://thequarters.co.uk/
- https://thequarters.co.uk/locations/the-quarters-kilburn
- https://www.homeviews.com/development/the-quarters-kilburn-nw6
- https://www.homeviews.com/development/the-quarters-swiss-cottage
- Caner's first-party intel (MEMORY) — Croydon no-checks policy

All accessed 2026-04-16.
