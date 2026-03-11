# Royal Wharf

- Source file: `/Users/atacanercetinkaya/Documents/Programming Projects/flatbrowser/src/establishments/data/royal-wharf.ts`
- Developer in dataset: `Ballymore`
- Research date: `2026-03-11`

## Tag verdicts

| Category | Current tag | Verdict | Rationale | Source URLs |
| --- | --- | --- | --- | --- |
| Zone | Zone 3 | verified | Custom House station (Elizabeth line and DLR), the nearest station to Royal Wharf, is confirmed TfL Zone 3. | https://en.wikipedia.org/wiki/Custom_House_station ; https://tfl.gov.uk/hub/stop/HUBCUS/custom-house/ |
| Tenure | Rent or buy | verified | Royal Wharf has active rental listings on Rightmove (1-beds from ~GBP 1,999 pcm, 3-beds ~GBP 3,450–3,580 pcm). Sales listings are also available. Ballymore markets both tenures. | https://www.rightmove.co.uk/properties/161044247 ; https://www.rightmove.co.uk/properties/164288393 |
| Price | Accessible | verified | 1-bed rentals from ~GBP 1,999 pcm and 2-beds from ~GBP 2,648 pcm. For a Zone 3 development with Elizabeth line access, a riverside clubhouse, pool, and concierge, the lower end of the range qualifies as accessible entry into quality riverside London living. | https://www.rightmove.co.uk/properties/161044247 ; https://www.rightmove.co.uk/properties/160478429 |
| Price | Mid-range | verified | 3-bed rentals at GBP 3,450–3,580 pcm push into mid-range territory. The combination of accessible 1-beds and mid-range 3-beds justifies both tags. | https://www.rightmove.co.uk/properties/164288393 ; https://www.rightmove.co.uk/properties/162887333 |
| Status | Ready now | verified | Royal Wharf is substantially complete with 3,385 homes delivered, an operational high street, Thames Clipper pier, and full amenity suite. No major phases are pending. | https://www.rightmove.co.uk/properties/164288393 |
| Character | Waterside | verified | Royal Wharf sits on the Thames with a kilometre of riverfront walk and a Thames Clipper pier. Waterside is its defining character. | https://www.rightmove.co.uk/properties/164288393 |
| Community | Development | verified | Royal Wharf is a self-contained 40-acre Ballymore masterplan with its own high street, amenities, and management. It functions as a development community rather than a wider destination or single address. | https://www.rightmove.co.uk/properties/164288393 |
| Demographic | European-led | contradicted | Census 2021 data for Custom House ward (Newham) shows: White 42.6%, Black 28.1%, Asian 19.0%. While White residents are the largest single group, the substantial Black (28.1%) and Asian (19.0%) populations make this a genuinely mixed area. "European-led" understates the diversity. "Mixed" is more accurate. | https://grokipedia.com/page/Custom_House,_Newham |
| Age Mix | 30-40 | unverified | No specific Census 2021 age breakdown for Custom House ward was found in this research pass. The wider Newham borough skews young and working-age. The tag is plausible given Royal Wharf's family-oriented amenities (school, community facilities) and pricing, but cannot be confirmed from Census data alone. | — |
| Place Type | Area / masterplan | verified | Royal Wharf is a 40-acre masterplan with 3,385 homes, multiple building phases, on-site retail, community facilities, and a school. This is clearly an area/masterplan. | https://www.rightmove.co.uk/properties/164288393 |

## Tags that should be added

- `connectivity: Highly Connected`
  - Travel times to 4 hubs: Soho (Tottenham Court Road) ~16 min Elizabeth line direct (Custom House to TCR via CW, Whitechapel, Liverpool St, Farringdon); King's Cross ~22 min (Elizabeth to Farringdon/Liverpool St + Thameslink/Metropolitan); Shoreditch ~16 min (Elizabeth to Whitechapel + Overground); Canary Wharf ~5 min (Elizabeth line, 2 stops).
  - Average: ~15 min.
  - The Elizabeth line has fundamentally transformed Royal Wharf's connectivity profile. Pre-Elizabeth line, this would have been Moderately Connected via DLR only.
  - Sources: https://www.traintickets.com/train-times/custom-house-elizabeth-line-to-tottenham-court-road-elizabeth-line/ ; https://www.traintickets.com/train-times/custom-house-elizabeth-line-to-shoreditch-high-street/ ; https://londondrum.com/transport/train-journey.php?from=custom-house&to=kings-cross-st-pancras

## Tags to remove or correct

- Change `European-led` → `Mixed`
  - Why: Census 2021 shows Custom House ward is 42.6% White, 28.1% Black, and 19.0% Asian. While White residents are the plurality, the area is substantively diverse. The Black population alone at 28.1% is too significant to justify a "European-led" label. "Mixed" is the defensible tag.
  - Sources: https://grokipedia.com/page/Custom_House,_Newham

- Consider removing `30-40` or marking as unverified
  - Why: No ward-level Census 2021 age breakdown was located for Custom House in this research pass. The tag is plausible but not substantiated by ONS/Census data. Per the project's methodology, unsubstantiated demographic/age tags should be flagged.

## Current state and liveability

Royal Wharf is a complete, self-contained 40-acre riverside neighbourhood in Zone 3. The Elizabeth line has been transformative: Custom House to Liverpool Street in ~10 minutes and to Tottenham Court Road in ~16 minutes makes this location dramatically more connected than its Zone 3 designation might suggest. The Silvertown Tunnel (opened April 2025) adds cross-river road access. The on-site amenity offer (Clubhouse with pool/spa/gym, Thames Clipper pier, high street) is strong for the price point. The demographic tag needs correction: Census 2021 shows this is a genuinely mixed area, not European-led.

## Source-quality note

Evidence quality is medium-high. TfL zone data is authoritative. Census 2021 ethnicity data for Custom House ward is sourced from grokipedia.com referencing ONS data — a secondary source that should ideally be cross-checked against censusdata.uk or ONS directly. Pricing is verified against live Rightmove listings. The Elizabeth line travel times are well-sourced from multiple journey planners. The weakest area is age mix: no ward-specific Census 2021 age data was located, so the 30–40 tag remains unverified.
