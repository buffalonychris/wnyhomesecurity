# Runtime Ownership Map

Status Legend: `MISSING` | `PARTIAL` | `ACTIVE` | `LOCKED` | `HISTORICAL`

This map defines canonical runtime owner-doc targets and bounded follow-up task ownership.

| System Name | Canonical Owner Doc | Current Status | Depends On | Related Repo Docs | Follow-Up Task ID | Notes |
|---|---|---|---|---|---|---|
| Cloudflare Environment Runtime | `/docs/runtime/cloudflare_env.md` | PARTIAL | Cloudflare Pages runtime configuration | `/docs/system/project.md`, `/docs/system/guardrails.md` | RUNTIME002 | Contract created in REV01 with confirmed assumptions plus explicit UNKNOWN/NEEDS VERIFICATION markers; promote to ACTIVE after operator verification of Cloudflare dashboard/runtime settings. |
| Stripe Runtime | `/docs/runtime/stripe_runtime.md` | PARTIAL | Stripe server-side verification + webhook authority | `/docs/system/agent.md`, `/docs/stripe-cloudflare.md` | RUNTIME003 | REV01 created with source-backed Stripe boundaries and explicit UNKNOWN/NEEDS VERIFICATION markers; promote to ACTIVE after operator verification of live Stripe/dashboard/runtime settings. |
| Resend Runtime | `/docs/runtime/resend_runtime.md` | PARTIAL | Resend outbound email service | `/docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md` | RUNTIME004 | REV01 created with repo-evidence boundaries and explicit UNKNOWN/NEEDS VERIFICATION markers; promote to ACTIVE after operator verification of live Resend configuration. |
| Cloudflare Email Routing Runtime | `/docs/runtime/cloudflare_email_routing.md` | PARTIAL | Domain inbound routing on Cloudflare | `/docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md` | RUNTIME004 | REV01 created with documented inbound model and explicit UNKNOWN/NEEDS VERIFICATION markers; promote to ACTIVE after dashboard and MX verification. |
| HubSpot Property Contract Runtime | `/docs/runtime/hubspot_properties.md` | PARTIAL | HubSpot REV03 locked schema baseline | `/docs/crm/hubspot/hubspot_kb_rev03.md` | RUNTIME006 | REV01 created with source/doc evidence and explicit UNKNOWN/NEEDS VERIFICATION markers; promote to ACTIVE after operator verification of live HubSpot schema/property configuration. |
| HubSpot Sync Contract Runtime | `/docs/runtime/hubspot_sync_contract.md` | PARTIAL | API-mediated CRM onboarding flow | `/docs/crm/hubspot/hubspot_kb_rev03.md` | RUNTIME006 | REV01 created documenting API-mediated sync boundary and partial-sync diagnostics; promote to ACTIVE after operator verification of live runtime behavior. |
| Lead Signal Contract Runtime | `/docs/runtime/lead_signal_contract.md` | PARTIAL | `/api/lead-signal` request/response contract | `/docs/crm/hubspot/hubspot_kb_rev03.md`, `/docs/system/guardrails.md` | RUNTIME005 | REV01 created with source-backed contract boundaries and explicit UNKNOWN/NEEDS VERIFICATION markers; promote to ACTIVE after operator verification of live runtime behavior. |
| Request ID Contract Runtime | `/docs/runtime/request_id_contract.md` | PARTIAL | End-to-end correlation and diagnostics | `/docs/system/plan.md`, `/docs/codex/QA_CHECKLIST.md` | RUNTIME005 | REV01 created with server-generated requestId propagation evidence and explicit referenceId ambiguity markers; promote to ACTIVE after operator verification. |
| QRLanding Runtime | `/docs/runtime/qrlanding_runtime.md` | MISSING | Step102 QR funnel runtime behavior | `/docs/system/step-current.md`, `/docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md` | RUNTIME002 | Runtime contract should describe operations without changing funnel design authority. |
| Scheduling Ownership Runtime | `/docs/runtime/scheduling_ownership.md` | PARTIAL | Scheduling capture and ownership/confirmation boundary | `/docs/system/master-task-register.md`, `/docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md` | RUNTIME007 | REV01 created with request-vs-confirmed semantics and explicit UNKNOWN/NEEDS VERIFICATION markers; promote to ACTIVE after operator verification of live scheduling operations. |
| Deployment Validation SOP Runtime | `/docs/runtime/deployment_validation.md` | PARTIAL | Build/deploy validation discipline | `/docs/system/plan.md`, `/docs/codex/QA_CHECKLIST.md` | QA001 | REV01 created with runtime validation gates and explicit UNKNOWN / NEEDS VERIFICATION markers; promote to ACTIVE after operator verification in live deployment operations. |

## Follow-Up Runtime Task Queue

- RUNTIME002 — Cloudflare Runtime Contract
- RUNTIME003 — Stripe Runtime Contract
- RUNTIME004 — Email Runtime Contracts
- RUNTIME005 — Lead Signal + requestId Contracts
- RUNTIME006 — HubSpot Runtime Contracts
- RUNTIME007 — Scheduling Ownership Contract
- QA001 — Deployment Validation SOP
