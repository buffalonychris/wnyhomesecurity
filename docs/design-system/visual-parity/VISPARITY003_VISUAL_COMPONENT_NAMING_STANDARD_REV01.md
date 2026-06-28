# VISPARITY003 Visual Component Naming Standard REV01

Task ID: VISPARITY003
Task Name: Visual Component Naming Standard
Status: Naming standard only
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## Boundary

This document creates canonical visual component and element names for future WNYHS public marketing visual parity work.

It is a naming standard only.
It does not approve final CSS values.
It does not change implementation.
It does not authorize route/CSS/token/UI/image changes.
It does not activate hooks or QA checks.

This document does not rename current classes, components, assets, route files, source files, CSS selectors, token names, image files, sitemap entries, robots rules, runtime behavior, HubSpot behavior, Stripe/payment behavior, scheduling behavior, Cloudflare config, dependencies, or package-lock files.

## Source Inputs

Primary source inputs:

- `docs/design-system/visual-parity/VISPARITY001_PUBLIC_ROUTE_ELEMENT_DISCOVERY_REV01.md`
- `docs/design-system/visual-parity/VISPARITY002_PUBLIC_MARKETING_VISUAL_PARITY_TARGET_MATRIX_REV01.md`

Related governing and status inputs:

- `docs/codex/CODEX_RUN_CONTRACT.md`
- `docs/system/step-current.md`
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md`
- `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`

## Naming Principles

- Names describe a component's role, not its current CSS class.
- Names must remain stable across pages even when current implementation names differ.
- Names must be suitable for later mapping to semantic tokens and shared primitives.
- Names must support future visual QA, hook/eval coverage, route-family audits, and component inventories.
- Unique elements may receive canonical names when they recur, carry strategic value, or affect future parity decisions.
- Current implementation aliases are evidence only. They are not approved future names.
- Page-specific variants should extend a canonical name rather than invent a new one-off name.

## Component Categories

Canonical component categories:

- Navigation / shell
- Page structure
- Text
- Actions
- Containers
- Strategic / unique
- Forms
- Images / assets

## Canonical Component Naming Table

| Canonical component name | Component category | Definition | Expected page families | Allowed variants | Forbidden aliases / ambiguous names | Likely current implementation names/classes if discovered | Future token mapping need | Future QA/hook candidate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS Top Navigation | Navigation / shell | Global public-site top navigation with brand, primary links, CTA, phone/contact path, and mobile entry behavior. | Homepage, categories, solutions, search, about, our work, contact, support, legal. | Primary, Compact, Review Only. | nav, navbar, header, topbar when used without WNYHS scope. | `WnyhsTopNav`, `wnyhsNavigation`, `.wnyhs-top-nav`, related header primitives. | Header background, link, active, focus, CTA, drawer, brand-mark tokens. | Yes. |
| WNYHS Mobile Navigation | Navigation / shell | Mobile drawer or collapsed navigation equivalent for the global public site. | Same as WNYHS Top Navigation. | Primary, Compact. | hamburger, drawer, menu when detached from WNYHS navigation role. | Mobile behavior inside `WnyhsTopNav`. | Drawer surface, overlay, focus, tap-target, link tokens. | Yes. |
| WNYHS Site Footer | Navigation / shell | Shared public-site footer with local identity, contact, legal/support, category links, and version display. | Main public pages and legal pages. | Primary, Compact, Review Only. | footer, global footer, operator footer. | `WnyhsSiteFooter`, `.wnyhs-footer`. | Footer surface, link, muted text, divider, brand-mark tokens. | Yes. |
| WNYHS QR Campaign Navigation | Navigation / shell | Reduced QR/campaign navigation for scan-first campaign entry. | QR Landing and approved campaign pages. | Campaign, Compact. | qr topbar, mini nav, campaign header when not tied to QR scope. | `.qr-topbar`, QR route nav links. | Campaign nav surface, link, focus, phone CTA tokens. | Yes. |
| WNYHS QR Campaign Footer | Navigation / shell | Reduced campaign close/footer for QR-specific pages. | QR Landing and approved campaign pages. | Campaign, Compact. | QR footer, campaign footer when not scoped. | QR route footer/close sections if present. | Campaign footer surface, link, local-meta tokens. | Yes. |
| WNYHS Page Shell | Page structure | Outer public marketing page canvas and width/rhythm wrapper. | All public marketing page families. | Primary, Legal, Review Only, Campaign. | shell, wrapper, container, layout without page role. | `WnyhsMarketingLayout`, `.wnyhs-page`, `.wnyhs-shell`, `.wnyhs-page-layout`, `.hs-premium-shell`. | Canvas, shell width, section gap, page padding tokens. | Yes. |
| WNYHS Hero Section | Page structure | Primary page introduction section with dominant message, support copy, visual proof when applicable, and primary actions. | Homepage, categories, solutions, contact, support, QR, packages/review pages. | Primary, Compact, Campaign, Image, Panel. | hero, masthead, banner when unscoped. | `.hs-premium-hero`, `.wnyhs-hero`, `.qr-hero`, category/solution hero selectors. | Hero surface, media frame, heading, body, CTA, proof-pill tokens. | Yes. |
| WNYHS Page Intro | Page structure | Compact page introduction for pages where a full hero is not needed. | Search, legal, about, support/contact subregions, review-only pages. | Compact, Legal, Review Only. | intro, page header, lead block without role. | `.wnyhs-section-header`, page-level header blocks. | Intro spacing, heading/body/link tokens. | Yes. |
| WNYHS Section Block | Page structure | Reusable major content section boundary. | All public marketing page families. | Primary, Secondary, Dark, Legal, Campaign. | section, band, block without WNYHS role. | `.wnyhs-section`, `.wnyhs-section--dark`, `.hs-premium-section-panel`, `.qr-panel`. | Section background, border, spacing, radius tokens. | Yes. |
| WNYHS Section Header | Page structure | Section title group containing optional eyebrow, heading, and support copy. | All public marketing page families. | Primary, Compact, Legal. | section title, header, title block when ambiguous. | `.wnyhs-section-header`, `.hs-premium-section-header`. | Heading, eyebrow, support-copy spacing tokens. | Yes. |
| WNYHS Final CTA Section | Page structure | Closing conversion section with one clear next action path and optional secondary action. | Homepage, categories, solutions, about, our work, contact, support, QR. | Primary, Compact, Campaign. | final panel, CTA panel, bottom CTA without role. | `.hs-premium-final-cta-panel`, final CTA page blocks. | CTA section surface, heading, action row, phone/link tokens. | Yes. |
| WNYHS Legal Text Section | Page structure | Readable legal/policy content section with constrained measure and heading hierarchy. | Privacy, Terms, legal/review pages. | Legal. | fine print page, policy block when ambiguous. | Legal page article blocks. | Legal text, link, heading, measure, section gap tokens. | Yes. |
| WNYHS Eyebrow | Text | Short contextual label above a hero, section, card, or campaign block. | Heroes, section headers, cards, QR campaign blocks. | Primary, Section, Card, Campaign, Legal. | kicker, label, tag, eyebrow when unscoped. | `.wnyhs-eyebrow`, `.hs-premium-eyebrow`, `.qr-kicker`. | Accent text, uppercase/case, spacing tokens. | Yes. |
| WNYHS Page Heading | Text | Main H1-level public page heading. | All public marketing page families. | Primary, Compact, Legal, Campaign. | title, headline, h1 when ambiguous. | `.wnyhs-heading`, hero H1 selectors. | Heading font, size scale, line-height, color tokens. | Yes. |
| WNYHS Section Heading | Text | H2/H3-level heading for a section block. | All public marketing page families. | Primary, Compact, Legal. | section title, subtitle when ambiguous. | `.wnyhs-heading`, `.wnyhs-section-header h2`, `hs-premium` section headings. | Heading hierarchy, spacing, color tokens. | Yes. |
| WNYHS Card Heading | Text | Heading for a repeated card, tile, search result, or proof block. | Cards, tiles, search, proof, packages, category/solution cards. | Primary, Compact, Featured. | card title, title, h3 when ambiguous. | `.wnyhs-card-title`, card H3 selectors. | Card heading size, weight, wrap tokens. | Yes. |
| WNYHS Body Copy | Text | Primary explanatory body text. | All public marketing page families. | Primary, Compact, Legal. | paragraph, copy, description when ambiguous. | `.wnyhs-description`, `.wnyhs-card-copy`, `hs-premium` body copy. | Primary text, line-height, measure tokens. | Yes. |
| WNYHS Muted Copy | Text | Secondary explanatory copy that remains readable and non-essential to form completion. | Cards, captions, helper blocks, footer meta, support text. | Secondary, Compact, Legal. | muted, gray text, helper when ambiguous. | `.wnyhs-description`, `.wnyhs-card-copy`, muted classes. | Muted text contrast and surface tokens. | Yes. |
| WNYHS Fine Print | Text | Small required note, limitation, legal-adjacent, or route-status copy. | Legal, forms, package/review, contact/support, QR. | Legal, Review Only, Compact. | disclaimer, small print when ambiguous. | Legal notes, form notes, price/status caveats. | Fine-print size, contrast, link tokens. | Yes. |
| WNYHS Primary CTA | Actions | Highest-priority action in a section or page. | Hero, final CTA, forms, cards, QR, search empty state. | Primary, Full Width, Campaign, Submit. | button, btn, primary, CTA without role. | `.wnyhs-button--primary`, `.btn-primary`, QR primary CTA, submit buttons. | Primary action surface, foreground, hover, focus tokens. | Yes. |
| WNYHS Secondary CTA | Actions | Lower-priority paired action that supports the primary path. | Hero rows, cards, support paths, search, final CTA. | Secondary, Outline, Compact. | secondary, ghost, outline, button when ambiguous. | `.wnyhs-button--secondary`, `.btn-secondary`, outline/link buttons. | Secondary action surface, border, text, focus tokens. | Yes. |
| WNYHS Text Link CTA | Actions | Inline or text-style action link used when button weight is not appropriate. | Cards, body copy, legal, footer, search results. | Primary Link, Secondary Link, Legal. | link, learn more, inline CTA without role. | Anchor links, result CTAs, text-link blocks. | Link color, underline, focus, hover tokens. | Yes. |
| WNYHS Phone CTA | Actions | Phone or call/text action that clearly presents contact intent. | Navigation, hero, contact/support, QR, final CTA. | Primary, Secondary, Campaign. | phone link, call link, SMS link when ambiguous. | Header phone links, contact blocks, QR phone CTA. | Phone CTA text, icon, focus, tap-target tokens. | Yes. |
| WNYHS Panel | Containers | Larger grouped surface that frames one logical section or emphasis area. | Heroes, Core, final CTA, forms, proof, package/context sections. | Primary, Secondary, Dark, Campaign, Legal. | panel, box, module when not scoped. | `.hs-premium-section-panel`, `.wnyhs-section`, `.qr-panel`, package/context panels. | Surface, border, radius, shadow, spacing tokens. | Yes. |
| WNYHS Feature Card | Containers | Repeated medium card used for feature, category, solution, support, or value explanation. | Categories, solutions, support, homepage, packages/review pages. | Primary, Featured, Compact, Media. | card, tile, module, feature without role. | `.wnyhs-card`, `.hs-premium-problem-card`, `.hs-premium-trust-card`. | Card surface, border, radius, media, heading/copy tokens. | Yes. |
| WNYHS Tile | Containers | Compact navigational or routine item with short label and optional image/icon. | Category explorer, routine thumbnails, search suggestions, package shortcuts. | Compact, Category, Routine, Suggestion. | tile, chip, mini card when ambiguous. | Category tiles, routine thumbnail blocks, suggestion chips. | Tile dimensions, focus, label, media tokens. | Yes. |
| WNYHS Proof Card | Containers | Card that supports trust, proof, example work, or safe illustrative context. | Homepage, Our Work, category proof, solution examples. | Featured, Gallery, Compact, Review Only. | proof, trust card, gallery card when ambiguous. | Trust cards, gallery cards, Our Work cards. | Proof surface, caption, media frame, safe-label tokens. | Yes. |
| WNYHS Search Result Card | Containers | Search result item containing type label, title, summary, and route CTA. | Search. | Primary, Compact, Empty State. | result, search card, listing when ambiguous. | Search result card/group classes. | Result card, type label, CTA, focus tokens. | Yes. |
| WNYHS Alert / Info Block | Containers | Non-error guidance, status, empty-state, or context block. | Forms, search empty state, support, QR, review-only pages. | Info, Error, Empty State, Review Only. | alert, notice, callout, warning when ambiguous. | Form messages, empty states, QR info cards, support guidance. | Info/error surface, border, icon, text, role tokens. | Yes. |
| WNYHS Core Panel | Strategic / unique | Strategic platform/foundation panel explaining WNYHS Core and its relationship to category or package context. | Homepage, categories, packages/review, future governed contexts. | Primary, Category, Package, Compact. | core, platform panel, dashboard block when ambiguous. | WNYHS Core sections, dashboard/phone/logo blocks. | Core panel surface, media hierarchy, heading/body, CTA tokens. | Yes. |
| WNYHS Package Tier Block | Strategic / unique | Package or starting-point comparison block without exposing internal cost basis. | Packages, package detail, contextual homepage/category package previews. | Starting Point, Detail, Compact, Review Only. | package card, tier, price card when ambiguous. | Package cards, price chips, tier detail blocks. | Package card, price/status, CTA, caveat tokens. | Yes. |
| WNYHS Vault Tile | Strategic / unique | Compact custom-offer or special-project item that signals quote-reviewed scope. | Packages/review, custom work, future Vault contexts. | Compact, Review Only, Featured. | vault card, custom tile, offer tile when ambiguous. | Vault/custom project panels and cards. | Vault tile surface, status/caveat, CTA tokens. | Yes. |
| WNYHS QR Campaign Block | Strategic / unique | QR-specific campaign section such as proof strip, benefit card group, or next-step block. | QR Landing and approved campaign pages. | Campaign, Compact, Featured. | QR block, benefit card, next-step when ambiguous. | `.qr-*` blocks. | Campaign section, card, CTA, phone-first tokens. | Yes. |
| WNYHS Dashboard Preview Block | Strategic / unique | Dashboard/phone UI preview used as a proof or Core-supporting visual block. | Homepage, categories, WNYHS Core, dashboard/review pages. | Core, Category, Compact, Review Only. | dashboard, phone mock, preview when ambiguous. | Core dashboard/phone assets and demo preview blocks. | Media frame, caption, legibility, surface tokens. | Yes. |
| WNYHS Category Image Block | Strategic / unique | Category-level image role block such as hero, reveal pair, dashboard, mobile, routine, or solution thumbnail. | Canonical categories and category-related cards. | Hero, Reveal, Dashboard, Mobile, Routine, Solution Thumbnail. | category image, image, thumbnail when ambiguous. | Category image assets and blocks, Home Automation reference asset set. | Image frame, aspect, crop, caption, alt-role tokens. | Yes. |
| WNYHS Solution Scenario Block | Strategic / unique | Solution detail scenario/sample visual and explanatory block. | Solution detail pages. | Hero, Sample, Scenario, Compact. | scenario, sample, outcome block when ambiguous. | `SolutionOpportunity` hero/sample structures. | Solution media, proof, heading/body, CTA tokens. | Yes. |
| WNYHS Our Work Gallery Block | Strategic / unique | Gallery/proof block for example work or safe concept imagery. | Our Work, homepage proof preview, future proof pages. | Gallery, Featured, Compact, Review Only. | gallery, our work card, proof grid when ambiguous. | Our Work gallery/image cards. | Gallery media ratio, caption, safe-label, focus tokens. | Yes. |
| WNYHS Form Shell | Forms | Outer form surface and layout including title/support copy, grouped fields, status, and submit area. | Contact, support, search, QR, discovery/Fit Check when separately scoped. | Contact, Support, Search, Campaign, Review Only. | form, form panel, intake form when ambiguous. | Estimate/support/search/QR form containers. | Form surface, spacing, status, submit, focus tokens. | Yes. |
| WNYHS Form Field | Forms | Generic field row containing label, control, helper/error text, and state. | Contact, support, search, QR, discovery/Fit Check when separately scoped. | Text, Select, Textarea, Search, Optional, Required. | field, input, control when ambiguous. | Estimate/support/search/QR field wrappers. | Field spacing, label, control, border, focus, error tokens. | Yes. |
| WNYHS Form Label | Forms | Visible label associated with a form control. | Contact, support, search, QR, discovery/Fit Check when separately scoped. | Primary, Compact, Required. | label, caption when ambiguous. | Form label selectors. | Label text, spacing, required marker tokens. | Yes. |
| WNYHS Form Help Text | Forms | Non-error helper text associated with a field or form section. | Contact, support, QR, discovery/Fit Check when separately scoped. | Primary, Compact. | helper, hint, muted text when ambiguous. | Form helper/note text. | Helper text contrast, spacing tokens. | Yes. |
| WNYHS Form Error Text | Forms | Error or validation copy associated with a field or form status. | Contact, support, QR, discovery/Fit Check when separately scoped. | Field Error, Form Error. | error, validation, alert when ambiguous. | Form validation messages. | Error text, border, focus, alert tokens. | Yes. |
| WNYHS Select Field | Forms | Select/dropdown control and its field wrapper. | Contact, support, QR, discovery/Fit Check when separately scoped. | Required, Optional, Compact. | select, dropdown when ambiguous. | Select controls in form styles. | Select surface, option, focus, label tokens. | Yes. |
| WNYHS Textarea Field | Forms | Multi-line text control and field wrapper. | Contact, support, QR, discovery/Fit Check when separately scoped. | Required, Optional, Compact. | textarea, message box when ambiguous. | Textarea controls in form styles. | Textarea surface, resize behavior, focus tokens. | Yes. |
| WNYHS Submit Button | Forms | Form-specific submit action button. | Contact, support, QR, discovery/Fit Check when separately scoped. | Primary, Full Width, Campaign. | submit, send button, form button when ambiguous. | Form submit controls, `.wnyhs-button--primary`, `.btn-primary`. | Submit surface, disabled/loading, focus, width tokens. | Yes. |
| WNYHS Hero Image | Images / assets | Primary page or route hero visual. | Homepage, categories, solutions, QR if applicable. | Primary, Category, Solution, Campaign. | hero image, banner image when ambiguous. | `HomePageHero.png`, category heroes, solution hero images, QR hero image. | Media frame, crop/aspect, border, shadow, alt-role tokens. | Yes. |
| WNYHS Category Image | Images / assets | Category-specific visual asset used for hero, reveal, dashboard, routine, Core, or thumbnail roles. | Canonical category pages and category cards. | Hero, Reveal Before, Reveal After, Dashboard, Mobile, Routine, Core, Solution Thumbnail. | category image, thumbnail when role unclear. | `public/images/category-pages/*`, homepage/category asset references. | Category image role, aspect, caption, alt-role tokens. | Yes. |
| WNYHS Solution Image | Images / assets | Solution route or solution-card visual. | Solution detail pages, category solution cards, homepage solution preview. | Hero, Sample, Scenario, Card. | solution image, sample image when role unclear. | `public/images/home-security/solutions/*`, `public/images/solutions/*`. | Solution image aspect, frame, caption, alt-role tokens. | Yes. |
| WNYHS Proof Image | Images / assets | Visual proof/example/gallery asset with safe, source-aware use. | Our Work, homepage proof preview, category/solution proof contexts. | Gallery, Proof, Example, Review Only. | proof photo, gallery image when source unclear. | `public/images/our-work/*`, proof/gallery images. | Proof media frame, caption, safe-label, alt-role tokens. | Yes. |
| WNYHS QR Image | Images / assets | QR, campaign, or scan-supporting image/asset. | QR Landing, print/campaign-related pages. | Campaign, QR Code, Brand, Compact. | QR, QR code, campaign image when role unclear. | `public/brand/print-assets/*`, QR route image references. | QR quiet-zone, contrast, size, caption, alt-role tokens. | Yes. |
| WNYHS Logo Mark | Images / assets | Approved logo/brand mark used for identity. | Nav, footer, hero/CTA, brand moments, print/campaign contexts. | Icon, Crest, Compact, Large. | logo, mark, icon when asset authority unclear. | `IconizedLogo.png`, `CrestLogo.png`. | Logo sizing, spacing, contrast, alt/decorative-role tokens. | Yes. |
| WNYHS Icon Mark | Images / assets | Small icon-like brand/supporting mark used where the full logo would be too large. | Nav, footer, cards, proof strips, campaign blocks when approved. | Compact, Decorative, Informative. | icon, badge, mark when role unclear. | `IconizedLogo.png`, local icon/image marks. | Icon size, color, alignment, alt-role tokens. | Yes. |

## Variant Naming Rules

Allowed variant suffixes or labels:

- Primary
- Secondary
- Compact
- Featured
- Campaign
- Legal
- Review Only
- Dark
- Light
- Image
- Panel
- Full Width
- Empty State
- Submit

Variant rules:

- Use the format `Canonical Name - Variant` in documentation when a variant must be named explicitly.
- Use `Campaign` only for QR/campaign-specific components.
- Use `Legal` only for privacy, terms, policy, and legal-adjacent text sections.
- Use `Review Only` for noindex/review/demo/planner/package review surfaces that are not public marketing parity targets by default.
- Use `Compact` for reduced-density instances of an existing component, not for a new component role.
- Use `Featured` for an emphasized instance of a repeated component, not a separate component.
- Use form-control variants such as `Text`, `Select`, and `Textarea` only under `WNYHS Form Field` when the control type matters.

Forbidden variant behavior:

- Do not create one-off names unless recorded as approved exceptions in a future bounded task.
- Do not use current CSS class names as canonical variants.
- Do not use visual adjectives such as premium, fancy, gold, blue, modern, or dark-heavy as component names.
- Do not use implementation-only route names as component names unless the component is route-specific and strategically important.

## Mapping Rules

Future CSS/token mapping:

- Every future mapping should start from the canonical component name, then map to current classes, files, and token categories.
- Mapping must identify whether the current implementation already uses governed WNYHS primitives or older aliases.
- Mapping must not approve final CSS values unless a later task explicitly authorizes token/CSS work.
- Mapping should preserve page-specific structure while aligning visual language to the shared WNYHS token system.

Future visual QA mapping:

- Each component name can become a future visual QA target.
- QA targets should be page-family aware. A `WNYHS Primary CTA` on QR may have a `Campaign` variant without becoming a different component.
- QA should check readability, focus state, responsive wrapping, role consistency, and route-family placement.

Future hook/eval mapping:

- Hook/eval candidates should use canonical names, not current implementation aliases.
- Hook/eval coverage must remain advisory until a future bounded task activates checks.
- No hook, eval, or QA implementation is activated by this standard.

Future image parity mapping:

- Image components must map to asset role, page family, source folder, alt-text posture, crop/aspect need, and proof/illustrative status.
- Image parity mapping must not generate, rename, replace, resize, or wire image files unless a future bounded task authorizes image work.

## Current Alias / Ambiguity Register

Known mixed vocabularies from VISPARITY001 and VISPARITY002:

| Alias or vocabulary | Ambiguity | Canonical handling |
| --- | --- | --- |
| `btn` / `button` | Can mean primary CTA, secondary CTA, text link, phone CTA, or submit button. | Map by role to WNYHS Primary CTA, WNYHS Secondary CTA, WNYHS Text Link CTA, WNYHS Phone CTA, or WNYHS Submit Button. |
| `tile` | Can mean compact category item, routine thumbnail, search suggestion, or small card. | Use WNYHS Tile with a page-family or role variant. |
| `card` | Can mean feature, proof, package, result, gallery, support, or pricing-style block. | Map to WNYHS Feature Card, WNYHS Proof Card, WNYHS Package Tier Block, WNYHS Search Result Card, or WNYHS Alert / Info Block. |
| `panel` | Can mean section block, form shell, Core panel, final CTA, package context, or QR block. | Map to WNYHS Panel unless a strategic component name is more precise. |
| `premium` | Current visual lineage label, not a component role. | Do not use as canonical component name. Record as current implementation alias only. |
| `qr` | Can mean QR campaign route, QR asset, campaign nav, campaign block, or QR source context. | Map to WNYHS QR Campaign Navigation, WNYHS QR Campaign Footer, WNYHS QR Campaign Block, or WNYHS QR Image. |
| `hs-premium` | Current homepage/category/package CSS vocabulary, not a stable component name. | Record as likely current implementation alias only. |
| `wnyhs` | Brand namespace, not a role by itself. | Use canonical WNYHS role names and future `.wnyhs-*` mapping as implementation detail. |
| `category` | Can mean route family, card, image, page, tile, or asset set. | Use WNYHS Category Image Block for strategic block; WNYHS Category Image for asset role; WNYHS Tile or Feature Card for compact navigation. |
| `image` | Too broad to distinguish hero, category, solution, proof, QR, logo, or icon role. | Use the most specific image canonical name. |
| `form` | Can mean shell, field, label, help text, error text, submit button, or runtime submission behavior. | Use WNYHS Form Shell and subcomponent names. Runtime behavior remains out of scope. |

Do not rename implementation in this task.

## Future Implementation Note

Later tasks should map canonical names to actual component files, classes, CSS selectors, tokens, image roles, and visual QA targets.

This task does not implement that mapping in source.
This task does not change CSS.
This task does not change tokens.
This task does not change UI components.
This task does not change routes.
This task does not change assets or images.
This task does not create hooks or QA checks.

## Recommended Next Task

Recommended next task:

`VISPARITY004 - CSS Token Mapping and Gap Register`

VISPARITY004 should map the canonical names in this standard to current CSS classes, governed primitives, semantic token categories, missing token decisions, and current drift/gap evidence without changing implementation unless separately authorized.

## Scope Compliance

VISPARITY003 creates a canonical component naming standard for visual parity planning.

It covers:

- navigation / shell components
- page structure components
- text components
- action components
- container components
- strategic and unique components
- form components
- image and asset components
- variant naming rules
- future mapping rules
- current alias and ambiguity register
- recommended next task

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
