import type { Establishment } from "@/src/establishments/types";

const oneNineElms: Establishment = {
  id: "one-nine-elms",
  name: "One Nine Elms",
  dev: "Dalian Wanda",
  loc: "Nine Elms - SW8 - Zone 1",
  preview:
    "Twin towers of 46 and 56 storeys with a Shangri-La hotel component - one of the few residential addresses in London with hotel-level services built in by default. Adjacent to Vauxhall, Zone 1 Northern line, upper-floor Thames views.",
  desc: "One Nine Elms is the most overtly ambitious residential tower on the corridor. Twin towers of 46 and 56 storeys, with the lower portion occupied by a Shangri-La hotel that feeds its service infrastructure directly into the residential floors. Concierge, pool, spa, and amenities operate at a level that standalone BTR buildings cannot replicate - because the hotel infrastructure runs 24 hours a day regardless. The address sits adjacent to Vauxhall on the Northern line, Zone 1, with direct Thames sight lines from the upper floors. This is an ownership-tier product at the premium end of the Nine Elms corridor - not a rental market proposition.",
  ageNote:
    "Estimated to skew 40+ overall. Hotel-serviced ultra-prime towers at this level are much more likely to be bought by established wealth than by younger households, even if some residents fall just below that band.",
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
    conn: ["Highly Connected"],
  },
  projects: [
    {
      name: "One Nine Elms (twin towers)",
      note: "46 and 56 storeys. Shangri-La hotel services integrated into residential floors by default. River views, hotel-level amenity package.",
    },
    {
      name: "City Tower Residences",
      note: "The taller residential-led tower within the scheme. The sharper skyline and view proposition of the two at One Nine Elms.",
    },
    {
      name: "River Tower Residences",
      note: "The hotel-integrated side of the development, where the serviced-living feel is strongest and the Park Hyatt infrastructure matters most.",
    },
    {
      name: "Park Hyatt Residences",
      note: "The clearest expression of the project's hotel-serviced identity. Best thought of as the ultra-premium subset rather than a standard new-build apartment offer.",
    },
    {
      name: "The Vantage",
      note: "Adjacent ownership tower with direct Nine Elms station access. Useful comparator for buyers who want the location without the full hotel-branded price tier.",
    },
  ],
};

export default oneNineElms;
