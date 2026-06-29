# VISPARITY004 CSS Token Mapping and Gap Register REV01

Task ID: VISPARITY004
Task Name: CSS Token Mapping and Gap Register
Status: Token mapping only
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## Boundary

This document maps canonical VISPARITY003 component names to semantic token categories, current token/source evidence, and token gaps for later bounded visual parity work.

This is token mapping only.
It does not change token values.
It does not approve new token values.
It does not approve final CSS values unless already governed by existing repository standards.
It does not change implementation.
It does not edit CSS/tokens/source files.
It does not edit route files, UI components, images, assets, sitemap, robots, runtime/API files, dependencies, or package-lock.
It does not activate hooks or QA checks.
It does not create an Active KAOS Rule.

Protected systems remain out of scope:

- HubSpot / CRM
- Stripe/payment
- Scheduling/calendar
- Lead Signal and requestId
- QRLanding attribution/runtime behavior
- Resend/email runtime
- Cloudflare configuration
- Secrets and environment values

## Source Inputs

Primary VISPARITY inputs:

- `docs/design-system/visual-parity/VISPARITY001_PUBLIC_ROUTE_ELEMENT_DISCOVERY_REV01.md`
- `docs/design-system/visual-parity/VISPARITY002_PUBLIC_MARKETING_VISUAL_PARITY_TARGET_MATRIX_REV01.md`
- `docs/design-system/visual-parity/VISPARITY003_VISUAL_COMPONENT_NAMING_STANDARD_REV01.md`

Governing visual/token docs:

- `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- `docs/brand/visual_system_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`

Read-only source evidence:

- `src/styles/wnyhsVisualGovernance.css`
- `src/styles/homeSecurityPremium.css`
- `src/styles/qrLanding.css`
- `src/styles/canonicalEstimateForm.css`
- `src/index.css`
- `src/newsite/theme/tokens.css`

## Token source inventory

| Source | Token or vocabulary evidence | Current role | Mapping note |
| --- | --- | --- | --- |
| `src/styles/wnyhsVisualGovernance.css` | `--wnyhs-canvas`, `--wnyhs-surface`, `--wnyhs-surface-raised`, `--wnyhs-surface-soft`, `--wnyhs-ink`, `--wnyhs-ink-secondary`, `--wnyhs-ink-muted`, `--wnyhs-border`, `--wnyhs-border-strong`, `--wnyhs-charcoal`, `--wnyhs-gold`, `--wnyhs-success`, `--wnyhs-danger`, `--wnyhs-radius-*`, `--wnyhs-shadow-*`, `--wnyhs-focus`, dark-surface aliases | Governed WNYHS public visual primitive source under DESIGN002 REV02 and PAGE_TOKEN_COMPLIANCE_GATE | Primary evidence for future public marketing token migration. Current values are governed where already defined, but this register does not change or approve new values. |
| `src/styles/wnyhsVisualGovernance.css` | `.wnyhs-page`, `.wnyhs-shell`, `.wnyhs-section`, `.wnyhs-card`, `.wnyhs-button`, `.wnyhs-footer`, search/contact/category primitives | Current governed public primitive classes | Likely future mapping target for canonical VISPARITY003 components. |
| `src/index.css` | `--background`, `--foreground`, `--card`, `--primary`, `--secondary`, `--muted-foreground`, `--border`, `--input`, `--ring`, `--destructive`, `--success`, `--warning` | Older/global semantic token system, still used by QR, forms, and broad global styles | Requires mapping from generic semantic tokens into WNYHS public semantic categories before migration. |
| `src/index.css` | `--wny-*`, `--color-*`, `--kaec-*`, raw hex/rgba, `.btn`, `.card`, package selectors | Mixed legacy, global, package, print, operator, and WNYHS source evidence | Contains hardcoded colors and old vocabularies. Future remediation must be scoped carefully by route/page family. |
| `src/styles/homeSecurityPremium.css` | `--hs-premium-bg`, `--hs-premium-panel`, `--hs-premium-border`, `--hs-premium-muted`, `--hs-premium-accent`, `--hs-home-*`, `.hs-premium-*`, `.hs-home-*`, `.wnyhs-top-nav` | Homepage/category/solution/package visual lineage and aliases | Some aliases map to global tokens; newer home-redesign aliases map to `--wnyhs-*`. Needs staged migration notes, not direct class renaming. |
| `src/styles/qrLanding.css` | `.qr-*`, `--background`, `--foreground`, `--card`, `--border`, `--primary`, `--secondary`, `--muted-foreground`, `--destructive` | QR campaign style layer | Token-referenced but not fully aligned to WNYHS public primitive names. QR source/payload behavior is protected and out of scope. |
| `src/styles/canonicalEstimateForm.css` | `.estimate-*`, `.qr-section`, `.qr-choice`, `--card`, `--border`, `--secondary`, `--foreground`, `--primary`, focus box shadows | Contact/support/QR estimate form control styling | Form field readability, focus, helper/error, and status tokens need a future bounded audit before implementation. |
| `src/newsite/theme/tokens.css` | `--ns-*` font, radius, spacing, shadow, surface, border, text, accent, nav tokens | Prototype/newsite token vocabulary | Evidence of separate prototype vocabulary. Not a public WNYHS token source for this task. |
| `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md` | Warm off-white canvas, light surfaces, charcoal emphasis panels, gold/black primary CTA, charcoal/outline secondary CTA, Inter/Manrope | Current working visual standard | Governs target posture for public marketing visual token mapping. |
| `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md` | Public page token compliance gate, required WNYHS primitive preference, forbidden visual drift | Public page gate | Future implementation tasks must answer compliance questions; VISPARITY004 does not implement them. |
| `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md` | Homepage-derived dark premium standard, `hs-premium` aliases, raw values to tokenize later | Historical/current extraction evidence | Useful for drift/gap evidence. DESIGN002 REV02 is the newer token direction. |
| `docs/specs/qr_funnel_standards_rev01.md` | QR reduced nav, QR form protection, visual layout allowed only when scoped | QR governance | QR visual mapping must preserve source tracking and form behavior. |
| `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md` | Category image hierarchy, no raw color drift, token-governed styling, Core panel behavior | Category/image visual standard | Category image/frame tokens and dashboard/mobile proof legibility remain future gaps. |

Known mixed vocabularies:

- `wnyhs`
- `hs-premium`
- `hs-home`
- `qr`
- `btn`
- `card`
- `panel`
- `kaec`
- `ns`
- generic semantic tokens such as `background`, `card`, `primary`, `secondary`, `muted-foreground`, `border`, and `ring`

## Semantic token category model

This model defines target categories, not final values.

| Semantic token category | Purpose | Current evidence | Known gap or ambiguity |
| --- | --- | --- | --- |
| canvas/background | Page canvas and outer shell background | `--wnyhs-canvas`, `--background`, `--hs-premium-bg`, `--ns-bg` | Light WNYHS public canvas and older dark global canvas coexist. |
| surface/panel | General section and grouped surface background | `--wnyhs-surface`, `--wnyhs-surface-raised`, `--card`, `--hs-premium-panel`, `.qr-panel` | Need clear mapping for light public panels, dark emphasis panels, campaign panels, and form panels. |
| elevated/card | Repeated cards, tiles, result cards, gallery cards | `.wnyhs-card`, `--wnyhs-shadow-card`, `.card`, `.hs-premium-*card`, `.qr-next-card` | Duplicated card systems and radii remain. |
| text/default | Main foreground text | `--wnyhs-ink`, `--foreground`, `--wny-text-primary`, `--ns-text` | Dark-surface/inverse text mapping must stay explicit. |
| text/muted | Supporting body, captions, helper text | `--wnyhs-ink-muted`, `--wnyhs-ink-secondary`, `--muted-foreground`, `--hs-premium-muted` | Text contrast/readability gaps need future visual QA. |
| text/inverse | Text on charcoal/dark surfaces | `--wnyhs-dark-text`, `--wnyhs-dark-muted`, `--foreground` on dark global surfaces | Inverse text tokens are partial and need category-specific mapping for cards, footer, QR, and Core panels. |
| accent | Brand emphasis, eyebrows, pills, active state | `--wnyhs-gold`, `--wnyhs-gold-strong`, `--primary`, `--hs-premium-accent` | Gold is governed; old blue/cyan emphasis in global/package styles needs gap tracking. |
| action/primary | Primary CTA and submit surface | `.wnyhs-button--primary`, `.btn-primary`, `.qr-cta`, `.estimate-submit` | Duplicated button systems and old primary CTA values need future migration. |
| action/secondary | Secondary CTA, outline buttons, phone links | `.wnyhs-button--secondary`, `.btn-secondary`, top-nav phone links | Link/button affordance and contrast need unified mapping. |
| border | Section, card, field, image, footer boundaries | `--wnyhs-border`, `--wnyhs-border-strong`, `--border`, `--hs-premium-border`, `--kaec-border` | Many color-mix and rgba borders remain. |
| shadow | Surface lift and hover states | `--wnyhs-shadow-soft`, `--wnyhs-shadow-card`, `--kaec-shadow`, raw box shadows | Shadow tokens are partial; hover/focus shadow systems differ. |
| radius | Shell/card/media/pill radii | `--wnyhs-radius-shell`, `--wnyhs-radius-card`, `--wnyhs-radius-media`, `--ns-radius-*`, raw `999px` | Need role-based radius mapping, especially form/control and image/frame. |
| spacing | Shell, section, grid, card, form rhythm | CSS gaps/padding, `--ns-spacing-*` in prototype only | Public WNYHS spacing tokens are not formalized as reusable custom properties. |
| typography | Body, heading, UI, labels, legal text | `--wnyhs-font-body`, `--wnyhs-font-heading`, `--wny-font-heading`, `--ns-font-*` | Inter/Manrope is governed; older/prototype stacks and local type scales need mapping. |
| focus | Keyboard focus and active interactive states | `--wnyhs-focus`, `--ring`, `.btn:focus-visible`, QR/form focus shadows | Focus state consistency is incomplete across nav, cards, forms, QR, and legacy buttons. |
| form/control | Input/select/textarea, labels, helper/error, choice controls | `.form`, `.estimate-field`, `.qr-landing input`, `--input`, `--destructive` | Form field readability tokens need explicit public mapping. |
| status/info/success/warning/error | Info blocks, validation, empty state, error/success states | `--wnyhs-success`, `--wnyhs-danger`, `--success`, `--warning`, `--destructive` | Missing info/warning/success/error surface and border category mapping for public pages. |
| image/frame | Hero, card media, proof image, dashboard/mobile screenshot frames | `.wnyhs-media`, `.wnyhs-card-media`, `--wnyhs-radius-media`, `--wnyhs-border`, CATEGORY003 rules | Aspect, crop, frame, caption, and legibility tokens are not fully defined. |
| campaign/QR | QR nav, campaign panels, proof strip, benefit cards, QR form | `.qr-*`, QR standards, global semantic tokens | QR landing token divergence must preserve runtime/source boundaries. |
| review/demo | Public-reachable noindex demo/planner/package review surfaces | `review-only` page family in VISPARITY002/003, package/demo styles | Review/demo visual mapping should not promote routes or change protected flows. |

## Component-to-token mapping table

This table maps VISPARITY003 canonical component names to semantic categories. Existing evidence is read-only and does not authorize source or CSS changes.

| Canonical component name | Required semantic token categories | Existing likely token/source evidence | Token gap or ambiguity | Accessibility/contrast dependency | Implementation risk | Future migration notes | Future enforcement candidate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS Top Navigation | canvas/background, surface/panel, text/default, text/inverse, action/primary, action/secondary, border, shadow, radius, spacing, typography, focus | `.wnyhs-top-nav`, `.wnyhs-button`, `--wnyhs-dark-*`, `--hs-premium-*`, header/footer standards | Nav uses mixed `wnyhs` and `hs-premium` evidence; active/hover/focus tokens are not fully normalized | Link, phone CTA, drawer, and active-state contrast | Route/nav behavior is protected; visual-only mapping must not change destinations | Map to WNYHS nav surface/link/drawer/focus categories later | VISPARITY009/VISPARITY010 |
| WNYHS Mobile Navigation | surface/panel, text/default, action/primary, border, radius, spacing, focus | Mobile behavior inside `WnyhsTopNav`, `.wnyhs-top-nav-drawer` | Drawer surface, overlay, tap-target, and focus tokens are implicit | Mobile tap target and keyboard focus | High if route/menu behavior is touched; keep future work visual-only unless scoped | Add drawer-specific semantic categories before implementation | VISPARITY009/VISPARITY010 |
| WNYHS Site Footer | surface/panel, text/inverse, text/muted, border, radius, spacing, typography, focus | `.wnyhs-footer`, `.wnyhs-marketing-footer`, footer standards | Footer uses dark surface and old `hs-premium` footer aliases | Footer link contrast and focus | Footer links/version are protected by header/footer standards | Map one WNYHS footer token set; avoid duplicate footer systems | VISPARITY009/VISPARITY010 |
| WNYHS QR Campaign Navigation | campaign/QR, surface/panel, text/default, action/secondary, border, focus | `.qr-topbar`, QR standards | QR nav uses global tokens and QR-specific classes instead of WNYHS nav primitives | Small-screen nav wrapping and link contrast | QR route/source behavior is protected | Map QR campaign nav as compatible variant, not forced global nav | VISPARITY009/VISPARITY010 |
| WNYHS QR Campaign Footer | campaign/QR, surface/panel, text/muted, border, spacing, focus | QR campaign close/footer context, QR standards | Reduced QR footer tokens are not formalized | Footer meta/link readability | Medium; avoid global footer replacement without scoped task | Define campaign footer token needs in QR-specific task | VISPARITY009 |
| WNYHS Page Shell | canvas/background, surface/panel, border, shadow, radius, spacing, typography | `.wnyhs-page`, `.wnyhs-shell`, `.hs-premium-shell`, `--background`, `--wnyhs-canvas` | Light WNYHS shell and older dark shell coexist | Whole-page contrast | Medium; global shell changes can affect many routes | Route-family migration should be phased | VISPARITY006/VISPARITY009 |
| WNYHS Hero Section | canvas/background, surface/panel, text/default, text/inverse, action/primary, action/secondary, border, shadow, radius, spacing, typography, image/frame | `.wnyhs-category-hero`, `.hs-home-hero`, `.hs-premium-hero`, `.qr-hero`, `.opportunity-hero` | Multiple hero vocabularies and dark/light variants | Hero text contrast, CTA focus, image legibility | Medium-high because hero structure is page-specific | Map hero by page family before any CSS consolidation | VISPARITY006/VISPARITY009 |
| WNYHS Page Intro | canvas/background, surface/panel, text/default, text/muted, spacing, typography | `.wnyhs-section-header`, legal/search headers | Compact intro tokens are partial | Heading order and body contrast | Low if docs-only; medium in future page edits | Use page-structure gate before shared visual mapping | VISPARITY009 |
| WNYHS Section Block | surface/panel, border, shadow, radius, spacing, text/default | `.wnyhs-section`, `.wnyhs-section--dark`, `.hs-premium-section-panel`, `.qr-panel` | Section/panel distinction is not always clear | Panel text contrast | Medium due to broad reuse | Define light, dark, campaign, legal section variants | VISPARITY006/VISPARITY010 |
| WNYHS Section Header | text/default, text/muted, accent, spacing, typography | `.wnyhs-section-header`, `.hs-premium-section-header` | Heading/support copy color maps differ by surface | Muted copy contrast | Low | Normalize heading/support categories by surface | VISPARITY009 |
| WNYHS Final CTA Section | surface/panel, text/default, action/primary, action/secondary, border, shadow, radius, spacing, focus | `.hs-premium-final-cta-panel`, `.hs-premium-cta`, `.wnyhs-button` | CTA panel tokens differ across homepage, category, QR | Button contrast and focus | Medium; CTA destinations protected | Migrate action styling without route changes | VISPARITY010 |
| WNYHS Legal Text Section | canvas/background, surface/panel, text/default, text/muted, text/link, spacing, typography | Legal page surfaces, `.wnyhs-section`, legal route standards | Legal-specific text/link tokens are not explicit | Legal readability, link affordance | Low | Create legal text token mapping before legal visual pass | VISPARITY009 |
| WNYHS Eyebrow | accent, text/default, text/inverse, spacing, typography | `.wnyhs-eyebrow`, `.hs-premium-eyebrow`, `.qr-kicker` | `qr-kicker` and `hs-premium-eyebrow` are aliases | Small text contrast | Low | Map to one accent-label category with surface variants | VISPARITY010 |
| WNYHS Page Heading | text/default, text/inverse, typography, spacing | `.wnyhs-heading`, global heading tokens, `--wnyhs-font-heading` | Older `--kaec-font-heading` and prototype `--ns-font-heading` exist | Heading contrast and mobile wrapping | Low | Prefer Manrope token in future public work | VISPARITY009 |
| WNYHS Section Heading | text/default, text/inverse, typography, spacing | `.wnyhs-heading`, section headers | Same as heading category; compact surface variants needed | Heading hierarchy | Low | Map heading levels by role, not CSS selector | VISPARITY009 |
| WNYHS Card Heading | text/default, typography, spacing | `.wnyhs-card-title`, card h3 selectors, package/search/gallery headings | Card heading sizing is distributed across systems | Card title readability | Low-medium | Add card-heading token category before broad card migration | VISPARITY009 |
| WNYHS Body Copy | text/default, text/muted, typography, spacing | `.wnyhs-description`, `.wnyhs-card-copy`, `--muted-foreground`, `--hs-premium-muted` | Muted/default distinction differs by surface | Text contrast/readability | Low-medium | Future QA should verify actual contrast on rendered surfaces | VISPARITY009 |
| WNYHS Muted Copy | text/muted, text/inverse, typography | `--wnyhs-ink-muted`, `--wnyhs-ink-secondary`, `--muted-foreground`, `--hs-premium-muted` | Muted token may be too broad for dark, light, footer, and form helper uses | High contrast dependency | Medium | Split muted text by surface if future QA proves need | VISPARITY009 |
| WNYHS Fine Print | text/muted, status/info/success/warning/error, typography, spacing | Legal notes, form notes, package caveats | Fine print has no dedicated token category | Small text contrast | Medium on forms/legal | Map fine-print size/contrast before public implementation | VISPARITY009 |
| WNYHS Primary CTA | action/primary, text/default, text/inverse, border, shadow, radius, focus, spacing, typography | `.wnyhs-button--primary`, `.btn-primary`, `.qr-cta`, `.estimate-submit` | Duplicated button systems; old blue primary CTA values exist | Button text contrast and focus | High because CTAs affect conversion paths | Migrate visually without changing hrefs/forms | VISPARITY010 |
| WNYHS Secondary CTA | action/secondary, border, text/default, radius, focus, typography | `.wnyhs-button--secondary`, `.btn-secondary`, links | Secondary/link affordance is inconsistent | Link/button affordance and contrast | Medium | Define outline/link/phone variants separately | VISPARITY010 |
| WNYHS Text Link CTA | action/secondary, accent, text/default, focus, typography | Search result links, legal links, `.hs-premium-text-link` | Link color and underline behavior vary | Must not rely only on color | Low-medium | Map text links by body/legal/footer/card context | VISPARITY009 |
| WNYHS Phone CTA | action/secondary, accent, text/default, focus, spacing | Header phone, QR call/text, contact/support links | Phone CTA may appear as link or button | Tap target and label clarity | Medium | Treat as action variant without changing number/destination | VISPARITY010 |
| WNYHS Panel | surface/panel, elevated/card, border, shadow, radius, spacing, text/default | `.wnyhs-section`, `.hs-premium-section-panel`, `.packages-context-panel`, `.qr-panel` | Panel/card boundaries are blurry | Panel text and nested controls | Medium | Establish panel role categories before CSS work | VISPARITY006 |
| WNYHS Feature Card | elevated/card, surface/panel, text/default, text/muted, border, shadow, radius, spacing, focus, image/frame | `.wnyhs-card`, `.hs-premium-problem-card`, `.hs-home-*card`, `.qr-benefit-grid article` | Duplicated card/tile/panel systems | Card link focus and body contrast | Medium | Map cards by role and page family before consolidation | VISPARITY006/VISPARITY010 |
| WNYHS Tile | elevated/card, action/secondary, border, radius, spacing, focus, image/frame | Category tiles, suggestion chips, routine thumbnails | Tile/chip/card terms overlap | Tap target and focus visibility | Medium | Define compact tile dimensions and focus needs later | VISPARITY009 |
| WNYHS Proof Card | elevated/card, image/frame, text/default, text/muted, border, radius, spacing | Gallery/trust/proof cards, Our Work cards | Proof/story token mapping depends on asset governance | Caption contrast and alt role | Medium | VISPARITY005 should map proof asset role first | VISPARITY009 |
| WNYHS Search Result Card | elevated/card, text/default, text/muted, action/secondary, border, radius, spacing, focus | `.wnyhs-search-result-card`, search page primitives | Search result-specific chips/empty-state tokens are partial | Result count, card link focus, empty-state readability | Low-medium | Keep search-only role but align with card tokens | VISPARITY009 |
| WNYHS Alert / Info Block | status/info/success/warning/error, surface/panel, text/default, border, radius, spacing, focus | Search empty states, form messages, support guidance, QR errors | Info/success/warning/error surfaces are incomplete | Status text contrast and semantics | Medium | Define public status tokens before implementation | VISPARITY009/VISPARITY010 |
| WNYHS Core Panel | surface/panel, text/inverse, text/default, accent, border, shadow, radius, spacing, image/frame | WNYHS Core sections, `--wnyhs-dark-*`, `.packages-core-panel`, category Core rules | Core image/copy behavior differs by homepage/category/package | Dashboard/mobile image legibility | Medium-high | Coordinate with VISPARITY005 image role register | VISPARITY006/VISPARITY009 |
| WNYHS Package Tier Block | elevated/card, action/primary, action/secondary, text/default, text/muted, accent, border, shadow, radius, spacing, review/demo | Package cards/detail, `.package-card-*`, `.packages-*`, price chips | Package/review route posture and old package styles mix token systems | Price/status/caveat readability | High because package/pricing claims are protected | Map visual tokens only; do not alter prices/data/routes | VISPARITY006/VISPARITY010 |
| WNYHS Vault Tile | elevated/card, review/demo, action/secondary, text/default, text/muted, border, radius, spacing | `.packages-vault-panel`, `.packages-vault-card` | Vault/custom tokens are not separated from package cards | Custom scope caveat readability | Medium | Keep Vault as review/custom variant until governed | VISPARITY009 |
| WNYHS QR Campaign Block | campaign/QR, surface/panel, elevated/card, action/primary, text/default, text/muted, border, radius, spacing, focus | `.qr-panel`, `.qr-benefit-grid`, `.qr-next-card`, QR standards | QR landing token divergence from WNYHS primitives | Mobile readability and focus | High due to protected QR source/form behavior | Future QR visual task must preserve payload/source behavior | VISPARITY009/VISPARITY010 |
| WNYHS Dashboard Preview Block | image/frame, surface/panel, text/default, text/muted, border, shadow, radius, spacing | Core dashboard/phone images, CATEGORY003 dashboard rules | Legibility/aspect tokens are missing | Image text legibility | Medium | VISPARITY005 should map image frame/aspect roles | VISPARITY009 |
| WNYHS Category Image Block | image/frame, surface/panel, border, radius, spacing, focus | CATEGORY003, `.wnyhs-category-*`, Home Automation reference assets | Asset role and frame/aspect tokens are incomplete | Hover/focus and mobile image usability | Medium | Coordinate with category image register | VISPARITY005/VISPARITY009 |
| WNYHS Solution Scenario Block | image/frame, surface/panel, text/default, text/muted, action/secondary, border, radius, spacing | `SolutionOpportunity`, solution hero/sample images | Solution sample/hero frame tokens not fully separated | Scenario image legibility and caption contrast | Medium | Map two-image solution system before new implementation | VISPARITY005/VISPARITY009 |
| WNYHS Our Work Gallery Block | image/frame, elevated/card, text/default, text/muted, border, radius, spacing, focus | Our Work gallery styles and assets | Proof/gallery tokens depend on proof/story governance | Captions and link focus | Medium | VISPARITY005 should identify asset/proof role gaps | VISPARITY009 |
| WNYHS Form Shell | form/control, surface/panel, text/default, text/muted, status/info/success/warning/error, border, radius, spacing, focus | `.wnyhs-contact-support-form`, `.estimate-form-shell`, `.contact-intake-panel.qr-panel`, `.qr-section` | Form shell tokens split across global, estimate, QR, and WNYHS layers | Form readability | High due to protected form behavior | Visual mapping only; no fields/payload changes | VISPARITY009/VISPARITY010 |
| WNYHS Form Field | form/control, text/default, text/muted, border, radius, focus, status/info/success/warning/error | `.estimate-field`, `.qr-landing input`, `.form input`, `--input`, `--ring` | Field/control state tokens are incomplete | Label/control/helper/error contrast | High due to forms and protected submission | Define field state categories before implementation | VISPARITY009/VISPARITY010 |
| WNYHS Form Label | form/control, text/default, text/muted, typography, spacing | `.estimate-field span`, `.qr-field-title`, `.form label` | Labels sometimes use muted token; required marker tokens absent | Label contrast and association | Medium | Map labels separately from helper text | VISPARITY009 |
| WNYHS Form Help Text | form/control, text/muted, typography, spacing | Estimate notes, QR labels, helper small text | Help text and muted body share tokens | Help text contrast | Medium | Define helper token if contrast requires it | VISPARITY009 |
| WNYHS Form Error Text | form/control, status/info/success/warning/error, text/default, typography, spacing | `.qr-error`, `--destructive`, `--wnyhs-danger` | Error surface/text/border states are not fully mapped | Error readability and semantics | Medium-high | Map error text/border/surface as token categories | VISPARITY009/VISPARITY010 |
| WNYHS Select Field | form/control, border, radius, focus, text/default, surface/panel | `.estimate-field select`, `.qr-landing select`, `.form select` | Select-specific affordance tokens are not formalized | Focus and option readability | Medium | Include with field/control migration | VISPARITY009 |
| WNYHS Textarea Field | form/control, border, radius, focus, text/default, surface/panel | `.estimate-field textarea`, `.qr-landing textarea`, `.form textarea` | Textarea height/resize/state tokens are local | Readability and focus | Medium | Include with field/control migration | VISPARITY009 |
| WNYHS Submit Button | action/primary, form/control, text/default, radius, shadow, focus, status/info/success/warning/error | `.estimate-submit`, `.wnyhs-button--primary`, `.btn-primary`, `.qr-cta` | Submit/disabled/loading tokens are not fully mapped | Focus, disabled contrast, status feedback | High due to form behavior | Visual-only future task must not alter submission logic | VISPARITY010 |
| WNYHS Hero Image | image/frame, border, shadow, radius, spacing | `.wnyhs-category-hero-media`, `.hs-home-hero-media`, `.hs-premium-hero-media`, `.qr-hero-image` | Frame/aspect/crop tokens are partial | Text inside image cannot be required | Medium | VISPARITY005 should classify asset role before CSS work | VISPARITY005/VISPARITY009 |
| WNYHS Category Image | image/frame, border, radius, spacing, focus | CATEGORY003 image classes and asset folder pattern | Category-specific image roles lack tokenized aspect categories | Image recognition and alt role | Medium | Define hero/reveal/dashboard/mobile/routine/frame mapping | VISPARITY005 |
| WNYHS Solution Image | image/frame, border, radius, spacing | Solution hero/sample/card image paths and styles | Solution image frame and sample/caption tokens are partial | Scenario image legibility | Medium | VISPARITY005 image role mapping first | VISPARITY005 |
| WNYHS Proof Image | image/frame, text/muted, border, radius, spacing | Our Work gallery images, proof/gallery cards | Proof/image/caption token mapping depends on source proof status | Caption and alt-role clarity | Medium | Avoid implying verified proof without governance | VISPARITY005/VISPARITY009 |
| WNYHS QR Image | campaign/QR, image/frame, border, radius, spacing | QR route image, print/brand assets, QR standards | QR image/quiet-zone/campaign asset tokens are not formalized | QR legibility and mobile crop | High if QR source assets are touched | No asset changes in token mapping; future image task required | VISPARITY005 |
| WNYHS Logo Mark | image/frame, text/default, spacing | `IconizedLogo.png`, `CrestLogo.png`, header/footer standards | Logo sizing/contrast tokens are implicit | Alt/decorative role | Low-medium | Keep asset authority unchanged | VISPARITY005/VISPARITY010 |
| WNYHS Icon Mark | image/frame, accent, spacing | Brand icon and small marks | Icon role and decorative/informative tokens are implicit | Icon contrast and alt role | Low-medium | Map only where icon role is approved | VISPARITY005 |

## Token gap register

| Gap ID | Component affected | Gap description | Current evidence | Risk | Recommended resolution | Follow-up task |
| --- | --- | --- | --- | --- | --- | --- |
| VISPARITY004-GAP-001 | All public marketing components | Mixed `wnyhs`, `hs-premium`, `hs-home`, `qr`, `kaec`, `ns`, and generic `btn/card/panel` vocabularies coexist. | VISPARITY001/003; `wnyhsVisualGovernance.css`; `homeSecurityPremium.css`; `qrLanding.css`; `src/index.css`; `tokens.css` | Future tasks may map a component to the wrong visual system or expand legacy vocabulary. | Treat `--wnyhs-*` and governed WNYHS primitives as the target public system; record aliases as evidence only. | VISPARITY006 |
| VISPARITY004-GAP-002 | Hero, nav, cards, package blocks, global styles | Hardcoded colors, rgba values, raw shadows, and color-mix values remain in active style evidence. | DESIGN001 raw values; `src/index.css`; `homeSecurityPremium.css` | New implementation could copy raw values instead of token categories. | Tokenize only through a later bounded CSS/token implementation task; do not add new raw values. | VISPARITY006 |
| VISPARITY004-GAP-003 | Body copy, muted copy, footer, QR, cards, forms | Text contrast/readability gaps need visual QA across dark/light/campaign surfaces. | `--wnyhs-ink-muted`, `--muted-foreground`, `--hs-premium-muted`, QR muted text | Users may have to strain to read muted, helper, footer, chip, or card text. | Add route-family contrast QA before changing values. | VISPARITY009 |
| VISPARITY004-GAP-004 | WNYHS Primary CTA, Secondary CTA, Submit Button, QR CTA | Duplicated button systems exist across `.wnyhs-button`, `.btn`, `.qr-cta`, and form submit styling. | `wnyhsVisualGovernance.css`; `src/index.css`; `qrLanding.css`; `canonicalEstimateForm.css` | Inconsistent CTA hierarchy, focus, color, and hover behavior. | Map button roles to action/primary, action/secondary, phone, text link, and submit categories before implementation. | VISPARITY006 |
| VISPARITY004-GAP-005 | Feature Card, Proof Card, Package Tier Block, Search Result Card, QR Campaign Block | Duplicated card/tile/panel systems exist across public pages. | `.wnyhs-card`, `.card`, `.hs-premium-*card`, `.packages-*card`, `.qr-next-card` | Visual drift and inconsistent spacing/radius/shadow/focus. | Define role-based card, tile, panel, and result-card mappings. | VISPARITY006 |
| VISPARITY004-GAP-006 | QR Campaign Navigation, QR Campaign Block, QR form/control, QR Image | QR landing token divergence uses QR-specific classes and global tokens instead of full WNYHS public primitives. | `qrLanding.css`; QR standards | QR visual work could accidentally change source tracking, fields, consent, or campaign structure. | Treat QR as campaign variant; future QR visual work must preserve runtime/source behavior. | VISPARITY006 |
| VISPARITY004-GAP-007 | Form Shell, Form Field, Form Label, Help Text, Error Text, Submit Button | Form field readability tokens are split across global `.form`, estimate, QR, and WNYHS contact/support styles. | `canonicalEstimateForm.css`; `qrLanding.css`; `wnyhsVisualGovernance.css`; `src/index.css` | Low-contrast labels/helper/errors or inconsistent focus states on conversion forms. | Create a bounded form readability/focus audit before CSS changes. | VISPARITY009 |
| VISPARITY004-GAP-008 | Nav, cards, forms, buttons, search, QR controls | Focus state consistency is incomplete across `--wnyhs-focus`, `--ring`, `.btn:focus-visible`, QR, and estimate form shadows. | `--wnyhs-focus`; `--ring`; `canonicalEstimateForm.css`; `qrLanding.css` | Keyboard users may lose visual position. | Map focus token categories by control family and surface before implementation. | VISPARITY009 |
| VISPARITY004-GAP-009 | Hero Image, Category Image, Solution Image, Proof Image, QR Image | Image frame/aspect tokens are partial; role-specific aspect/crop/caption tokens are not formalized. | `.wnyhs-media`, `.wnyhs-card-media`, CATEGORY003, solution image standards | Image text, dashboards, QR assets, or thumbnails may be unreadable after responsive changes. | VISPARITY005 should map image asset roles and frame/aspect needs before CSS edits. | VISPARITY005 |
| VISPARITY004-GAP-010 | Legal Text Section, review/demo pages, support text | Legal/review page text tokens are not explicitly separated from general public marketing copy. | Legal route posture in VISPARITY001/002; `PAGE_TOKEN_COMPLIANCE_GATE_REV01` | Legal or review-only pages may become either under-branded or over-decorated. | Define legal/review text surface mapping before a legal/review visual pass. | VISPARITY006 |
| VISPARITY004-GAP-011 | Package Tier Block, Vault Tile, WNYHS Core Panel | package/vault/Core unique block tokens are not fully separated from generic card/panel tokens. | `.packages-*`, `.packages-core-panel`, `.packages-vault-panel`, Core/category standards | Package, Vault, and Core blocks may drift or imply unapproved pricing/package claims. | Keep package/vault/Core mapping documentation-only until bounded visual or image task. | VISPARITY006 |
| VISPARITY004-GAP-012 | Status/info/success/warning/error blocks | Public status token categories are incomplete beyond success/danger/global warning/destructive evidence. | `--wnyhs-success`, `--wnyhs-danger`, `--success`, `--warning`, `--destructive`, QR error styling | Error/info blocks may have inconsistent contrast and semantics. | Define info/success/warning/error text, border, and surface categories before form/status CSS work. | VISPARITY009 |
| VISPARITY004-GAP-013 | Spacing/rhythm across shell, section, card, tile, form | Public WNYHS spacing tokens are not formalized as custom properties; spacing mostly exists as local CSS gaps/padding. | `wnyhsVisualGovernance.css`; `homeSecurityPremium.css`; `--ns-spacing-*` prototype tokens | Page-family rhythm can drift when future work copies local spacing. | Add spacing categories only in a future token-governance task. | VISPARITY006 |
| VISPARITY004-GAP-014 | Typography across public and prototype surfaces | Inter/Manrope is governed, but older/global/prototype heading variables still exist. | `--wnyhs-font-heading`, `--wny-font-heading`, `--kaec-font-heading`, `--ns-font-heading` | New work may reuse old or prototype heading stacks. | Future implementation should use governed WNYHS typography tokens for public marketing pages. | VISPARITY010 |

## Future migration notes

- Start future migration from canonical VISPARITY003 component names, not from current CSS selectors.
- Treat current selectors and token names as evidence until a bounded implementation task authorizes code changes.
- Prefer governed WNYHS public primitives from `src/styles/wnyhsVisualGovernance.css` when future public-page implementation is explicitly authorized.
- Preserve page-specific structure while aligning shared visual language.
- Preserve QR campaign structure and QR runtime/source boundaries.
- Preserve package, Vault, and Core claim/pricing boundaries.
- Do not rename implementation classes as part of token mapping.
- Do not generate CSS, hooks, Playwright tests, QA checks, or active enforcement rules from this register.

## Non-authority statement

This register does not change token values.
This register does not approve new token values.
This register does not require implementation until a later bounded task.
This register does not edit CSS/tokens/source files.
This register does not activate hooks or QA checks.

## Recommended next task

Recommended next task:

`VISPARITY005 - Image Parity and Asset Usage Register`

VISPARITY005 should map WNYHS image roles, asset sources, frame/aspect needs, alt-text posture, proof/illustrative boundaries, QR/campaign asset needs, and image parity gaps without generating, resizing, renaming, wiring, or replacing image files unless separately authorized.

## Scope Compliance

VISPARITY004 creates a CSS token mapping and gap register only.

It includes:

- Boundary
- Token source inventory
- Semantic token category model
- Component-to-token mapping table
- Token gap register
- Non-authority statement
- Recommended next task

It does not:

- edit source code
- edit route files
- edit CSS
- edit tokens
- edit UI components
- edit images or assets
- edit sitemap or robots
- edit runtime/API files
- edit HubSpot behavior
- edit Stripe/payment behavior
- edit scheduling
- edit Cloudflare config
- edit dependencies or package-lock
- create Playwright tests
- create hooks
- create QA checks
- approve final CSS/token values
- rename implementation classes
- activate any KAOS rule
- merge
