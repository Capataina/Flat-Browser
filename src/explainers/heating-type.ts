import type { Explainer } from "./types";
import type { HeatingType } from "../areas/types";

export const heatingType: Explainer<HeatingType> = {
  id: "heating-type",
  term: "Heating type",
  category: "building",
  description:
    "How the building delivers heat to individual flats. Gas combi boilers are familiar and cheap per kWh but are being phased out of new builds. Electric heating is universal but expensive per unit unless paired with a heat pump. Communal systems run one shared heat source for the whole building and bill residents per unit or as part of service charges — efficient in theory, often overpriced in practice. Heat pumps are the new-build standard and are the cheapest to run when well-designed.",
  relevance: (_profile, value) => {
    switch (value) {
      case "gas":
        return {
          severity: "info",
          message: `Gas heating is familiar and cheap per unit. Expect bills roughly in line with your current setup.`,
        };
      case "electric":
        return {
          severity: "warning",
          message: `Electric-only heating (without a heat pump) is usually the most expensive to run — especially in winter. Budget for higher bills than a gas or heat-pump equivalent.`,
        };
      case "communal":
        return {
          severity: "info",
          message: `Communal heating means you share a central heat source with the rest of the building. Check resident reviews specifically — communal systems frequently appear in complaints for overcharging, patchy temperature control, or inflexible billing.`,
        };
      case "heat-pump":
        return {
          severity: "good",
          message: `Heat pumps are the most efficient modern option — low bills and low carbon if the system is well-designed. This is a good sign for a newer building.`,
        };
      case "mixed":
        return {
          severity: "info",
          message: `Mixed heating means different parts of the building or different systems serve different flats. Ask specifically what serves the flat you are looking at.`,
        };
      case "unknown":
        return {
          severity: "info",
          message: `Heating type not verified. Worth asking — the answer changes the monthly bills estimate by £50+.`,
        };
    }
  },
  related: ["epc-rating", "thermal-performance"],
};
