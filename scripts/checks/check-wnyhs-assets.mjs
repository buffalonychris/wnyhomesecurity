import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, '..', '..');
const assetRoot = join(repoRoot, 'assets', 'wnyhs');
const manifestPath = join(assetRoot, 'manifest.json');
const previewPath = join(assetRoot, 'validation', 'asset-preview.html');
const dashboardPath = join(repoRoot, 'prototypes', 'dashboard', 'peckham', 'Peckham_Dashboard_Review.html');
const errors = [];

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function fail(message) { errors.push(message); }
function posix(path) { return path.split(sep).join('/'); }

let manifest;
try {
  manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
} catch (error) {
  console.error(`FAIL: cannot parse ${relative(repoRoot, manifestPath)}: ${error.message}`);
  process.exit(1);
}

const allowedTopFolders = new Set(['core', 'digital', 'website', 'documents', 'social', 'merch', 'validation']);
const allowedIconFolders = new Set(['navigation', 'capability', 'status', 'utility']);
const manifestFiles = new Set();
const manifestIds = new Set();
const semanticPurposes = new Map();

for (const asset of manifest.assets ?? []) {
  const required = ['id', 'file', 'assetClass', 'channelProfile', 'semanticPurpose', 'masterFormat', 'dimensions', 'stroke', 'background', 'transparency', 'colorMode', 'themeMode', 'revision', 'approvalState', 'derivatives', 'exports', 'notes'];
  for (const field of required) if (!(field in asset)) fail(`${asset.id ?? '(missing id)'}: missing manifest field ${field}`);
  if (manifestIds.has(asset.id)) fail(`duplicate manifest id: ${asset.id}`);
  manifestIds.add(asset.id);
  if (manifestFiles.has(asset.file)) fail(`duplicate manifest file: ${asset.file}`);
  manifestFiles.add(asset.file);
  const purposes = semanticPurposes.get(asset.semanticPurpose) ?? [];
  purposes.push(asset.id);
  semanticPurposes.set(asset.semanticPurpose, purposes);

  const segments = asset.file.split('/');
  if (!allowedTopFolders.has(segments[0])) fail(`${asset.id}: disallowed top-level folder ${segments[0]}`);
  if (segments[0] === 'digital' && segments[1] === 'icons' && !allowedIconFolders.has(segments[2])) fail(`${asset.id}: disallowed icon category ${segments[2]}`);
  if (asset.file.includes('..') || asset.file.startsWith('/')) fail(`${asset.id}: unsafe manifest path`);
  const absolute = join(assetRoot, ...segments);
  try { statSync(absolute); } catch { fail(`${asset.id}: manifest file does not exist: ${asset.file}`); continue; }
  if (extname(asset.file) !== '.svg') fail(`${asset.id}: initial canonical asset must be SVG`);
}

for (const [purpose, ids] of semanticPurposes) {
  if (ids.length > 1) fail(`duplicate semantic purpose "${purpose}": ${ids.join(', ')}`);
}

const svgFiles = walk(assetRoot).filter((path) => extname(path) === '.svg');
for (const svgPath of svgFiles) {
  const file = posix(relative(assetRoot, svgPath));
  const name = file.split('/').at(-1);
  if (!manifestFiles.has(file)) fail(`canonical SVG missing from manifest: ${file}`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*\.svg$/.test(name)) fail(`${file}: filename must be lowercase kebab-case`);
  if (/(?:^|-)(?:final|new|v2|dark|light|gold|white|\d+px)(?:-|\.)/.test(name)) fail(`${file}: prohibited state/theme/color/size filename variant`);

  const svg = readFileSync(svgPath, 'utf8');
  const isLargeAsset = file.startsWith('digital/placeholders/') || file.startsWith('digital/illustrations/');
  const expected = isLargeAsset
    ? { viewBox: '0 0 64 64', size: '64', stroke: '2.5' }
    : { viewBox: '0 0 24 24', size: '24', stroke: '1.8' };
  const rootTag = svg.match(/<svg\b[^>]*>/)?.[0] ?? '';
  for (const [attribute, value] of [['viewBox', expected.viewBox], ['width', expected.size], ['height', expected.size], ['fill', 'none'], ['stroke', 'currentColor'], ['stroke-width', expected.stroke], ['stroke-linecap', 'round'], ['stroke-linejoin', 'round']]) {
    const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (!new RegExp(`${attribute}="${escaped}"`).test(rootTag)) fail(`${file}: root ${attribute} must be "${value}"`);
  }
  if (/#[0-9a-f]{3,8}\b|\b(?:rgb|hsl)a?\s*\(/i.test(svg)) fail(`${file}: hardcoded color detected`);
  if (/<(?:text|tspan|script|image|style|linearGradient|radialGradient|filter|animate|set)\b/i.test(svg)) fail(`${file}: prohibited SVG element detected`);
  if (/\son[a-z]+\s*=/i.test(svg)) fail(`${file}: event handler detected`);
  const withoutNamespace = svg.replace(/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/, '');
  if (/\b(?:href|src)\s*=|https?:\/\/|data:|base64|url\s*\(/i.test(withoutNamespace)) fail(`${file}: external or embedded resource detected`);
  if (new RegExp(`<rect\\b[^>]*(?:x="0"[^>]*y="0"|y="0"[^>]*x="0")[^>]*(?:width="${expected.size}"[^>]*height="${expected.size}"|height="${expected.size}"[^>]*width="${expected.size}")`, 'i').test(svg)) fail(`${file}: background canvas rectangle detected`);
}

for (const file of manifestFiles) {
  if (!svgFiles.some((path) => posix(relative(assetRoot, path)) === file)) fail(`manifest entry is not a discovered canonical SVG: ${file}`);
}

const preview = readFileSync(previewPath, 'utf8');
for (const id of manifestIds) if (!preview.includes(`"id":"${id}"`)) fail(`preview is missing asset id: ${id}`);

const dashboard = readFileSync(dashboardPath, 'utf8');
for (const match of dashboard.matchAll(/<svg\b[^>]*data-asset-id="([^"]+)"[^>]*>([\s\S]*?)<\/svg>/g)) {
  const [, id, inlineGeometry] = match;
  if (!manifestIds.has(id)) {
    fail(`Peckham references unknown asset id: ${id}`);
    continue;
  }
  const asset = manifest.assets.find((entry) => entry.id === id);
  const canonical = readFileSync(join(assetRoot, ...asset.file.split('/')), 'utf8');
  const canonicalGeometry = canonical.match(/<svg\b[^>]*>([\s\S]*?)<\/svg>/)?.[1] ?? '';
  const normalize = (value) => value.replace(/\s+/g, ' ').replace(/> </g, '><').trim();
  if (normalize(inlineGeometry) !== normalize(canonicalGeometry)) fail(`Peckham inline geometry differs from canonical source: ${id}`);
}
for (const requiredConsumer of ['navigation-home', 'utility-device-preview', 'utility-theme', 'utility-layout-size', 'utility-user', 'capability-building-status', 'placeholder-media-unavailable', 'placeholder-weather-unavailable', 'illustration-property-status-hero', 'illustration-main-entrance-assembly', 'illustration-window-coverage']) {
  if (!dashboard.includes(`data-asset-id="${requiredConsumer}"`)) fail(`Peckham is missing required canonical consumer asset: ${requiredConsumer}`);
}
const devicePosition = dashboard.indexOf('<span class="utility-label">DEVICE</span>');
const themePosition = dashboard.indexOf('<span class="utility-label">THEME</span>');
const sizePosition = dashboard.indexOf('<span class="utility-label">SIZE</span>');
const userPosition = dashboard.indexOf('<span class="utility-label">USER</span>');
if (!(devicePosition >= 0 && devicePosition < themePosition && themePosition < sizePosition && sizePosition < userPosition)) fail('Peckham header utility order must be DEVICE | THEME | SIZE | USER');
for (const deviceOption of ['Desktop', 'Tablet', 'Phone']) {
  if (!dashboard.includes(deviceOption)) fail(`Peckham is missing review device option: ${deviceOption}`);
}
if (/class="sidebar"/.test(dashboard)) fail('Peckham must not retain a desktop sidebar shell');
for (const settingsLabel of ['<legend>Font</legend>', '<legend>Review Scenario</legend>', '<h2>Component State Review</h2>']) {
  if (!dashboard.includes(settingsLabel)) fail(`Peckham Settings is missing required review-only control: ${settingsLabel.replace(/<[^>]+>/g, '')}`);
}
if (/\b(?:fetch|XMLHttpRequest|WebSocket|EventSource)\s*\(|https?:\/\//.test(dashboard)) fail('Peckham contains a network-capable reference');
for (const [index, match] of [...dashboard.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].entries()) {
  try { new Script(match[1], { filename: `Peckham-inline-${index + 1}.js` }); }
  catch (error) { fail(`Peckham inline script ${index + 1} has invalid syntax: ${error.message}`); }
}

if (errors.length) {
  console.error(`WNYHS asset validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`PASS: ${manifest.assets.length} manifest entries and ${svgFiles.length} canonical SVGs validated.`);
console.log('PASS: naming, folder, SVG grammar, transparency, color, prohibited-content, preview, and Peckham reference checks passed.');
console.log('MANUAL: safe-area optical inspection remains required in assets/wnyhs/validation/asset-preview.html.');
