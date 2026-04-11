# Candidate Areas — London Sweep

The candidate list for the Phase F sweep. Authored 2026-04-11 as task **A2** of `context/plans/website-refactor.md`.

> **This list is a STARTING POINT, not a constraint.** It was authored by a single AI based on what that AI already knew about. The 10 focus agents (1–10) research only what's in this list, but the **5 discovery agents (11–15)** explicitly explore for areas/projects we missed, and their proposals will expand the list as a second wave. If you're reading this and thinking "but what about [area]?" — that's exactly what discovery agents 11–15 exist to surface. Don't add things here directly without going through discovery first; the value of discovery is that it's not constrained by the same blind spots that produced this list.

This list defines the universe of areas the 10 focus agents will research. Each candidate is tagged with a prior expectation, a primary focus assignment (which agent does the deep research), and a brief rationale for why it deserves a slot. Areas inherited from the existing 19 entries are marked **[Existing]**; new candidates are marked **[New]**.

The total count is **95 candidates** (14 existing + 81 new). After T1 filtering during the sweep, the populated dataset will likely settle at 30–60 areas. Candidates expected to fail T1 outright are still listed so the sweep can verify them rather than us assuming. After the discovery agents (11–15) report back, the second wave will add their strongest proposals — likely 5–20 more candidates.

---

## How to read this

| Column | Meaning |
|---|---|
| **Area** | Candidate name |
| **Borough** | Primary borough(s) |
| **Status** | `[Existing]` already in the dataset (will be migrated in B5), `[New]` candidate for the sweep |
| **Prior** | My expected grade after research: `SS` / `S` / `A` / `B` / `C` / `?` (unknown) |
| **Primary focus** | Which of the 10 sweep agents owns the deep research for this area |
| **Why included** | One-line rationale |

The 10 sweep agents (full briefs in `context/agent-briefs/focuses/`) are:

| # | Agent | Bias |
|---|---|---|
| 1 | safety-foundational | T1 disqualification, finding missed-safe areas |
| 2 | daily-life | T2.1, T2.2, T2.3 — gym, food, walkability |
| 3 | younger-demographic | T2.7 — Census 2021 age cohort verification |
| 4 | cultural-identity | T3.2, T3.3, T3.5 — anchor, identity, architecture |
| 5 | green-water | T2.4 — river / dock / canal / park |
| 6 | premium-amenity | T4.1, T4.4 — building amenity packages, signature architecture |
| 7 | connectivity | T1.3, T5.1, T5.2 — line and station mapping, redundancy |
| 8 | regeneration-trajectory | T3.1, T5.3 — investment pipeline, 2027 trajectory |
| 9 | rental-qualification | The whole `Project.rental.qualification` block — **most important agent for Caner** |
| 10 | resident-voice | HomeViews, Reddit, press, common complaints/praise |

Every agent reads every area, but each area gets a **primary** agent that owns the master entry for it. The primary assignment is rotated to balance load across the 10 agents (~8 areas per agent on average).

---

## Existing 19 entries → 14 areas (migrated in Phase B5)

These already exist in the dataset and will be restructured in Phase B5 (not researched fresh in F). They appear here because Phase F also re-validates them under the new schema and the rental-qualification agent (#9) needs to fill in qualification realism for every project.

| Area | Borough | Status | Prior | Primary focus | Why included |
|---|---|---|---|---|---|
| Wembley Park | Brent | [Existing] | A | 9 (rental qualification) | The single best apples-to-apples Croydon comparison; Quintain managed BTR; needs grad-visa realism filled in per building |
| Greenwich Peninsula | Greenwich | [Existing] | B | 9 (rental qualification) | Knight Dragon; Tide linear park; Jubilee line; established residential masterplan |
| Stratford / East Bank | Newham | [Existing] | A | 4 (cultural identity) | East Bank cultural quarter, V&A East, Olympic Park, Highly Connected hub |
| Battersea Power Station | Wandsworth | [Existing] | A | 6 (premium amenity) | Apple HQ, signature architecture, Northern Line extension; collapses Switch House under it |
| King's Cross | Camden | [Existing] | S | 4 (cultural identity) | Gold standard for the rubric; collapses King's Cross Ownership entry |
| Nine Elms | Wandsworth / Lambeth | [Existing - NEW PARENT] | A | 9 (rental qualification) | New parent area collapsing Embassy Gardens, Bloom, Riverlight Quay, One Nine Elms |
| Canary Wharf / Wood Wharf | Tower Hamlets | [Existing] | S | 9 (rental qualification) | Vertus + Ballymore; Elizabeth Line; needs Wood Wharf vs financial-core differentiation in long_form |
| White City | Hammersmith & Fulham | [Existing] | A | 4 (cultural identity) | Television Centre + White City Living + Imperial expansion |
| Elephant Park | Southwark | [Existing] | A | 8 (regeneration) | Lendlease masterplan, Northern + Bakerloo, Palace skatepark, near-complete |
| Royal Wharf & Royal Docks | Newham | [Existing - EXPANDED] | B | 7 (connectivity) | Ballymore + Elizabeth Line; expanded to include wider Royal Docks pipeline |
| Kidbrooke Village | Greenwich | [Existing] | B | 5 (green-water) | Berkeley masterplan; Cator Park integration; the quiet underperformer |
| Oval Village | Lambeth | [Existing] | B | 8 (regeneration) | Berkeley former gasworks; Victoria Line; underrated value play |
| Brent Cross Town | Barnet | [Existing] | B | 9 (rental qualification) | The Maple BTR, lowest accessible price floor in dataset, Thameslink |
| Canada Water | Southwark | [Existing] | B | 8 (regeneration) | Roger Madelin (the King's Cross delivery lead); Jubilee + Overground; planning under review |

**14 existing areas, ~50 nested projects after migration.**

---

## New candidates — Inner-east London

The east London cluster — historically more affordable, increasingly served by Elizabeth Line and Overground, strong young demographic skew. High expected hit rate.

| Area | Borough | Status | Prior | Primary focus | Why included |
|---|---|---|---|---|---|
| Whitechapel | Tower Hamlets | [New] | A | 7 (connectivity) | Elizabeth Line major win, Royal London Hospital, mature urban grain, gentrifying fast |
| Aldgate East / Aldgate | City / Tower Hamlets | [New] | B | 4 (cultural identity) | Zone 1 fringe, Goodman's Fields BTR, Aldgate Square, multi-line transport |
| Shadwell | Tower Hamlets | [New] | C | 1 (safety) | Cheap, Overground + DLR, but historically rougher — needs T1 verification |
| Wapping | Tower Hamlets | [New] | A | 5 (green-water) | Riverside, historic Thames identity, Shadwell Basin, premium-leaning, very quiet |
| Mile End | Tower Hamlets | [New] | B | 3 (younger demographic) | Queen Mary student area, Mile End Park, Central + District + H&C, young skew |
| Bow | Tower Hamlets | [New] | B | 8 (regeneration) | Bow Wharf, Roman Road, Hertford Union Canal, undergoing slow gentrification |
| Bethnal Green | Tower Hamlets | [New] | B | 4 (cultural identity) | Columbia Road flower market, V&A Museum of Childhood, very young crowd, Central Line |
| Bow Common / Limehouse | Tower Hamlets | [New] | C | 7 (connectivity) | DLR + Overground, dock identity, less polished but accessible |
| Hackney Wick | Hackney | [New] | A | 4 (cultural identity) | Strongest creative-industry identity east of Shoreditch, Olympic Park edge, breweries, studios |
| Stratford East (East Village) | Newham | [New] | B | 2 (daily life) | East Village Get Living BTR is canonical Caner-target — captured under existing Stratford entry but worth dedicated focus |
| Bow East / Three Mills | Tower Hamlets | [New] | C | 5 (green-water) | River Lea waterfront, quieter side of the Olympic regeneration |
| Plaistow / West Ham | Newham | [New] | C | 7 (connectivity) | Jubilee + DLR + District; cheap; needs T1 safety verification |
| Stepney Green | Tower Hamlets | [New] | C | 1 (safety) | District + H&C, mixed reputation, needs T1 disqualification check |

---

## New candidates — North-east London

Hackney corridor and northbound. Strong young creative skew, mixed safety, varied connectivity.

| Area | Borough | Status | Prior | Primary focus | Why included |
|---|---|---|---|---|---|
| Hackney Central | Hackney | [New] | A | 3 (younger demographic) | Overground hub, very young, Mare Street + Broadway Market, strong identity |
| Dalston | Hackney | [New] | A | 4 (cultural identity) | Dalston Junction Overground, nightlife heavy (T2.5 risk), strong identity |
| Stoke Newington | Hackney | [New] | A | 5 (green-water) | Church Street, Clissold Park, Overground via Rectory Road, family-friendly but young still |
| Manor House / Finsbury Park | Hackney / Haringey / Islington | [New] | B | 2 (daily life) | Piccadilly + Victoria, Finsbury Park itself, increasingly residential |
| Stamford Hill | Hackney | [New] | C | 1 (safety) | Quiet but demographically distinct (Orthodox Jewish community); fit-check needed |
| Highbury / Highbury & Islington | Islington | [New] | A | 4 (cultural identity) | Victoria + Overground, Highbury Fields, mature liveable centre, premium-leaning |
| Angel / Islington | Islington | [New] | A | 4 (cultural identity) | Northern Line, Angel Central, strong restaurant scene, Upper Street |
| Old Street / Hoxton | Islington / Hackney | [New] | A | 3 (younger demographic) | Tech City, very young, Old Street roundabout, nightlife (T2.5 caveat) |
| Camden Town | Camden | [New] | B | 4 (cultural identity) | Iconic but loud, Northern Line + Overground, market identity, T2.5 noise concern |
| Kentish Town | Camden | [New] | A | 2 (daily life) | Northern + Overground, calmer than Camden, NW5 strength, real high street |
| Tufnell Park | Camden | [New] | B | 5 (green-water) | Northern Line, residential, Tufnell Park itself, family-leaning |
| Archway | Islington | [New] | C | 1 (safety) | Northern Line, cheap, mixed reputation; T1 verification needed |
| Tottenham Hale | Haringey | [New] | B | 8 (regeneration) | Major regeneration zone, Victoria Line, Walthamstow Wetlands edge, ascending |

---

## New candidates — North London

Fringe northern areas — connectivity varies wildly.

| Area | Borough | Status | Prior | Primary focus | Why included |
|---|---|---|---|---|---|
| Kentish Town West / Gospel Oak | Camden | [New] | B | 5 (green-water) | Hampstead Heath edge, Overground, very calm |
| Belsize Park | Camden | [New] | A | 5 (green-water) | Hampstead Heath, Northern Line, premium-leaning, settled |
| West Hampstead | Camden | [New] | A | 7 (connectivity) | Jubilee + Thameslink + Overground (5+ lines!), mature liveable area |
| Kilburn | Camden / Brent | [New] | B | 2 (daily life) | Jubilee + Overground, Kilburn High Road, real high street, mixed |
| Cricklewood | Brent / Barnet | [New] | C | 1 (safety) | Thameslink, gentrifying slowly, needs verification |
| Maida Vale | City of Westminster | [New] | A | 5 (green-water) | Bakerloo, Little Venice canalside, premium-leaning, quiet |
| St John's Wood | City of Westminster | [New] | A | 6 (premium amenity) | Jubilee, Lord's Cricket Ground, premium, mature |
| Marylebone | City of Westminster | [New] | A | 4 (cultural identity) | Marylebone High Street, Bakerloo + Jubilee + central, very mature, premium |

---

## New candidates — West London

West London corridor — affluent, well-connected, increasingly investing in BTR.

| Area | Borough | Status | Prior | Primary focus | Why included |
|---|---|---|---|---|---|
| Acton | Ealing | [New] | B | 7 (connectivity) | Elizabeth Line, Central, District, Overground (4+ lines!), still relatively cheap, undergoing change |
| Ealing Broadway | Ealing | [New] | A | 7 (connectivity) | Elizabeth Line, Central, District, Ealing Broadway shopping, real town centre |
| Hammersmith | Hammersmith & Fulham | [New] | A | 4 (cultural identity) | Piccadilly + District + H&C, riverside, Lyric Theatre, real urban centre |
| Shepherd's Bush | Hammersmith & Fulham | [New] | B | 3 (younger demographic) | Westfield-adjacent, Central + Overground, BBC heritage, gentrifying |
| Notting Hill | Kensington & Chelsea | [New] | A | 4 (cultural identity) | Iconic, premium, Central + District + H&C, market street identity |
| Chelsea | Kensington & Chelsea | [New] | A | 6 (premium amenity) | King's Road, premium, mature, slightly older skew |
| South Kensington | Kensington & Chelsea | [New] | A | 4 (cultural identity) | Museums quarter, Imperial College, Piccadilly + Circle + District |
| Earl's Court | Kensington & Chelsea | [New] | B | 8 (regeneration) | Major Earl's Court regeneration coming online, Piccadilly + District |
| Fulham Broadway / Fulham | Hammersmith & Fulham | [New] | B | 2 (daily life) | District, Stamford Bridge, residential, mature |
| Pimlico | City of Westminster | [New] | A | 4 (cultural identity) | Tate Britain, Victoria Line, riverside, quiet residential premium |

---

## New candidates — South London

South of the river — varied. The areas geographically nearest to Croydon get more critical T1 evaluation because the upgrade question is sharper.

| Area | Borough | Status | Prior | Primary focus | Why included |
|---|---|---|---|---|---|
| Bermondsey | Southwark | [New] | A | 4 (cultural identity) | Maltby Street Market, Bermondsey Street, Jubilee, very strong identity |
| Surrey Quays / Rotherhithe | Southwark | [New] | B | 5 (green-water) | Surrey Quays Overground, dock identity, river loop, near Canada Water |
| Borough / London Bridge | Southwark | [New] | A | 4 (cultural identity) | Borough Market, Jubilee + Northern, premium central position |
| Vauxhall (separate from Nine Elms) | Lambeth | [New] | B | 7 (connectivity) | Victoria + Northern + multi-bus hub, Vauxhall Pleasure Gardens, transit-led |
| Stockwell | Lambeth | [New] | B | 1 (safety) | Victoria + Northern, mixed reputation, needs T1 |
| Brixton | Lambeth | [New] | A | 4 (cultural identity) | Brixton Village, Electric Avenue, Victoria Line, very strong identity, demographic-led |
| Clapham Common | Lambeth / Wandsworth | [New] | A | 5 (green-water) | Common itself, Northern Line, very young, party scene (T2.5) |
| Tooting | Wandsworth | [New] | B | 2 (daily life) | Tooting Market, Northern Line, real high street, family-friendly + young |
| Wandsworth Town | Wandsworth | [New] | B | 8 (regeneration) | Ram Quarter, Wandsworth Riverside, ongoing regeneration |
| Battersea Park / Battersea | Wandsworth | [New] | A | 5 (green-water) | Battersea Park, riverside, Victoria + Overground, near BPS |
| Clapham Junction | Wandsworth | [New] | B | 7 (connectivity) | UK's busiest interchange, Overground + Southern, very connected |
| Earlsfield | Wandsworth | [New] | C | 2 (daily life) | Calm residential, Southwestern Railway, Wandsworth Common nearby |
| Streatham | Lambeth | [New] | C | 1 (safety) | Streatham Hill, Tooting Bec adjacent, ongoing improvement |
| Peckham | Southwark | [New] | A | 4 (cultural identity) | Peckham Rye, Bussey Building, very strong creative identity, Overground |
| Camberwell | Southwark | [New] | C | 1 (safety) | Camberwell Green, art college, mixed reputation |
| Walworth | Southwark | [New] | C | 1 (safety) | Walworth Road, near Elephant Park, gentrifying |
| New Cross | Lewisham | [New] | C | 3 (younger demographic) | Goldsmiths, very young + creative, Overground, mixed safety |
| Deptford | Lewisham | [New] | C | 1 (safety) | Deptford Market, riverside, gentrifying, mixed reputation |
| Lewisham | Lewisham | [New] | C | 8 (regeneration) | Lewisham Gateway regeneration, DLR + Southeastern, mixed |
| Catford | Lewisham | [New] | C | 1 (safety) | Catford Bridge, town centre regeneration plans, currently rough |
| Crystal Palace | Bromley / Lambeth / Croydon | [New] | C | 4 (cultural identity) | Triangle, Crystal Palace Park, Overground, **adjacent to Croydon — sharp upgrade question** |
| Forest Hill | Lewisham | [New] | C | 2 (daily life) | Horniman Museum, Overground, calm residential, near-Croydon edge |
| Honor Oak Park | Lewisham | [New] | C | 5 (green-water) | One Tree Hill, Overground, very calm, near-Croydon edge |
| Sydenham | Lewisham | [New] | C | 1 (safety) | Sydenham Hill, Overground, near-Croydon edge |
| Herne Hill | Lambeth | [New] | B | 5 (green-water) | Brockwell Park, Sunray Avenue, Thameslink, calm residential |
| Dulwich Village | Southwark | [New] | A | 5 (green-water) | Dulwich Picture Gallery, very leafy, premium quiet, Southeastern |
| West Dulwich | Southwark | [New] | B | 5 (green-water) | Quieter Dulwich edge, Southeastern, calm |
| Nunhead | Southwark | [New] | C | 1 (safety) | Nunhead Cemetery, Southeastern, increasingly residential |

---

## New candidates — Other regeneration zones

Areas with active masterplan-scale investment that don't fit cleanly elsewhere.

| Area | Borough | Status | Prior | Primary focus | Why included |
|---|---|---|---|---|---|
| Old Oak Common | Hammersmith & Fulham / Ealing | [New] | C | 8 (regeneration) | HS2 station incoming 2030+, future trajectory bet |
| Wood Green | Haringey | [New] | C | 8 (regeneration) | Wood Green regeneration plan, Piccadilly Line |
| Edmonton Green | Enfield | [New] | C | 1 (safety) | Cheap, regeneration plan, needs T1 verification |
| North Acton | Ealing | [New] | C | 7 (connectivity) | Central Line, large-scale BTR cluster (Imperial Square etc.), still being built out |
| Hayes (West London) | Hillingdon | [New] | C | 7 (connectivity) | Elizabeth Line, very far west, cheap |
| Southall | Ealing | [New] | C | 1 (safety) | Elizabeth Line, very distinct character, demographically led |
| Woolwich | Greenwich | [New] | B | 8 (regeneration) | Elizabeth Line, Royal Arsenal Berkeley masterplan, Thames Path |
| Charlton Riverside | Greenwich | [New] | C | 8 (regeneration) | Major regeneration zone, Southeastern, near Greenwich Peninsula |
| Surrey Docks | Southwark | [New] | C | 5 (green-water) | Adjacent to Canada Water and Surrey Quays, dock identity |

---

## Areas explicitly excluded from the sweep

For completeness — areas that were considered and ruled out, with reasons. These will not be researched and will not appear in Flatbrowser.

| Area | Reason for exclusion |
|---|---|
| **Croydon (any sub-area)** | The thing being escaped. Excluding all Croydon, East Croydon, West Croydon, Norbury, Thornton Heath, Selhurst, South Norwood, Addiscombe, Purley, etc. |
| **New Addington** | Geographically Croydon, structurally Croydon, fails the upgrade test by definition |
| **Beckenham, West Wickham, Chislehurst** | Outer south-east, mostly outside the upgrade-from-Croydon question entirely (different lifestyle pattern, suburban-only) |
| **Cambridge** | Per Decision 11 of the rubric — not in scope for this dataset; revisit only if work picture changes |
| **Anywhere outside the M25** | Out of scope |
| **Watford / Harrow** | Borderline outer Zone 7+, not the kind of upgrade Caner is looking for |
| **Romford / Ilford / Barking / Dagenham** | Outer east, similar reason |
| **Sutton / Mitcham / Morden** | South-west outer, similar reason; additionally near-Croydon and unlikely to be upgrades |

These exclusions are not absolute — if Caner reads this list and disagrees with any specific exclusion, the relevant area can be added to the candidate list. The exclusion is a default, not a ban.

---

## Total counts

| Bucket | Areas |
|---|---|
| Existing entries (migrated, not researched fresh) | 14 |
| New candidates — east | 13 |
| New candidates — north-east | 13 |
| New candidates — north | 8 |
| New candidates — west | 10 |
| New candidates — south | 28 |
| New candidates — other regeneration | 9 |
| **Total candidates for the sweep** | **95** |

Of these, expected outcomes:
- **~25 candidates likely to fail T1** (safety, decline, no modern stock) — eliminated quickly
- **~40 candidates likely to land at C/B grade** — included for breadth, not headline value
- **~25 candidates likely to land at A grade** — the real working shortlist
- **~5 candidates likely to land at S/SS** — King's Cross, Canary Wharf, plus 2–3 surprises

The sweep is intentionally over-broad. Excluding-by-default would risk missing the surprise hits; including-and-disqualifying through T1 catches them honestly.

---

## Per-agent load distribution

Approximate primary-area count per agent after the assignments above:

| Agent | # Primary areas |
|---|---|
| 1 — safety-foundational | 13 |
| 2 — daily-life | 9 |
| 3 — younger-demographic | 6 |
| 4 — cultural-identity | 18 |
| 5 — green-water | 14 |
| 6 — premium-amenity | 4 |
| 7 — connectivity | 11 |
| 8 — regeneration-trajectory | 12 |
| 9 — rental-qualification | 6 (existing entries — every project gets qualification realism) |
| 10 — resident-voice | 2 (this agent runs across all areas as a secondary pass) |

Cultural-identity is highest because so much of the value of broadening the dataset comes from areas with strong but undocumented character (Brixton, Peckham, Hackney Wick, Bermondsey, etc.). Rental-qualification has fewer primary assignments but runs as a *secondary* pass on every existing entry that has projects (the qualification block must be filled in for every Project).

This distribution can be rebalanced before dispatch in F2 if any agent's load looks unsustainable.

---

## Next step

This list is the input to **Phase F2** (agent dispatch). Once Phase E is complete (agent briefs written, launch script updated, merge protocol defined), the script reads this candidate list and dispatches the 10 agents in parallel against the assigned areas.

Until then, this file is reference-only — no execution.
