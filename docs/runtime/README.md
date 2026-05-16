# Runtime Documentation Foundation

Status: Active Foundation (RUNTIME001)

## Purpose

`/docs/runtime/` is the canonical operational documentation area for runtime systems used by WNY Home Security.

This folder establishes:
- A standardized runtime contract template.
- A runtime ownership map with status tracking.
- A bounded follow-up task queue for contract completion.

## Scope Discipline

RUNTIME001 is documentation-only.

This foundation does **not**:
- Change runtime behavior.
- Modify Stripe logic.
- Modify HubSpot logic.
- Alter UI/routes/features.

## Canonical Foundation Documents

- `runtime_contract_template.md` — required schema for all runtime contracts.
- `runtime_ownership_map.md` — canonical map of runtime systems, owner docs, and follow-up tasks.

## Planned Canonical Runtime Contracts

The following owner docs are tracked as canonical targets and are intentionally not fully authored in RUNTIME001:

- `/docs/runtime/cloudflare_env.md`
- `/docs/runtime/stripe_runtime.md`
- `/docs/runtime/resend_runtime.md`
- `/docs/runtime/cloudflare_email_routing.md`
- `/docs/runtime/hubspot_properties.md`
- `/docs/runtime/hubspot_sync_contract.md`
- `/docs/runtime/lead_signal_contract.md`
- `/docs/runtime/request_id_contract.md`
- `/docs/runtime/qrlanding_runtime.md`
- `/docs/runtime/scheduling_ownership.md`
- `/docs/runtime/deployment_validation.md`

## Authority

This runtime documentation area is subordinate to:
1. `/docs/system/project.md`
2. `/docs/system/agent.md`
3. `/docs/system/plan.md`
4. `/docs/system/guardrails.md`
5. `/docs/system/step-current.md`
6. `/docs/system/master-task-register.md`

If runtime documentation conflicts with higher-authority governance, governance documents win.
