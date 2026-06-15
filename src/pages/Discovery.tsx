import { useEffect, useMemo } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import FitCheck from "../components/FitCheck";
import { useLayoutConfig } from "../components/LayoutConfig";
import { fitCheckConfigs } from "../content/fitCheckConfigs";
import WnyhsFunnelLayout from "../components/homeSecurity/WnyhsFunnelLayout";
import WnyhsFunnelStepHeader from "../components/homeSecurity/WnyhsFunnelStepHeader";
import WnyhsFunnelNotice from "../components/homeSecurity/WnyhsFunnelNotice";
import { updateRetailFlow } from "../lib/retailFlow";
import { HOME_SECURITY_ROUTES } from "../content/wnyhsNavigation";
import { buildTalkToUsMailto, wnyhsContact } from "../content/wnyhsContact";

const Discovery = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const requestedVertical = searchParams.get("vertical") ?? "home-security";
  const pathParam = searchParams.get("path");

  const resolvedVertical = useMemo(() => {
    if (fitCheckConfigs[requestedVertical]) {
      return requestedVertical;
    }
    return "home-security";
  }, [requestedVertical]);
  const isHomeSecurity = resolvedVertical === "home-security";

  useLayoutConfig({
    layoutVariant: "funnel",
    showBreadcrumbs: !isHomeSecurity,
    breadcrumb: !isHomeSecurity
      ? [
          {
            label: "Discovery",
            href: `/discovery?vertical=${resolvedVertical}`,
          },
          { label: "Fit Check" },
        ]
      : [],
  });

  const config = fitCheckConfigs[resolvedVertical];
  const showUnknownNote = requestedVertical !== resolvedVertical;

  useEffect(() => {
    if (isHomeSecurity && (pathParam === "online" || pathParam === "onsite")) {
      updateRetailFlow({ homeSecurity: { selectedPath: pathParam } });
    }
  }, [isHomeSecurity, pathParam]);

  const redirectMessage = (location.state as { message?: string } | undefined)
    ?.message;
  const talkToUsMailto = buildTalkToUsMailto({
    pageRoute: `${location.pathname}${location.search}`,
    preferredCallbackTime: "Weekdays 9am–6pm",
    question: "Tell us about your home and the best time to reach you.",
  });

  return (
    <WnyhsFunnelLayout
      showStepRail={false}
      ctaLink="/contact?vertical=home-security"
      ctaLabel="Request a Free Estimate"
    >
      <div className="wnyhs-funnel-stack">
        {isHomeSecurity && (
          <div className="wnyhs-fit-check-button-row">
            <Link
              className="wnyhs-button wnyhs-button--secondary"
              to={HOME_SECURITY_ROUTES.packages}
            >
              ← Back to Packages
            </Link>
          </div>
        )}
        {redirectMessage ? (
          <WnyhsFunnelNotice message={redirectMessage} />
        ) : null}
        {isHomeSecurity && (
          <div className="wnyhs-card wnyhs-fit-check-step-card">
            <WnyhsFunnelStepHeader
              stepId="fit-check"
              title="Fit Check"
              description="Answer a few quick questions to match the right tier."
            />
          </div>
        )}
        {showUnknownNote ? (
          <div>
            <p style={{ margin: 0, color: "rgba(165, 216, 247, 0.8)" }}>
              We couldn’t find that discovery vertical, so we loaded Home
              Security instead.
            </p>
          </div>
        ) : null}
        {isHomeSecurity ? (
          <FitCheck config={config} layout="embedded" />
        ) : (
          <FitCheck config={config} />
        )}
        {isHomeSecurity && (
          <div className="wnyhs-card wnyhs-fit-check-talk-card">
            <div className="wnyhs-eyebrow">Talk to us</div>
            <p className="wnyhs-card-copy">
              Prefer to talk first? Call, text, or email and we&apos;ll help
              with the next best step.
            </p>
            <div className="wnyhs-fit-check-button-row">
              <a
                href={`tel:${wnyhsContact.phone.tel}`}
                className="wnyhs-contact-support-link"
              >
                Call/Text {wnyhsContact.phone.display}
              </a>
              <a href={talkToUsMailto} className="wnyhs-contact-support-link">
                Email {wnyhsContact.emails.hello}
              </a>
            </div>
          </div>
        )}
      </div>
    </WnyhsFunnelLayout>
  );
};

export default Discovery;
