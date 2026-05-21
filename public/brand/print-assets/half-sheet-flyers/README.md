# WNY Home Security Half-Sheet Flyer Source Package

## Purpose

This source-only package creates reproducible WNY Home Security half-sheet campaign flyer PDFs for local print production while keeping generated binary outputs out of git and pull-request review.

The current generator uses the PRINT-ASSET004C premium dark WNYHS campaign composition: quieter charcoal/black base fields, restrained gold separators, stronger headline hierarchy, an integrated dark crest treatment, a more premium QR frame, and improved footer breathing room. `PoleFlyerMallFlyer.png` remains the visual benchmark for poster/flyer composition, but the half-sheet system remains lighter and more practical than the full poster artwork.

## Files Included

- `README.md` — Package manifest, usage notes, and print checklist.
- `source/generate-half-sheet-flyers.mjs` — Local generator for the approved two-up flyer PDFs.
- `source/flyer-content.json` — Structured content, canonical asset references, visual benchmark reference, and output filename config for the approved flyer variants.
- `generated/` — Local ignored output folder for generated PDFs.

## Generation Command

```bash
node public/brand/print-assets/half-sheet-flyers/source/generate-half-sheet-flyers.mjs
```

## Generated Outputs

The generator writes these local/generated outputs only to `public/brand/print-assets/half-sheet-flyers/generated/`. They are intentionally ignored and must not be committed.

- `wnyhs-half-sheet-flyer-local-estimate-two-up-color.pdf`
- `wnyhs-half-sheet-flyer-home-business-two-up-color.pdf`
- `wnyhs-half-sheet-flyer-no-contracts-two-up-color.pdf`
- `wnyhs-half-sheet-flyer-local-estimate-two-up-grayscale.pdf`
- `wnyhs-half-sheet-flyer-home-business-two-up-grayscale.pdf`
- `wnyhs-half-sheet-flyer-no-contracts-two-up-grayscale.pdf`

## Canonical Assets Used

- Primary crest: `/public/brand/forprint/wallpaper screensaver.png`
- Campaign QR: `/public/brand/forprint/QR QRLANDING  Home Page QR.png`
- Visual benchmark/reference: `/public/brand/forprint/PoleFlyerMallFlyer.png`

The QR asset above is the QR Landing / Campaign QR for the approved destination intent: `https://www.wnyhomesecurity.com/qrlanding?src=placard`.

Do not swap in `/public/brand/forprint/QR WNY Home Security Home Page QR.png`; that identity QR is reserved for business cards, stationery, and non-campaign identity materials.

## Approved Use

These source files are approved for half-sheet campaign flyers, handouts, bulletin boards, counter placement, local canvassing, and community distribution.

The generator preserves exactly three approved variants:

1. Local Estimate Flyer
2. Home + Small Business Flyer
3. No Mandatory Monthly Contracts Flyer

## Not Approved For

These files are not approved for QR placards, yard signs, commercial identity cards, car magnets, apparel, full leave-behind packet systems, new logos, alternate AI logo versions, or unrelated print assets.

## Printing Notes

- Print at 100% scale.
- Do not shrink-to-fit if it changes layout.
- Use matte/satin when possible.
- Use standard text weight for bulk or heavier paper for professional handouts.
- Color output uses the polished premium dark WNYHS flyer composition with improved crest integration, QR framing, and footer spacing; proof it physically before bulk use.
- Grayscale output is grayscale-safe, but still requires proofing for contrast on the selected paper stock.
- Cut two-up sheets cleanly using the subtle horizontal guide.

## Scan Testing Checklist

Physical print proofing is required before production distribution.

- QR scans from generated PDF on screen.
- QR scans from first physical print.
- QR remains readable inside its clean white scan box and quiet zone.
- QR loads expected QR landing funnel.
- Phone number readable.
- URL readable.
- Grayscale version readable.
- Dark fields and gold/gray accents print cleanly on selected stock.
- Layout not too dense for half-sheet format.

## Contact

Call or text: 716-201-0364
wnyhomesecurity.com
