import type { CatalogHardwareLabelPartMapping, CatalogMasterPart, CatalogPackagePartMapping, CatalogSolutionPartMapping } from './catalogTypes';

// CATALOG004 and CATALOG005 import reviewed master-parts backfills from
// docs/catalog/imports/. Keep these records internal until a future bounded
// task explicitly maps them into solutions, packages, or quote flows.
export const catalogMasterParts: CatalogMasterPart[] = [
  {
    part_id: 'reolink-d340p',
    brand: 'Reolink',
    manufacturer: 'Reolink',
    product_line: 'Video Doorbell',
    product_name: 'Reolink Video Doorbell PoE',
    exact_model: 'D340P',
    sku: 'D340P',
    device_class: 'video_doorbell',
    hard_gate_result: 'PASS',
    qualification_status: 'conditional',
    master_hardware_list_action: 'conditional_catalog_candidate',
    inventory_classification: 'conditional_stock_candidate',
    approved_for_standard_use: 'no',
    approved_for_conditional_use: 'yes',
    field_test_required: 'no',
    research_pending: 'no',
    custom_pass_through_only: 'no',
    do_not_use: 'no',
    customer_facing_outcome:
      'Local-first visitor awareness, doorbell event visibility, live view, and package/entry monitoring through WNYHS Core with separate recording architecture as needed.',
    internal_wnyhs_purpose: 'Conditional wired PoE video doorbell candidate for reliable entry awareness and automation triggers.',
    required_integration_path:
      'Home Assistant Reolink integration via local network; optional RTSP/ONVIF/NVR path for recording and stream distribution.',
    home_assistant_compatibility_level: 'native_or_official',
    ha_green_suitability:
      'Suitable for dashboard, integrations, automations, and notifications on Home Assistant Green; separate NVR, NAS, SD, or Reolink storage path required for sustained recording.',
    vendor_app_role: 'Initial setup, firmware management, and optional fallback user features.',
    cloud_role: 'No required cloud role for core WNYHS outcome; optional remote/vendor services may exist.',
    subscription_role: 'No required subscription for core WNYHS outcome.',
    power_type: 'PoE',
    network_type: 'Ethernet',
    battery_dependency: 'no',
    hub_bridge_dependency: 'no',
    retrofit_suitability: 'Best for structured wiring or PoE retrofit where cable path is available.',
    commercial_suitability: 'Good fit for premium residential and light commercial entry awareness.',
    home_security: 'yes',
    aging_in_place: 'yes',
    home_automation: 'yes',
    home_safety_environmental: 'no',
    home_lighting: 'yes',
    dashboard_implications: 'Use for live view, doorbell event visibility, visitor awareness, and status dashboards; do not treat HA Green as NVR.',
    automation_implications: 'Useful for doorbell press, motion/person/package-triggered notifications and exterior lighting automations where validated.',
    quote_line_item_role: 'Conditional PoE video doorbell for premium reliability packages.',
    required_bundled_accessories: ['Included chime', 'PoE-capable network path', 'Suitable mounting hardware'],
    optional_accessories: ['Reolink NVR', 'MicroSD card if local onboard recording is used', 'Doorbell wedge or angle mount'],
    customer_disclosure_notes: [
      'Two-way audio through Home Assistant is not promised unless separately validated.',
      '24/7 recording requires separate supported storage architecture.',
    ],
    installer_notes: [
      'Confirm PoE budget, cable path, and mounting location before quoting.',
      'Validate chime workflow and network VLAN/firewall behavior on final design.',
    ],
    support_notes: ['Prefer stable firmware and stable Home Assistant release channel.', 'Document fallback use path in Reolink app for setup and troubleshooting.'],
    warranty_notes: ['Use manufacturer warranty terms at time of sale.'],
    stocking_recommendation: 'conditional_stock_candidate',
    validation_status: 'needs_validation',
    required_wnyhs_validation_tests: [
      'Doorbell press event exposure in Home Assistant',
      'Motion/person/package event exposure validation',
      'Local-only operation test with internet blocked',
      'RTSP/ONVIF stream validation',
      'Restart recovery test after HA/network/device reboot',
      'Chime and notification workflow validation',
    ],
    evidence_confidence: 'high',
    primary_evidence_sources: ['https://reolink.com/product/d340p/', 'https://www.home-assistant.io/integrations/reolink'],
    missing_evidence: [
      'WNYHS-specific validation of chime behavior across install scenarios',
      'WNYHS-specific restart recovery and notification workflow validation',
      'WNYHS-specific package/person event behavior confirmation',
    ],
    source: 'wnyhs_rev08_gpt_catalog003_generation',
    record_status: 'needs_review',
    last_evaluated_date: '2026-06-18',
    next_review_date: '2026-09-18',
  },
  {
    part_id: 'reolink-d340w',
    brand: 'Reolink',
    manufacturer: 'Reolink',
    product_line: 'Video Doorbell',
    product_name: 'Reolink Video Doorbell WiFi',
    exact_model: 'D340W',
    sku: 'D340W',
    device_class: 'video_doorbell',
    hard_gate_result: 'PASS',
    qualification_status: 'conditional',
    master_hardware_list_action: 'conditional_catalog_candidate',
    inventory_classification: 'conditional_stock_candidate',
    approved_for_standard_use: 'no',
    approved_for_conditional_use: 'yes',
    field_test_required: 'no',
    research_pending: 'no',
    custom_pass_through_only: 'no',
    do_not_use: 'no',
    customer_facing_outcome: 'Local-first wired video doorbell for visitor awareness, live view, package monitoring, and doorbell event notifications through WNYHS Core.',
    internal_wnyhs_purpose: 'Conditional wired Wi-Fi video doorbell candidate for low-disruption retrofit and automation-trigger use.',
    required_integration_path:
      'Home Assistant Reolink integration via local network; optional RTSP/ONVIF/NVR path for recording and stream distribution.',
    home_assistant_compatibility_level: 'native_or_official',
    ha_green_suitability:
      'Suitable for dashboard, integrations, automations, and notifications on Home Assistant Green; separate recording/storage architecture required for sustained recording.',
    vendor_app_role: 'Initial setup, firmware management, and optional fallback user features.',
    cloud_role: 'No required cloud role for core WNYHS outcome; optional remote/vendor services may exist.',
    subscription_role: 'No required subscription for core WNYHS outcome.',
    power_type: 'Existing low-voltage doorbell wiring',
    network_type: 'Wi-Fi',
    battery_dependency: 'no',
    hub_bridge_dependency: 'no',
    retrofit_suitability: 'Strong retrofit fit where existing low-voltage wiring and strong Wi-Fi are present.',
    commercial_suitability: 'Usable in selected small commercial sites where Wi-Fi quality is controlled.',
    home_security: 'yes',
    aging_in_place: 'yes',
    home_automation: 'yes',
    home_safety_environmental: 'no',
    home_lighting: 'yes',
    dashboard_implications: 'Use for live view, visitor awareness, and door event visibility; do not assume HA Green provides recording.',
    automation_implications: 'Useful for doorbell press and validated motion/person/package-triggered automations such as porch lighting.',
    quote_line_item_role: 'Conditional wired Wi-Fi video doorbell for retrofit packages.',
    required_bundled_accessories: ['Included chime', 'Compatible existing doorbell power', 'Reliable Wi-Fi coverage'],
    optional_accessories: ['Reolink NVR', 'MicroSD card if local onboard recording is used', 'Wi-Fi improvement hardware if site survey requires it'],
    customer_disclosure_notes: [
      'Wi-Fi performance depends on site conditions.',
      'Two-way audio through Home Assistant is not promised unless separately validated.',
      '24/7 recording requires separate supported storage architecture.',
    ],
    installer_notes: ['Confirm transformer/chime compatibility before quoting.', 'Require site Wi-Fi quality check at mounting location.'],
    support_notes: ['Document fallback setup path in Reolink app.', 'Avoid promising advanced HA feature parity with vendor app until validated.'],
    warranty_notes: ['Use manufacturer warranty terms at time of sale.'],
    stocking_recommendation: 'conditional_stock_candidate',
    validation_status: 'needs_validation',
    required_wnyhs_validation_tests: [
      'Doorbell press event exposure in Home Assistant',
      'Motion/person/package event exposure validation',
      'Local-only operation test with internet blocked',
      'Wi-Fi resilience and latency test',
      'Restart recovery test after HA/network/device reboot',
      'Transformer/chime compatibility validation',
    ],
    evidence_confidence: 'high',
    primary_evidence_sources: ['https://reolink.com/product/d340w/', 'https://www.home-assistant.io/integrations/reolink'],
    missing_evidence: [
      'WNYHS-specific transformer/chime compatibility matrix',
      'WNYHS-specific Wi-Fi resilience thresholds for standard quoting',
      'WNYHS-specific restart recovery and notification workflow validation',
    ],
    source: 'wnyhs_rev08_gpt_catalog003_generation',
    record_status: 'needs_review',
    last_evaluated_date: '2026-06-18',
    next_review_date: '2026-09-18',
  },
  {
    part_id: 'reolink-d340b',
    brand: 'Reolink',
    manufacturer: 'Reolink',
    product_line: 'Video Doorbell',
    product_name: 'Reolink Battery Video Doorbell',
    exact_model: 'D340B',
    sku: 'D340B',
    device_class: 'video_doorbell',
    hard_gate_result: 'PASS',
    qualification_status: 'field_test',
    master_hardware_list_action: 'field_test_before_standard_use',
    inventory_classification: 'do_not_stock',
    approved_for_standard_use: 'no',
    approved_for_conditional_use: 'no',
    field_test_required: 'yes',
    research_pending: 'no',
    custom_pass_through_only: 'no',
    do_not_use: 'no',
    customer_facing_outcome:
      'Special-case no-wiring visitor awareness and basic entry monitoring through WNYHS Core when paired with a supported Reolink Home Hub or NVR path.',
    internal_wnyhs_purpose: 'Field-test battery video doorbell candidate for no-power or no-wiring sites.',
    required_integration_path:
      'Battery model requires supported Reolink Home Hub or NVR bridge path into Home Assistant; use vendor app for setup and battery management.',
    home_assistant_compatibility_level: 'bridge_or_gateway_required',
    ha_green_suitability:
      'Potentially suitable for dashboards, notifications, and light automations on Home Assistant Green only when a supported hub/NVR bridge path is present; not suitable for always-on expectations.',
    vendor_app_role: 'Required for setup, battery management, firmware, and likely ongoing support tasks.',
    cloud_role: 'No required cloud subscription for the core candidate outcome, but vendor services may be used for optional features.',
    subscription_role: 'No required subscription for core candidate outcome.',
    power_type: 'Rechargeable battery',
    network_type: 'Wi-Fi',
    battery_dependency: 'yes',
    hub_bridge_dependency: 'yes',
    retrofit_suitability: 'Useful only where wired doorbell power or PoE is impractical.',
    commercial_suitability: 'Poor fit for routine commercial use due to charging and dependency burden.',
    home_security: 'yes',
    aging_in_place: 'no',
    home_automation: 'yes',
    home_safety_environmental: 'no',
    home_lighting: 'yes',
    dashboard_implications: 'Best limited to snapshots, event visibility, and light dashboard use; avoid promising continuous live view behavior.',
    automation_implications: 'May support door or motion-triggered automations, but battery wake behavior and bridge reliability must be validated first.',
    quote_line_item_role: 'Field-test-only battery video doorbell for exception sites.',
    required_bundled_accessories: ['Included chime', 'Supported Reolink Home Hub or NVR bridge path', 'Charging plan for battery maintenance'],
    optional_accessories: ['Spare charging cable', 'Additional Reolink storage architecture if used'],
    customer_disclosure_notes: [
      'Battery charging and wake behavior create maintenance burden.',
      'Live view responsiveness and continuous availability may differ from wired models.',
      'Two-way audio through Home Assistant is not promised.',
    ],
    installer_notes: ['Do not quote as standard hardware.', 'Only deploy where no practical wired alternative exists.'],
    support_notes: ['Expect higher support burden than wired models.', 'Document charging cadence and fallback vendor-app workflow.'],
    warranty_notes: ['Use manufacturer warranty terms at time of sale.'],
    stocking_recommendation: 'do_not_stock',
    validation_status: 'not_validated',
    required_wnyhs_validation_tests: [
      'Confirm required hub/NVR bridge path',
      'Battery wake/sleep behavior validation',
      'Doorbell press and motion event exposure validation',
      'Notification timing validation',
      'Recovery after bridge/network/HA restart',
      'Battery maintenance burden assessment',
    ],
    evidence_confidence: 'high',
    primary_evidence_sources: ['https://reolink.com/product/d340b/', 'https://www.home-assistant.io/integrations/reolink'],
    missing_evidence: [
      'Exact WNYHS-supported bridge architecture decision',
      'Real-world battery life under WNYHS notification settings',
      'Reliable event exposure behavior in Home Assistant for this battery model',
    ],
    source: 'wnyhs_rev08_gpt_catalog003_generation',
    record_status: 'needs_review',
    last_evaluated_date: '2026-06-18',
    next_review_date: '2026-09-18',
  },
  {
    part_id: 'ubiquiti-uvc-g4-doorbell-pro-poe-kit',
    brand: 'Ubiquiti',
    manufacturer: 'Ubiquiti Networks, Inc.',
    product_line: 'UniFi Protect',
    product_name: 'G4 Doorbell Pro PoE Kit',
    exact_model: 'UVC-G4 Doorbell Pro PoE Kit',
    sku: 'UVC-G4 Doorbell Pro PoE Kit',
    device_class: 'video_doorbell',
    hard_gate_result: 'PASS',
    qualification_status: 'custom_pass_through_only',
    master_hardware_list_action: 'custom_quote_only',
    inventory_classification: 'special_order',
    approved_for_standard_use: 'no',
    approved_for_conditional_use: 'no',
    field_test_required: 'no',
    research_pending: 'no',
    custom_pass_through_only: 'yes',
    do_not_use: 'no',
    customer_facing_outcome:
      'Premium local-first visitor awareness, package view, live video, and doorbell notifications when deployed within a UniFi Protect architecture integrated to WNYHS Core.',
    internal_wnyhs_purpose: 'Custom/pass-through premium PoE video doorbell for UniFi Protect ecosystem projects.',
    required_integration_path: 'UniFi Protect controller/NVR with official Home Assistant UniFi Protect integration using local API path.',
    home_assistant_compatibility_level: 'bridge_or_gateway_required',
    ha_green_suitability:
      'Suitable for dashboards, notifications, and automations on Home Assistant Green when paired with UniFi Protect controller/NVR; Home Assistant Green is not the recording appliance.',
    vendor_app_role: 'Needed for UniFi Protect setup, firmware, and ecosystem administration.',
    cloud_role: 'No required cloud role for core local outcome when Protect runs locally.',
    subscription_role: 'No required subscription for core local outcome.',
    power_type: 'PoE',
    network_type: 'Ethernet',
    battery_dependency: 'no',
    hub_bridge_dependency: 'yes',
    retrofit_suitability: 'Limited retrofit suitability unless PoE and UniFi Protect architecture are already planned.',
    commercial_suitability: 'Strong fit for premium residential and light commercial Protect deployments.',
    home_security: 'yes',
    aging_in_place: 'yes',
    home_automation: 'yes',
    home_safety_environmental: 'no',
    home_lighting: 'yes',
    dashboard_implications:
      'Strong live-view and event visibility within a Protect-backed architecture; Home Assistant Green should not be presented as the recorder.',
    automation_implications: 'Useful for press, motion, and package-related automations where the Protect integration exposes the needed entities/events.',
    quote_line_item_role: 'Custom-quote premium PoE doorbell in UniFi Protect packages.',
    required_bundled_accessories: ['Included PoE chime', 'UniFi Protect controller or NVR', 'PoE-capable network path'],
    optional_accessories: ['Additional Protect storage hardware', 'Angle mount or installation accessories as needed'],
    customer_disclosure_notes: [
      'This is ecosystem-dependent hardware and is not a simple standalone standard WNYHS doorbell.',
      'Two-way audio through Home Assistant is not promised unless separately validated.',
    ],
    installer_notes: ['Quote only with a defined UniFi Protect architecture.', 'Confirm controller, storage, and firmware policy before deployment.'],
    support_notes: [
      'Avoid Early Access or Release Candidate UniFi OS/Protect versions for HA-dependent deployments.',
      'Support burden depends on the broader UniFi Protect stack.',
    ],
    warranty_notes: ['Use manufacturer warranty terms at time of sale.'],
    stocking_recommendation: 'special_order',
    validation_status: 'needs_validation',
    required_wnyhs_validation_tests: [
      'Confirm Protect controller/NVR architecture standard',
      'Doorbell press and package camera event exposure validation',
      'Stable Home Assistant integration validation on supported firmware',
      'Restart recovery across Protect and HA',
      'Notification workflow validation',
    ],
    evidence_confidence: 'high',
    primary_evidence_sources: [
      'https://techspecs.ui.com/unifi/cameras-nvrs/uvc-g4-doorbell-pro-poe-kit',
      'https://www.home-assistant.io/integrations/unifiprotect/',
    ],
    missing_evidence: [
      'WNYHS-defined standard Protect architecture for repeatable quoting',
      'WNYHS-specific validation of event/entity exposure for this exact kit',
      'WNYHS-specific restart recovery and support-playbook validation',
    ],
    source: 'wnyhs_rev08_gpt_catalog003_generation',
    record_status: 'needs_review',
    last_evaluated_date: '2026-06-18',
    next_review_date: '2026-09-18',
  },
  {
    part_id: 'aqara-db-c03e-g400-wired',
    brand: 'Aqara',
    manufacturer: 'Aqara',
    product_line: 'Doorbell Camera G400',
    product_name: 'Doorbell Camera G400 (Wired)',
    exact_model: 'DB-C03E',
    sku: 'DB-C03E',
    device_class: 'video_doorbell',
    hard_gate_result: 'PASS',
    qualification_status: 'field_test',
    master_hardware_list_action: 'field_test_before_standard_use',
    inventory_classification: 'do_not_stock',
    approved_for_standard_use: 'no',
    approved_for_conditional_use: 'no',
    field_test_required: 'yes',
    research_pending: 'no',
    custom_pass_through_only: 'no',
    do_not_use: 'no',
    customer_facing_outcome:
      'Always-on wired or PoE visitor awareness and entry video candidate with potential ecosystem flexibility, pending verified Home Assistant operational path.',
    internal_wnyhs_purpose: 'Field-test wired video doorbell candidate where Aqara or Apple/HomeKit compatibility may matter.',
    required_integration_path:
      'Exact WNYHS path to Home Assistant remains to be validated; likely Aqara ecosystem and/or HomeKit/Matter-related path depending final supported mode.',
    home_assistant_compatibility_level: 'unknown',
    ha_green_suitability:
      'Potentially suitable for dashboards and automations on Home Assistant Green if a stable supported integration path is confirmed; separate storage path required for recording.',
    vendor_app_role: 'Likely needed for setup, firmware, and possibly for parts of ongoing support workflow.',
    cloud_role: 'Cloud requirement for core WNYHS outcome remains unproven for this exact model/path.',
    subscription_role: 'No required subscription is currently established for the candidate outcome.',
    power_type: 'PoE or existing doorbell wiring',
    network_type: 'Ethernet or Wi-Fi',
    battery_dependency: 'no',
    hub_bridge_dependency: 'unknown',
    retrofit_suitability: 'Potentially strong retrofit fit if exact HA path and wiring modes validate cleanly.',
    commercial_suitability: 'Unknown until HA path and support burden are validated.',
    home_security: 'yes',
    aging_in_place: 'unknown',
    home_automation: 'yes',
    home_safety_environmental: 'no',
    home_lighting: 'yes',
    dashboard_implications: 'Do not promise HA dashboard behavior until the supported integration path is validated for this exact model.',
    automation_implications: 'Could be useful for press, motion, and approach-lighting automations, but exact entity/event path is not yet proven.',
    quote_line_item_role: 'Field-test wired video doorbell candidate for controlled pilot use only.',
    required_bundled_accessories: ['Included chime', 'Compatible wiring or PoE path', 'Defined ecosystem/controller path for final design'],
    optional_accessories: ['Mounting wedge', 'Local storage or recording architecture if used'],
    customer_disclosure_notes: [
      'Exact Home Assistant integration path is not yet proven enough for standard quoting.',
      'Do not assume all advertised features are available through Home Assistant.',
    ],
    installer_notes: [
      'Field test before general quoting.',
      'Confirm whether the intended project relies on Aqara app, HomeKit, Matter, or another bridge/controller path.',
    ],
    support_notes: ['Support burden is uncertain until exact HA path is validated.', 'Avoid broad customer promises around local-only operation until proven.'],
    warranty_notes: ['Use manufacturer warranty terms at time of sale.'],
    stocking_recommendation: 'do_not_stock',
    validation_status: 'not_validated',
    required_wnyhs_validation_tests: [
      'Confirm exact Home Assistant integration path for DB-C03E',
      'Doorbell press event exposure validation',
      'Live stream path validation',
      'Local-vs-cloud dependency validation',
      'Restart recovery test',
      'Support burden assessment across Aqara and HA workflow',
    ],
    evidence_confidence: 'medium',
    primary_evidence_sources: ['https://www.aqara.com/en/product/doorbell-camera-g400-wired/', 'https://www.home-assistant.io/integrations/aqara/'],
    missing_evidence: [
      'Official Home Assistant device-level support confirmation for DB-C03E/G400 wired',
      'Exact local operational path and controller dependency',
      'WNYHS-specific validation of events, dashboard behavior, and restart recovery',
    ],
    source: 'wnyhs_rev08_gpt_catalog003_generation',
    record_status: 'needs_review',
    last_evaluated_date: '2026-06-18',
    next_review_date: '2026-09-18',
  },
  {
      "part_id": "reolink-home-hub",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "Home Hub Series",
      "product_name": "Reolink Home Hub",
      "exact_model": "Home Hub",
      "sku": "Home Hub",
      "device_class": "home_hub",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "no",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "no",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "Local storage and centralized management for qualifying Reolink camera estates.",
      "internal_wnyhs_purpose": "Bridge qualifying Reolink cameras into WNYHS Core through the official Reolink integration while keeping recording on the hub.",
      "required_integration_path": "Add the Reolink Home Hub directly to Home Assistant through the official Reolink integration; use Home Assistant Green for orchestration/control/dashboard only; keep storage on the Home Hub or attached supported storage.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "AC-powered local security hub",
      "network_type": "Router Ethernet uplink plus Wi-Fi camera estate support",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "medium",
      "commercial_suitability": "medium",
      "dashboard_implications": "Expose hub-managed cameras and recordings through the Reolink integration; Green is dashboard/orchestration only.",
      "automation_implications": "Use linked Reolink camera entities/events via the hub for automations; keep heavy recording and retention on the hub.",
      "quote_line_item_role": "Local recording and HA bridge infrastructure",
      "required_bundled_accessories": [
          "Power adapter",
          "Ethernet network connection to router for setup/management"
      ],
      "optional_accessories": [
          "Compatible Reolink cameras",
          "microSD card or supported hub storage media if applicable"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "Remote access and cloud services are optional, not required for the core local WNYHS outcome."
      ],
      "installer_notes": [
          "Connect hub to router and complete initial provisioning in the Reolink app/client before Home Assistant onboarding.",
          "Verify firmware, local credentials, camera compatibility, and storage configuration before turnover."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some advanced hub/camera management.",
          "Once cameras are managed by the hub, support should document the hub-centric access path."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate hub discovery and stable Home Assistant onboarding.",
          "Validate camera event/entity availability through the hub.",
          "Validate recording retention, local playback path, and recovery after hub/router/Home Assistant restart."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/product/reolink-home-hub/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/",
          "https://support.reolink.com/articles/32379509281561-Reolink-Home-Hub-Compatibility/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm final field behavior after current production firmware on target camera mix."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  },
  {
      "part_id": "reolink-home-hub-mini",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "Home Hub Series",
      "product_name": "Reolink Home Hub Mini",
      "exact_model": "Home Hub Mini",
      "sku": "Home Hub Mini",
      "device_class": "home_hub",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "no",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "no",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "Compact local storage and centralized management for qualifying Reolink camera estates.",
      "internal_wnyhs_purpose": "Bridge qualifying Reolink cameras into WNYHS Core through the official Reolink integration while keeping recording on the hub.",
      "required_integration_path": "Add the Home Hub Mini directly to Home Assistant through the official Reolink integration; use Home Assistant Green for orchestration/control/dashboard only; keep storage on the Home Hub Mini or attached supported storage.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "AC-powered local security hub",
      "network_type": "Router Ethernet uplink plus Wi-Fi camera estate support",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "high",
      "commercial_suitability": "low",
      "dashboard_implications": "Expose hub-managed cameras and recordings through the Reolink integration; Green is dashboard/orchestration only.",
      "automation_implications": "Use linked Reolink camera entities/events via the hub for automations; keep heavy recording and retention on the hub.",
      "quote_line_item_role": "Compact local recording and HA bridge infrastructure",
      "required_bundled_accessories": [
          "Power adapter",
          "Ethernet network connection to router for setup/management"
      ],
      "optional_accessories": [
          "Compatible Reolink cameras",
          "microSD card or supported hub storage media if applicable"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "Remote access and cloud services are optional, not required for the core local WNYHS outcome."
      ],
      "installer_notes": [
          "Connect hub to router and complete initial provisioning in the Reolink app/client before Home Assistant onboarding.",
          "Verify firmware, local credentials, camera compatibility, and storage configuration before turnover."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some advanced hub/camera management.",
          "Document which cameras are managed by the hub to avoid split-path support confusion."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate hub discovery and stable Home Assistant onboarding.",
          "Validate camera event/entity availability through the hub.",
          "Validate recording retention, local playback path, and recovery after hub/router/Home Assistant restart."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/product/home-hub-mini/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/",
          "https://support.reolink.com/articles/32379509281561-Reolink-Home-Hub-Compatibility/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm final field behavior after current production firmware on target camera mix."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  },
  {
      "part_id": "reolink-home-hub-pro",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "Home Hub Series",
      "product_name": "Reolink Home Hub Pro",
      "exact_model": "Home Hub Pro",
      "sku": "Home Hub Pro",
      "device_class": "home_hub",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "no",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "no",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "Higher-capacity local storage and centralized management for qualifying Reolink camera estates.",
      "internal_wnyhs_purpose": "Bridge qualifying Reolink cameras into WNYHS Core through the official Reolink integration while keeping recording on the Home Hub Pro.",
      "required_integration_path": "Add the Reolink Home Hub Pro directly to Home Assistant through the official Reolink integration; use Home Assistant Green for orchestration/control/dashboard only; keep storage on the Home Hub Pro.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "AC-powered local security hub with HDD-backed storage",
      "network_type": "Router Ethernet uplink plus Wi-Fi camera estate support",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "medium",
      "commercial_suitability": "medium",
      "dashboard_implications": "Expose hub-managed cameras and recordings through the Reolink integration; Green is dashboard/orchestration only.",
      "automation_implications": "Use linked Reolink camera entities/events via the hub for automations; keep heavy recording and retention on the Home Hub Pro.",
      "quote_line_item_role": "Higher-capacity local recording and HA bridge infrastructure",
      "required_bundled_accessories": [
          "Power adapter",
          "Ethernet network connection to router for setup/management"
      ],
      "optional_accessories": [
          "Compatible Reolink cameras",
          "Supported hard-drive expansion if applicable"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "Remote access and cloud services are optional, not required for the core local WNYHS outcome."
      ],
      "installer_notes": [
          "Connect hub to router and complete initial provisioning in the Reolink app/client before Home Assistant onboarding.",
          "Verify firmware, local credentials, camera compatibility, drive health, and storage configuration before turnover."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some advanced hub/camera management.",
          "Document hub-managed access flow and storage/retention settings."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate hub discovery and stable Home Assistant onboarding.",
          "Validate camera event/entity availability through the hub.",
          "Validate recording retention, local playback path, and recovery after hub/router/Home Assistant restart."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/product/reolink-home-hub-pro/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/",
          "https://support.reolink.com/articles/32379509281561-Reolink-Home-Hub-Compatibility/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm final field behavior after current production firmware on target camera mix."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  },
  {
      "part_id": "reolink-rln8-410",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "NVR Series",
      "product_name": "Reolink RLN8-410",
      "exact_model": "RLN8-410",
      "sku": "RLN8-410",
      "device_class": "nvr",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "no",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "no",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "Local 24/7 recording and centralized camera management for small Reolink camera estates.",
      "internal_wnyhs_purpose": "Use the NVR as the primary Reolink endpoint in Home Assistant while keeping recording/storage on the NVR.",
      "required_integration_path": "Add the RLN8-410 directly to Home Assistant through the official Reolink integration; use Home Assistant Green for orchestration/control/dashboard only; keep storage on the NVR HDD.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "AC-powered PoE network video recorder",
      "network_type": "Wired Ethernet LAN with PoE camera ports",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "medium",
      "commercial_suitability": "medium",
      "dashboard_implications": "Expose NVR cameras, streams, and supported entities through the Reolink integration; Green is dashboard/orchestration only.",
      "automation_implications": "Use NVR-exposed camera entities/events for automations; keep 24/7 recording and playback on the NVR.",
      "quote_line_item_role": "PoE recording and camera management infrastructure",
      "required_bundled_accessories": [
          "Power adapter",
          "Internal or supported NVR storage drive",
          "Network connection to router"
      ],
      "optional_accessories": [
          "Compatible Reolink PoE or supported Wi-Fi cameras",
          "Monitor/HDMI access for local setup if desired"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "Remote access and cloud services are optional, not required for the core local WNYHS outcome."
      ],
      "installer_notes": [
          "Complete NVR initialization, storage setup, local credentials, and firmware updates before Home Assistant onboarding.",
          "Document camera-to-NVR topology and retention settings."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some advanced NVR management.",
          "Battery-camera compatibility depends on current NVR hardware/firmware support and should be validated separately."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate NVR discovery and stable Home Assistant onboarding.",
          "Validate event/entity exposure for connected cameras.",
          "Validate recording retention, local playback path, and recovery after NVR/router/Home Assistant restart."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/product/rln8-410/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm deployed hardware/firmware revision behavior for target camera mix."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  },
  {
      "part_id": "reolink-rln12w",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "NVR Series",
      "product_name": "Reolink RLN12W",
      "exact_model": "RLN12W",
      "sku": "RLN12W",
      "device_class": "wifi_nvr",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "no",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "no",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "Local 24/7 recording and centralized management for Wi-Fi Reolink camera estates.",
      "internal_wnyhs_purpose": "Use the Wi-Fi NVR as the primary Reolink endpoint in Home Assistant while keeping recording/storage on the NVR.",
      "required_integration_path": "Add the RLN12W directly to Home Assistant through the official Reolink integration; use Home Assistant Green for orchestration/control/dashboard only; keep storage on the NVR HDD.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "AC-powered Wi-Fi network video recorder",
      "network_type": "Wired Ethernet LAN uplink with Wi-Fi camera connectivity",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "high",
      "commercial_suitability": "medium",
      "dashboard_implications": "Expose NVR cameras, streams, and supported entities through the Reolink integration; Green is dashboard/orchestration only.",
      "automation_implications": "Use NVR-exposed camera entities/events for automations; keep 24/7 recording and playback on the NVR.",
      "quote_line_item_role": "Wi-Fi recording and camera management infrastructure",
      "required_bundled_accessories": [
          "Power adapter",
          "Internal or supported NVR storage drive",
          "Network connection to router"
      ],
      "optional_accessories": [
          "Compatible Reolink Wi-Fi cameras",
          "Separate PoE switch or injector if using cameras that need PoE power before network bridging"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "Remote access and cloud services are optional, not required for the core local WNYHS outcome."
      ],
      "installer_notes": [
          "Complete NVR initialization, storage setup, Wi-Fi camera enrollment, local credentials, and firmware updates before Home Assistant onboarding.",
          "Document camera-to-NVR topology and retention settings."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some advanced NVR management.",
          "Models that need separate power or PoE upstream should be documented at quote time."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate NVR discovery and stable Home Assistant onboarding.",
          "Validate event/entity exposure for connected cameras.",
          "Validate recording retention, local playback path, and recovery after NVR/router/Home Assistant restart."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/product/rln12w/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm deployed hardware/firmware revision behavior for target camera mix."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  },
  {
      "part_id": "reolink-rln16-410",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "NVR Series",
      "product_name": "Reolink RLN16-410",
      "exact_model": "RLN16-410",
      "sku": "RLN16-410",
      "device_class": "nvr",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "no",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "no",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "Local 24/7 recording and centralized camera management for larger Reolink camera estates.",
      "internal_wnyhs_purpose": "Use the NVR as the primary Reolink endpoint in Home Assistant while keeping recording/storage on the NVR.",
      "required_integration_path": "Add the RLN16-410 directly to Home Assistant through the official Reolink integration; use Home Assistant Green for orchestration/control/dashboard only; keep storage on the NVR HDD.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "AC-powered PoE network video recorder",
      "network_type": "Wired Ethernet LAN with PoE camera ports",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "medium",
      "commercial_suitability": "high",
      "dashboard_implications": "Expose NVR cameras, streams, and supported entities through the Reolink integration; Green is dashboard/orchestration only.",
      "automation_implications": "Use NVR-exposed camera entities/events for automations; keep 24/7 recording and playback on the NVR.",
      "quote_line_item_role": "Scaled PoE recording and camera management infrastructure",
      "required_bundled_accessories": [
          "Power adapter",
          "Internal or supported NVR storage drive",
          "Network connection to router"
      ],
      "optional_accessories": [
          "Compatible Reolink PoE or supported Wi-Fi cameras",
          "Monitor/HDMI access for local setup if desired"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "Remote access and cloud services are optional, not required for the core local WNYHS outcome."
      ],
      "installer_notes": [
          "Complete NVR initialization, storage setup, local credentials, and firmware updates before Home Assistant onboarding.",
          "Document camera-to-NVR topology and retention settings."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some advanced NVR management.",
          "Battery-camera compatibility depends on current NVR hardware/firmware support and should be validated separately."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate NVR discovery and stable Home Assistant onboarding.",
          "Validate event/entity exposure for connected cameras.",
          "Validate recording retention, local playback path, and recovery after NVR/router/Home Assistant restart."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/product/rln16-410/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm deployed hardware/firmware revision behavior for target camera mix."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  },
  {
      "part_id": "reolink-rln36",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "NVR Series",
      "product_name": "Reolink RLN36",
      "exact_model": "RLN36",
      "sku": "RLN36",
      "device_class": "nvr",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "no",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "no",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "High-capacity local 24/7 recording and centralized camera management for large Reolink estates.",
      "internal_wnyhs_purpose": "Use the NVR as the primary Reolink endpoint in Home Assistant while keeping recording/storage on the NVR.",
      "required_integration_path": "Add the RLN36 directly to Home Assistant through the official Reolink integration; use Home Assistant Green for orchestration/control/dashboard only; keep storage on NVR-installed HDDs.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "AC-powered network video recorder",
      "network_type": "Wired Ethernet LAN; external PoE/network switching required for cameras",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "low",
      "commercial_suitability": "high",
      "dashboard_implications": "Expose NVR cameras, streams, and supported entities through the Reolink integration; Green is dashboard/orchestration only.",
      "automation_implications": "Use NVR-exposed camera entities/events for automations; keep 24/7 recording and playback on the NVR.",
      "quote_line_item_role": "Large-estate recording and camera management infrastructure",
      "required_bundled_accessories": [
          "Power adapter",
          "Installed or planned supported HDDs",
          "Network connection to router"
      ],
      "optional_accessories": [
          "External PoE switch if using PoE cameras",
          "Compatible Reolink network cameras"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "Remote access and cloud services are optional, not required for the core local WNYHS outcome."
      ],
      "installer_notes": [
          "Complete NVR initialization, drive installation, local credentials, and firmware updates before Home Assistant onboarding.",
          "Document upstream network/PoE topology and retention settings."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some advanced NVR management.",
          "This is a larger-site recorder and should not be quoted as a simple plug-and-play home starter unit."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate NVR discovery and stable Home Assistant onboarding.",
          "Validate event/entity exposure for connected cameras.",
          "Validate recording retention, local playback path, and recovery after NVR/router/Home Assistant restart."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/product/rln36/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm deployed hardware/firmware revision behavior for target camera mix."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  },
  {
      "part_id": "reolink-e1-outdoor-pro",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "E1 Series",
      "product_name": "Reolink E1 Outdoor Pro",
      "exact_model": "E1 Outdoor Pro",
      "sku": "E1 Outdoor Pro",
      "device_class": "wifi_pt_camera",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "yes",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "no",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "Local-first entry, yard, and room awareness with app-assisted PTZ setup and Home Assistant visibility.",
      "internal_wnyhs_purpose": "Directly add the camera to Home Assistant for live view and supported entities while keeping recording on camera microSD, Home Hub, NVR, or other supported storage.",
      "required_integration_path": "Add the camera directly to Home Assistant through the official Reolink integration; RTSP/ONVIF local path is also available; use Home Assistant Green for orchestration/control/dashboard only; keep storage on the camera, Home Hub, NVR, NAS, or other supported recording architecture.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "Plug-in wired power",
      "network_type": "Wi-Fi 6",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "high",
      "commercial_suitability": "medium",
      "dashboard_implications": "Suitable for dashboard live view and supported entities in Home Assistant; Green is not the recorder.",
      "automation_implications": "Useful for motion/person/vehicle-triggered automations where exposed; PTZ and advanced tracking settings may stay app-managed.",
      "quote_line_item_role": "Direct local Wi-Fi PT camera",
      "required_bundled_accessories": [
          "Power adapter",
          "Stable Wi-Fi coverage",
          "Local admin credentials"
      ],
      "optional_accessories": [
          "microSD card",
          "Reolink Home Hub",
          "Reolink NVR",
          "NAS or other supported storage"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "Advanced PTZ presets, patrol, or tracking configuration may still require the Reolink app/client."
      ],
      "installer_notes": [
          "Initialize camera, set local credentials, confirm Wi-Fi signal quality, and update firmware before Home Assistant onboarding.",
          "Validate stream choice, event latency, and storage path during commissioning."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some advanced PTZ/tracking configuration.",
          "Document any PTZ presets or patrol logic that are configured outside Home Assistant."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate Home Assistant onboarding and stable live stream.",
          "Validate motion/person/vehicle entity exposure and latency.",
          "Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/product/e1-outdoor-pro/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm PTZ/tracking behavior and entity set under current production firmware."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  },
  {
      "part_id": "reolink-elite-floodlight-wifi",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "Elite Series",
      "product_name": "Reolink Elite Floodlight WiFi",
      "exact_model": "Elite Floodlight WiFi",
      "sku": "Elite Floodlight WiFi",
      "device_class": "wifi_floodlight_camera",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "yes",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "yes",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "Perimeter video awareness with deterrence lighting and local-first recording options.",
      "internal_wnyhs_purpose": "Directly add the camera to Home Assistant for live view and supported entities while keeping recording on camera microSD, Home Hub, NVR, or other supported storage.",
      "required_integration_path": "Add the camera directly to Home Assistant through the official Reolink integration; RTSP/ONVIF local path is also available; use Home Assistant Green for orchestration/control/dashboard only; keep storage on the camera, Home Hub, NVR, NAS, or other supported recording architecture.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "Wired floodlight power",
      "network_type": "Wi-Fi 6",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "medium",
      "commercial_suitability": "medium",
      "dashboard_implications": "Suitable for dashboard live view and supported entities in Home Assistant; Green is not the recorder.",
      "automation_implications": "Useful for motion/person/vehicle-triggered automations; floodlight control/entity parity should be validated on deployed firmware.",
      "quote_line_item_role": "Direct local Wi-Fi floodlight camera",
      "required_bundled_accessories": [
          "Hardwired floodlight power",
          "Stable Wi-Fi coverage",
          "Local admin credentials"
      ],
      "optional_accessories": [
          "microSD card",
          "Reolink Home Hub",
          "Reolink NVR",
          "Compatible lighting automation logic in Home Assistant"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "Floodlight controls and advanced panoramic features should be treated as conditional until WNYHS validation confirms exact HA behavior."
      ],
      "installer_notes": [
          "Verify electrical box suitability, Wi-Fi signal quality, local credentials, and firmware before Home Assistant onboarding.",
          "Validate stream choice, event latency, floodlight behavior, and storage path during commissioning."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some advanced floodlight/camera configuration.",
          "Document whether floodlight modes are managed in Home Assistant or retained in the Reolink app/client."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate Home Assistant onboarding and stable live stream.",
          "Validate motion/person/vehicle entity exposure and floodlight behavior.",
          "Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/product/elite-floodlight-wifi/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm floodlight entity behavior and advanced panoramic presentation under current production firmware."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  },
  {
      "part_id": "reolink-fe-w",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "Fisheye Series",
      "product_name": "Reolink FE-W",
      "exact_model": "FE-W",
      "sku": "FE-W",
      "device_class": "wifi_fisheye_camera",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "yes",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "no",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "Wide-area room or entry awareness with local-first recording options.",
      "internal_wnyhs_purpose": "Directly add the camera to Home Assistant for live view and supported entities while keeping recording on camera microSD, Home Hub, NVR, or other supported storage.",
      "required_integration_path": "Add the camera directly to Home Assistant through the official Reolink integration; RTSP/ONVIF local path is also available; use Home Assistant Green for orchestration/control/dashboard only; keep storage on the camera, Home Hub, NVR, NAS, or other supported recording architecture.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "Plug-in wired power",
      "network_type": "Wi-Fi",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "high",
      "commercial_suitability": "medium",
      "dashboard_implications": "Suitable for dashboard live view and supported entities in Home Assistant; Green is not the recorder.",
      "automation_implications": "Useful for motion-triggered automations where exposed; fisheye dewarping/view modes may remain app/NVR-centric.",
      "quote_line_item_role": "Direct local Wi-Fi fisheye camera",
      "required_bundled_accessories": [
          "Power adapter",
          "Stable Wi-Fi coverage",
          "Local admin credentials"
      ],
      "optional_accessories": [
          "microSD card",
          "Reolink Home Hub",
          "Reolink NVR",
          "NAS or other supported storage"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "Fisheye dewarping modes and panoramic presentation may be richer in the Reolink app/client or NVR than in Home Assistant."
      ],
      "installer_notes": [
          "Initialize camera, set local credentials, confirm Wi-Fi signal quality, and update firmware before Home Assistant onboarding.",
          "Validate stream choice, event latency, and storage path during commissioning."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some fisheye-specific configuration.",
          "Document whether client-side dewarping views are required for the customer outcome."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate Home Assistant onboarding and stable live stream.",
          "Validate motion/person entity exposure and practical dashboard presentation.",
          "Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/product/fe-w/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm preferred fisheye presentation and entity set under current production firmware."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  },
  {
      "part_id": "reolink-rlc-810wa",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "RLC Series",
      "product_name": "Reolink RLC-810WA",
      "exact_model": "RLC-810WA",
      "sku": "RLC-810WA",
      "device_class": "wifi_camera",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "yes",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "no",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "General local-first residential video awareness with straightforward Wi-Fi deployment.",
      "internal_wnyhs_purpose": "Directly add the camera to Home Assistant for live view and supported entities while keeping recording on camera microSD, Home Hub, NVR, or other supported storage.",
      "required_integration_path": "Add the camera directly to Home Assistant through the official Reolink integration; RTSP/ONVIF local path is also available; use Home Assistant Green for orchestration/control/dashboard only; keep storage on the camera, Home Hub, NVR, NAS, or other supported recording architecture.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "Plug-in wired power",
      "network_type": "Wi-Fi 6",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "high",
      "commercial_suitability": "medium",
      "dashboard_implications": "Suitable for dashboard live view and supported entities in Home Assistant; Green is not the recorder.",
      "automation_implications": "Useful for motion/person/vehicle-triggered automations where exposed.",
      "quote_line_item_role": "Direct local Wi-Fi fixed camera",
      "required_bundled_accessories": [
          "Power adapter",
          "Stable Wi-Fi coverage",
          "Local admin credentials"
      ],
      "optional_accessories": [
          "microSD card",
          "Reolink Home Hub",
          "Reolink NVR",
          "NAS or other supported storage"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "Site Wi-Fi quality directly affects the customer experience."
      ],
      "installer_notes": [
          "Initialize camera, set local credentials, confirm Wi-Fi signal quality, and update firmware before Home Assistant onboarding.",
          "Validate stream choice, event latency, and storage path during commissioning."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some advanced camera configuration.",
          "Document selected local storage path and customer network dependencies."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate Home Assistant onboarding and stable live stream.",
          "Validate motion/person/vehicle entity exposure and latency.",
          "Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/us/product/rlc-810wa/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm final entity set and Wi-Fi behavior under current production firmware."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  },
  {
      "part_id": "reolink-rlc-840wa",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "RLC Series",
      "product_name": "Reolink RLC-840WA",
      "exact_model": "RLC-840WA",
      "sku": "RLC-840WA",
      "device_class": "wifi_vandal_dome_camera",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "yes",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "no",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "General local-first residential or light-commercial video awareness in a dome form factor.",
      "internal_wnyhs_purpose": "Directly add the camera to Home Assistant for live view and supported entities while keeping recording on camera microSD, Home Hub, NVR, or other supported storage.",
      "required_integration_path": "Add the camera directly to Home Assistant through the official Reolink integration; RTSP/ONVIF local path is also available; use Home Assistant Green for orchestration/control/dashboard only; keep storage on the camera, Home Hub, NVR, NAS, or other supported recording architecture.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "Plug-in wired power",
      "network_type": "Wi-Fi 6",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "medium",
      "commercial_suitability": "medium",
      "dashboard_implications": "Suitable for dashboard live view and supported entities in Home Assistant; Green is not the recorder.",
      "automation_implications": "Useful for motion/person/vehicle-triggered automations where exposed.",
      "quote_line_item_role": "Direct local Wi-Fi dome camera",
      "required_bundled_accessories": [
          "Power adapter",
          "Stable Wi-Fi coverage",
          "Local admin credentials"
      ],
      "optional_accessories": [
          "microSD card",
          "Reolink Home Hub",
          "Reolink NVR",
          "NAS or other supported storage"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "Site Wi-Fi quality and mounting location directly affect the customer experience."
      ],
      "installer_notes": [
          "Initialize camera, set local credentials, confirm Wi-Fi signal quality, and update firmware before Home Assistant onboarding.",
          "Validate stream choice, event latency, and storage path during commissioning."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some advanced camera configuration.",
          "Document selected local storage path and customer network dependencies."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate Home Assistant onboarding and stable live stream.",
          "Validate motion/person/vehicle entity exposure and latency.",
          "Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/us/product/rlc-840wa/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm final entity set and Wi-Fi behavior under current production firmware."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  },
  {
      "part_id": "reolink-rp-wcb8mz",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "Commercial Wi-Fi Series",
      "product_name": "Reolink RP-WCB8MZ",
      "exact_model": "RP-WCB8MZ",
      "sku": "RP-WCB8MZ",
      "device_class": "wifi_camera",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "no",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "no",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "Local-first commercial-grade Wi-Fi video awareness with official Reolink integration support.",
      "internal_wnyhs_purpose": "Directly add the camera to Home Assistant for live view and supported entities while keeping recording on camera microSD, Home Hub, NVR, or other supported storage.",
      "required_integration_path": "Add the camera directly to Home Assistant through the official Reolink integration; RTSP/ONVIF local path is also available; use Home Assistant Green for orchestration/control/dashboard only; keep storage on the camera, Home Hub, NVR, NAS, or other supported recording architecture.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "Plug-in wired power",
      "network_type": "Wi-Fi 6",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "medium",
      "commercial_suitability": "high",
      "dashboard_implications": "Suitable for dashboard live view and supported entities in Home Assistant; Green is not the recorder.",
      "automation_implications": "Useful for motion/person/vehicle-triggered automations where exposed.",
      "quote_line_item_role": "Direct local commercial Wi-Fi camera",
      "required_bundled_accessories": [
          "Power adapter",
          "Stable Wi-Fi coverage",
          "Local admin credentials"
      ],
      "optional_accessories": [
          "microSD card",
          "Reolink Home Hub",
          "Reolink NVR",
          "NAS or other supported storage"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "Commercial AI video search and some advanced features may be richer in the Reolink client ecosystem than in Home Assistant."
      ],
      "installer_notes": [
          "Initialize camera, set local credentials, confirm Wi-Fi signal quality, and update firmware before Home Assistant onboarding.",
          "Validate stream choice, event latency, and storage path during commissioning."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some advanced camera/search configuration.",
          "Document selected local storage path and any business-network requirements."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate Home Assistant onboarding and stable live stream.",
          "Validate motion/person/vehicle entity exposure and latency.",
          "Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/product/rp-wcb8mz/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm final entity set and advanced feature behavior under current production firmware."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  },
  {
      "part_id": "reolink-duo-3-wifi",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "Duo Series",
      "product_name": "Reolink Duo 3 WiFi",
      "exact_model": "Duo 3 WiFi",
      "sku": "Duo 3 WiFi",
      "device_class": "wifi_dual_lens_camera",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "yes",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "no",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "Wide-area perimeter awareness with dual-lens local-first coverage.",
      "internal_wnyhs_purpose": "Directly add the camera to Home Assistant for live view and supported entities while keeping recording on camera microSD, Home Hub, NVR, or other supported storage.",
      "required_integration_path": "Add the camera directly to Home Assistant through the official Reolink integration; RTSP/ONVIF local path is also available; use Home Assistant Green for orchestration/control/dashboard only; keep storage on the camera, Home Hub, NVR, NAS, or other supported recording architecture.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "Plug-in wired power",
      "network_type": "Wi-Fi 6",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "medium",
      "commercial_suitability": "medium",
      "dashboard_implications": "Suitable for dashboard live view and supported entities in Home Assistant; Green is not the recorder.",
      "automation_implications": "Useful for motion/person/vehicle-triggered automations where exposed; panoramic presentation may differ from the Reolink app/client.",
      "quote_line_item_role": "Direct local Wi-Fi dual-lens camera",
      "required_bundled_accessories": [
          "Power adapter",
          "Stable Wi-Fi coverage",
          "Local admin credentials"
      ],
      "optional_accessories": [
          "microSD card",
          "Reolink Home Hub",
          "Reolink NVR",
          "NAS or other supported storage"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "Dual-lens panoramic presentation and motion-track style features should be treated as conditional until WNYHS validation confirms exact HA behavior."
      ],
      "installer_notes": [
          "Initialize camera, set local credentials, confirm Wi-Fi signal quality, and update firmware before Home Assistant onboarding.",
          "Validate stream choice, event latency, and storage path during commissioning."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some advanced panoramic configuration.",
          "Document selected local storage path and customer network dependencies."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate Home Assistant onboarding and stable live stream.",
          "Validate motion/person/vehicle entity exposure and practical panoramic dashboard presentation.",
          "Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/product/reolink-duo-3-wifi/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm panoramic presentation and advanced feature behavior under current production firmware."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  },
  {
      "part_id": "reolink-elite-wifi",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "Elite Series",
      "product_name": "Reolink Elite WiFi",
      "exact_model": "Elite WiFi",
      "sku": "Elite WiFi",
      "device_class": "wifi_camera",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "yes",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "no",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "Wide-area perimeter awareness with dual-lens local-first coverage.",
      "internal_wnyhs_purpose": "Directly add the camera to Home Assistant for live view and supported entities while keeping recording on camera microSD, Home Hub, NVR, or other supported storage.",
      "required_integration_path": "Add the camera directly to Home Assistant through the official Reolink integration; RTSP/ONVIF local path is also available; use Home Assistant Green for orchestration/control/dashboard only; keep storage on the camera, Home Hub, NVR, NAS, or other supported recording architecture.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "Plug-in wired power",
      "network_type": "Wi-Fi 6",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "medium",
      "commercial_suitability": "medium",
      "dashboard_implications": "Suitable for dashboard live view and supported entities in Home Assistant; Green is not the recorder.",
      "automation_implications": "Useful for motion/person/vehicle-triggered automations where exposed; panoramic presentation may differ from the Reolink app/client.",
      "quote_line_item_role": "Direct local Wi-Fi dual-lens camera",
      "required_bundled_accessories": [
          "Power adapter",
          "Stable Wi-Fi coverage",
          "Local admin credentials"
      ],
      "optional_accessories": [
          "microSD card",
          "Reolink Home Hub",
          "Reolink NVR",
          "NAS or other supported storage"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "Dual-lens panoramic presentation should be treated as conditional until WNYHS validation confirms exact HA behavior."
      ],
      "installer_notes": [
          "Initialize camera, set local credentials, confirm Wi-Fi signal quality, and update firmware before Home Assistant onboarding.",
          "Validate stream choice, event latency, and storage path during commissioning."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some advanced panoramic configuration.",
          "Document selected local storage path and customer network dependencies."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate Home Assistant onboarding and stable live stream.",
          "Validate motion/person/vehicle entity exposure and practical panoramic dashboard presentation.",
          "Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/product/elite-wifi/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm panoramic presentation and advanced feature behavior under current production firmware."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  },
  {
      "part_id": "reolink-trackmix-wifi",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "TrackMix Series",
      "product_name": "Reolink TrackMix WiFi",
      "exact_model": "TrackMix WiFi",
      "sku": "TrackMix WiFi",
      "device_class": "wifi_camera",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "yes",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "no",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "Driveway and yard awareness with local-first dual-view auto-tracking coverage.",
      "internal_wnyhs_purpose": "Directly add the camera to Home Assistant for live view and supported entities while keeping recording on camera microSD, Home Hub, NVR, or other supported storage.",
      "required_integration_path": "Add the camera directly to Home Assistant through the official Reolink integration; RTSP/ONVIF local path is also available; use Home Assistant Green for orchestration/control/dashboard only; keep storage on the camera, Home Hub, NVR, NAS, or other supported recording architecture.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "Plug-in wired power",
      "network_type": "Wi-Fi 6",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "medium",
      "commercial_suitability": "medium",
      "dashboard_implications": "Suitable for dashboard live view and supported entities in Home Assistant; Green is not the recorder.",
      "automation_implications": "Useful for motion/person/vehicle-triggered automations where exposed; auto-tracking and PTZ presentation may require app/client setup.",
      "quote_line_item_role": "Direct local Wi-Fi tracking camera",
      "required_bundled_accessories": [
          "Power adapter",
          "Stable Wi-Fi coverage",
          "Local admin credentials"
      ],
      "optional_accessories": [
          "microSD card",
          "Reolink Home Hub",
          "Reolink NVR",
          "NAS or other supported storage"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "Auto-tracking, PTZ presets, and dual-view presentation should be treated as conditional until WNYHS validation confirms exact HA behavior."
      ],
      "installer_notes": [
          "Initialize camera, set local credentials, confirm Wi-Fi signal quality, and update firmware before Home Assistant onboarding.",
          "Validate stream choice, event latency, tracking behavior, and storage path during commissioning."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some advanced PTZ/tracking configuration.",
          "Document any PTZ presets or tracking logic that are configured outside Home Assistant."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate Home Assistant onboarding and stable live stream.",
          "Validate motion/person/vehicle entity exposure plus practical PTZ/tracking behavior.",
          "Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/product/reolink-trackmix-wifi/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm PTZ/tracking presentation and advanced feature behavior under current production firmware."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  },
  {
      "part_id": "reolink-trackflex-floodlight-wifi",
      "brand": "Reolink",
      "manufacturer": "Reolink",
      "product_line": "TrackFlex Series",
      "product_name": "Reolink TrackFlex Floodlight WiFi",
      "exact_model": "TrackFlex Floodlight WiFi",
      "sku": "TrackFlex Floodlight WiFi",
      "device_class": "wifi_floodlight_camera",
      "hard_gate_result": "PASS",
      "qualification_status": "conditional",
      "master_hardware_list_action": "conditional_catalog_candidate",
      "inventory_classification": "conditional_stock_candidate",
      "home_security": "yes",
      "aging_in_place": "yes",
      "home_automation": "yes",
      "home_safety_environmental": "no",
      "home_lighting": "yes",
      "approved_for_standard_use": "no",
      "approved_for_conditional_use": "yes",
      "field_test_required": "no",
      "research_pending": "no",
      "custom_pass_through_only": "no",
      "do_not_use": "no",
      "customer_facing_outcome": "Perimeter video awareness with deterrence lighting and local-first PTZ coverage.",
      "internal_wnyhs_purpose": "Directly add the camera to Home Assistant for live view and supported entities while keeping recording on camera microSD, Home Hub, NVR, or other supported storage.",
      "required_integration_path": "Add the camera directly to Home Assistant through the official Reolink integration; RTSP/ONVIF local path is also available; use Home Assistant Green for orchestration/control/dashboard only; keep storage on the camera, Home Hub, NVR, NAS, or other supported recording architecture.",
      "home_assistant_compatibility_level": "native_or_official",
      "ha_green_suitability": "Suitable as orchestration/control/dashboard layer only; not primary 24/7 recording.",
      "vendor_app_role": "Initial setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.",
      "cloud_role": "Optional remote access or optional vendor cloud services only; not required for the core local WNYHS outcome.",
      "subscription_role": "No required subscription for the core WNYHS outcome.",
      "power_type": "Wired floodlight power",
      "network_type": "Wi-Fi",
      "battery_dependency": "no",
      "hub_bridge_dependency": "no",
      "retrofit_suitability": "medium",
      "commercial_suitability": "medium",
      "dashboard_implications": "Suitable for dashboard live view and supported entities in Home Assistant; Green is not the recorder.",
      "automation_implications": "Useful for motion/person/vehicle-triggered automations; PTZ, tracking, and floodlight control parity should be validated on deployed firmware.",
      "quote_line_item_role": "Direct local Wi-Fi PTZ floodlight camera",
      "required_bundled_accessories": [
          "Hardwired floodlight power",
          "Stable Wi-Fi coverage",
          "Local admin credentials"
      ],
      "optional_accessories": [
          "microSD card",
          "Reolink Home Hub",
          "Reolink NVR",
          "Compatible lighting automation logic in Home Assistant"
      ],
      "customer_disclosure_notes": [
          "Home Assistant Green is the control/dashboard layer only, not the primary 24/7 recorder.",
          "PTZ, floodlight control, and advanced panoramic/tracking features should be treated as conditional until WNYHS validation confirms exact HA behavior."
      ],
      "installer_notes": [
          "Verify electrical box suitability, Wi-Fi signal quality, local credentials, and firmware before Home Assistant onboarding.",
          "Validate stream choice, event latency, tracking behavior, floodlight behavior, and storage path during commissioning."
      ],
      "support_notes": [
          "Vendor app/client remains the path for setup, firmware updates, troubleshooting, and some advanced PTZ/floodlight/tracking configuration.",
          "Document whether floodlight modes and tracking behaviors are managed in Home Assistant or retained in the Reolink app/client."
      ],
      "warranty_notes": [
          "Verify current official Reolink warranty terms at purchase time."
      ],
      "stocking_recommendation": "conditional_stock_candidate",
      "validation_status": "needs_validation",
      "required_wnyhs_validation_tests": [
          "Validate Home Assistant onboarding and stable live stream.",
          "Validate motion/person/vehicle entity exposure plus practical PTZ/tracking/floodlight behavior.",
          "Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path."
      ],
      "evidence_confidence": "high",
      "primary_evidence_sources": [
          "https://reolink.com/product/trackflex-floodlight-wifi/",
          "https://www.home-assistant.io/integrations/reolink",
          "https://support.reolink.com/articles/44904170792345-Reolink-Home-Assistant-Integration/"
      ],
      "missing_evidence": [
          "WNYHS bench validation not yet completed.",
          "Confirm PTZ/tracking/floodlight presentation and advanced feature behavior under current production firmware."
      ],
      "source": "official_reolink_and_home_assistant_verification_2026-06-18",
      "record_status": "needs_review",
      "last_evaluated_date": "2026-06-18",
      "next_review_date": "2026-09-18"
  }
];
export const masterParts = catalogMasterParts;

export const catalogSolutionPartMappings: CatalogSolutionPartMapping[] = [];
export const catalogPackagePartMappings: CatalogPackagePartMapping[] = [];
export const catalogHardwareLabelPartMappings: CatalogHardwareLabelPartMapping[] = [];

export const masterPartsByPartId: ReadonlyMap<string, CatalogMasterPart> = new Map(
  catalogMasterParts.map((part) => [part.part_id, part]),
);

export const getCatalogMasterPartById = (partId: string): CatalogMasterPart | undefined => masterPartsByPartId.get(partId);

export const getCatalogSolutionPartMapping = (solutionId: string): CatalogSolutionPartMapping | undefined =>
  catalogSolutionPartMappings.find((mapping) => mapping.solutionId === solutionId);

export const getCatalogPackagePartMapping = (packageId: string): CatalogPackagePartMapping | undefined =>
  catalogPackagePartMappings.find((mapping) => mapping.packageId === packageId);

export const getCatalogHardwareLabelPartMapping = (hardwareLabelOrType: string): CatalogHardwareLabelPartMapping | undefined =>
  catalogHardwareLabelPartMappings.find((mapping) => mapping.hardwareLabelOrType === hardwareLabelOrType);
