# Knight Dragon / Greenwich Peninsula Living — findings

**Batch:** 2026-04-16 regeneration-masterplan operators
**Agent:** research-only
**Accessed:** 2026-04-16

---

## Summary

Knight Dragon is both the developer and (via branded lettings arm **Greenwich Peninsula Living**) the direct rental operator for the majority of residential stock on Greenwich Peninsula. Knight Dragon itself is primarily a Hong Kong-capitalised developer; day-to-day lettings are run by Greenwich Peninsula Living, which is ARLA-accredited.

Unlike Lendlease, Knight Dragon's operating shape is less well documented publicly. The site carries only surface-level content about the application process (ARLA accreditation, an affordability calculator, a 1-week holding deposit + 5-week tenancy deposit). No referencing provider, income multiple, guarantor policy, or international-tenant language is published. **The 2026-04-16 shortlist research noted "£2,250 1-bed at The Waterman" as a verified price point and "BTR-focused" operator — ARLA accreditation plus the multi-building portfolio confirm professional operator status**, but the qualification details below a certain tier are not public.

The batch of five projects in the brief (The Waterman, Peninsula Gardens, Upper Riverside, Lower Riverside, Central Park) partially matches the dataset. Greenwich Peninsula Living's portfolio page (confirmed via lettings page) lists three districts:

- **Upper Riverside** — No. 1-5 + Cutter Lane buildings (matches `upper-riverside-1-3` + `upper-riverside-4-5` in dataset)
- **Lower Riverside** — Peninsula Gardens (multiple addresses), The Lighterman, The Waterman (matches `peninsula-gardens` + `the-waterman` in dataset; `The Lighterman` is **not** in dataset)
- **Parkside** — Roper, The Moore (**neither is in dataset** — may be what the brief means by "Central Park")

The brief's "Central Park" and "Lower Riverside" are not direct project entries — they are **district-level groupings** on the operator's site, containing buildings. Peninsula Gardens is a Lower Riverside complex; The Waterman is also Lower Riverside. Central Park / Parkside contains Roper and The Moore, which are new phases not yet in the dataset.

---

## Operator shape

Knight Dragon / Greenwich Peninsula Living sits in an **ambiguous-BTR** bucket — confirmed professional operator with ARLA accreditation and multi-building portfolio, but none of the qualification-friendly signals (Homeppl, verbatim guarantor acceptance, Open Banking, lenient credit) are publicly stated.

| Dimension | Value | Evidence |
|---|---|---|
| Agreement type | `ast` | Standard BTR structure; 5-week deposit + 1-week holding deposit is AST-standard |
| Referencing provider | `unclear` | Not publicly named. No Homeppl case study listing Knight Dragon; no Goodlord mention |
| Open Banking | `unclear` | Not mentioned |
| Income multiple | `unclear` | Affordability calculator exists but numbers not published |
| Guarantor — professional | `unclear` | Not addressed on site |
| Guarantor — overseas individual | `unclear` | Not addressed |
| Credit check | `unclear` | Standard UK credit reference implied by generic "referencing" language |
| International tenant policy | `unclear` | Not addressed |
| Visa expiry handling | `unclear` | Not addressed |
| Minimum tenancy | `unclear` | Not stated; BTR-standard 12 is default assumption |
| Upfront rent policy | `one-month-ast-cap` | Inferred from `agreement_type: "ast"` post-RRA |
| Flexibility signal | `unclear` | HomeViews reviews present but behavioural-flex cases not indexed in search |
| ARLA accreditation | Yes | Verbatim "fully accredited ARLA member" on `greenwichpeninsulaliving.co.uk/about/` |

**Structural fields unclear/unknown count: 8+** — exceeds the 3-threshold that forces `grad_visa_realism: "unclear"` per the derivation rules. Pathway array should be `[]`, verdict `"unclear"` with note explaining that direct enquiry is the only way to resolve qualification.

---

## Realism pathway derivation

All pathway tests fail because every prerequisite field is `"unclear"` or missing:

| Pathway | Result |
|---|---|
| `standard-passable` | ❌ requires all four positive — all `unclear` |
| `with-professional-guarantor` | ❌ `unclear` |
| `with-savings` | ❌ needs Homeppl confirmed |
| `with-co-signer-overseas` | ❌ `unclear` |
| `with-upfront-licence` | ❌ AST |
| `licence-exempt-light-ref` | ❌ AST |

**Pathway array:** `[]`
**Suggested `grad_visa_realism`:** `"unclear"` (forced by ≥4 unclear/unknown structural fields)

---

## Per-project verification

| Dataset project | Verified on operator portfolio? | Notes |
|---|---|---|
| `upper-riverside-1-3` (Upper Riverside No.1 to No.3) | ✅ | Listed under Upper Riverside district |
| `upper-riverside-4-5` (Upper Riverside No.4 & No.5) | ✅ | Listed; No.4 has Tom Dixon page; No.5 SOM |
| `the-waterman` | ✅ | Listed under Lower Riverside |
| `peninsula-gardens` | ✅ | Listed — multiple addresses at Pilot Walk, Mabyn Lane, Chandlers Avenue |
| `peninsula-riverfront` | ⚠️ | **Not a distinct building on the operator's site.** Preview text acknowledges "May overlap with existing Upper Riverside entries." This is a likely duplicate / synonym for the Upper Riverside set. Consider flagging for consolidation or renaming, not deletion |
| `morden-wharf` | N/A — operator is Galliard/CDL, not Knight Dragon | No change; future phase |

**Also on operator's site but missing from dataset:**
- **The Lighterman** (Lower Riverside) — not in dataset
- **Roper** (Parkside) — not in dataset
- **The Moore** (Parkside) — not in dataset

These are Phase-1-discovery additions — out of v1 scope unless flagged.

---

## Pricing (side-effect)

From `greenwichpeninsulaliving.co.uk/lettings/` (accessed 2026-04-16):

| Unit type | Range |
|---|---|
| Studios | £1,900–£2,150/month |
| 1-bed | £1,500–£2,600/month |
| 2-bed | £2,050–£3,500/month |
| 3-bed | £4,600/month (single example) |

The £1,500 1-bed floor is an outlier — likely smaller or lower-amenity stock. The £2,250 figure in 2026-04-16 shortlist memory for The Waterman 1-bed sits cleanly within this range. Bills generally not included at Knight Dragon's price point (BTR-standard) but not explicitly stated.

Recommended per-project pricing to apply:

| Project | 1-bed min | 1-bed max | Notes | `price_transparency` |
|---|---|---|---|---|
| `the-waterman` | 2,250 | 2,600 | Shortlist memory + operator range | `listed` |
| `peninsula-gardens` | 1,900 | 2,400 | Lower-Riverside newer stock | `listed` |
| `upper-riverside-1-3` | 2,100 | 2,800 | Premium riverside — existing preview estimate | `listed` |
| `upper-riverside-4-5` | 2,500 | 3,500 | Flagship Tom Dixon / SOM | `listed` |
| `peninsula-riverfront` | 2,500 | 3,500 | Overlap with Upper Riverside — conservative range | `listed` |

Caveat: the operator's public lettings page shows a range, not per-building numbers. The per-building allocation above is extrapolation from preview text + general range bands. **If greater precision is needed, a direct availability snapshot would require logging into the booking portal.**

---

## Ghost-project flags

**Category D — rebranded / duplicate within portfolio:**
- `peninsula-riverfront` overlaps with the Upper Riverside set. The existing preview acknowledges this. Recommend flagging for user review — either merge into `upper-riverside-1-3` or `upper-riverside-4-5` with a consolidated name, or keep as a distinct Riverfront-cluster entry but cross-reference the Upper Riverside overlap in `notes`.

**Category A/B/C:** None — all confirmed.

**Grade-impact assessment:** Greenwich Peninsula T1.4 reasoning cites Knight Dragon running "the majority of residential stock with corporate referencing." This remains true — Greenwich Peninsula Living is the corporate operator. Qualification unclear does not invalidate T1.4 (which is about professional-rental-market presence, not about Caner-friendly qualification).

---

## Sources

1. `https://www.greenwichpeninsulaliving.co.uk/lettings/` — building list across Upper Riverside, Lower Riverside, Parkside districts; rental price ranges (accessed 2026-04-16)
2. `https://www.greenwichpeninsulaliving.co.uk/about/` — ARLA accreditation statement (accessed 2026-04-16)
3. `https://www.greenwichpeninsulaliving.co.uk/tenants/` — 1-week holding deposit, 5-week tenancy deposit; affordability calculator mention (accessed 2026-04-16)
4. `https://www.greenwichpeninsula.co.uk/property/residential/no-4-by-knight-dragon/` — No.4 by Knight Dragon (Tom Dixon) page
5. `https://www.homeviews.com/company/greenwich-peninsula` — resident reviews (not deeply sampled; no flex-case signal surfaced in search)
6. 2026-04-16 shortlist research — verified "BTR-focused at The Waterman (£2,250 1-bed)" and ARLA accreditation (LifeOS memory)
