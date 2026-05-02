# WNY Home Security — Codex Agent Instructions

This repository is governed by the WNY Home Security Operating System.

Authoritative system documents:

- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/guardrails.md`
- `/docs/system/step-current.md`

All Codex executions must reference a controlling Step document and follow additive vs. destructive discipline.

## Required execution posture

Before making changes, Codex must identify:

1. The controlling Step document.
2. The allowed scope of the requested work.
3. Whether the work is additive, corrective, or destructive.
4. Any protected systems that must not be touched.

If no controlling Step document applies, Codex must stop and request a Step revision instead of implementing.

## Mandatory Task 0 — Version Bump

Every Codex task must begin with:

```txt
TASK 0 — VERSION BUMP
```

Codex must increment the visible site version in:

```txt
src/lib/siteVersion.ts
```

The version badge is used to confirm Cloudflare has published merged changes.

## Protected systems

Unless the user explicitly requests changes to these systems, Codex must not modify:

- HubSpot schema, lifecycle, forms, pipelines, custom properties, API mappings, or CRM workflows.
- Stripe checkout, webhook, payment verification, payment amount logic, or deposit verification logic.
- Quote/agreement hashing, resume tokens, verification tokens, or document integrity logic.
- Funnel order, routing contracts, or transaction state handoffs.

## Funnel protection

The Home Security funnel must preserve this customer flow:

```txt
Landing → Packages/Fit Check → Optional Planner → Quote → Agreement → Deposit → Schedule
```

The user must never be hard-locked without a clear path backward.

Back navigation must not mean cancel.
Editing must not mean restart.
Changing package must not wipe progress.

## Styling rules

Codex must use the existing design/token system.

Do not hardcode new colors, shadows, spacing systems, or typography outside existing tokens/styles unless explicitly instructed.

## Copy and claims lock

Codex must not introduce new marketing claims, guarantees, monitoring claims, emergency-response claims, warranty claims, medical claims, privacy claims, or subscription claims without explicit approval.

Approved copy may be reorganized for layout clarity, but not materially changed unless requested.

## Destructive-change discipline

Codex must avoid deletion unless the controlling Step explicitly allows it.

For cleanup tasks, Codex should prefer hiding, centralizing, replacing, or deprecating over broad deletion unless the user specifically asks to remove something.

## Required verification

For normal frontend changes, Codex must run:

```bash
npm run build
```

When relevant, Codex should also run:

```bash
git diff --stat
git status --short
```

## Required final summary

Codex must return a structured summary including:

- New version number.
- Controlling Step reference.
- Files changed.
- What changed.
- What was intentionally not changed.
- HubSpot untouched confirmation.
- Stripe untouched confirmation.
- Build result.
- Known risks or follow-up QA.
