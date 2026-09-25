# LEAD-FIX002 — Lead Signal Notification and Persistence Reliability

**Revision:** REV01  
**Status:** OPERATOR-AUTHORIZED FOR EXECUTION  
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01  
**Repository:** buffalonychris/wnyhomesecurity  
**Expected Branch:** codex/lead-fix002-lead-signal-reliability  
**Task Type:** Protected lead-runtime reliability implementation

## 1. Objective

Separate non-actionable telemetry from actionable lead processing and harden actionable submission success semantics so required persistence failures cannot be presented to the customer as a normal successful submission.

This is reliability hardening. The initiating audit found no confirmed historical lost actionable lead in the reviewed sample.

## 2. Established initiating findings

1. `qrlanding_view` can generate an operator `[WNYHS Lead Signal]` email even though no lead has been submitted.
2. `estimate_form_started` can generate the same operator lead email before submission.
3. Historical operator email review also showed non-actionable funnel events such as `fit_check_completed` and `quote_generated` entering the operator lead-signal email stream.
4. These events may still be required for telemetry/attribution and must not be deleted merely to suppress email.
5. At minimum, `qr_estimate_requested` and `callback_requested` are actionable lead events.
6. Current source audit found that the protected lead endpoint can return HTTP success while downstream HubSpot synchronization reports failure.
7. Frontend code can interpret that HTTP success as normal customer submission success.
8. Existing orchestration may perform notification/scheduling side effects before required CRM persistence success is established.
9. Live reconciliation found 19 actionable operator emails since 2026-05-01 and HubSpot persistence evidence for all 19 through either current deal request ID or preserved HubSpot note.
10. Deal reuse may overwrite the current `wny_request_id` field while historical request IDs remain preserved in notes. Do not redesign this architecture unless required for the bounded reliability objective.

## 3. Execution gates

Before any source edit:

1. Confirm working tree is clean and current `main` matches `origin/main`.
2. Confirm current `main` contains merge commit `915f878b3ca8a646968f95f268a96d9d980c4633` or a newer descendant.
3. Create and switch to:
   `codex/lead-fix002-lead-signal-reliability`
4. Read the minimum necessary authority/runtime documents:
   - `AGENTS.md`
   - `docs/system/project.md`
   - `docs/system/guardrails.md`
   - `docs/system/agent.md`
   - `docs/system/plan.md`
   - `docs/system/step-current.md`
   - `docs/system/master-task-register.md`
   - `docs/codex/CODEX_TASK_REGISTER_RULES.md`
   - `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
   - `docs/runtime/lead_signal_contract.md`
   - `docs/runtime/request_id_contract.md`
   - `docs/runtime/qrlanding_runtime.md`
   - `docs/runtime/hubspot_sync_contract.md`
   - `docs/runtime/scheduling_ownership.md` only if scheduling behavior is touched
5. Inspect current implementations of:
   - `functions/api/lead-signal.ts`
   - `api/lead-signal.ts`
   - `src/lib/hubspotLeadSignal.ts`
   - `src/pages/QrLanding.tsx`
   - `src/components/CanonicalEstimateRequestForm.tsx`
   - `src/newsite/pages/NewSiteCallback.tsx`
   - `src/newsite/pages/NewSiteOnSiteQuote.tsx`
6. Determine which server implementation is production-authoritative and whether the second implementation requires parity.
7. Inspect relevant existing tests before changing behavior.
8. If `LEAD-FIX002` is absent from the Master Task Register, add it as `ACTIVE` using the current full MTR schema before source edits.
9. If it exists as `READY`, promote only `LEAD-FIX002` to `ACTIVE` before source edits.
10. If an existing task definition or higher-authority contract materially conflicts with this work order, STOP and report the conflict.

## 4. Event policy

### Telemetry / non-actionable for lead notification purposes

At minimum:
- `qrlanding_view`
- `estimate_form_started`
- `fit_check_completed`
- `quote_generated`

For these events:
- preserve required telemetry/attribution behavior;
- do not send operator sales-lead email;
- do not send customer lead acknowledgement;
- do not create lead-only scheduling artifacts;
- do not perform actionable lead CRM contact/deal writes unless a current higher-authority contract explicitly requires a specific non-lead CRM record.

Do not assume every other event is telemetry. Inspect current usage.

### Actionable lead intake

At minimum:
- `qr_estimate_requested`
- `callback_requested`

For actionable events:
- preserve required operator notification;
- preserve required customer acknowledgement behavior;
- preserve API-mediated HubSpot orchestration;
- preserve canonical requestId correlation;
- preserve intended scheduling/callback behavior.

If another current event clearly represents an actual customer request requiring follow-up, preserve it and document it.

## 5. Required implementation behavior

### A. Notification gating

Implement the smallest maintainable explicit event classification/gating mechanism. Prefer a small helper, set, or policy map over scattered repeated conditionals.

The implementation should make clear which events:
1. are telemetry-only;
2. are actionable;
3. generate operator lead notifications;
4. generate customer acknowledgements;
5. perform actionable CRM persistence;
6. may create scheduling artifacts.

Do not create a new framework/event-bus architecture.

### B. Actionable success boundary

A real actionable lead may return normal customer-success only when the server has enough durable evidence that WNYHS retained the lead for follow-up.

Do not make email delivery the sole persistence authority.

Do not introduce a new database, queue, SaaS dependency, or persistence service.

If HubSpot is the current canonical durable lead persistence mechanism under current contracts, HubSpot persistence failure must not be represented as fully successful actionable submission.

If an already-approved durable fallback exists and preserves the complete actionable lead record, it may satisfy the success boundary; document and test it. Do not invent a fallback.

### C. Failure semantics

For actionable persistence failure:
- return a safe failure response;
- preserve canonical server-generated requestId when available;
- do not expose provider internals, secrets, stack traces, tokens, or sensitive error payloads;
- preserve existing alternate-contact guidance in frontend failure handling.

### D. Side-effect ordering

Inspect ordering of:
- telemetry processing;
- HubSpot persistence;
- operator notification;
- customer acknowledgement;
- scheduling creation.

Telemetry-only events must not trigger actionable lead side effects.

For actionable events, required persistence must be established before the frontend can present normal success.

### E. Scheduling

If telemetry events can currently create scheduling records, stop that behavior.

For estimate submissions:
- preserve pending-owner-confirmation semantics;
- do not auto-confirm appointments;
- do not create new calendar authority.

For callback requests:
- preserve intended callback behavior.

Do not redesign scheduling ownership.

### F. HubSpot

Preserve:
- API-mediated writes;
- existing contact/deal/note orchestration unless minimal correctness change is required;
- pipeline/stage identifiers;
- normalization rules;
- requestId traceability.

Forbidden:
- schema changes;
- new properties;
- pipeline/stage changes;
- client-side HubSpot writes;
- historical cleanup/rewriting.

### G. Request ID

Preserve canonical server-generated requestId authority.

Do not confuse browser/session attribution IDs with backend canonical request IDs.

Actionable failure responses should preserve safe canonical requestId correlation when available.

## 6. Expected target files

Modify only files actually required. Expected candidates include:

- `docs/system/master-task-register.md`
- `functions/api/lead-signal.ts`
- `api/lead-signal.ts` only if parity is required
- `src/lib/hubspotLeadSignal.ts`
- `src/components/CanonicalEstimateRequestForm.tsx`
- `src/pages/QrLanding.tsx` only if required
- `src/newsite/pages/NewSiteCallback.tsx` only if required
- `src/newsite/pages/NewSiteOnSiteQuote.tsx` only if required
- relevant existing tests or one narrowly scoped new lead-signal test
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/qrlanding_runtime.md`
- `docs/runtime/hubspot_sync_contract.md` only if authoritative persistence semantics change
- `docs/runtime/scheduling_ownership.md` only if needed
- `docs/audits/lead_fix002_implementation_rev01.md`

Do not modify every candidate automatically.

## 7. Forbidden scope

Do not:
- change Stripe/payment logic or webhooks;
- change pricing/packages;
- change HubSpot schema, pipelines, or stages;
- add third-party services or databases;
- change secrets or environment configuration unless explicitly required by an existing contract;
- redesign routes, QR landing page, forms, navigation, or visual styling;
- change unrelated customer copy;
- hardcode colors;
- redesign scheduling ownership;
- auto-confirm appointments;
- delete telemetry merely to suppress notifications;
- remove attribution continuity;
- perform historical CRM cleanup;
- refactor unrelated code;
- merge or deploy.

## 8. Required tests

Prove at minimum:

1. `qrlanding_view`
   - telemetry remains accepted where contracted;
   - no operator lead notification;
   - no customer acknowledgement;
   - no actionable scheduling artifact.

2. `estimate_form_started`
   - remains accepted where contracted;
   - no operator lead notification;
   - no customer acknowledgement;
   - no lead-only scheduling artifact.

3. `fit_check_completed` and `quote_generated`
   - no operator lead notification unless higher-authority runtime proves either is actionable.

4. `qr_estimate_requested`
   - retains actionable processing;
   - retains operator notification;
   - retains required CRM orchestration;
   - preserves requestId behavior.

5. `callback_requested`
   - retains actionable processing/notification and intended callback behavior.

6. actionable lead + required persistence failure
   - does not return a response interpreted by frontend as normal successful submission;
   - returns safe failure semantics with requestId correlation.

7. actionable lead + operator email failure after durable persistence
   - matches deliberately documented success boundary.

8. actionable lead + customer acknowledgement email failure after durable persistence
   - matches deliberately documented success boundary.

9. unknown/malformed event
   - safely validated according to current contract.

10. frontend failure path
   - normal success state is not shown after required persistence failure;
   - alternate contact guidance remains available.

11. scheduling
   - telemetry-only events create no actionable scheduling side effects;
   - owner-confirmation semantics remain intact.

## 9. Validation

Run at minimum:

```
git status
npm test -- --run
npm run build
git diff --check
```

If the repository's working test script differs, use the existing package script and report the exact command.

Also inspect:

```
rg -n "qrlanding_view|estimate_form_started|fit_check_completed|quote_generated|qr_estimate_requested|callback_requested" functions api src tests docs/runtime

rg -n "sendLeadSignalEmail|sendCustomerAcknowledgementEmail|createPendingOwnerConfirmationAppointmentRequest|hubspotStatus|notificationStatus" functions/api/lead-signal.ts api/lead-signal.ts

rg -n "<<<<<<<|=======|>>>>>>>" .
```

Review final changed-file list for accidental:
- Stripe/payment changes;
- HubSpot schema/config changes;
- route/UI redesign;
- visual-system changes;
- secret/environment changes;
- unrelated cleanup.

## 10. Documentation

Update `docs/runtime/lead_signal_contract.md` to define:
- telemetry events;
- actionable events;
- operator notification eligibility;
- customer acknowledgement eligibility;
- CRM persistence eligibility;
- scheduling eligibility;
- customer-success boundary;
- failure semantics;
- requestId behavior.

Update `docs/runtime/qrlanding_runtime.md` only as needed to preserve and clarify:

```
qrlanding_view
→ telemetry only

estimate_form_started
→ telemetry only

actual estimate submission / qr_estimate_requested
→ actionable lead processing
```

Create:
`docs/audits/lead_fix002_implementation_rev01.md`

Record:
- task ID;
- pre-change defect;
- final event classification;
- notification behavior;
- persistence success boundary;
- scheduling behavior;
- requestId behavior;
- exact files changed;
- tests/build results;
- no confirmed historical lost actionable lead in initiating audit;
- HubSpot schema/pipeline untouched;
- Stripe untouched;
- no new persistence provider/database.

## 11. Master Task Register minimum task definition

Task ID: `LEAD-FIX002`  
Task Name: `Lead Signal Notification and Persistence Reliability`  
Status during implementation: `ACTIVE`  
Category: `LEAD`  
Controlling Context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`

Purpose:
Separate telemetry from actionable lead notifications and prevent required persistence failures from masquerading as successful customer submissions.

Allowed scope:
- protected lead-signal classification;
- notification gating;
- actionable persistence-result semantics;
- telemetry preservation;
- requestId-safe failure handling;
- minimal scheduling side-effect gating;
- tests/runtime docs/audit/MTR evidence.

Forbidden scope:
- HubSpot schema/pipeline changes;
- Stripe/payment changes;
- scheduling redesign;
- funnel/route/UI redesign;
- new persistence systems;
- historical CRM cleanup;
- unrelated refactoring.

Operator decision:
No additional decision required unless a material governance conflict is discovered.

## 12. Exit criteria

Implementation is complete only when:

1. telemetry-only events no longer generate operator sales-lead emails;
2. required telemetry remains intact;
3. telemetry-only events do not create actionable scheduling artifacts;
4. valid estimate/callback submissions retain actionable processing and notifications;
5. required persistence failure cannot produce normal customer success;
6. safe requestId correlation is preserved;
7. HubSpot schema/pipeline remain unchanged;
8. Stripe/payment remain unchanged;
9. requestId authority remains unchanged;
10. no new persistence provider/database is introduced;
11. tests pass;
12. build passes;
13. runtime docs match behavior;
14. implementation audit is complete;
15. MTR evidence is truthful;
16. task branch is committed/pushed;
17. one DRAFT PR to `main` is opened if GitHub CLI/auth permits.

## 13. Delivery

Use one branch:
`codex/lead-fix002-lead-signal-reliability`

Preferred PR title:
`LEAD-FIX002 - Lead Signal Notification and Persistence Reliability`

Do not merge.
Do not deploy.

Final Codex summary must include:
1. task status;
2. branch;
3. commit SHA;
4. draft PR number/URL;
5. exact files changed;
6. final event classification;
7. operator notification behavior before/after;
8. customer success/persistence boundary before/after;
9. scheduling behavior before/after;
10. requestId behavior;
11. tests/results;
12. build result;
13. telemetry preservation confirmation;
14. actionable estimate/callback notification confirmation;
15. HubSpot schema/pipeline untouched;
16. Stripe/payment untouched;
17. no new persistence service/database;
18. remaining UNKNOWN;
19. exact operator smoke tests required after deployment.

STOP after LEAD-FIX002.
