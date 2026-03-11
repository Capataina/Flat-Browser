import type { Establishment } from "@/src/establishments/types";

const kingsCrossOwnership: Establishment = {
  id: "kx-ownership",
  name: "King's Cross - Gasholders & Capella",
  dev: "Argent",
  loc: "Granary Square - N1C - Zone 1",
  preview:
    "Renting at King's Cross is premium. Buying is the long game. The Gasholders are Grade II listed Victorian iron structures converted by Wilkinson Eyre into circular canal-side apartments - the most architecturally extraordinary residential purchase in N1C. Capella is the final for-sale phase of the entire masterplan.",
  desc: "The ownership tier within King's Cross Central is in a different category from any other purchase on this list. The Gasholders are an architectural category of their own - three Grade II listed Victorian iron gas-holding structures converted by Wilkinson Eyre into circular apartments directly above Regent's Canal. The heritage significance and physical specificity of the spaces cannot be replicated anywhere. Nothing new-build can offer what these buildings offer. Capella by Argent is the final for-sale phase of the King's Cross Central masterplan - designed by Allies and Morrison with Johnson Naylor interiors, adjacent to Coal Drops Yard, and already delivering close to its launch price. There is no remaining land within the masterplan for further development, which makes the supply constraint here permanent. Long-term capital appreciation in N1C is as structurally sound as anything in London.",
  ageNote:
    "Estimated to skew 40+ because these are scarce, ownership-led, design-collector addresses in one of the most expensive micro-markets in London. The through-traffic around King's Cross is younger, but the likely resident buyer is not.",
  tags: {
    zone: ["Zone 1"],
    tenure: ["Rent or buy"],
    price: ["Premium"],
    status: ["Ready now"],
    char: ["Waterside"],
    comm: ["Address"],
    demo: ["Mixed"],
    age: ["30-40"],
    form: ["Signature address"],
    conn: ["Highly Connected"],
  },
  projects: [
    {
      name: "Gasholders Building (Wilkinson Eyre)",
      note: "Three Grade II listed Victorian iron gasholders converted into circular canal-side apartments. Regent's Canal directly below. Heritage significance no new-build can replicate.",
    },
    {
      name: "Capella by Argent",
      note: "Final for-sale phase of the King's Cross Central masterplan. Allies and Morrison design; Johnson Naylor interiors. Adjacent to Coal Drops Yard.",
    },
    {
      name: "Cadence",
      note: "Ash Sakula and Alison Brooks collaboration at the western edge of the masterplan. A more design-forward ownership option than a standard canal-front apartment block.",
    },
    {
      name: "Author King's Cross",
      note: "Canal-adjacent ownership product with stronger residential calm than the busiest parts of Granary Square. More private and lower-key than Capella or the Gasholders.",
    },
  ],
};

export default kingsCrossOwnership;
