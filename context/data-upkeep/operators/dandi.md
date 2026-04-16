# Dandi — research notes

**Date of research:** 2026-04-16
**Agent batch:** Licence-based co-living operators (scope audit — Dandi turns out to be AST-adjacent)
**Research scope:** Operator-level qualification policy for Dandi's Wembley and Battersea buildings.

---

## Operator identity and status

Dandi operates two London buildings currently relevant to the dataset:

| Building | Area | Dataset ID |
|---|---|---|
| Dandi Wembley | Wembley Park (but not currently in dataset under Dandi operator — the batch prompt flags this as Dandi Wembley) | (not in dataset as `dandi-wembley`) |
| Dandi Battersea | Clapham Junction (Haydon Way, SW11) | `dandi-battersea` in `clapham-junction.ts` |

Brand website: `dandi.com`. Portfolio pages: `dandi.com/cityliving/dandi-wembley/`, `dandi.com/cityliving/dandi-battersea/`.

**Dataset status:** Only Dandi Battersea (`dandi-battersea`) exists in the dataset — tagged `realism: "licence-exempt"`. The batch prompt cites Dandi Wembley as the research target, which is NOT in the dataset. I'll research Dandi operator policies at the brand level and apply to Dandi Battersea; Dandi Wembley is a future addition.

## Structural qualification policy

Dandi presents more like a **standard BTR** than a licence-exempt co-living operator despite co-living branding.

### From Dandi Wembley's application flow (rnrwembley.co.uk — the Right Now Residential letting site for Dandi Wembley):

- **Letting agent:** Right Now Residential (trading as rnrwembley.co.uk for Dandi Wembley). Dandi's own domain (`dandi.com`) links into this letting site for applications.
- **Application form** requests: name, current address, postcode, email, mobile, employer name / place of study, job details.
- **Tenancy length** options: 12 to 48 months (standard AST terms).
- **Deposit:** Dandi uses **Reposit** (deposit replacement scheme) as default — applicant pays a one-off non-refundable fee of ~1 week's rent; traditional 5-week deposit is an alternative.
- **Other tools:** Foxtons is mentioned as a partner in some listings (for Dandi Wembley specifically).

### From dandi.com/faqs/:

> "Instead of a large upfront deposit, you pay a one-time, non-refundable fee (usually one week's rent)."

(Dandi confirms Reposit usage and traditional 5-week deposit alternative. FAQ does not address credit checks, income proof, guarantor requirements, licence-vs-AST, right to rent, or employment verification.)

### Interpretation

Dandi's structure matches standard BTR + Reposit:
- **AST tenancy** (12-48 month terms; Right Now Residential application form pattern matches standard private-rental agent flow)
- **Traditional referencing** likely — employer details on the application form indicate credit/employment verification happens
- **Goodlord-class referencing** likely — not explicitly named but Right Now Residential uses standard agent referencing stacks
- **Reposit deposit** is a TENANT-FRIENDLY innovation but doesn't change the referencing gate

The co-living branding on `dandi.com/cityliving/` is marketing — the actual agreement is AST.

### Qualification field summary

| Field | Value | Evidence |
|---|---|---|
| `agreement_type` | `ast` | 12-48 month Right Now Residential application flow; standard tenancy structure |
| `referencing_provider` | `unclear` | Not named explicitly; Right Now Residential is the letting agent at Dandi Wembley, Foxtons mentioned as partner. Likely Goodlord. |
| `min_tenancy_months` | `12` | AST minimum per Right Now Residential flow |
| `income_multiple` | `null` | Not published; likely 30× standard |
| `open_banking_accepted` | `unclear` | Not addressed |
| `upfront_rent_policy` | `one-month-ast-cap` | Post-RRA AST cap; no licence regime |
| `accepts_professional_guarantor` | `unclear` | Not addressed by Dandi directly; Right Now Residential's policy not public |
| `accepts_individual_overseas_guarantor` | `unclear` | Not addressed |
| `credit_check` | `standard` | Standard agent referencing via Right Now Residential / Foxtons |
| `international_tenant_policy` | `accepted-case-by-case` | No explicit welcome; standard BTR posture |
| `visa_expiry_handling` | `unclear` | Not addressed |
| `qualification_flexibility_signal` | `unclear` | No signal surfaced either way |

## Pricing (Dandi Battersea — from dataset)

- Studios from ~£1,750/month all-inclusive
- Licence-like branding but AST reality
- `price_transparency: "listed"`

## Realism derivation (Caner)

No pathway clears:

- `standard-passable`: multiple fields `unclear`, AST — FAIL
- `with-professional-guarantor`, `with-savings`, `with-co-signer-overseas`: all `unclear` — FAIL
- `with-upfront-licence`: AST — FAIL
- `licence-exempt-light-ref`: AST — FAIL

**realism_pathways: []**

**grad_visa_realism recommendation:** `"unlikely"` — Dandi is structurally standard BTR post-RRA with no published alternative pathways. The co-living branding is misleading (same class as the Vonder-Fraser-Bond correction).

**The current dataset tag is `realism: "licence-exempt"`** — this is a CORRECTION candidate. The Battersea preview says "Licence agreement — Right to Rent check only, no formal credit/income referencing" — research does not support that claim. Right Now Residential's application flow explicitly asks for employer and job details, which are credit/employment verification inputs. This looks like **another mistagged licence case similar to Vonder Wembley**.

## Flex signals

None surfaced. The Right Now Residential / Foxtons / Goodlord stack is standard BTR — Caner's profile without payslips is structurally adverse.

## Ghost-project check

Dandi Battersea confirmed at `dandi.com/cityliving/dandi-battersea/` — exists. Dandi Wembley confirmed at `dandi.com/cityliving/dandi-wembley/` and `rnrwembley.co.uk` — exists but not in current dataset.

## Sources

- https://dandi.com/ — brand homepage
- https://dandi.com/faqs/ — FAQ (Reposit detail)
- https://dandi.com/cityliving/dandi-battersea/ — Battersea building page
- https://dandi.com/cityliving/dandi-wembley/ — Wembley building page
- https://rnrwembley.co.uk/application/ — Right Now Residential's Dandi Wembley application form (operator reality)
- https://rightnowresidential.co.uk/developments/dandi-wembley/ — RNR's Dandi Wembley listing
- https://www.buildington.co.uk/buildings/9333/england/london-ha9/21-empire-way/dandi-wembley — independent building info

All accessed 2026-04-16.

## Open questions for direct enquiry

1. Actual referencing provider (Goodlord?)
2. Income multiple threshold
3. Guarantor service acceptance (Guarantid, Housing Hand)?
4. Overseas guarantor or co-signer policy
5. Visa-expiry handling
