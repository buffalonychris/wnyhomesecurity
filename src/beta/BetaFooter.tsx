import { Link } from "react-router-dom";
import { SITE_BUILD_LABEL } from "../lib/siteVersion";
import { assessmentHref, betaFooterGroups } from "./navigation";

function BetaFooter() {
  return (
    <footer className="beta-footer">
      <div className="beta-shell beta-footer__lead">
        <div>
          <Link className="beta-brand beta-brand--footer" to="/beta">
            <img src="/brand/IconFinalHQ.jpg" width="52" height="53" alt="" />
            <span>
              <strong>W. N. Y. Home Security</strong>
              <small>One property. One designed system.</small>
            </span>
          </Link>
          <p>
            A locally accountable approach to a clearer, more capable property.
          </p>
        </div>
        <div>
          <p>Ready to talk through what matters at your property?</p>
          <Link
            className="beta-action beta-action--compact"
            to={assessmentHref}
          >
            Request a Property Assessment
          </Link>
        </div>
      </div>
      <div className="beta-shell beta-footer__groups">
        {betaFooterGroups.map((group) => (
          <nav
            key={group.label}
            aria-label={`${group.label} footer navigation`}
          >
            <strong>{group.label}</strong>
            {group.items.map((item) =>
              item.href ? (
                <Link key={item.label} to={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span key={item.label} aria-disabled="true">
                  {item.label}
                  <small>In development</small>
                </span>
              ),
            )}
          </nav>
        ))}
      </div>
      <div className="beta-shell beta-footer__meta">
        <small>
          {SITE_BUILD_LABEL} · Beta review route · Not the production homepage
        </small>
        <small>
          Customer support is not an emergency-monitoring or dispatch service.
        </small>
      </div>
    </footer>
  );
}

export default BetaFooter;
