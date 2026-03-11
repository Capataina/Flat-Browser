import type { Establishment } from "@/src/establishments/types";

const embassyGardens: Establishment = {
  id: "embassy-gardens",
  name: "Embassy Gardens",
  dev: "EcoWorld Ballymore",
  loc: "Nine Elms - SW11 - Zone 1",
  preview:
    "The stated long-term target. Sky Pool suspended between two towers. US Embassy directly adjacent - the most permanently monitored streets in London. Northern line Zone 1. 24-hour concierge, gym, spa, curated retail. The benchmark for what the long game looks like on the Nine Elms corridor.",
  desc: "Embassy Gardens is the clearest statement of what the long-term target looks like. The Sky Pool - a transparent swimming pool suspended between two residential towers 35 metres above ground - is one of the most recognisable amenity features of any development in Europe. The US Embassy sits directly adjacent, which has a measurable effect on the immediate environment: the surrounding streets are among the most consistently maintained and monitored in London. The Northern line at Nine Elms station provides Zone 1 connectivity to the West End and City. The Nine Elms riverside walk runs fully from Vauxhall to Battersea Power Station. 24-hour concierge, a gym and spa, and curated ground-floor retail complete the amenity package. This is a premium address rather than an independent destination in the way that Wembley Park or Greenwich Peninsula is - you are paying for the postcode, the finish level, and the management quality.",
  ageNote:
    "Estimated to skew 40+ overall. There will always be some younger high earners here, but the pricing, ownership profile, and prestige factor point more strongly toward older affluent households than the rest of the Nine Elms corridor.",
  tags: {
    zone: ["Zone 1"],
    tenure: ["Rent or buy"],
    price: ["Premium"],
    status: ["Ready now"],
    char: ["Waterside"],
    comm: ["Address"],
    demo: ["European-led"],
    age: ["30-40"],
    form: ["Project / development"],
    conn: ["Well Connected"],
  },
  projects: [
    {
      name: "Embassy Gardens by EcoWorld Ballymore",
      note: "Core development. Sky Pool. Gym, spa, 24-hour concierge, curated retail. The benchmark address on the Nine Elms corridor.",
    },
    {
      name: "The Modern",
      note: "The sharper, newer tower expression inside Embassy Gardens. More overtly premium and skyline-led than the earlier courtyard-oriented buildings.",
    },
    {
      name: "Embassy Boulevard by Moda Living",
      note: "The most relevant nearby rental-led challenger. Similar corridor, similar target audience, but more obviously BTR in feel than Embassy Gardens itself.",
    },
    {
      name: "Riverlight by St James (Berkeley)",
      note: "Adjacent development along the Nine Elms riverside. Six buildings, Thames views, residents' club. Within walking distance of Embassy Gardens.",
    },
    {
      name: "Bloom Nine Elms by Essential Living",
      note: "BTR-only - cannot be purchased. River views, rooftop amenities. Waitrose directly on-site. Well-reviewed by residents.",
    },
    {
      name: "One Nine Elms",
      note: "The hotel-serviced ultra-prime tower comparison at the Vauxhall end of the corridor. Flashier and more ownership-tier than Embassy Gardens, but part of the same premium set.",
    },
  ],
};

export default embassyGardens;
