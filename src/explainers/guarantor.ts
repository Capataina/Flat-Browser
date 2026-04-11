import type { Explainer } from "./types";

export const guarantor: Explainer<boolean> = {
  id: "guarantor",
  term: "Guarantor acceptable",
  category: "rental",
  description:
    "A UK guarantor is a UK-resident individual (usually a parent or close relative) with strong income who legally agrees to cover the rent if the tenant cannot. Letting agents routinely accept a guarantor with provable UK income as a workaround for the 30× income test, missing UK credit history, or overseas applicant status. The critical constraint is that the guarantor must themselves be UK-based with UK payslips or tax records — an overseas guarantor is almost never accepted.",
  relevance: (profile, accepted) => {
    if (!accepted) {
      return {
        severity: "info",
        message: `This operator does not accept guarantors as a bypass, so this route is not relevant for you either way. Focus on upfront rent as the workaround.`,
      };
    }
    if (profile.has_uk_guarantor) {
      return {
        severity: "good",
        message: `The operator accepts guarantors and you have a UK-based guarantor available — this is a strong referencing route for you.`,
      };
    }
    return {
      severity: "blocker",
      message: `The operator accepts guarantors, but you do not have a UK-resident guarantor. Overseas guarantors are almost never accepted, so this route is closed for you — upfront rent remains your only bypass.`,
    };
  },
  related: ["income-multiple", "credit-check", "upfront-acceptance"],
};
