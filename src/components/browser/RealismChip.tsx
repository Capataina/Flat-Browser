import styles from "./browser.module.css";
import type { GradVisaRealism } from "@/src/areas/types";

type RealismChipProps = {
  realism: GradVisaRealism;
  showLabel?: boolean;
};

const LABELS: Record<GradVisaRealism, string> = {
  achievable: "Achievable",
  "achievable-with-guarantor": "With guarantor",
  "licence-exempt": "Licence exempt",
  unlikely: "Unlikely",
  blocked: "Blocked",
  unclear: "Unclear",
  unknown: "Not researched",
};

const FULL_LABELS: Record<GradVisaRealism, string> = {
  achievable: "At least one route works without conditions",
  "achievable-with-guarantor": "At least one pathway works — guarantor service, savings, overseas co-signer, or multi-month upfront at a licence operator",
  "licence-exempt": "Licence agreement — exempt from the Renters' Rights Act, operator sets own terms",
  unlikely: "Researched and evidence leans negative — worth an email only as a fallback",
  blocked: "Known hard floor — the door is shut",
  unclear: "Researched but evidence is genuinely ambiguous — worth a speculative email",
  unknown: "Not yet researched",
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
