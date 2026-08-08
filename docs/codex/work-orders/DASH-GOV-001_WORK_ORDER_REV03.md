Task ID: DASH-GOV-001
Work Order Revision: REV03
Supersedes for execution: DASH-GOV-001_WORK_ORDER_REV02.md
Status: OPERATOR AUTHORIZED
Category: GOV
Primary Workstream: Dashboard / Interactive Experience System
Related Workstreams: Project Governance; Automation System; Visual System; KAOS Application

READ MODE: TARGETED
Search exact IDs/headings first; load only applicable authority and owner sections.

# DASH-GOV-001 — Consolidate and Reconcile WNYHS Dashboard Governance

## 1. Objective

Consolidate current WNY Home Security Home Assistant dashboard governance, dashboard-related installer standards, BKLF dashboard specifications, validation requirements, handoff requirements, service/support dashboard rules, and sanitized reference-implementation evidence into one master reconciliation document without changing implementation behavior.

Identify what is established, duplicated, conflicting, revision-needed, BKLF-specific, deprecated, unknown, and genuinely missing for the future KAOS Dashboard Creation/Management module.

## 2. Execution Gates

1. Immediately after reading this header, verify that `Dashboard / Interactive Experience System` exactly matches a registered OPS004 Primary Workstream.
2. Validate the complete operator-approved Owner Routing Matrix in Section 8 against the current repository owners before broader reconciliation reads or edits.
3. If Primary Workstream routing is invalid, any matrix row has `CONFLICT: YES`, any matrix row has `CONFIDENCE: LOW`, or repository evidence materially contradicts the approved matrix, stop and report the exact conflict before implementation.
4. Confirm repository convergence under the current Codex execution standard.
5. Use targeted reads by default. Escalate to full-file reads only when the execution standard permits it and record the reason.
6. Repository authority and current owner documents control over this work order if conflict is discovered.
7. Do not infer executable authority from chat history.

## 3. Controlling Context

Use targeted reads of applicable current sections of:

- `/docs/system/project.md`
- `/docs/system/guardrails.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/step-current.md` or current successor
- `/docs/system/master-task-register.md`
- current OPS004 workstream registry
- `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` or current successor

OPS004 routes work. OPS005 may summarize current state. Neither independently expands this bounded task.

## 4. Task Registration

Before reconciliation work:

1. Locate a nearby current-schema Master Task Register record.
2. Register `DASH-GOV-001` in `/docs/system/master-task-register.md` using the current schema.
3. Preserve REV03 as the canonical bounded work-order reference. REV01 and REV02 remain lineage only and are not executable.
4. Do not rewrite unrelated MTR records.

## 5. Primary Sources

Search for current versions/successors when present:

- `/docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md`
- `/docs/installer/INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md`
- `/docs/installer/INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md`
- `/docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md`
- `/docs/home-assistant/bklf-ha-dashboard-and-entity-spec.md`
- `/docs/home-assistant/bklf-ha-entity-register.md`
- `/docs/home-assistant/bklf-ha-live-build-checklist.md`
- `/docs/home-assistant/bklf-ha-green-config-checklist.md`
- `/docs/home-assistant/bklf/BKLF_DASHBOARD_FOLLOWUP_NOTES_REV01.md`
- `/docs/home-assistant/bklf/inventory/dashboard-inventory.md`
- `/home-assistant/bklf/dashboards/bklf-main-dashboard.yaml`
- `/home-assistant/bklf/dashboards/bklf-desktop-dashboard.yaml`

Read only relevant dashboard sections from supporting notification, building/security-state, lifecycle, bench/bootstrap, visual/design, and task-register governance. Do not broadly read unrelated governance unless a relevant source points to it.

## 6. Allowed Scope

- Register this bounded task in the MTR.
- Read and classify existing dashboard governance.
- Create one dashboard-governance master reconciliation document.
- Create source inventory and rule-lineage tables inside it.
- Identify duplicates, conflicts, gaps, BKLF reference evidence, and proposed revisions.
- Recommend final authority/ownership structure without changing existing owner documents in this task.
- Update this task's MTR status/evidence for execution and closeout.
- Update Document Catalog / Markdown Manifest only if current governance requires registration of the new durable document.

## 7. Forbidden Scope

- No Home Assistant YAML or live-runtime changes.
- No dashboard implementation changes.
- No notification or automation implementation.
- No live HA access or raw backup ingestion.
- No secrets, tokens, auth files, databases, logs, or customer-sensitive backup material.
- No entity renaming.
- No deletion, modification, or supersession of existing dashboard/installer/automation/visual governance owner documents.
- No architecture or business strategy invented by Codex.
- No KAOS implementation.
- No website/source/runtime, HubSpot, Stripe/payment, scheduling, Cloudflare, dependency, package-lock, environment, or secret changes.
- No unrelated documentation cleanup.
- No merge, auto-merge, ready-for-review transition, or deployment.

## 8. OWNER ROUTING MATRIX — OPERATOR APPROVED

This is the detailed Owner Routing Matrix required by the current Codex execution standard. The approved concept for this task is **dashboard-governance reconciliation and gap analysis only**. Existing canonical owners remain owners; this task creates a reconciliation/master analysis document and does not silently transfer authority.

| Approved concept | Current canonical owner | Exact target file | Exact section or target behavior | Action | Reason selected owner is correct | Why concept does not belong in another plausible owner | Authority conflict | Confidence |
|---|---|---|---|---|---|---|---|---|
| Core WNYHS Home Assistant dashboard architecture: dashboard classes, audience separation, view structure, navigation, grouping, status hierarchy, mobile/tablet posture, theme readiness, access/visibility, and dashboard relationships to entities/areas/automations/handoff | Dashboard / Interactive Experience System; existing installer dashboard architecture standard | `/docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md` | Existing dashboard architecture behaviors governed by INSTALL006 | `REFERENCE ONLY` | INSTALL006 explicitly states that dashboard architecture defines how WNYHS HA dashboards are organized for customer daily use, installer setup, and service support and enumerates these behaviors | Project Governance controls precedence, not dashboard behavior; Visual System controls global presentation constraints, not dashboard information architecture; KAOS is a future consumer, not the owner | NO | HIGH |
| Bench testing and commissioning requirements that constrain dashboard readiness and acceptance | Applicable installer/commissioning owner | `/docs/installer/INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md` | Dashboard-related bench, commissioning, readiness, and acceptance checks | `REFERENCE ONLY` | INSTALL008 is the existing named commissioning/checklist source and therefore owns commissioning evidence that affects dashboards | INSTALL006 owns dashboard architecture but should not absorb general commissioning procedure; KAOS may later automate checks but does not own them | NO | HIGH |
| Customer dashboard handoff, training, and delivered-customer baseline | Applicable installer/handoff owner | `/docs/installer/INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md` | Dashboard-related customer handoff and training requirements | `REFERENCE ONLY` | INSTALL009 is the existing named customer handoff owner and is the proper source for handoff obligations | Dashboard architecture may reference handoff needs but should not become the general customer-handoff owner | NO | HIGH |
| Service/support dashboard behavior and remote-support posture | Dashboard / Interactive Experience System with service/support owner constraints | `/docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md` | Service dashboard and remote support requirements | `REFERENCE ONLY` | INSTALL010 is the existing named service-dashboard/remote-support standard | INSTALL006 governs overall dashboard architecture; INSTALL010 remains the narrower service/support owner; KAOS is not the service-policy owner | NO | HIGH |
| BKLF Bailey dashboard specifications, entity mapping, field-tested layouts, controls, and lessons | BKLF customer-specific implementation evidence under Dashboard / Interactive Experience System | `/docs/home-assistant/bklf-ha-dashboard-and-entity-spec.md`; `/docs/home-assistant/bklf-ha-entity-register.md`; `/docs/home-assistant/bklf-ha-live-build-checklist.md`; `/docs/home-assistant/bklf-ha-green-config-checklist.md`; `/docs/home-assistant/bklf/BKLF_DASHBOARD_FOLLOWUP_NOTES_REV01.md`; `/docs/home-assistant/bklf/inventory/dashboard-inventory.md`; `/home-assistant/bklf/dashboards/bklf-main-dashboard.yaml`; `/home-assistant/bklf/dashboards/bklf-desktop-dashboard.yaml` | Sanitized BKLF dashboard evidence and customer-specific implementation lessons | `REFERENCE ONLY` | These are the named BKLF implementation/specification sources and therefore are the correct evidence set for what has actually been built/tested | BKLF-specific entrance names, entity IDs, rooms, modes, recipients, and customer details do not belong in universal governance unless separately promoted | NO | HIGH |
| Dashboard visual semantics, reusable visual rules, semantic tokens, accessibility, and presentation constraints | Visual System | Current registered Visual System owner documents located through OPS004/owner search | Only visual-system rules that constrain dashboard presentation | `REFERENCE ONLY` | Global visual semantics belong to the registered Visual System and must constrain dashboard reconciliation | INSTALL006 may apply visual rules to dashboards but must not redefine the global token/visual system; KAOS visual styling does not become HA dashboard visual authority | NO | HIGH |
| Dashboard interactions with automations, modes, state, overrides, and control boundaries | Automation System | Current registered Automation System owner documents located through OPS004/owner search | Existing automation rules that constrain dashboard controls/state presentation | `REFERENCE ONLY` | Automation behavior belongs to the Automation System; dashboard governance may describe interaction boundaries only | Dashboard architecture owns presentation/control surfaces, not automation implementation or orchestration | NO | HIGH |
| Notification actions and dashboard deep-link behavior | Current notification owner located through targeted owner search | Current registered notification owner document(s) | Existing notification rules affecting dashboard deep links, actions, severity, acknowledgement, or destinations | `REFERENCE ONLY` | Notification behavior must remain with its current canonical owner while dashboard governance records the interaction | INSTALL006 should not become the general notification owner; KAOS may consume notification metadata later but does not own notification policy | NO | HIGH |
| Consolidated dashboard-governance reconciliation, source inventory, lineage, duplicate/conflict analysis, ownership recommendations, and KAOS gap classification produced by DASH-GOV-001 | Dashboard / Interactive Experience System, bounded by Project Governance reconciliation rules | `/docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV01.md` | Entire new reconciliation/master analysis document defined by this work order | `CREATE` | No existing source listed in this work order is a cross-source reconciliation artifact covering universal dashboard governance, BKLF evidence, conflicts, gaps, lineage, and future KAOS consumption; this bounded task specifically authorizes that analysis | It does not replace INSTALL006 or other functional owners; Project Governance controls reconciliation mechanics but is not the functional dashboard owner; KAOS is only a downstream consumer | NO | HIGH |
| Future KAOS Dashboard Creation/Management module consumption of approved HA dashboard governance | KAOS Application as downstream implementation surface; Dashboard / Interactive Experience System remains governance source | `/docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV01.md` for gap classification only; no KAOS source target authorized | Section 16 generation/parameterization requirements, Section 25 missing governance, Section 26 proposed ownership, Section 27 deferred decisions, and KAOS Gap Analysis | `REFERENCE ONLY` | This task is authorized to classify what KAOS would need from dashboard governance, not to design or implement KAOS | Moving HA dashboard authority into KAOS would create parallel ownership and violate the purpose of reconciliation | NO | HIGH |
| MTR registration and bounded task evidence for DASH-GOV-001 | Project Governance / Master Task Register | `/docs/system/master-task-register.md` | DASH-GOV-001 task record only | `MODIFY` | The MTR is the dispatch board and current execution standard permits registration/status/evidence updates for the bounded task | Functional dashboard requirements do not belong in the MTR; only task control/status/evidence belongs there | NO | HIGH |
| Durable document registration if required by current repository governance | Project Governance catalog/manifest owners | Current Document Catalog and/or Markdown Manifest exact registered paths discovered by targeted search | Registration entry for `WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV01.md` only, if required | `MODIFY` | Catalog/manifest owners control durable-document registration | Dashboard functional owners should not duplicate repository inventory/catalog functions | NO | HIGH |

### Matrix enforcement

- All rows are operator approved as part of REV03 authorization.
- A current repository successor may replace an exact file listed above only when the existing authority chain explicitly identifies that successor; record the substitution in closeout.
- Rows that require locating the current registered Visual System, Automation System, notification, or catalog/manifest owner authorize **targeted owner discovery only**. They do not authorize modification of those owner documents.
- If targeted discovery produces multiple plausible current owners with no clear canonical owner, stop and report the ambiguity. Do not silently choose.
- No existing functional owner document may be modified by this task except the MTR and catalog/manifest registration when required.
- The new master is a reconciliation/analysis owner for the consolidated view; it does not supersede functional source owners.

## 9. Required Deliverable

Create:

`/docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV01.md`

If repository evidence shows an existing canonical reconciliation owner that already absorbs this exact purpose, stop and report the duplicate-owner conflict before creating the file.

## 10. Classification Vocabulary

Every consolidated rule/subsection must use exactly one:

- `ESTABLISHED`
- `REVISE`
- `ADD`
- `DUPLICATE`
- `CONFLICT`
- `BKLF REFERENCE`
- `DEPRECATE`
- `UNKNOWN`

## 11. Required Master Sections

1. Purpose and Authority
2. Source Document Inventory
3. Dashboard Classes
4. User and Role Model
5. Information Architecture
6. Landing / Property Status Page
7. Status Semantics and Visual Hierarchy
8. Customer Actions and Control Boundaries
9. Camera and Doorbell UX
10. Mobile vs Desktop / Tablet Behavior
11. Installer / Commissioning Dashboard
12. Service / Remote Support Dashboard
13. Notifications and Dashboard Deep Links
14. Automation / Building-State Dashboard Interactions
15. Entity / Area / Device Mapping Requirements
16. Dashboard Generation / Parameterization Requirements
17. Validation and Acceptance Requirements
18. Customer Handoff and Training Requirements
19. Accessibility / Plain-Language Requirements
20. Dependency and Custom-Card Governance
21. BKLF Reference Lessons
22. Duplicate Rules
23. Conflicts Requiring Operator Decision
24. Rules Requiring Revision
25. Missing Governance / Additions
26. Proposed Final Ownership Structure
27. Deferred Decisions

## 12. Rule-Level Lineage

For each substantive rule capture where practical:

- Classification
- Rule/requirement
- Source file
- Source section/task ID/YAML block
- Authority level
- Current vs historical status
- Universal vs BKLF-specific applicability
- Recommended disposition

## 13. Conflict Handling

Same-level current authority conflict: mark `CONFLICT`, cite both, and state the operator decision required. Do not choose silently.

Lower authority conflicting with higher authority: higher authority controls; record the lower source as stale, revision-needed, or deprecated as appropriate.

If authority/ownership remains ambiguous after permitted targeted reads, stop and report the ambiguity.

## 14. BKLF Treatment

BKLF is reference implementation evidence, not universal governance by default. Use `BKLF REFERENCE` for Bailey-proven lessons not yet promoted into reusable WNYHS standards.

Do not automatically promote customer-specific entrance names, funeral-home operating modes, exact entity IDs, exact room names, or customer-specific notification recipients.

Use sanitized reference evidence only. Raw backups and secret-bearing live-state material are prohibited.

## 15. KAOS Gap Analysis

Explicitly classify governance coverage for a future KAOS Dashboard Creation/Management module, including:

- HA backup/inventory input and safe extraction boundary
- entity/device/area extraction
- semantic normalization
- WNYHS property model
- template parameterization
- customer/mobile and desktop/tablet dashboard generation
- installer and service/support dashboard generation
- automation and notification generation governance
- broken/missing reference validation
- dependency validation
- deployment manifest
- backup/rollback requirement
- post-deployment acceptance
- customer handoff/support baseline

Do not design or implement KAOS.

## 16. Validation

Before completion:

1. Confirm only authorized documentation/task-register/catalog/manifest files changed.
2. Confirm no HA implementation or website/runtime files changed.
3. Confirm no existing functional governance owner file was modified, deleted, or superseded except MTR/catalog/manifest actions explicitly authorized by the matrix.
4. Confirm every major consolidated section has source lineage.
5. Confirm conflicts are surfaced rather than guessed through.
6. Confirm BKLF evidence is separated from universal standards.
7. Confirm no raw HA backup/secrets/customer-sensitive material was introduced.
8. Confirm REV03 Owner Routing Matrix was followed and report any successor substitutions.
9. Run applicable repository documentation validation/lint.
10. Run `git diff --check`.
11. Report `git diff --stat` and `git status`.
12. Apply the current governed docs-only build rule; do not run an application build unless current governance requires it.

## 17. Git / PR Requirements

- Fresh task branch from synchronized `origin/main`.
- One task per branch and PR.
- Stage only authorized files.
- Task-specific commit.
- Push branch and open one **draft PR** to `main`.
- PR must state scope, rationale, validation, build decision, protected-system posture, and risks.
- Do not merge, auto-merge, mark ready, or deploy.
- Operator performs manual review and merge.

## 18. Exit Criteria

Complete only when:

- `DASH-GOV-001` exists in the MTR using current schema.
- REV03 Owner Routing Matrix passes the pre-edit gate.
- The authorized dashboard-governance master exists.
- Current dashboard governance is consolidated/classified.
- Duplicate/conflict matrices exist.
- Missing governance is explicit.
- Proposed final ownership is documented.
- KAOS Dashboard Creation/Management governance gaps are classified without implementation.
- No implementation behavior changed.
- Existing source governance remains preserved.
- Validation passes.
- One draft PR is open.
- Required closeout/RSI is returned.

## 19. Required Codex Closeout

Return:

1. Task ID, REV03, Primary Workstream validation, and Owner Routing Matrix validation.
2. Branch and draft PR.
3. Files inspected.
4. Files created/changed.
5. Classification counts for all eight vocabulary values.
6. Conflicts requiring operator decision.
7. Genuine missing governance.
8. Recommended final ownership structure.
9. KAOS Dashboard Creation/Management governance gaps.
10. Validation results and docs-only build decision.
11. Protected-system posture.
12. `git diff --stat` and final `git status`.
13. Confirmation no Home Assistant implementation changed.
14. Confirmation no merge/deployment occurred.
15. Required RSI under the current execution standard.
