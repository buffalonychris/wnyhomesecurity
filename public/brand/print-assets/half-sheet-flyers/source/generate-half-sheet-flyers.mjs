import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../../../../..');
const contentPath = path.join(__dirname, 'flyer-content.json');
const outputDir = path.join(repoRoot, 'public/brand/print-assets/half-sheet-flyers/generated');

const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
const destinationIntent = 'https://www.wnyhomesecurity.com/qrlanding?src=placard';
const businessIdentityQr = 'QR WNY Home Security Home Page QR.png';
const expectedTitles = [
  'Local Estimate Flyer',
  'Home + Small Business Flyer',
  'No Mandatory Monthly Contracts Flyer',
];

function readPngData(assetPath) {
  const absolutePath = path.join(repoRoot, assetPath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Missing required canonical asset: ${assetPath}`);
  }

  return `data:image/png;base64,${fs.readFileSync(absolutePath).toString('base64')}`;
}

function assertApprovedContent() {
  if (content.destinationIntent !== destinationIntent) {
    throw new Error(`Unexpected destination intent in flyer-content.json: ${content.destinationIntent}`);
  }

  if (content.visualBenchmarkAsset !== 'public/brand/forprint/PoleFlyerMallFlyer.png') {
    throw new Error('PoleFlyerMallFlyer.png must remain the visual benchmark for this flyer system.');
  }

  if (!Array.isArray(content.variants) || content.variants.length !== 3) {
    throw new Error('flyer-content.json must define exactly three flyer variants.');
  }

  for (const [index, variant] of content.variants.entries()) {
    if (variant.title !== expectedTitles[index]) {
      throw new Error(`Unexpected flyer variant at index ${index}: ${variant.title}`);
    }

    if (!variant.qrAsset.includes('QRLANDING')) {
      throw new Error(`Unexpected non-campaign QR asset configured for ${variant.id}.`);
    }

    if (variant.qrAsset.includes(businessIdentityQr)) {
      throw new Error(`Business-card identity QR is not allowed for ${variant.id}.`);
    }

    if (variant.logoAsset !== 'public/brand/forprint/wallpaper screensaver.png') {
      throw new Error(`Unexpected primary crest asset configured for ${variant.id}.`);
    }
  }
}

function drawImageContain(doc, imageData, x, y, maxW, maxH, options = {}) {
  const props = doc.getImageProperties(imageData);
  const imageRatio = props.width / props.height;
  const boxRatio = maxW / maxH;
  const w = imageRatio > boxRatio ? maxW : maxH * imageRatio;
  const h = imageRatio > boxRatio ? maxW / imageRatio : maxH;
  const drawX = x + (maxW - w) / 2;
  const drawY = y + (maxH - h) / 2;
  doc.addImage(imageData, 'PNG', drawX, drawY, w, h, undefined, 'FAST', 0, options);
}

function drawPremiumBackground(doc, yOffset, grayscale) {
  const pageW = 8.5;
  const flyerH = 5.5;
  const base = grayscale ? [18, 18, 18] : [8, 10, 14];
  const panel = grayscale ? [34, 34, 34] : [17, 22, 31];
  const panelTwo = grayscale ? [48, 48, 48] : [24, 24, 25];

  doc.setFillColor(...base);
  doc.rect(0, yOffset, pageW, flyerH, 'F');

  doc.setFillColor(...panel);
  doc.rect(0, yOffset, pageW, 1.18, 'F');

  doc.setFillColor(...panelTwo);
  doc.triangle(5.1, yOffset, pageW, yOffset, pageW, yOffset + flyerH, 'F');

  doc.setFillColor(...(grayscale ? [25, 25, 25] : [12, 15, 20]));
  doc.triangle(0, yOffset + flyerH, 3.25, yOffset + flyerH, 0, yOffset + 2.65, 'F');
}

function drawFlyer(doc, variant, assets, yOffset, grayscale = false) {
  const pageW = 8.5;
  const flyerH = 5.5;
  const safe = 0.26;
  const accent = grayscale ? [198, 198, 198] : [190, 146, 70];
  const accentDark = grayscale ? [93, 93, 93] : [103, 75, 34];
  const text = [248, 248, 246];
  const muted = grayscale ? [214, 214, 214] : [211, 204, 192];
  const soft = grayscale ? [174, 174, 174] : [171, 153, 123];

  drawPremiumBackground(doc, yOffset, grayscale);

  // Premium poster-inspired frame: dark field with restrained gold/gray edges.
  doc.setDrawColor(...accent);
  doc.setLineWidth(0.018);
  doc.roundedRect(safe, yOffset + safe, pageW - safe * 2, flyerH - safe * 2, 0.08, 0.08, 'S');

  doc.setDrawColor(...accentDark);
  doc.setLineWidth(0.006);
  doc.roundedRect(safe + 0.08, yOffset + safe + 0.08, pageW - (safe + 0.08) * 2, flyerH - (safe + 0.08) * 2, 0.06, 0.06, 'S');

  const leftX = 0.48;
  const rightX = 5.86;
  const topY = yOffset + 0.43;
  const textMaxW = 4.95;

  doc.setFillColor(...accent);
  doc.rect(leftX, topY, 0.62, 0.05, 'F');
  doc.setFillColor(...accentDark);
  doc.rect(leftX + 0.68, topY, 1.1, 0.05, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...accent);
  doc.text('WNY HOME SECURITY', leftX, topY + 0.31);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.7);
  doc.setTextColor(...soft);
  doc.text(variant.title.toUpperCase(), leftX, topY + 0.53);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(...text);
  const headlineLines = doc.splitTextToSize(variant.headline, textMaxW);
  doc.text(headlineLines, leftX, yOffset + 1.45, { lineHeightFactor: 0.94 });

  const headlineHeight = headlineLines.length * 0.34;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.8);
  doc.setTextColor(...muted);
  const supportLines = doc.splitTextToSize(variant.support, textMaxW - 0.18);
  doc.text(supportLines, leftX, yOffset + 1.78 + headlineHeight, { lineHeightFactor: 1.16 });

  let bulletY = yOffset + 2.54 + headlineHeight + (supportLines.length - 1) * 0.14;
  const bulletMaxY = yOffset + 4.12;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.7);
  doc.setTextColor(...text);
  for (const bullet of variant.bullets.slice(0, 4)) {
    if (bulletY > bulletMaxY) break;
    doc.setFillColor(...accent);
    doc.circle(leftX + 0.05, bulletY - 0.035, 0.034, 'F');
    doc.text(bullet, leftX + 0.17, bulletY);
    bulletY += 0.3;
  }

  const ctaY = yOffset + 4.5;
  doc.setFillColor(...(grayscale ? [238, 238, 238] : [238, 229, 207]));
  doc.roundedRect(leftX, ctaY - 0.28, 4.75, 0.48, 0.055, 0.055, 'F');
  doc.setFillColor(...accentDark);
  doc.rect(leftX, ctaY - 0.28, 0.08, 0.48, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11.2);
  doc.setTextColor(...(grayscale ? [21, 21, 21] : [39, 29, 17]));
  doc.text(variant.cta, leftX + 0.22, ctaY + 0.03);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.7);
  doc.setTextColor(...text);
  doc.text(variant.phone, leftX, yOffset + 5.04);
  doc.setTextColor(...accent);
  doc.text(variant.url, leftX, yOffset + 5.25);

  // Crest is intentionally prominent and contained; proportions are preserved.
  doc.setFillColor(...(grayscale ? [231, 231, 231] : [245, 240, 230]));
  doc.roundedRect(rightX - 0.12, yOffset + 0.48, 1.92, 1.62, 0.08, 0.08, 'F');
  doc.setDrawColor(...accent);
  doc.setLineWidth(0.012);
  doc.roundedRect(rightX - 0.12, yOffset + 0.48, 1.92, 1.62, 0.08, 0.08, 'S');
  drawImageContain(doc, assets.logo, rightX + 0.03, yOffset + 0.57, 1.62, 1.42);

  const qrSize = 1.55;
  const qrFramePad = 0.14;
  const qrX = rightX + 0.07;
  const qrY = yOffset + 2.46;

  doc.setFillColor(...(grayscale ? [64, 64, 64] : [34, 28, 21]));
  doc.roundedRect(qrX - 0.26, qrY - 0.45, qrSize + 0.52, qrSize + 1.22, 0.08, 0.08, 'F');
  doc.setDrawColor(...accent);
  doc.setLineWidth(0.012);
  doc.roundedRect(qrX - 0.26, qrY - 0.45, qrSize + 0.52, qrSize + 1.22, 0.08, 0.08, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...accent);
  doc.text('SCAN TO START', qrX + qrSize / 2, qrY - 0.17, { align: 'center' });

  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(0.01);
  doc.rect(qrX - qrFramePad, qrY - qrFramePad, qrSize + qrFramePad * 2, qrSize + qrFramePad * 2, 'FD');
  doc.addImage(assets.qr, 'PNG', qrX, qrY, qrSize, qrSize);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.7);
  doc.setTextColor(...muted);
  const intentLines = doc.splitTextToSize('Opens the campaign landing page.', 1.7);
  doc.text(intentLines, qrX + qrSize / 2, qrY + qrSize + 0.34, { align: 'center', lineHeightFactor: 1.12 });

  doc.setDrawColor(...accentDark);
  doc.setLineWidth(0.01);
  doc.line(rightX - 0.32, yOffset + 0.44, rightX - 0.32, yOffset + 5.08);
}

function makeTwoUpPdf(variant, grayscale = false) {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'in', format: 'letter' });
  const assets = {
    logo: readPngData(variant.logoAsset),
    qr: readPngData(variant.qrAsset),
    visualBenchmark: readPngData(content.visualBenchmarkAsset),
  };

  drawFlyer(doc, variant, assets, 0, grayscale);
  drawFlyer(doc, variant, assets, 5.5, grayscale);

  doc.setDrawColor(155, 155, 155);
  doc.setLineWidth(0.006);
  doc.setLineDashPattern([0.08, 0.06], 0);
  doc.line(0.35, 5.5, 8.15, 5.5);
  doc.setLineDashPattern([], 0);

  const outputFile = grayscale ? variant.outputGrayscaleFilename : variant.outputColorFilename;
  doc.save(path.join(outputDir, outputFile));
  return outputFile;
}

assertApprovedContent();
fs.mkdirSync(outputDir, { recursive: true });

const generated = [];
for (const variant of content.variants) {
  generated.push(makeTwoUpPdf(variant, false));
  generated.push(makeTwoUpPdf(variant, true));
}

console.log(`Generated ${generated.length} half-sheet flyer PDFs in ${path.relative(repoRoot, outputDir)}`);
for (const file of generated) {
  console.log(`- ${file}`);
}
