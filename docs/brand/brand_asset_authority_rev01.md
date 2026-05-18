# WNY Home Security Brand Asset Authority — REV01

Status: Active / Canonical
Context: CTX-WNYHS-FINISH-LINE-REV01

## PURPOSE

This document freezes approved WNY Home Security visual identity assets and usage rules to prevent uncontrolled brand drift across digital and physical surfaces, including web pages, QR placards, flyers, full-sheet printouts, business cards, yard signs, car magnets, apparel, stationery, leave-behinds, and local advertising materials.

## AUTHORITY

This document is the canonical visual asset authority for WNY Home Security (WNYHS) physical and digital branding execution.

- Supports existing governance and execution controls in `/docs/system/project.md`, `/docs/system/agent.md`, `/docs/system/plan.md`, and `/docs/system/step-current.md`.
- Does **not** override hard safety and claims guardrails in `/docs/system/guardrails.md`.
- Does **not** override Stripe/payment protections or verification authority.
- Does **not** override runtime contracts, API boundaries, or protected systems.

## CANONICAL ASSET INVENTORY

Canonical physical-print and production asset folder:

- `/public/brand/forprint/`

| Asset Role | Canonical File | Use Case | Authority Status | Notes |
|---|---|---|---|---|
| Primary high-detail crest (default) | `/public/brand/forprint/wallpaper screensaver.png` | Public-facing web and print identity: website, flyers, placards, yard signs, business cards, proposals, stationery, advertising, leave-behinds | Canonical / Required by default | Primary logo authority. No alternate composition/recolor/regeneration allowed. |
| Simplified/prepress crest | `/public/brand/forprint/IconPrePressVersionUncropped.png` | Embroidery, hats, shirt chest marks, favicon-scale usage, laser engraving, constrained production | Canonical / Restricted | Not primary for general public marketing unless production limitations require simplification. |
| QR Landing campaign QR | `/public/brand/forprint/QR QRLANDING Home Page QR.png` | Campaign/public scan materials (flyers, placards, canvassing, neighborhood distribution, scan-oriented ads) | Canonical / Approved | Campaign funnel destination QR. |
| Main website/business identity QR | `/public/brand/forprint/QR WNY Home Security Home Page QR.png` | Business cards, stationery, professional/networking identity materials, non-campaign leave-behinds | Canonical / Approved | Main website funnel destination QR. |
| Wallpaper/banner campaign support visual | `/public/brand/forprint/SpanWallpaper.png` | Campaign composition support backdrop/graphic | Approved supporting asset | Support image only; not a logo replacement. |
| Full-page campaign poster visual | `/public/brand/forprint/highcontrastedging8x11 poster.png` | Campaign poster/flyer reference usage | Approved campaign reference only | Not a mandatory global layout template; embedded QR must be replaced with approved standalone campaign QR in future production updates. |

## ASSET USAGE HIERARCHY

1. Primary crest is the default authority mark for public-facing web and print use.
2. Simplified crest is restricted to constrained production conditions.
3. Campaign images may support layouts, but must not replace the primary crest/logo authority.
4. QR codes must not be stylized beyond approved print-safe handling.

## ALLOWED USAGE TABLE

| Asset Type | Required Logo | QR Allowed | Campaign Image Allowed | Notes |
|---|---|---|---|---|
| Website header / hero | Primary crest default | Optional (contextual) | Optional | Header/hero remains readability-first and brand-consistent. |
| QR placards | Primary crest | QR Landing QR (default) | Optional | Public scan intent defaults to campaign QR. |
| Half-sheet flyers | Primary crest | QR Landing QR preferred | Allowed | Keep concise hierarchy and scanability. |
| Full-page flyers | Primary crest | QR Landing QR preferred | Allowed | Poster-style density is optional, not required. |
| Business cards | Primary crest (or simplified only if production-constrained) | Main website QR preferred | Optional/minimal | Contact readability first. |
| Yard signs | Primary crest | Optional if realistic scan distance | Allowed | Phone/URL readability takes priority over QR. |
| Car magnets | Primary crest | Optional if realistic scan distance | Allowed | Simplicity and distance readability first. |
| Letterhead / stationery | Primary crest | Main website QR optional | Optional/minimal | Formal identity surface. |
| Proposals / leave-behinds | Primary crest | Main website QR or campaign QR by purpose | Allowed | Match funnel intent and context. |
| Hats | Simplified crest default | No | No | Constrained production use. |
| Shirts / polos | Simplified crest default | No | No | Constrained production use. |
| Social graphics | Primary crest default | Optional | Allowed | Maintain restraint and guardrail-safe copy. |
| Vehicle graphics | Primary crest default | Optional if scan distance practical | Allowed | URL/phone must remain readable first. |

## FORBIDDEN USAGE

The following are prohibited without a formally approved revision:

- Recolors of canonical crest assets
- Alternate AI-generated logo versions
- Distorted proportions or stretched logos
- Unauthorized crops removing defining crest structure
- Random glow effects or readability-breaking effects
- New outlines or unauthorized badge variants
- Unauthorized typography pairings that violate brand posture
- Replacing crest art with unrelated shield/eagle/buffalo imagery
- Tactical/military reinterpretations
- Skulls, flames, or red-alert styling
- “elite force”, “tactical response”, “warrior”, or militarized copy
- Fear-based design treatments

## QR RULES

- Exactly two approved QR codes are authorized.
- Use QR Landing campaign QR for campaign/public scan advertising.
- Use Main Website QR for business identity/contact materials.
- QR must remain high-contrast and print-safe.
- Preserve quiet zone/white border.
- Do not place QR over busy textures.
- Test QR after export and after print.
- Preserve sharp, non-compressed QR rendering.

Minimum sizing guidance:

- Business cards: minimum `0.75 in` square; preferred `0.9–1.1 in` square.
- Flyers/placards: minimum `1.25 in` square; preferred `1.5–2.0 in` square.
- Yard signs/vehicles: QR only when realistic scan distance exists; phone number and URL must remain readable first.

## TYPOGRAPHY RULES

Typography must remain:

- Bold
- Clean
- Readable
- High-contrast
- Restrained
- Modern
- Non-tactical

Avoid:

- Novelty fonts
- Horror styling
- Military/tactical typography
- Distressed overuse
- Aggressive decorative fonts

Execution guidance:

- Signage uses fewer words than web surfaces.
- Readability overrides atmosphere.
- Large type hierarchy overrides decorative density.

Maximum text-density guidance:

- Yard signs: 1 primary headline, 1 support line max, phone/URL/QR only.
- Placards: 1 headline, 2–4 short bullets, QR, phone/URL.
- Flyers: headline, short service statement, limited bullets, CTA, QR.
- Business cards: identity, phone, URL, QR optional, minimal service text.

## PRINT SAFETY RULES

- Maintain bleed.
- Maintain safe margins.
- Preserve contrast.
- Preserve QR clarity.
- Grayscale fallback required.
- Do not rely on glow effects for readability.
- Avoid tiny white text over detailed imagery.
- Use simplified crest when production method cannot preserve detail.

Embroidery rule:

- Simplified crest only unless the vendor proves the detailed crest reproduces cleanly.

Baseline print assumptions:

- Standard bleed: `0.125 in`
- Preferred safe margin: `0.25 in`
- Export must preserve QR sharpness

## DISTANCE READABILITY RULES

Applies to yard signs, car magnets, flyers, and placards.

- Yard signs must be readable from moving vehicles.
- Phone number/URL must be readable before QR priority.
- Decorative complexity must never reduce readability.
- Fewer words perform better at distance.
- Contrast matters more than cinematic detail.

## BRAND POSTURE RULE

WNY Home Security visual posture should feel:

- Premium
- Local
- Practical
- Restrained
- Modern
- Trustworthy
- Systems-focused

It must not feel like:

- Tactical cosplay
- Mall-kiosk branding
- Fear marketing
- Militarized branding
- Cheap contractor clutter

Current professionalism is preserved by:

- Restrained palette
- Black/gold consistency
- Clean typography
- Lack of aggressive slogans
- Practical service language

## CLAIMS + COPY GUARDRAILS

Reference authority: `/docs/system/guardrails.md`.

Allowed language examples:

- practical protection
- smart cameras
- alarms
- smart automation
- local installation
- no mandatory monthly contracts
- locally controlled systems
- professionally designed
- designed around real homes and businesses

Forbidden language examples:

- guaranteed protection
- crime-proof
- burglary-proof
- military-grade
- police-grade
- hack-proof
- guaranteed response
- emergency dispatch implications unless truly supported

## CHANGE CONTROL

- No new logo variants without documented revision approval.
- No new QR variants without documented campaign purpose and governance approval.
- Future print assets must reference this authority document.
- Vendor-required deviations must be documented.
- Conflicting designs require a revision task before use.

## RELATED DOCS

- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/guardrails.md`
- `/docs/system/master-task-register.md`
- `/docs/brand/visual_system_rev01.md`
- `/docs/brand/brand_asset_standards_rev01.md`
- `/docs/specs/qr_funnel_standards_rev01.md`
- `/docs/specs/public_funnel_standards_rev01.md`
- `/docs/DOCUMENT_CATALOG.md`

## LAST VERIFIED

- Date: 2026-05-18
- Verified by: Codex
- Evidence: repository asset inspection and document creation.
