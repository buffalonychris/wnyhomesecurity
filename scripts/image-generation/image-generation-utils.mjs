import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = path.resolve(SCRIPT_DIR, "../..");

export function parseCliArgs(argv) {
  const options = {
    category: undefined,
    asset: undefined,
    dryRun: undefined,
    write: false,
    outputStage: undefined,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const readValue = () => {
      const value = argv[index + 1];
      if (!value || value.startsWith("--")) {
        throw new Error(`Missing value for ${arg}`);
      }
      index += 1;
      return value;
    };

    if (arg === "--category") {
      options.category = readValue();
    } else if (arg === "--asset") {
      options.asset = readValue();
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--write") {
      options.write = true;
      options.dryRun = false;
    } else if (arg === "--output-stage") {
      options.outputStage = readValue();
    } else if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  if (options.dryRun === undefined) {
    options.dryRun = process.env.WNYHS_IMAGE_GENERATION_DRY_RUN !== "false";
  }

  if (!options.write) {
    options.dryRun = true;
  }

  return options;
}

export function getCategory(config, categorySlug) {
  if (!categorySlug) {
    throw new Error("Missing required --category value.");
  }

  const category = config.categories[categorySlug];
  if (!category) {
    const knownCategories = Object.keys(config.categories).join(", ");
    throw new Error(`Unknown category "${categorySlug}". Known categories: ${knownCategories}`);
  }

  return category;
}

export function selectAssets(category, assetFilename) {
  if (!assetFilename) {
    return category.assets;
  }

  const selected = category.assets.filter((asset) => asset.filename === assetFilename);
  if (selected.length === 0) {
    throw new Error(`Unknown asset "${assetFilename}" for category "${category.slug}".`);
  }

  return selected;
}

export function assemblePrompt(category, asset) {
  const avoidList = Array.from(new Set([...(category.avoidList || []), ...(asset.avoidList || [])]));

  return [
    category.visualDirection,
    `Asset class: ${asset.assetClass}.`,
    `Required visual content: ${asset.requiredVisualContent}`,
    `Hardware requirement: ${asset.hardwareRequirement}`,
    `Dashboard/Core requirement: ${asset.dashboardCoreRequirement}`,
    asset.prompt,
    `Avoid: ${avoidList.join("; ")}.`,
  ].join("\n\n");
}

export function validateClaimSafeText(text) {
  const blockedFragments = [
    "crime-scene",
    "weapons",
    "law-enforcement-style",
    "emergency panic",
    "exaggerated danger",
    "dark unreadable",
    "cyber/futuristic",
    "surveillance-wall",
    "watermarks",
    "distorted devices",
    "text-heavy overlays",
    "impossible hardware",
  ];

  for (const requiredFragment of blockedFragments) {
    if (!text.includes(requiredFragment)) {
      throw new Error(`Prompt is missing required avoid-list fragment: ${requiredFragment}`);
    }
  }
}

export function resolveInsideRepo(relativePath) {
  const resolved = path.resolve(REPO_ROOT, relativePath);
  const rootWithSeparator = `${REPO_ROOT}${path.sep}`;
  if (resolved !== REPO_ROOT && !resolved.startsWith(rootWithSeparator)) {
    throw new Error(`Refusing path outside repository: ${relativePath}`);
  }
  return resolved;
}

export function getOutputDirectory(category, outputStage) {
  const stage = outputStage || category.defaultOutputStage || "drafts";
  if (!["drafts", "review"].includes(stage)) {
    throw new Error(`Unsupported output stage "${stage}". Use "drafts" or "review".`);
  }
  return resolveInsideRepo(path.join(category.folderPath, stage));
}

export async function getCandidatePath(category, asset, outputStage) {
  const outputDirectory = getOutputDirectory(category, outputStage);
  const parsed = path.parse(asset.filename);
  let candidatePath = path.join(outputDirectory, asset.filename);

  for (let index = 1; await fileExists(candidatePath); index += 1) {
    candidatePath = path.join(outputDirectory, `${parsed.name}-candidate-${index}${parsed.ext}`);
  }

  return candidatePath;
}

export async function ensureOutputDirectoryForPath(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

export async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

export function printHelp() {
  console.log(`WNYHS image generation pipeline

Usage:
  npm run images:generate -- --category home-security --dry-run
  npm run images:generate -- --category home-security --asset hero-home-security.jpg --dry-run
  npm run images:generate -- --category home-security --write

Options:
  --category <slug>       Required category slug.
  --asset <filename>      Optional single asset filename.
  --dry-run               Preview prompts only. This is the default.
  --write                 Generate candidate files under drafts/review.
  --output-stage <stage>  drafts or review. Defaults to drafts.
`);
}

export function summarizeDryRun({ category, assets, plannedOutputs }) {
  console.log("WNYHS image generation dry run");
  console.log(`Category: ${category.slug}`);
  console.log(`Asset count selected: ${assets.length}`);
  console.log("Write mode: disabled");

  plannedOutputs.forEach((item, index) => {
    console.log("");
    console.log(`${index + 1}. ${item.asset.filename}`);
    console.log(`Asset ID: ${item.asset.assetId}`);
    console.log(`Asset class: ${item.asset.assetClass}`);
    console.log(`Priority: ${item.asset.priority}`);
    console.log(`Output candidate path: ${item.candidatePath}`);
    console.log("Prompt preview:");
    console.log(item.prompt);
  });
}

export function summarizeWriteRun({ category, generated, skipped, errors }) {
  console.log("WNYHS image generation write summary");
  console.log(`Category: ${category.slug}`);
  console.log(`Generated count: ${generated.length}`);
  console.log(`Skipped count: ${skipped.length}`);
  console.log(`Error count: ${errors.length}`);

  generated.forEach((item) => {
    console.log(`Generated: ${item.filename} -> ${item.outputPath}`);
  });
  skipped.forEach((item) => {
    console.log(`Skipped: ${item.filename} - ${item.reason}`);
  });
  errors.forEach((item) => {
    console.log(`Error: ${item.filename} - ${item.reason}`);
  });
}
