import type { Explainer } from "./types";

export type VisaFriendlyValue = "yes" | "case-by-case" | "no" | "unknown";

export const visaFriendly: Explainer<VisaFriendlyValue> = {
  id: "visa-friendly",
  term: "Visa-friendly",
  category: "rental",
  description:
    "Whether the operator has a stated or observed practice of renting to applicants on time-limited UK visas (Graduate, Student, Skilled Worker). Some operators explicitly welcome visa renters and have standardised documentation pathways; others evaluate case by case, which in practice usually means additional documentation requirements or a professional guarantor; and some quietly decline any applicant whose visa runs out during the tenancy. Under the Renters' Rights Act 2025, all assured shorthold tenancies are now periodic (rolling monthly), which reduces the visa-expiry-versus-tenancy-end problem — but the operator's willingness to accept visa holders in the first place remains the gating question.",
  relevance: (profile, value) => {
    const isGrad = profile.visa_type === "uk-graduate";
    switch (value) {
      case "yes":
        return {
          severity: "good",
          message: isGrad
            ? `The operator openly rents to visa holders — your Graduate visa should not be a paperwork blocker here.`
            : `The operator openly rents to visa holders.`,
        };
      case "case-by-case":
        return {
          severity: "warning",
          message: isGrad
            ? `Case-by-case usually means the operator will require additional documentation or a professional guarantor for Graduate visa applicants. Ask what their specific requirements are — under the RRA they cannot ask for more than 1 month's advance rent on an AST, so the old "offer more upfront" strategy no longer works.`
            : `Case-by-case means extra scrutiny — expect a longer referencing process.`,
        };
      case "no":
        return {
          severity: "blocker",
          message: `This operator does not rent to visa holders. Your Graduate visa would be an automatic decline on this route regardless of everything else.`,
        };
      case "unknown":
        return {
          severity: "info",
          message: `Visa policy for this operator has not been verified. Ask directly before assuming it is workable — "we accept international tenants" is not the same answer.`,
        };
    }
  },
  related: [
    "international-friendly",
    "visa-expiry-handling",
    "grad-visa-realism",
  ],
};
