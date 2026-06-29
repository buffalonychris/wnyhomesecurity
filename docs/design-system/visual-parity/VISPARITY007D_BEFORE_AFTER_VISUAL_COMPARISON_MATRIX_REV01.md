# VISPARITY007D Before/After Visual Comparison Matrix REV01

Task ID: VISPARITY007D
Task Name: Before/After Visual Comparison Matrix
Status: Docs-only comparison matrix and visual-approval orchestration
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## 1. Purpose

This document is the master before/after comparison matrix for WNYHS visual parity.

It maps each canonical VISPARITY003 component from the current state recorded in `VISPARITY007B_CURRENT_STATE_REFERENCE_REV01.md` to the proposed future state recorded in `VISPARITY007C_PROPOSED_VISUAL_STANDARD_REFERENCE_REV01.md`.

This document prepares:

- future visual board generation
- operator design review
- component-level approval decisions
- VISPARITY007E Current State Visual Board
- VISPARITY007F Proposed Visual Board
- VISPARITY007G Operator Review Packet
- the future Visual Freeze milestone

Implementation is blocked until operator approval.

## 2. Boundary

This is a docs-only comparison matrix.

This task includes:

- before/after comparison planning
- visual board orchestration planning
- image generation contract planning
- operator review workflow planning
- Visual Freeze milestone planning

This task does not include:

- no implementation
- no source/CSS/token/image edits
- no screenshots
- no visual board generation
- no PDF generation
- no Playwright
- no hooks/QA activation

This document does not edit source code, route files, CSS, tokens, UI components, images, assets, sitemap, robots, runtime/API files, HubSpot behavior, Stripe/payment behavior, scheduling, Cloudflare config, dependencies, or package-lock.

## 3. Source Inputs

Primary source inputs:

- `VISPARITY007B_CURRENT_STATE_REFERENCE_REV01.md` - Current State Reference and before-reference.
- `VISPARITY007C_PROPOSED_VISUAL_STANDARD_REFERENCE_REV01.md` - Proposed Visual Standard Reference and after-reference.
- `VISPARITY003_VISUAL_COMPONENT_NAMING_STANDARD_REV01.md` - canonical component naming standard.
- `VISPARITY007A_VISUAL_BASELINE_SCREENSHOT_MATRIX_REV01.md` - future screenshot, viewport, state, and before/after comparison matrix.

Supporting VISPARITY inputs:

- `VISPARITY001_PUBLIC_ROUTE_ELEMENT_DISCOVERY_REV01.md`
- `VISPARITY002_PUBLIC_MARKETING_VISUAL_PARITY_TARGET_MATRIX_REV01.md`
- `VISPARITY004_CSS_TOKEN_MAPPING_AND_GAP_REGISTER_REV01.md`
- `VISPARITY005_IMAGE_PARITY_AND_ASSET_USAGE_REGISTER_REV01.md`
- `VISPARITY006_PUBLIC_MARKETING_PAGE_COMPLIANCE_PLAN_REV01.md`
- `VISPARITY007_KITCHEN_SINK_VISUAL_QA_REFERENCE_PAGE_SPEC_REV01.md`

Governing standards:

- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`
- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`

## 4. Comparison Matrix

Approval and implementation columns are intentionally repetitive. Every component requires operator approval, and implementation is blocked until approved.

| Canonical component name | Component family | Current reference source | Proposed reference source | Current visual summary | Proposed visual summary | Business reason for change | UX reason for change | Accessibility benefit | Psychological goal | Visual board required | Before/after image required | Operator approval required | Implementation blocked until approved | Future implementation note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS Top Navigation | Navigation / shell | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Global nav exists with WNYHS and legacy aliases; QR nav differs. | Stable WNYHS nav using governed tokens, clear CTA, phone, focus, and mobile behavior. | Keep public orientation consistent across route families. | Reduces route confusion and CTA competition. | Improves link contrast, focus, and tap targets. | Trust and local clarity. | Yes | Yes | Yes | Yes | Compare desktop, mobile, phone, CTA, and focus before any nav styling task. |
| WNYHS Mobile Navigation | Navigation / shell | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Mobile drawer evidence exists but parity is not fully proven. | Mobile equivalent of the global nav with reachable controls and no clipped text. | Keeps mobile users on the same funnel path. | Makes small-screen navigation predictable. | Improves tap target and keyboard focus visibility. | Confidence on mobile. | Yes | Yes | Yes | Yes | Future work must not change destinations unless separately scoped. |
| WNYHS Site Footer | Navigation / shell | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Shared footer exists, but route-family parity needs review. | Quiet structured WNYHS footer with readable local identity and links. | Reinforces local brand and support/legal paths. | Makes close-of-page choices easier to scan. | Improves footer link contrast and focus. | Local reliability. | Yes | Yes | Yes | Yes | Compare full and compact footer variants before source changes. |
| WNYHS QR Campaign Navigation | Navigation / shell | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | QR topbar uses separate QR vocabulary and global tokens. | Campaign-compatible reduced nav preserving QR standards. | Keeps scan traffic focused without weakening brand. | Faster local scan decision path. | Improves mobile reach and link clarity. | Fast local confidence. | Yes | Yes | Yes | Yes | Preserve QR source, payload, form, and campaign behavior. |
| WNYHS QR Campaign Footer | Navigation / shell | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Reduced campaign close/footer is only partially formalized. | Minimal campaign close with readable links and local meta. | Gives QR traffic a simple end state. | Avoids forcing full-site clutter into campaign pages. | Improves small text/link readability. | Practical completion. | Yes | Yes | Yes | Yes | Compare campaign close separately from the global footer. |
| WNYHS Page Shell | Page structure | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Light WNYHS canvas and older dark shells coexist. | Warm off-white public canvas with consistent shell rhythm. | Makes the site feel like one brand. | Gives users predictable page rhythm. | Improves page-wide contrast and overflow control. | Calm and premium. | Yes | Yes | Yes | Yes | Future shell changes must be page-family scoped. |
| WNYHS Hero Section | Page structure | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Multiple hero vocabularies exist across homepage, category, solution, and QR. | Premium first impression with readable H1, support copy, CTA, and useful image/panel role. | Strengthens first-screen credibility. | Clarifies page purpose and next action. | Prevents text depending on image contrast. | Safety without fear. | Yes | Yes | Yes | Yes | Compare homepage, category, solution, and QR heroes separately. |
| WNYHS Page Intro | Page structure | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Compact intros vary across search, legal, static, and support pages. | Light simple intro with correct heading order and readable measure. | Makes secondary pages feel maintained. | Helps users orient quickly. | Improves heading order and body contrast. | Clarity and calm. | Yes | Yes | Yes | Yes | Use as compact alternative to full hero. |
| WNYHS Section Block | Page structure | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Section, panel, and card boundaries overlap. | Role-based light, dark, campaign, legal, and form section variants. | Reduces visual drift across pages. | Makes sections easier to scan. | Improves contrast per surface. | Organized competence. | Yes | Yes | Yes | Yes | Compare variants before token or CSS consolidation. |
| WNYHS Section Header | Page structure | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Heading/support copy spacing varies by page family. | Predictable eyebrow, heading, and support copy spacing. | Keeps page sections consistent. | Improves scanning and hierarchy. | Improves muted support-copy readability. | Confidence and order. | Yes | Yes | Yes | Yes | Future implementation should preserve page-specific structure. |
| WNYHS Final CTA Section | Page structure | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | CTA systems are duplicated across pages and QR. | One clear primary path plus optional secondary action. | Improves conversion clarity without harder selling. | Reduces competing actions near page end. | Improves focus and mobile wrapping. | Simple next step. | Yes | Yes | Yes | Yes | Compare final CTA surfaces and action rows. |
| WNYHS Legal Text Section | Page structure | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Legal pages are simpler but not fully mapped. | Branded readable legal shell with clear measure and links. | Keeps legal trust surfaces professional. | Makes legal/supporting text easier to read. | Improves link visibility and fine-print contrast. | Transparency. | Yes | No | Yes | Yes | Board may use rendered text examples rather than image-led comparisons. |
| WNYHS Eyebrow | Text | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Eyebrow/kicker aliases differ across WNYHS, premium, and QR. | Restrained small context label with surface-safe contrast. | Supports consistent section labeling. | Helps users interpret sections quickly. | Improves small-text contrast. | Premium restraint. | Yes | Yes | Yes | Yes | Compare light, dark, campaign, card, and legal contexts. |
| WNYHS Page Heading | Text | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | H1 scale and wrapping vary by page family. | Manrope page heading that wraps safely and avoids oversized compact use. | Strengthens brand voice. | Makes page purpose obvious. | Reduces mobile clipping/overlap. | Authority and clarity. | Yes | Yes | Yes | Yes | Compare long and short H1 examples. |
| WNYHS Section Heading | Text | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Section hierarchy varies. | Consistent H2/H3 hierarchy sized by role. | Improves repeatable content quality. | Makes page scanning easier. | Supports logical heading order. | Organized confidence. | Yes | Yes | Yes | Yes | Compare within cards, panels, legal text, and campaign blocks. |
| WNYHS Card Heading | Text | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Card heading sizing is distributed across systems. | Compact high-contrast card heading with predictable wrapping. | Makes repeated cards feel coherent. | Reduces dense-card confusion. | Improves long-title readability. | Clear choices. | Yes | Yes | Yes | Yes | Compare feature, proof, package, search, and gallery cards. |
| WNYHS Body Copy | Text | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Default and muted body roles are inconsistent. | Inter body copy with comfortable measure and strong contrast. | Improves credibility and comprehension. | Reduces reading friction. | Avoids low-contrast paragraphs. | Calm understanding. | Yes | Yes | Yes | Yes | Compare long, short, linked, and panel copy. |
| WNYHS Muted Copy | Text | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Muted colors differ by surface and can be low contrast. | Muted but readable copy on light, dark, form, footer, and QR surfaces. | Keeps supporting details visible. | Helps users read caveats without strain. | Improves contrast for secondary text. | Comfort and transparency. | Yes | Yes | Yes | Yes | Compare every major surface where muted copy appears. |
| WNYHS Fine Print | Text | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | No dedicated fine-print token is documented. | Small but fully readable caveat/legal/review text. | Avoids hidden conditions or weak caveats. | Keeps limitations and review notes clear. | Improves small-text readability. | Honest restraint. | Yes | Yes | Yes | Yes | Compare legal, form, package, and review-only examples. |
| WNYHS Primary CTA | Actions | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | `.wnyhs-button`, `.btn-primary`, QR CTA, and submit styles overlap. | Governed primary action with gold/black posture and visible states. | Clarifies the main conversion path. | Makes the next action obvious. | Improves focus, disabled, and loading legibility. | Confidence to proceed. | Yes | Yes | Yes | Yes | Compare primary, campaign, and submit variants. |
| WNYHS Secondary CTA | Actions | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Secondary and outline affordances vary. | Charcoal/outline or quiet secondary action that does not compete with primary. | Keeps action hierarchy disciplined. | Gives users a lower-commitment path. | Avoids color-only affordance. | Low-pressure choice. | Yes | Yes | Yes | Yes | Compare paired rows, compact contexts, and hover/focus. |
| WNYHS Text Link CTA | Actions | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Link treatment varies across body, legal, search, footer, and cards. | Governed link/accent treatment with visible focus/underline where useful. | Keeps lightweight actions consistent. | Makes inline paths recognizable. | Reduces color-only link risk. | Helpful direction. | Yes | Yes | Yes | Yes | Compare body, card, legal, footer, and search-result links. |
| WNYHS Phone CTA | Actions | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Phone CTA appears as both link and button. | Clear call/text action adapted by context. | Preserves local direct-contact value. | Helps users choose phone contact quickly. | Improves mobile tap targets. | Local availability. | Yes | Yes | Yes | Yes | Compare nav, hero, contact, support, final CTA, and QR contexts. |
| WNYHS Panel | Containers | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Panel/card boundary is unclear across page families. | One logical group per panel with role-based surface, border, radius, and shadow. | Reduces clutter and visual drift. | Makes grouped information easier to understand. | Improves contrast inside framed surfaces. | Calm organization. | Yes | Yes | Yes | Yes | Compare soft, elevated, dark, form, legal, and campaign panels. |
| WNYHS Feature Card | Containers | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Duplicated card systems exist across WNYHS, premium, QR, and package styles. | Elevated repeated card with stable grid, clear heading, and optional media. | Improves page-to-page consistency. | Helps users compare options. | Improves card focus and body contrast. | Clear evaluation. | Yes | Yes | Yes | Yes | Compare feature cards across homepage, category, solution, support, and QR. |
| WNYHS Tile | Containers | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Tile, chip, and card terms overlap. | Compact item with stable dimensions, clear label, optional icon/thumbnail. | Supports quick browsing without clutter. | Improves scan speed. | Improves tap target and focus state. | Fast recognition. | Yes | Yes | Yes | Yes | Compare category, routine, suggestion, and compact variants. |
| WNYHS Proof Card | Containers | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Proof/story authority remains conservative and image captions need care. | Honest proof-safe card with caption and source-aware framing. | Avoids overstated proof while showing examples. | Helps users understand visual examples. | Improves alt/caption posture. | Trust without exaggeration. | Yes | Yes | Yes | Yes | Compare proof cards with captions and safe labels. |
| WNYHS Search Result Card | Containers | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Search uses specialized result-card patterns. | WNYHS card surface with type label, title, summary, and CTA. | Keeps search useful without exposing internal content. | Makes results easier to scan. | Improves result count, link, and empty-state clarity. | Efficient discovery. | Yes | Yes | Yes | Yes | Compare result, group, and empty-state examples. |
| WNYHS Alert / Info Block | Containers | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Status/info/error surfaces are incomplete. | Semantic info, success, warning, error, and review-only status surfaces. | Makes guidance clearer without alarmist tone. | Helps users identify states and next steps. | Improves status contrast and semantics. | Calm attention. | Yes | Yes | Yes | Yes | Compare status taxonomy before form/status implementation. |
| WNYHS Core Panel | Strategic / unique | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Core differs by homepage, category, and package contexts. | Premium Core surface with dashboard/phone/logo hierarchy. | Explains platform foundation and expansion logic. | Helps users understand technology simply. | Reduces dependence on unreadable dashboard text. | Technology made simple. | Yes | Yes | Yes | Yes | Compare homepage, category, package, dashboard, phone, and logo roles. |
| WNYHS Package Tier Block | Strategic / unique | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Package/review posture and old package visuals are mixed. | Review-safe starting-point block with clear caveat and CTA. | Keeps packages useful without exposing private pricing/BOM details. | Makes comparison less rigid and less cramped. | Improves caveat/status readability. | Practical choice. | Yes | Yes | Yes | Yes | Future task must not change package data, price logic, or payment behavior. |
| WNYHS Vault Tile | Strategic / unique | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Vault appears mostly text/card based with no dedicated image. | Quiet custom/review tile, text-first unless an image is approved later. | Preserves custom project flexibility. | Makes special-case scope understandable. | Improves caveat clarity. | Flexible confidence. | Yes | Yes | Yes | Yes | Compare image-absent current state and optional future visual placeholder. |
| WNYHS QR Campaign Block | Strategic / unique | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | QR campaign blocks diverge from WNYHS primitives. | Campaign blocks compatible with WNYHS tokens and scan-first rhythm. | Keeps QR traffic focused and locally credible. | Makes campaign content faster to process. | Improves phone-first readability and tap targets. | Fast scan confidence. | Yes | Yes | Yes | Yes | Preserve QR runtime/source/form behavior. |
| WNYHS Dashboard Preview Block | Strategic / unique | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Dashboard/phone frame and aspect tokens are incomplete. | Framed dashboard/phone preview with caption and contain/cover decision. | Shows simple technology value. | Helps users understand control surfaces. | Avoids image-only meaning and unreadable UI dependence. | Intelligence made simple. | Yes | Yes | Yes | Yes | Compare contain/cover, caption, dashboard, phone, and Core contexts. |
| WNYHS Category Image Block | Strategic / unique | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Home Automation has full reference package; other categories reuse assets. | CATEGORY003-aligned hero, reveal, dashboard, mobile, routine, and solution thumbnail hierarchy. | Makes canonical categories feel equally mature. | Helps users recognize category outcomes. | Improves hover/focus/tap reveal usability and image-role alt text. | Category confidence. | Yes | Yes | Yes | Yes | Future implementation must reference category image role/gap IDs. |
| WNYHS Solution Scenario Block | Strategic / unique | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Current solution pages use a two-image system. | Solution media/scenario block with source-safe image and clear context. | Supports solution-specific trust without unverified claims. | Helps users imagine practical use cases. | Improves alt/caption clarity. | Practical understanding. | Yes | Yes | Yes | Yes | Compare hero, sample, scenario, and card roles before media expansion. |
| WNYHS Our Work Gallery Block | Strategic / unique | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Gallery exists, but proof/story verification remains open. | Proof-safe gallery with honest captions and consistent framing. | Shows work examples without fabricated proof. | Makes gallery browsing clearer. | Improves image alt, caption, and focus posture. | Trust without overclaiming. | Yes | Yes | Yes | Yes | Compare gallery and proof cards under conservative proof posture. |
| WNYHS Form Shell | Forms | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Form shells split across WNYHS, estimate, QR, and global layers. | Calm form surface with readable title/support/status and clear submit area. | Protects conversion usability. | Reduces form friction. | Improves labels, status, and form contrast. | Low-friction confidence. | Yes | Yes | Yes | Yes | Visual work must not alter payloads, fields, consent, or APIs. |
| WNYHS Form Field | Forms | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Field state tokens are incomplete. | Governed field row with label, control, help/error, focus, disabled, and error states. | Keeps intake forms usable. | Makes field completion clearer. | Improves visible label/focus/error states. | Control and confidence. | Yes | Yes | Yes | Yes | Compare text, search, required, optional, disabled, and error states. |
| WNYHS Form Label | Forms | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Labels can inherit muted styling and blur with helper copy. | Strong visible label distinct from helper text. | Reduces abandoned form attempts. | Helps users understand required input. | Improves visible and programmatic association. | Assurance. | Yes | Yes | Yes | Yes | Compare label/helper hierarchy. |
| WNYHS Form Help Text | Forms | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Helper text overlaps with muted body copy and can be weak. | Muted but readable help text near the field. | Helps users complete forms accurately. | Reduces uncertainty. | Improves small-text contrast on light/dark/campaign forms. | Guidance. | Yes | Yes | Yes | Yes | Compare helper text across contact, support, search, and QR. |
| WNYHS Form Error Text | Forms | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Error text/surface/border mapping is partial. | Clear danger semantic text and calm error surface. | Makes correction path obvious. | Reduces form frustration. | Improves error association and contrast. | Calm correction. | Yes | Yes | Yes | Yes | Compare field-level and form-level error states. |
| WNYHS Select Field | Forms | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Select affordance and focus evidence are partial. | Select control consistent with field system. | Keeps forms consistent. | Makes choice fields understandable. | Improves keyboard/focus visibility. | Predictable input. | Yes | Yes | Yes | Yes | Compare normal, focus, disabled, and error states. |
| WNYHS Textarea Field | Forms | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Textarea height, resize, and state treatment are local. | Stable multi-line control with readable input and focus/error states. | Supports detailed estimate/support context. | Makes longer input less cramped. | Improves readability and focus. | Room to explain. | Yes | Yes | Yes | Yes | Compare normal, focus, error, disabled, and mobile states. |
| WNYHS Submit Button | Forms | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Submit overlaps with generic primary, QR CTA, and estimate-submit styles. | Form-adapted primary action with disabled/loading/status adjacency. | Protects conversion clarity. | Makes submission state understandable. | Improves disabled/loading contrast and focus. | Confidence to send. | Yes | Yes | Yes | Yes | Visual task must not change submission behavior. |
| WNYHS Hero Image | Images / assets | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Hero role varies by route and source folder. | Calm, realistic, premium hero image with safe crop and useful alt text. | Creates stronger first impression. | Supports page purpose without fear visuals. | Avoids text-only image meaning. | Prepared calm. | Yes | Yes | Yes | Yes | Compare crop, aspect, mobile subject preservation, and alt posture. |
| WNYHS Category Image | Images / assets | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Asset packages are uneven and many assets serve multiple roles. | CATEGORY003 role-specific image hierarchy. | Makes categories equally polished. | Helps users recognize category-specific outcomes. | Improves role-specific alt and thumbnail clarity. | Recognition. | Yes | Yes | Yes | Yes | Compare hero, reveal, dashboard, mobile, routine, Core, and thumbnail roles. |
| WNYHS Solution Image | Images / assets | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Solution assets are split across folders and roles. | Outcome-first practical image with source-safe alt and frame. | Improves solution credibility. | Helps users understand scenario and outcome. | Improves alt role and image frame consistency. | Practical confidence. | Yes | Yes | Yes | Yes | Compare hero, sample, scenario, and card usage. |
| WNYHS Proof Image | Images / assets | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Proof/gallery source status needs conservative handling. | Honest curated image with caption describing source-safe context. | Supports trust without fabricated proof. | Makes visual examples understandable. | Improves caption/alt clarity. | Honest proof. | Yes | Yes | Yes | Yes | Compare proof/gallery images and captions. |
| WNYHS QR Image | Images / assets | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Web QR image and print QR asset roles are split. | High-contrast scan-safe campaign image and separate print/web role handling. | Protects campaign clarity. | Makes scan path obvious. | Improves QR/mobile crop and alt posture. | Scan confidence. | Yes | Yes | Yes | Yes | Do not change QR assets or print files in this task sequence. |
| WNYHS Logo Mark | Images / assets | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Approved crest exists, but current web usage is uncertain. | Approved larger logo mark used proportionally in brand moments. | Reinforces brand identity. | Clarifies official WNYHS surfaces. | Improves decorative vs informative alt decisions. | Brand trust. | Yes | Yes | Yes | Yes | Compare crest/Core/CTA roles before placement changes. |
| WNYHS Icon Mark | Images / assets | VISPARITY007B Current State Reference | VISPARITY007C Proposed Visual Standard Reference | Compact icon mark is used in nav and QR with differing alt roles. | Approved compact mark with stable sizing and correct decorative/informative role. | Keeps identity consistent in dense UI. | Improves navigation recognition. | Improves small-size legibility and alt role. | Familiarity. | Yes | Yes | Yes | Yes | Compare nav, footer, QR, and category/card icon contexts. |

## 5. Visual Board Generation Plan

Future boards must render current and proposed states separately.

VISPARITY007E must render the Current State Visual Board from VISPARITY007B evidence. VISPARITY007F must render the Proposed Visual Board from VISPARITY007C evidence. Neither board is created by this document.

### Board 01 - Navigation / Shell / Hero

Must include:

- Top Navigation
- Mobile Navigation
- Site Footer
- QR Campaign Navigation
- Page Shell
- Hero Section
- Page Intro
- Final CTA

### Board 02 - Typography / Actions

Must include:

- Eyebrow
- Page Heading
- Section Heading
- Card Heading
- Body Copy
- Muted Copy
- Fine Print
- Primary CTA
- Secondary CTA
- Text Link CTA
- Phone CTA

### Board 03 - Containers / Cards / Tiles

Must include:

- Panel
- Feature Card
- Tile
- Proof Card
- Search Result Card
- Alert / Info Block
- Core Panel
- Package Tier Block
- Vault Tile

### Board 04 - Forms

Must include:

- Form Shell
- Form Field
- Form Label
- Help Text
- Error Text
- Select Field
- Textarea Field
- Submit Button
- Validation states

### Board 05 - Images / Assets / Proof

Must include:

- Hero Image
- Category Image
- Solution Image
- Proof Image
- QR Image
- Logo Mark
- Icon Mark
- Dashboard Preview Block
- Category Image Block
- Solution Scenario Block
- Our Work Gallery Block

### Board 06 - Accessibility / States

Must include:

- Focus
- Hover
- Active
- Disabled
- Error
- Success
- Loading
- Mobile tap targets
- Text contrast examples

## 6. Image Generation Contract

Future visual artifacts should include:

- Current State Visual Board
- Proposed Visual Board
- side-by-side component comparison images
- Operator Review Packet
- approval/revision fields
- no production implementation until approval

Future visual artifacts must not:

- alter source, CSS, tokens, routes, assets, or runtime behavior
- create final visual authority before operator approval
- include private data, secret values, private URLs, customer records, payment data, CRM data, or scheduling data
- imply the proposed design is approved before Visual Freeze

Side-by-side comparison images should identify:

- canonical component name
- current reference source
- proposed reference source
- viewport or board context
- current-state concern
- proposed improvement
- operator decision field
- revision note field
- implementation-risk field

## 7. Operator Review Workflow

VISPARITY007G must collect one operator decision for every component and board region.

Allowed operator decisions:

- approve
- approve with minor note
- revise
- reject
- defer
- mark as implementation risk

Decision meanings:

| Decision | Meaning | Future action |
| --- | --- | --- |
| approve | Proposed state may become eligible for Visual Freeze. | Include in Visual Freeze candidate set. |
| approve with minor note | Direction is acceptable but small revision note must be carried forward. | Include in freeze candidate only after note is logged. |
| revise | Direction needs rework before approval. | Return to board/reference update task. |
| reject | Proposed direction is not accepted. | Do not implement; preserve or re-propose later. |
| defer | Decision is not ready. | Keep implementation blocked for that component. |
| mark as implementation risk | Design direction may be acceptable but implementation could touch protected or complex surfaces. | Require scoped implementation risk review before VISPARITY008+. |

Operator review packets should include:

- component name
- board number
- current-state summary
- proposed-state summary
- business reason
- UX reason
- accessibility benefit
- psychological goal
- decision field
- minor note field
- revision request field
- implementation risk field

## 8. Visual Freeze Milestone

VISUAL FREEZE is a future approval gate.

This document does not create Visual Freeze.

After Visual Freeze:

- current board is archived as historical baseline
- proposed board becomes canonical visual standard
- implementation may begin
- Playwright baselines may be generated
- hooks/evals may validate against the approved standard
- future PRs must not introduce unmanaged visual drift

Visual Freeze requires:

- Current State Visual Board complete
- Proposed Visual Board complete
- Operator Review Packet complete
- every component decision resolved as approved, approved with minor note, rejected/deferred with explicit exclusion, or marked for implementation risk handling
- no unresolved protected-system ambiguity
- clear implementation sequence for VISPARITY008+

## 9. Future Task Sequence

Required future sequence:

1. `VISPARITY007E - Current State Visual Board`
2. `VISPARITY007F - Proposed Visual Board`
3. `VISPARITY007G - Operator Review Packet`
4. `VISUAL FREEZE`
5. `VISPARITY008 - Kitchen-Sink Visual QA Reference Page Implementation`
6. `VISPARITY009 - Playwright Visual Baseline Generation`
7. `VISPARITY010 - Visual Hook / Eval Integration`

VISPARITY008+ implementation must not begin until Visual Freeze or an explicit Step/task revision authorizes a different controlled path.

## 10. Non-Authority Statement

This document does not approve the proposed design.

This document does not authorize implementation.

This document does not create visual artifacts.

This document is the planning bridge from reference docs to visual review artifacts.

## 11. Recommended Next Task

Recommended next task:

`VISPARITY007E - Current State Visual Board`

VISPARITY007E should create the Current State Visual Board from VISPARITY007B and this matrix without implementing source, CSS, tokens, routes, images, screenshots, Playwright, hooks, QA automation, or production visual changes unless a future bounded work order explicitly authorizes those artifacts.

## 12. Scope Compliance

VISPARITY007D creates only the Before/After Visual Comparison Matrix and visual-approval orchestration plan.

It includes:

- purpose
- boundary
- source inputs
- comparison matrix for every canonical VISPARITY003 component
- Visual Board Generation Plan
- Image Generation Contract
- Operator Review Workflow
- Visual Freeze milestone
- future task sequence
- non-authority statement
- recommended next task

It does not:

- edit source code
- edit route files
- edit CSS
- edit tokens
- edit UI components
- edit images or assets
- create screenshots
- create visual boards
- generate PDFs
- create Playwright tests
- create baseline folders
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
