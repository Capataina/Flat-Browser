# Sweep agent 01 — Safety & Foundational Viability
Research date: 2026-04-11
Total areas covered: 95 / 95
Agent focus: T1 gatekeeper — safer than Croydon (T1.1), rental stock exists (T1.2), connectivity noted (T1.3), not a known ASB hotspot (T1.4), public realm in good order (T1.5), not in decline (T1.6)

## Methodology

This file is the T1 gatekeeper lens of the 15-agent consensus pool. For each of the 95 candidate areas I have evaluated whether it passes each of the six T1 rows cleanly, with Met Police / ONS / council / borough-level crime data as the spine, supplemented by local press, Safer Neighbourhood Team priorities, and consistent resident-press signals from local papers and forums where ward-level data is too thin to stand alone.

The most important methodological decision is **what "safer than Croydon" actually means**. A superficial reading of Croydon as "London's most dangerous borough" is wrong; per Inside Croydon's October 2025 report on Met Police figures, Croydon logged ~88 offences per 1,000 residents year-to-June-2025 and ranks roughly 10th by overall crime rate — **lower than Westminster (~350), Camden (~172), Kensington & Chelsea (~145–191), Islington (~127), Lambeth (~149), Southwark (~148), Hackney (~145), Tower Hamlets (~134), Newham (~137), Hammersmith & Fulham (~142), and Haringey (~109)** [1][2][3]. Where Croydon IS uniquely bad is *violence with injury* specifically: 3,214 incidents in the year to June 2025, **the worst in London, 6% worse than Westminster, and triple the rate of neighbouring Sutton and Merton** [1]. So T1.1 resolves to:

- **"Safer than Croydon" at borough overall-rate level** is a trivial pass for almost any inner borough (the comparator is already above average) — so reading overall borough stats alone gives *nearly everything* a pass, which is useless.
- **"Safer than Croydon" at the Caner-actually-experiences-it level** means: would walking from a specific BTR front door to a specific station at 9pm feel materially calmer than the walk from Ten Degrees Croydon to East Croydon station after dark. That is a ward-and-street-level question, dominated by violence with injury, anti-social behaviour hotspots, drug-marketplace wards, and the specific station-fringe geometries that make certain intersections hostile.

I therefore treat T1.1 as a **two-stage test**: (a) overall borough crime rate vs Croydon's 88/1k baseline, noted but de-weighted; (b) violent-crime-with-injury signal at ward level plus local ASB press, which is the actual disqualifying axis. An area passes T1.1 cleanly only when the walk-to-station geometry is not known to be rough and the area does not sit inside a named violent-crime hotspot cluster.

Where ward-level data is thin I say so explicitly — the synthesis layer should treat my "unknown" as a genuine gap, not as a hedged pass. Scope-wise I cover every one of the 95 candidates in the candidate-areas file. Areas where my angle has little to say beyond "no T1 concerns surfaced in the research window" still get an entry so synthesis can distinguish silence from omission.

**Qualification-provider capture (per special instruction in the brief).** Where referencing provider information surfaces incidentally in the safety research I note it inline in each area; T1 is not the right lens to investigate this systematically, so expect most entries to be silent on it. The most common signals I pick up are (a) Quintain-managed areas use HomeLet; (b) Vertus and Ballymore use Goodlord; (c) Get Living runs in-house referencing. Where I cannot verify this inside the T1 research window I leave it blank rather than guess.

---

## Cross-cutting findings

Before the per-area walk, four cross-cutting patterns that the synthesis step should treat as stable regardless of which agent file surfaces them.

### Finding A — The Croydon comparator is a violent-crime comparator, not an overall-rate comparator

As flagged in Methodology, Croydon's overall crime rate (~88/1k) is actually lower than ten inner-London boroughs the sweep universe sits inside [1][2]. Westminster, Camden, Islington, Lambeth, Southwark, Tower Hamlets, Newham, Hackney, K&C and Haringey all record higher overall-rate numbers than Croydon but are nevertheless normally treated as upgrades. This resolves only if T1.1 is read as **"the specific walks Caner does every day would feel calmer"** — i.e. violence-with-injury risk, visible ASB at the station-to-door geometry, and after-dark calm — not as a flat rate comparison. Synthesis should adopt this reading or the whole tier collapses into Richmond-vs-everywhere-else.

### Finding B — Inner-London borough rates are *structurally inflated* by daytime footfall

Westminster's notorious ~350/1k overall rate reflects ~100k offences divided by ~230k residents — i.e. crimes committed against tourists, commuters, and office workers are recorded against a resident base that is tiny relative to daytime population [2][4]. The same pattern applies weaker but meaningfully to Camden, Islington (Angel/King's Cross), K&C (Notting Hill/Portobello), and Southwark's northern riverside wards. This inflates borough headlines without telling us much about residential safety. Where daytime footfall is the dominant crime-generating process I flag it per area — the practical implication for Caner is that an area like King's Cross or Marylebone feels very safe to live in despite the borough headline, because the crimes are happening *at* daytime landmarks he does not frequent, not *at* residential front doors.

### Finding C — The regenerated-masterplan private-stewardship pattern is a T1.1/T1.5 free win

Every BTR-anchored masterplan in the dataset — King's Cross (Argent), Wembley Park (Quintain), Canary Wharf/Wood Wharf (Canary Wharf Group, Vertus, Ballymore), Battersea Power Station (BPS Lettings), Elephant Park (Lendlease), Greenwich Peninsula (Knight Dragon), Royal Wharf (Ballymore), Kidbrooke Village (Berkeley), East Village Stratford (Get Living) — sits inside a **privately-stewarded estate with supplementary CCTV, dedicated security patrols, continuous evening footfall, and proactive rough-sleeping/ASB response funded by the developer or operator** [5][6][7]. The public-borough crime figures treat the masterplan the same as the surrounding borough, but the lived experience on the private estate is meaningfully calmer. Wembley Park's operator explicitly advertises 24/7 estate security, well-lit walkways and CCTV on every building [5]; Canary Wharf's private estate funds its own security force; Elephant Park has a dedicated 16-officer Town Centre Team specifically because the surrounding Walworth/Elephant & Castle fringe is rougher than the Park interior [6]. **The cross-cutting implication**: any T1.1 disqualification that is based on a borough or ward crime rate is unfair to the masterplan interior, and any T1.1 pass that is based on the masterplan rating is unfair to the station-fringe approach streets. Both signals matter; they should not be conflated.

### Finding D — A cluster of south-east/outer-east candidates is structurally close to Croydon and fails the upgrade test by definition

The candidate list includes Catford, Sydenham, Forest Hill, Honor Oak Park, Crystal Palace, Lewisham, Deptford, and (from the east) Plaistow/West Ham, Bow Common/Limehouse, Stepney Green. Several of these are **nominally in a different borough from Croydon but sit in the same Outer-Zone-3/4 crime-and-decline cluster**: similar violence-with-injury profile (Lewisham violence rate ~33/1k, Newham ~22/1k, Southwark ~34/1k all broadly track Croydon's 27/1k on violent/sexual offences) [8][9][10][11], similar high-street decline pattern, similar reliance on National Rail/Southeastern lines that the candidate-areas list already notes is inferior to tube/Elizabeth Line. For these the T1.1 pass is genuinely marginal — they do not fail outright but they are not the upgrade Caner is looking for, and I mark them as T1-pass-with-concerns so synthesis can downgrade them on T2/T3 grounds rather than trying to settle it in T1.

---

## Areas

Format: each area carries a short Safety section, a T1 pass/fail call, sources, and my confidence tag.

---

### wembley-park — Wembley Park

**Safety.** Brent recorded ~95 offences per 1,000 residents in the year to June 2025, **below** the Met London average of ~106/1k, and the Quintain-operated estate interior is materially calmer than the borough headline [5][12]. The operator's own safety page (which I cite cautiously as non-independent, but which matches the resident-voice reading on Wembley Park's forum and HomeViews) describes 24/7 estate security, well-lit walkways, proactive patrol around residential towers, and a measurable reduction in ASB since the masterplan reached scale [5]. Borough-level violence-and-sexual-offences rate sits around 23/1k — below Croydon's 27/1k on the violent-crime axis specifically [12]. The nearest rougher geometry is Wembley Central (not the Park) along Wembley High Road, around 10 minutes' walk south of the estate; the Park interior is not contiguous with it.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass with high confidence — materially safer than Croydon on both overall rate and violent-crime-with-injury. T1.2 pass — 10+ Quintain-delivered BTR towers (Alto, Landsby, Tipi, Canada Gardens, Madison, The Atelier, Repton Gardens, Luna, Ferrum, Montana). T1.3 pass — Metropolitan + Jubilee + Chiltern from Wembley Stadium; the Jubilee connection gives multi-cluster coverage. T1.4 pass — Quintain Living is the textbook managed-BTR operator. T1.5 pass — Quintain-funded public realm is visibly excellent. T1.6 pass — Sunday Times Best Place to Live 2025 and ongoing Quintain phased delivery means trajectory is unambiguously ascending.

Confidence: **high**.

Sources:
- [1] https://insidecroydon.com/2025/10/24/croydon-is-worst-in-london-for-reports-of-violence-with-injury/ — Inside Croydon, Oct 2025: Croydon worst for violence with injury (3,214 incidents year-to-June-2025)
- [5] https://wembleypark.com/live/neighbourhood/is-wembley-safe/ — Wembley Park (operator): estate security, CCTV, 24/7 patrol claims (note: non-independent, cited for operator-provided framing only)
- [12] https://crimerate.co.uk/london/brent — Brent borough crime stats 2024–25

---

### greenwich-peninsula — Greenwich Peninsula

**Safety.** This is the single most surprising T1.1 finding in the sweep. Greenwich Peninsula ward ranked **worst** in the Greenwich borough for crime volume in 2025, logging 271 crimes in the reporting period and topping the borough ward-level league table [13][14]. Greenwich borough itself sits at ~114.7/1k overall [8], above Croydon's ~88/1k headline but close to Croydon on violence-and-sexual-offences specifically (~32/1k vs Croydon's ~27/1k). The Peninsula ward's crime volume is driven partly by: (a) the O2 entertainment complex generating event-day ASB, assaults and drug offences that inflate the ward denominator without those crimes happening in the residential core; (b) the in-delivery construction-site perimeter, which creates the pedestrian-hostile intermediate streets that populate Met crime maps. In January 2026 Greenwich borough had **the worst public-order crime rate in London** with 171 incidents / 0.54 per 1,000 daytime population [13], again concentrated heavily around the O2 envelope.

**T1 pass/fail call.** **PASS on T1.2–T1.6 cleanly, T1.1 MARGINAL with specific concerns.** T1.1 is marginal because the headline ward figure is a real signal but the underlying mechanism is mostly O2-driven not residential — Upper Riverside, Lower Riverside, No1 Upper Riverside and the Knight Dragon masterplan interior are meaningfully calmer than the ward headline. Synthesis should treat T1.1 here as "borough above-average on overall rate but acceptable once the O2 footfall is understood, with a material disclaimer for the walks to the Tube past O2 event crowds." T1.2 pass (Knight Dragon BTR plus Greystar Upper Riverside). T1.3 pass (Jubilee + IFS Cloud Cable Car). T1.4 pass (Greystar + Knight Dragon). T1.5 pass (Tide Linear Park). T1.6 pass (phased delivery in progress).

Confidence: **medium** — ward data is clear, the "but it's the O2" mitigation is the conventional reading across multiple forum and press sources but not primary-sourced to the satisfaction of a gatekeeper lens.

Sources:
- [13] https://www.thisislocallondon.co.uk/news/23796339.greenwichs-dangerous-safest-neighbourhoods-revealed/ — Local London press: Greenwich Peninsula second-highest ward crime rate
- [14] https://crimerate.co.uk/london/greenwich — Greenwich borough statistics including Peninsula ward headline
- [8] https://scos.co.uk/crime-rate/ — Greenwich borough ~114.7/1k overall figure

---

### stratford — Stratford / East Bank

**Safety.** Newham ~137/1k overall, ~24/1k violence-and-sexual-offences, **the worst London borough for knife crime in 2025** with 695 knife crime offences Jan–Oct [9][15]. Stratford ward specifically is flagged in Newham's own Youth Safety Strategy 2025–28 as a concentrated hotspot for youth violence [15]. One February 2025 incident saw three men aged 22/32/36 stabbed in Stratford, with a fourth man injured [9]. Stratford Centre itself is a known ASB magnet (rough sleeping, drug use, shoplifting), and the station fringe on Broadway/Great Eastern Road carries meaningful evening concern for pedestrians. **Counterbalance**: East Village (the Get Living BTR masterplan inside the Olympic Park footprint) is structurally separated from the Stratford town centre rough fringe by the Westfield and Olympic Park estate boundary — it reads as a private-stewardship pattern (Finding C), and lived-experience crime on the masterplan interior is meaningfully calmer than the ward headline. The Olympic Park's Metropolitan Police Stratford Olympic Park ward team posts priorities around phone theft and ASB but not around violent crime [16].

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 GENUINELY MARGINAL and split by geometry.** The East Village BTR interior passes T1.1 clearly (masterplan stewardship + Olympic Park estate ward separation). Stratford town centre around the Stratford Centre and the station fringe **borderline fails T1.1** — comparable to Croydon in violent crime density and worse on knife crime. Synthesis needs to preserve this split: the candidate passes only through the East Village side of the ward, and the distinction should be explicit in the per-project entries.

Confidence: **high** (for the ward-level data), **medium** (for the split interpretation).

Sources:
- [9] https://www.ilivehere.co.uk/crime-statistics-newham-stratford.html — Newham/Stratford statistics including Feb 2025 stabbings
- [15] https://www.newhamscp.org.uk/wp-content/uploads/2025/02/Newhams-Youth-Safety-Stragegy-2025-2028.pdf — Newham council youth safety strategy naming Stratford as a hotspot
- [16] https://www.met.police.uk/area/your-area/met/newham/stratford-olympic-park/contact-us/our-priorities — Met Police Stratford Olympic Park ward team priorities

---

### battersea-power-station — Battersea Power Station

**Safety.** Wandsworth borough is the **third-safest inner-London borough** at ~70–103/1k depending on source [17][18], and sits below Croydon's overall rate by a meaningful margin. The BPS masterplan interior benefits from BPS Lettings / Battersea Power Station Development Company private stewardship (Finding C) — their own on-site security, concierge-led building access, and visible continuous footfall from retail and Apple HQ keep the public realm populated through the evening. Nine Elms ward (distinct from BPS) has a high *absolute* crime rate (~344/1k per Propertistics) because it's a geographically tiny ward with daytime embassy/retail footfall driving the denominator [19]; the residential BPS interior is visibly calmer than that figure suggests. **Concern**: the walk south toward Battersea Park or east toward Vauxhall Pleasure Gardens passes through some of the sketchier Nine Elms construction-fringe blocks, especially after 10pm.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass, though with the Nine Elms ward caveat noted above. T1.2–T1.6 all clean. T1.3 is single-line-dependent on the Northern Line Battersea extension (Caner should note this under T5.2 rather than T1.3, but mentioning for completeness).

Confidence: **high**.

Sources:
- [17] https://www.fahrenheitsecurity.com/post/is-wandsworth-safe — Wandsworth ~70/1k safest-inner-London framing
- [18] https://crimerate.co.uk/london/wandsworth — Wandsworth borough statistics
- [19] https://propertistics.co.uk/stats/wandsworth/battersea/nine-elms/crime/ — Nine Elms ward crime rate disclosure

---

### kings-cross — King's Cross

**Safety.** The King's Cross masterplan is the canonical Finding C case: Camden borough headline sits at ~172/1k (highest after Westminster), but the N1C masterplan interior is one of the calmest pieces of central London because Argent Estate Services fund supplementary stewardship, evening patrol, and evening-illuminated public realm through Coal Drops Yard, Granary Square and the canal-side walks [20]. The existing King's Cross data entry in the dataset already captures this. The genuine T1.1 caveat is the station-fringe geometry: Caledonian Road, Pentonville Road, and the Euston Road approach are materially rougher than the masterplan core, with visible rough sleeping, occasional drug activity and the kind of late-night street feel that is recognisably uglier than the interior. The Camden borough violence figures are primarily driven by these very streets plus Camden Town (not King's Cross masterplan proper).

**T1 pass/fail call.** **PASS on all six rows.** Gold standard. T1.1 pass via masterplan interior + Argent stewardship; T1.2–T1.6 all strong. This is the pass-call other areas are measured against.

Confidence: **high**.

Sources:
- [20] https://www.met.police.uk/sd/stats-and-data/met/crime-data-dashboard/ — Met Police crime data dashboard (Camden ward-level search: St Pancras & Somers Town)
- [2] https://www.timeout.com/london/news/revealed-the-london-boroughs-with-the-highest-and-lowest-crime-rates-012625 — Camden ~172.4/1k headline context

---

### nine-elms — Nine Elms

**Safety.** The ward's absolute crime rate (~344/1k per one aggregator source, driven by a tiny residential denominator and heavy US Embassy / New Covent Garden Market / construction-fringe daytime traffic) is an example of the Finding B (footfall-inflation) pattern [19]. The residential BTR masterplan interior (Embassy Gardens Way of Life, Riverlight Quay, One Nine Elms, Bloom, Aykon London One) is meaningfully calmer than the ward figure. Lambeth/Wandsworth split means the ward statistics are weird: the Wandsworth side around Embassy Gardens is materially calmer than the Lambeth side toward Vauxhall Pleasure Gardens. The Vauxhall fringe carries the standard Lambeth-central concerns (phone snatching, ASB in the Gardens, late-night around the Royal Vauxhall Tavern area).

**T1 pass/fail call.** **PASS on T1.2–T1.6 cleanly, T1.1 marginal-pass with explicit caveat.** T1.1 passes for the residential BTR core by the same masterplan-stewardship logic that applies to King's Cross and BPS, but **fails outright for the walk toward Vauxhall after 10pm**. Synthesis should preserve this split. T1.3 is Northern Line extension dependent (two-station spur) and is explicitly flagged in the rubric as a T5.2 redundancy weakness, not a T1.3 fail.

Confidence: **medium** (ward data is clear, interpretation of the split is conventional but specific to source reading).

Sources:
- [19] https://propertistics.co.uk/stats/wandsworth/battersea/nine-elms/crime/ — Nine Elms ward absolute crime rate
- [21] https://www.met.police.uk/area/your-area/met/wandsworth/nine-elms/meetings-and-events/top-reported-crimes-in-this-area — Nine Elms SNT priorities

---

### canary-wharf — Canary Wharf / Wood Wharf

**Safety.** Tower Hamlets borough ~134/1k overall, ~22/1k violence-and-sexual-offences [22][23]. The Canary Wharf Group private estate has its own security force, pervasive CCTV, and the *lowest* reported crime rate of any Tower Hamlets ward — residents routinely describe feeling safe walking alone at night, and both operator (Vertus) and independent sources agree that the estate interior is one of the safest pieces of central London [23][24]. Wood Wharf inherits the same private-stewardship pattern; Ballymore and Vertus run supplementary concierge and security layers on top of the CWG perimeter. The ward-level Met data confirms the low absolute violent crime figure within the E14 postcode relative to neighbouring Whitechapel or Shadwell.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 a strong pass. T1.2–T1.6 all clean (Elizabeth Line, Jubilee, DLR redundancy; multiple operators; ongoing delivery). Gold-standard safety case after King's Cross.

Confidence: **high**.

Sources:
- [23] https://www.fahrenheitsecurity.com/post/is-tower-hamlets-safe — Tower Hamlets ~99/1k Canary Wharf lowest within borough
- [24] https://www.canarydevelopment.com/how-safe-is-canary-wharf/ — CWG estate security framing (non-independent; cited for framing)
- [22] https://scos.co.uk/crime-rate/tower-hamlets/ — Tower Hamlets 134/1k borough stats

---

### white-city — White City

**Safety.** H&F borough ~142/1k overall, with Shepherd's Bush Green and Hammersmith Broadway the two wards generating the bulk of the borough's crime [25][26]. The White City Living / Imperial West / TVC masterplan is, however, **inside a different ward geometry** than Shepherd's Bush Green proper — it sits closer to East Acton tube and the Westway cluster than to the Shepherd's Bush nightlife fringe. H&F council's 2025 crime-focus statement explicitly names "Shepherds Bush Green, Hammersmith Broadway and Fulham" as the hotspots requiring weekly review [26]; TVC/White City Living is not in that hotspot list. Imperial College expansion and the Stanhope-led masterplan bring the usual stewarded-estate private-security pattern (Finding C).

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 PASS with an explicit "walk to Shepherd's Bush Green is rougher" caveat.** The White City Living estate interior is safe; the 8-minute walk south to the Green crosses a different safety regime. Synthesis should mark this as a T1.1 pass with the Shepherd's Bush Green fringe specifically named.

Confidence: **medium**.

Sources:
- [25] https://scos.co.uk/crime-rate/hammersmith-and-fulham/ — H&F ~142.6/1k borough figure
- [26] https://www.swlondoner.co.uk/news/23052025-crime-down-but-residents-still-dont-feel-safe — H&F council crime focus naming Shepherds Bush Green as hotspot

---

### elephant-park — Elephant Park

**Safety.** Southwark ~148/1k overall, with E&C historically rougher than the borough mean. The Elephant Park / Heygate-site interior is a textbook Finding C case: Lendlease-delivered masterplan with proactive stewardship and an **explicit dedicated 16-officer Met Police Town Centre Team** focused specifically on phone snatching, VAWG and ASB around Elephant & Castle and Walworth [27][28]. The SE16 Town Centre Team is the Met publicly acknowledging that the area needed supplementary policing — a simultaneous signal that the fringe is rough AND that the response is real. Park interior is materially calmer than the surrounding Walworth/Castle Square fringe; the E&C roundabout, the Walworth Road approach, and the historic Heygate-estate-era associations are all known rough geometries that persist in resident perception even as the park itself matures.

**T1 pass/fail call.** **PASS on T1.2–T1.6 cleanly, T1.1 PASS with explicit fringe caveat.** The Park interior passes; the walk toward E&C roundabout or Castle Square at night is noticeably rougher. Synthesis should preserve the split. T1.5 (public realm) is a strong pass inside the park, weaker at the Walworth Road fringe which is still in transition.

Confidence: **high**.

Sources:
- [27] https://southwarknews.co.uk/area/walworth/met-has-launched-dedicated-town-centre-team-in-elephant-and-castle-and-walworth/ — Southwark News: 16-officer Town Centre Team launch
- [28] https://www.ilivehere.co.uk/crime-statistics-southwark-walworth.html — Walworth ward crime data with E&C fringe context

---

### royal-wharf — Royal Wharf & Royal Docks

**Safety.** Newham ~137/1k overall, driven heavily by the Stratford/Canning Town/Plaistow corridor rather than the Royal Docks masterplan interior. Royal Wharf and the wider Ballymore Royal Docks footprint sit in the Custom House / Pontoon Dock ward area which is **structurally separated from the Canning Town rough fringe** by the DLR/A1020 and the Royal Victoria Dock. Newham borough is the **worst London borough for knife crime in 2025** (695 knife offences Jan–Oct) [9], but the knife crime map concentrates heavily around Stratford, Canning Town and West Ham rather than the masterplan interior. The Royal Docks environment is visibly quieter because it is still undergoing delivery — low footfall is a safety advantage and a T2/T3 disadvantage simultaneously.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 MARGINAL PASS.** The masterplan interior is acceptable; the walk across Canning Town or the eastern Royal Docks fringe carries genuine concern. The borough-level knife-crime headline is a real signal and synthesis should downgrade T1.1 here to "pass with concerns" rather than "clean pass".

Confidence: **medium**.

Sources:
- [9] https://www.london-now.co.uk/news/25723722.newham-london-borough-knife-crime-offences-2025/ — Newham 695 knife crime offences Jan–Oct 2025
- [15] https://www.newhamscp.org.uk/wp-content/uploads/2025/02/Newhams-Youth-Safety-Stragegy-2025-2028.pdf — Newham youth safety strategy

---

### kidbrooke-village — Kidbrooke Village

**Safety.** Kidbrooke Village & Sutcliffe ward crime rate is 128/1k per Crystal Roof, rated "medium crime level (5/10)" — materially above Croydon's 88/1k headline but driven primarily by theft and ASB rather than violent crime [29]. Greenwich borough sits at ~114.7/1k overall [8]; Kidbrooke Village is one of the *safer* geographies in the borough because it is a Berkeley-delivered masterplan with private stewardship and very low through-traffic. The ward name "Kidbrooke Village & Sutcliffe" specifically reflects that Berkeley's masterplan is the defining feature. Resident-voice reading (no primary citations found in the research window) is consistently that Cator Park and the village interior are very calm after dark — the quietness is actually the main T2/T3 critique of the area, not the safety.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass via Berkeley-masterplan stewardship. T1.2–T1.6 all clean except T1.3 which is moderate (Southeastern only, no tube — a T5 redundancy concern rather than a T1 fail).

Confidence: **medium-high**.

Sources:
- [29] https://crystalroof.co.uk/report/ward/kidbrooke-village-and-sutcliffe-greenwich/crime — Kidbrooke Village ward 128/1k figure
- [8] https://scos.co.uk/crime-rate/ — Greenwich borough context

---

### oval-village — Oval Village

**Safety.** Lambeth borough ~149/1k overall, one of the highest headlines in London [30]. Oval ward specifically is named in Lambeth's robbery-problem list [31] — Lambeth logged 1,751 robbery incidents in 2023 and the borough is 69% above the London average for robbery, concentrated around Clapham Town, Oval and St Leonards wards. The Oval Village / Berkeley former-Kennington-gasworks masterplan is *inside* the Oval ward so the ward headline does apply, but as a masterplan interior it benefits from the Finding C stewardship pattern. The walk to Oval tube (Victoria/Northern line) is across a mixed residential/commercial stretch that is average-central-London after dark but not notably rough.

**T1 pass/fail call.** **PASS on T1.2–T1.6 cleanly, T1.1 PASS with explicit borough-level robbery caveat.** Synthesis should record that Oval sits inside Lambeth's named-robbery hotspot trio and that the walk to the tube is on streets that carry the borough's robbery signature; mitigated but not eliminated by Berkeley masterplan stewardship.

Confidence: **medium**.

Sources:
- [30] https://scos.co.uk/crime-rate/lambeth/ — Lambeth 149.1/1k borough rate
- [31] https://www.fahrenheitsecurity.com/post/is-lambeth-safe — Lambeth robbery concentration naming Oval / Clapham Town / St Leonards

---

### brent-cross-town — Brent Cross Town

**Safety.** Barnet borough is **one of the top 5 safest boroughs in London** at ~65–72/1k (Barnet 72.0 in the ranked list) [32], comfortably below Croydon's ~88/1k. Colindale (the neighbouring ward, not Brent Cross Town itself) saw elevated ASB in 2023 per borough JSNA [33]. Brent Cross Town specifically is a Related Argent / L&Q masterplan still in delivery, which means the lived-experience safety is dominated by the construction-fringe rather than by ambient residential risk. Borough is a clean pass on headline, violent crime is well below the London average, and The Maple is the canonical lowest-price-floor BTR in the dataset and is being delivered in exactly the kind of low-ambient-crime outer-Barnet environment the rubric rewards.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 pass with high confidence — Barnet is one of London's safer boroughs by every headline measure. T1.2–T1.6 all pass; the only T1 concern is T1.3 (connectivity) which is Thameslink-dependent and is a T5.2 redundancy weakness rather than a T1 fail.

Confidence: **high**.

Sources:
- [32] https://open.barnet.gov.uk/joint-strategic-needs-assessment-2024/places/crime/ — Barnet JSNA borough crime profile
- [33] https://crimerate.co.uk/london/barnet — Barnet borough overview

---

### canada-water — Canada Water

**Safety.** Southwark borough ~148/1k overall [11]. Canada Water ward is the specific geography — Rotherhithe and Surrey Docks — and has been flagged in recent press as a **rising phone-snatching hotspot outside Canada Water station**, with Southwark council warning that the northern wards could be elevated to the borough's highest priority crime-area tier [34]. Southwark is the **third-worst London borough for phone snatching**, concentrated at Canada Water station [34]. This is a meaningful, specific, recent signal. The Roger-Madelin-led British Land masterplan interior benefits from the usual private-stewardship pattern but the Jubilee station concourse itself sits at a pinch point where phone-snatch-on-exit has become a routine concern.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 MARGINAL PASS.** Synthesis should record the station phone-snatch concern as a specific T1.1 caveat. The walk from the station to the dock side is short and well-lit; the risk is at the station interface itself, not in the residential interior. Not a T1.1 fail but not a clean pass either.

Confidence: **high** (on the phone-snatch signal specifically).

Sources:
- [34] https://southlondon.co.uk/news/no-police-hub-would-mean-a-gaping-hole-in-the-canada-water-community/ — South London Press: Canada Water phone snatch concentration, northern wards priority tier speculation
- [11] https://scos.co.uk/crime-rate/southwark/ — Southwark ~148.2/1k borough context

---

## New east-London candidates

### whitechapel — Whitechapel

**Safety.** Whitechapel ward crime rate is **167/1k in the last 12 months, 13.6% higher than the Tower Hamlets district average** [35]. The most common crimes are violence and sexual offences and ASB. Whitechapel's daytime footfall is dominated by the Royal London Hospital, the Elizabeth Line station, and the nearby Spitalfields/Brick Lane circuit, so some of the ward rate is Finding B (footfall-inflation) driven, but the residential experience is also noticeably rougher than King's Cross, Canary Wharf or Wembley Park by every anecdotal measure. Whitechapel Road itself is a historically rough high street.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 GENUINELY MARGINAL — CLOSE TO FAIL.** Whitechapel sits in the uncomfortable zone where the Elizabeth Line upgrade is real (T1.3 strong pass), the price point is attractive, the regeneration direction is right, but the ward-level crime headline is materially above Croydon and the walk from any BTR front door to the station is through geographies that carry the borough's violent-crime signature. My T1.1 call is **marginal pass with a strong caveat**: the area does not fail outright on the criterion as written (it is not worse than Croydon on overall crime) but it is **the closest a new candidate comes to failing in the inner-east cluster**.

Confidence: **high** (on ward data), **medium** (on the marginal-pass interpretation).

Sources:
- [35] https://crystalroof.co.uk/report/ward/whitechapel-tower-hamlets/crime — Whitechapel ward 167/1k figure

---

### aldgate — Aldgate East / Aldgate

**Safety.** Sits on the City of London / Tower Hamlets boundary. City of London has its own separate police force (not Met) and has one of the lowest resident-based crime rates in the UK because the resident population is tiny (~8k) while daytime population approaches 500k. The Aldgate Square / Goodman's Fields / Minories residential strip is inside the City for some addresses and Tower Hamlets for others; the split matters for policing coverage but both sides are materially calmer than Whitechapel ward because they sit on the central financial-district policing regime. Portsoken (the Aldgate ward on the Tower Hamlets side) is calmer than Whitechapel per Met ward data but still carries some of the borough's violence signature.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 passes cleanly on both sides of the boundary; the City side especially. Residential Caner-experience is very safe because continuous office footfall keeps the public realm populated into the evening, and the residential blocks (Goodman's Fields, Aldgate Place, Dorsett Square) sit inside stewarded developments with concierge-led access.

Confidence: **medium-high**.

Sources:
- [22] https://scos.co.uk/crime-rate/tower-hamlets/ — Tower Hamlets borough context
- [23] https://www.fahrenheitsecurity.com/post/is-tower-hamlets-safe — Tower Hamlets ward safety reading (Aldgate/Portsoken)

---

### shadwell — Shadwell

**Safety.** Shadwell ward logged **2,172 incidents in the 12 months to August 2025**, with ASB as the largest category followed by violent crime, and ranks #7 of the 10 nearest Tower Hamlets wards by crime score adjusted for deprivation [36]. The Met Police ward page for Shadwell shows ASB and violent crime as the persistent top-two priorities [37]. Cable Street, Commercial Road and The Highway carry specific historic rough-street associations that persist in current resident perception. This is one of the thinnest-margin T1.1 calls in the candidate list.

**T1 pass/fail call.** **T1.1 MARGINAL / LIKELY FAIL; pass on T1.2–T1.6.** Shadwell is the first candidate I would flag as **T1.1 not cleanly safer than Croydon**. The ward rate exceeds Croydon's overall rate, violent crime is the persistent top priority, and there is no masterplan-stewardship pattern to offset the public-realm reading. The Overground + DLR connectivity is genuine (T1.3 pass) but that does not rescue the T1.1 call. **Recommended T1 call: fail T1.1 OR marginal pass with strong dissent**; synthesis should treat this as my most explicit disqualification signal of the sweep.

Confidence: **high**.

Sources:
- [36] https://www.ilivehere.co.uk/crime-statistics-tower-hamlets-shadwell.html — Shadwell 2,172 incidents year-to-Aug-2025
- [37] https://www.met.police.uk/area/your-area/met/tower-hamlets/shadwell/ — Met Police Shadwell ward page showing ASB/violent-crime priorities

---

### wapping — Wapping

**Safety.** Wapping is the *calmest* residential ward in inner-east Tower Hamlets by a clear margin — a function of the dead-end riverside geometry (no through-traffic), the converted-warehouse Victorian street character, and the absence of any nightlife or daytime footfall generator inside the residential core. Tower Hamlets borough figures apply at the headline but ward-level reads materially below the borough average. The main concern is isolation after dark — Wapping is *quiet* in ways that can feel insecure when the street is empty, but the empty streets are empty because there is no reason for anyone else to be there, not because it has been abandoned.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 a strong pass. T1.2 pass (modern riverside stock exists — Wapping Wharf, Hermitage Basin conversions, newer Bellway/Berkeley infill). T1.3 is the one genuine weakness — Overground only (Wapping station on the ELL/Overground) plus a longer walk to Shadwell DLR. Not a T1.3 fail but it's the thinnest T1.3 case in the candidate list. T1.4–T1.6 all clean.

Confidence: **medium-high**.

Sources:
- [22] https://scos.co.uk/crime-rate/tower-hamlets/ — Tower Hamlets borough context
- [38] https://www.met.police.uk/area/your-area/met/tower-hamlets/st-katharines-wapping/ — Met Police St Katharine's & Wapping SNT page

---

### mile-end — Mile End

**Safety.** Mile End ward March 2025 data: 238 crimes, crime rate 0.89/1k (that month), with the top two categories ASB (70) and violence/sexual offences (55) [39]. Annualised, the ward tracks close to the Tower Hamlets borough average (~134/1k), well above Croydon overall but below Whitechapel and Shadwell. Queen Mary University campus is the dominant local generator of continuous footfall, which stabilises the public realm during term time, and Mile End Park is the calmest green spine. Mile End Road east toward Bow is rougher than the Grove Road / Park approach. Station fringe is a mixed picture — the Central/District/H&C interchange itself is fine, but the immediate post-exit street scene varies by time of day.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 MARGINAL PASS.** Passes because Queen Mary's continuous footfall and Mile End Park's linear calmness dominate the lived experience — it is not a known violent-crime hotspot in the way that Shadwell or Whitechapel are. Synthesis should record "acceptable but not clean".

Confidence: **medium**.

Sources:
- [39] https://www.ilivehere.co.uk/crime-statistics-tower-hamlets-mile-end.html — Mile End monthly crime statistics

---

### bow — Bow

**Safety.** Bow ward tracks the Tower Hamlets borough average closely — no specific hotspot identification in recent press, no named violent-crime concentration. Bow is the quieter residential cousin of Mile End and Bethnal Green, anchored by Roman Road market (daytime) and the Hertford Union Canal. Bow Church and Bow Road stations (District, H&C, DLR) are modest safety positives because continuous station footfall stabilises the surrounding blocks. Olympic Park eastern edge is the main T3 draw but is a T1-neutral factor.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 passes cleanly by the "no known concentration" reading. T1.2 pass (Bow Wharf + newer Poplar infill). T1.3–T1.6 clean.

Confidence: **medium**.

Sources:
- [22] https://scos.co.uk/crime-rate/tower-hamlets/ — Tower Hamlets borough context

---

### bethnal-green — Bethnal Green

**Safety.** Bethnal Green ward tracks the Tower Hamlets borough average. No specific recent violent-crime hotspot designation. The Bethnal Green Road market strip carries the usual East End high-street mix of busy daytime / quieter evening footfall. Bethnal Green tube (Central Line) has the same station-fringe calmness as most busy Central Line interchanges. Weavers Fields and Museum Gardens give the residential grain some green spine.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass. All other T1 rows clean. Young demographic skew is a T2.7 positive rather than a T1 consideration.

Confidence: **medium**.

Sources:
- [22] https://scos.co.uk/crime-rate/tower-hamlets/ — Tower Hamlets borough context

---

### bow-common-limehouse — Bow Common / Limehouse

**Safety.** Limehouse ward (the dock-side geography) is part of the broader Tower Hamlets profile and sits in the calmer southern fringe of the borough — lower absolute crime than Whitechapel or Shadwell, with the Met's Limehouse SNT treating ASB and residential burglary as routine priorities rather than flagging any specific violent-crime concentration [40]. Bow Common is further inland and reads slightly rougher than Limehouse proper — the Common itself and the Burdett Road corridor have persistent Reddit-level resident-voice concerns about evening safety.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 MARGINAL.** Limehouse side passes cleanly; Bow Common side is the concern. Not a fail but not a clean pass. The candidate-area list frames these two together, which is uncomfortable because they have meaningfully different T1.1 profiles.

Confidence: **medium**.

Sources:
- [40] https://www.limehouse.info/police-ward-panel.html — Limehouse Community Forum police-panel notes

---

### hackney-wick — Hackney Wick

**Safety.** Hackney borough ~145/1k overall, among the top 5 most dangerous on headline [41]. In **June AND July 2025 Hackney had the WORST burglary rate of any London borough** (206 in June, 213 in July) [41]. Hackney Wick ward itself is on the Olympic Park fringe — structurally separated from Hackney Central and Dalston (which are the borough's clubbing/ASB hotspots) by the A12. The Wick has the Finding C masterplan-edge pattern on the Olympic Park side; the Fish Island creative-industry stretch is thinner on private stewardship but the through-traffic is very low. Canal-side mugging concerns have been a persistent but low-frequency press signal historically.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 MARGINAL PASS.** Borough headline is bad but the ward itself is calmer than Dalston or Hackney Central, and the Olympic Park edge + stewarded masterplan fringe mitigate residential risk. Burglary concentration is a real concern for ground-floor flats specifically; less relevant for high-rise BTR. T1.1 pass with burglary caveat.

Confidence: **medium-high**.

Sources:
- [41] https://crimerate.co.uk/london/hackney — Hackney burglary-rate flag
- [42] https://www.met.police.uk/a/your-area/met/hackney/hackney-wick/ — Met Police Hackney Wick SNT page

---

### stratford-east-village — Stratford East (East Village)

**Safety.** Already addressed under `stratford` above. East Village is the Get Living BTR masterplan interior inside the Olympic Park boundary and benefits from the private-stewardship pattern (Finding C). Newham knife-crime headline (worst in London 2025, 695 offences Jan–Oct [9]) applies to the borough at headline level; the crimes concentrate around Stratford town centre, Canning Town and Plaistow rather than East Village interior. Get Living in-house referencing and security model is the operator-signal here (qualification-provider capture per brief: Get Living runs in-house referencing for East Village, no third-party provider).

**T1 pass/fail call.** **PASS on all six rows via masterplan interior.** T1.1 pass via Finding C stewardship + Olympic Park ward separation. Synthesis should be explicit that "East Village passes where Stratford town centre marginal-fails".

Confidence: **high**.

Sources:
- [9] https://www.london-now.co.uk/news/25723722.newham-london-borough-knife-crime-offences-2025/ — Newham 2025 knife crime stats
- [16] https://www.met.police.uk/area/your-area/met/newham/stratford-olympic-park/contact-us/our-priorities — Met Police Stratford Olympic Park ward team

---

### bow-east-three-mills — Bow East / Three Mills

**Safety.** Very thin ward-level data for this specific geography — it is a small post-industrial riverside fringe between Bow and Stratford. River Lea waterfront is quiet, mostly residential with the Three Mills studio complex as the only significant non-residential generator. No specific violent-crime hotspot designation surfaces in the research window. Newham borough knife-crime headline applies at borough level.

**T1 pass/fail call.** **PASS on all six rows, T1.1 unverified-pass.** Synthesis should note that ward data is thinner here than elsewhere and my T1.1 pass is driven by "no negative signal surfaced" rather than "positive evidence of safety". This is exactly the "honest silence vs omission" distinction the brief called out.

Confidence: **low**.

Sources:
- [9] https://www.london-now.co.uk/news/25723722.newham-london-borough-knife-crime-offences-2025/ — Newham borough knife-crime headline

---

### plaistow-west-ham — Plaistow / West Ham

**Safety.** Plaistow saw 1,194 incidents in October 2025, with violent crime the top category followed by vehicle crime [43]. Plaistow West scores 2–4/10 on ward-level crime neighbourhood maps (a relatively safer pocket inside Newham) [43]. West Ham ward has a crime rate of 89.1/1k — **36.5% lower than the Newham district average** — and ranks 8th of 24 wards in Newham [43][44]. So the two geographies read very differently: Plaistow West is genuinely one of the calmer Newham pockets, while other parts of Plaistow track the borough's violent-crime headline. West Ham ward is a material positive signal — very close to Croydon's 88/1k overall headline, meaningfully below on violent crime.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 PASS (borderline).** Plaistow West + West Ham ward specifically pass; other Plaistow fringe is marginal. Synthesis should mark this as a pass with explicit "only the named wards, not the whole Plaistow umbrella".

Confidence: **medium-high**.

Sources:
- [43] https://www.ilivehere.co.uk/crime-statistics-newham-plaistow.html — Plaistow crime statistics
- [44] https://streetscan.co.uk/crime/a/ward/west-ham/e05013927 — West Ham ward 89.1/1k figure

---

### stepney-green — Stepney Green

**Safety.** Stepney Green ward sits inside the rougher Tower Hamlets cluster — closer to Whitechapel and Shadwell than to Mile End or Wapping. Met Police Stepney Green SNT lists ASB and drug offences as persistent priorities. No single catastrophic signal in the research window but the ward shares the Whitechapel/Shadwell elevated-violence profile.

**T1 pass/fail call.** **T1.1 MARGINAL, possibly fail; T1.2–T1.6 pass.** Stepney Green is in the same T1.1 bucket as Shadwell — a genuine close call, and synthesis should weight my contribution here as "do not pass cleanly, likely fail under the Caner-experience reading of T1.1".

Confidence: **medium**.

Sources:
- [22] https://scos.co.uk/crime-rate/tower-hamlets/ — Tower Hamlets borough context

---

## New north-east London candidates

### hackney-central — Hackney Central

**Safety.** Hackney borough burglary worst-in-London (June/July 2025) [41]. Hackney Central ward sits in the borough's denser retail/residential core; Mare Street and Broadway Market carry continuous footfall that stabilises daytime safety but the nightlife cluster through Shoreditch/Dalston/Haggerston is a meaningful ASB generator that affects Central on event nights. Hackney as a borough hosted ~13,000 thefts and ~8,400 violent offences in the past year [45]. The Hackney Central Overground station area is lively but manageable; the walk through to the London Fields side can be rougher after 11pm on weekends.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 MARGINAL PASS.** Borough headline and burglary concentration are real signals; the ward itself passes on balance but nowhere near cleanly.

Confidence: **medium**.

Sources:
- [41] https://crimerate.co.uk/london/hackney — Hackney burglary rate, borough figures
- [45] https://londonlocalite.com/is-hackney-safe/ — Hackney theft/violent-offence annual totals

---

### dalston — Dalston

**Safety.** Dalston is explicitly named in national press as a **mugging, drug crime and vehicle-theft concentration** in Hackney's nightlife belt [45]. Kingsland High Street carries persistent late-night ASB driven by the clubbing cluster. The busier areas are reportedly fine because of footfall, but the side-street walk home post-2am is one of the longer-tail mugging-risk geometries in London. Dalston Junction and Dalston Kingsland Overground stations see high phone-theft concentrations.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 MARGINAL — LEANING FAIL under the Caner-experience reading.** Nightlife cluster plus named mugging/drug-crime concentration means Dalston is closer to fail than pass. Caner's profile is explicitly not a clubbing profile, so he would not generate the risky walks the area is known for, but **T1.5 (quiet at night for residents) is a separate and harder concern** — and I note this as a T2.5 issue per the rubric, not T1.5. T1.1 marginal pass.

Confidence: **medium-high**.

Sources:
- [45] https://londonlocalite.com/is-hackney-safe/ — Dalston mugging/drug/vehicle-theft concentration (aggregated press reading)

---

### stoke-newington — Stoke Newington

**Safety.** Stoke Newington is the **calmest residential ward in Hackney by a clear margin** — Church Street, Clissold Park, the Rectory Road/Overground grain is family-leaning, daytime-oriented, and structurally separated from the Dalston/Shoreditch nightlife cluster. Met Police Stoke Newington SNT priorities focus on ASB and residential burglary rather than violent crime [46]. The borough's overall-rate headline applies but the ward sits in the lower half of the Hackney ward-crime league.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 pass with high confidence relative to the rest of Hackney. T1.2 pass (modern infill stock exists although thinner than Dalston). T1.3 pass (Rectory Road / Stoke Newington Overground). T1.4–T1.6 all clean.

Confidence: **high**.

Sources:
- [46] https://www.met.police.uk/area/your-area/met/hackney/stoke-newington/about-us/crime-map — Met Police Stoke Newington SNT page
- [41] https://crimerate.co.uk/london/hackney — Hackney borough context

---

### manor-house — Manor House / Finsbury Park

**Safety.** Finsbury Park ward crime rate is **307 per 1,000** per Crystal Roof — **rated 7/10 high crime level** [47]. This is a major signal. Manor House junction carries a persistent ASB-street-drinkers concentration [48]. The station interchange area has the standard tube-station-fringe phone-snatch profile. The ward is inflated by daytime Finsbury Park station / Seven Sisters Road footfall (Finding B partially applies) but the residential reading is still uncomfortable compared with the calmer north-west alternatives.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 MARGINAL — LEANING FAIL.** The 307/1k ward figure is one of the highest in the candidate list and is a clear above-Croydon signal on overall rate, and the Manor House junction ASB is a specific named geometry. **Recommended T1.1 call: fail OR marginal pass with strong dissent recorded.**

Confidence: **high**.

Sources:
- [47] https://crystalroof.co.uk/report/ward/finsbury-park-islington/crime — Finsbury Park ward 307/1k figure
- [48] https://en.wikipedia.org/wiki/Manor_House,_London — Manor House junction street-drinker ASB reading (aggregated)

---

### stamford-hill — Stamford Hill

**Safety.** Hackney borough headline applies. Stamford Hill is notably quiet and family-leaning due to the large Charedi Jewish community and the strong Sabbath observance in the residential core. Violent crime concentration is materially below the Hackney borough average in the ward. The main "concern" from Caner's perspective is demographic fit (T2.7 / personal-fit) rather than T1 safety.

**T1 pass/fail call.** **PASS on all six rows, T1.1 clean.** The candidate-list flags Stamford Hill as "needs a fit-check" for demographic reasons — that's a T2.7 / T5 question, not a T1 question. T1 is clean here.

Confidence: **medium**.

Sources:
- [41] https://crimerate.co.uk/london/hackney — Hackney borough context

---

### highbury — Highbury / Highbury & Islington

**Safety.** Islington borough ~127/1k overall [2], elevated by daytime central-Islington footfall (Finding B). Highbury ward itself is a quieter residential pocket around Highbury Fields — significantly calmer than Angel/King's Cross or the Old Street/Hoxton fringe. Highbury & Islington station (Victoria Line + Overground + National Rail) has the usual busy-hub phone-snatch profile but is otherwise well-lit and well-used.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 pass. Highbury Fields + the residential ward grain are notably calm.

Confidence: **medium-high**.

Sources:
- [49] https://crimerate.co.uk/london/islington — Islington borough context

---

### angel — Angel / Islington

**Safety.** Angel ward sits inside the Islington-central daytime-footfall bubble — the ward-headline is inflated (Finding B) by Upper Street retail and evening restaurant activity, but the residential experience is good by inner-central-London standards. Phone snatching around the Angel tube entrance is a consistent recent concern but not specifically worse than any other busy Zone 1 interchange.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass. All others clean. Solid central inner-London baseline with the usual phone-snatch caveat.

Confidence: **medium-high**.

Sources:
- [49] https://crimerate.co.uk/london/islington — Islington borough context

---

### old-street-hoxton — Old Street / Hoxton

**Safety.** Sits inside the same Hackney/Islington nightlife-adjacent cluster as Dalston, with the Shoreditch nightclub belt dominating ASB priorities. Old Street roundabout and the tech-city cluster are safe by day, mixed after midnight on weekends. Hoxton ward is slightly calmer than the Shoreditch-north fringe but still elevated.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 MARGINAL PASS.** Synthesis should treat this as closer to Dalston than to Highbury on the T1.1 axis. Not a fail but the nightlife/ASB generator is a real signal.

Confidence: **medium**.

Sources:
- [45] https://londonlocalite.com/is-hackney-safe/ — Shoreditch cluster crime profile context

---

### camden-town — Camden Town

**Safety.** Camden borough **~172/1k overall — second-highest in London after Westminster** [2]. Camden Town ward is inside the market/nightlife generator that produces most of the borough headline, though a very large share of that is tourist-footfall-inflated (Finding B applies strongly). The residential experience *around* the market is dominated by the noise/ASB of the market itself — meaning T2.5 (quiet at night) is the sharper disqualifier than T1.1 per se.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 PASS with explicit "but T2.5 fails" note.** The rubric's T1.1 concerns violence-crime experience; the rubric's T2.5 concerns residential-quiet-after-10pm. Camden Town fails T2.5 cleanly, but T1.1 is technically a pass on the Caner-reading — the violence figures are inflated by daytime tourism not residential street feel. The candidate as a whole is likely to fail the sweep on T2.5 rather than T1, and I flag this explicitly so synthesis can differentiate.

Confidence: **medium**.

Sources:
- [2] https://www.timeout.com/london/news/revealed-the-london-boroughs-with-the-highest-and-lowest-crime-rates-012625 — Camden 172.4/1k headline
- [50] https://www.police.uk/pu/your-area/metropolitan-police-service/camden-town/?tab=CrimeMap — Camden Town ward crime map

---

### kentish-town — Kentish Town

**Safety.** Kentish Town ward is the calmer residential cousin of Camden Town — materially quieter, with a real high street (NW5 butcher/baker/deli-independents pattern), less nightlife pressure, and similar Northern-line connectivity. Camden borough headline applies at headline; the ward itself is well inside the calmer half of the borough ward-crime distribution.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 pass with high confidence. A clean alternative to Camden Town for anyone wanting Camden connectivity without Camden's T2.5 problem.

Confidence: **medium-high**.

Sources:
- [2] https://www.timeout.com/london/news/revealed-the-london-boroughs-with-the-highest-and-lowest-crime-rates-012625 — Camden borough context

---

### tufnell-park — Tufnell Park

**Safety.** Islington-borough Tufnell Park ward is family-leaning residential, materially calmer than the Islington-central ward grouping. Met Police Tufnell Park SNT priorities are routine residential (ASB, burglary) with no specific violent-crime concentration [51]. Very quiet by inner-London standards.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 pass, with high confidence.

Confidence: **medium-high**.

Sources:
- [51] https://www.met.police.uk/area/your-area/met/islington/tufnell-park/about-us/top-reported-crimes-in-this-area — Met Police Tufnell Park SNT priorities

---

### archway — Archway

**Safety.** Islington north-end, Archway ward. Mixed reputation — the Archway junction itself carries ASB driven by the A1/Junction-Road traffic convergence. Not specifically named in borough hotspot press but carries the normal inner-north-London violent-crime signature. Not a catastrophic signal but not as calm as Tufnell Park or Highbury.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 MARGINAL PASS.** Acceptable but not clean. Synthesis should treat this as average-inner-London with a specific junction-ASB caveat.

Confidence: **low-medium**.

Sources:
- [49] https://crimerate.co.uk/london/islington — Islington borough context

---

### tottenham-hale — Tottenham Hale

**Safety.** Haringey borough crime is ~21% higher than London average per January 2026 figures [52]. Tottenham Hale ward specifically is a major bright-spot: in the 12 months to January 2025, **youth violence fell 40% (from 52 to 31 incidents), knife crime fell 15% (from 73 to 62 incidents)** [53]. The Met and Haringey council explicitly credit the Tottenham Hale regeneration programme and targeted weapon sweeps. Tottenham Hale is therefore an ascending-trajectory area on T1 specifically — and the 2025 rate improvements are recent enough to matter for Caner's decision window. Broader Tottenham (around Seven Sisters and Tottenham High Road) remains rougher.

**T1 pass/fail call.** **PASS on T1.2–T1.6, T1.1 PASS (with positive trajectory).** Actively improving faster than almost anywhere else in the candidate list, which is a meaningful trajectory signal for Caner's August 2027 horizon. Synthesis should record this as one of the stronger T1 positive trajectories in the sweep.

Confidence: **high**.

Sources:
- [52] https://crimerate.co.uk/london/haringey — Haringey borough crime context
- [53] https://www.minutes.haringey.gov.uk/documents/s150222/Haringey%20Crime%20and%20Violence%20Overview%20March%202025.pdf — Haringey council March 2025 Crime and Violence Overview naming Tottenham Hale 40% youth violence reduction and 15% knife crime reduction

---

## New north-London candidates

### kentish-town-west-gospel-oak — Kentish Town West / Gospel Oak

**Safety.** Quiet Overground-grain residential area on the Hampstead Heath edge. No specific violent-crime concentration in Camden ward data. Very calm by inner London standards — the lower end of the Camden borough ward crime distribution.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 pass. T1.2 is the only concern — limited modern BTR stock; mostly Victorian and Edwardian conversions. Pass but thin on the modern-rental axis.

Confidence: **medium**.

Sources:
- [50] https://www.police.uk/pu/your-area/metropolitan-police-service/ — Met Police Camden ward pages (ambient background)

---

### belsize-park — Belsize Park

**Safety.** Premium-leaning residential NW3 with Hampstead adjacency. Among the calmest inner-London wards. No specific violent-crime concentration; phone-snatch hotspots are near Chalk Farm rather than Belsize Park proper.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass with high confidence. T1.2 is again a structural concern (limited modern BTR — dominated by period conversions and premium owner-lease stock). Pass on technical reading.

Confidence: **medium-high**.

Sources:
- [2] https://www.timeout.com/london/news/revealed-the-london-boroughs-with-the-highest-and-lowest-crime-rates-012625 — Camden borough context

---

### west-hampstead — West Hampstead

**Safety.** West Hampstead ward recorded ~188 crimes in July 2025 (~1.81/1k for the month). In 2024 the ward total was 1,257 crimes versus the Camden average of 2,779 — **materially below the Camden borough average** [54]. Top two categories are ASB and shoplifting rather than violent crime.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 pass with high confidence. T1.3 is a standout strength — Jubilee + Thameslink + Overground + Metropolitan (via Finchley Road) gives this area one of the best multi-line redundancy profiles in the candidate list. This should be Caner's short-list shortlist.

Confidence: **high**.

Sources:
- [54] https://crystalroof.co.uk/report/ward/west-hampstead-camden/crime — West Hampstead ward crime data

---

### kilburn — Kilburn

**Safety.** Kilburn is named in the Safer Brent Partnership 2024–25 annual report as one of the borough's consistent crime hotspots alongside Wembley and Harlesden [55]. Knife crime and violent crime concentration are identified priorities. Brent borough is ~95/1k overall (below London average) but the specific Kilburn concentration pulls the local reading well above Brent headline.

**T1 pass/fail call.** **T1.1 MARGINAL — leaning fail; T1.2–T1.6 pass.** Kilburn is named-hotspot by the council's own annual report, which is the single strongest flag possible. Synthesis should treat this as a likely T1.1 fail.

Confidence: **high**.

Sources:
- [55] https://democracy.brent.gov.uk/documents/s147314/06a+Appendix+1+-+Safer+Brent+Partnership+Annual+Report+2024-25.pdf — Safer Brent Partnership Annual Report 2024–25 naming Kilburn as hotspot

---

### cricklewood — Cricklewood

**Safety.** Per Safer Brent Partnership 2024–25 report, **reductions were seen in Cricklewood & Mapesbury in 2024** [55]. Cricklewood is borderline Barnet/Brent, with Barnet's ~65/1k borough safety profile applying on the Barnet side and Brent's ~95/1k applying on the Brent side. Overall reading is calmer than Kilburn, with specific trajectory-positive framing in the Brent report. Cricklewood Broadway carries some retail-fringe decline which is a T1.6 concern rather than T1.1.

**T1 pass/fail call.** **PASS on all six rows, T1.1 clean pass.** T1.6 (not in decline) is the thinner call here — Cricklewood Broadway has had persistent retail decline framing in local press, and the T1.6 axis is genuinely marginal. I call T1.6 as a "pass with concern" rather than a fail.

Confidence: **medium**.

Sources:
- [55] https://democracy.brent.gov.uk/documents/s147314/06a+Appendix+1+-+Safer+Brent+Partnership+Annual+Report+2024-25.pdf — Brent annual report naming Cricklewood & Mapesbury improvement

---

### maida-vale — Maida Vale

**Safety.** Westminster borough headline is the highest in London (~350/1k) but inflated heavily by Oxford Street / Soho / West End daytime footfall (Finding B applies stronger here than anywhere else in the sweep). The Maida Vale residential ward itself reads **much calmer than the Westminster headline suggests** — October 2024 top crimes ASB (33), violence/sexual (26), vehicle (9) [56]. The area is described as "one of West London's most sought-after locations with lower crime rates" [56], with vehicle theft and burglary below Kilburn or Brixton.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 pass. Canal-side calm + Bakerloo connectivity. The Little Venice premium-leaning character makes this one of the cleanest T1 passes in NW London.

Confidence: **medium-high**.

Sources:
- [56] https://www.fahrenheitsecurity.com/post/is-maida-vale-safe — Maida Vale resident crime summary

---

### st-johns-wood — St John's Wood

**Safety.** Westminster borough headline applies in theory, residential reality is among London's most benign. The ward carries the usual premium-residential calm, anchored by Lord's, the embassies, and the low through-traffic NW8 grid.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass with high confidence. T1.2 is a structural concern — dominated by premium owner-lease rather than BTR. Not a T1.2 fail but the modern-rental option depth is thin.

Confidence: **medium-high**.

Sources:
- [2] https://www.timeout.com/london/news/revealed-the-london-boroughs-with-the-highest-and-lowest-crime-rates-012625 — Westminster borough context (for footfall-inflation framing)

---

### marylebone — Marylebone

**Safety.** Westminster borough headline applies, same Finding B caveat as Maida Vale and St John's Wood. Marylebone High Street is among the calmest central-London retail environments — very visibly stewarded, low ASB generation in the residential grain, continuous but controlled footfall.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 pass. T1.2 again a structural concern (mostly premium period stock and owner-lease, limited BTR). The dataset should carry Marylebone with an explicit T1.2 asterisk.

Confidence: **medium-high**.

Sources:
- [2] https://www.timeout.com/london/news/revealed-the-london-boroughs-with-the-highest-and-lowest-crime-rates-012625 — Westminster borough headline context

---

## New west-London candidates

### acton — Acton

**Safety.** Ealing borough crime rate ~87/1k, **below the London average and below Croydon's ~88/1k** [57]. Ealing town centre is a designated Tier 1 target in the 2025 Safer Streets Summer Initiative, with targeted crime reduction operations running June-September [57]. Acton ward is calmer than Ealing Broadway and Southall, though it shares the borough-level violence and phone-theft patterns. North Acton (covered separately) carries the construction-site rough-fringe pattern for the in-delivery BTR cluster.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 pass — Ealing borough rate is below Croydon. T1.2–T1.6 all clean, with T1.3 an explicit strength (Elizabeth + Central + District + Overground).

Confidence: **medium-high**.

Sources:
- [57] https://ealing.news/news/police-boost-to-fight-crime-in-ealing-town-centre/ — Ealing Safer Streets Summer Initiative framing

---

### ealing-broadway — Ealing Broadway

**Safety.** Ealing Broadway is a named crime hotspot per the 2025 Safer Streets Summer Initiative [57]. Ealing had the **worst ASB crime rate in London in October 2025** with 1,124 crimes reported [57]. Vodafone and O2 introduced locked-door retail policies in Ealing Broadway centre in response to organised-gang thefts [57]. Borough rate is below Croydon but Ealing Broadway the town-centre location has a real, recent, specific ASB signal.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 MARGINAL PASS.** Acceptable because the violent-crime experience is still below Croydon's, but the ASB headline is a meaningful T1.4 concern specifically. Marking as "pass with T1.4 caveat explicit" — closer to Ealing Broadway *town centre* proper than to residential Ealing.

Confidence: **medium-high**.

Sources:
- [57] https://ealing.news/news/police-boost-to-fight-crime-in-ealing-town-centre/ — Safer Streets targeting Ealing Broadway
- [58] https://theviewfromw5.substack.com/p/ealing-broadway-target-summer-crime-crackdown — Further Ealing Broadway crime-framing

---

### hammersmith — Hammersmith

**Safety.** Hammersmith Broadway is one of the two named crime hotspots in H&F [26] (the other being Shepherd's Bush Green). H&F borough ~142/1k overall. The ward contains Hammersmith station, the riverside, and the Hammersmith Bridge reconstruction site. Borough is running targeted weekly-review operations in Broadway specifically [26]. This is a real signal, but like Camden Town and Ealing Broadway it is strongly Finding B influenced (the station+retail footfall inflates the ward-denominator).

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 MARGINAL PASS.** Hammersmith Broadway proper has a genuine named-hotspot signal; the residential streets south toward Fulham Palace Road are calmer. Synthesis should split the call and record "hotspot at Broadway, calmer at residential grain".

Confidence: **medium-high**.

Sources:
- [26] https://www.swlondoner.co.uk/news/23052025-crime-down-but-residents-still-dont-feel-safe — H&F council naming Hammersmith Broadway as hotspot

---

### shepherds-bush — Shepherd's Bush

**Safety.** Shepherd's Bush Green is H&F's top crime hotspot — knife crime is specifically concentrated at Shepherds Bush Green and Hammersmith Broadway, and H&F council has explicitly named these as weekly-review priorities [26]. Residents report feeling increasingly unsafe in Shepherd's Bush with ASB rising despite borough crime falling [26]. 20 new motion-sensor lights + 35 upgraded 360-degree CCTV cameras have been deployed at Shepherds Bush Green specifically [26].

**T1 pass/fail call.** **T1.1 MARGINAL — leaning fail; T1.2–T1.6 pass.** The ward is named-hotspot for knife crime AND has explicit council infrastructure response. The council's own admission that residents feel less safe even as statistics improve is a meaningful T1.4 (ASB hotspot) and T1.5 (public realm) signal. Recommended call: **T1.1 pass-with-strong-caveat OR fail** — this is a close call and I lean fail under the Caner-experience reading of T1.1.

Confidence: **high**.

Sources:
- [26] https://www.swlondoner.co.uk/news/23052025-crime-down-but-residents-still-dont-feel-safe — SW Londoner naming Shepherds Bush Green hotspot, CCTV upgrade

---

### notting-hill — Notting Hill

**Safety.** K&C borough headline ~145–191/1k depending on source [3] — inflated by retail and tourism footfall (Finding B applies strongly). Notting Hill Gate shoplifting was specifically flagged in the 2025 K&C scrutiny committee minutes as a rising concern [59]. Residential Notting Hill (off the Portobello/Westbourne Grove tourist spine) is significantly calmer than the ward headline.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass (residential reading). Shoplifting concentration is a specific T1.6 concern (retail decline signal) but doesn't materially affect Caner's safety experience.

Confidence: **medium-high**.

Sources:
- [3] https://crimerate.co.uk/london/kensington-and-chelsea — K&C borough context
- [59] https://www.rbkc.gov.uk/newsroom/earls-court-project-clamps-down-crime-and-anti-social-behaviour — K&C crime response framing

---

### chelsea — Chelsea

**Safety.** K&C borough headline applies, strongly Finding B inflated. Residential Chelsea (Chelsea Embankment, the side-streets off King's Road, World's End) is one of the calmest pieces of central London — premium residential character, high private-security density, low through-traffic.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass with high confidence. T1.2 again structurally thin (owner-lease and private-rental-landlord dominated; limited BTR).

Confidence: **medium-high**.

Sources:
- [3] https://crimerate.co.uk/london/kensington-and-chelsea — K&C borough context

---

### south-kensington — South Kensington

**Safety.** Museums quarter + Imperial College cluster = very high stewarded footfall (Finding B + Finding C combine). Residential experience very calm, equivalent to Chelsea. K&C borough headline applies in theory; ward reality is among the safest central-London residential grids.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 pass. T1.2 structurally thin as with Chelsea/Marylebone/St John's Wood.

Confidence: **medium-high**.

Sources:
- [3] https://crimerate.co.uk/london/kensington-and-chelsea — K&C borough context

---

### earls-court — Earl's Court

**Safety.** Earl's Court ward saw **crime fall 1.6% year-on-year** through the April 2024 – March 2025 window, inside a borough-level 2.6% fall [59]. Targeted Met operations between October 2024 and April 2025 produced 37 arrests for drug supply, violent crime and bail breaches [59]. The K&C Street Enforcement Team does daily patrols of the ward and the Safer Neighbourhood Team applies for resource-transfer from other wards for "ward a month" reviews. This is an actively-policed recovering area, in the early stages of a major regeneration (Earl's Court masterplan coming online). T1.1 picture is solidly acceptable and trajectory is positive.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass with positive trajectory. T1.6 pass explicit — regeneration is a clear direction signal for 2027.

Confidence: **high**.

Sources:
- [59] https://www.rbkc.gov.uk/newsroom/earls-court-project-clamps-down-crime-and-anti-social-behaviour — K&C council Earl's Court crime-clampdown news release
- [60] https://rbkc.moderngov.co.uk/committees/documents/s26072/5.%20EARLS%20COURT%20REPORT%20OSC%2011%20JUNE%202025%20_.pdf — K&C Overview & Scrutiny report June 2025

---

### fulham-broadway — Fulham Broadway / Fulham

**Safety.** Part of the H&F borough hotspot list ("Shepherds Bush Green, Hammersmith Broadway and Fulham") per council statements [26]. Fulham is the calmest of the three, with the hotspot footprint concentrated on the Fulham Road/Fulham Broadway station vicinity. Residential Parsons Green / Sands End / Putney Bridge fringe is notably calmer than the Broadway proper.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass — less concerning than Shepherd's Bush. Station-fringe ASB is a caveat. Synthesis should note that the Fulham hotspot designation is real but the residential grain is acceptable.

Confidence: **medium**.

Sources:
- [26] https://www.swlondoner.co.uk/news/23052025-crime-down-but-residents-still-dont-feel-safe — H&F council naming Fulham alongside SB and Hammersmith

---

### pimlico — Pimlico

**Safety.** Westminster borough headline (~350/1k) applies; heavily Finding B inflated. Pimlico the residential grid is among the calmest premium-central-London wards, with the Dolphin Square / Churchill Gardens / Tate Britain riverside character. Very low violent-crime residential experience.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 pass with high confidence. T1.2 again structurally thin.

Confidence: **medium-high**.

Sources:
- [2] https://www.timeout.com/london/news/revealed-the-london-boroughs-with-the-highest-and-lowest-crime-rates-012625 — Westminster headline context

---

## New south-London candidates

### bermondsey — Bermondsey

**Safety.** Southwark borough ~148/1k overall; Bermondsey ward is generally in the calmer half of the borough — strong residential character along Bermondsey Street, Maltby Street, and the St Saviour's grid. The northern Southwark-wards phone-snatch concern (per the Canada Water entry) is a mild adjacent concern but the ward is not named as a specific hotspot. Jubilee line station area has the usual phone-snatch-at-Zone-1-station caveat.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 pass. One of the cleanest T1 passes in inner-south London.

Confidence: **medium-high**.

Sources:
- [11] https://scos.co.uk/crime-rate/southwark/ — Southwark borough context
- [34] https://southlondon.co.uk/news/no-police-hub-would-mean-a-gaping-hole-in-the-canada-water-community/ — Southwark northern-ward concern (adjacent)

---

### surrey-quays-rotherhithe — Surrey Quays / Rotherhithe

**Safety.** Southwark phone-snatch concern concentrated at Canada Water station (per the Canada Water entry [34]). Surrey Quays shopping centre and the Overground station are the ward's daytime generators. Rotherhithe residential (southern dock peninsula) is very calm — dead-end street geometry keeps through-traffic near zero. T1.1 passes on the residential grain but the station-interface concern is a real caveat.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 PASS with station-phone-snatch caveat.** Same reading as Canada Water.

Confidence: **medium-high**.

Sources:
- [34] https://southlondon.co.uk/news/no-police-hub-would-mean-a-gaping-hole-in-the-canada-water-community/ — Southwark northern-ward phone snatch concentration

---

### borough-london-bridge — Borough / London Bridge

**Safety.** Southwark borough headline applies but **London Bridge and West Bermondsey ward is heavily stewarded** by virtue of station footfall, Bridge-Theatre/Tate-Modern/Bankside footfall, and continuous daytime commercial activity. Finding B/C combine. Phone theft around London Bridge station itself is the standard Zone-1-interchange concern. Residential experience is very good — Borough Market, the medical-school cluster, and the Guy's Hospital footprint keep the grain populated at all hours.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass. Strong T1.3 and T1.5.

Confidence: **high**.

Sources:
- [61] https://www.met.police.uk/area/your-area/met/southwark/london-bridge-and-west-bermondsey/contact-us/our-priorities — Met Police London Bridge & West Bermondsey SNT priorities

---

### vauxhall — Vauxhall (separate from Nine Elms)

**Safety.** Lambeth borough ~149/1k headline [30]. Vauxhall ward is a persistent Lambeth rough-geometry fringe: Kennington Lane / South Lambeth Road / the pleasure-gardens perimeter carry ASB concentration after dark, and the gay-nightlife cluster (Royal Vauxhall Tavern, Fire) is a known Saturday-night concentration point for minor violence and drug offences. Transport-hub character (Victoria + Northern + bus interchange) means Finding B applies, but the residential reading is still meaningfully above Caner's comfort line.

**T1 pass/fail call.** **T1.1 MARGINAL — leaning fail; T1.2–T1.6 pass.** Vauxhall is in the uncomfortable Lambeth cluster. **Recommended: T1.1 marginal pass with strong fail-dissent recorded.**

Confidence: **medium-high**.

Sources:
- [30] https://scos.co.uk/crime-rate/lambeth/ — Lambeth 149.1/1k borough rate
- [31] https://www.fahrenheitsecurity.com/post/is-lambeth-safe — Vauxhall context in Lambeth's rough-geometry framing

---

### stockwell — Stockwell

**Safety.** **South Stockwell has been called "shot hole" in the press for gun-crime concentration** [31]. This is the single sharpest violent-crime nickname in the entire candidate list. Stockwell ward carries a named, documented violent-crime concentration — the candidate list's "needs T1" flag is correct: Stockwell very likely **fails T1.1**.

**T1 pass/fail call.** **FAIL T1.1 — likely; T1.2–T1.6 pass.** Strongest explicit fail call of the sweep. Synthesis should record this as a clear T1.1 disqualification unless another agent brings contradicting primary-source data.

Confidence: **high**.

Sources:
- [31] https://www.fahrenheitsecurity.com/post/is-lambeth-safe — South Stockwell "shot hole" press reference

---

### brixton — Brixton

**Safety.** Lambeth ~149/1k headline. Brixton Windrush ward has the **highest crime volume in the borough** with ASB (960 cases, 27%) and violence/sexual (708, 20%) as top categories [62]. Brixton North has 692 cases (26%) of violence and sexual offences — **the highest proportion of any ward in the local area** [62]. Brixton's 32.7 violent crimes / 48.2 property crimes per 1,000 is well above the London average [62]. The area has strong cultural identity and T3/T4 appeal, but the T1.1 picture is genuinely uncomfortable.

**T1 pass/fail call.** **T1.1 MARGINAL — leaning fail; T1.2–T1.6 pass.** Brixton is a classic case of an area where T3/T4 strengths collide hard with T1.1 concerns. My T1.1 call is marginal-fail under the Caner reading; synthesis should preserve the dissent explicitly because other agents will likely push for a pass on cultural-identity grounds.

Confidence: **high**.

Sources:
- [62] https://londonstays.net/brixton-crime-rates-what-you-need-to-know/ — Brixton ward-level crime data
- [30] https://scos.co.uk/crime-rate/lambeth/ — Lambeth borough context

---

### clapham-common — Clapham Common

**Safety.** Clapham Town is specifically named in Lambeth's rough-geometry / robbery concentration list alongside Oval and St Leonards [31]. The Clapham nightlife cluster is a major evening footfall generator and the weekend ASB signature is real. Residential experience in the quieter SW4 grid away from the High Street is notably calmer but still inside the Lambeth-central robbery-concentration ring. Clapham Common the park itself is fine by day and patchy after dark.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 MARGINAL PASS.** Close to Vauxhall on the scale — acceptable but not clean. T2.5 (quiet at night) is a clearer fail than T1.1 per se.

Confidence: **medium-high**.

Sources:
- [31] https://www.fahrenheitsecurity.com/post/is-lambeth-safe — Clapham Town naming in Lambeth robbery concentration

---

### tooting — Tooting

**Safety.** Wandsworth ~70–103/1k — one of the safer inner-south London boroughs [17]. Tooting ward sits in the calmer half of the borough, with Tooting Broadway and Tooting Bec as distinct residential centres. Tooting Market is the area's defining daytime anchor, with a notably family-friendly residential grain. No specific violent-crime concentration or hotspot designation.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 clean pass (Wandsworth is one of the safer inner-London boroughs, materially below Croydon headline).

Confidence: **high**.

Sources:
- [17] https://www.fahrenheitsecurity.com/post/is-wandsworth-safe — Wandsworth ~70/1k safest-inner-London reading
- [18] https://crimerate.co.uk/london/wandsworth — Wandsworth borough stats

---

### wandsworth-town — Wandsworth Town

**Safety.** Wandsworth Town ward inherits the borough's safer-than-average profile. Ram Quarter (Greenland/Savills residential delivery) and the Wandsworth Riverside regeneration footprint benefit from the masterplan-stewardship pattern. No specific concentrated violent-crime signal. Wandsworth Town station is a quiet Southwestern hub, not a phone-snatch magnet.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 clean pass.

Confidence: **medium-high**.

Sources:
- [18] https://crimerate.co.uk/london/wandsworth — Wandsworth borough stats

---

### battersea-park — Battersea Park / Battersea

**Safety.** Wandsworth borough safety profile applies. Battersea Park ward (distinct from Nine Elms) is calmer still — low ambient crime, park-adjacent residential grain, little nightlife pressure. Queenstown Road / Battersea Park station as the main interchange with no concerning fringe issues.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 clean pass.

Confidence: **high**.

Sources:
- [18] https://crimerate.co.uk/london/wandsworth — Wandsworth borough stats

---

### clapham-junction — Clapham Junction

**Safety.** Clapham Junction is **the UK's busiest rail interchange** (~2,000 trains/day), so Finding B footfall-inflation applies stronger than almost anywhere else in the sweep. The ward itself sits on the Wandsworth side — safer-than-average borough. The high-footfall geometry produces theft and public disorder concentrations at the station [63] but crime-levels are **stable month-over-month** per the Clapham Junction Action Group December 2024 report, with monthly totals 150–200 incidents — below the weekly fluctuation of most central-London wards [63].

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 pass. Station concentration is a Finding B caveat not a fail.

Confidence: **medium-high**.

Sources:
- [63] https://www.cjag.org/2024/12/13/report-about-crime-in-clapham-junction-area-and-safer-neighbourhood-police/ — Clapham Junction Action Group December 2024 crime report
- [18] https://crimerate.co.uk/london/wandsworth — Wandsworth borough context

---

### earlsfield — Earlsfield

**Safety.** Wandsworth ward, calm residential character, Wandsworth Common proximity, no specific hotspot designation. One of the more anonymous candidates in the list — "no negative signal surfaced" is the honest reading.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass. T1.2 is the thinnest call — modern BTR stock is very limited, the area is dominated by Victorian terraces and 2-up-2-down period stock. Not a T1.2 fail but thin.

Confidence: **medium**.

Sources:
- [18] https://crimerate.co.uk/london/wandsworth — Wandsworth borough context

---

### streatham — Streatham

**Safety.** Lambeth borough ~149/1k headline applies. Streatham / Streatham Common are identified as **calmer parts of the borough** per the Lambeth safety framing [31][30]. Street-level experience along Streatham High Road is mixed — the retail strip carries normal high-street ASB — but the ward overall sits in the calmer half of the Lambeth ward-crime distribution. The candidate-areas list's T1.1 flag is worth taking seriously because Lambeth borough is one of the highest-headline south-London boroughs, but the specific ward reality is less sharp than the headline implies.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 MARGINAL PASS.** Acceptable by the ward-level reading, shaky by the borough-level reading. Marking as pass with explicit borough caveat.

Confidence: **medium**.

Sources:
- [31] https://www.fahrenheitsecurity.com/post/is-lambeth-safe — Lambeth framing noting Streatham / Herne Hill as calmer
- [30] https://scos.co.uk/crime-rate/lambeth/ — Lambeth borough 149.1/1k

---

### peckham — Peckham

**Safety.** Peckham has the **North Peckham estate, historically among the most impoverished in London and named as a gang-violence breeding ground (Peckham Boys, Ghetto Boys)** with documented shootings and stabbings [64]. This is a primary-source-equivalent aggregated press reference naming specific gang infrastructure. Peckham ward carries a violent-crime concentration that is materially above the Southwark borough average, and the borough itself is already ~148/1k.

**T1 pass/fail call.** **T1.1 MARGINAL — leaning fail; T1.2–T1.6 pass.** The named gang infrastructure and the specific violent-crime history are strong signals. Recommended: **T1.1 fail-call or strong-caveat marginal pass**. Peckham's T3 cultural identity is real and will push other agents toward a pass; my role here is to preserve the T1.1 dissent.

Confidence: **high**.

Sources:
- [64] https://www.planetdeadly.com/human/10-dangerous-boroughs-london — North Peckham estate + Peckham Boys / Ghetto Boys framing (aggregated press)
- [11] https://scos.co.uk/crime-rate/southwark/ — Southwark borough context

---

### camberwell — Camberwell

**Safety.** Camberwell is described as **"no more dangerous than other inner-city London districts like Brixton or Peckham"** in one aggregated source [65] — which is a mild statement only if Brixton and Peckham are your comparators, not Croydon. The area has specific-pocket violence concentration (Camberwell Green + Camberwell Road) and the evening reading is patchy. Southwark borough 148/1k.

**T1 pass/fail call.** **T1.1 MARGINAL — leaning fail; T1.2–T1.6 pass.** Same cluster as Peckham, Brixton, Walworth. **Recommended: T1.1 fail or strong-caveat marginal pass.**

Confidence: **medium-high**.

Sources:
- [65] https://londonstays.net/is-camberwell-safe-complete-2025-safety-guide/ — Camberwell safety framing

---

### walworth — Walworth

**Safety.** North Walworth Met Police ward page lists violent crime and ASB as persistent priorities [28]. Walworth Road is the named generator. June 2025: 1,831 incidents in the Elephant & Castle / Walworth area, with ASB and violent crime top categories [28]. The dedicated 16-officer Town Centre Team (per Elephant Park entry) is an acknowledgement that the area requires supplementary policing.

**T1 pass/fail call.** **PASS T1.2–T1.6, T1.1 MARGINAL PASS.** The Elephant Park side benefits from the Lendlease stewardship pattern but the Walworth Road core is rougher. Synthesis should note that **Walworth as a whole is closer to fail** than Elephant Park specifically is.

Confidence: **high**.

Sources:
- [28] https://www.ilivehere.co.uk/crime-statistics-southwark-walworth.html — Walworth crime statistics
- [27] https://southwarknews.co.uk/area/walworth/met-has-launched-dedicated-town-centre-team-in-elephant-and-castle-and-walworth/ — Southwark News Town Centre Team announcement

---

### new-cross — New Cross

**Safety.** Lewisham borough ~119/1k overall [66]. New Cross Gate ward crime maps show concentration along New Cross Road and Hatcham Park Mews [67]. Goldsmiths campus adjacency provides continuous daytime footfall. Violence and sexual offences and ASB are the top categories. This is a candidate where the T3 (young + creative + Goldsmiths) character is strong but T1.1 is uncomfortable.

**T1 pass/fail call.** **T1.1 MARGINAL — leaning fail; T1.2–T1.6 pass.** **Recommended: marginal pass with explicit concern.**

Confidence: **medium-high**.

Sources:
- [66] https://scos.co.uk/crime-rate/lewisham/ — Lewisham borough ~119.4/1k
- [67] https://police-uk.org/ward/New_Cross_Gate-crimes/E05013728/?district=E09000023 — New Cross Gate ward crime map

---

### deptford — Deptford

**Safety.** Deptford recorded 342 crimes in April 2025 within half a mile of Deptford High Street, with 93 violence-and-sexual-offences in the same window [68]. One aggregator frames **Deptford as the safest place in Lewisham district at 161 crimes per 1,000 (!) with a "very low" UK rating** [68] — this is a nonsensical pair of statements because 161/1k is not "very low". I cite this source with the caveat that its internal consistency is weak; the Deptford ward is not the safest in Lewisham, it is close to the borough average. Most crime concentrates near Deptford High Street and New Cross Road [68].

**T1 pass/fail call.** **T1.1 MARGINAL — leaning fail; T1.2–T1.6 pass.** Lewisham borough is comparable to Croydon on violent crime (~33/1k vs ~27/1k), and Deptford sits in the rougher half. Same Finding D cluster as Lewisham town centre, Catford.

Confidence: **medium**.

Sources:
- [68] https://www.streetcheck.co.uk/crime/se83nu — Deptford High Street crime data April 2025

---

### lewisham — Lewisham

**Safety.** Lewisham borough ~119.4/1k [66]. Lewisham Gateway regeneration is in active delivery. Lewisham Central / Lewisham town centre is busier than the surrounding residential wards, with the usual transport-hub phone-theft and ASB concentration at the station. Violent-crime level is above Croydon on the per-capita headline but below on the per-incident violent-with-injury headline. This is exactly the Finding D cluster — structurally similar to Croydon on crime-and-decline axes.

**T1 pass/fail call.** **T1.1 MARGINAL — leaning fail; T1.2–T1.6 pass.** Lewisham town centre is not the upgrade Caner is looking for. **Recommended: marginal pass with strong upgrade-test caveat** — it does not fail T1.1 outright but it fails the spirit of the criterion (close to what he's escaping).

Confidence: **medium-high**.

Sources:
- [66] https://scos.co.uk/crime-rate/lewisham/ — Lewisham borough context

---

### catford — Catford

**Safety.** Catford had 1,401 incidents recorded in October 2025 per one aggregated source [69]. Catford town centre has genuine public-realm decline (retail vacancy, 1960s civic architecture in poor condition) per a persistent press reading. Catford Bridge / Catford station are the busier fringes. This is the clearest Finding D cluster case — a candidate that is "technically in Lewisham not Croydon" but fails the upgrade test almost as cleanly as Crystal Palace or Honor Oak.

**T1 pass/fail call.** **T1.1 MARGINAL — leaning fail; T1.5 and T1.6 BOTH FAIL.** Catford is the first clear multi-row fail I'd flag: **T1.5 (public realm) fails explicitly because the town centre condition is visibly declined**, and **T1.6 (not in decline) fails because the high-street vacancy and town centre trajectory is flat-to-declining** despite council regeneration plans. T1.1 marginal; T1.5 fail; T1.6 fail.

Confidence: **medium-high**.

Sources:
- [69] https://www.ilivehere.co.uk/crime-statistics-lewisham-catford.html — Catford crime statistics
- [66] https://scos.co.uk/crime-rate/lewisham/ — Lewisham borough context

---

### crystal-palace — Crystal Palace

**Safety.** **Adjacent to Croydon geographically, and the candidate-areas list flags it as the sharpest upgrade test.** Crystal Palace & Anerley ward sits across three boroughs (Bromley/Lambeth/Croydon depending on specific postcode). Crime data is scattered. Residential Triangle area is calm, park-adjacent, and no specific violent-crime concentration exists. Honest reading: Crystal Palace is not an upgrade from Croydon on any meaningful dimension — same Outer-Zone-3/4 residential grain, same Overground-fringe isolation, same limited BTR depth, and the T1 *pass* is trivial but meaningless because Caner would be moving 3 miles north into essentially the same environment.

**T1 pass/fail call.** **PASS on all six rows technically, but the T1 pass is meaningless because this is not an upgrade.** Synthesis should record this honestly — T1 is a gatekeeper but the rubric is explicit that "not worse than Croydon" is the floor and "meaningfully better than Croydon" is the ceiling; Crystal Palace clears the floor but not the ceiling. T1.6 is the most relevant concern — the area is not in decline but it is also not on a rising trajectory.

Confidence: **medium**.

Sources:
- [70] https://propertistics.co.uk/stats/lewisham/lewisham-west-and-penge/crystal-palace-&-anerley/crime/ — Crystal Palace & Anerley ward crime stats

---

### forest-hill — Forest Hill

**Safety.** Forest Hill is described as one of the **quieter, lower-crime-rate parts of Lewisham**, with its residential character and Horniman Museum anchor [71]. Sydenham ward crime rate is 86/1k — rated "low crime level (4/10)" and "very low" in aggregator framing [72]. These are two meaningfully lower ward figures than Lewisham Central or Catford. The candidate passes T1.1 cleanly but runs into the same Finding D problem as Crystal Palace — it is not materially different from Croydon's quieter residential pockets.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 clean pass. The upgrade-vs-Croydon question is genuinely close; it passes the letter of T1.1 but synthesis should record the Finding D caveat explicitly.

Confidence: **medium-high**.

Sources:
- [71] https://crystalroof.co.uk/report/ward/forest-hill-lewisham/crime — Forest Hill ward data
- [72] https://crystalroof.co.uk/report/ward/sydenham-lewisham/crime — Sydenham ward 86/1k figure

---

### honor-oak-park — Honor Oak Park

**Safety.** Similar profile to Forest Hill — Overground, quiet residential, One Tree Hill park. Lewisham borough context. No specific hotspot. Same Finding D caveat.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 clean pass; synthesis should record Finding D upgrade-test caveat.

Confidence: **medium**.

Sources:
- [66] https://scos.co.uk/crime-rate/lewisham/ — Lewisham borough context

---

### sydenham — Sydenham

**Safety.** Sydenham ward 86/1k — one of the lowest Lewisham ward crime rates [72]. Overground connectivity, residential grain. Finding D caveat applies at the same intensity as Crystal Palace and Forest Hill.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 clean pass. Finding D caveat.

Confidence: **medium**.

Sources:
- [72] https://crystalroof.co.uk/report/ward/sydenham-lewisham/crime — Sydenham ward 86/1k figure

---

### herne-hill — Herne Hill

**Safety.** Herne Hill & Loughborough Junction ward: **127.5/1k — 14.3% LOWER than the Lambeth district average of 148.8/1k** [73]. Top crime category is violence and sexual offences (656 offences year-to-recent). **Robbery is the fastest-growing category at +35.4% YoY** [73]. This is a notable positive: in the context of Lambeth's borough headline, Herne Hill is clearly the calmer half. But the robbery trend is the wrong direction.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass, with robbery trajectory as a watchlist concern. T1.6 (not in decline) is a pass — the area is residential-stable despite the Lambeth headline.

Confidence: **medium-high**.

Sources:
- [73] https://streetscan.co.uk/crime/a/ward/herne-hill-loughborough-junction/e05014104 — Herne Hill & Loughborough Junction ward 127.5/1k and robbery +35.4% YoY

---

### dulwich-village — Dulwich Village

**Safety.** Dulwich Village is among London's calmest residential pockets — very leafy, very low through-traffic, private-road character in parts, Dulwich Picture Gallery as the only significant cultural generator. Southwark borough headline applies but ward reality is near-zero violent crime.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 clean pass with very high confidence. The concerns are T1.2 (limited modern BTR, mostly Victorian villas) and T1.3 (Southeastern/West Dulwich only, no tube).

Confidence: **high**.

Sources:
- [11] https://scos.co.uk/crime-rate/southwark/ — Southwark borough context

---

### west-dulwich — West Dulwich

**Safety.** Same profile as Dulwich Village but slightly cheaper and slightly less leafy. Quiet residential, Southeastern rail connection, no specific hotspot. Southwark borough context.

**T1 pass/fail call.** **PASS on all six rows cleanly.** T1.1 clean pass. T1.2 and T1.3 same thin-pass as Dulwich Village.

Confidence: **medium**.

Sources:
- [11] https://scos.co.uk/crime-rate/southwark/ — Southwark borough context

---

### nunhead — Nunhead

**Safety.** Calmer Southwark fringe — Nunhead Cemetery, Southeastern rail, no specific hotspot. The Peckham adjacency is the main concern but Nunhead proper sits to the south-east of the Peckham gang-violence footprint. Residential grain is calm.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass (clean at ward-level, with Peckham adjacency as a mild caveat).

Confidence: **medium**.

Sources:
- [11] https://scos.co.uk/crime-rate/southwark/ — Southwark borough context

---

## Other regeneration-zone candidates

### old-oak-common — Old Oak Common

**Safety.** Construction-site fringe currently — the HS2 station is still years from opening. Very low residential density, the area is dominated by construction compounds and industrial estate fringe. No T1.1 data worth citing at ward level because the residential population is too thin to generate meaningful crime statistics. No specific hotspot designation.

**T1 pass/fail call.** **PASS T1.1 (no negative signal), T1.5 MARGINAL (construction site is the public realm), T1.2 FAIL-CURRENT, T1.6 pass-on-trajectory.** This is the first candidate where the **T1.2 (modern rental stock present) is an outright fail in the present tense** — there is not yet any viable BTR operator in Old Oak Common proper, the deliverables are all future-dated around HS2 opening. The area belongs in a 2030+ dataset, not a 2026 one. Synthesis should record this as a T1.2 fail.

Confidence: **medium**.

Sources:
- [74] https://www.gov.uk/government/publications/old-oak-common-station — Old Oak Common station project page (ambient background)

---

### wood-green — Wood Green

**Safety.** Haringey borough ~21% above London average per January 2026 [52]. Wood Green has been subject to a "Week of Action" focused on crime and ASB [52]. The High Road retail strip is a designated ASB concentration with phone theft, shoplifting, and street ASB as the top priorities. Piccadilly Line connection is genuine (T1.3 pass) but the T1.1 and T1.4 reading is uncomfortable.

**T1 pass/fail call.** **PASS T1.2, T1.3, T1.6; T1.1 MARGINAL; T1.4 MARGINAL; T1.5 MARGINAL.** Three-row marginal is close to a fail cluster. **Recommended: T1 marginal overall, leaning fail.**

Confidence: **medium-high**.

Sources:
- [52] https://haringey.gov.uk/news/20251121/week-action-to-focus-west-green — Haringey council week-of-action naming Wood Green

---

### edmonton-green — Edmonton Green

**Safety.** This is the **single clearest T1.1 fail in the candidate list**. Edmonton Green crime statistics are explicit: **"High" overall crime level, 871 reported crimes per 1,000 residents in some StreetCheck sub-areas, 346 crimes in September 2025 within half a mile, 107 violence-and-sexual-offences in September 2025 alone** [75]. Ranking: **1st out of 24 most-dangerous areas in Enfield for 2024** [75][76]. Met Police Edmonton Green SNT priorities explicitly list **"Violence against the Person offences in Edmonton Green Shopping Centre, Sexual Offences on Fore Street, and Drug Activity in Barbot Close"** [76] — these are named streets with specific crime-type concentrations.

**T1 pass/fail call.** **FAIL T1.1 — clean fail.** This is the single most unambiguous T1.1 disqualification in the sweep. It is materially worse than Croydon on every measurable axis and the Met Police publishes the specific streets and specific crime concentrations on its own ward page. **Recommended: T1.1 fail + T1.4 fail + T1.5 fail — three-row T1 failure. Area should be eliminated.**

Confidence: **very high**.

Sources:
- [75] https://www.streetcheck.co.uk/crime/n90ta — Edmonton Green StreetCheck crime statistics
- [76] https://www.met.police.uk/area/your-area/met/enfield/edmonton-green/contact-us/top-reported-crimes-in-this-area — Met Police Edmonton Green SNT priorities naming specific streets

---

### north-acton — North Acton

**Safety.** Ealing borough ~87/1k (below London average). North Acton specifically is dominated by the Imperial Square / Oaklands / in-delivery BTR cluster; the area is still being built out, so residential ambient is low. Central Line station area. No specific violent-crime concentration surfaced. The construction-fringe rough-geometry is a T1.5 concern (public realm in disarray because half the blocks are in delivery) rather than a T1.1 concern.

**T1 pass/fail call.** **PASS T1.1–T1.4, T1.5 MARGINAL, T1.6 PASS.** T1.5 is a genuine ongoing concern — the public realm around the North Acton cluster is currently poor because of active construction, and will improve over the Caner visa horizon. Synthesis should record T1.5 marginal-pass on a trajectory basis.

Confidence: **medium**.

Sources:
- [57] https://ealing.news/news/police-boost-to-fight-crime-in-ealing-town-centre/ — Ealing borough context

---

### hayes-west-london — Hayes (West London)

**Safety.** Hillingdon borough ~81–121/1k depending on source, below London average per the council figure [77]. Hillingdon Council's **'Making Hayes Safer' community safety initiative achieved a 16% reduction in violent offences involving young people in Hayes since April 2025** and won the National Crimebeat Awards 2026 first place [77]. This is a strong positive trajectory signal — actively improving and explicitly recognised for it. Hayes is Elizabeth Line far-west but the data is clearly positive.

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass with explicit positive trajectory. T1.6 pass with clear improvement signal.

Confidence: **high**.

Sources:
- [77] https://pre.hillingdon.gov.uk/news/article/267/hayes-community-safety-project-wins-national-award — Hillingdon Council Making Hayes Safer award news

---

### southall — Southall

**Safety.** Southall postcode area: **36.6 crimes per 1,000 annual rate, 103% of national rate, violent crime 28.3% of all reports, violent crime up 9.1% YoY** [78]. **Drugs crime +66.2% YoY** [78]. **Vehicle crime 228% of national rate — 3rd in England/Wales by postcode** [78]. These are real signals. Southall has a very distinctive cultural identity (Punjabi/South Asian food and retail scene) which the T3 lens will value, but the T1.4 (not an ASB hotspot) reading is uncomfortable on current data.

**T1 pass/fail call.** **PASS T1.2, T1.3, T1.6; T1.1 MARGINAL; T1.4 MARGINAL; T1.5 PASS.** Two-row marginal cluster with drugs and vehicle crime the specific concerns. **Recommended: T1 marginal pass with explicit caveats**, not a clean pass.

Confidence: **medium-high**.

Sources:
- [78] https://www.plumplot.co.uk/Southall-violent-crime-statistics.html — Southall Plumplot crime statistics incl. drugs +66.2% and vehicle crime 228%

---

### woolwich — Woolwich

**Safety.** **Woolwich Arsenal ward is named as the most dangerous ward in Greenwich borough with 169 crimes per 1,000** [13]. Charlton Riverside & Woolwich Dockyard reports **214 crimes** in recent ward data, versus Eltham North's 20 crimes [14]. The Berkeley Royal Arsenal masterplan interior benefits from Finding C private stewardship but the Woolwich town centre / Plumstead approach is rougher. Met police priorities include reducing VAWG along the Thames Path. Multi-row T1 concern.

**T1 pass/fail call.** **T1.1 MARGINAL — leaning fail; T1.2–T1.6 pass.** Same split as Stratford — the Royal Arsenal masterplan interior passes T1.1 on Finding C grounds, Woolwich town centre fringe does not. **Recommended: marginal pass for Royal Arsenal specifically, fail for Woolwich town centre proper.**

Confidence: **high**.

Sources:
- [13] https://www.thisislocallondon.co.uk/news/23796339.greenwichs-dangerous-safest-neighbourhoods-revealed/ — Local London: Woolwich Dockyard Arsenal most dangerous Greenwich ward
- [14] https://crimerate.co.uk/london/greenwich — Greenwich borough context

---

### charlton-riverside — Charlton Riverside

**Safety.** Charlton Riverside & Woolwich Dockyard ward reports 214 crimes, one of the highest in Greenwich borough [14]. Regeneration is in early stages — the area is dominated by industrial-estate fringe and in-delivery housing. Similar to Old Oak Common, it belongs in a 2030+ dataset.

**T1 pass/fail call.** **T1.1 MARGINAL — leaning fail; T1.2 MARGINAL (early delivery only); T1.5 MARGINAL (construction fringe); T1.6 PASS.** Three-row marginal. **Recommended: T1 fail on current state, reconsider in 2028+.**

Confidence: **medium**.

Sources:
- [14] https://crimerate.co.uk/london/greenwich — Greenwich borough context

---

### surrey-docks — Surrey Docks

**Safety.** Adjacent to Canada Water and Surrey Quays; same Southwark northern-ward concerns (phone snatching at station) apply [34]. Dock-side geometry is very calm residentially but the Rotherhithe police-hub speculation per South London Press suggests the council is actively monitoring for elevation to higher-priority tier [34].

**T1 pass/fail call.** **PASS on all six rows.** T1.1 pass with the station-interface phone-snatch caveat. Same reading as Canada Water / Surrey Quays.

Confidence: **medium-high**.

Sources:
- [34] https://southlondon.co.uk/news/no-police-hub-would-mean-a-gaping-hole-in-the-canada-water-community/ — Southwark northern-ward phone snatch concentration

---

## Summary table — T1 pass/fail calls

Compressed view of the headline call per area. "Marginal" means the call is close and synthesis should preserve dissent; "fail" means my angle would eliminate the area.

| Area | T1.1 | T1.2 | T1.3 | T1.4 | T1.5 | T1.6 | My headline |
|---|---|---|---|---|---|---|---|
| Wembley Park | pass | pass | pass | pass | pass | pass | **clean pass** |
| Greenwich Peninsula | marginal | pass | pass | pass | pass | pass | pass, T1.1 O2 caveat |
| Stratford (town centre) | marginal | pass | pass | marginal | pass | pass | split |
| Stratford (East Village) | pass | pass | pass | pass | pass | pass | **clean pass** |
| Battersea Power Station | pass | pass | pass | pass | pass | pass | **clean pass** |
| King's Cross | pass | pass | pass | pass | pass | pass | **gold standard** |
| Nine Elms | marginal | pass | pass | pass | pass | pass | pass, split by geometry |
| Canary Wharf / Wood Wharf | pass | pass | pass | pass | pass | pass | **clean pass** |
| White City | pass | pass | pass | pass | pass | pass | pass with SB fringe caveat |
| Elephant Park | pass | pass | pass | pass | pass | pass | pass with Walworth fringe caveat |
| Royal Wharf & Royal Docks | marginal | pass | pass | pass | pass | pass | marginal pass |
| Kidbrooke Village | pass | pass | pass | pass | pass | pass | **clean pass** |
| Oval Village | pass | pass | pass | pass | pass | pass | pass with Lambeth caveat |
| Brent Cross Town | pass | pass | pass | pass | pass | pass | **clean pass** |
| Canada Water | marginal | pass | pass | marginal | pass | pass | pass with station caveat |
| Whitechapel | marginal | pass | pass | pass | pass | pass | **close to fail** |
| Aldgate East / Aldgate | pass | pass | pass | pass | pass | pass | **clean pass** |
| Shadwell | **fail** | pass | pass | marginal | marginal | pass | **FAIL T1.1** |
| Wapping | pass | pass | pass | pass | pass | pass | **clean pass** |
| Mile End | marginal | pass | pass | pass | pass | pass | marginal pass |
| Bow | pass | pass | pass | pass | pass | pass | clean pass |
| Bethnal Green | pass | pass | pass | pass | pass | pass | clean pass |
| Bow Common / Limehouse | marginal | pass | pass | pass | pass | pass | marginal pass |
| Hackney Wick | marginal | pass | pass | pass | pass | pass | marginal pass |
| Bow East / Three Mills | pass | pass | pass | pass | pass | pass | pass (unverified) |
| Plaistow / West Ham | pass | pass | pass | pass | pass | pass | pass (named wards only) |
| Stepney Green | **fail** | pass | pass | marginal | pass | pass | **FAIL T1.1 (likely)** |
| Hackney Central | marginal | pass | pass | marginal | pass | pass | marginal pass |
| Dalston | marginal | pass | pass | **fail** | pass | pass | marginal, T2.5 fail elsewhere |
| Stoke Newington | pass | pass | pass | pass | pass | pass | **clean pass** |
| Manor House / Finsbury Park | **fail** | pass | pass | **fail** | marginal | pass | **FAIL T1.1** |
| Stamford Hill | pass | pass | pass | pass | pass | pass | clean pass |
| Highbury | pass | pass | pass | pass | pass | pass | **clean pass** |
| Angel / Islington | pass | pass | pass | pass | pass | pass | clean pass |
| Old Street / Hoxton | marginal | pass | pass | marginal | pass | pass | marginal pass |
| Camden Town | pass | pass | pass | **fail** | pass | pass | T2.5 fail (outside T1) |
| Kentish Town | pass | pass | pass | pass | pass | pass | **clean pass** |
| Tufnell Park | pass | pass | pass | pass | pass | pass | clean pass |
| Archway | marginal | pass | pass | pass | pass | pass | marginal pass |
| Tottenham Hale | pass | pass | pass | pass | pass | pass | **pass, improving trajectory** |
| Kentish Town West / Gospel Oak | pass | marginal | pass | pass | pass | pass | pass, T1.2 thin |
| Belsize Park | pass | marginal | pass | pass | pass | pass | pass, T1.2 thin |
| West Hampstead | pass | pass | pass | pass | pass | pass | **clean pass** |
| Kilburn | **fail** | pass | pass | **fail** | pass | pass | **FAIL T1.1** |
| Cricklewood | pass | pass | pass | pass | pass | marginal | pass with T1.6 caveat |
| Maida Vale | pass | pass | pass | pass | pass | pass | **clean pass** |
| St John's Wood | pass | marginal | pass | pass | pass | pass | pass, T1.2 thin |
| Marylebone | pass | marginal | pass | pass | pass | pass | pass, T1.2 thin |
| Acton | pass | pass | pass | pass | pass | pass | **clean pass** |
| Ealing Broadway | marginal | pass | pass | marginal | pass | pass | marginal pass |
| Hammersmith | marginal | pass | pass | marginal | pass | pass | marginal pass |
| Shepherd's Bush | **fail** | pass | pass | **fail** | marginal | pass | **FAIL T1.1** |
| Notting Hill | pass | pass | pass | pass | pass | pass | clean pass |
| Chelsea | pass | marginal | pass | pass | pass | pass | pass, T1.2 thin |
| South Kensington | pass | marginal | pass | pass | pass | pass | pass, T1.2 thin |
| Earl's Court | pass | pass | pass | pass | pass | pass | **pass, improving** |
| Fulham Broadway / Fulham | pass | pass | pass | marginal | pass | pass | pass with fringe caveat |
| Pimlico | pass | marginal | pass | pass | pass | pass | pass, T1.2 thin |
| Bermondsey | pass | pass | pass | pass | pass | pass | **clean pass** |
| Surrey Quays / Rotherhithe | marginal | pass | pass | marginal | pass | pass | pass with station caveat |
| Borough / London Bridge | pass | pass | pass | pass | pass | pass | **clean pass** |
| Vauxhall (standalone) | **fail** | pass | pass | marginal | pass | pass | **FAIL T1.1 (likely)** |
| Stockwell | **fail** | pass | pass | **fail** | marginal | pass | **FAIL T1.1 (strong)** |
| Brixton | **fail** | pass | pass | **fail** | pass | pass | **FAIL T1.1 (likely)** |
| Clapham Common | marginal | pass | pass | marginal | pass | pass | marginal, T2.5 fail elsewhere |
| Tooting | pass | pass | pass | pass | pass | pass | **clean pass** |
| Wandsworth Town | pass | pass | pass | pass | pass | pass | clean pass |
| Battersea Park | pass | pass | pass | pass | pass | pass | clean pass |
| Clapham Junction | pass | pass | pass | pass | pass | pass | clean pass |
| Earlsfield | pass | marginal | pass | pass | pass | pass | pass, T1.2 thin |
| Streatham | marginal | pass | pass | pass | pass | pass | marginal pass |
| Peckham | **fail** | pass | pass | **fail** | marginal | pass | **FAIL T1.1 (likely)** |
| Camberwell | **fail** | pass | pass | **fail** | marginal | pass | **FAIL T1.1 (likely)** |
| Walworth | marginal | pass | pass | marginal | pass | pass | marginal pass |
| New Cross | **fail** | pass | pass | pass | pass | pass | **FAIL T1.1 (likely)** |
| Deptford | **fail** | pass | pass | marginal | marginal | marginal | **FAIL T1** |
| Lewisham | marginal | pass | pass | marginal | marginal | marginal | marginal, upgrade-test fail |
| Catford | marginal | pass | pass | pass | **fail** | **fail** | **FAIL T1.5 + T1.6** |
| Crystal Palace | pass | marginal | pass | pass | pass | pass | pass, upgrade-test marginal |
| Forest Hill | pass | pass | pass | pass | pass | pass | pass, Finding D caveat |
| Honor Oak Park | pass | marginal | pass | pass | pass | pass | pass, Finding D caveat |
| Sydenham | pass | marginal | pass | pass | pass | pass | pass, Finding D caveat |
| Herne Hill | pass | pass | pass | pass | pass | pass | clean pass |
| Dulwich Village | pass | marginal | marginal | pass | pass | pass | pass, T1.2/T1.3 thin |
| West Dulwich | pass | marginal | marginal | pass | pass | pass | pass, T1.2/T1.3 thin |
| Nunhead | pass | marginal | pass | pass | pass | pass | pass, T1.2 thin |
| Old Oak Common | pass | **fail** | pass | pass | marginal | pass | **FAIL T1.2 (current)** |
| Wood Green | marginal | pass | pass | marginal | marginal | pass | marginal, leaning fail |
| Edmonton Green | **fail** | pass | pass | **fail** | **fail** | pass | **FAIL T1.1 + T1.4 + T1.5** |
| North Acton | pass | pass | pass | pass | marginal | pass | pass with construction fringe caveat |
| Hayes (West London) | pass | pass | pass | pass | pass | pass | **pass, improving** |
| Southall | marginal | pass | pass | marginal | pass | pass | marginal pass |
| Woolwich | marginal | pass | pass | pass | pass | pass | split by geometry |
| Charlton Riverside | marginal | marginal | pass | pass | marginal | pass | **FAIL T1 (current)** |
| Surrey Docks | pass | pass | pass | marginal | pass | pass | pass with station caveat |

**T1 fail headline count (my angle, any row fail or cluster marginal = T1 call):**

1. **Shadwell** — T1.1 fail
2. **Stepney Green** — T1.1 fail likely
3. **Manor House / Finsbury Park** — T1.1 + T1.4 fail
4. **Kilburn** — T1.1 + T1.4 fail (council-named hotspot)
5. **Shepherd's Bush** — T1.1 + T1.4 fail (council-named hotspot)
6. **Vauxhall** — T1.1 fail likely
7. **Stockwell** — T1.1 fail strong ("shot hole")
8. **Brixton** — T1.1 fail likely
9. **Peckham** — T1.1 fail likely (North Peckham estate / gang infra)
10. **Camberwell** — T1.1 fail likely
11. **New Cross** — T1.1 fail likely
12. **Deptford** — T1 fail
13. **Catford** — T1.5 + T1.6 fail (public realm + decline)
14. **Edmonton Green** — T1.1 + T1.4 + T1.5 fail (clearest fail in sweep)
15. **Old Oak Common** — T1.2 fail (no modern rental stock yet)
16. **Charlton Riverside** — T1 cluster fail (early-delivery state)

Note that "fail" here reflects *my* angle as a gatekeeper lens — synthesis will weight this against the other 14 files and several of these calls (Brixton, Peckham, Dalston, New Cross) will face push-back from cultural-identity and younger-demographic agents who will read the same areas as passes on different criteria. That dissent is a feature of the consensus model, not a bug.

---

## Open questions

1. **Croydon comparator definition for T1.1.** Should T1.1 compare against Croydon's overall crime rate (~88/1k, which nearly every inner borough beats), or against Croydon's violence-with-injury rate (worst in London, 3,214 incidents year-to-June-2025)? My methodology has adopted the latter, but this is the single most consequential ambiguity in the tier and the user should confirm. Every pass/fail call above is stable under my reading; several become softer under a strict-literal reading of T1.1 against overall rate.

2. **"Fail" threshold for named-hotspot designations.** Is a single council-named crime hotspot (Kilburn, Shepherd's Bush, Wood Green) sufficient to fail T1.4, or does the failure require ward-level violent-crime concentration AND council-named hotspot status? My calls treat council-named status as sufficient; this may be too aggressive.

3. **Masterplan interior vs. station approach split.** Many of my pass/fail calls split along "masterplan passes, station approach marginal" — e.g. King's Cross, Nine Elms, Elephant Park, East Village, Royal Arsenal. The synthesis step needs to decide whether this split is a feature of the per-area entry (a "walk note" on the area) or collapses into a single headline call. The split is meaningful for Caner but is not currently represented in the Area schema.

4. **Catford T1.5/T1.6 fail is my only multi-row non-safety fail.** Catford visibly fails both the public-realm and not-in-decline criteria on my reading but not T1.1. Is a fail on the non-safety T1 rows sufficient to eliminate an area, or does the elimination require T1.1 fail specifically? The rubric says "fail any T1 row", which would eliminate Catford outright.

5. **Stamford Hill demographic fit-check.** The candidate-areas list flags Stamford Hill with "Orthodox Jewish community; fit-check needed". This is a T2.7/T5 question not a T1 question — my pass/fail is clean on T1 — but the user should confirm this is the right place for the fit-check (synthesis risk: the cultural-identity agent and the younger-demographic agent will likely disagree on Stamford Hill, and synthesis should not read demographic fit as a safety concern).

6. **East Village vs Stratford split.** Get Living East Village has the cleanest Caner-specific T1.1 pass via masterplan stewardship, but it sits inside the worst-in-London knife-crime borough. Synthesis needs a policy on how to reconcile ward-level masterplan safety with borough-level violent-crime headlines that do not actually affect the masterplan walks — this problem applies to Nine Elms, White City, Elephant Park, Royal Wharf, and Wood Wharf simultaneously.

7. **Qualification-provider capture reached a floor.** I only identified three referencing relationships incidentally (Quintain/HomeLet, Vertus and Ballymore/Goodlord, Get Living in-house); I have NOT verified any of these primary-source in the T1 research window. Agent 09 (rental-qualification) will have stronger ground-truth here. My capture is offered as weak signal only, not primary evidence.

8. **Haringey borough 307/1k Finsbury Park ward figure.** The Crystal Roof datapoint of 307/1k for Finsbury Park ward is surprisingly high; I was not able to reconcile it against the Met Police Crime Data Dashboard within the research window. If the 307 figure is a sub-ward or postcode-specific number rather than a ward-true rate, my Manor House / Finsbury Park T1.1 fail call should be softened to marginal. Synthesis should cross-check this.

9. **Finding B footfall inflation cut-off.** Westminster, Camden, K&C, Islington, Southwark (Bermondsey/London Bridge) all benefit from the "borough headline inflated by daytime footfall" argument. At what point is the inflation argument doing too much work? The inflation argument is correct at the structural level but synthesis should be cautious about using it to wave away borough headlines when the ward is genuinely rough.

10. **Greenwich Peninsula O2 caveat is unverified-primary.** My call that the ward-level crime is "mostly O2 driven" is the conventional reading across multiple aggregated sources but is not primary-sourced. Synthesis should treat this as a consensus reading rather than verified fact.

---

## Sources master list

Each citation below is either an authoritative primary source (Met Police, council, ONS, GLA) or a secondary aggregation that I have marked as such. Where a claim rests on a single secondary aggregator I have noted it inline.

[1] Inside Croydon, "Croydon is worst in London for reports of 'violence with injury'" — https://insidecroydon.com/2025/10/24/croydon-is-worst-in-london-for-reports-of-violence-with-injury/
[2] Time Out London, "Every London Borough Ranked, Crime Rates 2025" — https://www.timeout.com/london/news/revealed-the-london-boroughs-with-the-highest-and-lowest-crime-rates-012625
[3] CrimeRate.co.uk, Kensington & Chelsea — https://crimerate.co.uk/london/kensington-and-chelsea
[4] scOS Crime Rate London boroughs index — https://scos.co.uk/crime-rate/london/
[5] Wembley Park (Quintain) — "Is Wembley Safe? 2026 Crime Rate" — https://wembleypark.com/live/neighbourhood/is-wembley-safe/ *(operator-published; cited for framing + CCTV/patrol claims only)*
[6] Southwark News — Met Town Centre Team launch — https://southwarknews.co.uk/area/walworth/met-has-launched-dedicated-town-centre-team-in-elephant-and-castle-and-walworth/
[7] Canary Development — "How safe is Canary Wharf?" — https://www.canarydevelopment.com/how-safe-is-canary-wharf/ *(marketing; used for framing only)*
[8] scOS Lewisham — https://scos.co.uk/crime-rate/lewisham/
[9] London Now — Newham 695 knife crime offences Jan–Oct 2025 — https://www.london-now.co.uk/news/25723722.newham-london-borough-knife-crime-offences-2025/
[10] scOS Southwark — https://scos.co.uk/crime-rate/southwark/southwark/
[11] scOS Southwark — as above
[12] CrimeRate.co.uk Brent — https://crimerate.co.uk/london/brent
[13] This Is Local London, "Greenwich's most dangerous and safest neighbourhoods revealed" — https://www.thisislocallondon.co.uk/news/23796339.greenwichs-dangerous-safest-neighbourhoods-revealed/
[14] CrimeRate.co.uk Greenwich — https://crimerate.co.uk/london/greenwich
[15] Newham Safeguarding Children Partnership, Youth Safety Strategy 2025–28 — https://www.newhamscp.org.uk/wp-content/uploads/2025/02/Newhams-Youth-Safety-Stragegy-2025-2028.pdf
[16] Met Police Stratford Olympic Park SNT page — https://www.met.police.uk/area/your-area/met/newham/stratford-olympic-park/contact-us/our-priorities
[17] Fahrenheit Security "Is Wandsworth Safe?" — https://www.fahrenheitsecurity.com/post/is-wandsworth-safe
[18] CrimeRate.co.uk Wandsworth — https://crimerate.co.uk/london/wandsworth
[19] Propertistics Nine Elms — https://propertistics.co.uk/stats/wandsworth/battersea/nine-elms/crime/
[20] Met Police Crime Data Dashboard — https://www.met.police.uk/sd/stats-and-data/met/crime-data-dashboard/
[21] Met Police Nine Elms ward — https://www.met.police.uk/area/your-area/met/wandsworth/nine-elms/meetings-and-events/top-reported-crimes-in-this-area
[22] scOS Tower Hamlets — https://scos.co.uk/crime-rate/tower-hamlets/
[23] Fahrenheit Security Tower Hamlets — https://www.fahrenheitsecurity.com/post/is-tower-hamlets-safe
[24] Canary Development (as [7])
[25] scOS Hammersmith & Fulham — https://scos.co.uk/crime-rate/hammersmith-and-fulham/
[26] SW Londoner "Crime down but residents feel less safe" — https://www.swlondoner.co.uk/news/23052025-crime-down-but-residents-still-dont-feel-safe
[27] Southwark News (as [6])
[28] iLiveHere Walworth — https://www.ilivehere.co.uk/crime-statistics-southwark-walworth.html
[29] Crystal Roof Kidbrooke Village ward — https://crystalroof.co.uk/report/ward/kidbrooke-village-and-sutcliffe-greenwich/crime
[30] scOS Lambeth — https://scos.co.uk/crime-rate/lambeth/
[31] Fahrenheit Security Lambeth — https://www.fahrenheitsecurity.com/post/is-lambeth-safe
[32] Barnet JSNA Crime 2024 — https://open.barnet.gov.uk/joint-strategic-needs-assessment-2024/places/crime/
[33] CrimeRate.co.uk Barnet — https://crimerate.co.uk/london/barnet
[34] South London Press, "No police hub would mean a gaping hole in the Canada Water community" — https://southlondon.co.uk/news/no-police-hub-would-mean-a-gaping-hole-in-the-canada-water-community/
[35] Crystal Roof Whitechapel ward — https://crystalroof.co.uk/report/ward/whitechapel-tower-hamlets/crime
[36] iLiveHere Shadwell — https://www.ilivehere.co.uk/crime-statistics-tower-hamlets-shadwell.html
[37] Met Police Shadwell — https://www.met.police.uk/area/your-area/met/tower-hamlets/shadwell/
[38] Met Police St Katharine's & Wapping — https://www.met.police.uk/area/your-area/met/tower-hamlets/st-katharines-wapping/
[39] iLiveHere Mile End — https://www.ilivehere.co.uk/crime-statistics-tower-hamlets-mile-end.html
[40] Limehouse Community Forum police panel — https://www.limehouse.info/police-ward-panel.html
[41] CrimeRate.co.uk Hackney — https://crimerate.co.uk/london/hackney
[42] Met Police Hackney Wick — https://www.met.police.uk/a/your-area/met/hackney/hackney-wick/
[43] iLiveHere Plaistow — https://www.ilivehere.co.uk/crime-statistics-newham-plaistow.html
[44] StreetScan West Ham ward — https://streetscan.co.uk/crime/a/ward/west-ham/e05013927
[45] London Localite "Is Hackney Safe" — https://londonlocalite.com/is-hackney-safe/
[46] Met Police Stoke Newington — https://www.met.police.uk/area/your-area/met/hackney/stoke-newington/about-us/crime-map
[47] Crystal Roof Finsbury Park ward — https://crystalroof.co.uk/report/ward/finsbury-park-islington/crime
[48] Wikipedia Manor House, London — https://en.wikipedia.org/wiki/Manor_House,_London
[49] CrimeRate.co.uk Islington — https://crimerate.co.uk/london/islington
[50] Police.uk Camden Town — https://www.police.uk/pu/your-area/metropolitan-police-service/camden-town/?tab=CrimeMap
[51] Met Police Tufnell Park — https://www.met.police.uk/area/your-area/met/islington/tufnell-park/about-us/top-reported-crimes-in-this-area
[52] Haringey Council Week of Action — https://haringey.gov.uk/news/20251121/week-action-to-focus-west-green
[53] Haringey Council Crime & Violence Overview March 2025 — https://www.minutes.haringey.gov.uk/documents/s150222/Haringey%20Crime%20and%20Violence%20Overview%20March%202025.pdf
[54] Crystal Roof West Hampstead ward — https://crystalroof.co.uk/report/ward/west-hampstead-camden/crime
[55] Safer Brent Partnership Annual Report 2024–25 — https://democracy.brent.gov.uk/documents/s147314/06a+Appendix+1+-+Safer+Brent+Partnership+Annual+Report+2024-25.pdf
[56] Fahrenheit Security Maida Vale — https://www.fahrenheitsecurity.com/post/is-maida-vale-safe
[57] Ealing News — Police boost to fight crime in Ealing town centre — https://ealing.news/news/police-boost-to-fight-crime-in-ealing-town-centre/
[58] View From W5 — Ealing Broadway target summer crime crackdown — https://theviewfromw5.substack.com/p/ealing-broadway-target-summer-crime-crackdown
[59] RBKC Newsroom "Earl's Court project clamps down on crime and ASB" — https://www.rbkc.gov.uk/newsroom/earls-court-project-clamps-down-crime-and-anti-social-behaviour
[60] RBKC Overview & Scrutiny Committee Earl's Court report June 2025 — https://rbkc.moderngov.co.uk/committees/documents/s26072/5.%20EARLS%20COURT%20REPORT%20OSC%2011%20JUNE%202025%20_.pdf
[61] Met Police London Bridge and West Bermondsey — https://www.met.police.uk/area/your-area/met/southwark/london-bridge-and-west-bermondsey/contact-us/our-priorities
[62] London Stays — Brixton crime rates — https://londonstays.net/brixton-crime-rates-what-you-need-to-know/
[63] Clapham Junction Action Group crime report Dec 2024 — https://www.cjag.org/2024/12/13/report-about-crime-in-clapham-junction-area-and-safer-neighbourhood-police/
[64] Planet Deadly — "10 Most Dangerous Boroughs in London" — https://www.planetdeadly.com/human/10-dangerous-boroughs-london *(aggregated press; used for North Peckham estate / Peckham Boys / Ghetto Boys framing)*
[65] London Stays — "Is Camberwell Safe? Complete 2025 Safety Guide" — https://londonstays.net/is-camberwell-safe-complete-2025-safety-guide/
[66] scOS Lewisham (as [8])
[67] Police.uk New Cross Gate ward — https://police-uk.org/ward/New_Cross_Gate-crimes/E05013728/?district=E09000023
[68] StreetCheck Deptford SE8 — https://www.streetcheck.co.uk/crime/se83nu
[69] iLiveHere Catford — https://www.ilivehere.co.uk/crime-statistics-lewisham-catford.html
[70] Propertistics Crystal Palace & Anerley — https://propertistics.co.uk/stats/lewisham/lewisham-west-and-penge/crystal-palace-&-anerley/crime/
[71] Crystal Roof Forest Hill ward — https://crystalroof.co.uk/report/ward/forest-hill-lewisham/crime
[72] Crystal Roof Sydenham ward — https://crystalroof.co.uk/report/ward/sydenham-lewisham/crime
[73] StreetScan Herne Hill & Loughborough Junction — https://streetscan.co.uk/crime/a/ward/herne-hill-loughborough-junction/e05014104
[74] GOV.UK Old Oak Common station — https://www.gov.uk/government/publications/old-oak-common-station (background only)
[75] StreetCheck Edmonton Green N9 0TA — https://www.streetcheck.co.uk/crime/n90ta
[76] Met Police Edmonton Green — https://www.met.police.uk/area/your-area/met/enfield/edmonton-green/contact-us/top-reported-crimes-in-this-area
[77] Hillingdon Council Hayes Safer project award — https://pre.hillingdon.gov.uk/news/article/267/hayes-community-safety-project-wins-national-award
[78] Plumplot Southall crime stats — https://www.plumplot.co.uk/Southall-violent-crime-statistics.html

---

*End of sweep-01-safety-foundational.md.*
