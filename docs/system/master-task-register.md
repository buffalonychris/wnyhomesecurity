# Master Task Register

Status: Active
Current Operational Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
Current Context Authority: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Final-Hour Business Development Execution Unblock ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â REV01

---

## Master Task Register Governance Standard (GOV002)

- This register is the **operational execution driver** for bounded Codex task execution.
- This register does **not** override higher governance documents in `/docs/system/project.md`, `/docs/system/guardrails.md`, `/docs/system/agent.md`, `/docs/system/plan.md`, or `/docs/system/step-current.md`.
- This register operates under the single controlling context declared in `/docs/system/step-current.md`.
- Codex may execute only:
  - tasks in **Active Tasks** with `Status: ACTIVE`, or
  - explicitly bounded prompt-created tasks when allowed by higher-governance execution gates.
- No task may silently expand scope beyond its declared Allowed Scope and controlling context.

### Allowed Task Statuses

- BACKLOG
- READY
- ACTIVE
- BLOCKED
- DONE
- ARCHIVED

### Required Task Fields (Actionable Task Schema)

Every actionable task record must include:

- Task ID
- Task Name
- Status
- Category
- Controlling Context
- Purpose
- Allowed Scope
- Forbidden Scope
- Target Files
- Runtime Systems Affected
- Documentation Updates Required
- Validation Required
- Exit Criteria
- Dependencies
- Operator Decision Required

### Task Category Taxonomy (Allowed Values)

- GOV
- RUNTIME
- CRM
- PAYMENT
- EMAIL
- LEAD
- QR
- SCHED
- QA
- COPY
- FUNNEL
- HIST

### Task Lifecycle and Activation Rules

- BACKLOG and READY are non-executable preparation states.
- ACTIVE is the only executable status.
- BLOCKED requires a documented unblock condition.
- DONE requires required validation plus exit-criteria satisfaction.
- ARCHIVED preserves historical traceability and is non-executable.
- Activation to ACTIVE requires controlling-context alignment and complete required task fields.

### Current Context ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Task Record ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Codex Execution Relationship

- `step-current.md` defines the single active operational context.
- The Master Task Register defines bounded execution tasks within that context.
- Prompt-created bounded tasks are allowed only when higher-authority governance explicitly permits them.
- If request scope conflicts with the context or task schema, Codex must stop and request revision.

### Legacy/Historical Record Handling

- Historical task records are preserved for lineage and audit traceability.
- Legacy entries that predate GOV002 schema standardization are retained unless safe, bounded normalization is possible.
- No destructive rewrite of historical records is required for GOV002.

---

## Initiative Records (Non-Executable)

Initiative records group bounded tasks but are not executable task records. Codex may execute only task records promoted to `ACTIVE` in Active Tasks or explicitly bounded prompt-created work orders permitted by higher-authority governance.

### REPO001
- **Initiative ID:** REPO001
- **Initiative Name:** WNYHS Operating System Reconstruction / Knowledge Architecture Evolution
- **Status:** ACTIVE
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Coordinate the evolution from current repo-centered governance into the KAOS001 knowledge architecture and operating system.
- **Current Authorized Task:** None. `REPO001-MTR001` is DONE.
- **Lineage Reference:** `docs/audits/WNYHS_Current_Governance_Model_Assessment_REV01.md`
- **Reserved Future Task:** REPO001 follow-up work requires separate bounded task records and operator authorization.
- **Protected Boundaries:** Governance evolution only. Do not delete or move historical task records, change source/runtime files, modify protected systems, or treat chat-derived KAOS items as authority until promoted into repository docs.

### KAOS001
- **Initiative ID:** KAOS001
- **Initiative Name:** WNYHS Knowledge Architecture & Operating System
- **Status:** ACTIVE
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define the knowledge object model, registries, source classification, intake/promotion workflow, dependency map, and continuous knowledge capture layer.
- **Current Authorized Task:** None. KAOS001 is represented as a parent initiative; child work remains non-executable until separately activated.
- **Lineage Reference:** `docs/audits/WNYHS_Current_Governance_Model_Assessment_REV01.md`
- **Reserved Future Task:** KAOS registry, intake, dependency map, business process, RSI, decision, Project KB, and hook architecture work require separate bounded task records.
- **Protected Boundaries:** KAOS001 is the target knowledge architecture layer. This initiative record does not create new registries, hook docs, RSI docs, business process docs, runtime workflows, automation, or source changes.

### SOLUTION001
- **Initiative ID:** SOLUTION001
- **Initiative Name:** WNYHS Solution Page Standardization
- **Status:** ACTIVE
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Establish and apply a repeatable WNYHS solution-page system for opportunity pages using the current approved standard in `docs/solution-system/`.
- **Current Authorized Task:** None. SOLUTION001-A and SOLUTION001-B are DONE.
- **Reserved Future Task:** Future production image generation or replacement-image wiring requires a separate bounded task and operator approval.
- **Protected Boundaries:** No protected runtime systems, global navigation, unrelated public pages, pricing/business rules, semantic token definitions, or unsupported claims.

### DESIGN001
- **Initiative ID:** DESIGN001
- **Initiative Name:** WNYHS Visual Design System Standard
- **Status:** DONE
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Extract and apply the active WNYHS homepage visual system through bounded design-system governance tasks.
- **Current Authorized Task:** None. DESIGN001-A and DESIGN001-B are DONE.
- **Reserved Future Task:** No DESIGN001 lock task is authorized by DESIGN001-B.
- **Protected Boundaries:** No Homepage changes, Packages page changes, QR Landing changes, Support changes, Our Work changes, global navigation changes, semantic token definition changes, protected runtime systems, pricing/business rules, unsupported claims, UX001 work, or SOLUTION001-B locking work.

### CATEGORY-LANDING-001
- **Initiative ID:** CATEGORY-LANDING-001
- **Initiative Name:** WNYHS Category Landing Page Implementation
- **Status:** ACTIVE
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Sequence bounded implementation of WNYHS public category landing pages under CATEGORY001 category governance, CATEGORY002 landing-page structure governance, and the governed WNYHS token visual system.
- **Current Authorized Task:** None. CATEGORY-LANDING-001-A through CATEGORY-LANDING-001-E and CATEGORY-LANDING-001-A-IMAGE-ASSET-POLISH are DONE.
- **Reserved Future Task:** Dedicated CATEGORY003 image asset packages for category pages require separate bounded tasks and operator approval.
- **Protected Boundaries:** No HubSpot, Stripe/payment, scheduling, Resend/email, APIs/backend, lead-signal/requestId, quote/estimate runtime, protected operator routes, semantic token definition changes, package-lock/dependency changes, Cloudflare config changes, direct deployment, or unrelated page cleanup unless a future bounded task explicitly authorizes it.

---

## Governance Evolution Workstream (REPO001 / KAOS001)

This workstream records REPO001 / KAOS001 governance evolution tasks without treating proposed knowledge architecture as active authority before promotion.

### Workstream Notes

- This is governance evolution, not destructive reconciliation.
- Do not delete or move historical task records.
- Do not treat chat-derived KAOS items as authority until promoted into repository docs.
- REPO001 is the active reconstruction/evolution project.
- KAOS001 is the target knowledge architecture and operating system layer.
- Hooks are future architecture/specification work, not implementation in `REPO001-MTR001`.
- Business processes should become first-class governance objects in a later task.
- RSI means Recursive Self Improvement and should be formalized before automation.
- Lineage reference: `docs/audits/WNYHS_Current_Governance_Model_Assessment_REV01.md`
- Future REPO001/KAOS001 Codex tasks should include a Context Efficiency Report and follow `docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md`.

### REPO001-MTR001
- **Task ID:** REPO001-MTR001
- **Task Name:** Master Task Register Normalization
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create durable controlling task records for REPO001 / KAOS001 and the immediate task queue.
- **Allowed Scope:** Update only `docs/system/master-task-register.md` to add or normalize REPO001 / KAOS001 initiative records, this task record, future task records, lineage notes, and context-efficiency expectations.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files/secrets, dependencies, package-lock, new KAOS registry docs, hook docs, RSI docs, business process registry docs, broad register rewrite, historical record deletion, task renames, PR merge, or candidate task completion.
- **Target Files:** `docs/system/master-task-register.md`
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add/normalize REPO001 and KAOS001 initiative records; add this REPO001-MTR001 record; add immediate REPO001/KAOS001/HOOK001 task queue records; preserve lineage and scope notes.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; targeted `rg` for REPO001/KAOS001 task IDs in this register; docs lint if available.
- **Exit Criteria:** Only this Master Task Register changes; REPO001 and KAOS001 are represented; future queue tasks are non-executable; no historical records are deleted or moved; no implementation or protected-system files change; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `REPO001-MTR001` work order; `docs/system/project.md`; `docs/system/guardrails.md`; `docs/system/agent.md`; `docs/system/step-current.md`; `docs/codex/CODEX_RUN_CONTRACT.md`; `docs/codex/CODEX_TASK_REGISTER_RULES.md`; `docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md`; `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`; `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md`; `docs/audits/WNYHS_Current_Governance_Model_Assessment_REV01.md`.
- **Operator Decision Required:** None for this bounded normalization; future task activation requires operator authorization.
- **Completion Notes:** Added REPO001 and KAOS001 initiative records plus the immediate REPO001/KAOS001/HOOK001 task queue without deleting, moving, or rewriting historical task records. Future queue tasks remain BACKLOG and non-executable. No implementation files, protected systems, KAOS registry docs, hook docs, RSI docs, or business process registry docs were created.

### REPO001-REV03-001
- **Task ID:** REPO001-REV03-001
- **Task Name:** KAOS Operating System Master Control REV03
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add the REPO001 / KAOS001 Operating System Master Control REV03 planning and control document to the KAOS documentation set without promoting it above higher-authority system governance.
- **Allowed Scope:** Create `/docs/kaos/WNYHS_REPO001_KAOS_OPERATING_SYSTEM_MASTER_CONTROL_REV03.md`; add a KAOS README link if needed; add or update this bounded task record in the Master Task Register.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files/secrets, dependencies, package-lock, relationship model docs, business process registry docs, RSI register docs, decision register docs, hook docs, automation, existing governance rewrites, historical doc deletion/move/rename, unrelated future backlog completion, PR merge, or version bump.
- **Target Files:** `docs/kaos/WNYHS_REPO001_KAOS_OPERATING_SYSTEM_MASTER_CONTROL_REV03.md`; `docs/kaos/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Create the REV03 master control document; link it from the KAOS README; record this bounded task as DONE after validation.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; targeted `rg` for `KAOS-complete`, `Architecture Maturity Dashboard`, `Impact Analysis Framework`, `Task Register Efficiency Principle`, `Operating System Health Score`, and `REPO001-REV03-001` in `docs/kaos` and this register; docs lint if available.
- **Exit Criteria:** REV03 master control document exists; KAOS README links REV03; this register contains `REPO001-REV03-001`; only allowed docs changed; no implementation files or protected systems touched; no future backlog tasks marked DONE; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `REPO001-REV03-001` work order; REPO001-MTR001; KAOS001-REGISTRY001; KAOS001-INTAKE001; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Created `/docs/kaos/WNYHS_REPO001_KAOS_OPERATING_SYSTEM_MASTER_CONTROL_REV03.md` as a non-authoritative executive planning/control document for REPO001 / KAOS001 maturity, including maturity dashboard, operating principles, KAOS-complete test, roadmap, lifecycle, relationship/dependency model, impact framework, business process philosophy, workflow event architecture, task register efficiency, continuous knowledge capture, health score, vision, current roadmap, and long-term objective. Updated `/docs/kaos/README.md` with a REV03 link. No implementation files, protected systems, new relationship model docs, business process registry docs, RSI register docs, decision register docs, hook docs, automation, historical docs, version files, or unrelated future backlog task statuses were changed.

### KAOS001-REGISTRY001
- **Task ID:** KAOS001-REGISTRY001
- **Task Name:** Knowledge Object Schema and Registry
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define object types, required fields, status labels, owner docs, source links, and promotion states for KAOS001 knowledge objects.
- **Allowed Scope:** Create `/docs/kaos/README.md`, `/docs/kaos/KAOS001_KNOWLEDGE_OBJECT_SCHEMA_REV01.md`, and `/docs/kaos/KAOS001_KNOWLEDGE_OBJECT_REGISTRY_REV01.md`; update this task status only.
- **Forbidden Scope:** No source/runtime changes, protected-system changes, automation, intake workflow docs, business process registry docs, RSI register docs, decision register docs, dependency map docs, hook docs, broad register rewrite, historical deletion, unrelated task status changes, or candidate task completion.
- **Target Files:** `docs/kaos/README.md`; `docs/kaos/KAOS001_KNOWLEDGE_OBJECT_SCHEMA_REV01.md`; `docs/kaos/KAOS001_KNOWLEDGE_OBJECT_REGISTRY_REV01.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Create the initial KAOS documentation folder and the REV01 Knowledge Object schema and registry foundation; update this task status.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; targeted `rg` for `KAOS001-REGISTRY001`, `Knowledge Object`, `source_classification`, `promotion_recommendation`, `KAOS-RSI`, `KAOS-BPROC`, and `KAOS-DEC` in `docs/kaos` and this register; docs lint if available.
- **Exit Criteria:** KAOS schema exists; KAOS registry foundation exists; only allowed docs changed; no intake workflow, RSI register, business process registry, decision register, dependency map, hook docs, historical doc movement, or future backlog completion; validation passes; draft PR is opened without merge.
- **Dependencies:** REPO001-MTR001; DOCSYNC ownership decision as applicable.
- **Operator Decision Required:** None for this bounded REV01 foundation; later KAOS records and related registries require separate task activation.
- **Completion Notes:** Created `/docs/kaos/` with the KAOS001 README, Knowledge Object Schema REV01, and Knowledge Object Registry REV01. Defined object types, required fields, relationship fields, source classifications, authority levels, status values, promotion recommendations, validation expectations, and prohibited behavior. Seeded registry namespaces only; no historical object import, intake workflow, business process registry, RSI register, decision register, dependency map, hook docs, source/runtime changes, or protected-system changes were made.

### KAOS001-INTAKE001
- **Task ID:** KAOS001-INTAKE001
- **Task Name:** Intake and Promotion Workflow
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define how chat-derived, audit-derived, runtime-derived, and business-process knowledge becomes durable repository knowledge.
- **Allowed Scope:** Create `/docs/kaos/KAOS001_INTAKE_AND_PROMOTION_WORKFLOW_REV01.md`; update `/docs/kaos/README.md`; update this task status and completion record only.
- **Forbidden Scope:** No runtime/source changes, protected-system changes, direct automation, deletion of historical records, promotion of chat-derived items without documented criteria, business process registry docs, RSI register docs, decision register docs, dependency map docs, hook docs, future task activation, broad register rewrite, or historical doc movement.
- **Target Files:** `docs/kaos/KAOS001_INTAKE_AND_PROMOTION_WORKFLOW_REV01.md`; `docs/kaos/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Create the KAOS intake and promotion workflow REV01; update the KAOS README link; update this task record.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; targeted `rg` for `Existing Object Check`, `Reconsideration Check`, `Impact Analysis`, `system_interdependencies`, `downstream_impacts`, `data_dependencies`, `ripple_risks`, `Promotion Decision`, and `KAOS001-INTAKE001` in `docs/kaos` and this register; docs lint if available.
- **Exit Criteria:** Intake workflow exists; source channels, lifecycle, existing-object check, reconsideration check, impact analysis fields, classification, promotion decisions, routing rules, task creation rules, validation rules, intake template, prohibited behavior, and future hook relationship are documented with clear authority boundaries; only allowed docs changed; no runtime/source changes, protected-system changes, business process registry, RSI register, decision register, dependency map, hook docs, automation, historical deletion/rename, or future backlog completion; validation passes; draft PR is opened without merge.
- **Dependencies:** KAOS001-REGISTRY001.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Created `/docs/kaos/KAOS001_INTAKE_AND_PROMOTION_WORKFLOW_REV01.md` defining the manual governed KAOS intake lifecycle, non-authority rule, source channels, existing-object check, reconsideration check, impact analysis, classification, promotion decisions, routing rules, task creation rules, validation rules, intake record template, prohibited behavior, and future HOOK001 relationship without implementing hooks or automation. Updated `/docs/kaos/README.md` to link the workflow. No source/runtime files, protected systems, business process registry docs, RSI register docs, decision register docs, dependency map docs, hook docs, historical docs, or future backlog task statuses were changed.

### KAOS001-DEPMAP001
- **Task ID:** KAOS001-DEPMAP001
- **Task Name:** Relationship & Dependency Model
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define the canonical KAOS relationship language used to connect Knowledge Objects, support impact analysis, route future tasks, and prepare later process, RSI, hook, and graph work without implementing those future systems.
- **Allowed Scope:** Create `/docs/kaos/KAOS001_RELATIONSHIP_AND_DEPENDENCY_MODEL_REV01.md`; update `/docs/kaos/README.md`; update only this task record in the Master Task Register.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files/secrets, dependencies, package-lock, business process registry docs, RSI register docs, decision register docs, hook docs, graph visualization files, automation, historical deletion/move/rename, broad governance rewrites, unrelated future task status changes, PR merge, or version bump.
- **Target Files:** `docs/kaos/KAOS001_RELATIONSHIP_AND_DEPENDENCY_MODEL_REV01.md`; `docs/kaos/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Create the relationship/dependency model; link it from the KAOS README; record this task as DONE after validation.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; targeted `rg` for `Relationship & Dependency Model`, `parent_authority`, `depends_on`, `required_by`, `affected_by`, `Impact Analysis Mapping`, `Relationship Quality Levels`, `R5: Automation-ready`, and `KAOS001-DEPMAP001` in `docs/kaos` and this register; docs lint if available.
- **Exit Criteria:** Relationship model exists; README links the model; canonical relationship types, impact analysis mapping, relationship templates, WNYHS example maps, relationship quality levels, prohibited behavior, and future use boundaries are documented; only allowed docs changed; no business process registry, RSI register, decision register, hook docs, graph visualization files, automation, runtime/source files, protected systems, historical docs, version files, or unrelated future backlog task statuses changed; validation passes; draft PR is opened without merge.
- **Dependencies:** KAOS001-REGISTRY001; KAOS001-INTAKE001; REPO001-REV03-001; OPS003; OPS004; OPS005; current governance authority chain; prompt-created bounded `KAOS001-DEPMAP001` work order.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Created `/docs/kaos/KAOS001_RELATIONSHIP_AND_DEPENDENCY_MODEL_REV01.md` defining relationship categories, canonical relationship types, dependency-vs-relationship boundaries, impact analysis mapping, relationship record templates, object-level relationship blocks, WNYHS example maps, relationship quality levels, prohibited behavior, and future-use boundaries. Updated `/docs/kaos/README.md` to link the model. No source/runtime files, protected systems, business process registry docs, RSI register docs, decision register docs, hook docs, graph visualization files, automation, historical docs, version files, or unrelated future task statuses were changed.

### KAOS001-BPROC001
- **Task ID:** KAOS001-BPROC001
- **Task Name:** Business Process Registry
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Promote business processes to first-class governance objects with owners, boundaries, inputs, outputs, and protected systems.
- **Allowed Scope:** Create the docs-only KAOS001 Business Process Registry foundation; update the KAOS README link; update only this task record in the Master Task Register.
- **Forbidden Scope:** No runtime/source changes, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files/secrets, dependencies, package-lock, process automation, customer workflow rewrites, historical deletion/move/rename, RSI register docs, decision register docs, hook docs, graph visualization files, unrelated future task status changes, PR merge, or version bump.
- **Target Files:** `docs/kaos/KAOS001_BUSINESS_PROCESS_REGISTRY_REV01.md`; `docs/kaos/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Create the Business Process Registry REV01; link it from the KAOS README; record this task as DONE after validation.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; targeted `rg` for `Business Process Registry`, `PROCESS-LEAD001`, `PROCESS-QUOTE001`, `PROCESS-INSTALL001`, `PROCESS-CERT001`, `BP-L7`, `KAOS-complete`, `protected systems touched`, and `KAOS001-BPROC001` in `docs/kaos` and this register; docs lint if available.
- **Exit Criteria:** Business Process Registry exists; README links the registry; process schema, lifecycle, relationship integration, impact analysis, seed candidate map, artifact types, protected process rules, maturity model, record template, prohibited behavior, and future-use boundaries are documented; seed processes remain candidates only; only allowed docs changed; no automation, runtime/source files, protected systems, historical docs, version files, RSI register, decision register, hook docs, or unrelated future task statuses changed; validation passes; draft PR is opened without merge.
- **Dependencies:** KAOS001-REGISTRY001; KAOS001-INTAKE001; KAOS001-DEPMAP001; REPO001-REV03-001; OPS003; OPS004; OPS005; current governance authority chain; prompt-created bounded `KAOS001-BPROC001` work order.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Created `/docs/kaos/KAOS001_BUSINESS_PROCESS_REGISTRY_REV01.md` defining business processes as first-class KAOS Knowledge Objects, including process definition, required schema fields, lifecycle stages, relationship integration, four-question impact analysis, seed candidate process map, artifact types, protected process rules, BP-L0 through BP-L7 maturity model, record template, prohibited behavior, and future-use boundaries. Updated `/docs/kaos/README.md` to link the registry. Seed processes remain `Candidate` only and are not active operating authority. No source/runtime files, protected systems, automation, HubSpot, Stripe/payment, scheduling, quote/catalog/dashboard behavior, RSI register docs, decision register docs, hook docs, historical docs, version files, or unrelated future task statuses were changed.

### KAOS-BP001
- **Task ID:** KAOS-BP001
- **Task Name:** Business Process Candidate Intake and Operator Review Structure
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add repository governance structure for WNYHS business-process candidate intake, operator review, approval, revision, supersession, deprecation, and retirement before any candidate process becomes active KAOS authority.
- **Allowed Scope:** Create `/docs/kaos/business-processes/README.md`, `/docs/kaos/business-processes/BP_REVIEW_LIFECYCLE_STANDARD_REV01.md`, `/docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`, and `/docs/kaos/business-processes/BP_OPERATOR_REVIEW_TEMPLATE.md`; update only this bounded task record in the Master Task Register; record that WNYHS BP001A-BP001K artifacts remain candidate-only and pending operator review.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files/secrets, dependencies, package-lock, process approval, Active KAOS Rule activation, SOP creation, QA spec creation, hook spec creation, Codex prompt creation, full BP001A-BP001K artifact import, automation, production QA, historical deletion/move/rename, unrelated future task status changes, future backlog task completion, PR merge, or version bump.
- **Target Files:** `docs/kaos/business-processes/README.md`; `docs/kaos/business-processes/BP_REVIEW_LIFECYCLE_STANDARD_REV01.md`; `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`; `docs/kaos/business-processes/BP_OPERATOR_REVIEW_TEMPLATE.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only governance structure.
- **Documentation Updates Required:** Create the business-process candidate review directory and documents; add this task record because it was missing; mark the task DONE only after validation; do not mark future KAOS-BP tasks DONE.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; docs-related checks already present in package scripts if available and appropriate; targeted `rg` for lifecycle statuses, BP001A-BP001K package status, no approved process rules, and `KAOS-BP001`.
- **Exit Criteria:** Business-process review directory exists; lifecycle statuses Candidate, Needs Operator Review, Operator Revision Requested, Approved Candidate, Active KAOS Rule, Superseded, Deprecated, and Retired are defined; required metadata and operator review actions are documented; intake register records WNYHS BP001A-BP001K as Candidate Package Received / Pending Review; operator review template exists; this register contains `KAOS-BP001`; no business process is approved; no Active KAOS Rule is created; no SOP, QA, or hook spec is created; only allowed files changed; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `KAOS-BP001` work order; KAOS001-BPROC001; KAOS001-INTAKE001; KAOS001-DEPMAP001; HOOKCAT001; CODEX001; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge. Future individual business-process review, approval, SOP, QA, hook, runtime, or automation work requires separate bounded task authorization.
- **Completion Notes:** Created `/docs/kaos/business-processes/` with a README, lifecycle standard, initial candidate intake register, and operator review template. The lifecycle standard defines Candidate, Needs Operator Review, Operator Revision Requested, Approved Candidate, Active KAOS Rule, Superseded, Deprecated, and Retired statuses; required metadata; operator actions; promotion requirements; protected-system review; and prohibited behavior. The intake register records the external WNYHS BP001A-BP001K package as `Candidate Package Received / Pending Review` and states that no process rules are approved and no Active KAOS Rule exists. No SOPs, QA specs, hook specs, Codex prompts, source/runtime/customer-facing files, protected systems, version files, dependencies, package-lock, production QA, or future backlog task completions were changed or created.

### KAOS001-RSI001
- **Task ID:** KAOS001-RSI001
- **Task Name:** RSI Register and Intake Model
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define Recursive Self Improvement meaning, schema, candidate types, lifecycle, maturity, seed candidate map, owner path, and promotion boundaries before any automation.
- **Allowed Scope:** Create `/docs/kaos/KAOS001_RECURSIVE_SELF_IMPROVEMENT_REGISTER_REV01.md`; update `/docs/kaos/README.md`; update only this task record in the Master Task Register.
- **Forbidden Scope:** No automation, runtime/source changes, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files/secrets, dependencies, package-lock, Sites configuration, Playwright installation, hook docs, graph visualization files, broad historical RSI import, historical deletion/move/rename, unrelated future task status changes, PR merge, or version bump.
- **Target Files:** `docs/kaos/KAOS001_RECURSIVE_SELF_IMPROVEMENT_REGISTER_REV01.md`; `docs/kaos/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Create the Recursive Self Improvement Register REV01; link it from the KAOS README; record this task as DONE after validation.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; targeted `rg` for `Recursive Self Improvement`, `RSI-SITEQA001`, `RSI-SITEQA002`, `RSI-CLAIMS001`, `RSI-MTR001`, `RSI-L7`, `KAOS001-RSI001`, and `Prohibited Behavior` in `docs/kaos` and this register; docs lint if available.
- **Exit Criteria:** RSI Register exists; README links the register; RSI purpose, definition, candidate types, record schema, lifecycle, intake rules, impact analysis, maturity levels, seed candidate map, prohibited behavior, and future-use boundaries are documented; seed candidates remain `Candidate` only; only allowed docs changed; no automation, Playwright installation, Sites configuration, runtime/source files, protected systems, hook docs, graph visualization files, historical docs, version files, or unrelated future task statuses changed; validation passes; draft PR is opened without merge.
- **Dependencies:** KAOS001-REGISTRY001; KAOS001-INTAKE001; KAOS001-DEPMAP001; KAOS001-BPROC001; KAOS001-DECISION001; REPO001-REV03-001; OPS003; OPS004; OPS005; current governance authority chain; prompt-created bounded `KAOS001-RSI001` work order.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Created `/docs/kaos/KAOS001_RECURSIVE_SELF_IMPROVEMENT_REGISTER_REV01.md` defining Recursive Self Improvement as a candidate improvement loop with candidate types, required schema, lifecycle, intake rules, four-question impact analysis, RSI-L0 through RSI-L7 maturity, seed candidate map, record template, prohibited behavior, and future-use boundaries. Updated `/docs/kaos/README.md` to link the register. Seed RSI entries remain `Candidate` only and are not active authority. No source/runtime files, protected systems, automation, Playwright installation, Sites configuration, HubSpot, Stripe/payment, scheduling, quote/catalog/dashboard/SEO behavior, hook docs, graph visualization files, historical docs, version files, or unrelated future task statuses were changed.

### KAOS001-DECISION001
- **Task ID:** KAOS001-DECISION001
- **Task Name:** Decision Register
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the KAOS001 Decision Register foundation for capturing, classifying, relating, and promoting WNYHS decision records and decision candidates without creating new business decisions or implementation authority.
- **Allowed Scope:** Create `/docs/kaos/KAOS001_DECISION_REGISTER_REV01.md`; update `/docs/kaos/README.md`; update only this task record in the Master Task Register.
- **Forbidden Scope:** No source/runtime changes, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files/secrets, dependencies, package-lock, RSI register docs, hook docs, graph visualization files, automation, historical decision import, broad historical classification, destructive reconciliation, historical deletion/move/rename, unrelated future task status changes, PR merge, or version bump.
- **Target Files:** `docs/kaos/KAOS001_DECISION_REGISTER_REV01.md`; `docs/kaos/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Create the Decision Register REV01; link it from the KAOS README; record this task as DONE after validation.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; targeted `rg` for `Decision Register`, `DECISION-KAOS001`, `DECISION-CODEX001`, `DECISION-BPROC001`, `DECISION-CATALOG001`, `Existing Decision Check`, `Protected Decision Rules`, and `KAOS001-DECISION001` in `docs/kaos` and this register; docs lint if available.
- **Exit Criteria:** Decision Register exists; README links the register; decision purpose, definition, types, schema, lifecycle, existing-decision check, impact analysis, protected decision rules, authority rules, seed candidate decision map, record template, prohibited behavior, and future-use boundaries are documented; seed decisions remain candidates only; only allowed docs changed; no automation, runtime/source files, protected systems, historical docs, version files, RSI register, hook docs, graph visualization files, or unrelated future task statuses changed; validation passes; draft PR is opened without merge.
- **Dependencies:** KAOS001-REGISTRY001; KAOS001-INTAKE001; KAOS001-DEPMAP001; KAOS001-BPROC001; REPO001-REV03-001; OPS003; OPS004; OPS005; current governance authority chain; prompt-created bounded `KAOS001-DECISION001` work order.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Created `/docs/kaos/KAOS001_DECISION_REGISTER_REV01.md` defining decisions as first-class KAOS Knowledge Objects, including decision definition, decision types, required schema, lifecycle stages, existing-decision check, four-question impact analysis, protected decision rules, authority rules, seed candidate decision map, record template, prohibited behavior, and future-use boundaries. Updated `/docs/kaos/README.md` to link the register. Seed decisions remain `Candidate` only and are not active authority. No source/runtime files, protected systems, automation, HubSpot, Stripe/payment, scheduling, quote/catalog/dashboard/SEO behavior, RSI register docs, hook docs, graph visualization files, historical docs, version files, or unrelated future task statuses were changed.

### EVENT001
- **Task ID:** EVENT001
- **Task Name:** Workflow Event Architecture
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the docs-only KAOS workflow event architecture foundation defining immutable workflow events, canonical event types, event records, review levels, KAOS routing relationships, example flows, and prohibited behavior before any hook or automation work.
- **Allowed Scope:** Create `/docs/kaos/EVENT001_WORKFLOW_EVENT_ARCHITECTURE_REV01.md`; update `/docs/kaos/README.md`; update only this `EVENT001` task record in the Master Task Register.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files/secrets, dependencies, package-lock, hook implementation, hook docs except future references, automation, Playwright installation, Sites configuration, graph visualization files, broad governance rewrites, historical deletion/move/rename, unrelated future task status changes, PR merge, or version bump.
- **Target Files:** `docs/kaos/EVENT001_WORKFLOW_EVENT_ARCHITECTURE_REV01.md`; `docs/kaos/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only governance architecture.
- **Documentation Updates Required:** Create the Workflow Event Architecture REV01; link it from the KAOS README; add and complete this bounded task record after validation.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; targeted `rg` for `Workflow Event Architecture`, `Event vs Hook`, `TASK_ACTIVATED`, `PR_MERGED`, `DEPLOYMENT_VERIFIED`, `MAIN_SYNC_COMPLETED`, `RSI_CANDIDATE_IDENTIFIED`, and `EVENT001` in `docs/kaos` and this register; docs lint if available.
- **Exit Criteria:** Workflow Event Architecture exists; README links the architecture; this register contains `EVENT001`; event purpose, event definition, event-vs-hook distinction, categories, canonical event types, event record schema, lifecycle, review levels, event-to-KAOS routing model, example flows, prohibited behavior, and future use are documented; only allowed docs changed; no source/runtime files, protected systems, hook implementation, automation, Playwright installation, Sites configuration, graph visualization files, historical docs, version files, or unrelated future task statuses changed; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `EVENT001` work order; REPO001-REV03-001; KAOS001-REGISTRY001; KAOS001-INTAKE001; KAOS001-DEPMAP001; KAOS001-BPROC001; KAOS001-DECISION001; KAOS001-RSI001; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Created `/docs/kaos/EVENT001_WORKFLOW_EVENT_ARCHITECTURE_REV01.md` defining workflow events as immutable facts, distinct from hooks, automation, review, and evidence. Defined event categories, canonical event types, event record schema, lifecycle stages, review levels, future event-to-KAOS routing, example flows, prohibited behavior, and future-use boundaries. Updated `/docs/kaos/README.md` to link the architecture. No source/runtime files, protected systems, hook implementation, automation, Playwright installation, Sites configuration, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, quote/catalog/dashboard/SEO behavior, graph visualization files, historical docs, version files, or unrelated future task statuses were changed.

### KAOS001-PROJECT-KB001
- **Task ID:** KAOS001-PROJECT-KB001
- **Task Name:** Project KB Alignment Pack
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Produce a compact Project KB replacement set aligned to active repository authority.
- **Allowed Scope:** Future docs-only Project KB alignment pack after activation.
- **Forbidden Scope:** No source/runtime changes, protected-system changes, repository authority bypass, Project KB as direct Codex implementation authority, historical deletion, or broad governance rewrite.
- **Target Files:** Future scoped KAOS/Project KB documentation only.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Future Project KB alignment documentation and related register/catalog updates if activated.
- **Validation Required:** Future docs diff, traceability grep, and no-implementation-file verification.
- **Exit Criteria:** Project KB alignment pack references active repo authority and excludes unsupported prompt-only authority.
- **Dependencies:** KAOS001-INTAKE001; KAOS001-DEPMAP001; REPO001-DOCSYNC001.
- **Operator Decision Required:** Approve Project KB replacement scope before activation.

### REPO001-DOCSYNC001
- **Task ID:** REPO001-DOCSYNC001
- **Task Name:** Catalog / Manifest Ownership Decision
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Decide curated catalog vs exhaustive manifest roles and update rules for REPO001/KAOS001 governance work.
- **Allowed Scope:** Future docs-only ownership decision and bounded catalog/manifest rule updates after activation.
- **Forbidden Scope:** No source/runtime changes, protected-system changes, document deletion, document renaming, document consolidation, broad manifest rewrite, or candidate task completion.
- **Target Files:** Future scoped governance docs; `docs/DOCUMENT_CATALOG.md` and `docs/MARKDOWN_MANIFEST.md` only if activated and explicitly scoped.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Future catalog/manifest ownership rule and related register updates if activated.
- **Validation Required:** Future docs diff, traceability grep, and no-implementation-file verification.
- **Exit Criteria:** Future tasks can determine catalog and manifest update responsibility.
- **Dependencies:** Existing DOCSYNC001; REPO001-MTR001.
- **Operator Decision Required:** Approve relationship to existing DOCSYNC001 before activation.

### REPO001-DOCSTATUS002
- **Task ID:** REPO001-DOCSTATUS002
- **Task Name:** Proposed / Superseded Document Classification
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Classify proposed, superseded, duplicate, and unknown governance docs without deletion.
- **Allowed Scope:** Future docs-only classification work after activation.
- **Forbidden Scope:** No source/runtime changes, protected-system changes, document deletion, document renaming, destructive consolidation, historical audit rewrites, or candidate task completion.
- **Target Files:** Future scoped governance docs only.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Future proposed/superseded classification notes and related register/catalog updates if activated.
- **Validation Required:** Future docs diff, traceability grep, no-delete/no-rename verification, and no-implementation-file verification.
- **Exit Criteria:** Candidate governance docs have explicit non-destructive status labels.
- **Dependencies:** REPO001-DOCSYNC001; existing DOCSTATUS002.
- **Operator Decision Required:** Approve relationship to existing DOCSTATUS002 before activation.

### REPO001-OPS001-PROMOTE
- **Task ID:** REPO001-OPS001-PROMOTE
- **Task Name:** Operator Workflow Promotion or Supersession Decision
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Decide whether OPS001 becomes active, is superseded, or remains evidence.
- **Allowed Scope:** Future docs-only promotion/classification decision after activation.
- **Forbidden Scope:** No source/runtime changes, protected-system changes, direct workflow implementation, historical deletion, broad governance rewrite, or candidate task completion.
- **Target Files:** Future scoped governance docs only.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Future OPS001 promotion/supersession notes and related register/catalog updates if activated.
- **Validation Required:** Future docs diff, traceability grep, and no-implementation-file verification.
- **Exit Criteria:** OPS001 status is decided and recorded without destructive cleanup.
- **Dependencies:** REPO001-DOCSTATUS002.
- **Operator Decision Required:** Approve OPS001 promotion, supersession, or evidence-only classification before activation.

### REPO001-RUNTIME-MAP001
- **Task ID:** REPO001-RUNTIME-MAP001
- **Task Name:** Runtime Owner Map Refresh
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Refresh runtime ownership map after inventories and source/referral docs expanded.
- **Allowed Scope:** Future docs-only runtime ownership map refresh after activation.
- **Forbidden Scope:** No runtime implementation, source changes, protected-system behavior changes, secrets exposure, environment changes, Cloudflare config changes, HubSpot/Stripe/Scheduling/Resend changes, historical deletion, or candidate task completion.
- **Target Files:** Future scoped runtime documentation only.
- **Runtime Systems Affected:** None until separately authorized; documentation only.
- **Documentation Updates Required:** Future runtime owner map updates and related register/catalog updates if activated.
- **Validation Required:** Future docs diff, traceability grep, protected-system boundary verification, and no-implementation-file verification.
- **Exit Criteria:** Runtime ownership map reflects current protected-system docs without changing runtime behavior.
- **Dependencies:** Runtime current inventories; protected runtime contract; KAOS001-DEPMAP001 as applicable.
- **Operator Decision Required:** Approve refresh scope before activation.

### HOOK001
- **Task ID:** HOOK001
- **Task Name:** KAOS Hook Subscription Architecture
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define the KAOS Hook Subscription Architecture foundation for future governed subscribers to Codex lifecycle events and WNYHS workflow events before any implementation.
- **Allowed Scope:** Create `docs/kaos/HOOK001_KAOS_HOOK_SUBSCRIPTION_ARCHITECTURE_REV01.md`; update `docs/kaos/README.md`; update this HOOK001 task record only.
- **Forbidden Scope:** No hook implementation, hooks.json, config.toml hook configuration, hook scripts, automation, runtime/source changes, protected-system changes, new integrations, scheduler setup, event processing, Playwright installation, Sites configuration, dependency changes, package-lock changes, historical deletion, unrelated task status changes, future backlog task completion, PR merge, or site version bump.
- **Target Files:** `docs/kaos/HOOK001_KAOS_HOOK_SUBSCRIPTION_ARCHITECTURE_REV01.md`; `docs/kaos/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add the Hook Subscription Architecture document, link it from the KAOS README, and record HOOK001 completion here.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `rg -n "KAOS Hook Subscription Architecture|Event vs Hook|SessionStart|UserPromptSubmit|PreToolUse|PermissionRequest|PostToolUse|Stop|HOOK-KAOS-INTAKE001|HOOK-PROTECTED001|HOOK001" docs/kaos docs/system/master-task-register.md`; docs lint if available.
- **Exit Criteria:** Hook Subscription Architecture exists; README links the architecture; Codex hook events and candidate subscriptions are mapped; trust/safety, protected-system rules, maturity levels, and prohibited behavior are documented; only allowed docs changed; no hook implementation, automation, runtime/source files, protected systems, hooks.json, hook scripts, Playwright, Sites, dependencies, package-lock, or future backlog task statuses changed; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded HOOK001 work order; EVENT001; KAOS001-REGISTRY001; KAOS001-INTAKE001; KAOS001-DEPMAP001; KAOS001-BPROC001; KAOS001-DECISION001; KAOS001-RSI001; REPO001-REV03-001.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Created `/docs/kaos/HOOK001_KAOS_HOOK_SUBSCRIPTION_ARCHITECTURE_REV01.md` as docs-only KAOS architecture. The document distinguishes events, hooks, automation, candidate outputs, operator review, and repository promotion; maps Codex hook events including SessionStart, UserPromptSubmit, PreToolUse, PermissionRequest, PostToolUse, PreCompact, PostCompact, Stop, SubagentStart, and SubagentStop; defines hook categories, review levels, candidate subscriptions, allowed/prohibited outputs, trust and safety rules, protected-system rules, maturity levels, example flows, prohibited behavior, and future use. Updated the KAOS README link. No hooks were implemented, no hooks.json or hook scripts were created, no automation was configured, no Playwright or Sites work was performed, no source/runtime files or protected systems were changed, and no future backlog tasks were marked DONE.

### HOOKCAT001
- **Task ID:** HOOKCAT001
- **Task Name:** KAOS Hook Catalog
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the docs-only KAOS Hook Catalog foundation that converts the HOOK001 Hook Subscription Architecture into a governed catalog of candidate hook objects with event subscriptions, inputs, allowed outputs, prohibited outputs, priority, protected-system sensitivity, owner documents, maturity, and first promotion recommendations.
- **Allowed Scope:** Create `/docs/kaos/HOOKCAT001_KAOS_HOOK_CATALOG_REV01.md`; update `/docs/kaos/README.md`; update only this `HOOKCAT001` task record in the Master Task Register.
- **Forbidden Scope:** No hook implementation, hooks.json, config.toml hook configuration, hook scripts, automation, runtime/source changes, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files/secrets, dependencies, package-lock, Playwright installation, Sites configuration, graph visualization files, broad governance rewrites, historical deletion/move/rename, unrelated future task status changes, future backlog task completion, PR merge, or version bump.
- **Target Files:** `docs/kaos/HOOKCAT001_KAOS_HOOK_CATALOG_REV01.md`; `docs/kaos/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only KAOS operating-system architecture.
- **Documentation Updates Required:** Create the Hook Catalog REV01; link it from the KAOS README; add and complete this bounded task record after validation.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `rg -n "KAOS Hook Catalog|HOOK-KAOS-INTAKE001|HOOK-RSI001|HOOK-CONTEXT001|HOOK-PROTECTED001|HOOK-CLAIMS001|HOOK-SITEQA001|HOOKCAT001|First Implementation Candidates" docs/kaos docs/system/master-task-register.md`; docs lint if available.
- **Exit Criteria:** Hook Catalog exists; README links the catalog; this register contains `HOOKCAT001`; hook purpose, definition, relationship to HOOK001, record schema, lifecycle, maturity levels, priority levels, candidate hook catalog, input/output contract rules, trust/review rules, protected-system hook rules, first implementation candidates, prohibited behavior, and future-use boundaries are documented; candidate hooks remain candidate only; only allowed docs changed; no runtime/source files, protected systems, hook implementation, automation, hooks.json, hook scripts, Playwright installation, Sites configuration, graph visualization files, historical docs, version files, or unrelated future task statuses changed; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `HOOKCAT001` work order; HOOK001; EVENT001; REPO001-REV03-001; KAOS001-REGISTRY001; KAOS001-INTAKE001; KAOS001-DEPMAP001; KAOS001-BPROC001; KAOS001-DECISION001; KAOS001-RSI001; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Created `/docs/kaos/HOOKCAT001_KAOS_HOOK_CATALOG_REV01.md` as docs-only KAOS architecture. The document defines the governed Hook Catalog, its non-authority relationship to HOOK001, hook record schema, lifecycle stages, maturity levels, priority levels, candidate records for thirteen hooks, input/output contract rules, trust/review rules, protected-system hook rules, first implementation candidates, prohibited behavior, and future-use boundaries. Updated the KAOS README link. No hooks were implemented, no hooks.json or hook scripts were created, no automation was configured, no Playwright or Sites work was performed, no source/runtime files or protected systems were changed, and no future backlog tasks were marked DONE.

### KAOS-HOOK002
- **Task ID:** KAOS-HOOK002
- **Task Name:** Codex Windows Hook Runtime Standard
- **Status:** DONE
- **Category:** GOV
- **Tags:** KAOS / Hooks / Codex / Windows / Runtime Standard
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define the Windows-aware Codex hook runtime standard for WNYHS before any hook implementation, including repo-local and shared hook locations, configuration boundaries, Windows command requirements, trust review, advisory-first behavior, runtime constraints, and safe path rules.
- **Allowed Scope:** Create `docs/kaos/hooks/HOOK_RUNTIME_STANDARD_WINDOWS_REV01.md`; update `docs/kaos/hooks/README.md` to link the standard; update this Master Task Register record. Treat the Master Task Register as a tracking board for this prompt-created bounded work order.
- **Forbidden Scope:** No `.codex/` directory creation, hook scripts, `hooks.json`, `config.toml`, hook implementation, hook approval, blocking hook, active KAOS rule, QA checks, source code, routes, UI, runtime/API files, Stripe/payment behavior, HubSpot behavior, scheduling, Cloudflare config, dependencies, package-lock, PR merge, or protected-system changes.
- **Target Files:** `docs/kaos/hooks/README.md`; `docs/kaos/hooks/HOOK_RUNTIME_STANDARD_WINDOWS_REV01.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only governance/runtime standard.
- **Documentation Updates Required:** Add the Windows-aware hook runtime standard; link it from the KAOS hook README; record this bounded task as DONE after validation.
- **Validation Required:** `git diff --check`; `rg -n "KAOS-HOOK002|Codex Windows|commandWindows|command_windows|py -3|C:\\\\dev\\\\wnyhomesecurity|C:\\\\dev\\\\codex|/hooks|advisory|blocking" docs/kaos docs/system`; `rg -n "hooks.json|config.toml|HOOK_RUNTIME_STANDARD_WINDOWS_REV01" docs/kaos/hooks docs/system`; `rg -n "^(<<<<<<<|=======|>>>>>>>)" docs`; `npm run build`.
- **Exit Criteria:** Windows hook runtime standard exists; KAOS hook README links it; no `.codex/` files, hook scripts, hook configs, hook implementation, blocking hook, active KAOS rule, source/runtime/UI files, protected-system files, dependencies, package-lock, or Cloudflare config are created or changed; formatting is normalized; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `KAOS-HOOK002` work order; PR #415 / KAOS-HOOK001 merged; HOOK001; HOOKCAT001; `docs/kaos/hooks/HOOK_LIFECYCLE_STANDARD_REV01.md`; `docs/kaos/hooks/HOOK_CANDIDATE_REGISTRY.md`; CODEX run contract; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge. Future hook implementation requires a separate bounded task and explicit operator approval before any blocking behavior.
- **Completion Notes:** Created `docs/kaos/hooks/HOOK_RUNTIME_STANDARD_WINDOWS_REV01.md` as a docs-only Windows-aware Codex hook runtime standard. The standard documents repo-local hook location `C:\dev\wnyhomesecurity\.codex\`, shared utility location `C:\dev\codex\`, prohibited locations, repo-local `.codex/hooks.json` and `.codex/config.toml` boundaries, Windows command fields `commandWindows` and `command_windows`, `py -3` preference, git-root-stable path guidance, `/hooks` trust review, concurrent/multiple hook runtime constraints, PostToolUse side-effect limits, advisory-first WNYHS posture, and future implementation restrictions. Updated `docs/kaos/hooks/README.md` with the new standard link. No `.codex/` directory, hook scripts, hook config files, hook implementation, blocking hook, active KAOS rule, QA checks, source/runtime/UI files, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependencies, package-lock, environment, secrets, or protected systems were changed.

### CODEX001
- **Task ID:** CODEX001
- **Task Name:** Codex Work Order Specification
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the docs-only Codex Work Order Specification defining how ChatGPT generates bounded Codex work orders for WNYHS task execution, authority loading, context efficiency, event capture, hook readiness, validation, closeout summaries, and PR review.
- **Allowed Scope:** Create `/docs/codex/CODEX001_CODEX_WORK_ORDER_SPECIFICATION_REV01.md`; update `/docs/kaos/README.md` only to link CODEX001 as a supporting operating-system standard; update only this `CODEX001` task record in the Master Task Register.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files/secrets, dependencies, package-lock, Playwright installation, Sites configuration, hooks.json, config.toml hook configuration, hook scripts, graph visualization files, automation, broad governance rewrites, historical deletion/move/rename, unrelated future task status changes, future backlog task completion, PR merge, or version bump.
- **Target Files:** `docs/codex/CODEX001_CODEX_WORK_ORDER_SPECIFICATION_REV01.md`; `docs/kaos/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only Codex / KAOS operating standard.
- **Documentation Updates Required:** Create the CODEX001 specification; link it from the KAOS README; add and complete this bounded task record after validation.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `rg -n "Codex Work Order Specification|Required Work Order Sections|Context Efficiency Rules|Event Alignment|Hook Readiness|Closeout Summary Standard|Protected Systems Confirmation|CODEX001" docs/codex docs/kaos docs/system/master-task-register.md`; docs lint if available.
- **Exit Criteria:** CODEX001 specification exists; existing work-order docs were checked and not destructively rewritten; README/index update is limited to an appropriate link; this register contains `CODEX001`; required work-order sections, scope rules, context efficiency, event alignment, hook readiness, work-order templates, closeout summary standard, protected-system confirmation, PR/merge boundary, version rules, prohibited behavior, and future use are documented; only allowed docs changed; no source/runtime files, protected systems, hook implementation, hooks.json, hook scripts, automation, Playwright, Sites, dependencies, package-lock, version files, graph visualization files, historical docs, or unrelated future task statuses changed; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `CODEX001` work order; CODEX run contract; CODEX task register rules; OPS003; OPS004; OPS005; EVENT001; HOOK001; HOOKCAT001; REPO001-REV03-001; KAOS001-REGISTRY001; KAOS001-INTAKE001; KAOS001-RSI001; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Created `/docs/codex/CODEX001_CODEX_WORK_ORDER_SPECIFICATION_REV01.md` as a docs-only Codex / KAOS operating standard. The specification defines bounded work orders, required sections, scope rules, context-efficiency rules, EVENT001 lifecycle alignment, hook-readiness posture for candidate hooks, compact templates for docs-only, source/site, protected-system, QA, and hook-candidate work, closeout summary requirements, protected-system confirmation language, PR/merge boundaries, version rules, prohibited behavior, and future-use boundaries. Existing predecessor work-order standard `/docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md` was found and referenced rather than destructively rewritten. Updated the KAOS README link. No source/runtime files, protected systems, hooks, automation, Playwright, Sites, dependencies, package-lock, version files, graph visualization files, historical docs, or unrelated future task statuses were changed.

### SITE001
- **Task ID:** SITE001
- **Task Name:** Sites / Live Site QA Integration Standard
- **Status:** DONE
- **Category:** QA
- **Tags:** Sites / Live Site QA / Deployment Verification / Browser QA / KAOS
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the docs-only Sites / Live Site QA Integration Standard defining how Codex Sites, deployed-site inspection, browser-rendered QA, route validation, SEO checks, claims checks, visual checks, and deployment verification fit into WNYHS governance.
- **Allowed Scope:** Create `/docs/qa/SITE001_SITES_LIVE_SITE_QA_INTEGRATION_STANDARD_REV01.md`; update `/docs/kaos/README.md` only to link SITE001 as a supporting QA/governance standard; update only this `SITE001` task record in the Master Task Register.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files/secrets, dependencies, package-lock, Playwright installation, Sites configuration, Playwright tests, hooks.json, config.toml hook configuration, hook scripts, automation, broad governance rewrites, historical deletion/move/rename, unrelated future task status changes, future backlog task completion, PR merge, or version bump.
- **Target Files:** `docs/qa/SITE001_SITES_LIVE_SITE_QA_INTEGRATION_STANDARD_REV01.md`; `docs/kaos/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only QA / deployment governance standard.
- **Documentation Updates Required:** Create the SITE001 standard; link it from the KAOS README if appropriate; add and complete this bounded task record after validation.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `rg -n "Sites / Live Site QA Integration Standard|Browser Rendering Requirement|Deployment Verification Standard|Route QA Standard|SEO QA Standard|Claims / Copy QA Standard|SITEQA001|SITE001" docs/qa docs/kaos docs/system/master-task-register.md`; docs lint if available.
- **Exit Criteria:** SITE001 standard exists; existing Sites/live-site QA docs were checked and not duplicated; README/index update is limited to an appropriate link; this register contains `SITE001`; purpose, environment model, Sites role, live-site QA layers, browser-rendering requirement, deployment verification standard, route QA standard, SEO QA standard, claims/copy QA standard, visual/responsive QA standard, evidence standard, findings routing, SITEQA001 relationship, prohibited behavior, and future use are documented; only allowed docs changed; no source/runtime files, protected systems, Playwright installation, Sites configuration, tests, hooks, automation, dependencies, package-lock, version files, or unrelated future task statuses changed; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `SITE001` work order; CODEX001; EVENT001; HOOK001; HOOKCAT001; KAOS001-RSI001; REPO001-REV03-001; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Created `/docs/qa/SITE001_SITES_LIVE_SITE_QA_INTEGRATION_STANDARD_REV01.md` as a docs-only QA / deployment governance standard. The document defines Sites and live-site inspection as QA/evidence surfaces, not authority; defines production, preview, local, repository source, Codex Sites, browser-rendered QA, and future Playwright harness environments; documents browser-rendered QA requirements for the WNYHS SPA shell; defines deployment verification, route QA, SEO QA, claims/copy QA, visual/responsive QA, evidence expectations, findings routing, SITEQA001 relationship, prohibited behavior, and future-use boundaries. Updated the KAOS README link. No Playwright, Sites configuration, tests, hooks, source/runtime files, protected systems, SEO metadata, sitemap, robots, dependencies, package-lock, version files, or unrelated future backlog task statuses were changed.

### SITEQA001
- **Task ID:** SITEQA001
- **Task Name:** Playwright Site QA Harness Specification
- **Status:** DONE
- **Category:** QA
- **Tags:** Playwright / Site QA / Deployment Verification / Browser QA / Evidence
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the docs-only Playwright Site QA Harness Specification defining how WNYHS will later implement a governed Playwright browser QA harness for deployed-site and local-site validation.
- **Allowed Scope:** Create `/docs/qa/SITEQA001_PLAYWRIGHT_SITE_QA_HARNESS_SPECIFICATION_REV01.md`; update `/docs/kaos/README.md` only to link SITEQA001 as a supporting QA/tooling specification; update only this `SITEQA001` task record in the Master Task Register.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files/secrets, dependencies, package-lock, Playwright installation, Playwright config, Playwright tests, Sites configuration, hooks.json, config.toml hook configuration, hook scripts, automation, broad governance rewrites, historical deletion/move/rename, unrelated future task status changes, future backlog task completion, PR merge, or version bump.
- **Target Files:** `docs/qa/SITEQA001_PLAYWRIGHT_SITE_QA_HARNESS_SPECIFICATION_REV01.md`; `docs/kaos/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only QA tooling specification.
- **Documentation Updates Required:** Create the SITEQA001 specification; link it from the KAOS README if appropriate; add and complete this bounded task record after validation.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `rg -n "Playwright Site QA Harness Specification|Browser Matrix|Viewport Matrix|Route Coverage|Deployment Verification Checks|SEO / Metadata Checks|Claims / Copy Checks|Evidence Artifacts|SITEQA002|PLAY001|SITEQA001" docs/qa docs/kaos docs/system/master-task-register.md`; docs lint if available.
- **Exit Criteria:** SITEQA001 specification exists; existing Playwright QA harness docs were checked and not duplicated; README/index update is limited to an appropriate link; this register contains `SITEQA001`; purpose, harness role, environment model, future repository layout, browser matrix, viewport matrix, route coverage, deployment checks, SEO/metadata checks, claims/copy checks, visual/responsive checks, console/network checks, evidence artifacts, run modes, pass/warning/fail policy, EVENT001/HOOK001/HOOKCAT001 relationship, future implementation plan, prohibited behavior, and future use are documented; only allowed docs changed; no Playwright installation, Playwright config, tests, Sites configuration, hooks, automation, source/runtime files, protected systems, SEO metadata, sitemap, robots, dependencies, package-lock, version files, or unrelated future backlog task statuses changed; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `SITEQA001` work order; SITE001; CODEX001; EVENT001; HOOK001; HOOKCAT001; KAOS001-RSI001; REPO001-REV03-001; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Created `/docs/qa/SITEQA001_PLAYWRIGHT_SITE_QA_HARNESS_SPECIFICATION_REV01.md` as a docs-only QA tooling specification. The document defines the future Playwright harness role, explicit environment model, future repository layout targets, browser and viewport matrices, route coverage, deployment verification checks, SEO/metadata checks, claims/copy candidate checks, visual/responsive checks, console/network capture, evidence artifacts, run modes, pass/warning/fail policy, EVENT001/HOOK001/HOOKCAT001 relationship, future implementation plan, prohibited behavior, and future-use boundaries. Updated the KAOS README link. No Playwright, Sites configuration, tests, hooks, automation, source/runtime files, protected systems, SEO metadata, sitemap, robots, dependencies, package-lock, version files, or unrelated future backlog task statuses were changed.

### SITEQA002
- **Task ID:** SITEQA002
- **Task Name:** Visual Regression Baseline Standard
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the governed standard for future visual regression baselines without creating baseline images, comparison tests, thresholds, or source/runtime/customer-facing changes.
- **Allowed Scope:** Create `docs/qa/SITEQA002_VISUAL_REGRESSION_BASELINE_STANDARD_REV01.md`; update `docs/kaos/README.md` only to link SITEQA002 as a supporting QA/governance reference; update only this `SITEQA002` task record in the Master Task Register.
- **Forbidden Scope:** No baseline images, committed screenshots, visual comparison tests, screenshot assertions, Playwright test edits, Playwright config edits, source/runtime/site files, routes, CSS/tokens, SEO, sitemap, robots, package files, dependencies, package-lock, Sites configuration, hooks, production QA, protected-system changes, future task completion, merge, or version bump.
- **Target Files:** `docs/qa/SITEQA002_VISUAL_REGRESSION_BASELINE_STANDARD_REV01.md`; `docs/kaos/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only QA governance standard.
- **Documentation Updates Required:** Create the SITEQA002 visual regression baseline standard; link it from the KAOS README if appropriate; add and complete this bounded task record after validation.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `rg -n "SITEQA002|Visual Regression Baseline Standard|PLAY010|baseline approval|screenshot evidence|approved baseline|Failure classification" docs/qa docs/kaos docs/system/master-task-register.md`; docs lint if available.
- **Exit Criteria:** SITEQA002 standard exists; purpose, scope, SITE001/SITEQA001/PLAY009 relationship, screenshot evidence versus approved baseline, baseline approval rules, storage policy, route and viewport eligibility, mobile/tablet/desktop handling, naming, refresh rules, expected-difference policy, threshold policy, review workflow, evidence retention, failure classification, prohibited behavior, and future implementation tasks are documented; future tasks PLAY010 through PLAY016 are listed but not marked DONE; only allowed docs changed; no screenshots, baselines, tests, Playwright config, source/runtime/customer-facing files, dependencies, package-lock, Sites configuration, hooks, production QA, protected systems, or version files changed; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `SITEQA002` work order; PLAY001; PLAY002; PLAY003; PLAY004; PLAY005; PLAY006; PLAY007; PLAY008; PLAY009; SITE001; SITEQA001; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge. Future visual regression implementation requires separate task activation.
- **Completion Notes:** Created `/docs/qa/SITEQA002_VISUAL_REGRESSION_BASELINE_STANDARD_REV01.md` as a docs-only visual regression baseline governance standard. The document defines screenshot evidence versus approved baseline, baseline approval rules, storage policy, route and viewport eligibility, mobile/tablet/desktop handling, naming, refresh rules, expected-difference policy, future threshold policy, review workflow, evidence retention, failure classification, prohibited behavior, and future implementation tasks PLAY010 through PLAY016. Updated the KAOS README link. No screenshots, baseline images, visual comparison tests, Playwright config, source/runtime/customer-facing files, protected systems, SEO, sitemap, robots, dependencies, package-lock, Sites configuration, hooks, production QA, version files, or future task statuses were changed.

### PLAY001
- **Task ID:** PLAY001
- **Task Name:** Install Playwright Dependency
- **Status:** DONE
- **Category:** QA / Tooling
- **Tags:** Playwright / Site QA / Dependency / Tooling
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Install the Playwright test dependency needed for the future governed WNYHS Site QA Harness without creating tests, config, hooks, Sites configuration, or runtime behavior.
- **Allowed Scope:** Add `@playwright/test` as a dev dependency using repository npm conventions; update `package.json` and `package-lock.json` as required by the install; add a minimal `qa:site` npm script if non-invasive; update only this Master Task Register record.
- **Forbidden Scope:** No `playwright.config.ts`; no tests or `tests/` directories; no screenshots, baselines, reports, hooks, Sites config, browser QA execution, source code, runtime files, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files, secrets, automation, future task activation, future backlog task completion, merge, or version bump.
- **Target Files:** `package.json`, `package-lock.json`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev dependency/tooling setup only.
- **Documentation Updates Required:** Add this bounded task-register record and mark DONE after validation.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; npm install validation result; `npm run build`; `npm ls @playwright/test`; `npx playwright --version`.
- **Exit Criteria:** `@playwright/test` is installed or confirmed present as a dev dependency; package-lock changes are attributable to the Playwright dependency installation; optional script is limited to `qa:site`; no Playwright config, tests, Sites config, hooks, source/runtime, protected-system, or customer-facing behavior changes are introduced; future Playwright/Site QA tasks remain inactive; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY001` work order; SITE001; SITEQA001; CODEX001; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Installed `@playwright/test` as a dev dependency for future governed Site QA harness work and added the minimal `qa:site` npm script. `package-lock.json` changed only for the Playwright dependency tree. No Playwright config, tests, screenshots, baselines, reports, hooks, Sites configuration, browser QA execution, source/runtime files, website pages, routes, CSS/tokens, SEO files, HubSpot, Stripe/payment, Resend/email, Cloudflare config, environment files, secrets, automation, version files, or future task statuses were changed.

### PLAY002
- **Task ID:** PLAY002
- **Task Name:** Add Playwright Configuration
- **Status:** DONE
- **Category:** QA / Tooling
- **Tags:** Playwright / Site QA / Configuration / Tooling
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add the initial governed Playwright TypeScript configuration for the WNYHS Site QA Harness without creating tests, running browser QA, configuring Sites, creating hooks, or changing source/runtime/customer-facing behavior.
- **Allowed Scope:** Create `playwright.config.ts`; update only this Master Task Register record.
- **Forbidden Scope:** No Playwright tests, `tests/` directory, screenshots, baselines, reports, Sites configuration, hooks.json, config.toml hook configuration, hook scripts, browser QA execution, production QA, source code, runtime files, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files, secrets, dependency changes, package-lock changes, automation, activation or completion of PLAY003, PLAY004, SITEQA002, or hook tasks, merge, or version bump.
- **Target Files:** `playwright.config.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev QA tooling configuration only.
- **Documentation Updates Required:** Add this bounded task-register record and mark DONE after validation.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; `npx playwright --version`; `npx playwright test --list`.
- **Exit Criteria:** `playwright.config.ts` exists; config uses Playwright TypeScript config; default test directory is `tests/site-qa`; Chromium is configured as the required baseline browser; Firefox is configured; a mobile viewport profile is configured; base URL uses `SITE_QA_BASE_URL` with a safe local default; output/report paths are repo-safe; no tests, screenshots, reports, baselines, Sites config, hooks, source/runtime/customer-facing changes, dependency changes, or future task completions are introduced; validation passes or no-tests list behavior is reported as expected for config-only setup; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY002` work order; PLAY001; SITE001; SITEQA001; CODEX001; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Added `playwright.config.ts` for the governed Site QA Harness using `SITE_QA_BASE_URL` with local preview fallback, `tests/site-qa` as the future test directory, Chromium baseline, Firefox project, mobile Chromium profile, and simple repo-safe output/report paths. No Playwright tests, `tests/` directory, screenshots, baselines, reports, Sites configuration, hooks, browser QA execution, source/runtime files, website pages, routes, CSS/tokens, SEO files, HubSpot, Stripe/payment, Resend/email, Cloudflare config, environment files, secrets, dependency files, package-lock, automation, version files, or future task statuses were changed.

### PLAY003
- **Task ID:** PLAY003
- **Task Name:** Add Route Smoke Tests
- **Status:** DONE
- **Category:** QA / Tooling
- **Tags:** Playwright / Site QA / Route Smoke / Local Preview
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add the first governed Playwright route smoke tests for the WNYHS Site QA Harness against local/default preview only, without production QA, source/runtime changes, visual baselines, screenshots, metadata tests, Sites configuration, hooks, or dependency changes.
- **Allowed Scope:** Create `tests/site-qa/routes/public-routes.spec.ts`; update only this Master Task Register record.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files or secrets, Playwright config changes, visual baseline tests, screenshot assertions, metadata tests, production URL defaults, Sites configuration, hooks.json, `.codex/config.toml`, hook scripts, dependency changes, package-lock changes, activation or completion of PLAY004, PLAY005, SITEQA002, HOOK-SITEQA001, or later tasks, merge, or version bump.
- **Target Files:** `tests/site-qa/routes/public-routes.spec.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev QA test creation only.
- **Documentation Updates Required:** Add this bounded task-register record and mark DONE after validation.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; `npx playwright test --list`; `npm run qa:site -- --project=chromium` using local/default base URL only.
- **Exit Criteria:** Route smoke spec exists under `tests/site-qa/routes`; initial public route list includes `/`, canonical category routes, `/about`, `/contact`, `/support`, and `/search`; each route navigates with Playwright, verifies a non-failed page response, visible body, and at least one visible heading or landmark; nonexistent route behavior is captured as explicit not-found handling or marked `test.fixme` with a governance note when the app exposes SPA fallback; no screenshots, visual baselines, metadata tests, production URL defaults, source/runtime/customer-facing changes, protected-system changes, Playwright config changes, dependency changes, or future task completions are introduced; validation passes or browser-binary absence is reported with the exact install command needed; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY003` work order; PLAY001; PLAY002; SITE001; SITEQA001; CODEX001; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR sequencing with PLAY004 before merge.
- **Completion Notes:** Created `tests/site-qa/routes/public-routes.spec.ts` with initial local-preview public route smoke coverage for `/`, `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, `/categories/aging-in-place`, `/about`, `/contact`, `/support`, and `/search`. Each route asserts a non-failed response, visible body, and visible heading or landmark. Added a nonexistent-route soft-404 check that marks `test.fixme` when the current app resolves unknown paths to the SPA shell/layout without an explicit not-found state. Browser binaries were installed by the operator after the initial blocked run. PLAY004 local preview automation then allowed `npm run qa:site -- --project=chromium` to start the local preview server and validate the route smoke suite with 10 passing checks and 1 expected `fixme` skip. No source/runtime files, screenshots, visual baselines, metadata tests, production URL defaults, Sites configuration, hooks, protected systems, dependencies, package-lock, version files, or future task statuses were changed.

### PLAY004
- **Task ID:** PLAY004
- **Task Name:** Configure Automatic Local Preview Server
- **Status:** DONE
- **Category:** QA / Tooling
- **Tags:** Playwright / Site QA / Local Preview / Tooling
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Update the Playwright QA harness so local/default site QA starts the built local preview server automatically instead of failing with `ERR_CONNECTION_REFUSED` when no preview server is already running.
- **Allowed Scope:** Update `playwright.config.ts` with a local preview `webServer` configuration; update only this Master Task Register record; update PLAY003 from `BLOCKED` to `DONE` only if the existing PLAY003 route smoke tests pass using local/default preview.
- **Forbidden Scope:** No Playwright test edits, new tests, source code, runtime files, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files or secrets, Sites configuration, screenshots, visual baselines, metadata tests, hooks.json, `.codex/config.toml`, hook scripts, dependency changes, package-lock changes, production QA, merge, version bump, or future backlog task completion.
- **Target Files:** `playwright.config.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev QA tooling configuration only.
- **Documentation Updates Required:** Add this bounded task-register record and mark DONE after validation; update PLAY003 completion status only if its route smoke validation passes.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; `npx playwright --version`; `npx playwright test --list`; `npm run qa:site -- --project=chromium` using local/default base URL only.
- **Exit Criteria:** `playwright.config.ts` includes a local/default `webServer` configuration that builds the site, starts preview on `http://127.0.0.1:4173`, waits before tests run, reuses an existing server when appropriate, preserves `SITE_QA_BASE_URL` support, and does not run against production by default; existing PLAY003 route smoke tests pass before PLAY003 is marked DONE; only allowed files changed; protected systems remain untouched; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY004` work order; PLAY001; PLAY002; PLAY003; SITE001; SITEQA001; CODEX001; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge after PR #391 sequencing is resolved.
- **Completion Notes:** Updated `playwright.config.ts` with a local/default Playwright `webServer` configuration that builds the site, starts Vite preview at `http://127.0.0.1:4173`, waits for that URL before tests run, reuses an existing server, preserves `SITE_QA_BASE_URL` for explicit non-default runs, and avoids production by default. Validated PLAY003 route smoke checks using local/default preview only: Chromium reported 10 passing route checks and 1 expected `fixme` skip for the documented SPA fallback not-found behavior. On Windows, the preview child process required manual stop after the passing run before the command returned its final summary; no source/runtime files, route smoke tests, screenshots, baselines, metadata tests, Sites configuration, hooks, protected systems, dependencies, package-lock, version files, or future backlog task statuses were changed.

### PLAY005
- **Task ID:** PLAY005
- **Task Name:** Ignore Playwright Runtime Artifacts
- **Status:** DONE
- **Category:** QA / Tooling
- **Tags:** Playwright / Site QA / Ignore Rules / Tooling Hygiene
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Keep local Playwright runtime artifacts from blocking clean working-tree checks or local sync after governed QA runs.
- **Allowed Scope:** Update `.gitignore` to ignore `test-results/`, `playwright-report/`, and `blob-report/`; update only this Master Task Register record.
- **Forbidden Scope:** No Playwright config edits, Playwright test edits, source code, runtime files, website pages, routes, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, package files, dependencies, Sites configuration, screenshots, visual baselines, hooks.json, `.codex/config.toml`, hook scripts, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files, secrets, production QA, merge, version bump, or future backlog task completion.
- **Target Files:** `.gitignore`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev QA ignore-rule hygiene only.
- **Documentation Updates Required:** Add this bounded task-register record and mark DONE after validation.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; `npm run qa:site -- --project=chromium`; confirm generated Playwright runtime artifacts do not appear in `git status --short`.
- **Exit Criteria:** `.gitignore` ignores `test-results/`, `playwright-report/`, and `blob-report/`; this register contains `PLAY005` marked DONE; PLAY003 remains DONE; PLAY004 remains DONE; only allowed files changed; protected systems remain untouched; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY005-RECREATE001` work order; PLAY001; PLAY002; PLAY003; PLAY004; SITE001; SITEQA001; CODEX run contract; OPS003; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge. Old PR #393 remains open/draft and stale because it was created before PLAY004-MAIN001 was present on `main`.
- **Completion Notes:** Added `.gitignore` entries for `test-results/`, `playwright-report/`, and `blob-report/` so Playwright runtime artifacts generated by local Site QA runs do not appear as untracked files or block clean working-tree sync. Validated on current `main` after PLAY004 local preview automation was present: `npm run build` passed and `npm run qa:site -- --project=chromium` launched local preview configuration, passed the route smoke suite with 10 passing checks and 1 expected `fixme` skip, and generated ignored Playwright artifacts without changing `git status --short`. PLAY003 and PLAY004 remain DONE. No Playwright config, Playwright tests, source/runtime files, website pages, routes, CSS/tokens, SEO files, sitemap, robots, package files, dependencies, Sites configuration, screenshots, visual baselines, hooks, protected systems, environment files, secrets, version files, or future backlog task statuses were changed.

### PLAY006
- **Task ID:** PLAY006
- **Task Name:** Add Metadata / SEO Checks
- **Status:** DONE
- **Category:** QA / Tooling
- **Tags:** Playwright / Site QA / Metadata / SEO Observation
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add governed Playwright metadata and SEO observation checks for the initial WNYHS public route set without changing SEO implementation or customer-facing behavior.
- **Allowed Scope:** Create `tests/site-qa/metadata/public-metadata.spec.ts`; update only this Master Task Register record.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, CSS/tokens, catalog imports, SEO metadata implementation, sitemap, robots.txt, Playwright config, existing route smoke tests, package files, dependency changes, package-lock changes, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files or secrets, Sites configuration, screenshots, visual baselines, hooks, production QA, merge, version bump, SEO fix task activation, or future backlog task completion.
- **Target Files:** `tests/site-qa/metadata/public-metadata.spec.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev QA test creation only.
- **Documentation Updates Required:** Add this bounded task-register record and mark DONE after validation; record metadata findings as observations, not fixes.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; `npx playwright test --list`; `npm run qa:site -- --project=chromium` using local/default preview only; confirm Playwright runtime artifacts remain ignored.
- **Exit Criteria:** Metadata spec exists under `tests/site-qa/metadata`; route list includes `/`, canonical category routes, `/about`, `/contact`, `/support`, and `/search`; each route reads browser-rendered title, description, canonical href, robots, Open Graph title/description, and Twitter title/description; incomplete metadata is reported through structured observations rather than automatic SEO remediation; only allowed files changed; no production QA, source/runtime/customer-facing changes, protected-system changes, Playwright config changes, dependency changes, SEO implementation changes, sitemap/robots changes, or future task completions are introduced; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY006` work order; PLAY001; PLAY002; PLAY003; PLAY004; PLAY005; SITE001; SITEQA001; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Created `tests/site-qa/metadata/public-metadata.spec.ts` with browser-rendered metadata observation checks for `/`, `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, `/categories/aging-in-place`, `/about`, `/contact`, `/support`, and `/search`. The spec reads title, description, canonical href, robots, Open Graph title/description, and Twitter title/description for each route. Route load and non-empty title are hard checks; incomplete metadata and generic-only title findings are structured observations so SEO gaps are reported without fixing source metadata. Local/default Chromium QA reported 20 passed and 1 expected `fixme` skip; observed metadata findings were limited to `/about`, which rendered a generic title and missing description, canonical, robots, Open Graph, and Twitter metadata. No source/runtime files, website pages, routes, CSS/tokens, SEO implementation, sitemap, robots, Playwright config, existing route smoke tests, package files, dependencies, Sites configuration, screenshots, visual baselines, hooks, production QA, protected systems, environment files, secrets, version files, SEO fix tasks, or future backlog task statuses were changed.

### PLAY007
- **Task ID:** PLAY007
- **Task Name:** Add Console / Network Error Capture
- **Status:** DONE
- **Category:** QA / Tooling
- **Tags:** Playwright / Site QA / Runtime Observations / Console / Network
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add governed Playwright runtime/browser observation checks that capture console errors, uncaught page errors, failed network requests, 4xx/5xx responses, missing assets, and blocked resources during local/default Site QA without changing site behavior.
- **Allowed Scope:** Create `tests/site-qa/runtime/public-runtime-observations.spec.ts`; update only this Master Task Register record.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, CSS/tokens, catalog imports, SEO metadata implementation, sitemap, robots.txt, Playwright config, existing route smoke tests, existing metadata tests, package files, dependency changes, package-lock changes, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files or secrets, Sites configuration, screenshots, visual baselines, hooks, production QA, runtime issue fixes, fix task activation, future backlog task completion, merge, or version bump.
- **Target Files:** `tests/site-qa/runtime/public-runtime-observations.spec.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev QA test creation only.
- **Documentation Updates Required:** Add this bounded task-register record and mark DONE after validation; record runtime/network findings as observations, not fixes; do not activate fix tasks.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; `npx playwright test --list`; `npm run qa:site -- --project=chromium` using local/default preview only; confirm Playwright runtime artifacts remain ignored.
- **Exit Criteria:** Runtime observation spec exists under `tests/site-qa/runtime`; route list includes `/`, canonical category routes, `/about`, `/contact`, `/support`, and `/search`; each route captures console errors, uncaught page errors, failed network requests, 4xx/5xx responses, observable missing assets, and observable blocked resources; route navigation failures and uncaught page errors are hard failures; console errors and non-critical network/resource findings are structured observations; only allowed files changed; no production QA, source/runtime/customer-facing changes, protected-system changes, Playwright config changes, dependency changes, SEO implementation changes, sitemap/robots changes, fix-task activation, or future task completions are introduced; validation passes or any tooling-exit nuance is recorded; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY007` work order; PLAY001; PLAY002; PLAY003; PLAY004; PLAY005; PLAY006; SITE001; SITEQA001; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Created `tests/site-qa/runtime/public-runtime-observations.spec.ts` with local/default browser runtime observation checks for `/`, `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, `/categories/aging-in-place`, `/about`, `/contact`, `/support`, and `/search`. The spec captures console errors, uncaught `pageerror` events, failed network requests, 4xx/5xx responses, observable missing assets, and observable blocked resources. Route navigation failures and uncaught page errors are hard failures; console and non-critical network/resource findings are structured observations. Local/default Chromium QA reported 30 passed and 1 existing expected `fixme` skip. Runtime observations were soft-only and repeated across all runtime routes: the Google Fonts stylesheet request to `https://fonts.googleapis.com/css2?family=Inter...Manrope...` failed as `net::ERR_NETWORK_ACCESS_DENIED`, producing one `missing-asset` observation and one browser console `Failed to load resource` observation per route. No uncaught page errors, route navigation failures, 4xx/5xx HTTP responses, or additional blocked-resource findings were observed in the runtime suite. On Windows, the local preview child process again required manual stop after Playwright printed the passing test summary; the shell exit was non-zero only because the hung QA process was stopped manually. No runtime issue was fixed, no fix task was activated, and no source/runtime files, website pages, routes, CSS/tokens, SEO implementation, sitemap, robots, Playwright config, existing route smoke tests, existing metadata tests, package files, dependencies, Sites configuration, screenshots, visual baselines, hooks, production QA, protected systems, environment files, secrets, version files, or future backlog task statuses were changed.

### PLAY008
- **Task ID:** PLAY008
- **Task Name:** Fix Windows Playwright Preview Shutdown Behavior
- **Status:** DONE
- **Category:** QA / Tooling
- **Tags:** Playwright / Site QA / Local Preview / Windows Shutdown / Tooling
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Fix the Windows local Site QA shutdown hang so `npm run qa:site -- --project=chromium` exits cleanly after assertions complete.
- **Allowed Scope:** Update the local/default Playwright preview server lifecycle using the smallest safe tooling change; preserve local/default `http://127.0.0.1:4173`; preserve explicit `SITE_QA_BASE_URL` override behavior; add a small repo-local preview helper script only if needed; update only this Master Task Register record.
- **Forbidden Scope:** No source code, runtime site files, website pages, routes, route behavior, existing Playwright test logic, existing test assertions, SEO metadata implementation, sitemap, robots.txt, runtime observation logic, customer-facing behavior, package-lock, dependency changes, Sites configuration, screenshots, baselines, hooks, production QA, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files or secrets, future backlog task completion, merge, or version bump.
- **Target Files:** `playwright.config.ts`, `scripts/site-qa-preview-server.mjs`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev QA local preview lifecycle tooling only.
- **Documentation Updates Required:** Add this bounded task-register record and mark DONE after validation proves the QA command exits cleanly.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; `npx playwright test --list`; `npm run qa:site -- --project=chromium`; `Get-NetTCPConnection -LocalPort 4173 -ErrorAction SilentlyContinue`; confirm normal git status does not show Playwright runtime artifacts.
- **Exit Criteria:** PLAY001 through PLAY007 remain DONE; SITE001 and SITEQA001 remain DONE; local/default Playwright preview still starts on `http://127.0.0.1:4173`; `SITE_QA_BASE_URL` explicit override still prevents the local preview webServer; Chromium Site QA passes with the expected current result; the QA command exits normally without manual process kill; no listener remains on port 4173 after QA completes; only allowed files changed; protected systems remain untouched; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY008` work order; PLAY001; PLAY002; PLAY003; PLAY004; PLAY005; PLAY006; PLAY007; SITE001; SITEQA001; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Replaced the chained Playwright `webServer` command with `node ./scripts/site-qa-preview-server.mjs`, a local QA-only preview lifecycle helper that runs `npm run build`, starts Vite preview directly through Node on `127.0.0.1:4173`, and terminates the preview child process on shutdown signals. Updated Playwright graceful shutdown to use `SIGTERM` with a longer timeout. Pre-change validation confirmed the existing Windows behavior: Chromium assertions completed but the QA command did not return until manual interruption would have been required. Post-fix validation confirmed `npm run qa:site -- --project=chromium` exited normally with code 0, reporting 30 passed and 1 existing skipped/fixme route case, and `Get-NetTCPConnection -LocalPort 4173 -ErrorAction SilentlyContinue` showed no remaining listener. `npm run build` and `npx playwright test --list` passed. No Playwright tests, test assertions, source/runtime/site files, routes, SEO metadata, sitemap, robots, runtime observation logic, customer-facing behavior, dependencies, package-lock, Sites configuration, screenshots, baselines, hooks, production QA, protected systems, environment files, secrets, version files, or future backlog task statuses were changed.

### PLAY008-FIX001
- **Task ID:** PLAY008-FIX001
- **Task Name:** Fix Node 24 npm.cmd Preview Launcher Spawn
- **Status:** DONE
- **Category:** QA
- **Tags:** Playwright / Site QA / Local Preview / Windows / Node 24
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Fix the Playwright local preview helper so cold-start local Site QA works on Windows / Node 24 without requiring an already-running preview server.
- **Allowed Scope:** Update `scripts/site-qa-preview-server.mjs` to avoid the Windows / Node 24 `npm.cmd` spawn failure path while preserving local QA preview build/start/shutdown behavior; update only this Master Task Register record after validation passes.
- **Forbidden Scope:** No Playwright test edits, Playwright config edits, source/runtime/site files, website pages, routes, route behavior, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, package files, dependency changes, package-lock changes, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files or secrets, Sites configuration, screenshots, visual baselines, hooks, production QA, PR #403 modification, PLAY012 status change, future backlog task completion, merge, or version bump.
- **Target Files:** `scripts/site-qa-preview-server.mjs`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev QA local preview launcher tooling only.
- **Documentation Updates Required:** Add this bounded task-register record if missing; mark DONE only after cold-start validation passes; do not modify PLAY012 status.
- **Validation Required:** `Get-NetTCPConnection -LocalPort 4173 -ErrorAction SilentlyContinue`; `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; `npm run typecheck:test`; `npx playwright test --list`; `npm run qa:site -- --project=chromium`; confirm no listener remains on port 4173 after QA; confirm Playwright runtime artifacts remain ignored.
- **Exit Criteria:** PLAY001 through PLAY011 remain DONE; PLAY008 remains DONE; PR #403 remains open/draft/unmerged; local/default Playwright preview starts from cold state on `http://127.0.0.1:4173`; Chromium Site QA passes with the expected current result; the QA command exits normally without manual process kill; no listener remains on port 4173 after QA completes; only allowed files changed; protected systems remain untouched; production is not tested; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY008-FIX001` work order; PLAY001; PLAY002; PLAY003; PLAY004; PLAY005; PLAY006; PLAY007; PLAY008; PLAY009; PLAY010; PLAY011; SITE001; SITEQA001; SITEQA002; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge before PLAY012.
- **Diagnostic Notes:** Initial cold-start inspection confirmed the actionable failure path was the helper spawning `npm.cmd` for build on Windows / Node 24. Early validation after replacing that build spawn showed preview startup was fixed, but shutdown still hung because the Windows Playwright command shell did not reliably deliver shutdown to the helper / preview process tree. Generated `debug.log` contained only Chromium GPU command-buffer transient errors from the local browser run and was deleted unstaged as unrelated diagnostic noise.
- **Completion Notes:** Updated `scripts/site-qa-preview-server.mjs` so the helper no longer spawns `npm.cmd` for the build path. The helper now runs Vite build through the local Vite Node CLI, serves preview through Vite's Node preview API on `127.0.0.1:4173`, and closes the in-process preview server through signal handlers plus a local-QA idle shutdown fallback for the Windows Playwright shell-wrapper shutdown gap. Cold-start validation confirmed no listener on port 4173 before QA, `npm run qa:site -- --project=chromium` started its own local preview, reported 100 passed and 1 existing skipped/fixme case, exited with code 0 without manual process kill, and left no listener on port 4173 afterward. `npm run build`, `npm run typecheck:test`, `npx playwright test --list`, and `git diff --check` passed. PR #403 remained open/draft/unmerged. No Playwright config, Playwright tests, source/runtime/customer-facing files, package/dependency files, protected systems, production QA, version files, PLAY012 status, or future task statuses were changed.

### PLAY009
- **Task ID:** PLAY009
- **Task Name:** Visual Screenshot Evidence Capture
- **Status:** DONE
- **Category:** QA
- **Tags:** Playwright / Site QA / Screenshot Evidence / Visual QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add governed Playwright screenshot evidence capture for the initial WNYHS public route set across mobile, tablet, and desktop viewport sizes without changing source/runtime/site behavior or activating visual regression.
- **Allowed Scope:** Create `tests/site-qa/visual/public-screenshot-evidence.spec.ts`; update only this Master Task Register record; capture full-page screenshot evidence under Playwright output/test-results during local/default Site QA.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, route behavior, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, Playwright config, existing tests, package files, dependency changes, package-lock changes, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files or secrets, Sites configuration, hooks, production QA, committed screenshots, visual baselines, screenshot comparisons, visual regression thresholds, baseline approvals, future backlog task completion, merge, or version bump.
- **Target Files:** `tests/site-qa/visual/public-screenshot-evidence.spec.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev QA screenshot evidence capture only.
- **Documentation Updates Required:** Add this bounded task-register record if missing; mark DONE after validation passes; record screenshot evidence behavior; do not activate visual regression or future tasks.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; `npx playwright test --list`; `npm run qa:site -- --project=chromium` using local/default preview only; confirm screenshots are generated only under ignored Playwright output; confirm normal `git status --short` does not show screenshot artifacts; `Get-NetTCPConnection -LocalPort 4173 -ErrorAction SilentlyContinue`.
- **Exit Criteria:** PLAY001 through PLAY008 remain DONE; SITE001 and SITEQA001 remain DONE; visual screenshot evidence spec exists under `tests/site-qa/visual`; route list includes `/`, canonical category routes, `/about`, `/contact`, `/support`, and `/search`; viewport set includes mobile 390x844, tablet 768x1024, and desktop 1440x1000; each route/viewport navigation confirms visible body and visible heading or landmark before capturing full-page screenshot evidence; screenshots are written only to ignored Playwright output/test-results; no screenshot baselines, comparisons, thresholds, approvals, production QA, source/runtime/customer-facing changes, protected-system changes, Playwright config changes, dependency changes, SEO changes, sitemap/robots changes, Sites configuration, hooks, version bump, or future task completions are introduced; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY009` work order; PLAY001; PLAY002; PLAY003; PLAY004; PLAY005; PLAY006; PLAY007; PLAY008; SITE001; SITEQA001; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Created `tests/site-qa/visual/public-screenshot-evidence.spec.ts` with screenshot evidence capture for `/`, `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, `/categories/aging-in-place`, `/about`, `/contact`, `/support`, and `/search` across mobile 390x844, tablet 768x1024, and desktop 1440x1000. Each route/viewport verifies local/default non-production base URL, non-failed navigation, visible body, and visible heading or landmark before writing a full-page PNG through Playwright `testInfo.outputPath`. Validation generated 30 screenshots under ignored `test-results/site-qa` only; no committed screenshot artifacts, baselines, comparisons, thresholds, approvals, visual regression configuration, Playwright config changes, existing test changes, source/runtime/site files, customer-facing behavior, SEO metadata, sitemap, robots, routes, CSS/tokens, dependencies, package-lock, Sites configuration, hooks, production QA, protected systems, environment files, secrets, version files, or future backlog task statuses were changed. `npm run build`, `npx playwright test --list`, and `npm run qa:site -- --project=chromium` passed; Chromium QA reported 60 passed and 1 existing skipped/fixme route case, and no listener remained on port 4173 after QA.

### PLAY010
- **Task ID:** PLAY010
- **Task Name:** Visual Baseline Candidate Capture
- **Status:** DONE
- **Category:** QA / Tooling
- **Tags:** Playwright / Site QA / Candidate Baselines / Visual QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add governed local QA capture for candidate visual baseline screenshots for review only, without approving baselines or enabling visual regression comparisons.
- **Allowed Scope:** Create `tests/site-qa/visual/public-baseline-candidates.spec.ts`; update only this Master Task Register record; capture full-page candidate baseline screenshots under ignored Playwright output/test-results during local/default Site QA.
- **Forbidden Scope:** No approved baseline images, committed screenshots, visual comparison tests, `toHaveScreenshot`, Playwright snapshot comparison APIs, snapshot folders, screenshot thresholds, production QA, source code, runtime files, website pages, routes, route behavior, CSS/tokens, catalog imports, SEO metadata, sitemap, robots.txt, Playwright config, existing tests, package files, dependency changes, package-lock changes, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files or secrets, Sites configuration, hooks, visual regression implementation completion, future backlog task completion, merge, or version bump.
- **Target Files:** `tests/site-qa/visual/public-baseline-candidates.spec.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev QA candidate screenshot capture only.
- **Documentation Updates Required:** Add this bounded task-register record if missing; mark DONE after validation passes; record that candidate baselines were generated for review only; do not mark visual regression implementation DONE; do not activate PLAY011 or later tasks.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; `npx playwright test --list`; `npm run qa:site -- --project=chromium` using local/default preview only; confirm candidate screenshots are generated only under ignored Playwright output; confirm normal `git status --short` does not show screenshot or snapshot artifacts; confirm no listener remains on port 4173 after QA.
- **Exit Criteria:** PLAY001 through PLAY009 remain DONE; SITE001, SITEQA001, and SITEQA002 remain DONE; visual baseline candidate spec exists under `tests/site-qa/visual`; route list includes `/`, canonical category routes, `/about`, `/contact`, `/support`, and `/search`; viewport set includes mobile 390x844, tablet 768x1024, and desktop 1440x1000; each route/viewport navigation confirms visible body and visible heading or landmark before capturing a full-page candidate baseline screenshot; screenshots are annotated as `candidate-baseline`, not approved baselines; screenshots use deterministic SITEQA002-aligned naming and are written only to ignored Playwright output/test-results; no approved baselines, committed screenshots, snapshot folders, visual comparison assertions, thresholds, production QA, source/runtime/customer-facing changes, protected-system changes, Playwright config changes, dependency changes, SEO changes, sitemap/robots changes, Sites configuration, hooks, version bump, visual regression completion, or future task completions are introduced; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY010` work order; PLAY001; PLAY002; PLAY003; PLAY004; PLAY005; PLAY006; PLAY007; PLAY008; PLAY009; SITE001; SITEQA001; SITEQA002; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review candidate screenshots and draft PR; decide whether any later bounded baseline approval task should be created.
- **Completion Notes:** Created `tests/site-qa/visual/public-baseline-candidates.spec.ts` with candidate visual baseline capture for `/`, `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, `/categories/aging-in-place`, `/about`, `/contact`, `/support`, and `/search` across mobile 390x844, tablet 768x1024, and desktop 1440x1000. Each route/viewport verifies local/default non-production base URL, non-failed navigation, visible body, and visible heading or landmark before writing a full-page PNG through Playwright `testInfo.outputPath`. Candidate screenshot names follow the SITEQA002-style pattern `<route-slug>__<viewport-class>-<width>x<height>__<browser>__candidate-baseline.png`; annotations use `candidate-baseline` with `approvedBaseline: false`. Validation generated 30 candidate screenshots under ignored `test-results/site-qa` only for review evidence. No committed screenshots, approved baseline images, snapshot folders, visual comparison assertions, `toHaveScreenshot`, screenshot thresholds, visual regression implementation, Playwright config changes, existing test changes, source/runtime/site files, customer-facing behavior, SEO metadata, sitemap, robots, routes, CSS/tokens, dependencies, package-lock, Sites configuration, hooks, production QA, protected systems, environment files, secrets, version files, or future backlog task statuses were changed. `npm run build`, `npx playwright test --list`, and `npm run qa:site -- --project=chromium` passed; Chromium QA reported 90 passed and 1 existing skipped/fixme route case, and no listener remained on port 4173 after QA.

### PLAY011
- **Task ID:** PLAY011
- **Task Name:** Public Route Accessibility Detection Checks
- **Status:** DONE
- **Category:** QA / Tooling
- **Tags:** Playwright / Site QA / Accessibility / Detection
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add governed local Playwright accessibility checks for the initial WNYHS public route set, detecting accessibility issues without fixing source code or changing customer-facing behavior.
- **Allowed Scope:** Create `tests/site-qa/accessibility/public-accessibility.spec.ts`; update only this Master Task Register record; run local/default Site QA only; record accessibility findings as structured observations.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, route behavior, CSS/tokens, copy, SEO metadata, sitemap, robots.txt, Playwright config, existing tests, package files, dependency changes, package-lock changes, axe or accessibility packages, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files or secrets, Sites configuration, hooks, production QA, accessibility fix-task activation, future backlog task completion, merge, or version bump.
- **Target Files:** `tests/site-qa/accessibility/public-accessibility.spec.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev QA accessibility detection only.
- **Documentation Updates Required:** Add this bounded task-register record if missing; mark DONE after validation passes; record accessibility findings as observations; do not activate accessibility fix tasks; do not mark future backlog tasks DONE.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; `npx playwright test --list`; `npm run qa:site -- --project=chromium` using local/default preview only; confirm accessibility checks run; confirm normal `git status --short` does not show ignored runtime artifacts; confirm no listener remains on port 4173 after QA.
- **Exit Criteria:** PLAY001 through PLAY010 remain DONE; SITE001, SITEQA001, and SITEQA002 remain DONE; accessibility spec exists under `tests/site-qa/accessibility`; route list includes `/`, canonical category routes, `/about`, `/contact`, `/support`, and `/search`; each route verifies successful page load, visible body, heading presence, main and navigation landmarks where available, accessible names for buttons and links, image alt/decorative posture, form/input labels or accessible names where present, and no obvious keyboard trap on initial Tab traversal; hard failures are limited to page load failure, missing visible body, production target guard, and missing accessible names on visible button/link controls; landmark gaps, image alt gaps, heading structure gaps, form-control label observations, and keyboard traversal concerns are structured observations unless already governed as blockers; no axe, new dependencies, production QA, source/runtime/customer-facing changes, protected-system changes, Playwright config changes, existing test changes, package changes, version bump, accessibility fix-task activation, or future backlog completions are introduced; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY011` work order; PLAY001; PLAY002; PLAY003; PLAY004; PLAY005; PLAY006; PLAY007; PLAY008; PLAY009; PLAY010; SITE001; SITEQA001; SITEQA002; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review accessibility observations and draft PR; decide whether any later bounded accessibility remediation task should be created.
- **Completion Notes:** Created `tests/site-qa/accessibility/public-accessibility.spec.ts` with local/default Playwright accessibility detection checks for `/`, `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, `/categories/aging-in-place`, `/about`, `/contact`, `/support`, and `/search`. Each route verifies local non-production targeting, page response, visible body, accessible heading count, main and navigation landmark count, visible button/link accessible names, visible image alt/decorative posture, visible form-control label/name posture, and initial Tab traversal. Hard failures are limited to page load failure, missing visible body, production target guard, and missing accessible names on visible buttons/links; form-control label gaps, missing headings, missing landmarks, image alt gaps, and keyboard traversal concerns are structured observations. Accessibility observations recorded during validation: missing navigation landmark on `/`; missing heading/main/navigation landmarks on `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, `/categories/aging-in-place`, `/about`, `/contact`, `/support`, and `/search`; `/support` has three visible form controls without labels or accessible names. No visible button/link accessible-name failures, image-alt observations, or keyboard-traversal observations were detected. `npm run build`, `npm run typecheck:test`, `npx playwright test --list`, focused Chromium accessibility validation, and full local/default `npm run qa:site -- --project=chromium` passed; full Chromium QA reported 100 passed and 1 existing skipped/fixme route case. No source/runtime/customer-facing files, routes, CSS/tokens, copy, SEO, sitemap, robots, Playwright config, existing tests, package files, dependencies, package-lock, axe packages, Sites config, hooks, production QA, accessibility fix-task activation, protected systems, version files, or future backlog task statuses were changed. No listener remained on port 4173 after QA; generated QA artifacts remained ignored, and a transient root `debug.log` generated by Chromium was removed.

### PLAY012
- **Task ID:** PLAY012
- **Task Name:** Public Route Performance Observation Checks
- **Status:** DONE
- **Category:** QA / Tooling
- **Tags:** Playwright / Site QA / Performance / Detection
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add governed local Playwright performance observation checks for the initial WNYHS public route set, detecting performance issues without fixing source code, optimizing assets, changing routes, or changing customer-facing behavior.
- **Allowed Scope:** Create `tests/site-qa/performance/public-performance.spec.ts`; update only this Master Task Register record; run local/default Site QA only; record performance findings as structured observations.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, route behavior, CSS/tokens, copy, images/assets, SEO metadata, sitemap, robots.txt, Playwright config, existing tests, package files, dependency changes, package-lock changes, Lighthouse, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files or secrets, Sites configuration, hooks, production QA, performance fix-task activation, future backlog task completion, merge, or version bump.
- **Target Files:** `tests/site-qa/performance/public-performance.spec.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev QA performance detection only.
- **Documentation Updates Required:** Add this bounded task-register record if missing; mark DONE after validation passes; record performance findings as observations; do not activate performance fix tasks; do not mark future backlog tasks DONE.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; `npm run typecheck:test`; `npx playwright test --list`; `npm run qa:site -- --project=chromium` using local/default preview only; confirm performance checks run; confirm normal git status does not show ignored runtime artifacts; confirm no listener remains on port 4173 after QA.
- **Exit Criteria:** PLAY001 through PLAY011 remain DONE; SITE001, SITEQA001, and SITEQA002 remain DONE; performance spec exists under `tests/site-qa/performance`; route list includes `/`, canonical category routes, `/about`, `/contact`, `/support`, and `/search`; each route captures page load response status, DOMContentLoaded timing, load event timing, transferred resource count where available, large image/resource observations, slow request observations, basic navigation timing data, and approximate JS/CSS/image request counts where observable; hard failures are limited to page load failure and non-production targeting guard; slow timings, large resources, and high request counts are structured observations; no Lighthouse, new dependencies, production QA, source/runtime/customer-facing changes, protected-system changes, Playwright config changes, existing test changes, package changes, version bump, performance fix-task activation, or future backlog completions are introduced; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY012` work order; PLAY001; PLAY002; PLAY003; PLAY004; PLAY005; PLAY006; PLAY007; PLAY008; PLAY009; PLAY010; PLAY011; SITE001; SITEQA001; SITEQA002; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review performance observations and draft PR; decide whether any later bounded performance remediation task should be created.
- **Completion Notes:** Created `tests/site-qa/performance/public-performance.spec.ts` with local/default Playwright performance observation checks for `/`, `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, `/categories/aging-in-place`, `/about`, `/contact`, `/support`, and `/search`. Each route captures page load response status, DOMContentLoaded timing, load event timing, transferred resource count where available, large resource observations, slow request observations, navigation timing data, and approximate JS/CSS/image request counts where observable. Page load failure and non-production targeting guard are hard failures; slow timings, large resources, slow resources, network-idle timing, and high request counts are structured observations only. Performance observations recorded during validation: homepage and category routes load multiple image resources above 500 KB; canonical category routes repeatedly load 1 MB to 3 MB image resources including crest/core/category/solution/homepage assets; some category image resources exceeded the 1,000 ms duration observation threshold; `/search` loaded the crest image above 500 KB; `/about`, `/contact`, and `/support` did not emit performance observations in the final full Chromium run. Focused performance validation passed with 10 Chromium checks. The exact required `npm run qa:site -- --project=chromium` passed with 110 passed and 1 existing skipped/fixme route case after reusing an already-running local preview server; an initial attempt without an existing server exposed a pre-existing Node 24 / `npm.cmd` `spawn EINVAL` failure in `scripts/site-qa-preview-server.mjs`, so the helper/config were not changed in this task. `npm run build`, `npm run typecheck:test`, and `npx playwright test --list` passed. No Lighthouse, source/runtime/customer-facing files, routes, CSS/tokens, images/assets, SEO, sitemap, robots, Playwright config, existing tests, package files, dependencies, package-lock, Sites config, hooks, production QA, performance fix-task activation, protected systems, version files, or future backlog task statuses were changed. Generated QA artifacts remained ignored, and no listener remained on port 4173 after QA.

### PLAY013
- **Task ID:** PLAY013
- **Task Name:** Public Route Structured Data Observation Checks
- **Status:** DONE
- **Category:** QA / Tooling
- **Tags:** Playwright / Site QA / Structured Data / Detection
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add governed local Playwright structured data observation checks for the initial WNYHS public route set, detecting structured data presence and JSON-LD validity without fixing schema, changing SEO implementation, editing routes, or changing customer-facing behavior.
- **Allowed Scope:** Create `tests/site-qa/structured-data/public-structured-data.spec.ts`; update only this Master Task Register record; run local/default Site QA only; record structured data findings as observations.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, route behavior, CSS/tokens, copy, SEO metadata implementation, structured data implementation, sitemap, robots.txt, Playwright config, existing tests, package files, dependency changes, package-lock changes, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files or secrets, Sites configuration, hooks, external validators, production QA, structured-data fix-task activation, future backlog task completion, merge, or version bump.
- **Target Files:** `tests/site-qa/structured-data/public-structured-data.spec.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev QA structured data detection only.
- **Documentation Updates Required:** Add this bounded task-register record if missing; mark DONE after validation passes; record structured data findings as observations; do not activate schema fix tasks; do not mark future backlog tasks DONE.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; `npm run typecheck:test`; `npx playwright test --list`; `npm run qa:site -- --project=chromium` using local/default preview only; confirm structured data checks run; confirm normal git status does not show ignored runtime artifacts; confirm no listener remains on port 4173 after QA.
- **Exit Criteria:** PLAY001 through PLAY012 remain DONE; SITE001, SITEQA001, and SITEQA002 remain DONE; structured data spec exists under `tests/site-qa/structured-data`; route list includes `/`, canonical category routes, `/about`, `/contact`, `/support`, and `/search`; each route verifies successful page load, visible body, JSON-LD script detection when present, valid JSON-LD parsing, schema object `@type` recognition when present, route-level expected schema observations, and detection of likely Organization, LocalBusiness, WebSite, BreadcrumbList, Service, FAQPage, or SearchAction schema when present; hard failures are limited to page load failure, missing visible body, production target guard, and invalid JSON-LD syntax; missing expected schema types are structured observations only; no external validators, new dependencies, production QA, source/runtime/customer-facing changes, protected-system changes, Playwright config changes, existing test changes, package changes, version bump, schema fix-task activation, or future backlog completions are introduced; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY013` work order; PLAY001; PLAY002; PLAY003; PLAY004; PLAY005; PLAY006; PLAY007; PLAY008; PLAY009; PLAY010; PLAY011; PLAY012; SITE001; SITEQA001; SITEQA002; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review structured data observations and draft PR; decide whether any later bounded schema remediation task should be created.
- **Completion Notes:** Created `tests/site-qa/structured-data/public-structured-data.spec.ts` with local/default Playwright structured data observation checks for `/`, `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, `/categories/aging-in-place`, `/about`, `/contact`, `/support`, and `/search`. Each route verifies non-production targeting, successful page load, visible body, JSON-LD script detection, valid JSON-LD parsing when present, observed `@type` values, recognized Organization/LocalBusiness/WebSite/BreadcrumbList/Service/FAQPage/SearchAction schema types when present, and route-level expected schema as observations only. Validation findings: no JSON-LD script blocks were detected on any checked route; therefore no recognized schema types were detected, expected route-level schema types were recorded as structured observations, and no invalid JSON-LD syntax failures occurred. `npm run build`, `npm run typecheck:test`, `npx playwright test --list`, and full local/default `npm run qa:site -- --project=chromium` passed; full Chromium QA reported 120 passed and 1 existing skipped/fixme route case, and the structured data checks ran for all 10 routes. No source/runtime/customer-facing files, routes, SEO or schema implementation, metadata, sitemap, robots, CSS/tokens, copy, Playwright config, existing tests, package files, dependencies, package-lock, external validators, Sites config, hooks, production QA, schema fix-task activation, protected systems, version files, or future backlog task statuses were changed. Generated QA artifacts remained ignored, and no listener remained on port 4173 after QA.

### PLAY014
- **Task ID:** PLAY014
- **Task Name:** Public Sitemap and Robots Crawlability Checks
- **Status:** DONE
- **Category:** QA / Tooling
- **Tags:** Playwright / Site QA / Sitemap / Robots / Crawlability / Detection
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add governed local Playwright sitemap and robots observation checks for public crawlability signals without fixing sitemap generation, robots policy, SEO implementation, routes, or customer-facing behavior.
- **Allowed Scope:** Create `tests/site-qa/crawl/public-sitemap-robots.spec.ts`; update only this Master Task Register record; run local/default Site QA only; record sitemap and robots findings as structured observations.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, route behavior, CSS/tokens, copy, SEO metadata implementation, sitemap generation, sitemap.xml edits, robots.txt edits, Playwright config, existing tests, package files, dependency changes, package-lock changes, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files or secrets, Sites configuration, hooks, external validators, production QA, sitemap/robots fix-task activation, future backlog task completion, merge, or version bump.
- **Target Files:** `tests/site-qa/crawl/public-sitemap-robots.spec.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev QA crawlability detection only.
- **Documentation Updates Required:** Add this bounded task-register record if missing; mark DONE after validation passes; record sitemap/robots findings as observations; do not activate sitemap/robots fix tasks; do not mark future backlog tasks DONE.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; `npm run typecheck:test`; `npx playwright test --list`; `npm run qa:site -- --project=chromium` using local/default preview only; confirm sitemap/robots checks run; confirm normal git status does not show ignored runtime artifacts; confirm no listener remains on port 4173 after QA.
- **Exit Criteria:** PLAY001 through PLAY013 remain DONE; SITE001, SITEQA001, and SITEQA002 remain DONE; sitemap/robots spec exists under `tests/site-qa/crawl`; seed route list includes `/`, canonical category routes, `/about`, `/contact`, `/support`, and `/search`; `/robots.txt` and `/sitemap.xml` load or record missing as observations; robots disallow rules are recorded; sitemap XML is parsed when present; sitemap URLs are extracted, checked for expected host/path behavior, checked for obvious private/internal/operator routes, and mapped to local non-failed responses where possible; seed public routes are compared against sitemap presence as observations; hard failures are limited to production target guard, invalid XML when sitemap exists, endpoint error responses when present, and failed local responses for sitemap URL paths; no external validators, production QA, source/runtime/customer-facing changes, protected-system changes, Playwright config changes, existing test changes, package changes, version bump, sitemap/robots fix-task activation, or future backlog completions are introduced; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY014` work order; PLAY001; PLAY002; PLAY003; PLAY004; PLAY005; PLAY006; PLAY007; PLAY008; PLAY009; PLAY010; PLAY011; PLAY012; PLAY013; SITE001; SITEQA001; SITEQA002; SEO004; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review sitemap/robots observations and draft PR; decide whether any later bounded sitemap/robots remediation task should be created.
- **Completion Notes:** Created `tests/site-qa/crawl/public-sitemap-robots.spec.ts` with local/default Playwright crawlability checks for `/robots.txt` and `/sitemap.xml`. The spec guards against production targets, treats missing robots/sitemap and seed-route sitemap gaps as observations, parses robots as plain text when present, records robots disallow rules, parses sitemap XML when present, extracts sitemap URLs, checks expected canonical host/path shape, flags obvious private/internal/operator routes as observations, checks sitemap URL paths against local preview, and compares the seed public route list (`/`, five canonical `/categories/*` routes, `/about`, `/contact`, `/support`, `/search`) against sitemap presence. Validation findings: `robots.txt` returned 200 as `text/plain` and recorded disallow rules for `/admin`, `/certificate`, `/operator`, `/prototype`, `/review`, `/test`, and `/uat`; `sitemap.xml` returned 200 as `text/xml`, parsed as valid XML, and exposed 15 sitemap URLs. No sitemap-missing, robots-missing, seed-route-missing, host-mismatch, private-route, sitemap URL shape, invalid XML, endpoint error, or local sitemap URL response failure was observed. `npm run build`, `npm run typecheck:test`, `npx playwright test --list`, and full cold-start local/default `npm run qa:site -- --project=chromium` passed; full Chromium QA reported 121 passed and 1 existing skipped/fixme route case, and the sitemap/robots crawl check ran. No source/runtime/customer-facing files, routes, SEO implementation, sitemap generation, sitemap.xml, robots.txt, CSS/tokens, copy, Playwright config, existing tests, package files, dependencies, package-lock, external validators, Sites config, hooks, production QA, sitemap/robots fix-task activation, protected systems, version files, or future backlog task statuses were changed. Generated QA artifacts remained ignored, a transient root `debug.log` generated by Chromium was removed, and no listener remained on port 4173 after QA.

### PLAY015
- **Task ID:** PLAY015
- **Task Name:** Public Claims and Copy Governance Checks
- **Status:** DONE
- **Category:** QA / Tooling
- **Tags:** Playwright / Site QA / Claims / Copy / Detection
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add governed local Playwright copy-claim observation checks for the initial WNYHS public route set without changing public copy, routes, source/runtime files, or customer-facing behavior.
- **Allowed Scope:** Create `tests/site-qa/content/public-claims-copy.spec.ts`; update only this Master Task Register record; run local/default Site QA only; record claims/copy findings as structured observations.
- **Forbidden Scope:** No source code, runtime files, website pages, routes, route behavior, CSS/tokens, copy edits, SEO metadata implementation, sitemap edits, robots edits, Playwright config, existing tests, package files, dependency changes, package-lock changes, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files or secrets, Sites configuration, hooks, external validators, production QA, copy/claims remediation task activation, future backlog task completion, merge, or version bump.
- **Target Files:** `tests/site-qa/content/public-claims-copy.spec.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev QA claims/copy detection only.
- **Documentation Updates Required:** Add this bounded task-register record if missing; mark DONE after validation passes; record claims/copy findings as observations; do not activate copy remediation tasks; do not mark future backlog tasks DONE.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; `npm run typecheck:test`; `npx playwright test --list`; `npm run qa:site -- --project=chromium` using local/default preview only; confirm claims/copy checks run; confirm normal git status does not show ignored runtime artifacts; confirm no listener remains on port 4173 after QA.
- **Exit Criteria:** PLAY001 through PLAY014 remain DONE; SITE001, SITEQA001, and SITEQA002 remain DONE; claims/copy spec exists under `tests/site-qa/content`; route list includes `/`, canonical category routes, `/about`, `/contact`, `/support`, and `/search`; each route captures visible page text and checks governed emergency/dispatch, guaranteed safety/prevention, monitoring/alarm-company, medical/elder-care, subscription/lock-in conflict, insurance/risk-reduction, and surveillance-risk claim groups; matches are recorded as structured observations with route, matched phrase, claim group, and nearby text snippet; hard failures are limited to production target guard, page load failure, and missing visible body; no external validators, production QA, source/runtime/customer-facing changes, protected-system changes, Playwright config changes, existing test changes, package changes, version bump, copy/claims fix-task activation, or future backlog completions are introduced; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY015` work order; PLAY001; PLAY002; PLAY003; PLAY004; PLAY005; PLAY006; PLAY007; PLAY008; PLAY009; PLAY010; PLAY011; PLAY012; PLAY013; PLAY014; SITE001; SITEQA001; SITEQA002; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review claims/copy observations and draft PR; decide whether any later bounded copy/claims remediation task should be created.
- **Completion Notes:** Created `tests/site-qa/content/public-claims-copy.spec.ts` with local/default Playwright claims/copy observation checks for `/`, `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, `/categories/aging-in-place`, `/about`, `/contact`, `/support`, and `/search`. The spec guards against production targets, requires successful page load and visible body text, captures browser-visible page text, checks emergency/dispatch, guaranteed safety/prevention, monitoring/alarm-company, medical/elder-care, subscription/lock-in conflict, insurance/risk-reduction, and surveillance-risk claim groups, and records any matches as structured observations with route, matched phrase, claim group, and nearby snippet. Validation findings: claims/copy checks ran for all 10 routes and emitted no `claims-copy-observation` matches. `npm run build`, `npm run typecheck:test`, `npx playwright test --list`, and full cold-start local/default `npm run qa:site -- --project=chromium` passed; full Chromium QA reported 131 passed and 1 existing skipped/fixme route case, and the claims/copy checks ran. No source/runtime/customer-facing files, routes, SEO implementation, metadata, sitemap, robots, CSS/tokens, copy, Playwright config, existing tests, package files, dependencies, package-lock, external validators, Sites config, hooks, production QA, copy/claims fix-task activation, protected systems, version files, or future backlog task statuses were changed. Generated QA artifacts remained ignored, a transient root `debug.log` generated by Chromium was removed, and no listener remained on port 4173 after QA.

### PLAY016
- **Task ID:** PLAY016
- **Task Name:** Public Route Inventory Validation
- **Status:** DONE
- **Category:** QA / Tooling
- **Tags:** Playwright / Site QA / Route Inventory / Sitemap / Navigation / Observation
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add a governed local Playwright route inventory validation pass that compares known public route candidates against current seed Site QA routes, sitemap routes, app route definitions/constants/maps, visible navigation/header/footer links, and manual expected-route candidates without changing routes or customer-facing behavior.
- **Allowed Scope:** Create `tests/site-qa/routes/public-route-inventory.spec.ts`; update only this Master Task Register record; run local/default Site QA only; record route inventory findings as structured observations; confirm the current 10-route Site QA route set is seed coverage only.
- **Forbidden Scope:** No source/runtime/site files, route edits, page additions, page removals, copy edits, SEO implementation edits, metadata implementation edits, sitemap generation edits, sitemap.xml edits, robots.txt edits, CSS/tokens, Playwright config, existing tests, package files, dependency changes, package-lock changes, quote flow, planner, scheduling, HubSpot/CRM files, Stripe/payment files, Resend/email files, Cloudflare config, environment files or secrets, Sites configuration, hooks, external validators, production QA, route remediation task activation, future backlog task completion, merge, or version bump.
- **Target Files:** `tests/site-qa/routes/public-route-inventory.spec.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Dev QA route inventory and observation tooling only.
- **Documentation Updates Required:** Add this bounded task-register record if missing; mark DONE after validation passes; record route inventory findings as observations; record that the current 10-route set is only seed coverage; do not activate route remediation tasks; do not mark future backlog tasks DONE.
- **Validation Required:** `git status --short`; `git diff --stat`; `git diff --name-only`; `git diff --check`; `npm run build`; `npm run typecheck:test`; `npx playwright test --list`; `npm run qa:site -- --project=chromium` using local/default preview only; confirm QA exits cleanly from cold start; confirm route inventory checks run; confirm normal git status does not show ignored runtime artifacts; confirm no listener remains on port 4173 after QA.
- **Exit Criteria:** PLAY001 through PLAY015 remain DONE; SITE001, SITEQA001, and SITEQA002 remain DONE; route inventory spec exists under `tests/site-qa/routes`; manual expected-route candidates include `/`, `/search`, `/solutions`, `/fit-check`, `/estimate`, `/support`, `/our-work`, `/about`, `/contact`, `/privacy`, `/terms`, `/request-call`, `/request-onsite-estimate`, and the five canonical `/categories/*` routes; route sources inspected include current seed Site QA route lists, sitemap.xml when present, app route definitions/constants/maps where discoverable, visible navigation/header/footer links where available, and manual expected-route candidates; package pages, individual solution pages, QR landing pages, dashboard demo pages, quote/agreement/deposit/success/cancel/schedule funnel pages, Home Assistant demo pages, and legacy/newsite/review/prototype/operator routes are recorded as observations if discovered; hard failures are limited to production target guard, route inventory spec failing to load the local app root, and invalid sitemap XML when sitemap exists; missing expected routes, extra routes, private/protected route exposure, seed coverage gaps, sitemap gaps, and nav/sitemap mismatches are structured observations; no route, sitemap, robots, source/runtime/customer-facing, Playwright config, dependency, protected-system, production QA, route remediation, or future backlog changes are introduced; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `PLAY016` work order; PLAY001; PLAY002; PLAY003; PLAY004; PLAY005; PLAY006; PLAY007; PLAY008; PLAY009; PLAY010; PLAY011; PLAY012; PLAY013; PLAY014; PLAY015; SITE001; SITEQA001; SITEQA002; SEO004; SITEARCH002; SITEARCH004; SEARCH001; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review route inventory observations and draft PR; decide whether any later bounded route remediation/classification tasks should be created.
- **Completion Notes:** Created `tests/site-qa/routes/public-route-inventory.spec.ts` with a governed local/default Playwright route inventory comparison across existing seed Site QA route specs, `/sitemap.xml`, app route definitions/constants/maps from `src/App.tsx`, `src/content/wnyhsNavigation.ts`, `src/content/publicSearchIndex.ts`, `src/content/wnyhsOfferCatalog.ts`, and `src/lib/seoPolicy.ts`, visible rendered root navigation/page links, and PLAY016 manual expected-route candidates. Manual candidates include `/`, `/search`, `/solutions`, `/fit-check`, `/estimate`, `/support`, `/our-work`, `/about`, `/contact`, `/privacy`, `/terms`, `/request-call`, `/request-onsite-estimate`, `/categories/home-security`, `/categories/aging-in-place`, `/categories/home-safety`, `/categories/home-automation`, and `/categories/home-lighting`. Validation findings: the current 10-route Site QA set is confirmed as seed coverage only; `/sitemap.xml` parsed as valid XML and exposed the current 15-route sitemap set; manual candidates `/solutions`, `/request-call`, and `/request-onsite-estimate` were not discovered in seed, sitemap, app route definitions/constants/maps, or visible root navigation; `/fit-check`, `/estimate`, `/privacy`, and `/terms` were app-defined manual candidates but not in seed QA or sitemap; `/our-work` was in sitemap/app definitions but not seed QA. The inventory recorded observations for package routes, individual solution routes, QR landing routes, dashboard/demo and Home Assistant demo routes, quote/agreement/deposit/success/cancel/schedule funnel routes, private/protected/operator routes, and legacy/newsite/review/prototype/operator route candidates. Missing expected routes, extra routes, private/protected route exposure, seed coverage gaps, sitemap gaps, and nav/sitemap mismatches are structured observations only; hard failures remain limited to production target guard, local app root load failure, and invalid sitemap XML when sitemap exists. `npm run build`, `npm run typecheck:test`, `npx playwright test --list`, full cold-start local/default `npm run qa:site -- --project=chromium`, and focused `npx playwright test tests/site-qa/routes/public-route-inventory.spec.ts --project=chromium` passed; full Chromium QA reported 132 passed and 1 existing skipped/fixme route case, and the route inventory check ran. No source/runtime/customer-facing files, routes, pages, SEO implementation, metadata implementation, sitemap generation, sitemap.xml, robots.txt, CSS/tokens, copy, Playwright config, existing tests, package files, dependencies, package-lock, external validators, Sites config, hooks, production QA, route remediation task activation, protected systems, version files, or future backlog task statuses were changed. Generated QA artifacts remained ignored, and no listener remained on port 4173 after QA.

---

## Active Tasks (Execution Driver)

### VISPARITY001
- **Task ID:** VISPARITY001
- **Task Name:** Public Route and Visual Element Discovery Inventory
- **Status:** DONE
- **Category:** QA
- **Tags:** Visual System / Site Architecture / Public Routes / Discovery / Documentation
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a discovery inventory of the current public-facing WNYHS website routes and visual elements so later tasks can standardize visual parity, structural parity, token usage, image usage, and accessibility.
- **Allowed Scope:** Create `docs/design-system/visual-parity/VISPARITY001_PUBLIC_ROUTE_ELEMENT_DISCOVERY_REV01.md`; create `docs/design-system/visual-parity/README.md` if needed; update only this task-register record; inspect current route, navigation, footer, sitemap, search, SEO, visual, image, token, and governance evidence; document current-state discovery only.
- **Forbidden Scope:** No source code edits, route edits, CSS edits, token edits, UI/component edits, image/asset edits, sitemap edits, robots edits, runtime/API edits, HubSpot edits, Stripe/payment edits, scheduling edits, Cloudflare config edits, dependency or package-lock edits, Playwright tests, hooks, QA checks, visual-standard approval, Active KAOS Rule creation, merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/VISPARITY001_PUBLIC_ROUTE_ELEMENT_DISCOVERY_REV01.md`; `docs/design-system/visual-parity/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation/discovery only.
- **Documentation Updates Required:** Add this bounded VISPARITY001 tracking record because it was missing from the Master Task Register but explicitly authorized by the prompt; create the discovery inventory and visual-parity index README.
- **Validation Required:** `git diff --check`; targeted `rg` for VISPARITY001 required discovery phrases in `docs/design-system` and `docs/system`; merge-conflict marker scan in `docs`; `npm run build`.
- **Exit Criteria:** Discovery document exists; candidate complete public route list is documented; route source evidence, status, layout families, repeated visual elements, unique elements, image usage candidates, CSS/token evidence, accessibility risks, governance docs, gaps, and recommended next task sequence are recorded; document clearly states current-state discovery only and no approval/implementation authority; only allowed files changed; protected systems untouched; validation passes; draft PR opened without merge.
- **Dependencies:** Prompt-created bounded VISPARITY001 work order; PR #419 / KAOS-HOOK005 merged; repo-local `.codex/` present; current governance authority chain; `docs/codex/CODEX_RUN_CONTRACT.md`; OPS004; OPS005; visual, site architecture, SEO, search, image, and hook governance docs discovered by targeted reads.
- **Operator Decision Required:** Review draft PR and decide whether to activate a later bounded VISPARITY follow-up task.
- **Completion Notes:** Added this VISPARITY001 tracking record as directed by the prompt after confirming it was missing from the register. Created `docs/design-system/visual-parity/` with a README and current-state discovery inventory. The inventory documents the route discovery method, candidate public route list, source evidence from route declarations, nav/footer, sitemap, search index, SEO policy, embedded links, and QR route context; records public/private/review/protected status where discoverable; inventories repeated visual elements, page/layout families, unique page-specific elements, image usage candidates, CSS/token/style evidence, accessibility risks, governance docs, gaps, and recommended next VISPARITY task sequence. No source/runtime/UI/routes/CSS/tokens/images/assets/sitemap/robots/hooks/QA checks/protected systems/dependencies/package-lock/version files were changed.

### VISPARITY002
- **Task ID:** VISPARITY002
- **Task Name:** Public Marketing Visual Parity Target Matrix
- **Status:** DONE
- **Category:** QA
- **Tags:** Visual System / Public Marketing / Target Matrix / Documentation
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Convert VISPARITY001 discovery into a target matrix for public marketing visual, structural, image, token, accessibility, and page-family parity without changing implementation.
- **Allowed Scope:** Create `docs/design-system/visual-parity/VISPARITY002_PUBLIC_MARKETING_VISUAL_PARITY_TARGET_MATRIX_REV01.md`; update `docs/design-system/visual-parity/README.md`; add/update only this task-register record; define public marketing page family scope, component/element targets, color/token targets, image targets, accessibility targets, page-family compliance targets, and future VISPARITY task sequence.
- **Forbidden Scope:** No source code edits, route edits, CSS edits, token edits, UI/component edits, image/asset edits, sitemap edits, robots edits, runtime/API edits, HubSpot edits, Stripe/payment edits, scheduling edits, Cloudflare config edits, dependency or package-lock edits, Playwright tests, hooks, QA checks, final CSS/token value approval, Active KAOS Rule creation, protected-route cleanup authorization, merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/VISPARITY002_PUBLIC_MARKETING_VISUAL_PARITY_TARGET_MATRIX_REV01.md`; `docs/design-system/visual-parity/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation/target matrix only.
- **Documentation Updates Required:** Add this bounded VISPARITY002 tracking record because it was missing from the Master Task Register but explicitly authorized by the prompt; create the target matrix; update the visual-parity README.
- **Validation Required:** `git diff --check`; targeted `rg` for VISPARITY002 required matrix phrases in `docs/design-system` and `docs/system`; targeted `rg` for non-authority boundary phrases; targeted `rg` for future VISPARITY003 through VISPARITY010 task IDs; merge-conflict marker scan in `docs`; `npm run build`.
- **Exit Criteria:** Target matrix exists; public marketing page scope boundary is documented; component/element target matrix, Color/token matrix, Image parity matrix, Accessibility target matrix, and Page-family compliance matrix are present; QR Landing is included separately; review/noindex demo or planner pages are classified as review-only; future VISPARITY003 through VISPARITY010 sequence is listed; document clearly states target matrix only and no implementation authority; only allowed files changed; protected systems untouched; validation passes; draft PR opened without merge.
- **Dependencies:** Prompt-created bounded VISPARITY002 work order; merged PR #420 / VISPARITY001; VISPARITY001 discovery document; current governance authority chain; `docs/codex/CODEX_RUN_CONTRACT.md`; OPS004; OPS005; visual, page layout, header/footer, public funnel, QR funnel, category image, site architecture, and SEO current-state docs discovered by targeted reads.
- **Operator Decision Required:** Review draft PR and decide whether to activate a later bounded VISPARITY follow-up task.
- **Completion Notes:** Added this VISPARITY002 tracking record as directed by the prompt after confirming it was missing from the register. Created the public marketing visual parity target matrix and updated the visual-parity README. The matrix covers homepage/host entry, canonical category pages, solution pages, search, about, our work, contact, support, legal pages, QR Landing as a standalone campaign entry, and public-reachable noindex demo/planner pages as review-only candidates. It defines component/element targets for top navigation, footer, hero, page intro/header, eyebrow, heading, body copy, CTA button, secondary/link button, card, tile, panel, WNYHS Core Panel, package/tier block, proof/gallery block, image block, form, field/input/select/textarea, alert/info block, badge/ribbon, search result block, legal text block, and QR campaign block. It also defines color/token, image, accessibility, and page-family compliance target matrices plus future VISPARITY003 through VISPARITY010 sequencing. No source/runtime/UI/routes/CSS/tokens/images/assets/sitemap/robots/hooks/QA checks/protected systems/dependencies/package-lock/version files were changed.

### VISPARITY003
- **Task ID:** VISPARITY003
- **Task Name:** Visual Component Naming Standard
- **Status:** DONE
- **Category:** QA
- **Tags:** Visual System / Component Naming / Documentation / Visual Parity
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Convert VISPARITY001 discovery and VISPARITY002 target matrix into canonical visual component and element names for future CSS/token, image, QA, and hook mapping tasks without changing implementation.
- **Allowed Scope:** Create `docs/design-system/visual-parity/VISPARITY003_VISUAL_COMPONENT_NAMING_STANDARD_REV01.md`; update `docs/design-system/visual-parity/README.md`; add/update only this task-register record; define canonical component names, categories, definitions, page-family expectations, allowed variants, forbidden aliases, likely current implementation aliases, future token mapping needs, future QA/hook candidates, mapping rules, current alias/ambiguity register, and recommended next VISPARITY task.
- **Forbidden Scope:** No source code edits, route edits, CSS edits, token edits, UI/component edits, image/asset edits, sitemap edits, robots edits, runtime/API edits, HubSpot edits, Stripe/payment edits, scheduling edits, Cloudflare config edits, dependency or package-lock edits, Playwright tests, hooks, QA checks, final CSS/token value approval, implementation class renaming, Active KAOS Rule creation, protected-route cleanup authorization, merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/VISPARITY003_VISUAL_COMPONENT_NAMING_STANDARD_REV01.md`; `docs/design-system/visual-parity/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation/naming standard only.
- **Documentation Updates Required:** Add this bounded VISPARITY003 tracking record because it was missing from the Master Task Register but explicitly authorized by the prompt; create the visual component naming standard; update the visual-parity README.
- **Validation Required:** `git diff --check`; targeted `rg` for VISPARITY003 required naming-standard phrases in `docs/design-system` and `docs/system`; targeted `rg` for non-authority boundary phrases; merge-conflict marker scan in `docs`; `npm run build`.
- **Exit Criteria:** Visual component naming standard exists; boundary is documented; naming principles are documented; canonical component naming table covers navigation/shell, page structure, text, actions, containers, strategic/unique, forms, and images/assets; variant naming rules are present; mapping rules are present; current alias/ambiguity register is present; recommended next task is `VISPARITY004 - CSS Token Mapping and Gap Register`; document clearly states naming standard only and no implementation authority; only allowed files changed; protected systems untouched; validation passes; draft PR opened without merge.
- **Dependencies:** Prompt-created bounded VISPARITY003 work order; latest `main`; merged PR #421 / VISPARITY002; VISPARITY001 discovery document; VISPARITY002 target matrix; current governance authority chain; `docs/codex/CODEX_RUN_CONTRACT.md`; OPS004; OPS005; visual, page layout, header/footer, public funnel, and QR funnel governing docs discovered by targeted reads.
- **Operator Decision Required:** Review draft PR and decide whether to activate `VISPARITY004 - CSS Token Mapping and Gap Register`.
- **Completion Notes:** Added this VISPARITY003 tracking record as directed by the prompt after confirming it was missing from the register. Created the visual component naming standard and updated the visual-parity README. The standard defines canonical names across navigation/shell, page structure, text, actions, containers, strategic/unique, forms, and images/assets; records allowed variants; maps current mixed vocabulary such as `btn`, `button`, `tile`, `card`, `panel`, `premium`, `qr`, `hs-premium`, `wnyhs`, `category`, `image`, and `form` to canonical role names; and recommends `VISPARITY004 - CSS Token Mapping and Gap Register` as the next bounded task. No source/runtime/UI/routes/CSS/tokens/images/assets/sitemap/robots/hooks/QA checks/protected systems/dependencies/package-lock/version files were changed.

### VISPARITY004
- **Task ID:** VISPARITY004
- **Task Name:** CSS Token Mapping and Gap Register
- **Status:** DONE
- **Category:** QA
- **Tags:** Visual System / CSS Tokens / Gap Register / Documentation / Visual Parity
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the CSS token mapping and gap register for WNYHS public marketing visual parity by mapping VISPARITY003 canonical component names to existing semantic token categories, known token sources, and token gaps without changing implementation.
- **Allowed Scope:** Create `docs/design-system/visual-parity/VISPARITY004_CSS_TOKEN_MAPPING_AND_GAP_REGISTER_REV01.md`; update `docs/design-system/visual-parity/README.md`; add/update only this task-register record; inspect current token/style evidence as read-only source evidence; document token source inventory, semantic token category model, component-to-token mapping table, token gap register, non-authority statement, and recommended next VISPARITY task.
- **Forbidden Scope:** No source code edits, route edits, CSS edits, token edits, UI/component edits, image/asset edits, sitemap edits, robots edits, runtime/API edits, HubSpot edits, Stripe/payment edits, scheduling edits, Cloudflare config edits, dependency or package-lock edits, Playwright tests, hooks, QA checks, final CSS/token value approval, implementation class renaming, Active KAOS Rule creation, protected-route cleanup authorization, merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/VISPARITY004_CSS_TOKEN_MAPPING_AND_GAP_REGISTER_REV01.md`; `docs/design-system/visual-parity/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation/token mapping only.
- **Documentation Updates Required:** Add this bounded VISPARITY004 tracking record because it was missing from the Master Task Register but explicitly authorized by the prompt; create the CSS token mapping and gap register; update the visual-parity README.
- **Validation Required:** `git diff --check`; targeted `rg` for VISPARITY004 required mapping/gap phrases in `docs/design-system` and `docs/system`; targeted `rg` for non-authority boundary phrases; targeted `rg` for required gap evidence terms; merge-conflict marker scan in `docs`; `npm run build`.
- **Exit Criteria:** CSS token mapping and gap register exists; boundary is documented; token source inventory is present; Semantic token category model is present; Component-to-token mapping table is present; Token gap register is present; document states token mapping only, does not change token values, does not approve new token values, does not edit CSS/tokens/source files, and does not activate hooks or QA checks; recommended next task is `VISPARITY005 - Image Parity and Asset Usage Register`; only allowed files changed; protected systems untouched; validation passes; draft PR opened without merge.
- **Dependencies:** Prompt-created bounded VISPARITY004 work order; latest `main`; merged PR #422 / VISPARITY003; VISPARITY001 discovery document; VISPARITY002 target matrix; VISPARITY003 visual component naming standard; current governance authority chain; `docs/codex/CODEX_RUN_CONTRACT.md`; OPS004; OPS005; visual, page layout, header/footer, public funnel, QR funnel, category image, and token governance docs discovered by targeted reads.
- **Operator Decision Required:** Review draft PR and decide whether to activate `VISPARITY005 - Image Parity and Asset Usage Register`.
- **Completion Notes:** Added this VISPARITY004 tracking record as directed by the prompt after confirming it was missing from the register. Created the CSS token mapping and gap register and updated the visual-parity README. The register inventories existing token sources including `wnyhsVisualGovernance.css`, `homeSecurityPremium.css`, `qrLanding.css`, `canonicalEstimateForm.css`, `src/index.css`, and `src/newsite/theme/tokens.css`; defines a semantic token category model; maps VISPARITY003 canonical component names to required token categories, existing evidence, gaps, accessibility dependencies, implementation risk, migration notes, and enforcement candidates; and records gaps for mixed vocabularies, hardcoded colors, text contrast, duplicated buttons/cards/panels, QR divergence, form readability, focus consistency, image frame/aspect tokens, legal/review text tokens, and package/vault/Core unique blocks. No source/runtime/UI/routes/CSS/tokens/images/assets/sitemap/robots/hooks/QA checks/protected systems/dependencies/package-lock/version files were changed.

### VISPARITY005
- **Task ID:** VISPARITY005
- **Task Name:** Image Parity and Asset Usage Register
- **Status:** DONE
- **Category:** QA
- **Tags:** Visual System / Image System / Asset Register / Documentation / Visual Parity
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the WNYHS public marketing image parity and asset usage register by inventorying current image asset usage, mapping images to public page families and VISPARITY003 canonical component names, and recording image parity gaps without changing assets or implementation.
- **Allowed Scope:** Create `docs/design-system/visual-parity/VISPARITY005_IMAGE_PARITY_AND_ASSET_USAGE_REGISTER_REV01.md`; update `docs/design-system/visual-parity/README.md`; add/update only this task-register record; inspect current image references and asset folders as read-only source evidence; document image source inventory, image usage register, image role categories, draft image parity standards, image parity gap register, and recommended next VISPARITY task.
- **Forbidden Scope:** No source code edits, route edits, CSS edits, token edits, UI/component edits, image/asset edits, image generation, image rename, image move, sitemap edits, robots edits, runtime/API edits, HubSpot edits, Stripe/payment edits, scheduling edits, Cloudflare config edits, dependency or package-lock edits, Playwright tests, hooks, QA checks, final image asset approval, Active KAOS Rule creation, merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/VISPARITY005_IMAGE_PARITY_AND_ASSET_USAGE_REGISTER_REV01.md`; `docs/design-system/visual-parity/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation/image parity register only.
- **Documentation Updates Required:** Add this bounded VISPARITY005 tracking record because it was missing from the Master Task Register but explicitly authorized by the prompt; create the image parity and asset usage register; update the visual-parity README.
- **Validation Required:** `git diff --check`; targeted `rg` for VISPARITY005 required register phrases in `docs/design-system` and `docs/system`; targeted `rg` for non-authority boundary phrases; targeted `rg` for required image role and gap evidence terms; merge-conflict marker scan in `docs`; `npm run build`.
- **Exit Criteria:** Image parity and asset usage register exists; boundary is documented; image source inventory is present; image usage register is present; image role categories are present; image parity standards draft is present; image parity gap register is present; document states image parity/register only, no asset changes, no source/page/component/CSS/token changes, does not activate hooks, and does not approve final image assets; recommended next task is `VISPARITY006 - Public Marketing Page Compliance Plan`; only allowed files changed; protected systems untouched; validation passes; draft PR opened without merge.
- **Dependencies:** Prompt-created bounded VISPARITY005 work order; latest `main`; merged PR #423 / VISPARITY004; VISPARITY001 discovery document; VISPARITY002 target matrix; VISPARITY003 visual component naming standard; VISPARITY004 CSS token mapping and gap register; current governance authority chain; `docs/codex/CODEX_RUN_CONTRACT.md`; OPS004; OPS005; brand asset standards; category image standards; solution media standards; QR funnel standards; public funnel standards; targeted read-only image source and asset evidence.
- **Operator Decision Required:** Review draft PR and decide whether to activate `VISPARITY006 - Public Marketing Page Compliance Plan`.
- **Completion Notes:** Added this VISPARITY005 tracking record as directed by the prompt after confirming it was missing from the register. Created the image parity and asset usage register and updated the visual-parity README. The register inventories public image folders and governance docs, identifies the partial/stale current Home Security image manifest, maps current image references from homepage, category, solution, packages, QR, Our Work, SEO, brand, and legacy/review surfaces to VISPARITY003 canonical image/component roles, records alt-text evidence posture, defines role categories and draft standards, and records image parity gaps for missing full manifest, duplicate/unused candidates, category image parity, crop/aspect inconsistency, role ambiguity, QR divergence, solution media readiness, proof/gallery posture, logo/icon consistency, alt-text consistency, text-over-image readability, Core/Vault/dashboard consistency, SEO image mapping, and file naming/path consistency. No source/runtime/UI/routes/CSS/tokens/images/assets/sitemap/robots/hooks/QA checks/protected systems/dependencies/package-lock/version files were changed.

### VISPARITY006
- **Task ID:** VISPARITY006
- **Task Name:** Public Marketing Page Compliance Plan
- **Status:** DONE
- **Category:** QA
- **Tags:** Visual System / Public Marketing / Compliance Plan / Documentation / Visual Parity
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Convert VISPARITY001 through VISPARITY005 into a route-by-route and page-family public marketing compliance plan for later bounded implementation batches without changing implementation.
- **Allowed Scope:** Create `docs/design-system/visual-parity/VISPARITY006_PUBLIC_MARKETING_PAGE_COMPLIANCE_PLAN_REV01.md`; update `docs/design-system/visual-parity/README.md`; add/update only this task-register record; inspect current route, navigation, page, CSS/token, and image evidence as read-only source evidence; document boundary, page-family compliance model, required/optional/disallowed element matrix, route-by-route compliance planning table, protected/out-of-scope route handling, implementation batch plan, acceptance criteria, future QA/hook/eval candidates, and recommended next VISPARITY task.
- **Forbidden Scope:** No source code edits, route edits, CSS edits, token edits, UI/component edits, image/asset edits, image generation, image rename, image move, sitemap edits, robots edits, runtime/API edits, HubSpot edits, Stripe/payment edits, scheduling edits, Cloudflare config edits, dependency or package-lock edits, Playwright tests, hooks, QA checks, final visual implementation approval, Active KAOS Rule creation, protected-route cleanup, merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/VISPARITY006_PUBLIC_MARKETING_PAGE_COMPLIANCE_PLAN_REV01.md`; `docs/design-system/visual-parity/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation/compliance planning only.
- **Documentation Updates Required:** Add this bounded VISPARITY006 tracking record because it was missing from the Master Task Register but explicitly authorized by the prompt; create the compliance plan; update the visual-parity README.
- **Validation Required:** `git diff --check`; targeted `rg` for VISPARITY006 required planning phrases in `docs/design-system` and `docs/system`; targeted `rg` for non-authority boundary phrases; targeted `rg` for protected/out-of-scope route handling terms; targeted `rg` for future acceptance criteria terms; merge-conflict marker scan in `docs`; `npm run build`.
- **Exit Criteria:** Public marketing page compliance plan exists; boundary is documented; page-family compliance model is present; required/optional/disallowed element matrix is present; route-by-route compliance planning table is present; protected/out-of-scope route handling is present; implementation batch plan is present; future acceptance criteria are present; future QA/hook/eval candidates are documented as candidates only; recommended next task is `VISPARITY007 - Kitchen-Sink Visual QA Reference Page Spec`; document states compliance plan only, no implementation, no route/source/CSS/token/image edits, no hooks/QA activation, and no protected route cleanup; only allowed files changed; protected systems untouched; validation passes; draft PR opened without merge.
- **Dependencies:** Prompt-created bounded VISPARITY006 work order; latest `main`; merged PR #424 / VISPARITY005; VISPARITY001 discovery document; VISPARITY002 target matrix; VISPARITY003 visual component naming standard; VISPARITY004 CSS token mapping and gap register; VISPARITY005 image parity and asset usage register; current governance authority chain; `docs/codex/CODEX_RUN_CONTRACT.md`; OPS004; OPS005; visual, page layout, header/footer, public funnel, QR funnel, category image, solution media, site architecture, search, SEO, brand, and targeted read-only source evidence.
- **Operator Decision Required:** Review draft PR and decide whether to activate `VISPARITY007 - Kitchen-Sink Visual QA Reference Page Spec`.
- **Completion Notes:** Added this VISPARITY006 tracking record as directed by the prompt after confirming it was missing from the register. Created the public marketing page compliance plan and updated the visual-parity README. The plan maps homepage/host entry, canonical category pages, solution pages, search, about, Our Work, contact, support, legal pages, QR Landing, and review-only demos/planners into required/optional/disallowed components, token dependencies, image roles, accessibility requirements, suspected gaps, route-by-route recommendations, and future implementation batches. It separates quote/agreement/payment/schedule/resume/verify, operator/admin/internal/prototype/system routes, legacy non-WNYHS vertical/business pages, and review-only public demos/planners from public marketing parity targets. Future QA/hook/eval items are candidates only. No source/runtime/UI/routes/CSS/tokens/images/assets/sitemap/robots/hooks/QA checks/protected systems/dependencies/package-lock/version files were changed.

### VISPARITY007
- **Task ID:** VISPARITY007
- **Task Name:** Kitchen-Sink Visual QA Reference Page Spec
- **Status:** DONE
- **Category:** QA
- **Tags:** Visual System / Visual QA / Reference Page / Documentation / Visual Parity
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the definitive docs-only kitchen-sink visual QA reference page specification for future screenshot baselines, design approval, Playwright reference coverage, visual regression baselines, accessibility baselines, CSS token validation, component coverage, and image-role validation.
- **Allowed Scope:** Create `docs/design-system/visual-parity/VISPARITY007_KITCHEN_SINK_VISUAL_QA_REFERENCE_PAGE_SPEC_REV01.md`; update `docs/design-system/visual-parity/README.md`; add/update only this task-register record; define page purpose, page layout, component coverage matrix, typography matrix, color/token demonstration areas, forms section, image roles section, accessibility section, future Playwright coverage candidates, future hook candidates, future QA candidates, future implementation plan, and recommended next VISPARITY task.
- **Forbidden Scope:** No source code edits, route edits, CSS edits, token edits, UI/component edits, image/asset edits, image generation, image rename, image move, screenshots, sitemap edits, robots edits, runtime/API edits, HubSpot edits, Stripe/payment edits, scheduling edits, Cloudflare config edits, dependency or package-lock edits, Playwright tests, hooks, QA checks, final visual implementation approval, Active KAOS Rule creation, protected-route cleanup, merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/VISPARITY007_KITCHEN_SINK_VISUAL_QA_REFERENCE_PAGE_SPEC_REV01.md`; `docs/design-system/visual-parity/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation/reference-page specification only.
- **Documentation Updates Required:** Add this bounded VISPARITY007 tracking record because it was missing from the Master Task Register but explicitly authorized by the prompt-created work order; create the kitchen-sink visual QA reference page specification; update the visual-parity README.
- **Validation Required:** `git diff --check`; targeted `rg` for VISPARITY007 required specification phrases in `docs/design-system` and `docs/system`; targeted `rg` for non-authority boundary phrases; targeted `rg` for component coverage, typography, token, forms, image, accessibility, Playwright candidate, hook candidate, QA candidate, implementation plan, and recommended next task terms; merge-conflict marker scan in docs; `npm run build`.
- **Exit Criteria:** Kitchen-sink visual QA reference page specification exists; boundary is documented; purpose is present; page layout is present; component coverage matrix covers VISPARITY003 canonical components; typography matrix is present; color/token demonstration areas are present; forms, images, and accessibility sections are present; future Playwright, hook, and QA candidates are clearly candidate-only; future implementation plan is present; recommended next task is `VISPARITY008 - Kitchen-Sink Visual QA Reference Page Implementation`; document states specification only, no implementation, no routes, no React components, no CSS, no tokens, no images, no screenshots, no Playwright tests, no QA automation, no hooks, and no runtime changes; only allowed files changed; protected systems untouched; validation passes; draft PR opened without merge.
- **Dependencies:** Prompt-created bounded VISPARITY007 work order; latest `main`; merged PR #425 / VISPARITY006; VISPARITY001 discovery document; VISPARITY002 target matrix; VISPARITY003 visual component naming standard; VISPARITY004 CSS token mapping and gap register; VISPARITY005 image parity and asset usage register; VISPARITY006 public marketing page compliance plan; current governance authority chain; `docs/codex/CODEX_RUN_CONTRACT.md`; OPS004; OPS005; DESIGN002; PAGE_TOKEN_COMPLIANCE_GATE; CATEGORY003; brand asset standards; page layout standards; header/footer standards; public funnel standards; QR funnel standards.
- **Operator Decision Required:** Review draft PR and decide whether to activate `VISPARITY008 - Kitchen-Sink Visual QA Reference Page Implementation`.
- **Completion Notes:** Added this VISPARITY007 tracking record as directed by the prompt-created bounded work order after confirming PR #425 / VISPARITY006 was merged. Created the kitchen-sink visual QA reference page specification and updated the visual-parity README. The spec defines the future reference page purpose, layout, required component coverage for VISPARITY003 canonical components, typography roles, token demonstration areas, forms, image roles, accessibility states, candidate Playwright screenshot regions and baseline names, candidate hook categories, candidate QA categories, and future implementation constraints. Future Playwright, hook, and QA items are candidates only. No source/runtime/UI/routes/CSS/tokens/images/assets/sitemap/robots/screenshots/hooks/QA checks/protected systems/dependencies/package-lock/version files were changed.

### VISPARITY007A
- **Task ID:** VISPARITY007A
- **Task Name:** Visual Baseline Screenshot Matrix
- **Status:** DONE
- **Category:** QA
- **Tags:** Visual System / Visual QA / Screenshot Matrix / Documentation / Visual Parity
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the docs-only Visual Baseline Screenshot Matrix for the future kitchen-sink visual QA reference page, defining future Playwright/Chromium screenshot coverage, breakpoints, regions, states, filenames, priorities, storage rules, and before/after comparison workflow without implementing screenshots or automation.
- **Allowed Scope:** Create `docs/design-system/visual-parity/VISPARITY007A_VISUAL_BASELINE_SCREENSHOT_MATRIX_REV01.md`; update `docs/design-system/visual-parity/README.md`; add/update only this task-register record; define purpose, boundary, definitions, viewport/breakpoint contract, screenshot strategy, screenshot matrix, component state matrix, baseline naming rules, baseline storage plan, comparison strategy, priority rules, before/after visual decision workflow, future source documents, and recommended next VISPARITY task.
- **Forbidden Scope:** No source code edits, route edits, CSS edits, token edits, UI/component edits, image/asset edits, image generation, image rename, image move, screenshots, screenshot generation, sitemap edits, robots edits, runtime/API edits, HubSpot edits, Stripe/payment edits, scheduling edits, Cloudflare config edits, dependency or package-lock edits, Playwright tests, hooks, QA checks, baseline folders, final visual implementation approval, Active KAOS Rule creation, protected-route cleanup, merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/VISPARITY007A_VISUAL_BASELINE_SCREENSHOT_MATRIX_REV01.md`; `docs/design-system/visual-parity/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation/screenshot matrix only.
- **Documentation Updates Required:** Add this bounded VISPARITY007A tracking record because it was missing from the Master Task Register but explicitly authorized by the prompt-created work order; create the visual baseline screenshot matrix; update the visual-parity README.
- **Validation Required:** `git diff --check`; targeted `rg` for VISPARITY007A required screenshot matrix phrases in `docs/design-system` and `docs/system`; targeted `rg` for non-authority boundary phrases; targeted viewport, filename, priority, storage, future document, and merge-conflict scans; `npm run build`.
- **Exit Criteria:** Visual Baseline Screenshot Matrix exists; boundary is documented; viewport/breakpoint contract includes Mobile Small, Mobile Large, Tablet, Laptop, Desktop Large, Desktop XL, and Desktop Wide; screenshot matrix includes full page, navigation, global header, hero, typography, buttons, panels, cards, tiles, Core Panel, Vault Tiles, package blocks, forms, alerts/banners, proof/trust cards, image gallery, QR components, footer, and accessibility states; component state capture matrix includes default, hover, focus, active, disabled, error, success, loading, and open/expanded; baseline naming, storage, comparison, priority, before/after workflow, future source documents, and recommended next task are present; document states screenshot matrix only, no implementation, no screenshot generation, no Playwright tests, and no route/source/CSS/token/image edits; only allowed files changed; protected systems untouched; validation passes; draft PR opened without merge.
- **Dependencies:** Prompt-created bounded VISPARITY007A work order; latest `main`; merged PR #426 / VISPARITY007; VISPARITY001 discovery document; VISPARITY002 target matrix; VISPARITY003 visual component naming standard; VISPARITY004 CSS token mapping and gap register; VISPARITY005 image parity and asset usage register; VISPARITY006 public marketing page compliance plan; VISPARITY007 kitchen-sink visual QA reference page spec; current governance authority chain; `docs/codex/CODEX_RUN_CONTRACT.md`; OPS004; OPS005; DESIGN002; PAGE_TOKEN_COMPLIANCE_GATE; CATEGORY003; brand asset standards; page layout standards; header/footer standards; public funnel standards; QR funnel standards.
- **Operator Decision Required:** Review draft PR and decide whether to activate `VISPARITY007B - Current State Reference`.
- **Completion Notes:** Added this VISPARITY007A tracking record as directed by the prompt-created bounded work order after confirming PR #426 / VISPARITY007 was merged. Created the Visual Baseline Screenshot Matrix and updated the visual-parity README. The matrix defines future viewport/breakpoint coverage, screenshot strategy, required screenshot regions, component state coverage, kebab-case filename rules, future baseline storage plan, future comparison strategy, P0/P1/P2 priority rules, before/after visual decision workflow, future source documents VISPARITY007B through VISPARITY007D, and recommends VISPARITY007B as the next task. No source/runtime/UI/routes/CSS/tokens/images/assets/sitemap/robots/screenshots/Playwright tests/hooks/QA checks/protected systems/dependencies/package-lock/version files were changed.

### VISPARITY007B
- **Task ID:** VISPARITY007B
- **Task Name:** Current State Reference
- **Status:** DONE
- **Category:** QA
- **Tags:** Visual System / Design System / Current State Reference / Documentation / Visual Parity
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the docs-only Current State Reference for WNYHS visual parity, defining how every canonical VISPARITY003 component currently appears using existing CSS, token, color, style, typography, image, accessibility, and parity evidence as the before-reference for later comparison.
- **Allowed Scope:** Create `docs/design-system/visual-parity/VISPARITY007B_CURRENT_STATE_REFERENCE_REV01.md`; update `docs/design-system/visual-parity/README.md`; add/update only this task-register record; inspect current read-only evidence from `src/styles/wnyhsVisualGovernance.css`, `src/styles/homeSecurityPremium.css`, `src/styles/qrLanding.css`, `src/styles/canonicalEstimateForm.css`, `src/index.css`, `src/newsite/theme/tokens.css`, VISPARITY001 through VISPARITY007A, DESIGN002, PAGE_TOKEN_COMPLIANCE_GATE, CATEGORY003, public funnel standards, QR funnel standards, and VISPARITY005 image findings.
- **Forbidden Scope:** No source code edits, route edits, CSS edits, token edits, UI/component edits, image/asset edits, image generation, image rename, image move, screenshots, screenshot generation, sitemap edits, robots edits, runtime/API edits, HubSpot edits, Stripe/payment edits, scheduling edits, Cloudflare config edits, dependency or package-lock edits, Playwright tests, hooks, QA checks, baseline folders, proposed new design values, final visual implementation approval, Active KAOS Rule creation, protected-route cleanup, merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/VISPARITY007B_CURRENT_STATE_REFERENCE_REV01.md`; `docs/design-system/visual-parity/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation/current-state reference only.
- **Documentation Updates Required:** Add this bounded VISPARITY007B tracking record because it was missing from the Master Task Register but explicitly authorized by the prompt-created work order; create the current-state visual reference; update the visual-parity README.
- **Validation Required:** `git diff --check`; targeted `rg` for VISPARITY007B required phrases in `docs/design-system` and `docs/system`; targeted `rg` for source evidence filenames; targeted `rg` for canonical component coverage terms; targeted `rg` for non-authority boundary phrases; merge-conflict marker scan in docs; `npm run build`.
- **Exit Criteria:** Current State Reference exists; purpose and boundary are documented; current token/source inventory is present; every canonical VISPARITY003 component is covered in a current component reference table; typography, action/button, container/reference surface, form, image-role, and issue-summary sections are present; document states current evidence only, not an endorsement, not the new standard, and baseline for comparison against VISPARITY007C; recommended next task is `VISPARITY007C - Proposed Visual Standard Reference`; only allowed files changed; protected systems untouched; validation passes; draft PR opened without merge.
- **Dependencies:** Prompt-created bounded VISPARITY007B work order; latest `main`; merged PR #427 / VISPARITY007A; VISPARITY001 discovery document; VISPARITY002 target matrix; VISPARITY003 visual component naming standard; VISPARITY004 CSS token mapping and gap register; VISPARITY005 image parity and asset usage register; VISPARITY006 public marketing page compliance plan; VISPARITY007 kitchen-sink visual QA reference page spec; VISPARITY007A visual baseline screenshot matrix; current governance authority chain; `docs/codex/CODEX_RUN_CONTRACT.md`; OPS004; OPS005; DESIGN002; PAGE_TOKEN_COMPLIANCE_GATE; CATEGORY003; public funnel standards; QR funnel standards.
- **Operator Decision Required:** Review draft PR and decide whether to activate `VISPARITY007C - Proposed Visual Standard Reference`.
- **Completion Notes:** Added this VISPARITY007B tracking record as directed by the prompt-created bounded work order after confirming PR #427 / VISPARITY007A was merged. Created the Current State Reference and updated the visual-parity README. The reference records current token/source inventory, current evidence for every VISPARITY003 canonical component, current typography/action/button/container/form/image-role evidence, known current-state issues and risks, and the limitation that the document is current evidence only, not an endorsement, not the new standard, and the baseline for comparison against VISPARITY007C. No source/runtime/UI/routes/CSS/tokens/images/assets/sitemap/robots/screenshots/Playwright tests/hooks/QA checks/protected systems/dependencies/package-lock/version files were changed.

### VISPARITY007C
- **Task ID:** VISPARITY007C
- **Task Name:** Proposed Visual Standard Reference
- **Status:** DONE
- **Category:** QA
- **Tags:** Visual System / Design System / Proposed Standard / Documentation / Visual Parity
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the docs-only Proposed Visual Standard Reference for WNYHS visual parity, defining the proposed after reference for every canonical VISPARITY003 component using premium, calm, local, technology-made-simple design direction for operator review.
- **Allowed Scope:** Create `docs/design-system/visual-parity/VISPARITY007C_PROPOSED_VISUAL_STANDARD_REFERENCE_REV01.md`; update `docs/design-system/visual-parity/README.md`; add/update only this task-register record; inspect current read-only evidence from VISPARITY001 through VISPARITY007B, DESIGN002, PAGE_TOKEN_COMPLIANCE_GATE, CATEGORY003, public funnel standards, QR funnel standards, brand/page/header-footer standards, and current style/token evidence; document proposed standard reference only.
- **Forbidden Scope:** No source code edits, route edits, CSS edits, token edits, UI/component edits, image/asset edits, image generation, image rename, image move, screenshots, screenshot generation, sitemap edits, robots edits, runtime/API edits, HubSpot edits, Stripe/payment edits, scheduling edits, Cloudflare config edits, dependency or package-lock edits, Playwright tests, hooks, QA checks, baseline folders, final visual implementation approval, Active KAOS Rule creation, protected-route cleanup, merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/VISPARITY007C_PROPOSED_VISUAL_STANDARD_REFERENCE_REV01.md`; `docs/design-system/visual-parity/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation/proposed standard reference only.
- **Documentation Updates Required:** Add this bounded VISPARITY007C tracking record because it was missing from the Master Task Register but explicitly authorized by the prompt-created work order; create the proposed visual standard reference; update the visual-parity README.
- **Validation Required:** `git diff --check`; targeted `rg` for VISPARITY007C required phrases in `docs/design-system` and `docs/system`; targeted `rg` for design psychology phrases; targeted `rg` for forbidden design-feel phrases; targeted `rg` for canonical component coverage terms; targeted `rg` for accessibility direction terms; targeted `rg` for non-authority boundary phrases; merge-conflict marker scan in docs; `npm run build`.
- **Exit Criteria:** Proposed Visual Standard Reference exists; purpose and boundary are documented; design psychology principles are present; proposed color/token, typography, component, image, accessibility, page-family, and approval posture sections are present; every canonical VISPARITY003 component is covered in a proposed component standard table; document states proposed, not yet operator-approved, not implementation authority, and requires comparison against VISPARITY007B in VISPARITY007D; recommended next task is `VISPARITY007D - Before/After Visual Comparison Matrix`; only allowed files changed; protected systems untouched; validation passes; draft PR opened without merge.
- **Dependencies:** Prompt-created bounded VISPARITY007C work order; latest `main`; merged PR #428 / VISPARITY007B; VISPARITY001 discovery document; VISPARITY002 target matrix; VISPARITY003 visual component naming standard; VISPARITY004 CSS token mapping and gap register; VISPARITY005 image parity and asset usage register; VISPARITY006 public marketing page compliance plan; VISPARITY007 kitchen-sink visual QA reference page spec; VISPARITY007A visual baseline screenshot matrix; VISPARITY007B current-state visual reference; current governance authority chain; `docs/codex/CODEX_RUN_CONTRACT.md`; OPS004; OPS005; DESIGN002; PAGE_TOKEN_COMPLIANCE_GATE; CATEGORY003; public funnel standards; QR funnel standards; brand asset standards; page layout standards; header/footer standards.
- **Operator Decision Required:** Review draft PR and decide whether to activate `VISPARITY007D - Before/After Visual Comparison Matrix`.
- **Completion Notes:** Added this VISPARITY007C tracking record as directed by the prompt-created bounded work order after confirming PR #428 / VISPARITY007B was merged. Created the Proposed Visual Standard Reference and updated the visual-parity README. The reference defines the proposed after reference for comparison against VISPARITY007B; records design psychology targets for Trust, Safety, Intelligence, Premium quality, Comfort, Local reliability, and Technology made simple; defines proposed semantic color/token categories, typography posture, every VISPARITY003 canonical component standard, image direction, accessibility direction, page-family application, and approval posture; and recommends VISPARITY007D as the next task. The document is proposed, not yet operator-approved, and not implementation authority. No source/runtime/UI/routes/CSS/tokens/images/assets/sitemap/robots/screenshots/Playwright tests/hooks/QA checks/protected systems/dependencies/package-lock/version files were changed.

### KAOS-BP005B
- **Task ID:** KAOS-BP005B
- **Task Name:** Reconcile BP001 Register Labels Against Source Manifest
- **Status:** DONE
- **Category:** GOV
- **Tags:** KAOS / Business Process / Candidate Register / Source Manifest / Governance
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Reconcile BP001A-K labels in the KAOS candidate intake register against the repo-hosted BP001 source package `MANIFEST.md` so the register consistently reflects source-package artifact names without approving, activating, rewriting, or reinterpreting candidate artifacts.
- **Allowed Scope:** Update `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md` to align BP001A-K artifact names, domains, and notes with `docs/kaos/business-processes/candidate-artifacts/bp001-source-package/MANIFEST.md`; update `docs/kaos/business-processes/README.md` only if needed to clarify MANIFEST-controlled naming; update this Master Task Register record only for activation, progress, status, and completion notes.
- **Forbidden Scope:** No candidate source package file edits, source code, routes, UI, runtime/API files, Stripe/payment logic, HubSpot logic, scheduling logic, Cloudflare config, dependency or package-lock changes, candidate artifact approval, Active KAOS Rule activation, SOPs, BPM manuals, QA checks, hooks, merge, unrelated task edits, unrelated future task status changes, or version bump.
- **Target Files:** `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`; `docs/kaos/business-processes/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation/governance reconciliation only.
- **Documentation Updates Required:** Add this bounded task-register record as `ACTIVE` because it was missing but explicitly operator-authorized in the current prompt; reconcile BP001A-K register labels to the repo-hosted source package `MANIFEST.md`; mark `DONE` only after validation.
- **Validation Required:** `git diff --check`; targeted `rg` for `WNYHS-BP001A` through `WNYHS-BP001K` in the candidate register and MANIFEST; targeted `rg` for `KAOS-BP005B`, `MANIFEST`, `source-package naming`, `preliminary label`, and `Active KAOS Rule` in `docs/kaos` and `docs/system`; scan docs for merge-conflict markers; `npm run build`.
- **Exit Criteria:** KAOS-BP005B exists in this register; PR #413 / KAOS-BP005A is merged; BP001 source package exists; MANIFEST lists BP001A through BP001K; BP001A-K register names, domains, and notes consistently reflect MANIFEST names; prior KAOS-BP004/BOM Parts Qualification mismatch is preserved as historical lineage; candidate source package files are untouched; no process is approved; no Active KAOS Rule is created; only allowed files changed; protected systems remain untouched; validation passes; draft PR is opened without merge.
- **Dependencies:** Operator authorization in current Codex thread to add missing KAOS-BP005B task record and execute it in the same bounded run; merged KAOS-BP005A PR #413; KAOS-BP001; KAOS-BP002; KAOS-BP003; KAOS-BP004; current governance authority chain; `docs/system/step-current.md`; `docs/kaos/business-processes/README.md`; `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`; `docs/kaos/business-processes/candidate-artifacts/bp001-source-package/MANIFEST.md`; CODEX run contract; OPS003; OPS004; OPS005.
- **Operator Decision Required:** Review draft PR and decide whether to merge. Future BP001A-BP001K process review, approval, SOP, QA, hook, runtime, automation, or active-rule promotion requires separate bounded task authorization.
- **Completion Notes:** Operator authorized adding missing KAOS-BP005B as `ACTIVE` in this bounded run; the task was then completed and marked `DONE` after validation. Confirmed PR #413 / KAOS-BP005A was merged, the BP001 source package exists, and `MANIFEST.md` lists WNYHS-BP001A through WNYHS-BP001K. Updated the KAOS candidate intake register so BP001A-K artifact names, source file references, domains, and notes consistently reflect MANIFEST-controlled source-package naming. Documented that prior BP001 labels were preliminary labels and that MANIFEST names now control BP001 source-package naming. Preserved the KAOS-BP004 BOM Parts Qualification pilot mismatch as historical lineage from the earlier preliminary BP001E label mapping; no process was approved and no Active KAOS Rule was created. Updated the KAOS business-process README only to clarify that the source package `MANIFEST.md` controls BP001 source-package naming. Candidate source package files were not edited. No SOPs, BPM manuals, QA checks, hooks, runtime/API work, automation, source files, UI/routes, protected systems, dependencies, package-lock, Cloudflare config, HubSpot, Stripe/payment, scheduling, or unrelated tasks were changed.

### KAOS-HOOK001
- **Task ID:** KAOS-HOOK001
- **Task Name:** Hook Framework and Candidate Registry
- **Status:** DONE
- **Category:** KAOS / Hooks / Governance
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the KAOS hook framework and candidate hook registry so future work can define, prioritize, and implement enforcement hooks without blocking current production work.
- **Allowed Scope:** Create `docs/kaos/hooks/`; create hook lifecycle/framework and candidate registry docs; update KAOS README link if needed; add/update this tracking-only task record in the Master Task Register.
- **Forbidden Scope:** No source code, hook scripts, Codex hook configuration, QA checks, package files, dependencies, routes, UI, runtime/API files, Stripe/payment behavior, HubSpot behavior, scheduling, Cloudflare config, active KAOS rules, hook implementation, hook enforcement, blocking hook approval, process approval, BPM manuals, PR merge, or unrelated task edits.
- **Target Files:** `docs/kaos/hooks/README.md`; `docs/kaos/hooks/HOOK_LIFECYCLE_STANDARD_REV01.md`; `docs/kaos/hooks/HOOK_CANDIDATE_REGISTRY.md`; `docs/kaos/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation/governance only.
- **Documentation Updates Required:** Define hook terminology, lifecycle, candidate fields, categories, risk levels, enforcement levels, operator approval requirement before blocking, and seed candidate hooks from BP001 source artifacts and current KAOS context.
- **Validation Required:** `git diff --check`; targeted `rg` for hook lifecycle/status terms and required candidate names in `docs/kaos` and `docs/system`; merge-conflict marker scan in `docs`; `npm run build`.
- **Exit Criteria:** Hook framework exists; hook lifecycle standard exists; hook candidate registry exists; required candidate hooks are seeded; MTR records this task as tracking only; no scripts, QA checks, source/runtime/UI/routes, protected systems, dependencies, package-lock, Cloudflare config, HubSpot, Stripe/payment, scheduling, Active KAOS Rule, approved hook spec, implemented hook, enforced hook, or blocking hook are created; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `KAOS-HOOK001` work order; merged PR #414 / KAOS-BP005B; BP001 source package; current KAOS BP docs; HOOK001; HOOKCAT001; Codex run contract; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Operator authorized adding missing KAOS-HOOK001 as a tracking-only task record in this bounded run; the task was then completed and marked `DONE` after validation. Confirmed PR #414 / KAOS-BP005B was merged, the BP001 source package exists, and current KAOS business-process docs exist. Created `docs/kaos/hooks/` with a README, hook lifecycle standard, and hook candidate registry. Seeded candidate hooks for forbidden claims, hardcoded color/token, sitemap route mismatch, public/private route policy, Stripe browser-success trust, HubSpot property drift, metadata completeness, copy lock, runtime env/secrets exposure, missing owner-doc/task-reference, candidate artifact authority-boundary, and Codex forbidden-scope review. No hook scripts, QA checks, hook configs, approved hook specs, implemented hooks, enforced hooks, blocking hooks, Active KAOS Rules, runtime/API work, automation, source files, UI/routes, protected systems, dependencies, package-lock, Cloudflare config, HubSpot, Stripe/payment, scheduling, BPM manuals, or unrelated tasks were changed.

### KAOS-HOOK003
- **Task ID:** KAOS-HOOK003
- **Task Name:** Refresh Hook Registry Next-Step Alignment
- **Status:** DONE
- **Category:** GOV
- **Tags:** KAOS / Hooks / Registry / Governance Cleanup
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Update the KAOS hook registry and related hook docs so recommended next steps reflect the completed `KAOS-HOOK001` hook framework/candidate registry and completed `KAOS-HOOK002` Windows hook runtime standard.
- **Allowed Scope:** Update stale next-task wording in `docs/kaos/hooks/HOOK_CANDIDATE_REGISTRY.md`; update `docs/kaos/hooks/README.md` only if needed; add/update this tracking-only task record in the Master Task Register. Treat the Master Task Register as a tracking board, not an execution gate, for this prompt-created bounded work order.
- **Forbidden Scope:** No `.codex/` directory creation, hook scripts, `hooks.json`, `config.toml`, hook specs, hook implementation, hook approval, blocking hook, Active KAOS Rule, QA checks, source code, routes, UI, runtime/API files, Stripe/payment behavior, HubSpot behavior, scheduling, Cloudflare config, dependencies, package-lock, PR merge, or protected-system changes.
- **Target Files:** `docs/kaos/hooks/HOOK_CANDIDATE_REGISTRY.md`; `docs/kaos/hooks/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation/governance cleanup only.
- **Documentation Updates Required:** Align hook registry next-step wording so `KAOS-HOOK004` is the next advisory hook specification task and `KAOS-HOOK005` is the first advisory implementation task only if separately approved.
- **Validation Required:** `git diff --check`; targeted traceability scan for `KAOS-HOOK003`, `KAOS-HOOK004`, `KAOS-HOOK005`, Windows-aware, repo-local, advisory, trust-reviewed `/hooks`, non-blocking, and `HOOK_RUNTIME_STANDARD_WINDOWS_REV01`; targeted stale `KAOS-HOOK002` next-task wording scan; merge-conflict marker scan in docs; `npm run build`.
- **Exit Criteria:** Stale `KAOS-HOOK002` next-task wording is removed or updated; next path is clear as `KAOS-HOOK004` advisory hook spec followed by `KAOS-HOOK005` advisory implementation only if separately approved; first implementation constraints reference Windows-aware, repo-local, advisory-only, trust-reviewed `/hooks`, and non-blocking posture; only allowed files changed; no `.codex/`, hook scripts, hook configs, hook specs, hook implementations, blocking hooks, Active KAOS Rules, source/runtime/UI files, protected-system files, dependencies, package-lock, or Cloudflare config are created or changed; formatting is normalized; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `KAOS-HOOK003` work order; PR #416 / `KAOS-HOOK002` merged; `KAOS-HOOK001`; `KAOS-HOOK002`; `docs/kaos/hooks/HOOK_LIFECYCLE_STANDARD_REV01.md`; `docs/kaos/hooks/HOOK_CANDIDATE_REGISTRY.md`; `docs/kaos/hooks/HOOK_RUNTIME_STANDARD_WINDOWS_REV01.md`; CODEX run contract; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge. Recommended next task is `KAOS-HOOK004` to create the first advisory hook specification without implementation.
- **Completion Notes:** Added this tracking-only `KAOS-HOOK003` task record after confirming PR #416 / `KAOS-HOOK002` was merged. Updated the KAOS hook candidate registry to remove stale `KAOS-HOOK002` next-task wording and make the next path `KAOS-HOOK004` for the first advisory hook specification, then `KAOS-HOOK005` for the first advisory hook implementation only if separately approved. Updated the KAOS hook README with the current HOOK001-HOOK005 sequence and first implementation constraints. No `.codex/` directory, hook scripts, hook config files, hook specs, hook implementations, blocking hooks, Active KAOS Rules, QA checks, source/runtime/UI files, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependencies, package-lock, environment, secrets, or protected systems were changed.

### KAOS-HOOK004
- **Task ID:** KAOS-HOOK004
- **Task Name:** First Advisory Hook Specification
- **Status:** DONE
- **Category:** GOV
- **Tags:** KAOS / Hooks / Advisory Spec / Governance
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the first approved advisory hook specification for `KAOS-HOOK-ARTIFACT-AUTHORITY-001` without implementing, configuring, trusting, enforcing, or making the hook blocking.
- **Allowed Scope:** Create `docs/kaos/hooks/HOOK_SPEC_ARTIFACT_AUTHORITY_ADVISORY_REV01.md`; update `docs/kaos/hooks/HOOK_CANDIDATE_REGISTRY.md` only as needed to show this hook now has an Approved Hook Spec but no implementation; update `docs/kaos/hooks/README.md` only if needed to link the new spec; update this Master Task Register record as tracking only.
- **Forbidden Scope:** No `.codex/` directory creation, hook scripts, `hooks.json`, `config.toml`, hook implementation, trusted hook activation, hook enforcement, blocking hook approval, Active KAOS Rule creation, QA checks, source code, routes, UI, runtime/API files, Stripe/payment behavior, HubSpot behavior, scheduling, Resend/email behavior, Cloudflare config, dependencies, package-lock, PR merge, or protected-system changes.
- **Target Files:** `docs/kaos/hooks/HOOK_SPEC_ARTIFACT_AUTHORITY_ADVISORY_REV01.md`; `docs/kaos/hooks/HOOK_CANDIDATE_REGISTRY.md`; `docs/kaos/hooks/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation/governance hook-spec only.
- **Documentation Updates Required:** Define hook ID, name, category, Approved Hook Spec lifecycle state, advisory-only enforcement level, not blocking status, purpose, prevented problem, evaluated surfaces, inputs, advisory outputs, prohibited outputs, Windows runtime considerations, future repo-local implementation path, Codex `/hooks` trust review, false-positive handling, operator review path, safe failure behavior, future implementation notes, and explicit non-authority statement.
- **Validation Required:** `git diff --check`; targeted traceability scan for `KAOS-HOOK004`, `KAOS-HOOK-ARTIFACT-AUTHORITY-001`, `Approved Hook Spec`, `advisory`, `not blocking`, `Candidate Only`, `not repository authority`, `not implementation authority`, `Active KAOS Rule`, `/hooks`, and `C:\\dev\\wnyhomesecurity` in `docs/kaos/hooks` and `docs/system`; targeted spec-link scan for `HOOK_SPEC_ARTIFACT_AUTHORITY_ADVISORY_REV01` and `Candidate artifact authority-boundary check`; merge-conflict marker scan in docs; `npm run build`.
- **Exit Criteria:** First advisory hook spec exists; candidate registry shows `KAOS-HOOK-ARTIFACT-AUTHORITY-001` has an Approved Hook Spec but remains not implemented, not enforced, and not blocking; README links the spec if needed; MTR is updated as tracking only; no `.codex/`, hook scripts, hook configs, hook implementation, trusted hook activation, QA checks, blocking hook, Active KAOS Rule, source/runtime/UI files, protected-system files, dependencies, package-lock, or Cloudflare config are created or changed; formatting is normalized; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `KAOS-HOOK004` work order; PR #417 / `KAOS-HOOK003` merged; `KAOS-HOOK001`; `KAOS-HOOK002`; `KAOS-HOOK003`; `docs/kaos/hooks/HOOK_LIFECYCLE_STANDARD_REV01.md`; `docs/kaos/hooks/HOOK_CANDIDATE_REGISTRY.md`; `docs/kaos/hooks/HOOK_RUNTIME_STANDARD_WINDOWS_REV01.md`; `docs/kaos/business-processes/README.md`; `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`; CODEX run contract; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge. Recommended next task is `KAOS-HOOK005` to implement the first advisory hook only if separately approved by a bounded implementation task.
- **Completion Notes:** Added this tracking-only `KAOS-HOOK004` task record because the prompt-created bounded work order authorized adding or updating the exact task record if missing. Created `HOOK_SPEC_ARTIFACT_AUTHORITY_ADVISORY_REV01.md` as the first Approved Hook Spec for `KAOS-HOOK-ARTIFACT-AUTHORITY-001`, focused on candidate artifacts being clearly labeled Candidate Only, not repository authority, not implementation authority, not active KAOS rules, and requiring operator review before promotion. Updated the candidate registry and hook README to link the spec and confirm the hook remains advisory-only, not implemented, not enforced, and not blocking. No `.codex/` directory, hook scripts, hook config files, hook implementation, trusted hook activation, blocking hook, QA checks, Active KAOS Rule, source/runtime/UI files, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependencies, package-lock, environment, secrets, or protected systems were changed.

### KAOS-HOOK005
- **Task ID:** KAOS-HOOK005
- **Task Name:** Implement First Advisory Hook
- **Status:** DONE
- **Category:** GOV
- **Tags:** KAOS / Hooks / Advisory Implementation / Codex / Windows
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement the first WNYHS repo-local Codex advisory hook for `KAOS-HOOK-ARTIFACT-AUTHORITY-001`, focused on candidate artifact authority-boundary labels.
- **Allowed Scope:** Create `.codex/README.md`, `.codex/hooks.json`, and `.codex/hooks/artifact_authority_advisory.py`; update `docs/kaos/hooks/README.md`, `docs/kaos/hooks/HOOK_CANDIDATE_REGISTRY.md`, and this Master Task Register record only.
- **Forbidden Scope:** No unrelated `.codex` files, `.codex/config.toml`, additional hook scripts, other hooks, QA checks, source code, routes, UI, runtime/API files, Stripe/payment behavior, HubSpot behavior, scheduling, Cloudflare config, dependencies, package-lock, secrets, blocking behavior, deny/block decisions, Active KAOS Rule activation, PR merge, or protected-system changes.
- **Target Files:** `.codex/README.md`; `.codex/hooks.json`; `.codex/hooks/artifact_authority_advisory.py`; `docs/kaos/hooks/README.md`; `docs/kaos/hooks/HOOK_CANDIDATE_REGISTRY.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Repo-local Codex advisory hook only; protected runtime systems are not modified.
- **Documentation Updates Required:** Document the hook purpose, advisory-only behavior, Windows command, Codex `/hooks` trust review, disable/rollback path, implementation notes, and registry status: implemented advisory hook yes; trust review required yes; enforced hook no; blocking hook no.
- **Validation Required:** `git diff --check`; `python -m py_compile .codex/hooks/artifact_authority_advisory.py`; `py -3 -m py_compile .codex/hooks/artifact_authority_advisory.py`; targeted traceability scan for `KAOS-HOOK005`, `KAOS-HOOK-ARTIFACT-AUTHORITY-001`, `artifact_authority_advisory`, `hooks.json`, `commandWindows`, `py -3`, `/hooks`, `advisory`, `non-blocking`, and `not blocking`; targeted deny/block scan; merge-conflict marker scan; `npm run build`.
- **Exit Criteria:** Repo-local `.codex/` hook area exists; exactly one advisory hook script exists; exactly one hook config exists; candidate registry records implemented advisory hook yes, trust review required yes, enforced hook no, and blocking hook no; hook remains advisory-only and non-blocking; `/hooks` trust review remains required after merge; MTR is updated as tracking only; only allowed files changed; no source/runtime/UI files, protected-system files, dependencies, package-lock, Cloudflare config, Active KAOS Rule, deny/block decision, or merge is created; formatting is normalized; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `KAOS-HOOK005` work order; PR #418 / `KAOS-HOOK004` merged; `KAOS-HOOK001`; `KAOS-HOOK002`; `KAOS-HOOK003`; `KAOS-HOOK004`; `docs/kaos/hooks/HOOK_LIFECYCLE_STANDARD_REV01.md`; `docs/kaos/hooks/HOOK_CANDIDATE_REGISTRY.md`; `docs/kaos/hooks/HOOK_RUNTIME_STANDARD_WINDOWS_REV01.md`; `docs/kaos/hooks/HOOK_SPEC_ARTIFACT_AUTHORITY_ADVISORY_REV01.md`; `docs/kaos/business-processes/README.md`; `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`; CODEX run contract; OPS003; OPS004; OPS005; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge. After merge, run Codex `/hooks` in this repository to review and trust the repo-local hook before trusted use.
- **Completion Notes:** Implemented the first repo-local advisory hook for `KAOS-HOOK-ARTIFACT-AUTHORITY-001` under `.codex/`. Created `.codex/hooks.json` with a Windows-aware `py -3` command and `PostToolUse` / `Bash` matcher, `.codex/hooks/artifact_authority_advisory.py` as a safe stdin JSON advisory script, and `.codex/README.md` documenting purpose, advisory-only behavior, Windows command, `/hooks` trust review, and disable/rollback. Updated the hook candidate registry and hook README to record implemented advisory hook yes, trust review required yes, enforced hook no, and blocking hook no, and to document that `/hooks` trust review is still required after merge. No hook was trusted or activated by this task. No blocking behavior, deny/block decisions, Active KAOS Rule, QA checks, source/runtime/UI files, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependencies, package-lock, environment, secrets, or protected systems were changed.

### KAOS-BP005A
- **Task ID:** KAOS-BP005A
- **Task Name:** Import BP001 Candidate Artifact Source Package
- **Status:** DONE
- **Category:** GOV
- **Tags:** KAOS / Business Process / Candidate Artifacts / Source Package / Governance
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Import the local BP001 candidate artifact source package into repository tracking so future KAOS/BKAS review tasks can cite repo-hosted candidate source files instead of temporary chat attachments.
- **Allowed Scope:** Add `docs/kaos/business-processes/candidate-artifacts/bp001-source-package/*` to git tracking without rewriting candidate artifact contents; update `docs/kaos/business-processes/README.md` with a lightweight package reference; update `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md` only as needed to point BP001A-K to the repo-hosted source package path and preserve source-package names from `MANIFEST.md`; update this Master Task Register record only as needed for activation, progress, status, and completion notes.
- **Forbidden Scope:** No source code, routes, UI, runtime/API files, Stripe/payment logic, HubSpot logic, scheduling logic, Cloudflare config, dependency or package-lock changes, candidate artifact rewrites, process approval, Active KAOS Rule activation, SOPs, BPM manuals, QA checks, hooks, merge, unrelated task edits, unrelated future task status changes, or version bump.
- **Target Files:** `docs/kaos/business-processes/candidate-artifacts/bp001-source-package/*`; `docs/kaos/business-processes/README.md`; `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation/governance source-artifact import only.
- **Documentation Updates Required:** Add this bounded task-register record because it was missing but explicitly operator-authorized in the current prompt; add package/index references; mark `DONE` only after validation.
- **Validation Required:** `git status --short`; `git diff --check`; `git diff --cached --check`; targeted `rg` for candidate-only and path references; scan docs for merge-conflict markers; run added-line forbidden-claim scan if repo tooling exists; `npm run build` because root `AGENTS.md` requires build before completion.
- **Exit Criteria:** KAOS-BP005A exists in this register; PR #412 / KAOS-BP004 is merged; BP001 source package files are present and tracked; README, MANIFEST, and WNYHS-BP001A through WNYHS-BP001K markdown files exist; candidate artifact contents are not rewritten; register/index docs point to the repo-hosted source package; all artifacts remain candidate-only and non-authoritative; no process is approved; no Active KAOS Rule is created; only allowed files changed; protected systems remain untouched; validation passes; draft PR is opened without merge.
- **Dependencies:** Operator authorization in current Codex thread to add missing KAOS-BP005A task record and execute it in the same bounded run; merged KAOS-BP004 PR #412; KAOS-BP001; KAOS-BP002; KAOS-BP003; current governance authority chain; `docs/system/step-current.md`; `docs/kaos/business-processes/README.md`; `docs/kaos/business-processes/BP_REVIEW_LIFECYCLE_STANDARD_REV01.md`; `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`; CODEX run contract; OPS004; OPS005.
- **Operator Decision Required:** Review draft PR and decide whether to merge. Future BP001A-BP001K label reconciliation, process review, approval, SOP, QA, hook, runtime, automation, or active-rule promotion requires separate bounded task authorization.
- **Completion Notes:** Operator authorized adding missing KAOS-BP005A as `ACTIVE` in this bounded run; the task was then completed and marked `DONE`. Confirmed PR #412 / KAOS-BP004 is merged. Added the local BP001 candidate source package under `docs/kaos/business-processes/candidate-artifacts/bp001-source-package/` to repository tracking and performed whitespace-only normalization on imported candidate markdown files solely to satisfy `git diff --cached --check`; candidate artifact meaning, ordering, source-package names, and content semantics were preserved. Updated the KAOS business-process README and candidate intake register to point BP001A-K to the repo-hosted source package, preserve uploaded `MANIFEST.md` names, and note that earlier register labels may need reconciliation in a future bounded task. Forbidden-claim scan terms such as monitoring or dispatch may appear inside candidate-only source artifacts; this is documented as acceptable only because those files are non-authoritative candidate source material, not public copy, not approved claims, and not active KAOS rules. No process was approved, no process was activated, no Active KAOS Rule was created, no SOPs, QA checks, hooks, runtime/API work, automation, source files, UI/routes, protected systems, dependencies, package-lock, Cloudflare config, HubSpot, Stripe/payment, scheduling, or unrelated tasks were changed.

### KAOS-BP004
- **Task ID:** KAOS-BP004
- **Task Name:** First Process Review Pilot: BOM Parts Qualification
- **Status:** DONE
- **Category:** GOV
- **Tags:** KAOS / Business Process / BOM / Hardware / Catalog / Review Pilot
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Run the first bounded operator-review pilot using the KAOS business-process review workflow created by KAOS-BP003 for exactly one candidate process area: BOM Parts Qualification.
- **Allowed Scope:** Create a narrowly scoped BOM Parts Qualification review record under `docs/kaos/business-processes/`; update `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md` only as needed to reflect the review-pilot status for WNYHS-BP001E; update this Master Task Register record only as needed for activation, progress, status, and completion notes; use repository authority and candidate-register metadata only if the exact source candidate content is missing.
- **Forbidden Scope:** No source code, routes, UI, Stripe/payment logic, HubSpot logic, scheduling logic, APIs/runtime behavior, Cloudflare config, package dependencies, package-lock, QA checks, hooks, SOPs, BPM manuals, package pricing, customer-facing hardware claims, process approval, Active KAOS Rule activation, PR merge, unrelated task edits, unrelated future task status changes, or version bump.
- **Target Files:** `docs/kaos/business-processes/BP_REVIEW_KAOS_BP004_BOM_PARTS_QUALIFICATION_REV01.md`; `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only governance review pilot.
- **Documentation Updates Required:** Add/promote KAOS-BP004 as `ACTIVE` for this bounded run if missing; create the BOM Parts Qualification review record; update the candidate intake register for WNYHS-BP001E review-pilot status; mark KAOS-BP004 `DONE` only after validation.
- **Validation Required:** `git diff --check`; `rg -n "KAOS-BP004|BOM Parts Qualification|WNYHS-BP001E|Active KAOS Rule|Approved Candidate|Operator Revision Requested|Needs Operator Review" docs/kaos docs/system`; scan docs for merge-conflict markers; run added-line forbidden claim scan if repo tooling exists; `npm run build` because root `AGENTS.md` requires build before completion.
- **Exit Criteria:** KAOS-BP004 exists in this register; exactly one candidate area is reviewed; a BOM Parts Qualification review record exists; WNYHS-BP001E register status reflects review-pilot outcome; lifecycle is not moved to Approved Candidate; no Active KAOS Rule is created; no process is activated; activation task is not created; only allowed documentation files changed; protected systems remain untouched; validation passes; draft PR is opened without merge.
- **Dependencies:** Operator authorization in current Codex thread to add missing KAOS-BP004 task record and execute it in the same bounded run; KAOS-BP001; KAOS-BP002; KAOS-BP003; current governance authority chain; `docs/system/step-current.md`; `docs/kaos/business-processes/README.md`; `docs/kaos/business-processes/BP_REVIEW_LIFECYCLE_STANDARD_REV01.md`; `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`; `docs/kaos/business-processes/BP_OPERATOR_REVIEW_TEMPLATE.md`; catalog and BOM/package authority docs found by targeted search; CODEX run contract; OPS003; OPS004; OPS005.
- **Operator Decision Required:** Review the pilot review record and decide whether to provide source candidate text, revise the candidate, approve a later candidate, or activate a separate future bounded promotion task.
- **Completion Notes:** Operator authorized adding the planned but missing KAOS-BP004 record as `ACTIVE` before execution in the same bounded run; the task was then completed and marked `DONE`. Created `docs/kaos/business-processes/BP_REVIEW_KAOS_BP004_BOM_PARTS_QUALIFICATION_REV01.md` as the first KAOS business-process review pilot for BOM Parts Qualification only. Updated WNYHS-BP001E and the future candidate table in `BP_CANDIDATE_INTAKE_REGISTER.md` to record `Operator Revision Requested` because the exact external candidate source content is missing and repository authority supports only a candidate interpretation. No process was approved, no process was activated, no Active KAOS Rule was created, no activation task was created, and no source/runtime/customer-facing files, protected systems, package pricing, customer-facing hardware claims, SOPs, QA checks, hooks, dependencies, package-lock, Cloudflare config, HubSpot, Stripe/payment, scheduling, APIs, or unrelated tasks were changed.

### KAOS-BP003
- **Task ID:** KAOS-BP003
- **Task Name:** Operator Review Workflow Standard
- **Status:** DONE
- **Category:** GOV
- **Tags:** KAOS / Business Process / Operator Review / Governance
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define the operator review workflow standard for business-process candidates before any candidate can become active KAOS authority.
- **Allowed Scope:** Update `docs/kaos/business-processes/BP_REVIEW_LIFECYCLE_STANDARD_REV01.md`, `docs/kaos/business-processes/BP_OPERATOR_REVIEW_TEMPLATE.md`, `docs/kaos/business-processes/README.md`, `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md` only if needed for cross-reference, and this Master Task Register record.
- **Forbidden Scope:** No source code, routes, UI, Stripe/payment logic, HubSpot logic, scheduling logic, APIs/runtime behavior, Cloudflare config, package dependencies, package-lock, QA checks, hooks, SOPs, BPM manuals, BP001A-K review, process approval, Active KAOS Rule activation, PR merge, unrelated task edits, unrelated future task status changes, or version bump.
- **Target Files:** `docs/kaos/business-processes/BP_REVIEW_LIFECYCLE_STANDARD_REV01.md`; `docs/kaos/business-processes/BP_OPERATOR_REVIEW_TEMPLATE.md`; `docs/kaos/business-processes/README.md`; `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only governance standard.
- **Documentation Updates Required:** Add the operator review workflow details, required review stages, allowed decisions, evidence requirements, review-record fields, lifecycle movement rules, Approved Candidate vs Active KAOS Rule boundary, separate activation requirement, register recording rules, and BP001A-K pilot usage rules.
- **Validation Required:** `git diff --check`; targeted `rg` for KAOS-BP003 and review lifecycle terms in `docs/kaos` and `docs/system`; scan docs for merge-conflict markers; run `npm run build` because root `AGENTS.md` requires build before completion.
- **Exit Criteria:** KAOS-BP003 exists in this register; workflow standard is defined in the existing KAOS business-process docs; allowed operator decisions include approve, edit/revise, reject, defer, supersede, deprecate, and retire; evidence and review-record fields are documented; Approved Candidate is explicitly not Active KAOS Rule; Active KAOS Rule requires separate bounded activation; candidate register recording rules are documented; BP001A-K pilot usage is documented; no BP001A-K artifact is reviewed, approved, or activated; only allowed files changed; validation passes; draft PR is opened without merge.
- **Dependencies:** Operator authorization in current Codex thread to add missing KAOS-BP003 task record and execute it in the same bounded run; KAOS-BP001; KAOS-BP002; current governance authority chain; `docs/system/step-current.md`; `docs/kaos/business-processes/README.md`; `docs/kaos/business-processes/BP_REVIEW_LIFECYCLE_STANDARD_REV01.md`; `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`; `docs/kaos/business-processes/BP_OPERATOR_REVIEW_TEMPLATE.md`; CODEX run contract; OPS003; OPS004; OPS005.
- **Operator Decision Required:** Review draft PR and decide whether to merge. Future BP001A-BP001K pilot reviews, approvals, SOPs, QA checks, hooks, runtime work, automation, or active-rule promotion require separate bounded task authorization.
- **Completion Notes:** Operator authorized adding the planned but missing KAOS-BP003 record as `ACTIVE` before execution in the same bounded run; the task was then completed and marked `DONE`. Updated the existing KAOS business-process review docs with an operator review workflow, required stages, allowed decisions, evidence requirements, review-record fields, register recording rules, explicit Approved Candidate versus Active KAOS Rule separation, separate bounded activation requirement, and BP001A-K pilot usage rules. No BP001A-K artifact was reviewed, approved, promoted, activated, superseded, deprecated, or retired. No SOPs, QA checks, hooks, runtime/API work, automation, source files, UI/routes, protected systems, version files, dependencies, package-lock, Cloudflare config, HubSpot, Stripe/payment, scheduling, or unrelated tasks were changed.

### KAOS-BP002
- **Task ID:** KAOS-BP002
- **Task Name:** Import WNYHS BP001A-K Artifact Manifest/Register
- **Status:** DONE
- **Category:** GOV
- **Tags:** KAOS / Business Process / Candidate Intake / Register
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Import the known WNYHS BP001A through BP001K business-process candidate artifact inventory into the KAOS business-process candidate intake/register structure created by KAOS-BP001 without approving, activating, rewriting, normalizing, or converting any process into active KAOS authority.
- **Allowed Scope:** Update `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`; update existing business-process manifest/index docs under `docs/kaos/business-processes/` only if the existing structure clearly needs it; update this Master Task Register record only as needed for activation, progress, status, and completion notes.
- **Forbidden Scope:** No source code, routes, UI, Stripe/payment logic, HubSpot logic, scheduling logic, APIs/runtime behavior, Cloudflare config, package dependencies, QA checks, hooks, SOPs, BPM manuals, process approval, Active KAOS Rule activation, PR merge, unrelated task edits, unrelated future task status changes, or version bump.
- **Target Files:** `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only candidate register update.
- **Documentation Updates Required:** Add BP001A-BP001K candidate artifact inventory rows to the existing candidate intake/register; keep all entries candidate-only and pending operator review; record this bounded task in the Master Task Register because it was planned but missing.
- **Validation Required:** `git diff --check`; `rg -n "WNYHS-BP001A|WNYHS-BP001B|WNYHS-BP001C|WNYHS-BP001D|WNYHS-BP001E|WNYHS-BP001F|WNYHS-BP001G|WNYHS-BP001H|WNYHS-BP001I|WNYHS-BP001J|WNYHS-BP001K" docs/kaos docs/system`; `rg -n "Active KAOS Rule|Approved Candidate" docs/kaos/business-processes`; scan docs for merge-conflict markers; run `npm run build` only if repo standard requires broader validation after docs-only work.
- **Exit Criteria:** KAOS-BP002 exists in this register; BP001A-BP001K are listed as candidate artifacts with artifact ID, artifact name/title, status, lifecycle state, source type, intended review domain, authority status, operator review required, approval status, and notes/dependencies; all entries remain candidate-only; no active KAOS rule is created; no business process is approved; only allowed files changed; validation passes; draft PR is opened without merge.
- **Dependencies:** Operator authorization in current Codex thread to add missing KAOS-BP002 task record and execute it in the same bounded run; KAOS-BP001; current governance authority chain; `docs/system/step-current.md`; `docs/kaos/business-processes/README.md`; `docs/kaos/business-processes/BP_REVIEW_LIFECYCLE_STANDARD_REV01.md`; `docs/kaos/business-processes/BP_CANDIDATE_INTAKE_REGISTER.md`; `docs/kaos/business-processes/BP_OPERATOR_REVIEW_TEMPLATE.md`; CODEX run contract; OPS003; OPS004; OPS005.
- **Operator Decision Required:** Review draft PR and decide whether to merge. Future BP001A-BP001K process review, approval, SOP, QA, hook, runtime, automation, or active-rule promotion requires separate bounded task authorization.
- **Completion Notes:** Operator authorized adding the planned but missing KAOS-BP002 record as `ACTIVE` before execution in the same bounded run; the task was then completed and marked `DONE`. Updated `BP_CANDIDATE_INTAKE_REGISTER.md` with a BP001A-BP001K candidate artifact manifest listing each known artifact ID/title, candidate status, Candidate lifecycle state, source type, intended review domain, not-authority status, operator-review requirement, not-approved approval status, and notes/dependencies. No candidate process was approved, no candidate was promoted, no Active KAOS Rule was created, no SOP/QA/hook/runtime/automation work was created, and no source/runtime/customer-facing files, protected systems, version files, dependencies, package-lock, Cloudflare config, HubSpot, Stripe/payment, scheduling, APIs, or unrelated tasks were changed.

### T-DEPLOY-REDIRECT001-002
- **Task ID:** T-DEPLOY-REDIRECT001-002
- **Task Name:** Fix Cloudflare Pages Redirects and SPA Fallback
- **Status:** DONE
- **Category:** QA
- **Tags:** Deployment / Cloudflare Pages / Redirects / SPA Fallback
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Fix the deployment issue causing blank pages on the `www` hostname by removing unsupported Cloudflare Pages redirect syntax while preserving route architecture work completed in `T-SITEARCH002-001`.
- **Allowed Scope:** Modify `public/_redirects`; bump the visible site version; update this task-register record; inspect deployment fallback and build configuration files as needed.
- **Forbidden Scope:** No category route changes; no solution route changes; no navigation changes; no footer link changes; no search changes; no sitemap changes; no robots changes; no canonical strategy changes; no category or solution content changes; no image generation pipeline changes; no HubSpot, Stripe/payment, scheduling, planner, quote flow, APIs/backend, Resend/email, package-lock, dependency, environment variable, Cloudflare DNS, or Cloudflare dashboard changes.
- **Target Files:** `public/_redirects`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Cloudflare Pages static redirect/fallback behavior only.
- **Documentation Updates Required:** This task-register record only.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`; inspect generated `dist/_redirects`.
- **Exit Criteria:** Unsupported domain-level redirect is removed from `_redirects`; `/api/*` pass-through remains; SPA fallback to `/index.html` remains; generated `dist/_redirects` matches the valid redirect configuration; version is bumped; protected systems and route architecture files remain untouched.
- **Dependencies:** Prompt-created bounded work order; `T-DEPLOY-REDIRECT001-001` diagnosis; completed `T-SITEARCH002-001` category route work.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Removed the unsupported domain-level redirect from `public/_redirects`, preserving `/api/*  /api/:splat  200` and the SPA fallback `/*      /index.html 200`. Confirmed `npm run build` passed and generated `dist/_redirects` contains only the valid API pass-through and SPA fallback. Bumped visible site version to `v1.0.169`. No category routes, flat routes, homepage behavior, navigation, footer links, search, sitemap, robots, canonical strategy, category content, solution content, image generation pipeline, HubSpot, Stripe/payment, scheduling, planner, quote flow, APIs/backend, Resend/email, package-lock, dependencies, environment variables, Cloudflare DNS, or Cloudflare dashboard settings were changed.

### T-SEO-BASELINE001-001
- **Task ID:** T-SEO-BASELINE001-001
- **Task Name:** Public Route Inventory and SEO Baseline Audit
- **Status:** DONE
- **Category:** QA
- **Tags:** SEO / Audit / Governance
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a baseline inventory of public routes, sitemap state, robots.txt state, and SEO readiness before any sitemap, metadata, schema, or page remediation work.
- **Allowed Scope:** Inspect repo route/page/navigation/sitemap/robots/metadata/schema/image patterns; create `docs/seo/SEO-BASELINE001_WNYHS_PUBLIC_ROUTE_INVENTORY_AND_SEO_BASELINE_REV01.md`; update this Master Task Register; update `docs/DOCUMENT_CATALOG.md`.
- **Forbidden Scope:** No source code edits; no route changes; no sitemap.xml changes; no robots.txt changes; no metadata implementation; no schema implementation; no image edits; no content rewrites; no UI changes; no HubSpot changes; no Stripe/payment changes; no scheduling changes; no planner changes; no runtime behavior changes; no environment variable changes; no secrets; no dependency changes; no package-lock changes; no deployment config changes.
- **Target Files:** `docs/seo/SEO-BASELINE001_WNYHS_PUBLIC_ROUTE_INVENTORY_AND_SEO_BASELINE_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`.
- **Runtime Systems Affected:** None. Documentation-only audit.
- **Documentation Updates Required:** SEO baseline audit report, this task record, and Document Catalog entry.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `npm run build`.
- **Exit Criteria:** Audit report lists discovered routes, sitemap inventory, robots inventory, metadata/crawlability/schema/image/internal-linking baselines, sitemap gaps, robots review recommendations, remediation backlog, and recommended next bounded tasks; only allowed target files are changed; protected systems remain untouched; build passes or unrelated failure is reported.
- **Dependencies:** Prompt-created bounded work order; repository governance documents; current route tree; current sitemap and robots files.
- **Operator Decision Required:** Review audit findings and decide which recommended SEO remediation task to activate next.
- **Completion Notes:** Created the docs-only SEO baseline audit report. Discovered 118 React route declarations and 1 static public HTML file candidate. Current sitemap contains 7 URLs; 22 likely indexable route rows are missing from sitemap, including one dynamic package-detail route family; 6 sitemap URLs are marked legacy/review/remove. Major risks recorded: current WNYHS routes mostly fall through to client-side `noindex, nofollow`; sitemap is legacy; SPA built HTML lacks route-specific content/metadata; route-specific metadata and structured data are mostly absent. No source code, sitemap, robots, metadata, schema, page content, UI, HubSpot, Stripe/payment, scheduling, Resend/email, API/backend, dependency, package-lock, environment, secret, or deployment-config files were changed.

### T-SEO001-001
- **Task ID:** T-SEO001-001
- **Task Name:** SEO Foundation Standard
- **Status:** DONE
- **Category:** GOV
- **Tags:** SEO / Governance / Foundation
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the WNYHS SEO foundation governance standard so future SEO remediation tasks have route classification, ownership, index, sitemap, robots, metadata, canonical, schema, image, internal-linking, search inclusion, package visibility, local SEO, measurement, and pre-merge checklist rules before implementation begins.
- **Allowed Scope:** Create `docs/seo/SEO001_WNYHS_SEO_FOUNDATION_STANDARD_REV01.md`; update this Master Task Register; update `docs/DOCUMENT_CATALOG.md`; update `docs/MARKDOWN_MANIFEST.md` if repository convention requires it.
- **Forbidden Scope:** No metadata changes; no title tag changes; no meta description changes; no canonical tag changes; no sitemap changes; no robots changes; no structured data implementation; no route changes; no navigation changes; no search implementation changes; no category page content changes; no solution page content changes; no package content changes; no image changes; no generated images; no HubSpot; no Stripe/payment; no scheduling; no planner; no quote flow; no backend/API runtime; no Resend/email; no Cloudflare config; no `.env` or secrets; no dependency or package-lock changes.
- **Target Files:** `docs/seo/SEO001_WNYHS_SEO_FOUNDATION_STANDARD_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation-only SEO governance standard.
- **Documentation Updates Required:** SEO001 foundation standard, this task-register record, Document Catalog entry, and Markdown Manifest addendum.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`.
- **Exit Criteria:** SEO001 exists with required sections; known baseline findings are documented as risks/gaps/future remediation tracks without remediation; route classification model is added; new-route SEO checklist is added; future implementation tasks are listed; only allowed documentation files changed; protected systems remain untouched; build passes.
- **Dependencies:** Prompt-created bounded work order; current governance authority chain; `SEO-BASELINE001`; `SITEARCH001`; `SITEARCH002`; `SEARCH001`; current operational context.
- **Operator Decision Required:** Review draft PR and decide whether to merge or activate future SEO remediation tasks.
- **Completion Notes:** Created the docs-only SEO foundation standard. Documented known baseline risks, route classification model, index/noindex governance, sitemap governance, robots review governance, metadata governance, canonical URL governance, structured data governance, image SEO governance, internal linking governance, site search inclusion governance, package SEO visibility, QR/campaign treatment, demo/interactive treatment, local SEO, service-area strategy, SPA crawlability risk management, measurement/reporting standards, forbidden SEO shortcuts, new-route pre-merge SEO checklist, future remediation tracks, required future implementation tasks, Codex restrictions, and success criteria. No metadata, title tag, canonical, sitemap, robots, schema, route, navigation, search implementation, category content, solution content, package content, image, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, environment, secret, dependency, or package-lock changes were made.


### CATEGORY-LANDING-001-A
- **Task ID:** CATEGORY-LANDING-001-A
- **Task Name:** Home Automation Category Landing Page
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement only the Home Automation public category landing page under CATEGORY001 and CATEGORY002 governance, using the governed WNYHS marketing layout and token visual system.
- **Allowed Scope:** Create/update the Home Automation category page route/component; update homepage category card/link only if necessary for the Home Automation category path; reuse existing WNYHS marketing layout/nav/footer; use governed token CSS primitives; add minimal token-compatible page-specific selectors only if necessary; bump visible site version during implementation; create an implementation record during implementation; update document catalog, markdown manifest, and this task record only as required by the implementation work order.
- **Forbidden Scope:** No HubSpot; no Stripe/payment; no scheduling; no Resend/email; no APIs/backend; no quote/estimate runtime behavior changes; no package pricing; no catalog schema changes; no protected operator routes; no semantic token definition changes; no dependency/package-lock changes; no global redesign; no unrelated page cleanup; no Cloudflare config changes; no direct deployment; no implementation of other category landing pages; no unsupported claims; no hardcoded colors outside the governed token system.
- **Target Files:** To be finalized by the separate bounded implementation work order. Expected implementation surfaces are the Home Automation category route/component, minimal token-compatible styling only if necessary, `src/lib/siteVersion.ts`, an implementation record in `docs/governance/`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, and `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Public Home Automation category page presentation/routing only, if authorized by the future implementation work order. Protected runtime systems are not affected.
- **Documentation Updates Required:** Implementation record, task-register completion notes, catalog entry, and manifest entry during the implementation task.
- **Validation Required:** `npm run build`; `git status`; `git diff --check`; `git diff --cached --check`; `git diff --name-only`; `git ls-files --deleted`; protected-file changed-file scan; forbidden-claim scan against touched public copy; token/CSS hardcoded-color scan for touched styling; route smoke check for the Home Automation category path if practical.
- **Exit Criteria:** Home Automation category landing page exists and follows CATEGORY002 section order; exactly four featured solution cards are present; WNYHS Core, full solution catalog, custom solutions CTA, global primary CTA, and footer/trust surface are present; governed WNYHS primitives are used where practical; homepage link/card changes are limited to what is necessary; visible site version and implementation record are updated; protected systems remain untouched; validation passes or limitations are documented.
- **Dependencies:** CATEGORY001 category standard, CATEGORY002 category landing page structure standard, PAGE_TOKEN_COMPLIANCE_GATE_REV01, DESIGN002 REV02, DESIGN003 REV01, DESIGN001 REV01, current WNYHS marketing layout/nav/footer, current solution/category content sources, and a separate bounded implementation prompt.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Implemented the `/home-automation` public category landing page using the CATEGORY002 section order: Hero, Automation Reveal, What Life Could Be Like, exactly four Featured Solutions, WNYHS Core Foundation, Full Solution Catalog, Custom Solutions CTA, Global Primary CTA, and shared WNYHS footer. Reused the existing WNYHS marketing layout/header/footer and governed visual primitives, added minimal token-compatible `.wnyhs-category-*` selectors, updated the homepage Home Automation category card link to `/home-automation`, and bumped the visible site version to `v1.0.159`. Created `docs/governance/IMPLEMENTATION_CATEGORY_LANDING_001_A_HOME_AUTOMATION_REV01.md` and registered it in the document catalog and markdown manifest. No HubSpot, Stripe/payment, scheduling, Resend/email, API/backend, Cloudflare config, environment, secrets, dependency, package-lock, quote/estimate runtime, catalog schema, package pricing, protected operator route, QRLanding, Lead Signal/requestId, other category page, or unrelated homepage redesign changes were made.
- **Polish Note (CATEGORY-LANDING-001-A-POLISH):** Additively polished `/home-automation` without reactivating CATEGORY-LANDING-001-A and without activating CATEGORY-LANDING-001-B. Improved token-governed text contrast/readability, strengthened the reveal section with a homeowner/WNYHS split, added scannable accent markers to the "What Life Could Be Like" bridge cards, upgraded the four Featured Solution cards with existing media and safe CTA/link treatment, refined CATEGORY002 governance lessons, updated the implementation record, and bumped the visible site version to `v1.0.160`. Remaining debt: dedicated Home Automation reveal/solution imagery and dedicated solution routes for automation entries where no route exists. Protected systems and unrelated category pages remained untouched.
- **Image Asset Polish Note (CATEGORY-LANDING-001-A-IMAGE-ASSET-POLISH):** Additively updated `/home-automation` with the approved local image assets from `public/images/category-pages/home-automation/`. Updated the hero, reveal, dashboard/mobile proof, four featured solution card visuals, and WNYHS Core whole-property/routine visuals; added hover and keyboard focus reveal swapping from `neonimage.png` to `neonimagenoneon.png`; used contained image scaling where important content must remain visible; updated the implementation record; and bumped the visible site version to `v1.0.161`. Protected systems and unrelated category pages remained untouched.
- **Image Layout Polish Note (Prompt Follow-Up After PR #334):** Additively polished `/home-automation` image layout only. Enlarged the hero image through layout/spacing only; fixed the "What Life Could Be Like" dashboard/mobile proof group to stay inside its parent container; added Good Morning to a compact five-scene lifecycle strip with Arrival Automation, Movie Night, Goodnight Routine, and Vacation Mode; made the four featured solution cards more image-led while preserving exactly four featured solutions; increased the WNYHS Core whole-property platform image presence with page-scoped CSS; preserved reveal hover/focus swapping from `neonimage.png` to `neonimagenoneon.png`; and bumped the visible site version to `v1.0.162`. Protected systems and unrelated category pages remained untouched.
- **Thumbnail JPG Update Note (Prompt Follow-Up):** Additively updated `/home-automation` thumbnail imagery only. Replaced the "What Life Could Be Like" routine strip with the approved bright JPG thumbnails (`good-morning-thumb.jpg`, `arrival-automation-thumb.jpg`, `movie-night-thumb.jpg`, `goodnight-routine-thumb.jpg`, `vacation-mode-thumb.jpg`) and replaced the four featured solution card images with the approved solution JPG thumbnails (`solution-arrival-automation-thumb.jpg`, `solution-movie-night-scenes-thumb.jpg`, `solution-goodnight-routine-thumb.jpg`, `solution-vacation-mode-thumb.jpg`). Preserved copy, titles, responsive contained image treatment, existing larger PNG educational graphics, and reference/mockup files; bumped the visible site version to `v1.0.163`. Protected systems and unrelated category pages remained untouched.
- **Final Image Layout Polish Note (Prompt Follow-Up After PR #336):** Additively polished `/home-automation` image layout only. Fixed the hero media frame to use the approved image aspect ratio at the wrapper level and fill the rounded frame without excessive vertical letterboxing; fixed the four Most Popular Automation Solutions media frames so the approved solution JPG thumbnails sit inside each card with zero figure margin, consistent 4 / 3 sizing, clipped overflow, and stable card rows; preserved copy, routes, CTAs, and image asset references; bumped the visible site version to `v1.0.164`. Protected systems and unrelated category pages remained untouched.
- **Life Section Polish Note (Prompt Follow-Up):** Additively polished only the `/home-automation` "What Life Could Be Like" section. Added customer-friendly captions under the primary dashboard and secondary phone visuals; tightened the phone sizing so the dashboard remains primary; added "Popular Automation Routines" context above the approved routine thumbnail strip; replaced the three bridge benefit cards with clearer customer-friendly copy; preserved approved image asset references, routes, protected systems, and unrelated category pages; bumped the visible site version to `v1.0.165`.
- **Core Panel Polish Note (Prompt Follow-Up):** Additively polished WNYHS Core copy on the live homepage Core panel and `/home-automation` Core panel. Reframed homepage Core as the platform-wide customer-owned foundation behind every WNYHS solution category; reframed Home Automation Core as the category-specific foundation for current automation routines and future supported additions; replaced the Home Automation Core whole-property infographic with the approved dashboard image `fullsizehomeautomationdashboard.png`; preserved the existing homepage Core dashboard/phone imagery; noted future image-viewer/lightbox behavior as separate enhancement debt only; bumped the visible site version to `v1.0.166`. Protected systems and unrelated category pages remained untouched.

### CATEGORY-LANDING-001-A-IMAGE-ASSET-POLISH
- **Task ID:** CATEGORY-LANDING-001-A-IMAGE-ASSET-POLISH
- **Task Name:** Home Automation Category Image Asset Polish
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Integrate the approved local Home Automation category image assets into the already-implemented `/home-automation` category landing page.
- **Allowed Scope:** Update only the Home Automation category page imagery and token-compatible image styling; add the Automation Reveal hover/focus swap; use approved assets from `public/images/category-pages/home-automation/`; bump visible site version; update this register and the existing implementation record.
- **Forbidden Scope:** No HubSpot; no Stripe/payment; no scheduling; no Resend/email; no APIs/backend; no Cloudflare config; no package/dependency changes; no quote/estimate runtime changes; no unrelated category pages; no new routes; no approved image filename changes; no raw color/token drift.
- **Target Files:** `src/pages/HomeAutomation.tsx`, `src/styles/wnyhsVisualGovernance.css`, `src/lib/siteVersion.ts`, `docs/governance/IMPLEMENTATION_CATEGORY_LANDING_001_A_HOME_AUTOMATION_REV01.md`, and `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public Home Automation category page presentation only.
- **Documentation Updates Required:** Existing implementation record and this register updated.
- **Validation Required:** `git status --short --branch`; `git diff --check`; `git diff --cached --check` if staged; `git diff --name-only`; `git ls-files --deleted`; `npm run build`; source review that `/home-automation` still renders; confirm referenced image paths exist; confirm protected systems unchanged; confirm no raw color/token violations introduced in touched CSS; confirm important image content is not intentionally cropped by CSS.
- **Exit Criteria:** Home Automation hero, reveal, dashboard/mobile proof, featured scenes, and whole-property visuals use approved assets; reveal image swaps from `neonimage.png` to `neonimagenoneon.png` on hover and keyboard focus; responsive scaling preserves important image content; version is bumped to `v1.0.161`; protected systems remain untouched.
- **Dependencies:** CATEGORY-LANDING-001-A, CATEGORY001, CATEGORY002, PAGE_TOKEN_COMPLIANCE_GATE_REV01, current visual governance CSS, and bounded prompt-created image asset work order.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Completed for version `v1.0.161`.

### CATEGORY003-GOV-001
- **Task ID:** CATEGORY003-GOV-001
- **Task Name:** Category Page Image And Visual Parity Governance
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create docs-only CATEGORY003 governance that captures the approved Home Automation category landing page as the reusable image, visual parity, section-purpose, thumbnail, dashboard/mobile/routine, WNYHS Core, and asset-package standard for future category landing pages.
- **Allowed Scope:** Create `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`; update this task register; update `docs/DOCUMENT_CATALOG.md`; update `docs/MARKDOWN_MANIFEST.md`; leave public site version unchanged unless repo convention requires otherwise.
- **Forbidden Scope:** No application source code; no CSS; no images; no homepage; no `/home-automation`; no HubSpot; no Stripe/payment; no scheduling/calendar; no Resend/email; no APIs/backend; no Cloudflare config; no `package.json` or `package-lock`; no quote/estimate runtime; no new category pages; no deployment.
- **Target Files:** `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, and `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation-only governance update.
- **Documentation Updates Required:** CATEGORY003 governance standard, document catalog entry, markdown manifest addendum, and this task record.
- **Validation Required:** `git status --short --branch`; `git diff --check`; `git diff --cached --check` if staged; `git diff --name-only`; `git ls-files --deleted`; confirm CATEGORY003 doc exists; confirm catalog and manifest updates; confirm no source/CSS/image/runtime/protected files changed; `npm run build` optional and not required for this docs-only task.
- **Exit Criteria:** CATEGORY003 exists with required sections; Home Automation reference image filenames are listed; CATEGORY001/CATEGORY002 relationship is documented; repository indexes are updated; task register records completion; validation passes; public site version remains unchanged; protected systems remain untouched.
- **Dependencies:** CATEGORY001, CATEGORY002, CATEGORY-LANDING-001-A through related image/layout/life/Core polish notes, PAGE_TOKEN_COMPLIANCE_GATE_REV01, DESIGN002 REV02, DESIGN003 REV01, and the bounded prompt-created docs-only work order.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created CATEGORY003 as docs-only governance for category page image classes, visual parity rules, section purpose, thumbnails, dashboard/mobile/routine hierarchy, WNYHS Core homepage/category distinction, future category asset packages, compliance checklist, and Home Automation reference filenames. Updated `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this register. Public site version left unchanged. Protected systems and application/runtime files remained untouched.

### T-IMG-CATEGORY001-001
- **Task ID:** T-IMG-CATEGORY001-001
- **Task Name:** Category Asset Production Standard
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create docs-only governance for official WNYHS category-level visual asset production, approval, organization, usage, rejection, and future AI-assisted image workflows.
- **Allowed Scope:** Create `docs/design-system/IMG-CATEGORY001_WNYHS_CATEGORY_ASSET_PRODUCTION_STANDARD_REV01.md`; add this task record to the Master Task Register; update `docs/DOCUMENT_CATALOG.md` because design-system governance documents are tracked there; use claim-safe substitutes for risk terms.
- **Forbidden Scope:** No image generation; no image file additions, removals, or replacements; no public category page implementation; no CSS, token, component, route, or layout changes; no Stripe/payment changes; no HubSpot changes; no scheduling, planner, quote, runtime, environment, deployment, API/backend, Resend/email, dependency, package-lock, or protected-system changes; no new categories; no change to approved category strategy.
- **Target Files:** `docs/design-system/IMG-CATEGORY001_WNYHS_CATEGORY_ASSET_PRODUCTION_STANDARD_REV01.md`, `docs/system/master-task-register.md`, and `docs/DOCUMENT_CATALOG.md`.
- **Runtime Systems Affected:** None. Documentation-only governance update.
- **Documentation Updates Required:** IMG-CATEGORY001 governance standard, this Master Task Register entry, and Document Catalog entry.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; forbidden-claim scan against touched files; `npm run build` because root execution rules require build before completion.
- **Exit Criteria:** IMG-CATEGORY001 exists with required sections covering category heroes, lower-right hardware clusters, dashboards, mobile dashboards, WNYHS Core images, reveal/explainer images, solution thumbnails, routine thumbnails, future AI-assisted production workflows, file naming, folder structure, exports, manifest, approval checklist, rejected-asset workflow, future catalog integration, Codex restrictions, and success criteria; task register and document catalog are updated; no forbidden claim terms are added; protected systems remain untouched.
- **Dependencies:** Prompt-created bounded work order, claim-safe resolution for T-IMG-CATEGORY001-001, DESIGN001 REV01, CATEGORY003 REV01, SOLUTION001 REV02, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created IMG-CATEGORY001 as docs-only governance for category-level visual asset production standards, using claim-safe substitutes for dashboard, Core, Home Safety, and asset workflow language. Updated this register and `docs/DOCUMENT_CATALOG.md`. No image assets, application source, CSS/tokens/components, routes/layouts, runtime, HubSpot, Stripe/payment, scheduling, planner, quote, APIs/backend, Resend/email, Cloudflare config, dependencies, package-lock, environment, secrets, or protected-system files were modified.

### T-IMG-CATEGORY002-001
- **Task ID:** T-IMG-CATEGORY002-001
- **Task Name:** Category Asset Manifest + Generation Plan
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create docs-only governance for the authoritative WNYHS category-level image inventory required before category image assets are produced.
- **Allowed Scope:** Create `docs/design-system/IMG-CATEGORY002_WNYHS_CATEGORY_ASSET_MANIFEST_STANDARD_REV01.md`; add this task record to the Master Task Register; update `docs/DOCUMENT_CATALOG.md` because design-system governance documents are tracked there; use claim-safe language only.
- **Forbidden Scope:** No image generation; no image file additions, removals, or replacements; no public category page implementation; no CSS, token, component, route, or layout changes; no Stripe/payment changes; no HubSpot changes; no scheduling, planner, quote, runtime, environment, deployment, API/backend, Resend/email, dependency, package-lock, or protected-system changes; no new categories; no change to approved category strategy; no IMG-CATEGORY001 changes except catalog references if required.
- **Target Files:** `docs/design-system/IMG-CATEGORY002_WNYHS_CATEGORY_ASSET_MANIFEST_STANDARD_REV01.md`, `docs/system/master-task-register.md`, and `docs/DOCUMENT_CATALOG.md`.
- **Runtime Systems Affected:** None. Documentation-only governance update.
- **Documentation Updates Required:** IMG-CATEGORY002 governance standard, this Master Task Register entry, and Document Catalog entry.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; forbidden-claim scan against touched files; `npm run build` unless repository guidance says docs-only changes do not require it.
- **Exit Criteria:** IMG-CATEGORY002 exists with required sections covering purpose, authority, relationship to IMG-CATEGORY001, current category set, baseline asset inventory, category asset table, hero/dashboard/mobile/Core/reveal/routine/solution asset requirements, category-specific requirements, generation priority matrix, asset count forecast, manifest field standard, future generation task rules, Codex restrictions, and success criteria; task register and document catalog are updated; no forbidden claim terms are added in new task content; no image assets or application/runtime/protected-system files are modified.
- **Dependencies:** Prompt-created bounded work order, IMG-CATEGORY001 REV01, DESIGN001 REV01, CATEGORY003 REV01, SOLUTION001 REV02, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created IMG-CATEGORY002 as docs-only governance for the category-level image inventory, naming, grouping, priority, manifest field standard, and future production-task consumption rules. Updated this register and `docs/DOCUMENT_CATALOG.md`. No image assets, application source, CSS/tokens/components, routes/layouts, runtime, HubSpot, Stripe/payment, scheduling, planner, quote, APIs/backend, Resend/email, Cloudflare config, dependencies, package-lock, environment, secrets, or protected-system files were modified.

### T-IMG-CATEGORY003-001
- **Task ID:** T-IMG-CATEGORY003-001
- **Task Name:** Category Asset Source Manifest
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the first concrete docs-only WNYHS category asset source manifest with planned asset records future image-generation tasks can consume.
- **Allowed Scope:** Create `docs/design-system/IMG-CATEGORY003_WNYHS_CATEGORY_ASSET_SOURCE_MANIFEST_REV01.md`; add this task record to the Master Task Register; update `docs/DOCUMENT_CATALOG.md` because design-system governance documents are tracked there; use claim-safe language only.
- **Forbidden Scope:** No image generation; no image file additions, removals, or replacements; no public category page implementation; no CSS, token, component, route, or layout changes; no Stripe/payment changes; no HubSpot changes; no scheduling, planner, quote, runtime, environment, deployment, API/backend, Resend/email, dependency, package-lock, or protected-system changes; no new categories; no change to approved category strategy; no IMG-CATEGORY001 or IMG-CATEGORY002 changes except catalog references if required.
- **Target Files:** `docs/design-system/IMG-CATEGORY003_WNYHS_CATEGORY_ASSET_SOURCE_MANIFEST_REV01.md`, `docs/system/master-task-register.md`, and `docs/DOCUMENT_CATALOG.md`.
- **Runtime Systems Affected:** None. Documentation-only governance update.
- **Documentation Updates Required:** IMG-CATEGORY003 source manifest, this Master Task Register entry, and Document Catalog entry.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; forbidden-claim scan against touched files; `npm run build` unless repository guidance says docs-only changes do not require it.
- **Exit Criteria:** IMG-CATEGORY003 exists with required sections covering purpose, authority, relationship to IMG-CATEGORY001 and IMG-CATEGORY002, status definitions, folder path standard, asset ID standard, baseline asset inventory summary, five category manifests, cross-category naming review, generation readiness checklist, future task routing, Codex restrictions, and success criteria; each category has 10 planned baseline assets; task register and document catalog are updated; no forbidden claim terms are added in new task content; no image assets or application/runtime/protected-system files are modified.
- **Dependencies:** Prompt-created bounded work order, IMG-CATEGORY001 REV01, IMG-CATEGORY002 REV01, DESIGN001 REV01, CATEGORY003 REV01, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created IMG-CATEGORY003 as a docs-only source manifest for 50 baseline planned category assets across Home Security, Home Automation, Aging In Place, Home Safety, and Home Lighting. Recorded asset IDs, classes, filenames, folder paths, priorities, required visual content, hardware cluster requirements, dashboard/Core requirements, planned approval status, and not-started generation status. Updated this register and `docs/DOCUMENT_CATALOG.md`. No image assets, application source, CSS/tokens/components, routes/layouts, runtime, HubSpot, Stripe/payment, scheduling, planner, quote, APIs/backend, Resend/email, Cloudflare config, dependencies, package-lock, environment, secrets, or protected-system files were modified.

### T-IMG-CATEGORY004-001
- **Task ID:** T-IMG-CATEGORY004-001
- **Task Name:** Home Security Category Asset Generation Plan
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only Home Security category asset generation plan that converts the Home Security rows from IMG-CATEGORY003 into a concrete prompt-and-production plan for later asset generation.
- **Allowed Scope:** Create `docs/design-system/IMG-CATEGORY004_HOME_SECURITY_ASSET_GENERATION_PLAN_REV01.md`; add this task record to the Master Task Register; update `docs/DOCUMENT_CATALOG.md` because design-system governance documents are tracked there; use claim-safe language only.
- **Forbidden Scope:** No image generation; no image file additions, removals, or replacements; no public category page implementation; no CSS, token, component, route, or layout changes; no Stripe/payment changes; no HubSpot changes; no scheduling, planner, quote, runtime, environment, deployment, API/backend, Resend/email, dependency, package-lock, or protected-system changes; no new categories; no change to approved category strategy; no IMG-CATEGORY001, IMG-CATEGORY002, or IMG-CATEGORY003 changes except catalog references if required.
- **Target Files:** `docs/design-system/IMG-CATEGORY004_HOME_SECURITY_ASSET_GENERATION_PLAN_REV01.md`, `docs/system/master-task-register.md`, and `docs/DOCUMENT_CATALOG.md`.
- **Runtime Systems Affected:** None. Documentation-only planning update.
- **Documentation Updates Required:** IMG-CATEGORY004 Home Security generation plan, this Master Task Register entry, and Document Catalog entry.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; forbidden-claim scan against touched files; `npm run build` unless repository guidance says docs-only changes do not require it.
- **Exit Criteria:** IMG-CATEGORY004 exists with required sections covering purpose, authority, relationship to IMG-CATEGORY001/002/003, scope, Home Security asset list, visual direction, hero hardware cluster standard, dashboard/Core content requirements, asset-by-asset prompt package, output checklist, generation sequence, review checklist, rejection/revision workflow, future task routing, Codex restrictions, and success criteria; all ten planned Home Security assets from IMG-CATEGORY003 are included; task register and document catalog are updated; no forbidden claim terms are added in new task content; no image assets or application/runtime/protected-system files are modified.
- **Dependencies:** Prompt-created bounded work order, IMG-CATEGORY001 REV01, IMG-CATEGORY002 REV01, IMG-CATEGORY003 REV01, DESIGN001 REV01, current brand/funnel standards, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created IMG-CATEGORY004 as a docs-only Home Security prompt-and-production plan for the ten planned Home Security category assets from IMG-CATEGORY003. Documented visual direction, hero hardware cluster requirements, dashboard/Core content requirements, prompt packages, output checklist, generation sequence, review checklist, rejection/revision workflow, and future routing to `T-IMG-CATEGORY005-001`. Updated `docs/DOCUMENT_CATALOG.md`. No image assets, application source, CSS/tokens/components, routes/layouts, runtime, HubSpot, Stripe/payment, scheduling, planner, quote, APIs/backend, Resend/email, Cloudflare config, dependencies, package-lock, environment, secrets, or protected-system files were modified.

### T-IMG-PIPELINE001-001
- **Task ID:** T-IMG-PIPELINE001-001
- **Task Name:** Image Generation Pipeline Setup Plan
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only setup plan for a repo-side OpenAI Image API generation pipeline that can consume IMG-CATEGORY003 source manifest rows and IMG-CATEGORY004-style generation plans in a later implementation task.
- **Allowed Scope:** Create `docs/design-system/IMG-PIPELINE001_OPENAI_IMAGE_GENERATION_PIPELINE_SETUP_PLAN_REV01.md`; add this task record to the Master Task Register; update `docs/DOCUMENT_CATALOG.md` because design-system governance documents are tracked there; use claim-safe language only.
- **Forbidden Scope:** No OpenAI API implementation; no image generation; no image file additions, removals, or replacements; no scripts or package scripts; no public category page implementation; no CSS, token, component, route, or layout changes; no Stripe/payment changes; no HubSpot changes; no scheduling, planner, quote, runtime, environment, deployment, API/backend, Resend/email, dependency, package-lock, or protected-system changes; no `.env` changes; no secrets; no change to approved category strategy; no IMG-CATEGORY001, IMG-CATEGORY002, IMG-CATEGORY003, or IMG-CATEGORY004 changes except catalog references if required.
- **Target Files:** `docs/design-system/IMG-PIPELINE001_OPENAI_IMAGE_GENERATION_PIPELINE_SETUP_PLAN_REV01.md`, `docs/system/master-task-register.md`, and `docs/DOCUMENT_CATALOG.md`.
- **Runtime Systems Affected:** None. Documentation-only setup planning update.
- **Documentation Updates Required:** IMG-PIPELINE001 setup plan, this Master Task Register entry, and Document Catalog entry.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; forbidden-claim scan against touched files; `npm run build` unless repository guidance says docs-only changes do not require it.
- **Exit Criteria:** IMG-PIPELINE001 exists with required sections covering purpose, authority, relationship to IMG-CATEGORY001/002/003/004, provider decision, required environment variables, proposed script location, input source model, output folder model, draft/review/approved workflow, no-auto-overwrite rule, prompt assembly model, claim-safe language enforcement, visual standard enforcement, cost controls, local execution workflow, repository safety rules, validation, failure handling, future implementation task, Codex restrictions, and success criteria; task register and document catalog are updated; no forbidden claim terms are added in new task content; no API implementation, image assets, scripts, application files, runtime files, environment files, or protected-system files are modified.
- **Dependencies:** Prompt-created bounded work order, IMG-CATEGORY001 REV01, IMG-CATEGORY002 REV01, IMG-CATEGORY003 REV01, IMG-CATEGORY004 REV01, DESIGN001 REV01, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created IMG-PIPELINE001 as a docs-only setup plan for a future repo-side OpenAI Image API generation pipeline. Documented environment variable expectations, proposed script location, manifest and generation-plan input model, draft/review/approved folder separation, no-auto-overwrite behavior, prompt assembly, claim-safe language and visual standards enforcement, cost controls, command intent, validation, failure handling, and future routing to `T-IMG-PIPELINE001-002`. Updated `docs/DOCUMENT_CATALOG.md`. No OpenAI API calls, scripts, package scripts, image assets, application source, CSS/tokens/components, routes/layouts, runtime, HubSpot, Stripe/payment, scheduling, planner, quote, APIs/backend, Resend/email, Cloudflare config, dependencies, package-lock, environment, secrets, or protected-system files were modified.

### T-IMG-PIPELINE001-002
- **Task ID:** T-IMG-PIPELINE001-002
- **Task Name:** Implement OpenAI Image Generation Pipeline
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement a safe repo-side OpenAI Image API pipeline scaffold for future bounded category asset candidate generation from approved manifest and generation-plan data.
- **Allowed Scope:** Create scripts under `scripts/image-generation/`; create a script README; add safe npm scripts; add Home Security structured image-generation config derived from IMG-CATEGORY003 and IMG-CATEGORY004; update this register; update `docs/DOCUMENT_CATALOG.md` and `docs/MARKDOWN_MANIFEST.md` for the new README entry.
- **Forbidden Scope:** No image asset generation; no write-mode execution; no OpenAI API calls during validation; no committed generated image assets; no public category page implementation; no CSS, token, component, route, or layout changes; no Stripe/payment changes; no HubSpot changes; no scheduling, planner, quote, runtime, environment, deployment, API/backend, Resend/email, dependency, package-lock, `.env`, secret, or protected-system changes; no weakening repository guardrails; no IMG-CATEGORY001, IMG-CATEGORY002, IMG-CATEGORY003, IMG-CATEGORY004, or IMG-PIPELINE001 changes except catalog/manifest references if required.
- **Target Files:** `scripts/image-generation/generate-category-assets.mjs`, `scripts/image-generation/image-generation-config.mjs`, `scripts/image-generation/image-generation-utils.mjs`, `scripts/image-generation/README.md`, `package.json`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, and `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Local developer image-generation script scaffold only. Protected runtime systems are not affected.
- **Documentation Updates Required:** Script README cataloged; this Master Task Register entry added and marked DONE after validation.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run images:generate -- --category home-security --dry-run`; `npm run images:generate -- --category home-security --asset hero-home-security.jpg --dry-run`; `npm run build`; touched-file forbidden-claim scan; protected-system changed-file scan.
- **Exit Criteria:** Pipeline scaffold exists; dry-run works; single-category selection works; single-asset selection works; write mode is implemented but not executed; no OpenAI API call is executed during validation; no image generation is performed; no image assets are added, removed, or replaced; no `.env`, secret, dependency, package-lock, category page, CSS/token/component/route/layout, Stripe/payment, HubSpot, scheduling/planner/quote/runtime, or protected-system changes are made.
- **Dependencies:** Prompt-created bounded work order, explicit operator resolution replacing the forbidden negative-prompt term with `law-enforcement-style imagery`, IMG-CATEGORY001 REV01, IMG-CATEGORY002 REV01, IMG-CATEGORY003 REV01, IMG-CATEGORY004 REV01, IMG-PIPELINE001 REV01, DESIGN001 REV01, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Implemented the dry-run-first image generation scaffold under `scripts/image-generation/` with structured Home Security config for exactly ten planned assets, single-category and single-asset selection, claim-safe prompt assembly, draft/review output path planning, explicit `--write` gating, `OPENAI_API_KEY` required only for write mode, native `fetch` OpenAI Image API integration for future authorized use, candidate suffixing for existing draft/review filenames, and summary output. Added safe npm scripts. Updated `docs/DOCUMENT_CATALOG.md` and `docs/MARKDOWN_MANIFEST.md` for the script README. Validation passed without executing write mode, calling the OpenAI API, or generating image assets. No `.env`, secrets, dependencies, package-lock, image assets, public category pages, CSS/tokens/components/routes/layouts, Stripe/payment, HubSpot, scheduling, planner, quote, runtime, deployment, API/backend, Resend/email, or protected-system files were modified.

### CATEGORY-LANDING-001-B
- **Task ID:** CATEGORY-LANDING-001-B
- **Task Name:** Home Security Category Landing Page
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Prepare a bounded future task to implement only the Home Security public category landing page under CATEGORY001 and CATEGORY002 governance.
- **Allowed Scope:** Completed as part of the prompt-approved one-pass implementation for the remaining four category landing pages: updated the existing `/home-security` route/component, reused existing WNYHS marketing layout/nav/footer and governed category primitives, bumped visible site version, created an implementation record, updated homepage category-card links, and updated required docs.
- **Forbidden Scope:** No HubSpot; no Stripe/payment; no scheduling; no Resend/email; no APIs/backend; no quote/estimate runtime behavior changes; no package pricing; no catalog schema changes; no protected operator routes; no semantic token definition changes; no dependency/package-lock changes; no global redesign; no unrelated page cleanup; no Cloudflare config changes; no direct deployment.
- **Target Files:** `src/pages/CategoryLandingPage.tsx`, `src/pages/HomeSecurity.tsx`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/App.tsx`, `src/lib/siteVersion.ts`, `docs/governance/IMPLEMENTATION_CATEGORY_LANDING_001_REMAINING_CATEGORIES_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, and `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Public Home Security category page presentation/routing only.
- **Documentation Updates Required:** Completed.
- **Validation Required:** `git status --short --branch`; `git diff --check`; `git diff --cached --check` if staged; `git diff --name-only`; `git ls-files --deleted`; `npm run build`; source review for category routes; referenced image path check; protected-system changed-file scan; forbidden-claim scan; token/CSS hardcoded color scan.
- **Exit Criteria:** Home Security category landing page follows CATEGORY002/CATEGORY003 structure with four featured solutions, category-specific WNYHS Core, broader solution catalog, custom solutions CTA, global CTA, governed primitives, version bump, documentation record, and protected systems untouched.
- **Dependencies:** CATEGORY001, CATEGORY002, PAGE_TOKEN_COMPLIANCE_GATE_REV01, DESIGN002 REV02, DESIGN003 REV01, DESIGN001 REV01, and a separate bounded implementation prompt.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Implemented `/home-security` as the Home Security category landing page in the approved four-category pass. Version bumped to `v1.0.167`. Protected systems remained untouched.

### CATEGORY-LANDING-001-C
- **Task ID:** CATEGORY-LANDING-001-C
- **Task Name:** Aging-In-Place Category Landing Page
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Prepare a bounded future task to implement only the Aging-In-Place public category landing page under CATEGORY001 and CATEGORY002 governance.
- **Allowed Scope:** Completed as part of the prompt-approved one-pass implementation for the remaining four category landing pages: created the `/aging-in-place` route/component, reused existing WNYHS marketing layout/nav/footer and governed category primitives, bumped visible site version, created an implementation record, updated homepage category-card links, and updated required docs.
- **Forbidden Scope:** No HubSpot; no Stripe/payment; no scheduling; no Resend/email; no APIs/backend; no quote/estimate runtime behavior changes; no package pricing; no catalog schema changes; no protected operator routes; no semantic token definition changes; no dependency/package-lock changes; no global redesign; no unrelated page cleanup; no Cloudflare config changes; no direct deployment.
- **Target Files:** `src/pages/CategoryLandingPage.tsx`, `src/pages/AgingInPlace.tsx`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/App.tsx`, `src/lib/siteVersion.ts`, `docs/governance/IMPLEMENTATION_CATEGORY_LANDING_001_REMAINING_CATEGORIES_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, and `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Public Aging-In-Place category page presentation/routing only.
- **Documentation Updates Required:** Completed.
- **Validation Required:** `git status --short --branch`; `git diff --check`; `git diff --cached --check` if staged; `git diff --name-only`; `git ls-files --deleted`; `npm run build`; source review for category routes; referenced image path check; protected-system changed-file scan; forbidden-claim scan; token/CSS hardcoded color scan.
- **Exit Criteria:** Aging-In-Place category landing page follows CATEGORY002/CATEGORY003 structure with four featured solutions, category-specific WNYHS Core, broader solution catalog, custom solutions CTA, global CTA, governed primitives, version bump, documentation record, and protected systems untouched.
- **Dependencies:** CATEGORY001, CATEGORY002, PAGE_TOKEN_COMPLIANCE_GATE_REV01, DESIGN002 REV02, DESIGN003 REV01, DESIGN001 REV01, and a separate bounded implementation prompt.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Implemented `/aging-in-place` as the Aging-In-Place category landing page in the approved four-category pass. Version bumped to `v1.0.167`. Protected systems remained untouched.

### CATEGORY-LANDING-001-D
- **Task ID:** CATEGORY-LANDING-001-D
- **Task Name:** Environmental Safety Category Landing Page
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Prepare a bounded future task to implement only the Environmental Safety public category landing page under CATEGORY001 and CATEGORY002 governance.
- **Allowed Scope:** Completed as part of the prompt-approved one-pass implementation for the remaining four category landing pages: created the `/home-safety` route/component, reused existing WNYHS marketing layout/nav/footer and governed category primitives, bumped visible site version, created an implementation record, updated homepage category-card links, and updated required docs.
- **Forbidden Scope:** No HubSpot; no Stripe/payment; no scheduling; no Resend/email; no APIs/backend; no quote/estimate runtime behavior changes; no package pricing; no catalog schema changes; no protected operator routes; no semantic token definition changes; no dependency/package-lock changes; no global redesign; no unrelated page cleanup; no Cloudflare config changes; no direct deployment.
- **Target Files:** `src/pages/CategoryLandingPage.tsx`, `src/pages/HomeSafety.tsx`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/App.tsx`, `src/lib/siteVersion.ts`, `docs/governance/IMPLEMENTATION_CATEGORY_LANDING_001_REMAINING_CATEGORIES_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, and `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Public Home Safety / Environmental Safety category page presentation/routing only.
- **Documentation Updates Required:** Completed.
- **Validation Required:** `git status --short --branch`; `git diff --check`; `git diff --cached --check` if staged; `git diff --name-only`; `git ls-files --deleted`; `npm run build`; source review for category routes; referenced image path check; protected-system changed-file scan; forbidden-claim scan; token/CSS hardcoded color scan.
- **Exit Criteria:** Home Safety category landing page follows CATEGORY002/CATEGORY003 structure with four featured solutions, category-specific WNYHS Core, broader solution catalog, custom solutions CTA, global CTA, governed primitives, version bump, documentation record, and protected systems untouched.
- **Dependencies:** CATEGORY001, CATEGORY002, PAGE_TOKEN_COMPLIANCE_GATE_REV01, DESIGN002 REV02, DESIGN003 REV01, DESIGN001 REV01, and a separate bounded implementation prompt.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Implemented `/home-safety` as the Home Safety / Environmental Safety category landing page in the approved four-category pass. Version bumped to `v1.0.167`. Protected systems remained untouched.

### CATEGORY-LANDING-001-E
- **Task ID:** CATEGORY-LANDING-001-E
- **Task Name:** Home Lighting Category Landing Page
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Prepare a bounded future task to implement only the Home Lighting public category landing page under CATEGORY001 and CATEGORY002 governance.
- **Allowed Scope:** Completed as part of the prompt-approved one-pass implementation for the remaining four category landing pages: created the `/home-lighting` route/component, reused existing WNYHS marketing layout/nav/footer and governed category primitives, bumped visible site version, created an implementation record, updated homepage category-card links, and updated required docs.
- **Forbidden Scope:** No HubSpot; no Stripe/payment; no scheduling; no Resend/email; no APIs/backend; no quote/estimate runtime behavior changes; no package pricing; no catalog schema changes; no protected operator routes; no semantic token definition changes; no dependency/package-lock changes; no global redesign; no unrelated page cleanup; no Cloudflare config changes; no direct deployment.
- **Target Files:** `src/pages/CategoryLandingPage.tsx`, `src/pages/HomeLighting.tsx`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/App.tsx`, `src/lib/siteVersion.ts`, `docs/governance/IMPLEMENTATION_CATEGORY_LANDING_001_REMAINING_CATEGORIES_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, and `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Public Home Lighting category page presentation/routing only.
- **Documentation Updates Required:** Completed.
- **Validation Required:** `git status --short --branch`; `git diff --check`; `git diff --cached --check` if staged; `git diff --name-only`; `git ls-files --deleted`; `npm run build`; source review for category routes; referenced image path check; protected-system changed-file scan; forbidden-claim scan; token/CSS hardcoded color scan.
- **Exit Criteria:** Home Lighting category landing page follows CATEGORY002/CATEGORY003 structure with four featured solutions, category-specific WNYHS Core, broader solution catalog, custom solutions CTA, global CTA, governed primitives, version bump, documentation record, and protected systems untouched.
- **Dependencies:** CATEGORY001, CATEGORY002, PAGE_TOKEN_COMPLIANCE_GATE_REV01, DESIGN002 REV02, DESIGN003 REV01, DESIGN001 REV01, and a separate bounded implementation prompt.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Implemented `/home-lighting` as the Home Lighting category landing page in the approved four-category pass. Version bumped to `v1.0.167`. Protected systems remained untouched.

### QUOTE-SYSTEM-STANDARD-001
- **Task ID:** QUOTE-SYSTEM-STANDARD-001
- **Task Name:** Customer Estimate Packet + Internal SOW Format Standard
- **Status:** DONE
- **Category:** Quote System / Governance Standard
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create repo-owned quote-system standards that formally separate the customer-facing estimate/proposal/acceptance packet from the internal SOW/install-planning packet.
- **Allowed Scope:** Documentation-only creation of customer estimate and internal SOW standards, plus document map, catalog, manifest, and task-register updates.
- **Forbidden Scope:** Runtime UI changes; React/TS/TSX changes; quote/PDF generator code; Quote Preview route changes; Installer Packet route changes; import/export changes; pricing engine implementation; durable storage; HubSpot changes; Stripe/payment changes; scheduling changes; Resend/email changes; lead-signal/requestId changes; catalog schema changes; package data/pricing changes; auth changes; dependencies; package-lock changes; public website changes.
- **Target Files:** `docs/quotesystem/QUOTE_CUSTOMER_ESTIMATE_PACKET_STANDARD_REV01.md`; `docs/quotesystem/QUOTE_INTERNAL_SOW_PACKET_STANDARD_REV01.md`; `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`; `docs/system/master-task-register.md`; `docs/DOCUMENT_CATALOG.md`; `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation-only governance update.
- **Documentation Updates Required:** Customer Estimate Packet standard, Internal SOW Packet standard, quote-system document map, master task register, document catalog, and markdown manifest.
- **Validation Required:** `git diff --check`; markdown formatting sanity check; runtime-file diff scan; forbidden-claim scan in added docs; confirmation that document map, catalog, and manifest were updated.
- **Exit Criteria:** Standards exist; key separation rule is explicit; customer estimate uses the approved customer proposal model; internal SOW preserves technical planning detail; shared-source-data relationship is documented; protected systems are confirmed untouched; validation passes or limitations are documented.
- **Dependencies:** Current quote-system governance documents, catalog governance, protected runtime contract, and prompt-created bounded work order.
- **Operator Decision Required:** No further decision for REV01 docs-only standard creation. Future generator, PDF, route, storage, or runtime implementation requires a new bounded task.
- **Protected Systems Untouched:** HubSpot, Stripe/payment, scheduling, Resend/email, lead-signal/requestId, catalog schema, package data/pricing, auth, dependencies, package-lock, public website, and runtime source files were not changed.
- **Completion Notes:** Completed as a docs/governance-only standardization task. Promoted the rule: Customer-facing estimate = proposal/acceptance packet; Internal SOW = technical planning and fulfillment packet.


### QUOTE-SYSTEM-STANDARD-002
- **Task ID:** QUOTE-SYSTEM-STANDARD-002
- **Task Name:** Align Quote Preview With Customer Estimate Packet Standard
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Align the existing local operator Quote Preview route to the locked Customer Estimate Packet standard so the preview behaves as a customer estimate / proposal / acceptance packet instead of an internal SOW.
- **Allowed Scope:** Update `/operator/property-model/quote-preview`; add small token-governed quote print CSS utilities; create `docs/quotesystem/IMPLEMENTATION017_Customer_Estimate_Preview_Alignment_REV01.md`; update quote-system document map, document catalog, markdown manifest, task register, and visible site version.
- **Forbidden Scope:** No PDF generation, durable storage, HubSpot changes, Stripe/payment changes, scheduling changes, Resend/email changes, lead-signal/requestId changes, support/contact forms, public website pages, catalog schema, package data/pricing, auth, dependencies, package-lock, backend/API changes, upload/image processing, or installer packet rewrite.
- **Target Files:** `src/pages/PropertyModelQuotePreview.tsx`; `src/index.css`; `src/lib/siteVersion.ts`; `docs/quotesystem/IMPLEMENTATION017_Customer_Estimate_Preview_Alignment_REV01.md`; `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`; `docs/system/master-task-register.md`; `docs/DOCUMENT_CATALOG.md`; `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Local operator Quote Preview UI only.
- **Documentation Updates Required:** Completed.
- **Validation Required:** `npm run build`; `npx eslint src/pages/PropertyModelQuotePreview.tsx src/lib/propertyModel.ts --max-warnings 0`; `git diff --check`; `git diff --cached --check`; protected-system changed-file scan; added-line forbidden-claim scan; touched-CSS token review; route smoke review if practical.
- **Exit Criteria:** Quote Preview uses the seven-section Customer Estimate Packet order; proposal/acceptance fields are present; internal/SOW fields are withheld; layout and dashboard placeholders are professional and customer-facing; assumptions/exclusions/warranty are present; localStorage, recordId, browser print, workspace, installer packet, import/export, and Funeral Home Test Case compatibility are preserved; protected systems remain untouched.
- **Dependencies:** Prompt-created bounded work order, current governance authority chain, active customer estimate standard, internal SOW separation standard, quote-system document map, protected runtime contract, canonical catalog source standard, and current local Property Model runtime.
- **Operator Decision Required:** Review and merge PR if accepted. Future PDF, storage, delivery, CRM sync, payment runtime, scheduling runtime, upload, or image work requires separate bounded authorization.
- **Completion Notes:** Completed as a local Quote Preview alignment and documentation update for version `v1.0.154`.


### QUOTE-SYSTEM-STANDARD-003
- **Task ID:** QUOTE-SYSTEM-STANDARD-003
- **Task Name:** Align Installer Packet / Internal SOW Output With Internal SOW Standard
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Align the existing local installer packet route to the locked Internal SOW Packet standard so the route behaves as a technical planning and fulfillment packet rather than a customer estimate packet.
- **Allowed Scope:** Update `/operator/property-model/installer-packet`; create `docs/quotesystem/IMPLEMENTATION018_Internal_SOW_Installer_Packet_Alignment_REV01.md`; update quote-system document map, document catalog, markdown manifest, task register, and visible site version.
- **Forbidden Scope:** No PDF generation, durable storage, HubSpot changes, Stripe/payment changes, scheduling changes, Resend/email changes, lead-signal/requestId changes, support/contact forms, public website pages, catalog schema, package data/pricing, auth, dependencies, package-lock, backend/API changes, upload/image processing, quote preview rewrite, customer delivery/send workflow, inventory/ordering automation, or persistent checklist state.
- **Target Files:** `src/pages/PropertyModelInstallerPacket.tsx`; `src/lib/siteVersion.ts`; `docs/quotesystem/IMPLEMENTATION018_Internal_SOW_Installer_Packet_Alignment_REV01.md`; `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`; `docs/system/master-task-register.md`; `docs/DOCUMENT_CATALOG.md`; `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Local operator Installer Packet UI only.
- **Documentation Updates Required:** Completed.
- **Validation Required:** `npm run build`; `npx eslint src/pages/PropertyModelInstallerPacket.tsx src/lib/propertyModel.ts --max-warnings 0`; `git diff --check`; `git diff --cached --check`; protected-system changed-file scan; added-line forbidden-claim scan; touched-CSS token review if CSS changes; route smoke review if practical.
- **Exit Criteria:** Installer Packet uses the eleven-section Internal SOW structure; internal evidence/redraw/photo-analysis fields are exposed; opening inventory gap is explicit; hardware/BOM reconciliation counts and internal line-item detail are present; access-control/doorbell/dashboard planning notes are present; installer task plan and display-only testing/handoff checklist are preserved; payment/scheduling gate notes are present; localStorage, recordId, browser print, workspace, quote preview, import/export, and Funeral Home Test Case compatibility are preserved; protected systems remain untouched.
- **Dependencies:** Prompt-created bounded work order, current governance authority chain, active internal SOW packet standard, customer estimate separation standard, quote-system document map, protected runtime contract, canonical catalog source standard, and current local Property Model runtime.
- **Operator Decision Required:** Review and merge PR if accepted. Future PDF, storage, delivery, CRM sync, payment runtime, scheduling runtime, upload, image work, inventory automation, ordering automation, or persistent checklist implementation requires separate bounded authorization.
- **Completion Notes:** Completed as a local Installer Packet / Internal SOW alignment and documentation update for version `v1.0.155`.


### T-AUTOMATION001-001
- **Task ID:** T-AUTOMATION001-001
- **Task Name:** Create WNYHS Home Assistant Automation Standard
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only WNYHS automation standard for Home Assistant-based customer solution/package deployments, including the Home Assistant-native default posture, C.A.F.E. evaluation path, and Node-RED/Homey exception rules.
- **Allowed Scope:** Create `docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md`; create `docs/automation-system/` if missing; update `docs/DOCUMENT_CATALOG.md`; add this completed bounded task record to the Master Task Register.
- **Forbidden Scope:** No application source code, routes, customer-facing pages, CSS/design tokens, Stripe/payment logic, HubSpot logic, scheduling logic, estimate/quote runtime logic, environment variables, secrets, package dependencies, build/deployment configuration, existing SafePath implementation files, runtime automations, C.A.F.E. installation, HACS installation, Node-RED installation, Homey installation, customer dashboards, package/catalog behavior, final SafePath hardware standards, or unrelated task-status changes.
- **Target Files:** `docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`.
- **Runtime Systems Affected:** None. Documentation-only automation architecture standard.
- **Documentation Updates Required:** Completed.
- **Validation Required:** `git diff --check`; conflict-marker scan across docs; `npm run build` because root `AGENTS.md` requires build before completion.
- **Exit Criteria:** Automation standard exists at the target path; standard defines purpose, scope, non-scope, WNYHS Core relationship, automation hierarchy, Home Assistant-native first rule, C.A.F.E. evaluation/adoption rule, Node-RED exception rule, Homey exception rule, dashboard/override requirements, customer-install dependency standard, supportability requirements, SafePath reference use case, future solution families, evaluation checklist, forbidden patterns, and promotion/implementation rule; C.A.F.E. is documented as an evaluation/preferred visual authoring candidate rather than an installed or required dependency; Node-RED and Homey are exception-path tools; protected runtime systems remain untouched.
- **Dependencies:** Prompt-created bounded docs-only work order, current governance authority chain, `docs/system/step-current.md`, `docs/system/master-task-register.md`, and `docs/DOCUMENT_CATALOG.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added the REV01 Home Assistant automation standard as docs-only governance and registered it in the document catalog and this task register. HubSpot, Stripe/payment, scheduling, quote/estimate runtime, routes, customer-facing pages, CSS/design tokens, dependencies, build/deployment config, environment variables, secrets, runtime automations, dashboards, package/catalog behavior, and SafePath implementation files were not changed.



### QUOTESYSTEM-017
- **Task ID:** QUOTESYSTEM-017
- **Task Name:** Quote Workspace Workflow Alignment
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only workflow-alignment record that maps the current internal Quote Workspace / Property Model UI to `docs/quotesystem/WNYHS_Quote_Workspace_Operator_Playbook_REV01.md` and identifies future bounded implementation gaps.
- **Allowed Scope:** Add `docs/quotesystem/QUOTESYSTEM017_Quote_Workspace_Workflow_Alignment_REV01.md`; update `docs/DOCUMENT_CATALOG.md`; update `docs/MARKDOWN_MANIFEST.md`; add/update one completed Master Task Register entry; review existing quote/property workspace source files only as needed to document current UI state.
- **Forbidden Scope:** No app/source code changes; no route changes; no CSS changes; no quote runtime behavior changes; no HubSpot changes; no Stripe/payment changes; no scheduling changes; no storage, upload, export, PDF, or email behavior; no customer-facing public page changes; no implementation task creation beyond documenting future recommendations; no `package.json`, `package-lock.json`, environment variable, or Cloudflare config changes.
- **Target Files:** `docs/quotesystem/QUOTESYSTEM017_Quote_Workspace_Workflow_Alignment_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only workflow alignment.
- **Documentation Updates Required:** Completed.
- **Validation Required:** `npm run build`; `git diff --check`; `git diff --cached --check`; confirm changed files are docs-only; confirm no `src/`, `functions/`, `api/`, `server/`, `package.json`, `package-lock.json`, `public/_redirects`, or Cloudflare config files changed.
- **Exit Criteria:** Alignment document exists at the required path; current routes/source files reviewed are documented; current workflow sections found are documented; playbook-phase mapping table is documented; minimum future UI sequence is documented; dashboard preview mandatory note is documented; floorplan baseline locked or rough/limited-evidence note is documented; future bounded recommendations are documented without implementation; protected systems remain untouched.
- **Dependencies:** Prompt-created bounded QUOTESYSTEM-017 docs-only work order, current governance authority chain, `docs/system/step-current.md`, Active Tasks review in this register, and `docs/quotesystem/WNYHS_Quote_Workspace_Operator_Playbook_REV01.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added the QUOTESYSTEM-017 docs-only workflow alignment record and catalog/manifest/register updates. Reviewed `/operator/property-model`, `/operator/property-model/quote-preview`, `/operator/property-model/installer-packet`, route registration, and local Property Model shape only as needed for documentation. HubSpot, Stripe/payment, scheduling, quote runtime behavior, routes, CSS, app/source code, public pages, storage, uploads, exports, PDFs, email behavior, package files, environment variables, and Cloudflare config were not changed.


### CREATE-ESTIMATE-MANUAL-REV02
- **Task ID:** CREATE-ESTIMATE-MANUAL-REV02
- **Task Name:** Create Estimate Instruction Manual REV02
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a new full REV02 internal Create Estimate instruction manual that preserves the REV01 customer-discovery-to-deposit-ready-quote purpose while embedding the mandatory REV08 floorplan workflow as quote-prep procedure.
- **Allowed Scope:** Visible site version bump; new REV02 Markdown manual source; controlled floorplan evidence gate before GPT analysis; minimum evidence package; two-pass reconstruction; SVG/vector baseline workflow; lock statuses; Step 6 and Step 7 updates; field definitions; review/lock rules; customer quote Section 1 output requirements; quality checklist; Appendix A GPT prompt; document catalog and markdown manifest updates; completed task record.
- **Forbidden Scope:** No quote runtime code, HubSpot changes, Stripe/payment changes, scheduling changes, support/contact form changes, catalog schema changes, package pricing/data changes, auth changes, durable storage changes, dependency or package-lock changes, image processing, AI redraw generation, uploads, LiDAR capture, computer vision, or sensitive customer details.
- **Target Files:** `src/lib/siteVersion.ts`, `docs/quotesystem/WNYHS_Create_Estimate_Instruction_Manual_REV02.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation/manual and visible version only.
- **Documentation Updates Required:** Completed.
- **Validation Required:** `npm run build`; `git diff --check`; `git diff --cached --check`; confirm protected runtime files unchanged; confirm REV01 was not overwritten; confirm REV02 Markdown exists as a new full document version; confirm no DOCX file remains staged or tracked in this PR.
- **Exit Criteria:** Version is bumped to `v1.0.151`; REV02 exists as a new full document version; REV08 workflow is mandatory in quote prep; evidence gate, two-pass reconstruction, SVG/vector workflow, exact lock statuses, customer output requirements, quality checklist, and Appendix A GPT prompt are updated; protected systems remain untouched; REV01 is preserved.
- **Dependencies:** Prompt-created bounded governance work order, current governance authority chain, `docs/system/step-current.md`, and `docs/quotesystem/FLOORPLAN_QUOTE_WORKFLOW_GOVERNANCE_REV01.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added the REV02 Create Estimate instruction manual as repo-tracked Markdown source only. DOCX/PDF exports should be generated outside the repo or attached separately when needed. HubSpot, Stripe/payment, scheduling, support/contact forms, catalog schema, package pricing/data, auth, durable storage, dependencies, package-lock, and quote runtime code were not changed.

### FLOORPLAN-QUOTE-GOV-001
- **Task ID:** FLOORPLAN-QUOTE-GOV-001
- **Task Name:** Floorplan Quote Workflow Governance
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Formalize the docs-only quote-floorplan workflow proven by the generic funeral-home test case so future WNYHS quotes expect controlled editable vector floorplan geometry rather than authoritative AI image redraw output.
- **Allowed Scope:** Visible site version bump; new quote-system governance document for evidence collection, two-pass reconstruction, vector floorplan workflow, approval gates, locked baseline status language, and generic funeral-home artifact reference; document catalog, markdown manifest, and task-register updates.
- **Forbidden Scope:** No runtime quote-system code, HubSpot changes, Stripe/payment changes, scheduling changes, support/contact form changes, catalog schema changes, package pricing/data changes, auth changes, durable storage changes, dependency or package-lock changes, image processing, AI redraw generation, uploads, LiDAR capture, computer vision, or customer-sensitive funeral-home details beyond the generic artifact reference.
- **Target Files:** `src/lib/siteVersion.ts`, `docs/quotesystem/FLOORPLAN_QUOTE_WORKFLOW_GOVERNANCE_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation/governance and visible version only.
- **Documentation Updates Required:** Completed.
- **Validation Required:** `npm run build`; `git diff --check`; `git diff --cached --check`; changed-file scope confirmation; protected runtime changed-file scan.
- **Exit Criteria:** Version is bumped to `v1.0.150`; vector floorplan workflow, two-pass reconstruction model, approval gates, exact locked baseline statuses, and `FLOORPLAN REV08 — Frozen First Floor Geometry Baseline` reference are documented; protected systems remain untouched; no quote runtime implementation is added.
- **Dependencies:** Prompt-created bounded governance work order, current governance authority chain, `docs/system/step-current.md`, and existing quote-system/funeral-home test-case lineage.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added docs-only floorplan quote workflow governance and registered it in catalog, manifest, and this task register. HubSpot, Stripe/payment, scheduling, support/contact forms, catalog schema, package pricing/data, auth, durable storage, dependencies, package-lock, and runtime quote-system code were not changed. No AI image-redraw workflow was made authoritative.

### HOTFIX-WNYHS-APEX-HOSTNAME-001
- **Task ID:** HOTFIX-WNYHS-APEX-HOSTNAME-001
- **Task Name:** Apex Hostname Rendering Failure Investigation
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Investigate and minimally fix apex hostname blank/black production behavior while preserving the known-good www host.
- **Allowed Scope:** Hostname/domain routing inspection, minimal Cloudflare Pages redirect correction, implementation record, catalog/manifest/register updates, and visible site version bump.
- **Forbidden Scope:** No visual redesign, visual parity work, quote-system changes, contact/support behavior changes, package data/pricing changes, HubSpot changes, Stripe/payment changes, scheduling changes, lead-signal/requestId changes, Resend/email changes, auth changes, durable storage changes, dependencies, package-lock changes, or unrelated cleanup.
- **Target Files:** `public/_redirects`, `src/lib/siteVersion.ts`, `docs/governance/HOTFIX_WNYHS_APEX_HOSTNAME_001_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Public hostname normalization at Cloudflare Pages redirect layer only.
- **Documentation Updates Required:** Completed.
- **Validation Required:** `npm run build`; targeted typecheck via build; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; route/domain logic grep summary; local Host-header preview checks when practical.
- **Exit Criteria:** Version is bumped to `v1.0.147`; apex requests redirect to the known-good www host with path preserved; www routes remain working; protected systems remain untouched.
- **Dependencies:** Prompt-created bounded hotfix work order, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added a Cloudflare Pages apex-to-www canonical redirect before the SPA fallback. Source inspection found no exact apex-vs-www frontend branch; the redirect removes the production host split while preserving path and query behavior. HubSpot, Stripe/payment, scheduling, lead-signal/requestId, Resend/email, package data/pricing, dependencies, and package-lock were not changed.


### WNYHS-PUBLIC-MARKETING-VISUAL-PARITY-003
- **Task ID:** WNYHS-PUBLIC-MARKETING-VISUAL-PARITY-003
- **Task Name:** Contact + Support Wrapper Cleanup
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Bring Contact and Support page wrappers into visual alignment with the WNYHS public marketing token system while preserving form, API, requestId, and protected runtime behavior.
- **Allowed Scope:** Contact and Support visible wrapper/page-shell cleanup, token-backed page utilities, implementation note, catalog, manifest, task register, and site-version updates.
- **Forbidden Scope:** No form behavior changes, payload/schema changes, API changes, HubSpot changes, lead-signal/requestId changes, Resend/email changes, Stripe/payment changes, scheduling changes, quote-system changes, catalog schema changes, package data/pricing changes, auth changes, durable storage changes, new dependencies, package-lock changes, unrelated redesign, FAQ/Funding/Legal cleanup, or protected operator flow changes.
- **Target Files:** `src/pages/Contact.tsx`, `src/pages/Support.tsx`, `src/styles/wnyhsVisualGovernance.css`, `src/lib/siteVersion.ts`, `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_MARKETING_VISUAL_PARITY_003_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Public Contact and Support page visual wrappers only.
- **Documentation Updates Required:** Create implementation record and register it in document catalog, markdown manifest, and task register.
- **Validation Required:** `npm run build`; targeted lint/typecheck for touched runtime files; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; token/CSS hardcoded color scan for touched styling; route smoke check if practical for `/contact?vertical=home-security` and `/support?vertical=home-security`.
- **Exit Criteria:** Version is bumped to `v1.0.145`; Contact and Support wrappers use WNYHS public visual primitives; forms and API behavior are preserved; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** Current governance authority chain, `docs/system/step-current.md`, visual parity implementation records 001 and 002, and WNYHS visual/solution/catalog standards.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Contact and Support visible shells now use token-backed WNYHS page, shell, section, card, action, and button primitives. Estimate form and support form behavior, payloads, APIs, request ID/lead-signal boundaries, HubSpot, Stripe/payment, scheduling, Resend/email runtime, quote system, package data, and catalog schema were not changed.


### WNYHS-PUBLIC-MARKETING-VISUAL-PARITY-004
- **Task ID:** WNYHS-PUBLIC-MARKETING-VISUAL-PARITY-004
- **Task Name:** Fit Check Visual Parity
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Bring the WNYHS Fit Check page into visual alignment with the WNYHS public marketing token system while preserving all Fit Check questions, logic, result behavior, routes, query parameters, and navigation destinations.
- **Allowed Scope:** Fit Check visible wrapper/page-shell cleanup, token-backed Fit Check utilities, implementation note, catalog, manifest, task register, and site-version updates.
- **Forbidden Scope:** No Fit Check logic changes, question/result data changes, top-nav destination changes, footer destination changes, quote-system changes, catalog schema changes, package data/pricing changes, HubSpot changes, Stripe/payment changes, scheduling changes, lead-signal/requestId changes, Resend/email changes, support/contact form behavior changes, auth changes, durable storage changes, dependencies, package-lock changes, unrelated redesign, or protected operator flow changes.
- **Target Files:** `src/components/FitCheck.tsx`, `src/pages/Discovery.tsx`, `src/styles/wnyhsVisualGovernance.css`, `src/lib/siteVersion.ts`, `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_MARKETING_VISUAL_PARITY_004_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Public Fit Check visual wrappers only.
- **Documentation Updates Required:** Create implementation record and register it in document catalog, markdown manifest, and task register.
- **Validation Required:** `npm run build`; targeted lint/typecheck for touched runtime files; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; token/CSS hardcoded color scan for touched styling; route smoke check if practical for `/fit-check?vertical=home-security` and `/home-security`.
- **Exit Criteria:** Version is bumped to `v1.0.146`; Fit Check uses WNYHS public visual primitives; Fit Check behavior is preserved; top nav/footer destinations are unchanged; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** Current governance authority chain, `docs/system/step-current.md`, visual parity implementation records 001 through 003, and WNYHS visual/solution/catalog standards.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Fit Check visible wrapper, questions, actions, results, answer snapshot, and estimate CTA now use token-backed WNYHS public primitives and Fit Check-specific visual utilities. Questions, options, scoring/recommendation logic, result behavior, query parameters, routes, CTA destinations, top navigation destinations, footer destinations, HubSpot, Stripe/payment, scheduling, lead-signal/requestId, Resend/email runtime, quote system, package data, and catalog schema were not changed.



### WNYHS-PUBLIC-VISUAL-QA-001
- **Task ID:** WNYHS-PUBLIC-VISUAL-QA-001
- **Task Name:** Public Text Contrast and Readability Audit
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Fix known public-site legibility and formatting issues caused by incorrect semantic token/class usage or incorrect token application, without redesigning public pages.
- **Allowed Scope:** Public nav/footer destination visual QA corrections; existing WNYHS semantic classes/tokens; token-backed utility classes where needed; footer visual-mass review; Privacy/Terms readability cleanup; implementation record, catalog, manifest, task register, and visible site-version bump.
- **Forbidden Scope:** No redesign, nav/footer destination changes, route changes, Fit Check logic/question/result changes, Contact/Estimate form behavior changes, Support form behavior changes, API changes, HubSpot changes, lead-signal/requestId changes, Resend/email changes, Stripe/payment changes, scheduling changes, quote-system changes, catalog schema changes, package data/pricing changes, auth changes, durable storage changes, new dependencies, package-lock changes, unrelated cleanup, operator/property-model, quote preview, installer packet, or import/export flow changes.
- **Target Files:** `src/styles/wnyhsVisualGovernance.css`, `src/components/FitCheck.tsx`, `src/pages/Discovery.tsx`, `src/pages/Packages.tsx`, `src/pages/Privacy.tsx`, `src/pages/Terms.tsx`, `src/lib/siteVersion.ts`, `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_VISUAL_QA_001_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Public visual class/token usage only.
- **Documentation Updates Required:** Completed.
- **Validation Required:** `npm run build`; targeted lint/typecheck for touched runtime files; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; nav/footer destination diff check; token/CSS hardcoded color scan for touched styling; route smoke/source inspection for scoped public destinations.
- **Exit Criteria:** Version is bumped to `v1.0.148`; public nav/footer destinations remain readable with WNYHS public tokens/classes; nav/footer destinations are preserved; forms and protected runtime systems remain untouched; PR targets current branch without merge.
- **Dependencies:** Prompt-created bounded public visual QA work order, current governance authority chain, `docs/system/step-current.md`, visual system standard, solution page standard, and visual parity implementation records 001 through 004.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Corrected Solutions listing hero/supporting text, estimate intake heading/form-choice readability within the Contact wrapper, embedded Fit Check wrapper background alignment, and Privacy/Terms legal-page readability through WNYHS semantic class/token usage. Our Work, Support, About, and homepage destinations were inspected; no behavior or destination changes were made. HubSpot, Stripe/payment, lead-signal/requestId, Resend/email, scheduling, package data/pricing, quote-system, dependencies, and package-lock files were not changed.



### WNYHS-PUBLIC-FOOTER-NAV-001
- **Task ID:** WNYHS-PUBLIC-FOOTER-NAV-001
- **Task Name:** Public Footer Navigation Cleanup
- **Status:** DONE
- **Category:** public site footer/navigation cleanup
- **Controlling Context:** post WNYHS-PUBLIC-VISUAL-QA-001 production review under CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Remove unintended footer nav links so the public footer displays only the approved About, Contact, Privacy, Terms, and Support links.
- **Allowed Scope:** Remove footer-only links outside the approved set; preserve existing hrefs/routes/query behavior for About, Contact, Privacy, Terms, and Support; preserve footer brand/local/service-area/operated-by text, visible version display, and footer visual treatment; bump visible site version to `v1.0.149`; create an implementation record; update catalog/manifest/register documentation only as required.
- **Forbidden Scope:** No top navigation changes, `public/_redirects` changes, Cloudflare/Wrangler/deployment-setting changes, HubSpot changes, Stripe/payment changes, scheduling changes, Resend/email changes, requestId changes, lead-signal changes, support/contact form behavior changes, quote-system runtime changes, catalog schema changes, package pricing/data changes, auth changes, durable storage changes, dependency changes, `package.json` or `package-lock` changes, footer redesign, marketing-copy rewrite, new footer links, semantic-token value changes, hardcoded colors, or unsupported public claims.
- **Target Files:** `src/components/homeSecurity/WnyhsSiteFooter.tsx`, `src/lib/siteVersion.ts`, `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_FOOTER_NAV_001_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Public footer link rendering only.
- **Documentation Updates Required:** Add this bounded task entry; create implementation record; update document catalog and markdown manifest addendum for the new implementation record.
- **Validation Required:** `npm run build`; focused ESLint for `src/components/homeSecurity/WnyhsSiteFooter.tsx`; `git diff --check`; protected-scope changed-file scan; added-line forbidden-claim scan; top-nav diff confirmation; redirects diff confirmation; final diff confirmation that retained and removed footer links match the work order.
- **Exit Criteria:** Footer nav contains only About, Contact, Privacy, Terms, and Support with existing destinations preserved; Home, Explore, Packages, Solutions, Why WNYHS, How It Works, and Search are removed from the footer; visible version is `v1.0.149`; top nav and redirects are unchanged; protected systems remain untouched; validation passes; PR targets current branch without merge.
- **Dependencies:** Prompt-created bounded work order, current governance authority chain, `docs/system/step-current.md`, WNYHS visual system standard, and header/footer standard.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Public footer navigation was reduced to the approved five-link set while preserving destinations for About, Contact, Privacy, Terms, and Support. Footer copy, footer visual treatment, top navigation, redirects, HubSpot, Stripe/payment, scheduling, lead-signal/requestId, Resend/email, support/contact form behavior, quote-system runtime, catalog schema, package data/pricing, dependencies, and package-lock were not changed.

This section is the dispatch board for executable registered tasks. Codex may execute a registered task only when it appears here with `Status: ACTIVE`; prompt-created work orders remain executable only when explicitly bounded and permitted by higher-authority governance.


### QUOTESYSTEM-011
- **Task ID:** QUOTESYSTEM-011
- **Task Name:** Local Import / Export
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add local JSON import/export capability for WNYHS Quote Workspace Property Model records so live quote work is not trapped in browser localStorage.
- **Allowed Scope:** Local browser JSON import/export for `/operator/property-model`; single-record export; full local collection export; local file import; minimal validation; normalization through existing Property Model normalization; collision-safe import as copy; implementation note, document map, catalog, manifest, task register, and site-version updates.
- **Forbidden Scope:** No cloud storage, durable backend persistence, HubSpot sync or writes, email sending, PDF generation, auth, payment, inventory, ordering, scheduling automation, new dependencies, package-lock changes, protected runtime changes, unrelated public redesign, or funnel routing changes.
- **Target Files:** `src/lib/siteVersion.ts`, `src/lib/propertyModel.ts`, `src/pages/PropertyModelAdmin.tsx`, `src/index.css`, `docs/quotesystem/IMPLEMENTATION011_Local_Import_Export_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Internal operator Property Model route and local browser storage only.
- **Documentation Updates Required:** Add implementation note and register it in quote-system map, document catalog, markdown manifest, and task register.
- **Validation Required:** `npm run build`; targeted lint/typecheck for touched runtime files; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; token/CSS hardcoded color scan for touched styling; route smoke check for `/operator/property-model`, `/operator/property-model/quote-preview`, and `/operator/property-model/installer-packet`.
- **Exit Criteria:** Version is bumped to `v1.0.137`; local current-record export exists; local all-records export exists; local JSON import validates minimally and normalizes before saving; ID collisions import as new local copies; visible guidance is added; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** QUOTESYSTEM-004 through QUOTESYSTEM-010, PROPERTY001, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added local JSON import/export to the internal Property Model workspace. Current-record export and all-record backup produce local downloads with metadata envelopes. Import accepts local JSON, validates minimal record shape, normalizes records, and creates new local copies for ID collisions instead of replacing existing records. Added operator guidance about sensitive local backup files. No HubSpot, Stripe/payment, cloud storage, durable backend persistence, email, PDF, auth, inventory, ordering, scheduling, dependency, package-lock, or unrelated public-site changes were made.

### QUOTESYSTEM-001
- **Task ID:** QUOTESYSTEM-001
- **Task Name:** Create Initial Quote System Governance Folder And Document Set
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the initial `/docs/quotesystem/` governance folder and document set, with floorplan capture and professional redraw as the first fully developed topic and the remaining quote-system areas represented as clear placeholders for future controlled passes.
- **Allowed Scope:** Docs-only governance setup; create `docs/quotesystem/`; create the quote-system governance standards and placeholders; update `docs/DOCUMENT_CATALOG.md`; update this task register.
- **Forbidden Scope:** No app code, routes, UI changes, pricing engine, quote generator implementation, Home Assistant dashboard generator implementation, Stripe changes, HubSpot changes, scheduling changes, payment flow changes, runtime environment changes, source files, assets, dependencies, package-lock, public pricing, or customer-facing deployment.
- **Target Files:** `docs/quotesystem/README.md`, `docs/quotesystem/QUOTE_SYSTEM_GOALS_REV01.md`, `docs/quotesystem/FLOORPLAN000_Field_Capture_Standard_REV01.md`, `docs/quotesystem/FLOORPLAN001_Professional_Redraw_Reconstruction_Standard_REV01.md`, `docs/quotesystem/FLOORPLAN002_Property_Photo_Validation_Standard_REV01.md`, `docs/quotesystem/SOLUTION_PLACEMENT001_Hardware_Placement_Standard_REV01.md`, `docs/quotesystem/HARDWARE001_HA_COMPATIBILITY_AND_BOM_STANDARD_REV01.md`, `docs/quotesystem/FEATURES001_CUSTOMER_CAPABILITY_MAPPING_STANDARD_REV01.md`, `docs/quotesystem/QUOTE001_CUSTOMER_PROPOSAL_STRUCTURE_REV01.md`, `docs/quotesystem/DASHBOARD_PREP001_HA_DASHBOARD_REQUIREMENTS_STANDARD_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Create the quote-system governance document set, register the documents in the document catalog, and record QUOTESYSTEM-001 as DONE after validation.
- **Validation Required:** Confirm all quote-system files exist; confirm markdown headings render/read cleanly; `git status`; `git diff --stat`; `git diff --check`; confirm only documentation files changed; targeted grep for quote-system required terms; forbidden-claim grep on touched quote-system docs; `npm run build` per repository execution rules.
- **Exit Criteria:** `/docs/quotesystem/` exists; all required quote-system documents exist; document map lists every created quote-system document with maturity; floorplan capture and redraw standards are developed; placeholder standards identify future controlled expansion; document catalog is updated; this task is recorded as DONE; no app/runtime/payment/HubSpot/scheduling systems are touched; validation passes or unrelated baseline failures are documented; PR targets `main` without merge.
- **Dependencies:** Current governance authority chain, `docs/system/step-current.md`, `docs/system/master-task-register.md`, `docs/solution-system/PACKAGEBOM001_WNYHS_PACKAGE_MAP_AND_BOM_PRICING_INPUT_SCHEMA_REV01.md`, and `docs/catalogs/wnyhs_capability_catalog_rev03.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created the initial quote-system governance folder and document set. Floorplan field capture and professional redraw standards are active; property photo validation, hardware placement, Home Assistant compatibility/BOM, customer capability mapping, customer proposal structure, and dashboard-prep standards are placeholders for future controlled passes. No app code, runtime behavior, payment flow, HubSpot logic, scheduling behavior, assets, dependencies, or package-lock files were changed.

### QUOTESYSTEM-002
- **Task ID:** QUOTESYSTEM-002
- **Task Name:** Floorplan Redraw Fidelity Calibration
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Refine floorplan reconstruction standards and add redraw fidelity calibration so the first usable quote-system task is clearly defined: producing a professional-looking replica from a customer/operator sketch plus reference photos while preserving original layout fidelity.
- **Allowed Scope:** Docs-only governance; expand floorplan capture/redraw/photo validation standards; add explicit symbol interpretation, acceptance/rejection, and source-photo validation rules; create `FLOORPLAN003_Redraw_Fidelity_Calibration_REV01.md`; update the quote-system document map; update the document catalog; update this task register.
- **Forbidden Scope:** No application code, quote generator implementation, image-generation implementation, floorplan rendering tool implementation, camera placement implementation, sensor placement implementation, BOM/pricing implementation, Home Assistant dashboard generator implementation, UI, routes, assets, dependencies, package-lock, Stripe/payment changes, HubSpot changes, scheduling changes, runtime environment changes, or customer-facing deployment.
- **Target Files:** `docs/quotesystem/FLOORPLAN000_Field_Capture_Standard_REV01.md`, `docs/quotesystem/FLOORPLAN001_Professional_Redraw_Reconstruction_Standard_REV01.md`, `docs/quotesystem/FLOORPLAN002_Property_Photo_Validation_Standard_REV01.md`, `docs/quotesystem/FLOORPLAN003_Redraw_Fidelity_Calibration_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Refine the floorplan standards, add the redraw fidelity calibration standard, update the quote-system document map, add the catalog entry, and record QUOTESYSTEM-002 as DONE after validation.
- **Validation Required:** Confirm all target files exist; confirm markdown headings/readability; `git status`; `git diff --stat`; `git diff --check`; confirm only documentation files changed; targeted grep for required fidelity, overlay, symbol, photo-validation, and downstream-gate terms; `npm run build`.
- **Exit Criteria:** FLOORPLAN000 reinforces sketch primacy, orientation, photo capture, symbols, door/opening width, and ambiguity rules; FLOORPLAN001 reinforces professional replica, preservation, no-inference/no-normalization, overlay validation, and rejection rules; FLOORPLAN002 is refined as an active photo validation standard; FLOORPLAN003 exists with calibration inputs, outputs, overlay test, acceptance/rejection criteria, funeral-home pilot notes, and downstream gate; catalog and document map are updated; no app/runtime/payment/HubSpot/scheduling systems are touched; validation passes; PR targets `main` without merge.
- **Dependencies:** QUOTESYSTEM-001, current governance authority chain, `docs/system/step-current.md`, `docs/system/master-task-register.md`, and quote-system floorplan standards.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Refined the quote-system floorplan field capture, redraw, and photo validation standards; added `FLOORPLAN003_Redraw_Fidelity_Calibration_REV01.md`; updated the quote-system document map and document catalog. No app code, runtime behavior, payment flow, HubSpot logic, scheduling behavior, UI/routes/assets/dependencies, package-lock, quote generator, image generation, floorplan rendering tool, camera/sensor placement, BOM/pricing, or Home Assistant dashboard generator implementation was changed.

### QUOTESYSTEM-003
- **Task ID:** QUOTESYSTEM-003
- **Task Name:** Property Model + Operational Gates Architecture
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create docs-only quote-system governance defining the WNYHS Property Model as the central operational record connecting floorplan, photos, customer goals, solution placement, BOM, inventory, payment gates, scheduling gates, installer packets, and Home Assistant dashboard prep.
- **Allowed Scope:** Docs-only governance; create Property Model, quote-to-install gates, inventory readiness, and installer packet standards; update related quote-system docs with references; update the quote-system document map, document catalog, and this task register.
- **Forbidden Scope:** No app code, routes, UI, pricing engine, quote generator implementation, inventory implementation, dashboard generator implementation, Stripe/payment implementation, HubSpot implementation, scheduling implementation, runtime/environment changes, assets, dependencies, package-lock, or customer-facing deployment.
- **Target Files:** `docs/quotesystem/PROPERTY001_Property_Model_Architecture_REV01.md`, `docs/quotesystem/GATES001_Quote_To_Install_Operational_Gates_REV01.md`, `docs/quotesystem/INVENTORY001_Quote_System_Inventory_Readiness_REV01.md`, `docs/quotesystem/INSTALLER001_Installer_Packet_Standard_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_GOALS_REV01.md`, `docs/quotesystem/HARDWARE001_HA_COMPATIBILITY_AND_BOM_STANDARD_REV01.md`, `docs/quotesystem/QUOTE001_CUSTOMER_PROPOSAL_STRUCTURE_REV01.md`, `docs/quotesystem/DASHBOARD_PREP001_HA_DASHBOARD_REQUIREMENTS_STANDARD_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Create the four new quote-system governance standards, update related quote-system docs with references, add document-map entries, add catalog entries, and record QUOTESYSTEM-003 as DONE after validation.
- **Validation Required:** Confirm all target files exist; confirm markdown headings/readability; `git status`; `git diff --stat`; `git diff --check`; confirm only documentation files changed; targeted grep for Property Model, operational gates, inventory readiness, installer packet, payment method, and protected-boundary terms; forbidden-claim scan; `npm run build`.
- **Exit Criteria:** PROPERTY001 defines the central Property Model record and solution-first chain; GATES001 defines deposit, scheduling, inventory-purchase, final-payment, payment-method, and compliance gates; INVENTORY001 defines inventory readiness philosophy and buffer rules; INSTALLER001 defines installer packet contents, ownership, onsite window, and warehouse departure gate; related docs reference the new standards without implementation; no app/runtime/payment/HubSpot/scheduling systems are touched; validation passes; PR targets `main` without merge.
- **Dependencies:** QUOTESYSTEM-001, QUOTESYSTEM-002, current governance authority chain, `docs/system/step-current.md`, and quote-system floorplan standards.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created Property Model, operational gates, inventory readiness, and installer packet governance standards; updated quote-system goals, hardware/BOM, customer proposal, dashboard prep, document map, and document catalog. No app code, runtime behavior, payment flow, Stripe implementation, HubSpot logic, scheduling behavior, UI/routes/assets/dependencies, package-lock, quote generator, inventory system, or dashboard generator implementation was changed.

### QUOTESYSTEM-004
- **Task ID:** QUOTESYSTEM-004
- **Task Name:** Property Model Storage + Admin Intake Skeleton
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement the first bounded internal Property Model storage and operator intake/edit skeleton for quote-system records.
- **Allowed Scope:** Create a practical Property Model record type, local browser-storage adapter, and operator-only intake/edit route; update related quote-system documentation and this task register; bump the visible app version.
- **Forbidden Scope:** No public quote generation, pricing engine, customer quote builder, Stripe/payment implementation, HubSpot implementation, Google Calendar scheduling writes, inventory automation, installer packet generator, Home Assistant dashboard generator, new dependencies, package-lock changes, production secrets/env changes, unrelated UI/routes/assets, or unrelated marketing changes.
- **Target Files:** `src/lib/siteVersion.ts`, `src/lib/propertyModel.ts`, `src/pages/PropertyModelAdmin.tsx`, `src/App.tsx`, `src/pages/Operator.tsx`, `docs/quotesystem/IMPLEMENTATION004_Property_Model_Storage_Admin_Intake_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_GOALS_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`.
- **Runtime Systems Affected:** Internal operator route and local browser storage only.
- **Documentation Updates Required:** Add the QUOTESYSTEM-004 implementation note, update quote-system goals/status and document map, update the document catalog, and record this task as DONE.
- **Validation Required:** Confirm all target files exist; confirm markdown headings/readability; `git diff --check`; forbidden-claim scan on introduced changes; confirm only allowed files changed; run `npm run build`; run available lint/typecheck/test commands and document any unrelated baseline failures.
- **Exit Criteria:** Version is bumped to `v1.0.128`; Property Model schema includes record/request ID, customer/contact basics, property address basics, property context, concerns/situations, solution categories, areas/zones placeholder, devices/hardware placeholder, quote stage, operational gate placeholders, notes, and timestamps; operator route can create/edit/save records in local browser storage; docs record partial implementation and storage limitation; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** QUOTESYSTEM-001, QUOTESYSTEM-002, QUOTESYSTEM-003, current governance authority chain, `docs/system/step-current.md`, and the quote-system Property Model/gates/inventory/installer standards.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added the first bounded Property Model storage/admin intake skeleton under `/operator/property-model` using local browser storage. No public quote generation, pricing engine, payment processing, Stripe implementation, HubSpot implementation, scheduling writes, inventory automation, installer packet generator, Home Assistant dashboard generator, new dependencies, package-lock changes, or unrelated public marketing redesign was introduced.

### QUOTESYSTEM-005
- **Task ID:** QUOTESYSTEM-005
- **Task Name:** Draft Quote Workspace
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Extend the internal `/operator/property-model` prototype into a local draft quote workspace for customer goals, WNYHS solutions, hardware/BOM line items, and draft quote structure preview.
- **Allowed Scope:** Add local prototype quote workspace fields and UI to `/operator/property-model`; preserve localStorage-only persistence; add the QUOTESYSTEM-005 implementation note; update quote-system document map, document catalog, master task register, and visible site version.
- **Forbidden Scope:** No HubSpot writes, Stripe/payment implementation, inventory automation, scheduling automation, quote PDF generation, email sending, new dependencies, authentication system, public customer quote builder, production persistence, or protected-system changes.
- **Target Files:** `src/lib/siteVersion.ts`, `src/lib/propertyModel.ts`, `src/pages/PropertyModelAdmin.tsx`, `docs/quotesystem/IMPLEMENTATION005_Draft_Quote_Workspace_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`.
- **Runtime Systems Affected:** Internal operator route and local browser storage only.
- **Documentation Updates Required:** Add the QUOTESYSTEM-005 implementation note, update the quote-system document map, add the document catalog entry, and record this task as DONE.
- **Validation Required:** `npm run build`; targeted lint/typecheck when available; `git diff --check`; confirm protected systems untouched.
- **Exit Criteria:** Version is bumped to `v1.0.129`; `/operator/property-model` supports customer goals, WNYHS solutions, hardware/BOM line items with required fields, and visible draft quote sections; persistence remains localStorage-only; no protected systems are touched; PR targets `main` without merge.
- **Dependencies:** QUOTESYSTEM-004, PROPERTY001, GATES001, QUOTE001, HARDWARE001, FEATURES001, DASHBOARD_PREP001, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Extended the internal Property Model prototype into a draft quote workspace using local browser storage. No HubSpot writes, Stripe/payment implementation, inventory automation, scheduling automation, quote PDF generation, email sending, new dependencies, authentication system, public customer quote builder, production persistence, installer packet generator, or Home Assistant dashboard generator was introduced.

### QUOTESYSTEM-006
- **Task ID:** QUOTESYSTEM-006
- **Task Name:** Quote Workspace Structure + WNYHS Styling Refactor
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Refactor `/operator/property-model` from a generic prototype form into a WNY Home Security quote workspace aligned with HubSpot CRM authority, source solution/category/package data, WNYHS terminology, Property Model governance, quote gates, and WNYHS visual/token CSS standards.
- **Allowed Scope:** Internal operator route refactor for `/operator/property-model`; update local Property Model types and localStorage normalization; add controlled dropdowns for property type, occupancy context, quote stage, source-backed WNYHS categories/solutions/packages, customer concerns, property rooms/areas to cover, Draft Hardware / BOM status, and draft quote preview; add token-based workspace styling; add the QUOTESYSTEM-006 implementation note; update quote-system document map, document catalog, markdown manifest addendum, master task register, and visible site version.
- **Forbidden Scope:** No HubSpot writes, HubSpot schema/properties/pipeline changes, Stripe/payment implementation, inventory automation, scheduling automation, quote PDF generation, email sending, authentication system, new dependencies, package-lock changes, unrelated public site redesign, protected runtime behavior changes, or customer-facing quote automation.
- **Target Files:** `src/lib/siteVersion.ts`, `src/lib/propertyModel.ts`, `src/pages/PropertyModelAdmin.tsx`, `src/index.css`, `docs/quotesystem/IMPLEMENTATION006_Quote_Workspace_Structure_Styling_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Internal operator route and local browser storage only.
- **Documentation Updates Required:** Add the QUOTESYSTEM-006 implementation note, update quote-system document map, add the document catalog entry, add the markdown manifest addendum, record this task as DONE, and bump the visible site version.
- **Validation Required:** `npm run build`; targeted lint/typecheck for touched runtime files; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; confirm WNYHS token/CSS standards followed as much as existing codebase permits.
- **Exit Criteria:** Version is bumped to `v1.0.130`; `/operator/property-model` uses WNYHS Quote Workspace framing; customer/deal authority is HubSpot-owned without writes; Property Type, Occupancy Context, and Quote Stage are controlled options; Customer Concerns are the primary customer-language capture area; Property Rooms / Areas To Cover replaces vague rooms/zones language; selected solutions use repo source data where practical; Draft Hardware / BOM supports status and manual adjustment; draft quote preview keeps the three required sections and GATES001 payment terms; styling uses WNYHS tokens/classes; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** QUOTESYSTEM-004, QUOTESYSTEM-005, PROPERTY001, GATES001, QUOTE001, QUOTE_SYSTEM_DOCUMENT_MAP, DESIGN001, HubSpot REV03, runtime HubSpot/requestId/protected-runtime contracts, source solution/package/hardware data, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Refactored the internal Property Model quote workspace with HubSpot-owned CRM framing, WNYHS terminology, source-backed selectors, multi-concern capture, room/area planning, Draft Hardware / BOM status, GATES001-aligned draft quote preview, token-based styling, and visible version `v1.0.130`. No HubSpot writes, Stripe/payment implementation, inventory automation, scheduling automation, quote PDF generation, email sending, authentication system, new dependencies, package-lock changes, public quote automation, or protected runtime behavior changes were introduced.

### QUOTESYSTEM-007
- **Task ID:** QUOTESYSTEM-007
- **Task Name:** Floorplan / Evidence Attachments
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Extend `/operator/property-model` so the WNYHS Quote Workspace can capture local floorplan and property evidence references for a Property Model draft through repeatable evidence items, including hand-drawn floorplan, professional redraw, exterior photos, interior photos, measurement notes, compass/orientation notes, future LiDAR/Digital Twin capture references, and other evidence.
- **Allowed Scope:** Internal operator route extension for `/operator/property-model`; update local Property Model types and localStorage normalization; add controlled evidence type, orientation/side, and status options; add a token-based Floorplan / Property Evidence UI section with add/edit/remove/list support; update Draft Quote Preview Section 1 with evidence summary; add the QUOTESYSTEM-007 implementation note; update quote-system document map, document catalog, markdown manifest addendum, master task register, and visible site version.
- **Forbidden Scope:** No real file upload implementation, durable storage, cloud storage, Google Drive integration, image processing, floorplan rendering engine, AI redraw generation, HubSpot writes, HubSpot schema/properties/pipeline changes, Stripe/payment implementation, inventory automation, scheduling automation, quote PDF generation, email sending, authentication system, new dependencies, package-lock changes, unrelated public site redesign, or protected runtime behavior changes.
- **Target Files:** `src/lib/siteVersion.ts`, `src/lib/propertyModel.ts`, `src/pages/PropertyModelAdmin.tsx`, `docs/quotesystem/IMPLEMENTATION007_Floorplan_Evidence_Attachments_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Internal operator route and local browser storage only.
- **Documentation Updates Required:** Add the QUOTESYSTEM-007 implementation note, update quote-system document map, add the document catalog entry, add the markdown manifest addendum, record this task as DONE, and bump the visible site version.
- **Validation Required:** `npm run build`; targeted lint/typecheck for touched runtime files; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; confirm WNYHS token/CSS standards followed as much as existing codebase permits.
- **Exit Criteria:** Version is bumped to `v1.0.132`; `/operator/property-model` captures repeatable evidence items with evidence type, label/name, source/reference, orientation/side, notes, and status; Draft Quote Preview Section 1 summarizes whether hand-drawn floorplan, professional redraw, exterior photo, interior photo, and compass/orientation evidence exists and preserves the base-floorplan approval gate; persistence remains localStorage-only; no protected systems are touched; PR targets `main` without merge.
- **Dependencies:** QUOTESYSTEM-006, FLOORPLAN000, FLOORPLAN001, FLOORPLAN002, FLOORPLAN003, PROPERTY001, QUOTE_SYSTEM_DOCUMENT_MAP, DESIGN001, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Extended the internal Property Model quote workspace with local-storage-only repeatable floorplan/property evidence items, controlled evidence type/orientation/status options, WNYHS floorplan workflow guidance, and Draft Quote Preview Section 1 evidence summary. No file uploads, durable storage, cloud storage, Google Drive integration, image processing, floorplan rendering engine, AI redraw generation, HubSpot writes, Stripe/payment implementation, inventory automation, scheduling automation, quote PDF generation, email sending, authentication system, new dependencies, package-lock changes, public quote automation, or protected runtime behavior changes were introduced.


### QUOTESYSTEM-008
- **Task ID:** QUOTESYSTEM-008
- **Task Name:** Hardware Placement Reconciliation
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Extend the internal Quote Workspace so Draft Hardware / BOM line items reconcile to property room/area, customer concern, selected WNYHS solution, catalog hardware item, evidence reference, installer note, dashboard prep note, and reconciliation status.
- **Allowed Scope:** Internal operator route extension for `/operator/property-model`; update local Property Model types and localStorage normalization; add controlled reconciliation status including Needs Placement, GPT Proposed, WNYHS Modified, Approved, and Locked; add catalog-backed/freehand hardware placement controls; add reconciliation summary; update Draft Quote Preview Section 3; add non-blocking MAST camera reminder; add the QUOTESYSTEM-008 implementation note; update quote-system document map, document catalog, markdown manifest, master task register, and visible site version.
- **Forbidden Scope:** No pricing engine, quote PDF generation, inventory automation, ordering automation, scheduling automation, HubSpot writes, HubSpot schema/properties/pipeline changes, Stripe/payment changes, email sending, auth system, durable production storage, new dependencies, package-lock changes, unrelated public site redesign, protected runtime behavior changes, or hardcoded color drift outside token governance.
- **Target Files:** `src/lib/siteVersion.ts`, `src/lib/propertyModel.ts`, `src/pages/PropertyModelAdmin.tsx`, `src/index.css`, `docs/quotesystem/IMPLEMENTATION008_Hardware_Placement_Reconciliation_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Internal operator route and local browser storage only.
- **Documentation Updates Required:** Add the QUOTESYSTEM-008 implementation note, update quote-system document map, add the document catalog entry, add the markdown manifest entry, record this task as DONE, and bump the visible site version.
- **Validation Required:** `npm run build`; targeted lint/typecheck for touched runtime files; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; token/CSS hardcoded color scan for touched styling; route smoke check for `/operator/property-model` if practical.
- **Exit Criteria:** Version is bumped to `v1.0.134`; `/operator/property-model` supports Draft Hardware / BOM reconciliation to catalog item, room/area, concern, selected solution, evidence, installer note, dashboard note, and reconciliation status; reconciliation summary is visible; Draft Quote Preview Section 3 includes placement details; MAST camera reminder is non-blocking; persistence remains localStorage-only; no protected systems are touched; PR targets `main` without merge.
- **Dependencies:** QUOTESYSTEM-007, PROPERTY001, HARDWARE001, DASHBOARD_PREP001, INSTALLER001, CATALOG001, DESIGN001, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Extended the internal Property Model quote workspace with local-storage-only hardware placement reconciliation fields, summary counts, Section 3 preview detail, and a non-blocking MAST camera reminder. No HubSpot writes, Stripe/payment changes, pricing engine, quote PDF generation, inventory automation, ordering automation, scheduling automation, email sending, auth system, durable production storage, new dependencies, package-lock changes, public site redesign, or protected runtime behavior changes were introduced.

### QUOTESYSTEM-009
- **Task ID:** QUOTESYSTEM-009
- **Task Name:** Quote Preview / Print View
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add a customer-facing quote preview / browser-print view for the WNYHS Quote Workspace using existing local Property Model data.
- **Allowed Scope:** Add an operator quote preview route for `/operator/property-model`; read from existing localStorage Property Model records; add a Preview / Print Quote action; render the three-section quote structure; add token-based print CSS; add the QUOTESYSTEM-009 implementation note; update quote-system document map, document catalog, markdown manifest, master task register, and visible site version.
- **Forbidden Scope:** No PDF generation library, quote sending, email sending, HubSpot writes, HubSpot schema/properties/pipeline changes, Stripe/payment changes, inventory automation, ordering automation, scheduling automation, auth system, durable production storage, new dependencies, package-lock changes, unrelated public redesign, protected runtime behavior changes, or changes to existing Quote, QuoteReview, QuotePrint, Agreement, Payment, or Schedule flows.
- **Target Files:** `src/lib/siteVersion.ts`, `src/pages/PropertyModelAdmin.tsx`, `src/pages/PropertyModelQuotePreview.tsx`, `src/App.tsx`, `src/index.css`, `docs/quotesystem/IMPLEMENTATION009_Quote_Preview_Print_View_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Internal operator quote preview route and local browser storage read path only.
- **Documentation Updates Required:** Add the QUOTESYSTEM-009 implementation note, update quote-system document map, add the document catalog entry, add the markdown manifest entry, record this task as DONE, and bump the visible site version.
- **Validation Required:** `npm run build`; targeted lint/typecheck for touched runtime files; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; token/CSS hardcoded color scan for touched styling; route smoke check for `/operator/property-model` and `/operator/property-model/quote-preview` if practical.
- **Exit Criteria:** Version is bumped to `v1.0.135`; `/operator/property-model/quote-preview` renders local Property Model draft data in the three-section quote structure; `/operator/property-model` links to the preview; preview uses browser print only; persistence remains localStorage-only; no protected systems are touched; existing quote/payment/agreement/schedule flows remain preserved; PR targets `main` without merge.
- **Dependencies:** QUOTESYSTEM-008, PROPERTY001, QUOTE001, GATES001, HARDWARE001, CATALOG001, DESIGN001, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added a local-storage-only browser-print quote preview route with WNYHS three-section quote structure and token-based print styling. No PDF generation, quote sending, email sending, HubSpot writes, Stripe/payment changes, inventory automation, ordering automation, scheduling automation, auth system, durable production storage, new dependencies, package-lock changes, public redesign, or protected runtime behavior changes were introduced.

### QUOTESYSTEM-010
- **Task ID:** QUOTESYSTEM-010
- **Task Name:** Installer Packet View
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add an internal installer packet preview / browser-print view for the WNYHS Quote Workspace using existing local Property Model data.
- **Allowed Scope:** Add `/operator/property-model/installer-packet`; read existing localStorage Property Model records; add a Preview / Print Installer Packet action; render job summary, readiness language, Draft Hardware / BOM pick list, installer task ownership, install notes, verification checklist, customer handoff checklist, exception/open-items log, and onsite duration guidance; add `installerAssignment` to local BOM line items; add the QUOTESYSTEM-010 implementation note; update quote-system document map, document catalog, markdown manifest, master task register, and visible site version.
- **Forbidden Scope:** No PDF generation library, email sending, scheduling automation, inventory automation, ordering automation, HubSpot sync, payment logic, auth system, durable storage, new dependencies, package-lock changes, unrelated public redesign, protected runtime behavior changes, or changes to existing Quote, QuoteReview, QuotePrint, Agreement, Payment, Schedule, PropertyModelAdmin, or Quote Preview flows.
- **Target Files:** `src/lib/siteVersion.ts`, `src/lib/propertyModel.ts`, `src/pages/PropertyModelAdmin.tsx`, `src/pages/PropertyModelInstallerPacket.tsx`, `src/App.tsx`, `src/index.css`, `docs/quotesystem/IMPLEMENTATION010_Installer_Packet_View_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Internal operator installer packet route and local browser storage read path only.
- **Documentation Updates Required:** Add the QUOTESYSTEM-010 implementation note, update the quote-system document map, add the document catalog entry, add the markdown manifest entry, record this task as DONE, and bump the visible site version.
- **Validation Required:** `npm run build`; targeted lint/typecheck for touched runtime files; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; token/CSS hardcoded color scan for touched styling; route smoke check for `/operator/property-model`, `/operator/property-model/quote-preview`, and `/operator/property-model/installer-packet` if practical.
- **Exit Criteria:** Version is bumped to `v1.0.136`; `/operator/property-model/installer-packet` renders local Property Model draft data in an internal installer packet structure; `/operator/property-model` links to the packet; preview uses browser print only; checklists are display-only; persistence remains localStorage-only; no protected systems are touched; existing quote/payment/agreement/schedule and quote preview flows remain preserved; PR targets `main` without merge.
- **Dependencies:** QUOTESYSTEM-008, QUOTESYSTEM-009, PROPERTY001, INSTALLER001, HARDWARE001, DASHBOARD_PREP001, GATES001, CATALOG001, DESIGN001, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added a local-storage-only internal installer packet browser-print route with job summary, readiness guidance, BOM pick list, installer assignment buckets, install notes, display-only verification/handoff/exception checklists, and onsite duration guidance. Added `installerAssignment` to Draft Hardware / BOM line items with default Unassigned. No PDF generation, email sending, scheduling automation, inventory automation, ordering automation, HubSpot sync, payment logic, auth system, durable storage, new dependencies, package-lock changes, public redesign, or protected runtime behavior changes were introduced.


### PAGE-TOKEN-COMPLIANCE-GATE-001
- **Task ID:** PAGE-TOKEN-COMPLIANCE-GATE-001
- **Task Name:** Add Public Page Token Compliance Gate and Page-Level Task Pack
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add a standing public-page token compliance gate requiring every future public page edit to ask whether the target page is compliant with the current homepage-derived Token CSS Governance, and register the next page-level task pack.
- **Allowed Scope:** Docs-only governance closeout; register the new compliance gate and task pack; update catalog and manifest; no source/runtime/page/style changes.
- **Forbidden Scope:** No source code changes, no CSS changes, no app changes, no route changes, no navigation changes, no page implementation, no visual implementation, no pricing, no claims changes, no HubSpot, no Stripe/payment, no Resend, no Gmail/Workspace, no scheduling, no API/runtime behavior changes, no Cloudflare config, no secrets, no assets, no dependencies, no package-lock.
- **Target Files:** `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation-only closeout.
- **Documentation Updates Required:** Add task-register closeout record; add catalog entries; add markdown manifest entries/addendum.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; `rg -n "PAGE_TOKEN_COMPLIANCE_GATE_REV01|PAGE_TOKEN_COMPLIANCE_TASK_PACK_REV01|PAGE-TOKEN-COMPLIANCE-GATE-001|Token CSS Governance|Page structure is page-specific|Visual language is shared" docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md docs/system/PAGE_TOKEN_COMPLIANCE_TASK_PACK_REV01.md`. No `npm run build` because this is docs-only.
- **Exit Criteria:** The compliance gate and task pack are registered in the Master Task Register, Document Catalog, and Markdown Manifest; Task 0 is recorded as DONE; only docs bookkeeping files are changed; no app/source/runtime/protected-system files are changed; validation passes; PR targets `main` without merge.
- **Dependencies:** `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`, `docs/system/PAGE_TOKEN_COMPLIANCE_TASK_PACK_REV01.md`, DESIGN002, DESIGN003, DESIGN001, SOLUTION002, OPS002.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Completed docs-only governance bookkeeping for the public page token compliance gate and task pack. Registered both documents in the catalog, added the manifest addendum, and recorded PAGE-TOKEN-COMPLIANCE-GATE-001 as DONE without editing source, CSS, app, runtime, HubSpot, Stripe/payment, protected-system, asset, dependency, package-lock, or version files.

### OPS003-CODEX-CONTEXT-EFFICIENCY-001
- **Task ID:** OPS003-CODEX-CONTEXT-EFFICIENCY-001
- **Task Name:** Add Codex Context Efficiency Standard
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a reusable repository standard for reducing Codex prompt and context token usage while preserving authority-chain enforcement, bounded task execution, protected-system boundaries, validation discipline, and accuracy.
- **Allowed Scope:** Docs-only governance; create OPS003 context efficiency standard; register it in DOCUMENT_CATALOG and MARKDOWN_MANIFEST; add DONE task-register record.
- **Forbidden Scope:** No source/app/CSS/page changes; no visual implementation; no route/navigation changes; no runtime/API behavior changes; no Cloudflare config changes; no HubSpot changes; no Stripe/payment changes; no Resend changes; no Gmail/Workspace changes; no scheduling changes; no secrets; no assets; no dependencies; no package-lock; no version bump.
- **Target Files:** `docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Create OPS003, catalog it, add it to manifest, add completed task-register record.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; `rg -n "OPS003|Codex Context Efficiency|CONTEXT EFFICIENCY REQUIREMENT|Use repo docs as authority|Load only the smallest set|OPS003-CODEX-CONTEXT-EFFICIENCY-001" docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`. No `npm run build` required because this is docs-only.
- **Exit Criteria:** OPS003 exists; catalog and manifest include OPS003; Master Task Register records OPS003-CODEX-CONTEXT-EFFICIENCY-001 as DONE; only docs files changed; no source/app/CSS/runtime/protected-system files changed; no version bump; validation passes; PR targets `main` and is not merged.
- **Dependencies:** OPS002, PAGE_TOKEN_COMPLIANCE_GATE_REV01, PAGE_TOKEN_COMPLIANCE_TASK_PACK_REV01, current governance authority chain.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Completed docs-only governance creation for OPS003. Created the context efficiency standard, registered it in the document catalog, added the manifest addendum, and recorded OPS003-CODEX-CONTEXT-EFFICIENCY-001 as DONE without editing source, CSS, app, runtime, HubSpot, Stripe/payment, protected-system, asset, dependency, package-lock, or version files.

### T-OPS001-002
- **Task ID:** T-OPS001-002
- **Task Name:** Add Codex Model Selection and Context Efficiency Guidance
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add governance requiring future Codex work orders to include model/reasoning guidance and requiring ChatGPT to evaluate Codex Context Efficiency Reports after each run.
- **Allowed Scope:** Docs-only governance update to Codex run/work-order/context-efficiency owner docs, agent governance pointer, Master Task Register, Document Catalog, and Markdown Manifest.
- **Forbidden Scope:** No app/source code changes; no routes; no navigation; no search implementation; no category pages; no solution pages; no image generation; no HubSpot; no Stripe/payment; no scheduling; no planner; no quote flow; no backend/API runtime; no Resend/email; no Cloudflare config; no environment variables or secrets; no dependencies; no package-lock.
- **Target Files:** `docs/codex/CODEX_RUN_CONTRACT.md`, `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`, `docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md`, `docs/system/agent.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Add model/reasoning guidance, ChatGPT post-run review duties, targeted context-efficiency instruction, catalog/manifest traceability, and this task-register record.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`.
- **Exit Criteria:** Future work orders require the Recommended Codex model block; default/High/Medium/Mini guidance is documented; ChatGPT post-run review requirements are documented; context-efficiency instruction is documented; Master Task Register, Document Catalog, and Markdown Manifest are updated; only allowed docs files changed; protected systems remain untouched; build passes or unrelated failure is reported.
- **Dependencies:** Prompt-created bounded T-OPS001-002 work order, CODEX-CONTRACT001, OPS003-CODEX-CONTEXT-EFFICIENCY-001, current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Added required future work-order model/reasoning guidance to the Codex run contract and work-order standard, including default GPT-5.5 Medium guidance, High/Medium task-type guidance, and the rule not to use Mini for WNYHS repo work. Added ChatGPT post-run review duties for scope compliance, validation evidence, protected-system compliance, Context Efficiency Report quality, prompt-improvement lessons, and governance-update need. Added the targeted context-efficiency instruction to OPS003 and the work-order template. Updated the agent governance pointer, document catalog, markdown manifest, and this task-register record. No app/source/runtime/routes/navigation/search/category/solution/image-generation/HubSpot/Stripe/payment/scheduling/planner/quote-flow/backend/API/Resend/email/Cloudflare/env/secret/dependency/package-lock files were changed.

### T-OPS001-003
- **Task ID:** T-OPS001-003
- **Task Name:** Workstream Context Routing Standard
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the project-wide routing standard requiring ChatGPT/Codex to classify each task by workstream and load the correct current-state and governing documents before discussion or implementation continues.
- **Allowed Scope:** Docs-only governance; create OPS004; update Codex run contract, agent governance pointer, Master Task Register, Document Catalog, and Markdown Manifest.
- **Forbidden Scope:** No app/source code changes; no routes; no navigation; no SEO implementation; no search implementation; no images; no category/solution/page content; no HubSpot; no Stripe/payment; no scheduling; no planner; no quote flow; no backend/API runtime; no Resend/email; no Cloudflare config; no `.env` or secrets; no dependencies; no package-lock.
- **Target Files:** `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`, `docs/codex/CODEX_RUN_CONTRACT.md`, `docs/system/agent.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Create OPS004, require workstream context routing in the Codex run contract, update the agent pointer, catalog OPS004, add Markdown Manifest addendum, record T-OPS001-004 follow-up.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`.
- **Exit Criteria:** OPS004 exists with required sections; all 22 minimum workstreams are included; required routing examples and ChatGPT/Codex behaviors are documented; T-OPS001-004 Workstream Status Board is listed as a follow-up; only allowed docs files changed; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** Prompt-created bounded T-OPS001-003 work order, CODEX-CONTRACT001, OPS003-CODEX-CONTEXT-EFFICIENCY-001, current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Follow-up Task:** T-OPS001-004 - Workstream Status Board. Create the current-state board for each workstream so future chats can quickly determine completed work, outstanding work, required docs, and related workstreams.
- **Completion Notes:** Created OPS004 as the workstream context routing standard, updated the Codex run contract and agent rules to require workstream classification before task execution, registered OPS004 in the catalog and manifest, and listed T-OPS001-004 as the follow-up status-board task. No app/source/runtime/routes/navigation/SEO implementation/search implementation/category/solution/page content/image/HubSpot/Stripe/payment/scheduling/planner/quote-flow/backend/API/Resend/email/Cloudflare/env/secret/dependency/package-lock files were changed.

### T-OPS001-004
- **Task ID:** T-OPS001-004
- **Task Name:** Workstream Status Board
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the project-wide current-state board that records status, completed work, outstanding work, required docs, related workstreams, protected-system concerns, and next recommended tasks for each major WNYHS workstream.
- **Allowed Scope:** Docs-only governance; create OPS005; update Codex run contract if appropriate; update agent governance pointer if appropriate; update Master Task Register; update Document Catalog; update Markdown Manifest if repository convention requires it.
- **Forbidden Scope:** No app/source code changes; no routes; no navigation; no SEO implementation; no search implementation; no images; no category/solution/page content; no HubSpot; no Stripe/payment; no scheduling; no planner; no quote flow; no backend/API runtime; no Resend/email; no Cloudflare config; no `.env` or secrets; no dependencies; no package-lock.
- **Target Files:** `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md`, `docs/codex/CODEX_RUN_CONTRACT.md`, `docs/system/agent.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Create OPS005, reference OPS005 from the Codex run contract and agent rules, add task-register record, catalog OPS005, and add Markdown Manifest addendum.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`.
- **Exit Criteria:** OPS005 exists with required sections; exactly the 22 OPS004 workstreams are included; known current-state highlights are captured; only allowed documentation files changed; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** Prompt-created bounded T-OPS001-004 work order, T-OPS001-003, CODEX-CONTRACT001, OPS003-CODEX-CONTEXT-EFFICIENCY-001, OPS004, current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Created OPS005 as the project-wide workstream status board, including all 22 OPS004 workstreams with current state, completed work, outstanding work, required current-state docs, governing docs, related workstreams, protected-system concerns, next recommended tasks, and notes/risks. Updated the Codex run contract and agent rules to reference OPS005 after OPS004 routing when current-state workstream context is needed. Registered OPS005 in the document catalog and markdown manifest. No app/source/runtime/routes/navigation/SEO implementation/search implementation/category/solution/page content/image/HubSpot/Stripe/payment/scheduling/planner/quote-flow/backend/API/Resend/email/Cloudflare/env/secret/dependency/package-lock files were changed.

### DESIGN-TOKEN-SYSTEM-002
- **Task ID:** DESIGN-TOKEN-SYSTEM-002
- **Task Name:** Public Visual QA Cleanup After v1.0.121
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Fix specific post-deploy visual QA defects after DESIGN-TOKEN-SYSTEM-001 without redesigning pages, adding features, changing routes, or touching protected systems.
- **Allowed Scope:** Visible site version patch bump to `v1.0.122`; visual contrast fixes; typography/wrapping fixes; CSS token/primitives cleanup; image framing/object-fit fixes; minor class additions needed to apply existing visual primitives; minor copy spacing fixes only if verified real in the app; this task-register record.
- **Forbidden Scope:** No new business strategy, sections, routes, route renames, navigation structure changes, Search implementation, QR Landing redesign, Fit Check behavior changes, Estimate behavior changes, HubSpot changes, Stripe/payment changes, Resend changes, Gmail/Workspace changes, Cloudflare config changes, scheduling changes, API/runtime behavior changes, secrets, dependency changes, package-lock changes, asset generation, image generation, public pricing values, invented package prices, invented solution prices, supplier costs, BOM values, invented packages, invented solutions, invented hardware standardization, unsupported claims, or hardcoded new colors outside the visual token system unless unavoidable and explained.
- **Target Files:** `src/lib/siteVersion.ts`, `src/index.css`, `src/styles/wnyhsVisualGovernance.css`, `src/styles/homeSecurityPremium.css`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/pages/Packages.tsx`, `src/pages/SolutionOpportunity.tsx`, `src/components/homeSecurity/WnyhsMarketingLayout.tsx`, `src/components/homeSecurity/WnyhsPageLayout.tsx`, `src/components/homeSecurity/WnyhsSiteFooter.tsx`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Public visual presentation only; protected runtime systems must remain untouched.
- **Documentation Updates Required:** Add/update this bounded `DESIGN-TOKEN-SYSTEM-002` task-register record.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; version grep; forbidden-claim grep; spacing-artifact grep; hardcoded color grep; `npm run build`; safe standard lint/typecheck scripts if present and applicable; manual local visual review for `/home-security`, `/packages?vertical=home-security`, `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes`.
- **Exit Criteria:** Visible site version is `v1.0.122`; header brand text is readable; packages premier-card text is readable; solution detail hero headings are less cramped; homepage hero image no longer has heavy letterboxing; WNYHS Core image framing is improved; third premier card layout is less awkward; spacing artifacts are verified as browser issues and fixed or documented as extraction artifacts; no fake prices, prohibited claims, broken images, route/navigation changes, features, or protected-system changes are introduced; validation passes or unrelated baseline failures are documented; PR targets `main` without merge.
- **Dependencies:** DESIGN-TOKEN-SYSTEM-001, current context, DESIGN001/DESIGN002 visual governance, claims guardrails, offer architecture, package/BOM governance, brand/page/header/footer/public funnel standards, and OPS002 repository-aware dispatch standard.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Marked DONE based on production `v1.0.122` deployment visibility and follow-on authorization for the next bounded public offering publishing task.

### SOLUTION-PUBLISHING-001
- **Task ID:** SOLUTION-PUBLISHING-001
- **Task Name:** Publish Public Solution, Package, Category, Core, and Vault Offering Layer
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Turn governed WNYHS offer architecture into a usable public offering layer on `/packages?vertical=home-security` while preserving protected runtime, payment, CRM, scheduling, and claims boundaries.
- **Allowed Scope:** Visible site version patch bump to `v1.0.123`; governed public offer catalog data source; homepage category/package/solution card link wiring; home-security Packages/Solutions landing content for WNYHS Core, public categories, standard/planning solution cards, package starting points, and Vault quote-only public visibility; CSS needed to support those surfaces with existing visual tokens; this task-register record.
- **Forbidden Scope:** No public amounts, supplier costs, BOM cost publication, Stripe product IDs, checkout changes, quote calculation changes, hardware purchasing authorization, customer installation authorization, HubSpot changes, Stripe/payment changes, Resend changes, Gmail/Workspace changes, Cloudflare config changes, scheduling changes, API/runtime behavior changes, secrets, dependency changes, package-lock changes, asset generation, image generation, route renames, route removals, Search implementation, QR Landing redesign, Fit Check behavior changes, Estimate behavior changes, Planner behavior changes, Our Work behavior changes, Support form changes, medical-service claims, professional alarm service claims, public-safety response claims, theft or crime outcome promises, water damage or frozen-pipe outcome promises, all-device compatibility claims, code-compliance or safety-certification claims for Vault/custom work, or public promise that Vault/custom items are standard installed packages.
- **Target Files:** `src/lib/siteVersion.ts`, `src/content/wnyhsOfferCatalog.ts`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/pages/Packages.tsx`, `src/pages/SolutionOpportunity.tsx`, `src/styles/homeSecurityPremium.css`, `src/index.css`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Public offering visibility, linking, and content only; protected runtime systems must remain untouched.
- **Documentation Updates Required:** Add this bounded `SOLUTION-PUBLISHING-001` task-register record and mark it `DONE` only after validation passes and PR is opened.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; version grep; forbidden-claim grep; no-public-amount/payment-term grep on touched public files; `npm run build`; safe lint/typecheck scripts if present; manual/local review for `/home-security`, `/packages?vertical=home-security`, `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes` if possible.
- **Exit Criteria:** Visible site version is `v1.0.123`; offer catalog data source exists; homepage cards link somewhere useful; `/packages?vertical=home-security` explains WNYHS Core, categories, solution statuses, package starting points, and Vault quote-only review; four existing solution pages remain intact; no public amounts, unsupported claims, protected-system changes, route/nav changes, dependency changes, package-lock changes, or asset-generation changes are introduced; validation passes or unrelated baseline failures are documented; PR targets `main` without merge.
- **Dependencies:** Prompt-created bounded `SOLUTION-PUBLISHING-001` work order; current context; SOLUTION001, CLAIMS001, OFFERING001, PACKAGEBOM001, DESIGN001/DESIGN002, brand, public funnel, and OPS002 governance.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added `src/content/wnyhsOfferCatalog.ts` as the governed public offer catalog source; wired homepage category, package, and solution cards to useful offer anchors or existing live solution routes; rebuilt `/packages?vertical=home-security` as the public offerings landing page with WNYHS Core, categories, standard/planning solution visibility, package starting points, and Vault quote-only reviewed-individually visibility; bumped visible site version to `v1.0.123`; preserved existing solution detail routes, global navigation, protected runtime systems, HubSpot, Stripe/payment, scheduling, Cloudflare config, dependencies, package-lock, assets, and public amount boundaries. `npm run build`, touched-file ESLint, `git diff --check`, version grep, route/link inspection, and scoped no-public-amount/payment-term grep passed. Broad `npm run lint` and `npm run typecheck:api` still report unrelated baseline issues outside this task; `npm run typecheck:test` passed. Manual visual review is deferred to operator review because browser/screenshot automation was intentionally stopped for this run.

### SOLUTION-PUBLISHING-001-CONTRAST-HOTFIX
- **Task ID:** SOLUTION-PUBLISHING-001-CONTRAST-HOTFIX
- **Task Name:** Public Offerings Page Card Contrast Fix
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Fix post-merge readability regressions on `/packages?vertical=home-security` where light offering cards inherited pale text from dark or mixed visual sections.
- **Allowed Scope:** CSS-only contrast/readability fixes for public offerings card selectors; visible site version patch bump to `v1.0.124`; this task-register record.
- **Forbidden Scope:** No catalog data changes, public copy/content changes, route changes, navigation changes, new sections, pricing, supplier costs, BOM values, package/solution strategy changes, new claims, protected-system changes, dependency changes, package-lock changes, assets, image generation, or browser automation.
- **Target Files:** `src/lib/siteVersion.ts`, `src/index.css`, `src/styles/homeSecurityPremium.css`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. CSS/readability and deploy-visible version only; protected runtime systems remain untouched.
- **Documentation Updates Required:** Add this minimal HOTFIX task-register record and mark DONE after validation.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; version grep; forbidden-claim grep; `npm run build`.
- **Exit Criteria:** Visible site version is `v1.0.124`; `.packages-core-card`, `.packages-category-card`, `.packages-vault-card`, `.packages-signature-card`, and `.packages-card-link` text is forced to readable existing WNYHS ink/accent tokens on light card surfaces; no content, catalog, routes, pricing, claims, protected systems, dependencies, assets, or browser automation are changed; validation passes and PR targets `main` without merge.
- **Dependencies:** SOLUTION-PUBLISHING-001, DESIGN001/DESIGN002 visual governance, CLAIMS001, OFFERING001, PACKAGEBOM001, and OPS002 repository-aware dispatch standard.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Scoped light-card text and link colors to existing WNYHS ink/accent tokens for public offerings readability; preserved `.wnyhs-card` global behavior, content, routes, catalog data, pricing, claims, and protected systems. Validation passed and PR opened to `main` without merge.

### SOLUTION-PUBLISHING-001-POLISH-HOTFIX
- **Task ID:** SOLUTION-PUBLISHING-001-POLISH-HOTFIX
- **Task Name:** Public Offerings Page Final Readability Polish
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Fix remaining package topic pill readability on `/packages?vertical=home-security` after SOLUTION-PUBLISHING-001 and its contrast hotfix.
- **Allowed Scope:** CSS-only readability fix for package topic pills; visible site version patch bump to `v1.0.125`; literal package-title spacing fixes only if confirmed in source; this minimal DONE record.
- **Forbidden Scope:** No catalog strategy changes, solution/package/Vault content changes, page restructure, route/navigation changes, pricing, claims, protected-system changes, runtime/API changes, dependency changes, package-lock changes, assets, image generation, or browser automation.
- **Target Files:** `src/lib/siteVersion.ts`, `src/index.css`, `src/content/wnyhsOfferCatalog.ts` only if source spacing errors are confirmed, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Public CSS/readability and deploy-visible version only; protected runtime systems remain untouched.
- **Documentation Updates Required:** Add this minimal DONE hotfix task-register record.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; version grep; spacing-artifact grep; forbidden-claim grep; `npm run build`; safe focused lint/typecheck if quick and available.
- **Exit Criteria:** Visible site version is `v1.0.125`; package topic pills in `.packages-signature-card li` use existing WNYHS tokens for readable text; package title source strings are fixed only if literal spacing errors exist; no catalog strategy, routes, pricing, claims, or protected systems are changed; validation passes and PR targets `main` without merge.
- **Dependencies:** SOLUTION-PUBLISHING-001, SOLUTION-PUBLISHING-001-CONTRAST-HOTFIX, DESIGN001/DESIGN002 visual governance, CLAIMS001, OFFERING001, PACKAGEBOM001, and OPS002 repository-aware dispatch standard.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Scoped package topic pill text to existing WNYHS dark-surface text token for readability; verified package title strings already include expected spacing, so no catalog content changes were needed; preserved catalog strategy, routes, pricing, claims, and protected systems.

### SOLUTION-LISTING-VISUAL-PARITY-001
- **Task ID:** SOLUTION-LISTING-VISUAL-PARITY-001
- **Task Name:** Rebuild Public Solutions Listing Page for Visual Parity and Correct Page Structure
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Rebuild the home-security branch of `/packages?vertical=home-security` as the governed public Solutions Listing surface with Home Landing Page visual parity, image-led solution cards, compact Vault presentation, Core value panel placement, and homepage-style CTA.
- **Allowed Scope:** Visible site version patch bump to `v1.0.126`; extend the existing governed public offer catalog with approved existing image paths and meaningful alt text; rebuild only the home-security branch of `src/pages/Packages.tsx`; remove the rendered category-card matrix and package starting-point matrix from the home-security Solutions page; add semantic CSS selectors for the Solutions Listing, solution grid/cards, Vault panel, Core value panel, and page CTA using existing WNYHS tokens; update this task-register record.
- **Forbidden Scope:** No route renames, route removals, global navigation changes, Search implementation, QR Landing redesign, Fit Check behavior changes, Estimate behavior changes, Contact form behavior changes, Support form changes, Planner behavior changes, Our Work changes, HubSpot changes, Stripe/payment changes, Resend changes, Gmail/Workspace changes, scheduling changes, API/runtime behavior changes, Cloudflare config changes, secrets, dependency changes, package-lock changes, asset generation, image generation, public prices, starting prices, supplier costs, BOM values, Stripe product IDs, checkout changes, quote calculation changes, hardware purchasing authorization, customer installation authorization, invented packages, package starting-point matrix on the Solutions page, large public category-card matrix on the Solutions page, professional alarm service claims, police/fire/medical dispatch claims, medical monitoring claims, caregiver replacement claims, theft/crime/burglary prevention claims, water-damage/frozen-pipe/mold prevention claims, universal compatibility claims, no monthly fees ever, works with everything, own it for life, never need another app, guaranteed future compatibility, or always local-only.
- **Target Files:** `src/lib/siteVersion.ts`, `src/content/wnyhsOfferCatalog.ts`, `src/pages/Packages.tsx`, `src/index.css`, `src/styles/homeSecurityPremium.css`, `docs/system/master-task-register.md`. `src/components/homeSecurity/HomeSecurityLanding.tsx` may be touched only if inspection proves shared image constants or card primitives must be reused safely.
- **Runtime Systems Affected:** None. Public Solutions Listing presentation and catalog image metadata only; protected runtime systems must remain untouched.
- **Documentation Updates Required:** Add this bounded task-register record and mark it `DONE` only after validation passes and PR is opened. Do not update `DOCUMENT_CATALOG.md` or `MARKDOWN_MANIFEST.md` for this implementation task.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; version grep; category/package matrix removal grep; no-public-pricing/payment/product grep; forbidden-claim grep across `src docs`; `npm run build`; safe focused lint/typecheck if quick and available; manual review for `/packages?vertical=home-security`, `/home-security`, and the four live solution routes if possible without browser automation.
- **Exit Criteria:** Visible site version is `v1.0.126`; Solutions Listing follows Hero / Intro, Image-led solution grid, Vault / custom section, WNYHS Core value panel, Homepage-style CTA, Footer order; rendered category-card matrix and package starting-point matrix are removed from the home-security Solutions page; every public solution card is image-led with meaningful alt text; Vault remains quote-only/custom-reviewed and compact; Core appears after Vault and before final CTA with add-on expansion copy; final CTA prioritizes Request Estimate and Call/Text; existing live solution routes are preserved; no pricing, unsupported claims, protected-system changes, route/nav changes, assets, dependency changes, package-lock changes, catalog-strategy changes, or Home Landing regressions are introduced; validation passes or unrelated baseline failures are documented; PR targets `main` without merge.
- **Dependencies:** Prompt-created bounded `SOLUTION-LISTING-VISUAL-PARITY-001` work order; current context; SOLUTION002, DESIGN003, DESIGN002, DESIGN001, SOLUTION001, CLAIMS001, OFFERING001, PACKAGEBOM001, brand, page layout, public funnel, and OPS002 governance.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Rebuilt the home-security branch of `/packages?vertical=home-security` into the governed Solutions Listing order: homeowner-readable hero, image-led public solution grid, compact quote-only Vault section, WNYHS Core add-on value panel, and homepage-style estimate/call CTA. Removed the rendered public category-card matrix and package starting-point matrix from the Solutions page while preserving non-home-security package behavior and the existing package catalog data source. Extended `publicSolutions` with existing approved image paths and meaningful alt text; all catalog image paths were verified present. Bumped visible site version to `v1.0.126`. Preserved existing live solution routes, global navigation, catalog strategy, route behavior, assets, dependencies, package-lock, HubSpot, Stripe/payment, Resend, scheduling, API/runtime behavior, Cloudflare config, pricing, and protected systems. `npm run build`, focused ESLint on touched TS/TSX files, `npm run typecheck:test`, image-path verification, `git diff --check`, version grep, category/package matrix removal grep, and no-public-pricing/payment/product grep passed. Broad `npm run lint` and `npm run typecheck:api` still report unrelated baseline issues outside touched files. Manual visual review is deferred to operator because browser/headless screenshot automation was not authorized for this run.

### SOLUTION-DETAIL-VISUAL-PARITY-001
- **Task ID:** SOLUTION-DETAIL-VISUAL-PARITY-001
- **Task Name:** Bring Solution Detail Pages Into Token-Governed Visual Parity
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Bring existing Solution Detail pages into visual parity with the current Home Landing Page and Solutions Landing Page token-governed system while preserving existing page structure and avoiding media/data-model expansion.
- **Allowed Scope:** Visible site version patch bump to `v1.0.127`; token-governed visual parity updates for existing solution detail pages; typography, spacing, shell/panel styling, button styling, section borders/radii, card styling, CTA/footer parity, semantic selector cleanup, and this task-register record.
- **Forbidden Scope:** No two-image sample/media expansion, hardware image field addition, dashboard/app image field addition, media data-model expansion, modal/lightbox implementation, new image assets, image generation, asset replacement, new solution strategy, new solution pages, route changes, navigation changes, Solutions Landing page restructure, Homepage changes except unavoidable shared CSS effects, QR Landing changes, Fit Check behavior changes, Estimate behavior changes, Contact form behavior changes, Support form changes, Planner behavior changes, Our Work changes, HubSpot changes, Stripe/payment changes, Resend changes, Gmail/Workspace changes, scheduling changes, API/runtime behavior changes, Cloudflare config changes, secrets, dependencies, package-lock changes, public prices, supplier costs, BOM values, Stripe product IDs, checkout changes, quote calculation changes, hardware purchasing authorization, customer installation authorization, or unsupported public claims.
- **Target Files:** `src/lib/siteVersion.ts`, `src/pages/SolutionOpportunity.tsx`, `src/index.css`, `src/styles/homeSecurityPremium.css`, `docs/system/master-task-register.md`. Optional files only if inspection proves necessary: `src/styles/wnyhsVisualGovernance.css`, `src/components/homeSecurity/WnyhsMarketingLayout.tsx`, `src/components/homeSecurity/WnyhsPageLayout.tsx`, `src/components/homeSecurity/WnyhsSiteFooter.tsx`.
- **Runtime Systems Affected:** None. Public frontend presentation only; protected runtime systems must remain untouched.
- **Documentation Updates Required:** Add this task-register record and mark DONE after validation.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; version grep for `v1.0.127`; targeted route/source grep confirming four solution slugs preserved; no-public-pricing/payment/product grep on touched public files; forbidden-claim grep on touched source/docs; hardcoded-color grep on touched CSS/source; `npm run build`; safe focused lint/typecheck if quick and available.
- **Exit Criteria:** Visible site version is `v1.0.127`; existing Solution Detail routes remain intact; existing Solution Detail structure is preserved; pages visually align with homepage-derived WNYHS token system; old dark-heavy/legacy visual drift is reduced; no media/data-model expansion, no new images, no modal/lightbox, no routes/nav, no pricing, no unsupported claims, no protected-system changes, no dependencies, and no package-lock changes are introduced; validation passes or unrelated baseline failures are documented; PR targets `main` and is not merged.
- **Dependencies:** PAGE_TOKEN_COMPLIANCE_GATE_REV01, PAGE_TOKEN_COMPLIANCE_TASK_PACK_REV01, OPS003, DESIGN002, DESIGN003, SOLUTION001 page/object standard, current public site version `v1.0.126`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Bumped visible site version to `v1.0.127` and brought the shared Solution Detail implementation closer to the current homepage/Solutions Listing token system using existing WNYHS homepage token variables and shared button/card primitives. Preserved the existing seven-section Solution Detail structure, four live solution routes, hero/sample image fields, media data model, navigation, assets, protected runtime systems, HubSpot, Stripe/payment, dependencies, and package-lock. `npm run build`, focused ESLint for `src/pages/SolutionOpportunity.tsx`, `npm run typecheck:test`, `git diff --check`, version grep, and route/source preservation grep passed. Required pricing/payment/claim/color greps were run; matches are existing CSS/register governance text or existing baseline style-token definitions, not new public pricing/payment behavior, unsupported claims, or newly introduced raw color values.

### DESIGN-TOKEN-SYSTEM-001
- **Task ID:** DESIGN-TOKEN-SYSTEM-001
- **Task Name:** Implement Sitewide Visual Token System and Normalize Public Marketing Pages
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement a governed WNYHS visual token system and normalize public marketing page presentation so shared visual tokens/classes replace scattered legacy dark/blue styling where practical.
- **Allowed Scope:** Visible site version patch bump; add `src/styles/wnyhsVisualGovernance.css`; import it globally; update font loading to Inter plus Manrope; normalize relevant global tokens in `src/index.css`; map WNYHS public marketing CSS and touched public proof surfaces to shared visual primitives; add claim-safe copy corrections on touched surfaces; add DESIGN002 REV02 governance record; update document catalog, markdown manifest, and this task record; run required validation and open PR to `main` without merge.
- **Forbidden Scope:** No new business strategy, invented packages, invented solutions, invented prices, supplier costs, BOM calculations, hardware purchase authorization, public pricing values, Stripe/payment changes, HubSpot changes, Resend changes, Gmail/Workspace changes, Cloudflare config changes, scheduling changes, API/runtime behavior changes, secrets, route changes, navigation redesign, QR Landing redesign, Fit Check behavior changes, Estimate behavior changes, payment/deposit behavior changes, protected-system edits, dependency changes, package-lock changes, deleted routes/components/assets, or hardcoded new colors outside the token system.
- **Target Files:** `index.html`, `src/main.tsx`, `src/index.css`, `src/styles/wnyhsVisualGovernance.css`, `src/styles/homeSecurityPremium.css`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/pages/Packages.tsx`, `src/pages/SolutionOpportunity.tsx`, `src/components/homeSecurity/WnyhsMarketingLayout.tsx`, `src/components/homeSecurity/WnyhsPageLayout.tsx`, `src/components/homeSecurity/WnyhsSiteFooter.tsx`, `src/lib/siteVersion.ts`, `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Public marketing presentation and documentation only; protected runtime systems must remain untouched.
- **Documentation Updates Required:** Add DESIGN002 REV02 governance record if input is available or record missing-source implementation standard; update `docs/DOCUMENT_CATALOG.md`; update `docs/MARKDOWN_MANIFEST.md`; add this bounded task-register record.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; font/token grep; forbidden-claim grep; hardcoded visual debt grep; `npm run build`; safe standard lint/typecheck scripts if applicable; manual local review for `/home-security`, `/packages?vertical=home-security`, `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes` if possible.
- **Exit Criteria:** Site version is `v1.0.121`; WNYHS visual token CSS exists and is globally imported after `src/index.css`; public font loading uses Inter and Manrope; public marketing/homepage/package/solution surfaces use shared WNYHS primitives where practical; claim-risk copy touched by the task is corrected; no public pricing values are added; no catalog, package, hardware, HubSpot, Stripe, scheduling, API/runtime, route, navigation, secret, or Cloudflare changes occur; validation passes or unrelated baseline failures are documented; PR targets `main` without merge.
- **Dependencies:** Prompt-created bounded DESIGN-TOKEN-SYSTEM-001 work order; current context; visual, catalog, solution, claims, offering, package/BOM, brand, public funnel, and repository dispatch governance documents.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added the sitewide WNYHS visual governance CSS primitives, switched public font loading to Inter/Manrope, moved touched public marketing pages toward shared token classes, corrected touched claim-risk copy, recorded DESIGN002 REV02, and preserved protected systems and runtime behavior.

### HOMEPAGE-ASSET-POLISH-001
- **Task ID:** HOMEPAGE-ASSET-POLISH-001
- **Task Name:** Homepage Approved Asset Placement Polish
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Improve the existing `/home-security` homepage presentation by placing approved homepage image assets while preserving the current page structure and funnel behavior.
- **Allowed Scope:** Homepage image placement from `public/images/home-security/homepage/`; listed homepage copy cleanup only; CSS styling needed for correct responsive image scaling; visible site version patch bump; required validation.
- **Forbidden Scope:** No new routes, navigation rewrite, QR Landing changes, Fit Check changes, Quote/Estimate behavior changes, HubSpot changes, Stripe/payment changes, scheduling changes, API/runtime changes, Cloudflare changes, design-system rewrite, solution catalog rewrite, package/category architecture changes, large refactor, unsupported claims, or merge.
- **Target Files:** `docs/system/master-task-register.md`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, approved existing assets under `public/images/home-security/homepage/`.
- **Runtime Systems Affected:** None. Homepage presentation only; protected runtime systems must remain untouched.
- **Documentation Updates Required:** Add this minimal ACTIVE task-register entry before implementation.
- **Validation Required:** `npm run build`; `git diff --check`; `git status`; confirm corrected sump pump asset usage and protected systems untouched.
- **Exit Criteria:** Homepage uses approved hero, category, package, solution, and WNYHS Core assets from `public/images/home-security/homepage/`; corrected `solution-sump-pump-awarenes.png` asset is used for Sump Pump Awareness; listed copy cleanup is applied only if matching text is present; visible site version is bumped; validation passes; PR targets `main` without merge.
- **Dependencies:** Operator confirmation to use `public/images/home-security/homepage/solution-sump-pump-awarenes.png` for the sump pump asset.
- **Operator Decision Required:** Review and merge PR if accepted.

### GOV009
- **Task ID:** GOV009
- **Task Name:** Promote Site Architecture / Visual / Solution Governance Docs
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Adopt, validate, catalog, and promote the eight local governance markdown documents placed in `docs/governance/` as official repository governance and standards references.
- **Allowed Scope:** Docs-only governance promotion; inspect the eight new governance docs; update their status labels when needed; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register; add planning-only follow-up placeholders.
- **Forbidden Scope:** No application/source files, routes, assets, generated images, CSS/components, runtime behavior, Cloudflare, HubSpot, Stripe, Resend, Google Workspace, scheduling, secrets, homepage implementation, QR Landing implementation, category implementation, package implementation, solution implementation, visual-system implementation, asset implementation, or search implementation.
- **Target Files:** `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`, `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`, `docs/governance/MASTER_SOLUTION_CATALOG_V1.md`, `docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`, `docs/governance/SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md`, `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`, `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`, `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only promotion.
- **Documentation Updates Required:** Promote the eight governance docs, add catalog entries, add manifest addendum, record GOV009, and queue planning-only follow-up placeholders.
- **Validation Required:** `git status`; targeted `git diff`; targeted `rg` for required governance/search/content terms; `git diff --check`. No `npm run build` unless application files are changed.
- **Exit Criteria:** All eight docs are inspected and registered; statuses are clear; implementation boundaries remain explicit; no secrets or protected-system authorizations are recorded; follow-up tasks are planning-only; only allowed documentation files change; validation passes; branch is pushed and PR targets `main` without merge.
- **Dependencies:** Prompt-created bounded GOV009 work order, `docs/system/step-current.md`, `docs/governance/AUTHORITY-MAP-REV01.md`, `docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md`, `docs/governance/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`, `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Operator Decision Required:** Review and merge PR if the promoted governance docs and planning placeholders are accepted.
- **Completion Notes:** Promoted eight local governance documents as docs-only official references. Updated status labels to `Working Standard` where appropriate, retained `Approved Governance Context` and `Approved Catalog V1`, removed guardrail-sensitive claim wording from the promoted docs, updated catalog and manifest, queued planning-only follow-up placeholders, and made no implementation, runtime, protected-system, secret, route, source, CSS, asset, or image-generation changes.

### GOV-REPOACCESS-001-B
- **Task ID:** GOV-REPOACCESS-001-B
- **Task Name:** Complete Repository Connector Dispatch Governance Bookkeeping
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Complete documentation bookkeeping for the repo-access dispatcher governance file already added at `docs/system/OPS002_REPOSITORY_CONNECTOR_DISPATCH_STANDARD_REV01.md`.
- **Allowed Scope:** Docs-only bookkeeping; register `docs/system/OPS002_REPOSITORY_CONNECTOR_DISPATCH_STANDARD_REV01.md` in `docs/DOCUMENT_CATALOG.md`; add an OPS002 addendum to `docs/MARKDOWN_MANIFEST.md`; add this completed task record to `docs/system/master-task-register.md`.
- **Forbidden Scope:** No edits to `docs/system/OPS002_REPOSITORY_CONNECTOR_DISPATCH_STANDARD_REV01.md`; no src changes; no CSS changes; no visual implementation; no route changes; no homepage changes; no Solutions page changes; no package/catalog implementation; no pricing implementation; no HubSpot changes; no Stripe/payment changes; no Resend changes; no Gmail/Workspace changes; no Cloudflare config changes; no scheduling changes; no API changes; no runtime behavior changes; no secrets; no assets; no dependency changes; no package-lock changes; no build config changes.
- **Target Files:** `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only bookkeeping.
- **Documentation Updates Required:** Add catalog registration, manifest addendum, and completed task-register record for OPS002 repository connector dispatch governance.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; `rg -n "OPS002|Repository Connector Dispatch|GOV-REPOACCESS-001-B|GitHub connector|repo-aware dispatcher" docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md docs/system/OPS002_REPOSITORY_CONNECTOR_DISPATCH_STANDARD_REV01.md`. No `npm run build` unless application/source files are changed.
- **Exit Criteria:** OPS002 is registered in the document catalog; the markdown manifest includes an OPS002 addendum; this task record is DONE; only target docs bookkeeping files changed; OPS002 source document remains untouched; no source, CSS, route, runtime, API, protected-system, package/catalog implementation, pricing, secrets, assets, dependencies, package-lock, or build-config files changed; validation passes.
- **Dependencies:** Prompt-created bounded GOV-REPOACCESS-001-B work order; existing `docs/system/OPS002_REPOSITORY_CONNECTOR_DISPATCH_STANDARD_REV01.md`; `docs/system/step-current.md`; `docs/DOCUMENT_CATALOG.md`; `docs/MARKDOWN_MANIFEST.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Completed docs-only bookkeeping for OPS002 repository connector dispatch governance. Registered the OPS002 document in the catalog, added the manifest addendum, and recorded this task as DONE without editing the OPS002 source document or any source/runtime/protected-system files.

### HOMEPAGE-REDESIGN-PLANNING-001
- **Task ID:** HOMEPAGE-REDESIGN-PLANNING-001
- **Task Name:** Plan Homepage Redesign From Promoted Governance Docs
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a bounded Homepage redesign planning document using GOV009-promoted governance docs.
- **Allowed Scope:** Planning-only document creation and registration in the document catalog, markdown manifest, and task register.
- **Forbidden Scope:** No Homepage implementation, source changes, CSS/component changes, routes, assets, Search implementation, runtime systems, protected systems, QR Landing implementation, or public-page changes until a separate ACTIVE task authorizes them.
- **Target Files:** `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Create `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`; register it in `docs/DOCUMENT_CATALOG.md` and `docs/MARKDOWN_MANIFEST.md`; mark this task complete in the register.
- **Validation Required:** `git status`; scoped `git diff`; scoped `rg` for Homepage planning terms and implementation boundary language; `git diff --check`.
- **Exit Criteria:** Homepage plan defines purpose, section order, navigation, Search, Hero, Trust Bar, Category Explorer, Featured Packages, Featured Solutions, WNYHS Core, How It Works, Why WNYHS, CTA, footer, visual-system requirements, content source mapping, forbidden scope, implementation readiness checklist, and a follow-up implementation task recommendation without implementing Homepage, Search, QR Landing, runtime, or protected-system changes.
- **Dependencies:** GOV009, `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`, `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`, `docs/governance/MASTER_SOLUTION_CATALOG_V1.md`, `docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`, `docs/governance/SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md`, `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`, `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`, `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`.
- **Operator Decision Required:** None. Activated by explicit bounded planning prompt.
- **Completion Notes:** Completed as docs-only planning in `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`. Follow-up implementation recommendation recorded as HOMEPAGE-REDESIGN-IMPLEMENTATION-001 planning recommendation only; implementation remains unauthorized until a separate active implementation task is approved.

### HOMEPAGE-REDESIGN-IMPLEMENTATION-001
- **Task ID:** HOMEPAGE-REDESIGN-IMPLEMENTATION-001
- **Task Name:** Implement Homepage Redesign From Approved Planning Docs
- **Status:** ACTIVE
- **Type:** Bounded frontend implementation
- **Category:** FUNNEL / UX / FRONTEND
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement the redesigned Homepage only, using the approved Homepage redesign plan and promoted governance standards.
- **Controlling Docs:** `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`, `docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md`, `docs/planning/SEARCH_UX_PLAN_REV01.md`, `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`, `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`, `docs/governance/MASTER_SOLUTION_CATALOG_V1.md`, `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`, `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`, `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`, `docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`.
- **Allowed Scope:** Homepage redesign only. Implement the approved Homepage section order: Navigation, Search Access placeholder or entry point only, Hero, Trust Bar, Category Explorer, Featured Packages, Featured Solutions, WNYHS Core Section, How It Works, Why WNYHS, Primary CTA, and Footer. Use approved categories, approved Solution catalog content, promoted content ownership guidance, existing safe routes, existing components/patterns, and semantic visual tokens where possible.
- **Forbidden Scope:** No QR Landing implementation or QR Landing behavior changes; no Search implementation, indexing, routing, result UI, or search logic; no Category page implementation; no Package page implementation; no Solution page implementation; no backend/runtime changes; no payment, Stripe, scheduling, HubSpot, lead-signal, requestId, QR attribution, API route, Cloudflare, Resend, Google Workspace, environment variable, analytics, protected-system, or secret changes; no asset generation; no image generation; no unrelated route changes; no merge.
- **Target Files:** Existing Homepage frontend, style/content, navigation support, and visible site version files only as required by the implementation. Exact files must be identified by implementation inspection before edits.
- **Runtime Systems Affected:** None. Homepage frontend presentation only; protected runtime systems must remain untouched.
- **Version Bump Required:** Yes. Visible site version must be bumped according to the existing repo convention.
- **Documentation Updates Required:** None unless implementation findings require a bounded task-register completion note after implementation validation.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; `npm run build`; run standard lint/typecheck scripts if `package.json` indicates they are standard validation scripts and they are applicable after implementation.
- **PR Target:** `main`
- **Exit Criteria:** Homepage implements the approved section order; Search access is present only as a placeholder or entry point without Search functionality; approved Categories and approved Solution catalog content are used; Homepage presents Category before Package before Solution; visual implementation follows Light Theme primary, charcoal/black structural contrast, antique gold accent, premium residential feel, existing WNYHS shield/eagle logo preservation, semantic tokens where possible, readable fonts, and mobile-first responsive behavior; visible site version is bumped; QR Landing is untouched; Search functionality is not implemented; Category, Package, and Solution pages are not implemented; protected systems are untouched; validation passes; branch is pushed and PR targets `main` without merge.
- **Dependencies:** HOMEPAGE-REDESIGN-PLANNING-001, SITE-CONTENT-OWNER-ROUTING-001, SEARCH-UX-PLANNING-001, GOV009, and listed controlling docs.
- **Operator Decision Required:** Review and merge the implementation PR if validation passes and the Homepage-only implementation is accepted.
- **Activation Notes:** Activated by TASK-AUTH-001 as a docs-only task-register authorization. This entry authorizes the future bounded Homepage redesign implementation only; TASK-AUTH-001 did not implement Homepage, QR Landing, Search, Category pages, Package pages, Solution pages, runtime behavior, protected systems, assets, or routes.

### QRLANDING-REDESIGN-PLANNING-001
- **Task ID:** QRLANDING-REDESIGN-PLANNING-001
- **Task Name:** Plan QR Landing Redesign From Promoted Governance Docs
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a bounded QR Landing redesign planning document using GOV009-promoted governance docs, the Homepage planning artifact, and QR runtime contracts.
- **Allowed Scope:** Planning-only document creation and registration in the document catalog, markdown manifest, and task register.
- **Forbidden Scope:** No QR Landing implementation, Homepage implementation, route changes, source changes, CSS/component changes, assets, Search implementation, QR attribution behavior changes, requestId behavior changes, lead-signal changes, HubSpot changes, Stripe changes, scheduling changes, analytics changes, runtime systems, protected systems, or public-page changes until a separate ACTIVE task authorizes them.
- **Target Files:** `docs/planning/QRLANDING_REDESIGN_PLAN_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Create `docs/planning/QRLANDING_REDESIGN_PLAN_REV01.md`; register it in `docs/DOCUMENT_CATALOG.md` and `docs/MARKDOWN_MANIFEST.md`; mark this task complete in the register.
- **Validation Required:** `git status`; scoped `git diff`; scoped `rg` for QR Landing planning terms, attribution terms, requestId, lead-signal, and implementation boundary language; `git diff --check`.
- **Exit Criteria:** QR Landing plan defines purpose, section order, navigation, Search, scan acknowledgment, Hero, Trust Bar, Popular Solutions, WNYHS Core, Why People Choose WNYHS, CTA, footer, visual-system requirements, content source mapping, QR attribution preservation, forbidden scope, implementation readiness checklist, and a follow-up implementation task recommendation without implementing QR Landing, Homepage, Search, runtime, attribution, requestId, lead-signal, or protected-system changes.
- **Dependencies:** GOV009, HOMEPAGE-REDESIGN-PLANNING-001, `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`, `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`, `docs/governance/MASTER_SOLUTION_CATALOG_V1.md`, `docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`, `docs/governance/SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md`, `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`, `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`, `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`, `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`, `docs/runtime/qrlanding_runtime.md`, `docs/runtime/request_id_contract.md`, `docs/runtime/lead_signal_contract.md`, `docs/runtime/runtime_ownership_map.md`.
- **Operator Decision Required:** None. Activated by explicit bounded planning prompt.
- **Completion Notes:** Completed as docs-only planning in `docs/planning/QRLANDING_REDESIGN_PLAN_REV01.md`. Follow-up implementation recommendation recorded as QRLANDING-REDESIGN-IMPLEMENTATION-001 planning recommendation only; implementation and QR attribution/runtime behavior changes remain unauthorized until a separate active implementation task is approved.

### SEARCH-UX-PLANNING-001
- **Task ID:** SEARCH-UX-PLANNING-001
- **Task Name:** Plan Public Search UX From Promoted Governance Docs
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a bounded public Search UX planning document using GOV009-promoted governance docs and existing Homepage / QR Landing planning docs.
- **Allowed Scope:** Planning-only document creation and registration in the document catalog, markdown manifest, and task register.
- **Forbidden Scope:** No Search implementation, indexing implementation, source changes, route changes, CSS/component changes, runtime behavior, protected systems, public-page changes, Homepage implementation, QR Landing implementation, QR attribution behavior changes, API changes, analytics changes, or protected-system changes until a separate ACTIVE task authorizes them.
- **Target Files:** `docs/planning/SEARCH_UX_PLAN_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Create `docs/planning/SEARCH_UX_PLAN_REV01.md`; register it in `docs/DOCUMENT_CATALOG.md` and `docs/MARKDOWN_MANIFEST.md`; mark this task complete in the register.
- **Validation Required:** `git status`; scoped `git diff`; scoped `rg` for Search planning terms, mapping examples, Public Information, implementation boundary language, and authorization boundaries; `git diff --check`.
- **Exit Criteria:** Search UX plan defines purpose, scope, result types, placement, behavior, ranking recommendations, metadata requirements, Category / Package / Solution / Public Information mapping, Homepage Search requirements, QR Landing Search requirements, mobile/accessibility requirements, forbidden result types, forbidden implementation scope, implementation readiness checklist, and a follow-up implementation task recommendation without implementing Search, indexing, Homepage, QR Landing, runtime, attribution, API, or protected-system changes.
- **Dependencies:** GOV009, HOMEPAGE-REDESIGN-PLANNING-001, QRLANDING-REDESIGN-PLANNING-001, `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`, `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`, `docs/governance/MASTER_SOLUTION_CATALOG_V1.md`, `docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`, `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`, `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`, `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`, `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`, `docs/planning/QRLANDING_REDESIGN_PLAN_REV01.md`.
- **Operator Decision Required:** None. Activated by explicit bounded planning prompt.
- **Completion Notes:** Completed as docs-only planning in `docs/planning/SEARCH_UX_PLAN_REV01.md`. Follow-up implementation recommendation recorded as SEARCH-UX-IMPLEMENTATION-001 planning recommendation only; Search implementation, indexing, Homepage implementation, QR Landing implementation, QR attribution behavior changes, runtime, API, and protected-system changes remain unauthorized until a separate active implementation task is approved.

### SITE-CONTENT-OWNER-ROUTING-001
- **Task ID:** SITE-CONTENT-OWNER-ROUTING-001
- **Task Name:** Plan Site Content Owner Routing From Promoted Governance Docs
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the authoritative docs-only content ownership and routing plan that determines where Homepage, QR Landing, Category, Package, Solution, Search, Public Information, media, Fit Check, and Catalog content should live within the repository.
- **Allowed Scope:** Planning-only documentation; create `docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register only.
- **Forbidden Scope:** No implementation work, source changes, routes, assets, CSS/components, runtime systems, protected systems, public-page changes, Search implementation, Homepage implementation, QR Landing implementation, Category implementation, Package implementation, Solution implementation, Fit Check implementation, Catalog generation, catalog expansion, content migration, secrets, or merge.
- **Target Files:** `docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add the content owner-routing plan, document catalog entry, markdown manifest addendum, and register completion record.
- **Validation Required:** `git status`; `git diff -- docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `rg -n "Solution|Package|Category|Homepage|QR Landing|Search|Fit Check|Catalog|ownership|source of truth|duplicate|inheritance|implementation boundary" docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --check`.
- **Exit Criteria:** Content ownership philosophy, source hierarchy, Homepage ownership, QR Landing ownership, Category ownership, Package ownership, Solution ownership, Public Information ownership, Search indexing sources, image/media ownership, Fit Check guidance, Catalog guidance, duplication prevention, recommended repository content structure, implementation readiness checklist, and follow-up implementation recommendation are documented without implementation or forbidden file changes.
- **Dependencies:** GOV009, HOMEPAGE-REDESIGN-PLANNING-001, QRLANDING-REDESIGN-PLANNING-001, SEARCH-UX-PLANNING-001, and all eight GOV009-promoted governance docs.
- **Operator Decision Required:** None for this planning task; future implementation requires a separate active task.
- **Completion Notes:** Created `docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md` as a docs-only content ownership and routing plan. The plan reinforces Solution as the source of truth, defines Package and Category reference ownership, requires Homepage and QR Landing to consume existing content instead of duplicating catalogs, limits Search to approved public content sources, and documents Fit Check and Catalog generation guidance. No source/app/runtime/protected-system files, routes, assets, CSS/components, QR attribution behavior, HubSpot, Stripe, Cloudflare, Resend, Google Workspace, scheduling, secrets, or implementation behavior were changed.

### RUNTIME-AUDIT-001
- **Task ID:** RUNTIME-AUDIT-001
- **Task Name:** Cloudflare Current Config Inventory
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a read-only inventory of current Cloudflare configuration relevant to runtime ownership, DNS, deployment, Pages/Workers, environment bindings, email routing, and security posture.
- **Allowed Scope:** Documentation-only inventory in `docs/runtime/cloudflare_current_config_inventory_rev01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register; record non-secret repo-documented facts; mark dashboard/API-only areas as `Not inspected` where Cloudflare access or operator export is unavailable.
- **Forbidden Scope:** No Cloudflare configuration changes, DNS changes, deployment setting changes, Worker changes, Pages changes, route changes, code changes, runtime behavior changes, secret values, Stripe changes, HubSpot changes, Resend changes, Google Workspace changes, or new runtime contract creation.
- **Target Files:** `docs/runtime/cloudflare_current_config_inventory_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Inventory only.
- **Documentation Updates Required:** Add Cloudflare current config inventory document, catalog entry, manifest addendum, and task-register completion record.
- **Validation Required:** `git status`; `git diff -- docs/runtime/cloudflare_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `rg -n "Cloudflare|Current Config Inventory|Not inspected|No configuration changes|No secret values" docs/runtime/cloudflare_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --check`.
- **Exit Criteria:** Inventory records repo-documented Cloudflare runtime facts, identifies live dashboard/API-only gaps as `Not inspected`, records no secret values, and confirms no Cloudflare, DNS, deployment, Worker, Pages, route, code, runtime, Stripe, HubSpot, Resend, or Google Workspace changes.
- **Dependencies:** `docs/governance/NEXT_GOVERNANCE_TASK_QUEUE_REV01.md`, `docs/runtime/runtime_ownership_map.md`, `docs/runtime/cloudflare_env.md`, `docs/runtime/cloudflare_email_routing.md`, `docs/runtime/deployment_validation.md`, `docs/runtime/protected_runtime_contract.md`.
- **Operator Decision Required:** Provide Cloudflare dashboard/API export or screenshots before any future live configuration verification task.
- **Completion Notes:** Created the docs-only Cloudflare current config inventory. Live Cloudflare dashboard/API, DNS, Pages settings, Email Routing aliases, security controls, deployment logs, and analytics were not inspected because no Cloudflare credentials or operator export were available. No configuration changes and No secret values.

### RUNTIME-AUDIT-002
- **Task ID:** RUNTIME-AUDIT-002
- **Task Name:** HubSpot Current Config Inventory
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a read-only inventory of current HubSpot configuration relevant to CRM ownership, contact/deal properties, pipeline/stage IDs, forms, lists, workflows, and API integration posture.
- **Allowed Scope:** Documentation-only inventory in `docs/runtime/hubspot_current_config_inventory_rev01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register; record non-secret repo-documented facts; mark HubSpot dashboard/API-only areas as `Not inspected` where HubSpot access or operator export is unavailable; preserve `/api/lead-signal` as the canonical boundary under HubSpot REV03.
- **Forbidden Scope:** No HubSpot schema changes, property changes, pipeline changes, stage changes, workflow changes, direct frontend/client write path to HubSpot, `/api/lead-signal` bypass, code changes, runtime behavior changes, secret values, Stripe changes, Cloudflare changes, Resend changes, Google Workspace changes, or new runtime contract creation.
- **Target Files:** `docs/runtime/hubspot_current_config_inventory_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Inventory only.
- **Documentation Updates Required:** Add HubSpot current config inventory document, catalog entry, manifest addendum, and task-register completion record.
- **Validation Required:** `git status`; `git diff -- docs/runtime/hubspot_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `rg -n "HubSpot|Current Config Inventory|REV03|/api/lead-signal|Not inspected|No configuration changes|No secret values" docs/runtime/hubspot_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --check`.
- **Exit Criteria:** Inventory records repo-documented HubSpot object model, property names, pipeline/stage IDs, forms/lists/workflows status, integration variable names without values, and API-layer touchpoints; identifies live HubSpot dashboard/API-only gaps as `Not inspected`; records no secret values; preserves `/api/lead-signal`; and confirms no HubSpot configuration, schema, property, pipeline, stage, workflow, code, runtime, Stripe, Cloudflare, Resend, or Google Workspace changes.
- **Dependencies:** `docs/governance/NEXT_GOVERNANCE_TASK_QUEUE_REV01.md`, `docs/crm/hubspot/hubspot_kb_rev03.md`, `docs/runtime/runtime_ownership_map.md`, `docs/runtime/hubspot_properties.md`, `docs/runtime/hubspot_sync_contract.md`, `docs/runtime/lead_signal_contract.md`, `docs/runtime/request_id_contract.md`, `docs/runtime/protected_runtime_contract.md`.
- **Operator Decision Required:** Provide HubSpot dashboard/API export or screenshots before any future live HubSpot configuration verification task.
- **Completion Notes:** Created the docs-only HubSpot Current Config Inventory aligned to HubSpot REV03. Live HubSpot account/portal identity, property schema details, pipeline dashboard, forms, lists, workflows, token scopes, audit logs, and API call history were Not inspected because no HubSpot credentials or operator export were available. `/api/lead-signal` remains the canonical boundary. No configuration changes and No secret values.

### RUNTIME-AUDIT-003
- **Task ID:** RUNTIME-AUDIT-003
- **Task Name:** Resend Current Config Inventory
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a read-only inventory of current Resend configuration relevant to WNY Home Security email sending, verified domains, sender identities, API key naming, webhook posture, and operator/customer email boundaries.
- **Allowed Scope:** Documentation-only inventory in `docs/runtime/resend_current_config_inventory_rev01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register; record non-secret repo-documented facts; mark Resend dashboard/API-only areas as `Not inspected` where Resend access or operator export is unavailable.
- **Forbidden Scope:** No Resend configuration changes, domain changes, sender changes, DNS changes, webhook changes, API key changes, email runtime behavior changes, code changes, secret values, Cloudflare changes, HubSpot changes, Stripe changes, Google Workspace changes, or new runtime contract creation.
- **Target Files:** `docs/runtime/resend_current_config_inventory_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Inventory only.
- **Documentation Updates Required:** Add Resend current config inventory document, catalog entry, manifest addendum, and task-register completion record.
- **Validation Required:** `git status`; `git diff -- docs/runtime/resend_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `rg -n "Resend|Current Config Inventory|Not inspected|No configuration changes|No secret values" docs/runtime/resend_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --check`.
- **Exit Criteria:** Inventory records repo-documented Resend domains, sender identity references, API key/env variable names without values, webhook posture, suppression/bounce posture, and email ownership notes; identifies live Resend dashboard/API-only gaps as `Not inspected`; records no secret values; and confirms no Resend configuration, domain, sender, DNS, webhook, API key, email runtime, code, Cloudflare, HubSpot, Stripe, or Google Workspace changes.
- **Dependencies:** `docs/governance/NEXT_GOVERNANCE_TASK_QUEUE_REV01.md`, `docs/runtime/runtime_ownership_map.md`, `docs/runtime/resend_runtime.md`, `docs/runtime/cloudflare_email_routing.md`, `docs/runtime/protected_runtime_contract.md`, `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`.
- **Operator Decision Required:** Provide Resend dashboard/API export or screenshots before any future live Resend configuration verification task.
- **Completion Notes:** Created the docs-only Resend Current Config Inventory. Live Resend account identity, verified domains, sender verification status, API key labels/scopes/status, webhooks, suppression/bounce settings, and delivery logs were Not inspected because no Resend credentials or operator export were available. No configuration changes and No secret values.

### RUNTIME-AUDIT-004
- **Task ID:** RUNTIME-AUDIT-004
- **Task Name:** Stripe Current Config Inventory
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a read-only inventory of current Stripe configuration relevant to WNY Home Security payment ownership, products/prices, checkout posture, webhook endpoints, deposit/payment verification, and secret-management boundaries.
- **Allowed Scope:** Documentation-only inventory in `docs/runtime/stripe_current_config_inventory_rev01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register; record non-secret repo-documented facts; mark Stripe dashboard/API-only areas as `Not inspected` where Stripe access or operator export is unavailable; reaffirm server-side verification and webhook authority boundaries.
- **Forbidden Scope:** No Stripe configuration changes, product changes, price changes, checkout changes, payment link changes, webhook changes, tax changes, payout changes, account changes, client-side payment confirmation logic, payment success authority from redirect URLs, code changes, runtime behavior changes, secret values, HubSpot changes, Cloudflare changes, Resend changes, Google Workspace changes, or new runtime contract creation.
- **Target Files:** `docs/runtime/stripe_current_config_inventory_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Inventory only.
- **Documentation Updates Required:** Add Stripe current config inventory document, catalog entry, manifest addendum, and task-register completion record.
- **Validation Required:** `git status`; `git diff -- docs/runtime/stripe_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `rg -n "Stripe|Current Config Inventory|webhook|server-side|Not inspected|No configuration changes|No secret values" docs/runtime/stripe_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --check`.
- **Exit Criteria:** Inventory records repo-documented Stripe account-mode gaps, product/price posture, checkout settings, webhook endpoint URLs, webhook event names, payment verification posture, and environment variable names without values; identifies live Stripe dashboard/API-only gaps as `Not inspected`; records no secret values; confirms No configuration changes; preserves webhook and server-side verification authority boundaries; confirms redirect URLs were not treated as payment authority; and confirms no Stripe configuration, product, price, checkout, payment link, webhook, tax, payout, account, code, runtime, HubSpot, Cloudflare, Resend, or Google Workspace changes.
- **Dependencies:** `docs/governance/NEXT_GOVERNANCE_TASK_QUEUE_REV01.md`, `docs/runtime/runtime_ownership_map.md`, `docs/runtime/stripe_runtime.md`, `docs/runtime/protected_runtime_contract.md`.
- **Operator Decision Required:** Provide Stripe dashboard/API export or screenshots before any future live Stripe configuration verification task.
- **Completion Notes:** Created the docs-only Stripe Current Config Inventory. Live Stripe account identity, account mode, live/test status, products, prices, payment links, checkout dashboard settings, webhook dashboard settings, subscribed webhook events, delivery logs, API key labels/scopes/status, tax settings, payout settings, and production payment/session histories were Not inspected because no Stripe credentials or operator export were available. Payment success was not inferred from redirect URLs. Server-side verification and webhook authority boundaries were preserved. No configuration changes and No secret values.

### RUNTIME-AUDIT-005
- **Task ID:** RUNTIME-AUDIT-005
- **Task Name:** Google Workspace Current Config Inventory
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a read-only inventory of current Google Workspace configuration relevant to WNY Home Security domain identity, email aliases/groups, calendar ownership, account roles, security posture, and integration boundaries.
- **Allowed Scope:** Documentation-only inventory in `docs/runtime/google_workspace_current_config_inventory_rev01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register; record non-secret repo-documented facts; mark Google Admin/Workspace-only areas as `Not inspected` where Google Workspace access or operator export is unavailable; confirm no scheduling or email routing behavior changed.
- **Forbidden Scope:** No Google Workspace configuration changes, user changes, group changes, alias changes, calendar changes, routing changes, security setting changes, scheduling behavior changes, email routing changes, code changes, runtime behavior changes, secret values, Cloudflare changes, HubSpot changes, Stripe changes, Resend changes, or new runtime contract creation.
- **Target Files:** `docs/runtime/google_workspace_current_config_inventory_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Inventory only.
- **Documentation Updates Required:** Add Google Workspace current config inventory document, catalog entry, manifest addendum, and task-register completion record.
- **Validation Required:** `git status`; `git diff -- docs/runtime/google_workspace_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `rg -n "Google Workspace|Current Config Inventory|Calendar|Not inspected|No configuration changes|No secret values" docs/runtime/google_workspace_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --check`.
- **Exit Criteria:** Inventory records repo-documented Google Workspace domain references, user/account role gaps, group/alias references, Calendar ownership posture, integration posture, retention/security gaps, and unknown areas; identifies live Google Admin/Workspace-only gaps as `Not inspected`; records no secret values; confirms No configuration changes; confirms no scheduling or email routing behavior changed; and confirms no Google Workspace, user, group, alias, calendar, routing, security, scheduling, email routing, code, runtime, Cloudflare, HubSpot, Stripe, or Resend changes.
- **Dependencies:** `docs/governance/NEXT_GOVERNANCE_TASK_QUEUE_REV01.md`, `docs/runtime/runtime_ownership_map.md`, `docs/runtime/google_calendar_runtime.md`, `docs/runtime/scheduling_ownership.md`, `docs/runtime/scheduling_future_model.md`, `docs/runtime/cloudflare_email_routing.md`, `docs/runtime/protected_runtime_contract.md`.
- **Operator Decision Required:** Provide Google Admin/Workspace export or screenshots before any future live Google Workspace configuration verification task.
- **Completion Notes:** Created the docs-only Google Workspace Current Config Inventory. Live Google Workspace domain identity, users, account roles, admin roles, groups, aliases, Gmail routing, calendar ownership/sharing, OAuth app/API posture, retention, Vault, security controls, and audit logs were Not inspected because no Google Admin access, Google Workspace export, Google Calendar admin export, OAuth console export, operator screenshots, or read-only administrative credentials were available. No scheduling or email routing behavior changed. No configuration changes and No secret values.

### SOLUTIONS-LANDING-003
- **Task ID:** SOLUTIONS-LANDING-003
- **Task Name:** Add Visuals + Complete Solution Category Browse List
- **Status:** PARTIAL
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Polish the existing nav-linked Solutions landing page at `/packages?vertical=home-security` by adding existing approved visuals to the three premier solution cards and completing the category browse list for customer window-shopping.
- **Allowed Scope:** Update the existing home-security branch of `src/pages/Packages.tsx`; update scoped Solutions landing page CSS in `src/index.css`; bump visible site version in `src/lib/siteVersion.ts`; preserve existing route structure and navigation; use only existing image files with claim-safe alt text; update this task-register lifecycle entry.
- **Forbidden Scope:** No new `/solutions` route, route changes, navigation changes, Stripe changes, HubSpot changes, Scheduling/calendar changes, Email/Resend changes, runtime behavior changes, pricing logic changes, image generation, image file changes, individual solution-page changes, unrelated page edits, unrelated CSS changes, hardcoded brand colors outside semantic tokens, unsupported claims, fake proof, fear-based framing, or customer-facing use of `monitoring`/`monitored` terminology.
- **Target Files:** `docs/system/master-task-register.md`, `src/pages/Packages.tsx`, `src/index.css`, `src/lib/siteVersion.ts`.
- **Runtime Systems Affected:** None. Public Solutions landing page presentation only.
- **Documentation Updates Required:** Add/promote SOLUTIONS-LANDING-003 as `ACTIVE` for this run and mark `DONE` only after build passes and manual visual review notes are included.
- **Validation Required:** `git status`; `git diff --check`; `git diff --stat`; targeted `rg` for required Solutions visual/browse labels and old package/restricted terms in `src` and `docs`; `npm run build`; focused ESLint for `src/pages/Packages.tsx`; manual review of `/packages?vertical=home-security` if browser review is available.
- **Exit Criteria:** `/packages?vertical=home-security` preserves the SOLUTIONS-LANDING-002 flow; Home Security, Home Automation, and Aging In Place premier cards each use existing visuals with claim-safe alt text; Browse Our Solutions By Category includes Family Awareness, Vacation Homes, Package Protection, Driveway Awareness, Smart Entry, Water Protection, Smart Lighting, Garage Control, Energy Awareness, Senior Safety, Caregiver Awareness, and Daily Activity Awareness; live solution links route to the four existing solution pages; non-live items route only to valid Fit Check/Estimate paths; no protected systems, pricing logic, routes, nav, images, individual solution pages, or unrelated pages are changed; validation passes and any manual-review limitation is documented.
- **Dependencies:** SOLUTIONS-LANDING-002, DESIGN001 REV01, SOLUTION001 REV02, existing `/packages?vertical=home-security` page, existing four solution detail routes, existing approved image assets, bounded operator prompt approval, and CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01.
- **Operator Decision Required:** Manual visual review before merge if browser review cannot be completed by Codex.
- **Partial Completion Notes:** Implemented the existing `/packages?vertical=home-security` Solutions landing page polish with visuals for the three premier cards, the complete requested category browse list, valid live solution links, valid Fit Check routing for planning topics, and visible version bump to `v1.0.118`. Build and focused ESLint passed, and local HTTP checks returned 200 for the target page, four live solution routes, and reused image assets. Manual visual review is still required before merge because the in-app browser surface was unavailable in this session.

### SOLUTIONS-LANDING-002
- **Task ID:** SOLUTIONS-LANDING-002
- **Task Name:** Rebuild Solutions Landing Page As Storefront + Browsing Hub
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Correct the existing nav-linked Solutions landing page rendered at `/packages?vertical=home-security` so it functions as a storefront and browsing hub for homeowner-focused WNYHS solution families instead of an old package/pricing page.
- **Allowed Scope:** Update the existing home-security branch of `src/pages/Packages.tsx`; update scoped Solutions landing page CSS in `src/index.css`; bump visible site version in `src/lib/siteVersion.ts`; preserve existing route structure and navigation; use claim-safe awareness terminology required by repository guardrails; add/update this task-register lifecycle entry.
- **Forbidden Scope:** No new `/solutions` route, route changes, navigation changes, Stripe changes, HubSpot changes, Scheduling/calendar changes, Email/Resend changes, runtime behavior changes, pricing logic changes, image generation, image file changes, individual solution-page changes, unrelated page edits, unrelated CSS changes, hardcoded brand colors outside semantic tokens, unsupported claims, fake proof, fear-based framing, or customer-facing use of `monitoring`/`monitored` terminology.
- **Target Files:** `docs/system/master-task-register.md`, `src/pages/Packages.tsx`, `src/index.css`, `src/lib/siteVersion.ts`.
- **Runtime Systems Affected:** None. Public Solutions landing page presentation only.
- **Documentation Updates Required:** Add/promote SOLUTIONS-LANDING-002 as `ACTIVE` for this run and mark `DONE` only after build passes and manual visual review notes are included.
- **Validation Required:** `git status`; `git diff --check`; `git diff --stat`; targeted `rg` for required Solutions storefront labels and old package terms in `src` and `docs`; `npm run build`; focused ESLint for `src/pages/Packages.tsx`; manual review of `/packages?vertical=home-security` if browser review is available.
- **Exit Criteria:** `/packages?vertical=home-security` keeps the existing hero direction and clear Fit Check/Estimate CTAs; the first major content section is exactly three premium cards for Home Security, Home Automation, and Aging In Place; old Essential Awareness/Balanced Home Coverage/Expanded Property Coverage/Bronze/Silver/Gold/pricing-card framing is removed from the home-security landing page; Browse Our Solutions By Category appears below the premier cards with Home Security, Home Automation, and Aging In Place categories; live links route to Senior Safety, Water Protection, Family Awareness, and Vacation Homes; final CTA routes to Fit Check and Estimate; no protected systems, pricing logic, routes, nav, images, or unrelated pages are changed; validation passes and any manual-review limitation is documented.
- **Dependencies:** DESIGN001 REV01, SOLUTION001 REV02, existing `/packages?vertical=home-security` page, existing four solution detail routes, bounded operator prompt approval, and CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01.
- **Operator Decision Required:** Manual visual review before merge if browser review cannot be completed by Codex.

### SOLUTIONS-LANDING-001
- **Task ID:** SOLUTIONS-LANDING-001
- **Task Name:** Rework Solutions Landing Page Around Signature Categories
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Rework the existing Solutions landing page rendered at `/packages?vertical=home-security` so it introduces WNYHS through three premier/signature categories before routing visitors into the existing solution detail pages and Fit Check/Estimate paths.
- **Allowed Scope:** Update the existing home-security branch of `src/pages/Packages.tsx`; update scoped Solutions landing page CSS in `src/index.css`; bump visible site version in `src/lib/siteVersion.ts`; preserve existing route structure and navigation; add/update this task-register lifecycle entry.
- **Forbidden Scope:** No route changes, navigation changes, Stripe changes, HubSpot changes, Scheduling/calendar changes, Email/Resend changes, runtime behavior changes, pricing changes, image generation, new image files, individual solution-page image replacement, unrelated page edits, unrelated CSS changes, hardcoded brand colors outside semantic tokens, unsupported claims, fake proof, fear-based framing, or destructive cleanup outside this page scope.
- **Target Files:** `docs/system/master-task-register.md`, `src/pages/Packages.tsx`, `src/index.css`, `src/lib/siteVersion.ts`.
- **Runtime Systems Affected:** None. Public Solutions landing page presentation only.
- **Documentation Updates Required:** Add/promote SOLUTIONS-LANDING-001 as `ACTIVE` for this run and mark `DONE` only after validation and manual review requirements are satisfied.
- **Validation Required:** `git status`; `git diff --check`; `git diff --stat`; targeted `rg` for required Solutions landing labels in `src` and `docs`; `npm run build`; existing lint/typecheck scripts as appropriate; manual review of `/packages?vertical=home-security` for desktop/mobile layout, CTA/link behavior, and no unrelated page drift.
- **Exit Criteria:** `/packages?vertical=home-security` keeps the existing hero direction and clear Fit Check/Estimate CTAs; the first major cards are Home Security, Home Automation, and Aging In Place; Common Homeowner Situations links to Senior Safety, Water Protection, Family Awareness, and Vacation Homes; secondary/future ideas are lower priority and route only to Fit Check/Estimate where no detail page exists; no protected systems, pricing, routes, nav, images, or unrelated pages are changed; validation passes and any manual-review limitation is documented.
- **Dependencies:** DESIGN001 REV01, SOLUTION001 REV02, existing `/packages?vertical=home-security` page, existing four solution detail routes, bounded operator prompt approval, and CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01.
- **Operator Decision Required:** Manual visual review before merge.
### IMAGE002-B
- **Task ID:** IMAGE002-B
- **Task Name:** Wire Replacement Solution Page Images
- **Status:** ACTIVE
- **Category:** FUNNEL / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Wire the committed replacement solution-page images to the four existing solution routes while preserving SOLUTION001 REV02 and DESIGN001 visual standards.
- **Allowed Scope:** Inspect and reconcile solution image asset paths; use `/public/images/home-security/solutions` as the canonical solution-image folder when aligned with SOLUTION001 REV02 and current code; replace canonical copies with the operator-provided replacement files from `public/images/solutions` if needed; remove only duplicate tracked replacement copies from the non-canonical folder after the canonical copies are preserved; update the shared solution page implementation and scoped solution image CSS if needed; bump the visible site version; validate desktop, tablet, and mobile rendering for `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes`.
- **Forbidden Scope:** No Stripe changes, HubSpot changes, Scheduling/calendar changes, Email/Resend changes, runtime behavior changes, pricing changes, route changes, global navigation changes, unrelated page redesign, unrelated CSS changes, semantic-token changes, hardcoded colors, unsupported claims, copy rewrites except alt text if necessary, or destructive cleanup outside duplicate image-path cleanup needed for this task.
- **Target Files:** `docs/system/master-task-register.md`, `src/pages/SolutionOpportunity.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `public/images/home-security/solutions/*.png`, duplicate tracked `public/images/solutions/solutions-*-hero.png` and `public/images/solutions/solutions-*-sample.png` files only when preserved in the canonical folder first.
- **Runtime Systems Affected:** None. Public solution-page presentation and static assets only.
- **Documentation Updates Required:** Add/promote IMAGE002-B as `ACTIVE` for this run and mark it `DONE` only after successful validation.
- **Validation Required:** `git status`; `git diff --check`; `git diff --stat`; `rg -n "solutions-aging|solutions-water|solutions-awareness|solutions-vacation" src public docs`; `npm run build`; available lint/typecheck scripts as appropriate; local dev-server visual checks for all four solution routes at desktop, tablet/narrow, and mobile widths.
- **Exit Criteria:** All four solution routes use the operator-provided replacement hero and sample files from the canonical image folder; duplicate tracked replacement copies are avoided; hero and sample images render without broken paths, distortion, or critical cropping; mobile layout preserves the main subject and awareness panel; no protected systems, pricing, routes, or unrelated pages are changed; validation passes or any unrelated baseline issue is documented.
- **Dependencies:** SOLUTION001 REV02, DESIGN001 REV01, existing four solution routes, committed replacement image assets, bounded operator prompt approval, and CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01.
- **Operator Decision Required:** PR review and visual approval before merge.

### SOLUTION001-B
- **Task ID:** SOLUTION001-B
- **Task Name:** Add Solution Image Standard To Solution Page Governance
- **Status:** DONE
- **Category:** GOV / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Update the WNYHS Solution Page Standard to formally include the approved solution image system for `solution-hero-image` and `solution-sample-image`.
- **Allowed Scope:** Documentation-only governance update; create `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md` from the existing REV01 standard; define hero image, sample image, awareness-panel language, image relationship, claims guardrails, naming, and storage standards; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register.
- **Forbidden Scope:** No source code changes, React/TSX changes, CSS changes, image generation, image file changes, route changes, navigation changes, runtime contract changes, Stripe changes, HubSpot changes, Scheduling/calendar changes, Email/Resend changes, environment variable changes, secrets, pricing/business-rule changes, semantic-token changes, unsupported claims, fake customer proof, or implementation work.
- **Target Files:** `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add/promote SOLUTION001-B as `ACTIVE` for this run; create/register REV02; update catalog and manifest; mark SOLUTION001-B `DONE` only after successful validation.
- **Validation Required:** `git diff --check`; targeted `rg` checks for `SOLUTION001`, `solution-hero-image`, `solution-sample-image`, and `Solution Image System Standard`; protected-system/source drift check; `npm run build` if required by repo convention.
- **Exit Criteria:** REV02 exists or the standard is clearly revised to REV02; the image standard clearly separates hero and sample image purposes; claims guardrails and naming/storage rules are documented; catalog/manifest/register are updated; only docs/index files changed; no protected systems, source, CSS, route, image, pricing, or business-rule files changed; validation passes or unrelated baseline failures are documented.
- **Dependencies:** SOLUTION001-A completion, IMAGE001-A completion or approved image direction, current bounded operator prompt, and CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 governance allowance for bounded documentation tasks.
- **Operator Decision Required:** Separate follow-up approval is required before generating replacement production images or wiring any new image assets into the site.
- **Completion Notes:** Added SOLUTION001-B to the Active Tasks section for this bounded run and marked it `DONE` after successful validation. Created and registered `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md` as the current solution-page standard. REV02 adds the approved image system for `solution-hero-image` and `solution-sample-image`, including hero outcome/lifestyle rules, sample scenario + relevant hardware + awareness-panel rules, plain-language awareness-panel examples, image relationship rules, claims guardrails, illustrative-only/alt-text requirements, and naming/storage guidance for `/public/images/home-security/solutions`. Updated `docs/DOCUMENT_CATALOG.md` and `docs/MARKDOWN_MANIFEST.md`. No source, CSS, image, route, runtime, Stripe, HubSpot, Scheduling, Email/Resend, environment, pricing, or business-rule files were modified. `git diff --check`, targeted traceability `rg`, protected-system/source drift checks, and `npm run build` passed.

### IMAGE001-A
- **Task ID:** IMAGE001-A
- **Task Name:** Wire Solution Images Into Solution Pages
- **Status:** DONE
- **Category:** FUNNEL / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add the approved local solution hero and sample images to the four existing solution opportunity pages while preserving the SOLUTION001 structure and DESIGN001 visual system.
- **Allowed Scope:** Update only `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes` through the shared solution page component and scoped solution-page CSS; place one hero image and one Example Scenario supporting image per page; copy approved local image files into `public/images/home-security/solutions` if required for the requested public URL mapping; bump visible site version; update this task-register lifecycle entry.
- **Forbidden Scope:** No Homepage changes, Packages page changes, QR Landing changes, Support page changes, Our Work page changes, new routes, global navigation changes, semantic token definition changes, HubSpot changes, Stripe changes, Scheduling changes, Email/Resend changes, runtime contract changes, environment variable changes, secrets, pricing/business-rule changes, unsupported claims, fake social proof, fake customer stories, fake project claims, or broad copy rewrites.
- **Target Files:** `src/pages/SolutionOpportunity.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`, `public/images/home-security/solutions/*.png`.
- **Runtime Systems Affected:** None. Public solution-page visual presentation only.
- **Documentation Updates Required:** Add/promote IMAGE001-A for this run and record completion notes when validation succeeds.
- **Validation Required:** `npm run build`; `git diff --check`; focused ESLint for touched TS/TSX files if feasible; confirm mapped image files exist; protected-system diff check; source forbidden-claims scan; local route availability checks for the four solution routes if feasible.
- **Exit Criteria:** All four target solution routes use the requested hero and sample image mapping; hero images sit in the hero section without shrinking trust pills or CTAs; sample images support the Example Scenario section; alt text is descriptive, neutral, and claim-safe; SOLUTION001 section order is preserved; DESIGN001 visual system classes/tokens are followed; no protected systems or unrelated pages are changed; validation passes or any unrelated baseline issue is documented.
- **Dependencies:** Existing four solution routes, SOLUTION001-A completion, DESIGN001-B completion, bounded operator prompt approval, and approved local image assets.
- **Operator Decision Required:** Visual approval after PR review.
- **Completion Notes:** Added IMAGE001-A to the Active Tasks section before implementation and marked it `DONE` after successful validation. Copied the approved local solution images into `public/images/home-security/solutions` so the requested `/images/home-security/solutions/...` URL mapping resolves. Wired each solution page to one right-side hero image and one Example Scenario supporting image through the shared `SolutionOpportunity` component. Added neutral, illustrative alt text and scoped responsive image framing using existing DESIGN001/SOLUTION001 visual patterns and semantic tokens. Preserved the SOLUTION001 section order, existing routes, hero copy, trust pills, CTAs, page copy posture, and protected runtime boundaries. Bumped visible site version to `v1.0.115`. `npm run build`, focused ESLint for `src/pages/SolutionOpportunity.tsx`, `git diff --check`, target image existence checks, source forbidden-claim scan, and HTTP 200 checks for all four solution routes passed.

### DESIGN001-A
- **Task ID:** DESIGN001-A
- **Task Name:** Extract Homepage Visual System Standard
- **Status:** DONE
- **Category:** GOV / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only authoritative WNYHS visual design standard by extracting the visual system currently implemented on the active `/home-security` homepage and its active semantic tokens/styles.
- **Allowed Scope:** Inspect current homepage implementation, homepage CSS, shared homepage layout/nav/footer components, active semantic token files, and older design/brand/style docs as reference only; create `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register; add a future DESIGN001-B BACKLOG placeholder if useful.
- **Forbidden Scope:** No Homepage changes, Packages changes, QR Landing changes, Support changes, Our Work changes, Solution page changes, React/TSX implementation changes, CSS implementation changes, semantic token definition changes, global navigation changes, Stripe changes, HubSpot changes, Scheduling changes, Email/Resend changes, runtime contract changes, environment variable changes, secrets, pricing/business-rule changes, implementation work, commits that include source changes, or visible site version bump.
- **Target Files:** `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add/register the DESIGN001 REV01 visual system standard and record task status/completion notes.
- **Validation Required:** `git diff --check`; documentation traceability grep for DESIGN001 entries; `npm run build` if required by controlling context/repo convention; no-implementation-file diff check.
- **Exit Criteria:** Standard document clearly states authority model, extraction sources, non-authoritative older-doc handling, homepage-derived standards, token/class reference, visual element rules, allowed reuse, forbidden drift, future implementation guidance, and review/adoption workflow; no implementation files are modified; validation passes.
- **Dependencies:** Current homepage implementation and active semantic tokens on `main`; bounded operator prompt approval.
- **Operator Decision Required:** Review and approve DESIGN001 REV01 before any future implementation task.
- **Completion Notes:** Created `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md` as a docs-only homepage-derived visual system standard. Extracted page shell/canvas, typography, token/color usage, panels, cards, CTAs, pills/badges, images, layout patterns, responsive behavior, raw values to tokenize later, allowed reuse patterns, forbidden visual drift, and future adoption workflow from current `/home-security` implementation and active semantic token/CSS files. Reviewed older brand/design docs as reference only and did not treat them as source of truth unless aligned with current code. Added catalog and manifest entries. Added DESIGN001-B as a BACKLOG-only future implementation placeholder and did not execute it. No public website files, React/TSX files, CSS implementation files, token definitions, global navigation, protected runtime systems, pricing/business rules, or visible site version files were changed. `git diff --check`, documentation traceability grep, no-implementation-file diff check, deleted-file check, and `npm run build` passed.

### DESIGN001-B
- **Task ID:** DESIGN001-B
- **Task Name:** Apply Visual System Standard To Solution Pages
- **Status:** DONE
- **Category:** GOV / FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Apply the reviewed homepage-derived DESIGN001 visual system standard to the four existing solution opportunity pages while preserving SOLUTION001 structure and safe-copy guardrails.
- **Allowed Scope:** Update the shared four-page solution component and scoped solution-page CSS/classes for `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes`; reuse existing homepage premium classes/tokens where practical; make the visible site version patch bump; update this task-register lifecycle entry.
- **Forbidden Scope:** No Homepage changes, Packages page changes, Support page changes, Our Work page changes, QR Landing changes, new routes, global navigation redesign, UX001 documents/tasks, SOLUTION001-B creation/execution/locking, semantic token definition changes, Stripe changes, HubSpot changes, Scheduling changes, Email/Resend changes, runtime contract changes, environment variable changes, secrets, pricing/business-rule changes, hardcoded new colors, unsupported claims, fake social proof, fake real-project claims, or broad copy rewrites.
- **Target Files:** `src/pages/SolutionOpportunity.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Record DESIGN001-B promotion, execution scope, and completion notes in this task register only.
- **Validation Required:** `npm run build`; `git diff --check`; focused lint/typecheck for touched TS/TSX if feasible; forbidden-claim source scan in changed solution page files; local route availability checks for the four target solution routes if feasible.
- **Exit Criteria:** The four existing solution pages visually align with the homepage-derived premium system for shell, hero hierarchy, eyebrows, headings, body copy, trust pills, CTAs, cards/panels, spacing, and responsive behavior; SOLUTION001 section order is preserved; no full Why WNYHS block is added; no protected systems or semantic token definitions are changed; validation passes or failures are clearly attributed.
- **Dependencies:** DESIGN001-A completed and operator-approved by bounded prompt; SOLUTION001-A completed.
- **Operator Decision Required:** Visual/operator approval remains required before any future design-system locking task.
- **Completion Notes:** Applied the DESIGN001 homepage-derived premium visual system to the four existing solution opportunity routes by updating the shared `SolutionOpportunity` component and scoped opportunity CSS. Reused the premium shell, hero hierarchy, eyebrow, hero proof strip, section panel, problem card, final CTA, and global CTA button classes; replaced older gallery/card markup and opportunity-only card styling with semantic-token-backed scoped styles. Preserved SOLUTION001 section order, page copy posture, trust pill content, primary/secondary CTAs, internal links, and the four existing routes. Did not add a full Why WNYHS block, UX001 work, SOLUTION001-B locking work, global navigation changes, semantic token definition changes, protected runtime changes, new hardcoded colors, unsupported claims, fake social proof, or fake real-project claims. Bumped visible site version to `v1.0.114`. `npm run build`, focused ESLint for `src/pages/SolutionOpportunity.tsx`, `git diff --check`, forbidden-claim source scan, and local HTTP route checks for all four solution routes passed. Browser plugin visual smoke check was attempted but unavailable because the in-app browser backend did not expose `iab` in this session.

### CONTENT001-B
- **Task ID:** CONTENT001-B
- **Task Name:** Sprint 1 Conversion Leak Fixes
- **Status:** DONE
- **Category:** COPY / FUNNEL / QR
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Remediate highest-priority conversion leaks on the Homepage and QR Landing page while preserving route, runtime, and protected-system boundaries.
- **Allowed Scope:** Future bounded implementation for Homepage and QR Landing only; hero CTA clarity; verified social proof placement or missing-content documentation; no-required-monthly-fees positioning; customer-owned-equipment positioning when claim-safe; homeowner-problem-first messaging; local WNY trust signals; QR placard-scan context alignment; QR perceived-load investigation only within page/component scope.
- **Forbidden Scope:** No Packages page edits, no Support page edits, no Our Work page edits, no new routes, no broad redesign, no fabricated testimonials/reviews, no unsupported neighbor claims, no Stripe changes, no HubSpot changes, no Scheduling changes, no Email changes, no environment variable changes, no secrets, no runtime contract changes, and no implementation outside Homepage + QR Landing.
- **Target Files:** Future activation must discover exact Homepage, QR Landing, shared content/component, style, and site-version files before editing.
- **Runtime Systems Affected:** Public page presentation only if activated; no protected runtime systems.
- **Documentation Updates Required:** Update task status/completion notes and document missing verified social-proof/content requirements if implementation cannot safely add them.
- **Validation Required:** Future activation must run `npm run build`, page-scope grep for required traceability items, forbidden-claims scan, protected-system diff check, and desktop/mobile render verification where tooling is available.
- **Exit Criteria:** Homepage has a clear above-fold CTA; Homepage and QR Landing surface no-required-monthly-fees positioning; customer-owned-equipment positioning appears where claim-safe; QR Landing matches placard-scan context; social proof is verified or documented as missing; no unsupported claims or protected-system changes occur.
- **Dependencies:** CONTENT001, tracked CONTENT001 remediation docs, operator approval, and promotion to `ACTIVE`.
- **Operator Decision Required:** Approve exact implementation copy/assets and activate CONTENT001-B.
- **Operator Approval Requirements:** Requires separate implementation approval before any Homepage or QR Landing edits.
- **Completion Notes:** Homepage now has an above-fold Fit Check CTA, no-required-monthly-fees and customer-owned-equipment positioning, Smart Property Solutions homeowner framing, and required Security & Awareness / Property Protection / Family Awareness problem sections. QR Landing now uses placard-scan context, outcome-focused H1/subheadline, visible no-required-monthly-fees and ownership positioning, local WNY trust language, a clear local estimate CTA, and a lighter existing WebP hero image to improve perceived load without runtime dependency or lead-signal changes. Verified reviews/testimonials/customer counts were not found in repo source material, so no social proof was fabricated; operator follow-up is needed for approved review/testimonial/story assets. Version bumped to `v1.0.109`.

### CONTENT001-C
- **Task ID:** CONTENT001-C
- **Task Name:** Solutions / Packages Remediation
- **Status:** DONE
- **Category:** COPY / FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Reframe the Packages page around homeowner outcomes and clear package guidance while preserving pricing/business rules and existing funnel behavior.
- **Allowed Scope:** Future bounded implementation for the Packages page only; outcome/problem-based package framing; "best for" homeowner mapping; no-required-monthly-fees positioning; customer-owned-equipment positioning when claim-safe; verified package-related social proof or missing-content documentation; pricing visibility only from approved/current source data when separately authorized.
- **Forbidden Scope:** No Homepage edits, no QR Landing edits, no Support edits, no Our Work edits, no route creation, no package architecture rename unless explicitly approved, no invented pricing, no pricing/business-rule drift, no Stripe changes, no HubSpot changes, no Scheduling changes, no Email changes, no runtime contract changes, no environment variable changes, and no secrets.
- **Target Files:** `src/pages/Packages.tsx`, `src/components/PackageCard.tsx`, `src/content/packages.ts`, `src/index.css`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public Packages presentation only if activated; no protected runtime systems.
- **Documentation Updates Required:** Update task status/completion notes and document pricing/social-proof/content gaps if blocked by missing approved source material.
- **Validation Required:** Future activation must run `npm run build`, page-scope grep for outcome framing/no-required-monthly-fees/customer-owned-equipment/pricing-source handling, forbidden-claims scan, pricing/business-rule drift check, and protected-system diff check.
- **Exit Criteria:** Packages page reads as homeowner outcome guidance rather than a hardware menu; each package has clear use-case mapping; differentiators are visible; pricing visibility is either sourced and authorized or documented as a gap; CTAs and protected systems remain unchanged.
- **Dependencies:** CONTENT001, CONTENT001-B preferred completion/review, approved pricing/source material for any pricing changes, operator approval, and promotion to `ACTIVE`.
- **Operator Decision Required:** Approve exact implementation scope, pricing-source posture, and activation of CONTENT001-C.
- **Operator Approval Requirements:** Requires separate implementation approval before any Packages page edits.
- **Completion Notes:** Promoted CONTENT001-C from `BACKLOG` to `ACTIVE` and moved the task into the Active Tasks execution section before implementation. Packages page now frames the page as Smart Property Solutions, adds visible no-required-monthly-fees/customer-owned-equipment/local-support/property-fit differentiators, adds problem-first WNY context for entry/package awareness, driveway/garage/workshop awareness, water/freeze awareness, and family awareness, strengthens each package with Best for guidance, and surfaces existing source-backed package starting prices without changing price values, package IDs, routes, or CTA destinations. No verified package testimonials/reviews/ratings/customer counts were found in repo source material, so no social proof was fabricated; operator follow-up is needed for approved proof assets. Version bumped to `v1.0.110`.

### CONTENT001-D
- **Task ID:** CONTENT001-D
- **Task Name:** Trust & Authority Pages
- **Status:** DONE
- **Category:** COPY / FUNNEL / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Improve Support and Our Work as trust/authority pages through local support positioning, self-service support structure, and customer-outcome storytelling.
- **Allowed Scope:** Future bounded implementation for Support and Our Work only; Support FAQ/self-service structure; realistic local support expectations; local WNY support positioning; Our Work problem-solution-outcome case-study framing; verified story/photo/quote usage or missing-content documentation; safe customer-owned-equipment positioning where appropriate.
- **Forbidden Scope:** No Homepage edits, no QR Landing edits, no Packages edits, no new routes, no fabricated locations, no fabricated customer quotes, no misleading imagery claims, no response-time promises unsupported by operations, no Stripe changes, no HubSpot changes, no Scheduling changes, no Email changes, no runtime contract changes, no environment variable changes, and no secrets.
- **Target Files:** `src/pages/Support.tsx`, `src/pages/OurWork.tsx`, `src/data/ourWorkGallery.ts`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public Support and Our Work presentation only if activated; no protected runtime systems.
- **Documentation Updates Required:** Update task status/completion notes and document missing verified project/story/review/FAQ content if unavailable.
- **Validation Required:** Future activation must run `npm run build`, page-scope grep for FAQ/self-service and case-study traceability, forbidden-claims scan, fabricated-proof guard check, and protected-system diff check.
- **Exit Criteria:** Support clearly communicates local support paths and self-service help without overpromising; Our Work reads as customer outcome stories rather than a hardware gallery; verified proof is used only when available; no protected-system changes occur.
- **Dependencies:** CONTENT001, CONTENT001-B and CONTENT001-C preferred review, verified support/story/photo/quote content where needed, operator approval, and promotion to `ACTIVE`.
- **Operator Decision Required:** Approve exact implementation copy/assets and activate CONTENT001-D.
- **Operator Approval Requirements:** Requires separate implementation approval before any Support or Our Work edits.
- **Completion Notes:** Promoted CONTENT001-D from `BACKLOG` to `ACTIVE` and moved the task into the Active Tasks execution section before implementation. Support now adds local WNY support positioning, preserves call/text/email/form paths, adds support categories, adds FAQ/self-serve guidance, clarifies follow-up expectations without faster-time promises, and adds a support-first add-on path for existing customers. Our Work now uses Smart Property Solutions framing, problem-solution-outcome example cards, per-card CTAs, safe concept/example image language, and explicit verified-story/quote gap language instead of fabricated customer proof. CONTENT001-E stayed in `BACKLOG` and was not executed. Version bumped to `v1.0.111`.

### CONTENT001-E
- **Task ID:** CONTENT001-E
- **Task Name:** Opportunity Expansion Pages
- **Status:** DONE
- **Category:** COPY / FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Queue future opportunity-page work for high-value homeowner problem areas identified by the audit without creating routes or pages in the governance task.
- **Allowed Scope:** Future bounded implementation planning or explicitly approved page creation for Senior Safety, Water Protection, Family Awareness, and Vacation Home Monitoring only after core remediation review; demand/priority validation; safe claims review; route/content design within future activated scope.
- **Forbidden Scope:** No route creation in CONTENT001-A; no public page creation until separately authorized; no medical/fall-detection guarantees; no emergency-response claims; no monitoring/dispatch claims; no fabricated demand proof; no Stripe changes; no HubSpot changes; no Scheduling changes; no Email changes; no runtime contract changes; no environment variable changes; and no secrets.
- **Target Files:** `src/App.tsx`, `src/pages/SolutionOpportunity.tsx`, `src/pages/Packages.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public page presentation and route wiring only; no protected runtime systems.
- **Documentation Updates Required:** Update task status/completion notes and create any needed page-specific governance specs before implementation if scope is broad.
- **Validation Required:** Future activation must run `npm run build`, route/nav grep, forbidden-claims scan, protected-system diff check, and desktop/mobile render verification where tooling is available.
- **Exit Criteria:** Opportunity pages remain queued until operator approval; when activated, each page is bounded by problem area, claim-safe copy, route approval, and validation; no silent route/page creation occurs.
- **Dependencies:** CONTENT001, completion/review of CONTENT001-B/C/D or explicit operator override, route approval, copy/claims approval, and promotion to `ACTIVE`.
- **Operator Decision Required:** Approve whether and when each opportunity page should be created.
- **Operator Approval Requirements:** Requires separate implementation approval before any new route or page creation.
- **Completion Notes:** Promoted CONTENT001-E from `BACKLOG` to `ACTIVE` and moved the task into the Active Tasks execution section before implementation. Created four explicit routes only: `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes`. Added a shared problem-first Smart Property Solutions page component covering homeowner problem, emotional reason, WNY context, solution approach, safe feature examples, ownership/no-required-monthly-fees positioning, local install/support, and CTAs/internal links. Added conservative Packages-page internal links to the four pages without changing global navigation. Public copy avoids guarantees, fabricated proof, invented statistics, emergency-response claims, medical/fall-detection claims, insurance-savings claims, and public monitoring/dispatch language. Version bumped to `v1.0.112`. Build, diff check, focused lint, route grep, and source forbidden-claims scan passed; repo-wide lint still has pre-existing unrelated baseline failures outside touched TS/TSX files.

### SOLUTION001-A
- **Task ID:** SOLUTION001-A
- **Task Name:** Apply Solution Page Standard To Existing Opportunity Pages
- **Status:** DONE
- **Category:** COPY / FUNNEL / GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Apply `SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV01` to the four existing opportunity solution pages so they share a repeatable WNYHS solution-page structure, visual hierarchy, CTA pattern, and claim-safe content posture.
- **Allowed Scope:** Update only `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes`; update the shared solution page component and scoped solution-page styling; add/register the SOLUTION001 standard document; update document catalog/manifest/task register; bump visible site version.
- **Forbidden Scope:** No Homepage changes, no Packages page changes, no Support page changes, no Our Work page changes, no QR Landing page changes, no new routes beyond the four existing solution routes, no global navigation redesign, no SOLUTION001-B creation or execution, no Stripe changes, no HubSpot changes, no Scheduling changes, no Email/Resend changes, no runtime contract changes, no environment variable changes, no secrets, no pricing/business-rule changes, no semantic token definition changes, no hardcoded colors, no unsupported claims, no fake customer stories, and no invented locations/outcomes.
- **Target Files:** `src/pages/SolutionOpportunity.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public solution-page presentation only; no protected runtime systems.
- **Documentation Updates Required:** Include and register the SOLUTION001 REV01 standard document; update catalog/manifest/register status and completion notes.
- **Validation Required:** `npm run build`; `git diff --check`; focused lint/typecheck where feasible for touched TS/TSX files; source scan for forbidden claims in changed solution page files; protected-system diff check.
- **Exit Criteria:** All four solution pages follow Hero, Who This Helps, Problem / Solution / Outcome, Western New York Context, Possible Pieces Of The Plan, Example Scenario, and Next Step order; hero trust pills and CTA hierarchy match the standard; copy remains problem-first, local, and claim-safe; internal links include Packages, Fit Check, and Estimate; standard doc is included; no protected systems or forbidden pages are changed; validation passes or any unrelated baseline issue is documented.
- **Dependencies:** SOLUTION001 standard document, CONTENT001-E opportunity pages, controlling context alignment, and bounded operator prompt approval.
- **Operator Decision Required:** Visual approval of the standardized solution-page system before any future SOLUTION001-B locking task.
- **Completion Notes:** Created the non-executable SOLUTION001 initiative record and promoted SOLUTION001-A to `ACTIVE` before implementation, then marked it `DONE` after successful validation. Added and registered `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV01.md`; updated the four existing solution opportunity routes through the shared `SolutionOpportunity` component to follow Hero, Who This Helps, Problem / Solution / Outcome, Western New York Context, Possible Pieces Of The Plan, Example Scenario, and Next Step order; aligned hero trust pills and CTA hierarchy to the standard; added illustrative scenario copy without names, towns, or real-project claims; tightened scoped card styling with existing semantic tokens; preserved required Packages, Fit Check, Estimate, and Our Work links without global navigation changes. Version bumped to `v1.0.113`. `npm run build`, `git diff --check`, focused ESLint, source forbidden-claim scan, and documentation traceability grep passed.

### HOMEPAGE-SOLUTIONS-CARD-POLISH-MAIN-001
- **Task ID:** HOMEPAGE-SOLUTIONS-CARD-POLISH-MAIN-001
- **Task Name:** Homepage Solutions Card Layout Polish
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Secondary Category:** COPY
- **Controlling Context:** Current emergency customer-facing homepage/live conversion cleanup effort
- **Purpose:** Polish the `/home-security` Solutions cards so each card has a clearer premium sales-card layout: large image zone, strong title zone, short description zone, and a bottom value row with starting price and base/add-on availability.
- **Allowed Scope:** Modify `/home-security` homepage Solutions card layout only; modify CSS required for the Solutions card layout only; update the three approved solution descriptions; keep the existing three solution images; keep the existing three solution titles; keep the existing three starting prices; keep the existing base/add-on availability concept; bump visible site version once.
- **Forbidden Scope:** Do not modify Stripe; do not modify HubSpot; do not modify forms; do not modify routes; do not modify QR Landing; do not modify Support; do not modify final CTA; do not modify Trust panel; do not re-add Example Projects; do not modify image files; do not hardcode colors; do not introduce new claims; do not change backend/runtime behavior.
- **Target Files:** `docs/system/master-task-register.md`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`.
- **Runtime Systems Affected:** None. Public homepage presentation/copy only.
- **Documentation Updates Required:** Add this bounded task-register entry as `ACTIVE`.
- **Validation Required:** `npm run build`; grep validation for new solution copy/pricing; grep validation that Example Projects remains removed; confirm one `SITE_VERSION` export; confirm protected systems untouched.
- **Exit Criteria:** Each solution card uses the approved 4-zone card layout; images are visually larger and more prominent; price and availability are presented in a dedicated bottom value row; card heights align cleanly; build passes; PR opens against `main`; no merge performed.
- **Dependencies:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 governance and merged HOMEPAGE-SOLUTIONS-CATALOG-MAIN-001.
- **Operator Decision Required:** Approve merge after QA validation.

### HOMEPAGE-SOLUTIONS-CATALOG-MAIN-001
- **Task ID:** HOMEPAGE-SOLUTIONS-CATALOG-MAIN-001
- **Task Name:** Homepage Solutions Catalog Upgrade + Example Projects Removal
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Secondary Category:** COPY
- **Controlling Context:** Current emergency customer-facing homepage/live conversion cleanup effort
- **Purpose:** Upgrade the `/home-security` homepage Solutions section so it reads as purchasable customer solutions with images, homeowner-friendly copy, starting installed prices, and base/add-on language. Remove the duplicative Example Projects section.
- **Allowed Scope:** Modify `/home-security` homepage Solutions section only; add/use the three solution images from `public/images/solutions`; update solution card titles, body copy, pricing lines, and availability lines; remove the Example Projects section from `/home-security`; update styling needed for solution images, price line, and availability line using semantic tokens only; bump visible site version once.
- **Forbidden Scope:** Do not modify Stripe; do not modify HubSpot; do not modify forms; do not modify routes; do not modify QR Landing; do not modify Support; do not modify final CTA; do not modify Trust panel; do not hardcode colors; do not introduce new claims; do not change backend/runtime behavior.
- **Target Files:** `docs/system/master-task-register.md`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `public/images/solutions/front-door-package-protection.png`, `public/images/solutions/smart-home-security.png`, `public/images/solutions/connected-garage-workshop.png`.
- **Runtime Systems Affected:** None. Public homepage presentation/copy only.
- **Documentation Updates Required:** Add this bounded task-register entry as `ACTIVE`.
- **Validation Required:** `npm run build`; grep validation for new solution copy/pricing; grep validation that Example Projects homepage copy is removed; confirm one `SITE_VERSION` export; confirm protected systems untouched.
- **Exit Criteria:** Homepage Solutions section uses the approved three-card purchasable solution layout; Example Projects section is removed; images are included in the PR; build passes; PR opens against `main`; no merge performed.
- **Dependencies:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 governance and operator-supplied image assets.
- **Operator Decision Required:** Approve merge after QA validation.

### HOMEPAGE-EXAMPLE-PROJECTS-MAIN-001
- **Task ID:** HOMEPAGE-EXAMPLE-PROJECTS-MAIN-001
- **Task Name:** Replace Main Homepage Our Work Panel With Example Projects Panel
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Secondary Category:** COPY
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Replace only the main `/home-security` homepage Our Work panel with the approved Example Projects panel while preserving homepage order and protected runtime systems.
- **Allowed Scope:** Update only the main `/home-security` homepage Our Work panel; replace it with the approved Example Projects panel; use only existing repo images listed in the task; update site version.
- **Forbidden Scope:** Do not modify hero; do not modify How It Works; do not modify trust row; do not modify Solutions panel; do not modify final CTA; do not modify QR Landing; do not modify Fit Check logic; do not modify estimate/contact forms; do not modify HubSpot; do not modify Stripe; do not modify routes.
- **Target Files:** `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** None. Public homepage presentation/copy only.
- **Documentation Updates Required:** Add or activate this bounded task-register entry.
- **Validation Required:** `npm run build`; `rg -n "OUR WORK|Our work|Real installs\. Real homes\. Real results\.|See more of our projects" src/components/homeSecurity/HomeSecurityLanding.tsx`.
- **Exit Criteria:** Example Projects panel appears on `/home-security`; old Our Work wording is gone from that panel; PR targets `main`; no merge performed.
- **Dependencies:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 governance and revised task image paths supplied by operator.
- **Operator Decision Required:** Approve merge after QA validation.

- **Task ID:** FUNNEL005
- **Task Name:** Reframe Package Page From Pricing Packages To Protection Planning
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Reframe public package/protection surfaces from fixed package sales language to consultative protection planning while preserving estimate flows and protected runtime systems.
- **Allowed Scope:** Public package/protection copy cleanup, visible pricing-anchor removal on package surfaces, CTA label shifts to walkthrough/planning language, Build Your System guidance, no-required-monthly-contract messaging, bounded register updates.
- **Forbidden Scope:** Stripe/payment flow changes, HubSpot schema/workflow changes, lead-signal transport/runtime contract changes, QR attribution contract changes, autoresponder changes, quote review CTA reintroduction, and route architecture rewrites.
- **Target Files:** `src/pages/Packages.tsx`, `src/pages/PackageDetail.tsx`, `src/components/homeSecurity/PackageTierCards.tsx`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** Public funnel presentation only (no runtime behavior changes).
- **Documentation Updates Required:** Task register entry only.
- **Validation Required:** `npm run build`; `rg -n "1799|2499|3499|one-time|Select Bronze|Select Silver|Select Gold|What.s included|Buy|Purchase|guarantee|guaranteed|Review Estimate Summary|quoteReview|Build Your System|no required monthly" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`
- **Exit Criteria:** Public package/protection surfaces avoid hard pricing anchors and rigid package-purchase language; walkthrough-led protection planning and Build Your System direction are visible; estimate capture flows and protected systems remain unchanged.
- **Dependencies:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 governance and existing FUNNEL hardening tasks.
- **Operator Decision Required:** Approve merge after QA validation.


### FUNNEL006
- **Task ID:** FUNNEL006
- **Task Name:** Polish Protection Styles + Build Your System Positioning
- **Status:** DONE
- **Category:** FUNNEL / COPY / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Refine package surfaces so protection-style planning and local walkthrough positioning are primary, while preserving all protected lead, CRM, and payment systems.
- **Allowed Scope:** Packages and package-detail copy/layout polish, consultative CTA labeling, Build Around Your Property section prominence, visible site version bump, bounded task-register update.
- **Forbidden Scope:** no form submit logic changes; no `/api/lead-signal` transport/runtime changes; no HubSpot schema/workflow changes; no autoresponder changes; no Stripe/payment changes; no quoteReview CTA reintroduction; no image creation/replacement.
- **Target Files:** `src/pages/Packages.tsx`, `src/components/PackageCard.tsx`, `src/components/homeSecurity/PackageTierCards.tsx`, `src/content/homeSecurityPackageData.ts`, `src/content/packages.ts`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** None (public funnel presentation/copy only).
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `npm run build`; `rg -n "Bronze tier|Silver tier|Gold tier|Walkthrough estimate|No subscriptions sold by us|Use As Starting Point|two indoor|PoE|NVR included|Home Assistant with LAN|Build Around Your Property|Review Estimate Summary|quoteReview|guarantee|guaranteed" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`
- **Exit Criteria:** Protection-style names are primary on package cards; pricing-like walkthrough block removed/softened; Build Around Your Property is a distinct major section; risky subscription phrasing replaced; no protected runtime system behavior changed.
- **Dependencies:** FUNNEL005 framing preserved.
- **Operator Decision Required:** Yes (merge approval).
- **Completion Notes:** Completed by making protection-style names the dominant visible headings, replacing large walkthrough-estimate visual emphasis with supportive review copy, reducing technical density in package copy, upgrading CTA language to consultative walkthrough wording, promoting Build Around Your Property with module chips and local walkthrough guidance, and bumping visible site version. Build and scope-grep validations passed with no form/lead/HubSpot/Stripe/runtime behavior edits.

### FUNNEL007
- **Task ID:** FUNNEL007
- **Task Name:** Package Page Visual Cleanup + Duplicate CTA Removal
- **Status:** DONE
- **Category:** FUNNEL / COPY / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Clean up post-FUNNEL006 package/pdp visual hierarchy, remove duplicate package-detail CTA block, and keep consultative protection-style presentation while preserving all protected runtime systems.
- **Allowed Scope:** packages top-section visual cleanup, package-detail duplicate CTA removal, protection-style-first hierarchy refinement, overlay/card clutter reduction, visible site version bump, bounded task-register update.
- **Forbidden Scope:** no form submit changes; no lead-signal runtime/transport changes; no HubSpot schema/workflow changes; no autoresponder changes; no Stripe/payment changes; no quoteReview CTA reintroduction; no image creation/replacement.
- **Target Files:** `src/pages/Packages.tsx`, `src/pages/PackageDetail.tsx`, `src/components/PackageCard.tsx`, `src/components/homeSecurity/PackageTierCards.tsx`, `src/index.css`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** None (presentation-only package and package-detail cleanup).
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `npm run build`; `rg -n "Request Walkthrough Estimate|Bronze tier|Silver tier|Gold tier|Review Estimate Summary|quoteReview|guarantee|guaranteed|CanonicalEstimateRequestForm|sendLeadSignal" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`
- **Exit Criteria:** package detail pages show one primary walkthrough CTA; package-card hierarchy emphasizes protection-style names with reduced tier-label dominance; package-page top section reads cleaner with less cramped headers/overlays; protected routes/forms/lead/payment systems unchanged.
- **Dependencies:** FUNNEL006 completion.
- **Operator Decision Required:** Yes (merge approval).
- **Completion Notes:** Removed the redundant sticky duplicate walkthrough CTA from package detail pages, tightened package-page hero spacing and wording, reduced overlay/ribbon/caption visual noise, and promoted protection-style naming on package cards while de-emphasizing bronze/silver/gold labels as secondary context. Version bumped for deployment visibility. Build and scope grep validations passed with no form, lead-signal, HubSpot, Stripe, autoresponder, or route logic edits.
Multiple ACTIVE tasks under CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 are pre-authorized for bounded final-hour execution, but Codex may only execute the single task explicitly named in the current prompt. ACTIVE is authorization, not permission to bundle. Hard guardrails for claims, Stripe, HubSpot, runtime/routes/UI, secrets, historical docs, and generated binary print files remain enforced.



### GOV001
- **Task ID:** GOV001
- **Task Name:** Governance Precedence Reconciliation
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Reconcile governance precedence to a single current-context + Master Task Register execution model and remove parallel-Step ambiguity.
- **Allowed Scope:**
  - docs-only governance reconciliation in `/docs/system/` and `/docs/DOCUMENT_CATALOG.md`
  - authority hierarchy clarification
  - current operational context clarification
  - historical Step lineage-role clarification
  - task-register role clarification and GOV001 lifecycle updates
- **Forbidden Scope:**
  - no runtime/source/frontend/API/route changes
  - no Stripe logic/payment verification changes
  - no HubSpot schema/workflow/write-path changes
  - no deletion of historical docs
- **Validation Required:**
  - `git diff -- docs/system docs/DOCUMENT_CATALOG.md docs/codex`
  - `rg -n "current operational context|Master Task Register|authority hierarchy|precedence|Step101|Step102|Step201" docs/system docs/DOCUMENT_CATALOG.md docs/codex`
  - `rg -n "Cloudflare|deployment" docs/system docs/DOCUMENT_CATALOG.md docs/codex`
- **Exit Criteria:**
  - authority hierarchy is explicit and unambiguous
  - `step-current.md` is explicitly single-current-context authority
  - historical Steps are lineage/reference unless promoted
  - Master Task Register is explicitly the operational task driver
  - document catalog authority labels/classifications are aligned

### GOV002
- **Task ID:** GOV002
- **Task Name:** Master Task Register Promotion / Standardization
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Standardize the Master Task Register as the operational execution driver with explicit status taxonomy, required task fields, lifecycle rules, activation rules, and Codex execution relationship.
- **Allowed Scope:**
  - docs-only governance updates in `/docs/system/master-task-register.md`
  - alignment updates in `/docs/codex/CODEX_TASK_REGISTER_RULES.md` and `/docs/codex/CODEX_TASK_TEMPLATE.md`
  - optional catalog classification wording alignment in `/docs/DOCUMENT_CATALOG.md`
  - safe normalization metadata for current/recent task records without destructive historical rewrites
- **Forbidden Scope:**
  - no runtime/source/frontend/API changes
  - no route/UI behavior changes
  - no Stripe/payment logic changes
  - no HubSpot schema/workflow/write-path changes
  - no deletion of historical documentation
- **Target Files:** `docs/system/master-task-register.md`, `docs/codex/CODEX_TASK_REGISTER_RULES.md`, `docs/codex/CODEX_TASK_TEMPLATE.md`, `docs/DOCUMENT_CATALOG.md` (if needed)
- **Runtime Systems Affected:** None (docs-only governance change)
- **Documentation Updates Required:** Governance intro and execution-driver language, required schema fields, status/category taxonomy, lifecycle/activation rules, legacy handling guidance, and GOV002 task lifecycle record update.
- **Validation Required:**
  - `git diff -- docs/system/master-task-register.md docs/codex docs/DOCUMENT_CATALOG.md docs/system/plan.md docs/system/agent.md`
  - `rg -n "BACKLOG|READY|ACTIVE|BLOCKED|DONE|ARCHIVED|Task ID|Allowed Scope|Forbidden Scope|Validation Required|Exit Criteria|Operator Decision Required|Master Task Register|operational execution driver" docs/system/master-task-register.md docs/codex`
  - `rg -n "TODO|placeholder|TBD|implement|implementation" docs/system/master-task-register.md docs/codex`
  - `npm run build` (or explicit docs-only skip note)
- **Exit Criteria:**
  - Master Task Register explicitly defines execution-driver behavior under controlling context
  - allowed statuses and category taxonomy are explicit
  - required task field schema is explicit
  - lifecycle/activation/validation/exit discipline is explicit
  - current/recent task records are normalized where safe and legacy handling is explicit
  - no runtime behavior changes introduced
- **Dependencies:** GOV001 = DONE
- **Operator Decision Required:** No
- **Completion Notes:** GOV002 standardized governance/task-register schema and lifecycle language in MTR and synchronized Codex rules/template docs without runtime changes.

### CODEX-CONTRACT001
- **Task ID:** CODEX-CONTRACT001
- **Task Name:** Standard Codex Run Contract
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a reusable standard Codex run contract so future Codex prompts can reference one stable governance document instead of repeating base governance, protected-system, review, validation, and output rules.
- **Allowed Scope:** Documentation/governance only; create `docs/codex/CODEX_RUN_CONTRACT.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register only.
- **Forbidden Scope:** No runtime code, UI components, routes, form components, HubSpot code/schema/workflows, Stripe code/webhooks/payment verification, scheduling code/calendar writes, lead-signal implementation, QRLanding implementation, LEADFLOW002 implementation, referral logic, named QR logic, request estimate behavior changes, document deletion, document renaming, or document consolidation.
- **Target Files:** `docs/codex/CODEX_RUN_CONTRACT.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** New Codex run contract, document catalog entry, markdown manifest addendum, and task-register completion record.
- **Validation Required:** `git status`; `git diff -- docs/codex/CODEX_RUN_CONTRACT.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --name-only`; `git ls-files --deleted`; targeted contract grep; targeted catalog/manifest/register grep; `npm run build`.
- **Exit Criteria:** Contract exists with required metadata and sections, catalog and manifest reference it, register records CODEX-CONTRACT001 as complete, validation passes, and no implementation or forbidden file changes occur.
- **Dependencies:** Current governance context, GOV002, DOC001, DOCSTATUS001.
- **Operator Decision Required:** No.
- **Completion Notes:** Created `docs/codex/CODEX_RUN_CONTRACT.md` as active Codex governance contract REV01 and updated the catalog, manifest addendum, and register only. No runtime/source behavior, UI, routes, forms, HubSpot, Stripe, scheduling, lead-signal, QRLanding, referral, named QR, or request estimate changes were made.



### FUNNEL001
- **Task ID:** FUNNEL001
- **Task Name:** Canonical Estimate Request Form + Quote Review Route Repair
- **Status:** DONE
- **Category:** FUNNEL / RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Repair `/quoteReview` non-render path from Fit Check recommendation/contact flow and enforce one canonical estimate request form based on QRLanding pattern.
- **Allowed Scope:** `/quoteReview` defensive rendering repair, canonical estimate form reuse/extraction, Fit Check/contact estimate form replacement, bounded funnel/runtime docs/register updates.
- **Forbidden Scope:** no Stripe/payment logic changes; no HubSpot schema/workflow changes; no pricing logic changes; no unrelated route/UI redesign.
- **Validation Required:** `npm run build`; `rg -n "quoteReview|Review Estimate Summary|Request My Estimate|Start My Estimate|qrlanding|estimate_form_started|estimate_form_submitted|entryRoute|requestId" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`.
- **Exit Criteria:** quote review no longer blank-screens from Fit Check review action; canonical estimate form reused across QRLanding and Fit Check/contact flow; QR attribution preserved only for QR entry.
- **Completion Notes:** Completed in commit `c5d7bbf` and follow-up revision `FUNNEL001` hardening. `/quoteReview` blank render path fixed via null-safe add-on lookup; canonical form reuse in `/qrlanding` and `/contact` retained; previously removed intake fields (`requestedHelp`, `requestDetails`, `whereDidYouSeeUs`) restored in the canonical component while preserving `/api/lead-signal` submission path and QR attribution behavior.

### FUNNEL002
- **Task ID:** FUNNEL002
- **Task Name:** Package Estimate Flow Repair
- **Status:** DONE
- **Category:** FUNNEL / RUNTIME / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Repair package-selected estimate request submission and package-selected `/quoteReview` rendering while preserving working Fit Check and QRLanding behavior.
- **Allowed Scope:** package-selected contact flow submit repair, package-selected `/quoteReview` defensive rendering repair, query/context preservation, canonical estimate form staged/card formatting cleanup, bounded register update.
- **Forbidden Scope:** no Stripe/payment logic changes; no HubSpot schema/workflow changes; no pricing logic changes; no unrelated routes/features.
- **Validation Required:** `npm run build`; `rg -n "quoteReview|Review Estimate Summary|selected-package|estimateIntent|CanonicalEstimateRequestForm|sendLeadSignal|qrlanding|estimate_form_started|estimate_form_submitted|entryRoute|requestId" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`.
- **Exit Criteria:** package-selected contact submission uses canonical `/api/lead-signal` path with preserved contextual query metadata; package-selected `/quoteReview` never blank-screens when Fit Check-only parameters are absent; QR attribution remains scoped to QR sessions only.
- **Completion Notes:** Contact page now forwards package/funnel query context (`estimateIntent`, `recommended`, `fit`, `propertySize`, `coverageExpectation`, `tier`, `package`) into quote-review routing and lead-signal payload context, while keeping non-QR entry route values local to actual path. QuoteReview blank render fixed by eliminating conditional-hook ordering risk during null quote fallback rendering. Canonical estimate form kept shared while tightening staged grouping/spacing in the common component.


### FUNNEL003
- **Task ID:** FUNNEL003
- **Task Name:** Package Flow Hotfix: CRM Verification + QuoteReview Blank Screen
- **Status:** DONE
- **Category:** FUNNEL / CRM / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Verify package-selected estimate submissions remain HubSpot-compatible through `/api/lead-signal` while preserving non-QR attribution and repair `/quoteReview` blank-screen behavior for package query URLs.
- **Allowed Scope:** package/contact lead-signal payload verification against QRLanding baseline, bounded package-flow parity fixes if required, `/quoteReview` defensive fallback rendering for query-only package review paths, bounded register updates.
- **Forbidden Scope:** no Stripe/payment changes; no HubSpot schema/pipeline/workflow changes; no pricing logic changes; no unrelated route or UI redesign.
- **Validation Required:** `npm run build`; `rg -n "quoteReview|QuoteReview|Review Estimate Summary|selected-package|estimateIntent|CanonicalEstimateRequestForm|sendLeadSignal|lead-signal|HubSpot|sourceFamily|qrlanding|estimate_form_submitted|entryRoute|requestId|dedupe|dedup" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`.
- **Exit Criteria:** package-selected submissions use the canonical `/api/lead-signal` path with non-QR context preserved and without QR-only attribution leakage; `/quoteReview` query-only package URLs render visible fallback/summary and never blank-screen; QRLanding and Fit Check flows remain intact.
- **Completion Notes:** Verified QRLanding and package/contact flows both submit through `sendLeadSignal` ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ `/api/lead-signal` with shared canonical contact/request contract; package flow intentionally keeps non-QR `sourceFamily=MAIN_SITE`, non-QR source strings, and `estimateIntent=selected-package` context. HubSpot behavior aligns with expected contact dedupe/append when reused identities are submitted. `/quoteReview` black-screen root cause was conditional hook ordering (early return before later hooks), repaired by ensuring hooks execute in stable order before null-quote fallback rendering.


### HOTFIX002
- **Task ID:** HOTFIX002
- **Task Name:** Remove Public Review Summary CTAs + Preserve Estimate Form Styling
- **Status:** DONE
- **Category:** FUNNEL / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Remove public-facing Review Summary CTAs that route to `/quoteReview` while keeping `/quoteReview` route/component dormant and preserving canonical estimate submit behavior.
- **Allowed Scope:** remove/hide customer-facing `/quoteReview` CTA links; keep `/quoteReview` route/component intact; preserve canonical estimate request form submit logic and QR/package/Fit Check behavior; update bounded task register record.
- **Forbidden Scope:** no Stripe/payment changes; no HubSpot schema/workflow changes; no lead-signal payload contract changes; no pricing changes; no route deletion.
- **Target Files:** `src/pages/Contact.tsx`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** Contact-page UI CTA visibility only.
- **Documentation Updates Required:** Add HOTFIX002 completion record with scope and validation evidence.
- **Validation Required:** `npm run build`; `rg -n "Review Estimate Summary|Review Request Summary|Review my estimate|Review my answers|quoteReview" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`
- **Exit Criteria:** No public Review Summary CTA routes users to `/quoteReview`; `/quoteReview` route/component remains present; canonical estimate submission flows remain unchanged.
- **Dependencies:** FUNNEL001/FUNNEL002/FUNNEL003 history retained.
- **Operator Decision Required:** No
- **Completion Notes:** Removed the contact-page public `Review Estimate Summary` button that linked to `/quoteReview` while preserving call/text CTAs and canonical estimate request form wiring. Kept `/quoteReview` route/component untouched and retained canonical submit path via `sendLeadSignal` to `/api/lead-signal`.



### UIHOTFIX003
- **Task ID:** UIHOTFIX003
- **Task Name:** Standardize Estimate Form Visual Styling
- **Status:** DONE
- **Category:** FUNNEL / QA / VISUAL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Standardize customer-facing estimate/request quote form presentation to the cleaner staged QRLanding-style layout while preserving all runtime behavior.
- **Allowed Scope:** shared estimate form class/layout styling updates, staged card spacing/grouping improvements, mobile-safe field grid refinement, bounded task register update.
- **Forbidden Scope:** no submit logic changes; no payload shape changes; no lead-signal changes; no HubSpot schema/workflow changes; no Stripe/payment changes; no QR attribution contract changes; no Review Summary CTA reintroduction.
- **Target Files:** `src/components/CanonicalEstimateRequestForm.tsx`, `src/styles/canonicalEstimateForm.css`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** None (presentation-only hotfix).
- **Documentation Updates Required:** Add UIHOTFIX003 completion record with scope and validation evidence.
- **Validation Required:** `npm run build`; `rg -n "CanonicalEstimateRequestForm|Review Estimate Summary|Review Request Summary|quoteReview|sendLeadSignal|lead-signal|entryRoute|estimate_form_submitted|requestId" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`.
- **Exit Criteria:** customer-facing estimate forms share staged card form presentation quality; QR attribution contract preserved for QR entry only; non-QR flows remain non-QR attributed; no Review Summary CTA reintroduced.
- **Dependencies:** HOTFIX002 completion preserved.
- **Operator Decision Required:** No
- **Completion Notes:** Canonical form markup/classes were updated to use shared staged-card presentation styles across QRLanding and non-QR surfaces, including improved field grouping, spacing, dark input styling, mobile responsiveness, and full-width submit button; submit handlers, payload keys, `/api/lead-signal` path, and QR/non-QR attribution behavior remained unchanged.
### FINISH-LINE-PUBLICATION001
- **Task ID:** FINISH-LINE-PUBLICATION001
- **Task Name:** Final publication readiness for QR placards and WNYHS public site
- **Status:** ACTIVE
- **Category:** GOV / OPS / PUBLICATION
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Authorize tightly bounded final-hour publication tasks needed before QR placards/flyers and public site updates go live.
- **Allowed Scope:**
  - governance/task-register coordination for final-hour publication readiness
  - bounded readiness tasks explicitly promoted to ACTIVE
  - release-readiness checks and sequencing notes
- **Forbidden Scope:**
  - no Stripe logic changes
  - no HubSpot schema/pipeline changes
  - no scheduling implementation changes
  - no route changes unless explicitly activated by a separate bounded task
  - no unbounded bundling of unrelated implementation

### CONTACT-PHONE001
- **Task ID:** CONTACT-PHONE001
- **Task Name:** Canonical public phone number replacement across WNYHS site and QR Landing site
- **Status:** ACTIVE
- **Category:** COPY / FUNNEL / QR
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Parent Task:** FINISH-LINE-PUBLICATION001
- **Purpose:** Replace all customer-facing phone references across QR Landing and main WNYHS site with the canonical public Google Voice business number.
- **Canonical Number:**
  - Display: `716-201-0364`
  - E.164: `+1 716-201-0364`
  - Tel href: `tel:+17162010364`
- **Allowed Scope:**
  - update customer-facing phone references
  - update tel links
  - update QR Landing phone references
  - update main site phone references
  - update public metadata/structured data phone references
  - update relevant public contact docs/config
  - include visible site version bump
- **Forbidden Scope:**
  - no Stripe logic changes
  - no HubSpot schema changes
  - no scheduling logic changes
  - no Google Calendar logic changes
  - no Resend behavior changes
  - no routes changed
  - no new features
  - no redesign
  - no claims/copy expansion
  - no personal numbers published

### SCHED-AVAIL001
- **Task ID:** SCHED-AVAIL001
- **Task Name:** Server-side Google Calendar iCal availability read integration
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Track server-side availability read integration using `GOOGLE_CALENDAR_ICAL_SECRET`.
- **Status Basis:** Marked DONE because server-side availability integration and tests already exist in repository history/source (`functions/api/scheduling/availability.ts`, `functions/api/scheduling/googleCalendarAvailability.ts`, `tests/googleCalendarAvailability.test.ts`).

### FINAL-HOUR-BUSDEV001
- **Task ID:** FINAL-HOUR-BUSDEV001
- **Task Name:** Final-Hour Business Development Execution Lane
- **Status:** ACTIVE
- **Category:** GOV / OPS
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** keep business development, physical marketing, print asset, QR campaign, local acquisition, and deployment-support categories open for bounded execution without repeated activation blockers.
- **Allowed Scope:**
  - creating bounded task entries under active final-hour categories
  - print asset source packages
  - local marketing docs/assets
  - QR campaign materials
  - business development materials
  - deployment-support documentation
  - task-register updates
- **Forbidden Scope:**
  - unsupported product claims
  - runtime changes without explicit bounded task
  - Stripe/payment changes without explicit bounded task
  - HubSpot changes without explicit bounded task
  - route/UI changes without explicit bounded task
  - generated binary PDF/PNG commits unless explicitly authorized
  - secrets
- **Validation Required:**
  - task entries must remain bounded
  - hard guardrails preserved
  - generated binary rules preserved
- **Exit Criteria:**
  - final-hour business-development execution lane exists and is ACTIVE
  - bounded task execution no longer blocked solely because the category was not pre-opened

### PRINT-ASSET005
- **Task ID:** PRINT-ASSET005
- **Task Name:** Full-Page Pole / Mall Flyer Source Package
- **Status:** DONE
- **Category:** PRINT-ASSET / GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** create source-only reproducible 8.5 x 11 full-page pole/mall/community-board flyer package using the operator-approved PoleFlyerMallFlyer.png composition and replacing the embedded QR with the approved QR Landing / Campaign QR.
- **Allowed Scope:**
  - `/public/brand/print-assets/pole-mall-flyer/README.md`
  - `/public/brand/print-assets/pole-mall-flyer/source/generate-pole-mall-flyer.mjs`
  - `/public/brand/print-assets/pole-mall-flyer/source/pole-mall-flyer-config.json`
  - `/.gitignore`
  - `/docs/system/master-task-register.md`
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - alternate AI logo versions
  - committed generated PDFs
  - committed generated PNGs
  - committed binary print outputs
  - yard signs
  - business cards
  - car magnets
  - leave-behinds
  - apparel
  - vendor purchasing
- **Validation Required:**
  - generator runs locally
  - generated outputs go only to ignored `generated/`
  - generated PDFs/PNGs are not tracked
  - PoleFlyerMallFlyer.png used as base/reference
  - QR Landing / Campaign QR used
  - business-card QR not used
  - visible claims reviewed and caveated where needed
  - forbidden-claims scan
  - build check if repo standard requires it
- **Exit Criteria:**
  - source generator exists
  - config exists
  - README/manifest exists
  - `.gitignore` prevents generated binaries from being committed
  - generated color and grayscale PDFs can be produced locally
  - no generated binaries are committed
  - task registered or updated
  - no runtime/source behavior changed
- **Completion Notes:** Source-only pole/mall flyer package created under `/public/brand/print-assets/pole-mall-flyer/`; generated PDFs are local-only under ignored `generated/`; canonical `PoleFlyerMallFlyer.png` is used as the full-page base/reference; exact on-disk QR Landing / Campaign QR asset `/public/brand/forprint/QR QRLANDING  Home Page QR.png` is overlaid; main website / business-card QR asset is documented as blocked and not used for output generation; claim caveats for ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“No Cloud RequiredÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â and ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“You Own. You Control.ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â are recorded for operator review before bulk production.

### PRINT-ASSET002B
- **Task ID:** PRINT-ASSET002B
- **Task Name:** QR Placard Visual System Refinement
- **Status:** DONE
- **Category:** PRINT-ASSET
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** refine the existing QR placard generator so placards visually align with the operator-approved premium pole/mall flyer system while remaining scan-first, simple, QR-reliable, and source-only
- **Allowed Scope:**
  - `/public/brand/print-assets/qr-placards/README.md`
  - `/public/brand/print-assets/qr-placards/source/generate-placards.mjs`
  - `/docs/system/master-task-register.md`
  - `/.gitignore` only if strictly necessary
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - alternate AI logo versions
  - committed generated PDFs
  - committed generated PNGs
  - committed binary print outputs
  - half-sheet flyer changes
  - pole/mall flyer changes
  - yard signs
  - business cards
  - car magnets
  - leave-behinds
  - apparel
  - vendor purchasing
- **Validation Required:**
  - generator runs locally
  - generated outputs go only to ignored `generated/`
  - generated PDFs are not tracked
  - PoleFlyerMallFlyer.png used as visual benchmark
  - QR Landing / Campaign QR used
  - business-card QR not used
  - color outputs use dark premium WNYHS placard composition
  - grayscale outputs remain readable
  - QR remains scannable
  - forbidden-claims scan
  - build check if repo standard requires it
- **Exit Criteria:**
  - QR placard generator visually refined
  - placards are dark/premium, not white-card style
  - crest presence improved
  - QR block integrated better
  - placards remain scan-first and simpler than flyers
  - README updated
  - task registered or updated
  - generated outputs remain local/ignored only
  - no generated binaries committed
  - no runtime/source behavior changed
- **Completion Notes:** Refined the existing QR placard generator into a dark premium WNYHS composition benchmarked against `/public/brand/forprint/PoleFlyerMallFlyer.png`; strengthened crest presence, integrated the black-on-white QR into a restrained dark/gold scan module, preserved the QR Landing / Campaign QR only, kept copy scan-first with three approved bullets, updated README source-only guidance, and left generated PDFs local/ignored only.

### PRINT-ASSET005B
- **Task ID:** PRINT-ASSET005B
- **Task Name:** Pole / Mall Flyer QR Integration Polish
- **Status:** DONE
- **Category:** PRINT-ASSET
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** polish the full-page pole/mall flyer QR overlay so it blends into the approved flyer composition while preserving QR scan reliability and source-only generated-output workflow.
- **Allowed Scope:**
  - `/public/brand/print-assets/pole-mall-flyer/README.md`
  - `/public/brand/print-assets/pole-mall-flyer/source/generate-pole-mall-flyer.mjs`
  - `/public/brand/print-assets/pole-mall-flyer/source/pole-mall-flyer-config.json`
  - `/docs/system/master-task-register.md`
  - `/.gitignore` only if strictly necessary
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - alternate AI logo versions
  - committed generated PDFs
  - committed generated PNGs
  - committed binary print outputs
  - yard signs
  - business cards
  - car magnets
  - leave-behinds
  - apparel
  - vendor purchasing
  - changes to canonical source image assets
- **Validation Required:**
  - generator runs locally
  - generated outputs go only to ignored `generated/`
  - generated PDFs are not tracked
  - QR Landing / Campaign QR used
  - business-card QR not used
  - QR overlay visually refined
  - QR remains scannable
  - grayscale output remains readable
  - forbidden-claims scan
  - build check if repo standard requires it
- **Exit Criteria:**
  - QR overlay is smaller/better integrated
  - border/shadow is less intrusive
  - vertical alignment avoids visual collision with the banner
  - lower-center composition feels intentional
  - generated outputs remain local/ignored only
  - no generated binaries are committed
  - no runtime/source behavior changed
- **Completion Notes:** Refined the PRINT-ASSET005 pole/mall flyer QR overlay only: reduced QR visual bulk, moved it slightly upward, replaced the heavy floating white patch with a smaller white quiet-zone field on a restrained dark backing plate, thinned the frame treatment, removed heavy shadow styling, preserved the approved QR Landing / Campaign QR, and kept generated PDFs local/ignored only.


### SUPPORT-FLOW001
- **Task ID:** SUPPORT-FLOW001
- **Task Name:** Support page intake wiring / support request handling
- **Status:** DONE
- **Category:** SUPPORT / OPS
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Scope:** Wire support form to dedicated `/api/support`; send operator support notifications and customer acknowledgement using existing email runtime; maintain strict runtime separation from estimate flow.
- **Forbidden Scope:** No QUOTE-GEN001/CRM-STAGEFLOW001/SCHED-FOLLOWUP001 work; no `/api/lead-signal` changes; no HubSpot estimate pipeline/stage/requestId/Stripe/scheduling authority changes.
- **Validation:** `npm run lint` (pre-existing unrelated failures unchanged), `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged), `npm run build` pass, required `git diff` + `rg` audits completed.
- **Completion Notes:** Support form backend endpoint added at `/api/support`; frontend submission UX hardened with explicit success/error messaging; operator notification + customer acknowledgement implemented via existing Resend runtime env pattern; HubSpot support write deferred for separate task; version bumped to `v1.0.59`.
- **Next Task Recommendation:** QUOTE-GEN001 only after SUPPORT-FLOW001 manual QA pass.

### SUPPORT-HUBSPOT001
- **Task ID:** SUPPORT-HUBSPOT001
- **Task Name:** Optional HubSpot ticket/task support-request sync
- **Status:** READY
- **Category:** SUPPORT / CRM
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Scope:** Optional bounded support-request to HubSpot ticket/task sync only if contract-safe without estimate pipeline impact.
- **Forbidden Scope:** No estimate deal-stage automation changes; no schema/property/pipeline changes without explicit revision.

### FITCHECK-CTA001
- **Task ID:** FITCHECK-CTA001
- **Task Name:** Recommendation-state CTA hierarchy cleanup
- **Status:** DONE
- **Category:** FUNNEL / UX
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Scope:** Keep one clear primary CTA (`Continue To Estimate Request`), keep `Compare Packages` as secondary, demote utility actions (review answers/start over/planner/change package) to lower emphasis, preserve recommendation logic and contact-route context propagation.
- **Forbidden Scope:** No SUPPORT-FLOW001, QUOTE-GEN001, CRM-STAGEFLOW001, or SCHED-FOLLOWUP001 implementation; no `/api/lead-signal`/HubSpot/Stripe/requestId/Resend/scheduling runtime changes.
- **Validation:** `npm run lint` (pre-existing unrelated failures unchanged), `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged), `npm run build` pass, required `git diff` + `rg` audits completed.
- **Completion Notes:** Removed duplicate estimate CTA (`Request My Estimate`), retained primary/secondary hierarchy, moved utility actions to low-emphasis link treatment, preserved `/contact` query propagation for fit/discovery context, version bumped to `v1.0.58`, protected runtime untouched.
- **Next Task Recommendation:** SUPPORT-FLOW001

### FITCHECK001
- **Task ID:** FITCHECK001
- **Task Name:** Remove Legacy Quote Routing + Route Fit Check To Modern Intake
- **Status:** DONE
- **Category:** FUNNEL / COPY
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Prevent customer-facing Fit Check next-step CTAs from sending users into the legacy `/quote` workflow and route them to the modern contact intake instead.
- **Allowed Scope:** Fit Check CTA route/copy updates, Fit Check CTA config updates, visible site version bump, and bounded task-register completion note.
- **Forbidden Scope:** No Fit Check rebuild, question/scoring/recommendation changes, Quote page changes, legacy route deletion, Contact intake changes, QRLanding changes, `/api/lead-signal` changes, HubSpot changes, Stripe changes, scheduling changes, referral logic, payout logic, pricing claims, instant quote language, or confirmed appointment language.
- **Target Files:** `src/components/FitCheck.tsx`, `src/content/fitCheckConfigs.ts`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** Public Fit Check CTA routing only; protected runtime systems untouched.
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `git status`; `git diff --name-only`; `git diff -- src docs`; `git ls-files --deleted`; `git diff --check`; task grep; `npm run build`.
- **Exit Criteria:** Customer-facing Fit Check next-step CTAs route to `/contact?vertical=home-security`; CTA copy uses consultation-first intake language; Fit Check logic and protected systems are unchanged.
- **Completion Notes:** Updated Fit Check primary next-step actions from legacy quote routing to `/contact?vertical=home-security`, replaced quote-oriented CTA language with `Request a Call or On-Site Estimate`, and bumped visible site version to `v1.0.92`. No Quote page, route deletion, Contact intake, QRLanding, lead-signal, HubSpot, Stripe, scheduling, scoring, question, or recommendation logic changes were made.

### FITCHECK001B
- **Task ID:** FITCHECK001B
- **Task Name:** Legacy Discovery CTA Cleanup + Modern Intake Routing
- **Status:** DONE
- **Category:** FUNNEL / COPY
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Remove remaining legacy customer-facing Discovery/Fit Check CTA exposure and route modern next-step action to contact intake.
- **Allowed Scope:** Discovery top-nav CTA routing/copy, Fit Check customer-facing next-step utility cleanup, visible site version bump, and bounded task-register completion note.
- **Forbidden Scope:** No Fit Check question/scoring/recommendation rebuild, broad Discovery redesign, Quote page changes, legacy route deletion, Contact intake changes, QRLanding changes, `/api/lead-signal` changes, HubSpot changes, Stripe changes, scheduling changes, referral logic, payout logic, pricing claims, instant quote language, or confirmed appointment language.
- **Target Files:** `src/pages/Discovery.tsx`, `src/components/FitCheck.tsx`, `src/components/homeSecurity/WnyhsFunnelLayout.tsx`, `src/components/homeSecurity/WnyhsTopNav.tsx`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** Public Discovery/Fit Check CTA routing/copy only; protected runtime systems untouched.
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `git status`; `git diff --name-only`; `git diff -- src docs`; `git ls-files --deleted`; `git diff --check`; task grep; `npm run build`.
- **Exit Criteria:** Discovery/Fit Check customer-facing CTA no longer exposes legacy Get Started routing, quote routing, or planner next-step routing; modern intake CTA routes to `/contact?vertical=home-security`; Fit Check logic and protected systems are unchanged.
- **Completion Notes:** Updated the Discovery/Fit Check top-right CTA from `Get Started` to `Request a Call or On-Site Estimate` and routed it to `/contact?vertical=home-security`; removed the optional planner link from Fit Check results to avoid sending Discovery/Fit Check users into planning from this path; bumped visible site version to `v1.0.93`. No Fit Check questions, scoring, recommendations, Discovery redesign, Quote page, Contact intake, QRLanding, lead-signal, HubSpot, Stripe, scheduling, or legacy route files were changed.

### BUILD001
- **Task ID:** BUILD001
- **Task Name:** Fix FloorplanFurnishings Build Blocker
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Restore clean build validation by fixing the floorplan furnishings casing/default-export mismatch.
- **Allowed Scope:** Floorplan furnishings import/export casing fix, visible site version bump, and bounded task-register completion note.
- **Forbidden Scope:** No funnel behavior changes, Contact, QRLanding, Fit Check, Discovery, Quote, Agreement, Deposit, Schedule, HubSpot, Stripe, Scheduling, lead-signal, requestId, customer-facing copy, pricing, or package changes.
- **Target Files:** `src/components/floorplan/FloorplanFurnishings.tsx`, `src/components/floorplan/floorplanFurnishingRules.ts`, `src/components/floorplan/floorplanFurnishings.ts`, `src/components/floorplan/__tests__/floorplanFurnishings.test.ts`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** None; build-only floorplan module casing repair.
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `git status`; `git diff --name-only`; `git diff -- src docs`; `git ls-files --deleted`; `git diff --check`; targeted floorplan furnishings grep; `npm run build`.
- **Exit Criteria:** `npm run build` passes without the FloorplanFurnishings casing/default-export blocker; floorplan runtime behavior is preserved; protected funnel/runtime systems remain untouched.
- **Completion Notes:** Renamed the lower-case furnishings helper module to `floorplanFurnishingRules.ts` and updated the component/test imports so the default-export `FloorplanFurnishings.tsx` component no longer collides with a same-basename helper on case-insensitive filesystems. Bumped visible site version to `v1.0.94`. No funnel behavior, Contact, QRLanding, Fit Check, Discovery, Quote, HubSpot, Stripe, Scheduling, lead-signal, requestId, customer-facing copy, pricing, or package changes were made.

### FITCHECK002
- **Task ID:** FITCHECK002
- **Task Name:** Rebuild Fit Check As Consultative Discovery Tool
- **Status:** DONE
- **Category:** FUNNEL / COPY
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Rebuild Fit Check from legacy package/tier selection into a situation-based consultative discovery tool that routes to modern intake.
- **Allowed Scope:** Fit Check questions, adaptive follow-ups, solution-category recommendation output, Fit Check copy/config, visible site version bump, and bounded task-register completion note.
- **Forbidden Scope:** No Quote page changes, legacy route deletion, Agreement/Deposit/Schedule/System Planner deletion, Contact intake changes, QRLanding changes, `/api/lead-signal` changes, HubSpot changes, Stripe changes, scheduling/calendar changes, requestId changes, referral/payout/named-QR logic, package pricing, instant quote language, confirmed appointment language, or package checkout behavior.
- **Target Files:** `src/components/FitCheck.tsx`, `src/content/fitCheckConfigs.ts`, `src/newsite/pages/NewSiteFitCheck.tsx`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** Public Fit Check presentation/routing only; protected runtime systems untouched.
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `git status`; `git diff --name-only`; `git diff -- src docs`; `git ls-files --deleted`; `git diff --check`; task grep; `npm run build`.
- **Exit Criteria:** Fit Check uses no more than three primary situation-based questions, no more than three relevant adaptive follow-ups, category-based recommendations framed as a starting point, and final CTA routing to `/contact?vertical=home-security` without quote/package checkout exposure.
- **Completion Notes:** Rebuilt Fit Check around homeowner situations, away-from-property concerns, and property context; added priority-limited adaptive follow-ups; replaced tier/package output with solution-category recommendations and careful starting-point framing; routed the final CTA to `/contact?vertical=home-security`; bumped visible site version to `v1.0.95`. No Quote page, legacy route deletion, Contact intake, QRLanding, `/api/lead-signal`, HubSpot, Stripe, scheduling, requestId, pricing, or package checkout changes were made.

### FUNNEL-ARCH002
- **Task ID:** FUNNEL-ARCH002
- **Task Name:** Funnel architecture implementation cleanup
- **Status:** DONE
- **Category:** FUNNEL / UX-ARCHITECTURE
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Implement approved nav/page-role cleanup from `docs/audits/funnel_arch001_rev01.md`.
- **Allowed Scope:** remove/demote irrelevant links; align nav hierarchy; align page CTAs with final journey; keep System Planner (Preview) non-authoritative; preserve estimate/contact route behavior.
- **Forbidden Scope:** no quote generation; no HubSpot changes; no Stripe changes; no scheduling changes; no protected runtime changes.
- **Validation:** `npm run lint` (pre-existing unrelated failures unchanged), `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged), `npm run build` pass, required diff/rg audits completed.
- **Completion Notes:** Primary nav cleaned to funnel-first hierarchy (Home, Packages, Fit Check, Estimate), disruptive primary links demoted/removed, System Planner (Preview) retained as secondary utility access, Support retained, `/contact` intake behavior preserved, protected runtime untouched.
- **Next Task Recommendation:** ESTIMATE-FLOW001

### CRM-CONTRACT001
- **Task ID:** CRM-CONTRACT001
- **Task Name:** Canonical HubSpot Pipeline Contract Lock
- **Status:** DONE
- **Category:** CRM
- **Controlling Context:** CTX-SCHED-MVP-REV01 (documentation/runtime-contract hardening)
- **Purpose:** Permanently document live HubSpot pipeline internal IDs and production initial-stage env var to eliminate future guesswork.
- **Allowed Scope:** Documentation-only updates under `docs/`; task register lifecycle note updates.
- **Forbidden Scope:** No runtime code changes; no HubSpot API writes/mutations; no Stripe changes; no scheduling implementation changes; no SMS/reminders.
- **Target Files:**
  - `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
  - `docs/runtime/hubspot_sync_contract.md`
  - `docs/runtime/hubspot_properties.md`
  - `docs/system/master-task-register.md`
  - `docs/DOCUMENT_CATALOG.md` (if catalog update needed)
- **Validation Required:**
  - `git diff -- docs`
  - `rg -n "2282258169|3680633583|HUBSPOT_ESTIMATE_INITIAL_STAGE_ID|WNYHS Sales Pipeline|New Estimate Request|PROTECTED_RUNTIME" docs .`
- **Completion Notes:** Live pipeline ID (`2282258169`) and canonical stage IDs documented; Cloudflare production env `HUBSPOT_ESTIMATE_INITIAL_STAGE_ID=3680633583` documented; protected runtime and post-deploy QR validation rule restated.

### CRM-PIPELINE001
- **Task ID:** CRM-PIPELINE001
- **Task Name:** Canonical HubSpot Pipeline Architecture
- **Status:** DONE
- **Category:** CRM
- **Controlling Context:** Documentation-only CRM architecture hardening
- **Purpose:** Define canonical HubSpot deal pipeline stages, movement rules, operator workflow, dedupe guidance for CRM-DEAL002B, stage-ID/env guidance, and protected-runtime boundaries without runtime code changes.
- **Allowed Scope:**
  - create/update documentation under `docs/`
  - define canonical stage lifecycle architecture
  - define operator workflow and dedupe rules
  - update task register status
- **Forbidden Scope:**
  - do not modify runtime/source code
  - do not modify Stripe logic
  - do not modify scheduling implementation
  - do not modify HubSpot schema/properties/pipeline records directly from code
- **Target Files:**
  - `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
  - `docs/system/master-task-register.md`
  - `docs/DOCUMENT_CATALOG.md` (if catalog update needed)
- **Validation Required:**
  - `git diff -- docs`
  - `rg -n "CRM-PIPELINE001|New Estimate Request|Operator Review Needed|Walkthrough Scheduled|Deposit Paid|HUBSPOT_ESTIMATE_INITIAL_STAGE_ID|PROTECTED_RUNTIME|Protected runtime" docs .`
- **Completion Notes:** REV01 canonical pipeline architecture doc added; runtime protections restated; CRM-DEAL002B scope clarified and deferred.

### PLANNER-GUARD001
- **Task ID:** PLANNER-GUARD001
- **Task Name:** System Planner preview labeling and non-authoritative guardrails
- **Status:** DONE
- **Category:** FUNNEL / COPY / GUARDRAIL
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Keep planner accessible while clearly non-authoritative for quote/agreement/scope/pricing/HubSpot/Stripe/scheduling state.
- **Allowed Scope:** Planner label update to `System Planner (Preview)`; preview disclaimer copy; preserve route/behavior; docs + task register updates.
- **Forbidden Scope:** No quote generation; no HubSpot/Stripe/scheduling integration changes; no `/api/lead-signal` or `requestId` lifecycle changes; no SMS/reminders.
- **Target Files:** `src/content/wnyhsNavigation.ts`, `src/components/nav/WnyHomeSecurityNav.tsx`, `src/pages/HomeSecurityPlanner.tsx`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`, `docs/audits/planner_guard001_rev01.md`.
- **Validation:** `npm run lint`; `npm run test -- --run`; `npm run build`; required `git diff`/`rg` audits.
- **Completion Notes:** Updated visible version to v1.0.53; renamed customer-facing Planner labels to `System Planner (Preview)`; added preview/non-authoritative disclaimer copy on planner page; preserved planner route access and existing planner behavior; protected runtime untouched.


### FINISH-LINE-PAGES002
- **Task ID:** FINISH-LINE-PAGES002
- **Task Name:** Public funnel page QA cleanup and standards enforcement
- **Status:** ACTIVE
- **Category:** FUNNEL / QA / COPY / QR
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Authorize bounded finish-line cleanup across public WNYHS pages until operator explicitly closes the category.
- **Allowed Scope:**
  - Visual/page-shell cleanup
  - Header/footer consistency
  - QR funnel hardening
  - Legal/about/support copy cleanup
  - Public page layout consistency
  - Removal of SaaS/demo/assistant leakage
  - Standards enforcement using locked standards docs
  - Version bumps for visible deploy confirmation
- **Forbidden Scope:**
  - No Stripe/payment changes
  - No HubSpot schema/pipeline changes
  - No lead API behavior changes
  - No form payload changes
  - No field name/state key/payload key changes
  - No source tracking changes
  - No scheduling backend changes
  - No backend architecture changes
  - No pricing logic changes
  - No route behavior changes unless explicitly scoped
  - No asset renaming/moving/deleting
  - No unrelated lint cleanup
- **Target Files:**
  - Public page components
  - WNYHS layout/shell components
  - WNYHS styles
  - siteVersion.ts
  - standards docs only when needed
- **Runtime Systems Affected:** none unless explicitly approved
- **Validation Required:**
  - `npm run build`
  - page-specific bad-content scans
  - forbidden-claims scan
  - route/CTA scan
  - protected payload scan when forms are touched
- **Exit Criteria:**
  - Public funnel pages match locked standards
  - No SaaS/demo/operator leakage remains
  - Header/footer behavior is consistent
  - Protected systems untouched
- **Operator Decision Required:**
  - Category remains ACTIVE until operator explicitly closes it

### QR-HARDEN001
- **Task ID:** QR-HARDEN001
- **Task Name:** QR Landing shell hardening and SaaS contamination removal
- **Status:** ACTIVE
- **Category:** QR
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Parent Task:** FINISH-LINE-PAGES002
- **Purpose:** Remove remaining SaaS/operator/assistant shell leakage from QR Landing after QR-REDUX001.
- **Allowed Scope:**
  - remove assistant disclaimer banner
  - suppress legacy SaaS/operator footer
  - suppress duplicate footer wrappers
  - enforce WNYHS footer only
  - normalize QR success-state layout
  - preserve QR nav
  - preserve WNYHS assets
  - version bump
- **Forbidden Scope:**
  - no HubSpot changes
  - no lead API changes
  - no form payload changes
  - no field name changes
  - no consent logic changes
  - no source tracking changes
  - no Stripe changes
  - no scheduling backend changes
  - no route changes
  - no backend/API changes
- **Target Files:**
  - src/pages/QrLanding.tsx
  - src/components/Layout.tsx
  - src/components/homeSecurity/WnyhsSiteFooter.tsx
  - src/styles/qrLanding.css
  - src/styles/homeSecurityPremium.css
  - src/lib/siteVersion.ts
- **Validation Required:**
  - `npm run build`
  - bad-content scan
  - footer scan
  - protected-payload scan
  - QR nav scan
  - forbidden-claims scan
- **Exit Criteria:**
  - QR routes use pure WNYHS shell only
  - assistant banner gone
  - SaaS footer gone
  - duplicate footer/meta gone
  - success state normalized
  - protected form behavior preserved

### FUNNEL-OPS001
- **Task ID:** FUNNEL-OPS001
- **Task Name:** Main Funnel + QR Funnel Link/Form/CRM/Artifact/Customer Timing Audit
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Controlling Context:** Current WNY Home Security funnel/runtime audit context
- **Purpose:** Audit the full operational customer journey across the main WNYHomeSecurity.com funnel and QR landing funnel, from page entry through lead capture, CRM writes, scheduling handoffs, customer/operator notifications, generated artifacts, payment/deposit handoffs, timing expectations, and missing pipeline states.
- **Allowed Scope:**
  - documentation/task-register update only
  - add FUNNEL-OPS001 as audit-first task
  - preserve scheduling as open
  - preserve completed scheduling implementation task statuses
  - reference DESIGN-SKINNING as active under CTX-BRANDING-UX-REV01 without changing design scope
  - define audit deliverables and validation expectations
- **Forbidden Scope:**
  - do not implement runtime features
  - do not close scheduling
  - do not downgrade scheduling
  - do not add SMS
  - do not add reminders
  - do not add install scheduling
  - do not add dispatch behavior
  - do not add customer self-confirmation
  - do not change Stripe behavior
  - do not change HubSpot schema
  - do not change customer-facing claims
  - do not change routes
  - do not change UI
  - do not modify source runtime files
- **Required Audit Deliverables:**
  - full route/page inventory
  - full link/CTA inventory
  - full form/API inventory
  - CRM write map
  - scheduling handoff map
  - customer notification map
  - operator notification map
  - artifact/document generation map
  - customer timing/state map
  - missing pipeline state list
  - broken/mismatched behavior list
  - forbidden claim/copy risk list
  - exact next implementation queue
- **Validation Required:**
  - `git diff -- docs/system/master-task-register.md docs/system/step-current.md docs/DOCUMENT_CATALOG.md`
  - `rg -n "FUNNEL-OPS001|SCHED-IMPL|SCHED-HARDEN|DESIGN-SKINNING|CTX-BRANDING-UX-REV01" docs/system docs/DOCUMENT_CATALOG.md docs/specs docs/runtime`
  - confirm no source files changed

### DESIGN-SKINNING
- **Task Family ID:** DESIGN-SKINNING
- **Category:** DESIGN
- **Controlling Context:** CTX-BRANDING-UX-REV01
- **Status:** ACTIVE
- **Purpose:** Authorize ongoing bounded visual/branding/skinning refinement work across WNY Home Security funnels and operational UI surfaces without repeated governance activation overhead.
- **Allowed Scope:**
  - visual skinning
  - branding alignment
  - typography refinement
  - spacing/layout refinement
  - responsive polish
  - semantic-token-safe color/styling work
  - conversion-oriented UX refinement
  - visual hierarchy improvements
  - animation polish
  - landing page optimization
  - QR funnel visual refinement
  - yard sign / flyer / visual asset integration support
  - iconography refinement
  - component visual consistency
  - design-system refinement
  - token-safe accessibility improvements
- **Forbidden Scope:**
  - no Stripe/payment logic changes unless separately authorized
  - no scheduling architecture changes unless separately authorized
  - no HubSpot schema/runtime changes unless separately authorized
  - no backend security/auth changes unless separately authorized
  - no destructive repo cleanup
  - no silent architectural rewrites
  - no claims violating guardrails
  - no hardcoded styling outside approved semantic token system
  - no install scheduling implementation unless separately authorized
  - no SMS/reminder systems unless separately authorized
- **Execution Rule:** Multiple DESIGN-SKINNING subtasks may exist simultaneously, but Codex may execute only the explicitly named task in the active prompt.
- **Completion Rule:** This task family remains ACTIVE until the operator explicitly declares the branding/skinning initiative complete.
- **Example Subtasks (illustrative only):**
  - DESIGN-SKIN001 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Homepage visual refinement
  - DESIGN-SKIN002 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â QR funnel conversion polish
  - DESIGN-SKIN003 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Mobile responsiveness polish
  - DESIGN-SKIN004 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Typography/system refinement
  - DESIGN-SKIN005 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Yard sign/print branding alignment
  - DESIGN-SKIN006 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Animation/motion polish
  - DESIGN-SKIN007 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Site-wide tactical brand system (VISUAL001 + VISUAL002)

### SCHED-IMPL002
- **Task ID:** SCHED-IMPL002
- **Task Name:** Shared Google Calendar Availability Read
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Implement read-only shared Google Calendar availability lookup through `GET /api/scheduling/availability` for estimate scheduling only.
- **Allowed Scope:**
  - implement Google Calendar read-only availability adapter
  - complete `GET /api/scheduling/availability`
  - normalize busy/free availability response
  - handle timezone safely
  - fail safely when Google Calendar config is missing or invalid
  - document required Google Calendar runtime variables
  - update scheduling runtime docs and deployment validation
- **Forbidden Scope:**
  - no Google Calendar event creation
  - no calendar writes
  - no appointment confirmation
  - no owner acceptance backend
  - no SMS
  - no reminders
  - no install scheduling
  - no technician dispatch
  - no automatic booking
  - no Stripe/payment changes
  - no confirmed appointment claims
- **Target Files:**
  - existing scheduling API route/service files discovered from `SCHED-IMPL001`
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/google_calendar_runtime.md`, create if absent
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
  - `/docs/DOCUMENT_CATALOG.md`, only if new docs are created
- **Runtime Systems Affected:**
  - Scheduling
  - Google Calendar read-only availability
  - Deployment/runtime env documentation
- **Documentation Updates Required:**
  - scheduling ownership contract
  - Google Calendar runtime contract
  - deployment validation checklist
  - document catalog only if new doc added
- **Validation Required:**
  - `npm run build`
  - `npm run lint`, if available
  - `npm run test`, if available
  - `npm run typecheck`, if available
  - `rg` searches proving no calendar writes, no booking claims, no SMS/reminders/install scheduling
- **Exit Criteria:**
  - `GET /api/scheduling/availability` returns normalized read-only availability response
  - missing/invalid Google config fails safely
  - no calendar write exists
  - no appointment confirmation exists
  - no customer-facing booking confirmation claim exists
  - docs updated
  - validation reported
- **Dependencies:**
  - `SCHED-IMPL001` complete
  - scheduling architecture spec REV01 available
  - Google Calendar credentials/config supplied out-of-band by operator before runtime validation
- **Operator Decision Required:**
  - provide actual Google Calendar ID and credentials in deployment environment only, never in repo

## Scheduling Queue (CTX-SCHED-MVP-REV01)

### SCHED-IMPL003
- **Task ID:** SCHED-IMPL003
- **Task Name:** Estimate Appointment Request Creation
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Create canonical estimate appointment request creation behavior tied to requestId and lead intake, while preserving pending owner/manual confirmation posture.
- **Allowed Scope:**
  - create appointment request data model or persistence boundary
  - connect estimate request submission to appointment request creation
  - preserve requestId correlation
  - set status to `PENDING_OWNER_CONFIRMATION`
  - notify operator if already supported by existing email/lead notification infrastructure
  - update HubSpot only if existing fields/supporting pattern already exists or documentation explicitly allows it
- **Forbidden Scope:**
  - no automatic booking
  - no confirmed appointment claim
  - no owner acceptance backend
  - no SMS
  - no reminders
  - no install scheduling
  - no technician dispatch
  - no Stripe/payment changes
  - no calendar event creation unless explicitly deferred to `SCHED-IMPL004` after owner confirmation
- **Target Files:**
  - existing estimate/lead/scheduling request handlers
  - existing scheduling service/module files
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/request_id_contract.md`
  - `/docs/runtime/lead_signal_contract.md`
  - `/docs/runtime/hubspot_sync_contract.md`, only if directly affected
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
- **Runtime Systems Affected:**
  - Scheduling
  - requestId lifecycle
  - lead signal
  - HubSpot sync, if directly affected
  - email notification, if directly affected
- **Documentation Updates Required:**
  - scheduling ownership contract
  - requestId contract
  - lead signal contract
  - HubSpot sync contract only if behavior changes
  - deployment validation checklist
- **Validation Required:**
  - build/lint/test/typecheck where available
  - estimate request submission validation
  - requestId propagation validation
  - pending confirmation status validation
  - no confirmed booking claim search
- **Exit Criteria:**
  - estimate requests create or record appointment request state
  - appointment request is tied to requestId
  - status is pending owner/manual confirmation
  - no automatic booking exists
  - docs updated
  - validation reported
- **Dependencies:**
  - `SCHED-IMPL002` complete or explicitly not blocking
  - `SCHED-IMPL001` complete
- **Operator Decision Required:**
  - choose final persistence location if multiple viable repo patterns exist

### SCHED-IMPL004
- **Task ID:** SCHED-IMPL004
- **Task Name:** Owner Acceptance + Confirmation State
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Implement owner/manual confirmation state transition for estimate appointments after customer request creation.
- **Allowed Scope:**
  - create owner confirmation API/action
  - transition appointment request from `PENDING_OWNER_CONFIRMATION` to `CONFIRMED`
  - record `confirmedBy` and `confirmedAt`
  - send confirmation email only after owner/manual confirmation
  - optionally create Google Calendar event only after owner confirmation if scheduling architecture spec allows it and runtime docs define it
  - update HubSpot status only if existing sync contract supports it
- **Forbidden Scope:**
  - no automatic booking
  - no customer self-confirmation
  - no install scheduling
  - no SMS
  - no reminders
  - no technician dispatch
  - no route optimization
  - no Stripe/payment changes
  - no owner bypass without audit fields
- **Target Files:**
  - existing scheduling API/service files
  - existing email notification files, if directly required
  - existing HubSpot sync files, if directly required
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/google_calendar_runtime.md`, if calendar event creation after owner confirmation is included
  - `/docs/runtime/hubspot_sync_contract.md`, if directly affected
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
- **Runtime Systems Affected:**
  - Scheduling
  - Email notification
  - Google Calendar only if post-confirmation event creation is included
  - HubSpot sync only if directly affected
- **Documentation Updates Required:**
  - scheduling ownership contract
  - deployment validation checklist
  - Google Calendar runtime contract only if event creation after owner confirmation is included
  - HubSpot sync contract only if behavior changes
- **Validation Required:**
  - build/lint/test/typecheck where available
  - owner confirmation route/action validation
  - state transition validation
  - customer confirmation email validation, if implemented
  - audit fields validation
  - forbidden scope search
- **Exit Criteria:**
  - owner can confirm requested estimate appointment
  - appointment state transitions only after owner action
  - confirmation audit fields are stored
  - customer confirmation is only sent after owner confirmation
  - no automatic booking exists
  - no SMS/reminder/install scheduling exists
  - docs updated
  - validation reported
- **Dependencies:**
  - `SCHED-IMPL003` complete
  - `SCHED-IMPL002` complete if confirmation depends on calendar availability or calendar event creation
- **Operator Decision Required:**
  - confirm whether `SCHED-IMPL004` should create a Google Calendar event after owner confirmation, or only update internal state first
- **Completion Notes:**
  - Owner confirmation endpoint/action implemented at `POST /api/scheduling/confirm`.
  - `requestId`-keyed appointment requests now transition from `PENDING_OWNER_CONFIRMATION` to `CONFIRMED` only after owner/manual action.
  - Audit fields `confirmedBy` and `confirmedAt` are persisted on confirmation.
  - Invalid `requestId` handling and no-auto-confirm behavior are covered by tests.
  - Google Calendar event creation intentionally deferred; no calendar writes introduced.

### SCHED-IMPL005
- **Task ID:** SCHED-IMPL005
- **Task Name:** Durable Appointment Request Storage
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Replace or supplement the temporary in-memory appointment request store with a durable repo-approved persistence boundary for estimate appointment requests.
- **Allowed Scope:**
  - evaluate existing repo storage patterns
  - implement durable storage for appointment request records
  - preserve requestId correlation
  - preserve scheduling statuses
  - preserve confirmedBy / confirmedAt audit fields
  - migrate API usage from in-memory-only store to durable boundary
  - maintain existing endpoint behavior
- **Forbidden Scope:**
  - no install scheduling
  - no SMS
  - no reminders
  - no automatic booking
  - no customer self-confirmation
  - no Stripe changes
  - no HubSpot schema changes unless explicitly required and separately documented
  - no calendar writes unless already implemented elsewhere and explicitly authorized
- **Target Files:**
  - `functions/api/scheduling/appointmentRequestStore.ts`
  - related scheduling API files
  - tests
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
- **Exit Criteria:**
  - appointment requests survive beyond single in-memory process scope using approved durable boundary
  - requestId lookup works
  - confirmation audit fields persist
  - tests added/updated
  - docs updated
- **Completion Notes:**
  - Scheduling appointment-request storage now supports durable Cloudflare KV through `APPOINTMENT_REQUESTS_KV` with in-memory fallback limited to local/test scenarios.
  - `/api/lead-signal`, `/api/scheduling/request`, and `/api/scheduling/confirm` now read/write through the durable-ready boundary while preserving `requestId` correlation and owner-confirmation gating.
  - Confirmation metadata (`confirmedBy`, `confirmedAt`) and status transitions remain preserved with persisted updates.
  - Added/updated tests cover request creation, lookup, confirmation persistence, invalid `requestId`, and no-auto-confirm posture.
  - Runtime docs updated with required KV binding and deployment validation checklist updates.

### SCHED-IMPL006
- **Task ID:** SCHED-IMPL006
- **Task Name:** Post-Owner-Confirmation Calendar Event Creation
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** After owner confirmation only, create a Google Calendar event for the confirmed estimate appointment.
- **Allowed Scope:**
  - add Google Calendar write behavior only after owner confirmation
  - store calendarEventId on appointment request if supported
  - preserve confirmedBy / confirmedAt audit fields
  - fail safely if calendar write fails
  - keep appointment state behavior explicit and documented
- **Forbidden Scope:**
  - no calendar write before owner confirmation
  - no automatic booking
  - no SMS
  - no reminders
  - no install scheduling
  - no technician dispatch
  - no Stripe changes
  - no HubSpot schema changes unless explicitly required and separately documented
- **Target Files:**
  - `functions/api/scheduling/googleCalendarAvailability.ts` or new calendar write adapter
  - `functions/api/scheduling/confirm.ts`
  - `functions/api/scheduling/appointmentRequestStore.ts`
  - tests
  - `/docs/runtime/google_calendar_runtime.md`
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
- **Exit Criteria:**
  - calendar event creation occurs only after owner confirmation
  - calendarEventId is recorded if event creation succeeds
  - failure is logged/safely returned without exposing secrets
  - no pre-confirmation calendar writes exist
  - tests added/updated
  - docs updated

### SCHED-IMPL007
- **Task ID:** SCHED-IMPL007
- **Task Name:** Customer Confirmation Email After Owner Acceptance
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Send customer confirmation email only after owner acceptance confirms the estimate appointment.
- **Allowed Scope:**
  - use existing email infrastructure
  - send confirmation only after `POST /api/scheduling/confirm` succeeds
  - include safe pending/confirmed language based on actual state
  - preserve requestId correlation
  - log/send failure safely
- **Forbidden Scope:**
  - no SMS
  - no reminders
  - no install scheduling
  - no technician dispatch
  - no automatic booking
  - no payment/Stripe changes
  - no marketing automation expansion
  - no unsupported claims
- **Target Files:**
  - existing email/resend runtime files
  - `functions/api/scheduling/confirm.ts`
  - tests
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/resend_runtime.md`
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
- **Exit Criteria:**
  - customer confirmation email is sent only after owner confirmation
  - failure does not create false confirmation claims
  - requestId correlation is included
  - tests added/updated
  - docs updated
- **Completion Notes:**
  - `POST /api/scheduling/confirm` now performs customer confirmation email attempts only after owner confirmation succeeds and after the post-confirmation calendar write attempt completes.
  - Email copy uses bounded owner-confirmed estimate language and includes `requestId`, confirmed window text, timezone, and company contact details.
  - Calendar event link is included only when `calendarEventHtmlLink` is available; failure/no-link paths avoid false invite claims.
  - Email delivery failures are logged with safe diagnostics and do not roll back `CONFIRMED` status or calendar metadata.
  - Tests updated to cover sequencing, requestId inclusion, safe failure behavior, and invalid request handling without pre-confirmation email sends.

### SCHED-IMPL008
- **Task ID:** SCHED-IMPL008
- **Task Name:** Scheduling MVP End-to-End Validation Pass
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Validate the full estimate scheduling MVP path from lead intake through availability read, appointment request creation, owner confirmation, and allowed post-confirmation effects.
- **Allowed Scope:**
  - end-to-end validation only
  - test coverage updates
  - documentation corrections
  - deployment checklist updates
  - issue list for remaining defects
- **Forbidden Scope:**
  - no new features
  - no SMS
  - no reminders
  - no install scheduling
  - no dispatch
  - no Stripe changes
  - no HubSpot schema changes
  - no copy expansion beyond correcting unsafe claims
- **Target Files:**
  - tests
  - `/docs/runtime/deployment_validation.md`
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/system/master-task-register.md`
  - `/docs/DOCUMENT_CATALOG.md` only if needed
- **Exit Criteria:**
  - scheduling MVP validation matrix is complete
  - known baseline lint/test/typecheck failures are separated from task regressions
  - request/pending/confirmed behavior is validated
  - forbidden scope search passes
  - docs updated
- **Completion Notes:**
  - Validation pass confirmed implemented estimate scheduling MVP lifecycle: availability read, appointment request creation, pending-owner state, owner confirmation transition, post-confirmation calendar write attempt, and post-confirmation customer email attempt.
  - Focused scheduling tests pass (`appointmentRequestCreation`, `appointmentOwnerConfirmation`, `googleCalendarAvailability`).
  - Known repository baseline failures remain unrelated to scheduling scope: lint repo errors, full test suite failure in `src/pages/__tests__/operatorNavbar.test.tsx`, and api typecheck issues.
  - No forbidden-scope scheduling behavior (automatic booking, customer self-confirmation, SMS/reminders/install/dispatch runtime implementation) was introduced in scheduling API path.
  - Follow-up defects identified for MVP hardening: customer contact durability on confirm retries, duplicate calendar/email attempt risk on repeated confirm calls, and visibility/observability hardening for calendar/email failures.

---

## Historical / Supporting Tasks and Records

### T-RUNTIME003-001
- **Task ID:** T-RUNTIME003-001
- **Task Name:** RUNTIME003 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Stripe Runtime Contract
- **Status:** DONE
- **Category:** PAYMENT
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Author the canonical Stripe runtime contract document to codify server-side verification and webhook-authoritative payment success semantics.
- **Allowed Scope:** Documentation-only updates for Stripe runtime contract and required register/catalog status updates.
- **Forbidden Scope:** Source code edits; runtime behavior changes; environment variable changes; secret exposure; Stripe logic changes except documentation-only description; HubSpot logic/schema changes; UI changes; route changes; product claims; deletion of docs.
- **Target Files:** `/docs/runtime/stripe_runtime.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md` (if catalog entries must be updated).
- **Runtime Systems Affected:** Stripe runtime documentation only; no runtime behavior impact.
- **Documentation Updates Required:** Create/update runtime contract doc from template, update ownership-map status, update task lifecycle in register.
- **Completion Notes:** REV01 Stripe runtime contract created; runtime ownership map updated to PARTIAL pending operator verification; DOCUMENT_CATALOG updated.
- **Validation Required:** `git diff -- docs/runtime/stripe_runtime.md docs/runtime/runtime_ownership_map.md docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md` and `npm run build`.
- **Exit Criteria:** Stripe runtime contract exists with template sections populated; ownership map reflects current status; register status and notes updated; no implementation code changes.
- **Dependencies:** RUNTIME005 documentation should be completed first per execution order guidance.
- **Operator Decision Required:** No.

### T-RUNTIME004-001
- **Task ID:** T-RUNTIME004-001
- **Task Name:** RUNTIME004 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Email Runtime Contracts
- **Status:** DONE
- **Category:** EMAIL
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Author canonical email runtime contracts for Resend outbound and Cloudflare Email Routing inbound ownership boundaries.
- **Allowed Scope:** Documentation-only updates to runtime email contracts and required register/catalog status updates.
- **Completion Notes:** REV01 contracts created for Resend and Cloudflare Email Routing; ownership map updated to PARTIAL pending operator verification; DOCUMENT_CATALOG updated.
- **Forbidden Scope:** Source code edits; runtime behavior changes; environment variable changes; secret exposure; Stripe logic changes; HubSpot logic/schema changes; UI changes; route changes; product claims; deletion of docs.
- **Target Files:** `/docs/runtime/resend_runtime.md`, `/docs/runtime/cloudflare_email_routing.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md` (if catalog entries must be updated).
- **Runtime Systems Affected:** Email runtime documentation only; no runtime behavior impact.
- **Documentation Updates Required:** Create/update both email runtime contract docs from template, update ownership-map status, update task lifecycle in register.
- **Validation Required:** `git diff -- docs/runtime/resend_runtime.md docs/runtime/cloudflare_email_routing.md docs/runtime/runtime_ownership_map.md docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md` and `npm run build`.
- **Exit Criteria:** Both email runtime contracts exist with template coverage and clear inbound/outbound ownership boundaries; ownership map updated; no implementation code changes.
- **Dependencies:** RUNTIME002 completed.
- **Operator Decision Required:** No.

### T-RUNTIME005-001
- **Task ID:** T-RUNTIME005-001
- **Task Name:** RUNTIME005 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Lead Signal + requestId Contracts
- **Status:** DONE
- **Category:** LEAD
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Author canonical runtime contracts for `/api/lead-signal` and request-id lifecycle/diagnostics.
- **Allowed Scope:** Documentation-only updates to lead signal and request-id runtime contracts plus required register/catalog updates.
- **Forbidden Scope:** Source code edits; runtime behavior changes; environment variable changes; secret exposure; Stripe logic changes; HubSpot logic/schema changes except documentation-only reference to REV03; UI changes; route changes; product claims; deletion of docs.
- **Target Files:** `/docs/runtime/lead_signal_contract.md`, `/docs/runtime/request_id_contract.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md` (if catalog entries must be updated).
- **Runtime Systems Affected:** Lead and diagnostics documentation only; no runtime behavior impact.
- **Documentation Updates Required:** Create/update lead-signal and request-id contract docs from template, update ownership-map status, update register task lifecycle.
- **Completion Notes:** REV01 contracts created for lead signal and requestId; ownership map updated to PARTIAL pending operator verification; DOCUMENT_CATALOG updated.
- **Validation Required:** `git diff -- docs/runtime/lead_signal_contract.md docs/runtime/request_id_contract.md docs/runtime/runtime_ownership_map.md docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md` and `npm run build`.
- **Exit Criteria:** Lead-signal and request-id contracts exist with clear API-path and diagnostics boundaries; ownership map updated; no implementation code changes.
- **Dependencies:** RUNTIME004 recommended first.
- **Operator Decision Required:** No.

### T-RUNTIME006-001
- **Task ID:** T-RUNTIME006-001
- **Task Name:** RUNTIME006 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â HubSpot Runtime Contracts
- **Status:** DONE
- **Category:** CRM
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Author canonical HubSpot runtime property and sync contracts aligned to locked REV03 constraints.
- **Allowed Scope:** Documentation-only updates to HubSpot runtime contracts and required register/catalog updates.
- **Forbidden Scope:** Source code edits; runtime behavior changes; environment variable changes; secret exposure; Stripe logic changes; HubSpot logic/schema changes except documentation-only description; UI changes; route changes; product claims; deletion of docs.
- **Target Files:** `/docs/runtime/hubspot_properties.md`, `/docs/runtime/hubspot_sync_contract.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md` (if catalog entries must be updated).
- **Runtime Systems Affected:** CRM runtime documentation only; no runtime behavior impact.
- **Documentation Updates Required:** Create/update HubSpot runtime contract docs from template, preserve REV03 API-write constraints, update ownership-map status and task lifecycle.
- **Validation Required:** `git diff -- docs/runtime/hubspot_properties.md docs/runtime/hubspot_sync_contract.md docs/runtime/runtime_ownership_map.md docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md` and `npm run build`.
- **Exit Criteria:** HubSpot runtime contracts exist and explicitly preserve `/api/lead-signal` write path and REV03 boundaries; ownership map updated; no implementation code changes.
- **Dependencies:** RUNTIME005 and RUNTIME003 documentation should precede this task.
- **Operator Decision Required:** No.

### T-RUNTIME007-001
- **Task ID:** T-RUNTIME007-001
- **Task Name:** RUNTIME007 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Scheduling Ownership Contract
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Author the canonical scheduling ownership runtime contract for request-capture/degrade ownership boundaries.
- **Allowed Scope:** Documentation-only updates for scheduling ownership contract and required register/catalog updates.
- **Forbidden Scope:** Source code edits; runtime behavior changes; environment variable changes; secret exposure; Stripe logic changes; HubSpot logic/schema changes; UI changes; route changes; product claims; deletion of docs.
- **Target Files:** `/docs/runtime/scheduling_ownership.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md` (if catalog entries must be updated).
- **Runtime Systems Affected:** Scheduling documentation only; no runtime behavior impact.
- **Documentation Updates Required:** Create/update scheduling ownership contract from template, update ownership-map status, update task lifecycle in register.
- **Completion Notes:** REV01 scheduling ownership contract created; runtime ownership map updated to PARTIAL; DOCUMENT_CATALOG entry added for scheduling runtime contract.
- **Validation Required:** `git diff -- docs/runtime/scheduling_ownership.md docs/runtime/runtime_ownership_map.md docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md` and `npm run build`.
- **Exit Criteria:** Scheduling ownership contract exists with documented ownership/fallback boundaries; ownership map updated; no implementation code changes.
- **Dependencies:** RUNTIME006 documentation recommended first.
- **Operator Decision Required:** No.

### T-RUNTIME008-001
- **Task ID:** T-RUNTIME008-001
- **Task Name:** RUNTIME008 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â QR Attribution + Funnel Analytics Runtime Documentation
- **Status:** DONE
- **Category:** QR / RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Author documentation-only runtime governance for QR placard attribution assumptions, requestId lifecycle expectations, Cloudflare analytics interpretation, and campaign KPI ladder model.
- **Allowed Scope:** Runtime/governance documentation updates only.
- **Forbidden Scope:** No runtime implementation changes; no route/UI updates; no Stripe logic changes; no HubSpot schema/pipeline changes; no analytics SDK implementation.
- **Target Files:** `/docs/runtime/qrlanding_runtime.md`, `/docs/runtime/request_id_contract.md`, `/docs/runtime/lead_signal_contract.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md`.
- **Runtime Systems Affected:** Documentation only.
- **Documentation Updates Required:** QR attribution model, requestId lifecycle expectations, Cloudflare interpretation guidance, KPI model, ownership-map status updates.
- **Validation Required:** `git diff -- docs/runtime docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md`, targeted `rg` scans, and `npm run build`.
- **Exit Criteria:** Required runtime docs updated with bounded attribution governance and no production logic changes.
- **Dependencies:** RUNTIME005 and RUNTIME007 runtime documentation lineage.
- **Operator Decision Required:** No.


### T-RUNTIME009-001
- **Task ID:** T-RUNTIME009-001
- **Task Name:** RUNTIME009 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â QRLanding Event Instrumentation
- **Status:** DONE
- **Category:** QR / RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement bounded QRLanding attribution instrumentation for `qrlanding_view`, `estimate_form_started`, and `estimate_form_submitted` while preserving `/api/lead-signal` write-path protections.
- **Allowed Scope:** Existing `/qrlanding` instrumentation wiring, requestId session persistence for QR attribution events, bounded runtime contract doc updates, and task register evidence updates.
- **Forbidden Scope:** No Stripe/payment logic changes; no HubSpot schema/pipeline/workflow changes; no route changes; no UI redesign; no new analytics vendors/SDKs.
- **Target Files:** `src/pages/QrLanding.tsx`, `/docs/runtime/qrlanding_runtime.md`, `/docs/runtime/request_id_contract.md`, `/docs/runtime/lead_signal_contract.md`, `/docs/system/master-task-register.md`.
- **Runtime Systems Affected:** QRLanding client event submission through existing `/api/lead-signal` path only.
- **Documentation Updates Required:** Reflect implemented event payload shape and requestId persistence behavior for QRLanding runtime events.
- **Completion Notes:** Added one-time `qrlanding_view` tracking on `/qrlanding` load, first-interaction `estimate_form_started` tracking, and submit-time `estimate_form_submitted` metadata on lead submission payload; preserved existing lead submission and protected runtime boundaries.
- **Validation Required:** `npm run build`; `rg -n "qrlanding_view|estimate_form_started|estimate_form_submitted|entryRoute|requestId" src docs`; `git diff -- src docs/runtime docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md`.
- **Exit Criteria:** All three QRLanding attribution events are emitted with `eventName`, `requestId`, `timestamp`, and `entryRoute=/qrlanding` via existing lead-signal path; build passes; protected systems untouched.
- **Dependencies:** RUNTIME008 documentation lineage.
- **Operator Decision Required:** No.




### T-RUNTIME010-001
- **Task ID:** T-RUNTIME010-001
- **Task Name:** RUNTIME010 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â QR Attribution Event Schema Validation Contract
- **Status:** DONE
- **Category:** QR / RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define strict documentation contract for QR attribution event payload naming, required fields, validation expectations, failure handling, and reporting/join assumptions introduced after RUNTIME009.
- **Allowed Scope:** Runtime documentation/governance updates only across QR attribution, requestId contract clarification, and lead-signal contract clarification.
- **Forbidden Scope:** No runtime implementation code; no frontend/API logic changes; no Stripe changes; no HubSpot schema/pipeline/workflow changes; no route/UI copy changes.
- **Target Files:** `/docs/runtime/qrlanding_runtime.md`, `/docs/runtime/request_id_contract.md`, `/docs/runtime/lead_signal_contract.md`, `/docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Documentation-only schema contract; no runtime behavior changes.
- **Documentation Updates Required:** Canonical event-name list, required payload field rules, optional metadata guidance, requestId authority distinction, future validation expectations, and reporting/join assumptions.
- **Completion Notes:** Added RUNTIME010 documentation contract sections across runtime docs; clarified client attribution requestId vs server authoritative requestId; documented reject/ignore behavior for unknown event names and non-blocking posture for optional metadata.
- **Validation Required:** `git diff -- docs/runtime docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md docs/codex/QA_CHECKLIST.md`; `rg -n "qrlanding_view|estimate_form_started|estimate_form_submitted|eventName|entryRoute|requestId|schema|validation" docs/runtime docs/system`; `rg -n "TODO|placeholder|implement|implementation" docs/runtime docs/system/master-task-register.md`; `npm run build`.
- **Exit Criteria:** RUNTIME010 schema validation contract is fully documented with bounded ownership and zero runtime implementation changes.
- **Dependencies:** RUNTIME009 completion evidence.
- **Operator Decision Required:** No.



### T-RUNTIME011-001
- **Task ID:** T-RUNTIME011-001
- **Task Name:** RUNTIME011 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â QR Attribution Reporting / Review SOP
- **Status:** DONE
- **Category:** QR / OPS / GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Parent Task:** FINISH-LINE-PUBLICATION001
- **Purpose:** Create canonical, repeatable weekly QR attribution reporting/review SOP covering placard inventory, `/qrlanding` traffic, event ladder progression, lead/call/quote/job outcomes, directional conversion ratios, and operator decisions.
- **Allowed Scope:** Documentation-only reporting SOP updates; bounded cross-reference updates in runtime/QA docs; task lifecycle/register updates; document catalog update for new canonical doc.
- **Forbidden Scope:** No source code/runtime changes; no frontend/API changes; no Stripe changes; no HubSpot schema/workflow changes; no route/UI copy changes; no dashboard/SDK implementation.
- **Target Files:** `/docs/runtime/qr_attribution_reporting.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md`, optional bounded references in `/docs/runtime/qrlanding_runtime.md`, `/docs/runtime/deployment_validation.md`, `/docs/codex/QA_CHECKLIST.md`.
- **Validation Required:**
  - `git diff -- docs/runtime docs/codex docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md`
  - `rg -n "RUNTIME011|QR attribution reporting|placard|qrlanding_view|estimate_form_started|estimate_form_submitted|Cloudflare|KPI|closed jobs|booked quotes|evidence|weekly" docs/runtime docs/codex docs/system docs/DOCUMENT_CATALOG.md`
  - `rg -n "TODO|placeholder|TBD|implement|implementation" docs/runtime docs/codex docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md`
  - `npm run build`
- **Exit Criteria:** QR attribution reporting SOP exists with weekly cadence, required inputs, KPI ladder, directional conversion formulas, interpretation rules, decision rules, evidence format, and bounded governance notes; no runtime behavior changes.
- **Completion Notes:** Added canonical RUNTIME011 REV01 reporting/review SOP at `/docs/runtime/qr_attribution_reporting.md`; documented weekly cadence, KPI ladder, directional conversion calculations, Cloudflare/requestId interpretation boundaries, operator decision rules, and required evidence template; preserved docs-only scope and protected runtime boundaries.
- **Dependencies:** RUNTIME008, RUNTIME009, RUNTIME010, QA001 documentation lineage.
- **Operator Decision Required:** No.

## Ready Tasks

### FUNNEL-FIX001
- **Task ID:** FUNNEL-FIX001
- **Task Name:** Main Funnel Stage-Consistent CTA and Link Progression Hardening
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Eliminate wrong-stage CTA/link progression risk in the classic funnel without changing runtime architecture.
- **Allowed Scope:** Route/CTA target audit fixes and stage-accurate copy gating within existing funnel path.
- **Forbidden Scope:** No new features; no scheduling closure; no Stripe behavior change; no HubSpot schema/pipeline edits; no SMS/reminders/install scheduling/dispatch/self-confirmation.
- **Target Files:** `src/pages/**`, `src/routes/**`, `docs/audits/**`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Funnel navigation only.
- **Documentation Updates Required:** Update audit evidence and register status lifecycle.
- **Completion Notes:** Implemented in `docs/audits/funnel_fix001_implementation_rev01.md` with stage-correct CTA and route normalization.
- **Validation Required:** Build + route/CTA grep validation + no forbidden claim regressions.
- **Exit Criteria:** All audited classic-funnel CTAs/links map to stage-correct next steps with no broken-stage destinations.
- **Dependencies:** FUNNEL-OPS001 audit accepted.
- **Operator Decision Required:** No.

### QR-FIX001
- **Task ID:** QR-FIX001
- **Task Name:** QR/Newsite Stage-Safe Claim and Status Hardening
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Remove QR/newsite wording or status cues that imply confirmed scheduling/install readiness before owner confirmation.
- **Allowed Scope:** Bounded QR/newsite status/claim hardening aligned with manual-owner-confirmed scheduling posture.
- **Forbidden Scope:** No route changes; no scheduling automation; no Stripe logic change; no HubSpot schema change.
- **Target Files:** `src/pages/QrLanding.tsx`, `src/newsite/pages/**`, `docs/audits/**`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Funnel messaging only.
- **Documentation Updates Required:** Audit delta log and register lifecycle.
- **Completion Notes:** Implemented in `docs/audits/qr_fix001_implementation_rev01.md` with stage-safe QR/newsite copy hardening and CTA/status continuity checks.
- **Validation Required:** Build + forbidden-claims grep + payment/scheduling promise grep.
- **Exit Criteria:** QR/newsite payment/scheduling claims remain pending-owner-safe and guardrail-compliant.
- **Dependencies:** FUNNEL-OPS001 audit accepted.
- **Operator Decision Required:** No.

### COPY-FIX001
- **Task ID:** COPY-FIX001
- **Task Name:** Forbidden Claim Sweep and Approved Phrasing Matrix
- **Status:** DONE
- **Category:** COPY
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Normalize prohibited claim handling and define approved replacements for future funnel copy updates.
- **Allowed Scope:** Documentation-first claim matrix + bounded copy-risk inventory updates.
- **Forbidden Scope:** No new customer promises; no architecture/runtime behavior changes.
- **Target Files:** `docs/audits/**`, `docs/specs/**`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None (documentation/copy governance).
- **Documentation Updates Required:** Add approved-phrasing matrix reference and update audit register links.
- **Execution Lifecycle:** Promoted READY -> ACTIVE -> DONE in COPY-FIX001 implementation REV01 after bounded copy sweep and validation.
- **Completion Notes:** Implemented in `docs/audits/copy_fix001_implementation_rev01.md` with claim-safe copy rewrites across main, newsite, and shared customer-facing surfaces.
- **Validation Required:** Claim-term grep scans + build.
- **Exit Criteria:** Forbidden claims inventory resolved into approved phrasing matrix and actionable file-level remediation map.
- **Dependencies:** FUNNEL-OPS001 audit accepted.
- **Operator Decision Required:** Yes (final claim-language approvals).

### CRM-FIX001
- **Task ID:** CRM-FIX001
- **Task Name:** Lead-Signal Parity and API Write Reliability Alignment
- **Status:** DONE
- **Category:** CRM
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Ensure parity and reliability across lead-signal implementations while preserving REV03 API-layer-only write rules.
- **Allowed Scope:** API-layer parity/remediation within existing `/api/lead-signal` ownership boundaries.
- **Forbidden Scope:** No HubSpot schema/property/pipeline changes; no frontend direct HubSpot writes.
- **Target Files:** `functions/api/lead-signal.ts`, `api/lead-signal.ts`, `docs/runtime/lead_signal_contract.md`, `docs/runtime/hubspot_sync_contract.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Lead intake + CRM sync orchestration.
- **Documentation Updates Required:** Update runtime contracts with finalized parity ownership notes.
- **Validation Required:** Build + API diff review + CRM-write-path grep.
- **Exit Criteria:** Lead-signal paths are parity-audited with explicit owner path and no schema/pipeline drift.
- **Dependencies:** FUNNEL-OPS001 audit accepted; HubSpot REV03 lock maintained.
- **Operator Decision Required:** Yes (single-path consolidation vs dual-path parity policy).

### LEAD-FIX001
- **Task ID:** LEAD-FIX001
- **Task Name:** Lead Data Continuity / Funnel Intelligence Preservation
- **Status:** DONE
- **Category:** LEAD
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Normalize customer-visible pending-owner states and request lifecycle visibility across funnel variants.
- **Allowed Scope:** State presentation/persistence refinement that preserves manual owner confirmation posture.
- **Forbidden Scope:** No auto-booking; no customer self-confirmation; no install scheduling.
- **Target Files:** `src/pages/**schedule**`, `src/newsite/pages/**schedule**`, `functions/api/lead-signal.ts`, `docs/runtime/scheduling_ownership.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Lead + scheduling handoff state visibility.
- **Documentation Updates Required:** Scheduling ownership and requestId/lead contract deltas where affected.
- **Validation Required:** Build + request status grep + no confirmed-booking claim grep.
- **Exit Criteria:** Pending-owner lifecycle states are consistently represented without implying confirmed appointments.
- **Dependencies:** CRM-FIX001 recommended first.
- **Operator Decision Required:** No.

### EMAIL-FIX001
- **Task ID:** EMAIL-FIX001
- **Task Name:** Customer and Operator Notification Timing Matrix Alignment
- **Status:** DONE
- **Category:** EMAIL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Align outbound message timing/content to explicit runtime states for customer and operator notifications.
- **Allowed Scope:** Template/state-mapping hardening within existing Resend outbound constraints.
- **Forbidden Scope:** No inbound routing changes; no SMS/reminders automation.
- **Target Files:** `functions/api/lead-signal.ts`, `functions/utils/emailTemplates.ts`, `docs/runtime/resend_runtime.md`, `docs/runtime/scheduling_ownership.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Resend outbound notifications.
- **Documentation Updates Required:** Runtime state-to-notification matrix documentation updates.
- **Validation Required:** Build + notification template grep + protected-claim grep.
- **Exit Criteria:** Notification outputs map cleanly to pending-owner/confirmed states with no overstated scheduling promises.
- **Dependencies:** LEAD-FIX001 recommended first.
- **Operator Decision Required:** Yes (SLA/escalation policy thresholds).
- **Completion Notes:** EMAIL-FIX001 implemented bounded lead-signal customer acknowledgement + operator routing/context hardening using existing Resend runtime path; no HubSpot schema changes; no Stripe/scheduling architecture changes; version bumped to v1.0.44; validation + build completed.

### PAYMENT-FIX001
- **Task ID:** PAYMENT-FIX001
- **Task Name:** Post-Deposit Handoff Language and State Clarity
- **Status:** DONE
- **Category:** PAYMENT
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Ensure payment-success and post-deposit messaging do not imply automatic scheduling confirmation.
- **Allowed Scope:** Copy/state framing hardening after verified payment success.
- **Forbidden Scope:** No Stripe checkout/webhook/verification semantic changes.
- **Target Files:** `src/pages/**payment**`, `src/newsite/pages/**payment**`, `docs/runtime/stripe_runtime.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Payment handoff messaging only.
- **Documentation Updates Required:** Stripe runtime handoff note updates if messaging contracts are revised.
- **Validation Required:** Build + payment-claim grep + verification-route integrity check.
- **Exit Criteria:** Post-payment surfaces preserve verified payment success while clearly preserving pending-owner scheduling confirmation.
- **Dependencies:** QR-FIX001 and COPY-FIX001 recommended first.
- **Operator Decision Required:** No.
- **Execution Lifecycle:** Promoted READY -> ACTIVE -> DONE in PAYMENT-FIX001 implementation REV01 after bounded payment handoff verification and claim-safe hardening.
- **Completion Notes:** PAYMENT-FIX001 implemented bounded Stripe payment/deposit handoff copy/state hardening while preserving server-side verification posture and existing Stripe architecture; no HubSpot schema/Stripe product/webhook redesign changes; version bumped to v1.0.45; validation + build completed.

### ARTIFACT-FIX001
- **Task ID:** ARTIFACT-FIX001
- **Task Name:** Quote/Agreement Artifact Lifecycle and Owed-Document Checklist
- **Status:** READY
- **Category:** ARTIFACT
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Normalize artifact lifecycle expectations and define customer owed-document checklist consistency.
- **Allowed Scope:** Artifact handling documentation + bounded artifact flow consistency updates.
- **Forbidden Scope:** No legal-term re-authoring outside approved docs; no route removals.
- **Target Files:** `src/pages/**quote**`, `src/pages/**agreement**`, `src/newsite/pages/**quote**`, `src/newsite/pages/**agreement**`, `docs/audits/**`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Quote/agreement artifact generation and presentation.
- **Documentation Updates Required:** Artifact lifecycle map updates and register lifecycle updates.
- **Validation Required:** Build + artifact route/CTA checks + print/review flow verification.
- **Exit Criteria:** Artifact lifecycle is consistent, traceable, and customer-owed-document expectations are explicit.
- **Dependencies:** FUNNEL-FIX001 recommended first.
- **Operator Decision Required:** No.

### PIPELINE-FIX001
- **Task ID:** PIPELINE-FIX001
- **Task Name:** Intermediate Pipeline State Model Completion
- **Status:** READY
- **Category:** PIPELINE
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Define and align missing intermediate funnel/CRM/scheduling states identified by FUNNEL-OPS001.
- **Allowed Scope:** State-model documentation and bounded transition-mapping updates.
- **Forbidden Scope:** No HubSpot schema/pipeline mutations without explicit Step revision.
- **Target Files:** `docs/runtime/hubspot_sync_contract.md`, `docs/runtime/scheduling_ownership.md`, `docs/audits/**`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Pipeline/state governance documentation.
- **Documentation Updates Required:** Add state-transition map and ownership notes.
- **Validation Required:** State keyword grep + build.
- **Exit Criteria:** Missing states are documented with transition ownership and no schema mutations.
- **Dependencies:** CRM-FIX001 and LEAD-FIX001 recommended first.
- **Operator Decision Required:** Yes (future runtime exposure sequencing).

### QA-FIX001
- **Task ID:** QA-FIX001
- **Task Name:** Funnel Journey Validator Expansion
- **Status:** READY
- **Category:** QA
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Add repeatable validation coverage for links/CTAs/forms/API mappings against the normalized queue outcomes.
- **Allowed Scope:** QA script/checklist enhancement and audit validation documentation.
- **Forbidden Scope:** No funnel architecture changes; no runtime feature additions.
- **Target Files:** `docs/runtime/deployment_validation.md`, `docs/audits/**`, `package.json` (scripts only if needed), `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** QA validation process.
- **Documentation Updates Required:** Deployment validation and audit playbook updates.
- **Validation Required:** Build + QA command set execution evidence.
- **Exit Criteria:** Deterministic validation procedure exists for customer journey integrity and stage-safe claims.
- **Dependencies:** Completion of FUNNEL-FIX001 through PAYMENT-FIX001 recommended.
- **Operator Decision Required:** No.

---

## Active Tasks (Execution Driver)


### QUOTESYSTEM-016
- **Task ID:** QUOTESYSTEM-016
- **Task Name:** Live Test / Bug Fix Pass
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Run a focused live-test stabilization pass on the local WNYHS Quote Workspace using the built-in Funeral Home Test Case and fix only defects, broken flows, usability blockers, or data-display issues found during the test.
- **Allowed Scope:** Local Quote Workspace validation for `/operator/property-model`, `/operator/property-model/quote-preview`, and `/operator/property-model/installer-packet`; Funeral Home Test Case load/save/display; local JSON import/export collision behavior; missing recordId propagation; field rendering after normalization; obvious mislabeled fields; customer-facing quote-preview exposure correction; documentation and version updates.
- **Forbidden Scope:** No durable storage, image upload, AI redraw generation, HubSpot sync, payment processing, inventory automation, ordering automation, scheduling automation, auth, PDF generation, email sending, public page redesign, catalog schema expansion unless required for a defect, protected runtime rewrites, funnel order changes, or unrelated feature work.
- **Target Files:** `src/lib/siteVersion.ts`, `src/pages/PropertyModelQuotePreview.tsx`, `docs/quotesystem/IMPLEMENTATION016_Live_Test_Bug_Fix_PASS_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Internal local Quote Workspace quote-preview display only; local browser storage validation only.
- **Documentation Updates Required:** Create the implementation note and register it in the quote-system map, document catalog, markdown manifest, and task register.
- **Validation Required:** `npm run build`; targeted lint/typecheck for touched runtime files; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; token/CSS hardcoded color scan for touched styling; route smoke check for `/operator/property-model`, `/operator/property-model/quote-preview`, and `/operator/property-model/installer-packet`.
- **Exit Criteria:** Version is bumped to `v1.0.142`; Funeral Home Test Case creates and selects a new local record; save status, fields, concerns, areas, evidence, handoff, solutions, BOM, reconciliation, pricing, and import/export controls remain usable; quote preview and installer packet load by `recordId`; import collision creates a copy; internal installer notes are not exposed in the customer-facing quote preview; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** QUOTESYSTEM-004 through QUOTESYSTEM-015, PROPERTY001, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Completed the focused local live-test pass with the Funeral Home Test Case. Fixed customer-facing quote-preview overexposure by removing internal installer-note text from the quote hardware table while preserving installer notes in the internal installer packet. Confirmed local import/export collision-as-copy behavior and route loading by `recordId` in the workspace, quote preview, and installer packet. No HubSpot, Stripe/payment runtime, durable storage, image upload, AI redraw, inventory, ordering, scheduling, auth, PDF, email, public page, dependency, or package-lock changes were made.

Only tasks in this section with `Status: ACTIVE` are executable by Codex.

### VISPARITY007D
- **Task ID:** VISPARITY007D
- **Task Name:** Before/After Visual Comparison Matrix
- **Status:** DONE
- **Category:** QA / GOV / VISUAL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the docs-only Before/After Visual Comparison Matrix mapping VISPARITY007B current-state evidence to VISPARITY007C proposed visual standard evidence for every canonical VISPARITY003 component, and define visual-board, image-generation, operator-review, Visual Freeze, and VISPARITY008+ sequencing.
- **Allowed Scope:** Create `docs/design-system/visual-parity/VISPARITY007D_BEFORE_AFTER_VISUAL_COMPARISON_MATRIX_REV01.md`; update `docs/design-system/visual-parity/README.md`; update this VISPARITY007D task record in the Master Task Register.
- **Forbidden Scope:** No source code, route files, CSS, tokens, UI components, images/assets, screenshots, visual boards, PDFs, Playwright tests, baseline folders, hooks, QA checks, sitemap, robots, runtime/API files, Stripe/payment behavior, HubSpot behavior, scheduling, Cloudflare config, dependencies, package-lock, final visual implementation approval, Active KAOS Rule activation, PR merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/VISPARITY007D_BEFORE_AFTER_VISUAL_COMPARISON_MATRIX_REV01.md`, `docs/design-system/visual-parity/README.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only visual comparison and approval orchestration.
- **Documentation Updates Required:** Create VISPARITY007D, link it from the visual-parity README, and record this task in the Master Task Register.
- **Validation Required:** `git diff --check`; targeted `rg` checks for VISPARITY007D, current/proposed references, visual-board plan, image-generation contract, operator-review workflow, Visual Freeze, future sequence, canonical component coverage, decision vocabulary, non-authority statements, boundary phrases, and merge markers; `npm run build`.
- **Exit Criteria:** VISPARITY007D exists; every canonical VISPARITY003 component is covered; Visual Board Generation Plan, Image Generation Contract, Operator Review Workflow, Visual Freeze milestone, future task sequence, non-authority statement, and recommended next task are documented; README and this register are updated only as needed; only allowed files changed; forbidden systems and artifacts remain untouched; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `VISPARITY007D` work order; VISPARITY001 through VISPARITY007C; DESIGN002; PAGE_TOKEN_COMPLIANCE_GATE; CATEGORY003; public funnel, QR funnel, brand asset, page layout, and header/footer standards; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge. Future visual boards, visual artifacts, Visual Freeze, and implementation require separate bounded authorization.
- **Completion Notes:** Created the docs-only VISPARITY007D Before/After Visual Comparison Matrix and visual-approval orchestration plan. The matrix maps every canonical VISPARITY003 component from VISPARITY007B current-state evidence to VISPARITY007C proposed visual standard evidence, records business, UX, accessibility, and psychological goals, and marks operator approval and implementation blocking for every component. Documented boards VISPARITY007E through VISPARITY007F, VISPARITY007G operator review workflow, Visual Freeze, and controlled VISPARITY008+ sequencing. No source/runtime/UI/routes/CSS/tokens/images/assets/screenshots/visual boards/PDFs/Playwright/hooks/QA checks, HubSpot, Stripe/payment, scheduling, Cloudflare config, dependencies, package-lock, final visual approval, Active KAOS Rule, or merge were changed or created.

### VISPARITY007E
- **Task ID:** VISPARITY007E
- **Task Name:** Current State Visual Board
- **Status:** DONE
- **Category:** QA / GOV / VISUAL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the docs-only Current State Visual Board specification for WNYHS visual parity, converting VISPARITY007B current evidence and VISPARITY007D board planning into the before board artifact plan for VISPARITY007G operator review.
- **Allowed Scope:** Create `docs/design-system/visual-parity/VISPARITY007E_CURRENT_STATE_VISUAL_BOARD_SPEC_REV01.md`; update `docs/design-system/visual-parity/README.md`; update this VISPARITY007E task record in the Master Task Register.
- **Forbidden Scope:** No source code, route files, CSS, tokens, UI components, images/assets, screenshots, visual boards, generated images, PDFs, Playwright tests, baseline folders, hooks, QA checks, sitemap, robots, runtime/API files, Stripe/payment behavior, HubSpot behavior, scheduling, Cloudflare config, dependencies, package-lock, final visual implementation approval, Active KAOS Rule activation, PR merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/VISPARITY007E_CURRENT_STATE_VISUAL_BOARD_SPEC_REV01.md`, `docs/design-system/visual-parity/README.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only current-state visual board specification.
- **Documentation Updates Required:** Create VISPARITY007E, link it from the visual-parity README, and record this task in the Master Task Register.
- **Validation Required:** `git diff --check`; targeted `rg` checks for VISPARITY007E, Current State Visual Board, before board, Board 01 through Board 06, VISPARITY007F, current-state visual style rules, future artifact plan, component coverage, boundary phrases, and merge markers; `npm run build`.
- **Exit Criteria:** VISPARITY007E exists; Purpose, Boundary, Source inputs, Current State Board Set, Board Layout Specification, Current State Visual Style Rules, Current Board Artifact Plan, Current Board Data Requirements, Limitations, and recommended next task are documented; README and this register are updated only as needed; only allowed files changed; forbidden systems and artifacts remain untouched; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `VISPARITY007E` work order; latest `main`; merged PR #430 / VISPARITY007D; VISPARITY001 through VISPARITY007D; DESIGN002; PAGE_TOKEN_COMPLIANCE_GATE; CATEGORY003; public funnel, QR funnel, brand asset, page layout, and header/footer standards; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge. VISPARITY007F Proposed Visual Board, VISPARITY007G Operator Review Packet, Visual Freeze, artifacts, and implementation require separate bounded authorization.
- **Completion Notes:** Created the docs-only VISPARITY007E Current State Visual Board specification. The spec defines six current-state boards for Navigation/Shell/Hero, Typography/Actions, Containers/Cards/Tiles, Forms, Images/Assets/Proof, and Accessibility/States; defines board layout fields, current-state visual style rules, future artifact plan, component data requirements, limitations, and VISPARITY007F as the recommended next task. No source/runtime/UI/routes/CSS/tokens/images/assets/screenshots/visual boards/generated images/PDFs/Playwright/hooks/QA checks, HubSpot, Stripe/payment, scheduling, Cloudflare config, dependencies, package-lock, final visual approval, Active KAOS Rule, or merge were changed or created.

### VISPARITY007F
- **Task ID:** VISPARITY007F
- **Task Name:** Proposed Visual Board
- **Status:** DONE
- **Category:** QA / GOV / VISUAL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the docs-only Proposed Visual Board specification for WNYHS visual parity, converting VISPARITY007C proposed-standard evidence and VISPARITY007D board planning into the after board artifact plan for VISPARITY007G operator review.
- **Allowed Scope:** Create `docs/design-system/visual-parity/VISPARITY007F_PROPOSED_VISUAL_BOARD_SPEC_REV01.md`; update `docs/design-system/visual-parity/README.md`; update this VISPARITY007F task record in the Master Task Register.
- **Forbidden Scope:** No source code, route files, CSS, tokens, UI components, images/assets, screenshots, visual boards, generated images, PDFs, Playwright tests, baseline folders, hooks, QA checks, sitemap, robots, runtime/API files, Stripe/payment behavior, HubSpot behavior, scheduling, Cloudflare config, dependencies, package-lock, final visual implementation approval, proposed visual standard approval, Active KAOS Rule activation, PR merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/VISPARITY007F_PROPOSED_VISUAL_BOARD_SPEC_REV01.md`, `docs/design-system/visual-parity/README.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only proposed visual board specification.
- **Documentation Updates Required:** Create VISPARITY007F, link it from the visual-parity README, and record this task in the Master Task Register.
- **Validation Required:** `git diff --check`; targeted `rg` checks for VISPARITY007F, Proposed Visual Board, after board, Board 01 through Board 06, VISPARITY007G, proposed visual style rules, future artifact plan, component coverage, boundary phrases, and merge markers; `npm run build`.
- **Exit Criteria:** VISPARITY007F exists; Purpose, Boundary, Source inputs, Proposed Visual Board Set, Board Layout Specification, Proposed Visual Style Rules, Proposed Board Artifact Plan, Proposed Board Data Requirements, Limitations, and recommended next task are documented; README and this register are updated only as needed; only allowed files changed; forbidden systems and artifacts remain untouched; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `VISPARITY007F` work order; latest `main`; merged PR #431 / VISPARITY007E; VISPARITY001 through VISPARITY007E; DESIGN002; PAGE_TOKEN_COMPLIANCE_GATE; CATEGORY003; public funnel, QR funnel, brand asset, page layout, and header/footer standards; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge. VISPARITY007G Operator Review Packet, Visual Freeze, artifacts, and implementation require separate bounded authorization.
- **Completion Notes:** Created the docs-only VISPARITY007F Proposed Visual Board specification. The spec defines six proposed boards for Navigation/Shell/Hero, Typography/Actions, Containers/Cards/Tiles, Forms, Images/Assets/Proof, and Accessibility/States; defines board layout fields, proposed visual style rules, future artifact plan, proposed board data requirements, limitations, and VISPARITY007G as the recommended next task. No source/runtime/UI/routes/CSS/tokens/images/assets/screenshots/visual boards/generated images/PDFs/Playwright/hooks/QA checks, HubSpot, Stripe/payment, scheduling, Cloudflare config, dependencies, package-lock, final visual approval, proposed visual standard approval, Active KAOS Rule, or merge were changed or created.

### VISPARITY007G
- **Task ID:** VISPARITY007G
- **Task Name:** Operator Review Packet
- **Status:** DONE
- **Category:** QA / GOV / VISUAL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the docs-only Operator Review Packet specification for WNYHS visual parity, defining how the operator will review Current State and Proposed Visual Boards, record decisions, request revisions, approve or reject proposed visual direction, and prepare the later Visual Freeze gate before implementation begins.
- **Allowed Scope:** Create `docs/design-system/visual-parity/VISPARITY007G_OPERATOR_REVIEW_PACKET_SPEC_REV01.md`; update `docs/design-system/visual-parity/README.md`; update this VISPARITY007G task record in the Master Task Register.
- **Forbidden Scope:** No source code, route files, CSS, tokens, UI components, images/assets, screenshots, visual boards, generated images, PDFs, review packet artifacts, Playwright tests, baseline folders, hooks, QA checks, sitemap, robots, runtime/API files, Stripe/payment behavior, HubSpot behavior, scheduling, Cloudflare config, dependencies, package-lock, final visual implementation approval, proposed visual standard approval, Visual Freeze approval, Active KAOS Rule activation, PR merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/VISPARITY007G_OPERATOR_REVIEW_PACKET_SPEC_REV01.md`, `docs/design-system/visual-parity/README.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only operator review packet specification.
- **Documentation Updates Required:** Create VISPARITY007G, link it from the visual-parity README, and record this task in the Master Task Register.
- **Validation Required:** `git diff --check`; targeted `rg` checks for VISPARITY007G, Operator Review Packet, Visual Freeze Readiness, Component-Level Decision Matrix, Revision Queue, Approval Summary, Implementation Handoff, VISUALFREEZE001, decision vocabulary, readiness conditions, future artifact paths, non-authority phrases, boundary phrases, and merge markers; `npm run build`.
- **Exit Criteria:** VISPARITY007G exists; Purpose, Boundary, Source inputs, Review packet structure, Operator decision model, Component-level review fields, Board-level review fields, Visual Freeze readiness checklist, Review artifact plan, Non-authority statement, and recommended next task are documented; README and this register are updated only as needed; only allowed files changed; forbidden systems and artifacts remain untouched; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `VISPARITY007G` work order; latest `main`; merged PR #432 / VISPARITY007F; VISPARITY001 through VISPARITY007F; DESIGN002; PAGE_TOKEN_COMPLIANCE_GATE; CATEGORY003; public funnel, QR funnel, brand asset, page layout, and header/footer standards; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge. VISUALFREEZE001, Visual Freeze approval, review packet artifact generation, visual artifacts, and implementation require separate bounded authorization.
- **Completion Notes:** Created the docs-only VISPARITY007G Operator Review Packet specification. The spec defines the future packet sections, board-by-board review model, component-level decision matrix, Revision Queue, Approval Summary, Visual Freeze Readiness checklist, Implementation Handoff, allowed operator decisions, board-level and component-level review fields, future artifact plan, non-authority statement, and VISUALFREEZE001 as the recommended next task. No source/runtime/UI/routes/CSS/tokens/images/assets/screenshots/visual boards/generated images/PDFs/review packet artifacts/Playwright/hooks/QA checks, HubSpot, Stripe/payment, scheduling, Cloudflare config, dependencies, package-lock, final visual approval, proposed visual standard approval, Visual Freeze approval, Active KAOS Rule, or merge were changed or created.

### VISUALFREEZE001
- **Task ID:** VISUALFREEZE001
- **Task Name:** Visual Freeze Approval Standard
- **Status:** DONE
- **Category:** QA / GOV / VISUAL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the docs-only Visual Freeze Approval Standard for WNYHS visual parity, defining the formal approval gate that must be satisfied before any VISPARITY008+ implementation task may change source, CSS, tokens, routes, UI components, images, or public visual behavior.
- **Allowed Scope:** Create `docs/design-system/visual-parity/VISUALFREEZE001_VISUAL_FREEZE_APPROVAL_STANDARD_REV01.md`; update `docs/design-system/visual-parity/README.md`; add/update this VISUALFREEZE001 tracking record in the Master Task Register.
- **Forbidden Scope:** No source code, route files, CSS, tokens, UI components, images/assets, screenshots, visual boards, generated images, PDFs, review packet artifacts, Playwright tests, baseline folders, hooks, QA checks, sitemap, robots, runtime/API files, Stripe/payment behavior, HubSpot behavior, scheduling, Cloudflare config, dependencies, package-lock, final visual implementation approval, proposed visual standard approval, Visual Freeze triggering, Active KAOS Rule activation, PR merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/VISUALFREEZE001_VISUAL_FREEZE_APPROVAL_STANDARD_REV01.md`, `docs/design-system/visual-parity/README.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only approval-gate standard.
- **Documentation Updates Required:** Create VISUALFREEZE001, link it from the visual-parity README, and record this task in the Master Task Register because it was missing and the prompt explicitly authorized adding/updating it in this PR.
- **Validation Required:** `git diff --check`; targeted `rg` checks for VISUALFREEZE001, Visual Freeze Approval Standard, approval gate, VISUALART001, VISUALART002, VISUALART003, VISUALFREEZE002, VISPARITY008, VISPARITY009, VISPARITY010, blocking conditions, approval evidence, artifact plan, drift prevention, non-authority phrases, boundary phrases, and merge markers; `npm run build`.
- **Exit Criteria:** VISUALFREEZE001 exists; Purpose, Boundary, Source inputs, Definition of Visual Freeze, Visual Freeze prerequisites, Required approval evidence, Approval decision rules, Blocking conditions, Visual Freeze artifact plan, Implementation handoff rules, Drift prevention rule, Future task sequence, Non-authority statement, and recommended next task are documented; README and this register are updated only as needed; only allowed files changed; forbidden systems and artifacts remain untouched; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded `VISUALFREEZE001` work order; latest `main`; merged PR #433 / VISPARITY007G; VISPARITY001 through VISPARITY007G; DESIGN002; PAGE_TOKEN_COMPLIANCE_GATE; CATEGORY003; public funnel, QR funnel, brand asset, page layout, and header/footer standards; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge. Visual Freeze approval, review packet artifact generation, visual artifacts, and implementation require separate bounded authorization.
- **Completion Notes:** Created the docs-only Visual Freeze Approval Standard. The standard defines Visual Freeze as a future formal operator approval gate, records prerequisites, required approval evidence, approval decision rules, blocking conditions, future artifact outputs, implementation handoff rules, drift prevention rules, future VISUALART/VISUALFREEZE/VISPARITY sequence, non-authority statements, and VISUALART001 as the recommended next task. No source/runtime/UI/routes/CSS/tokens/images/assets/screenshots/visual boards/generated images/PDFs/review packet artifacts/Playwright/hooks/QA checks, HubSpot, Stripe/payment, scheduling, Cloudflare config, dependencies, package-lock, final visual approval, proposed visual standard approval, Visual Freeze triggering, Active KAOS Rule, or merge were changed or created.

### VISUALART001
- **Task ID:** VISUALART001
- **Task Name:** Generate Current State Visual Board
- **Status:** DONE
- **Category:** QA / VISUAL / ARTIFACT
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Generate current-state public website visual evidence artifacts for operator review using Playwright/Chromium local capture without changing website implementation.
- **Allowed Scope:** Create current-state artifact README, screenshot manifest, component inventory, page inventory, board PNGs, screenshots, and component crops under `docs/design-system/visual-parity/artifacts/current-state/`; update `docs/design-system/visual-parity/README.md`; update this tracking record.
- **Forbidden Scope:** No source code, route files, CSS, tokens, UI components, public image replacements, runtime/API files, Stripe/payment behavior, HubSpot behavior, scheduling behavior, Cloudflare config, dependencies, package-lock, proposed visual boards, operator review packet PDF, Playwright test enforcement, hooks, QA checks, final visual implementation approval, proposed visual standard approval, Visual Freeze triggering, Active KAOS Rule activation, PR merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/artifacts/current-state/**`, `docs/design-system/visual-parity/README.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Local read-only rendering and artifact generation only.
- **Documentation Updates Required:** Create current-state artifact README and REV01 manifests; link the artifact folder from the visual-parity README; add this tracking record because VISUALART001 was missing and the bounded prompt explicitly authorized adding/updating it.
- **Validation Required:** `git diff --check`; targeted `rg` checks for VISUALART001, current-state visual evidence, board filenames, manifest filenames, viewport contract, non-authority statements, and merge markers; `npm run build`; verify board PNGs exist; verify screenshot manifest references existing files; verify no forbidden source/runtime/system files changed.
- **Exit Criteria:** Current-state artifact structure exists; six required board PNGs exist; screenshot, component, and page REV01 manifests exist; artifact README exists; all artifacts remain under the allowed current-state artifact folder; README and MTR are updated; forbidden systems and source surfaces remain untouched; validation passes; draft PR is opened without merge.
- **Dependencies:** Bounded VISUALART001 prompt-created work order; latest `main`; merged PR #434 / VISUALFREEZE001; VISPARITY001 through VISPARITY007G; VISUALFREEZE001; DESIGN002; PAGE_TOKEN_COMPLIANCE_GATE; CATEGORY003; public funnel, QR funnel, brand asset, page layout, and header/footer standards; Playwright Chromium availability.
- **Operator Decision Required:** Review generated current-state boards and decide whether to authorize VISUALART002.
- **Completion Notes:** Generated current-state visual evidence artifacts under `docs/design-system/visual-parity/artifacts/current-state/`. Captured 23 selected public WNYHS routes locally with Playwright Chromium, produced 70 full-page screenshot records, 19 component/state PNG files, and six current-state board PNGs. Created REV01 screenshot, component, and page manifests plus the artifact README. No source/runtime/UI/routes/CSS/tokens/public images/API files, HubSpot, Stripe/payment, scheduling, Cloudflare config, dependencies, package-lock, proposed visual boards, operator packet PDFs, Playwright tests, hooks, QA checks, Visual Freeze approval, proposed visual standard approval, Active KAOS Rule, merge, or version bump were changed or created.

### VISUALART002
- **Task ID:** VISUALART002
- **Task Name:** Generate Proposed Visual Board
- **Status:** DONE
- **Category:** QA / VISUAL / ARTIFACT
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Generate the proposed-state visual board PNG artifacts for operator review using approved VISPARITY proposed-standard documents without changing website implementation.
- **Allowed Scope:** Create proposed artifact README, proposed visual board manifest, proposed component inventory, and six proposed board PNGs under `docs/design-system/visual-parity/artifacts/proposed/`; update `docs/design-system/visual-parity/README.md`; add/update this tracking record.
- **Forbidden Scope:** No source code, route files, CSS, tokens, UI components, public image replacements, runtime/API files, Stripe/payment behavior, HubSpot behavior, scheduling behavior, Cloudflare config, dependencies, package-lock, operator review packet PDF, Playwright tests, hooks, QA automation, final visual implementation approval, proposed visual standard approval, Visual Freeze triggering, Active KAOS Rule activation, PR merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/artifacts/proposed/**`, `docs/design-system/visual-parity/README.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Static proposed visual artifact generation only.
- **Documentation Updates Required:** Create proposed artifact README and REV01 manifests; link the proposed artifact folder from the visual-parity README; add this tracking record because VISUALART002 was executed from a bounded prompt-created work order.
- **Validation Required:** `git diff --check`; targeted `rg` checks for VISUALART002, proposed visual direction, Needs Operator Review, VISUALART003, required board filenames, non-authority statements, proposed manifests, design psychology phrases, and merge markers; `npm run build`; verify six proposed board PNG files exist; verify proposed manifest references existing board files; verify component inventory covers VISPARITY003 canonical components; verify no forbidden source/runtime/UI/CSS/token/route/protected-system/dependency files changed.
- **Exit Criteria:** Proposed artifact structure exists; six required proposed board PNGs exist; proposed visual board manifest and proposed component inventory exist; artifact README exists; all generated board artifacts remain under the proposed artifact folder; README and MTR are updated; forbidden systems and source surfaces remain untouched; validation passes; draft PR is opened without merge.
- **Dependencies:** Bounded VISUALART002 prompt-created work order; latest `main`; merged PR #435 / VISUALART001; VISUALART001 current-state artifacts; VISPARITY007C; VISPARITY007D; VISPARITY007F; VISPARITY007G; VISUALFREEZE001; DESIGN002; PAGE_TOKEN_COMPLIANCE_GATE; CATEGORY003; public funnel, QR funnel, brand asset, page layout, and header/footer standards.
- **Operator Decision Required:** Review generated proposed boards and decide whether to authorize VISUALART003.
- **Completion Notes:** Generated proposed visual board artifacts under `docs/design-system/visual-parity/artifacts/proposed/`. Produced six proposed-state board PNGs, a proposed visual board manifest, a proposed component inventory covering 52 canonical VISPARITY003 components and state roles, and a proposed artifact README. These artifacts show proposed visual direction only and remain Proposed / Needs Operator Review. No source/runtime/UI/routes/CSS/tokens/public images/API files, HubSpot, Stripe/payment, scheduling, Cloudflare config, dependencies, package-lock, operator review packet PDF, Playwright tests, hooks, QA automation, Visual Freeze approval, proposed visual standard approval, Active KAOS Rule, merge, or version bump were changed or created.

### VISUALART003
- **Task ID:** VISUALART003
- **Task Name:** Generate Operator Review Packet
- **Status:** DONE
- **Category:** QA / VISUAL / ARTIFACT
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Assemble the existing VISUALART001 Current State Visual Boards and VISUALART002 Proposed Visual Boards into operator-review packet artifacts for comparison and decision recording before Visual Freeze.
- **Allowed Scope:** Create operator-review artifact README, markdown review packet, component decision matrix, board decision matrix, revision queue, Visual Freeze readiness checklist, artifact manifest, and optional thumbnails under `docs/design-system/visual-parity/artifacts/operator-review/`; update `docs/design-system/visual-parity/README.md`; add/update this tracking record.
- **Forbidden Scope:** No source code, route files, CSS, tokens, UI components, public image replacements, runtime/API files, Stripe/payment behavior, HubSpot behavior, scheduling behavior, Cloudflare config, dependencies, package-lock, new proposed boards, new current-state screenshots, public image assets, Playwright tests, hooks, QA automation, Visual Freeze approval, proposed visual standard approval, final visual implementation approval, Active KAOS Rule activation, PR merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/artifacts/operator-review/**`, `docs/design-system/visual-parity/README.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Static operator-review artifact generation only.
- **Documentation Updates Required:** Create operator-review packet artifacts; link the operator-review artifact folder from the visual-parity README; add this tracking record because VISUALART003 was executed from a bounded prompt-created work order.
- **Validation Required:** `git diff --check`; targeted `rg` checks for VISUALART003, Operator Review Packet, Component Decision Matrix, Board Decision Matrix, Revision Queue, Visual Freeze Readiness Checklist, VISUALFREEZE002, non-authority statements, Pending/Not reviewed/Not Ready values, required board filenames, required artifact filenames, and merge markers; `npm run build`; verify operator-review folder exists; verify required packet/decision/manifest markdown files exist; verify component decision matrix covers all VISUALART002 component inventory table rows and documents any source count mismatch; verify board decision matrix contains all six boards; verify Visual Freeze checklist initial status is Not Ready; verify no forbidden source/runtime/UI/CSS/token/route/protected-system/dependency files changed.
- **Exit Criteria:** Operator-review artifact structure exists; required packet, decision, readiness, revision, and manifest markdown files exist; component matrix covers all VISUALART002 component inventory table rows; board matrix has six rows; operator decisions remain Pending / Not reviewed; Visual Freeze readiness remains Not Ready; generated artifacts live only under the operator-review artifact folder; README and MTR are updated; forbidden systems and source surfaces remain untouched; validation passes; draft PR is opened without merge.
- **Dependencies:** Bounded VISUALART003 prompt-created work order; latest `main`; merged PR #436 / VISUALART002; VISUALART001 current-state artifacts; VISUALART002 proposed artifacts; VISPARITY003; VISPARITY007B; VISPARITY007C; VISPARITY007D; VISPARITY007E; VISPARITY007F; VISPARITY007G; VISUALFREEZE001; current governance authority chain; `docs/codex/CODEX_RUN_CONTRACT.md`; OPS004; OPS005; visual standards.
- **Operator Decision Required:** Review generated operator-review packet artifacts and decide whether to complete operator review and authorize `VISUALFREEZE002 - Operator Visual Freeze Decision Record`.
- **Completion Notes:** Generated operator-review artifacts under `docs/design-system/visual-parity/artifacts/operator-review/`. Created the packet README, `OPERATOR_REVIEW_PACKET_REV01.md`, `COMPONENT_DECISION_MATRIX_REV01.md` with 61 Pending / Not reviewed component/state rows covering all rows found in the VISUALART002 component inventory table, `BOARD_DECISION_MATRIX_REV01.md` with six Pending / Not reviewed board rows, `REVISION_QUEUE_REV01.md`, `VISUAL_FREEZE_READINESS_CHECKLIST_REV01.md` with initial status Not Ready, `OPERATOR_REVIEW_ARTIFACT_MANIFEST_REV01.md`, and optional thumbnails derived from existing current-state and proposed board PNGs. The source VISUALART002 inventory summary says 52 rows, but the table contains 61 rows; the operator-review matrix covers all 61 table rows. PDF generation was skipped because no existing no-dependency markdown-to-PDF workflow was identified. These artifacts support operator review only and do not approve the proposed design, authorize implementation, replace CSS/token governance, or trigger Visual Freeze. No source/runtime/UI/routes/CSS/tokens/public images/API files, HubSpot, Stripe/payment, scheduling, Cloudflare config, dependencies, package-lock, new current/proposed boards, Playwright tests, hooks, QA automation, Visual Freeze approval, proposed visual standard approval, Active KAOS Rule, merge, or version bump were changed or created.

### DESIGN003
- **Task ID:** DESIGN003
- **Task Name:** WNYHS Light Canvas Visual Language Standard
- **Status:** DONE
- **Category:** DESIGN / GOVERNANCE / VISUAL STANDARD
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the canonical operator-approved WNYHS Light Canvas Visual Language Standard for non-image UI formatting only.
- **Allowed Scope:** Create `docs/design-system/DESIGN003_WNYHS_LIGHT_CANVAS_VISUAL_LANGUAGE_STANDARD_REV01.md`; update `docs/design-system/visual-parity/README.md`; add/update this tracking record because DESIGN003 was missing as its own MTR record and the bounded prompt explicitly authorized adding/updating it.
- **Forbidden Scope:** No source code, route files, CSS, tokens, UI components, public image assets, page copy, headlines, CTA wording, pricing/package wording, SEO copy, runtime/API files, Stripe/payment behavior, HubSpot behavior, scheduling behavior, Cloudflare config, dependencies, package-lock, visual boards, generated images, Playwright tests, hooks, QA automation, Visual Freeze approval, final visual implementation approval, Active KAOS Rule activation, PR merge, or version bump.
- **Target Files:** `docs/design-system/DESIGN003_WNYHS_LIGHT_CANVAS_VISUAL_LANGUAGE_STANDARD_REV01.md`, `docs/design-system/visual-parity/README.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only visual language standard.
- **Documentation Updates Required:** Create DESIGN003 REV01, link it from the visual-parity README, and record this task in the Master Task Register.
- **Validation Required:** `git diff --check`; targeted `rg` checks for DESIGN003, Light Canvas Visual Language, warm light, creamy white, non-image UI formatting, DESIGN004, VISUALREV001, VISUALFREEZE002, required colors, typography terms, content/image/non-authority boundary phrases, avoided style phrases, merge markers, allowed-file-only diff, and `npm run build`.
- **Exit Criteria:** DESIGN003 exists; Purpose, Boundary, Explicit operator decision, Design positioning, Color system, Typography system, Layout and spacing, Surface rules, Component style rules, Radius/borders/shadows/motion, Button rules, Form rules, Image boundary, Content boundary, Implementation sequencing, Non-authority statement, Scope compliance, and recommended next task are documented; README and MTR are updated only as needed; only allowed files changed; forbidden systems and artifacts remain untouched; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded DESIGN003 work order; latest `main`; merged PR #437 / VISUALART003; existing visual parity docs/artifacts; VISPARITY003; VISPARITY004; VISPARITY007C; VISUALART001 artifacts summary; VISUALART002 artifacts summary; VISUALART003 operator packet summary; VISUALFREEZE001; DESIGN002; PAGE_TOKEN_COMPLIANCE_GATE; CATEGORY003; brand asset standards; page layout standards; header/footer standards; public funnel standards; QR funnel standards; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge. DESIGN004, VISUALREV001, VISUALFREEZE002, VISPARITY008+, source/CSS/token/UI/image/runtime implementation, and Visual Freeze remain separate bounded tasks.
- **Completion Notes:** Created the docs-only DESIGN003 Light Canvas Visual Language Standard. The standard records the operator-approved warm light / creamy white public canvas direction, white and cream surface model, controlled trust navy use, premium gold accent, charcoal readable text, Manrope/Inter typography direction, component styling rules, button/form/state rules, image and content boundaries, non-authority statements, and future sequencing through DESIGN004, VISUALREV001, VISUALFREEZE002, VISPARITY008, VISPARITY009, VISPARITY010, and page-family rollout tasks. No source/runtime/UI/routes/CSS/tokens/public images/API files, HubSpot, Stripe/payment, scheduling, Cloudflare config, dependencies, package-lock, visual boards, generated images, Playwright tests, hooks, QA automation, Visual Freeze approval, implementation approval, Active KAOS Rule, merge, or version bump were changed or created.

### DESIGN004
- **Task ID:** DESIGN004
- **Task Name:** WNYHS Component Catalog
- **Status:** DONE
- **Category:** DESIGN / GOVERNANCE / COMPONENT CATALOG
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the canonical WNYHS non-image UI component catalog for future visual implementation by translating DESIGN003 and VISPARITY003 into component-level surface, typography, state, accessibility, token-role, copy-boundary, and image-boundary expectations.
- **Allowed Scope:** Create `docs/design-system/DESIGN004_WNYHS_COMPONENT_CATALOG_REV01.md`; update `docs/design-system/visual-parity/README.md` if appropriate; add/update this tracking record because DESIGN004 was missing from the Master Task Register and the bounded prompt explicitly authorized adding/updating it.
- **Forbidden Scope:** No source code, route files, CSS, tokens, UI components, public image assets, page copy, headlines, CTA wording, pricing/package wording, SEO copy, runtime/API files, Stripe/payment behavior, HubSpot behavior, scheduling behavior, Cloudflare config, dependencies, package-lock, visual boards, generated images, current/proposed/operator-review artifact edits, Playwright tests, hooks, QA automation, Visual Freeze approval, final visual implementation approval, Active KAOS Rule activation, PR merge, or version bump.
- **Target Files:** `docs/design-system/DESIGN004_WNYHS_COMPONENT_CATALOG_REV01.md`, `docs/design-system/visual-parity/README.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only component catalog.
- **Documentation Updates Required:** Create DESIGN004 REV01, link it from the visual-parity README, and record this task in the Master Task Register.
- **Validation Required:** `git diff --check`; targeted `rg` checks for DESIGN004, WNYHS Component Catalog, Not implemented by DESIGN004, DESIGN003, VISUALREV001, VISUALFREEZE002, VISPARITY008, canonical component coverage, token/surface mapping terms, state requirement terms, content/image/runtime boundary phrases, non-authority phrases, and merge markers; verify only allowed files changed; `npm run build`.
- **Exit Criteria:** DESIGN004 exists; Purpose, Boundary, Source authority, Component catalog table format, full VISPARITY003 component coverage, Surface and token role mapping, State requirements, Component implementation rules, Special component notes, Approval posture, Future sequence, Non-authority statement, Scope compliance, and recommended next task are documented; README and MTR are updated only as needed; only allowed files changed; forbidden systems and artifacts remain untouched; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded DESIGN004 work order; latest `main`; merged PR #438 / DESIGN003; existing visual parity docs/artifacts; DESIGN003; VISPARITY003; VISPARITY004; VISPARITY007C; VISUALART001 artifact summary; VISUALART002 artifact summary; VISUALART003 operator packet summary; VISUALFREEZE001; DESIGN002; PAGE_TOKEN_COMPLIANCE_GATE; CATEGORY003; brand asset standards; page layout standards; header/footer standards; public funnel standards; QR funnel standards; current governance authority chain.
- **Operator Decision Required:** Review draft PR and decide whether to merge. VISUALREV001, VISUALFREEZE002, VISPARITY008+, source/CSS/token/UI/image/runtime implementation, and Visual Freeze remain separate bounded tasks.
- **Completion Notes:** Created the docs-only DESIGN004 WNYHS Component Catalog and linked it from the visual-parity README. The catalog covers all VISPARITY003 canonical components across navigation/shell, page structure, text, actions, containers, strategic/unique, forms, image-role containers, and states; maps component groups to DESIGN003 token roles; defines default, hover, focus, active, disabled, loading, success, warning, and error requirements; records special Core Panel, Vault Tile, QR Campaign Block, form, and image boundaries; and states every row is `Not implemented by DESIGN004`. No source/runtime/UI/routes/CSS/tokens/public images/API files, current/proposed/operator-review artifacts, HubSpot, Stripe/payment, scheduling, Cloudflare config, dependencies, package-lock, visual boards, generated images, Playwright tests, hooks, QA automation, Visual Freeze approval, implementation approval, Active KAOS Rule, merge, or version bump were changed or created.

### VISUALREV001
- **Task ID:** VISUALREV001
- **Task Name:** Regenerate Proposed Boards using DESIGN003/DESIGN004 Light Canvas Standard
- **Status:** DONE
- **Category:** QA / VISUAL / ARTIFACT
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Regenerate proposed visual review boards as useful component/page design-review artifacts based on DESIGN003, DESIGN004, and VISUALFREEZE001, while preserving review-only authority.
- **Allowed Scope:** Regenerate proposed board PNG artifacts under `docs/design-system/visual-parity/artifacts/proposed/`; update proposed artifact README/manifest/inventory references; refresh proposed thumbnails under `docs/design-system/visual-parity/artifacts/operator-review/thumbnails/` so operator-review references match the revised boards; update operator-review README/manifest/packet references only as needed; add/update this tracking record.
- **Forbidden Scope:** No source code, app files, pages, components, route files, CSS, tokens, UI implementation, public image assets, production image generation or replacement, page copy, headings, CTA wording, pricing/package wording, SEO copy, runtime/API files, HubSpot behavior/config, Stripe/payment behavior/config, scheduling behavior/config, Resend/email behavior/config, Cloudflare config, dependencies, package-lock, Visual Freeze approval, implementation approval, Active KAOS Rule activation, PR merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/artifacts/proposed/**`, `docs/design-system/visual-parity/artifacts/operator-review/README.md`, `docs/design-system/visual-parity/artifacts/operator-review/manifest/OPERATOR_REVIEW_ARTIFACT_MANIFEST_REV01.md`, `docs/design-system/visual-parity/artifacts/operator-review/packet/OPERATOR_REVIEW_PACKET_REV01.md`, `docs/design-system/visual-parity/artifacts/operator-review/thumbnails/proposed-board-*-thumb.png`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Static docs/artifact generation only.
- **Documentation Updates Required:** Update proposed artifact README/manifest/inventory references to record the VISUALREV001 regeneration; update operator-review references only to identify refreshed proposed thumbnails and revised proposed boards; record this task in the Master Task Register.
- **Validation Required:** `git diff --check`; `git diff --cached --check` if staged; targeted `rg` checks for `VISUALREV001`, `Proposed`, `Needs Operator Review`, `DESIGN003`, `DESIGN004`, `VISUALFREEZE002`, and `VISPARITY008`; targeted work-order false-authority phrase scan; merge-marker scan under `docs`; verify board PNG files and proposed thumbnails exist; verify changed files are limited to allowed target files; `npm run build`; `git status --short`.
- **Exit Criteria:** Six revised proposed board PNGs exist; six refreshed proposed thumbnails exist; artifact docs explain what was regenerated, controlling standards, operator-review requirements, Visual Freeze blockage, and VISUALFREEZE002/VISPARITY008+ sequence; all artifacts remain Proposed / Needs Operator Review; no implementation files, CSS, tokens, routes, public images, page copy, protected systems, dependencies, package-lock, Visual Freeze approval, implementation approval, or Active KAOS Rules are changed; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded VISUALREV001 work order; latest `main`; merged PR #439 / DESIGN004; DESIGN003; DESIGN004; VISPARITY003; VISUALFREEZE001; proposed and operator-review artifact READMEs; current governance authority chain; `docs/codex/CODEX_RUN_CONTRACT.md`; OPS004; OPS005; brand asset, page layout, header/footer, public funnel, and QR funnel standards.
- **Operator Decision Required:** Review the revised proposed boards and decide whether to proceed to `VISUALFREEZE002 - Operator Visual Freeze Decision Record`.
- **Completion Notes:** Regenerated all six proposed board PNG artifacts under `docs/design-system/visual-parity/artifacts/proposed/boards/` as static light-canvas component/page design-review boards using DESIGN003 and DESIGN004. The revised boards cover navigation/shell/hero, typography/actions, containers/cards/tiles, forms, image-role placeholders/proof, and accessibility/states. Refreshed all six proposed-board thumbnails under `docs/design-system/visual-parity/artifacts/operator-review/thumbnails/` so operator-review references match the revised proposed boards. Updated proposed README/manifest/inventory references plus minimal operator-review README/manifest/packet references. Artifacts remain Proposed / Needs Operator Review and do not approve Visual Freeze, implementation, page copy, public image assets, production-image replacement, CSS/token changes, route/UI changes, runtime/API behavior, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependencies, package-lock, Active KAOS Rules, or a version bump.

### VISUALFREEZE002
- **Task ID:** VISUALFREEZE002
- **Task Name:** Operator Visual Freeze Decision Record
- **Status:** DONE
- **Category:** QA / VISUAL / DECISION RECORD
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Record the operator's approval of the VISUALREV001 revised proposed boards as the approved WNYHS visual direction for future bounded implementation tasks.
- **Allowed Scope:** Create `docs/design-system/visual-parity/VISUALFREEZE002_OPERATOR_VISUAL_FREEZE_DECISION_RECORD_REV01.md`; update `docs/design-system/visual-parity/README.md`; add/update this tracking record in the Master Task Register.
- **Forbidden Scope:** No source code, app files, pages, components, route files, CSS, tokens, UI implementation, public image assets, production image generation or replacement, generated board PNGs, thumbnails, page copy, headings, CTA wording, pricing/package wording, SEO copy, runtime/API files, HubSpot behavior/config, Stripe/payment behavior/config, scheduling behavior/config, Resend/email behavior/config, Cloudflare config, dependencies, package-lock, page-specific image approval, Active KAOS Rule activation, PR merge, or version bump.
- **Target Files:** `docs/design-system/visual-parity/VISUALFREEZE002_OPERATOR_VISUAL_FREEZE_DECISION_RECORD_REV01.md`, `docs/design-system/visual-parity/README.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only decision record.
- **Documentation Updates Required:** Create VISUALFREEZE002 REV01, link it from the visual-parity README, and record this task in the Master Task Register.
- **Validation Required:** `git diff --check`; `git diff --cached --check` if staged; targeted `rg` checks for `VISUALFREEZE002`, `Operator Visual Freeze`, `APPROVED`, `VISPARITY008`, `VISPARITY009`, `VISPARITY010`, `Board 01`, `Board 02`, `Board 03`, `Board 04`, `Board 05`, `Board 06`, page copy/image/protected-system boundaries, and merge markers; verify changed files are limited to allowed target files; `npm run build`; `git status --short`.
- **Exit Criteria:** VISUALFREEZE002 exists; the decision summary records operator review and approval of VISUALREV001; all six boards are listed as APPROVED; approved design direction records warm light / creamy white canvas, cream alternates, white/elevated warm surfaces, controlled trust navy, premium gold CTA/accent, charcoal readable text, restrained borders/radius/shadows, Manrope/Inter typography, visible focus states, accessible status states, and no dark/black default page background; implementation is bounded to VISPARITY008, VISPARITY009, and VISPARITY010; page copy and production images remain locked; no page-specific image asset is approved; no source/CSS/token/runtime/protected-system files change; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded VISUALFREEZE002 work order; latest `main`; merged PR #440 / VISUALREV001; DESIGN003; DESIGN004; VISUALFREEZE001; proposed artifact README and manifest; operator-review packet; current governance authority chain; `docs/codex/CODEX_RUN_CONTRACT.md`; OPS004; OPS005; brand asset, page layout, header/footer, public funnel, and QR funnel standards.
- **Operator Decision Required:** Review draft PR and decide whether to merge. Recommended next task is `VISPARITY008 - Implement Global Tokens and Base Visual System`.
- **Completion Notes:** Created the docs-only VISUALFREEZE002 Operator Visual Freeze Decision Record. The record states the operator reviewed the VISUALREV001 revised proposed boards, approves all six boards for implementation direction, approves the warm light / creamy white visual system direction with controlled trust navy and premium gold action/accent use, and authorizes implementation only through future bounded VISPARITY008, VISPARITY009, and VISPARITY010 tasks. Page copy remains locked, production images remain locked, image placeholders/roles are approved only as layout strategy, no page-specific image asset is approved, and no source/CSS/token/runtime/API/protected-system files, generated board PNGs, thumbnails, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependencies, package-lock, Active KAOS Rules, or version badge were changed.

### VISPARITY008
- **Task ID:** VISPARITY008
- **Task Name:** Implement Global Tokens and Base Visual System
- **Status:** DONE
- **Category:** QA / VISUAL / IMPLEMENTATION
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement the approved WNYHS global light-canvas visual foundation based on DESIGN003, DESIGN004, and VISUALFREEZE002 without redesigning a specific page.
- **Allowed Scope:** Existing global CSS/style/token files; existing design-system/token documentation only if required; this Master Task Register record; visible site version badge required by higher-authority deployed-site version rule.
- **Forbidden Scope:** No HubSpot files/config, Stripe/payment files/config, scheduling files/config, Resend/email files/config, runtime/API files, Cloudflare config, dependencies, package-lock, public image assets, generated visual boards/thumbnails, page copy/content, route definitions, page-specific layout redesign, homepage-specific layout implementation beyond inherited global base styling, form payloads, submit behavior, image generation, image replacement, or PR merge.
- **Target Files:** `src/styles/wnyhsVisualGovernance.css`; `src/index.css`; `src/lib/siteVersion.ts`; `docs/design-system/visual-parity/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Global CSS/token/base visual implementation only.
- **Documentation Updates Required:** Add this VISPARITY008 tracking record and update the visual-parity README narrow implementation reference.
- **Validation Required:** `git diff --check`; `git diff --cached --check` if staged; `rg -n "FAF8F4|F4F1EB|18283B|D4A52F|1F2328|focus|radius|shadow" <changed-style-files>`; `rg -n "HubSpot|Stripe|scheduling|runtime|payment" <changed-files>`; merge-conflict marker scan in docs/src/app/pages/components/public; `npm run build`; `git status --short`; verify changed files are limited to allowed global style/token/docs/MTR/version files.
- **Exit Criteria:** Global semantic tokens include primary canvas/warm white, alternate canvas/cream, primary surface/white, elevated warm surface, trust navy, premium gold, gold hover, charcoal text, secondary text, muted text, warm border, success, warning, error, info, soft shadow, standard radius, large surface radius, pill radius, and focus ring; base document styling applies approved body background/text, heading typography direction, link defaults, focus-visible behavior, and selection behavior; minimal surface/card/panel, CTA/button, form field, alert/status, and focus primitives are present where consistent with existing architecture; no page copy, production image, route, runtime/API, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, or package-lock changes are introduced; visible site version badge is bumped; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded VISPARITY008 work order; latest `main`; merged PR #441 / VISUALFREEZE002; DESIGN003; DESIGN004; VISUALFREEZE002; DESIGN002; PAGE_TOKEN_COMPLIANCE_GATE; brand asset standards; page layout standards; header/footer standards; public funnel standards; QR funnel standards; current governance authority chain; `docs/codex/CODEX_RUN_CONTRACT.md`; OPS004; OPS005.
- **Operator Decision Required:** Review draft PR and decide whether to merge. Recommended next task is `VISPARITY009 - Implement Homepage / First Public Route`.
- **Completion Notes:** Implemented the approved global light-canvas visual foundation by adding semantic WNYHS token roles and compatibility aliases in `src/styles/wnyhsVisualGovernance.css`, aligning global base body/link/button selection/focus behavior in `src/index.css`, adding minimal reusable surface, field, status, and focus primitives, defining the previously referenced success-soft status token, and bumping the visible site version to `v1.0.179`. Updated the visual-parity README with a narrow VISPARITY008 implementation reference. Page copy, routes, production images, public assets, form payloads, submit behavior, runtime/API files, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependencies, package-lock, generated boards/thumbnails, page-specific redesign, and homepage-specific implementation were not changed.

### VISPARITY009
- **Task ID:** VISPARITY009
- **Task Name:** Global Shell Adoption
- **Status:** DONE
- **Category:** QA / VISUAL / IMPLEMENTATION
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Apply the approved VISPARITY008 semantic token/base visual system to the shared WNYHS global shell layer without redesigning homepage or page-specific content.
- **Allowed Scope:** Shared WNYHS page shell/wrapper, header/navigation/mobile drawer, footer, funnel shell wrapper, global section/container rhythm styling, visible site version badge, visual-parity README implementation reference, and this Master Task Register record.
- **Forbidden Scope:** No HubSpot files/config, Stripe/payment files/config, scheduling files/config, Resend/email files/config, runtime/API files, Cloudflare config, dependencies, package-lock, public image assets, generated visual boards/thumbnails, page copy/content, route definitions, page-specific layout redesign, homepage-specific redesign, package page content, form payloads, submit behavior, image generation, image replacement, or PR merge.
- **Target Files:** `src/styles/homeSecurityPremium.css`; `src/lib/siteVersion.ts`; `docs/design-system/visual-parity/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Shared shell CSS/token adoption only.
- **Documentation Updates Required:** Add this VISPARITY009 tracking record and update the visual-parity README narrow implementation reference.
- **Validation Required:** `git diff --check`; `git diff --cached --check` if staged; targeted semantic-token `rg` against changed source/style files; raw hex audit against changed source/style files with any remaining values explained; protected-system diff audit for HubSpot/Stripe/scheduling/runtime/payment/submit/payload/api terms; merge-marker scan in docs/src/public; `npm run build`; `git status --short`; verify changed files are limited to allowed shell/style/docs/version files.
- **Exit Criteria:** Shared page wrapper canvas, header surface, nav link states, mobile nav surface, funnel shell surface, footer surface, focus states, hover/active states, and global section/container rhythm consume VISPARITY008 semantic variables; no dark/black default page background is introduced; page copy, nav/footer labels and destinations, production images, routes, form payloads, submit behavior, runtime/API files, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependencies, package-lock, and page-specific/homepage-specific redesign remain untouched; visible site version badge is bumped; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded VISPARITY009 work order; latest `main`; merged PR #442 / VISPARITY008; DESIGN003; DESIGN004; VISUALFREEZE002; DESIGN002; PAGE_TOKEN_COMPLIANCE_GATE; brand asset standards; page layout standards; header/footer standards; public funnel standards; QR funnel standards; current governance authority chain; `docs/codex/CODEX_RUN_CONTRACT.md`; OPS004; OPS005.
- **Operator Decision Required:** Review draft PR and decide whether to merge. Recommended next task is `VISPARITY010 - Homepage Visual Adoption`.
- **Completion Notes:** Applied VISPARITY008 semantic token styling to the shared WNYHS shell layer by updating global wrapper rhythm, marketing/funnel shell surfaces, sticky header/nav/mobile drawer states, footer surface, focus states, and funnel step rail styling in `src/styles/homeSecurityPremium.css`; bumped the visible site version to `v1.0.180`; updated the visual-parity README with a narrow VISPARITY009 implementation reference. Page copy, nav/footer labels and destinations, routes, production images, public assets, form payloads, submit behavior, runtime/API files, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependencies, package-lock, generated boards/thumbnails, page-specific redesign, homepage-specific redesign, and package page content were not changed.

### VISPARITY010
- **Task ID:** VISPARITY010
- **Task Name:** Homepage Visual Adoption
- **Status:** DONE
- **Category:** QA / VISUAL / IMPLEMENTATION
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Apply the approved VISPARITY008 semantic token/base visual system to the active homepage-specific visual surfaces without changing homepage copy, routes, production images, form behavior, or protected systems.
- **Allowed Scope:** Active homepage-specific component/style selectors; visible site version badge; visual-parity README implementation reference; this Master Task Register record.
- **Forbidden Scope:** No HubSpot files/config, Stripe/payment files/config, scheduling files/config, Resend/email files/config, runtime/API files, Cloudflare config, dependencies, package-lock, public image assets, generated visual boards/thumbnails, page copy/content, headings, CTA wording, pricing/package wording, route definitions, non-homepage redesign, package page content, form payloads, submit behavior, image generation, image replacement, or PR merge.
- **Target Files:** `src/styles/homeSecurityPremium.css`; `src/lib/siteVersion.ts`; `docs/design-system/visual-parity/README.md`; `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Homepage-specific CSS/token adoption only.
- **Documentation Updates Required:** Add this VISPARITY010 tracking record and update the visual-parity README narrow implementation reference.
- **Validation Required:** `git diff --check`; `git diff --cached --check` if staged; targeted semantic-token `rg` against changed source/style files; raw hex audit against changed source/style files with any remaining values explained; protected-system diff audit for HubSpot/Stripe/scheduling/runtime/payment/submit/payload/api terms; merge-marker scan in docs/src/public; `npm run build`; `git status --short`; verify changed files are limited to allowed homepage/style/docs/version files.
- **Exit Criteria:** Homepage-specific hero canvas/surface, section backgrounds, cards/panels, CTA/button styling, proof/value blocks, feature cards, spacing/rhythm, borders/radii/shadows, hover/focus states, and text hierarchy consume VISPARITY008 semantic variables; no dark/black default page background is introduced; homepage copy, headings, CTA wording, pricing/package wording, links/destinations, routes, production images, form payloads, submit behavior, runtime/API files, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependencies, package-lock, non-homepage page content, and package page content remain untouched; visible site version badge is bumped; validation passes; draft PR is opened without merge.
- **Dependencies:** Prompt-created bounded VISPARITY010 work order; latest `main`; merged PR #443 / VISPARITY009; DESIGN003; DESIGN004; VISUALFREEZE002; DESIGN002; PAGE_TOKEN_COMPLIANCE_GATE; brand asset standards; page layout standards; header/footer standards; public funnel standards; QR funnel standards; current governance authority chain; `docs/codex/CODEX_RUN_CONTRACT.md`; OPS004; OPS005.
- **Operator Decision Required:** Review draft PR and decide whether to merge. Recommended next task is `VISPARITY011 - Packages Visual Adoption`.
- **Completion Notes:** Applied VISPARITY008 semantic token styling to the active homepage-specific visual surfaces by updating the homepage light-canvas shell, search access panel, hero surface, trust strip, category/package/solution cards, proof/value cards, WNYHS Core panel, process cards, final CTA panel, and scoped CTA hover/focus treatments in `src/styles/homeSecurityPremium.css`; bumped the visible site version to `v1.0.181`; updated the visual-parity README with a narrow VISPARITY010 implementation reference. Homepage copy, headings, CTA wording, pricing/package wording, links/destinations, routes, production images, public assets, form payloads, submit behavior, runtime/API files, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependencies, package-lock, generated boards/thumbnails, non-homepage redesign, and package page content were not changed.

### T-SEO001-002
- **Task ID:** T-SEO001-002
- **Task Name:** Metadata and Canonical Audit
- **Status:** DONE
- **Category:** SEO / GOV / AUDIT
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Audit current WNYHS title, description, canonical, Open Graph/social, robots, index/noindex, route metadata, generic app-shell metadata, and public route ownership gaps before implementation.
- **Allowed Scope:** Create `docs/seo/SEO002_WNYHS_METADATA_AND_CANONICAL_AUDIT_REV01.md`; inspect route definitions, metadata utilities/components, `index.html`, sitemap, robots, public search, package/solution route sources, and static demo HTML; update this Master Task Register, `docs/DOCUMENT_CATALOG.md`, and `docs/MARKDOWN_MANIFEST.md`.
- **Forbidden Scope:** No metadata changes, title tag changes, meta description changes, canonical tag changes, sitemap changes, robots changes, structured data implementation, route changes, navigation changes, search implementation changes, category/solution/package content changes, image changes, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, `.env` or secrets, dependency changes, or package-lock changes.
- **Target Files:** `docs/seo/SEO002_WNYHS_METADATA_AND_CANONICAL_AUDIT_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation-only audit.
- **Documentation Updates Required:** SEO002 audit document, this task-register record, Document Catalog entry, and Markdown Manifest addendum.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`.
- **Exit Criteria:** SEO002 exists with required sections; metadata system overview and route inventory are documented; critical/high priority findings and next implementation tasks are listed; only allowed documentation files changed; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** SEO001 foundation standard, SITEARCH001 audit, SITEARCH002 decision standard, SEARCH001 search architecture/index plan, current governance authority chain, and prompt-created bounded work order.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created SEO002 as an audit-only metadata and canonical review. The audit found current WNYHS metadata is mostly global/app-shell plus client-side `Seo` policy; priority WNYHS homepage/category/solution/marketing routes generally lack route-specific titles and descriptions, fall through to noindex/nofollow, lack Open Graph/Twitter metadata, and have canonical/sitemap hostname and legacy-route alignment gaps. No source, route, metadata, sitemap, robots, schema, image, runtime, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API, Resend/email, Cloudflare, dependency, or package-lock files were changed.

### T-SEO001-003
- **Task ID:** T-SEO001-003
- **Task Name:** Metadata Implementation Plan
- **Status:** DONE
- **Category:** SEO / GOV / PLAN
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only implementation plan for future route-level metadata, canonical policy, index/noindex remediation, and Open Graph/Twitter metadata work based on SEO001 and SEO002.
- **Allowed Scope:** Create `docs/seo/SEO003_WNYHS_METADATA_IMPLEMENTATION_PLAN_REV01.md`; update this Master Task Register, `docs/DOCUMENT_CATALOG.md`, and `docs/MARKDOWN_MANIFEST.md` if repository convention requires it.
- **Forbidden Scope:** No metadata changes, title tag changes, meta description changes, canonical tag changes, robots/index behavior changes, sitemap changes, robots changes, structured data implementation, route changes, navigation changes, search implementation changes, category/solution/package content changes, image changes, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, `.env` or secrets, dependency changes, or package-lock changes.
- **Target Files:** `docs/seo/SEO003_WNYHS_METADATA_IMPLEMENTATION_PLAN_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation-only implementation plan.
- **Documentation Updates Required:** SEO003 implementation plan, this task-register record, Document Catalog entry, and Markdown Manifest addendum.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`.
- **Exit Criteria:** SEO003 exists with required sections; canonical domain recommendation is documented; index/noindex policy decision is documented; metadata field requirements and page-group implementation order are documented; future implementation tasks are listed; only allowed documentation files changed; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** SEO001 foundation standard, SEO002 metadata and canonical audit, SITEARCH002 decision standard, SEARCH001 search architecture/index plan, current governance authority chain, and prompt-created bounded work order.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created SEO003 as a docs-only metadata implementation plan. Recommended `https://www.wnyhomesecurity.com` as the future canonical domain to align canonical URLs with the current sitemap hostname unless a separate domain/deployment task changes public hostname strategy first. Documented public priority page indexability after classification, noindex/review/protected treatment for transaction/payment/print/admin/tokenized/test/prototype/internal/legacy review routes, noindex handling for search query-result URLs, required metadata fields, route-group implementation order, future bounded tasks, validation, rollback, and Codex restrictions. No source, route, metadata, sitemap, robots, schema, image, runtime, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API, Resend/email, Cloudflare, dependency, or package-lock files were changed.

### T-SEO001-004
- **Task ID:** T-SEO001-004
- **Task Name:** Homepage and Category Metadata Implementation
- **Status:** DONE
- **Category:** SEO / IMPLEMENTATION
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement route-level metadata for the WNYHS homepage and canonical category pages only.
- **Allowed Scope:** Existing SEO metadata utilities/components/policies; route-level metadata config; homepage/category page wrappers only if needed to attach metadata; tests if existing conventions support them; this Master Task Register; `src/lib/siteVersion.ts`.
- **Forbidden Scope:** No visible page copy changes, visual layout changes, category page content changes, solution metadata or solution page changes, package metadata, sitemap, robots.txt, structured data, route changes, navigation changes, search implementation, image changes, image generation, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, `.env` or secrets, dependency changes, or package-lock changes.
- **Target Files:** `src/components/Seo.tsx`, `src/lib/seoPolicy.ts`, `src/lib/siteVersion.ts`, optional focused SEO tests, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public client-side SEO metadata for scoped homepage/category routes only.
- **Documentation Updates Required:** Add this bounded task-register entry before implementation and mark complete after validation.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`; run focused SEO tests if added or existing.
- **Exit Criteria:** Homepage and canonical category metadata includes title, description, canonical URL using `https://www.wnyhomesecurity.com`, robots/index policy, Open Graph title/description/URL/image decision, and Twitter card metadata when supported; `/home-security` is handled consistently with current ownership and SEO003; visible site version is bumped by one patch; no forbidden scope is touched; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** SEO001 foundation standard, SEO002 metadata/canonical audit, SEO003 metadata implementation plan, SITEARCH002 decision standard, current governance authority chain, and prompt-created bounded work order.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added scoped route-level metadata through the existing SEO policy/component for `/`, `/home-security`, and canonical category routes only. Canonical URLs now use `https://www.wnyhomesecurity.com`; `/`, `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, and `/categories/aging-in-place` are `index, follow`; legacy `/home-security` is `noindex, follow` and canonicalizes to `/` per SEO003 homepage ownership. Open Graph and Twitter tags are emitted only for the scoped policy-backed routes and use approved existing repo imagery; no image files were changed. Added focused SEO policy tests and bumped visible site version to `v1.0.174`. No visible page copy, layout, category content, solution metadata/pages, package metadata, sitemap, robots.txt, schema, routes, navigation, search, images, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, `.env`, dependencies, or package-lock files were changed. `npx vitest run src/lib/__tests__/seoPolicy.test.ts` and `npm run build` passed.

### T-SEO001-005
- **Task ID:** T-SEO001-005
- **Task Name:** Solution Metadata Implementation
- **Status:** DONE
- **Category:** SEO / IMPLEMENTATION
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement route-level metadata for existing route-backed public solution pages only.
- **Allowed Scope:** Existing SEO metadata utilities/components/policies; route-level metadata config; solution route/page wrappers only if needed to attach metadata; tests if existing conventions support them; this Master Task Register; `src/lib/siteVersion.ts`.
- **Forbidden Scope:** No new solution routes, visible page copy changes, visual layout changes, category metadata changes unless required by shared utility fix, package metadata, package pages, sitemap, robots.txt, structured data, route changes, navigation changes, search implementation, image changes, image generation, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, `.env` or secrets, dependency changes, or package-lock changes.
- **Target Files:** `src/lib/seoPolicy.ts`, `src/lib/siteVersion.ts`, optional focused SEO tests, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public client-side SEO metadata for scoped solution routes only.
- **Documentation Updates Required:** Add this bounded task-register entry before implementation and mark complete after validation.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`; run focused SEO tests if added or existing.
- **Exit Criteria:** Existing route-backed public solution metadata includes title, description, canonical URL using `https://www.wnyhomesecurity.com`, robots/index policy, Open Graph title/description/URL/image decision, and Twitter card metadata when supported; visible site version is bumped by one patch; no forbidden scope is touched; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** SEO001 foundation standard, SEO002 metadata/canonical audit, SEO003 metadata implementation plan, SITEARCH002 decision standard, current governance authority chain, and prompt-created bounded work order.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added scoped route-level metadata through the existing SEO policy for `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes` only. Canonical URLs use `https://www.wnyhomesecurity.com`; all four solution routes are `index, follow`; Open Graph and Twitter tags use route-specific title/description and existing approved solution hero images. Added focused SEO policy test coverage and bumped visible site version to `v1.0.175`. No new solution routes, visible page copy, layout, category metadata, package metadata/pages, sitemap, robots.txt, schema, routes, navigation, search, images, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, `.env`, dependencies, or package-lock files were changed. `npx vitest run src/lib/__tests__/seoPolicy.test.ts` and `npm run build` passed.

### T-SEO001-006
- **Task ID:** T-SEO001-006
- **Task Name:** Marketing/Search/Support Metadata Implementation
- **Status:** DONE
- **Category:** SEO / IMPLEMENTATION
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement route-level metadata for WNYHS marketing, search, support, trust, legal, and QR/campaign public pages only.
- **Allowed Scope:** Existing SEO metadata utilities/components/policies; route-level metadata config; page wrappers only if needed to attach metadata; tests if existing conventions support them; this Master Task Register; `src/lib/siteVersion.ts`.
- **Forbidden Scope:** No new routes, visible page copy changes, visual layout changes, category metadata, solution metadata, package metadata, package pages, demo/experience metadata, sitemap, robots.txt, structured data, route changes, navigation changes, search implementation, search index changes, image changes, image generation, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, `.env` or secrets, dependency changes, or package-lock changes.
- **Target Files:** `src/components/Seo.tsx`, `src/lib/seoPolicy.ts`, `src/lib/__tests__/seoPolicy.test.ts`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public client-side SEO metadata for scoped marketing/search/support/legal/QR routes only.
- **Documentation Updates Required:** Add this bounded task-register entry and completion evidence.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run test -- --run src/lib/__tests__/seoPolicy.test.ts`; `npm run build`.
- **Exit Criteria:** Existing scoped route metadata includes title, description, canonical URL using `https://www.wnyhomesecurity.com`, robots/index policy, Open Graph title/description/URL/image decision, and Twitter card metadata when supported; search query URLs are handled conservatively if current SEO system can safely distinguish them; visible site version is bumped by one patch; no forbidden scope is touched; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** SEO001 foundation standard, SEO002 metadata/canonical audit, SEO003 metadata implementation plan, SITEARCH002 decision standard, SEARCH001 search architecture/index plan, current governance authority chain, and prompt-created bounded work order.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added scoped route-level metadata through the existing SEO policy for `/about`, `/our-work`, `/contact`, `/support`, `/search`, `/qrlanding`, `/qrlanding.htm`, `/privacy`, and `/terms` only. Canonical URLs use `https://www.wnyhomesecurity.com`; marketing/trust/support and the main `/search` page are `index, follow`; `/search?q=...` query URLs are `noindex, follow` and canonicalize to `/search`; `/qrlanding` and `/qrlanding.htm` are `noindex, follow` with the alias canonicalizing to `/qrlanding`; `/privacy` and `/terms` are `noindex, follow`. Open Graph and Twitter tags use route-specific title/description and existing approved repo imagery; no image files were changed. Added focused SEO policy test coverage and bumped visible site version to `v1.0.176`. No new routes, visible page copy, layout, category metadata, solution metadata, package metadata/pages, demo metadata, sitemap, robots.txt, schema, routes, navigation, search implementation, search index, images, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, `.env`, dependencies, or package-lock files were changed.

### T-SEO001-007
- **Task ID:** T-SEO001-007
- **Task Name:** Canonical and NoIndex Policy Implementation
- **Status:** DONE
- **Category:** SEO / IMPLEMENTATION
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Tighten canonical and noindex/index policy for existing public, legacy, package, demo, transaction, and review routes through the existing SEO policy system only.
- **Allowed Scope:** Existing SEO metadata utilities/components/policies; tests for canonical/noindex behavior; this Master Task Register; `src/lib/siteVersion.ts`.
- **Forbidden Scope:** No visible page copy changes, visual layout changes, route changes, navigation changes, search implementation changes, search index changes, sitemap changes, robots.txt changes, structured data, category/solution/package page content changes, image changes, image generation, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, `.env` or secrets, dependency changes, or package-lock changes.
- **Target Files:** `src/lib/seoPolicy.ts`, `src/lib/__tests__/seoPolicy.test.ts`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public client-side SEO robots/canonical policy only.
- **Documentation Updates Required:** Add this bounded task-register entry and completion evidence.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; focused SEO tests; `npm run build`.
- **Exit Criteria:** Canonical base uses `https://www.wnyhomesecurity.com`; approved public pages preserve index/follow behavior; legacy flat category routes are noindex/follow with approved canonical targets; search query URLs are noindex/follow; package, demo/experience, transaction, payment, print, planner, operator/admin/review, tokenized/verification, certificate, UAT/test/prototype, and protected routes are noindex/review/protected as applicable; visible site version is bumped by one patch; no forbidden scope is touched; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** SEO001 foundation standard, SEO002 metadata/canonical audit, SEO003 metadata implementation plan, SITEARCH002 decision standard, current governance authority chain, and prompt-created bounded work order.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Implemented canonical/noindex policy only through the existing SEO policy system. Preserved `index, follow` for approved public routes from T-SEO001-004 through T-SEO001-006. Legacy flat category routes are `noindex, follow`; `/home-security` canonicalizes to `/`, while `/home-automation`, `/home-safety`, `/home-lighting`, and `/aging-in-place` canonicalize to their approved `/categories/*` routes. Package routes including `/packages`, `/packages/:id`, and current package aliases remain accessible but `noindex, follow` pending package SEO visibility approval. Demo/experience routes including `/home-security/dashboard`, `/demo`, `/5-day-demo`, `/newsite/demos/ha-gold-dashboard`, and the static HA Gold demo path are classified `noindex, follow` when covered by the React SEO policy. Transaction, checkout, payment, schedule, resume, quote/agreement review, planner, operator/admin/review, tokenized/verification, certificate, UAT/test/prototype, print, and `/newsite` protected routes are `noindex` with follow/nofollow according to public-review vs protected classification. Canonical base remains `https://www.wnyhomesecurity.com`; `/search?q=...` remains `noindex, follow` canonicalized to `/search`; `/qrlanding` and `/qrlanding.htm` remain `noindex, follow`; `/privacy` and `/terms` remain `noindex, follow`. Added focused SEO policy tests and bumped visible site version to `v1.0.177`. No visible page copy, layout, routes, navigation, sitemap, robots.txt, schema, search implementation/index, page content, images, HubSpot, Stripe/payment, scheduling, planner behavior, quote flow, backend/API runtime, Resend/email, Cloudflare config, `.env`, dependencies, or package-lock files were changed. `npm run test -- --run src/lib/__tests__/seoPolicy.test.ts` and `npm run build` passed.

### T-SEO001-008
- **Task ID:** T-SEO001-008
- **Task Name:** Sitemap / Robots / Canonical Alignment
- **Status:** DONE
- **Category:** SEO / IMPLEMENTATION
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Align sitemap and robots policy with the current approved canonical/index policy after T-SEO001-004 through T-SEO001-007.
- **Allowed Scope:** Public sitemap file, robots.txt, existing focused SEO tests, this Master Task Register, and `src/lib/siteVersion.ts`.
- **Forbidden Scope:** No route declarations, routes, redirects, navigation, visible page copy, visual layout, metadata titles/descriptions, canonical/noindex policy, structured data, search implementation, search index, images, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, `.env`, secrets, dependencies, or package-lock changes.
- **Target Files:** `public/sitemap.xml`, `public/robots.txt`, `src/lib/__tests__/seoPolicy.test.ts`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public static sitemap and robots crawl-discovery files only.
- **Documentation Updates Required:** Add completion evidence to this task-register record.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run test -- --run src/lib/__tests__/seoPolicy.test.ts`; `npm run build`.
- **Exit Criteria:** Sitemap uses `https://www.wnyhomesecurity.com`; includes only approved indexable public canonical URLs; excludes noindex, review, legacy, package, legal, campaign, transaction, planner, operator/admin/review, tokenized, print, certificate, UAT/test/prototype, `/newsite`, vendor, and legacy HALO URLs; robots points to the canonical sitemap URL without blocking approved sitemap URLs; visible site version is bumped by one patch; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** SEO001 foundation standard, SEO002 metadata/canonical audit, SEO003 metadata implementation plan, SITEARCH002 decision standard, T-SEO001-004 through T-SEO001-007, current governance authority chain, and prompt-created bounded work order.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Replaced the static sitemap with the approved indexable canonical public URL set using `https://www.wnyhomesecurity.com`: `/`, five canonical `/categories/*` routes, four route-backed `/solutions/*` routes, `/about`, `/our-work`, `/contact`, `/support`, and `/search`. Removed legacy HALO/vendor URLs and excluded legacy flat category, search query, QR campaign, legal, package, demo/review, transaction/payment/checkout/agreement/schedule/quote, planner, operator/admin/review, tokenized/verification, print, certificate, UAT/test/prototype, and `/newsite` URLs. Kept robots generally crawlable, pointed it to the canonical sitemap URL, and limited disallows to internal/prototype/tokenized surfaces where crawler access itself should be discouraged. Added focused sitemap/robots assertions to the existing SEO policy test file and bumped visible site version to `v1.0.178`. No routes, redirects, navigation, page copy, layout, metadata copy, canonical/noindex policy, schema, search implementation/index, images, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, `.env`, dependencies, or package-lock files were changed.

### T-SEO001-009
- **Task ID:** T-SEO001-009
- **Task Name:** SEO Status and Continuation Handoff
- **Status:** DONE
- **Category:** SEO / GOV / HANDOFF
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only SEO current-state handoff so future WNYHS SEO work can resume without rediscovering what was completed after SEO001-SEO003 and T-SEO001-004 through T-SEO001-008.
- **Allowed Scope:** Create `docs/seo/SEO004_WNYHS_SEO_STATUS_AND_CONTINUATION_HANDOFF_REV01.md`; update this Master Task Register; update `docs/DOCUMENT_CATALOG.md`; update `docs/MARKDOWN_MANIFEST.md` if repository convention requires it.
- **Forbidden Scope:** No metadata changes, sitemap changes, robots changes, canonical/noindex policy changes, structured data implementation, route changes, navigation changes, search changes, page content/layout changes, image changes, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, `.env` or secrets, dependency changes, or package-lock changes.
- **Target Files:** `docs/seo/SEO004_WNYHS_SEO_STATUS_AND_CONTINUATION_HANDOFF_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation-only continuation handoff.
- **Documentation Updates Required:** SEO004 handoff document, this task-register record, Document Catalog entry, and Markdown Manifest addendum.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`.
- **Exit Criteria:** SEO004 exists with required sections; current canonical domain, sitemap URL set, noindex/review/protected route groups, metadata coverage, canonical/noindex policy, robots policy, sitemap policy, search SEO policy, remaining gaps, outstanding SEO tasks, new-content intake checklist, category/solution expansion workflow, image SEO follow-up requirements, Search Console/Bing next steps, future SEO chat bootstrap prompt, Codex restrictions, and success criteria are documented; only allowed documentation files are changed; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** SEO001 foundation standard, SEO002 metadata/canonical audit, SEO003 metadata implementation plan, SITEARCH002 decision standard, SEARCH001 search architecture/index plan, T-SEO001-004 through T-SEO001-008, current governance authority chain, and prompt-created bounded work order.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created SEO004 as a docs-only SEO status and continuation handoff. Summarized current SEO state after SEO001-SEO003 and T-SEO001-004 through T-SEO001-008, including canonical domain `https://www.wnyhomesecurity.com`, current indexed sitemap URLs, noindex/review/protected route groups, metadata coverage, canonical/noindex policy, robots policy, sitemap policy, search SEO policy, known remaining gaps, outstanding SEO tasks, new-content SEO intake, category/solution expansion workflow, image SEO follow-up requirements, Search Console/Bing next steps, and the future SEO chat bootstrap prompt. No metadata, sitemap, robots, canonical/noindex policy, schema, route, navigation, search, page content/layout, image, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, `.env`, dependencies, or package-lock files were changed.

### QUOTESYSTEM-014
- **Task ID:** QUOTESYSTEM-014
- **Task Name:** Funeral Home Test Case
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a documented local end-to-end quote-system test case for the funeral home job so WNYHS can validate the current Property Model workflow against a real customer-style scenario.
- **Allowed Scope:** Local-only sample/test data utility for `/operator/property-model`; new local Property Model record creation; funeral home scenario fields, concerns, evidence placeholders, rooms/areas, selected solutions, rough BOM, redraw reminder, quote preview/installer packet/import-export compatibility, documentation map/catalog/manifest/register/site-version updates.
- **Forbidden Scope:** No real customer persistence beyond localStorage sample, uploads, image processing, AI redraw generation, HubSpot writes, Stripe/payment changes, inventory automation, ordering automation, scheduling automation, email sending, PDF generation, auth, durable production storage, new dependencies, package-lock changes, protected runtime changes, unrelated public redesign, or Property Model flow breakage.
- **Target Files:** `src/lib/propertyModel.ts`, `src/pages/PropertyModelAdmin.tsx`, `src/lib/siteVersion.ts`, `docs/quotesystem/IMPLEMENTATION014_Funeral_Home_Test_Case_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Internal operator Property Model route and local browser storage only.
- **Documentation Updates Required:** Create implementation note and register it in quote-system map, document catalog, markdown manifest, and task register.
- **Validation Required:** `npm run build`; targeted lint/typecheck for touched runtime files; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; token/CSS hardcoded color scan for touched styling; route smoke check for `/operator/property-model`, `/operator/property-model/quote-preview`, and `/operator/property-model/installer-packet`.
- **Exit Criteria:** Version is bumped to `v1.0.140`; Load Funeral Home Test Case action creates a new local record without overwriting existing records; sample populates realistic funeral home concerns, evidence, areas, selected solutions, and rough BOM with reconciliation fields; preview, packet, and JSON import/export remain generically compatible; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** QUOTESYSTEM-004 through QUOTESYSTEM-013, PROPERTY001, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added the localStorage-only funeral home Property Model test case and loader action. The sample record includes commercial property context, break-in/opening/glass/access/doorbell/local-control concerns, floorplan/photo/orientation evidence placeholders, redraw-fidelity notes, funeral home room/area coverage, catalog-aligned solution selections with freehand fallbacks, and rough BOM lines with room/area, concern, selected solution, evidence reference, installer note, dashboard prep note, and reconciliation status. No HubSpot, Stripe/payment, uploads, image processing, AI redraw, inventory, ordering, scheduling, email, PDF, auth, durable storage, dependency, package-lock, or unrelated public-site changes were made.


- **Task ID:** FUNNEL004
- **Task Name:** Replace Public Package Pricing With Guided Protection Styles + Build Your System Direction
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Replace rigid public Bronze/Silver/Gold package pricing emphasis with consultative protection-style guidance and modular Build Your System direction while preserving estimate flows and protected runtime systems.
- **Allowed Scope:** Home-security package/protection copy/layout updates, CTA text shifts toward estimate/walkthrough actions, modular Build Your System guidance sections, and bounded register updates.
- **Forbidden Scope:** Stripe/payment flow changes, HubSpot schema/workflow changes, lead-signal transport/runtime contract changes, QR attribution contract changes, autoresponder changes, quote review CTA reintroduction, and route architecture rewrites.
- **Target Files:** `src/pages/Packages.tsx`, `src/pages/PackageDetail.tsx`, `src/components/homeSecurity/PackageTierCards.tsx`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** Public funnel presentation only (no runtime behavior changes).
- **Documentation Updates Required:** Task register entry only.
- **Validation Required:** `npm run build`; `rg -n "Bronze|Silver|Gold|1799|2499|3499|Build Your System|Request Free Estimate|CanonicalEstimateRequestForm|sendLeadSignal|lead-signal|quoteReview" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`
- **Exit Criteria:** Public home-security package/protection surfaces avoid hard public package pricing; consultative protection-style + Build Your System direction is visible; estimate capture flows and protected systems remain unchanged.
- **Dependencies:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 governance and existing FUNNEL hardening tasks.
- **Operator Decision Required:** Approve merge after QA validation.

### FINISH-LINE-PAGES001
- **Task ID:** FINISH-LINE-PAGES001
- **Task Name:** Customer-Facing Page Completion, Redesign, Additions, Gallery, and Visual Polish
- **Status:** ACTIVE
- **Category:** FUNNEL / COPY / QA / VISUAL
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Allowed Scope:**
  - create or improve customer-facing public pages
  - add `/our-work` gallery page
  - improve existing public page design consistency
  - improve homepage, QR funnel, main funnel, packages, contact, support, about, FAQ, trust, comparison, and related public pages
  - add structured image/gallery metadata
  - add reusable visual components if directly needed
  - add navigation/footer links where appropriate
  - improve copy clarity while obeying claims guardrails
  - use uploaded/public assets already in repo
  - improve responsive layout and customer-facing polish
  - keep finish-line page/design categories active until operator explicitly closes them
- **Forbidden Scope:**
  - no Stripe logic changes
  - no HubSpot schema or sync behavior changes
  - no scheduling/backend behavior changes
  - no lead API behavior changes
  - no pricing logic changes
  - no payment flow changes
  - no secrets/env var changes
  - no destructive deletes
  - no route removals
  - no claims implying guaranteed protection, crime prevention, police-grade, military-grade, hack-proof, or absolute safety
- **Execution Rule:** This finish-line task category remains ACTIVE until explicitly closed by the operator.

### VISUAL-OURWORK001
- **Task ID:** VISUAL-OURWORK001
- **Task Name:** Our Work gallery page implementation
- **Status:** ACTIVE
- **Category:** VISUAL / FUNNEL / COPY
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Parent Task:** FINISH-LINE-PAGES001
- **Scope:** Implement and polish `/our-work` using repository-hosted assets in `/public/images/our-work/` with centralized gallery metadata and customer-facing responsive presentation.
- **Forbidden Scope:** Inherits all FINISH-LINE-PAGES001 forbidden scope plus no image renaming/moves and no new package installs unless absolutely necessary.

### T-QA001-001
- **Task ID:** T-QA001-001
- **Task Name:** QA001 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Deployment Validation SOP + QA Checklist
- **Status:** DONE
- **Category:** QA / GOV / OPS
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Parent Task:** FINISH-LINE-PUBLICATION001
- **Purpose:** Maintain a repeatable pre-release/post-deploy validation SOP and checklist before publishing and before QR placard traffic expansion.
- **Allowed Scope:**
  - documentation-only updates to deployment validation SOP
  - documentation-only updates to QA checklist
  - bounded task-register lifecycle/status updates for QA001
  - document-catalog update only if canonical authority changes
- **Forbidden Scope:**
  - no source code edits
  - no runtime behavior changes
  - no frontend/API/route changes
  - no Stripe logic changes
  - no HubSpot schema/workflow changes
  - no secrets exposure
  - no historical document deletion
- **Target Files:**
  - `/docs/runtime/deployment_validation.md`
  - `/docs/codex/QA_CHECKLIST.md`
  - `/docs/system/master-task-register.md`
  - `/docs/DOCUMENT_CATALOG.md` (only if required by authority/catalog changes)
- **Validation Required:**
  - `npm run build`
  - `git diff -- docs/runtime docs/codex docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md`
  - `rg -n "QA001|deployment validation|QRLanding|qrlanding_view|estimate_form_started|estimate_form_submitted|requestId|Stripe|HubSpot|Cloudflare|lead signal|rollback|evidence" docs/runtime docs/codex docs/system docs/DOCUMENT_CATALOG.md`
  - `rg -n "TODO|placeholder|TBD|implement|implementation" docs/runtime/deployment_validation.md docs/codex/QA_CHECKLIST.md docs/system/master-task-register.md`
- **Exit Criteria:**
  - deployment validation SOP documents build/route/event/lead/requestId/Cloudflare/protected-system checks
  - QA checklist includes QRLanding attribution, protected-system, and evidence-capture requirements
  - rollback/escalation guidance is documented
  - task remains docs-only with no runtime behavior changes
- **Completion Notes:** Updated QA001 governance docs to REV02 with explicit QRLanding attribution checks (`qrlanding_view`, `estimate_form_started`, `estimate_form_submitted`), requestId correlation, Cloudflare deployment expectations, protected Stripe/HubSpot/route/claims safeguards, required evidence template, and rollback/escalation guidance; no source/runtime behavior changes performed.

---


### CRM-SCHEMA001
- **Task ID:** CRM-SCHEMA001
- **Task Name:** HubSpot CRM Contract Repair
- **Status:** DONE
- **Category:** CRM
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Forbidden Scope:** Stripe, SMS, reminders, install scheduling
- **Validation:** `npm run lint`; `npm run test -- --run`; required `rg` mapping/contract checks.




### FUNNEL-ARCH001
- **Task ID:** FUNNEL-ARCH001
- **Task Name:** Full funnel/page/nav architecture cleanup plan
- **Status:** DONE
- **Category:** FUNNEL / GOV / UX-ARCHITECTURE
- **Controlling Context:** CTX-SCHED-MVP-REV01 (documentation/audit-only planning gate before quote-generation implementation)
- **Scope:** Inspect route/page/nav/CTA architecture; define final journey, page roles, nav hierarchy, estimate role, planner role, duplicate/disruptive link findings, and bounded implementation sequence.
- **Forbidden Scope:** No UI/route/runtime/API/HubSpot/Stripe/scheduling implementation changes beyond visible version bump; no QUOTE-GEN001 or CRM-STAGEFLOW001 implementation.
- **Validation:** `npm run lint`; `npm run test -- --run`; `npm run build`; required `git diff` + `rg` governance checks.
- **Completion Notes:** Bumped visible site version to `v1.0.55`; added architecture audit doc `docs/audits/funnel_arch001_rev01.md` with dominant journey and alternate paths, page-role matrix, nav hierarchy recommendations, estimate/planner role decisions, duplicate/disruptive link findings, risk analysis, and bounded implementation order (`FUNNEL-ARCH002` ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ `ESTIMATE-FLOW001` ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ `QUOTE-GEN001` ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ `CRM-STAGEFLOW001`); protected runtime and HubSpot/Stripe logic unchanged.
### NAV-UX001
- **Task ID:** NAV-UX001
- **Task Name:** Route transition page-top normalization + intentional form persistence/reset
- **Status:** DONE
- **Category:** FUNNEL / UX-STABILITY
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Scope:** Normalize major customer-facing route transitions to open at page top; preserve existing persisted fit-check behavior; provide clear reset behavior for persisted fit-check state.
- **Forbidden Scope:** No `/api/lead-signal`, HubSpot runtime/schema/pipeline, requestId lifecycle, Resend, Stripe, scheduling authority, quote-generation, or CRM stage-flow changes.
- **Validation:** `npm run lint`; `npm run test -- --run`; `npm run build`; required `rg` + `git diff` audits.
- **Completion Notes:** Bumped visible version to `v1.0.54`; added route transition manager for major public routes (home/packages/discovery/contact/system planner/support) with hash-safe behavior; retained fit-check persistence and reset, normalized label to `Start Over`; preserved recommendation/query/contact propagation and protected runtime boundaries; added audit doc `docs/audits/nav_ux001_rev01.md`.

## Backlog Tasks

### CATALOG002
- **Task ID:** CATALOG002
- **Task Name:** Master Parts Data Model and CATALOG001 Expansion
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the bounded master part-number data model and migration-safe mapping scaffold under `src/data/catalog/` so exact part IDs can become the future atomic source for solutions, packages, quotes, installs, inventory planning, warranty/support, and customer asset records while preserving CATALOG001 runtime behavior.
- **Allowed Scope:** Visible site version bump; update CATALOG002 task record; add CATALOG002 catalog governance document; extend `catalogTypes.ts` with master part-number and mapping types; add `masterPartsData.ts` with empty canonical source, lookups, and mapping scaffolds; export new catalog source; update catalog README, document catalog, and markdown manifest.
- **Forbidden Scope:** No full hardware backfill, no new hardware evaluation, no pricing changes, no Stripe/payment changes, no HubSpot changes, no scheduling changes, no quote runtime behavior changes, no public customer-facing solution/package copy changes, no inventory automation, no package-lock changes, no dependencies, no route/page behavior changes, and no hardware purchasing authorization.
- **Target Files:** `src/lib/siteVersion.ts`, `src/data/catalog/catalogTypes.ts`, `src/data/catalog/masterPartsData.ts`, `src/data/catalog/index.ts`, `docs/catalog/CATALOG002_Master_Parts_Data_Model_REV01.md`, `docs/catalog/README.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** File-backed catalog schema/data exports only. Existing public/runtime catalog behavior is preserved.
- **Documentation Updates Required:** Completed.
- **Validation Required:** `npm run build`; practical lint/typecheck if available; `git diff --check`; protected-system changed-file scan; confirm no Stripe/payment, HubSpot, scheduling, quote runtime, public copy, inventory automation, dependency, or package-lock changes.
- **Exit Criteria:** Version is bumped to `v1.0.152`; master part model exists; `masterPartsData.ts` exists and is exported; solution/package/hardware-label part mapping scaffold exists; full backfill remains deferred; CATALOG001 runtime behavior remains preserved; protected systems remain untouched.
- **Dependencies:** Prompt-created bounded CATALOG002 work order, current governance authority chain, CATALOG001 docs, hardware registry governance, and package/BOM governance.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Updated the prior CATALOG002 placeholder/backlog record to the executed master-parts work order requested by the operator. Added exact part-number catalog data-model scaffolding with empty runtime data arrays only. HubSpot, Stripe/payment, scheduling, quote runtime behavior, customer-facing copy, pricing, inventory automation, dependencies, and package-lock were not changed.


### CATALOG003
- **Task ID:** CATALOG003
- **Task Name:** GPT Master Parts Import File Alignment
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the repo-side import alignment standard so GPT-generated JSONL/CSV files can match the canonical `CatalogMasterPart` model before any hardware backfill occurs.
- **Allowed Scope:** Bump visible site version; update this bounded task entry; add `docs/catalog/CATALOG003_GPT_Master_Parts_Import_File_Alignment_REV01.md`; add `src/data/catalog/masterPartsImportSchema.ts`; export the schema from `src/data/catalog/index.ts`; update catalog README, document catalog, and markdown manifest only as required.
- **Forbidden Scope:** No hardware backfill; no real master part records; no new hardware evaluation; no public solution/package copy changes; no quote runtime behavior changes; no pricing changes; no Stripe/payment changes; no HubSpot or lead-signal changes; no scheduling changes; no inventory automation; no installer automation; no package dependency changes.
- **Target Files:** `src/lib/siteVersion.ts`, `src/data/catalog/masterPartsImportSchema.ts`, `src/data/catalog/index.ts`, `docs/catalog/CATALOG003_GPT_Master_Parts_Import_File_Alignment_REV01.md`, `docs/catalog/README.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Catalog import-alignment artifact and documentation only; no runtime catalog records added.
- **Documentation Updates Required:** Completed.
- **Validation Required:** `npm run build`; `npm run lint` if practical; `npm run typecheck:test` if available; `npm run typecheck:api` if available; `git diff --check`; `git diff --cached --check`; protected-scope scans for Stripe/payment, HubSpot/lead-signal, scheduling, quote runtime, inventory automation, customer-facing copy/pricing, and package files.
- **Exit Criteria:** Version is bumped to `v1.0.153`; CATALOG003 governance/import alignment document exists; import schema/template exports exact `CatalogMasterPart` field-name alignment helpers; JSONL preferred and CSV convenience expectations are documented; GPT alias-to-repo field mapping is documented; normalization rules are documented; `catalogMasterParts` remains empty; CATALOG001 runtime behavior and CATALOG002 model are preserved; protected systems remain untouched.
- **Dependencies:** Prompt-created bounded CATALOG003 work order, current governance authority chain, `docs/system/step-current.md`, CATALOG001, CATALOG002, and current `CatalogMasterPart` type inspection.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Reused the prior completed CATALOG003 slot for the operator-requested CATALOG003 import-alignment work order. Added CATALOG003 import-alignment governance and a repo-side schema/template artifact aligned to the current `CatalogMasterPart` fields. Exported the schema without removing existing exports. Documented JSONL/CSV/gap/source file expectations, CSV array delimiter, enum/boolean/nullable/unknown normalization, and legacy GPT category aliases. No hardware backfill or real master part records were added; protected runtime systems remain untouched.

### CATALOG004
- **Task ID:** CATALOG004
- **Task Name:** First Master Parts Backfill Import
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Import the reviewed five-doorbell CATALOG003 master parts handoff into the repo master parts data structure as internal catalog data.
- **Allowed Scope:** Validate the corrected REV02 handoff files under `docs/catalog/imports/catalog004/`; preserve the handoff evidence files; import exactly the five reviewed records into `src/data/catalog/masterPartsData.ts`; add a narrow catalog data validation test; update catalog documentation indexes as required; bump visible site version.
- **Forbidden Scope:** No public website changes; no quote logic changes; no package logic changes; no package promotion; no solution promotion; no Stripe/payment changes; no scheduling changes; no planner changes; no agreement changes; no deposit changes; no runtime/funnel changes; no HubSpot/API-layer changes; no hardware-status upgrades beyond the reviewed handoff.
- **Target Files:** `src/lib/siteVersion.ts`, `src/data/catalog/masterPartsData.ts`, `src/data/catalog/__tests__/masterPartsData.test.ts`, `docs/catalog/README.md`, `docs/catalog/imports/catalog004/README.md`, `docs/catalog/imports/catalog004/wnyhs_master_parts_records.csv`, `docs/catalog/imports/catalog004/wnyhs_master_parts_records.jsonl`, `docs/catalog/imports/catalog004/wnyhs_master_parts_gap_report.md`, `docs/catalog/imports/catalog004/wnyhs_master_parts_sources.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Internal file-backed catalog master parts data only. No public package/solution/quote/runtime consumer was wired to these records.
- **Documentation Updates Required:** Preserve the CATALOG004 handoff evidence folder and add CATALOG004 import bookkeeping to the catalog README, master task register, document catalog, and markdown manifest.
- **Validation Required:** REV02 handoff validation for JSONL parse, CSV parse, record count, field count, field-name match, populated expected `part_id` values, reviewed status posture, no `category_home_*` fields, no legacy 188-field signals, JSONL array fields, and source URL tracking parameters; targeted catalog data test; `npm run build`; practical standard checks; `git diff --check`; protected-system changed-file scan.
- **Exit Criteria:** Master parts data contains the five records; statuses match the reviewed handoff; source/gap handoff is preserved in `docs/catalog/imports/catalog004/`; build passes; no protected flows are touched.
- **Dependencies:** Prompt-created bounded CATALOG004 work order, current governance authority chain, `docs/system/step-current.md`, CATALOG002 master parts model, CATALOG003 import alignment contract, and corrected REV02 CATALOG004 handoff files.
- **Operator Decision Required:** Review and merge PR if accepted. Future package/solution promotion, quote integration, pricing, purchasing, field validation, or status upgrades require separate bounded authorization.
- **Completion Notes:** Imported exactly `reolink-d340p`, `reolink-d340w`, `reolink-d340b`, `ubiquiti-uvc-g4-doorbell-pro-poe-kit`, and `aqara-db-c03e-g400-wired` into the internal master parts data after validating the corrected REV02 handoff. Preserved reviewed statuses: `conditional`, `conditional`, `field_test`, `custom_pass_through_only`, and `field_test`. No public pages, quote logic, package logic, solution/package promotion, HubSpot, Stripe/payment, scheduling, planner, agreement, deposit, runtime, or funnel flows were changed. Version bumped to `v1.0.157`.

### CATALOG005
- **Task ID:** CATALOG005
- **Task Name:** Reolink Core Infrastructure + Direct Local Wi-Fi Master Parts Import
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Import the reviewed 17-record Reolink CATALOG003-compatible handoff into the internal master parts data layer as conditional hardware candidates only.
- **Allowed Scope:** Validate the corrected REV02 handoff files under `docs/catalog/imports/catalog005/` against the repo-owned CATALOG003 import contract; preserve the handoff evidence files; import exactly the 17 reviewed records into `src/data/catalog/masterPartsData.ts`; add narrow catalog data validation tests; update catalog documentation indexes as required; bump visible site version.
- **Forbidden Scope:** No public website changes; no quote logic changes; no package logic changes; no package promotion; no solution promotion; no pricing logic changes; no Stripe/payment changes; no HubSpot/API-layer changes; no scheduling changes; no planner changes; no agreement changes; no deposit changes; no runtime/funnel changes; no hardware-status upgrades beyond conditional.
- **Target Files:** `src/lib/siteVersion.ts`, `src/data/catalog/masterPartsData.ts`, `src/data/catalog/__tests__/masterPartsData.test.ts`, `docs/catalog/README.md`, `docs/catalog/imports/catalog005/README.md`, `docs/catalog/imports/catalog005/validation_snapshot.json`, `docs/catalog/imports/catalog005/wnyhs_catalog005_reolink_master_parts_records.csv`, `docs/catalog/imports/catalog005/wnyhs_catalog005_reolink_master_parts_records.jsonl`, `docs/catalog/imports/catalog005/wnyhs_catalog005_reolink_gap_report.md`, `docs/catalog/imports/catalog005/wnyhs_catalog005_reolink_sources.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Internal file-backed catalog master parts data only. No public package/solution/quote/runtime consumer was wired to these records.
- **Documentation Updates Required:** Preserve the CATALOG005 handoff evidence folder and add CATALOG005 import bookkeeping to the catalog README, master task register, document catalog, and markdown manifest.
- **Validation Required:** REV02 handoff validation for JSONL parse, CSV parse, 17-record count, repo-owned 56-field contract count, field-name match, populated expected `part_id` values, no CATALOG004 overlap, conditional-only status posture, no `category_home_*` fields, no legacy 188-field signals, JSONL array fields, CSV array delimiters, source URL tracking parameters, and RLN12W source URL; targeted catalog data test; `npm run build`; `npm run typecheck:test`; targeted ESLint for touched TypeScript files; `git diff --check`; `git diff --cached --check`; protected-system changed-file scan.
- **Exit Criteria:** Master parts data contains the 17 reviewed Reolink records; all imported records remain conditional only; CATALOG004 records remain present; source/gap handoff is preserved in `docs/catalog/imports/catalog005/`; build passes; no protected flows are touched.
- **Dependencies:** Prompt-created bounded CATALOG005 work order, current governance authority chain, `docs/system/step-current.md`, CATALOG002 master parts model, CATALOG003 import alignment contract, completed CATALOG004 import, and corrected REV02 CATALOG005 handoff files.
- **Operator Decision Required:** Review and merge PR if accepted. Future package/solution promotion, quote integration, pricing, purchasing, field validation, or status upgrades require separate bounded authorization.
- **Completion Notes:** Imported exactly `reolink-home-hub`, `reolink-home-hub-mini`, `reolink-home-hub-pro`, `reolink-rln8-410`, `reolink-rln12w`, `reolink-rln16-410`, `reolink-rln36`, `reolink-e1-outdoor-pro`, `reolink-elite-floodlight-wifi`, `reolink-fe-w`, `reolink-rlc-810wa`, `reolink-rlc-840wa`, `reolink-rp-wcb8mz`, `reolink-duo-3-wifi`, `reolink-elite-wifi`, `reolink-trackmix-wifi`, and `reolink-trackflex-floodlight-wifi` into the internal master parts data after validating the corrected REV02 handoff against `catalogMasterPartImportColumns`. Preserved conditional posture for all 17 records: `hard_gate_result` `PASS`, `qualification_status` `conditional`, `approved_for_standard_use` `no`, `approved_for_conditional_use` `yes`, `record_status` `needs_review`, and `validation_status` `needs_validation`. No public pages, quote logic, package logic, solution/package promotion, HubSpot, Stripe/payment, scheduling, planner, agreement, deposit, runtime, or funnel flows were changed. Version bumped to `v1.0.158`.

### BENCH001
- **Task ID:** BENCH001
- **Task Name:** Bench Validation Matrix For High-Risk / Validation-Required Features
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only bench-validation matrix for REV03 rows marked Validation Required, Research Required, Custom Quote Only, or Research Only before BOM/package work.
- **Allowed Scope:** Internal validation planning notes, acceptance criteria, evidence fields, risk flags, and unresolved dependency tracking.
- **Forbidden Scope:** Runtime code, UI components, routes, Stripe, HubSpot, scheduling, pricing, customer-facing package commitments, final hardware commitments, and live device deployment.
- **Target Files:** Future internal validation documents under `docs/`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md` if new docs are created.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add validation matrix and catalog cross-references if activated.
- **Validation Required:** Documentation diff review, protected-runtime scope audit, prohibited-claims scan.
- **Exit Criteria:** High-risk and validation-required REV03 rows have documented bench tests, pass/fail criteria, and unresolved risks.
- **Dependencies:** CATALOG003.
- **Operator Decision Required:** Approve validation matrix format and priority order.

### BOM001
- **Task ID:** BOM001
- **Task Name:** Build BOMs For Top 10 Priority Capabilities
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Build internal BOMs for the top 10 immediate capability priorities after integration and local-only viability research is sufficient.
- **Allowed Scope:** Internal documentation-only BOM research and validation notes for priority capabilities.
- **Forbidden Scope:** Public pricing, customer-facing package commitments, final hardware commitments before validation, runtime code, UI components, routes, Stripe, HubSpot, scheduling, and analytics.
- **Target Files:** Future internal BOM documents under `docs/` as approved, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md` if new docs are created.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add BOM docs and catalog cross-references if activated.
- **Validation Required:** BOM diff review, no-public-pricing scan, and protected-runtime scope audit.
- **Exit Criteria:** Top 10 priority capabilities have internal minimum/recommended BOM candidates and unresolved validation risks documented.
- **Dependencies:** CATALOG001 and CATALOG003.
- **Operator Decision Required:** Approve BOM document format and vendor-research boundaries.

### PACKAGE001
- **Task ID:** PACKAGE001
- **Task Name:** Create Solution Packages From Validated Capabilities
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Group validated capabilities into solution-package concepts only after feature feasibility and BOM work are complete enough to avoid arbitrary package design.
- **Allowed Scope:** Internal documentation-only package planning from validated capabilities and BOM evidence.
- **Forbidden Scope:** Public pricing, customer-facing package commitments without approval, runtime code, UI components, routes, Stripe, HubSpot, scheduling, analytics, and final hardware commitments without validation.
- **Target Files:** Future internal package-planning documents under `docs/` as approved, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md` if new docs are created.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add package-planning docs and catalog/BOM cross-references if activated.
- **Validation Required:** Package-planning diff review, no-public-pricing scan, and protected-runtime scope audit.
- **Exit Criteria:** Solution packages are derived from validated capabilities and BOM evidence, with unresolved assumptions documented.
- **Dependencies:** CATALOG001, CATALOG003, and BOM001.
- **Operator Decision Required:** Approve transition from internal package concepts to any future customer-facing copy task.

### CLAIMS001
- **Task ID:** CLAIMS001
- **Task Name:** Claims Boundary Notes For Life Safety / Health / Security / Savings Features
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create internal claims-boundary notes for REV03 rows with elevated life-safety, health, security, weather, caregiver, or savings-language risk.
- **Allowed Scope:** Internal documentation-only claims notes, restricted terminology, review flags, and future approval requirements.
- **Forbidden Scope:** Runtime code, UI components, routes, Stripe, HubSpot, scheduling, public copy, public pricing, package commitments, and legal conclusions.
- **Target Files:** Future internal claims-boundary documents under `docs/`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md` if new docs are created.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add claims-boundary notes and catalog cross-references if activated.
- **Validation Required:** Documentation diff review, forbidden-claims scan, protected-runtime scope audit.
- **Exit Criteria:** Elevated-risk capability rows have conservative internal wording boundaries before any future customer-facing copy task.
- **Dependencies:** CATALOG003.
- **Operator Decision Required:** Approve claims review standard and any required external review path.


### NAV-BUG001
- **Task ID:** NAV-BUG001
- **Task Name:** Back/forward black screen + quote artifact render stability
- **Status:** DONE
- **Category:** FUNNEL / RUNTIME-STABILITY
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post MAIN-FUNNEL-FIX003C bounded stability hardening)
- **Scope:** Fix browser back/forward black-screen risk and add bounded quote/review missing-state fallbacks without adding quote-generation behavior.
- **Forbidden Scope:** No HubSpot/Stripe/requestId/scheduling authority changes; no QUOTE-GEN001 or CRM-STAGEFLOW001 behavior; no `/api/lead-signal` modifications.
- **Validation:** `npm run lint`; `npm run test -- --run`; `npm run build`; required `rg`/`git diff` audits.
- **Completion Notes:** Site version bumped to v1.0.52; removed duplicated hook-closure in `src/pages/QuoteReview.tsx` causing render instability risk; improved quote/review missing-data fallback messaging + recovery paths; protected runtime systems preserved; audit note added at `docs/audits/nav_bug001_rev01.md`.

- **QUOTE-GEN001** ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Quote generation, HubSpot quote-stage update, customer/operator quote email delivery. (Deferred; not implemented in MAIN-FUNNEL-FIX003B.)
- **CRM-STAGEFLOW001** ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Deal pipeline advancement rules after quote/deposit/scheduling events. (Deferred; not implemented in MAIN-FUNNEL-FIX003B.)

---

### CONTENT001
- **Task ID:** CONTENT001
- **Task Name:** Website Content Remediation Initiative
- **Status:** BACKLOG
- **Category:** GOV / COPY / FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Establish the audit-driven website content remediation initiative and preserve traceability from the live website audit, remediation instructions, and finding-to-remediation matrix into bounded future implementation work.
- **Allowed Scope:** Governance tracking, task sequencing, remediation traceability, and future bounded implementation-task preparation for Homepage, QR Landing, Packages, Support, Our Work, and approved opportunity pages.
- **Forbidden Scope:** No public website page edits, no route creation, no UI creation, no runtime logic changes, no Stripe changes, no HubSpot changes, no Scheduling changes, no Email changes, no environment variable changes, no secrets, no public-facing copy changes, and no implementation bundling.
- **Target Files:** `docs/content-remediation/CONTENT001_WNYHS_WEBSITE_CONTENT_REMEDIATION_CODEX_INSTRUCTIONS_REV01.md`, `docs/content-remediation/CONTENT001_FINDING_TO_REMEDIATION_MATRIX_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Governance and task tracking only.
- **Documentation Updates Required:** Maintain source remediation docs, catalog/manifest references, parent initiative status, and child implementation-track status.
- **Validation Required:** Documentation diff; targeted `CONTENT001`/traceability grep; no-forbidden-file drift check; `npm run build` as repo-standard validation.
- **Exit Criteria:** CONTENT001 source docs are tracked; parent initiative and bounded child tasks exist; traceability is preserved for missing social proof, missing hero CTA, missing no-required-monthly-fees positioning, missing customer-owned-equipment positioning, hardware-first messaging, missing local trust signals, missing QR context alignment, missing FAQ/self-service support, missing case-study storytelling, and future opportunity pages; no implementation occurs.
- **Dependencies:** CONTENT001-A completion and operator approval to activate any child implementation track.
- **Operator Decision Required:** Approve activation of each child task individually before implementation.
- **Operator Approval Requirements:** Implementation may begin only after the specific child task is promoted to `ACTIVE` or explicitly authorized by a future bounded prompt under the controlling context.

### CONTENT001-A
- **Task ID:** CONTENT001-A
- **Task Name:** Website Content Remediation Backlog / Governance Entry
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Reconcile CONTENT001 audit findings with the repository governance model and create the bounded task structure for future implementation.
- **Allowed Scope:** Documentation/governance only: CONTENT001 source docs, Master Task Register entries, Document Catalog entry, and Markdown Manifest addendum.
- **Forbidden Scope:** No website page edits, no route changes, no UI creation, no runtime logic changes, no Stripe changes, no HubSpot changes, no Scheduling changes, no Email changes, no environment variable changes, no secrets, no public-facing copy changes, and no implementation work.
- **Target Files:** `docs/content-remediation/CONTENT001_WNYHS_WEBSITE_CONTENT_REMEDIATION_CODEX_INSTRUCTIONS_REV01.md`, `docs/content-remediation/CONTENT001_FINDING_TO_REMEDIATION_MATRIX_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add parent initiative, child implementation tracks, catalog entries, and manifest addendum.
- **Validation Required:** `git diff -- docs/content-remediation docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md`; targeted `CONTENT001` grep; no-forbidden-file drift check; `npm run build`.
- **Exit Criteria:** CONTENT001 parent and child tasks exist, implementation child tracks remain bounded/non-active, traceability to audit findings is preserved, and no implementation occurs.
- **Dependencies:** Operator-provided CONTENT001 remediation instructions and matrix.
- **Operator Decision Required:** Approve future activation of child implementation tasks individually.
- **Operator Approval Requirements:** No implementation approval is granted by CONTENT001-A.

## Runtime Hardening Queue (GOV004)

Runtime documentation hardening is authorized as documentation-only work under the current Step102 context. The following recommended execution order is approved to avoid repeated one-by-one promotion stops while preserving ACTIVE-task gating:

1. **RUNTIME004 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Email Runtime Contracts**
2. **RUNTIME005 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Lead Signal + requestId Contracts**
3. **RUNTIME003 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Stripe Runtime Contract**
4. **RUNTIME006 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â HubSpot Runtime Contracts**
5. **RUNTIME007 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Scheduling Ownership Contract**
6. **QA001 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Deployment Validation SOP** (promote from READY when safe)

Rationale:
- Cloudflare runtime is already documented.
- Email delivery boundaries should be locked before downstream lead/payment/customer-notification assumptions.
- Lead/request-id contract definitions should precede Stripe and HubSpot dependency contracts.
- Stripe runtime documentation should be completed before full deployment validation SOP activation.
- HubSpot token/property ambiguity should be isolated in its own bounded runtime contracts.
- Scheduling ownership remains documentation-only until any future implementation authorization.

---



### ESTIMATE-FLOW001
- **Task ID:** ESTIMATE-FLOW001
- **Task Name:** Estimate/contact/QR intake consolidation
- **Status:** DONE
- **Category:** FUNNEL / LEAD
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Consolidate estimate/contact/QR intake role and page structure after FUNNEL-ARCH002.
- **Scope:** Clarify `/contact?vertical=home-security` as central estimate gateway; support contextual estimate entry for recommended system, selected package, on-site walkthrough intent, QR/flyer context; preserve existing estimate submit behavior and `/api/lead-signal` contract.
- **Forbidden Scope:** no quote generation; no HubSpot schema/property/pipeline changes; no Stripe changes; no scheduling authority changes; no `/api/lead-signal` contract/runtime changes.
- **Validation:** `npm run lint` (pre-existing unrelated failures unchanged), `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged), `npm run build` pass, required `git diff` and `rg` checks completed.
- **Completion Notes:** Estimate page copy/layout reframed as estimate gateway; direct nav estimate visitors now see explicit options; selected package links pass estimate intent context; on-site walkthrough intent framing added; QR/flyer context preserved; protected runtime untouched.
- **Next Task Recommendation:** QUOTE-GEN001 only after QA-LAUNCH001 passes.

### QUOTE-GEN001
- **Task ID:** QUOTE-GEN001
- **Task Name:** Quote generation and delivery
- **Status:** DONE
- **Category:** FUNNEL / CRM / EMAIL
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Generate quote/review output from existing selected/recommended package context and deliver customer/operator quote copy.
- **Scope:** Preserve existing `/quoteReview` wiring with safe missing-context fallback; ensure estimate-review disclaimer language is visible; implement bounded quote email endpoint (`/api/send-quote`) reusing existing Resend runtime pattern for customer + operator/ownership copies.
- **Forbidden Scope:** No `/api/lead-signal` or `/api/support` changes; no Stripe/scheduling/SMS/reminders/autonomous booking changes; no PDF or AI proposal generation; no HubSpot schema/pipeline/property changes; no broad CRM-STAGEFLOW001 implementation.
- **Validation:** `npm run lint` (pre-existing unrelated failures unchanged), `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged), `npm run build` pass, required `git diff` + `rg` audits completed.
- **Completion Notes:** Visible site version bumped to `v1.0.61`; quote review flow renders estimate-summary guidance from existing selected/recommended package context and retains safe missing-context fallback UI; `/api/send-quote` delivers estimate-summary copy to customer (when email exists) and operator/ownership with review-only disclaimer language; HubSpot quote logging and stage update deferred to bounded follow-up tasks (`QUOTE-HUBSPOT001`, `QUOTE-STAGE001`) pending safe API-layer contract path and idempotent stage-transition guardrails.
- **Next Task Recommendation:** CRM-STAGEFLOW001 only after manual QA passes.

### QUOTE-GEN001B
- **Task ID:** QUOTE-GEN001B
- **Task Name:** Quote flow completion + estimate-to-quote routing
- **Status:** DONE
- **Category:** FUNNEL / QUOTE
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Complete customer-facing route from estimate gateway context into quote review while preserving protected runtime boundaries.
- **Scope:** Add estimate-gateway review CTA when selected/recommended context exists; ensure quote review can render from durable query/bootstrap context in addition to existing token/storage paths; provide safe missing-context recovery CTAs; preserve estimate-review disclaimer and existing quote send runtime path.
- **Forbidden Scope:** No `/api/lead-signal` or `/api/support` changes; no Stripe/scheduling/SMS/reminders/autonomous booking; no HubSpot schema/property/pipeline changes; no CRM stage-flow automation.
- **Validation:** `npm run lint` (pre-existing unrelated failures unchanged), `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged), `npm run build` pass, required `git diff` + `rg` audits completed.
- **Completion Notes:** Version bumped to `v1.0.62`; `/contact` now conditionally shows ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“Review Estimate SummaryÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â when selected-package or recommendation context exists and routes into `/quoteReview` with durable query context; `/quoteReview` now hydrates from token ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ saved quote ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ bounded query tier/recommendation fallback and shows required missing-context recovery CTAs (Find The Right System / Choose a Package / Request Estimate); send-quote path remained operational with existing customer-email validation and operator/ownership copy support.
- **Next Task Recommendation:** CRM-STAGEFLOW001 after manual QA.





### ESTIMATE-EMAIL001
- **Task ID:** ESTIMATE-EMAIL001
- **Task Name:** Refine customer estimate-request acknowledgement email
- **Status:** DONE
- **Category:** EMAIL / CUSTOMER TRUST / FUNNEL
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Scope:** Refine customer acknowledgement subject/body/greeting/next-step language for estimate requests while preserving existing dynamic context, protected `/api/lead-signal` runtime behavior, operator notification path, and HubSpot sync behavior.
- **Forbidden Scope:** No `/api/lead-signal` control-flow changes; no requestId lifecycle changes; no HubSpot schema/property/pipeline/stage logic changes; no Stripe/scheduling/SMS/support/quote runtime changes; no forbidden claims.
- **Validation:** `npm run lint` (pre-existing unrelated failures unchanged), `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged), `npm run build` pass, required `git diff` and `rg` audits completed.
- **Completion Notes:** Visible version bumped to `v1.0.81`; customer acknowledgement email subject refined to ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“We received your WNY Home Security estimate requestÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â; greeting/next-step/disclaimer/response-expectation/contact footer language updated for local professional clarity and mobile readability; dynamic selected-package + discovery context preserved; operator notification path and HubSpot/requestId/runtime behavior untouched.
- **Next Task Recommendation:** SCHED-GCAL001 only after ESTIMATE-EMAIL001 manual QA and launch-readiness review.

### QUOTE-SEND001
- **Task ID:** QUOTE-SEND001
- **Task Name:** Verify and harden send-quote runtime
- **Status:** DONE
- **Category:** FUNNEL / EMAIL / QUOTE
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Scope:** Inspect/harden `/api/send-quote` validation + QuoteReview send UX, preserve estimate-summary disclaimer language, preserve missing-context safety and protected runtimes.
- **Forbidden Scope:** No QUOTE-HUBSPOT001, QUOTE-STAGE001, or CRM-STAGEFLOW001 implementation; no `/api/lead-signal` or `/api/support` behavior changes; no Stripe/scheduling/SMS/reminders/PDF/AI proposal changes.
- **Validation:** `npm run lint` (pre-existing unrelated failures unchanged), `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged), `npm run build` pass, required `git diff` + `rg` audits completed.
- **Completion Notes:** Visible version bumped to `v1.0.63`; `/api/send-quote` now rejects missing quote tier/review URL context and returns clearer delivery failure messaging; QuoteReview now exposes explicit home-security send action (`Send estimate summary`) with existing success/error banner flow; required estimate-summary disclaimer preserved in review + email path; HubSpot quote logging/stage automation remains deferred to `QUOTE-HUBSPOT001` / `QUOTE-STAGE001`.
- **Next Task Recommendation:** QUOTE-HUBSPOT001 (only after manual end-to-end send QA confirms stable delivery).

### QUOTE-HUBSPOT001
- **Task ID:** QUOTE-HUBSPOT001
- **Task Name:** Quote HubSpot context logging hardening
- **Status:** READY
- **Category:** CRM
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Scope:** Add bounded quote-summary note logging through protected API-layer path when safe against existing contracts.
- **Forbidden Scope:** No HubSpot schema/pipeline changes; no direct frontend writes; no broad CRM stage-flow automation.

### QUOTE-STAGE001
- **Task ID:** QUOTE-STAGE001
- **Task Name:** Quote stage transition hardening
- **Status:** READY
- **Category:** CRM
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Scope:** Bounded idempotent quote stage transitions only after safe deal identification and exact stage-ID contract validation.
- **Forbidden Scope:** No broad CRM-STAGEFLOW001 implementation; no schema/pipeline changes; no Stripe/scheduling logic changes.

### CRM-STAGEFLOW001
- **Task ID:** CRM-STAGEFLOW001
- **Task Name:** CRM deal stage-flow rules
- **Status:** READY
- **Category:** CRM
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Define and implement deal pipeline advancement rules after quote/deposit/scheduling events.
- **Allowed Scope:** stage transition rules; idempotent stage updates; diagnostics.
- **Forbidden Scope:** no schema changes unless separately authorized; no Stripe verification changes; no scheduling authority changes.

### QA-LAUNCH001
- **Task ID:** QA-LAUNCH001
- **Task Name:** Launch QA for flyer/public traffic
- **Status:** READY
- **Category:** QA
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Final public-traffic launch QA for flyer publishing.
- **Allowed Scope:** route QA; mobile QA; estimate request QA; email QA; HubSpot QA; back/forward navigation QA; QR flyer path QA.
- **Forbidden Scope:** no feature work unless a separate bug task is created.

### SCHED-FOLLOWUP001
- **Task ID:** SCHED-FOLLOWUP001
- **Task Name:** Scheduling follow-up hardening queue preservation
- **Status:** READY
- **Category:** SCHED
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Preserve scheduling category as open for future hardening without making it current blocker.
- **Allowed Scope:** scheduling QA/future hardening docs only unless separately activated.
- **Forbidden Scope:** no autonomous booking; no SMS/reminders unless separately authorized; no scheduling authority model changes unless separately authorized.

## Blocked Tasks

No BLOCKED tasks are currently recorded.

---

## Completed Tasks

### CATALOG001
- **Task ID:** CATALOG001
- **Task Name:** Add WNYHS Capability Catalog REV02 Baseline
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add an internal planning catalog that defines the WNYHS control-plane capability universe for future validation, BOM, package, website, installation-standard, and hardware-standard work.
- **Allowed Scope:** Create `/docs/catalogs/wnyhs_capability_catalog_rev02.md`; update `/docs/DOCUMENT_CATALOG.md`; add bounded follow-up task records in this register.
- **Forbidden Scope:** Runtime code, UI components, routes, Stripe, HubSpot, scheduling, analytics, customer-facing package commitments, public pricing, final hardware commitments, competitor attack language, and deletion of historical docs.
- **Target Files:** `docs/catalogs/wnyhs_capability_catalog_rev02.md`, `docs/DOCUMENT_CATALOG.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None; documentation/catalog governance only.
- **Documentation Updates Required:** Add catalog entry and task-register records for catalog validation, BOM research, and package-design follow-up work.
- **Validation Required:** `npm run build`; `git diff -- docs/catalogs docs/DOCUMENT_CATALOG.md docs/system`; targeted forbidden-pricing and competitor-name scans against the new catalog.
- **Exit Criteria:** REV02 catalog exists with required sections, required table columns, required categories, currently identified features, immediate BOM priority list, REV03 research path, and explicit no-public-pricing warning.
- **Dependencies:** Prompt-created bounded governance task; current operational context and protected runtime locks remain in force.
- **Operator Decision Required:** Approve REV02 as planning baseline and decide when to activate CATALOG002, CATALOG003, BOM001, and PACKAGE001.



### FUNNEL-CLEANUP001
- **Task ID:** FUNNEL-CLEANUP001
- **Task Name:** Main Funnel CTA + Structure Consolidation
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (bounded frontend cleanup)
- **Purpose:** Reduce duplicate CTA competition, normalize CTA hierarchy, simplify package-card actions, and preserve package-aware context propagation.
- **Completion Notes:** Implemented canonical `/home-security` CTA hierarchy, normalized discovery completion CTA labels, simplified package card actions to Select + View details, preserved `vertical=home-security` and `tier=bronze|silver|gold` routing, and added audit doc `docs/audits/funnel_cleanup001_rev01.md`.

### FUNNEL-CLEANUP002
- **Task ID:** FUNNEL-CLEANUP002
- **Task Name:** Context Persistence + Intake Display
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (bounded funnel-context hardening)
- **Purpose:** Display selected package tier on intake, preserve tier through lead submission, and propagate additive package context in existing email/HubSpot note paths.
- **Completion Notes:** Implemented selected-tier intake display for `tier=bronze|silver|gold`, added `deal.packageTier` submission from contact route context, added additive package tier lines to operator/customer email content and HubSpot note/context summary, preserved protected runtime constraints, and added audit doc `docs/audits/funnel_cleanup002_rev01.md`.

### FUNNEL-CLEANUP003
- **Task ID:** FUNNEL-CLEANUP003
- **Task Name:** Discovery Persistence + Recommendation Propagation
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (bounded funnel-context persistence)
- **Purpose:** Preserve fit-check discovery context into contact intake payload and additive downstream operator email + HubSpot note context.
- **Completion Notes:** Added deterministic recommendation context propagation from discovery completion into `/contact` route params, added compact contact intake discovery summary display, added canonical `discoveryContext` payload submission from contact flow, and added additive discovery-summary lines to existing operator/customer email and HubSpot note output paths in `/api/lead-signal`; protected runtime behavior preserved; audit doc added at `docs/audits/funnel_cleanup003_rev01.md`.




### MAIN-FUNNEL-FIX003C
- **Task ID:** MAIN-FUNNEL-FIX003C
- **Task Name:** Planner CTA positioning / low-friction nav minimization
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (bounded main funnel UX cleanup)
- **Purpose:** Clarify Planner as optional/advanced/later and reduce nav distraction from estimate-request conversion flow.
- **Completion Notes:** Updated visible site version to v1.0.51; repositioned top-nav Planner entry as secondary optional item; retained Planner route access; tightened Planner CTA wording in recommendation state to emphasize later optional use; preserved home-security ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ discovery ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ recommendation ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ contact path and runtime boundaries; documented implementation in `docs/audits/main_funnel_fix003c_rev01.md`.

### MAIN-FUNNEL-FIX003B
- **Task ID:** MAIN-FUNNEL-FIX003B
- **Task Name:** Recommendation-state clarity only
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (bounded main funnel UX clarity)
- **Purpose:** Make recommendation the clear primary post-submit state while preserving existing runtime and route/query contracts.
- **Completion Notes:** Added recommendation-state focus/scroll behavior, hid completed questionnaire by default after recommendation generation, added `Review my answers` toggle for reversible answer review, preserved recommendation logic and existing `Continue To Estimate Request` query propagation, and documented task in `docs/audits/main_funnel_fix003b_rev01.md`.

### T-STEP103-QA-001
- **Task ID:** T-STEP103-QA-001
- **Task Name:** Diagnose and fix Quote Review quote generation/display failure
- **Status:** DONE
- **Category:** QA

### T-STEP102-HARDEN-001
- **Task ID:** T-STEP102-HARDEN-001
- **Task Name:** Fix Payment ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ Schedule quote-scoped deposit validation
- **Status:** DONE
- **Category:** PAYMENT

### T-STEP102-HARDEN-002
- **Task ID:** T-STEP102-HARDEN-002
- **Task Name:** Replace hardcoded payment vertical metadata with validated vertical context
- **Status:** DONE
- **Category:** PAYMENT

### T-STEP102-HARDEN-003
- **Task ID:** T-STEP102-HARDEN-003
- **Task Name:** Add Agreement ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ Payment binding metadata
- **Status:** DONE
- **Category:** PAYMENT

### T-STEP102-HARDEN-004
- **Task ID:** T-STEP102-HARDEN-004
- **Task Name:** Strengthen Quote ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ Agreement validation
- **Status:** DONE
- **Category:** PAYMENT

---


### T-SCHED001-001
- **Task ID:** T-SCHED001-001
- **Task Name:** SCHED001 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Safe Scheduling Posture + Future Scheduling Model Lock-In
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Remove false-confirmation risk from current scheduling UX/copy and lock future scheduling model guidance for subsequent implementation tasks.
- **Allowed Scope:** Scheduling copy safety audit, minimal customer-facing copy hardening, runtime scheduling model documentation updates, bounded SCHED queue documentation, and register lifecycle update for this task only.
- **Forbidden Scope:** No Google Calendar implementation; no SMS/reminder/owner-acceptance implementation; no backend scheduling implementation; no Stripe/HubSpot/Resend/env-var/secret changes.
- **Target Files:** `docs/runtime/scheduling_future_model.md`, `docs/runtime/scheduling_ownership.md`, `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `src/pages/NeverMissAnotherEstimate.tsx`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Scheduling documentation and customer-facing scheduling safety copy only.
- **Documentation Updates Required:** Create future model doc, cross-link scheduling ownership/audit docs, update document catalog, and record task completion in register.
- **Validation Required:** `git branch --show-current`; `git rev-parse HEAD`; required `rg` audits for scheduling copy/semantics; `npm run build`; `git diff -- docs src functions`.
- **Exit Criteria:** Current copy does not imply auto-confirmed scheduling in audited customer-facing scheduling paths; future scheduling model is documented; bounded future SCHED queue recorded.
- **Dependencies:** IMPL009 completion context (manual-confirmation classification).
- **Operator Decision Required:** Yes (provided in operator prompt).



### CRM-DEAL002B
- **Task ID:** CRM-DEAL002B
- **Status:** DONE

### MAIN-FUNNEL-AUDIT002
- **Task ID:** MAIN-FUNNEL-AUDIT002
- **Status:** DONE

### MAIN-FUNNEL-FIX003A
- **Task ID:** MAIN-FUNNEL-FIX003A
- **Status:** DONE

### NAV-BUG001
- **Task ID:** NAV-BUG001
- **Status:** DONE

### NAV-UX001
- **Task ID:** NAV-UX001
- **Status:** DONE

### FUNNEL-ARCH001
- **Task ID:** FUNNEL-ARCH001
- **Status:** DONE

## Archived Tasks

No ARCHIVED tasks are currently recorded.

---

## Promotion Rule

- A task may be promoted to **ACTIVE** only when authorized by the current operational context in `/docs/system/step-current.md`.
- A promoted task must include the required task schema defined in `/docs/codex/CODEX_TASK_REGISTER_RULES.md`.
- If scope is unclear or outside the current operational context, stop and request a context revision before promotion.

---

## Codex Execution Rule

- Codex may execute only tasks in **Active Tasks** with `Status: ACTIVE`.
- Codex must not execute tasks in READY, BACKLOG, BLOCKED, DONE, or ARCHIVED states.
- Active Tasks are the operational execution driver within the current context.
- On completion, Codex must move finished work to DONE and preserve traceability.


### SCHED-HARDEN001
- **Task ID:** SCHED-HARDEN001
- **Task Name:** Owner Confirmation Idempotency + Durable Customer Contact Fields
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Completion Notes:** Added idempotency guards for repeated owner confirmation side effects, persisted durable customer contact fields at appointment request creation, and added calendar/email audit metadata persistence with focused tests.


- **Completion Notes:** LEAD-FIX001 implemented canonical sendLeadSignal funnelContext continuity capture from existing funnel/newsite storage and URL metadata without HubSpot schema changes; version bumped to v1.0.43; validation + build completed.

### GOV-HARDEN002
- **Task ID:** GOV-HARDEN002
- **Task Name:** Protected Runtime + Funnel Contract Lock
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-SCHED-MVP-REV01 (documentation/governance hardening only)
- **Purpose:** Lock known-good protected runtime systems, canonical funnel flow, context fields, and HubSpot pipeline/stage/env contracts to prevent drift.
- **Scope:** Docs-only (`docs/`); no runtime/source changes.

## GOV-HARDEN002 Status Normalization Snapshot

- CRM-SCHEMA001 = DONE
- HOTFIX-LEAD001 = DONE
- CRM-DEAL002A = DONE / partial completion
- CRM-PIPELINE001 = DONE
- CRM-CONTRACT001 = DONE
- FUNNEL-CLEANUP001 = DONE
- FUNNEL-CLEANUP002 = DONE
- FUNNEL-CLEANUP003 = DONE
- GOV-HARDEN002 = DONE


### STD-LOCK001
- **Task ID:** STD-LOCK001
- **Task Name:** WNYHS brand, layout, and funnel standards lock + task-register authorization
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Create locked standards docs and authorize QR-REDUX001 execution.
- **Target Files:** `docs/brand/brand_asset_standards_rev01.md`, `docs/brand/page_layout_standards_rev01.md`, `docs/brand/header_footer_standards_rev01.md`, `docs/specs/qr_funnel_standards_rev01.md`, `docs/specs/public_funnel_standards_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/system/master-task-register.md`, `docs/system/step-current.md`, `docs/brand/visual_system_rev01.md`.
- **Runtime Systems Affected:** none
- **Validation Required:** docs grep checks only; build not required for docs-only scope unless separately demanded.
- **Exit Criteria:** standards docs created, catalog updated, QR-REDUX001 registered.

### QR-REDUX001
- **Task ID:** QR-REDUX001
- **Task Name:** QR Landing trust-first redesign (payload-safe)
- **Status:** ACTIVE
- **Category:** QR
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Redesign QR Landing as a WNYHS trust-first QR intake page.
- **Allowed Scope:** `/qrlanding` visual/layout/copy redesign; use existing approved assets; simplified QR nav; progressive form layout only if payload preserved; remove SaaS/demo/assistant leakage; footer parity.
- **Forbidden Scope:** no HubSpot changes; no lead API changes; no form payload changes; no field name changes; no source tracking changes; no consent logic changes; no Stripe/scheduling/backend changes.
- **Target Files:** actual QR page files; layout/footer/style files only as needed; `siteVersion` when executed.
- **Validation Required:** `npm run build`; bad-content scan; payload safety scan; footer scan; route/nav scan; forbidden claims scan.
- **Exit Criteria:** QR page no longer appears SaaS/demo; existing intake behavior preserved; WNYHS footer/header standards followed.


### BRAND-AUTH001
- **Task ID:** BRAND-AUTH001
- **Task Name:** Brand Asset Authority Document
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Establish canonical visual asset authority for WNYHS physical and digital branding.
- **Allowed Scope:**
  - `docs/brand/brand_asset_authority_rev01.md`
  - `docs/DOCUMENT_CATALOG.md`
  - `docs/system/master-task-register.md` entry update only
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - routes
  - Stripe
  - HubSpot
  - new logo generation
- **Validation Required:**
  - documentation diff
  - asset path verification
- **Exit Criteria:**
  - brand authority doc exists
  - catalog updated
  - task registered or updated


### PRINTSYSTEM001
- **Task ID:** PRINTSYSTEM001
- **Task Name:** Print Production Standards
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** current physical brand / print execution context
- **Purpose:** establish canonical physical print production standards after brand asset authority was created
- **Allowed Scope:**
  - `docs/brand/print_system_standards_rev01.md`
  - `docs/DOCUMENT_CATALOG.md`
  - `docs/system/master-task-register.md`
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - production layout creation
  - vendor purchasing
- **Validation Required:**
  - documentation diff
  - related doc references verified
  - forbidden-claims scan
- **Exit Criteria:**
  - print standards doc exists
  - catalog updated
  - task registered or updated
  - no runtime/source behavior changed


### PRINT-ASSET004B
- **Task ID:** PRINT-ASSET004B
- **Task Name:** Half-Sheet Flyer Visual System Refinement
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** current physical brand / print execution context
- **Purpose:** refine the half-sheet flyer generator so outputs align with the canonical premium WNYHS poster/placard visual style while preserving source-only generated-output workflow
- **Allowed Scope:**
  - `/public/brand/print-assets/half-sheet-flyers/README.md`
  - `/public/brand/print-assets/half-sheet-flyers/source/generate-half-sheet-flyers.mjs`
  - `/public/brand/print-assets/half-sheet-flyers/source/flyer-content.json`
  - `/docs/system/master-task-register.md`
  - `/.gitignore` only if needed
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - alternate AI logo versions
  - committed generated PDFs
  - committed generated PNGs
  - committed binary print outputs
  - QR placards
  - yard signs
  - business cards
  - car magnets
  - leave-behinds
  - apparel
  - vendor purchasing
- **Validation Required:**
  - generator runs locally
  - generated outputs go only to ignored `generated/`
  - generated PDFs are not tracked
  - color outputs use premium dark WNYHS visual composition
  - grayscale outputs remain readable
  - canonical QR Landing asset used
  - business-card QR not used
  - forbidden-claims scan
  - build check if repo standard requires it
- **Exit Criteria:**
  - half-sheet flyer generator visually refined
  - README updated
  - task registered or updated
  - generated outputs are local/ignored only
  - no generated binaries are committed
  - no runtime/source behavior changed
- **Completion Notes:** Refined the generator from a plain white card layout to a premium dark WNYHS campaign composition using `PoleFlyerMallFlyer.png` as the visual benchmark, preserving the source-only generated-output workflow and the three approved half-sheet flyer variants.


### PRINT-ASSET004C
- **Task ID:** PRINT-ASSET004C
- **Task Name:** Flyer Composition Polish
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** current physical brand / print execution context
- **Purpose:** polish the half-sheet flyer generator after PRINT-ASSET004B by reducing visual noise, improving focal hierarchy, integrating the crest better, elevating the QR block, tightening typography, and improving footer spacing while preserving the source-only workflow
- **Allowed Scope:**
  - `/public/brand/print-assets/half-sheet-flyers/README.md`
  - `/public/brand/print-assets/half-sheet-flyers/source/generate-half-sheet-flyers.mjs`
  - `/public/brand/print-assets/half-sheet-flyers/source/flyer-content.json`
  - `/docs/system/master-task-register.md`
  - `/.gitignore` only if strictly necessary
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - alternate AI logo versions
  - committed generated PDFs
  - committed generated PNGs
  - committed binary print outputs
  - new flyer variants
  - QR placards
  - yard signs
  - business cards
  - car magnets
  - leave-behinds
  - apparel
  - vendor purchasing
- **Validation Required:**
  - generator runs locally
  - generated outputs go only to ignored `generated/`
  - generated PDFs are not tracked
  - flyer composition is visually polished, not rebuilt
  - crest integration improved
  - QR block improved
  - footer spacing improved
  - grayscale outputs remain readable
  - canonical QR Landing asset used
  - business-card QR not used
  - forbidden-claims scan
  - build check if repo standard requires it
- **Exit Criteria:**
  - half-sheet flyer generator polished
  - exactly three flyer variants preserved
  - README updated if needed
  - task registered or updated
  - generated outputs are local/ignored only
  - no generated binaries are committed
  - no runtime/source behavior changed
- **Completion Notes:** Polished the PRINT-ASSET004B flyer composition without rebuilding the system: reduced background density, integrated the crest in a restrained dark/gold treatment, elevated the QR block with a campaign CTA, tightened typography, improved footer breathing room, preserved exactly three approved variants, and kept generated outputs local/ignored only.





### PRINT-ASSET004
- **Task ID:** PRINT-ASSET004
- **Task Name:** Half-Sheet Flyer Source Generator Package
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** current physical brand / print execution context
- **Purpose:** create source-only reproducible half-sheet flyer generator package following the non-committed generated binary workflow
- **Allowed Scope:**
  - `/public/brand/print-assets/half-sheet-flyers/README.md`
  - `/public/brand/print-assets/half-sheet-flyers/source/generate-half-sheet-flyers.mjs`
  - `/public/brand/print-assets/half-sheet-flyers/source/flyer-content.json`
  - `/.gitignore`
  - `/docs/system/master-task-register.md`
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - alternate AI logo versions
  - committed generated PDFs
  - committed generated PNGs
  - committed binary print outputs
  - QR placards
  - yard signs
  - identity card source packages
  - car magnets
  - leave-behinds
  - apparel
  - vendor purchasing
- **Validation Required:**
  - generator runs locally
  - generated outputs go only to ignored `generated/`
  - generated PDFs are not tracked
  - canonical QR Landing asset used
  - main website QR not used
  - forbidden-claims scan
  - build check if repo standard requires it
- **Exit Criteria:**
  - source generator exists
  - content config exists
  - README/manifest exists
  - `.gitignore` prevents generated flyer binaries from being committed
  - generated outputs can be produced locally
  - no generated binaries are committed
  - task registered or updated
  - no runtime/source behavior changed
- **Completion Notes:** Source-controlled package uses generator, JSON content config, and manifest only; generated PDFs are reproducible local outputs written to `/public/brand/print-assets/half-sheet-flyers/generated/` and are intentionally not committed.

### PRINT-ASSET003
- **Task ID:** PRINT-ASSET003
- **Task Name:** Half-Sheet Flyer Production System
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** current physical brand / print execution context
- **Purpose:** establish the half-sheet flyer production system after QR placard production system
- **Allowed Scope:**
  - `docs/brand/print_assets/half_sheet_flyer_system_rev01.md`
  - `docs/DOCUMENT_CATALOG.md`
  - `docs/system/master-task-register.md`
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - alternate AI logo versions
  - generated PDFs
  - generated PNGs
  - binary print outputs
  - production flyer files
  - yard signs
  - business cards
  - car magnets
  - apparel
  - vendor purchasing
- **Validation Required:**
  - documentation diff
  - asset path verification
  - forbidden-claims scan
  - source-only print asset workflow confirmed
- **Exit Criteria:**
  - half-sheet flyer system doc exists
  - catalog updated
  - task registered or updated
  - no production flyer binaries created
  - no runtime/source behavior changed

### PRINT-ASSET002
- **Task ID:** PRINT-ASSET002
- **Task Name:** QR Placard Production Files
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** current physical brand / print execution context
- **Purpose:** generate first production-ready QR placard files for local campaign deployment
- **Allowed Scope:**
  - `/public/brand/print-assets/qr-placards/`
  - `/docs/system/master-task-register.md`
  - optionally `/docs/DOCUMENT_CATALOG.md` only if catalog conventions require listing print packages
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - unrelated print assets
  - yard signs
  - business cards
  - car magnets
  - leave-behinds
  - apparel
  - vendor purchasing
- **Validation Required:**
  - production files exist
  - PDFs open/build successfully
  - canonical QR Landing asset used
  - business-card QR not used
  - forbidden-claims scan
  - build check if repo standard requires it
- **Exit Criteria:**
  - color two-up PDF exists
  - color full-page PDF exists
  - grayscale two-up PDF exists
  - grayscale full-page PDF exists
  - README exists
  - task registered or updated
  - no runtime/source behavior changed
- **Completion Notes:** Source-controlled package uses generator + manifest only; production PDFs are reproducible local outputs written to `/public/brand/print-assets/qr-placards/generated/` and are intentionally not committed.

### PRINT-ASSET001
- **Task ID:** PRINT-ASSET001
- **Task Name:** QR Placard Production System
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** current physical brand / print execution context
- **Purpose:** establish the first deployable physical marketing asset system for QR placards
- **Allowed Scope:**
  - `docs/brand/print_assets/qr_placard_system_rev01.md`
  - `docs/DOCUMENT_CATALOG.md`
  - `docs/system/master-task-register.md`
  - optionally `public/brand/print-assets/qr-placards/` only if safe production source/output stubs are created
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - unrelated print assets
  - yard signs
  - business cards
  - car magnets
  - apparel
  - vendor purchasing
- **Validation Required:**
  - documentation diff
  - asset path verification
  - forbidden-claims scan
  - QR destination/usage rule verification
- **Exit Criteria:**
  - QR placard system doc exists
  - catalog updated
  - task registered or updated
  - QR Landing QR is the only approved QR for placards
  - no runtime/source behavior changed

### ARCH001
- **Task ID:** ARCH001
- **Task Name:** Document Home Assistant + Node-RED automation architecture direction
- **Status:** READY
- **Category:** GOV / DOCS / ARCH
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Capture approved future local-first automation/orchestration direction without implementing runtime changes.
- **Allowed Scope:**
  - docs-only updates describing Home Assistant as customer-facing control layer
  - docs-only updates describing Node-RED as future advanced operator-facing orchestration layer
  - phased-adoption guidance and bounded follow-up task candidates
  - document-catalog updates if authority/status metadata changes
- **Forbidden Scope:**
  - no runtime/source code changes
  - no Home Assistant/Node-RED/MQTT/Frigate/AI configuration changes
  - no Stripe/HubSpot/Cloudflare/email behavior changes
  - no route/UI changes
- **Validation Required:**
  - `git diff -- docs`
  - `rg -n "Node-RED|Node RED|Home Assistant|MQTT|Frigate|automation orchestration" docs`
  - `rg -n "monitoring|guarantee|guaranteed|prevent|prevents" docs`
- **Exit Criteria:**
  - architecture direction documented as future-state only
  - Home Assistant remains primary customer-facing control layer in documentation
  - Node-RED documented as operator-facing advanced layer only
  - follow-up work captured as bounded future tasks only

### DOC001
- **Task ID:** DOC001
- **Task Name:** Repository Markdown Manifest
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a repo-wide markdown manifest so future Codex tasks can identify source-of-truth documents, runtime contracts, HubSpot docs, request/estimate docs, catalog docs, and stale/duplicate documentation before making changes.
- **Allowed Scope:** Documentation-only manifest creation, document catalog update, and task-register completion record.
- **Forbidden Scope:** Runtime code, UI components, routes, Stripe, HubSpot integration code, scheduling code, referral implementation, estimate behavior changes, document deletion, document renaming, document consolidation, public pricing, and customer-facing claims.
- **Target Files:** `docs/MARKDOWN_MANIFEST.md`, `docs/DOCUMENT_CATALOG.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add manifest entry to `docs/DOCUMENT_CATALOG.md` and mark DOC001 complete in this register.
- **Validation Required:** `git status`; `git diff -- docs/MARKDOWN_MANIFEST.md docs/DOCUMENT_CATALOG.md docs/system/master-task-register.md`; `git diff --name-only`; markdown file scan excluding `.git` and `node_modules`; targeted manifest review-set grep.
- **Exit Criteria:** Manifest inventories every scanned markdown file, high-risk review sets exist, LEADFLOW001/HubSpot/QR/BOM-package review sets exist, and no runtime/source behavior changes are introduced.
- **Dependencies:** Current governance context and existing documentation corpus.
- **Operator Decision Required:** No.
- **Completion Notes:** Created `docs/MARKDOWN_MANIFEST.md` with 107 markdown files inventoried and explicit review sets for LEADFLOW001, HubSpot, QR/source attribution, BOM/package, Stripe, and scheduling work. No implementation tasks were completed.

### DOCSTATUS001
- **Task ID:** DOCSTATUS001
- **Task Name:** Documentation Reconciliation + Status Classification
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Perform a docs-only reconciliation pass using the markdown manifest so future implementation work does not break existing HubSpot, request estimate, QR attribution, scheduling, Stripe, runtime, catalog, or funnel systems.
- **Allowed Scope:** Documentation-only reconciliation document creation, document catalog update, markdown manifest addendum, and task-register completion record.
- **Forbidden Scope:** Runtime code, UI components, routes, Stripe code, HubSpot integration code, scheduling code, LEADFLOW001 implementation, referral logic, request estimate behavior changes, document deletion, document renaming, document consolidation, historical document rewrite, public pricing, and customer-facing claims.
- **Target Files:** `docs/system/document_status_reconciliation_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add the reconciliation document, add document catalog entry, add markdown manifest addendum, and mark DOCSTATUS001 complete in this register.
- **Validation Required:** `git status`; `git diff -- docs/system/document_status_reconciliation_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --name-only`; targeted reconciliation grep; targeted catalog/manifest/register grep; `npm run build`.
- **Exit Criteria:** Reconciliation document exists, high-risk review sets are present, LEADFLOW001 review set is focused and practical, documentation gaps and future tasks are identified, and no runtime/source behavior changes are introduced.
- **Dependencies:** DOC001, CATALOG003, current governance context, runtime contracts, HubSpot REV03, funnel standards, Scheduling contracts, Stripe runtime contract, and Capability Catalog REV03.
- **Operator Decision Required:** Review DOCSYNC001 and LEADFLOW001 ordering before implementation work.
- **Completion Notes:** Created `docs/system/document_status_reconciliation_rev01.md`, classified authoritative/supporting/historical/superseded/unknown docs, captured current HubSpot/QR/Scheduling/Stripe/catalog realities, listed known documentation gaps, and preserved protected runtime systems.

### LEADFLOW001
- **Task ID:** LEADFLOW001
- **Task Name:** Lead Intake, Referral Attribution, and Quote-Aware CRM Workflow Runtime Contract
- **Status:** DONE
- **Category:** GOV / LEAD / CRM / QR
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the lead intake, referral attribution, named QR source attribution, and quote-aware CRM workflow runtime contract before any implementation work.
- **Allowed Scope:** Documentation-only runtime contract drafting, review-set use, source attribution model definition, referral-awareness boundaries, HubSpot mapping proposal, document catalog update, markdown manifest addendum, task-register update, and follow-up task definition.
- **Forbidden Scope:** Runtime code changes, UI changes, route changes, HubSpot schema/property creation, HubSpot workflow implementation, Stripe changes, scheduling behavior changes, referral payout automation, request estimate behavior changes, and direct CRM writes.
- **Target Files:** `docs/runtime/leadflow_referral_attribution_runtime.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** New runtime contract, document catalog entry, markdown manifest addendum, and task-register completion record.
- **Validation Required:** `git status`; `git diff -- docs/runtime/leadflow_referral_attribution_runtime.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --name-only`; `git ls-files --deleted`; targeted contract grep; targeted catalog/manifest/register grep; `npm run build`.
- **Exit Criteria:** Runtime contract exists, includes all required sections, keeps manual referral and source attribution separate, defines future implementation gates, and clearly separates documentation decisions from implementation.
- **Dependencies:** DOCSTATUS001.
- **Operator Decision Required:** Approve scope and HubSpot/referral boundaries before activation.
- **Completion Notes:** Created `docs/runtime/leadflow_referral_attribution_runtime.md` as a documentation-only runtime contract for future leadflow/referral/source/quote-awareness work. No runtime behavior, API payload behavior, HubSpot schema, named QR implementation, payout automation, quote automation, Stripe behavior, Scheduling behavior, route, UI, or form changes were made.

### LEADFLOW002A
- **Task ID:** LEADFLOW002A
- **Task Name:** Estimate Intake Conversion Split + Callback Request Path
- **Status:** DONE
- **Category:** LEAD / FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Improve estimate-intake conversion by splitting the contact-page intake experience into Request a Call and Request On-Site Estimate paths while preserving protected lead-signal, requestId, HubSpot, QRLanding, Scheduling, Stripe, and referral payout boundaries.
- **Allowed Scope:** Existing lead intake/form/page components, existing lead-signal callback handling through `/api/lead-signal`, safe operator/customer notification wording, optional referral context in existing request/note context only, visible site version bump, and task-register completion record.
- **Forbidden Scope:** No replacement or bypass of `/api/lead-signal`, no direct frontend HubSpot writes, no HubSpot property/schema/pipeline/stage changes, no Stripe changes, no payment behavior changes, no named QR source parsing, no `/qrlanding?src=` implementation, no QRLanding attribution event changes, no referral payout logic/status/percentage/amount, no customer-authoritative booking, no quote approval automation, no automatic discounts, no installer/contractor onboarding, no broad redesign, and no deletion of existing estimate fields.
- **Target Files:** `src/components/CanonicalEstimateRequestForm.tsx`, `src/pages/Contact.tsx`, `src/styles/canonicalEstimateForm.css`, `src/lib/siteVersion.ts`, `functions/api/lead-signal.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Additive lead intake behavior through existing `/api/lead-signal`; no new CRM write path or protected-system replacement.
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `git status`; `git diff --name-only`; `git diff -- src docs`; `git ls-files --deleted`; targeted lead-signal/HubSpot/requestId/QR/referral/safety grep; targeted HubSpot property/pipeline grep; `npm run build`; scoped tests where available.
- **Exit Criteria:** Contact page offers Request a Call and Request On-Site Estimate; existing canonical estimate submission remains available and preserves supported fields; callback path requires only name and phone with optional email, notes, and `referredByName`; submissions use `/api/lead-signal`; HubSpot sync remains API-mediated with no new properties; QRLanding attribution events remain unchanged; Scheduling remains request/pending owner confirmation; no Stripe or payout logic changes occur.
- **Dependencies:** LEADFLOW001, HUBSPOT-REFERRAL001, ATTRIBUTION001, REFERRAL-SOP001, QUOTE-REFERRAL001, scheduling runtime contracts, protected runtime contract.
- **Operator Decision Required:** Approve PR after validation and protected-flow review.
- **Completion Notes:** Added a contact-page intake split, callback request event handling through existing `/api/lead-signal`, optional `referredByName` in request/note/operator context only, callback-safe acknowledgement text, and a visible site version bump. Existing estimate submissions, HubSpot API-mediated sync, server requestId behavior, QRLanding attribution events, Scheduling confirmation boundary, Stripe behavior, and referral payout boundary were preserved.

### LEADFLOW002B
- **Task ID:** LEADFLOW002B
- **Task Name:** QRLanding Conversion Fix + Intake Parity
- **Status:** DONE
- **Category:** QR / LEAD / FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Improve QRLanding conversion by tightening the hero footprint, moving the Request a Call / Request On-Site Estimate choice higher, hiding forms until path selection, reducing non-essential QR estimate requirements, and preserving protected lead-signal, requestId, HubSpot, QR attribution, Scheduling, Stripe, and referral payout boundaries.
- **Allowed Scope:** `src/pages/QrLanding.tsx`, `src/components/CanonicalEstimateRequestForm.tsx`, `src/styles/qrLanding.css`, `src/styles/canonicalEstimateForm.css`, `src/lib/siteVersion.ts`, bounded `/api/lead-signal` validation relaxation for optional QR estimate fields, and this task-register completion record.
- **Forbidden Scope:** No Stripe changes, no payment behavior changes, no HubSpot properties/schema/pipeline/stage changes, no direct frontend HubSpot writes, no named QR source parsing, no source registry logic, no referral payout logic/status/amount/percentage, no scheduling automation, no calendar event creation, no customer-authoritative booking, no referral discount/customer-facing payout language, no quote automation, no contractor onboarding, no revoke-permission feature, no broad site redesign, no QR attribution event rename/removal, and no deletion of supported estimate fields without optional access.
- **Runtime Systems Affected:** QRLanding form UX and bounded lead-signal validation only; existing `/api/lead-signal` endpoint, server requestId generation, API-mediated HubSpot sync, operator/customer notification paths, QR attribution event names, Scheduling confirmation boundary, and Stripe behavior remain preserved.
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `git status`; `git diff --name-only`; `git diff -- src functions docs`; `git ls-files --deleted`; `git diff --check`; targeted QR/lead-signal/HubSpot/requestId/referral/safety grep; targeted HubSpot property/pipeline grep; scoped lead-signal/HubSpot tests; `npm run build`.
- **Exit Criteria:** QRLanding presents Request a Call / Request On-Site Estimate choice before showing either form; hero footprint is reduced; callback form remains low-friction; QR estimate path uses optional non-essential fields where safe; where-did-you-hear-about-us is removed from the QR required flow; preferred communication supports multiple selections; final communication permission is visually separate and mandatory; duplicate communication controls are removed; `/qrlanding?src=placard`, QR attribution event names, `/api/lead-signal`, HubSpot API-mediated sync, requestId behavior, Scheduling request-only posture, Stripe boundary, named QR boundary, and referral payout boundary are preserved.
- **Dependencies:** LEADFLOW002A, LEADFLOW001, QRLanding runtime contract, lead-signal/requestId/HubSpot/Scheduling/Resend protected runtime contracts, HubSpot REV03.
- **Operator Decision Required:** Approve PR after validation and protected-flow review.
- **Completion Notes:** QRLanding now uses the shared intake split with deferred path selection, compact QR-specific estimate requirements, multi-select communication preferences, and a mandatory permission acknowledgement. The hero was tightened into a two-column conversion layout. `/api/lead-signal` remains the submission boundary; QR estimate validation was relaxed so optional email/date/window fields do not block submission. No HubSpot properties, direct frontend HubSpot writes, Stripe changes, scheduling automation, named QR parsing, or referral payout logic were added.

### LEADFLOW002C
- **Task ID:** LEADFLOW002C
- **Task Name:** Main Contact Intake Styling Parity + Estimate Entry Cleanup
- **Status:** DONE
- **Category:** LEAD / FUNNEL / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Bring the main `/contact?vertical=home-security` intake styling into parity with the polished QRLanding shared intake experience while preserving protected lead-signal, requestId, HubSpot, Scheduling, QR attribution, Stripe, and referral payout boundaries.
- **Allowed Scope:** `src/pages/Contact.tsx`, `src/components/CanonicalEstimateRequestForm.tsx`, `src/styles/canonicalEstimateForm.css`, `src/lib/siteVersion.ts`, and this task-register completion record.
- **Forbidden Scope:** No Stripe changes, no payment behavior changes, no HubSpot properties/schema/pipeline/stage changes, no direct frontend HubSpot writes, no `/api/lead-signal` behavior changes, no named QR source parsing, no source registry logic, no referral payout logic/status/amount/percentage, no scheduling automation, no calendar event creation, no customer-authoritative booking, no quote automation, no Fit Check changes, no Quote page changes, no Agreement/Deposit/Schedule/System Planner legacy route changes, and no broad site redesign.
- **Runtime Systems Affected:** Contact-page intake presentation only through the existing shared form; protected runtime behavior remains unchanged.
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `git status`; `git diff --name-only`; `git diff -- src docs`; `git ls-files --deleted`; `git diff --check`; targeted Contact/intake/lead-signal/HubSpot/requestId/referral/safety/Fit Check/Quote grep; scoped lead-signal/HubSpot tests; `npm run build`.
- **Exit Criteria:** Contact page uses the same deferred Request a Call / Request On-Site Estimate path-selection posture as QRLanding; shared intake controls render as polished cards/permission sections instead of browser-default controls; submit buttons use premium CTA styling and path-specific labels; excess whitespace above path selection is tightened; callback path remains low-friction; non-essential fields remain optional where safe; `/api/lead-signal`, requestId, HubSpot API-mediated sync, Scheduling request-only posture, QR attribution, Stripe, Fit Check, and Quote pages remain preserved.
- **Dependencies:** LEADFLOW002A, LEADFLOW002B, LEADFLOW001, protected runtime contracts, HubSpot REV03, public/main funnel standards.
- **Operator Decision Required:** Approve PR after validation and protected-flow review.
- **Completion Notes:** Contact now uses the deferred compact shared intake variant and the shared form CSS owns the polished path cards, communication method cards, mandatory permission box, and premium submit button styling. Visible site version bumped. No backend, HubSpot, Stripe, Scheduling, QR source parsing, Fit Check, Quote, or legacy transaction route changes were made.

### LEADFLOW002
- **Task ID:** LEADFLOW002
- **Task Name:** Lead Intake + Referral Attribution Implementation
- **Status:** BACKLOG
- **Category:** LEAD / CRM / QR
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement approved lead intake modernization, referral capture, and named source attribution only after LEADFLOW001, HubSpot mapping, attribution schema, quote-awareness, referral SOP, and QA plans are approved.
- **Allowed Scope:** Future implementation scope to be defined when activated.
- **Forbidden Scope:** Any implementation before required contracts and mappings are approved; direct frontend HubSpot writes; Stripe changes; Scheduling authority changes; route/funnel changes outside explicit scope; payout automation without approval.
- **Target Files:** Future scoped files only.
- **Runtime Systems Affected:** Future lead intake runtime if activated.
- **Documentation Updates Required:** Update runtime contracts and task register when activated.
- **Validation Required:** Future scoped validation plus QA-LEADFLOW001.
- **Exit Criteria:** To be defined when activated.
- **Dependencies:** LEADFLOW001, HUBSPOT-REFERRAL001, ATTRIBUTION001, QUOTE-REFERRAL001, REFERRAL-SOP001, QA-LEADFLOW001.
- **Operator Decision Required:** Approve implementation scope.

### HUBSPOT-REFERRAL001
- **Task ID:** HUBSPOT-REFERRAL001
- **Task Name:** HubSpot Referral Property Mapping Contract
- **Status:** DONE
- **Category:** CRM
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define proposed HubSpot contact/deal/note/task field placement, internal property names, field types, enum values, ownership, approval gates, and sync rules for referral attribution, named QR source attribution, lead entry path, and referral payout review before LEADFLOW002 implementation.
- **Allowed Scope:** Documentation-only HubSpot mapping contract creation, document catalog entry, markdown manifest addendum, and task-register completion record.
- **Forbidden Scope:** No runtime code, UI, routes, form components, HubSpot implementation code, HubSpot property creation, HubSpot writes, API payload changes, lead-signal implementation changes, QRLanding implementation changes, Stripe code, Scheduling code, tests, quote behavior changes, payout automation, named QR implementation, or customer-facing copy changes.
- **Target Files:** `docs/crm/hubspot/hubspot_referral_property_mapping_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add CRM mapping contract, catalog entry, manifest addendum, and register completion record.
- **Validation Required:** `git status`; `git diff -- docs/crm/hubspot/hubspot_referral_property_mapping_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --name-only`; `git ls-files --deleted`; targeted mapping-contract grep; targeted catalog/manifest/register grep; `npm run build`.
- **Exit Criteria:** Proposed field mapping and approval posture are documented; no HubSpot properties are created; no runtime/source behavior changes occur; LEADFLOW002 remains incomplete.
- **Dependencies:** LEADFLOW001.
- **Operator Decision Required:** Approve or revise proposed HubSpot property names, enum values, object placement, privacy posture, payout policy, and source registry model before implementation.
- **Completion Notes:** Created `docs/crm/hubspot/hubspot_referral_property_mapping_rev01.md` as a docs-only internal CRM mapping contract. No HubSpot properties were created, no HubSpot records were written, and no runtime code, API payload, lead-signal, QRLanding, quote, payout, Stripe, Scheduling, route, form, UI, or customer-facing copy behavior changed.

### ATTRIBUTION001
- **Task ID:** ATTRIBUTION001
- **Task Name:** Named QR Source Attribution Schema Contract
- **Status:** DONE
- **Category:** QR
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only attribution schema contract defining how future partner-specific, location-specific, campaign-specific, and print-asset-specific QR sources should be named, registered, validated, preserved, reviewed, and mapped through future leadflow/HubSpot/reporting work.
- **Allowed Scope:** Documentation-only named QR source attribution schema contract, document catalog entry, markdown manifest addendum, register completion record, and future placeholder task records for ATTRIBUTION002 and ATTRIBUTION003.
- **Forbidden Scope:** No runtime code, UI, routes, form components, public files, QR codes, print assets, URL parsing implementation, QRLanding implementation, lead-signal implementation, HubSpot properties, HubSpot writes, HubSpot runtime code, Stripe code, Scheduling code, tests, referral capture, payout logic, quote behavior changes, or customer-facing copy changes.
- **Target Files:** `docs/runtime/named_qr_source_attribution_schema_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add runtime schema contract, catalog entry, manifest addendum, register completion record, and future placeholders.
- **Validation Required:** `git status`; `git diff -- docs/runtime/named_qr_source_attribution_schema_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --name-only`; `git ls-files --deleted`; targeted schema-contract grep; targeted catalog/manifest/register grep; `npm run build`.
- **Exit Criteria:** Named source ID rules, source taxonomy, registry field model, URL parameter contract, fallback rules, QR asset registration rules, HubSpot relationship, reporting rules, and future gates are documented; no implementation or forbidden file changes occur.
- **Dependencies:** LEADFLOW001.
- **Operator Decision Required:** Approve registry location, source owner process, partner QR creation process, URL parameter acceptance posture, and HubSpot mapping before implementation.
- **Completion Notes:** Created `docs/runtime/named_qr_source_attribution_schema_rev01.md` as a docs-only internal runtime schema contract. No QR codes, print assets, URL parsing, QRLanding changes, lead-signal changes, HubSpot properties, HubSpot writes, quote changes, payout automation, public files, or runtime behavior changes were made.

### ATTRIBUTION002
- **Task ID:** ATTRIBUTION002
- **Task Name:** Named QR Source Registry
- **Status:** BACKLOG
- **Category:** QR
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the approved named QR source registry only after ATTRIBUTION001 and operator approval define registry location, ownership, required fields, and source approval process.
- **Allowed Scope:** Future documentation/configuration scope to be defined when activated.
- **Forbidden Scope:** QR code creation, print asset creation, URL parsing implementation, QRLanding changes, lead-signal changes, HubSpot property creation, HubSpot writes, payout logic, quote behavior changes, customer-facing copy changes, and runtime implementation unless explicitly authorized.
- **Target Files:** Future scoped files only.
- **Runtime Systems Affected:** None until a later approved implementation.
- **Documentation Updates Required:** Update named QR source attribution schema, catalog, manifest, and task register when activated.
- **Validation Required:** Future scoped validation plus no-forbidden-file checks.
- **Exit Criteria:** To be defined when activated.
- **Dependencies:** ATTRIBUTION001.
- **Operator Decision Required:** Approve registry storage location and initial source records.

### ATTRIBUTION003
- **Task ID:** ATTRIBUTION003
- **Task Name:** Source Parameter Validation Implementation
- **Status:** BACKLOG
- **Category:** QR / RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement approved source parameter validation and preservation only after ATTRIBUTION001 schema and ATTRIBUTION002 registry are approved.
- **Allowed Scope:** Future implementation scope to be defined when activated.
- **Forbidden Scope:** Unmanaged source creation, arbitrary URL parameter trust, HubSpot schema creation, direct HubSpot writes, payout automation, quote behavior changes, Scheduling changes, Stripe changes, and customer-facing copy changes unless explicitly authorized.
- **Target Files:** Future scoped files only.
- **Runtime Systems Affected:** Future QRLanding/lead-signal attribution behavior if activated.
- **Documentation Updates Required:** Update runtime contracts, HubSpot mapping docs, QA plan, catalog/manifest, and task register when activated.
- **Validation Required:** Future scoped validation plus QRLanding, lead-signal, requestId, HubSpot partial-failure, and no-regression checks.
- **Exit Criteria:** To be defined when activated.
- **Dependencies:** ATTRIBUTION001, ATTRIBUTION002, HUBSPOT-REFERRAL001, LEADFLOW002 or explicit lead-signal attribution implementation authorization, QA-LEADFLOW001.
- **Operator Decision Required:** Approve implementation scope and rollout plan.

### QUOTE-REFERRAL001
- **Task ID:** QUOTE-REFERRAL001
- **Task Name:** Internal Quote-Visible Referral Awareness Spec
- **Status:** DONE
- **Category:** GOV / CRM / LEAD
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define how referral and named-source attribution may become visible to operators during future quote preparation without customer-facing referral language, automatic discounting, payout automation, quote automation, Stripe changes, or HubSpot runtime changes.
- **Allowed Scope:** Documentation-only internal quote/referral awareness specification; create `docs/specs/quote_referral_awareness_spec_rev01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register only.
- **Forbidden Scope:** No runtime implementation, source code, functions, public files, quote UI changes, quote automation, pricing changes, discounts, payout automation, HubSpot properties, HubSpot sync changes, HubSpot runtime code, Stripe/payment behavior, Scheduling code, lead-signal implementation, QRLanding implementation, tests, customer-facing copy, package/pricing copy, or request estimate behavior changes.
- **Target Files:** `docs/specs/quote_referral_awareness_spec_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add internal quote/referral spec, document catalog entry, markdown manifest addendum, and register completion record.
- **Validation Required:** `git status`; `git diff -- docs/specs/quote_referral_awareness_spec_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --name-only`; `git ls-files --deleted`; targeted quote-awareness spec grep; targeted catalog/manifest/register grep; `npm run build`.
- **Exit Criteria:** Internal-only quote visibility boundaries are documented; referral/source context, requestId/HubSpot correlation, operator review rules, customer-facing restrictions, pricing/discount restrictions, Stripe/HubSpot boundaries, payout SOP relationship, future gates, and validation requirements are defined; no implementation or forbidden file changes occur.
- **Dependencies:** LEADFLOW001, HUBSPOT-REFERRAL001, ATTRIBUTION001, REFERRAL-SOP001.
- **Operator Decision Required:** Approve internal visibility boundaries.
- **Completion Notes:** Created `docs/specs/quote_referral_awareness_spec_rev01.md` as a docs-only internal quote/referral specification. No quote UI, quote automation, pricing, discounts, customer-facing copy, HubSpot schema/sync/runtime behavior, Stripe behavior, payout automation, lead-signal implementation, QRLanding implementation, route, form, public file, or test changes were made.

### REFERRAL-SOP001
- **Task ID:** REFERRAL-SOP001
- **Task Name:** Manual Referral Payout Review SOP
- **Status:** DONE
- **Category:** GOV / CRM / OPS
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define manual referral review, eligibility, approval, decline, dispute, and paid-status procedures without payout automation.
- **Allowed Scope:** Documentation-only internal operations SOP; create `docs/ops/referral_payout_review_sop_rev01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register only.
- **Forbidden Scope:** No code, HubSpot changes, Stripe changes, payout automation, quote automation, form changes, API payload changes, QRLanding changes, customer-facing copy, automatic payouts, customer-facing referral program page, or HubSpot workflow automation.
- **Target Files:** `docs/ops/referral_payout_review_sop_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add internal SOP, document catalog entry, markdown manifest addendum, and register completion record.
- **Validation Required:** `git status`; `git diff -- docs/ops/referral_payout_review_sop_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --name-only`; `git ls-files --deleted`; targeted SOP grep; targeted catalog/manifest/register grep; `npm run build`.
- **Exit Criteria:** Manual referral payout review process is documented with required statuses, payout timing, evidence, HubSpot recording expectations, quote/Stripe/customer-facing boundaries, future gates, validation, and no implementation or forbidden file changes.
- **Dependencies:** LEADFLOW001, HUBSPOT-REFERRAL001, ATTRIBUTION001.
- **Operator Decision Required:** Approve referral payout policy and manual workflow.
- **Completion Notes:** Created `docs/ops/referral_payout_review_sop_rev01.md` as a docs-only internal operations SOP for manual referral payout review. No code, HubSpot schema/write behavior, Stripe behavior, payout automation, quote automation, form/API payload behavior, QRLanding behavior, or customer-facing copy was changed.

### REFERRAL-POLICY001
- **Task ID:** REFERRAL-POLICY001
- **Task Name:** Referral Compensation + Payee Documentation Policy
- **Status:** DONE
- **Category:** OPS
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only internal policy defining referral compensation models, default customer referral rate, partner/referrer override rules, documentation thresholds, tax/payee documentation hold rules, purchased hot-lead/vendor lead handling, and installer/contractor separation.
- **Allowed Scope:** Documentation-only internal operations policy; create `docs/ops/referral_compensation_policy_rev01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register only.
- **Forbidden Scope:** No code, runtime changes, HubSpot changes, Stripe changes, scheduling changes, form changes, API payload changes, quote behavior changes, payout automation, customer-facing copy, legal/tax filing implementation, document deletion, document renaming, or document consolidation.
- **Target Files:** `docs/ops/referral_compensation_policy_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add internal operations policy, document catalog entry, markdown manifest addendum, task-register completion record, and future contractor onboarding placeholder if absent.
- **Validation Required:** `git status`; `git diff -- docs/ops/referral_compensation_policy_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --name-only`; `git ls-files --deleted`; targeted policy grep; targeted catalog/manifest/register grep; `npm run build`.
- **Exit Criteria:** Referral compensation relationship types, model types, default 10% customer referral policy, custom partner rules, purchased hot-lead/vendor lead rules, payment timing, documentation threshold holds, annual payment tracking, cash acknowledgement, tax/1099 governance boundary, installer/contractor separation, future gates, and open questions are documented; no implementation or forbidden file changes occur.
- **Dependencies:** LEADFLOW001, HUBSPOT-REFERRAL001, ATTRIBUTION001, REFERRAL-SOP001, QUOTE-REFERRAL001.
- **Operator Decision Required:** Approve policy before referral payout implementation, LEADFLOW002, or contractor/referrer payment tracking.
- **Completion Notes:** Created `docs/ops/referral_compensation_policy_rev01.md` as a docs-only internal operations policy. No code, runtime behavior, HubSpot schema/write behavior, Stripe behavior, scheduling behavior, form/API payload behavior, quote behavior, payout automation, customer-facing copy, or tax/legal filing implementation was changed.

### CONTRACTOR-ONBOARDING001
- **Task ID:** CONTRACTOR-ONBOARDING001
- **Task Name:** Contractor / Installer Payee Onboarding Policy
- **Status:** BACKLOG
- **Category:** OPS
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define contractor/installer onboarding, payee documentation, relationship separation, and payment-readiness rules before assigning work or issuing installer/contractor payments.
- **Allowed Scope:** Future documentation-only policy scope to be defined when activated.
- **Forbidden Scope:** Runtime changes, HubSpot changes, Stripe changes, scheduling changes, form changes, API payload changes, quote behavior changes, payout automation, customer-facing copy, legal/tax filing implementation, and contractor payment implementation unless explicitly authorized by a future bounded task.
- **Target Files:** Future scoped documentation only.
- **Runtime Systems Affected:** None until a future approved implementation.
- **Documentation Updates Required:** Update ops policy, catalog, manifest, and task register when activated.
- **Validation Required:** Future scoped documentation validation plus no-forbidden-file checks.
- **Exit Criteria:** To be defined when activated.
- **Dependencies:** REFERRAL-POLICY001.
- **Operator Decision Required:** Approve contractor/installer onboarding policy and documentation requirements before implementation.

### QA-LEADFLOW001
- **Task ID:** QA-LEADFLOW001
- **Task Name:** Leadflow Referral End-to-End QA Plan
- **Status:** BACKLOG
- **Category:** QA / LEAD / CRM / QR
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define end-to-end validation for callback lead path, estimate path, referral capture, named source attribution, requestId correlation, HubSpot sync, quote visibility, and no-regression protected systems.
- **Allowed Scope:** Documentation-only QA plan.
- **Forbidden Scope:** Runtime implementation, UI changes, route changes, HubSpot schema changes, Stripe changes, Scheduling changes, and payout automation.
- **Target Files:** Future scoped documentation only.
- **Runtime Systems Affected:** None until implementation QA is activated.
- **Documentation Updates Required:** QA checklist/runtime contract updates if approved.
- **Validation Required:** Future implementation-specific commands and protected-system regression checks.
- **Exit Criteria:** QA plan is documented and ready to run against future implementation.
- **Dependencies:** LEADFLOW001, HUBSPOT-REFERRAL001, ATTRIBUTION001, QUOTE-REFERRAL001, REFERRAL-SOP001.
- **Operator Decision Required:** Approve QA coverage before implementation release.

### DOCSYNC001
- **Task ID:** DOCSYNC001
- **Task Name:** Decide DOCUMENT_CATALOG vs MARKDOWN_MANIFEST Relationship
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define whether `docs/DOCUMENT_CATALOG.md` is a curated authority catalog and `docs/MARKDOWN_MANIFEST.md` is the exhaustive inventory, including update rules for each.
- **Allowed Scope:** Documentation-only governance clarification and bounded catalog/manifest updates.
- **Forbidden Scope:** Runtime code, UI, routes, HubSpot, Stripe, scheduling, document deletion, document renaming, and document consolidation.
- **Target Files:** `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Relationship rule and update responsibility notes.
- **Validation Required:** Documentation diff and targeted grep for catalog/manifest relationship language.
- **Exit Criteria:** Future tasks can determine which index must be updated for new, renamed, superseded, or promoted docs.
- **Dependencies:** DOC001 and DOCSTATUS001.
- **Operator Decision Required:** Approve preferred catalog/manifest ownership model.

### DOCSTATUS002
- **Task ID:** DOCSTATUS002
- **Task Name:** Stale / Superseded Document Promotion Review
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Review documents classified as superseded candidates or unknown/needs-review and decide whether to promote, relabel, or leave unchanged.
- **Allowed Scope:** Documentation-only status review, metadata notes, and register/catalog updates.
- **Forbidden Scope:** Document deletion, document renaming, document consolidation, historical audit rewrites, runtime code, UI, routes, HubSpot, Stripe, scheduling, referral implementation, and request estimate behavior changes.
- **Target Files:** Documentation files only, to be scoped when activated.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Updated status notes for reviewed documents.
- **Validation Required:** Documentation diff, no-delete/no-rename verification, and targeted status-label grep.
- **Exit Criteria:** Superseded candidates and unknown/needs-review documents have explicit operator-reviewed status without destructive cleanup.
- **Dependencies:** DOCSTATUS001 and DOCSYNC001 if catalog/manifest ownership affects status labels.
- **Operator Decision Required:** Approve status actions before activation.


### HOTFIX004
- **Task ID:** HOTFIX004
- **Task Name:** Simplify Package Tile Content
- **Status:** DONE
- **Category:** COPY
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Completion Notes:** Simplified the three home-security package tiles to homeowner-facing protection copy, removed tier-heavy/technical/accordion clutter from tile bodies, preserved routes/forms/integrations, and bumped site version for deploy visibility.

### HOTFIX006
- **Task ID:** HOTFIX006
- **Task Name:** Replace Package Card Images + Remove Image Overlay Labels
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Replace package tile images with newly uploaded package visuals and remove image-area overlay clutter while preserving HOTFIX004 tile body copy and Request Walkthrough CTA behavior.
- **Allowed Scope:** `src/content/homeSecurityPackageData.ts`, `src/components/PackageCard.tsx`, `src/pages/Packages.tsx`, `src/components/homeSecurity/LegacyHomeSecurityContent.tsx`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Forbidden Scope:** No route changes; no form changes; no lead-signal/HubSpot/autoresponder changes; no Stripe/payment changes; no QRLanding changes; no package body-copy rewrites.
- **Validation Required:** `ls -la public/images/home-security`; `npm run build`; `rg -n "essential-awareness|balanced-home-coverage|expanded-property-coverage|Essential indoor visibility|Balanced indoor|Maximum coverage|View Details|Talk to Us|Request Walkthrough" src public docs`; `git diff -- src public docs/system/master-task-register.md`.
- **Exit Criteria:** Three new package card images are wired from `/public/images/home-security`; image overlay labels/buttons are removed from card media area; HOTFIX004 body copy and Request Walkthrough CTA remain intact; protected systems untouched.
- **Completion Notes:** Wired package cards to uploaded PNG assets (`essential-awareness-card.png`, `balanced_home_coverage_card_v01.png`, `expanded_property_coverage_card_v1.png`) because `.webp` filenames requested in prompt were not present; removed media overlay layer + image caption rendering from package cards; preserved tile body copy and Request Walkthrough CTA; bumped visible site version to `v1.0.88`; build passed.


### T-CATALOG001
- **Task ID:** T-CATALOG001
- **Task Name:** Create Solution Catalog Reconciliation Governance Doc REV01
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Promote the completed solution-catalog reconciliation pass into a durable docs-only repository governance document that consolidates the Home Safety, Home Security, Home Lighting, Home Automation, and Aging-in-Place research outputs into one governed working catalog.
- **Allowed Scope:** Docs-only creation of `docs/solution-system/SOLUTION_CATALOG_RECONCILIATION_REV01.md`; update `docs/DOCUMENT_CATALOG.md` with a catalog entry; update this task register with the bounded task record and completion status.
- **Forbidden Scope:** No application/source files, routes, assets, generated images, CSS/components, runtime behavior, Cloudflare, HubSpot, Stripe, Resend, Google Workspace, scheduling, secrets, homepage implementation, QR Landing implementation, category implementation, package implementation, solution implementation, pricing, BOM commitments, hardware purchasing, or public copy deployment.
- **Target Files:** `docs/solution-system/SOLUTION_CATALOG_RECONCILIATION_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Create the solution catalog reconciliation document; register it in `docs/DOCUMENT_CATALOG.md`; record T-CATALOG001 in this register.
- **Validation Required:** `git status`; targeted `git diff`; `git diff --check`; confirm only documentation files changed.
- **Exit Criteria:** Reconciliation governance document exists; document states no implementation is authorized; master solution list, primary/secondary category ownership, status definitions, package compatibility guidance, hardware summary, BOM/pricing gaps, field-test summary, SOP/disclosure queue, and claims guardrail summary are captured; document catalog is updated; no protected systems or application files are changed.
- **Dependencies:** Completed Home Safety / Environmental Safety research result, completed Home Security / Entry / Garage / Access research result, completed Home Lighting / Home Automation / Aging-in-Place research result, existing solution-system governance docs, current project guardrails.
- **Operator Decision Required:** Review and promote via the operatorÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢s normal GitHub PR process if accepted.
- **Completion Notes:** Prepared docs-only reconciliation governance content. Follow-up tasks recommended: T-HARDWARE001, T-CLAIMS001, T-QUOTE001, T-FIELDTEST001, T-SOP001, T-SOLUTIONCAT001, T-BOM001, and T-PACKAGE001.


### T-OFFERING001
- **Task ID:** T-OFFERING001
- **Task Name:** Create Offer Architecture, Visibility Tiers, and The Vault Governance REV01
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create docs-only WNYHS offer architecture governance defining public standard catalog, The Vault/custom-project visibility, internal operator catalog, research/excluded tiering, and Core first-time vs existing-customer offer rules.
- **Allowed Scope:** Docs-only offer architecture governance creation; create `docs/solution-system/OFFERING001_WNYHS_OFFER_ARCHITECTURE_VISIBILITY_TIERS_AND_VAULT_GOVERNANCE_REV01.md`; update `docs/DOCUMENT_CATALOG.md`; update this task register.
- **Forbidden Scope:** No application/source files, routes, pages, components, styles, runtime behavior, HubSpot, Stripe/payment, scheduling, Cloudflare, environment variables, public pricing, hardware purchasing, customer installation authorization, public copy deployment, The Vault page deployment, ad launch, package/solution page edits, or site version bump.
- **Target Files:** `docs/solution-system/OFFERING001_WNYHS_OFFER_ARCHITECTURE_VISIBILITY_TIERS_AND_VAULT_GOVERNANCE_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Create offer architecture governance, register it in the document catalog, and record T-OFFERING001 in the task register.
- **Validation Required:** `git status --short`; `git diff --name-only`; `git diff --check`; `git diff --cached --check` before commit.
- **Exit Criteria:** Offer architecture document exists; public/custom/internal/research tiers are defined; The Vault custom-project concept is governed; Core first-time vs existing-customer rules are documented; internal operator catalog requirement is documented; implementation hold language is present; document catalog is updated; task register is updated; only intended docs files changed; validation passes.
- **Dependencies:** T-CATALOG001, T-HARDWARE001, T-CLAIMS001, `docs/solution-system/SOLUTION_CATALOG_RECONCILIATION_REV01.md`, `docs/solution-system/HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01.md`, `docs/solution-system/CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created docs-only offer architecture governance. No app/source/runtime/payment/HubSpot/scheduling files were changed. No public copy, The Vault deployment, pricing, hardware purchasing, customer installation, or implementation was authorized.

### T-PACKAGEBOM001
- **Task ID:** T-PACKAGEBOM001
- **Task Name:** Create Package Map + BOM/Pricing Input Schema REV01
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create docs-only WNYHS package/BOM/pricing-input governance defining package structure, Core inclusion logic, existing-customer add-on treatment, BOM input fields, pricing-input fields, install/labor planning inputs, and Vault/custom quote inputs without setting final prices.
- **Allowed Scope:** Docs-only package/BOM/pricing-input governance creation; create `docs/solution-system/PACKAGEBOM001_WNYHS_PACKAGE_MAP_AND_BOM_PRICING_INPUT_SCHEMA_REV01.md`; update `docs/DOCUMENT_CATALOG.md`; update this task register.
- **Forbidden Scope:** No app/source files, routes, pages, components, styles, CSS, tokens, runtime behavior, public copy deployment, site version bump, final public prices, supplier costs, invented hardware prices, Stripe/payment changes, HubSpot changes, scheduling changes, Cloudflare/environment changes, hardware purchasing authorization, or customer installation authorization.
- **Target Files:** `docs/solution-system/PACKAGEBOM001_WNYHS_PACKAGE_MAP_AND_BOM_PRICING_INPUT_SCHEMA_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Create package/BOM/pricing-input governance, register it in the document catalog, and record T-PACKAGEBOM001 in the task register.
- **Validation Required:** `git status --short`; `git diff --name-only`; `git diff --check`; stage only target files; `git diff --cached --check`; confirm only intended docs files changed.
- **Exit Criteria:** Package concepts are mapped from governed solutions; Core first-time and existing-customer add-on rules are documented; BOM and pricing-input schemas exist; install/labor planning assumptions are recorded as internal inputs only; Vault/custom quote inputs preserve The Vault tiers; explicit non-pricing and implementation-hold language is present; document catalog is updated; task register is updated; only intended docs files changed; validation passes.
- **Dependencies:** T-CATALOG001, T-HARDWARE001, T-CLAIMS001, T-OFFERING001.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created docs-only package/BOM/pricing-input governance. No app/source/runtime/payment/HubSpot/scheduling/public copy/pricing files were changed. No final prices, supplier costs, invented hardware prices, public pricing, site version bump, hardware purchasing, customer installation, or implementation was authorized.


### CATALOG001-RUNTIME
- **Task ID:** CATALOG001
- **Task Name:** Promote Existing Offer Data Into Canonical Runtime Catalog
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the first canonical WNYHS runtime catalog source so website pages, quote workspace, future inventory readiness, future ordering prep, future installer pick lists, and future dashboard prep can consume the same reusable catalog data.
- **Allowed Scope:** Create `docs/catalog/` governance docs; create `src/data/catalog/` typed runtime catalog; promote existing Home Security package data from `src/content/homeSecurityPackageData.ts` and `src/content/packages.ts`; use existing offer categories, solutions, and package starting points; minimally update `/operator/property-model` selectors to consume the runtime catalog; update version, document catalog, markdown manifest, and this register.
- **Forbidden Scope:** No HubSpot writes, HubSpot schema changes, Stripe/payment implementation, inventory automation, ordering automation, scheduling automation, quote PDF generation, email sending, auth system, durable production storage, new dependencies, package-lock changes, unrelated public site redesign, protected runtime behavior changes, or public page refactor beyond what is necessary to preserve behavior.
- **Target Files:** `docs/catalog/README.md`, `docs/catalog/CATALOG001_Canonical_Catalog_Source_Standard_REV01.md`, `docs/catalog/IMPLEMENTATION001_Canonical_Runtime_Catalog_REV01.md`, `src/data/catalog/index.ts`, `src/data/catalog/catalogTypes.ts`, `src/data/catalog/catalogData.ts`, `src/pages/PropertyModelAdmin.tsx`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Internal operator route selectors and local browser-storage draft workspace only.
- **Documentation Updates Required:** Catalog governance docs created; document catalog and markdown manifest updated; this register records completion.
- **Validation Required:** `npm run build`; targeted lint/typecheck for touched runtime files where available; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; confirm no protected runtime systems changed.
- **Exit Criteria:** Runtime catalog exists with typed categories, packages, solutions, and hardware/parts; quote workspace selector options consume `src/data/catalog/`; existing package page behavior remains preserved; catalog pricing gaps are documented as future work; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** Current governance authority chain, `docs/system/step-current.md`, quote-system standards, solution-system standards, and existing package source data.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created the initial file-backed canonical runtime catalog and documentation. Promoted Home Security tier packages, offer categories, public solution options, package starting points, and tier hardware quantities into typed catalog structures. Updated `/operator/property-model` category, solution, package, and hardware selector sources to consume `src/data/catalog/` while preserving local draft-only behavior. No HubSpot, Stripe, protected API, inventory automation, ordering automation, scheduling automation, email sending, quote PDF generation, auth, durable storage, dependency, or package-lock changes were made.

### QUOTESYSTEM-012
- **Task ID:** QUOTESYSTEM-012
- **Task Name:** Quote Workspace Usability Pass
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Improve the internal Property Model workspace usability, scanability, and live-entry flow without adding major business features.
- **Allowed Scope:** Workspace section ordering, easy action access, compact guidance, empty states, hardware/BOM reconciliation scanability, documentation updates, and site-version bump.
- **Forbidden Scope:** No cloud storage, durable backend persistence, HubSpot writes, Stripe/payment changes, inventory automation, ordering automation, scheduling automation, email sending, PDF generation, auth system, new dependencies, package-lock changes, protected runtime behavior changes, or unrelated public-site redesign.
- **Target Files:** `src/pages/PropertyModelAdmin.tsx`, `src/index.css`, `src/lib/siteVersion.ts`, `docs/quotesystem/IMPLEMENTATION012_Quote_Workspace_Usability_Pass_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Internal operator Property Model route presentation only; local browser storage behavior preserved.
- **Documentation Updates Required:** Add IMPLEMENTATION012 and register it in the quote-system document map, document catalog, markdown manifest, and task register.
- **Validation Required:** `npm run build`; targeted lint/typecheck for touched runtime files; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; token/CSS hardcoded color scan for touched styling; route smoke checks for Property Model, quote preview, and installer packet routes.
- **Exit Criteria:** Live-entry workspace order is improved; primary actions are easier to reach; empty states guide operators; reconciliation counts are easier to scan; existing Property Model, quote preview, installer packet, and import/export behavior remains intact; protected systems remain untouched.
- **Dependencies:** QUOTESYSTEM-011, PROPERTY001, QUOTE001, CATALOG001, DESIGN001, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Reordered the internal Property Model workspace, added an easy-access action bar, compacted local backup/import/export guidance, added operational empty states, and improved hardware/BOM reconciliation scanability. No HubSpot writes, Stripe/payment changes, backend persistence, cloud storage, email, PDF, auth, inventory, ordering, scheduling, dependencies, package-lock, route removals, or public-site redesign changes were made. Version bumped to `v1.0.138`.


### QUOTESYSTEM-013
- **Task ID:** QUOTESYSTEM-013
- **Task Name:** Pricing / Totals Placeholder
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add manual pricing and totals fields to the local WNYHS Quote Workspace so live quotes can show subtotal, deposit amount, and balance due without a pricing engine or payment implementation.
- **Allowed Scope:** Local Property Model pricing fields, manual subtotal/discount/tax-fee entry, calculated total/deposit/balance placeholders, quote preview Section 3 totals, installer packet payment-gate guidance, import/export normalization, documentation updates, and site-version bump.
- **Forbidden Scope:** No pricing engine, automatic catalog pricing, inventory costing/margin logic, Stripe/payment implementation, payment verification, checkout links, HubSpot writes, scheduling automation, inventory automation, ordering automation, email sending, PDF generation, auth, durable production storage, new dependencies, package-lock changes, protected runtime behavior changes, or unrelated public redesign.
- **Target Files:** `src/lib/propertyModel.ts`, `src/pages/PropertyModelAdmin.tsx`, `src/pages/PropertyModelQuotePreview.tsx`, `src/pages/PropertyModelInstallerPacket.tsx`, `src/lib/siteVersion.ts`, `docs/quotesystem/IMPLEMENTATION013_Pricing_Totals_Placeholder_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Internal operator Property Model route, quote preview, installer packet preview, and local browser storage only.
- **Documentation Updates Required:** Add IMPLEMENTATION013 and register it in the quote-system document map, document catalog, markdown manifest, and task register.
- **Validation Required:** `npm run build`; targeted lint/typecheck for touched runtime files; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; token/CSS hardcoded color scan for touched styling; route smoke checks for Property Model, quote preview, and installer packet routes.
- **Exit Criteria:** Version is bumped to `v1.0.139`; manual pricing fields exist and normalize for older records; totals/deposit/balance calculate locally; quote preview shows customer-appropriate totals and terms; installer packet shows field-relevant payment gates only; protected systems remain untouched.
- **Dependencies:** QUOTESYSTEM-011, QUOTESYSTEM-012, PROPERTY001, QUOTE001, GATES001, CATALOG001, DESIGN001, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added local manual pricing/totals placeholders to the Property Model workspace and normalized older records with default 50% deposit behavior. Quote Preview Section 3 now includes subtotal, optional discount/tax-fees, total, deposit requirement, deposit amount, balance due on arrival, pricing notes, and payment terms. Installer Packet shows payment gate readiness without a full pricing breakdown. No HubSpot, Stripe/payment, pricing engine, catalog pricing, inventory costing/margin, scheduling, ordering, email, PDF, auth, durable storage, dependency, package-lock, protected runtime, or unrelated public-site changes were made. Version bumped to `v1.0.139`.

### QUOTESYSTEM-015
- **Task ID:** QUOTESYSTEM-015
- **Task Name:** Redraw + Photo Analysis Workflow Handoff
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create governance and local workspace support for professional redraw/photo-analysis handoff notes supporting quote creation.
- **Allowed Scope:** FLOORPLAN004 governance; IMPLEMENTATION015 note; local Property Model handoff fields; `/operator/property-model` handoff section; quote preview Section 1 and installer packet evidence compatibility; document map/catalog/manifest/register updates; visible version bump.
- **Forbidden Scope:** No image processing, AI redraw generation, computer vision, uploads, LiDAR implementation, durable backend persistence, HubSpot writes, Stripe/payment changes, inventory, ordering, scheduling, email, PDF generation, auth, dependencies, package-lock, protected runtime changes, or unrelated redesign.
- **Target Files:** `src/lib/propertyModel.ts`, `src/pages/PropertyModelAdmin.tsx`, `src/pages/PropertyModelQuotePreview.tsx`, `src/pages/PropertyModelInstallerPacket.tsx`, `src/lib/siteVersion.ts`, `docs/quotesystem/FLOORPLAN004_Redraw_Photo_Analysis_Handoff_REV01.md`, `docs/quotesystem/IMPLEMENTATION015_Redraw_Photo_Analysis_Handoff_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Internal operator Property Model route and local browser storage only.
- **Documentation Updates Required:** Completed.
- **Validation Required:** `npm run build`; targeted typecheck for touched runtime files; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; token/CSS hardcoded color scan for touched styling; route smoke check for `/operator/property-model`, `/operator/property-model/quote-preview`, and `/operator/property-model/installer-packet`.
- **Exit Criteria:** Version is bumped to `v1.0.141`; governance and implementation docs exist; handoff fields normalize locally; workspace section exists; quote preview and installer packet surface handoff summary; protected systems remain untouched.
- **Dependencies:** QUOTESYSTEM-001 through QUOTESYSTEM-014, PROPERTY001, FLOORPLAN000-003, HARDWARE001, SOLUTION_PLACEMENT001, CATALOG001, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added manual redraw/photo-analysis handoff governance and local workspace support. No HubSpot, Stripe/payment, image processing, AI redraw generation, uploads, LiDAR capture, durable backend persistence, email, PDF, auth, inventory, ordering, scheduling, dependency, package-lock, protected runtime, or unrelated public-site changes were made.

### WNYHS-PUBLIC-MARKETING-VISUAL-PARITY-001
- **Task ID:** WNYHS-PUBLIC-MARKETING-VISUAL-PARITY-001
- **Task Name:** Static WNYHS Marketing Page Visual Parity
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Bring selected static WNYHS public marketing/trust pages into visual alignment with the current WNYHS homepage/solutions token system.
- **Allowed Scope:** Visual parity migration for `src/pages/About.tsx`, `src/pages/OurWork.tsx`, `src/pages/Comparison.tsx`, `src/pages/Reliability.tsx`, and `src/pages/HomeSecurityWhatsIncluded.tsx`; token-backed utility CSS in `src/index.css`; claim-risk cleanup only where touched; version and documentation updates.
- **Forbidden Scope:** No quote-system implementation changes, catalog schema changes, package data changes, pricing changes, HubSpot changes, Stripe/payment changes, scheduling changes, lead-signal/requestId changes, Resend/email changes, support/contact form behavior changes, auth changes, durable storage changes, dependencies, package-lock changes, package detail page work, Contact/Support wrapper cleanup, `/operator/property-model`, quote preview, or installer packet pages.
- **Target Files:** `src/pages/About.tsx`, `src/pages/OurWork.tsx`, `src/pages/Comparison.tsx`, `src/pages/Reliability.tsx`, `src/pages/HomeSecurityWhatsIncluded.tsx`, `src/index.css`, `src/lib/siteVersion.ts`, `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_MARKETING_VISUAL_PARITY_001_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Static public marketing/trust page presentation only.
- **Documentation Updates Required:** Create implementation note and register it in document catalog, markdown manifest, and task register.
- **Validation Required:** `npm run build`; targeted lint/typecheck for touched runtime files; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; token/CSS hardcoded color scan for touched styling; route smoke check if practical for target routes.
- **Exit Criteria:** Target pages use WNYHS primitives where practical; obvious claim-risk wording is cleaned where touched; routes and behavior are preserved; site version is bumped; protected systems remain untouched; validation passes or limitations are documented; PR targets `main` without merge.
- **Dependencies:** Prompt-created bounded work order, DESIGN001 REV01, SOLUTION001 REV01, CATALOG001 REV01, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review PR preview and approve visual parity.
- **Completion Notes:** Migrated selected static public marketing pages toward `.wnyhs-shell`, `.wnyhs-section`, `.wnyhs-section-header`, `.wnyhs-card`, `.wnyhs-button`, and related token-backed classes. Added minimal token-backed utility CSS in `src/index.css`. Cleaned Comparison third-party services language and Reliability outage limitation wording. Preserved package source data reads, routes, CTAs, accordions, forms, protected runtime boundaries, HubSpot, Stripe/payment, scheduling, lead-signal, email, auth, storage, dependencies, and package-lock. Version bumped to `v1.0.143`.

### WNYHS-PUBLIC-MARKETING-VISUAL-PARITY-002
- **Task ID:** WNYHS-PUBLIC-MARKETING-VISUAL-PARITY-002
- **Task Name:** Package Detail Visual Parity
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Bring WNYHS package detail pages into visual alignment with the current WNYHS homepage/solutions token system while preserving package routing, data, prices, quote/contact/planner links, and legacy protected flows.
- **Allowed Scope:** Visual parity migration for `src/pages/PackageDetail.tsx`; token-backed package-detail utilities in `src/index.css`; claim-risk cleanup only where touched; version and documentation updates.
- **Forbidden Scope:** No quote-system implementation changes, catalog schema changes, package data/pricing changes, HubSpot changes, Stripe/payment changes, scheduling changes, lead-signal/requestId changes, Resend/email changes, support/contact form behavior changes, auth changes, durable storage changes, dependencies, package-lock changes, unrelated public-site redesign, Contact/Support cleanup, `/operator/property-model`, quote preview, installer packet, or import/export flows.
- **Target Files:** `src/pages/PackageDetail.tsx`, `src/index.css`, `src/lib/siteVersion.ts`, `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_MARKETING_VISUAL_PARITY_002_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Public package detail page presentation only.
- **Documentation Updates Required:** Created implementation note and registered it in document catalog, markdown manifest, and task register.
- **Validation Required:** `npm run build`; targeted lint/typecheck for touched runtime files; `git diff --check`; protected-system changed-file scan; added-line forbidden-claim scan; token/CSS hardcoded color scan for touched styling; route smoke check if practical for target routes.
- **Exit Criteria:** Package detail pages use WNYHS primitives where practical; package routing, package data, prices, selected tier behavior, vertical query behavior, and CTA destinations are preserved; site version is bumped to `v1.0.144`; protected systems remain untouched; validation passes or limitations are documented; PR targets `main` without merge.
- **Dependencies:** Prompt-created bounded work order, DESIGN001 REV01, SOLUTION001 REV01, CATALOG001 REV01, WNYHS-PUBLIC-MARKETING-VISUAL-PARITY-001, current governance authority chain, and `docs/system/step-current.md`.
- **Operator Decision Required:** Review PR preview and approve visual parity.
- **Completion Notes:** Migrated PackageDetail toward `.wnyhs-page`, `.wnyhs-shell`, `.wnyhs-section`, `.wnyhs-section-header`, `.wnyhs-card`, `.wnyhs-button`, `.wnyhs-price-chip`, and `.wnyhs-page-cta` primitives with token-backed package-detail utilities. Preserved package IDs, names, data sources, prices, tier logic, selected-tier behavior, vertical query behavior, CTA destinations, and protected runtime boundaries. No HubSpot, Stripe/payment, scheduling, lead-signal/requestId, support/contact form behavior, email/Resend, auth, durable storage, dependencies, package-lock, catalog schema, package pricing, quote-system, operator, quote preview, installer packet, import/export, or unrelated public-site changes were made. Version bumped to `v1.0.144`.

### QUOTE-SYSTEM-STANDARD-004
- **Task ID:** QUOTE-SYSTEM-STANDARD-004
- **Task Name:** Structured Opening Inventory
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Make doors, windows, glass panels, garage doors, and other openings first-class local Property Model records for quote-system planning.
- **Allowed Scope:** Local Property Model data model, operator workspace UI, customer estimate preview summaries, internal SOW / installer packet opening detail, Funeral Home Test Case opening records, implementation documentation, document map/catalog/manifest/register updates, and visible site version bump.
- **Forbidden Scope:** No HubSpot, Stripe/payment, scheduling, Resend/email, lead-signal/requestId, public website pages, catalog schema, package data/pricing, auth, durable storage, dependencies, package-lock, quote PDF generation, image upload/processing, floorplan geometry editor, computer vision, inventory automation, ordering automation, persistent checklist state, or pricing engine changes.
- **Target Files:** `src/lib/propertyModel.ts`; `src/pages/PropertyModelAdmin.tsx`; `src/pages/PropertyModelQuotePreview.tsx`; `src/pages/PropertyModelInstallerPacket.tsx`; `src/lib/siteVersion.ts`; `docs/quotesystem/IMPLEMENTATION019_Structured_Opening_Inventory_REV01.md`; `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`; `docs/system/master-task-register.md`; `docs/DOCUMENT_CATALOG.md`; `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** Local operator Property Model workspace, local customer estimate preview, and local installer packet only.
- **Documentation Updates Required:** Completed.
- **Validation Required:** `npm run build`; targeted ESLint; diff checks; protected-system changed-file scan; forbidden-claim scan; CSS token scan if applicable.
- **Exit Criteria:** Structured openings are normalized, editable, summarized for customer estimate use, detailed for internal SOW use, represented in the Funeral Home Test Case, and protected systems remain untouched.
- **Dependencies:** Prompt-created bounded work order and quote-system governance standards.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Completed for version `v1.0.156`.


### T-SITEARCH001-001
- **Task ID:** T-SITEARCH001-001
- **Task Name:** Complete Public Site Architecture Audit
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create one authoritative docs-only audit of current public-facing route, ownership, navigation, embedded-link, search, demo/dashboard, SEO, package, WNYHS Core, and route-conflict state before future architecture decisions.
- **Allowed Scope:** Inspect route definitions, page components, navigation/footer components, public link sources, sitemap/robots/SEO policy, and public demo files; create `docs/site-architecture/SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md`; update this register; update `docs/DOCUMENT_CATALOG.md`; update `docs/MARKDOWN_MANIFEST.md`.
- **Forbidden Scope:** No route renames, route moves, redirects, search implementation, navigation changes, footer changes, page-content changes, category-page changes, solution-page changes, image generation, image pipeline changes, HubSpot changes, Stripe/payment changes, scheduling changes, planner changes, quote-flow changes, backend/API runtime changes, Resend/email changes, Cloudflare config changes, environment/secret changes, dependency changes, or package-lock changes.
- **Target Files:** `docs/site-architecture/SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation-only audit.
- **Documentation Updates Required:** SITEARCH001 audit report, this task-register record, document catalog entry, and markdown manifest addendum.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`.
- **Exit Criteria:** Audit report identifies route inventory, owners, page/component owners, navigation, embedded links, search status, demo/dashboard route, SEO/canonical observations, package/Core visibility, route conflicts, recommended decisions, and next tasks; only allowed documentation files are changed; protected systems remain untouched; build passes or unrelated failure is reported.
- **Dependencies:** Prompt-created bounded work order; repository governance documents; current route tree; current sitemap/robots/SEO policy; current WNYHS navigation and page standards.
- **Operator Decision Required:** Review audit findings and decide which future architecture task to activate next.
- **Completion Notes:** Created the SITEARCH001 docs-only public information architecture audit. Found 117 React route declarations in `src/App.tsx` plus one static public dashboard demo HTML file. Identified `/home-security` as currently owned by `src/pages/HomeSecurity.tsx` and `src/components/homeSecurity/HomeSecurityLanding.tsx`, with an unresolved homepage/category ownership conflict. Located dashboard/demo surfaces at `/home-security/dashboard`, `/newsite/demos/ha-gold-dashboard`, `/demo`, `/5-day-demo`, `/newsite/demos`, and `public/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html`. Confirmed current search is placeholder/anchor access at `/home-security#home-search`, not a functional search route. No source, route, nav, footer, search, category, solution, image, protected runtime, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, or secret files were changed.

### T-SITEARCH001-002
- **Task ID:** T-SITEARCH001-002
- **Task Name:** Public Information Architecture Decision Standard
- **Status:** DONE
- **Category:** GOV
- **Tags:** Site Architecture / Decision Standard / Documentation
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only public information architecture decision standard based on SITEARCH001 audit findings.
- **Allowed Scope:** Create `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`; update this register; update `docs/DOCUMENT_CATALOG.md` if architecture docs are cataloged there; update `docs/MARKDOWN_MANIFEST.md` if repo convention requires it.
- **Forbidden Scope:** No route renames, route moves, redirects, search implementation, navigation changes, footer changes, breadcrumb changes, page-content changes, category-page changes, solution-page changes, image-generation pipeline changes, image asset generation, HubSpot changes, Stripe/payment changes, scheduling changes, planner changes, quote-flow changes, backend/API runtime changes, Resend/email changes, Cloudflare config changes, environment/secret changes, dependency changes, or package-lock changes.
- **Target Files:** `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation-only decision standard.
- **Documentation Updates Required:** SITEARCH002 decision standard, this task-register record, document catalog entry, and markdown manifest addendum.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`.
- **Exit Criteria:** SITEARCH002 documents decisions for homepage ownership, public customer journey, internal catalog hierarchy, category routes, solution routes, package visibility, WNYHS Core visibility, search ownership, demo/dashboard ownership, campaign routes, support/about/our-work/contact, legal/system routes, primary nav, footer, breadcrumbs, internal linking, canonical URLs/redirects, SEO indexing, route conflicts, future implementation tasks, Codex restrictions, and success criteria; only allowed documentation files are changed; protected systems remain untouched; build passes or unrelated failure is reported.
- **Dependencies:** Prompt-created bounded work order; repository governance documents; SITEARCH001 audit; current category-page standards; current solution-page standards; current funnel/navigation standards.
- **Operator Decision Required:** Review the decision standard and decide which future implementation task to activate first.
- **Completion Notes:** Created the SITEARCH002 docs-only public information architecture decision standard. Documented `/` as canonical homepage, `/categories/<category-slug>` as the canonical category pattern, `/solutions/<solution-slug>` as the canonical solution pattern, packages as contextual sales/catalog constructs, WNYHS Core as platform-foundation visibility, Search as a future functional discovery system, demo/dashboard surfaces as Demo/Experience-owned, and route-conflict resolution requirements. Updated document catalog and markdown manifest addenda. No source, route, nav, footer, breadcrumb, search, page-content, category, solution, image, protected runtime, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, or secret files were changed.

### T-SITEARCH001-003
- **Task ID:** T-SITEARCH001-003
- **Task Name:** Public Architecture Implementation Plan
- **Status:** DONE
- **Category:** GOV
- **Tags:** Site Architecture / Implementation Plan / Documentation
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only implementation plan that converts SITEARCH001 audit findings and SITEARCH002 decisions into a safe phased implementation sequence for future public site architecture cleanup.
- **Allowed Scope:** Create `docs/site-architecture/SITEARCH003_WNYHS_PUBLIC_ARCHITECTURE_IMPLEMENTATION_PLAN_REV01.md`; update this register; update `docs/DOCUMENT_CATALOG.md` if architecture docs are cataloged there; update `docs/MARKDOWN_MANIFEST.md` if repo convention requires it.
- **Forbidden Scope:** No route renames, route moves, redirects, search implementation, navigation changes, footer changes, breadcrumb changes, page-content changes, category-page changes, solution-page changes, image-generation pipeline changes, image asset generation, HubSpot changes, Stripe/payment changes, scheduling changes, planner changes, quote-flow changes, backend/API runtime changes, Resend/email changes, Cloudflare config changes, environment/secret changes, dependency changes, or package-lock changes.
- **Target Files:** `docs/site-architecture/SITEARCH003_WNYHS_PUBLIC_ARCHITECTURE_IMPLEMENTATION_PLAN_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation-only implementation plan.
- **Documentation Updates Required:** SITEARCH003 implementation plan, this task-register record, document catalog entry, and markdown manifest addendum.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`.
- **Exit Criteria:** SITEARCH003 defines purpose, authority, relationship to SITEARCH001 and SITEARCH002, implementation principles, protected-system boundaries, phases 0 through 9, validation strategy, rollback strategy, required future task list, task sequencing rules, Codex restrictions, and success criteria; only allowed documentation files are changed; protected systems remain untouched; build passes or unrelated failure is reported.
- **Dependencies:** Prompt-created bounded work order; repository governance documents; SITEARCH001 audit; SITEARCH002 decision standard; current category-page standards; current solution-page standards; current funnel/navigation standards.
- **Operator Decision Required:** Review the implementation plan and activate the first bounded implementation task when ready.
- **Completion Notes:** Created the SITEARCH003 docs-only public architecture implementation plan. Documented Phase 0 prechecks, Phase 1 canonical category route creation, Phase 2 legacy flat-route redirect/alias handling, Phase 3 navigation correction, Phase 4 footer and embedded link correction, Phase 5 search implementation, Phase 6 demo/dashboard cleanup, Phase 7 sitemap/robots/canonical cleanup, Phase 8 SEO preparation, and Phase 9 image workflow reintegration. Added the required future task list and recommended `T-SITEARCH002-001 - Canonical Category Route Creation` as the first implementation task after prechecks. Updated document catalog and markdown manifest addenda. No source, route, nav, footer, breadcrumb, search, page-content, category, solution, image, protected runtime, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, or secret files were changed.

### T-SITEARCH002-001
- **Task ID:** T-SITEARCH002-001
- **Task Name:** Canonical Category Route Creation
- **Status:** DONE
- **Category:** FUNNEL
- **Tags:** Site Architecture / Category Routes / Additive Routing
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add canonical `/categories/<category-slug>` category routes from SITEARCH002/SITEARCH003 without removing, redirecting, or changing existing flat category routes.
- **Allowed Scope:** Add route declarations for `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, and `/categories/aging-in-place`; reuse existing category page components; bump visible site version; update this task record with implementation evidence.
- **Forbidden Scope:** No deletion or redirect of existing flat routes; no `/home-security` homepage behavior change; no homepage, category, solution, navigation, footer, breadcrumb, search, sitemap, robots, canonical, image, HubSpot, Stripe/payment, scheduling, planner, quote-flow, API/backend, Resend/email, Cloudflare config, dependency, package-lock, environment, or secret changes.
- **Target Files:** `src/App.tsx`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public React route availability for canonical category URLs only.
- **Documentation Updates Required:** This task-register evidence entry.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`; route declaration verification.
- **Exit Criteria:** All five canonical category routes render the existing category page components; existing flat routes remain declared and unchanged; `/home-security` behavior remains declared and unchanged; no redirects or forbidden-scope changes are introduced; visible site version is bumped; protected systems remain untouched.
- **Dependencies:** Prompt-created bounded work order; SITEARCH001 audit; SITEARCH002 decision standard; SITEARCH003 implementation plan; current category route components.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Added canonical category route declarations for `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, and `/categories/aging-in-place`, each reusing the existing category page component already used by the corresponding flat route. Preserved existing flat route declarations for `/home-security`, `/home-automation`, `/home-safety`, `/home-lighting`, and `/aging-in-place`; preserved `/home-security` homepage/restored behavior by leaving the existing route and `HomeRoute` redirect unchanged; added no redirects. Bumped visible site version to `v1.0.168`. No navigation, footer, breadcrumb, search, sitemap, robots, canonical tag, homepage content, category content, solution content, image, HubSpot, Stripe/payment, scheduling, planner, quote-flow, API/backend, Resend/email, Cloudflare config, dependency, package-lock, environment, or secret files were changed.

### T-SITEARCH002-002
- **Task ID:** T-SITEARCH002-002
- **Task Name:** Legacy Flat Route Redirect/Alias Plan
- **Status:** DONE
- **Category:** GOV
- **Tags:** Site Architecture / Legacy Routes / Documentation
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only governance plan defining future treatment of legacy flat category routes after canonical `/categories/<category-slug>` routes were created.
- **Allowed Scope:** Create `docs/site-architecture/SITEARCH004_WNYHS_LEGACY_CATEGORY_ROUTE_TRANSITION_PLAN_REV01.md`; update this register; update `docs/DOCUMENT_CATALOG.md`; update `docs/MARKDOWN_MANIFEST.md` if required by repository convention.
- **Forbidden Scope:** No redirects; no route removals; no route renames; no navigation changes; no footer changes; no breadcrumb changes; no search changes; no sitemap changes; no robots changes; no canonical tag changes; no category page changes; no solution page changes; no page-content changes; no image generation or image pipeline work; no HubSpot, Stripe/payment, scheduling, planner, quote-flow, backend/API, Resend/email, Cloudflare configuration, environment variable, dependency, or package-lock changes.
- **Target Files:** `docs/site-architecture/SITEARCH004_WNYHS_LEGACY_CATEGORY_ROUTE_TRANSITION_PLAN_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation-only governance plan.
- **Documentation Updates Required:** SITEARCH004 transition plan, this task-register record, document catalog entry, and markdown manifest addendum.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`.
- **Exit Criteria:** SITEARCH004 defines ownership, redirect strategy, alias strategy, migration sequence, validation requirements, rollback requirements, current/canonical/legacy route inventory, SEO/backlink/campaign/homepage-history considerations, Phase A/B/C recommendation, future implementation task definition, Codex restrictions, and success criteria; only allowed documentation files are changed; protected systems remain untouched; build passes or unrelated failure is reported.
- **Dependencies:** Prompt-created bounded work order; completed `T-SITEARCH002-001`; SITEARCH001 audit; SITEARCH002 decision standard; SITEARCH003 implementation plan; current repository governance documents.
- **Operator Decision Required:** Review the transition plan and decide whether to activate a future implementation task after canonical link and SEO readiness work.
- **Completion Notes:** Created the SITEARCH004 docs-only legacy category route transition plan. Recommended Phase A: canonical `/categories/*` routes active while legacy flat routes remain aliases; Phase B: canonical routes promoted through separately authorized navigation/link/SEO readiness tasks while aliases remain; Phase C: legacy flat routes redirect to canonical `/categories/*` targets only after validation and rollback requirements are satisfied. Recommended eventual redirects for `/home-automation`, `/home-safety`, `/home-lighting`, and `/aging-in-place`; recommended special staged handling for `/home-security` because of homepage-history risk, with permanent ownership as `/` for homepage and `/categories/home-security` for the Home Security category. No routes, redirects, navigation, footer, breadcrumbs, search, sitemap, robots, canonical tags, page content, images, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API, Resend/email, Cloudflare config, environment variables, dependencies, or package-lock files were changed.

### T-SITEARCH002-003
- **Task ID:** T-SITEARCH002-003
- **Task Name:** Promote Canonical Category Routes in Navigation and Links
- **Status:** DONE
- **Category:** FUNNEL
- **Tags:** Site Architecture / Category Routes / Link Promotion
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Promote canonical `/categories/<category-slug>` category routes in clear category-intent public links while keeping legacy flat category routes active as aliases.
- **Allowed Scope:** Update header navigation links, footer navigation links, homepage category links, category cross-links, solution page category links, CTA/internal links that clearly point to category pages, shared route constants/config files if present, this task-register record, and visible site version.
- **Forbidden Scope:** No deletion, redirect, rename, or removal of legacy flat routes; no `/home-security` route declaration or homepage restoration behavior change; no page-copy rewrite; no package-page conversion; no search implementation; no sitemap, robots, canonical tag, breadcrumb strategy, image generation, image pipeline, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API, Resend/email, Cloudflare config, dependency, package-lock, environment, or secret changes.
- **Target Files:** `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/content/wnyhsOfferCatalog.ts`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public category-intent internal link targets only.
- **Documentation Updates Required:** This task-register evidence entry.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`; targeted `rg` searches for remaining legacy flat category links and `/packages` references.
- **Exit Criteria:** Clear category-intent links point to canonical `/categories/*` routes; legacy flat routes remain declared and reachable; `/home-security` homepage/restoration behavior is preserved; no redirects, route deletions, sitemap/robots/canonical/search/image/protected-system changes are introduced; visible site version is bumped; validation passes.
- **Dependencies:** Prompt-created bounded work order; completed `T-SITEARCH002-001`; completed `T-SITEARCH002-002`; SITEARCH001 audit; SITEARCH002 decision standard; SITEARCH003 implementation plan; SITEARCH004 transition plan.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Promoted the homepage category explorer links and the package/offer category browse anchors from legacy flat or fit-check destinations to canonical category routes: `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, and `/categories/aging-in-place`. Preserved header Home/Search/brand `/home-security` links as homepage-intent links and preserved header `Solutions` on `/packages?vertical=home-security` because a dedicated navigation restructuring task is still required. Preserved all legacy flat route declarations and added no redirects. Bumped visible site version to `v1.0.170`. No route declarations, footer structure, breadcrumbs, search, sitemap, robots, canonical tags, page copy, images, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API, Resend/email, Cloudflare config, dependencies, package-lock, environment, or secrets were changed.

### T-SITEARCH002-004
- **Task ID:** T-SITEARCH002-004
- **Task Name:** Header Solutions Navigation Decision + Correction
- **Status:** DONE
- **Category:** FUNNEL
- **Tags:** Site Architecture / Header Navigation / Solutions
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Correct the public header `Solutions` navigation destination so it aligns with SITEARCH002 and SITEARCH004 by not making `/packages` the primary Solutions destination.
- **Allowed Scope:** Public header/top navigation components; shared navigation config/constants; mobile nav equivalent when paired with the same source of truth; simple link target and label alignment; this task-register record; visible site version bump.
- **Forbidden Scope:** No `/packages` deletion; no package page content changes; no category page content changes; no solution page content changes; no route renames, removals, declarations, or redirects; no footer links unless unavoidable through shared config; no search, sitemap, robots, canonical, breadcrumb, image-generation, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, `.env`, secrets, dependency, or package-lock changes.
- **Target Files:** `src/content/wnyhsNavigation.ts`, `src/components/nav/WnyHomeSecurityNav.tsx`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public header navigation link target only.
- **Documentation Updates Required:** This task-register evidence entry.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`; targeted `rg` searches for `/packages`, `Solutions`, and canonical category routes.
- **Exit Criteria:** Header `Solutions` no longer points primarily to `/packages`; mobile drawer equivalent is updated through the same shared config; package route remains accessible; no route declarations, redirects, package/category/solution content, search, sitemap, robots, canonical tags, breadcrumbs, image generation, protected systems, dependencies, or package-lock files are changed; visible site version is bumped; validation passes.
- **Dependencies:** Prompt-created bounded work order; completed `T-SITEARCH002-001`; completed `T-SITEARCH002-002`; completed `T-SITEARCH002-003`; SITEARCH001 audit; SITEARCH002 decision standard; SITEARCH003 implementation plan; SITEARCH004 transition plan.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Changed active public header `Solutions` navigation from `/packages?vertical=home-security` to `/categories/home-security` through `src/content/wnyhsNavigation.ts`; mobile drawer uses the same config and was updated automatically. Aligned the older unused header component `src/components/nav/WnyHomeSecurityNav.tsx` to the same destination so no header component continues to expose `/packages` as the primary Solutions path. Preserved `/packages` route accessibility and package-content references. Bumped visible site version to `v1.0.171`. No route declarations, redirects, footer links, package page content, category content, solution content, search, sitemap, robots, canonical tags, breadcrumbs, image generation, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, dependencies, package-lock, environment, or secrets were changed.

### T-SITEARCH002-005
- **Task ID:** T-SITEARCH002-005
- **Task Name:** Footer and Embedded Link Correction
- **Status:** DONE
- **Category:** FUNNEL
- **Tags:** Site Architecture / Footer / Category Routes / Link Promotion
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Update footer and embedded public-site links to promote canonical category routes while preserving legacy flat category routes as aliases.
- **Allowed Scope:** Footer navigation links; footer category links; shared footer config/constants; homepage embedded category links not already handled; category cross-links; solution page category links; public CTA/internal links that clearly point to category pages; this task-register record; visible site version bump.
- **Forbidden Scope:** No deletion, redirect, rename, or removal of legacy flat routes; no `/home-security` route declaration or homepage restoration behavior change; no header navigation change; no page-copy rewrite; no package-page conversion; no search implementation; no sitemap, robots, canonical tag, breadcrumb strategy, image generation, image pipeline, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, dependency, package-lock, environment, or secret changes.
- **Target Files:** `src/components/homeSecurity/WnyhsSiteFooter.tsx`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public footer category-discovery link targets only.
- **Documentation Updates Required:** This task-register evidence entry.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`; targeted `rg` searches for remaining legacy flat category links, canonical category links, and `/packages` references.
- **Exit Criteria:** Footer category-discovery links point to canonical `/categories/*` routes; clear embedded category-intent links remain promoted where previously handled; legacy flat routes remain declared and reachable; `/home-security` homepage/restoration behavior is preserved; no redirects, route deletions, header nav changes, sitemap/robots/canonical/search/image/protected-system changes are introduced; visible site version is bumped; validation passes.
- **Dependencies:** Prompt-created bounded work order; completed `T-SITEARCH002-001`; completed `T-SITEARCH002-002`; completed `T-SITEARCH002-003`; completed `T-SITEARCH002-004`; SITEARCH001 audit; SITEARCH002 decision standard; SITEARCH003 implementation plan; SITEARCH004 transition plan.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Added footer category links for Home Security, Home Automation, Home Safety, Home Lighting, and Aging In Place using existing canonical `categoryPaths` constants so the footer promotes `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, and `/categories/aging-in-place`. Existing homepage category explorer and offer-category anchors were already canonical from `T-SITEARCH002-003`; no remaining clear category-intent embedded links were changed in this pass. Preserved legacy flat route declarations and added no redirects. Header navigation was untouched. Bumped visible site version to `v1.0.172`. No route declarations, breadcrumbs, package page content, category content, solution content, search, sitemap, robots, canonical tags, image generation, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, dependencies, package-lock, environment, or secrets were changed.

### T-SEARCH001-001
- **Task ID:** T-SEARCH001-001
- **Task Name:** Search Architecture and Index Plan
- **Status:** DONE
- **Category:** GOV
- **Tags:** Search / Site Architecture / Documentation
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only search architecture and index plan for WNYHS public-site search, defining what future public search should index, what it must not index, how results should behave, and which future implementation tasks are required.
- **Allowed Scope:** Create `docs/site-architecture/SEARCH001_WNYHS_PUBLIC_SITE_SEARCH_ARCHITECTURE_AND_INDEX_PLAN_REV01.md`; update this register; update `docs/DOCUMENT_CATALOG.md`; update `docs/MARKDOWN_MANIFEST.md` if repo convention requires it.
- **Forbidden Scope:** No search implementation; no `/search` route creation; no header search UI changes; no homepage search UI changes; no navigation changes; no route changes; no category page changes; no solution page changes; no package page changes; no sitemap changes; no robots changes; no canonical tag changes; no HubSpot changes; no Stripe/payment changes; no scheduling changes; no planner changes; no quote-flow changes; no backend/API runtime changes; no Resend/email changes; no Cloudflare config changes; no `.env` or secret changes; no dependency or package-lock changes; no image generation.
- **Target Files:** `docs/site-architecture/SEARCH001_WNYHS_PUBLIC_SITE_SEARCH_ARCHITECTURE_AND_INDEX_PLAN_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation-only search architecture and index plan.
- **Documentation Updates Required:** SEARCH001 search architecture/index plan, this task-register record, document catalog entry, and markdown manifest addendum.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`.
- **Exit Criteria:** SEARCH001 defines purpose, authority, relationship to SITEARCH001/SITEARCH002/SITEARCH003, current search findings, search ownership, searchable and non-searchable content models, result object model, ranking model, UI behavior, route decision, index source options, recommended implementation model, data/source ownership, indexing rules, accessibility requirements, SEO considerations, privacy/protected-system restrictions, future implementation tasks, Codex restrictions, and success criteria; only allowed documentation files are changed; protected systems remain untouched; build passes or unrelated failure is reported.
- **Dependencies:** Prompt-created bounded work order; repository governance documents; SITEARCH001 audit; SITEARCH002 decision standard; SITEARCH003 implementation plan; SITEARCH004 transition plan.
- **Operator Decision Required:** Review draft PR and decide whether to activate future implementation task `T-SEARCH001-002`.
- **Completion Notes:** Created the docs-only SEARCH001 public-site search architecture and index plan. Documented search as public-site navigation/discovery, not internal catalog/BOM/operations search. Recommended future route `/search` and a static client-side public index generated from approved public route/content config as the first implementation model. Defined public indexing rules for categories, solutions, marketing/support pages, packages as contextual-only results, intentionally public demo/dashboard pages, QR/campaign routes, legal/system routes, accessibility, SEO, privacy, and protected systems. Defined future tasks `T-SEARCH001-002 - Public Search Index Source Creation`, `T-SEARCH001-003 - Functional Search UI Implementation`, and `T-SEARCH001-004 - Search Result Validation and Navigation QA`. No search implementation, routes, navigation, UI, category pages, solution pages, package pages, sitemap, robots, canonical tags, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, environment, secrets, dependencies, package-lock, or images were changed.

### T-SEARCH001-002
- **Task ID:** T-SEARCH001-002
- **Task Name:** Public Search Index Source Creation
- **Status:** DONE
- **Category:** SOURCE / SEARCH
- **Tags:** Search / Public Site / Static Index
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the static public search index source/config for WNYHS so a later bounded task can implement the functional public search UI.
- **Allowed Scope:** Search index source/config files under source; search-related TypeScript types/utilities; route/content constants needed for search results; this task register; `src/lib/siteVersion.ts` only if visible site version convention requires it.
- **Forbidden Scope:** No search UI; no `/search` route; no header search UI; no homepage search UI; no navigation changes; no category, solution, or package page UI/content changes; no sitemap, robots, or canonical changes; no HubSpot; no Stripe/payment; no scheduling; no planner; no quote flow; no backend/API runtime; no Resend/email; no Cloudflare config; no `.env` or secrets; no dependency or package-lock changes; no images.
- **Target Files:** `src/content/publicSearchIndex.ts`, `src/content/__tests__/publicSearchIndex.test.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Static public source data only; no UI or route wiring.
- **Documentation Updates Required:** This task-register record only.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run build`; targeted protected/internal search-data scan.
- **Exit Criteria:** Static public search index source exists; result objects include id, title, type, route, summary, keywords, category where appropriate, priority, and ctaLabel; duplicate ids/routes and protected/internal route/data patterns are validated; only approved public categories, route-backed solutions, marketing/support pages, and explicitly approved demo records are included; packages are excluded as primary search objects; protected systems remain untouched; no visible version bump unless required by convention; PR targets `main` without merge.
- **Dependencies:** `T-SEARCH001-001`, SEARCH001 search architecture/index plan, SITEARCH002 public information architecture decision standard, current governance authority chain, and prompt-created bounded work order.
- **Operator Decision Required:** Review draft PR and decide whether to proceed with future `T-SEARCH001-003` search UI implementation.
- **Completion Notes:** Created `src/content/publicSearchIndex.ts` with the `PublicSearchItem` model, static public index records, and lightweight validation for duplicate ids, duplicate routes, empty titles/routes, protected/internal route prefixes, internal catalog terminology, and package-style primary ids. Added focused Vitest coverage in `src/content/__tests__/publicSearchIndex.test.ts`. Indexed five canonical category routes, four current route-backed solution routes discovered from public solution config, `/home-security` as the current WNYHS homepage route, `/about`, `/our-work`, `/contact`, and `/support`. Demo/dashboard records were deferred because SITEARCH002 still requires later visibility and canonical cleanup. Packages were excluded as primary objects. No visible version bump was made because no public UI, route, navigation, or deployed visible surface was exposed. No HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, environment, secret, dependency, package-lock, sitemap, robots, canonical, image, category page, solution page, package page, header, homepage search, or navigation files were changed.

### T-SEARCH001-003
- **Task ID:** T-SEARCH001-003
- **Task Name:** Functional Search UI Implementation
- **Status:** DONE
- **Category:** UI / SEARCH
- **Tags:** Search / Public Site / Static Index
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement a functional public `/search` page using the approved static public search index created by `T-SEARCH001-002`.
- **Allowed Scope:** Add/support `/search`; create public search page/component; use `src/content/publicSearchIndex.ts`; add search filtering/ranking utility code; add lightweight tests; update existing search link behavior clearly intended to open public search; update this task register; bump visible site version by one patch increment.
- **Forbidden Scope:** No search index record changes except type/import fixes if needed; no external search services; no dependencies; no category, solution, package, footer, sitemap, robots, canonical, image-generation, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, `.env`, secrets, package-lock, or protected-system changes.
- **Target Files:** `src/App.tsx`, `src/pages/Search.tsx`, `src/lib/publicSearch.ts`, `src/lib/__tests__/publicSearch.test.ts`, `src/content/wnyhsNavigation.ts`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/styles/wnyhsVisualGovernance.css`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public static frontend search route and existing public search-entry links only; no backend/API or protected runtime behavior.
- **Documentation Updates Required:** This task-register record only.
- **Validation Required:** `git diff --stat`; `git diff --name-only`; `git diff --check`; `git diff --cached --stat`; `git diff --cached --name-only`; `git diff --cached --check`; `npm run test -- --run src/lib/__tests__/publicSearch.test.ts src/content/__tests__/publicSearchIndex.test.ts`; `npm run build`; manual route expectations for `/search`, `/search?q=water`, `/search?q=lighting`, `/search?q=automation`, and `/search?q=zzzz`.
- **Exit Criteria:** `/search` renders a functional page; `/search?q=` filters static public index results; results are clearly labeled by type; empty state routes users to Contact/Estimate and Support; existing public search links no longer dead-end on the placeholder; visible site version is bumped to `v1.0.173`; protected systems remain untouched; PR targets `main` without merge.
- **Dependencies:** `T-SEARCH001-001`, `T-SEARCH001-002`, SEARCH001 search architecture/index plan, SITEARCH002 public information architecture decision standard, current governance authority chain, and prompt-created bounded work order.
- **Operator Decision Required:** Review draft PR and decide whether to merge.
- **Completion Notes:** Implemented `/search` with query-param support, static-index filtering/ranking, grouped result sections, starting suggestions, result count, result cards, type labels, CTA links, and non-dead-end empty state. Added focused search ranking tests. Updated the existing WNYHS Search nav entry and homepage search access/examples to open `/search` or `/search?q=...`. Bumped visible site version to `v1.0.173`. No search index records, external services, dependencies, package-lock, sitemap, robots, canonical tags, images, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, environment, or secrets were changed.
