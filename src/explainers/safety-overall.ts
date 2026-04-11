import type { Explainer } from "./types";

export type SafetyOverallValue =
  | "very-safe"
  | "safe"
  | "moderate"
  | "concerning";

export const safetyOverall: Explainer<SafetyOverallValue> = {
  id: "safety-overall",
  term: "Overall safety",
  category: "area",
  description:
    "A holistic assessment of how safe the area feels to live in, drawing on Met Police crime statistics, after-dark visibility, street lighting, and resident reports. Very-safe and safe areas feel calm at all hours and have below-average violent or acquisitive crime. Moderate areas have visible issues on specific streets or at specific times. Concerning areas have sustained problems that would be a step backwards from a calmer baseline.",
  relevance: (_profile, value) => {
    switch (value) {
      case "very-safe":
        return {
          severity: "good",
          message: `Very-safe areas are a clear upgrade from the Croydon baseline you are escaping. Street feel, after-dark comfort, and crime stats are all on your side here.`,
        };
      case "safe":
        return {
          severity: "good",
          message: `Safe areas clear the T1 "demonstrably safer than Croydon" bar. Normal urban caution applies but daily life is calm.`,
        };
      case "moderate":
        return {
          severity: "warning",
          message: `Moderate means the area has known issues on specific streets or at specific hours. Worth a Street View walk and a closer look at Met Police ward stats before committing — you are moving explicitly to feel safer than Croydon, so this is a yellow flag.`,
        };
      case "concerning":
        return {
          severity: "blocker",
          message: `Concerning safety means the area has sustained problems. The whole point of moving is to upgrade on safety — this fails the T1 foundational test and should not be a serious move target.`,
        };
    }
  },
  related: ["crime-vs-croydon"],
};
