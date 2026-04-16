# Berkeley family BTS + Related Argent — operator research notes

Research date: 2026-04-16. Covers St George, St James, St George (Berkeley), St George / private landlords, and Related Argent.

This file is intentionally thin because per the operator-research playbook § "Secondary-market categories", BTS projects should not consume deep research budget — the right answer is a defaults apply, not operator-level qualification research. Related Argent is treated more fully because Heart of Hale is a genuine BTR.

---

## St George / St James (Berkeley sub-brands)

### Brand status

Retired in March 2026 — both sub-brands absorbed into the "Berkeley" master brand. Historical projects delivered under these names remain branded in their address / signage / marketing, but corporate identity is now "Berkeley".

### Dataset projects

| Operator slug | Count | Projects |
|---|---|---|
| `st-james` | 5 | White City Living, The Cascades, The Solaris One & Two, Westmont Apartments, Riverlight Quay |
| `st-george-berkeley` | 2 | Ealing Filmworks, Dickens Yard |
| `st-george` | 1 | South Quay Plaza |
| `st-george-private-landlords` | 1 | Fulham Reach |

### BTR status

None of the 9 projects is a Berkeley Living BTR product. All are BTS delivered under legacy sub-brands, with secondary-market rental only (individual owner-occupiers letting through independent agents).

Cross-check per project:
- **White City Living** — Berkeley's flagship west London BTS masterplan. Rental is via individual landlord agents. The dataset's T1.4 claim "Berkeley/St James operates White City Living... corporate referencing" is overstated — there is no unified Berkeley operator running rental qualification at White City Living as of 2026-04-16.
- **The Cascades, Solaris, Westmont** — sub-phases of White City Living, same framing.
- **Riverlight Quay (Nine Elms)** — St James BTS ownership, secondary-market rental.
- **Ealing Filmworks, Dickens Yard** — St George BTS masterplans in Ealing Broadway, secondary-market rental.
- **South Quay Plaza (Canary Wharf)** — St George towers, BTS, owner-occupier lettings via private landlords (the `SQP` pattern in Canary Wharf).
- **Fulham Reach (Hammersmith)** — St George BTS, operator already tagged as "St George / private landlords" in recognition that rental is via individual landlords. The £2,925-£3,250 1-bed range confirms secondary market pricing.

### Qualification — null finding

No operator-level BTR qualification policy exists for St George or St James projects. Every rental is a per-listing, per-agent decision. Apply individual-landlord / secondary-market defaults per the operator-research playbook.

---

## Related Argent — Heart of Hale BTR

### Operator identity

Related Argent is a JV between Related (US-based developer) and Argent LLP (King's Cross masterplan team). Related Argent's active BTR work in London:

- **Heart of Hale, Tottenham Hale** — 1,030 homes across multiple phases. 1 Ferry Island (108 homes, AHMM-designed, Conran & Partners interiors) delivered. 2 Ferry Island under construction (part of 484-home Phase 2).
- **Brent Cross Town** — masterplan developer (180 acres, 6,700 homes planned). The Maple is the flagship BTR; Conductor House is affordable/LLR; The Delamarre is BTS; The Ashbee is mixed.

### The Maple — operator attribution clarification

The current dataset attributes The Maple's operator as "Be Living". Research finds:

- `themaplenw2.com` markets The Maple as "a BTR development from Related Argent, the award-winning team behind sister property, Author King's Cross" — confirming Related Argent / Related as the delivery team.
- `related.com/our-company/properties/maple` — Related's own properties portfolio includes The Maple directly.
- "Be Living" appears in older Brent Cross Town marketing (pre-2025 rebrand) but the current Maple operator identity is **Related / Related Argent directly**. Be Living may have been a transitional operator arm during handover from construction; the live BTR is Related-branded.

This is a Category B (wrong-operator attribution) flag. The dataset should update The Maple's operator from "Be Living" to "Related Argent" (or "Related" — verify which the marketing materials use for operations vs delivery).

### Heart of Hale — qualification

Direct research on `heartofhale.co.uk/1-ferry-island` failed (redirects to `ferryislandn17.co.uk` which returns 403 on fetch). No published FAQ, no how-to-rent page was accessible. This matches the existing dataset's area-level note that "Related Argent's rental qualification policies are opaque".

Inferential framing:
- **Agreement type**: AST (BTR default)
- **Referencing provider**: unknown / unclear. Related Argent has not publicly named a partner. Possibilities: Rightmove Referencing (Argent's King's Cross historical partner), Homeppl (Related Argent is a US / UK hybrid operator with international tenant exposure making Homeppl a natural fit), Goodlord. Direct enquiry required.
- **Income multiple**: 30× (industry default, unverified)
- **Open Banking**: unclear
- **Professional guarantor**: unclear
- **Overseas guarantor**: unclear
- **Credit check**: unclear (likely standard, no evidence of strict floor)
- **International tenants**: likely welcomed (Related is a US-origin operator, Conran-interior premium BTR suggests international-tenant-friendly positioning) but unstated
- **Visa handling**: unclear

### The Maple — qualification

Same operator-level unknowns as Heart of Hale. Premium BTR at Brent Cross Town, Conran interiors, 25m pool — the branding leans international-friendly but the operator has not published FAQ-level detail. The Maple's current listed pricing (studios from £1,950, 1-beds from £2,250) plus mid-range positioning implies an income floor of ~£67,500 for the cheapest unit at 30× — the most accessible Related Argent product in the dataset.

### Conductor House, The Delamarre, The Ashbee

- Conductor House: affordable + London Living Rent component. LLR is an S106-led sub-market product that requires council-led allocation (not operator referencing). The existing `achievable` verdict needs reconfirming — it may reflect the LLR pathway, which is a different rulebook than standard BTR referencing.
- The Delamarre: BTS, secondary-market rental only. Existing `blocked` verdict is correct.
- The Ashbee: mixed BTS + affordable. Existing `blocked` verdict is correct for the sale phase.

---

## Sources

- `berkeleygroup.co.uk/about-us/who-we-are/our-brands` — brand unification. Accessed 2026-04-16.
- `berkeleygroup.co.uk/about-us/who-we-are/our-brands/st-george` — St George legacy brand page. Accessed 2026-04-16.
- `berkeleygroup.co.uk/about-us/who-we-are/our-brands/st-james` — St James legacy brand page. Accessed 2026-04-16.
- `themaplenw2.com/` — The Maple operator page (403 on direct fetch; marketing copy sourced via search results). Accessed 2026-04-16.
- `related.com/our-company/properties/maple` — Related's property listing for The Maple. Accessed 2026-04-16.
- `brentcrosstown.co.uk/rent-here` — Brent Cross Town rental portal (no referencing detail). Accessed 2026-04-16.
- `heartofhale.co.uk/1-ferry-island` → redirects to `ferryislandn17.co.uk/` (403). Accessed 2026-04-16.
- `1newhomes.com/heart-of-hale-london` — third-party Heart of Hale summary. Accessed 2026-04-16.
- `onthemarket.com/to-rent/flats-apartments/royal-arsenal/` — secondary-market Royal Arsenal listings (Berkeley BTS pattern). Accessed 2026-04-16.
- `buildington.co.uk/buildings/10497/england/london-n17/ferry-lane/1-ferry-island` — 1 Ferry Island project profile. Accessed 2026-04-16.
