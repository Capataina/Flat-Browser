#!/usr/bin/env node
//
// Phase F sweep launcher.
//
// Dispatches 15 agents in parallel:
//   - 10 focus agents that research the candidate areas list
//   - 5 discovery agents that explore for areas/projects we missed
//
// Discovery agents return PROPOSALS (not finished Area entries) which get
// reviewed and folded into the candidate list as a second wave. See
// context/references/merge-protocol.md for the consolidation procedure.
//
// This is the Phase F2 entry point. Prerequisites:
//   - Phase A through E complete (schema, briefs, candidate list, merge protocol)
//   - `codex` CLI installed and authenticated
//   - Run from repo root: `node scripts/launch_sweep_agents.mjs`
//
// The script does NOT auto-run on import — Caner must explicitly invoke it.
//
// SAFETY: This script spawns up to 15 codex subprocesses, each of which will
// consume API credits and run for potentially significant time. Do not run
// without authorisation. Use --dry-run to print what would be dispatched
// without actually launching anything.

import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

// 10 focus agents (research existing candidate list) + 5 discovery agents
// (find areas/projects we missed). Discovery agents return PROPOSALS — see
// context/references/merge-protocol.md.
const FOCUSES = [
  // Focus agents — research the candidate list
  { id: "01", slug: "safety-foundational", name: "Safety & Foundational Viability", type: "focus" },
  { id: "02", slug: "daily-life-gym-food", name: "Daily Life: Gym, Food, Walkability", type: "focus" },
  { id: "03", slug: "younger-demographic", name: "Younger Demographic Skew", type: "focus" },
  { id: "04", slug: "cultural-identity-depth", name: "Cultural Identity & Place Depth", type: "focus" },
  { id: "05", slug: "green-and-water", name: "Green Space & Waterside", type: "focus" },
  { id: "06", slug: "premium-amenity", name: "Premium Amenity & Architecture", type: "focus" },
  { id: "07", slug: "multi-cluster-connectivity", name: "Multi-cluster Connectivity & Redundancy", type: "focus" },
  { id: "08", slug: "regeneration-2027-trajectory", name: "Regeneration & 2027 Trajectory", type: "focus" },
  { id: "09", slug: "rental-qualification-realism", name: "Rental Qualification Realism (CRITICAL)", type: "focus" },
  { id: "10", slug: "resident-voice", name: "Resident Voice & On-the-ground Signal", type: "focus" },
  // Discovery agents — find what's NOT in the candidate list
  { id: "11", slug: "discovery-btr-operators", name: "DISCOVERY: BTR Operator Portfolio Sweep", type: "discovery" },
  { id: "12", slug: "discovery-planning-pipeline", name: "DISCOVERY: Planning & Regeneration Pipeline", type: "discovery" },
  { id: "13", slug: "discovery-press-architecture", name: "DISCOVERY: Press, Architecture, Best-Of Lists", type: "discovery" },
  { id: "14", slug: "discovery-resident-voice", name: "DISCOVERY: Resident Voice & Grass-roots", type: "discovery" },
  { id: "15", slug: "discovery-excluded-reconsider", name: "DISCOVERY: Excluded Areas Reconsideration", type: "discovery" },
];

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has("--dry-run");

async function main() {
  console.log("\n╭─────────────────────────────────────────────────╮");
  console.log("│   Flatbrowser Phase F Sweep Launcher            │");
  console.log("╰─────────────────────────────────────────────────╯\n");

  // Pre-flight checks
  const required = [
    "context/notes/search-rubric.md",
    "context/references/data-schema.md",
    "context/references/candidate-areas.md",
    "context/references/merge-protocol.md",
    "context/agent-briefs/template.md",
    "src/areas/types.ts",
  ];
  for (const f of required) {
    try {
      await access(path.join(root, f));
    } catch {
      console.error(`✗ Pre-flight failed: missing ${f}`);
      process.exit(1);
    }
  }
  console.log("✓ All required context files present\n");

  // Read template
  const template = await readFile(path.join(root, "context/agent-briefs/template.md"), "utf8");

  // Pre-create output directories
  for (const focus of FOCUSES) {
    const outDir = path.join(root, "docs/research", `sweep-${focus.slug}`);
    if (!DRY_RUN) {
      await mkdir(outDir, { recursive: true });
      await mkdir(path.join(outDir, "_logs"), { recursive: true });
    }
  }

  // Display dispatch plan
  const focusCount = FOCUSES.filter((f) => f.type === "focus").length;
  const discoveryCount = FOCUSES.filter((f) => f.type === "discovery").length;
  console.log(`Dispatch plan: ${focusCount} focus agents + ${discoveryCount} discovery agents (${FOCUSES.length} total)\n`);
  console.log("── Focus agents (research existing candidates) ──");
  for (const focus of FOCUSES.filter((f) => f.type === "focus")) {
    console.log(`  Agent ${focus.id} → ${focus.name}`);
    console.log(`    output: docs/research/sweep-${focus.slug}/`);
  }
  console.log("\n── Discovery agents (find what we missed) ──");
  for (const focus of FOCUSES.filter((f) => f.type === "discovery")) {
    console.log(`  Agent ${focus.id} → ${focus.name}`);
    console.log(`    output: docs/research/sweep-${focus.slug}/proposals.md`);
  }
  console.log();

  if (DRY_RUN) {
    console.log("─── DRY RUN ───");
    console.log("No subprocesses spawned. Use without --dry-run to dispatch.");
    console.log(`\nFinal warning before live dispatch: this will spawn ${FOCUSES.length} codex`);
    console.log("subprocesses in parallel and consume real API credits.\n");
    return;
  }

  // Confirm before dispatch
  console.log(`⚠  About to dispatch ${FOCUSES.length} parallel codex agents.`);
  console.log("⚠  This will consume real API credits and take significant time.");
  console.log("⚠  Press Ctrl+C within 10 seconds to abort.\n");

  await new Promise((resolve) => setTimeout(resolve, 10000));

  // Dispatch
  const results = await Promise.all(FOCUSES.map((f) => dispatchAgent(f, template)));
  const failures = results.filter((r) => r.code !== 0);

  console.log("\n────────────────────────────────────");
  console.log(`Sweep complete: ${results.length - failures.length}/${results.length} agents succeeded`);
  if (failures.length > 0) {
    console.log("Failures:");
    for (const f of failures) {
      console.log(`  - Agent ${f.focus.id} (${f.focus.slug}): exit code ${f.code}`);
    }
    process.exit(1);
  }
  console.log(`\n✓ All ${FOCUSES.length} agents completed.`);
  console.log("Next:");
  console.log("  1. Review focus agent outputs in docs/research/sweep-{focus-slug}/");
  console.log("  2. Run the merge protocol from context/references/merge-protocol.md");
  console.log("  3. Triage discovery proposals in docs/research/sweep-discovery-*/proposals.md");
  console.log("  4. Decide which discovery proposals to add to the candidate list as a second wave");
}

async function dispatchAgent(focus, template) {
  const briefPath = path.join(root, "context/agent-briefs/focuses", `${focus.id}-${focus.slug}.md`);
  const focusBrief = await readFile(briefPath, "utf8");

  const fullPrompt = [
    template,
    "",
    "─── YOUR FOCUS ASSIGNMENT ───",
    "",
    focusBrief,
    "",
    "Begin researching now. Return a list of all the file paths you wrote when complete.",
  ].join("\n");

  const logDir = path.join(root, "docs/research", `sweep-${focus.slug}`, "_logs");
  const promptFile = path.join(logDir, "prompt.txt");
  const stdoutFile = path.join(logDir, "stdout.log");
  const stderrFile = path.join(logDir, "stderr.log");
  const lastMessageFile = path.join(logDir, "last.txt");

  await writeFile(promptFile, fullPrompt, "utf8");

  console.log(`▶ Dispatching agent ${focus.id} (${focus.slug})`);

  return new Promise((resolve) => {
    const child = spawn(
      "codex",
      [
        "--search",
        "-a", "never",
        "-s", "workspace-write",
        "exec",
        "-C", root,
        "--ephemeral",
        "-o", lastMessageFile,
        "-",
      ],
      { cwd: root, stdio: ["pipe", "pipe", "pipe"] },
    );

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => { stdout += chunk.toString(); });
    child.stderr.on("data", (chunk) => { stderr += chunk.toString(); });

    child.on("close", async (code) => {
      await Promise.all([
        writeFile(stdoutFile, stdout, "utf8"),
        writeFile(stderrFile, stderr, "utf8"),
      ]);
      console.log(`◼ Agent ${focus.id} finished with exit code ${code}`);
      resolve({ focus, code });
    });

    child.stdin.write(fullPrompt);
    child.stdin.end();
  });
}

main().catch((err) => {
  console.error("Sweep launcher failed:", err);
  process.exit(1);
});
