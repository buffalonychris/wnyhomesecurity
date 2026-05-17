# FUNNEL-OPS001 Customer Journey Audit — REV01

## 1. Purpose
Audit-only review of the end-to-end customer journey for the main WNYHS funnel and QR funnel, from first visit through lead capture, CRM writes, deposit flow, and scheduling handoffs. No runtime behavior was modified.

## 2. Authority / Sources Loaded
Loaded and applied:
- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/guardrails.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`
- `/docs/specs/funnel-spec.md`
- `/docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- `/docs/runtime/scheduling_ownership.md`
- `/docs/runtime/request_id_contract.md`
- `/docs/runtime/lead_signal_contract.md`
- `/docs/runtime/hubspot_sync_contract.md`
- `/docs/runtime/resend_runtime.md`
- `/docs/runtime/google_calendar_runtime.md`
- `/docs/runtime/stripe_runtime.md`
- `/docs/runtime/deployment_validation.md`
- `/docs/DOCUMENT_CATALOG.md`

Latest merged commit check: `d1bd986` merge commit includes FUNNEL-OPS001 registration in task register.

## 3. Scheduling Status Preservation Note
Scheduling posture remains manual-owner-confirmed/pending-confirmation. No scheduling closure, no self-confirmation, no SMS/reminders/install automation changes were made.

## 4. Main Funnel Route/Page Inventory

| Route | Page/Component | Purpose | Entry Points | Exit Points | Forms/CTAs | Runtime APIs Used | Customer Promise / Claim | Status |
|---|---|---|---|---|---|---|---|---|
| `/home-security` | `src/pages/HomeSecurity.tsx` | Main public landing | root hostname redirect, nav | quote/contact/packages | CTA buttons | none | consultative install flow | OK |
| `/packages`, `/packages/:id` | `Packages`, `PackageDetail` | Package selection | nav/landing CTA | quote/deposit/contact | tier CTAs | none | transparent package tiers | OK |
| `/quote` | `src/pages/Quote.tsx` | quote capture | package/home CTA | quoteReview | submit | `/api/lead-signal` via helper | request intake, not auto-book | OK |
| `/quoteReview`, `/quotePrint` | Quote review artifacts | review/print quote | quote step | agreement | continue/print | lead signal on generation | quote artifact generation | RISK: copy implies faster progression than owner-confirm |
| `/agreement`, `/agreementReview`, `/agreementPrint` | agreement acceptance | legal acceptance + artifact | quote review | payment | accept/continue | lead signal on accepted | proceed to deposit after acceptance | OK |
| `/payment` + `/home-security/pay-deposit` | deposit payment start | Stripe handoff | agreement | stripe checkout/success/cancel | pay deposit | `/api/create-checkout-session` and `/api/stripe/create-checkout-session` | secure deposit | OK |
| `/home-security/payment/success` | payment success verify | verify server-side | stripe redirect | schedule | schedule CTA | `/api/verify-checkout-session` or `/api/stripe/verify-session` | deposit verified server-side | OK |
| `/home-security/payment/cancel*` | canceled flow | retry deposit | stripe cancel | deposit route | retry CTA | none | no charge made | OK |
| `/schedule` | `src/pages/Schedule.tsx` | request scheduling | payment success/flow | pending owner contact | form submit | `/api/lead-signal` | request only, owner confirms | OK |
| `/contact`, `/support` | support/contact | fallback comms | nav/footer | none | forms | `/api/contact`, `/api/support` | follow-up response | OK |

## 5. QR Funnel Route/Page Inventory

| Route | Page/Component | Purpose | Entry Points | Exit Points | Forms/CTAs | Runtime APIs Used | Customer Promise / Claim | Status |
|---|---|---|---|---|---|---|---|---|
| `/qrlanding`, `/qrlanding.htm` | `src/pages/QrLanding.tsx` | QR capture landing | yard sign QR | callback/on-site quote | CTA + form | `/api/lead-signal` | estimate request intake | OK |
| `/newsite/callback` | `src/newsite/pages/NewSiteCallback.tsx` | callback form | qr CTA | thank-you inline | submit form | `/api/lead-signal` | request callback | OK |
| `/newsite/on-site-quote` | `NewSiteOnSiteQuote.tsx` | walkthrough request | qr CTA | schedule/payment | submit form | `/api/lead-signal` | walkthrough request pending owner | OK |
| `/newsite/quote`, `/newsite/quote/review`, `/newsite/quote/print` | newsite quote chain | quote artifact | callback/on-site quote | agreement/deposit | continue/print | lead signal helper | quote + deposit framing | OK |
| `/newsite/agreement/review`, `/newsite/agreement/print` | agreement artifact | acceptance before deposit | quote review | deposit | accept/pay | lead signal helper | legal acceptance gate | OK |
| `/newsite/home-security/pay-deposit` | newsite deposit page | Stripe checkout entry | agreement | success/cancel | pay button | `/api/stripe/create-checkout-session` | pay 50% deposit | OK |
| `/newsite/home-security/payment/success` | newsite success | verify + handoff | stripe success | newsite schedule | schedule CTA | `/api/stripe/verify-session` | verified deposit | COPY RISK: install-ready phrasing |
| `/newsite/schedule` | `NewSiteSchedule.tsx` | preferred window request | payment success | operator confirmation | submit CTA | `/api/lead-signal`, `/api/stripe/schedule-initiated` | operator finalizes schedule | OK |

## 6. Navigation Link Inventory
High-volume inventory captured by search command; no dead internal targets detected for audited routes. Legacy and non-funnel routes still present in global routing.

## 7. CTA Inventory
CTA audit shows core funnel CTAs route correctly into quote→agreement→deposit→schedule path. Risks: a subset of copy suggests booking/install readiness before owner confirmation finalization.

## 8. Form/API Inventory
Major forms:
- Quote, schedule, callback, on-site quote, contact, support.
- Primary funnel API write path: `/api/lead-signal`.
- Ancillary contact/support endpoints: `/api/contact`, `/api/support`.
- Stripe handoff endpoints: `/api/create-checkout-session`, `/api/stripe/create-checkout-session`, verification endpoints.

## 9. CRM Write Map
All audited funnel CRM writes are mediated by API-layer lead-signal runtime and HubSpot helper logic. Primary write orchestrator: `functions/api/lead-signal.ts` (contact/deal/association/note/task + partial-failure diagnostics). Legacy API implementations also exist in `/api/lead-signal.ts` and should be pipeline-audited for parity.

## 10. Scheduling Handoff Map
- Customer submits preferred window/details.
- Runtime creates pending owner confirmation appointment state.
- Owner/operator action required before confirmed scheduling.
- No customer self-confirmation path found in audited scheduling code.

## 11. Customer Notification Map
Customer notifications are sent from lead-signal/email runtime (Resend/provider abstraction) with structured status in response payloads.

## 12. Operator Notification Map
Operator notification occurs through lead-signal notification path and CRM task/note creation for follow-up, including partial-failure visibility.

## 13. Artifact / Document Generation Map
Quote/agreement review/print artifacts exist across classic and newsite paths. Customer-facing artifacts are generated at review/print steps and used downstream for deposit/scheduling context.

## 14. Customer Timing / State Map
Documented runtime posture remains: request captured -> pending owner confirmation -> owner follow-up -> scheduled/confirmed by operator. Gap: customer-visible intermediate statuses are inconsistent across pages.

## 15. Payment / Deposit Handoff Map
Stripe deposit flow is server-verified via verify endpoints and webhook path; frontend success pages rely on verification call before presenting success state. Some copy references install readiness immediately after payment and needs copy hardening to preserve pending-owner posture.

## 16. Missing Pipeline States
- Explicit `pending_owner_outreach`
- Explicit `owner_attempted_contact`
- Explicit `awaiting_customer_callback_response`
- Explicit `walkthrough_requested_not_scheduled`
- Explicit `deposit_paid_pending_schedule_confirmation`

## 17. Missing Customer Status Handling
- No consistent customer-facing status component reused across classic/newsite/qr.
- No explicit stale-request timeout/status communication.

## 18. Missing Communication Flows
- No explicit documented customer update cadence after request submission.
- No explicit owner SLA breach notification flow.

## 19. Broken / Dead / Mismatched Links
No hard 404 targets found in main audited journey, but routing contains many non-funnel legacy routes increasing ambiguity and CTA-stage mismatch risk.

## 20. Forbidden Claim / Copy Risk List
Potential claim-risk phrases detected for follow-up:
- install-ready / reserve-install language that may imply automatic booking.
- legacy marketing copy with monitoring/dispatch-like semantics in non-core pages (requires bounded copy sweep task).

## 21. Baseline Test / Validation Results
- `npm run build` (pass required)
- `npm run lint` (known unrelated baseline failures)
- `npm run test -- --run` (known unrelated operatorNavbar baseline failure)
- `npm run typecheck:api` (known unrelated baseline API type issues)
- `rg -n "href=|to=|navigate\(|window.location|<Link|<NavLink" src`
- `rg -n "fetch\(|axios|api/|functions/|hubspot|lead|appointment|schedule|stripe|resend|email|calendar" src functions api docs`
- `rg -n "book|booked|confirmed|guarantee|monitoring|dispatch|SMS|text reminder|reminder|install schedule|deposit|payment" src docs`

## 22. Exact Next Implementation Queue
1. **FUNNEL-FIX001** Stage-consistent CTA routing audit fix (main funnel).
2. **QR-FIX001** QR/newsite claim and status copy hardening.
3. **CRM-FIX001** lead-signal parity/consolidation audit between `functions/api` and `api` implementations.
4. **LEAD-FIX001** explicit pending-owner status persistence/visibility improvements (no auto-booking).
5. **EMAIL-FIX001** customer/operator message timing templates tied to runtime states.
6. **PAYMENT-FIX001** post-deposit copy to avoid implied confirmed scheduling.
7. **COPY-FIX001** forbidden-claim sweep and approved phrasing matrix.
8. **ARTIFACT-FIX001** quote/agreement artifact lifecycle + customer owed-doc checklist.
9. **PIPELINE-FIX001** missing intermediate pipeline states and state transitions.
10. **QA-FIX001** automated journey validator for links/CTAs/forms/API mappings.

Each task is bounded to doc + targeted files, forbids stripe/hubspot schema changes, and requires build + targeted grep validations.

## 23. Recommended Closure Criteria for FUNNEL-OPS001
- Audit accepted with complete route/link/cta/form/crm/scheduling/payment maps.
- Bounded implementation queue approved.
- No runtime behavior changed during audit.

## 24. Self-Check
- FUNNEL-OPS001 remained audit-only: **Yes**.
- Scheduling remains open: **Yes**.
- No scheduling task downgraded: **Yes**.
- Stripe untouched: **Yes**.
- HubSpot schema untouched: **Yes**.
- No new customer-facing claims introduced: **Yes**.
- No SMS/reminders/install scheduling/dispatch/customer self-confirmation added: **Yes**.
- Manual owner-confirmed scheduling posture preserved: **Yes**.
- Findings converted into bounded future tasks: **Yes**.
