# Operator Research Playbook

How to research a single operator to fill the qualification block across all their buildings. The skill's Phase 2 agents consume this reference.

---

## Principle: operator, not building

When researching Quintain Living, do not research Ferrum, Landsby, Canada Gardens, Beton, Alto, etc. separately. Research **Quintain's qualification policies** once. Most fields are identical across an operator's portfolio because operators apply the same referencing / guarantor / visa policies to every building they run.

Per-building variations exist but are limited. They're usually:
- `min_tenancy_months` (some buildings offer 3-month; most are 12)
- Price bands (per-building)
- Availability / promotional pricing (per-building)

Structural fields — `agreement_type`, `referencing_provider`, `accepts_professional_guarantor`, `credit_check`, `international_tenant_policy`, `visa_expiry_handling` — are operator-wide. Research them once, apply to every building.

---

## Research workflow per operator

### Step 1 — Find the operator's canonical website

Search: `"[operator name]" rental London site:uk`

Distinguish the operator from the developer. Some buildings have different operator vs developer (e.g. Vertus operates Newfoundland though EcoWorld Ballymore developed it). The operator — whoever runs the lettings — is the relevant party for qualification.

Cross-check by confirming the operator lists at least one of the dataset's projects on their portfolio page. If not, treat it as a possible ghost-project situation (see `ghost-project-detection.md`).

### Step 2 — Read the standard qualification-surfacing pages

In order of information density:

1. **FAQ / Help Centre** — the richest source. Look for sections titled "Renting with us", "Application process", "How it works", "Referencing", "Before you apply". These typically name the referencing provider, income multiple, guarantor policy, Open Banking support, international-tenant language.

2. **How It Works / Rental Process / Application Journey** — often on a dedicated landing page. Step-by-step walkthrough that names the specific tools and documents required.

3. **Terms & Conditions / Tenancy Agreement sample** — occasionally linked publicly. Gives the agreement type (AST vs licence) with certainty.

4. **Blog / News** — policy changes are often announced here. Post-RRA (May 2026) most operators will have posted about changes to advance rent, periodic tenancies, guarantor rules. Recent (last 12 months) posts are most useful.

5. **Careers page** — sometimes mentions the tech stack (Homeppl, Goodlord integration) in job descriptions.

### Step 3 — Augment with external sources

When the operator's own site is thin or ambiguous:

- **Homeppl case studies** (homeppl.com/case-studies) — names client operators using Homeppl
- **Goodlord case studies** — same
- **Guarantid's accepted-operators list** (if they publish one)
- **Housing Hand's partner directory**
- **HomeViews reviews** — tenants often mention referencing experience ("they accepted my Housing Hand guarantor")
- **Trustpilot reviews** — policy flex signals, both positive and negative
- **Press coverage** — trade publications like EG (Estates Gazette), Property Week, BTR News — track operator policy changes
- **Reddit r/HousingUK** — specific operator experiences from tenants

### Step 4 — Look for flex signals

The `qualification_flexibility_signal` field is qualitative. Gather by looking for:

**Positive signals ("flexible"):**
- HomeViews reviews mentioning "they worked with me on..."
- Operator's own case studies featuring non-standard applicants (internationals, students, freelancers)
- FAQ language like "we review every application individually" or "please contact us to discuss your situation"
- Documented cases of acceptance with upfront payment or alternative guarantor

**Negative signals ("rigid"):**
- HomeViews/Trustpilot reviews like "they wouldn't budge on the income multiple"
- Explicit credit-score floors stated on site (e.g. Moda's Experian 561+)
- FAQ language like "no exceptions" / "all applicants must meet..."

**Neutral ("standard"):**
- No stated flex signal either way — operator runs their process, no anecdotes of deviation

### Step 5 — Verify operator portfolio

For every project in the dataset attributed to this operator, check the operator's "Our buildings" / "Portfolio" / "Locations" page. Confirm each building is listed.

If a dataset project is NOT on the operator's list → **potential ghost project**. Flag per `ghost-project-detection.md`.

### Step 6 — Capture pricing (side-effect)

Visit the operator's rental availability pages for each building assigned to this research batch. Record:
- Studio / 1-bed / 2-bed price ranges
- Whether bills are included
- Whether prices are publicly listed (`"listed"`) or require enquiry (`"enquire"`)
- Any promotional pricing with expiry dates

Don't spend meaningful token budget on pricing research — it's a side-effect. If prices aren't easily visible, move on.

---

## Canonical operator examples

These are the patterns the skill should recognise. When research surfaces operators matching these shapes, defaults can be applied with higher confidence.

### Homeppl-native BTR (Quintain, Greystar, Fizzy, Get Living, Morro)

- `agreement_type: "ast"`
- `referencing_provider: "homeppl"`
- `open_banking_accepted: "yes"` (Homeppl's primary mechanism)
- `credit_check: "lenient"` (Homeppl is designed for thin-credit applicants)
- `upfront_rent_policy: "one-month-ast-cap"` (AST + post-RRA)
- `international_tenant_policy: "welcomed"` usually
- `accepts_professional_guarantor: "unclear"` default unless FAQ names Guarantid or Housing Hand explicitly

Realism pathways: `with-savings` + `with-co-signer-overseas` likely viable (Homeppl supports both), `with-professional-guarantor` requires verification.

### Licence co-living (Folk, Node, ARK, Vonder)

- `agreement_type: "licence"`
- `referencing_provider: "in-house"` or `"none"`
- `open_banking_accepted: "unclear"` typically (not a focus area)
- `credit_check: "lenient"` or `"none"`
- `upfront_rent_policy: "multi-month-available"` — the real lever here
- `international_tenant_policy: "welcomed"` usually — international applicants are core market
- `accepts_professional_guarantor: "unclear"` — often not needed under their model

Realism pathways: `licence-exempt-light-ref` + `with-upfront-licence` both viable.

### Apart-hotel / serviced apartment (Blueground, Locke, Adagio, Roomzzz)

- `agreement_type: "licence"`
- `referencing_provider: "none"` or very light
- `credit_check: "none"` usually — card on file replaces credit check
- `upfront_rent_policy: "multi-month-available"` — pay at booking
- `international_tenant_policy: "welcomed"` — international business travellers are primary customer
- `min_tenancy_months: 1` typically

Realism pathway: `standard-passable` — just book it.

### Goodlord-stack standard BTR (Grainger historically, Way of Life)

- `agreement_type: "ast"`
- `referencing_provider: "goodlord"`
- `open_banking_accepted: "no"` or `"unclear"` — Goodlord is credit-file-centric
- `credit_check: "standard"` or `"strict"`
- `accepts_professional_guarantor` — varies; Grainger has verbatim "we accept guarantors" → `"yes"`, Way of Life requires UK-based → `"no"` for overseas

**Important nuance on Grainger:** the 2026-04-16 shortlist research flipped Grainger from "blocked" to "achievable-with-guarantor" based on their verbatim "we do accept guarantors or a higher proportion of rent in advance" language. Verify if the page still says this; if so, `accepts_professional_guarantor: "yes"` with source.

### Hard-block operators (Moda, Folio, Essential Living historical)

- `credit_check: "strict"` with explicit floor (Moda: Experian 561+)
- `accepts_individual_overseas_guarantor: "no"` — UK-only guarantor requirement
- `qualification_flexibility_signal: "rigid"` — documented cases of rejections

Realism: likely `"blocked"` — and this is the explicit-authored-state case where the pathway array may be empty but the verdict is `"blocked"` not `"unknown"`.

---

## Search phrasings that work

Good first-pass searches:

- `"<operator>" FAQ rental London`
- `"<operator>" Homeppl` — confirms Homeppl usage
- `"<operator>" guarantor service` — guarantor policy
- `"<operator>" international tenants`
- `"<operator>" "visa" renter`
- `"<operator>" advance rent Renters Rights Act`
- `"<operator>" referencing policy`

Avoid phrasings that confirm your hypothesis:
- ❌ `"<operator> accepts Housing Hand"` (will return operators that mention it; silence is false negative)
- ✅ `"<operator>" guarantor services accepted` (returns the actual policy page)

And to verify portfolio:
- `"<operator>" our buildings London`
- `"<operator>" locations London 2026`
- `site:<operator-domain> portfolio`

---

## When to mark `"unclear"` vs `"unknown"`

Clear separation:

- **`"unknown"`** — you have not researched this field for this operator yet. Default state. Should appear rarely in post-Phase-2 proposals.
- **`"unclear"`** — you have researched. Primary sources (operator site, FAQ, press) do not state this fact. Direct enquiry would be needed to resolve. This is a valid terminal state for a field.

If you found conflicting evidence (one source says one thing, another says another) — mark `"unclear"` and record both positions in the narrative notes.

If you found a single source that plausibly answers but is old (>12 months) or indirect (blog post, not FAQ) — you can mark the field with the value but lower confidence in the sources (`type: "press"` rather than `"operator"`). Don't escalate to `"unclear"` for that alone.

---

## Per-project variations

After the operator-level research is complete, briefly confirm each project in the operator's batch for per-building variations. Usually limited to:

- Price bands (specific to each building)
- `min_tenancy_months` (some buildings — e.g. Greystar Pearl Yard — offer shorter minimums than operator default)
- Promotional pricing windows

For structural fields, apply operator-wide defaults unless per-building research surfaces a specific exception (e.g. one Quintain building runs through a different referencing stack — unusual, verify carefully if encountered).

---

## Output writing

See `SKILL.md` § "Output format: proposals markdown" for the canonical structure. Key rules:

1. **Operator-level facts first** — one table applying to every building in the operator's batch.
2. **Per-project variations below** — only fields that differ from operator defaults.
3. **Ghost-project flags explicit** — list any projects the agent couldn't verify in the operator's portfolio.
4. **Sources at the bottom** — full URL list with accessed date.
5. **Narrative notes** — 2-3 sentences suitable for the project `notes` field.

Write proposals to `context/data-upkeep/proposals/<operator-slug>.md`. Write longer-form findings (research notes, screenshots of key FAQ sections paraphrased, etc.) to `context/data-upkeep/operators/<operator-slug>.md`.

---

## Secondary-market categories — how to handle

Some projects in the dataset carry non-operator attributions:

- `"Various"`
- `"Individual landlords"`
- `"Various agents"`
- `"Agent-managed"`
- `"Private landlords"`
- `"unknown"`

These represent secondary-market rental — individual owners letting via agents — not professionally-operated buildings. Operator-level research doesn't apply because there's no single operator.

**V1 handling:** mark these projects as `research_status: "partial"` with a standard narrative note:

> Secondary-market / individual-landlord rental. Qualification varies per listing and agent; no single referencing stack. Realism is typically `"unlikely"` for graduate-visa applicants because individual landlords default to Goodlord/standard referencing without published guarantor-acceptance or Open Banking pathways. Exception: some agents and individual landlords accept upfront-rent offers — this is a per-listing conversation rather than a policy that can be researched in advance.

Default values:
- `agreement_type: "ast"` (individual landlords default to ASTs)
- `referencing_provider: "unclear"` (varies by agent)
- `upfront_rent_policy: "one-month-ast-cap"` (AST, RRA)
- `accepts_professional_guarantor: "unclear"`
- `international_tenant_policy: "accepted-case-by-case"` (varies)
- `grad_visa_realism: "unlikely"` unless previously authored otherwise

Do not spend meaningful research budget on these — they're not operator-researchable. The orchestrator's Phase 1 should route them to a single low-priority batch or skip them entirely. V1 will leave them at current values with a partial research status.

---

## Budget guidance

Per operator:
- ~5-10 web searches
- ~3-5 page fetches (operator site + 1-2 external sources)
- ~20-50k total tokens

Per batch (4-5 operators): ~100-250k tokens.

If an operator consumes more than ~50k tokens without converging on definitive answers for most fields, stop. Mark remaining fields `"unclear"` and move on. The skill is designed to be run again — better to finish the pass with clear `"unclear"` states than to exhaust budget on one difficult operator.
