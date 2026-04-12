import styles from "./browser.module.css";
import type { Project } from "@/src/areas/types";
import {
  BUILDING_TYPE_DESCRIPTIONS,
  BUILDING_TYPE_LABELS,
  GRADE_DESCRIPTIONS,
  GRAD_VISA_REALISM_DESCRIPTIONS,
  GRAD_VISA_REALISM_LABELS,
  PRICE_TRANSPARENCY_DESCRIPTIONS,
  PRICE_TRANSPARENCY_LABELS,
} from "@/src/areas/labels";
import GradeChip from "./GradeChip";
import RealismChip from "./RealismChip";
import Tooltip from "./Tooltip";

type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const realism = project.rental.qualification.grad_visa_realism;
  const pt = project.rental.price_transparency;
  return (
    <button
      className={styles.projectCard}
      data-realism={realism}
      onClick={onOpen}
      type="button"
    >
      <div className={styles.projectCardDeveloper}>{project.developer}</div>
      <h4 className={styles.projectCardName}>{project.name}</h4>
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
