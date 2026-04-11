import type { Explainer } from "./types";
import type { ConnectivityScore } from "../areas/types";

export const connectivityScore: Explainer<ConnectivityScore> = {
  id: "connectivity-score",
  term: "Multi-cluster connectivity score",
  category: "connectivity",
  description:
    "A 0–5 score counting how many of the four central work clusters (City of London, Canary Wharf, Soho / Fitzrovia, King's Cross / Shoreditch) can be reached from this area in 25 minutes or less. A score of 4 means every cluster is in comfortable daily commute range; lower scores mean the area is only defensibly connected to a subset. This matters specifically because you do not yet know which cluster your next job will be in — single-cluster connectivity is a bet on one specific employer location.",
  relevance: (_profile, value) => {
    if (value >= 4) {
      return {
        severity: "good",
        message: `${value}/5 means nearly every central work cluster is in a comfortable commute. Strong hedge against the uncertainty of not knowing where your next role will be based.`,
      };
    }
    if (value === 3) {
      return {
        severity: "good",
        message: `3/5 is the minimum "defensibly central" score. Three of four clusters are reachable — acceptable, but check which one is missing and whether it matters for the companies on your target list.`,
      };
    }
    if (value === 2) {
      return {
        severity: "warning",
        message: `2/5 means only half the central clusters are in range. You would be betting on a specific commute direction — not ideal while you are still job-hunting.`,
      };
    }
    return {
      severity: "warning",
      message: `${value}/5 is weak multi-cluster coverage. You would be locking into one specific commute before you know which direction you need to commute in.`,
    };
  },
  related: ["redundancy-score", "multi-cluster-commute", "zone"],
};
