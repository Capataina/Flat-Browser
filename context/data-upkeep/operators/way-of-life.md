# Way of Life — Operator Research (2026-04-16)

## Summary verdict

Way of Life's own FAQ is verbatim: **"To meet our affordability criteria, you may be required to have a UK-based guarantor, or 12 months of rent in advance."**

Post-RRA (1 May 2026) the "12 months of rent in advance" clause is **dead for ASTs** — the Renters' Rights Act caps advance rent at 1 month for assured tenancies. Way of Life's tenancies are 12-36 months AST-shaped — "Our tenancies range from twelve months to thirty-six months."

That collapses the qualification pathway to: **UK-based guarantor only.** Corporate guarantor services (Housing Hand, Guarantid) are not mentioned on the FAQ. No Homeppl or Goodlord-based Open Banking / Co-Signer route is stated.

Way of Life partners with Goodlord for referencing (confirmed via Goodlord's published partner list) but **Goodlord explicitly cannot reference overseas guarantors** — per Goodlord's own tenant-support documentation. The Goodlord Guarantor service launched in 2026 provides a professional-guarantor alternative for tenants without UK-based guarantors, but this would need Way of Life to have opted in — and their FAQ doesn't reference it.

**Verdict:** `grad_visa_realism: "blocked"` preserved, pending Way of Life confirmation of Goodlord Guarantor uptake. Direct enquiry is the deciding question.

## Operator-level qualification table

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `"ast"` | 12-36 month tenancies — standard BTR AST |
| `referencing_provider` | `"goodlord"` | Goodlord case-studies / partner page; Way of Life mentioned in Goodlord ecosystem |
| `min_tenancy_months` | `12` | Verbatim: "twelve months to thirty-six months" |
| `income_multiple` | `30` | Standard UK BTR (not verbatim stated but implied by Goodlord default) |
| `open_banking_accepted` | `"unclear"` | Goodlord's product is credit-file-centric; Open Banking for self-employed income exists but not standard |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + RRA from 1 May 2026. Previous "12 months upfront" route dies |
| `accepts_professional_guarantor` | `"no"` | UK-based guarantor required; no Housing Hand / Guarantid endorsement in FAQ. Goodlord Guarantor (launched Feb 2026) uptake unverified |
| `accepts_individual_overseas_guarantor` | `"no"` | Verbatim "UK-based guarantor"; Goodlord cannot reference overseas guarantors |
| `credit_check` | `"standard"` | Goodlord-standard UK credit reference; thin international files referred to guarantor |
| `international_tenant_policy` | `"accepted-case-by-case"` | Virtual viewings offered globally, but Right-to-Rent required; conditional on UK guarantor or 12-month upfront (latter now dead) |
| `visa_expiry_handling` | `"unclear"` | Not addressed |
| `qualification_flexibility_signal` | `"standard"` | No positive flex anecdotes; no hard-rigid signals either. FAQ is prescriptive |

## Pathway derivation

| Pathway | Fires? | Why |
|---|---|---|
| `standard-passable` | ❌ | `credit_check: "standard"` + Caner lacks UK credit |
| `with-professional-guarantor` | ❌ | `"no"` (Goodlord Guarantor uptake unverified) |
| `with-savings` | ❌ | Goodlord, not Homeppl — no savings pathway |
| `with-co-signer-overseas` | ❌ | `"no"` (Goodlord cannot reference overseas) |
| `with-upfront-licence` | ❌ | AST, not licence. RRA kills the 12-months-upfront fallback |
| `licence-exempt-light-ref` | ❌ | AST |

**Result:** `realism_pathways: []`, `grad_visa_realism: "blocked"`.

**Block reason:** UK-based guarantor required; 12-month-upfront alternative dies post-RRA for ASTs. Goodlord referencing cannot accept overseas guarantors. No corporate guarantor endorsement in FAQ.

**Conditional caveat:** Goodlord launched its own professional-guarantor product in early 2026. If Way of Life opts in, this could flip to `achievable-with-guarantor`. Worth a direct enquiry — single email question.

## Affected dataset projects

### 1. The Eades (Walthamstow) — `the-eades` in `walthamstow.ts`

**Status:** Real. Confirmed 495-unit Way of Life BTR, opened 18 Sep 2025. Tide Construction / Long Harbour / Assael Architecture.

**Current dataset state:**
- `operator: "Way of Life"` ✓
- `realism: "unknown"` — upgrade to `"blocked"`
- Preview: "1-beds from approx. £1,900 pcm" — verify against current website listings

**Proposed change:**
- Set `realism: "blocked"`
- Populate qualification block per table above
- `grad_visa_realism: "blocked"`, `notes: "Way of Life requires a UK-based guarantor with Goodlord referencing. Post-RRA (1 May 2026) the 12-month-upfront fallback dies for ASTs; Goodlord cannot reference overseas guarantors. Goodlord Guarantor (launched Feb 2026) may offer a professional route if Way of Life opts in — direct enquiry is the deciding question. Otherwise hard-blocked."`
- Flag for user follow-up: single email to Way of Life asking whether Goodlord Guarantor is accepted — could flip to `achievable-with-guarantor`

## Sources

| URL | Label | Type | Accessed |
|---|---|---|---|
| https://www.wayoflife.com/faqs/renting-faqs | Way of Life — Renting FAQs | operator | 2026-04-16 |
| https://www.wayoflife.com/locations/london/the-eades | Way of Life — The Eades listing | operator | 2026-04-16 |
| https://www.theeades.com/ | The Eades — building site | developer | 2026-04-16 |
| https://www.goodlord.com/tenant-solutions/professional-guarantor-service | Goodlord Guarantor Service | press | 2026-04-16 |
| https://www.landlordtoday.co.uk/breaking-news/2026/02/guarantor-service-launched-by-tech-platform-goodlord/ | Goodlord Guarantor launch coverage | press | 2026-04-16 |
| https://tenanthelp.goodlord.co/s/article/Goodlord-referencing-for-guarantors-explained | Goodlord — overseas guarantor exclusion | operator | 2026-04-16 |
