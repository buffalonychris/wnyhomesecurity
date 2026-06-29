# DESIGN004 WNYHS Component Catalog REV01

Task ID: DESIGN004
Task Name: WNYHS Component Catalog
Status: Component catalog authority only
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## 1. Purpose

This document defines the canonical WNYHS non-image UI component catalog for future visual implementation work.

It maps VISPARITY003 canonical component names to the DESIGN003 light-canvas style direction, prepares VISUALREV001, VISUALFREEZE002, and VISPARITY008+ implementation, and protects copy and image boundaries before any source, CSS, token, route, UI, image, runtime, or protected-system work begins.

## 2. Boundary

This catalog governs:

- reusable visual components
- component variants
- component states
- surface rules
- token role expectations
- accessibility requirements
- implementation readiness notes

This catalog does not govern or change:

- page copy
- headlines
- CTA wording
- pricing/package wording
- SEO copy
- production image prompts
- production image assets
- public image replacement
- runtime behavior
- form payload behavior
- HubSpot
- Stripe
- scheduling
- source/CSS/token implementation

## 3. Source Authority

Primary authority:

- `docs/design-system/DESIGN003_WNYHS_LIGHT_CANVAS_VISUAL_LANGUAGE_STANDARD_REV01.md` is the primary visual language authority for warm light canvas, controlled trust navy, premium gold, typography, surface, state, content, image, and non-authority boundaries.
- `docs/design-system/visual-parity/VISPARITY003_VISUAL_COMPONENT_NAMING_STANDARD_REV01.md` is the canonical component naming source.

Supporting evidence:

- `docs/design-system/visual-parity/VISPARITY004_CSS_TOKEN_MAPPING_AND_GAP_REGISTER_REV01.md` provides token mapping and gap evidence.
- `docs/design-system/visual-parity/artifacts/current-state/README.md` provides VISUALART001 current-state evidence.
- `docs/design-system/visual-parity/artifacts/proposed/README.md` provides VISUALART002 proposed-board evidence.
- `docs/design-system/visual-parity/artifacts/operator-review/README.md` provides VISUALART003 operator-review packet evidence.
- `docs/design-system/visual-parity/VISUALFREEZE001_VISUAL_FREEZE_APPROVAL_STANDARD_REV01.md` provides the approval-gate standard.

Additional governing references:

- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`
- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`

## 4. Catalog Table Format

Each component row uses these fields:

- canonical component name
- component family
- purpose
- visual role
- approved surface/background direction
- text/typography direction
- border/radius/shadow direction
- states required
- accessibility requirements
- allowed variants
- forbidden variants
- implementation notes
- copy boundary
- image boundary
- implementation status

Implementation status for all rows is: Not implemented by DESIGN004.

## 5. Component Catalog

### Navigation / Shell

| Canonical component name | Component family | Purpose | Visual role | Approved surface/background direction | Text/typography direction | Border/radius/shadow direction | States required | Accessibility requirements | Allowed variants | Forbidden variants | Implementation notes | Copy boundary | Image boundary | Implementation status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS Top Navigation | Navigation / shell | Global public orientation, brand, links, phone/contact path, and primary action. | Stable site orientation and conversion entry. | Primary surface or controlled trust navy; premium gold only for primary action. | Compact Inter labels; brand text remains readable. | Warm divider or dark-surface divider; radius only when framed; minimal shadow. | default, hover, focus, active, disabled where applicable, loading only for async action. | Visible focus ring, readable links, mobile tap target safety, not color-only active indication. | Primary, Compact, Review Only. | Unscoped header/nav aliases, unrelated app shell, duplicate global nav. | Future implementation must preserve destinations and order required by header/footer standards. | Preserve page copy verbatim and nav labels unless a later copy task authorizes changes. | Approved Logo Mark/Icon Mark usage only; no asset replacement. | Not implemented by DESIGN004 |
| WNYHS Mobile Navigation | Navigation / shell | Mobile equivalent of global orientation. | Reachable compact navigation. | Same token family as top nav; drawer surface uses primary or elevated warm surface. | Compact Inter labels with no clipping. | Warm border, stable radius if framed, soft shadow only for drawer separation. | default, hover, focus, active, disabled. | Visible focus ring, tap targets, no overflow, not color-only current state. | Primary, Compact. | Unscoped hamburger/drawer names, route behavior changes. | Future work must preserve menu destinations and route behavior. | Preserve page copy verbatim and link labels unless separately authorized. | Logo/Icon role only; no generated images. | Not implemented by DESIGN004 |
| WNYHS Site Footer | Navigation / shell | Shared public close path with local identity, support, legal, contact, and version display. | Quiet local identity and end-of-page navigation. | Controlled trust navy or approved quiet light footer. | Small Inter text; readable muted and link text. | Subtle divider; minimal radius unless framed; no heavy elevation. | default, hover, focus, active. | Link contrast, visible focus ring, readable fine print. | Primary, Compact, Review Only. | Duplicate global footers, unrelated demo/operator footer patterns. | Must follow header/footer standards and preserve version display. | Preserve footer copy and contact text unless a content task authorizes changes. | Approved Icon Mark only; no asset replacement. | Not implemented by DESIGN004 |
| WNYHS QR Campaign Navigation | Navigation / shell | Reduced scan-first QR/campaign orientation. | Phone-first campaign navigation. | QR campaign surface compatible with warm light canvas. | Short mobile-first Inter labels. | Minimal warm border; no clutter. | default, hover, focus, active, disabled. | Mobile tap target safety, visible focus ring, readable short labels. | Campaign, Compact. | Full public nav forced into QR route, unrelated campaign palette. | Must preserve QR nav standard, QR source, form, and attribution behavior. | Preserve QR nav wording unless a QR copy task authorizes changes. | Approved Icon Mark or QR role only; no public image replacement. | Not implemented by DESIGN004 |
| WNYHS QR Campaign Footer | Navigation / shell | Reduced QR/campaign close and local reassurance area. | Compact campaign close path. | Warm canvas, cream, or primary surface; controlled trust navy only if contrast-safe. | Compact Inter meta and links. | Subtle warm border; minimal elevation. | default, hover, focus, active. | Readable footer meta, visible focus ring, mobile tap targets. | Campaign, Compact. | Duplicate public footer, unrelated campaign footer. | Must remain compatible with QR funnel standards. | Preserve campaign footer copy unless later authorized. | Logo/Icon/QR role only; no asset replacement. | Not implemented by DESIGN004 |

### Page Structure

| Canonical component name | Component family | Purpose | Visual role | Approved surface/background direction | Text/typography direction | Border/radius/shadow direction | States required | Accessibility requirements | Allowed variants | Forbidden variants | Implementation notes | Copy boundary | Image boundary | Implementation status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS Page Shell | Page structure | Outer public page canvas and rhythm wrapper. | Coherent WNYHS site canvas. | Primary canvas / warm white by default; alternate canvas / cream for section rhythm. | Inter body defaults with Manrope heading inheritance. | No boxed app-shell feel; broad shell should avoid heavy radius/shadow. | default. | Page-wide sufficient contrast, no horizontal overflow, readable text. | Primary, Legal, Review Only, Campaign. | Dark full-page default, cold app shell, arbitrary one-off backgrounds. | Future implementation must use semantic token roles and page-family batches. | Does not authorize copy changes. | Does not authorize image replacement. | Not implemented by DESIGN004 |
| WNYHS Hero Section | Page structure | Primary page introduction with message, support, proof, and actions. | Premium first impression. | Warm canvas with primary/elevated surface; controlled trust navy only as bounded accent/surface. | Manrope H1; Inter support copy; no hero-scale type inside compact panels. | Warm border where framed; large surface radius; soft shadow only. | default, hover/focus/active for contained actions. | Text readable without image dependence, sufficient contrast, mobile wrapping. | Primary, Compact, Campaign, Image, Panel. | Fear-heavy or black-background trope, route-specific one-off hero system. | Preserve page structure and CTA destinations in future work. | Preserve headlines, body, and CTA wording. | Image containers may be styled; actual image assets remain separate future workstream. | Not implemented by DESIGN004 |
| WNYHS Page Intro | Page structure | Compact page orientation where full hero is not needed. | Clear page entry and context. | Warm canvas or primary surface. | Manrope heading with Inter support copy. | Minimal framing; standard radius if framed; no heavy shadow. | default. | Correct heading order, readable support copy. | Compact, Legal, Review Only. | Unscoped intro/header aliases, oversized hero treatment. | Use for search, legal, support/contact subregions, and review-only pages where appropriate. | Does not authorize headline or intro copy changes. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Section Block | Page structure | Major content band or section boundary. | Calm scanning rhythm. | Primary canvas, alternate canvas, primary surface, elevated warm surface, or controlled trust navy by role. | Section hierarchy remains readable. | Warm border/radius/shadow only when section is framed; no nested card clutter. | default; contained interactive states as needed. | Sufficient contrast, no layout jump, mobile spacing. | Primary, Secondary, Dark, Legal, Campaign. | Arbitrary decorative bands, one-off colors, heavy nested cards. | Future work must preserve page-specific section order unless authorized. | Does not authorize section copy changes. | Optional image container styling only when separately scoped. | Not implemented by DESIGN004 |
| WNYHS Section Header | Page structure | Eyebrow, heading, and support copy group. | Section scanning anchor. | Unframed on current section surface. | Restrained eyebrow, Manrope heading, Inter support copy. | No frame; spacing role only. | default. | Support copy contrast and readable wrapping. | Primary, Compact, Legal. | Decorative label blocks, unscoped title group aliases. | Use as shared visual language; not page-structure replacement. | Does not authorize heading/support copy changes. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Final CTA Section | Page structure | Closing next-step surface. | Clear conversion close. | Elevated warm surface or controlled trust navy; premium gold primary action. | Direct Manrope/Inter hierarchy; labels remain high contrast. | Large surface radius, warm border or dark divider, soft shadow. | default, hover, focus, active, disabled/loading for actions. | Visible focus ring, no layout jump, mobile tap targets. | Primary, Compact, Campaign. | Multi-offer clutter, price hype, new CTA destinations. | Future work must preserve routing and form behavior. | Preserve CTA wording unless separately authorized. | Optional Logo Mark only; no generated/replaced images. | Not implemented by DESIGN004 |
| WNYHS Legal Text Section | Page structure | Readable legal, policy, caveat, or review text surface. | Branded readable text surface. | Warm canvas or primary surface; minimal decoration. | Inter legal copy; Manrope headings; fine print remains readable. | Minimal warm border if framed; no heavy shadow. | default, hover/focus for links. | Link affordance, visible focus ring, readable small text. | Legal. | Marketing-heavy legal pages, low-contrast fine print. | Keep legal/review surfaces clear and simple. | Does not authorize legal copy changes. | No image changes. | Not implemented by DESIGN004 |

### Text

| Canonical component name | Component family | Purpose | Visual role | Approved surface/background direction | Text/typography direction | Border/radius/shadow direction | States required | Accessibility requirements | Allowed variants | Forbidden variants | Implementation notes | Copy boundary | Image boundary | Implementation status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS Eyebrow | Text | Short contextual label above hero, section, card, or campaign block. | Restrained context cue. | Inherits parent surface; premium gold/accent only where useful. | Small Inter label; avoid decorative noise. | None. | default. | Contrast at small size; not color-only when paired with meaning. | Primary, Section, Card, Campaign, Legal. | Kicker/tag aliases without role, overused decorative labels. | Use only when it adds orientation. | Does not authorize label copy changes. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Page Heading | Text | H1-level page identity. | Primary page claim. | Inherits page/hero surface; charcoal on light, inverse only on controlled navy. | Manrope, confident, readable, wraps cleanly. | None. | default. | Mobile line breaks safe; sufficient contrast. | Primary, Compact, Legal, Campaign. | Oversized display in compact surfaces, futuristic type. | Preserve heading order in future implementation. | Does not authorize headline changes. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Section Heading | Text | Section-level heading. | Scan anchor. | Inherits section surface. | Manrope H2/H3 role; no hero-scale type inside dense surfaces. | None. | default. | Correct heading order and contrast. | Primary, Compact, Legal. | Ambiguous subtitle/title aliases. | Map by role, not selector. | Does not authorize heading copy changes. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Card Heading | Text | Repeated card/tile/search/proof heading. | Compact scan anchor. | Inherits card surface. | Compact Manrope or governed card heading; wraps safely. | None. | default. | Long titles wrap without resizing cards unpredictably. | Primary, Compact, Featured. | Generic card title aliases without role. | Stable dimensions required in future implementation. | Does not authorize card title copy changes. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Body Copy | Text | Primary explanatory text. | Main readable copy. | Inherits light or controlled dark surface. | Inter, comfortable line height and measure. | None. | default. | Readable text, sufficient contrast. | Primary, Compact, Legal. | Low-contrast paragraph treatment. | Future implementation must preserve body content. | Preserve page copy verbatim. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Muted Copy | Text | Secondary support, captions, helper, and footer meta. | Lower-emphasis readable copy. | Inherits parent surface; secondary/muted text only when contrast remains acceptable. | Inter secondary copy; never for required labels or errors. | None. | default. | Readable text, sufficient contrast. | Secondary, Compact, Legal. | Invisible helper text, labels styled as muted. | Split by surface if future QA requires. | Preserve copy verbatim. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Fine Print | Text | Caveat, legal-adjacent, route-status, and small required notes. | Small but readable note. | Inherits legal/form/package/review surface. | Inter small text with strong enough contrast. | None. | default, hover/focus for links. | Fine print readability, link affordance, visible focus ring. | Legal, Review Only, Compact. | Disappearing disclaimers, decorative microcopy. | Must not hide required caveats. | Preserve fine-print copy verbatim. | No image changes. | Not implemented by DESIGN004 |

### Actions

| Canonical component name | Component family | Purpose | Visual role | Approved surface/background direction | Text/typography direction | Border/radius/shadow direction | States required | Accessibility requirements | Allowed variants | Forbidden variants | Implementation notes | Copy boundary | Image boundary | Implementation status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS Primary CTA | Actions | Highest-priority action in a page, section, card, QR block, or form context. | Main action. | Premium gold surface with high-contrast charcoal/navy text. | Short Inter label. | Pill button radius; subtle hover lift; visible focus ring. | default, hover, focus, active, disabled, loading, success/error adjacency where applicable. | Not color-only, readable text, no layout jump, mobile tap target safety. | Primary, Full Width, Campaign, Submit. | Generic btn aliases, blue primary drift, new destination behavior. | Future work must preserve href, route, and submit behavior. | Preserve CTA wording. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Secondary CTA | Actions | Lower-priority paired action. | Support action. | White/transparent or quiet surface with warm border. | Inter action label in charcoal/trust navy. | Pill or standard radius by context; minimal shadow. | default, hover, focus, active, disabled. | Visible focus ring, not color-only, readable text. | Secondary, Outline, Compact. | Competing primary styling, unscoped ghost button aliases. | Future work must preserve destinations. | Preserve CTA wording. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Text Link CTA | Actions | Inline or text-style action. | Lightweight action. | Transparent on parent surface. | Inter link text with underline/focus affordance where needed. | None except focus/underline affordance. | default, hover, focus, active, disabled where applicable. | Not color-only; visible focus ring; readable text. | Primary Link, Secondary Link, Legal. | Color-only links, button-like one-offs. | Link styling only; no route behavior changes. | Preserve link wording. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Phone CTA | Actions | Phone/call/text action. | Direct local contact action. | Primary or secondary treatment by context; campaign variant allowed. | Highly legible Inter label. | Pill radius when button-like; visible focus/tap state. | default, hover, focus, active, disabled. | Mobile tap target safety, visible focus ring, readable label. | Primary, Secondary, Campaign. | Hidden tiny phone links, destination changes. | Future work must preserve phone/contact destinations. | Preserve phone CTA wording. | No image changes. | Not implemented by DESIGN004 |

### Containers

| Canonical component name | Component family | Purpose | Visual role | Approved surface/background direction | Text/typography direction | Border/radius/shadow direction | States required | Accessibility requirements | Allowed variants | Forbidden variants | Implementation notes | Copy boundary | Image boundary | Implementation status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS Panel | Containers | Larger grouped surface framing one logical section or emphasis area. | Grouped emphasis surface. | Primary surface, elevated warm surface, alternate canvas, or controlled trust navy. | Contextual Manrope/Inter hierarchy. | Warm border, large surface radius for large panels, soft shadow only. | default; hover/focus only when interactive. | Contrast within panel, no nested-card clutter. | Primary, Secondary, Dark, Campaign, Legal. | Generic boxes, unrelated dark-dashboard blocks. | Future work should define panel role before CSS consolidation. | Preserve panel copy verbatim. | Optional image container styling only; no asset replacement. | Not implemented by DESIGN004 |
| WNYHS Feature Card | Containers | Repeated medium card for feature, category, solution, support, or value explanation. | Repeated explanation/navigation card. | Primary surface or elevated warm surface; campaign card variant allowed. | Card heading/body hierarchy. | Warm border, standard radius, soft card lift. | default, hover, focus, active, disabled where clickable. | Focus if clickable, readable body, stable dimensions. | Primary, Featured, Compact, Media. | Generic card aliases, nested card systems. | Map by role and page family before implementation. | Preserve card copy. | Card image frame only when scoped; actual image assets unchanged. | Not implemented by DESIGN004 |
| WNYHS Tile | Containers | Compact navigational, routine, suggestion, or shortcut item. | Compact item. | Primary surface or light surface. | Short readable label. | Warm border, standard radius, minimal shadow. | default, hover, focus, active, disabled where clickable. | Tap target safety, visible focus ring, stable dimensions. | Compact, Category, Routine, Suggestion. | Ambiguous chip/tile/card drift. | Future implementation must define fixed responsive dimensions. | Preserve tile labels. | Optional thumbnail/icon frame only; no asset replacement. | Not implemented by DESIGN004 |
| WNYHS Proof Card | Containers | Trust, example, gallery, or proof-safe context. | Conservative proof/example card. | Primary surface or elevated warm surface. | Conservative caption/body, readable muted copy. | Warm border, standard radius, soft shadow. | default, hover/focus if clickable. | Caption contrast, alt posture, no image-only meaning. | Featured, Gallery, Compact, Review Only. | Fabricated proof styling, unsupported story framing. | Keep proof/source posture conservative. | Preserve proof/gallery copy. | Proof image frame only; image assets remain separate future workstream. | Not implemented by DESIGN004 |
| WNYHS Search Result Card | Containers | Public search result item. | Search utility card. | Primary surface. | Type label, title, summary, and CTA in readable hierarchy. | Warm border, standard radius, minimal shadow. | default, hover, focus, active. | Result links and focus visible, no internal data exposure. | Primary, Compact, Empty State. | Generic listing systems not tied to WNYHS. | Future work must preserve search route/data behavior unless scoped. | Preserve result copy source behavior. | No image changes unless search image task authorizes. | Not implemented by DESIGN004 |
| WNYHS Alert / Info Block | Containers | Guidance, empty state, status, warning, or error block. | Status and guidance surface. | Semantic light surface with warm structure; success, warning, error, info roles. | Short readable Inter copy. | Semantic border plus standard radius; no heavy shadow. | default, success, warning, error, loading where applicable. | Status not color-only, readable text, sufficient contrast. | Info, Error, Empty State, Review Only. | Fear-heavy panels, decorative status color. | Future implementation must preserve runtime and form behavior. | Preserve status copy unless separately authorized. | Optional icon role only; no generated images. | Not implemented by DESIGN004 |

### Strategic / Unique

| Canonical component name | Component family | Purpose | Visual role | Approved surface/background direction | Text/typography direction | Border/radius/shadow direction | States required | Accessibility requirements | Allowed variants | Forbidden variants | Implementation notes | Copy boundary | Image boundary | Implementation status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS Core Panel | Strategic / unique | Explain WNYHS Core as a platform/foundation relationship. | Premium explanatory surface. | Elevated warm surface or controlled trust navy; must not become a dark-dashboard block. | Manrope heading, plain Inter body, readable supporting notes. | Warm or dark-surface border, large surface radius, soft but stronger-than-card lift. | default; contained action states as needed. | Text readable without image-only meaning; sufficient contrast. | Primary, Category, Package, Compact. | Dark-dashboard block, technical control-room trope, unscoped platform panel. | Preserve Core category/homepage distinction from governing standards. | Preserve Core copy unless a later content task authorizes changes. | Dashboard/Logo/Core image containers may be styled; actual images unchanged. | Not implemented by DESIGN004 |
| WNYHS Package Tier Block | Strategic / unique | Starting-point/package context without private details. | Review-safe comparison or package surface. | Primary surface or elevated warm surface. | Tier title, caveat, CTA, readable status/copy. | Warm border, standard radius, soft shadow. | default, hover, focus, active, disabled for actions. | Caveat/status readability, not color-only, mobile wrapping. | Starting Point, Detail, Compact, Review Only. | Private detail exposure, unapproved pricing behavior, price-hype styling. | Future work must preserve package data and pricing boundaries. | Preserve pricing/package wording. | Optional image frame only; image assets unchanged. | Not implemented by DESIGN004 |
| WNYHS Vault Tile | Strategic / unique | Compact custom/review-scope item. | Premium tile treatment. | Quiet primary surface or elevated warm surface; high-end, not gimmicky. | Compact clear copy with visible caveat/status. | Warm border, standard radius, minimal lift. | default, hover, focus, active, disabled where clickable. | Caveat clarity, readable text, stable tap target. | Compact, Review Only, Featured. | Cyberpunk, neon, black-background trope, unscoped custom tile. | Keep custom scope review-safe. | Preserve Vault copy and package wording. | No generated/replaced Vault image under DESIGN004. | Not implemented by DESIGN004 |
| WNYHS QR Campaign Block | Strategic / unique | QR-specific proof, benefit, next-step, or campaign section. | Scan-first, mobile-first campaign block. | Warm light-compatible campaign surface; may vary from full public nav while remaining WNYHS-compatible. | Phone-first headings/body; readable Inter copy. | Campaign card border/radius; soft/minimal shadow. | default, hover, focus, active, disabled, loading for contained form/action states. | Mobile tap target safety, visible focus ring, no runtime behavior changes. | Campaign, Compact, Featured. | Separate unrelated brand palette, full-site squeeze, QR runtime/attribution changes. | Must not change QR runtime or attribution behavior. | Preserve QR copy unless QR copy task authorizes changes. | QR/image containers may be styled; no asset replacement. | Not implemented by DESIGN004 |
| WNYHS Dashboard Preview Block | Strategic / unique | Dashboard/phone UI preview supporting Core or category proof. | Simple technology proof. | Framed primary/elevated surface. | Caption explains purpose; body text remains readable. | Media radius, warm border, soft shadow. | default, hover/focus if interactive. | No image-only meaning; dashboard text not required for comprehension. | Core, Category, Compact, Review Only. | Dense unreadable dashboard-as-proof, dark app mockup dominance. | Coordinate with image-role governance before implementation. | Preserve dashboard captions/copy. | Container only; actual dashboard images remain separate future workstream. | Not implemented by DESIGN004 |
| WNYHS Category Image Block | Strategic / unique | Category image role block for hero, reveal, dashboard, mobile, routine, or solution thumbnail. | Category visual system surface. | CATEGORY003-aligned surface and hierarchy. | Captions only where useful; readable if present. | Role-based media frame, warm border, radius, soft shadow where appropriate. | default, hover, focus, active for reveal/clickable cases. | Hover/focus/tap reveal usable, no image-only meaning. | Hero, Reveal, Dashboard, Mobile, Routine, Solution Thumbnail. | Unscoped thumbnails, unreadable dashboard thumbnails, asset replacement. | Use CATEGORY003 asset roles in future tasks. | Preserve related copy/captions. | Image containers may be styled; actual image assets remain separate future workstream. | Not implemented by DESIGN004 |
| WNYHS Solution Scenario Block | Strategic / unique | Solution scenario/sample visual and explanatory block. | Problem/solution context proof. | Primary/elevated surface aligned to solution page rules. | Scenario heading/body in Manrope/Inter hierarchy. | Media frame and warm bordered card/panel treatment. | default, hover/focus for actions. | Alt/caption clarity, sufficient contrast. | Hero, Sample, Scenario, Compact. | Dense infographic thumbnails, unapproved solution media replacement. | Preserve two-image solution system until a later task authorizes changes. | Preserve solution copy. | Container/frame only; no image replacement. | Not implemented by DESIGN004 |
| WNYHS Our Work Gallery Block | Strategic / unique | Gallery/proof-safe example work block. | Honest gallery/proof surface. | Primary/elevated surface with consistent image frames. | Captions avoid overstating proof; readable Inter copy. | Gallery media frame, standard radius, warm border. | default, hover, focus, active where clickable. | Caption/alt discipline, no image-only meaning. | Gallery, Featured, Compact, Review Only. | Unsupported proof treatment, inconsistent crops. | Future proof/story work requires separate authority. | Preserve gallery/proof copy. | Container/frame only; actual proof images unchanged. | Not implemented by DESIGN004 |

### Forms

| Canonical component name | Component family | Purpose | Visual role | Approved surface/background direction | Text/typography direction | Border/radius/shadow direction | States required | Accessibility requirements | Allowed variants | Forbidden variants | Implementation notes | Copy boundary | Image boundary | Implementation status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS Form Shell | Forms | Outer form surface, grouped fields, status area, and submit area. | Calm form context. | Primary surface or elevated warm surface; campaign surface for QR. | Clear title/support; Inter body. | Warm border, large surface radius, soft shadow. | default, loading, success, warning, error. | Labels/status readable, visible focus ring in contained controls. | Contact, Support, Search, Campaign, Review Only. | Runtime form behavior changes, field renaming, payload changes. | Visual-only modernization unless later task authorizes runtime work. | No copy/payload/API behavior changes. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Form Field | Forms | Field row containing label, control, helper/error text, and state. | Field grouping. | Parent form surface with white control. | Input text readable; labels stronger than help text. | Warm control border, standard/control radius, focus ring. | default, hover, focus, active, disabled, loading, success, warning, error. | Visible label/focus/error, not color-only, readable text. | Text, Select, Textarea, Search, Optional, Required. | Placeholder-only labels, runtime/payload behavior changes. | Must fix readability and focus state issues in future visual task. | No copy/payload/API behavior changes. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Form Label | Forms | Visible label associated with control. | Required field orientation. | N/A; inherits form surface. | Inter label stronger than helper text. | None. | default, disabled/error adjacency. | Visible association, readable text. | Primary, Compact, Required. | Muted required labels, placeholder-only label behavior. | Future implementation must preserve programmatic associations. | Preserve label copy. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Form Help Text | Forms | Non-error support text. | Secondary field guidance. | N/A; inherits form surface. | Inter small text, muted but readable. | None. | default, disabled. | Contrast on all surfaces; not required label substitute. | Primary, Compact. | Invisible helper text, essential instructions as muted-only copy. | Future work should distinguish helper from labels/errors. | Preserve help text copy. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Form Error Text | Forms | Field or form error explanation. | Error guidance. | Light error surface only when grouped. | Calm direct Inter error text. | Error border if framed; standard radius for block. | default, error. | Associated error text, not color-only, high contrast. | Field Error, Form Error. | Decorative red text without association, broad fear panels. | Future work must not alter validation or submit behavior unless scoped. | Preserve error copy unless later authorized. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Select Field | Forms | Select/dropdown control. | Choice control. | White control surface. | Readable selected value and options where stylable. | Warm/focus/error border, control radius. | default, hover, focus, active, disabled, success, warning, error. | Keyboard and focus visibility, readable text. | Required, Optional, Compact. | Custom select behavior changes without runtime scope. | Visual-only field treatment; preserve data and payload. | No copy/payload/API behavior changes. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Textarea Field | Forms | Multi-line text control. | Extended input. | White control surface. | Readable input text. | Warm/focus/error border, control radius, stable min-height. | default, hover, focus, active, disabled, success, warning, error. | Stable size, visible label, visible focus ring. | Required, Optional, Compact. | Payload or validation changes, hidden labels. | Visual-only field treatment; preserve data and payload. | No copy/payload/API behavior changes. | No image changes. | Not implemented by DESIGN004 |
| WNYHS Submit Button | Forms | Form-specific submit action. | Form primary action. | Premium gold or governed primary action surface. | Clear Inter submit label. | Pill button radius, subtle lift, visible focus ring. | default, hover, focus, active, disabled, loading, success, warning, error adjacency. | Disabled/loading readable, no layout jump, mobile tap target safety. | Primary, Full Width, Campaign. | Submit logic changes, hidden loading status. | Visual-only unless runtime task authorizes behavior changes. | No copy/payload/API behavior changes. | No image changes. | Not implemented by DESIGN004 |

### Images / Assets

Important: These are visual role containers only, not image asset approvals.

| Canonical component name | Component family | Purpose | Visual role | Approved surface/background direction | Text/typography direction | Border/radius/shadow direction | States required | Accessibility requirements | Allowed variants | Forbidden variants | Implementation notes | Copy boundary | Image boundary | Implementation status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS Hero Image | Images / assets | Primary page or route hero visual container. | Primary visual proof container. | Warm light-compatible frame on hero surface. | Caption only if needed; not required for comprehension. | Media radius, warm border, soft shadow by role. | default. | Alt posture, no image-only meaning, responsive crop safety. | Primary, Category, Solution, Campaign. | Asset approval, generation, replacement, unreadable overlays. | Future image work must follow separate asset workflow. | Does not authorize copy changes. | Image containers may be styled; actual image assets remain separate future workstream. | Not implemented by DESIGN004 |
| WNYHS Category Image | Images / assets | Category-specific visual asset container. | Category visual asset role. | CATEGORY003-aligned frame/surface. | Role-specific captions only if useful. | Role-based radius/border/shadow. | default, hover/focus for reveal/clickable cases. | Role-specific alt, no image-only meaning, mobile usability. | Hero, Reveal Before, Reveal After, Dashboard, Mobile, Routine, Core, Solution Thumbnail. | Asset replacement, generation, unreadable thumbnails. | Future asset changes require separate authorization. | Preserve captions/copy. | Image containers may be styled; actual image assets remain separate future workstream. | Not implemented by DESIGN004 |
| WNYHS Solution Image | Images / assets | Solution visual asset container. | Solution image role. | Primary/elevated solution surface. | Optional caption/source-safe context. | Media frame, warm border, standard/large radius by placement. | default. | Alt posture and legible framing. | Hero, Sample, Scenario, Card. | New solution image asset approval or replacement. | Preserve current two-image role until later task. | Preserve solution copy/captions. | Image containers may be styled; actual image assets remain separate future workstream. | Not implemented by DESIGN004 |
| WNYHS Proof Image | Images / assets | Proof/example/gallery asset container. | Proof-safe image role. | Primary/elevated gallery surface. | Caption describes source-safe context. | Proof media frame, standard radius, warm border. | default, hover/focus if interactive. | Caption/alt clarity, no unsupported proof implication. | Gallery, Proof, Example, Review Only. | Fabricated proof assets or captions. | Future proof/story asset work requires separate authorization. | Preserve proof/gallery copy. | Image containers may be styled; actual image assets remain separate future workstream. | Not implemented by DESIGN004 |
| WNYHS QR Image | Images / assets | QR/campaign/scan-support image container. | Scan-supporting asset role. | High-contrast, mobile-first QR-compatible frame. | Captions only where useful. | QR frame and quiet-zone-conscious structure. | default. | QR legibility, alt posture for web images. | Campaign, QR Code, Brand, Compact. | Print asset changes, QR asset replacement, source changes. | Must not alter QR attribution or asset authority. | Preserve QR-related copy. | Image containers may be styled; actual image assets remain separate future workstream. | Not implemented by DESIGN004 |
| WNYHS Logo Mark | Images / assets | Approved larger brand mark role. | Brand identity mark. | Parent surface must preserve mark contrast. | Descriptive only where informative. | No distortion; stable sizing/spacing. | default. | Decorative vs informative alt role. | Icon, Crest, Compact, Large. | Renaming, moving, replacing, stretching, recoloring assets. | Must follow brand asset standards. | Does not authorize copy changes. | Approved asset role only; no logo asset changes. | Not implemented by DESIGN004 |
| WNYHS Icon Mark | Images / assets | Approved compact identity/supporting mark role. | Compact identity cue. | Parent surface must preserve small-size legibility. | Decorative or informative by context. | Stable size/alignment; no distortion. | default. | Small-size legibility and alt role. | Compact, Decorative, Informative. | Random icons, unapproved marks, asset replacement. | Must follow brand asset standards. | Does not authorize copy changes. | Approved asset role only; no icon asset changes. | Not implemented by DESIGN004 |

### States

| Canonical component name | Component family | Purpose | Visual role | Approved surface/background direction | Text/typography direction | Border/radius/shadow direction | States required | Accessibility requirements | Allowed variants | Forbidden variants | Implementation notes | Copy boundary | Image boundary | Implementation status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hover State | States | Pointer feedback. | Subtle affordance. | Slight shade/lift within token role. | No text resizing or label change. | Border may strengthen subtly; no radius change; subtle lift only. | hover. | No layout jump, not color-only where meaning changes. | Action, Card, Tile, Link, Campaign. | Bounce/spin/parallax overload, heavy glow. | Visual only; no behavior change. | Does not authorize copy changes. | No image changes. | Not implemented by DESIGN004 |
| Focus State | States | Keyboard orientation. | Obvious focus indicator. | Surface-compatible focus ring. | No copy change. | Visible focus ring or outline; optional focus shadow. | focus. | Visible focus ring, sufficient contrast, not color-only. | Light Surface, Dark Surface, Form, Campaign. | Invisible focus, inconsistent one-off shadows. | Required for interactive components. | Does not authorize copy changes. | No image changes. | Not implemented by DESIGN004 |
| Active State | States | Current/pressed feedback. | Stable active indication. | Slight darken, inset, or current marker within token role. | Stable label. | No radius change; no jump. | active. | Not color-only; readable text. | Pressed, Current, Selected. | Layout-shifting active states. | Must not change route logic. | Does not authorize copy changes. | No image changes. | Not implemented by DESIGN004 |
| Disabled State | States | Unavailable action/control. | Muted but understandable state. | Muted surface/border with readable text. | Legible label and reason where present. | Muted border; no shadow. | disabled. | Readable text, not invisible, not color-only. | Button, Field, Control, Link where applicable. | Hidden labels, unreadable low contrast. | Must not change enable/disable logic. | Does not authorize copy changes. | No image changes. | Not implemented by DESIGN004 |
| Loading State | States | In-progress feedback. | Stable waiting state. | Neutral or primary-compatible surface. | Label/status remains available. | Stable border/radius; no layout jump. | loading. | Readable text, no layout jump, status not hidden. | Button, Form, Search, Campaign. | Spinner-only inaccessible state, label disappearance. | Must not change submit/runtime behavior. | Does not authorize copy changes. | No image changes. | Not implemented by DESIGN004 |
| Success State | States | Positive confirmation. | Calm positive status. | Light success surface/accent. | Clear confirmation text. | Success border, standard radius. | success. | Not color-only, readable text, sufficient contrast. | Field, Form, Alert, Button adjacency. | Outcome-overclaim styling. | Must not alter runtime success authority. | Does not authorize copy changes. | No image changes. | Not implemented by DESIGN004 |
| Warning State | States | Caution or review/incomplete status. | Calm caution state. | Light warning surface/accent. | Readable caution text. | Warning border, standard radius. | warning. | Not color-only, readable text, sufficient contrast. | Alert, Fine Print, Package, Review. | Urgency marketing or fear styling. | Use for review/caveat status only. | Does not authorize copy changes. | No image changes. | Not implemented by DESIGN004 |
| Error State | States | Correction path or invalid state. | Clear error state. | Light error surface/accent. | Direct readable error text. | Error border, standard radius. | error. | Associated text, high contrast, not color-only. | Field Error, Form Error, Alert. | Broad danger panels or unassociated red text. | Must not change validation/runtime behavior. | Does not authorize copy changes. | No image changes. | Not implemented by DESIGN004 |

## 6. Surface and Token Role Mapping

This section maps component groups to DESIGN003 token roles. This is semantic mapping only. It does not create CSS variables and does not edit token files.

| Token role | Component group mapping | Notes |
| --- | --- | --- |
| primary canvas / warm white | Page Shell, Hero Section, Page Intro, Legal Text Section, Form surroundings. | Default public page canvas. |
| alternate canvas / cream | Section Block, QR Campaign Block, quiet grouped explanatory sections. | Used for calm alternation, not nested clutter. |
| primary surface / white | Feature Card, Tile, Proof Card, Search Result Card, Form Field, Legal surfaces. | Clean repeated surfaces. |
| elevated warm surface | Panel, Core Panel, Vault Tile, Form Shell, Final CTA Section. | Premium grouped moments. |
| trust navy | Top Navigation, Site Footer, controlled Core Panel, selected high-contrast bands. | Controlled and non-dominant. |
| premium gold | Primary CTA, Submit Button, Eyebrow, selected active/action accents. | Accent and action role only. |
| charcoal text | Page Heading, Section Heading, Body Copy, Form Label, Secondary CTA. | Main readable text. |
| secondary text | Muted Copy, card descriptions, support copy, footer meta. | Must remain readable. |
| muted text | Fine Print, captions, helper copy, legal notes. | Never required labels or errors. |
| warm border | Panel, Feature Card, Form Field, Image frames, Footer divider. | Quiet structural boundary. |
| success | Success State, form success, positive status blocks. | Text and structure required. |
| warning | Warning State, review caveats, incomplete status blocks. | Calm caution only. |
| error | Error State, field error, form error, invalid state border. | Correction path only. |
| info | Alert / Info Block, search empty state, guidance copy. | Informational status role. |
| soft shadow | Feature Card, Panel, Hero Image, Category Image, elevated surfaces. | Subtle premium lift only. |
| standard radius | Feature Card, Tile, Proof Card, Search Result Card, Alert / Info Block. | Default repeated-item shape. |
| large surface radius | Hero Section panels, Form Shell, Final CTA Section, Core Panel. | Large grouped surfaces. |
| pill button radius | Primary CTA, Secondary CTA where button-like, Phone CTA, Submit Button. | Action shape only. |

## 7. State Requirements

Future implementation tasks must define and verify these state requirements without changing runtime behavior:

| State | Required behavior |
| --- | --- |
| default | Readable text, sufficient contrast, stable dimensions, semantic token roles, mobile tap target safety where interactive. |
| hover | Subtle visual feedback, no layout jump, no text resizing, not color-only when meaning changes. |
| focus | visible focus ring on all interactive components, sufficient contrast on light and trust navy surfaces, no hidden focus. |
| active | Stable pressed/current/selected indication, not color-only, readable text, no layout jump. |
| disabled | Muted but readable text, understandable unavailable state, no invisible label, no layout jump. |
| loading | Status remains available, no layout jump, readable text, mobile tap target safety, no runtime behavior changes. |
| success | Text and structure communicate success, not color-only, readable text, sufficient contrast. |
| warning | Text and structure communicate caution, not color-only, readable text, sufficient contrast. |
| error | Text and structure communicate the correction path, not color-only, readable text, sufficient contrast. |

Global state rules:

- visible focus ring is required.
- Status and selection must be not color-only.
- All state text must remain readable text.
- All state surfaces must provide sufficient contrast.
- State changes must create no layout jump.
- Interactive states must preserve mobile tap target safety.
- State styling must create no runtime behavior changes.

## 8. Component Implementation Rules

Future implementation tasks must:

- preserve page copy verbatim
- preserve existing production images unless separately authorized
- cite DESIGN003 and DESIGN004
- use semantic token roles
- avoid hardcoded one-off colors where token exists
- keep dark navy controlled and non-dominant
- preserve form payload/runtime behavior
- preserve HubSpot/Stripe/scheduling boundaries
- update components in bounded route/page-family batches

Future implementation tasks must not:

- change page copy under a visual task
- replace production images under a component task unless image work is explicitly authorized
- edit form payloads, API behavior, or source tracking under visual-only scope
- bypass VISUALFREEZE002 when Visual Freeze is required
- use current CSS aliases as canonical component authority

## 9. Special Component Notes

### Core Panel

- Core Panel is a premium explanatory surface.
- It may use elevated warm surface or controlled trust navy.
- It must not become a dark-dashboard block.
- It must preserve the homepage/category/package distinction defined by governing standards.

### Vault Tile

- Vault Tile receives a premium tile treatment.
- It should feel high-end, not gimmicky.
- It must avoid cyberpunk, neon, and black-background trope treatments.
- It must keep custom/review scope clear and readable.

### QR Campaign Block

- QR Campaign Block is scan-first and mobile-first.
- It may vary from full public nav but must remain WNYHS-compatible.
- It must not change QR runtime or attribution behavior.
- It must preserve QR form/source boundaries and campaign structure.

### Forms

- Forms allow no copy/payload/API behavior changes under DESIGN004.
- Form work is visual-only modernization unless a later task authorizes runtime work.
- Future implementation must fix readability and focus state issues.
- Labels, help text, error text, disabled states, loading states, and status states must remain readable.

### Images

- Image containers may be styled.
- Actual image assets remain separate future workstream.
- No generated/replaced images under DESIGN004.
- Image-role rows in this catalog are container and governance roles only.

## 10. Approval Posture

- DESIGN004 creates catalog authority only.
- It does not approve implementation.
- It does not trigger Visual Freeze.
- It does not close operator review.
- Implementation still requires VISUALFREEZE002 and bounded VISPARITY008+ tasks.

## 11. Future Sequence

Future sequence:

1. VISUALREV001 - Regenerate Proposed Boards using DESIGN003/DESIGN004
2. VISUALFREEZE002 - Operator Visual Freeze Decision Record
3. VISPARITY008 - Implement Global Tokens and Base Visual System
4. VISPARITY009 - Implement Homepage / First Public Route
5. VISPARITY010 - Visual QA / Playwright Baseline
6. page-family rollout tasks

## 12. Non-Authority Statement

This document defines the component catalog.

This document does not implement any component.

This document does not edit CSS, tokens, source, routes, UI, or public image assets.

This document does not authorize copy changes.

This document does not authorize image replacement.

This document does not alter runtime behavior.

This document does not approve Visual Freeze.

It does not edit source code, route files, CSS, tokens, UI components, public image assets, runtime/API files, HubSpot behavior, Stripe/payment behavior, scheduling behavior, Cloudflare config, dependencies, package-lock, visual boards, generated images, Playwright tests, hooks, QA automation, or Active KAOS Rules.

## 13. Scope Compliance

One bounded task only: DESIGN004.

MTR treated as tracking board, not gate.

Allowed files only:

- `docs/design-system/DESIGN004_WNYHS_COMPONENT_CATALOG_REV01.md`
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

## 14. Recommended Next Task

Recommended next task:

`VISUALREV001 - Regenerate Proposed Boards using DESIGN003/DESIGN004`

VISUALREV001 should regenerate proposed review boards using DESIGN003 light-canvas visual language and DESIGN004 component catalog authority before VISUALFREEZE002 records any operator Visual Freeze decision.
