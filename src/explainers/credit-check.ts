import type { Explainer } from "./types";

export type CreditCheckValue =
  | "strict"
  | "standard"
  | "lenient"
  | "skipped-with-upfront";

export const creditCheck: Explainer<CreditCheckValue> = {
  id: "credit-check",
  term: "Credit check",
  category: "rental",
  description:
    "UK rental applications almost always involve a credit history check run against one of the major referencing agencies (HomeLet, Goodlord, Canopy). A strict check expects a clean multi-year UK credit file; a standard check is the same test with slightly more tolerance; a lenient check is more forgiving and may accept thin files. Under the Renters' Rights Act 2025 (commencing 1 May 2026), paying several months upfront to skip a credit check is no longer possible for assured shorthold tenancies — advance rent is capped at one month. The primary alternative for applicants without UK credit history is Open Banking referencing (e.g. Homeppl), which verifies income and spending patterns directly from bank transactions rather than credit files. Professional guarantor services (Housing Hand, Guarantid) are the other main route.",
  relevance: (profile, value) => {
    if (profile.has_uk_credit_history) {
      return {
        severity: "info",
        message: `${value} credit checks are manageable if you already have a clean UK credit file.`,
      };
    }
    switch (value) {
      case "skipped-with-upfront":
        return {
          severity: "warning",
          message: `This operator historically skipped credit checks in exchange for upfront rent. Under the Renters' Rights Act, advance rent for ASTs is now capped at 1 month, so this bypass is only still available if the operator uses a licence agreement rather than a tenancy. Confirm the agreement type — if it is an AST, you will need to pass referencing via another route (Open Banking / Homeppl, or a professional guarantor service).`,
        };
      case "lenient":
        return {
          severity: "warning",
          message: `A lenient credit check still runs against your file. You have no UK credit history yet, so "lenient" usually means "we will look at other signals." Ask whether the operator supports Open Banking referencing (Homeppl) — this verifies income from bank transactions rather than credit files, and is the most realistic route for you.`,
        };
      case "standard":
      case "strict":
        return {
          severity: "warning",
          message: `A ${value} credit check assumes a multi-year UK credit file, which you do not have. Under the RRA, you cannot bypass this with upfront rent for an AST. Your realistic routes are: (1) ask if the operator uses Homeppl or another Open Banking referencing provider, (2) use a professional guarantor service (Housing Hand, Guarantid — typically 3–5% of annual rent), or (3) look for licence-based accommodation where the advance rent cap does not apply.`,
        };
    }
  },
  related: ["upfront-acceptance", "income-multiple", "grad-visa-realism"],
};
