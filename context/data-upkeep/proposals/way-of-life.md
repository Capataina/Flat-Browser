# Proposals — Way of Life (2026-04-16)

## Operator-wide qualification block

Apply to every Way of Life project (currently: The Eades).

```ts
qualification: {
  agreement_type: "ast",
  referencing_provider: "goodlord",
  min_tenancy_months: 12,
  income_multiple: 30,
  open_banking_accepted: "unclear",
  upfront_rent_policy: "one-month-ast-cap",
  accepts_professional_guarantor: "no",  // Goodlord Guarantor uptake unverified; FAQ silent
  accepts_individual_overseas_guarantor: "no",  // "UK-based guarantor" verbatim; Goodlord cannot reference overseas
  credit_check: "standard",
  international_tenant_policy: "accepted-case-by-case",
  visa_expiry_handling: "unclear",
  qualification_flexibility_signal: "standard",
  realism_pathways: [],
  grad_visa_realism: "blocked",
  research_status: "complete",
  notes: "Way of Life's FAQ requires a UK-based guarantor OR 12 months of rent in advance. Post-RRA (1 May 2026) the 12-month upfront route dies for ASTs — advance rent capped at 1 month. Goodlord referencing cannot accept overseas guarantors. Goodlord Guarantor (professional-guarantor service launched Feb 2026) is a potential flip if Way of Life opts in, but their FAQ does not reference it — direct enquiry is the deciding question.",
  sources: [
    { url: "https://www.wayoflife.com/faqs/renting-faqs", label: "Way of Life Renting FAQs", type: "operator", accessed_date: "2026-04-16" },
    { url: "https://tenanthelp.goodlord.co/s/article/Goodlord-referencing-for-guarantors-explained", label: "Goodlord — overseas guarantor exclusion", type: "operator", accessed_date: "2026-04-16" },
    { url: "https://www.goodlord.com/tenant-solutions/professional-guarantor-service", label: "Goodlord Guarantor Service", type: "press", accessed_date: "2026-04-16" },
  ],
}
```

## Per-project changes

### `the-eades` (walthamstow.ts) — Real, set blocked with enquiry caveat

- `realism: "unknown"` → `"blocked"`
- Apply operator-wide qualification block above
- Verify pricing: website says 495 units opened Sep 2025. Dataset preview says "1-beds from approx £1,900 pcm" — should be spot-checked against current listings.
- Flag for user: **single enquiry email** to `hello@wayoflife.com` asking "Do you accept Goodlord Guarantor (professional guarantor) for applicants without a UK-based individual guarantor?" — a `yes` would flip The Eades from `blocked` to `achievable-with-guarantor`.

Blast radius: minor — `walthamstow.ts` lines 68-91.

## Ghost-project check

No ghosts found under Way of Life. The Eades is verified real (Tide Construction / Long Harbour / Assael Architecture / WayOfLife management).

Area-level mention in `brent-cross-town.ts` line 5 references other Way of Life properties (Balfron Tower, Bromley/Tower Hamlets, Tottenham Hale / The Sessile, Walthamstow / The Eades). These are not in the dataset as individual projects — they're operator-summary context. No ghost issue.

## Sources summary

See `operators/way-of-life.md` for full source table.
