# QR Attribution Reporting & Review SOP — RUNTIME011 REV01

## Owner

Canonical owner doc:
- `/docs/runtime/qr_attribution_reporting.md`

Primary owner:
- WNYHS operator responsible for weekly QR placard campaign decisions.

Secondary owner(s):
- Runtime/QA maintainers supporting evidence integrity and attribution interpretation.

## Purpose

Define a repeatable, bounded, docs-only weekly review process for QR placard performance across traffic, event telemetry, lead/call outcomes, and business results.

This SOP does not authorize runtime changes, dashboard implementation, analytics SDK changes, HubSpot workflow edits, or Stripe/payment behavior changes.

## Authority and Scope

Governing references:
- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/guardrails.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`

Runtime references:
- `/docs/runtime/qrlanding_runtime.md`
- `/docs/runtime/request_id_contract.md`
- `/docs/runtime/lead_signal_contract.md`
- `/docs/runtime/deployment_validation.md`
- `/docs/codex/QA_CHECKLIST.md`

Boundaries:
- Reporting/review governance only.
- Cloudflare and event telemetry are directional operational signals.
- Submitted leads/calls/booked quotes/closed jobs are stronger outcome signals.

## Weekly Review Cadence

- **Frequency:** 1x per week (recommended fixed weekday/time, UTC noted in evidence).
- **Owner:** One named operator/reviewer for each week.
- **Required Inputs:** Placard inventory notes, Cloudflare `/qrlanding` metrics, QR event counts, lead/call/quote/job outcomes, and offline observations.
- **Required Outputs:** Weekly evidence record, directional KPI summary, decisions, and follow-up task IDs.
- **Decision Log Expectation:** Every weekly review must produce explicit decisions (keep/replace/add/investigate/pause) with rationale.

## Required Reporting Inputs

For each reviewed week capture:

1. Number of active placard placements.
2. Known placement locations (if manually tracked).
3. Cloudflare `/qrlanding` traffic (requests and/or visitor estimate, as available).
4. `qrlanding_view` event count.
5. `estimate_form_started` event count.
6. `estimate_form_submitted` event count.
7. Phone call count attributed to campaign period.
8. Booked quote count.
9. Closed job count.
10. Known offline notes (weather, placement damage, promotion overlap, outages, etc.).

## KPI Ladder (Directional)

Review as a funnel ladder each week:

1. Placard placements
2. `/qrlanding` visits
3. Form starts
4. Form submissions
5. Calls
6. Booked quotes
7. Closed jobs

Rule: health is judged by progression down the ladder, not raw top-of-funnel volume alone.

## Directional Conversion Calculations

Use these weekly directional ratios:

- `/qrlanding` visits per placard = `/qrlanding visits` ÷ `active placards`
- Form starts per `/qrlanding` visit = `form starts` ÷ `/qrlanding visits`
- Submissions per form start = `form submissions` ÷ `form starts`
- Booked quotes per submission/call = `booked quotes` ÷ (`form submissions` + `calls`)
- Closed jobs per booked quote = `closed jobs` ÷ `booked quotes`
- Closed jobs per placard = `closed jobs` ÷ `active placards`

If denominator is zero, record ratio as `N/A` and log a data-quality note.

## Interpretation Rules (Required)

1. Cloudflare analytics is directional telemetry, not final truth.
2. Requests are not equivalent to human visitors.
3. Bot/crawler/background request noise must be expected.
4. Lead submissions and phone calls are stronger demand signals than raw traffic.
5. Booked quotes and closed jobs are business-outcome signals.
6. requestId/session joins are directional unless tied to a submitted lead record.
7. Single-week spikes should be interpreted cautiously; compare trend windows where possible.

## Weekly Operator Decision Rules

Each weekly review must explicitly decide one or more:

- Keep current placements that remain productive.
- Replace weak placements with low directional progression.
- Add placements when conversion progression remains healthy.
- Adjust sign/QR creative design (through a future bounded task if implementation is needed).
- Adjust landing-page CTA only through a future authorized task.
- Investigate tracking failures (missing events, mismatched counts, requestId trace gaps).
- Pause expansion when funnel validation quality fails or attribution confidence degrades.

## Evidence Capture Format (Required)

Use this record template for each week:

- Week reviewed (date range)
- Reviewer
- Active placard count
- Traffic summary (`/qrlanding`)
- Event summary (`qrlanding_view`, `estimate_form_started`, `estimate_form_submitted`)
- Lead/call summary
- Quote/job summary
- Conversion notes (ratios + interpretation)
- Issues found
- Decisions made
- Follow-up task IDs

## Governance and Escalation

- If reporting reveals runtime/contract inconsistencies, open a bounded follow-up task before any implementation.
- Do not patch runtime behavior from this SOP.
- Keep HubSpot and Stripe protections unchanged unless separately authorized by active task scope.
