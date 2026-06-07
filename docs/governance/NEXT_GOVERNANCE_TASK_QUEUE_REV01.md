# Next Governance Task Queue REV01

Status: Proposed
Owner: WNY Home Security
Document Type: Governance Task Queue

---

## Purpose

This document defines the next ready-to-run governance and runtime inventory tasks for the remaining reconciliation work.

This queue is planning material only. It does not execute GOV006, GOV007, or any runtime inventory task, and it does not authorize code, route, UI, protected-system, or live-service changes by itself.

Each task below must be run as its own bounded Codex work order on its own branch. Each PR must target `main` only and must not be merged by Codex.

---

## Queue Rules

- Run one task per branch and one PR per task.
- Start each task from current `main`.
- Read the required authority and reference files before editing.
- Edit only the target files listed for that task.
- Preserve protected-system boundaries.
- Do not change code, UI, routes, deployment behavior, Stripe behavior, HubSpot behavior, Cloudflare config, Resend config, Google Workspace config, or runtime behavior unless a future task explicitly authorizes that change.
- Runtime inventory tasks are documentation-only inventory tasks. They may document observed current configuration, but they must not change the service configuration they inspect.
- If a service cannot be inspected without credentials, elevated access, or operator approval, stop and report the access requirement instead of guessing.
- PR rule for every task: target `main` only, do not merge.

---

## GOV006 - QR Step102 Reconciliation

### Task ID

GOV006

### Purpose

Reconcile `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md` so it is clearly historical/supporting QRLanding lineage unless explicitly promoted by the current operational context or an active bounded work order.

Resolve preserved legacy `ACTIVE` and `Controlling Implementation Step` wording without changing QRLanding implementation behavior.

### Target Files

- `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `docs/DOCUMENT_CATALOG.md`

### Reference Files

- `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`
- `docs/governance/AUTHORITY-MAP-REV01.md`
- `docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md`
- `docs/governance/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`
- `docs/governance/GOVERNANCE_RECONCILIATION_TASK_PLAN_REV01.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/runtime/qrlanding_runtime.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/request_id_contract.md`

### Allowed Scope

- Documentation-only wording reconciliation in the QR Step102 doc and catalog entry.
- Preserve QR acquisition intent, historical scope, completion criteria, and lineage content.
- Mark legacy active/controller implementation language as historical/reference language.
- Clarify that QR Step102 does not authorize route, CRM, lead-signal, scheduling, attribution, or runtime changes by itself.

### Forbidden Scope

- No code changes.
- No UI changes.
- No route changes.
- No runtime behavior changes.
- No Stripe changes.
- No HubSpot changes.
- No Cloudflare config changes.
- No deployment behavior changes.
- No task-register edits unless a revised work order explicitly authorizes them.
- No design-system, solution-system, or runtime-doc edits.
- No deletion of historical Step102 content.
- No implementation-detail resolution beyond authority wording.

### Validation Expectations

Run:

```powershell
git status
git diff -- "docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md" docs/DOCUMENT_CATALOG.md
rg -n "Step102|SUPPORTING REFERENCE|HISTORICAL BASELINE|CONFLICTING / NEEDS RECONCILIATION|ACTIVE|Controlling Implementation Step|Current Use|Do Not Use For" "docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md" docs/DOCUMENT_CATALOG.md
git diff --check
```

Do not run `npm run build` unless the future work order explicitly requires it.

### Required Output

- Files changed
- Summary of reconciliation
- Confirmation historical content was preserved
- Confirmation no implementation files changed
- Confirmation protected systems were untouched
- Validation run
- PR created: yes/no
- PR number
- PR link
- Source branch
- Base branch
- Merge target

### Stop Conditions

- Step102 wording requires implementation or runtime behavior decisions.
- The catalog classification conflicts with higher-authority governance.
- Any required change would touch code, runtime docs, protected systems, routes, or service configuration.
- PR base would not be `main`.

### Branch Name

`gov006-qr-step102-reconciliation`

### Codex Prompt Outline

```text
SYSTEM CONTEXT
You are working inside the WNY Home Security repo.

TASK ID
GOV006

TASK TYPE
docs-only governance reconciliation

OBJECTIVE
Reconcile QR Step102 authority wording so it is historical/supporting lineage only unless promoted by current context or a bounded active work order.

TARGET FILES
Edit only:
- docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md
- docs/DOCUMENT_CATALOG.md

REFERENCE FILES
Read the authority and reference files listed in NEXT_GOVERNANCE_TASK_QUEUE_REV01.

FORBIDDEN SCOPE
No code, UI, route, runtime, Stripe, HubSpot, Cloudflare, deployment, task-register, design-system, solution-system, or runtime-doc edits.

VALIDATION
Run only the validation commands listed for GOV006.

PR RULE
Create a PR targeting main only. Do not merge.
```

---

## GOV007 - Step201 Reconciliation

### Task ID

GOV007

### Purpose

Reconcile `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md` so it is clearly historical/supporting email lineage unless explicitly promoted by the current operational context or an active bounded work order.

Resolve preserved legacy `Active / Controlling for outbound email, Resend, server email endpoints, and audit-copy behavior` wording without changing email runtime behavior.

### Target Files

- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `docs/DOCUMENT_CATALOG.md`

### Reference Files

- `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`
- `docs/governance/AUTHORITY-MAP-REV01.md`
- `docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md`
- `docs/governance/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`
- `docs/governance/GOVERNANCE_RECONCILIATION_TASK_PLAN_REV01.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/runtime/resend_runtime.md`
- `docs/runtime/cloudflare_email_routing.md`
- `docs/runtime/deployment_validation.md`

### Allowed Scope

- Documentation-only wording reconciliation in the Step201 doc and catalog entry.
- Preserve historical email architecture intent, audit-copy posture, and lineage content.
- Mark legacy controller language as historical/reference language.
- Clarify that Step201 does not authorize email runtime, Resend, endpoint, DNS, Cloudflare Email Routing, or secret changes by itself.

### Forbidden Scope

- No code changes.
- No UI changes.
- No route changes.
- No runtime behavior changes.
- No Stripe changes.
- No HubSpot changes.
- No Cloudflare config changes.
- No deployment behavior changes.
- No task-register edits unless a revised work order explicitly authorizes them.
- No design-system, solution-system, or runtime-doc edits.
- No deletion of historical Step201 content.
- No implementation-detail resolution beyond authority wording.

### Validation Expectations

Run:

```powershell
git status
git diff -- docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md docs/DOCUMENT_CATALOG.md
rg -n "Step201|SUPPORTING REFERENCE|HISTORICAL BASELINE|CONFLICTING / NEEDS RECONCILIATION|Active / Controlling|Current Use|Do Not Use For" docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md docs/DOCUMENT_CATALOG.md
git diff --check
```

Do not run `npm run build` unless the future work order explicitly requires it.

### Required Output

- Files changed
- Summary of reconciliation
- Confirmation historical content was preserved
- Confirmation no implementation files changed
- Confirmation protected systems were untouched
- Validation run
- PR created: yes/no
- PR number
- PR link
- Source branch
- Base branch
- Merge target

### Stop Conditions

- Step201 wording requires implementation or runtime behavior decisions.
- The catalog classification conflicts with higher-authority governance.
- Any required change would touch code, runtime docs, protected systems, routes, or service configuration.
- PR base would not be `main`.

### Branch Name

`gov007-step201-reconciliation`

### Codex Prompt Outline

```text
SYSTEM CONTEXT
You are working inside the WNY Home Security repo.

TASK ID
GOV007

TASK TYPE
docs-only governance reconciliation

OBJECTIVE
Reconcile Step201 authority wording so it is historical/supporting lineage only unless promoted by current context or a bounded active work order.

TARGET FILES
Edit only:
- docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md
- docs/DOCUMENT_CATALOG.md

REFERENCE FILES
Read the authority and reference files listed in NEXT_GOVERNANCE_TASK_QUEUE_REV01.

FORBIDDEN SCOPE
No code, UI, route, runtime, Stripe, HubSpot, Cloudflare, deployment, task-register, design-system, solution-system, or runtime-doc edits.

VALIDATION
Run only the validation commands listed for GOV007.

PR RULE
Create a PR targeting main only. Do not merge.
```

---

## RUNTIME-AUDIT-001 - Cloudflare Current Config Inventory

### Task ID

RUNTIME-AUDIT-001

### Purpose

Create a read-only inventory of current Cloudflare configuration relevant to WNY Home Security runtime ownership, DNS, deployment, pages/workers, environment bindings, email routing, and security posture.

This is an inventory task only. It must not change Cloudflare configuration.

### Target Files

- `docs/runtime/cloudflare_current_config_inventory_rev01.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/system/master-task-register.md`

### Reference Files

- `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`
- `docs/governance/AUTHORITY-MAP-REV01.md`
- `docs/governance/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/cloudflare_env.md`
- `docs/runtime/cloudflare_email_routing.md`
- `docs/runtime/deployment_validation.md`
- `docs/runtime/protected_runtime_contract.md`

### Allowed Scope

- Documentation-only inventory of current Cloudflare settings.
- Read-only inspection of Cloudflare UI, CLI output, or operator-provided screenshots/exports if explicitly authorized.
- Record zones, DNS records at a non-secret level, Pages/project linkage, deployment settings, environment variable names without values, email-routing posture, and security controls.
- Mark unknown or inaccessible areas as `Not inspected` with the reason.

### Forbidden Scope

- No Cloudflare config changes.
- No DNS changes.
- No deployment setting changes.
- No worker, Pages, or route changes.
- No code changes.
- No runtime behavior changes.
- No secrets or secret values.
- No Stripe changes.
- No HubSpot changes.
- No Resend changes.
- No Google Workspace changes.
- No new runtime contract creation.

### Validation Expectations

Run:

```powershell
git status
git diff -- docs/runtime/cloudflare_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md
rg -n "Cloudflare|Current Config Inventory|Not inspected|No configuration changes|No secret values" docs/runtime/cloudflare_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md
git diff --check
```

Do not run `npm run build` unless the future work order explicitly requires it.

### Required Output

- Files changed
- Inventory sections completed
- Areas not inspected and why
- Confirmation no Cloudflare changes were made
- Confirmation no secret values were recorded
- Confirmation protected systems were untouched
- Validation run
- PR created: yes/no
- PR number
- PR link
- Source branch
- Base branch
- Merge target

### Stop Conditions

- Cloudflare access is unavailable.
- Inspection would require changing configuration.
- Secret values would need to be exposed.
- The target file list must expand beyond the allowed docs.
- PR base would not be `main`.

### Branch Name

`runtime-audit-001-cloudflare-current-config`

### Codex Prompt Outline

```text
SYSTEM CONTEXT
You are working inside the WNY Home Security repo.

TASK ID
RUNTIME-AUDIT-001

TASK TYPE
docs-only runtime inventory

OBJECTIVE
Create a read-only Cloudflare current config inventory document. Do not change Cloudflare configuration.

TARGET FILES
Edit only the target files listed for RUNTIME-AUDIT-001 in NEXT_GOVERNANCE_TASK_QUEUE_REV01.

REFERENCE FILES
Read the authority and runtime reference files listed for this task.

FORBIDDEN SCOPE
No Cloudflare changes, DNS changes, deployment behavior changes, code changes, runtime behavior changes, secret values, Stripe changes, HubSpot changes, Resend changes, or Google Workspace changes.

VALIDATION
Run only the validation commands listed for RUNTIME-AUDIT-001.

PR RULE
Create a PR targeting main only. Do not merge.
```

---

## RUNTIME-AUDIT-002 - HubSpot Current Config Inventory

### Task ID

RUNTIME-AUDIT-002

### Purpose

Create a read-only inventory of current HubSpot configuration relevant to WNY Home Security CRM ownership, contact/deal properties, pipeline/stage IDs, forms, lists, workflows, and API integration posture.

This is an inventory task only. It must not change HubSpot configuration, schema, properties, pipeline, or frontend/API write paths.

### Target Files

- `docs/runtime/hubspot_current_config_inventory_rev01.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/system/master-task-register.md`

### Reference Files

- `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`
- `docs/governance/AUTHORITY-MAP-REV01.md`
- `docs/governance/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/hubspot_properties.md`
- `docs/runtime/hubspot_sync_contract.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/protected_runtime_contract.md`

### Allowed Scope

- Documentation-only inventory of current HubSpot settings.
- Read-only inspection of HubSpot UI, API metadata, or operator-provided screenshots/exports if explicitly authorized.
- Record object model, property names, pipeline/stage IDs, forms, lists, workflows, integration tokens by name only, and known API-layer touchpoints.
- Verify inventory language against HubSpot REV03 as authoritative.
- Mark unknown or inaccessible areas as `Not inspected` with the reason.

### Forbidden Scope

- No HubSpot schema changes.
- No HubSpot property changes.
- No HubSpot pipeline or stage changes.
- No workflow changes.
- No direct frontend or client write path to HubSpot.
- No bypass of `/api/lead-signal`.
- No code changes.
- No runtime behavior changes.
- No secrets or token values.
- No Stripe changes.
- No Cloudflare changes.
- No Resend changes.
- No Google Workspace changes.
- No new runtime contract creation.

### Validation Expectations

Run:

```powershell
git status
git diff -- docs/runtime/hubspot_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md
rg -n "HubSpot|Current Config Inventory|REV03|/api/lead-signal|Not inspected|No configuration changes|No secret values" docs/runtime/hubspot_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md
git diff --check
```

Do not run `npm run build` unless the future work order explicitly requires it.

### Required Output

- Files changed
- Inventory sections completed
- Areas not inspected and why
- Confirmation no HubSpot changes were made
- Confirmation `/api/lead-signal` boundary was preserved
- Confirmation no secret values were recorded
- Confirmation protected systems were untouched
- Validation run
- PR created: yes/no
- PR number
- PR link
- Source branch
- Base branch
- Merge target

### Stop Conditions

- HubSpot access is unavailable.
- Inspection would require changing configuration.
- REV03 conflicts with observed configuration and no reconciliation task exists.
- Secret values would need to be exposed.
- Any task step would bypass `/api/lead-signal`.
- PR base would not be `main`.

### Branch Name

`runtime-audit-002-hubspot-current-config`

### Codex Prompt Outline

```text
SYSTEM CONTEXT
You are working inside the WNY Home Security repo. HubSpot REV03 is authoritative.

TASK ID
RUNTIME-AUDIT-002

TASK TYPE
docs-only runtime inventory

OBJECTIVE
Create a read-only HubSpot current config inventory document. Do not change HubSpot configuration.

TARGET FILES
Edit only the target files listed for RUNTIME-AUDIT-002 in NEXT_GOVERNANCE_TASK_QUEUE_REV01.

REFERENCE FILES
Read the authority, HubSpot REV03, and runtime reference files listed for this task.

FORBIDDEN SCOPE
No HubSpot schema, property, pipeline, workflow, API write-path, code, runtime, Stripe, Cloudflare, Resend, or Google Workspace changes. No direct frontend or client write path to HubSpot.

VALIDATION
Run only the validation commands listed for RUNTIME-AUDIT-002.

PR RULE
Create a PR targeting main only. Do not merge.
```

---

## RUNTIME-AUDIT-003 - Resend Current Config Inventory

### Task ID

RUNTIME-AUDIT-003

### Purpose

Create a read-only inventory of current Resend configuration relevant to WNY Home Security email sending, verified domains, sender identities, API key naming, webhook posture, and operator/customer email boundaries.

This is an inventory task only. It must not change Resend configuration or email runtime behavior.

### Target Files

- `docs/runtime/resend_current_config_inventory_rev01.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/system/master-task-register.md`

### Reference Files

- `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`
- `docs/governance/AUTHORITY-MAP-REV01.md`
- `docs/governance/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/resend_runtime.md`
- `docs/runtime/cloudflare_email_routing.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`

### Allowed Scope

- Documentation-only inventory of current Resend settings.
- Read-only inspection of Resend UI, API metadata, or operator-provided screenshots/exports if explicitly authorized.
- Record domains, sender identities, API key names without values, webhook settings, suppression/bounce posture, and email ownership notes.
- Mark unknown or inaccessible areas as `Not inspected` with the reason.

### Forbidden Scope

- No Resend config changes.
- No domain, sender, DNS, webhook, or API key changes.
- No email runtime behavior changes.
- No code changes.
- No secrets or API key values.
- No Cloudflare changes.
- No HubSpot changes.
- No Stripe changes.
- No Google Workspace changes.
- No new runtime contract creation.

### Validation Expectations

Run:

```powershell
git status
git diff -- docs/runtime/resend_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md
rg -n "Resend|Current Config Inventory|Not inspected|No configuration changes|No secret values" docs/runtime/resend_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md
git diff --check
```

Do not run `npm run build` unless the future work order explicitly requires it.

### Required Output

- Files changed
- Inventory sections completed
- Areas not inspected and why
- Confirmation no Resend changes were made
- Confirmation no email runtime behavior changed
- Confirmation no secret values were recorded
- Confirmation protected systems were untouched
- Validation run
- PR created: yes/no
- PR number
- PR link
- Source branch
- Base branch
- Merge target

### Stop Conditions

- Resend access is unavailable.
- Inspection would require changing configuration.
- Secret values would need to be exposed.
- Observed email posture conflicts with current runtime docs and no reconciliation task exists.
- PR base would not be `main`.

### Branch Name

`runtime-audit-003-resend-current-config`

### Codex Prompt Outline

```text
SYSTEM CONTEXT
You are working inside the WNY Home Security repo.

TASK ID
RUNTIME-AUDIT-003

TASK TYPE
docs-only runtime inventory

OBJECTIVE
Create a read-only Resend current config inventory document. Do not change Resend configuration or email runtime behavior.

TARGET FILES
Edit only the target files listed for RUNTIME-AUDIT-003 in NEXT_GOVERNANCE_TASK_QUEUE_REV01.

REFERENCE FILES
Read the authority and runtime reference files listed for this task.

FORBIDDEN SCOPE
No Resend config, domain, sender, DNS, webhook, API key, email runtime, code, Cloudflare, HubSpot, Stripe, or Google Workspace changes.

VALIDATION
Run only the validation commands listed for RUNTIME-AUDIT-003.

PR RULE
Create a PR targeting main only. Do not merge.
```

---

## RUNTIME-AUDIT-004 - Stripe Current Config Inventory

### Task ID

RUNTIME-AUDIT-004

### Purpose

Create a read-only inventory of current Stripe configuration relevant to WNY Home Security payment ownership, products/prices, checkout posture, webhook endpoints, deposit/payment verification, and secret-management boundaries.

This is an inventory task only. It must not change Stripe configuration or payment behavior.

### Target Files

- `docs/runtime/stripe_current_config_inventory_rev01.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/system/master-task-register.md`

### Reference Files

- `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`
- `docs/governance/AUTHORITY-MAP-REV01.md`
- `docs/governance/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/stripe_runtime.md`
- `docs/runtime/protected_runtime_contract.md`

### Allowed Scope

- Documentation-only inventory of current Stripe settings.
- Read-only inspection of Stripe UI, CLI metadata, or operator-provided screenshots/exports if explicitly authorized.
- Record account mode, product/price IDs at a non-secret level, checkout settings, webhook endpoint URLs, webhook event names, payment verification posture, and environment variable names without values.
- Mark unknown or inaccessible areas as `Not inspected` with the reason.

### Forbidden Scope

- No Stripe config changes.
- No product, price, checkout, payment link, webhook, tax, payout, or account changes.
- No client-side payment confirmation logic.
- No payment success authority from redirect URLs.
- No code changes.
- No runtime behavior changes.
- No secrets or secret values.
- No HubSpot changes.
- No Cloudflare changes.
- No Resend changes.
- No Google Workspace changes.
- No new runtime contract creation.

### Validation Expectations

Run:

```powershell
git status
git diff -- docs/runtime/stripe_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md
rg -n "Stripe|Current Config Inventory|webhook|server-side|Not inspected|No configuration changes|No secret values" docs/runtime/stripe_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md
git diff --check
```

Do not run `npm run build` unless the future work order explicitly requires it.

### Required Output

- Files changed
- Inventory sections completed
- Areas not inspected and why
- Confirmation no Stripe changes were made
- Confirmation payment verification boundaries were preserved
- Confirmation no secret values were recorded
- Confirmation protected systems were untouched
- Validation run
- PR created: yes/no
- PR number
- PR link
- Source branch
- Base branch
- Merge target

### Stop Conditions

- Stripe access is unavailable.
- Inspection would require changing configuration.
- Secret values would need to be exposed.
- Observed payment posture conflicts with current runtime docs and no reconciliation task exists.
- Any step would rely on redirect URLs as payment confirmation.
- PR base would not be `main`.

### Branch Name

`runtime-audit-004-stripe-current-config`

### Codex Prompt Outline

```text
SYSTEM CONTEXT
You are working inside the WNY Home Security repo.

TASK ID
RUNTIME-AUDIT-004

TASK TYPE
docs-only runtime inventory

OBJECTIVE
Create a read-only Stripe current config inventory document. Do not change Stripe configuration or payment behavior.

TARGET FILES
Edit only the target files listed for RUNTIME-AUDIT-004 in NEXT_GOVERNANCE_TASK_QUEUE_REV01.

REFERENCE FILES
Read the authority and runtime reference files listed for this task.

FORBIDDEN SCOPE
No Stripe config, product, price, checkout, payment link, webhook, tax, payout, account, code, runtime, HubSpot, Cloudflare, Resend, or Google Workspace changes. Do not treat redirects as payment authority.

VALIDATION
Run only the validation commands listed for RUNTIME-AUDIT-004.

PR RULE
Create a PR targeting main only. Do not merge.
```

---

## RUNTIME-AUDIT-005 - Google Workspace Current Config Inventory

### Task ID

RUNTIME-AUDIT-005

### Purpose

Create a read-only inventory of current Google Workspace configuration relevant to WNY Home Security domain identity, email aliases/groups, calendar ownership, account roles, security posture, and integration boundaries.

This is an inventory task only. It must not change Google Workspace configuration or scheduling/email behavior.

### Target Files

- `docs/runtime/google_workspace_current_config_inventory_rev01.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/system/master-task-register.md`

### Reference Files

- `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`
- `docs/governance/AUTHORITY-MAP-REV01.md`
- `docs/governance/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/google_calendar_runtime.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/runtime/scheduling_future_model.md`
- `docs/runtime/cloudflare_email_routing.md`
- `docs/runtime/protected_runtime_contract.md`

### Allowed Scope

- Documentation-only inventory of current Google Workspace settings.
- Read-only inspection of Google Admin, Calendar settings, or operator-provided screenshots/exports if explicitly authorized.
- Record domain status, user/account roles at a non-secret level, groups/aliases, calendar ownership, integration posture, retention/security settings at a high level, and unknown areas.
- Mark unknown or inaccessible areas as `Not inspected` with the reason.

### Forbidden Scope

- No Google Workspace config changes.
- No user, group, alias, calendar, routing, or security setting changes.
- No scheduling behavior changes.
- No email routing changes.
- No code changes.
- No runtime behavior changes.
- No secrets or token values.
- No Cloudflare changes.
- No HubSpot changes.
- No Stripe changes.
- No Resend changes.
- No new runtime contract creation.

### Validation Expectations

Run:

```powershell
git status
git diff -- docs/runtime/google_workspace_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md
rg -n "Google Workspace|Current Config Inventory|Calendar|Not inspected|No configuration changes|No secret values" docs/runtime/google_workspace_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md
git diff --check
```

Do not run `npm run build` unless the future work order explicitly requires it.

### Required Output

- Files changed
- Inventory sections completed
- Areas not inspected and why
- Confirmation no Google Workspace changes were made
- Confirmation no scheduling or email routing behavior changed
- Confirmation no secret values were recorded
- Confirmation protected systems were untouched
- Validation run
- PR created: yes/no
- PR number
- PR link
- Source branch
- Base branch
- Merge target

### Stop Conditions

- Google Workspace access is unavailable.
- Inspection would require changing configuration.
- Secret values would need to be exposed.
- Observed scheduling or email routing posture conflicts with current runtime docs and no reconciliation task exists.
- PR base would not be `main`.

### Branch Name

`runtime-audit-005-google-workspace-current-config`

### Codex Prompt Outline

```text
SYSTEM CONTEXT
You are working inside the WNY Home Security repo.

TASK ID
RUNTIME-AUDIT-005

TASK TYPE
docs-only runtime inventory

OBJECTIVE
Create a read-only Google Workspace current config inventory document. Do not change Google Workspace configuration, scheduling behavior, or email routing behavior.

TARGET FILES
Edit only the target files listed for RUNTIME-AUDIT-005 in NEXT_GOVERNANCE_TASK_QUEUE_REV01.

REFERENCE FILES
Read the authority and runtime reference files listed for this task.

FORBIDDEN SCOPE
No Google Workspace config, user, group, alias, calendar, routing, security setting, scheduling, email routing, code, runtime, Cloudflare, HubSpot, Stripe, or Resend changes.

VALIDATION
Run only the validation commands listed for RUNTIME-AUDIT-005.

PR RULE
Create a PR targeting main only. Do not merge.
```
