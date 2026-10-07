# WNYHS Camera and Doorbell Media Privacy Standard REV01

Status: Active narrow governance standard

Customer-facing: No

Implementation authority: No

Owner: Home Assistant Platform / Privacy and Data

Task ID: DASH-GOV-POSTINSTALL-RECONCILE-001

Controlling context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## 1. Purpose and owner boundary

This standard is the narrow owner for camera and doorbell media privacy decisions and acceptance evidence used by WNYHS Home Assistant dashboards. It governs media visibility, recording/audio posture, retention ownership, consent/notice evidence, customer versus installer/service access, access review, customer-visible history, remote-support boundaries, data minimization, and unresolved policy decisions.

It does not replace INSTALL006 dashboard behavior, DESIGN001 presentation, DASHBOARD001 delivery/binding/validation, the Notification Engine, INSTALL010 remote-support governance, claims owners, hardware owners, or INSTALL011 orchestration. It does not create a general surveillance, NVR, legal-policy, or dashboard architecture owner.

## 2. Mandatory decision record

Every applicable site packet must record the following from approved current evidence. Missing policy or evidence remains `OPERATOR_DECISION_REQUIRED` or `UNRESOLVED / BLOCKED`; it must not be inferred from hardware capability, a default setting, another site, or a prototype.

| Decision/evidence field | Governed requirement |
| --- | --- |
| Media source and purpose | Identify the approved camera/doorbell capability and customer-safe purpose without expanding scope or claims. |
| Visibility | Identify which Customer, Installer / Commissioning, and Service / Operator contexts may view live media, snapshots, clips, or event history. |
| Recording posture | Record the approved site posture and evidence source; unknown or unapproved posture remains `OPERATOR_DECISION_REQUIRED`. |
| Audio posture | Record the approved site posture for audio capture, playback, and two-way audio separately; unknown or unapproved posture remains `OPERATOR_DECISION_REQUIRED`. |
| Retention owner and configuration evidence | Identify the controlling platform/system, current configuration evidence, approved site/customer decision if one exists, and review owner. Do not invent a duration. |
| Consent/notice | Identify the approved notice/consent requirement, evidence, audience, and owner. Legal or business-policy choices without current authority remain `OPERATOR_DECISION_REQUIRED`. |
| Access authorization | Record intended audience, actual backend authorization evidence, assignment/change evidence, and approval context. UI visibility is not authorization. |
| Access review and revocation | Record review evidence, exceptions, revoked/offboarded access, and unresolved access blockers. |
| Customer-visible history | Identify what history is shown, its source and evidence state, and the boundary from authoritative audit evidence. |
| Remote support | Record customer authorization and technical availability under INSTALL010; do not expose credentials, private URLs, or unnecessary media. |
| Data minimization | Limit media, metadata, screenshots, exports, and access to what the approved purpose and evidence require. |
| Exceptions and decisions | Record unresolved owner, required decision/evidence, next action, and whether implementation/acceptance is blocked. |

## 3. Access and presentation rules

- Media is visible only in an approved dashboard class and authenticated context supported by actual backend authorization evidence.
- Customer media presentation includes only approved installed capability and customer-safe labels; raw identifiers and diagnostic internals remain outside normal customer views.
- Installer / Commissioning access is temporary and bounded to authorized setup, validation, and acceptance work.
- Service / Operator access is conditional, limited, and governed by INSTALL010, including customer authorization where required and revocation/offboarding evidence.
- A prototype, profile selector, hidden card, or conditional display never proves identity, permission, consent, or recording posture.
- Unknown, unavailable, unverified, or not-installed media capability must remain explicit and must not be presented as live, recording, retained, or secure.

## 4. Recording, audio, retention, and history

Recording, audio, retention, deletion, and export are site/platform decisions that require current authority and evidence. This standard sets no universal recording posture, audio posture, retention duration, deletion promise, or export promise.

When no explicit retention duration is approved, record the evidenced platform-default posture and the absence of an approved duration. If a business, legal, or customer policy is required but unavailable, mark `OPERATOR_DECISION_REQUIRED`. Customer-visible media history and notification history are not authoritative compliance, security, or forensic audit logs merely because they are displayed or retained.

## 5. Claims, privacy, and remote-support boundaries

- Do not infer surveillance, monitored service, dispatch, emergency response, prevention, guaranteed detection, complete coverage, or always-watched claims.
- Do not publish or commit customer-private media, raw exports, credentials, tokens, private URLs, access codes, or unnecessary identifying data.
- Remote review must use only the minimum media and metadata required for the authorized support purpose.
- Notice, consent, access, recording, audio, and retention choices that lack current authority remain operator decisions; this document does not manufacture privacy or legal policy.

## 6. Acceptance gate

Applicable media capability is acceptable only when the decision record identifies visibility, actual authorization evidence, recording posture, audio posture, retention owner/configuration evidence, notice/consent posture, access review/revocation, customer-history boundary, remote-support posture, unresolved decisions, and validation evidence. Any required unknown remains `UNRESOLVED / BLOCKED` for the affected media capability.

## 7. Protected boundary

This standard does not authorize live Home Assistant access, camera/NVR configuration, recording or audio changes, dashboard YAML, customer-data access, remote access, authentication/permission changes, notification changes, deployment, or any protected/runtime-system mutation. Each implementation requires a separate bounded task and approved site evidence.
