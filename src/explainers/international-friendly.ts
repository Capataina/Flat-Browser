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
    "Whether the operator will accept overseas references, foreign employment history, foreign bank statements, or foreign guarantors as part of an application. This is a slightly different axis from visa-friendliness: an operator can be fine with UK visa holders who have UK history, yet still reject an applicant whose only paper trail is overseas. The friendliest operators have formal international-tenant pathways — often using Open Banking referencing providers like Homeppl that can verify income from foreign bank accounts. Under the Renters' Rights Act 2025, the old workaround of offering several months' upfront rent to compensate for overseas-only documentation is no longer available for ASTs.",
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
          message: `Case-by-case international handling usually means the operator will want a professional guarantor or additional documentation to compensate. Under the RRA, they cannot ask for more than 1 month's advance rent on an AST. Ask about Open Banking referencing (Homeppl) — it can verify income from overseas bank transactions — and whether they accept professional guarantor services (Housing Hand, Guarantid).`,
        };
      case "no":
        return {
          severity: "blocker",
          message: `UK-only documentation is required. You have no UK payslips and a thin UK credit file. Under the RRA, you cannot bypass this with upfront rent for an AST. Your remaining options are: (1) Open Banking referencing if the operator supports it, (2) a professional guarantor service, or (3) licence-based accommodation where the operator sets their own terms.`,
        };
      case "unknown":
        return {
          severity: "info",
          message: `International policy not verified for this operator. Ask directly — overseas-reference rules are usually buried in internal referencing-agency guidance rather than the public website.`,
        };
    }
  },
  related: ["visa-friendly", "guarantor"],
};
