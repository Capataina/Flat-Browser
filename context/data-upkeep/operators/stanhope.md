# Stanhope — findings

**Batch:** 2026-04-16 regeneration-masterplan operators
**Agent:** research-only
**Accessed:** 2026-04-16

---

## Summary

**Stanhope is a developer and development-manager, not a residential operator.** Their own homepage describes them as "developers and asset managers" — they originate, design, deliver, and manage places, but they do not run residential lettings directly. Their major London projects include Television Centre (with Mitsui Fudosan), White City Place, Ruskin Square (with Schroders), 8 Bishopsgate, Oxford North, Tate Modern, Chiswick Park, Bloomberg London, Warwick Court, and Central Saint Giles.

**This means Stanhope is a Category B wrong-operator attribution everywhere the dataset names them as `operator`.** The actual rental operator per building must be researched separately. Below is the breakdown for each dataset project tagged with Stanhope as operator.

---

## Per-project reality check

### Television Centre (`television-centre`, area `white-city`)
- **Developer:** Mitsui Fudosan + Stanhope (JV; AIMCo also a Phase 1 investor — exited Phase 2 in 2026)
- **Phase 1 owners:** AIMCo + Mitsui Fudosan (includes Helios residential building, 2 Television Centre offices, 1 Wood Crescent, Soho House)
- **Residential actual operator:** **Not a single BTR operator.** The Helios and Crescent buildings are for-sale stock (BTS). Individual flats are let on the secondary market via various agents (Savills, Knight Frank, Hamptons, Benhams, etc.)
- **Phase 2 (511 homes across 4 plots):** In delivery for 2026 completion — operator / BTR-or-BTS split not yet finalised publicly
- **Dataset impact:** `operator: "Stanhope"` is wrong. Should be `operator: "Various agents"` with secondary-market defaults.

### The Ariel (`the-ariel`, area `white-city`)
- **Developer:** Mitsui Fudosan / Stanhope
- **Residential actual operator:** Part of the Television Centre Phase 1 complex — same secondary-market letting pattern
- **Dataset impact:** Same — `operator: "Various agents"`, secondary-market defaults

### Scenery House (`scenery-house`, area `white-city`)
- **Developer:** Mitsui Fudosan / Stanhope (Phase 2 in-delivery)
- **Residential actual operator:** Part of Phase 2 — 2026 completion — operator TBD. Could be BTS with secondary-market letting (following Phase 1 pattern) or could be BTR with a named operator (not yet announced)
- **Dataset impact:** Keep `operator: "Stanhope"` but flag as `"unclear"` pending Phase 2 completion + operator announcement. More accurate placeholder is `operator: "unknown"` with note

### Vita Apartments (Ruskin Square) (`vita-apartments`, area `croydon`)
- **Developer:** Stanhope + Schroders
- **Operator (already in dataset):** `"Various"` — correctly flagged as secondary-market
- **Dataset impact:** No change needed; already reflects secondary-market reality

### Other Stanhope-named projects
- **International Quarter London (Stratford)** — this is **Lendlease + LCR**, not Stanhope. Brief's attribution is incorrect
- **Here East** — operated by the Here East campus management company (mostly commercial/workspace, not residential for rent as a BTR scheme)

---

## Operator shape

Because Stanhope is a developer not an operator, the qualification block is not researchable at the Stanhope level. Every project currently tagged `operator: "Stanhope"` must be evaluated as **secondary-market** (individual landlords letting via agents) unless a specific BTR operator takes over a phase.

**Secondary-market defaults per `operator-research-playbook.md`:**

| Field | Value |
|---|---|
| `agreement_type` | `ast` |
| `referencing_provider` | `unclear` |
| `open_banking_accepted` | `unclear` |
| `income_multiple` | `null` |
| `accepts_professional_guarantor` | `unclear` |
| `accepts_individual_overseas_guarantor` | `unclear` |
| `upfront_rent_policy` | `one-month-ast-cap` |
| `credit_check` | `unclear` |
| `international_tenant_policy` | `accepted-case-by-case` |
| `visa_expiry_handling` | `unclear` |
| `qualification_flexibility_signal` | `unclear` |
| `min_tenancy_months` | `null` |
| `grad_visa_realism` | `unlikely` (playbook default for secondary-market / individual landlord) |

---

## Ghost-project flags

**Category B — wrong-operator attribution (3 projects):**
1. `television-centre` (area `white-city`) — `operator: "Stanhope"` is wrong. Primary owner is Mitsui Fudosan (+ AIMCo Phase 1). Rentals are secondary-market via agents.
2. `the-ariel` (area `white-city`) — same pattern.
3. `scenery-house` (area `white-city`) — in-delivery; operator TBD. Propose `operator: "unknown"` (placeholder) with note "Operator TBD — Phase 2 completion 2026."

**No Category A (true ghost) flags.** All buildings exist.

**Grade-impact assessment:** White City T1.4 reasoning cites "Mitsui Fudosan/Stanhope operates Television Centre — two major managed landlord operators with corporate referencing." The first half (Mitsui Fudosan presence) is correct as ownership, but the "managed landlord operators with corporate referencing" claim is **wrong for Television Centre** — Phase 1 is for-sale stock let via various agents. T1.4 should be softened to reflect the reality that the Berkeley/St James side (White City Living) is the real BTR pillar, and Television Centre is more owner-occupier plus secondary-market letting.

---

## Sources

1. `https://stanhopeplc.com/` — "developers and asset managers" self-description; project list (accessed 2026-04-16)
2. `https://mitsuifudosan.co.uk/portfolio/television-centre-w12/` — Mitsui Fudosan's portfolio page for Television Centre (accessed 2026-04-16)
3. `https://www.bisnow.com/london/news/other/aimco-exits-second-phase-of-500m-broadcasting-house-scheme-after-selling-stake-to-co-investor-113967` — 2026 news on AIMCo Phase 2 exit
4. `https://constructionmaguk.co.uk/stanhope-and-mitsui-fudosan-to-start-phase-2-of-television-centre/` — Phase 2 start announcement (BTS-coded across 4 plots)
5. `https://www.multiplex.global/news/construction-commences-on-new-homes-at-television-centre-for-phase-2-of-the-masterplan-in-white-city-london/` — Multiplex press on Phase 2 homes
6. `https://www.benhams.com/new-developments/television-centre-london/` — Benhams confirming Television Centre as a for-sale/rent development let via multiple agents
7. `https://televisioncentre.com/our-story/` — official Television Centre site
8. `https://www.lendlease.com/uk/projects/international-quarter-london/` — confirming IQL is Lendlease, not Stanhope (correcting brief's attribution)
