# BKLF Inventory Security Exclusions

Task ID: BKLF-HA-INVENTORY-001
Inventory version: REV01

## Do Not Commit Or Reconstruct

The following material must not be committed, reconstructed, summarized with private values, or placed in future repository docs:

- Raw Home Assistant backup archives.
- `secrets.yaml`.
- Tokens.
- Passwords.
- Auth files.
- Cloud credentials.
- Nabu Casa credentials.
- Encryption keys.
- Private keys.
- `.storage/auth*`.
- `.storage/cloud`.
- `.cloud/*`.
- Raw `.storage` auth or cloud files.
- `home-assistant_v2.db*`.
- `zigbee.db*`.
- Databases.
- Logs.
- Trace payloads unless separately sanitized.
- Private URLs.
- Environment variable values.

## Allowed In This Inventory

This folder may contain only sanitized documentation and sanitized CSV extracts that exclude credentials, raw auth/cloud files, databases, logs, backup archives, private keys, and token values.

## Handling Notes

- Entry IDs in `data/integrations.csv` are redacted and must remain redacted.
- Remote access was referenced only as a source-session fact; no remote URL or credential is included.
- HACS repositories, Home Assistant versions, add-on archive names, dashboard routes, entity IDs, device names, integration titles, and restore-state summaries are documented because they are present in the sanitized source packet.
- Do not infer missing network details, credentials, URLs, runtime state, or customer-private details from the inventory.
