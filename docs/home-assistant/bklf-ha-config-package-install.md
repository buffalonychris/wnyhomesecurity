# BKLF Home Assistant Configuration Package Install Notes

Status: Active
Customer: Brian K. Lewis Funeral Home
Scope: Operator install instructions for repo-owned Home Assistant package scaffold

---

## Purpose

These notes explain how to manually apply the repo-owned BKLF Home Assistant configuration package scaffold to the physical Home Assistant Green.

The files in `home-assistant/bklf/` are not automatically deployed. They are source-controlled reference assets for the operator to copy, import, adapt, and validate through Home Assistant-supported methods.

## Critical Warning

Entity IDs may differ from the expected names in the repo scaffold. Verify live Home Assistant entity IDs and update YAML before final production use.

Do not edit hidden `.storage` files directly.

## Source Files

| Repo file | Intended use |
|---|---|
| `home-assistant/bklf/packages/bklf_security.yaml` | Helpers and template binary sensors |
| `home-assistant/bklf/packages/bklf_notifications.yaml` | Disabled notification automation skeletons |
| `home-assistant/bklf/dashboards/bklf-main-dashboard.yaml` | Lovelace dashboard scaffold/reference |

## Install Steps

1. Create a Home Assistant backup before importing or changing YAML.
2. Confirm live entity IDs for all paired devices.
3. Compare live entity IDs against `docs/home-assistant/bklf-ha-config-package-entity-id-checklist.md`.
4. Update package and dashboard YAML if live IDs differ from expected IDs.
5. Confirm Home Assistant packages are enabled in `configuration.yaml`.

```yaml
homeassistant:
  packages: !include_dir_named packages
```

6. If packages are not enabled, add the supported package include configuration through the normal Home Assistant YAML workflow.
7. Copy package files to Home Assistant `/config/packages/`.
8. Copy the dashboard YAML to a safe import/reference location.
9. Create the dashboard in the Home Assistant UI using YAML mode or a manual-card approach if needed.
10. Restart Home Assistant or reload YAML as appropriate for the changed configuration.
11. Validate that helpers appear:
    - `input_boolean.bklf_building_armed`
    - `input_boolean.bklf_maintenance_mode`
    - `input_boolean.bklf_installer_mode`
    - `input_select.bklf_building_mode`
12. Validate that template sensors render:
    - `binary_sensor.bklf_building_secure`
    - `binary_sensor.bklf_exterior_secure`
    - `binary_sensor.bklf_interior_motion_active`
    - `binary_sensor.bklf_south_entrance_active`
13. Validate that the dashboard loads.
14. Keep notification automation skeletons disabled until final entity IDs, owner mobile notify service, and schedule/mode conditions are verified.
15. Create a Home Assistant backup after successful import and validation.

## Entity ID Verification Rules

- Use the live Home Assistant entity registry as the authority for final IDs.
- Update repo scaffold YAML if Home Assistant creates different entity IDs during pairing.
- Do not bind dashboards or automations to unverified IDs.
- Do not treat deferred operable-window contacts as active sensors.
- Do not treat future East Wall fixed picture window impact/shock placeholders as active sensors.

## Scope Boundaries

This install note does not authorize:

- Website route changes
- Website copy changes
- App code changes
- API/backend changes
- Stripe/payment changes
- Scheduling changes
- HubSpot/CRM changes
- Cloudflare config changes
- Dependency changes
- Secrets or environment-value storage
- Direct `.storage` edits

Live Home Assistant changes must be performed manually by the operator using Home Assistant-supported import and reload workflows.
