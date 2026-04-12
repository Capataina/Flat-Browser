import type { Explainer } from "./types";

export type VisaExpiryHandlingValue =
  | "ignored"
  | "tenancy-shortened"
  | "rejected"
  | "unknown";

export const visaExpiryHandling: Explainer<VisaExpiryHandlingValue> = {
  id: "visa-expiry-handling",
  term: "Visa expiry handling",
  category: "rental",
  description:
    "How the operator treats a visa that expires during the tenancy. Under the Renters' Rights Act 2025 (commencing 1 May 2026), all assured shorthold tenancies are periodic — rolling monthly with 2 months' notice to leave. This largely defuses the visa-expiry problem for ASTs: there is no fixed end date to conflict with a visa expiry, and the tenant can leave with 2 months' notice at any time. However, the operator's initial willingness to accept a visa holder still matters at the referencing stage, and for licence-based accommodation (which can still have fixed terms), visa expiry against the contract end date remains a live issue.",
  relevance: (profile, value) => {
    if (profile.visa_type !== "uk-graduate") {
      return {
        severity: "info",
        message: `This policy is mainly relevant to Graduate visa holders. Your visa type may not trigger this rule.`,
      };
    }
    const expiry = new Date(profile.visa_expires).toLocaleDateString("en-GB", {
      month: "long",
      year: "numeric",
    });
    switch (value) {
      case "ignored":
        return {
          severity: "good",
          message: `The operator does not flag visa expiry during referencing. Under the RRA, your AST would be periodic anyway — there is no fixed end date for your visa to conflict with. Your Graduate visa expires ${expiry}, but this is not a barrier here.`,
        };
      case "tenancy-shortened":
        return {
          severity: "neutral",
          message: `The operator historically shortened tenancies to match visa expiry (${expiry}). Under the RRA, all ASTs are periodic, so "shortening" is less meaningful — your tenancy is already rolling monthly. This policy may still surface as extra scrutiny at the referencing stage. For licence agreements with fixed terms, shortening would be a real constraint.`,
        };
      case "rejected":
        return {
          severity: "blocker",
          message: `The operator auto-rejects applications where the visa expires during the tenancy. Your Graduate visa expires ${expiry}. Even though ASTs are now periodic under the RRA, the operator's referencing policy can still gate on visa length at the application stage. This is a hard wall unless the operator updates their policy.`,
        };
      case "unknown":
        return {
          severity: "info",
          message: `Expiry-handling policy has not been verified. Your Graduate visa expires ${expiry}. Under the RRA, ASTs are periodic (no fixed end date), so visa expiry is less of an issue in theory — but ask the operator directly whether they gate on visa length during referencing.`,
        };
    }
  },
  related: ["visa-friendly", "grad-visa-realism"],
};
