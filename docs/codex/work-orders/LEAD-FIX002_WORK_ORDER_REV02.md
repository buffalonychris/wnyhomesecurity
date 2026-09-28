# LEAD-FIX002 — Lead Signal Notification and Persistence Reliability

**Revision:** REV02  
**Status:** OPERATOR-AUTHORIZED FOR EXECUTION  
**Supersedes:** `docs/codex/work-orders/LEAD-FIX002_WORK_ORDER_REV01.md` only for this narrow post-merge validation-UX amendment  
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01  
**Repository:** buffalonychris/wnyhomesecurity  
**Local Repo:** C:\dev\wnyhomesecurity  
**Expected Branch:** codex/lead-fix002-validation-ux-rev02  
**Category:** LEAD  
**Primary Workstream:** Fit Check System  
**Related Workstreams:** Runtime System; Visual System; Public Content System; Estimate / Quote System

READ MODE: TARGETED  
Search exact IDs/headings first; load only applicable authority and owner sections.

## 1. Objective

Correct the compact onsite-estimate form validation UX discovered during LEAD-FIX002 production smoke testing.

Observed production defect:

- when only the phone number was missing, the form displayed the generic message:
  `Please enter your name, phone number, and service address.`
- the missing field itself was not visually identified;
- the user had to manually inspect multiple required fields to find the actual omission.

Required result:

1. validation must report the actual missing required field or fields precisely;
2. each invalid required field must receive a clear visual error state;
3. the first invalid field must receive focus or be scrolled/focused into view;
4. accessible invalid-state semantics must be provided;
5. correcting a field must clear its field-level invalid state;
6. the compact onsite-estimate form must not submit unless full name, mobile phone, email address, and service/street address are all present;\n7. existing submission payloads, lead-signal semantics, HubSpot behavior, scheduling behavior, requestId behavior, consent behavior, and success states must remain unchanged.

This is a narrow LEAD-FIX002 revision. It does not reopen or redesign the runtime reliability work completed in REV01.

## 2. Authorization and lifecycle

The operator explicitly authorized this revision after observing the production validation defect during LEAD-FIX002 smoke testing.

Codex may:

- reopen only the existing `LEAD-FIX002` MTR record from `DONE` to `ACTIVE` for this REV02 amendment;
- implement only the scope in this work order;
- return the same record to `DONE` after validation passes;
- add truthful REV02 completion evidence to the existing LEAD-FIX002 audit or a clearly labeled REV02 addendum within that same audit.

Do not create a new task ID.

## 3. Required precheck

Before edits:

1. confirm repo is `buffalonychris/wnyhomesecurity`;
2. confirm local path is `C:\dev\wnyhomesecurity`;
3. confirm clean synchronized `main`;
4. confirm merge commit `6dcddec41019cc08d9247cae72249bd4a8495e33` is present in current `main`;
5. create and switch to `codex/lead-fix002-validation-ux-rev02`;
6. confirm `LEAD-FIX002` exists in MTR and is currently `DONE`;
7. promote only `LEAD-FIX002` back to `ACTIVE` for this explicitly authorized revision;
8. stop if current repository authority conflicts with this REV02 work order.

## 4. Required authority / owner documents

Read only the minimum applicable sections from:

- `AGENTS.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- current OPS004 workstream routing standard
- this REV02 work order
- `src/components/CanonicalEstimateRequestForm.tsx`
- `src/styles/canonicalEstimateForm.css`
- only directly relevant tests for the canonical estimate form
- REV01 LEAD-FIX002 audit as reference-only evidence

## 5. Operator-approved Owner Routing Matrix

| Approved concept | Current canonical owner | Exact target | Action | Reason | Alternate-owner exclusion | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Precise required-field validation logic | Canonical estimate intake form | `src/components/CanonicalEstimateRequestForm.tsx` | MODIFY | This component owns the compact onsite-estimate form and current generic validation | Runtime lead-signal code is downstream and must remain unchanged | NO | HIGH |
| Invalid-field visual state | Canonical estimate form stylesheet | `src/styles/canonicalEstimateForm.css` | MODIFY | Existing stylesheet owns visual treatment for this form | Do not alter sitewide token owners; use existing semantic token conventions | NO | HIGH |
| Validation regression coverage | Existing form test surface | existing relevant test file or one narrowly scoped new test file | MODIFY / CREATE | QA must prove exact missing-field behavior and accessibility state | Do not modify unrelated runtime tests | NO | HIGH |
| LEAD-FIX002 lifecycle/evidence | Project Governance | `docs/system/master-task-register.md`; `docs/audits/lead_fix002_implementation_rev01.md` | MODIFY | Existing task and audit remain the durable lineage owner | Do not create a new task ID or parallel audit owner | NO | HIGH |

Operator approval: this matrix is approved as part of REV02.

## 6. Required behavior

For the compact estimate path, validate these required fields independently:

- full name;
- mobile phone;
- service/street address.

### Error message behavior

If exactly one required field is missing, report only that field.

Examples:

- missing phone only → `Please enter your phone number.`
- missing name only → `Please enter your name.`
- missing service address only → `Please enter your service address.`

If multiple required fields are missing, the message may list only the missing fields, in form order. It must never name a field that is already valid.

### Field-level behavior

Each missing required field must:

- receive a visible error state using existing semantic design tokens;
- set `aria-invalid="true"`;
- reference an accessible field-level error message using `aria-describedby` or the repo's existing equivalent;
- clear its invalid/error state when corrected.

On submit with invalid required fields:

- focus the first invalid field;
- if needed, use the existing field ref infrastructure to ensure the field is brought into view;
- do not clear user-entered values.

### Required-field enforcement\n\nThe compact onsite-estimate fields for full name, mobile phone, email address, and service/street address must also use the component's appropriate native required semantics where compatible with the existing form structure. The explicit submit-time validation remains authoritative for the exact message, field highlighting, and focus behavior.\n\n### Existing communication-permission validation

Preserve existing contact-method and communication-authorization validation behavior. Do not broaden this task into redesigning consent UX.

## 7. Allowed scope

Expected implementation files:

- `src/components/CanonicalEstimateRequestForm.tsx`
- `src/styles/canonicalEstimateForm.css`
- existing directly relevant form test file, or one narrowly scoped new test file if no suitable owner exists
- `docs/system/master-task-register.md`
- `docs/audits/lead_fix002_implementation_rev01.md`
- `src/lib/siteVersion.ts` only if current delivery rules require a visible version bump for this deployable UI correction

## 8. Reference only

Do not modify unless an explicit stop/revision is raised:

- `functions/api/lead-signal.ts`
- `src/lib/hubspotLeadSignal.ts`
- HubSpot runtime contracts
- scheduling runtime/contracts
- Resend runtime/contracts
- QR attribution runtime/contracts
- payment/Stripe code
- route definitions

## 9. Forbidden scope / protected systems

Do not change:

- lead event classification;
- telemetry/actionable/lifecycle policy;
- HubSpot persistence semantics;
- HubSpot schema/properties/pipeline/stages;
- requestId generation or authority;
- scheduling creation/order/ownership;
- callback semantics;
- Resend ordering or notification eligibility;
- Stripe/payment;
- QR attribution;
- environment variables or secrets;
- routes/navigation;
- public marketing copy outside validation messages;
- unrelated visual styling;
- dependencies/package lock;
- unrelated tests/refactors.

## 10. Change posture

Surgical UI/validation correction only.

- preserve existing form layout;
- use existing semantic tokens;
- no hardcoded new colors when an existing error/danger semantic token is available;
- no destructive changes;
- no runtime/API modification.

## 11. Validation

Validation Tier: source/UI + QA

Required targeted tests must prove at minimum:

1. phone-only missing → message names phone only;
2. name-only missing → message names name only;
3. address-only missing → message names service address only;
4. multiple missing → message names only the actual missing fields;
5. invalid field(s) receive accessible invalid state;
6. first invalid field receives focus;
7. correcting the field clears its invalid state;
8. valid onsite-estimate submission still reaches existing submit path;
9. communication-permission validation still behaves as before.

Run:

```
npm test -- --run
npm run typecheck:test
npm run build
git diff --check
```

Also run a changed-file/protected-scope check proving no runtime/API, HubSpot, Stripe, scheduling, Resend, QR, env, dependency, or package-lock files changed.

## 12. Git / delivery

Use one branch:

`codex/lead-fix002-validation-ux-rev02`

Commit only this revision's bounded files.

Open one DRAFT PR to `main`.

Preferred title:

`LEAD-FIX002 REV02 - Precise estimate form validation UX`

Do not merge.
Do not deploy.

## 13. Closeout

When validation passes:

- return LEAD-FIX002 MTR status to `DONE`;
- record this as REV02 validation-UX completion evidence;
- preserve all REV01 runtime evidence;
- report exact files changed;
- report test/build/diff results;
- confirm runtime/protected systems untouched;
- confirm no merge/deployment;
- include concise Context Efficiency / RSI notes.

## 14. Stop conditions

STOP if:

- implementation requires runtime/API changes;
- a required target falls outside the approved matrix;
- a dependency/package-lock change becomes necessary;
- visual treatment requires inventing new tokens rather than using existing semantic tokens;
- current task/context authority conflicts with this revision.

STOP after one draft PR is created and the required summary is returned.
