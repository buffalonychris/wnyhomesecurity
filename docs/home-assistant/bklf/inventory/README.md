# BKLF Home Assistant Inventory

Task ID: BKLF-HA-INVENTORY-001
Status: Sanitized documentation inventory REV01
Customer-facing: No
Implementation authority: No

## Purpose

This folder contains the repo-ready sanitized Home Assistant inventory for the Brian K. Lewis Funeral Home deployment.

The inventory was promoted from the sanitized source packet `BKLF_HA_SANITIZED_INVENTORY_SOURCE_REV01.md` and the companion CSV extracts listed below. It documents the current known Home Assistant system, dashboard, entity, device, integration, HACS, package, template, and restore-state evidence without committing raw backups, secrets, credentials, databases, logs, auth material, or live runtime files.

## Inventory Documents

- `system-inventory.md` - deployment context, versions, hardware, add-ons, safe source files, and high-level counts.
- `dashboard-inventory.md` - customer dashboard views, routes, priority workflow, and dashboard-referenced entities.
- `entity-inventory.md` - entity registry summary, domains, platforms, helpers, automations, scripts, and scenes.
- `device-inventory.md` - device registry summary by area, manufacturer, model, and customer-relevant named devices.
- `integration-inventory.md` - Home Assistant config-entry integration inventory.
- `hacs-inventory.md` - installed HACS repositories and versions.
- `package-and-template-inventory.md` - packages, themes, components, helpers, templates, and automations observed in the sanitized source.
- `runtime-notes.md` - restore-state summary, composite sensor behavior, dashboard status, and validation notes.
- `security-exclusions.md` - explicit exclusions and material that must not be committed.

## Source Data

The sanitized CSV source artifacts are preserved under `data/`:

- `data/dashboard_referenced_entities.csv`
- `data/devices.csv`
- `data/entities.csv`
- `data/hacs_installed.csv`
- `data/integrations.csv`
- `data/restore_states_summary.csv`

## Scope Boundaries

This folder is documentation and sanitized inventory only. It does not change live Home Assistant, dashboard YAML, Home Assistant config YAML, packages, themes, runtime code, website files, HubSpot, Stripe, scheduling, Cloudflare, APIs, dependencies, package-lock, environment files, or secrets.

## HA-BACKUP002 Refresh Artifacts

The governed sanitized backup refresh for `HA-BACKUP002-BKLF-SANITIZED-SUPPORT-DATA-REFRESH-001` adds these support registers:

- `backup-extraction-manifest.md`
- `last-known-live-state-summary.md`
- `area-register.md`
- `device-register.md`
- `integration-register.md`
- `automation-register.md`
- `notification-register.md`
- `user-person-register.md`
- `helper-register.md`
- `camera-doorbell-register.md`
- `lock-access-register.md`
- `sensor-register.md`
- `system-health-summary.md`
- `validation-log.md`

These files are sanitized derivatives only. They do not authorize live Home Assistant changes, notification routing changes, dashboard redesign, user/permission changes, or protected-system work.
