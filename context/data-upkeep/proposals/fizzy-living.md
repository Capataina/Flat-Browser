# Proposals — Fizzy Living (Greystar subsidiary) qualification fields

**Operator:** Fizzy Living (Greystar subsidiary since Dec 2021)
**Research date:** 2026-04-16
**Confidence:** High for Homeppl + 2.66× + 4× guarantor + 12-month fixed (all verbatim from fizzyliving.com/faq); Medium for Guarantid acceptance (not named); Lewisham £1,280 floor needs price re-verification.

---

## Operator-level defaults (apply to every Fizzy project)

Fizzy uses the **identical qualification stack** as Greystar-direct — same Homeppl referencing, same 2.66× affordability test, same 4× annual guarantor income. Differences are price floor (lower) and brand positioning (more explicit renter-friendly / pet-friendly stance).

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `"ast"` | Fizzy FAQ: "fixed term of 12 months" |
| `referencing_provider` | `"homeppl"` | Fizzy FAQ verbatim: "Homeppl conducts the assessment for eligibility to enter into tenancy agreements" |
| `min_tenancy_months` | `12` | Fizzy FAQ: fixed 12-month term; location pages show 6/9/12 lease-term filter options |
| `income_multiple` | `32` (from 2.66× annual ≈ 31.92× monthly) | Fizzy FAQ verbatim |
| `open_banking_accepted` | `"yes"` | Homeppl (Fizzy FAQ does not mention Open Banking directly but Homeppl's primary mechanism is Open Banking) |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + RRA 1-May-2026 cap for new APTs. Pre-RRA Fizzy FAQ offered "negotiable" advance rent + "Students must pay 12 months rent in advance" — post-RRA new APTs capped at 1 month |
| `accepts_professional_guarantor` | `"unclear"` | Fizzy FAQ accepts "guarantors" but does NOT name Guarantid or Housing Hand. Homeppl-native Guarantid is structurally compatible; direct enquiry required |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Fizzy FAQ doesn't address; Homeppl supports structurally via Co-Signer |
| `credit_check` | `"lenient"` | Homeppl-backed |
| `international_tenant_policy` | `"accepted-case-by-case"` | Fizzy FAQ: "Non-EU tenants must provide original ID documentation proving legal right to live in UK"; virtual viewings via Skype/FaceTime for overseas applicants |
| `visa_expiry_handling` | `"unclear"` | Not addressed in FAQ |
| `qualification_flexibility_signal` | `"flexible"` | 93% Excellent/Very Good HomeViews; "Rating of Excellence" award across all Fizzy developments; brand stance explicitly renter-friendly; Fizzy FAQ explicitly offers negotiable advance rent |
| `research_status` | `"complete"` | |

### Derived

- `realism_pathways: ["with-savings"]`
- `grad_visa_realism: "achievable-with-guarantor"`

### Narrative (notes field — universal Fizzy applicant)

> Fizzy Living is a Greystar subsidiary running the same Homeppl referencing stack as Greystar-direct buildings (verbatim verified on fizzyliving.com/faq). The 2.66× annual rent affordability test plus Homeppl's savings-substitution route (36× monthly) is the cleanest pathway for Open Banking-demonstrable applicants. Fizzy's distinctive advantage is the materially lower rent floor than Greystar-direct Pearl Yard / Bloom — Fizzy Lewisham was the cheapest 1-bed BTR in London at £1,280 per the 2026-04-16 shortlist, meaning the savings pathway requires far less capital. Guarantid acceptance remains the load-bearing unverified question across the portfolio; a single call to 020 8154 3110 (central Fizzy leasing line) can confirm for all 5 dataset buildings.

---

## Per-project proposals

### Fizzy Lewisham (`fizzy-lewisham`, lewisham-gateway)

| Field | Value | Source |
|---|---|---|
| Standard operator-level defaults apply | (see table above) | |
| `qualification_flexibility_signal` | `"flexible"` | HomeViews top-20 UK development |
| `grad_visa_realism` | `"achievable-with-guarantor"` (preserve if prior) | Existing "achievable-with-guarantor" retained |
| **Pricing** | Shortlist data: 1-bed from £1,280. Site filter range £1,500-£2,500+ | https://fizzyliving.com/locations/lewisham — verify current floor |
| **Promo** | Up to 4 weeks free rent on selected apartments (active 2026-04-16) | Same source |
| `price_transparency` | `"listed"` (range + filter, not per-unit) | |
| `cost_tier` | `"affordable"` if £1,280 floor holds; `"mid-range"` otherwise | |
| `prices.notes` | "Lewisham 1-bed floor was £1,280 per 2026-04-16 shortlist; current site filter shows £1,500+ range — verify via central leasing 020 8154 3110. Promo: 4 weeks free rent on selected apartments." | |

### Fizzy East 16 (`fizzy-east-16`, canning-town) — Brunel Street Works

| Field | Value | Source |
|---|---|---|
| Standard defaults apply | | |
| **Pricing** | Not listed on-site — "contact community for pricing and availability" | https://www.greystar.com/fizzy-east-16-london-uk/p_18865 |
| `price_transparency` | `"enquire"` | |
| `cost_tier` | `"mid-range"` (existing dataset note: studios ~£1,500, 1-beds ~£1,800 — needs re-verification) | |
| `prices.notes` | "Current listing requires direct enquiry; prior dataset pricing ~£1,500 studio / £1,800 1-bed — verify via 020 8154 3110 or londonreception@greystar.com." | |

### Fizzy Stepney Green (`fizzy-stepney-green`, mile-end)

| Field | Value | Source |
|---|---|---|
| Standard defaults apply | | |
| `qualification_flexibility_signal` | `"flexible"` | HomeViews top-20 UK |
| **Pricing** | Filter range £1,500-£2,500+ PCM; dataset had 1-bed from ~£1,984 | https://fizzyliving.com/locations/stepney-green |
| `price_transparency` | `"listed"` (range) | |
| `cost_tier` | `"mid-range"` | |

### Fizzy Canning Town (`fizzy-canning-town`, canning-town)

| Field | Value | Source |
|---|---|---|
| Standard defaults apply | | |
| **Pricing** | Not listed — contact community | https://www.greystar.com/fizzy-canning-town-london-uk/p_18858 |
| `price_transparency` | `"enquire"` | |
| `cost_tier` | `"mid-range"` (existing dataset inference) | |
| `prices.notes` | "Current pricing requires direct enquiry via 020 8154 3110. ~140-home building. Trustpilot 2.3/5 signals building-level ops issues (small sample), not a group-wide qualification-policy negative." | |

### Fizzy Poplar (`fizzy-poplar`, poplar-blackwall)

| Field | Value | Source |
|---|---|---|
| Standard defaults apply | | |
| **Pricing** | Studio-1bed £1,500-£1,800; 1-2bed £1,800-£2,100; 2-3bed £2,100-£2,500; 3+ £2,500+ | https://fizzyliving.com/locations/poplar (site filter ranges) |
| `price_transparency` | `"listed"` | |
| `cost_tier` | `"affordable"` (1-bed floor £1,800, but some 1-bed overlap with £1,500-£1,800 band — classify as `"affordable"` if any 1-bed < £1,600) — likely `"mid-range"` if 1-bed floor is £1,800 | |
| `prices.notes` | "Prices verified 2026-04-16 from site filter ranges; specific per-unit pricing requires enquiry. Historical dataset had 1-beds from £2,155 — current filter suggests £1,800 start." | |

---

## Ghost / missing-project flag

### Fizzy Walthamstow — MISSING from dataset (not a ghost)

**Category:** Missing project candidate. Requires user confirmation.

**Finding:** The task description's "Greystar Walthamstow" (project #7 under Greystar-direct) does not exist in the dataset. The most likely referent is **Fizzy Walthamstow** — a real, operational Greystar/Fizzy building that is not represented in `src/areas/data/walthamstow.ts`.

**Evidence:**
- https://fizzyliving.com/locations/walthamstow/ — operator page live
- https://www.greystar.com/fizzy-walthamstow-london-uk/p_18867 — Greystar aggregated page
- Address: 5D Blackhorse Lane, Walthamstow, E17 6DS
- Near Blackhorse Road (Overground + Victoria line)
- 20 min to Oxford Circus, 30 min to Bank
- Same Homeppl/Greystar qualification stack as other Fizzy buildings
- Walthamstow IS a dataset area (walthamstow.ts exists with 7 other projects)

**Recommended proposal (requires user confirmation):**

```
ADD new project to walthamstow.ts:

id: "fizzy-walthamstow"
area_id: "walthamstow"
name: "Fizzy Walthamstow"
developer: "Fizzy Living"
operator: "Fizzy Living (Greystar)"
building_type: "BTR"
build_phase: "complete" (established London Fizzy property)
tenure: ["rent"]
realism: "achievable-with-guarantor"
preview: "Fizzy Living / Greystar BTR near Blackhorse Road (Victoria + Overground). One, two, and three-bedroom apartments. Standard Fizzy stack: Homeppl referencing, 2.66× annual rent affordability, 4× annual rent guarantor income. Lower price floor than trophy BTR addresses; sleeper grad-visa target."
external_links:
  - https://fizzyliving.com/locations/walthamstow/
  - https://www.greystar.com/fizzy-walthamstow-london-uk/p_18867
```

**Note to user:** If the task-brief entry "Greystar Walthamstow" was actually supposed to be Greystar-branded (not Fizzy-branded), no such building exists — Greystar-direct has no Walthamstow BTR. Fizzy Walthamstow is the only Greystar-family building in E17. Confirm before adding.

### No other ghosts in Fizzy portfolio

All 5 dataset Fizzy buildings verified operational. No delete recommendations.

---

## Blast-radius references (all clean)

- `src/areas/data/lewisham-gateway.ts` — Fizzy Lewisham ✅
- `src/areas/data/canning-town.ts` — Fizzy Canning Town + Fizzy East 16 ✅
- `src/areas/data/mile-end.ts` — Fizzy Stepney Green ✅
- `src/areas/data/poplar-blackwall.ts` — Fizzy Poplar ✅
- `src/areas/data/brent-cross-town.ts` — commented cross-reference listing all 6 London-area Fizzy buildings (Lewisham, Stepney Green, Poplar, Walthamstow, Hayes, Epsom) — this comment flags the Walthamstow gap already

No cleanup required beyond the proposed Fizzy Walthamstow addition.
