"use client";

import { useEffect } from "react";
import styles from "./browser.module.css";
import type { Area, Project } from "@/src/areas/types";
import {
  AGREEMENT_TYPE_LABELS,
  BUILDING_TYPE_LABELS,
  BUILD_PHASE_LABELS,
  CONCIERGE_LABELS,
  COST_TIER_LABELS,
  CREDIT_CHECK_LABELS,
  FLEXIBILITY_SIGNAL_LABELS,
  HEATING_TYPE_LABELS,
  INTL_TENANT_POLICY_LABELS,
  PRICE_TRANSPARENCY_LABELS,
  PROJECT_AMENITY_TIER_LABELS,
  QUALITY_LABELS,
  REALISM_PATHWAY_LABELS,
  REALISM_PATHWAY_DESCRIPTIONS,
  REFERENCING_PROVIDER_LABELS,
  RESEARCH_STATUS_LABELS,
  UPFRONT_RENT_POLICY_LABELS,
  VISA_EXPIRY_HANDLING_LABELS,
  YES_NO_UNCERTAIN_LABELS,
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
  /** Parent area — when provided, renders an area context line in the header with a "View area" link. */
  area?: Area;
  /** Opens the parent area modal on top of the project modal. Only used when `area` is provided. */
  onOpenArea?: () => void;
};

function primaryWebsite(links: Project["external_links"]): { url: string; label: string } | null {
  const match = links.find(l => l.type === "operator" || l.type === "developer");
  return match ? { url: match.url, label: match.label } : null;
}

function priceLine(price: { min: number; max?: number } | undefined): string | null {
  if (!price) return null;
  if (price.max && price.max !== price.min) {
    return `£${price.min.toLocaleString()}–£${price.max.toLocaleString()}/mo`;
  }
  return `£${price.min.toLocaleString()}/mo`;
}

const QUALITY_SCALE = ["Excellent", "Good", "Average", "Poor", "Unknown"];
const CREDIT_SCALE = ["Lenient — minimal UK credit history accepted", "Standard UK credit reference check", "Strict — requires established UK credit"];
const INTL_POLICY_SCALE = ["Welcomed", "Case by case", "Discouraged", "Rejected"];
const VISA_EXPIRY_SCALE = ["Ignored — visa expiry doesn't affect tenancy length", "Tenancy shortened to visa expiry", "Rejected if visa expires before tenancy end"];
const UPFRONT_SCALE = ["Multi-month upfront available", "One month max (RRA-capped)", "Upfront rejected"];
const FLEXIBILITY_SCALE = ["Flexible", "Standard", "Rigid"];
const CONCIERGE_SCALE = ["24-hour concierge", "Daytime concierge", "No concierge"];

export default function ProjectModal({ project, onClose, area, onOpenArea }: ProjectModalProps) {
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
          {area ? (
            <div className={styles.projectModalAreaLine}>
              <span>
                In <strong>{area.name}</strong>
                {area.zones.length > 0 ? ` · ${area.zones[0]}` : ""}
                {" · Area "}
                <GradeChip grade={area.evaluation.overall_grade} />
              </span>
              {onOpenArea ? (
                <button
                  type="button"
                  className={styles.projectModalAreaLink}
                  onClick={onOpenArea}
                >
                  View area →
                </button>
              ) : null}
            </div>
          ) : null}
          <div className={styles.modalEyebrow}>{project.developer}</div>
          <div className={styles.modalTitleRow}>
            <h2 className={styles.modalTitle}>{project.name}</h2>
            {(() => {
              const site = primaryWebsite(project.external_links);
              return site ? (
                <a
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.modalWebsiteLink}
                  title={site.label}
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit website ↗
                </a>
              ) : null;
            })()}
          </div>
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
              <ExplainedValue
                label="Price transparency"
                value={PRICE_TRANSPARENCY_LABELS[project.rental.price_transparency]}
                explainerId="price-transparency"
                rawValue={project.rental.price_transparency}
                scale={["Prices listed", "Enquire only", "Not yet checked"]}
                scaleHighlight={PRICE_TRANSPARENCY_LABELS[project.rental.price_transparency]}
              />
              {q.min_tenancy_months != null ? (
                <ExplainedValue
                  label="Minimum tenancy"
                  value={`${q.min_tenancy_months} month${q.min_tenancy_months !== 1 ? "s" : ""}`}
                  explainerId="min-tenancy"
                  rawValue={q.min_tenancy_months}
                />
              ) : null}
            </div>

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
                scale={["Achievable", "With guarantor", "Licence exempt", "Unlikely", "Blocked", "Unclear", "Not researched"]}
              />
              <ExplainedValue
                label="Agreement type"
                value={AGREEMENT_TYPE_LABELS[q.agreement_type]}
                explainerId="agreement-type"
                rawValue={q.agreement_type}
                scale={["Licence agreement", "Assured Shorthold Tenancy"]}
                scaleHighlight={AGREEMENT_TYPE_LABELS[q.agreement_type]}
              />
              <ExplainedValue
                label="Referencing provider"
                value={REFERENCING_PROVIDER_LABELS[q.referencing_provider]}
                explainerId="referencing-provider"
                rawValue={q.referencing_provider}
                scale={["No referencing", "Homeppl", "Canopy", "Goodlord", "In-house"]}
                scaleHighlight={REFERENCING_PROVIDER_LABELS[q.referencing_provider]}
              />
              <ExplainedValue
                label="Income multiple"
                value={q.income_multiple != null ? `${q.income_multiple}× monthly rent` : "Not surfaced"}
                explainerId="income-multiple"
                rawValue={q.income_multiple}
              />
              <ExplainedValue
                label="Open Banking verification"
                value={YES_NO_UNCERTAIN_LABELS[q.open_banking_accepted]}
                rawValue={q.open_banking_accepted}
                description="Whether the operator accepts Open Banking income verification — your bank transactions prove income instead of payslips. Homeppl-native; critical for applicants without UK payslips."
              />
              <ExplainedValue
                label="Upfront rent policy"
                value={UPFRONT_RENT_POLICY_LABELS[q.upfront_rent_policy]}
                rawValue={q.upfront_rent_policy}
                scale={UPFRONT_SCALE}
                scaleHighlight={UPFRONT_RENT_POLICY_LABELS[q.upfront_rent_policy]}
                description="Whether multi-month upfront payment is a live qualification lever here. Licence operators can still accept it; AST operators are RRA-capped at 1 month."
              />
              <ExplainedValue
                label="Professional guarantor"
                value={YES_NO_UNCERTAIN_LABELS[q.accepts_professional_guarantor]}
                rawValue={q.accepts_professional_guarantor}
                description="Whether the operator accepts corporate guarantor services (Guarantid, Housing Hand, etc.). Replaces the need for a personal UK guarantor for a 3–5% annual-rent fee."
              />
              <ExplainedValue
                label="Overseas co-signer"
                value={YES_NO_UNCERTAIN_LABELS[q.accepts_individual_overseas_guarantor]}
                rawValue={q.accepts_individual_overseas_guarantor}
                description="Whether the operator accepts a non-UK-resident individual as guarantor or co-signer. Homeppl's Co-Signer route supports this — self-employed Turkish parents qualify."
              />
              <ExplainedValue
                label="Credit check"
                value={CREDIT_CHECK_LABELS[q.credit_check]}
                explainerId="credit-check"
                rawValue={q.credit_check}
                scale={CREDIT_SCALE}
                scaleHighlight={CREDIT_CHECK_LABELS[q.credit_check]}
              />
              <ExplainedValue
                label="International tenant policy"
                value={INTL_TENANT_POLICY_LABELS[q.international_tenant_policy]}
                rawValue={q.international_tenant_policy}
                scale={INTL_POLICY_SCALE}
                scaleHighlight={INTL_TENANT_POLICY_LABELS[q.international_tenant_policy]}
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
                label="Flexibility signal"
                value={FLEXIBILITY_SIGNAL_LABELS[q.qualification_flexibility_signal]}
                rawValue={q.qualification_flexibility_signal}
                scale={FLEXIBILITY_SCALE}
                scaleHighlight={FLEXIBILITY_SIGNAL_LABELS[q.qualification_flexibility_signal]}
                description="Qualitative signal about whether the operator flexes on stated policy when applicants bring unusual circumstances. Inferred from reviews, FAQ tone, known cases."
              />
            </div>

            {q.realism_pathways.length > 0 ? (
              <div style={{ marginTop: 16 }}>
                <h5 style={{ color: "var(--text-secondary)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 8px" }}>
                  Qualification pathways ({q.realism_pathways.length})
                </h5>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  {q.realism_pathways.map((p) => (
                    <li key={p} style={{ fontSize: 12, lineHeight: 1.5 }}>
                      <strong style={{ color: "var(--c-realism-achievable)" }}>{REALISM_PATHWAY_LABELS[p]}</strong>
                      <span style={{ color: "var(--text-secondary)" }}> — {REALISM_PATHWAY_DESCRIPTIONS[p]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div style={{ marginTop: 12, fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.04em" }}>
              Research status: <span style={{ color: "var(--text-secondary)" }}>{RESEARCH_STATUS_LABELS[q.research_status]}</span>
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
                  value={
                    <span style={{ color: project.architecture.is_signature ? "var(--c-realism-achievable)" : "var(--text-muted)" }}>
                      {project.architecture.is_signature ? "Yes" : "No"}
                    </span>
                  }
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
