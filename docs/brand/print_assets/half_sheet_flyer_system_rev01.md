# WNY Home Security Half-Sheet Flyer Production System — REV01

## Purpose

This document governs half-sheet flyer production for WNY Home Security (WNYHS) physical local marketing. It defines a reusable, controlled flyer system for local canvassing, counter placement, bulletin boards, community distribution, handouts, neighborhood awareness, and local lead generation.

## Authority

This document is subordinate to:

- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/guardrails.md`
- `/docs/system/master-task-register.md`
- `/docs/brand/brand_asset_authority_rev01.md`
- `/docs/brand/print_system_standards_rev01.md`
- `/docs/brand/print_assets/qr_placard_system_rev01.md`

This document must not override brand asset authority, print production standards, QR placard governance, or claims guardrails.

## Applies To

Included usage:

- half-sheet flyers
- two-up letter-sheet flyer printouts
- local handouts
- canvassing handouts
- community board half-sheet postings
- counter handouts
- light leave-behind flyer usage

Excluded usage:

- QR placards
- yard signs
- business cards
- car magnets
- apparel
- full leave-behind packets
- full-page flyers unless separately documented

## Relationship To QR Placards

- QR placards are scan-first placement assets.
- Half-sheet flyers are message-first handout assets.
- Flyers may include the same QR Landing QR, with slightly more explanatory copy.
- Flyers must not become dense brochures.

## Canonical Assets

| Asset Role | Canonical File | Required / Optional | Notes |
|---|---|---|---|
| Primary crest | `/public/brand/forprint/wallpaper screensaver.png` | Required | Primary WNYHS crest asset for campaign flyers. |
| QR Landing / Campaign QR | `/public/brand/forprint/QR QRLANDING Home Page QR.png` | Required | Approved campaign QR for half-sheet flyers. |
| Optional campaign background | `/public/brand/forprint/SpanWallpaper.png` | Optional | May be used when readability remains compliant. |
| Campaign poster reference | `/public/brand/forprint/highcontrastedging8x11 poster.png` | Optional reference | Reference only; not a required layout template. |

Do not use `/public/brand/forprint/QR WNY Home Security Home Page QR.png` for campaign half-sheet flyers.

Approved destination intent for campaign flyers:

- `https://www.wnyhomesecurity.com/qrlanding?src=placard`

## Flyer Size Standards

Primary format:

- 8.5 x 5.5 in half-sheet flyer
- two flyers per 8.5 x 11 in sheet
- intended for economical printing and local distribution

Optional future formats:

- 5 x 7 in handout
- 4 x 6 in card-style handout

PRINT-ASSET003 defines the half-sheet system only.

## Layout Variants

### Variant A — Local Estimate Flyer

Purpose: drive local estimate requests.

Required elements:

- primary crest
- headline
- short service statement
- 3–5 service bullets
- QR Landing QR
- phone number
- fallback URL
- CTA

### Variant B — Home + Small Business Flyer

Purpose: communicate residential and small-business relevance.

Required elements:

- primary crest
- headline
- home/business service framing
- 3–5 practical protection bullets
- QR Landing QR
- phone number
- fallback URL

### Variant C — No Mandatory Monthly Contracts Flyer

Purpose: communicate key positioning without overclaiming.

Required elements:

- primary crest
- headline
- concise no-contract statement
- explanation that systems can include cameras, alarms, and automation
- QR Landing QR
- phone number
- fallback URL

No additional flyer variants are approved under PRINT-ASSET003.

## Approved Copy Blocks

Headlines:

- Practical Protection for WNY Homes & Businesses
- Smart Cameras, Alarms & Automation — Locally Installed
- Security Systems Designed Around Real Properties
- No Mandatory Monthly Contracts Required
- Start With a Local Security Estimate

Support statements:

- Cameras, alarms, and smart automation designed around your home or business.
- Local installation for homes, garages, storefronts, and small businesses.
- Practical systems built around your property, not a one-size-fits-all package.
- Get a local estimate without pressure or mandatory monthly monitoring.

Service bullets:

- Smart cameras
- Door and window sensors
- Motion detection
- Alarm system options
- Smart alerts
- Local installation
- Home and small-business layouts
- Automation options
- No mandatory monthly contracts

CTA lines:

- Scan for a Local Estimate
- Start With a Quick Fit Check
- See Options Online
- Call or Text for a Local Estimate
- Get Practical Security Options

Contact / fallback:

- Call or text: 716-201-0364
- wnyhomesecurity.com

Forbidden copy:

- guaranteed protection
- crime-proof
- burglary-proof
- police-grade
- military-grade
- hack-proof
- guaranteed response
- emergency dispatch implications unless supported
- tactical response
- elite force
- warrior
- fear-based urgency
- ACT NOW style language

## Required Contact + Fallback Information

Each half-sheet flyer must include:

- QR Landing / Campaign QR
- phone number: 716-201-0364
- fallback URL: wnyhomesecurity.com
- local service identity: WNY Home Security

Do not include multiple competing URLs.

Do not include the business-card/main-funnel QR.

## QR Placement Rules

- QR must be visible but must not dominate the whole flyer.
- QR must include quiet zone / white border.
- QR must not be placed over textured, dark, or photographic backgrounds.
- QR must not be smaller than 1.25 in square.
- Preferred QR size for half-sheet flyers: 1.35–1.75 in square.
- QR must be tested after export and after physical print.
- Phone/URL fallback must remain readable.

## Flyer Copy Density Rules

- Half-sheet flyers may carry more copy than placards but less than brochures.
- Use one strong headline.
- Use one short support statement.
- Use 3–5 short bullets.
- Use one CTA.
- Avoid paragraph-heavy layouts.
- Avoid cramming multiple offers or multiple routes into one flyer.

## Indoor / Local Placement Rules

Approved placements:

- community boards
- shop counters
- diner/laundromat bulletin boards
- local partner businesses
- waiting areas
- event tables
- canvassing handouts

Production guidance:

- matte or satin paper preferred
- standard text weight acceptable for bulk
- heavier paper preferred for professional handouts
- QR should be reachable and scannable at close range

## Kinkos / Staples Ready Export Plan

Future production export plan:

- 8.5 x 11 in two-up PDF
- two 8.5 x 5.5 in flyers per page
- 300 DPI preferred
- safe margin minimum 0.25 in
- PDF output
- color and grayscale-safe versions
- generated binaries must go to ignored `generated/` output folder
- source generator and config may be committed
- generated PDFs must not be committed unless explicitly required

## Future Source Package Plan

Future output folder:

- `/public/brand/print-assets/half-sheet-flyers/`

Future committed files may include:

- `README.md`
- `source/generate-half-sheet-flyers.mjs`
- `source/flyer-content.json` or similar text config

Future generated (ignored) files must go to:

- `/public/brand/print-assets/half-sheet-flyers/generated/`

Future generated outputs may include:

- `wnyhs-half-sheet-flyer-local-estimate-two-up-color.pdf`
- `wnyhs-half-sheet-flyer-local-estimate-two-up-grayscale.pdf`
- `wnyhs-half-sheet-flyer-home-business-two-up-color.pdf`
- `wnyhs-half-sheet-flyer-home-business-two-up-grayscale.pdf`
- `wnyhs-half-sheet-flyer-no-contracts-two-up-color.pdf`
- `wnyhs-half-sheet-flyer-no-contracts-two-up-grayscale.pdf`

Do not generate these files in PRINT-ASSET003.

## Scan Testing Checklist

- [ ] QR scans from exported PDF on screen
- [ ] QR scans from vendor preview if available
- [ ] QR scans from first physical print
- [ ] QR loads expected QR landing funnel
- [ ] Phone number is readable
- [ ] Fallback URL is readable
- [ ] No forbidden claims appear
- [ ] Flyer remains readable in grayscale
- [ ] Layout is not too dense for half-sheet format

## Placement Use Cases

| Placement Type | Recommended Variant | Paper / Material | Notes |
|---|---|---|---|
| laundromat bulletin board | Variant B — Home + Small Business | standard text or matte | emphasize practical property fit and scannable QR. |
| diner/community board | Variant A — Local Estimate | matte or satin | headline + CTA clarity prioritized for quick-read traffic. |
| shop counter | Variant B — Home + Small Business | heavier matte preferred | handout stack should keep QR and phone clearly visible. |
| door-to-door canvassing | Variant A — Local Estimate | standard text for volume | keep copy concise and easy to scan at the door. |
| local event table | Variant C — No Mandatory Monthly Contracts | satin or heavier matte | position practical/no-mandatory-contract messaging carefully. |
| referral handoff | Variant C — No Mandatory Monthly Contracts | heavier paper preferred | keep direct phone fallback readable for non-scan users. |
| apartment/community board | Variant A — Local Estimate | matte | avoid dense copy; maintain quick-scan CTA. |

## Physical Asset Production Sequence

Broader physical asset sequence:

1. QR placards
2. Half-sheet flyers
3. Yard signs
4. Business cards
5. Car magnets
6. Leave-behinds
7. Apparel

PRINT-ASSET003 covers half-sheet flyer system definition only.

## Change Control

- Do not create flyer variants outside this document without revision.
- Do not swap QR assets without documented approval.
- Do not use the business-card QR on campaign flyers.
- Do not add claims outside guardrails.
- Do not create one-off layouts that bypass brand and print standards.
- Do not commit generated binary print outputs.

## Related Docs

- `/docs/brand/brand_asset_authority_rev01.md`
- `/docs/brand/print_system_standards_rev01.md`
- `/docs/brand/print_assets/qr_placard_system_rev01.md`
- `/docs/brand/visual_system_rev01.md`
- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/guardrails.md`
- `/docs/system/master-task-register.md`
- `/docs/specs/qr_funnel_standards_rev01.md`
- `/docs/specs/public_funnel_standards_rev01.md`
- `/docs/DOCUMENT_CATALOG.md`

## Last Verified

Date: 2026-05-18
Verified by: Codex
Evidence: document creation, brand authority alignment, print system alignment, QR placard system alignment, and source-only print asset workflow.
