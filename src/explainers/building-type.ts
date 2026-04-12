import type { Explainer } from "./types";

export type BuildingTypeValue =
  | "BTR"
  | "PRS"
  | "Owner-Lease"
  | "Build-to-Sell"
  | "Mixed";

export const buildingType: Explainer<BuildingTypeValue> = {
  id: "building-type",
  term: "Building type",
  category: "building",
  description:
    "The ownership and operation model of the building. BTR (Build-to-Rent) is purpose-built rental stock operated by a professional landlord with centralised referencing and long-term ownership. PRS (Private Rented Sector) is existing stock let individually by private landlords. Owner-Lease and Build-to-Sell schemes are primarily designed for purchase by owner-occupiers, with any rental supply coming from individual owners subletting. Mixed schemes combine models under one roof. Under the Renters' Rights Act 2025, BTR operators are not exempt — they issue ASTs like everyone else, and the advance rent cap applies. However, BTR operators are more likely to use modern referencing providers (Homeppl, Open Banking) and accept professional guarantor services, which matters more than ever now that the upfront bypass is gone.",
  relevance: (profile, value) => {
    switch (value) {
      case "BTR":
        return {
          severity: "good",
          message: `BTR is your best category. A single professional operator handles referencing centrally, which means standardised policies on visa handling and international tenants. Ask about Homeppl or Open Banking referencing support — BTR operators are the most likely to offer modern referencing routes that work without UK payslips or credit history.`,
        };
      case "PRS":
        return {
          severity: "warning",
          message: `PRS means individual private landlords rather than a managed operator. Referencing is inconsistent and ad-hoc — some private landlords are extremely flexible, others want a full UK paper trail. Your Graduate visa and thin UK credit make this a harder road than a BTR operator with formal referencing alternatives.`,
        };
      case "Owner-Lease":
      case "Build-to-Sell":
        return {
          severity: "warning",
          message: `${value} schemes are designed for owner-occupiers. Any rental stock here comes from individual flat owners subletting, which is functionally private-landlord territory — inconsistent referencing, no central policy, and usually UK-references-preferred. Workable if you find the right owner, but not the best category for you.`,
        };
      case "Mixed":
        return {
          severity: "info",
          message: `Mixed means both BTR-style and owner-sublet stock exist under the same roof. Filter for the managed-operator units where you can — those are the ones most likely to support Open Banking referencing and professional guarantor services.`,
        };
    }
  },
  related: ["tenure", "grad-visa-realism"],
};
