import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const repoRoot = process.cwd();
const baselinePath = path.join(
  repoRoot,
  "scripts/checks/token-compliance-baseline.json",
);

const scanRoots = ["src"];
const scanExtensions = new Set([".css", ".ts", ".tsx"]);
const allowlistedRawValueFiles = [
  "src/styles/wnyhsVisualGovernance.css",
  "src/index.css",
  "src/newsite/theme/tokens.css",
];
const allowlistedRawValuePrefixes = ["src/newsite/theme/presets/"];

const namedColors = [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blue",
  "brown",
  "charcoal",
  "coral",
  "crimson",
  "cyan",
  "gold",
  "gray",
  "green",
  "grey",
  "indigo",
  "ivory",
  "lavender",
  "lime",
  "maroon",
  "navy",
  "olive",
  "orange",
  "pink",
  "purple",
  "red",
  "silver",
  "teal",
  "violet",
  "white",
  "yellow",
];

const namedColorPattern = new RegExp(
  `\\b(${namedColors.map(escapeRegExp).join("|")})\\b`,
  "i",
);

const rawPatterns = [
  {
    type: "raw-hex-color",
    regex: /(^|[^A-Za-z0-9_-])(#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8}))\b/g,
    valueGroup: 2,
    hint: "Use a governed semantic CSS variable, or add a token through a bounded token-governance task.",
  },
  {
    type: "raw-rgb-color",
    regex: /\brgba?\s*\([^)]*\)/gi,
    valueGroup: 0,
    hint: "Use a governed semantic CSS variable or token-backed color-mix expression instead of raw rgb/rgba.",
  },
  {
    type: "raw-hsl-color",
    regex: /\bhsla?\s*\([^)]*\)/gi,
    valueGroup: 0,
    hint: "Use a governed semantic CSS variable or token-backed color-mix expression instead of raw hsl/hsla.",
  },
];

const cssColorPropertyPattern =
  /\b(?:color|background(?:-color)?|border(?:-(?:top|right|bottom|left))?(?:-color)?|outline(?:-color)?|box-shadow|text-shadow)\s*:\s*([^;]+)/gi;
const fontFamilyPattern = /\bfont-family\s*:\s*([^;]+)/gi;
const suspiciousClassPattern =
  /^\s*\.([A-Za-z0-9_-]*(?:button|btn|card|tile|panel)[A-Za-z0-9_-]*)\b/i;
const inlineStylePattern =
  /style=\{\{[^}]*\b(?:color|background|backgroundColor|border|borderColor|boxShadow|fontFamily)\s*:/i;
const tsxVisualConstantPattern =
  /\b(?:color|backgroundColor|borderColor|boxShadow|fontFamily)\s*:\s*["'`][^"'`]+["'`]/i;

const updateBaseline = process.argv.includes("--update-baseline");
const verbose = process.argv.includes("--verbose");

main();

function main() {
  const files = scanRoots.flatMap((root) => collectFiles(path.join(repoRoot, root)));
  const findings = files.flatMap(scanFile).sort(compareFindings);

  if (updateBaseline) {
    writeBaseline(findings);
    printSummary(findings, []);
    console.log(`Updated token compliance baseline: ${relative(baselinePath)}`);
    return;
  }

  const baseline = readBaseline();
  const baselineKeys = new Set((baseline.findings ?? []).map((finding) => finding.key));
  const newFindings = findings.filter((finding) => !baselineKeys.has(finding.key));

  printSummary(findings, newFindings);

  if (newFindings.length > 0) {
    console.error(
      `\nToken compliance check failed: ${newFindings.length} new actionable violation(s) found.`,
    );
    process.exitCode = 1;
  }
}

function collectFiles(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (["node_modules", "dist", "coverage"].includes(entry.name)) {
        return [];
      }
      return collectFiles(fullPath);
    }

    if (!entry.isFile() || !scanExtensions.has(path.extname(entry.name))) {
      return [];
    }

    return [fullPath];
  });
}

function scanFile(filePath) {
  const relPath = relative(filePath);
  const extension = path.extname(filePath);
  const isCss = extension === ".css";
  const isTsx = extension === ".tsx";
  const isTs = extension === ".ts" || extension === ".tsx";
  const rawValuesAllowed = isRawValueAllowed(relPath);
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  const findings = [];

  lines.forEach((line, index) => {
    const lineNumber = index + 1;

    if (!rawValuesAllowed) {
      for (const pattern of rawPatterns) {
        for (const match of line.matchAll(pattern.regex)) {
          const value = match[pattern.valueGroup];
          findings.push(
            createFinding({
              relPath,
              lineNumber,
              type: pattern.type,
              value,
              snippet: line,
              hint: pattern.hint,
            }),
          );
        }
      }

      if (isCss) {
        for (const match of line.matchAll(cssColorPropertyPattern)) {
          const value = match[1].trim();
          const literal = value.match(namedColorPattern)?.[0];
          if (literal && !value.includes("var(")) {
            findings.push(
              createFinding({
                relPath,
                lineNumber,
                type: "css-color-literal",
                value: literal,
                snippet: line,
                hint: "Use a governed semantic CSS variable instead of a named color literal.",
              }),
            );
          }
        }
      }
    }

    if (isCss) {
      for (const match of line.matchAll(fontFamilyPattern)) {
        const value = match[1].trim();
        if (!isTokenFontValue(value) && !rawValuesAllowed) {
          findings.push(
            createFinding({
              relPath,
              lineNumber,
              type: "non-token-font-family",
              value,
              snippet: line,
              hint: "Use var(--wnyhs-font-body) or var(--wnyhs-font-heading) for public UI typography.",
            }),
          );
        }
      }

      const classMatch = line.match(suspiciousClassPattern);
      if (classMatch && !isGovernedVisualClass(classMatch[1])) {
        findings.push(
          createFinding({
            relPath,
            lineNumber,
            type: "suspicious-button-card-class",
            value: `.${classMatch[1]}`,
            snippet: line,
            hint: "Prefer governed WNYHS primitives such as .wnyhs-button and .wnyhs-card, or document a compatible page-specific selector.",
          }),
        );
      }
    }

    if (isTsx && inlineStylePattern.test(line)) {
      findings.push(
        createFinding({
          relPath,
          lineNumber,
          type: "inline-style-visual-property",
          value: "style={{ color/background/border/font visual property }}",
          snippet: line,
          hint: "Move visual styling to token-governed CSS classes instead of inline style properties.",
        }),
      );
    }

    if (isTs && tsxVisualConstantPattern.test(line) && !rawValuesAllowed) {
      const value = line.match(tsxVisualConstantPattern)?.[0] ?? "visual constant";
      findings.push(
        createFinding({
          relPath,
          lineNumber,
          type: "visual-style-constant",
          value,
          snippet: line,
          hint: "Avoid page-specific visual constants in TS/TSX; use token-governed CSS classes.",
        }),
      );
    }
  });

  return findings;
}

function createFinding({ relPath, lineNumber, type, value, snippet, hint }) {
  const normalizedSnippet = snippet.trim().replace(/\s+/g, " ");
  const key = `${type}|${relPath}|${value}|${normalizedSnippet}`;

  return {
    key,
    file: relPath,
    line: lineNumber,
    type,
    value,
    snippet: normalizedSnippet.slice(0, 220),
    hint,
  };
}

function printSummary(findings, newFindings) {
  const counts = countBy(findings, "type");
  const newCounts = countBy(newFindings, "type");
  console.log("WNYHS token/CSS compliance check");
  console.log(`Scanned paths: ${scanRoots.join(", ")}`);
  console.log(
    `Allowlisted token/theme files: ${allowlistedRawValueFiles.join(", ")}; ${allowlistedRawValuePrefixes.join(", ")}`,
  );
  console.log(`Current findings: ${findings.length}`);
  Object.entries(counts).forEach(([type, count]) => {
    console.log(`  ${type}: ${count}`);
  });

  if (newFindings.length === 0) {
    console.log("New actionable findings: 0");
    return;
  }

  console.log(`New actionable findings: ${newFindings.length}`);
  Object.entries(newCounts).forEach(([type, count]) => {
    console.log(`  ${type}: ${count}`);
  });

  const visibleFindings = verbose ? newFindings : newFindings.slice(0, 80);
  for (const finding of visibleFindings) {
    console.log(
      `\n${finding.file}:${finding.line} [${finding.type}] ${finding.value}\n  ${finding.snippet}\n  Hint: ${finding.hint}`,
    );
  }

  if (!verbose && newFindings.length > visibleFindings.length) {
    console.log(
      `\nShowing ${visibleFindings.length} of ${newFindings.length} findings. Re-run with -- --verbose for all findings.`,
    );
  }
}

function readBaseline() {
  if (!fs.existsSync(baselinePath)) {
    console.error(
      `Missing token compliance baseline at ${relative(baselinePath)}. Run npm run check:tokens -- --update-baseline only in a bounded baseline task.`,
    );
    process.exit(1);
  }

  return JSON.parse(fs.readFileSync(baselinePath, "utf8"));
}

function writeBaseline(findings) {
  const baseline = {
    schemaVersion: 1,
    generatedBy: "scripts/checks/check-token-compliance.mjs --update-baseline",
    purpose:
      "VISQA001 baseline of pre-existing WNYHS token/CSS compliance findings. The check fails only findings not present in this baseline.",
    scannedPaths: scanRoots,
    allowlistedRawValueFiles,
    allowlistedRawValuePrefixes,
    findingCount: findings.length,
    findings,
  };

  fs.mkdirSync(path.dirname(baselinePath), { recursive: true });
  fs.writeFileSync(`${baselinePath}\n`.trim(), `${JSON.stringify(baseline, null, 2)}\n`);
}

function isRawValueAllowed(relPath) {
  return (
    allowlistedRawValueFiles.includes(relPath) ||
    allowlistedRawValuePrefixes.some((prefix) => relPath.startsWith(prefix))
  );
}

function isTokenFontValue(value) {
  return (
    value.includes("var(--wnyhs-font-") ||
    value.includes("var(--wny-font-") ||
    value.includes("var(--kaec-font-")
  );
}

function isGovernedVisualClass(className) {
  return (
    className.startsWith("wnyhs-") ||
    className.startsWith("hs-premium-") ||
    className.startsWith("qr-") ||
    className.startsWith("estimate-") ||
    className.startsWith("home-security-") ||
    className === "card" ||
    className === "btn"
  );
}

function countBy(items, property) {
  return items.reduce((counts, item) => {
    counts[item[property]] = (counts[item[property]] ?? 0) + 1;
    return counts;
  }, {});
}

function compareFindings(a, b) {
  return (
    a.file.localeCompare(b.file) ||
    a.line - b.line ||
    a.type.localeCompare(b.type) ||
    a.value.localeCompare(b.value)
  );
}

function relative(filePath) {
  return path.relative(repoRoot, filePath).replaceAll(path.sep, "/");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
