# GOVFOUND002 Approved Promotion Specification REV01.1 — Provenance and Fingerprint Record

Status: VERIFIED SOURCE AUTHORITY EVIDENCE

Task ID: `GOVFOUNDFREEZE001`

Operator approval date: `2026-07-25`

Verification timestamp: `2026-07-25T18:48:47.2773767-04:00`

## Source identity

- Original intake path: `C:\dev\wnyhomesecurity\.local-intake\Pasted markdown(16).md`
- Frozen repository path: `docs/governance/source-authority/GOVFOUND002_APPROVED_PROMOTION_SPEC_REV01_1.md`
- Byte size: `73785`
- SHA-256: `6ac70f8044704cb66fe6d92016ad52c70e80d6b4c6ed879e89a2e4c0e128524a`

## Verification method

1. Confirmed the intake source existed at the operator-authorized path.
2. Independently measured the source byte size with the Windows filesystem.
3. Independently calculated the source SHA-256 with PowerShell `Get-FileHash -Algorithm SHA256`.
4. Compared both values with the conditionally approved identity.
5. Copied the source to the approved repository path with a byte-preserving filesystem copy.
6. Measured the frozen copy byte size.
7. Calculated the frozen copy SHA-256.
8. Compared source and destination bytes directly with `System.Linq.Enumerable.SequenceEqual` over `System.IO.File.ReadAllBytes`.
9. Verified the staged Git blob byte size and SHA-256 independently from the working copy.
10. Bypassed the repository text filter for this frozen path after detecting normalization, then reverified the exact raw staged blob.

Verification result:

- Source byte size matched the approved value: `PASS`
- Source SHA-256 matched the approved value: `PASS`
- Frozen-copy byte size matched the source: `PASS`
- Frozen-copy SHA-256 matched the source: `PASS`
- Direct byte comparison: `IDENTICAL`
- Staged Git blob byte size and SHA-256 matched the source: `PASS`
- Staged Git blob object ID: `b4d8b071c868ad90fade50a6e9475b3588dde1cf`

## Integrity declaration

The frozen source was created without normalization, reformatting, line-ending conversion, content editing, encoding conversion, or other content modification.

The original intake file remained outside Git and unchanged.

## Authority boundary

The frozen copy and this provenance record establish the verified identity and repository lineage of the approved promotion source only.

The frozen copy does not itself authorize GOVFOUND002 execution.

They do not:

- create, activate, authorize, or execute GOVFOUND002;
- resolve the Authority and Systems of Record prerequisite;
- resolve the Business Bible blocker;
- approve a final GOVFOUND002 promotion path list;
- issue a final GOVFOUND002 work order;
- authorize merge, deployment, runtime changes, or customer-facing changes.

GOVFOUND002 remains:

> **PROPOSED — NOT AUTHORIZED — DO NOT EXECUTE**

## Source lineage

- `GOVFOUNDRECON001` documented the missing prerequisite and target-path blockers.
- PR [#533](https://github.com/buffalonychris/wnyhomesecurity/pull/533) merged GOVFOUNDRECON001 into `main` at commit `a2bdac46369167705ec9947bb0fc68045642ef19`.
- The operator decision dated `2026-07-25` conditionally approved the recorded candidate identity for independent verification.
- `GOVFOUNDFREEZE001` independently verified that identity and created the byte-identical frozen repository source.

## Exact-source validation exception

The frozen source preserves the operator-approved bytes exactly, including its original CRLF line endings. Staging through the default Git text filter changed the blob and was rejected. The exact raw blob was staged without filters and independently verified at 73785 bytes with the approved SHA-256.

A full `git diff --check` reports the preserved carriage-return bytes as trailing whitespace. The frozen source is therefore excluded only from whitespace-style validation. The other five authored files must pass `git diff --check`. The frozen source remains controlled by byte-size, SHA-256, direct source/destination comparison, and staged-blob verification.
