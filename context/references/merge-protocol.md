# Merge Protocol — Phase F Sweep Output Consolidation

The procedure for consolidating 10 parallel sweep agents' outputs into the typed `src/areas/data/<slug>.ts` files. Authored 2026-04-11 as task **E4** of `context/plans/website-refactor.md`.

The sweep produces ~95 candidate areas worth of research, each touched by:
- 1 primary agent (owns the master Area entry)
- ~3-5 secondary agents (each filling their focus's fields)

Without a merge protocol, the consolidation step would silently lose data when secondary agents disagree with primary agents. This document defines the rules.

---

## Goals

1. **Preserve provenance.** Every fact in the final entry traces back to which agent wrote it.
2. **Surface conflicts.** When two agents disagree, the conflict is flagged for human review rather than silently overwritten.
3. **Honour the focus.** Where focus agents have specialist knowledge, their fields take precedence over the primary agent's stub.
4. **Default to primary.** When there's no focus override, the primary agent's value is the final value.

---

## Inputs

After the sweep finishes, the file system contains:

```
docs/research/
├── sweep-safety-foundational/
│   ├── shadwell.md            ← agent 1 primary
│   ├── stamford-hill.md        ← agent 1 primary
│   ├── ...
│   ├── kings-cross.patch.md    ← agent 1 secondary on KX
│   └── canary-wharf.patch.md   ← agent 1 secondary on CW
├── sweep-daily-life/
│   ├── mile-end.md             ← agent 2 primary
│   ├── ...
├── sweep-younger-demographic/
├── sweep-cultural-identity/
├── sweep-green-and-water/
├── sweep-premium-amenity/
├── sweep-multi-cluster-connectivity/
├── sweep-regeneration-trajectory/
├── sweep-rental-qualification/
└── sweep-resident-voice/
```

For each candidate area, the merge step has:
- 1 primary `<slug>.md` from one agent
- 0–9 secondary `<slug>.patch.md` files from other agents

---

## Step-by-step protocol

### Step 1 — Identify the primary file per area

Look up the area in `context/references/candidate-areas.md` and find the assigned primary focus. Open `docs/research/sweep-<focus>/<slug>.md` — this is the canonical source for the area's identity, long_form, and any field not explicitly owned by another focus.

### Step 2 — Apply the field-level ownership map

| Field | Primary owner | Secondary contributors |
|---|---|---|
| `id`, `name`, `aliases`, `borough`, `postcodes` | Primary | None |
| `headline`, `preview`, `hero_image_url` | Primary | Cultural-identity (4) for richer language |
| `long_form.full`, `history`, `notable`, `croydon_comparison` | Primary | None |
| `long_form.vibe` | Cultural-identity (4) | Resident-voice (10) for synthesis |
| `long_form.weekday`, `weekend` | Cultural-identity (4) | Primary if 4 didn't touch |
| `zones` | Connectivity (7) | Primary fallback |
| `connectivity.*` | Connectivity (7) | Primary fallback |
| `demographics.*` | Younger-demographic (3) | Primary fallback |
| `safety.*` | Safety-foundational (1) | Primary fallback |
| `green_and_water.*` | Green-water (5) | Primary fallback |
| `amenities.*` | Daily-life (2) | Primary fallback |
| `regeneration.*` | Regeneration-trajectory (8) | Primary fallback |
| `evaluation.t1_*` | Safety-foundational (1) | Primary fallback |
| `evaluation.t2_*` | Daily-life (2) for 2.1/2.2/2.3, Younger-demographic (3) for 2.7, others Primary | Primary fallback |
| `evaluation.t3_*` | Cultural-identity (4) | Regeneration-trajectory (8) for 3.1, Primary fallback |
| `evaluation.t5_*` | Connectivity (7) for 5.1/5.2, Regeneration-trajectory (8) for 5.3, Cultural-identity (4) for 5.4 | Primary fallback |
| `evaluation.overall_grade`, `grade_reasoning` | Primary (synthesised from tier evaluations) | None |
| `projects[*].rental.qualification.*` | Rental-qualification (9) | Primary fallback |
| `projects[*].amenities.*`, `architecture.*` | Premium-amenity (6) | Primary fallback |
| `projects[*].resident_signal.*` | Resident-voice (10) | Primary fallback |
| `projects[*]` everything else | Primary | None |
| `external_links` | Primary + all secondaries (union) | All |
| `personal_notes` | Caner only — never written by any agent | — |
| `research.primary_agent` | Primary's name | — |
| `research.research_date`, `last_verified` | Primary's date | — |
| `research.confidence` | Primary's call | — |
| `research.open_questions` | Union of all agents' open questions | All |

The "Primary fallback" rule means: if the focus agent didn't fill a field (e.g. agent 5 had nothing to say about an area's green space because the area genuinely has none), the primary agent's value is used.

### Step 3 — Resolve conflicts

When two agents disagree on a field (e.g. agent 1 says `safety.overall: "moderate"` and the primary says `"safe"`), the merge step:

1. **Picks the focus owner's value** as the final value.
2. **Records both values in `research.open_questions`** with the format: `"Conflict on safety.overall: agent 1 said 'moderate' (source: ...), primary said 'safe' (source: ...). Used agent 1 value per field ownership. Human review needed."`
3. **Does NOT silently overwrite.** Conflicts are visible in the final entry's open questions list and surface to the human reviewer.

### Step 4 — Validate the merged entry

Run `pnpm exec tsx scripts/validate-areas.ts` after each merged file is written. Any structural errors halt the merge for that area until fixed.

### Step 5 — Write the typed TypeScript file

The merged entry is written to `src/areas/data/<slug>.ts` as a typed `Area` constant, replacing the existing migrated stub. The format follows the existing migrated entries (see e.g. `wembley-park.ts` as the worked example).

### Step 6 — Update `src/areas/data/index.ts`

Add the new area's import and include it in the `areas[]` export array. Order is curated — Caner can re-order after the sweep lands.

### Step 7 — Update Caner-facing summary

Append a one-line entry to a `docs/research/sweep-summary.md` file noting the area's overall grade and the headline finding. This becomes the master correction/addition table for the sweep, equivalent to the existing `docs/research/summary.md` for the original 18.

---

## Conflict examples and resolutions

| Field | Agent A says | Agent B says | Winner | Reason |
|---|---|---|---|---|
| `safety.overall` | "moderate" (agent 1) | "safe" (primary, agent 4) | Agent 1 | Agent 1 owns safety per the field ownership map |
| `connectivity.times_to_anchors.canary_wharf` | 28 (agent 7) | 25 (primary, agent 5) | Agent 7 | Agent 7 owns connectivity |
| `qualification.grad_visa_realism` | "achievable" (agent 9) | "unlikely" (primary, agent 1) | Agent 9 | Agent 9 owns rental qualification — even if it's a different call |
| `vibe` paragraph | Agent 4's prose | Agent 10's prose | Agent 4 | Agent 4 owns vibe; agent 10's input is supporting |
| `regeneration.trajectory_through_2027` | "ascending" (agent 8) | "stable" (primary, agent 4) | Agent 8 | Agent 8 owns regeneration |

When the field ownership map doesn't clearly assign ownership, the primary agent wins by default and the conflict is logged.

---

## Quality bar after merging

Before considering the sweep complete, every merged area must:

1. Pass the validation script (`scripts/validate-areas.ts`)
2. Have `research.confidence` honestly graded (high / medium / low)
3. Have all rubric criteria populated (no `status: "unknown"` for criteria that should have been researched, only for genuinely unverifiable ones)
4. Have at least 3 source URLs across the entire entry
5. Have non-empty long_form sub-fields (use `[needs sweep]` placeholders only as a last resort)

Areas that fail the quality bar are flagged for human review before being merged into the live dataset.

---

## What "done" looks like for the merge step

1. ✅ Every area in the candidate list has a merged entry in `src/areas/data/`
2. ✅ Every project has a populated `qualification` block
3. ✅ Validation passes with 0 errors
4. ✅ The website renders all areas with no broken accordions
5. ✅ A `docs/research/sweep-summary.md` exists with one line per area
6. ✅ Open questions list is non-empty for areas where any conflicts arose, and the human reviewer has a clear list of next-step questions to investigate

---

## Discovery agent outputs (agents 11–15)

The 5 discovery agents (BTR portfolio sweep, planning pipeline, press & architecture, resident voice, excluded reconsideration) produce a fundamentally different output from the 10 focus agents:

- **Focus agents** (1–10): write master entries and patches against the existing candidate list. Their output gets merged into `src/areas/data/<slug>.ts` directly.
- **Discovery agents** (11–15): write **proposals** for new candidates. Their output is `docs/research/sweep-discovery-<slug>/proposals.md` containing structured suggestions.

Discovery proposals do NOT get auto-merged into the dataset. They are reviewed by a human, triaged, and the strongest candidates are added to `context/references/candidate-areas.md` as a **second wave**. The second wave is then dispatched as a smaller follow-on sweep targeting only the new candidates.

### Triage protocol

After the main sweep finishes, before considering the merge complete:

1. **Read all 5 discovery proposal files** in `docs/research/sweep-discovery-*/proposals.md`.
2. **Deduplicate** — multiple discovery agents may surface the same area from different angles. Consolidate.
3. **Triage by strength** using these signals:
   - **Strong** (add to candidate list): backed by ≥2 sources, clear rationale, plausible to pass T1
   - **Medium** (worth a quick check): single strong source, plausible
   - **Weak** (note but defer): anecdotal or speculative
4. **Decide candidate-list additions**: pick the strong proposals plus any medium proposals that overlap with Caner's stated interests. Aim for 5–20 additions, not 50 — quality over quantity.
5. **Update `context/references/candidate-areas.md`** by adding the strong/medium proposals to the "New candidates" section with a `[Discovery Wave 2]` tag and the originating discovery agent's name.
6. **Dispatch a smaller follow-on sweep** by running the launch script with a filtered focus list (or adapt the script to take a `--candidates-only` flag pointing at a smaller list).
7. **Merge the second-wave outputs** into the dataset using the same protocol as the first wave.
8. **Archive the discovery proposals** by moving them to `docs/research/sweep-discovery-archive/<date>/` so the next sweep run starts clean.

### Reading discovery proposals: what to look for

| Discovery agent | Headline finding to look for |
|---|---|
| 11 — BTR operators | A new operator with explicitly grad-visa-friendly referencing policies, OR a major BTR location we missed |
| 12 — Planning pipeline | A consented masterplan completing 2026/2027 (matches the visa transition window) |
| 13 — Press & architecture | An area appearing on multiple "best of London" lists OR a Stirling/RIBA-shortlisted residential building we don't have |
| 14 — Resident voice | A first-hand grad-visa renter success story documenting how they actually passed referencing somewhere |
| 15 — Excluded reconsider | Any plausible Elizabeth Line-driven reconsideration of an outer-London area we dismissed |

The single highest-value find from any discovery agent would be **a documented operator that accepts grad-visa renters with no UK credit history through standard referencing** — that finding alone would change Caner's decision-making more than any 50 area entries.

### What discovery proposals are NOT

- They are not finished `Area` entries — never paste them directly into `src/areas/data/`.
- They are not authoritative — every proposal gets human review before promotion to the candidate list.
- They are not exhaustive — discovery agents are intentionally bounded by their source list, and a human triage step is required to catch what they missed.
- They are not safe to ignore — even if no proposal makes it into the candidate list, the act of running the discovery sweep is what gives confidence that the candidate list is genuinely complete.
