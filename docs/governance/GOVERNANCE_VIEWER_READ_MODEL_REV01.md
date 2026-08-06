# Governance Viewer Read Model REV01

Status: ACTIVE AND CANONICAL
Document ID: `GOVERNANCE-VIEWER-READ-MODEL-REV01`
Task ID: `T-GOVEXEC001`
Owner: Project Governance / Governance Read Model
Authority posture: Canonical read-only metadata contract; source governance documents remain authoritative
Customer-facing: No
Implementation authority: No
Predecessor/successor: Initial owner; no predecessor and no parallel schema found

## Purpose and Boundary

This document defines the machine-readable metadata contract for a future read-only KAOS Governance Viewer. It does not implement a GUI, route, component, API, database, schema migration, ingestion pipeline, deployment, or protected-system integration.

The viewer must display source authority without becoming authority. A read-model record cannot activate work, resolve a conflict, promote a document, or override its source document.

## Contract

The fenced YAML block below is the canonical machine-readable payload in schema REV02. The canonical document remains this REV01 path; the schema is amended in place because no successor owner was authorized. REV02 renames `canonical_owner` to `is_canonical_owner`, replaces task-specific `active_task_reference` and generic `work_order_reference` fields with stable provenance and last-governance-update fields, and adds explicit authority owner/source metadata. A future viewer derives current task state dynamically from the MTR instead of storing it in this static contract.

Parsers must reject missing required fields and unknown `viewer_readiness` values. Dates use `YYYY-MM-DD`. Paths are repository-root-relative. Arrays may be empty but must be present. A last-governance-update field may be `null` only when source evidence is not established; a record with unresolved required update metadata cannot be `READY`.

```yaml
schema_version: REV02
allowed_viewer_readiness:
  - READY
  - NEEDS_METADATA_NORMALIZATION
  - NEEDS_STATUS_RECONCILIATION
  - NEEDS_OWNER_CLARIFICATION
  - HISTORICAL_ONLY
  - EXCLUDED
records:
  - document_id: WNYHS-PROJECT-GOVERNANCE
    title: WNY Home Security Project Governance
    path: docs/system/project.md
    governance_domain: Project Governance
    authority_level: Primary repository authority
    is_canonical_owner: true
    authority_owner: Project Governance / Operator
    authority_source_path: docs/system/project.md
    status: Active
    controls: [authority chain, task gate, project preservation rules]
    does_not_control: [domain implementation without a bounded task]
    upstream_authority: [operator-approved repository governance]
    downstream_dependencies: [docs/system/guardrails.md, docs/system/agent.md, docs/system/plan.md]
    supporting_documents: [AGENTS.md, docs/governance/AUTHORITY-MAP-REV01.md]
    conflicting_documents: []
    provenance_task_reference: T-GOVEXEC001
    provenance_work_order_reference: docs/codex/work-orders/T-GOVEXEC001_WORK_ORDER_REV01.md
    provenance_pr_reference: https://github.com/buffalonychris/wnyhomesecurity/pull/561
    last_governance_update_task: null
    last_governance_update_work_order: null
    last_governance_update_pr: null
    last_governance_update_date: null
    last_reviewed: 2026-08-06
    effective_revision: current
    viewer_readiness: NEEDS_METADATA_NORMALIZATION
  - document_id: WNYHS-REPOSITORY-GOVERNANCE-ARCHITECTURE-REV01
    title: Repository Governance Architecture REV01
    path: docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md
    governance_domain: Repository Governance
    authority_level: Canonical architecture owner below system governance
    is_canonical_owner: true
    authority_owner: Project Governance / Repository Governance Architecture
    authority_source_path: docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md
    status: ACTIVE AND CANONICAL
    controls: [repository governance layers, MTR CTR relationship, weekly stewardship]
    does_not_control: [task activation, product strategy, runtime behavior]
    upstream_authority: [docs/system/project.md, docs/system/guardrails.md, docs/system/agent.md, docs/system/plan.md]
    downstream_dependencies: [docs/system/master-task-register.md, docs/system/completed-task-register.md]
    supporting_documents: [docs/governance/AUTHORITY-MAP-REV01.md]
    conflicting_documents: []
    provenance_task_reference: T-GOVEXEC001
    provenance_work_order_reference: docs/codex/work-orders/T-GOVEXEC001_WORK_ORDER_REV01.md
    provenance_pr_reference: https://github.com/buffalonychris/wnyhomesecurity/pull/561
    last_governance_update_task: T-GOVFLOW001
    last_governance_update_work_order: docs/codex/work-orders/T-GOVFLOW001_WORK_ORDER_REV01.md
    last_governance_update_pr: PENDING_DRAFT_PR
    last_governance_update_date: 2026-08-06
    last_reviewed: 2026-08-06
    effective_revision: REV01 amended by T-GOVFLOW001
    viewer_readiness: READY
  - document_id: WNYHS-CODEX-EXECUTION-REV01
    title: Codex Execution Standard REV01
    path: docs/codex/CODEX_EXECUTION_STANDARD_REV01.md
    governance_domain: Codex Governance
    authority_level: Sole active detailed execution and work-order owner
    is_canonical_owner: true
    authority_owner: Project Governance / Codex
    authority_source_path: docs/codex/CODEX_EXECUTION_STANDARD_REV01.md
    status: ACTIVE AND CANONICAL
    controls: [Codex execution, repository-owned work orders, targeted reads, closeout, RSI]
    does_not_control: [task priority, merge, deployment, protected-system authorization]
    upstream_authority: [AGENTS.md, docs/system/project.md, docs/system/guardrails.md, docs/system/agent.md, docs/system/plan.md]
    downstream_dependencies: [docs/codex/work-orders]
    supporting_documents: [docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md]
    conflicting_documents: []
    provenance_task_reference: T-GOVEXEC001
    provenance_work_order_reference: docs/codex/work-orders/T-GOVEXEC001_WORK_ORDER_REV01.md
    provenance_pr_reference: https://github.com/buffalonychris/wnyhomesecurity/pull/561
    last_governance_update_task: T-GOVFLOW001
    last_governance_update_work_order: docs/codex/work-orders/T-GOVFLOW001_WORK_ORDER_REV01.md
    last_governance_update_pr: PENDING_DRAFT_PR
    last_governance_update_date: 2026-08-06
    last_reviewed: 2026-08-06
    effective_revision: REV01 amended by T-GOVFLOW001
    viewer_readiness: READY
  - document_id: WNYHS-CURRENT-CONTEXT
    title: Current Operational Context
    path: docs/system/step-current.md
    governance_domain: Current Context
    authority_level: Single current operational context
    is_canonical_owner: true
    authority_owner: Project Governance / Current Operational Context
    authority_source_path: docs/system/step-current.md
    status: ACTIVE
    controls: [current context identifier, open bounded workstreams, protected runtime locks]
    does_not_control: [unbounded implementation, adjacent task activation]
    upstream_authority: [docs/system/project.md, docs/system/guardrails.md, docs/system/agent.md, docs/system/plan.md]
    downstream_dependencies: [docs/system/master-task-register.md]
    supporting_documents: []
    conflicting_documents: []
    provenance_task_reference: T-GOVEXEC001
    provenance_work_order_reference: docs/codex/work-orders/T-GOVEXEC001_WORK_ORDER_REV01.md
    provenance_pr_reference: https://github.com/buffalonychris/wnyhomesecurity/pull/561
    last_governance_update_task: null
    last_governance_update_work_order: null
    last_governance_update_pr: null
    last_governance_update_date: null
    last_reviewed: 2026-08-06
    effective_revision: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
    viewer_readiness: NEEDS_METADATA_NORMALIZATION
  - document_id: WNYHS-MASTER-TASK-REGISTER
    title: Master Task Register
    path: docs/system/master-task-register.md
    governance_domain: Task Authorization
    authority_level: Live dispatch board
    is_canonical_owner: true
    authority_owner: Project Governance / Master Task Register
    authority_source_path: docs/system/master-task-register.md
    status: Active
    controls: [bounded task records, executable ACTIVE state, pre-archive lifecycle evidence]
    does_not_control: [strategy, adjacent tasks, canonical completed history]
    upstream_authority: [docs/system/step-current.md]
    downstream_dependencies: [docs/codex/work-orders, docs/system/completed-task-register.md]
    supporting_documents: [docs/codex/CODEX_TASK_REGISTER_RULES.md]
    conflicting_documents: []
    provenance_task_reference: T-GOVEXEC001
    provenance_work_order_reference: docs/codex/work-orders/T-GOVEXEC001_WORK_ORDER_REV01.md
    provenance_pr_reference: https://github.com/buffalonychris/wnyhomesecurity/pull/561
    last_governance_update_task: T-GOVFLOW001
    last_governance_update_work_order: docs/codex/work-orders/T-GOVFLOW001_WORK_ORDER_REV01.md
    last_governance_update_pr: PENDING_DRAFT_PR
    last_governance_update_date: 2026-08-06
    last_reviewed: 2026-08-06
    effective_revision: GOV002 plus T-GOVEXEC001 and T-GOVFLOW001 amendments
    viewer_readiness: READY
  - document_id: WNYHS-WORK-ORDER-T-GOVEXEC001
    title: T-GOVEXEC001 Work Order REV01
    path: docs/codex/work-orders/T-GOVEXEC001_WORK_ORDER_REV01.md
    governance_domain: Work Orders
    authority_level: Active bounded task contract
    is_canonical_owner: false
    authority_owner: Operator-authorized bounded task / Project Governance
    authority_source_path: docs/codex/work-orders/T-GOVEXEC001_WORK_ORDER_REV01.md
    status: PROMPT-CREATED / OPERATOR AUTHORIZED
    controls: [T-GOVEXEC001 scope, target routing, validation, closeout]
    does_not_control: [other tasks, merge, deployment]
    upstream_authority: [docs/system/master-task-register.md, docs/codex/CODEX_EXECUTION_STANDARD_REV01.md]
    downstream_dependencies: [T-GOVEXEC001 draft PR]
    supporting_documents: []
    conflicting_documents: []
    provenance_task_reference: T-GOVEXEC001
    provenance_work_order_reference: docs/codex/work-orders/T-GOVEXEC001_WORK_ORDER_REV01.md
    provenance_pr_reference: https://github.com/buffalonychris/wnyhomesecurity/pull/561
    last_governance_update_task: null
    last_governance_update_work_order: null
    last_governance_update_pr: null
    last_governance_update_date: null
    last_reviewed: 2026-08-06
    effective_revision: REV01
    viewer_readiness: NEEDS_METADATA_NORMALIZATION
  - document_id: WNYHS-STANDARDS-ROUTING
    title: Standards Owner Routing
    path: docs/governance/AUTHORITY-MAP-REV01.md
    governance_domain: Standards
    authority_level: Supporting authority-routing reference
    is_canonical_owner: false
    authority_owner: Project Governance
    authority_source_path: docs/governance/AUTHORITY-MAP-REV01.md
    status: ACTIVE AUTHORITY-ROUTING REFERENCE
    controls: [role display, authority routing]
    does_not_control: [domain-standard content, task authorization]
    upstream_authority: [docs/system/project.md]
    downstream_dependencies: [domain owner standards]
    supporting_documents: [docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md]
    conflicting_documents: []
    provenance_task_reference: T-GOVEXEC001
    provenance_work_order_reference: docs/codex/work-orders/T-GOVEXEC001_WORK_ORDER_REV01.md
    provenance_pr_reference: https://github.com/buffalonychris/wnyhomesecurity/pull/561
    last_governance_update_task: T-GOVEXEC001
    last_governance_update_work_order: docs/codex/work-orders/T-GOVEXEC001_WORK_ORDER_REV01.md
    last_governance_update_pr: https://github.com/buffalonychris/wnyhomesecurity/pull/561
    last_governance_update_date: 2026-08-05
    last_reviewed: 2026-08-06
    effective_revision: REV01
    viewer_readiness: READY
  - document_id: WNYHS-RUNTIME-CONTRACTS-INDEX
    title: Runtime Contracts
    path: docs/runtime/README.md
    governance_domain: Runtime Contracts
    authority_level: Supporting runtime index; individual contracts control their domains
    is_canonical_owner: false
    authority_owner: Runtime contract owners
    authority_source_path: docs/runtime/README.md
    status: Active Supporting
    controls: [runtime owner discovery]
    does_not_control: [runtime implementation, live status, protected changes]
    upstream_authority: [docs/system/guardrails.md]
    downstream_dependencies: [docs/runtime]
    supporting_documents: [docs/runtime/runtime_ownership_map.md]
    conflicting_documents: []
    provenance_task_reference: T-GOVEXEC001
    provenance_work_order_reference: docs/codex/work-orders/T-GOVEXEC001_WORK_ORDER_REV01.md
    provenance_pr_reference: https://github.com/buffalonychris/wnyhomesecurity/pull/561
    last_governance_update_task: null
    last_governance_update_work_order: null
    last_governance_update_pr: null
    last_governance_update_date: null
    last_reviewed: 2026-08-06
    effective_revision: current
    viewer_readiness: NEEDS_STATUS_RECONCILIATION
  - document_id: WNYHS-DOCUMENT-STATUS-REV01
    title: Documentation Status Reconciliation REV01
    path: docs/system/document_status_reconciliation_rev01.md
    governance_domain: Document Status
    authority_level: Supporting status map
    is_canonical_owner: false
    authority_owner: Project Governance / Documentation Status
    authority_source_path: docs/system/document_status_reconciliation_rev01.md
    status: Internal governance / document reconciliation / status map
    controls: [document classification evidence]
    does_not_control: [source authority, implementation]
    upstream_authority: [docs/system/project.md]
    downstream_dependencies: [docs/DOCUMENT_CATALOG.md, docs/MARKDOWN_MANIFEST.md]
    supporting_documents: []
    conflicting_documents: []
    provenance_task_reference: T-GOVEXEC001
    provenance_work_order_reference: docs/codex/work-orders/T-GOVEXEC001_WORK_ORDER_REV01.md
    provenance_pr_reference: https://github.com/buffalonychris/wnyhomesecurity/pull/561
    last_governance_update_task: null
    last_governance_update_work_order: null
    last_governance_update_pr: null
    last_governance_update_date: null
    last_reviewed: 2026-08-06
    effective_revision: REV01
    viewer_readiness: NEEDS_STATUS_RECONCILIATION
  - document_id: WNYHS-GOVERNANCE-RECONCILIATION-PLAN-REV01
    title: Governance Reconciliation Task Plan REV01
    path: docs/governance/GOVERNANCE_RECONCILIATION_TASK_PLAN_REV01.md
    governance_domain: Governance Reconciliation
    authority_level: Planning and lineage reference
    is_canonical_owner: false
    authority_owner: Project Governance / Governance Reconciliation Planning
    authority_source_path: docs/governance/GOVERNANCE_RECONCILIATION_TASK_PLAN_REV01.md
    status: Reference planning
    controls: [bounded reconciliation lineage]
    does_not_control: [current task activation, current owner status]
    upstream_authority: [docs/system/project.md, docs/system/master-task-register.md]
    downstream_dependencies: []
    supporting_documents: [docs/governance/GOVAUTH001_WNYHS_COMPLETE_GOVERNANCE_AUTHORITY_AUDIT_REV01.md]
    conflicting_documents: []
    provenance_task_reference: T-GOVEXEC001
    provenance_work_order_reference: docs/codex/work-orders/T-GOVEXEC001_WORK_ORDER_REV01.md
    provenance_pr_reference: https://github.com/buffalonychris/wnyhomesecurity/pull/561
    last_governance_update_task: null
    last_governance_update_work_order: null
    last_governance_update_pr: null
    last_governance_update_date: null
    last_reviewed: 2026-08-06
    effective_revision: REV01
    viewer_readiness: HISTORICAL_ONLY
  - document_id: WNYHS-RSI-EXECUTION-EVIDENCE
    title: Recursive Self Improvement and Execution Evidence
    path: docs/codex/CODEX_EXECUTION_STANDARD_REV01.md
    governance_domain: RSI / Execution Evidence
    authority_level: Canonical closeout and RSI owner
    is_canonical_owner: true
    authority_owner: Project Governance / Codex
    authority_source_path: docs/codex/CODEX_EXECUTION_STANDARD_REV01.md
    status: ACTIVE AND CANONICAL
    controls: [RSI closeout headings, recommendation boundary, token context reporting]
    does_not_control: [automatic governance amendment, task activation, scope expansion]
    upstream_authority: [docs/system/agent.md]
    downstream_dependencies: [Codex closeouts, docs/system/completed-task-register.md]
    supporting_documents: [docs/kaos/KAOS001_RECURSIVE_SELF_IMPROVEMENT_REGISTER_REV01.md]
    conflicting_documents: []
    provenance_task_reference: T-GOVEXEC001
    provenance_work_order_reference: docs/codex/work-orders/T-GOVEXEC001_WORK_ORDER_REV01.md
    provenance_pr_reference: https://github.com/buffalonychris/wnyhomesecurity/pull/561
    last_governance_update_task: T-GOVFLOW001
    last_governance_update_work_order: docs/codex/work-orders/T-GOVFLOW001_WORK_ORDER_REV01.md
    last_governance_update_pr: PENDING_DRAFT_PR
    last_governance_update_date: 2026-08-06
    last_reviewed: 2026-08-06
    effective_revision: REV01 amended by T-GOVFLOW001
    viewer_readiness: READY
```

## Read Rules

- Use exact source paths; a missing source makes the record non-ready.
- Display conflicts and readiness labels; never auto-resolve them.
- Treat `is_canonical_owner: true` as metadata that must agree with `authority_owner`, `authority_source_path`, and the repository authority chain.
- Derive current task state from the MTR; do not add a static active-task field back to this contract.
- Do not infer current external-system state from repository metadata.
- Updates require a bounded governance task and source-owner review.
