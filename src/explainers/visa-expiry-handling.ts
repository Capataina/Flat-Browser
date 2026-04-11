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
    "How the operator treats a visa that expires before the end of a standard 12 or 24 month tenancy. Some operators ignore the expiry and issue the full-length tenancy anyway; some shorten the tenancy to match the visa end date; and some automatically reject any application where the visa runs out inside the tenancy window. This is specifically relevant for Graduate visa holders, whose three-year visa almost always bisects a two-year tenancy.",
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
          message: `The operator will issue a full-length tenancy even though your Graduate visa expires in ${expiry}. No paperwork blocker on the continuity question.`,
        };
      case "tenancy-shortened":
        return {
          severity: "warning",
          message: `The operator will shorten the tenancy to end at or near your visa expiry (${expiry}). You keep access, but you lose tenure security — the move will need to be repeated around the visa transition window rather than being a two-year anchor.`,
        };
      case "rejected":
        return {
          severity: "blocker",
          message: `The operator auto-rejects applications whose visa expires inside the tenancy. Your Graduate visa expires ${expiry}, which would fall inside any 2-year tenancy starting now, so this is a hard wall.`,
        };
      case "unknown":
        return {
          severity: "info",
          message: `Expiry-handling policy has not been verified. Your Graduate visa expires ${expiry} — ask the operator directly whether that blocks a standard 2-year tenancy before going deep on the application.`,
        };
    }
  },
  related: ["visa-friendly", "grad-visa-realism"],
};
