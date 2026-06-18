# WNYHS Master Parts Gap Report

Source of truth: current validated `wnyhs_master_parts_records.csv` and `wnyhs_master_parts_records.jsonl` records only.

## Record Summary

- Total records: 5
- `conditional`: 2 record(s)
- `field_test`: 2 record(s)
- `custom_pass_through_only`: 1 record(s)

## Record-Level Validation Gaps

### reolink-d340p

- Qualification status: `conditional`
- Master hardware list action: `conditional_catalog_candidate`
- Inventory classification: `conditional_stock_candidate`
- Validation status: `needs_validation`
- Required WNYHS validation tests:
  - Doorbell press event exposure in Home Assistant
  - Motion/person/package event exposure validation
  - Local-only operation test with internet blocked
  - RTSP/ONVIF stream validation
  - Restart recovery test after HA/network/device reboot
  - Chime and notification workflow validation
- Missing evidence:
  - WNYHS-specific validation of chime behavior across install scenarios
  - WNYHS-specific restart recovery and notification workflow validation
  - WNYHS-specific package/person event behavior confirmation

### reolink-d340w

- Qualification status: `conditional`
- Master hardware list action: `conditional_catalog_candidate`
- Inventory classification: `conditional_stock_candidate`
- Validation status: `needs_validation`
- Required WNYHS validation tests:
  - Doorbell press event exposure in Home Assistant
  - Motion/person/package event exposure validation
  - Local-only operation test with internet blocked
  - Wi-Fi resilience and latency test
  - Restart recovery test after HA/network/device reboot
  - Transformer/chime compatibility validation
- Missing evidence:
  - WNYHS-specific transformer/chime compatibility matrix
  - WNYHS-specific Wi-Fi resilience thresholds for standard quoting
  - WNYHS-specific restart recovery and notification workflow validation

### reolink-d340b

- Qualification status: `field_test`
- Master hardware list action: `field_test_before_standard_use`
- Inventory classification: `do_not_stock`
- Validation status: `not_validated`
- Required WNYHS validation tests:
  - Confirm required hub/NVR bridge path
  - Battery wake/sleep behavior validation
  - Doorbell press and motion event exposure validation
  - Notification timing validation
  - Recovery after bridge/network/HA restart
  - Battery maintenance burden assessment
- Missing evidence:
  - Exact WNYHS-supported bridge architecture decision
  - Real-world battery life under WNYHS notification settings
  - Reliable event exposure behavior in Home Assistant for this battery model

### ubiquiti-uvc-g4-doorbell-pro-poe-kit

- Qualification status: `custom_pass_through_only`
- Master hardware list action: `custom_quote_only`
- Inventory classification: `special_order`
- Validation status: `needs_validation`
- Required WNYHS validation tests:
  - Confirm Protect controller/NVR architecture standard
  - Doorbell press and package camera event exposure validation
  - Stable Home Assistant integration validation on supported firmware
  - Restart recovery across Protect and HA
  - Notification workflow validation
- Missing evidence:
  - WNYHS-defined standard Protect architecture for repeatable quoting
  - WNYHS-specific validation of event/entity exposure for this exact kit
  - WNYHS-specific restart recovery and support-playbook validation

### aqara-db-c03e-g400-wired

- Qualification status: `field_test`
- Master hardware list action: `field_test_before_standard_use`
- Inventory classification: `do_not_stock`
- Validation status: `not_validated`
- Required WNYHS validation tests:
  - Confirm exact Home Assistant integration path for DB-C03E
  - Doorbell press event exposure validation
  - Live stream path validation
  - Local-vs-cloud dependency validation
  - Restart recovery test
  - Support burden assessment across Aqara and HA workflow
- Missing evidence:
  - Official Home Assistant device-level support confirmation for DB-C03E/G400 wired
  - Exact local operational path and controller dependency
  - WNYHS-specific validation of events, dashboard behavior, and restart recovery

## Prioritization

1. Validate the two `conditional` Reolink wired models first because they are the closest candidates for controlled catalog use.
2. Resolve the two `field_test` models next because both still have material operational uncertainty.
3. Keep the UniFi Protect kit in a custom / pass-through lane unless WNYHS adopts a defined repeatable Protect architecture.
