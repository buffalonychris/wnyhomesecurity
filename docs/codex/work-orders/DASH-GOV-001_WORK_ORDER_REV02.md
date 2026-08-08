Task ID: DASH-GOV-001 Status: OPERATOR AUTHORIZED Category: GOV Primary
Workstream: Dashboard / Interactive Experience System Related
Workstreams: Project Governance; Automation System; Visual System; KAOS
Application

READ MODE: TARGETED Search exact IDs/headings first; load only
applicable authority and owner sections.

# DASH-GOV-001 --- Consolidate and Reconcile WNYHS Dashboard Governance

## Purpose

Consolidate current WNY Home Security Home Assistant dashboard
governance, dashboard-related installer standards, BKLF dashboard
specifications, validation requirements, handoff requirements,
service/support dashboard rules, and sanitized reference-implementation
evidence into one master reconciliation document without changing
implementation behavior.

Identify what is established, duplicated, conflicting, revision-needed,
BKLF-specific, deprecated, unknown, and genuinely missing for the future
KAOS Dashboard Creation/Management module.

## Execution Gates

1.  Immediately after reading this header, verify that
    `Dashboard / Interactive Experience System` exactly matches a
    registered OPS004 Primary Workstream.
2.  If routing is invalid, stop before broader repository reads, task
    registration, or implementation.
3.  Confirm repository convergence under the current Codex execution
    standard.
4.  Use targeted reads by default. Escalate to full-file reads only when
    the execution standard permits it and record the reason.
5.  Repository authority and current owner documents control over this
    work order if conflict is discovered.
6.  Do not infer executable authority from chat history.

## Controlling Context

Use targeted reads of applicable current sections of:

-   `/docs/system/project.md`
-   `/docs/system/guardrails.md`
-   `/docs/system/agent.md`
-   `/docs/system/plan.md`
-   `/docs/system/step-current.md` or current successor
-   `/docs/system/master-task-register.md`
-   current OPS004 workstream registry
-   current Codex execution standard

OPS004 routes work. OPS005 may summarize current state. Neither
independently expands this bounded task.

## Task Registration

Before reconciliation work:

1.  Locate a nearby current-schema Master Task Register record.
2.  Register `DASH-GOV-001` in `/docs/system/master-task-register.md`
    using the current schema.
3.  Preserve this file as the canonical bounded work-order reference.
4.  Do not rewrite unrelated MTR records.

## Primary Sources

Search for current versions/successors when present:

-   `/docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md`
-   `/docs/installer/INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md`
-   `/docs/installer/INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md`
-   `/docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md`
-   `/docs/home-assistant/bklf-ha-dashboard-and-entity-spec.md`
-   `/docs/home-assistant/bklf-ha-entity-register.md`
-   `/docs/home-assistant/bklf-ha-live-build-checklist.md`
-   `/docs/home-assistant/bklf-ha-green-config-checklist.md`
-   `/docs/home-assistant/bklf/BKLF_DASHBOARD_FOLLOWUP_NOTES_REV01.md`
-   `/docs/home-assistant/bklf/inventory/dashboard-inventory.md`
-   `/home-assistant/bklf/dashboards/bklf-main-dashboard.yaml`
-   `/home-assistant/bklf/dashboards/bklf-desktop-dashboard.yaml`

Read only relevant dashboard sections from supporting notification,
building/security-state, lifecycle, bench/bootstrap, visual/design, and
task-register governance. Do not broadly read unrelated governance
unless a relevant source points to it.

## Allowed Scope

-   Register this bounded task in the MTR.
-   Read and classify existing dashboard governance.
-   Create one dashboard-governance master reconciliation document.
-   Create source inventory and rule-lineage tables inside it.
-   Identify duplicates, conflicts, gaps, BKLF reference evidence, and
    proposed revisions.
-   Recommend final authority/ownership structure.
-   Update this task's MTR status/evidence for execution and closeout.
-   Update Document Catalog / Markdown Manifest only if current
    governance requires registration of new durable documents.

## Forbidden Scope

-   No Home Assistant YAML or live-runtime changes.
-   No dashboard implementation changes.
-   No notification or automation implementation.
-   No live HA access or raw backup ingestion.
-   No secrets, tokens, auth files, databases, logs, or
    customer-sensitive backup material.
-   No entity renaming.
-   No deletion or supersession of existing governance.
-   No architecture or business strategy invented by Codex.
-   No KAOS implementation.
-   No website/source/runtime, HubSpot, Stripe/payment, scheduling,
    Cloudflare, dependency, package-lock, environment, or secret
    changes.
-   No unrelated documentation cleanup.
-   No merge, auto-merge, ready-for-review transition, or deployment.

## Required Deliverable

Create:

`/docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV01.md`

If repository ownership conventions indicate a better existing canonical
dashboard-governance owner path, stop and report the proposed path
before writing. Do not create parallel authority.

## Classification Vocabulary

Every consolidated rule/subsection must use exactly one:

-   `ESTABLISHED`
-   `REVISE`
-   `ADD`
-   `DUPLICATE`
-   `CONFLICT`
-   `BKLF REFERENCE`
-   `DEPRECATE`
-   `UNKNOWN`

## Required Master Sections

1.  Purpose and Authority
2.  Source Document Inventory
3.  Dashboard Classes
4.  User and Role Model
5.  Information Architecture
6.  Landing / Property Status Page
7.  Status Semantics and Visual Hierarchy
8.  Customer Actions and Control Boundaries
9.  Camera and Doorbell UX
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

## Rule-Level Lineage

For each substantive rule capture where practical:

-   Classification
-   Rule/requirement
-   Source file
-   Source section/task ID/YAML block
-   Authority level
-   Current vs historical status
-   Universal vs BKLF-specific applicability
-   Recommended disposition

## Conflict Handling

Same-level current authority conflict: mark `CONFLICT`, cite both, and
state the operator decision required. Do not choose silently.

Lower authority conflicting with higher authority: higher authority
controls; record the lower source as stale, revision-needed, or
deprecated as appropriate.

If authority/ownership remains ambiguous after permitted targeted reads,
stop and report the ambiguity.

## BKLF Treatment

BKLF is reference implementation evidence, not universal governance by
default. Use `BKLF REFERENCE` for Bailey-proven lessons not yet promoted
into reusable WNYHS standards.

Do not automatically promote customer-specific entrance names,
funeral-home operating modes, exact entity IDs, exact room names, or
customer-specific notification recipients.

Use sanitized reference evidence only. Raw backups and secret-bearing
live-state material are prohibited.

## KAOS Gap Analysis

Explicitly classify governance coverage for a future KAOS Dashboard
Creation/Management module, including:

-   HA backup/inventory input and safe extraction boundary
-   entity/device/area extraction
-   semantic normalization
-   WNYHS property model
-   template parameterization
-   customer/mobile and desktop/tablet dashboard generation
-   installer and service/support dashboard generation
-   automation and notification generation governance
-   broken/missing reference validation
-   dependency validation
-   deployment manifest
-   backup/rollback requirement
-   post-deployment acceptance
-   customer handoff/support baseline

Do not design or implement KAOS.

## Validation

Before completion:

1.  Confirm only authorized documentation/task-register/catalog/manifest
    files changed.
2.  Confirm no HA implementation or website/runtime files changed.
3.  Confirm no existing governance file was deleted or superseded.
4.  Confirm every major consolidated section has source lineage.
5.  Confirm conflicts are surfaced rather than guessed through.
6.  Confirm BKLF evidence is separated from universal standards.
7.  Confirm no raw HA backup/secrets/customer-sensitive material was
    introduced.
8.  Run applicable repository documentation validation/lint.
9.  Run `git diff --check`.
10. Report `git diff --stat` and `git status`.
11. Apply the current governed docs-only build rule; do not run an
    application build unless current governance requires it.

## Git / PR Requirements

-   Fresh task branch from synchronized `origin/main`.
-   One task per branch and PR.
-   Stage only authorized files.
-   Task-specific commit.
-   Push branch and open one **draft PR** to `main`.
-   PR must state scope, rationale, validation, build decision,
    protected-system posture, and risks.
-   Do not merge, auto-merge, mark ready, or deploy.
-   Operator performs manual review and merge.

## Exit Criteria

Complete only when:

-   `DASH-GOV-001` exists in the MTR using current schema.
-   The authorized dashboard-governance master exists.
-   Current dashboard governance is consolidated/classified.
-   Duplicate/conflict matrices exist.
-   Missing governance is explicit.
-   Proposed final ownership is documented.
-   KAOS Dashboard Creation/Management governance gaps are classified
    without implementation.
-   No implementation behavior changed.
-   Existing source governance remains preserved.
-   Validation passes.
-   One draft PR is open.
-   Required closeout/RSI is returned.

## Required Codex Closeout

Return:

1.  Task ID and Primary Workstream validation.
2.  Branch and draft PR.
3.  Files inspected.
4.  Files created/changed.
5.  Classification counts for all eight vocabulary values.
6.  Conflicts requiring operator decision.
7.  Genuine missing governance.
8.  Recommended final ownership structure.
9.  KAOS Dashboard Creation/Management governance gaps.
10. Validation results and docs-only build decision.
11. Protected-system posture.
12. `git diff --stat` and final `git status`.
13. Confirmation no Home Assistant implementation changed.
14. Confirmation no merge/deployment occurred.
15. Required RSI under the current execution standard.
