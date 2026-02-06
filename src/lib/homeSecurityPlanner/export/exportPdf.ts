import { jsPDF } from 'jspdf';
import type { CoverageNotes, DeviceSummary } from './exportNotes';

export type PlannerExportNotes = {
  deviceSummary: DeviceSummary;
  coverageNotes: CoverageNotes;
};

export type PdfExportPayload = {
  image: string;
  notes: PlannerExportNotes;
  exportedAt?: Date;
};

const loadImageDimensions = (src: string) => {
  return new Promise<{ width: number; height: number }>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = (error) => reject(error);
    img.src = src;
  });
};

const formatCameraBreakdown = (summary: DeviceSummary) => {
  const { byClass } = summary.cameras;
  return `Doorbell ${byClass.doorbell}, Indoor ${byClass.indoor_wifi}, Outdoor ${byClass.outdoor_poe}`;
};

const buildNotesLines = (notes: PlannerExportNotes) => {
  const lines: string[] = [];
  lines.push('Device summary');
  lines.push(`Cameras: ${notes.deviceSummary.cameras.total} (${formatCameraBreakdown(notes.deviceSummary)})`);
  lines.push(`Motion sensors: ${notes.deviceSummary.motion}`);
  lines.push(`Entry sensors: ${notes.deviceSummary.entry}`);
  lines.push('');
  lines.push('Coverage notes');
  notes.coverageNotes.rollups.forEach((line) => lines.push(line));
  if (notes.coverageNotes.exceptions.length > 0) {
    lines.push('Exterior door exceptions');
    notes.coverageNotes.exceptions.forEach((line) => lines.push(line));
  }
  lines.push('');
  lines.push('Planning view based on current device placement.');
  return lines;
};

const renderNotes = (
  doc: jsPDF,
  lines: string[],
  startX: number,
  startY: number,
  maxWidth: number,
  lineHeight: number,
) => {
  let cursorY = startY;
  lines.forEach((line) => {
    if (line === '') {
      cursorY += lineHeight;
      return;
    }
    const wrapped = doc.splitTextToSize(line, maxWidth);
    wrapped.forEach((wrappedLine: string) => {
      doc.text(wrappedLine, startX, cursorY);
      cursorY += lineHeight;
    });
  });
  return cursorY;
};

export const generatePdf = async ({ image, notes, exportedAt = new Date() }: PdfExportPayload): Promise<Blob> => {
  const doc = new jsPDF({ unit: 'pt', format: 'letter' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 48;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('Home Security Plan', margin, margin + 8);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.text('Generated from your Precision Planner layout', margin, margin + 30);
  doc.text(`Exported ${exportedAt.toLocaleDateString()}`, margin, margin + 48);

  const { width: imgWidth, height: imgHeight } = await loadImageDimensions(image);
  const imageTop = margin + 70;
  const maxImageWidth = pageWidth - margin * 2;
  const maxImageHeight = pageHeight - imageTop - margin;
  const scale = Math.min(maxImageWidth / imgWidth, maxImageHeight / imgHeight, 1);
  const renderWidth = imgWidth * scale;
  const renderHeight = imgHeight * scale;

  doc.addImage(image, 'PNG', margin, imageTop, renderWidth, renderHeight);

  const notesLines = buildNotesLines(notes);
  doc.setFontSize(11);

  const lineHeight = 14;
  const notesHeight = notesLines.length * lineHeight;
  const remainingSpace = pageHeight - margin - (imageTop + renderHeight);
  const canFitOnPageOne = remainingSpace >= notesHeight + 24;

  if (canFitOnPageOne) {
    renderNotes(doc, notesLines, margin, imageTop + renderHeight + 16, maxImageWidth, lineHeight);
  } else {
    doc.addPage();
    renderNotes(doc, notesLines, margin, margin, maxImageWidth, lineHeight);
  }

  const pdfArrayBuffer = doc.output('arraybuffer');
  return new Blob([pdfArrayBuffer], { type: 'application/pdf' });
};
