# WNYHS Site Capability, Evidence & Binding Standard REV01

Status: Active canonical dashboard standard

Owner: Dashboard / Interactive Experience System

Customer-facing: No

Implementation authority: Evidence/model governance only; no runtime binding authority

Task ID: DASHBOARD-SYSTEM-CANONICALIZATION-001

Primary workstream: Dashboard / Interactive Experience System

Controlling context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

Predecessors: `docs/quotesystem/DASHBOARD_PREP001_HA_DASHBOARD_REQUIREMENTS_STANDARD_REV01.md` and `docs/home-assistant/WNYHS_POSTINSTALL_DASHBOARD_ASSEMBLY_PROFILE_REV01.md` (SUPERSEDED)

## 1. Purpose and owner boundary

This standard owns the durable sanitized model between source evidence and dashboard assembly. Raw Home Assistant exports, registries, backups, screenshots, runtime observations, quote artifacts, and future business-system records are evidence inputs only. They do not directly become dashboard structure, state, permission, or action authority.

The governed relationship is:

`SOURCE EVIDENCE -> SANITIZED SITE CAPABILITY MODEL -> SEMANTIC CAPABILITY -> AUTHORIZED BINDING -> CUSTOMER-SAFE STATE/ACTION`

HA-BACKUP001 owns extraction and transient raw-evidence safety. Quote/CRM/Floorplan/Installer/Commissioning/Notification/Automation/Media Privacy/Remote Access/Handoff owners retain their facts and decisions. INSTALL006 owns dashboard meaning; DASHBOARD001 owns delivery and validation.

## 2. Evidence and lifecycle distinctions

The model keeps these states distinct:

| State | Meaning |
| --- | --- |
| `PROPOSED` | Candidate capability or placement not yet customer-approved. |
| `QUOTED` | Capability included in a governed quote/scope revision; not proof of installation. |
| `CUSTOMER_APPROVED` | Customer/operator-approved scope; not proof of installation. |
| `INSTALLED` | Installation asserted by governed evidence; verification may remain incomplete. |
| `INSTALLED_UNVERIFIED` | Installed posture lacks required current mapping, state, binding, or commissioning evidence. |
| `INSTALLED_VERIFIED` | Current governed evidence verifies the installed semantic capability for the stated scope. |
| `UNAVAILABLE` | Capability/state cannot currently be used or verified. |
| `DEGRADED` | Some function remains, but evidence or capability is incomplete. |
| `DEFERRED` | Explicitly postponed with owner/reason/next evidence. |
| `RETIRED_NOT_INSTALLED` | Valid historical, removed, rejected, unsupported, or not-installed capability; never rendered as live. |

`UNKNOWN`, stale, ambiguous, or conflicting evidence never becomes `Normal`, safe, closed, locked, available, authorized, or installed-verified by default.

## 3. Allowed input-source states

Every required variable uses exactly one current input-source state:

- `AVAILABLE_FROM_CURRENT_EVIDENCE`
- `MANUAL_OPERATOR_INPUT`
- `FUTURE_BUSINESS_SYSTEM_INPUT`
- `UNRESOLVED`
- `NOT_APPLICABLE`

The system must work today from current authorized evidence and permitted manual input. A future system may populate the same governed field later without changing its business meaning, evidence class, owner, or validation contract.

## 4. Variable definition contract

Every variable in a Site Capability Model, preparation packet, generated checklist, or binding record defines:

| Required attribute | Rule |
| --- | --- |
| Variable name | Stable semantic name; not a raw platform identifier. |
| Business meaning | Plain statement of what the variable represents and why it is used. |
| Data type | Logical type only; this standard does not select a physical database type. |
| Applicability | `REQUIRED`, `CONDITIONAL`, `OPTIONAL`, or `NOT_APPLICABLE`. |
| Source of truth | Exact domain owner for the fact or decision. |
| Current source available today | Current evidence path or explicit absence. |
| Future automated source | Documented future owner/system or `NONE DOCUMENTED`. |
| Manual entry allowed | `YES` or `NO`, with operator/owner and evidence rule when `YES`. |
| Validation rule | Deterministic check or owner decision needed for acceptance. |
| Fallback behavior | Safe posture when source/validation is unavailable. |
| Blocking effect | Exact capability/stage blocked; never a universal block by implication. |
| Information class | `CUSTOMER_SAFE`, `INTERNAL_ONLY`, or `SPLIT_PROJECTION`. |
| Freshness requirement | Evidence date, threshold/trigger, and revalidation rule. |
| Provenance reference | Repository/job/evidence reference sufficient to trace the assertion. |

Per-site preparation, assembly, and validation checklists are generated working artifacts/templates under this schema. They are not competing authority.

## 5. Minimum Site Capability Model

Each capability record contains, as applicable:

| Field group | Minimum governed content |
| --- | --- |
| Identity | Model ID/revision, non-secret site/property/install reference, capability ID/label, evidence cutoff, preparer/reviewer. |
| Semantic capability | Customer-safe capability name, capability type, business meaning, represented scope, and applicable Dashboard classes. |
| Provenance/evidence | Source owner, evidence reference, evidence class, observed/asserted date, current input-source state, and confidence/limitations. |
| Freshness | Freshness requirement, current freshness result, stale trigger, and required revalidation. |
| Authoritative state source | Source for current state, update behavior, current/recent/resolved semantics, and unknown/stale behavior. |
| Installation/availability | Proposed/quoted/approved/installed/verified/degraded/unavailable/deferred/retired-not-installed posture. |
| Visibility | Customer, Installer/Commissioning, Service/Operator, hidden/excluded, and `CUSTOMER_SAFE` versus `INTERNAL_ONLY` projection. |
| Allowed actions | Action name, capability evidence, authoritative binding, risk/control class, confirmation requirement from the functional owner, result source, fallback, and disabled/omitted posture. |
| Permission/authorization | Intended audience, actual backend grant/assignment evidence requirement, approver/date, denial test, change/revocation posture. |
| Notification relationship | Event/state interface and presentation eligibility; notification routing/history doctrine stays with the Notification owner. |
| Automation relationship | Routine/mode/scene/action interface, prerequisites, manual override/fallback, and result semantics; behavior stays with AUTOMATION001. |
| Media/privacy relationship | Visibility, recording, audio, retention, consent/notice, history, access, and revocation decision/evidence from the Media Privacy owner. |
| Spatial relationship | Approved room/area/property/spatial reference and confidence; spatial data does not prove installation. |
| Unresolved conditions | Missing/conflicting evidence, affected capability/stage, required owner/decision, next evidence, and allowed work while unresolved. |
| Acceptance posture | Preview/implementation/production/handoff readiness, blocker/exception, validation reference, and customer/operator decision. |

Raw entity IDs, unique IDs, connections, MAC addresses, credentials, private URLs, unnecessary customer data, diagnostic noise, and internal vendor/financial details are excluded from customer-safe projections. Authorized internal binding records may retain only the minimum necessary technical identifiers under exact task authority.

## 6. Evidence classes and conflict handling

| Evidence class | Use |
| --- | --- |
| `HA_INSTALLED_VERIFIED` | Current authorized sanitized HA/site evidence verifies installed capability for the stated scope. This remains the present preparation baseline. |
| `FUTURE_BUSINESS_EXPECTATION` | Governed quote/CRM/fulfillment/inventory/asset/warranty/support/handoff source describes expected identity, scope, lineage, or acceptance. Additive only. |
| `DISCREPANCY_REQUIRES_RESOLUTION` | Expected and installed evidence materially disagree; preserve both and route the discrepancy. |
| `UNRESOLVED` | Missing, stale, ambiguous, conflicting, or insufficient evidence. |
| `NOT_APPLICABLE` | Evidence-backed scope says the variable/capability does not apply. |

A quote or preview cannot manufacture installed capability. An HA registry record cannot prove live availability, physical location, customer authorization, or customer acceptance. A missing future enrichment source cannot erase current installed evidence or block unrelated HA-evidence-first work.

## 7. Preparation and binding gates

Before site-bound assembly, the model must:

1. identify the authorized evidence set, site reference, revision, cutoff, and freshness posture;
2. classify every required/conditional variable using the allowed input-source states;
3. distinguish proposed, quoted, approved, installed, verified, degraded/unavailable, deferred, and retired/not-installed states;
4. map only evidenced semantic capabilities and customer-safe labels;
5. route Notification, Automation, Media Privacy, Remote Access, dependency, Commissioning, Handoff, Quote/CRM, and spatial decisions to their owners;
6. record permissions and allowed actions as evidence requirements, never infer them from visible UI;
7. list exclusions, unresolved mappings, discrepancies, blockers, owner, next evidence, and affected stage; and
8. obtain the disposition required by the bounded preview or implementation task.

Binding to production additionally requires exact runtime authority, current backend authorization/assignment evidence, qualified dependencies, backup/rollback, live-state validation, acceptance, and handoff evidence. This model does not grant any of them.

## 8. Building / Household Mode field

When applicable, the model records one authoritative site mode source, current value, permitted transitions, authorized roles, timestamp/change evidence, freshness, unknown/degraded posture, Notification relationship, Automation relationship, and Dashboard presentation/control eligibility.

The Dashboard may consume and present this contract. It does not define mode business logic, notification routing/suppression/quiet hours, escalation, or automation consequences. An unresolved source blocks only affected mode-dependent behavior under BPI-030.

## 9. BPI integration

This standard directly consumes BPI-003, BPI-005 through BPI-009, BPI-014 through BPI-020, BPI-022 through BPI-034, and BPI-036. It relies on the register's current/manual/future/unresolved classifications, freshness rules, customer-safe/internal boundaries, and stage-scoped blockers.

No dependency row, physical table, field storage design, API, synchronization path, CRM property, runtime object, or database migration is created here.

## 10. Protected boundary

This standard does not authorize live HA access, raw customer export persistence, dashboard YAML, runtime binding/registration/assignment, authentication/permissions, notifications, automations, media access, remote access, customer data, CRM/HubSpot, payment, scheduling, Cloudflare, dependencies, secrets, database schema/migrations, merge, deployment, or customer-dashboard retirement.
