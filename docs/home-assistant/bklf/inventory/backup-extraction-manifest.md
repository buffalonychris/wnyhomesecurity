# BKLF Backup Extraction Manifest

Task ID: HA-BACKUP002-BKLF-SANITIZED-SUPPORT-DATA-REFRESH-001
Customer slug: bklf
Customer name: BK Lewis Funeral Home
Status: Sanitized support-data refresh
Customer-facing: No
Implementation authority: No

## Source Evidence

| Field | Value |
| --- | --- |
| Source backup filename | `07092026wnyhs_bklewis_bailey_for_gpt.tar` |
| Backup date/time | `2026-07-09T19:47:29.850048-04:00` |
| Extraction date/time | `2026-07-09T23:14:00-04:00` |
| Operator | Christian Brzostowicz |
| Home Assistant version evidence | 2026.6.4 |
| Backup type | partial |
| Backup protected flag | false |

The requested local-inputs copy was not present locally. The matching operator-provided archive was found at the earlier attached-file location outside this repository and was handled locally for extraction only. The raw backup archive was not copied into this repository, renamed into this repository, staged, or committed.

## Files And Directories Inspected

- Backup manifest metadata.
- Home Assistant version marker.
- `core.area_registry`.
- `core.device_registry`.
- `core.entity_registry`.
- `core.config_entries`.
- `core.restore_state` summaries.
- Person mapping registry.
- Lovelace dashboard registry.
- Dashboard YAML files.
- Theme YAML files.
- Package YAML files.
- `configuration.yaml`.
- Empty/stub `automations.yaml`, `scripts.yaml`, and `scenes.yaml`.
- HACS and Supervisor metadata summaries.

## Files And Directories Intentionally Excluded

- Raw backup archive.
- Auth and auth-provider storage.
- Cloud storage and private remote-access material.
- Secret files.
- Database and WAL/SHM files.
- Logs and trace payloads.
- SSL/private-key/certificate material.
- Add-on internals not needed for support registers.
- Raw mobile registration payloads and private device identifiers.
- Camera URLs, credentials, and stream tokens.
- Lock codes, PINs, pairing codes, and SmartStart material.

## Sanitized Artifacts Created Or Updated

- `backup-extraction-manifest.md`
- `last-known-live-state-summary.md`
- `area-register.md`
- `device-register.md`
- `integration-register.md`
- `automation-register.md`
- `notification-register.md`
- `user-person-register.md`
- `helper-register.md`
- `camera-doorbell-register.md`
- `lock-access-register.md`
- `sensor-register.md`
- `system-health-summary.md`
- `validation-log.md`
- Existing BKLF dashboard/entity owner docs received HA-BACKUP002 refresh notes.

## Changed Area Summary

The latest backup confirms 12 Home Assistant areas: Network Closet, North Wall, South Wall, East Wall, West Wall, Viewing Room, Main Hallway, Conference Room, Private Room, West Hallway Jog, Restroom East, and Restroom West.

## Changed Device Summary

The latest backup confirms 56 devices. Material support changes versus the older inventory include Bailey Double Doors lock and doorbell, South Entrance Lamp, and Helen Companion device now present in the backup.

## Changed Entity Summary

The latest backup confirms 1,026 entity-registry rows. Support-relevant entities include doorbells, parking lot camera, two locks, South Entrance Lamp, Zigbee contact and motion sensors, Z-Wave lock diagnostic entities, Companion notify/device tracker entities, helper entities, and disabled notification scaffold automations.

## Changed Integration Summary

The latest backup confirms 27 config entries. Major support-relevant integrations include Reolink, Z-Wave JS, ZHA, Mobile App, Home Assistant Cloud, HACS, Supervisor, Home Assistant Green, Matter, Google Cast, and Backup.

## Changed Automation Summary

Five package automations are present in `packages/bklf_notifications.yaml`. All five are disabled scaffolds and require live validation before enablement or routing changes.

## Changed Helper Summary

Nine support-relevant helpers/template entities are confirmed: building mode, armed/maintenance/installer booleans, exterior secure, interior motion active, South Entrance active, building secure, and CAM01 person active.

## Changed Notification / User / Person Summary

Confirmed Companion app entries are Chris Cell, Luis Cell, Me Lewis Cell, and SM-S931U1 Helen Cell. Person mappings are `person.wny_home_security` with Chris/Luis trackers and `person.blewis` with Me Lewis/Helen trackers. Anthony is not confirmed as a Companion notify/device mapping in this extraction.

## Known Limitations

- Live Home Assistant was not contacted or modified.
- Auth/provider files were intentionally excluded, so user role/group details are limited to person and Companion evidence.
- Restore-state evidence is last-known from backup, not a live poll.
- Notification targets remain scaffold/service facts only; no routing policy is inferred.
- Unavailable/unknown states require live HA verification before support action.

## Validation Performed

See `validation-log.md` for detailed command results and scan outcomes.

## Secret / Raw Data Confirmation

No raw backup archive, auth file, cloud file, secret file, database, log, credential value, private URL, mobile push token, lock code, pairing code, camera credential, or sensitive Home Assistant runtime token was committed.
