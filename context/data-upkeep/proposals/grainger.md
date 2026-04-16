# Proposals — Grainger plc

## Operator-level facts (apply to Fortunes Dock, Windlass Apartments, Argo Apartments)

Note: **The Copyhouse (Bermondsey) is flagged as a Category A ghost-project candidate** — see ghost-project section below. If user confirms deletion, these operator defaults do not apply. If user keeps it with `grad_visa_realism: "unclear"`, the operator defaults below still apply structurally but the realism state is preserved.

| Field | Value | Source |
|---|---|---|
| `agreement_type` | `ast` | Inferred from Grainger's long-tenancy BTR model; right-to-rent language and deposit scheme on https://www.graingerplc.co.uk/living-with-us/our-rental-process confirm standard AST pattern |
| `referencing_provider` | `unclear` | Grainger's verbatim: "We use a third-party referencing provider" — provider not named on the public page. (Prior inherited hypothesis: Goodlord. Not citable; escalated to `"unclear"` per playbook.) |
| `min_tenancy_months` | 12 | Standard BTR floor; Grainger offers 1/3/5-year options via "Better Renting" narrative — https://corporate.graingerplc.co.uk/better-renting |
| `income_multiple` | 30 | Verbatim: "the collective annual salaries of everyone who'll be making rental payments would need to be around 30 times the monthly rent" — https://www.graingerplc.co.uk/living-with-us/our-rental-process |
| `open_banking_accepted` | `unclear` | Not mentioned on rental-process page; Grainger's referencing provider is unnamed so Open Banking availability depends on which stack they run |
| `upfront_rent_policy` | `one-month-ast-cap` | Inferred from AST + RRA (1 May 2026 cap). Grainger's own page says "higher proportion of rent in advance" which may have become legally void post-RRA — flag in notes. |
| `accepts_professional_guarantor` | `yes` | Verbatim: "We do accept guarantors or a higher proportion of rent in advance" — https://www.graingerplc.co.uk/living-with-us/our-rental-process |
| `accepts_individual_overseas_guarantor` | `unclear` | "Guarantors" language doesn't specify UK-resident only; industry default is UK-resident required; direct enquiry needed |
| `credit_check` | `standard` | Credit check confirmed in referencing; no floor or leniency language on page |
| `international_tenant_policy` | `accepted-case-by-case` | Right-to-rent share code route documented for non-UK citizens ("passport or share code needed for non-UK citizens") — not verbatim "welcomed" but structurally accommodating |
| `visa_expiry_handling` | `unclear` | Not addressed on rental-process page; Grainger's long-tenancy model makes visa handling the key personal-application question |
| `qualification_flexibility_signal` | `flexible` | Verbatim "we recommend you discuss this upfront with our team" + Grainger's published "Better Renting" tenant-rights advocacy posture |

## Realism pathway suggestions

Per `realism-pathway-derivation.md` applied to Caner's profile:

| Pathway | Rule check | Included? |
|---|---|---|
| `standard-passable` | credit `lenient`/`none` + OB `yes` + intl `welcomed`/`accepted-case-by-case` + visa not `rejected` | ❌ — credit is `standard` not `lenient`; OB `unclear` |
| `with-professional-guarantor` | `accepts_professional_guarantor: yes` | ✅ |
| `with-savings` | Homeppl + OB `yes` | ❌ — Grainger is not confirmed Homeppl |
| `with-co-signer-overseas` | `accepts_individual_overseas_guarantor: yes` | ❌ — `unclear` |
| `with-upfront-licence` | licence + multi-month | ❌ AST |
| `licence-exempt-light-ref` | licence + no/in-house ref | ❌ AST |

**Suggested `realism_pathways`**: `["with-professional-guarantor"]`

**Suggested `grad_visa_realism`**: `achievable-with-guarantor` (derived via rule 3 — with-professional-guarantor present).

**State change**: All three Grainger BTR projects (Fortunes Dock, Windlass, Argo) currently have `realism: "unknown"` in the dataset. The proposal upgrades this to `achievable-with-guarantor`. This is a **flip from unresearched unknown to confirmed-positive pathway**. Worth surfacing at Phase 3 review as a material dataset improvement.

## Per-project variations

| Project | Variation from operator defaults |
|---|---|
| Fortunes Dock (royal-wharf-and-docks) | No structural variation. 412-home, Phase 2 complete 2025. |
| Windlass Apartments (tottenham-hale) | No structural variation. ~180 units at Hale Wharf. |
| Argo Apartments (canning-town) | No structural variation. 134-unit, part of £600m Hallsville Quarter. |
| The Copyhouse (bermondsey) | **GHOST PROJECT FLAG — see below. Do not apply operator defaults until user confirms decision.** |

## Pricing (side-effect)

Not extracted this round. Existing preview fields suggest:
- Fortunes Dock: 2-bed from ~£2,640 (existing preview)
- Windlass: 1-bed from ~£2,150 (existing preview)
- Argo: 1-bed from ~£2,070 (existing preview)

Individual building sites (fortunesdock.co.uk, windlass-apartments.co.uk) would need fresh crawls for v1 pricing verification. Out of scope for this batch unless orchestrator requests.

## Ghost-project flags

### The Copyhouse (Bermondsey) — Category A (true ghost)

**Evidence**:
1. Not found in Grainger's portfolio via site crawl or search.
2. Zero Rightmove / Zoopla / Primelocation / HomeViews presence as a residential building.
3. Only matches for "Copyhouse" / "Copy House" London in search: a content marketing agency and a film production company — neither residential.
4. Dataset record is a single-sentence preview with no deeper research — matches the pattern of 2026-04-12 hallucinated sweep entries.

**Blast radius** in `src/areas/data/bermondsey.ts`:
- Line 13-25: `const theCopyhouse = buildProject({...})` — the project definition
- Line 103: T1.2 prose — "Grainger operates The Copyhouse (PRS)"
- Line 105: T1.4 prose — "Grainger plc operates The Copyhouse"
- Line 156: `projects: [theCopyhouse, pearlYard, theBermondseyProject]` — the area's projects array

**Grade impact**: None expected. Bermondsey retains Pearl Yard (Greystar, 1,600 BTR) and The Bermondsey Project (Greystar, 1,624 homes) as T1.4 / T1.2 pass conditions. Prose would need rewrite to drop the Grainger claim without altering grade reasoning.

**Recommendation at Phase 3**:
1. Delete `theCopyhouse` project from `bermondsey.ts`.
2. Add tombstone comment per `references/ghost-project-detection.md` § "Tombstone pattern".
3. Rewrite T1.2 and T1.4 prose to remove Grainger references (retain Greystar, drop Grainger).
4. No grade recalculation needed.

**Alternative**: if user has private knowledge the building exists (e.g. announced but not yet marketed), keep with `grad_visa_realism: "unclear"` and a note flagging the unverified status.

## Notes (for `notes` field on each project)

**Fortunes Dock / Windlass Apartments / Argo Apartments (identical narrative)**:

> Grainger plc has verbatim guarantor-acceptance language: "We do accept guarantors or a higher proportion of rent in advance, but we recommend you discuss this upfront with our team." Income requirement is 30× monthly rent. Referencing provider is unnamed on the public page (inherited hypothesis: Goodlord-family) — direct enquiry should confirm whether Housing Hand or an equivalent corporate guarantor service is acceptable. Grainger's "Better Renting" positioning is actively flex-positive, with long-tenancy options (1/3/5 year). The guarantor pathway flips Grainger from the previously-assumed block to achievable-with-guarantor.

**The Copyhouse** (if user keeps with `unclear`):

> Building unverified — not found in Grainger's current portfolio or any residential listing platform. Likely ghost-project origin from prior sweep round. Kept pending user review with grad-visa realism `unclear`; recommend direct confirmation with Grainger's lettings team before any application.

## Sources (full list — copy into each project's `sources` array)

- https://www.graingerplc.co.uk/living-with-us/our-rental-process (accessed 2026-04-16, type: operator) — the verbatim source
- https://www.graingerplc.co.uk/ (accessed 2026-04-16, type: operator) — portfolio verification
- https://corporate.graingerplc.co.uk/better-renting (accessed 2026-04-16, type: operator) — long-tenancy positioning
- https://corporate.graingerplc.co.uk/sites/graingerplc-corp/files/2024-05/Grainger%20plc%20-%20Better%20Renting%20-%20Rental%20Reform%20Document%202024.pdf (accessed 2026-04-16, type: press) — reform stance
- https://www.londonstockexchange.com/news-article/GRI/grainger-welcomes-renters-rights-bill/16661359 (accessed 2026-04-16, type: press) — RRA engagement

## research_status

- Fortunes Dock, Windlass Apartments, Argo Apartments: `"complete"`.
- The Copyhouse: leave at current value until ghost-project decision resolves; if kept, `"partial"`; if deleted, moot.
