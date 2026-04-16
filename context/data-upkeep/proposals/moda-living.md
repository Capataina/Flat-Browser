# Proposals — Moda Living (2026-04-16)

## Operator-wide qualification block

Apply to every Moda Living project (currently: Embassy Boulevard).

```ts
qualification: {
  agreement_type: "ast",
  referencing_provider: "canopy",
  min_tenancy_months: 12,
  income_multiple: 30,
  open_banking_accepted: "unclear",
  upfront_rent_policy: "one-month-ast-cap",
  accepts_professional_guarantor: "unclear",
  accepts_individual_overseas_guarantor: "no",
  credit_check: "strict",
  international_tenant_policy: "accepted-case-by-case",
  visa_expiry_handling: "unclear",
  qualification_flexibility_signal: "rigid",
  realism_pathways: [],
  grad_visa_realism: "blocked",
  research_status: "complete",
  notes: "Moda's Experian 561+ credit-score floor (verbatim on casa.moda/qualification-criteria) is a hard block for applicants without UK credit history. Canopy RentPassport rejects thin files at the first gate regardless of income or savings. Upfront-rent workaround dies post-RRA for ASTs (1 May 2026). No corporate guarantor endorsement; no overseas-guarantor route.",
  sources: [
    { url: "https://casa.moda/qualification-criteria", label: "Moda/Casa qualification criteria", type: "operator", accessed_date: "2026-04-16" },
    { url: "https://www.propertyweek.com/news/moda-living-teams-up-with-canopy-to-roll-out-tenant-verification-app", label: "Property Week - Moda + Canopy", type: "press", accessed_date: "2026-04-16" },
    { url: "https://btrnews.co.uk/canopy-provides-moda-with-financial-awareness-digital-platform/", label: "BTR News - Canopy at Moda", type: "press", accessed_date: "2026-04-16" },
  ],
}
```

## Per-project changes

### `embassy-boulevard` (nine-elms.ts) — Real, update realism

- `realism: "achievable-with-guarantor"` → `"blocked"`
- Apply operator-wide qualification block above
- Preview reference to "2.66x income multiple" — verify and clarify: 2.66x annual rent = 32x monthly rent ≈ 30x gross. Reconcile with Moda's 30x published multiple.
- Update area-level comment in `nine-elms.ts` line 319 from "Moda may use Homeppl — not confirmed for London" to "Moda uses Canopy RentPassport. Experian 561+ floor = hard block."

### `the-stage-ec2` (old-street-hoxton.ts) — **WRONG-OPERATOR FLAG**

**Category B correction needed.** The Stage EC2 is developed by Galliard Homes; rental is individual-landlord / Rhodium-managed, not Moda Living.

Recommended change (pending user confirmation):
- `operator: "Moda Living"` → `"Various agents"` OR `"Rhodium / Various agents"`
- `building_type: "BTR"` → `"Mixed"`
- `realism: "unknown"` → `"unlikely"` (secondary-market default)
- Apply secondary-market qualification block per playbook
- Update preview: remove "Moda Living BTR at Shoreditch edge. Tier 8 operator with referencing opacity." — rewrite as individual-landlord-managed framing.
- Update area-level references in `old-street-hoxton.ts` lines 105, 107

Blast radius:
- `old-street-hoxton.ts` line 8 (project def operator)
- `old-street-hoxton.ts` line 9 (preview)
- `old-street-hoxton.ts` line 12 (t2_6 reasoning mentions Moda Living management)
- `old-street-hoxton.ts` line 105 (T1.2 reasoning: "The Stage (Moda Living)...")
- `old-street-hoxton.ts` line 107 (T1.4 reasoning: "The Stage is Moda Living BTR (Tier 8)...")

## Pricing side-effects

- Embassy Boulevard: studio from £2,680, 1-bed from £3,140, 2-bed from £3,575 (verbatim from Moda Living London page, dataset already reflects)
- The Stage EC2: studio ~£2,750 pcm visible on OTM/Rightmove listings (individual-landlord pricing varies)

## Ghost-project check

- "Moda Springbank" — **not in dataset.** Correctly excluded (Springbank is Moda's Leeds scheme).
- Moda Bermondsey "Studio Living" (283 studios) — mentioned in `brent-cross-town.ts` research comment; confirm whether this has been added as a lettable project anywhere in the dataset. If not yet built or lettable, leave as pipeline note.

## Sources summary

See `operators/moda-living.md` for full source table.
