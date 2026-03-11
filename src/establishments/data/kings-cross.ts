import type { Establishment } from "@/src/establishments/types";

const kingsCross: Establishment = {
  id: "kings-cross",
  name: "King's Cross",
  dev: "Argent",
  loc: "Granary Square - N1C - Zone 1",
  preview:
    "The best-executed mixed-use development in London - Coal Drops Yard, Regent's Canal, Central Saint Martins, Google's new HQ, and the British Library all within walking distance. Six Tube lines plus Eurostar from St Pancras. The highest daily life quality ceiling on this list.",
  desc: "The Argent masterplan at King's Cross has produced the most coherent and desirable urban neighbourhood built in London in the last 30 years. Coal Drops Yard is one of the best retail and dining environments in the city. Granary Square and the canal frontage are genuinely beautiful year-round. Central Saint Martins, the British Library, and Google's campus have created an intellectual and creative density no other development on this list can match. King's Cross St Pancras connects to six Tube lines (Victoria, Metropolitan, Circle, Hammersmith & City, Piccadilly, Northern) plus Eurostar from St Pancras next door - the best-connected point in London. Renting here is premium: Enclave KX from roughly GBP 3,800/month for 1-beds. The Gasholders and Capella are the long-term ownership targets. There is no remaining land within the masterplan for further supply, which makes both the living quality and the capital case structurally secure.",
  ageNote:
    "Estimated to skew 30-40 overall. The station crowd and student presence pull the visible mix downward, but the people most likely to live and spend serious time in the district are more often established professionals than first-job renters.",
  tags: {
    zone: ["Zone 1"],
    tenure: ["Rent or buy"],
    price: ["Premium"],
    status: ["Ready now"],
    char: ["Waterside"],
    comm: ["Destination"],
    demo: ["Mixed"],
    age: ["30-40"],
    form: ["Area / masterplan"],
    conn: ["Highly Connected"],
  },
  projects: [
    {
      name: "Enclave KX",
      note: "BTR development on Regent's Canal and Camley Street Natural Park. 5 minutes from King's Cross St Pancras. 1-3 bed apartments from roughly GBP 3,800/month.",
    },
    {
      name: "Capella by Argent",
      note: "Final premium for-sale phase of the King's Cross Central masterplan. Designed by Allies and Morrison; interiors by Johnson Naylor. Adjacent to Coal Drops Yard.",
    },
    {
      name: "Gasholders Building",
      note: "Three Grade II listed Victorian iron gasholders converted into circular canal-side apartments by Wilkinson Eyre. The most architecturally extraordinary residential address in N1C.",
    },
    {
      name: "Cadence",
      note: "Design-led canal-edge building by Alison Brooks and Ash Sakula. A more contemporary ownership option than the heritage-heavy Gasholders.",
    },
    {
      name: "The Plimsoll Building",
      note: "One of the bigger residential anchors in the wider masterplan. Good example of the everyday liveability tier beneath the trophy addresses.",
    },
    {
      name: "Author King's Cross",
      note: "More discreet canal-adjacent homes near Camley Street. Useful counterpoint to the louder Granary Square-facing addresses.",
    },
  ],
};

export default kingsCross;
