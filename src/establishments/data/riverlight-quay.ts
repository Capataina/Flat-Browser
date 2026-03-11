import type { Establishment } from "@/src/establishments/types";

const riverlightQuay: Establishment = {
  id: "riverlight",
  name: "Riverlight Quay",
  dev: "St James (Berkeley Group)",
  loc: "Nine Elms - SW8 - Zone 1",
  preview:
    "Six riverfront buildings on the Nine Elms corridor between Vauxhall and Embassy Gardens. Residents' club, Thames views, mix of rental and ownership. A premium address on a corridor that has permanently improved.",
  desc: "Riverlight Quay is a St James development midway along the Nine Elms corridor, between Vauxhall Bridge and Embassy Gardens. Six buildings of varying heights sit on the Thames frontage, with a residents' club, riverside walk access, and views across to Pimlico. Both rental and ownership options exist within the development. The Northern line from Nine Elms station provides Zone 1 connectivity. Every anchor project delivered on this corridor - the US Embassy, Apple HQ at Battersea Power Station, the Northern line extension - has raised the quality of what surrounds it, and Riverlight Quay benefits from all of them. The development does not have an independent brand or destination identity comparable to the larger masterplans, but the build quality and location fundamentals are solid.",
  ageNote:
    "Estimated to skew 40+ overall. Some residents will still be in their thirties, but the ownership-heavy riverside profile and premium positioning read older and more settled than the nearby rental-led options.",
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
      name: "Riverlight Quay (six buildings)",
      note: "Riverside BTR and for-sale mix. Residents' club. Thames views. Walking distance to both Nine Elms station and Battersea Power Station.",
    },
    {
      name: "Embassy Boulevard by Moda Living",
      note: "The most obvious nearby premium rental comparator. Similar audience and corridor, but more explicitly amenity-led BTR than Riverlight itself.",
    },
    {
      name: "Embassy Gardens",
      note: "More status-heavy neighbour on the same riverside stretch. Strong reference point for how premium the corridor has become overall.",
    },
    {
      name: "The Residence, Nine Elms",
      note: "A quieter Vauxhall-side address serving much the same renter-buyer market looking for a polished, professionally managed Zone 1 new-build.",
    },
    {
      name: "One Nine Elms",
      note: "Ultra-prime tower option nearby. Less directly comparable on price, but materially part of the same upper-end riverside proposition in Vauxhall-Nine Elms.",
    },
  ],
};

export default riverlightQuay;
