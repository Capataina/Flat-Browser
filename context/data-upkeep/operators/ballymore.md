# Ballymore — operator research

Research date: 2026-04-16. Researcher: data-upkeep Phase-2 agent. Scope: operator-level qualification policies + portfolio verification for the six dataset projects attributed to Ballymore, plus the one `"Ballymore / private landlords"` project.

---

## Operator overview — a developer, not a BTR operator

The core finding of this batch: **Ballymore is a developer-builder, not a direct BTR operator.** Ballymore Group develops residential masterplans (Royal Wharf, London City Island, Embassy Gardens, Wardian, West Hampstead Square, Stratford Waterfront, The Brentford Project). It does not run an in-house consumer-facing BTR lettings operation analogous to Vertus, Quintain Living, Greystar Fizzy, Get Living, or Grainger.

- Developer website: https://www.ballymoregroup.com/ — lists projects under `/project` and `/residential`; no rental FAQ page, no tenant application portal, no published referencing provider
- Asset-management arm: **Ballymore Asset Management Ltd (baml)** at https://www.ballymoream.com/ — this is the service-charge and estate-management company (concierge, security, facilities), not a BTR lettings operator. It manages the common parts and building-services layer, not the tenant relationships.
- No Homeppl / Goodlord / Canopy case study features Ballymore
- No Ballymore-branded rental FAQ exists

### Who actually lets the apartments

At every Ballymore residential scheme, lettings run through one of three channels:

| Channel | Mechanism | Example |
|---|---|---|
| **Third-party BTR operator partner** | A specialist BTR operator runs a rental pool within a Ballymore-developed building. | **Folio London** operates a 265-apartment rental pool at Royal Wharf — foliolondon.co.uk/developments/royal-wharf. |
| **Preferred sales-and-lettings agent** | JOHNS&CO is the preferred onsite lettings agent for Ballymore's major schemes (Royal Wharf, London City Island, Embassy Gardens historically, 21 Wapping Lane, New Providence Wharf). | Acts as the single-agent touchpoint but still ultimately routes each let through individual owners or small landlord-investors. |
| **Individual owner-landlords via multiple agents** | Individual flat owners appoint any letting agent (Foxtons, Savills, Allie Home, Regent, Garton Jones, Chase Apartments, etc). | The dominant mode at London City Island, Embassy Gardens, Wardian, West Hampstead Square. |

**There is no consolidated "Ballymore tenancy policy" that applies across projects.** Each let is a separate transaction with a different landlord and a different referencing stack.

### Dataset attribution against reality

The dataset attributes 6 projects to "Ballymore" plus 1 to "Ballymore / private landlords". Against 2026-04 reality:

| Project ID | Dataset name | Actual letting channel | Recommended operator attribution |
|---|---|---|---|
| `royal-wharf-core` | Royal Wharf by Ballymore (core masterplan) | Folio London operates 265-apartment rental pool; JOHNS&CO + private landlords handle the rest | **"Folio London + private landlords (Ballymore-developed)"** — or split: if the project is the whole masterplan, note mixed-operator nature in `notes` and set `operator: "Ballymore / Folio London / private landlords"` (following the existing `"Ballymore / private landlords"` slug convention) |
| `royal-wharf-gardens` | Royal Wharf Gardens | Same mixed — Folio + JOHNS&CO + private landlords | Same |
| `riverscape` | Riverscape | JOHNS&CO as primary + Folio London has some listings + private landlords | Same |
| `london-city-island` | London City Island | JOHNS&CO primary + Foxtons + multiple agents + private landlords. **Phase 2 is EcoWorld Ballymore JV** (not pure Ballymore) | **"Ballymore / EcoWorld Ballymore / private landlords"** — Phase 2 is officially JV-owned. Most lettings are secondary-market. |
| `west-hampstead-square` | West Hampstead Square | Sales-led scheme with private-landlord lettings | **"Ballymore / private landlords"** — matches Brentford Project pattern |
| `stratford-waterfront` | Stratford Waterfront | **Not yet built** — construction starts Spring 2026, completes late 2029. 600 homes, 35% affordable, mixed tenures not yet defined | Speculative — operator should be **"unknown"** or `"Ballymore / LLDC"` (partnership with London Legacy Development Corporation). No current rental policy exists because no building exists. |
| `the-brentford-project` | The Brentford Project | 876-unit mixed-tenure masterplan; rental via private landlords per dataset's existing research comment | Attribution **"Ballymore / private landlords"** is already correct |

---

## Because there is no operator, there is no operator-level policy

The remainder of this document is a catalogue of what's known per project, with the explicit acknowledgement that qualification policies are **per-landlord** (or per-operator-partner like Folio London, which is itself a separate operator entity with its own policies).

### Folio London — partial operator coverage

Folio London operates the 265-apartment rental pool at Royal Wharf. This is a genuine BTR-style operation within a Ballymore-developed masterplan. Folio London is a separate operator with its own qualification policies:

- Folio London has **one existing dataset project** (Folio London slug) and is flagged as "UK homeowner guarantor only" per prior research (operator-research-playbook.md canonical example: "Folio requires UK homeowner guarantor only — `no`").
- If the user splits out the Folio London rental pool at Royal Wharf into its own project block, the Folio London operator qualification block applies to that subset.

For the Ballymore-batch projects as currently structured (whole-masterplan single project blocks), the dominant mode is individual-landlord secondary-market lettings.

### JOHNS&CO — preferred agent, not an operator

JOHNS&CO is a letting agent, not an operator. It doesn't run a BTR pool — it acts as the first-call agent for Ballymore schemes, but the legal landlord in each let is still an individual owner. JOHNS&CO applies its own referencing stack:

- Likely uses **Rightmove Referencing** or a standard UK credit-check stack (not publicly disclosed; inferred from agent norms)
- Standard 30× income multiple
- Guarantor on case-by-case per listing

No Ballymore-wide policy exists via JOHNS&CO. Each listing is a separate conversation.

### Ballymore Asset Management Ltd (baml)

Estate-management services company — concierge, security, facilities, service charge administration, compliance with Building Safety Act. Does **not** run lettings. Mention it only because a naive search might suggest Ballymore has a lettings arm when it has a services-and-compliance arm.

---

## Per-project qualification defaults

Because these projects are secondary-market lettings via individual landlords (with a Folio London overlay at Royal Wharf), apply the `operator-research-playbook.md` §"Secondary-market categories" defaults:

| Field | Value | Reasoning |
|---|---|---|
| `agreement_type` | `"ast"` | Individual landlords default |
| `referencing_provider` | `"unclear"` | Varies per agent — JOHNS&CO likely uses Rightmove Referencing or similar; private landlords via Foxtons/Savills use Goodlord/Let Alliance |
| `min_tenancy_months` | `null` or `12` | Varies; standard 12-month AST assumption |
| `income_multiple` | `30` | Industry default; each agent applies their own |
| `open_banking_accepted` | `"unclear"` | Varies per agent's stack |
| `upfront_rent_policy` | `"one-month-ast-cap"` | AST + RRA 1 May 2026 |
| `accepts_professional_guarantor` | `"unclear"` | Per-landlord |
| `accepts_individual_overseas_guarantor` | `"unclear"` | Per-landlord |
| `credit_check` | `"standard"` | Individual-landlord default |
| `international_tenant_policy` | `"accepted-case-by-case"` | Varies by landlord |
| `visa_expiry_handling` | `"unclear"` | Per-listing |
| `qualification_flexibility_signal` | `"unclear"` | Can't generalise across many landlords |
| `realism_pathways` | `[]` | No operator-wide pathway |
| `grad_visa_realism` | **preserve existing** where authored; otherwise `"unlikely"` | Secondary-market default — individual landlords default to Goodlord-style referencing without Homeppl Open-Banking; guarantor acceptance is per-listing |
| `research_status` | `"complete"` | The answer is "no single operator policy" |

### Exception: Royal Wharf's Folio London pool

If Royal Wharf is split out to a separate project block for the Folio-operated rental pool, Folio's qualification block applies instead:
- `agreement_type: "ast"`
- `accepts_professional_guarantor: "no"` (Folio requires UK homeowner guarantor per playbook reference)
- `accepts_individual_overseas_guarantor: "no"`
- `grad_visa_realism: "unlikely"` or `"blocked"` (Folio is a canonical hard-block example in the playbook)

For v1, the cleaner approach is to keep Royal Wharf as a whole-masterplan entry with `"Ballymore / Folio London / private landlords"` operator attribution and note the mixed nature in `notes`.

---

## Stratford Waterfront — special case (not yet built)

- Construction starts Spring 2026
- Completion late 2029 (post visa window for Caner)
- 600 homes (earlier reports said 700), 35% affordable
- Mixed tenures not yet finalised
- Likely a mix of: Ballymore-developed sale, Affordable housing, BTR (operator TBD)

**Recommendation**: keep `build_phase: "in_delivery"` (consistent with pre-construction start). Qualification fields all `"unknown"` — research will become meaningful around 2028 when operator identity is announced. Set `grad_visa_realism: "unknown"` with narrative note that timing is post-visa-window and operator identity not yet determined. Do NOT mark `research_status: "complete"` — it genuinely isn't researchable yet. Use `"unresearched"` or `"partial"`.

---

## West Hampstead Square — special case (sales-led, completed)

Ballymore-developed mixed-tenure scheme, substantially complete. Per the dataset's existing narrative: sales-led rather than BTR. The tenure mix includes rental, but not via a Ballymore-run BTR operation — rentals are secondary-market via agents (Foxtons, Savills, Regent, etc).

The dataset's current `grad_visa_realism: "unlikely"` is correct given:
- No operator-level BTR policy
- Individual landlords default to Goodlord-style referencing
- Ballymore brand doesn't unlock any special pathway

Apply the secondary-market default block above. Preserve `"unlikely"` via the `preserved` param in `deriveRealism()`.

Operator attribution should be corrected from "Ballymore" to **"Ballymore / private landlords"** to match the Brentford Project pattern and accurately reflect that Ballymore doesn't run lettings at this scheme.

---

## Notes on the Folio London / Royal Wharf connection

The dataset's existing `royal-wharf-core` project already cites Folio London in its sources array (accessed 2026-04-12). This shows the prior research correctly identified the Folio overlay. What's needed is:

1. Update the `operator` field to reflect the mixed nature ("Ballymore / Folio London / private landlords")
2. Update the narrative `notes` to mention Folio London's 265-unit rental pool as the primary qualification-friendly channel at Royal Wharf (though Folio itself is a hard-block operator for overseas applicants)
3. Keep the 2026-04-12 Folio source link

---

## Sources

- [Ballymore — Residential Developments](https://www.ballymoregroup.com/residential) — developer, accessed 2026-04-16. Portfolio overview; no rental FAQ exists.
- [Ballymore — Explore our Projects](https://www.ballymoregroup.com/project) — developer, accessed 2026-04-16.
- [Ballymore Asset Management Ltd](https://www.ballymoream.com/) — operator (service charge / estate management), accessed 2026-04-16. Confirms baml is estate-management, not lettings.
- [JOHNS&CO — Royal Wharf](https://www.johnsand.co/offices/royal-wharf) — agent, accessed 2026-04-16. "Preferred onsite lettings and management company to The Ballymore Group".
- [JOHNS&CO — Riverscape](https://www.johnsand.co/development/riverscape) — agent, accessed 2026-04-16.
- [Folio London — Royal Wharf](https://foliolondon.co.uk/developments/royal-wharf/) — operator, accessed 2026-04-16. 265-apartment BTR pool within Ballymore-developed masterplan. Price range £1,975-£3,100/mo.
- [Ballymore — Stratford Waterfront](https://www.ballymoregroup.com/project/detail/stratford-waterfront) — developer, accessed 2026-04-16. 600 homes, 35% affordable, construction Spring 2026 → late 2029.
- [Housing Today — Ballymore and LLDC approval](https://www.housingtoday.co.uk/news/ballymore-and-lldc-get-green-light-for-700-home-scheme-in-east-london/5130176.article) — press, accessed 2026-04-16. Planning approval details.
- [Construction Enquirer — Stratford Waterfront approved](https://www.constructionenquirer.com/2024/06/27/ballymores-stratford-waterfront-resi-towers-approved/) — press, accessed 2026-04-16.
- [Ballymore — West Hampstead Square](https://www.ballymoregroup.com/en/developments/west-hampstead-square) — developer, accessed 2026-04-16. Sales-led mixed-tenure scheme.
- [Ballymore — London City Island](https://www.ballymoregroup.com/project/detail/london-city-island) — developer, accessed 2026-04-16. Confirmed as Ballymore/EcoWorld JV.
- [EcoWorld International — LCI Phase 2 Amelia building](https://ecoworldinternational.com/news/its-a-wrap-ecoworld-ballymore-unveils-first-of-phase-2-completions-at-london-city-island/) — press, accessed 2026-04-16. LCI Phase 2 is EcoWorld Ballymore JV.
- [The Brentford Project — Ballymore](https://www.thebrentfordproject.com/) — developer, accessed 2026-04-16.
- [HomeViews — Ballymore Group company](https://www.homeviews.com/company/ballymore-group) — reviews, accessed 2026-04-16. Mixed tenant experiences; mentions maintenance/management issues at Ballymore-developed schemes.
- [HomeViews — Folio London at Royal Wharf](https://www.homeviews.com/development/folio-london-royal-wharf-e16) — reviews, accessed 2026-04-16. Confirms Folio operates rental pool at Royal Wharf.
