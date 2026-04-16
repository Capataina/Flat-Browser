# Essential Living — Operator Research (2026-04-16)

## Summary verdict

Essential Living is a **shrinking operator**. Per the current press (BE News + CBRE press release) their London/SE portfolio review put three of four assets up for sale in 2026:

- **Union Wharf** (Greenwich) — **for sale**
- **Dressage Court** (Bethnal Green) — **for sale**
- **Berkshire House** (Maidenhead) — **for sale**
- **Vantage Point** (Islington / Archway) — **retained**, continuing operations

Historical qualification policy: UK-homeowner guarantor only, 30x income, no Open Banking, no corporate guarantor. Hard block.

But the bigger issue in the Flatbrowser dataset is a **ghost-project attribution**.

## Ghost-project flag: One Portal Way (North Acton)

### Dataset state

```ts
// src/areas/data/north-acton.ts line 19-31
const onePortalWay = buildProject({
  id: "one-portal-way", area_id: "north-acton", name: "One Portal Way",
  developer: "Essential Living", operator: "Essential Living",
  building_type: "BTR", build_phase: "complete", ...
  preview: "Essential Living BTR at North Acton. Operator-managed rental."
});
```

### Evidence against

1. **Essential Living's official portfolio does not include a North Acton property.** Their published and CBRE-marketed portfolio: Vantage Point (Islington), Dressage Court (Bethnal Green), Union Wharf (Greenwich), Berkshire House (Maidenhead). No Acton property, past or present.

2. **One Portal Way is Imperial College's land** — Imperial bought the site in 2016 through its endowment fund. The masterplan is a 17-acre regeneration at North Acton.

3. **One Portal Way is not yet built.** Per Opportunity London, "Phase 1 developer and investor procurement is happening in 2025-2026, with practical completion expected Q2 2027 – Q2 2031." Phase 1 is 461 BTR units in a 55-storey tower — **still in procurement**, not under construction, certainly not `build_phase: "complete"`.

4. **No Essential Living press release or news coverage associates the operator with One Portal Way.** Searches return zero cross-references.

### Category

**Category A — True ghost project** (fabricated BTR attribution). Per the ghost-project detection playbook, this is the highest-trust-impact flag category.

**Likely origin:** The 2026-04 sweep agent appears to have conflated "Essential Living has a property in X area" heuristics with the North Acton BTR cluster. Given the dataset's earlier hallucination pattern (Bermondsey Works / The Union in Bermondsey), this is consistent fabrication behaviour — the agent pattern-matched Essential Living into a BTR cluster without operator-portfolio verification.

### Proposal

- **Delete** `onePortalWay` project from `north-acton.ts`
- Remove from `northActon.projects` array
- Add tombstone comment:

```typescript
// REMOVED 2026-04-16: "One Portal Way" (Essential Living attribution)
// Ghost project. Essential Living's portfolio contains no North Acton property.
// One Portal Way is Imperial College endowment land (acquired 2016); Phase 1
// is still in developer/investor procurement (2025-2026) with practical
// completion no earlier than Q2 2027. The operator has not been selected.
// Consistent with the 2026-04-12 Essential Living hallucination pattern
// (Bermondsey Works / The Union). Verified against essentialliving.co.uk
// portfolio and opportunity.london/project/one-portal-way/.
```

- Check `north-acton.ts` area-level prose / T1 criterion reasoning for references to "Essential Living" and rewrite. If Essential Living is cited as an operator in the cluster, remove.
- Grade-impact: North Acton has other BTR (UNCLE Acton, Enclave Acton, One West Point) — removing the ghost doesn't drop the BTR count to zero. Area grade unlikely to need review.

## Operator-level qualification table (for Vantage Point only — the sole verified remaining Essential Living asset, not in dataset)

Not applicable to any current dataset project — Vantage Point is in Archway/Islington and isn't in the flatbrowser dataset as an Essential Living attribution. For reference if ever added:

| Field | Value |
|---|---|
| `agreement_type` | `"ast"` |
| `referencing_provider` | `"in-house"` |
| `min_tenancy_months` | `12` |
| `income_multiple` | `30` |
| `open_banking_accepted` | `"unclear"` |
| `upfront_rent_policy` | `"one-month-ast-cap"` |
| `accepts_professional_guarantor` | `"no"` |
| `accepts_individual_overseas_guarantor` | `"no"` |
| `credit_check` | `"standard"` |
| `international_tenant_policy` | `"accepted-case-by-case"` |
| `visa_expiry_handling` | `"unclear"` |
| `qualification_flexibility_signal` | `"rigid"` — historical UK-homeowner requirement is strict |
| `grad_visa_realism` | `"blocked"` if Vantage Point ever added |

## Cross-reference check for other Essential Living mentions

From the earlier grep (operator: "Essential Living"): only `one-portal-way` in `north-acton.ts` — single project attribution in the dataset.

Other mentions of "Essential Living" across `src/areas/data/`:
- `brent-cross-town.ts` line 6 — research comment listing Essential Living's four historical properties. Keep, update to reflect the for-sale/retained status.
- `wimbledon.ts`, `bermondsey.ts`, `nine-elms.ts` — likely historical comments from the 2026-04-12 cleanup (Bermondsey file explicitly tombstones the earlier Essential Living ghost projects). Verify these are tombstone comments only, not live project attributions.

## Sources

| URL | Label | Type | Accessed |
|---|---|---|---|
| https://benews.co.uk/essential-living-puts-portfolio-of-btr-assets-up-for-sale/ | BE News — Essential Living portfolio sale | press | 2026-04-16 |
| https://www.cbre.co.uk/press-releases/cbre-brings-london-and-south-east-stabilised-build-to-rent-portfolio-to-the-market | CBRE press release on Essential Living portfolio | press | 2026-04-16 |
| https://www.essentialliving.co.uk/developments/vantage-point/ | Essential Living — Vantage Point | operator | 2026-04-16 |
| https://www.essentialliving.co.uk/developments/dressage-court/ | Essential Living — Dressage Court | operator | 2026-04-16 |
| https://opportunity.london/project/one-portal-way/ | Opportunity London — One Portal Way | press | 2026-04-16 |
| https://www.oneportalway.co.uk/our-vision-and-proposals/ | One Portal Way masterplan site | developer | 2026-04-16 |
