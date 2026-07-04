# WNYHS Customer Dashboard Mobile Wireframes 001

- Status: Draft wireframe reference
- Customer-facing: No
- Implementation authority: No; implementation requires future bounded task
- Task ID: DASHBOARD-WIREFRAME-001
- Depends on: DASHBOARD-PHILOSOPHY-001 and DASHBOARD-DESIGN-STANDARD-001

## 1. Purpose

This document defines mobile-first static wireframe references for the WNYHS Customer Control Center.

It translates the approved customer dashboard philosophy and design standard into screen-by-screen mobile UX references for planning review before any Home Assistant YAML implementation begins.

This document is not an implementation document. It does not authorize Home Assistant YAML changes, Lovelace implementation, customer dashboard file changes, theme implementation, source UI/CSS/token work, route changes, runtime/API changes, or customer-specific deployment changes.

## 2. Design Assumptions

- Primary use is the Home Assistant Companion App on a phone.
- No PC/tablet optimization is required for BK Lewis.
- The customer should not need to pinch or zoom.
- Horizontal scrolling is forbidden.
- Vertical scrolling should be minimized.
- The Home screen should communicate status in under two seconds.
- No Home Assistant branding or technical vocabulary appears in customer-facing wireframes.

## 3. Global Mobile Shell

Every customer-facing mobile screen should share one predictable shell:

- WNYHS gold emblem / product identity in the header or More/About context.
- Customer/site name, such as BK Lewis, near the top of the screen.
- Optional customer co-branding where it supports site identity without crowding controls.
- Status indicator with text support, not color-only meaning.
- Bottom navigation for the five primary destinations.
- More menu for secondary modules and settings.
- Light/dark theme parity with the same layout, order, controls, and status meaning.

Conceptual shell:

```text
+--------------------------------+
| [Gold Emblem] BK Lewis   GOOD  |
+--------------------------------+
| Screen content                  |
|                                |
|                                |
+--------------------------------+
| Home | Doorbell | Cameras |    |
| Locks | More                   |
+--------------------------------+
```

## 4. Required Navigation

Bottom navigation:

- Home
- Doorbell
- Cameras
- Locks
- More

Security and Activity are required screens, but they do not need to occupy primary bottom navigation positions. They may be reached from Home sections, More, or screen sections to keep mobile navigation within five primary tabs.

This preserves fast thumb navigation for the primary BK Lewis tasks: reassure, answer the door, view cameras, and control the front entry lock.

## 5. Required Screen Set

Required screens:

- Home
- Doorbell
- Cameras
- Locks
- Security
- Activity
- More

Optional modules should appear only when installed and customer-relevant. Empty future modules should not appear as customer features.

## 6. Home Screen Wireframe

Required order:

```text
+--------------------------------+
| [Gold Emblem] BK Lewis   GOOD  |
+--------------------------------+
| Everything Looks Good          |
| Nothing requires your          |
| attention.                     |
+--------------------------------+
| Front Entry                    |
| [ Live doorbell preview ]      |
| [ Talk ] [ Unlock / Lock ]     |
| [ View ]                       |
+--------------------------------+
| Parking Lot                    |
| [ Live camera preview ]        |
| [ View Cameras ]               |
+--------------------------------+
| Building Summary               |
| Doors Secure                   |
| Lock Ready                     |
| No Motion                      |
+--------------------------------+
| Recent Activity                |
| Visitor at front entry         |
| Front door locked              |
| Parking lot activity           |
+--------------------------------+
| Home | Doorbell | Cameras |    |
| Locks | More                   |
+--------------------------------+
```

Normal state variant:

```text
+--------------------------------+
| Everything Looks Good          |
| Nothing requires your          |
| attention.                     |
| Status: Good                   |
+--------------------------------+
```

Attention state variant:

```text
+--------------------------------+
| Please Check the Building      |
| Front entrance is unlocked.    |
| Status: Attention              |
| [ Lock Door ] [ View Details ] |
+--------------------------------+
```

Critical state variant:

```text
+--------------------------------+
| Check Now                      |
| Motion detected after hours.   |
| Status: Critical               |
| [ View Security ] [ Cameras ]  |
+--------------------------------+
```

Home rules:

- Keep the reassurance card first.
- Keep Doorbell/front entry before secondary cameras.
- Show no more than three meaningful recent events.
- Keep raw entity labels and diagnostic terms out of customer-facing content.
- Use Security and Activity links only where they support the first-screen scan.

## 7. Doorbell Screen Wireframe

```text
+--------------------------------+
| Doorbell                  GOOD |
+--------------------------------+
| [ Large live doorbell preview ]|
|                                |
+--------------------------------+
| [ Talk / Speak ]               |
| [ Unlock / Lock ]              |
| [ View Fullscreen ]            |
+--------------------------------+
| Recent Visitor Activity        |
| Doorbell pressed               |
| Person at front entry          |
| Front door locked              |
+--------------------------------+
| Home | Doorbell | Cameras |    |
| Locks | More                   |
+--------------------------------+
```

Doorbell rules:

- Use a large live doorbell preview.
- Make Talk / Speak a primary action.
- Make Unlock / Lock a primary action where supported.
- Provide View Fullscreen.
- Show recent visitor activity.
- Do not show dense diagnostics, raw entity names, signal details, helper state, or configuration language.

## 8. Cameras Screen Wireframe

```text
+--------------------------------+
| Cameras                  GOOD  |
+--------------------------------+
| Doorbell                       |
| [ Live preview ]               |
| [ View ] [ Talk ]              |
+--------------------------------+
| Parking Lot                    |
| [ Live preview ]               |
| [ View ]                       |
+--------------------------------+
| Future Installed Camera        |
| [ Live preview when installed ]|
| [ View ]                       |
+--------------------------------+
| Home | Doorbell | Cameras |    |
| Locks | More                   |
+--------------------------------+
```

Cameras rules:

- Doorbell appears first.
- Parking Lot appears second.
- Future cameras appear below only when installed.
- Do not include camera capability clutter.
- Show controls only where confirmed supported.
- Do not expose technical camera entity labels or diagnostic status.

## 9. Locks Screen Wireframe

```text
+--------------------------------+
| Locks                    GOOD  |
+--------------------------------+
| South Entrance / Front Entry   |
| Status: Locked                 |
| Door: Closed                   |
| [ Unlock ] [ Lock ]            |
+--------------------------------+
| Recent Access Activity         |
| Front door locked              |
| Front door opened              |
| Front door closed              |
+--------------------------------+
| Home | Doorbell | Cameras |    |
| Locks | More                   |
+--------------------------------+
```

Locks rules:

- Use South Entrance / front entry lock card language where appropriate for the customer.
- Show Locked/Unlocked state in plain language.
- Provide Lock / Unlock buttons.
- Show door closed/open summary.
- Do not show raw entity labels.
- Do not show battery unless attention is needed.
- Make Unlock visually deliberate and clearly labeled.

## 10. Security Screen Wireframe

```text
+--------------------------------+
| Security                 GOOD  |
+--------------------------------+
| Building Secure               |
| Doors and windows look closed. |
| No motion currently noted.     |
+--------------------------------+
| Exceptions                     |
| Nothing requires attention.    |
+--------------------------------+
| Doors / Windows                |
| All reviewed openings secure.  |
+--------------------------------+
| Motion                         |
| No Motion                      |
+--------------------------------+
```

Security rules:

- Provide a simple summary of doors, windows, and motion.
- Show exceptions prominently.
- Keep the default normal state calm.
- Hide technical details.
- Do not use raw sensor, helper, YAML, diagnostic, unavailable, unknown, or configuration language in customer-facing views.

## 11. Activity Screen Wireframe

```text
+--------------------------------+
| Activity                       |
+--------------------------------+
| Today                          |
| Visitor at front entry         |
| Front door unlocked            |
| Front door locked              |
| Parking lot activity           |
+--------------------------------+
| Earlier                        |
| Doorbell pressed               |
| Front door closed              |
+--------------------------------+
```

Activity rules:

- Show meaningful activity only.
- Include visitor, door, lock, camera, and security events when customer-relevant.
- Do not show raw state spam.
- Keep density suitable for phone use.
- Prefer short, plain-language event labels.

## 12. More Screen Wireframe

```text
+--------------------------------+
| More                           |
+--------------------------------+
| [Gold Emblem]                  |
| WNY Home Security              |
| BK Lewis                       |
+--------------------------------+
| Settings                       |
| System Health                  |
| Technician Mode                |
| Optional Installed Modules     |
| About / Powered by WNY Home    |
| Security                       |
+--------------------------------+
| Home | Doorbell | Cameras |    |
| Locks | More                   |
+--------------------------------+
```

More rules:

- Include Settings.
- Include System Health.
- Include Technician Mode entry if enabled.
- Show optional modules only when installed.
- Include About / Powered by WNY Home Security.
- Place the WNYHS gold emblem in a tasteful identity area.
- Keep technician diagnostics separated from normal customer pages.

## 13. Light Theme Reference

Light theme visual direction:

- Warm ivory background.
- White/cream cards.
- Burgundy header/accent.
- Antique gold emblem/accent.
- Charcoal text.
- Clear green/amber/red status usage with text or icon support.

The light theme must preserve the same screen order, card order, control order, status meaning, and navigation model as dark mode.

## 14. Dark Theme Reference

Dark theme visual direction:

- Charcoal/near-black background.
- Dark cards.
- Burgundy/gold accents.
- Readable ivory text.
- Same layout as light mode.
- Nighttime-friendly contrast.

The dark theme must not hide status meaning, change navigation, expose diagnostics, or make customer controls harder to reach.

## 15. BK Lewis-Specific Wireframe Notes

- Tone should be calm, respectful, and premium.
- Doorbell, two-way communication, and remote deadbolt control are primary.
- Cameras, contact sensors, motion, and history are secondary.
- No PC/tablet layout work is required for the initial BK Lewis customer dashboard.
- Dashboard should feel like a WNYHS product with BK Lewis site identity.
- The doorbell and front entry workflow should remain easier to find than secondary detail screens.

## 16. Non-Goals

This document does not authorize:

- YAML.
- Lovelace implementation.
- Entity ID mapping.
- Theme CSS/token implementation.
- Notification implementation.
- Cloudflare remote access implementation.
- Companion App setup changes.
- Home Assistant dashboard file changes.
- Customer-specific configuration changes.
- Runtime/API changes.

## 17. Implementation Gate

Future implementation requires a separate bounded task:

- BKLF-DASHBOARD-REDESIGN-001

That future task must identify target files before work begins:

- `home-assistant/bklf/dashboards/bklf-main-dashboard.yaml`
- any required package/helper files only if explicitly authorized

The implementation task must also define validation, rollback posture, customer versus technician visibility boundaries, protected-system checks, and exact Home Assistant file scope.
