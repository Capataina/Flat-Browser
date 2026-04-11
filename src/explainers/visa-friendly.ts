import type { Explainer } from "./types";

export type VisaFriendlyValue = "yes" | "case-by-case" | "no" | "unknown";

export const visaFriendly: Explainer<VisaFriendlyValue> = {
  id: "visa-friendly",
  term: "Visa-friendly",
  category: "rental",
  description:
    "Whether the operator has a stated or observed practice of renting to applicants on time-limited UK visas (Graduate, Student, Skilled Worker). Some operators explicitly welcome visa renters and have standardised documentation; others evaluate case by case, which in practice usually means extra upfront or extra scrutiny; and some quietly decline any applicant whose visa runs out inside the tenancy. This matters because a visa-unfriendly operator can reject you on paperwork alone no matter how clean the rest of your application is.",
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
            ? `Case-by-case usually means the operator will ask for more upfront or deeper scrutiny for Graduate visa applicants. Expect to lead with the ${profile.max_upfront_months}-months-upfront offer up front rather than waiting for them to raise it.`
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
