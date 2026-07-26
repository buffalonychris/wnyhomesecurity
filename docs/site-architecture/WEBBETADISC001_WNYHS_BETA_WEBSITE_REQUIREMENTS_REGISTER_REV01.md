# WEBBETADISC001 WNYHS Beta Website Requirements Register REV01

## 1. Document control

- **Status:** ACTIVE ON MERGE
- **Task ID:** WEBBETADISC001
- **Owner:** Site Architecture
- **Document type:** Discovery requirements register
- **Implementation authority:** None
- **Source authority:** Operator-approved WEBBETADISC001 direction dated 2026-07-26, constrained by current repository owners
- **Revision:** REV01

## 2. Field definitions

- **Status:** `APPROVED DIRECTION`, `CURRENT REPOSITORY RULE`, `OPEN`, or `DEFERRED`.
- **Priority:** `P0` foundational, `P1` required for the beta, `P2` valuable follow-up, or `RUNWAY`.
- **Authority:** The source that controls the requirement. Detailed owner documents control their domains.
- **Acceptance implication:** Evidence a later bounded task must supply. It is not implementation authority.

## 3. Brand and visual experience

| ID | Requirement | Authority | Status | Priority | Unresolved questions | Dependencies | Acceptance implication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| VIS-001 | Create an exceptional, premium, striking, memorable public experience. | WEBBETADISC001 §3B | APPROVED DIRECTION | P0 | Exact visual direction. | Visual concept; design system. | Operator selects a high-fidelity direction that is recognizably WNYHS. |
| VIS-002 | Avoid generic alarm, reseller, contractor, catalog, blog, and stock-brochure patterns. | WEBBETADISC001 §3B | APPROVED DIRECTION | P0 | Which competitive references are useful. | Discovery interview. | Visual review explicitly rejects generic-template cues. |
| VIS-003 | Visual quality must preserve accessibility, speed, mobile usability, conversion, clarity, and search visibility. | WEBBETADISC001 §3B | APPROVED DIRECTION | P0 | Exact budgets and thresholds. | Accessibility; performance; SEO owners. | Cross-discipline acceptance matrix passes. |
| VIS-004 | Use semantic tokens and governed components; do not create uncontrolled visual primitives. | DESIGN002 REV02; PAGE_TOKEN gate | CURRENT REPOSITORY RULE | P0 | Whether beta gets a successor token namespace. | WEBBETADESIGN001. | Token audit finds no uncontrolled primitives. |
| VIS-005 | Media and motion must improve comprehension rather than distract from the journey. | WEBBETADISC001 §§3B, 8D | APPROVED DIRECTION | P1 | Motion level, video posture, reduced-motion behavior. | Interview; accessibility. | Motion/media review includes reduced-motion and performance evidence. |

## 4. Modes and temporary themes

| ID | Requirement | Authority | Status | Priority | Unresolved questions | Dependencies | Acceptance implication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| THM-001 | Support complete dark and light experiences from anywhere on the site. | WEBBETADISC001 §3C | APPROVED DIRECTION | P0 | Default mode. | Design system. | All approved pages and media pass both modes. |
| THM-002 | Preserve content, imagery, readability, contrast, and layout across mode changes. | WEBBETADISC001 §3C | APPROVED DIRECTION | P0 | Image treatment per mode. | Asset and token standards. | Automated and visual parity checks pass. |
| THM-003 | Persist user preference where appropriate, permit system detection, and retain user override. | WEBBETADISC001 §3C | APPROVED DIRECTION | P1 | Storage, consent, and cross-device behavior. | Privacy; design system. | Preference behavior is documented and tested. |
| THM-004 | Support scheduled temporary themes for holidays, local events, milestones, and launches. | WEBBETADISC001 §3D | APPROVED DIRECTION | P1 | Initial theme set and authorized roles. | Content/admin architecture. | Theme can be previewed, activated, expired, and reverted without page edits. |
| THM-005 | Temporary themes must not alter core content, break modes/accessibility, damage SEO, or change protected behavior. | WEBBETADISC001 §3D | APPROVED DIRECTION | P0 | Exact overlay boundary. | Theme contract; QA. | Theme validation proves presentation-only isolation. |
| THM-006 | Routine theme activation should not require code edits. | WEBBETADISC001 §3D | APPROVED DIRECTION | P1 | CMS/admin mechanism and security model. | Future publishing task. | Authorized workflow exists outside routine source edits. |

## 5. Audiences, journeys, and navigation

| ID | Requirement | Authority | Status | Priority | Unresolved questions | Dependencies | Acceptance implication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AUD-001 | Support first-time visitors, researching homeowners, commercial prospects, senior-safety prospects, caregivers, property managers, customers, partners, and campaign traffic. | WEBBETADISC001 §3E | APPROVED DIRECTION | P0 | Audience priority and overlap. | Discovery interview. | IA maps each audience to a valid entry and next action. |
| AUD-002 | Visitors must quickly understand offers, problems solved, relevance, price factors, next action, help, and expandability. | WEBBETADISC001 §3E | APPROVED DIRECTION | P0 | Price-guidance posture. | Claims, pricing, IA. | First-click and comprehension testing meets later targets. |
| AUD-003 | Do not force every visitor through one identical funnel. | WEBBETADISC001 §3E | APPROVED DIRECTION | P0 | Number and type of journeys. | Conversion architecture. | Journey map contains audience-appropriate paths and handoffs. |
| NAV-001 | Public discovery follows Homepage → Category → Solution → Estimate/Contact while supporting direct entry. | SITEARCH002 | CURRENT REPOSITORY RULE | P0 | Whether later discovery tools add alternate entry models. | IA. | Route and navigation map preserves canonical hierarchy and direct entry. |
| NAV-002 | Packages remain contextual sales/catalog constructs, not the default primary Solutions destination. | SITEARCH002 | CURRENT REPOSITORY RULE | P0 | Final package visibility. | IA; package owner. | Navigation does not mislabel packages as the solution catalog. |
| NAV-003 | Public, authenticated customer, and owner/employee experiences must not share one public navigation structure. | WEBBETADISC001 §4 | APPROVED DIRECTION | P0 | Future authentication topology. | Security and future module architecture. | Architecture shows explicit experience boundaries. |

## 6. Six-pillar library and content

| ID | Requirement | Authority | Status | Priority | Unresolved questions | Dependencies | Acceptance implication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CNT-001 | Preserve the exact six-category order: Home Security; Aging in Place; Home Safety; Home Automation; Home Lighting; Property Management. | Current context; CATEGORY001 REV02; WEBBETADISC001 §3F | CURRENT REPOSITORY RULE | P0 | None within this task. | Category owners. | Every public taxonomy and prototype uses the exact order. |
| CNT-002 | Build a structured learning library, not a chronological blog. | WEBBETADISC001 §3F | APPROVED DIRECTION | P0 | Library naming and landing model. | Content architecture. | Content objects are typed, related, searchable, and reusable. |
| CNT-003 | Support plain-language explanations, problem navigation, education, video, diagrams, comparisons, FAQs, buying guidance, relationships, CTAs, and WNY relevance. | WEBBETADISC001 §3F | APPROVED DIRECTION | P1 | Content-depth standards. | Content and SEO architecture. | Content schema and page families support every required type. |
| CNT-004 | Present customer outcomes before technology. | SITE_CONTENT_ARCHITECTURE_CONTEXT; Business Bible | CURRENT REPOSITORY RULE | P0 | None at doctrine level. | Content/solution owners. | Page reviews show problem/outcome framing before hardware detail. |
| CNT-005 | Keep technical complexity understandable to ordinary homeowners and business owners. | WEBBETADISC001 §§3A, 3E; Business Bible | APPROVED DIRECTION | P0 | Reading-level target. | Content standard. | Plain-language review passes later approved threshold. |
| CNT-006 | Support related content and related solutions without duplicating owner facts. | WEBBETADISC001 §3F; ASOR | APPROVED DIRECTION | P1 | Relationship ranking. | Content model; one-owner-per-fact. | Relationships are reference-based and source-owned. |

## 7. Repeatable solution publishing and announcements

| ID | Requirement | Authority | Status | Priority | Unresolved questions | Dependencies | Acceptance implication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PUB-001 | Add products, services, and solutions without redesigning page layouts. | WEBBETADISC001 §3J | APPROVED DIRECTION | P0 | Authoring platform. | Content model; design system. | A new approved solution uses the standard model and components. |
| PUB-002 | Accept transcripts, manufacturer pages, PDFs, field notes, images, pricing, requirements, and operator observations as intake evidence. | WEBBETADISC001 §3J | APPROVED DIRECTION | P1 | Intake UI, retention, and permissions. | Source/provenance workflow. | Each input receives provenance and classification before promotion. |
| PUB-003 | Classify pillar, problem, audience, property type, relationships, status, assessment, claims, media, CTA, HubSpot category, and review state. | WEBBETADISC001 §3J | APPROVED DIRECTION | P0 | Exact controlled vocabularies. | Content, solution, claims, CRM owners. | Required fields and approval gates are enforced. |
| PUB-004 | Internal/catalog presence must not imply public eligibility. | ASOR; solution governance | CURRENT REPOSITORY RULE | P0 | None. | Promotion workflow. | Public state requires explicit approval evidence. |
| ANN-001 | Support scheduled product, category, feature, media, video, event, notice, and milestone announcements. | WEBBETADISC001 §3K | APPROVED DIRECTION | P1 | Announcement surfaces and moderation. | Content/admin architecture. | Announcement object supports approved types. |
| ANN-002 | Announcements support start, expiration, placement, priority, CTA, media, optional audience, removal, and archival. | WEBBETADISC001 §3K | APPROVED DIRECTION | P1 | Archive visibility and targeting rules. | Publishing workflow. | Scheduling and expiry work without manual page cleanup. |

## 8. Conversion, attribution, analytics, and reporting

| ID | Requirement | Authority | Status | Priority | Unresolved questions | Dependencies | Acceptance implication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CON-001 | Convert qualified leads into sales and customers into long-term loyalists. | WEBBETADISC001 §3A | APPROVED DIRECTION | P0 | Conversion targets and qualification rules. | Interview; KPI contract. | Funnel KPIs are defined from entry through revenue/expansion. |
| CON-002 | Provide clear next actions appropriate to audience and page intent. | WEBBETADISC001 §§3A, 3E | APPROVED DIRECTION | P0 | CTA hierarchy. | IA; conversion architecture. | Each page family has one primary and bounded secondary actions. |
| ATT-001 | Support traffic from social, search, ads, QR assets, signs, print, events, email, video, and referrals. | WEBBETADISC001 §3G | APPROVED DIRECTION | P0 | Initial channel list and naming. | Attribution architecture. | Every approved source can carry durable attribution. |
| ATT-002 | Capture source, campaign, medium, landing, QR/asset, placement, first/return visits, starts, completions, assessments, appointments, quotes, deposits, and expansions where applicable. | WEBBETADISC001 §3G | APPROVED DIRECTION | P0 | Identity, consent, retention, and cross-device policy. | Privacy; analytics; CRM; runtime owners. | Event/data contract covers the approved lifecycle without secret/customer-data leakage. |
| ATT-003 | Preserve existing QR attribution, `requestId`, and `/api/lead-signal` contracts until separately changed. | Current runtime contracts | CURRENT REPOSITORY RULE | P0 | Beta test boundary. | Protected runtime. | Beta cannot write to production attribution or CRM unintentionally. |
| ANL-001 | Define isolated beta analytics before enabling production-like measurement. | WEBBETADISC001 §§6–7 | APPROVED DIRECTION | P0 | Analytics platform, property, consent, sampling. | WEBBETAANALYTICS001. | Beta traffic is distinguishable from production and test events. |
| ANL-002 | Track success and failure through useful business KPIs, not pageviews alone. | WEBBETADISC001 §§1, 3G | APPROVED DIRECTION | P1 | KPI targets, dashboards, owners. | Analytics and operator reporting interview. | KPI contract joins engagement to qualified leads, sales, support, and expansion where authorized. |

## 9. HubSpot, scheduling, payments, and protected handoffs

| ID | Requirement | Authority | Status | Priority | Unresolved questions | Dependencies | Acceptance implication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CRM-001 | HubSpot remains primary CRM/lifecycle system where the applicable owner assigns it. | WEBBETADISC001 §3H; ASOR | APPROVED DIRECTION | P0 | Exact object and field ownership. | CRM reconciliation. | Owner map states website-versus-HubSpot authority for each record. |
| CRM-002 | Support leads, contacts, companies, opportunities, interests, requests, attribution, forms, stages, follow-up, and expansions. | WEBBETADISC001 §3H | APPROVED DIRECTION | P1 | Schema, permissions, deduplication, test environment. | WEBBETAHUBSPOT001. | Integration contract covers only approved objects and properties. |
| CRM-003 | Do not assume every website function belongs in HubSpot. | WEBBETADISC001 §3H | APPROVED DIRECTION | P0 | Ownership decisions by function. | ASOR; domain owners. | Systems-of-record map is explicit. |
| SCH-001 | Preserve a path to scheduling from actual Google Calendar availability. | WEBBETADISC001 §3I | APPROVED DIRECTION | P1 | Calendar(s), employees, appointment types, service areas. | Scheduling owner; Google Workspace owner. | Future model uses valid availability and explicit authority. |
| SCH-002 | Consider duration, buffers, geography, employee availability, confirmations, reminders, rescheduling, cancellations, and HubSpot sync. | WEBBETADISC001 §3I | APPROVED DIRECTION | P2 | All operational values. | Scheduling interview/task. | No value is invented; later contract records each decision. |
| SCH-003 | Scheduling remains operator-confirmed; beta tests must not create production calendar events. | Current scheduling owner; WEBBETADISC001 §7 | CURRENT REPOSITORY RULE | P0 | Test-calendar strategy. | Beta environment. | Preview cannot confirm or write production appointments. |
| PAY-001 | Beta tests must not create production Stripe payments or treat client redirects as payment truth. | Stripe runtime; WEBBETADISC001 §7 | CURRENT REPOSITORY RULE | P0 | Test-mode and handoff strategy. | Future payment task. | Payment UI is inert/test-only until authorized server verification exists. |

## 10. Search, SEO, performance, and device support

| ID | Requirement | Authority | Status | Priority | Unresolved questions | Dependencies | Acceptance implication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SEO-001 | Support clear IA, structured content, semantic markup, structured data, metadata, internal links, local relevance, crawlability, and indexability. | WEBBETADISC001 §3M | APPROVED DIRECTION | P0 | Schema types and local-market scope. | IA; content; SEO. | SEO readiness audit passes approved route set. |
| SEO-002 | Support image and video discoverability and solution/pillar relationships. | WEBBETADISC001 §3M | APPROVED DIRECTION | P1 | Media metadata and hosting. | Media and SEO owners. | Media objects have governed metadata and relationships. |
| SEO-003 | Do not reduce SEO to keyword selection. | WEBBETADISC001 §3M | APPROVED DIRECTION | P0 | None. | SEO architecture. | Strategy covers technical, content, authority, local, media, and performance dimensions. |
| SEO-004 | Keep beta hosts non-indexed until a separate launch-readiness decision. | WEBBETADISC001 §7; current SEO posture | APPROVED DIRECTION | P0 | Layered controls. | Beta deployment. | Header/meta/robots/access controls are verified before preview sharing. |
| PERF-001 | Treat page speed and Core Web Vitals as acceptance concerns. | WEBBETADISC001 §§3B, 3M | APPROVED DIRECTION | P0 | Budgets per template/device. | Performance task. | Repeatable lab and field measurements meet approved budgets. |
| DEV-001 | Support Windows, macOS, Android, iOS, desktop, laptop, tablet, phone, and modern browsers. | WEBBETADISC001 §3L | APPROVED DIRECTION | P0 | Exact browser/version matrix. | QA task. | Approved device/browser matrix passes. |
| DEV-002 | Mobile is a first-class experience. | WEBBETADISC001 §3L | APPROVED DIRECTION | P0 | Mobile content and interaction priorities. | IA; design; QA. | Mobile acceptance is independent, not a scaled desktop check. |

## 11. Accessibility, privacy, security, and trust

| ID | Requirement | Authority | Status | Priority | Unresolved questions | Dependencies | Acceptance implication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A11Y-001 | Accessibility is foundational across modes, themes, media, motion, navigation, forms, and content. | WEBBETADISC001 §§3B–3D, 3M | APPROVED DIRECTION | P0 | Target conformance level and audit methods. | Design and QA. | Automated, keyboard, screen-reader, contrast, and reduced-motion checks pass. |
| PRV-001 | Remain privacy-conscious and consistent with WNYHS doctrine. | WEBBETADISC001 §3A; Business Bible | APPROVED DIRECTION | P0 | Consent, retention, analytics, identity, and targeting details. | Privacy/legal owner. | Data inventory and consent/retention decisions are approved before collection. |
| SEC-001 | Separate public, authenticated customer, and internal authorization boundaries. | WEBBETADISC001 §4 | APPROVED DIRECTION | RUNWAY | Identity provider and role model. | Future security/auth task. | Public beta does not create accidental internal or customer access. |
| SEC-002 | Do not expose secrets, internal BOMs, margins, customer data, private implementation notes, or protected records. | Project governance; guardrails | CURRENT REPOSITORY RULE | P0 | None. | All future tasks. | Security and content scans find no prohibited exposure. |
| TRUST-001 | Sell usefulness, ownership, prevention, and confidence without fear, coercion, unsupported promises, or hidden costs. | Business Bible; guardrails | CURRENT REPOSITORY RULE | P0 | Exact public wording remains with claims owners. | Content/claims review. | Claims-safe review passes. |
| TRUST-002 | Represent only capabilities actually supported by selected hardware, software, integration, and deployment. | Business Bible | CURRENT REPOSITORY RULE | P0 | Capability-evidence workflow. | Solution, hardware, deployment owners. | Every claim traces to approved capability evidence. |

## 12. Production isolation and migration

| ID | Requirement | Authority | Status | Priority | Unresolved questions | Dependencies | Acceptance implication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ISO-001 | Build the beta outside the root production app and its current `/newsite` route tree. | WEBBETADISC001 location decision | APPROVED DIRECTION | P0 | Final scaffold task details. | WEBBETAFOUND001. | Separate application root, build, and output are demonstrated. |
| ISO-002 | Use a separate Cloudflare Pages project and protected/non-indexed beta host. | WEBBETADISC001 location decision | APPROVED DIRECTION | P0 | Project name, hostname, access policy. | Infrastructure task/operator approval. | Production project/domain remain unchanged. |
| ISO-003 | Separate environment variables, analytics identity, forms/test submissions, payments, and scheduling. | WEBBETADISC001 §7 | APPROVED DIRECTION | P0 | Exact test systems. | Integration tasks. | No beta action mutates production data. |
| ISO-004 | Preserve production routes, redirects, QR, planner, quote, agreement, payment, schedule, contact, and support. | WEBBETADISC001 §7; guardrails | CURRENT REPOSITORY RULE | P0 | None for discovery. | All later tasks. | Changed-file and runtime audits prove no production impact. |
| ISO-005 | Require manual deployment approval, visible beta labeling/access control, rollback, and removal. | WEBBETADISC001 §7 | APPROVED DIRECTION | P0 | Review roles and retention. | Deployment plan. | Preview can be removed without production rollback. |
| ISO-006 | Production migration must be separately authorized, reversible, and evidence-based. | WEBBETADISC001 §§6–8; ASOR | APPROVED DIRECTION | P0 | Cutover strategy. | WEBBETAMIGRATE001. | Separate cutover task includes route/data/runtime rollback. |
| ISO-007 | ChatGPT Sites may support private visual prototyping, but it is not the canonical beta application or production authority. | Current Sites governance; location decision | CURRENT REPOSITORY RULE | P1 | Whether/how the active T-SITEPROTOTYPE001 lane continues. | Operator decision in later prototype planning. | No parallel production owner or untraceable design handoff is created. |

## 13. Operations and future runway

| ID | Requirement | Authority | Status | Priority | Unresolved questions | Dependencies | Acceptance implication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| OPS-001 | Repeated WNYHS activity must reference an approved reusable process or trigger formalization review. | WEBBETADISC001 §5 | APPROVED DIRECTION | P0 | Process owner and trigger thresholds. | Future operating-system governance. | Publishing/operations flows link to durable process authority. |
| OPS-002 | Repository documents remain durable authority; chat decisions require promotion. | WEBBETADISC001 §5; ASOR | CURRENT REPOSITORY RULE | P0 | None. | All tasks. | No implementation depends on chat-only requirements. |
| RUN-001 | Preserve runway for SOW, quote, procurement, inventory, bench, identifiers, installer, dashboard, support, warranty, vendor, expansion, installed-system, and KAOS capabilities. | WEBBETADISC001 §4 | APPROVED DIRECTION | RUNWAY | Domain architectures and priorities. | Separate future programs. | Public beta architecture has interfaces/boundaries, not embedded modules. |
| RUN-002 | Do not build owner, employee, customer portal, or KAOS modules in the public beta task. | WEBBETADISC001 §§1, 4, 12 | APPROVED DIRECTION | P0 | None. | Scope control. | No internal-module source or navigation appears. |

## 14. Open decision summary

The following remain open and require staged operator input or later owner decisions:

- audience priority and primary conversions;
- final visual language and references;
- motion/media posture;
- dark/light default and theme governance;
- navigation model and journey count;
- library naming and content-depth rules;
- authoring/admin platform;
- analytics platform, consent, retention, identity, KPIs, and targets;
- HubSpot object/field ownership and test strategy;
- Google Calendar, appointment, employee, travel, geography, reminder, cancellation, and rescheduling rules;
- pricing-guidance posture and exact public claims;
- accessibility target and browser/device matrix;
- performance budgets;
- beta hostname, access policy, Cloudflare project details, test destinations, and retention;
- relationship between the active T-SITEPROTOTYPE001 lane and the future beta visual-concept phase;
- production migration and rollback design.

No open decision is resolved by implication.

## 15. Change control

This register may be amended only through a bounded governance or discovery task. A later implementation task may reference requirement IDs, but must also name the controlling dedicated owner and exact acceptance checks.
