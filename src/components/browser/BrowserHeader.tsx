import styles from "./browser.module.css";
import type { BrowserMeta } from "@/src/areas/config";

type BrowserHeaderProps = {
  meta: BrowserMeta;
  totalAreas: number;
  totalProjects: number;
  topGradeCount: number;
  achievableCount: number;
};

export default function BrowserHeader({
  meta,
  totalAreas,
  totalProjects,
  topGradeCount,
  achievableCount,
}: BrowserHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <div className={styles.eyebrow}>{meta.eyebrow}</div>
          <h1 className={styles.title}>
            {meta.title}
            <br />
            <em className={styles.titleAccent}>{meta.accent}</em>
          </h1>
          <p className={styles.headerSub}>{meta.subtitle}</p>
          <div className={styles.headerMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaValue}>{totalAreas}</span>
              <span className={styles.metaLabel}>Areas</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaValue}>{totalProjects}</span>
              <span className={styles.metaLabel}>Projects</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaValue}>{topGradeCount}</span>
              <span className={styles.metaLabel}>Grade A or above</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaValue}>{achievableCount}</span>
              <span className={styles.metaLabel}>Grad-visa achievable</span>
            </div>
          </div>
        </div>

        <aside className={styles.howToCard} aria-label="How to use this site">
          <div className={styles.howToEyebrow}>How to read this</div>
          <h2 className={styles.howToTitle}>
            Find the realistic upgrade
          </h2>
          <div className={styles.howToBody}>
            <p>
              Every grade, chip, and &ldquo;works for you&rdquo; / &ldquo;blocker for
              you&rdquo; line on this site is computed against the actual constraints
              of a graduate-visa renter relocating from Croydon — no UK credit history,
              no formal payslips, three months upfront ceiling, August 2027 visa expiry.
              The same dataset would render differently for someone else.
            </p>
            <dl className={styles.howToList}>
              <div>
                <dt>Areas vs projects</dt>
                <dd>
                  Each card on the grid is a London <strong>area</strong>. Click in to
                  see the individual <strong>projects</strong> (developments) inside it.
                  Areas and projects each carry their own grade — &ldquo;good project
                  in an okay area&rdquo; surfaces as a legitimate result.
                </dd>
              </div>
              <div>
                <dt>The grades (SS&nbsp;·&nbsp;S&nbsp;·&nbsp;A&nbsp;·&nbsp;B&nbsp;·&nbsp;C&nbsp;·&nbsp;F)</dt>
                <dd>
                  Areas roll up the rubric (foundational viability, daily life, identity,
                  personal fit). Projects roll up building quality, amenities, and
                  architecture. The two grades are independent — sort by either.
                </dd>
              </div>
              <div>
                <dt>Where to look first</dt>
                <dd>
                  The <strong>realism chip</strong> (green / amber / orange / red) on
                  every project tells you whether it&rsquo;s actually rentable for you.
                  Open <em>Filters</em>, set Graduate-visa realism to <em>Achievable</em>,
                  and sort by <em>best project grade in area</em> — the top of that list
                  is where the realistic upgrades live.
                </dd>
              </div>
              <div>
                <dt>Click anything with a&nbsp;<span aria-hidden="true">▾</span></dt>
                <dd>
                  Value boxes with a small chevron expand inline to show what that
                  specific number means for your situation. Section headers and rubric
                  rows expand the same way.
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </header>
  );
}
