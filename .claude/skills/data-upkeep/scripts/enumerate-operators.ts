// Pre-flight enumeration for the data-upkeep skill.
//
// Walks the full Flatbrowser dataset and groups projects by operator.
// Outputs a JSON report that Phase 1 of the skill uses to build batch
// manifests.
//
// Run via: pnpm exec tsx .claude/skills/data-upkeep/scripts/enumerate-operators.ts
//
// Options:
//   --format json         Output as JSON (default)
//   --format markdown     Output as a human-readable markdown report
//   --min-projects N      Only include operators with N+ projects (default: 1)

import { areas } from "../../../../src/areas/data/index";
import type { Project } from "../../../../src/areas/types";

interface OperatorGroup {
  operator: string;
  operator_slug: string;
  project_count: number;
  projects: Array<{
    area_id: string;
    project_id: string;
    project_name: string;
    current_grad_visa_realism: string;
    current_research_status: string;
    current_agreement_type: string;
    current_referencing_provider: string;
  }>;
  research_status_breakdown: Record<string, number>;
  realism_breakdown: Record<string, number>;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function groupByOperator(): Map<string, OperatorGroup> {
  const groups = new Map<string, OperatorGroup>();

  for (const area of areas) {
    for (const project of area.projects) {
      const operator = project.operator?.trim() || "(unknown operator)";
      const key = operator.toLowerCase();

      let group = groups.get(key);
      if (!group) {
        group = {
          operator,
          operator_slug: slugify(operator),
          project_count: 0,
          projects: [],
          research_status_breakdown: {},
          realism_breakdown: {},
        };
        groups.set(key, group);
      }

      group.project_count++;
      group.projects.push({
        area_id: area.id,
        project_id: project.id,
        project_name: project.name,
        current_grad_visa_realism: project.rental.qualification.grad_visa_realism,
        current_research_status: project.rental.qualification.research_status,
        current_agreement_type: project.rental.qualification.agreement_type,
        current_referencing_provider:
          project.rental.qualification.referencing_provider,
      });

      const rs = project.rental.qualification.research_status;
      group.research_status_breakdown[rs] =
        (group.research_status_breakdown[rs] || 0) + 1;

      const rv = project.rental.qualification.grad_visa_realism;
      group.realism_breakdown[rv] = (group.realism_breakdown[rv] || 0) + 1;
    }
  }

  return groups;
}

function toSortedArray(groups: Map<string, OperatorGroup>): OperatorGroup[] {
  return Array.from(groups.values()).sort(
    (a, b) => b.project_count - a.project_count,
  );
}

function formatMarkdown(groups: OperatorGroup[]): string {
  const lines: string[] = [];
  lines.push("# Operator Enumeration");
  lines.push("");
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Total operators: ${groups.length}`);
  lines.push(
    `Total projects: ${groups.reduce((sum, g) => sum + g.project_count, 0)}`,
  );
  lines.push("");
  lines.push(
    "| # | Operator | Projects | Research status | Realism distribution |",
  );
  lines.push(
    "|---|---|---|---|---|",
  );

  groups.forEach((g, i) => {
    const rsSummary = Object.entries(g.research_status_breakdown)
      .map(([k, v]) => `${k}: ${v}`)
      .join(", ");
    const rvSummary = Object.entries(g.realism_breakdown)
      .map(([k, v]) => `${k}: ${v}`)
      .join(", ");
    lines.push(
      `| ${i + 1} | ${g.operator} | ${g.project_count} | ${rsSummary} | ${rvSummary} |`,
    );
  });

  lines.push("");
  lines.push("## Per-operator project lists");
  lines.push("");

  for (const g of groups) {
    lines.push(`### ${g.operator} (${g.project_count})`);
    lines.push(`Slug: \`${g.operator_slug}\``);
    lines.push("");
    lines.push("| Area | Project | Current realism | Research status |");
    lines.push("|---|---|---|---|");
    for (const p of g.projects) {
      lines.push(
        `| ${p.area_id} | ${p.project_name} | ${p.current_grad_visa_realism} | ${p.current_research_status} |`,
      );
    }
    lines.push("");
  }

  return lines.join("\n");
}

function main() {
  const args = process.argv.slice(2);
  const formatIdx = args.indexOf("--format");
  const format =
    formatIdx >= 0 ? (args[formatIdx + 1] as "json" | "markdown") : "json";
  const minProjectsIdx = args.indexOf("--min-projects");
  const minProjects =
    minProjectsIdx >= 0 ? parseInt(args[minProjectsIdx + 1], 10) : 1;

  const groups = toSortedArray(groupByOperator()).filter(
    (g) => g.project_count >= minProjects,
  );

  if (format === "markdown") {
    console.log(formatMarkdown(groups));
  } else {
    console.log(
      JSON.stringify(
        {
          generated_at: new Date().toISOString(),
          total_operators: groups.length,
          total_projects: groups.reduce((sum, g) => sum + g.project_count, 0),
          operators: groups,
        },
        null,
        2,
      ),
    );
  }
}

main();
