# INSTALL010 - Service Dashboard and Remote Support Standard - REV01

Status: Active standard
Customer-facing: No
Implementation authority: No
Task ID: INSTALL010
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

---

## 1. Purpose

The Service Dashboard and Remote Support Standard defines how WNYHS prepares post-install support visibility for Home Assistant-based installs without creating unsupported service, dispatch, emergency-response, or always-watched claims.

The standard defines the Service Dashboard purpose, remote support posture, support-safe diagnostics, warranty/support handoff relationships, remote access authorization boundaries, privacy boundaries, customer-data boundaries, and protected implementation boundaries.

This document does not create Home Assistant configuration, dashboard YAML, Lovelace cards, themes, automations, scripts, customer-specific dashboards, customer records, HubSpot fields, APIs, runtime changes, remote access credentials, portal files, PDFs, emails, support records, or actual customer data.

## 2. Scope

This standard covers:

- service dashboard purpose
- remote support posture
- service-safe diagnostics
- offline device review
- low battery review
- failed automation review
- integration health review
- backup/update status review
- warranty/support handoff
- support ticket relationship
- remote access authorization boundaries
- privacy and customer-data boundaries
- unsupported claim boundaries

Out of scope:

- Home Assistant dashboard implementation
- dashboard YAML or Lovelace card implementation
- Home Assistant themes or theme files
- automations, scripts, scenes, helpers, or blueprints
- customer-specific service dashboards or customer-specific install files
- remote access credential creation or storage
- private URLs, keys, tokens, passwords, or network credential values
- HubSpot fields, objects, schemas, pipelines, workflows, or write-path changes
- APIs, runtime sync, portal implementation, durable storage, source code, UI, routes, CSS, public assets, PDFs, emails, or support ticket records
- Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, or secret changes

## 3. Service Dashboard Purpose

The Service Dashboard is an internal support-review surface for post-handoff support context when a customer system needs review.

It should support:

- triage
- troubleshooting
- warranty review
- installed asset review
- support ticket context
- follow-up planning
- exception review

The Service Dashboard is not a public or customer daily-use surface unless a later bounded task explicitly authorizes a specific customer-facing support posture. Customer daily use remains the Customer Dashboard defined by `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md` and explained in the customer handoff standard.

The Service Dashboard should help WNYHS review service-relevant state. It must not imply continuous staffed service, emergency-response authority, third-party authority contact, guaranteed uptime, guaranteed detection, or guaranteed prevention.

## 4. Recommended Service Dashboard Views

Recommended Service Dashboard views:

| View | Purpose |
| --- | --- |
| Service Overview | Summary of support posture, open exceptions, status categories, recent review items, and next actions. |
| Offline Devices | Devices unavailable, unreachable, stale, or not reporting as expected. |
| Low Batteries | Battery-powered devices needing battery review, replacement planning, or customer action. |
| Failed Automations | Automations disabled, failed, blocked, deferred, or needing review. |
| Integration Health | Controller, hub, bridge, account-link, local network, or integration health where review is authorized. |
| Backup / Update Status | Backup freshness, update posture, restore-readiness notes, missing backup items, or deferred updates. |
| Installed Assets | Installed hardware, configured assets, controller references, and service-relevant placement notes. |
| Warranty / Support | Warranty review candidates, support ticket context, RMA candidates, and warranty-relevant exceptions. |
| Exceptions / Deferred Items | Open exceptions, deferred items, owner, next action, due date, and customer-visible status. |
| Onsite Follow-up | Items that require a field visit, physical replacement, customer confirmation, or hands-on review. |

These are planning views only. This standard does not create dashboard YAML, Lovelace cards, cards, views, entities, permissions, or customer-specific dashboards.

## 5. Remote Support Posture

Remote support is conditional, authorized, and limited.

Rules:

- Remote support requires customer authorization.
- Remote support depends on connectivity and technical availability.
- Tailscale or an equivalent access posture may be used only where separately approved.
- No secrets, keys, private URLs, recovery codes, passwords, or credentials may be stored in repository docs.
- Remote support must not be represented as continuous staffed service.
- Remote support must not be represented as dispatch, emergency response, or third-party authority contact.
- The customer may revoke access where applicable.
- Remote support status should be recorded in customer-safe and internal forms separately.
- Customer-safe handoff language should explain access posture without exposing technical access detail.
- Internal service notes should record eligibility, blockers, and next action without storing credential values.

Remote support records should distinguish:

- authorized versus not authorized
- technically available versus blocked
- customer-visible explanation provided versus internal-only implementation detail
- remote support eligible versus onsite follow-up needed
- revoked access versus active authorization

## 6. Support-Safe Diagnostic Categories

Support-safe diagnostic categories:

| Diagnostic category | Use |
| --- | --- |
| Controller reachable/unreachable | Whether the controller can be reached through approved local or authorized remote means. |
| Local dashboard reachable/unreachable | Whether the local dashboard surface is available to the expected user class. |
| Device online/offline | Whether an installed device reports expected availability. |
| Low battery | Battery-powered device needs battery review or replacement planning. |
| Sensor stale/not reporting | Sensor has not reported as expected or needs state freshness review. |
| Automation disabled/failed | Automation is disabled, failed, blocked, or needs review. |
| Integration degraded | Hub, bridge, account link, controller, or integration is degraded. |
| Backup stale/missing | Backup is stale, missing, unverified, or needs restore-readiness review. |
| Update needed/deferred | Update is available, needed, blocked, or intentionally deferred. |
| Customer action needed | Customer decision, connectivity action, account action, power action, or confirmation is needed. |
| Onsite visit needed | Remote review is insufficient or physical work is required. |
| Third-party/vendor issue | Vendor service, device, app, firmware, cloud account, or third-party dependency may be involved. |

Diagnostic labels must stay support-safe. They should not expose customer secrets, private network details, credential values, private URLs, vendor-private notes, or unsupported service promises.

## 7. Support Status Categories

Support status categories:

| Status | Use |
| --- | --- |
| Healthy | No current action needed based on the reviewed support context. |
| Needs review | Item needs operator, installer, or service review before status can be closed. |
| Customer action needed | Customer decision, confirmation, account action, connectivity action, power action, or access action is needed. |
| Remote support eligible | Item may be reviewed remotely because authorization and technical availability appear sufficient. |
| Remote support blocked | Remote review is blocked by missing authorization, connectivity, access, technical limits, or policy boundary. |
| Onsite follow-up needed | Physical visit, replacement, testing, customer walkthrough, or hands-on work is needed. |
| Warranty review needed | Item may relate to warranty eligibility, replacement, RMA, or warranty exception review. |
| Third-party/vendor issue | Issue appears tied to a vendor service, app, firmware, cloud account, device limitation, or other third-party dependency. |
| Deferred | Item is intentionally delayed with owner, reason, and next review event. |
| Closed | Item has been resolved, dismissed, replaced, moved to another record, or otherwise closed with notes. |

Closed status should include enough note context to avoid re-triage, but it must not store secrets or unnecessary private customer data.

## 8. Warranty / Support Handoff

Service Dashboard records should conceptually connect to the shared record model from `INSTALL006A_SHARED_JOB_DATA_MODEL_AND_HUBSPOT_FIELD_ARCHITECTURE_REV01.md`.

Planning relationships:

| Related record | Service Dashboard relationship |
| --- | --- |
| Customer | Identifies the customer or customer-safe support context without exposing unnecessary private detail. |
| Property | Identifies the property or site context tied to installed service state. |
| Installed Asset Register | Connects device, controller, hub, sensor, camera, lock, lighting, utility, or configured asset to support review. |
| Warranty Record | Connects warranty-relevant asset, date, exception, replacement, or review status. |
| Support Ticket / RMA | Connects diagnostic issue, customer report, warranty review, vendor issue, replacement, or resolution path. |
| Commissioning Record | Provides install acceptance, commissioning exceptions, backup status, and initial service-readiness evidence. |
| Customer Signoff | Provides customer-visible exception review, training status, support path confirmation, and access posture context. |
| Expansion / Add-on Opportunity | Records future add-on or improvement context only when separately approved and customer-safe. |

These relationships are planning only. INSTALL010 does not create HubSpot fields, HubSpot objects, portal records, APIs, runtime sync, customer records, installed asset records, warranty records, support tickets, RMA records, or add-on records.

## 9. Service Dashboard Readiness Sheet

Each service dashboard planning pass should maintain a Service Dashboard Readiness Sheet before future implementation or support use.

Required fields:

| Field | Required use |
| --- | --- |
| Customer / Property reference | Customer-safe or internal reference to the support context; no unnecessary private detail. |
| Dashboard view | Service Dashboard view or view group. |
| Diagnostic category | Category from Section 6 or documented approved extension. |
| Related device/entity/area | Device, entity, area, controller, integration, backup, or support item under review. |
| Related installed asset yes/no/review | Whether the item should map to a future Installed Asset Register record. |
| Warranty-relevant yes/no/review | Whether the item may affect warranty, replacement, RMA, or warranty exception review. |
| Customer-visible yes/no/review | Whether the item may be shown or explained in customer-safe handoff/support material. |
| Remote support eligible yes/no/review | Whether authorized and technically available remote review may apply. |
| Status | Status category from Section 7. |
| Evidence / note reference | Reference to screenshot, service note, ticket, commissioning note, backup reference, or exception note where authorized. |
| Next action | Specific next step, review, customer request, onsite visit, vendor review, warranty review, or closure action. |
| Owner | Person or role responsible for the next action. |
| Notes / exception | Context, blocker, deferral reason, or customer-safe/internal note boundary. |

The readiness sheet must not store secrets, credential values, private URLs, tokens, recovery codes, customer network credential values, or unnecessary private customer data.

## 10. Remote Support Authorization Fields

Candidate remote support authorization fields:

| Field | Required use |
| --- | --- |
| Remote support authorized yes/no/review | Whether the customer has authorized remote support for the relevant context. |
| Authorization date | Date authorization was provided or reviewed. |
| Authorization method | Customer-safe method such as written approval, email approval, portal approval, service agreement, or onsite approval. |
| Access method | High-level method label only, such as Tailscale or equivalent; no credentials or private URLs. |
| Access status | Active, blocked, unavailable, pending, revoked, deferred, or review. |
| Customer-visible explanation provided yes/no | Whether the customer received a plain-language explanation of access posture. |
| Access revoked yes/no | Whether the customer revoked access where applicable. |
| Revocation date | Date access was revoked, if applicable. |
| Notes / exception | Support-safe note without credentials, keys, private URLs, or unnecessary private data. |

These fields are candidate planning fields only. They do not authorize HubSpot property creation, portal fields, APIs, databases, customer records, remote access implementation, or credential storage.

## 11. Privacy / Claim Guardrails

Service Dashboard and remote support docs must follow these guardrails:

- no alarm monitoring claims
- no dispatch claims
- no emergency response claims
- no always-watched claims
- no guarantee of prevention, uptime, response, or detection
- no customer secrets in service docs
- no private network credentials in repository docs
- no private URLs, tokens, keys, recovery codes, or passwords
- no unnecessary private customer data in examples
- customer owns installed equipment, customer data, and customer-specific automations unless a separate customer agreement says otherwise
- remote support is conditional, authorized, and limited
- customer-visible support explanations must stay plain-language and scope-accurate
- internal diagnostics must stay separate from customer daily-use dashboard content unless separately authorized

Service language should explain limitations clearly. It should not create public copy, customer contract language, legal warranty language, emergency-response posture, or service obligations by itself.

## 12. Relationship to INSTALL Docs

- `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md` defines Service Dashboard architecture as one of the dashboard classes.
- `INSTALL006A_SHARED_JOB_DATA_MODEL_AND_HUBSPOT_FIELD_ARCHITECTURE_REV01.md` defines the candidate shared data model relationships.
- `INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md` defines readability and theme-readiness expectations for service review surfaces.
- `INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md` validates Service Dashboard readiness and support blockers during bench and onsite commissioning.
- `INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md` defines the customer-safe handoff, support path, and remote access/support explanation.
- `INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md` defines post-handoff Service Dashboard and remote support posture.

INSTALL010 should be used as a planning and governance standard for future service dashboard implementation, warranty/support model work, installed asset register work, support ticket workflow work, portal planning, and HubSpot installer object planning. It does not authorize those implementations.

## 13. Funeral Home Pilot Relevance

The funeral home pilot may use this standard for service dashboard planning and remote support readiness review.

This document does not create funeral-home-specific dashboard files, remote access records, support records, customer records, installed asset records, warranty records, HubSpot records, portal files, Home Assistant configuration, dashboards, automations, credentials, or support tickets. Pilot-specific service artifacts require a separate bounded customer/job task.

## 14. Future Follow-Up Planning Notes

The following future tasks are planning notes only. They are not activated by this document:

- HUBSPOT-INSTALL001 - HubSpot Installer Property/Object Model Spec
- PORTAL001 - Installer Portal Architecture
- ASSET001 - Installed Asset Register Standard
- WARRANTY001 - Warranty and Support Ticket Model
- SUPPORT001 - Support Ticket Workflow Standard
- THEME001 - Home Assistant Theme Architecture Standard

Recommended next task: HUBSPOT-INSTALL001 - HubSpot Installer Property/Object Model Spec.

## 15. Protected-System Boundaries

INSTALL010 is documentation and installer-platform standard work only.

It does not authorize:

- Source, route, UI, CSS, public asset, or runtime changes.
- Home Assistant configuration implementation.
- Dashboard YAML or Lovelace card implementation.
- Home Assistant theme files or theme YAML.
- Frontend assets or dashboard styling implementation.
- Automations, scripts, scenes, helpers, or blueprints.
- Customer-specific dashboards, service dashboards, install files, handoff files, support files, records, or actual customer data.
- Funeral-home-specific configuration, dashboards, remote access records, support records, asset records, warranty records, or customer files.
- Remote access implementation, credentials, private URLs, keys, tokens, passwords, recovery codes, or network credential values.
- HubSpot fields, HubSpot schema, HubSpot objects, pipeline, workflow, write-path changes, or direct HubSpot writes.
- Any bypass of `/api/lead-signal`.
- API, portal, database, durable storage, support ticket, RMA, warranty, asset, or runtime sync implementation.
- Stripe/payment verification, checkout, webhook, payment state, or payment sync changes.
- Scheduling/calendar authority changes.
- Resend/email runtime changes.
- Cloudflare configuration changes.
- Dependency or package-lock changes.
- Secret or environment-value exposure.

Future service dashboard implementation, remote support implementation, warranty/support model work, installed asset register work, support ticket workflow work, HubSpot installer object work, portal work, or Home Assistant configuration work must identify its own target files, validation, protected-system review, and rollback posture before work begins.
