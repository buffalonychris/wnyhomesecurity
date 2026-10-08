# WNYHS Master Task Register

## DASHBOARD-SYSTEM-CANONICALIZATION-001

- Status: BLOCKED ON BPROC-INTERDEP-001 PREREQUISITE
- Primary Workstream: Dashboard / Interactive Experience System
- Category: GOVERNANCE / DOCUMENTATION RECONCILIATION
- Operator Authorization: Approved in chat 2026-10-08
- Work Order: `docs/codex/work-orders/DASHBOARD-SYSTEM-CANONICALIZATION-001_WORK_ORDER_REV01.md`
- Objective: Reconcile and compact the WNYHS dashboard corpus into the final canonical dashboard-building document set, promote the operator-approved dashboard lifecycle and decision set, define required variable schemas, and retire only verified-unused predecessor dashboard documents using the mandatory `RETIRED_` filename prefix.
- Runtime Authority: NONE. Docs-only. No live Home Assistant, Cloudflare, customer runtime, HubSpot, Stripe, scheduling, notification runtime, or deployment changes.
- Required Outcome: Canonical dashboard document set, updated decision register, explicit lineage/dependency handling, and no unresolved architecture decisions from the approved eight-decision set plus the quote-stage customer preview/property-workspace model.

## BPROC-INTERDEP-001

- Status: ACTIVE — PREREQUISITE TO DASHBOARD-SYSTEM-CANONICALIZATION-001
- Primary Workstream: Business Process / KAOS / Shared Data Architecture
- Category: GOVERNANCE / INTERDEPENDENCY RECONCILIATION
- Operator Authorization: Approved in chat 2026-10-08
- Work Order: `docs/codex/work-orders/BPROC-INTERDEP-001_WORK_ORDER_REV01.md`
- Objective: Establish the initial living WNYHS Business Process Interdependency Register, seeded deeply enough to make the Dashboard System dependency-complete for the current phase, while remaining extensible for later company-wide reconciliation.
- Skill Companion: `business-interdependency-assessor` packaged separately for ChatGPT use.
- Database Architecture Relationship: Register requirements are an explicit input to the pending GitHub/database architecture work. The register owns what relationships/data exchanges/lifecycle gates are required; database architecture owns how those relationships are represented structurally.
- Runtime Authority: NONE. Docs-only. No live CRM, Home Assistant, Cloudflare, payment, scheduling, customer-data, or database mutation.
- Required Outcome: Initial register schema, seeded dashboard-material dependency entries, unresolved/future-source states, and a reusable assessment method for future business-process engagements.
