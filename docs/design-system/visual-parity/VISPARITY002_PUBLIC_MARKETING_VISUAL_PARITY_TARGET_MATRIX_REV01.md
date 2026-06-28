# VISPARITY002 Public Marketing Visual Parity Target Matrix REV01

Task ID: VISPARITY002
Task Name: Public Marketing Visual Parity Target Matrix
Status: Target matrix only
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## Boundary

This is a target matrix, not implementation.

This document defines the desired public marketing visual parity target state for later bounded tasks. It does not approve final CSS values. It does not change pages. It does not activate hooks or QA checks. It does not authorize protected-route cleanup.

Scope is public marketing pages only.

Included route families:

- Homepage / host entry
- Canonical category pages
- Solution pages
- Search
- About
- Our Work
- Contact
- Support
- Legal pages
- QR Landing as a standalone public/campaign entry
- Public-reachable noindex demo or planner pages as review-only candidates

Excluded unless later classified by a separate bounded task:

- quote, agreement, payment, schedule, resume, verification, operator, API, runtime, and other protected transaction/system pages
- legacy vertical, prototype, vendor, and business routes
- source, route, CSS, token, component, image, sitemap, robots, runtime, CRM, payment, scheduling, Cloudflare, dependency, package-lock, hook, and QA implementation

## Source Inputs

Primary source:

- `docs/design-system/visual-parity/VISPARITY001_PUBLIC_ROUTE_ELEMENT_DISCOVERY_REV01.md`

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
- `docs/brand/visual_system_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`
- `docs/site-architecture/SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md`
- `docs/seo/SEO004_WNYHS_SEO_STATUS_AND_CONTINUATION_HANDOFF_REV01.md`

## Public Marketing Page Families

| Page family | Representative routes | Target classification | Parity posture |
| --- | --- | --- | --- |
| Homepage / host entry | `/`, `/home-security` | Primary public marketing entry; `/home-security` remains legacy/canonicalized current entry in SEO posture | Highest parity target; establishes public visual proof surface and section rhythm. |
| Canonical category pages | `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, `/categories/aging-in-place` | Public indexable category routes | Must share category structure, image hierarchy, token-governed section rhythm, and Core panel logic. |
| Solution pages | `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, `/solutions/vacation-homes` | Public indexable solution detail routes | Must share solution hero, problem/setup/outcome, scenario image, CTA, and token-governed card language. |
| Search | `/search` | Public indexable search route; query URLs remain noindex | Must use public-site result language, readable form controls, result cards, type labels, empty state, and token-governed CTA hierarchy. |
| About | `/about` | Public indexable marketing/trust page | Must feel like the same site while preserving static information structure. |
| Our Work | `/our-work` | Public indexable proof/gallery page | Must use proof/gallery image framing without implying unverified project claims. |
| Contact | `/contact` | Public indexable conversion/contact page | Must prioritize form readability, field clarity, low-friction contact options, and safe CTA hierarchy. |
| Support | `/support` | Public indexable support page | Must prioritize help path clarity, readable support form, and calm support panels. |
| Legal pages | `/privacy`, `/terms` | Public-reachable noindex legal pages | Must be readable and branded, but intentionally simpler than conversion pages. |
| QR Landing | `/qrlanding`, `/qrlanding.htm` | Public/campaign noindex entry | Standalone campaign parity target; align tokens and readability while preserving QR-specific navigation, attribution, and campaign structure. |
| Review-only public tools/demos | `/home-security/planner`, `/home-security/dashboard`, `/demo`, `/5-day-demo`, `/newsite/demos/ha-gold-dashboard`, static demo path | Public-reachable noindex/review candidates | Review-only until separately classified; no visual migration or cleanup is authorized here. |

## Component / Element Target Matrix

| Element name | Purpose | Where used / expected page families | Visual parity target | Structural parity target | Token dependency | Typography target | Spacing/layout target | Image/asset dependency | Accessibility target | Allowed variants | Forbidden variants | Current known gaps from VISPARITY001 | Future enforcement candidate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Top navigation | Orient users and expose primary actions | Homepage, categories, solutions, search, about, our work, contact, support, legal; QR has campaign variant | Quiet structured header with brand mark, high-contrast links, restrained active/hover state | One global WNYHS pattern; QR may use reduced campaign nav | Header/footer standards; public visual primitives | Inter UI text; no oversized labels | Stable height, mobile drawer, no overlap | `IconizedLogo.png` for compact brand | Keyboard focus visible; mobile tap targets readable | Main-site nav, QR reduced nav | SaaS/demo/operator nav leakage; route drift without task | Main nav and QR nav are separate vocabularies | VISPARITY009 or VISPARITY010 |
| Footer | Close pages with local identity, support/legal links, version | Main public pages; QR may use reduced footer/campaign close | One WNYHS footer pattern, dark structured footer, readable metadata | Shared footer composition with consistent columns and version | Header/footer standards; footer primitive | Inter small UI text; readable link text | No duplicate footer; mobile stacks cleanly | `IconizedLogo.png` at footer brand placement where used | Link contrast and focus visible | Full public footer; reduced campaign footer | Operator/demo footer links; duplicate global footers | Footer exists but page-family parity should be checked later | VISPARITY009 or VISPARITY010 |
| Hero | Establish page purpose, credibility, and next action | Homepage, categories, solutions, QR, contact/support, packages/review pages if classified | Image-led or strong panel-led hero using WNYHS visual language | One dominant message, supporting proof, CTA row; page-specific structure allowed | `--wnyhs-*`, semantic surface/text/action tokens | Manrope heading; Inter support text | Constrained width; responsive two-column only when useful | Page-specific approved image when present | Text readable without highlighting; CTAs keyboard reachable | Image hero, panel hero, compact page hero, QR campaign hero | Decorative empty hero, fear-based hero, text over unreadable image | Multiple hero implementations and vocabularies exist | VISPARITY006, VISPARITY009 |
| Page intro/header | Introduce non-hero pages or sections | Search, legal, about, support, contact, list pages | Compact branded header using same section rhythm | H1 or H2 plus concise support copy | Section/header primitives | Manrope heading; Inter body | Tight vertical rhythm; no giant display inside compact surfaces | Usually none | Correct heading order | Full intro, compact intro | One-off large type; app-shell headers | Page families use mixed intro treatments | VISPARITY003, VISPARITY006 |
| Eyebrow | Short context label | Heroes, section headers, cards where helpful | Small restrained accent label | Optional; not required for every block | Accent/token text color only | Inter or governed small uppercase style | Close to heading, no standalone clutter | None | Does not replace real heading | Hero eyebrow, section eyebrow, QR kicker | Overused labels; low contrast tiny text | `wnyhs`, `hs-premium`, and `qr` labels differ | VISPARITY003 |
| Heading | Define hierarchy | All public marketing pages | Manrope governed heading system | Logical H1-H3 page outline | Heading/text tokens | Manrope via governed token | Responsive without viewport-scaling hacks | None | Proper order, wraps cleanly | Hero, section, card, legal headings | Display treatment inside dense cards | Older Oswald/Inter and newer Manrope standards coexist | VISPARITY004, VISPARITY006 |
| Body copy | Explain value, context, and constraints | All page families | Readable, calm, high-contrast text | Short paragraphs, lists where useful | Text/muted semantic tokens | Inter body/UI | Comfortable line length; no cramped panels | None | Visible contrast; mobile line length readable | Support copy, legal body, card body | Text requiring selection/highlighting to read | Muted text and dark surfaces need review | VISPARITY009 |
| CTA button | Primary next action | Heroes, final CTA, cards, contact/support, QR | Gold/black primary CTA treatment or governed equivalent | Clear primary action per section | Action/background/foreground/focus tokens | Inter button text | 44-50px effective height; wraps on mobile | None | Focus ring visible; label describes action | Primary CTA, full-width mobile CTA | New one-off button colors; oversized buttons | `btn-*`, `wnyhs-button`, and QR CTA coexist | VISPARITY004, VISPARITY010 |
| Secondary/link button | Lower-priority action | Hero rows, cards, support/help paths | Charcoal/outline or link-style secondary action | Same action row rhythm as primary but lower weight | Secondary/action tokens | Inter button/link text | Aligned height where paired with primary | None | Link affordance visible | Secondary button, text link, phone link | Hidden affordance; same weight as primary everywhere | Mixed secondary styles exist | VISPARITY004 |
| Card | Group related content | Categories, solutions, search, support, proof, package previews | Warm light or dark emphasis card according to page context | Equal-height where practical; no nested card clutter | Card/surface/border/shadow tokens | Card title Manrope/Inter per standard; body Inter | 8px or governed radius where repeated; stable grids | Optional media at governed aspect | Entire card link/focus semantics clear | Media card, text card, result card, proof card | Card inside card without need; raw color card systems | Many card vocabularies exist | VISPARITY003, VISPARITY006 |
| Tile | Compact navigation or routine item | Category explorer, routines, search suggestions | Compact, scan-friendly, aligned to card language | Stable dimensions and predictable hover/focus | Surface/border/action tokens | Short labels only | Grid with no layout shift | Simple thumbnail/icon if useful | Tap target readable; focus visible | Category tile, routine tile, suggestion chip | Dense infographic tile; unclear icon-only tile | Tiles overlap with cards/results vocabulary | VISPARITY003 |
| Panel | Larger section container | Heroes, Core, final CTA, forms, proof sections | Premium but restrained section surface | One panel per logical section | Section/surface/border tokens | Section heading + body hierarchy | Constrained max width; no excessive nested borders | Optional supporting image | Content not hidden by decorative treatment | Light panel, dark emphasis panel, campaign panel | App-shell panels on marketing pages | Many panel names and raw values remain | VISPARITY004, VISPARITY006 |
| WNYHS Core Panel | Explain platform foundation and expansion logic | Homepage, categories, packages/review, future solution contexts if governed | Premium foundation panel with dashboard/phone/logo proof used consistently | Homepage Core differs from category Core; both preserve same logic | Core panel should use governed section/card tokens | Manrope heading; Inter clear explanatory text | Dashboard/phone proof hierarchy readable | Core dashboard/phone/logo assets or category-specific proof | Image text legible; alt text describes purpose | Homepage Core, category Core | Dense unreadable infographic; official-affiliation implication | Solution details do not expose same Core panel; category Core assets uneven | VISPARITY005, VISPARITY006 |
| Package/tier block | Show package or starting-point information where approved | Packages and package detail; contextual cards on homepage/category | Structured comparison without exposing internal cost basis | Customer-facing outcomes only; packages remain noindex/review until governed otherwise | Package/card/price chip tokens | Clear tier title, concise copy, price caveats if approved | Equal-height comparison; no cramped price rows | Package image if approved | Price/status text legible | Starting point card, detail block, contextual package card | BOM/cost exposure; unapproved price styling | Packages use separate review posture and mixed visual roles | VISPARITY006 |
| Proof/gallery block | Show visual trust and work examples | Our Work, homepage, category proof, solution examples | Image-led proof with honest context and consistent framing | Gallery/grid with captions and safe labels | Media/card/border tokens | Captions readable; no fabricated proof wording | Consistent aspect ratios and grid rhythm | Our Work/gallery images | Alt text distinguishes decorative vs informative images | Gallery, case-style example, proof strip | Fake story language; unreadable thumbnails | Our Work needs proof/story asset governance | VISPARITY005, VISPARITY009 |
| Image block | Support page meaning | Heroes, cards, Core, category proof, QR | Realistic, calm, bright enough, consistently cropped/framed | Image role declared: hero, proof, thumbnail, scenario, brand | Media/border/radius tokens | Captions when needed | Aspect ratio selected by role; no overflow | Approved brand/page/category/solution assets | Alt text required by role; no text-only meaning inside image | Hero image, card image, dashboard screenshot, brand mark | Random generated production image; distorted crop; text too small | Asset folders and naming are uneven | VISPARITY005 |
| Form | Collect contact/support/search input | Contact, support, search, QR; discovery/review only if separately scoped | Clear, calm, readable form panel | Labels, fields, help text, submit action, validation area | Input/border/focus/error tokens | Inter labels and inputs | Adequate field height and spacing on mobile | None | Labels visible, focus clear, errors readable | Search form, contact form, support form, QR form | Hidden labels; low-contrast placeholders; runtime edits without task | Form readability/focus states need later audit | VISPARITY006, VISPARITY009 |
| Field/input/select/textarea | Accept user text/choices | Forms and search | Consistent field surface and focus treatment | Label + control + helper/error pattern | Input/ring/error tokens | Inter, readable placeholder/support text | Full-width mobile; stable height | None | Keyboard operable; sufficient contrast | Text, select, textarea, checkbox/toggle where existing | Placeholder-only label; hardcoded focus colors | Contact/support/QR/search styles differ | VISPARITY004, VISPARITY009 |
| Alert/info block | Communicate guidance or non-error status | Forms, search empty state, support guidance, QR info | Calm, high-contrast info surface | Icon/text optional; never blocks reading | Info/surface/border tokens; missing token decisions are gaps | Short heading plus body | No intrusive modal-style block unless scoped | Usually none | Role/semantics appropriate in implementation | Info panel, empty state, validation note | Alarmist or low-contrast block | Multiple ad hoc info styles exist | VISPARITY004 |
| Badge/ribbon | Highlight status, type, proof, or route kind | Heroes, cards, search result labels, package chips, QR proof strip | Small supporting marker, not a competing CTA | Optional; repeated variants should share naming | Accent/muted/border tokens | Small Inter label | Tight padding; no wrapping breakage | None | Text readable at small sizes | Type chip, proof pill, price chip, campaign pill | Large banner ribbons; low-contrast tiny text | Badge/chip systems differ by page | VISPARITY003 |
| Search result block | Present public-site search result | Search page only | Card/result list aligned to WNYHS cards | Type label, title, summary, CTA route | Card/action/text tokens | Heading + body + label hierarchy | Result grouping and mobile stack readable | Optional none | Result count/empty state clear; links keyboard reachable | Result card, grouped section | Internal data exposure; package primary objects without approval | Search has its own result block system | VISPARITY006, VISPARITY009 |
| Legal text block | Present policy/terms content | Privacy, Terms | Simple branded readable text surface | Document title, sections, links | Text/surface/link tokens | Body readability over decoration | Narrow measure; clear section spacing | None | Links distinguishable; headings ordered | Legal article, legal intro | Marketing card clutter; tiny low-contrast legal text | Legal pages are noindex and simpler | VISPARITY006 |
| QR campaign block | Support QR scan conversion | QR Landing only | Campaign-specific but recognizably WNYHS; high readability | Reduced nav, hero, proof strip, benefit cards, next steps, contact path | QR should map to semantic tokens where practical | Mobile-first Inter/Manrope hierarchy | Fast scan, phone-first, no cramped cards | QR/brand/campaign assets where governed | Form/CTA/tap targets readable; source behavior preserved | QR topbar, proof strip, benefit card, next-step card | Main-site layout forced blindly; attribution/runtime changes | QR has separate CSS and visual vocabulary | VISPARITY004, VISPARITY006, VISPARITY009 |

## Color/token matrix

This Color/token matrix maps components to semantic token categories rather than hardcoded values. It does not approve final CSS values and does not invent missing token values.

| Token category | Components | Target use | Known gap / decision needed |
| --- | --- | --- | --- |
| Canvas/page background | Page shell, homepage, category pages, legal pages, search | Governed public canvas via WNYHS visual primitives | Dark legacy and warm light public systems both exist in docs; later token mapping must clarify current target per page family. |
| Surface/card background | Cards, panels, forms, search result blocks, legal text blocks | Use card/surface tokens, not raw color values | Multiple `wnyhs-*`, `hs-premium-*`, `qr-*`, and legacy styles remain. |
| Text primary | Headings, body, buttons where foreground | High-contrast semantic foreground | Muted text contrast needs later visual QA. |
| Text muted/support | Body support, captions, helper text, footer meta | Semantic muted foreground only when contrast remains readable | Some muted text may be too low contrast on dark or image-heavy panels. |
| Accent/brand | Eyebrows, focus emphasis, badges, active states | Restrained gold/brand accent through tokens | Do not add new raw accent colors; blue CTA legacy behavior needs mapping decision. |
| Primary action | CTA button, submit buttons | Governed primary action token/category | Missing final mapping for every historical `.btn-primary` and QR CTA variant. |
| Secondary action | Secondary buttons, outline links, phone/contact links | Governed secondary or link tokens | Link/button affordance should be unified without losing page-specific CTA hierarchy. |
| Border/divider | Cards, panels, media, footer, fields | Semantic border token or governed mix | Raw rgba/color-mix values require future token gap register. |
| Focus/ring | Nav, buttons, links, forms, cards, drawer controls | Visible focus token on all interactive elements | Focus-state parity needs later audit across QR/forms/search/nav. |
| Field/input | Search/contact/support/QR fields | Semantic input, border, ring, error states | Form-state token decisions are incomplete. |
| Status/info/error | Alerts, validation, info blocks | Dedicated semantic status categories where existing | Missing token decisions for info/warning/error surfaces across public pages. |
| Media frame | Hero images, card images, gallery, Core screenshots | Governed radius, border, shadow, aspect tokens if available | Asset role and aspect-ratio tokens may need future decisions. |

## Image parity matrix

This Image parity matrix defines target image roles and governance gaps only. It does not change image assets.

| Image category | Target role | Style target | Crop/aspect target | Alt-text expectation | Governance gap |
| --- | --- | --- | --- | --- | --- |
| Brand mark | Confirm identity in nav/footer/CTA moments | Approved crest/icon assets only | Intrinsic or constrained logo sizing | Decorative when redundant; descriptive when sole brand signal | Brand asset locations are governed; placement parity still needs review. |
| Homepage hero | Primary public visual proof surface | Calm, premium, realistic, bright enough | Hero-safe crop with important subject preserved | Describes visual context, not marketing claim | Homepage image is approved; future route ownership may affect usage. |
| Category hero | Establish category identity | Category-specific, residential, clear | Large hero crop; no text dependence | Describes category scene/outcome | Home Automation has strong asset set; other categories appear less complete. |
| Reveal/explainer pair | Show normal view vs planned opportunity | Simple paired images with accessible hover/focus behavior | Matched aspect and subject | Describes the visible state/purpose | Needs parity beyond Home Automation reference. |
| Dashboard/Core proof | Show understandable platform/control layer | Legible dashboard/phone visuals | Contain when UI text matters; avoid tiny unreadable screenshots | Describes dashboard purpose and category context | Core images vary by page; text legibility needs audit. |
| Routine thumbnail | Represent everyday use quickly | Bright, one clear subject, no text overlay | Small-card safe 150-220px rendered target | Describes routine scene | Category-specific routine assets missing for several categories. |
| Solution card image | Support navigation to solution outcome | Single-scene outcome image | Card media crop; subject preserved | Describes scenario/outcome without overclaiming | Anchor-only solution assets and route-backed assets need reconciliation. |
| Solution detail hero/sample | Explain solution context and scenario | Two-image system where governed | Hero plus sample/scenario aspect | Describes illustrative example and any visible equipment/context | Future solution expansion needs image readiness standard. |
| Gallery/proof image | Show example work or concept | Honest, curated, readable | Gallery ratios consistent by role | Identifies what is shown; avoids fabricated proof wording | Our Work proof/story governance remains open. |
| QR/campaign image | Support fast scan and local campaign trust | High contrast, readable, campaign-safe | Mobile-first crop; no tiny text dependence | Describes campaign visual or marks decorative | QR uses separate image treatment and campaign assets. |
| Search/legal/support image | Usually none or secondary | Avoid decorative clutter | Only if useful | Alt depends on role | Avoid adding images without a future asset task. |

## Accessibility target matrix

| Target area | Public marketing target | Applies to | Current known gap from VISPARITY001 |
| --- | --- | --- | --- |
| Text visibility | Text must be readable without selection/highlighting and without depending on image contrast tricks. | All public marketing pages | Muted text, chips, footer links, and dark cards need later visual QA. |
| Contrast | Foreground/background, button text, link text, field text, and helper/error text should meet accessible contrast expectations. | Nav, footer, cards, forms, QR, legal, search | Mixed vocabularies make contrast inconsistent. |
| Focus state | Keyboard focus must be visible on nav controls, links, CTAs, cards, fields, search suggestions, and QR controls. | All interactive surfaces | Focus parity across QR/forms/search/nav requires audit. |
| Form readability | Labels, placeholders, fields, helper text, errors, and submit controls must remain clear at mobile and desktop sizes. | Contact, support, search, QR; discovery only in later scope | Contact/support/QR/search forms use different style layers. |
| Link/button affordance | Links and buttons must clearly look actionable without relying only on color. | Nav, CTAs, result cards, footer, legal pages | Secondary/link button variants are not yet unified. |
| Mobile readability | Headings, CTAs, cards, proof strips, images, and footer link lists must wrap without overlap or clipped text. | All page families | Hero proof strips, CTA rows, cards, and footers need route-family QA. |
| Image accessibility | Decorative vs informative images need consistent alt decisions; screenshots must not be the only source of important text. | Hero, category, solution, gallery, Core, QR | Asset role governance is incomplete outside Home Automation and solution standards. |
| Search semantics | Result count, grouped sections, empty state, result cards, and search form should remain understandable to assistive tech. | Search | Search page has specialized result structures needing future QA. |
| Legal readability | Legal copy should preserve readable measure, heading hierarchy, and link affordance. | Privacy, Terms | Legal pages are simpler but still need parity checks. |

## Page-family compliance matrix

| Page family | Required elements | Optional elements | Disallowed elements |
| --- | --- | --- | --- |
| Homepage / host entry | Top navigation, hero, trust/proof context, category path, package/contextual offer preview, selected solution preview, WNYHS Core Panel, how-it-works or next-step explanation, final CTA, footer | Search access, Our Work preview, local proof block | Protected transaction widgets, internal data, unrelated demo/operator content, ungoverned route cleanup |
| Canonical category pages | Top navigation, category hero, category-specific section rhythm, solution cards, WNYHS Core Panel, primary CTA, footer | Reveal pair, dashboard/phone/routine proof, custom solution panel | Dense unreadable Core image, unapproved category asset replacement, unsupported claims |
| Solution pages | Top navigation, solution hero, problem/setup/outcome structure, scenario/sample image, related context, CTA, footer | WNYHS Core reference if later governed, selected gallery proof | Unvalidated pricing, package/BOM exposure, new solution claims without source |
| Search | Top navigation, search form, result count, grouped result cards, empty state, CTA/support links, footer | Suggested searches, type filters if later approved | Internal records, protected routes, package IDs as primary objects without approval |
| About | Top navigation, page intro, local/company trust content, CTA/contact path, footer | Timeline, owner story, service area notes | Fabricated proof, unrelated vertical copy |
| Our Work | Top navigation, proof/gallery block, safe captions, CTA/contact path, footer | Category filters, story cards if verified | Fake reviews, invented metrics, misleading completed-work claims |
| Contact | Top navigation, page intro, contact/estimate form, direct call/text/email path, CTA support copy, footer | Help routing, service area note | Runtime/form behavior changes without separate task; low-contrast fields |
| Support | Top navigation, support form, support categories, direct contact path, support guidance, footer | FAQ links, existing-customer path | Runtime/form behavior changes without separate task; promise language beyond approved support posture |
| Legal pages | Top navigation or simple public shell, legal title, readable legal sections, footer | Contact/support link | Marketing-heavy CTA blocks, unreadable fine print |
| QR Landing | QR campaign nav, QR hero, scan-appropriate proof, benefit/next-step cards, contact/estimate path, QR campaign close | Reduced footer, campaign asset reference | Main-site layout forced blindly; attribution/source behavior edits; form payload edits |
| Review/noindex demo or planner pages | Clear review-only classification before parity decisions | Visual audit notes only | Migration, cleanup, public promotion, or route deletion without separate task |

## Future task sequence

1. `VISPARITY003` - Visual component naming standard.
2. `VISPARITY004` - Token mapping / gap register.
3. `VISPARITY005` - Image parity / asset usage register.
4. `VISPARITY006` - Public marketing page compliance plan.
5. `VISPARITY007` - Kitchen-sink visual QA reference page spec.
6. `VISPARITY008` - Implementation batch 1.
7. `VISPARITY009` - Visual QA/eval candidate.
8. `VISPARITY010` - Hook candidate for visual violations.

Future tasks must remain bounded. This matrix does not approve implementation, final token values, image changes, QA checks, hooks, route changes, or protected-route cleanup.

## Scope Compliance

VISPARITY002 creates a target matrix for visual, structural, image, token, accessibility, and page-family parity across public marketing page families.

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
- activate any KAOS rule
- merge
