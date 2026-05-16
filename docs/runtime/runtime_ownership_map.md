# Runtime Ownership Map

Status Legend: `MISSING` | `PARTIAL` | `ACTIVE` | `LOCKED` | `HISTORICAL`

This map defines canonical runtime owner-doc targets and bounded follow-up task ownership.

| System Name | Canonical Owner Doc | Current Status | Depends On | Related Repo Docs | Follow-Up Task ID | Notes |
|---|---|---|---|---|---|---|
| Cloudflare Environment Runtime | `/docs/runtime/cloudflare_env.md` | PARTIAL | Cloudflare Pages runtime configuration | `/docs/system/project.md`, `/docs/system/guardrails.md` | RUNTIME002 | Contract created in REV01 with confirmed assumptions plus explicit UNKNOWN/NEEDS VERIFICATION markers; promote to ACTIVE after operator verification of Cloudflare dashboard/runtime settings. |
| Stripe Runtime | `/docs/runtime/stripe_runtime.md` | MISSING | Stripe server-side verification + webhook authority | `/docs/system/agent.md`, `/docs/stripe-cloudflare.md` | RUNTIME003 | Must preserve webhook-authoritative payment success model. |
| Resend Runtime | `/docs/runtime/resend_runtime.md` | MISSING | Resend outbound email service | `/docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md` | RUNTIME004 | Email runtime split from Cloudflare routing. |
| Cloudflare Email Routing Runtime | `/docs/runtime/cloudflare_email_routing.md` | MISSING | Domain inbound routing on Cloudflare | `/docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md` | RUNTIME004 | Document inbound ownership and coexistence with Resend outbound. |
| HubSpot Property Contract Runtime | `/docs/runtime/hubspot_properties.md` | MISSING | HubSpot REV03 locked schema baseline | `/docs/crm/hubspot/hubspot_kb_rev03.md` | RUNTIME006 | Keep schema reference-only unless explicitly revised. |
| HubSpot Sync Contract Runtime | `/docs/runtime/hubspot_sync_contract.md` | MISSING | API-mediated CRM onboarding flow | `/docs/crm/hubspot/hubspot_kb_rev03.md` | RUNTIME006 | Must enforce `/api/lead-signal` as write path. |
| Lead Signal Contract Runtime | `/docs/runtime/lead_signal_contract.md` | MISSING | `/api/lead-signal` request/response contract | `/docs/crm/hubspot/hubspot_kb_rev03.md`, `/docs/system/guardrails.md` | RUNTIME005 | Central CRM write-contract owner doc. |
| Request ID Contract Runtime | `/docs/runtime/request_id_contract.md` | MISSING | End-to-end correlation and diagnostics | `/docs/system/plan.md`, `/docs/codex/QA_CHECKLIST.md` | RUNTIME005 | Define request-id lifecycle and failure diagnostics. |
| QRLanding Runtime | `/docs/runtime/qrlanding_runtime.md` | MISSING | Step102 QR funnel runtime behavior | `/docs/system/step-current.md`, `/docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md` | RUNTIME002 | Runtime contract should describe operations without changing funnel design authority. |
| Scheduling Ownership Runtime | `/docs/runtime/scheduling_ownership.md` | MISSING | Scheduling capture and degrade behavior | `/docs/system/master-task-register.md` | RUNTIME007 | Clarify ownership boundary and fallback authority. |
| Deployment Validation SOP Runtime | `/docs/runtime/deployment_validation.md` | MISSING | Build/deploy validation discipline | `/docs/system/plan.md`, `/docs/codex/QA_CHECKLIST.md` | QA001 | Operational SOP for pre/post deployment checks. |

## Follow-Up Runtime Task Queue

- RUNTIME002 — Cloudflare Runtime Contract
- RUNTIME003 — Stripe Runtime Contract
- RUNTIME004 — Email Runtime Contracts
- RUNTIME005 — Lead Signal + requestId Contracts
- RUNTIME006 — HubSpot Runtime Contracts
- RUNTIME007 — Scheduling Ownership Contract
- QA001 — Deployment Validation SOP
