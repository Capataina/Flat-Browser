# Proposals — Peabody + The Trampery

**Operator:** Peabody Trust (housing association with BTR / market-rent arm). The Trampery is a separate workspace/co-working operator integrated at Fish Island Village.
**Date:** 2026-04-16
**Projects in scope:** `neptune-wharf` (hackney-wick), `fish-island-village` (hackney-wick)

---

## Operator-level qualification block (Peabody, applied to both projects)

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `"ast"` | Standard for Peabody private market rent |
| `referencing_provider` | `"in-house"` | Peabody runs own lettings; no third-party provider named |
| `min_tenancy_months` | `12` (inferred) | Standard AST; Peabody-specific minimum not published |
| `income_multiple` | `"unclear"` | Not published for market rent |
| `open_banking_accepted` | `"unclear"` | Not addressed |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + RRA |
| `accepts_professional_guarantor` | `"unclear"` | Weakly positive — "suitable guarantor may be considered" if credit check fails, but corporate-services acceptance is not explicit |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Not addressed |
| `credit_check` | `"standard"` | IMR Fact Sheet confirms |
| `international_tenant_policy` | `"accepted-case-by-case"` | Right-to-rent compliant, no explicit international welcome |
| `visa_expiry_handling` | `"unclear"` | Not addressed |
| `qualification_flexibility_signal` | `"unclear"` | Published guarantor-if-credit-fails language is a thin positive; no stronger signal either way |
| `realism_pathways` | `[]` | No pathway clears under strict derivation (too many fields unclear) |
| `grad_visa_realism` | `"unknown"` — **preserve current** | Too much opacity to derive confidently |
| `research_status` | `"complete"` (within operator's published limits) | |

---

## Per-project proposals

### `neptune-wharf` (hackney-wick)

**Current:** operator=`"Peabody"`, realism=`"unknown"`, building_type=`"BTR"`, tenure=`["rent"]`

**Proposed changes:**
1. Apply operator-level qualification block above.
2. **Preserve `realism: "unknown"`** — the opacity of Peabody's market-rent qualification process is genuine; direct enquiry is the only path to resolve it. This is explicit authored state, not a research failure.
3. Add `notes`:
   > Peabody-managed BTR at Neptune Wharf, part of the Fish Island / Hackney Wick creative-quarter masterplan. 501 homes mixed-tenure. Peabody's published IMR Fact Sheet notes that a "suitable guarantor may be considered" if credit check fails — a weak but positive flex signal, narrower than operators who name corporate guarantor services explicitly. Qualification is opaque; direct enquiry to Peabody lettings is the only way to resolve referencing provider, income multiple, and whether corporate guarantor services are accepted.

### `fish-island-village` (hackney-wick)

**Current:** operator=`"Peabody / The Trampery"`, realism=`"unknown"`, building_type=`"Mixed"`, architects=["Haworth Tompkins"]

**Proposed changes:**
1. **Operator attribution nuance:** The Trampery operates the workspace / co-working component at Fish Island Village (63 workspace studios, 30-desk co-working, manufacturing suite) — NOT the residential. For accuracy, the residential operator is Peabody alone. Consider renaming to `operator: "Peabody"` with `amenities` / `notes` capturing The Trampery integration.
   - **Counter-argument:** current "Peabody / The Trampery" attribution reflects the genuine community-led / workspace-integrated character of the scheme, which is architecturally significant (Haworth Tompkins Stirling-Prize practice, Housing Design Awards).
   - **Recommendation:** leave current attribution but document the distinction in notes.
2. Apply operator-level qualification block above (for the residential component).
3. **Preserve `realism: "unknown"`**.
4. Add `notes`:
   > Haworth Tompkins-designed masterplan — 588 homes across 17 linked blocks, mixed tenure (private market rent, shared ownership, affordable). Peabody operates the residential; The Trampery operates the integrated workspace (63 studios, co-working, maker space, restaurant, event space). Strong architectural credentials — Housing Design Awards, RIBAJ coverage, Stirling-Prize practice. Qualification for private market rent units is opaque as with all Peabody BTR — weak positive flex signal via published "suitable guarantor may be considered" language, but corporate services acceptance is unverified. Private rental for owner-occupier units typically goes via individual landlords.

---

## Ghost-project checks — no issues

Both projects verified in Peabody's project coverage (peabodynewhomes.co.uk family, Housing Design Awards, Haworth Tompkins portfolio). Clean matches.

The Trampery is a real operator — trampery.com active, Fish Island Village workspace confirmed in multiple independent sources.

---

## Sources

- https://www.peabody.org.uk/media/ylubmbec/imr-tenants-fact-sheet.pdf — canonical qualification source
- https://hdawards.org/scheme/neptune-wharf-fish-island/
- https://www.haworthtompkins.com/work/neptune-wharf-at-fish-island-village
- https://www.architectsjournal.co.uk/news/haworth-tompkins-final-phase-of-fish-island-village-approved
- https://www.peabodynewhomes.co.uk/developments/wisteria-apartments/
- https://www.trampery.com/

All accessed 2026-04-16.
