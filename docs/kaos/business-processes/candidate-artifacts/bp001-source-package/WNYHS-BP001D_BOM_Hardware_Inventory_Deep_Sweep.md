# WNYHS-BP001D — BOM, Hardware Qualification, Inventory, Vendor, and Installer Packet Deep Sweep

## 1. Executive Summary

Preserve **WNYHS-BP001C** as candidate output.

This sweep focuses only on install-readiness infrastructure:

- standard package BOMs
- approved hardware rules
- Home Assistant compatibility
- substitutions
- vendor/source tracking
- price comparison
- inventory readiness
- installer pick lists
- install packet contents
- customer-facing vs internal hardware notes

Candidate extraction only. No SOPs. No Codex prompts. No repo authority.

Repository docs remain the durable source of truth, while Project KB only controls ChatGPT behavior. Approved work must still route through repo governance and bounded task dispatch before implementation.

---

## 2. Master BOM / Hardware Process Table

| Process ID | Process Name | Domain | Status | Maturity | Confidence | Priority |
|---|---|---|---|---|---|---|
| WNYHS-BP001D-001 | Standard Package BOM Definition | BOM | Partial | Identified | Medium | High |
| WNYHS-BP001D-002 | Bronze BOM Candidate | BOM | Partial | Identified | Medium | High |
| WNYHS-BP001D-003 | Silver BOM Candidate | BOM | Partial | Identified | Medium | High |
| WNYHS-BP001D-004 | Gold BOM Candidate | BOM | Partial | Identified | Medium | High |
| WNYHS-BP001D-005 | Custom Add-On BOM Handling | BOM | Partial | Identified | Medium | High |
| WNYHS-BP001D-006 | Home Assistant Compatibility Rule | Hardware Qualification | Defined | Partially Defined | High | High |
| WNYHS-BP001D-007 | Approved Hardware Catalog | Hardware Qualification | Future Definition Required | Concept | Medium | High |
| WNYHS-BP001D-008 | Unsupported Hardware Rejection | Hardware Qualification | Partial | Identified | Medium | High |
| WNYHS-BP001D-009 | Specialty Device Exception | Hardware Qualification | Partial | Identified | Medium | High |
| WNYHS-BP001D-010 | Hardware Substitution Approval | Hardware Qualification | Future Definition Required | Concept | Medium | High |
| WNYHS-BP001D-011 | Vendor Source Tracking | Vendor Management | Partial | Identified | Medium | Medium |
| WNYHS-BP001D-012 | Price Comparison | Vendor Management | Mentioned | Identified | Medium | Medium |
| WNYHS-BP001D-013 | Inventory Readiness Check | Inventory | Partial | Identified | Medium | High |
| WNYHS-BP001D-014 | Install-Day Pick List | Installer Packet | Partial | Identified | Medium | High |
| WNYHS-BP001D-015 | Installer Packet Assembly | Installer Packet | Future Definition Required | Concept | Medium | High |
| WNYHS-BP001D-016 | Customer-Facing Hardware Notes | Customer Estimate | Future Definition Required | Concept | Medium | Medium |
| WNYHS-BP001D-017 | Internal Hardware Notes | Internal SOW | Future Definition Required | Concept | Medium | High |
| WNYHS-BP001D-018 | Hardware Warranty Mapping | Warranty / Support | Future Definition Required | Concept | Medium | Medium |

---

## 3. Standard Package BOMs

### Candidate Process

| Field | Extraction |
|---|---|
| Process ID | WNYHS-BP001D-001 |
| Name | Standard Package BOM Definition |
| Business Capability | Convert package offers into repeatable installable material sets |
| Trigger | Package selected or quote created |
| Inputs | Package tier, approved hardware list, customer property needs |
| Outputs | BOM, pick list, inventory readiness status |
| Owner Role | Operator / installer |
| Systems | Quote/SOW, inventory tracker, vendor list, HubSpot candidate |
| Human Approval Required | Yes |
| Automation Risk | Medium |
| AI Readiness | Medium |
| SOP Needed | Yes, later |
| QA Candidate | Yes |
| Dashboard Candidate | Yes |
| Status | Partial |

### Known Package Anchors

| Tier | Known Status | Notes |
|---|---|---|
| Bronze | Partial | Price known, BOM needs exact definition |
| Silver | Partial | Recommended tier; BOM needs exact definition |
| Gold | Partial | Price known, BOM needs exact definition |
| Custom | Partial | Needs quote-to-BOM rules |

Open question: exact per-tier device quantities and approved SKU list need promotion into a durable owner document.

---

## 4. Approved Hardware Rules

### Core Rule Candidate

| Field | Extraction |
|---|---|
| Process ID | WNYHS-BP001D-006 |
| Name | Home Assistant Compatibility Rule |
| Status | Defined |
| Plain-English Definition | Hardware should only be sold as standard WNYHS equipment if it works as advertised through Home Assistant / WNYHS Core for the customer-facing capability being sold. |
| Trigger | Hardware considered for package, quote, add-on, or substitution |
| Inputs | Device model, integration method, required capability, local/cloud behavior |
| Outputs | Approved / rejected / exception-only classification |
| Owner Role | Operator |
| Human Approval Required | Yes |
| Automation Risk | Medium |
| AI Readiness | Recommendation only |
| Failure Modes | Device cannot deliver advertised function, requires cloud dependency, breaks local-first promise, creates support burden |

### Candidate Classification

| Classification | Meaning |
|---|---|
| Approved Standard | Safe for normal package use |
| Approved Add-On | Safe, but not part of core packages |
| Exception-Only | Customer-requested / specialty device with disclosure |
| Rejected | Should not be quoted or installed as WNYHS-supported |
| Needs Testing | Candidate device not yet validated |

---

## 5. Substitution Approval

| Field | Extraction |
|---|---|
| Process ID | WNYHS-BP001D-010 |
| Name | Hardware Substitution Approval |
| Status | Future Definition Required |
| Trigger | Approved part unavailable, too expensive, obsolete, or customer requests alternative |
| Inputs | Original part, substitute part, reason, capability comparison |
| Outputs | Approved substitution / rejected substitution / exception disclosure |
| Owner Role | Operator |
| Human Approval Required | Yes |
| Automation Risk | High |
| AI Readiness | Recommendation only |
| Failure Modes | Wrong protocol, cloud dependency, missing HA support, warranty mismatch, customer-facing promise no longer true |

Candidate hard rule: substitutions should not silently change the customer-facing capability, warranty position, local-first promise, or support burden.

---

## 6. Vendor / Source Tracking

| Field | Extraction |
|---|---|
| Process ID | WNYHS-BP001D-011 |
| Name | Vendor Source Tracking |
| Status | Partial |
| Trigger | Hardware selected for BOM or price comparison |
| Inputs | Vendor, product URL, SKU/model, price, availability, shipping estimate |
| Outputs | Preferred source, backup source, price note |
| Owner Role | Operator / procurement |
| Systems | Vendor sites, eBay, Amazon, Seeed Studio, manufacturer pages, inventory tracker |
| Human Approval Required | Yes |
| Automation Risk | Medium |
| AI Readiness | Medium |
| Dashboard Candidate | Yes |

### Price Comparison Candidate

| Field | Extraction |
|---|---|
| Process ID | WNYHS-BP001D-012 |
| Name | Price Comparison |
| Status | Mentioned |
| Plain-English Definition | Compare current listings for approved parts before quote/procurement when needed. |
| Failure Modes | Stale price, incompatible listing, used/refurb condition not disclosed, wrong region/plug/protocol |

---

## 7. Inventory Readiness

| Field | Extraction |
|---|---|
| Process ID | WNYHS-BP001D-013 |
| Name | Inventory Readiness Check |
| Status | Partial |
| Trigger | Install scheduled or quote accepted |
| Inputs | Approved BOM, stock on hand, vendor availability, install date |
| Outputs | Ready / needs purchase / blocked / substitution review |
| Owner Role | Operator / installer |
| Human Approval Required | Yes |
| Automation Risk | Medium |
| AI Readiness | Medium |
| QA Candidate | Yes |
| Dashboard Candidate | Yes |

### Candidate Readiness States

| State | Meaning |
|---|---|
| Not Checked | BOM not reviewed |
| Ready | All parts available |
| Purchase Needed | Parts must be ordered |
| Substitution Needed | Approved item unavailable |
| Blocked | Cannot install as scoped |
| Exception Review | Customer-requested or unsupported item needs approval |

---

## 8. Installer Pick List

| Field | Extraction |
|---|---|
| Process ID | WNYHS-BP001D-014 |
| Name | Install-Day Pick List |
| Status | Partial |
| Trigger | Install scheduled and BOM approved |
| Inputs | BOM, customer address, package tier, add-ons, installer role |
| Outputs | Pull list, device count, accessories, tools, install notes |
| Owner Role | Installer / operator |
| Human Approval Required | Yes |
| Automation Risk | Medium |
| AI Readiness | Medium |
| QA Candidate | Yes |
| Dashboard Candidate | Yes |

### Candidate Pick List Sections

- Customer/job identifier
- Install date
- Package tier
- Required control hardware
- Sensors
- Cameras
- Locks / access devices
- Leak/temp devices
- Network/accessories
- Mounting supplies
- Power supplies
- Spare batteries
- Tools/special notes
- Items needing customer disclosure

---

## 9. Installer Packet Contents

| Field | Extraction |
|---|---|
| Process ID | WNYHS-BP001D-015 |
| Name | Installer Packet Assembly |
| Status | Future Definition Required |
| Trigger | Install is ready for field execution |
| Inputs | Quote, SOW, BOM, pick list, schedule, customer/property notes |
| Outputs | Installer packet |
| Owner Role | Operator |
| Human Approval Required | Yes |
| Automation Risk | Medium |
| AI Readiness | Draft/recommendation only |

### Candidate Packet Contents

| Section | Purpose |
|---|---|
| Customer summary | Who/where/appointment |
| Approved scope | What was sold |
| Internal SOW | What must be installed/configured |
| BOM | What materials are required |
| Pick list | What to bring |
| Property notes | Layout, access, Wi-Fi, constraints |
| Device placement notes | Intended locations |
| HA setup notes | Dashboard/control-plane expectations |
| Tailscale notes | Remote access/support requirement |
| Payment gate | Final balance status |
| Handoff requirements | What customer must be shown |
| Warranty notes | Coverage start requirements |

---

## 10. Customer-Facing vs Internal Hardware Notes

| Type | Customer-Facing Notes | Internal Notes |
|---|---|---|
| Purpose | Explain what customer is buying | Guide install/support execution |
| Detail Level | Outcome-focused | SKU/model/configuration-focused |
| Claims Risk | High | Medium |
| Should Include | Capabilities, exclusions, ownership, no subscription claim if true | SKU, protocol, integration, placement, dependencies |
| Should Avoid | Unsupported guarantees, monitoring/dispatch claims | Customer-confusing jargon in customer docs |
| Human Review | Required | Required |

Candidate split:

- **Customer estimate:** “what you get and what it does.”
- **Internal SOW:** “what we install, configure, verify, and support.”
- **BOM:** “what parts are required.”
- **Pick list:** “what installer brings.”

---

## 11. Failure States

| Failure State | Area | Risk |
|---|---|---|
| BOM missing required controller | BOM | Install cannot function |
| Wrong protocol selected | Hardware | Device incompatible |
| Device works in app but not HA | Compatibility | Customer promise fails |
| Cloud-only feature sold as local | Claims / hardware | Brand and support risk |
| Price changed after quote | Vendor | Margin loss |
| Vendor out of stock | Procurement | Install delay |
| Used/refurb item not disclosed | Vendor | Warranty risk |
| Substitute not approved | Hardware | Support risk |
| Inventory not checked before install | Install readiness | Failed install day |
| Pick list missing accessories | Installer packet | Delay/rework |
| Customer-facing doc overpromises | Claims | Legal/trust risk |
| Internal notes missing model/SKU | Support | Future troubleshooting issue |
| Warranty not tied to installed device list | Support | Coverage ambiguity |

---

## 12. Automation Candidates

| Candidate Automation | Suitability | Risk |
|---|---|---|
| Generate BOM from approved package tier | Medium | Medium |
| Compare BOM against approved hardware catalog | High | Medium |
| Flag unsupported hardware | High | Medium |
| Flag missing HA compatibility evidence | High | Medium |
| Generate pick list from BOM | High | Medium |
| Flag inventory gaps | High | Medium |
| Vendor price refresh | Medium | Medium |
| Margin warning from price drift | Medium | Medium |
| Customer/internal note splitter | Medium | Medium-high |
| Warranty asset record creation | Medium | Medium |

---

## 13. Dashboard Candidates

| Dashboard | Purpose |
|---|---|
| Approved Hardware Catalog Dashboard | Shows approved/rejected/testing hardware |
| BOM Readiness Dashboard | Shows package BOM completeness |
| Inventory Readiness Dashboard | Shows ready/blocked/purchase-needed jobs |
| Vendor Price Dashboard | Shows preferred/back-up sources |
| Substitution Review Dashboard | Shows items needing approval |
| Installer Packet Dashboard | Shows packet readiness |
| Warranty Asset Dashboard | Shows installed devices tied to customers |

---

## 14. Human Approval Gates

| Gate | Reason |
|---|---|
| Approve package BOM | Controls standard offer |
| Approve hardware for catalog | Compatibility/support risk |
| Approve substitution | Customer promise and warranty risk |
| Approve exception-only device | Disclosure required |
| Approve vendor/source | Price, warranty, legitimacy |
| Approve install readiness | Prevents failed job |
| Approve customer-facing hardware notes | Claims risk |
| Approve internal SOW notes | Execution risk |
| Approve warranty asset record | Support accuracy |

---

## 15. Processes Requiring Governance Reconciliation

| Process | Missing Definition |
|---|---|
| Standard BOM ownership | Where BOMs live |
| Approved hardware catalog | Owner document/system needed |
| HA compatibility evidence | Required proof/test method |
| Specialty device exceptions | Disclosure and support boundary |
| Substitution approval | Who approves and how recorded |
| Vendor tracking | Source of truth needed |
| Inventory tracking | System of record needed |
| Pick list generation | Format and owner needed |
| Installer packet | Required contents needed |
| Customer vs internal notes | Document split needed |
| Warranty asset mapping | Installed device record model needed |

---

## 16. Recommended Next Extraction Batch

Proceed next with:

**WNYHS-BP001E — Customer Handoff, Dashboard Training, Warranty, Support, and Add-On Lifecycle Deep Sweep**

Focus only on:

- customer dashboard handoff
- Home Assistant user training
- remote access explanation
- customer-owned equipment/data explanation
- warranty activation
- support intake
- remote troubleshooting
- post-install add-ons
- renewal/extended warranty
- customer satisfaction / closeout evidence

Candidate extraction only. No SOPs. No Codex prompts. No repo authority.
