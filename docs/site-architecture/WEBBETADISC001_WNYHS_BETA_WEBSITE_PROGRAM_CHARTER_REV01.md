# WEBBETADISC001 WNYHS Beta Website Program Charter REV01

## 1. Document control

- **Status:** ACTIVE ON MERGE
- **Task ID:** WEBBETADISC001
- **Owner:** Site Architecture
- **Primary workstream:** Project Governance
- **Related workstreams:** Site Architecture; Visual System; Public Content System; SEO; Search; Category System; Solution System; Conversion; Analytics; CRM; Scheduling; Infrastructure / Deployment; ChatGPT Sites
- **Document type:** Discovery and architecture program charter
- **Implementation authority:** None
- **Customer-facing authority:** None
- **Runtime impact:** None
- **Operator authorization date:** 2026-07-26
- **Revision:** REV01

## 2. Purpose

This charter establishes the controlled discovery program for a replacement customer- and lead-facing website for `wnyhomesecurity.com`.

The program exists to turn WNY Home Security's approved doctrine, current repository governance, public information architecture, design standards, content systems, and protected customer flows into a coherent next-generation sales and customer experience without placing the current production website at risk.

This charter does not implement the beta, change production, deploy a preview, or authorize a later phase.

## 3. Program objective

Design and later build the strongest possible public WNY Home Security experience for:

- helping ordinary homeowners and business owners understand the problems WNY Home Security can solve;
- demonstrating the breadth of the company's security, automation, aging-in-place, property-management, safety, and lighting capabilities;
- making WNY Home Security's customer ownership, privacy, local-first, solution-first, expandability, honesty, and local accountability doctrine obvious;
- guiding different visitor types toward the most appropriate next action;
- converting qualified traffic into measurable sales opportunities;
- helping existing customers obtain support and expand their systems;
- supporting durable publishing, search authority, attribution, and continuous improvement; and
- preserving architectural runway for later customer, owner, employee, and KAOS modules without building those modules into the public beta.

## 4. Authority

This program is governed by:

1. `docs/system/project.md`
2. `docs/system/guardrails.md`
3. `docs/system/agent.md`
4. `docs/system/plan.md`
5. `docs/system/step-current.md`
6. `docs/system/WNYHS_AUTHORITY_AND_SYSTEMS_OF_RECORD_STANDARD_REV01.md`
7. `docs/system/master-task-register.md`
8. `docs/codex/work-orders/WEBBETADISC001_WORK_ORDER_REV01.md`
9. current dedicated owner standards and runtime contracts

Important current owners include:

- `docs/business/WNYHS_BUSINESS_BIBLE_REV01.md`
- `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`
- `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`
- `docs/site-architecture/SITEARCH003_WNYHS_PUBLIC_ARCHITECTURE_IMPLEMENTATION_PLAN_REV01.md`
- `docs/site-architecture/SITEARCH005_WNYHS_SIX_CATEGORY_RECONCILIATION_DECISION_REV01.md`
- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- `docs/seo/SEO004_WNYHS_SEO_STATUS_AND_CONTINUATION_HANDOFF_REV01.md`
- applicable category, solution, content, claims, funnel, runtime, analytics, CRM, payment, scheduling, and deployment owners

`GOVFOUND002` is `SUPERSEDED — PERMANENTLY RETIRED — NON-EXECUTABLE`. It provides no authority to this program.

## 5. Approved program principles

The following principles are approved:

1. The public customer and lead experience is the immediate priority.
2. The website sells understandable outcomes and confidence, not device lists or technical jargon.
3. Exceptional visual quality is required, but never at the expense of accessibility, speed, clarity, mobile usability, conversion, or search visibility.
4. Dark and light modes are foundational design-system modes.
5. Temporary themes are controlled presentation overlays, not alternate content or runtime systems.
6. The six canonical public categories remain, in order:
   1. Home Security
   2. Aging in Place
   3. Home Safety
   4. Home Automation
   5. Home Lighting
   6. Property Management
7. The learning library is problem-led, structured, interlinked, and locally relevant; it is not a chronological blog.
8. Direct-entry journeys must work for search, ads, QR codes, social content, email, referrals, and returning customers.
9. Attribution is designed from the beginning.
10. HubSpot remains the primary CRM and lifecycle system where its current or future dedicated owner assigns it.
11. Scheduling must preserve actual availability and operator-confirmed authority; this task does not change scheduling.
12. Solution publishing must be repeatable, governed, relationship-aware, and claims-safe.
13. Public visitors, authenticated customers, and owners/employees require separate experience boundaries.
14. Repeated business activity must use an approved reusable process or trigger evaluation for formalization.
15. Repository documents remain the durable authority for approved standards, schemas, processes, and implementation contracts.

## 6. Intended audiences

### 6.1 Immediate public audiences

- first-time visitors;
- researching homeowners;
- business and commercial prospects;
- senior-safety prospects;
- caregivers and adult children;
- property managers;
- existing customers seeking help;
- existing customers considering expansions;
- referral partners; and
- traffic arriving from search, ads, social, QR, signage, events, email, video, and direct referral.

### 6.2 Future separated audiences

- authenticated customers;
- WNY Home Security owners;
- employees and installers;
- approved partners and contractors.

Future audiences influence integration boundaries only. They do not authorize portals, internal modules, authentication, or KAOS implementation in this task.

## 7. In scope

- discovery program governance;
- approved requirement capture;
- staged operator interview design;
- public experience and audience framing;
- beta build-location analysis;
- production-isolation architecture;
- public-versus-authenticated-versus-internal boundaries;
- future program phases and task candidates;
- relationship to existing repository owners;
- unresolved-decision preservation;
- success and acceptance planning; and
- minimum migration and rollback planning.

## 8. Out of scope

- beta or production source code;
- routes, redirects, navigation, components, CSS, assets, or customer-facing copy;
- a beta application scaffold;
- Sites creation, versioning, or deployment;
- Cloudflare, DNS, environment, preview, or production configuration;
- HubSpot, Google Workspace, Calendar, Stripe, payment, scheduling, QR, or analytics changes;
- authentication or customer portals;
- KAOS, owner, employee, installer, quoting, procurement, inventory, deployment, dashboard, support, warranty, or business-management modules;
- pricing, packages, claims, warranties, refunds, or legal decisions;
- live data migration;
- production cutover;
- merge or deployment.

## 9. Public experience outcomes

A visitor should be able to determine quickly:

- what WNY Home Security does;
- which practical problems it solves;
- which of the six pillars is relevant;
- whether the offering fits the visitor's property or situation;
- what affects price without exposing internal pricing or making unsupported promises;
- how the system can expand later;
- what WNY Home Security owns versus what the customer owns;
- how privacy and local-first operation influence the offering;
- what next action is appropriate; and
- how to obtain support or request an expansion.

The program must support several conversion journeys rather than force every audience through one universal funnel.

## 10. Visual and experience quality boundary

Future design work must pursue a premium, striking, memorable result that does not resemble a generic alarm-company template, reseller catalog, contractor brochure, or stock-photo-heavy site.

The design system must eventually support:

- complete dark and light modes;
- persistent preference with optional system detection and user override;
- accessible temporary themes;
- responsive behavior across mobile, tablet, laptop, and desktop;
- common modern browsers on Windows, macOS, Android, and iOS;
- strong imagery, diagrams, video, motion, and interactive explanation where each improves comprehension;
- semantic tokens and controlled components; and
- evidence-based performance budgets.

Specific visual language, motion behavior, type, imagery, layout, theme controls, and acceptance thresholds remain subject to the interview and later bounded design tasks.

## 11. Public content and learning boundary

The beta must be designed around structured content objects and relationships, including:

- categories;
- customer problems;
- solutions;
- audiences;
- property types;
- educational guides;
- comparisons;
- FAQs;
- videos;
- diagrams;
- local relevance;
- related content;
- related solutions;
- calls to action;
- announcements; and
- campaign landing contexts.

Future source intake may include transcripts, manufacturer pages, PDFs, field notes, images, pricing, technical requirements, and operator observations. Intake does not equal publication. A governed workflow must classify, review, approve, and route each item to its correct owner before publication.

## 12. Conversion, CRM, scheduling, and attribution boundary

The beta architecture must later support intentional handoffs for:

- lead and contact intake;
- companies and opportunities;
- customer interests;
- support and sales requests;
- campaign attribution;
- lifecycle stages and follow-up;
- customer expansion opportunities;
- appointment-type and availability selection;
- travel, duration, geography, employee, confirmation, reminder, cancellation, and rescheduling constraints;
- source, campaign, medium, landing page, asset, placement, first and return visits, form starts and completions, assessments, appointments, quotes, deposits, and expansion requests.

Current owners remain controlling. In particular:

- CRM writes remain API-mediated through the protected `/api/lead-signal` boundary;
- payment truth remains server-side and Stripe-verified;
- scheduling remains operator-confirmed;
- QR attribution and `requestId` contracts remain protected;
- production analytics identifiers and data must not be used for uncontrolled beta tests.

## 13. Future business-operations runway

The architecture may reserve boundaries for later:

- SOW and quote generation;
- parts purchasing and inventory;
- job-specific reservation;
- bench setup and preconfiguration;
- serial, firmware, and test records;
- installer packets, pick lists, assignments, and instructions;
- dashboard creation, implementation, and lifecycle management;
- device and notification changes;
- support and warranty management;
- vendor, purchase-history, and replacement-cost tracking;
- customer expansions and installed-system records; and
- KAOS owner and employee access.

These are integration boundaries only. They must not appear as public-navigation clutter or become implementation requirements for the beta foundation.

## 14. Production protection

Every future beta task must preserve:

- the current root production application;
- current public and canonical routes;
- `/qrlanding` and its alias behavior;
- current contact, discovery, support, and search routes;
- the Precision Planner;
- quote, agreement, print, resume, verification, payment, success/cancel, and scheduling routes;
- `/api/lead-signal`, request ID, HubSpot, and notification behavior;
- Stripe checkout, verification, and webhook authority;
- scheduling availability, request, confirmation, and calendar boundaries;
- current Cloudflare Pages project, custom domain, redirects, and production environment;
- current sitemap, robots, canonical, and index policies unless separately authorized;
- production analytics and attribution; and
- all secrets and customer data.

The beta must use an isolated application root, deployment target, environment namespace, analytics property or disabled analytics posture, test-only form behavior, no production payments, no production calendar writes, explicit noindex controls, visible beta identification or access control, manual deployment approval, and a documented rollback/removal path.

## 15. Program phases

Each phase requires a separate bounded task. This charter does not activate any phase.

| Phase | Purpose | Exit gate |
| --- | --- | --- |
| 1. Discovery | Complete the staged operator interview and reconcile existing decisions. | Approved discovery closeout and unresolved-decision register. |
| 2. Information architecture | Define navigation, audiences, journeys, page families, and route map. | Operator-approved IA and direct-entry journey tests. |
| 3. Content architecture | Define content objects, relationships, publishing workflow, announcements, and ownership. | Approved schemas and owner mapping. |
| 4. Design system | Define tokens, dark/light modes, theme overlay model, typography, components, motion, media, and accessibility. | Approved design tokens and component contract. |
| 5. Visual concept | Produce and compare high-fidelity experience directions. | Operator-selected visual direction. |
| 6. Prototype | Validate the selected experience interactively without production authority. | Usability, mobile, accessibility, and conversion review. |
| 7. Beta foundation | Create the isolated beta application and deployment boundary. | Clean independent build and protected preview. |
| 8. Page and funnel implementation | Build approved public page families and inert/test-safe handoffs. | Page-family acceptance and protected-flow verification. |
| 9. Integrations | Add separately approved CRM, scheduling, attribution, analytics, and other integrations. | Environment-safe integration validation. |
| 10. Content migration | Promote approved content and media into governed beta objects. | Coverage, claims, owner, and provenance review. |
| 11. QA | Validate routes, browsers, devices, regressions, content, and protected boundaries. | No blocking defects. |
| 12. Accessibility | Complete WCAG-oriented audit and remediation. | Approved accessibility report. |
| 13. Performance | Meet approved performance and Core Web Vitals budgets. | Approved performance report. |
| 14. SEO | Validate metadata, structured data, crawl, index, internal links, local relevance, video, and image discovery. | Approved beta SEO readiness report. |
| 15. Beta review | Conduct operator, selected-user, and business acceptance. | Explicit operator production-candidate decision. |
| 16. Production migration | Reconcile approved beta into production through a reversible cutover. | Separate manual merge and deployment approval. |

## 16. Future bounded task candidates

These are non-authoritative planning candidates only:

| Candidate ID | Candidate title | Boundary |
| --- | --- | --- |
| WEBBETAINTERVIEW001 | Complete WNYHS Beta Website Discovery Interview | Interview and decision capture only. |
| WEBBETAIA001 | Define WNYHS Beta Information Architecture | Public audiences, journeys, navigation, page families, and route plan. |
| WEBBETACONTENT001 | Define WNYHS Beta Content Model and Publishing Lifecycle | Content objects, relationships, governance, announcement lifecycle, and intake workflow. |
| WEBBETADESIGN001 | Define WNYHS Beta Design System | Tokens, themes, modes, components, motion, media, and accessibility rules. |
| WEBBETAVISUAL001 | Produce WNYHS Beta Visual Concepts | High-fidelity design concepts and operator decision package. |
| WEBBETAPROTOTYPE001 | Build the Approved WNYHS Beta Experience Prototype | Interactive presentation prototype only; coordinate with, revise, or explicitly supersede the existing T-SITEPROTOTYPE001 lane rather than creating parallel authority. |
| WEBBETAFOUND001 | Create the Isolated WNYHS Beta Application Foundation | Future `apps/wnyhs-beta/` scaffold and independent deployment configuration only after exact approval. |
| WEBBETACONVERT001 | Define and Implement Beta Conversion Architecture | Public journeys and test-safe conversion handoffs; protected runtime changes require separate authorization. |
| WEBBETAHUBSPOT001 | Reconcile Beta Lead and Lifecycle Data with HubSpot | CRM ownership, schema, test environment, and API boundary. |
| WEBBETASCHED001 | Define Beta Scheduling Integration | Google Calendar availability and operator-confirmed scheduling boundary. |
| WEBBETAATTRIB001 | Define Beta Campaign and QR Attribution | Source, campaign, medium, asset, journey, and conversion measurement. |
| WEBBETASEO001 | Define and Validate Beta SEO and Local Authority | Crawl, canonical, metadata, structured data, local relevance, media, and migration. |
| WEBBETAANALYTICS001 | Define Beta Analytics and KPI Contract | Event taxonomy, isolation, dashboards, and revenue attribution. |
| WEBBETASUPPORT001 | Define Existing-Customer Support and Expansion Entry | Public support and expansion entry only; no customer portal. |
| WEBBETAPUBLISH001 | Implement Governed Solution and Announcement Publishing | Authoring/admin workflow only after content and security decisions. |
| WEBBETAQA001 | Establish Beta Browser, Device, Accessibility, and Regression QA | Test matrix and acceptance evidence. |
| WEBBETAMIGRATE001 | Plan and Execute Reversible Production Migration | Separate production cutover and rollback authority. |

No candidate becomes executable until it receives current-schema task authority, an exact work order, an allowlist, validation, and operator approval.

## 17. Success criteria

WEBBETADISC001 succeeds when:

- all operator-approved requirements are captured and traceable;
- unresolved questions remain visible;
- the staged interview can continue without re-asking settled direction;
- the public website remains the priority;
- public, customer, and owner/employee boundaries are explicit;
- the beta location is selected from actual repository and hosting evidence;
- production safeguards cover routes, runtime, integrations, indexing, analytics, data, deployment, and rollback;
- future phases and candidates are bounded and non-executable;
- no production, source, configuration, runtime, or deployment file changes;
- the documentation package is reviewed through a draft PR.

## 18. Amendment and implementation gate

This charter may be amended only through a separately authorized bounded governance task.

Implementation requires a distinct task and work order naming:

- exact application and deployment paths;
- exact source/config allowlist;
- owner standards;
- protected systems;
- environment strategy;
- validation;
- branch and commit;
- preview and access posture;
- manual merge and deployment gates; and
- rollback.

Nothing in this charter authorizes beta creation, Sites execution, Cloudflare changes, production reconciliation, merge, or deployment.
