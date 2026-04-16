# Proposals — Essential Living (2026-04-16)

## Ghost-project flag — CATEGORY A

### `one-portal-way` (north-acton.ts)

**Proposed action:** **DELETE** pending user confirmation.

**Evidence:**
1. Essential Living's published portfolio contains no North Acton property. Historical portfolio: Vantage Point (Islington — retained), Dressage Court (Bethnal Green — for sale), Union Wharf (Greenwich — for sale), Berkshire House (Maidenhead — for sale). No Acton.
2. One Portal Way is **Imperial College's** endowment land (acquired 2016). 17-acre regeneration site.
3. Phase 1 (461 BTR units, 55-storey tower) is **still in procurement** (developer/investor selection 2025-2026). Practical completion Q2 2027 – Q2 2031.
4. No press release, news coverage, or portfolio page associates Essential Living with One Portal Way.

**Source consistency check:** The dataset's own `brent-cross-town.ts` research comment (line 6) correctly lists Essential Living's four properties — none of them is One Portal Way. The `one-portal-way` project entry in `north-acton.ts` is inconsistent with the dataset's own operator-summary comment.

### Tombstone comment to insert on deletion

```typescript
// REMOVED 2026-04-16: "One Portal Way" (Essential Living)
// Ghost project. Essential Living's portfolio contains no North Acton
// property. One Portal Way is Imperial College endowment land (acquired
// 2016); Phase 1 (461 BTR units) is still in developer/investor
// procurement (2025-2026) with practical completion no earlier than
// Q2 2027. The operator has not been selected. Consistent with the
// 2026-04-12 Essential Living hallucination pattern ("Bermondsey Works",
// "The Union"). Verified against essentialliving.co.uk portfolio and
// opportunity.london/project/one-portal-way/.
```

### Blast radius

- `north-acton.ts`:
  - Remove `onePortalWay = buildProject(...)` block (lines 19-31)
  - Remove from area `projects: [...]` array
  - Scan area-level prose / T1 reasoning for "Essential Living" references — rewrite
  - External_links: check if `essentialliving.co.uk` is area-linked; remove if so

- `brent-cross-town.ts` line 6: update research comment:
  - From: `// - Essential Living: Archway (Vantage Point — retained), Greenwich (Union Wharf — for sale), Bethnal Green (Dressage Court — for sale), Maidenhead (for sale)`
  - To: keep roughly as-is; maybe add trailing note `// 2026-04-16: None of these are in the dataset; historical reference only.`

- Other files grepping "Essential Living":
  - `wimbledon.ts` — expected to already contain the 2026-04-12 tombstone comments for earlier Essential Living ghost projects
  - `bermondsey.ts` — confirmed to have the "Bermondsey Works" / "The Union" removal tombstone at the top (already handled)
  - `nine-elms.ts` — check for any references; likely none live

### Grade-impact flag

- North Acton has other BTR (UNCLE Acton, Enclave: Acton, One West Point, potentially Imperial Square). Removing the ghost `one-portal-way` does NOT drop the BTR count to zero.
- Area grade unlikely to need review. Flag for user awareness but no recalibration expected.

## No operator-level qualification block

Because all Essential Living dataset projects dissolve to ghosts after this pass, there is no operational Essential Living project in the dataset after the deletion. No operator-wide qualification block to apply.

(For reference if the user ever adds Vantage Point Islington: Essential Living's historical qualification policy = UK-homeowner guarantor only, 30x income, no corporate guarantor, `grad_visa_realism: "blocked"`. Verbatim schema captured in `operators/essential-living.md`.)

## Sources summary

See `operators/essential-living.md` for full source table.
