# WNY Home Security Full-Page Pole / Mall Flyer Source Package

## Purpose

This source-only package generates an 8.5 x 11 inch full-page WNY Home Security pole / mall / community-board flyer. It preserves the operator-approved full-color visual direction from the canonical flyer reference while replacing the embedded lower-center QR region with the approved QR Landing / Campaign QR asset.

The package is intended for reproducible local generation only. Generated PDFs and preview images belong in `generated/` and are intentionally not committed.

## Files Included

- `README.md`
- `source/generate-pole-mall-flyer.mjs`
- `source/pole-mall-flyer-config.json`
- `generated/` local ignored outputs

## Generation Command

```bash
node public/brand/print-assets/pole-mall-flyer/source/generate-pole-mall-flyer.mjs
```

## Generated Outputs

- `wnyhs-pole-mall-flyer-full-page-color.pdf`
- `wnyhs-pole-mall-flyer-full-page-grayscale.pdf`

Generated outputs are written locally under `public/brand/print-assets/pole-mall-flyer/generated/` and are intentionally not committed.

## Canonical Assets Used

- `/public/brand/forprint/PoleFlyerMallFlyer.png`
- `/public/brand/forprint/QR QRLANDING  Home Page QR.png`

Note: the canonical QR Landing / Campaign QR filename in this repository contains two spaces between `QRLANDING` and `Home`; the generator uses the exact file present on disk.

## Approved Use

- telephone pole flyer where permitted
- mall/community board flyer
- storefront window
- bulletin board
- hanging local ad
- local-awareness print placement

## Not Approved For

- business cards
- yard signs
- car magnets
- apparel
- full brochure systems
- paid ad creative without separate review

## QR Replacement Note

The source image contains an embedded QR region in the lower-center portion of the flyer. The generator covers that embedded QR region with a clean white quiet-zone patch and overlays the approved QR Landing / Campaign QR.

QR reliability takes priority over perfect visual blending. The QR must be tested from the generated PDF and from the first physical print before any bulk production.

## Claim Review Note

Visible claims are inherited from the operator-approved `PoleFlyerMallFlyer.png` reference. “No Cloud Required” and “You Own. You Control.” must be verified against the actual deployed offer before bulk printing. If those claims are not universally accurate, use a future revision task to soften them before bulk production.

## Printing Notes

- print at 100% scale
- do not shrink-to-fit if it changes layout
- matte/satin preferred where QR glare is a concern
- use heavier paper or lamination for pole/window/hanging use
- test QR before bulk printing
- confirm placement is allowed before posting

## Scan Testing Checklist

- QR scans from generated PDF
- QR scans from first physical print
- QR loads expected QR landing funnel
- QR remains readable under normal light
- phone/URL readable
- grayscale version readable

## Contact

Call or text: (716) 547-1378

wnyhomesecurity.com
