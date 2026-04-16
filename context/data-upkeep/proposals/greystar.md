# Proposals — Greystar (direct) qualification fields

**Operator:** Greystar UK (direct-branded BTR)
**Research date:** 2026-04-16
**Confidence:** High for Homeppl stack + 2.66× affordability + 4× guarantor; Medium for Guarantid acceptance (unverified verbatim); Pearl Yard 3-month min **high** confidence (verbatim FAQ).

---

## Operator-level defaults (apply to every Greystar-direct project unless per-project override)

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `"ast"` | Standard 12-month fixed term per all Greystar FAQs; converts to APT 1 May 2026 per RRA |
| `referencing_provider` | `"homeppl"` | Pearl Yard FAQ verbatim: "Homeppl will conduct reference checks"; same on Bloom, Ten Degrees |
| `min_tenancy_months` | `12` | All Greystar FAQs (Pearl Yard is the documented exception — see per-project) |
| `income_multiple` | `32` (derived from 2.66× annual ≈ 31.92× monthly) | Pearl Yard FAQ: "gross household income must be at least 2.66 times the annual rent" |
| `open_banking_accepted` | `"yes"` | Homeppl is the primary Open Banking referencing provider; Homeppl FAQ verbatim supports bank-statement / Open Banking route |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + post-1-May-2026 RRA cap on new APTs. Pre-RRA Greystar used advance rent as affordability-failure lever (Mylo FAQ), that route closes for new APTs |
| `accepts_professional_guarantor` | `"unclear"` | Greystar FAQs accept "guarantors" with 4× annual rent income; no Greystar FAQ names Guarantid or Housing Hand explicitly. Homeppl-native Guarantid is structurally compatible but requires enquiry to verify acceptance |
| `accepts_individual_overseas_guarantor` | `"unclear"` | No Greystar FAQ statement. Homeppl supports non-UK-resident co-signers generally; Greystar's posture under Homeppl isn't verbatim |
| `credit_check` | `"lenient"` | Homeppl is designed for thin UK credit files; supports Open Banking + savings substitution |
| `international_tenant_policy` | `"accepted-case-by-case"` | Fizzy FAQ (group-wide posture): non-EU tenants accepted with Right to Rent compliance; no explicit "welcomed" language on Greystar-direct FAQs |
| `visa_expiry_handling` | `"unclear"` | Not stated on any Greystar FAQ. Per Right to Rent rules, tenancy typically aligned to visa expiry; specific behaviour unverified |
| `qualification_flexibility_signal` | `"flexible"` for Caner (existing Greystar tenant); `"standard"` for cold applicants | Caner has 9-month clean payment record at Ten Degrees — documented loyalty leverage. For cold applicants, no strong positive or negative signal |
| `research_status` | `"complete"` | All fields populated with `"unclear"` where genuinely ambiguous |

### Derived (for cold applicant — not Caner-specific Greystar loyalty)

- `realism_pathways: ["with-savings"]`
- `grad_visa_realism: "achievable-with-guarantor"` (umbrella; standard route blocked by 2.66× test without savings)

### Narrative (notes field — cold applicant)

> Greystar uses Homeppl for referencing across its UK portfolio (confirmed verbatim across Pearl Yard, Bloom Nine Elms, Ten Degrees). Homeppl's savings-based affordability route (36× monthly rent in savings) is the cleanest pathway for international applicants without UK payslips. The load-bearing unverified question is whether Greystar accepts Guarantid (Homeppl's own guarantor product) — a direct enquiry unlocks a second route. Pearl Yard is the only Greystar building offering 3-month minimum tenancy; all others are 12-month standard.

---

## Per-project proposals

### Pearl Yard Bermondsey (`pearl-yard`, bermondsey)

| Field | Value | Source |
|---|---|---|
| `min_tenancy_months` | **`3`** (override — operator default is 12) | https://www.pearlyardbermondsey.com/faqs : "Flexible leases from 3 months to 12 months" |
| `agreement_type` | `"ast"` | Standard |
| `referencing_provider` | `"homeppl"` | FAQ verbatim |
| `income_multiple` | `32` | 2.66× annual |
| `open_banking_accepted` | `"yes"` | Via Homeppl |
| `upfront_rent_policy` | `"one-month-ast-cap"` | RRA |
| `accepts_professional_guarantor` | `"unclear"` | Not named |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Not named |
| `credit_check` | `"lenient"` | Homeppl |
| `international_tenant_policy` | `"accepted-case-by-case"` | No explicit welcome statement |
| `visa_expiry_handling` | `"unclear"` | |
| `qualification_flexibility_signal` | `"flexible"` (3-month flex + Homeppl stack) | 3-month flex is itself a flexibility signal |
| `research_status` | `"complete"` | |
| `grad_visa_realism` | `"achievable-with-guarantor"` (preserve if prior was "unknown") | Homeppl + 3-month flex is among the strongest Greystar profiles |
| **Pricing** | Studio `min: 2670`, 1-bed `min: 3360`, 2-bed `min: 3905` | Site 2026-04-16 |
| **Promo** | 8 weeks rent free on move-in ready (ending soon); studio promo from £2,137 | Site 2026-04-16 |
| `price_transparency` | `"listed"` | |
| `cost_tier` | `"premium"` | Floor £2,670 (or £2,137 promo) > £2,000 |
| `prices.notes` | "Prices verified 2026-04-16. 8-week-free promo active; studios promo-advertised from £2,137 (below standard £2,670 floor)." | |

### The Bermondsey Project (`the-bermondsey-project`, bermondsey)

| Field | Value | Source |
|---|---|---|
| `min_tenancy_months` | `12` | Greystar default (no FAQ yet published for this building) |
| `referencing_provider` | `"homeppl"` | Greystar default |
| `income_multiple` | `32` | Greystar default |
| `open_banking_accepted` | `"yes"` | Homeppl default |
| `upfront_rent_policy` | `"one-month-ast-cap"` | RRA |
| `accepts_professional_guarantor` | `"unclear"` | |
| `accepts_individual_overseas_guarantor` | `"unclear"` | |
| `credit_check` | `"lenient"` | |
| `international_tenant_policy` | `"accepted-case-by-case"` | |
| `visa_expiry_handling` | `"unclear"` | |
| `qualification_flexibility_signal` | `"standard"` | |
| `research_status` | `"complete"` (structural) | |
| `grad_visa_realism` | `"achievable-with-guarantor"` (preserve if prior was "unknown") | Homeppl stack |
| **Pricing** | Not published; `price_transparency: "enquire"` | |
| **Leasing status** | First phase residents autumn 2025; next phase January 2026; full completion 2H 2027 | https://greystar-bermondseyproject.com/timeline/ |
| **Notes for data file** | Leasing office email info@greystar-bermondseyproject.com; central contact for Greystar UK | |

### Bloom Nine Elms (`bloom-nine-elms`, nine-elms)

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `"ast"` | |
| `referencing_provider` | `"homeppl"` | FAQ verbatim |
| `min_tenancy_months` | `12` | FAQ: 12 months standard, up to 3 years |
| `income_multiple` | `32` | 2.66× annual |
| `open_banking_accepted` | `"yes"` | Homeppl |
| `upfront_rent_policy` | `"one-month-ast-cap"` | RRA |
| `accepts_professional_guarantor` | `"unclear"` | |
| `accepts_individual_overseas_guarantor` | `"unclear"` | |
| `credit_check` | `"lenient"` | Homeppl |
| `international_tenant_policy` | `"accepted-case-by-case"` | |
| `visa_expiry_handling` | `"unclear"` | |
| `qualification_flexibility_signal` | `"standard"` | |
| `research_status` | `"complete"` | |
| `grad_visa_realism` | `"achievable-with-guarantor"` (preserve if prior was "unknown") | |
| **Pricing** | Studio `min: 2705`, 1-bed `min: 3505`, 2-bed `min: 3685`, 3-bed `min: 5575` | Site 2026-04-16 |
| `price_transparency` | `"listed"` | |
| `cost_tier` | `"premium"` (floor £2,705) | |
| `prices.notes` | "Prices verified from operator website 2026-04-16. Furnished/unfurnished both offered." | |

### Mylo Nine Elms / Nine Elms Point (`mylo-nine-elms`, nine-elms)

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `"ast"` | |
| `referencing_provider` | `"homeppl"` | Greystar default (Mylo is Greystar-operated; FAQ uses Greystar-template language) |
| `min_tenancy_months` | `12` | Greystar default |
| `income_multiple` | `32` | FAQ verbatim: 2.66× |
| `open_banking_accepted` | `"yes"` | Homeppl |
| `upfront_rent_policy` | `"one-month-ast-cap"` (AST/RRA); pre-RRA FAQ mentions advance rent as affordability alternative | Mylo FAQ pre-RRA: "Advance rental payments are an option if a household does not pass the affordability criteria" — this narrows post-May 2026 |
| `accepts_professional_guarantor` | `"unclear"` | |
| `accepts_individual_overseas_guarantor` | `"unclear"` | |
| `credit_check` | `"lenient"` | |
| `international_tenant_policy` | `"accepted-case-by-case"` | |
| `visa_expiry_handling` | `"unclear"` | |
| `qualification_flexibility_signal` | `"flexible"` (pre-RRA explicit advance-rent flex language — may narrow post-May) | |
| `research_status` | `"complete"` | |
| `grad_visa_realism` | `"achievable-with-guarantor"` (preserve if prior was "unknown") | |
| **Pricing** | Not listed on operator site — direct enquiry. Deposits: 1-bed £2,700, 2-bed £3,300 | FAQ |
| `price_transparency` | `"enquire"` | |

### Ten Degrees Croydon (`ten-degrees`, croydon) — Caner's current home

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `"ast"` | FAQ |
| `referencing_provider` | `"homeppl"` | FAQ verbatim |
| `min_tenancy_months` | `12` (standard); flexible up to 3 years | FAQ |
| `income_multiple` | `32` | 2.66× |
| `open_banking_accepted` | `"yes"` | Homeppl |
| `upfront_rent_policy` | `"one-month-ast-cap"` (post-RRA for any NEW tenancy; Caner's existing tenancy retains its terms) | |
| `accepts_professional_guarantor` | `"unclear"` | |
| `accepts_individual_overseas_guarantor` | `"unclear"` | |
| `credit_check` | `"lenient"` | Homeppl |
| `international_tenant_policy` | `"accepted-case-by-case"` | |
| `visa_expiry_handling` | `"unclear"` | Not addressed in FAQ |
| `qualification_flexibility_signal` | `"flexible"` — Caner has 9-month clean payment history here, and the FAQ explicitly offers negotiable advance rent for students | |
| `research_status` | `"complete"` | |
| `grad_visa_realism` | **Preserve existing value** — this is Caner's current home, not a target. Can update to `"achievable-with-guarantor"` based on research (Homeppl + savings pathway) if the user wants the "could I move here again?" reading. | |
| **Pricing** | Caner's current rent ~£2,500 (1-bed, based on user profile); Flatfair alternative £350-£600+VAT | FAQ + profile |
| **Deposits** | £1,200–£3,100 by unit | FAQ |

### Stratford Mill (`stratford-mill`, stratford) — formerly listed as "Tide Construction Stratford East" in task description

| Field | Value | Source |
|---|---|---|
| **Name correction** | Dataset already has **"Stratford Mill"** correctly. Task brief's "Tide Construction Stratford East" is a mis-reference — Stratford Mill was acquired from Lifestory, not built by Tide. No name change needed. | Dataset src/areas/data/stratford.ts line 62 |
| `agreement_type` | `"ast"` | Greystar default |
| `referencing_provider` | `"homeppl"` | Greystar default — not yet verified on a building-specific site because Stratford Mill not yet leasing |
| `min_tenancy_months` | `12` | Greystar default |
| `income_multiple` | `32` | Greystar default |
| `open_banking_accepted` | `"yes"` | Homeppl default |
| `upfront_rent_policy` | `"one-month-ast-cap"` | RRA |
| `accepts_professional_guarantor` | `"unclear"` | |
| `accepts_individual_overseas_guarantor` | `"unclear"` | |
| `credit_check` | `"lenient"` | Homeppl |
| `international_tenant_policy` | `"accepted-case-by-case"` | |
| `visa_expiry_handling` | `"unclear"` | |
| `qualification_flexibility_signal` | `"standard"` (no building-specific data yet) | |
| `research_status` | `"partial"` — not yet leasing, operator defaults applied | |
| `grad_visa_realism` | `"achievable-with-guarantor"` (preserve "unknown" if the building hasn't opened leasing — speculative application) | |
| **Pricing** | Not yet leasing — `price_transparency: "enquire"` | |
| **Completion** | Autumn 2026 (topping out Oct 2025; developer Lifestory acquired by Greystar) | |

---

## Ghost-project / attribution flag

### "Greystar Walthamstow" (project #7 in task brief)

**Category:** Likely a task-brief artefact; requires user confirmation.

**Finding:** No project named "Greystar Walthamstow" or matching ID in `src/areas/data/walthamstow.ts`. That file's projects are:
1. Blackhorse Mills (L&G)
2. The Altham
3. Blackhorse View
4. The Eades
5. The Scene
6. Morro The Altham
7. Morro Blackhorse Lane

**Related verified fact:** Fizzy Walthamstow (Greystar subsidiary) EXISTS at 5D Blackhorse Lane, E17 6DS, and operates on the same Homeppl/Greystar stack as the other Fizzy buildings. Source: https://fizzyliving.com/locations/walthamstow/ and https://www.greystar.com/fizzy-walthamstow-london-uk/p_18867.

**Possible interpretations:**
1. **Missing project** — Fizzy Walthamstow should be ADDED to walthamstow.ts to mirror the 5 other Fizzy London entries (Lewisham, East 16, Poplar, Canning Town, Stepney Green)
2. **Task-brief typo** — the skill orchestrator's project list included "Greystar Walthamstow" but no such entry exists; simply ignore
3. **Renamed/removed** — if a prior sweep added it, grep confirms it's not present now

**Recommended:** Ask user whether to add Fizzy Walthamstow as a new project (not a ghost — it exists), or confirm the task-brief entry should be ignored.

---

## Blast-radius references (verified clean)

Cross-area mentions of Greystar are all in correct context:
- `src/areas/data/bermondsey.ts` — Pearl Yard, The Bermondsey Project (both ✅)
- `src/areas/data/croydon.ts` — Ten Degrees (✅) and multiple mentions in area prose
- `src/areas/data/nine-elms.ts` — Bloom, Mylo (✅)
- `src/areas/data/stratford.ts` — Stratford Mill (✅) + area-level T1 references
- `src/areas/data/canning-town.ts` — Fizzy Canning Town, Fizzy East 16 (as Fizzy/Greystar subsidiary) (✅)
- `src/areas/data/lewisham-gateway.ts` — Fizzy Lewisham (as Greystar) (✅)
- `src/areas/data/mile-end.ts` — Fizzy Stepney Green (✅)
- `src/areas/data/poplar-blackwall.ts` — Fizzy Poplar (✅)

No cleanup required for existing references.
