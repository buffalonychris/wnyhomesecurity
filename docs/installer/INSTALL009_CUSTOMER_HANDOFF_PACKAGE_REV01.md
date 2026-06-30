# INSTALL009 - Customer Handoff Package - REV01

Status: Active standard
Customer-facing: No
Implementation authority: No
Task ID: INSTALL009
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

---

## 1. Purpose

The Customer Handoff Package gives the customer a clear, safe, plain-language record of what was installed, how to use the system, what WNYHS supports, what is excluded, and what remains as an exception or future add-on.

The package should help the customer understand system ownership, daily dashboard use, local-first posture, support path, warranty basics, and known exceptions after install and commissioning.

This standard defines the required customer-safe handoff contents. It does not create customer-specific handoff files, customer records, PDFs, emails, Home Assistant configs, dashboards, automations, scripts, HubSpot fields, APIs, runtime changes, portal screens, or actual customer data.

## 2. Scope

This standard covers:

- customer-safe system summary
- installed feature summary
- dashboard orientation
- local-first / ownership explanation
- remote access/support posture
- warranty basics
- support contact path
- customer training confirmation
- customer signoff package contents
- exception/deferred item summary
- installed asset summary concept
- privacy/claim guardrails

This standard does not create customer-specific handoff files, customer-specific dashboard content, final legal warranty language, actual customer records, actual installed asset records, HubSpot implementation, portal implementation, Home Assistant configuration, dashboard YAML, Lovelace cards, automations, scripts, emails, PDFs, APIs, or runtime behavior.

## 3. Required Handoff Package Sections

Each customer handoff package should include these customer-safe sections when applicable to the approved scope:

| Section | Purpose |
| --- | --- |
| Welcome / system summary | Plain-language overview of the installed system, approved scope, and what the customer received. |
| Installed features | Customer-readable summary of included feature areas such as security, cameras, locks, leak/safety, lighting, utilities, or modes. |
| Customer dashboard guide | Orientation to the Customer Dashboard, view names, common controls, status meanings, and support/help areas. |
| Common daily actions | Short list of normal customer tasks such as checking status, using controls, opening camera views, or reviewing alerts where included. |
| Modes / scenes / shortcuts, if included | Explanation of included customer modes, scenes, or shortcuts without exposing implementation internals. |
| Cameras / doorbells, if included | Customer-safe orientation to included camera or doorbell views, privacy limits, and cloud/service dependencies where applicable. |
| Doors / locks / access, if included | Plain-language use notes for included lock, door, garage, or access controls and manual fallback expectations where applicable. |
| Leak / safety / utility devices, if included | Explanation of included leak, water, temperature, humidity, utility, or safety-related devices and known limits. |
| Lighting / plugs / switches, if included | Customer-readable guide to included lights, plugs, switches, dimmers, scenes, or manual controls. |
| Local-first ownership explanation | Explanation that the customer owns the equipment, data, and automations, and that local control works where designed. |
| Remote access / support explanation | Explanation of support posture as conditional on customer authorization, connectivity, and technical availability. |
| Warranty and service basics | Basic warranty/support posture, support path, limitations, and exceptions without final legal language. |
| Known exceptions / deferred items | Customer-visible unresolved items, deferred work, substitutions, limitations, or future follow-up needs. |
| Customer training confirmation | Confirmation that the customer received orientation on dashboard use, common actions, ownership, support path, and exceptions. |
| Customer signoff | Customer approval or deferred approval record, including reason when signoff is deferred. |
| Support contact information | Approved WNYHS support contact path and what information the customer should provide when requesting support. |
| Future add-on opportunities | Customer-safe future add-on opportunities identified during install or handoff, without creating a sales commitment. |

## 4. Customer-Safe Language Rules

Customer handoff language must be plain-language, scope-accurate, and safe for customer possession.

Rules:

- Use plain language and avoid installer-only jargon.
- Do not include secrets, passwords, recovery codes, tokens, private URLs, network credential values, or service-only diagnostics.
- Use no alarm monitoring claims.
- Use no dispatch claims.
- Do not make unsupported emergency claims.
- Do not overstate security, safety, prevention, uptime, response, warranty, remote support, or service outcomes.
- State that the customer owns installed equipment, customer data, and customer-specific automations unless a separate customer agreement says otherwise.
- Explain that local control works where designed, but cloud-dependent devices, third-party services, internet access, app accounts, or vendor services may have disclosed limits.
- Explain that optional third-party services are customer-controlled unless a separate approved service agreement says otherwise.
- Keep customer-facing names aligned with `INSTALL004_DEVICE_NAMING_STANDARD_REV01.md` and `INSTALL005_ENTITY_AND_AREA_STANDARDS_REV01.md`.
- Keep known exceptions visible and understandable instead of hiding failed, deferred, or not-applicable items.

Internal service detail may be summarized in customer-safe terms, but service-only records, private diagnostics, network credentials, internal notes, and vendor-private information must remain out of the customer handoff package unless separately approved.

## 5. Dashboard Orientation

The handoff package should orient the customer to the Customer Dashboard as the normal daily-use surface.

The dashboard orientation should explain:

- the Customer Dashboard purpose
- view names used in the delivered customer dashboard
- common buttons and actions
- status meanings for normal, warning, unavailable, offline, disabled, deferred, or review-needed states
- what unavailable/offline means in plain customer terms
- support/help view content when included
- what is not intended for daily customer use
- that Installer Dashboard and Service Dashboard surfaces are not normal daily-use surfaces unless explicitly authorized for the customer

Dashboard orientation should avoid exposing setup noise, entity IDs, internal dashboard diagnostics, service-only troubleshooting views, vendor defaults, Home Assistant internals, private URLs, credentials, or unsupported service promises.

## 6. Installed Asset Summary Concept

The handoff package may include a customer-safe installed asset summary. It is a plain-language summary, not the internal asset register.

Customer-safe fields:

| Field | Required use |
| --- | --- |
| Feature area | Customer-readable category such as Security, Cameras, Doors / Locks, Leak / Safety, Lighting, Utility, or Support. |
| Customer-visible device name | Plain-language name that may appear on the customer dashboard or handoff material. |
| Location / room | Customer-readable area or room. |
| Purpose | What the device or feature does for the customer. |
| Customer-visible yes/no | Whether the item normally appears in customer-facing views. |
| Warranty-relevant yes/no | Whether the item may matter for warranty or service review. |
| Notes / exception | Customer-safe limitation, deferred item, placement note, or follow-up note. |

The customer handoff package must not expose internal serials, MAC addresses, network credentials, recovery codes, private URLs, tokens, service-only diagnostics, vendor-private notes, internal cost data, or internal asset IDs unless separately approved.

## 7. Warranty and Support Section

The handoff package should include a basic warranty and support section without defining final legal warranty language.

The section should define:

- warranty start reference, pending final warranty trigger policy
- standard included warranty note
- extended warranty/service note if applicable
- how the customer requests support
- what support may need from the customer, such as device name, room, screenshot, description of behavior, recent power/network changes, or exception reference
- support limitations
- third-party device, cloud account, internet, app, vendor service, battery, physical damage, site-condition, or customer-network limits
- warranty exceptions and deferred items that were reviewed at handoff

Warranty language must remain architecture-level until a future `WARRANTY001` task defines final warranty and support ticket policy.

## 8. Customer Training Confirmation

Customer training confirmation should record that the customer received and understood the basic handoff items.

Confirmation items:

| Item | Expected confirmation |
| --- | --- |
| Customer can open dashboard | Customer can access the intended daily-use dashboard surface. |
| Customer understands primary views | Customer can identify the main dashboard views and where to find common status. |
| Customer understands common actions | Customer can perform included daily actions such as checking status or using approved controls. |
| Customer understands local-first/ownership posture | Customer understands ownership, local-first behavior, and disclosed cloud/service limits. |
| Customer understands support path | Customer knows how to request support and what information to provide. |
| Customer understands known exceptions | Customer has reviewed customer-visible exceptions, deferred items, and limitations. |
| Customer has received handoff package | Customer received or was given access to the package. |
| Customer signoff collected or deferred with reason | Approval method is recorded, or deferral reason and owner are recorded. |

## 9. Signoff Fields

Customer signoff should use these customer-safe fields:

| Field | Required use |
| --- | --- |
| Customer name | Customer or authorized approver name. |
| Property address or label | Customer-safe property address or property label. |
| Install date | Date of install or closeout. |
| Installer name | Installer or WNYHS representative completing handoff. |
| Package / scope reference | Approved package, estimate, quote, or scope reference. |
| Commissioning status | Passed, deferred with approved exception, blocked, or other approved commissioning status. |
| Known exceptions reviewed yes/no | Whether customer-visible exceptions were reviewed. |
| Customer training complete yes/no | Whether training was completed. |
| Customer accepted handoff yes/no | Whether the customer accepted the handoff package. |
| Deferred items accepted yes/no | Whether deferred items were reviewed and accepted. |
| Customer signature / approval method | Signature, email approval, portal approval, or other approved method. |
| Notes / exception | Customer-safe notes, unresolved questions, deferral reason, or follow-up owner. |

This standard does not implement signature capture, approval storage, portal workflow, PDF generation, email delivery, or customer record persistence.

## 10. Relationship to Shared Data Model

`INSTALL006A_SHARED_JOB_DATA_MODEL_AND_HUBSPOT_FIELD_ARCHITECTURE_REV01.md` defines candidate records that the handoff package may inform in future bounded tasks:

- Customer
- Property
- Install Job
- Commissioning Record
- Customer Signoff
- Installed Asset Register
- Warranty Record
- Support Ticket / RMA
- Expansion / Add-on Opportunity

Candidate mapping:

| Handoff output | Future candidate record relationship |
| --- | --- |
| Welcome / system summary | Customer, Property, Install Job |
| Installed features and dashboard guide | Install Job, Commissioning Record |
| Customer training confirmation | Customer Signoff |
| Customer signoff fields | Customer Signoff |
| Installed Asset Summary | Installed Asset Register |
| Warranty/support notes | Warranty Record, Support Ticket / RMA |
| Known exceptions / deferred items | Commissioning Record, Customer Signoff, Support Ticket / RMA |
| Future add-on opportunities | Expansion / Add-on Opportunity |

This relationship is planning only. INSTALL009 does not create HubSpot fields, HubSpot objects, portal records, APIs, runtime sync, customer records, asset records, warranty records, support tickets, or add-on records.

## 11. Relationship to INSTALL Docs

- `INSTALL002_BENCH_BUILD_CHECKLIST_REV01.md` prepares bench output artifacts that may later support customer-safe handoff content.
- `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md` defines Customer, Installer, and Service Dashboard architecture.
- `INSTALL006A_SHARED_JOB_DATA_MODEL_AND_HUBSPOT_FIELD_ARCHITECTURE_REV01.md` defines the candidate shared data model.
- `INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md` validates readiness and commissioning before customer handoff.
- `INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md` defines customer handoff contents.
- `INSTALL010` will define Service Dashboard and remote support posture.

## 12. Funeral Home Pilot Relevance

The funeral home pilot may use this standard to prepare a customer-safe handoff package after commissioning.

This standard does not create funeral-home-specific handoff content, customer-specific records, customer dashboards, device lists, site notes, signoff records, support notes, PDFs, emails, Home Assistant configuration, automations, or installed asset records. Pilot-specific artifacts require a separate bounded customer/job task.

## 13. Future Follow-Up Planning Notes

The following future tasks are planning notes only. They are not activated by this standard:

- INSTALL010 - Service Dashboard and Remote Support Standard
- WARRANTY001 - Warranty and Support Ticket Model
- ASSET001 - Installed Asset Register Standard
- HUBSPOT-INSTALL001 - HubSpot Installer Property/Object Model Spec
- PORTAL001 - Installer Portal Architecture
- CUSTOMERDOC001 - Customer Handoff Template / PDF Standard

Recommended next task: INSTALL010 - Service Dashboard and Remote Support Standard.

## 14. Protected-System Boundaries

INSTALL009 is documentation and customer handoff package standard work only.

It does not authorize:

- Source, route, UI, CSS, public asset, or runtime changes.
- Home Assistant configuration implementation.
- Dashboard YAML or Lovelace card implementation.
- Home Assistant theme files or theme YAML.
- Frontend assets or dashboard styling implementation.
- Automations, scripts, scenes, helpers, or blueprints.
- Customer-specific handoff documents, customer records, customer data, PDFs, emails, customer dashboards, actual signoff records, actual installed asset records, warranty records, support tickets, or portal files.
- Funeral-home-specific handoff content, records, dashboards, automations, signoff, support notes, or installed asset records.
- HubSpot fields, HubSpot schema, HubSpot objects, pipeline, workflow, write-path changes, or direct HubSpot writes.
- Any bypass of `/api/lead-signal`.
- API, portal, database, durable storage, or runtime sync implementation.
- Stripe/payment verification, checkout, webhook, payment state, or payment sync changes.
- Scheduling/calendar authority changes.
- Resend/email runtime changes.
- Cloudflare configuration changes.
- Dependency or package-lock changes.
- Secret or environment-value exposure.

Future customer handoff templates, PDFs, portal screens, warranty/support models, asset registers, HubSpot installer objects, service dashboards, or Home Assistant configuration tasks must identify their own target files, validation, protected-system review, and rollback posture before work begins.
