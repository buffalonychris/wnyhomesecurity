# WNY Home Security Print System Standards — REV01

Status: Active / Canonical
Context: CTX-WNYHS-FINISH-LINE-REV01

## Purpose

This document defines print production standards for WNY Home Security (WNYHS) physical brand materials.

## Authority

This document supports:

- `/docs/brand/brand_asset_authority_rev01.md`

This document does **not** override:

- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/guardrails.md`
- `/docs/system/master-task-register.md`
- Stripe/payment rules
- runtime contracts
- claims guardrails

## Applies To

- QR placards
- half-sheet flyers
- full-page flyers
- yard signs
- business cards
- car magnets
- leave-behinds
- stationery
- apparel production references

## Production Priority Order

Approved physical asset production sequence:

1. QR placards
2. Half-sheet flyers
3. Yard signs
4. Business cards
5. Car magnets
6. Leave-behinds
7. Apparel

This sequence prioritizes lead generation and local visibility before brand reinforcement.

## Core Print Principle

Readability and scan reliability override decoration.

Physical materials must work in real-world conditions:

- distance
- movement
- glare
- weather
- low light
- quick viewing
- cheap print variance
- imperfect placement

## Bleed Rules

- Standard bleed: `0.125 in` unless vendor requires otherwise.
- Critical text, logo, QR, and phone/URL must never enter bleed.
- Yard signs and magnets should use larger internal safe zones than small paper print.
- Backgrounds may extend to bleed.
- QR codes must not touch trim edge or bleed area.

## Vendor-Safe Margins

Recommended safe margins:

- Business cards: minimum `0.125 in`, preferred `0.1875–0.25 in`.
- Flyers / placards: minimum `0.25 in`.
- Yard signs: preferred `0.5 in` or more.
- Car magnets: preferred `0.5 in` or more.
- Leave-behinds: minimum `0.25 in`.

Outdoor materials require larger margins because cutting, mounting, and viewing distance are less controlled.

## Export DPI Rules

- Standard print export: `300 DPI`.
- Large-format signage may be acceptable at `150–300 DPI` depending on vendor and viewing distance.
- QR codes must remain sharp and non-blurry.
- Do not upscale low-resolution QR screenshots.
- Use source PNG assets from `/public/brand/forprint/` when generating print outputs.
- Avoid unnecessary recompression.

## CMYK / RGB Guidance

- Website assets may originate in RGB.
- Vendor print systems may convert to CMYK.
- For professional production, export according to vendor requirements.
- Always proof black/gold contrast after vendor upload.
- Gold glow effects may shift in print and must not be relied on for readability.
- If exact brand color is critical, request vendor proof.

## QR Export Rules

Approved dual-QR system reference:

- `/docs/brand/brand_asset_authority_rev01.md`

Rules:

- QR Landing / Campaign QR is for flyers, placards, canvassing, hanging ads, and local campaign print.
- Main Website / Business Card QR is for business cards, stationery, and general contact materials.
- QR codes must keep a white quiet zone.
- QR codes must be high contrast.
- QR codes must not sit over textured, dark, or photographic backgrounds.
- QR codes must not be stylized without scan testing.
- QR codes must be tested:
  1. after design export
  2. after vendor upload preview
  3. after physical print

Minimum sizes:

- Business card: minimum `0.75 in` square, preferred `0.9–1.1 in`.
- Flyer / placard: minimum `1.25 in` square, preferred `1.5–2.0 in`.
- Yard sign / vehicle: QR only when close-distance scanning is realistic.

## Grayscale Fallback Rules

- Every print asset should remain understandable in grayscale.
- Do not rely solely on gold accents for meaning.
- Phone number, URL, CTA, and primary headline must remain readable without color.
- Avoid low-contrast gray-on-black combinations.
- If grayscale output fails, simplify layout before production.

## Paper Recommendations

- QR placards: heavy cardstock or laminated paper, matte or satin preferred.
- Half-sheet flyers: standard text weight acceptable for bulk; heavier stock preferred for higher-quality placement.
- Full-page flyers: `80–100 lb` text or equivalent preferred.
- Business cards: `16 pt` or heavier preferred.
- Leave-behinds: `80–100 lb` text or light cardstock preferred.

Note: matte/satin often improves readability and scan reliability more than gloss.

## Sign Material Recommendations

- Yard signs: corrugated plastic / coroplast preferred for cost-effective local deployment.
- Use high-contrast simplified messaging.
- Avoid small text.
- Use weather-tolerant printing.
- Ensure phone/URL is readable from distance.
- QR should be secondary on roadside signs unless pedestrian viewing is expected.

## Vinyl / Magnet Recommendations

- Car magnets should use simplified hierarchy.
- Large phone number and URL should dominate.
- Avoid dense decorative backgrounds.
- Use weather-resistant material.
- Corners and edges need safe spacing.
- Avoid placing critical content near magnet edges.
- Verify readability at parking-lot and road distance.

## Matte vs Gloss Guidance

- Matte or satin preferred for QR-heavy pieces.
- Gloss may look premium but can create glare.
- Outdoor signs should prioritize readability over shine.
- Business cards may use matte/satin for professional restrained feel.
- High-gloss should be avoided when QR scan reliability is central.

## Weather Exposure Guidance

- Outdoor materials must account for rain, sunlight, wind, glare, and fading.
- Laminated placards or weather-rated materials are preferred for outdoor hanging.
- Yard signs and magnets need weather-tolerant substrate and ink.
- Do not use indoor-only paper outdoors unless temporary and protected.
- QR codes must be protected from wrinkles, glare, and obstruction.

## Minimum Print Sizing

- Business card: standard `3.5 x 2 in`.
- Half-sheet flyer: `8.5 x 5.5 in`.
- Full-page flyer: `8.5 x 11 in`.
- QR placard: minimum `5.5 x 8.5 in` preferred for public placement.
- Yard sign: `18 x 24 in` preferred baseline.
- Car magnet: `12 x 18 in` or larger preferred depending on vehicle.
- Leave-behind: `8.5 x 11 in` or half-sheet depending on purpose.

## Readable Distance Targets

- Business cards: `1–2 ft`.
- Flyers / placards: `3–8 ft`.
- Hanging QR placards: headline readable at `6–10 ft`, QR scannable up close.
- Yard signs: core message readable from `30–60 ft`.
- Car magnets: phone/URL readable from nearby traffic or parking-lot distance.
- Leave-behinds: optimized for hand reading, not distance.

Roadside materials need fewer words and larger type than hand-held materials.

## Asset-Specific Production Notes

### QR Placards

- Use QR Landing / Campaign QR.
- Prioritize scan action.
- Include phone/URL fallback.
- Keep copy minimal.
- Matte/satin preferred.

### Half-Sheet Flyers

- Use QR Landing / Campaign QR.
- Use a strong headline.
- Keep bullets limited.
- Use local trust language.
- No fear claims.

### Yard Signs

- Primary crest allowed only if readability remains strong.
- Phone/URL must dominate.
- QR is secondary unless pedestrian placement.
- Avoid dense poster-style compositions.

### Business Cards

- Use Main Website / Business Card QR.
- Use primary crest unless too detailed for production.
- Simplified crest allowed if card becomes cluttered.
- Keep service text minimal.

### Car Magnets

- Phone/URL and brand name dominate.
- QR optional only for close-distance use.
- Avoid dense backgrounds.

### Leave-Behinds

- May use more detail than signs.
- Must still preserve scan/read clarity.
- Must remain claims-safe.

### Apparel

- Simplified crest preferred.
- Embroidery requires simplified crest unless vendor proves detail works.
- No QR on standard apparel unless separately approved.

## Claims + Copy Safety

Reference authority:

- `/docs/system/guardrails.md`
- `/docs/brand/brand_asset_authority_rev01.md`

Print materials must not include:

- guaranteed protection
- crime-proof
- burglary-proof
- military-grade
- police-grade
- hack-proof
- guaranteed response
- unsupported emergency dispatch implications
- tactical/operator fantasy language

Allowed positioning includes:

- practical protection
- smart cameras
- alarms
- smart automation
- local installation
- no mandatory monthly contracts
- locally controlled systems
- designed around real homes and businesses

## Change Control

- New print asset types must cite this document.
- Vendor exceptions must be documented.
- If a production requirement conflicts with brand authority, stop and create a revision task.
- If a material requires a new QR, stop and create a campaign tracking task.
- Do not silently create one-off production standards.

## Related Docs

- `/docs/brand/brand_asset_authority_rev01.md`
- `/docs/brand/visual_system_rev01.md`
- `/docs/brand/brand_asset_standards_rev01.md`
- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/guardrails.md`
- `/docs/system/master-task-register.md`
- `/docs/specs/qr_funnel_standards_rev01.md`
- `/docs/specs/public_funnel_standards_rev01.md`
- `/docs/DOCUMENT_CATALOG.md`

## Last Verified

- Date: 2026-05-18
- Verified by: Codex
- Evidence: document creation, brand authority alignment, and repository asset inspection.
