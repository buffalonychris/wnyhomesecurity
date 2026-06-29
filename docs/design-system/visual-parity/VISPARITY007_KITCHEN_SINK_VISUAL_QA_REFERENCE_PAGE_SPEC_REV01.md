# VISPARITY007 Kitchen-Sink Visual QA Reference Page Spec REV01

Task ID: VISPARITY007
Task Name: Kitchen-Sink Visual QA Reference Page Spec
Status: Reference page specification only
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## Boundary

This document specifies a future kitchen-sink visual QA reference page.

It is a specification only.
It does not implement a page.
It does not create a route.
It does not create React components.
It does not edit CSS.
It does not edit tokens.
It does not add images or assets.
It does not create screenshots.
It does not create Playwright tests.
It does not activate QA automation.
It does not activate hooks.
It does not change runtime behavior.
It does not create an Active KAOS Rule.

Protected systems and forbidden implementation surfaces remain out of scope:

- HubSpot / CRM
- Stripe/payment
- scheduling/calendar
- Lead Signal and requestId
- QRLanding attribution/runtime behavior
- Resend/email runtime
- Cloudflare configuration
- secrets and environment values
- source files, routes, UI components, CSS, tokens, images/assets, sitemap, robots, dependencies, and package-lock

## Source Inputs

Primary VISPARITY inputs:

- `VISPARITY001_PUBLIC_ROUTE_ELEMENT_DISCOVERY_REV01.md`
- `VISPARITY002_PUBLIC_MARKETING_VISUAL_PARITY_TARGET_MATRIX_REV01.md`
- `VISPARITY003_VISUAL_COMPONENT_NAMING_STANDARD_REV01.md`
- `VISPARITY004_CSS_TOKEN_MAPPING_AND_GAP_REGISTER_REV01.md`
- `VISPARITY005_IMAGE_PARITY_AND_ASSET_USAGE_REGISTER_REV01.md`
- `VISPARITY006_PUBLIC_MARKETING_PAGE_COMPLIANCE_PLAN_REV01.md`

Targeted governing inputs:

- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`
- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`

## 1. Purpose

The future kitchen-sink visual QA reference page should become the single canonical visual reference for WNYHS public-facing visual components.

The page should serve as:

- canonical visual reference
- screenshot baseline
- design approval page
- Playwright reference page
- visual regression baseline
- accessibility baseline
- CSS token validation page

The page should contain one controlled example of every canonical public-facing WNYHS visual component, layout primitive, typography element, image role, form control, CTA, panel, tile, and accessibility state defined by VISPARITY003 through VISPARITY006.

The page should not replace page-family standards. It should provide stable examples future tasks can compare against when editing homepage, category, solution, search, support/contact, legal, QR/campaign, proof/gallery, package/review, and Core surfaces.

## 2. Page Layout

The future reference page should be organized as a long, sectioned, non-indexed internal QA/reference page.

Suggested section order:

| Section | Required content | Notes |
| --- | --- | --- |
| Navigation | Main-site and QR/campaign navigation examples | Show desktop and mobile-state targets conceptually; implementation is future work. |
| Global Header | Brand mark, text lockup, primary actions, phone/contact action | Must follow header/footer standards. |
| Hero | Primary, compact, image, panel, and campaign hero examples | Use canonical labels and token-dependent surfaces. |
| Typography | Eyebrow, H1, H2, H3, H4, body, muted, fine print, legal, CTA, labels, help, errors | No raw font values in this spec. |
| Buttons | Primary, secondary, text link, phone CTA, submit, disabled, loading, focus, hover | Must map to action token categories. |
| Panels | Light, dark, campaign, legal, form, Core, package, final CTA panels | Avoid nested-card examples unless a real component requires framing. |
| Cards | Feature, proof, search result, support, package, gallery cards | Include required/optional states. |
| Tiles | Category, routine, suggestion, Vault tile examples | Stable dimensions and mobile wrapping should be demonstrated later. |
| Forms | Text, email, phone, textarea, select, checkbox, radio, submit, validation, success, error, disabled, loading | Runtime behavior remains out of scope. |
| Tables | Documentation/reference table style if used | Only if the future page needs tabular QA data. |
| Images | Hero, category, solution, QR, Core, Vault, dashboard, gallery, logo, icon | Use role labels from VISPARITY005. |
| Icons | Logo mark, icon mark, small UI icons if approved | No new icon system is authorized here. |
| QR Components | QR campaign nav, hero, benefit/next-step block, QR image, contact path | Preserve QR-specific structure and runtime boundaries. |
| Core Panel | Homepage Core, category Core, dashboard/phone/logo proof hierarchy | Show image legibility expectations. |
| Vault Tiles | Custom/review-only tile and caveat posture | Avoid price, cost, or private detail exposure. |
| Package Blocks | Starting-point card, detail/review block, caveat/status text | No internal BOM or cost basis. |
| Alerts | Info, empty, success, error, warning candidate states | Candidate status taxonomy only. |
| Proof Cards | Proof/gallery/example-safe cards and captions | Do not imply unverified proof. |
| Gallery | Gallery image, caption, focus, mobile crop examples | Must follow image role and alt posture. |
| Footer | Full public footer and reduced campaign close | One public footer pattern only. |
| Accessibility States | Keyboard focus, tab order, contrast, ARIA examples, long/short text, link states, error states, mobile targets | Future QA only. |
| Light/Dark Examples | Light public canvas and dark emphasis panel examples | Only where applicable under DESIGN002 and token gate. |

## 3. Component Coverage Matrix

The future reference page should include every VISPARITY003 canonical component. Each component must document whether it is required or optional on the reference page and must show, when applicable, variants, hover state, focus state, disabled state, mobile state, desktop state, token dependency, image dependency, and accessibility dependency.

| Canonical component | Required | Optional | Variants to show | Hover state | Focus state | Disabled state | Mobile state | Desktop state | Token dependency | Image dependency | Accessibility dependency |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS Top Navigation | Yes | No | Primary, Compact, Review Only | Yes | Yes | N/A | Yes | Yes | header, link, action, focus | Icon Mark | keyboard nav, tap targets |
| WNYHS Mobile Navigation | Yes | No | Primary, Compact | N/A | Yes | N/A | Yes | N/A | drawer, surface, link, focus | Icon Mark | focus trap candidate, tap targets |
| WNYHS Site Footer | Yes | No | Primary, Compact, Review Only | Yes | Yes | N/A | Yes | Yes | footer, link, muted, border | Icon Mark | link contrast, focus |
| WNYHS QR Campaign Navigation | Yes | No | Campaign, Compact | Yes | Yes | N/A | Yes | Yes | campaign, link, phone action | Icon Mark | QR mobile tap targets |
| WNYHS QR Campaign Footer | Yes | Yes | Campaign, Compact | Yes | Yes | N/A | Yes | Yes | campaign footer, muted, link | Optional Icon Mark | link contrast |
| WNYHS Page Shell | Yes | No | Primary, Legal, Review Only, Campaign | N/A | N/A | N/A | Yes | Yes | canvas, shell, spacing | None | readable measure |
| WNYHS Hero Section | Yes | No | Primary, Compact, Campaign, Image, Panel | CTA hover | CTA focus | N/A | Yes | Yes | hero, text, action, image frame | Hero/Category/Solution/QR Image | heading order, readable text |
| WNYHS Page Intro | Yes | No | Compact, Legal, Review Only | Link hover | Link focus | N/A | Yes | Yes | intro, text, spacing | Usually none | heading order |
| WNYHS Section Block | Yes | No | Primary, Secondary, Dark, Legal, Campaign | N/A | N/A | N/A | Yes | Yes | surface, border, spacing | Optional | contrast |
| WNYHS Section Header | Yes | No | Primary, Compact, Legal | N/A | N/A | N/A | Yes | Yes | heading, eyebrow, muted | None | heading hierarchy |
| WNYHS Final CTA Section | Yes | No | Primary, Compact, Campaign | Yes | Yes | N/A | Yes | Yes | action, panel, text | Optional Logo Mark | clear action labels |
| WNYHS Legal Text Section | Yes | No | Legal | Link hover | Link focus | N/A | Yes | Yes | legal text, link, surface | None | readable measure |
| WNYHS Eyebrow | Yes | No | Primary, Section, Card, Campaign, Legal | N/A | N/A | N/A | Yes | Yes | accent, text | None | contrast |
| WNYHS Page Heading | Yes | No | Primary, Compact, Legal, Campaign | N/A | N/A | N/A | Yes | Yes | typography, text | None | H1 clarity |
| WNYHS Section Heading | Yes | No | Primary, Compact, Legal | N/A | N/A | N/A | Yes | Yes | typography, text | None | heading order |
| WNYHS Card Heading | Yes | No | Primary, Compact, Featured | N/A | N/A | N/A | Yes | Yes | card heading, text | Optional | wraps cleanly |
| WNYHS Body Copy | Yes | No | Primary, Compact, Legal | Link hover if present | Link focus if present | N/A | Yes | Yes | body, text | None | line length |
| WNYHS Muted Copy | Yes | No | Secondary, Compact, Legal | Link hover if present | Link focus if present | N/A | Yes | Yes | muted text | None | contrast |
| WNYHS Fine Print | Yes | No | Legal, Review Only, Compact | Link hover if present | Link focus if present | N/A | Yes | Yes | fine-print text | None | small text contrast |
| WNYHS Primary CTA | Yes | No | Primary, Full Width, Campaign, Submit | Yes | Yes | Yes | Yes | Yes | action primary, focus | None | visible label |
| WNYHS Secondary CTA | Yes | No | Secondary, Outline, Compact | Yes | Yes | Yes | Yes | Yes | action secondary, border | None | affordance |
| WNYHS Text Link CTA | Yes | No | Primary Link, Secondary Link, Legal | Yes | Yes | N/A | Yes | Yes | link, focus | None | not color-only |
| WNYHS Phone CTA | Yes | No | Primary, Secondary, Campaign | Yes | Yes | N/A | Yes | Yes | phone action, link | Optional Icon Mark | tap target |
| WNYHS Panel | Yes | No | Primary, Secondary, Dark, Campaign, Legal | N/A | N/A | N/A | Yes | Yes | panel, surface, radius | Optional | contrast |
| WNYHS Feature Card | Yes | No | Primary, Featured, Compact, Media | Yes | Yes | N/A | Yes | Yes | card, border, shadow | Optional card image | card link focus |
| WNYHS Tile | Yes | No | Compact, Category, Routine, Suggestion | Yes | Yes | N/A | Yes | Yes | tile, action, border | Optional thumbnail/icon | tap target |
| WNYHS Proof Card | Yes | No | Featured, Gallery, Compact, Review Only | Yes | Yes | N/A | Yes | Yes | proof card, caption | Proof Image | caption/alt posture |
| WNYHS Search Result Card | Yes | No | Primary, Compact, Empty State | Yes | Yes | N/A | Yes | Yes | result card, label, link | Usually none | result semantics |
| WNYHS Alert / Info Block | Yes | No | Info, Error, Empty State, Review Only | N/A | Link focus if present | N/A | Yes | Yes | status, border, text | Optional icon | role/semantics candidate |
| WNYHS Core Panel | Yes | No | Primary, Category, Package, Compact | CTA hover | CTA focus | N/A | Yes | Yes | Core panel, dark/light, action | Core Panel Image | image legibility |
| WNYHS Package Tier Block | Yes | No | Starting Point, Detail, Compact, Review Only | Yes | Yes | N/A | Yes | Yes | package card, caveat, action | Package image if approved | caveat readability |
| WNYHS Vault Tile | Yes | No | Compact, Review Only, Featured | Yes | Yes | N/A | Yes | Yes | Vault tile, status, border | Optional Vault image | caveat clarity |
| WNYHS QR Campaign Block | Yes | No | Campaign, Compact, Featured | Yes | Yes | N/A | Yes | Yes | QR/campaign tokens | QR Image/Icon Mark | phone-first layout |
| WNYHS Dashboard Preview Block | Yes | No | Core, Category, Compact, Review Only | N/A | N/A | N/A | Yes | Yes | image frame, panel | Dashboard Preview Image | text not required for meaning |
| WNYHS Category Image Block | Yes | No | Hero, Reveal, Dashboard, Mobile, Routine, Solution Thumbnail | Reveal hover | Reveal focus | N/A | Yes | Yes | image frame, category surface | Category Image | hover/focus/tap usability |
| WNYHS Solution Scenario Block | Yes | No | Hero, Sample, Scenario, Compact | CTA hover | CTA focus | N/A | Yes | Yes | solution media, card | Solution Image | alt/caption clarity |
| WNYHS Our Work Gallery Block | Yes | No | Gallery, Featured, Compact, Review Only | Yes | Yes | N/A | Yes | Yes | gallery, proof, caption | Proof/Gallery Image | proof-safe captions |
| WNYHS Form Shell | Yes | No | Contact, Support, Search, Campaign, Review Only | N/A | Within fields | N/A | Yes | Yes | form shell, status, surface | Usually none | labels and status |
| WNYHS Form Field | Yes | No | Text, Select, Textarea, Search, Optional, Required | Yes | Yes | Yes | Yes | Yes | input, border, focus, status | None | visible label |
| WNYHS Form Label | Yes | No | Primary, Compact, Required | N/A | N/A | N/A | Yes | Yes | label, text | None | association |
| WNYHS Form Help Text | Yes | No | Primary, Compact | N/A | N/A | N/A | Yes | Yes | helper, muted | None | contrast |
| WNYHS Form Error Text | Yes | No | Field Error, Form Error | N/A | N/A | N/A | Yes | Yes | error text, status | None | error association |
| WNYHS Select Field | Yes | No | Required, Optional, Compact | Yes | Yes | Yes | Yes | Yes | select, input, focus | None | keyboard operation |
| WNYHS Textarea Field | Yes | No | Required, Optional, Compact | Yes | Yes | Yes | Yes | Yes | textarea, input, focus | None | label and resize behavior |
| WNYHS Submit Button | Yes | No | Primary, Full Width, Campaign | Yes | Yes | Yes | Yes | Yes | submit, action, disabled/loading | None | status feedback |
| WNYHS Hero Image | Yes | No | Primary, Category, Solution, Campaign | N/A | N/A | N/A | Yes | Yes | image frame, radius, shadow | Hero Image | alt text |
| WNYHS Category Image | Yes | No | Hero, Reveal Before, Reveal After, Dashboard, Mobile, Routine, Core, Solution Thumbnail | Reveal hover if applicable | Reveal focus if applicable | N/A | Yes | Yes | category image frame | Category Image | role-specific alt |
| WNYHS Solution Image | Yes | No | Hero, Sample, Scenario, Card | N/A | N/A | N/A | Yes | Yes | solution image frame | Solution Image | illustrative alt posture |
| WNYHS Proof Image | Yes | No | Gallery, Proof, Example, Review Only | N/A | N/A | N/A | Yes | Yes | proof image frame | Proof Image | source-safe alt/caption |
| WNYHS QR Image | Yes | No | Campaign, QR Code, Brand, Compact | N/A | N/A | N/A | Yes | Yes | QR frame, campaign | QR Image | scan/alt posture |
| WNYHS Logo Mark | Yes | No | Icon, Crest, Compact, Large | N/A | N/A | N/A | Yes | Yes | logo sizing/spacing | Logo Mark | decorative vs informative |
| WNYHS Icon Mark | Yes | No | Compact, Decorative, Informative | N/A | N/A | N/A | Yes | Yes | icon sizing/alignment | Icon Mark | alt role |

## 4. Typography Matrix

The reference page should demonstrate every public typography role without defining final numeric values.

| Typography role | Required example | Required states or contexts | Dependency |
| --- | --- | --- | --- |
| Eyebrow | Hero, section, card, campaign, legal | Light/dark/campaign surfaces | Accent and text tokens |
| H1 | Primary page heading and compact page heading | Long and short text | Heading token |
| H2 | Section heading | Light/dark surface | Heading token |
| H3 | Card/group heading | Card, panel, proof, form | Heading/card token |
| H4 | Dense panel/subsection heading | Legal, form, status, package/review | Heading/body hierarchy |
| Body | Standard paragraph | Short, long, linked text | Body text token |
| Muted | Support/caption/helper copy | Light/dark/campaign surface | Muted text token |
| Fine print | Caveat, small note, review-only status | Light/dark/legal | Fine-print token |
| Legal | Policy paragraph and list | Narrow readable measure | Legal text/link token |
| CTA text | Primary, secondary, phone, text link, submit | Hover/focus/disabled/loading where applicable | Action typography |
| Form labels | Required and optional labels | Field group and compact form | Label token |
| Errors | Field error and form error | Error text and status block | Status token |
| Help text | Field help and form note | Normal and compact | Helper/muted token |

## 5. Color / Token Demonstration Areas

The future reference page should demonstrate token categories only. It should not publish raw values.

Required demonstration areas:

- Canvas
- Surfaces
- Cards
- Borders
- Buttons
- Text
- Status colors
- Focus
- Spacing
- Radius
- Shadows
- Image framing

Each area should show the intended public role, eligible canonical components, light/dark/campaign/legal applicability, known VISPARITY004 gap IDs where relevant, and any required accessibility check.

## 6. Forms Section

The future forms section should include controlled examples of:

- Text
- Email
- Phone
- Textarea
- Select
- Checkbox
- Radio
- Submit
- Disabled
- Validation
- Success
- Error
- Loading

The forms section must explicitly remain visual/reference only. It must not define payloads, submission behavior, CRM behavior, support API behavior, consent payloads, or requestId behavior.

## 7. Images Section

The future image section should include one example of every VISPARITY005 role:

| Image role | Required demonstration | Notes |
| --- | --- | --- |
| Hero | Primary, category, solution, campaign | Subject must remain readable on mobile. |
| Category | Hero, reveal, dashboard, mobile, routine, solution thumbnail, Core | Follow CATEGORY003 role distinctions. |
| Solution | Hero, sample, scenario, card | Maintain illustrative/source-safe posture. |
| QR | QR code, campaign hero, campaign brand image | Preserve QR quiet-zone and campaign boundaries. |
| Core | Dashboard, phone, logo/support image | Text inside screenshot must not be the only source of meaning. |
| Vault | Image-absent tile and optional future image placeholder | Do not imply custom scope is standardized. |
| Dashboard | Dashboard preview and phone/app preview | Legibility at rendered size is required. |
| Gallery | Proof/example image and caption | No unverified proof language. |
| Logo | Crest and compact logo mark examples | Use approved asset roles only. |
| Icon | Decorative and informative icon mark examples | Show alt-role difference. |

## 8. Accessibility Section

The future accessibility section should specify and demonstrate:

- Keyboard focus
- Tab order
- Contrast
- ARIA examples
- Long text
- Short text
- Link states
- Error states
- Mobile touch targets

Reference-page accessibility examples should cover navigation, buttons, cards, tiles, forms, search result cards, QR/campaign actions, gallery links, legal links, and footer links.

The reference page should include both normal content length and intentionally long labels/copy so future QA can detect wrapping, clipping, overlap, and unreadable states.

## 9. Future Playwright Coverage

Candidate only. No Playwright implementation is authorized by this document.

Candidate screenshot regions:

- `visual-reference-navigation`
- `visual-reference-hero`
- `visual-reference-typography`
- `visual-reference-buttons`
- `visual-reference-cards-tiles`
- `visual-reference-panels`
- `visual-reference-forms`
- `visual-reference-images`
- `visual-reference-qr`
- `visual-reference-core`
- `visual-reference-package-vault`
- `visual-reference-alerts`
- `visual-reference-gallery`
- `visual-reference-footer`
- `visual-reference-accessibility-states`

Candidate future baseline names:

- `visparity-reference-desktop-full`
- `visparity-reference-desktop-components`
- `visparity-reference-tablet-components`
- `visparity-reference-mobile-components`
- `visparity-reference-focus-states`
- `visparity-reference-form-states`
- `visparity-reference-image-roles`
- `visparity-reference-qr-campaign`

Candidate viewport list:

- desktop wide
- desktop standard
- tablet portrait
- mobile large
- mobile narrow

Candidate comparison strategy:

- Capture full-page and section-region screenshots.
- Compare only stable reference regions.
- Keep dynamic content out of the reference page.
- Store baselines only after operator approval.
- Treat differences as review signals first, not automatic failure, until a future QA task activates rules.

## 10. Future Hook Candidates

Candidate only. No hook implementation is authorized by this document.

Future hook candidate categories:

- Visual completeness
- Missing component
- Hardcoded color
- Token misuse
- Component naming
- Image role mismatch
- Alt-text
- Contrast

Candidate hook inputs should use VISPARITY003 canonical component names, VISPARITY004 token gap IDs, VISPARITY005 image role names, and VISPARITY006 page-family requirements.

## 11. Future QA Candidates

Candidate only. No QA implementation is authorized by this document.

Future QA candidate categories:

- Screenshot diff
- Accessibility
- Typography
- Spacing
- Image parity
- Token parity

The reference page should support both human review and future automated evaluation, but automation must remain inactive until a later bounded task authorizes it.

## 12. Future Implementation Plan

The future kitchen-sink reference page should become the single page every future visual change is validated against.

Recommended future implementation constraints:

- Create a noindex/internal-reference route only if a later task explicitly authorizes a route.
- Use existing WNYHS governed primitives and semantic tokens.
- Use canonical VISPARITY003 component labels in the page structure.
- Use VISPARITY005 image roles and only approved/available assets.
- Include static examples only; no CRM, payment, scheduling, support API, or quote-flow behavior.
- Keep QR/campaign examples visually represented without altering QR runtime/source behavior.
- Keep forms visual-only and non-submitting unless a future task explicitly defines otherwise.
- Make the page stable enough for screenshot baselines.
- Keep reference content claim-safe, proof-safe, and free of private/internal operational data.

The reference page should not become a new design system by itself. It should demonstrate repository-governed standards in one place so future changes can be evaluated consistently.

## 13. Recommended Next Task

Recommended next task:

`VISPARITY008 - Kitchen-Sink Visual QA Reference Page Implementation`

VISPARITY008 should implement the kitchen-sink visual QA reference page only after a bounded implementation task authorizes the route, files, source surfaces, CSS/tokens/images policy, validation, and protected-system boundaries.

## Scope Compliance

VISPARITY007 creates the kitchen-sink visual QA reference page specification only.

It includes:

- Purpose
- Page layout
- Component coverage matrix
- Typography matrix
- Color/token demonstration areas
- Forms section
- Images section
- Accessibility section
- Future Playwright coverage candidates
- Future hook candidates
- Future QA candidates
- Future implementation plan
- Recommended next task

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
- edit sitemap or robots
- edit runtime/API files
- edit HubSpot behavior
- edit Stripe/payment behavior
- edit scheduling
- edit Cloudflare config
- edit dependencies or package-lock
- approve final visual implementation
- activate any KAOS rule
- merge
