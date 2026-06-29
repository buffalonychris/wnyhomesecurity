# DESIGN003 WNYHS Light Canvas Visual Language Standard REV01

Task ID: DESIGN003
Task Name: WNYHS Light Canvas Visual Language Standard
Status: Operator-approved visual language standard
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## 1. Purpose

This document defines the approved WNYHS light-canvas visual language for future non-image UI formatting work.

It establishes design authority for non-image UI formatting, prepares future component catalog and implementation tasks, and separates visual formatting from page copy and image production.

The approved direction is warm light, residential, premium, readable, and calm. It is intended for WNYHS public non-image UI components only.

## 2. Boundary

This standard governs:

- colors
- typography
- layout rhythm
- spacing
- surfaces
- panels
- cards
- tiles
- buttons
- CTAs
- nav bars
- footer
- forms
- validation states
- hover/focus/active/disabled/loading states
- proof cards
- Core Panel
- Vault Tile
- search result cards
- alert/info blocks
- shadows
- borders
- radius
- motion style

This standard does not govern or change:

- page copy
- headlines
- body wording
- CTA wording
- pricing
- packages
- SEO copy
- production image prompts
- production image assets
- public image replacement
- runtime behavior
- form payloads
- HubSpot
- Stripe
- scheduling

## 3. Explicit Operator Decision

- Dark/black primary page background direction is rejected.
- Primary public page canvas should be warm light / creamy white.
- Dark navy may be used only as a controlled accent/surface area, not as the default page background.
- Actual production image assets remain a separate future workstream.
- Current visual modernization is for non-image UI formatting only.
- Existing page content and existing production images must remain unchanged unless a later task explicitly authorizes content or image replacement.

## 4. Design Positioning

The emotional target is:

- trust
- safety
- intelligence
- premium quality
- comfort
- local reliability
- technology made simple

Style phrase:

Modern Residential Luxury + Apple-level clarity + premium healthcare trust + local WNY reliability.

Avoid:

- generic alarm company
- hacker/cybersecurity dashboard
- noisy SaaS dashboard
- consumer electronics store
- emergency panic page
- cheap contractor site
- black-background security trope
- glowing circuit / hologram / cyberpunk visuals

## 5. Color System

These values are the proposed initial semantic values for future token/component tasks. This document does not edit CSS or token files.

| Color | Role | Allowed use | Forbidden use | Components affected |
| --- | --- | --- | --- | --- |
| Primary canvas / warm white `#FAF8F4` | Default public page canvas. | Page shell, broad section background, legal page canvas, form surroundings. | Dark-page replacement, arbitrary decorative blocks, low-contrast text pairing. | Page Shell, Hero, Page Intro, Legal Text Section, Form Shell. |
| Alternate canvas / cream section `#F4F1EB` | Quiet section alternation. | Section bands, grouped explanatory sections, low-emphasis background rhythm. | Nested card clutter, beige-heavy visual drift, text with weak contrast. | Section Block, Panel, Footer lead-in, QR campaign surface. |
| Primary surface / card white `#FFFFFF` | Clean primary surface. | Cards, tiles, form fields, search result cards, proof cards, legal surfaces. | Whole-page cold-white canvas, dark-surface text, unframed image replacement. | Feature Card, Tile, Proof Card, Search Result Card, Form Field. |
| Elevated warm surface `#FFFDF8` | Slightly warmer raised panel. | Premium panels, final CTA panels, forms, selected Core/Vault surfaces. | Large page canvas, heavy nested cards, disabled state contrast. | Panel, Core Panel, Vault Tile, Form Shell, Final CTA. |
| Primary text / charcoal `#1F2328` | Main readable text. | Headings, body copy, secondary CTA labels, labels, legal text. | Text on dark navy without inverse token, decorative image overlay. | Page Heading, Section Heading, Body Copy, Form Label, Secondary CTA. |
| Secondary text `#5C6670` | Supporting readable text. | Support copy, captions, helper copy, card descriptions. | Required labels, errors, primary body copy on cream if contrast weak. | Muted Copy, Card Copy, Help Text, Footer meta. |
| Muted text `#848C95` | Lowest-emphasis readable text. | Fine print, metadata, secondary captions where contrast remains acceptable. | Form labels, error text, essential directions, disabled text that becomes invisible. | Fine Print, Form Help Text, Legal notes, Proof captions. |
| Trust navy `#18283B` | Controlled authority/accent surface. | Nav/footer surface, Core emphasis panel, selected dark band, secondary CTA text. | Default page background, broad black/dark site direction, cybersecurity mood. | Top Navigation, Footer, Core Panel, Controlled Dark Navy Band. |
| Premium gold `#D4A52F` | Primary accent and CTA surface. | Primary CTA, small accent markers, eyebrows, selected active state. | Large page backgrounds, price hype, low-contrast gold text, decorative overload. | Primary CTA, Submit Button, Eyebrow, Final CTA. |
| Gold hover `#B98915` | Hover/active gold state. | Primary CTA hover, selected active action state. | Body text, borders on dense surfaces, disabled state. | Primary CTA, Submit Button, Phone CTA where primary. |
| Success `#2E8B57` | Positive status. | Success text, success border/surface accent, completed state. | Outcome promises, decorative green wash. | Validation state, Alert / Info Block, Submit Button state. |
| Warning `#E3A008` | Calm caution. | Warning status, review caveats, incomplete state. | Urgency marketing, fear treatment, low-contrast small text. | Alert / Info Block, Package Tier Block, Vault Tile, Fine Print. |
| Error `#C74646` | Error and invalid state. | Field error text, form error block, invalid state border. | Marketing emphasis, broad danger panels, decorative accent. | Form Error Text, Form Field, Alert / Info Block. |
| Info `#356CA5` | Informational status. | Info blocks, guidance messages, search empty state accents. | Primary CTA, default link system, broad blue app shell. | Alert / Info Block, Search Result Card, Help Text. |
| Warm border `#E6DED1` | Light structural boundary. | Cards, panels, inputs, dividers, image frames. | Heavy outlines, dark-surface low-contrast borders, arbitrary one-off lines. | Panel, Feature Card, Form Field, Image frames, Footer divider. |

## 6. Typography System

- Heading font: Manrope or Plus Jakarta Sans, with Manrope preferred unless repo constraints favor existing font.
- Body font: Inter.
- Tone: calm, confident, readable, premium.
- Headings should feel clear and high-end, not futuristic.
- Body copy should prioritize readability.
- Fine print must remain readable and never low contrast.

| Role | Guidance |
| --- | --- |
| eyebrow | Short contextual label; restrained accent; useful, not decorative noise. |
| H1 | Manrope preferred; clear page identity; strong but not oversized on compact pages. |
| H2 | Section-level scanning anchor; consistent spacing; no hero-scale type inside dense surfaces. |
| H3/card heading | Compact, stable, readable card title; wraps without resizing cards unpredictably. |
| body copy | Inter; comfortable line height and measure; charcoal on light surfaces. |
| muted copy | Secondary but readable; never used for required labels or core instructions. |
| fine print | Smaller but legible; used for legal, caveats, review status, and package notes. |
| CTA labels | Short, direct, high contrast; distinguish primary/secondary without color alone. |
| form labels/help/errors | Labels stronger than help text; help text readable; errors clear and calm. |

## 7. Layout and Spacing

Future visual implementation tasks should use generous breathing room, constrained readable content width, calm section rhythm, alternating warm canvas / white surfaces / cream sections, mobile-first spacing discipline, no cramped panels, and no excessive dashboard density.

Page structure remains page-specific. This standard governs shared visual language and rhythm only.

## 8. Surface Rules

| Surface | Direction |
| --- | --- |
| page canvas | Warm white primary canvas using `#FAF8F4`. |
| white card surface | Clean `#FFFFFF` cards with warm borders and soft lift. |
| cream alternate section | `#F4F1EB` section alternation for calm rhythm. |
| elevated warm panel | `#FFFDF8` for premium grouped moments and form shells. |
| controlled dark navy band | `#18283B` only for hierarchy, nav/footer, Core, or selected high-contrast bands. |
| legal/review surface | Light, readable, minimally decorated, with strong link and fine-print contrast. |
| QR campaign surface | Light-canvas compatible, scan-first, phone-first, and visually compatible with WNYHS. |

Dark navy bands are allowed only when they improve contrast or hierarchy and must not dominate the page.

## 9. Component Style Rules

| Component group | Visual role | Surface/background | Border | Radius | Shadow/elevation | Typography | Accessibility requirement |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Top Navigation | Stable orientation and conversion entry. | Light or controlled trust navy; gold only for primary action. | Warm divider or subtle dark-surface divider. | 12px-18px when framed. | Minimal; no heavy app shell. | Compact Inter labels. | Visible focus, readable links, mobile tap targets. |
| Mobile Navigation | Mobile equivalent of global orientation. | Same family as top nav. | Subtle warm border. | 12px-18px. | Soft only. | Compact labels without clipping. | Tap targets, keyboard focus, no overflow. |
| Footer | Local identity and close path. | Controlled trust navy or approved quiet light footer. | Subtle divider. | Minimal unless framed. | None or soft. | Small Inter, readable muted text. | Link contrast and focus visible. |
| Hero | Premium first impression. | Warm canvas with light/elevated panel or controlled navy accent area. | Warm border where framed. | 18px for large surfaces. | Soft shadow only. | Manrope H1, Inter support copy. | Text readable without image dependence. |
| Page Intro | Compact page orientation. | Warm canvas/light surface. | Minimal. | 12px if framed. | None. | Clear H1/H2 hierarchy. | Heading order and contrast. |
| Section Header | Scanning anchor. | Unframed on section surface. | None. | None. | None. | Eyebrow/H2/support hierarchy. | Support copy contrast. |
| Final CTA | Closing action. | Elevated warm or controlled navy surface. | Warm border or dark-surface divider. | 18px. | Soft shadow. | Direct action copy. | Focus, mobile wrapping, no route changes. |
| Primary CTA | Main action. | Premium gold surface. | Gold-compatible border. | 999px. | Subtle lift on hover. | Short Inter label. | Visible focus, high contrast, stable disabled/loading. |
| Secondary CTA | Support action. | White/transparent. | Warm border. | 999px or 12px by context. | Minimal. | Inter action label. | Not color-only. |
| Text Link CTA | Lightweight action. | Transparent. | Underline/focus affordance. | None. | None. | Inter link text. | Underline or structural affordance; visible focus. |
| Phone CTA | Direct contact action. | Primary or secondary by context. | Matches action role. | 999px when button-like. | Subtle. | Highly legible label. | Mobile tap-friendly. |
| Panel | Logical grouping. | White, elevated warm, cream, or controlled navy. | Warm border. | 18px for large panel. | Soft only. | Contextual heading/body. | Contrast within panel. |
| Feature Card | Repeated explanation/navigation. | White or elevated warm. | Warm border. | 12px. | Soft card lift. | Card heading/body hierarchy. | Focus if clickable. |
| Tile | Compact item. | White or light surface. | Warm border. | 12px. | Minimal. | Short label. | Stable dimensions and tap targets. |
| Proof Card | Trust/example card. | White or warm elevated. | Warm border. | 12px. | Soft. | Conservative caption/body. | Source-safe caption and alt posture. |
| Search Result Card | Search item. | White card. | Warm border. | 12px. | Minimal. | Type label, title, summary, CTA. | Result links and focus visible. |
| Alert / Info Block | Guidance/status. | Semantic light surface. | Semantic border plus warm structure. | 12px. | None or minimal. | Short readable copy. | Status not color-only. |
| Core Panel | Platform foundation. | Elevated warm or controlled navy. | Warm or dark-surface border. | 18px. | Soft but stronger than cards. | Manrope heading, plain Inter. | Image text not sole meaning. |
| Package Tier Block | Starting-point/package context. | White/elevated warm review-safe card. | Warm border. | 12px. | Soft. | Caveat/status readable. | No pricing/package behavior changes. |
| Vault Tile | Custom/review tile. | Quiet white/elevated warm. | Warm border. | 12px. | Minimal. | Compact clear copy. | Caveat clarity. |
| Form Shell | Form context. | White/elevated warm. | Warm border. | 18px. | Soft. | Clear form title/support. | Labels/status readable; no payload changes. |
| Form Field | Input/control row. | White control surface. | Warm border; semantic state border. | 12px-14px. | None. | Readable input text. | Visible label/focus/error. |
| Form Label | Field label. | N/A. | N/A. | N/A. | N/A. | Stronger than help text. | Visible association. |
| Help Text | Field support. | N/A. | N/A. | N/A. | N/A. | Muted but readable. | Contrast on all surfaces. |
| Error Text | Error explanation. | Semantic error surface only when grouped. | Error border if framed. | 12px if block. | None. | Calm, direct Inter. | Associated with field or form status. |
| Select Field | Choice control. | White control surface. | Warm/focus/error border. | 12px-14px. | None. | Readable selected value. | Keyboard and focus visibility. |
| Textarea Field | Multi-line control. | White control surface. | Warm/focus/error border. | 12px-14px. | None. | Readable input text. | Stable size and label. |
| Submit Button | Form action. | Premium gold or governed primary. | Gold-compatible. | 999px. | Subtle. | Clear submit label. | Disabled/loading/error adjacency visible. |
| Validation states | Form and status feedback. | Success/warning/error/info semantic surfaces. | Semantic border. | 12px. | None. | Readable status copy. | Text and structure, not color alone. |
| Hover state | Pointer feedback. | Slight shade or lift. | Border may strengthen subtly. | No change. | Subtle lift only. | No text resizing. | No layout shift. |
| Focus state | Keyboard orientation. | Visible ring. | Strong focus outline/ring. | No change. | Optional focus shadow. | No copy change. | Must be obvious on all interactive components. |
| Active state | Pressed/current feedback. | Slight darken or inset state. | Stable. | No change. | No jump. | Stable label. | Not color-only. |
| Disabled state | Unavailable state. | Muted but readable. | Muted border. | No change. | None. | Legible label. | Still understandable. |
| Loading state | In-progress state. | Stable neutral or primary-compatible. | Stable. | No change. | None. | Label/status remains available. | No layout shift or hidden status. |
| Success state | Positive confirmation. | Light success surface/accent. | Success border. | 12px. | None. | Clear confirmation text. | No unsupported outcome claims. |
| Warning state | Calm caution. | Light warning surface/accent. | Warning border. | 12px. | None. | Readable caution text. | Not urgency marketing. |
| Error state | Correction path. | Light error surface/accent. | Error border. | 12px. | None. | Direct error text. | Associated, high contrast. |

## 10. Radius, Borders, Shadows, Motion

- Standard radius: 12px.
- Large surface radius: 18px.
- Pill button radius: 999px.
- Warm border: `#E6DED1`.
- Soft shadow: `0 10px 35px rgba(0, 0, 0, 0.06)`.
- Hover lift: subtle only.
- Motion duration: 100ms-200ms.
- No bounce/spin/parallax overload.

## 11. Button Rules

Primary CTA:

- premium gold surface
- dark charcoal/navy readable text
- pill radius
- strong but calm
- hover: slight darken and subtle lift
- focus: visible ring

Secondary CTA:

- white or transparent surface
- trust navy or charcoal text
- warm border
- no competition with primary CTA

Text Link CTA:

- governed accent
- underline/focus affordance
- never color-only

Phone CTA:

- highly legible
- mobile tap-friendly
- may use primary or secondary treatment depending on context

## 12. Form Rules

Forms should use large readable inputs, comfortable field spacing, 12px-14px radius, strong focus ring, clear labels, readable help text, readable error text, success/warning/error states, no invisible text, no low-contrast placeholder reliance, and no runtime/payload behavior changes under this visual standard.

## 13. Image Boundary

This standard does not approve or replace production images.

Images remain a separate future workstream.

Image production will require:

1. image role
2. prompt
3. generated candidates
4. operator approval
5. governed filename/location
6. Codex wiring task

Image philosophy only:

- real homes
- warm light
- premium residential
- technology visible but secondary
- safety without fear
- privacy and comfort
- no hackers
- no blue overlays
- no glowing circuits
- no cyberpunk
- no generic stock smiles

## 14. Content Boundary

Visual modernization must not change page copy.

Existing headlines, body copy, CTA wording, pricing, package text, proof text, and SEO copy remain unchanged unless a later content-specific task authorizes it.

Visual implementation tasks must preserve copy verbatim except for accessibility-only attributes explicitly authorized by task.

## 15. Implementation Sequencing

Future sequence:

1. DESIGN004 - WNYHS Component Catalog
2. VISUALREV001 - Regenerate Proposed Boards using DESIGN003 Light Canvas standard
3. VISUALFREEZE002 - Operator Visual Freeze Decision Record
4. VISPARITY008 - Implement Global Tokens and Base Visual System
5. VISPARITY009 - Implement Homepage / First Public Route
6. VISPARITY010 - Visual QA / Playwright Baseline
7. page-family rollout tasks

## 16. Non-Authority Statement

This document records the approved visual language direction.

This document does not implement the design.

This document does not approve Visual Freeze.

This document does not change production pages.

This document does not authorize copy changes.

This document does not authorize image replacement.

This document does not alter runtime behavior.

It does not edit source code, route files, CSS, tokens, UI components, public image assets, runtime/API files, HubSpot behavior, Stripe/payment behavior, scheduling behavior, Cloudflare config, dependencies, package-lock, visual boards, Playwright tests, hooks, QA automation, or Active KAOS Rules.

## 17. Scope Compliance

One bounded task only: DESIGN003.

MTR is treated as a tracking board, not a gate.

Allowed files only:

- `docs/design-system/DESIGN003_WNYHS_LIGHT_CANVAS_VISUAL_LANGUAGE_STANDARD_REV01.md`
- `docs/design-system/visual-parity/README.md`
- `docs/system/master-task-register.md`

Forbidden systems and surfaces remain out of scope:

- no source/runtime/UI files changed
- no CSS/tokens/routes changed
- no public image assets changed
- no page copy changed
- no headings changed
- no CTA wording changed
- no pricing/package wording changed
- no visual boards generated
- no images generated
- no Visual Freeze approved
- no implementation approved
- no Active KAOS Rule created
- no merge performed

## 18. Recommended Next Task

Recommended next task:

`DESIGN004 - WNYHS Component Catalog`

DESIGN004 should convert this approved light-canvas visual language into a docs-only component catalog before any source, CSS, token, route, image, runtime, or protected-system implementation task begins.
