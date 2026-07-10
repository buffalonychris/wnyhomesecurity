# BKLF Camera And Doorbell Register

Task ID: HA-BACKUP002-BKLF-SANITIZED-SUPPORT-DATA-REFRESH-001
Source: Latest sanitized Home Assistant backup extraction
Customer-facing: No
Implementation authority: No

| Device | Camera entities | Visitor/person/motion/vehicle/pet sensors | Recording/siren/chime/volume/control entities | Snapshot evidence | Two-way talk evidence | Dashboard placement | Notification use |
| --- | --- | --- | --- | --- | --- | --- | --- |
| South Entrance Doorbell | `camera.south_wall_south_entrance_doorbell_fluent` | visitor, person, motion entities under `south_wall_south_entrance_doorbell` | record, push, chime/sound, speak volume, doorbell volume, siren/chime entities where exposed | Camera entity present; live snapshot test required | Speak/volume entities present; live talk test required | BKLF Main and Desktop camera/doorbell surfaces | Disabled visitor notification scaffold references South Entrance visitor entity |
| Bailey Double Doors Doorbell | `camera.east_wall_bailey_double_door_fluent` | `visitor`, `person`, `motion`, `vehicle`, `pet` entities under `east_wall_bailey_double_door` | siren, record, push, button sound, speak volume, doorbell volume | Camera entity present; live snapshot test required | Speak/volume entities present; live talk test required | BKLF Main and Desktop camera/doorbell surfaces | No live routing implemented by this task |
| Parking Lot camera | `camera.south_wall_cam01_southwest_corner_parking_lot_fluent` | `motion`, `person`, `vehicle`, `animal`, linger area person/vehicle entities | floodlight, volume, sensitivity, siren, audio/FTP/email/push/record switches | Camera entity present; live snapshot test required | Not confirmed as doorbell/talk workflow | BKLF Main and Desktop camera surfaces | Disabled after-hours person scaffold references Parking Lot person entities |

## Known Limitations

- No camera credentials, private stream URLs, RTSP material, or account credentials are stored.
- Snapshot and two-way talk support require live HA / Companion validation.
- Reolink push-notification switches are device capabilities, not WNYHS notification routing policy.
