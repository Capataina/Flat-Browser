"use client";

import { useEffect } from "react";
import styles from "./browser.module.css";
import type { Project } from "@/src/areas/types";
import {
  AGREEMENT_TYPE_LABELS,
  BUILDING_TYPE_LABELS,
  BUILD_PHASE_LABELS,
  CONCIERGE_LABELS,
  COST_TIER_LABELS,
  CREDIT_CHECK_LABELS,
  HEATING_TYPE_LABELS,
  INTERNATIONAL_FRIENDLY_LABELS,
  PROJECT_AMENITY_TIER_LABELS,
  QUALITY_LABELS,
  REFERENCING_PROVIDER_LABELS,
  VISA_FRIENDLY_LABELS,
  VISA_EXPIRY_HANDLING_LABELS,
} from "@/src/areas/labels";
import Accordion from "./Accordion";
import GradeChip from "./GradeChip";
import RealismChip from "./RealismChip";
import CriterionRow from "./CriterionRow";
import ExplainedValue from "./ExplainedValue";
import Tooltip from "./Tooltip";
import ProseBlock from "./ProseBlock";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

function priceLine(price: { min: number; max?: number } | undefined): string | null {
  if (!price) return null;
  if (price.max && price.max !== price.min) {
    return `£${price.min.toLocaleString()}–£${price.max.toLocaleString()}/mo`;
  }
  return `£${price.min.toLocaleString()}/mo`;
}

function YesNo({ value }: { value: boolean }) {
  return <span style={{ color: value ? "var(--c-realism-achievable)" : "var(--text-muted)" }}>{value ? "Yes" : "No"}</span>;
}

const QUALITY_SCALE = ["Excellent", "Good", "Average", "Poor", "Unknown"];
const CREDIT_SCALE = ["Lenient — minimal UK credit history accepted", "Standard UK credit reference check", "Strict — requires established UK credit"];
const INTL_FRIENDLY_SCALE = ["Yes — accepts international references", "Case by case", "No — UK references only", "Not yet verified"];
const VISA_FRIENDLY_SCALE = ["Yes — visa-friendly", "Case by case", "No", "Not yet verified"];
const VISA_EXPIRY_SCALE = ["Ignored — visa expiry doesn't affect tenancy length", "Tenancy shortened to visa expiry", "Rejected if visa expires before tenancy end", "Not yet verified"];
const CONCIERGE_SCALE = ["24-hour concierge", "Daytime concierge", "No concierge"];

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
  const studio = priceLine(project.rental.prices.studio);
  const oneBed = priceLine(project.rental.prices.one_bed);
  const twoBed = priceLine(project.rental.prices.two_bed);

  // Build present amenities list (only show what the project has)
  const presentAmenities: { label: string; value: React.ReactNode; explainerId?: string; rawValue?: unknown; scale?: string[]; scaleHighlight?: string }[] = [];
  if (project.amenities.pool) {
    presentAmenities.push({ label: "Pool", value: project.amenities.pool_notes || "Yes" });
  }
  if (project.amenities.gym) {
    presentAmenities.push({
      label: "In-building gym",
      value: `Yes — ${QUALITY_LABELS[project.amenities.gym_quality]}`,
      scale: QUALITY_SCALE,
      scaleHighlight: QUALITY_LABELS[project.amenities.gym_quality],
    });
  }
  if (project.amenities.concierge !== "none") {
    presentAmenities.push({
      label: "Concierge",
      value: CONCIERGE_LABELS[project.amenities.concierge],
      explainerId: "concierge",
      rawValue: project.amenities.concierge,
      scale: CONCIERGE_SCALE,
      scaleHighlight: CONCIERGE_LABELS[project.amenities.concierge],
    });
  }
  if (project.amenities.sky_lounge) presentAmenities.push({ label: "Sky lounge", value: "Yes" });
  if (project.amenities.co_working) presentAmenities.push({ label: "Co-working space", value: "Yes" });
  if (project.amenities.dining_room) presentAmenities.push({ label: "Dining room", value: "Yes" });
  if (project.amenities.cinema_room) presentAmenities.push({ label: "Cinema room", value: "Yes" });
  if (project.amenities.rooftop_terrace) presentAmenities.push({ label: "Rooftop terrace", value: "Yes" });
  if (project.amenities.parking) presentAmenities.push({ label: "Parking", value: "Yes" });
  if (project.amenities.bike_storage) presentAmenities.push({ label: "Bike storage", value: "Yes" });

  return (
    <div
      className={`${styles.modalOverlay} ${styles.modalOverlayProject}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modalPanel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHero}>
          {project.hero_image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.hero_image_url}
              alt={project.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px 16px 0 0",
              }}
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
            autoFocus
          >
            ✕
          </button>
        </div>

        <div className={styles.modalHeader}>
          <div className={styles.modalEyebrow}>{project.developer}</div>
          <h2 className={styles.modalTitle}>{project.name}</h2>
          <div className={styles.modalSubtitle}>
            {BUILDING_TYPE_LABELS[project.building_type]}
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
          {/* ── At a glance ─────────────────────────────────────────── */}
          <Accordion title="At a glance">
            <div className={styles.factGrid}>
              <ExplainedValue
                label="Developer"
                value={project.developer}
              />
              <ExplainedValue
                label="Operator"
                value={project.operator}
              />
              <ExplainedValue
                label="Building type"
                value={BUILDING_TYPE_LABELS[project.building_type]}
                explainerId="building-type"
                rawValue={project.building_type}
                scale={["Build-to-Rent", "Private Rented Sector", "Owner-occupier with lettings", "Build-to-sell", "Mixed tenure"]}
                scaleHighlight={BUILDING_TYPE_LABELS[project.building_type]}
              />
              <ExplainedValue
                label="Build phase"
                value={BUILD_PHASE_LABELS[project.build_phase]}
                explainerId="build-phase"
                rawValue={project.build_phase}
                scale={["Complete", "In delivery", "Phased delivery", "Future phase"]}
                scaleHighlight={BUILD_PHASE_LABELS[project.build_phase]}
              />
              {project.build_completed ? (
                <ExplainedValue
                  label="Year completed"
                  value={String(project.build_completed)}
                />
              ) : null}
              <ExplainedValue
                label="Tenure"
                value={project.rental.tenure.map((t) => (t === "rent" ? "Rent" : "Buy")).join(" / ")}
                explainerId="tenure"
                rawValue={project.rental.tenure}
              />
            </div>
          </Accordion>

          {/* ── Renting here ────────────────────────────────────────── */}
          <Accordion title="Renting here">
            {studio || oneBed || twoBed ? (
              <div className={styles.factGrid}>
                {studio ? (
                  <ExplainedValue label="Studio" value={studio} />
                ) : null}
                {oneBed ? (
                  <ExplainedValue label="1 bedroom" value={oneBed} />
                ) : null}
                {twoBed ? (
                  <ExplainedValue label="2 bedroom" value={twoBed} />
                ) : null}
              </div>
            ) : (
              <p style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
                Pricing data not yet available.
              </p>
            )}

            {(project.rental.cost_tier || q.min_tenancy_months != null) ? (
              <div className={styles.factGrid} style={{ marginTop: 10 }}>
                {project.rental.cost_tier ? (
                  <ExplainedValue
                    label="Cost tier"
                    value={COST_TIER_LABELS[project.rental.cost_tier]}
                    explainerId="cost-tier"
                    rawValue={project.rental.cost_tier}
                    scale={["Budget", "Affordable", "Mid-range", "Premium", "Luxury"]}
                    scaleHighlight={COST_TIER_LABELS[project.rental.cost_tier]}
                  />
                ) : null}
                {q.min_tenancy_months != null ? (
                  <ExplainedValue
                    label="Minimum tenancy"
                    value={`${q.min_tenancy_months} month${q.min_tenancy_months !== 1 ? "s" : ""}`}
                    explainerId="min-tenancy"
                    rawValue={q.min_tenancy_months}
                  />
                ) : null}
              </div>
            ) : null}

            <h5
              style={{
                color: "var(--gold)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: "16px 0 10px",
              }}
            >
              Graduate-visa qualification
            </h5>

            <div className={styles.factGrid}>
              <ExplainedValue
                label="Realism for your situation"
                value={<RealismChip realism={q.grad_visa_realism} />}
                explainerId="grad-visa-realism"
                rawValue={q.grad_visa_realism}
                scale={["Achievable", "With guarantor", "Licence exempt", "Unlikely", "Blocked", "Not yet verified"]}
              />
              <ExplainedValue
                label="Agreement type"
                value={AGREEMENT_TYPE_LABELS[q.agreement_type]}
                explainerId="agreement-type"
                rawValue={q.agreement_type}
                scale={["Licence agreement", "Assured Shorthold Tenancy", "Unknown"]}
                scaleHighlight={AGREEMENT_TYPE_LABELS[q.agreement_type]}
              />
              <ExplainedValue
                label="Referencing provider"
                value={REFERENCING_PROVIDER_LABELS[q.referencing_provider]}
                explainerId="referencing-provider"
                rawValue={q.referencing_provider}
                scale={["No referencing", "Homeppl", "Canopy", "Goodlord", "In-house", "Unknown"]}
                scaleHighlight={REFERENCING_PROVIDER_LABELS[q.referencing_provider]}
              />
              {q.professional_guarantor_accepted ? (
                <ExplainedValue
                  label="Professional guarantor"
                  value="Accepted"
                  explainerId="professional-guarantor"
                  rawValue={true}
                />
              ) : null}
              {q.open_banking_accepted ? (
                <ExplainedValue
                  label="Open Banking verification"
                  value="Accepted"
                  description="This operator accepts Open Banking income verification — your bank transactions prove income instead of payslips. Works for freelancers, international tenants, and anyone without traditional employment."
                />
              ) : null}
              <ExplainedValue
                label="Income multiple required"
                value={`${q.income_multiple}× monthly rent`}
                explainerId="income-multiple"
                rawValue={q.income_multiple}
              />
              <ExplainedValue
                label="UK guarantor accepted"
                value={<YesNo value={q.guarantor_acceptable} />}
                explainerId="guarantor"
                rawValue={q.guarantor_acceptable}
              />
              <ExplainedValue
                label="International tenant friendly"
                value={INTERNATIONAL_FRIENDLY_LABELS[q.international_friendly]}
                explainerId="international-friendly"
                rawValue={q.international_friendly}
                scale={INTL_FRIENDLY_SCALE}
                scaleHighlight={INTERNATIONAL_FRIENDLY_LABELS[q.international_friendly]}
              />
              <ExplainedValue
                label="Visa friendly"
                value={VISA_FRIENDLY_LABELS[q.visa_friendly]}
                explainerId="visa-friendly"
                rawValue={q.visa_friendly}
                scale={VISA_FRIENDLY_SCALE}
                scaleHighlight={VISA_FRIENDLY_LABELS[q.visa_friendly]}
              />
              <ExplainedValue
                label="Visa expiry handling"
                value={VISA_EXPIRY_HANDLING_LABELS[q.visa_expiry_handling]}
                explainerId="visa-expiry-handling"
                rawValue={q.visa_expiry_handling}
                scale={VISA_EXPIRY_SCALE}
                scaleHighlight={VISA_EXPIRY_HANDLING_LABELS[q.visa_expiry_handling]}
              />
              <ExplainedValue
                label="Credit check"
                value={CREDIT_CHECK_LABELS[q.credit_check]}
                explainerId="credit-check"
                rawValue={q.credit_check}
                scale={CREDIT_SCALE}
                scaleHighlight={CREDIT_CHECK_LABELS[q.credit_check]}
              />
            </div>
            {q.notes ? (
              <p style={{ marginTop: 12, color: "var(--text-secondary)", fontSize: 12, lineHeight: 1.65 }}>
                {q.notes}
              </p>
            ) : null}
          </Accordion>

          {/* ── Building quality ─────────────────────────────────────── */}
          <Accordion title="Building quality">
            <div className={styles.factGrid}>
              {project.building_quality.epc_rating ? (
                <ExplainedValue
                  label="EPC rating"
                  value={project.building_quality.epc_rating}
                  explainerId="epc-rating"
                  rawValue={project.building_quality.epc_rating}
                  scale={["A", "B", "C", "D", "E", "F", "G"]}
                  scaleHighlight={project.building_quality.epc_rating}
                />
              ) : null}
              <ExplainedValue
                label="Sound insulation"
                value={QUALITY_LABELS[project.building_quality.sound_insulation]}
                explainerId="sound-insulation"
                rawValue={project.building_quality.sound_insulation}
                scale={QUALITY_SCALE}
                scaleHighlight={QUALITY_LABELS[project.building_quality.sound_insulation]}
              />
              <ExplainedValue
                label="Thermal performance"
                value={QUALITY_LABELS[project.building_quality.thermal_performance]}
                explainerId="thermal-performance"
                rawValue={project.building_quality.thermal_performance}
                scale={QUALITY_SCALE}
                scaleHighlight={QUALITY_LABELS[project.building_quality.thermal_performance]}
              />
              <ExplainedValue
                label="Kitchen quality"
                value={QUALITY_LABELS[project.building_quality.kitchen_quality]}
                explainerId="kitchen-quality"
                rawValue={project.building_quality.kitchen_quality}
                scale={QUALITY_SCALE}
                scaleHighlight={QUALITY_LABELS[project.building_quality.kitchen_quality]}
              />
              <ExplainedValue
                label="Heating type"
                value={HEATING_TYPE_LABELS[project.building_quality.heating_type]}
                explainerId="heating-type"
                rawValue={project.building_quality.heating_type}
              />
            </div>
            {project.building_quality.layout_notes ? (
              <p style={{ marginTop: 12 }}>{project.building_quality.layout_notes}</p>
            ) : null}
            {project.building_quality.notes ? (
              <p>{project.building_quality.notes}</p>
            ) : null}
          </Accordion>

          {/* ── Amenities ───────────────────────────────────────────── */}
          <Accordion title="Amenities" tier="t4">
            {presentAmenities.length > 0 ? (
              <div className={styles.factGrid}>
                {presentAmenities.map((a) => (
                  <ExplainedValue
                    key={a.label}
                    label={a.label}
                    value={a.value}
                    explainerId={a.explainerId as never}
                    rawValue={a.rawValue}
                    scale={a.scale}
                    scaleHighlight={a.scaleHighlight}
                  />
                ))}
              </div>
            ) : (
              <p style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
                No premium amenities.
              </p>
            )}
            {project.amenities.other_amenities.length > 0 ? (
              <p style={{ marginTop: 12, color: "var(--text-secondary)", fontSize: 12 }}>
                <strong style={{ color: "var(--gold)" }}>Other:</strong>{" "}
                {project.amenities.other_amenities.join(", ")}
              </p>
            ) : null}
            <div className={styles.factGrid} style={{ marginTop: presentAmenities.length > 0 ? 10 : 0 }}>
              <ExplainedValue
                label="Overall amenity tier"
                value={PROJECT_AMENITY_TIER_LABELS[project.amenities.overall_tier]}
                scale={["Premium", "Strong", "Decent", "Basic"]}
                scaleHighlight={PROJECT_AMENITY_TIER_LABELS[project.amenities.overall_tier]}
              />
            </div>
          </Accordion>

          {/* ── Architecture ─────────────────────────────────────────── */}
          {project.architecture.architects.length > 0 || project.architecture.is_signature ? (
            <Accordion title="Architecture" tier="t4">
              <div className={styles.factGrid}>
                {project.architecture.architects.length > 0 ? (
                  <ExplainedValue
                    label="Architects"
                    value={project.architecture.architects.join(", ")}
                  />
                ) : null}
                <ExplainedValue
                  label="Signature architecture"
                  value={<YesNo value={project.architecture.is_signature} />}
                />
                {project.architecture.awards.length > 0 ? (
                  <ExplainedValue
                    label="Awards"
                    value={project.architecture.awards.join(", ")}
                  />
                ) : null}
              </div>
              {project.architecture.style_notes ? (
                <p style={{ marginTop: 12 }}>{project.architecture.style_notes}</p>
              ) : null}
            </Accordion>
          ) : null}

          {/* ── Living experience ─────────────────────────────────────── */}
          {project.long_form.full ? (
            <Accordion title="Living experience">
              <ProseBlock body={project.long_form.full} />
              <ProseBlock body={project.long_form.living_experience} />
              {project.long_form.notable_features ? (
                <>
                  <h5
                    style={{
                      color: "var(--gold)",
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      margin: "16px 0 8px",
                      fontWeight: 600,
                    }}
                  >
                    Notable features
                  </h5>
                  <ProseBlock body={project.long_form.notable_features} />
                </>
              ) : null}
            </Accordion>
          ) : null}

          {/* ── Resident perspective ──────────────────────────────────── */}
          {project.resident_signal.summary || project.resident_signal.common_praise.length > 0 ? (
            <Accordion title="Resident perspective">
              {project.resident_signal.homeviews_score ? (
                <p>
                  <strong style={{ color: "var(--gold-light)" }}>
                    HomeViews score: {project.resident_signal.homeviews_score}/5
                  </strong>
                </p>
              ) : null}
              <p>{project.resident_signal.summary || "No resident summary yet."}</p>
              {project.resident_signal.common_praise.length > 0 ? (
                <>
                  <h6
                    style={{
                      color: "var(--c-realism-achievable)",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      margin: "12px 0 6px",
                    }}
                  >
                    Common praise
                  </h6>
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {project.resident_signal.common_praise.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </>
              ) : null}
              {project.resident_signal.common_complaints.length > 0 ? (
                <>
                  <h6
                    style={{
                      color: "var(--c-realism-with-upfront)",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      margin: "12px 0 6px",
                    }}
                  >
                    Common complaints
                  </h6>
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {project.resident_signal.common_complaints.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </Accordion>
          ) : null}

          {/* ── Project evaluation ────────────────────────────────────── */}
          <Accordion title="Project evaluation" tier="t4">
            <p>{project.evaluation.grade_reasoning}</p>
            <div className={styles.criterionList}>
              <CriterionRow criterion={project.evaluation.t2_6_building_quality} />
              <CriterionRow criterion={project.evaluation.t4_1_amenity_package} />
              <CriterionRow criterion={project.evaluation.t4_4_signature_arch} />
            </div>
          </Accordion>

          {/* ── External links ──────────────────────────────────────── */}
          {project.external_links.length > 0 ? (
            <Accordion title="External links">
              <div className={styles.linkList}>
                {project.external_links.map((link) => (
                  <Tooltip
                    key={link.url}
                    title={link.type.toUpperCase()}
                    content={link.label}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.linkRow}
                    >
                      <span className={styles.linkType}>{link.type}</span>
                      <span>{link.label}</span>
                    </a>
                  </Tooltip>
                ))}
              </div>
            </Accordion>
          ) : null}
        </div>
      </div>
    </div>
  );
}
