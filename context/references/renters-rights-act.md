# The UK Renters' Rights Act 2025 — Comprehensive Research Briefing

**Researched:** 2026-04-12
**Status:** Verified from primary (legislation.gov.uk, GOV.UK) and secondary (law firm analyses, sector commentary) sources.
**Audience:** Caner — a 23-year-old Turkish national on a UK Graduate visa (expiring August 2027), with no UK credit history, no formal UK payslips, currently job-hunting for Rust/systems engineering roles. Currently lives at Ten Degrees Croydon paying approximately GBP 3,000/month all-in. Has never rented independently before.
**Relevance:** Directly affects the rental qualification model, the `upfront_max_months` field, the `grad_visa_realism` signal, the `credit_check` field, and the explainer system's advice about upfront rent strategies.

---

## Table of Contents

1. [How UK Renting Works Today (Before 1 May 2026)](#section-1-how-uk-renting-works-today)
2. [The Renters' Rights Act 2025 — Full Breakdown](#section-2-the-renters-rights-act-2025)
3. [What Is Exempt From the Act](#section-3-what-is-exempt-from-the-act)
4. [Impact on Caner's Specific Situation](#section-4-impact-on-caners-specific-situation)
5. [Impact on the Flatbrowser Data Model](#section-5-impact-on-the-flatbrowser-data-model)

---

# Section 1: How UK Renting Works Today

This section explains the fundamentals of renting in England as they exist right now — before the big changes on 1 May 2026. Every concept is explained from scratch.

---

## 1.1 What Is an Assured Shorthold Tenancy (AST)?

An **Assured Shorthold Tenancy** (AST) is the default, most common type of private rental agreement in England. It was created by the Housing Act 1988 and has been the standard form of tenancy for nearly all private renters since 1997.

**Source:** [Shelter England — Assured shorthold tenancies](https://england.shelter.org.uk/housing_advice/private_renting/assured_shorthold_tenancies_with_private_landlords)

### What makes something an AST?

For a tenancy to be an AST, all of the following must be true:

| Requirement | What it means |
|---|---|
| The tenant is an individual | Not a company. A real person. |
| The property is the tenant's only or principal home | You actually live there — it is your main address. |
| The dwelling is self-contained | You have your own front door, kitchen, bathroom. It is a separate unit. |
| The landlord does not live in the same building | The landlord cannot share the property with you. If they live in a flat in the same building, it may still be an AST depending on the building design. |
| The annual rent is between GBP 250 and GBP 100,000 | Below GBP 250/year or above GBP 100,000/year, different rules apply. |

**Source:** [GOV.UK — Tenancy types](https://www.gov.uk/tenancy-agreements-a-guide-for-landlords/tenancy-types)

### What an AST gives you

An AST gives the tenant (you) several legal protections:

- **Security of tenure**: the landlord cannot just tell you to leave whenever they want. They must follow specific legal procedures.
- **Deposit protection**: your security deposit must be placed in a government-approved protection scheme (more on this below).
- **Right to quiet enjoyment**: the landlord cannot enter your home without permission or harass you.
- **Habitability standards**: the property must be safe and fit for human habitation.
- **Written terms**: you should receive a written tenancy agreement setting out the rent, the deposit, the length, and the obligations on each side.

**Source:** [Propertymark — What is an AST?](https://www.propertymark.co.uk/professional-standards/consumer-guides/tenants/assured-shorthold-tenancy-ast.html)

### What this means for you

If you sign a tenancy agreement for a flat in a Build-to-Rent tower in London, you are almost certainly signing an AST. This means the full weight of English housing law protects you — the Renters' Rights Act 2025 reforms are changes *to the AST regime*, so understanding ASTs is the foundation for understanding everything else in this document.

---

## 1.2 What Is a Licence Agreement?

A **licence agreement** (sometimes called a "licence to occupy") is a completely different legal arrangement from a tenancy. It gives you *permission* to use a property, but it does not give you the same legal rights as a tenant.

### Key differences between a tenancy and a licence

| Feature | AST (Tenancy) | Licence |
|---|---|---|
| **Exclusive possession** | Yes — you control who enters your space | No — the owner can enter freely |
| **Legal status** | You have a property right (an "interest in land") | You have a personal permission only |
| **Housing Act 1988 protections** | Full protections (deposit protection, eviction rules, etc.) | None of these protections apply |
| **Eviction process** | Landlord must follow statutory notice periods and go through the courts | Owner can revoke the licence with "reasonable notice" (much shorter) |
| **Deposit protection** | Required by law | Not required (though some operators protect deposits voluntarily) |
| **Advance rent cap (from 1 May 2026)** | Yes — maximum 1 month | No cap — the Act does not apply |

**Source:** [Taylor Wessing — Lease or licence?](https://www.taylorwessing.com/en/insights-and-events/insights/2018/06/lease-or-licence-the-issue-that-just-wont-go-away)

### When is a licence genuinely a licence?

The critical question is: **do you have exclusive possession?** If you have the right to exclude everyone, including the property owner, from your living space, then what you have is functionally a tenancy — regardless of what the piece of paper says.

Genuine licences typically arise when:

- You live in a hotel or serviced apartment where staff regularly enter to clean, change linen, and provide services.
- You share a room with other people selected by the owner (not by you).
- The owner provides substantial personal services (meals, cleaning, laundry).
- The owner retains a genuine right to move you to a different room.
- There is no fixed space that is exclusively "yours."

### Why this matters

Licence agreements are **outside the scope of the Renters' Rights Act 2025**. If your accommodation is genuinely on a licence, none of the new rules apply — including the advance rent cap. This is why the tenancy-vs-licence distinction becomes strategically important after 1 May 2026 (explored fully in Section 4).

---

## 1.3 The Street v Mountford Test

**Street v Mountford** [1985] AC 809 is a landmark House of Lords case that established how courts decide whether an agreement is a tenancy or a licence. It is still the governing authority in 2026.

**Source:** [LawTeacher — Street v Mountford](https://www.lawteacher.net/cases/street-v-mountford.php); [Oxford Law Blog — 40 Years on from Street v Mountford](https://blogs.law.ox.ac.uk/oxford-university-undergraduate-law-journal-blog/blog-post/2025/04/40-years-street-v-mountford)

### The rule

Lord Templeman held that **three elements** create a tenancy:

1. **Exclusive possession** — the occupier has the right to exclude all others, including the owner.
2. **For a term** — there is a defined period of occupation (even if periodic / rolling).
3. **At a rent** — the occupier pays money for the occupation.

If all three are present, it is a tenancy. **It does not matter what the agreement is called.** The label on the document is irrelevant. Courts look at the substance of the arrangement, not its form.

### What this means in practice

Lord Templeman explicitly warned against **"sham devices"** — agreements labelled as "licences" that are actually tenancies in disguise, created deliberately to avoid housing legislation. Courts are instructed to look past such labels and examine the real arrangement.

```
┌──────────────────────────────────────────┐
│           STREET v MOUNTFORD TEST        │
│                                          │
│  Does the occupier have:                 │
│    ✓ Exclusive possession?               │
│    ✓ A defined term?                     │
│    ✓ Payment of rent?                    │
│                                          │
│  ALL THREE = Tenancy (regardless of      │
│              what the document says)      │
│                                          │
│  MISSING ANY = Might be a licence        │
│                (but check for sham)       │
└──────────────────────────────────────────┘
```

### Why this matters for Caner

Some accommodation providers (e.g. The Quarters by Bravo, various serviced apartment operators) use licence agreements. Whether those licences are *genuinely* licences or *sham* licences depends on whether you actually have exclusive possession and whether genuine services are provided. If a court found that a "licence" was actually a tenancy, the full Renters' Rights Act would apply — including the advance rent cap.

**Source:** [Lester Aldridge — When is a licence not a licence?](https://www.lesteraldridge.com/blog/real-estate/when-is-a-licence-agreement-not-a-licence-agreement/)

---

## 1.4 Section 21: "No-Fault Eviction"

**Section 21** of the Housing Act 1988 allows a landlord to evict a tenant from an AST **without giving any reason**. The landlord simply serves a written notice giving at least two months' warning, and if the tenant does not leave, the landlord can apply to the court for a possession order.

**Source:** [Shelter England — Section 21 eviction](https://england.shelter.org.uk/housing_advice/eviction/section_21_eviction); [Citizens Advice — Section 21 notice](https://www.citizensadvice.org.uk/housing/eviction/getting-evicted/renting-privately/if-you-get-a-section-21-notice/)

### Why is it called "no-fault"?

Because the landlord does not need to prove that the tenant did anything wrong. The tenant might have paid every penny of rent on time, kept the flat spotless, been a perfect neighbour — and still be evicted with two months' notice. The landlord does not need to explain why.

### Why does it exist?

Section 21 was designed to give landlords confidence that they could get their property back when they needed it — to sell it, to move in themselves, to renovate, or simply because they preferred a different tenant. The theory was that this confidence would encourage more people to become landlords, increasing the supply of rental housing.

### Why is it controversial?

In practice, Section 21 has been used in ways that undermine tenant security:

- **Retaliatory evictions**: tenants who complain about repairs or habitability issues get served a Section 21 notice instead of getting the repairs done.
- **Rent extraction**: landlords serve Section 21 as a threat to force tenants to accept rent increases.
- **Housing instability**: tenants live with the permanent knowledge that they can be asked to leave at any time for no reason, which makes it hard to put down roots, plan for children's schooling, or invest in the community.

**Source:** [House of Commons Library — The end of no-fault Section 21 evictions](https://commonslibrary.parliament.uk/research-briefings/cbp-8658/)

### What replaces it?

Section 21 is abolished from **1 May 2026**. From that date, landlords can only evict tenants by using **Section 8** of the Housing Act 1988, which requires the landlord to prove a specific **ground for possession** (a legally defined reason). This is covered in detail in Section 2 of this document.

**Source:** [GOV.UK — No-fault evictions to end by May next year](https://www.gov.uk/government/news/no-fault-evictions-to-end-by-may-next-year)

---

## 1.5 Fixed-Term vs Periodic Tenancies

### Fixed-term tenancy

A **fixed-term tenancy** runs for a set period — typically 6 or 12 months, but it can be longer. During the fixed term:

- The tenant is committed to paying rent for the entire period.
- The landlord generally cannot ask the tenant to leave (unless the tenant breaches the agreement).
- The tenant generally cannot leave early without paying a penalty or negotiating an early termination.

**Source:** [HousingAnywhere — Fixed-term vs periodic tenancy](https://housinganywhere.com/United-Kingdom/fixed-term-vs-periodic-tenancy)

### Periodic (rolling) tenancy

A **periodic tenancy** (also called a "rolling tenancy") has no fixed end date. It renews automatically at the end of each period (usually each month). Either party can end it by giving the required notice:

- **Tenant**: typically one month's notice.
- **Landlord**: currently must use Section 21 (two months' notice, no reason needed) or Section 8 (specific grounds required).

### How they connect

In the current system (before 1 May 2026), most tenancies start as fixed-term (e.g. a 12-month AST). When the fixed term expires, if neither party takes action, the tenancy automatically becomes a **statutory periodic tenancy** — it rolls on month-to-month on the same terms.

### Why this is changing

From 1 May 2026, **no new fixed-term ASTs can be created**. All tenancies will be periodic (rolling) from day one. Existing fixed-term ASTs will automatically convert to periodic tenancies on 1 May 2026. The tenant can leave with two months' notice at any time.

**Source:** [The Property Experts — Fixed-term vs rolling tenancies](https://thepropertyexperts.co.uk/blog/fixed-term-vs-rolling-tenancies-pros-and-cons-for-uk-landlords); [Landlord Advice UK — From fixed-term to rolling contracts](https://landlordadvice.co.uk/preparing-for-the-new-tenancy-system-from-fixed-term-to-rolling-contracts/)

### What this means for you

Under the current system, you might sign a 12-month fixed term and know that you are committed for a year (and so is the landlord). From 1 May 2026, there is no such commitment period. You can leave any time with two months' notice. The landlord cannot lock you in. But equally, the landlord can seek possession at any time through the expanded Section 8 grounds (though most grounds require four months' notice and cannot be used in the first 12 months).

---

## 1.6 Credit Checks and Tenant Referencing

When you apply to rent a property through a letting agent (or directly from a landlord who uses professional tools), you will go through a process called **tenant referencing** (sometimes called "tenant screening" or "credit checking"). This is the process by which the landlord verifies that you can afford the rent and are likely to be a reliable tenant.

**Source:** [Citizens Advice — Information landlords ask for](https://www.citizensadvice.org.uk/housing/starting-to-rent-from-a-private-landlord/information-landlords-ask-for-when-you-start-renting/); [OpenRent — Tenant referencing](https://www.openrent.co.uk/tenant-referencing)

### What they check

A typical referencing process involves five checks:

| Check | What it looks at | Why it matters |
|---|---|---|
| **Identity verification** | Passport, driving licence, visa / BRP | Confirms you are who you say you are, and have the right to rent in the UK |
| **Credit check** | Your UK credit file — CCJs, bankruptcies, insolvency, DROs, electoral roll registration | Shows whether you have a history of not paying debts |
| **Income / affordability** | Payslips, employment contract, bank statements | Shows whether your income is high enough to cover the rent |
| **Employment verification** | Contact with your employer's HR/payroll department | Confirms you actually work where you say you work |
| **Previous landlord reference** | Contact with your previous landlord | Confirms you paid rent on time and looked after the property |

**Source:** [Rightmove — Preparing for reference checks](https://www.rightmove.co.uk/guides/renter/preparing-to-rent/reference-check/); [NRLA — Referencing your tenant](https://www.nrla.org.uk/resources/pre-tenancy/referencing-your-tenant)

### What happens with no UK credit history?

This is directly relevant to Caner's situation. If you have never lived in the UK as an adult, or have only been here as a student, you will have a **thin or empty credit file**. This does not mean you have *bad* credit — it means you have *no* credit. The referencing system does not know anything about you.

A thin credit file is not the same as a bad credit file, but many referencing systems treat both the same way: as elevated risk. The landlord cannot see evidence that you *will* pay, even though there is no evidence that you *won't*.

**Source:** [Bloom Money — How to rent with low or no credit](https://bloommoney.co/learning-hub/how-to-rent-a-house-with-low-or-no-credit); [Canopy — How to rent with a bad credit score](https://www.canopy.rent/resource/how-to-rent-with-a-bad-credit-score)

### How long does referencing take?

Typically 3–5 working days, though digital-first providers like Goodlord's PRO service can process some references instantly (average 1.5 days).

**Source:** [Goodlord — How long does referencing take?](https://blog.goodlord.co/how-long-does-tenant-referencing-take)

---

## 1.7 The Income Multiple

The **income multiple** is the primary affordability test used by landlords and letting agents. It works like this:

> Your annual gross income must be at least **X times** the monthly rent.

The most common multiple is **30x** — meaning your annual income must be at least 30 times the monthly rent. This is mathematically equivalent to saying your income must be at least **2.5 times the annual rent**.

**Source:** [Rent Affordability Calculator UK](https://rentaffordabilitycalculator.co.uk/); [Adleo — Rental income requirements UK](https://adleorelo.com/rental-income-requirements-uk/)

### Example

| Monthly rent | Required annual income (at 30x) |
|---|---|
| GBP 1,500 | GBP 45,000 |
| GBP 2,000 | GBP 60,000 |
| GBP 2,500 | GBP 75,000 |
| GBP 3,000 | GBP 90,000 |

### Variations

Some agents accept different multiples:

| Multiple | Annual income needed for GBP 2,000/month | Common with |
|---|---|---|
| 24x | GBP 48,000 | Lenient agents, competitive areas |
| 27x | GBP 54,000 | Some London agents |
| **30x** | **GBP 60,000** | **Standard / most common** |
| 36x | GBP 72,000 | Strict agents, premium properties |

### What happens if you fail the income check?

If your income does not meet the landlord's multiple, you have three options under the current (pre-1 May 2026) system:

1. **Provide a guarantor** — someone else agrees to pay if you do not. They typically need income of 36x the monthly rent.
2. **Pay rent in advance** — offer 3, 6, or 12 months of rent upfront to reduce the landlord's risk. This is Caner's current strategy.
3. **Your application is rejected.**

**Source:** [MoneySavingExpert Forum — Agent asking for 30x monthly rental](https://forums.moneysavingexpert.com/discussion/1451217/agent-asking-for-annual-income-to-be-30-times-monthly-rental)

### What this means for you

With no UK payslips and no formal income, Caner cannot meet any income multiple at any threshold. The number is irrelevant when the numerator is zero. Under the current system, this is worked around by offering upfront rent. Under the post-1 May 2026 system, this workaround disappears for AST tenancies.

---

## 1.8 Guarantors

A **guarantor** is a person (or company) who legally promises to pay your rent if you fail to pay it. They sign a separate legal agreement — a **guarantee** — that makes them personally liable for the rent.

**Source:** [Shelter England — Guarantors for private tenants](https://england.shelter.org.uk/housing_advice/private_renting/guarantors_for_private_renters)

### Types of guarantor

| Type | Who they are | Typical requirements |
|---|---|---|
| **Personal guarantor (family/friend)** | A UK-based individual, often a parent or close relative | Annual income of at least 36x monthly rent; UK homeowner preferred; must pass credit check with 3 years UK credit history |
| **Overseas guarantor** | A person based outside the UK | Accepted by some operators, but rare — difficult to enforce against someone in another jurisdiction |
| **Professional guarantor service** | A company that acts as guarantor for a fee | Typically charges 50–90% of one month's rent per year; requirements vary (see below) |

**Source:** [Homeppl — Who can be a rent guarantor?](https://www.homeppl.com/blog/who-can-be-a-rent-guarantor/); [Housing Hand — Who can be a rent guarantor?](https://housinghand.com/who-can-be-rent-guarantor/)

### Personal guarantor requirements

Most landlords require a personal guarantor to be:

- **UK-resident** — so that the guarantee can be enforced through UK courts.
- **Over 21 years old.**
- **A UK homeowner** — this is preferred but not always required.
- **Earning at least 36x the monthly rent** (annual income). For GBP 2,000/month rent, that is GBP 72,000/year.
- **Able to pass a UK credit check** — meaning at least 3 years of UK credit history.

**Source:** [Apartemo — The complete guide to rent guarantors](https://apartemo.com/en-GB/blog/rent-guarantor-guide/); [Checkmyfile — How much does a guarantor need to earn?](https://www.checkmyfile.com/help-centre/articles/how-much-does-a-guarantor-need-to-earn)

### What this means for you

As a Turkish national on a Graduate visa, Caner's parents are in Turkey (overseas guarantor — rarely accepted) and are unlikely to meet UK homeowner or UK credit history requirements. Professional guarantor services are the most realistic route if the upfront rent strategy is unavailable. More on this in Section 4.

---

## 1.9 Deposits: Holding Deposits and Security Deposits

There are two types of deposit in UK renting, and they are often confused.

### Holding deposit

A **holding deposit** is a payment you make to "reserve" a property while the landlord runs referencing checks on you. It signals that you are serious and that the landlord should stop marketing the property to other applicants.

| Rule | Detail |
|---|---|
| **Maximum amount** | One week's rent (calculated for the whole property, not per tenant) |
| **When you pay it** | Before the tenancy agreement is signed, when you agree to proceed with the application |
| **When you get it back** | Within 7 days of signing the tenancy agreement (it is typically deducted from the first rent payment or deposit) |
| **When the landlord keeps it** | If you fail right-to-rent checks, withdraw from the application, refuse to sign, or provided false information |

**Source:** [legislation.gov.uk — Holding deposit, Tenant Fees Act 2019 Schedule 1](https://www.legislation.gov.uk/ukpga/2019/4/schedule/1/crossheading/holding-deposit)

### Security deposit (tenancy deposit)

A **security deposit** is a larger sum you pay at the start of the tenancy as protection against damage or unpaid rent. The landlord holds it for the duration of the tenancy, and returns it (minus any legitimate deductions) when you move out.

| Rule | Detail |
|---|---|
| **Maximum amount** | 5 weeks' rent (if annual rent is under GBP 50,000) or 6 weeks' rent (if annual rent is GBP 50,000+) |
| **Must be protected** | By law, within 30 days of receiving it, in one of three government-approved schemes |
| **The three schemes** | Deposit Protection Service (DPS), mydeposits, Tenancy Deposit Scheme (TDS) |
| **Penalty for not protecting** | Tenant can claim compensation of up to 3x the deposit amount; landlord cannot use Section 21 |
| **Dispute resolution** | All three schemes offer free dispute resolution if you and the landlord disagree about deductions |

**Source:** [GOV.UK — Tenancy deposit protection](https://www.gov.uk/tenancy-deposit-protection); [tenant-rights.uk — Understanding deposit schemes](https://tenant-rights.uk/england/understanding-tenancy-deposit-schemes-in-england)

### Two types of protection scheme

| Type | How it works |
|---|---|
| **Custodial** | The deposit is physically held by the scheme (not the landlord). Free for the landlord. |
| **Insured** | The landlord or agent keeps the deposit but pays an insurance premium to the scheme. If the landlord disappears, the scheme covers the tenant. |

### What this means for you

When you sign a tenancy, expect to pay (at most):
- **Holding deposit**: 1 week's rent (refunded or applied to your first payment)
- **Security deposit**: 5 weeks' rent (protected, returned at end minus legitimate deductions)
- **First month's rent**: 1 month's rent

These are the only payments a landlord can require. The Tenant Fees Act 2019 bans everything else.

---

## 1.10 The Tenant Fees Act 2019

The **Tenant Fees Act 2019** banned most fees that landlords and letting agents used to charge tenants. Before this Act, agents routinely charged tenants hundreds of pounds in "admin fees", "referencing fees", "check-in fees", "renewal fees", and similar charges.

**Source:** [GOV.UK — Tenant Fees Act guidance](https://www.gov.uk/government/publications/tenant-fees-act-amended-by-the-renters-rights-act-2025/tenant-fees-act-2019-statutory-guidance-for-enforcement-authorities)

### What landlords and agents CAN charge

After the Tenant Fees Act 2019, the only payments a landlord or agent can require from a tenant are:

| Permitted payment | Maximum |
|---|---|
| Rent | As agreed in the tenancy |
| Holding deposit | 1 week's rent |
| Security deposit | 5 weeks' rent (or 6 weeks if annual rent >= GBP 50,000) |
| Change to tenancy agreement at tenant's request | GBP 50 or reasonable costs if higher |
| Early termination of tenancy at tenant's request | Reasonable costs |
| Utilities, council tax, TV licence | If the tenancy agreement states the tenant pays these |
| Late payment of rent (14+ days overdue) | Interest at 3% above Bank of England base rate |
| Replacement of lost keys | Reasonable cost |

### What landlords and agents CANNOT charge

Everything else is banned. Specifically:

- Referencing fees
- Credit check fees
- Admin fees
- Viewing fees
- Contract renewal fees
- Inventory fees
- Check-in / check-out fees
- Professional cleaning fees (as a precondition)
- Any fee for setting up or continuing a tenancy

**Source:** [legislation.gov.uk — Tenant Fees Act 2019 Schedule 1](https://www.legislation.gov.uk/ukpga/2019/4/schedule/1); [Property Redress — Understanding the Tenant Fees Act 2019](https://www.propertyredress.co.uk/resources/understanding-the-tenant-fees-act-2019)

### How the Renters' Rights Act 2025 amends the Tenant Fees Act

Section 9 of the Renters' Rights Act 2025 adds a new category of prohibited payment to the Tenant Fees Act: **"prohibited pre-tenancy payment of rent"**. This means that from 1 May 2026, paying rent before the tenancy agreement is signed is a prohibited payment under the Tenant Fees Act. More on this in Section 2.

**Source:** [legislation.gov.uk — RRA Section 9](https://www.legislation.gov.uk/ukpga/2025/26/section/9)

---

## 1.11 How the "Upfront Rent" Bypass Works in Practice

This is the strategy Caner has been planning to use. Here is exactly how it works under the *current* system (before 1 May 2026).

### The problem

You want to rent a flat. The letting agent runs referencing. You have:
- No UK payslips (no formal income)
- No UK credit history (thin file)
- No UK-based guarantor

Under normal referencing, your application would be rejected because you cannot demonstrate affordability.

### The workaround

You offer to pay **3, 6, or 12 months of rent upfront** in a single lump sum at the start of the tenancy. This does several things:

1. **Reduces the landlord's risk**: even if you never pay another penny, the landlord has already received months of rent.
2. **Bypasses the income check**: if you have paid 6 months upfront, the landlord is covered for 6 months regardless of your employment status.
3. **Bypasses the credit check**: the lump sum acts as proof of financial capability, even though it does not prove ongoing income.
4. **Makes a guarantor unnecessary**: the upfront payment serves a similar risk-reduction function.

### How common is this?

According to Goodlord's State of the Lettings Industry Report 2025, **1 in 5 renters** used advance payments to secure a place to live because they could not provide a guarantor. The practice is especially common among international students, recent immigrants, self-employed workers, and people with poor or no UK credit history.

**Source:** [Goodlord — Rent in advance ban 2026](https://blog.goodlord.co/rent-in-advance)

### Why it is about to stop working

From 1 May 2026, for any new AST tenancy, a landlord **cannot require or accept more than 1 month's rent in advance**. This is the single most impactful change for Caner's situation. Full details in Section 2.

---

## 1.12 Referencing Providers: Homeppl, Goodlord, Canopy

Different letting agents use different companies to run tenant referencing. The traditional model involves manually verifying documents (payslips, bank statements, employer letters). Newer providers use technology — especially **Open Banking** — to verify affordability directly from bank data.

### Major referencing providers

| Provider | Approach | Key feature |
|---|---|---|
| **Goodlord** | Full-service platform for letting agents; in-house referencing team + HMRC/payroll/Open Banking integration | PRO service averages 1.5-day turnaround; 25% processed instantly; also offers professional guarantor service |
| **Canopy** | Tenant-first digital approach using Open Banking + Experian credit data | RentPassport product is free for tenants; basic reference free for agents, comprehensive check GBP 3 |
| **Homeppl** | Open Banking-powered verification with fraud detection and risk analysis | Analyses real transaction data for income manipulation, forged employer details, suspicious spending patterns |
| **OpenRent** | Direct landlord-to-tenant platform with built-in referencing | Popular with smaller landlords; uses Equifax for credit checks |
| **Lettings Hub** | Full referencing service using Open Banking as primary verification | Comprehensive with multiple verification methods |

**Source:** [Homeppl — Open Banking referencing](https://www.homeppl.com/lp/what-does-open-banking-mean-in-the-rental-market/); [Goodlord — Tenant referencing](https://www.goodlord.co/product/tenant-referencing); [The Negotiator — Who's who in tenant referencing](https://thenegotiator.co.uk/features/whos-who/)

### How Open Banking referencing works

Open Banking is a UK government-backed system that lets you securely share your bank transaction data with authorised third parties. Here is the process:

1. The letting agent invites you to complete a reference check.
2. You receive a link to connect your bank account via Open Banking.
3. You authenticate with your bank (using your bank's own login system — the referencing company never sees your password).
4. The referencing system pulls your recent transaction data: salary deposits, regular expenses, rent-like payments, spending patterns.
5. The system analyses this data for affordability, income stability, and fraud indicators.
6. A risk assessment is produced and sent to the letting agent.

**Source:** [OpenBanking.org.uk — Guide to buying and renting with Open Banking](https://www.openbanking.org.uk/insights/guide-to-buying-and-renting-property-with-open-banking/)

### Why Open Banking matters for Caner

Open Banking referencing looks at **actual bank transactions**, not just payslips. If Caner has savings in a UK bank account and regular income from any source (freelance work, family support, contract payments), Open Banking can potentially demonstrate affordability in a way that traditional payslip-based referencing cannot. However, if the bank account simply shows a large static balance with no regular income, the referencing system may flag this as insufficient for ongoing rent affordability.

**Source:** [Homeppl FAQs](https://www.homeppl.com/faqs/); [GoCardless — Open Banking income verification](https://gocardless.com/guides/posts/open-banking-income-verification/)

---

# Section 2: The Renters' Rights Act 2025

This section covers every significant provision of the Act in detail, with specific section references and source URLs for each claim.

---

## 2.1 History and Parliamentary Journey

### The predecessor: the Renters (Reform) Bill

The Conservative government introduced the **Renters (Reform) Bill** in 2023. It proposed many similar reforms — abolishing Section 21, introducing expanded Section 8 grounds, applying the Decent Homes Standard to private rentals. However, the bill **did not pass** before the Conservatives lost the July 2024 general election. It died when Parliament was dissolved.

**Source:** [Wikipedia — Renters' Rights Act 2025](https://en.wikipedia.org/wiki/Renters'_Rights_Act_2025)

### The Renters' Rights Bill

The Labour government, elected in July 2024, introduced the **Renters' Rights Bill** on **11 September 2024** in the House of Commons. It was broadly similar to the Conservative bill but included additional tenant protections, including the advance rent cap and the rental bidding ban, reflecting commitments in Labour's 2024 manifesto.

### Parliamentary timeline

| Date | Event |
|---|---|
| 11 Sep 2024 | Bill introduced in House of Commons (First Reading) |
| 9 Oct 2024 | Second Reading in House of Commons |
| Oct–Jan 2025 | Committee Stage in House of Commons |
| 14 Jan 2025 | Report Stage and Third Reading in House of Commons |
| Early 2025 | Bill moves to House of Lords |
| 22 Apr – 15 May 2025 | Committee Stage in House of Lords |
| 22 Oct 2025 | Bill clears Parliament (both Houses approve final text) |
| **27 Oct 2025** | **Royal Assent — becomes the Renters' Rights Act 2025 (c. 26)** |

**Source:** [bills.parliament.uk — Renters' Rights Act 2025 Stages](https://bills.parliament.uk/bills/3764/stages); [House of Commons Library — Progress of the bill](https://commonslibrary.parliament.uk/research-briefings/cbp-10166/)

---

## 2.2 Commencement Dates

The Act does not come into force all at once. Different provisions commence on different dates:

| Date | What commences | Source |
|---|---|---|
| **27 Oct 2025** | Royal Assent; preparatory provisions take effect | [legislation.gov.uk](https://www.legislation.gov.uk/ukpga/2025/26/contents) |
| **27 Dec 2025** | Local authority enforcement powers (investigatory powers, fines for sham licences); PBSA exemption framework activated (but regulations needed) | [GOV.UK Guide](https://www.gov.uk/government/publications/guide-to-the-renters-rights-act/guide-to-the-renters-rights-act) |
| **1 May 2026** | **"Big bang" date** — the following all commence simultaneously: | [NRLA — Commencement day confirmed](https://www.nrla.org.uk/news/renters-rights-act-commencement-ben-beadle); [Gowling WLG — Final countdown](https://gowlingwlg.com/en/insights-resources/articles/2026/renters-rights-act-2025-the-final-countdown-1-may-2026) |
| | - Section 21 (no-fault eviction) abolished | |
| | - All ASTs convert to periodic tenancies | |
| | - No new fixed-term ASTs can be created | |
| | - Advance rent cap (max 1 month) | |
| | - Rental bidding ban | |
| | - Discrimination ban (benefits + children) | |
| | - Rent increase reform (Section 13 only, once per year, 2 months' notice) | |
| | - Pet request rights | |
| | - Written statement requirement for new tenancies | |
| **31 May 2026** | Deadline for landlords to serve Information Sheet on existing tenants (fine up to GBP 7,000) | [Gowling WLG](https://gowlingwlg.com/en/insights-resources/articles/2026/renters-rights-act-2025-the-final-countdown-1-may-2026) |
| **Late 2026** | PRS Database phased rollout begins | [GOV.UK Implementation Roadmap](https://www.gov.uk/government/publications/renters-rights-act-2025-implementation-roadmap/implementing-the-renters-rights-act-2025-our-roadmap-for-reforming-the-private-rented-sector) |
| **~2028** | PRS Ombudsman — mandatory membership for all private landlords | [GOV.UK Implementation Roadmap](https://www.gov.uk/government/publications/renters-rights-act-2025-implementation-roadmap/implementing-the-renters-rights-act-2025-our-roadmap-for-reforming-the-private-rented-sector) |
| **Oct 2027** | Social housing tenancy reforms (Registered Providers) | [GOV.UK — Social housing implementation](https://www.gov.uk/government/publications/implementing-the-renters-rights-act-social-housing/implementing-the-renters-rights-act-social-housing) |
| **2035** | Decent Homes Standard applied to private rented sector | [The Independent Landlord — DHS](https://theindependentlandlord.com/dhs/) |

### Is 1 May 2026 confirmed?

Yes. The government announced on 13 November 2025 that the bulk of the Act would commence from 1 May 2026. This was confirmed by statutory instrument. The date is not tentative.

**Source:** [NRLA — Renters' Rights Act commencement](https://www.nrla.org.uk/news/renters-rights-act-commencement-ben-beadle); [Barrister KnowHow — End of Section 21 confirmed](https://barristerknowhow.com/blog/renters-rights-act-2025-transitional-provisions/)

---

## 2.3 Section 21 Abolition — Full Detail

### What happens

From 1 May 2026:

- **Section 21 of the Housing Act 1988 is abolished.** No landlord can serve a new Section 21 notice.
- The last day to serve a valid Section 21 notice is **30 April 2026**.
- If a Section 21 notice was served before 1 May 2026, the landlord must start court proceedings by **31 July 2026** or the notice becomes invalid.
- Every eviction must now go through **Section 8**, which requires the landlord to specify one or more **grounds for possession** — legally defined reasons.

**Source:** [Gowling WLG — Final countdown](https://gowlingwlg.com/en/insights-resources/articles/2026/renters-rights-act-2025-the-final-countdown-1-may-2026); [Keystone Law — Abolition of no-fault evictions](https://keystonelaw.com/keynotes/the-renters-rights-act-the-abolition-of-no-fault-evictions-and-the-new-possession-procedure/)

### What replaces it: the expanded Section 8 grounds

The Act rewrites and expands the grounds for possession under Section 8. These are divided into **mandatory grounds** (the court *must* grant possession if the ground is proven) and **discretionary grounds** (the court decides whether eviction is reasonable in the circumstances).

#### Key mandatory grounds

| Ground | Purpose | Notice required | Can be used in first 12 months? |
|---|---|---|---|
| **Ground 1** | Landlord or family wants to move in | 4 months | No |
| **Ground 1A** | Landlord wants to sell the property | 4 months | No |
| **Ground 1B** | Rent-to-buy property | 4 months | No |
| **Ground 2** | Mortgagee in possession (bank repossessing) | 4 months | Yes |
| **Ground 4** | Student letting (aligning with academic year) | 2 weeks | N/A |
| **Ground 4A** | Student HMO (new ground for multi-occupancy student lets) | 4 months | N/A |
| **Ground 6** | Redevelopment requiring vacant possession | 4 months | No |
| **Ground 6A** | Substantial refurbishment | 4 months | No |
| **Ground 7A** | Severe anti-social behaviour / criminal behaviour | Immediate / 2 weeks | Yes |
| **Ground 7B** | Tenant has no right to rent (immigration law) | Requires Secretary of State notice | Yes |
| **Ground 8** | Three or more months' rent arrears (at notice date AND court hearing date) | 4 weeks | Yes |

#### Key discretionary grounds

| Ground | Purpose | Notice required |
|---|---|---|
| **Ground 10** | Any rent arrears (even small) | 4 weeks |
| **Ground 11** | Persistent late payment | 4 weeks |
| **Ground 12** | Breach of tenancy terms | 2 weeks |
| **Ground 14** | Anti-social behaviour (less severe than 7A) | Immediate / 2 weeks |
| **Ground 14A** | Domestic abuse perpetrator | 2 weeks |
| **Ground 17** | Tenant made false statements to get the tenancy | 2 weeks |

**Source:** [GOV.UK — Guide to the Renters' Rights Act (Grounds for Possession)](https://www.gov.uk/government/publications/guide-to-the-renters-rights-act/guide-to-the-renters-rights-act); [Ellisons — Key questions answered](https://ellisons.com/news/the-renters-rights-act-2025-your-key-questions-answered/)

### The 12-month protected period

For Grounds 1 (landlord moving in), 1A (sale), 6 (redevelopment), and 6A (refurbishment), the landlord **cannot use these grounds during the first 12 months** of the tenancy. This gives tenants a minimum of 12 months' effective security — combined with 4 months' notice, that is at least 16 months before the landlord can get you out for these reasons.

### Anti-abuse protection for Grounds 1 and 1A

If a landlord evicts you using Ground 1 (moving in) or 1A (sale), they **cannot re-let the property or market it for rent for 12 months**. This prevents landlords from pretending they want to sell just to get rid of a tenant.

### What this means for you

Ground 7B (no right to rent) might sound worrying, but it requires a **Secretary of State notice** confirming the tenant has no right to rent. Graduate visa holders **do** have the right to rent in the UK. This ground does not apply to Caner.

The 12-month protected period + 4 months' notice means that in practice, Caner would have at least 16 months of security in any new tenancy. This is significantly more protection than the current system, where a Section 21 notice could arrive after month 6 of a 12-month AST.

---

## 2.4 Periodic Tenancies — What Changes

### Before 1 May 2026

- Tenancies can be fixed-term (6 months, 12 months, etc.) or periodic.
- Most tenancies start as fixed-term and become periodic when the term expires.

### From 1 May 2026

- **No new fixed-term ASTs can be created.** All new tenancies are periodic from day one.
- **Existing fixed-term ASTs convert to periodic on 1 May 2026**, regardless of when the fixed term was due to expire. If you signed a 12-month AST on 1 January 2026 that was due to expire on 31 December 2026, it converts to periodic on 1 May 2026.
- **Tenants can leave with 2 months' notice at any time.** There is no minimum period.
- The only exception: **leases with fixed terms exceeding 21 years** (effectively long leaseholds — not relevant to rental).

**Source:** [GOV.UK — Guide to the Renters' Rights Act](https://www.gov.uk/government/publications/guide-to-the-renters-rights-act/guide-to-the-renters-rights-act); [Gowling WLG — Final countdown](https://gowlingwlg.com/en/insights-resources/articles/2026/renters-rights-act-2025-the-final-countdown-1-may-2026)

### Penalties for offering fixed terms

Trying to offer a fixed-term tenancy after 1 May 2026 can result in a **financial penalty of up to GBP 7,000**.

**Source:** [TemplatesUK — Assured Shorthold Tenancy Guide (Section 21 abolished)](https://templatesuk.com/assured-shorthold-tenancy-guide-uk/)

### What this means for you

The shift to periodic tenancies is a double-edged sword:

- **Good**: You can leave any time with 2 months' notice. No "trapped in a bad flat for 12 months" problem.
- **Good**: The 12-month protected period + mandatory grounds means the landlord cannot easily remove you either.
- **Less good**: Landlords may be more cautious about who they let to, because they cannot lock tenants in for a fixed period.

---

## 2.5 Advance Rent Cap — The Most Important Provision for Caner

This is the provision that directly kills the "3 months upfront" strategy. It is spread across two sections of the Act.

### Section 8 of the Renters' Rights Act 2025 (inserting s.4B into the Housing Act 1988)

Section 8 inserts a new **section 4B** into the Housing Act 1988. It provides:

> Terms of an assured tenancy which provide for when rent is due are of no effect so far as they provide for rent to be due in advance.

In plain English: **any clause in a tenancy agreement that says "rent is due before the start of the rent period" is void.** It has no legal effect. You cannot be required to pay rent before the period it relates to.

**Exception — initial rent**: The landlord may require payment of "initial rent" — rent for the first 28 days of the tenancy (or one calendar month if the rent period is monthly). This payment can be required before the tenancy starts, but only after the tenancy agreement has been signed.

**Source:** [legislation.gov.uk — RRA Section 8](https://www.legislation.gov.uk/ukpga/2025/26/section/8)

### Section 9 of the Renters' Rights Act 2025 (amending the Tenant Fees Act 2019)

Section 9 inserts a **prohibited pre-tenancy payment of rent** into the Tenant Fees Act 2019. This means:

- **Before the tenancy is signed**: landlords and agents cannot invite, encourage, or accept any payment of rent. Not one penny. Not even if the tenant volunteers it.
- This includes payments from the tenant, from someone acting on behalf of the tenant, or from anyone who has guaranteed the tenant's rent.
- If a landlord or agent accepts pre-tenancy rent, it is a **prohibited payment** under the Tenant Fees Act, subject to enforcement action and fines.

**Source:** [legislation.gov.uk — RRA Section 9](https://www.legislation.gov.uk/ukpga/2025/26/section/9); [GOV.UK — Tenant Fees Act amended by the RRA](https://www.gov.uk/government/publications/tenant-fees-act-amended-by-the-renters-rights-act-2025/tenant-fees-act-2019-statutory-guidance-for-enforcement-authorities)

### Summary: what a landlord can require from 1 May 2026

```
┌──────────────────────────────────────────────────────────────────────┐
│           MAXIMUM UPFRONT PAYMENTS — NEW AST FROM 1 MAY 2026        │
│                                                                      │
│   BEFORE signing:                                                    │
│     Holding deposit .............. max 1 week's rent                 │
│     Rent ......................... ZERO (prohibited)                  │
│                                                                      │
│   AT signing (before move-in):                                       │
│     Security deposit ............. max 5 weeks' rent                 │
│     Initial rent ................. max 1 calendar month              │
│                                                                      │
│   TOTAL a landlord can require:   ~7.3 weeks' rent                  │
│                                                                      │
│   DURING tenancy:                                                    │
│     Advance rent clause .......... VOID (no legal effect)            │
│     Voluntary advance payment .... Permitted, BUT landlord cannot    │
│                                    require, encourage, or use as     │
│                                    a selection criterion              │
└──────────────────────────────────────────────────────────────────────┘
```

### Worked example

For a flat renting at GBP 2,000/month:

| Payment | Current system | From 1 May 2026 |
|---|---|---|
| Holding deposit | GBP 462 (1 week) | GBP 462 (1 week) |
| Security deposit | GBP 2,308 (5 weeks) | GBP 2,308 (5 weeks) |
| Advance rent | GBP 6,000–24,000 (3–12 months) | **GBP 2,000 (1 month max)** |
| **Total required upfront** | **GBP 8,770–26,770** | **GBP 4,770** |

The total drops dramatically — but crucially, the advance rent cannot be used as a way to bypass referencing requirements.

### Voluntary advance payments

After the tenancy agreement is signed and the tenancy has started, a tenant **may voluntarily pay additional rent in advance** — for example, paying three months at once for convenience or budgeting. However:

- The landlord **cannot require** this.
- The landlord **cannot encourage** this.
- The landlord **cannot suggest** this.
- The landlord **cannot use willingness to pay in advance as a selection criterion** when choosing between applicants.
- Any tenancy clause requiring advance rent payments is **void**.

In practice, this means the "pay upfront to bypass checks" strategy does not work. Even if you *want* to pay upfront, the landlord cannot use your offer as a reason to accept you over another applicant. The referencing process must stand on its own.

**Source:** [BCLP — Navigating the Renters' Rights Act](https://www.bclplaw.com/en-US/events-insights-news/navigating-the-renters-rights-act-2025-key-changes-and-practical-implications.html); [Belvoir — Rent in advance limits](https://www.belvoir.co.uk/guides/landlords/rent-in-advance-limits-under-the-renters-rights-act-2025-what-landlords-need-to-factor-into-their-strategy/)

### What this means for you

This is the critical change. Caner's plan to offer 3 months' rent upfront to bypass credit/income checks **will not work for any new AST signed on or after 1 May 2026**. The landlord legally cannot accept more than 1 month, and cannot use the offer as a selection factor. Alternative strategies are needed — covered in Section 4.

---

## 2.6 Anti-Avoidance Provisions (Front-Loading Rent)

The Act contains specific provisions to prevent landlords from working around the advance rent cap by charging higher rent in earlier periods.

### What is front-loading?

Front-loading means setting the rent higher in the first few months and lower afterwards — for example, GBP 3,000/month for months 1–3 and GBP 1,500/month thereafter. The excess in the early months functions as disguised advance rent.

### What the Act says

Section 9 explicitly provides that if rent for one period is higher than rent for a later period, the excess constitutes a **prohibited payment**. In the statutory guidance:

> "In the first year of the tenancy, a landlord or agent must not charge the tenant more at the start of the tenancy."
>
> Example: "Charging GBP 800 in month one and GBP 500 thereafter creates a prohibited GBP 300 payment in the first month."

**Source:** [GOV.UK — Tenant Fees Act statutory guidance](https://www.gov.uk/government/publications/tenant-fees-act-amended-by-the-renters-rights-act-2025/tenant-fees-act-2019-statutory-guidance-for-enforcement-authorities); [legislation.gov.uk — RRA Section 9](https://www.legislation.gov.uk/ukpga/2025/26/section/9)

### Third-party avoidance

The anti-avoidance provisions also cover attempts to use third parties:

- Landlords cannot get a third party to collect prohibited rent on their behalf.
- Landlords cannot encourage the tenant to make a payment to a third party that functions as advance rent.
- Letting agents are separately prohibited from the same behaviour.

**Source:** [BCLP — Practical implications](https://www.bclplaw.com/en-US/events-insights-news/navigating-the-renters-rights-act-2025-key-changes-and-practical-implications.html)

---

## 2.7 Rent Increase Rules

### Current system (before 1 May 2026)

Rent can be increased in several ways:
- Through a **contractual rent review clause** in the tenancy agreement (e.g. "rent increases by RPI + 2% annually").
- Through a **Section 13 notice** (the statutory mechanism).
- By mutual agreement.

### From 1 May 2026

**All contractual rent review clauses are abolished.** No more fixed uplifts, RPI-linked reviews, or bespoke review mechanisms — even if written into the tenancy agreement. These clauses become void.

The **only** way to increase rent is through the **statutory Section 13 process**:

| Rule | Detail |
|---|---|
| **Frequency** | Maximum once every 12 months |
| **First increase** | No earlier than 52 weeks after the tenancy start date |
| **Notice** | At least 2 months' written notice using a prescribed form |
| **Basis** | Must be to the market rate — not an arbitrary increase |
| **Tenant challenge** | Tenant can refer the increase to the First-tier Tribunal (Property Chamber) before it takes effect |
| **Tribunal powers** | Can confirm the proposed rent, or reduce it if it exceeds market rate; **cannot increase it** beyond the landlord's proposal |
| **Hardship** | Tribunal can delay the increase by up to 2 further months if it would cause undue hardship |
| **Backdating** | The new rent takes effect from the Tribunal's decision date, not backdated |

**Source:** [BCLP — Rent increases](https://www.bclplaw.com/en-US/events-insights-news/renters-rights-act-2025.html); [Stepping Stones Letting — Section 13 rent reviews](https://www.steppingstonesletting.com/section-13-rent-reviews-renters-rights-act/); [Trowers — Rent increases under the RRA](https://www.trowers.com/insights/2025/july/rent-increases-under-the-renters-rights-bill)

### What this means for you

Rent increases are now regulated, predictable, and challengeable. You will never face a surprise mid-tenancy rent hike. The landlord must give you 2 months' notice of any increase, can only do it once a year, and you can challenge it at a tribunal (free to apply) if you think it exceeds market rate. The tribunal cannot set a rent higher than what the landlord proposed.

---

## 2.8 Discrimination Provisions

### What is now illegal

From 1 May 2026, it is unlawful for landlords, letting agents, or anyone involved in the letting process to discriminate against prospective tenants on the basis of:

**1. Receiving benefits** — This covers all forms of government financial support:
- Universal Credit
- Jobseeker's Allowance (JSA)
- Personal Independence Payment (PIP)
- Employment and Support Allowance (ESA)
- Income Support
- Housing Benefit
- State Pension / Pension Credit
- Council Tax Support
- Tax Credits (Working Tax Credit, Child Tax Credit)
- Child Benefit
- Guardian's Allowance
- Carer's Allowance

**2. Having children** — This means anyone under 18 who would live with or visit the tenant at the property. It covers existing children, expected children, and visiting children.

**Source:** [GOV.UK — Rental discrimination under the RRA](https://www.gov.uk/government/publications/rental-discrimination-under-the-renters-rights-act-2025/rental-discrimination-under-the-renters-rights-act-2025); [Cornerstone Barristers — Rental discrimination](https://cornerstonebarristers.com/rental-discrimination-under-the-renters-rights-act-2025/)

### What is still legal

The Act does **not** prohibit discrimination based on:

| Still legal | Why |
|---|---|
| Visa type or duration | Not a protected characteristic under the Act |
| No UK credit history | Not a protected characteristic |
| Nationality or immigration status | Covered only by the Equality Act 2010, not the RRA specifically |
| Income level | Affordability checks are legitimate — landlords can set income thresholds |
| Guarantor requirements | Can still be required, as long as applied uniformly |

### Important nuances

- **Income assessment must count all income equally.** If a landlord accepts employment income, they must also accept benefits income at the same rate. They cannot apply a higher income multiple to benefits recipients.
- **Guarantor requirements must be applied uniformly.** A landlord cannot require a guarantor *only from* benefits recipients while waiving the requirement for employed tenants.
- **"No DSS" adverts are explicitly illegal.** Any advertisement that says "no DSS", "no benefits", "working professionals only", or similar language violates the Act.
- **Decisions based on false beliefs still count as discrimination.** If a landlord refuses you because they *believe* you receive benefits, even if you do not, that is still discrimination.

**Source:** [Chambers and Partners — New protections for tenants](https://chambers.com/articles/the-renters-rights-act-2025-what-are-the-new-protections-for-tenants); [GOV.UK — Rental discrimination guidance](https://www.gov.uk/government/publications/rental-discrimination-under-the-renters-rights-act-2025/rental-discrimination-under-the-renters-rights-act-2025)

### What this means for you

The discrimination provisions do not directly help Caner's specific situation. The Act protects benefits recipients and families with children, but it does not protect people with:
- No UK credit history
- No formal income
- Visa-based immigration status

Landlords can still reject Caner's application on the basis that he has no income to meet the income multiple, no UK credit history, and no UK-based guarantor. These are legitimate affordability criteria, not discriminatory criteria under the Act.

---

## 2.9 Rental Bidding Ban

### What is rental bidding?

Rental bidding is when multiple applicants for a property compete by offering to pay more than the advertised rent. In high-demand areas like London, this has become common — a flat advertised at GBP 2,000/month might end up going for GBP 2,300/month because desperate tenants outbid each other.

### What the Act does

From 1 May 2026:

- **All property advertisements must state a clear and precise rent figure.** Not a range, not "offers in excess of", not "POA" (price on application) — an exact number.
- **Landlords and agents cannot invite, encourage, or accept offers above the advertised rent.**
- **Tenants can challenge the initial rent in the first 6 months** by applying to the First-tier Tribunal if they believe the landlord set the rent above market rate to compensate for not being able to bid.

### Penalties

- First breach: civil penalty up to **GBP 7,000**.
- Repeat breach: civil penalty up to **GBP 40,000**.

**Source:** [Cluttons — Renters' Rights Act guide](https://www.cluttons.com/renters-rights-bill/); [Attwells — What landlords must know](https://attwells.com/renters-right-act-2025-advice-for-landlords/); [Gowling WLG — Final countdown](https://gowlingwlg.com/en/insights-resources/articles/2026/renters-rights-act-2025-the-final-countdown-1-may-2026)

### What this means for you

The bidding ban helps Caner indirectly. In the current market, tenants with deeper pockets can outbid others for desirable properties. By banning this practice, the Act levels the playing field — at least on the rent amount itself. However, landlords can still select tenants based on referencing results, which is where Caner's challenges remain.

---

## 2.10 PRS Ombudsman

The Act creates a new **Private Rented Sector Landlord Ombudsman** — a free dispute resolution service for private tenants.

### What it does

- Provides free complaints resolution for tenants (and prospective/former tenants) without needing to go to court.
- Can compel landlords to: apologise, provide information, take remedial action, and/or pay compensation.
- Binding decisions — landlords must comply.

### When it starts

- The government has indicated the Housing Ombudsman Service will likely run the PRS scheme.
- Setup begins at least 12–18 months before mandatory membership.
- Mandatory landlord membership expected around **2028**.
- Annual fee per property (amount TBC).

### Enforcement

- Landlords who fail to join the ombudsman scheme face civil penalties of up to **GBP 7,000** (initial) and **GBP 40,000** (repeat).
- Criminal prosecution also possible.

**Source:** [GOV.UK — Implementation roadmap](https://www.gov.uk/government/publications/renters-rights-act-2025-implementation-roadmap/implementing-the-renters-rights-act-2025-our-roadmap-for-reforming-the-private-rented-sector); [The Independent Landlord — PRS Ombudsman](https://theindependentlandlord.com/prs-ombudsman/)

### What this means for you

The Ombudsman is not yet operational. When it launches, it will give Caner (as a tenant) a free route to resolve disputes about repairs, deposits, harassment, or service failures without going to court. This is particularly valuable for someone unfamiliar with the UK legal system.

---

## 2.11 PRS Database (Landlord Registration)

The Act creates a **Private Rented Sector Database** — a mandatory registry of all private rental properties and their landlords.

### What it does

- All private landlords with assured or regulated tenancies must register.
- Registration is mandatory, with an annual fee (amount TBC).
- The database functions as a "one-stop shop" for:
  - **Tenants**: check a landlord's compliance history, view property details, make informed decisions.
  - **Landlords**: demonstrate compliance, access guidance.
  - **Local authorities**: identify non-compliant landlords, target enforcement.

### Enforcement teeth

- Landlords who are not registered **cannot obtain possession orders** (except for Grounds 7A and 14 — serious anti-social behaviour).
- Civil penalty up to **GBP 7,000** for advertising or letting an unregistered property.
- Up to **GBP 40,000** for repeated or fraudulent breaches.

### When it starts

Phased rollout beginning **late 2026**. Full mandatory registration dates TBC.

**Source:** [GOV.UK — Implementation roadmap](https://www.gov.uk/government/publications/renters-rights-act-2025-implementation-roadmap/implementing-the-renters-rights-act-2025-our-roadmap-for-reforming-the-private-rented-sector); [Goodlord — PRS Database explained](https://blog.goodlord.co/understanding-the-private-rented-sector-database)

### What this means for you

Once operational, Caner will be able to check the PRS Database before signing a tenancy to verify that the landlord is registered and compliant. This is a significant transparency improvement. Non-compliant landlords lose the ability to evict tenants, which gives tenants leverage.

---

## 2.12 Decent Homes Standard — Extension to Private Sector

The **Decent Homes Standard** (DHS) currently applies only to social housing (council and housing association properties). The Act extends it to the private rented sector for the first time.

### What it requires

A decent home must:
- Meet the current statutory minimum standard for housing (no serious hazards).
- Be in a reasonable state of repair.
- Have reasonably modern facilities and services.
- Provide a reasonable degree of thermal comfort.

### When it applies to private rentals

The government confirmed on 28 January 2026 that the DHS will apply to private rented homes from **2035** — a common standard for both social and private sectors.

**Source:** [The Independent Landlord — DHS for private landlords](https://theindependentlandlord.com/dhs/); [Burges Salmon — Awaab's Law, EPC, and DHS](https://www.burges-salmon.com/articles/102mggs/the-renters-rights-act-2025-awaabs-law-epc-level-c-and-the-decent-homes-stan/)

### What this means for you

The DHS is not relevant to Caner's immediate situation (2035 is well beyond the Graduate visa expiry in August 2027). However, it signals the direction of travel: the government is steadily raising the bar for private rental quality.

---

## 2.13 Pet Provisions

### What the Act does

From 1 May 2026, tenants have a **statutory right to request permission to keep a pet**. The process:

1. Tenant makes a written request.
2. Landlord must respond within **28 days**.
3. Landlord **cannot unreasonably refuse**.
4. If the landlord refuses, they must give written reasons.
5. If the tenant disagrees with the refusal, they can challenge it via the Ombudsman or court.

### Reasonable grounds for refusal

- The property has a superior lease that prohibits pets (e.g. the freeholder bans pets in the building).
- Insurance cannot be obtained with pets.
- The property is genuinely unsuitable (e.g. a studio flat and the request is for a large dog).
- If the landlord needs consent from a superior landlord, they can delay while they seek it (must do so within 28 days).

### Deposit coverage

Pet damage is covered by the tenancy deposit (unchanged at 5 weeks' rent). There is no separate "pet deposit".

**Source:** [legislation.gov.uk — RRA Section 11](https://www.legislation.gov.uk/ukpga/2025/26/section/11); [Trowers — Renting with pets](https://www.trowers.com/insights/2025/august/renting-with-pets-under-the-renters-rights-bill); [Tozers — Pet-friendly by law](https://www.tozers.co.uk/insight/articles/pet-friendly-by-law-renters-rights-act-and-landlord-obligations/)

---

## 2.14 Enforcement Mechanisms

The Act creates a comprehensive enforcement framework administered by **local housing authorities** (councils).

### Powers

| Power | Detail |
|---|---|
| **Civil penalties** | Up to GBP 7,000 (first breach), up to GBP 40,000 (repeated/serious breach) |
| **Criminal prosecution** | For serious or persistent breaches — unlimited fines |
| **Rent Repayment Orders** | Tenants or local authorities can apply for repayment of up to **24 months' rent** (doubled from the previous 12-month maximum) |
| **Investigatory powers** | Model on trading standards — can require information from banks, accountants, client money schemes; enter business premises for evidence |
| **Illegal eviction penalties** | New civil penalties for illegal eviction (previously criminal only) |
| **Revenue retention** | Local authorities keep penalty income to fund further enforcement |

### Standard of proof

For civil penalties: **beyond reasonable doubt** (the criminal standard — a high bar). If there is any reasonable doubt that the landlord breached the obligation, the penalty cannot be imposed.

### Application period

Tenants can apply for a Rent Repayment Order within **24 months** of the offence (doubled from 12 months).

### Repeat offenders

Where a landlord has been previously penalised, tribunals are required to order **maximum penalty amounts** for repeat offences.

**Source:** [GOV.UK — Civil penalties under the RRA](https://www.gov.uk/government/publications/civil-penalties-under-the-renters-rights-act-2025-and-other-housing-legislation/civil-penalties-under-the-renters-rights-act-2025-and-other-housing-legislation); [The Independent Landlord — Landlord penalties](https://theindependentlandlord.com/landlord-penalties/); [Chambers and Partners — New protections for tenants](https://chambers.com/articles/the-renters-rights-act-2025-what-are-the-new-protections-for-tenants)

---

## 2.15 Existing Tenancies — Transitional Provisions

For tenancies that exist before 1 May 2026, special transitional rules apply.

### What happens to existing tenancies on 1 May 2026

| Feature | Rule |
|---|---|
| **Fixed-term ASTs** | Automatically convert to periodic tenancies, regardless of when the fixed term was due to expire |
| **Section 21 notices** | Cannot be served from 1 May 2026. Notices served before that date must have court proceedings started by 31 July 2026 |
| **Advance rent clauses** | **Remain valid** for the duration of the existing tenancy. If your current tenancy says you pay 6 months upfront, that clause continues. The cap only applies to new tenancies signed on or after 1 May 2026 |
| **Information Sheet** | Landlords must serve the government-produced Renters' Rights Act Information Sheet on existing tenants by **31 May 2026** (up to GBP 7,000 fine for failure) |
| **Rent increases** | From 1 May 2026, all rent increases must use Section 13 process, even for existing tenancies. Contractual review clauses become void |

### Definition of "existing tenancy"

An existing tenancy is any assured or assured shorthold tenancy **signed by all parties before 1 May 2026**. This includes tenancies signed before that date even if the tenant does not move in until after it.

**Source:** [The Independent Landlord — Transition rules](https://theindependentlandlord.com/rra-transition/); [NRLA — Tenancies agreed before 1 May 2026](https://www.nrla.org.uk/resources/renters-rights/existing-tenancies-renters-rights-act); [Gowling WLG — Final countdown](https://gowlingwlg.com/en/insights-resources/articles/2026/renters-rights-act-2025-the-final-countdown-1-may-2026)

### What this means for you

**Critical timing implication**: If Caner signs a tenancy agreement before 1 May 2026, the advance rent cap does not apply to that tenancy. The 3-months-upfront strategy would still work. If he signs on or after 1 May 2026, it does not. This creates a window of opportunity — but it is closing fast (18 days from the date of this research).

---

# Section 3: What Is Exempt From the Act

This section examines which types of accommodation fall outside the Renters' Rights Act, and why that matters for Caner's strategy.

---

## 3.1 Build-to-Rent (BTR) Properties

### Are BTR properties exempt?

**No. BTR properties receive no exemption from the Renters' Rights Act 2025.**

The Build-to-Rent sector lobbied hard for carve-outs — particularly for fixed-term tenancies and rent controls. They argued that BTR's institutional investment model depends on income predictability, and that periodic tenancies with 2-month tenant notice would undermine financial planning. The government rejected all of these arguments.

Key implications for BTR:
- All new BTR tenancies from 1 May 2026 are periodic (no fixed terms).
- The advance rent cap (1 month) applies in full.
- Section 21 is abolished — expanded Section 8 grounds only.
- The rental bidding ban applies.
- The discrimination provisions apply.

### Scotland comparison

Scotland *did* exempt BTR from rent controls under the Housing (Scotland) Act 2025. England did not follow suit.

### Section 106 complications

Some BTR developments have planning conditions (Section 106 obligations) requiring minimum tenancy terms. These now potentially conflict with the new regime, as tenants control the duration. This is a legal ambiguity the courts may need to resolve.

**Source:** [Gateley — Renters' Rights Bill and the BTR sector](https://gateleyplc.com/insight/article/renters-rights-bill-explained-the-build-to-rent-sector/); [Mills & Reeve — RRA impact on PBSA and BTR](https://www.mills-reeve.com/publications/renters-rights-act-2025-and-its-impact-on-the-pbsa-and-btr-sectors/); [K&L Gates — Key implications for living-sector lenders](https://www.klgates.com/The-Renters-Rights-Act-2025-Key-Implications-for-Living-Sector-Lenders-3-31-2026)

### What this means for you

Every BTR development in the Flatbrowser dataset (which is most of them) is subject to the full Act. The advance rent cap, the periodic tenancy requirement, the discrimination provisions, and the expanded Section 8 grounds all apply. There is no BTR-specific escape route.

---

## 3.2 Licence Agreements

### Are genuine licences exempt?

**Yes. Genuine licence-to-occupy agreements are outside the scope of the Renters' Rights Act.**

The Act amends the **assured tenancy regime** under the Housing Act 1988. If an occupation arrangement is not an assured tenancy — because it is a genuine licence — then the Act does not apply. The advance rent cap, the Section 21 abolition, the discrimination provisions, the rental bidding ban, and all other reforms only apply to assured tenancies.

### What makes a licence genuine?

Applying the Street v Mountford test (Section 1.3 above), a licence is genuine when the occupier does **not** have exclusive possession. Indicators of a genuine licence include:

- The operator provides regular services (cleaning, linen changes, reception, maintenance access).
- The operator retains the right to enter the premises at any time.
- The operator retains the right to move the occupier to a different unit.
- The occupier cannot exclude the operator from the space.
- The arrangement functions more like a hotel stay than a home.

### Sham licences will be caught

Courts apply **substance over form**. If an agreement is labelled a "licence" but the occupier actually has exclusive possession — if staff do not regularly enter, if the occupier has their own keys and can exclude everyone, if no meaningful services are provided — then a court would find that it is actually a tenancy, regardless of the label. The full Act would then apply.

Local authorities have had enforcement powers against sham licences since 27 December 2025.

**Source:** [Lester Aldridge — When is a licence not a licence?](https://www.lesteraldridge.com/blog/real-estate/when-is-a-licence-agreement-not-a-licence-agreement/); [GOV.UK — Guide to the Renters' Rights Act](https://www.gov.uk/government/publications/guide-to-the-renters-rights-act/guide-to-the-renters-rights-act)

### What this means for you

Licence-based accommodation is the primary exemption relevant to Caner's situation. If the accommodation is genuinely on a licence (meaning genuine services are provided and no exclusive possession is granted), then:

- No advance rent cap applies — you can pay 3, 6, or 12 months upfront.
- No income multiple or referencing requirements imposed by the Act (though the operator may impose their own).
- No Section 13 rent increase restrictions.
- No tenant notice period requirements.

The trade-off: you also do not get the protections of the Act. No deposit protection, no eviction protections, no Ombudsman access, and generally less security of tenure.

---

## 3.3 Purpose-Built Student Accommodation (PBSA)

### Is PBSA exempt?

**Yes, but only if it qualifies under the specific PBSA exemption.**

The Act gives the Secretary of State power to exempt certain student lettings from the Housing Act 1988. PBSA providers who qualify can grant **common-law tenancies** (rather than assured tenancies), which allows:

- Fixed-term agreements aligned with academic years.
- Advance rent payments (no cap).
- Traditional student-let structures.

### Qualifying requirements

- The accommodation must be purpose-built for students.
- The provider must be a member of a specified **housing management code of practice** — the government has confirmed this will be the UNIPOL and ANUK codes.
- Regulations are being published alongside the 1 May 2026 commencement.

### Does this apply to non-students?

No. The PBSA exemption only applies to lettings **to students**. A PBSA provider letting a unit to a non-student would not qualify for the exemption and would be subject to the full Act.

**Source:** [Osborne Clarke — What does the RRA mean for PBSA?](https://www.osborneclarke.com/insights/what-does-renters-rights-act-mean-purpose-built-student-accommodation-and-other-student); [Anthony Gold — PBSA and the RRA](https://anthonygold.co.uk/insight/purpose-built-student-accommodation-pbsa-and-the-renters-rights-act-2025/)

### What this means for you

Not directly relevant — Caner is not a student. The PBSA exemption exists to preserve academic-year lettings and is limited to students.

---

## 3.4 Serviced Apartments and Apart-Hotels

### Are serviced apartments exempt?

**Generally yes, if they operate as genuine hospitality businesses — not if they are residential lettings in disguise.**

Serviced apartments and apart-hotels typically operate outside the assured tenancy framework because they:

- Provide regular services (housekeeping, linen, reception).
- Charge VAT on the room rate (20% for stays under 28 days, 4% thereafter).
- Book through hospitality channels (booking.com, direct hotel booking systems).
- Do not grant exclusive possession — staff enter regularly.
- Structure the arrangement as a licence, not a tenancy.

The key question is always the same: **does the occupier have exclusive possession?** If the apart-hotel provides regular cleaning, linen changes, and retains the right of entry, the arrangement is likely a genuine licence and outside the Act.

**Source:** [Keystone Law — Impact on professional short-term rental operators](https://www.keystonelaw.com/keynotes/how-will-the-renters-rights-act-2025-impact-professional-short-term-rental-operators)

### Locke (apart-hotel operator)

Locke operates "design-led aparthotels" across London with locations including Leman Locke, Kingsland Locke, Locke at Broken Wharf, and Cove by Locke. Their operating model includes:

- 24-hour reception / "House Host" staff
- Weekly or mid-stay cleaning services
- Coworking spaces, gyms, cafes, bars
- Nightly rates with hotel-style booking
- VAT charged on room rates

Locke describes itself as offering "hotels" and "aparthotels", positioning as a hospitality business. The combination of on-site staff, regular cleaning, communal facilities, and hotel-style booking strongly suggests these are **genuine licences** outside the Act. However, for longer stays (several months), the boundary could be challenged if the arrangement starts to look more like exclusive residential occupation.

**Source:** [Locke Living — London hotels](https://www.lockeliving.com/en/london)

### Staycity (apart-hotel operator)

Staycity operates aparthotels with a serviced accommodation model. Their terms state:

- Booking creates a contract between customer and operator (hotel-style, not a tenancy agreement).
- VAT applied at local prevailing rates.
- Cleaning service included: mid-stay clean on day 4 for stays of 7+ nights, then every 7 days.
- Bed linen, towels, TV, internet included.

This operating model is consistent with a **genuine licence / hospitality arrangement** outside the Act.

**Source:** [Staycity — Terms and conditions](https://www.staycity.com/terms-and-conditions); [Staycity — FAQs](https://www.staycity.com/frequently-asked-questions)

### What this means for you

Apart-hotels like Locke and Staycity are likely exempt from the Renters' Rights Act because they operate as hospitality businesses on licence agreements with genuine services. However:

- They are expensive (hotel-rate pricing, not rental pricing).
- They are designed for short stays (days to weeks), not months.
- For longer stays, the cost adds up significantly compared to residential rental.
- The legal boundary for very long stays (3+ months) is not fully tested.

---

## 3.5 The Quarters by Bravo

The Quarters by Bravo is a "serviced living" provider that blends rental accommodation with hotel-style services. They offer studios in London for stays of 3–6 months.

### Licence or AST?

The Quarters protects deposits with the Deposit Protection Scheme (DPS) and explicitly states they protect deposits "regardless of whether a License or AST is signed." This confirms that **The Quarters uses both licence agreements and ASTs depending on circumstances**.

**Source:** [The Quarters by Bravo — Terms and Conditions](https://thequarters.co.uk/terms-conditions/)

### Implications

- If on a **licence**: exempt from the Act. Advance rent can be required. No advance rent cap.
- If on an **AST**: fully subject to the Act. Advance rent cap applies from 1 May 2026.
- **You should ask explicitly** which type of agreement is being offered before committing, and understand the implications of each.

---

## 3.6 Social Housing

Social housing tenancies (council housing and housing association properties) are **not immediately affected** by the Phase 1 reforms on 1 May 2026.

- Tenancy reforms for **Registered Providers** (housing associations) using assured tenancies will commence in **October 2027**.
- **Local Authority** tenancies on secure or flexible tenancies are not impacted by the RRA tenancy reforms at all.

**Source:** [GOV.UK — Implementing the RRA: Social Housing](https://www.gov.uk/government/publications/implementing-the-renters-rights-act-social-housing/implementing-the-renters-rights-act-social-housing)

### What this means for you

Social housing is not relevant to Caner's situation — he is not eligible for social housing on a Graduate visa.

---

## 3.7 Other Exempt Categories

| Category | Status | Why |
|---|---|---|
| **Annual rent > GBP 100,000** | Exempt from assured tenancy regime | Falls outside Housing Act 1988 |
| **Leases > 21 years** | Exempt | Effectively long leaseholds, not rental |
| **Genuine holiday lets** | Exempt | Temporary, not a principal home |
| **Corporate tenancies** | Exempt | Tenant is a company, not an individual |
| **Resident landlord** | May be exempt | If landlord lives in same building, may not be an AST |

**Source:** [Keystone Law — Impact on short-term rental operators](https://www.keystonelaw.com/keynotes/how-will-the-renters-rights-act-2025-impact-professional-short-term-rental-operators)

---

# Section 4: Impact on Caner's Specific Situation

This section analyses exactly what the Act means for Caner and what strategies are available.

---

## 4.1 Why the Upfront Rent Strategy Stops Working

### The current strategy

Caner's plan: offer 3 months' rent upfront (approximately GBP 6,000–9,000 depending on the property) to bypass the credit check and income verification that he would otherwise fail. This has worked for international tenants, students, and self-employed people in the UK for decades.

### Why it stops working on 1 May 2026

For any new AST signed on or after 1 May 2026:

1. **Section 8 of the RRA** (inserting s.4B into the Housing Act 1988) makes any tenancy clause requiring rent to be paid in advance **void**. The clause simply has no legal effect.

2. **Section 9 of the RRA** (amending the Tenant Fees Act 2019) makes any rent paid before the tenancy agreement is signed a **prohibited payment**. The landlord cannot accept it.

3. **The maximum initial rent** a landlord can require at signing is **1 calendar month** (or 28 days for shorter rent periods).

4. **The anti-avoidance provisions** prevent front-loading (charging higher rent in early months) and using third parties to collect prohibited rent.

5. **Even voluntary advance payment** after signing cannot be used as a selection criterion. The landlord cannot prefer Caner's application over another because Caner offered to pay upfront.

### The fundamental shift

Under the current system, Caner's money compensates for his lack of documentation. Under the new system, money alone is not enough — the referencing process must be passed on its own terms, and there is no way to buy your way around it for AST tenancies.

**Source:** [Goodlord — Rent in advance ban 2026](https://blog.goodlord.co/rent-in-advance); [BCLP — Practical implications](https://www.bclplaw.com/en-US/events-insights-news/navigating-the-renters-rights-act-2025-key-changes-and-practical-implications.html)

---

## 4.2 What Alternatives Exist Post-1 May 2026

### Strategy matrix for Caner

```
┌──────────────────────────────────────────────────────────────────────────┐
│                    POST-1 MAY 2026 STRATEGIES                           │
│                                                                          │
│  ROUTE A: Pass the referencing process                                   │
│    A1. Get a job (formal UK payslips)          ← best long-term route    │
│    A2. Professional guarantor service          ← available now           │
│    A3. Open Banking referencing                ← depends on bank data    │
│    A4. UK-based personal guarantor             ← if you know someone     │
│                                                                          │
│  ROUTE B: Use accommodation outside the Act                              │
│    B1. Licence-based accommodation             ← upfront still works     │
│    B2. Apart-hotel / serviced apartment        ← expensive but exempt    │
│    B3. Sign a tenancy BEFORE 1 May 2026        ← 18-day window           │
│                                                                          │
│  ROUTE C: Hybrid approach                                                │
│    C1. Short-term licence accommodation while job-hunting,               │
│        then switch to AST once employed        ← recommended             │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 4.3 Professional Guarantor Services in Detail

Professional guarantor services are companies that act as your guarantor for a fee. They guarantee your rent to the landlord — if you default, the company pays, then pursues you for repayment.

### How they work

1. You apply to the guarantor service (online application).
2. You provide evidence of your situation (proof of study, employment, or other status).
3. The service assesses your application (usually very high acceptance rate — Housing Hand claims 98%).
4. If approved, the service issues a guarantee to the landlord.
5. The landlord's referencing treats the professional guarantor the same as a personal guarantor.
6. If you miss rent, the service pays the landlord and contacts you to arrange an interest-free repayment plan.

### Major providers

| Provider | Typical cost | Income requirement | Acceptance rate | Notes |
|---|---|---|---|---|
| **Housing Hand** | ~80-90% of one month's rent/year | Working professionals: 1.5x their rent contribution; Students: proof of study | 98% | Supported 95,000+ tenants since 2013 |
| **UK Guarantor** | From GBP 295/year | Varies | High | Student-focused but accepts professionals |
| **RentGuarantor** | Varies | Varies | High | NRLA partner |
| **Goodlord Guarantor** | Single fee covers up to 3 years | Must pass Goodlord referencing | Instant on referencing completion | Integrated into Goodlord platform; letting agent must use Goodlord |

**Source:** [Housing Hand — Guarantor service](https://housinghand.com/guarantor-service/); [RentGuarantor](https://www.rentguarantor.com/); [Property Investment Project — Best UK rent guarantor companies](https://www.propertyinvestmentproject.co.uk/blog/rent-guarantor-companies/); [Goodlord — Rent in advance ban alternatives](https://blog.goodlord.co/rent-in-advance)

### Will they work for Caner?

This is the critical question. The situation-specific factors:

| Factor | Assessment |
|---|---|
| **No UK payslips** | Most professional guarantors require some income evidence. Housing Hand requires working professionals to earn 1.5x their rent contribution. With zero formal income, this may not be met. |
| **Student status** | Caner has a BEng from York (completed 2025). He is not currently a student, so student-specific routes do not apply. |
| **Savings** | Caner has funds (evidenced by ability to pay GBP 3k/month at Ten Degrees). Some services may consider bank savings as evidence of ability to pay, but most require ongoing income. |
| **Graduate visa** | Visa status is not directly relevant to professional guarantor acceptance — they care about income, not immigration status. |
| **Practical recommendation** | Contact Housing Hand and RentGuarantor directly, explain the situation (Graduate visa, savings but no payslips, job-hunting), and ask whether they would issue a guarantee. The answer may vary by provider. |

---

## 4.4 Open Banking Referencing for Someone Without UK Payslips

Open Banking referencing (used by Homeppl, Canopy, Goodlord PRO, and others) analyses your bank transaction data rather than relying solely on payslips. This creates a potential pathway for Caner.

### What Open Banking can show

- **Regular income from any source** — freelance payments, contract work, family transfers, savings interest.
- **Spending patterns** — evidence of financial discipline.
- **Rent-like payments** — regular outgoing payments demonstrating a history of covering housing costs (e.g. the ~GBP 3k/month to Ten Degrees).
- **Account balance** — evidence of reserves.

### What Open Banking struggles with

- **Static savings with no income flow** — a large balance that just sits there does not demonstrate ongoing affordability.
- **Foreign income** — if Caner's funds come from a Turkish bank account and are periodically transferred to a UK account, the pattern may not look like "income" to the algorithm.
- **No employment verification** — Open Banking can show money coming in, but it cannot verify employment unless the payments are clearly coded as salary.

### Practical recommendation

If Caner opens a UK bank account (or already has one) and establishes a pattern of regular income into it — even from freelance Rust work, consulting, or contract payments — the Open Banking referencing will have something to work with. The stronger the pattern of regular incoming payments, the better.

Homeppl specifically says they can use "three months of recent bank statements" or "an employment contract" as alternatives to traditional payslips. If Caner can demonstrate consistent financial activity over 3 months, this may be sufficient.

**Source:** [Homeppl FAQs](https://www.homeppl.com/faqs/); [Homeppl — Open Banking referencing](https://www.homeppl.com/lp/what-does-open-banking-mean-in-the-rental-market/)

---

## 4.5 Licence-Based Accommodation: Why It Becomes Strategically Important

After 1 May 2026, the advance rent cap creates a hard barrier for AST tenancies. But the cap **does not apply to licence agreements**. This makes licence-based accommodation uniquely valuable for Caner's situation.

### Why licences are exempt

The Renters' Rights Act only amends the **assured tenancy regime**. Licences are not assured tenancies. They are a different legal category entirely. The Act has no power over them.

### What licence-based accommodation looks like

| Type | Example operators | Typical stay | Advance rent allowed? | Services included |
|---|---|---|---|---|
| **Serviced apartments** | The Quarters by Bravo, SACO, SilverDoor | 1–6 months | Yes (operator sets policy) | Cleaning, linen, utilities, wifi |
| **Apart-hotels** | Locke, Staycity, Supercity | Days to months | Yes | Daily/weekly cleaning, reception, linen |
| **Co-living** | Vonder, The Collective | 1–12 months | Depends on agreement type | Cleaning, social events, utilities |
| **Corporate housing** | Various relocation agencies | 1–12 months | Yes | Fully furnished, utilities, sometimes cleaning |

### The trade-off

Licence-based accommodation is:
- **More expensive** per month than equivalent AST rental.
- **Less secure** — shorter notice periods, no deposit protection requirement, no eviction protections.
- **More flexible** — shorter commitments, easier to move.
- **Exempt from the advance rent cap** — the upfront rent strategy still works.

For Caner's specific situation, the calculation is: *pay more per month for licence-based accommodation while job-hunting, then transition to a cheaper AST once you have payslips and can pass referencing*.

---

## 4.6 The Quarters by Bravo — Licence or AST?

As noted in Section 3.5, The Quarters uses **both licence agreements and ASTs** depending on circumstances. Their deposit protection statement confirms they handle both types.

### What to ask

Before booking with The Quarters (or any similar operator), Caner should explicitly ask:

1. "Will my agreement be a licence to occupy or an assured shorthold tenancy?"
2. If an AST: "What are your referencing requirements? Do you accept professional guarantors?"
3. If a licence: "Can I pay 3 months upfront? What services are included?"
4. In either case: "What notice period is required from either side?"

The answer determines whether the advance rent strategy is available and what protections apply.

---

## 4.7 Apart-Hotels (Locke, Staycity): Are They Exempt?

**Most likely yes**, based on their operating models:

| Feature | Locke | Staycity |
|---|---|---|
| **Self-description** | "Design-led hotels" / "aparthotels" | "Aparthotels" |
| **Cleaning** | On-site staff, regular housekeeping | Mid-stay clean day 4, then every 7 days |
| **Reception** | "House Host" on-site | Front desk |
| **VAT** | Charged on room rate | Charged at local rates |
| **Booking model** | Hotel-style (nightly/weekly rates) | Hotel-style |
| **Likely legal status** | Licence (hospitality) | Licence (hospitality) |
| **Exempt from RRA?** | Almost certainly yes | Almost certainly yes |

The caveat: for very long stays (3+ months), if the arrangement starts to feel like exclusive residential occupation rather than a hospitality stay, the legal boundary could theoretically be challenged. In practice, for the stays Caner is likely to need (1–6 months while job-hunting), the hospitality classification should hold.

---

## 4.8 What Should Caner Do Before vs After 1 May 2026?

### Before 1 May 2026 (18 days from today — extremely tight)

```
┌──────────────────────────────────────────────────────────────────────┐
│  BEFORE 1 MAY 2026                                                    │
│                                                                        │
│  If you sign an AST before 1 May 2026:                                │
│    ✓ The advance rent cap does NOT apply to that tenancy              │
│    ✓ You can offer 3 months upfront                                   │
│    ✓ Existing advance-rent clauses remain valid for the tenancy's     │
│      duration                                                          │
│    ✓ The tenancy converts to periodic on 1 May, but advance-rent     │
│      terms survive                                                     │
│                                                                        │
│  BUT:                                                                  │
│    ✗ 18 days is extremely tight to find, reference, and sign          │
│    ✗ Rushing into a tenancy to beat a deadline is risky               │
│    ✗ The property might not be right                                  │
│    ✗ If the area/building is wrong, you can leave with 2 months'     │
│      notice after 1 May (periodic conversion)                         │
└──────────────────────────────────────────────────────────────────────┘
```

### After 1 May 2026

```
┌──────────────────────────────────────────────────────────────────────┐
│  AFTER 1 MAY 2026                                                     │
│                                                                        │
│  For any new AST:                                                      │
│    ✗ Maximum 1 month advance rent                                     │
│    ✗ Must pass referencing on own merits                              │
│    ✗ No upfront bypass available                                      │
│                                                                        │
│  Recommended strategy:                                                 │
│    1. Use licence-based accommodation (serviced apartment,            │
│       apart-hotel, or The Quarters) while job-hunting                 │
│       → Advance rent still works for licences                         │
│       → Pay 3 months upfront, live there while interviewing           │
│                                                                        │
│    2. Get a Rust/systems engineering job with formal payslips          │
│       → Even 1–2 months of payslips transforms your referencing       │
│                                                                        │
│    3. Switch to a proper AST in your chosen area once you             │
│       can pass referencing                                             │
│       → Use Open Banking to demonstrate the payslip income            │
│       → Or use a professional guarantor if income is borderline       │
│                                                                        │
│    4. Alternatively, if a specific BTR operator accepts professional  │
│       guarantors and you find one that works with zero formal income, │
│       go direct to AST with professional guarantor                    │
└──────────────────────────────────────────────────────────────────────┘
```

### The recommended phased approach

| Phase | Duration | Accommodation | Cost estimate | Strategy |
|---|---|---|---|---|
| **Phase 1: Job-hunting** | 1–3 months | Licence-based (The Quarters, serviced apartment, or apart-hotel) | GBP 2,000–3,500/month | Pay 3 months upfront; no referencing needed; focus entirely on getting employed |
| **Phase 2: Employed** | Ongoing | AST in chosen Flatbrowser area | GBP 1,500–2,500/month | Pass referencing with payslips + Open Banking; potentially use professional guarantor as backup |

This approach:
- Avoids the advance rent cap entirely during Phase 1 (licence, not AST).
- Gives Caner time to get employed without housing pressure.
- Transitions to cheaper, more secure AST accommodation once the referencing barrier is solvable.
- Does not require rushing into a tenancy before 1 May 2026.

---

# Section 5: Impact on the Flatbrowser Data Model

This section analyses which existing fields become more or less important, what new fields should be added, and how the `grad_visa_realism` signal should be recalculated in light of the Renters' Rights Act.

---

## 5.1 Existing Fields — Changed Importance

### Fields that become MORE important

| Field | Type | Current location | Why more important |
|---|---|---|---|
| `credit_check` | `"strict" \| "standard" \| "lenient" \| "skipped-with-upfront"` | `ProjectQualification` | With upfront bypass gone, the strictness of credit checking becomes the primary gatekeeping mechanism. `"skipped-with-upfront"` becomes a relic value for pre-1 May 2026 tenancies only. |
| `guarantor_acceptable` | `boolean` | `ProjectQualification` | Without upfront, guarantor acceptance is the key alternative pathway. Projects that accept guarantors are now dramatically more accessible. |
| `income_multiple` | `number` | `ProjectQualification` | The income multiple is now the hard gate that cannot be bought around. Lower multiples (24x, 27x) become genuine differentiators. |
| `international_friendly` | `"yes" \| "case-by-case" \| "no" \| "unknown"` | `ProjectQualification` | Operators with experience handling international applicants (thin credit files, overseas income, visa documentation) become more valuable when the upfront bypass is gone. |
| `visa_friendly` | `"yes" \| "case-by-case" \| "no" \| "unknown"` | `ProjectQualification` | Same reasoning — visa-friendly operators are likelier to have flexible referencing approaches. |

### Fields that become LESS important (but still relevant)

| Field | Why less important |
|---|---|
| `upfront_max_months` | For AST tenancies, this is capped at 1 from 1 May 2026 regardless of operator policy. Still relevant for licence-based accommodation. |
| `upfront_negotiable` | Same — negotiation is irrelevant when the law caps the maximum. |
| `min_tenancy_months` | Fixed terms abolished — all tenancies periodic. Operator may still have a preferred minimum, but cannot enforce it contractually. |

---

## 5.2 New Fields to Add

### `agreement_type`

```typescript
/** Whether the operator uses a tenancy (AST) or a licence to occupy. */
agreement_type: "ast" | "licence" | "either" | "unknown";
```

**Why**: This is now the single most important binary distinction in the dataset. It determines whether the advance rent cap applies, whether deposit protection is required, and whether the full Act governs the relationship. It should be surfaced prominently — potentially on the project card alongside `grad_visa_realism`.

### `professional_guarantor_accepted`

```typescript
/** Whether the operator accepts professional guarantor services. */
professional_guarantor_accepted: "yes" | "no" | "case-by-case" | "unknown";
```

**Why**: With upfront gone, professional guarantors are the primary alternative pathway. An operator that accepts Housing Hand / RentGuarantor is dramatically more accessible than one that insists on a personal UK-resident homeowner guarantor.

### `referencing_provider`

```typescript
/** The referencing provider used by the operator, if known. */
referencing_provider?: string;
```

**Why**: Operators using Homeppl or Canopy (Open Banking-first) are more accessible to applicants without traditional payslips than operators using legacy referencing that requires employer phone verification.

### `open_banking_accepted`

```typescript
/** Whether the operator accepts Open Banking verification as an alternative to payslips. */
open_banking_accepted: "yes" | "no" | "unknown";
```

**Why**: Direct signal of whether Caner's bank transaction data can substitute for payslips in the referencing process.

---

## 5.3 How `grad_visa_realism` Should Be Recalculated

The `grad_visa_realism` field is the most important derived signal in the dataset. It needs to be recalculated to reflect the post-1 May 2026 reality.

### Current derivation logic (implicit)

```
IF upfront 3+ months accepted AND visa_friendly != "no"
  → "achievable-with-upfront"

IF operator has lenient credit check AND low income multiple AND guarantor accepted
  → "achievable"

IF operator requires strict credit check AND high income multiple AND no guarantor
  → "unlikely" or "blocked"
```

### Proposed post-1 May 2026 derivation

```
┌─────────────────────────────────────────────────────────────────────────┐
│  GRAD_VISA_REALISM — POST-1 MAY 2026 DERIVATION                        │
│                                                                          │
│  IF agreement_type == "licence"                                          │
│    AND (upfront_max_months >= 3 OR upfront_negotiable)                   │
│    AND visa_friendly != "no"                                             │
│    → "achievable"                                                        │
│    (Upfront bypass still works for licences)                             │
│                                                                          │
│  IF agreement_type == "ast" OR agreement_type == "either"                │
│    AND professional_guarantor_accepted == "yes"                          │
│    AND visa_friendly != "no"                                             │
│    → "achievable"                                                        │
│    (Professional guarantor provides the qualification route)             │
│                                                                          │
│  IF agreement_type == "ast"                                              │
│    AND open_banking_accepted == "yes"                                    │
│    AND visa_friendly != "no"                                             │
│    → "achievable" (if Caner has regular bank activity)                   │
│       OR "achievable-with-conditions" (if bank activity is uncertain)    │
│                                                                          │
│  IF agreement_type == "ast"                                              │
│    AND guarantor_acceptable BUT professional_guarantor unknown           │
│    AND visa_friendly != "no"                                             │
│    → "achievable-with-upfront" (repurpose to mean "achievable with      │
│       additional effort — requires finding a qualifying guarantor")       │
│                                                                          │
│  IF agreement_type == "ast"                                              │
│    AND credit_check == "strict"                                          │
│    AND guarantor NOT accepted                                            │
│    AND no alternative pathway                                            │
│    → "unlikely"                                                          │
│                                                                          │
│  IF visa_friendly == "no" OR visa_expiry_handling == "rejected"          │
│    → "blocked"                                                           │
│                                                                          │
│  OTHERWISE → "unknown"                                                   │
└─────────────────────────────────────────────────────────────────────────┘
```

### Semantic shift for `achievable-with-upfront`

The current value `"achievable-with-upfront"` was designed for a world where "pay 3 months upfront" was the primary workaround. In the post-1 May 2026 world, this value should be re-understood as **"achievable with additional effort"** — meaning there is a plausible pathway, but it requires Caner to do something beyond the standard process (find a professional guarantor, establish Open Banking history, etc.). The label could potentially be renamed to `"achievable-with-effort"` to avoid confusion, though this is a data model decision that warrants discussion.

### Key insight

The shift from "can you pay enough upfront?" to "can you pass referencing?" changes the meaning of realism fundamentally. Under the old model, money was the universal solvent. Under the new model, **employment status** is the universal solvent. Once Caner has a job with payslips, nearly every project becomes achievable. Without it, only licence-based accommodation and operators that accept professional guarantors (and will guarantee someone with zero formal income) remain accessible.

---

## Source Index

### Primary legislation
- [Renters' Rights Act 2025 — Full text](https://www.legislation.gov.uk/ukpga/2025/26/contents)
- [RRA Section 8 (Rent paid in advance)](https://www.legislation.gov.uk/ukpga/2025/26/section/8)
- [RRA Section 9 (Pre-tenancy payments)](https://www.legislation.gov.uk/ukpga/2025/26/section/9)
- [RRA Section 11 (Pets)](https://www.legislation.gov.uk/ukpga/2025/26/section/11)
- [Tenant Fees Act 2019 Schedule 1](https://www.legislation.gov.uk/ukpga/2019/4/schedule/1)

### GOV.UK guidance
- [Guide to the Renters' Rights Act](https://www.gov.uk/government/publications/guide-to-the-renters-rights-act/guide-to-the-renters-rights-act)
- [Rental discrimination under the RRA](https://www.gov.uk/government/publications/rental-discrimination-under-the-renters-rights-act-2025/rental-discrimination-under-the-renters-rights-act-2025)
- [Tenant Fees Act statutory guidance (amended by RRA)](https://www.gov.uk/government/publications/tenant-fees-act-amended-by-the-renters-rights-act-2025/tenant-fees-act-2019-statutory-guidance-for-enforcement-authorities)
- [Civil penalties under the RRA](https://www.gov.uk/government/publications/civil-penalties-under-the-renters-rights-act-2025-and-other-housing-legislation/civil-penalties-under-the-renters-rights-act-2025-and-other-housing-legislation)
- [Implementation roadmap](https://www.gov.uk/government/publications/renters-rights-act-2025-implementation-roadmap/implementing-the-renters-rights-act-2025-our-roadmap-for-reforming-the-private-rented-sector)
- [Social housing implementation](https://www.gov.uk/government/publications/implementing-the-renters-rights-act-social-housing/implementing-the-renters-rights-act-social-housing)
- [No-fault evictions to end](https://www.gov.uk/government/news/no-fault-evictions-to-end-by-may-next-year)
- [Tenancy deposit protection](https://www.gov.uk/tenancy-deposit-protection)
- [Tenancy types guide](https://www.gov.uk/tenancy-agreements-a-guide-for-landlords/tenancy-types)

### Parliamentary sources
- [Bill stages](https://bills.parliament.uk/bills/3764/stages)
- [House of Commons Library — End of no-fault evictions](https://commonslibrary.parliament.uk/research-briefings/cbp-8658/)
- [House of Commons Library — Bill progress](https://commonslibrary.parliament.uk/research-briefings/cbp-10166/)

### Law firm analysis
- [BCLP — Navigating the RRA (practical implications)](https://www.bclplaw.com/en-US/events-insights-news/navigating-the-renters-rights-act-2025-key-changes-and-practical-implications.html)
- [BCLP — RRA overview](https://www.bclplaw.com/en-US/events-insights-news/renters-rights-act-2025.html)
- [Gowling WLG — Final countdown to 1 May 2026](https://gowlingwlg.com/en/insights-resources/articles/2026/renters-rights-act-2025-the-final-countdown-1-may-2026)
- [Keystone Law — Abolition of no-fault evictions](https://keystonelaw.com/keynotes/the-renters-rights-act-the-abolition-of-no-fault-evictions-and-the-new-possession-procedure/)
- [Keystone Law — Short-term rental operators](https://www.keystonelaw.com/keynotes/how-will-the-renters-rights-act-2025-impact-professional-short-term-rental-operators)
- [Gateley — BTR sector](https://gateleyplc.com/insight/article/renters-rights-bill-explained-the-build-to-rent-sector/)
- [Mills & Reeve — PBSA and BTR](https://www.mills-reeve.com/publications/renters-rights-act-2025-and-its-impact-on-the-pbsa-and-btr-sectors/)
- [K&L Gates — Living-sector lenders](https://www.klgates.com/The-Renters-Rights-Act-2025-Key-Implications-for-Living-Sector-Lenders-3-31-2026)
- [Lester Aldridge — Licence agreements](https://www.lesteraldridge.com/blog/real-estate/when-is-a-licence-agreement-not-a-licence-agreement/)
- [Taylor Wessing — Lease or licence](https://www.taylorwessing.com/en/insights-and-events/insights/2018/06/lease-or-licence-the-issue-that-just-wont-go-away)
- [Osborne Clarke — PBSA and the RRA](https://www.osborneclarke.com/insights/what-does-renters-rights-act-mean-purpose-built-student-accommodation-and-other-student)
- [Chambers and Partners — New tenant protections](https://chambers.com/articles/the-renters-rights-act-2025-what-are-the-new-protections-for-tenants)
- [Cornerstone Barristers — Rental discrimination](https://cornerstonebarristers.com/rental-discrimination-under-the-renters-rights-act-2025/)
- [Trowers — Renting with pets](https://www.trowers.com/insights/2025/august/renting-with-pets-under-the-renters-rights-bill)
- [Trowers — Rent increases](https://www.trowers.com/insights/2025/july/rent-increases-under-the-renters-rights-bill)

### Tenant advice
- [Shelter England — ASTs](https://england.shelter.org.uk/housing_advice/private_renting/assured_shorthold_tenancies_with_private_landlords)
- [Shelter England — Section 21 eviction](https://england.shelter.org.uk/housing_advice/eviction/section_21_eviction)
- [Shelter England — Guarantors](https://england.shelter.org.uk/housing_advice/private_renting/guarantors_for_private_renters)
- [Citizens Advice — Section 21 notice](https://www.citizensadvice.org.uk/housing/eviction/getting-evicted/renting-privately/if-you-get-a-section-21-notice/)
- [Citizens Advice — Information landlords ask for](https://www.citizensadvice.org.uk/housing/starting-to-rent-from-a-private-landlord/information-landlords-ask-for-when-you-start-renting/)

### Sector commentary
- [The Independent Landlord — Rent in advance rules](https://theindependentlandlord.com/rent-in-advance/)
- [The Independent Landlord — 12 key provisions](https://theindependentlandlord.com/rrb-overview/)
- [The Independent Landlord — Transition rules](https://theindependentlandlord.com/rra-transition/)
- [The Independent Landlord — PRS Ombudsman](https://theindependentlandlord.com/prs-ombudsman/)
- [The Independent Landlord — DHS](https://theindependentlandlord.com/dhs/)
- [The Independent Landlord — Landlord penalties](https://theindependentlandlord.com/landlord-penalties/)
- [The Independent Landlord — Timeline](https://theindependentlandlord.com/renters-rights-timetable/)
- [Goodlord — Rent in advance ban 2026](https://blog.goodlord.co/rent-in-advance)
- [Goodlord — Section 13 rent reviews](https://blog.goodlord.co/your-guide-to-section-13-and-rent-increases-in-the-private-rented-sector)
- [Goodlord — PRS Database](https://blog.goodlord.co/understanding-the-private-rented-sector-database)
- [NRLA — Commencement confirmed](https://www.nrla.org.uk/news/renters-rights-act-commencement-ben-beadle)
- [NRLA — Existing tenancies](https://www.nrla.org.uk/resources/renters-rights/existing-tenancies-renters-rights-act)
- [Wikipedia — Renters' Rights Act 2025](https://en.wikipedia.org/wiki/Renters'_Rights_Act_2025)

### Referencing and guarantor services
- [Homeppl — Open Banking referencing](https://www.homeppl.com/lp/what-does-open-banking-mean-in-the-rental-market/)
- [Homeppl — FAQs](https://www.homeppl.com/faqs/)
- [Homeppl — Who can be a guarantor?](https://www.homeppl.com/blog/who-can-be-a-rent-guarantor/)
- [OpenBanking.org.uk — Property guide](https://www.openbanking.org.uk/insights/guide-to-buying-and-renting-property-with-open-banking/)
- [Housing Hand — Guarantor service](https://housinghand.com/guarantor-service/)
- [RentGuarantor](https://www.rentguarantor.com/)
- [Goodlord — Tenant referencing](https://www.goodlord.co/product/tenant-referencing)
- [OpenRent — Tenant referencing](https://www.openrent.co.uk/tenant-referencing)

### Case law
- [Street v Mountford [1985] AC 809 — LawTeacher](https://www.lawteacher.net/cases/street-v-mountford.php)
- [Street v Mountford — Oxford Law Blog (40th anniversary)](https://blogs.law.ox.ac.uk/oxford-university-undergraduate-law-journal-blog/blog-post/2025/04/40-years-street-v-mountford)

### Operator-specific
- [The Quarters by Bravo — Terms and Conditions](https://thequarters.co.uk/terms-conditions/)
- [Locke Living — London](https://www.lockeliving.com/en/london)
- [Staycity — Terms and Conditions](https://www.staycity.com/terms-and-conditions)
- [Staycity — FAQs](https://www.staycity.com/frequently-asked-questions)
