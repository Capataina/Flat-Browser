# Berkeley Living — operator research notes

Research date: 2026-04-16.

---

## Summary

Berkeley Living is **Berkeley Group's BTR platform, launched in late 2024 / early 2026**. As of research date, Berkeley Living has a single live BTR product — **Foundry Yard at Alexandra Gate, Wood Green (N8)**. A further pipeline of ~4,000 BTR homes across 16-17 Berkeley regeneration sites is announced but not yet delivered (first deliveries from Kidbrooke, Silkstream, Horlicks Quarter expected late 2026 / 2027).

Critically for the dataset: **the 18 projects attributed to "Berkeley" in the enumeration are overwhelmingly Build-to-Sell (BTS) delivered under legacy Berkeley sub-brands (Berkeley Homes, St George, St James, St Edward, St Joseph, St William)**. These brands have been unified under "Berkeley" as of March 2026. The rentability of these projects is therefore almost entirely via the **secondary market** — individual owner-occupiers letting through agents — not through a Berkeley Living operator channel.

Foundry Yard is the exception and the only project in the 18-project Berkeley batch that is actually a Berkeley Living BTR product.

---

## Berkeley brand structure (as of March 2026)

| Legacy sub-brand | 2026 status | What it was | What it's now |
|---|---|---|---|
| Berkeley Homes | Absorbed | Core south-east residential developer | "Berkeley" |
| St George | Absorbed | High-quality mixed-use London regeneration | "Berkeley" |
| St James | Absorbed | JV with Thames Water; London residential | "Berkeley" |
| St Joseph | Absorbed | Midlands residential | "Berkeley" |
| St Edward | Absorbed | JV with M&G Real Estate | "Berkeley" |
| St William | Absorbed | JV with National Grid on ex-gasworks sites | "Berkeley" |
| **Berkeley Living** | **Live** | **BTR arm (new, 2024-2026)** | **"Berkeley Living"** |

Source: `berkeleygroup.co.uk/about-us/who-we-are/our-brands`, accessed 2026-04-16.

Implication for the dataset: the operator attributions "St George (Berkeley)", "St James", "St George / private landlords" are now **stale brand names**. They should still be retained in dataset history (projects were delivered under those sub-brands), but the current operator identity is "Berkeley" for the developer role and "private landlords / individual agents" for the rental operator role on the BTS stock.

---

## Foundry Yard — Berkeley Living's one live BTR

### Building facts

- Address: Alexandra Gate, Wood Green, London N8.
- Unit mix: studios, 1-bed, 2-bed, 3-bed.
- Delivered: opened early 2026 as Berkeley Living's first community.
- Amenities: indoor 25m-style pool (described as "indoor swimming pool"), yoga / spin studios, sauna, steam room, gym, co-working, residents' lounge, rooftop terrace with Alexandra Palace views.
- Stations: Hornsey (GTR), Turnpike Lane (Piccadilly), Alexandra Palace (GTR), Wood Green (Piccadilly) — four stations within walk.

### Pricing (from berkeleyliving.co.uk/foundry-yard + lovetorent.co.uk cross-check, accessed 2026-04-16)

| Unit type | From (pcm) | Size |
|---|---|---|
| Studio | £1,925 | ~455 sqft |
| 1-bed (smaller) | £1,900 | ~428 sqft |
| 1-bed (larger) | £2,200 | ~557 sqft |
| 2-bed | £2,525 | ~698 sqft |
| 3-bed | £3,475-3,500 | ~1,039 sqft |

Bills not included (standard BTR practice at this tier).

### Qualification — null finding

**Berkeley Living has no published FAQ, how-to-rent page, or qualification process documentation as of 2026-04-16.** Primary sources:

- `berkeleyliving.co.uk` (main operator site) — marketing copy only, no qualification detail
- `berkeleyliving.co.uk/foundry-yard` — returns 403 on direct fetch, but the mirror on lovetorent.co.uk contains only pricing / amenity / viewing info
- Rightmove Berkeley Living agent page — no referencing provider or qualification detail published
- Berkeley Group investor / press coverage — focused on portfolio strategy, not tenant-facing policy

No Homeppl, Goodlord, or Canopy partnership is publicly documented for Berkeley Living as of 2026-04-16. No professional-guarantor service acceptance is stated. No Open Banking mention. No international-tenant-policy statement. No visa-handling statement.

This is the opaque-operator shape described in the 2026-04-16 Top-15 research round's Berkeley Living line — the only realistic way to resolve qualification is direct enquiry. Applicants should expect:

- Standard AST agreement (Berkeley Group is institutional; BTR at Foundry Yard will be AST-shaped)
- Income multiple: industry-default 30× (unverified)
- Referencing provider: unknown; Berkeley Living is a new platform with limited operational history — the stack is being chosen now and may not settle for another 6-12 months
- Guarantor acceptance: unknown
- International tenants: unstated; given Berkeley's BTS track record of high overseas investor exposure, the BTR arm may be friendly by default, but this is inference not evidence

### Realism inference for Caner

All structural qualification fields should be marked `"unclear"` after this research pass. Caner's realism at Foundry Yard is `"unclear"` — cannot confidently declare "achievable-with-guarantor" without evidence of a professional-guarantor pathway, and cannot declare "unlikely" without evidence of a hard block. The correct action is direct enquiry to the Berkeley Living leasing team at Foundry Yard to ask:

1. Who is the referencing provider?
2. Does the 30× multiple apply and is it enforced on thin-credit international applicants?
3. Is a professional guarantor service (Housing Hand / Guarantid) accepted as an alternative to UK income / UK guarantor?
4. How is visa expiry handled — ignored, tenancy-shortened, or rejected?

Price-wise, Foundry Yard is genuinely attractive — £1,900-1,925 entry points at studio / smaller-1-bed are competitive with the cheapest BTR in the dataset (Brent Cross's Maple at £1,950, Fizzy Stepney Green at ~£1,900). Zone 3 Piccadilly / GTR connectivity plus strong amenity suite + 2026 build standard. If the qualification process turns out to be Homeppl-friendly or explicitly guarantor-accepting, this jumps to a strong shortlist entry.

---

## The 17 other "Berkeley" projects — BTS, not BTR

Enumeration breakdown by area:

| Area | Projects (count) | Tenure | Rentability |
|---|---|---|---|
| oval-village | 5 (Oval Village by Berkeley, The Pinnacle, The Halo, Zone at Oval Village, St George Wharf) | rent+buy | Mostly BTS with secondary lettings |
| kidbrooke-village | 5 (Kidbrooke Village core masterplan, City Point, Kidbrooke Square, Blackheath Collection, Meridian Gate) | rent+buy | Mostly BTS. Kidbrooke is a future Berkeley Living BTR site but currently BTS. |
| woolwich | 6 (Royal Arsenal Riverside, Galley Wharf, Seafarers Wharf, Sailors Wharf, Lantern Wharf, Maribor / Ropeyards) | rent+buy | BTS. Rental via multi-agent secondary market (Greens Lettings, Bennett Mason, Clipper, LiFE Residential, Vanquish confirmed). |
| wandsworth-town | 1 (Wandsworth Riverside) | rent+buy | BTS + secondary market |
| aldgate-east | 1 (Goodman's Fields) | rent+buy | BTS + secondary market |

These 17 projects should be marked as individual-landlord / secondary-market defaults per the operator-research playbook's § "Secondary-market categories" pattern. The current `realism` values (`unlikely` / `blocked` / `unknown` mix, plus a couple of `achievable` on Kidbrooke) should be **preserved** (authored judgement) with a narrative note that the mechanism is individual-landlord-lettings, not a unified Berkeley operator policy.

A few specific notes:

- **Royal Arsenal Riverside (Woolwich)** — the area-level prose currently reads "Berkeley Living is the rental arm" of Royal Arsenal. Research confirms **this is incorrect as of 2026-04-16**. Berkeley Living's portfolio is Foundry Yard only. Royal Arsenal rental is via at least five independent letting agents (Greens Lettings, Bennett Mason, Clipper Residential, LiFE Residential, Vanquish Real Estate). Royal Arsenal could become a Berkeley Living site in the future (it is on the announced 16-site BTR pipeline), but delivery is 2027+. The dataset's Woolwich area narrative should be corrected.
- **Kidbrooke Village** — current achievable flags on City Point, Kidbrooke Square, Meridian Gate suggest someone previously found a primary rental channel there. Research did not surface a Berkeley Living BTR at Kidbrooke as of 2026-04-16; Kidbrooke IS on the announced BTR pipeline for later 2026. If the dataset's `achievable` flags are based on current secondary-market reality, they should be rechecked (achievable for what qualification pathway?). If they're based on anticipated BTR delivery, they're premature.

---

## Sources

- `berkeleyliving.co.uk/foundry-yard/` — Foundry Yard operator page (amenities, pricing, availability). 403 on direct fetch; content accessed via `lovetorent.co.uk/companies/berkeley-living/foundry-yard/` mirror. Accessed 2026-04-16.
- `berkeleyliving.co.uk/` — Berkeley Living main page. Accessed 2026-04-16.
- `berkeleygroup.co.uk/about-us/who-we-are/our-brands` — brand unification confirmation. Accessed 2026-04-16.
- `berkeleygroup.co.uk/btr` — Berkeley Living BTR platform announcement. Accessed 2026-04-16.
- `urbanliving.news/build-to-rent/berkeley-group-to-enter-btr-market-with-4000-units-in-london-and-se/` — 4,000 unit announcement, 16-site pipeline.
- `housingtoday.co.uk/news/berkeley-to-launch-4000-home-build-to-rent-business-as-annual-profit-falls/5130026.article` — press confirming Berkeley Living's scale ambition and first deliveries from 2027.
- `buildington.co.uk/companies/news/view/2725` — first BTR sites list.
- `rightmove.co.uk/estate-agents/agent/Berkeley-Living/Foundry-Yard-by-Berkeley-Living-297989.html` — Berkeley Living as a registered lettings agent. Accessed 2026-04-16.
- `lovetorent.co.uk/companies/berkeley-living/foundry-yard/` — live pricing mirror. Accessed 2026-04-16.
