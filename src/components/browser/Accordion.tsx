"use client";

import { useState, type ReactNode } from "react";
import styles from "./browser.module.css";
import type { TierId } from "@/src/areas/types";

type AccordionProps = {
  title: string;
  defaultOpen?: boolean;
  tier?: TierId;
  /** Optional small badge rendered next to the title (e.g. "12 of 15 sources"). */
  badge?: ReactNode;
  children: ReactNode;
};

/**
 * Accordion primitive — stateful React component with smooth height animation.
 *
 * Built as a React component (not native <details>) so that:
 *   1. Closed accordions get `content-visibility: auto` for paint skipping,
 *   2. The grid-template-rows trick (0fr → 1fr) gives smooth height interpolation
 *      that works in every modern browser without depending on the experimental
 *      ::details-content pseudo-element,
 *   3. State is React-controlled, which makes accordion-state coordination
 *      possible (e.g. open/close all, jump to a section from a ToC).
 *
 * The content is always rendered into the DOM (so the grid trick can compute
 * the target height) but `content-visibility: auto` tells the browser to skip
 * layout/paint work for off-screen accordion bodies, recovering the perf win
 * of lazy rendering without giving up the animation.
 */
export default function Accordion({
  title,
  defaultOpen = false,
  tier,
  badge,
  children,
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={styles.accordion} data-open={open}>
      <button
        type="button"
        className={styles.accordionSummary}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={styles.accordionTitle}>
          {tier ? (
            <span className={styles.accordionTierBadge} data-tier={tier}>
              {tier.toUpperCase()}
            </span>
          ) : null}
          <span className={styles.accordionTitleText}>{title}</span>
          {badge ? <span style={{ marginLeft: "auto" }}>{badge}</span> : null}
        </span>
        <span className={styles.accordionChevron} aria-hidden="true">
          ▾
        </span>
      </button>
      <div className={styles.accordionContentWrap} aria-hidden={!open}>
        <div>
          <div className={styles.accordionContent}>{children}</div>
        </div>
      </div>
    </div>
  );
}
