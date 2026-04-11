import type { Explainer } from "./types";
import type { Quality } from "../areas/types";

export const thermalPerformance: Explainer<Quality> = {
  id: "thermal-performance",
  term: "Thermal performance",
  category: "building",
  description:
    "How well the building retains heat in winter and resists overheating in summer. This goes beyond the EPC number and captures real-world complaints: single-aspect flats with west-facing windows overheat, poorly-insulated corners develop damp, and older stock leaks heat through single-glazed windows. Thermal performance directly affects your monthly bills and the comfort of the flat during extreme weather.",
  relevance: (_profile, value) => {
    switch (value) {
      case "excellent":
        return {
          severity: "good",
          message: `Excellent thermal performance — low heating bills in winter and no overheating issues. Meaningful saving on bills versus your current £500/month.`,
        };
      case "good":
        return {
          severity: "good",
          message: `Good thermal performance — on-budget for bills, no seasonal comfort issues.`,
        };
      case "average":
        return {
          severity: "info",
          message: `Average thermal performance. Bills in line with current ~£500/month, occasional comfort complaints in extreme weather.`,
        };
      case "poor":
        return {
          severity: "warning",
          message: `Poor thermal performance means higher heating bills in winter and possible overheating in summer. Factor an extra £50–£100/month on top of the nominal bills estimate.`,
        };
      case "unknown":
        return {
          severity: "info",
          message: `Thermal performance not verified — cross-check with EPC rating and any mention of "cold", "draughty", or "overheated" in resident reviews.`,
        };
    }
  },
  related: ["epc-rating", "heating-type"],
};
