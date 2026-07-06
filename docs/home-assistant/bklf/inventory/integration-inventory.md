# BKLF Integration Inventory

Task ID: BKLF-HA-INVENTORY-001
Inventory version: REV01
CSV source: `data/integrations.csv`

## Integration Summary

The sanitized integration extract contains 26 config entries. Entry IDs are redacted in the source CSV and remain redacted in this repository.

| Domain | Title | Source | Version |
| --- | --- | --- | --- |
| `analytics` | Analytics | system | 1 |
| `androidtv_remote` | Living Room TV 4 | ignore | 1 |
| `androidtv_remote` | SWTV-23AE-4KR3 | ignore | 1 |
| `backup` | Backup | system | 1 |
| `cast` | Google Cast | zeroconf | 1 |
| `cloud` | Home Assistant Cloud | system | 1 |
| `go2rtc` | go2rtc | system | 1 |
| `google_translate` | Google Translate text-to-speech | onboarding | 1 |
| `hacs` | blank | user | 1 |
| `hassio` | Supervisor | system | 1 |
| `homeassistant_green` | Home Assistant Green | system | 1 |
| `ipp` | EPSON ET-4850 Series | ignore | 1 |
| `matter` | Matter | zeroconf | 1 |
| `met` | Home | onboarding | 1 |
| `mobile_app` | Chris Cell | registration | 1 |
| `mobile_app` | Luis Cell | registration | 1 |
| `mobile_app` | Me Lewis Cell | registration | 1 |
| `radio_browser` | Radio Browser | onboarding | 1 |
| `reolink` | Driveway | dhcp | 1 |
| `reolink` | Parking Lot | dhcp | 1 |
| `shopping_list` | Shopping list | onboarding | 1 |
| `sun` | Sun | import | 1 |
| `upnp` | BE65Pro | ignore | 1 |
| `webostv` | LG webOS TV QNED85AUA | ignore | 1 |
| `zha` | blank | usb | 5 |
| `zwave_js` | Z-Wave JS | user | 1 |

## Notes

- Home Assistant Cloud appears as an integration entry, but credentials and private URLs are excluded.
- Mobile app entries appear as registered devices; this document records titles only as present in the sanitized CSV.
- Integrations marked with source `ignore` are recorded as extracted facts only and are not activation instructions.
- This documentation does not install, remove, configure, or change integrations.
