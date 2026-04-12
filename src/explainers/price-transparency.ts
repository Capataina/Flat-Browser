import type { Explainer } from "./types";

export type PriceTransparencyValue = "listed" | "enquire" | "unknown";

export const priceTransparency: Explainer<PriceTransparencyValue> = {
  id: "price-transparency",
  term: "Price transparency",
  category: "rental",
  description:
    "Whether the operator publicly lists rental prices on their website. Operators that require enquiry for pricing are significantly harder for international renters to evaluate remotely — you can't compare costs without making contact first.",
  relevance: (_profile, value) => {
    switch (value) {
      case "listed":
        return {
          severity: "good",
          message: "Prices are publicly listed — you can compare costs and budget without contacting anyone. This is the standard for the best BTR operators (UNCLE, Moda, Enclave, Ten Degrees).",
        };
      case "enquire":
        return {
          severity: "warning",
          message: "No public price list — you have to enquire to find out what it costs. This is common for agent-managed BTS stock and some BTR operators. It makes remote evaluation harder and adds friction to your search.",
        };
      case "unknown":
        return {
          severity: "neutral",
          message: "Price transparency not yet verified for this project.",
        };
    }
  },
  related: ["cost-tier", "income-multiple"],
};
