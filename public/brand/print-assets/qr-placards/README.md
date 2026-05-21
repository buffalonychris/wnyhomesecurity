# WNY Home Security QR Placard Print Package

## Purpose
Create production-ready QR placard print files for local campaign distribution and physical placement. PRINT-ASSET002B refines the existing QR placard source package so generated placards visually align with the operator-approved premium pole/mall flyer system while remaining scan-first and simpler than half-sheet flyers.

## Files Included
- `source/generate-placards.mjs` — Source generator for all required QR placard PDFs.
- `generated/` — Local output folder for generated PDFs (not committed).

Generated file names produced by script:
- `wnyhs-qr-placard-half-page-two-up-color.pdf`
- `wnyhs-qr-placard-full-page-color.pdf`
- `wnyhs-qr-placard-half-page-two-up-grayscale.pdf`
- `wnyhs-qr-placard-full-page-grayscale.pdf`

## Canonical Assets Used
- Visual benchmark: `/public/brand/forprint/PoleFlyerMallFlyer.png`
- Primary crest: `/public/brand/forprint/wallpaper screensaver.png`
- QR Landing / Campaign QR: `/public/brand/forprint/QR QRLANDING  Home Page QR.png`

`PoleFlyerMallFlyer.png` is the placard visual benchmark for PRINT-ASSET002B. The generated placards use a dark premium WNYHS composition with charcoal / black fields, restrained gold accents, stronger crest presence, integrated QR framing, high contrast, and local-trust posture.

Only the QR Landing / Campaign QR is approved for these QR placards. Do not use `/public/brand/forprint/QR WNY Home Security Home Page QR.png`; that main website / business-card QR is reserved for business cards, stationery, and identity materials.

## Generate PDFs Locally
Run:

```bash
node public/brand/print-assets/qr-placards/source/generate-placards.mjs
```

Output path:

`/public/brand/print-assets/qr-placards/generated/`

Generated PDFs remain local-only, ignored output. Do not commit generated PDFs, generated PNG exports, or other binary print outputs.

## Approved Use
Approved for QR campaign placards, hanging ads, community boards, counters, windows, and canvassing placements. Placards are scan-first assets, not explanation-first assets; keep them simpler and less copy-heavy than half-sheet flyers.

## Not Approved For
Not approved for business cards, yard signs, car magnets, apparel, or full flyer systems.

## Printing Notes
- Print at 100% scale.
- Do not shrink-to-fit if it changes layout.
- Use matte/satin when possible.
- Use cardstock or lamination for durability.
- Test QR before bulk printing.
- Physically proof color and grayscale versions before production.
- Confirm QR scan reliability after local PDF generation, vendor upload preview, and first physical print.
- Cut half-page two-up sheets cleanly.

## Scan Testing Checklist
- QR scans from PDF.
- QR scans from first physical print.
- QR loads expected QR landing funnel.
- Phone number readable.
- URL readable.
- Grayscale version readable.

## Contact
Call or text: 716-201-0364
wnyhomesecurity.com
