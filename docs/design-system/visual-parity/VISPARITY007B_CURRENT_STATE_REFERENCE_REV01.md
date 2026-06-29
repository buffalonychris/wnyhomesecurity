# VISPARITY007B Current State Reference REV01

Task ID: VISPARITY007B
Task Name: Current State Reference
Status: Docs-only current-state reference
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## 1. Purpose

This document is the current-state visual reference for WNYHS public visual parity work.

It is the before-reference for future before/after comparison against a later proposed visual standard. It captures today's known CSS, token, color, typography, spacing, layout, surface, image, accessibility, and parity evidence for canonical VISPARITY003 components.

This document does not approve the current design as final. It records the evidence that exists now so later work can compare current-state evidence against VISPARITY007C.

## 2. Boundary

This is a docs-only current-state reference.

This task includes:

- current evidence from existing documentation and current source/style files
- current component, typography, action, container, form, and image-role references
- known current-state concerns and future comparison needs

This task does not include:

- no implementation
- no new design values
- no CSS/token/source/image edits
- no screenshots
- no Playwright
- no routes
- no React
- no hooks/QA activation
- no source, runtime, UI, image, asset, sitemap, robots, dependency, or package-lock changes

Protected systems remain untouched:

- HubSpot / CRM
- Stripe/payment
- scheduling/calendar
- Lead Signal and requestId
- QRLanding attribution/runtime behavior
- Resend/email runtime
- Cloudflare configuration
- secrets and environment values

## 3. Current Token / Source Inventory

| Source | Current evidence | Current role | Current concern |
| --- | --- | --- | --- |
| `src/styles/wnyhsVisualGovernance.css` | Defines `--wnyhs-font-body`, `--wnyhs-font-heading`, `--wnyhs-canvas`, `--wnyhs-surface`, `--wnyhs-surface-raised`, `--wnyhs-surface-soft`, `--wnyhs-ink`, `--wnyhs-ink-secondary`, `--wnyhs-ink-muted`, `--wnyhs-border`, `--wnyhs-border-strong`, `--wnyhs-charcoal`, `--wnyhs-gold`, `--wnyhs-success`, `--wnyhs-danger`, `--wnyhs-radius-*`, `--wnyhs-shadow-*`, `--wnyhs-focus`, and dark-surface aliases. Defines primitives including `.wnyhs-page`, `.wnyhs-shell`, `.wnyhs-section`, `.wnyhs-eyebrow`, `.wnyhs-heading`, `.wnyhs-description`, `.wnyhs-card`, `.wnyhs-button`, `.wnyhs-footer`, category, search, contact/support, legal, and Core-related selectors. | Current governed public WNYHS primitive source. | Most complete current WNYHS visual evidence, but still coexists with older global, QR, package, and prototype vocabularies. |
| `src/styles/homeSecurityPremium.css` | Defines `--hs-premium-bg`, `--hs-premium-panel`, `--hs-premium-border`, `--hs-premium-muted`, `--hs-premium-accent`, `.hs-premium-*`, `.hs-home-*`, `.wnyhs-page-layout`, funnel/header/footer aliases, raw rgba shadows, and dark premium surfaces. | Homepage, legacy home-security, category, package, and funnel-style lineage. | Strong current evidence, but uses mixed legacy aliases and raw values that are evidence only, not new standard values. |
| `src/styles/qrLanding.css` | Defines `.qr-page-shell`, `.qr-topbar`, `.qr-landing`, `.qr-panel`, `.qr-hero`, `.qr-kicker`, `.qr-hero-image`, `.qr-cta`, `.qr-section`, `.qr-benefit-grid`, `.qr-next-card`, `.qr-error`, and mobile QR layout rules. Uses global semantic tokens such as `--background`, `--foreground`, `--card`, `--border`, `--primary`, `--secondary`, `--muted-foreground`, and `--destructive`. | Current QR campaign visual layer. | QR is token-referenced but visually divergent from newer `.wnyhs-*` primitives; QR runtime/source behavior is protected. |
| `src/styles/canonicalEstimateForm.css` | Defines `.contact-intake-panel.qr-panel`, `.estimate-form-shell`, `.estimate-field`, field inputs/selects/textareas, `.estimate-submit`, choice controls, stage notes, focus shadows, disabled states, and form grid rules. | Current estimate/contact/support/QR form styling evidence. | Form shell and field states are split across global tokens, QR selectors, estimate selectors, and WNYHS contact/support overrides. |
| `src/index.css` | Defines global `--background`, `--foreground`, `--card`, `--primary`, `--secondary`, `--muted-foreground`, `--border`, `--input`, `--ring`, `--destructive`, `--success`, `--warning`, `--wny-*`, `--color-*`, `--kaec-*`, `.btn`, `.btn-primary`, `.btn-secondary`, `.card`, print/doc styles, package styles, and many legacy/global rules. | Older global semantic token and legacy style source. | Contains dark/global defaults, KAEC aliases, raw colors, broad button/card systems, and mixed historical styles. |
| `src/newsite/theme/tokens.css` | Defines `--ns-font-sans`, `--ns-font-heading`, `--ns-radius-*`, `--ns-spacing-*`, `--ns-shadow-*`, `--ns-bg`, `--ns-surface`, `--ns-border`, `--ns-text`, `--ns-accent`, and nav tokens. | Prototype/newsite token vocabulary. | Separate prototype vocabulary; not the governed public WNYHS source for this current-state reference. |

Current governed visual direction from DESIGN002 and PAGE_TOKEN_COMPLIANCE_GATE: Inter body/UI, Manrope headings, warm off-white canvas, light surfaces, selective charcoal emphasis panels, gold/black primary CTA posture, charcoal/outline secondary CTA posture, warm-neutral borders, controlled card density, and quiet structured footer.

## 4. Current Component Reference Table

Confidence levels describe confidence in the current evidence, not confidence that the current design is final.

| Canonical component name | Current source/style evidence | Current token or CSS class evidence | Current color/surface evidence | Current typography evidence | Current spacing/layout evidence | Current border/radius/shadow evidence | Current image dependency | Current accessibility concern | Current parity concern | Confidence | Future comparison need |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS Top Navigation | `WnyhsTopNav`, `homeSecurityPremium.css`, `wnyhsVisualGovernance.css` | `.wnyhs-top-nav`, `.wnyhs-button`, `IconizedLogo.png` | Dark/charcoal nav evidence and WNYHS action tokens | Inter UI, brand/link text | Sticky/flex header and mobile drawer evidence | Rounded dark header, borders, shadows | WNYHS Icon Mark | Mobile focus/tap targets | Main nav differs from QR nav | High | Compare nav, drawer, CTA, phone link, focus. |
| WNYHS Mobile Navigation | `WnyhsTopNav` | mobile drawer/nav selectors | Dark drawer/header evidence | Inter UI | Collapsed/mobile menu layout | Border/focus evidence partial | WNYHS Icon Mark | Focus trap/state not documented here | Mobile nav parity not fully proven | Medium | Compare open, focus, wrapping, tap targets. |
| WNYHS Site Footer | `WnyhsSiteFooter`, `wnyhsVisualGovernance.css` | `.wnyhs-footer` | Dark structured footer evidence | Inter small UI text | Footer column/stack evidence | Footer borders and muted text evidence | Optional icon mark | Footer link contrast/focus | Footer parity by route uncertain | High | Compare full footer and reduced variants. |
| WNYHS QR Campaign Navigation | `QrLanding.tsx`, `qrLanding.css` | `.qr-topbar`, `.qr-brand` | Global `--card`/`--border` campaign surface | Inter UI and QR link text | Sticky flex/wrapped nav | 1px border, blur, no WNYHS radius token | Icon Mark | Mobile wrapping/tap target | QR nav is separate vocabulary | High | Compare campaign nav without changing source behavior. |
| WNYHS QR Campaign Footer | QR close/footer context | QR route/footer evidence partial | Campaign surface/muted evidence | Inter small copy | Reduced campaign close/footer uncertain | Border/radius evidence partial | Optional Icon Mark | Link contrast | Reduced footer not formalized | Low | Compare campaign close if present. |
| WNYHS Page Shell | `WnyhsMarketingLayout`, CSS sources | `.wnyhs-page`, `.wnyhs-shell`, `.hs-premium-shell`, `.qr-page-shell` | Light WNYHS canvas plus dark global/QR canvas | Inter body | 1080-1120px shells, clamp padding, grids | Shell/card radii and shadows | None | Whole-page contrast | Light and dark shell systems coexist | High | Compare canvas/shell by page family. |
| WNYHS Hero Section | Homepage, category, solution, QR pages | `.hs-home-*`, `.hs-premium-hero`, `.wnyhs-category-hero`, `.qr-hero` | Dark category/Core hero, light/legacy hero, QR gradient | Manrope H1, Inter support | Split/grid hero and stacked mobile evidence | Media radius/border/shadow mixed | Hero, category, solution, QR images | Text contrast and image legibility | Multiple hero vocabularies | High | Compare each hero family separately. |
| WNYHS Page Intro | Search/legal/static pages | `.wnyhs-section-header`, page headers | Light surfaces, muted copy | Manrope heading, Inter body | Compact grid/gap | Minimal panel/border evidence | Usually none | Heading order/readability | Static page parity uncertain | Medium | Compare compact intro across static/legal/search. |
| WNYHS Section Block | All public pages | `.wnyhs-section`, `.wnyhs-section--dark`, `.qr-panel`, `.hs-premium-section-panel` | Light, dark, campaign surfaces | Section heading/body | Grid gaps and padding | Radius shell/card, borders, shadows | Optional | Contrast on dark/campaign | Panel/section/card terms overlap | High | Compare light, dark, campaign, legal variants. |
| WNYHS Section Header | Sections | `.wnyhs-section-header`, `hs-premium` headers | Surface-dependent text | Manrope heading, eyebrow/support copy | Grid gap evidence | No strong frame | None | Muted support contrast | Section header variants differ | High | Compare heading/support spacing and contrast. |
| WNYHS Final CTA Section | Homepage/category/solution/static pages | final CTA panels, `.wnyhs-button` | Gold/black action, light/dark panels | Manrope heading, Inter CTA | Action row/final panel layouts | Panel borders/radius/shadows | Optional logo/image | CTA focus/wrapping | CTA systems duplicated | Medium | Compare final CTA surface and actions. |
| WNYHS Legal Text Section | Legal pages, `wnyhsVisualGovernance.css` | `.wnyhs-legal-copy` | Light readable legal surface | Inter legal/body, Manrope headings | Constrained copy grid | Minimal borders | None | Link contrast and small text | Legal parity incomplete | Medium | Compare legal measure, headings, links. |
| WNYHS Eyebrow | Heroes/cards/QR | `.wnyhs-eyebrow`, `.hs-premium-eyebrow`, `.qr-kicker` | Gold/accent text | Small uppercase Inter evidence | Tight spacing | None | None | Small-text contrast | Eyebrow/kicker aliases differ | High | Compare light/dark/campaign labels. |
| WNYHS Page Heading | Page H1s | `.wnyhs-heading`, hero h1 selectors | Inherited/dark text | Manrope, clamp sizes | Hero/page layout-dependent | None | None | Mobile wrapping | Old/prototype heading stacks coexist | High | Compare H1 by surface and length. |
| WNYHS Section Heading | H2/H3 sections | `.wnyhs-heading`, section header h2/h3 | Inherited surface text | Manrope | Section grid rhythm | None | None | Heading order | Current sizes vary by page family | High | Compare hierarchy and compact surfaces. |
| WNYHS Card Heading | Cards/tiles/results | `.wnyhs-card-title`, card h3 selectors | Ink/default or inverse | Manrope/Inter evidence mixed | Card-local gap | None | Optional media | Long title wrap | Card heading sizing distributed | Medium | Compare card heading scale/wrap. |
| WNYHS Body Copy | All pages | `.wnyhs-description`, `.wnyhs-card-copy`, paragraphs | `--wnyhs-ink-muted`, global secondary text | Inter | Line-height and max-width vary | None | None | Muted/default contrast | Body/muted distinction inconsistent | High | Compare normal, long, linked copy. |
| WNYHS Muted Copy | Cards, footer, forms | muted variables/classes | `--wnyhs-ink-muted`, `--muted-foreground`, `--hs-premium-muted` | Inter small/body | Local gaps | None | None | Low-contrast risk | Muted colors differ by surface | High | Compare muted on light/dark/campaign/forms. |
| WNYHS Fine Print | Legal/forms/package caveats | notes, small text, status/caveats | Muted/status tokens | Inter small text | Local margins | None | None | Small text contrast | No dedicated fine-print token | Medium | Compare caveats, legal, review notes. |
| WNYHS Primary CTA | Buttons/forms/QR | `.wnyhs-button--primary`, `.btn-primary`, `.qr-cta`, `.estimate-submit` | Gold/black or global primary | Inter button text | Pill padding, action rows | Pill radius, shadows, focus | None | Focus/disabled contrast | Button systems duplicated | High | Compare primary, submit, campaign variants. |
| WNYHS Secondary CTA | Buttons/links | `.wnyhs-button--secondary`, `.btn-secondary`, outline links | Charcoal/outline/link surfaces | Inter button/link | Paired action rows | Pill/border evidence | None | Affordance and focus | Secondary styles vary | High | Compare outline, compact, paired states. |
| WNYHS Text Link CTA | Cards/legal/search/footer | anchors/result CTAs | Accent/link color, underline evidence | Inter link text | Inline/card spacing | Focus/underline partial | None | Color-only risk | Link treatment varies | Medium | Compare body, card, legal, footer links. |
| WNYHS Phone CTA | Nav/contact/QR | phone links, CTA rows | Link or button treatment | Inter action text | Tap target layout | Focus partial | Optional icon | Mobile tap target | Phone CTA weight varies | Medium | Compare nav/hero/contact/QR contexts. |
| WNYHS Panel | Grouped surfaces | `.wnyhs-section`, `.qr-panel`, `.hs-premium-section-panel`, package panels | Light/dark/campaign/form surfaces | Heading/body by context | Grid/padding local | Border/radius/shadow mixed | Optional | Text/control contrast | Panel/card boundary unclear | High | Compare panel roles without nesting drift. |
| WNYHS Feature Card | Category/solution/support/cards | `.wnyhs-card`, `.hs-premium-*card`, `.qr-benefit-grid article` | Light raised cards and QR campaign cards | Card heading/body | Grid cards, equal-height candidate | Radius card, border, shadow | Optional card image | Card link/focus | Duplicated card systems | High | Compare feature/media cards across pages. |
| WNYHS Tile | Category/routine/search | routine tiles, chips, category compact blocks | Light/gold-soft chip/card evidence | Short labels | Compact grids/strips | Pill/card radius | Optional thumbnail/icon | Tap target/focus | Tile/chip/card overlap | Medium | Compare compact dimensions and wrapping. |
| WNYHS Proof Card | Trust/gallery/proof | gallery/trust cards | Card/proof surfaces | Caption/body | Gallery/card grids | Card/media frames | Proof Image | Caption/alt posture | Proof/story authority conservative | Medium | Compare proof-safe cards and captions. |
| WNYHS Search Result Card | Search | search result card/group classes | WNYHS card/result surfaces | Type label/title/summary | Result list/group layout | Card border/radius | Usually none | Result count/focus | Search-specific system | Medium | Compare result, empty state, labels. |
| WNYHS Alert / Info Block | Search/forms/support/QR | form messages, QR errors, empty states | Info/error/status surfaces partial | Short heading/body | Local blocks | Border/radius partial | Optional icon | Status semantics/contrast | Status token categories incomplete | Medium | Compare info, error, success, warning candidates. |
| WNYHS Core Panel | Homepage/category/packages | Core dashboard/phone/logo blocks | Dark/light Core panels | Manrope heading, Inter copy | Dashboard/phone/logo hierarchy | Panel/card/media frames | Core Panel Image | Dashboard/phone legibility | Core differs by page family | High | Compare homepage/category/package Core. |
| WNYHS Package Tier Block | Packages/detail/home cards | package cards, price chips, tier blocks | Review/package card surfaces | Tier title/caveat text | Comparison grids/cards | Card border/radius/shadow | Package images if present | Caveat/status readability | Package/review posture mixed | Medium | Compare without changing prices/data/routes. |
| WNYHS Vault Tile | Packages/custom | Vault/custom panels/cards | Package/custom card evidence | Caveat/status text | Compact card/panel | Card/panel borders | No dedicated image found | Caveat clarity | Vault image role absent | Medium | Compare text-first Vault and optional future placeholder. |
| WNYHS QR Campaign Block | QR route | `.qr-benefit-grid`, `.qr-next-card`, `.qr-strip`, `.qr-panel` | Campaign cards, global dark tokens | QR heading/body/kicker | Phone-first grids and stacks | 14-18px radius, borders | QR Image/Icon Mark | Mobile readability/focus | QR divergence from WNYHS primitives | High | Compare QR blocks as campaign variant. |
| WNYHS Dashboard Preview Block | Core/category/demo | Core dashboard/phone images, category proof | Media/panel surfaces | Captions/body | Dashboard primary, phone secondary | Media frame/radius/border | Dashboard Preview Image | Image text legibility | Aspect/frame tokens incomplete | High | Compare contain/cover and caption readability. |
| WNYHS Category Image Block | Category pages | `.wnyhs-category-*`, Home Automation reference | Category hero/reveal/proof surfaces | Captions/labels | Hero/reveal/proof/routine grids | Media radius/border/shadow | Category Image | Hover/focus/tap usability | Non-Home-Automation assets incomplete | High | Compare hero/reveal/dashboard/mobile/routine. |
| WNYHS Solution Scenario Block | Solution pages | `SolutionOpportunity` hero/sample structures | Solution media/card surfaces | Scenario text | Split/sample blocks | Media frame partial | Solution Image | Alt/caption clarity | Two-image system only | Medium | Compare hero/sample/scenario roles. |
| WNYHS Our Work Gallery Block | Our Work | gallery data/styles | Gallery/proof card surfaces | Caption/copy | Gallery grid | Media/card frames | Proof/Gallery Image | Caption and proof-safe posture | Proof/story verification open | Medium | Compare gallery cards and labels. |
| WNYHS Form Shell | Contact/support/search/QR | `.estimate-form-shell`, `.contact-intake-panel.qr-panel`, search forms | Card/form surfaces | Form title/support text | Form grids/stages | 12-16px radii, borders | Usually none | Labels/status/readability | Form shells split across layers | High | Compare shell, status, stage, submit areas. |
| WNYHS Form Field | Forms/search | `.estimate-field`, QR/global inputs | `--input`, `--secondary`, border/ring | Inter input text | Field rows/grids | 8-10px radius, focus shadows | None | Visible label/focus/error | Field state tokens incomplete | High | Compare text, search, required/optional states. |
| WNYHS Form Label | Forms | labels, `.estimate-field span`, `.qr-field-title` | Muted/default label colors | Inter 0.9rem evidence | Label/control gaps | None | None | Label contrast/association | Labels can share muted token | High | Compare label vs helper distinction. |
| WNYHS Form Help Text | Forms | notes/small/helper text | Muted/global text | Inter small | Local margins/gaps | None | None | Low-contrast risk | Help and muted body overlap | Medium | Compare helper on light/dark/campaign forms. |
| WNYHS Form Error Text | Forms/QR | `.qr-error`, destructive/status tokens | `--destructive`, `--wnyhs-danger` | Inter bold/small | Field/form status spacing | Error border partial | None | Error association/contrast | Error surfaces incomplete | Medium | Compare field and form errors. |
| WNYHS Select Field | Forms | select controls in QR/estimate | Secondary/input surfaces | Inter control text | Full-width/min-height | 8-10px radius, focus ring | None | Keyboard/focus visibility | Select affordance partial | Medium | Compare select normal/focus/disabled. |
| WNYHS Textarea Field | Forms | textarea controls in QR/estimate | Secondary/input surfaces | Inter control text | Min-height 100-112px | 8-10px radius, focus ring | None | Resize/readability | Textarea states local | Medium | Compare normal/focus/error/disabled. |
| WNYHS Submit Button | Forms | `.estimate-submit`, `.qr-cta`, `.wnyhs-button--primary` | Primary action colors | Inter bold | Full/pill button layouts | Pill radius, primary shadow, focus | None | Disabled/loading/status feedback | Submit/button systems overlap | High | Compare submit default, disabled, loading, error adjacency. |
| WNYHS Hero Image | Homepage/category/solution/QR | hero media classes and image paths | Media frame surfaces | Alt text evidence | Wide/split/contained variants | 16px media radius/border/shadow | Hero Image | Text inside image cannot be required | Hero role varies by page | High | Compare safe crop/aspect/mobile. |
| WNYHS Category Image | Category/home cards | category image paths/classes | Category frame surfaces | Alt/caption evidence | Hero/reveal/dashboard/mobile/routine/card layouts | Media radius/border | Category Image | Alt role and small thumbnail clarity | Asset packages uneven | High | Compare all category image roles. |
| WNYHS Solution Image | Solution/category/listing | solution image paths/classes | Card/hero media surfaces | Alt evidence | Hero/sample/card layouts | Media radius/border | Solution Image | Illustrative/source-safe alt | Folder/role split | High | Compare hero/sample/card use. |
| WNYHS Proof Image | Our Work/proof/gallery | gallery image data | Gallery media surfaces | Alt/caption evidence | Gallery grids | Media/card frame | Proof Image | Proof-safe captions | Proof/story governance open | Medium | Compare proof/gallery role and captions. |
| WNYHS QR Image | QR web and print assets | QR hero, print QR assets | Campaign/QR image contexts | Alt/print manifest evidence | Mobile-first/campaign image layouts | QR/media frame partial | QR Image | QR quiet zone, alt, mobile crop | Web/print roles split | High | Compare web QR image separate from print QR. |
| WNYHS Logo Mark | Brand/Core | `CrestLogo.png`, Core logo marks | Approved mark surfaces | Decorative/informative alt varies | Constrained brand moments | Intrinsic sizing needed | Logo Mark | Decorative vs informative role | Logo usage inventory incomplete | Medium | Compare crest/Core logo roles. |
| WNYHS Icon Mark | Nav/QR/cards | `IconizedLogo.png`, category icons | Compact icon surfaces | Empty/decorative or descriptive alt | Small fixed roles | Size/alignment evidence | Icon Mark | Small-size legibility/alt role | Icon system manifest incomplete | High | Compare nav/QR/category icon roles. |

## 5. Current Typography Reference

| Typography role | Current evidence | Current concern | Future comparison need |
| --- | --- | --- | --- |
| eyebrow | `.wnyhs-eyebrow`, `.hs-premium-eyebrow`, `.qr-kicker`; gold/accent small uppercase labels | Aliases and contrast differ by surface | Compare hero, section, card, campaign, legal labels. |
| H1 | `.wnyhs-heading`, hero h1 selectors, Manrope heading tokens, clamp values | Multiple hero/page implementations | Compare page H1 on light, dark, campaign, compact surfaces. |
| H2 | `.wnyhs-section-header h2`, section headings, Manrope | Section hierarchy varies | Compare section heading scale and spacing. |
| H3 | card/group headings, category routine headings, QR cards | Card heading sizing distributed | Compare card, panel, proof, form, package headings. |
| H4 | dense panels/status/package/review contexts | No dedicated role token found | Compare compact subsection headings. |
| body | Inter body, `.wnyhs-description`, paragraphs, global body | Body/default vs muted differs by style layer | Compare paragraph readability and measure. |
| muted copy | `--wnyhs-ink-muted`, `--wnyhs-ink-secondary`, `--muted-foreground`, `--hs-premium-muted` | Low-contrast risk on dark/campaign/forms | Compare muted copy across all surfaces. |
| fine print | legal notes, form notes, package/review caveats | No dedicated fine-print token | Compare small text contrast and line length. |
| legal text | `.wnyhs-legal-copy`, legal route copy | Legal pages simpler but not fully mapped | Compare measure, headings, lists, links. |
| CTA text | `.wnyhs-button`, `.btn`, `.qr-cta`, `.estimate-submit` | Button text roles overlap | Compare primary, secondary, phone, link, submit. |
| form label | `.estimate-field span`, QR label spans, form labels | Labels sometimes use muted text | Compare label vs helper contrast. |
| help text | estimate notes, small helper copy, QR small text | Helper can inherit muted or destructive styling | Compare helper text by state/surface. |
| error text | `.qr-error`, `--destructive`, `--wnyhs-danger` | Error surface/text mapping partial | Compare field error and form error readability. |

## 6. Current Action / Button Reference

| Action role | Current evidence | Current states discoverable | Current concern | Future comparison need |
| --- | --- | --- | --- | --- |
| primary CTA | `.wnyhs-button--primary`, `.btn-primary`, `.qr-cta`, gold/black and global primary evidence | hover/focus evidence in button and form layers | Duplicated button systems | Compare default, hover, focus, active. |
| secondary CTA | `.wnyhs-button--secondary`, `.btn-secondary`, outline/link buttons | hover/focus partial | Secondary/outline affordance varies | Compare paired action rows and contrast. |
| text link CTA | anchors, result CTAs, legal/footer links | hover/focus partial | Some links rely heavily on color | Compare underline/focus/link visibility. |
| phone CTA | nav phone, hero/contact/support/QR phone paths | tap/focus partially discoverable | Link vs button treatment varies | Compare mobile tap target and label clarity. |
| submit button | `.estimate-submit`, QR submit/CTA, primary button classes | focus, disabled discoverable; loading/error only partial | Submit states overlap with generic CTA | Compare default, focus, disabled, loading/error adjacency. |
| disabled/loading/error states | `.estimate-submit:disabled`, form error/status, QR error | disabled/error discoverable; loading partial | State taxonomy incomplete | Compare static visual states in VISPARITY007C before adoption. |

## 7. Current Container / Reference Surfaces

| Surface | Current evidence | Current concern | Future comparison need |
| --- | --- | --- | --- |
| panel | `.wnyhs-section`, `.hs-premium-section-panel`, `.qr-panel`, package panels | Panel/card boundary unclear | Compare light, dark, form, campaign, legal panels. |
| feature card | `.wnyhs-card`, `.hs-premium-*card`, QR benefit articles | Duplicated card systems | Compare repeated cards across page families. |
| tile | category tiles, routine thumbnails, chips, suggestions | Tile/card/chip terms overlap | Compare compact dimensions, focus, text wrapping. |
| proof card | gallery/trust/proof cards | Proof/story authority and captions need care | Compare proof-safe caption posture. |
| search result card | search result/group card evidence | Search-specific visual system | Compare result labels, empty states, focus. |
| alert/info block | form messages, empty states, QR errors | Status tokens incomplete | Compare info, empty, error, success, warning candidates. |
| Core Panel | homepage/category/packages Core image/copy blocks | Core differs by route family | Compare dashboard/phone/logo hierarchy. |
| Vault Tile | packages/custom work surfaces | Mostly text-card evidence; no dedicated image | Compare custom caveat/status clarity. |
| package/tier block | package cards, price chips, tier/detail surfaces | Package review/pricing posture protected | Compare structure without changing data/prices. |
| QR campaign block | `.qr-strip`, `.qr-benefit-grid`, `.qr-next-card`, `.qr-panel` | QR vocabulary diverges | Compare as campaign variant. |

## 8. Current Form Reference

| Form element | Current evidence | Current concern | Future comparison need |
| --- | --- | --- | --- |
| form shell | `.estimate-form-shell`, `.contact-intake-panel.qr-panel`, QR/search/contact/support wrappers | Split across WNYHS, QR, estimate, and global layers | Compare form shell surface and stage/status areas. |
| field | `.estimate-field`, QR input/select/textarea rules | Field state tokens incomplete | Compare normal/focus/error/disabled fields. |
| label | form labels, `.estimate-field span`, `.qr-field-title` | Label/helper distinction can blur | Compare visible label contrast and spacing. |
| help text | estimate stage notes, small/helper copy | Muted contrast risk | Compare helper on light/dark/campaign forms. |
| error text | `.qr-error`, `--destructive`, `--wnyhs-danger` | Error text/surface mapping partial | Compare field and form error treatment. |
| select | QR/estimate select controls | Select affordance/focus partial | Compare select default/focus/disabled. |
| textarea | QR/estimate textarea controls | Height/resize/state local | Compare textarea default/focus/error. |
| submit | `.estimate-submit`, `.qr-cta`, primary button classes | Disabled/loading/error state coverage partial | Compare submit states and form status adjacency. |
| focus state evidence | `--wnyhs-focus`, `--ring`, QR/form focus shadows | Focus consistency incomplete | Compare keyboard-visible focus on every control family. |

## 9. Current Image-Role Reference

This section uses VISPARITY005 findings. No image files were changed.

| Image role | Current evidence | Current dependency | Current concern | Future comparison need |
| --- | --- | --- | --- | --- |
| hero image | `/brand/heros/HomePageHero.png` governed but current homepage source uses `public/images/home-security/homepage/*`; QR uses `/images/home-security/hero-1024w.webp`; solution pages use route-backed hero/sample pairs | WNYHS Hero Image | Brand-approved hero usage uncertain; QR uses legacy hero variant | Compare current rendered hero roles before proposed standard. |
| category image | Homepage/category images in `public/images/home-security/homepage/*`; Home Automation full package in `public/images/category-pages/home-automation/` | WNYHS Category Image | Home Automation complete; other categories reuse homepage/solution assets | Compare category hero, reveal, dashboard, mobile, routine, thumbnail roles. |
| solution image | `public/images/home-security/solutions/*` and `public/images/solutions/*` | WNYHS Solution Image | Route/listing/SEO image roles overlap | Compare solution hero/sample/card roles. |
| QR image | QR route hero plus print QR assets under brand folders | WNYHS QR Image | Web QR and print QR roles split | Compare QR image without mixing print/web roles. |
| Core Panel image | `WNYHSCoreDashboard.png`, `WNYHSCorePhone.png`, `core-logo-mark-on-black.png` | WNYHS Core Panel Image | Generic Core assets reused across families | Compare Core image hierarchy and legibility. |
| Vault Tile image | No dedicated Vault image found | WNYHS Vault Tile Image | Vault appears text/card based | Compare image-absent current Vault state. |
| dashboard image | Core dashboard, Home Automation dashboard/phone, solution sample reuse | WNYHS Dashboard Preview Image | Dashboard text may be unreadable at rendered sizes | Compare contain/cover and caption context. |
| gallery image | `/images/our-work/*.png` via `ourWorkGallery.ts` | WNYHS Proof Image / Gallery Image | Proof/story verification remains conservative | Compare image/caption/alt posture. |
| logo mark | `CrestLogo.png`, Core logo marks, print marks | WNYHS Logo Mark | Web usage of approved crest uncertain | Compare decorative vs informative logo use. |
| icon mark | `IconizedLogo.png`, category icons | WNYHS Icon Mark | Icon manifest incomplete | Compare small-size legibility and alt roles. |

## 10. Current Issue Summary

Known current-state concerns:

- invisible or low-contrast text risk on muted copy, dark panels, QR cards, form helper/error text, chips, footer links, captions, and dashboard/mobile screenshots
- mixed token vocabularies across `wnyhs`, `hs-premium`, `hs-home`, `qr`, `btn`, `card`, `panel`, `kaec`, `ns`, and global semantic tokens
- hardcoded colors, rgba values, raw shadows, color-mix values, and legacy blue/dark-gradient treatments remain in current style evidence
- duplicated button/card/panel systems across WNYHS primitives, global styles, QR styles, package styles, and estimate form styles
- QR divergence from newer WNYHS primitives while QR source/form behavior remains protected
- form readability and focus-state gaps across Contact, Support, Search, QR, and estimate form layers
- image parity gaps, especially non-Home-Automation category packages, multi-role asset reuse, split solution folders, QR web/print role split, Core image reuse, and missing Vault image role
- alt-text gaps or inconsistencies for decorative versus informative logo/icon/reveal/gallery/dashboard images
- inconsistent spacing/radius/shadow evidence across shells, panels, cards, fields, images, and package/review surfaces
- review-only route uncertainty for packages, demos, planner, dashboard, legacy flat routes, and prototype/newsite surfaces

## 11. Current-State Visual Reference Limitation

This document describes current evidence only.

It is not an endorsement.

It is not the new standard.

It is the baseline for comparison against VISPARITY007C.

VISPARITY007C should define the Proposed Visual Standard Reference as a separate docs-only task before any implementation, screenshot, Playwright, CSS, token, image, route, hook, or QA activation work is considered.

## 12. Recommended Next Task

Recommended next task:

`VISPARITY007C - Proposed Visual Standard Reference`

VISPARITY007C should define the proposed visual standard reference for comparison against this current-state visual reference. It should remain docs-only unless a later bounded work order explicitly authorizes implementation.

## Scope Compliance

VISPARITY007B creates the Current State Reference only.

It includes:

- purpose and boundary
- current token/source inventory
- current component reference table for every VISPARITY003 canonical component
- current typography reference
- current action/button reference
- current container/reference surfaces
- current form reference
- current image-role reference using VISPARITY005 findings
- current issue summary
- current-state limitation
- recommended next task

It does not:

- edit source code
- edit route files
- edit CSS
- edit tokens
- edit UI components
- edit images or assets
- create screenshots
- create Playwright tests
- create hooks
- create QA checks
- create baseline folders
- edit sitemap or robots
- edit runtime/API files
- edit HubSpot behavior
- edit Stripe/payment behavior
- edit scheduling
- edit Cloudflare config
- edit dependencies or package-lock
- approve final visual implementation
- create proposed new design values
- activate any KAOS rule
- merge
