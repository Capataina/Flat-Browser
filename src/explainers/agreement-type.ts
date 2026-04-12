import type { Explainer } from "./types";

export type AgreementTypeValue = "ast" | "licence" | "unknown";

export const agreementType: Explainer<AgreementTypeValue> = {
  id: "agreement-type",
  term: "Agreement type",
  category: "rental",
  description:
    "Whether the arrangement is an Assured Shorthold Tenancy (AST) or a licence to occupy. ASTs are standard UK rental tenancies and are subject to the Renters' Rights Act 2025 from 1 May 2026 — advance rent capped at one month, all tenancies periodic, Section 21 abolished. Licences are exempt from the Act entirely: the operator sets their own terms for upfront rent, fixed periods, and qualification. The distinction matters because it determines which legal framework governs your rental and what negotiation levers you have.",
  relevance: (_profile, value) => {
    switch (value) {
      case "licence":
        return {
          severity: "good",
          message: `Exempt from the Renters' Rights Act. The operator sets their own terms — no advance rent cap, no mandatory periodic tenancy. You can negotiate freely.`,
        };
      case "ast":
        return {
          severity: "info",
          message: `Subject to the Renters' Rights Act from 1 May 2026. Advance rent capped at 1 month, tenancy is periodic, referencing is the only gatekeeper.`,
        };
      case "unknown":
        return {
          severity: "neutral",
          message: `Agreement type not yet verified. Check directly with the operator whether this is an AST or a licence.`,
        };
    }
  },
  related: ["grad-visa-realism", "upfront-acceptance", "referencing-provider"],
};
