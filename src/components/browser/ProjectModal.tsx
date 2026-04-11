"use client";

import { useEffect } from "react";
import styles from "./browser.module.css";
import type { Project } from "@/src/areas/types";
import Accordion from "./Accordion";
import GradeChip from "./GradeChip";
import RealismChip from "./RealismChip";
import CriterionRow from "./CriterionRow";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

function priceLine(price: { min: number; max?: number } | undefined, label: string): string | null {
  if (!price) return null;
  if (price.max && price.max !== price.min) {
    return `${label}: £${price.min.toLocaleString()}–£${price.max.toLocaleString()}/mo`;
  }
  return `${label}: £${price.min.toLocaleString()}/mo`;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  const q = project.rental.qualification;
  const studio = priceLine(project.rental.prices.studio, "Studio");
  const oneBed = priceLine(project.rental.prices.one_bed, "1-bed");
  const twoBed = priceLine(project.rental.prices.two_bed, "2-bed");

  return (
    <div className={`${styles.modalOverlay} ${styles.modalOverlayProject}`} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalPanel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHero}>
          {project.hero_image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.hero_image_url}
              alt={project.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px 16px 0 0" }}
            />
          ) : (
            project.name
          )}
          <button
            className={styles.modalBackBtn}
            onClick={onClose}
            type="button"
            aria-label="Back to area"
          >
            ◂ Back
          </button>
          <button
            className={styles.modalCloseBtn}
            onClick={onClose}
            type="button"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className={styles.modalHeader}>
          <div className={styles.modalEyebrow}>{project.developer}</div>
          <h2 className={styles.modalTitle}>{project.name}</h2>
          <div className={styles.modalSubtitle}>
            {project.building_type}
            {project.build_completed ? ` · ${project.build_completed}` : ""}
            {project.units_total ? ` · ${project.units_total} units` : ""}
            {project.storeys ? ` · ${project.storeys} storeys` : ""}
          </div>
          <div className={styles.modalGradeRow}>
            <GradeChip grade={project.evaluation.overall_grade} />
            <RealismChip realism={q.grad_visa_realism} />
          </div>
          <p className={styles.modalHeadline}>{project.headline}</p>
        </div>

        <div className={styles.modalBody}>
          <Accordion title="At a glance" defaultOpen>
            <div className={styles.factGrid}>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Developer</span>
                <span className={styles.factValue}>{project.developer}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Operator</span>
                <span className={styles.factValue}>{project.operator}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Building type</span>
                <span className={styles.factValue}>{project.building_type}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Build phase</span>
                <span className={styles.factValue}>{project.build_phase}</span>
              </div>
              {project.build_completed ? (
                <div className={styles.factRow}>
                  <span className={styles.factLabel}>Year completed</span>
                  <span className={styles.factValue}>{project.build_completed}</span>
                </div>
              ) : null}
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Tenure</span>
                <span className={styles.factValue}>{project.rental.tenure.join(" / ")}</span>
              </div>
            </div>
          </Accordion>

          <Accordion title="Renting here" defaultOpen>
            {studio || oneBed || twoBed ? (
              <div className={styles.factGrid}>
                {studio ? <div className={styles.factRow}><span className={styles.factLabel}>Studio</span><span className={styles.factValue}>{studio}</span></div> : null}
                {oneBed ? <div className={styles.factRow}><span className={styles.factLabel}>1-bed</span><span className={styles.factValue}>{oneBed}</span></div> : null}
                {twoBed ? <div className={styles.factRow}><span className={styles.factLabel}>2-bed</span><span className={styles.factValue}>{twoBed}</span></div> : null}
              </div>
            ) : (
              <p style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
                Live prices not yet populated — Phase F sweep agent #9 will fill these in.
              </p>
            )}
            <h5 style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", margin: "16px 0 8px" }}>
              Graduate-visa qualification
            </h5>
            <div className={styles.factGrid}>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Realism</span>
                <span className={styles.factValue}><RealismChip realism={q.grad_visa_realism} /></span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Income multiple</span>
                <span className={styles.factValue}>{q.income_multiple}× monthly</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Max upfront accepted</span>
                <span className={styles.factValue}>{q.upfront_max_months} months {q.upfront_negotiable ? "(negotiable)" : ""}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Guarantor accepted</span>
                <span className={styles.factValue}>{q.guarantor_acceptable ? "Yes" : "No"}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>International friendly</span>
                <span className={styles.factValue}>{q.international_friendly}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Visa friendly</span>
                <span className={styles.factValue}>{q.visa_friendly}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Credit check</span>
                <span className={styles.factValue}>{q.credit_check}</span>
              </div>
            </div>
            {q.notes ? <p>{q.notes}</p> : null}
          </Accordion>

          <Accordion title="Building quality">
            <div className={styles.factGrid}>
              {project.building_quality.epc_rating ? (
                <div className={styles.factRow}>
                  <span className={styles.factLabel}>EPC</span>
                  <span className={styles.factValue}>{project.building_quality.epc_rating}</span>
                </div>
              ) : null}
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Sound insulation</span>
                <span className={styles.factValue}>{project.building_quality.sound_insulation}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Thermal performance</span>
                <span className={styles.factValue}>{project.building_quality.thermal_performance}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Kitchen quality</span>
                <span className={styles.factValue}>{project.building_quality.kitchen_quality}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Heating</span>
                <span className={styles.factValue}>{project.building_quality.heating_type}</span>
              </div>
            </div>
            {project.building_quality.notes ? <p>{project.building_quality.notes}</p> : null}
          </Accordion>

          <Accordion title="Amenities" tier="t4">
            <div className={styles.factGrid}>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Pool</span>
                <span className={styles.factValue}>{project.amenities.pool ? "Yes" : "No"}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Gym (in-building)</span>
                <span className={styles.factValue}>
                  {project.amenities.gym ? `Yes (${project.amenities.gym_quality})` : "No"}
                </span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Concierge</span>
                <span className={styles.factValue}>{project.amenities.concierge}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Sky lounge</span>
                <span className={styles.factValue}>{project.amenities.sky_lounge ? "Yes" : "No"}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Co-working</span>
                <span className={styles.factValue}>{project.amenities.co_working ? "Yes" : "No"}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Cinema room</span>
                <span className={styles.factValue}>{project.amenities.cinema_room ? "Yes" : "No"}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Rooftop terrace</span>
                <span className={styles.factValue}>{project.amenities.rooftop_terrace ? "Yes" : "No"}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Bike storage</span>
                <span className={styles.factValue}>{project.amenities.bike_storage ? "Yes" : "No"}</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Overall tier</span>
                <span className={styles.factValue}>{project.amenities.overall_tier}</span>
              </div>
            </div>
          </Accordion>

          {project.architecture.architects.length > 0 || project.architecture.is_signature ? (
            <Accordion title="Architecture" tier="t4">
              <div className={styles.factGrid}>
                {project.architecture.architects.length > 0 ? (
                  <div className={styles.factRow}>
                    <span className={styles.factLabel}>Architects</span>
                    <span className={styles.factValue}>{project.architecture.architects.join(", ")}</span>
                  </div>
                ) : null}
                <div className={styles.factRow}>
                  <span className={styles.factLabel}>Signature</span>
                  <span className={styles.factValue}>{project.architecture.is_signature ? "Yes" : "No"}</span>
                </div>
              </div>
              {project.architecture.style_notes ? <p>{project.architecture.style_notes}</p> : null}
            </Accordion>
          ) : null}

          {project.long_form.full ? (
            <Accordion title="Living experience">
              <p>{project.long_form.full}</p>
              {project.long_form.living_experience ? <p>{project.long_form.living_experience}</p> : null}
            </Accordion>
          ) : null}

          {project.resident_signal.summary || (project.resident_signal.common_praise.length > 0) ? (
            <Accordion title="Resident perspective">
              <p>{project.resident_signal.summary || "No resident summary yet."}</p>
            </Accordion>
          ) : null}

          <Accordion title="Project evaluation">
            <p>{project.evaluation.grade_reasoning}</p>
            <div className={styles.criterionList}>
              <CriterionRow criterion={project.evaluation.t2_6_building_quality} />
              <CriterionRow criterion={project.evaluation.t4_1_amenity_package} />
              <CriterionRow criterion={project.evaluation.t4_4_signature_arch} />
            </div>
          </Accordion>

          {project.external_links.length > 0 ? (
            <Accordion title="External links">
              <div className={styles.linkList}>
                {project.external_links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className={styles.linkRow}>
                    <span className={styles.linkType}>{link.type}</span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </Accordion>
          ) : null}
        </div>
      </div>
    </div>
  );
}
