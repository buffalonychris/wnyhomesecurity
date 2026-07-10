# BKLF User And Person Register

Task ID: HA-BACKUP002-BKLF-SANITIZED-SUPPORT-DATA-REFRESH-001
Source: Latest sanitized Home Assistant backup extraction
Customer-facing: No
Implementation authority: No

## Human Person Mappings

| Person name | HA username | Group/role | Active status | Admin/customer status | Device tracker mapping | Notify service mapping | Dashboard access intent | Anomalies / handoff requirements |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNY Home Security | Not inspected; auth files excluded | Operator/service mapping | Active in person registry | Administrator/customer status unresolved from excluded auth | `device_tracker.luis_cell`, `device_tracker.chris_cell` | `notify.luis_cell`, `notify.chris_cell` | Dashboard access intent unresolved from backup | Live HA/admin review required. |
| BLewis | Not inspected; auth files excluded | Customer mapping | Active in person registry | Administrator/customer status unresolved from excluded auth | `device_tracker.me_lewis_cell`, `device_tracker.sm_s931u1_helen_cell` | `notify.me_lewis_cell`, `notify.sm_s931u1_helen_cell` | Dashboard access intent unresolved from backup | Live HA/admin review required. |

## System / Service Users

Auth and auth-provider storage were intentionally excluded. System/service accounts, password hashes, provider data, and role groups are not reproduced in this repository.

## Notes

- `person.wny_home_security` combines Chris and Luis device trackers.
- `person.blewis` combines Me Lewis and Helen device trackers.
- Shared-login or permission conditions cannot be confirmed without live HA/admin review.
