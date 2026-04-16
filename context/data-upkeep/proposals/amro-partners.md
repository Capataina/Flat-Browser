# Proposals — Amro Partners

## Classification finding

Amro Partners is a real BTR developer-operator via its AmroLiving brand, but:
1. Its operating portfolio is thin (one completed BTR — The Wiltern, Ealing)
2. Published qualification policy is minimal
3. **The single dataset project (Amro Partners Croydon BTR) has pivoted from BTR to aparthotel as of March 2026** — flag for user review

## Operator-level facts (apply to Amro BTR projects)

| Field | Value | Source / Reasoning |
|---|---|---|
| `agreement_type` | `unclear` | Published nowhere for Amro; inferred `ast` for standard BTR but unverified. |
| `referencing_provider` | `unclear` | Not published on AmroLiving site. |
| `open_banking_accepted` | `unclear` | Not addressed. |
| `min_tenancy_months` | `12` | Standard BTR default; The Wiltern enquire-only. |
| `income_multiple` | `30` | Standard BTR default. |
| `upfront_rent_policy` | `one-month-ast-cap` | If AST — post-RRA cap. |
| `accepts_professional_guarantor` | `unclear` | Not addressed. |
| `accepts_individual_overseas_guarantor` | `unclear` | Not addressed. |
| `credit_check` | `unclear` | Not published. |
| `international_tenant_policy` | `unclear` | Not addressed. |
| `visa_expiry_handling` | `unclear` | Not addressed. |
| `qualification_flexibility_signal` | `unclear` | Insufficient signal — too-thin portfolio for HomeViews/Trustpilot coverage. |

With 9+ fields `"unclear"`, realism must be `"unclear"` per playbook rule ("if >3 fields are `unclear`/`unknown`, grad_visa_realism is `unclear` regardless of pathway derivation").

## Realism pathway suggestions

`realism_pathways: []` — no pathway can be confidently added.

## Per-project proposals

| Project | Proposed `grad_visa_realism` | `research_status` | Notes |
|---|---|---|---|
| Amro Partners Croydon BTR | **`unclear`** (from `unknown`) | `partial` | **FLAG: pivoted from BTR to aparthotel.** See below. |

## Ghost-project / correction flags

**Flag for user review — Category D (rebranded / pivoted):**

Project `amro-croydon-btr` in `src/areas/data/croydon.ts` is authored as `building_type: "BTR"` with preview "Planning secured for purpose-built BTR near East Croydon station. Targeting BREEAM Outstanding — would be Croydon's first. Pre-construction."

**Current reality (March 2026):** Amro Partners has abandoned the 447-unit BTR scheme and repositioned the development as an **aparthotel**. Completion pushed to Q1 2027. Sources:
- Estates Gazette, 21 March 2026
- Serviced Apartment News (servicedapartmentnews.com)
- Implied by Amro's recent press silence on the BTR scheme since early 2025

**Recommended corrections (user confirm):**
1. Change `building_type: "BTR"` → `"aparthotel"` (or equivalent)
2. Rename to "Amro Partners Croydon (aparthotel, formerly planned BTR)" or similar
3. Update `preview` to reflect the pivot
4. Once confirmed as aparthotel: re-derive qualification block under aparthotel defaults (`agreement_type: "licence"`, `min_tenancy_months: 1`, `grad_visa_realism: "licence-exempt"` once aparthotel operator confirmed).
5. Update `evaluation_reasoning.t2_6_building_quality` note — BREEAM Outstanding claim may no longer apply under the retrofit approach.

**Not applied in this proposal** — the building-type change is structural and needs explicit confirmation.

## Pricing

Not captured — The Wiltern is enquire-only and Croydon project is pre-operational.

## Notes (narrative)

> Amro Partners is a mid-sized BTR developer with a thin operating portfolio (The Wiltern, Ealing) and no published qualification policy. The Croydon project in this dataset was announced as a 447-unit BTR but has been repositioned to an aparthotel as of March 2026, with completion delayed to Q1 2027 — treat current BTR classification as stale until confirmed. Until Amro publishes AmroLiving FAQ or the project's operator is confirmed, qualification is unclear and direct enquiry would be premature anyway (pre-operational).

## Sources

- https://www.amropartners.com/projects/ — accessed 2026-04-16
- https://www.amropartners.com/2022/01/19/amro-partners-acquires-croydon-park-hotel-for-btr-project/ — accessed 2026-04-16
- https://servicedapartmentnews.com/news/property/amro-croydon-aparthotel-repositioned/ — accessed 2026-04-16 (pivot evidence)
- https://eg.mydigitalpublication.co.uk/publication/?i=862381&article_id=5129555 — Estates Gazette 21 March 2026
- https://www.amroliving.com/ — accessed 2026-04-16 (brand shell)
