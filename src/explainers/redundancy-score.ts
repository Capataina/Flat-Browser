import type { Explainer } from "./types";
import type { ConnectivityScore } from "../areas/types";

export const redundancyScore: Explainer<ConnectivityScore> = {
  id: "redundancy-score",
  term: "Transport redundancy score",
  category: "connectivity",
  description:
    "A 0–5 score measuring how many genuinely independent transport lines serve the area — tube, Overground, Elizabeth Line, DLR, National Rail, tram. This is distinct from multi-cluster coverage: a high multi-cluster score tells you where you can go, while redundancy tells you what happens when a line fails. A single-line area can have great multi-cluster coverage on paper and still strand you every time that one line has a signal failure. Nine Elms on the Northern Line extension is the canonical example.",
  relevance: (_profile, value) => {
    if (value >= 4) {
      return {
        severity: "good",
        message: `${value}/5 means multiple independent lines. Line failures are inconvenient rather than stranding — strong daily reliability.`,
      };
    }
    if (value === 3) {
      return {
        severity: "good",
        message: `3/5 is solid redundancy. Usually two or three independent lines — enough resilience that a single outage is survivable.`,
      };
    }
    if (value === 2) {
      return {
        severity: "warning",
        message: `2/5 is thin. Usually one primary line plus a slower backup. Line failures will bite on busy days.`,
      };
    }
    return {
      severity: "warning",
      message: `${value}/5 means you are functionally single-line dependent. When the line fails — and it will fail — you are stranded. This is a real daily risk over a 12+ month tenancy.`,
    };
  },
  related: ["connectivity-score", "multi-cluster-commute"],
};
