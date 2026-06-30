# Brian K. Lewis Funeral Home First-Floor Home Assistant Plan

Status: Active
Project: Brian K. Lewis Funeral Home
Location: 2528 Bailey Ave Suite 1, Buffalo, NY 14215
Scope: First-floor-only Home Assistant deployment documentation

---

## Purpose

This document records the confirmed Home Assistant deployment pattern for the first floor of Brian K. Lewis Funeral Home and applies the reusable WNYHS commercial area/dashboard standard.

This is documentation only. It does not authorize customer-facing website changes, route changes, app code changes, payment changes, scheduling changes, CRM changes, dashboard implementation code, or customer proposal changes.

---

## Deployment Summary

- Project: Brian K. Lewis Funeral Home
- Address: 2528 Bailey Ave Suite 1, Buffalo, NY 14215
- Deployment boundary: First floor only
- Home Assistant controller: Home Assistant Green
- Home Assistant version: HA 16.3
- Storage: 32GB built-in storage
- Network closet: Physically located in the Conference Room

---

## Confirmed Hardware

- Home Assistant Green
- Zooz ZST39 800LR Z-Wave USB stick
- Sonoff Zigbee 3.0 USB Dongle Plus-E / ZBDongle-E
- Reolink PoE Video Doorbell
- Reolink dual-lens PoE camera, added outside original proposal scope
- Kwikset Home Connect 620 Z-Wave Plus LR smart lock
- Contact sensors: 15 total planned
- Motion sensors: 2 planned

Contact sensor coverage:

- 3 exterior doors
- 12 operable windows

Awareness-only openings:

- 2 fixed picture windows
- No glass-break sensors are included in the active deployment

Excluded device categories:

- No lighting controls
- No thermostat or HVAC controls
- No Prepare for Funeral mode

---

## Area Plan

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

The Network Closet is the operational infrastructure area. It is physically located in the Conference Room but should remain its own dashboard section for administration, service, and owner clarity.

---

## South Wall Exterior Devices

South Wall is the primary exterior entry and camera workflow area.

- South Entrance has the Reolink PoE Doorbell
- South Entrance has the Kwikset smart lock
- South Entrance is the primary remote-entry workflow
- Reolink dual-lens PoE camera is also on the South Wall exterior
- The dual-lens camera covers the west-side approach and sidewalk
- The doorbell camera and corner camera are both South Wall exterior devices

---

## South Entrance Access Workflow

1. Visitor presses the South Entrance doorbell.
2. Owner receives a mobile notification.
3. Owner views live video.
4. Owner unlocks remotely, or arrives and authenticates using a mobile device.
5. System confirms authorized entry.
6. South Entrance unlocks.
7. Event is logged.
8. Door re-locks after the configured timer expires.

The workflow is owner-managed. It does not create a third-party response-center service or a public-safety agency response workflow.

---

## Dashboard Panels

The first-floor dashboard should document and organize the deployment using these panels:

- Overview
- Exterior
- Entrances
- Cameras
- Security
- Activity
- Infrastructure / Administration

Dashboard panel intent:

- Overview: High-level first-floor status, entry status, current alerts, and owner-priority summaries.
- Exterior: North, South, East, and West Wall devices.
- Entrances: Exterior doors, South Entrance lock status, doorbell status, and access workflow state.
- Cameras: Reolink PoE Doorbell and Reolink dual-lens PoE camera.
- Security: Contact sensors, motion sensors, and first-floor owner-managed security state.
- Activity: Doorbell events, lock events, entry events, and relevant device history.
- Infrastructure / Administration: Home Assistant Green, radios, network hardware, UPS, support hardware, and administrative status.

---

## Scope Exclusions

This deployment does not include:

- Second-floor coverage
- HVAC automation
- Lighting automation
- Prepare for Funeral option
- Glass-break sensors for the fixed picture windows
- Existing camera systems, unless separately approved
- Claims that the system prevents break-ins, theft, damage, or other events
- Third-party response-center service
- Public-safety agency response workflow

Existing camera systems remain excluded from the active deployment unless separately approved.

---

## Relationship to Commercial Standard

This project uses the reusable WNYHS commercial Home Assistant standard:

- Exterior wall areas organize building-envelope devices.
- Interior room areas organize room-specific devices and dashboards.
- Infrastructure is operationally separate even though the Network Closet is physically inside the Conference Room.

Future changes to the first-floor area model, dashboard panels, or hardware scope should be captured in a new bounded task or documented revision.
