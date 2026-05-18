import { jsPDF } from 'jspdf';
import fs from 'fs';

const crestPath = 'public/brand/forprint/wallpaper screensaver.png';
const qrPath = 'public/brand/forprint/QR QRLANDING  Home Page QR.png';

const crest = fs.readFileSync(crestPath).toString('base64');
const qr = fs.readFileSync(qrPath).toString('base64');
const crestData = `data:image/png;base64,${crest}`;
const qrData = `data:image/png;base64,${qr}`;

const headline = 'Practical Protection for WNY Homes & Businesses';
const support = 'Smart cameras, alarms, and automation designed around real properties.';
const bullets = [
  'Local installation',
  'Cameras, alarms & smart automation',
  'No mandatory monthly contracts',
];
const cta = 'Scan for a Local Security Estimate';

function drawPlacard(doc, y, h, gray=false){
  const pageW = 8.5; const safe=0.25;
  doc.setFillColor(gray?245:14,gray?245:20,gray?245:30);
  doc.rect(0,y,pageW,h,'F');

  const px = safe+0.12; const py = y+safe+0.08;
  const pw = pageW - 2*(safe+0.12); const ph = h - 2*(safe+0.08);
  doc.setFillColor(255,255,255);
  doc.roundedRect(px,py,pw,ph,0.08,0.08,'F');

  doc.addImage(crestData,'PNG',px+0.18,py+0.12,1.25,0.78);
  doc.setTextColor(20,20,20);
  doc.setFont('helvetica','bold'); doc.setFontSize(22);
  const headLines = doc.splitTextToSize(headline,4.8);
  doc.text(headLines,px+0.2,py+1.25);

  doc.setFont('helvetica','normal'); doc.setFontSize(12);
  doc.text(doc.splitTextToSize(support,4.8),px+0.2,py+2.0);

  doc.setFont('helvetica','bold'); doc.setFontSize(12);
  let by=py+2.55;
  bullets.forEach(b=>{doc.text(`• ${b}`,px+0.2,by); by+=0.3;});

  doc.setTextColor(gray?30:130,gray?30:100,gray?30:45);
  doc.text(cta,px+0.2,by+0.15);
  doc.setTextColor(30,30,30); doc.setFont('helvetica','normal'); doc.setFontSize(11);
  doc.text('Call or text: (716) 547-1378',px+0.2,by+0.52);
  doc.text('wnyhomesecurity.com',px+0.2,by+0.8);

  const q = h>6?1.9:1.6;
  const qx = px+pw-q-0.35; const qy = py+(ph-q)/2;
  doc.setFillColor(255,255,255); doc.setDrawColor(60,60,60); doc.setLineWidth(0.02);
  doc.rect(qx-0.12,qy-0.12,q+0.24,q+0.24,'FD');
  doc.addImage(qrData,'PNG',qx,qy,q,q);
}

const outputDir = 'public/brand/print-assets/qr-placards/generated';
fs.mkdirSync(outputDir, { recursive: true });

function make(file,twoUp,gray){
  const doc = new jsPDF({orientation:'portrait',unit:'in',format:'letter'});
  if(twoUp){
    drawPlacard(doc,0,5.5,gray);
    drawPlacard(doc,5.5,5.5,gray);
    doc.setDrawColor(160,160,160); doc.setLineWidth(0.01); doc.line(0.5,5.5,8.0,5.5);
  } else {
    drawPlacard(doc,0,11,gray);
  }
  doc.save(file);
}

make(`${outputDir}/wnyhs-qr-placard-half-page-two-up-color.pdf`,true,false);
make(`${outputDir}/wnyhs-qr-placard-full-page-color.pdf`,false,false);
make(`${outputDir}/wnyhs-qr-placard-half-page-two-up-grayscale.pdf`,true,true);
make(`${outputDir}/wnyhs-qr-placard-full-page-grayscale.pdf`,false,true);

console.log(`Generated print PDFs in ${outputDir}`);
