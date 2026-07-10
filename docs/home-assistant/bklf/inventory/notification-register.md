# BKLF Notification Register

Task ID: HA-BACKUP002-BKLF-SANITIZED-SUPPORT-DATA-REFRESH-001
Source: Latest sanitized Home Assistant backup extraction
Customer-facing: No
Implementation authority: No

| Notify service | Companion app device | Linked device tracker | Linked person | Role / intended routing | Notify group | Automation linkage | Live-test status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `notify.chris_cell` | Chris Cell | `device_tracker.chris_cell` | `person.wny_home_security` | Companion service confirmed; routing policy not inferred | No notify group confirmed | Package automations use placeholder target, not this explicit service yet | Requires live push test |
| `notify.luis_cell` | Luis Cell | `device_tracker.luis_cell` | `person.wny_home_security` | Companion service confirmed; routing policy not inferred | No notify group confirmed | Package automations use placeholder target, not this explicit service yet | Requires live push test |
| `notify.me_lewis_cell` | Me Lewis Cell | `device_tracker.me_lewis_cell` | `person.blewis` | Companion service confirmed; routing policy not inferred | No notify group confirmed | Package automations use placeholder target, not this explicit service yet | Requires live push test |
| `notify.sm_s931u1_helen_cell` | SM-S931U1 Helen Cell | `device_tracker.sm_s931u1_helen_cell` | `person.blewis` | Companion service confirmed; routing policy not inferred | No notify group confirmed | Package automations use placeholder target, not this explicit service yet | Requires live push test |

## Notification Scaffold Facts

- Persistent notification scaffolds are present in disabled package automations.
- Quiet-hours helpers are not separately confirmed; building mode and installer/maintenance booleans are present as guard helpers.
- Escalation helpers or notify groups are not confirmed in the backup.
- Anthony is not recorded as having a confirmed Companion notify service or device tracker in this backup.

## Exclusions

Mobile push registration material, raw mobile identifiers, private Companion metadata, and token-bearing mobile payloads are excluded.
