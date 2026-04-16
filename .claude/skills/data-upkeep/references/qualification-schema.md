# Qualification Schema — field reference

The target shape for every field this skill populates. Source of truth is `src/areas/types.ts` — if this document ever disagrees with types.ts, types.ts wins.

---

## The 12 structural fields

### `agreement_type`

Whether this is an Assured Shorthold Tenancy (subject to RRA 2025) or a licence to occupy (exempt from RRA).

| Value | When | How to verify |
|---|---|---|
| `"ast"` | Standard BTR, long-term residential rental | Operator documents use "tenancy agreement" / "assured shorthold tenancy" language; rent paid monthly; typical 6-12 month term |
| `"licence"` | Co-living, serviced apartments, apart-hotels | Operator documents use "licence to occupy" / "membership" / "licence agreement"; sometimes hospitality-flavoured; sometimes nightly-bookable |
| `"unclear"` | Researched but operator doesn't state which | Site mentions neither term explicitly; ambiguous enough that direct enquiry is needed |
| `"unknown"` | Not researched yet | Default |

**Inference shortcuts when explicit statement is absent:**
- `living_model: "apart-hotel"` or `"managed-studio"` → almost certainly `licence`
- `living_model: "co-living"` → usually `licence` but check explicitly
- `living_model: "standard-btr"` → usually `ast` but some BTR operators use licences for short stays
- If operator accepts nightly bookings → almost certainly `licence` at least for short stays

### `referencing_provider`

Who runs the affordability / credit / ID checks on prospective tenants.

| Value | Canonical operator examples |
|---|---|
| `"homeppl"` | Quintain, Get Living, Fizzy (Greystar), Greystar direct, Morro |
| `"goodlord"` | Grainger (historically — check current), Way of Life |
| `"canopy"` | Moda Living |
| `"in-house"` | Many co-living operators (Folk, Node, Vonder), some BTR operators |
| `"none"` | Apart-hotels, Quarters-style managed studios, Blueground's no-credit-check tier |
| `"unclear"` | Researched, provider not named publicly |
| `"unknown"` | Not researched |

**How to find:**
1. Operator FAQ or "how it works" page — often names the provider explicitly
2. Operator careers page — job listings sometimes mention the tool stack
3. Google "[operator name] Homeppl" / "[operator] Goodlord" — case studies
4. Press coverage of the operator's tech stack

### `min_tenancy_months`

Shortest commitment the operator will accept. Integer or `null`.

| Value | Meaning |
|---|---|
| `1` | Typical for serviced apartments, apart-hotels |
| `3` | Most co-living, Quintain, Greystar Pearl Yard |
| `6` | UNCLE, some BTR |
| `12` | Standard BTR — Grainger, Apo, L&G Living |
| `null` | Not stated on operator's site |

Note: post-RRA (1 May 2026) ASTs become automatically periodic after the minimum term. The `min_tenancy_months` is the commitment window, not the effective lease length.

### `income_multiple`

Annual income required as a multiple of monthly rent. Number or `null`.

| Value | Meaning |
|---|---|
| `30` | Standard — 30× monthly rent annually (e.g. £2,000/mo rent → £60,000/yr income) |
| `32` | Homeppl default for many operators |
| `28` | UNCLE's published multiple |
| `27` | Morro's published multiple |
| `2.5` | Some operators state this as "2.5× annual rent" — same thing, different framing |
| `null` | Not stated publicly |

**Inference shortcut:** if operator uses `referencing_provider: "homeppl"` and no multiple is published, default inference is 30.

### `open_banking_accepted`

Whether the operator accepts Open Banking income verification (reading bank transactions) instead of UK payslips.

| Value | When |
|---|---|
| `"yes"` | Operator explicitly mentions Open Banking, or uses Homeppl (Open Banking is Homeppl's primary mechanism) |
| `"no"` | Operator explicitly requires UK payslips / P60 / employer reference and offers no Open Banking alternative |
| `"unclear"` | Neither stated |
| `"unknown"` | Not researched |

### `upfront_rent_policy`

Whether multi-month upfront payment is a live qualification lever.

| Value | When |
|---|---|
| `"multi-month-available"` | Licence operator that explicitly accepts 3+ months upfront (Folk, Node, ARK, Blueground). Post-RRA this is only legal for licences. |
| `"one-month-ast-cap"` | AST operator — RRA caps advance rent at 1 month. Default for any `agreement_type: "ast"`. |
| `"rejected"` | Operator explicitly refuses upfront as a qualification substitute even when offered. Rare. |
| `"unclear"` | Licence operator where upfront acceptance isn't stated |
| `"unknown"` | Not researched |

**Inference shortcut:** `agreement_type: "ast"` → `"one-month-ast-cap"` is a safe default; only override if operator explicitly states otherwise.

### `accepts_professional_guarantor`

Whether the operator accepts corporate guarantor services (Guarantid, Housing Hand, etc.). Does NOT discriminate between specific services.

| Value | When |
|---|---|
| `"yes"` | Operator's FAQ explicitly names a guarantor service, OR uses verbatim language like "we accept guarantors" / "corporate guarantor service accepted" |
| `"no"` | Operator explicitly requires a UK-resident individual guarantor only |
| `"unclear"` | Operator mentions "guarantor" without specifying whether corporate services qualify |
| `"unknown"` | Not researched |

**Canonical examples:**
- Grainger has verbatim "we do accept guarantors" — `"yes"` with good confidence
- Quintain uses Homeppl — Guarantid is Homeppl's native service so the combination is strong signal but Quintain's site doesn't name it explicitly — `"unclear"` (verify via direct enquiry)
- Folio requires UK homeowner guarantor only — `"no"`

### `accepts_individual_overseas_guarantor`

Whether the operator accepts a non-UK-resident individual as guarantor / co-signer.

| Value | When |
|---|---|
| `"yes"` | Operator mentions Homeppl Co-Signer route, or explicitly "overseas guarantors accepted" |
| `"no"` | Operator explicitly requires UK-resident guarantor |
| `"unclear"` | Topic not addressed |
| `"unknown"` | Not researched |

This is the one guarantor sub-state worth capturing separately because Homeppl's Co-Signer route is a documented pathway for Caner's Turkish parents.

### `credit_check`

How harshly the operator's credit check screens tenants with thin/international credit files.

| Value | When |
|---|---|
| `"strict"` | Explicit credit-score floor (Moda's Experian 561+), or clear "adverse credit rejected" language |
| `"standard"` | Standard UK credit-reference check, thin files may need extra evidence |
| `"lenient"` | Explicit acceptance of applicants without UK credit history (Quintain, Blueground, Homeppl-using operators generally) |
| `"unclear"` | Credit check happens but strictness not stated |
| `"unknown"` | Not researched |

### `international_tenant_policy`

The operator's stated posture toward non-UK-resident / visa-holding applicants.

| Value | When |
|---|---|
| `"welcomed"` | Explicit verbatim language — "we welcome international residents" / "international tenants welcome" |
| `"accepted-case-by-case"` | Operator accepts but conditions vary — often coded as "please contact us to discuss" |
| `"discouraged"` | Documentation heavily UK-centric with no stated alternative pathway |
| `"rejected"` | Operator explicitly requires UK residency / UK employment |
| `"unclear"` | Policy not stated |
| `"unknown"` | Not researched |

### `visa_expiry_handling`

How the operator handles the visa-expiring-before-tenancy-end case (Caner's Graduate visa expires August 2027).

| Value | When |
|---|---|
| `"ignored"` | Operator doesn't care about visa expiry; tenancy proceeds at requested length |
| `"tenancy-shortened"` | Tenancy automatically truncated to visa expiry date |
| `"rejected"` | Application rejected if visa expires before minimum tenancy end |
| `"unclear"` | Topic not addressed |
| `"unknown"` | Not researched |

### `qualification_flexibility_signal`

Qualitative signal about whether the operator flexes on stated policy when applicants bring unusual circumstances.

| Value | When |
|---|---|
| `"flexible"` | Documented cases (HomeViews, Trustpilot, press) of operator accepting applicants outside standard policy — e.g. with upfront payment, clean prior tenancy, unusual documentation |
| `"standard"` | No positive or negative signal either way — assume the stated policy is the actual policy |
| `"rigid"` | Documented cases of operator holding the line on stated policy even when applicants bring alternative evidence (e.g. Moda's credit-score floor is known rigid) |
| `"unclear"` | Qualitative inference couldn't be determined |
| `"unknown"` | Not researched |

**How to gather:**
- HomeViews reviews often mention "they worked with me on..." — positive flex signal
- Trustpilot reviews with "they wouldn't budge" — negative flex signal
- Press about operator policy changes
- Reddit r/HousingUK / r/UKLandlords — edge-case discussions

Don't mistake `credit_check: "lenient"` for `qualification_flexibility_signal: "flexible"`. The first is about scoring strictness, the second is about willingness to listen to non-standard cases.

---

## Derived fields (computed, not researched)

### `realism_pathways`

Array of pathways that work **for Caner** given the researched fields. See `realism-pathway-derivation.md` for the full derivation rules.

### `grad_visa_realism`

Computed via `deriveRealism(pathways, preserved)` from `src/areas/types.ts`. The function:

```
1. If preserved is "blocked" / "unlikely" / "unclear" → return preserved
2. If pathways includes "standard-passable" → "achievable"
3. If pathways includes "licence-exempt-light-ref" → "licence-exempt"
4. If pathways includes any of (with-professional-guarantor / with-savings /
   with-co-signer-overseas / with-upfront-licence) → "achievable-with-guarantor"
5. Empty array → "unknown"
```

Preserve `"blocked"` and `"unlikely"` verdicts from prior research. They're authored judgements, not pathway derivations.

### `research_status`

| Value | When |
|---|---|
| `"complete"` | Every qualification field has a definitive value (including `"unclear"` where appropriate). Every non-inferred value cites a URL. |
| `"partial"` | Some fields populated from research, others still at `"unknown"` — rare in skill output; usually `"complete"` with `"unclear"` where needed |
| `"unresearched"` | Default; should not appear after a skill run |

---

## Evidence fields

### `sources`

Array of `SourceLink` objects — one per URL the research touched. Schema:

```ts
{
  url: string;
  label: string;          // short human-readable description
  type: SourceType;       // "operator" | "developer" | "press" | "homeviews" | ...
  accessed_date: string;  // ISO 8601 date the agent verified the URL
}
```

Minimum: every non-inferred field value should be traceable to one of the entries in `sources`. Pricing verified from the operator's rentals page → one source entry for that page covers all the pricing fields.

### `notes`

2-3 sentence narrative summary suitable for human reading. Should mention:
- The dominant pathway (if any) and why
- Any known flex lever or blocker
- Whether direct enquiry is needed

Example for Quintain:
> Quintain uses Homeppl for referencing, which accepts Open Banking and is friendly to thin-credit international applicants. Guarantid acceptance at Quintain specifically is unverified — direct enquiry is the deciding question for the non-savings pathway. Documented rent escalation at renewal (25-33%) makes multi-year budgeting uncertain.

---

## Pricing (side-effect fields)

### `studio` / `one_bed` / `two_bed`

```ts
{
  min: number;          // monthly rent in GBP
  max?: number;         // if a range exists
  currency: "GBP";
  per: "month";
}
```

Source from the operator's rentals / availability page. If prices are listed as "from £1,829" with no upper bound, set `min: 1829` and omit `max`. If `max === min`, omit `max`.

### `bills_included`

`boolean`. Usually clear from the page — "bills included" / "utilities not included" language.

### `cost_tier`

| Tier | Monthly rent (studio or 1-bed, GBP) |
|---|---|
| `"budget"` | < £1,200 |
| `"affordable"` | £1,200 – £1,600 |
| `"mid-range"` | £1,600 – £2,000 |
| `"premium"` | £2,000 – £2,800 |
| `"luxury"` | £2,800+ |

Derive from the cheapest unit type the project offers. If project offers studios at £1,500 and 1-beds at £1,900, cost_tier is `"affordable"` (the floor).

### `price_transparency`

| Value | When |
|---|---|
| `"listed"` | Operator publicly lists rental prices with specific numbers |
| `"enquire"` | Operator requires enquiry form / phone call to get pricing |
| `"unknown"` | Not checked (should not happen after skill run; set to `"listed"` or `"enquire"` based on what the site showed) |

### `prices.notes`

Short line. "Prices verified from operator website on YYYY-MM-DD." Add brief context if relevant (promotional pricing, tier-based).

---

## What NOT to touch in v1

Explicit do-not-modify list:

- `building_quality.*` — sound insulation, thermal performance, kitchen quality, heating, layout notes, EPC rating (v2)
- `amenities.*` — pool, gym, concierge, sky lounge, co-working, dining room, cinema, parking, bike storage, pet policy (v2)
- `architecture.*` — architects, awards, is_signature, style notes (v2)
- `long_form.*` — full, living_experience, notable_features (v2)
- `resident_signal.*` — HomeViews score, common complaints/praise (v2)
- `evaluation.*` — project grade, grade reasoning, T2.6/T4.1/T4.4 criterion scores (v3 for recalibration)
- All area-level fields — safety, demographics, connectivity, regeneration, amenities, etc. (v4)

If research surfaces something in one of these fields that seems obviously wrong (e.g. a project's `amenities.gym: true` when the research finds no gym), **note it in `notes` and flag in the run report** — do not modify.
