import styles from "./browser.module.css";
import type { GradVisaRealism } from "@/src/areas/types";

type RealismChipProps = {
  realism: GradVisaRealism;
  showLabel?: boolean;
};

const LABELS: Record<GradVisaRealism, string> = {
  achievable: "Achievable",
  "achievable-with-upfront": "With upfront",
  "achievable-with-guarantor": "With guarantor",
  "licence-exempt": "Licence exempt",
  unlikely: "Unlikely",
  blocked: "Blocked",
  unknown: "Unknown",
};

const FULL_LABELS: Record<GradVisaRealism, string> = {
  achievable: "Achievable for graduate-visa renters via the standard route",
  "achievable-with-upfront": "Was achievable with upfront payment (route closing 1 May 2026)",
  "achievable-with-guarantor": "Achievable with a professional guarantor service",
  "licence-exempt": "Licence agreement — exempt from the Renters' Rights Act, operator sets own terms",
  unlikely: "Standard requirements above grad-visa reach",
  blocked: "Operator policies disqualify grad-visa renters",
  unknown: "Not yet verified",
};

export default function RealismChip({ realism, showLabel = true }: RealismChipProps) {
  return (
    <span
      className={styles.realismChip}
      data-realism={realism}
      title={FULL_LABELS[realism]}
    >
      {showLabel ? LABELS[realism] : null}
    </span>
  );
}
