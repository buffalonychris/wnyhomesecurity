# WNY Home Security — Execution Plan

Status: Active

---

## 1. Work Modes

The repo supports parallel active work modes through active Steps.

### Step101 — Funnel / UI / Page Structure

Use for:

- Homepage cleanup
- Funnel page layout
- CTA alignment
- Route and nav cleanup
- Secondary rail suppression
- WNYHS-only visual cleanup
- Version badge bump

### Step201 — Email Infrastructure / Resend

Use for:

- Resend outbound wiring
- Server email endpoints
- Email audit copy enforcement
- Email environment variables
- Contact/support/schedule/fit-check email handling

---

## 2. Default Active Steps

During final website cleanup, both of these may remain active:

- Step101 — Home Security Funnel + Page Spec (REV02)
- Step201 — Email Infrastructure + Resend Integration (REV01)

This prevents unnecessary stop loops when cleanup tasks touch UI and system-email behavior in adjacent passes.

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

