import type { Establishment } from "@/src/establishments/types";

const batterseaSwitchHouse: Establishment = {
  id: "bps-switch-house",
  name: "Battersea Power Station - Switch House",
  dev: "SP Setia - Sime Darby - EPF",
  loc: "Nine Elms - SW11 - Zone 1",
  preview:
    "Apartments inside the Grade II* listed Power Station building - not adjacent to it, not part of a new-build block next door. Inside it. Switch House East and West are among the most architecturally extraordinary residential addresses in South West London. There is only one Battersea Power Station.",
  desc: "The distinction between Circus West Village and Switch House is fundamental. Circus West Village is a new-build BTR block on the Battersea Power Station masterplan. Switch House East and West are apartments inside the Grade II* listed Power Station building itself - within the original brick walls of one of the most recognisable industrial structures in the world. The scale of the building, the original Art Deco detailing, and the chimney views create a residential experience that cannot be replicated anywhere by anything. Apple's European HQ occupies the turbine halls immediately below. Zone 1, Northern line, a six-acre park, and 100+ shops and restaurants are all accessible from the building. The price reflects the permanence of the scarcity: there are 295 apartments inside the Power Station and no possibility of further supply - ever.",
  ageNote:
    "Estimated to skew 40+ because this is an ultra-prime ownership-only subset inside the landmark building itself, which strongly suggests wealthy established buyers rather than younger households.",
  tags: {
    zone: ["Zone 1"],
    tenure: ["Rent or buy"],
    price: ["Premium"],
    status: ["Ready now"],
    char: ["Waterside"],
    comm: ["Address"],
    demo: ["European-led"],
    age: ["30-40"],
    form: ["Signature address"],
    conn: ["Well Connected"],
  },
  projects: [
    {
      name: "Switch House East",
      note: "Apartments within the Grade II* listed Power Station. River-facing. The most dramatic residential addresses in SW London.",
    },
    {
      name: "Switch House West",
      note: "Larger apartments within the Power Station. Some of the most substantial riverside spaces available in SW8.",
    },
    {
      name: "Power Station Residences Collection",
      note: "The broader residential set inside the landmark building itself. Heritage structure, concierge, and immediate access to the retail and park offering below.",
    },
    {
      name: "Sky Villas at Battersea Power Station",
      note: "Ultra-limited upper-tier homes carved into the landmark itself. The trophy subset within an already scarce ownership address.",
    },
  ],
};

export default batterseaSwitchHouse;
