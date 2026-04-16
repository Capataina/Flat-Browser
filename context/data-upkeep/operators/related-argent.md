# Related Argent — operator findings

**Research date:** 2026-04-16
**Researcher:** data-upkeep agent (mid-tier / long-tail batch)
**Operator identity:** Related Argent is the joint venture between Related (US multifamily / Hudson Yards developer) and Argent (UK developer, King's Cross). Masterplan developer of Brent Cross Town (180 acres, 6,700 homes planned) and Heart of Hale (Tottenham Hale, 1,032 homes).

Key nuance: Related Argent is primarily a **masterplan developer**, not a BTR operator in the Quintain / Greystar / Moda mould. For the BTR phases, they have:
- Started an in-house BTR operations team (Michael Herrington, Director of BTR Operations, ex-Related Rentals NYC)
- The Maple (Brent Cross Town) is operated by **Be Living** — a separate operator (Be Group)
- Heart of Hale's 1 Ferry Island and 2 Ferry Island are branded as Related Argent BTR but sit behind the `ferryislandn17.co.uk` rental site

---

## Portfolio verification

| Dataset project | Attributed operator | Verified? |
|---|---|---|
| `conductor-house` (Brent Cross Town) | "Various" | Affordable / London Living Rent within the masterplan — confirmed on Related Argent page |
| `the-delamarre` (Brent Cross Town) | "Related" | Private-sale (owner-lease) phase. Related Argent confirmed. |
| `the-ashbee` (Brent Cross Town) | "Related Argent" | Sibling to Delamarre, shares Claremont Park Club amenity. Confirmed. |
| `brent-cross-town-wider` | "Various" | Umbrella entry for unbuilt phases. Confirmed. |
| `1-ferry-island` (Tottenham Hale) | "Related Argent" | 108 BTR homes, Phase 1 of Heart of Hale, AHMM design. Site exists at `ferryislandn17.co.uk` (redirect from heartofhale.co.uk). Confirmed live. |
| `2-ferry-island` (Tottenham Hale) | "Related Argent" | Phase 2, 376 homes across two towers up to 38 storeys. Construction started Oct 2023, £243m ICG loan. In-delivery — not yet lettable as of 2026-04-16. |

No ghost projects. One in-delivery status (2 Ferry Island) to note — a **build-phase reality check** rather than a ghost flag.

---

## Structural qualification facts

Related Argent runs its own BTR operations but public documentation on referencing / guarantor / income policy is notably thin. The rental-facing site (`ferryislandn17.co.uk`) is 403-locked to scraping, and no public FAQ names a referencing provider.

| Field | Value | Evidence |
|---|---|---|
| `agreement_type` | `ast` | BTR product with long-term residential intent — AST is the default. |
| `referencing_provider` | `unclear` | Not named on any public Related Argent / Heart of Hale / Ferry Island page. Related Argent's own in-house BTR ops team (Herrington) may use Homeppl, Goodlord, or an in-house system — not disclosed. |
| `income_multiple` | `unclear` | Not published. Homeppl default 30× is the safe assumption if provider is Homeppl; otherwise unknown. |
| `open_banking_accepted` | `unclear` | Not addressed. |
| `upfront_rent_policy` | `one-month-ast-cap` | AST + post-RRA 2025 (in force from 1 May 2026) → 1-month advance rent cap. Default inference. |
| `accepts_professional_guarantor` | `unclear` | Not addressed on site. |
| `accepts_individual_overseas_guarantor` | `unclear` | Not addressed. |
| `credit_check` | `unclear` | Not stated. |
| `international_tenant_policy` | `unclear` | Not explicitly addressed. Related Argent's King's Cross pedigree implies general institutional-BTR openness but no verbatim language. |
| `visa_expiry_handling` | `unclear` | Not addressed. |
| `qualification_flexibility_signal` | `standard` | No flex or rigid signals — no HomeViews / Trustpilot review corpus sufficient for signal yet (buildings are new). |
| `min_tenancy_months` | `12` | Institutional BTR default. |

---

## Brent Cross Town — BTR availability check

The Maple (Be Living-operated, not Related Argent direct) is live. The Delamarre and The Ashbee are **sale products** (`tenure: ["buy"]`) — they don't fit Caner's rental requirement and are correctly marked `realism: "blocked"`. Conductor House is affordable/LLR, also not a rental-market-rate target. The "wider" masterplan entry is unbuilt.

**BTR availability in Brent Cross Town = The Maple only (Be Living operator, covered separately).**

## Heart of Hale (Tottenham Hale) — BTR availability

- 1 Ferry Island: 108 homes. Phase 1 complete. Live rental site at `ferryislandn17.co.uk`. Referencing opaque.
- 2 Ferry Island: 376 homes across two towers. Construction started Oct 2023. Expected completion circa 2026-2027. **Not yet lettable** — this is a future-state pipeline entry, not a 2026-move-in target.

---

## Realism pathway derivation (Caner)

Too many `"unclear"` fields to derive confidently. Applying the schema rule:

> if (sum of fields that are "unclear" or "unknown" > 3) { realism_pathways: []; grad_visa_realism: "unclear" }

Nine of the twelve structural fields land at `"unclear"`. This triggers the schema escape hatch:

**Suggested `realism_pathways`:** `[]`
**Suggested `grad_visa_realism`:** `unclear`
**Narrative:** "Too many qualification fields unverified — direct enquiry to Related Argent lettings team (or the Ferry Island site operator) needed before emailing."

---

## Per-project realism suggestions

| Project | Current `realism` | Suggested `realism` | Reason |
|---|---|---|---|
| `1-ferry-island` | `unknown` | `unclear` | Schema: >3 unclears → unclear. |
| `2-ferry-island` | `unknown` | `unclear` (with build-phase note: "in-delivery, not lettable 2026") | Same + build-phase reality. |
| `the-delamarre` | `blocked` | preserve `blocked` | Owner-lease, not rental-relevant. |
| `the-ashbee` | `blocked` | preserve `blocked` | Same — buy-only. |
| `conductor-house` | `achievable` | `unlikely` | Affordable / London Living Rent has eligibility gating (income caps, working-in-borough rules) that almost certainly exclude Caner. Current `achievable` verdict looks optimistic. Flag to user. |
| `brent-cross-town-wider` | `unknown` | `unclear` | Masterplan umbrella — not a specific product. |

**Flag for user review:** Conductor House's current `achievable` may be incorrect. Affordable/LLR products typically have local-connection + working-in-Barnet + household income cap requirements Caner does not meet (unemployed, Turkish, Graduate visa).

---

## Pricing (side-effect)

| Project | studio | one_bed | two_bed | bills_included | price_transparency |
|---|---|---|---|---|---|
| `the-delamarre` | - | - | - | n/a (sale) | listed |
| `the-ashbee` | - | - | - | n/a (sale) | listed |
| `conductor-house` | - | - | - | unknown | enquire |
| `1-ferry-island` | unknown | unknown | unknown | unknown | enquire (site 403-locked to scrape) |
| `2-ferry-island` | - | - | - | - | n/a (not-yet-lettable) |

No price updates — pricing could not be verified from public scraping.

---

## Sources

- `https://relatedargent.co.uk/news/heart-of-hale` — Heart of Hale news index, accessed 2026-04-16 (developer)
- `https://relatedargent.co.uk/2025/07/21/first-phase-of-over-500-home-btr-scheme-launches-at-brent-cross-town-as-rental-demand-grows` — The Maple launch (developer press)
- `https://www.related.com/our-company/properties/heart-hale` — Related's Heart of Hale page (developer)
- `https://heartofhale.co.uk/1-ferry-island` (redirects to `https://www.ferryislandn17.co.uk/`) — 1 Ferry Island rentals (operator; 403 on automated fetch)
- `https://www.icgam.com/2023/10/02/related-argent-expands-build-to-rent-portfolio-starting-construction-on-484-homes-at-tottenham-hale-with-243-million-loan-from-icg-real-estate/` — 2 Ferry Island construction start (press, ICG Real Estate)
- `https://www.brentcrosstownliving.co.uk/` — masterplan site (developer)
