# Proposals — Locke (Staycity / Edyn)

**Operator batch:** Locke apart-hotel portfolio
**Date:** 2026-04-16
**Projects covered:** `kingsland-locke` (dalston), `bermonds-locke` (borough-london-bridge), `ember-locke` (earls-court)

---

## Operator-level proposed qualification block

Applies identically to all three projects below. Derived from the research in `context/data-upkeep/operators/locke.md`.

| Field | Proposed value | Source |
|---|---|---|
| `agreement_type` | `"licence"` | Edyn/Staycity T&Cs — booking terms, not tenancy agreement |
| `referencing_provider` | `"none"` | ID + payment card only at check-in |
| `min_tenancy_months` | `1` | Nightly bookable; 29+ night Monthly rate structure |
| `income_multiple` | `null` | Not applicable |
| `open_banking_accepted` | `"no"` | Not applicable |
| `upfront_rent_policy` | `"multi-month-available"` | Full-stay or 20% deposit at booking |
| `accepts_professional_guarantor` | `"no"` | Not applicable (no guarantor requested) |
| `accepts_individual_overseas_guarantor` | `"no"` | Not applicable |
| `credit_check` | `"none"` | Payment card validity substitutes |
| `international_tenant_policy` | `"welcomed"` | International traveller is core customer |
| `visa_expiry_handling` | `"ignored"` | Licence — visa dates not referenced |
| `qualification_flexibility_signal` | `"flexible"` | Active "Stay Longer" relocator programme |
| `realism_pathways` | `["licence-exempt-light-ref", "with-upfront-licence"]` | Both clear |
| `grad_visa_realism` | `"licence-exempt"` | Derived — unchanged from current |
| `research_status` | `"complete"` | |

---

## Per-project proposals

### `kingsland-locke` (dalston)

**Current:** operator = `"Locke (Staycity)"`, realism = `"licence-exempt"`, external_links point to `lockeliving.com/en/london/kingsland-locke`

**Proposed changes:**

1. **Operator attribution — needs user decision.** Building transferred from Edyn (Locke) to Staycity Group on 27 January 2025 and has been rebranded **Staycity London Dalston**. Three options:
   - (a) Rename to `"Staycity"` + update name to `"Staycity London Dalston (ex-Kingsland Locke)"` — reflects current operator
   - (b) Keep `"Locke (Staycity)"` but add note — preserves continuity
   - (c) Dual-operator attribution `"Staycity (ex-Locke)"` — compromise
   - **Recommendation:** (a). The brand is now "Staycity Aparthotels" and customer-facing URL is staycity.com/london/dalston. Mis-attribution risks sending Caner to a page that no longer represents the operator.
2. **External URL update:** add `https://www.staycity.com/london/dalston` alongside or in place of the lockeliving URL.
3. **Qualification block:** apply operator-level values above.
4. **Pricing:** No change — prior data of ~£3,900/mo all-inclusive appears consistent with Staycity's 30%-off long-stay discount applied to Dalston's nightly rack. Confirm on listed page. `price_transparency: "listed"`.

### `bermonds-locke` (borough-london-bridge)

**Current:** operator = `"Locke (Staycity)"`, realism = `"licence-exempt"`, `price_transparency: "enquire"`

**Proposed changes:**

1. **Operator attribution:** Edyn still operates Bermonds Locke — the Jan 2025 Staycity transfer only covered Kingsland. Attribution is **technically wrong** — should be `"Locke (Edyn)"` not `"Locke (Staycity)"`. Propose rename to `"Locke (Edyn)"` OR simply `"Locke"`.
2. **Qualification block:** apply operator-level values.
3. **Pricing:** Stay-longer monthly rate published on lockeliving.com/en/london/bermonds-locke/stay-longer. Update `price_transparency: "listed"` — the page does publish monthly rates via the booking engine (29+ night Monthly tier).

### `ember-locke` (earls-court)

**Current:** operator = `"Locke (Staycity)"`, realism = `"licence-exempt"`, `price_transparency: "enquire"`

**Proposed changes:**

1. **Operator attribution:** Edyn still operates. Same rename proposal as Bermonds — `"Locke (Edyn)"` or `"Locke"`.
2. **Qualification block:** apply operator-level values.
3. **Pricing:** No change. Current preview of ~£3,000–5,000/month is consistent with Ember Locke's premium positioning in Earl's Court.

---

## Narrative notes (for `project.notes`)

> Hospitality-licence apart-hotel operated by Edyn (or Staycity for Kingsland, post-Jan-2025 rebrand). No tenant referencing — just valid ID and a payment card at check-in. All-inclusive monthly rate with a 20% extended-stay discount for 29+ nights. Structurally zero-friction for graduate-visa applicants; realism is `licence-exempt` via the `licence-exempt-light-ref` pathway. Best use-case is as a bridge tier — 28-night landing pad — rather than a 2-3 year home, because nightly-rate structures are not optimised for very long tenures.

---

## Ghost-project flags

1. **"Locke de Santa Joaquina" does not exist.** The batch prompt named this project but no such Locke property exists in London. If this name ever surfaces in the dataset, flag for deletion with tombstone. Likely agent confabulation — name pattern ("de Santa Joaquina") suggests possible conflation with a hotel in a different city or fabrication.

2. **"Locke at Broken Wharf" exists but is not in the dataset.** Real property in Central London / City. Candidate for future addition if a City of London coverage area is added. Not a ghost — an omission.

---

## Sources

- https://www.lockeliving.com/en/london
- https://www.lockeliving.com/en/types-of-stay/extended-stay-and-rental-accommodation
- https://www.lockeliving.com/en/london/bermonds-locke/stay-longer
- https://www.lockeliving.com/en/london/locke-at-broken-wharf/stay-longer
- https://www.staycity.com/staycity-takes-on-lease-on-edyns-kingsland-locke-in-london
- https://www.staycity.com/london/dalston
- https://www.lockeliving.com/en/help/making-a-booking/what-payment-methods-do-you-accept
- https://www.lockeliving.com/en/help/arrival-and-departure/checking-in-and-checking-out

All accessed 2026-04-16.
