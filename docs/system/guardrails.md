# WNY Home Security — Guardrails

Status: Active

---

## 1. Hard Stops

Stop before implementation if:

- Repo is not `buffalonychris/wnyhomesecurity`
- Required governance files are missing
- Requested work is outside the current operational context in `docs/system/step-current.md`
- Requested work is not authorized by an `ACTIVE` Master Task Register task or an explicitly bounded prompt-created work order permitted by higher-authority governance
- Requested work would expose secrets
- Requested work would modify Stripe/payment verification without authorization
- Requested work would delete protected funnel functionality without authorization

---

## 2. No New Claims

Do not add claims that are not already authorized by the current bounded task/work order, locked standard, or approved spec copy.

Avoid claims around:

- guaranteed emergency response
- professional monitoring included
- police/fire dispatch
- medical monitoring
- guaranteed prevention of break-ins, water damage, or emergencies

Allowed posture:

- local-first
- self-monitored
- no subscriptions sold by us
- remote access requires internet
- final scope depends on site conditions

---

## 3. No BOM Exposure

Never expose public-facing:

- full BOMs
- cost basis
- internal pricing breakdowns
- margin assumptions
- supplier/vendor private notes

Package pages may show customer-facing outcomes and plain-English inclusions only.

---

## 4. Protected Chain

Do not break:

Quote Review → Agreement Review → Payment → Payment Success/Cancel → Schedule

Do not remove or silently bypass any of those routes.

---

## 5. Precision Planner Protection

The Precision Planner is protected.

Do not delete:

- planner page
- planner route
- planner engine/state
- floorplan components
- quote handoff behavior

unless a future current-context task or explicitly bounded work order authorizes planner replacement.

---

## 6. Payment / Stripe Protection

Do not alter:

- Stripe secret usage
- webhook signature verification
- checkout session creation semantics
- payment success/cancel semantics
- deposit calculation

unless payment work is explicitly authorized by an active bounded task/work order under the current operational context.

---

## 7. Email Protection

When email work is active:

- Resend is outbound only
- Cloudflare Email Routing remains inbound
- Root MX records must not be changed by code work
- `RESEND_API_KEY` must stay server-side
- Every system-generated email must include audit copy

---

## 8. Additive vs Destructive

Additive work may proceed only when it is inside the current operational context and the active bounded task/work order scope.

Destructive work requires explicit authorization.

When uncertain:

- suppress instead of delete
- redirect instead of remove
- preserve data/constants
- report suspicious leftovers instead of deleting

---

## 9. Version Badge

For site-impacting implementation prompts, increment the visible site version badge.

This is required for Cloudflare deployment confirmation.

