import styles from "./browser.module.css";
import type { CriterionScore } from "@/src/areas/types";

type CriterionRowProps = {
  criterion: CriterionScore;
};

const STATUS_LABEL: Record<CriterionScore["status"], string> = {
  pass: "Pass",
  partial: "Partial",
  fail: "Fail",
  unknown: "Unknown",
};

const STATUS_CLASS: Record<CriterionScore["status"], string> = {
  pass: "statusPass",
  partial: "statusPartial",
  fail: "statusFail",
  unknown: "statusUnknown",
};

export default function CriterionRow({ criterion }: CriterionRowProps) {
  return (
    <div className={styles.criterionRow}>
      <span className={styles.criterionId}>{criterion.id}</span>
      <div className={styles.criterionBody}>
        <span className={styles.criterionName}>{criterion.name}</span>
        {criterion.reasoning ? (
          <span className={styles.criterionReason}>{criterion.reasoning}</span>
        ) : null}
      </div>
      <span className={`${styles.criterionStatus} ${styles[STATUS_CLASS[criterion.status]]}`}>
        {STATUS_LABEL[criterion.status]}
      </span>
    </div>
  );
}
