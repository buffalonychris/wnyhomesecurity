# Scheduling Future Model — REV01

## Owner

Canonical owner doc:

- `/docs/runtime/scheduling_future_model.md`

Primary owner:
- WNYHS operators and runtime maintainers responsible for scheduling policy and implementation alignment.

## Purpose

Lock in the expected future scheduling model so implementation tasks remain aligned while current production remains request-first/manual-confirmation.

## Scheduling Goal

Allow customer or business owner to schedule estimates/installations using shared business availability while preserving human confirmation and customer communication discipline.

## Production Safety Rule (Current Posture)

Current production posture remains:

- Customer may request a preferred appointment time.
- WNY Home Security must manually confirm the appointment.
- No appointment is confirmed until operator confirmation occurs.

## V1 Safe Model

- Estimate scheduling only for self-service.
- Customer selects preferred available estimate slot.
- Request becomes pending confirmation.
- Chris/Lou/operator accepts ownership.
- Customer receives email confirmation after acceptance.
- SMS only if consent exists and SMS provider is implemented.
- Phone-only customers require manual verbal confirmation.
- HubSpot/calendar record stores confirmation status.
- No appointment is confirmed until operator accepts.

## Future Full Model

- Shared Google Calendar availability.
- Available slot display.
- Appointment type duration rules.
- Operator ownership acceptance.
- Confirmation email.
- SMS confirmation if consented and implemented.
- 24-hour reminder.
- 1-hour reminder.
- In-route notice.
- CRM/calendar status tracking.

## Availability Inputs (Future)

Availability must eventually account for:

- Existing calendar events.
- Blocked unavailable time.
- Business hours.
- Travel/setup buffer.
- Appointment type duration.
- Minimum lead time.
- Timezone.
- Blackout days.
- Max appointments per day.

## Appointment Types

Future supported types:

- Estimate
- Install
- Follow-up / Service
- Other

Launch recommendation:

- Self-scheduling starts with estimates only.
- Installs remain manually scheduled until duration/travel rules mature.

## Appointment State Model

Current/launch-facing states (implemented posture):

- REQUESTED
- CONFIRMED
- CANCELLED
- RESCHEDULED
- COMPLETED

Internal/future-expanded states (not yet implemented unless explicitly proven in code/runtime):

- REQUESTED
- OWNER_REVIEW
- OWNER_ACCEPTED
- CUSTOMER_CONFIRMED
- REMINDER_24H_SENT
- REMINDER_1H_SENT
- IN_ROUTE
- COMPLETED
- CANCELLED
- RESCHEDULED
- NO_SHOW

## Communication Consent Model

- Email allowed.
- SMS allowed only with explicit consent and implemented SMS provider.
- Phone allowed.
- Phone-only requires manual confirmation.
- No SMS without explicit SMS consent.
- Verbal confirmation must be recorded for phone-only customers.

## Source-of-Truth Ownership

| System | Owns |
|---|---|
| Google Calendar | availability + calendar event |
| HubSpot | customer/deal/lead record + scheduling status history |
| App/backend | scheduling request + orchestration |
| Resend | email delivery |
| SMS provider | future SMS delivery |
| Operator | final ownership and confirmation |

## Bounded Future SCHED Queue

- SCHED002 — Scheduling Architecture Spec
- SCHED003 — Shared Google Calendar Availability Integration
- SCHED004 — Owner Acceptance Workflow
- SCHED005 — Customer Confirmation Notifications
- SCHED006 — Appointment Reminder Workflow
- SCHED007 — HubSpot Scheduling Status Sync
- SCHED008 — Install Scheduling Rules / Duration Model

## Guardrail Notes

This document does not authorize implementation of:

- Google Calendar integration
- SMS implementation
- Reminder implementation
- Owner-acceptance implementation
- Backend scheduling architecture changes

These remain future scoped tasks only.
