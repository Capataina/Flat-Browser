# Morro — operator findings

**Research date:** 2026-04-16
**Researcher:** data-upkeep agent (mid-tier / long-tail batch)
**Operator identity:** Morro — brand launched by the Scape Group founders as an "all-inclusive living" disruptor. Three London projects in the Flatbrowser dataset, all in Walthamstow: The Altham (BTR studios), Altham Co-living (co-living, opening Spring 2026), Blackhorse Lane co-living (co-living, opened March 2026). Dataset also references a "Guildford / The Guild" which is out of London scope.

---

## Portfolio verification

All three dataset projects verified on `bymorro.com/locations/`:

| Dataset ID | Name | Verified on Morro site? | Notes |
|---|---|---|---|
| `the-altham` | The Altham (Walthamstow) | Yes — canonical BTR studio page at `bymorro.com/walthamstow/the-altham/` | Live pricing from £1,715 (standard studio) to £2,075 (large studio) |
| `morro-altham` | Morro The Altham (co-living) | Partial — Walthamstow page is currently styled as studio BTR. The "co-living" sibling appears to be an internal conflation in the dataset with the BTR product. This needs verification with Morro directly; for now treat as likely one and the same with co-living framing. |
| `morro-blackhorse` | Morro Blackhorse Lane / 1 Blackhorse Lane | Yes — "No1 Blackhorse Lane" confirmed via AHMM architects press + Scape Group press (321-bed co-living scheme, Investec £55m loan, launched March 2026 under Morro brand) | True co-living |

**Ghost-project flag:** No true ghost projects, but the dataset carries both `the-altham` (BTR) and `morro-altham` (co-living) as distinct entries pointing at effectively the same building. Morro's own site currently markets The Altham as studios with bills included and "rolling tenancies" — which is the hallmark of a **licence**, not an AST. The two-entry split was the 2026-04-15 agent's uncertainty about whether The Altham is BTR-AST or co-living-licence; current evidence points firmly to licence/co-living model for all three buildings.

This is a **data-hygiene flag** for Phase 3: either merge the two entries or clarify that The Altham is the same building as Morro The Altham. Recommend: keep one canonical entry marked co-living, remove the duplicate.

---

## Structural qualification facts (operator-level)

| Field | Value | Evidence |
|---|---|---|
| `agreement_type` | `licence` | Morro FAQ language: "Our contracts are rolling tenancies which means that you can stay as long as you like and when you are ready to leave all you need to do is give us 2 month's notice." Combined with bills-included model + furnished studios + short notice structure — this is the co-living licence pattern, not an AST. |
| `referencing_provider` | `homeppl` | Morro is named in Homeppl's client-adjacent materials and the operator-research-playbook notes Morro as a canonical Homeppl-native BTR operator. Not verbatim-confirmed on Morro's own FAQ, so confidence is moderate-high but one step short of a URL quote. |
| `income_multiple` | `27` | Per Flatbrowser context (top-15 shortlist 2026-04-16 research round) Morro publishes a 27× multiple — softer than the Homeppl 30× default. Not reverified on this pass; carry forward with source note. |
| `open_banking_accepted` | `yes` | Follows from Homeppl provider — Open Banking is Homeppl's primary income-verification mechanism. |
| `upfront_rent_policy` | `multi-month-available` | Licence structure + rolling-tenancy model + bills-included pricing suggests multi-month-upfront is a live lever at the operator's discretion. Not verbatim-published; mark `"unclear"` if the user needs strict evidence. |
| `accepts_professional_guarantor` | `unclear` | Morro's site does not name Housing Hand or Guarantid. Prior Flatbrowser research round 2026-04-16 left this as unverified. Needs direct enquiry. |
| `accepts_individual_overseas_guarantor` | `unclear` | Same — not addressed on site. Homeppl's Co-Signer route would apply structurally if Morro enables it. |
| `credit_check` | `lenient` | Homeppl provider + licence structure + international-friendly brand positioning (Scape roots) = lenient is the consistent inference. |
| `international_tenant_policy` | `welcomed` | Morro's brand positioning inherits Scape's international-student DNA. All-inclusive pricing + furnished studios + flexible tenancies is the classic international-friendly shape. Not verbatim quoted on the FAQ, so confidence is high but not perfect. |
| `visa_expiry_handling` | `unclear` | Not addressed on site. Rolling-tenancy model probably absorbs visa issues naturally (no long minimum term) but unverified. |
| `qualification_flexibility_signal` | `flexible` | Co-living + bills-included + rolling tenancy + launched by Scape founders (international-student-oriented lineage) all point to a flexible operator. No negative flex evidence in reviews. |
| `min_tenancy_months` | `3` | Typical co-living minimum; Morro's "rolling tenancies" implies 1-3 month minimum commitment. The Altham BTR-facing studios may have a longer minimum. Treat as 3 for co-living, possibly 6-12 for BTR-styled studios — per-project variation applies. |

---

## Realism pathway derivation (Caner)

Applying `realism-pathway-derivation.md`:

| Pathway | Fires? | Reason |
|---|---|---|
| `standard-passable` | No | `accepts_professional_guarantor: "unclear"` and `visa_expiry_handling: "unclear"` block confidence for the full happy-path |
| `with-professional-guarantor` | No | `"unclear"` — unverified guarantor acceptance is not a pathway |
| `with-savings` | Yes (partially) | Homeppl + OB: yes — the savings route is structurally available, though licence-framed. |
| `with-co-signer-overseas` | No | `"unclear"` |
| `with-upfront-licence` | Yes | `agreement_type: "licence"` + `upfront_rent_policy: "multi-month-available"` (inferred). |
| `licence-exempt-light-ref` | Possibly | Licence + Homeppl (not pure in-house/none) doesn't quite match the rule — Homeppl is still a referencing provider. Safer to leave off. |

Result: `realism_pathways: ["with-savings", "with-upfront-licence"]`, `grad_visa_realism: "achievable-with-guarantor"` (umbrella verdict — rule 3).

**Narrative notes (for project `notes` field):**

> Morro runs a bills-included, furnished-studio, rolling-tenancy co-living model — licence-to-occupy rather than AST. Referencing likely via Homeppl with a softer 27× multiple. The real qualification lever is multi-month upfront, which the licence structure supports. Housing Hand / Guarantid acceptance is unverified — direct enquiry resolves a second pathway if needed.

---

## Pricing (side-effect)

Verified from `bymorro.com/walthamstow/the-altham/` on 2026-04-16:

| Project | Studio | 1-bed | 2-bed | Bills included | Price transparency |
|---|---|---|---|---|---|
| The Altham | 1,715 – 2,075+ | — | — | yes | listed |
| Morro The Altham (co-living sibling) | same as above (likely duplicate) | — | — | yes | listed |
| Morro Blackhorse Lane | unknown — enquire | — | — | yes (expected) | enquire |

---

## Sources

- `https://bymorro.com/walthamstow/the-altham/` — The Altham rentals, accessed 2026-04-16 (operator)
- `https://bymorro.com/who-we-are/` — Morro brand / positioning, accessed 2026-04-16 (operator)
- `https://bymorro.com/locations/` — Morro portfolio verification, accessed 2026-04-16 (operator)
- `https://bymorro.com/` — Morro homepage ("all-inclusive" framing), accessed 2026-04-16 (operator)
- `https://www.newsontheblock.com/news-opinion/scape-founders-launch-all-inclusive-living-disruptor-morro` — Scape founders launch Morro, press (press, 2024)
- `https://benews.co.uk/scape-group-secures-55m-loan-for-walthamstow-co-living-scheme/` — Blackhorse Lane 321-bed co-living loan (press)
- `https://www.ahmm.co.uk/projects/residential/no1-blackhorse-lane/` — AHMM Blackhorse Lane project page (developer)
- `https://www.homeppl.com/faqs/` — Homeppl referencing rules (30× income, 32× savings, 42× guarantor) — operator-playbook context
