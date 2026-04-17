// Pre-flight enumeration for the data-upkeep skill's V4 (area-level) pass.
//
// Walks the full Flatbrowser dataset and lists every Area with research-freshness
// metadata. Output feeds Phase 1 of the skill when the invocation requires
// area-level research (full run, --area-research, --full).
//
// Supports shuffled batching via --seed. Re-runs use different seeds so that
// different areas end up in the same batch on each pass — the relativity
// mechanism that forces agents to cross-calibrate across a different neighbour
// set each time.
//
// Run via: pnpm exec tsx .claude/skills/data-upkeep/scripts/enumerate-areas.ts
//
// Options:
//   --format json         Output as JSON (default)
//   --format markdown     Output as a human-readable markdown report
//   --seed N              Shuffle seed for batch assignment (default: 0 = no shuffle)
//   --batches N           Target number of batches (default: 11 ≈ 5 areas/batch)

import { areas } from "../../../../src/areas/data/index";
import type { Area } from "../../../../src/areas/types";

interface AreaSummary {
  area_id: string;
  name: string;
  borough: string;
  zones: string[];
  area_grade: string;
  project_count: number;
  research_confidence: string;
  research_last_verified: string;
  has_qualification_data: number;   // count of projects with qualification.research_status !== "unresearched"
  has_enrichment_data: number;      // count of projects with amenities.overall_tier set to non-default
  area_long_form_filled: boolean;   // long_form.full is non-empty
  area_connectivity_filled: boolean;  // connectivity.primary_stations.length > 0
  area_demographics_filled: boolean;  // demographics.age_breakdown.length > 0
  area_safety_filled: boolean;        // safety.after_dark_assessment.length > 0
  area_regeneration_filled: boolean;  // regeneration.investment_pipeline.length > 0
}

interface AreaBatch {
  batch_id: string;
  area_count: number;
  areas: AreaSummary[];
}

// Mulberry32 — deterministic PRNG so identical seeds produce identical shuffles.
function makeRng(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleInPlace<T>(arr: T[], rng: () => number): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function summariseArea(area: Area): AreaSummary {
  const hasQual = area.projects.filter(
    (p) => p.rental.qualification.research_status !== "unresearched",
  ).length;
  const hasEnrich = area.projects.filter(
    (p) => p.amenities.overall_tier !== "decent" || p.amenities.gym_quality !== "unknown",
  ).length;

  return {
    area_id: area.id,
    name: area.name,
    borough: area.borough,
    zones: area.zones,
    area_grade: area.evaluation.overall_grade,
    project_count: area.projects.length,
    research_confidence: area.research.confidence,
    research_last_verified: area.research.last_verified,
    has_qualification_data: hasQual,
    has_enrichment_data: hasEnrich,
    area_long_form_filled: area.long_form.full.length > 0,
    area_connectivity_filled: area.connectivity.primary_stations.length > 0,
    area_demographics_filled: area.demographics.age_breakdown.length > 0,
    area_safety_filled: area.safety.after_dark_assessment.length > 0,
    area_regeneration_filled: area.regeneration.investment_pipeline.length > 0,
  };
}

function partitionIntoBatches(summaries: AreaSummary[], targetBatches: number): AreaBatch[] {
  const batches: AreaBatch[] = [];
  const perBatch = Math.ceil(summaries.length / targetBatches);

  for (let i = 0; i < targetBatches; i++) {
    const start = i * perBatch;
    const end = Math.min(start + perBatch, summaries.length);
    const chunk = summaries.slice(start, end);
    if (chunk.length === 0) break;
    batches.push({
      batch_id: `area-batch-${String(i + 1).padStart(2, "0")}`,
      area_count: chunk.length,
      areas: chunk,
    });
  }

  return batches;
}

function formatMarkdown(
  summaries: AreaSummary[],
  batches: AreaBatch[],
  seed: number,
): string {
  const lines: string[] = [];
  lines.push("# Area Enumeration");
  lines.push("");
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Total areas: ${summaries.length}`);
  lines.push(`Shuffle seed: ${seed}`);
  lines.push(`Target batches: ${batches.length}`);
  lines.push("");
  lines.push("## Areas by research freshness");
  lines.push("");
  lines.push(
    "| # | Area | Borough | Zone | Grade | Projects | Confidence | Last verified | Area data gaps |",
  );
  lines.push("|---|---|---|---|---|---|---|---|---|");

  summaries.forEach((s, i) => {
    const gaps: string[] = [];
    if (!s.area_long_form_filled) gaps.push("long-form");
    if (!s.area_connectivity_filled) gaps.push("connectivity");
    if (!s.area_demographics_filled) gaps.push("demographics");
    if (!s.area_safety_filled) gaps.push("safety");
    if (!s.area_regeneration_filled) gaps.push("regeneration");
    const gapText = gaps.length ? gaps.join(", ") : "—";
    lines.push(
      `| ${i + 1} | ${s.name} | ${s.borough} | ${s.zones[0] ?? "?"} | ${s.area_grade} | ${s.project_count} | ${s.research_confidence} | ${s.research_last_verified} | ${gapText} |`,
    );
  });

  lines.push("");
  lines.push("## Batches");
  lines.push("");

  for (const batch of batches) {
    lines.push(`### ${batch.batch_id} (${batch.area_count} areas)`);
    lines.push("");
    lines.push("| Area | Borough | Zone | Grade | Projects |");
    lines.push("|---|---|---|---|---|");
    for (const area of batch.areas) {
      lines.push(
        `| ${area.name} | ${area.borough} | ${area.zones[0] ?? "?"} | ${area.area_grade} | ${area.project_count} |`,
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
  const seedIdx = args.indexOf("--seed");
  const seed = seedIdx >= 0 ? parseInt(args[seedIdx + 1], 10) : 0;
  const batchesIdx = args.indexOf("--batches");
  const targetBatches = batchesIdx >= 0 ? parseInt(args[batchesIdx + 1], 10) : 11;

  const summaries = areas.map(summariseArea);

  // Shuffle when seed > 0 so re-runs produce different batch compositions.
  // Different shuffles force agents to cross-calibrate against different neighbour sets.
  if (seed > 0) {
    const rng = makeRng(seed);
    shuffleInPlace(summaries, rng);
  }

  const batches = partitionIntoBatches(summaries, targetBatches);

  if (format === "markdown") {
    console.log(formatMarkdown(summaries, batches, seed));
  } else {
    console.log(
      JSON.stringify(
        {
          generated_at: new Date().toISOString(),
          total_areas: summaries.length,
          seed,
          target_batches: targetBatches,
          summaries,
          batches,
        },
        null,
        2,
      ),
    );
  }
}

main();
