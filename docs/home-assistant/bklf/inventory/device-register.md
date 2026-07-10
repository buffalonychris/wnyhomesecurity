# BKLF Device Register

Task ID: HA-BACKUP002-BKLF-SANITIZED-SUPPORT-DATA-REFRESH-001
Source: Latest sanitized Home Assistant backup extraction
Customer-facing: No
Implementation authority: No

## Critical And Support-Relevant Devices

| Name | Manufacturer | Model | Integration | Area | Entity count | Primary entities / support notes |
| --- | --- | --- | --- | --- | ---: | --- |
| South Entrance Doorbell | Reolink | Reolink Video Doorbell PoE | Reolink | South Wall | 50 | South Entrance camera, visitor/person/motion, chime/speak/record controls. |
| Bailey Double Door | Reolink | Reolink Video Doorbell PoE | Reolink | East Wall | 50 | Bailey camera, visitor/person/motion/vehicle/pet, siren, record, push switch, volume controls. |
| CAM01 Southwest corner Parking Lot | Reolink | Reolink Duo 3 PoE | Reolink | South Wall | 48 | Parking Lot camera, motion/person/vehicle/animal, floodlight, siren, recording controls. |
| Home Connect 620 Connected Smart Lock | Kwikset | HC620 | Z-Wave JS | South Wall | 33 | South Entrance lock, battery, jam, tamper, replace-battery, node status. |
| Bailey Double Doors | Kwikset | HC620 | Z-Wave JS | East Wall | 33 | Bailey Double Doors lock, battery, jam, tamper, replace-battery, node status. |
| South Entrance Lamp | Third Reality, Inc | 3RSP02028BZ | ZHA | Main Hallway | 16 | Lamp switch plus power/voltage/current/energy diagnostics. |
| C01 South Entrance Door | SONOFF | SNZB-04PR2 | ZHA | South Wall | 6 | South Entrance contact and battery diagnostics. |
| C05-C09 North Wall Windows | SONOFF | SNZB-04PR2 | ZHA | North Wall | 30 | North Wall window contact set and battery diagnostics. |
| C10-C14 South Wall Windows | SONOFF | SNZB-04PR2 | ZHA | South Wall | 30 | South Wall window contact set and battery diagnostics. |
| M01 Main Hallway Motion | eWeLink | SNZB-03P | ZHA | Main Hallway | 7 | Motion and occupancy plus battery diagnostics. |
| M02 Viewing Room Motion | eWeLink | SNZB-03P | ZHA | Viewing Room | 7 | Motion and occupancy plus battery diagnostics. |
| Network Closet Zigbee Coordinator | SONOFF | ZBDongle-E | ZHA | Network Closet | 44 | Zigbee controller/support diagnostics. |
| 800 Series Long Range USB Controller | Zooz | ZST39 LR | Z-Wave JS | Network Closet | 19 | Z-Wave controller/support diagnostics. |
| Chris Cell | motorola | moto g play - 2024 | Mobile App | Unassigned | 127 | Companion device, notify service, device tracker. |
| Luis Cell | samsung | SM-F966U | Mobile App | Unassigned | 128 | Companion device, notify service, device tracker. |
| Me Lewis Cell | samsung | SM-S938U | Mobile App | Unassigned | 128 | Companion device, notify service, device tracker. |
| SM-S931U1 Helen Cell | samsung | SM-S931U1 | Mobile App | Unassigned | 128 | Companion device, notify service, device tracker. |

## Support Notes

- Reolink covers South Entrance Doorbell, Bailey Double Door Doorbell, Parking Lot camera, and chime devices.
- Z-Wave JS covers the South Entrance lock and Bailey Double Doors lock plus controller diagnostics.
- ZHA covers contact sensors, motion sensors, the South Entrance Lamp, and Zigbee coordinator.
- Mobile App covers Chris Cell, Luis Cell, Me Lewis Cell, and SM-S931U1 Helen Cell.
- Credentials, serials, private identifiers, pairing codes, and mobile push registration material are excluded.
