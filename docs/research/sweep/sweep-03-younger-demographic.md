# Sweep agent 03 — Younger Demographic Skew (T2.7)
Research date: 2026-04-11
Total areas covered: 95 / 95 (per-area confidence tagged)
Agent focus: Census 2021 ward-level ground-truthing of age cohort distribution. Caner is 24 and wants areas where the dominant cohort is 20s and early 30s rather than settled mid-career.

---

## Methodology

**Primary sources**: ONS Census 2021 ward-level age distributions, surfaced via CrystalRoof (`https://crystalroof.co.uk`), which publishes the ONS tables at ward granularity. Secondary: citypopulation.de ward pages, Tower Hamlets Council ward profile PDFs, Wikipedia ward entries, and ONS `explore-local-statistics` for Census-change visualisations. All figures trace to ONS Census 2021 unless explicitly marked otherwise.

**Band mapping — the load-bearing methodology choice**: the ONS Census 2021 publishes age in 5-year bands, and the downstream tooling (CrystalRoof / citypopulation.de) aggregates these into decadal bands starting at 20. This gives clean 20-39 and 40-59 numbers but *not* the brief's literal "18-29 / 30-39" split. The translation I use throughout:

| Brief's request | Available data | Translation |
|---|---|---|
| 18-29 cohort % | 20-29 buried inside 20-39 decadal band | Reported as "20-39 %"; 20-29 split noted where citypopulation.de gives it separately |
| 30-39 cohort % | Inside 20-39 decadal band | Reported as "20-39 %" |
| Dominant cohort | ONS "main age band" phrasing | Reported verbatim |
| London baseline | 33.2% in 20-39 per ONS | Used as benchmark throughout |

**Threshold calibration**: the brief defines "very young" = ≥30% in 18-29 and "settled" = <15% in 18-29. Translating to the 20-39 decadal band (which also sweeps in 30-39 young-professionals):

| T2.7 label | Brief threshold (18-29) | My 20-39 translation |
|---|---|---|
| top-skew | ≥30% | **≥45% in 20-39** |
| solid young-skew | — | 38-44% |
| moderate / London-average | — | 32-37% |
| settled / mid-career | <15% | **<30% in 20-39** |

The 45%-cutoff for "top-skew" is deliberately conservative — it flags only wards where the young-professional share is clearly dominant, not just above baseline.

**Ward-mapping rules**: (1) if an area sits inside one ward, use it; (2) if it spans multiple, use the ward containing the residential centre of gravity and cross-reference material neighbours; (3) if it is a named development inside a larger ward (East Village inside Stratford, Gasholders inside King's Cross), use the host ward but flag that BTR tenure structurally pulls the development-level number younger than the ward average; (4) where 2022 ward boundary revisions renamed wards, I use the post-revision name and note when Census 2021 was collected under the old boundary.

**Step-change flagging**: Wembley Park grew ~7× between 2011-2021 and Nine Elms ~14×. For areas with visibly continuing BTR / masterplan delivery post-Census day (March 2021), the 2021 figure is a *floor* not a current state, because incremental deliveries have been filling with young-professional renters selected for by operator referencing structure. I flag each step-change case explicitly.

**Confidence**: "high" when I have a direct CrystalRoof ONS percentage for the host ward; "medium" when I have it for a proxy ward; "low" when relying on borough-level averages.

---

## Reference baseline

| Benchmark | 20-39 % | Source |
|---|---|---|
| London | **33.2%** | ONS Census 2021, via CrystalRoof ward pages |
| Tower Hamlets borough | ~46% | TH Council + ONS; youngest London borough |
| Hackney borough | ~42% | ONS borough table |
| Westminster borough | ~39% | ONS borough table |
| K&C borough | ~34% | ONS borough table |

---

## Areas — existing entries (14)

### wembley-park — Wembley Park
**Ward**: Tokyngton (Brent), host to the Quintain masterplan, the stadium, and Boxpark. Wembley Central is the ward immediately south.
**Census 2021**: Tokyngton 20-39 **31%**; under 20: 22%; 40-59: 26%; 60-79: 16%; 80+: 5%. Wembley Central 20-39: 34%.
**Post-2021 trajectory — STEP-CHANGE APPLIES**: the ward figure is misleading. Multiple Quintain BTR phases (The Canvas, Landsby, Luna, subsequent deliveries) landed *after* Census day, and Quintain Living's referencing (30× income multiple or upfront) self-selects 25-35 professional renters. The ward number averages longstanding family stock with a still-ramping BTR population — the Quintain-managed population is almost certainly demographically 55%+ in 20-39.
**T2.7 call**: **step-change caveat**. Ward-level reads "London average"; development-level reads "very young". Synthesis must weight the BTR signal against the stale Census number.
**Sources**: `https://crystalroof.co.uk/report/ward/tokyngton-brent/demographics`; `https://crystalroof.co.uk/report/ward/wembley-central-brent/demographics`; `https://en.wikipedia.org/wiki/Wembley_Park`
**Confidence**: high on ward; medium on BTR-adjusted reading.

### nine-elms — Nine Elms
**Ward**: Nine Elms (Wandsworth, post-2022 boundary; Census 2021 collected under old Queenstown ward). Covers Embassy Gardens, Bloom, Riverlight, One Nine Elms, Battersea Power Station.
**Census 2021**: 20-39 **60%** — nearly double London's 33%. Under 20: 15%. 40-59: 21%. 60+: 4.6%.
**Post-2021 trajectory — STEP-CHANGE**: BPS residential phases landed progressively 2021-2024; Northern Line extension opened September 2021; Embassy Gardens continued delivery through 2023. 2026 lived reality is plausibly 65-70%.
**T2.7 call**: **STRONG PASS — top-skew**. The single strongest young-skew in the dataset. Demographically a young-professional monoculture.
**Sources**: `https://crystalroof.co.uk/report/ward/nine-elms-wandsworth/demographics`; `https://en.wikipedia.org/wiki/Nine_Elms`
**Confidence**: high.

### kings-cross — King's Cross
**Ward**: King's Cross (Camden, post-2022). The Argent masterplan (Coal Drops Yard, Gasholders, Handyside) sits cleanly inside this ward.
**Census 2021**: 20-39 **46%**. Under 20: 22%. 40-59: 20%. 60-79: 10%. 80+: 1.9%.
**Post-2021 trajectory**: masterplan ~80% complete; major deliveries pre-date Census. No step-change adjustment needed.
**T2.7 call**: **PASS — strong young-skew**. Genuinely mixed (students, CSM, British Library, families in older stock) rather than a monoculture — but 46% is well above baseline.
**Sources**: `https://crystalroof.co.uk/report/ward/kings-cross-camden/demographics`; `https://en.wikipedia.org/wiki/King%27s_Cross_Central`
**Confidence**: high.

### canary-wharf — Canary Wharf / Wood Wharf
**Ward**: Canary Wharf ward (central cluster + Wood Wharf) and Blackwall & Cubitt Town ward (Wardian, Newfoundland, New Providence Wharf, Cubitt Town). Both Tower Hamlets.
**Census 2021**: Canary Wharf 20-39 **55.1%** (under 20: 19.1%; 40-59: 20.1%; 60+: 5.7%). Blackwall & Cubitt Town 20-39 **57.4%** (under 20: 18.7%; 40-59: 18.6%; 60+: 5.2%).
**Post-2021 trajectory**: Wood Wharf deliveries span Census (10 Park Drive 2019, One Park Drive 2021, 8 Water Street 2022, Harbord Square 2022+). Current reading is above ward figure.
**T2.7 call**: **STRONG PASS — top-skew**. Second only to Nine Elms on raw Census numbers.
**Sources**: `https://crystalroof.co.uk/report/ward/canary-wharf-tower-hamlets/demographics`; `https://crystalroof.co.uk/report/ward/blackwall-and-cubitt-town-tower-hamlets/demographics`
**Confidence**: high.

### stratford — Stratford / East Bank
**Ward**: Stratford (Newham). East Village / Get Living, East Bank cultural quarter, and QEOP edge all sit in Stratford ward.
**Census 2021**: 20-39 **56%**. Under 20: 17%. 40-59: 20%. 60+: 6.9%.
**Post-2021 trajectory — STEP-CHANGE**: East Bank openings through 2023-2025 (V&A East, UAL-LCF, BBC). Student and early-career creative populations grew post-Census.
**T2.7 call**: **STRONG PASS — top-skew**. Tied with Nine Elms / Canary Wharf / Greenwich Peninsula for the top band.
**Sources**: `https://crystalroof.co.uk/report/ward/stratford-newham/demographics`
**Confidence**: high.

### battersea-power-station — Battersea Power Station
**Ward**: Nine Elms (post-2022 boundary). See nine-elms above — 20-39 **60%**. BPS is inside that ward under the current boundary.
**Cross-reference**: Battersea Park ward (adjacent riverside strip) 20-39 41%; under 20 18%; 40-59 26%; 60+ 15%.
**T2.7 call**: **STRONG PASS — top-skew**. Development-level demographic follows the Nine Elms monoculture pattern.
**Sources**: as Nine Elms.
**Confidence**: high.

### white-city — White City
**Ward**: White City (Hammersmith & Fulham), covering Television Centre, White City Living (St James), Imperial College White City campus.
**Census 2021**: 20-39 **38%**. Under 20: 24% (at London average). 40-59: 25%. 60-79: 11%. 80+: 1.9%.
**Reading**: young-leaning but not monocultural — 38% is 5 points above baseline but the under-20 share matches London (real families in the older council stock to the west) and 40-59 is at baseline. Closer to a demographically normal ward with a young bump than to a BTR monoculture.
**Post-2021 trajectory**: White City Living and Television Centre phases continued 2022-2024; Imperial keeps adding student/postdoc population. 2026 figure likely 40-42%.
**T2.7 call**: **PASS (moderate young-skew)**.
**Sources**: `https://crystalroof.co.uk/report/ward/white-city-hammersmith-and-fulham/demographics`
**Confidence**: high.

### elephant-park — Elephant Park
**Ward**: St George's (Southwark, post-2022). Covers the full Lendlease masterplan and the Heygate site.
**Census 2021**: 20-39 **49.4%**. Under 20: 18.7%. 40-59: 22%. 60+: 9.9%.
**Post-2021 trajectory — STEP-CHANGE**: Elephant Park phases continued delivery 2022-2025 (Trafalgar Place, South Gardens, Park Central, West Grove, Printworks). Current reading likely 52-55%.
**T2.7 call**: **PASS — strong young-skew**; heading for top-skew as deliveries land.
**Sources**: `https://crystalroof.co.uk/report/ward/st-georges-southwark/demographics`
**Confidence**: high.

### royal-wharf-royal-docks — Royal Wharf / Royal Docks
**Ward**: Royal Docks ward did not resolve in CrystalRoof; adjacent Canning Town North is the closest retrievable proxy. Royal Wharf itself is a Ballymore BTR island whose tenure structure produces a younger-than-ward-average population.
**Census 2021 (Canning Town North proxy)**: 20-39 41%; under 20 23.7%; 40-59 24.3%; 60+ 10.9%.
**Post-2021 trajectory — STEP-CHANGE**: Royal Wharf continued completions 2022-2024; Silvertown regeneration to the east; Thames Path extensions. Development-level 20-39 almost certainly 55-60%.
**T2.7 call**: **strong young-skew at development level; moderate at ward level**. Building reads young, surrounding streets less so.
**Sources**: `https://crystalroof.co.uk/report/ward/canning-town-north-newham/demographics`
**Confidence**: medium.

### kidbrooke-village — Kidbrooke Village
**Ward**: Kidbrooke Park (Greenwich). Contains the Berkeley masterplan and Cator Park.
**Census 2021**: 20-39 **29.2%** (below London average). Under 20: 24.6%. 40-59: 28%. 60+: 18.2%.
**Reading**: demographically settled. 20-39 is 4 points below baseline; 60+ is above. Berkeley's own marketing pitches "family-friendly", and the surrounding estate base is older.
**T2.7 call**: **FAIL on T2.7** — Caner would be demographically out of place. This is the clearest bottom-skew among the existing 14.
**Sources**: `https://crystalroof.co.uk/report/ward/kidbrooke-park-greenwich/demographics`
**Confidence**: high.

### oval-village — Oval Village
**Ward**: Oval (Lambeth). Contains the Oval Village / Oval Quarter / Oval Gasworks development.
**Census 2021**: 20-39 **47%**. Under 20: 15%. 40-59: 24%. 60+: 13.8%.
**Post-2021 trajectory**: Berkeley's Oval Village is still under construction; pipeline delivery 2025-2028 will pull the figure further up.
**T2.7 call**: **PASS — solid young-skew**.
**Sources**: `https://crystalroof.co.uk/report/ward/oval-lambeth/demographics`
**Confidence**: high.

### brent-cross-town — Brent Cross Town
**Ward**: West Hendon (Barnet) as host; Cricklewood (Barnet) as cross-reference. The Maple and related Brent Cross Town phases sit on the ward border.
**Census 2021**: West Hendon 20-39 **35.8%**; Cricklewood 20-39 31% (*below* baseline). Both wards settled-leaning suburban.
**Post-2021 trajectory**: masterplan early-stage; bulk of pipeline is post-2025. Ward numbers will drift modestly up but the area unlikely to read as young-monoculture — surrounding NW London suburbia is structurally settled.
**T2.7 call**: **moderate at development level; weak at ward level**. Inside The Maple specifically Caner would find young renters; surrounding streets are ordinary North West London family suburbia.
**Sources**: `https://crystalroof.co.uk/report/ward/west-hendon-barnet/demographics`; `https://crystalroof.co.uk/report/ward/cricklewood-barnet/demographics`
**Confidence**: high on ward; medium on adjustment.

### canada-water — Canada Water
**Ward**: Rotherhithe (Southwark). Covers British Land's masterplan, Surrey Quays station, Greenland Dock.
**Census 2021**: 20-39 **47%**. Under 20: 19%. 40-59: 23%. 60+: 11.8%.
**Post-2021 trajectory**: British Land / AustralianSuper masterplan is mid-delivery; first buildings complete, decades of pipeline ahead. Incremental deliveries will pull the figure further up.
**T2.7 call**: **PASS — solid young-skew**.
**Sources**: `https://crystalroof.co.uk/report/ward/rotherhithe-southwark/demographics`
**Confidence**: high.

### greenwich-peninsula — Greenwich Peninsula
**Ward**: Greenwich Peninsula (post-2022 rename; formerly Peninsula). Contains Knight Dragon's full masterplan, the O2, Upper/Lower Riverside, Design District, Tide Park.
**Census 2021**: 20-39 **56%**, with 3,234 aged 20-29 and 3,456 aged 30-39 (rare direct decade split from citypopulation.de). Under 20 ~20%. 40-59 18%. 60+ 4.7%.
**Post-2021 trajectory — STEP-CHANGE**: Knight Dragon phases continued 2021-2025; 2026 lived reality plausibly 60%+.
**T2.7 call**: **STRONG PASS — top-skew**. Among the youngest wards in London.
**Sources**: `https://crystalroof.co.uk/report/ward/greenwich-peninsula-greenwich/demographics`; `https://www.citypopulation.de/en/uk/london/wards/greenwich/E05000225__peninsula/`
**Confidence**: high.

---

## Areas — new candidates (inner-east)

### whitechapel
**Ward**: Whitechapel (Tower Hamlets). **20-39 54%**; under 20 22%; 40-59 17%; 60+ 6.1%. Population grew 14,190 → 18,841 between 2011 and 2021 (**+32.8%**). Ongoing Goodman's Fields, Whitechapel Estate, Royal London Hospital site deliveries post-Census. **STRONG PASS — top-skew**. `https://crystalroof.co.uk/report/ward/whitechapel-tower-hamlets/demographics`. Confidence: high.

### aldgate-east-aldgate
**Wards**: straddles Portsoken (City, **20-39 33%** — at baseline) and Spitalfields & Banglatown (TH, **20-39 53%**). Residential weight on the Tower Hamlets side (Goodman's Fields BTR). **PASS** on the east side, neutral on the City side. `https://crystalroof.co.uk/report/ward/portsoken-city-of-london/demographics`; `https://crystalroof.co.uk/report/ward/spitalfields-and-banglatown-tower-hamlets/demographics`. Confidence: high.

### shadwell
**Ward**: Shadwell (TH). **20-39 40%**; under 20 28% (large family households); 40-59 22%; 60+ 9.8%. Young-skewed in absolute terms but below Tower Hamlets borough average — the settled Bangladeshi family corner of the borough. **PASS (moderate)**. `https://crystalroof.co.uk/report/ward/shadwell-tower-hamlets/demographics`. Confidence: high.

### wapping
**Ward**: St Katharine's & Wapping (TH). **20-39 50%**; under 20 15% (very few children); 40-59 24%; 60+ 11.4%. Average age 34; median 32. **PASS — strong young-skew**. `https://crystalroof.co.uk/report/ward/st-katharines-and-wapping-tower-hamlets/demographics`. Confidence: high.

### mile-end
**Ward**: Mile End (TH). **20-39 47%**; under 20 26% (Queen Mary undergrad spillover); 40-59 20%; 60+ 7.3%. **PASS — strong young-skew, student-heavy**. `https://crystalroof.co.uk/report/ward/mile-end-tower-hamlets/demographics`. Confidence: high.

### bow
**Wards**: Bow East and Bow West (TH). Bow East **20-39 50%** (top-skew); Bow West **20-39 44%** (strong young-skew). Both over baseline. Under-20 close to London average (real families present). **PASS — strong / top-skew**. `https://crystalroof.co.uk/report/ward/bow-east-tower-hamlets/demographics`; `https://crystalroof.co.uk/report/ward/bow-west-tower-hamlets/demographics`. Confidence: high.

### bethnal-green
**Wards**: Bethnal Green East **20-39 43%** (under 20 27.5% — family-heavy); Bethnal Green West **20-39 48%** (top-skew-adjacent). **PASS — strong young-skew on West; strong with family caveat on East**. `https://crystalroof.co.uk/report/ward/bethnal-green-east-tower-hamlets/demographics`; `https://crystalroof.co.uk/report/ward/bethnal-green-west-tower-hamlets/demographics`. Confidence: high.

### bow-common-limehouse
**Ward**: Limehouse (TH) — **20-39 52%**; under 20 15% (few families); 40-59 25%; 60+ 8%. Strong young-skew, with meaningful settled minority in the warehouse conversions. **PASS — strong young-skew**. Bow Common specifically is ambiguous between Limehouse and Mile End eastern edge. `https://crystalroof.co.uk/report/ward/limehouse-tower-hamlets/demographics`. Confidence: high on Limehouse; low on Bow Common specifically.

### hackney-wick
**Ward**: Hackney Wick (Hackney). **20-39 39%** — above London average but **below the creative-reputation implied level**. Under 20 23% (at baseline); 40-59 25%; 60+ 13%. A case where the cultural vibe (studios, breweries) outpaces the resident demographic. Fish Island Village etc. raising the number post-Census. **PASS (moderate young-skew)** — flag for synthesis that vibe > demographics here. `https://crystalroof.co.uk/report/ward/hackney-wick-hackney/demographics`. Confidence: high.

### stratford-east-village
Same ward as Stratford: 20-39 **56%**. Top-skew. Tenure-driven (Get Living BTR) — development-level read is even younger than ward average.

### bow-east-three-mills
Same ward as Bow East: 20-39 **50%**. Top-skew.

### plaistow-west-ham
**Wards**: Plaistow North **20-39 34%** (at baseline, under 20 28% — family-dominated); West Ham **20-39 38%**. **WEAK** — not young-skewed, older East End working-age mix. `https://crystalroof.co.uk/report/ward/plaistow-north-newham/demographics`; `https://crystalroof.co.uk/report/ward/west-ham-newham/demographics`. Confidence: high.

### stepney-green
**Ward**: Stepney Green (TH). **20-39 39.5%**; under 20 26.3%. Young-skewed absolutely, settled within Tower Hamlets context. **PASS (moderate)**. `https://crystalroof.co.uk/report/ward/stepney-green-tower-hamlets/demographics`. Confidence: high.

---

## Areas — new candidates (north-east)

### hackney-central
**Ward**: Hackney Central. **20-39 42%**; under 20 21%; 40-59 24%; 60+ 12.9%. Solid young-skew with real family and older resident mix. **PASS — solid**. `https://crystalroof.co.uk/report/ward/hackney-central-hackney/demographics`. Confidence: high.

### dalston
**Ward**: Dalston. **20-39 54%**; under 20 15%; 40-59 22%; 60+ 9.3%. Close to a young-professional monoculture; matches nightlife reputation. **STRONG PASS — top-skew**. `https://crystalroof.co.uk/report/ward/dalston-hackney/demographics`. Confidence: high.

### stoke-newington
**Ward**: Stoke Newington. **20-39 38.8%**; 40-59 27% (at baseline); 60+ 13.8%. Young-leaning but the settled family corner of Hackney. **PASS (moderate)**. `https://crystalroof.co.uk/report/ward/stoke-newington-hackney/demographics`. Confidence: high.

### manor-house-finsbury-park
**Ward (proxy)**: Finsbury Park (Islington). **20-39 45%**; under 20 21%; 40-59 23%; 60+ 11.3%. **PASS — strong young-skew**. Manor House direct ward data not retrieved cleanly. `https://crystalroof.co.uk/report/ward/finsbury-park-islington/demographics`. Confidence: high on Finsbury Park; medium on Manor House.

### stamford-hill
**Ward**: Stamford Hill West (Hackney). **20-39 29.7%** — *below* baseline. Under 20 **38.7%** — one of the highest child shares in the candidate list, driven by the Charedi community's household structure. **FAIL on T2.7** — family/child dominated, not young-professional. `https://crystalroof.co.uk/report/ward/stamford-hill-west-hackney/demographics`. Confidence: high.

### highbury
**Ward**: Highbury (Islington). **20-39 41%**; under 20 19.2%; 40-59 25.4%; 60+ 14.6%. Settled young-professional character; Victorian terrace stock. **PASS — solid**. `https://crystalroof.co.uk/report/ward/highbury-islington/demographics`. Confidence: high.

### angel-islington
**Wards**: Canonbury **20-39 40%**; Barnsbury **20-39 44%**; St Mary's & St James' **20-39 45%**. Commercial Angel centre in St Mary's & St James' — single-person households 37% vs London's 29%. **PASS — strong young-skew**. `https://crystalroof.co.uk/report/ward/canonbury-islington/demographics`; `https://crystalroof.co.uk/report/ward/barnsbury-islington/demographics`; `https://crystalroof.co.uk/report/ward/st-marys-and-st-james-islington/demographics`. Confidence: high.

### old-street-hoxton
**Wards**: Hoxton East & Shoreditch **20-39 52%**; Hoxton West **20-39 49%**. Both at or near top-skew. Matches Tech City / Silicon Roundabout character. **STRONG PASS — top-skew**. `https://crystalroof.co.uk/report/ward/hoxton-east-and-shoreditch-hackney/demographics`; `https://crystalroof.co.uk/report/ward/hoxton-west-hackney/demographics`. Confidence: high.

### camden-town
**Ward**: Camden Town. **20-39 44%**; under 20 18%; 40-59 24%; 60+ 13%. Single-person households 38%. **PASS — strong young-skew**. `https://crystalroof.co.uk/report/ward/camden-town-camden/demographics`. Confidence: high.

### kentish-town
**Ward**: Kentish Town North. **20-39 40%**; under 20 18%; 40-59 27%; 60+ 16.1%. Young-leaning with mature Victorian terrace owner-occupier base. **PASS (moderate)**. `https://crystalroof.co.uk/report/ward/kentish-town-north-camden/demographics`. Confidence: high.

### tufnell-park
**Ward**: Tufnell Park (Islington). **20-39 39%**; 40-59 27%; 60+ 15.3%. Settled residential with young-professional bump. **PASS (moderate)**. `https://crystalroof.co.uk/report/ward/tufnell-park-islington/demographics`. Confidence: high.

### archway
**Ward**: Archway (Islington) did not resolve. Proxy via Tufnell Park (39%) and borough-level (~39%). Inferred PASS (moderate). Confidence: low.

### tottenham-hale
**Ward**: Tottenham Hale (Haringey). **20-39 39%**; under 20 26.6%; 40-59 24.4%; 60+ 10.9%. STEP-CHANGE: Hale Wharf, Hale Works, Ferro Building deliveries 2022-2025. **PASS — moderate at ward level, stronger at development level**. `https://crystalroof.co.uk/report/ward/tottenham-hale-haringey/demographics`. Confidence: high.

---

## Areas — new candidates (north)

### kentish-town-west-gospel-oak
**Ward**: Gospel Oak (Camden) not directly retrieved. Proxy Kentish Town North (40%). Inferred PASS (moderate). Confidence: low.

### belsize-park
**Ward**: Belsize (Camden). **20-39 35%**; 40-59 29%; 60+ 17%. Settled affluent residential with modest young slice. **PASS (weak)**. `https://crystalroof.co.uk/report/ward/belsize-camden/demographics`. Confidence: high.

### west-hampstead
**Ward**: West Hampstead (Camden). **20-39 47%**; under 20 17% (few families). Surprisingly strong young-skew driven by rental flat stock. **PASS — strong young-skew**. `https://crystalroof.co.uk/report/ward/west-hampstead-camden/demographics`. Confidence: high.

### kilburn
**Ward**: Kilburn (Brent). **20-39 36.2%**; 40-59 28.5%; 60+ 13.9%. Single-occupancy 39%. **PASS (moderate)**. `https://crystalroof.co.uk/report/ward/kilburn-brent/demographics`. Confidence: high.

### cricklewood
**Ward**: Cricklewood (Barnet). **20-39 31%** — below baseline. 40-59 29% (above). Settled NW London residential. **FAIL on T2.7**. `https://crystalroof.co.uk/report/ward/cricklewood-barnet/demographics`. Confidence: high.

### maida-vale
**Ward**: Maida Vale (Westminster). **20-39 41%**; average age 35, median 33; 27% in 40-59 (settled owner-occupier base in mansion blocks). **PASS — solid**. `https://crystalroof.co.uk/report/ward/maida-vale-westminster/demographics`. Confidence: high.

### st-johns-wood
**Ward**: Abbey Road (Westminster). **20-39 35%**; 40-59 28%; 60+ 19%; 80+ 5% (high). Settled affluent older demographic. **PASS (weak)** — young presence real but older signal dominant. `https://crystalroof.co.uk/report/ward/abbey-road-westminster/demographics`. Confidence: high.

### marylebone
**Ward**: Marylebone (Westminster). **20-39 44%**; under 20 13% (very few children); 40-59 26%; 60+ 17%. Marylebone High Street sub-ward 42%. Young-professional rental layered on mansion-flat owner-occupier base. **PASS — strong young-skew**. `https://crystalroof.co.uk/report/ward/marylebone-westminster/demographics`. Confidence: high.

---

## Areas — new candidates (west)

### acton
**Ward (proxy)**: North Acton (Ealing). **20-39 37%**; under 20 26% (BTR tower family mix + older estates). Acton Central ward did not resolve. **PASS (moderate)**. `https://crystalroof.co.uk/report/ward/north-acton-ealing/demographics`. Confidence: medium.

### ealing-broadway
**Ward**: Ealing Broadway (Ealing). **20-39 37%**; 40-59 28%; 60+ 18%. Mature suburban town centre; young-leaning but settled. **PASS (moderate)**. `https://crystalroof.co.uk/report/ward/ealing-broadway-ealing/demographics`. Confidence: high.

### hammersmith
**Ward**: Hammersmith Broadway (H&F). **20-39 44%**; under 20 18%; 40-59 24%; 60+ 14%. **PASS — strong young-skew**. `https://crystalroof.co.uk/report/ward/hammersmith-broadway-hammersmith-and-fulham/demographics`. Confidence: high.

### shepherds-bush
**Ward**: Shepherd's Bush Green (H&F). **20-39 41%**; under 20 19.7%; 40-59 26.6%; 60+ 12.9%. Westfield-adjacent; young-leaning mixed. **PASS — solid young-skew**. `https://crystalroof.co.uk/report/ward/shepherds-bush-green-hammersmith-and-fulham/demographics`. Confidence: high.

### notting-hill
**Ward**: Notting Dale (K&C). **20-39 31%** — *below* London average. 40-59 28%; 60+ 19% (above baseline). **Surprise result**: Notting Hill reads as a settled mature-affluent ward, not a young cosmopolitan scene. **FAIL / WEAK on T2.7**. Cultural reputation outpaces demographic reality. `https://crystalroof.co.uk/report/ward/notting-dale-kensington-and-chelsea/demographics`. Confidence: high.

### chelsea
**Wards**: Chelsea Riverside **20-39 28.3%** (below baseline; 60+ 25%); Brompton & Hans Town **20-39 34%**. Both read as settled affluent. **FAIL for Chelsea Riverside; WEAK for Brompton & Hans Town**. Not Caner's cohort. `https://crystalroof.co.uk/report/ward/chelsea-riverside-kensington-and-chelsea/demographics`; `https://crystalroof.co.uk/report/ward/brompton-and-hans-town-kensington-and-chelsea/demographics`. Confidence: high.

### south-kensington
**Ward**: Queen's Gate (K&C). **20-39 38%**; single-person households 42% (Imperial College pull). **PASS (moderate)**. `https://crystalroof.co.uk/report/ward/queens-gate-kensington-and-chelsea/demographics`. Confidence: high.

### earls-court
**Ward**: Earl's Court (K&C). **20-39 44%**; under 20 14% (very few families); 40-59 25.8%; 60+ 16.1%. International-renter pattern holds. Regeneration masterplan 2027+ will pull further. **PASS — strong young-skew**. `https://crystalroof.co.uk/report/ward/earls-court-kensington-and-chelsea/demographics`. Confidence: high.

### fulham-broadway
**Wards**: Munster **20-39 45%**; Sands End **20-39 42%**. Both cleanly young-skewed. Significantly younger than K&C Chelsea. **PASS — strong young-skew**. `https://crystalroof.co.uk/report/ward/munster-hammersmith-and-fulham/demographics`; `https://crystalroof.co.uk/report/ward/sands-end-hammersmith-and-fulham/demographics`. Confidence: high.

### pimlico
**Wards**: Pimlico North **20-39 41%** (under 20 13% — very few children; 60+ 19% — meaningful older residents); Pimlico South **~20-39 35%**. **PASS — solid young-skew** (North); **moderate** (South). `https://crystalroof.co.uk/report/ward/pimlico-north-westminster/demographics`. Confidence: high on North; medium on South.

---

## Areas — new candidates (south)

### bermondsey
**Ward (proxy)**: London Bridge & West Bermondsey (Southwark). **20-39 51%**; under 20 16%; 40-59 23%; 60+ 10%. Bermondsey ward proper did not resolve. **STRONG PASS — top-skew** (on London Bridge side). `https://crystalroof.co.uk/report/ward/london-bridge-and-west-bermondsey-southwark/demographics`. Confidence: high for London Bridge; medium for deeper Bermondsey.

### surrey-quays-rotherhithe
Rotherhithe ward — **20-39 47%**. Same as Canada Water entry. PASS — strong young-skew.

### borough-london-bridge
London Bridge & West Bermondsey — **20-39 51%**. Top-skew.

### vauxhall-separate
**Ward**: Vauxhall (Lambeth). **20-39 51.6%**; under 20 15.2%; 40-59 23.4%; 60+ 9.8%. Reads almost as young as Nine Elms. **STRONG PASS — top-skew**. `https://crystalroof.co.uk/report/ward/vauxhall-lambeth/demographics`. Confidence: high.

### stockwell
**Ward**: Stockwell East (Lambeth). **20-39 47%**; under 20 16%; 40-59 25%; 60+ 11.9%. Matches Vauxhall-Oval corridor. **PASS — strong young-skew**. `https://crystalroof.co.uk/report/ward/stockwell-east-lambeth/demographics`. Confidence: high.

### brixton
**Ward**: Brixton North (Lambeth). **20-39 43%**; under 20 20%; 40-59 25%; 60+ 11.7%. Above baseline but not extreme — genuine mixed-generation community. **PASS — solid young-skew**. `https://crystalroof.co.uk/report/ward/brixton-north-lambeth/demographics`. Confidence: high.

### clapham-common
**Ward**: Clapham Common & Abbeville (Lambeth). **20-39 50%**; under 20 17%; 40-59 23%; 60+ 10.7%. **STRONG PASS — top-skew**. `https://crystalroof.co.uk/report/ward/clapham-common-and-abbeville-lambeth/demographics`. Confidence: high.

### tooting
**Ward**: Tooting Broadway (Wandsworth). **20-39 49%**; under 20 18%; 40-59 22%; 60+ 11.4%. Matches Clapham / Balham Northern Line young-professional ribbon. **PASS — strong young-skew**. `https://crystalroof.co.uk/report/ward/tooting-broadway-wandsworth/demographics`. Confidence: high.

### wandsworth-town
**Ward**: Wandsworth Town (Wandsworth). **20-39 50%**; under 20 16%; 40-59 23%; 60+ 10.8%. Ram Quarter / Wandsworth Riverside drive the pattern. **STRONG PASS — top-skew**. `https://crystalroof.co.uk/report/ward/wandsworth-town-wandsworth/demographics`. Confidence: high.

### battersea-park-battersea
**Ward**: Battersea Park (Wandsworth). **20-39 41%**; under 20 18%; 40-59 26%; 60+ 15%. More moderate than Nine Elms / Wandsworth Town — older stock dilutes the new-build signal. **PASS — solid**. `https://crystalroof.co.uk/report/ward/battersea-park-wandsworth/demographics`. Confidence: high.

### clapham-junction
**Ward**: Clapham Junction did not resolve. Proxy via Wandsworth Town (50%) and Battersea Park (41%). Inferred **PASS — strong young-skew**. Confidence: medium.

### earlsfield
**Ward**: Earlsfield did not resolve. Proxy via Tooting Broadway (49%). Inferred **PASS — solid young-skew** — Earlsfield is a well-known young commuter suburb on the SWR line. Confidence: low-medium.

### streatham
**Ward**: Streatham Hill East (Lambeth). **20-39 39%**; 40-59 27%. Young-leaning settled — similar profile to Tufnell Park. **PASS (moderate)**. `https://crystalroof.co.uk/report/ward/streatham-hill-east-lambeth/demographics`. Confidence: high.

### peckham
**Ward**: Peckham (Southwark). **20-39 37%**; under 20 23%; 40-59 27%; 60+ 13.1%. **Demographics under-match cultural reputation** — similar case to Hackney Wick. Real established Black British and African community with family households holds the ward closer to baseline. **PASS (moderate)**. `https://crystalroof.co.uk/report/ward/peckham-southwark/demographics`. Confidence: high.

### camberwell
**Wards**: Camberwell Green **20-39 39%**; Champion Hill **20-39 36%**. Mixed residential with young-leaning slice; art college population adds layer. **PASS (moderate)**. `https://crystalroof.co.uk/report/ward/camberwell-green-southwark/demographics`; `https://crystalroof.co.uk/report/ward/champion-hill-southwark/demographics`. Confidence: high.

### walworth
**Ward (proxy)**: St George's / Newington area — direct ward did not resolve. Walworth is historically older Southwark council-stock working-class; proxy via St George's (49.4%) likely overstates Walworth itself. Probably 35-40% in 20-39. Inferred **PASS (moderate)**. Confidence: low-medium.

### new-cross
**Ward (proxy)**: Evelyn (Lewisham). **20-39 47%**; under 20 20.7%; 40-59 23.8%; 60+ 8.4%. Student-heavy (Goldsmiths). **PASS — strong young-skew** (inferred from proxy). `https://crystalroof.co.uk/report/ward/evelyn-lewisham/demographics`. Confidence: medium.

### deptford
**Ward**: Deptford (Lewisham). **20-39 43%**; under 20 21%; 40-59 24%; 60+ 10.7%. Gentrification visible in Census. Pepys Estate families still present. **PASS — solid young-skew**. `https://crystalroof.co.uk/report/ward/deptford-lewisham/demographics`. Confidence: high.

### lewisham
**Ward**: Lewisham Central. **20-39 53%** — top-skew. Under 20 18%; 40-59 21%; 60+ 7.9%. **Surprise result**: Gateway regeneration has already converted the ward. **STRONG PASS — top-skew**. `https://crystalroof.co.uk/report/ward/lewisham-central-lewisham/demographics`. Confidence: high.

### catford
**Ward**: Catford South (Lewisham). **20-39 27.6%** — well below baseline. 40-59 28.5% (largest); 60+ 18.6% (above baseline). **FAIL on T2.7 — settled**. `https://crystalroof.co.uk/report/ward/catford-south-lewisham/demographics`. Confidence: high.

### crystal-palace
**Ward**: Crystal Palace & Anerley (Bromley). **20-39 36.9%**; 40-59 28.9%; 60+ 12.8%. Mixed-age residential, not young monoculture. **PASS (moderate)**. `https://crystalroof.co.uk/report/ward/crystal-palace-and-anerley-bromley/demographics`. Confidence: high.

### forest-hill
**Ward**: Forest Hill (Lewisham). **20-39 33%** — exactly at London average. 40-59 28.7%. **NEUTRAL / WEAK**. `https://crystalroof.co.uk/report/ward/forest-hill-lewisham/demographics`. Confidence: high.

### honor-oak-park
**Ward**: Honor Oak Park did not resolve. Proxy Forest Hill (33%). Inferred **NEUTRAL / WEAK**. Confidence: low.

### sydenham
**Ward**: Sydenham (Lewisham). **20-39 30%** — below baseline. 40-59 29%; 60+ 17%. **FAIL — settled suburban**. `https://crystalroof.co.uk/report/ward/sydenham-lewisham/demographics`. Confidence: high.

### herne-hill
**Ward**: Herne Hill & Loughborough Junction (Lambeth). **20-39 41%**; 40-59 27%. Young-leaning residential — Kentish Town North analogue. **PASS — solid**. `https://crystalroof.co.uk/report/ward/herne-hill-and-loughborough-junction-lambeth/demographics`. Confidence: high.

### dulwich-village
**Ward**: Dulwich Village (Southwark). **20-39 21.5%** — far below baseline; nearly 12 points below London. 40-59 **31%** (dominant); under 20 27%; 60+ 20.5%. **HARDEST BOTTOM-SKEW in the dataset**. Canonical settled-family south London. **HARD FAIL on T2.7**. `https://crystalroof.co.uk/report/ward/dulwich-village-southwark/demographics`. Confidence: high.

### west-dulwich
**Ward**: Village ward did not resolve. Proxy Dulwich Village (21.5%). Inferred **FAIL — settled**. Confidence: medium.

### nunhead
**Ward**: Nunhead did not resolve. Proxy Peckham (37%) / Camberwell Green (39%). Inferred **PASS (moderate)**. Confidence: low.

---

## Areas — new candidates (other regeneration)

### old-oak-common
**Ward**: Old Oak & Park Royal did not resolve. Pre-regeneration zone with minimal resident population; HS2 and masterplan pipeline 2027-2035. Census figure effectively meaningless for future state. **NEUTRAL — too early to classify**. Confidence: low.

### wood-green
**Ward (proxy)**: Woodside (Haringey). **20-39 37%**; 40-59 28%; 60+ 14.4%. Mixed residential. **PASS (moderate)**. `https://crystalroof.co.uk/report/ward/woodside-haringey/demographics`. Confidence: medium.

### edmonton-green
**Ward**: Edmonton Green (Enfield). **20-39 28.1%** — below baseline. **Under 20 31%** — 7 points above baseline, family-dominated. **FAIL on T2.7 — family-dominant**. `https://crystalroof.co.uk/report/ward/edmonton-green-enfield/demographics`. Confidence: high.

### north-acton
North Acton (Ealing) — **20-39 37%**. Moderate young-skew; BTR pipeline delivering. PASS (moderate).

### hayes-west-london
**Ward**: Hayes Town (Hillingdon). **20-39 35%**; under 20 28% (family-dominated). Modestly above baseline but family-heavy. **PASS (weak / marginal)**. `https://crystalroof.co.uk/report/ward/hayes-town-hillingdon/demographics`. Confidence: high.

### southall
**Ward**: Southall Broadway (Ealing). **20-39 28.2%** — below baseline. **40-59 29.2%** (largest); settled South Asian family community. **FAIL on T2.7 — settled family/mid-career**. `https://crystalroof.co.uk/report/ward/southall-broadway-ealing/demographics`. Confidence: high.

### woolwich
**Ward**: Woolwich Arsenal (Greenwich). **20-39 50%**; under 20 18%; 40-59 23%; 60+ 8%. Berkeley Royal Arsenal cluster drives a strong young-skew; Elizabeth Line 2022 pulls further. **STRONG PASS — top-skew**. `https://crystalroof.co.uk/report/ward/woolwich-arsenal-greenwich/demographics`. Confidence: high.

### charlton-riverside
**Ward**: Charlton did not resolve. Pre-regeneration zone; Greenwich borough is below London average. Inferred **PASS (weak)** / NEUTRAL. Confidence: low.

### surrey-docks
Same as Rotherhithe — **20-39 47%**. PASS — strong young-skew.

---

## Summary — ranked table (all candidates)

Primary ward 20-39% sorted descending; T2.7 classification by thresholds above.

| # | Area | Host ward | 20-39% | T2.7 | Conf |
|---|---|---|---|---|---|
| 1 | nine-elms / battersea-power-station | Nine Elms (W'worth) | **60%** | top-skew | high |
| 2 | blackwall-cubitt-town (CW east) | Blackwall & Cubitt Town | **57.4%** | top-skew | high |
| 3 | greenwich-peninsula | Greenwich Peninsula | **56%** | top-skew | high |
| 4 | stratford / east-village / three-mills | Stratford | **56%** | top-skew | high |
| 5 | canary-wharf | Canary Wharf | **55.1%** | top-skew | high |
| 6 | whitechapel | Whitechapel | **54%** | top-skew | high |
| 7 | dalston | Dalston | **54%** | top-skew | high |
| 8 | aldgate-east (TH side) | Spitalfields & Banglatown | **53%** | top-skew | high |
| 9 | lewisham | Lewisham Central | **53%** | top-skew | high |
| 10 | old-street-hoxton | Hoxton East & Shoreditch | **52%** | top-skew | high |
| 11 | bow-common-limehouse | Limehouse | **52%** | top-skew | high |
| 12 | vauxhall-separate | Vauxhall | **51.6%** | top-skew | high |
| 13 | bermondsey / borough / london-bridge | LB & West Bermondsey | **51%** | top-skew | high |
| 14 | wapping | St Katharine's & Wapping | **50%** | top-skew | high |
| 15 | woolwich | Woolwich Arsenal | **50%** | top-skew | high |
| 16 | bow (east) | Bow East | **50%** | top-skew | high |
| 17 | wandsworth-town | Wandsworth Town | **50%** | top-skew | high |
| 18 | clapham-common | Clapham Common & Abbeville | **50%** | top-skew | high |
| 19 | elephant-park | St George's | **49.4%** | top-skew | high |
| 20 | tooting | Tooting Broadway | **49%** | strong young | high |
| 21 | old-street-hoxton (west) | Hoxton West | **49%** | strong young | high |
| 22 | bethnal-green (west) | Bethnal Green West | **48%** | strong young | high |
| 23 | weavers | Weavers | **47.4%** | strong young | high |
| 24 | mile-end | Mile End | **47%** | strong young | high |
| 25 | canada-water / rotherhithe / surrey-docks | Rotherhithe | **47%** | strong young | high |
| 26 | oval-village | Oval | **47%** | strong young | high |
| 27 | stockwell | Stockwell East | **47%** | strong young | high |
| 28 | west-hampstead | West Hampstead | **47%** | strong young | high |
| 29 | new-cross (Evelyn proxy) | Evelyn | **47%** | strong young | med |
| 30 | kings-cross | King's Cross | **46%** | strong young | high |
| 31 | haggerston | Haggerston | **46%** | strong young | high |
| 32 | finsbury-park / manor-house | Finsbury Park | **45%** | strong young | high |
| 33 | island-gardens | Island Gardens | **45%** | strong young | high |
| 34 | fulham-broadway (Munster) | Munster | **45%** | strong young | high |
| 35 | angel | St Mary's & St James' | **45%** | strong young | high |
| 36 | camden-town | Camden Town | **44%** | strong young | high |
| 37 | marylebone | Marylebone | **44%** | strong young | high |
| 38 | angel (Barnsbury) | Barnsbury | **44%** | strong young | high |
| 39 | brockley (New Cross edge) | Brockley | **44.2%** | strong young | high |
| 40 | earls-court | Earl's Court | **44%** | strong young | high |
| 41 | hammersmith | Hammersmith Broadway | **44%** | strong young | high |
| 42 | bow (west) | Bow West | **44%** | strong young | high |
| 43 | de-beauvoir | De Beauvoir | **44.2%** | strong young | high |
| 44 | bayswater | Bayswater | **44%** | strong young | high |
| 45 | brixton | Brixton North | **43%** | strong young | high |
| 46 | deptford | Deptford | **43%** | strong young | high |
| 47 | bethnal-green (east) | Bethnal Green East | **43%** | strong young | high |
| 48 | poplar | Poplar | **43%** | strong young | high |
| 49 | hackney-central | Hackney Central | **42%** | strong young | high |
| 50 | london-fields | London Fields | **42%** | strong young | high |
| 51 | fulham (Sands End) | Sands End | **42%** | strong young | high |
| 52 | highbury | Highbury | **41%** | strong young | high |
| 53 | maida-vale | Maida Vale | **41%** | strong young | high |
| 54 | herne-hill | Herne Hill & L'boro Jct | **41%** | strong young | high |
| 55 | battersea-park | Battersea Park | **41%** | strong young | high |
| 56 | royal-wharf (proxy) | Canning Town North | **41%** | strong young | med |
| 57 | pimlico (north) | Pimlico North | **41%** | strong young | high |
| 58 | shepherds-bush | Shepherd's Bush Green | **41%** | strong young | high |
| 59 | angel (Canonbury) | Canonbury | **40%** | solid | high |
| 60 | kentish-town | Kentish Town North | **40%** | solid | high |
| 61 | shadwell | Shadwell | **40%** | solid | high |
| 62 | tufnell-park | Tufnell Park | **39%** | solid | high |
| 63 | stepney-green | Stepney Green | **39.5%** | solid | high |
| 64 | streatham | Streatham Hill East | **39%** | solid | high |
| 65 | hackney-wick | Hackney Wick | **39%** | solid (vibe > data) | high |
| 66 | camberwell (Green) | Camberwell Green | **39%** | solid | high |
| 67 | stoke-newington | Stoke Newington | **38.8%** | solid | high |
| 68 | west-ham | West Ham | **38%** | solid | high |
| 69 | tottenham-hale | Tottenham Hale | **39%** | solid | high |
| 70 | telegraph-hill / New Cross proxy | Telegraph Hill | **38%** | solid | high |
| 71 | south-kensington | Queen's Gate | **38%** | solid | high |
| 72 | white-city | White City | **38%** | solid | high |
| 73 | ealing-broadway | Ealing Broadway | **37%** | moderate | high |
| 74 | peckham | Peckham | **37%** | moderate | high |
| 75 | acton (proxy) / north-acton | North Acton | **37%** | moderate | med |
| 76 | crystal-palace | Crystal Palace & Anerley | **36.9%** | moderate | high |
| 77 | wood-green (proxy) | Woodside | **37%** | moderate | med |
| 78 | camberwell (Champion Hill) | Champion Hill | **36%** | moderate | high |
| 79 | kilburn | Kilburn | **36.2%** | moderate | high |
| 80 | brent-cross-town | West Hendon | **35.8%** | moderate | high |
| 81 | st-johns-wood | Abbey Road | **35%** | moderate/settled | high |
| 82 | belsize-park | Belsize | **35%** | moderate/settled | high |
| 83 | hayes-west | Hayes Town | **35%** | moderate/settled | high |
| 84 | wembley-park (ward) | Tokyngton | **31% (45-50% adjusted)** | **STEP-CHANGE** | high/med |
| 85 | wembley-central | Wembley Central | **34%** | baseline | high |
| 86 | queens-park | Queen's Park (Westm) | **34%** | baseline | high |
| 87 | chelsea (Brompton-Hans Town) | Brompton & Hans Town | **34%** | baseline/settled | high |
| 88 | little-venice | Little Venice | **33.4%** | baseline | high |
| 89 | aldgate (City side) | Portsoken | **33%** | baseline | high |
| 90 | forest-hill | Forest Hill | **33%** | baseline | high |
| 91 | honor-oak-park (proxy) | via Forest Hill | **~33%** | baseline | low |
| 92 | notting-hill | Notting Dale | **31%** | settled | high |
| 93 | cricklewood | Cricklewood | **31%** | settled | high |
| 94 | chelsea (Stanley) | Stanley | **31%** | settled | high |
| 95 | holland (K&C) | Holland | **30.4%** | settled | high |
| 96 | sydenham | Sydenham | **30%** | settled | high |
| 97 | stamford-hill | Stamford Hill West | **29.7%** | family-dominant | high |
| 98 | kidbrooke-village | Kidbrooke Park | **29.2%** | settled | high |
| 99 | chelsea (Riverside) | Chelsea Riverside | **28.3%** | settled/older | high |
| 100 | southall | Southall Broadway | **28.2%** | settled/family | high |
| 101 | edmonton-green | Edmonton Green | **28.1%** | family-dominant | high |
| 102 | catford | Catford South | **27.6%** | settled | high |
| 103 | dulwich-village / west-dulwich | Dulwich Village | **21.5%** | **hardest bottom-skew** | high |

Row count exceeds 95 because several candidate entries share a host ward (Nine Elms/BPS, Stratford/East Village, Canada Water/Rotherhithe/Surrey Docks) and several reference crosses (Hoxton East and Hoxton West both listed under "old-street-hoxton") — this is the consolidated ranking view, not a de-duplicated one.

**Top-skew count (20-39 ≥ 45%)**: 35 wards (rows 1-34 plus Wembley Park BTR-adjusted).
**Bottom-skew count (20-39 < 30%)**: 8 wards (Stamford Hill West, Kidbrooke Park, Chelsea Riverside, Southall Broadway, Edmonton Green, Catford South, Dulwich Village, West Dulwich via proxy).

---

## Cross-cutting findings

**1. The river-BTR corridor is the young-skew monoculture.** Nine Elms, Canary Wharf, Wood Wharf, BPS, Stratford, Greenwich Peninsula, Royal Arsenal Woolwich — every area with a major post-2015 waterfront BTR delivery clears 50% in 20-39. The driver is tenure: operator referencing (30-36× income multiples or upfront equivalents) self-selects the 25-35 professional cohort, and new-build stock has no legacy population to dilute the signal. This is the demographic heartland for Caner's cohort.

**2. Tower Hamlets is the youngest London borough full stop.** Every TH ward except Shadwell (40%) clears 42%; most clear 45%. Borough average ~46%, 13 points above London. Even TH's "older" corners (Stepney Green 39.5%) clear baseline.

**3. Hackney is bifurcated**. Hoxton East (52%), Dalston (54%), Haggerston (46%), Hackney Central (42%), London Fields (42%), De Beauvoir (44%) all strongly young-skewed. Stamford Hill West (29.7%) is family-dominant; Stoke Newington (38.8%) is settled-leaning. The dividing line is Charedi community concentration in the north + mature owner-occupier Stoke Newington terraces vs the post-2010 young-renter waves in south Hackney.

**4. K&C and parts of Westminster are demographically mature, counter to brand perception**. Notting Hill, Chelsea Riverside, Holland, Stanley, St John's Wood all read as settled wards on the numbers. The K&C exceptions are young-rental-heavy micro-clusters: Queen's Gate (Imperial), Earl's Court, Fulham Broadway (Munster / Sands End). Rule of thumb: **mature owner-occupied K&C stock = settled; young-rental K&C stock = young**.

**5. The Northern Line south-of-the-river corridor is monocultural young-professional.** Vauxhall (52%), Oval (47%), Stockwell East (47%), Clapham Common (50%), Wandsworth Town (50%), Tooting (49%) — a continuous young-skew ribbon from Nine Elms through Clapham to Tooting. Caner would find his cohort dominant across this entire strip.

**6. South-east London is demographically bimodal**. Lewisham Central (53%), Deptford (43%), Brockley (44%), Evelyn/New Cross (47%) on one side — young-skewed. Catford (27.6%), Sydenham (30%), Dulwich Village (21.5%), Forest Hill (33%) on the other — settled. The dividing line is Lewisham Gateway + Overground stations vs deeper Southeastern rail suburbs.

**7. North-west London is mostly settled with West Hampstead as outlier**. Cricklewood (31%), Belsize (35%), Abbey Road/SJW (35%), Finchley (27%) all settled or mid-career-dominant. West Hampstead's 47% is driven by rental flat stock — a housing-type exception rather than a district-level pattern.

**8. Biggest calibration surprises**:
- **Notting Hill is demographically settled** (31%, below baseline). Reputation ≠ reality.
- **Hackney Wick is less young than its vibe** (39%; well below Dalston/Hoxton/Whitechapel top-skew). Creative reputation is about visitors, not residents.
- **Lewisham Central is surprisingly young (53%)** — Gateway regeneration has already converted the ward. Prior grade of C should be reconsidered upward on T2.7 alone.
- **West Hampstead is seriously young (47%)** despite its commuter-suburb reputation.
- **Wembley Park's ward figure (31%) is deceptive** — the BTR campus population is structurally much younger than the ward average.

**9. Step-change flags** (2021 Census under-counts current state for these areas):

| Area | Ward 20-39% (2021) | Likely 2026 state | Reason |
|---|---|---|---|
| Nine Elms | 60% | 65-70% | Ongoing BPS + Embassy Gardens post-Census |
| Wembley Park (Tokyngton) | 31% | ~45-50% at dev level | Quintain BTR deliveries dilute legacy stock in ward average |
| Woolwich Arsenal | 50% | 52-55% | Berkeley phases + Elizabeth Line 2022 |
| Greenwich Peninsula | 56% | 60%+ | Knight Dragon ongoing |
| Stratford | 56% | 58-60% | East Bank + continued East Village occupancy |
| Elephant Park | 49.4% | 52-55% | Lendlease phases 2022-2025 |
| Royal Wharf | 41% (proxy) | 50-55% dev | Ballymore continued deliveries |
| Canada Water | 47% | 50%+ | British Land masterplan early deliveries |
| Oval Village | 47% | 49-51% | Berkeley ongoing 2022+ |
| Brent Cross Town | 35.8% | 38-40% | Modest; pipeline still mostly ahead |

**10. Referencing providers captured per brief instruction**: none encountered in this demographic sweep — T2.7 focus did not intersect with rental-qualification documentation. No Homeppl / Goodlord / Vouch material to pass forward.

---

## Open questions

1. **Wembley Park BTR-level 20-39 share** — the ward figure (31%) is useless for assessing the Quintain campus. Synthesis should try to obtain building-level age data from Quintain Living marketing or from HomeViews text mining. This is the single most important missing data point for this area.

2. **Post-Census BTR delivery impact** at ward level. Step-change caveats on ~10 areas (Woolwich, Elephant Park, Royal Wharf, Canada Water, Oval Village, Greenwich Peninsula, Stratford, Earl's Court pipeline, Brent Cross, Tottenham Hale). GLA intercensal estimates 2022-2024 at ward level would quantify the under-count; I did not attempt this.

3. **Charedi community impact on Stamford Hill** — the 29.7% figure is shaped by a specific community demographic. Whether any sub-area around the Overground station reads younger is not resolvable at ward granularity.

4. **New Cross direct ward data** — I proxied via Evelyn (47%) but could not retrieve New Cross as a post-2022 distinct ward. Synthesis should cross-check against resident-voice / press agents for whether Goldsmiths-area vibes match the Evelyn number.

5. **Clapham Junction / Earlsfield direct data** — both 404'd. Proxy confidence medium-low. Wandsworth borough ~43% 20-39 suggests both likely young-skewed, but ward-level confirmation would help.

6. **Honor Oak Park vs Forest Hill distinction** — both on the gentrifying Overground corridor. Forest Hill at 33% is baseline but street-level character may differ from the Horniman side. Needs qualitative cross-reference.

7. **Old Oak Common and Charlton Riverside trajectory** — pre-regeneration zones where the Census figure is effectively meaningless for future state. Synthesis probably should not rank these on T2.7 at all until masterplan delivery.

8. **18-29 vs 20-39 band mismatch** — the brief explicitly asks for 18-29 and 30-39 split. ONS nomis could pull 5-year bands (20-24, 25-29, 30-34) for tighter matching to Caner's own age (24). I flagged in methodology but did not run. Synthesis can either accept my 20-39 figure as the summary signal or go direct to ONS nomis for the 25-29 sub-band.

---

## Discoveries

No new candidate areas — my focus was ground-truthing the existing list. The discovery agents (11-15) are better positioned to add to the candidate pool.

One important observation for synthesis: **Lewisham Central (53% in 20-39) is the single biggest surprise** in the sweep. The candidate list's prior grade of C for Lewisham should probably be revised upward to B on T2.7 grounds alone — Lewisham Central is in the same band as Wandsworth Town (50%), Clapham Common (50%), Woolwich Arsenal (50%), all prior-B.

---

## Self-assessment

**Strongest coverage**: inner-east (Tower Hamlets, Hackney, Southwark, Lambeth, Wandsworth) where nearly every ward returned direct ONS 2021 data via CrystalRoof. Tower Hamlets coverage near-complete — 13 of 14 TH wards have direct numbers. Every top-skew area in the ranked table has a direct Census figure backing it.

**Weakest coverage**: outer-west and regeneration placeholders (Archway, Clapham Junction, Earlsfield, Old Oak Common, Charlton, Nunhead, Honor Oak Park, Acton Central) where CrystalRoof 404'd on the direct ward URL and I fell back on adjacent-ward proxies or borough-level inferences. Medium-to-low confidence on these. Also weak: the **BTR-level vs ward-level distinction** which is load-bearing for Wembley Park, Royal Wharf, Brent Cross Town, and several Berkeley masterplans — I flagged these but cannot resolve from public ward data alone.

**Single biggest load-bearing judgement**: translating the brief's 18-29 threshold (≥30% = very young, <15% = settled) into a 20-39 threshold (≥45% = top-skew, <30% = settled) because ONS publication bands mix 18-29 into the 20-39 decadal cell. The 45% cutoff is deliberately conservative — it flags only clearly young-dominated wards. Synthesis can re-calibrate against the 15-agent evidence base if preferred; the underlying per-ward percentages remain valid regardless of where the cutoff sits.
