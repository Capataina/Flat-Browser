# Proposals — L&G Living / Legal & General

## Operator-level facts (with per-building referencing-stack divergence)

L&G Living does not run a unified operator-level referencing stack across Blackhorse Mills and New Acres — each building's local management applies its own referencing partner. Most other qualification fields are identical at both buildings (AST, 6mo-5yr flexible, standard credit check), so this table captures the shared defaults, then per-project variations capture the divergent referencing partners.

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `ast` | Verbatim at New Acres: "We will send you your AST and a calculation of the move in monies" — https://www.newacreswandsworth.com/faqs |
| `referencing_provider` | see per-project below | — |
| `min_tenancy_months` | 6 | Both buildings: "6 months - 5 years" flexible. https://www.newacreswandsworth.com/faqs and https://www.blackhorsemills.com/faqs |
| `income_multiple` | 30 | Not verbatim on either FAQ; inferred from industry standard + The Lettings Hub default thresholds. Confirm via enquiry. |
| `open_banking_accepted` | `unclear` | Not mentioned at either FAQ |
| `upfront_rent_policy` | `one-month-ast-cap` | Inferred from AST + RRA 1-month cap; New Acres FAQ states one-month deposit lodged in TDS |
| `accepts_professional_guarantor` | `unclear` | Not named on either operator FAQ. Housing Hand's own materials claim L&G acceptance (not verbatim confirmed operator-side). Direct enquiry is the resolving question. |
| `accepts_individual_overseas_guarantor` | `unknown` | Not addressed at either FAQ |
| `credit_check` | `standard` | Credit check confirmed at both buildings; no floor or leniency language |
| `international_tenant_policy` | `accepted-case-by-case` | New Acres FAQ documents passport + biometric residence permit pathway for non-EEA nationals |
| `visa_expiry_handling` | `unclear` | Not addressed; 5-year-max tenancy suggests possible truncation but not verbatim |
| `qualification_flexibility_signal` | `standard` | No flex cases documented in HomeViews reviews surveyed |

## Realism pathway suggestions

Per `realism-pathway-derivation.md` applied to Caner's profile:

| Pathway | Rule check | Included? |
|---|---|---|
| `standard-passable` | credit `lenient`/`none` + OB `yes` + intl `welcomed`/`accepted-case-by-case` + visa not `rejected` | ❌ — credit `standard`, OB `unclear` |
| `with-professional-guarantor` | `accepts_professional_guarantor: yes` | ❌ — `unclear` |
| `with-savings` | Homeppl + OB `yes` | ❌ — neither building uses Homeppl |
| `with-co-signer-overseas` | `accepts_individual_overseas_guarantor: yes` | ❌ — `unknown` |
| `with-upfront-licence` | licence + multi-month | ❌ AST |
| `licence-exempt-light-ref` | licence + no/in-house ref | ❌ AST |

**Suggested `realism_pathways`**: `[]` (empty array — no confirmed pathway under current public documentation)

**Count of `unclear`/`unknown` fields**: `referencing_provider` is per-building; OB `unclear`; prof-guarantor `unclear`; overseas-guarantor `unknown`; visa `unclear` → 4 of 12 structural fields are unresolved. Per `realism-pathway-derivation.md` § "What to do with `unclear`/`unknown` fields": when more than 3 structural fields are unresolved, the project's `grad_visa_realism` should be `"unclear"` regardless of pathway derivation.

**Suggested `grad_visa_realism`**: `"unclear"` for both projects.

This is more cautious than the existing dataset state:
- Blackhorse Mills currently `realism: "achievable-with-guarantor"` — the prior value was authored pre-research based on inherited assumption. Research does not confirm this; downgrading to `"unclear"` is the honest reading.
- New Acres currently `realism: "unknown"` — upgrade to `"unclear"` (distinct semantics: unresearched vs researched-but-genuinely-ambiguous).

**Alternative softer recommendation**: if the Housing Hand L&G-acceptance claim is treated as sufficient second-hand evidence, `accepts_professional_guarantor` could be marked `"yes"` with a lower-confidence `type: "press"` source (Housing Hand's partner directory). That would unlock `with-professional-guarantor` pathway → `achievable-with-guarantor`. Flag this decision for user judgement at Phase 3.

## Per-project variations

| Project | Variation from operator defaults |
|---|---|
| **Blackhorse Mills (walthamstow)** | `referencing_provider: "unclear"` — FAQ references "standard lettings agency referencing" without naming provider; uses flatfair for deposit-free alternative (not a referencing provider). 1-week check-in fee (£120 min) plus VAT. |
| **New Acres (wandsworth)** | `referencing_provider: "unclear"` (The Lettings Hub is confirmed — but schema lacks a `lettings-hub` enum value; see schema-expansion note below) |

### Schema note on referencing-provider enum

The current schema enum in `src/areas/types.ts` (via `qualification-schema.md`) lists:
`"homeppl" | "goodlord" | "canopy" | "in-house" | "none" | "unclear" | "unknown"`

The Lettings Hub is a real fifth-category referencing provider used by New Acres (and by implication, elsewhere in L&G's BTR portfolio). The enum would benefit from a `"lettings-hub"` value to capture this accurately. For v1, recommend `"unclear"` with a narrative note until the enum can be extended — this is a tracked item for a schema revision, not an immediate blocker.

flatfair is a deposit alternative, not a referencing provider — it doesn't need an enum value.

## Pricing (side-effect)

Not extracted this round. Existing preview fields suggest:
- Blackhorse Mills: pricing not captured in existing data
- New Acres: pricing not captured in existing data (L&G does not publicly list prices per existing research comment in wandsworth-town.ts)

Both operator sites require enquiry for pricing — `price_transparency: "enquire"` likely for both. Out of scope for this batch unless orchestrator requests fresh crawl.

## Ghost-project flags

None. Both buildings verified at their official sites and L&G corporate press releases.

## Notes (for `notes` field on each project)

**Blackhorse Mills**:

> L&G's Walthamstow BTR (479 homes, WiredScore Gold, Assael Architecture). Uses flatfair for deposit-free alternative; referencing is "standard lettings agency" (provider not publicly named — direct enquiry needed). Flexible tenancies 6 months to 5 years. Housing Hand claims L&G acceptance at its partner layer but operator-side verbatim confirmation is absent. Qualification pathway for Caner's profile is `unclear` under current public documentation — too many structural fields unresolved to commit to a specific pathway. Direct enquiry should surface: whether Housing Hand is actually accepted, whether Open Banking income verification is an option, and whether 3-year upfront-rent offers are accepted.

**New Acres**:

> L&G's flagship UK BTR (1,034 homes, completed December 2024, >75% let). Uses The Lettings Hub for referencing — confirmed verbatim on the FAQ. Standard AST with 6-month-to-5-year flexible contracts. International tenant documentation pathway is documented (non-EEA passport + biometric residence permit). Guarantor acceptance is not verbatim confirmed by L&G — Housing Hand claims the relationship from its side. Qualification pathway is `unclear` under current public documentation — direct enquiry is the resolving question, especially whether Housing Hand is accepted and whether Open Banking satisfies income verification through The Lettings Hub.

## Sources (full list — copy into each project's `sources` array, filtering per building)

**Shared**:
- https://group.legalandgeneral.com/en/about-us/housing-businesses-partners/urban-build-to-rent (accessed 2026-04-16, type: operator)
- https://group.legalandgeneral.com/en/newsroom/press-releases/l-g-completes-flagship-build-to-rent-scheme-in-london-delivering-1034-homes (accessed 2026-04-16, type: press)

**Blackhorse Mills**:
- https://www.blackhorsemills.com/ (accessed 2026-04-16, type: operator)
- https://www.blackhorsemills.com/faqs (accessed 2026-04-16, type: operator)
- https://group.legalandgeneral.com/en/newsroom/press-releases/legal-general-starts-on-site-at-london-btr-scheme (accessed 2026-04-16, type: press)
- https://fracreative.com/portfolio/blackhorse-mills/ (accessed 2026-04-16, type: developer)

**New Acres**:
- https://www.newacreswandsworth.com/ (accessed 2026-04-16, type: operator)
- https://www.newacreswandsworth.com/faqs (accessed 2026-04-16, type: operator) — verbatim Lettings Hub confirmation
- https://www.newacreswandsworth.com/landlord (accessed 2026-04-16, type: operator)
- https://www.homeviews.com/development/new-acres-wandsworth-sw18 (accessed 2026-04-16, type: homeviews)

## research_status

- Blackhorse Mills: `"complete"` — every field has a definitive value (including `"unclear"`/`"unknown"` where appropriate). Because >3 fields are unresolved, `grad_visa_realism` is `"unclear"`.
- New Acres: `"complete"` — same reasoning.
