# VISPARITY007C Proposed Visual Standard Reference REV01

Task ID: VISPARITY007C
Task Name: Proposed Visual Standard Reference
Status: Docs-only proposed visual standard reference
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## 1. Purpose

This document defines the Proposed Visual Standard Reference for WNYHS visual parity.

It is the proposed after reference for future before/after comparison against `VISPARITY007B_CURRENT_STATE_REFERENCE_REV01.md`.

It describes a flagship visual direction for WNYHS as a premium home security, home automation, home safety, home lighting, and aging-in-place technology company.

This is an operator-review candidate. It is not implementation authority until approved.

## 2. Boundary

This is a docs-only proposed standard reference.

This task includes:

- proposed visual standard reference language
- proposed after reference for future comparison
- proposed color/token, typography, component, image, accessibility, and page-family direction
- review posture for VISPARITY007D

This task does not include:

- no implementation
- no CSS/token/source/image edits
- no screenshots
- no Playwright
- no hooks/QA activation
- no final approval until operator review

This document does not edit source code, routes, CSS, tokens, UI components, images, assets, sitemap, robots, runtime/API files, HubSpot behavior, Stripe/payment behavior, scheduling, Cloudflare config, dependencies, or package-lock.

Protected systems remain untouched:

- HubSpot / CRM
- Stripe/payment
- scheduling/calendar
- Lead Signal and requestId
- QRLanding attribution/runtime behavior
- Resend/email runtime
- Cloudflare configuration
- secrets and environment values

## 3. Source Inputs

Primary VISPARITY inputs:

- `VISPARITY001_PUBLIC_ROUTE_ELEMENT_DISCOVERY_REV01.md`
- `VISPARITY002_PUBLIC_MARKETING_VISUAL_PARITY_TARGET_MATRIX_REV01.md`
- `VISPARITY003_VISUAL_COMPONENT_NAMING_STANDARD_REV01.md`
- `VISPARITY004_CSS_TOKEN_MAPPING_AND_GAP_REGISTER_REV01.md`
- `VISPARITY005_IMAGE_PARITY_AND_ASSET_USAGE_REGISTER_REV01.md`
- `VISPARITY006_PUBLIC_MARKETING_PAGE_COMPLIANCE_PLAN_REV01.md`
- `VISPARITY007_KITCHEN_SINK_VISUAL_QA_REFERENCE_PAGE_SPEC_REV01.md`
- `VISPARITY007A_VISUAL_BASELINE_SCREENSHOT_MATRIX_REV01.md`
- `VISPARITY007B_CURRENT_STATE_REFERENCE_REV01.md`

Governing visual and funnel inputs:

- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`
- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`

Read-only current evidence:

- `src/styles/wnyhsVisualGovernance.css`
- `src/styles/homeSecurityPremium.css`
- `src/styles/qrLanding.css`
- `src/styles/canonicalEstimateForm.css`
- `src/index.css`
- `src/newsite/theme/tokens.css`

## 4. Design Psychology Principles

The proposed WNYHS visual standard should make the site feel calm, capable, local, and premium without creating fear or technical friction.

| Emotional target | Proposed design role |
| --- | --- |
| Trust | Use stable navigation, consistent surfaces, readable text, clear local identity, and restrained proof language. |
| Safety | Create a calm sense of preparedness and practical household awareness without panic visuals. |
| Intelligence | Show organized systems, clear choices, and dashboard-supported simplicity rather than technical clutter. |
| Premium quality | Use disciplined spacing, clean surfaces, controlled accent color, strong typography, and realistic imagery. |
| Comfort | Keep residential warmth, human readability, and non-intimidating language in every page family. |
| Local reliability | Preserve WNY identity, phone/contact clarity, locally grounded imagery where available, and a practical service posture. |
| Technology made simple | Present dashboards, phone views, routines, and automation as easy household tools, not as complex control rooms. |

The design should not feel like:

- generic alarm company
- hacker/cybersecurity dashboard
- noisy SaaS dashboard
- consumer electronics store
- emergency panic page
- cheap contractor site

## 5. Proposed Color / Token Direction

This section defines proposed semantic categories only. It does not hardcode final CSS values unless already governed by existing repository standards.

| Proposed semantic category | Psychological role | Visual usage | Forbidden usage | Affected canonical components | Current-state concern from VISPARITY007B | Future token decision needed |
| --- | --- | --- | --- | --- | --- | --- |
| trust blue / deep navy | Stable, serious, technically competent. | Limited supporting emphasis, quiet illustrations, campaign accents, and selected trust surfaces if approved. | Default CTA color, broad dark-blue app shell, cybersecurity mood, or raw one-off blue. | WNYHS Page Shell, Hero Section, Panel, QR Campaign Block, Dashboard Preview Block. | Current evidence includes legacy blue/dark treatments and mixed token vocabularies. | Decide whether a governed trust-blue category exists and where it may appear. |
| warm off-white canvas | Calm residential warmth and premium readability. | Primary public page canvas for homepage, categories, solutions, search, about, contact, support, and legal. | Gray app shell, cold white SaaS canvas, dark full-page default unless route-specific. | WNYHS Page Shell, Section Block, Legal Text Section, Form Shell. | Light and dark shell systems coexist. | Confirm canvas token as public default. |
| soft surface | Quiet grouping without heavy boxes. | Section backgrounds, light panels, form surroundings, legal text surfaces. | Nested card clutter, low-contrast text, arbitrary beige blocks. | WNYHS Panel, Section Block, Form Shell, Legal Text Section. | Panel/card boundaries are unclear. | Map soft surface to existing WNYHS surface primitives. |
| elevated surface | Premium focus and card clarity. | Feature cards, proof cards, search result cards, package blocks, QR cards. | Overly raised SaaS cards, heavy shadows, card-inside-card clutter. | WNYHS Feature Card, Proof Card, Search Result Card, Package Tier Block, QR Campaign Block. | Duplicated card systems exist. | Define elevation roles by card type. |
| premium gold accent | Warm confidence and WNYHS brand emphasis. | Primary CTA, eyebrows, selected active states, small proof markers. | Large gold backgrounds, price hype, noisy accent overuse, low-contrast gold text. | WNYHS Primary CTA, Eyebrow, Badge-like labels, Core Panel, Final CTA Section. | Gold exists but legacy accent systems also exist. | Confirm accent hierarchy and contrast rules. |
| charcoal text | Authority, legibility, premium restraint. | Primary headings, body on light surfaces, secondary CTA text, footer structure. | Low-contrast charcoal on dark panels or dense black slabs. | Page Heading, Section Heading, Body Copy, Secondary CTA, Site Footer. | Dark and light text mappings differ by surface. | Define default and inverse text pairings. |
| muted text | Secondary information without disappearing. | Support copy, captions, helper text, footer meta, legal caveats. | Any text that requires selection/highlighting to read; labels or errors that become weak. | Muted Copy, Fine Print, Form Help Text, Proof captions, Footer meta. | Muted copy has low-contrast risk. | Split muted text by light, dark, form, legal, and campaign surfaces if needed. |
| success green | Positive completion and safe confirmation. | Form success, completed status, optional availability/ready labels. | Safety outcome promises or decorative green wash. | Alert / Info Block, Form Shell, Submit Button state candidates. | Status token categories are incomplete. | Define success surface, border, icon, and text categories. |
| warning amber | Attention without panic. | Cautionary notices, review-only caveats, incomplete status. | Urgency marketing, fear tone, or hidden low-contrast warning text. | Alert / Info Block, Fine Print, Package Tier Block, Vault Tile. | Warning/status surfaces are not fully mapped. | Define warning surface and text contrast. |
| danger red | Clear error state. | Field errors, form errors, invalid state, destructive warning only when applicable. | Marketing emphasis, fear visuals, or broad danger panels. | Form Error Text, Alert / Info Block, Form Field. | Error text/surface mapping is partial. | Define field error, form error, and status error tokens. |
| focus ring | Confidence for keyboard and assistive navigation. | Links, buttons, cards, tiles, forms, nav, QR actions, footer links. | Invisible focus, color-only focus, or inconsistent one-off shadows. | All interactive canonical components. | Focus consistency is incomplete across nav/forms/QR/search. | Define one visible focus family plus allowed surface variants. |
| border | Quiet structure and separation. | Cards, panels, media, inputs, footer dividers, legal sections. | Raw rgba drift, heavy outlines, or border overload. | Panel, Feature Card, Proof Card, Form Field, Image roles. | Many raw borders and mixed vocabularies remain. | Map warm-neutral border roles to existing primitives. |
| shadow | Subtle premium lift. | Elevated cards, hero media, image frames, key panels. | Deep app shadows, neon glow, large drop shadows, noisy hover effects. | Feature Card, Hero Image, Category Image, Panel, QR Campaign Block. | Raw shadow values and duplicated systems exist. | Define soft/elevated/hover shadow categories. |
| radius | Friendly, modern, stable shape. | Cards, panels, inputs, media frames, buttons, tiles. | Excessive pill/card shapes everywhere, inconsistent one-off radius, nested rounded boxes. | All container, form, action, and image components. | Radius evidence varies by shell/card/form/media. | Define role-based shell/card/media/control/button radii. |
| spacing | Calm scanning and page rhythm. | Section gaps, grid gaps, form rhythm, card padding, CTA spacing. | Dense SaaS packing, oversized hero gaps, arbitrary page-specific spacing systems. | Page Shell, Section Block, Cards, Forms, Hero, Footer. | Public spacing tokens are not fully formalized. | Decide reusable spacing categories. |
| campaign/QR accent | Fast local scan confidence. | QR nav, proof strip, benefit cards, phone-first CTA, campaign blocks. | Main-site layout forced blindly, source/payload changes, or separate unrelated brand palette. | QR Campaign Navigation, QR Campaign Footer, QR Campaign Block, QR Image, Form Shell. | QR uses separate CSS and legacy image treatment. | Define QR as compatible campaign variant. |
| review/demo surfaces | Clearly non-primary and non-public-promotion. | Package review, demo/planner, dashboard preview, legal/review caveats. | Public promotion of review-only routes or visual authority for unapproved demos. | Package Tier Block, Vault Tile, Dashboard Preview Block, Legal Text Section. | Review-only route uncertainty remains. | Define review surface and caveat style before visual implementation. |

## 6. Proposed Typography Direction

Typography should make WNYHS feel premium, precise, and easy to understand.

| Typography role | Proposed direction | Hierarchy and readability goal |
| --- | --- | --- |
| heading posture | Manrope-based, confident, plain, not theatrical. | H1 explains the page in one clear line group; H2/H3 support scanning without giant type inside compact surfaces. |
| body posture | Inter-based, readable, calm, and direct. | Body copy should use comfortable line length, clear paragraph rhythm, and high contrast. |
| eyebrow posture | Small, restrained, useful only when it adds context. | Eyebrows should signal page/section context without becoming decoration or low-contrast noise. |
| CTA text posture | Short, action-specific, and legible at mobile sizes. | Primary and secondary actions must be easy to distinguish without relying only on color. |
| legal/fine print posture | Smaller but fully readable. | Legal, caveat, review-only, and package status text must not disappear into muted styling. |
| form label/help/error posture | Labels are visible and stronger than helper copy; errors are clear and calm. | Users should never need placeholder-only labels or vague status text to complete a form. |

Do not implement or approve final font values beyond already governed docs.

## 7. Proposed Component Standard Table

Approval status for every component in this table: Proposed / Needs Operator Review.

| Canonical component name | Proposed visual role | Proposed surface/color direction | Proposed typography direction | Proposed spacing/layout direction | Proposed border/radius/shadow direction | Proposed image role if any | Accessibility requirement | Current-state issue addressed | Future before/after comparison need | Approval status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS Top Navigation | Stable site orientation and conversion entry. | Charcoal or light premium nav using governed tokens; gold only for primary action. | Compact Inter UI labels with clear active/focus states. | Predictable desktop order and mobile stack/drawer behavior. | Controlled border/shadow; no duplicate header system. | Icon Mark. | Visible focus, readable links, mobile tap targets. | Main nav differs from QR nav and mixed aliases exist. | Compare desktop, mobile, CTA, phone, focus. | Proposed / Needs Operator Review |
| WNYHS Mobile Navigation | Mobile equivalent of global orientation. | Same token family as top nav. | Compact labels, no clipped text. | Full-width reachable controls. | Drawer surface uses stable radius/border if framed. | Icon Mark. | Tap targets and keyboard focus must be visible. | Mobile parity not fully proven. | Compare open state, wrapping, focus. | Proposed / Needs Operator Review |
| WNYHS Site Footer | Quiet local identity and close path. | Dark structured footer or approved equivalent with readable muted text. | Inter small text with strong link affordance. | Clean columns on desktop, readable stack on mobile. | Subtle dividers; no duplicate global footer. | Optional Icon Mark. | Link contrast and focus visible. | Footer parity by route uncertain. | Compare full and compact footer. | Proposed / Needs Operator Review |
| WNYHS QR Campaign Navigation | Scan-first campaign orientation. | Campaign surface compatible with WNYHS tokens. | Short mobile-first labels. | Reduced nav order per QR standards. | Minimal border; no visual clutter. | Icon Mark. | Phone/tap actions easy to reach. | QR vocabulary diverges. | Compare without changing QR behavior. | Proposed / Needs Operator Review |
| WNYHS QR Campaign Footer | Reduced campaign close. | Quiet campaign footer/close surface. | Compact readable meta and links. | Minimal end-of-page structure. | Subtle border only if needed. | Optional Icon Mark. | Link contrast and mobile readability. | Reduced footer not formalized. | Compare campaign close. | Proposed / Needs Operator Review |
| WNYHS Page Shell | Coherent public canvas. | Warm off-white canvas with governed surfaces. | Inter body defaults. | Constrained shell, calm section rhythm. | No app-shell boxed-page feel. | None. | Page-wide contrast and no overflow. | Light/dark shell systems coexist. | Compare shell by page family. | Proposed / Needs Operator Review |
| WNYHS Hero Section | Premium first impression. | Light or dark emphasis by page role; no fear visuals. | Manrope H1, Inter support copy. | Clear message, supporting proof, CTA row, image/panel if useful. | Media/panel radius and soft shadow. | Hero, Category, Solution, or QR Image. | Text readable without image dependence. | Multiple hero vocabularies. | Compare homepage, category, solution, QR. | Proposed / Needs Operator Review |
| WNYHS Page Intro | Compact orientation for non-hero pages. | Light simple surface. | Manrope heading and readable body. | Short intro with clean measure. | Minimal framing. | Usually none. | Correct heading order. | Static page parity uncertain. | Compare search/about/legal/support intros. | Proposed / Needs Operator Review |
| WNYHS Section Block | Major content rhythm. | Soft surface, elevated surface, dark emphasis, legal, or campaign variant. | Section hierarchy remains clear. | Full-width section with constrained content. | Border/radius/shadow by role. | Optional. | Contrast on every section. | Panel/section/card overlap. | Compare variants. | Proposed / Needs Operator Review |
| WNYHS Section Header | Section scanning anchor. | Surface-appropriate text and accent. | Restrained eyebrow plus Manrope heading. | Tight, predictable spacing. | No separate frame. | None. | Support copy contrast. | Variants differ by page family. | Compare label/heading/support spacing. | Proposed / Needs Operator Review |
| WNYHS Final CTA Section | Clear closing action. | Premium gold/charcoal CTA hierarchy. | Direct action copy. | One primary path plus optional secondary. | Panel framing if needed; no noise. | Optional Logo Mark. | Focus and mobile wrapping. | CTA systems duplicated. | Compare final CTA surfaces. | Proposed / Needs Operator Review |
| WNYHS Legal Text Section | Branded readable policy/caveat surface. | Warm canvas/light surface. | Inter legal copy, clear Manrope headings. | Narrow readable measure. | Minimal borders. | None. | Link affordance and fine-print contrast. | Legal parity incomplete. | Compare legal pages. | Proposed / Needs Operator Review |
| WNYHS Eyebrow | Context label. | Premium gold/accent only where helpful. | Small Inter label, restrained. | Close to heading. | None. | None. | Contrast at small size. | Eyebrow/kicker aliases differ. | Compare light/dark/campaign. | Proposed / Needs Operator Review |
| WNYHS Page Heading | Primary page claim. | Charcoal or inverse text by surface. | Manrope, confident, wraps cleanly. | Avoid oversized display in compact pages. | None. | None. | Mobile line breaks safe. | Current sizes vary. | Compare H1 by page family. | Proposed / Needs Operator Review |
| WNYHS Section Heading | Section hierarchy. | Same text system as page heading, smaller role. | Manrope H2/H3. | Consistent gap to copy. | None. | None. | Heading order. | Hierarchy varies. | Compare section scale. | Proposed / Needs Operator Review |
| WNYHS Card Heading | Card scan anchor. | High-contrast card text. | Compact Manrope or governed card heading. | Wraps without resizing cards. | None. | Optional media. | Long title wrapping. | Card heading sizing distributed. | Compare card types. | Proposed / Needs Operator Review |
| WNYHS Body Copy | Primary explanation. | Charcoal/default readable text. | Inter body. | Comfortable line length. | None. | None. | No low-contrast paragraphs. | Body/muted distinction inconsistent. | Compare long/short copy. | Proposed / Needs Operator Review |
| WNYHS Muted Copy | Secondary explanation. | Muted but readable on every surface. | Inter support copy. | Close to related content. | None. | None. | Must remain readable. | Muted colors differ by surface. | Compare muted on light/dark/form/QR. | Proposed / Needs Operator Review |
| WNYHS Fine Print | Caveat and review/legal text. | Stronger than current low-contrast small text. | Inter small, readable. | Clear measure and spacing. | None. | None. | Fine print readability. | No dedicated fine-print token. | Compare caveats and legal notes. | Proposed / Needs Operator Review |
| WNYHS Primary CTA | Main action. | Premium gold/black or governed primary action. | Short Inter label. | Stable height, no cramped rows. | Pill/button radius, visible focus. | None. | Focus, disabled, loading states. | Button systems duplicated. | Compare primary, submit, campaign. | Proposed / Needs Operator Review |
| WNYHS Secondary CTA | Support action. | Charcoal/outline or quiet secondary. | Inter action text. | Paired with primary without competing. | Visible border/focus. | None. | Affordance not color-only. | Secondary styles vary. | Compare outline/link variants. | Proposed / Needs Operator Review |
| WNYHS Text Link CTA | Lightweight navigation/action. | Governed link/accent treatment. | Inter link text. | Inline or card-local only. | Underline/focus where useful. | None. | Not color-only. | Link treatment varies. | Compare body/card/legal/footer links. | Proposed / Needs Operator Review |
| WNYHS Phone CTA | Direct local contact action. | Link or button variant by context. | Clear call/text label. | Large enough for mobile. | Visible focus/tap state. | Optional Icon Mark. | Mobile tap targets. | Phone CTA weight varies. | Compare nav/hero/contact/QR. | Proposed / Needs Operator Review |
| WNYHS Panel | Grouped emphasis surface. | Soft, elevated, dark, campaign, legal, or form surface. | Contextual heading/body. | One logical group; avoid nested cards. | Role-based border/radius/shadow. | Optional. | Contrast within panel. | Panel/card boundary unclear. | Compare all panel variants. | Proposed / Needs Operator Review |
| WNYHS Feature Card | Repeated explanation/navigation card. | Elevated light card or compatible campaign card. | Card heading/body hierarchy. | Stable grid and equal rhythm. | Subtle border, small radius, soft shadow. | Optional card image. | Focus if clickable. | Duplicated card systems. | Compare across page families. | Proposed / Needs Operator Review |
| WNYHS Tile | Compact item. | Light compact surface with clear label. | Short label only. | Stable dimensions. | Small radius/border. | Optional thumbnail/icon. | Tap target and focus. | Tile/chip/card overlap. | Compare category/routine/suggestion. | Proposed / Needs Operator Review |
| WNYHS Proof Card | Trust/example card. | Honest proof-safe surface. | Caption/body remains conservative. | Image plus caption or text-only proof. | Media frame and soft border. | Proof Image. | Alt/caption posture. | Proof/story authority conservative. | Compare proof cards. | Proposed / Needs Operator Review |
| WNYHS Search Result Card | Public search result. | WNYHS card surface. | Type label, title, summary, CTA. | Result grouping remains readable. | Card border/radius. | Usually none. | Result count and links accessible. | Search-specific system. | Compare result and empty states. | Proposed / Needs Operator Review |
| WNYHS Alert / Info Block | Guidance or status. | Info/success/warning/error semantic surface. | Short readable copy. | Does not dominate page. | Status border/radius. | Optional icon. | Status contrast and semantics. | Status tokens incomplete. | Compare all status candidates. | Proposed / Needs Operator Review |
| WNYHS Core Panel | Platform foundation proof. | Premium Core surface, often dark emphasis or elevated light. | Manrope heading, plain Inter explanation. | Dashboard/phone/logo hierarchy. | Strong but restrained frame. | Core Panel Image / Dashboard Preview Image. | Image text not sole meaning. | Core differs by page family. | Compare homepage/category/package Core. | Proposed / Needs Operator Review |
| WNYHS Package Tier Block | Starting-point/package context. | Review-safe card surface. | Tier title, caveat, CTA, no private details. | Comparison layout without cramping. | Card border/radius/shadow. | Optional package image. | Caveat/status readability. | Package/review posture mixed. | Compare without changing data/prices. | Proposed / Needs Operator Review |
| WNYHS Vault Tile | Custom/review-only idea. | Quiet custom tile with caveat. | Compact clear copy. | Text-first unless image approved. | Card border, subtle lift. | Optional future Vault image. | Caveat clarity. | Vault image role absent. | Compare image-absent and optional future state. | Proposed / Needs Operator Review |
| WNYHS QR Campaign Block | Campaign content module. | Campaign accent compatible with WNYHS. | Phone-first headings/body. | Fast scan, clear benefit, next step. | Campaign card border/radius. | QR Image/Icon Mark. | Mobile readability/tap targets. | QR divergence from primitives. | Compare campaign blocks. | Proposed / Needs Operator Review |
| WNYHS Dashboard Preview Block | Simple technology proof. | Framed dashboard/phone preview. | Caption explains purpose. | Contain UI when text matters. | Media radius/border/shadow. | Dashboard Preview Image. | No image-only meaning. | Aspect/frame tokens incomplete. | Compare contain/cover and captions. | Proposed / Needs Operator Review |
| WNYHS Category Image Block | Category visual system. | CATEGORY003-aligned image hierarchy. | Captions only where useful. | Hero/reveal/dashboard/mobile/routine hierarchy. | Media frame by role. | Category Image. | Hover/focus/tap reveal usable. | Non-Home-Automation assets incomplete. | Compare category image roles. | Proposed / Needs Operator Review |
| WNYHS Solution Scenario Block | Solution context proof. | Solution media/card surface. | Scenario heading/body. | Hero/sample/scenario structure. | Media frame and card border. | Solution Image. | Alt/caption clarity. | Two-image current system. | Compare solution roles. | Proposed / Needs Operator Review |
| WNYHS Our Work Gallery Block | Example/proof gallery. | Proof-safe gallery surface. | Captions avoid overstating proof. | Consistent grid/crops. | Gallery media frame. | Proof/Gallery Image. | Caption and alt discipline. | Proof/story verification open. | Compare gallery and labels. | Proposed / Needs Operator Review |
| WNYHS Form Shell | Form context. | Calm light or campaign form surface. | Title/support text readable. | Field groups and status areas clear. | Form panel radius/border. | Usually none. | Labels/status readable. | Form shells split across layers. | Compare shell/status/submit areas. | Proposed / Needs Operator Review |
| WNYHS Form Field | Field row. | Governed input surface. | Field text readable. | Label, control, help/error. | Control radius, border, focus. | None. | Visible label/focus/error. | Field state tokens incomplete. | Compare normal/focus/error/disabled. | Proposed / Needs Operator Review |
| WNYHS Form Label | Field label. | Stronger than helper text. | Inter label. | Close to control. | None. | None. | Programmatic/visible association. | Labels can use muted token. | Compare label/helper distinction. | Proposed / Needs Operator Review |
| WNYHS Form Help Text | Field support. | Muted but readable. | Inter small. | Under related field. | None. | None. | Contrast on all surfaces. | Help/muted overlap. | Compare helper contexts. | Proposed / Needs Operator Review |
| WNYHS Form Error Text | Error explanation. | Danger semantic text/surface. | Calm clear Inter. | Adjacent to field or form status. | Error border/status surface. | None. | Error association and contrast. | Error mapping partial. | Compare field/form errors. | Proposed / Needs Operator Review |
| WNYHS Select Field | Select control. | Same field system. | Readable selected value. | Full-width where needed. | Focus ring and border. | None. | Keyboard/focus visibility. | Select affordance partial. | Compare states. | Proposed / Needs Operator Review |
| WNYHS Textarea Field | Multi-line control. | Same field system. | Readable input text. | Stable min-height. | Focus/error state. | None. | Label and resize behavior. | Textarea states local. | Compare states. | Proposed / Needs Operator Review |
| WNYHS Submit Button | Form action. | Primary action adapted to form context. | Clear submit label. | Full-width mobile option. | Disabled/loading/focus states. | None. | Status feedback adjacency. | Submit/button systems overlap. | Compare default/disabled/loading/error adjacency. | Proposed / Needs Operator Review |
| WNYHS Hero Image | Primary visual proof. | Bright, calm, realistic, premium frame. | Caption only if needed. | Crop preserves subject. | Media radius/border/shadow. | Hero Image. | Alt text and no text-only meaning. | Hero role varies by page. | Compare crop/aspect/mobile. | Proposed / Needs Operator Review |
| WNYHS Category Image | Category visual asset. | CATEGORY003 image tone and hierarchy. | Role-specific captions if needed. | Hero/reveal/dashboard/mobile/routine/card roles. | Role-based image frame. | Category Image. | Role-specific alt. | Asset packages uneven. | Compare all category roles. | Proposed / Needs Operator Review |
| WNYHS Solution Image | Solution visual asset. | Outcome-first practical image. | Illustrative/source-safe alt. | Hero/sample/card roles. | Media frame. | Solution Image. | Alt posture. | Folder/role split. | Compare solution roles. | Proposed / Needs Operator Review |
| WNYHS Proof Image | Gallery/example image. | Honest curated image. | Caption describes source-safe context. | Consistent gallery crop. | Proof media frame. | Proof Image. | Caption/alt clarity. | Proof/story governance open. | Compare proof/gallery. | Proposed / Needs Operator Review |
| WNYHS QR Image | Campaign/scan image. | High-contrast, scan-safe, mobile-first. | Alt for web images. | QR/web/print roles remain separate. | QR frame and quiet-zone rules. | QR Image. | Scan/alt posture. | Web/print roles split. | Compare web QR separately from print QR. | Proposed / Needs Operator Review |
| WNYHS Logo Mark | Larger brand mark. | Approved asset only. | Descriptive only when needed. | Proportional placement. | No distortion. | Logo Mark. | Decorative vs informative. | Logo usage inventory incomplete. | Compare crest/Core roles. | Proposed / Needs Operator Review |
| WNYHS Icon Mark | Compact identity mark. | Approved compact mark. | Decorative or informative by context. | Fixed stable sizing. | No recolor/stretch. | Icon Mark. | Small-size legibility and alt role. | Icon system manifest incomplete. | Compare nav/QR/category icons. | Proposed / Needs Operator Review |

## 8. Proposed Image Direction

Use VISPARITY005 as the source image-role register.

Target image posture:

- real homes
- calm lighting
- practical technology
- premium but not sterile
- safety without fear
- aging-in-place dignity
- family/home comfort where appropriate
- local WNY credibility where possible

Forbidden imagery:

- fear-based crime imagery
- exaggerated alarm company visuals
- fake futuristic smart-home overload
- unreadable dashboard screenshots
- generic stock-photo smiles
- too many glowing tech graphics
- images with text that must be read to understand the page

Images should support comprehension. They should not carry the only important meaning, imply unverified proof, or replace plain language.

## 9. Proposed Accessibility Direction

The proposed visual standard must require:

- no invisible text
- no text requiring highlight to read
- strong contrast on every surface
- visible focus states
- readable form labels and errors
- mobile tap targets
- no image-only meaning
- alt-text discipline
- legal/fine print readability

Additional proposed accessibility expectations:

- dashboards and phone screenshots must be understandable when UI text is not readable
- cards, tiles, footer links, legal links, QR actions, and form controls must keep visible focus states
- long text and small mobile widths must not create overlap, clipping, or hidden actions
- form placeholders must not replace visible labels
- status, warning, and error states must be distinguishable by text and structure, not color alone

## 10. Proposed Page-Family Application

| Page family | Proposed application |
| --- | --- |
| homepage | Flagship warm canvas, calm hero, clear category paths, WNYHS Core, premium CTAs, and one coherent visual system. |
| category pages | CATEGORY003-driven image hierarchy, consistent category rhythm, Core panel, solution cards, and category-specific proof where assets exist. |
| solution pages | Problem-first solution story, two-image current role respected, premium scenario blocks, and future media expansion only after approval. |
| search | Quiet utility surface with readable search form, grouped result cards, strong empty state, and no internal/protected data exposure. |
| about | Local trust page with restrained typography, readable sections, and proof-safe local/company posture. |
| our work | Gallery/proof-safe surface with honest captions, consistent image framing, and no fabricated proof. |
| contact | Form-first conversion page with visible labels, clear phone/contact options, and calm CTA hierarchy. |
| support | Help-first page with readable support form, support categories, direct contact paths, and no promise-heavy tone. |
| legal pages | Simple branded legal shell with readable measure, visible links, and no marketing clutter. |
| QR landing | Campaign variant with reduced navigation, fast scan readability, phone-first CTA posture, and preserved QR/source/form behavior. |
| review-only/demo/planner pages | Distinct review/demo surface treatment only after classification; no public promotion or cleanup from this document. |

## 11. Design Approval Posture

This is proposed.

It is not yet operator-approved.

It is not implementation authority.

It must be compared against VISPARITY007B in VISPARITY007D.

Operator must approve/revise before implementation.

Until approved, this document is a candidate standard for discussion and comparison only.

## 12. Recommended Next Task

Recommended next task:

`VISPARITY007D - Before/After Visual Comparison Matrix`

VISPARITY007D should compare `VISPARITY007B_CURRENT_STATE_REFERENCE_REV01.md` against this Proposed Visual Standard Reference and identify operator decisions before any implementation, screenshot generation, Playwright, CSS, token, source, route, image, hook, or QA work is authorized.

## Scope Compliance

VISPARITY007C creates the Proposed Visual Standard Reference only.

It includes:

- purpose
- boundary
- design psychology principles
- proposed color/token direction
- proposed typography direction
- proposed component standard table covering every canonical VISPARITY003 component
- proposed image direction using VISPARITY005
- proposed accessibility direction
- proposed page-family application
- design approval posture
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
- activate any KAOS rule
- merge
