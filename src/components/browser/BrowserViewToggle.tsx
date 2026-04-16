"use client";

import styles from "./browser.module.css";
import type { ViewMode } from "@/src/areas/types";

type BrowserViewToggleProps = {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
  areaCount: number;
  projectCount: number;
};

/**
 * Two-option pill group for switching between the area grid and the
 * flattened project grid. The count beside each label updates as
 * filters are applied.
 */
export default function BrowserViewToggle({
  mode,
  onChange,
  areaCount,
  projectCount,
}: BrowserViewToggleProps) {
  return (
    <div className={styles.viewToggle} role="tablist" aria-label="View mode">
      <button
        type="button"
        role="tab"
        aria-selected={mode === "areas"}
        className={styles.viewToggleButton}
        data-active={mode === "areas"}
        onClick={() => onChange("areas")}
      >
        Areas <span className={styles.viewToggleCount}>{areaCount}</span>
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={mode === "projects"}
        className={styles.viewToggleButton}
        data-active={mode === "projects"}
        onClick={() => onChange("projects")}
      >
        Projects <span className={styles.viewToggleCount}>{projectCount}</span>
      </button>
    </div>
  );
}
