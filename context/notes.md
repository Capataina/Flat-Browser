# Notes

This file is the index for project preferences, design rationale, lessons, and constraints that inform how Flatbrowser is built. Per the project's note-capture discipline, entries here are **resolved knowledge** — accepted decisions, stated preferences, articulated trade-offs, and non-obvious lessons. In-flight deliberation does not belong here; it lives in chat or in `context/plans/`.

This context folder was initialised on **2026-04-11** and substantially expanded through six major passes: the 2026-04-12 Phase 1 polish, the 2026-04-12 sweep fold-in that expanded the dataset from 14 → 55 areas and rebuilt the rental qualification model for the Renters' Rights Act 2025, the 2026-04-16 realism schema redesign + V1 data-upkeep run (266 projects populated), the 2026-04-17 V2/V3/V4 data-upkeep scaffold + affordability field + relativity mechanisms, the 2026-04-17 V2/V4 research wave (15 parallel agents producing ~5,700 field-level proposals on disk; 7 critical corrections applied; full enrichment application staged for follow-up), and the 2026-04-17 V2/V4 apply-only session that consumed the proposal corpus via 7 parallel file-owned subagents — 59 files, +6965 lines, full V2 enrichment + V4 area research + 6 operator reattributions + typo rename + missing Charter Street + Ten Degrees HomeViews refresh + targeted Kew Bridge C→B V3 change, full gate clean.

---

## Index

### Notes (`context/notes/`)

- [User Profile — Ata Caner Cetinkaya](notes/user-profile.md) — durable snapshot of identity, visa, education, career direction, lifestyle, and engineering preferences extracted from the upstream Cernio profile repo on 2026-04-11
- [Relocation Constraints](notes/relocation-constraints.md) — current rent baseline (~£3k all-in at Ten Degrees, Croydon), the rental-qualification wall (income proof / upfront / credit history / visa expiry blockers), and the questions that must be answered before redesigning the shortlist
- [London Search Rubric](notes/search-rubric.md) — locked 5-tier criteria (T1 viability → T5 personal fit) that drives which areas qualify for Flatbrowser and how each is evaluated; authoritative for the Phase F sweep and the data-model restructure into areas-containing-projects
- [Personal Relevance Pattern](notes/personal-relevance-pattern.md) — the user-profile + explainers + ExplainedValue layer that turns every value box into a personalised severity-graded message; the centrepiece of the Phase 1 polish pass
- [Consensus Synthesis Model](notes/consensus-synthesis-model.md) — why the Phase F sweep replaced field-level ownership with 15-agent consensus voting; how high/medium/low confidence and dissent attribution work
- [Layout Decisions (polish pass 2)](notes/layout-decisions.md) — predictable grid > masonry, ExplainedValue header-as-toggle, CriterionRow collapsibility, accordion summary full-width fix, design tokens lifted to `:root`. Each entry is a recorded "we already tried that" decision from the second polish pass
- [Explainer Type Safety](notes/explainer-type-safety.md) — the rawValue type-erasure trap, the multi-cluster-commute incident as the cautionary example, defensive guards for explainer relevance functions, and the deferred discriminated-union refactor
- [Relative Grading](notes/relative-grading.md) — **the single most important grading principle**: ALL grades are 100% relative to other entries in the dataset, never absolute; grades must be recalibrated as the dataset grows; graders must compare against existing entries before assigning
- [Data Upkeep Skill (planned)](notes/data-upkeep-skill.md) — design brief for a project-specific `/data-upkeep` skill that fact-checks, cross-references, and fills every field across the entire dataset using 5–15 parallel research agents; covers orchestration models (propose vs. direct-edit vs. change-files), scope of checks, and why it matters for data trust
- [Housing Shortlist (action artifact)](notes/housing-shortlist.md) — produced 2026-04-16 by a 22-agent operator-level research round, restructured into Top 10 Studios + Top 10 1-Beds + Bridge Insurance Tier + Promising-but-Mechanics-Unverified tier. ~22 unique buildings ranked by combined access pathway + long-stay viability + budget fit, with verified qualification mechanics (referencing provider, guarantor pathway, RRA status), tailored lead questions per operator, direct contacts, and explicit choices/assumptions/dropped-with-reason sections. The actionable artifact for Caner's email round to operators. Top-10 bar applied: every entry must have qualification mechanics confirmed from primary sources, not just budget-fit pricing — entries with empty mechanics (Berkeley Foundry Yard, Knight Dragon Waterman) parked in the Promising tier. Includes 3 dataset gap-fills queued for follow-up (Blueground, Roomzzz Stratford, Adagio Brentford) and 3 critical corrections applied to the dataset (Filigree CLOSED for water remediation; APT Living Kew Bridge is for-sale not BTR; Vonder Wembley uses Fraser Bond standard agent referencing — not licence-exempt as previously tagged).
- [Affordability field — why it's separate from cost_tier](notes/affordability-field.md) — resolved 2026-04-17. `affordability` is profile-envelope-relative, `cost_tier` is dataset-relative; both legitimate, both kept. Covers the rationale for the split, the envelope figures, the tag scale, and the files touched end-to-end.
- [Relativity mechanisms — how the data-upkeep skill enforces true relative calibration](notes/relativity-mechanisms.md) — resolved 2026-04-17. Five mechanisms — comparables injection, shuffled re-runs, Cross-Batch Review, distribution gates, explicit comparable citations — all load-bearing together. Individual mechanisms are gameable; together they force the dataset to honour `relative-grading.md` at scale.
- [Data-upkeep — one skill, flag-driven scope](notes/data-upkeep-single-skill.md) — resolved 2026-04-17. The V2/V3/V4 expansion lives inside one `/data-upkeep` skill rather than four separate skills, selected via flags (`--qualification-only`, `--enrichment-only`, `--area-research`, `--recalibrate`, `--full`). Covers the decision rationale (token economics, V3-needs-V2, reference overlap, cross-version mechanisms) and the "don't split" guidance for future sessions.
- [Data-upkeep — research and apply belong in separate sessions](notes/data-upkeep-research-apply-split.md) — resolved 2026-04-17. A `--full` run naturally splits into expensive research (Phase 1-3, parallel sub-agent dispatch, produces proposals on disk) and mechanical apply (Phase 4-6, single-threaded TypeScript edits). Forcing both into one session produces shallow apply or narrow research. The pattern is: research wave produces durable structured proposals at `context/data-upkeep/proposals/`; apply-only follow-up session consumes them.
- [File-owned subagents — the right parallelism shape for dataset apply waves](notes/file-owned-subagents.md) — resolved 2026-04-17 in the apply-only session. For multi-axis proposal corpora (V2 by operator + V4 by area) that share physical files, axis-owned subagents collide; file-owned subagents (each owning a geographic batch end to end, consuming all proposals that touch their files) don't. Covers the seven geographic batches that worked, what each agent needed to know, the HomeViews scale bug that slipped through, and the orchestrator's post-gate responsibilities.

### Active plans (`context/plans/`)

- [Website Refactor](plans/website-refactor.md) — six-phase plan (A foundation → F sweep) for restructuring Flatbrowser into areas-containing-projects with accordion-based deep detail. Phases A–E landed. Phase F in progress: F2 (sweep dispatched, 20 research files returned), F3 (research reviewed), F4 (partial fold-in — 55 areas, ~249 projects, RRA model rebuild). F5–F8 pending.

### References (`context/references/`)

- [Data Schema](references/data-schema.md) — locked TypeScript contract for `Area` and `Project`, with the `Provenance` block added for consensus attribution. Source of truth for the post-refactor data model and the agent return spec.
- [Candidate Areas](references/candidate-areas.md) — 95 candidates for the Phase F sweep with priors and "deepest angle" hints (informational, not ownership) per area.
- [Merge Protocol](references/merge-protocol.md) — the 7-step consensus synthesis procedure used to fold 15 agent research files into the typed dataset.
- [Renters' Rights Act 2025](references/renters-rights-act.md) — comprehensive research briefing (~1,800 lines) covering: how UK renting works today (ASTs, licences, Section 21, credit checks, income multiples, guarantors, deposits, Tenant Fees Act, upfront rent bypass, referencing providers); full breakdown of the Act (parliamentary history, commencement dates, Section 21 abolition, expanded Section 8 grounds, periodic tenancies, advance rent cap with Sections 8–9 analysis, anti-avoidance provisions, rent increase rules, discrimination provisions, rental bidding ban, PRS Ombudsman, PRS Database, Decent Homes Standard, pet provisions, enforcement mechanisms, transitional rules); exemptions (BTR — no exemption, licences, PBSA, serviced apartments, apart-hotels, The Quarters by Bravo, social housing); impact on Caner's situation (why upfront strategy stops, alternatives, professional guarantors, Open Banking referencing, licence-based accommodation strategy, phased approach); and impact on the Flatbrowser data model (field importance shifts, proposed new fields: `agreement_type`, `professional_guarantor_accepted`, `referencing_provider`, `open_banking_accepted`, recalculated `grad_visa_realism` derivation).

### Systems (`context/systems/`)

- [areas-data](systems/areas-data.md) — the data layer system: schema, label maps, filter pipeline, migration history, provenance support
- [area-browser](systems/area-browser.md) — the UI rendering system: component tree, modal stacking, accordion primitive, keyboard shortcuts, animation system, polish-pass lessons
- [explainers](systems/explainers.md) — the personal-relevance system: typed UserProfile, Explainer interface, severity model, registry pattern, the W4 centrepiece

---

## Inline durable notes

### Project intent and scope

- **This is a personal decision tool, not a product.** Confirmed by the user 2026-04-11 — built to support his real move out of Croydon. Treat scope decisions through that lens — features that would matter for a public product (URL state, persistence, multi-user filters, deep linking, SEO) are not automatically valuable here.
- **The shortlist is hand-curated, not exhaustive.** Adding new entries is a manual editorial decision until the Phase F sweep dispatches; the sweep then expands the dataset via consensus voting against a 95-candidate list.
- **The original shortlist optimised for the wrong objective.** The 19 establishments were "the absolute best projects in London" but most were unreachable for a graduate-visa renter without paid work history. The Phase 1 refactor + polish pass + sweep design fixes this by reframing search around realistic rentability, not aspirational addresses. The Renters' Rights Act 2025 (commencing 1 May 2026) further reshaped this: the "pay upfront to bypass referencing" route that was the primary workaround is now illegal (advance rent capped at one month). Post-RRA qualification routes centre on professional guarantors, Open Banking referencing, and licence-based accommodation.

### Data discipline

- **Every value in the UI is rendered through the explainer system.** No raw enum strings, no undecorated numbers — `ExplainedValue` is the contract for value boxes. If you find yourself rendering a raw value with no severity, you've skipped the layer that gives it meaning. See `systems/explainers.md`.
- **The data layer is impersonal.** The `Area` / `Project` constants in `src/areas/data/` carry raw facts; personal interpretation is computed at render time by the explainer system reading `caner.ts`. The same dataset would render meaningfully for a different `UserProfile` without any data changes.
- **The research → data fold-in is deliberately manual.** Agents propose research in `docs/research/sweep/sweep-NN-<slug>.md`; a human reviews and folds into typed `data/<slug>.ts` files following `references/merge-protocol.md`. Re-running the sweep does not auto-update typed data — that gap preserves the human review step. The legacy 2026-03 per-place reports at the top of `docs/research/` are kept in place for provenance but are not consumed by the new consensus synthesis.

### Engineering posture

- **Smooth UX over time-spent optimisation.** Confirmed 2026-04-12 — the Phase 1 polish pass that landed the explainer system, tooltips, animations, and accordion was the right call even though it was a significant detour from the sweep dispatch. The user's framing: "We don't need to optimise for 'time spent' but rather optimise for 'UX'."
- **`useDeferredValue` on filter state, `useMemo` on the sorted+filtered array.** Both are deliberate even though the dataset is small enough not to strictly need them — they keep the input responsive and make the filter pipeline cheap to scale.
- **Three-layer architecture, never the other way round.** Data layer → explainer layer → UI layer. The explainer layer doesn't import React. The data layer doesn't know about the user. This is what makes the system trivially testable and trivially extensible to a different user profile.

### Things deliberately not present

- No backend, no database, no API, no analytics, no telemetry, no error reporting.
- No URL state, no filter persistence, no favourites/shortlist UI, no comparison view (deferred to v2).
- No tests yet — the pure functions in `filtering.ts` and `explainers/*.ts` are testable but no test runner is wired up.
- No image hosting in `public/` — hero images are linked URLs with typography fallback.
- No mobile-bespoke layouts — responsive but not mobile-first.

Each is a defensible omission for a personal tool, not a backlog item by default. Adding any of them should be a confirmed decision, not a drive-by improvement.
