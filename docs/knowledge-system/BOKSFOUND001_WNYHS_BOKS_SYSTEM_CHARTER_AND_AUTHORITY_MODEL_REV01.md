# WNYHS Business Operating Knowledge System Charter and Authority Model REV01

## 1. Document control

- **Status:** ACTIVE ON MERGE
- **Task ID:** BOKSFOUND001
- **Owner:** Project Governance / Business Operating Knowledge System
- **Primary authority:** BOKS mission, boundaries, users, authority posture, security posture, maintenance model, and future-system relationships
- **Implementation authority:** None
- **Customer-facing authority:** None
- **External-system authority:** None
- **Operator authorization date:** 2026-07-26
- **Revision:** REV01
- **Predecessor:** None
- **Successor:** None

## 2. Canonical definition

The WNY Home Security Business Operating Knowledge System (`BOKS`) is the repository-governed institutional-memory, relationship, discovery, and business-knowledge layer for W. N. Y. Home Security.

BOKS captures durable knowledge as individually identifiable business objects, relates those objects to their sources and governing systems, and makes them reviewable and retrievable without turning conversations or folders into hidden authority.

BOKS is not:

- a second source-code or governance repository;
- a replacement for canonical repository owner documents;
- a task authorization system;
- a runtime system;
- an implementation platform;
- a customer database;
- a secret store;
- a loose archive of chat summaries; or
- a reason to delay the beta website program.

## 3. Mission

BOKS exists to prevent valuable WNYHS knowledge from remaining trapped in individual memory, old conversations, temporary sessions, disconnected documents, implementation summaries, customer-project chats, unindexed ideas, or superseded material.

Its mission is to make durable business knowledge:

- captured;
- classified;
- traceable;
- related;
- reviewable;
- promotable to the correct owner when necessary;
- clearly current, deferred, rejected, superseded, or historical; and
- retrievable by people and future systems.

## 4. Scope

BOKS governs the knowledge-management rules for:

- durable business decisions and direction;
- capabilities, modules, and customer-experience concepts;
- reusable processes and SOP candidates;
- architecture and standards references;
- business ideas;
- product and vendor knowledge;
- field and installation lessons;
- durable Work artifacts and implementation records;
- requirements, risks, and open questions;
- source traceability and provenance;
- relationships among knowledge, tasks, repository owners, systems, and customer lifecycle stages;
- object review, approval, supersession, and archival;
- later Google Drive object and manifest operations; and
- future KAOS knowledge-operations views.

This document does not create object instances, configure the Master Manifest, modify Drive, mine historical chats, or implement software.

## 5. Users

Intended users are:

- the operator, as business owner and approval authority;
- authorized employees or contractors, within assigned access boundaries;
- ChatGPT or Work, for interviews, extraction, reconciliation, and decision preparation;
- Codex, for separately authorized repository promotion and implementation tasks;
- future KAOS services, for operator attention and knowledge-health views; and
- reviewers who need provenance, current status, or owner-document routing.

Customer access is not assumed. Any customer-facing or customer-specific use requires a separate owner, privacy decision, and bounded task.

## 6. Business value

BOKS should:

- reduce repeated rediscovery;
- preserve operator decisions and reasoning;
- expose forgotten but valuable ideas and modules;
- distinguish current capability from planned concepts;
- connect business knowledge to repository work and external systems;
- make repeated work eligible for formal process design;
- reduce duplicate documents and conflicting summaries;
- improve task preparation without weakening governance; and
- create a structured migration path to future KAOS knowledge operations.

## 7. Authority position

The repository remains authoritative for:

- governance;
- owner standards and specifications;
- implementation contracts;
- technical architecture;
- schemas;
- current operational context;
- Master Task Register state;
- bounded work orders;
- source and configuration;
- executable implementation authority; and
- Git/PR/merge lineage.

BOKS may describe, reference, summarize, or relate governed material. It may not replace it.

The authority chain remains:

1. `docs/system/project.md`
2. `docs/system/guardrails.md`
3. `docs/system/agent.md`
4. `docs/system/plan.md`
5. `docs/system/step-current.md`
6. `docs/system/master-task-register.md`
7. active bounded task or permitted prompt-created work order
8. active owner standards, specifications, and runtime contracts
9. implementation and validation evidence
10. historical evidence
11. chat-derived context after authorized promotion

`docs/system/WNYHS_AUTHORITY_AND_SYSTEMS_OF_RECORD_STANDARD_REV01.md` controls system-of-record and promotion interpretation.

## 8. Five distinct truth states

BOKS must distinguish:

1. **Business knowledge:** useful information with declared source and status.
2. **Operator-approved direction:** an explicit operator decision that may guide planning but does not by itself change a repository owner.
3. **Repository authority:** a merged active owner document controlling its assigned subject.
4. **Executable implementation authority:** current context plus an active bounded task and work order.
5. **Historical evidence:** material preserved for lineage without current control.

No metadata value, relationship, folder placement, repeated citation, or external mirror may silently move knowledge from one state to another.

## 9. System-of-record assignments

| Subject | System of record | BOKS role |
| --- | --- | --- |
| Repository governance and executable rules | Active merged repository owner documents | Reference, relationship, and discovery only |
| Task lifecycle | `docs/system/master-task-register.md` | Link and candidate identification only |
| Task instructions | Issued bounded work order | Traceability only |
| Code/configuration state | Merged repository and Git history | Implementation evidence only |
| Live domain records | The external system named by its owner document | Link or summary only |
| BOKS schema and operating rules | Merged documents under `docs/knowledge-system/` | Canonical owner |
| BOKS object inventory after configuration | Future governed Master Manifest | Browsing and object-control inventory, not a substitute for referenced owners |
| Repository-derived Work artifact content | Canonical repository document | Drive copy is a mirror |
| Operator-approved business knowledge without another repository owner | Future approved BOKS object document | Business-knowledge record only; no implementation authority |
| Raw chats and local intake | Original source/evidence location | Evidence only |

If no owner or system of record can be identified, the object must state `OWNER GAP — OPERATOR DECISION REQUIRED`.

## 10. Role boundaries

### Operator

May approve business knowledge, resolve ambiguity, authorize tasks, approve exceptions, review PRs, and decide merge or deployment.

### ChatGPT and Work

May interview, inspect available evidence, extract candidates, reconcile duplicates, prepare objects, prepare operator decisions, and propose future tasks. They may not invent policy, authorize implementation, or mutate external systems without explicit authority.

### Codex

May implement only a bounded repository task. Codex may not infer strategy, activate a BOKS candidate, alter an external system, or treat BOKS metadata as executable authority.

### GitHub

Records branch, commit, PR, review, and merge lineage. Merge activates a repository owner only when the document and task establish that posture. Merge does not authorize deployment.

### Google Drive

May later provide the collaborative, human-readable BOKS object surface and browsing manifest under a separately authorized task. Drive access is capability, not authority. Repository-derived documents remain clearly labeled mirrors.

### KAOS

May later provide operational views over approved BOKS metadata. It may not silently edit authority, approve knowledge, create tasks, merge, or deploy.

## 11. Repeatable-process rule

Every repeated WNY Home Security activity must:

- reference an approved reusable process; or
- trigger evaluation for process formalization.

Evaluation does not require automatic process creation. The operator may decide the activity is too rare, unstable, sensitive, or context-dependent to formalize.

## 12. Success criteria

BOKS succeeds when:

- durable knowledge is represented as discrete objects rather than chat summaries;
- every object has provenance, status, authority posture, and an owner;
- duplicates are updated, merged, related, or rejected intentionally;
- approved knowledge can be retrieved by subject, type, system, task, and customer stage;
- repository owners remain controlling;
- external mirrors disclose staleness and source lineage;
- repeated work exposes process candidates;
- unresolved items are visible rather than silently decided;
- secrets and sensitive customer data stay out of ordinary objects; and
- BOKS foundation work does not delay the beta website implementation program.

## 13. Failure modes

BOKS has failed if it becomes:

- a duplicate repository;
- a folder of whole-chat summaries;
- an uncontrolled second set of standards;
- a dumping ground with no review or supersession;
- an over-engineered taxonomy people stop using;
- an implementation queue that bypasses the MTR;
- a source of stale repository mirrors without warnings;
- a place for secrets or unbounded customer data;
- a lifecycle-folder system requiring documents to move whenever status changes; or
- a prolonged platform project that displaces revenue-critical website work.

## 14. Security and privacy

Ordinary BOKS objects must never contain:

- passwords, credentials, API keys, tokens, webhook secrets, private keys, alarm codes, or recovery codes;
- complete payment-card or bank information;
- raw health information;
- unnecessary customer-identifying installation details;
- private URLs that expose protected systems; or
- secret environment values.

Required controls:

- use `PUBLIC`, `INTERNAL`, `CONFIDENTIAL`, or `RESTRICTED` privacy classification;
- store only the minimum necessary customer or employee information;
- reference a governed system of record instead of copying sensitive records;
- redact evidence before ordinary publication;
- isolate restricted material by access control, not only by filename;
- stop extraction when a secret or unexpectedly sensitive source is encountered; and
- require a separate bounded handling task for customer backups, credentials, health information, vendor agreements, confidential pricing, or employee records.

## 15. Review and maintenance

Minimum maintenance model:

- unreviewed captures: review weekly while extraction is active;
- approved active objects: review on change or at least annually;
- process, architecture, vendor, product, and field objects: review at a cadence set in object metadata;
- open questions and risks: review monthly while relevant;
- mirrors: reconcile against source commit/revision at each source change or scheduled audit;
- broken links, missing owners, duplicate subjects, stale reviews, and invalid controlled values: check during manifest reconciliation;
- superseded objects: retain lineage and redirect readers to the successor;
- archived objects: preserve provenance and exclude from ordinary active views.

The future manifest owner must assign an accountable owner and next review date.

## 16. Relationship to Google Workspace

The normalized Drive structure is defined by:

`docs/knowledge-system/BOKSFOUND001_WNYHS_BOKS_WORK_ARTIFACT_SYNC_AND_DRIVE_INFORMATION_ARCHITECTURE_REV01.md`

This task recommends structure only. Existing Drive folders and files remain provisional until a separate task verifies and normalizes them.

## 17. Relationship to the website program

WEBBETADISC001 remains the immediate implementation priority after this foundation task.

BOKS may:

- mirror its five canonical discovery artifacts later;
- relate website requirements, decisions, modules, and Work artifacts;
- identify future website-task candidates; and
- support later knowledge retrieval.

BOKSFOUND001 may not create `apps/wnyhs-beta/`, change the live site, alter Cloudflare, or delay the staged website interview and architecture work.

## 18. Future KAOS integration

A future KAOS knowledge-operations module may provide:

- operator attention queue;
- unreviewed capture queue;
- stale-object and broken-link alerts;
- approved-but-unimplemented capability views;
- dependency and relationship views;
- candidate future-task views;
- website-impact and customer-lifecycle views;
- mirror synchronization status; and
- manifest health.

KAOS must consume declared BOKS metadata and repository authority. It must not become a silent authority editor. No KAOS module, schema, database, UI, or automation is authorized here.

## 19. Future systems

BOKS relationships may later reference:

- HubSpot objects;
- Google Workspace records;
- customer lifecycle stages;
- products and vendors;
- properties or installations;
- public website areas;
- deployment-engineering records; and
- other approved systems.

Every connector or external write requires its own bounded task and owner-specific controls.

## 20. Amendment and implementation gate

This charter becomes active only after merge under BOKSFOUND001.

Future amendments require:

- a new unique task ID;
- a current-schema MTR record or permitted prompt-created task;
- explicit affected files;
- operator authorization;
- validation;
- a draft PR; and
- manual merge.

BOKSFOUND001 does not authorize BOKS software, Google Drive changes, object creation, historical chat mining, KAOS implementation, website implementation, merge, or deployment.
