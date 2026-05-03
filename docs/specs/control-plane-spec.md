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

