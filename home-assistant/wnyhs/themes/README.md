# WNYHS Home Assistant Themes

Theme foundation version: `v0.1.0`

## Purpose

This folder contains the reusable WNY Home Security Customer Control Center theme foundation for Home Assistant.

The themes translate governed dashboard visual roles into Home Assistant theme variables as closely as Home Assistant and HACS custom cards allow. `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` is the canonical visual/component authority. Values and variable names in this folder are implementation mechanics only; they do not independently define customer-facing color, action, status, surface, or accessibility semantics.

This is theme foundation only. It does not implement dashboard screens, Lovelace cards, navigation YAML, helpers, automations, live Home Assistant changes, or customer-specific dashboard files.

## Files

- `wnyhs-dark.yaml` - `WNYHS Dark`
- `wnyhs-light.yaml` - `WNYHS Light`

## Install Guidance

For a future live Home Assistant install, copy these files into the Home Assistant themes folder:

```text
/config/themes/wnyhs-dark.yaml
/config/themes/wnyhs-light.yaml
```

If themes are not already enabled, ensure the Home Assistant configuration includes:

```yaml
frontend:
  themes: !include_dir_merge_named themes
```

After copying the files, reload themes from Home Assistant developer tools or restart Home Assistant, then choose `WNYHS Dark` or `WNYHS Light` from the user profile theme selector.

## Mockup Relationship

These themes are intended to support governed WNYHS Customer Control Center implementations by providing platform variables for:

- the DESIGN001 identity and interaction roles, including gold identity and blue customer actions
- DESIGN001 light and dark surface roles
- the five exclusive DESIGN001 status-value roles, used only for actual status values
- rounded card feel with subtle borders and shadows where supported
- mobile Companion App friendly contrast and touch-surface readiness
- dark/light parity with the same semantic role mapping

Any legacy variable whose name suggests burgundy, gold, lock, unlock, emergency, or another product meaning must be mapped to the current DESIGN001 role before use. A legacy variable name is not authority to restore superseded semantics, create a second action family, or use status color for labels, prose, navigation, or decoration.

Exact pixel matching requires later bounded dashboard/card work. Home Assistant themes can provide global variables, but individual Mushroom, Button Card, Bubble Card, Card Mod, Layout Card, Swipe Card, Browser Mod, and Auto-Entities configuration will still be needed in future tasks.

## Future Bounded Tasks

- `WNYHS-UI-COMPONENT-LIBRARY-001`
- `WNYHS-NAV-SHELL-001`
- `BKLF-DASHBOARD-STYLING-001`

Those tasks should consume these theme variables instead of hardcoding one-off colors in dashboard YAML.
