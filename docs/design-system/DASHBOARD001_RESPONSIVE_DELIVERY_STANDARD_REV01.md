# DASHBOARD001 - Responsive Dashboard Delivery Standard - REV01

Status: Active design-system standard
Customer-facing: No
Implementation authority: Governance and delivery standard only; implementation requires a separate bounded task
Task ID: DASHBOARD001-RESPONSIVE-DELIVERY-STANDARD-001
Primary workstream: Dashboard / Interactive Experience System
Related standards:

- `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV01.md`
- `docs/design-system/customer-dashboard-design-standard-rev01.md`
- `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md`
- `docs/installer/INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md`

---

## 1. Purpose

This document defines the responsive dashboard delivery standard for all WNYHS customer-facing Home Assistant dashboards.

It applies to residential, commercial, BKLF, and future custom installs where customers may use Home Assistant Companion, a mobile browser, a tablet browser, or a desktop/PC browser.

Home Assistant may not reliably make every device-context decision that a custom web application would make. WNYHS therefore uses a governed dashboard delivery model with explicit dashboard targets, assignment rules, responsive behavior, validation screenshots, and handoff acceptance requirements.

This standard does not create Home Assistant YAML, dashboard YAML, themes, packages, website source files, runtime/source files, APIs, dependencies, live Home Assistant changes, customer-specific dashboards, customer data, Stripe changes, HubSpot changes, scheduling changes, Cloudflare configuration changes, or secrets.

## 2. Required Delivery Targets

Every WNYHS customer dashboard system must account for these delivery targets before customer handoff:

- HA Companion phone portrait.
- HA Companion tablet portrait.
- HA Companion tablet landscape.
- Browser phone.
- Browser tablet.
- Desktop/PC browser.

Implementation tasks may document that a target is not used by a specific customer, but they must not silently ignore the target. The handoff record should identify which targets are expected daily-use surfaces, which are secondary access surfaces, and which are not part of the customer scope.

## 3. Dashboard Variant Model

WNYHS uses dashboard variants to avoid forcing one layout to serve every device class.

### 3.1 Customer Mobile Dashboard

The Customer Mobile Dashboard is the default customer phone experience.

It is optimized for:

- HA Companion phone.
- Mobile browser.
- Quick daily checks.
- Primary customer actions.
- Low cognitive load.

The mobile dashboard should present the highest-value customer status and actions first. It should not expose dense diagnostic grids, wide table layouts, or desktop-style multi-panel dashboards.

### 3.2 Customer Expanded Dashboard

The Customer Expanded Dashboard is optimized for tablet landscape and desktop/PC browser use.

It may show more simultaneous information than the mobile dashboard, including broader camera visibility, grouped summaries, or multiple customer workflow panels. It must remain customer-readable and must not become a diagnostic service surface.

Expanded layout must not be a stretched phone layout. Wider screens should use additional room for better grouping, comparison, and scanability without flooding the customer with low-value status.

### 3.3 Optional Technician / Operator Dashboard

The Technician / Operator Dashboard is diagnostics, support, installer, or service use only.

It is not the normal customer-facing daily-use surface. It may include technical review data only when authorized by a bounded task and must remain separated from customer mode through visibility, navigation, naming, and handoff instructions.

## 4. Assignment Model

WNYHS must not rely on automatic detection alone.

Installer/operator assignment rules:

- Assign the correct default dashboard per device/user where Home Assistant allows it.
- Phone customer users should default to the Customer Mobile Dashboard.
- Tablet or kiosk users should default to the Customer Expanded Dashboard when appropriate for the install.
- Desktop shortcuts and bookmarks may open the Customer Expanded Dashboard.
- Technician/admin users may access the Technician / Operator Dashboard only when authorized.
- Customer users should not need to know which internal dashboard variant to choose during normal daily use.

If Home Assistant, Companion App, user permissions, browser context, kiosk mode, or shortcut behavior limits assignment, the implementation task must document the limitation and the fallback used.

## 5. Responsive Behavior

Responsive dashboard delivery must preserve the same customer meaning across device classes while changing layout density and card arrangement.

### 5.1 Phone

Phone experiences must use:

- Single-column layout.
- Large controls.
- Minimal scroll.
- Primary action visible quickly.
- No dense grids.
- No horizontal scrolling.
- No pinch/zoom dependency.

Phone portrait remains the primary customer usability target for most residential and small-business handoffs.

### 5.2 Tablet

Tablet experiences may use:

- One or two columns depending on orientation.
- Larger video and status cards.
- More visible summary context than phone.
- Stable terminology and safety color semantics.
- Touch targets that remain comfortable in Companion App and browser use.

Tablet portrait should stay closer to the mobile model. Tablet landscape may use the expanded model when the customer scope benefits from more simultaneous context.

### 5.3 Desktop / PC

Desktop and PC browser experiences may use:

- Expanded layout.
- More simultaneous panels.
- Wider camera/status grouping.
- Clear scan hierarchy.
- No information overload.

Desktop layout must not simply stretch phone cards across the entire screen. Wider layouts should organize customer-visible capabilities into understandable groups.

## 6. Consistency Rules

Across all device classes and dashboard variants, WNYHS dashboards must preserve:

- Same safety color meanings.
- Same icon meanings.
- Same customer language.
- Same primary workflow names.
- Same claim guardrails.
- Same security-sensitive action treatment.
- Same Light/Dark/Auto theme availability when technically feasible.
- Same customer versus technician separation.

Device-specific layout differences must not change the meaning of status, safety colors, customer actions, or visible claims.

## 7. Validation Screenshot Requirements

Before customer handoff, the implementation owner must collect screenshots or equivalent visual validation for the delivery targets used by the customer scope.

Required validation set:

- HA Companion phone portrait.
- HA Companion tablet portrait or landscape if a tablet is part of the install.
- Mobile browser.
- Tablet browser if tablet browser access is part of the customer scope.
- Desktop/PC browser if desktop access is part of the customer scope.

Validation evidence should confirm:

- First-screen status readability.
- Primary workflow reachability.
- Customer-safe vocabulary.
- Large touch targets on touch devices.
- Camera and control framing where applicable.
- Light/Dark/Auto access where technically feasible.
- No technical clutter in normal customer views.

Screenshots must not expose secrets, credentials, private URLs, customer private data beyond approved handoff context, or internal service notes.

## 8. Acceptance Requirements

A customer dashboard delivery is not complete until:

- The phone experience is usable without confusion.
- The primary customer workflow is reachable immediately.
- Security-sensitive controls remain clear and deliberate.
- No entity IDs or technical clutter appear in normal customer views.
- Theme controls are accessible where technically feasible.
- Desktop and tablet layouts do not create information overload.
- Installed capabilities appear in customer-readable groups.
- Uninstalled capabilities do not appear as empty or fake panels.
- Technician/operator content stays separated from normal customer use.
- Required screenshot or visual validation evidence is collected.

## 9. Custom Install Handling

Dashboard variants must adapt to the installed capability groups.

Custom-install rules:

- A customer with doorbells only must still receive a clean dashboard.
- A customer with many cameras must receive priority camera grouping.
- A customer with many doors, windows, or motions must receive grouped summaries.
- A customer with locks but no doorbells must receive entry-control surfaces without fake video assumptions.
- A customer with no locks must not see lock controls.
- A customer with lighting only must receive lighting and scene controls without security placeholders.
- A customer with environmental sensors must receive plain-language status only for installed and approved capabilities.

The dashboard should look intentionally scoped to the customer, not partially empty.

## 10. Light / Dark / Auto Behavior

Light, Dark, and Auto support is required where technically feasible.

Theme behavior rules:

- Theme control should be accessible from customer-facing surfaces.
- Theme choice must not change safety semantics.
- Theme choice must not hide controls.
- Customer accent colors may not override red, amber, or green safety meanings.
- Layout, action availability, customer language, and technician visibility boundaries must remain stable across theme choices.
- If Auto behavior is not technically feasible for a specific customer/device context, the implementation task must document the fallback.

Theme validation should include enough visual evidence to confirm that status, controls, and navigation remain readable in the customer-supported modes.

## 11. Forbidden Behavior

WNYHS responsive dashboard delivery must not:

- Create separate unrelated visual systems per device.
- Show empty placeholder panels.
- Expose diagnostics in customer views.
- Rely on unsupported Home Assistant or browser detection assumptions.
- Add outside response-authority, continuous third-party watch-service, agency-contact, promised-prevention, or promised-outcome claims.
- Let desktop layouts become service dashboards.
- Let phone layouts bury the primary customer workflow below low-value summaries.
- Use green for risky access or protection-changing actions.
- Show lock controls when no lock capability exists.
- Show video assumptions when no video capability exists.
- Make theme choice alter safety meaning, permissions, or customer-versus-technician boundaries.

## 12. Relationship to Existing Dashboard Standards

This standard extends the existing WNYHS dashboard governance set.

- `DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV01.md` defines customer interface semantics, safety colors, action treatment, custom-install adaptation, and protected claims posture.
- `customer-dashboard-design-standard-rev01.md` defines the WNYHS Customer Control Center product concept, mobile-first hierarchy, required screens, and customer/technician separation.
- `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md` defines dashboard classes, customer/installer/operator separation, view architecture, and mobile/tablet usability.
- `INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md` defines theme-readiness rules, Light/Dark/Auto expectations, and semantic color preservation.

If a future implementation task conflicts with one of these documents, the task must stop and request a governance or task revision before implementation.

## 13. Implementation Boundary

This standard is documentation and governance only.

Future dashboard implementation tasks must identify:

- customer/site scope;
- dashboard variant targets;
- target Home Assistant dashboard files;
- device/user assignment plan;
- capability inventory;
- expected Companion App and browser usage;
- validation screenshot plan;
- theme behavior plan;
- fallback behavior where automatic assignment is limited;
- protected-system review;
- rollback posture;
- exact allowed files.

Do not infer implementation authority from this standard. Do not modify Home Assistant YAML, dashboard files, themes, packages, website source, runtime/source files, APIs, dependencies, package-lock files, live services, Stripe, HubSpot, scheduling, Cloudflare configuration, secrets, or customer-specific data without a separate bounded task.

## 14. Success Criteria

A WNYHS customer dashboard delivery is on-standard when:

- every relevant customer device context has an assigned or documented dashboard target;
- phone customers land on a clear Customer Mobile Dashboard;
- tablet and desktop users receive an expanded layout only when it improves customer comprehension;
- customer-facing status, actions, labels, icons, and safety colors remain consistent across variants;
- security-sensitive actions remain deliberate and visually distinct;
- Light/Dark/Auto support is available where technically feasible;
- normal customer views contain no entity IDs, diagnostics, setup clutter, or unsupported claims;
- validation screenshots or equivalent evidence exist for expected Companion App and browser usage contexts;
- custom installs show only installed and approved capability groups;
- technician/operator dashboards remain separate from normal customer daily use.
