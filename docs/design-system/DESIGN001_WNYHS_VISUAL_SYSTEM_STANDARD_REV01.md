# DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01

Status: Draft standard for operator review
Task: DESIGN001-A - Extract Homepage Visual System Standard
Customer-facing: No
Implementation authority: No

---

## Purpose

This document defines the WNY Home Security visual design system standard extracted from the current active `/home-security` homepage implementation.

The goal is to preserve the homepage's current professional visual system so future pages can align to it without inventing a separate design language.

This standard is not a redesign. It documents what the current homepage code already does.

---

## Authority Model

Primary extraction source:

- Current active code and active semantic tokens.

Primary implementation surfaces inspected:

- `src/pages/HomeSecurity.tsx`
- `src/components/homeSecurity/HomeSecurityLanding.tsx`
- `src/components/homeSecurity/WnyhsMarketingLayout.tsx`
- `src/components/homeSecurity/WnyhsTopNav.tsx`
- `src/components/homeSecurity/WnyhsSiteFooter.tsx`
- `src/styles/homeSecurityPremium.css`
- `src/index.css`

This document does not authorize implementation by itself.

Future implementation tasks must remain bounded and should reuse active classes, tokens, and components where practical. If a visual rule currently exists only as a homepage-specific class, a future bounded task may promote that rule into a shared reusable class/component rather than duplicating CSS.

---

## Non-Authoritative Older-Doc Handling

Older design, brand, token, and layout documents were reviewed as reference only.

Reference documents reviewed:

- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/brand/visual_system_rev01.md`
- `docs/specs/visual-brand-system-rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`

These documents are not treated as the source of truth for DESIGN001-A unless they match the current homepage implementation. Where older docs differ from the current homepage, the active homepage code controls this standard.

---

## Extraction Source Summary

The active homepage route is `/home-security`.

Route composition:

- `HomeSecurity.tsx` wraps the page in `WnyhsMarketingLayout`.
- `WnyhsMarketingLayout` renders `WnyhsTopNav`, a constrained `.container.wnyhs-page-layout-container` body, and `WnyhsSiteFooter`.
- `HomeSecurityLanding.tsx` renders the homepage content inside `.hs-premium-shell.hs-premium-shell--home-trust`.
- Homepage-specific visual rules live primarily in `homeSecurityPremium.css`.
- Core semantic tokens and global button/container rules live in `src/index.css`.

Note: the layout container class in code is `.wnyhs-page-layout-container`.

---

## Current Homepage-Derived Standards

### 1. Page Shell / Canvas

The page is a dark, premium, constrained marketing canvas.

Current shell standards:

- Overall page layout: `.wnyhs-page-layout`
  - `display: grid`
  - `gap: 1.5rem`
  - `padding: 1.5rem 0 3rem`
- Body container: `.wnyhs-page-layout-container`
  - `display: grid`
  - `gap: 2rem`
- Marketing max width: `.wnyhs-page-layout--marketing .wnyhs-page-layout-container`
  - `max-width: 1120px`
- Current homepage shell: `.hs-premium-shell--home-trust`
  - current later rule sets `max-width: 1080px`
  - `margin: 0 auto`
  - `gap: 1.6rem`
- Base shell: `.hs-premium-shell`
  - `display: flex`
  - `flex-direction: column`
  - `gap: 2rem`
  - `padding: 2rem 1.75rem 2.75rem`
  - dark radial-gradient over `var(--hs-premium-bg)`
  - `border-radius: 24px`
  - `border: 1px solid var(--hs-premium-border)`
  - `box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35)`

Homepage standard:

- Use one constrained premium shell, not full-width disconnected sections.
- Keep vertical rhythm compact and deliberate: major homepage gaps are usually `1.5rem` to `2rem`; section/card internal gaps are usually `0.8rem` to `1.25rem`.
- Do not create app-shell or dashboard-style framing for public marketing pages.

### 2. Typography

Active global typography:

- Root font: `Inter`, system UI fallback.
- Heading font token: `--wny-font-heading: 'Oswald', 'Inter', system-ui, sans-serif`.
- Heading rule: `h1`-`h6` use `var(--kaec-font-heading)`, `letter-spacing: 0.015em`, `line-height: 1.2`.
- Body line height: `1.7`.

Homepage type standards:

- Hero eyebrow: `.hs-premium-eyebrow`
  - uppercase
  - small text
  - accent color via `var(--hs-premium-accent)`
  - used for short positioning labels such as `Protect What Matters`
- Hero H1:
  - base `.hs-premium-hero-content h1`: `font-size: clamp(2.1rem, 4vw, 3.2rem)`, `max-width: 18ch`, `line-height: 1.08`
  - active homepage split override: `font-size: clamp(1.95rem, 3.55vw, 2.8rem)`
- Hero body copy:
  - `.hs-premium-hero-subhead`
  - muted text using `var(--hs-premium-muted)`
  - active homepage split override: `max-width: 60ch`
- Section heading:
  - section headers use `.hs-premium-section-header`
  - H2s are concise and not oversized
  - supporting paragraphs use `var(--hs-premium-muted)` with `margin: 0.35rem 0 0`
- Card heading:
  - card H3s are short, direct, and reset to `margin: 0`
  - package preview card H3s are grouped with body copy and value row
- Card body:
  - muted text through `var(--hs-premium-muted)`
  - short paragraphs; no large display text inside compact cards
- Small/meta text:
  - price/status labels use uppercase, `font-size` around `0.72rem` to `0.78rem`, bold weight, and modest letter spacing (`0.08em`)

### 3. Color / Token Usage

Current homepage token aliases in `homeSecurityPremium.css`:

| Alias | Maps To | Use |
|---|---|---|
| `--hs-premium-bg` | `var(--background)` | page/shell background |
| `--hs-premium-panel` | `var(--card)` | panels |
| `--hs-premium-border` | `var(--border)` | panel/card borders |
| `--hs-premium-muted` | `var(--muted-foreground)` | body/support text |
| `--hs-premium-accent` | `var(--primary)` | gold accent/active states |

Current semantic token source in `src/index.css`:

| Token | Current Value |
|---|---|
| `--background` | `var(--wny-black-900)` |
| `--foreground` | `var(--wny-text-primary)` |
| `--card` | `var(--wny-steel-800)` |
| `--card-foreground` | `var(--wny-text-primary)` |
| `--primary` | `var(--wny-gold-500)` |
| `--primary-foreground` | `var(--wny-black-950)` |
| `--secondary` | `var(--wny-steel-700)` |
| `--secondary-foreground` | `var(--wny-text-secondary)` |
| `--muted` | `var(--wny-steel-900)` |
| `--muted-foreground` | `var(--wny-text-muted)` |
| `--accent` | `var(--wny-edge-400)` |
| `--accent-foreground` | `var(--wny-black-900)` |
| `--border` | `color-mix(in srgb, var(--wny-steel-500) 65%, transparent)` |
| `--ring` | `var(--wny-gold-450)` |

Current base palette values:

| Base Token | Current Value |
|---|---|
| `--wny-black-950` | `#050404` |
| `--wny-black-900` | `#080706` |
| `--wny-black-850` | `#0b0803` |
| `--wny-black-800` | `#0f0d0a` |
| `--wny-steel-900` | `#111111` |
| `--wny-steel-800` | `#1a1815` |
| `--wny-steel-700` | `#2a2722` |
| `--wny-steel-600` | `#3a3630` |
| `--wny-steel-500` | `#595653` |
| `--wny-gold-500` | `#d79624` |
| `--wny-gold-450` | `#d99f25` |
| `--wny-gold-400` | `#d2a662` |
| `--wny-text-primary` | `#f2edde` |
| `--wny-text-secondary` | `#d6d5d4` |
| `--wny-text-muted` | `#a09f9d` |

Standard:

- Future pages should use semantic tokens or existing homepage aliases, not new hardcoded colors.
- Existing raw values in current code should be documented as current behavior, not expanded.
- If a raw value is needed repeatedly in future work, tokenization should happen in a separate bounded task.

### 4. Panels / Containers

Hero panel:

- `.hs-premium-hero--split`
  - `grid-template-columns: minmax(0, 1fr) minmax(300px, 460px)`
  - `gap: 1.2rem`
  - `border-radius: 20px`
  - `padding: 1.25rem`
  - `background: linear-gradient(135deg, rgba(7, 10, 14, 0.95), rgba(14, 20, 27, 0.92))`
  - `border: 1px solid var(--hs-premium-border)`

Section panels:

- `.hs-premium-section-panel`
  - `display: grid`
  - `gap: 0.8rem`
  - `padding: 1.3rem`
  - `border-radius: 18px`
  - `border: 1px solid var(--hs-premium-border)`
  - `background: color-mix(in srgb, var(--card) 88%, transparent)`

Trust panel override:

- `.hs-premium-trust-panel`
  - `gap: 1rem`
  - background later overridden to `color-mix(in srgb, var(--card) 84%, transparent)`

Final CTA panel:

- `.hs-premium-final-cta-panel`
  - section-panel base
  - `justify-items: center`
  - `text-align: center`
  - `gap: 1rem`

Standard:

- Use one primary panel per section.
- Avoid excessive nested cards inside cards.
- Use subtle borders and dark graphite panels; avoid bright or high-saturation surfaces.

### 5. Cards / Tiles

Problem cards:

- `.hs-premium-problem-grid`
  - desktop: `repeat(3, minmax(0, 1fr))`
  - `gap: 0.85rem`
- `.hs-premium-problem-card`
  - `display: grid`
  - `gap: 0.45rem`
  - `padding: 1rem`
  - `border-radius: 14px`
  - mixed semantic border and background

Solution/package preview cards:

- `.hs-premium-package-preview-grid`
  - desktop: `repeat(3, minmax(0, 1fr))`
  - `gap: 0.8rem`
  - `align-items: stretch`
- `.hs-premium-package-preview-card`
  - `display: grid`
  - `grid-template-rows: auto 1fr`
  - `overflow: hidden`
  - `border-radius: 14px`
  - mixed semantic border and background
- `.hs-premium-package-preview-card-copy`
  - `display: grid`
  - `grid-template-rows: auto 1fr auto`
  - keeps title/body/value row balanced

Trust cards:

- `.hs-premium-trust-card-grid`
  - desktop: `repeat(2, minmax(0, 1fr))`
  - `gap: 0.85rem`
- `.hs-premium-trust-card`
  - `display: grid`
  - `gap: 0.45rem`
  - `padding: 1rem`
  - `border-radius: 14px`
  - subtle mixed semantic border/background

Process cards:

- `.hs-premium-process-timeline`
  - desktop: `repeat(4, minmax(0, 1fr))`
  - `gap: 0.8rem`
  - list reset
- `.hs-premium-process-timeline li`
  - `padding: 0.95rem`
  - `border-radius: 14px`
  - `border: 1px solid var(--hs-premium-border)`
  - `background: rgba(15, 19, 24, 0.82)`

Standard:

- Cards should be equal-height where practical through grid layout.
- Cards should use 14px radius for repeated tiles and 18px+ radius for larger panels.
- Mobile should stack cards to one column.

### 6. Buttons / CTAs

Global button base in `src/index.css`:

- `.btn`
  - inline-flex center alignment
  - `padding: 0.75rem 1.3rem`
  - `border-radius: 999px`
  - `font-weight: 600`
  - transition for transform, shadow, background, border, and color

Primary CTA:

- `.btn-primary`
  - current code uses blue gradient:
    `linear-gradient(135deg, rgba(22, 163, 238, 0.95), rgba(76, 194, 255, 0.95))`
  - text color: `#07121c`
  - shadow: `0 18px 40px rgba(19, 134, 206, 0.35)`
  - hover raises by `translateY(-3px)` and increases shadow

Secondary CTA:

- `.btn-secondary`
  - `border: 1px solid rgba(120, 203, 255, 0.45)`
  - `background: rgba(12, 18, 28, 0.55)`
  - `color: var(--foreground)`
  - `backdrop-filter: blur(8px)`
  - hover raises by `translateY(-2px)`

Homepage CTA layouts:

- `.hs-premium-hero-actions`
  - flex row
  - `gap: 0.75rem`
  - wraps
  - `margin-top: 1rem`
- `.hs-premium-final-cta-actions`
  - centered flex row
  - wraps
  - `gap: 0.75rem`

Standard:

- Primary CTA is visually dominant.
- Secondary CTA remains same height family but lower visual weight.
- CTA rows should wrap gracefully; on mobile hero CTAs become full width.
- Existing blue CTA is current code behavior; do not introduce additional blues without tokenization/review.

### 7. Pills / Badges

Hero proof strip:

- `.hs-premium-hero-proof-strip`
  - flex wrap
  - `gap: 0.5rem`
  - `margin-top: 0.95rem`
- `.hs-premium-hero-proof-strip span`
  - `padding: 0.35rem 0.65rem`
  - `border-radius: 999px`
  - `border: 1px solid var(--hs-premium-border)`
  - semantic mixed background
  - muted/foreground mixed text
  - `font-size: 0.78rem`
  - `font-weight: 700`

Trust badges:

- `.hs-premium-trust-badges span`
  - `font-size: 0.72rem`
  - uppercase
  - `letter-spacing: 0.08em`
  - border pill treatment

Package value row:

- `.hs-premium-package-preview-value-row`
  - two equal columns
  - top border separator
- `.hs-premium-package-preview-price strong`
  - accent color
  - `font-size: 1.55rem`
- `.hs-premium-package-preview-status`
  - left border separator
  - uppercase small text
  - accent/foreground mixed color

Standard:

- Pills are small, rounded, and supportive.
- Do not use large badge blocks that compete with headings or CTAs.

### 8. Image Treatment

Hero image:

- Source: `/brand/heros/HomePageHero.png`
- `.hs-premium-hero-media img`
  - `width: 100%`
  - `height: 100%`
  - `min-height: 260px`
  - `object-fit: cover`
  - `object-position: right center`
  - `border-radius: 16px`
  - `border: 1px solid var(--hs-premium-border)`

Solution card images:

- `.hs-premium-package-preview-card img`
  - `width: 100%`
  - desktop `aspect-ratio: 4 / 3`
  - `object-fit: cover`
  - mobile/tablet under 860px changes to `aspect-ratio: 16 / 9`

Standard:

- Images should be calm, residential, realistic, and clearly framed.
- Use border/radius treatment consistent with homepage.
- Do not imply illustrative or generated images are real completed customer installs.
- Do not introduce large unoptimized assets in implementation tasks.

### 9. Layout Patterns

Hero two-column pattern:

- Text first, visual second.
- Desktop grid: `minmax(0, 1fr) minmax(300px, 460px)`.
- Gap: `1.2rem`.
- Hero image is framed inside the same hero panel.

Section title + card grid pattern:

- Use `.hs-premium-section-panel`.
- Place `.hs-premium-section-header` first.
- Follow with a grid of repeated cards.

Problem card row:

- Three-card desktop row.
- Two columns under 980px.
- One column under 760px.

Process timeline:

- Four-card desktop row.
- Two columns under 980px.
- One column under 760px.

CTA section pattern:

- Centered heading/body.
- CTA row beneath.
- Optional `OR` meta text is small, uppercase-feeling, and muted.

### 10. Responsive Rules

Desktop:

- Shell max width is approximately 1080px to 1120px depending on layer.
- Hero is two-column.
- Problem grid uses three columns.
- Process timeline uses four columns.
- Trust grid uses two columns.
- Solution preview grid uses three columns.

Tablet:

- At max-width 980px, problem grid and process timeline reduce to two columns.
- Calm CTA grid collapses to one column.

Mobile:

- At max-width 760px, hero, our-work strip, trust strip, problem grid, trust grid, and process timeline become one column.
- Hero action buttons become full width.
- Shell padding reduces.
- Footer stacks and centers under 900px.
- Solution preview cards stack under 860px and use wider `16 / 9` image ratio.

---

## Token / Class Reference Table

| Element | Current Classes / Tokens | Current Role |
|---|---|---|
| Marketing layout | `.wnyhs-page-layout`, `.wnyhs-page-layout--marketing`, `.wnyhs-page-layout-container` | overall page canvas and width |
| Homepage shell | `.hs-premium-shell`, `.hs-premium-shell--home-trust` | dark premium content shell |
| Hero | `.hs-premium-hero`, `.hs-premium-hero--split`, `.hs-premium-hero-content` | two-column hero composition |
| Hero H1 | `.hs-premium-hero-content h1` | restrained display headline |
| Hero body | `.hs-premium-hero-subhead` | muted supporting copy |
| Eyebrow | `.hs-premium-eyebrow` | small accent label |
| Hero proof pills | `.hs-premium-hero-proof-strip span` | trust/ownership/support reinforcement |
| Section panel | `.hs-premium-section-panel` | repeated public-page section container |
| Section header | `.hs-premium-section-header` | section title + supporting copy |
| Problem cards | `.hs-premium-problem-grid`, `.hs-premium-problem-card` | three-up homeowner concern cards |
| Process cards | `.hs-premium-process-timeline li` | four-step process cards |
| Solution preview cards | `.hs-premium-package-preview-grid`, `.hs-premium-package-preview-card` | image/title/body/value row cards |
| Trust cards | `.hs-premium-trust-card-grid`, `.hs-premium-trust-card` | repeated trust proof cards |
| Final CTA | `.hs-premium-final-cta-panel`, `.hs-premium-final-cta-actions` | low-pressure conversion block |
| Buttons | `.btn`, `.btn-primary`, `.btn-secondary` | global CTA treatment |
| Accent | `var(--hs-premium-accent)`, `var(--primary)` | gold/accent emphasis |
| Muted text | `var(--hs-premium-muted)`, `var(--muted-foreground)` | supporting body text |
| Borders | `var(--hs-premium-border)`, `var(--border)` | subtle structure |

---

## Existing Raw Values To Tokenize Later

The current active code includes raw values. They are documented here as current behavior, not as authorization to add more.

Candidate raw values for future tokenization:

- Nav/panel dark overlay values:
  - `rgba(9, 12, 16, 0.88)`
  - `rgba(9, 12, 16, 0.95)`
  - `rgba(16, 21, 27, 0.82)`
  - `rgba(15, 19, 24, 0.82)`
- White border overlays:
  - `rgba(255, 255, 255, 0.12)`
  - `rgba(255, 255, 255, 0.08)`
  - `rgba(255, 255, 255, 0.06)`
- Shadow values:
  - `0 14px 36px rgba(0, 0, 0, 0.32)`
  - `0 30px 60px rgba(0, 0, 0, 0.35)`
- Current blue CTA values:
  - `rgba(22, 163, 238, 0.95)`
  - `rgba(76, 194, 255, 0.95)`
  - `#07121c`
  - `rgba(19, 134, 206, 0.35)`
  - `rgba(120, 203, 255, 0.45)`
- Isolated fallback/mix color:
  - `#9ca3af` in package tier color mixing.

Future tokenization should happen only in a bounded implementation task and should not change visual output without review.

---

## Allowed Reuse Patterns

Future pages may reuse:

- `.wnyhs-page-layout--marketing` width and page structure.
- `.hs-premium-shell` or a shared equivalent when a page needs the homepage canvas.
- `.hs-premium-section-panel` for primary section containers.
- `.hs-premium-section-header` for concise section intros.
- `.hs-premium-hero--split` pattern when an image is appropriate and does not misrepresent real work.
- `.hs-premium-problem-card`, `.hs-premium-trust-card`, and `.hs-premium-package-preview-card` treatments when cards have comparable content density.
- `.hs-premium-hero-proof-strip` treatment for short trust/positioning pills.
- Global `.btn`, `.btn-primary`, and `.btn-secondary` hierarchy.

If reuse requires decoupling homepage-specific class names, create shared names/components in a future bounded task rather than duplicating declarations.

---

## Forbidden Visual Drift Patterns

Do not introduce:

- A separate color palette for solution pages.
- New hardcoded colors when existing semantic tokens/classes can express the design.
- Blue-dominant visual systems beyond the current CTA behavior.
- Beige, sandy, all-purple, all-blue, or generic SaaS themes.
- Large decorative gradients, floating orbs, bokeh blobs, or unrelated illustration systems.
- Nested card-in-card layouts without a real structural need.
- Oversized headline treatment inside compact cards.
- Fake install imagery, fake before/after visuals, fake customer-story imagery, or panic-based visuals.
- Full redesign of navigation/footer/global layout under this standard.

---

## Future Implementation Guidance

DESIGN001-A is extraction only.

A future implementation task may:

- Apply the reviewed standard to solution pages.
- Promote homepage-specific visual patterns into reusable classes or components.
- Replace one-off solution-page styling with shared standard classes.
- Tokenize existing raw homepage values if separately approved.

A future implementation task must:

- Name exact target pages/files.
- Avoid protected runtime systems.
- Avoid global navigation redesign unless explicitly authorized.
- Avoid changing semantic token definitions unless tokenization is explicitly in scope.
- Run implementation validation appropriate to touched files.

---

## Review / Adoption Workflow

1. Review this document against the current `/home-security` homepage.
2. Confirm whether the extracted visual system is approved as the target for solution pages.
3. Decide whether any raw values should be tokenized before reuse.
4. Activate a separate bounded implementation task, such as DESIGN001-B, only after approval.
5. Apply the standard in code through reuse or carefully promoted shared classes/components.
6. Validate visually and technically before merging implementation work.

---

## DESIGN001-A Completion Boundary

DESIGN001-A creates this standard and registers it.

DESIGN001-A does not:

- Change public website files.
- Change CSS implementation.
- Change React/TSX implementation.
- Change token definitions.
- Change routes.
- Change protected runtime systems.
- Bump the visible site version.
- Apply this standard to solution pages.
