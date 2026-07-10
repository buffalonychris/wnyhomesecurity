# BKLF Notification Register

Task ID: HA-NOTIFY004-BKLF-NOTIFICATION-IMPLEMENTATION-001
Source: HA-NOTIFY003 live service validation plus HA-NOTIFY004 source-controlled routing
Customer-facing: No
Implementation authority: No

| Notify service | Companion app device | Linked device tracker | Linked person | Role / intended routing | Notify group | Automation linkage | Live-test status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `notify.chris_cell` | Chris Cell | `device_tracker.chris_cell` | `person.wny_home_security` | Active production service-team, system-health, after-hours-security, and implementation-test recipient | No HA notify group; role scripts in package | `script.bklf_notify_service_team`, `script.bklf_notify_after_hours_security`, `script.bklf_notify_implementation_test` | Passed HA-NOTIFY003 direct push test on 2026-07-10 |
| `notify.luis_cell` | Luis Cell | `device_tracker.luis_cell` | `person.wny_home_security` | Active production service-team, system-health, and after-hours-security recipient | No HA notify group; role scripts in package | `script.bklf_notify_service_team`, `script.bklf_notify_after_hours_security` | Passed HA-NOTIFY003 direct push test on 2026-07-10 |
| `notify.me_lewis_cell` | Me Lewis Cell | `device_tracker.me_lewis_cell` | `person.blewis` | Active owner-primary and after-hours-security recipient | No HA notify group; role scripts in package | `script.bklf_notify_owner_primary`, `script.bklf_notify_after_hours_security` | Passed HA-NOTIFY003 direct push test on 2026-07-10 |
| `notify.sm_s931u1_helen_cell` | SM-S931U1 Helen Cell | `device_tracker.sm_s931u1_helen_cell` | `person.blewis` | Technically present but excluded from production routing | None | None | Prior setup validation accepted; excluded from production |

## Notification Scaffold Facts

- HA-NOTIFY004 uses scripts as logical role routes instead of HA notify groups.
- Quiet Hours are calculated directly as 9:00 PM through 8:00 AM local Home Assistant time.
- Building Mode and Installer Mode helpers are guard dependencies.
- Prior persistent-notification scaffolds were removed.
- Anthony is not recorded as having a confirmed Companion notify service or device tracker in this backup.

## Exclusions

Mobile push registration material, raw mobile identifiers, private Companion metadata, and token-bearing mobile payloads are excluded.

## Logical Routes Implemented

| Logical route | Services | Production use |
| --- | --- | --- |
| `owner_primary` | `notify.me_lewis_cell` | Doorbell, owner-visible low battery, owner recovery, after-hours-security via shared route |
| `service_team` | `notify.chris_cell`, `notify.luis_cell` | Camera offline/restored, Z-Wave outage/restored, service visibility events |
| `after_hours_security` | `notify.me_lewis_cell`, `notify.chris_cell`, `notify.luis_cell` | Lock jam, South Entrance secure failure, immediate secured exterior door/window opening, secured motion, confirmed exterior door left open in occupied or secured modes, parking-lot linger |
| `implementation_test` | `notify.chris_cell` | Controlled HA-NOTIFY004 deployment and acceptance tests |
