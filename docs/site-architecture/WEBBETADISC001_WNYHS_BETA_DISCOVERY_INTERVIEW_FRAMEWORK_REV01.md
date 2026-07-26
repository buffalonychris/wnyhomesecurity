# WEBBETADISC001 WNYHS Beta Discovery Interview Framework REV01

## 1. Document control

- **Status:** ACTIVE ON MERGE
- **Task ID:** WEBBETADISC001
- **Owner:** Site Architecture
- **Document type:** Staged discovery interview framework
- **Implementation authority:** None
- **Revision:** REV01

## 2. Purpose

This framework extracts decisions that exist in the operator's head without making the operator restate direction already approved in WEBBETADISC001 or current repository owners.

The interview produces reviewable decisions for later promotion. It does not authorize implementation.

## 3. Interview operating rules

1. Begin each session with the last approved checkpoint, not the full project history.
2. Present approved direction as a short confirmation; do not re-ask it unless new evidence creates a conflict.
3. Ask no more than one coherent stage or five tightly related questions at a time.
4. Explain why an answer matters when the tradeoff is not obvious.
5. Offer concrete alternatives only when repository evidence supports them.
6. Preserve `Operator Decision Required` when the answer is unknown.
7. Separate doctrine, policy, design preference, procedure, technical mechanism, and implementation.
8. Route detailed rules to their dedicated owners rather than placing them in site architecture.
9. End each stage with:
   - decisions confirmed;
   - decisions changed;
   - open questions;
   - assumptions rejected;
   - affected requirement IDs;
   - proposed owner documents; and
   - confidence/readiness for the next stage.
10. Promote approved results only through a bounded repository task.

## 4. Session checkpoint format

```text
Interview program: WEBBETADISC001
Current stage:
Previously completed stages:
Approved decisions carried forward:
Questions answered in this session:
New decisions:
Open decisions:
Conflicts:
Owner documents affected:
Requirements affected:
Ready for next stage: YES / NO
Operator approval required:
```

## 5. Stage 1 — Audiences

**Already approved:** The site serves multiple public audiences and must keep public, customer, and owner/employee experiences distinct.

**Questions:**

1. Which three audiences matter most for the first beta release?
2. Which audience is commercially most valuable, and which is most urgent to serve?
3. What does each priority audience already know, fear, misunderstand, and need?
4. Which audiences require different terminology, proof, or calls to action?
5. Which audiences are explicitly deferred from beta release one?

**Output:** Prioritized audience matrix with needs, objections, proof, conversion, and deferral status.

## 6. Stage 2 — Positioning

**Already approved:** WNYHS is a locally accountable, solution-first smart-property company, not a conventional subscription alarm clone.

**Questions:**

1. What should a visitor say WNYHS is after ten seconds?
2. Which competitors or alternatives should the site distinguish WNYHS from without naming or attacking them?
3. Which three differentiators must be understood on every major entry page?
4. What does "smart property" mean in ordinary language?
5. Which positioning statements require claims-owner review?

**Output:** Positioning hierarchy and claims-review queue.

## 7. Stage 3 — Emotional response

**Already approved:** The visual experience must be premium, striking, memorable, and trustworthy.

**Questions:**

1. Which feelings should occur in the first five, thirty, and ninety seconds?
2. What should feel distinctly Western New York without becoming themed decoration?
3. Which visual styles, brands, places, films, or products capture the desired reaction?
4. What would make the result feel cheap, generic, intimidating, or overproduced?
5. How should the emotional tone change for senior safety, commercial, support, and expansion journeys?

**Output:** Emotional-response brief and anti-reference list.

## 8. Stage 4 — Primary conversions

**Already approved:** Different visitors may need different next actions.

**Questions:**

1. What are the primary conversions for new residential, commercial, senior-safety, customer-support, and expansion visitors?
2. Which conversion should be available immediately and which requires education first?
3. What qualifies a useful lead?
4. What should happen when a visitor is not ready to speak with someone?
5. Which conversion metrics determine success?

**Output:** Conversion hierarchy, qualification definition, and KPI candidates.

## 9. Stage 5 — Customer journeys

1. What are the minimum successful journeys for each priority audience?
2. Which journey begins with a problem, property area, life event, pillar, campaign, or direct service need?
3. Where does trust need to be established before an ask?
4. Where may a visitor branch, save progress, return, or request human help?
5. Which existing production journeys must be preserved rather than redesigned?

**Output:** Journey maps with entry, trust, decision, conversion, handoff, and return points.

## 10. Stage 6 — Navigation

**Current rule:** Public discovery uses Homepage → Category → Solution → Estimate/Contact, with direct entry.

1. What belongs in primary navigation versus discovery tools, footer, or contextual links?
2. Should visitors browse by problem, property area, audience, pillar, search, or a combination?
3. What labels make sense without internal terminology?
4. How should Support and Existing Customer entry remain visible?
5. Which campaign and protected-system routes must remain outside ordinary navigation?

**Output:** Navigation decision matrix; no route implementation.

## 11. Stage 7 — Six-pillar structure

**Current rule:** Exact category order is fixed.

1. What customer promise and boundary defines each pillar?
2. Where do common problems belong when they span pillars?
3. How should Property Management serve residential, commercial, and multi-property visitors?
4. What content belongs at pillar level rather than solution level?
5. What proof or CTA is unique to each pillar?

**Output:** Pillar-purpose matrix and overlap rules.

## 12. Stage 8 — Solution taxonomy

1. What makes a capability a public solution rather than an internal option, component, package, or research candidate?
2. Which relationship types are needed among problem, solution, pillar, audience, property type, hardware, and package?
3. How should multi-pillar solutions be owned and displayed without duplication?
4. What states control research, validation, commercial approval, content readiness, publication, revision, and retirement?
5. Which fields are mandatory before public eligibility?

**Output:** Proposed solution taxonomy and approval-state model for later owner review.

## 13. Stage 9 — Content types

1. Which content types are required at launch: guides, comparisons, FAQs, videos, diagrams, case studies, checklists, glossaries, or others?
2. Which types answer awareness, consideration, decision, support, and expansion needs?
3. What is the minimum viable quality and evidence for each type?
4. Which content should be evergreen, time-bound, or campaign-specific?
5. What should never become public content?

**Output:** Content-type catalog and lifecycle proposal.

## 14. Stage 10 — Visual language

1. Which existing WNYHS assets and visual standards should be retained, evolved, or treated only as reference?
2. What should define color, type, spatial rhythm, surfaces, imagery, illustration, iconography, and data display?
3. How much visual drama is appropriate at each journey stage?
4. Which components must be reusable across all six pillars?
5. What is the acceptance method for "exceptional" visual quality?

**Output:** Visual-language decision brief and visual-review method.

## 15. Stage 11 — Motion and media

1. Where does motion explain system behavior better than static content?
2. Which video types are useful: overview, solution, demonstration, testimonial, installation, support?
3. What must remain usable without autoplay, audio, or animation?
4. What reduced-motion, bandwidth, caption, transcript, and mobile constraints apply?
5. Who owns and approves media?

**Output:** Motion/media principles and production backlog.

## 16. Stage 12 — Dark and light modes

1. Which mode is default, or should system preference control the initial view?
2. How and where does the user override appear?
3. How is preference stored, disclosed, and reset?
4. Which assets require mode-specific variants?
5. What parity and contrast tests are mandatory?

**Output:** Mode contract inputs for WEBBETADESIGN001.

## 17. Stage 13 — Seasonal themes

1. Which themes should be supported first?
2. Who may create, approve, schedule, cancel, and expire a theme?
3. Which token layers can a theme change?
4. Which areas must never change?
5. What preview, rollback, and audit evidence is required?

**Output:** Temporary-theme governance requirements; no admin implementation.

## 18. Stage 14 — Local SEO

1. Which WNY service areas, communities, property types, and local concerns are legitimate priorities?
2. What local proof exists and who owns it?
3. Which geographic pages or content patterns would be useful versus thin duplication?
4. Which structured data, media, and internal links support local authority?
5. Which outcomes will be measured in Search Console, Bing, maps, calls, forms, and sales?

**Output:** Local-authority strategy inputs and evidence gaps.

## 19. Stage 15 — Campaigns and attribution

1. Which campaign sources launch first?
2. What naming convention controls source, medium, campaign, asset, and placement?
3. What constitutes first touch, return touch, assisted conversion, and final conversion?
4. How long may attribution data persist and under what privacy basis?
5. Which campaign-specific landing experiences are justified?

**Output:** Attribution decision set and campaign taxonomy proposal.

## 20. Stage 16 — HubSpot ownership

1. Which facts belong to HubSpot versus the website, repository, analytics, scheduling, or future KAOS?
2. Which HubSpot objects and properties are required for beta?
3. What deduplication, permissions, error, retry, and audit rules apply?
4. What test environment prevents production contamination?
5. Which lifecycle changes require human approval?

**Output:** CRM systems-of-record decision package for WEBBETAHUBSPOT001.

## 21. Stage 17 — Scheduling

1. Which appointment types, durations, employees, service areas, buffers, and lead times are valid?
2. Which calendars determine availability?
3. What is requested, held, confirmed, rescheduled, or canceled?
4. Which steps require operator confirmation?
5. What data belongs in Calendar, HubSpot, email, and the website?

**Output:** Scheduling decision package; current operator-confirmed rule remains.

## 22. Stage 18 — Existing-customer support

1. What should a customer be able to do without authentication?
2. Which support categories require immediate human contact?
3. What evidence should accompany a support request?
4. How should support avoid surveillance, secret exposure, and unsupported emergency promises?
5. Which support needs belong in a later authenticated experience?

**Output:** Public support-entry architecture and future authenticated boundary.

## 23. Stage 19 — Customer expansion

1. How should customers discover compatible additions?
2. What installed-system context is needed before making recommendations?
3. Which expansion requests can be public versus authenticated?
4. How should HubSpot or future KAOS record expansion interest?
5. What prevents unsupported compatibility or price promises?

**Output:** Expansion journey and system-boundary decision package.

## 24. Stage 20 — Public versus authenticated experiences

1. Which facts and actions are safe in public?
2. Which require customer identity, staff role, or operator approval?
3. Should authenticated customer and internal applications share infrastructure, identity, or only integration contracts?
4. What is explicitly excluded from the beta?
5. What security review is required before any authenticated work?

**Output:** Experience boundary and future security-task requirements.

## 25. Stage 21 — Performance

1. What are acceptable Core Web Vitals and page-weight budgets by page family?
2. How should image, video, fonts, animation, maps, and third-party scripts be constrained?
3. Which devices and network conditions form the baseline?
4. What telemetry is acceptable without compromising privacy?
5. What failure blocks beta acceptance?

**Output:** Performance budget inputs and test matrix.

## 26. Stage 22 — Accessibility

1. What WCAG target and legal/ethical posture applies?
2. Which assistive technologies and manual checks are required?
3. What are the keyboard, focus, contrast, zoom, reduced-motion, caption, transcript, and error-message requirements?
4. Who reviews exceptions?
5. What blocks launch?

**Output:** Accessibility acceptance contract inputs.

## 27. Stage 23 — Analytics

1. Which questions must analytics answer?
2. Which event taxonomy covers discovery, engagement, forms, assessments, appointments, quotes, deposits, support, and expansion?
3. What consent, retention, identity, test-data, and access rules apply?
4. How are beta and production separated?
5. Which data is directional versus authoritative?

**Output:** Analytics data and event decision package.

## 28. Stage 24 — Owner reporting

1. What should the operator see daily, weekly, monthly, and by campaign?
2. Which KPIs indicate attraction, understanding, qualification, sales, loyalty, support, and expansion?
3. Which source owns each KPI?
4. What thresholds trigger action?
5. What should agents or automations review and recommend?

**Output:** KPI and dashboard requirement package; no dashboard implementation.

## 29. Stage 25 — Future KAOS integration

1. What public-site events or records should eventually flow to KAOS?
2. Which functions remain in HubSpot, Google Workspace, repository systems, or dedicated modules?
3. What APIs/events are preferable to shared database coupling?
4. What owner/employee actions must never appear in public UI?
5. What dependency would wrongly block the public beta?

**Output:** Future integration boundary, explicitly marked runway.

## 30. Stage 26 — Beta acceptance

1. Who reviews the beta and in what sequence?
2. What qualitative and quantitative acceptance criteria apply?
3. Which pages, journeys, devices, browsers, modes, themes, integrations, and content must be complete?
4. Which defects are blocking?
5. How long must the beta run before production consideration?

**Output:** Beta acceptance plan and decision gate.

## 31. Stage 27 — Production migration

1. Is migration a code replacement, selective reconciliation, parallel application cutover, or another controlled method?
2. How will canonical URLs, redirects, analytics, forms, CRM, scheduling, payments, QR, and search indexing transition?
3. What data or content migrates and who approves it?
4. What is the traffic/cutover sequence?
5. Who authorizes merge, deployment, and domain changes?

**Output:** Migration decision inputs; no cutover authority.

## 32. Stage 28 — Rollback

1. What conditions trigger rollback?
2. What is the last-known-good production artifact?
3. Can the beta deployment be removed independently?
4. How are DNS/domain, routes, integrations, analytics, and data restored or isolated?
5. What evidence and incident review follow a rollback?

**Output:** Rollback contract inputs and owner responsibilities.

## 33. Completion gate

The discovery interview is complete only when:

- all 28 stages have a recorded disposition;
- approved direction is promoted into the proper repository owners;
- unresolved decisions are explicit;
- conflicts are routed without silent resolution;
- requirements are traceable;
- future tasks have bounded purposes and dependencies;
- the operator approves discovery closeout.

Completion does not authorize design, source changes, a beta application, deployment, migration, or production changes.
