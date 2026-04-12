# Planned Skill: Full Dataset Upkeep ("data-upkeep" working title)

Captured 2026-04-12. This note documents the intent, design space, and open questions for a project-specific skill that will live at `skills/data-upkeep/` (or whatever the final name becomes). The skill does not exist yet — this note is the design brief for when we build it.

---

## Intent

Flatbrowser's value proposition is that every field in every area and every project is **correct, current, sourced, and relative to the rest of the dataset**. The dataset currently has 55 areas and ~249 projects, with many fields still stubbed as `"unknown"` or carrying sweep-era data that has never been verified against the real world. As the dataset grows, manual upkeep becomes unscalable — a single person cannot realistically fact-check 249 projects' rental qualification details, pricing, operator websites, building quality assessments, amenity inventories, and grade calibrations in one sitting.

This skill is the answer to that problem. A single invocation should **completely upkeep, update, and fact-check the entire dataset** — not a spot-check, not a sample, but every area, every project, every field. It is the nuclear option for data integrity: expensive to run, slow to complete, but when it finishes, every field in the dataset should be either correct or honestly flagged as unverifiable.

**This is not a quick validation script.** The existing `validate-areas.ts` checks structural integrity (are required fields present, do types match). This skill checks **factual integrity** — are the values in those fields actually true, are the grades calibrated relative to the rest of the dataset, are the prices current, are the operators still operating, have buildings completed or been delayed, have referencing policies changed.

---

## What the skill checks

### Per-project checks (the bulk of the work)

| Check | What it means | How it's verified |
|-------|--------------|-------------------|
| **Operator still operating** | Is the operator named in the data still managing this building? Operators change — buildings get sold, management contracts expire, brands merge. | Web search for "[operator] [project name]", check operator website |
| **Pricing current** | Are the price bands in `rental.prices` still accurate? Rents change quarterly in London BTR. | Web search or fetch operator website; compare against stored values |
| **Price transparency correct** | Does the `price_transparency` field match reality? An operator that used to list prices might have switched to enquiry-only, or vice versa. | Check operator website for public pricing |
| **Rental qualification current** | Income multiples, referencing providers, guarantor acceptance, agreement types — these change as operators update policies, especially post-RRA. | Web search, operator website, check if referencing provider has changed |
| **Grad-visa realism derivation** | Is the `grad_visa_realism` value still correct given the current qualification fields? This is a derived signal — if the inputs change, the output must be re-derived. | Re-derive from current qualification fields; flag if stored value disagrees |
| **External links valid** | Do the URLs in `external_links` still resolve? Link rot is constant. | HTTP HEAD check on every URL; flag 404s/redirects |
| **Building phase current** | Has a "future" or "in_delivery" project completed? Has a "complete" project been demolished or substantially renovated? | Web search for construction status |
| **Unit counts and storeys** | Are `units_total` and `storeys` correct? These are sometimes wrong in sweep data. | Cross-reference with planning documents or operator website |
| **Amenity inventory** | Has the building added or removed amenities? Pools close, gyms get upgraded, concierge hours change. | Operator website, resident reviews |
| **Resident signal current** | HomeViews scores change as new reviews come in. Common complaints and praise shift over time. | Fetch HomeViews page if URL exists; compare score |
| **Empty fields** | Any field that is `"unknown"`, `null`, empty string, or uses a stub value (`"Awaiting detailed evaluation"`, `"Not yet researched"`) — attempt to fill it from web research. | Web search per field per project |

### Per-area checks

| Check | What it means |
|-------|--------------|
| **Safety data current** | Crime stats change year-on-year. Met Police publishes updated ward-level data. |
| **Demographics current** | Census data is decennial, but mid-year estimates and new-build demographic shifts are real. |
| **Regeneration status** | Has the regeneration stage advanced? "Early" areas may now be "active"; "active" areas may now be "phased" or "complete". |
| **Connectivity** | New stations (e.g., Crossrail 2, Bakerloo extension), line closures, changed journey times. |
| **Amenity inventory** | New gyms, grocery stores, restaurants opening; closures. Especially relevant for newer regeneration areas. |
| **Long-form prose** | Does the area description still match reality? Regeneration areas change fast — a description written 6 months ago may describe construction that has since completed. |
| **Empty fields** | Same as projects — fill every `"unknown"` and stub value. |

### Cross-dataset checks (the hardest part)

| Check | What it means |
|-------|--------------|
| **Grade relativity** | ALL grades are relative to other entries in the dataset (see `context/notes/relative-grading.md`). When new areas are added or existing areas improve, the grade curve shifts. An area that was "A" when there were 14 entries might be "B" now that there are 55. The skill must compare every area and project against every other and recalibrate grades where the relative ordering has shifted. |
| **Cost tier calibration** | Cost tiers are relative. If the dataset's price distribution has shifted (new luxury entries pushing the top up, new affordable entries pulling the floor down), the tier boundaries need rechecking. |
| **Realism calibration** | If multiple operators have changed their policies (e.g., more operators accepting professional guarantors post-RRA), the "achievable" / "unlikely" / "blocked" distribution may need recalibration. |
| **Duplicate detection** | Are any projects listed under the wrong area? Are any projects listed twice under different names? (This happens — buildings get rebranded, or sweep agents use different names for the same building.) |
| **Consistency checks** | If Project A and Project B are both operated by the same operator, do they have consistent referencing provider, agreement type, and qualification policies? Operators typically apply the same policies across their portfolio — inconsistencies suggest one entry is wrong. |

---

## Scale and execution model

This is a heavy skill. A realistic execution might look like:

- **5-15 parallel research agents**, each responsible for a cluster of areas
- **Hundreds to thousands of web searches** across all agents combined
- **Every single field** in every area and project touched at least once
- **Cross-referencing pass** after individual field checks complete, to calibrate grades and tiers relative to the updated dataset

The skill must be designed for this scale from the start. It is not a lightweight lint pass — it is a full census of the dataset.

---

## The orchestration problem (open design question)

The central design question is: **who writes the changes?**

Three models, each with real trade-offs:

### Model A: Agents propose, orchestrator applies

Each agent produces a structured report of proposed changes (e.g., "Project X: change `price_transparency` from `unknown` to `listed`, change `rental.prices.one_bed.min` from 2400 to 2550, rationale: operator website checked 2026-04-12"). The orchestrator (Claude, running the skill) reads all reports, resolves conflicts, and applies changes itself.

**Pros:**
- Zero conflict risk — only one writer touches the data files
- The orchestrator can see the full picture before committing anything, catching inconsistencies between agents' proposals
- Natural review step — the orchestrator can reject implausible proposals
- Grade recalibration happens in one place with full context

**Cons:**
- Bottleneck — the orchestrator must process potentially hundreds of proposed changes sequentially
- Context pressure — the orchestrator's context window must hold enough state to apply changes intelligently
- Slower — the sequential apply phase adds wall-clock time after the parallel research phase

### Model B: Agents write change files, orchestrator merges

Each agent writes a structured JSON/TypeScript change file (e.g., `changes/batch-03-herne-hill-to-oval.ts`) containing the exact edits it wants to make. The orchestrator reads all change files, detects conflicts (two agents wanting to change the same field), resolves them, and applies the merged result.

**Pros:**
- Agents' work is durable — if the orchestrator crashes, the change files survive
- Change files are reviewable by a human before applying (the user could inspect them)
- Conflict detection is explicit and mechanical rather than relying on the orchestrator's judgment
- Intermediate state is visible — you can see what each agent wanted to do

**Cons:**
- Requires a change-file schema (more upfront design work)
- Conflict resolution still requires intelligence — mechanical merge isn't enough when two agents disagree on a grade
- Two-phase execution (write changes, then apply) is more complex than either alternative

### Model C: Agents edit directly, file-level partitioning

Each agent is assigned a disjoint set of area files and edits them directly. No two agents touch the same file. Cross-dataset checks (grade calibration, consistency) happen in a separate pass after the per-file agents finish.

**Pros:**
- Simplest execution model — each agent reads a file, edits it, moves on
- No merge step, no change files, no orchestrator bottleneck
- Fastest wall-clock time for the per-file pass

**Cons:**
- Cross-file consistency is deferred to a second pass — the per-file agents can't calibrate grades relative to areas they don't own
- If an agent makes a bad edit, it's already in the file — no review step before commit
- The second pass (cross-dataset calibration) still needs the full-context orchestrator model, so you haven't eliminated the bottleneck, just moved it

### Current leaning

**Model A (agents propose, orchestrator applies) is the safest starting point.** The dataset is the project's most valuable asset — letting agents write directly risks corruption that's hard to detect and expensive to fix. The orchestrator bottleneck is real but manageable: the orchestrator doesn't need to hold the entire dataset in context, just the current file plus the agent's proposals for that file, plus a summary of the grade curve from the cross-referencing pass.

**Model C could work as an optimisation later** once we trust the agents' judgment and have good validation to catch bad edits. But for v1, the cost of a bad direct edit (wrong grade, wrong price, wrong realism flag) is higher than the cost of a slower apply phase.

**Model B is the most complex for the least clear benefit.** The change-file schema is overhead that only pays for itself if human review of intermediate state is a common workflow — and for a personal tool, the user is more likely to review the final diff than intermediate change files.

This decision is not yet final. It should be revisited when the skill is actually built, with the benefit of having seen how the current batch-agent approach (used for the website-links pass) performed in practice.

---

## Skill location and structure

The skill will live at `skills/data-upkeep/` in the project root (alongside the existing `CLAUDE.md` skill ecosystem). The exact file structure is TBD, but a likely shape:

```
skills/
  data-upkeep/
    prompt.md          -- the skill's system prompt / instructions
    (supporting files as needed)
```

The skill will be invocable via `/data-upkeep` in the Claude Code interface. It may accept optional arguments to scope a partial run (e.g., `/data-upkeep --areas bermondsey,canary-wharf` for a targeted check), but the default invocation with no arguments runs the full dataset.

---

## Real-world examples (from the 2026-04-12 website-links pass)

The following inconsistencies were discovered during a routine data-population pass where 5 parallel agents web-searched for operator URLs and price transparency across all 55 areas. These are exactly the kind of errors the data-upkeep skill is designed to catch systematically — they were found incidentally this time, but a dedicated upkeep run would have caught every one of them in a single pass.

### Ghost projects — operator attribution doesn't match reality

| Entry | What we thought | What's actually true | How it was found |
|-------|----------------|---------------------|-----------------|
| **"The Union"** (bermondsey.ts) | Essential Living BTR in Bermondsey | Essential Living has **no Bermondsey property**. Their portfolio is: Vantage Point (Islington), Dressage Court (Bethnal Green), Union Wharf (Greenwich), Berkshire House (Maidenhead). "The Union" does not exist. | Agent searched Essential Living's website for a Bermondsey location — none found. The name is likely a conflation with "Union Wharf" in Greenwich. |
| **"Bermondsey Works"** (bermondsey.ts) | Essential Living BTR in Bermondsey | Same problem — Essential Living doesn't operate here. The sweep agent likely hallucinated or conflated two different operators. | Same search. Essential Living's locations page has no Bermondsey entry. |
| **"Essential Living Wimbledon"** (wimbledon.ts) | Essential Living property in Wimbledon | Not on Essential Living's current website. May have been sold, rebranded, or never existed under this name. | Agent searched for Essential Living Wimbledon — no results on their site or in press. |

**Why this matters:** A user clicking into "The Union" in Bermondsey would see "Essential Living" as the operator, go to Essential Living's website, find no such building, and immediately lose trust in every other entry in the dataset. Ghost projects are the single most damaging class of data error because they are visibly, obviously wrong to anyone who tries to act on them.

**What the upkeep skill would do:** For every project, verify the operator still operates it by checking the operator's website for a matching property. Flag any project where the operator's site has no corresponding listing. This is a mechanical web-search check — expensive in aggregate (249 projects), but each individual check is simple.

### Wrong operator attribution

| Entry | What we had | What's correct | How it was found |
|-------|------------|---------------|-----------------|
| **Newfoundland** (canary-wharf.ts) | Operator: "EcoWorld Ballymore" | Operator: **Vertus** (confirmed via thisisvertus.com/newfoundland) | Agent found Vertus manages the lettings; EcoWorld Ballymore was the JV developer, not the rental operator |
| **Shepherd's Bush Market** (shepherds-bush.ts) | Developer: "Orion Capital Managers" | Developer: **Yoo Capital** (Orion exited 2016; Yoo Capital acquired 2020) | Agent found the ownership change in press coverage |

**Why this matters:** Wrong operator means wrong qualification assumptions. If we think Newfoundland is operated by Ballymore (who run their own referencing), the `grad_visa_realism` derivation is based on Ballymore's policies. But it's actually Vertus (who also run their own process, but a different one). The downstream signal is corrupted even though the field itself looks plausible.

**What the upkeep skill would do:** Cross-reference operator fields against operator websites. Check that the named operator's site lists this building. Flag mismatches for correction.

### Stale/wrong URLs

| Entry | What we had | What's correct |
|-------|------------|---------------|
| **Vertus website** (canary-wharf.ts) | `vertusliving.com` | `thisisvertus.com` (the actual domain) |
| **Apo Kew Bridge** (kew-bridge-brentford.ts) | `a-part-of.com/places/south-london` | `a-part-of.com/places/kew-bridge` (Kew Bridge is in west London, not south) |

**Why this matters:** Broken or wrong links are the mildest class of error — they don't corrupt decisions, they just waste the user's time. But they accumulate fast. 219 URLs today means 219 potential 404s in six months as operators redesign their sites.

**What the upkeep skill would do:** HTTP HEAD check on every URL in `external_links`. Flag 404s, redirects to different pages, and domain changes. This is a fully automatable check with no judgment required.

### Duplicate entries across areas

| Entry | Issue |
|-------|-------|
| **One Clapham Junction** | Appears in both `clapham-common.ts` and `clapham-junction.ts` with different `area_id` values. The project sits geographically between both areas, but it should only exist in one file with a clear area assignment. |

**Why this matters:** Duplicate projects inflate counts, confuse filtering (the same project appears twice in results), and create divergence risk (if one copy is updated but not the other, the user sees contradictory data depending on which area they enter through).

**What the upkeep skill would do:** Deduplicate check — scan all project IDs and names across all area files, flag any that appear more than once or have suspiciously similar names in different areas.

### Inaccurate cross-references in prose

| Entry | Issue |
|-------|-------|
| **Vauxhall long_form** | Mentions "Essential Living Dressage Court" as operating nearby — Dressage Court is actually in Bethnal Green (E2), not Vauxhall (SW8). ~5 miles away. |

**Why this matters:** Long-form prose is read as authoritative context. If the prose says "Essential Living operates nearby", the user infers that Essential Living's referencing policies are available in this area. When the referenced building is actually in a completely different part of London, the inference is wrong and potentially leads to wasted effort.

**What the upkeep skill would do:** For operator mentions in long-form prose, verify the claimed location against the operator's actual portfolio. This is harder to automate than structured-field checks — it requires reading prose, extracting claims, and verifying them — but it's exactly the kind of cross-referencing that a thorough upkeep pass should include.

---

## What this skill is NOT

- **Not `validate-areas.ts`.** That script checks structural integrity (are fields present, do types match). This skill checks factual integrity (are the values correct).
- **Not `upkeep-context`.** That skill maintains the `context/` documentation folder. This skill maintains the `src/areas/data/` dataset.
- **Not `code-health-audit`.** That skill looks at code quality, dead code, and architecture. This skill looks at data quality, stale facts, and grade calibration.
- **Not a one-time migration.** This skill is designed to be run periodically — monthly, quarterly, or whenever the user suspects drift. The dataset ages continuously as operators change policies, buildings complete, prices shift, and the London rental market evolves.

---

## Why this matters

Flatbrowser's entire value proposition is **trustworthiness** — the user is making a real relocation decision based on what this tool says. A single wrong `grad_visa_realism` flag could send them down a months-long application process for a flat they were never going to get. A stale price could make them budget for the wrong amount. A miscalibrated grade could cause them to overlook the best candidate or pursue a mediocre one.

The existing approach (manual fact-checking during fold-in sessions, with sweep agents providing initial data) works at small scale but does not scale to 55 areas and 249 projects. The skill is the mechanism that makes the dataset maintainable at its current size and beyond.

The alternative — letting the data slowly go stale and relying on the user to spot errors during use — defeats the purpose of building the tool in the first place. If you can't trust the data, you're back to Rightmove + Google + hoping, which is exactly what Flatbrowser was built to replace.

---

## How we fixed the real-world examples (2026-04-12)

This section documents the actual fix process for the five error categories discovered during the website-links pass. It serves as a **teaching reference** for the data-upkeep skill — each fix demonstrates the investigation method, the decision framework, the blast radius analysis, and the exact edits required. When the skill is built, its agents should follow these same patterns.

### Fix methodology: the investigation-before-action principle

Every fix followed the same discipline:

1. **Read the affected file** to understand the full context — what the entry says, what other entries depend on it, what area-level reasoning references it.
2. **Web search to establish ground truth** — not to confirm what we hoped was true, but to find out what actually is true. The search must be phrased to find the operator's real portfolio, not to find evidence supporting our existing data.
3. **Assess blast radius** — a ghost project isn't just one const to delete. It may be referenced in area-level T1 reasoning ("Essential Living operates two buildings"), in the grade_reasoning, in the area headline, in the preview, in the long_form, and in other areas' cross-references. All of these must be found and corrected, or the deletion creates contradictions.
4. **Fix from the inside out** — delete the project first, then fix every reference to it, then reconsider whether the deletion changes the area's grade or evaluation.
5. **Leave a tombstone comment** — explain *what* was removed, *why* it was removed, and *how the error originated* (which sweep agent, what the likely confusion was). Future sessions reading this file should understand why the project is absent without needing to check git history.

### Fix 1: Ghost projects — "Bermondsey Works" and "The Union" (bermondsey.ts)

**Investigation:**

Web searched "Essential Living Bermondsey Works London" and "The Union Bermondsey rental London SE16". Both returned zero relevant results. Then searched "Essential Living locations London 2026" to confirm the full portfolio: Vantage Point (Islington), Dressage Court (Bethnal Green), Union Wharf (Greenwich), Berkshire House (Maidenhead). Further found that Essential Living has actually **put three of four properties up for sale** — only retaining Vantage Point. They are shrinking, not expanding into Bermondsey.

**Root cause diagnosis:**

The sweep agent (likely agent 09, rental qualification realism, or agent 11, BTR operator discovery) appears to have seen Essential Living in the list of BTR operators, known they operate "Union Wharf" in Greenwich, and either:
- Confused "Union Wharf" (Greenwich, SE10) with Bermondsey (SE16) because both are south-of-Thames waterfront areas, then fabricated "The Union" as an abbreviated name
- Invented "Bermondsey Works" as a second Essential Living property to match a pattern it expected (operators often have multiple buildings in an area)

This is a classic **LLM hallucination pattern**: the model knows the operator exists, knows the operator has London properties, and confabulates a plausible-sounding property name in a plausible-sounding location. The name "Bermondsey Works" follows real London naming conventions (location + industrial-heritage noun). The name "The Union" is close to the real "Union Wharf". Both are designed to pass a casual plausibility check.

**Blast radius analysis:**

The two ghost projects were referenced in:
- The `projects` array (direct inclusion)
- T1 criterion 1.2 reasoning: "Essential Living operates Bermondsey Works and The Union — modern managed rental stock present"
- T1 criterion 1.4 reasoning: "Essential Living (Tier 10) operates two buildings"
- `grade_reasoning`: "Essential Living operator presence is real but policy-opaque"
- The area still has three real projects (The Copyhouse / Grainger, Pearl Yard / Greystar, The Bermondsey Project / Greystar), so the T1 pass is not endangered — Greystar is a Tier 1 global BTR operator, far stronger than Essential Living

**Edits made:**

1. Deleted both `buildProject()` consts and their `external_links` mutations
2. Added a tombstone comment explaining what was removed, why, and how the error originated
3. Rewrote T1 criterion 1.2 to reference the real operators: "Greystar Pearl Yard (1,600+ BTR units) and The Bermondsey Project (1,624 homes)"
4. Rewrote T1 criterion 1.4 to reference Greystar and Grainger
5. Rewrote `grade_reasoning` to reference Greystar's pipeline instead of Essential Living
6. Removed both from the `projects` array

**Grade impact:** None. The area grade stayed at B. If anything, the real picture (two massive Greystar schemes totalling 3,200+ homes) is *stronger* than the hallucinated picture (two small Essential Living buildings with opaque policies). The grade could arguably go up, but with Greystar schemes still in phased delivery, B remains appropriate.

### Fix 2: Ghost project — "Essential Living Wimbledon" (wimbledon.ts)

**Investigation:**

Web searched "Essential Living Wimbledon apartments rental London". Zero results on Essential Living's site. Confirmed the same portfolio as above — no Wimbledon property exists or has ever existed.

**Root cause diagnosis:**

Sweep agent 11 (BTR operator discovery) was tasked with finding BTR buildings the candidate list missed. It correctly identified Essential Living as a London BTR operator, but then projected a Wimbledon presence that doesn't exist. The entire Wimbledon area entry was surfaced *because* of this hallucinated Essential Living project — the area headline said "a genuine upgrade target with Essential Living BTR presence" and the preview said "Essential Living has delivered a BTR scheme here".

**Blast radius analysis:**

This was worse than Bermondsey because the ghost project was *the reason the area was included*. Essential Living was referenced in:
- The project itself (the const + external_links + price_transparency)
- Area `headline`: "with Essential Living BTR presence"
- Area `preview`: "Essential Living has delivered a BTR scheme here"
- Area `long_form.full`: "Essential Living has delivered a BTR scheme here"
- Area `long_form.notable`: "Essential Living BTR presence"
- T1 criterion 1.2: "Essential Living BTR scheme provides modern rental stock"
- `grade_reasoning`: "discovery candidate with Essential Living BTR presence"
- Area-level `external_links` (pointed to essentialliving.co.uk)

**Edits made:**

1. Deleted the `essentialLivingWimbledon` const and its mutations
2. Added a tombstone comment explaining the hallucination origin (agent 11 projected a presence that doesn't exist)
3. Rewrote `headline` to remove Essential Living, focus on transport
4. Rewrote `preview` to honestly state "No flagship BTR operator"
5. Rewrote `long_form.full` to remove the Essential Living claim
6. Rewrote `long_form.notable` to reference Wimbledon Common instead
7. Rewrote T1 criterion 1.2 to reference the BTS stock that does exist
8. Rewrote `grade_reasoning` to note the downgrade rationale
9. **Downgraded the area from B to C** — without a BTR operator, T1.4 (active professional rental market) is weaker, and the area was originally graded B partly because of the Essential Living presence
10. Removed the Essential Living area-level external_link
11. Removed the project from the `projects` array

**Grade impact:** B → C. The removal of the only BTR project weakens the area's rental-market proposition. Wimbledon remains a valid discovery candidate (strong transport, strong identity) but it's now honestly positioned as an area with BTS-only stock, which is harder for a graduate-visa renter. The C grade is more truthful.

**Key lesson for the upkeep skill:** When a ghost project is discovered, check whether the area was *included in the dataset because of that project*. If so, the area's grade and evaluation need fundamental reassessment, not just a project deletion.

### Fix 3: Inaccurate cross-references — Essential Living in vauxhall.ts

**Investigation:**

The vauxhall.ts file referenced "Essential Living Dressage Court" as operating nearby in three places: the `preview`, the `long_form.full`, and T1 criterion 1.2. Dressage Court is Essential Living's Bethnal Green (E2) property — approximately 5 miles from Vauxhall (SW8), on the opposite side of the Thames, in a completely different part of London.

**Root cause diagnosis:**

The sweep agent knew Essential Living existed and knew Dressage Court was one of their properties, but placed it in Vauxhall rather than Bethnal Green. This is a **geographic hallucination** — the model confabulated a spatial relationship that doesn't exist. Unlike the Bermondsey and Wimbledon cases (where the property itself was fake), here the property is real but the claimed proximity is wrong.

**Blast radius analysis:**

Essential Living was referenced in:
- `preview`: "Greystar Bloom and Essential Living operate nearby"
- `long_form.full`: "Essential Living operates The Dressage Court"
- T1 criterion 1.2: "Essential Living Dressage Court" listed as modern stock
- T1 criterion 1.4: "Essential Living and Greystar Bloom operate nearby"

The area has 6 real projects (St George Wharf, Keybridge, DAMAC Tower, The Dumont, The Corniche, Merano Residences) — all individual-landlord BTS stock. The T1 picture is that Vauxhall has modern stock (it does) and an active rental market (it does, via agents), but no BTR operator presence.

**Edits made:**

1. Removed "Essential Living" from `preview` — now just mentions Greystar Bloom on the boundary
2. Removed "Essential Living operates The Dressage Court" from `long_form.full`
3. Rewrote T1 criterion 1.2 to reference actual nearby stock: Greystar Bloom, Berkeley St James Sky Gardens, St George Wharf
4. Rewrote T1 criterion 1.4 to remove Essential Living, reference Greystar Bloom on the boundary and the agent-managed market

**Grade impact:** None. The area grade was already reflecting a marginal T1.1 (safety concerns). The Essential Living reference was colour, not load-bearing for the grade.

### Fix 4: Duplicate project — One Clapham Junction in two files

**Investigation:**

"One Clapham Junction" (Mount Anvil / Peabody, 307 homes, Hawkins\Brown architect) appeared in both `clapham-common.ts` and `clapham-junction.ts`. The project is physically located at Clapham Junction station, SW11, in Wandsworth borough.

**Decision framework:**

The project should live in exactly one area file. The tie-breaking factors:
- **Physical location:** The project is at Clapham Junction station, not Clapham Common. SW11, not SW4. Wandsworth borough, not Lambeth.
- **Data richness:** The `clapham-junction.ts` entry has richer data (307 homes, 6 buildings, Hawkins\Brown architect, Peloton hub, phased delivery 2025-2026). The `clapham-common.ts` entry was a simpler stub ("~200+ units", "Technically SW11 but within walking distance of Clapham Common").
- **Area coherence:** Clapham Common is a C-grade area with no BTR operator. The project being "nearby but technically in a different area" doesn't change Clapham Common's character. But it is genuinely part of the Clapham Junction cluster.

**Decision:** Keep in `clapham-junction.ts`, remove from `clapham-common.ts`.

**Edits made:**

1. Removed the inline `buildProject()` call from `clapham-common.ts`'s projects array
2. Added a tombstone comment explaining where the authoritative entry lives
3. Removed the stale `oneCJ` mutation block that referenced the deleted project
4. Left `clapham-junction.ts` untouched — its entry is the authoritative one with full data, external_links, and price_transparency already set

**Grade impact:** None to either area. Clapham Common was already C without this project contributing to its evaluation. Clapham Junction already had the project in its evaluation.

---

### Patterns the upkeep skill should codify from these fixes

1. **Operator portfolio verification is the single highest-value check.** Three of the five error categories (ghost projects in Bermondsey, ghost project in Wimbledon, wrong cross-reference in Vauxhall) would have been caught by one mechanical operation: for every project, check the named operator's website to confirm the project exists in their portfolio. This is a web-search-per-project operation, expensive in aggregate but simple per check.

2. **Ghost projects poison area evaluations.** When a hallucinated project is the *reason* an area was graded a certain way, removing the project requires reassessing the grade. The skill must trace the dependency: does any T1 criterion, grade_reasoning, headline, preview, or long_form reference the project being removed? If so, all of those need rewriting.

3. **Tombstone comments are not optional.** Every removal must explain what was removed, why, and how the error originated. Without this, a future session seeing "Bermondsey has 3 projects" might think two were accidentally deleted and re-add them.

4. **Duplicates are resolved by physical location + data richness.** When the same project appears in two area files, it belongs in the area where it physically sits. If both entries have data, keep the richer one. The other file gets a tombstone comment pointing to the authoritative entry.

5. **Grade changes cascade from project removals.** Wimbledon went from B to C because the removed project was the only BTR entry. The skill must model this: if removing a project changes the T1.4 (professional rental market) assessment, the overall grade may need recalibrating.

6. **Prose references are harder to find than structured fields.** The Essential Living references in vauxhall.ts were in free-text fields (preview, long_form.full, T1 reasoning strings). A grep for the operator name across all data files is essential before considering any operator-related fix complete. The skill should grep for the operator/project name across the entire `src/areas/data/` directory after any deletion to catch stray prose references.

7. **Web search phrasing matters.** Searching "Essential Living Bermondsey Works" (which tries to find the thing we think exists) is less valuable than searching "Essential Living locations London 2026" (which finds what actually exists). The skill's agents should search for the operator's actual portfolio, not for confirmation of the dataset's claims.
