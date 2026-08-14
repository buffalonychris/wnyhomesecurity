# Peckham Pre-Onsite Dashboard Binding Register REV01

Status: Pre-onsite, unbound

Task: `T-HA-DASH-PECKHAM-001`

Site identity: `PK | PECKHAM`

## Purpose and boundary

This sanitized register maps the authorized Peckham pre-onsite dashboard slots without recording or guessing live Home Assistant entity IDs or unresolved physical locations. Entity IDs, final physical labels, areas, tested states, and onsite notes are filled only after physical verification onsite.

The repository dashboard files are unbound foundations. They are not deployment artifacts and do not represent live state until a later authorized binding and deployment task is completed.

## Contact binding register

There are 16 installed Zigbee contact sensors: Sensor 13 is the Main Entrance Door contact, and the remaining 15 contacts are first-floor windows with unresolved individual locations.

| Slot | Temporary label | Live entity ID | Final physical label | Area | Tested state | Onsite notes |
|---|---|---|---|---|---|---|
| Contact 01 | Main Entrance Door (Sensor 13) | Pending onsite verification | Main Entrance Door | Main Entrance | Not tested in this task | Trigger Sensor 13 and verify open/closed state before binding. |
| Contact 02 | Window Sensor 01 | Pending onsite verification | Pending onsite verification | Pending onsite verification | Not tested in this task | Trigger physically; do not infer location. |
| Contact 03 | Window Sensor 02 | Pending onsite verification | Pending onsite verification | Pending onsite verification | Not tested in this task | Trigger physically; do not infer location. |
| Contact 04 | Window Sensor 03 | Pending onsite verification | Pending onsite verification | Pending onsite verification | Not tested in this task | Trigger physically; do not infer location. |
| Contact 05 | Window Sensor 04 | Pending onsite verification | Pending onsite verification | Pending onsite verification | Not tested in this task | Trigger physically; do not infer location. |
| Contact 06 | Window Sensor 05 | Pending onsite verification | Pending onsite verification | Pending onsite verification | Not tested in this task | Trigger physically; do not infer location. |
| Contact 07 | Window Sensor 06 | Pending onsite verification | Pending onsite verification | Pending onsite verification | Not tested in this task | Trigger physically; do not infer location. |
| Contact 08 | Window Sensor 07 | Pending onsite verification | Pending onsite verification | Pending onsite verification | Not tested in this task | Trigger physically; do not infer location. |
| Contact 09 | Window Sensor 08 | Pending onsite verification | Pending onsite verification | Pending onsite verification | Not tested in this task | Trigger physically; do not infer location. |
| Contact 10 | Window Sensor 09 | Pending onsite verification | Pending onsite verification | Pending onsite verification | Not tested in this task | Trigger physically; do not infer location. |
| Contact 11 | Window Sensor 10 | Pending onsite verification | Pending onsite verification | Pending onsite verification | Not tested in this task | Trigger physically; do not infer location. |
| Contact 12 | Window Sensor 11 | Pending onsite verification | Pending onsite verification | Pending onsite verification | Not tested in this task | Trigger physically; do not infer location. |
| Contact 13 | Window Sensor 12 | Pending onsite verification | Pending onsite verification | Pending onsite verification | Not tested in this task | Trigger physically; do not infer location. |
| Contact 14 | Window Sensor 13 | Pending onsite verification | Pending onsite verification | Pending onsite verification | Not tested in this task | Trigger physically; do not infer location. |
| Contact 15 | Window Sensor 14 | Pending onsite verification | Pending onsite verification | Pending onsite verification | Not tested in this task | Trigger physically; do not infer location. |
| Contact 16 | Window Sensor 15 | Pending onsite verification | Pending onsite verification | Pending onsite verification | Not tested in this task | Trigger physically; do not infer location. |

`Contact 01` through `Contact 16` are register slots, not device numbers or entity IDs. `Window Sensor 01` through `Window Sensor 15` are temporary customer-facing labels only.

## Main Entrance planned-device register

| Device slot | Temporary label | Live entity ID | Final physical label | Area | Tested state | Onsite notes |
|---|---|---|---|---|---|---|
| Doorbell 01 | Main Entrance Doorbell | Pending onsite verification | Main Entrance Doorbell | Main Entrance | Not tested in this task | Confirm installed Reolink model and supported integration capabilities before adding video, event, talk, snapshot, recording, or light controls. |
| Lock 01 | Lever Lock — Kwikset SmartCode 912 | Pending onsite verification | Main Entrance Lever Lock | Main Entrance | Not tested in this task | Include through the authorized Z-Wave workflow; verify state and safe controls before binding. |
| Lock 02 | Deadbolt — Kwikset Home Connect 620 | Pending onsite verification | Main Entrance Deadbolt | Main Entrance | Not tested in this task | Include through the authorized Z-Wave workflow; verify state and safe controls before binding. |

## Composite Main Entrance rule

The Main Entrance assembly contains the lever lock and deadbolt. A later bound dashboard may present the overall Main Entrance as fully locked only when both verified lock states support that conclusion. If either state is unlocked, unresolved, stale, or otherwise not verified, the overall entrance must not be labeled fully locked.

This rule documents presentation only. It does not create a helper, template, automation, or entity.

## Onsite completion workflow

1. Confirm the dashboard remains unbound before field verification begins.
2. Physically trigger Sensor 13, verify its open and closed states, and record its exact live entity ID.
3. Trigger one remaining contact at a time.
4. For each verified window contact, record the exact live entity ID, final physical label, area, tested state, and any onsite note in the corresponding generic window row.
5. Do not assign a room, wall, compass direction, or exact opening until physical trigger evidence establishes it.
6. Include and verify the two locks through the separately governed onsite Z-Wave process; record exact bindings only after successful state testing.
7. Verify the installed Reolink model and integration; record only capabilities that are actually supported and tested.
8. Bind cards and composite entry presentation only through a later authorized task.
9. Validate mobile and expanded variants in the customer-used Companion App and browser targets, including Light, Dark, and Auto behavior where technically feasible.
10. Capture approved onsite acceptance evidence without secrets, private URLs, credentials, or unnecessary customer data.

## Deferred bindings

- Approved WNYHS gold logo asset path.
- All 16 exact contact entity IDs.
- Fifteen final window locations and areas.
- Reolink doorbell entity bindings and supported actions.
- Kwikset SmartCode 912 entity binding.
- Kwikset Home Connect 620 entity binding.
- Composite Main Entrance implementation.
- Live dashboard registration, assignment, validation screenshots, and deployment.
