# Wembley Park — Fact-Check Report

- Source data file: `src/establishments/data/wembley-park.ts`
- Developer listed in app data: `Quintain Living`
- Current assigned tags: `Zone 4`, `Rent only`, `Accessible`, `Mid-range`, `Ready now`, `Parkside`, `Destination`, `South Asian-led`, `30-40`, `Area / masterplan`

## Tag Verification

| Tag | Current Value | Verdict | Source |
|-----|--------------|---------|--------|
| Zone | Zone 4 | **Verified** | Wembley Park station is confirmed TfL Zone 4 on both Metropolitan and Jubilee lines. | https://tfl.gov.uk/hub/stop/940GZZLUWYP/wembley-park-underground-station/ ; https://en.wikipedia.org/wiki/Wembley_Park_station |
| Tenure | Rent only | **Verified** | Quintain Living operates a build-to-rent model. All residential buildings (Luna, Ferrum, Madison, Canada Gardens, Quadrant Court) are professionally managed BTR with no for-sale units. | https://www.quintainliving.com/ ; https://www.quintainliving.com/search-units |
| Price | Accessible, Mid-range | **Partially contradicted** | Current listings show studios from ~£2,107/month (Luna) and 1-beds from ~£1,650/month (Quadrant Court). Bills and Wi-Fi are included in Quintain Living rents. This is mid-range for London BTR but whether the lowest entry points qualify as "Accessible" depends on the schema threshold. The included-bills model reduces effective cost. Retaining both tags is defensible but borderline. | https://www.quintainliving.com/wembley/studio-flats-to-rent ; https://www.rightmove.co.uk/properties/165449957 ; https://www.rightmove.co.uk/properties/163426157 |
| Status | Ready now | **Verified** | Multiple buildings are occupied and letting. Luna is the newest completed building. Masterplan reaches 8,500 homes on full completion ~2027, but there is substantial occupied stock now. | https://www.quintainliving.com/ |
| Character | Parkside | **Verified** | Union Park and extensive green spaces are central to the masterplan. The development is built around parkland and the Olympic Way boulevard. | https://www.quintainliving.com/ |
| Community | Destination | **Verified** | Wembley Stadium, Boxpark, London Designer Outlet (70+ shops/restaurants), Cineworld, Troubadour Theatre, and year-round events programming make this a genuine destination. Named Sunday Times Best Place to Live in London 2025. | https://www.quintainliving.com/ |
| Demographic | South Asian-led | **Partially supported — medium confidence** | Census 2021 for Wembley Park ward: White 3,046 (40.4%), Asian 2,465 (32.6%), Black 1,001 (13.3%). White is the plurality in this specific ward. However, Brent borough overall has 33% Asian/Asian British (19% Indian — 5th highest nationally). The wider Wembley area (Wembley Central, Wembley Hill, Alperton wards) has a much stronger South Asian character. The ward itself skews more mixed due to incoming BTR residents, but the neighbourhood context is recognisably South Asian-led. | https://www.citypopulation.de/en/uk/london/wards/brent/E05013516__wembley_park/ ; https://data.brent.gov.uk/dataset/2334d/brent-census-atlas-2021-ethnicity |
| Age | 30-40 | **Contradicted by Census proxy** | Census 2021/2024 estimates for Wembley Park ward: 20-29 is the largest age group (6,378), followed by 30-39 (3,457). The ward skews heavily 20-29 due to the BTR demographic. Tag "18-30" may be more accurate, though the BTR professional tenant base may cluster slightly older than pure Census numbers suggest. | https://www.citypopulation.de/en/uk/london/wards/brent/E05013516__wembley_park/ |
| Place Type | Area / masterplan | **Verified** | 85-acre masterplan with multiple buildings, public realm, commercial, leisure, and 8,500 homes at completion. Clearly an area/masterplan. | https://www.quintainliving.com/ |

## Tags to Add

- **connectivity: Well Connected** — Estimated average public transport travel times: Soho ~23 min (Metropolitan to Baker Street, Jubilee/Elizabeth to Tottenham Court Road), King's Cross ~15 min (Metropolitan line direct), Shoreditch ~35 min (Jubilee to London Bridge, Overground), Canary Wharf ~30 min (Jubilee line direct). Average ~26 min → Well Connected.

## Tags to Remove or Correct

- **Age: Consider changing "30-40" to "18-30"** — Census 2021 and 2024 estimates show the 20-29 cohort as dominant in Wembley Park ward, nearly double the 30-39 cohort. The BTR model with included bills attracts younger working professionals.
- **Price: Review "Accessible" tier** — Entry-level rents (~£1,650-£2,107/month with bills included) are mid-range rather than clearly accessible. Whether to retain "Accessible" depends on the schema's threshold definition. If bills-inclusive rents under ~£1,800 qualify, the tag holds; otherwise remove it.
- **Demographic: "South Asian-led" can be retained with a caveat** — The ward itself is White-plurality (40.4% White vs 32.6% Asian), but the broader Wembley neighbourhood and Brent borough context strongly support a South Asian-led characterisation. Medium confidence.

## Summary

Wembley Park's core tags are largely accurate: Zone 4, rent-only BTR, parkside destination, and area/masterplan are all verified. The two areas of concern are: (1) the age tag "30-40" is contradicted by Census data showing a 20-29 dominant cohort, and (2) the "South Asian-led" demographic tag is supported by wider area context but not by the specific ward-level Census plurality. Connectivity is Well Connected at ~26 minutes average.

## Confidence: Medium

Zone, tenure, character, community, form, and status tags are high confidence. Demographic and age tags are medium confidence due to the tension between ward-level Census data and neighbourhood-level characterisation. The ward population has grown from 2,074 (2011) to 14,772 (2024 est.) — meaning Census 2021 captured a community still in its early formation, and the demographic profile may continue to shift.
