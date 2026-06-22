#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { IMAGE_GENERATION_CONFIG, DEFAULT_IMAGE_GENERATION_OPTIONS } from "./image-generation-config.mjs";
import {
  assemblePrompt,
  ensureOutputDirectoryForPath,
  getCandidatePath,
  getCategory,
  parseCliArgs,
  printHelp,
  selectAssets,
  summarizeDryRun,
  summarizeWriteRun,
  validateClaimSafeText,
} from "./image-generation-utils.mjs";

async function main() {
  const args = parseCliArgs(process.argv.slice(2));

  if (args.help) {
    printHelp();
    return;
  }

  const category = getCategory(IMAGE_GENERATION_CONFIG, args.category);
  const assets = selectAssets(category, args.asset);
  const plannedOutputs = [];

  for (const asset of assets) {
    const prompt = assemblePrompt(category, asset);
    validateClaimSafeText(prompt);
    plannedOutputs.push({
      asset,
      prompt,
      candidatePath: await getCandidatePath(category, asset, args.outputStage),
    });
  }

  if (args.dryRun) {
    summarizeDryRun({ category, assets, plannedOutputs });
    return;
  }

  if (!args.write) {
    throw new Error("Write mode requires explicit --write.");
  }

  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is required only when --write is used.");
  }

  const summary = {
    generated: [],
    skipped: [],
    errors: [],
  };

  for (const item of plannedOutputs) {
    try {
      const outputPath = await generateImageCandidate(item.prompt, item.candidatePath);
      summary.generated.push({
        filename: item.asset.filename,
        outputPath,
      });
    } catch (error) {
      summary.errors.push({
        filename: item.asset.filename,
        reason: error instanceof Error ? error.message : String(error),
      });
    }
  }

  summarizeWriteRun({ category, ...summary });

  if (summary.errors.length > 0) {
    process.exitCode = 1;
  }
}

async function generateImageCandidate(prompt, candidatePath) {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: DEFAULT_IMAGE_GENERATION_OPTIONS.model,
      prompt,
      size: DEFAULT_IMAGE_GENERATION_OPTIONS.size,
      quality: DEFAULT_IMAGE_GENERATION_OPTIONS.quality,
      output_format: DEFAULT_IMAGE_GENERATION_OPTIONS.outputFormat,
      n: 1,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`OpenAI Image API request failed with ${response.status}: ${body}`);
  }

  const json = await response.json();
  const imageResult = json?.data?.[0];
  const base64Image = imageResult?.b64_json;

  if (!base64Image) {
    throw new Error("OpenAI Image API response did not include b64_json image data.");
  }

  await ensureOutputDirectoryForPath(candidatePath);
  await fs.writeFile(candidatePath, Buffer.from(base64Image, "base64"));
  return path.normalize(candidatePath);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
