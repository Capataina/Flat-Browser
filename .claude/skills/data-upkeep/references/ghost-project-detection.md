# Ghost-Project Detection

Methodology for catching projects in the Flatbrowser dataset whose named operator doesn't actually manage them (or doesn't exist in their stated form). This is the single highest-value trust check the skill performs.

The precedent is the 2026-04-12 sweep cleanup, documented in the original design brief at `context/notes/data-upkeep-skill.md` § "Real-world examples". Multiple ghost projects had been authored by the 2026-04 sweep agents — hallucinated buildings or wrong operator attribution that would have led a user to email an operator about a building that doesn't exist in their portfolio.

---

## The core check

For every project attributed to an operator, verify:

1. **Does the operator exist as stated?** Has the company been acquired, renamed, dissolved, or exited BTR?
2. **Does the operator list this specific building in their portfolio?** Operator websites usually have an "Our buildings" / "Locations" / "Portfolio" page.
3. **Is the building named correctly?** Operators sometimes rebrand buildings; the dataset might carry the old name.

If any of these fail, flag the project as a ghost-project candidate. Deletion is **always** gated on explicit user confirmation — never auto-delete.

---

## Verification workflow

### Step 1 — Confirm operator exists

Search: `"<operator name>" London BTR 2026`

Red flags:
- No operator site loads
- Operator's portfolio page shows "company dissolved" / "acquired by X"
- Most recent news about the operator is >18 months old
- Operator's stated London buildings have all been sold/exited (Essential Living in 2026 was shrinking — only retaining Vantage Point; three of four properties up for sale)

Green flags:
- Active site with current buildings
- Recent (last 6-12 months) press mentions
- Portfolio page lists the project in question

### Step 2 — Find operator's portfolio page

Search: `"<operator>" our buildings` or `"<operator>" locations` or `site:<operator-domain> portfolio`.

Fetch the page. Scan for the specific building name from the dataset.

### Step 3 — Match the building

Three possible outcomes:

**Clean match** — exact name found on portfolio page → no flag.

**Fuzzy match** — similar-but-not-identical name found (operator rebranded, dataset has old name) → update the `name` field, note in proposals, no flag.

**No match** — building doesn't appear in the operator's current portfolio → **ghost-project flag**.

### Step 4 — Corroborate the ghost-project flag

Before flagging for deletion, cross-check:

1. Search press coverage: did this building exist historically under this operator? If the operator sold the building to another, the dataset should be updated with the new operator, not deleted.
2. Check for the building under a different operator name: `"<building name>" London rental operator`.
3. Check postcode or address: if the dataset has a specific postcode, verify that postcode contains such a building (even if operator is wrong).

Only flag `"ghost"` if none of these corroborations find the building. If corroboration finds the building under a different operator, flag as `"wrong-operator"` instead and propose the correction.

---

## Categories of flag

### Category A — True ghost project

The building does not exist. Example from 2026-04-12:
- "Bermondsey Works" (attributed to Essential Living) — doesn't exist. Essential Living has no Bermondsey property.
- "The Union" (attributed to Essential Living in Bermondsey) — doesn't exist. Likely an agent's conflation with real "Union Wharf" in Greenwich.
- "Essential Living Wimbledon" — doesn't exist.

**Action on user confirmation:** delete from dataset + tombstone comment + re-examine area grade if this was the area's only BTR.

### Category B — Wrong operator attribution

The building exists, but the dataset names the wrong operator. Example:
- Newfoundland (Canary Wharf) was attributed to "EcoWorld Ballymore" — Vertus actually operates the rentals. EcoWorld Ballymore was the JV developer.

**Action on user confirmation:** update the `operator` field, re-research qualification policies under the correct operator (their policies may differ), update `external_links`.

### Category C — Defunct operator

The named operator no longer exists in its stated form (sold, dissolved, merged). The building may still exist under a new operator.

**Action on user confirmation:** research who operates the building now. If a successor exists, update operator + re-research. If building is no longer rentable (sold as condos, demolished), delete.

### Category D — Rebranded building

The building exists under the stated operator but has been renamed since the dataset was authored.

**Action on user confirmation:** update `name` field. No ghost-project concern.

---

## The blast-radius problem

Ghost projects aren't just one `buildProject()` call to delete. They're often referenced in:

- The parent area's `projects: [...]` array (obvious — the direct reference)
- Area-level T1 criterion reasoning ("Essential Living operates two buildings")
- Area `grade_reasoning`
- Area `headline` ("upgrade target with Essential Living BTR presence")
- Area `preview`
- Area `long_form.full`, `long_form.notable`
- Area-level `external_links` (pointing to the non-existent operator page)
- Cross-references in OTHER areas' long-form prose (Vauxhall referenced Essential Living's Bethnal Green property as "operating nearby" — wrong geographic claim)

**Before proposing any ghost-project deletion, grep the entire `src/areas/data/` directory for:**
- The project name
- The operator name
- The project ID

List every reference in the proposal. Some will need rewriting; some will need deletion; some will need updating. The skill's Phase 3 apply step handles these cascades, but the Phase 2 proposal must enumerate them.

---

## Grade-impact flag

If removing a ghost project would:
- Drop the area's BTR project count to zero
- Remove the only operator from a previously-"BTR-present" area
- Invalidate a T1 criterion currently marked `"pass"`

…flag the area grade for potential review. V1 does not recalibrate grades (that's v3), but the report should surface these cases so the user knows which areas need manual reassessment.

The 2026-04-12 Wimbledon case was exactly this: removing the ghost Essential Living project dropped Wimbledon from B to C because it was the only BTR entry and T1.4 (active professional rental market) weakened without it.

---

## Tombstone pattern

When a ghost project is deleted, **always** leave a comment in the area data file explaining:

1. What was removed (project name + operator)
2. When (date)
3. Why (the specific evidence — "not in Essential Living's current portfolio as of 2026-XX-XX")
4. How the error originated if detectable (which sweep agent, what the likely confusion was)

Example:

```typescript
// REMOVED 2026-XX-XX: "The Union" (Essential Living)
// Essential Living has no Bermondsey property. Portfolio verified at
// essentialliving.co.uk/locations: Vantage Point (Islington), Dressage Court
// (Bethnal Green), Union Wharf (Greenwich), Berkshire House (Maidenhead).
// The name "The Union" appears to be the agent's conflation with the real
// "Union Wharf" in Greenwich. Reasoning retained in Bermondsey T1.4 reasoning.

// REMOVED 2026-XX-XX: "Bermondsey Works" (Essential Living)
// Same origin — hallucinated project by sweep agent. Essential Living is
// actually shrinking (three of four properties up for sale) and has no
// Bermondsey presence.
```

Without tombstones, a future session reading this file might assume the missing projects were lost to a bad diff and re-add them.

---

## User-confirmation gate

The skill's Phase 3 presents ghost-project flags like this:

> Agent flagged: "<project-name>" (area: <area-slug>, named operator: <operator>)
> Category: <A/B/C/D>
> Evidence: <agent's reasoning — what was searched, what wasn't found>
> Blast radius: <N references in <area>.ts + cross-references in <other files>>
> Grade impact: <none / potential — area may drop from <X> to <Y>>
>
> Delete / Correct / Keep and mark `"unclear"`?

User responses:
- **Delete** → proceed with removal + blast-radius cleanup + tombstone comment
- **Correct** → take the agent's proposed correction (new operator name, new building name) and apply
- **Keep and mark `"unclear"`** → leave the project but set `grad_visa_realism: "unclear"` with note explaining why

The "keep and mark unclear" option exists for cases where the user has private knowledge the agent couldn't find (e.g. "the building exists, I have a friend who lives there, the agent just couldn't find the operator's website").

---

## Category B+ — Reattribution workflow (operator wrong, building real)

When an agent determines the building exists but the named operator doesn't manage it (e.g. Newfoundland is Vertus not EcoWorld Ballymore; APT Living Kew Bridge is for-sale not APO), the fix is **reattribution**, not deletion. The workflow:

### Step 1 — Identify correct operator

Agent runs the portfolio-check on the proposed correct operator. Confirms the building appears in their current portfolio with matching name and postcode.

### Step 2 — Re-research under correct operator

**Important:** the correct operator may have materially different qualification policies than the dataset currently records. Do not preserve the old operator's qualification fields blindly — re-run the full qualification pass under the correct operator's stack.

### Step 3 — Blast-radius rewrites

The dataset may reference the old operator in area-level prose or T1 criteria reasoning. Grep and list:
- Area `long_form.full`
- Area T1 criterion reasoning
- Area `grade_reasoning`
- Cross-area prose mentioning the (incorrect) operator in relation to this building

Each requires a rewrite to the correct operator name.

### Step 4 — Proposals format

Reattribution proposals look different from ghost-deletions:

```markdown
## Reattribution proposal

Project: Newfoundland (Canary Wharf)
Current operator: "EcoWorld Ballymore"
Proposed operator: "Vertus"
Evidence: Vertus's portfolio page lists Newfoundland; EcoWorld Ballymore was the JV developer only; confirmed via https://vertus.com/our-buildings.

Qualification changes:
- referencing_provider: in-house → Vertus in-house (opaque)
- cost_tier: premium → luxury (Vertus's luxury-opaque positioning)
- [etc.]

Blast-radius rewrites required:
- canary-wharf.ts L247: "operated by EcoWorld Ballymore" → "operated by Vertus"
- canary-wharf.ts T1.4 reasoning: same rewrite
```

The orchestrator gates on user confirmation (same as ghost deletions) before applying.

---

## Missing projects — the positive discovery workflow

Ghost detection is the "project listed but doesn't exist" direction. The inverse is **the building exists, the operator lists it, but it's not in the Flatbrowser dataset** — projects that *should* be in the dataset and aren't.

The V1 run surfaced 6 such cases (Fizzy Walthamstow, Vertus 50-60 Charter St, Wardian, Park Central × 4, Knight Dragon Lighterman, Berkeley Foundry Yard). V2+ should catch these systematically.

### When to propose an addition

An operator-research pass should propose adding a project when:
- The operator's current portfolio page lists a building not in the dataset under their operator name
- The omission is substantive (not an older-name variant of an existing entry)
- The building falls within an area already in the dataset (i.e. `area_id` exists)
- The building is currently rentable (not demolished, not paused for remediation, not pre-delivery with no target date)

### Additions need confirmation gate

New additions affect area project count, area grades (potentially), and are the direct inverse of ghost deletions. Same user-confirmation gate applies:

> Operator `<name>` currently lists `<building>` in their portfolio. Building is in area `<area>` (already in dataset) and is currently rentable. Evidence: `<portfolio-URL>`. Add to dataset?

If user confirms:
- Full qualification research is done (agent covers it in the same batch — same operator, same stack)
- Enrichment fields populated per V2
- Project record built via `buildProject()` helper
- Appended to area's `projects[]` array
- Area grade potentially reassessed (flag for V3)

If user declines: leave out. The reason is recorded in `context/data-upkeep/runs/<date>.md` under "Declined additions — reason".

### Additions do NOT trigger area inventory churn

An addition that moves an area from 2 projects to 3 doesn't retroactively invalidate the area's grade reasoning, area headline, or T1 criteria — it strengthens them. V3 handles the recalibration cleanly; V2/V4 just add the project cleanly.

---

## What the playbook does NOT do

- It does not delete projects automatically under any circumstances.
- It does not modify the named operator without user confirmation (Category B requires explicit approval).
- It does not add projects to the dataset without user confirmation.
- It does not recalibrate area grades after deletions or additions (v3 responsibility).
- It does not chase down operators on social media / LinkedIn — primary-source web is the research boundary.

---

## Budget for ghost-project checks

Per project: ~1-2 searches, ~1-2 page fetches. Cheap once the operator-level research already happened (same page fetches often double as portfolio verification).

Expected flag rate: low single-digit %. In the 267 projects, expect maybe 5-15 ghost-project candidates across the full run. Historical precedent (2026-04-12): ~4 ghost projects found across the sweep data.
