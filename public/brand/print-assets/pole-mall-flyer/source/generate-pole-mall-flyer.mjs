import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { jsPDF } from 'jspdf';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../../../../../');
const packageRoot = path.resolve(__dirname, '..');
const outputDir = path.join(packageRoot, 'generated');
const configPath = path.join(__dirname, 'pole-mall-flyer-config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

function repoPath(assetPath) {
  return path.join(repoRoot, assetPath.replace(/^\//, ''));
}

function readPngDataUrl(assetPath) {
  const resolved = repoPath(assetPath);
  return `data:image/png;base64,${fs.readFileSync(resolved).toString('base64')}`;
}

function assertFileExists(assetPath) {
  const resolved = repoPath(assetPath);
  if (!fs.existsSync(resolved)) {
    throw new Error(`Required asset is missing: ${assetPath}`);
  }
}

function assertApprovedConfig() {
  assertFileExists(config.baseVisualAsset);
  assertFileExists(config.qrAsset);
  assertFileExists(config.blockedQrAsset);

  if (path.normalize(config.qrAsset) === path.normalize(config.blockedQrAsset)) {
    throw new Error('Configured QR asset must not equal blocked main website / business card QR asset.');
  }

  if (!config.qrAsset.includes('QR QRLANDING')) {
    throw new Error('Configured QR asset must be the approved QR Landing / Campaign QR.');
  }

  if (config.destinationIntent !== 'https://www.wnyhomesecurity.com/qrlanding?src=placard') {
    throw new Error('Destination intent must remain the approved QR landing campaign URL.');
  }

}

function crc32(buffer) {
  let crc = 0xffffffff;
  for (let i = 0; i < buffer.length; i += 1) {
    crc ^= buffer[i];
    for (let j = 0; j < 8; j += 1) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const typeBuffer = Buffer.from(type, 'ascii');
  const lengthBuffer = Buffer.alloc(4);
  lengthBuffer.writeUInt32BE(data.length, 0);
  const crcBuffer = Buffer.alloc(4);
  crcBuffer.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 0);
  return Buffer.concat([lengthBuffer, typeBuffer, data, crcBuffer]);
}

function paethPredictor(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
}

function unfilterScanlines(raw, width, height, bytesPerPixel) {
  const rowLength = width * bytesPerPixel;
  const output = Buffer.alloc(rowLength * height);
  let rawOffset = 0;

  for (let y = 0; y < height; y += 1) {
    const filter = raw[rawOffset];
    rawOffset += 1;
    const rowStart = y * rowLength;
    const previousRowStart = rowStart - rowLength;

    for (let x = 0; x < rowLength; x += 1) {
      const value = raw[rawOffset + x];
      const left = x >= bytesPerPixel ? output[rowStart + x - bytesPerPixel] : 0;
      const up = y > 0 ? output[previousRowStart + x] : 0;
      const upperLeft = y > 0 && x >= bytesPerPixel ? output[previousRowStart + x - bytesPerPixel] : 0;

      if (filter === 0) output[rowStart + x] = value;
      else if (filter === 1) output[rowStart + x] = (value + left) & 0xff;
      else if (filter === 2) output[rowStart + x] = (value + up) & 0xff;
      else if (filter === 3) output[rowStart + x] = (value + Math.floor((left + up) / 2)) & 0xff;
      else if (filter === 4) output[rowStart + x] = (value + paethPredictor(left, up, upperLeft)) & 0xff;
      else throw new Error(`Unsupported PNG filter type: ${filter}`);
    }
    rawOffset += rowLength;
  }

  return output;
}

function makeGrayscalePngDataUrl(assetPath) {
  const input = fs.readFileSync(repoPath(assetPath));
  const signature = input.subarray(0, 8);
  if (!signature.equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
    throw new Error(`Not a PNG asset: ${assetPath}`);
  }

  let offset = 8;
  let width = 0;
  let height = 0;
  let bitDepth = 0;
  let colorType = 0;
  const idatChunks = [];

  while (offset < input.length) {
    const length = input.readUInt32BE(offset);
    const type = input.subarray(offset + 4, offset + 8).toString('ascii');
    const data = input.subarray(offset + 8, offset + 8 + length);
    offset += 12 + length;

    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
    } else if (type === 'IDAT') {
      idatChunks.push(data);
    } else if (type === 'IEND') {
      break;
    }
  }

  if (bitDepth !== 8 || ![0, 2, 4, 6].includes(colorType)) {
    throw new Error(`Unsupported PNG format for grayscale conversion: bitDepth=${bitDepth}, colorType=${colorType}`);
  }

  const bytesPerPixelByColorType = { 0: 1, 2: 3, 4: 2, 6: 4 };
  const bytesPerPixel = bytesPerPixelByColorType[colorType];
  const raw = zlib.inflateSync(Buffer.concat(idatChunks));
  const pixels = unfilterScanlines(raw, width, height, bytesPerPixel);
  const rgbaRowLength = width * 4;
  const grayscaleRows = Buffer.alloc((rgbaRowLength + 1) * height);

  for (let y = 0; y < height; y += 1) {
    const sourceRowStart = y * width * bytesPerPixel;
    const outputRowStart = y * (rgbaRowLength + 1);
    grayscaleRows[outputRowStart] = 0;

    for (let x = 0; x < width; x += 1) {
      const source = sourceRowStart + x * bytesPerPixel;
      const target = outputRowStart + 1 + x * 4;
      let red;
      let green;
      let blue;
      let alpha = 255;

      if (colorType === 0) {
        red = green = blue = pixels[source];
      } else if (colorType === 2) {
        red = pixels[source];
        green = pixels[source + 1];
        blue = pixels[source + 2];
      } else if (colorType === 4) {
        red = green = blue = pixels[source];
        alpha = pixels[source + 1];
      } else {
        red = pixels[source];
        green = pixels[source + 1];
        blue = pixels[source + 2];
        alpha = pixels[source + 3];
      }

      const gray = Math.round(red * 0.299 + green * 0.587 + blue * 0.114);
      grayscaleRows[target] = gray;
      grayscaleRows[target + 1] = gray;
      grayscaleRows[target + 2] = gray;
      grayscaleRows[target + 3] = alpha;
    }
  }

  const outputSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const output = Buffer.concat([
    outputSignature,
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', zlib.deflateSync(grayscaleRows, { level: 9 })),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);

  return `data:image/png;base64,${output.toString('base64')}`;
}

function drawQrReplacement(doc, qrDataUrl, grayscale) {
  const { xInches, yInches, qrSizeInches, quietZoneInches, borderRadiusInches } = config.qrReplacement;
  const patchX = xInches - quietZoneInches;
  const patchY = yInches - quietZoneInches;
  const patchSize = qrSizeInches + quietZoneInches * 2;

  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(...(grayscale ? [72, 72, 72] : [201, 148, 42]));
  doc.setLineWidth(0.018);
  doc.roundedRect(patchX, patchY, patchSize, patchSize, borderRadiusInches, borderRadiusInches, 'FD');

  doc.setDrawColor(...(grayscale ? [20, 20, 20] : [18, 18, 18]));
  doc.setLineWidth(0.006);
  doc.roundedRect(patchX + 0.025, patchY + 0.025, patchSize - 0.05, patchSize - 0.05, borderRadiusInches, borderRadiusInches, 'S');

  doc.addImage(qrDataUrl, 'PNG', xInches, yInches, qrSizeInches, qrSizeInches, 'approved-qr', 'NONE');
}

function makePdf({ grayscale = false } = {}) {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'in', format: 'letter', compress: true });
  const baseDataUrl = grayscale ? makeGrayscalePngDataUrl(config.baseVisualAsset) : readPngDataUrl(config.baseVisualAsset);
  const qrDataUrl = readPngDataUrl(config.qrAsset);

  doc.addImage(baseDataUrl, 'PNG', 0, 0, config.page.widthInches, config.page.heightInches, grayscale ? 'base-gray' : 'base-color', 'MEDIUM');
  drawQrReplacement(doc, qrDataUrl, grayscale);

  const outputFile = grayscale ? config.outputGrayscaleFilename : config.outputColorFilename;
  doc.save(path.join(outputDir, outputFile));
  return outputFile;
}

assertApprovedConfig();
fs.mkdirSync(outputDir, { recursive: true });

const generated = [makePdf({ grayscale: false }), makePdf({ grayscale: true })];

console.log(`Generated ${generated.length} full-page pole / mall flyer PDFs in ${path.relative(repoRoot, outputDir)}`);
for (const file of generated) {
  console.log(`- ${file}`);
}
console.log(`Base visual asset: ${config.baseVisualAsset}`);
console.log(`Approved QR asset: ${config.qrAsset}`);
console.log(`Destination intent: ${config.destinationIntent}`);
