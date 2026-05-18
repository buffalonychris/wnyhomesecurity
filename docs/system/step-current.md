# Current Operational Context

## Context ID

- CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## Context Name

- WNYHS Final-Hour Business Development Execution Context

## Status

- ACTIVE

## Controlling Step

- CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 — Final-Hour Business Development Execution Unblock — REV01 (CONTROLLING)

## Purpose

- Enable final-hour business development, physical marketing, print asset, local acquisition, QR campaign, and deployment-support work without requiring a new governance fight before each bounded task.
- Keep final-hour execution categories open while preserving strict bounded-task discipline and protected runtime stop conditions.
- Opening categories does not remove hard guardrails.

## Open Workstreams (Explicit)

- BRAND remains open.
- PRINT remains open.
- PRINT-ASSET remains open.
- QR remains open.
- LOCAL-MARKETING remains open.
- BUSINESS-DEVELOPMENT remains open.
- FUNNEL remains open.
- COPY remains open.
- QA remains open.
- OPS remains open.
- CRM remains open.
- PAYMENT remains open.
- SCHED remains open.

## Governance Enforcement

- Runtime protection remains enforced.
- Each implementation task still requires its own bounded `ACTIVE` task-register entry before execution.
- `FINAL-HOUR-BUSDEV001` keeps the listed final-hour categories open for bounded task creation and execution support; it does not authorize bundling or unbounded implementation.
- No task may silently expand into another task.
- Categories are not considered closed until operator explicitly confirms closure.

## Allowed Scope

- Governance and task-register updates that activate/sequence bounded final-hour business-development tasks.
- Creating bounded task entries under active final-hour categories.
- Source-only print asset packages, local marketing documentation/assets, QR campaign materials, business development materials, and deployment-support documentation when explicitly named by an `ACTIVE` task.
- Implementation only for explicitly prompted tasks that are `ACTIVE` in `/docs/system/master-task-register.md`.
- Validation/build checks and scope-audit grep verification.

## Forbidden Scope

- Cross-task bundling or scope expansion beyond the active prompted task.
- Unsupported claims.
- Any bypass of `/api/lead-signal` protected runtime contract.
- HubSpot schema/runtime changes without explicit bounded task authorization.
- Any direct frontend/client write path to HubSpot.
- Stripe/payment changes without explicit bounded task authorization.
- Any Stripe payment verification bypass or redirect-only authority logic.
- Route/UI/runtime changes without explicit bounded task authorization.
- Secret exposure.
- Deleting historical docs.
- Committing generated binary print files unless explicitly authorized.
- Any scheduling authority rewrite beyond bounded task authorization.

## Primary Task Register

- `/docs/system/master-task-register.md`

## Protected Runtime Locks (Must Remain)

- `/api/lead-signal` protected runtime boundary.
- HubSpot contact/deal/note/task sync protections.
- `requestId` lifecycle protections.
- Resend customer/operator email protections.
- Stripe verification protections.
- Scheduling owner-confirmation authority.
- HubSpot pipeline/stage ID locks:
  - Pipeline ID: `2282258169`
  - New Estimate Request stage ID: `3680633583`

## Required Validation

- `npm run build`
- `git diff -- docs/system/step-current.md docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md`
- `rg -n "CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01|FINAL-HOUR-BUSDEV001|PRINT-ASSET005|Status: ACTIVE" docs/system/step-current.md docs/system/master-task-register.md`
- `rg -n "generated binary|generated PDFs|Stripe|HubSpot|unsupported claims|secrets" docs/system/step-current.md docs/system/master-task-register.md`

## Historical Lineage (Reference Only)

- CTX-WNYHS-FINISH-LINE-REV01 and Step-WNYHS-FINISH-LINE remain preserved lineage for finish-line execution authorization history.
- CTX-SCHED-MVP-REV01 and Step-SCHED-MVP remain preserved lineage for scheduling MVP authorization history.
- CTX-STEP102-QRLANDING-REV01 and Step102 remain preserved for QR funnel historical/supporting lineage.
- SCHED001 and SCHED-ARCH001 remain supporting architecture/specification lineage.

## Enforcement Rules

- Exactly one controlling context governs implementation execution at a time.
- Tasks must be `ACTIVE` in `/docs/system/master-task-register.md` before execution.
- Any request outside this context requires a context/task-register revision before execution.
- Final-hour category openness does not weaken claims, Stripe, HubSpot, routing, runtime, secret, historical-doc, or generated-binary restrictions.


## Locked Standards Documents (Required Load for Visual/Funnel Tasks)

All future visual/funnel tasks must load and follow:
- `/docs/brand/brand_asset_standards_rev01.md`
- `/docs/brand/page_layout_standards_rev01.md`
- `/docs/brand/header_footer_standards_rev01.md`
- `/docs/specs/qr_funnel_standards_rev01.md`
- `/docs/specs/public_funnel_standards_rev01.md`
