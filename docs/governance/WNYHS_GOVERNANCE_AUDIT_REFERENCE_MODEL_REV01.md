# WNY Home Security Governance Authority & Operating Reference

## Audit Findings, Current Authority Model, Domain Routing, and Remediation Roadmap

- **Document ID:** WNYHS-GOVREF-REV01
- **Status:** Active Reference - Non-Authoritative Narrative Companion
- **Controlling task:** `T-GOVREF001`
- **Controlling context:** `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`
- **Primary source audit:** `docs/governance/GOVAUTH001_WNYHS_COMPLETE_GOVERNANCE_AUTHORITY_AUDIT_REV01.md`
- **Customer-facing:** No
- **Implementation authority:** No
- **Version:** REV01

> This document explains and routes to WNYHS authority. It does not replace repository governance, owner standards, runtime contracts, the Master Task Register, active bounded tasks, or task-specific work orders.

Use this reference to find the controlling source and required decision path. When this narrative differs from a higher-authority source, the higher-authority source controls. A path, status summary, gap, or candidate task recorded here is not permission to implement, activate, purchase, publish, deploy, or change a protected system.

## 1. Executive Overview

WNY Home Security has a repository-centered operating model. The operator decides business priority and approval. ChatGPT turns that direction into a bounded work order. Codex verifies authority and executes one task. GitHub provides the review surface. Deployment evidence is collected only when the task affects a deployed surface. Repository documents preserve the durable decision trail.

This model provides three practical benefits:

1. An idea can be traced from research through approval, classification, implementation, review, and validation without relying on chat memory.
2. Each domain has an owner path or an explicit unresolved-owner finding, reducing accidental use of a historical or proposed document as current authority.
3. Sensitive boundaries remain conservative. Access to a tool, connector, local rule, workflow, hook, or external system never supplies business or implementation authority.

The current system is workable but not a single clean authority graph. The GOVAUTH001 audit found overlapping standards, mixed status labels, stale indexes, identifier collisions, incomplete owner coverage, route-authority drift, and runtime-status uncertainty. This reference makes those issues easier to navigate; it does not resolve them.

The handbook is WNYHS-specific. It is not a generic operating-system product, does not establish a marketable framework, and does not create product strategy. It summarizes approved routing for ideas, solutions, hardware, public offerings, campaigns, the website, Home Assistant deployments, quotes, protected systems, and Codex delivery.

## 2. Governance Evolution

WNYHS governance evolved through ordered phases. These phases show operating lineage rather than simultaneous authority sources, and no date is implied unless a source records one.

1. **Chat-driven work:** Decisions and implementation context were carried heavily in conversations. This was useful for discovery but weak as a durable execution record.
2. **Repository authority:** `docs/system/project.md`, `docs/system/guardrails.md`, `docs/system/agent.md`, and `docs/system/plan.md` established repo-first rules, preservation duties, hard stops, and validation expectations.
3. **Single current context:** `docs/system/step-current.md` established one current operational context, with historical Step documents retained only as lineage unless explicitly promoted.
4. **Master Task Register:** `docs/system/master-task-register.md` became the execution board. An ACTIVE bounded task became the normal execution gate.
5. **Bounded Codex execution:** `docs/codex/CODEX_RUN_CONTRACT.md`, task-register rules, and context-efficiency standards formalized the technician role, protected systems, file limits, validation, draft-PR delivery, and no-merge boundary.
6. **Repo-native work orders:** `docs/codex/CODEX001_CODEX_WORK_ORDER_SPECIFICATION_REV01.md` standardized prechecks, allowed and forbidden scope, target files, validation, closeout evidence, and workstream routing.
7. **Workstream routing and status:** OPS004 and OPS005 added a primary-workstream classification and current-state pointer before deeper owner-doc loading.
8. **Workflow and RSI discipline:** OPS009 documented the operator, ChatGPT, Codex, GitHub, and deployment surfaces, plus targeted reads and context-efficiency reporting.
9. **Complete authority audit:** GOVAUTH001 mapped the instruction hierarchy, domain owners, capability layer, conflicts, missing owners, stale sources, load sets, and remediation candidates. Its recorded audit date is 2026-07-13.
10. **Project KB reconciliation:** The ChatGPT control-layer review confirmed that Project material must remain compact routing context and must not replace repository authority. The durable repository treatment still requires the separate reconciliation work identified in the roadmap.
11. **GOVREF001:** This document turns the audit and completed reconciliation findings encoded in the work order into a readable routing companion. It changes no owner standard or authority relationship.

## 3. Final Authority Chain

For WNYHS execution, use this order:

1. **Platform and tool rules:** System, developer, workspace, and capability-specific safety rules constrain what an execution surface can do. They do not create WNYHS business scope.
2. **Operator decisions and bounded request:** The operator sets priority and approves promotion. A request remains subject to repository conflicts and protected boundaries.
3. **ChatGPT Project instructions and KB:** These guide ChatGPT routing and compact context hydration. They do not independently authorize Codex implementation.
4. **Repository governance:** `docs/system/project.md`, `docs/system/guardrails.md`, `docs/system/agent.md`, and `docs/system/plan.md` are the highest durable repository authority set.
5. **Current operational context:** `docs/system/step-current.md` names the sole current context. Historical Steps do not compete with it.
6. **Execution board:** `docs/system/master-task-register.md` identifies the ACTIVE task and its bounded schema.
7. **Task and work order:** The named ACTIVE task authorizes only its stated scope; the task-specific work order narrows method, files, checks, and closeout.
8. **Owner standards and runtime contracts:** Current, active, locked, or otherwise properly classified domain documents constrain the authorized work. They do not activate work on their own.
9. **Implementation and review evidence:** Source/runtime artifacts show actual behavior; GitHub diffs, checks, PR review, and deployment validation show what changed and whether it passed.
10. **Historical evidence:** Earlier Steps, audits, completed implementation records, proposed standards, and archived material explain lineage only.
11. **Chat-derived context:** Conversation detail becomes durable only after promotion into a permitted task, work order, decision, or owner document.

At every level, higher authority wins. An unresolved conflict at the same level is a stop condition. The safe response is a bounded reconciliation or authority revision, not an implementation-time interpretation.

## 4. Roles and Responsibilities

| Role or surface | May | Must | Must not |
|---|---|---|---|
| Operator | Set priority, approve decisions, review PRs, merge manually, verify deployment | Decide promotion, scope, and final acceptance | Treat tool access as proof that a change is safe or approved |
| ChatGPT | Classify workstreams, inspect authorized evidence, draft work orders, review summaries and PR posture, recommend approve or hold | Route to repository authority and preserve operator decisions in durable work | Invent strategy, activate protected work, merge, or replace repo authority with chat memory |
| Codex | Inspect the repo, edit allowed files, validate, commit, push, and open a draft PR when authorized | Verify repo, context, ACTIVE task, scope, owner docs, protected boundaries, and clean base before edits | Expand scope, change protected systems implicitly, expose secrets, merge, enable auto-merge, or mark a draft ready |
| GitHub | Store branches, commits, diffs, checks, review evidence, and PR state | Preserve an inspectable review surface | Supply business approval by itself |
| Cloudflare | Host the deployed site and provide deployment evidence when a bounded release task uses it | Remain subject to deployment and environment owners | Supply authority to change DNS, configuration, environment, or secrets |
| Skills, plugins, connectors, hooks, CLIs, local rules | Provide a method for an already authorized task | Follow their own safety workflow and repository scope | Create tasks, grant business approval, widen file scope, approve merge, or bypass owners |
| Domain owners | Define rules, statuses, contracts, and required evidence for their domain | Be loaded when the task touches the domain | Activate implementation solely because an owner document exists |

The operator/ChatGPT/Codex separation is deliberate: decision, task routing, and execution are distinct. GitHub and deployment surfaces record facts; they do not replace operator review. Advisory hooks and local permissions remain subordinate to the repository task and no-merge rules.

## 5. Standard Execution Lifecycle

The standard lifecycle is:

`Idea -> Discussion -> Decision -> Promotion -> Task -> Work Order -> Codex -> Draft PR -> Review -> Merge -> Deployment Validation When Relevant -> Local Sync -> Closeout`

- **Idea:** A transcript, customer observation, product, campaign thought, defect, or operational improvement enters discussion. It has no implementation status.
- **Discussion:** Relevant owners and constraints are identified. Unknowns remain explicit.
- **Decision:** The operator decides whether to reject, research, pilot, approve internally, or promote toward public use.
- **Promotion:** A durable decision is recorded in the correct solution, offering, hardware, catalog, runtime, or governance owner. Promotion is not necessarily publication.
- **Task:** The Master Task Register receives a complete bounded record and ACTIVE status when execution is authorized.
- **Work order:** A repo-native instruction names authority, exact work, allowed files, forbidden scope, validation, versioning, protected systems, and closeout.
- **Codex:** Codex prechecks the synchronized base, creates a fresh branch, makes only the authorized changes, and validates them.
- **Draft PR:** The branch and evidence are pushed for review. Draft state signals that operator review remains.
- **Review:** ChatGPT/operator compare the work order, diff, checks, claims, protected systems, and scope.
- **Merge:** The operator alone decides and performs merge. Codex does not merge.
- **Deployment validation when relevant:** Customer-facing or runtime changes receive the task-required production checks. Docs-only work does not imply deployment.
- **Local sync:** The next run begins from a synchronized `main` after the preceding dependency is merged.
- **Closeout:** The task record, evidence, files, validation, risks, and unresolved follow-ups are recorded without closing unrelated tasks.

Skipping a stage requires explicit higher-authority permission. In particular, an approved idea does not skip owner classification; an ACTIVE category does not skip an ACTIVE task; and a successful build does not approve merge or deployment.

## 6. Capability Versus Authority

Capability answers **how an authorized action could be performed**. Authority answers **whether WNYHS has approved that action, for which purpose, within which files and systems, and with which validation**.

Examples:

- GitHub CLI authentication allows branch publication and PR creation only when the work order calls for it. It does not authorize merge.
- A connected CRM tool may be able to edit records. A docs-only task has no CRM-write authority, and HubSpot changes require a separate bounded CRM task plus the locked owner set.
- Browser, computer-control, and deployment tools may inspect or operate external surfaces. They are not used unless the active task requires that capability.
- A skill can impose additional safe-use steps for image, spreadsheet, browser, or deployment work. Its presence does not create WNYHS scope.
- Local command allow rules describe permission, not repository intent. They cannot override task scope, protected boundaries, or no-merge rules.
- Hooks may advise or automate mechanics after trust and event checks. They cannot activate tasks, approve findings, change protected systems, or turn candidate output into authority.

Automatic workflow events describe facts such as task start, task completion, PR creation, review, merge, and sync. An event name does not make the event true, and an automated reaction does not acquire business authority. If tool capability and repository authority disagree, the task stops at the repository boundary.

## 7. Domain Authority Directory

The matrix routes readers to owner sets. “Mixed” or “partial” means status or ownership remains unresolved and must not be normalized here.

| Domain | Primary owner/path | Supporting authority | Current posture | Controls | Does not control | Required task type | Known gap |
|---|---|---|---|---|---|---|---|
| Core governance | `docs/system/project.md` | guardrails, agent, plan | Active | authority chain and task gate | domain implementation | GOV | duplicated summaries |
| Current context | `docs/system/step-current.md` | Master Task Register | Active | current operational context | task scope alone | GOV | none material |
| Task/work-order execution | `docs/system/master-task-register.md`; `docs/codex/CODEX001_CODEX_WORK_ORDER_SPECIFICATION_REV01.md` | run contract, task-register rules, OPS003/004/005/009 | Active | bounded routing and execution method | product strategy or merge | GOV | predecessor overlap; no canonical work-order index |
| Public architecture/routes/navigation | `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md` | SITEARCH001/003/004, SEO004 | Active owner set | canonical IA decisions | route edits without task | FUNNEL/QA | higher-authority route list drift |
| SEO/search intent | `docs/seo/SEO004_WNYHS_SEO_STATUS_AND_CONTINUATION_HANDOFF_REV01.md` | SEO001-003, SEARCH001, SITEARCH | Active checkpoint | current SEO posture and intake | implementation without task | GOV/QA/FUNNEL | future-page intake and structured-data work remain bounded |
| Brand/layout/tokens | `docs/brand/brand_asset_standards_rev01.md`; `docs/brand/page_layout_standards_rev01.md`; `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md` | header/footer standard, token gate | Active/mixed | brand, layout, semantic visual rules | page creation alone | COPY/FUNNEL | overlapping visual standards and revision status |
| Claims/public content | `docs/system/guardrails.md`; `docs/solution-system/CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01.md` | public funnel standard, content remediation | Primary plus Active Governance Draft | prohibited and qualified claim boundaries | publication or proof | COPY/GOV | draft-status normalization |
| Solutions | `docs/solution-system/SOLUTION_CATALOG_RECONCILIATION_REV01.md` | solution page/object/media standards | Active Governance Draft/mixed | internal solution universe and classification | public launch alone | GOV/COPY | reused SOLUTION001 identifier |
| Offerings/public visibility | `docs/solution-system/OFFERING001_WNYHS_OFFER_ARCHITECTURE_VISIBILITY_TIERS_AND_VAULT_GOVERNANCE_REV01.md` | solution, claims, public funnel | Active Governance Draft | visibility tier, Vault/pilot/public eligibility posture | implementation or campaign approval alone | GOV/COPY | status normalization |
| Hardware | `docs/solution-system/HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01.md` | catalog, solution, installer owners | Active Governance Draft | hardware evidence and status | purchasing or install authorization | GOV/INSTALL | no end-to-end procurement owner |
| Catalog/parts | `docs/catalog/CATALOG001_Canonical_Catalog_Source_Standard_REV01.md` | CATALOG002/003 and import evidence | Active | canonical parts source and model | ordering, pricing, or runtime change | GOV | solution/catalog boundary is indirect |
| Package/BOM/pricing inputs | `docs/solution-system/PACKAGEBOM001_WNYHS_PACKAGE_MAP_AND_BOM_PRICING_INPUT_SCHEMA_REV01.md` | package and catalog standards | Active Governance Draft | schema and status boundaries | final price, purchase, or payment | GOV | overlapping quote/BOM ownership |
| Procurement/inventory/installed assets | No single promoted owner | hardware, catalog, PACKAGEBOM001, INSTALL006A | Partial | distributed fields and constraints | end-to-end operations | GOV | missing owner |
| Property discovery/model | `docs/quotesystem/PROPERTY001_Property_Model_Architecture_REV01.md` | FLOORPLAN000-004 | Active | property evidence and model | live storage without task | GOV/QUOTE | requirements ownership is distributed |
| Estimates/customer proposal | `docs/quotesystem/QUOTE_CUSTOMER_ESTIMATE_PACKET_STANDARD_REV01.md` | quote map and workspace records | Active | customer proposal/acceptance packet | payment or CRM | GOV/QUOTE | terminology requires careful routing |
| Internal SOW | `docs/quotesystem/QUOTE_INTERNAL_SOW_PACKET_STANDARD_REV01.md` | GATES001, property/floorplan docs | Active | internal technical fulfillment packet | customer publication without conversion | GOV/QUOTE | no single change-order owner |
| Agreement/change gates | `docs/quotesystem/GATES001_Quote_To_Install_Operational_Gates_REV01.md` | main funnel contract, packet standards | Active | quote-to-install gate boundaries | legal advice or live workflow changes | GOV/QUOTE | change-order lifecycle missing |
| Home Assistant platform | `docs/installer/INSTALL001_INSTALLER_PLATFORM_ARCHITECTURE_REV01.md` | INSTALL003/004/005 and bootstrap owner | Active | installer platform and baseline | live customer configuration | INSTALL | INSTALL008 identifier collision |
| Automations | `docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md` | installer and notification owners | Active | automation lifecycle and supportability | live automation without task | INSTALL | no distinct scene/script owner |
| Dashboards | `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md` | INSTALL007/010 and customer design standards | Active | audience and view architecture | live YAML/cards/themes | INSTALL | public-demo and HA terms can collide |
| Notifications | `docs/home-assistant/notification-system/WNYHS_NOTIFICATION_ENGINE_STANDARD_REV01.md` | AUTOMATION001 and customer profile | Approved | reusable routing and validation rules | customer implementation without approved profile/task | INSTALL | customer decisions remain separate |
| Commissioning/handoff/support | `docs/installer/INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md`; INSTALL009; INSTALL010 | INSTALL002 | Active | acceptance, handoff, and support posture | live customer records or portal | INSTALL | INSTALL008 collision |
| Cameras/recording/privacy | No single promoted owner | claims, hardware, solution, catalog, installer | Partial | distributed device and claim limits | full retention/privacy lifecycle | GOV/INSTALL | material missing owner |
| Locks/access/garage | No single promoted owner | hardware, solution, automation, installer | Partial | distributed control principles | credential and fail-safe lifecycle | GOV/INSTALL | material missing owner |
| Aging in place | No dedicated promoted owner | claims, solution, offering | Partial | non-medical positioning | specialized service authority | GOV/COPY | material missing owner |
| Environmental safety | No single promoted owner | solution, hardware, automation, notifications | Partial | capability and alert posture | universal thresholds/maintenance | GOV/INSTALL | material missing owner |
| Property management | No dedicated promoted owner | solution and catalog sources | Partial | scenarios and capability references | roles, tenancy, retention | GOV/INSTALL | material missing owner |
| Networking/PoE/cabling/power | No promoted cross-cutting owner | hardware, catalog, installer standards | Partial | component/install considerations | resilience and recovery policy | GOV/INSTALL | material missing owner |
| Lead intake/request IDs | `docs/runtime/lead_signal_contract.md`; `docs/runtime/request_id_contract.md` | protected runtime contract | Active contracts/mixed live status | API intake and correlation boundaries | implementation without LEAD task | LEAD | live-status reconciliation |
| HubSpot | `docs/crm/hubspot/hubspot_kb_rev03.md` | pipeline architecture and HubSpot runtime contracts | Locked/mixed live status | schema and API-mediated write boundary | direct client writes | CRM | live-status disagreement; changes require explicit approval |
| Stripe/payment | `docs/runtime/stripe_runtime.md` | guardrails and protected runtime contract | Partial/active conflict | server and webhook authority | client success authority | PAYMENT | live verification/status reconciliation |
| Scheduling | `docs/runtime/scheduling_ownership.md`; `docs/runtime/google_calendar_runtime.md` | scheduling spec | Partial/active conflict | request and operator-confirmation model | direct customer-authoritative booking | SCHED | live status uncertainty |
| Email/communications | `docs/runtime/resend_runtime.md`; `docs/runtime/cloudflare_email_routing.md` | runtime inventories | Partial/active conflict | outbound/inbound ownership | secret or configuration changes | EMAIL | live status uncertainty |
| Analytics/attribution | No single promoted analytics owner | QR/source contracts, SEO004, Cloudflare inventory, privacy constraints | Planned/partial | distributed measurement boundaries | tracker or payload implementation | GOV/QA/RUNTIME | analytics owner and event plan incomplete |
| Cloudflare/deployment | `docs/runtime/deployment_validation.md` | Cloudflare environment/config inventory | Partial | validation evidence | DNS, environment, or deploy config without task | QA/RUNTIME | verification status incomplete |
| Documentation/indexes | `docs/system/project.md`; document status reconciliation | catalog and manifest | Mixed | hierarchy and classification | implementation authority | GOV | catalog/manifest ownership drift |
| Skills/plugins/hooks/local config | No single promoted capability owner | CODEX rules, OPS009, repo hook metadata | Mixed | method constraints and inventory evidence | WNYHS scope | GOV | governance and usage attribution incomplete |

## 8. Practical Routing for New Ideas and Products

Mandatory decision path:

`Research/transcript -> operator approval -> solution classification -> hardware status -> HA integration purpose -> claims review -> offering status -> catalog/BOM consideration -> public visibility decision -> marketing task -> implementation task`

The stages are not interchangeable:

- **Research candidate:** Worth recording or verifying; no customer, install, catalog, or public status.
- **Internal capability:** Understood or usable internally, but not necessarily standardized, sold, or publicly visible.
- **Pilot:** Bounded evaluation with explicit site, evidence, limitations, and exit decision.
- **Approved install option:** Permitted in an installation context under documented conditions; not automatically approved hardware or public marketing.
- **Approved hardware:** Status recorded in HARDWARE001 with evidence, compatibility posture, limitations, and approval boundaries.
- **Approved BOM consideration:** Eligible for package/quote evaluation through PACKAGEBOM001 and catalog rules; not a purchase order or final customer price.
- **Publicly marketable offering:** Offering status, solution mapping, claims, proof, audience, and visibility decision support public use.
- **Customer-specific exception:** A bounded deviation recorded for one customer; it does not update the company-wide registry by implication.

### Idea/Product Routing Table

| Operator request | First classification | Primary owners | Required status decision | Typical next task |
|---|---|---|---|---|
| “Review this transcript idea” | Research candidate | solution reconciliation, relevant domain owner | reject, research, or promote for evidence | docs-only research reconciliation |
| “Can we install this device?” | Hardware candidate plus integration purpose | HARDWARE001, catalog, INSTALL/AUTOMATION owner | candidate, pilot, approved option, or exception | hardware evidence/bench-validation task |
| “Put this in a package” | BOM consideration | PACKAGEBOM001, catalog, solution/offering, claims | eligible/not eligible and under what conditions | package/BOM reconciliation task |
| “Sell this capability” | Offering/public-visibility candidate | OFFERING001, solution, claims, public funnel | internal, pilot, Vault/custom, or public | offer-promotion governance task |
| “Make a page or video about it” | Public marketing candidate | offering, claims, SITEARCH/SEO/brand/funnel | publicly marketable with approved destination and CTA | separate page/campaign work order |
| “Use it for one customer” | Customer-specific exception or pilot | relevant install owner plus customer record | bounded exception, evidence, handoff, and support posture | customer-specific implementation task |

### Worked transcript/hardware example

Assume a transcript mentions an unnamed manufacturer’s model-specific water sensor. This is illustrative and does not approve a product.

1. Record the source observation as research evidence, not a capability claim.
2. In `docs/solution-system/SOLUTION_CATALOG_RECONCILIATION_REV01.md`, classify the customer problem and candidate solution pattern.
3. In `docs/solution-system/HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01.md`, record manufacturer, exact model/part, evidence source, protocol, compatibility status, limitations, required accessories, and approval state. Unknown values remain verification-required.
4. In the applicable Home Assistant owner set, record the intended integration purpose, required entities, local-control posture, failure behavior, maintenance, and field-test expectations. This does not create live configuration.
5. Apply `docs/solution-system/CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01.md` before describing the customer benefit.
6. Use OFFERING001 to decide whether the solution remains internal, becomes a pilot/custom option, or qualifies for public visibility.
7. Use CATALOG001-003 and PACKAGEBOM001 to decide whether the exact part may be considered in a package or quote. BOM consideration is distinct from purchasing and final pricing.
8. If public visibility is approved, create a separate marketing task with an approved page destination, CTA, tracking method, and conversion objective.
9. Create a separate implementation task for any registry, website, catalog, customer, or runtime change. The transcript itself authorizes none of them.

## 9. Practical Routing for a New Public Offerings Page

Mandatory route:

`Business objective -> target audience/problem -> approved offering set -> claims-safe messaging -> page architecture -> SEO/search intent -> homepage/subpage relationship -> CTA/funnel -> analytics/attribution -> lead intake -> task/work order -> implementation -> PR/deployment validation`

The owner set is cumulative:

- **Offering and solution eligibility:** OFFERING001, solution reconciliation, solution object/page/media owners, and hardware/BOM owners when products are named.
- **Claims:** root guardrails, CLAIMS001, and public funnel standards.
- **Architecture and routes:** SITEARCH002 plus current SITEARCH/SEO status. A new public route cannot be inferred from a page idea.
- **SEO/search:** SEO004 and relevant SEO/Search owners define intent, metadata, canonical/index posture, internal linking, and search inclusion.
- **Brand and visual:** brand asset, layout, header/footer, DESIGN002 REV02, and the page-token gate constrain structure and semantic styling.
- **Homepage/subpage relationship:** architecture and content owners decide whether the homepage summarizes, links, or defers to the offerings page. No automatic homepage rewrite follows from page approval.
- **CTA and funnel:** public/main funnel contracts control the customer path. The page must not alter funnel order or protected forms by implication.
- **Analytics and attribution:** the campaign needs an approved privacy-safe tracking plan. The absence of a single promoted analytics owner is an unresolved dependency, not permission to improvise trackers.
- **Lead intake and HubSpot:** `/api/lead-signal` remains the protected lead boundary. Page work cannot create new CRM properties, direct writes, or workflow behavior.
- **Scheduling:** a CTA may request contact or an estimate only through the approved flow. Scheduling remains operator-confirmed unless separately authorized.

### Public Marketing Routing Table

| Marketing request | Required approved inputs | Required owner set | Protected dependencies | Validation |
|---|---|---|---|---|
| New offerings page | business objective, audience/problem, approved offering set, proof and claim posture | OFFERING, solution, claims, SITEARCH, SEO/Search, brand/visual, funnel | routes, forms, lead intake, CRM, scheduling, analytics | build, route/SEO/claims/token checks, PR and deployment evidence |
| Homepage promotion | approved destination and homepage role | site architecture, public content, brand/visual, SEO | navigation, CTA/funnel, analytics | build, link/route/claims/visual checks |
| Solution or product landing page | approved solution; hardware status if named; public visibility | solution, hardware, offering, claims, SEO/SITEARCH | catalog/BOM, lead intake, CRM | source-backed copy, metadata, route, build, focused QA |
| Social/video campaign | approved offering, audience, safe benefit, destination, CTA, tracking, conversion goal | offering, claims, public content, analytics/attribution | source IDs, CRM, lead intake, privacy | asset/copy review plus destination and attribution validation |
| Estimate-request campaign | approved offer and customer journey | funnel, lead/runtime, CRM boundary, scheduling boundary | `/api/lead-signal`, requestId, operator confirmation | end-to-end bounded QA without unauthorized writes |

The page implementation begins only after a complete ACTIVE task and work order name exact routes/files and validation. A page approval does not authorize new HubSpot fields, scheduling behavior, trackers, campaign assets, navigation changes, or homepage edits unless those surfaces are expressly included.

## 10. Marketing-to-Sales Campaign Model

Governed campaign route:

`Approved solution -> campaign angle -> website destination -> Higgsfield/video concept -> social post -> tracked CTA -> lead signal -> estimate request -> sales follow-up`

Before video production, confirm:

1. approved offering status;
2. hardware status when a product is named or visually identifiable;
3. a claims-safe customer benefit supported by the owner set;
4. the intended audience and problem;
5. an approved website destination;
6. a CTA that enters the approved funnel;
7. a tracking method governed by source/attribution and privacy boundaries; and
8. a measurable conversion objective.

The campaign angle is a creative framing of an approved offer, not a new offer. A Higgsfield or other video-generation concept is an asset-production input, not permission to generate or publish. The social post must point to the approved destination rather than create an ungoverned parallel sales path. Tracking identifiers must follow existing source-attribution rules; missing analytics ownership is escalated rather than filled with an ad hoc tracker.

The CTA should produce the approved lead or estimate-request event. `/api/lead-signal` remains the only CRM write path, server `requestId` remains the correlation authority, and sales follow-up follows the existing operator/CRM process. A campaign task may validate the destination and tracking plan without changing CRM, scheduling, email, or runtime behavior. Those changes require their own protected-system tasks.

This chapter governs routing only. It supplies no campaign copy, creative, media, ad budget, posting schedule, audience purchase, public claim, or implementation authorization.

## 11. Protected Systems and Hard Stops

The following surfaces require explicit bounded authorization and their current owner contracts:

- **HubSpot/CRM:** Locked REV03 owner set; all writes remain through `/api/lead-signal`. Schema, properties, pipeline, workflow, or direct client writes are hard stops without a dedicated CRM task.
- **Stripe/payment:** Server-side and webhook-backed verification remains authoritative. Checkout/session behavior, deposit calculation, secrets, and payment-state semantics are protected.
- **Scheduling/calendar:** The current model is request, operator/owner review, confirmation, and calendar ownership. Direct customer-authoritative booking is not approved.
- **Email:** Resend remains outbound and Cloudflare Email Routing remains inbound under current contracts. Secrets, sender/recipient behavior, and audit-copy behavior are protected.
- **Cloudflare/deployment:** DNS, domain, environment, build settings, secrets, redirects, and deployment configuration require explicit infrastructure authority.
- **Home Assistant runtime:** Live customer configuration, automations, dashboard YAML/cards/themes, integrations, remote access, notifications, backups, and customer-specific data require separate install tasks and approved profiles.
- **Customer data/privacy/secrets:** Customer records, private URLs, credentials, tokens, backups, recordings, access data, and environment values must not be copied into governance synthesis.
- **Planner and quote chain:** Precision Planner and the quote, agreement, payment, success/cancel, and scheduling chain are protected from deletion, bypass, reorder, or silent behavior change.
- **Quotes/SOW/agreements/change:** Packet standards do not authorize pricing engines, durable storage, signatures, emails, payment, CRM, or scheduling integration.
- **Routes/navigation/SEO:** Public routes, metadata, canonical/noindex policy, sitemap, robots, search inclusion, navigation, and redirects require bounded site/SEO authority.
- **Claims and public proof:** New public claims, statistics, reviews, proof, pricing, or capability statements require approved evidence and claim-owner review.
- **Dependencies/package lock:** New packages or lockfile changes require explicit authorization.

Hard-stop triggers include missing authority, stale or contaminated base state, equivalent open work, ambiguous owner status, unresolved same-level conflict, scope expansion, secret exposure risk, unsupported public messaging, protected-system ambiguity, destructive change without permission, or inability to perform required validation. The remedy is a task/context/work-order revision or a separate reconciliation task—not silent deviation.

## 12. Audit Findings

### Strong areas

- The core repository authority chain and ACTIVE-task gate are clear.
- Protected CRM, payment, scheduling, lead, email, and secret boundaries are conservative.
- The installer stack is comparatively coherent across platform, baseline, naming, entities/areas, dashboards, theme readiness, commissioning, handoff, and support.
- Quote/property/floorplan packet and gate standards provide substantial internal structure.
- CODEX001, OPS003/004/005/009, draft-PR practice, and closeout reporting support bounded execution.

### Conflicts and duplicate authority

- Root build requirements and narrower docs-only validation language differ; the safe current practice is to run the required build.
- OPS002 is frequently referenced but self-identifies as a draft.
- The intended OPS001 is not promoted at the expected current path.
- Runtime sources disagree on PARTIAL, ACTIVE, and LOCKED status.
- The high-authority project route list does not reflect the larger classified route surface.
- DESIGN002 REV01/REV02, DESIGN001, SOLUTION001, and INSTALL008 have revision or identifier collisions.
- CODEX001 overlaps its predecessor work-order standard.
- Catalog and manifest ownership remains unresolved.
- Local command capability includes actions repository governance forbids Codex from taking.

No conflict is resolved by this reference.

### Stale or misleading sources

The Markdown manifest’s original file count is stale and addendum-heavy. The catalog and manifest are useful indexes but not complete authority. Proposed workflow and architecture documents can be repeatedly cited without becoming active. The runtime ownership map lags later contracts. HubSpot REV01/REV02 and historical Steps remain lineage. Older assessments may predate current KAOS foundation records. Current source/route practice exceeds the compact project route list.

### Missing owners

Missing or incomplete promoted owners remain for operator workflow; cameras/recording/audio/retention/privacy; access/locks/garage; aging in place; environmental thresholds and maintenance; property-management roles/privacy; networking/cabling/PoE/backup power/resilience; procurement/substitution/inventory/installed assets; change orders; verified runtime status; analytics; capability/plugin/hook governance and usage attribution; and a canonical work-order registry.

### Runtime and current-practice uncertainty

Repository documents were audited, not live external systems. Live Home Assistant, CRM, payment, calendar, email, and deployment configuration were not verified. Capability cache or configuration does not prove invocation, connectivity, or usage reporting. The correct posture is to use current contracts as boundaries and require a future live-evidence status task before protected implementation.

## 13. Remediation Roadmap

These are candidates in required order. None is activated by this document.

| Order | Candidate | Purpose | Dependency | Risk addressed | Why separate |
|---|---|---|---|---|---|
| 1 | `PROJECTKB-RECON001` | Preserve the completed Project-layer comparison as durable, reviewable repository evidence and confirm control-layer boundaries | operator-accessible Project instructions/attachments and GOVAUTH001 | hidden or drifting ChatGPT-layer assumptions | Project-layer evidence is not safely reconstructed inside a general reference |
| 2 | `GOVAUTH-RECON001` | Reconcile OPS001/OPS002/CODEX predecessor statuses and explicit supersession | PROJECTKB reconciliation and current owner decisions | competing workflow authority | changes owner status and therefore needs focused review |
| 3 | `DOCSYNC002` | Define catalog-versus-manifest ownership and regenerate trustworthy counts/inventory | governance-owner decision | stale, duplicate, or misleading indexes | potentially broad index work should not be bundled with authority cleanup |
| 4 | `RUNTIME-STATUS002` | Reconcile PARTIAL/ACTIVE/LOCKED runtime statuses using operator-verified live evidence | protected-system owners and safe evidence plan | implementation from stale runtime posture | live verification is protected and distinct from docs synthesis |
| 5 | `ROUTE-AUTH002` | Align high-authority route governance with current SITEARCH/SEO/source evidence | current route inventory and owner review | route drift and destructive cleanup risk | may require higher-authority revision without route implementation |
| 6 | `OPS-CAPABILITY001` | Govern skills, plugins, connectors, MCPs, hooks, local config, disablement, and usage attribution | Project-layer and local capability evidence | capability mistaken for authority | platform/local policy needs its own trust and privacy review |
| 7 | `ID-NORMALIZE001` | Resolve identifier/revision collisions while preserving lineage | owner decisions for DESIGN, SOLUTION, and INSTALL families | ambiguous routing and accidental supersession | cross-domain renaming/status work requires a non-destructive plan |
| 8 | `DOMAIN-OWNER001` | Create an owner-decision plan for cameras/privacy, access, aging, environmental, property-management, infrastructure, and analytics gaps | audit findings and operator prioritization | unowned lifecycle and claim decisions | creating owners is governance design, not reference writing |
| 9 | `PROC-ASSET001` | Define procurement, substitutions, inventory, and installed-asset lifecycle | hardware, catalog, BOM, installer, and operations owners | purchase/status confusion and weak asset lineage | operational ownership crosses several mature domains |
| 10 | `CHANGEORDER001` | Define change-order ownership across estimate, SOW, agreement, and install gates | quote packet and GATES001 owners | uncontrolled scope/pricing/acceptance changes | change management deserves explicit business and document workflow decisions |

Each candidate requires its own task-register promotion, work order, branch, validation, and draft PR. Their order is sequencing guidance only; it does not change status or create a roadmap commitment.

## 14. Governance Evolution Timeline

| Sequence | Evidence-based event | Durable evidence | Effect |
|---|---|---|---|
| 1 | Repository-first governance established | core system docs and root `AGENTS.md` | moved authority away from conversation-only execution |
| 2 | Single current context adopted | `docs/system/step-current.md` | separated current control from historical Step lineage |
| 3 | Master Task Register became execution board | `docs/system/master-task-register.md` | made ACTIVE bounded tasks the normal gate |
| 4 | Codex run/task contracts matured | run contract and task-register rules | standardized prechecks, protected systems, validation, PR boundaries |
| 5 | Context efficiency and workstream routing added | OPS003, OPS004, OPS005 | reduced broad rediscovery and added owner/status routing |
| 6 | Work-order and RSI workflow standardized | CODEX001 and OPS009 | clarified one-task delivery and closeout evidence |
| 7 | Complete governance audit completed | GOVAUTH001, audit date 2026-07-13 | mapped authority, conflicts, gaps, capabilities, and load sets |
| 8 | T-GOVREF001 activation dependency merged | PR #517, confirmed merged by the work order precheck | permitted the separate bounded reference-model execution |
| 9 | GOVREF001 reference created | this document and its draft PR | supplied a readable companion without changing authority |

Unsupported dates are intentionally omitted. Historical documents remain evidence, not current controllers.

## 15. Source Directory and Glossary

### Task-Type Load Table

This is a summary of GOVAUTH001 minimum load sets, not a competing standard.

| Task type | Minimum load route |
|---|---|
| Idea review | project, guardrails, OPS004/005 pointer, relevant owner status; no execution |
| Decision promotion | project, task register, applicable decision/intake registry, domain owner |
| Hardware/BOM | core chain, ACTIVE task, HARDWARE001, PACKAGEBOM001, CATALOG001-003, solution/offering/claims |
| Solution/public marketing | core chain, task, OFFERING001, solution owners, claims, public funnel, SEO/brand |
| Website | core chain, task, SITEARCH/SEO/public funnel, brand/layout/claims, affected source |
| Home Assistant | core chain, task, INSTALL001/003/004/005, affected customer spec, automation/notification/backup as applicable |
| Automation | core chain, task, AUTOMATION001, notification owner, customer profile, installer standards |
| Dashboard | core chain, task, INSTALL006/007/010, dashboard design, customer spec |
| Quote/SOW | core chain, task, PROPERTY/FLOORPLAN, packet standards, GATES001, relevant runtime locks |
| HubSpot | full core chain, CRM task, REV03, pipeline, lead/request ID, properties/sync contracts |
| Stripe | full core chain, payment task, Stripe/protected runtime, funnel/payment contracts, webhook evidence |
| Scheduling | full core chain, scheduling task, ownership, calendar runtime, scheduling spec, request ID |
| Deployment | core chain, task, Cloudflare environment/inventory, deployment validation, secret-safety checks |
| PR review | task/work order, diff, changed files, checks, protected-system confirmation, no-merge boundary |
| Governance reconciliation | core chain, CODEX rules, OPS status set, catalog/manifest/status map, affected domain owners |

### Primary source directory

- Core authority: `docs/system/project.md`, `docs/system/guardrails.md`, `docs/system/agent.md`, `docs/system/plan.md`
- Current execution: `docs/system/step-current.md`, `docs/system/master-task-register.md`
- Codex execution: `docs/codex/CODEX_RUN_CONTRACT.md`, `docs/codex/CODEX_TASK_REGISTER_RULES.md`, `docs/codex/CODEX001_CODEX_WORK_ORDER_SPECIFICATION_REV01.md`
- Routing/status/efficiency: `docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md`, `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`, `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md`, `docs/system/OPS009_CODEX_WORKFLOW_AND_RSI_GOVERNANCE_REV01.md`
- Audit evidence: `docs/governance/GOVAUTH001_WNYHS_COMPLETE_GOVERNANCE_AUTHORITY_AUDIT_REV01.md`
- Documentation status/indexes: `docs/system/document_status_reconciliation_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`

### Glossary

- **ACTIVE task:** A complete Master Task Register record currently eligible for its bounded execution; it does not authorize adjacent work.
- **Authority:** Durable permission and constraint for a WNYHS decision or task.
- **Capability:** A tool or method that may be used only inside existing authority.
- **Current context:** The sole operational context named by `step-current.md`.
- **Domain owner:** The current standard or contract controlling a subject area.
- **Draft PR:** The required Codex delivery surface awaiting operator review; not approved for merge by its existence.
- **Historical lineage:** Earlier Steps, audits, revisions, and implementation records used for context, not current control.
- **Owner status:** The document classification—active, locked, draft, partial, proposed, historical, or unresolved—that determines how it may be used.
- **Protected system:** A runtime, customer, financial, CRM, scheduling, communication, deployment, claims, route, or data surface requiring explicit bounded authority.
- **Promotion:** Moving an approved decision into the appropriate durable owner/task record; not automatically implementation or publication.
- **RSI:** Recursive self-improvement reporting for execution efficiency; candidate lessons do not self-activate.
- **Runtime contract:** A behavior and ownership boundary for production systems; it constrains but does not independently authorize changes.
- **Vault/custom posture:** A non-public or selectively offered status governed by OFFERING001; it is not public eligibility.
- **Work order:** The repo-native bounded execution instruction under an ACTIVE task.

When in doubt, return to the authority chain, classify the primary workstream, load the current owner/status source, identify protected boundaries, and stop before inventing missing authority.
