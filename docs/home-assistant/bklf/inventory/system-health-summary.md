# BKLF System Health Summary

Task ID: HA-BACKUP002-BKLF-SANITIZED-SUPPORT-DATA-REFRESH-001
Source: Latest sanitized Home Assistant backup extraction
Customer-facing: No
Implementation authority: No

## Safe Support Data

| Field | Value |
| --- | --- |
| Home Assistant version | 2026.6.4 |
| Supervisor version | 2026.06.2 |
| Backup date | `2026-07-09T23:47:29.850048+00:00` |
| Backup database inclusion | Database present in backup but intentionally excluded from repo support data |
| HA image family | Home Assistant Green image evidence, token-bearing metadata excluded |
| Add-ons from backup metadata | Matter Server 9.0.3; Z-Wave JS 1.5.0; File editor 6.0.0; Samba share 12.7.1; Terminal & SSH 10.3.0 |
| Zigbee controller presence | Confirmed: Network Closet Zigbee Coordinator / ZHA |
| Z-Wave controller presence | Confirmed: Zooz ZST39 LR / Z-Wave JS |
| Critical unavailable restore states | C09 North Wall Window 5, C13/C14 South Wall Window 4/5, C03 East Door Right battery, and related diagnostic entities require live verification |

## Integrations Present

`analytics`, `androidtv_remote`, `backup`, `cast`, `cloud`, `google_translate`, `hacs`, `hassio`, `homeassistant_green`, `ipp`, `matter`, `met`, `mobile_app`, `radio_browser`, `reolink`, `shopping_list`, `sun`, `upnp`, `webostv`, `zha`, and `zwave_js`.

## Known Warnings / Live Verification Requirements

- Restore-state data is backup evidence, not live health.
- Database/log review was intentionally excluded.
- Companion device trackers and notify services require live tests.
- Disabled scaffold automations require operator-approved routing and live validation before enablement.
