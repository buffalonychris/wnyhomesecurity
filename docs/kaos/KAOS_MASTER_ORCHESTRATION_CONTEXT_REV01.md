# KAOS Master Orchestration Context REV01

Status: Approved planning and orchestration context
Customer-facing: No
Implementation authority: No
Purpose: Preserve operator-approved KAOS direction so future bounded tasks can route work without relying on chat history.

## 1. Authority posture

This document does not replace higher-authority repository governance, active owner documents, business-process owners, data contracts, Master Task Register records, or bounded work orders.

Where an existing canonical owner already defines a subject, that owner remains controlling. This document is a durable orchestration context and future-routing reference.

No implementation may be performed from this document alone.

## 2. KAOS identity

KAOS is the private online business operating system and operator control plane for WNY Home Security.

KAOS is not the WNY Home Security customer-facing website and is not merely an administrator page inside that website.

KAOS should eventually provide one coherent interface across business operations while preserving the canonical ownership of data, governance, business processes, runtime contracts, and protected systems outside the UI itself.

Three concepts must remain distinct:

1. **KAOS operating model** — governance, architecture, knowledge, process, decision, relationship, and execution philosophy.
2. **KAOS application** — the online KAOS Command Center used by authorized operators.
3. **KAOS capabilities/modules** — individual operational surfaces such as Governance, Leads, Approved Offerings, Procurement, Website Management, Support, and other modules defined below.

## 3. Canonical online application direction

The immediate durable application direction is an online KAOS Command Center under the `/kaos` application namespace in the existing deployable repository/runtime.

The existing ChatGPT Sites KAOS prototype is a UX, field-discovery, workflow-discovery, and capability-discovery reference. It is not canonical data authority and its current filler/demo data is not automatically authoritative.

For near-term implementation:

- reproduce the useful KAOS Sites UI/UX language rather than the WNYHS Operator visual identity;
- preserve real operational capability behavior where it already exists;
- retain prototype/filler modules as UI reference or shells where necessary;
- integrate the read-only Governance Viewer into the KAOS visual system;
- avoid unnecessary backend, database, authentication, HubSpot, Cloudflare Access, or public website changes during the initial online consolidation task unless separately authorized.

## 4. Master data before prototype UI

KAOS UI must conform to the best governed master data model, not force canonical data to match an exploratory prototype screen.

Required precedence for module design:

Business model
-> master data model / data dictionary
-> system-of-record ownership
-> business process
-> KAOS capability model
-> UI / UX

Prototype screens may reveal missing fields, relationships, statuses, and operator needs, but they do not become authoritative merely because they exist in the prototype.

## 5. System-of-record direction

KAOS is an orchestration and presentation layer, not the default database for every business object.

Current architectural direction:

| Information/domain | Primary system or owner direction |
| --- | --- |
| Governance, architecture, standards, work orders, task authority | Repository |
| KAOS business-process and relationship definitions | Repository KAOS owners |
| Approved hardware / offering intelligence | Existing governed repository and Google Workspace/Sheets sources as currently defined by their owners |
| Procurement operational data | Existing governed procurement process/data sources |
| Leads, contacts, customers, deals, pipeline and CRM lifecycle | HubSpot |
| Customer journey operational state | HubSpot unless a future governed owner says otherwise |
| Sales activities and follow-ups | HubSpot unless a future governed owner says otherwise |
| Working documents, research artifacts, shared business sheets | Google Workspace where appropriate |
| Website/runtime events | Website/runtime contracts and appropriate downstream systems |
| Payments | Stripe and existing payment authority |
| Scheduling | Existing Google Calendar / scheduling architecture |
| KAOS UI | Operator presentation/orchestration layer |
| Governance Viewer | Repository-derived read-only projection |

Future HubSpot design should use the KAOS UI field inventory as requirements evidence, but the HubSpot master data dictionary and object/property model may supersede prototype field layouts.

## 6. Protected existing operational capabilities

### 6.1 Approved Offerings

Approved Offerings is not a simple list of parts.

It is a governed ingredient library and composition capability that supports the creation of homeowner and commercial solutions across all six WNYHS pillars.

Conceptual layers:

Approved Hardware
-> Capability / Constraint / Compatibility Intelligence
-> Solution Building Blocks
-> Governed Homeowner and Commercial Solution Definitions
-> Customer-Specific Commercial Configurations
-> SOW / Quote / Install / Support / Expansion

Approved hardware is analogous to approved ingredients. A validated or approved component does not automatically become a marketed solution.

The existing Approved Offerings capability already references structured operational sources including, at minimum, concepts such as:

- approved parts;
- approved pending promotion;
- category matrix;
- inventory intake template;
- control coverage;
- controlled lists;
- source notes;
- camera specifications;
- other governed hardware/capability intelligence.

Approved Offerings is actively used in customer-facing solution development and quote/SOW preparation.

For KAOS consolidation tasks, Approved Offerings must be treated as **REFERENCE / PRESERVE ONLY** unless a separately bounded task explicitly authorizes changes to its business process, data model, governance, solution logic, approval logic, or integrations.

### 6.2 Procurement

Procurement is also an existing operational capability with established business-process and governance work.

For KAOS consolidation tasks, Procurement must be treated as **REFERENCE / PRESERVE ONLY** unless separately authorized.

Migration or shell work may preserve navigation and verify compatibility, but may not rewrite procurement logic, statuses, calculations, data ownership, financial behavior, or process governance.

## 7. Definitive planned KAOS modules

The following capabilities are definitive planned KAOS modules. Their presence in this roadmap does not authorize implementation; each production module requires its own bounded work and module governance.

### Existing/prototype operational areas

- Today / command center
- Leads
- Customers
- Approved Offerings
- Procurement
- Installations
- Money
- Automations
- Business Overview
- Governance

### Additional definitive modules

- Social Media Manager
- Correspondence Handler
- Internal SOW Generator
- External Quote System
- Contracts / Legal System
- Category Manager for Website / Pillars
- Solutions Manager for Website
- Dashboard Management Module
- Support Module

## 8. Module purposes and major relationships

| Module | Primary responsibility | Major relationships |
| --- | --- | --- |
| Social Media Manager | Plan, create, approve, schedule, track, and reuse social content | Solutions, Categories, media/assets, website, campaigns |
| Correspondence Handler | Govern customer, vendor, and internal correspondence and reusable communications | HubSpot, leads, customers, quotes, support, contracts |
| Internal SOW Generator | Produce technically accurate internal scopes using governed solution/component inputs | Approved Offerings, customer/property, Procurement, install planning |
| External Quote System | Convert approved scope/configuration into customer-facing commercial offers | SOW, pricing, customer, solutions, payment handoff |
| Contracts / Legal System | Govern agreements, disclosures, terms, signatures, versions, executed documents, amendments, retention, and customer-facing legal document access | Quotes, customer, solutions, claims, payments, support |
| Category Manager | Govern six-pillar/category architecture, hierarchy, positioning, navigation, and category publication data | Solutions, journey, website content, SEO/media |
| Solutions Manager | Govern individual marketed solutions and their relationship to approved ingredients, categories, pricing, assets, claims, and publication | Approved Offerings, Categories, quote/SOW, website |
| Dashboard Management | Design, stage, configure, deploy, and maintain customer dashboards before and after installation | Customer/property, installed solutions, device capability, Home Assistant, support |
| Support | Manage post-install support, installed-system history, service activity, issue resolution, and expansion opportunities | Customers, installed base, dashboards, solutions, correspondence |

Internal SOW and External Quote are intentionally separate capabilities. The SOW owns technical work scope; the quote owns the commercial offer.

Contracts / Legal is broader than document storage. Public/customer-facing document management is one surface of a governed agreement/legal lifecycle.

## 9. Customer and owner/business journeys

KAOS should ultimately visualize both sides of business execution.

### Customer journey

Lead
-> Customer
-> Problem / need
-> Solution/configuration
-> Quote / commercial decision
-> Procurement / readiness
-> Installation
-> Dashboard / handoff
-> Support
-> Expansion / lifetime customer

### Owner/business journey

Governance / strategy
-> Approved Offerings
-> Category and Solution Management
-> Marketing / Social
-> Lead and CRM Operations
-> SOW / Quote / Contract
-> Procurement
-> Installation Operations
-> Dashboard Management
-> Support
-> Money / business health
-> Automation
-> RSI / continuous improvement

Correspondence is a cross-cutting capability spanning multiple stages of both journeys.

## 10. Mandatory module-governance rule

Every KAOS menu option that becomes a locked production module must have a canonical Module Governance Record or equivalent canonical governance component.

A module is not considered locked, authoritative, or eligible to drive downstream/public behavior until its governance has been defined and promoted through the correct owner/task process.

Minimum module-governance attributes should include, as applicable:

- module purpose;
- business owner;
- product/application/surface/deployment identity;
- canonical data sources;
- systems of record;
- data dictionary references;
- inputs;
- outputs;
- upstream dependencies;
- downstream dependencies;
- shared data and relationships;
- allowed actions;
- forbidden actions;
- mutation rights;
- protected systems;
- validation requirements;
- audit/evidence requirements;
- lifecycle/status model;
- UI responsibilities;
- automation boundaries;
- HubSpot impact;
- repository impact;
- Google Workspace impact;
- website/runtime impact;
- public-content impact;
- copy/claims/legal implications;
- publication/promotion gates;
- RSI expectations.

The module itself must not become self-authorizing.

## 11. Product/application/surface/deployment routing rule

Before implementation-file routing for UI/application tasks, the Owner Routing Matrix must identify:

1. Target Product/System
2. Target Application
3. Target Surface
4. Deployment Boundary
5. Canonical business/data/process owners
6. Repository implementation owners

This prevents technically correct file routing into the wrong application surface.

## 12. Website Management capability family

Website management must be treated as one governed publishing capability family rather than unrelated admin screens.

Planned sub-capabilities:

- Category Manager
- Solutions Manager
- Journey Manager
- Content Manager
- Visual / Token Compliance
- Asset Manager
- Publication Manager
- Website Governance Viewer

These sub-capabilities should remain coordinated parts of one Website Management system, not eight disconnected authorities.

## 13. Website publishing objective

The long-term objective is a data-driven, parity-controlled website where governed KAOS objects drive consistent public presentation.

A category page or solution page should not require the business, visual system, claims policy, navigation model, or component model to be rediscovered every time content is added.

Target model:

Approved Offerings
-> Governed Solution Definition
-> Category / Pillar Assignment
-> Content and Asset Governance
-> Journey Rules
-> Website Content Model
-> Canonical Reusable Page Components
-> Validation / Preview / Approval
-> Published Website

Raw operational or prototype data must not publish directly to the public website.

## 14. Canonical solution-page principle

A marketed solution should become a governed Solution object rendered through a canonical Solution Page system, rather than a handcrafted page that independently redefines layout, tokens, navigation, claims, images, and CTA behavior.

Likewise, Pillar/category pages should render governed category objects through canonical category-page rules.

The intended operator experience is that adding a new solution such as permanent outdoor lighting becomes a bounded content/configuration task rather than a website redesign.

Example future flow:

Create Solution
-> select pillar/category
-> select approved hardware ingredients
-> define customer problem/outcome
-> apply governed solution-page template
-> attach governed assets
-> generate/review compliant copy
-> validate claims
-> validate tokens/components/layout
-> validate journey/navigation
-> preview
-> approve
-> publish

## 15. Website parity requirement

The Website Management capability must reconcile and enforce existing repository governance for:

- universal semantic tokens;
- typography and spacing;
- reusable components;
- page-layout rules;
- category-page structure;
- solution-page structure;
- image/asset requirements;
- responsive/crop rules;
- copy and forbidden claims;
- SEO/metadata where applicable;
- route/navigation behavior;
- CTA behavior;
- customer-journey mapping;
- publication gates.

Existing governance should be reconciled into the appropriate canonical owners rather than rewritten from scratch.

## 16. New website reconciliation boundary

A separate WNYHS website redesign is currently being completed outside this orchestration context.

Do not prematurely force KAOS Website Management to conform to the legacy/current website if a successor site is imminent.

When the new website is ready, perform a bounded reconciliation of:

- the successor website implementation;
- existing website governance;
- category and solution standards;
- visual/token standards;
- journey/navigation model;
- asset/media standards;
- claims/copy rules;
- KAOS Website Management data model and publishing workflow.

The result should establish the canonical publishing architecture that KAOS will manage going forward.

## 17. ChatGPT / Codex target workflow for website changes

Future mature behavior should allow an operator request such as:

> Add a permanent outdoor lighting solution using approved Govee Prism hardware.

The governed orchestration path should allow ChatGPT to:

1. inspect Approved Offerings and relevant solution/category governance;
2. determine the proper Pillar/category and customer-journey placement;
3. create or update the governed Solution object;
4. prepare compliant copy and required asset needs;
5. validate page-layout, component, token, claims, asset, and journey rules;
6. prepare the Owner Routing Matrix and bounded repository work order;
7. dispatch Codex for implementation/publication work;
8. return a reviewable PR and validation evidence.

The objective is to eliminate repeated redefinition of the business and website for routine governed content additions.

## 18. Immediate implementation boundary

This orchestration context must not expand the active KAOSWEB001 consolidation task.

Immediate work remains focused on establishing the durable online KAOS application surface and merging the useful Sites UX direction with existing governed/working capabilities and the Governance Viewer.

The definitive future modules above are roadmap context only until individually governed and activated.

Approved Offerings and Procurement remain protected operational capabilities during the consolidation task.

Authentication/Cloudflare Access, HubSpot object/property implementation, public dynamic publishing, and full module implementations remain separate future bounded work unless an active work order explicitly authorizes them.

## 19. Core doctrine

KAOS should make the business easier to operate without becoming a parallel source of truth.

Governance and master data come before presentation convenience.

Existing working capabilities should be preserved and composed, not casually rebuilt.

Every production module gets governance.

Website content should be generated from governed business objects through canonical presentation systems.

The ultimate goal is unified operator control with parity, traceability, repeatability, and the ability to add new solutions or business capabilities without repeatedly redefining the entire system.
