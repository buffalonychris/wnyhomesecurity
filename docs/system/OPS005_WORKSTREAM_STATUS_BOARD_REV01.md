# OPS005 Workstream Status Board REV01

Status: Active system governance status board
Customer-facing: No
Implementation authority: No
Task ID: T-OPS001-004

## 1. Purpose

This board records current state, completed work, outstanding work, required docs, related workstreams, protected-system concerns, and next recommended tasks for the major WNYHS workstreams.

OPS005 is documentation/governance only. It does not authorize source, route, navigation, SEO implementation, search implementation, page content, image, runtime, API, CRM, payment, scheduling, email, Cloudflare, environment, secret, dependency, or package-lock changes.

## 2. Authority

OPS005 sits under the repository authority chain in:

- `/docs/system/project.md`
- `/docs/system/guardrails.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`
- `/docs/codex/CODEX_RUN_CONTRACT.md`
- `/docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`

If OPS005 conflicts with a higher-authority document, the higher-authority document controls.

## 3. Relationship to OPS004

OPS004 answers routing questions before a task begins:

- What workstream owns this task?
- What related workstreams may be affected?
- What docs should be loaded?
- What protected systems or forbidden scope matter?

OPS005 answers current-state questions after routing:

- Where does this workstream currently stand?
- What has been completed?
- What remains outstanding?
- What docs govern the workstream?
- What related workstreams must be checked?

OPS004 routes the task. OPS005 summarizes workstream status. Neither document authorizes implementation by itself.

## 4. Status Board Usage Rules

- Load OPS005 after OPS004 classification when a task needs current-state context.
- Use the primary workstream row first.
- Check related workstream rows only when the task touches those surfaces.
- Treat this board as a status pointer, not a replacement for owner docs or task scope.
- Do not use this board to create new features or broaden an active task.
- When status is stale or incomplete, update OPS005 through a bounded governance task.

## 5. Status Update Requirements

Update this board when:

- a new current-state handoff is promoted;
- a major workstream status changes;
- an outstanding task is completed;
- a protected-system boundary changes through higher-authority governance;
- a new related-workstream dependency becomes recurring;
- OPS004 routing changes the canonical workstream set.

Updates must remain additive unless destructive authority is explicit.

## 6. Workstream Status Schema

Each workstream row uses this schema:

- Workstream title
- Status: Active / Planned / Paused / Mature / Needs Reconciliation
- Current state
- Completed work
- Outstanding work
- Required current-state docs
- Required governing docs
- Related workstreams
- Protected-system concerns
- Next recommended task
- Notes / risks

## 7. Project Governance Status

- **Workstream title:** Project Governance
- **Status:** Active
- **Current state:** Repository governance uses the current operational context, Master Task Register, Codex run contract, OPS003 context efficiency standard, OPS004 routing standard, catalog, and manifest.
- **Completed work:** CODEX run contract exists; OPS003 context efficiency exists; OPS004 workstream routing exists; document status reconciliation exists; task-register execution gates are active.
- **Outstanding work:** Keep status docs current; reduce prompt bloat through durable docs; reconcile catalog/manifest drift; maintain task status after bounded runs.
- **Required current-state docs:** `/docs/system/step-current.md`, `/docs/system/master-task-register.md`, `/docs/system/document_status_reconciliation_rev01.md`, this OPS005 board.
- **Required governing docs:** `/AGENTS.md`, `/docs/system/project.md`, `/docs/system/agent.md`, `/docs/system/plan.md`, `/docs/system/guardrails.md`, `/docs/codex/CODEX_RUN_CONTRACT.md`, OPS003, OPS004.
- **Related workstreams:** All workstreams.
- **Protected-system concerns:** Governance docs must not authorize runtime, CRM, payment, scheduling, email, Cloudflare, secrets, dependencies, source, route, or public-claim changes without a bounded task.
- **Next recommended task:** DOCSYNC001 or a bounded OPS005 refresh after the next major workstream change.
- **Notes / risks:** Catalog and manifest are addendum-heavy and need periodic reconciliation.

## 8. Site Architecture Status

- **Workstream title:** Site Architecture
- **Status:** Active
- **Current state:** Canonical category routes are implemented, category links are promoted in header/footer surfaces, and legacy flat category routes are preserved with noindex/review posture.
- **Completed work:** SITEARCH001 through SITEARCH004 complete; canonical category route creation complete; header/footer category links promoted; legacy routes preserved.
- **Outstanding work:** Future legacy redirect or retirement decisions; ongoing route classification for new pages; continued coordination with sitemap, canonical, search, and image work.
- **Required current-state docs:** SITEARCH001, SITEARCH002, SITEARCH003, SITEARCH004, SEO004 when indexability is involved.
- **Required governing docs:** `/docs/site-architecture/`, OPS004, SEO001/SEO004 for crawl policy.
- **Related workstreams:** SEO, Search System, Category System, Solution System, Public Content System, Image System, Infrastructure / Deployment System.
- **Protected-system concerns:** Do not change routes, navigation, sitemap, robots, canonical tags, redirects, or Cloudflare config without bounded authority.
- **Next recommended task:** Future legacy route redirect/retirement decision task.
- **Notes / risks:** Legacy route preservation avoids destructive cleanup but requires repeated SEO classification checks.

## 9. Visual System Status

- **Workstream title:** Visual System
- **Status:** Active
- **Current state:** DESIGN001 and DESIGN002 visual standards exist; homepage-derived visual language and token discipline are established.
- **Completed work:** Homepage visual standard established; token compliance guidance exists; public visual parity implementation records exist.
- **Outstanding work:** Ongoing parity enforcement for new or modified pages; visual QA for future public pages; continued semantic-token discipline.
- **Required current-state docs:** DESIGN001, DESIGN002 REV02, PAGE_TOKEN_COMPLIANCE_GATE_REV01, visual QA implementation records when relevant.
- **Required governing docs:** `/docs/design-system/`, `/docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`, `/docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`, brand/page layout standards.
- **Related workstreams:** Site Architecture, Category System, Solution System, Package System, Public Content System, Image System.
- **Protected-system concerns:** Do not change CSS/source/page layout or hardcode colors outside semantic tokens without bounded authority.
- **Next recommended task:** Page-specific visual QA only when a page task is active.
- **Notes / risks:** New public pages must load visual standards before implementation.

## 10. SEO Status

- **Workstream title:** SEO
- **Status:** Active
- **Current state:** SEO001, SEO002, SEO003, and SEO004 are complete. Homepage/category metadata, solution metadata, marketing/search/support metadata, canonical/noindex policy, sitemap, robots, and canonical alignment are complete. Current canonical domain is `https://www.wnyhomesecurity.com`.
- **Completed work:** Route classification, metadata planning, metadata implementation sequence, continuation handoff, canonical/noindex policy, sitemap/robots alignment.
- **Outstanding work:** Structured data plan; structured data implementation; Search Console and Bing submission; image SEO standard; internal/operator traffic exclusion; future page updates.
- **Required current-state docs:** `/docs/seo/SEO004_WNYHS_SEO_STATUS_AND_CONTINUATION_HANDOFF_REV01.md`.
- **Required governing docs:** SEO001, SEO002, SEO003, SEO004, SITEARCH docs, SEARCH001 when search inclusion applies.
- **Related workstreams:** Site Architecture, Search System, Category System, Solution System, Package System, Image System, Public Content System, Analytics System.
- **Protected-system concerns:** Do not change metadata, sitemap, robots, canonical/noindex policy, schema, route, page content, search, or image assets without bounded authority.
- **Next recommended task:** Structured data plan.
- **Notes / risks:** Future public pages need SEO intake before implementation.

## 11. Search System Status

- **Workstream title:** Search System
- **Status:** Active
- **Current state:** SEARCH001 is complete; a static public search index and functional `/search` UI have been implemented.
- **Completed work:** Search architecture and index plan; public index source; functional search UI.
- **Outstanding work:** Search result QA; future index expansion as content expands.
- **Required current-state docs:** SEARCH001; related implementation task records in the Master Task Register.
- **Required governing docs:** `/docs/site-architecture/SEARCH001_WNYHS_PUBLIC_SITE_SEARCH_ARCHITECTURE_AND_INDEX_PLAN_REV01.md`, SEO004, SITEARCH docs.
- **Related workstreams:** SEO, Site Architecture, Category System, Solution System, Public Content System, Package System, Analytics System.
- **Protected-system concerns:** Do not change search routes, index generation, UI, analytics, APIs, or page content without bounded authority.
- **Next recommended task:** Search result validation and navigation QA.
- **Notes / risks:** Search index growth depends on approved public content and route ownership.

## 12. Category System Status

- **Workstream title:** Category System
- **Status:** Active
- **Current state:** Category governance exists for category page structure, category page image/visual parity, and canonical category route architecture.
- **Completed work:** CATEGORY001, CATEGORY002, CATEGORY003; canonical category routes; category link promotion.
- **Outstanding work:** Ongoing category content parity; category image generation/review; new-category intake discipline.
- **Required current-state docs:** CATEGORY002, CATEGORY003, SITEARCH004, relevant category implementation records.
- **Required governing docs:** CATEGORY001, CATEGORY002, CATEGORY003, SITEARCH002/003/004, SEO004, DESIGN standards.
- **Related workstreams:** Solution System, Package System, Visual System, SEO, Search System, Image System, Site Architecture.
- **Protected-system concerns:** Do not change category routes, page content, images, navigation, metadata, or search inclusion without bounded authority.
- **Next recommended task:** Category image generation/review only after image task authorization.
- **Notes / risks:** Category work often touches SEO, image, route, and visual standards simultaneously.

## 13. Solution System Status

- **Workstream title:** Solution System
- **Status:** Active
- **Current state:** Solution object/page standards exist, including two-image solution page rules and solution listing/page governance.
- **Completed work:** SOLUTION001 REV02; SOLUTION002; solution catalog reconciliation; four core solution pages implemented in prior tasks.
- **Outstanding work:** Future solution expansion; solution media completion; catalog/solution mapping updates as capability validation changes.
- **Required current-state docs:** SOLUTION001 REV02, SOLUTION002, SOLUTION_CATALOG_RECONCILIATION_REV01.
- **Required governing docs:** `/docs/solution-system/`, solution object standard, solution media standard, SEO004, SITEARCH docs, DESIGN standards.
- **Related workstreams:** Category System, Package System, Visual System, SEO, Search System, Catalog System, Image System.
- **Protected-system concerns:** Do not create routes, change public copy, pricing, images, catalog data, or quote behavior without bounded authority.
- **Next recommended task:** Future solution expansion plan after approved capability/category need.
- **Notes / risks:** Avoid unsupported public claims and unvalidated capability promotion.

## 14. Package System Status

- **Workstream title:** Package System
- **Status:** Active
- **Current state:** PACKAGE001 package governance exists; package visibility and public-package copy posture have been refined in prior content tasks.
- **Completed work:** Package standard; package page/content remediation tasks; package detail visual parity records.
- **Outstanding work:** Package-to-catalog reconciliation as catalog validation matures; future package page SEO/image updates.
- **Required current-state docs:** PACKAGE001, package-related implementation records, catalog docs where package mapping applies.
- **Required governing docs:** `/docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`, catalog standards, SEO/site architecture docs.
- **Related workstreams:** Catalog System, Solution System, Category System, SEO, Search System, Estimate / Quote System.
- **Protected-system concerns:** Do not change package pricing/data, payment behavior, quote flow, catalog runtime, public claims, or package routes without bounded authority.
- **Next recommended task:** Package/catalog reconciliation only after catalog status task approval.
- **Notes / risks:** Public package copy must stay source-backed and claim-safe.

## 15. Public Content System Status

- **Workstream title:** Public Content System
- **Status:** Active
- **Current state:** Public content remediation and visual parity records exist for major public pages; public funnel standards control claims and CTA posture.
- **Completed work:** Content remediation tasks for packages, support, our work, and solution pages; public marketing visual parity passes.
- **Outstanding work:** Ongoing claim-safe copy review for future pages; verified proof/story asset gap; new-page intake discipline.
- **Required current-state docs:** CONTENT001 remediation docs, public marketing implementation records, SEO004 for indexable pages.
- **Required governing docs:** `/docs/specs/public_funnel_standards_rev01.md`, guardrails, SEO docs, site architecture docs, visual standards.
- **Related workstreams:** SEO, Site Architecture, Visual System, Search System, Category System, Solution System, Fit Check System.
- **Protected-system concerns:** Public claim surfaces are protected; do not alter forms, routes, CTAs, page content, or runtime behavior without bounded authority.
- **Next recommended task:** Verified proof/story asset governance if operator provides approved proof material.
- **Notes / risks:** Do not fabricate proof, reviews, ratings, statistics, or outcome promises.

## 16. Fit Check System Status

- **Workstream title:** Fit Check System
- **Status:** Active
- **Current state:** Fit Check/discovery remains part of the protected public funnel and lead intake path.
- **Completed work:** Public funnel standards and protected lead-signal/requestId runtime boundaries exist.
- **Outstanding work:** Any future Fit Check refinement must preserve lead-signal, requestId, CRM, analytics, and quote handoff boundaries.
- **Required current-state docs:** Public funnel standards; runtime lead/request docs if submission behavior is implicated.
- **Required governing docs:** `/docs/specs/public_funnel_standards_rev01.md`, `/docs/specs/main_funnel_contract_rev01.md`, `/docs/runtime/lead_signal_contract.md`, `/docs/runtime/request_id_contract.md`.
- **Related workstreams:** Estimate / Quote System, CRM / HubSpot System, Public Content System, Analytics System, Runtime System.
- **Protected-system concerns:** Do not change form submit logic, `/api/lead-signal`, requestId, CRM writes, funnel order, or quote handoff without bounded authority.
- **Next recommended task:** Fit Check audit only if a funnel task is activated.
- **Notes / risks:** Fit Check work quickly becomes runtime work if submission behavior changes.

## 17. Estimate / Quote System Status

- **Workstream title:** Estimate / Quote System
- **Status:** Active
- **Current state:** Local Quote Workspace, customer estimate preview, internal SOW/installer packet, structured opening inventory, operator playbook, and quote-system standards exist.
- **Completed work:** QUOTESYSTEM001-019 lineage, customer estimate packet standard, internal SOW packet standard, local workspace implementation records.
- **Outstanding work:** Production persistence, PDF generation, email sending, pricing engine, CRM sync, payment/scheduling gates, and automation remain future bounded work.
- **Required current-state docs:** QUOTE_SYSTEM_DOCUMENT_MAP_REV01, WNYHS_Quote_Workspace_Operator_Playbook_REV01, IMPLEMENTATION017-019, packet standards.
- **Required governing docs:** `/docs/quotesystem/`, main funnel contract, protected runtime contracts when handoff is involved.
- **Related workstreams:** Floorplan System, Catalog System, Package System, CRM / HubSpot System, Scheduling System, Runtime System.
- **Protected-system concerns:** Do not change pricing engine, payment behavior, CRM sync, durable storage, email sending, scheduling, auth, or quote runtime without bounded authority.
- **Next recommended task:** Quote-system status refresh before the next runtime quote task.
- **Notes / risks:** Current quote workspace is local/operator-focused, not production durable workflow.

## 18. Floorplan System Status

- **Workstream title:** Floorplan System
- **Status:** Active
- **Current state:** Floorplan capture, professional redraw, photo-analysis handoff, geometry calibration, and quote workflow governance exist.
- **Completed work:** FLOORPLAN000-004; FLOORPLAN_QUOTE_WORKFLOW_GOVERNANCE_REV01; local quote workspace floorplan handoff support.
- **Outstanding work:** No approved upload, computer vision, AI redraw, durable storage, or production quote automation.
- **Required current-state docs:** FLOORPLAN004, FLOORPLAN_QUOTE_WORKFLOW_GOVERNANCE_REV01, IMPLEMENTATION015.
- **Required governing docs:** `/docs/quotesystem/` floorplan docs and quote workspace standards.
- **Related workstreams:** Estimate / Quote System, Image System, Catalog System, Automation System.
- **Protected-system concerns:** Do not add uploads, AI redraw, image processing, durable storage, quote automation, or runtime behavior without bounded authority.
- **Next recommended task:** Floorplan evidence/status audit before any production workflow task.
- **Notes / risks:** Manual approval gates remain central.

## 19. Referral System Status

- **Workstream title:** Referral System
- **Status:** Planned
- **Current state:** Referral governance exists for source attribution, referral-aware quote context, and manual payout review policy.
- **Completed work:** Referral payout SOP; referral compensation policy; referral property mapping planning; quote referral awareness spec.
- **Outstanding work:** Referral runtime implementation, named source capture, CRM mapping approval, payout tracking, and customer-facing referral copy remain future bounded work.
- **Required current-state docs:** Referral SOP/policy docs; leadflow referral attribution runtime; named QR/source attribution schema; quote referral awareness spec.
- **Required governing docs:** `/docs/ops/referral_payout_review_sop_rev01.md`, `/docs/ops/referral_compensation_policy_rev01.md`, `/docs/runtime/leadflow_referral_attribution_runtime.md`, `/docs/runtime/named_qr_source_attribution_schema_rev01.md`.
- **Related workstreams:** CRM / HubSpot System, Estimate / Quote System, Public Content System, Analytics System.
- **Protected-system concerns:** Do not change CRM schema/sync, payment/payout automation, source attribution runtime, API payloads, or public referral copy without bounded authority.
- **Next recommended task:** Referral implementation plan only after CRM/property approval is explicit.
- **Notes / risks:** Payouts remain manual-review only; no automatic discount or payment behavior is authorized.

## 20. CRM / HubSpot System Status

- **Workstream title:** CRM / HubSpot System
- **Status:** Active
- **Current state:** HubSpot REV03 is locked and authoritative. CRM writes must go through `/api/lead-signal`; pipeline and stage IDs are locked in docs.
- **Completed work:** HubSpot REV03; current config inventory; pipeline architecture; sync/property runtime contracts.
- **Outstanding work:** Future referral-aware fields/workflows require explicit approval; CRM workflow automation remains bounded future work.
- **Required current-state docs:** `/docs/crm/hubspot/hubspot_kb_rev03.md`, hubspot current config inventory, CRM pipeline architecture, runtime HubSpot contracts.
- **Required governing docs:** HubSpot REV03, `/docs/runtime/hubspot_sync_contract.md`, `/docs/runtime/hubspot_properties.md`, `/docs/runtime/lead_signal_contract.md`, protected runtime contract.
- **Related workstreams:** Fit Check System, Estimate / Quote System, Referral System, Analytics System, Runtime System.
- **Protected-system concerns:** No schema, property, pipeline, workflow, direct client write, or bypass of `/api/lead-signal` without explicit bounded authority.
- **Next recommended task:** CRM status review only when a CRM task is active.
- **Notes / risks:** Any CRM ambiguity is a stop condition.

## 21. Scheduling System Status

- **Workstream title:** Scheduling System
- **Status:** Active
- **Current state:** Google Workspace/calendar setup exists. Scheduling MVP uses read-only availability and owner/operator confirmation.
- **Completed work:** Scheduling runtime and ownership docs; Google Workspace current config inventory.
- **Outstanding work:** Preserve pending-confirmation/operator-owned flow; no direct customer-authoritative booking unless future governance approves it.
- **Required current-state docs:** `/docs/runtime/google_calendar_runtime.md`, `/docs/runtime/scheduling_ownership.md`, Google Workspace current config inventory.
- **Required governing docs:** Scheduling runtime/ownership/future model docs, main funnel contract, protected runtime contract.
- **Related workstreams:** Estimate / Quote System, CRM / HubSpot System, Runtime System, Public Content System.
- **Protected-system concerns:** Do not introduce calendar writes, direct booking authority, confirmation rewrites, or scheduling runtime changes without bounded authority.
- **Next recommended task:** Scheduling status refresh before scheduling implementation work.
- **Notes / risks:** Scheduling remains owner-confirmed.

## 22. Analytics System Status

- **Workstream title:** Analytics System
- **Status:** Planned
- **Current state:** Cloudflare analytics exists; QR attribution runtime docs exist; internal/operator traffic exclusion remains outstanding.
- **Completed work:** QR attribution reporting docs; Cloudflare current config inventory; SEO measurement notes.
- **Outstanding work:** T-ANALYTICS001-001 Internal Traffic Exclusion Flag; source reporting interpretation; privacy-safe reporting posture.
- **Required current-state docs:** Analytics docs when present; QR attribution runtime/reporting docs; SEO004.
- **Required governing docs:** Runtime contracts, SEO status docs, QR/source attribution docs, privacy/legal constraints.
- **Related workstreams:** SEO, Search System, CRM / HubSpot System, Runtime System, Infrastructure / Deployment System.
- **Protected-system concerns:** Do not add trackers, change attribution payloads, modify CRM sync, expose private data, or change runtime APIs without bounded authority.
- **Next recommended task:** T-ANALYTICS001-001 Internal Traffic Exclusion Flag.
- **Notes / risks:** Analytics work can touch runtime, CRM, and privacy boundaries.

## 23. Catalog System Status

- **Workstream title:** Catalog System
- **Status:** Active
- **Current state:** Catalog source-of-truth standards, master parts data model, import alignment, and import evidence docs exist.
- **Completed work:** CATALOG001-003; catalog import evidence for catalog004/catalog005; runtime catalog implementation record.
- **Outstanding work:** Further master parts backfill, catalog status review, package/solution/catalog reconciliation, pricing-source discipline.
- **Required current-state docs:** `/docs/catalog/README.md`, CATALOG001-003, import evidence docs.
- **Required governing docs:** `/docs/catalog/`, `/docs/catalog/imports/`, capability catalog docs where needed.
- **Related workstreams:** Package System, Solution System, Category System, Estimate / Quote System, Image System, Automation System.
- **Protected-system concerns:** Do not change pricing, quote runtime, inventory automation, ordering automation, CRM, payment, public copy, or package data without bounded authority.
- **Next recommended task:** Catalog status reconciliation task.
- **Notes / risks:** Some catalog references still need REV03 alignment.

## 24. Image System Status

- **Workstream title:** Image System
- **Status:** Active
- **Current state:** IMG-CATEGORY001-004 and IMG-PIPELINE001 exist. OpenAI API pipeline scaffold exists but API billing/workspace is blocked. Current fallback is manual ChatGPT image generation.
- **Completed work:** Category asset production standard; category asset manifest standard; category source manifest; Home Security asset generation plan; image pipeline setup plan and scaffold.
- **Outstanding work:** Category image generation; image SEO standard; approved asset review and production placement.
- **Required current-state docs:** IMG-CATEGORY001-004, IMG-PIPELINE001, solution media/image standards.
- **Required governing docs:** `/docs/design-system/`, category image standards, solution media standards, visual standards, SEO image rules.
- **Related workstreams:** Category System, Solution System, Visual System, SEO, Site Architecture, Public Content System.
- **Protected-system concerns:** Do not generate, copy, resize, deploy, or replace images; do not call image APIs; do not weaken claim-safe language; do not add secrets without bounded authority.
- **Next recommended task:** Category image generation/review task after operator authorization.
- **Notes / risks:** Image tasks must consider category routes, visual standards, SEO/image SEO, and claim-safe language.

## 25. Dashboard / Interactive Experience System Status

- **Workstream title:** Dashboard / Interactive Experience System
- **Status:** Needs Reconciliation
- **Current state:** Valid current assets are `/home-security/dashboard` and `/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01`. `/demo` and `/5-day-demo` are non-authoritative public-site artifacts.
- **Completed work:** Home Assistant Gold dashboard demo asset exists; dashboard prep requirements standard exists.
- **Outstanding work:** EXPERIENCE001 governance; rebrand; category-specific dashboard variants; SEO classification.
- **Required current-state docs:** Dashboard/demo implementation records where present; DASHBOARD_PREP001; SITEARCH docs.
- **Required governing docs:** Site architecture docs, visual standards, public funnel standards, SEO noindex/review policy, automation standards.
- **Related workstreams:** Visual System, SEO, Search System, Automation System, Runtime System, Site Architecture.
- **Protected-system concerns:** Do not change demo routes, public indexing, runtime integrations, customer dashboards, or automation behavior without bounded authority.
- **Next recommended task:** EXPERIENCE001 dashboard/interactive experience governance.
- **Notes / risks:** Purpose is to show customers a simple unified dashboard/control experience; current public artifacts need reconciliation.

## 26. Automation System Status

- **Workstream title:** Automation System
- **Status:** Active
- **Current state:** Home Assistant-native first. C.A.F.E. is the preferred visual authoring layer for complex Home Assistant automations. Node-RED is reserved for advanced/customer-specific deployments only.
- **Completed work:** AUTOMATION001 Home Assistant automation standard.
- **Outstanding work:** Use-case-specific automation evaluation; SafePath/reference examples; supportability checklist application.
- **Required current-state docs:** `/docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md`.
- **Required governing docs:** AUTOMATION001, catalog/solution docs for hardware/capability fit.
- **Related workstreams:** Catalog System, Solution System, Dashboard / Interactive Experience System, Runtime System.
- **Protected-system concerns:** Do not install/configure automations, customer dashboards, integrations, dependencies, runtime services, or device behavior without bounded authority.
- **Next recommended task:** Automation use-case evaluation task when tied to an approved solution/package.
- **Notes / risks:** Keep automation claims and support posture conservative.

## 27. Runtime System Status

- **Workstream title:** Runtime System
- **Status:** Active
- **Current state:** Protected runtime contracts exist for lead intake, requestId, CRM sync, QRLanding, scheduling, Stripe, Resend/email, Cloudflare/email routing, and deployment.
- **Completed work:** Protected runtime contract; lead-signal contract; requestId contract; HubSpot sync/property contracts; QRLanding runtime; Resend, Stripe, scheduling, Cloudflare docs and inventories.
- **Outstanding work:** Runtime ownership map refresh; status refresh before any protected-system task; future leadflow/referral implementation only after bounded approval.
- **Required current-state docs:** `/docs/runtime/protected_runtime_contract.md`, runtime current config inventories, runtime README/document maps.
- **Required governing docs:** `/docs/runtime/`, HubSpot REV03, Stripe/payment contracts, scheduling runtime docs, Resend runtime docs.
- **Related workstreams:** CRM / HubSpot System, Scheduling System, Estimate / Quote System, Referral System, Infrastructure / Deployment System, Fit Check System.
- **Protected-system concerns:** Runtime changes require explicit bounded authority; secrets must not be exposed.
- **Next recommended task:** Runtime status refresh before next runtime implementation.
- **Notes / risks:** Runtime docs are authority for implementation boundaries, not blanket implementation permission.

## 28. Infrastructure / Deployment System Status

- **Workstream title:** Infrastructure / Deployment System
- **Status:** Active
- **Current state:** Cloudflare Pages deployment is active. Public `www` canonical is preferred. `_redirects` was fixed to remove invalid domain-level redirect. Deployment/version badge workflow remains active.
- **Completed work:** Cloudflare current config inventory; deployment validation docs; apex/www hotfix record; redirect fallback hotfix.
- **Outstanding work:** Preserve deployment/version badge workflow; future deploy validation; no dashboard/DNS/env changes without explicit authorization.
- **Required current-state docs:** Deployment validation docs, Cloudflare current config inventory, hotfix implementation records.
- **Required governing docs:** Deployment/runtime docs, Cloudflare inventory, protected runtime contract, repo build rules.
- **Related workstreams:** Runtime System, SEO, Site Architecture, Public Content System.
- **Protected-system concerns:** Do not change Cloudflare config, environment variables, DNS, secrets, deploy settings, dependencies, or package-lock without bounded authority.
- **Next recommended task:** Deployment validation only when a release or infra task is active.
- **Notes / risks:** Docs-only tasks do not require a version badge bump unless explicitly stated.

## 29. Cross-Workstream Dependency Notes

- Route work must check Site Architecture, SEO, Search, Category/Solution/Public Content ownership, and Infrastructure when redirects or deployment behavior are implicated.
- Public page work must check Public Content, Visual, SEO, Site Architecture, Search, Image, and claims guardrails.
- Category and solution work must check Category/Solution, Visual, SEO, Search, Image, Catalog, and Package where applicable.
- Quote work must check Estimate / Quote, Floorplan, Catalog, Package, CRM, Scheduling, Runtime, and payment boundaries.
- CRM, payment, scheduling, email, runtime, and Cloudflare work are protected by default and require explicit bounded authority.
- Image work must check Visual, Category/Solution ownership, SEO, and claim-safe language.

## 30. New Chat Usage Instruction

In a new chat, load:

1. `/docs/codex/CODEX_RUN_CONTRACT.md`
2. `/docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
3. this OPS005 status board when current-state context is needed
4. only the owner/current-state docs for the primary workstream and related workstreams touched by the task

Do not ask the operator to restate mature governance already stored in repository docs.

## 31. New Task Usage Instruction

For each new task:

1. Identify the active task ID or bounded prompt-created work order.
2. Classify the primary workstream under OPS004.
3. Load this board for the primary workstream status.
4. Identify related workstreams and load only needed docs.
5. Confirm allowed files, forbidden files, protected systems, and validation.
6. Stop if the task conflicts with higher-authority governance or protected-system boundaries.

## 32. Codex Restrictions

Codex must not use OPS005 to:

- expand task scope;
- create features;
- change routes, navigation, SEO, search, page content, images, source, runtime, APIs, dependencies, or package-lock;
- change CRM, payment, scheduling, Resend/email, Cloudflare, environment, or secrets;
- bypass owner docs, task-register rules, OPS004 routing, claims guardrails, or protected-system stop conditions;
- treat outstanding work as implementation approval.

## 33. Success Criteria

OPS005 succeeds when:

1. All 22 OPS004 workstreams are represented.
2. Each workstream uses the required status schema.
3. Current completed work and outstanding work are captured for major active workstreams.
4. Required current-state and governing docs are named.
5. Related workstreams and protected-system concerns are visible before future task execution.
6. New chats can bootstrap workstream status without relying on chat memory.
7. Codex remains bounded to the active task and stops on conflicts.
