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

  if (!Array.isArray(content.variants) || content.variants.length !== 3) {
    throw new Error('flyer-content.json must define exactly three flyer variants.');
  }

  for (const variant of content.variants) {
    if (!variant.qrAsset.includes('QRLANDING')) {
      throw new Error(`Unexpected non-campaign QR asset configured for ${variant.id}.`);
    }
  }
}

function drawFlyer(doc, variant, assets, yOffset, grayscale = false) {
  const pageW = 8.5;
  const flyerH = 5.5;
  const outerMargin = 0.22;
  const cardX = outerMargin;
  const cardY = yOffset + outerMargin;
  const cardW = pageW - outerMargin * 2;
  const cardH = flyerH - outerMargin * 2;
  const accent = grayscale ? [44, 44, 44] : [138, 102, 48];
  const dark = grayscale ? [24, 24, 24] : [14, 20, 30];
  const muted = [80, 80, 80];

  doc.setFillColor(...(grayscale ? [244, 244, 244] : [14, 20, 30]));
  doc.rect(0, yOffset, pageW, flyerH, 'F');

  doc.setFillColor(255, 255, 255);
  doc.roundedRect(cardX, cardY, cardW, cardH, 0.08, 0.08, 'F');

  doc.setFillColor(...accent);
  doc.rect(cardX, cardY, cardW, 0.07, 'F');

  doc.addImage(assets.logo, 'PNG', cardX + 0.22, cardY + 0.18, 1.0, 0.63);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(...accent);
  doc.text('WNY HOME SECURITY', cardX + 1.36, cardY + 0.42);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...muted);
  doc.text(variant.title, cardX + 1.36, cardY + 0.63);

  const leftX = cardX + 0.3;
  const rightPanelX = cardX + cardW - 2.05;
  const textMaxW = rightPanelX - leftX - 0.28;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(...dark);
  const headlineLines = doc.splitTextToSize(variant.headline, textMaxW);
  doc.text(headlineLines, leftX, cardY + 1.25, { lineHeightFactor: 1.02 });

  const headlineHeight = headlineLines.length * 0.3;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.8);
  doc.setTextColor(45, 45, 45);
  const supportLines = doc.splitTextToSize(variant.support, textMaxW);
  doc.text(supportLines, leftX, cardY + 1.48 + headlineHeight, { lineHeightFactor: 1.16 });

  let bulletY = cardY + 2.25 + headlineHeight + (supportLines.length - 1) * 0.16;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.9);
  doc.setTextColor(...dark);
  for (const bullet of variant.bullets) {
    doc.setFillColor(...accent);
    doc.circle(leftX + 0.04, bulletY - 0.035, 0.035, 'F');
    doc.text(bullet, leftX + 0.16, bulletY);
    bulletY += 0.28;
  }

  const ctaY = Math.min(cardY + cardH - 0.88, bulletY + 0.12);
  doc.setFillColor(...(grayscale ? [235, 235, 235] : [248, 244, 236]));
  doc.roundedRect(leftX, ctaY - 0.22, textMaxW, 0.42, 0.04, 0.04, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.8);
  doc.setTextColor(...accent);
  doc.text(variant.cta, leftX + 0.16, ctaY + 0.04);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.2);
  doc.setTextColor(30, 30, 30);
  doc.text(variant.phone, leftX, cardY + cardH - 0.43);
  doc.text(variant.url, leftX, cardY + cardH - 0.2);

  const qrSize = 1.55;
  const qrX = cardX + cardW - qrSize - 0.34;
  const qrY = cardY + 1.55;
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(70, 70, 70);
  doc.setLineWidth(0.01);
  doc.rect(qrX - 0.12, qrY - 0.12, qrSize + 0.24, qrSize + 0.24, 'FD');
  doc.addImage(assets.qr, 'PNG', qrX, qrY, qrSize, qrSize);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.setTextColor(...dark);
  doc.text('Scan to start', qrX + qrSize / 2, qrY + qrSize + 0.28, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.7);
  doc.setTextColor(...muted);
  const intentLines = doc.splitTextToSize('QR opens the campaign landing page.', 1.72);
  doc.text(intentLines, qrX + qrSize / 2, qrY + qrSize + 0.48, { align: 'center', lineHeightFactor: 1.12 });
}

function makeTwoUpPdf(variant, grayscale = false) {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'in', format: 'letter' });
  const assets = {
    logo: readPngData(variant.logoAsset),
    qr: readPngData(variant.qrAsset),
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
