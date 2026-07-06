# BKLF Home Assistant System Inventory

Task ID: BKLF-HA-INVENTORY-001
Inventory version: REV01
Source: Sanitized BKLF Home Assistant inventory source REV01 and companion CSV extracts

## Deployment Context

| Field | Value |
| --- | --- |
| Customer system | BK Lewis Funeral Home |
| Hardware platform | Home Assistant Green |
| Backup name | Automatic backup 2026.6.4 |
| Backup timestamp | 2026-07-05T20:51:17.926338+00:00 |
| Home Assistant Core | 2026.6.4 |
| Home Assistant Supervisor | 2026.6.2 |
| Home Assistant OS | 16.3 |
| Home Assistant Frontend | 20260527.7 |
| Remote access note | Nabu Casa URL was used during operator work; the URL is not included and must not be treated as a repository credential. |

## Safe Documentation Sources Present In Backup

The sanitized source identifies these files as present and safe for documentation reference:

- `configuration.yaml`
- `automations.yaml`
- `scripts.yaml`
- `scenes.yaml`
- `dashboards/bklf-main-dashboard.yaml`
- `themes/wnyhs-dark.yaml`
- `themes/wnyhs-light.yaml`
- `packages/bklf_notifications.yaml`
- `packages/bklf_security.yaml`
- `packages/security.yaml`

Component folder files present in the source:

- `components/activity-card.yaml`
- `components/bottom-navigation-shell.yaml`
- `components/camera-hero-card.yaml`
- `components/doorbell-hero-card.yaml`
- `components/lock-action-card.yaml`
- `components/more-about-panel.yaml`
- `components/security-summary-card.yaml`
- `components/status-hero-card.yaml`

## Installed Add-ons In Backup

- `core_matter_server.tar.gz`
- `core_zwave_js.tar.gz`
- `core_configurator.tar.gz`
- `core_samba.tar.gz`
- `core_ssh.tar.gz`

## Inventory Counts

| Inventory source | Count |
| --- | ---: |
| Entity registry entries | 790 |
| Device registry entries | 51 |
| Area registry entries noted in source | 12 |
| Restore-state entries captured | 141 |
| Dashboard-referenced entities | 17 |
| Installed HACS repositories | 9 |
| Integration config entries | 26 |

## Source CSV Artifacts

The CSV files under `data/` are the durable sanitized inventory artifacts for this folder. They should be used as the row-level source of truth for future inventory review.
