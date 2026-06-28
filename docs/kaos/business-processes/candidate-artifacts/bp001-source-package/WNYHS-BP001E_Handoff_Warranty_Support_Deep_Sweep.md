# WNYHS-BP001E — Customer Handoff, Dashboard Training, Warranty, Support, and Add-On Lifecycle Deep Sweep

## 1. Executive Summary

Preserve **WNYHS-BP001D** as candidate output.

This sweep focuses only on the post-install customer lifecycle:

- customer dashboard handoff
- Home Assistant user training
- remote access explanation
- customer-owned equipment/data explanation
- warranty activation
- support intake
- remote troubleshooting
- post-install add-ons
- renewal / extended warranty
- customer satisfaction / closeout evidence

Candidate extraction only. No SOPs. No Codex prompts. No repo authority.

---

## 2. Master Handoff / Support Process Table

| Process ID | Process Name | Domain | Status | Maturity | Priority |
|---|---|---|---|---|---|
| WNYHS-BP001E-001 | Customer Dashboard Handoff | Customer Handoff | Partial | Identified | High |
| WNYHS-BP001E-002 | Home Assistant User Training | Customer Training | Partial | Identified | High |
| WNYHS-BP001E-003 | Remote Access Explanation | Customer Training | Defined | Partially Defined | High |
| WNYHS-BP001E-004 | Customer-Owned Equipment/Data Explanation | Customer Handoff | Defined | Partially Defined | High |
| WNYHS-BP001E-005 | Local-First / Offline Behavior Explanation | Customer Training | Defined | Partially Defined | High |
| WNYHS-BP001E-006 | Monitoring / Dispatch Boundary Explanation | Claims Control | Defined | Partially Defined | High |
| WNYHS-BP001E-007 | Completion Signoff Evidence | Closeout | Future Definition Required | Concept | High |
| WNYHS-BP001E-008 | Warranty Activation | Warranty | Partial | Identified | High |
| WNYHS-BP001E-009 | Support Intake | Support | Future Definition Required | Concept | High |
| WNYHS-BP001E-010 | Remote Troubleshooting | Support | Partial | Identified | High |
| WNYHS-BP001E-011 | On-Site Follow-Up Support | Support | Future Definition Required | Concept | Medium |
| WNYHS-BP001E-012 | Warranty Coverage Review | Warranty | Future Definition Required | Concept | High |
| WNYHS-BP001E-013 | Extended Warranty Offer | Warranty / Revenue | Partial | Identified | Medium |
| WNYHS-BP001E-014 | Post-Install Add-On Opportunity | Add-On Lifecycle | Partial | Identified | Medium |
| WNYHS-BP001E-015 | Customer Satisfaction Closeout | Closeout | Future Definition Required | Concept | Medium |

---

## 3. Customer Dashboard Handoff

| Field | Extraction |
|---|---|
| Business Capability | Ensure the customer can use the installed system |
| Trigger | Install configuration complete |
| Inputs | Installed devices, HA dashboard, customer device/tablet, Tailscale setup |
| Outputs | Customer can access and use dashboard |
| Owner Role | Installer / operator |
| Human Approval Required | Yes |
| AI Readiness | Recommendation only |
| SOP Needed | Yes, later |
| QA Candidate | Yes |
| Dashboard Candidate | Yes |

Candidate handoff items:

- Show main dashboard.
- Show camera view if included.
- Show entry/sensor status.
- Show leak/temp or utility alerts if included.
- Show mode controls if included.
- Confirm customer can open dashboard.
- Confirm customer understands what each section does.

---

## 4. Home Assistant User Training

| Field | Extraction |
|---|---|
| Business Capability | Reduce support burden and improve customer confidence |
| Trigger | Dashboard is working |
| Inputs | Customer dashboard, installed feature set |
| Outputs | Customer understands basic operation |
| Status | Partial |
| Maturity | Identified |

Candidate training areas:

- How to access Home Assistant.
- What dashboard views mean.
- How to check device status.
- How to use basic controls.
- What to do if something looks offline.
- What not to change without support guidance.
- Difference between local dashboard and remote access.

---

## 5. Remote Access Explanation

| Field | Extraction |
|---|---|
| Business Capability | Explain secure remote support/mobile access |
| Trigger | Tailscale configured |
| Inputs | Customer device, HA address, Tailscale status |
| Outputs | Customer understands remote access path |
| Status | Defined / partial |
| Human Approval Required | Yes |

Candidate explanation points:

- Remote access is set up through Tailscale.
- It supports mobile access and support access.
- It is not the same as selling a third-party monitoring subscription.
- It should be explained as secure access to the customer-owned local system.

Open questions:

- Does every install include customer mobile remote access?
- Is installer/support access always retained?
- What is the customer revocation process?

---

## 6. Customer-Owned Equipment / Data Explanation

| Field | Extraction |
|---|---|
| Business Capability | Reinforce WNYHS positioning and reduce confusion |
| Trigger | Customer handoff |
| Inputs | Installed equipment, HA dashboard |
| Outputs | Customer understands ownership model |
| Status | Defined / partial |

Candidate explanation points:

- Customer owns the installed equipment.
- Customer owns the local control system.
- Customer data is not sold as part of the service model.
- WNYHS does not require a monthly subscription for local control.
- Optional third-party subscriptions, if any, are customer-direct.

---

## 7. Warranty Activation

| Field | Extraction |
|---|---|
| Business Capability | Start post-install coverage cleanly |
| Trigger | Install complete and customer handoff finished |
| Inputs | Install date, customer, installed assets, signoff evidence |
| Outputs | Warranty active record |
| Status | Partial / Future Definition Required |
| Owner Role | Operator / admin |
| Human Approval Required | Yes |

Candidate warranty states:

- Not started
- Pending activation
- Active
- Support open
- Resolved
- Expiring soon
- Expired
- Extended active

Open questions:

- What exact event starts warranty?
- Is signoff required?
- Are batteries covered?
- Are customer network issues covered?
- Are customer-modified automations covered?

---

## 8. Support Intake

| Field | Extraction |
|---|---|
| Business Capability | Capture and route customer issues |
| Trigger | Customer reports issue |
| Inputs | Customer name, install record, issue description, affected device/system |
| Outputs | Support case/task/ticket candidate |
| Status | Future Definition Required |
| Human Approval Required | Yes |

Candidate intake fields:

- Customer
- Address
- Install date
- Warranty status
- Issue type
- Affected device
- Urgency
- Remote access available?
- Photos/video provided?
- Customer changed anything?
- Resolution notes

---

## 9. Remote Troubleshooting

| Field | Extraction |
|---|---|
| Business Capability | Resolve issues without unnecessary truck roll |
| Trigger | Support issue opened |
| Inputs | HA access, Tailscale status, customer report |
| Outputs | Resolved issue, escalation, or on-site visit |
| Status | Partial |
| Human Approval Required | Yes |

Candidate troubleshooting boundaries:

- Check dashboard/device status.
- Confirm remote access is working.
- Identify offline device/network issue.
- Recommend customer-safe steps.
- Escalate when physical access is required.

Automation risk: **Medium-high**. AI should recommend, not independently control customer systems.

---

## 10. Post-Install Add-On Lifecycle

| Field | Extraction |
|---|---|
| Business Capability | Convert installed base into future revenue |
| Trigger | Customer requests expansion or support identifies opportunity |
| Inputs | Existing system, customer needs, installed asset record |
| Outputs | Add-on quote candidate |
| Status | Partial |
| Maturity | Identified |

Candidate add-on categories:

- Cameras
- Smart locks
- Leak/temp sensors
- Lighting
- Outdoor automation
- Elder tech add-ons
- Lifestyle / mancave automation
- Remote access expansion
- Dashboard refinement

Open question: whether add-ons should reuse the same quote/payment/install lifecycle or have a lighter path.

---

## 11. Customer Satisfaction / Closeout Evidence

| Field | Extraction |
|---|---|
| Business Capability | Prove job completion and reduce disputes |
| Trigger | Customer handoff completed |
| Inputs | Completed install, customer walkthrough, dashboard confirmation |
| Outputs | Closeout evidence |
| Status | Future Definition Required |
| Human Approval Required | Yes |

Candidate evidence:

- Customer confirms dashboard access.
- Customer confirms basic training.
- Customer receives support/warranty explanation.
- Customer signs or approves completion.
- Photos/screenshots captured where appropriate.
- Warranty activation recorded.

---

## 12. Failure States

| Failure State | Risk |
|---|---|
| Customer cannot access dashboard | Failed handoff |
| Customer does not understand system | Support burden |
| Remote access not working | Support failure |
| Customer misunderstands monitoring/dispatch | Claims risk |
| Warranty not activated | Coverage dispute |
| Installed asset record missing | Support confusion |
| Support request not tied to install | Bad admin record |
| AI makes unsupported support recommendation | Operational risk |
| Customer modifies HA and breaks system | Warranty ambiguity |
| Add-on quoted without checking existing system | Scope/support risk |
| No closeout evidence | Dispute risk |

---

## 13. Automation Candidates

| Automation Candidate | Suitability | Risk |
|---|---|---|
| Generate handoff checklist candidate | Medium | Medium |
| Create warranty record after closeout | Medium | Medium |
| Send customer handoff email | Medium | Low |
| Create support ticket from form | High | Medium |
| Link support ticket to install record | High | Medium |
| Flag warranty status during support intake | High | Low |
| Flag remote access unavailable | Medium | Medium |
| Suggest troubleshooting path | Medium | Medium-high |
| Detect add-on opportunity | Medium | Medium |
| Warranty renewal reminder | High | Low |

---

## 14. Dashboard Candidates

| Dashboard | Purpose |
|---|---|
| Handoff Completion Dashboard | Tracks jobs awaiting customer handoff |
| Warranty Activation Dashboard | Shows pending/active warranty records |
| Support Intake Dashboard | Shows open customer issues |
| Remote Access Dashboard | Shows whether support access is available |
| Installed Asset Dashboard | Shows devices tied to customers |
| Add-On Opportunity Dashboard | Shows likely future sales |
| Closeout Evidence Dashboard | Shows completion/signoff status |
| Warranty Renewal Dashboard | Tracks expiring/extended warranties |

---

## 15. Human Approval Gates

| Gate | Reason |
|---|---|
| Customer handoff complete | Customer experience risk |
| Warranty activation | Coverage/legal risk |
| Support triage classification | Cost/support risk |
| Remote troubleshooting action | Customer system risk |
| On-site follow-up approval | Labor/cost risk |
| Warranty exception | Financial risk |
| Add-on quote approval | Scope/revenue risk |
| Extended warranty sale | Customer terms risk |
| Closeout acceptance | Dispute prevention |

---

## 16. Processes Requiring Governance Reconciliation

| Process | Missing Definition |
|---|---|
| Customer handoff | Required evidence and minimum training |
| HA training | Standard customer-safe explanation |
| Remote access | Support access policy and revocation |
| Ownership/data explanation | Customer-facing language lock |
| Warranty activation | Exact trigger and record location |
| Support intake | Ticket/deal/task model |
| Remote troubleshooting | Allowed vs forbidden actions |
| Extended warranty | Price, term, coverage |
| Add-on lifecycle | Same lifecycle as new job or lighter path |
| Closeout evidence | Required artifact and storage location |

---

## 17. Recommended Next Extraction Batch

Proceed next with:

**WNYHS-BP001F — Website Funnel, Fit Check, Planner, Route Governance, SEO, and Claims-Control Deep Sweep**

Focus only on:

- lead capture routes
- package routes
- Fit Check
- Precision Planner
- quote route
- payment/success/cancel routes
- scheduling route
- public/private route classification
- sitemap / robots / noindex
- page metadata
- claims guardrails
- CTA flow
- conversion dashboards

Candidate extraction only. No SOPs. No Codex prompts. No repo authority.
