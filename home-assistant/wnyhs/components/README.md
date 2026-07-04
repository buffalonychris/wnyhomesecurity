# WNYHS Customer Control Center Component Library

Component library version: `v0.1.0`

## Purpose

This folder contains reusable Home Assistant dashboard component examples for the WNY Home Security Customer Control Center.

These examples are source-controlled templates only. They are not a customer-specific dashboard deployment, live Home Assistant configuration, package/helper implementation, automation, notification setup, or companion app change.

The component library provides reusable building blocks for future customer dashboards, including the later bounded task `BKLF-DASHBOARD-STYLING-001`.

## Relationship To WNYHS Themes

These components are designed to consume the approved `WNYHS Dark` and `WNYHS Light` themes in `home-assistant/wnyhs/themes/`.

Use the theme variables wherever Home Assistant and installed HACS cards support them:

- `var(--wnyhs-card-background)`
- `var(--wnyhs-card-border)`
- `var(--wnyhs-gold)`
- `var(--wnyhs-burgundy)`
- `var(--wnyhs-primary-button-background)`
- `var(--wnyhs-secondary-button-background)`
- `var(--wnyhs-navigation-active)`
- `var(--wnyhs-camera-live-badge)`
- `var(--wnyhs-lock-color)`
- `var(--wnyhs-unlock-color)`
- `var(--wnyhs-emergency-background)`
- `var(--wnyhs-emergency-border)`

Do not hardcode one-off colors in future dashboard YAML when a WNYHS theme variable can express the role.

## Required HACS Stack

These examples assume the approved WNYHS Home Assistant UI stack is installed:

- Mushroom
- Button Card
- Bubble Card
- Card Mod
- Layout Card
- Swipe Card
- Browser Mod
- Auto-Entities

Not every component uses every package directly. The stack is listed here because future customer dashboards should be assembled from the same approved UI foundation.

## Component List

- `status-hero-card.yaml` - top reassurance panel with normal, attention, and critical examples.
- `doorbell-hero-card.yaml` - front-entry interaction card with live preview placeholder, Talk / Speak guidance, lock controls, and view action.
- `camera-hero-card.yaml` - reusable 16:9 live camera preview component.
- `lock-action-card.yaml` - reusable lock control component with deliberate Unlock styling.
- `security-summary-card.yaml` - customer-facing doors, lock, motion, and online summary.
- `activity-card.yaml` - short customer-meaningful activity feed.
- `bottom-navigation-shell.yaml` - five-tab mobile navigation shell.
- `more-about-panel.yaml` - More / About identity and technician-mode entry panel.

## Usage Notes

- Replace placeholder entity IDs with reviewed customer-specific entities during a future bounded dashboard task.
- Keep placeholder names generic in this library.
- Do not reference BK Lewis-specific entity IDs in these files.
- Do not deploy these files directly to a live customer system without a task-specific implementation work order.
- Validate actual card support in the Home Assistant Companion App after a future dashboard assembly task.
- Browser Mod, Bubble Card, and custom-card behavior can vary by installed version; use these examples as a controlled starting point, not a live promise.

## Customer-Facing Language Rules

Customer-facing card labels should use calm, plain language:

- Everything Looks Good
- Please Check the Building
- Check Now
- Doorbell
- Talk
- Speak
- Lock
- Unlock
- Cameras
- Doors Secure
- Lock Ready
- No Motion
- System Online
- Visitor at front entry
- Front door locked
- Parking lot activity

Avoid exposing technical vocabulary in normal customer views. Implementation-only Home Assistant keys such as `type`, `entity`, `tap_action`, and `service` may appear in the template code because Home Assistant requires them, but they should not appear as visible labels or customer-facing text.

## Technician-Mode Separation

Normal customer components should show reassurance, visitor interaction, camera previews, lock controls, simple summaries, and meaningful activity.

Technician Mode may later expose raw entities, diagnostics, unavailable states, helper/template references, configuration detail, and troubleshooting notes. That technician surface must remain separate from the normal customer control center.

## Future Task

Next dashboard assembly and customer-specific styling work requires a separate bounded task:

- `BKLF-DASHBOARD-STYLING-001`
