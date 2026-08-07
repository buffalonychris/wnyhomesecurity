# OPS004 Workstream Context Routing Standard REV02

Status: Active system governance standard
Customer-facing: No
Implementation authority: No
Predecessor: `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
Supersedes: REV01 for current workstream routing where this REV02 adds or changes routing behavior
Task basis: Operator-approved KAOSWEB001 routing reconciliation

## 1. Purpose of REV02

This revision preserves the existing OPS004 routing model and makes two narrow changes only:

1. register **KAOS Application** as an explicit primary workstream for the KAOS Command Center/application surface; and
2. require the primary-workstream registry check to happen immediately after reading the work-order header so an invalid workstream fails fast instead of consuming unnecessary governance/context reads.

All OPS004 REV01 rules remain applicable unless this REV02 explicitly changes them. This revision does not authorize implementation by itself and does not redefine unrelated workstreams.

## 2. Fast workstream validation order

For every bounded work order, perform this routing check before deeper precheck discovery:

1. Read the work-order header sufficiently to identify Task ID, Primary workstream, Related workstreams, and controlling context.
2. Check the Primary workstream against the current OPS004 registry.
3. If the exact primary-workstream label exists, continue with targeted authority/current-state/owner checks.
4. If the exact primary-workstream label does not exist, STOP immediately for governance reconciliation.
5. Do not continue broad repository discovery merely to prove the same missing-workstream condition again.

Canonical shorthand:

`Work Order Header -> Primary Workstream registered in OPS004? -> YES: continue targeted precheck / NO: STOP immediately`

This is a context-efficiency/convergence rule. It does not weaken authority, protected-system, owner-routing, or scope checks after the primary workstream is validated.

## 3. Workstream Registry Addition — KAOS Application

### KAOS Application

- **Purpose:** Own the internal KAOS Command Center application surface: KAOS-specific shell, internal KAOS route namespace, module presentation/orchestration, module navigation, and integration of governed KAOS capabilities into one operator-facing application experience.
- **Application identity:** KAOS — Kick Ass Operating System / KAOS Command Center.
- **Default surface:** Internal operator-facing KAOS application, currently under the canonical `/kaos` namespace unless a later bounded task changes deployment/hostname routing.
- **Current-state/status docs:** `/docs/system/step-current.md`, `/docs/system/master-task-register.md`, current KAOS bounded work order, and the latest relevant KAOS application/module handoff when present.
- **Governing docs:** `/docs/kaos/WNYHS_REPO001_KAOS_OPERATING_SYSTEM_MASTER_CONTROL_REV03.md`, current KAOS module-governance owner/registry when promoted, `/docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md`, `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`, current OPS004, and task-specific bounded work orders.
- **Related workstreams:** Project Governance; Visual System; Dashboard / Interactive Experience System when shared internal visual/interaction standards apply; Catalog System / Solution System / Category System when those governed capabilities are displayed; CRM / HubSpot System when CRM-backed data is displayed; Infrastructure / Deployment System when hostname/deployment behavior is explicitly in scope; other capability workstreams only when the bounded task touches them.
- **Typical tasks:** establish or extend the KAOS Command Center shell; add governed KAOS modules; integrate read-only governance views; add internal module navigation; render governed business-process/data views without changing their source authority; reconcile a prototype UI into the durable KAOS application.
- **Default owner-routing posture:** KAOS Application owns presentation/orchestration only. Underlying business capability, data, governance, CRM, quote, procurement, catalog, public-content, payment, scheduling, runtime, and infrastructure owners remain authoritative for their domains.
- **Protected capability boundary:** An application-shell task must not silently rewrite the business logic, data model, process governance, or source-of-truth rules of a displayed module. Capabilities marked `REFERENCE / PRESERVE ONLY` in an approved Owner Routing Matrix remain protected.
- **Public-site boundary:** KAOS is not the WNYHS customer-facing website. KAOS work does not authorize public route, navigation, content, SEO, claim, or funnel changes unless separately and explicitly bounded.
- **Protected-system concerns:** Do not change HubSpot/CRM schema or writes; Stripe/payment; scheduling/calendar authority; Lead Signal/requestId; QR attribution; Resend/email; Cloudflare/DNS/environment/auth/security; secrets; public content; or other protected runtime behavior unless a separate bounded task explicitly authorizes the specific change.

## 4. Routing Table Addition

| Task signal | Primary workstream | Related workstreams | First docs to load |
| --- | --- | --- | --- |
| KAOS Command Center, `/kaos` shell, KAOS module UI/orchestration, internal KAOS navigation | KAOS Application | Project Governance plus only the capability/visual/runtime workstreams actually touched | Current KAOS bounded work order; current context; KAOS master control/module governance owner; exact capability owners referenced by the Owner Routing Matrix |

## 5. Relationship to Dashboard / Interactive Experience System

`Dashboard / Interactive Experience System` remains the owner for demo/dashboard/interactive-experience concerns already registered in OPS004.

`KAOS Application` is different: it owns the durable internal KAOS Command Center application surface and its orchestration shell. A KAOS task must not be routed to Dashboard / Interactive Experience System merely because KAOS contains dashboards, cards, graphs, or interactive UI.

If a task specifically changes customer dashboards, Home Assistant dashboard delivery, public demos, or another separately governed dashboard experience, route that task to its existing workstream instead of KAOS Application unless the task outcome is primarily the KAOS application itself.

## 6. Relationship to Project Governance

Project Governance remains higher-level repository/process governance. KAOS Application does not own authority-chain rules, MTR/CTR mechanics, Codex execution governance, or repository governance architecture.

A KAOS Application task may reference those systems and display their governed data, but it may not redefine them unless a separately approved Project Governance task authorizes that change.

## 7. Success criteria for this revision

This revision succeeds when:

- `KAOS Application` can be selected as an exact OPS004 primary workstream;
- KAOS application work no longer needs to be misclassified as Project Governance or Dashboard / Interactive Experience System;
- underlying capability owners remain protected;
- workstream validity is checked immediately after the work-order header;
- missing-workstream failures stop quickly instead of causing extended precheck discovery;
- all unrelated OPS004 routing behavior remains unchanged.
