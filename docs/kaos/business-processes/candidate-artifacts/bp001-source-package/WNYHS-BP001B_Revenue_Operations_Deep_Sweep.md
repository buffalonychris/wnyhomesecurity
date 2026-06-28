# WNYHS-BP001B — Quote, Install, Payment, Scheduling, and Support Deep Sweep

## 1. Executive Summary

This preserves **WNYHS-BP001A** as candidate output and continues with a deeper revenue-operations extraction.

This is **not repo authority**. It is candidate KAOS/BKAS process discovery only.

Grounding constraints:

- Project KB is not implementation truth; repo docs remain the durable source of truth.
- Approved decisions must be promoted into the correct repo owner document before Codex implementation.
- HubSpot behavior, funnel behavior, payment behavior, deployment behavior, and task execution each have likely repo-owner document paths, but this extraction does not update them.
- Codex cannot decide work, expand scope, or infer missing business rules from chat history.

---

## 2. Master Discovered Revenue Process Table

| Process ID | Process Name | Domain | Lifecycle Stage | Status | Maturity | Confidence | Promotion Priority |
|---|---|---|---|---|---|---|---|
| WNYHS-BP001B-001 | Lead-to-Quote Intake | Sales / Lead Flow | Lead Intake | Partial | Identified | Medium | High |
| WNYHS-BP001B-002 | Customer Qualification | Sales / Lead Flow | Qualification | Partial | Identified | Medium | High |
| WNYHS-BP001B-003 | On-Site Quote Request | Scheduling | Pre-Sale | Partial | Identified | Medium | High |
| WNYHS-BP001B-004 | Pre-Quote Property Review | Pre-Install Operations | Pre-Assessment | Partial | Identified | Medium | Medium |
| WNYHS-BP001B-005 | Walkthrough Discovery | Quote / Estimate | On-Site Quote | Partial | Partially Defined | Medium | High |
| WNYHS-BP001B-006 | Package Fit Decision | Offer / Package Management | Quote Build | Partial | Identified | Medium | High |
| WNYHS-BP001B-007 | Custom Scope Build | Quote / SOW | Quote Build | Partial | Identified | Medium | High |
| WNYHS-BP001B-008 | Quote-to-BOM Translation | BOM / Inventory | Quote Build | Mentioned | Identified | Medium | High |
| WNYHS-BP001B-009 | SOW / Estimate Generation | Quote / SOW | Quote Approval | Future Definition Required | Concept | Medium | High |
| WNYHS-BP001B-010 | Customer Approval / Signature | Quote / SOW | Close | Partial | Identified | Medium | High |
| WNYHS-BP001B-011 | 50% Deposit Collection | Payments / Finance | Close | Partial | Partially Defined | Medium | High |
| WNYHS-BP001B-012 | Stripe Deposit Verification | Payments / Finance | Payment Validation | Partial | Partially Defined | High | High |
| WNYHS-BP001B-013 | Deposit Success Scheduling | Scheduling | Post-Payment | Partial | Identified | Medium | High |
| WNYHS-BP001B-014 | Install Appointment Confirmation | Scheduling | Pre-Install | Future Definition Required | Concept | Medium | High |
| WNYHS-BP001B-015 | Inventory Readiness Check | Inventory / BOM | Pre-Install | Partial | Identified | Medium | High |
| WNYHS-BP001B-016 | Installer Pick List | Inventory / Install | Pre-Install | Mentioned | Identified | Medium | High |
| WNYHS-BP001B-017 | Final Balance Due on Arrival | Payments / Finance | Install Day | Partial | Identified | Medium | High |
| WNYHS-BP001B-018 | Install-Day Start Gate | Installation Operations | Install Day | Partial | Identified | Medium | High |
| WNYHS-BP001B-019 | Device Installation Execution | Installation Operations | Install Day | Partial | Identified | Medium | High |
| WNYHS-BP001B-020 | Home Assistant Control Plane Setup | Home Automation | Install Day | Defined | Partially Defined | High | High |
| WNYHS-BP001B-021 | Tailscale Remote Access Setup | Home Automation / Support | Install Day | Defined | Partially Defined | High | High |
| WNYHS-BP001B-022 | Customer Dashboard Handoff | Customer Handoff | Completion | Partial | Identified | Medium | High |
| WNYHS-BP001B-023 | Customer Training Walkthrough | Customer Handoff | Completion | Partial | Identified | Medium | High |
| WNYHS-BP001B-024 | Completion Signoff | Customer Handoff | Closeout | Future Definition Required | Concept | Medium | High |
| WNYHS-BP001B-025 | HubSpot Record Creation | CRM / Admin | Intake / Close | Partial | Identified | Medium | High |
| WNYHS-BP001B-026 | HubSpot Deal Stage Tracking | CRM / Admin | Revenue Tracking | Future Definition Required | Concept | Medium | High |
| WNYHS-BP001B-027 | Warranty Record Creation | Warranty / Support | Closeout | Future Definition Required | Concept | Medium | High |
| WNYHS-BP001B-028 | 1-Year Parts/Labor Warranty Support | Warranty / Support | Post-Install | Partial | Identified | Medium | High |
| WNYHS-BP001B-029 | Extended Warranty Offer | Warranty / Support | Post-Install | Partial | Identified | Medium | Medium |
| WNYHS-BP001B-030 | Add-On / Change Request After Install | Sales / Support | Expansion | Partial | Identified | Medium | Medium |

---

## 3. Domain-by-Domain Revenue Process Sections

### A. Quote Lifecycle

| Field | Extraction |
|---|---|
| Process IDs | WNYHS-BP001B-001 through WNYHS-BP001B-010 |
| Business Capability | Convert lead into approved install scope |
| Business Function | Intake, qualification, walkthrough, package/custom quote, estimate approval |
| Trigger | Customer requests quote, callback, package info, or on-site visit |
| Inputs | Customer contact info, property type, desired outcome, package interest, floorplan/property notes |
| Outputs | Recommended package/custom scope, estimate/SOW candidate, BOM candidate, deposit request |
| Owner Role | Operator / sales lead |
| Systems Involved | Website, HubSpot, scheduling, quote/estimate document, possible planner |
| Failure Modes | Under-scoped quote, unsupported hardware, missing customer approval, unclear scope, quote not tied to HubSpot |
| Human Approval Required | Yes |
| Automation Risk | Medium |
| AI Readiness | Medium |
| Suitable for AI Execution | No, not end-to-end |
| Suitable for AI Recommendation Only | Yes |
| Requires Human Verification | Yes |
| SOP Needed | Yes |
| QA Candidate | Yes |
| Hook Candidate | Possible |
| Dashboard Candidate | Yes |
| Owner Document Candidate | `BPM-SALES-###`, `BPM-QUOTE-###`, or future `BPR001` |

**Plain-English definition:**
The quote lifecycle begins when a lead enters the system and ends when the customer approves a defined install scope and is ready for deposit/payment handling.

**Open questions:**

- Is there one standard quote template?
- Is there a separate customer-facing estimate and internal SOW?
- What exact HubSpot stage marks “quote approved”?
- Is the on-site quote always free?
- Is signature required before deposit, or can deposit act as acceptance?

---

### B. SOW / Estimate Lifecycle

| Field | Extraction |
|---|---|
| Process IDs | WNYHS-BP001B-007, 008, 009, 010 |
| Business Capability | Convert discovery into customer-facing and installer-facing scope |
| Business Function | Estimate generation, SOW generation, BOM translation |
| Status | Future Definition Required |
| Maturity | Concept / Identified |
| Trigger | Walkthrough completed or package selected |
| Inputs | Customer needs, selected package, device list, property notes, add-ons, exclusions |
| Outputs | Customer estimate, internal SOW, BOM, installer notes |
| Owner Role | Operator |
| Systems Involved | Quote doc, HubSpot, inventory/BOM sheet, possible website quote flow |
| Failure Modes | Customer estimate and internal SOW diverge; BOM missing parts; unsupported claims included |
| Human Approval Required | Yes |
| Automation Risk | Medium-high |
| AI Readiness | Medium |
| Suitable for AI Execution | Drafting only, with human review |
| Requires Human Verification | Yes |
| SOP Needed | Yes |
| QA Candidate | Yes |
| Owner Document Candidate | `BPM-QUOTE-###` |

**Key extraction:**
This is one of the biggest missing definitions. The business clearly needs a separation between:

1. customer-facing quote/estimate
2. internal SOW
3. BOM / pick list
4. install-day work packet

Do not create those documents yet.

---

### C. Deposit and Final Payment Flow

| Field | Extraction |
|---|---|
| Process IDs | WNYHS-BP001B-011, 012, 017 |
| Business Capability | Secure job commitment and protect install-day cash flow |
| Business Function | Deposit, payment validation, final balance |
| Status | Partial |
| Maturity | Partially Defined |
| Trigger | Customer approves quote |
| Inputs | Approved scope, price, customer info, payment link/session |
| Outputs | Deposit confirmation, job reservation, install scheduling eligibility |
| Owner Role | Operator / admin |
| Systems Involved | Stripe, website success/cancel pages, HubSpot, scheduling |
| Failure Modes | Payment not verified server-side, customer reaches schedule without valid deposit, balance not collected before work |
| Human Approval Required | Yes for exceptions |
| Automation Risk | High |
| AI Readiness | Low for execution, medium for monitoring |
| Suitable for AI Execution | No |
| Suitable for AI Recommendation Only | Yes |
| Requires Human Verification | Yes |
| SOP Needed | Yes |
| QA Candidate | Yes |
| Hook Candidate | Yes |
| Dashboard Candidate | Yes |
| Owner Document Candidate | `/docs/runtime/stripe_runtime.md`, `BPM-PAYMENTS-###` |

**Plain-English definition:**
A customer should not move into committed installation without verified deposit/payment status. Payment behavior is runtime-sensitive and should be governed by Stripe runtime documentation before implementation.

**Open questions:**

- Is the deposit always 50%?
- Does the deposit reserve the job for exactly 30 days in all cases?
- What happens if customer cancels?
- What happens if inventory is unavailable after deposit?
- What is the manual override path?

---

### D. Scheduling

| Field | Extraction |
|---|---|
| Process IDs | WNYHS-BP001B-003, 013, 014 |
| Business Capability | Convert approved/paid jobs into scheduled field work |
| Business Function | Quote scheduling, install scheduling, confirmation |
| Status | Partial |
| Maturity | Identified |
| Trigger | Customer requests on-site quote or completes deposit |
| Inputs | Customer availability, payment status, job type, installer availability |
| Outputs | Scheduled appointment, customer confirmation, internal install block |
| Owner Role | Operator / admin |
| Systems Involved | Website schedule route, calendar, HubSpot |
| Failure Modes | Unpaid install scheduled, double-booked installer, unclear appointment type, customer no-show |
| Human Approval Required | Yes for exceptions |
| Automation Risk | Medium |
| AI Readiness | Medium |
| Suitable for AI Execution | Limited |
| Suitable for AI Recommendation Only | Yes |
| Requires Human Verification | Yes |
| SOP Needed | Yes |
| QA Candidate | Yes |
| Dashboard Candidate | Yes |
| Owner Document Candidate | `BPM-SCHEDULING-###` |

**Open questions:**

- Are quote appointments and install appointments separate appointment types?
- Does payment happen before scheduling or at scheduling?
- Who confirms final appointment readiness?
- What lead time is required?

---

### E. Install-Day Workflow

| Field | Extraction |
|---|---|
| Process IDs | WNYHS-BP001B-015 through 024 |
| Business Capability | Deliver the paid installation cleanly in one operational cycle |
| Business Function | Readiness, payment gate, install, dashboard setup, handoff, closeout |
| Status | Partial |
| Maturity | Identified / Partially Defined |
| Trigger | Install appointment date arrives |
| Inputs | Approved scope, BOM, hardware, payment status, property access, customer availability |
| Outputs | Installed system, configured dashboard, customer handoff, support/warranty record |
| Owner Role | Installer / operator |
| Systems Involved | Home Assistant, Tailscale, cameras, sensors, locks, HubSpot, warranty/admin records |
| Failure Modes | Missing hardware, unpaid balance, unsupported device, poor Wi-Fi, no remote access, unclear customer handoff |
| Human Approval Required | Yes |
| Automation Risk | Medium |
| AI Readiness | Medium for guidance, low for final verification |
| Suitable for AI Execution | No |
| Suitable for AI Recommendation Only | Yes |
| Requires Human Verification | Yes |
| SOP Needed | Yes |
| QA Candidate | Yes |
| Dashboard Candidate | Yes |
| Owner Document Candidate | `BPM-INSTALL-###` |

**Candidate install-day sequence:**

1. Confirm appointment.
2. Confirm scope.
3. Confirm hardware readiness.
4. Confirm remaining balance before work begins.
5. Install devices.
6. Configure Home Assistant.
7. Configure Tailscale.
8. Build customer dashboard.
9. Test critical functions.
10. Train customer.
11. Capture signoff.
12. Create warranty/support record.

Unknowns remain and should stay marked **Future Definition Required**.

---

### F. BOM / Pick List / Inventory Readiness

| Field | Extraction |
|---|---|
| Process IDs | WNYHS-BP001B-008, 015, 016 |
| Business Capability | Ensure the install can be completed without missing parts |
| Business Function | BOM generation, inventory readiness, installer pick list |
| Status | Mentioned / Partial |
| Maturity | Identified |
| Trigger | Quote approved or install scheduled |
| Inputs | Approved quote, package tier, add-ons, hardware standards, inventory availability |
| Outputs | BOM, pick list, procurement needs, installer-ready parts list |
| Owner Role | Operator / installer |
| Systems Involved | Inventory tracker, vendor links, quote/SOW, HubSpot |
| Failure Modes | Missing parts, wrong device version, incompatible hardware, price drift, unavailable vendor stock |
| Human Approval Required | Yes |
| Automation Risk | Medium |
| AI Readiness | High for recommendation, medium for automation |
| Suitable for AI Execution | Partial, after validation |
| Requires Human Verification | Yes |
| SOP Needed | Yes |
| QA Candidate | Yes |
| Hook Candidate | Possible |
| Dashboard Candidate | Yes |
| Owner Document Candidate | `BPM-INVENTORY-###`, `BPM-PROCUREMENT-###` |

**Open questions:**

- Is inventory tracked in HubSpot, spreadsheet, repo, or another system?
- Are standard package BOMs locked?
- Who approves hardware substitutions?
- Is there a minimum stock threshold?

---

### G. Customer Dashboard Handoff

| Field | Extraction |
|---|---|
| Process IDs | WNYHS-BP001B-020, 021, 022, 023, 024 |
| Business Capability | Ensure customer can actually use the installed system |
| Business Function | Dashboard setup, training, signoff |
| Status | Partial |
| Maturity | Identified |
| Trigger | Install configuration completed |
| Inputs | Installed devices, dashboard views, customer phone/tablet, Tailscale setup |
| Outputs | Working dashboard, trained customer, support expectations, signoff |
| Owner Role | Installer |
| Systems Involved | Home Assistant, Tailscale, mobile app/tablet, customer network |
| Failure Modes | Customer cannot access system, dashboard too complex, remote access not working, unclear support expectations |
| Human Approval Required | Yes |
| Automation Risk | Medium |
| AI Readiness | Medium |
| Suitable for AI Execution | No |
| Suitable for AI Recommendation Only | Yes |
| Requires Human Verification | Yes |
| SOP Needed | Yes |
| QA Candidate | Yes |
| Dashboard Candidate | Yes |
| Owner Document Candidate | `BPM-HANDOFF-###` |

**Candidate handoff elements:**

- Show dashboard views.
- Explain local-first behavior.
- Explain remote access.
- Explain what is and is not monitored.
- Explain support path.
- Confirm customer can use the system.
- Capture completion signoff.

---

### H. Warranty / Support

| Field | Extraction |
|---|---|
| Process IDs | WNYHS-BP001B-027, 028, 029, 030 |
| Business Capability | Preserve customer trust and create post-install revenue path |
| Business Function | Warranty support, extended warranty, add-ons |
| Status | Partial / Future Definition Required |
| Maturity | Identified |
| Trigger | Install completed or customer reports issue |
| Inputs | Customer record, install scope, device list, warranty start date, issue description |
| Outputs | Support action, warranty resolution, add-on quote, renewal offer |
| Owner Role | Operator / support |
| Systems Involved | HubSpot, Home Assistant, Tailscale, warranty record |
| Failure Modes | No installed asset record, unclear warranty coverage, remote access unavailable, unsupported customer modification |
| Human Approval Required | Yes |
| Automation Risk | Medium |
| AI Readiness | Medium |
| Suitable for AI Execution | Limited |
| Suitable for AI Recommendation Only | Yes |
| Requires Human Verification | Yes |
| SOP Needed | Yes |
| QA Candidate | Yes |
| Dashboard Candidate | Yes |
| Owner Document Candidate | `BPM-SUPPORT-###`, `BPM-WARRANTY-###` |

**Open questions:**

- What exactly is covered under the 1-year warranty?
- Are batteries covered?
- Are customer network issues covered?
- What is the response-time promise, if any?
- What is the renewal process for extended warranty?

---

### I. HubSpot / Admin Records

| Field | Extraction |
|---|---|
| Process IDs | WNYHS-BP001B-025, 026 |
| Business Capability | Keep revenue operations visible and auditable |
| Business Function | Lead, deal, quote, payment, install, support recordkeeping |
| Status | Partial / Future Definition Required |
| Maturity | Identified |
| Trigger | Lead enters, quote created, payment received, install scheduled, job completed, support issue opened |
| Inputs | Customer data, quote status, payment status, schedule status, install status, warranty status |
| Outputs | Contact record, deal record, stage updates, notes, tasks, support/warranty record |
| Owner Role | Admin / operator |
| Systems Involved | HubSpot, Stripe, scheduling, website forms |
| Failure Modes | Missing deal, duplicate contact, payment not tied to deal, install not marked complete, warranty not recorded |
| Human Approval Required | Yes for record corrections |
| Automation Risk | Medium-high |
| AI Readiness | Medium |
| Suitable for AI Execution | Limited, only after runtime contracts |
| Suitable for AI Recommendation Only | Yes |
| Requires Human Verification | Yes |
| SOP Needed | Yes |
| QA Candidate | Yes |
| Hook Candidate | Yes |
| Dashboard Candidate | Yes |
| Owner Document Candidate | `/docs/runtime/hubspot_properties.md`, `/docs/runtime/hubspot_sync_contract.md`, `BPM-CRM-###` |

**Candidate HubSpot stages needing definition:**

- New lead
- Qualified
- Quote requested
- Quote completed
- Quote approved
- Deposit paid
- Install scheduled
- Install completed
- Warranty active
- Add-on opportunity
- Closed won/lost

---

## 4. Duplicate / Overlapping Revenue Processes

| Overlap | Resolution Needed |
|---|---|
| Quote scheduling vs install scheduling | Define separate appointment types. |
| Customer estimate vs internal SOW | Split customer-facing and internal documents. |
| BOM vs pick list | BOM is scope/material logic; pick list is install-day pull list. |
| Deposit paid vs job scheduled | Define whether deposit gates scheduling. |
| Final payment vs install start | Define whether final payment is a hard start gate. |
| Warranty support vs general support | Define coverage boundaries. |
| HubSpot deal stage vs operational status | Decide whether one pipeline handles all or multiple records are needed. |
| Dashboard handoff vs customer training | May be one closeout process with two sections. |

---

## 5. Top 25 High-Value Revenue Processes to Promote First

1. Lead-to-Quote Intake
2. Customer Qualification
3. On-Site Quote Request
4. Walkthrough Discovery
5. Package Fit Decision
6. Custom Scope Build
7. Customer Estimate Generation
8. Internal SOW Generation
9. Quote-to-BOM Translation
10. Customer Approval / Signature
11. 50% Deposit Collection
12. Stripe Deposit Verification
13. Deposit Success Scheduling
14. Install Appointment Confirmation
15. Inventory Readiness Check
16. Installer Pick List
17. Final Balance Due on Arrival
18. Install-Day Start Gate
19. Device Installation Execution
20. Home Assistant Setup
21. Tailscale Setup
22. Customer Dashboard Handoff
23. Completion Signoff
24. Warranty Record Creation
25. HubSpot Deal Stage Tracking

---

## 6. SOP Candidate Backlog

Do not create these yet.

- Lead intake SOP
- On-site quote SOP
- Walkthrough discovery SOP
- Estimate/SOW generation SOP
- Quote approval SOP
- Deposit collection SOP
- Stripe verification SOP
- Scheduling SOP
- Inventory readiness SOP
- Installer pick list SOP
- Install-day start gate SOP
- Home Assistant setup SOP
- Tailscale setup SOP
- Customer dashboard handoff SOP
- Completion signoff SOP
- Warranty intake SOP
- Extended warranty renewal SOP
- HubSpot recordkeeping SOP

---

## 7. QA Candidate Backlog

- Quote completeness QA
- Estimate/SOW consistency QA
- BOM completeness QA
- Hardware compatibility QA
- Deposit verification QA
- Stripe success/cancel QA
- Scheduling eligibility QA
- Install readiness QA
- Final balance verification QA
- HA dashboard function QA
- Tailscale access QA
- Customer handoff QA
- Warranty record QA
- HubSpot deal-stage QA

---

## 8. Hook Candidate Backlog

- Quote cannot move to install without approved scope
- Install cannot schedule without verified deposit
- Install cannot start without final payment confirmation
- BOM cannot finalize with unapproved hardware
- Customer handoff cannot close without dashboard verification
- Warranty cannot activate without completion date
- HubSpot deal cannot close without install status
- Stripe success cannot be trusted without server-side verification
- Claims scanner before customer-facing estimate text

---

## 9. Dashboard Candidate Backlog

- Revenue pipeline dashboard
- Quote status dashboard
- Deposit/payment dashboard
- Install schedule dashboard
- Inventory readiness dashboard
- Install-day checklist dashboard
- Customer handoff dashboard
- Warranty/support dashboard
- HubSpot data-quality dashboard
- Add-on opportunity dashboard

---

## 10. Human-Approval-Required Process List

- Quote approval
- Discounting or price changes
- Hardware substitution
- Payment exception
- Deposit refund/cancellation
- Final payment exception
- Warranty exception
- Customer-facing claims/copy changes
- Install completion acceptance
- HubSpot record correction
- Any process promotion to repo authority

---

## 11. AI-Recommendation-Only Process List

- Package recommendation
- Device count recommendation
- Floorplan coverage recommendation
- Estimate draft recommendation
- BOM recommendation
- Install readiness risk flagging
- Customer dashboard layout suggestion
- Warranty issue triage suggestion
- Add-on opportunity suggestion
- HubSpot data cleanup suggestion

---

## 12. Processes Requiring Governance Reconciliation

| Process | Reconciliation Need |
|---|---|
| Estimate/SOW lifecycle | Define document split and owner docs. |
| Deposit and final payment | Confirm exact policy and exceptions. |
| Scheduling gate | Confirm whether deposit is required before scheduling. |
| Install-day start gate | Confirm final payment-before-work rule. |
| BOM/pick list | Define inventory system of record. |
| HubSpot pipeline | Define stages, properties, and sync contract. |
| Warranty support | Define coverage, exclusions, and renewal path. |
| Customer handoff | Define required signoff evidence. |
| Hardware substitution | Define approval and disclosure process. |
| Add-on quoting | Define post-install expansion workflow. |

---

## 13. Open Questions / Missing Definitions

1. What is the exact WNYHS quote template?
2. Does every quote require a signed agreement?
3. Is the SOW separate from the customer estimate?
4. What exact event creates a HubSpot deal?
5. What HubSpot stage means “deposit paid”?
6. What exact Stripe event is authoritative?
7. Does deposit always equal 50%?
8. Is final payment always required before unloading/install work begins?
9. What is the cancellation/refund policy?
10. What is the inventory source of truth?
11. Who approves hardware substitutions?
12. What is the completion signoff artifact?
13. How is warranty start date recorded?
14. What support response expectations are allowed to be promised?
15. What is the standard post-install add-on flow?

---

## 14. Recommended Next Extraction Batch

Proceed next with:

**WNYHS-BP001C — HubSpot, Stripe, Scheduling, and Revenue Records Deep Sweep**

Reason: BP001B shows that revenue operations depend heavily on clean admin/runtime records.

Focus:

- HubSpot lifecycle stages
- required contact/deal properties
- payment state mapping
- schedule state mapping
- install status mapping
- warranty status mapping
- automation candidates
- failure states
- human approval gates

Candidate status only. No SOPs. No Codex prompts. No repo authority.
