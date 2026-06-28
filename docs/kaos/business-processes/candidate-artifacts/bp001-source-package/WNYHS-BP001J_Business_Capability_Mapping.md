# WNYHS-BP001J — Business Capability Mapping

Candidate only. Not BPR001. Not repo authority.

---

## 1. Business Capability Hierarchy

| Capability Area | Child Business Functions | Scope |
|---|---|---|
| Business Governance | authority control, promotion workflow, task dispatch, conflict resolution | Shared |
| Execution Governance | Codex, GitHub, Cloudflare, runtime validation | Shared |
| Sales | lead intake, qualification, quote request, package fit | Shared |
| Quote / Estimate | walkthrough, custom scope, estimate, SOW, approval | Shared |
| Payments | deposit, final balance, Stripe verification, payment states | Shared |
| Scheduling | quote scheduling, install scheduling, appointment state | Shared |
| CRM / Revenue Records | contacts, deals, lifecycle stages, sync states | Shared |
| Website / Funnel | public routes, CTAs, Fit Check, Planner, quote/payment routes | Shared with vertical variation |
| SEO / Route Governance | route classification, sitemap, robots, metadata | Shared |
| Offer / Package Management | package tiers, add-ons, solution fit | WNYHS-heavy |
| Hardware / Inventory | BOM, approved hardware, substitutions, vendors, pick lists | WNYHS-heavy |
| Installation Delivery | install gates, device install, HA setup, Tailscale setup | WNYHS-specific / reusable structure |
| Customer Handoff | dashboard handoff, HA training, ownership explanation, signoff | Shared with vertical variation |
| Warranty / Support | warranty activation, support intake, troubleshooting, renewals | Shared |
| Claims / Brand Control | prohibited claims, ownership/data messaging, copy controls | Shared |
| Visual / UX Governance | tokens, page standards, visual consistency | Shared |
| Reporting / Dashboards | funnel, payments, install, warranty, exceptions | Shared |
| Cross-Vertical Replication | WNYHS / Reliable Elder Care / HALO reuse model | Shared |
| Elder Tech / HALO Ownership | elder safety overlap, caregiver-aware workflows | Unresolved |

---

## 2. Process-to-Capability Mapping Table

| BP-I ID | Process Name | Primary Capability | Business Function |
|---|---|---|---|
| BP-I-001 | Idea Intake Classification | Business Governance | Intake control |
| BP-I-002 | Documentation Promotion Workflow | Business Governance | Promotion |
| BP-I-003 | Authority Conflict Resolution | Business Governance | Conflict handling |
| BP-I-004 | Master Task Register Dispatch | Business Governance | Task dispatch |
| BP-I-005 | Bounded Codex Work Order Lifecycle | Execution Governance | Codex execution |
| BP-I-006 | Codex Summary Review | Execution Governance | Work review |
| BP-I-007 | GitHub PR Review | Execution Governance | PR control |
| BP-I-008 | Cloudflare Deployment Validation | Execution Governance | Deployment validation |
| BP-I-009 | Runtime Contract Ownership | Execution Governance | Runtime control |
| BP-I-010 | QA Validation Model | Execution Governance | Validation |
| BP-I-011 | Hook Candidate Governance | Execution Governance | Automation guardrails |
| BP-I-012 | RSI Opportunity Capture | Business Governance | Continuous improvement |
| BP-I-013 | Public Route Governance | Website / Funnel | Route control |
| BP-I-014 | Lead Capture Funnel | Sales | Lead intake |
| BP-I-015 | Package Route Flow | Website / Funnel | Offer navigation |
| BP-I-016 | Fit Check Qualification | Sales | Qualification |
| BP-I-017 | Precision Planner Intake | Website / Funnel | Planning intake |
| BP-I-018 | Quote Request Flow | Quote / Estimate | Quote intake |
| BP-I-019 | Customer Qualification | Sales | Qualification |
| BP-I-020 | Walkthrough Discovery | Quote / Estimate | Discovery |
| BP-I-021 | Package Fit Decision | Offer / Package Management | Package selection |
| BP-I-022 | Custom Scope Build | Quote / Estimate | Scope definition |
| BP-I-023 | Customer Estimate Generation | Quote / Estimate | Customer quote |
| BP-I-024 | Internal SOW Generation | Quote / Estimate | Internal scope |
| BP-I-025 | Quote-to-BOM Translation | Hardware / Inventory | BOM creation |
| BP-I-026 | Customer Approval / Signature | Quote / Estimate | Approval |
| BP-I-027 | Deposit Collection | Payments | Deposit |
| BP-I-028 | Stripe Payment Verification | Payments | Payment authority |
| BP-I-029 | Payment Success / Cancel Routing | Payments | Payment routing |
| BP-I-030 | Install Scheduling Gate | Scheduling | Scheduling eligibility |
| BP-I-031 | Scheduling State Management | Scheduling | Appointment state |
| BP-I-032 | HubSpot Contact Record Management | CRM / Revenue Records | Contact data |
| BP-I-033 | HubSpot Deal Lifecycle Management | CRM / Revenue Records | Deal state |
| BP-I-034 | Payment-to-HubSpot State Sync | CRM / Revenue Records | Payment sync |
| BP-I-035 | Standard Package BOM Definition | Hardware / Inventory | Package BOM |
| BP-I-036 | Approved Hardware Catalog | Hardware / Inventory | Hardware catalog |
| BP-I-037 | Home Assistant Compatibility Review | Hardware / Inventory | Hardware approval |
| BP-I-038 | Hardware Substitution Approval | Hardware / Inventory | Exceptions |
| BP-I-039 | Vendor Source Tracking | Hardware / Inventory | Vendor control |
| BP-I-040 | Price Comparison | Hardware / Inventory | Cost control |
| BP-I-041 | Inventory Readiness Check | Hardware / Inventory | Readiness |
| BP-I-042 | Installer Pick List | Installation Delivery | Pick list |
| BP-I-043 | Installer Packet Assembly | Installation Delivery | Install packet |
| BP-I-044 | Install-Day Start Gate | Installation Delivery | Start gate |
| BP-I-045 | Device Installation Execution | Installation Delivery | Field install |
| BP-I-046 | Home Assistant Control Plane Setup | Installation Delivery | HA setup |
| BP-I-047 | Tailscale Remote Access Setup | Installation Delivery | Remote access setup |
| BP-I-048 | Customer Dashboard Handoff | Customer Handoff | Dashboard handoff |
| BP-I-049 | Home Assistant User Training | Customer Handoff | Training |
| BP-I-050 | Ownership / Data Explanation | Customer Handoff | Ownership explanation |
| BP-I-051 | Monitoring / Dispatch Boundary Explanation | Claims / Brand Control | Claims boundary |
| BP-I-052 | Completion Signoff Evidence | Customer Handoff | Closeout evidence |
| BP-I-053 | Warranty Activation | Warranty / Support | Warranty start |
| BP-I-054 | Support Intake | Warranty / Support | Issue intake |
| BP-I-055 | Remote Troubleshooting | Warranty / Support | Support resolution |
| BP-I-056 | Extended Warranty Offer | Warranty / Support | Renewal |
| BP-I-057 | Post-Install Add-On Lifecycle | Sales | Expansion sales |
| BP-I-058 | Claims Guardrail Review | Claims / Brand Control | Copy safety |
| BP-I-059 | Visual Token Enforcement | Visual / UX Governance | Visual standards |
| BP-I-060 | Sitemap / Robots / Noindex Governance | SEO / Route Governance | Search visibility |
| BP-I-061 | Metadata Governance | SEO / Route Governance | Page metadata |
| BP-I-062 | CTA Governance | Website / Funnel | Conversion UX |
| BP-I-063 | Funnel Conversion Dashboard | Reporting / Dashboards | Funnel reporting |
| BP-I-064 | Cross-Vertical Process Reuse | Cross-Vertical Replication | Reuse model |
| BP-I-065 | Elder-Tech Ownership Reconciliation | Elder Tech / HALO Ownership | Ownership decision |
| BP-I-066 | Shared CRM / Payment / Scheduling Model | Cross-Vertical Replication | Shared admin model |
| BP-I-067 | Shared Support / Warranty Model | Cross-Vertical Replication | Shared support model |

---

## 3. Shared vs WNYHS-Only Capability List

### Shared Across WNYHS / Reliable Elder Care / HALO

| Capability | Reuse Notes |
|---|---|
| Business Governance | Same authority and promotion model can govern all verticals. |
| Execution Governance | Codex/GitHub/Cloudflare workflow is reusable. |
| Sales | Lead intake and qualification are shared, criteria vary. |
| Quote / Estimate | Same structure, vertical-specific content. |
| Payments | Shared Stripe/payment state model, policy may vary. |
| Scheduling | Shared appointment model. |
| CRM / Revenue Records | Shared HubSpot architecture with vertical overlays. |
| Customer Handoff | Shared closeout structure, vertical-specific training. |
| Warranty / Support | Shared structure, different coverage rules. |
| Claims / Brand Control | Shared compliance/claims discipline. |
| Website / Funnel | Shared route/CTA framework. |
| SEO / Route Governance | Shared route inventory model. |
| Reporting / Dashboards | Shared operating visibility model. |

### WNYHS-Only or WNYHS-Heavy

| Capability | Reason |
|---|---|
| Offer / Package Management | Bronze/Silver/Gold and home-security-specific packages. |
| Hardware / Inventory | Security devices, HA integrations, BOMs, vendor sourcing. |
| Installation Delivery | Physical smart-property install workflow. |
| Home Assistant Control Plane Setup | Core WNYHS technical delivery, reusable only where HA is used. |
| Tailscale Setup | WNYHS support standard, possibly reusable. |
| Visual / UX Governance | Shared concept, but current standards are WNYHS site-specific. |

### Unresolved / Shared-With-Ownership-Risk

| Capability | Ownership Issue |
|---|---|
| Elder Tech / HALO Ownership | Need to decide what belongs to WNYHS Elder Tech vs Reliable Elder Care / HALO. |
| Remote Support | Shared pattern, but support access policy differs by vertical. |
| Installed Asset Records | Shared structure, but asset types and warranty meaning differ. |
| Add-On Lifecycle | Could be shared, but WNYHS add-ons are device-heavy; HALO add-ons may be care/service-heavy. |

---

## 4. Capability Ownership Gaps

| Capability | Gap |
|---|---|
| Business Governance | Final BPR001/BPM ownership not created yet. |
| Runtime Contracts | Need full map of Stripe, HubSpot, scheduling, deployment, HA/Tailscale owners. |
| QA Validation | Evidence standard missing. |
| Hooks | No hook ownership model yet. |
| Sales | Qualification criteria missing. |
| Quote / Estimate | Customer estimate vs internal SOW split unresolved. |
| Payments | Deposit/refund/final-payment exception rules unresolved. |
| Scheduling | Appointment types and gating unresolved. |
| CRM / Revenue Records | HubSpot stages/properties unresolved. |
| Hardware / Inventory | Approved catalog and BOM source of truth unresolved. |
| Installation Delivery | Installer packet and signoff artifact unresolved. |
| Customer Handoff | Required training evidence unresolved. |
| Warranty / Support | Coverage boundaries and ticket model unresolved. |
| Elder Tech / HALO | Ownership and process boundary unresolved. |
| Reporting / Dashboards | KPI ownership and dashboard source unresolved. |

---

## 5. Capability Dashboard Candidates

| Capability | Dashboard Candidate |
|---|---|
| Business Governance | Governance queue / promotion status dashboard |
| Execution Governance | Task / PR / deployment validation dashboard |
| Sales | Lead intake and qualification dashboard |
| Quote / Estimate | Quote aging and approval dashboard |
| Payments | Deposit/final balance/payment exception dashboard |
| Scheduling | Quote/install appointment dashboard |
| CRM / Revenue Records | HubSpot data-quality dashboard |
| Website / Funnel | Funnel conversion dashboard |
| SEO / Route Governance | Route inventory / sitemap / metadata dashboard |
| Offer / Package Management | Package performance dashboard |
| Hardware / Inventory | BOM and inventory readiness dashboard |
| Installation Delivery | Install readiness / install-day dashboard |
| Customer Handoff | Closeout and handoff evidence dashboard |
| Warranty / Support | Warranty and support queue dashboard |
| Claims / Brand Control | Claims scan and copy approval dashboard |
| Visual / UX Governance | Token/page compliance dashboard |
| Cross-Vertical Replication | Shared process reuse dashboard |
| Elder Tech / HALO Ownership | Ownership decision dashboard |

---

## 6. Capability QA / Hook Candidates

| Capability | QA Candidates | Hook Candidates |
|---|---|---|
| Business Governance | authority-chain QA, promotion QA | missing owner-doc hook, task-reference hook |
| Execution Governance | Codex scope QA, PR QA, deployment QA | forbidden scope hook, deployment validation hook |
| Sales | lead completeness QA | required lead field hook |
| Quote / Estimate | estimate completeness QA, SOW consistency QA | claims scanner, missing scope hook |
| Payments | Stripe verification QA | browser-redirect trust hook, payment-state hook |
| Scheduling | appointment gate QA | schedule-without-deposit hook |
| CRM / Revenue Records | HubSpot property QA, duplicate QA | required property hook, lifecycle-state hook |
| Website / Funnel | CTA QA, route flow QA | broken CTA hook, dead-end route hook |
| SEO / Route Governance | sitemap QA, metadata QA | route/sitemap mismatch hook, noindex policy hook |
| Offer / Package Management | package consistency QA | package price/tier drift hook |
| Hardware / Inventory | compatibility QA, BOM completeness QA | unapproved hardware hook, missing SKU hook |
| Installation Delivery | readiness QA, install closeout QA | missing pick-list hook, missing signoff hook |
| Customer Handoff | dashboard access QA, training evidence QA | missing handoff evidence hook |
| Warranty / Support | warranty activation QA, support linkage QA | warranty-without-install hook, orphan support ticket hook |
| Claims / Brand Control | copy claims QA | forbidden claims hook |
| Visual / UX Governance | token compliance QA | hardcoded color hook |
| Cross-Vertical Replication | reuse classification QA | duplicate-process hook |
| Elder Tech / HALO Ownership | ownership decision QA | unresolved ownership flag hook |

---

## Next Clean Step

```text
WNYHS-BP001K — BPR001 Candidate Register Generation
```

Inputs:

- BP001I reconciled process list
- BP001J capability map

Output:

- candidate BPR001 structure
- master candidate register
- domain grouping
- promotion priority

Still candidate only. No SOPs, QA specs, hook specs, Codex prompts, or repo authority.
