# Relative Grading — Core Principle

**Captured 2026-04-12. This is the single most important grading principle in the project.**

---

## The rule

**ALL grading in Flatbrowser is 100% relative.** Every grade — area grades, project grades, tier scores, criterion statuses, cost tiers, amenity tiers, quality ratings — is assigned by comparing the entity against others of the same type in the dataset. No grade is absolute. No grade is assigned in isolation.

An area graded **A** is graded A because it is meaningfully better than the B's and meaningfully worse than the S's *in this specific dataset*. If we add 20 new areas that are all stronger than the current A's, the current A's might become B's. If we add 20 weak areas, the distribution shifts the other way. The grade is a position in a ranking, not a fixed quality score.

The same applies at every level:

- **Area overall grade** — relative to other areas in the dataset
- **Project overall grade** — relative to other projects in the dataset
- **Tier scores** (strong/good/moderate/weak/fail) — relative to how other areas perform on the same tier
- **Criterion statuses** (pass/partial/fail) — relative to what "pass" looks like across the dataset for that specific criterion
- **Cost tier** (budget → luxury) — relative to the price distribution of projects in the dataset
- **Quality ratings** (excellent → poor) — relative to the quality distribution across projects
- **Amenity tier** (premium → basic) — relative to what other projects offer

---

## Why this matters

Without relative grading, the dataset collapses into either "everything is good" (if we only add strong areas) or "everything is bad" (if we grade against an impossible standard). Relative grading is what makes the grade system informative — it tells you where something sits *compared to the alternatives you actually have*.

This also means:

1. **Grades must be recalibrated when the dataset changes significantly.** Adding 40 new areas shifts the distribution. A project that was the cheapest in a 14-area dataset might not be the cheapest in a 54-area dataset. A "moderate" tier score assigned when there were only 14 comparisons might become "good" or "weak" once there are 54 points of comparison.

2. **Grading requires looking at comparables.** Before assigning any grade, the grader (human or agent) must look at what similar entries are graded. What does a B area look like? What does a C project look like? What does "good" building quality look like compared to "average"? The grade is the answer to "where does this sit relative to the others", not "how good is this in the abstract".

3. **Grades are not permanent.** As the dataset grows and shifts, grades should be reviewed. This is not drift or inconsistency — it's the grading system working correctly. A grade that never changes as the dataset doubles in size was probably wrong to begin with.

4. **The full range must be used.** If every area is graded A or S, the grading is broken. The dataset should have genuine SS, S, A, B, C, and F entries. A C-graded area is not a failure of research — it's the system honestly representing that this area is weaker than the A's. Without C's, the A's lose their meaning.

---

## How to apply when grading

Before assigning a grade to anything:

1. **Look at 2-3 existing entries at the grade you're considering.** Does the new entry genuinely belong in their company?
2. **Look at 1-2 entries one grade above and one grade below.** Is it clearly better than the lower grade? Clearly worse than the higher grade?
3. **Check the specific dimension you're grading on.** If you're grading building quality, compare building quality against other buildings — not against the area's connectivity or the project's price.
4. **Use the full scale.** If nothing in the dataset is graded C, you're probably grading too generously. If nothing is graded SS, you might be grading too harshly. The distribution should use the range.

---

## What this means for agents and automation

Any agent that assigns grades — whether during the sweep fold-in, a future research pass, or a targeted gap-fill — must be given access to the current dataset's grade distribution as context. An agent grading in isolation will produce inconsistent results. The agent prompt should include: "Here are 3 examples of A-graded areas, 3 examples of B-graded areas, and 3 examples of C-graded areas. Grade the new entry relative to these."
