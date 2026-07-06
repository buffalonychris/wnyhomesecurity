# BKLF Device Inventory

Task ID: BKLF-HA-INVENTORY-001
Inventory version: REV01
CSV source: `data/devices.csv`

## Summary

The sanitized device registry extract contains 51 device rows. It includes device IDs, names, user-assigned names, manufacturer, model, version fields, area IDs, disabled flags, and entry type where present.

## Devices By Area

| Area ID | Count |
| --- | ---: |
| blank / unassigned | 29 |
| `south_wall` | 13 |
| `north_wall` | 4 |
| `network_closet` | 2 |
| `conference_room` | 1 |
| `main_hallway` | 1 |
| `viewing_room` | 1 |

## Devices By Manufacturer

| Manufacturer | Count |
| --- | ---: |
| SONOFF | 15 |
| Home Assistant | 5 |
| Official apps | 5 |
| thomasloven | 4 |
| Reolink | 3 |
| eWeLink | 2 |
| samsung | 2 |
| blank / not listed | 1 |
| skyworth | 1 |
| piitaya | 1 |
| onn | 1 |
| Met.no | 1 |
| Unknown manufacturer | 1 |
| LGE | 1 |
| Kwikset | 1 |
| hacs.xyz | 1 |
| Google | 1 |
| custom-cards | 1 |
| Clooos | 1 |
| bramkragten | 1 |
| motorola | 1 |
| Zooz | 1 |

## Notable Named Devices

| Device name by user | Manufacturer | Model | Area |
| --- | --- | --- | --- |
| C01 South Entrance Door | SONOFF | SNZB-04PR2 | `south_wall` |
| C02 South Wall Window 2 | SONOFF | SNZB-04PR2 | `south_wall` |
| C03 South Wall Window 3 | SONOFF | SNZB-04PR2 | `south_wall` |
| C04 South Wall Window 4 | SONOFF | SNZB-04PR2 | `south_wall` |
| C05 South Wall Window 5 | SONOFF | SNZB-04PR2 | `south_wall` |
| C06 North Wall Window 2 | SONOFF | SNZB-04PR2 | `north_wall` |
| C07 North Wall Window 3 | SONOFF | SNZB-04PR2 | `north_wall` |
| C08 North Wall Window 4 | SONOFF | SNZB-04PR2 | `north_wall` |
| C09 North Wall Window 5 | SONOFF | SNZB-04PR2 | `north_wall` |
| C10 South Wall Window 1 | SONOFF | SNZB-04PR2 | `south_wall` |
| C11 South Wall Window 2 | SONOFF | SNZB-04PR2 | `south_wall` |
| C12 South Wall Window 3 | SONOFF | SNZB-04PR2 | `south_wall` |
| C13 South Wall Window 4 | SONOFF | SNZB-04PR2 | `south_wall` |
| C14 South Wall Window 5 | SONOFF | SNZB-04PR2 | `south_wall` |
| CAM01 Southwest corner Parking Lot | Reolink | Reolink Duo 3 PoE | `south_wall` |
| Home Connect 620 Connected Smart Lock | Kwikset | HC620 | `south_wall` |
| M01 Main Hallway Motion | eWeLink | SNZB-03P | `main_hallway` |
| M02 Viewing Room Motion | eWeLink | SNZB-03P | `viewing_room` |
| Network Closet Zigbee Coordinator | SONOFF | ZBDongle-E | `network_closet` |
| South Entrance Chime | Reolink | Reolink Chime | `conference_room` |
| South Entrance Doorbell | Reolink | Reolink Video Doorbell PoE | `south_wall` |

## Device Inventory Notes

- Home Assistant Green is the deployment hardware platform.
- The system includes Z-Wave, Zigbee/ZHA, Reolink camera/doorbell, mobile app, HACS/frontend, and default HA platform devices.
- Several device rows are unassigned to an area in the sanitized extract and should remain review items rather than being guessed.
- This document does not create or change device names, areas, dashboards, or live Home Assistant configuration.
