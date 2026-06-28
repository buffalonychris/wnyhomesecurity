# WNYHS-BP001A — WNYHS Business Process Discovery Sweep

## 1. Executive Summary

This is a **candidate extraction only** sweep. Nothing here is repo authority.

Primary confirmed operating facts:

- ChatGPT Project KB is only a behavior/control layer, not implementation truth.
- Repository docs are the durable source of truth for governance, standards, runtime contracts, task register, and implementation truth.
- ChatGPT acts as dispatcher; Codex executes one bounded work order; GitHub and Cloudflare remain human-reviewed.
- Approved ideas must be promoted into repo owner docs before Codex implementation.

## 2. Master Discovered Process Table

| ID | Process Name | Domain | Status | Maturity | Confidence | Promotion Priority |
|---|---|---|---|---|---|---|
| WNYHS-BP-GOV-001 | Idea Intake Classification | Governance / Project Control | Defined | Partially Defined | High | High |
| WNYHS-BP-GOV-002 | Repo Promotion Decision | Governance / Project Control | Defined | Partially Defined | High | High |
| WNYHS-BP-GOV-003 | Authority Conflict Handling | Governance / Project Control | Defined | Partially Defined | High | High |
| WNYHS-BP-GOV-004 | Master Task Register Dispatch | Governance / Project Control | Defined | Partially Defined | High | High |
| WNYHS-BP-CODEX-001 | Bounded Codex Work Order Creation | Codex / GitHub / Deployment | Defined | Partially Defined | High | High |
| WNYHS-BP-CODEX-002 | Codex Summary Review | Codex / GitHub / Deployment | Defined | Partially Defined | High | High |
| WNYHS-BP-CODEX-003 | GitHub PR Review / Merge Control | Codex / GitHub / Deployment | Defined | Partially Defined | High | High |
| WNYHS-BP-CODEX-004 | Cloudflare Deployment Verification | Codex / GitHub / Deployment | Defined | Partially Defined | High | High |
| WNYHS-BP-KAOS-001 | KAOS Candidate Extraction | KAOS / QA / Hooks | Partial | Identified | Medium | High |
| WNYHS-BP-KAOS-002 | Governance Reconciliation Intake | KAOS / QA / Hooks | Partial | Identified | Medium | High |
| WNYHS-BP-WEB-001 | Public Funnel Route Management | Website / Funnel | Partial | Partially Defined | Medium | High |
| WNYHS-BP-WEB-002 | Package Page Flow | Website / Funnel | Partial | Partially Defined | Medium | High |
| WNYHS-BP-WEB-003 | Fit Check Flow | Website / Funnel | Partial | Partially Defined | Medium | High |
| WNYHS-BP-WEB-004 | Precision Planner Flow | Website / Funnel | Partial | Identified | Medium | Medium |
| WNYHS-BP-SEO-001 | Route Inventory Classification | SEO / Route / Page Governance | Partial | Identified | Medium | High |
| WNYHS-BP-SEO-002 | Sitemap Inclusion Review | SEO / Route / Page Governance | Partial | Identified | Medium | High |
| WNYHS-BP-SEO-003 | Robots / Noindex Review | SEO / Route / Page Governance | Partial | Identified | Medium | Medium |
| WNYHS-BP-OFFER-001 | Core Platform Qualification | Offer / Package Management | Defined | Partially Defined | High | High |
| WNYHS-BP-OFFER-002 | Bronze / Silver / Gold Package Management | Offer / Package Management | Defined | Partially Defined | High | High |
| WNYHS-BP-OFFER-003 | Existing Customer Add-On Quoting | Offer / Package Management | Partial | Identified | Medium | High |
| WNYHS-BP-SALES-001 | Lead Capture / Contact Flow | Sales / Lead Flow | Partial | Identified | Medium | High |
| WNYHS-BP-SALES-002 | On-Site Quote Scheduling | Sales / Lead Flow | Partial | Identified | Medium | High |
| WNYHS-BP-QUOTE-001 | Custom Security Walkthrough Quote | Quote / SOW / Estimate Lifecycle | Partial | Partially Defined | Medium | High |
| WNYHS-BP-QUOTE-002 | Quote-to-BOM Translation | Quote / SOW / Estimate Lifecycle | Mentioned | Identified | Medium | High |
| WNYHS-BP-PAY-001 | 50% Deposit Collection | Payments / Finance | Partial | Partially Defined | Medium | High |
| WNYHS-BP-PAY-002 | Remaining Balance Due on Arrival | Payments / Finance | Partial | Identified | Medium | High |
| WNYHS-BP-PAY-003 | Stripe Server-Side Verification | Payments / Finance | Defined | Partially Defined | High | High |
| WNYHS-BP-CRM-001 | HubSpot Lead / Deal Intake | CRM / Admin | Partial | Identified | Medium | High |
| WNYHS-BP-CRM-002 | HubSpot Workflow Automation | CRM / Admin | Mentioned | Concept | Medium | Medium |
| WNYHS-BP-SCHED-001 | Customer Self-Scheduling | Scheduling | Partial | Identified | Medium | High |
| WNYHS-BP-INV-001 | Standard BOM Qualification | Inventory / BOM / Parts Qualification | Partial | Identified | Medium | High |
| WNYHS-BP-INV-002 | HA-Compatible Hardware Approval | Inventory / BOM / Parts Qualification | Defined | Partially Defined | High | High |
| WNYHS-BP-VENDOR-001 | Vendor Product Link / Price Compare | Vendor / Product Management | Mentioned | Identified | Medium | Medium |
| WNYHS-BP-PRE-001 | Remote Pre-Assessment | Pre-Install Operations | Partial | Identified | Medium | Medium |
| WNYHS-BP-PRE-002 | Floorplan / LiDAR Capture | Pre-Install Operations | Partial | Partially Defined | High | Medium |
| WNYHS-BP-INSTALL-001 | Single-Day Install Execution | Installation Operations | Partial | Identified | Medium | High |
| WNYHS-BP-INSTALL-002 | CAT5 / Wi-Fi / PoE Install Preference | Installation Operations | Partial | Identified | Medium | Medium |
| WNYHS-BP-HS-001 | Local-First Home Security Install | Home Security Operations | Defined | Partially Defined | High | High |
| WNYHS-BP-HA-001 | Home Assistant Core Setup | Home Automation Operations | Defined | Partially Defined | High | High |
| WNYHS-BP-HA-002 | Tailscale Remote Access Setup | Home Automation Operations | Defined | Partially Defined | High | High |
| WNYHS-BP-ELDER-001 | Elder Tech Basic Package | Elder Tech / Aging-in-Place Operations | Partial | Identified | Medium | Medium |
| WNYHS-BP-MAN-001 | Lifestyle / Mancave Automation Add-Ons | Mancave / Lifestyle Automation Operations | Mentioned | Concept | Low | Low |
| WNYHS-BP-HANDOFF-001 | Customer Dashboard Handoff | Customer Handoff / Training | Partial | Identified | Medium | High |
| WNYHS-BP-SUPPORT-001 | 1-Year Warranty Support | Support / Warranty / Post-Install | Partial | Identified | Medium | High |
| WNYHS-BP-SUPPORT-002 | Extended Warranty Renewal | Support / Warranty / Post-Install | Partial | Identified | Medium | Medium |
| WNYHS-BP-COPY-001 | Forbidden Claims Review | Copy / Claims / Brand Control | Defined | Partially Defined | High | High |
| WNYHS-BP-COPY-002 | Local-First / No Subscription Messaging | Copy / Claims / Brand Control | Defined | Partially Defined | High | High |
| WNYHS-BP-VIS-001 | Semantic Token Enforcement | Visual / Token / Page-Type Governance | Partial | Identified | Medium | High |
| WNYHS-BP-VIS-002 | Solution Image Manifest Governance | Visual / Token / Page-Type Governance | Partial | Identified | Medium | Medium |
| WNYHS-BP-HUB-001 | Hub-and-Spoke Vertical Replication | Hub-and-Spoke / Multi-Vertical Replication | Partial | Concept | Medium | High |
| WNYHS-BP-HUB-002 | REC / HALO Legacy Reconciliation | Hub-and-Spoke / Multi-Vertical Replication | Mentioned | Concept | Medium | High |

## 3. Domain-by-Domain Process Sections

### Governance / Project Control

Core business processes:

- **Idea Intake Classification**
  - Trigger: operator brings an idea.
  - Inputs: chat idea, project context.
  - Outputs: classification as rough idea, decision, doc update, implementation candidate, runtime-sensitive task, or protected-system task.
  - Owner: Operator + ChatGPT.
  - Human approval: Yes.
  - AI role: recommendation only until approved.

- **Repo Promotion Decision**
  - Trigger: idea is accepted.
  - Inputs: approved decision, correct owner document candidate.
  - Outputs: repo-doc promotion target.
  - Failure mode: chat-only decision treated as authority.
  - Human approval: Yes.

- **Authority Conflict Handling**
  - Trigger: lower authority conflicts with higher authority.
  - Output: stop and create governance reconciliation candidate.
  - Status: Defined.

### Codex / GitHub / Deployment

Core processes:

- **Bounded Codex Work Order Creation**
  - Inputs: active Master Task Register task, owner docs, allowed/forbidden scope.
  - Output: one Codex prompt.
  - Failure mode: Codex expands scope.

- **Codex Summary Review**
  - Inputs: Codex summary.
  - Output: accept, reject, correct, or route to PR review.
  - Human approval: Yes.

- **GitHub PR Review**
  - Human-only approval.
  - Codex cannot merge.

- **Cloudflare Deployment Verification**
  - Human verifies production behavior.
  - Runtime-sensitive flows must be checked.

### KAOS / QA / Hooks

Candidate processes:

- KAOS candidate extraction.
- Governance reconciliation intake.
- QA candidate identification.
- Hook candidate identification.
- RSI / automation candidate discovery.

Status: **Partial / candidate only**.

### Website / Funnel

Candidate processes:

- Public funnel route management.
- Packages route flow.
- Tier PDP flow.
- Fit Check flow.
- Precision Planner flow.
- Quote flow.
- Agreement flow.
- Deposit payment flow.
- Success / cancel flow.
- Schedule flow.
- Contact / callback flow.
- Home Assistant demo flow.

Open question: exact route authority must be reconciled with repo route inventory.

### SEO / Route / Page Governance

Candidate processes:

- Public/private route classification.
- Sitemap yes/no/review decision.
- Robots review.
- Canonical target assignment.
- Metadata owner assignment.
- Schema requirement assignment.
- Internal-linking requirement assignment.
- Site-search inclusion/exclusion.

Status: **Partial**.

### Offer / Package Management

Candidate processes:

- WNYHS Core qualification.
- New customer package quoting.
- Existing customer add-on quoting.
- Bronze / Silver / Gold management.
- Custom residential install package path.
- Optional remote access disclosure.
- No required monthly fee messaging.

### Sales / Lead Flow

Candidate processes:

- Website lead capture.
- Contact request handling.
- Callback request handling.
- On-site quote scheduling.
- HubSpot lead/deal creation.
- Follow-up workflow automation.

Status: **Partial**.

### Quote / SOW / Estimate Lifecycle

Candidate processes:

- On-site walkthrough.
- Full build recommendation during walkthrough.
- Quote before leaving.
- Customer approval.
- Sign + pay on site.
- Quote-to-BOM conversion.
- Installer packet generation.

Open question: formal SOW template authority not yet established.

### Payments / Finance

Candidate processes:

- 50% deposit collection.
- Remaining 50% due on arrival before work begins.
- Stripe checkout.
- Server-side Stripe verification.
- Success/cancel handling.
- Deposit reservation period.

Human approval: required for payment-policy changes.

### CRM / Admin

Candidate processes:

- HubSpot contact creation.
- HubSpot deal creation.
- HubSpot workflow automation.
- Lead source tracking.
- Stage movement.
- Admin review dashboard.

Status: **Partial / future definition required**.

### Scheduling

Candidate processes:

- Customer self-scheduling.
- Schedule after successful deposit.
- On-site quote appointment.
- Installation appointment.
- Calendar validation.
- Reschedule / cancellation handling.

### Inventory / BOM / Parts Qualification

Candidate processes:

- Standard BOM qualification.
- HA-compatible hardware approval.
- Hardware exception disclosure.
- Price comparison.
- Installer pick list.
- Inventory availability check.

High-value process to define next.

### Vendor / Product Management

Candidate processes:

- Approved vendor source tracking.
- eBay price comparison.
- Product availability check.
- Specialty device exception process.
- Product retirement / replacement process.

### Pre-Install Operations

Candidate processes:

- Remote pre-assessment using address, public property data, maps, photos.
- Floorplan inference.
- LiDAR floorplan capture.
- Customer-uploaded rough floorplan review.
- Device placement recommendation.

### Installation Operations

Candidate processes:

- Single-day installation.
- Morning arrival and payment confirmation.
- CAT5 / Wi-Fi / PoE selection.
- Device install.
- HA dashboard setup.
- Tailscale setup.
- Customer walkthrough.
- Completion signoff.

### Home Security Operations

Candidate processes:

- Door/window sensor install.
- Motion sensor install.
- Leak/temp sensor install.
- Camera install.
- Doorbell install.
- Smart lock install.
- Siren install.
- Perimeter awareness logic.
- Night / away / vacation modes.

### Home Automation Operations

Candidate processes:

- HA Green setup.
- Zigbee / Thread setup.
- Z-Wave setup.
- UniFi Protect setup.
- Alexa bridge where appropriate.
- Dashboard view setup.
- Local-first automation rules.

### Elder Tech / Aging-in-Place Operations

Candidate processes:

- Night pathway lighting.
- Missed-activity awareness.
- Hazard awareness.
- Leak/temp awareness.
- Gentle check-ins.
- Local dashboard for seniors.
- Elder-friendly interface design.

Status: **Partial**.

### Mancave / Lifestyle Automation Operations

Candidate processes:

- Gameday lighting/audio.
- Hot tub automation.
- Yard watering.
- Outdoor lighting.
- Fan / fandolier control.
- Entertainment scene controls.

Status: **Mentioned / future definition required**.

### Customer Handoff / Training

Candidate processes:

- Dashboard walkthrough.
- Remote access explanation.
- Local-first explanation.
- Customer-owned equipment/data explanation.
- Basic troubleshooting handoff.
- Support contact handoff.

### Support / Warranty / Post-Install

Candidate processes:

- 1-year parts/labor warranty.
- Extended warranty renewal.
- Remote support through Tailscale.
- RMA handling.
- Post-install change request.
- Add-on quote after installation.

### Copy / Claims / Brand Control

Candidate processes:

- Forbidden claims scan.
- No dispatch claim enforcement.
- No monitoring claim enforcement.
- No false emergency-response claims.
- Local-first / no-subscription / privacy messaging control.

### Visual / Token / Page-Type Governance

Candidate processes:

- Semantic token enforcement.
- Page-type visual standard.
- Website image manifest.
- Vault / premium image style governance.
- Avoid hardcoded colors.
- Route-specific visual acceptance references.

### Hub-and-Spoke / Multi-Vertical Replication

Candidate processes:

- WNYHS process extraction.
- Reliable Elder Care / HALO reconciliation.
- Shared BKAS process register.
- Reusable business process manuals by domain.
- Cross-vertical SOP / QA / hook backlog mapping.

## 4. Duplicate / Overlapping Process List

| Overlap | Notes |
|---|---|
| Fit Check vs Quote Intake | May be separate website funnel step or part of sales qualification. |
| Precision Planner vs Floorplan Capture | Planner may be customer-facing; LiDAR capture may be installer-facing. |
| Core Platform Qualification vs Package Quoting | Core should be quoted only when customer does not already own Core. |
| Customer Scheduling vs Install Scheduling | May need split between quote scheduling, deposit scheduling, and install scheduling. |
| Warranty Support vs Remote Support | Warranty is commercial policy; remote support is operational method. |
| SEO Route Inventory vs Website Route Governance | Likely same upstream registry with SEO fields. |
| Image Manifest vs Visual Token Governance | Image library is artifact-level; token system is standard-level. |

## 5. Top 50 High-Value Processes to Promote First

1. Idea Intake Classification
2. Repo Promotion Decision
3. Authority Conflict Handling
4. Master Task Register Dispatch
5. Bounded Codex Work Order Creation
6. Codex Summary Review
7. GitHub PR Review
8. Cloudflare Deployment Verification
9. KAOS Candidate Extraction
10. Governance Reconciliation Intake
11. Public Route Inventory
12. Sitemap Inclusion Review
13. Robots / Noindex Review
14. Funnel Route Ownership
15. Package Page Flow
16. Fit Check Flow
17. Quote Flow
18. Payment Deposit Flow
19. Stripe Verification
20. Schedule After Payment
21. Core Platform Qualification
22. Package Management
23. Existing Customer Add-On Quoting
24. Custom Walkthrough Quote
25. Quote-to-BOM Translation
26. Installer Pick List
27. HA Hardware Qualification
28. Specialty Device Exception
29. Vendor Price Comparison
30. Remote Pre-Assessment
31. Floorplan Capture
32. Single-Day Install Execution
33. Arrival Payment Confirmation
34. Home Assistant Setup
35. Tailscale Setup
36. Customer Dashboard Handoff
37. Local-First Security Install
38. Camera Install Process
39. Sensor Install Process
40. Smart Lock Install Process
41. Home Automation Add-On Process
42. Elder Tech Package Process
43. Warranty Support
44. Extended Warranty Renewal
45. HubSpot Lead Intake
46. HubSpot Deal Automation
47. Forbidden Claims Review
48. Semantic Token Enforcement
49. Image Manifest Governance
50. Cross-Vertical Process Reuse

## 6. SOP Candidate Backlog

- Customer self-scheduling SOP
- On-site quote SOP
- Quote-to-BOM SOP
- Install-day payment verification SOP
- Installer pick list SOP
- Home Assistant setup SOP
- Tailscale setup SOP
- Customer handoff SOP
- Warranty support SOP
- HubSpot lead/deal SOP
- Stripe verification SOP
- Route inventory SOP
- Forbidden claims review SOP

## 7. QA Candidate Backlog

- Stripe payment verification QA
- HubSpot lead/deal sync QA
- Route inventory QA
- Sitemap QA
- Robots/noindex QA
- Copy claims scanner QA
- Visual token QA
- Package page CTA QA
- Fit Check form QA
- Schedule flow QA
- Cloudflare deployment QA
- Home Assistant dashboard QA
- Tailscale remote access QA

## 8. Hook Candidate Backlog

- Pre-commit forbidden claims hook
- Hardcoded color/token hook
- Sitemap route mismatch hook
- Public/private route policy hook
- Stripe success page verification hook
- HubSpot property drift hook
- Deployment validation hook
- Image manifest filename hook
- Copy lock enforcement hook

## 9. Dashboard Candidate Backlog

- Master Task Register dashboard
- Route inventory dashboard
- Funnel conversion dashboard
- HubSpot lead status dashboard
- Payment/deposit dashboard
- Install schedule dashboard
- BOM/inventory dashboard
- Warranty/support dashboard
- KAOS candidate registry dashboard
- Process maturity dashboard
- AI readiness dashboard

## 10. Human-Approval-Required Process List

- Business priority decisions
- Repo promotion decisions
- Master Task Register activation
- Codex work-order approval
- PR merge
- Cloudflare production acceptance
- Payment policy changes
- Package pricing changes
- Warranty terms
- Copy claims changes
- Route index/noindex decisions
- Hardware standard approval
- Specialty device exceptions

## 11. AI-Recommendation-Only Process List

- Quote recommendation
- Device placement recommendation
- Floorplan coverage recommendation
- Hardware alternative recommendation
- SEO route recommendation
- Copy rewrite recommendation
- Dashboard layout recommendation
- Automation opportunity recommendation
- SOP candidate recommendation
- QA candidate recommendation

## 12. Processes Requiring Governance Reconciliation

| Process | Issue |
|---|---|
| SEO route inventory | Needs final owner doc and field authority. |
| Sitemap policy | Needs route source of truth. |
| Fit Check vs Planner | Needs lifecycle separation. |
| Quote vs SOW | Needs commercial document authority. |
| HubSpot automation | Needs runtime contract / property authority. |
| Warranty process | Needs customer-facing terms authority. |
| Elder Tech packages | Needs separation between WNYHS and Reliable Elder Care/HALO. |
| Mancave automation | Needs offer boundary and service category decision. |
| Visual image standards | Needs manifest ownership. |
| Cross-vertical BKAS model | Needs KAOS/BKAS governance owner. |

## 13. Open Questions / Missing Definitions

- What is the authoritative owner document for business processes?
- Will WNYHS use one `BPR001` register or separate domain BPM files first?
- What fields are required in the Master Business Process Register?
- Which WNYHS processes are shared with Reliable Elder Care / HALO?
- Which elder-tech processes belong under WNYHS versus Reliable Elder Care?
- What is the exact quote/SOW template lifecycle?
- What is the approved HubSpot pipeline/stage model for WNYHS?
- What is the install-day customer signoff process?
- What is the warranty claim intake process?
- What is the approved hardware qualification process?
- What dashboard should become the first operational control surface?

## 14. Recommended Next Extraction Batch

Next batch should be:

**WNYHS-BP001B — Quote, Install, Payment, Scheduling, and Support Deep Sweep**

Reason: these are closest to revenue operations and likely reusable across verticals.

Scope:

- Quote lifecycle
- Deposit/payment flow
- Install-day workflow
- BOM/pick list
- Customer handoff
- Warranty/support
- HubSpot/admin flow

These are candidate KAOS objects. Review and approve them in the KAOS001 governance chat before repo promotion or Master Task Register updates.
