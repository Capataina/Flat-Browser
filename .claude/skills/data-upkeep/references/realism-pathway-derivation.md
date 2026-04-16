# Realism Pathway Derivation

How to compute `realism_pathways: RealismPathway[]` from the structural qualification fields, given Caner's profile. The `grad_visa_realism` verdict is then derived from the pathway array via `deriveRealism()` in `src/areas/types.ts`.

---

## Input: Caner's profile

From `src/profile/caner.ts`:

| Field | Value |
|---|---|
| `visa_type` | `"uk-graduate"` (expires 2027-08-01) |
| `has_uk_credit_history` | `false` |
| `has_uk_payslips` | `false` |
| `has_uk_guarantor` | `false` |
| `has_open_banking_income` | `true` — bank transactions show family transfers even without salary |

Plus from `context/notes/relocation-constraints.md` and the LifeOS Housing domain:

- Parents in Turkey, self-employed lawyers, irregular income, difficult to document in UK-standard form
- Willing to offer multi-month upfront rent at licence operators (no longer legal for ASTs post-RRA)
- 9-month clean payment record at Ten Degrees (Greystar) — documented flex evidence
- Can demonstrate savings via Open Banking (36× monthly rent in liquid funds achievable via parental capitalisation)

---

## Output: the pathway array

```ts
type RealismPathway =
  | "standard-passable"
  | "with-professional-guarantor"
  | "with-savings"
  | "with-co-signer-overseas"
  | "with-upfront-licence"
  | "licence-exempt-light-ref";
```

A project can have zero or more pathways. Empty array means no known route. `grad_visa_realism` is then computed from the array + any preserved explicit state.

---

## Derivation rules — which pathway is added when

### `standard-passable`

Add when **all** of these are true:
- `credit_check: "lenient"` or `"none"`
- `open_banking_accepted: "yes"` (Caner can demonstrate income via Open Banking)
- `international_tenant_policy: "welcomed"` or `"accepted-case-by-case"`
- `visa_expiry_handling: "ignored"` or `"tenancy-shortened"` (not `"rejected"`)

If all four hold, the standard route genuinely works for Caner without conditions. This is rare — it's the Blueground / Node Living Brixton shape (operators with verbatim no-referencing or near-zero friction).

**Do not add** if any of the four is `"unclear"` or `"unknown"` — the standard route requires active confirmation of the full happy path. If an operator looks likely but has one unverified field, add the more cautious pathways (`with-savings` or `with-professional-guarantor`) instead.

### `with-professional-guarantor`

Add when:
- `accepts_professional_guarantor: "yes"`

This is the Guarantid / Housing Hand pathway. Most common achievable route for standard BTR once Homeppl-family operators' FAQs are verified.

**Don't add** on `"unclear"` — unverified guarantor acceptance is not a pathway Caner can rely on. `"unclear"` triggers the caveat that this pathway needs direct enquiry to confirm.

### `with-savings`

Add when **all** of:
- `referencing_provider: "homeppl"` (Homeppl is the only provider documented to support the savings route)
- `open_banking_accepted: "yes"`

Homeppl's published rule is 36× monthly rent in savings substituting for 30× annual income. Caner's parents can capitalise his Monzo with ~£70k+ to trigger this route for a £2k/mo rent.

**Do not add** for non-Homeppl operators — Goodlord, Canopy, and in-house referencing don't generally support a savings-based route at scale.

### `with-co-signer-overseas`

Add when:
- `accepts_individual_overseas_guarantor: "yes"`

Homeppl's Co-Signer route is the canonical example (non-UK-resident can co-sign). Caner's Turkish parents qualify. If an operator explicitly accepts overseas guarantors (regardless of referencing provider), this pathway is added.

### `with-upfront-licence`

Add when **both**:
- `agreement_type: "licence"` (RRA doesn't cap advance rent for licences)
- `upfront_rent_policy: "multi-month-available"`

This is the co-living / managed-studio pathway — Folk, ARK, some Node. Caner can pay 3 months upfront at signing as a qualification substitute.

**Do not add** when `agreement_type: "ast"` — post-RRA the 1-month cap kills this pathway for ASTs.

### `licence-exempt-light-ref`

Add when **both**:
- `agreement_type: "licence"`
- `referencing_provider: "none"` OR (`referencing_provider: "in-house"` AND `credit_check: "lenient"` OR `"none"`)

The "operator doesn't meaningfully reference" case. Blueground, apart-hotels, some co-living. Effectively: show up, pay, move in.

---

## `deriveRealism()` — computing the dominant verdict

After the pathway array is set, call `deriveRealism(pathways, preserved)` from `src/areas/types.ts`:

```ts
export function deriveRealism(
  pathways: RealismPathway[],
  preserved?: GradVisaRealism,
): GradVisaRealism {
  if (preserved === "blocked" || preserved === "unlikely" || preserved === "unclear") {
    return preserved;
  }
  if (pathways.includes("standard-passable")) return "achievable";
  if (pathways.includes("licence-exempt-light-ref")) return "licence-exempt";
  if (
    pathways.includes("with-professional-guarantor") ||
    pathways.includes("with-savings") ||
    pathways.includes("with-co-signer-overseas") ||
    pathways.includes("with-upfront-licence")
  ) {
    return "achievable-with-guarantor";
  }
  return "unknown";
}
```

### Priority order

The function checks pathways in priority order:

1. `standard-passable` → **"achievable"** (strongest verdict; zero conditions)
2. `licence-exempt-light-ref` → **"licence-exempt"** (second-strongest; structural exemption)
3. Any of the conditional-achievable pathways → **"achievable-with-guarantor"** (umbrella term for all conditional routes)
4. Empty array → **"unknown"**

### The `preserved` override

Pass the current `grad_visa_realism` value as `preserved`. The function returns `preserved` unchanged if it's `"blocked"`, `"unlikely"`, or `"unclear"` — these are authored explicit states that should not be overridden by pathway derivation.

**Reasoning:**
- `"blocked"` means "we know the door is shut" (Moda's Experian 561+ floor, Folio's UK-homeowner-only guarantor). Authored after evidence. Pathway array may still be populated for record-keeping, but the verdict is the explicit block.
- `"unlikely"` means "researched, evidence actively negative" — same principle.
- `"unclear"` means "researched, genuinely ambiguous" — preserve because the pathway array might be empty only because research was incomplete, not because no pathway exists.

If research flips a previously-`"blocked"` or `"unlikely"` project to a positive pathway (e.g. an operator changed policy, previously-blocked Grainger now has verbatim guarantor acceptance), the skill should:

1. Note the state change in the proposal
2. Flag to the user for confirmation — "Previously blocked, now has pathways. Update?"
3. On user confirmation, update `grad_visa_realism` without `preserved` (new state derives from pathways)

---

## Worked examples

### Example 1 — Quintain Living (Homeppl + FAQ-unnamed guarantor)

Research yields:
- `agreement_type: "ast"`
- `referencing_provider: "homeppl"`
- `open_banking_accepted: "yes"`
- `accepts_professional_guarantor: "unclear"` (Guarantid not named in FAQ)
- `accepts_individual_overseas_guarantor: "unknown"` (not addressed)
- `credit_check: "lenient"`
- `international_tenant_policy: "welcomed"`
- `visa_expiry_handling: "tenancy-shortened"`

Pathway derivation:

| Pathway | Rule | Result |
|---|---|---|
| `standard-passable` | All four structural fields must clear | ❌ `accepts_professional_guarantor: "unclear"` blocks confidence — standard route has flex; but the stricter check on all four fields including `"welcomed"` policy + lenient credit + OB accepted does qualify. Judgement call — lean NO because Quintain's stated income multiple is 30× which Caner can't meet without a pathway. |
| `with-professional-guarantor` | `accepts_professional_guarantor: "yes"` | ❌ `"unclear"` |
| `with-savings` | Homeppl + OB: yes | ✅ |
| `with-co-signer-overseas` | `accepts_individual_overseas_guarantor: "yes"` | ❌ `"unknown"` |
| `with-upfront-licence` | Licence + multi-month | ❌ AST |
| `licence-exempt-light-ref` | Licence + no/in-house ref | ❌ AST |

Result: `realism_pathways: ["with-savings"]`, `grad_visa_realism: "achievable-with-guarantor"` (umbrella verdict from rule 3).

Narrative in `notes`: "Quintain's Homeppl referencing supports a savings-based route for Open Banking-demonstrable applicants. The professional-guarantor pathway is unverified — direct enquiry about Guarantid acceptance is the question that unlocks a second route."

### Example 2 — Folk Sunday Mills (licence-exempt)

Research yields:
- `agreement_type: "licence"`
- `referencing_provider: "in-house"`
- `open_banking_accepted: "unclear"`
- `upfront_rent_policy: "multi-month-available"`
- `credit_check: "lenient"`
- `international_tenant_policy: "welcomed"`

Pathway derivation:

| Pathway | Result |
|---|---|
| `standard-passable` | ❌ `open_banking_accepted: "unclear"` |
| `with-upfront-licence` | ✅ licence + multi-month |
| `licence-exempt-light-ref` | ✅ licence + in-house + lenient |

Result: `realism_pathways: ["with-upfront-licence", "licence-exempt-light-ref"]`, `grad_visa_realism: "licence-exempt"` (rule 2 — licence-exempt-light-ref present, overrides the conditional umbrella).

### Example 3 — Moda Living (hard-blocked)

Research yields:
- `agreement_type: "ast"`
- `referencing_provider: "canopy"`
- `credit_check: "strict"` with explicit Experian 561+ floor
- `qualification_flexibility_signal: "rigid"`

Pathway derivation:

No pathway rules fire — all conditions require positive signals that aren't present.

Previous `grad_visa_realism: "blocked"` is preserved by `deriveRealism(pathways, "blocked")` → returns `"blocked"`.

Result: `realism_pathways: []`, `grad_visa_realism: "blocked"`.

Narrative: "Moda's Experian 561+ credit-score floor is a hard block for applicants without UK credit history. No alternative pathway exists at this operator."

### Example 4 — Get Living East Village (multi-pathway)

Research yields:
- `agreement_type: "ast"`
- `referencing_provider: "homeppl"`
- `open_banking_accepted: "yes"`
- `accepts_professional_guarantor: "yes"` (Guarantid native — Homeppl product)
- `accepts_individual_overseas_guarantor: "yes"` (Homeppl Co-Signer documented)
- `credit_check: "lenient"`
- `international_tenant_policy: "welcomed"`
- `visa_expiry_handling: "tenancy-shortened"`

Pathway derivation:

| Pathway | Result |
|---|---|
| `standard-passable` | All four structural fields clear | ✅ |
| `with-professional-guarantor` | ✅ |
| `with-savings` | ✅ |
| `with-co-signer-overseas` | ✅ |

Result: `realism_pathways: ["standard-passable", "with-professional-guarantor", "with-savings", "with-co-signer-overseas"]`, `grad_visa_realism: "achievable"` (rule 1 — standard-passable present).

Narrative: "Get Living East Village offers the strongest pathway stack of any BTR in the dataset. Four independent routes — standard Homeppl referencing, savings-based via Open Banking, non-UK co-signer via Homeppl Co-Signer, plus Guarantid as corporate guarantor backup. If any Homeppl-using BTR will clear, this is the one."

---

## What to do with `"unclear"` / `"unknown"` fields

If more than 3 of the structural fields are `"unclear"` or `"unknown"` after research, the project's `grad_visa_realism` should be `"unclear"` regardless of pathway derivation — the pathway array would be unreliable because too many inputs are missing.

Explicit rule:

```
if (sum of fields that are "unclear" or "unknown" > 3) {
  realism_pathways: []
  grad_visa_realism: "unclear"
  notes: "Too many qualification fields unverified — speculative email only."
}
```

This prevents the skill from claiming "achievable-with-guarantor" based on 3 researched fields and 9 unknowns.

---

## When Caner's profile changes

If Caner lands a job (`has_uk_payslips: true`), the pathway derivation rules shift significantly — many more projects become `"standard-passable"`. The skill should be re-run (at least Phase 3 re-derivation, no need for new research) to update realism verdicts under the new profile.

For v1, the profile is treated as static during a run. Profile change → re-run skill.
