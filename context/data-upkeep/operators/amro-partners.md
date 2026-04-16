# Amro Partners — Operator Findings

**Researched:** 2026-04-16
**Project count in dataset:** 1 (Croydon)
**Verdict:** BTR developer and emerging operator (AmroLiving). Dataset project has since pivoted from BTR to aparthotel — flag for user correction.

---

## What Amro Partners actually is

Amro Partners (full name: Amro Real Estate Partners Limited) is a UK real estate investment firm with £1bn+ AUM across student housing (PBSA), multi-family (BTR), and co-living, operating in the UK, Spain and Portugal. Their rental operating arm is **AmroLiving** (amroliving.com), which manages the multi-family and co-living portfolio.

Current UK BTR footprint (2026):
- **The Wiltern, Ealing** — £95m, 251-unit (278 apartment) scheme forward-funded by PIC for £90m in 2021; 197 private rent + 65 Discounted Market Rent + 16 London Living Rent affordable units. Completed / under delivery.
- **Canbury Place, Kingston** — co-living scheme
- **Former Croydon Park Hotel site** — originally 447-unit BTR; **as of March 2026 repositioned as an aparthotel** (per Estates Gazette 21 March 2026 and Serviced Apartment News). Completion pushed to Q1 2027.
- **Lewisham retail park** — £400m / 1,000+ unit BTR scheme, acquired from L&G; pipeline.

So AmroLiving is a real BTR brand — but:
1. Thin portfolio (one operating BTR: The Wiltern).
2. Published qualification policies are minimal — AmroLiving's site is a brand shell rather than a rich FAQ.
3. They are a developer-operator in the British Land / L&G mould rather than a policy-published operator like Quintain or Get Living.

---

## Dataset attribution issue — The Croydon project pivoted to aparthotel

This is the critical finding from this research.

**Dataset entry (src/areas/data/croydon.ts):**
```
id: "amro-croydon-btr"
operator: "Amro Partners"
building_type: "BTR"
build_phase: "future"
preview: "Planning secured for purpose-built BTR near East Croydon station..."
```

**Current reality (2026 press):**
- Amro has abandoned the 447-unit BTR plan
- Repositioned as an aparthotel ("retaining the extant frame for ESG reasons")
- Completion now Q1 2027
- Will be a licence-based aparthotel operation, not AST BTR

This is not a ghost project in the strict sense (the building is real and Amro still developing it) but it **is a wrong-building-type attribution** that affects the qualification block significantly:

| Field | If BTR (current dataset) | If aparthotel (current reality) |
|---|---|---|
| `agreement_type` | `ast` | `licence` |
| `min_tenancy_months` | 12 | 1 |
| `upfront_rent_policy` | `one-month-ast-cap` | `multi-month-available` |
| `grad_visa_realism` | `unknown` / `unlikely` | `licence-exempt` |

**Recommendation:** flag this project for user review at Phase 3. The cleanest correction is to either:
- Update `building_type: "aparthotel"` and re-derive the qualification block under the aparthotel shape, or
- Rename the project "Amro Croydon (aparthotel, formerly planned BTR)" with a tombstone-style note and mark as `"future"` with `research_status: "partial"` until the aparthotel operator is confirmed (Amro direct or a branded hotel partner).

For the v1 pass, I'm proposing conservative: keep `operator: "Amro Partners"`, keep `building_type: "BTR"` but set `research_status: "partial"` and narrative-note the pivot. The structural building-type change needs user confirmation.

---

## AmroLiving qualification stack (for the portfolio generally)

Research attempted via AmroLiving's site — thin FAQ. The Wiltern's rental page offers enquire-only pricing and doesn't surface a referencing provider, guarantor policy, or international-tenant language. Amro Partners' corporate site (amropartners.com) is developer-facing (investor relations, press).

Given the absence of a published stack:
- Agreement type: likely `ast` for The Wiltern (standard BTR).
- Referencing: likely Goodlord or Homeppl — not stated publicly. Mark `"unclear"`.
- Guarantor: not addressed on the public site. `"unclear"`.

AmroLiving's operational maturity is too thin to characterise confidently operator-wide. Per the playbook's rule: if >3 structural fields are `"unclear"` or `"unknown"`, realism is `"unclear"` regardless of pathway derivation.

---

## Ghost-project check

The Croydon BTR project **does exist** (Amro owns the site, planning secured, construction active) but has been **repositioned as aparthotel**. This is Category D (rebranded / pivoted) in ghost-project-detection.md, closer to a conceptual-pivot than a rename. Flag for user review in Phase 3.

---

## Sources

- https://www.amropartners.com/projects/ — accessed 2026-04-16 (operator portfolio)
- https://www.amropartners.com/2022/01/19/amro-partners-acquires-croydon-park-hotel-for-btr-project/ — accessed 2026-04-16 (original BTR acquisition)
- https://servicedapartmentnews.com/news/property/amro-croydon-aparthotel-repositioned/ — accessed 2026-04-16 (pivot from BTR to aparthotel)
- https://eg.mydigitalpublication.co.uk/publication/?i=862381&article_id=5129555 — Estates Gazette 21 March 2026 (aparthotel confirmation)
- https://www.propertyweek.com/news/amro-launches-500m-btr-platform-with-two-london-sites — £500m BTR platform background
- https://realassets.ipe.com/news/amro-partners-flemyn-to-develop-200m-south-london-btr-project/10057519.article — Flemyn JV context
- https://www.amroliving.com/ — accessed 2026-04-16 (operating brand shell, thin on policy)
