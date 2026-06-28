# WNYHS-BP001C — HubSpot, Stripe, Scheduling, and Revenue Records Deep Sweep

## 1. Executive Summary

This preserves **WNYHS-BP001B** as candidate output.

This sweep focuses only on the revenue record layer:

- HubSpot lifecycle stages
- contact/deal properties
- Stripe/payment state authority
- scheduling state
- install status
- warranty status
- failure states
- automation/dashboard candidates
- human approval gates

This is **candidate extraction only**. No SOPs. No Codex prompts. No repo authority.

---

## 2. Candidate Revenue State Model

| Area | Primary System Candidate | Purpose | Status |
|---|---|---|---|
| Contact identity | HubSpot Contact | Customer/person record | Partial |
| Revenue opportunity | HubSpot Deal | Tracks job from lead to closeout | Future Definition Required |
| Payment authority | Stripe | Source of truth for payment events | Partial |
| Scheduling | Calendar / website schedule flow / HubSpot | Quote/install appointment state | Partial |
| Install execution | HubSpot Deal / internal install record | Tracks operational completion | Future Definition Required |
| Warranty | HubSpot / warranty record | Tracks post-install coverage | Future Definition Required |
| Support | HubSpot ticket/deal/task candidate | Tracks issue resolution | Future Definition Required |

---

## 3. HubSpot Lifecycle Stage Candidates

| Stage ID | Candidate Stage | Plain-English Meaning | Trigger | Human Approval |
|---|---|---|---|---|
| HS-STAGE-001 | New Lead | Customer submitted interest/contact | Website form, call, callback | No |
| HS-STAGE-002 | Contacted | Operator made contact | Call/email/text reply | No |
| HS-STAGE-003 | Qualified | Customer appears serviceable and relevant | Operator review | Yes |
| HS-STAGE-004 | Quote Requested | Customer wants quote/on-site review | Quote request | No |
| HS-STAGE-005 | Quote Scheduled | Quote appointment booked | Calendar booking | No/Review |
| HS-STAGE-006 | Quote Completed | Walkthrough or quote discovery complete | Operator marks complete | Yes |
| HS-STAGE-007 | Estimate Sent | Customer-facing price/scope sent | Estimate issued | Yes |
| HS-STAGE-008 | Estimate Approved | Customer accepts scope | Signature/deposit/approval | Yes |
| HS-STAGE-009 | Deposit Pending | Payment requested but not verified | Stripe checkout created | No |
| HS-STAGE-010 | Deposit Paid | Stripe confirms deposit | Verified Stripe event | No, unless manual |
| HS-STAGE-011 | Install Scheduled | Paid job has install date | Calendar booking | Review |
| HS-STAGE-012 | Install Ready | BOM, parts, payment, and access ready | Readiness review | Yes |
| HS-STAGE-013 | Final Payment Due | Install day balance still due | Install day start | Yes |
| HS-STAGE-014 | Final Payment Paid | Remaining balance confirmed | Verified payment/manual receipt | Yes |
| HS-STAGE-015 | Install In Progress | Work has begun | Installer starts job | Yes |
| HS-STAGE-016 | Install Complete | Devices installed/configured | Installer marks complete | Yes |
| HS-STAGE-017 | Customer Handoff Complete | Customer trained and dashboard verified | Customer walkthrough | Yes |
| HS-STAGE-018 | Warranty Active | Job closed and warranty clock starts | Completion signoff | Yes |
| HS-STAGE-019 | Add-On Opportunity | Customer may buy expansion | Post-install need | Yes |
| HS-STAGE-020 | Closed Won | Revenue completed | Final closeout | Yes |
| HS-STAGE-021 | Closed Lost | Customer declined/cancelled | Operator decision | Yes |

---

## 4. Required HubSpot Property Candidates

### Contact Properties

| Property | Purpose | Status |
|---|---|---|
| Customer name | Identity | Defined |
| Phone | Contact | Defined |
| Email | Contact | Defined |
| Service address | Install location | Required |
| City / ZIP | Service area validation | Required |
| Preferred contact method | Follow-up handling | Future Definition Required |
| Lead source | Marketing attribution | Required |
| Customer type | New / existing customer | Required |
| Existing WNYHS Core? | Determines whether Core is quoted | Required |
| Homeowner / renter / business | Authorization context | Future Definition Required |

### Deal Properties

| Property | Purpose | Status |
|---|---|---|
| Deal name | Revenue tracking | Required |
| Deal stage | Lifecycle control | Required |
| Package tier | Bronze / Silver / Gold / Custom | Required |
| Estimated total | Quote value | Required |
| Deposit amount | Payment gate | Required |
| Deposit status | Scheduling gate | Required |
| Final balance amount | Install-day gate | Required |
| Final payment status | Work-start gate | Required |
| Quote appointment date | Quote tracking | Required |
| Install appointment date | Install tracking | Required |
| BOM status | Inventory readiness | Required |
| Hardware readiness status | Install readiness | Required |
| Install status | Operational completion | Required |
| Handoff status | Customer completion | Required |
| Warranty start date | Warranty tracking | Required |
| Warranty end date | Warranty tracking | Required |
| Support status | Post-install support | Future Definition Required |

---

## 5. Payment State Mapping

| Payment State | Meaning | Source of Truth Candidate | Allowed Next State |
|---|---|---|---|
| Not Requested | No payment link/session created | HubSpot/admin | Deposit Pending |
| Deposit Pending | Checkout/payment requested | Stripe + HubSpot | Deposit Paid / Failed / Expired |
| Deposit Paid | Deposit verified | Stripe verified event | Install Scheduling |
| Deposit Failed | Payment failed | Stripe | Retry / Manual Review |
| Deposit Expired | Checkout expired | Stripe | Reissue / Close Lost |
| Deposit Refunded | Deposit reversed | Stripe/manual approval | Cancelled / Review |
| Final Balance Due | Remaining balance unpaid | HubSpot/admin | Final Paid / Exception |
| Final Payment Paid | Balance confirmed | Stripe/manual receipt | Install Start |
| Payment Exception | Manual override required | Operator | Human Decision |

**Candidate hard rule:**
Stripe should be treated as payment-event authority. HubSpot should store interpreted business state, not act as the original payment authority.

---

## 6. Stripe Event Authority Candidates

| Stripe Event Candidate | Business Meaning | HubSpot Update Candidate | Human Review |
|---|---|---|---|
| Checkout session created | Payment attempt started | Deposit Pending | No |
| Checkout session completed | Payment completed | Deposit Paid candidate | Verify server-side |
| Payment intent succeeded | Funds succeeded | Deposit Paid / Final Paid | No |
| Payment intent failed | Funds failed | Deposit Failed | No |
| Checkout session expired | Customer did not pay | Deposit Expired | No |
| Charge refunded | Refund occurred | Deposit Refunded / Payment Review | Yes |
| Dispute created | Payment challenged | Payment Exception | Yes |
| Manual payment recorded | Offline/manual payment | Final Paid or Exception | Yes |

**Open issue:** exact Stripe event names and endpoint behavior must be verified against runtime docs before promotion.

---

## 7. Scheduling State Mapping

| Scheduling State | Meaning | Trigger | Gate |
|---|---|---|---|
| No Appointment | No quote/install scheduled | Lead created | None |
| Quote Requested | Customer wants appointment | Form/call | Qualification |
| Quote Scheduled | Quote appointment booked | Calendar booking | Contact info |
| Quote Completed | Walkthrough complete | Operator closeout | Human approval |
| Install Eligible | Customer approved and deposit verified | Stripe + approval | Deposit Paid |
| Install Scheduled | Install booked | Calendar booking | Deposit Paid |
| Install Confirmed | Customer/installer confirmed | Manual/admin review | Inventory readiness |
| Reschedule Needed | Appointment no longer valid | Customer/operator | Human approval |
| Cancelled | Appointment cancelled | Customer/operator | Human approval |
| No Show | Customer unavailable | Appointment missed | Human review |

---

## 8. Install Status Mapping

| Install State | Meaning | Required Gate |
|---|---|---|
| Not Ready | Job not ready for field work | Missing deposit/BOM/schedule |
| Ready for Install | Parts, payment, access, schedule ready | Human readiness review |
| Final Payment Due | Balance not yet collected | Payment gate |
| Cleared to Start | Final payment handled or approved exception | Human approval |
| In Progress | Installer has started | Start confirmation |
| Blocked | Install cannot proceed | Issue logged |
| Device Install Complete | Hardware installed | Installer verification |
| HA Config Complete | Home Assistant configured | Functional check |
| Remote Access Complete | Tailscale configured | Access check |
| Customer Handoff Complete | Customer shown system | Customer verification |
| Completed | Job operationally closed | Signoff |
| Needs Follow-Up | Something remains open | Human review |

---

## 9. Warranty Status Mapping

| Warranty State | Meaning | Trigger |
|---|---|---|
| Not Started | Install not complete | Pre-closeout |
| Pending Activation | Install complete but record/signoff missing | Completion candidate |
| Active | Warranty started | Completion signoff |
| Support Open | Warranty/support issue active | Customer issue |
| Parts Review | Possible parts issue | Support triage |
| Labor Review | Possible labor issue | Support triage |
| Exclusion Review | May be outside warranty | Operator review |
| Resolved | Issue closed | Support closeout |
| Expiring Soon | Renewal window | Time-based |
| Expired | Coverage ended | Warranty end date |
| Extended Active | Extended warranty purchased | Renewal payment |

---

## 10. Failure States

| Failure State | Area | Risk |
|---|---|---|
| Duplicate contact | HubSpot | Dirty records, wrong customer history |
| Duplicate deal | HubSpot | Revenue confusion |
| Missing service address | HubSpot | Cannot quote/schedule properly |
| Quote not tied to deal | Admin | Lost revenue tracking |
| Deposit not verified | Payment | Customer scheduled without payment |
| Stripe success trusted from browser only | Payment | False paid state |
| Payment received but HubSpot not updated | Sync | Operational delay |
| Install scheduled before deposit | Scheduling | Revenue risk |
| Install scheduled before BOM ready | Inventory | Failed install |
| Hardware not approved | BOM | Unsupported system |
| Final payment skipped | Install | Cash-flow risk |
| No customer signoff | Handoff | Warranty/support dispute |
| Warranty not activated | Support | Coverage ambiguity |
| Support issue not tied to install record | Support | No asset context |
| Manual override undocumented | Governance | Audit failure |

---

## 11. Automation Candidates

| Candidate Automation | Risk | AI Suitability |
|---|---|---|
| Create/update HubSpot contact from form | Medium | Automatable after contract |
| Create HubSpot deal from qualified lead | Medium | Automatable with review |
| Update deposit status from Stripe | High | Automatable only server-side |
| Gate scheduling until deposit verified | High | Automatable with strict checks |
| Flag install readiness gaps | Medium | AI recommendation |
| Generate BOM readiness warning | Medium | AI recommendation |
| Send appointment reminders | Low/Medium | Automatable |
| Create warranty record after signoff | Medium | Automatable with human closeout |
| Flag expiring warranties | Low | Automatable |
| Detect duplicate records | Medium | AI recommendation |
| Dashboard revenue state rollup | Low | Automatable |
| Exception queue creation | Medium | Automatable with human approval |

---

## 12. Dashboard Candidates

| Dashboard | Purpose |
|---|---|
| Lead Intake Dashboard | New leads needing action |
| Quote Pipeline Dashboard | Quote stage and aging |
| Payment Dashboard | Deposit/final payment state |
| Scheduling Dashboard | Upcoming quote/install appointments |
| Install Readiness Dashboard | BOM/payment/schedule readiness |
| Install-Day Dashboard | Jobs active today |
| Exception Dashboard | Payment/schedule/BOM/support issues |
| Warranty Dashboard | Active/expired/expiring coverage |
| Support Dashboard | Open support cases |
| Revenue Records Quality Dashboard | Missing/dirty HubSpot data |

---

## 13. Human Approval Gates

| Gate | Why Human Approval Is Required |
|---|---|
| Customer qualification | Business judgment |
| Quote approval | Price/scope risk |
| Hardware substitution | Compatibility/warranty risk |
| Deposit exception | Payment risk |
| Refund/cancellation | Financial risk |
| Install readiness approval | Operational risk |
| Final payment exception | Cash-flow risk |
| Install completion | Quality/customer risk |
| Customer handoff signoff | Dispute prevention |
| Warranty exception | Cost/control risk |
| Manual HubSpot correction | Data integrity |
| Repo promotion | Governance authority |

---

## 14. Processes Requiring Governance Reconciliation

| Process | Missing Definition |
|---|---|
| HubSpot lifecycle stages | Exact pipeline/stage names |
| Required properties | Field names, types, allowed values |
| Stripe event authority | Exact webhook/event rules |
| Payment-to-HubSpot sync | Runtime contract |
| Schedule state | Appointment type and gate rules |
| Install readiness | Required readiness checklist fields |
| Warranty activation | Start trigger and required evidence |
| Support case handling | Ticket/deal/task model |
| Manual overrides | Approval and audit process |
| Dashboard ownership | Which dashboard is operational source |

---

## 15. Recommended Next Extraction Batch

Proceed next with:

**WNYHS-BP001D — BOM, Hardware Qualification, Inventory, Vendor, and Installer Packet Deep Sweep**

Reason: BP001C shows that revenue records depend on install readiness, and install readiness depends on clean BOM/hardware/inventory rules.

Focus only on:

- standard package BOMs
- approved hardware rules
- Home Assistant compatibility
- substitution approval
- vendor/source tracking
- price comparison
- inventory readiness
- installer pick list
- install packet contents
- customer-facing vs internal hardware notes

Candidate extraction only. No SOPs. No Codex prompts. No repo authority.
