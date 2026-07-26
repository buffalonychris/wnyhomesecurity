# WNYHS BOKS Chat Extraction and Duplicate Detection Standard REV01

## 1. Document control

- **Status:** ACTIVE ON MERGE
- **Task ID:** BOKSFOUND001
- **Owner:** Project Governance / Business Operating Knowledge System
- **Primary authority:** BOKS conversation extraction, candidate classification, duplicate handling, review gates, source traceability, and extraction reporting
- **Implementation authority:** None
- **Historical-mining authority:** None
- **Operator authorization date:** 2026-07-26
- **Revision:** REV01
- **Predecessor:** None
- **Successor:** None

## 2. Purpose

This standard defines how a future bounded task may convert available conversations into reviewable durable knowledge without treating a chat as authority or creating a whole-chat summary as the organizational unit.

Historical chat mining begins only after the beta website build has been initiated and requires separate authorization.

## 3. Source identity gate

Before extraction, record:

- conversation title and stable conversation/task reference;
- available date range;
- export or attachment identity when applicable;
- completeness limits;
- source owner;
- privacy/sensitivity assessment;
- whether the complete available conversation can be inspected; and
- any missing attachments or inaccessible references.

If the source is incomplete, state the limitation. Do not infer missing content.

## 4. Complete extraction workflow

1. **Establish source identity.**
2. **Inspect the complete available conversation.**
3. **Identify candidate durable items.**
4. **Classify each candidate by object type and subtype.**
5. **Separate facts, decisions, ideas, requirements, risks, and questions.**
6. **Assess durability and business value.**
7. **Assess knowledge lifecycle and implementation status separately.**
8. **Search the manifest and repository for semantic duplicates and owners.**
9. **Propose `CREATE`, `UPDATE`, `MERGE`, `RELATE`, `REJECT`, or `DEFER`.**
10. **Obtain operator confirmation where authority, intent, current status, merge choice, or sensitive handling is unclear.**
11. **Create or update only approved objects under a later authorized task.**
12. **Update the Master Manifest.**
13. **Record source traceability and precise evidence location.**
14. **Identify repository-promotion candidates and their correct owners.**
15. **Identify possible future Work/MTR task candidates without activating them.**
16. **Issue a final extraction report.**

## 5. Candidate classification

For each candidate record:

- concise durable statement;
- fact, decision, idea, requirement, risk, or question;
- proposed object type/subtype;
- source location;
- evidence strength;
- proposed lifecycle;
- proposed implementation status;
- proposed authority status;
- owner or owner gap;
- duplicate search result;
- proposed disposition;
- relationships;
- privacy/claims sensitivity;
- operator decision requirement; and
- repository/task implications.

## 6. Standalone-object threshold

A candidate qualifies as a standalone object only when it has:

- a distinct subject and boundary;
- likely reuse beyond the source conversation;
- lasting business, operational, customer, technical, governance, or decision value;
- enough evidence to state it accurately;
- a meaningful owner, next decision, relationship, or lifecycle; and
- no existing object that should simply be updated.

When the detail only supports another object, add evidence or a relationship instead.

## 7. Excluded content

Do not create objects from:

- passing remarks;
- jokes;
- conversational filler;
- duplicated statements;
- temporary troubleshooting with no durable lesson;
- abandoned ideas with no future or lineage value;
- unsupported assumptions;
- guesses presented as facts;
- personal information unrelated to the business;
- credentials, secrets, tokens, private keys, alarm codes, or sensitive environment values;
- customer-identifying details not necessary for durable knowledge; or
- material whose extraction would violate a higher-authority owner or access boundary.

Stop and route sensitive material to a separately authorized handling process.

## 8. Fact, decision, idea, requirement, and question rules

- **Fact:** Requires source evidence and may still conflict with current authority.
- **Decision:** Requires explicit operator direction or repository decision evidence.
- **Idea:** Must remain non-authoritative until approved.
- **Requirement:** Must identify its controlling source; chat alone is insufficient unless the operator explicitly approves it within the bounded extraction task.
- **Risk:** Records impact and evidence, not an invented probability.
- **Open question:** Must remain unresolved until an authorized decision answers it.

Implemented behavior is not automatically approved doctrine. Planned concepts are not implemented capability.

## 9. Duplicate-detection method

Search by:

- key subject terms and synonyms;
- purpose/problem solved;
- scope and exclusions;
- owner/system;
- object type/subtype;
- related tasks and repository paths;
- customer stage or website area;
- implementation status; and
- relationships.

Compare semantic meaning, not filename or title alone.

## 10. Disposition rules

### CREATE

Use only when no existing object owns the distinct durable subject.

### UPDATE

Use when the same object gains evidence, status, relationship, clarification, or a non-conflicting fact.

### MERGE

Use when two objects represent the same subject and boundary. Operator approval is required. Preserve all IDs and mark non-survivors superseded.

### RELATE

Use when the candidate adds a meaningful connection but not an independent object.

### REJECT

Use for low-value, unsupported, irrelevant, sensitive, or non-durable candidates. Preserve source-level evidence only when needed.

### DEFER

Use when the candidate has possible value but insufficient evidence, unclear intent, blocked ownership, or premature timing.

## 11. Operator review gates

Operator decision is required when:

- current intent is unclear;
- sources disagree at the same authority level;
- a candidate would become `APPROVED`;
- objects would merge or supersede;
- a repository owner would need amendment;
- business policy, pricing, claims, customer promises, or priority is implicated;
- sensitive access/classification is unclear;
- implementation status cannot be verified; or
- a future task would materially change scope or systems.

Use `Operator Decision Required`; do not guess.

## 12. Source traceability

Every proposed or approved object records:

- source type;
- stable source reference;
- source date/range;
- exact section/message locator when available;
- extraction task;
- extraction date;
- extractor/reviewer;
- completeness limitation; and
- related repository or external evidence.

Do not hash regenerated text as though it were the original conversation. Exact-byte identity requires the actual source bytes.

## 13. Repository-promotion candidates

Extraction may identify that a decision or standard belongs in a repository owner.

The extraction report must name:

- proposed owner path;
- affected existing owner;
- conflict status;
- exact operator decision needed; and
- proposed future task ID.

It must not edit the owner, create implementation authority, or activate the task.

## 14. Final extraction report

Report:

- source identity and completeness;
- total candidates reviewed;
- objects proposed for create/update/merge/relate/reject/defer;
- duplicates and conflicts;
- operator decisions required;
- sensitive items excluded;
- manifest changes proposed;
- repository-promotion candidates;
- future-task candidates;
- unresolved source gaps; and
- confirmation that no implementation authority was created.

## 15. Repeatable-process evaluation

When extraction finds repeated activity, it must:

- relate it to an existing approved `PROC` object; or
- propose a process-formalization evaluation.

This rule does not automatically create or approve an SOP.

## 16. Change and execution gate

This standard becomes active only after merge under BOKSFOUND001.

Actual chat extraction, object creation, manifest mutation, Drive access, repository promotion, and task activation each require separately bounded authority.
