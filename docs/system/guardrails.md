# WNYHS Guardrails

This document enforces Step001–Step005 without adding new scope.

---

## 1. Non-Negotiables

- Additive-only during Step001/003/004/005 (no deletions)
- Destructive-only during Step002 (separate PR with inventory)
- NewSite work confined to `src/newsite/**`
- Theme driven by semantic tokens only (no hardcoded colors in components)
- Stripe success must be authoritative via server-side session verification
- Forbidden monitoring/dispatch/guarantee claims must not appear in NewSite copy

---

## 2. Stripe Rules (REV00)

- Test mode during development
- Server-side session verification required for success confirmation
- No secrets in frontend
- Webhooks are OPTIONAL (do not require)

---

## 3. Copy & Claims Rules (REV00)

Forbidden claims include:
- monitoring / monitored
- dispatch / dispatcher
- “we respond”
- police / authorities / emergency services
- guarantee / guaranteed
- “central station”
- insurance-style promises

Allowed positioning (when accurate):
- local-first
- privacy-forward
- works locally
- professional installation
- clear next steps
- hardware you own

---

## 4. CI / Validation Expectations

Always run:
- npm ci (if repo uses it)
- npm run build

If present:
- npm run claims:check

This docs PR does not add scripts or CI wiring.

---

## 5. Stop Conditions

Stop and request Step revision if a task:
- changes scope beyond Step001–Step005
- violates additive vs destructive discipline
- adds forbidden claims
- hardcodes theme values in components
- exposes secrets
