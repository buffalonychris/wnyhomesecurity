# WEBBETADISC001 WNYHS Beta Website Program Decision Log REV01

## 1. Document control

- **Status:** ACTIVE ON MERGE
- **Task ID:** WEBBETADISC001
- **Owner:** Site Architecture
- **Document type:** Program decision and unresolved-question log
- **Implementation authority:** None
- **Revision:** REV01

## 2. Decision vocabulary

- **APPROVED:** Operator-approved direction or current repository authority.
- **RECOMMENDED:** Evidence-based architecture recommendation requiring later implementation authority.
- **OPEN:** Operator or owner decision required.
- **DEFERRED:** Intentionally reserved for a later bounded task.
- **PROHIBITED ASSUMPTION:** A conclusion future agents must not infer.

## 3. Approved decisions

| ID | Decision | Basis | Consequence |
| --- | --- | --- | --- |
| D-001 | The replacement website prioritizes public leads and customers. | WEBBETADISC001 | Internal modules cannot expand the beta scope. |
| D-002 | The site must demonstrate breadth, choice rationale, conversion value, loyalty, support, and expansion. | WEBBETADISC001 | Discovery and acceptance must cover the full customer lifecycle. |
| D-003 | The public experience must be premium, striking, memorable, accessible, fast, mobile-first, clear, and search-capable. | WEBBETADISC001 | Visual approval cannot waive accessibility, performance, content, or SEO. |
| D-004 | Full dark and light modes are foundational. | WEBBETADISC001 | Future tokens/components/assets must pass mode parity. |
| D-005 | Temporary scheduled themes are required as a future governed capability. | WEBBETADISC001 | Theme overlays must be content/runtime-safe and reversible. |
| D-006 | Different audiences may follow different journeys. | WEBBETADISC001 | No universal mandatory funnel. |
| D-007 | The six public categories and their exact order remain authoritative. | Current category/Sites governance | All discovery, design, and content work preserves the invariant. |
| D-008 | The learning library is structured and problem-led, not a chronological blog. | WEBBETADISC001 | Content architecture requires typed objects and relationships. |
| D-009 | Attribution is foundational across search, social, ads, QR, print, event, email, video, and referral traffic. | WEBBETADISC001 | Analytics and data contracts precede implementation. |
| D-010 | HubSpot remains the primary CRM/lifecycle system where owner documents assign it. | WEBBETADISC001; ASOR | System-of-record mapping is required; not every website function belongs in HubSpot. |
| D-011 | Scheduling must preserve real availability and operator-confirmed authority. | WEBBETADISC001; scheduling owner | The beta cannot create production calendar confirmations without authority. |
| D-012 | New solutions and announcements require governed, repeatable publishing. | WEBBETADISC001 | Intake evidence is classified and approved before publication. |
| D-013 | Public, authenticated customer, and internal experiences require separate boundaries. | WEBBETADISC001 | Internal and customer applications do not share public navigation by default. |
| D-014 | Repeated activity must use an approved reusable process or trigger formalization review. | WEBBETADISC001 | Future operating workflows point to durable repository authority. |
| D-015 | Repository documents are durable authority; chat alone is not. | ASOR; WEBBETADISC001 | Approved discovery results require promotion. |
| D-016 | Production remains untouched throughout discovery and later beta work unless a separate exact task authorizes a change. | WEBBETADISC001; guardrails | Beta isolation is mandatory. |
| D-017 | GOVFOUND002 is permanently retired and non-executable. | GOVFOUND002 disposition | No beta work may use it as authority. |
| D-018 | Current public architecture decisions remain in force unless separately amended. | SITEARCH002/003/005 | `/` homepage, canonical category and solution patterns, contextual packages, and direct entry remain planning constraints. |

## 4. Recommended architecture decisions

| ID | Recommendation | Evidence | Later gate |
| --- | --- | --- | --- |
| R-001 | Build the canonical beta as a self-contained application at `apps/wnyhs-beta/`. | Root is one production Vite app; `/newsite` shares router/build/deployment; no monorepo tooling; same-repo governance is valuable. | WEBBETAFOUND001. |
| R-002 | Deploy the beta through a separate Cloudflare Pages project and protected, non-indexed host. | Root project and production runtime are coupled; live preview/access policy remains unverified. | Read-only Cloudflare evidence plus bounded infrastructure task. |
| R-003 | Keep the existing T-SITEPROTOTYPE001 lane as an optional private visual-concept/usability input, not the canonical beta application. | Sites is governed as a real private deployment and non-production design benchmark with separate reconciliation. | Later operator decision on prototype sequencing. |
| R-004 | Do not convert the root to a monorepo before the beta proves a need for shared packages. | Current repository is not a monorepo; conversion expands production risk. | Separate future architecture task if needed. |
| R-005 | Use beta-local dependencies, environments, analytics, and test integrations by default. | Production contains protected CRM/payment/scheduling/API runtime. | Foundation and integration tasks. |

## 5. Open operator decisions

| ID | Decision required | Why it matters | Earliest stage |
| --- | --- | --- | --- |
| O-001 | Priority audiences and commercial order. | Determines IA, proof, content, and initial scope. | Interview 1. |
| O-002 | Primary conversions and qualified-lead definition. | Determines journey and KPI design. | Interview 4. |
| O-003 | Emotional and visual reference direction. | Converts "exceptional" into reviewable criteria. | Interviews 3 and 10. |
| O-004 | Navigation and discovery mechanisms. | Determines how problem, pillar, property, audience, and search coexist. | Interviews 5–8. |
| O-005 | Initial content types and launch-depth expectations. | Controls content scope and publishing model. | Interview 9. |
| O-006 | Dark/light default, preference behavior, and mode-specific assets. | Controls theme contract and privacy/storage. | Interview 12. |
| O-007 | Temporary-theme roles, initial themes, preview, scheduling, and audit. | Controls future admin/security boundary. | Interview 13. |
| O-008 | Local service areas, proof, geographic priorities, and local-authority targets. | Prevents thin or unsupported local SEO. | Interview 14. |
| O-009 | Campaign taxonomy, attribution retention, identity, and consent. | Controls analytics and privacy. | Interview 15. |
| O-010 | HubSpot object, property, lifecycle, test, and human-approval boundaries. | Prevents CRM ownership drift. | Interview 16. |
| O-011 | Scheduling types, duration, employees, calendars, geography, buffers, and communication. | Prevents invented operational values. | Interview 17. |
| O-012 | Public support and customer-expansion boundaries. | Determines what remains public versus authenticated. | Interviews 18–20. |
| O-013 | Performance, accessibility, browser, and device thresholds. | Makes beta acceptance objective. | Interviews 21–22. |
| O-014 | Analytics platform, events, consent, retention, dashboards, KPIs, and targets. | Separates useful business evidence from vanity metrics. | Interviews 23–24. |
| O-015 | Future KAOS integration boundaries. | Preserves runway without blocking public beta. | Interview 25. |
| O-016 | Beta review population, duration, and blocking-defect criteria. | Controls beta completion. | Interview 26. |
| O-017 | Production migration and rollback approach. | Controls eventual cutover risk. | Interviews 27–28. |
| O-018 | Exact beta Cloudflare project name, hostname, access policy, and review roles. | Required before foundation/deployment configuration. | Before WEBBETAFOUND001. |
| O-019 | Relationship and sequencing between T-SITEPROTOTYPE001 and the WEBBETA visual/prototype phases. | Avoids parallel prototype authority and duplicate work. | Before WEBBETAPROTOTYPE001. |

## 6. Deferred decisions

The following are deferred to dedicated owners or future bounded tasks:

- pricing values, profit floors, packages, discounts, deposits, warranties, refunds, and legal terms;
- exact public claims and "no monthly fee" language;
- product qualification, BOM, hardware, networking, cabling, Home Assistant, dashboard, and support implementation;
- CRM schema and field permissions;
- payment and Stripe behavior;
- scheduling runtime values and calendar implementation;
- production analytics and QR runtime changes;
- authentication provider and role model;
- customer portal, owner/employee application, and KAOS implementation;
- content-management/vendor selection;
- beta dependency and workspace model;
- Cloudflare project, access, DNS, and environment configuration;
- production migration mechanics.

## 7. Prohibited assumptions

Future agents must not assume:

1. `/newsite` is the approved beta location.
2. A branch preview is sufficient production isolation.
3. A beta subdomain alone creates source/runtime isolation.
4. ChatGPT Sites is the canonical beta or production source.
5. The active T-SITEPROTOTYPE001 task is automatically superseded by this program.
6. Same-repository means shared production imports or functions are allowed.
7. A formal monorepo conversion is already approved.
8. Every website function belongs in HubSpot.
9. Production analytics, CRM, calendars, payments, email, QR, or attribution may be used for beta tests.
10. Packages are primary public navigation objects.
11. Public, customer, and internal experiences should use one navigation or application.
12. Internal catalog presence means a solution is approved for public publication.
13. Temporary themes may change content, accessibility, SEO, or protected behavior.
14. Future internal runway authorizes internal module design or implementation.
15. A merged beta task authorizes deployment.
16. A beta deployment authorizes production migration.
17. Historical chat, `/newsite`, T-SITEPROTOTYPE001, or GOVFOUND002 creates implementation authority.

## 8. Current production protections

No future planning or beta task may silently change:

- production root application, router, build, functions, or deployment;
- canonical/public routes, sitemap, robots, metadata, redirects, or domain;
- `/qrlanding` or `/qrlanding.htm`;
- discovery, contact, support, and search;
- Precision Planner;
- quote, quote review/print, agreement review/print, e-sign, payment, success/cancel, schedule, resume, and verification;
- `/api/lead-signal`, request ID, HubSpot, Resend, and notification behavior;
- Stripe session, verification, webhook, and payment truth;
- scheduling availability, request, confirmation, calendar, and customer communication;
- production analytics and QR attribution;
- secrets, customer data, dependencies, or lockfiles.

## 9. Future decision promotion

Each approved interview decision must identify:

- affected requirement IDs;
- controlling domain owner;
- whether the decision is doctrine, policy, architecture, procedure, content, design, data, or implementation;
- conflicts;
- exact proposed repository destination;
- bounded task required for promotion;
- acceptance and validation.

No entry in this log activates a future task.

## 10. Closeout statement

WEBBETADISC001 establishes discovery authority and an evidence-based beta-location recommendation only.

It creates no beta application, route, page, design implementation, integration, Cloudflare project, preview, migration, merge, or deployment authority.
