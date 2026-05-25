# Control Plane Specification — LOCKED

Status: Locked / Approved

---

## Design Principles

- Single-dashboard control through Home Assistant
- Local-first execution
- No mandatory cloud dependencies
- Installer-grade reliability
- Minimal hardware, maximum longevity

---

## Required Control Plane

- Mini PC class host for Home Assistant
- Zigbee/Thread radio
- Z-Wave radio
- USB extension cables for radio reliability

---

## Explicitly Excluded From Default Control Plane

- Separate vendor hubs
- Cloud-only automation gateways
- Mandatory subscriptions
- Redundant controllers unless explicitly scoped

---

## Website Copy Boundary

Public site may describe this as a local-first, single-dashboard system.

Do not expose internal BOM-level details unless explicitly authorized.

## Home Assistant + Node-RED Automation Architecture Direction (ARCH001)

Status: Directional only / Not yet implemented

- Home Assistant remains the primary customer-facing platform for device integration, state visibility, dashboards, and simplified controls.
- Node-RED is an operator/infrastructure-facing advanced orchestration layer that may be added on top of Home Assistant for complex automation workflows.
- Customer-facing interaction remains in Home Assistant (dashboards, alerts, and guided controls); Node-RED flows are not a customer-facing surface.
- Phased adoption rule: initial deployments should use native Home Assistant automations first; introduce Node-RED only for bounded advanced needs.
- Advanced-only candidate use cases include after-hours logic, dwell detection, multi-condition orchestration, reusable automation packs, and future AI-assisted event workflows.
- Future local-first advanced stack candidates may include Home Assistant OS, Node-RED add-on, MQTT event transport, future Frigate/AI services, and local Mini PC infrastructure.
- Any implementation of Node-RED/MQTT/Frigate/AI orchestration requires its own bounded task-register entry and explicit approval before runtime changes.
- This direction does not imply Node-RED is currently deployed, required for all customers, or directly exposed to customers.

### Future bounded follow-up task candidates (documentation/planning only)

- MQTT event contract specification
- Automation event schema definition
- AI event pipeline contract for local-first workflows
- Notification escalation workflow contract
- Standardized Node-RED add-on/deployment baseline for advanced installs

