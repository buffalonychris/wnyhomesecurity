# WNYHS Home Assistant Themes

Theme foundation version: `v0.2.0`

## Authority and Purpose

This folder contains the reusable WNY Home Security customer-dashboard theme foundation. `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` is the canonical visual and component authority. These YAML files only translate its governed roles into Home Assistant-compatible variables; they do not independently define customer semantics.

The reusable theme names are exactly:

- `WNYHS Light`
- `WNYHS Dark`

Auto is not a third theme file. It remains platform/profile behavior that selects the supported appearance.

## Semantic Token Mapping

Dashboard YAML should consume these theme variables with CSS references such as `var(--action-blue)` and must not hardcode one-off colors.

| Governed role | Home Assistant theme variable | Canonical value |
| --- | --- | --- |
| Gold identity/accent | `--wnyhs-gold` | `#D4AF37` |
| Customer action | `--action-blue` | `#0A84FF` |
| Customer action hover | `--action-blue-hover` | `#0876E4` |
| Customer action selected | `--action-blue-selected` | `#075EBA` |
| Customer action disabled | `--action-blue-disabled` | `#64748B` |
| Normal | `--status-normal` | `#22C55E` |
| Active | `--status-active` | `#0A84FF` |
| Attention | `--status-attention` | `#F5A524` |
| Alert | `--status-alert` | `#EF4444` |
| Unavailable | `--status-unavailable` | `#94A3B8` |

Gold is identity and accent. It is not action authority. Primary executable customer interaction maps to action blue through `primary-color`, `mdc-theme-primary`, and the compatible button-card action variable.

Both themes expose the same semantic keys for page, shell, tile, and recessed surfaces; primary and muted text; border/divider; focus; header-icon background; card radius; and shadow. Their appearance-specific values come directly from DESIGN001 REV02. Status meaning and action meaning remain identical in Light and Dark. Dashboard content must also communicate state with text or iconography so meaning never depends on color alone.

## Compatibility Aliases

Home Assistant requires platform-oriented names. These are subordinate implementation aliases, not a second customer status model:

- `success-color` maps to `--status-normal`.
- `info-color` maps to `--status-active`.
- `warning-color` maps to `--status-attention`.
- `error-color` maps to `--status-alert`.
- Mushroom `info`, `success`, `warning`, and `danger` variables map to Active, Normal, Attention, and Alert respectively.

Existing reusable WNYHS components still consume several older variable names. They are retained only to avoid breaking those components and are remapped as follows:

- `--wnyhs-burgundy` and primary-action aliases map to `--action-blue`; the legacy name does not restore burgundy action behavior.
- `--wnyhs-lock-color` maps to `--status-normal`.
- `--wnyhs-unlock-color` maps to `--status-attention`.
- `--wnyhs-emergency-*` aliases map to the Alert role and current theme text.
- live-badge and navigation aliases map to Active/action or neutral text roles as declared in the YAML.

Unused burgundy variants and the old success/warning/critical palette declarations were removed from the reusable universal themes. Canonical customer status names are Normal, Active, Attention, Alert, and Unavailable.

## BK Lewis and Customer-Specific Palettes

BK Lewis/BKLF theme files preserve historical site-specific burgundy/gold styling and remain separate lineage. A future bounded task may implement an optional customer/site palette as an overlay, but an overlay may not redefine the universal semantic roles: blue remains executable action, gold remains identity/accent, and the five status roles retain their governed meanings. This task does not redesign or deploy BKLF themes.

## Install Guidance

For a future, separately authorized Home Assistant installation, copy these files to:

```text
/config/themes/wnyhs-dark.yaml
/config/themes/wnyhs-light.yaml
```

If themes are not already enabled, the installation configuration uses:

```yaml
frontend:
  themes: !include_dir_merge_named themes
```

After installation, reload themes or restart the platform, then choose `WNYHS Dark` or `WNYHS Light` from the user profile theme selector. Those runtime actions are not part of this repository task.

Individual Mushroom, Button Card, Bubble Card, Card Mod, Layout Card, Swipe Card, Browser Mod, and Auto-Entities configurations may consume these variables. Any dashboard/card refinement requires its own bounded task and must preserve the canonical semantics.
