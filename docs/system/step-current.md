# Current Operational Context

## Context ID

- CTX-SCHED-MVP-REV01

## Context Name

- Estimate Scheduling MVP Implementation

## Status

- ACTIVE

## Controlling Step

- Step-SCHED-MVP — Estimate Scheduling MVP Implementation Authority — REV01 (CONTROLLING)

## Purpose

- Authorize bounded implementation of estimate scheduling MVP tasks `SCHED-IMPL002` through `SCHED-IMPL004`.
- Enforce implementation sequencing and controls derived from `SCHED-ARCH001` and `/docs/specs/scheduling_architecture_workflow_spec_rev01.md`.
- Preserve current production-safe posture: estimate request/pending-confirmation only until explicitly advanced by authorized tasks.

## Allowed Scope

- Google Calendar read-only availability for estimate scheduling.
- Estimate appointment request creation tied to `requestId` and lead intake.
- Owner/manual confirmation state transitions.
- Scheduling runtime contract updates and deployment validation updates.
- Validation for request/pending-confirmation posture and forbidden-scope checks.

## Forbidden Scope

- Install scheduling.
- SMS or reminder automation.
- Automatic booking or customer self-confirmation.
- Technician dispatch or route optimization.
- Stripe/payment behavior changes.
- New product/package behavior.
- Customer-facing confirmed-booking claims before owner acceptance.

## Primary Task Register

- `/docs/system/master-task-register.md`

## Controlling Runtime Systems

- Scheduling ownership.
- requestId lifecycle.
- `/api/lead-signal` boundary.
- HubSpot sync only where directly required.
- Email notification only where directly required by pending-confirmation owner/customer flow.

## Controlling Funnel / Route Scope

- Estimate scheduling only.
- Existing scheduling route/API topology established by `SCHED-IMPL001`.
- `GET /api/scheduling/availability` as the `SCHED-IMPL002` target.

## Required Validation

- `npm run build`
- `npm run lint` (if available)
- `npm run test` (if available)
- `npm run typecheck` (if available)
- Route/API validation checks for authorized task scope.
- Forbidden-scope/content searches.
- No calendar-write verification for `SCHED-IMPL002`.
- No SMS/reminder/install-scheduling verification for this context transition task.

## Historical Lineage (Reference Only)

- CTX-STEP102-QRLANDING-REV01 and Step102 remain preserved for QR funnel historical/supporting lineage.
- SCHED001 and SCHED-ARCH001 remain supporting architecture/specification lineage.
- Step103 and Step101 remain preserved reference lineage.

## Enforcement Rules

- Exactly one controlling context governs implementation execution at a time.
- Tasks must be ACTIVE in `/docs/system/master-task-register.md` before execution.
- Any request outside this context requires a context/task-register revision before execution.
