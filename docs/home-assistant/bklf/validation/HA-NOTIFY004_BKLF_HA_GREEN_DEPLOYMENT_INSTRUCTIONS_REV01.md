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

1. Test `Open`, `Service`, and `Cleaning`: occupied-mode door-left-open notifications send after 90 seconds for approved exterior contacts; secured-building motion/opening notifications remain suppressed.
2. Test `Maintenance`: occupied-mode door-left-open notifications send unless `input_boolean.bklf_maintenance_mode` is intentionally on for approved maintenance activity.
3. Test `Closed` and `After Hours`: secured-building notifications are eligible.
4. Test Installer Mode: customer-facing notifications are suppressed and implementation-test route is used.

## Quiet Hours Validation

1. During Quiet Hours or with a controlled local-time simulation, test a High event and confirm immediate delivery.
2. Test a Critical event and confirm immediate delivery.
3. Test a Normal event and confirm it waits until after 8:00 AM.
4. Resolve the Normal condition before 8:00 AM and confirm no stale alert is sent.

## Repeat And Reset Validation

1. Doorbell press: press twice within 5 seconds and confirm duplicate suppression.
2. Door left open in occupied mode: confirm first Normal alert at 90 seconds, repeat every 90 seconds, maximum five total, and Quiet Hours delay/recheck behavior if tested.
3. Door left open in secured mode: confirm first left-open alert at 90 seconds, repeat every 90 seconds, maximum five total.
4. Door left open: close the same contact and confirm repeats stop, the per-door helper clears, and any close/recovery notification is gated by prior left-open lifecycle.
5. Ordinary open and close before 90 seconds: confirm no generic close notification sends.
6. Interior motion: confirm five-minute cooldown.
7. Parking Lot linger: confirm 15-minute cooldown after alert.

## Lock Secure Workflow Validation

1. South Entrance: with contact closed, verify up to five lock attempts spaced 15 seconds apart.
2. South Entrance: with C01 open, verify no South Entrance lock command is issued and Mr. Lewis, Chris, and Luis receive `Cannot secure building - South Entrance Door is open.`
3. South Entrance: confirm final failure notification sends only once per secure-building run when C01 is closed but the lock remains unsecured.
4. South Entrance: confirm recovery sends after the lock becomes secured following a prior secure-failure alert.
5. Bailey Double Doors: confirm HA-NOTIFY004 issues no Bailey automatic `lock.lock` command. Bailey automatic locking and Bailey failure-to-secure automation are deferred until the physical Bailey door contact is confirmed.
6. If South Entrance C01 is open during secure-building evaluation and then later closes, manually re-run the secure-building action or change/reapply the secured Building Mode; HA-NOTIFY004 does not continue the secure workflow automatically after that open-door block.

## Z-Wave Recovery Validation

1. Trigger a safe Z-Wave outage simulation only if approved.
2. Confirm the outage notification sends after 180 seconds and sets the Z-Wave outage helper.
3. Restore Z-Wave and confirm recovery sends only while the outage helper is on.
4. Confirm Maintenance, Installer, or approved update/restart suppression does not create a stale later recovery notification.

## Acceptance Results Record

Record results in:

`C:\Dev\wnyhomesecurity\docs\home-assistant\bklf\validation\HA-NOTIFY004_BKLF_NOTIFICATION_IMPLEMENTATION_ACCEPTANCE_CHECKLIST_REV01.md`

Store any screenshots or external evidence outside the repository unless a future bounded task authorizes a sanitized evidence import.
