# DASH-GOV-POSTINSTALL-RECONCILE-001 — Reconcile Post-Install Dashboard Governance Conflicts and Gaps

**Revision:** REV01
**Status:** PREPARED — NOT DISPATCHED OR EXECUTED
**Category:** GOV / RECONCILIATION
**Primary Workstream:** Dashboard / Interactive Experience System
**Related Workstreams:** Home Assistant Platform; Installer Platform; Automation System; Notification System; Privacy/Data; Project Governance
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
**Standing Campaign:** DASHBOARD-CAMPAIGN-001

**READ MODE:** TARGETED  
**REASONING POSTURE:** ADAPTIVE  
**EXECUTION POSTURE:** DIRECT

---

## 1. Objective

Reconcile the four conflicts and six governance gaps identified by:

docs/audits/DASH-GOV-POSTINSTALL-AUDIT-001_AUDIT_REV01.md

The task must convert the completed audit into coherent repository authority without creating a second dashboard-governance system.

Resolve conflicts by correcting stale routing, references, aliases, and supporting documentation.

Close governance gaps by assigning each requirement to the narrowest appropriate existing owner wherever possible.

Create a new narrow owner only where the audit demonstrates that no existing owner can safely own the requirement.

Create one thin post-install dashboard assembly profile that references the actual domain owners and provides the reusable checklist needed before later PROCESS-DASHBOARD002 work.

This task is documentation/governance reconciliation only.

It does not implement a dashboard, change Home Assistant runtime, change Cloudflare, or perform Bailey production implementation.

---

## 2. Primary Evidence and Read Strategy

Start with the completed audit.

Do not repeat the original 35-source audit.

Read:

1. docs/audits/DASH-GOV-POSTINSTALL-AUDIT-001_AUDIT_REV01.md
2. the current owner directly implicated by each CON/GAP finding;
3. the exact conflicting/supporting section cited by the audit;
4. current Codex execution/governance rules only as needed for execution.

Use the audit's source register and finding IDs as the discovery map.

Do not broadly re-search the repository unless:
- an exact cited path is missing;
- a duplicate-owner check is required; or
- reconciliation exposes a direct conflict not represented in the audit.

Do not read raw Home Assistant state, customer-private evidence, backups, screenshots, binaries, deployment logs, or unrelated project domains.

---

## 3. Findings in Scope

### Conflicts

- CON-01 — stale theme/component visual semantics versus DESIGN001 REV02
- CON-02 — commissioning checklist still routes theme validation through historical INSTALL007
- CON-03 — duplicate INSTALL008 identifier
- CON-04 — active supporting documents still cite superseded INSTALL006 REV01

### Gaps

- GAP-01 — HACS/custom-frontend version, compatibility, rollback, and EOL governance
- GAP-02 — runtime role/permission/dashboard-assignment acceptance matrix
- GAP-03 — Activity/history/notification retention and audit-evidence lifecycle
- GAP-04 — camera/doorbell media privacy, recording/audio, consent, access, and retention ownership
- GAP-05 — dashboard performance, dependency drift, upgrade qualification, and EOL criteria
- GAP-06 — upstream Property/BOM/install evidence to dashboard-requirements preparation packet

Also evaluate:

- AUD-SUP-01 — historical Dashboard Readiness Sheet value
- AUD-SUP-02 — placeholder dashboard-preparation packet value

Do not promote either merely because the audit identified possible value.

---

## 4. Required Conflict Reconciliation

### 4.1 CON-01 — Visual-system drift

Current visual authority remains:

docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md

Reconcile:

- home-assistant/wnyhs/themes/README.md
- home-assistant/wnyhs/components/README.md

Remove or explicitly subordinate stale burgundy/gold action semantics or other conflicting customer-facing color guidance.

The READMEs may describe implementation mechanics, variables, and dependencies, but must not independently redefine customer visual semantics.

Do not change DESIGN001 merely to preserve obsolete README language.

### 4.2 CON-02 — INSTALL007 routing drift

Update:

docs/installer/INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md

Commissioning visual/theme validation must route to the current DESIGN001 REV02 owner.

INSTALL007 may remain historical/reference lineage where appropriate but must not remain the operative visual validation authority.

### 4.3 CON-03 — duplicate INSTALL008 identifier

Do not destructively rename historical files during this task.

Preserve both existing documents and lineage.

Create durable descriptive aliases:

- INSTALL008-BOOTSTRAP
  - docs/installer/INSTALL008_HA_GREEN_BOOTSTRAP_STANDARD_REV01.md
- INSTALL008-COMMISSIONING
  - docs/installer/INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md

Record the aliases in each document and in the dashboard governance routing map where needed.

Future citations must use the descriptive alias or full filename when ambiguity is possible.

Do not rewrite historical citations merely for cosmetic consistency unless they are active/current references affected by this task.

### 4.4 CON-04 — INSTALL006 revision drift

Reconcile active references to INSTALL006 REV01 in:

- docs/installer/INSTALL006A_SHARED_JOB_DATA_MODEL_AND_HUBSPOT_FIELD_ARCHITECTURE_REV01.md
- docs/installer/INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md
- docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md

Route active dashboard behavior/architecture references to INSTALL006 REV02.

Preserve historical lineage where genuinely historical.

Do not silently change the underlying business meaning of these documents.

---

## 5. Required Gap Reconciliation

### 5.1 GAP-01 — frontend/HACS compatibility governance

Primary owner:

docs/installer/INSTALL008_HA_GREEN_BOOTSTRAP_STANDARD_REV01.md
Alias: INSTALL008-BOOTSTRAP

Add a governed compatibility/qualification model covering:

- HACS
- Mushroom
- Bubble Card
- button-card
- Card Mod
- Layout Card
- Swipe Card
- Browser Mod
- Auto-Entities

For each dependency, govern at minimum:

- baseline/optional/service-only posture;
- intended customer/installer/service use;
- installed version recording;
- Home Assistant compatibility evidence;
- WNYHS-tested version or explicit NOT YET QUALIFIED;
- update qualification;
- rollback posture;
- unsupported/EOL posture.

Do not invent version numbers.

Site inventory versions do not become universal baselines without qualification evidence.

Unknown values must remain explicit.

### 5.2 GAP-02 — role/permission/assignment acceptance

Primary owner:

docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md

Coordinate with INSTALL006 without duplicating its three dashboard classes.

Define the acceptance matrix necessary to distinguish:

- Customer Dashboard
- Installer / Commissioning Dashboard
- Service / Operator Dashboard

The matrix must cover:

- intended audience;
- dashboard assignment;
- visibility;
- permitted control class;
- backend authorization evidence;
- assignment/change evidence;
- revocation/offboarding;
- validation before acceptance.

UI visibility must never be treated as backend authorization.

Do not invent a fake Home Assistant role system or production authentication mechanism.

### 5.3 GAP-03 — Activity/history/retention

Primary owner:

docs/home-assistant/notification-system/WNYHS_NOTIFICATION_ENGINE_STANDARD_REV01.md

Clarify:

- customer Activity/history versus authoritative audit evidence;
- notification-history ownership;
- retention configuration evidence;
- deletion/export posture when supported;
- site/customer-specific retention decisions;
- platform-default retention when no explicit duration is approved;
- prohibition on representing normal customer Activity as a compliance/security audit log.

Do not invent a universal retention duration.

If a business retention duration requires operator policy, mark that decision explicitly rather than manufacturing one.

### 5.4 GAP-04 — camera/media privacy

Perform a targeted duplicate-owner search first.

If no existing current owner can safely absorb the requirement, create:

docs/home-assistant/WNYHS_CAMERA_MEDIA_PRIVACY_STANDARD_REV01.md

This must be a narrow Home Assistant/media privacy owner, not a dashboard architecture replacement.

It must govern:

- camera/doorbell media visibility;
- recording posture;
- audio posture;
- retention ownership;
- consent/notice requirements;
- customer versus installer/service access;
- access review;
- customer-visible history;
- remote-support boundaries;
- privacy/data-minimization principles;
- unresolved operator policy decisions.

Only encode requirements already supported by current repository authority or explicit operator-approved policy.

Do not infer new surveillance, recording, medical, emergency-response, or monitoring claims.

Unknown policy choices remain OPERATOR_DECISION_REQUIRED.

### 5.5 GAP-05 — performance/dependency lifecycle

Primary owner:

docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md

Add lifecycle acceptance requirements covering:

- dependency-health validation;
- broken/missing custom-card/resource behavior;
- upgrade qualification;
- rollback evidence;
- drift detection;
- unsupported dependency posture;
- component retirement/EOL;
- post-upgrade deterministic revalidation;
- performance observation sufficient to identify materially degraded customer experience.

Do not invent arbitrary performance numbers solely to close the gap.

Where no validated numeric budget exists, define the governed measurement/evidence requirement and leave numerical promotion to separately evidenced qualification.

### 5.6 GAP-06 — dashboard preparation packet

Promote:

docs/quotesystem/DASHBOARD_PREP001_HA_DASHBOARD_REQUIREMENTS_STANDARD_REV01.md

from placeholder status into an implementation-ready upstream requirements packet.

It must define the deterministic handoff from approved property/install evidence into later dashboard creation.

At minimum include:

- site/customer identifier;
- approved installed capabilities;
- areas/rooms;
- semantic device/capability names;
- customer-visible versus service-only posture;
- unresolved mappings;
- dashboard class requirements;
- notification dependencies;
- automation/routine dependencies;
- media/privacy dependencies;
- frontend dependency requirements;
- role/permission requirements;
- evidence freshness;
- acceptance blockers;
- exclusions/not-installed items.

Do not implement PROCESS-DASHBOARD002 in this task.

This standard becomes an input to that later business process.

---

## 6. Historical Dashboard Readiness Sheet

Evaluate AUD-SUP-01.

Do not restore INSTALL006 REV01 as authority.

If the old Dashboard Readiness Sheet contains useful fields not already represented by the reconciled preparation packet, absorb only those useful fields into the current DASHBOARD_PREP001 packet.

Otherwise record it as intentionally not promoted.

The reconciliation record must state which outcome occurred.

---

## 7. Post-Install Assembly Profile

Create:

docs/home-assistant/WNYHS_POSTINSTALL_DASHBOARD_ASSEMBLY_PROFILE_REV01.md

Purpose:

Provide one thin, reusable checklist for post-install dashboard creation.

This document is subordinate to INSTALL011 and the domain owners.

It must NOT duplicate their detailed doctrine.

Its sections must route to the proper owner for:

A. Platform prerequisites  
B. HA integrations/resources  
C. Installation evidence  
D. Semantic capability model  
E. Building/security state requirements  
F. Customer notifications  
G. WNYHS service notifications  
H. Customer routines/controls  
I. Customer Dashboard  
J. Installer / Commissioning Dashboard  
K. Service / Operator Dashboard  
L. Visual/components  
M. Responsive/accessibility  
N. Roles/permissions/privacy  
O. Dependency health/performance  
P. Validation  
Q. Additive deployment/rollback  
R. Acceptance/soak/handoff  
S. Legacy retirement

The profile must distinguish:

- REQUIRED
- CONDITIONAL
- NOT_APPLICABLE
- UNRESOLVED / BLOCKED

It must not become a duplicate owner for the underlying requirements.

---

## 8. Reconciliation Record

Create:

docs/audits/DASH-GOV-POSTINSTALL-RECONCILE-001_RECONCILIATION_REV01.md

For each CON-01 through CON-04 and GAP-01 through GAP-06, record:

- original finding;
- affected owner(s);
- reconciliation action;
- exact file/section changed;
- resulting owner;
- whether resolved, partially resolved, or still operator-blocked;
- residual decision if any;
- whether the finding blocks PROCESS-DASHBOARD002;
- whether it blocks Bailey production dashboard implementation.

Do not rewrite the original audit.

The audit remains historical evidence of the pre-reconciliation state.

---

## 9. Authorized Target Files

The execution task may modify only the files below when materially required:

1. home-assistant/wnyhs/themes/README.md
2. home-assistant/wnyhs/components/README.md
3. docs/installer/INSTALL008_HA_GREEN_BOOTSTRAP_STANDARD_REV01.md
4. docs/installer/INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md
5. docs/installer/INSTALL006A_SHARED_JOB_DATA_MODEL_AND_HUBSPOT_FIELD_ARCHITECTURE_REV01.md
6. docs/installer/INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md
7. docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md
8. docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md
9. docs/home-assistant/notification-system/WNYHS_NOTIFICATION_ENGINE_STANDARD_REV01.md
10. docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md
11. docs/quotesystem/DASHBOARD_PREP001_HA_DASHBOARD_REQUIREMENTS_STANDARD_REV01.md
12. docs/home-assistant/WNYHS_CAMERA_MEDIA_PRIVACY_STANDARD_REV01.md — create only if duplicate-owner search confirms required
13. docs/home-assistant/WNYHS_POSTINSTALL_DASHBOARD_ASSEMBLY_PROFILE_REV01.md
14. docs/audits/DASH-GOV-POSTINSTALL-RECONCILE-001_RECONCILIATION_REV01.md
15. docs/system/master-task-register.md — exact task record only

All other files are read-only.

If reconciliation requires a different write target, STOP and request work-order revision.

---

## 10. Protected / Forbidden Scope

Do not:

- access or modify live Home Assistant;
- access customer HA files or customer-private evidence;
- modify dashboard YAML/runtime configuration;
- modify Cloudflare;
- modify DNS, tunnels, Access, SSL/TLS, or deployments;
- modify HubSpot/CRM;
- modify Stripe/payment;
- modify scheduling;
- modify email/runtime notification infrastructure;
- modify secrets/environment variables;
- modify application/site source;
- change packages or lockfiles;
- implement Bailey;
- implement Peckham;
- create PROCESS-DASHBOARD002;
- implement dashboard-generation automation;
- promote site-specific facts into universal requirements without independent current authority;
- invent version numbers, retention periods, permission capabilities, privacy policy, performance thresholds, or business claims;
- merge, auto-merge, mark ready, or deploy.

---

## 11. Validation

Confirm:

1. starting main is synchronized and clean;
2. exact task ID occurs once in the active MTR record;
3. only Section 9 files changed;
4. zero deleted files unless explicitly authorized by work-order revision;
5. all four conflicts have a recorded reconciliation outcome;
6. all six gaps have a recorded owner/outcome;
7. unresolved operator-policy choices remain explicit;
8. INSTALL006 REV02 remains architecture/behavior authority;
9. DESIGN001 REV02 remains visual/component authority;
10. DASHBOARD001 REV02 remains delivery/binding/validation authority;
11. INSTALL011 remains cross-site orchestration authority;
12. assembly profile does not duplicate domain doctrine;
13. both INSTALL008 files remain historically intact and distinguishable by aliases;
14. no site-specific Bailey/Peckham fact becomes universal without independent authority;
15. no protected/runtime system changed;
16. no fabricated dependency versions, retention periods, permissions, or performance thresholds;
17. DASHBOARD_PREP001 is either implementation-ready or explicitly reports an unresolved blocker;
18. reconciliation record maps every CON/GAP finding;
19. git diff --check passes;
20. docs-only build skip remains appropriate under the Codex Execution Standard.

---

## 12. Exit Criteria

Task is complete when:

- CON-01 through CON-04 are reconciled or truthfully marked operator-blocked;
- GAP-01 through GAP-06 have explicit current ownership and implementable governance or a precisely identified operator-policy blocker;
- stale current references are corrected;
- duplicate INSTALL008 ambiguity is safely aliased without destructive lineage rewrite;
- post-install dashboard assembly has one thin reusable profile;
- DASHBOARD_PREP001 supplies the upstream requirements packet needed by a later process;
- the original audit remains unchanged;
- one reconciliation record documents the result;
- the exact MTR record is truthfully updated;
- protected/runtime systems remain untouched;
- one draft PR is opened;
- no merge or deployment occurs.

---

## 13. Delivery

Execution branch:

task/dash-gov-postinstall-reconcile-001-execution

Suggested execution commit:

docs: reconcile post-install dashboard governance

Open one draft PR to main.

Do not merge or deploy.

Closeout must report:

- exact files changed;
- resolution status for each CON-01 through CON-04;
- resolution status for each GAP-01 through GAP-06;
- any operator decisions still required;
- any newly created narrow owner and duplicate-owner evidence;
- whether PROCESS-DASHBOARD002 is now unblocked;
- whether Bailey production dashboard implementation is now governance-unblocked;
- validation result;
- concise RSI/context-efficiency findings.
