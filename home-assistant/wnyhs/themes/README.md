# WNYHS Home Assistant Themes

Theme foundation version: `v0.1.0`

## Purpose

This folder contains the reusable WNY Home Security Customer Control Center theme foundation for Home Assistant.

The themes translate the approved dashboard mockups into Home Assistant theme variables as closely as Home Assistant and HACS custom cards allow. They define dark and light presentation values for the WNYHS product feel: gold identity accents, burgundy primary actions, black/charcoal or ivory surfaces, rounded cards, subtle borders, readable text, and semantic status colors.

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

These themes are intended to support the approved WNYHS Customer Control Center mockups by providing:

- antique gold identity and active navigation accents
- burgundy primary action surfaces
- near-black, charcoal, and warm ivory base surfaces
- green success, amber warning, and red critical status roles
- rounded card feel with subtle borders and shadows where supported
- mobile Companion App friendly contrast and touch-surface readiness
- dark/light parity with the same semantic role mapping

Exact pixel matching requires later bounded dashboard/card work. Home Assistant themes can provide global variables, but individual Mushroom, Button Card, Bubble Card, Card Mod, Layout Card, Swipe Card, Browser Mod, and Auto-Entities configuration will still be needed in future tasks.

## Future Bounded Tasks

- `WNYHS-UI-COMPONENT-LIBRARY-001`
- `WNYHS-NAV-SHELL-001`
- `BKLF-DASHBOARD-STYLING-001`

Those tasks should consume these theme variables instead of hardcoding one-off colors in dashboard YAML.
