# Proposals — UNCLE (Realstar) + Outpost (Enclave) (2026-04-16)

These two operators were paired in the research batch because of their geographic adjacency (UNCLE Acton + Enclave: Acton in the same Perfume Factory scheme), but they are **corporately distinct** and need independent operator-level qualification blocks.

---

## UNCLE (Realstar) — operator-wide qualification block

Apply to: `uncle-acton` only (sole UNCLE project in dataset).

```ts
qualification: {
  agreement_type: "ast",
  referencing_provider: "in-house",  // low confidence; FAQ uses "our" language but doesn't name provider
  min_tenancy_months: 6,  // verbatim FAQ: "6 months is our minimum up to a maximum of 3 years"
  income_multiple: null,  // "28x" mentioned in batch brief but not verified on public FAQ
  open_banking_accepted: "unclear",
  upfront_rent_policy: "one-month-ast-cap",
  accepts_professional_guarantor: "unclear",  // ** deciding question for this operator **
  accepts_individual_overseas_guarantor: "unclear",
  credit_check: "standard",  // FAQ says "usual credit, ID, landlord and employer reference checks"
  international_tenant_policy: "accepted-case-by-case",  // Right-to-Rent via passport/visa
  visa_expiry_handling: "unclear",
  qualification_flexibility_signal: "unclear",
  realism_pathways: [],
  grad_visa_realism: "unclear",  // downgrade from authored "achievable-with-guarantor" — too many unverified fields
  research_status: "partial",
  notes: "UNCLE (Realstar) is a strong BTR operator with 11 locations, 6-month minimum, high HomeViews scores. Qualification policy is thin on the public FAQ — income multiple, referencing provider, Housing Hand / Guarantid acceptance, overseas guarantor, visa handling are all unverified. Direct enquiry to UNCLE Acton is the single action that could flip the verdict to achievable-with-guarantor (if Housing Hand or Guarantid accepted) or unlikely (if not). Priority enquiry target — North Acton is in Caner's active consideration set.",
  sources: [
    { url: "https://uncle.co.uk/faq/", label: "UNCLE FAQ", type: "operator", accessed_date: "2026-04-16" },
    { url: "https://uncle.co.uk/acton/", label: "UNCLE Acton", type: "operator", accessed_date: "2026-04-16" },
    { url: "https://www.homeviews.com/company/uncle-realstar-living", label: "HomeViews — UNCLE/Realstar", type: "homeviews", accessed_date: "2026-04-16" },
  ],
}
```

### Per-project changes

#### `uncle-acton` (north-acton.ts)

- `realism: "achievable-with-guarantor"` → `"unclear"` (per the >3-unclear-fields rule). This is a downgrade of the current authored state. **Flag for user confirmation** — the authored state was a reasonable bet but isn't defensible under the schema rules.
- Apply operator-wide qualification block above
- **Fix developer field:** `"Telford Homes (CBRE subsidiary)"` → `"Telford Homes (CBRE Investment Management)"` (CBRE IM owns Telford Homes; it's not a CBRE-group subsidiary in the corporate-structure sense)
- Keep pricing: 1-bed from £2,130 pcm, listed price transparency ✓

Blast radius: minor — `north-acton.ts` lines 46-60.

---

## Outpost Management / Enclave (BlackRock JV) — operator-wide qualification block

Apply to: `enclave-acton`, `enclave-croydon`, `enclave-kx`.

**Critical upstream issue:** `enclave-kx` is currently mis-attributed to Argent. See the wrong-operator section below.

### For the co-living locations (Enclave Acton + Enclave Croydon)

```ts
qualification: {
  agreement_type: "licence",  // co-living standard; but verify — Enclave KX is premium BTR and may be AST
  referencing_provider: "in-house",  // co-living operators typically run in-house; low confidence
  min_tenancy_months: 3,  // co-living standard; Enclave FAQ to verify
  income_multiple: null,  // not published
  open_banking_accepted: "unclear",
  upfront_rent_policy: "multi-month-available",  // licence → upfront legal
  accepts_professional_guarantor: "unclear",
  accepts_individual_overseas_guarantor: "unclear",
  credit_check: "lenient",  // co-living / all-inclusive models typically lighter
  international_tenant_policy: "welcomed",  // co-living model targets international mobility
  visa_expiry_handling: "unclear",
  qualification_flexibility_signal: "unclear",
  realism_pathways: ["with-upfront-licence", "licence-exempt-light-ref"],  // assumed; verify
  grad_visa_realism: "licence-exempt",  // per pathway priority rule
  research_status: "partial",
  notes: "Outpost Management / Enclave operates under BlackRock Alternatives JV. Co-living / all-inclusive rental positioning suggests licence agreement shape with multi-month upfront viable, but this is INFERRED not verified on public pages. Direct enquiry needed to confirm agreement type, referencing provider, Housing Hand acceptance, and specific qualification gates.",
  sources: [
    { url: "https://www.outpostmgt.com/news.html", label: "Outpost Management news", type: "operator", accessed_date: "2026-04-16" },
    { url: "https://www.outpostmgt.com/EnclaveLaunchPress.html", label: "Outpost — Enclave brand launch", type: "operator", accessed_date: "2026-04-16" },
    { url: "https://realassets.ipe.com/news/blackrock-and-outposts-uk-residential-partnership-adds-462-unit-project/10071728.article", label: "BlackRock + Outpost £500m JV", type: "press", accessed_date: "2026-04-16" },
  ],
}
```

### Per-project changes — Outpost / Enclave

#### `enclave-acton` (north-acton.ts)

- Currently `realism: "achievable"` and `living_model: "co-living"` ✓
- Apply Outpost operator-wide block above, adjusted for co-living tier
- Preserve the current `"achievable"` if the authored state reflects real insight (all-inclusive pricing, lighter referencing) — flag for user confirmation whether to downgrade to `"licence-exempt"` or leave as `"achievable"`.

#### `enclave-croydon` (croydon.ts)

- Currently `realism: "achievable-with-guarantor"` — may be upgradable to `"licence-exempt"` if the co-living model holds
- Apply Outpost block, verify against Croydon's specific qualification page
- Current pricing: 1-bed from £2,230 pcm, listed ✓

#### `enclave-kx` (kings-cross.ts) — **WRONG-OPERATOR FLAG, CATEGORY B**

**Current dataset state (incorrect):**
- `developer: "Argent"`, `operator: "Argent"`
- Qualification block authored under Argent-style assumptions (strict credit, `grad_visa_realism: "unlikely"`)

**Correct attribution:**
- `developer: "Argent"` (Argent developed the block — keep)
- `operator: "Outpost Management (Enclave brand) / BlackRock"` (Outpost operates rentals per their own press release, BlackRock is JV partner)

**Proposed correction:**
- `operator: "Argent"` → `operator: "Outpost Management (Enclave brand) / BlackRock"`
- **Re-research the qualification block** under the correct operator. Current block assumes Argent's strict processes (30x, strict credit, 6-month upfront ceiling, etc.) — Outpost's BTR policy may differ materially. This is a **full re-research** not a simple flip.
- Temporary state until re-researched: apply the Outpost operator-wide block above, but note as `research_status: "partial"` pending confirmation that Enclave KX runs the same referencing stack as Enclave Acton / Enclave Croydon
- Preserve `realism: "unlikely"` as a cautious interim until verified — Enclave KX is premium BTR priced £3,800+ for a 1-bed, which may indicate standard AST referencing rather than co-living light-touch

**Blast radius for Enclave KX correction:**
- `kings-cross.ts` line 160 (project def)
- `kings-cross.ts` line 165 (headline "Argent's flagship BTR block" → rewrite)
- `kings-cross.ts` line 254 (long_form.full — multiple Argent references throughout)
- `kings-cross.ts` line 256 (living_experience)
- `kings-cross.ts` line 283 (t2_6 "Argent BTR build standard")
- `kings-cross.ts` line 302 (grade_reasoning)
- `kings-cross.ts` line 1525 (area-level T1 "Enclave KX as the core Argent BTR block")
- `kings-cross.ts` `external_links` — verify URLs pointing to Argent pages; Enclave KX lives at `enclave.com/locations/kings-cross` (already in dataset line 308)

**Grade-impact:** Low. Enclave KX remains A-grade based on amenity package + location. The authored `"unlikely"` realism stays as interim until verified.

---

## Summary of structural changes for this batch

| Action | Project | Category | Confidence |
|---|---|---|---|
| Downgrade realism to `"unclear"` | `uncle-acton` | Schema rule (≥4 unclear) | High |
| Fix developer parenthetical | `uncle-acton` | Accuracy | High |
| Correct operator attribution | `enclave-kx` | Cat B wrong-operator | High |
| Rewrite Argent-branded narrative in Kings Cross area | `kings-cross.ts` multiple lines | Cascading correction | High |
| Apply Outpost operator block (interim) | `enclave-kx` | Interim pending re-research | Medium |

## Ghost-project check — Outpost / Enclave

Verified real:
- Enclave: Acton — operating since 2025 ✓
- Enclave: Croydon — operating since Sep 2025 ✓
- Enclave: KX — operating since 2022 (wrong-operator, not ghost) ✓

## Sources summary

See `operators/uncle-realstar.md` for full source table.
