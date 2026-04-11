import type { Explainer } from "./types";

export type InternationalFriendlyValue =
  | "yes"
  | "case-by-case"
  | "no"
  | "unknown";

export const internationalFriendly: Explainer<InternationalFriendlyValue> = {
  id: "international-friendly",
  term: "International-friendly",
  category: "rental",
  description:
    "Whether the operator will accept overseas references, foreign employment history, foreign bank statements, or foreign guarantors as part of an application. This is a slightly different axis from visa-friendliness: an operator can be fine with UK visa holders who have UK history, yet still reject an applicant whose only paper trail is overseas. The friendliest operators have formal international-tenant pathways; the unfriendliest will only look at UK documents, which rules out most of the bureaucratic shortcuts for recent arrivals.",
  relevance: (profile, value) => {
    switch (value) {
      case "yes":
        return {
          severity: "good",
          message: `The operator accepts overseas documents and references. Useful for you because most of your verifiable history is outside the UK — you are Turkish, recently arrived as a student, and have no UK payslips yet.`,
        };
      case "case-by-case":
        return {
          severity: "warning",
          message: `Case-by-case international handling usually means the operator will want a larger upfront or a UK-based guarantor to compensate. You can offer ${profile.max_upfront_months} months upfront; you do not have a UK guarantor, so lead with the upfront offer.`,
        };
      case "no":
        return {
          severity: "blocker",
          message: `UK-only documentation is required. You have no UK payslips and a thin UK credit file, so this operator's standard route is closed — the only remaining bypass is upfront rent, and only if they will also waive the overseas-reference rule.`,
        };
      case "unknown":
        return {
          severity: "info",
          message: `International policy not verified for this operator. Ask directly — overseas-reference rules are usually buried in internal referencing-agency guidance rather than the public website.`,
        };
    }
  },
  related: ["visa-friendly", "upfront-acceptance", "guarantor"],
};
