# WNYHS BOKS Work Artifact Synchronization and Google Drive Information Architecture REV01

## 1. Document control

- **Status:** ACTIVE ON MERGE
- **Task ID:** BOKSFOUND001
- **Owner:** Project Governance / Business Operating Knowledge System
- **Primary authority:** BOKS Work artifact mirror eligibility, synchronization controls, and recommended Google Drive information architecture
- **Implementation authority:** None
- **Google Drive authority:** Recommendation only; no external mutation
- **Operator authorization date:** 2026-07-26
- **Revision:** REV01
- **Predecessor:** None
- **Successor:** None

## 2. Mirror principle

Completed Work artifacts must be evaluated for BOKS publication, but they are not automatically mirrored.

Mirror when the artifact has durable independent value in:

- planning;
- business direction;
- operations;
- discovery;
- requirements;
- architecture;
- decisions;
- reusable processes; or
- cross-system understanding.

Normally keep repository-only:

- source code;
- generated builds;
- routine MTR changes;
- Document Catalog and Markdown Manifest updates;
- low-value administrative records;
- transient validation output;
- secrets and sensitive configuration; and
- documents whose repository path is already the practical human surface.

## 3. Authority header

Every repository-derived Drive mirror must display:

```text
Authority status: REPOSITORY MIRROR
Canonical repository path:
Source task:
Source commit:
Source pull request:
Source revision:
Last synchronized:
Implementation status:
Mirror warning: This copy does not override the repository source.
```

If the canonical source changes, the mirror is `STALE` until resynchronized.

## 4. Synchronization lifecycle

```text
Artifact completed and merged
→ mirror eligibility review
→ operator approval
→ destination and object ID assigned
→ Drive mirror created
→ manifest entry created/updated
→ source commit and PR verified
→ mirror marked CURRENT
→ source-change monitoring or periodic review
→ resynchronize, supersede, or archive
```

No automatic write is authorized by this document.

## 5. Revision and resynchronization

- repository revision and Drive revision must be visible;
- content changes require a new sync record;
- administrative formatting may not hide semantic drift;
- a mirror must never silently become editable authority;
- conflicting edits in a mirror are captured as candidate evidence and routed to the repository owner;
- a renamed/moved canonical source updates the manifest and mirror header;
- a superseded source points to its successor;
- resync records task/operator, date, source commit/PR, and result.

## 6. Recommended Drive structure

```text
WNY Home Security Knowledge Base
├── 00 - BOKS Control
│   ├── Standards and Rules
│   ├── Object Templates
│   └── BOKS Master Manifest
├── 01 - Work Artifact Mirrors
│   ├── Website Program
│   │   └── WEBBETADISC001
│   └── Other Approved Programs
├── 02 - Knowledge Objects
│   ├── Decisions
│   ├── Capabilities
│   ├── Processes
│   ├── Architecture References
│   ├── Ideas
│   ├── Resources
│   ├── Field Knowledge
│   ├── Artifacts
│   └── Requirements Risks and Questions
├── 03 - Restricted Knowledge
│   ├── Customer Restricted
│   ├── Vendor and Commercial Restricted
│   └── Employee Restricted
└── 04 - Archived and Superseded
```

The structure uses stable object type, not lifecycle or implementation status, as the placement rule. State, topic, systems, and relationships belong in metadata and the manifest.

## 7. Provisional structure disposition

| Current provisional item | Recommendation | Reason |
| --- | --- | --- |
| `WNY Home Security Knowledge Base` | Retain root name pending operator confirmation | Clear business scope |
| `00 - KB Control` | Rename to `00 - BOKS Control` | Align canonical system name |
| `01 - Work Artifacts` | Rename to `01 - Work Artifact Mirrors` | Make non-authoritative mirror posture explicit |
| `Website Program/WEBBETADISC001` | Retain under Work Artifact Mirrors | Stable task/program placement |
| `02 - Extracted Knowledge` | Rename to `02 - Knowledge Objects` | Approved objects are not permanently “extracted” |
| `Decisions` | Retain | Maps to `DEC` |
| `Modules` | Rename to `Capabilities` | Covers modules, features, and experiences without extra type |
| `Processes and SOPs` | Rename to `Processes` | SOP remains subtype |
| `Architecture and Standards` | Rename to `Architecture References` | Avoid parallel authority |
| `03 - Knowledge Categories` | Retire after governed migration | Duplicates type/status organization |
| `Implemented Systems` | Replace with manifest view/filter | Implementation status is metadata |
| `Planned Modules` | Replace with manifest view/filter | Lifecycle/implementation state must not move files |
| `Business Ideas` | Move to `02 - Knowledge Objects/Ideas` | Object type is stable |
| `04 - Archived and Superseded` | Retain | Stable inactive lineage area |

## 8. Provisional control-file disposition

| Provisional Drive file | Recommendation |
| --- | --- |
| Knowledge Management Standard | Reconcile against repository BOKS charter/object standards; later retain only as a clearly labeled mirror or retire |
| KB Purpose and Rules | Consolidate into the charter mirror; avoid parallel rules |
| KB Extraction Prompt | Retain as a future operational prompt/template subordinate to the repository extraction standard |
| Work Artifact Sync Standard | Replace with or label as a mirror of this repository owner |
| KB Master Manifest | Convert to the governed Sheet schema only under BOKSMANIFEST001 |

The existing files remain provisional evidence. This task does not inspect, rename, move, edit, or delete them.

## 9. Object placement

- One canonical location per object.
- Do not copy an object into topic and status folders.
- Use manifest views for topic, lifecycle, implementation, website, system, customer stage, and owner.
- Related objects link by stable ID.
- Restricted objects use access-controlled placement and minimal manifest exposure.
- Superseded/archived objects preserve ID and successor lineage.

## 10. Privacy and access

- `PUBLIC`: safe for public sharing only after customer-facing approval.
- `INTERNAL`: ordinary internal business knowledge.
- `CONFIDENTIAL`: limited business, pricing, vendor, or employee material.
- `RESTRICTED`: sensitive customer/system material requiring explicit access.

Secrets do not belong in any ordinary folder. Use the correct secret manager or protected system of record.

Folder permission groups, individual access, external sharing, export policy, retention, and backup require a separate operator-approved Drive task.

## 11. Manual approval requirements

Operator approval is required before:

- normalizing existing Drive structure;
- creating native templates or the Sheet manifest;
- moving or retiring provisional files;
- mirroring a repository artifact;
- changing privacy/access classification;
- synchronizing a stale mirror;
- promoting mirror edits back into the repository; or
- automating any Drive operation.

## 12. Future task boundaries

Provisional candidates:

- `BOKSDRIVE001` — Normalize Google Drive BOKS Structure
- `BOKSTEMPLATE001` — Create Native Google Doc Object Templates
- `BOKSMANIFEST001` — Configure BOKS Master Manifest
- `BOKSSYNC001` — Mirror WEBBETADISC001 Artifacts

These are non-authoritative candidates. BOKSFOUND001 does not create, activate, or execute them.
