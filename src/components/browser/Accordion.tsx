import type { ReactNode } from "react";
import styles from "./browser.module.css";
import type { TierId } from "@/src/areas/types";

type AccordionProps = {
  title: string;
  defaultOpen?: boolean;
  tier?: TierId;
  children: ReactNode;
};

/**
 * Generic accordion primitive used throughout the area and project modals.
 * Built on `<details>` / `<summary>` so it works without JavaScript and gets
 * keyboard accessibility for free.
 */
export default function Accordion({ title, defaultOpen, tier, children }: AccordionProps) {
  return (
    <details className={styles.accordion} open={defaultOpen}>
      <summary className={styles.accordionSummary}>
        <span className={styles.accordionTitle}>
          {tier ? (
            <span className={styles.accordionTierBadge} data-tier={tier}>
              {tier.toUpperCase()}
            </span>
          ) : null}
          <span className={styles.accordionTitleText}>{title}</span>
        </span>
        <span className={styles.accordionChevron} aria-hidden="true">▾</span>
      </summary>
      <div className={styles.accordionContent}>{children}</div>
    </details>
  );
}
