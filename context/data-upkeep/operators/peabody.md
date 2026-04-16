# Peabody + The Trampery — research notes

**Date of research:** 2026-04-16
**Agent batch:** apart-hotels, serviced apartments, managed studios
**Research scope:** Peabody housing association's BTR / market-rent arm + The Trampery community / workspace integration at Fish Island Village.

---

## Operator identity and status

**Peabody Trust** is one of the UK's oldest housing associations, founded 1862. Active operator. Primarily delivers:
- Social rent
- Affordable rent
- Intermediate Market Rent (IMR)
- Shared ownership
- Some private market rent (BTR-adjacent arm — smaller part of portfolio)

**The Trampery** is a separate social enterprise that provides workspace, events, and community infrastructure. At Fish Island Village it operates the co-working / maker space component — not the residential.

Peabody's primary identity is housing association, not commercial BTR. The dataset's Peabody projects straddle Peabody-as-HA-with-market-rent and Peabody-as-BTR-operator distinctions.

## Current dataset projects relevant to this batch

| Project ID | Area | Operator attribution | Type |
|---|---|---|---|
| `neptune-wharf` | hackney-wick | "Peabody" | BTR, 501 homes, mixed tenure |
| `fish-island-village` | hackney-wick | "Peabody / The Trampery" | Mixed, 588 homes, Haworth Tompkins |

Additional Peabody-adjacent projects (not in this batch's explicit scope):
- `peabody-bohemia-place` (hackney-central) — market-rent around Town Hall Square regen
- `southmere-thamesmead` (woolwich) — Peabody + Lovell, market-rent component
- `one-clapham-junction` (clapham-junction) — Mount Anvil / Peabody, mostly sale + shared ownership
- `hale-works` (tottenham-hale) — Catalyst Housing (Peabody subsidiary), individual landlords

## Structural qualification policy (Peabody BTR / market-rent)

Peabody is **opaque** — qualification documentation is thin, especially for the private market rent arm. Known facts from published sources:

| Field | Value | Evidence |
|---|---|---|
| `agreement_type` | `"ast"` for private market rent; `"other"` (IMR-specific tenancy) for intermediate market | Peabody IMR Fact Sheet explicitly differentiates |
| `referencing_provider` | `"in-house"` (likely) | Peabody runs its own lettings and does not publicly name a third-party referencer for BTR |
| `min_tenancy_months` | `12` (inferred for market rent) | Standard social/affordable housing tenancy convention |
| `income_multiple` | `"unclear"` | Not published for market rent; IMR has income caps (below market threshold) |
| `open_banking_accepted` | `"unclear"` | Not addressed |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + RRA |
| `accepts_professional_guarantor` | `"unclear"` — but the Peabody IMR Fact Sheet confirms "if a tenant does not pass the credit check, in certain circumstances a suitable guarantor may be considered" | Partial evidence — conditional acceptance, not named services |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Not addressed |
| `credit_check` | `"standard"` | Credit check is standard; failing it triggers guarantor consideration |
| `international_tenant_policy` | `"accepted-case-by-case"` — right-to-rent compliant, no explicit international welcome | Inferred from UK housing association norm |
| `visa_expiry_handling` | `"unclear"` | Not addressed |
| `qualification_flexibility_signal` | `"unclear"` — limited by opaque publication | Published guarantor-if-credit-fails language is a light positive signal but thin |

**Key finding:** Peabody's published IMR Fact Sheet (peabody.org.uk/media/ylubmbec/imr-tenants-fact-sheet.pdf) confirms:
- Credit check is part of standard process
- A "suitable guarantor may be considered" if credit check fails
- No named guarantor services

This is a **partial flex signal** — narrower than Grainger's verbatim "we do accept guarantors or a higher proportion of rent in advance", but published. Functions weakly as a `with-professional-guarantor` signal — the problem is "suitable guarantor" could equally mean UK-resident individual only (no corporate / overseas acceptance explicit).

## Pricing

Peabody market-rent BTR pricing is not consistently published across properties. Expected range for Hackney Wick / Fish Island Village: £1,400-1,900/mo for 1-bed (mid-range for Z2/3), lower for affordable IMR tier. Not verifiable without per-building enquiry.

## Realism derivation

For Neptune Wharf and Fish Island Village specifically:

| Pathway | Status |
|---|---|
| `standard-passable` | ❌ no evidence of credit=lenient, OB=yes, welcomed policy |
| `with-professional-guarantor` | ❌ `"unclear"` — "suitable guarantor" language is weak, not specific to corporate services |
| `with-savings` | ❌ Peabody doesn't use Homeppl |
| `with-co-signer-overseas` | ❌ `"unclear"` |
| `with-upfront-licence` | ❌ AST |
| `licence-exempt-light-ref` | ❌ AST |

**No pathway clears strictly.** Current dataset has both projects at `realism: "unknown"` — **preserve as explicit authored state**. The rationale is sound: Peabody is too opaque for Caner to plan around without direct enquiry, and the premium / mixed-tenure pricing structure means the realistic path would route through the affordable / IMR tier where income caps may actively exclude him.

## The Trampery — separate analysis

The Trampery operates co-working and maker space at Fish Island Village. It is NOT a residential operator. Its 63 "studios" at Fish Island refer to workspace/co-working desks, not residential accommodation.

**Ghost-project check implication:** The dataset's `fish-island-village` correctly attributes operator as "Peabody / The Trampery" to reflect the integrated community/workspace model, but a narrower attribution of `operator: "Peabody"` might be more accurate for the residential component. The Trampery is the amenity-layer operator, not the residential operator.

## Sources

- https://www.peabody.org.uk/media/ylubmbec/imr-tenants-fact-sheet.pdf — IMR Fact Sheet (guarantor + credit check language)
- https://hdawards.org/scheme/neptune-wharf-fish-island/ — Housing Design Awards entry
- https://www.haworthtompkins.com/work/neptune-wharf-at-fish-island-village — architect's own project page
- https://www.architectsjournal.co.uk/news/haworth-tompkins-final-phase-of-fish-island-village-approved — press coverage
- https://www.peabodynewhomes.co.uk/developments/wisteria-apartments/ — Peabody new homes portal
- https://www.peabodynewhomes.co.uk/find-a-home/one-clapham/ — One Clapham Junction listing
- https://www.trampery.com/ — The Trampery (separate entity)

All accessed 2026-04-16.
