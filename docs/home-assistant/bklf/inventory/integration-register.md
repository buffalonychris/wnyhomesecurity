# BKLF Integration Register

Task ID: HA-BACKUP002-BKLF-SANITIZED-SUPPORT-DATA-REFRESH-001
Source: Latest sanitized Home Assistant backup extraction
Customer-facing: No
Implementation authority: No

| Integration | Title / entries | Role | Device count | Entity count | Criticality | Notes |
| --- | --- | --- | ---: | ---: | --- | --- |
| `reolink` | Driveway, Front door, Parking Lot | Cameras, doorbells, chimes, video/event entities | 5 | 164 | Critical | Private camera URLs and credentials excluded. |
| `zwave_js` | Z-Wave JS | Locks and Z-Wave controller | 3 | 85 | Critical | Includes both Kwikset locks and controller. |
| `zha` | blank title | Zigbee contacts, motion, lamp, coordinator | 18 | 158 | Critical | Includes SONOFF contact/motion devices and lamp. |
| `mobile_app` | Chris Cell, Luis Cell, Me Lewis Cell, SM-S931U1 Helen Cell | Companion notify/device tracker/services | 4 | 511 | Critical | Raw mobile registration details excluded. |
| `cloud` | Home Assistant Cloud | Cloud integration presence only | 0 | 3 | Support | Private cloud data excluded. |
| `hacs` | blank title | Frontend/custom UI resources | 9 | 18 | Support | Repositories summarized elsewhere. |
| `hassio` | Supervisor | Supervisor/add-on management | 9 | 49 | Critical | Add-on internals excluded. |
| `homeassistant_green` | Home Assistant Green | HA Green platform evidence | 0 | 0 | Critical | Platform presence confirmed. |
| `backup` | Backup | Backup service evidence | 1 | 5 | Critical | Raw backup not committed. |
| `matter` | Matter | Matter server integration presence | 0 | 0 | Support | Presence only. |
| `cast` | Google Cast | Discovered media devices | 4 | 4 | Low/support | Not dashboard scope. |
| Other confirmed entries | Analytics, Google Translate TTS, Met, Radio Browser, Shopping List, Sun, ignored discovery entries | Standard or discovered HA integrations | varies | varies | Low/support | Extracted facts only; not activation instructions. |

## Notes

- Config entry IDs and secret-bearing connection material are excluded.
- Integrations with source `ignore` are extracted facts only and are not activation instructions.
