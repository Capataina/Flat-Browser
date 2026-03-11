import type { Establishment } from "@/src/establishments/types";

const bloomNineElms: Establishment = {
  id: "bloom",
  name: "Bloom Nine Elms",
  dev: "Essential Living",
  loc: "Nine Elms - SW8 - Zone 1",
  preview:
    "BTR-only - the Nine Elms corridor address you can rent but not purchase. River views, rooftop amenities, Waitrose directly on-site. Zone 1 Northern line. A well-managed premium rental address on London's most improved riverside stretch.",
  desc: "Bloom Nine Elms is the BTR-only product on the Nine Elms corridor. Essential Living run a well-managed building with consistently positive resident reviews: river views, a rooftop terrace, a strong amenity package, and a Waitrose at street level. The Northern line is directly accessible from Nine Elms station. The Nine Elms riverside walk connects east to Battersea Power Station and west toward Vauxhall. This is a premium rental address without the independent destination identity of a larger masterplan - you are paying for the postcode, the finish level, and management quality. The Waitrose on-site is a genuine quality-of-life convenience that the comparable developments nearby do not have.",
  ageNote:
    "Estimated to skew 30-40 overall. Bloom is younger than the ownership-led Nine Elms addresses, but its premium BTR profile still feels more like established professionals than a predominantly under-30 renter base.",
  tags: {
    zone: ["Zone 1"],
    tenure: ["Rent only"],
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
      name: "Bloom Nine Elms",
      note: "BTR-only. River views, rooftop terrace. Waitrose on ground floor. Consistently well-reviewed on Homeviews and Google.",
    },
    {
      name: "Embassy Boulevard by Moda Living",
      note: "Neighbouring premium rental play on the same corridor. Strong amenity offer and one of the clearest like-for-like alternatives to Bloom.",
    },
    {
      name: "Embassy Gardens by EcoWorld Ballymore",
      note: "The benchmark ownership-led address nearby. Sky Pool, concierge, spa, and the most status-heavy proposition on the Nine Elms stretch.",
    },
    {
      name: "Riverlight Quay",
      note: "Established premium riverside address on the same corridor. Useful as a direct quality and location comparison for Bloom's renter profile.",
    },
    {
      name: "The Residence, Nine Elms",
      note: "A quieter riverside development in the same Vauxhall-Nine Elms orbit. Appeals to the same renter-buyer pool looking for a polished managed address.",
    },
  ],
};

export default bloomNineElms;
