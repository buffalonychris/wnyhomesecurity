# HA-NOTIFY004 BKLF HA Green Deployment Instructions REV01

Task ID: HA-NOTIFY004-BKLF-NOTIFICATION-IMPLEMENTATION-001

Status: post-merge operator deployment instructions.

Do not copy these files to BKLF Home Assistant Green until the PR is merged, local `main` is synchronized, and the operator has reviewed the final diff.

## Files To Deploy

| Local repository source | HA Green destination | Operation |
| --- | --- | --- |
| `C:\Dev\wnyhomesecurity\home-assistant\bklf\packages\bklf_notifications.yaml` | `/config/packages/bklf_notifications.yaml` | Replace after backup. |

No other HA Green files are required for this implementation. `configuration.yaml` already includes `packages: !include_dir_named packages`.

## Required Backup

Before copying:

1. In Home Assistant, create a full backup.
2. Download or otherwise preserve a copy according to the site support process.
3. Copy the current `/config/packages/bklf_notifications.yaml` to a dated backup name, for example `/config/packages/bklf_notifications.yaml.pre-HA-NOTIFY004-YYYYMMDD`.
4. Do not alter secrets, camera credentials, lock codes, mobile push tokens, auth files, raw backups, or unrelated YAML.

## Copy Steps

1. Confirm local repo is on merged `main`.
2. Confirm `C:\Dev\wnyhomesecurity\home-assistant\bklf\packages\bklf_notifications.yaml` is the merged version.
3. Copy that file to `/config/packages/bklf_notifications.yaml` on BKLF Home Assistant Green.
4. Do not copy validation docs to Home Assistant.
5. Do not modify `configuration.yaml` unless a later review proves the package include is missing.

## Configuration Check

In Home Assistant:

1. Go to Settings -> System -> Repairs -> three-dot menu -> Check configuration, or use the available local configuration-check method.
2. Confirm the package include remains valid: `homeassistant: packages: !include_dir_named packages`.
3. Confirm no YAML or integration setup error is reported for `bklf_notifications.yaml`.
4. If the check fails, do not reload or restart. Restore the backup file and recheck.

## Reload Or Restart

Preferred order:

1. Run configuration check.
2. If available, reload helpers/scripts/automations from Developer Tools -> YAML.
3. If any package-defined helper or script does not appear after reload, perform a controlled Home Assistant restart.
4. After restart, confirm Home Assistant returns normally before any event testing.

Do not restart during funeral-home operations unless the operator has approved the timing.

## Rollback

If configuration check, reload, restart, or initial tests fail:

1. Restore `/config/packages/bklf_notifications.yaml` from the dated backup.
2. Run configuration check.
3. Reload YAML or restart as needed.
4. Confirm existing dashboards and helpers return.
5. Record failure details and stop acceptance testing until the repository fix is prepared.

## Initial Test Sequence

1. Confirm `input_select.bklf_building_mode` starts in the operator-approved value.
2. Confirm `input_boolean.bklf_installer_mode` is off before production-route tests.
3. Turn Installer Mode on.
4. Fire event `bklf_notification_test` with `test_name: initial route check`.
5. Confirm Chris receives exactly one test notification.
6. Turn Installer Mode off and return mode to the starting value.

## Recipient Test Sequence

1. Test South Entrance doorbell press: Mr. Lewis receives; Chris and Luis do not.
2. Test Bailey Double Doors doorbell press: Mr. Lewis receives; Chris and Luis do not.
3. Test one after-hours route in `Closed` or `After Hours`: Mr. Lewis, Chris, and Luis receive.
4. Test one service-team route: Chris and Luis receive.
5. Confirm Helen receives no production notification.
6. Confirm Anthony receives no production notification.

## Building Mode Validation

1. Test `Open`, `Service`, and `Cleaning`: secured-building motion/opening notifications remain suppressed.
2. Test `Maintenance`: customer-facing operational noise remains suppressed.
3. Test `Closed` and `After Hours`: secured-building notifications are eligible.
4. Test Installer Mode: customer-facing notifications are suppressed and implementation-test route is used.

## Quiet Hours Validation

1. During Quiet Hours or with a controlled local-time simulation, test a High event and confirm immediate delivery.
2. Test a Critical event and confirm immediate delivery.
3. Test a Normal event and confirm it waits until after 8:00 AM.
4. Resolve the Normal condition before 8:00 AM and confirm no stale alert is sent.

## Repeat And Reset Validation

1. Doorbell press: press twice within 5 seconds and confirm duplicate suppression.
2. Door left open: confirm first alert at 90 seconds, repeat every 90 seconds, maximum five total.
3. Door left open: close the contact and confirm repeats stop.
4. Interior motion: confirm five-minute cooldown.
5. Parking Lot linger: confirm 15-minute cooldown after alert.

## Lock Secure Workflow Validation

1. South Entrance: with contact closed, verify up to five lock attempts spaced 15 seconds apart.
2. South Entrance: with contact open, verify no lock command is issued.
3. Bailey Double Doors: verify candidate contacts `binary_sensor.c10_south_wall_window_1` and `binary_sensor.c11_south_wall_window_2` before relying on them.
4. Bailey Double Doors: with either candidate contact open, verify no lock command is issued.
5. Confirm final failure notification sends only once per secure-building run.
6. Confirm recovery sends after the lock becomes secured.

## Acceptance Results Record

Record results in:

`C:\Dev\wnyhomesecurity\docs\home-assistant\bklf\validation\HA-NOTIFY004_BKLF_NOTIFICATION_IMPLEMENTATION_ACCEPTANCE_CHECKLIST_REV01.md`

Store any screenshots or external evidence outside the repository unless a future bounded task authorizes a sanitized evidence import.
