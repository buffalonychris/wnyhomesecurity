# W. N. Y. Home Security Replacement-Site Navigation and Information Architecture Authority — REV01

## 1. Document control

- **Task:** NAVIA001
- **Owner:** Site Architecture / Navigation and Information Architecture
- **Status:** Active on merge
- **Revision:** REV01
- **Date:** 2026-07-27
- **Customer-facing implementation:** No
- **Route, redirect, or runtime authority:** No

## 2. Purpose

This document defines the future replacement-site navigation, page hierarchy, route taxonomy, audience pathways, wayfinding, footer, mobile menu, deep-link orientation, and legacy-route planning for W. N. Y. Home Security.

It is specific enough that later implementation tasks do not invent architecture while coding. It does not modify or authorize production routes, redirects, navigation components, content, indexing, analytics, funnels, runtime behavior, or deployment.

## 3. Authority relationship

NAVIA001 is subordinate to repository governance, the current operational context, the Master Task Register, and protected runtime contracts.

It preserves:

- HOMEAUTH001 homepage order and stable IDs;
- UXAUTH001 experience, interaction, conversion, accessibility, and performance authority;
- VISREF001 Warm Architectural Intelligence visual authority;
- SITEARCH005 six-pillar labels and exact order;
- SITEARCH002 canonical homepage, category, and solution route patterns;
- the current production header/footer standard until separately reconciled;
- claims, copy, semantic-token, funnel, analytics, attribution, support, SEO, runtime, and deployment owners.

NAVIA001 becomes the controlling owner for the **future replacement-site information architecture**. Current production navigation and routes remain controlled by their existing source and owner documents.

### 3.1 Production header/footer overlap

`docs/brand/header_footer_standards_rev01.md` remains locked for current production. Its Home, Packages, Fit Check, Estimate, Support, Our Work, and CTA order is not changed here.

NAVIA001 recommends a different future replacement-site structure. A future bounded implementation task must explicitly reconcile or amend the production header/footer standard before source changes. Until then:

- production behavior wins at runtime;
- NAVIA001 controls future planning;
- neither authority may be silently treated as already implemented.

## 4. Decision classes

This document distinguishes:

- **Repository-derived fact:** observed in current source or current authority.
- **Approved architecture decision:** future replacement-site structure established here.
- **Recommended future route:** a planned semantic route subject to implementation/migration validation.
- **Provisional label:** navigational wording requiring COPYAUTH001.
- **Protected current route:** active or runtime-sensitive route that remains unchanged.
- **Deferred decision:** requires another owner or task.
- **Implementation choice:** code-level behavior reserved for an implementation task.

No proposed route is an implemented fact.

## 5. Business and structural doctrine

The public site represents W. N. Y. Home Security as a locally accountable intelligent-property solutions company.

The architecture must:

- sell solutions and outcomes rather than hardware;
- connect six pillars into one integrated property-wide system;
- make ownership, privacy, local-first operation, expandability, and support easy to find;
- guide prospects toward an assessment without forcing immediate conversion;
- give existing customers a direct support path;
- keep technical platforms, protocols, brands, bundles, and package tiers out of primary discovery;
- never imply central-station monitoring, emergency dispatch, or unsupported capability.

Home Assistant is not a primary public navigation object.

## 6. Canonical homepage and six-pillar preservation

HOMEAUTH001 order remains:

1. HOME-001 — Hero
2. HOME-002 — Core Promise
3. HOME-003 — Six Pillars
4. HOME-004 — Why W. N. Y.
5. HOME-005 — How Customization Works
6. HOME-006 — Real-Life Outcomes
7. HOME-007 — Expandable System
8. HOME-008 — Education
9. HOME-009 — Existing-Customer Path
10. HOME-010 — Primary CTA / Footer Transition

Stable IDs `HOME-001` through `HOME-010`, `NAV-001`, `FOOTER-001`, and `MOBILE-001` remain unchanged.

The exact pillar order is:

1. Home Security
2. Aging in Place
3. Home Safety
4. Home Automation
5. Home Lighting
6. Property Management

The six pillars are connected solution areas, not packages, departments, companies, or product categories.

## 7. Repository-derived current-state facts

The analysis inspected:

- all 123 `path` declarations in `src/App.tsx`, including nested `/newsite/*` routes;
- `src/content/wnyhsNavigation.ts`;
- `src/components/homeSecurity/WnyhsTopNav.tsx`;
- `src/components/homeSecurity/WnyhsSiteFooter.tsx`;
- `src/lib/seoPolicy.ts`;
- `src/content/publicSearchIndex.ts`;
- `public/sitemap.xml`;
- `public/_redirects`;
- SITEARCH001 through SITEARCH005 and SEO baseline records;
- public and QR funnel standards.

Current facts:

- `/` is the canonical homepage and renders Home Security.
- Five canonical category routes exist under `/categories/*`; Property Management is deferred.
- Four canonical solution routes exist under `/solutions/*`.
- production navigation is source-driven by `wnyhsNavigation.ts`;
- current production navigation leads with Home, Search, Solutions, Fit Check, Estimate, Our Work, a CTA, and a larger drawer;
- current “Solutions” goes to `/categories/home-security`, not a Solutions overview;
- current footer links five categories and omits Property Management;
- package, legacy, prototype, demo, cross-vertical, campaign, operator, and protected funnel routes coexist in one router;
- sitemap and SEO policy intentionally expose a smaller governed public set;
- `_redirects` contains only API passthrough and SPA fallback; no category migration redirects exist;
- current funnels, QR attribution, payment, scheduling, and continuation routes are protected.

## 8. Audience model

| Audience | Likely entry | Primary question | Navigation need | Trust requirement | Ideal next step | Secondary step | Exit risk | Route family | Destination |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| New property owner | Homepage, search | What can this company do for my property? | Simple whole-system overview | Local identity, ownership, plain explanation | Solutions overview or assessment | How It Works | Category overload | Home/Solutions | Assessment |
| Specific-problem visitor | Solution, outcome, campaign | Can this solve this problem? | Direct parent and related paths | Plausible outcome and limitations | Assessment | Related guide | Hardware-catalog impression | Solution/Outcome | Assessment |
| Automation explorer | Home Automation pillar, Learn | What else could work together? | Cross-pillar discovery | Expandability and credible dashboard | Related solutions | Learn | Technical overload | Pillar/Solution/Learn | Assessment |
| Adult child researching aging support | Aging in Place, search, article | Can this support independence respectfully? | Clear non-medical context and related safety | Privacy, consent, honest limitations | Assessment | Guide or contact | Monitoring implication | Pillar/Outcome/Learn | Assessment |
| Existing customer | Support, deep link, homepage support | Where do I get help? | Direct support without prospect funnel | Identity, privacy, known support path | Support request | Setup/help article | Forced sales journey | Support | Support |
| Returning lead | Saved link, email, continuation route | How do I continue? | Protected continuation route | State preservation and expectations | Resume current flow | Contact | Lost attribution/state | Protected funnel | Existing continuation |
| Commercial/special property visitor | Search, specialty page, referral | Is my property type supported? | Authorized specialty pathway | Scope qualification, local accountability | Contact/assessment | Relevant solutions | Unsupported commercial promise | Specialty/Solution | Assessment/contact |
| Educational visitor | Learn, article, search | What should I understand first? | Topic-to-pillar links | Useful, non-sales-only guidance | Related solution | Assessment | Article dead end | Learn | Solution/assessment |
| Deep-link visitor | Search, social, QR, shared link | Where am I and what next? | Breadcrumb, section label, parent, related path | Immediate company/purpose context | Contextual next action | Home/support | Disorientation | Any public family | Context-dependent |

No demographic assumptions beyond these needs are authorized.

## 9. Architecture models evaluated

### 9.1 Model A — Pillar-First Solution Architecture

- **Organizing principle:** Solutions overview → six pillars → solution details.
- **Primary navigation:** Solutions, How It Works, Why W. N. Y., Learn, Support, assessment CTA.
- **Pillars:** Directly exposed in a structured Solutions menu.
- **Support:** Distinct top-level path.
- **Education:** Learn links into pillars and solutions.
- **Conversion:** Contextual assessment from all discovery pages.
- **Mobile:** Solutions disclosure within a full-height menu sheet.
- **Depth:** Usually two to three levels.
- **Advantages:** Clear, scalable, strongly aligned with SITEARCH002/005 and solution-first doctrine.
- **Risks:** Visitors with urgent problems may not recognize their pillar immediately.
- **Cognitive load:** Low-to-medium.
- **Conversion:** Strong after pillar recognition.
- **SEO/content:** Strong pillar topic clusters.
- **Migration:** Moderate; uses current category and solution patterns.
- **Protected routes:** Compatible; funnels remain outside discovery hierarchy.
- **HOME/UX/VIS fit:** Strong.

### 9.2 Model B — Outcome-First Architecture

- **Organizing principle:** Visitor chooses a desired result or problem first.
- **Primary navigation:** Outcomes, How It Works, Learn, Company, Support, assessment CTA.
- **Pillars:** Secondary organizing labels.
- **Support:** Distinct.
- **Education:** Closely paired with outcome pages.
- **Conversion:** Outcome page to assessment.
- **Mobile:** Short outcome list with progressive disclosure.
- **Depth:** Two to four levels.
- **Advantages:** Uses everyday language and matches high-intent search/direct-entry needs.
- **Risks:** Outcomes overlap pillars, duplicate content, and scale poorly without strict governance.
- **Cognitive load:** Low at entry, higher when overlaps emerge.
- **Conversion:** Strong for specific problems.
- **SEO/content:** Useful long-tail discovery but duplication risk.
- **Migration:** High; many new pages and mappings.
- **Protected routes:** Compatible if assessment handoff remains unchanged.
- **HOME/UX/VIS fit:** Good but less structurally stable.

### 9.3 Model C — Property Journey / Audience Architecture

- **Organizing principle:** Explore, understand, plan, install, support.
- **Primary navigation:** Explore, Process, Learn, Customers, Company, assessment CTA.
- **Pillars:** Embedded within Explore.
- **Support:** Customer stage.
- **Education:** Supports every journey stage.
- **Conversion:** Planning-stage transition.
- **Mobile:** Journey steps in a menu sheet.
- **Depth:** Three to four levels.
- **Advantages:** Explains customization and lifecycle.
- **Risks:** Requires visitors to identify their stage; mixes prospects and customers; weakens pillar findability.
- **Cognitive load:** Medium.
- **Conversion:** Gradual, potentially too slow.
- **SEO/content:** Weaker canonical topic ownership.
- **Migration:** High.
- **Protected routes:** More likely to blur public and protected steps.
- **HOME/UX/VIS fit:** Moderate.

## 10. Selected architecture

**Model A — Pillar-First Solution Architecture is selected.**

It provides the clearest stable spine:

```text
Homepage
→ Solutions overview
→ Six pillars
→ Approved solution details
→ Assessment or education
```

It is stronger because it:

- preserves existing canonical category and solution route patterns;
- makes all six pillars findable without presenting hardware;
- keeps top-level navigation concise;
- supports direct entry, search, education, and expansion;
- separates support from prospect conversion;
- preserves protected funnels behind intentional handoffs;
- avoids building a large new outcome taxonomy before content authority exists.

Retained supporting features:

- outcome-led labels and cross-pillar landing pages from Model B, only when distinct and approved;
- clear process/lifecycle explanation from Model C, without using journey stages as the main site hierarchy.

## 11. Approved future public hierarchy

```text
Home /
├── Solutions /solutions
│   ├── Home Security /categories/home-security
│   ├── Aging in Place /categories/aging-in-place
│   ├── Home Safety /categories/home-safety
│   ├── Home Automation /categories/home-automation
│   ├── Home Lighting /categories/home-lighting
│   ├── Property Management /categories/property-management [deferred]
│   ├── Solution details /solutions/<solution-slug>
│   └── Outcomes /outcomes/<outcome-slug> [provisional]
├── How It Works /how-it-works [recommended]
├── Why W. N. Y. /why-wny [provisional label/path]
│   ├── Ownership, Privacy, Local Control [future owner decision]
│   ├── Unified Property Control /dashboard or governed successor
│   ├── Our Work /our-work
│   ├── About /about
│   └── Service Area /service-area [recommended]
├── Learn /learn [recommended]
│   ├── Guides and articles /learn/<slug> [recommended]
│   └── FAQ /faq [existing]
├── Support /support
│   └── Support resources /support/<slug> [future]
├── Assessment /discovery?vertical=home-security [current protected entry]
├── Contact /contact
├── Campaign pages /qrlanding and /lp/*
├── Legal /privacy and /terms
└── Protected funnels and continuation routes [outside discovery navigation]
```

COPYAUTH001 controls final labels. Route implementation/migration tasks control final route activation.

## 12. Page-family authority

| Family | Purpose/audience | Parent / entry → exit | Conversion/support role | Nav placement | Index posture | Runtime/state | Content owner / dependency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Homepage | Immediate whole-business understanding / all | Root → Solutions, process, assessment, support | Conversion and orientation | Brand/Home | Indexable | Future-facing, current route | HOMEAUTH001; HOMEIMPL001 |
| Solutions overview | Connect six pillars / prospects | Home/nav → pillar or assessment | Primary discovery | Primary Solutions destination | Indexable after implementation | Future route | NAVIA/COPYAUTH/SITEIMPL |
| Six pillar pages | Explain one solution area | Solutions/deep link → solution, Learn, assessment | Discovery | Solutions menu | Indexable | Five current, one deferred | SITEARCH005, category owners |
| Solution details | Explain distinct approved outcome | Pillar/search/article → assessment/related | High-intent conversion | Contextual, not top-level | Indexable when approved | Four current, expandable | Solution owners, COPYAUTH |
| Outcome/use-case | Cross-pillar real problem | Search/campaign/pillar → solution/assessment | Specific-intent bridge | Contextual only | Case-by-case | Proposed | Dedicated future content task |
| How It Works | Explain assessment through handoff | Nav/home → assessment | Confidence | Primary nav | Indexable | Proposed public | COPYAUTH; process owners |
| Why W. N. Y. | Differentiate company | Nav/home → process/assessment | Trust | Primary nav | Indexable | Proposed | Business Bible/COPYAUTH |
| Ownership/privacy/local control | Explain doctrine | Why/Learn → assessment | Trust/education | Secondary/footer | Indexable if created | Proposed | Business Bible and privacy owners |
| Unified dashboard | Show coherent control | Home/Solutions/Why → assessment | Proof | Secondary/contextual | Review before index | Existing demo evidence | Dashboard owner task |
| Learning center | Organize education | Nav/search → guide/pillar | Nurture | Primary Learn | Indexable | Proposed | Content architecture task |
| Articles/guides | Answer one learning intent | Search/Learn → pillar/solution | Nurture | Not primary individually | Indexable when approved | Proposed | Content tasks |
| About | Local company context | Why/footer → contact | Trust | Secondary/footer | Indexable | Existing | COPYAUTH |
| Contact | Questions and estimate entry | Nav/footer/context → protected intake | Conversion/support triage | Secondary/footer | Indexable | Existing/protected behavior | Funnel owner |
| Assessment entry | Begin qualification | CTA/context → existing funnel | Primary conversion | CTA, not menu family | Noindex as governed | Protected active | Funnel/runtime owners |
| Existing-customer support | Direct help | Nav/home/footer/deep link → request/resource | Primary support | Primary Support | Indexable top page | Existing | Support/runtime owner |
| FAQ | Reduce uncertainty | Learn/context → solution/assessment | Education | Learn/footer | Indexable when governed | Existing | COPYAUTH |
| Service area | Explain local coverage | Why/footer/search → contact | Trust | Footer/secondary | Indexable if approved | Proposed | COPYAUTH/SEO |
| Commercial/specialty | Qualify authorized property types | Search/solution → contact | Qualified conversion | Contextual | Case-by-case | Deferred | Business/copy/claims owners |
| Campaign/landing | Preserve focused source intent | QR/social/ad → funnel | Campaign conversion | Outside primary nav | Campaign-governed | Existing | QR/campaign owners |
| Legal/policy | Required policies | Footer → exit/return | Trust/compliance | Footer | Accessible | Existing | Legal/privacy owners |
| Protected funnel | Execute assessment/quote/agreement/payment/schedule | CTA/continuation → next protected step | Transaction | Outside public discovery | Noindex | Protected active | Runtime/funnel owners |
| Success/cancel/continuation | Confirm or resume state | Protected flow → next/recovery | Recovery | Never primary/footer | Noindex/nofollow as governed | Protected active | Runtime owners |
| Legacy compatibility | Preserve old links | External/bookmark → canonical/current | Compatibility | Not primary | Canonical/noindex per SEO | Active legacy | Route migration task |

Pages are created only when their distinct purpose, owner, content depth, claims safety, and maintenance plan are approved.

## 13. Six-pillar architecture

| Pillar / route family | Visitor question | Page relationship and required modules | Primary next step | Related links / expansion |
| --- | --- | --- | --- | --- |
| Home Security `/categories/home-security` | How can I improve awareness, access, and protection? | Solutions parent; problems, outcomes, approved examples, dashboard evidence, customization, education | Assessment | Home Safety, Lighting, Property Management |
| Aging in Place `/categories/aging-in-place` | How can technology support independence respectfully? | Non-medical outcomes, consent/privacy, approved examples, dashboard evidence, education | Assessment | Home Safety, Automation, Lighting |
| Home Safety `/categories/home-safety` | How can I become aware of water, temperature, and household risks? | Practical awareness outcomes, examples, related property operations | Assessment | Property Management, Security, Automation |
| Home Automation `/categories/home-automation` | How can routines and systems work together? | Modes, scenes, coordinated outcomes, dashboard evidence, expansion | Assessment | All pillars where supported |
| Home Lighting `/categories/home-lighting` | How can lighting improve visibility, routines, and property use? | Interior/exterior outcomes, scenes, approved examples | Assessment | Security, Automation, Aging in Place |
| Property Management `/categories/property-management` | How can I oversee recurring property needs and remote/seasonal spaces? | Deferred page using existing category framework; remote/seasonal/outbuilding outcomes | Assessment | Security, Safety, Automation, Lighting |

Every pillar page should include overview, common problems, desired outcomes, approved solution examples, credible dashboard evidence, customization explanation, related solutions, education, and an assessment path. It must not become a product inventory.

## 14. Solution-detail page rules

An individual solution page is justified only when:

- a distinct customer problem and outcome exist;
- customer demand, search intent, educational need, or sales relevance can be supported;
- sufficient claims-safe content exists;
- it belongs to one primary pillar and may name secondary pillars;
- it does not duplicate a pillar, outcome, article, or another solution page;
- it can remain solution-led rather than device-led;
- the company can currently design, install, integrate, and support the represented capability;
- maintenance ownership is assigned.

Parent-child rule:

```text
Solutions overview
→ Primary pillar
→ Solution detail
→ Related outcome, education, or assessment
```

Every solution page must expose its parent pillar, related solutions, and one primary next action. A product name alone never justifies a page.

## 15. Outcome and use-case rules

Outcome pages are optional cross-pillar bridges, not a parallel catalog.

Use a standalone outcome page only when the need:

- crosses multiple pillars;
- has distinct search/campaign intent;
- cannot be answered cleanly inside one pillar or solution;
- supports enough unique content;
- maps clearly back to controlling pillars and solutions.

Otherwise place the outcome as a pillar section, solution section, article, campaign page, or future test.

Outcome pages must not duplicate pillar introductions, invent final labels, or become hardware landing pages.

## 16. Desktop primary navigation

The recommended future desktop model is:

| Provisional item | Purpose | Behavior/children | Priority and role | Accessibility/current state |
| --- | --- | --- | --- | --- |
| Brand/Home | Reset and identity | Links to `/` | Persistent | Accessible name; exact active state at `/` |
| Solutions | Main discovery | Opens structured menu and links to `/solutions` | Primary | Button/link semantics; keyboard open; current pillar/solution state |
| How It Works | Process confidence | Direct page | Primary | Normal link; active route |
| Why W. N. Y. | Trust/difference | Direct page; contextual child links on page | Primary | Normal link |
| Learn | Education | Direct learning center; limited child previews | Primary | Menu only if content volume warrants |
| Support | Existing customers | Direct `/support` | Persistent, visually distinct but not competing with CTA | Normal link; always visible |
| Property Assessment | Conversion | Current approved assessment entry | Primary CTA | Clear destination and protected attribution |

About, Contact, Service Area, legal, detailed education, and utility links belong in secondary/footer structures unless a later content decision shows a stronger need.

Final labels belong to COPYAUTH001.

## 17. Solutions menu

Select a **structured hybrid menu**:

- an obvious link to the Solutions overview;
- six pillar links in exact canonical order;
- short plain-language descriptions only after COPYAUTH001;
- one restrained integrated-system/dashboard link where approved;
- one assessment action;
- no device lists, package tiers, prices, or excessive featured content.

Desktop behavior:

- opens through click/keyboard, not hover dependency;
- may also support hover as enhancement;
- focus enters the menu in logical order;
- Escape closes and returns focus;
- outside interaction closes without trapping users;
- route selection closes the menu;
- active pillar/solution is indicated;
- icons are optional and require one coherent family;
- imagery is generally omitted to preserve scan speed.

Mobile uses a nested disclosure inside the main navigation sheet rather than a desktop mega menu.

## 18. Prospect conversion paths

```text
Homepage → Solutions → Pillar → Solution → Assessment
Homepage → How It Works → Assessment
Search/deep link → Solution/Outcome → Assessment
Learn → Article → Pillar/Solution → Assessment
Campaign/QR → Campaign-owned intake → Protected continuation
Returning lead → Existing continuation route
Not ready → Learn/FAQ → contextual return
```

Rules:

- introduce assessment after the visitor can understand relevance and expectations;
- use one primary contextual action and limited educational/support alternatives;
- preserve `vertical`, source, QR, campaign, referral, request, and existing attribution context;
- never rename or bypass current discovery, planner, quote, agreement, payment, schedule, success, cancel, or resume routes here;
- provide recovery to contact/support or the relevant parent when a visitor abandons.

## 19. Existing-customer path

Existing customers must reach Support from:

- desktop primary navigation;
- mobile top-level navigation;
- HOME-009;
- footer;
- deep-linked help resources.

Support may later organize setup/onboarding, dashboard/app help, service requests, additions/expansion, and governed equipment/warranty information. It must not invent a portal, imply emergency service, expose customer data, or mix ordinary support with public-safety instructions.

## 20. Education architecture

Recommended hierarchy:

```text
Learn
├── Getting started
├── Ownership, privacy, and local control
├── Pillar-linked guides
├── Solution/use-case explainers
├── Seasonal property guidance
├── FAQ
└── Approved project examples
```

Each educational item should:

- own one canonical learning intent;
- identify related pillar/solution;
- offer a contextual next step;
- avoid becoming a dead end;
- separate beginner outcomes from optional technical depth;
- avoid a content calendar or keyword-farm posture.

Technical platform/protocol education belongs below customer outcomes and must not become top-level navigation.

## 21. Deep-link orientation

Every indexable interior page should make clear:

1. current page title and purpose;
2. owning pillar or section;
3. W. N. Y. Home Security identity;
4. parent path and homepage;
5. limited related content;
6. appropriate assessment or support action.

Use breadcrumb, section label, parent link, related module, contextual action, header, and footer as appropriate. Do not depend on browser Back.

## 22. Breadcrumb rules

Breadcrumbs are:

- required on solution details, outcome pages, articles/guides, and support articles;
- recommended on pillar pages when the parent relationship is not already obvious;
- generally omitted from homepage and focused campaign/protected funnel pages;
- optional/quiet on top-level marketing pages.

Model:

```text
Home → Solutions → Pillar → Current page
Home → Learn → Current article
Home → Support → Current help page
```

Maximum useful depth is four visible levels. The current page is plain text or `aria-current="page"`. Mobile may collapse middle ancestors only when accessible context remains. Future structured data is an SEO implementation decision.

## 23. Contextual navigation rules

Every public content page has:

- one primary next step;
- no more than three high-value secondary destinations by default;
- parent return;
- related items based on documented pillar/solution/outcome relationships.

Prevent random link walls, circular loops, identical repeated cards, unrelated cross-selling, universal “everything links everywhere,” and multiple competing primary CTAs.

## 24. Footer architecture

Recommended future groups:

1. **Solutions:** overview plus six pillars in exact order.
2. **How/Why:** process, ownership/privacy/local control, unified control, Our Work.
3. **Learn:** learning center, guides, FAQ.
4. **Support:** existing-customer support and Contact.
5. **Company:** About, Service Area, local identity.
6. **Legal:** Privacy and Terms.
7. **Conversion:** one assessment action.

Footer must preserve accurate local/contact information, accessibility, mobile scanability, and approved theme control if later authorized. It must not duplicate every route, expose protected funnels, invent social links, or carry stale contact/legal information.

Current production footer remains unchanged.

## 25. Mobile navigation

Select a **full-height navigation sheet launched from the top header**, not permanent bottom navigation.

Requirements:

- clearly labeled Menu trigger with `aria-expanded` and controlled-region relationship;
- focus moves to the sheet, remains contained while modal, and returns to the trigger;
- Escape, Close, route selection, and safe outside interaction close it;
- Solutions is a keyboard/touch disclosure containing overview plus six pillars;
- How It Works, Why W. N. Y., Learn, Support, and assessment remain visible;
- Support and assessment are not hidden inside deep submenus;
- current page/section is announced and visibly indicated;
- no hover dependency;
- minimum governed touch targets and logical tab order;
- background scroll is controlled while open;
- route changes close/reset the menu;
- safe-area insets, zoom, orientation changes, and text resizing are supported;
- reduced motion replaces spatial animation with immediate or short state change;
- no persistent control blocks content or competes with critical funnel controls.

## 26. Recommended route taxonomy

| Family | Recommended pattern | Status |
| --- | --- | --- |
| Homepage | `/` | Current canonical |
| Solutions overview | `/solutions` | Recommended; unimplemented |
| Pillars | `/categories/<pillar-slug>` | Current owner pattern; sixth deferred |
| Solution details | `/solutions/<solution-slug>` | Current canonical pattern |
| Outcomes | `/outcomes/<outcome-slug>` | Provisional; content task required |
| Process | `/how-it-works` | Recommended; conflict check required at implementation |
| Why W. N. Y. | `/why-wny` | Provisional; COPYAUTH001 |
| Learn | `/learn` | Recommended; content architecture required |
| Articles/guides | `/learn/<slug>` | Recommended |
| Support | `/support` | Current |
| Support articles | `/support/<slug>` | Future |
| Assessment | `/discovery?vertical=home-security` | Current protected entry; preserve |
| Contact | `/contact` | Current |
| Service area | `/service-area` | Recommended |
| Legal | `/privacy`, `/terms` | Current |
| Campaign | `/qrlanding`, `/lp/<campaign>` | Current campaign-owned patterns |
| Protected funnel | Current route set | Preserve; do not normalize in public IA task |

Labels and unimplemented route strings require COPYAUTH001, conflict review, route implementation, SEO, sitemap, analytics, and migration validation before activation.

## 27. Production and legacy compatibility principles

- Absence from future navigation never authorizes deletion.
- Protected routes remain reachable and outside public discovery menus.
- Current public routes continue until a bounded migration implements a tested disposition.
- Canonical routes should be promoted before legacy redirects.
- Query strings and attribution context must survive any later migration.
- QR, printed materials, campaigns, backlinks, bookmarks, and shared links require evidence review.
- Unknown routes are investigated, never silently removed.
- Package terminology in route strings may remain as runtime compatibility until PACKAGESOLMIG001.

## 28. Current route inventory appendix

The router contained 123 explicit `path` declarations when inspected at base `ce46b7802bc24fe8b0ec5c167e8649334082ad52`. Nested paths are shown with their effective `/newsite/*` family where helpful.

| Current route(s) | Current purpose/owner | Classification and protection | Future family/disposition | Dependency/open matter |
| --- | --- | --- | --- | --- |
| `/` | WNYHS homepage | Active public discovery; indexable | Preserve canonical homepage | HOMEIMPL001 |
| `/about`, `/our-work`, `/contact`, `/support`, `/search`, `/faq`, `/comparison`, `/funding`, `/reliability` | Marketing, trust, support, search | Active public/review mix | Map into Why/Learn/Support; preserve until implementation | COPYAUTH/SEO/content review |
| `/privacy`, `/terms` | Legal | Active public | Preserve; footer | Legal owner |
| `/packages`, `/packages/:id`, `/home-security/whats-included` | Package/public sales context | Active transitional; noindex/review in SEO policy | Preserve outside future primary nav; migrate later | PACKAGESOLMIG001 |
| `/fit-check`, `/estimate` | Redirect aliases to discovery/contact | Active conversion compatibility | Preserve pending migration evidence | Funnel/route task |
| `/discovery`, `/recommend`, `/quote` | Assessment/recommendation/quote entry | Protected active conversion | Preserve unchanged | Funnel/runtime |
| `/quoteReview`, `/quotePrint`, `/agreement`, `/agreementReview`, `/agreementPrint`, `/esign` | Quote/agreement review and documents | Protected transaction/token family | Preserve outside discovery nav | Funnel/runtime |
| `/payment`, `/payment-processing`, `/home-security/pay-deposit`, `/home-security/payment/success`, `/home-security/payment/canceled`, `/home-security/payment/cancel`, `/schedule` | Deposit/payment/scheduling | Protected transaction | Preserve unchanged | Stripe/scheduling |
| `/resume`, `/resume-verify`, `/verify` | Continuation/verification | Protected continuation/token | Preserve unchanged | Runtime |
| `/uat`, `/launchUat`, `/sicar`, `/certificate` | UAT/certificate/internal verification | Internal or tokenized | Preserve; investigate exposure | System-route review |
| `/home-security`, `/home-automation`, `/aging-in-place`, `/home-safety`, `/home-lighting` | Flat legacy category/home routes | Active legacy; canonical/noindex rules vary | Staged alias/redirect later | SITEARCH004/route migration |
| `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, `/categories/aging-in-place` | Canonical pillar/category pages | Active public discovery; indexable | Preserve | SITEARCH005 |
| `/categories/property-management` | Not currently declared | Deferred sixth canonical route | Create only under bounded implementation | Category/content/SEO |
| `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, `/solutions/vacation-homes` | Canonical solution details | Active public discovery; indexable | Preserve and expand by rule | Solution/content owners |
| `/home-security/legacy`, `/home-security/legacy-premium` | Historical public variants | Legacy/review | Preserve but exclude from future nav; investigate | Route/SEO review |
| `/home-security/dashboard` | Customer dashboard demonstration | Public review/demo; noindex | Governed unified-control evidence | Dashboard owner |
| `/home-security/planner` | Precision Planner | Protected public tool | Preserve unchanged outside discovery hierarchy except controlled handoff | Planner owner |
| `/home-security/packages`, `/home-security/add-ons`, `/home-security/how-it-works` | Redirect compatibility | Transitional route aliases | Preserve now; later reconcile | PACKAGESOLMIG/route task |
| `/home-automation/packages`, `/home-automation/add-ons`, `/home-automation/how-it-works` | Redirect compatibility | Transitional aliases | Preserve now; later reconcile | PACKAGESOLMIG/route task |
| `/elder-care-tech`, `/elder-care-tech/packages`, `/elder-care-tech/add-ons`, `/elder-care-tech/how-it-works` | Older vertical/category family | Legacy/cross-vertical | Exclude from future nav; investigate before disposition | Route/content authority |
| `/health-homes`, `/health-homes/outcomes`, `/health-homes/funding`, `/health-homes/packages`, `/health-homes/pilot`, `/health-homes/operations`, `/health-homes/intake`, `/health-homes/packet` | Health Homes program family | Cross-program public/internal mix | Outside replacement primary IA; preserve and investigate | Program owner |
| `/lp/senior`, `/lp/family`, `/lp/agency` | Campaign landing pages | Campaign/attribution | Preserve outside primary nav | Campaign/analytics |
| `/qrlanding`, `/qrlanding.htm` | QR campaign and alias | Campaign/attribution; canonical alias | Preserve unchanged and outside primary nav | QR runtime |
| `/halo-splash`, `/halo`, `/halo/setup`, `/halo/support`, `/halo/privacy`, `/halo/terms`, `/halo/checkout`, `/halo-pushbutton`, `/halo-package` | Halo product/vertical family | Cross-product public/transaction mix | Outside replacement IA; preserve and investigate | Halo owner |
| `/vendors`, `/vendors/standards`, `/vendors/evaluation-toolkit`, `/vendors/questionnaire`, `/vendors/apply` | Vendor program | Public/internal application mix | Outside consumer IA; preserve | Vendor owner |
| `/never-miss-another-estimate`, `/demo`, `/pricing`, `/5-day-demo`, `/partners` | Other product/demo/partner artifacts | Legacy or unrelated public-review | Exclude from replacement nav; investigate | System-route/content review |
| `/newsite` | Prototype root | Prototype/noindex | Historical/prototype only; no production authority | Prototype review |
| `/newsite/demos`, `/newsite/demos/ha-gold-dashboard` | Prototype demo family | Prototype/noindex | Preserve; reconcile under dashboard/prototype task | Dashboard/prototype owner |
| `/newsite/home-security/packages`, `/newsite/home-security/packages/:tier`, `/newsite/home-security/fit-check`, `/newsite/home-security/planner` | Prototype package/funnel | Prototype plus protected behavior | Preserve; never use as migration authority without task | Funnel/prototype |
| `/newsite/quote`, `/newsite/quote/review`, `/newsite/quote/print`, `/newsite/agreement/review`, `/newsite/agreement/print` | Prototype transaction family | Protected prototype | Preserve unchanged | Funnel/runtime |
| `/newsite/home-security/pay-deposit`, `/newsite/home-security/payment/success`, `/newsite/home-security/payment/cancel`, `/newsite/schedule` | Prototype payment/scheduling | Protected prototype | Preserve unchanged | Stripe/scheduling |
| `/newsite/contact`, `/newsite/callback`, `/newsite/on-site-quote` | Prototype lead paths | Protected prototype/lead | Preserve unchanged | Funnel/runtime |
| `/operator`, `/operator/property-model`, `/operator/property-model/quote-preview`, `/operator/property-model/installer-packet` | Operator tools | Internal/noindex/nofollow | Never public navigation; preserve | System/operator owner |

The inventory is complete for explicit React router path declarations at the inspected base. Static HTML, API endpoints, assets, and infrastructure rules are separate inventories.

## 29. Protected route set

At minimum, preserve unchanged:

- discovery/assessment and recommendation routes;
- planner routes;
- quote, quote review, and quote print;
- agreement, agreement review, agreement print, and e-sign;
- payment, deposit, processing, success, cancel/canceled;
- scheduling;
- resume and verification;
- contact/support submission behavior;
- QR and campaign routes with attribution;
- `/newsite/*` protected funnel counterparts;
- operator/internal routes;
- API passthrough and SPA fallback rules.

Protected routes do not belong in primary public discovery navigation merely because they are reachable.

## 30. Package-to-solution transition

Future navigation must say Solutions rather than lead with Packages, but NAVIA001 changes no route string.

Package-related references are classified as:

- **public terminology requiring migration:** top-level labels and promotional package-first discovery;
- **protected runtime dependency:** package IDs and pages used by quote/planner/payment flows;
- **analytics/CRM/Stripe/planner dependency:** any identifier or route referenced by those systems;
- **historical reference:** prior package governance and legacy pages;
- **technical use:** dependency/package-manager language unrelated to offers.

PACKAGESOLMIG001 must inventory dependencies and approve every migration. `/packages` or related routes may not be replaced solely because their names conflict with future public language.

## 31. Search and content discovery

Future architecture should enforce:

- one canonical intent per page;
- pillar topic clusters with owned solution and learning relationships;
- descriptive semantic routes;
- no duplicate pillar/solution/outcome/article pages;
- article-to-solution and article-to-assessment paths;
- local relevance without keyword stuffing;
- meaningful headings and sufficient content depth;
- structured data only through later SEO implementation.

No search-volume claim or keyword list is created here.

## 32. Accessibility authority

Future navigation implementation must include:

- skip link and semantic `header`, `nav`, `main`, and `footer`;
- keyboard-complete menus/disclosures;
- visible focus;
- correctly labeled menu buttons and state;
- focus containment and return for modal sheets;
- Escape and close behavior;
- `aria-current` for current page;
- current-section indication where relevant;
- accessible breadcrumb list/navigation semantics;
- logical heading and reading order;
- touch targets under token/accessibility authority;
- screen-reader labels that communicate destination, not appearance;
- 200% zoom/text resize resilience;
- no hover-only access;
- reduced-motion support;
- error recovery and focus management after route/dialog changes.

## 33. Analytics measurement recommendations

Future analytics work may measure:

- top-level and Solutions-menu engagement;
- pillar entry and pillar-to-solution movement;
- article-to-solution movement;
- assessment CTA engagement and form starts;
- support-path usage;
- mobile-menu open, selection, abandonment, and completion;
- breadcrumb and contextual-navigation use;
- deep-link progression and dead-end exits;
- route-level abandonment;
- QR, campaign, referral, and source attribution continuity.

No event name, tracking code, consent behavior, attribution field, or profiling method changes here. Existing names and attribution remain until a bounded analytics task.

## 34. Navigation rejection criteria

Reject an architecture that:

- leads with packages, hardware brands, protocols, or store-like categories;
- hides or reorders the six pillars;
- hides support or assessment;
- creates too many top-level items or deep unnecessary trees;
- mixes prospects and customers into one unclear path;
- requires industry terminology;
- creates duplicate pages or dead-end education;
- depends on hover or browser Back;
- removes deep-link orientation;
- uses vague labels or makes every page a sales form;
- overwhelms mobile or blocks content with persistent controls;
- breaks funnels, attribution, payment, scheduling, routes, redirects, or indexing;
- makes pillars look unrelated;
- implies unsupported monitoring, response, or capability;
- prioritizes novelty over clarity.

## 35. Architecture maps

### 35.1 Full public-site hierarchy

```text
Home
├─ Solutions → Pillars → Solutions/Outcomes
├─ How It Works
├─ Why W. N. Y. → Our Work/About/Service Area/Ownership
├─ Learn → Guides/FAQ
├─ Support
├─ Assessment/Contact
└─ Footer → Solutions/Company/Learn/Support/Legal
```

### 35.2 Primary navigation

```text
Brand/Home | Solutions | How It Works | Why W. N. Y. | Learn | Support | [Assessment]
```

### 35.3 Solutions and pillars

```text
Solutions
├─ Home Security
├─ Aging in Place
├─ Home Safety
├─ Home Automation
├─ Home Lighting
└─ Property Management
   └─ Approved solution details → related education/outcomes → assessment
```

### 35.4 Prospect journey

```text
Entry → Understand → Identify pillar/problem → Evaluate solution/process → Assessment
                                                         └→ Learn → return
```

### 35.5 Existing-customer journey

```text
Header/Home/Footer/Deep link → Support → Resource or request → governed follow-up
```

### 35.6 Education-to-solution

```text
Search/Learn → Article/Guide → Owning pillar → Related solution → Assessment
```

### 35.7 Mobile hierarchy

```text
Header [Brand] [Menu]
└─ Full-height sheet
   ├─ Solutions disclosure → overview + six pillars
   ├─ How It Works
   ├─ Why W. N. Y.
   ├─ Learn
   ├─ Support
   └─ Assessment
```

### 35.8 Footer hierarchy

```text
Solutions | How/Why | Learn | Support | Company | Legal | Assessment
```

### 35.9 Protected funnel relationship

```text
Public discovery → approved assessment entry
→ protected planner/quote/agreement/payment/schedule/continuation
→ confirmation or recovery

Public navigation does not expose or restructure protected internals.
```

### 35.10 Legacy migration categories

```text
Current route
├─ Preserve unchanged
├─ Preserve outside primary nav
├─ Compatibility alias
├─ Migrate later
├─ Redirect later after evidence
├─ Deprecate later after approval
└─ Investigate before decision
```

## 36. Approved decisions

- Pillar-First Solution Architecture is selected.
- `/` remains canonical homepage.
- `/categories/<pillar-slug>` remains the pillar route pattern.
- `/solutions/<solution-slug>` remains the solution-detail pattern.
- a future `/solutions` overview is recommended.
- future desktop navigation is concise and Solutions-led.
- future mobile navigation is a full-height top-header sheet.
- Support remains top-level and distinct.
- Assessment is the primary action, not a general content category.
- protected funnels remain outside the discovery hierarchy.
- breadcrumbs and contextual navigation provide deep-link orientation.
- education must return visitors to pillars, solutions, or an appropriate next action.

## 37. Deferred and operator-review matters

Deferred:

- final labels and CTA wording;
- exact implementation of `/solutions`, `/how-it-works`, `/why-wny`, `/learn`, `/outcomes/*`, and `/service-area`;
- production header/footer standard amendment;
- Property Management route/page/content;
- outcome-page approvals;
- dashboard/demo route ownership;
- search, sitemap, canonical, redirects, breadcrumbs, menus, footer, and analytics implementation;
- legacy and cross-vertical route disposition;
- package terminology migration.

Operator review should confirm the selected model, future top-level grouping, full-height mobile sheet, and recommendation to create a Solutions overview before any implementation task is issued.

## 38. Future bounded-task sequence

Recommended dependency order:

1. COPYAUTH001 — final sales/navigation/conversion language.
2. PACKAGESOLMIG001 — terminology and protected funnel compatibility.
3. HOMEHERO001 — hero visual approval, independent of IA implementation.
4. Future route migration plan — exact aliases/redirects/canonicals after evidence.
5. Future navigation implementation task or SITEIMPL001 child — header, menu, mobile, breadcrumbs, footer.
6. HOMEIMPL001 — governed homepage implementation.
7. SITEIMPL001 — broader replacement-site implementation.
8. Education content architecture/content tasks.
9. Usability, accessibility, SEO, analytics, and conversion validation.

No listed task is activated here.

## 39. Protected systems

NAVIA001 changes no source, route, redirect, navigation component, header, footer, breadcrumb, sitemap, robots policy, index posture, public copy, image, asset, funnel, planner, quote, agreement, payment, Stripe, scheduling, CRM, HubSpot, form, analytics event, attribution field, QR behavior, Cloudflare configuration, environment, secret, customer data, Google Drive, merge, or deployment.

## 40. Final authority statement

The future replacement site shall use a Pillar-First Solution Architecture centered on a Solutions overview, six ordered pillars, governed solution details, direct Support, contextual education, and an assessment handoff into protected existing funnels.

This document establishes future planning authority only. Production navigation, routes, and protected systems remain unchanged until separately authorized implementation and migration tasks pass their owner and validation gates.
