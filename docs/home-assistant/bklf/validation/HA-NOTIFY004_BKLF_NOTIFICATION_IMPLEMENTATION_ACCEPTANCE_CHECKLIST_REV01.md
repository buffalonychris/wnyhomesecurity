# HA-NOTIFY004 BKLF Notification Implementation Acceptance Checklist REV01

Task ID: HA-NOTIFY004-BKLF-NOTIFICATION-IMPLEMENTATION-001

Status: source-controlled acceptance checklist for post-merge operator testing.

Codex did not change the live BKLF Home Assistant Green. The operator performs these tests only after the PR is merged, local `main` is synchronized, files are backed up, copied, and Home Assistant configuration check passes.

## Evidence Rules

For each test, record the test ID, timestamp with timezone, starting state, action taken, expected result, actual result, recipients, and pass/fail status. Do not record secrets, raw mobile app identifiers, lock codes, camera credentials, private URLs, or push tokens.

## Recipient Matrix

| Test ID | Event path | Expected recipients | Excluded recipients | Result |
| --- | --- | --- | --- | --- |
| R-01 | Owner-only doorbell press | Mr. Lewis only | Helen, Anthony, Chris, Luis |  |
| R-02 | After-hours security route | Mr. Lewis, Chris, Luis | Helen, Anthony |  |
| R-03 | Service-team route | Chris, Luis | Mr. Lewis unless separately noted, Helen, Anthony |  |
| R-04 | Implementation test route | Chris only unless controlled acceptance test adds another approved recipient | Helen, Anthony |  |

## Building Mode Tests

| Test ID | Mode / helper | Action | Expected result | Result |
| --- | --- | --- | --- | --- |
| BM-01 | `Open` | Trigger safe motion/contact test if approved. | Occupancy/security noise is suppressed. |  |
| BM-02 | `Service` | Trigger safe motion/contact test if approved. | Occupancy/security noise is suppressed. |  |
| BM-03 | `Cleaning` | Trigger safe motion/contact test if approved. | Occupancy/security noise is suppressed. |  |
| BM-04 | `Maintenance` | Simulate safe service event if approved. | Customer-facing operational noise is suppressed; service-relevant routes remain limited. |  |
| BM-05 | `Closed` | Run safe secured-building and activity tests. | Secured-building events are eligible. |  |
| BM-06 | `After Hours` | Run safe secured-building and activity tests. | Secured-building events are eligible. |  |
| BM-07 | `input_boolean.bklf_installer_mode = on` | Fire `bklf_notification_test`. | Customer-facing notifications are suppressed; Chris receives test route only. |  |

## Quiet Hours Tests

Approved Quiet Hours are 9:00 PM through 8:00 AM local Home Assistant time.

| Test ID | Priority | Event | Expected result | Result |
| --- | --- | --- | --- | --- |
| QH-01 | High | Doorbell press during Quiet Hours | Immediate owner push. |  |
| QH-02 | Critical | Lock jam or secure failure during Quiet Hours | Immediate Mr. Lewis, Chris, Luis push. |  |
| QH-03 | Normal | Parking Lot camera offline during Quiet Hours | Delays until after 8:00 AM and rechecks condition before sending. |  |
| QH-04 | Normal | South Entrance Lock battery low during Quiet Hours | Delays until after 8:00 AM and rechecks condition before sending. |  |
| QH-05 | Normal resolved before 8:00 AM | Restore condition before delay ends. | No stale alert is sent. |  |

## Event Acceptance Tests

| Test ID | Event | Safe test method | Expected result | Result |
| --- | --- | --- | --- | --- |
| DB-01 | South Entrance Doorbell press | Press once during approved window. | Mr. Lewis receives `Visitor at South Entrance. Tap to view.` and destination opens `/bklf-main/doorbell`; duplicate press within 5 seconds is suppressed. |  |
| DB-02 | Bailey Double Doors Doorbell press | Press once during approved window. | Mr. Lewis receives `Visitor at Bailey Double Doors. Tap to view.` and destination opens `/bklf-main/doorbell`; duplicate press within 5 seconds is suppressed. |  |
| CAM-01 | Parking Lot camera offline | Use a safe Developer Tools simulation or approved outage. | After 180 seconds, Chris and Luis receive offline alert; if restored after alert, recovery sends once. |  |
| DO-01 | South Entrance Doorbell offline | Use a safe Developer Tools simulation or approved outage. | After 180 seconds, Mr. Lewis, Chris, and Luis receive offline alert; recovery sends once after restore. |  |
| DO-02 | Bailey Double Doors Doorbell offline | Use a safe Developer Tools simulation or approved outage. | After 180 seconds, Mr. Lewis, Chris, and Luis receive offline alert; recovery sends once after restore. |  |
| LK-01 | South Entrance Lock jam | Use safe entity simulation if physical jam is not appropriate. | Single Critical alert while active; recovery sends once when cleared. |  |
| LK-02 | Bailey Double Doors Lock jam | Use safe entity simulation if physical jam is not appropriate. | Single Critical alert while active; recovery sends once when cleared. |  |
| BAT-01 | South Entrance Lock battery low | Use safe state simulation. | Normal owner alert at or below 15 percent or replace flag; no rapid repeats; recovery sends after all low-battery signals clear. |  |
| SEC-01 | South Entrance secure workflow | Set secured mode with contact closed and lock unlocked. | Up to five lock attempts, 15 seconds apart; final failure alerts only if lock remains unsecured. |  |
| SEC-02 | South Entrance open-door guard | Set secured mode with contact open. | No lock command is issued for South Entrance while contact is open. |  |
| SEC-03 | Bailey secure workflow | Set secured mode with candidate contacts closed and lock unlocked. | Up to five lock attempts, 15 seconds apart; final failure alerts only if lock remains unsecured. |  |
| SEC-04 | Bailey open-door guard | Set secured mode with either candidate contact open. | No lock command is issued for Bailey while candidate contact is open. |  |
| DLO-01 | Door left open while secured | Hold one approved contact open. | First alert after 90 seconds, then every 90 seconds, maximum five total; sequence stops after close. |  |
| DLO-02 | Door closed recovery | Close the contact after alert. | Closed recovery sends once and repeat sequence stops. |  |
| EXT-01 | Exterior opening while secured | Open one approved contact while secured. | One High alert, with two-minute bounce cooldown. |  |
| MOT-01 | Interior motion while secured | Trigger M01 or M02 while secured. | One High alert, five-minute cooldown, no unresolved repeat. |  |
| PK-01 | Parking Lot linger | Use linger-area person entity for more than 5 minutes if safe. | High alert to Mr. Lewis, Chris, and Luis; 15-minute cooldown; snapshot attempt does not block push. |  |
| ZW-01 | Z-Wave controller unavailable | Use safe simulation or approved add-on stop/start. | Chris and Luis receive outage after 180 seconds; restored alert sends when running. |  |
| TEST-01 | Manual test event | Fire `bklf_notification_test` while Installer Mode is on. | Chris receives one WNYHS notification test. |  |

## Deferred Items To Confirm

| Deferred item | Acceptance note |
| --- | --- |
| Bailey lock battery low | Deferred until exact battery/replace-battery entities are confirmed in live HA and recorded. |
| ZHA controller outage | Deferred until a reliable controller status signal is confirmed. |
| Generic Reolink integration failure | Covered only by confirmed camera/doorbell availability; generic integration failure remains deferred. |
| Backup failure or stale backup | Deferred because no reliable current signal is confirmed. |
| Generic automation failure | Deferred because no reliable current signal is confirmed. |
| Occupied-mode door-left-open | Deferred to avoid routine operational noise until customer preference is separately approved. |

## Final Acceptance

| Signoff item | Result |
| --- | --- |
| Only Mr. Lewis, Chris, and Luis receive production notifications. |  |
| Helen remains excluded. |  |
| Anthony remains excluded. |  |
| Quiet Hours behavior matches 9:00 PM through 8:00 AM. |  |
| Critical and High events deliver immediately. |  |
| Normal events delay and recheck before delivery. |  |
| Repeats stop and reset after resolution. |  |
| Customer-facing wording remains calm and entity IDs are not shown. |  |
| Acceptance evidence stored in the BKLF deployment record. |  |
