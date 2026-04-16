# Proposals — Get Living

## Operator-level facts (apply to East Village, Elephant Central; also apply structurally to The Filigree but see closure note)

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `ast` | https://www.getliving.com/living-with-us/ — "Our tenancy contracts are offered at three-years standard…with the flexibility of a break clause" (accessed 2026-04-16) |
| `referencing_provider` | `homeppl` | Inherited — prior Caner research in `src/areas/data/stratford.ts` line 233; corroborated by Homeppl-client profile match (BTR, large portfolio). Not named verbatim on Get Living's own public FAQ. Recommend direct confirmation via operator enquiry. |
| `min_tenancy_months` | 12 | Conservative; Get Living publicly offers 3-year standard (36 months) but shorter commitments may exist — FAQ doesn't state minimum. https://www.getliving.com/living-with-us/ |
| `income_multiple` | 30 | Homeppl published rule: "at least 30x as much as the monthly price of your rent" — https://homeppl.help.thirdfort.com/hc/en-gb (accessed 2026-04-16) |
| `open_banking_accepted` | `yes` | Homeppl uses Open Banking — https://homeppl.help.thirdfort.com/hc/en-gb references bank statement uploads via their flow |
| `upfront_rent_policy` | `one-month-ast-cap` | Inferred from AST + RRA; reservation is "no more than one week's rent" (https://www.getliving.com/faqs/) consistent with RRA cap |
| `accepts_professional_guarantor` | `unclear` | Not named in Get Living FAQ; Housing Hand / Guarantid acceptance is not verbatim stated. Direct enquiry needed. |
| `accepts_individual_overseas_guarantor` | `yes` | Homeppl Co-Signer route — verbatim "They do not have to reside in the UK" — https://homeppl.help.thirdfort.com/hc/en-gb |
| `credit_check` | `lenient` | Homeppl is explicitly designed for thin-credit applicants — core product positioning |
| `international_tenant_policy` | `welcomed` | Inferred from Homeppl stack (Co-Signer + Open Banking = international-friendly architecture); Get Living neighbourhood marketing emphasises international resident base |
| `visa_expiry_handling` | `unclear` | Not addressed in FAQ; 3-year standard contracts create visa-expiry edge case requiring direct enquiry |
| `qualification_flexibility_signal` | `standard` | No flex cases documented in HomeViews reviews surveyed; no rigid signals either |

## Realism pathway suggestions

Per `realism-pathway-derivation.md` applied to Caner's profile:

| Pathway | Rule check | Included? |
|---|---|---|
| `standard-passable` | credit `lenient` + OB `yes` + intl `welcomed` + visa not `rejected` | ❌ — visa_expiry `unclear` fails the strict all-four-positive test |
| `with-professional-guarantor` | `accepts_professional_guarantor: yes` | ❌ — `unclear` |
| `with-savings` | Homeppl + OB `yes` | ✅ |
| `with-co-signer-overseas` | `accepts_individual_overseas_guarantor: yes` | ✅ |
| `with-upfront-licence` | licence + multi-month | ❌ AST |
| `licence-exempt-light-ref` | licence + no/in-house ref | ❌ AST |

**Suggested `realism_pathways`**: `["with-savings", "with-co-signer-overseas"]`

**Suggested `grad_visa_realism`**: `achievable-with-guarantor` (derived via `deriveRealism([...])` rule 3 — both conditional pathways present).

**Caveat**: East Village was marked `achievable` in the existing dataset. Under the current schema-derivation rules the correct verdict is `achievable-with-guarantor` (not `achievable`), because `achievable` requires `standard-passable` which requires a UK salary Caner doesn't have. The prior `achievable` tag conflates operator quality with Caner's personal qualification profile. This is a **schema correction, not a downgrade** — Get Living remains the #1 pick; the verdict is just more precise.

## Per-project variations

| Project | Variation from operator defaults |
|---|---|
| East Village | No structural variation. `grad_visa_realism: "achievable-with-guarantor"` (corrected from prior `achievable`). |
| Elephant Central | No structural variation. `grad_visa_realism: "achievable-with-guarantor"` (corrected from prior `achievable`). |
| The Filigree | **BUILDING CLOSED for water remediation through mid-late 2026.** Populate qualification fields with operator defaults (identical to East Village / Elephant Central — Get Living operator-wide policies apply). Override `grad_visa_realism: "blocked"` with preserved state (use `deriveRealism(pathways, "blocked")`); pathway array would derive to achievable-with-guarantor once building reopens but the preserved state correctly blocks it for now. Add explicit note about closure + reopening estimate. |

## Pricing (side-effect)

Not extracted this round — current values in `stratford.ts`, `elephant-park.ts` are from 2026-04-12 and likely still current for v1. Direct operator rentals pages (https://www.getliving.com/our-neighbourhoods/east-village/portlands-place/ etc.) would need a fresh crawl to verify; out of scope for this batch unless orchestrator requests.

Existing pricing record (per prior research):
- East Village: 1-bed from ~£2,000+ (verify)
- Elephant Central: 2-bed from £2,975 (per existing preview field)
- The Filigree: 1-bed from £1,750 (building closed — pricing irrelevant until reopens)

## Ghost-project flags

None. All three Get Living buildings (East Village, Elephant Central, The Filigree) verified on https://www.getliving.com/our-neighbourhoods/.

## Notes (for `notes` field on each project)

**East Village / Elephant Central**:

> Get Living uses Homeppl referencing, which opens three independent pathways for Caner: (1) 36× monthly rent in savings with 3 months of Open Banking bank statements, (2) Homeppl Co-Signer with a non-UK-resident (Turkish parents qualify), (3) standard 30× annual income if Caner secures UK employment. Agreement is AST; Get Living publicly offers 3-year standard contracts with break clause. Direct enquiry should confirm visa-expiry handling and whether Housing Hand / Guarantid is accepted as a third redundant pathway.

**The Filigree**:

> CLOSED for water remediation through mid-late 2026 per Get Living (major burst-mains leak early 2025). Not available for late-May-2026 move-in. Qualification data reflects Get Living operator defaults — identical to East Village / Elephant Central via Homeppl stack. Realism blocked by building unavailability, not by qualification; flip to achievable-with-guarantor once operator confirms reopening.

## Sources (full list — copy into each project's `sources` array, adjusting where The Filigree needs the closure URL)

- https://www.getliving.com/faqs/ — operator FAQ (accessed 2026-04-16, type: operator)
- https://www.getliving.com/living-with-us/ — tenancy length + contract shape (accessed 2026-04-16, type: operator)
- https://www.getliving.com/our-neighbourhoods/ — portfolio verification (accessed 2026-04-16, type: operator)
- https://homeppl.help.thirdfort.com/hc/en-gb — 36× savings, Co-Signer rules, 30× income rule (accessed 2026-04-16, type: operator)
- https://www.homeppl.com/ — Homeppl marketing / client list (accessed 2026-04-16, type: operator)
- https://www.getliving.com/our-neighbourhoods/the-filigree/ — closure statement (accessed 2026-04-16, type: operator) — **only for Filigree project**
- https://www.yardi.co.uk/about-us/our-clients/clients-success-get-living/ — property management stack context (accessed 2026-04-16, type: press)

## research_status

Set to `"complete"` for all three projects. Every field has a definitive value (including `"unclear"` where appropriate — `visa_expiry_handling` and `accepts_professional_guarantor` being the two that merit a direct-enquiry follow-up).
