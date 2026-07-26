# WNYHS BOKS Master Manifest and Document Template Specification REV01

## 1. Document control

- **Status:** ACTIVE ON MERGE
- **Task ID:** BOKSFOUND001
- **Owner:** Project Governance / Business Operating Knowledge System
- **Primary authority:** BOKS Master Manifest schema, control behavior, and object-document templates
- **Implementation authority:** None
- **External-system authority:** None
- **Operator authorization date:** 2026-07-26
- **Revision:** REV01
- **Predecessor:** None
- **Successor:** None

## 2. Manifest decision

The recommended operating model is:

- repository documents govern the BOKS schema, controlled values, authority rules, and operating standards;
- a future Google Sheet named `BOKS Master Manifest` may become the operational inventory and browsing surface after a separate bounded setup task;
- each canonical repository owner remains authoritative for its governed subject;
- repository-derived Drive documents remain mirrors;
- an approved Drive-native BOKS object may own business knowledge only within its declared non-implementation boundary; and
- a future KAOS view may consume the manifest but may not silently change authority.

No Sheet, manifest dataset, connector, or automation is created by BOKSFOUND001.

## 3. Required manifest columns

| Column | Controlled requirement |
| --- | --- |
| BOKS ID | Unique final identifier |
| Title | Specific object title |
| Object Type | Retained type from the object-model standard |
| Subtype | Controlled subtype or `NONE` |
| Knowledge Lifecycle | Controlled lifecycle value |
| Implementation Status | Separate controlled implementation value |
| Authority Status | Controlled authority value |
| Owner | Person, role, system, or canonical owner document |
| Privacy Classification | `PUBLIC`, `INTERNAL`, `CONFIDENTIAL`, or `RESTRICTED` |
| Canonical Location | Repository path, Drive link, or declared external system reference |
| Source Type | Controlled source class |
| Source Reference | Stable provenance locator |
| Created Date | ISO date |
| Last Reviewed Date | ISO date |
| Next Review Date or Trigger | ISO date or governed trigger |
| Related BOKS IDs | Delimited stable IDs or `NONE` |
| Summary | Short plain-language description |
| Sync Status | `NOT_APPLICABLE`, `CURRENT`, `STALE`, `PENDING`, `ERROR`, or `UNKNOWN` |

## 4. Optional manifest columns

Use only when populated:

- category/topic;
- source chat;
- source task;
- repository path;
- source commit;
- source pull request;
- mirror destination;
- mirror sync date;
- dependencies;
- affected systems;
- customer lifecycle stages;
- website applicability;
- KAOS applicability;
- HubSpot applicability;
- Google Workspace applicability;
- claims sensitivity;
- next action;
- supersedes;
- superseded by;
- unresolved-decision owner.

Avoid a horizontally unmanageable Sheet. Optional groups may be hidden views or linked detail rather than mandatory columns.

## 5. Controlled values

The future manifest must validate:

- object type;
- subtype where controlled;
- lifecycle;
- implementation status;
- authority status;
- privacy classification;
- source type;
- sync status;
- customer lifecycle stage; and
- relationship type.

Free text is appropriate for title, summary, owner explanation, next action, and provenance notes.

## 6. Manifest controls

Required controls:

- unique BOKS ID check;
- no reused or blank final IDs;
- required-field completeness;
- duplicate subject review using subject/purpose/scope, not title alone;
- stale review-date view;
- unreviewed capture queue;
- missing-owner queue;
- unresolved decision/risk queue;
- broken repository-path and link checks;
- superseded object with missing successor check;
- mirror staleness check against source revision/commit;
- restricted-object access review;
- archive view excluding active filters; and
- periodic export/backup review.

The manifest records state. It does not approve knowledge, activate tasks, or authorize implementation.

## 7. Revision and synchronization

- Repository schema revision is recorded in the manifest control tab.
- Every structural change requires a bounded governance task.
- Source-object revision and mirror-sync revision are separate.
- A repository mirror becomes `STALE` when its canonical path revision or commit changes.
- Resynchronization records date, source commit/PR, operator or task, and outcome.
- Broken or inaccessible links become `ERROR`; they are not silently replaced.
- A future KAOS migration must preserve IDs, lifecycle, authority, provenance, and relationship direction.

## 8. Common document control block

Every object document should begin with:

```text
BOKS ID:
Title:
Object type:
Subtype:
Knowledge lifecycle:
Implementation status:
Authority status:
Owner:
Privacy classification:
Created:
Last reviewed:
Next review:
Source type:
Source reference:
Canonical repository owner, if any:
Related BOKS IDs:
```

Then include:

1. Summary
2. Why it exists
3. Current status
4. Business value
5. Authority and owner boundary
6. Dependencies and relationships
7. Evidence and provenance
8. Next action or review trigger

Type-specific sections replace unnecessary common sections rather than duplicating them.

## 9. Decision template

Additional sections:

- Decision
- Alternatives considered
- Reason
- Scope and exclusions
- Consequences
- Supersession

Do not use for unresolved options.

## 10. Capability template

Additional sections:

- Users or audience
- Problem solved
- Intended outcome
- Capability boundary
- Current versus future state
- Dependencies
- Website/customer-stage applicability
- Implementation evidence or task gap

## 11. Process template

Additional sections:

- Trigger
- Intended result
- Roles
- Inputs
- Reusable steps
- Approval gates
- Exceptions and stop conditions
- Outputs/evidence
- Review cadence

An unapproved proposed process must remain `CAPTURED` or `REVIEWED`, not `APPROVED`.

## 12. Architecture-reference template

Additional sections:

- Subject and boundary
- Canonical repository owner
- Plain-language summary
- Consumers
- Controlled relationships
- Known conflicts/gaps
- Amendment gate

Do not copy the full controlling standard.

## 13. Idea template

Additional sections:

- Problem or opportunity
- Concept
- Potential value
- Assumptions
- Constraints and risks
- Evidence needed
- Evaluation trigger
- Disposition

## 14. Resource template

Additional sections:

- Resource identity and subtype
- Intended use
- Evidence
- Qualification status
- Limitations and risks
- Related capabilities/processes
- Owner/system of record

Do not include credentials, private agreements, or unsupported product claims.

## 15. Field-knowledge template

Additional sections:

- Situation
- Durable lesson
- Applicability
- Limits/exceptions
- Evidence
- Safety/privacy constraints
- Affected process, architecture, or resource

Customer-specific facts must be minimized or referenced through their protected owner.

## 16. Artifact template

Additional sections:

- Artifact purpose
- Source task
- Canonical repository path
- Source revision/commit/PR
- Authority header
- Implementation status
- Mirror status and date
- Related objects
- Resync rule

## 17. Requirement template

Additional sections:

- Requirement/risk/question
- Subtype
- Impact
- Evidence
- Owner
- Dependencies/blockers
- Resolution or approval gate
- Disposition

## 18. Superseded and archived records

Superseded documents must:

- retain their ID;
- state `SUPERSEDED` near the top;
- identify the successor;
- preserve provenance;
- contain no instruction that appears active; and
- remain excluded from ordinary active views.

Archived documents retain IDs and provenance. Archive does not mean deletion.

## 19. Future setup gate

Creating the operational Google Sheet, native templates, validation rules, saved views, formulas, or KAOS integration requires separately authorized bounded tasks.

BOKSFOUND001 specifies the model only.
