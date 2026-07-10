# BKLF Notification Configuration Decisions REV06

First production-quality specification for the WNYHS Notification Engine, using BK Lewis Funeral Home as the reference implementation.

| Customer / Install | BK Lewis Funeral Home (BKLF) |
| --- | --- |
| Document Status | Approved BKLF notification decision profile for live validation |
| Primary Purpose | Consolidate all approved notification logic, routing, lifecycle, validation, and future-standard candidates |
| Primary Channel | Home Assistant Companion push |
| Future Channels | SMS and email for Critical notifications after push validation |
| Next Use | Live validation, customer acceptance review, and a separately approved bounded implementation task |

This document intentionally includes certain Building Mode rules until they are extracted into a standalone WNYHS Building Mode Standard. Dashboard controls remain out of scope except where a notification links to a destination view.

# Part I - Philosophy and Scope

## 1. Purpose

Define the complete BKLF notification behavior before implementation, including policy logic, recipients, priorities, visibility, quiet hours, cooldowns, repeat rules, recovery behavior, validation requirements, and future promotion into WNYHS-wide standards.

## 2. Notification Philosophy

Notifications must be useful, calm, actionable, and limited to events that justify interrupting a person.

Building Mode is the primary policy engine. Time alone does not define whether activity is expected.

Quiet Hours control delivery timing for Normal and Low events. Quiet Hours never override Critical or High delivery.

Owner Visibility and Service-Team Visibility are independent attributes.

Customer-facing wording must use friendly device names and must not expose entity IDs.

No emergency, dispatch, police, fire, monitored-alarm, guaranteed-response, or prevention-guarantee language.

Notification logic and dashboard interaction logic are separate systems.

Every event uses the same Notification Data Contract and lifecycle.

No production implementation begins until live service, entity, routing, and recovery validation is complete and a bounded implementation task is approved.

## 3. Guiding Principles

Companion push is the initial primary delivery channel.

SMS and email will be added later for Critical notifications after push behavior is proven.

Role-based routing is preferred over hardcoding every person into every automation.

Customer-facing events and technical/service events must be separated.

Events must stop repeating when the underlying condition is resolved.

Recovery notifications are sent when approved, unless the outage was expected during Maintenance Mode, Installer Mode, or an approved update/restart window.

Implementation and testing routes are temporary and must be removed or disabled at handoff unless explicitly retained.

## 4. Scope

This specification covers notification decision logic for BKLF, including event eligibility, routing, priority, quiet-hours behavior, repeat/cooldown behavior, recovery, validation, and future escalation. It also temporarily contains Building Mode rules required by the notification engine.

## 5. Out of Scope

Dashboard layout and visual refinement.

Doorbell-tab controls such as Talk, Snapshot, Unlock, Lock, and View Live.

Creation of SMS/email runtime integrations.

External outage monitoring infrastructure.

Automatic customer acknowledgement workflows in the initial phase.

Any police, fire, medical, dispatch, or professional-monitoring integration.

Changes to user permissions outside the bounded implementation and handoff process.

## 6. Relationship to Future WNYHS Standards

REV06 is the reference implementation source for future extraction into the WNYHS Building Mode Standard, WNYHS Notification Engine Standard, BKLF Notification Profile, dashboard standard, lock/access standard, camera/doorbell standard, and customer notification configuration process.

# Part II - Notification Engine

## 7. Notification Engine Overview

Every notification is evaluated by the same engine: event facts are gathered, current Building Mode is checked, priority and visibility are assigned, Quiet Hours are applied, recipients and channels are selected, cooldown/repeat rules are enforced, and the event is monitored until resolved or closed.

## 8. Notification Lifecycle

Event occurs or a condition becomes true.

Validate that the source entity and state are usable.

Evaluate current Building Mode.

Determine priority.

Evaluate Owner Visibility and Service-Team Visibility.

Apply Quiet Hours behavior.

Determine recipients and channels.

Apply maintenance, installer, and approved update/restart suppression.

Apply duplicate suppression, cooldown, or unresolved-repeat policy.

Send the notification.

Monitor the underlying condition.

Send recovery/restored notice when required.

Close the event and reset its repeat state.

## 9. Building Mode Evaluation

Building Mode defines whether activity is expected. Notifications must use the authoritative mode helper rather than reconstructing schedules independently. When mode is Closed, the building is expected to be secured and security-related events become eligible. Open, Consultation, and Service/Event generally suppress occupancy noise. Maintenance and Installer Mode use restricted routing and suppression rules.

## 10. Quiet Hours Evaluation

Quiet Hours are 9:00 PM through 8:00 AM, seven days per week. Only High and Critical notifications deliver during Quiet Hours. Normal and Low notifications wait until Quiet Hours end unless the event is reclassified by a more severe condition.

## 11. Priority Evaluation

| Priority | Meaning | Quiet Hours | Typical Examples |
| --- | --- | --- | --- |
| Critical | Immediate unresolved condition with material security, safety, or system impact | Deliver immediately | Failure to secure, persistent lock jam, future leak/smoke/CO |
| High | Time-sensitive event requiring awareness | Deliver immediately | Doorbell press, exterior opening while Closed, after-hours interior motion |
| Normal | Useful operational event that can wait overnight | Delay | Camera offline, low battery, routine restoration |
| Low | Administrative or maintenance information | Delay | Maintenance reminders, noncritical degradation |

## 12. Owner Visibility

Owner Visibility indicates whether an event is suitable for customer delivery. It does not itself enable delivery. The customer profile still determines whether that event is turned on.

| Value | Meaning |
| --- | --- |
| Yes | Customer delivery is expected when the event is enabled. |
| No | Internal technical/service event only. |
| Optional | Customer may opt in or out; service routing may remain enabled. |

## 13. Recipient Routing

Every event must select recipients from logical routing groups. Initial implementation may use individual services until group abstractions are created, but the logical routing contract remains authoritative.

## 14. Delivery Channels

Phase 1: Home Assistant Companion push.

Phase 2: SMS and email for Critical notifications after push validation.

Optional persistent Home Assistant notification for in-app history where useful.

No dashboard instance is treated as a push recipient.

## 15. Cooldown and Repeat Engine

Doorbell press: 5-second duplicate suppression; no repeats.

Motion/activity: cooldown rather than repeating unresolved alerts.

Door left open: first alert after 90 seconds, then every 90 seconds, maximum five total notifications.

Lock failure to secure: five total lock attempts, spaced 15 seconds apart; notify after failure remains unresolved.

Low battery: periodic reminder only; never five-minute repeats.

Offline events: initial delay, then controlled reminders only when separately approved.

## 16. Recovery Engine

Recovery notifications are sent for approved camera, doorbell, lock, controller, and integration outages. Recovery is suppressed when the outage occurred during Maintenance Mode, Installer Mode, or an approved update/restart window.

## 17. Future Acknowledgement Model

Acknowledgement is deferred from the initial implementation. Future candidates include failure to secure, persistent lock jam, exterior door left open while Closed, critical controller outage, and future leak, sump, freezer, power, smoke, or CO conditions. Acknowledgement means a person has accepted responsibility; it must never falsely mark the physical condition resolved.

# Part III - Building Mode

## 18. Building Modes

| Mode | Purpose | Expected Activity | Customer Access |
| --- | --- | --- | --- |
| Open | Normal staff/customer activity | Expected | Owner and approved employees |
| Consultation | Limited occupancy outside routine activity | Expected and intentional | Owner and approved employees |
| Service / Event | Funeral, viewing, gathering, or event | High activity expected | Owner and approved employees |
| Closed | Building should be secured | Unexpected unless authorized | Owner and approved employees |
| Maintenance | Approved technician/vendor work | Intentional technical activity | Owner/admin and approved staff only |
| Installer Mode | WNYHS testing/configuration | Intentional testing | WNYHS/admin only |

## 19. Mode Transition Rules

Open, Consultation, and Service/Event suppress normal occupancy alerts.

Changing to Closed starts the secure-building workflow regardless of time of day.

Changing from Closed to an occupied mode cancels unresolved occupancy timers and suppresses after-hours motion/opening notifications.

Maintenance routes technical issues to the Service Team and suppresses expected operational noise.

Installer Mode suppresses customer-facing notifications and routes tests to implementation recipients only.

Mode changes should be logged with user and timestamp when technically supported.

## 20. Secure Building Workflow

User changes Building Mode to Closed.

Confirm exterior door contacts are closed.

If a door is open, start the door-left-open notification sequence and do not force the corresponding lock.

Command each eligible exterior smart lock to lock.

Wait 15 seconds for state confirmation.

Retry failed locks up to five total attempts.

If any lock remains unlocked or jammed, issue a Critical failure-to-secure notification.

Confirm critical camera, doorbell, and controller availability where practical.

Close the workflow only when success or final failure is recorded.

## 21. Auto-Lock Workflow

At 7:00 PM local time, run the auto-lock check.

If Building Mode is Closed, execute the secure-building workflow.

If Building Mode is Open, Consultation, Service/Event, Maintenance, or Installer Mode, do not force locking.

When the mode later changes to Closed, execute the secure-building workflow immediately.

Auto-lock must not attempt to lock a door known to be open.

## 22. Mode Permissions

Customer-visible modes: Open, Consultation, Service/Event, Closed.

Maintenance: owner/admin and approved staff only.

Installer Mode: WNYHS/admin only.

Ordinary employees must not be able to select Installer Mode.

Restricted-mode access is a future dashboard/permission refinement, not part of notification implementation.

# Part IV - Event Catalog and Definitions

## 23. Event Catalog Summary

| Event | Status | Priority | Owner Visibility | Service Visibility |
| --- | --- | --- | --- | --- |
| Doorbell press | Implement now | High | Yes | No after handoff |
| Camera offline/restored | Implement now | Normal | Optional | Yes |
| Doorbell offline/restored | Implement now | High | Yes | Yes |
| Lock jam | Implement now | Critical | Yes | Yes |
| Lock battery low | Implement now | Normal | Yes | Optional |
| Failure to secure | Implement now | Critical | Yes | Yes |
| Door left open | Implement now | High while Closed; Normal otherwise | Yes | Yes |
| Exterior opening while Closed | Implement now | High | Yes | Yes |
| Interior motion while Closed | Implement now | High | Yes | Yes |
| Parking-lot person/loitering | Implement now | High while Closed | Yes | Yes |
| Zigbee/Z-Wave controller outage/restored | Implement now where reliable | Critical/Normal recovery | No | Yes |
| Critical integration failure/restored | Implement now where reliable | High | Optional | Yes |
| Automation failure | Future/conditional | Normal | No | Yes |
| Backup failure | Future/conditional | Normal | No | Yes |
| Maintenance/test event | Implementation only | Low | No | Yes |
| Environmental/power/storage/access events | Future | Varies | Varies | Yes |

## 24. Detailed Event Definitions

### 24.1 Doorbell Press

| Purpose | Notify approved users that a visitor pressed a doorbell. |
| --- | --- |
| Trigger | Confirmed visitor/doorbell-press entity changes to active. |
| Applicable Building Modes | All modes |
| Priority | High |
| Owner Visibility | Yes |
| Service-Team Visibility | No after handoff; implementation test during build |
| Recipients | Mr. Lewis; Chris and Luis during implementation/testing only unless separately approved |
| Quiet-Hours Behavior | Immediate |
| Cooldown | 5-second duplicate suppression |
| Maximum Repeats | 0 |
| Recovery Notification | No |
| Message Template | Visitor at {Door Name}. Tap to view. |
| Dashboard Destination | Relevant Doorbell tab or live camera view |
| Image / Media | Current image when reliable and privacy-appropriate |
| Acknowledgement | No |
| Implementation Status | Implement now |
| Notes | Doorbell person detection does not create a second notification by default. |

### 24.2 Camera Offline

| Purpose | Report loss of a general camera after sustained unavailability. |
| --- | --- |
| Trigger | Camera or required integration unavailable for 180 seconds. |
| Applicable Building Modes | All modes except expected suppression windows |
| Priority | Normal |
| Owner Visibility | Optional |
| Service-Team Visibility | Yes |
| Recipients | Chris and Luis; Mr. Lewis only if owner visibility is enabled |
| Quiet-Hours Behavior | Delay during Quiet Hours |
| Cooldown | 180-second initial delay; long cooldown after send |
| Maximum Repeats | 0 initially |
| Recovery Notification | Yes |
| Message Template | {Camera Name} is offline. Remote viewing may be unavailable. |
| Dashboard Destination | Camera/system status view |
| Image / Media | No |
| Acknowledgement | No |
| Implementation Status | Implement now |
| Notes | Suppress during Maintenance, Installer Mode, or approved update/restart window. |

### 24.3 Doorbell Offline

| Purpose | Report loss of a doorbell because visitor response may be unavailable. |
| --- | --- |
| Trigger | Doorbell camera/integration unavailable for 180 seconds. |
| Applicable Building Modes | All modes except expected suppression windows |
| Priority | High |
| Owner Visibility | Yes |
| Service-Team Visibility | Yes |
| Recipients | Mr. Lewis, Chris, Luis |
| Quiet-Hours Behavior | Immediate |
| Cooldown | 180-second initial delay |
| Maximum Repeats | 0 initially |
| Recovery Notification | Yes |
| Message Template | {Door Name} Doorbell is offline. Remote visitor response may be unavailable. |
| Dashboard Destination | Doorbell/system status view |
| Image / Media | No |
| Acknowledgement | No |
| Implementation Status | Implement now |
| Notes | Higher priority than general camera offline. |

### 24.4 Lock Jam

| Purpose | Notify when either exterior smart lock reports a jam or failure state. |
| --- | --- |
| Trigger | Jam/problem entity becomes active or lock fails to change state. |
| Applicable Building Modes | All modes |
| Priority | Critical |
| Owner Visibility | Yes |
| Service-Team Visibility | Yes |
| Recipients | Mr. Lewis, Chris, Luis |
| Quiet-Hours Behavior | Immediate |
| Cooldown | Suppress duplicates while same jam remains active |
| Maximum Repeats | Controlled unresolved reminders in future; initial single alert |
| Recovery Notification | Yes |
| Message Template | {Lock Name} needs review. The lock reports a jam or operating problem. |
| Dashboard Destination | Lock/security view |
| Image / Media | No |
| Acknowledgement | Future candidate |
| Implementation Status | Implement now |
| Notes | Customer-safe wording avoids panic language. |

### 24.5 Lock Battery Low

| Purpose | Provide advance notice before lock battery failure. |
| --- | --- |
| Trigger | Lock battery at or below 15 percent or replace-battery entity active. |
| Applicable Building Modes | All modes |
| Priority | Normal |
| Owner Visibility | Yes |
| Service-Team Visibility | Optional |
| Recipients | Mr. Lewis; Chris/Luis optional |
| Quiet-Hours Behavior | Delay during Quiet Hours |
| Cooldown | No more than periodic approved reminder |
| Maximum Repeats | 0 per event cycle |
| Recovery Notification | Yes when battery returns above threshold or replace flag clears, if reliable |
| Message Template | {Lock Name} battery is low. Battery replacement is recommended. |
| Dashboard Destination | Lock/device status view |
| Image / Media | No |
| Acknowledgement | No |
| Implementation Status | Implement now |
| Notes | Threshold may be adjusted after observing live device behavior. |

### 24.6 Failure to Secure

| Purpose | Report that the Closed-mode secure-building workflow could not secure a lock. |
| --- | --- |
| Trigger | After five total lock attempts spaced 15 seconds apart, lock is not confirmed locked. |
| Applicable Building Modes | Closed |
| Priority | Critical |
| Owner Visibility | Yes |
| Service-Team Visibility | Yes |
| Recipients | Mr. Lewis, Chris, Luis |
| Quiet-Hours Behavior | Immediate |
| Cooldown | One event per secure-building run |
| Maximum Repeats | 0 beyond the final alert in phase 1 |
| Recovery Notification | Yes after lock becomes secured |
| Message Template | {Lock Name} could not be secured after repeated attempts. Please review the door and lock. |
| Dashboard Destination | Security/lock view |
| Image / Media | No |
| Acknowledgement | Future candidate |
| Implementation Status | Implement now |
| Notes | Do not attempt to lock when the matching door contact is open. |

### 24.7 Door Left Open

| Purpose | Notify that an exterior door remains open beyond the approved interval. |
| --- | --- |
| Trigger | Exterior door contact remains open for 90 seconds. |
| Applicable Building Modes | All modes; highest significance in Closed |
| Priority | High in Closed; Normal in occupied modes |
| Owner Visibility | Yes |
| Service-Team Visibility | Yes |
| Recipients | Mr. Lewis, Chris, Luis when Closed; customer routing configurable in occupied modes |
| Quiet-Hours Behavior | Immediate when High; delay when Normal |
| Cooldown | 90 seconds |
| Maximum Repeats | 5 total notifications every 90 seconds while still open |
| Recovery Notification | Yes when door closes |
| Message Template | {Door Name} has remained open for 90 seconds. |
| Dashboard Destination | Security/door view |
| Image / Media | No |
| Acknowledgement | No |
| Implementation Status | Implement now |
| Notes | Stop immediately and reset sequence when door closes. |

### 24.8 Exterior Opening While Closed

| Purpose | Notify when an exterior door or approved window opens while the building should be secured. |
| --- | --- |
| Trigger | Exterior contact changes from closed to open while mode is Closed. |
| Applicable Building Modes | Closed |
| Priority | High |
| Owner Visibility | Yes |
| Service-Team Visibility | Yes |
| Recipients | Mr. Lewis, Chris, Luis |
| Quiet-Hours Behavior | Immediate |
| Cooldown | Event-specific cooldown to prevent bounce noise |
| Maximum Repeats | 0 |
| Recovery Notification | Optional recovery when contact closes; recommend yes for doors |
| Message Template | {Opening Name} opened while the building is Closed. |
| Dashboard Destination | Security/openings view |
| Image / Media | No |
| Acknowledgement | No |
| Implementation Status | Implement now |
| Notes | Use customer-facing opening names only. |

### 24.9 Interior Motion While Closed

| Purpose | Notify when interior motion occurs while occupancy is not expected. |
| --- | --- |
| Trigger | Approved interior motion/occupancy entity becomes active while mode is Closed. |
| Applicable Building Modes | Closed |
| Priority | High |
| Owner Visibility | Yes |
| Service-Team Visibility | Yes |
| Recipients | Mr. Lewis, Chris, Luis |
| Quiet-Hours Behavior | Immediate |
| Cooldown | Cooldown required; recommended initial 5 minutes subject to test |
| Maximum Repeats | 0 |
| Recovery Notification | No |
| Message Template | Activity detected after hours in {Area Name}. |
| Dashboard Destination | Security/camera view where available |
| Image / Media | Optional camera image only when reliable and relevant |
| Acknowledgement | No |
| Implementation Status | Implement now |
| Notes | Suppress in all occupied modes, Maintenance, and Installer Mode. |

### 24.10 Parking-Lot Person or Loitering

| Purpose | Notify selectively about a person lingering in the parking lot while the building is Closed. |
| --- | --- |
| Trigger | Person remains present in approved linger area for more than 5 minutes while mode is Closed. |
| Applicable Building Modes | Closed |
| Priority | High |
| Owner Visibility | Yes |
| Service-Team Visibility | Yes |
| Recipients | Mr. Lewis, Chris, Luis |
| Quiet-Hours Behavior | Immediate |
| Cooldown | Cooldown required; recommended 15 minutes after alert |
| Maximum Repeats | 0 |
| Recovery Notification | No |
| Message Template | Person activity has continued in the parking lot for more than 5 minutes. |
| Dashboard Destination | Parking Lot camera view |
| Image / Media | Current image when reliable |
| Acknowledgement | No |
| Implementation Status | Implement now |
| Notes | Do not notify for routine vehicle movement or all-day activity. |

### 24.11 Zigbee Controller Outage

| Purpose | Notify service personnel when the Zigbee controller becomes unavailable. |
| --- | --- |
| Trigger | Controller/integration availability indicates sustained outage. |
| Applicable Building Modes | All modes except expected suppression windows |
| Priority | Critical if active security devices depend on it |
| Owner Visibility | No |
| Service-Team Visibility | Yes |
| Recipients | Chris, Luis |
| Quiet-Hours Behavior | Immediate |
| Cooldown | Delay long enough to avoid restart false positives; recommend 180 seconds subject to validation |
| Maximum Repeats | 0 |
| Recovery Notification | Yes |
| Message Template | Zigbee controller is unavailable. Some sensors may not report. |
| Dashboard Destination | System health view |
| Image / Media | No |
| Acknowledgement | Future candidate |
| Implementation Status | Implement where reliable |
| Notes | Technical wording is service-team only. |

### 24.12 Z-Wave Controller Outage

| Purpose | Notify service personnel when the Z-Wave controller becomes unavailable. |
| --- | --- |
| Trigger | Controller/integration availability indicates sustained outage. |
| Applicable Building Modes | All modes except expected suppression windows |
| Priority | Critical |
| Owner Visibility | No |
| Service-Team Visibility | Yes |
| Recipients | Chris, Luis |
| Quiet-Hours Behavior | Immediate |
| Cooldown | Recommended 180-second sustained outage subject to validation |
| Maximum Repeats | 0 |
| Recovery Notification | Yes |
| Message Template | Z-Wave controller is unavailable. Lock status and control may be affected. |
| Dashboard Destination | System health view |
| Image / Media | No |
| Acknowledgement | Future candidate |
| Implementation Status | Implement where reliable |
| Notes | Technical event; owner may be notified only through affected lock events. |

### 24.13 Critical Integration Failure

| Purpose | Notify the service team when a critical Home Assistant integration fails. |
| --- | --- |
| Trigger | Integration unavailable/auth failure/repeated setup failure where safely observable. |
| Applicable Building Modes | All modes except expected suppression windows |
| Priority | High |
| Owner Visibility | Optional |
| Service-Team Visibility | Yes |
| Recipients | Chris, Luis; Mr. Lewis only if customer impact warrants |
| Quiet-Hours Behavior | Immediate |
| Cooldown | Long cooldown; avoid restart noise |
| Maximum Repeats | 0 |
| Recovery Notification | Yes |
| Message Template | A critical system connection is unavailable. Service review is required. |
| Dashboard Destination | System health view |
| Image / Media | No |
| Acknowledgement | No |
| Implementation Status | Implement where reliable |
| Notes | Do not expose raw integration errors to the customer. |

### 24.14 Automation Failure

| Purpose | Record and optionally notify service personnel when an approved critical automation fails. |
| --- | --- |
| Trigger | Trace/error signal or explicit validation helper indicates failure. |
| Applicable Building Modes | All modes |
| Priority | Normal unless security workflow failure is escalated separately |
| Owner Visibility | No |
| Service-Team Visibility | Yes |
| Recipients | Chris, Luis |
| Quiet-Hours Behavior | Delay during Quiet Hours unless it causes Critical/High impact |
| Cooldown | Long cooldown |
| Maximum Repeats | 0 |
| Recovery Notification | Optional |
| Message Template | A system automation needs service review. |
| Dashboard Destination | System health view |
| Image / Media | No |
| Acknowledgement | No |
| Implementation Status | Future/conditional |
| Notes | Home Assistant does not always expose a clean event for every automation failure. |

### 24.15 Backup Failure

| Purpose | Notify service personnel when an approved backup job fails or becomes stale. |
| --- | --- |
| Trigger | Reliable backup failure/staleness indicator becomes available. |
| Applicable Building Modes | All modes |
| Priority | Normal |
| Owner Visibility | No |
| Service-Team Visibility | Yes |
| Recipients | Chris, Luis |
| Quiet-Hours Behavior | Delay during Quiet Hours |
| Cooldown | Daily or backup-cycle based |
| Maximum Repeats | 0 |
| Recovery Notification | Yes |
| Message Template | Home Assistant backup status needs service review. |
| Dashboard Destination | System health/backup view |
| Image / Media | No |
| Acknowledgement | No |
| Implementation Status | Future/conditional |
| Notes | Requires a reliable backup-monitoring source. |

### 24.16 Maintenance and Test Events

| Purpose | Support controlled testing without disturbing customer users. |
| --- | --- |
| Trigger | Manual test event or service workflow. |
| Applicable Building Modes | Maintenance and Installer Mode |
| Priority | Low |
| Owner Visibility | No |
| Service-Team Visibility | Yes |
| Recipients | Chris, Luis; Mr. Lewis only during approved acceptance test |
| Quiet-Hours Behavior | Delay unless actively testing |
| Cooldown | Per test plan |
| Maximum Repeats | 0 |
| Recovery Notification | No |
| Message Template | WNYHS notification test: {Test Name}. |
| Dashboard Destination | Implementation/test view |
| Image / Media | Optional |
| Acknowledgement | No |
| Implementation Status | Implementation only |
| Notes | Disable or remove broad test routing after handoff. |

## 25. Future Event Definitions

| Future Event | Status | Priority | Visibility |
| --- | --- | --- | --- |
| UPS on battery / power restored | Future | Critical during sustained outage | Owner Yes; Service Yes |
| Internet down / restored | Future; requires external monitoring | High/Critical depending duration | Owner Optional; Service Yes |
| PoE switch/NVR/storage issue | Future | High | Owner Optional; Service Yes |
| Recording disabled/storage full/SD card issue | Future | Normal/High | Owner Optional; Service Yes |
| Water leak | Future baseline candidate | Critical | Owner Yes; Service Yes |
| Sump/water-level issue | Future baseline candidate | Critical | Owner Yes; Service Yes |
| Freezer/refrigerator temperature | Future | Critical/High | Owner Yes; Service Optional |
| Building temperature/humidity/air quality | Future | High/Normal | Owner Yes/Optional; Service Optional |
| Smoke/CO | Future with careful claims | Critical | Owner Yes; Service Yes |
| Multiple failed keypad attempts | Future | High | Owner Yes; Service Yes |
| User code used after hours | Future optional | High | Owner Optional; Service Optional |
| Temporary code created/expired | Future optional | Normal | Owner Optional; Service Optional |
| Lock tamper/cover removed | Future | High | Owner Yes; Service Yes |
| Scene/automation failed | Future | Normal | Owner No; Service Yes |
| Light left on after hours | Future optional | Low | Owner Optional; Service No |

# Part V - Routing

## 26. Confirmed Companion Services

| Person | Confirmed Service | Production Routing |
| --- | --- | --- |
| Chris / admin | notify.chris_cell | Active: service team, system health, after-hours activity |
| Luis | notify.luis_cell | Active: service team, system health, after-hours activity |
| Mr. Lewis | notify.me_lewis_cell | Active: owner/customer operational notifications |
| Helen | notify.sm_s931u1_helen_cell | Confirmed technically; excluded from production routing |
| Anthony | No confirmed service | Excluded |

## 27. Logical Routing Groups

| Logical Group | Initial Members | Post-Handoff Intent |
| --- | --- | --- |
| Owner Primary | Mr. Lewis | Primary owner route |
| Customer / Family | Mr. Lewis only initially | Owner-approved customer recipients |
| Service Team | Chris, Luis | Retained after handoff |
| Implementation Test | Chris, Luis; Mr. Lewis during controlled acceptance | Disable broad test routing after handoff |
| All Active | Only for intentional test | Never default production target |

## 28. Routing Matrix

| Event | Owner | Service Team | Initial BKLF Route |
| --- | --- | --- | --- |
| Doorbell press | Yes | No after handoff | Mr. Lewis |
| After-hours exterior opening | Yes | Yes | Mr. Lewis, Chris, Luis |
| After-hours interior motion | Yes | Yes | Mr. Lewis, Chris, Luis |
| Lock jam | Yes | Yes | Mr. Lewis, Chris, Luis |
| Failure to secure | Yes | Yes | Mr. Lewis, Chris, Luis |
| Door left open while Closed | Yes | Yes | Mr. Lewis, Chris, Luis |
| Camera offline | Optional | Yes | Chris, Luis; owner optional |
| Doorbell offline | Yes | Yes | Mr. Lewis, Chris, Luis |
| Lock battery low | Yes | Optional | Mr. Lewis; service optional |
| Controller unavailable | No | Yes | Chris, Luis |
| Automation/backup failure | No | Yes | Chris, Luis |
| Recovery/restored | Based on original outage | Yes | Same approved route as outage |

## 29. Customer Preferences

Owner Visibility values determine whether an event is eligible for customer delivery. Final customer preferences may disable Optional events without changing service-team routing. Any future recipient additions must be made by role and reflected in the customer notification profile.

# Part VI - Validation and Acceptance

## 30. Companion Tests

Send successful test push to notify.chris_cell.

Send successful test push to notify.luis_cell.

Send successful test push to notify.me_lewis_cell.

Confirm Helen remains excluded despite technical service presence.

Confirm Anthony has no production route.

## 31. Recipient Tests

Verify owner-only doorbell route.

Verify after-hours activity routes to Mr. Lewis, Chris, and Luis.

Verify service-only controller/integration events exclude the owner.

Verify Maintenance and Installer Mode suppress customer delivery.

## 32. Building Mode Tests

Test Open, Consultation, Service/Event, Closed, Maintenance, and Installer Mode.

Verify Closed transition starts secure-building workflow.

Verify leaving Closed cancels after-hours occupancy rules.

Verify restricted modes are not available to ordinary employees when dashboard permissions are later refined.

## 33. Door and Lock Tests

Verify every exterior door contact mapping.

Verify door-left-open 90-second timing and maximum five alerts.

Verify alerts stop when the door closes.

Verify both locks report state, jam, battery, and recovery where available.

Verify five lock attempts spaced 15 seconds apart.

Verify no lock attempt occurs while the matching door is open.

## 34. Camera and Doorbell Tests

Verify exact doorbell press entities.

Verify 5-second duplicate suppression.

Verify camera image attachment.

Verify notification destination opens the intended doorbell/camera view.

Verify doorbell and camera offline/recovery behavior.

Do not treat Talk, Snapshot, Unlock, Lock, or View Live as notification requirements.

## 35. Recovery Tests

Simulate approved device outage.

Verify outage delay and recipient routing.

Restore device and verify recovery message.

Repeat outage during Maintenance or approved update/restart window and verify recovery suppression.

## 36. Quiet Hours Tests

Verify High and Critical deliver immediately between 9 PM and 8 AM.

Verify Normal and Low are deferred.

Verify deferred events send after 8 AM only if still relevant.

## 37. Failure Tests

Verify unavailable entities do not create repeated noise.

Verify retries do not stack across automation restarts.

Verify repeat counters reset after resolution.

Verify customer-safe wording contains no entity IDs or prohibited claims.

## 38. Customer Acceptance

Review enabled event list with Mr. Lewis.

Review recipients.

Review Quiet Hours and Building Mode behavior.

Demonstrate doorbell, after-hours, lock, door-left-open, and recovery workflows.

Document approved exceptions.

Obtain customer signoff after successful controlled testing.

# Part VII - Future Enhancements

SMS and email for Critical notifications after Companion push validation.

Acknowledgement and responsibility-claiming workflows for selected Critical events.

Escalation chains when Critical events remain unacknowledged.

Notification digest for Low and selected Normal events.

AI-assisted summaries that do not replace raw event evidence.

Advanced recipient rules by manager, employee, family member, caregiver, or service role.

External monitoring for Home Assistant host, site internet, and remote-access outages.

Customer-adjustable Optional event preferences through an approved settings interface.

Formal chime workflow: both physical chimes ring for either doorbell, with differentiated tones if supported.

# Part VIII - Promotion Candidates

## 39. WNYHS-Wide Standards to Extract

| Candidate | Future Owner Document | Reason |
| --- | --- | --- |
| Building Modes | WNYHS Building Mode Standard | Primary policy engine across notifications, locks, dashboards, lighting, HVAC, and maintenance |
| Notification Engine | WNYHS Notification Engine Standard | Reusable lifecycle and data contract |
| Owner Visibility | Notification Engine Standard | Separates customer and technical events |
| Priority Matrix | Notification Engine Standard | Controls urgency and Quiet Hours |
| Secure-Building Workflow | Lock & Access Standard / Building Mode Standard | Reusable closeout behavior |
| Recipient Routing | Notification Engine Standard | Role-based maintainability |
| Validation Gate | Deployment and Handoff Standards | Prevents untested production routing |
| Quiet Hours | Notification Engine Standard | Consistent delivery behavior |
| Customer-safe wording | Notification Engine / Claims Guardrails | Prevents alarmist or unsupported claims |
| Notification Configuration Workbook | Customer Notification Business Process | Reusable residential and commercial intake |

## 40. Broader WNYHS Operating Model Context

This specification is one component of the broader WNYHS Smart Property operating model, which will ultimately include Deployment, Building Mode, Notification Engine, Dashboard, Camera & Doorbell, Lock & Access, Lighting & Scene, Environmental Monitoring, Remote Access, Customer Handoff, and Maintenance standards. BKLF is the first end-to-end reference implementation.

# Appendix A - Notification Data Contract

Every notification definition must contain the following fields. Customer profiles supply values; the future WNYHS Notification Engine Standard will define the schema.

| Field | Required Meaning |
| --- | --- |
| Event Name | Stable customer-safe event label |
| Purpose | Why the event exists |
| Trigger | Exact condition or state change |
| Applicable Building Modes | Modes in which the event is eligible |
| Priority | Critical, High, Normal, or Low |
| Owner Visibility | Yes, No, or Optional |
| Service-Team Visibility | Yes, No, or Optional |
| Recipients | Logical routing groups or approved services |
| Quiet-Hours Behavior | Immediate or delayed |
| Cooldown | Duplicate suppression or minimum interval |
| Maximum Repeats | Maximum notifications while unresolved |
| Recovery Notification | Whether restored notice is sent |
| Message Template | Customer-safe text |
| Dashboard Destination | Optional destination view |
| Image / Media | Whether an image is attached |
| Acknowledgement | Required, optional, future, or none |
| Implementation Status | Implement now, future, optional, reject |
| Notes | Technical limitations and dependencies |

# Appendix B - Example Contract

| Field | Value |
| --- | --- |
| Event Name | Door Left Open |
| Trigger | Exterior contact remains open more than 90 seconds |
| Building Modes | All; High significance in Closed |
| Priority | High in Closed; Normal in occupied modes |
| Owner Visibility | Yes |
| Service Visibility | Yes |
| Recipients | Mr. Lewis, Chris, Luis when Closed |
| Quiet Hours | Immediate when High |
| Cooldown | 90 seconds |
| Maximum Repeats | 5 total |
| Recovery Notification | Yes when door closes |
| Message Template | {Door Name} has remained open for 90 seconds. |
| Dashboard Destination | Security / Openings |
| Future Ack | No |

# Appendix C - Approval Record

Operator approval: __________________________    Date: __________

Lou review: _________________________________    Date: __________

Customer acceptance after live testing: _________________________    Date: __________

## Promotion Note

This REV06 profile was promoted from the operator-approved DOCX source through bounded task `HA-NOTIFY002-NOTIFICATION-GOVERNANCE-AND-BKLF-PROFILE-PROMOTION-001`. It is the BKLF customer-specific reference profile under the WNYHS Notification Engine Standard. It does not implement notifications, create notify groups, enable automations, change Home Assistant YAML, or authorize production routing before live validation and a bounded implementation task.
