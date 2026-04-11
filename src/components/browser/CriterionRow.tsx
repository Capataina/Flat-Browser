import styles from "./browser.module.css";
import type { CriterionScore } from "@/src/areas/types";
import {
  CRITERION_STATUS_DESCRIPTIONS,
  CRITERION_STATUS_LABELS,
} from "@/src/areas/labels";
import Tooltip from "./Tooltip";

type CriterionRowProps = {
  criterion: CriterionScore;
};

const STATUS_CLASS: Record<CriterionScore["status"], string> = {
  pass: "statusPass",
  partial: "statusPartial",
  fail: "statusFail",
  unknown: "statusUnknown",
};

export default function CriterionRow({ criterion }: CriterionRowProps) {
  const reasoning = criterion.reasoning?.trim();
  return (
    <div className={styles.criterionRow}>
      <span className={styles.criterionId}>{criterion.id}</span>
      <div className={styles.criterionBody}>
        <span className={styles.criterionName}>{criterion.name}</span>
        {reasoning ? (
          <span className={styles.criterionReason}>{reasoning}</span>
        ) : (
          <span className={styles.criterionReasonMissing}>
            Reasoning not yet populated — Phase F sweep will fill this in.
          </span>
        )}
      </div>
      <Tooltip
        title={`Status: ${CRITERION_STATUS_LABELS[criterion.status]}`}
        content={CRITERION_STATUS_DESCRIPTIONS[criterion.status]}
      >
        <span
          className={`${styles.criterionStatus} ${styles[STATUS_CLASS[criterion.status]]}`}
        >
          {CRITERION_STATUS_LABELS[criterion.status]}
        </span>
      </Tooltip>
    </div>
  );
}
