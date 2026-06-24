# OPS004 Workstream Context Routing Standard REV01

Status: Active system governance standard
Customer-facing: No
Implementation authority: No
Task ID: T-OPS001-003

## 1. Purpose

This standard defines the project-wide routing layer that must run between user intent and ChatGPT/Codex task execution.

The routing layer answers:

- What primary workstream owns the task?
- What related workstreams may be affected?
- What current-state or status document should be loaded first?
- What owner standards apply?
- What protected systems or cross-workstream rules matter?
- What must be carried forward when switching chats?

OPS004 prevents repeated rediscovery of mature project governance by requiring task classification before discussion, prompt creation, or implementation proceeds.

## 2. Authority

OPS004 sits under the repository authority chain in:

- `/docs/system/project.md`
- `/docs/system/guardrails.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`
- `/docs/codex/CODEX_RUN_CONTRACT.md`

OPS004 is a routing standard only. It does not authorize implementation, source changes, runtime changes, page changes, protected-system changes, route changes, content changes, image work, or dependency changes by itself.

If OPS004 routing reveals a conflict with higher-authority governance, the agent must stop and request a Step, task-register, or work-order revision.

## 3. Relationship to CODEX_RUN_CONTRACT

`/docs/codex/CODEX_RUN_CONTRACT.md` defines always-on Codex execution rules.

OPS004 adds a required classification step before the contract's task-specific document selection:

1. Apply the Codex run contract.
2. Classify the task by workstream under OPS004.
3. Load the required current-state and owner documents for that workstream.
4. Confirm protected-system and cross-workstream boundaries.
5. Continue only when the active task scope allows the work.

OPS004 does not replace the run contract. It tells ChatGPT/Codex how to choose the right current-state and owner documents before execution.

## 4. Relationship to OPS003 Context Efficiency

`/docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md` requires targeted reads and avoids unnecessary broad context loading.

OPS004 supports OPS003 by replacing broad rediscovery with routing:

- classify the task first
- load the smallest governing doc set for the primary workstream
- load related-workstream docs only when the task touches those surfaces
- prefer current-state handoffs/status docs before historical docs
- report redundant context loads in the Context Efficiency Report

If context efficiency conflicts with authority enforcement, authority enforcement wins.

## 5. Workstream Classification Requirement

Before ChatGPT drafts a Codex work order, and before Codex edits files, the task must be classified into one primary workstream.

The classification must include:

- primary workstream
- related workstreams
- required current-state/status docs, if present
- required owner/governing docs
- protected systems
- forbidden scope
- validation expectations

If no existing workstream clearly fits, classify as Project Governance and stop to request a governance update before inventing a new workstream.

## 6. Primary vs Related Workstreams

The primary workstream owns the task outcome.

Related workstreams are surfaces affected by the task or required for validation.

Primary workstream rules:

- one primary workstream is required
- the primary workstream determines the first current-state/status doc to load
- the primary workstream determines the owner standard to load
- the primary workstream frames allowed scope

Related workstream rules:

- related workstreams do not expand scope by themselves
- related docs are loaded only when needed for decisions, constraints, or validation
- related-workstream concerns must be reported when they restrict the task

## 7. Required Routing Procedure

For each task:

1. Confirm the active task ID or bounded prompt-created work order.
2. Confirm the current operational context in `/docs/system/step-current.md`.
3. Classify the primary workstream.
4. Identify related workstreams.
5. Load the current-state/status doc for the primary workstream if one exists.
6. Load owner/governing docs for the primary workstream.
7. Load related-workstream docs only when the task touches those areas.
8. Check protected systems.
9. Check task scope against allowed and forbidden files.
10. Stop on missing authority, conflict, protected-system ambiguity, or scope expansion.

## 8. Required Current-State Check

Current-state or status handoff documents should be loaded before historical standards when they exist.

Current-state docs may include:

- status handoffs
- continuation handoffs
- current config inventories
- implementation-readiness plans
- current architecture decisions
- active task packs
- current document maps

If a current-state doc is missing for the primary workstream, Codex should say so and continue only if the remaining governing docs and task scope are sufficient.

## 9. Required Owner-Doc Check

Owner docs are the governing standards for a workstream.

Codex must identify and load the owner docs needed for the task before editing. Owner docs do not authorize implementation by themselves; they constrain work that is separately authorized by the active task.

If multiple owner docs conflict, the higher-authority or newer current-state document controls unless it is explicitly historical.

## 10. Required Cross-Workstream Check

Codex must check related workstreams when the task affects:

- route ownership
- SEO indexability or canonical policy
- search inclusion
- category, solution, package, or public content ownership
- visual/token standards
- image naming, storage, or alt text
- CRM, payment, scheduling, quote, referral, analytics, automation, runtime, deployment, or infrastructure boundaries

Related-workstream checks must not become unrelated implementation.

## 11. Required Task-Scope Check

Before editing, Codex must confirm:

- allowed files
- forbidden files
- created files
- target docs
- whether implementation is docs-only or source-affecting
- whether a version bump is required
- whether build is required
- whether catalog/register/manifest updates are required

If requested changes exceed the active task, Codex must stop and request a task revision.

## 12. Required Protected-System Check

Protected-system checks are mandatory whenever a task could touch:

- HubSpot / CRM
- Stripe / payment
- scheduling / calendar authority
- Lead Signal or requestId
- QRLanding attribution
- Resend/email runtime
- Cloudflare runtime or environment
- Quote/payment flow
- secrets or environment values
- public claim surfaces

If the task is docs-only, Codex must still confirm these systems were untouched.

## 13. Required Output Behavior for ChatGPT

Before generating a Codex prompt, ChatGPT should report:

1. Primary workstream.
2. Related workstreams.
3. Required current-state docs.
4. Required owner docs.
5. Protected systems.
6. Relevant routing requirements to include in the Codex prompt.
7. Any missing repo authority.

ChatGPT should not rely on chat memory where repository docs exist.

## 14. Required Output Behavior for Codex

Before editing, Codex should report:

1. Primary workstream classification.
2. Related workstreams.
3. Current-state docs loaded or missing.
4. Governing docs loaded.
5. Protected systems and forbidden scope.
6. Scope compliance.

On completion, Codex should report:

- files created and changed
- validation results
- protected-system confirmation
- whether OPS004 routing was followed
- context efficiency findings

## 15. Workstream Registry

The registry below is the minimum routing map. It should be updated additively when new workstreams or current-state docs are promoted.

### 1. Project Governance

- **Purpose:** Repository authority, task execution, context control, run contracts, catalog/manifest/register maintenance.
- **Current-state/status docs:** `/docs/system/step-current.md`, `/docs/system/master-task-register.md`, `/docs/system/document_status_reconciliation_rev01.md`.
- **Governing docs:** `/AGENTS.md`, `/docs/system/project.md`, `/docs/system/agent.md`, `/docs/system/plan.md`, `/docs/system/guardrails.md`, `/docs/codex/CODEX_RUN_CONTRACT.md`, OPS002, OPS003, OPS004.
- **Related workstreams:** All workstreams.
- **Typical tasks:** create governance standards, update run contracts, update task register, update catalog/manifest.
- **Protected-system concerns:** Do not use governance docs to authorize runtime, CRM, payment, scheduling, secrets, or source changes.

### 2. Site Architecture

- **Purpose:** Public route ownership, navigation, sitemap relationship, canonical structure, page ownership, legacy route handling.
- **Current-state/status docs:** SITEARCH001, SITEARCH002, SITEARCH003, SITEARCH004 where relevant.
- **Governing docs:** `/docs/site-architecture/` standards and current SEO handoff when indexability is implicated.
- **Related workstreams:** SEO, Search System, Category System, Solution System, Public Content System, Image System.
- **Typical tasks:** route audits, architecture decisions, redirect planning, navigation ownership.
- **Protected-system concerns:** Do not change routes, navigation, sitemap, robots, runtime, or Cloudflare config without bounded implementation authority.

### 3. Visual System

- **Purpose:** Sitewide visual language, semantic tokens, layout rhythm, page parity, typography, component styling boundaries.
- **Current-state/status docs:** DESIGN001/DESIGN002 current visual standards, page token compliance gate, visual QA implementation records as needed.
- **Governing docs:** `/docs/design-system/`, `/docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`, `/docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`, brand/page layout standards.
- **Related workstreams:** Site Architecture, Category System, Solution System, Package System, Public Content System, Image System.
- **Typical tasks:** token compliance, visual parity, page layout standard updates.
- **Protected-system concerns:** Do not hardcode colors outside semantic tokens or change source/CSS without bounded authority.

### 4. SEO

- **Purpose:** Metadata, canonical policy, index/noindex policy, robots, sitemap, structured data planning, image SEO.
- **Current-state/status docs:** SEO004 first if present; SEO001, SEO002, SEO003 as needed.
- **Governing docs:** `/docs/seo/` standards and audits; SITEARCH standards for route ownership; SEARCH001 for search implications.
- **Related workstreams:** Site Architecture, Search System, Category System, Solution System, Package System, Image System, Public Content System.
- **Typical tasks:** metadata planning, sitemap/robots policy, canonical route alignment, SEO handoff.
- **Protected-system concerns:** Do not change metadata, sitemap, robots, routes, search, or page content without bounded implementation authority.

### 5. Search System

- **Purpose:** Public search architecture, index source rules, result types, ranking, search UX planning.
- **Current-state/status docs:** SEARCH001 and any later Search UX/status plan.
- **Governing docs:** `/docs/site-architecture/SEARCH001_WNYHS_PUBLIC_SITE_SEARCH_ARCHITECTURE_AND_INDEX_PLAN_REV01.md`, SEO004 when present, site architecture docs.
- **Related workstreams:** SEO, Site Architecture, Category System, Solution System, Public Content System, Package System.
- **Typical tasks:** search planning, search index documentation, search inclusion rules.
- **Protected-system concerns:** Do not implement search, routes, indexes, analytics, or runtime APIs without bounded authority.

### 6. Category System

- **Purpose:** Category landing page structure, category ownership, featured solution relationships, category visual/media parity.
- **Current-state/status docs:** CATEGORY002, CATEGORY003, category-related planning/current-state docs.
- **Governing docs:** CATEGORY001, CATEGORY002, CATEGORY003, SITEARCH002, SEO004 where indexing applies.
- **Related workstreams:** Solution System, Package System, Visual System, SEO, Search System, Image System, Site Architecture.
- **Typical tasks:** category page standards, category asset rules, category-route planning.
- **Protected-system concerns:** Do not change category routes, page content, navigation, images, SEO, or source files without bounded authority.

### 7. Solution System

- **Purpose:** Solution object/page standards, solution catalog, solution media, problem-first solution presentation.
- **Current-state/status docs:** SOLUTION001 REV02/current solution page standard, solution catalog standards, solution media standards.
- **Governing docs:** `/docs/solution-system/`, `/docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`, solution media standards, SITEARCH and SEO docs as needed.
- **Related workstreams:** Category System, Package System, Visual System, SEO, Search System, Catalog System, Image System.
- **Typical tasks:** new solution page planning, solution object standards, solution media rules.
- **Protected-system concerns:** Do not create routes, change public copy, change images, pricing, catalog runtime, or quote behavior without bounded authority.

### 8. Package System

- **Purpose:** Package page structure, package visibility, customer-facing inclusions, package-to-solution/category relationships.
- **Current-state/status docs:** PACKAGE001 and package-related planning/current-state docs.
- **Governing docs:** package governance standards, catalog standards, SEO/site architecture docs where public visibility applies.
- **Related workstreams:** Catalog System, Solution System, Category System, SEO, Search System, Quote System.
- **Typical tasks:** package page planning, package visibility decisions, package copy standards.
- **Protected-system concerns:** Do not change package pricing/data, Stripe/payment, quote flow, public claims, or runtime data without bounded authority.

### 9. Public Content System

- **Purpose:** Static public pages, support/contact/about/our-work/trust/legal copy posture, claims safety, internal linking.
- **Current-state/status docs:** CONTENT001 remediation docs, public funnel standards, current implementation records as applicable.
- **Governing docs:** `/docs/specs/public_funnel_standards_rev01.md`, guardrails, content remediation docs, SEO and site architecture docs as needed.
- **Related workstreams:** SEO, Site Architecture, Visual System, Search System, Category System, Solution System.
- **Typical tasks:** copy audits, content remediation, support/contact/public page planning.
- **Protected-system concerns:** Public claim surfaces are protected; do not add unsupported claims or change forms/runtime behavior without bounded authority.

### 10. Fit Check System

- **Purpose:** Discovery/Fit Check flow, customer intake posture, form behavior, estimate entry path.
- **Current-state/status docs:** funnel specs and current fit/discovery implementation records where present.
- **Governing docs:** public funnel standards, main funnel contract, guardrails, Lead Signal/requestId runtime docs when form submission is implicated.
- **Related workstreams:** Estimate / Quote System, CRM / HubSpot System, Public Content System, Analytics System.
- **Typical tasks:** Fit Check copy or flow planning, discovery route audit, intake validation.
- **Protected-system concerns:** Do not change form submit logic, Lead Signal, requestId, CRM writes, quote flow, or funnel order without bounded authority.

### 11. Estimate / Quote System

- **Purpose:** Quote workspace, customer estimate packet, internal SOW packet, property model, quote preview, installer packet.
- **Current-state/status docs:** Quote system document map, quote workspace operator playbook, IMPLEMENTATION017-019 and current quote-system standards.
- **Governing docs:** `/docs/quotesystem/`, main funnel contract, protected runtime contracts when public funnel handoff is affected.
- **Related workstreams:** Floorplan System, Catalog System, Package System, CRM / HubSpot System, Stripe/payment, Scheduling System.
- **Typical tasks:** quote workspace docs, estimate packet standards, installer packet alignment.
- **Protected-system concerns:** Do not change pricing engine, payment behavior, CRM sync, durable storage, email sending, scheduling, auth, or quote runtime without bounded authority.

### 12. Floorplan System

- **Purpose:** Floorplan evidence, redraw workflow, photo analysis handoff, geometry baseline governance.
- **Current-state/status docs:** FLOORPLAN004, FLOORPLAN_QUOTE_WORKFLOW_GOVERNANCE_REV01, floorplan implementation records.
- **Governing docs:** `/docs/quotesystem/` floorplan governance and quote workspace standards.
- **Related workstreams:** Estimate / Quote System, Image System, Catalog System, Automation System.
- **Typical tasks:** floorplan evidence standards, redraw handoff docs, geometry approval gates.
- **Protected-system concerns:** Do not add uploads, computer vision, durable storage, AI redraw generation, quote automation, or protected runtime changes without bounded authority.

### 13. Referral System

- **Purpose:** Referral attribution, payout review policy, referral-aware quote/customer handling, source rules.
- **Current-state/status docs:** referral runtime/schema/SOP/policy docs.
- **Governing docs:** referral payout SOP, referral compensation policy, quote referral awareness spec, named QR/source attribution schema.
- **Related workstreams:** CRM / HubSpot System, QR/source attribution, Quote System, Public Content System.
- **Typical tasks:** referral policy docs, referral source mapping, payout review planning.
- **Protected-system concerns:** Do not change HubSpot schema/sync, payment/payout automation, public referral claims, source attribution runtime, or API payloads without bounded authority.

### 14. CRM / HubSpot System

- **Purpose:** CRM architecture, HubSpot property/pipeline contracts, lead/deal/note/task sync boundaries.
- **Current-state/status docs:** HubSpot REV03, HubSpot current config inventory, CRM pipeline architecture, runtime HubSpot contracts.
- **Governing docs:** `/docs/crm/hubspot/hubspot_kb_rev03.md`, `/docs/runtime/hubspot_sync_contract.md`, `/docs/runtime/hubspot_properties.md`, protected runtime contract.
- **Related workstreams:** Fit Check System, Estimate / Quote System, Referral System, Analytics System, Runtime System.
- **Typical tasks:** CRM docs, mapping contracts, sync audits.
- **Protected-system concerns:** HubSpot REV03 is locked; all CRM writes must go through `/api/lead-signal`; no schema, property, pipeline, workflow, or direct client write changes without explicit bounded authority.

### 15. Scheduling System

- **Purpose:** Scheduling authority, owner confirmation, calendar-event model, scheduling runtime boundaries.
- **Current-state/status docs:** scheduling ownership/runtime/spec docs and current config inventory where present.
- **Governing docs:** `/docs/runtime/google_calendar_runtime.md`, scheduling ownership/future model/spec docs, protected runtime contract.
- **Related workstreams:** Estimate / Quote System, CRM / HubSpot System, Runtime System, Public Content System.
- **Typical tasks:** scheduling architecture docs, confirmation-flow audits, calendar authority planning.
- **Protected-system concerns:** Do not introduce customer-authoritative booking, calendar writes, owner-confirmation rewrites, or scheduling runtime changes without bounded authority.

### 16. Analytics System

- **Purpose:** Measurement planning, conversion events, source attribution reporting, campaign result interpretation.
- **Current-state/status docs:** analytics planning/status docs if present; SEO/search/source attribution docs when relevant.
- **Governing docs:** runtime contracts, SEO status docs, QR/source attribution docs, privacy/legal constraints.
- **Related workstreams:** SEO, Search System, QR/source attribution, CRM / HubSpot System, Runtime System.
- **Typical tasks:** analytics planning, event naming docs, reporting scope.
- **Protected-system concerns:** Do not add trackers, change attribution payloads, modify CRM sync, expose private data, or change runtime APIs without bounded authority.

### 17. Catalog System

- **Purpose:** Catalog source of truth, master parts, package/solution/category mappings, import evidence.
- **Current-state/status docs:** catalog README, CATALOG001-003, current import evidence docs.
- **Governing docs:** `/docs/catalog/`, `/docs/catalog/imports/`, capability catalog docs when needed.
- **Related workstreams:** Package System, Solution System, Category System, Estimate / Quote System, Image System.
- **Typical tasks:** catalog governance, master parts import alignment, evidence review.
- **Protected-system concerns:** Do not change pricing, quote runtime, inventory automation, ordering automation, HubSpot, Stripe/payment, public copy, or package data without bounded authority.

### 18. Image System

- **Purpose:** Image asset standards, category/solution media, naming/storage, alt text posture, visual proof hierarchy.
- **Current-state/status docs:** IMG-CATEGORY docs, solution media/image standards, category image standards.
- **Governing docs:** image/category standards, solution media standards, visual system standards, SEO image rules.
- **Related workstreams:** Category System, Solution System, Visual System, SEO, Site Architecture, Public Content System.
- **Typical tasks:** image standard updates, asset rollout planning, alt-text governance.
- **Protected-system concerns:** Do not generate, copy, resize, route, or deploy image assets without bounded authority; do not create unsupported visual claims.

### 19. Dashboard / Interactive Experience System

- **Purpose:** Demo/dashboard/interactive experiences, Home Assistant demo framing, non-core public experience boundaries.
- **Current-state/status docs:** demo/dashboard implementation records and site architecture docs where present.
- **Governing docs:** site architecture, visual system, public funnel standards, SEO noindex/review policy.
- **Related workstreams:** Visual System, SEO, Search System, Automation System, Runtime System.
- **Typical tasks:** dashboard route audit, demo status documentation, interactive experience planning.
- **Protected-system concerns:** Do not change demo routes, public indexing, runtime integrations, customer dashboards, or automation behavior without bounded authority.

### 20. Automation System

- **Purpose:** Home Assistant automation standards, local automation posture, C.A.F.E. evaluation, automation supportability.
- **Current-state/status docs:** AUTOMATION001 and later automation status docs.
- **Governing docs:** `/docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md`.
- **Related workstreams:** Catalog System, Solution System, Dashboard / Interactive Experience System, Runtime System.
- **Typical tasks:** automation standard updates, SafePath/reference use-case planning, automation evaluation checklist.
- **Protected-system concerns:** Do not install or configure automations, customer dashboards, integrations, dependencies, runtime services, or device behavior without bounded authority.

### 21. Runtime System

- **Purpose:** Protected production runtime contracts, APIs, lead intake, requestId, email, deployment validation behavior.
- **Current-state/status docs:** protected runtime contract, current config inventories, runtime README/document maps.
- **Governing docs:** `/docs/runtime/`, HubSpot REV03, Stripe/payment contracts, scheduling runtime docs, Resend runtime docs.
- **Related workstreams:** CRM / HubSpot System, Scheduling System, Estimate / Quote System, Referral System, Infrastructure / Deployment System.
- **Typical tasks:** runtime contract docs, protected boundary audits, config inventory docs.
- **Protected-system concerns:** Runtime changes require explicit bounded authority; secrets must not be exposed.

### 22. Infrastructure / Deployment System

- **Purpose:** Cloudflare deployment, domain/hostname behavior, build/deploy validation, environment boundaries.
- **Current-state/status docs:** deployment validation docs, Cloudflare current config inventory, hotfix implementation records.
- **Governing docs:** deployment/runtime docs, Cloudflare inventory, protected runtime contract, repo build rules.
- **Related workstreams:** Runtime System, SEO, Site Architecture, Public Content System.
- **Typical tasks:** deployment docs, hostname audits, build validation standards.
- **Protected-system concerns:** Do not change Cloudflare config, environment variables, DNS, secrets, deploy settings, or package/dependency files without bounded authority.

## 16. Workstream Routing Table

| Task signal | Primary workstream | Related workstreams | First docs to load |
| --- | --- | --- | --- |
| SEO, metadata, canonical, sitemap, robots | SEO | Site Architecture, Search System | SEO004 first if present; then SEO001/SEO002/SEO003 as needed |
| Public route, navigation, legacy URL, canonical category structure | Site Architecture | SEO, Search System, Category/Solution/Public Content | SITEARCH002/SITEARCH003/SITEARCH004 as relevant |
| Search page, search index, search inclusion | Search System | SEO, Site Architecture, Category/Solution/Public Content | SEARCH001; SEO004 if present |
| Category page, category route, category media | Category System | Image, Visual, SEO, Site Architecture, Solution | CATEGORY001/002/003; image standards if assets are involved |
| Image or category asset task | Image System | Category, Visual, SEO, Site Architecture | IMG-CATEGORY standards; category/SEO/site architecture docs as needed |
| New solution page or solution object | Solution System | Visual, SEO, Category, Catalog, Search, Site Architecture | Solution page/object/media standards; SEO004; SITEARCH docs |
| Visual/CSS/token/page parity | Visual System | Site Architecture and affected page owner | DESIGN/current visual standards; page token gate |
| Package page or package standard | Package System | Catalog, Solution, SEO, Quote | PACKAGE001; catalog standards; SEO/SITEARCH if public visibility changes |
| Fit Check or discovery intake | Fit Check System | Runtime, CRM, Quote, Analytics | public funnel/main funnel contracts; runtime docs if submission changes |
| Quote workspace, estimate packet, installer packet | Estimate / Quote System | Floorplan, Catalog, CRM, Stripe/payment, Scheduling | Quote-system standards/document map/playbook |
| Floorplan evidence/redraw/photo handoff | Floorplan System | Quote, Image, Catalog | floorplan governance and quote-system docs |
| Referral source, referral policy, payout review | Referral System | CRM, Quote, QR/source attribution | referral SOP/policy/schema/spec docs |
| HubSpot/CRM mapping/sync | CRM / HubSpot System | Runtime, Fit Check, Referral, Quote | HubSpot REV03 and runtime HubSpot contracts |
| Scheduling/calendar authority | Scheduling System | Runtime, Quote, CRM | scheduling runtime/ownership/spec docs |
| Analytics/event/source reporting | Analytics System | SEO, QR/source attribution, CRM, Runtime | analytics docs if present; source attribution/runtime docs |
| Catalog/master parts/imports | Catalog System | Package, Solution, Quote | catalog README and CATALOG standards/import docs |
| Demo/dashboard/interactive experience | Dashboard / Interactive Experience System | Visual, SEO, Automation, Runtime | site architecture, visual, SEO policy docs |
| Home Assistant automation | Automation System | Catalog, Solution, Runtime | AUTOMATION001 |
| Runtime/API/requestId/email | Runtime System | CRM, Scheduling, Quote, Infrastructure | protected runtime contract and relevant runtime docs |
| Cloudflare/deploy/domain/env/build | Infrastructure / Deployment System | Runtime, SEO, Site Architecture | deployment validation and Cloudflare inventory docs |
| Governance/run contract/register/catalog/manifest | Project Governance | All affected workstreams | project/agent/plan/guardrails/run contract/OPS003/OPS004 |

## 17. New Chat Bootstrap Behavior

In a new chat, ChatGPT should not ask the user to restate mature project governance.

Before creating a Codex prompt, ChatGPT should:

1. Load or reference the Codex run contract.
2. Apply OPS004 routing.
3. Name the primary and related workstreams.
4. Name the current-state and owner docs required.
5. Include protected-system warnings only where relevant.
6. Keep the prompt compact under OPS003.

## 18. New Task Bootstrap Behavior

For each new task:

1. Identify the task ID or bounded prompt-created work order.
2. Classify the workstream before discussing implementation.
3. Confirm current-state docs.
4. Confirm owner docs.
5. Confirm task scope and forbidden scope.
6. Confirm protected systems.
7. Proceed only when the active task authorizes the work.

## 19. Governance Update Behavior

Update OPS004 additively when:

- a new workstream is promoted
- a current-state/status doc becomes canonical
- an owner standard is superseded
- a routing example repeats across tasks
- a protected-system boundary changes through higher-authority governance

Do not rewrite historical docs or redefine owner standards inside OPS004.

## 20. Context Efficiency Behavior

OPS004-compliant tasks should reduce context by:

- loading the current-state handoff first
- using owner docs instead of full historical chains
- using related-workstream docs only when touched
- reporting unnecessary or redundant context loads
- promoting repeated chat-derived routing rules into this standard

## 21. Codex Restrictions

Codex must not use OPS004 to:

- expand task scope
- create new features
- change routes
- change navigation
- change SEO implementation
- change search implementation
- change page content
- change images or assets
- change app/source/runtime files
- change HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, API, environment, secrets, dependencies, or package-lock
- bypass owner standards
- bypass protected-system stop conditions

OPS004 routes context. It does not authorize implementation.

## 22. Success Criteria

OPS004 succeeds when:

1. ChatGPT classifies tasks by workstream before generating Codex prompts.
2. Codex confirms primary and related workstreams before editing.
3. Current-state/status docs are loaded before historical rediscovery.
4. Owner docs are loaded for the primary workstream.
5. Related-workstream checks are targeted and scope-limited.
6. Protected systems are identified before execution.
7. Missing authority or conflicts cause a stop.
8. Context Efficiency Reports identify redundant context loads.
9. New chats can resume workstream-specific execution without relying on chat memory.
10. Owner standards remain authoritative for their domains.
