# One Nine Elms — Fact-Check Report

- Source data file: `src/establishments/data/one-nine-elms.ts`
- Developer listed in app data: `Dalian Wanda`
- Current assigned tags: `Zone 1`, `Buy only`, `Premium`, `Ready now`, `Waterside`, `Address`, `European-led`, `40+`, `Project / development`

## Tag Verification

| Tag | Current Value | Verdict | Source |
|-----|--------------|---------|--------|
| Zone | Zone 1 | **Verified** | Adjacent to Vauxhall (Zone 1/2) and Nine Elms station (Zone 1). The development is within Zone 1. | https://tfl.gov.uk/tube/stop/940GZZNEUGST/nine-elms-underground-station ; https://tfl.gov.uk/tube/stop/940GZZLUVXL/vauxhall-underground-station |
| Tenure | Buy only | **Contradicted — correct to "Rent or buy"** | Multiple rental listings exist: 1-bed at £4,615 pcm, 2-bed at £7,085 pcm, 3-bed at £22,013 pcm, and Park Hyatt Residences at £17,000 pcm. Sale listings also active including shared ownership at £270,000 (40% share) and full ownership 1-bed at £1,063,000. | https://www.rightmove.co.uk/properties/163538546 ; https://www.rightmove.co.uk/properties/164451245 ; https://www.rightmove.co.uk/properties/161085977 ; https://www.rightmove.co.uk/properties/167182376 |
| Price | Premium | **Verified** | Sale prices from £675,000 (full value shared ownership) to £1,063,000+ for 1-beds. Rents from £4,615 to £22,013 pcm. Park Hyatt Residences rent at £17,000 pcm for 3-bed. Clearly premium. | https://www.rightmove.co.uk/properties/166633634 ; https://www.rightmove.co.uk/properties/161085977 |
| Status | Ready now | **Verified** | Development completed in 2024. Park Hyatt London River Thames hotel opened October 2024. Active live sale and rental listings. | https://en.wikipedia.org/wiki/One_Nine_Elms ; https://www.battersea9elms.co.uk/news/81-park-hyatt-london-river-thames-opens-in-nine-elms |
| Character | Waterside | **Verified** | Twin towers on Nine Elms Lane, adjacent to the Thames with river views from upper floors. | https://www.kpf.com/project/one-nine-elms ; https://riverparktower.com/one-nine-elms/ |
| Community | Address | **Verified** | One Nine Elms is a specific twin-tower residential address with integrated hotel services, not a wider masterplan or area. | https://en.wikipedia.org/wiki/One_Nine_Elms |
| Demographic | European-led | **Unsubstantiated — remove** | Census 2021 Nine Elms ward: only 30% White British, 58% White (all). Significant Asian (16%), Black (10%), Arab (4%), and EU-born populations. The area is diverse. The developer and current owner are Chinese-linked (originally Dalian Wanda, now CC Land Holdings / Cheung Chung-kiu). "European-led" cannot be substantiated. | https://www.citypopulation.de/en/uk/london/wards/wandsworth/E05014015__nine_elms/ ; https://en.wikipedia.org/wiki/One_Nine_Elms |
| Age Mix | 40+ | **Unsubstantiated — remove** | Nine Elms ward data shows 20–29 (2,827) and 30–39 (2,393) dominate; only 1,135 in the 40–49 band. While hotel-serviced luxury towers may attract older wealthy buyers, Census data does not support a 40+ tag for the area. | https://www.citypopulation.de/en/uk/london/wards/wandsworth/E05014015__nine_elms/ |
| Place Type | Project / development | **Verified** | Twin-tower residential development with integrated hotel — a single project, not a masterplan or uniquely scarce heritage address. | https://en.wikipedia.org/wiki/One_Nine_Elms |

## Tags to Add

- **connectivity: Highly Connected** — Vauxhall station (adjacent) provides Victoria line direct to Soho (~9 min to Oxford Circus), King's Cross (~15 min), and onward connections to Shoreditch (~22 min) and Canary Wharf (~28 min). Average ~19 min. Falls within the ≤20 min "Highly Connected" tier. Vauxhall is better connected than Nine Elms station due to the Victoria line.

## Tags to Remove or Correct

- **Correct `Buy only` → `Rent or buy`**: Extensive rental listings exist on Rightmove across both towers, including Park Hyatt-branded residences. Sale listings also active. The live market is clearly rent-or-buy.
- **Remove `European-led`**: Census 2021 Nine Elms ward shows 30% White British in a diverse area. The developer history is Chinese-linked (Dalian Wanda → R&F Properties → CC Land Holdings). No evidence supports "European-led".
- **Remove `40+`**: Nine Elms ward age distribution is dominated by 20–39 year olds. Cannot be substantiated by Census data.

## Additional Factual Issues in Codebase

1. **Developer**: The codebase lists "Dalian Wanda" but Wanda sold its stake in 2018 to R&F Properties, which in turn transferred the development to CC Land Holdings (Cheung Chung-kiu) in 2024 for a nominal HK$1. The current developer/owner is **CC Land Holdings**, not Dalian Wanda.
2. **Hotel brand**: The codebase description references a "Shangri-La hotel component" but the hotel is actually a **Park Hyatt London River Thames** (opened October 2024). There is no Shangri-La connection. This is a factual error that should be corrected.
3. **Tower heights**: The codebase says "46 and 56 storeys" but Wikipedia and KPF cite 42-storey River Tower (hotel + 103 apartments) and 57-storey City Tower (334 apartments). Minor discrepancy.

Sources:
- https://en.wikipedia.org/wiki/One_Nine_Elms
- https://www.propertyweek.com/news/rf-in-talks-to-sell-1-3bn-one-nine-elms-development
- https://www.battersea9elms.co.uk/news/81-park-hyatt-london-river-thames-opens-in-nine-elms
- https://onemileatatime.com/news/park-hyatt-london-river-thames-nine-elms/

## Summary

One Nine Elms is a completed, premium twin-tower development adjacent to Vauxhall in Zone 1 with a Park Hyatt hotel (not Shangri-La as stated in the codebase). The most significant codebase errors are: (1) tenure is "Rent or buy" not "Buy only" — extensive rental listings exist; (2) the developer is now CC Land Holdings, not Dalian Wanda; (3) the hotel brand is Park Hyatt, not Shangri-La. Demographic and age tags are not substantiated by Census data and should be removed. The development's connectivity via Vauxhall's Victoria line makes it the best-connected establishment in this batch.

## Confidence: High

Zone, tenure, price, status, and developer history are well-evidenced from TfL, Rightmove, Wikipedia, and press sources. The hotel brand is confirmed by Park Hyatt/Hyatt corporate announcements. Demographic and age verdicts are based on Census 2021 Nine Elms ward data.
