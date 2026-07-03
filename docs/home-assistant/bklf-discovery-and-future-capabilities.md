# BKLF Discovery and Future Capabilities

Status: Active proposal-support documentation
Customer: Brian K. Lewis Funeral Home
Scope: Discovery items, optional future capabilities, and proposal-safe framing

---

## 1. Purpose

This document records Brian K. Lewis Funeral Home Home Assistant discovery items and optional future capabilities for future proposal support.

It separates installed system facts from proposed enhancements. It does not authorize live Home Assistant changes, website changes, HubSpot changes, Stripe/payment changes, scheduling changes, API/backend changes, Cloudflare configuration changes, dependency changes, credentials, or environment file changes.

## 2. Discovery Items Still Open

Open discovery and verification items:

- Final customer mobile user / owner account setup.
- Final `notify.mobile_app_*` service name, recorded privately outside the repository.
- Second Kwikset/Home Connect 620 front double-door lock pairing.
- C13/C14 final placement or continued deferral decision.
- Camera capability matrix for each Reolink device.
- Two-way audio action behavior and whether the customer should use Home Assistant or the Reolink app for that action.
- Spotlight/floodlight entity confirmation, if supported by the actual camera hardware and integration.
- Cloudflare Tunnel implementation.
- Formal customer remote URL handoff using `bklewis.remote.wnyhomesecurity.com`.
- Backup/export handoff process.
- Final owner training.
- Final mobile dashboard review on the customer's device.
- Final office desktop dashboard review.

## 3. Optional Future Capabilities

Optional future capabilities that can be proposed only as enhancements, not as active current-system features:

- Lighting controls.
- Ooma/VOIP integration discovery.
- HVAC integration discovery.
- Mr. Dombrowski as HVAC contact placeholder pending customer/vendor confirmation.
- After-hours person-detection notifications.
- Doorbell visitor notifications.
- Lock/unlock workflows.
- Customer mobile dashboard.
- Office desktop dashboard.
- Dark/light theme system.
- Premium WNYHS dashboard design system.
- Front double-door Kwikset/Home Connect 620 lock integration after pairing and testing.
- Additional contact sensors for deferred window/door coverage.
- Future impact/shock sensors for fixed picture windows.

## 4. Proposal-Safe Language

Use conservative proposal language:

- "Can be configured" for optional Home Assistant behavior that is technically feasible but not yet active.
- "Planned" for items already identified but not paired, tested, or customer-approved.
- "Available if supported by device/integration" for camera, lock, VOIP, HVAC, lighting, and entity-specific capabilities.
- "Requires customer approval" for any added hardware, remote access, account setup, or paid third-party service.
- "Requires final hardware/network verification" for cameras, locks, Cloudflare Tunnel, VOIP, HVAC, lighting, and notification behavior.
- "Customer-owned third-party service" when describing services owned or billed outside WNYHS-installed hardware.
- "Local-first Home Assistant system" when describing the active system baseline.

## 5. Forbidden Language

Do not imply:

- A 24/7 staffed response-center service.
- Public-safety agency response.
- Emergency-response handling.
- Outcome promises for detection, prevention, or results.
- Unsupported VOIP, HVAC, or lighting integrations are active.
- Future camera light controls, two-way audio controls, or advanced detection controls are active before supported entities are confirmed.
- The future front double-door lock is active before it is paired and tested.
- Deferred sensors are failures.

## 6. Future Proposal Framing

Future proposals should separate these sections:

- Installed system: HA Green, radios/controllers, doorbell, parking-lot camera, South Entrance lock, active contact sensors, active motion sensors, current dashboard, and temporary remote access posture.
- Approved but deferred items: C13/C14, additional operable-window contacts, fixed picture window future sensors, and second front double-door lock.
- Discovery items: mobile account setup, notify service, camera capability matrix, Cloudflare Tunnel, customer remote URL, backup/export, and owner training.
- Optional expansion: lighting, VOIP/Ooma, HVAC, after-hours notifications, doorbell notifications, lock/unlock workflows, mobile/desktop dashboard refinements, and premium dashboard design.
- Dependencies: customer approval, hardware availability, network readiness, vendor/integration support, third-party service ownership, and final onsite validation.

Proposal language should make clear that customer-owned services, vendor accounts, phones, network equipment, and third-party subscriptions are separate from WNYHS-installed components unless specifically included in an approved proposal.

## 7. Recommended Next Proposal Sections

Recommended proposal section structure:

- Current System Addendum.
- Optional Expansion Package.
- Lighting Control Add-On.
- VOIP/Ooma Integration Discovery.
- HVAC Integration Discovery.
- Remote Access and Support Model.
- Dashboard Experience Upgrade.

Each section should include:

- Current status.
- Proposed addition.
- Required customer approval.
- Hardware/network/vendor dependency.
- Testing requirement.
- What is not included unless separately approved.

## 8. Customer Approval Gates

Additional customer approval is required before:

- Adding or relocating hardware.
- Treating deferred sensors as active.
- Pairing and enabling the second front double-door lock.
- Enabling customer mobile app notifications.
- Implementing Cloudflare Tunnel and formal customer remote URL access.
- Adding lighting, VOIP/Ooma, HVAC, or theme/design upgrades.
- Representing any optional capability as active in customer-facing material.

## 9. Hardware / Network / Vendor Confirmation Gates

Final verification is required for:

- Reolink camera entity support.
- Two-way communication path.
- Any spotlight/floodlight controls.
- Z-Wave lock inclusion and status entities.
- Mobile app notify service.
- Cloudflare Tunnel network path.
- Customer phone access and account ownership.
- VOIP/Ooma integration feasibility.
- HVAC integration feasibility and vendor boundaries.
- Lighting controller/device compatibility.

## 10. Documentation Boundary

This document supports proposal language and customer communication. It does not update live Home Assistant configuration, enable automations, change entity IDs, activate deferred devices, create customer accounts, configure Cloudflare, change DNS, add integrations, or create a customer proposal by itself.
