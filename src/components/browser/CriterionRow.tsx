"use client";

import { useState } from "react";
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

/**
 * CriterionRow — collapsible rubric criterion entry.
 *
 * The header row (id + name + status chip) is always visible. Clicking
 * anywhere on the header toggles the reasoning paragraph below. The status
 * chip stays anchored on the right and remains the primary pass/fail signal
 * regardless of collapsed state.
 *
 * Status chip retains its own tooltip explaining what each status means;
 * since the tooltip's hover trigger is independent of the click handler,
 * clicking the chip still bubbles up to toggle the row.
 */
export default function CriterionRow({ criterion }: CriterionRowProps) {
  const [open, setOpen] = useState(false);
  const reasoning = criterion.reasoning?.trim();
  const statusClass = styles[STATUS_CLASS[criterion.status]];

  return (
    <div className={styles.criterionRow} data-open={open}>
      <button
        type="button"
        className={styles.criterionToggle}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`${criterion.id} ${criterion.name}`}
      >
        <span className={styles.criterionId}>{criterion.id}</span>
        <span className={styles.criterionName}>{criterion.name}</span>
        <span className={styles.criterionStatusWrap}>
          <Tooltip
            title={`Status: ${CRITERION_STATUS_LABELS[criterion.status]}`}
            content={CRITERION_STATUS_DESCRIPTIONS[criterion.status]}
          >
            <span className={`${styles.criterionStatus} ${statusClass}`}>
              {CRITERION_STATUS_LABELS[criterion.status]}
            </span>
          </Tooltip>
          <span className={styles.criterionChevron} aria-hidden="true">
            ▾
          </span>
        </span>
      </button>
      <div className={styles.criterionBodyWrap} aria-hidden={!open}>
        <div>
          <div className={styles.criterionBodyContent}>
            {reasoning ? (
              <p className={styles.criterionReason}>{reasoning}</p>
            ) : (
              <p className={styles.criterionReasonMissing}>
                Reasoning not yet populated — Phase F sweep will fill this in.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
