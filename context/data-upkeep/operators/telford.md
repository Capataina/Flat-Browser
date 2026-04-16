# Telford Homes — Operator Research (2026-04-16)

## Summary verdict

**Telford Homes is primarily a developer, not a BTR operator.** It's a major London housebuilder focused on BTR and BTS delivery for joint-venture partners rather than retaining and operating its own rental stock under the "Telford" brand. Telford Homes was acquired by CBRE Group in 2019; it now operates as part of **CBRE Investment Management's** residential platform (not a CBRE subsidiary).

Where the dataset lists a Telford project as a BTR with Telford as the operator, the attribution is almost certainly wrong. The three dataset Telford projects break down as follows:

### Dataset projects & correct attribution

| Project | Dataset operator | Correct picture | Recommended action |
|---|---|---|---|
| **UNCLE Acton** (North Acton) | `Realstar (UNCLE brand)` ✓ | Telford built it; Realstar operates; part of Perfume Factory scheme | Leave operator as-is; fix `developer` from "Telford Homes (CBRE subsidiary)" → "Telford Homes (CBRE Investment Management)" |
| **Imperial Square** (North Acton) | `Telford / CBRE IM` | **Ghost or obscure** — no web signal for an "Imperial Square BTR" at North Acton operated by Telford/CBRE IM. Possible confusion with Clayworks Apartments (Imperial College, North Acton) or with another scheme. Full BTR branding not verifiable. | Flag as **Category A ghost-project candidate** pending user confirmation; may need deletion |
| **One West Point** (North Acton) | `Telford` | **BTS, not BTR.** 701 apartments, 54-storey tower, sold via Savills / Benhams as BTS new-homes. "In delivery" — completion by 2028. Individual sales, no operator-managed rental. | **Category B wrong-attribution** — change `building_type: "BTR"` → `"BTS"` (or `"Mixed"`), `operator: "Telford"` → `"Individual landlords"` or `"Various agents"` |
| **The Switch** (Hackney Wick) | `Telford Homes` (building_type: "Mixed", tenure: ["rent", "buy"]) | BTS, consistent with dataset attribution; rentals via individual landlords | Adjust operator: `"Telford Homes"` → `"Various agents"` given it's individual-landlord rental |
| **Bow Garden Square** (Mile End) | `Various agents` ✓ | BTS, rentals via individual landlords | No change needed — dataset got this one right |

(The Switch and Bow Garden Square aren't in this batch's strict 3 Telford projects, but are worth flagging for consistency.)

## Imperial Square — ghost-project deep dive

**Dataset state:**
```ts
// src/areas/data/north-acton.ts line 7-16
const imperialSquare = buildProject({
  id: "imperial-square", area_id: "north-acton",
  name: "Imperial Square",
  developer: "Telford Homes", operator: "Telford / CBRE IM",
  building_type: "BTR", build_phase: "complete",
  ...
  preview: "Operational BTR tower in the North Acton cluster. Telford Homes / CBRE IM.",
});
```

**Search results:**
- No "Imperial Square North Acton BTR" on Telford Living's website
- No CBRE Residential BTR page for "Imperial Square"
- Buildington.co.uk / newbuildhomes.org return nothing matching
- The only "Imperial" plus "Acton" hit is Clayworks Apartments (Imperial College staff accommodation), which is neither BTR nor Telford
- One West Point and UNCLE Acton are the two verified North Acton Telford BTR schemes — neither is called Imperial Square

**Verdict:** High probability **Category A ghost project**. Likely a 2026-04 sweep hallucination. Worth a final user-confirmation check before deletion.

**Proposed action:**
- Flag for user confirmation
- If confirmed ghost: delete, tombstone with:
```typescript
// REMOVED 2026-04-16: "Imperial Square" (Telford / CBRE IM)
// No web signal for a BTR of this name in North Acton. Telford's verified
// North Acton BTR deliveries are UNCLE Acton (Realstar-operated) and One
// West Point (BTS). "Imperial Square" does not appear on Telford Living,
// CBRE Residential, or Telford Homes portfolios. Origin suspected to be
// 2026-04 sweep hallucination, possibly confusing with Clayworks Apartments
// (Imperial College staff accommodation, not BTR).
```
- If user preserves it with private knowledge (e.g. "this exists, I've seen it"): set `realism: "unclear"` with `research_status: "partial"` and note explaining the absence of public sources.

## One West Point — wrong-attribution

**Dataset state:**
- `operator: "Telford"`, `building_type: "BTR"`, `build_phase: "in_delivery"`, `realism: "unknown"`

**Correct picture:**
- One West Point is a **54-storey, 701-apartment BTS scheme** by Telford Homes — sold via Savills and Benhams to individual buyers. It's described as "the tallest residential building outside Canary Wharf." Completion targeted between 2025-2028 across four buildings.
- Telford does not retain it as rental operator — individual buyers either live there or list on the private market
- The "tenure" could still include "rent" (individual landlords letting their units), but building_type should be BTS not BTR

**Proposed change:**
- `building_type: "BTR"` → `"BTS"`
- `operator: "Telford"` → `"Various agents"` or `"Individual landlords"`
- `realism: "unknown"` → `"unlikely"` per secondary-market default (individual landlord rental, variable referencing)
- Populate qualification block with secondary-market defaults per the operator-research-playbook:
  - `agreement_type: "ast"`
  - `referencing_provider: "unclear"`
  - `upfront_rent_policy: "one-month-ast-cap"`
  - `accepts_professional_guarantor: "unclear"`
  - `international_tenant_policy: "accepted-case-by-case"`
  - `grad_visa_realism: "unlikely"`
  - `research_status: "partial"`
  - `notes: "Secondary-market individual-landlord rental from a Telford Homes BTS scheme. Variable per listing/agent, no single referencing stack. Some agents will accept upfront-rent offers (per-listing negotiation), but post-RRA the AST cap limits this to 1 month."`

## UNCLE Acton — developer-field fix

**Dataset state:**
- `developer: "Telford Homes (CBRE subsidiary)"` — inaccurate parenthetical

**Correct picture:**
- Telford Homes was acquired by CBRE Group in 2019
- Telford Homes is now part of **CBRE Investment Management's** residential platform (not a "subsidiary" in the corporate-structure sense — it's under CBRE IM's BTR/residential arm)
- UNCLE Acton was forward-funded by Realstar + Telford Homes in a £91m deal (2022)

**Proposed change:**
- `developer: "Telford Homes (CBRE subsidiary)"` → `"Telford Homes (CBRE Investment Management)"`

## No operator-level qualification block for Telford

Because Telford is a developer not an operator, no single qualification policy applies. The relevant qualification policy is the **operator's** (Realstar/UNCLE for UNCLE Acton — see `uncle-realstar.md`), not Telford's. For projects attributed to Telford as operator but actually BTS (One West Point, The Switch, Bow Garden Square), the qualification story is "individual-landlord, variable" per the secondary-market playbook default.

## Cross-references to review

References mentioning Telford as BTR operator that may need updating:
- `src/areas/data/hackney-wick.ts` line 52 — "Telford Homes BTS" — labeled correctly in the long-form but check project attribution at line 126 (`operator: "Telford Homes"` — change to "Various agents" for the individual-landlord letting tier)
- `src/areas/data/poplar-blackwall.ts` line 179, 181, 206 — area-level mentions of "Telford Homes multiple BTS projects" — these are correctly labelled as BTS (not BTR) and don't need operator-attribution changes, but verify no project has `Telford` as operator
- `src/areas/data/nine-elms.ts` line 142, 146 — `Mylo Nine Elms` has `developer: "Telford Homes", operator: "Greystar"` ✓ (correct; Telford built it, Greystar operates). No change.

## Sources

| URL | Label | Type | Accessed |
|---|---|---|---|
| https://www.telfordhomes.london/ | Telford Homes corporate site | developer | 2026-04-16 |
| https://www.telfordliving.com/ | Telford Living (Trammell Crow UK residential arm — distinct company) | operator | 2026-04-16 |
| https://www.telfordliving.com/newsroom/major-milestone-on-iconic-perfume-factory-site-reached | Telford Living — Perfume Factory / UNCLE Acton | press | 2026-04-16 |
| https://btrnews.co.uk/telford-homes-tops-out-at-uncle-acton-btr/ | BTR News — UNCLE Acton topping out | press | 2026-04-16 |
| https://www.telfordhomes-ir.london/media/2853/telford-homes-and-realstar-finalise-91m-forward-funding-development-for-a-new-uncle-build-to-rent-project-in-north-acton.pdf | Telford + Realstar £91m forward-funding | press | 2026-04-16 |
| https://capitalwestlondon.co.uk/north-acton-rental-development-receives-91m-in-forward-funding/ | Capital West London — funding coverage | press | 2026-04-16 |
| https://1newhomes.com/one-west-point-london | One West Point — BTS new-homes listing | press | 2026-04-16 |
| https://search.savills.com/property-detail/gbeersels230040 | Savills — One West Point BTS sales | press | 2026-04-16 |
| https://www.agofc.com/one-west-point-inside-the-tallest-residential-building-outside-canary-wharf | Accouter — One West Point | press | 2026-04-16 |
| https://www.cbreresidential.com/uk-resi/new-developments/rent/uncle-acton | CBRE Residential — UNCLE Acton | press | 2026-04-16 |
