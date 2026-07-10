# HA-BACKUP001 - Customer Home Assistant Backup Extraction Standard - REV01

Status: Active standard
Customer-facing: No
Implementation authority: No
Task ID: HA-BACKUP001-CUSTOMER-BACKUP-EXTRACTION-STANDARD-001
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## 1. Purpose

This standard defines how WNYHS extracts safe, useful customer Home Assistant support data from backup evidence and stores repo-safe artifacts for future support work.

The goal is to keep enough sanitized Home Assistant support data in the repository to support future dashboard, automation, notification, camera, sensor, lock, doorbell, integration, and configuration work without relying on raw backup archives or chat memory.

This standard does not extract from a live backup, create scripts, move existing BKLF files, change Home Assistant YAML, modify live Home Assistant systems, or authorize dashboard, automation, notification, runtime, website, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, or secret changes.

## 2. Core Rules

Raw Home Assistant backups must never be committed.

Validation phrase: raw Home Assistant backups must never be committed.

Raw backups may contain secrets, credentials, auth data, cloud tokens, databases, logs, customer-sensitive device data, mobile app identifiers, account references, encryption material, private URLs, and other material that does not belong in the repository.

Only sanitized, support-useful derivatives may be stored.

The repository support dataset should contain enough customer-specific Home Assistant context to support future:

- customer dashboards
- desktop or browser dashboards
- automations
- notifications
- cameras and doorbells
- sensors
- locks and access controls
- helpers and controls
- integrations
- system health review
- configuration changes
- customer handoff and service documentation

Each major install or change sequence should end with a fresh backup and a sanitized repo-support-data refresh.

## 3. Existing BKLF Reference

BKLF currently uses existing paths such as `home-assistant/bklf/` for source-controlled Home Assistant dashboard, package, configuration, and theme files, and `docs/home-assistant/bklf/inventory/` for sanitized inventory documentation.

This standard does not move, rename, or restructure those existing BKLF files.

The BKLF sanitized inventory folder is an example of the type of repo-safe derivative data this standard expects. Future migration into a different customer folder shape requires a separate bounded task.

## 4. Extraction Categories

### A. Customer HA Inventory

Extract and store sanitized inventory for:

- areas
- devices
- entities
- integrations
- entity IDs
- device names
- manufacturer and model where safely available
- battery entities
- diagnostic entities when useful
- disabled entities
- device-to-area mapping
- entity-to-device mapping

Entity IDs are allowed in technical registers. They should not be used as customer-facing dashboard labels unless no customer-facing label exists and a later dashboard task explicitly approves the wording.

### B. Dashboards

Extract and store:

- customer mobile dashboard YAML
- desktop or browser dashboard YAML
- dashboard route and config registration
- dashboard entity references
- theme references
- dashboard validation notes

Dashboard extracts should distinguish customer-facing views from installer, service, or diagnostic views.

### C. Themes / Visual System

Extract and store:

- customer theme YAML
- light, dark, and auto support notes
- customer-safe color variables
- Home Assistant native input readability variables
- known theme limitations

Theme data must not include secret material, private URLs, customer credentials, or unreviewed visual claims.

### D. Automations

Extract and store:

- automation YAML or package automation files
- automation ID and name
- trigger summary
- condition summary
- action summary
- enabled or disabled status
- helper dependencies
- notification dependencies
- dashboard and device dependencies

Automation summaries should document customer outcomes and support dependencies without exposing secrets or private customer data.

### E. Notifications

Extract and store:

- notify services
- Companion app devices
- device trackers
- person and user mappings
- notify groups
- notification automations
- actionable notification templates
- persistent notification scaffolds
- quiet-hours or escalation helpers if present

Companion app and mobile device data must be reduced to support-safe notify/entity names. Do not store unnecessary mobile device identifiers.

### F. Helpers / Controls

Extract and store:

- input_boolean
- input_select
- input_number
- timer
- schedule
- counter
- group
- template sensors
- scenes and scripts where relevant

Helpers should be mapped to dashboards, automations, notifications, and customer-facing controls when useful.

### G. Cameras / Doorbells

Extract and store:

- camera entities
- visitor, person, motion, vehicle, and pet sensors
- recording switches
- push-notification switches
- siren and chime entities
- speak and doorbell volume entities
- snapshot-capable camera entities
- two-way talk support notes where safely known

Do not store camera credentials, private stream URLs, account credentials, or raw logs.

### H. Locks / Access

Extract and store:

- lock entities
- battery entities
- jammed status
- tamper status
- replace-battery indicators
- node status
- related door or contact sensor pairing
- lock and unlock dashboard placement
- notification placement

Never store programming codes, security codes, pairing codes, PIN values, or customer credential material.

### I. Sensors

Extract and store:

- door contacts
- window contacts
- motion sensors
- leak sensors
- environmental sensors
- battery entities
- status entities
- area assignments
- customer-facing names

Sensor registers should separate customer-visible status from diagnostic, firmware, signal, and integration-created noise.

### J. System Health / Support

Extract and store:

- Home Assistant version if safely available
- integrations list
- Zigbee and Z-Wave controller presence
- unavailable critical entities
- backup timestamp and manifest only
- recorder or storage health if safely extractable
- known issues and support notes

System health extracts should not include raw databases, logs, private URLs, tokens, auth data, or account credentials.

### K. Files Copied For Support

Repo-safe copied support files may include:

- dashboard YAML
- theme YAML
- package YAML
- selected configuration snippets
- sanitized registries and manifests

Do not copy auth, cloud, database, log, credential, token, backup archive, or raw storage files into the repository.

## 5. Never Store in Repo

Do not store:

- raw `.tar` backups
- `.storage/auth`
- auth providers
- refresh or access tokens
- passwords
- Nabu Casa or cloud tokens
- encryption keys
- backup keys
- credential files
- `secrets.yaml`
- raw database files
- recorder database dumps
- logs with sensitive material
- exact lock programming codes
- exact lock security codes
- exact pairing codes
- customer Wi-Fi passwords
- customer account credentials
- private keys or certificates
- unredacted mobile device identifiers beyond support-safe notify/entity names
- anything unnecessary for dashboard, support, or configuration work

If a file is useful only because it contains credential, auth, cloud, raw database, log, or backup material, it must not be committed.

## 6. Recommended Repo Shape

Future customer Home Assistant support data should use a repo shape like this unless an existing customer folder already has a governed convention.

```text
home-assistant/customers/<customer-slug>/
  README.md
  configuration/
    configuration-summary.md
    safe-configuration-snippets.yaml
  dashboards/
    <customer>-main-dashboard.yaml
    <customer>-desktop-dashboard.yaml
  themes/
    wnyhs-dark.yaml
    wnyhs-light.yaml
  packages/
    notifications.yaml
    security.yaml
    helpers.yaml
  sanitized/
    area-register.md
    device-register.md
    entity-register.md
    integration-register.md
    automation-register.md
    notification-register.md
    helper-register.md
    camera-register.md
    lock-register.md
    sensor-register.md
    system-health-summary.md
  manifests/
    backup-extraction-manifest.md
    last-known-live-state-summary.md
    validation-log.md
```

This shape is a future standard for new or migrated customer support datasets. It does not require moving existing BKLF files.

## 7. Refresh Cadence

Create a fresh backup and refresh sanitized repo support data:

- after initial bench setup
- after onsite pairing
- after dashboard changes
- after notification or automation changes
- after new hardware is added
- before customer handoff
- after a major support visit
- before major future repo-backed dashboard or automation work if repo data may be stale

If repo data is stale and no recent backup, manifest, or operator validation exists, Codex must treat the data as historical and ask for updated evidence before making live-current assumptions.

## 8. Extraction Manifest Requirements

Every extraction refresh must produce or update `backup-extraction-manifest.md`.

Required manifest fields:

- customer slug
- backup date/time
- extraction date/time
- operator
- source backup filename or reference, without exposing secrets
- files inspected
- files intentionally excluded
- extracted support artifacts
- changed entity summary
- changed device summary
- changed user or person summary
- changed notification summary
- known limitations
- validation performed
- confirmation that no raw backup or secret material was committed

The manifest is the source of truth for what was inspected, what was excluded, and how fresh the repo support dataset is.

## 9. Validation Rules

Before committing extracted support data, validate that:

- changed files were scanned for secret-like terms and private values
- no raw backup archive was added
- no `.storage/auth`, cloud token, database, or log file was added
- dashboards, themes, and packages parse when applicable
- sanitized registries contain no passwords, tokens, codes, private URLs, or credential values
- customer-facing labels are preserved where known
- raw entity IDs are limited to technical registers or YAML bindings, not customer-facing dashboard text
- extraction manifest exists
- changed files are limited to the approved customer support-data scope
- no live Home Assistant system was modified by the extraction task

Secret-term scans may contain policy text in standards or security-exclusion documents. A valid scan result must distinguish policy labels from committed secret values.

## 10. Codex Use Rules

Codex may use sanitized extracted data to:

- update dashboards
- update automations
- update notifications
- update entity registers
- create QA checklists
- generate customer handoff docs
- identify likely stale repo data

Codex must not:

- consume raw backups unless a task explicitly authorizes local analysis and forbids committing sensitive material
- commit raw backups
- expose secrets in summaries
- infer business or customer policy from raw data
- modify live Home Assistant directly
- assume repo data is live-current without operator-provided recent backup or validation evidence

Any task involving raw backup analysis must define allowed local handling, forbidden committed artifacts, validation, and closeout proof before work begins.

## 11. Relationship To Existing Standards

This standard complements:

- `docs/installer/INSTALL003_GOLDEN_HOME_ASSISTANT_BUILD_STANDARD_REV01.md`
- `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md`
- `docs/installer/INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md`
- `docs/installer/INSTALL008_HA_GREEN_BOOTSTRAP_STANDARD_REV01.md`
- `docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md`
- `docs/home-assistant/bklf/inventory/README.md`
- `docs/home-assistant/bklf/inventory/security-exclusions.md`

Those documents define baseline, dashboard, theme, bootstrap, automation, and BKLF-specific inventory posture. This document defines the repeatable backup extraction and sanitized support-data standard.

## 12. Protected-System Boundaries

This standard is documentation only.

It does not authorize:

- raw backup extraction
- live Home Assistant changes
- Home Assistant YAML changes
- dashboard implementation
- package implementation
- theme implementation
- automation implementation
- notification implementation
- source code changes
- website route changes
- UI component changes
- runtime/API changes
- HubSpot or CRM changes
- Stripe/payment changes
- scheduling changes
- Resend/email changes
- Cloudflare configuration changes
- environment or secret changes
- dependency or package-lock changes
- moving or renaming existing BKLF files

Future extraction, migration, dashboard, automation, notification, customer handoff, or support-data refresh work requires its own bounded task.
