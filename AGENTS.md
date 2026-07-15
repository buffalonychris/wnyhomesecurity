# WNYHS Codex Execution Rules

Repository: `buffalonychris/wnyhomesecurity`
Canonical detailed standard: `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`

This file is the concise always-on entrypoint for Codex CLI and the ChatGPT Windows app. The canonical detailed standard is the sole active owner of Codex execution and work-order mechanics.

## Authority and task gate

Follow this authority chain:

1. `/docs/system/project.md`
2. `/docs/system/guardrails.md`
3. `/docs/system/agent.md`
4. `/docs/system/plan.md`
5. `/docs/system/step-current.md`
6. `/docs/system/master-task-register.md`
7. active bounded task or permitted prompt-created work order
8. applicable owner standards, locked specs, and runtime contracts
9. historical documents as lineage only

Confirm the exact context identifier in `step-current.md` before edits. Execute one bounded task per run, branch, and PR. A prompt-created task may proceed only when higher governance permits it and the prompt defines the task ID, allowed and forbidden scope, target files, validation, and closeout; add only that task record when explicitly authorized.

## Read and routing model

Default to `READ MODE: TARGETED`. Search exact task IDs, headings, status fields, references, and owner-doc sections before reading. Do not fully load the Master Task Register, catalogs, manifests, audits, inventories, or status boards by default.

Use `READ MODE: FULL` only when a higher authority requires it, the task is a bounded audit/reconciliation, targeted search fails, authority or protected-system scope is ambiguous, or the whole file is the object being reconciled. State the justification.

Retry a stalled read or command at most once. After that retry fails, use a smaller targeted command or stop with the exact blocker. Do not repeat broad read batches.

Classify the task by category, primary workstream, and related workstreams. Use OPS004 for routing and OPS005 only when current workstream status is needed.

## Scope and change discipline

- Modify only task-authorized files; capability access is not authorization.
- Prefer additive, surgical changes. Destructive changes require explicit task authority.
- Preserve working routes, funnel order, data, contracts, and historical lineage.
- Do not introduce features, architecture, dependencies, workflows, cleanup, or adjacent task work by inference.
- Do not hardcode colors or design primitives outside the semantic-token system.
- For site-impacting work, follow the authorized version rule; docs-only governance has no site version bump.

Protected by default: HubSpot/CRM and `/api/lead-signal`; Stripe/payment and webhook authority; scheduling/calendar ownership; Lead Signal/requestId; QR attribution; Resend/email; Cloudflare/runtime/environment/DNS; quote-agreement-payment-schedule chain; Precision Planner; secrets and customer data.

Public copy must not claim or imply: monitoring/monitored service, dispatch/dispatcher, “we respond,” police/authorities/emergency-services response, guarantees, or central-station service. Follow current claims owners for all customer-facing language.

## Git, validation, and closeout

- Start from clean, synchronized `main`; use a fresh task branch.
- Open a draft PR to `main`. Never merge, enable auto-merge, mark ready, or push directly to `main` unless higher authority and the operator explicitly authorize it.
- Scale validation to task risk. Always check status, changed files, diff/check output, unexpected deletes, task-specific evidence, and protected scope.
- Docs-only tasks do not run `npm run build` unless source/build configuration changed, higher authority requires it, or the work order explicitly justifies it. Record a governed skip otherwise.
- Close out concisely with version when applicable, branch/commit/draft PR, controlling context, files created/changed, validation/build result, scope and protected-system confirmations, no-merge confirmation, unresolved risks, and the canonical Token Utilization / RSI Report.

## ChatGPT Sites boundary

`SITE` tasks cover governed source-backed prototyping, interactive design validation, owner-only Site versioning/deployment, and controlled reconciliation. Sites prototypes are real hosted deployments but are not production authority. The production website remains governed by this repository, GitHub, Cloudflare, funnel/runtime contracts, and protected-system rules. Production reconciliation requires a separate bounded task after prototype review.

## Stop conditions

Stop and state the conflict when repository/path, task authorization, current context, scope, allowed files, protected systems, claims, secrets, destructive authority, or required validation is missing, ambiguous, or conflicting. Request a task/context/work-order revision; never silently deviate.
