# Moda Living — Operator Research (2026-04-16)

## Summary verdict

Moda Living's **Experian 561+ credit floor remains in force** and is explicitly stated on their qualification criteria page. The policy is **post-Canopy-integration** (Canopy provides the RentPassport tenant-verification layer, Experian-powered). For a graduate-visa applicant with no UK credit history, the floor is a hard block at affordability screening — the referencing stack is designed to reject a thin file at the first gate.

The one documented flex lever — **"pay the full tenancy upfront"** — is only legal for licence agreements post-RRA (1 May 2026). Moda's agreements are ASTs, so the 1-month advance-rent cap kills that route. This verdict holds.

## Operator-level qualification table

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `"ast"` | Moda runs standard BTR; FAQ language around tenancy, deposit, Right-to-Rent confirms AST |
| `referencing_provider` | `"canopy"` | Moda's qualification page + Property Week / BTR News on Canopy RentPassport rollout |
| `min_tenancy_months` | `12` | Standard BTR default; not explicitly stated but consistent with AST model |
| `income_multiple` | `30` | Verbatim: "household income of everyone on the tenancy agreement is 30 x gross monthly rental amount" |
| `open_banking_accepted` | `"unclear"` | Canopy supports Open Banking technically; Moda's page doesn't state whether it substitutes for payslips |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST → RRA cap. Moda's own "pay full tenancy upfront" clause becomes illegal for ASTs post-1 May 2026 |
| `accepts_professional_guarantor` | `"unclear"` | Not mentioned on qualification page. No Housing Hand/Guarantid endorsement found |
| `accepts_individual_overseas_guarantor` | `"no"` | Implied — "valid landlord reference" + UK-centric process; no overseas-guarantor alternative stated |
| `credit_check` | `"strict"` | Explicit Experian 561+ floor = textbook strict |
| `international_tenant_policy` | `"accepted-case-by-case"` | Not explicitly welcomed; Right-to-Rent check is their international gate |
| `visa_expiry_handling` | `"unclear"` | Not addressed on qualification page |
| `qualification_flexibility_signal` | `"rigid"` | Hard-coded numeric floor + "must" language throughout criteria |

## Pathway derivation

| Pathway | Fires? | Why |
|---|---|---|
| `standard-passable` | ❌ | `credit_check: "strict"` fails the condition |
| `with-professional-guarantor` | ❌ | `accepts_professional_guarantor: "unclear"` not `"yes"` |
| `with-savings` | ❌ | `referencing_provider` is Canopy, not Homeppl |
| `with-co-signer-overseas` | ❌ | `accepts_individual_overseas_guarantor: "no"` |
| `with-upfront-licence` | ❌ | AST, not licence |
| `licence-exempt-light-ref` | ❌ | AST, not licence |

**Result:** `realism_pathways: []`, `grad_visa_realism: "blocked"` (preserved authored state).

**Block reason:** Explicit Experian 561+ credit-score floor. A Turkish graduate-visa applicant with no UK credit history will not clear Canopy's RentPassport first gate regardless of income, savings, or guarantor willingness.

## Affected dataset projects

### 1. Embassy Boulevard (Nine Elms) — `embassy-boulevard`

**Status:** Real. Confirmed Moda Living operator. Debut London neighbourhood, 467 units, opened 2025.

**Current dataset state:**
- `operator: "Moda Living"` ✓
- `realism: "achievable-with-guarantor"` ✗ **Wrong — should be `"blocked"`**
- Preview references 2.66x income multiple — actually 30x per Moda's own qualification page (their 2.66x mention refers to annual-rent multiple, equivalent to ~32x monthly, but Moda states 30x monthly gross). Minor number drift.

**Proposed change:**
- Flip `realism: "achievable-with-guarantor"` → `"blocked"`
- Update preview to remove "achievable-with-guarantor" framing if any
- Populate qualification block per table above
- `grad_visa_realism: "blocked"`, `notes: "Moda's Experian 561+ credit-score floor is a hard block for Caner. No UK credit history means Canopy RentPassport rejects at first gate. No alternative pathway exists: upfront-rent workaround dies post-RRA for ASTs; overseas guarantor not accepted."`

### 2. The Stage EC2 (Old Street / Hoxton) — `the-stage-ec2`

**Status:** **WRONG-OPERATOR FLAG (Category B).** The Stage EC2 is a Galliard + McCourt development. Rental operations are run by **Rhodium Consulting** (concierge/management) and individual-landlord lettings via agents (Circa London, LiFE Residential on Rightmove / OTM). A separate company `THE STAGE SHOREDITCH RENTAL RESIDENTIAL LIMITED` was incorporated 17 Dec 2025 — not a Moda entity.

**Evidence:**
- Moda's portfolio page does not list The Stage
- The Stage's own site (`thestageshoreditch.com`) makes no Moda reference
- Dataset's own preview says "Tier 8 operator with referencing opacity" — which is itself a signal the 2026-04 sweep agent was uncertain
- Moda's verified London pipeline: Embassy Boulevard (Nine Elms, complete), plus pipeline at Bermondsey (Studio Living — 283 studios planned per dataset brent-cross-town.ts comment, not yet lettable)

**Proposal:**
- **Flag for user confirmation** — Category B wrong-operator
- Recommended correction: change `operator: "Moda Living"` → `operator: "Rhodium / Various agents"` OR `operator: "Various agents"` and set `building_type` to `"Mixed"` (not BTR — it's BTS with some rental through individual landlords)
- If the user confirms the flag, re-categorise as individual-landlord rental → `grad_visa_realism: "unlikely"` per secondary-market default
- Alternatively: delete if the user treats this as a ghost-BTR (the BTR attribution is fabricated, even though the building exists)
- Update `preview` to remove Moda framing and Tier 8 reference
- Update area-level references in `old-street-hoxton.ts` at lines 105, 107 (T1 criteria reasoning mentions The Stage as "Moda Living BTR / Tier 8" — those lines need rewriting)

## Moda Springbank check

The task description flagged "Moda Springbank" as a possible dataset entry. **Grep returned no matches** for "Springbank" anywhere in the flatbrowser codebase. That project does not exist in the dataset — it was never added (correctly, as it's a Leeds scheme, outside scope). No action needed.

## Blast-radius cross-references

For Embassy Boulevard (real project, just realism flip):
- `nine-elms.ts` line 115 (project definition) — needs qualification block + realism update
- `nine-elms.ts` line 319 (research comment saying "Moda may use Homeppl — not confirmed for London") — update to "Moda uses Canopy RentPassport (Experian-powered). Hard-blocked on 561+ floor."
- `nine-elms.ts` area-level prose — check area grade doesn't depend on Embassy Boulevard being renter-accessible

For The Stage EC2 (wrong-operator flag):
- `old-street-hoxton.ts` lines 6-21 (project definition)
- `old-street-hoxton.ts` line 105 (T1.2 reasoning: "The Stage (Moda Living), Atlas...")
- `old-street-hoxton.ts` line 107 (T1.4 reasoning: "The Stage is Moda Living BTR (Tier 8)...")
- `brent-cross-town.ts` line 8 (research comment references "Moda: Nine Elms... Bermondsey (Studio Living — 283 studios, 2026)") — retain Embassy, retain Bermondsey pipeline mention, note that Shoreditch is not Moda

## Sources

| URL | Label | Type | Accessed |
|---|---|---|---|
| https://casa.moda/qualification-criteria | Moda / Casa qualification criteria page | operator | 2026-04-16 |
| https://www.propertyweek.com/news/moda-living-teams-up-with-canopy-to-roll-out-tenant-verification-app | Moda + Canopy rollout | press | 2026-04-16 |
| https://btrnews.co.uk/canopy-provides-moda-with-financial-awareness-digital-platform/ | Canopy financial-awareness platform for Moda | press | 2026-04-16 |
| https://www.thestageshoreditch.com/ | The Stage Shoreditch site | developer | 2026-04-16 |
| https://modaliving.com/locations/london | Moda Living London portfolio page | operator | 2026-04-16 |
| https://find-and-update.company-information.service.gov.uk/company/16916302 | Companies House — The Stage Shoreditch Rental Residential Ltd | registry | 2026-04-16 |
