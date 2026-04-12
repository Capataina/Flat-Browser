import type { Explainer } from "./types";

export type GradVisaRealismValue =
  | "achievable"
  | "achievable-with-guarantor"
  | "licence-exempt"
  | "unlikely"
  | "blocked"
  | "unknown";

export const gradVisaRealism: Explainer<GradVisaRealismValue> = {
  id: "grad-visa-realism",
  term: "Graduate-visa realism",
  category: "rental",
  description:
    "A single derived signal that rolls up every rental-qualification hurdle into one answer: can a graduate-visa renter with no UK credit history, no UK payslips, and a modest budget actually secure this building. This is the headline indicator on every project card, rendered as green / amber / orange / red / grey. It is unique to Flatbrowser — no other property tool surfaces this as a first-class axis. Under the Renters' Rights Act 2025 (commencing 1 May 2026), the three legal routes for someone without UK credit or payslips are: (1) Open Banking referencing via providers like Homeppl, (2) professional guarantor services (Housing Hand, Guarantid), and (3) licence-based accommodation where the RRA advance rent cap does not apply.",
  relevance: (profile, value) => {
    const isGrad = profile.visa_type === "uk-graduate";
    if (!isGrad) {
      return {
        severity: "info",
        message: `This signal is calibrated for Graduate visa holders. It may not reflect your situation precisely.`,
      };
    }
    switch (value) {
      case "achievable":
        return {
          severity: "good",
          message: `Standard referencing route is open to you here — this operator is known or verified to accept graduate-visa renters on normal terms. They likely use Open Banking referencing or have an explicit international-tenant pathway.`,
        };
      case "achievable-with-guarantor":
        return {
          severity: "neutral",
          message: `Standard referencing is blocked, but the operator accepts professional guarantor services (Housing Hand, Guarantid, etc.). You would need to pay a guarantor fee — typically 3–5% of annual rent — as the cost of bypassing the credit check. A viable route, but adds ongoing cost.`,
        };
      case "licence-exempt":
        return {
          severity: "good",
          message: `This is a licence agreement, not a tenancy — it sits outside the Renters' Rights Act entirely. The operator sets their own terms, so the standard referencing and advance-rent constraints do not apply. You can negotiate directly on upfront payment, guarantors, and referencing requirements.`,
        };
      case "unlikely":
        return {
          severity: "warning",
          message: `Unlikely but not closed. The operator has strict standard referencing and limited flexibility. Post-RRA, the upfront bypass is gone for ASTs — your remaining options are Open Banking referencing and professional guarantor services, neither of which this operator has been confirmed to support.`,
        };
      case "blocked":
        return {
          severity: "blocker",
          message: `Structurally blocked. The operator runs strict income and credit checks with no alternative referencing routes at a level you can meet. The pre-RRA upfront bypass is no longer available for ASTs. Treat this project as aspirational-only and focus attention elsewhere.`,
        };
      case "unknown":
        return {
          severity: "info",
          message: `Not yet verified. The realism verdict needs a direct policy check — ask the operator about Open Banking referencing, professional guarantor acceptance, and agreement type (AST vs licence) before spending time on this one.`,
        };
    }
  },
  related: [
    "income-multiple",
    "credit-check",
    "guarantor",
    "visa-friendly",
  ],
};
