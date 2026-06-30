# INSTALL006A - Shared Job Data Model and HubSpot Field Architecture - REV01

Status: Active architecture standard
Customer-facing: No
Implementation authority: No
Task ID: INSTALL006A
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

---

## 1. Purpose

This document defines the candidate shared operational data model that connects upstream sales, estimating, SOW, quote, BOM, ordering, and inventory workflows to downstream bench build, hardware naming/configuration, dashboard preparation, install, commissioning, customer signoff, warranty, support, HubSpot, and future installer portal workflows.

The intended record flow is:

sales -> estimating -> SOW -> quote -> BOM -> ordering -> inventory -> bench build -> hardware naming/config -> dashboard prep -> install -> commissioning -> customer signoff -> warranty -> support -> HubSpot -> future installer portal

The purpose is to make future data architecture decisions explicit before any HubSpot fields, custom objects, scripts, portal screens, APIs, runtime sync, source code, or database changes are implemented.

## 2. Source Boundary

INSTALL006A is architecture/specification only.

Source posture:

- Uses `WNYHS-INSTALL006A-KG001 - Shared Job Data Model Knowledge Grab` as candidate extraction context from the bounded work order.
- Treats repository documentation as the durable source of truth.
- Treats all fields, objects, screens, and process stages in this document as candidates pending future bounded implementation tasks.
- Does not authorize HubSpot field creation.
- Does not authorize HubSpot object creation.
- Does not authorize HubSpot schema, property, pipeline, workflow, or write-path changes.
- Does not authorize portal implementation.
- Does not authorize runtime sync, scripts, APIs, source code, database changes, or customer data storage.
- Does not authorize Stripe/payment sync, scheduling sync, inventory automation, ordering automation, or customer-facing document generation.

## 3. Shared Record Chain

Candidate canonical chain:

```text
Contact / Customer
-> Property
-> Deal / Opportunity
-> Estimate
-> SOW
-> Quote
-> BOM
-> Order / Procurement
-> Inventory Allocation
-> Bench Build
-> Install Job
-> Commissioning Record
-> Customer Signoff
-> Installed Asset Register
-> Warranty Record
-> Support Ticket / RMA
-> Expansion / Add-on Opportunity
```

This chain is candidate architecture only. It is intended to support future HubSpot/runtime/portal decisions, not to define current executable schema.

## 4. Upstream Model

### 4.1 Known Decisions

- The public funnel and quote path are protected by repository governance.
- Quote-system documents already distinguish customer-facing estimate/proposal content from internal SOW/install-planning content.
- The internal SOW/installer packet should preserve technical planning, BOM/order readiness, installer notes, dashboard planning, and QA detail.
- BOM, ordering, inventory, and installer pick-list automation are not currently authorized by this task.
- Payment state remains protected and must not be treated as authoritative from frontend redirects.
- HubSpot writes remain protected and must go through the locked API boundary when runtime work is separately authorized.

### 4.2 Inferred Recommendations

- A shared job model should connect customer, property, estimate, SOW, quote, BOM, procurement, inventory, bench, install, asset, warranty, and support records.
- Property should likely become a durable shared concept, but whether it lives as a HubSpot custom object, portal/external object, or quote-system record needs confirmation.
- Estimate, SOW, BOM, Bench Build, Install Job, and Installed Asset may be separate records or phases of a broader Job model; the choice depends on HubSpot object availability and future runtime architecture.
- Payment references should be stored as references only in candidate architecture until a protected Stripe/runtime task defines authoritative sync.
- Inventory allocation should be distinct from BOM planning so planned hardware does not imply parts are physically available.

### 4.3 Needs Confirmation

- Whether HubSpot custom objects are available for the account.
- Whether Household/Account should be modeled as Company, custom object, or omitted for residential work.
- Whether a single Job object should carry lifecycle stages or multiple objects should represent Estimate, SOW, BOM, Bench Build, Install Job, and Commissioning.
- Which upstream quote-system fields are canonical today versus local prototype-only.
- What minimum field set is needed before installer portal planning.

## 5. Downstream INSTALL Model

Downstream concepts map to the existing INSTALL standards:

| Downstream concept | Related standard | Candidate record relationship |
| --- | --- | --- |
| Bench Build | `INSTALL002_BENCH_BUILD_CHECKLIST_REV01.md` | Bench Build record tracks readiness, exceptions, hardware inventory, and installer handoff. |
| Hardware Naming / Config | `INSTALL004_DEVICE_NAMING_STANDARD_REV01.md` | Device names and labels should map installed or staged hardware back to BOM and inventory allocation. |
| Entity / Area Setup | `INSTALL005_ENTITY_AND_AREA_STANDARDS_REV01.md` | Area/entity readiness should tie to property, device placement, dashboard readiness, and commissioning. |
| Dashboards | `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md` | Customer, Installer, and Service Dashboard readiness should be recorded before handoff. |
| Install | `INSTALL001_INSTALLER_PLATFORM_ARCHITECTURE_REV01.md` | Install Job record tracks field execution and onsite exceptions. |
| Commissioning | `INSTALL001` and future `INSTALL008` | Commissioning Record validates controller, devices, areas, dashboards, automations, backup posture, and handoff readiness. |
| Customer Signoff | Future `INSTALL009` | Signoff record captures customer training, acceptance, exceptions, and closeout posture. |
| Installed Asset Register | Future `ASSET001` | Installed asset records connect serialized items, property placement, warranty, support, and replacement history. |
| Warranty | Future `WARRANTY001` | Warranty record defines start/end posture and support eligibility. |
| Support Tickets / RMA | Future `WARRANTY001` and `INSTALL010` | Support/RMA records connect support issue, asset, warranty, resolution, and follow-up opportunity. |

## 6. HubSpot Object / Record Candidates

These are candidate records only. `Yes`, `No`, and `Review` describe likely suitability for future architecture, not implementation approval.

| Record/object | Purpose | Likely owner system | HubSpot object candidate | Portal object candidate | Needs confirmation |
| --- | --- | --- | --- | --- | --- |
| Contact | Individual customer/contact identity and communication details. | HubSpot | Yes | Review | Customer/contact authority and visibility rules. |
| Company / Household / Account | Optional account/household grouping for residential or multi-property work. | HubSpot or portal | Review | Review | Whether residential work should use Company or a custom account object. |
| Property | Physical install location and site profile. | Quote system, future portal, or HubSpot | Review | Yes | Custom object availability and canonical property ID. |
| Deal | Sales opportunity and pipeline status. | HubSpot | Yes | No | Relationship to Estimate/Quote and pipeline stage locks. |
| Estimate | Early scoped assessment and pricing posture. | Quote system | Review | Review | Separate object versus job phase. |
| SOW | Internal scope of work and install planning detail. | Quote system/operator docs | Review | Review | Separate object versus linked document/output. |
| Quote | Customer-facing proposal and payment reference context. | Quote system / protected payment runtime | Review | Review | Which quote fields sync to HubSpot and when. |
| BOM | Planned hardware and materials. | Quote/catalog system | Review | Review | Whether BOM lives in HubSpot, catalog tooling, or external inventory system. |
| Order / Procurement | Vendor order and purchasing status. | Operator/inventory workflow | Review | Review | Whether ordering should be tracked in HubSpot or outside it. |
| Inventory Item | Canonical item/part, stock, or serialized hardware identity. | Catalog/inventory system | Review | Review | Inventory source of truth. |
| Inventory Allocation | Assignment of inventory to a job. | Inventory workflow | Review | Yes | Allocation state and serialized item handling. |
| Bench Build | Pre-install controller/hardware preparation record. | Installer platform | Review | Yes | Checklist persistence and owner system. |
| Install Job | Field install execution record. | Installer platform / scheduling workflow | Review | Yes | Relationship to scheduling and commissioning. |
| Commissioning Record | Internal readiness/acceptance gate before handoff. | Installer platform | Review | Yes | Minimum commissioning checklist fields. |
| Customer Signoff | Customer training, acceptance, exceptions, and closeout posture. | Installer platform / customer docs | Review | Yes | Signature/storage authority and customer visibility. |
| Installed Asset | Installed hardware or configured asset tied to property/job. | Asset register | Review | Yes | Asset ID format and warranty relationship. |
| Warranty | Warranty eligibility, dates, and status. | Warranty/support workflow | Review | Review | Warranty start trigger and renewal/extension model. |
| Ticket / RMA | Support issue, replacement, return, or follow-up record. | HubSpot service/support or future support tool | Yes | Review | Whether HubSpot Tickets are available and sufficient. |

## 7. Candidate HubSpot Property Groups

Candidate property groups:

- Customer Identity
- Property Profile
- Sales Qualification
- Estimate Details
- SOW Scope
- Quote / Payment
- BOM / Hardware
- Ordering / Procurement
- Inventory Allocation
- Bench Build
- Install Scheduling
- Installation Execution
- Commissioning
- Customer Signoff
- Installed Assets
- Warranty
- Support / RMA
- Portal Visibility
- Internal Governance / Audit

These groups are planning labels only. They do not authorize HubSpot property group creation.

## 8. Candidate Field Inventory

Field names are candidate internal names only. They must be reviewed before any HubSpot, database, API, portal, or script implementation.

| Field label | Candidate internal name | Record/object | Property group | Field type candidate | Required | Installer visible | Customer visible | Source workflow | Notes / confirmation needed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Customer name | customer_name | Contact / Customer | Customer Identity | Text | Yes | Review | Review | Sales intake | Confirm whether contact name or household label is canonical. |
| Primary contact | primary_contact | Contact / Customer | Customer Identity | Text / association | Yes | Review | Review | Sales intake | May duplicate Contact if HubSpot Contact is canonical. |
| Phone | phone | Contact / Customer | Customer Identity | Phone | Review | Review | Review | Sales intake | Visibility and privacy rules needed. |
| Email | email | Contact / Customer | Customer Identity | Email | Review | Review | Review | Sales intake | Visibility and privacy rules needed. |
| Preferred contact method | preferred_contact_method | Contact / Customer | Customer Identity | Select | Review | Review | Review | Sales intake | Candidate values need confirmation. |
| Customer type | customer_type | Contact / Customer | Customer Identity | Select | Review | Review | No | Sales qualification | Residential, small business, existing customer, other. |
| Existing WNYHS core customer | existing_wnyhs_core_customer | Contact / Customer | Sales Qualification | Boolean | Review | Review | No | Sales qualification | Confirm business meaning and CRM source. |
| Privacy preference notes | privacy_preference_notes | Contact / Customer | Customer Identity | Long text | No | Review | No | Sales/support | Must not store secrets or sensitive unnecessary detail. |
| Property address | property_address | Property | Property Profile | Text/address | Yes | Yes | Review | Property assessment | Customer data; avoid example real addresses in repo docs. |
| Property type | property_type | Property | Property Profile | Select | Review | Yes | Review | Property assessment | Candidate values need confirmation. |
| Square footage | square_footage | Property | Property Profile | Number | Review | Yes | Review | Property assessment | Approximate versus confirmed distinction needed. |
| Floors | floors | Property | Property Profile | Number / select | Review | Yes | Review | Property assessment | Include basement/attic handling later. |
| Garage present | garage_present | Property | Property Profile | Boolean | Review | Yes | Review | Property assessment | Detached garage should also use detached structures. |
| Detached structures | detached_structures | Property | Property Profile | Text / multi-select | No | Yes | Review | Property assessment | Confirm if separate structures need child records. |
| Exterior coverage needed | exterior_coverage_needed | Property | Property Profile | Boolean / select | Review | Yes | Review | Property assessment | Avoid implying final scope before quote approval. |
| Floorplan status | floorplan_status | Property | Property Profile | Select | Review | Yes | Review | Floorplan/quote | Candidate values: missing, rough, provided, reviewed, approved. |
| LiDAR scan available | lidar_scan_available | Property | Property Profile | Boolean | No | Yes | Review | Property assessment | Planning signal only. |
| Remote assessment available | remote_assessment_available | Property | Property Profile | Boolean | No | Yes | Review | Property assessment | Requires future policy for evidence quality. |
| Network notes | network_notes | Property | Property Profile | Long text | No | Yes | No | Bench/install | Must not store passwords, SSIDs, secrets, or private URLs. |
| Estimate status | estimate_status | Estimate | Estimate Details | Select | Yes | Review | Review | Estimate | Candidate lifecycle values need confirmation. |
| Estimate source | estimate_source | Estimate | Estimate Details | Select | Review | Review | No | Sales/estimate | Source attribution may be protected in runtime tasks. |
| Selected package | selected_package | Estimate / Quote | Estimate Details | Select / association | Review | Yes | Yes | Estimate/quote | Must align with package/catalog authority. |
| Add-on modules | add_on_modules | Estimate / Quote | Estimate Details | Multi-select / association | No | Yes | Yes | Estimate/quote | Confirm relationship to catalog/solution records. |
| Internal SOW status | internal_sow_status | SOW | SOW Scope | Select | Review | Yes | No | SOW | Internal only unless future task says otherwise. |
| Quote status | quote_status | Quote | Quote / Payment | Select | Yes | Review | Review | Quote | Must not replace payment authority. |
| Quote total | quote_total | Quote | Quote / Payment | Currency | Review | Review | Review | Quote | Pricing authority remains quote system. |
| Deposit required | deposit_required | Quote | Quote / Payment | Currency / boolean | Review | Review | Review | Quote/payment | Protected payment relationship. |
| Deposit paid | deposit_paid | Quote | Quote / Payment | Boolean | Review | Review | Review | Payment | Must be webhook/server-authoritative in future runtime tasks. |
| Balance due | balance_due | Quote | Quote / Payment | Currency | Review | Review | Review | Quote/payment | Derived value rules needed. |
| Payment runtime reference | payment_runtime_reference | Quote | Quote / Payment | Text | Review | No | No | Payment runtime | Reference only; no secrets; protected runtime task required. |
| BOM status | bom_status | BOM | BOM / Hardware | Select | Yes | Yes | No | BOM | Candidate lifecycle values need confirmation. |
| BOM version | bom_version | BOM | BOM / Hardware | Text / number | Review | Yes | No | BOM | Needed to avoid stale pick lists. |
| Approved hardware only | approved_hardware_only | BOM | BOM / Hardware | Boolean | Review | Yes | No | BOM/catalog | Confirms source-approved posture, not purchase approval. |
| Specialty device disclosure required | specialty_device_disclosure_required | BOM / Quote | BOM / Hardware | Boolean | Review | Yes | Review | Quote/BOM | Needs copy/claims review if customer-facing. |
| Order status | order_status | Order / Procurement | Ordering / Procurement | Select | Review | Review | No | Ordering | Ordering automation not authorized here. |
| Vendor | vendor | Order / Procurement | Ordering / Procurement | Text / select | No | Review | No | Ordering | Avoid private vendor notes if not needed. |
| Order reference | order_reference | Order / Procurement | Ordering / Procurement | Text | No | Review | No | Ordering | No credentials, URLs with tokens, or private account detail. |
| Inventory allocated | inventory_allocated | Inventory Allocation | Inventory Allocation | Boolean | Review | Yes | No | Inventory | Separate planned BOM from allocated stock. |
| Serialized items required | serialized_items_required | Inventory Allocation | Inventory Allocation | Boolean | Review | Yes | No | Inventory/asset | Needed before installed asset creation. |
| Missing parts | missing_parts | Inventory Allocation | Inventory Allocation | Long text | No | Yes | No | Inventory/bench | Should drive readiness exceptions later. |
| Bench build status | bench_build_status | Bench Build | Bench Build | Select | Yes | Yes | No | Bench build | Align with INSTALL002 checklist phases. |
| HA controller ID | ha_controller_id | Bench Build / Installed Asset | Bench Build | Text | Review | Yes | No | Bench build/asset | No secrets or private URLs. |
| Tailscale status | tailscale_status | Bench Build / Service | Bench Build | Select | Review | Yes | No | Bench/service | Conditional support posture; no keys or private URLs. |
| Device naming status | device_naming_status | Bench Build | Bench Build | Select | Review | Yes | No | INSTALL004 | Tracks provisional, confirmed, blocked, deferred. |
| Dashboard template | dashboard_template | Bench Build / Dashboard | Bench Build | Text / select | Review | Yes | No | INSTALL006 | Template identity only; no dashboard implementation. |
| Install status | install_status | Install Job | Installation Execution | Select | Yes | Yes | Review | Install | Candidate field for future job lifecycle. |
| Commissioning status | commissioning_status | Commissioning Record | Commissioning | Select | Yes | Yes | Review | Commissioning | Align later with INSTALL008. |
| Customer training complete | customer_training_complete | Customer Signoff | Customer Signoff | Boolean | Review | Yes | Review | Handoff/signoff | Future INSTALL009 should define evidence. |
| Signoff status | signoff_status | Customer Signoff | Customer Signoff | Select | Review | Yes | Review | Handoff/signoff | Signature/storage authority needs separate task. |
| Install closeout status | install_closeout_status | Install Job | Installation Execution | Select | Review | Yes | No | Install closeout | Connects commissioning, signoff, asset, warranty. |
| Warranty start date | warranty_start_date | Warranty | Warranty | Date | Review | Review | Review | Warranty | Trigger needs confirmation. |
| Warranty end date | warranty_end_date | Warranty | Warranty | Date | Review | Review | Review | Warranty | Derived from start and policy. |
| Extended warranty status | extended_warranty_status | Warranty | Warranty | Select | No | Review | Review | Warranty | Future policy required. |
| Installed asset ID | installed_asset_id | Installed Asset | Installed Assets | Text | Review | Yes | Review | Asset register | Canonical ID format open. |
| Support ticket type | support_ticket_type | Ticket / RMA | Support / RMA | Select | Review | Review | Review | Support | Candidate values need support model. |
| RMA required | rma_required | Ticket / RMA | Support / RMA | Boolean | Review | Review | No | Support/RMA | Replacement workflow future task. |
| Support resolution status | support_resolution_status | Ticket / RMA | Support / RMA | Select | Review | Review | Review | Support | Candidate lifecycle values need confirmation. |
| Portal visibility | portal_visibility | Any candidate portal record | Portal Visibility | Select | Review | Yes | Review | Portal planning | Candidate values: internal, installer, customer, hidden. |
| Internal audit note | internal_audit_note | Any internal record | Internal Governance / Audit | Long text | No | Review | No | Governance/audit | Must not contain secrets or unrelated private detail. |

## 9. Portal Screen Architecture

The following screens are private installer/admin portal candidates only. This document does not authorize portal implementation, routes, UI, auth, database storage, APIs, or runtime sync.

### 9.1 Installer Screens

- Job list
- Job detail
- Property profile
- SOW view
- BOM / pick list
- Bench build checklist
- Hardware naming/config sheet
- Area/entity setup
- Dashboard readiness
- Install checklist
- Commissioning checklist
- Customer signoff
- Installed asset register
- Warranty/support handoff

### 9.2 Operator/Admin Screens

- Estimate builder
- Quote/SOW approval
- BOM approval
- Ordering queue
- Inventory dashboard
- Install readiness board
- Warranty/support dashboard

## 10. Business Process Stages

Candidate end-to-end stages:

1. Lead intake
2. Fit check / qualification
3. Property assessment
4. Estimate
5. Internal SOW
6. Quote
7. Deposit/payment
8. BOM generation
9. Ordering/procurement
10. Inventory allocation
11. Bench build
12. Install scheduling
13. Field install
14. Commissioning
15. Customer training/signoff
16. Closeout
17. Warranty period
18. Support/RMA
19. Expansion/add-on sale

## 11. Protected System Boundaries

INSTALL006A is documentation and architecture only.

It does not authorize:

- HubSpot implementation.
- HubSpot field creation.
- HubSpot object creation.
- HubSpot schema, property, pipeline, workflow, or write-path changes.
- HubSpot field creation scripts.
- Direct frontend/client HubSpot writes.
- Any bypass of `/api/lead-signal`.
- Stripe/payment sync.
- Client-side payment confirmation logic.
- Scheduling sync or calendar writes.
- Installer portal implementation.
- Runtime APIs, scripts, databases, source code, UI, routes, CSS, public assets, dependencies, package-lock, Cloudflare config, or environment changes.
- Home Assistant configuration, dashboards, automations, customer-specific install files, or actual customer data.
- Inventory automation, ordering automation, hardware purchasing, or vendor integrations.
- Customer data or secrets in repository docs.

Future implementation requires separate bounded tasks with their own governing docs, target files, validation, and protected-system review.

## 12. Open Questions

- Are HubSpot custom objects available?
- Should Property be a HubSpot custom object or portal/external object?
- Should Estimate/SOW/BOM/Install Job be separate objects or one Job object with stages?
- What is the canonical job ID format?
- What owns the installed asset register?
- What fields are installer-visible versus internal-only?
- What fields sync to customer-facing documents?
- Should inventory begin in HubSpot, spreadsheet, repo catalog, or external app?
- What triggers warranty start?
- What is the minimum viable HubSpot field set?
- Should Household/Account use HubSpot Company, a custom object, or no separate record?
- Which quote-system local fields are durable enough to become canonical?
- What field-level privacy rules apply before any portal screen is built?
- How should support/RMA records connect to expansion/add-on opportunities?

## 13. Future Task Roadmap

The following future tasks are planning-only. They are not active unless added separately to the Master Task Register or explicitly created as bounded prompt work orders under repository execution gates.

- HUBSPOT-INSTALL001 - HubSpot Installer Property/Object Model Spec
- HUBSPOT-INSTALL002 - HubSpot Field Creation Script
- PORTAL001 - Installer Portal Architecture
- PORTAL002 - Installer Portal Screen Map
- INSTALL008 - Bench Testing and Commissioning Checklist
- INSTALL009 - Customer Handoff Package
- INSTALL010 - Service Dashboard and Remote Support Standard
- INVENTORY001 - Parts / Inventory Workflow Standard
- ASSET001 - Installed Asset Register Standard
- WARRANTY001 - Warranty and Support Ticket Model

Recommended next task: INSTALL007 - Dashboard Theme Readiness Standard.
