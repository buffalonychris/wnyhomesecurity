import { jsPDF } from 'jspdf';
import fs from 'fs';

const visualBenchmarkPath = 'public/brand/forprint/PoleFlyerMallFlyer.png';
const crestPath = 'public/brand/forprint/wallpaper screensaver.png';
const qrPath = 'public/brand/forprint/QR QRLANDING  Home Page QR.png';

// PRINT-ASSET002B: PoleFlyerMallFlyer.png is the operator-approved visual benchmark.
// The benchmark itself is validated as present, while the placards remain source-generated
// scan-first layouts using the primary crest and QR Landing / Campaign QR below.
for (const assetPath of [visualBenchmarkPath, crestPath, qrPath]) {
  if (!fs.existsSync(assetPath)) {
    throw new Error(`Missing required QR placard asset: ${assetPath}`);
  }
}

const crest = fs.readFileSync(crestPath).toString('base64');
const qr = fs.readFileSync(qrPath).toString('base64');
const crestData = `data:image/png;base64,${crest}`;
const qrData = `data:image/png;base64,${qr}`;

const headline = 'Practical Protection for WNY Homes & Businesses';
const cta = 'SCAN FOR LOCAL ESTIMATE';
const bullets = [
  'Smart cameras',
  'Alarm system options',
  'Local installation',
];
const phone = 'Call or text: (716) 547-1378';
const url = 'wnyhomesecurity.com';

const palette = {
  color: {
    black: [7, 9, 12],
    charcoal: [15, 18, 23],
    panel: [24, 27, 32],
    panel2: [31, 34, 39],
    gold: [186, 143, 55],
    goldDark: [124, 91, 34],
    white: [246, 242, 232],
    muted: [196, 192, 180],
    qrWhite: [255, 255, 255],
    qrInk: [20, 20, 20],
  },
  gray: {
    black: [10, 10, 10],
    charcoal: [24, 24, 24],
    panel: [38, 38, 38],
    panel2: [50, 50, 50],
    gold: [190, 190, 190],
    goldDark: [120, 120, 120],
    white: [245, 245, 245],
    muted: [205, 205, 205],
    qrWhite: [255, 255, 255],
    qrInk: [20, 20, 20],
  },
};

function fill(doc, rgb) { doc.setFillColor(...rgb); }
function stroke(doc, rgb) { doc.setDrawColor(...rgb); }
function text(doc, rgb) { doc.setTextColor(...rgb); }

function drawRule(doc, x, y, w, colors) {
  stroke(doc, colors.gold);
  doc.setLineWidth(0.025);
  doc.line(x, y, x + w, y);
  stroke(doc, colors.goldDark);
  doc.setLineWidth(0.006);
  doc.line(x, y + 0.055, x + w, y + 0.055);
}

function drawBackground(doc, y, h, colors) {
  const pageW = 8.5;
  fill(doc, colors.black);
  doc.rect(0, y, pageW, h, 'F');

  // Subtle premium paneling inspired by the dark pole/mall flyer benchmark.
  fill(doc, colors.charcoal);
  doc.roundedRect(0.22, y + 0.22, pageW - 0.44, h - 0.44, 0.09, 0.09, 'F');
  fill(doc, colors.panel);
  doc.roundedRect(0.38, y + 0.38, pageW - 0.76, h - 0.76, 0.07, 0.07, 'F');

  fill(doc, colors.panel2);
  doc.triangle(0.38, y + 0.38, 3.0, y + 0.38, 0.38, y + Math.min(h - 0.38, 2.2), 'F');
  doc.triangle(pageW - 0.38, y + h - 0.38, pageW - 2.85, y + h - 0.38, pageW - 0.38, y + Math.max(y + 0.38, y + h - 2.15), 'F');

  stroke(doc, colors.goldDark);
  doc.setLineWidth(0.012);
  doc.roundedRect(0.38, y + 0.38, pageW - 0.76, h - 0.76, 0.07, 0.07, 'S');
}

function drawCrestAnchor(doc, x, y, w, colors) {
  const crestH = w * (1312 / 1199);
  fill(doc, colors.black);
  stroke(doc, colors.goldDark);
  doc.setLineWidth(0.012);
  doc.roundedRect(x - 0.11, y - 0.09, w + 0.22, crestH + 0.18, 0.08, 0.08, 'FD');
  doc.addImage(crestData, 'PNG', x, y, w, crestH);
  return crestH;
}

function drawQrModule(doc, x, y, q, colors) {
  const platePad = 0.18;
  const quietPad = 0.12;

  fill(doc, colors.black);
  stroke(doc, colors.gold);
  doc.setLineWidth(0.018);
  doc.roundedRect(x - platePad, y - platePad - 0.34, q + platePad * 2, q + platePad * 2 + 0.58, 0.08, 0.08, 'FD');

  fill(doc, colors.gold);
  doc.rect(x - platePad, y - platePad - 0.34, q + platePad * 2, 0.34, 'F');
  text(doc, colors.black);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(q > 2 ? 16 : 10.5);
  doc.text(cta, x + q / 2, y - 0.09, { align: 'center' });

  fill(doc, colors.qrWhite);
  stroke(doc, colors.goldDark);
  doc.setLineWidth(0.012);
  doc.rect(x - quietPad, y - quietPad, q + quietPad * 2, q + quietPad * 2, 'FD');
  doc.addImage(qrData, 'PNG', x, y, q, q);
}

function drawContact(doc, x, y, colors, align = 'left', size = 10.5) {
  text(doc, colors.white);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(size);
  doc.text(phone, x, y, { align });
  text(doc, colors.muted);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(size - 0.5);
  doc.text(url, x, y + 0.25, { align });
}

function drawBullets(doc, x, y, colors, columns = false) {
  text(doc, colors.white);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(columns ? 13 : 10.5);

  bullets.forEach((bullet, index) => {
    const bx = columns ? x + index * 2.1 : x;
    const by = columns ? y : y + index * 0.28;
    fill(doc, colors.gold);
    doc.circle(bx, by - 0.035, 0.035, 'F');
    text(doc, colors.white);
    doc.text(bullet, bx + 0.12, by);
  });
}

function drawHalfPlacard(doc, y, colors) {
  const h = 5.5;
  drawBackground(doc, y, h, colors);

  const innerX = 0.62;
  const innerW = 7.26;
  const top = y + 0.58;
  const crestW = 1.02;
  drawCrestAnchor(doc, innerX, top, crestW, colors);

  drawRule(doc, innerX + 1.34, y + 0.86, innerW - 1.34, colors);
  text(doc, colors.white);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  const headlineLines = doc.splitTextToSize(headline, 4.85);
  doc.text(headlineLines, innerX + 1.35, y + 1.31, { lineHeightFactor: 0.92 });

  text(doc, colors.gold);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13.5);
  doc.text(cta, innerX + 1.35, y + 2.37);

  drawBullets(doc, innerX + 1.36, y + 2.88, colors);
  drawContact(doc, innerX + 1.35, y + 4.15, colors, 'left', 10.5);

  drawQrModule(doc, 5.98, y + 2.03, 1.48, colors);
}

function drawFullPlacard(doc, y, colors) {
  const h = 11;
  drawBackground(doc, y, h, colors);

  const centerX = 4.25;
  const crestW = 1.58;
  const crestX = centerX - crestW / 2;
  drawCrestAnchor(doc, crestX, y + 0.72, crestW, colors);

  drawRule(doc, 1.0, y + 2.66, 6.5, colors);
  text(doc, colors.white);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(35);
  const headlineLines = doc.splitTextToSize(headline, 6.6);
  doc.text(headlineLines, centerX, y + 3.34, { align: 'center', lineHeightFactor: 0.92 });

  text(doc, colors.gold);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text(cta, centerX, y + 4.68, { align: 'center' });

  drawQrModule(doc, centerX - 1.42, y + 5.34, 2.84, colors);
  drawContact(doc, centerX, y + 8.92, colors, 'center', 15);
  drawBullets(doc, 1.2, y + 10.08, colors, true);
}

function drawPlacard(doc, y, h, gray = false) {
  const colors = gray ? palette.gray : palette.color;
  if (h > 6) {
    drawFullPlacard(doc, y, colors);
  } else {
    drawHalfPlacard(doc, y, colors);
  }
}

const outputDir = 'public/brand/print-assets/qr-placards/generated';
fs.mkdirSync(outputDir, { recursive: true });

function make(file, twoUp, gray) {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'in', format: 'letter' });
  if (twoUp) {
    drawPlacard(doc, 0, 5.5, gray);
    drawPlacard(doc, 5.5, 5.5, gray);
    stroke(doc, gray ? palette.gray.gold : palette.color.goldDark);
    doc.setLineWidth(0.01);
    doc.line(0.5, 5.5, 8.0, 5.5);
  } else {
    drawPlacard(doc, 0, 11, gray);
  }
  doc.save(file);
}

make(`${outputDir}/wnyhs-qr-placard-half-page-two-up-color.pdf`, true, false);
make(`${outputDir}/wnyhs-qr-placard-full-page-color.pdf`, false, false);
make(`${outputDir}/wnyhs-qr-placard-half-page-two-up-grayscale.pdf`, true, true);
make(`${outputDir}/wnyhs-qr-placard-full-page-grayscale.pdf`, false, true);

console.log(`Generated print PDFs in ${outputDir}`);
