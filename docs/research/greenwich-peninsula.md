# Greenwich Peninsula — Fact-Check Report

- Source data file: `src/establishments/data/greenwich-peninsula.ts`
- Developer listed in app data: `Knight Dragon + GLA`
- Current assigned tags: `Zone 2`, `Rent or buy`, `Accessible`, `Mid-range`, `In delivery`, `Waterside`, `Destination`, `European-led`, `30-40`, `Area / masterplan`

## Tag Verification

| Tag | Current Value | Verdict | Source |
|-----|--------------|---------|--------|
| Zone | Zone 2 | **Partially correct — should be Zone 2/3** | North Greenwich station straddles the Zone 2/3 boundary. Passengers travelling to central London are charged the lower (Zone 2) fare, but the official designation is Zone 2/3. Tagging as "Zone 2" alone is defensible for user-facing simplicity but not strictly accurate. | https://tfl.gov.uk/tube/stop/940GZZLUNGW/north-greenwich-underground-station ; https://en.wikipedia.org/wiki/North_Greenwich_tube_station ; https://www.studycountry.com/wiki/is-north-greenwich-in-zone-2-or-3 |
| Tenure | Rent or buy | **Verified** | Knight Dragon sells apartments (Peninsula Gardens achieved 94% sell-out on opening weekend) and also offers rentals. Both for-sale and to-let listings are live. | https://www.greenwichpeninsula.co.uk/renting-at-peninsula-gardens ; https://www.rightmove.co.uk/properties/166862276 ; https://www.propertylondon.co.uk/articles/knight-dragon-sees-94-sell-out-over-the-opening-weekend-at-peninsula-gardens-greenwich/ |
| Price | Accessible, Mid-range | **Verified** | Current rents: studios £1,900–£2,200/month, 1-beds £2,100–£2,400/month, 2-beds £2,600–£3,200/month. Sales: studios from ~£359,000. Entry-level pricing is accessible for a Zone 2/3 riverside location; larger units push into mid-range. | https://www.greenwichpeninsula.co.uk/renting-at-peninsula-gardens ; https://www.romansandpartners.com/properties/the-beacon-greenwich-peninsula-se10/ |
| Status | In delivery | **Verified** | 17,500-home masterplan over 30 years (completion ~2043). ~3,094 homes delivered so far. Peninsula Gardens just completing; Morden Wharf (1,500 homes) is a major upcoming phase. Multiple phases still in planning/construction. | https://www.propertyweek.com/analysis/knight-dragons-greenwich-peninsula-starts-to-take-shape ; https://www.greenwichpeninsula.co.uk/renting-at-peninsula-gardens |
| Character | Waterside | **Verified** | The development sits on the Thames riverfront. The Tide elevated linear park runs along the river. Upper Riverside towers directly face the Thames. | https://www.greenwichpeninsula.co.uk/ |
| Community | Destination | **Verified** | The O2 Arena directly adjacent (year-round major events), Design District (creative studios and cultural programming), The Tide linear park, and 40+ restaurants. Genuine destination status. | https://www.greenwichpeninsula.co.uk/ |
| Demographic | European-led | **Supported — medium confidence** | Census 2021 for Greenwich Peninsula ward: White 5,939 (52.0%), Asian 2,404 (21.1%), Black 1,608 (14.1%), Mixed 882 (7.7%). White/European is the majority. Country of birth: UK 5,590, EU 1,927 — significant European-born population. The tag is reasonable but the ward is meaningfully diverse. | https://www.citypopulation.de/en/uk/london/wards/greenwich/E05014082__greenwich_peninsula/ |
| Age | 30-40 | **Verified** | Census 2021 for Greenwich Peninsula ward: 30-39 is the largest age group with 4,257 residents, followed by 20-29 at 3,289. The dominant cohort is clearly 30-39. | https://www.citypopulation.de/en/uk/london/wards/greenwich/E05014082__greenwich_peninsula/ |
| Place Type | Area / masterplan | **Verified** | 150-acre, 30-year masterplan with 17,500 planned homes, multiple phases, public realm, commercial and cultural infrastructure. Textbook area/masterplan. | https://www.greenwichpeninsula.co.uk/ |

## Tags to Add

- **connectivity: Well Connected** — Estimated average public transport travel times: Soho ~25 min (Jubilee to Westminster/Bond Street), King's Cross ~25 min (Jubilee to London Bridge, Northern to KX), Shoreditch ~25 min (Jubilee to Canada Water, Overground), Canary Wharf ~8 min (Jubilee, 1 stop). Average ~21 min → Well Connected (just above the 20-min threshold).

## Tags to Remove or Correct

- **Zone: Consider adding "Zone 3" alongside "Zone 2"** — North Greenwich is officially Zone 2/3. For consistency with other boundary stations like Stratford (tagged Zone 2, Zone 3), Greenwich Peninsula could be tagged `["Zone 2", "Zone 3"]`. The current "Zone 2" alone is defensible since passengers get the lower fare, but it omits the Zone 3 component.

## Summary

Greenwich Peninsula's tags are largely accurate and well-supported. The development is a verified waterside destination masterplan with rent-or-buy tenure and accessible-to-mid-range pricing. The "European-led" demographic tag is supported by Census 2021 showing a 52% White majority, and the "30-40" age tag is confirmed by the 30-39 cohort being the ward's largest. The only notable correction is the zone boundary: North Greenwich is officially Zone 2/3, not Zone 2 alone.

## Confidence: High

All core tags verified by multiple authoritative sources (TfL, ONS Census 2021, developer microsites, Rightmove). Demographic and age tags are Census-backed at ward level. The Greenwich Peninsula ward boundary aligns well with the development footprint, giving good data fidelity.
