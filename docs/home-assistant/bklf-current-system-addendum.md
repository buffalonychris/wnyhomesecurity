# BKLF Current System Addendum

Status: Active customer-support documentation
Customer: Brian K. Lewis Funeral Home
Scope: Current installed/approved Home Assistant system summary

---

## 1. Purpose

This addendum summarizes the current Brian K. Lewis Funeral Home Home Assistant system for customer communication, support, and future proposal work.

It separates the current installed or approved baseline from deferred items, discovery items, and optional future capabilities. It is documentation only. It does not modify the live Home Assistant instance, website files, Stripe/payment files, HubSpot files, scheduling files, API/backend files, Cloudflare configuration, dependencies, credentials, or environment files.

## 2. Current Installed System Summary

The current system is a local-first Home Assistant Green deployment for Brian K. Lewis Funeral Home. It is built around local building awareness, owner-managed access, camera visibility, contact sensors, motion sensors, and a customer-facing Home Assistant dashboard.

Current source-controlled support materials show:

- Home Assistant Green as the controller.
- Sonoff Zigbee coordinator active through ZHA.
- Zooz ZST39 Z-Wave controller active through Z-Wave JS.
- Reolink South Entrance Doorbell.
- Reolink CAM01 Southwest Corner Parking Lot camera.
- Kwikset Home Connect 620 South Entrance lock.
- Sonoff SenseGuard Gen 2 contact sensors for active door/window coverage.
- Sonoff SNZB-03P motion sensors for Main Hallway and Viewing Room.
- Source-controlled dashboard and package scaffold for customer-facing status views.
- Disabled notification skeletons pending final mobile app notify-service confirmation.

## 3. Confirmed Live / Installed Components

Current installed or approved components:

- HA Green controller.
- Zigbee coordinator.
- Z-Wave controller.
- Reolink Doorbell for the South Entrance.
- Reolink CAM01 Southwest Corner Parking Lot camera.
- Kwikset Home Connect 620 South Entrance lock.
- Sonoff contact sensors installed/active for the current handoff map.
- Sonoff motion sensors installed/active for the current handoff map.
- Temporary Nabu Casa remote access is active or available as a temporary remote-support path pending the final Cloudflare Tunnel standard.
- Samba, File Editor, and Terminal are support utilities when installed on the HA Green for file transfer, supported YAML editing, and operator maintenance.

Support utility note: these utilities are operational aids, not customer-facing features. They should be enabled, used, and retained only as appropriate for support and handoff.

## 4. Current Active Sensor Map

The current source-controlled runbook, placement sheet, and dashboard/package YAML identify this active customer handoff map:

| Physical ID | Customer-facing name | Current status | Notes |
|---|---|---|---|
| C01 | South Entrance Door | Active | South Entrance workflow member. |
| C05 | North Wall Window 1 | Active | Included in current dashboard/status baseline. |
| C06 | North Wall Window 2 | Active | Included in current dashboard/status baseline. |
| C07 | North Wall Window 3 | Active | Included in current dashboard/status baseline. |
| C08 | North Wall Window 4 | Active | Included in current dashboard/status baseline. |
| C09 | West Service Door | Active | Active secure-status contact. |
| C10 | Front Double Door - Left | Active | Customer label differs from older exported entity slug. |
| C11 | Front Double Door - Right | Active | Customer label differs from older exported entity slug. |
| C12 | Upstairs Back Porch Door | Active | Only additional upstairs device coverage in current handoff. |
| M01 | Main Hallway Motion | Active | Motion sensor. |
| M02 | Viewing Room Motion | Active | Motion sensor. |

Source reconciliation note: earlier planning docs used a broader first-floor planning allocation and older wall/window labels. The latest runbook, onsite placement sheet, dashboard YAML, and package YAML are treated as the current system baseline for this addendum.

## 5. Deferred Sensor Map

Deferred items are intentionally held from the customer handoff baseline. They are not failed devices and should not appear as active dashboard problems.

| Deferred item | Planned future coverage | Current treatment |
|---|---|---|
| C02 | Spare / future contact placement | Deferred; not active in customer dashboard or secure-status helpers. |
| C03 | Spare / future contact placement | Deferred; not active in customer dashboard or secure-status helpers. |
| C04 | Spare / future contact placement | Deferred; not active in customer dashboard or secure-status helpers. |
| C13 | Future operable-window coverage | Deferred; not active in customer dashboard or secure-status helpers. |
| C14 | Future operable-window coverage | Deferred; not active in customer dashboard or secure-status helpers. |
| Additional operable-window contacts | Future additional contact sensors | Deferred until additional sensors are available and approved. |
| East Wall fixed picture window 1 | Future impact/shock sensor | Placeholder only; not active in current deployment. |
| East Wall fixed picture window 2 | Future impact/shock sensor | Placeholder only; not active in current deployment. |

## 6. Cameras

Current cameras:

- South Entrance Doorbell: live-view camera for owner review of visitor activity at the South Entrance. Doorbell visitor, person, and motion entities may be used where the Reolink integration exposes reliable entities.
- CAM01 Southwest Corner Parking Lot: live-view camera for parking-lot awareness. Person, vehicle, motion, animal, and linger-area entities may be used where exposed reliably by the integration.

Two-way communication should be presented as available through the Reolink app or Home Assistant only where the final device/integration path is tested and reliable.

Spotlight, floodlight, or similar camera controls must not be shown as active dashboard controls unless reliable control entities are exposed, verified, and approved for the customer dashboard.

## 7. Lock / Access Control

Current access-control baseline:

- South Entrance Kwikset Home Connect 620 lock is the active lock.
- The South Entrance workflow includes the doorbell, South Entrance door contact, South Entrance lock, and final mobile notification target once verified.
- The dashboard currently includes lock control/status through standard Home Assistant entity controls.

Future lock:

- A second Kwikset/Home Connect 620 lock is planned for the front double-door entrance.
- The future front double-door lock must not be treated as active until it is paired, named, tested, and explicitly approved in a later bounded task.
- It must not affect secure-status helpers, dashboard status, automations, or notifications before that approval.

## 8. Dashboard Status

Current dashboard functional baseline:

- Overview
- Cameras
- Doorbell
- Entrances
- Motion
- Lock
- System Ready

Current customer-facing dashboard functions:

- Building and exterior status summary.
- Active door/window contact review.
- Motion status review.
- South Entrance doorbell, door, and lock status.
- Doorbell and parking-lot camera live views.
- Recent activity/logbook cards.
- Battery and device-readiness review where supported by exposed entities.

Known remaining polish items:

- Final customer mobile user/owner account setup.
- Final mobile app notify service replacement in notification automation copies.
- Final camera capability matrix for reliable person, motion, vehicle, visitor, two-way communication, and any light-control entities.
- Final customer training and dashboard orientation.
- Final backup/export handoff process.

## 9. Remote Access

Current remote-access posture:

- Temporary Nabu Casa remote access is active or available as the temporary remote path.
- The planned WNYHS standard is Cloudflare Tunnel / Zero Trust.
- Planned hostname model: `bklewis.remote.wnyhomesecurity.com`.

Remote access remains optional and customer-approved. The local Home Assistant system remains primary. Cloudflare Tunnel implementation, customer URL handoff, account access, and phone setup require final customer approval, network verification, and operator validation.

## 10. Important Boundaries

- This is a local-first, customer-owned system.
- No staffed response-center service is included by this addendum.
- No public-safety agency response workflow is included by this addendum.
- No emergency-response workflow is included by this addendum.
- No outcome-promise language is authorized.
- Existing camera systems remain outside this deployment unless separately approved.
- Remote access is optional and customer-approved.
- Future capabilities require customer approval, hardware availability, network readiness, vendor/integration support, and final testing before they are represented as active.
