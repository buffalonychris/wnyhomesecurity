# KAOS Module Governance Registry REV01

Status: Active registry for KAOSWEB001 presentation boundaries
Application: KAOS Command Center
Namespace: `/kaos`
Controlling implementation: `KAOSWEB001`

## Registry rule

This registry describes the governance posture of modules exposed by the KAOS Command Center. Display inside KAOS does not transfer canonical ownership to KAOS. Prototype data remains non-authoritative. Existing governed capabilities retain their existing owners.

| Module ID | Module | Posture | Canonical owner / source | Mutation rights in KAOSWEB001 | Key boundary |
|---|---|---|---|---|---|
| KAOS-MOD-TODAY | Today | PROTOTYPE / NOT AUTHORITATIVE | Sites migration reference / browser-memory demo data | Demo state only | No live business-state claim |
| KAOS-MOD-LEADS | Leads | PROTOTYPE / NOT AUTHORITATIVE | Future HubSpot CRM direction; implementation deferred | Demo state only | No HubSpot schema, API, or writes |
| KAOS-MOD-CUSTOMERS | Customers | PROTOTYPE / NOT AUTHORITATIVE | Future HubSpot CRM direction; implementation deferred | Demo state only | No customer-system-of-record claim |
| KAOS-MOD-OFFERINGS | Approved Offerings | OPERATIONAL / GOVERNED REFERENCE | Existing approved-offerings governance, repository hardware registry, controlled Google Workspace source | REFERENCE / PRESERVE ONLY | Product approval, promotion, controlled lists, Sheets contracts, solution composition remain outside KAOS presentation |
| KAOS-MOD-PROCUREMENT | Procurement | OPERATIONAL / GOVERNED REFERENCE with prototype presentation | Existing procurement governance/business process | Browser-memory simulation only | No vendor order, message, workflow, readiness-rule, supplier-rule, or external write |
| KAOS-MOD-INSTALL | Installations | PROTOTYPE / NOT AUTHORITATIVE | Existing installation architecture where governed; displayed records are demo | Demo state only | No canonical job-data mutation |
| KAOS-MOD-MONEY | Money | PROTOTYPE / NOT AUTHORITATIVE | Stripe/payment authority remains external; accounting authority not assigned here | None | Plain-language demo only; not accounting software |
| KAOS-MOD-AUTOMATION | Automations | PROTOTYPE / NOT AUTHORITATIVE | Existing runtime/business-process owners remain authoritative | Browser-memory simulation only | No workflow creation, messages, CRM writes, email, or scheduling writes |
| KAOS-MOD-OVERVIEW | Business Overview | PROTOTYPE / NOT AUTHORITATIVE | KAOS orchestration/presentation layer | None | Aggregate presentation does not create data authority |
| KAOS-MOD-GOV | Governance | OPERATIONAL / GOVERNED READ-ONLY | `docs/governance/GOVERNANCE_VIEWER_READ_MODEL_REV01.md` and repository governance owners | None | Reuses GOVUI001; no governance mutation/API/write path |

## Common module contract

- **Product/application/surface:** KAOS / KAOS Command Center / internal online command center.
- **UI responsibility:** present the migrated Sites information architecture and interactions without redefining canonical data ownership.
- **Repository impact:** KAOSWEB001 implementation and evidence only.
- **Public website impact:** none; KAOS must not appear in public navigation or drive automatic public publication.
- **Claims/copy:** prototype/demo values must remain visibly identified as fictional or non-authoritative.
- **Automation/integration:** no new live integrations are authorized.
- **Audit/evidence:** KAOSWEB001 validation, protected-scope audits, visual parity review, and draft PR evidence.
- **Lifecycle:** modules remain prototype unless an existing governed owner is referenced above or a later bounded promotion changes posture.

## Approved Offerings detail

Purpose: expose the controlled offering/capability reference inside the KAOS experience without changing the operational capability.

Inputs/sources remain the existing governed approved-offerings sources, including the current controlled Google Workspace master and repository contracts. The two Google Sheets links carried by the Sites reference remain reference/editing links; KAOS does not alter Sheet permissions or structures. Catalog snapshot mode is preserved for this migration. A future live feed requires separate authorization.

Forbidden: changing approval/promotion rules, controlled lists, source ownership, solution composition, category/pillar relationships, SOW/quote/install/support relationships, or treating physical stock as approval.

## Procurement detail

Purpose: present purchasing readiness, delivery visibility, exceptions, and supplier context while preserving the separation between product approval and procurement execution.

The migrated controls are simulations. They do not place orders, contact vendors, send messages, alter readiness rules, or write to external systems. Existing procurement governance and business processes remain authoritative.

## Governance detail

Purpose: expose the existing GOVUI001 read-only viewer within the KAOS visual shell at `/kaos/governance`.

The viewer may search, filter, sort, select, group, and display repository snapshot relationships. It may not edit governance, create tasks, approve routing, resolve conflicts, write to GitHub, or create an API/mutation path.

## Unresolved decisions

Live CRM ownership details, production customer/job data bindings, accounting presentation, automation execution, live catalog feed configuration, authentication, dedicated hostname, and automatic public-content promotion remain deferred to separately authorized work.
