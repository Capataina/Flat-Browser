import type { Explainer } from "./types";
import type { TfLZone } from "../areas/types";

export const zone: Explainer<TfLZone> = {
  id: "zone",
  term: "TfL zone",
  category: "connectivity",
  description:
    "TfL fare zones are concentric bands used to price tube, Overground, Elizabeth Line, DLR, and National Rail journeys in London. Zone 1 is the central core; zones spiral outward to 9. Zone matters for daily commute cost — a Zone 1–2 travelcard is meaningfully cheaper than a Zone 1–5 one — and is a rough proxy for centrality, though modern high-capacity lines like the Elizabeth Line blur the relationship between zone and actual journey time.",
  relevance: (_profile, value) => {
    const zoneNum = parseInt(value.replace("Zone ", ""), 10);
    if (zoneNum <= 2) {
      return {
        severity: "good",
        message: `${value} is central — shortest fares, broadest access, minimal walk-ups and interchanges for most destinations.`,
      };
    }
    if (zoneNum === 3) {
      return {
        severity: "info",
        message: `${value} is inner-outer balance — cheaper rent, slightly longer fares, still well-connected on most lines.`,
      };
    }
    if (zoneNum === 4) {
      return {
        severity: "info",
        message: `${value} is outer London. Fares are higher but rent is usually lower — worth the trade-off only if the connectivity is genuinely strong.`,
      };
    }
    return {
      severity: "warning",
      message: `${value} is deep outer London. Fare costs start to bite, and commute times to central clusters climb — you are moving partly to escape exactly this, so weigh carefully.`,
    };
  },
  related: ["connectivity-score", "multi-cluster-commute"],
};
