# HA-BACKUP001 - Customer Home Assistant Backup & Registry Extraction Standard - REV02

Status: Active standard

Customer-facing: No

Implementation authority: Evidence-handling governance only; live analysis or implementation requires a separate bounded task

Task ID: HA-BACKUP001-CUSTOMER-BACKUP-EXTRACTION-STANDARD-001

Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

Predecessor: `docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV01.md` (SUPERSEDED)

Canonical utility: `home-assistant/wnyhs/tools/wnyhs-ha-registry-export.sh`

Work order: `docs/codex/work-orders/DASH-GOV-REFRESH-001_WORK_ORDER_REV02.md`

## 1. Purpose and preserved safety contract

This standard preserves REV01's safe-backup and sanitized-support-data rules and adds the canonical WNYHS HA Registry Export workflow. It defines how temporary Home Assistant evidence becomes a sanitized, repo-safe derivative without treating raw backup or registry material as commit-ready.

This standard does not authorize live Home Assistant modification, backup restoration, dashboard binding, configuration changes, automation, notification, runtime, website, CRM, payment, scheduling, email, Cloudflare, dependency, environment, secret, merge, or deployment work.

## 2. Core rules

- Raw Home Assistant backups must never be committed.
- Raw registry exports are not automatically repo-safe and must never be committed merely because the approved script created them.
- Only task-authorized, reviewed, sanitized support derivatives may enter repository history.
- Temporary raw inputs remain outside the repository and are deleted or retained by the operator under the applicable evidence-handling policy after the bounded task.
- Evidence freshness, source, scope, unresolved mappings, and sanitization decisions are recorded.
- Historical evidence is never presented as current without recent operator-provided validation.
- Unknown never defaults to Normal, closed, locked, available, or safe.

## 3. Safe derivative categories

A bounded task may create sanitized derivatives for:

- customer inventory and capability status;
- dashboard structure, views, navigation, resources, and bindings;
- themes and visual configuration;
- automations, triggers, conditions, actions, dependencies, and support notes;
- notification definitions and safe destination metadata;
- helpers, scripts, scenes, and customer controls;
- camera/doorbell capability and dashboard placement without credentials or private streams;
- lock/access capability and binding status without codes or secrets;
- sensor/entity/area relationships and customer-safe labels;
- system health, unavailable/disabled items, backup freshness, and support exceptions; and
- reviewed configuration/YAML fragments required for support.

Derivatives include only fields needed for the authorized task. Customer-facing outputs omit raw IDs and technical details. Technical registers may retain a necessary identifier only when the work order explicitly requires it.

## 4. Material never stored in the repository

Do not commit or copy into repository history:

- raw `.tar` or other backup archives, encryption keys, or restore credentials;
- `.storage/auth`, auth providers, refresh/access tokens, user credentials, or mobile-app credentials;
- `secrets.yaml`, environment values, API keys, certificates, private keys, or passwords;
- `.storage/core.config_entries`, cloud/Nabu Casa account data or tokens;
- Home Assistant databases, recorder dumps, logs, traces, crash data, or history databases;
- camera credentials, private stream URLs, alarm/lock codes, access codes, or account identifiers;
- private URLs, customer communications, or unrelated customer/private data; or
- raw registry-export files produced by the canonical utility.

Secret-term scans must distinguish policy words in this standard from actual secret values.

## 5. Canonical WNYHS HA Registry Export

The operator-run utility is:

`home-assistant/wnyhs/tools/wnyhs-ha-registry-export.sh`

Invocation on a Home Assistant Terminal/SSH surface:

```sh
sh /config/wnyhs-ha-registry-export.sh PECKHAM
```

The repository copy may be placed temporarily on the HA instance under an operator-controlled path. The script defaults the configuration root to `/config`. Local validation may provide a second argument:

```sh
sh home-assistant/wnyhs/tools/wnyhs-ha-registry-export.sh TESTSITE /tmp/fake-ha-config
```

The script creates a timestamped directory beneath `<config-root>/wnyhs-export/` and copies source registries without modifying them.

Required inputs and predictable outputs:

| Source | Output |
| --- | --- |
| `.storage/core.entity_registry` | `<SITE>_ENTITY_REGISTRY.json` |
| `.storage/core.device_registry` | `<SITE>_DEVICE_REGISTRY.json` |
| `.storage/core.area_registry` | `<SITE>_AREA_REGISTRY.json` |

Optional inputs and outputs:

| Source | Output |
| --- | --- |
| `.storage/core.floor_registry` | `<SITE>_FLOOR_REGISTRY.json` |
| `.storage/core.label_registry` | `<SITE>_LABEL_REGISTRY.json` |

The export directory also contains `<SITE>_HA_EXPORT_MANIFEST.txt` with the site slug, UTC extraction timestamp, source config root, exported filenames, missing optional registries, and a warning that the files are registry snapshots rather than live-state evidence.

The utility:

- is read-only with respect to source registries;
- fails clearly when a required entity, device, or area registry is absent;
- never restarts Home Assistant;
- requires no Home Assistant access token; and
- never reads or copies auth, secrets, config entries, cloud data, databases, logs, credentials, keys, tokens, or backup archives.

Path language remains surface-specific: Terminal/SSH commonly uses `/config`; the File Editor visible root is described as `homeassistant/`, not as a visible `/config` folder; repository paths use `home-assistant/`.

## 6. Normal operator workflow

1. Operator runs the canonical script on the intended customer HA instance.
2. Operator supplies the resulting export files to ChatGPT/Codex as temporary input evidence.
3. The raw files remain non-commit-ready and outside repository history.
4. ChatGPT/Codex consumes them only under a bounded task/work order with exact local-handling and output scope.
5. The task produces only authorized sanitized property/device/entity models, fixtures, registers, or manifests.
6. Validation checks sanitization, freshness, unresolved mappings, secret/privacy exclusions, and customer-safe output.
7. Only sanitized derivative artifacts are committed. Raw attachments remain transient evidence.

## 7. Registry interpretation contract

- Active entity records come from `data.entities`.
- Deleted entity records are separate evidence and are never active installed entities.
- Active device records come from `data.devices`.
- Deleted device records are separate evidence.
- Area, floor, and label registries provide registry relationships only.
- `disabled_by`, `hidden_by`, entity category, platform, device ID, area ID, original name, and customer/user name are evidence fields.
- Disabled, deleted, hidden, or noisy diagnostic entities are classified and are not silently promoted to customer capability.
- Registry presence proves registration evidence, not current availability, current physical state, permission, or live capability.
- No lock/open/closed/motion/leak/camera/LIVE state may be inferred solely from registry files.
- No physical room, window, door, or device location may be invented from generic names.
- Unresolved mappings remain explicitly unresolved.
- Unique IDs, MAC addresses/connections, device identifiers, and raw technical identifiers are omitted from customer-facing output and sanitized derivatives by default.
- Evidence freshness and extraction timestamp are recorded.

Dashboard tasks map:

`raw registry evidence -> sanitized property/device/entity model -> semantic capability -> customer-safe dashboard fixture/binding`

## 8. Backup-derived workflow preserved from REV01

When a bounded task separately authorizes raw backup analysis, it must define allowed local handling, forbidden committed artifacts, exact extraction categories, cleanup, validation, and closeout proof before analysis begins.

Sanitized customer support data should be refreshed after major install/change sequences, before major dashboard/automation work when evidence may be stale, and after relevant device, entity, area, automation, integration, or dashboard changes. Each refresh maintains a sanitized extraction manifest with source date/reference, categories reviewed, files created/updated, exclusions, unresolved items, evidence freshness, and confirmation that no raw backup, export, or secret material was committed.

Existing sanitized BKLF inventory remains example evidence only. It does not authorize migration, generalization, or customer-specific implementation.

## 9. Validation

For the canonical utility:

- run `sh -n home-assistant/wnyhs/tools/wnyhs-ha-registry-export.sh`;
- test against a temporary fake config root with minimal mock registries;
- verify deterministic required and optional filenames;
- verify clear failure when required registries are missing;
- verify optional floor/label absence is recorded without failure;
- scan the utility for forbidden auth, secret, config-entry, cloud, database, log, credential, key, token, and backup source paths; and
- commit no output from the test.

For every derivative task:

- audit changed files and unexpected deletions;
- confirm no raw archive/export or forbidden storage path entered the repository;
- scan for actual secret/private values;
- confirm raw entity IDs are restricted to authorized technical artifacts and absent from customer UI;
- distinguish active, deleted, disabled, hidden, unresolved, simulated, and live-authoritative evidence;
- record freshness; and
- use `git diff --check` plus task-specific validation.

## 10. Codex and protected-system boundaries

Codex may use temporary raw inputs only when a bounded task explicitly authorizes local analysis and forbids their commit. It may not infer business policy, customer permission, current live state, or physical facts from registry/backup evidence.

This standard and utility do not authorize live HA writes, restarts, restore operations, configuration changes, entity renaming, dashboard registration, automations, customer communication, runtime/protected-system changes, merge, or deployment.
