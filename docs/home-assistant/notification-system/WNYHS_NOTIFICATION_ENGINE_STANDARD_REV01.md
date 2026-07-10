# WNYHS Notification Engine Standard REV01

Company-wide behavioral standard for residential and commercial deployments

| Document Field | Value |
| --- | --- |
| Document ID | WNYHS-NOTIFY-STD-REV01 |
| Status | Approved repository governance standard |
| Authority Type | Reusable company standard; not customer-specific |
| Derived From | BKLF Notification Configuration Decisions REV06 |
| Applies To | All WNY Home Security Home Assistant deployments |
| Implementation Authority | Requires an approved customer notification profile, live validation, and bounded implementation task |
| Owner | WNY Home Security Operations |

Core rule: every notification is defined by one data contract and processed through one lifecycle.

# Document Map

1. Purpose and Authority

2. Notification Philosophy

3. System Architecture

4. Notification Data Contract

5. Notification Lifecycle

6. Building Mode Interface

7. Priority Model

8. Visibility and Routing

9. Quiet Hours

10. Delivery Channels

11. Cooldown, Repeat, and Escalation

12. Recovery and Resolution

13. Suppression and Maintenance

14. Message and Action Standards

15. Event-Class Standards

16. Validation and Acceptance

17. Handoff and Ongoing Maintenance

18. Future Capability Rules

Appendix A - Data Contract Template

Appendix B - Customer Profile Requirements

Appendix C - Test Evidence Template

# 1. Purpose and Authority

This standard defines how WNY Home Security notification systems must be designed, configured, validated, handed off, and maintained. It is intentionally agnostic to a specific residence, business, device brand, or customer. Customer-specific choices belong in a Customer Notification Profile that implements this standard.

This document defines reusable behavior and required fields.

A customer profile supplies recipients, event choices, timing, thresholds, and approved channels.

A bounded implementation task authorizes technical changes.

Live-system evidence controls over assumptions.

## 1.1 Authority Boundary

This standard is not blanket permission to modify Home Assistant, customer dashboards, integrations, cloud services, messaging providers, or protected runtime systems. Implementation requires an approved customer profile, live validation, verified entities and services, and a bounded implementation task in the Master Task Register.

## 1.2 Required Downstream Artifacts

| Artifact | Purpose |
| --- | --- |
| Customer Notification Profile | Selects events, recipients, thresholds, wording, channels, and customer preferences. |
| Live Validation Record | Confirms services, entities, modes, recovery behavior, and delivery. |
| Implementation Work Order | Authorizes exact files, systems, validation, and exit criteria. |
| Customer Acceptance Record | Confirms testing, training, routing, and handoff. |
| Support/Maintenance Record | Tracks changes to phones, users, services, devices, and preferences. |

# 2. Notification Philosophy

Notifications must be useful, calm, actionable, and limited to events worth interrupting a person.

Building or Household Mode is the primary context engine; clock time alone does not determine whether activity is expected.

Quiet Hours regulate delivery timing but do not redefine security state.

Customer-visible notifications and service-team diagnostics are distinct channels.

No event should repeat after its underlying condition resolves.

Customer-facing text must use friendly names, not entity IDs or technical jargon.

No police, fire, medical, dispatch, monitored-alarm, guaranteed-response, prevention-guarantee, or professional-monitoring claims unless separately and lawfully authorized.

Notification behavior and dashboard controls are separate systems.

Every event must use the same data contract and lifecycle.

## 2.1 Noise-Control Principle

A technically available event is not automatically a useful notification. Each event must justify its interruption cost. Where a better trigger exists, duplicate or lower-value triggers should be suppressed. Example: a doorbell press may be the primary visitor trigger while person detection near the same door remains optional.

## 2.2 Local-First and Resilience Principle

Local system behavior should continue where possible even when remote delivery fails. Notifications must never imply that a failed cloud push means the local system is inoperative. External outage monitoring must be implemented outside Home Assistant when Home Assistant cannot reliably report its own outage.

# 3. System Architecture

The Notification Engine consumes approved deployment records rather than recreating them.

| Upstream Input | Notification Use |
| --- | --- |
| Site Profile | Determines property type, operational context, and customer naming. |
| People and Roles Register | Defines authorized recipients and access roles. |
| Building/Household Mode Standard | Defines expected behavior and mode transitions. |
| Device and Event Catalog | Defines available event sources and verified entities. |
| Customer Notification Profile | Selects customer-specific rules under this standard. |

## 3.1 Processing Model

EVENT -> CONTEXT -> PRIORITY -> VISIBILITY -> QUIET HOURS -> RECIPIENTS -> CHANNELS -> COOLDOWN/REPEAT -> SEND -> MONITOR -> RECOVERY -> CLOSE

## 3.2 Separation of Concerns

| System | Owns | Does Not Own |
| --- | --- | --- |
| Mode System | Operational state and mode transitions | Recipient choices or message templates |
| Notification Engine | Eligibility, routing, timing, repetition, recovery | Dashboard layout or device control UI |
| Dashboard System | Views, controls, navigation, mode selection | Notification routing policy |
| Customer Profile | Customer-specific selections and recipients | Company-wide engine behavior |
| Implementation Task | Technical realization and tests | Business strategy or unapproved scope |

# 4. Notification Data Contract

Every event must be documented with the fields below. Missing required fields block implementation.

| Field | Definition | Requirement |
| --- | --- | --- |
| Event ID | Stable machine-readable identifier | Required |
| Event Name | Customer-safe event name | Required |
| Purpose | Why the event merits notification | Required |
| Trigger | Verified event source and state transition | Required |
| Resolution Condition | How the event is known to be resolved | Required |
| Applicable Modes | Modes in which the event is eligible | Required |
| Suppressed Modes | Modes or windows that suppress the event | Required |
| Priority | Critical, High, Normal, or Low | Required |
| Owner Visibility | Yes, No, or Optional | Required |
| Service-Team Visibility | Yes, No, or Optional | Required |
| Recipient Groups | Logical routing groups | Required |
| Delivery Channels | Push; future SMS/email where approved | Required |
| Quiet-Hours Behavior | Immediate, delayed, or suppressed | Required |
| Duplicate Suppression | Short duplicate-control window | As applicable |
| Cooldown | Minimum interval between event alerts | As applicable |
| Repeat Policy | Conditions, interval, and maximum count | Required |
| Recovery Notification | Yes/No and routing | Required |
| Acknowledgement | None, optional, or required in future phase | Required |
| Message Template | Customer-safe title/body | Required |
| Media Attachment | Snapshot or other evidence if supported | Optional |
| Destination | Relevant view or dashboard route | Optional |
| Validation Evidence | Live tests required | Required |
| Owner Profile Choice | Enabled/disabled or customer preference | Required |

# 5. Notification Lifecycle

Event occurs or a monitored condition becomes true.

Validate that source data is available and trustworthy.

Capture current mode and relevant guard states.

Determine event eligibility.

Assign priority.

Apply Owner Visibility and Service-Team Visibility.

Apply Quiet Hours.

Select logical recipient groups.

Resolve available delivery channels.

Apply suppression, duplicate control, cooldown, repeat, and escalation rules.

Send notification and record delivery attempt where supported.

Monitor the condition.

Send recovery/restored notification when approved.

Close the event and reset repeat state.

## 5.1 State Integrity

Repeat counters must reset when the condition resolves.

A new event after resolution begins a new lifecycle.

A notification acknowledgement, if later implemented, must not falsely mark the physical condition resolved.

Automations must avoid race conditions created by rapid state changes or temporary unavailability.

# 6. Building Mode Interface

The Notification Engine must consume one authoritative mode helper or equivalent mode source. Individual automations must not reconstruct operational state independently from schedules, occupancy guesses, or isolated sensors.

| Mode Class | Expected Context | Notification Posture |
| --- | --- | --- |
| Active/Open | Normal customer or staff activity expected | Suppress routine occupancy/security noise; deliver operationally useful events. |
| Limited Occupancy | Consultation, appointment, caregiver, or controlled access | Suppress expected activity; retain critical faults and selected access events. |
| Event/Service | High expected activity for a scheduled or unscheduled event | Suppress occupancy noise; retain critical system and access faults. |
| Closed/Away | Property should be secured | Enable after-hours openings, motion, failure-to-secure, and selected activity events. |
| Maintenance | Approved technical/vendor activity | Suppress expected device transitions; route service-relevant faults. |
| Installer | WNYHS testing/configuration | Suppress customer-facing alerts; use implementation-test/service routing only. |

## 6.1 Mode Permissions

Customer users may receive access only to modes appropriate to their role.

Installer Mode is restricted to WNYHS/admin users.

Maintenance Mode is restricted to owner/admin or approved staff.

Mode changes should be logged with user and timestamp where supported.

Restricted modes must not remain active unintentionally; a visible warning and review procedure are required.

## 6.2 Mode Transition Events

Mode changes are first-class events. A transition may initiate workflows such as secure-building checks, cancellation of after-hours timers, routing-profile changes, or suppression changes. The customer profile defines which transitions apply.

# 7. Priority Model

| Priority | Meaning | Quiet Hours | Typical Examples |
| --- | --- | --- | --- |
| Critical | Immediate action needed to address a serious unresolved condition | Immediate | Failure to secure, critical environmental event, severe access fault |
| High | Time-sensitive security or operational event | Immediate | Doorbell press, exterior opening while Closed, after-hours motion |
| Normal | Useful but not immediately urgent | Delay during Quiet Hours | Camera offline, door left open when not escalated, low battery |
| Low | Maintenance, advisory, or nonurgent information | Delay during Quiet Hours | Routine maintenance, noncritical degradation |

## 7.1 Priority Escalation

An event may escalate if its condition worsens or remains unresolved. Escalation must be explicit in the event contract. Quiet Hours do not prevent a Normal or Low event from becoming High or Critical when defined conditions are met.

# 8. Visibility and Routing

## 8.1 Owner Visibility

| Value | Meaning |
| --- | --- |
| Yes | The event is meaningful and generally actionable for a customer. |
| No | The event is technical or internal and should not be delivered to customers. |
| Optional | The event may be offered as a customer preference. |

Owner Visibility does not automatically enable delivery. The customer profile still determines whether the event is selected and which customer roles receive it.

## 8.2 Service-Team Visibility

| Value | Meaning |
| --- | --- |
| Yes | WNYHS or an approved service team should receive the event. |
| No | The event is customer-operational only. |
| Optional | Service routing depends on the support agreement or customer preference. |

## 8.3 Logical Recipient Groups

| Group | Purpose |
| --- | --- |
| owner_primary | Primary property decision-maker. |
| customer_family_staff | Approved household, family, staff, or employee recipients. |
| manager_supervisor | Commercial managers or designated decision-makers. |
| service_team | WNYHS/admin and approved service personnel. |
| implementation_test | Temporary implementation/testing route. |
| all_active_test | Temporary broad test route; never a default production route. |

## 8.4 Routing Principles

Route by role first; map people/devices to roles separately.

Do not hardcode every individual into every automation when a maintainable routing abstraction is available.

Remove implementation recipients from customer-operational events at handoff unless explicitly retained.

Technical failures should not automatically reach every customer.

Customer preferences and support agreements control Optional visibility.

# 9. Quiet Hours

Quiet Hours are customer-profile settings. The engine standard defines behavior, not a universal time window.

| Priority | Default Quiet-Hours Behavior |
| --- | --- |
| Critical | Deliver immediately. |
| High | Deliver immediately. |
| Normal | Queue or defer until Quiet Hours end. |
| Low | Queue or defer until Quiet Hours end. |

Quiet Hours do not change Building/Household Mode.

Queued notifications must be re-evaluated at delivery time; resolved conditions should not generate stale alerts.

Customer profiles may define exceptions, but exceptions require explicit approval.

# 10. Delivery Channels

| Channel | Standard Position |
| --- | --- |
| Home Assistant Companion Push | Primary initial delivery channel. |
| Persistent HA Notification | Optional in-app history for selected events. |
| SMS | Future/optional channel, primarily for Critical events after approved integration. |
| Email | Future/optional channel, primarily for Critical events and records. |
| Dashboard | Not a push recipient; may be a destination opened from a notification. |
| External Monitoring Service | Separate capability requiring explicit runtime and support authorization. |

A channel must be live-tested before production use.

Channel failure must not be presented as proof that the event did not occur.

SMS and email introduce external services, consent, privacy, cost, and runtime requirements and must be separately authorized.

# 11. Cooldown, Repeat, and Escalation

Repeat behavior is event-specific. A universal repeat interval is prohibited.

| Pattern | Use |
| --- | --- |
| Duplicate Suppression | Suppress immediate duplicate triggers, such as repeated doorbell presses. |
| Cooldown | Prevent repeated discrete activity events within a defined interval. |
| Unresolved Repeat | Repeat only while a condition remains unresolved. |
| Periodic Reminder | Remind on a longer schedule for maintenance items such as low battery. |
| Escalation | Increase priority, recipients, or channels after defined unresolved conditions. |

## 11.1 Required Repeat Controls

Repeat interval

Maximum count

Stop condition

Reset condition

Escalation threshold

Recipient behavior for repeated alerts

## 11.2 Safe Defaults

| Event Class | Default Pattern |
| --- | --- |
| Doorbell press | Short duplicate suppression; no repeats. |
| Motion/person/activity | Cooldown; no unresolved repeats by default. |
| Door left open | First delay plus limited unresolved reminders. |
| Lock failure | Controlled retries; Critical alert if unresolved. |
| Low battery | Periodic reminder; no short-interval repetition. |
| Offline device | Initial delay; optional longer unresolved reminder. |

# 12. Recovery and Resolution

Recovery notifications confirm that a previously reported condition has returned to an acceptable state. They should be used when the original outage or fault was actionable and the restored state provides useful closure.

Recovery routing should generally follow the original event routing, subject to visibility preferences.

Recovery is suppressed for expected outages during Maintenance, Installer, or approved update/restart windows.

Recovery messages must name the restored device or service and avoid implying root cause unless known.

Resolved conditions must close event state and reset counters.

# 13. Suppression and Maintenance

| Suppression Context | Behavior |
| --- | --- |
| Maintenance Mode | Suppress expected transitions and customer noise; retain service-relevant failures. |
| Installer Mode | Suppress customer-facing delivery; route controlled test/service events. |
| Approved Update/Restart Window | Suppress expected offline/recovery noise for affected devices or integrations. |
| Entity Unavailable/Unknown | Do not treat transient unknown state as a confirmed security event without validation delay. |
| Manual Test | Use implementation-test routing and clear test wording. |

Suppression must be narrowly scoped to expected devices, events, and duration.

Suppression must not hide unrelated Critical conditions.

# 14. Message and Action Standards

## 14.1 Message Content

Customer-friendly event title

Affected device or area

Plain-language condition

Date/time when useful

Practical next step

No technical entity IDs

No unsupported emergency or monitoring claims

## 14.2 Media

A current snapshot or other media may be attached when technically reliable, privacy-appropriate, and validated. Media failure should not prevent the core notification unless the event contract explicitly requires it.

## 14.3 Actions and Destinations

Notification actions are optional and must be verified against the exact device, service, permission model, Companion behavior, and destination route. Dashboard controls such as Talk, Snapshot, Unlock, Lock, View Live, or lighting controls remain dashboard responsibilities unless a customer profile separately authorizes a notification action.

A safe default action is to open the relevant camera, doorbell, security, or system-health view.

Sensitive access-control actions require explicit owner approval and authentication review.

# 15. Event-Class Standards

| Event Class | Standard Rule |
| --- | --- |
| Visitor and Doorbell | Press, visitor, package, or related entrance events. Prefer the highest-value trigger and avoid duplicate person alerts. |
| Camera and Doorbell Health | Offline, recording, storage, or device-health events with startup/reboot delays. |
| Lock and Access | Jam, failed secure, low battery, tamper, access-code, and left-unlocked events. |
| Door/Window Opening | Left-open and unexpected opening events evaluated against mode. |
| Motion and Activity | Interior/exterior motion, person, vehicle, loitering, and zone activity with cooldowns. |
| Controller and Integration | Zigbee, Z-Wave, Matter, camera integration, and other critical service outages; often service-team focused. |
| Automation and Backup | Automation failures and backup failures; generally service-team visibility. |
| Environmental and Property | Leak, sump, freezer, power, temperature, humidity, IAQ, smoke/CO when supported and claim-safe. |
| Power and Network | UPS, power, internet, PoE switch, NVR, or network-health events when monitored. |
| Maintenance and Test | Controlled test events and maintenance reminders with restricted routing. |

## 15.1 Event Enablement Rule

A customer profile may enable only events supported by installed and verified hardware and integrations. Future or unsupported events must remain clearly marked and must not be implemented by inference.

# 16. Validation and Acceptance

No production notification system is complete until every enabled event and recipient path has been validated.

Confirm exact notify service or channel for every recipient.

Perform successful push test to every active Companion target.

Confirm recipient roles and post-handoff routing.

Confirm authoritative mode helper and every allowed mode value.

Test event eligibility in each applicable and suppressed mode.

Test Quiet Hours for all priority classes.

Test duplicate suppression, cooldown, repeats, maximum counts, and reset behavior.

Test recovery notifications and expected-outage suppression.

Test message wording and customer-facing names.

Test media attachments and destination links where enabled.

Test failure behavior when an entity is unavailable or a channel fails.

Confirm customer and service-team separation.

Capture test evidence and unresolved limitations.

Obtain customer acceptance and training signoff.

## 16.1 Acceptance Evidence

| Evidence | Required Content |
| --- | --- |
| Recipient Test Matrix | Recipient, service/channel, event, timestamp, result. |
| Mode Test Matrix | Mode, event, expected behavior, actual result. |
| Failure/Recovery Test | Outage/fault, delay, alert, restore, recovery result. |
| Customer Review | Enabled events, recipients, quiet hours, wording, future channels. |
| Known Limitations | Unsupported features, external dependencies, deferred enhancements. |

# 17. Handoff and Ongoing Maintenance

Remove or disable temporary implementation and all-active test routes.

Confirm final customer and service-team recipients.

Train authorized users on modes, notification meaning, and support process.

Document how phone replacement, user changes, and staff turnover affect routing.

Revalidate notifications after major Home Assistant, Companion, integration, network, or device changes.

Review optional events and channels during periodic support reviews.

Preserve customer approval and test evidence in the customer deployment record.

# 18. Future Capability Rules

| Capability | Rule |
| --- | --- |
| SMS and Email | Add only through separately approved runtime tasks, consent, provider configuration, and end-to-end tests. |
| Acknowledgement | Acknowledge means received/claimed, not physically resolved; start with selected Critical conditions only. |
| Escalation Chains | Must define timing, recipients, channels, maximum steps, and stop conditions. |
| Digests | Suitable for Low/Normal informational events; never replace immediate Critical/High delivery. |
| AI Summaries | Must not invent causes, severity, or actions; use verified event data and conservative language. |
| External Availability Monitoring | Required for reliable detection of HA host, internet, or remote-access outages. |
| Professional Monitoring/Dispatch | Outside baseline WNYHS notification engine and requires separate legal, contractual, and technical authority. |

# Appendix A - Notification Data Contract Template

| Field | Customer/Event Value |
| --- | --- |
| Event ID |  |
| Event Name |  |
| Purpose |  |
| Trigger |  |
| Resolution Condition |  |
| Applicable Modes |  |
| Suppressed Modes |  |
| Priority |  |
| Owner Visibility |  |
| Service-Team Visibility |  |
| Recipient Groups |  |
| Delivery Channels |  |
| Quiet-Hours Behavior |  |
| Duplicate Suppression |  |
| Cooldown |  |
| Repeat Policy |  |
| Recovery Notification |  |
| Acknowledgement |  |
| Message Title |  |
| Message Body |  |
| Media Attachment |  |
| Destination |  |
| Validation Evidence |  |
| Owner Profile Choice |  |
| Known Limitations |  |

# Appendix B - Customer Notification Profile Requirements

Reference the approved site profile, people/roles register, mode definitions, and device/event catalog.

List active recipients and confirmed channels.

Provide a complete event-routing matrix.

Complete the Notification Data Contract for every enabled event.

Identify optional, deferred, rejected, and unsupported events.

Define Quiet Hours and priority exceptions.

Define post-handoff service-team routing.

Define live-validation and customer-acceptance evidence.

Document future SMS/email, acknowledgement, escalation, or external monitoring separately.

# Appendix C - Test Evidence Template

| Test ID | Event | Mode | Recipient/Channel | Expected | Actual | Pass/Fail | Evidence/Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |

# Appendix D - Promotion and Governance Notes

This REV01 standard was promoted from the operator-approved DOCX source through bounded task `HA-NOTIFY002-NOTIFICATION-GOVERNANCE-AND-BKLF-PROFILE-PROMOTION-001`. It was derived from the BKLF reference implementation. Customer-specific thresholds, recipients, names, schedules, and device details must remain in customer profiles. Changes to this standard should be governed as reusable company policy and should not be inferred from a single customer implementation without operator approval.
