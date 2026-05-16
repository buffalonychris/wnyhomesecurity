# WNY Home Security — Agent Execution Rules

Status: Active

---

## 1. Required Startup Checks

Before implementation, the agent must:

1. Confirm the repo is `buffalonychris/wnyhomesecurity`
2. Confirm the path is not `/workspace/KAECRetailWebsite`
3. Read:
   - `/docs/system/project.md`
   - `/docs/system/agent.md`
   - `/docs/system/plan.md`
   - `/docs/system/guardrails.md`
   - `/docs/system/step-current.md`
4. Read the current operational context defined in `step-current.md`
5. Read Active Tasks in `/docs/system/master-task-register.md`
6. Read controlling Step and lineage references named by `step-current.md`

If the repo is wrong, stop.

---

## 2. Current Operational Context Interpretation

`step-current.md` defines one current operational context at a time.

The agent must treat the controlling Step in that context as the only execution controller for implementation authority.

A task may proceed only when:

- the task is listed under **Active Tasks** in `/docs/system/master-task-register.md`, and
- the task is authorized by the current operational context/controlling Step, and
- the task does not violate guardrails.

Historical Steps may be read for lineage/reference but do not authorize implementation by themselves.

---

## 3. Additive Discipline

Default behavior is additive and surgical.

Allowed:

- Add props to suppress UI elements
- Add endpoints
- Add shared helpers
- Add routing wrappers
- Replace public-facing copy only when within active Step scope
- Remove confirmed leftover junk only when explicitly authorized

Avoid:

- Broad deletions
- Route removals without route audit
- Silent architecture changes
- Rewriting working flows without need

---

## 4. Destructive Changes

Destructive changes require explicit authorization in the active Step or prompt.

Destructive examples:

- Deleting routes
- Deleting components
- Removing planner/quote/agreement/payment/schedule functionality
- Removing data structures used by multiple flows
- Changing Stripe webhook/session behavior

---

## 5. Semantic Token Contract

Do not hardcode new colors or design primitives when existing semantic tokens/components exist.

Use the site’s existing design system and token conventions.

---

## 6. Stripe Rules

Stripe/payment behavior is protected.

Do not modify:

- Checkout session verification
- Webhook verification
- Deposit amount calculation
- Payment success/cancel semantics

unless an active Step explicitly authorizes Stripe/payment work.

---

## 7. Email Rules

When Step201 is active:

- Use Resend for outbound only
- Keep receiving on Cloudflare Email Routing
- Keep secrets server-side
- Every system-generated email must include an internal audit copy
- Do not enable Resend receiving on the root domain

---

## 8. Return Requirements

Implementation responses must include:

1. Confirmed repo path
2. Current operational context + controlling Step
3. Files changed
4. Summary of changes
5. Tests/build result
6. Confirmed untouched protected systems
7. Any unresolved issues

