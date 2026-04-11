# Notes

This file is the index for project preferences, design rationale, lessons, and constraints that inform how Flatbrowser is built. Per the project's note-capture discipline, entries here are **resolved knowledge** — accepted decisions, stated preferences, articulated trade-offs, and non-obvious lessons. In-flight deliberation does not belong here; it lives in chat or in `context/plans/`.

This context folder was initialised on **2026-04-11** by reading the codebase cold. Most of what follows is therefore inferred from the code itself rather than from explicit conversation. Inferred entries are marked with *(inferred)* so a future session knows whether the maintainer ever explicitly confirmed them.

---

## Index

- [User Profile — Ata Caner Cetinkaya](notes/user-profile.md) — durable snapshot of identity, visa, education, career direction, lifestyle, and engineering preferences extracted from the upstream Cernio profile repo on 2026-04-11
- [Relocation Constraints](notes/relocation-constraints.md) — current rent baseline (~£3k all-in at Ten Degrees, Croydon), the rental-qualification wall (income proof / upfront / credit history / visa expiry blockers), and the questions that must be answered before redesigning the shortlist
- [London Search Rubric](notes/search-rubric.md) — locked 5-tier criteria (T1 viability → T5 personal fit) that drives which areas qualify for Flatbrowser and how each is evaluated; authoritative for the upcoming London-wide sweep and the data-model restructure into areas-containing-projects

### Active plans (`context/plans/`)

- [Website Refactor](plans/website-refactor.md) — six-phase plan (A foundation → F sweep) for restructuring Flatbrowser into areas-containing-projects with accordion-based deep detail. All 10 open decisions locked. This is the active spine driving the next chunk of work.

### References (`context/references/`)

- [Data Schema](references/data-schema.md) — locked TypeScript contract for `Area` and `Project`. Drives the data layer refactor (Phase B), the UI rendering (Phase C), and the agent return spec (Phase E/F). Source of truth for the post-refactor data model.
- [Candidate Areas](references/candidate-areas.md) — 95 candidates for the Phase F sweep with priors, focus assignments, and rationale per area.

### Systems (`context/systems/`)

- [areas-data](systems/areas-data.md) — the data layer system (post-refactor)
- [area-browser](systems/area-browser.md) — the UI rendering system (post-refactor)

The remaining inline entries below capture knowledge that has not yet earned its own file.

### Project intent and scope

- **This is a personal decision tool, not a product.** Confirmed by the user 2026-04-11 — built to support his real move out of Croydon. Treat scope decisions through that lens — features that would matter for a public product (URL state, persistence, multi-user filters, deep linking, SEO) are not automatically valuable here.
- **The shortlist is hand-curated, not exhaustive.** *(inferred)* The 19 establishments were chosen deliberately. Adding new ones is a manual editorial decision, not a data pipeline.
- **The original shortlist optimised for the wrong objective.** Confirmed by the user 2026-04-11. The 19 areas in the dataset were selected as "the absolute best projects in london", but most of them are unreachable for a graduate-visa renter without paid work history (see `notes/relocation-constraints.md`). The next phase of the project is to **generalise the search** away from trophy addresses and toward areas that are realistically rentable. The exact shape of the generalisation is in flight — see chat.

### Data discipline

- **Tag values are evidence-led, not vibes-led.** The `docs/research/` archive is the working record of what was checked against what. The hard rules from `scripts/launch_research_agents.mjs` (Census 2021 for demo/age, TfL fare maps for zone, live listings for tenure/price) are the standard the dataset is held to. When editing tags, the same standard applies — if you cannot point to a source, do not change the tag.
- **The research → data fold-in is deliberately manual.** Agents propose corrections in `summary.md`; a human reviews and applies them. Re-running the script will not auto-update `data/<slug>.ts`, and that gap is the point — it preserves the human review step.

### Filter semantics

- **AND-within-category may or may not be intentional.** `matchesFilters` requires every selected value in a category to be present on an establishment, not just any one of them. This is unusual for faceted UIs, where OR-within-facet is the default. The current behaviour has not been documented as a design choice in the code or in chat — flagged here so a future session knows to check rather than assume.

### Stack and tooling

- **Next.js App Router with a single route.** The whole app is `app/page.tsx` → `GuideClient`. There is no routing model to defend or extend.
- **Tailwind v4 is imported globally but the guide UI uses CSS modules.** The actual visual identity lives in `src/components/relocation-guide/guide.module.css`. Tailwind classes are not the primary styling vehicle.
- **`useDeferredValue` is used on the search query.** This is a deliberate choice for input responsiveness even though the dataset is small enough not to need it today.

### Things deliberately not present

- No tests, no analytics, no error reporting, no images, no URL state, no persistence. Each is a defensible omission for a personal tool, not a backlog item by default. Adding any of them should be a confirmed decision, not a drive-by improvement.
