# WNY Home Security Half-Sheet Flyer Source Package

## Purpose

This source-only package creates reproducible WNY Home Security half-sheet campaign flyer PDFs for local print production while keeping generated binary outputs out of git and pull-request review.

## Files Included

- `README.md` — Package manifest, usage notes, and print checklist.
- `source/generate-half-sheet-flyers.mjs` — Local generator for the approved two-up flyer PDFs.
- `source/flyer-content.json` — Structured content and output filename config for the approved flyer variants.
- `generated/` — Local ignored output folder for generated PDFs.

## Generation Command

```bash
node public/brand/print-assets/half-sheet-flyers/source/generate-half-sheet-flyers.mjs
```

## Generated Outputs

The generator writes these local/generated outputs to `public/brand/print-assets/half-sheet-flyers/generated/`. They are intentionally not committed.

- `wnyhs-half-sheet-flyer-local-estimate-two-up-color.pdf`
- `wnyhs-half-sheet-flyer-home-business-two-up-color.pdf`
- `wnyhs-half-sheet-flyer-no-contracts-two-up-color.pdf`
- `wnyhs-half-sheet-flyer-local-estimate-two-up-grayscale.pdf`
- `wnyhs-half-sheet-flyer-home-business-two-up-grayscale.pdf`
- `wnyhs-half-sheet-flyer-no-contracts-two-up-grayscale.pdf`

## Canonical Assets Used

- `/public/brand/forprint/wallpaper screensaver.png`
- `/public/brand/forprint/QR QRLANDING  Home Page QR.png`

The QR asset above is the campaign QR for the approved destination intent: `https://www.wnyhomesecurity.com/qrlanding?src=placard`.

## Approved Use

These source files are approved for half-sheet campaign flyers, handouts, bulletin boards, counter placement, local canvassing, and community distribution.

## Not Approved For

These files are not approved for QR placards, yard signs, commercial identity cards, car magnets, apparel, or full leave-behind packet systems.

## Printing Notes

- Print at 100% scale.
- Do not shrink-to-fit if it changes layout.
- Use matte/satin when possible.
- Use standard text weight for bulk or heavier paper for professional handouts.
- Test QR before bulk printing.
- Cut two-up sheets cleanly.

## Scan Testing Checklist

- QR scans from generated PDF.
- QR scans from first physical print.
- QR loads expected QR landing funnel.
- Phone number readable.
- URL readable.
- Grayscale version readable.
- Layout not too dense for half-sheet format.

## Contact

Call or text: (716) 547-1378  
wnyhomesecurity.com
