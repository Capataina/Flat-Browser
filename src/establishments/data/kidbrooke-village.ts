import type { Establishment } from "@/src/establishments/types";

const kidbrookeVillage: Establishment = {
  id: "kidbrooke",
  name: "Kidbrooke Village",
  dev: "Berkeley Group",
  loc: "Blackheath - SE3 - Zone 3",
  preview:
    "A Berkeley Group masterplan that most people outside the area do not know about - which keeps pricing accessible for what it delivers. Cator Park is physically integrated throughout. London Bridge in roughly 15 minutes from Kidbrooke station. Blackheath village and Greenwich are both close as cultural and social anchors.",
  desc: "Kidbrooke Village is the quiet underperformer on this list - consistently well-built, well-managed, and underpriced relative to what it delivers. Cator Park is integrated physically into the development with mature trees and proper green space, not a token strip of lawn. Berkeley's build quality is reliably good: considered brick detailing, layouts that work, and maintenance that holds up. Blackheath village is walkable - the high street, the heath itself, and the independent cafes and restaurants are reachable on foot. Greenwich town centre is close enough to serve as a second social anchor. Kidbrooke station on the Southeastern line connects to London Bridge in around 15 minutes. The texture here is suburban and quiet - worth knowing going in - but it is a genuinely well-designed place that will not feel compromised to live in. Five thousand homes planned by 2032; latest phases are still delivering.",
  ageNote:
    "Estimated to skew 30-40 overall. Kidbrooke is not old, but the parkland, schools, nursery, and quieter Blackheath-adjacent setting make it feel much more like a young-family neighbourhood than a twenties-led rental scene.",
  tags: {
    zone: ["Zone 3"],
    tenure: ["Rent or buy"],
    price: ["Accessible", "Mid-range"],
    status: ["In delivery"],
    char: ["Parkside"],
    comm: ["Development"],
    demo: ["European-led"],
    age: ["30-40"],
    form: ["Area / masterplan"],
    conn: ["Moderately Connected"],
  },
  projects: [
    {
      name: "Kidbrooke Village (core masterplan)",
      note: "Multiple phases delivered and ongoing. Cator Park integrated throughout the development. PureGym and Sainsbury's Local on site.",
    },
    {
      name: "City Point",
      note: "One of the more urban-feeling residential clusters near the station. Useful if the broader masterplan reads too family-forward and suburban.",
    },
    {
      name: "Kidbrooke Square",
      note: "Newest addition to the masterplan - current phase available. Located close to the Blackheath border.",
    },
    {
      name: "The Blackheath Collection",
      note: "Boutique phase on the Blackheath border. Smaller scale, higher finish specification.",
    },
  ],
};

export default kidbrookeVillage;
