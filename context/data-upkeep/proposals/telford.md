# Proposals — Telford Homes (2026-04-16)

Telford Homes is a developer, not a BTR operator. The dataset's three Telford-attributed BTR projects split into: one correctly-attributed (UNCLE Acton, just needs a developer-field fix), one ghost candidate (Imperial Square), and one wrong-attribution (One West Point — actually BTS).

## Per-project changes

### `imperial-square` (north-acton.ts) — **GHOST-PROJECT FLAG CATEGORY A**

**Proposed action:** **DELETE** pending user confirmation.

**Evidence:**
1. No web signal for "Imperial Square North Acton BTR" operated by Telford or CBRE IM
2. Telford Living's website lists no such scheme
3. CBRE Residential BTR portfolio lists UNCLE Acton but no Imperial Square
4. Imperial College staff-accommodation scheme "Clayworks Apartments" is the closest "Imperial + Acton" hit but is neither BTR nor Telford
5. Verified North Acton Telford developments are: UNCLE Acton (238 BTR, Realstar-operated) and One West Point (701 BTS, individual sales)

**Tombstone comment on deletion:**
```typescript
// REMOVED 2026-04-16: "Imperial Square" (Telford / CBRE IM)
// Ghost project. No web signal for a BTR of this name in North Acton.
// Telford's verified North Acton deliveries are UNCLE Acton (238 units,
// Realstar-operated) and One West Point (701 units, BTS sales). Neither
// is called "Imperial Square". Searches return nothing on Telford Living,
// CBRE Residential, or Telford Homes portfolios. Suspected 2026-04 sweep
// hallucination, possibly confused with Clayworks Apartments (Imperial
// College staff accommodation).
```

**Blast radius:**
- `north-acton.ts` lines 7-16 (project def)
- Remove from `northActon.projects` array
- Check area-level prose for "Imperial Square" references — rewrite

**Grade impact:** None. North Acton retains UNCLE Acton, Enclave: Acton, One West Point as verified BTR/mixed projects. T1.4 (active professional rental market) remains clean.

### `one-west-point` (north-acton.ts) — **WRONG-ATTRIBUTION CATEGORY B**

**Current state:**
- `building_type: "BTR"`, `operator: "Telford"`, `build_phase: "in_delivery"`

**Correct state:**
- One West Point is a **54-storey 701-apartment BTS scheme** — sold via Savills / Benhams to individual buyers for individual occupation and/or private letting. Completion 2025-2028 across four buildings.
- Telford Homes developed it; no single rental operator retains it.

**Proposed change:**
- `building_type: "BTR"` → `"BTS"` (or `"Mixed"`)
- `operator: "Telford"` → `"Various agents"` OR `"Individual landlords"`
- `tenure: ["rent"]` → `["rent", "buy"]` (both are valid — some buy, some buy-to-let)
- `realism: "unknown"` → `"unlikely"` per secondary-market default
- Apply secondary-market qualification defaults:
  ```ts
  qualification: {
    agreement_type: "ast",
    referencing_provider: "unclear",
    min_tenancy_months: 12,
    income_multiple: 30,  // standard
    open_banking_accepted: "unclear",
    upfront_rent_policy: "one-month-ast-cap",
    accepts_professional_guarantor: "unclear",
    accepts_individual_overseas_guarantor: "unclear",
    credit_check: "standard",
    international_tenant_policy: "accepted-case-by-case",
    visa_expiry_handling: "unclear",
    qualification_flexibility_signal: "unclear",
    realism_pathways: [],
    grad_visa_realism: "unlikely",
    research_status: "partial",
    notes: "Secondary-market individual-landlord rental from Telford Homes' One West Point BTS scheme (701 apartments across four buildings, 54-storey tallest building outside Canary Wharf). Qualification varies per listing and agent; no single referencing stack. Some agents accept upfront-rent offers — but post-RRA the AST cap limits this to 1 month from 1 May 2026.",
    sources: [
      { url: "https://1newhomes.com/one-west-point-london", label: "One West Point BTS listing", type: "press", accessed_date: "2026-04-16" },
      { url: "https://search.savills.com/property-detail/gbeersels230040", label: "Savills — One West Point sales", type: "press", accessed_date: "2026-04-16" },
    ],
  }
  ```
- Update preview: remove "In-delivery BTR scheme" framing; add BTS + individual-landlord framing.

**Blast radius:** `north-acton.ts` lines 34-43.

### `uncle-acton` (north-acton.ts) — Developer field fix

- `developer: "Telford Homes (CBRE subsidiary)"` → `"Telford Homes (CBRE Investment Management)"`

**Rationale:** Telford Homes was acquired by CBRE Group in 2019 and is now under CBRE Investment Management's residential platform. "CBRE subsidiary" isn't precise — the ownership is via CBRE IM's resi arm. Minor accuracy fix.

Blast radius: `north-acton.ts` line 47.

## No operator-level qualification block for Telford

Telford is a developer, not an operator. Qualification policy for projects Telford built varies by the actual operator:
- UNCLE Acton — policy is Realstar's (see `uncle-realstar.md`)
- One West Point — policy is individual-landlord-variable
- Imperial Square — ghost; policy moot

## Other Telford-related references in dataset

### `mile-end.ts` — Bow Garden Square

- `operator: "Various agents"` ✓ — already correctly classified as individual-landlord BTS
- No change needed

### `hackney-wick.ts` — The Switch

- `operator: "Telford Homes"` currently — inconsistent with other BTS schemes labelled "Various agents"
- **Proposed:** `operator: "Telford Homes"` → `"Various agents"` and update notes to reflect individual-landlord letting model
- `building_type: "Mixed"` ✓
- `tenure: ["rent", "buy"]` ✓

Blast radius: `hackney-wick.ts` lines 125-133.

### `nine-elms.ts` — Mylo Nine Elms

- `developer: "Telford Homes"`, `operator: "Greystar"` ✓ — correctly split. No change.

### `poplar-blackwall.ts`

- Area-level T1 reasoning mentions "Telford Homes multiple BTS projects" — correctly labelled as BTS. No change needed.

## Summary of Telford-batch structural changes

| Action | Project | Category | Confidence |
|---|---|---|---|
| Delete (ghost) | `imperial-square` | Cat A | High |
| Correct BTR→BTS + operator | `one-west-point` | Cat B | High |
| Developer field fix | `uncle-acton` | Accuracy | High |
| Operator rewording | `the-switch-hackney-wick` | Alignment | Medium |

## Sources summary

See `operators/telford.md` for full source table.
