# L&G Living / Legal & General — Research Findings (2026-04-16)

## Operator summary

Legal & General's BTR business (trading as "L&G Living" in some external references; corporate umbrella is Legal & General Urban Build to Rent). Institutional scale — 17+ urban BTR sites in planning, development, or operation across the UK. Two projects in the Caner shortlist:

- **Blackhorse Mills** (Walthamstow) — 479 homes, 5 buildings, WiredScore Gold, Assael Architecture. Operated under brand "Blackhorse Mills" (blackhorsemills.com).
- **New Acres** (Wandsworth) — 1,034 homes, completed December 2024, >75% let. L&G's flagship UK BTR scheme.

## Key findings — divergent operational stacks per building

The 2026-04-16 research round flagged L&G as "uses The Lettings Hub (NOT Goodlord)". The updated research refines this: **The Lettings Hub is confirmed for New Acres; Blackhorse Mills uses flatfair for deposits and a different referencing shape**. L&G Living does not appear to run a single unified referencing stack across all BTR sites — each building's management company (urbanbubble operates New Acres; the Blackhorse Mills site implies a different management) applies its own referencing partner.

### New Acres — The Lettings Hub confirmed

https://www.newacreswandsworth.com/faqs (accessed 2026-04-16):

Verbatim on referencing:
> "The Lettings Hub will contact the resident services team and confirm if you have passed or failed"

Processing within "no more than 24 hours of confirmation of the reservation."

Verbatim on AST:
> "We will send you your AST and a calculation of the move in monies."

Verbatim on tenancy length:
> "Stay as long as you want, with a minimum contract from 6 months to maximum 5 years. You decide your contract's length."

Verbatim on deposit: "One month's deposit required before move-in, lodged in a tenancy deposit scheme."

Verbatim on non-EEA nationals:
> "current passport or other 'travel document'" and biometric residence permits (documentation accepted for international tenants)

### Blackhorse Mills — flatfair + unnamed referencing partner

https://www.blackhorsemills.com/faqs (accessed 2026-04-16):

Verbatim on referencing:
> "All flatfair members must meet our minimum referencing criteria which is broadly in line with lettings agency standard referencing."

(That language — "lettings agency standard referencing" — means a credit reference agency check; provider not named.)

Verbatim on deposit alternative:
> flatfair's No Deposit — "check-in fee of one week's rent (or £120, whichever is greater) plus VAT"

Verbatim on tenancy length:
> "Contracts start from 6 months - 5 years, we have flexible contracts to suit you."

flatfair is a **deposit alternative**, not a referencing provider — tenants still need to pass referencing to sign with flatfair. So the referencing provider for Blackhorse Mills is the unnamed "standard agency" check. Goodlord is a plausible inherited hypothesis (L&G's historical stack) but not verbatim confirmed.

### Income multiple — not stated publicly, inferred 30

Neither public FAQ (New Acres or Blackhorse Mills) states an income multiple. The 2026-04-16 research batch notes recorded "30× monthly rent + clean credit + UK guarantor at 4× annual rent" — this is consistent with UK BTR industry standard and with The Lettings Hub's default thresholds. No URL backs the 4× annual guarantor requirement specifically, so recommend `income_multiple: 30` with the FAQ as source (for the AST confirmation), and acknowledge the guarantor-multiple threshold is a direct-enquiry question.

### Guarantor policy — not publicly stated

Neither FAQ names Housing Hand or any corporate guarantor service. Neither FAQ states the guarantor requirement verbatim. The 2026-04-16 research round notes that Housing Hand lists Legal & General as an accepted referencing partner (via Housing Hand's own materials), but this is Housing Hand's side of the relationship — L&G's operator-side acceptance is not verbatim confirmed on blackhorsemills.com / newacreswandsworth.com.

Recommendation: `accepts_professional_guarantor: "unclear"` — Housing Hand mentions L&G, but L&G doesn't mention Housing Hand. Direct enquiry to confirm. This is the gating unknown for Caner's qualification pathway at both buildings.

### Overseas / non-UK guarantor

Not addressed. `accepts_individual_overseas_guarantor: "unknown"`.

### International tenant policy

Both FAQs accept non-EEA documentation (passport, biometric residence permit). New Acres is explicit about the documentation pathway. Recommend `international_tenant_policy: "accepted-case-by-case"`.

### Visa expiry

Not addressed at either building. Given 6mo-5yr flexible tenancy, it's plausible L&G would match the tenancy to visa expiry, but this is inference not verbatim. `visa_expiry_handling: "unclear"`.

### Credit check

Both FAQs confirm a credit check is performed. Neither states a floor or leniency. `credit_check: "standard"`.

### Open Banking

Not mentioned at either FAQ. `open_banking_accepted: "unclear"`.

### Upfront rent

Standard AST deposit scheme (one month). No explicit "higher proportion of rent in advance" lever stated. `upfront_rent_policy: "one-month-ast-cap"` per AST + RRA default.

## The 5-year tenancy positioning

Both L&G buildings advertise 6-month-to-5-year flexible contracts. Post-RRA (1 May 2026), fixed-term ASTs are being phased out — all new ASTs become periodic after 1 May 2026. Whether L&G is maintaining fixed-term contracts up to that date, or whether the "up to 5 years" language will shift to a rolling-periodic framing, is not stated. For v1, capture the 5-year positioning as operator intent; flag the RRA transition uncertainty in notes.

## Portfolio verification

- **Blackhorse Mills** (Walthamstow) ✅ verified at https://www.blackhorsemills.com/, https://group.legalandgeneral.com/en/newsroom/press-releases/legal-general-starts-on-site-at-london-btr-scheme, https://fracreative.com/portfolio/blackhorse-mills/
- **New Acres** (Wandsworth) ✅ verified at https://www.newacreswandsworth.com/, https://group.legalandgeneral.com/en/newsroom/press-releases/l-g-completes-flagship-build-to-rent-scheme-in-london-delivering-1034-homes

No ghost-project flags for L&G Living.

## Flex signal

HomeViews reviews for New Acres (https://www.homeviews.com/development/new-acres-wandsworth-sw18) — operational complaints dominate (water outages, rent increases, maintenance). No documented qualification flex either way. One reviewer mentions "Lettings agent tell a few fibs when they are showing you around" — minor flag but not qualification-specific. `qualification_flexibility_signal: "standard"`.

## Sources

- https://www.newacreswandsworth.com/faqs (accessed 2026-04-16) — verbatim: The Lettings Hub, AST, 6mo-5yr, international docs
- https://www.newacreswandsworth.com/ (accessed 2026-04-16) — portfolio
- https://www.newacreswandsworth.com/landlord (accessed 2026-04-16) — operator confirmation
- https://www.blackhorsemills.com/faqs (accessed 2026-04-16) — verbatim: flatfair, 6mo-5yr, referencing criteria
- https://www.blackhorsemills.com/ (accessed 2026-04-16) — portfolio
- https://group.legalandgeneral.com/en/newsroom/press-releases/l-g-completes-flagship-build-to-rent-scheme-in-london-delivering-1034-homes (accessed 2026-04-16, type: press) — New Acres completion
- https://group.legalandgeneral.com/en/about-us/housing-businesses-partners/urban-build-to-rent (accessed 2026-04-16) — operator shape
- https://www.homeviews.com/development/new-acres-wandsworth-sw18 (accessed 2026-04-16, type: homeviews) — flex-signal check
