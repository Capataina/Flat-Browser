import styles from "./browser.module.css";
import type { Area, Project } from "@/src/areas/types";
import {
  AFFORDABILITY_DESCRIPTIONS,
  AFFORDABILITY_LABELS,
  BUILDING_TYPE_DESCRIPTIONS,
  BUILDING_TYPE_LABELS,
  GRADE_DESCRIPTIONS,
  GRAD_VISA_REALISM_DESCRIPTIONS,
  GRAD_VISA_REALISM_LABELS,
  PRICE_TRANSPARENCY_DESCRIPTIONS,
  PRICE_TRANSPARENCY_LABELS,
} from "@/src/areas/labels";
import AffordabilityChip from "./AffordabilityChip";
import GradeChip from "./GradeChip";
import RealismChip from "./RealismChip";
import Tooltip from "./Tooltip";

type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
  /**
   * Parent area. When provided, the card shows an area subline
   * ("Wembley Park · Zone 4") — used in the flattened project-grid view
   * where the area context isn't already visible. Omit when rendering
   * inside the area modal.
   */
  area?: Area;
};

function priceSummary(project: Project): string | null {
  const { studio, one_bed } = project.rental.prices;
  if (studio) return `Studios from £${studio.min.toLocaleString()}/mo`;
  if (one_bed) return `1-bed from £${one_bed.min.toLocaleString()}/mo`;
  return null;
}

export default function ProjectCard({ project, onOpen, area }: ProjectCardProps) {
  const realism = project.rental.qualification.grad_visa_realism;
  const affordability = project.rental.affordability;
  const pt = project.rental.price_transparency;
  const price = priceSummary(project);
  return (
    <button
      className={styles.projectCard}
      data-realism={realism}
      onClick={onOpen}
      type="button"
    >
      <div className={styles.projectCardDeveloper}>{project.developer}</div>
      <h4 className={styles.projectCardName}>{project.name}</h4>
      {area ? (
        <div className={styles.projectCardArea}>
          {area.name}
          {area.zones.length > 0 ? ` · ${area.zones[0]}` : ""}
          {area.evaluation.overall_grade ? ` · Area ${area.evaluation.overall_grade}` : ""}
        </div>
      ) : null}
      <div className={styles.projectCardMeta}>
        <Tooltip
          title={BUILDING_TYPE_LABELS[project.building_type]}
          content={BUILDING_TYPE_DESCRIPTIONS[project.building_type]}
        >
          <span style={{ borderBottom: "1px dotted var(--text-muted)", cursor: "help" }}>
            {BUILDING_TYPE_LABELS[project.building_type]}
          </span>
        </Tooltip>
        {project.build_completed ? ` · ${project.build_completed}` : ""}
        {project.units_total ? ` · ${project.units_total} units` : ""}
      </div>
      <p className={styles.projectCardPreview}>{project.preview}</p>
      {price ? <div className={styles.projectCardPrice}>{price}</div> : null}
      <div className={styles.projectCardFoot}>
        <Tooltip
          title={`Project grade ${project.evaluation.overall_grade}`}
          content={GRADE_DESCRIPTIONS[project.evaluation.overall_grade]}
        >
          <span style={{ display: "inline-flex" }}>
            <GradeChip grade={project.evaluation.overall_grade} />
          </span>
        </Tooltip>
        <Tooltip
          title={GRAD_VISA_REALISM_LABELS[realism]}
          content={GRAD_VISA_REALISM_DESCRIPTIONS[realism]}
        >
          <span style={{ display: "inline-flex" }}>
            <RealismChip realism={realism} />
          </span>
        </Tooltip>
        <Tooltip
          title={AFFORDABILITY_LABELS[affordability]}
          content={AFFORDABILITY_DESCRIPTIONS[affordability]}
        >
          <span style={{ display: "inline-flex" }}>
            <AffordabilityChip affordability={affordability} />
          </span>
        </Tooltip>
        {pt !== "unknown" ? (
          <Tooltip
            title={PRICE_TRANSPARENCY_LABELS[pt]}
            content={PRICE_TRANSPARENCY_DESCRIPTIONS[pt]}
          >
            <span className={styles.priceTransparencyChip} data-transparency={pt}>
              {pt === "listed" ? "£ Listed" : "£ Enquire"}
            </span>
          </Tooltip>
        ) : null}
      </div>
    </button>
  );
}
