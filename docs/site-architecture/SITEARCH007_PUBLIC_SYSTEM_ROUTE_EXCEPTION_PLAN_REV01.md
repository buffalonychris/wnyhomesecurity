# SITEARCH007 Public System Route Exception Plan REV01

## 1. Purpose

This document records the NAV005 public-system-route exception plan for protected and system-adjacent routes identified by NAV003 and prioritized by NAV004.

This is a documentation-only governance artifact. It does not authorize route, shell, redirect, navigation, footer, copy, visual, CSS, token, runtime, payment, CRM, scheduling, email, dependency, package-lock, Cloudflare, secret, environment, deployment, or version changes.

## 2. Authority

Controlling task: `NAV005 - Public System Route Shell Exception Plan`.

Current operational context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`.

Primary source documents:

- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/system/OPS009_CODEX_WORKFLOW_AND_RSI_GOVERNANCE_REV01.md`
- `docs/site-architecture/SITEARCH005_PUBLIC_ROUTE_SHELL_VERIFICATION_MATRIX_REV01.md`
- `docs/site-architecture/SITEARCH006_PUBLIC_ROUTE_SHELL_FOLLOW_UP_DECISION_PLAN_REV01.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/stripe_runtime.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/runtime/hubspot_sync_contract.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `src/App.tsx` route declarations, read only for route-owner confirmation

If this document conflicts with higher-authority repository governance, the higher-authority source controls.

## 3. Route Set

NAV005 covers these protected/system-adjacent routes:

- `/recommend`
- `/quotePrint`
- `/agreementPrint`
- `/esign`
- `/payment-processing`
- `/resume`
- `/resume-verify`
- `/verify`
- `/agreement`

The route set intentionally excludes `/funding` and `/faq`, which NAV004 assigned to `NAV006 - Public Information Shell Migration Plan`.

## 4. Decision Vocabulary

- `formal shell exception`: route should remain outside the standard public WNYHS shell unless a later owner-approved task changes that posture.
- `print-flow exception`: route is print/document-output focused and should not receive normal public navigation/footer treatment by default.
- `protected transaction/system exception`: route touches agreement, payment, resume, verification, or similar transaction state and requires protected-flow authorization before implementation.
- `verification/status exception`: route exists to validate, restore, or route users by token/status and should remain plain/system-first unless later approved.
- `future migration candidate`: route may later adopt a constrained WNYHS shell, but only after owner and protected-flow review.
- `removal/noindex/review candidate`: route should later be reviewed for public exposure, search posture, retention, or retirement before implementation.

## 5. Decision Table

| Route | Current NAV003/NAV004 status | Route owner | Recommended exception type | Risk level | Protected-system sensitivity | Future task candidate | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/recommend` | NAV003 `FOLLOW-UP`; NAV004 assigned to NAV005 for ownership confirmation before shell action. | Recommendation/customer-fit route owner (`src/pages/Recommendation.tsx`) with quote/planner adjacency. | Formal shell exception now; future migration candidate only after owner review. | Medium | Possible quote/planner adjacency; may influence customer-fit or package-selection flow. | `NAV012 - Recommendation Route Ownership And Shell Decision` or include in a later protected funnel review. | Do not change route shell, copy, CTA targets, recommendation logic, quote handoff, or planner relationship without separate authorization. |
| `/quotePrint` | NAV003 `FOLLOW-UP`; NAV004 recommended print-flow exception. | Quote print/document owner (`src/pages/QuotePrint.tsx`) under quote workflow. | Print-flow exception. | High | Quote state, resume token output, document links, and quote-to-agreement progression. | `NAV013 - Print Route Exception Register` or protected quote print review. | Do not add standard top navigation/footer, alter print layout, token behavior, print metadata, quote references, resume links, or document authority behavior without protected-flow authorization. |
| `/agreementPrint` | NAV003 `FOLLOW-UP`; NAV004 recommended print-flow exception. | Agreement print/document owner (`src/pages/AgreementPrint.tsx`) under agreement workflow. | Print-flow exception. | High | Agreement acceptance state, agreement reference/hash, resume token output, document links, and payment progression. | `NAV013 - Print Route Exception Register` or protected agreement print review. | Do not add standard top navigation/footer, alter print layout, agreement reference/hash behavior, acceptance rendering, resume links, or document authority behavior without protected-flow authorization. |
| `/esign` | NAV003 `FOLLOW-UP`; NAV004 recommended protected transaction/system exception or later protected-flow review. | E-signature/agreement completion route owner (`src/pages/ESign.tsx`). | Protected transaction/system exception. | High | Agreement completion adjacency and support/contact handoff. | `NAV014 - Agreement Transaction Route Review`. | Do not change shell, copy, redirect behavior, signing posture, agreement completion messaging, support handoff, or relationship to agreement acceptance without protected-flow authorization. |
| `/payment-processing` | NAV003 `FOLLOW-UP`; NAV004 recommended payment-system exception pending payment review. | Payment processing/status route owner (`src/pages/PaymentProcessing.tsx`). | Protected transaction/system exception. | High | Stripe/payment adjacency; payment status must remain server-side and webhook-authoritative. | `NAV015 - Payment System Route Exposure Review`. | Do not change payment state semantics, success/cancel handling, Stripe checkout/session verification, webhook assumptions, copy, redirects, or shell without explicit payment-flow authorization. |
| `/resume` | NAV003 `FOLLOW-UP`; NAV004 recommended token/document verification exception unless owner review requires shell. | Resume token restoration owner (`src/pages/Resume.tsx`) and resume-token library flow. | Verification/status exception. | High | Resume token parsing, quote/agreement/payment step restoration, local flow state, and protected funnel continuation. | `NAV016 - Resume And Verification Route Exception Register`. | Do not alter token parsing, destination mapping, state restoration, error handling, redirect behavior, copy, or shell without protected-flow authorization. |
| `/resume-verify` | NAV003 `FOLLOW-UP`; NAV004 recommended token/document verification exception unless owner review requires shell. | Resume/verify landing route owner (`src/pages/ResumeVerify.tsx`). | Verification/status exception. | Medium-high | Routes users toward `/resume` and `/verify`; adjacent to quote/agreement document recovery. | `NAV016 - Resume And Verification Route Exception Register`. | Do not change destination links, route purpose, copy, search posture, or shell without owner review; this route can be reviewed for noindex/public-exposure posture later. |
| `/verify` | NAV003 `FOLLOW-UP`; NAV004 recommended token/document verification exception unless owner review requires shell. | Document verification owner (`src/pages/Verify.tsx`) and quote/agreement token authority helpers. | Verification/status exception. | High | Quote/agreement token validation, hash/reference behavior, and document authenticity flow. | `NAV016 - Resume And Verification Route Exception Register`. | Do not alter token validation, agreement hash checks, quote/agreement restoration, print/resume links, error semantics, or shell without protected-flow authorization. |
| `/agreement` | NAV003 `EXCEPTION CANDIDATE`; NAV004 recommended agreement-flow redirect exception. | Agreement redirect owner (`src/pages/Agreement.tsx`) routing to `/agreementReview`. | Protected transaction/system exception; redirect exception. | High | Agreement workflow routing and agreement-review protected funnel progression. | `NAV007 - Alias And Redirect Exception Register` plus `NAV014` if behavior changes. | Keep as redirect-only unless a future protected-flow task authorizes changing the route behavior. Do not change destination, replace behavior, state forwarding, shell, copy, or funnel order here. |

## 6. Protected-System Sensitivity Summary

These routes are not ordinary public information pages. They either print documents, restore state, validate tokens, redirect protected agreement flow, or sit near payment and CRM-owned runtime boundaries.

Protected runtime documents lock the following boundaries:

- CRM writes must remain API-mediated through `/api/lead-signal`.
- HubSpot REV03 remains authoritative for CRM behavior.
- Stripe payment state must remain server-side and webhook-authoritative.
- Scheduling remains owner-confirmed and separate from payment authority.
- `requestId` generation and propagation must not change without explicit runtime authorization.
- Resume, verification, quote, agreement, payment, schedule, planner, and CRM-adjacent behavior must not be modified by shell governance alone.

## 7. What Must Not Change Without Future Protected-Flow Authorization

Future NAV, shell, route, alias, SEO, cleanup, or public-page tasks must not change any of the following for the NAV005 route set unless the active task explicitly authorizes that protected surface:

- Route declarations, route destinations, redirects, or funnel order.
- Standard shell adoption, top navigation, footer, breadcrumbs, or layout wrappers.
- Print layout, print metadata, document references, hashes, resume links, or verify links.
- Quote, agreement, payment, schedule, planner, resume, or verify runtime behavior.
- Stripe checkout, checkout-session verification, webhook verification, deposit logic, payment success/cancel semantics, or payment status copy.
- HubSpot schema, pipeline, properties, stage IDs, CRM sync behavior, or any write path outside `/api/lead-signal`.
- `/api/lead-signal` payload contract, response contract, diagnostics, notification behavior, request validation, or `requestId` behavior.
- Scheduling request creation, owner confirmation, calendar write timing, confirmation email timing, or appointment status authority.
- Resend/email send behavior, recipients, audit-copy behavior, provider configuration, or email link generation.
- Cloudflare config, environment variable names/values, secrets, dependencies, or package-lock.

## 8. Route-Level Recommendations

1. Keep `/quotePrint` and `/agreementPrint` as print-flow exceptions until a protected quote/agreement print review authorizes any shell or layout change.
2. Keep `/agreement` as a redirect exception and register it with alias/redirect governance in `NAV007`.
3. Keep `/payment-processing` as a protected payment-system exception pending a payment route exposure review.
4. Keep `/resume`, `/resume-verify`, and `/verify` as verification/status exceptions pending a token/document route exception register.
5. Keep `/esign` as a protected transaction/system exception until agreement-flow ownership is clarified.
6. Keep `/recommend` outside automatic shell migration until its owner is classified as public recommendation, protected funnel helper, or legacy/system route.

## 9. Recommended Next Bounded Task

Recommended next task after NAV005:

```text
NAV007 - Alias And Redirect Exception Register
Purpose: Convert redirect-only, hash-bearing, and compatibility aliases into a durable route exception register, including `/agreement`.
Allowed Scope: Documentation-only alias/redirect exception register and task-register update.
Forbidden Scope: No route changes, redirect changes, shell changes, nav/footer/page copy/CSS changes, protected runtime changes, Stripe/payment, HubSpot/CRM, scheduling, Resend/email, backend/API, Cloudflare, dependency, package-lock, version, merge, or ready-for-review PR.
```

Rationale: NAV005 already classifies the protected/system route exceptions. `NAV007` is the safest next governance step because it records redirect-only and compatibility aliases without implementing route behavior changes.

## 10. Do Not Implement In NAV005

NAV005 does not authorize:

- Source implementation file changes.
- Route changes.
- Redirect changes.
- Navigation changes.
- Footer changes.
- Page copy changes.
- CSS, token, or visual changes.
- Stripe/payment changes.
- HubSpot/CRM changes.
- Scheduling changes.
- Resend/email changes.
- Backend/API runtime changes.
- Cloudflare configuration changes.
- Dependency or package-lock changes.
- Secret or environment changes.
- Version bump.
- Merge or ready-for-review PR.

## 11. RSI / Context Efficiency Notes

Essential docs loaded:

- `docs/system/project.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/guardrails.md`
- `docs/system/step-current.md`
- targeted `docs/system/master-task-register.md` NAV block
- `docs/system/OPS009_CODEX_WORKFLOW_AND_RSI_GOVERNANCE_REV01.md`
- `docs/site-architecture/SITEARCH005_PUBLIC_ROUTE_SHELL_VERIFICATION_MATRIX_REV01.md`
- `docs/site-architecture/SITEARCH006_PUBLIC_ROUTE_SHELL_FOLLOW_UP_DECISION_PLAN_REV01.md`
- targeted runtime owner snippets for protected runtime, lead signal, request ID, Stripe, scheduling, HubSpot sync, and HubSpot REV03
- targeted `src/App.tsx` route declarations and matching page-owner names

Redundant or lower-value reads:

- The targeted runtime grep returned more lines than needed because several owner docs repeat shared protected-boundary language. Future NAV005-like tasks can read `protected_runtime_contract.md`, `runtime_ownership_map.md`, and only one owner doc per affected route family.

Context pressure: medium.

Future prompt-shortening pattern:

```text
Run NAV00X docs-only route exception task. Use AGENTS.md, current step, targeted MTR NAV block, OPS009, SITEARCH005/006, protected_runtime_contract, runtime_ownership_map, and only route-owner snippets for the named routes. Update only the target SITEARCH doc and MTR. No source/runtime/version changes.
```

Chat-derived context promoted into repo docs:

- NAV005 route classifications, protected-system sensitivity, do-not-change gates, and recommended next task are now recorded in this document.
