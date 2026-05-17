# CRM-PIPELINE001 — Canonical HubSpot Pipeline Architecture (REV01)

Date (UTC): 2026-05-17  
Status: ACTIVE CANON (Architecture only; no runtime code changes)

## Purpose

Define a production-ready, canonical WNYHS HubSpot deal pipeline and movement policy before further CRM runtime hardening. This document is architecture/governance only.

## Scope Boundary

- Documentation-only task.
- No runtime/source code changes.
- No HubSpot schema/property creation in this task.
- No Stripe logic changes.
- No scheduling implementation changes.

## Canonical Pipeline Stages (WNYHS)

1. New Estimate Request
2. Operator Review Needed
3. Contact Attempted
4. Customer Contacted
5. On-Site Walkthrough Requested
6. Walkthrough Scheduled
7. Walkthrough Completed
8. Quote Generated
9. Quote Sent
10. Deposit Requested
11. Deposit Paid / Owner Review
12. Install Date Requested
13. Install Scheduled
14. Remainder Due Before Install
15. Installed / Complete
16. Closed Won
17. Closed Lost / Not Fit

## Stage Definitions

For each stage: purpose, entry/exit, owner, customer/internal meaning, automation permission, approval requirement.

### 1) New Estimate Request
- Purpose: canonical initial estimate stage for newly submitted estimate intake.
- Entry: valid estimate request accepted through `/api/lead-signal`.
- Exit: operator triage starts.
- Next action owner: operator (Chris/Lou).
- Customer meaning: request received.
- Internal meaning: untriaged new request with requestId.
- Automation move allowed: yes (initial create only).
- Approval required: no.

### 2) Operator Review Needed
- Purpose: queue for human review and assignment.
- Entry: after intake creation or when further manual judgment is needed.
- Exit: first outreach attempt or explicit reroute.
- Next action owner: operator.
- Customer meaning: pending follow-up.
- Internal meaning: requires ownership and next task.
- Automation move allowed: yes (from initial stage), no for skip logic to later stages.
- Approval required: operator acknowledgment.

### 3) Contact Attempted
- Purpose: record first outbound outreach attempt.
- Entry: call/text/email attempt logged.
- Exit: successful customer contact or closure.
- Next action owner: operator.
- Customer meaning: we attempted contact.
- Internal meaning: follow-up cadence active.
- Automation move allowed: no.
- Approval required: operator action evidence.

### 4) Customer Contacted
- Purpose: confirmed two-way communication established.
- Entry: customer reached and interaction logged.
- Exit: walkthrough path or direct quoting path selected.
- Next action owner: operator.
- Customer meaning: active conversation in progress.
- Internal meaning: fit/needs confirmation phase.
- Automation move allowed: no.
- Approval required: operator evidence.

### 5) On-Site Walkthrough Requested
- Purpose: customer wants onsite estimate workflow.
- Entry: walkthrough preference captured.
- Exit: owner-approved scheduled walkthrough or reroute.
- Next action owner: operator/owner.
- Customer meaning: walkthrough requested, not yet booked.
- Internal meaning: scheduling request pending confirmation.
- Automation move allowed: yes (from canonical request metadata), bounded.
- Approval required: no for request capture, yes for confirmed schedule transition.

### 6) Walkthrough Scheduled
- Purpose: confirmed walkthrough appointment state.
- Entry: owner/operator confirms date/time.
- Exit: walkthrough completed/rescheduled/canceled.
- Next action owner: operator/owner.
- Customer meaning: walkthrough time confirmed.
- Internal meaning: owner-confirmed schedule exists.
- Automation move allowed: no autonomous customer-side movement.
- Approval required: yes (owner/operator confirmation required).

### 7) Walkthrough Completed
- Purpose: onsite walkthrough done; quoting prep starts.
- Entry: operator confirms completion.
- Exit: quote generated.
- Next action owner: operator/sales owner.
- Customer meaning: quote preparation underway.
- Internal meaning: post-visit data ready for quote.
- Automation move allowed: no.
- Approval required: operator confirmation.

### 8) Quote Generated
- Purpose: quote exists internally.
- Entry: quote artifact generated and linked.
- Exit: quote sent or revised.
- Next action owner: operator.
- Customer meaning: quote prepared.
- Internal meaning: pricing/package finalized for send.
- Automation move allowed: yes when generated event is authoritative.
- Approval required: operator review if manual edits required.

### 9) Quote Sent
- Purpose: quote delivered to customer.
- Entry: send action confirmed.
- Exit: deposit request, revision, or closure.
- Next action owner: operator/customer.
- Customer meaning: quote received.
- Internal meaning: awaiting decision.
- Automation move allowed: yes if send channel is system-tracked.
- Approval required: no extra approval beyond valid send action.

### 10) Deposit Requested
- Purpose: deposit ask formally issued.
- Entry: operator requests deposit for accepted quote.
- Exit: payment verified or deal closed/lapsed.
- Next action owner: customer (pay) + operator (follow-up).
- Customer meaning: deposit needed to continue.
- Internal meaning: pre-payment hold state.
- Automation move allowed: no.
- Approval required: operator decision to request deposit.

### 11) Deposit Paid / Owner Review
- Purpose: webhook-verified payment received; requires operational review before install scheduling.
- Entry: Stripe webhook-verified deposit paid event reflected in CRM.
- Exit: explicit owner/operator progression to install-date request.
- Next action owner: owner/operator.
- Customer meaning: payment received; scheduling follows confirmation.
- Internal meaning: payment complete, operational gate still active.
- Automation move allowed: yes (from verified payment event only).
- Approval required: yes for next-stage progression.

### 12) Install Date Requested
- Purpose: customer proposes installation timing.
- Entry: install timing request captured.
- Exit: owner/operator confirms install schedule.
- Next action owner: owner/operator.
- Customer meaning: requested install timing submitted.
- Internal meaning: pending owner-confirmed scheduling.
- Automation move allowed: yes for request capture only.
- Approval required: yes for move to Install Scheduled.

### 13) Install Scheduled
- Purpose: install date/time confirmed.
- Entry: owner/operator confirmed schedule.
- Exit: pre-install financial readiness and completion steps.
- Next action owner: operator/owner/install team.
- Customer meaning: install appointment confirmed.
- Internal meaning: committed install slot.
- Automation move allowed: no autonomous movement.
- Approval required: yes.

### 14) Remainder Due Before Install
- Purpose: final balance readiness stage before job execution.
- Entry: install scheduled and remainder due policy applies.
- Exit: paid/arranged then install execution.
- Next action owner: operator/customer.
- Customer meaning: remaining balance due before install.
- Internal meaning: payment readiness checkpoint.
- Automation move allowed: no.
- Approval required: operator review.

### 15) Installed / Complete
- Purpose: installation completed operationally.
- Entry: install completion confirmed.
- Exit: close won (or issue handling before close).
- Next action owner: operator/owner.
- Customer meaning: install complete.
- Internal meaning: fulfillment finished; closeout pending.
- Automation move allowed: no.
- Approval required: owner/operator confirmation.

### 16) Closed Won
- Purpose: successful completed opportunity closure.
- Entry: install complete + commercial closeout done.
- Exit: none.
- Next action owner: none (post-sale support handled separately).
- Customer meaning: project complete.
- Internal meaning: booked win.
- Automation move allowed: no.
- Approval required: operator/owner closeout.

### 17) Closed Lost / Not Fit
- Purpose: explicit non-conversion or non-fit closure.
- Entry: disqualified, declined, unreachable exhaustion, or not-fit.
- Exit: none (future opportunities can create new deal).
- Next action owner: operator.
- Customer meaning: no current project moving forward.
- Internal meaning: opportunity closed without conversion.
- Automation move allowed: no.
- Approval required: operator decision + reason note.

## Canonical Movement Rules

### A) QR On-Site Estimate Request
New Estimate Request → Operator Review Needed → Contact Attempted/Customer Contacted → On-Site Walkthrough Requested → Walkthrough Scheduled → Walkthrough Completed → Quote Generated/Quote Sent → Deposit Requested → Deposit Paid / Owner Review → Install Date Requested → Install Scheduled → Remainder Due Before Install → Installed / Complete → Closed Won (or Closed Lost / Not Fit when applicable).

### B) Main-Site Estimate Request
Same stage progression as QR path; only source metadata differs (main-site markers vs QR markers).

### C) Package Estimate / Quote
May start at Operator Review Needed (if manual vetting required) or Quote Generated (when package quote already assembled), then continue through Quote Sent onward.

### D) Deposit Paid
Deposit-paid events may move deal to **Deposit Paid / Owner Review** only. Never auto-advance directly to Install Scheduled.

### E) Scheduling
Customer request alone never equals confirmed schedule. Owner/operator confirmation is required before entering Walkthrough Scheduled or Install Scheduled.

### F) Support Request
Support requests do not create sales deals by default. Create/update contact + note + task only, unless operator intentionally converts to a sales opportunity.

## Operator Workflow (Chris/Lou)

- New leads land in New Estimate Request then Operator Review Needed queue.
- First available operator claims ownership and creates/updates one active follow-up task.
- Do not create duplicate open follow-up tasks for same contact + active deal intent.
- Repeat submissions on same active opportunity append note with latest requestId rather than creating duplicate deals.
- Close as Closed Lost / Not Fit when no-fit, decline, or exhaustion criteria are reached (include reason note).
- Deposit-paid deals require owner/operator review before install scheduling.
- Installation confirmation requires explicit owner/operator confirmation step (preserve owner-confirmed scheduling model).

## Dedupe Rules Reserved for CRM-DEAL002B (Future, Safe Scope)

1. Same normalized email should reuse existing contact.
2. Same contact + same active estimate path should reuse active/open deal.
3. Repeat request should append note (with requestId), not create duplicate deal.
4. Duplicate open follow-up tasks should be suppressed.
5. Closed won/lost historical deals must not block future new opportunities.
6. requestId must be preserved in notes even when reusing active deal.
7. `latestRequestId` deal field update is allowed only if contract alignment is approved.

## HubSpot Stage ID + Cloudflare Env Guidance

- Runtime must not use human stage labels as IDs.
- Define/use `HUBSPOT_ESTIMATE_INITIAL_STAGE_ID` for canonical initial estimate stage internal ID.
- Current state: **not set in architecture by guess**; set only after HubSpot UI pipeline is finalized and internal stage ID is known.
- Do not guess or hardcode unknown stage IDs.

## PROTECTED_RUNTIME Rule

Lead intake runtime is protected and must remain untouched by casual CRM tasks:
- `/api/lead-signal` request contract
- customer acknowledgement email behavior
- operator notification email behavior
- requestId propagation
- HubSpot contact/deal/note/task sync

Allowed future runtime changes are bounded to:
- bug fix
- security fix
- operational blocker
- dedupe hardening
- stage alignment
- test coverage
- logging/diagnostics

## Required HubSpot UI / Operator Actions (Manual)

1. Build/rename pipeline stages in HubSpot to exactly match canonical list.
2. Remove ambiguity (`New Leads` vs `New Lead`) by converging to `New Estimate Request`.
3. Capture internal stage IDs for canonical stages.
4. Set `HUBSPOT_ESTIMATE_INITIAL_STAGE_ID` in Cloudflare env after initial-stage ID is known.
5. Train operators on owner-confirmed transitions for walkthrough/install scheduling.
6. Require close-lost reason note discipline.

## Explicit Forbidden Scope for This Task

- No source/runtime code changes.
- No Stripe/payment logic changes.
- No scheduling implementation changes.
- No SMS/reminder/dispatch additions.
- No HubSpot schema/property creation.
- No record delete/merge operations.
- No customer-facing copy claim expansion.


## CRM-CONTRACT001 — Live Pipeline ID Lock (Runtime Contract Snapshot)

**Pipeline Name:** `WNYHS Sales Pipeline`  
**Pipeline Internal ID:** `2282258169`

### Canonical Stage IDs (Internal)

| Canonical Stage Label | Internal Stage ID |
|---|---:|
| New Estimate Request | `3680633583` |
| Operator Review Needed | `3680633584` |
| Contact Attempted | `3680633585` |
| On-Site Walkthrough Requested | `3680633586` |
| Walkthrough Scheduled | `3680633587` |
| Quote Generated | `3680633588` |
| Walkthrough Completed | `3680633589` |
| Quote Sent | `3683126005` |
| Deposit Requested | `3683126006` |
| Deposit Paid / Owner Review | `3683126007` |
| Install Date Requested | `3683126008` |
| Install Scheduled | `3683126009` |
| Remainder Due Before Install | `3683126970` |
| Installed / Complete | `3683126971` |

### Cloudflare Production Environment Variable

- `HUBSPOT_ESTIMATE_INITIAL_STAGE_ID=3680633583`
- Purpose: canonical initial `dealstage` internal ID for new QR/main-site estimate intake.

### Runtime Contract Rules (Locked)

- Runtime must use **internal stage IDs** (never human labels) when writing `dealstage`.
- Do not guess pipeline IDs or stage IDs.
- If HubSpot stage labels are renamed, verify whether internal IDs changed **before** runtime changes.
- `PROTECTED_RUNTIME` lead intake constraints remain in effect (`/api/lead-signal` only; no direct client HubSpot writes).

### Next Required Validation

After deployment, submit one QR estimate request and confirm the created deal lands in **New Estimate Request** (`3680633583`).

## GOV-HARDEN002 Canonical Internal ID Lock

Canonical production pipeline identity:

- Pipeline name: `WNYHS Sales Pipeline`
- Pipeline internal ID: `2282258169`
- Runtime env lock: `HUBSPOT_ESTIMATE_INITIAL_STAGE_ID=3680633583`

Canonical stage internal IDs (runtime-safe mapping):

- `New Estimate Request` = `3680633583`
- `Operator Review Needed` = `3680633584`
- `Contact Attempted` = `3680633585`
- `On-Site Walkthrough Requested` = `3680633586`
- `Walkthrough Scheduled` = `3680633587`
- `Quote Generated` = `3680633588`
- `Walkthrough Completed` = `3680633589`
- `Quote Sent` = `3683126005`
- `Deposit Requested` = `3683126006`
- `Deposit Paid / Owner Review` = `3683126007`
- `Install Date Requested` = `3683126008`
- `Install Scheduled` = `3683126009`
- `Remainder Due Before Install` = `3683126970`
- `Installed / Complete` = `3683126971`

Enforcement:

- Runtime integrations must use internal IDs, never labels.
- Package/discovery context belongs in HubSpot notes under current contract.
- No new HubSpot properties unless explicitly scoped.
- HubSpot schema/pipeline changes require separate bounded task authorization.
