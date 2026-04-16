# Proposals — Morro

## Operator-level facts (apply to every Morro project)

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `licence` | Rolling-tenancy + 2-month notice + bills-included co-living model. Verbatim: "Our contracts are rolling tenancies which means that you can stay as long as you like and when you are ready to leave all you need to do is give us 2 month's notice." Source: Morro FAQ surfaced via search 2026-04-16. |
| `referencing_provider` | `homeppl` | Per operator-research-playbook canonical list + Flatbrowser prior research; not verbatim on Morro FAQ. Moderate-high confidence. |
| `income_multiple` | `27` | Flatbrowser 2026-04-16 shortlist research (Morro publishes 27× — softer than Homeppl 30× default). |
| `open_banking_accepted` | `yes` | Homeppl provider → Open Banking is the primary verification mechanism. |
| `upfront_rent_policy` | `multi-month-available` | Licence structure allows multi-month advance rent post-RRA; consistent with co-living operator norms. |
| `accepts_professional_guarantor` | `unclear` | Not named on site; needs direct enquiry. |
| `accepts_individual_overseas_guarantor` | `unclear` | Not addressed on site. Homeppl Co-Signer route could apply. |
| `credit_check` | `lenient` | Homeppl + co-living + Scape lineage → consistent with lenient. |
| `international_tenant_policy` | `welcomed` | Scape-rooted all-inclusive international-friendly positioning. |
| `visa_expiry_handling` | `unclear` | Not addressed on site. Rolling model likely absorbs visa issues. |
| `qualification_flexibility_signal` | `flexible` | Co-living + bills-included + rolling tenancy + international DNA. |
| `min_tenancy_months` | `3` (co-living), possibly higher for The Altham BTR studio format | Per Morro rolling-tenancy language + co-living norm. |

## Realism pathway suggestions

- `with-savings` — Homeppl + OB: yes → fires
- `with-upfront-licence` — licence + multi-month-available → fires
- `with-professional-guarantor` — `unclear`, does not fire
- `with-co-signer-overseas` — `unclear`, does not fire
- `standard-passable` — blocked by `unclear` fields
- `licence-exempt-light-ref` — Homeppl isn't in-house/none → does not fire cleanly

**Suggested `realism_pathways`:** `["with-savings", "with-upfront-licence"]`
**Suggested `grad_visa_realism`:** `achievable-with-guarantor` (derives via rule 3)

## Per-project variations

| Project | Variation from operator defaults |
|---|---|
| `the-altham` (Walthamstow) — existing BTR entry | Dataset labels as `building_type: "BTR"` with `realism: "unknown"`. Actual product looks like furnished-studio licence co-living (same building as `morro-altham`). See ghost/data-hygiene flag below. `min_tenancy_months` possibly longer (6-12) than pure co-living. Studio prices: £1,715-£2,075+. |
| `morro-altham` (Walthamstow) — co-living sibling | Same building as `the-altham`. `realism: "licence-exempt"` currently carried. Should merge or de-duplicate. |
| `morro-blackhorse` (Walthamstow) | True co-living. Opened March 2026. `realism: "licence-exempt"` carried. Apply operator defaults; price enquire. |

## Pricing (side-effect)

| Project | studio | one_bed | two_bed | bills_included | price_transparency |
|---|---|---|---|---|---|
| `the-altham` | 1715-2075 | - | - | yes | listed |
| `morro-altham` | (duplicate) | - | - | yes | listed |
| `morro-blackhorse` | enquire | - | - | yes | enquire |

## Ghost-project flags / data-hygiene flags

**Flag 1 — Duplicate entry:** `the-altham` and `morro-altham` appear to be the same physical building (The Altham, Walthamstow, opposite Blackhorse Road station) carried twice under different `building_type` labels. Morro's site markets one Altham, which is a furnished-studio co-living product. **Recommendation:** Phase 3 should confirm with the user, then merge into one canonical entry (preserving `morro-altham` framing as co-living licence with pricing from the BTR entry).

**No true ghost projects** — all buildings verified.

## Notes (for project `notes` field)

> Morro runs a bills-included, furnished-studio, rolling-tenancy co-living model — licence-to-occupy rather than AST. Referencing likely via Homeppl with a softer 27× multiple. The real qualification lever is multi-month upfront, which the licence structure supports. Housing Hand / Guarantid acceptance is unverified — direct enquiry resolves a second pathway if needed.

## Sources

- https://bymorro.com/walthamstow/the-altham/ (accessed 2026-04-16, operator)
- https://bymorro.com/who-we-are/ (accessed 2026-04-16, operator)
- https://bymorro.com/locations/ (accessed 2026-04-16, operator)
- https://bymorro.com/ (accessed 2026-04-16, operator)
- https://www.newsontheblock.com/news-opinion/scape-founders-launch-all-inclusive-living-disruptor-morro (press)
- https://benews.co.uk/scape-group-secures-55m-loan-for-walthamstow-co-living-scheme/ (press)
- https://www.ahmm.co.uk/projects/residential/no1-blackhorse-lane/ (developer)
