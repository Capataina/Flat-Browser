import styles from "./browser.module.css";
import type { Area } from "@/src/areas/types";
import GradeChip from "./GradeChip";
import TierDots from "./TierDots";

type AreaCardProps = {
  area: Area;
  onOpen: () => void;
  animationDelay: string;
};

function bestProjectGrade(area: Area): string | null {
  if (area.projects.length === 0) return null;
  // Same ordering as gradeOrder in types.ts.
  const order = ["SS", "S", "A", "B", "C", "F"];
  let best = "F";
  for (const p of area.projects) {
    if (order.indexOf(p.evaluation.overall_grade) < order.indexOf(best)) {
      best = p.evaluation.overall_grade;
    }
  }
  return best;
}

export default function AreaCard({ area, onOpen, animationDelay }: AreaCardProps) {
  const bestProj = bestProjectGrade(area);
  return (
    <button
      className={styles.areaCard}
      onClick={onOpen}
      style={{ animationDelay }}
      type="button"
    >
      <div className={styles.areaCardHero}>
        {area.hero_image_url ? (
          // Operator/Wikipedia hosted, with text fallback if the URL 404s.
          // Deliberately not next/image because the URLs are external and
          // dynamic; the typography fallback handles broken URLs cleanly.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={area.hero_image_url}
            alt={area.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          area.name
        )}
      </div>
      <div className={styles.areaCardBody}>
        <div className={styles.areaCardTopRow}>
          <div>
            <div className={styles.areaBorough}>{area.borough}</div>
            <h3 className={styles.areaName}>{area.name}</h3>
            <div className={styles.areaLocation}>
              {area.zones.join(" · ")} · {area.projects.length} project
              {area.projects.length === 1 ? "" : "s"}
            </div>
          </div>
          <GradeChip grade={area.evaluation.overall_grade} />
        </div>

        <p className={styles.areaPreview}>{area.preview}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <TierDots tier="t1" evaluation={area.evaluation.t1_foundational} />
          <TierDots tier="t2" evaluation={area.evaluation.t2_daily_life} />
          <TierDots tier="t3" evaluation={area.evaluation.t3_identity} />
          <TierDots tier="t5" evaluation={area.evaluation.t5_personal} />
        </div>
      </div>
      <div className={styles.areaCardStats}>
        <span className={styles.areaCardStat}>
          <strong>{area.connectivity.lines.length}</strong> lines
        </span>
        <span className={styles.areaCardStat}>
          <strong>{area.connectivity.times_to_anchors.city_of_london}</strong>m to City
        </span>
        <span className={styles.areaCardStat}>
          <strong>{area.connectivity.times_to_anchors.canary_wharf}</strong>m to CW
        </span>
        <span className={styles.areaCardStat}>{area.demographics.primary_age_cohort}</span>
        {bestProj ? (
          <span className={styles.areaCardStat}>
            best project <GradeChip grade={bestProj as never} />
          </span>
        ) : null}
      </div>
    </button>
  );
}
