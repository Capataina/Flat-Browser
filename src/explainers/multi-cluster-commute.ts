import type { Explainer } from "./types";
import type { AnchorTimes } from "../areas/types";

export const multiClusterCommute: Explainer<AnchorTimes> = {
  id: "multi-cluster-commute",
  term: "Multi-cluster commute",
  category: "connectivity",
  description:
    "Door-to-door times from the area to the four central work anchors that cover almost every plausible London tech role: City of London (traditional finance and fintech), Canary Wharf (banking, trading, and Wood Wharf tech), Soho / Fitzrovia (media, consumer tech, startups), and King's Cross / Shoreditch (big-tech campuses, Google DeepMind, Meta, AI labs). The 25-minute threshold is the practical 'comfortable daily commute' ceiling — above it, commute fatigue compounds. An area that reaches three or four anchors under 25 minutes is a strong hedge against not knowing where your next role will be based.",
  relevance: (_profile, value) => {
    const hits = [
      value.city_of_london,
      value.canary_wharf,
      value.soho_fitzrovia,
      value.kings_cross_shoreditch,
    ].filter((t) => t <= 25).length;
    const labels = [
      `City ${value.city_of_london}m`,
      `Canary Wharf ${value.canary_wharf}m`,
      `Soho ${value.soho_fitzrovia}m`,
      `KX ${value.kings_cross_shoreditch}m`,
    ].join(" · ");
    if (hits >= 4) {
      return {
        severity: "good",
        message: `All four anchors reachable inside 25 minutes (${labels}). Strong multi-cluster coverage — whichever cluster your next role is in, the commute stays comfortable.`,
      };
    }
    if (hits === 3) {
      return {
        severity: "good",
        message: `Three of four anchors under 25 minutes (${labels}). Defensibly central — check which cluster is out of range and whether it matters for the companies on your target list.`,
      };
    }
    if (hits === 2) {
      return {
        severity: "warning",
        message: `Only two of four anchors under 25 minutes (${labels}). You would be betting on a specific commute direction while still job-hunting — risky unless you already know which cluster your next role will be in.`,
      };
    }
    return {
      severity: "warning",
      message: `${hits}/4 anchors under 25 minutes (${labels}). Weak multi-cluster coverage — locks you into one specific commute before you know which direction you need to commute in.`,
    };
  },
  related: ["connectivity-score", "redundancy-score", "zone"],
};
