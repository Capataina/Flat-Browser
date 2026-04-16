# Proposals — Folio London (2026-04-16)

## Operator-wide qualification block

Apply to every Folio London project (currently: Rathbone Market).

```ts
qualification: {
  agreement_type: "ast",
  referencing_provider: "in-house",
  min_tenancy_months: 12,
  income_multiple: 30,
  open_banking_accepted: "yes",  // for self-employed income verification only
  upfront_rent_policy: "one-month-ast-cap",
  accepts_professional_guarantor: "no",
  accepts_individual_overseas_guarantor: "no",
  credit_check: "standard",
  international_tenant_policy: "accepted-case-by-case",
  visa_expiry_handling: "unclear",
  qualification_flexibility_signal: "standard",
  realism_pathways: [],
  grad_visa_realism: "blocked",
  research_status: "complete",
  notes: "Folio London (Notting Hill Genesis BTR arm) requires a UK-homeowner guarantor with 30x rent income when affordability fails. No corporate guarantor service endorsed; no overseas co-signer route. Open Banking is available only for self-employed income verification inside the standard affordability model — it does not substitute for missing UK credit history. Caner cannot clear either the direct affordability gate or the guarantor fallback.",
  sources: [
    { url: "https://foliolondon.co.uk/", label: "Folio London homepage", type: "operator", accessed_date: "2026-04-16" },
    { url: "https://folioflexi.focus-mars.co.uk/wp-content/uploads/2024/05/Folio-London-Reservation-Form-for-Rent-Under-1500.pdf", label: "Folio London Reservation Agreement", type: "operator", accessed_date: "2026-04-16" },
  ],
}
```

## Per-project changes

### `rathbone-market` (canning-town.ts) — Real, set blocked

- `realism: "unknown"` → `"blocked"`
- Apply operator-wide qualification block above
- Notes capture the UK-homeowner-guarantor specific block reason

Blast radius: minor — `canning-town.ts` lines 193-274 (project def + external_links).

## Area-level cross-reference — Royal Wharf

- `royal-wharf-and-docks.ts` line 16 + line 165: references Folio London managing 265 rental apartments at Royal Wharf. This is an area-narrative mention, not a standalone dataset project — no direct action needed, but the Royal Wharf area should note that any Folio portion of the Ballymore rental stack inherits the Folio block policy.

## Ghost-project check

No ghosts found under Folio. Rathbone Market is verified real.

## Sources summary

See `operators/folio-london.md` for full source table.
