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
  const panel = grayscale ? [30, 30, 30] : [15, 19, 27];
  const panelTwo = grayscale ? [39, 39, 39] : [18, 19, 22];

  doc.setFillColor(...base);
  doc.rect(0, yOffset, pageW, flyerH, 'F');

  doc.setFillColor(...panel);
  doc.rect(0, yOffset, pageW, 1.05, 'F');

  doc.setFillColor(...panelTwo);
  doc.triangle(5.45, yOffset, pageW, yOffset, pageW, yOffset + flyerH, 'F');

  doc.setFillColor(...(grayscale ? [23, 23, 23] : [11, 14, 19]));
  doc.triangle(0, yOffset + flyerH, 2.85, yOffset + flyerH, 0, yOffset + 3.05, 'F');
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
  const textMaxW = 4.9;

  doc.setFillColor(...accent);
  doc.rect(leftX, topY, 0.62, 0.05, 'F');
  doc.setFillColor(...accentDark);
  doc.rect(leftX + 0.68, topY, 1.1, 0.05, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...accent);
  doc.text('WNY HOME SECURITY', leftX, topY + 0.31);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.9);
  doc.setTextColor(...soft);
  doc.text(variant.title.toUpperCase(), leftX, topY + 0.5);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(25);
  doc.setTextColor(...text);
  const headlineLines = doc.splitTextToSize(variant.headline, textMaxW);
  doc.text(headlineLines, leftX, yOffset + 1.45, { lineHeightFactor: 0.94 });

  const headlineHeight = headlineLines.length * 0.35;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.4);
  doc.setTextColor(...muted);
  const supportLines = doc.splitTextToSize(variant.support, textMaxW - 0.18);
  doc.text(supportLines, leftX, yOffset + 1.78 + headlineHeight, { lineHeightFactor: 1.16 });

  let bulletY = yOffset + 2.5 + headlineHeight + (supportLines.length - 1) * 0.14;
  const bulletMaxY = yOffset + 4.03;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...text);
  for (const bullet of variant.bullets.slice(0, 4)) {
    if (bulletY > bulletMaxY) break;
    doc.setFillColor(...accent);
    doc.circle(leftX + 0.05, bulletY - 0.035, 0.034, 'F');
    doc.text(bullet, leftX + 0.17, bulletY);
    bulletY += 0.3;
  }

  const ctaY = yOffset + 4.38;
  doc.setFillColor(...(grayscale ? [226, 226, 226] : [224, 208, 171]));
  doc.roundedRect(leftX, ctaY - 0.24, 4.55, 0.42, 0.05, 0.05, 'F');
  doc.setFillColor(...accentDark);
  doc.rect(leftX, ctaY - 0.24, 0.06, 0.42, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.7);
  doc.setTextColor(...(grayscale ? [21, 21, 21] : [34, 25, 16]));
  doc.text(variant.cta, leftX + 0.19, ctaY + 0.02);

  const footerY = yOffset + 4.92;
  doc.setDrawColor(...accentDark);
  doc.setLineWidth(0.006);
  doc.line(leftX, footerY - 0.18, leftX + 4.55, footerY - 0.18);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.8);
  doc.setTextColor(...text);
  doc.text(variant.phone, leftX, footerY);
  doc.setFontSize(9.3);
  doc.setTextColor(...accent);
  doc.text(variant.url, leftX, footerY + 0.22);

  // Crest uses a restrained dark inset so the primary asset feels integrated, not pasted on.
  doc.setFillColor(...(grayscale ? [32, 32, 32] : [14, 17, 22]));
  doc.roundedRect(rightX - 0.1, yOffset + 0.46, 1.92, 1.7, 0.1, 0.1, 'F');
  doc.setDrawColor(...accent);
  doc.setLineWidth(0.009);
  doc.roundedRect(rightX - 0.07, yOffset + 0.49, 1.86, 1.64, 0.085, 0.085, 'S');
  doc.setDrawColor(...accentDark);
  doc.setLineWidth(0.005);
  doc.roundedRect(rightX + 0.01, yOffset + 0.57, 1.7, 1.48, 0.065, 0.065, 'S');
  drawImageContain(doc, assets.logo, rightX + 0.13, yOffset + 0.64, 1.46, 1.34);

  const qrSize = 1.5;
  const qrFramePad = 0.16;
  const qrX = rightX + 0.1;
  const qrY = yOffset + 2.62;

  doc.setFillColor(...(grayscale ? [42, 42, 42] : [24, 21, 18]));
  doc.roundedRect(qrX - 0.28, qrY - 0.5, qrSize + 0.56, qrSize + 1.02, 0.09, 0.09, 'F');
  doc.setDrawColor(...accentDark);
  doc.setLineWidth(0.006);
  doc.roundedRect(qrX - 0.22, qrY - 0.44, qrSize + 0.44, qrSize + 0.9, 0.07, 0.07, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.9);
  doc.setTextColor(...accent);
  doc.text('SCAN FOR LOCAL ESTIMATE', qrX + qrSize / 2, qrY - 0.19, { align: 'center' });

  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(...(grayscale ? [245, 245, 245] : [248, 246, 239]));
  doc.setLineWidth(0.018);
  doc.roundedRect(qrX - qrFramePad, qrY - qrFramePad, qrSize + qrFramePad * 2, qrSize + qrFramePad * 2, 0.035, 0.035, 'FD');
  doc.addImage(assets.qr, 'PNG', qrX, qrY, qrSize, qrSize);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.4);
  doc.setTextColor(...muted);
  doc.text('Quick fit check online', qrX + qrSize / 2, qrY + qrSize + 0.28, { align: 'center' });

  doc.setDrawColor(...accentDark);
  doc.setLineWidth(0.01);
  doc.line(rightX - 0.36, yOffset + 0.52, rightX - 0.36, yOffset + 4.92);
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
