# KAOS Business Process Review Workspace

Status: Candidate and review workspace
Customer-facing: No
Implementation authority: No

## Purpose

This directory is the WNYHS review workspace for candidate and reviewed business-process governance artifacts.

Business-process candidates may come from chat extraction, operator notes, audits, task closeouts, implementation evidence, runtime evidence, or external source artifacts. Candidate artifacts are intake material only. They are not repository authority, active operating procedure, SOP authority, QA authority, hook authority, or implementation approval.

No business process becomes active KAOS authority unless it receives explicit operator approval and is promoted through repository governance in the appropriate owner document or task record.

## Authority Boundary

This directory sits below the current repository authority chain:

- `/docs/system/project.md`
- `/docs/system/guardrails.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`
- `/docs/codex/CODEX_RUN_CONTRACT.md`

If any candidate process conflicts with higher-authority governance, protected-system contracts, claims guardrails, or active task scope, the higher-authority document controls and the candidate must remain under review.

## Review Rule

Candidate business-process artifacts must pass through operator review before promotion.

The required lifecycle is:

```text
Candidate
-> Needs Operator Review
-> Operator Revision Requested
-> Approved Candidate
-> Active KAOS Rule
-> Superseded
-> Deprecated
-> Retired
```

The detailed lifecycle, operator decisions, evidence requirements, register update rules, and BP001A-K review-pilot rules are defined in `BP_REVIEW_LIFECYCLE_STANDARD_REV01.md`.

`Approved Candidate` is not the same as `Active KAOS Rule`. Approved candidates require a later bounded activation task before they can become active KAOS authority.

## Current Files

- `BP_REVIEW_LIFECYCLE_STANDARD_REV01.md` defines the candidate-to-active review lifecycle, metadata, operator actions, evidence requirements, register recording rules, and activation boundary.
- `BP_CANDIDATE_INTAKE_REGISTER.md` records candidate packages and future candidate rows before approval.
- `BP_OPERATOR_REVIEW_TEMPLATE.md` provides a one-process review template for operator decision-making.

## Backlog Boundary

SOP documents, QA documents, hook documents, automation, runtime implementation, and source changes remain backlog candidates until separately promoted through a bounded task.

This directory must not be used to:

- approve a candidate process automatically
- activate a KAOS business rule without operator approval
- create SOPs, QA specs, hook specs, automation, or implementation authority
- import full candidate package contents without a bounded intake task
- bypass HubSpot, Stripe/payment, scheduling, Resend/email, API/runtime, Cloudflare, source, route, dependency, or secret protections
