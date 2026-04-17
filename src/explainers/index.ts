// Explainer registry.
//
// Every Explainer in this folder is imported here and registered under its
// stable id. UI code should look up explainers by id via getExplainer — do
// not import individual explainer files directly from outside this folder.

import type { Explainer } from "./types";

import { affordability } from "./affordability";
import { agreementType } from "./agreement-type";
import { ageCohort } from "./age-cohort";
import { buildPhase } from "./build-phase";
import { buildingType } from "./building-type";
import { concierge } from "./concierge";
import { connectivityScore } from "./connectivity-score";
import { costTier } from "./cost-tier";
import { creditCheck } from "./credit-check";
import { crimeVsCroydon } from "./crime-vs-croydon";
import { criterionStatus } from "./criterion-status";
import { epcRating } from "./epc-rating";
import { gradVisaRealism } from "./grad-visa-realism";
import { grade } from "./grade";
import { guarantor } from "./guarantor";
import { heatingType } from "./heating-type";
import { incomeMultiple } from "./income-multiple";
import { internationalFriendly } from "./international-friendly";
import { kitchenQuality } from "./kitchen-quality";
import { minTenancy } from "./min-tenancy";
import { multiClusterCommute } from "./multi-cluster-commute";
import { priceTransparency } from "./price-transparency";
import { professionalGuarantor } from "./professional-guarantor";
import { referencingProvider } from "./referencing-provider";
import { redundancyScore } from "./redundancy-score";
import { regenerationStatus } from "./regeneration-status";
import { safetyOverall } from "./safety-overall";
import { soundInsulation } from "./sound-insulation";
import { tenure } from "./tenure";
import { thermalPerformance } from "./thermal-performance";
import { tier } from "./tier";
import { visaExpiryHandling } from "./visa-expiry-handling";
import { visaFriendly } from "./visa-friendly";
import { zone } from "./zone";

export const explainers = {
  affordability: affordability,
  "agreement-type": agreementType,
  "age-cohort": ageCohort,
  "build-phase": buildPhase,
  "building-type": buildingType,
  concierge: concierge,
  "connectivity-score": connectivityScore,
  "cost-tier": costTier,
  "credit-check": creditCheck,
  "crime-vs-croydon": crimeVsCroydon,
  "criterion-status": criterionStatus,
  "epc-rating": epcRating,
  "grad-visa-realism": gradVisaRealism,
  grade: grade,
  guarantor: guarantor,
  "heating-type": heatingType,
  "income-multiple": incomeMultiple,
  "international-friendly": internationalFriendly,
  "kitchen-quality": kitchenQuality,
  "min-tenancy": minTenancy,
  "multi-cluster-commute": multiClusterCommute,
  "price-transparency": priceTransparency,
  "professional-guarantor": professionalGuarantor,
  "redundancy-score": redundancyScore,
  "referencing-provider": referencingProvider,
  "regeneration-status": regenerationStatus,
  "safety-overall": safetyOverall,
  "sound-insulation": soundInsulation,
  tenure: tenure,
  "thermal-performance": thermalPerformance,
  tier: tier,
  "visa-expiry-handling": visaExpiryHandling,
  "visa-friendly": visaFriendly,
  zone: zone,
} as const satisfies Record<string, Explainer<never>>;

export type ExplainerId = keyof typeof explainers;

export function getExplainer(id: ExplainerId): Explainer<never> {
  return explainers[id];
}

// Re-export core types for convenience.
export type { Explainer, PersonalRelevance, Severity } from "./types";
