# WNYHS BOKS WEBBETADISC001 Mirroring Plan REV01

## 1. Document control

- **Status:** PROPOSED — EXTERNAL SYNC NOT AUTHORIZED
- **Task ID:** BOKSFOUND001
- **Owner:** Project Governance / Business Operating Knowledge System
- **Document type:** Work artifact mirroring plan
- **Implementation authority:** None
- **Google Drive authority:** None
- **Source task:** WEBBETADISC001
- **Source commit:** `d4adc0a2968385dc8a29afe2532c1641d20be047`
- **Source pull request:** `#539`
- **Revision:** REV01

## 2. Decision

Recommend mirroring the five canonical WEBBETADISC001 discovery documents after:

- this BOKS foundation is merged;
- the Master Manifest and native Drive structure are separately configured;
- the operator authorizes BOKSSYNC001; and
- source commit/revision identity is reverified.

Do not mirror:

- `docs/DOCUMENT_CATALOG.md`;
- `docs/MARKDOWN_MANIFEST.md`;
- routine MTR changes; or
- the bounded work order by default.

## 3. Common destination and authority header

Recommended destination:

```text
WNY Home Security Knowledge Base
└── 01 - Work Artifact Mirrors
    └── Website Program
        └── WEBBETADISC001
```

Every mirror must state:

- `Authority status: REPOSITORY MIRROR`;
- canonical repository path;
- source task `WEBBETADISC001`;
- source commit `d4adc0a2968385dc8a29afe2532c1641d20be047`;
- source PR `#539`;
- source revision `REV01`;
- synchronization date;
- implementation status;
- related BOKS IDs; and
- the warning that the repository source controls.

All IDs below are provisional.

## 4. Recommended mirrors

| Provisional BOKS ID | Google Doc title | Canonical repository path | Status | Relationships | Resync policy |
| --- | --- | --- | --- | --- | --- |
| P-BOKS-ART-0001 | WEBBETADISC001 — Beta Website Program Charter REV01 | `docs/site-architecture/WEBBETADISC001_WNYHS_BETA_WEBSITE_PROGRAM_CHARTER_REV01.md` | REPOSITORY MIRROR / CURRENT when created | Parent program; relates to ART-0002 through ART-0005 | Resync on canonical revision or semantic change |
| P-BOKS-ART-0002 | WEBBETADISC001 — Beta Website Requirements Register REV01 | `docs/site-architecture/WEBBETADISC001_WNYHS_BETA_WEBSITE_REQUIREMENTS_REGISTER_REV01.md` | REPOSITORY MIRROR / CURRENT when created | Governed by charter; informs interview and decision log | Resync on requirement/status/owner change |
| P-BOKS-ART-0003 | WEBBETADISC001 — Beta Discovery Interview Framework REV01 | `docs/site-architecture/WEBBETADISC001_WNYHS_BETA_DISCOVERY_INTERVIEW_FRAMEWORK_REV01.md` | REPOSITORY MIRROR / CURRENT when created | Uses requirements; produces later operator decisions | Resync on stage or checkpoint-method change |
| P-BOKS-ART-0004 | WEBBETADISC001 — Beta Build Location Decision REV01 | `docs/site-architecture/WEBBETADISC001_WNYHS_BETA_BUILD_LOCATION_DECISION_REV01.md` | REPOSITORY MIRROR / RECOMMENDED ARCHITECTURE | Relates to `apps/wnyhs-beta/`, protected beta host, production isolation | Resync on architecture decision/revision; never imply implementation |
| P-BOKS-ART-0005 | WEBBETADISC001 — Beta Website Program Decision Log REV01 | `docs/site-architecture/WEBBETADISC001_WNYHS_BETA_WEBSITE_PROGRAM_DECISION_LOG_REV01.md` | REPOSITORY MIRROR / CURRENT when created | Tracks approved, recommended, open, deferred, and prohibited assumptions | Resync whenever a decision is promoted or closed |

## 5. Work-order evaluation

`docs/codex/work-orders/WEBBETADISC001_WORK_ORDER_REV01.md` should remain repository-only by default.

Reason:

- its durable decisions and program boundaries are already represented in the five canonical discovery documents;
- it is primarily execution lineage;
- mirroring it would add administrative duplication without improving ordinary business discovery.

The manifest may link the work order as source lineage. A later operator decision may approve a mirror if employees need the execution record independently.

## 6. Relationship model

Recommended relationships:

```text
Program Charter
├── governs → Requirements Register
├── governs → Interview Framework
├── relates to → Build Location Decision
└── governs → Decision Log

Requirements Register
├── informs → Interview Framework
└── recorded by → Decision Log

Build Location Decision
├── governed by → Site Architecture
├── recommends → apps/wnyhs-beta/
└── protects → current production website
```

These relationships aid discovery. They do not create implementation authority.

## 7. Synchronization checks

BOKSSYNC001 must:

- verify PR #539 merge state and canonical source paths;
- verify source revisions and current commit lineage;
- assign final manifest IDs;
- create only approved Drive mirrors;
- preserve headings, tables, links, and plain-language meaning;
- add the common authority header;
- add/update manifest entries;
- verify no secret or customer data is present;
- mark mirrors `CURRENT`;
- record sync date and task; and
- report any formatting or link limitations.

## 8. Staleness and conflict handling

- Repository semantic change makes the mirror `STALE`.
- Mirror edits are candidate evidence only.
- Never overwrite repository authority from a Drive edit.
- Route a proposed semantic change to the correct repository owner and a new bounded task.
- If a source is superseded, label the mirror and link the successor.
- If the source path or revision cannot be verified, stop synchronization.

## 9. External execution gate

This plan does not access or modify Google Drive.

External mirroring requires a separately authorized BOKSSYNC001 task after BOKSDRIVE001/BOKSMANIFEST001 establish the required structure and manifest controls. Nothing here delays resumption of the website discovery and architecture program.
