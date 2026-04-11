import styles from "./browser.module.css";
import type { Project } from "@/src/areas/types";
import GradeChip from "./GradeChip";
import RealismChip from "./RealismChip";

type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <button className={styles.projectCard} onClick={onOpen} type="button">
      <div className={styles.projectCardDeveloper}>{project.developer}</div>
      <h4 className={styles.projectCardName}>{project.name}</h4>
      <div className={styles.projectCardMeta}>
        {project.building_type}
        {project.build_completed ? ` · ${project.build_completed}` : ""}
        {project.units_total ? ` · ${project.units_total} units` : ""}
      </div>
      <p className={styles.projectCardPreview}>{project.preview}</p>
      <div className={styles.projectCardFoot}>
        <GradeChip grade={project.evaluation.overall_grade} />
        <RealismChip realism={project.rental.qualification.grad_visa_realism} />
      </div>
    </button>
  );
}
