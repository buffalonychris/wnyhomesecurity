# Brian K. Lewis Funeral Home Home Assistant Green Configuration Checklist

Status: Active
Customer: Brian K. Lewis Funeral Home
Scope: First-floor Home Assistant Green operator checklist

---

## Purpose

This checklist provides the step-by-step operator plan for configuring the physical Home Assistant Green for the Brian K. Lewis Funeral Home first-floor deployment.

It also establishes a reusable WNYHS commercial Home Assistant deployment checklist pattern. This is planning and handoff documentation only. It does not authorize app code changes, website route changes, customer-facing copy changes, payment changes, scheduling changes, CRM changes, dashboard implementation code, or live Home Assistant configuration file changes.

---

## 1. Deployment Context

- Customer: Brian K. Lewis Funeral Home
- Location: 2528 Bailey Ave Suite 1, Buffalo, NY 14215
- Scope: First-floor-only security, access, and building awareness
- Home Assistant hardware: Home Assistant Green
- Home Assistant version: 16.3
- Storage: 32GB built-in storage
- Network closet: Physically located in the front Conference Room
- Area standard: Exterior / Interior / Infrastructure, aligned to `commercial-area-standard.md`

Explicit exclusions:

- No lighting controls
- No thermostat or HVAC controls
- No Prepare for Funeral mode
- No second-floor coverage
- No third-party response-center service
- No public-safety agency response workflow
- No prevention guarantee language
- Existing camera systems are excluded unless separately approved

---

## 2. Initial HA Green Setup Checklist

Complete these steps before pairing field devices:

- Confirm Home Assistant Green is powered on.
- Confirm Ethernet is connected to the local network.
- Confirm the network switch/router shows link activity for the Home Assistant Green.
- Access Home Assistant locally from the LAN.
- Create the owner/admin account.
- Record the owner/admin account holder in the handoff notes.
- Confirm timezone is set to `America/New_York`.
- Confirm unit system is appropriate for the site.
- Confirm network details:
  - Current IP address
  - Network connection type
  - Local URL
  - Any reserved DHCP/static-IP plan, if used
- Confirm installed Home Assistant version is `16.3`.
- Confirm storage is visible as 32GB built-in storage.
- Confirm backups are enabled.
- Create or verify the initial base-system backup target.
- Confirm local access works before any remote-access path is configured.
- Record any setup exceptions or deferred decisions before continuing.

---

## 3. Required Areas

Create these exact areas in Home Assistant.

### Exterior

- North Wall
- South Wall
- East Wall
- West Wall

### Interior

- Viewing Room
- Conference Room
- Main Hallway
- Private Room
- West Hallway Jog
- Restroom East
- Restroom West

### Infrastructure

- Network Closet

Rule: Network Closet is physically located in the Conference Room but should remain its own operational/infrastructure area for service, dashboard organization, and owner clarity.

---

## 4. Recommended Labels

Create reusable labels for consistent filtering, service review, and dashboard preparation:

- Camera
- Door Lock
- Door Contact
- Window Contact
- Motion Sensor
- Infrastructure
- Z-Wave
- Zigbee
- Ethernet
- PoE
- Critical
- Battery Powered
- Exterior
- Interior

---

## 5. Integration Install Order

Configure integrations in this order:

1. Home Assistant core setup
2. Z-Wave JS UI for Zooz ZST39
3. Zigbee integration choice: Zigbee2MQTT preferred, or ZHA acceptable if simpler for the deployment
4. Reolink integration
5. Home Assistant mobile app
6. Backup/export tools
7. Optional HACS only after core devices are stable

Operator note: Do not install optional add-ons before the controller, radios, cameras, and owner mobile access are stable enough to back up.

---

## 6. Device Pairing Order

Pair and verify devices in this exact order:

1. Zooz ZST39 800LR Z-Wave USB stick
2. Sonoff Zigbee 3.0 USB Dongle Plus-E / ZBDongle-E
3. Reolink PoE Video Doorbell
4. Reolink dual-lens PoE camera
5. Kwikset Home Connect 620 Z-Wave smart lock
6. Door contacts
7. Window contacts
8. Motion sensors

For each device, assign the correct area, label the device, verify the main entities, and record any duplicate or disabled entities that require cleanup.

Confirmed sensor inventory before pairing:

- 14 Sonoff SenseGuard Gen 2 contact sensors confirmed on hand.
- 2 Sonoff SNZB-03P motion sensors confirmed on hand.

Contact sensor allocation before pairing:

- East Wall double door: 2 contact sensors, one per door leaf.
- South Wall door: 1 contact sensor.
- West Wall door: 1 contact sensor.
- North Wall operable windows: 5 contact sensors assigned for initial coverage.
- South Wall operable windows: 5 contact sensors assigned for initial coverage.
- East Wall operable window: deferred until additional contact sensors arrive.
- West Wall operable window: deferred until additional contact sensors arrive.

Motion sensor allocation before pairing:

- Main Hallway Motion 01: planned hallway placement.
- Viewing Room Motion 01: planned viewing-room placement.
- Purpose: cover the most vulnerable interior movement paths/areas.

Deferred and future coverage rules:

- Deferred operable-window contacts should be documented as planned/deferred coverage, not paired as active sensors.
- Building Secure status during initial deployment must account for installed sensors only.
- 2 East Wall fixed picture windows are planned for future impact/shock-type sensors.
- Fixed picture windows are not contact-sensor windows.
- No glass-break sensors in the active deployment.

---

## 7. Naming Convention

Required naming format:

```text
[Area] [Device Type] [Number/Descriptor]
```

Examples:

- South Wall Doorbell
- South Wall Lock
- South Wall Corner Camera
- South Wall Door Contact
- North Wall Window 01
- East Wall Window 02
- Viewing Room Motion 01
- Network Closet Home Assistant Green
- Network Closet Z-Wave Controller
- Network Closet Zigbee Controller

Naming rules:

- Do not use generic names like `sensor_1` or `door_contact_3`.
- Use wall-based names for building-envelope devices.
- Use room-based names for interior devices.
- Use Network Closet for infrastructure devices.
- Do not rename entities after dashboards or automations are built unless the rename is documented in the handoff notes.

---

## 8. South Entrance Workflow

The South Entrance is an owner-managed access workflow using the Reolink PoE Doorbell and Kwikset Z-Wave lock.

Required workflow:

1. Visitor presses the South Entrance doorbell.
2. Owner receives a mobile notification.
3. Owner views live camera feed.
4. Owner unlocks remotely, or owner arrives and authenticates using a mobile device.
5. System logs the access event.
6. Door re-lock timer runs after the configured interval.
7. Dashboard shows lock state, doorbell view, and recent activity.

This workflow is owner-managed. It does not create a third-party response-center service or public-safety agency response workflow.

---

## 9. Dashboard Panel Plan

Create the first dashboard structure at a planning level before building cards.

### Overview

- First-floor summary
- High-priority door/contact status
- Lock state summary
- Camera status summary
- Recent activity summary

### Exterior

- North Wall opening status
- South Wall doorbell, lock, contact, and camera status
- East Wall opening status
- West Wall opening status

### Entrances

- Exterior door contacts
- South Entrance lock state
- South Entrance doorbell view
- South Entrance recent access activity
- Re-lock timer status, if exposed by the final configuration

### Cameras

- Reolink PoE Doorbell live view
- Reolink dual-lens PoE camera live view
- Camera online/offline status
- Recent camera-related activity, if exposed by the integration

### Security

- Door contact status
- Window contact status
- Motion sensor status
- Owner-managed security state
- Battery status for battery-powered devices

### Activity

- Doorbell events
- Lock events
- Door contact events
- Window contact events
- Motion events
- Device availability events relevant to owner or service review

### Infrastructure / Administration

- Home Assistant Green status
- Z-Wave controller status
- Zigbee controller status
- Network/PoE hardware status, if visible
- Backup status
- Integration health
- Admin/service notes

---

## 10. Backup and Handoff Checklist

Create backups at these milestones:

- Create initial backup after base setup.
- Create backup after integrations are configured.
- Create backup after all devices are paired.
- Create backup after dashboard is complete.

Record these handoff artifacts:

- Entity list
- Device assignments
- Area assignments
- Label assignments
- Customer admin/mobile access setup
- Backup locations and timestamps
- Exceptions or deferred items
- Final Home Assistant configuration summary

Export or document the final Home Assistant configuration summary before customer handoff.

---

## 11. Scope Exclusions

This deployment excludes:

- Second-floor coverage
- HVAC automation
- Lighting automation
- Prepare for Funeral option
- Third-party response-center service
- Public-safety agency response workflow
- No prevention guarantee language
- Existing camera systems, unless separately approved

Any change to these exclusions requires a separate bounded task or documented approval before configuration work proceeds.
