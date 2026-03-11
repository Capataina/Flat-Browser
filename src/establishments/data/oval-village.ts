import type { Establishment } from "@/src/establishments/types";

const ovalVillage: Establishment = {
  id: "oval-village",
  name: "Oval Village",
  dev: "Berkeley Group",
  loc: "Vauxhall - SW8 - Zone 1",
  preview:
    "A Berkeley development on a former gasworks site on the Nine Elms corridor. Zone 1 Victoria line - Victoria in 4 minutes, Oxford Circus in 7. Canal-side. Consistently underrated relative to its Zone 1 location.",
  desc: "Oval Village sits on the Nine Elms regeneration corridor between Battersea and Elephant & Castle and is persistently underrated for what its Victoria line access delivers. Vauxhall station puts Victoria in 4 minutes and Oxford Circus in 7 - those are genuine Zone 1 numbers at a price point that does not reflect it. The development is canal-side on a former gasworks site, with multiple phases building out over the coming years. Berkeley's build quality is reliably good and the area will continue to improve as the Nine Elms corridor matures around it: Battersea Power Station, Embassy Gardens, and Riverlight Quay are all close, and every delivered anchor on the corridor has raised the quality of what surrounds it. The limitation is that Oval Village has no strong independent identity - there is no destination quality to the public realm the way BPS or King's Cross has. You are getting Zone 1 at a lower price than anything further north on the corridor.",
  ageNote:
    "Estimated to skew 30-40 overall. Oval Village is purchase-led and more mature than a BTR-heavy district, but it still reads more like an established professional market than a predominantly older trophy-owner one.",
  tags: {
    zone: ["Zone 1"],
    tenure: ["Rent or buy"],
    price: ["Mid-range"],
    status: ["In delivery"],
    char: [],
    comm: ["Development"],
    demo: ["Mixed"],
    age: ["18-30"],
    form: ["Project / development"],
    conn: ["Highly Connected"],
  },
  projects: [
    {
      name: "Oval Village by Berkeley",
      note: "Conversion of a former gasworks site. Canal-side. Multiple residential phases delivering now.",
    },
    {
      name: "The Pinnacle",
      note: "Current headline phase within Oval Village. Strongest core ownership offer for buyers who want the Berkeley finish without the most future-facing delivery risk.",
    },
    {
      name: "The Halo",
      note: "Later flagship phase within the masterplan. The more skyline-oriented expression of Oval Village and one of the cleaner ways to buy into the next stage of delivery.",
    },
    {
      name: "Zone at Oval Village",
      note: "Shared-ownership route inside the same scheme. Important because it expands the real entry points into Oval Village beyond pure full-market purchase.",
    },
    {
      name: "St George Wharf",
      note: "Established Berkeley riverside development at Vauxhall. Includes the Vauxhall Tower. More premium pricing within the same postcode.",
    },
  ],
};

export default ovalVillage;
