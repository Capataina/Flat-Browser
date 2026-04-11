import type { Explainer } from "./types";

export type BuildPhaseValue = "complete" | "in_delivery" | "future" | "phased";

export const buildPhase: Explainer<BuildPhaseValue> = {
  id: "build-phase",
  term: "Build phase",
  category: "building",
  description:
    "Where a project sits in its construction lifecycle. Complete means the building is finished and tenants can move in now. In-delivery means it is under active construction with a near-term completion date, usually within 12 months. Future means announced but not yet under way. Phased means a large masterplan with some phases complete and others still being built.",
  relevance: (_profile, value) => {
    switch (value) {
      case "complete":
        return {
          severity: "good",
          message: `Complete means you can actually apply and move in. No waiting for construction.`,
        };
      case "in_delivery":
        return {
          severity: "info",
          message: `In-delivery means the building is under active construction. Possible to reserve off-plan, but you cannot move in immediately — check the specific handover date.`,
        };
      case "future":
        return {
          severity: "warning",
          message: `Future means announced but not under construction. You cannot move in here on any realistic timeline — treat this as a watch-list item rather than a move target.`,
        };
      case "phased":
        return {
          severity: "info",
          message: `Phased means some parts of the development are ready and others are still being built. Only the completed phases are actually move-in options — check which buildings on the masterplan are live.`,
        };
    }
  },
};
