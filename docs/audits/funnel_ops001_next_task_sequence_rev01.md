# FUNNEL-OPS001 Next Task Sequence — REV01

## 1. Purpose
Convert FUNNEL-OPS001 audit findings into a bounded, prioritized, implementation-ready queue without changing runtime behavior.

## 2. Source Audit
Reference:
`/docs/audits/funnel_ops001_customer_journey_audit_rev01.md`

## 3. Scheduling Preservation Note
Scheduling remains open and manual-owner-confirmed. No closure, no self-confirmation, no SMS/reminders/install automation.

## 4. Extracted Audit Findings
- **Missing pipeline states:** `pending_owner_outreach`, `owner_attempted_contact`, `awaiting_customer_callback_response`, `walkthrough_requested_not_scheduled`, `deposit_paid_pending_schedule_confirmation`.
- **Broken/mismatched behavior list:**
  - Stage-mismatched CTA/copy progression risk between quote/deposit/schedule surfaces.
  - Legacy route density increases wrong-stage CTA risk even without hard 404s.
  - Inconsistent customer-visible intermediate status across classic/newsite/QR surfaces.
- **Forbidden claim/copy risks:** install-ready / reserve-install phrasing and residual monitoring/dispatch-adjacent semantics in non-core surfaces.
- **CRM write gaps:** lead-signal parity risk across `functions/api/lead-signal.ts` and `api/lead-signal.ts`; parity/ownership needs bounded consolidation audit.
- **Scheduling handoff gaps:** no explicit stale-request handling visibility and no normalized owner outreach state visibility.
- **Customer notification gaps:** no explicit documented/update cadence tied to pending-owner lifecycle states.
- **Operator notification gaps:** no explicit SLA-breach escalation/stateful operator cue standard.
- **Artifact/document gaps:** quote/agreement lifecycle and customer-owed-doc checklist not normalized across paths.
- **Payment/deposit handoff risks:** post-payment success wording can imply confirmed scheduling too early.

## 5. Deduplicated Task List
1. **FUNNEL-FIX001** — Stage-consistent CTA/link progression normalization.
2. **QR-FIX001** — QR/newsite stage-safe status and claim hardening.
3. **CRM-FIX001** — Lead-signal parity + API-layer write reliability audit/remediation plan.
4. **LEAD-FIX001** — Pending-owner status persistence + customer-visible status normalization.
5. **EMAIL-FIX001** — Customer/operator notification timing matrix aligned to runtime states.
6. **PAYMENT-FIX001** — Deposit-success handoff copy/state clarity (no implied auto-confirmed scheduling).
7. **COPY-FIX001** — Forbidden-claim sweep + approved phrasing matrix.
8. **ARTIFACT-FIX001** — Quote/agreement artifact lifecycle + owed-document checklist.
9. **PIPELINE-FIX001** — Intermediate pipeline state model documentation + transition mapping.
10. **QA-FIX001** — Automated funnel journey validation for links/CTAs/forms/API mapping.

## 6. Priority Classification

### BLOCKER BEFORE QR PRINT/PUBLISH
- FUNNEL-FIX001
- QR-FIX001
- COPY-FIX001

### REQUIRED BEFORE PAID TRAFFIC
- CRM-FIX001
- LEAD-FIX001
- EMAIL-FIX001

### REQUIRED BEFORE PAYMENT SCALE
- PAYMENT-FIX001
- ARTIFACT-FIX001

### POST-LAUNCH HARDENING
- PIPELINE-FIX001

### DOCUMENTATION / QA
- QA-FIX001

## 7. Recommended Execution Order
1. FUNNEL-FIX001
2. QR-FIX001
3. COPY-FIX001
4. CRM-FIX001
5. LEAD-FIX001
6. EMAIL-FIX001
7. PAYMENT-FIX001
8. ARTIFACT-FIX001
9. PIPELINE-FIX001
10. QA-FIX001

## 8. Master Task Register Additions
Added as `READY` in `/docs/system/master-task-register.md`:
- FUNNEL-FIX001
- QR-FIX001
- COPY-FIX001
- CRM-FIX001
- LEAD-FIX001
- EMAIL-FIX001
- PAYMENT-FIX001
- ARTIFACT-FIX001
- PIPELINE-FIX001
- QA-FIX001

## 9. Tasks Not Added And Why
- No new scheduling-automation task was added because scheduling must remain open/manual-owner-confirmed under current constraints.
- No Stripe behavior task beyond copy/hand-off clarity was added due to Stripe protection guardrails.
- No HubSpot schema/pipeline mutation task was added due to REV03 lock and API-layer-only write policy.

## 10. Operator Decisions Required
1. Confirm whether CRM-FIX001 should end with strict consolidation to one lead-signal implementation path or preserve dual-path compatibility with formal parity checks.
2. Confirm acceptable SLA thresholds for EMAIL-FIX001 operator escalation cues (documented only vs runtime enforcement).
3. Confirm whether PIPELINE-FIX001 is documentation-only first, or includes bounded runtime status-enum exposure in a later promoted task.

## 11. Validation Results
Commands executed:
- `git diff -- docs/system/master-task-register.md docs/audits docs/DOCUMENT_CATALOG.md`
- `rg -n "FUNNEL-FIX|QR-FIX|CRM-FIX|LEAD-FIX|EMAIL-FIX|PAYMENT-FIX|COPY-FIX|ARTIFACT-FIX|PIPELINE-FIX|QA-FIX" docs/system/master-task-register.md docs/audits`
- `rg -n "FUNNEL-OPS001|SCHED-IMPL|SCHED-HARDEN|CTX-SCHED|DESIGN-SKINNING|CTX-BRANDING-UX-REV01" docs/system docs/audits docs/runtime docs/specs`
- `git status --short`
- `npm run build`

## 12. Self-Check
- No runtime implementation performed: **Confirmed**.
- No source files changed: **Confirmed**.
- FUNNEL-OPS001 not closed: **Confirmed**.
- Scheduling remains open: **Confirmed**.
- Stripe untouched: **Confirmed**.
- HubSpot schema untouched: **Confirmed**.
- No SMS/reminders/install scheduling/dispatch/customer self-confirmation added: **Confirmed**.
- Manual owner-confirmed scheduling posture preserved: **Confirmed**.
- Proposed tasks bounded and traceable to FUNNEL-OPS001: **Confirmed**.
