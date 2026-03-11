import { access, mkdir, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";

const root = "/Users/atacanercetinkaya/Documents/Programming Projects/flatbrowser";
const researchDir = path.join(root, "docs/research");
const logDir = path.join(researchDir, "_logs");

const establishments = [
  ["battersea-power-station", "Battersea Power Station"],
  ["battersea-switch-house", "Battersea Power Station - Switch House"],
  ["bloom-nine-elms", "Bloom Nine Elms"],
  ["brent-cross-town", "Brent Cross Town"],
  ["canada-water", "Canada Water"],
  ["canary-wharf", "Canary Wharf / Wood Wharf"],
  ["elephant-park", "Elephant Park"],
  ["embassy-gardens", "Embassy Gardens"],
  ["greenwich-peninsula", "Greenwich Peninsula"],
  ["kidbrooke-village", "Kidbrooke Village"],
  ["kings-cross", "King's Cross"],
  ["kings-cross-ownership", "King's Cross - Gasholders & Capella"],
  ["one-nine-elms", "One Nine Elms"],
  ["oval-village", "Oval Village"],
  ["riverlight-quay", "Riverlight Quay"],
  ["royal-wharf", "Royal Wharf"],
  ["stratford", "Stratford / East Bank"],
  ["wembley-park", "Wembley Park"],
];

function buildPrompt(slug, name) {
  const sourceFile = path.join(root, "src/establishments/data", `${slug}.ts`);
  const outputFile = path.join(researchDir, `${slug}.md`);

  return `You are the dedicated research agent for ${name} only. You are not alone in the codebase. Do not modify or revert anyone else's work. Your exclusive write ownership is ${outputFile} and no other file.

Read ${sourceFile} to get the current assigned tags. Then research and fact-check every currently assigned tag against the full schema: Zone, Tenure, Price, Status, Character, Community, Demographic, Age Mix, Place Type.

For each currently assigned tag, determine whether it is verified, unverified, contradicted, or outdated. Every verdict must include cited source URL(s). Assess whether any currently unassigned tags should be added based on evidence.

Cross-reference these source types where applicable: relevant London Borough planning portal, GLA London Development Database, Planning London Datahub, the developer's official microsite, ONS and Census 2021 neighbourhood data, TfL current fare zone maps, Rightmove/Zoopla live listings or official developer documentation for tenure/price, Companies House, Homes England and GLA funding records, and recent press/community sources.

Hard rules: demographic and age tags can only be retained if substantiated by ONS or Census 2021 data; do not infer from marketing or anecdote. Zone tags must be verified directly against current TfL fare zone maps. Tenure and price must reflect current live listings or official developer documentation, not projected or historical information.

Write a concise markdown report to ${outputFile} with:
1. Title and establishment metadata.
2. A verdict entry for every currently assigned tag including category, tag, verdict, short rationale, and source URL(s).
3. Tags that should be added, with evidence.
4. Tags that should be removed or corrected, with evidence.
5. A brief summary of the establishment's current state and reliability as a place to live.
6. A short source-quality note if evidence is weak or conflicting.

Be rigorous and evidence-led. If a source cannot be found, say so explicitly in the file instead of guessing. Reply with the file path when complete.`;
}

async function runAgent(slug, name) {
  const prompt = buildPrompt(slug, name);
  const promptFile = path.join(logDir, `${slug}.prompt.txt`);
  const stdoutFile = path.join(logDir, `${slug}.stdout.log`);
  const stderrFile = path.join(logDir, `${slug}.stderr.log`);
  const lastMessageFile = path.join(logDir, `${slug}.last.txt`);

  await writeFile(promptFile, prompt, "utf8");

  return new Promise((resolve) => {
    const child = spawn(
      "codex",
      [
        "--search",
        "-a",
        "never",
        "-s",
        "workspace-write",
        "exec",
        "-C",
        root,
        "--ephemeral",
        "-o",
        lastMessageFile,
        "-",
      ],
      {
        cwd: root,
        stdio: ["pipe", "pipe", "pipe"],
      },
    );

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("close", async (code) => {
      await Promise.all([
        writeFile(stdoutFile, stdout, "utf8"),
        writeFile(stderrFile, stderr, "utf8"),
      ]);
      resolve({ slug, code });
    });

    child.stdin.write(prompt);
    child.stdin.end();
  });
}

async function main() {
  await mkdir(logDir, { recursive: true });
  const pending = [];

  for (const [slug, name] of establishments) {
    const outputFile = path.join(researchDir, `${slug}.md`);

    try {
      await access(outputFile);
    } catch {
      pending.push([slug, name]);
    }
  }

  const results = await Promise.all(pending.map(([slug, name]) => runAgent(slug, name)));
  const failures = results.filter((result) => result.code !== 0);

  if (failures.length > 0) {
    console.error(`Agents failed: ${failures.map((f) => f.slug).join(", ")}`);
    process.exit(1);
  }

  console.log(`Completed ${results.length} agents.`);
}

await main();
