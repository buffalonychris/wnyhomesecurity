# BKLF Package, Template, Theme, Helper, and Automation Inventory

Task ID: BKLF-HA-INVENTORY-001
Inventory version: REV01
Sources: Sanitized source markdown, `data/entities.csv`, and `data/restore_states_summary.csv`

## Packages

The sanitized source identifies these package files:

- `packages/bklf_notifications.yaml`
- `packages/bklf_security.yaml`
- `packages/security.yaml`

This task does not inspect or modify package YAML. Package names are recorded only as sanitized source facts.

## Themes

The sanitized source identifies these theme files:

- `themes/wnyhs-dark.yaml`
- `themes/wnyhs-light.yaml`

This task does not modify theme files.

## Components

The sanitized source identifies these component files:

- `components/activity-card.yaml`
- `components/bottom-navigation-shell.yaml`
- `components/camera-hero-card.yaml`
- `components/doorbell-hero-card.yaml`
- `components/lock-action-card.yaml`
- `components/more-about-panel.yaml`
- `components/security-summary-card.yaml`
- `components/status-hero-card.yaml`

## Template Entities

Template platform entities in the sanitized entity registry:

- `binary_sensor.bklf_building_secure`
- `binary_sensor.bklf_cam01_person_active`
- `binary_sensor.bklf_exterior_secure`
- `binary_sensor.bklf_interior_motion_active`
- `binary_sensor.bklf_south_entrance_active`

## Helpers

Helpers identifiable from entity domains:

- `input_boolean.bklf_building_armed`
- `input_boolean.bklf_installer_mode`
- `input_boolean.bklf_maintenance_mode`
- `input_select.bklf_building_mode`

## Automations

Automation entities in the sanitized entity registry:

- `automation.bklf_after_hours_activity_notification`
- `automation.bklf_cam01_after_hours_person_notification`
- `automation.bklf_device_offline_notification`
- `automation.bklf_low_battery_notification`
- `automation.bklf_south_entrance_active_notification`
- `automation.bklf_south_entrance_doorbell_visitor_notification`

## Scripts And Scenes

The backup source lists `scripts.yaml` and `scenes.yaml` as present safe documentation sources. The sanitized entity registry extract did not include `script.*` or `scene.*` entity rows. Treat script and scene runtime status as not established by this inventory.
