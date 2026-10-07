# DASHBOARD PREP001 HA Dashboard Requirements Standard REV01

Status: Active upstream dashboard-requirements preparation standard
Customer-facing: No
Implementation authority: No
Owner: Quote System / Installer Platform handoff into Dashboard / Interactive Experience System

## Purpose

This standard defines the deterministic handoff from approved property, quote/BOM, inventory, and install evidence into the requirements packet consumed by a later bounded dashboard-creation process.

## Current Standard and Owner Boundary

The packet prepares requirements only. INSTALL006 REV02 owns dashboard behavior/classes, DESIGN001 REV02 owns visual/components, DASHBOARD001 REV02 owns delivery/binding/validation, INSTALL011 owns cross-site orchestration, and the applicable automation, notification, privacy, dependency, commissioning, handoff, and service standards retain their domains.

The packet must use approved current evidence and preserve unknown, unresolved, excluded, and not-installed postures. It must not infer a capability from a planned BOM line, vendor name, historical example, another customer, or registry presence.

Dashboard prep should be generated from the approved Property Model after hardware, quote scope, inventory readiness, and installer packet requirements are finalized.

## Required Preparation Packet

| Field | Required content |
| --- | --- |
| Packet identity | Packet ID/revision, preparation date, preparer, and evidence cutoff/freshness date. |
| Site/customer identifier | Approved non-secret job/property reference; no unnecessary private detail in repository artifacts. |
| Approved installed capabilities | Capability, approved scope source, installed/verified posture, and evidence reference. |
| Areas/rooms | Approved customer-safe area/room names and unresolved placement mappings. |
| Semantic device/capability names | Customer-safe name, semantic capability, source device/evidence reference, and owner. |
| Visibility posture | Customer-visible, Installer / Commissioning, Service / Operator, hidden, excluded, or unresolved. |
| Unresolved mappings | Missing/ambiguous property, device, entity, area, capability, state, or ownership mapping with blocker/owner/next action. |
| Dashboard class requirements | Applicable Customer, Installer / Commissioning, and Service / Operator requirements without inventing a fourth class. |
| Notification dependencies | Approved profile/event dependency, readiness/evidence reference, or explicit unresolved/not applicable state. |
| Automation/routine dependencies | Approved behavior/mode/control dependency and evidence reference; no automation implementation authority. |
| Media/privacy dependencies | Camera/doorbell visibility plus the applicable privacy-owner decision/evidence state for recording, audio, retention, notice/consent, access, and history. |
| Frontend dependency requirements | Required HACS/custom resources and INSTALL008-BOOTSTRAP qualification state; no site version becomes a universal baseline. |
| Role/permission requirements | Intended audience, assignment/visibility need, permitted control class, backend-authorization evidence requirement, and unresolved grants. |
| Evidence freshness | Source classification, evidence date, freshness/expiry concern, and revalidation trigger. |
| Acceptance blockers | Blocker, affected class/capability, owner, required decision/evidence, and whether later dashboard work may proceed. |
| Exclusions/not-installed items | Explicit omitted, rejected, deferred, unsupported, or not-installed capabilities so absence is not mistaken for missing discovery. |

Each field is classified `REQUIRED`, `CONDITIONAL`, `NOT_APPLICABLE`, or `UNRESOLVED / BLOCKED`. Required or conditional fields without current evidence remain `UNRESOLVED / BLOCKED`; they are not completed with assumptions.

## Deterministic Handoff Gate

Before a later dashboard-creation task begins, the packet must:

1. identify the approved property/job scope and evidence cutoff;
2. reconcile approved scope against installed/verified evidence;
3. map only supported semantic capabilities to applicable dashboard classes;
4. route notification, automation, privacy, frontend-dependency, and role/permission needs to their existing owners;
5. list all unresolved mappings, exclusions, not-installed items, and acceptance blockers; and
6. receive the operator/owner disposition required by the later bounded task.

The historical INSTALL006 REV01 Dashboard Readiness Sheet is not restored or promoted as an owner. Its useful concepts—view/class, audience, dependency, visual readiness, status/evidence, and exceptions—are represented in this packet through the dashboard-class, visibility, dependency, evidence, and blocker fields above.

## Generation Boundary

No dashboard creation may begin before the applicable property, approved scope, installed-capability, and evidence inputs required by the later bounded task are present or truthfully marked as blockers.

This document does not authorize Home Assistant dashboard implementation, app code, runtime changes, or customer dashboard deployment.

This standard does not create `PROCESS-DASHBOARD002`, a generator, an implementation workflow, or runtime authority. A later process may consume this packet only through its own bounded task.

## Protected Boundary

This document does not authorize access to live Home Assistant, customer-private evidence, dashboard YAML, app/source changes, runtime registration/assignment, permissions/authentication changes, notification/automation implementation, CRM/HubSpot, payment, scheduling, email, Cloudflare, dependencies, secrets, merge, or deployment.
