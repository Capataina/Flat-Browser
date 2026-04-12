"use client";

import { useState, type ReactNode } from "react";
import styles from "./browser.module.css";
import { caner } from "@/src/profile/caner";
import { getExplainer, type ExplainerId } from "@/src/explainers";
import type { Severity } from "@/src/explainers/types";

type ExplainedValueProps = {
  /** The label rendered above the value (e.g. "INCOME MULTIPLE"). */
  label: string;
  /**
   * The value rendered prominently in the box.
   * When `scale` is provided, this is hidden — the scale strip becomes the
   * primary display with the matching step highlighted.
   */
  value: ReactNode;
  /** The explainer id from src/explainers/. If omitted, no explanation is rendered. */
  explainerId?: ExplainerId;
  /** The raw value passed to the explainer's relevance() function. */
  rawValue?: unknown;
  /** Optional override description if no explainer is registered. */
  description?: string;
  /** Optional explicit severity override. */
  severity?: Severity;
  /** Default state for the inline expansion. */
  defaultExpanded?: boolean;
  /**
   * Ordered enum scale labels. When provided, the scale strip replaces the
   * value line — the current value is shown as a highlighted tag in the strip,
   * not as separate text. This prevents mismatches between the displayed value
   * and the scale options.
   */
  scale?: string[];
  /** Which scale label to highlight. Defaults to stringified `value` if omitted. */
  scaleHighlight?: string;
};

const SEVERITY_CLASS: Record<Severity, string> = {
  good: styles.explainedSeverityGood,
  neutral: styles.explainedSeverityNeutral,
  info: styles.explainedSeverityInfo,
  warning: styles.explainedSeverityWarning,
  blocker: styles.explainedSeverityBlocker,
};

const SEVERITY_PREFIX: Record<Severity, string> = {
  good: "✓",
  neutral: "·",
  info: "ⓘ",
  warning: "⚠",
  blocker: "✗",
};

const SEVERITY_LABEL: Record<Severity, string> = {
  good: "Works for you",
  neutral: "Neutral",
  info: "Informational",
  warning: "Borderline for you",
  blocker: "Blocker for you",
};

export default function ExplainedValue({
  label,
  value,
  explainerId,
  rawValue,
  description,
  severity,
  defaultExpanded = false,
  scale,
  scaleHighlight,
}: ExplainedValueProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const explainer = explainerId ? getExplainer(explainerId) : null;
  const relevanceFn = explainer?.relevance as
    | ((p: typeof caner, v: unknown) => ReturnType<NonNullable<typeof explainer>["relevance"]>)
    | undefined;
  const computed = relevanceFn ? relevanceFn(caner, rawValue) : null;
  const finalSeverity: Severity | null = severity ?? computed?.severity ?? null;
  const finalDescription = description ?? explainer?.description ?? null;
  const personalMessage = computed?.message ?? null;

  const hasContent = finalDescription || personalMessage;

  const indicator = hasContent ? (
    <span className={styles.explainedToggleIndicator} aria-hidden="true">
      ▾
    </span>
  ) : null;

  // When scale is provided, the scale strip IS the value display.
  // The highlighted tag replaces the separate value line.
  const hasScale = scale && scale.length > 1;
  const highlightTarget = scaleHighlight ?? String(value);

  return (
    <div
      className={styles.explainedRow}
      data-severity={finalSeverity ?? "neutral"}
      data-expanded={expanded}
    >
      {hasContent ? (
        <button
          type="button"
          className={styles.explainedHeader}
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-label={`${label} — toggle explanation`}
        >
          <span className={styles.explainedLabel}>{label}</span>
          {indicator}
        </button>
      ) : (
        <div className={styles.explainedHeader} role="group">
          <span className={styles.explainedLabel}>{label}</span>
        </div>
      )}
      {hasScale ? (
        <div className={styles.explainedScale}>
          {scale.map((step) => (
            <span
              key={step}
              className={styles.explainedScaleStep}
              data-active={step === highlightTarget}
            >
              {step}
            </span>
          ))}
        </div>
      ) : (
        <div className={styles.explainedValue}>{value}</div>
      )}
      {expanded && hasContent ? (
        <div className={styles.explainedBody}>
          {finalDescription ? (
            <p className={styles.explainedDescription}>{finalDescription}</p>
          ) : null}
          {personalMessage && finalSeverity ? (
            <div
              className={`${styles.explainedRelevance} ${SEVERITY_CLASS[finalSeverity]}`}
            >
              <span className={styles.explainedRelevanceIcon} aria-hidden="true">
                {SEVERITY_PREFIX[finalSeverity]}
              </span>
              <div>
                <div className={styles.explainedRelevanceLabel}>
                  {SEVERITY_LABEL[finalSeverity]}
                </div>
                <div className={styles.explainedRelevanceMessage}>
                  {personalMessage}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
