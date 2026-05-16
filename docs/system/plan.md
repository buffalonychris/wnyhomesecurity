# WNY Home Security — Execution Plan

Status: Active

---

## 1. Work Model

The repo executes through one **current operational context** defined in `/docs/system/step-current.md`, with tasks driven by `/docs/system/master-task-register.md`.

Historical Steps are preserved lineage and reference material only unless explicitly elevated as the controlling Step in the current context.

---

## 2. Task Activation Model

Execution authority is determined by both documents together:

- `step-current.md`: defines current context and controlling Step
- `master-task-register.md`: defines executable Active Tasks

Codex must stop when requested work is not present in Active Tasks or falls outside the current context.

---

## 3. Implementation Order

Preferred order:

1. Version bump for deploy visibility
2. Surgical route/page cleanup
3. Build verification
4. Protected-flow confirmation
5. PR summary

---

## 4. Route Audit Procedure

When identifying non-WNYHS pages, do not guess.

Audit:

- `src/App.tsx`
- `src/routes/*`
- `src/pages/*`
- visible nav links
- CTA destinations
- imported page components

Classify routes as:

1. Required WNYHS route
2. Transaction route
3. Tool/demo route
4. Suspicious legacy/hub route
5. Confirmed removable route

Do not delete suspicious routes until a removal Step or explicit prompt authorizes it.

---

## 5. Build Requirements

Run:

```bash
npm run build
```

Run additional scripts when available:

```bash
npm run lint
npm run typecheck
npm run typecheck:api
```

If a script fails due to pre-existing unrelated issues, state that clearly and confirm whether changed files introduced new errors.

---

## 6. Grep Audits

Use when relevant:

```bash
git grep -nI "Reliable Elder Care\|ReliableElderCare\|reliableeldercare\.com\|KAEC"
git grep -nI "FunnelStepRail"
git grep -nI "showStepRail"
git grep -nI "WnyhsFunnelLayout"
git grep -nI "mailto:"
git grep -nI "RESEND_API_KEY" src public
```

---

## 7. Completion Standard

A task is complete when:

- It stays within active Step scope
- It avoids protected-system changes
- It builds successfully or reports pre-existing failures clearly
- It preserves funnel integrity
- It preserves quote/agreement/payment/schedule chain

