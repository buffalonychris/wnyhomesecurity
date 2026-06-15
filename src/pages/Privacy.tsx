import { useSearchParams } from 'react-router-dom';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';

const Privacy = () => {
  const [searchParams] = useSearchParams();
  const isHomeSecurityHost = typeof window !== 'undefined' && window.location.hostname.includes('wnyhomesecurity.com');
  const isHomeSecurity = searchParams.get('vertical') === 'home-security' || isHomeSecurityHost;

  const content = (
    <div className="wnyhs-shell wnyhs-marketing-stack">
      <section className="wnyhs-section">
        <p className="wnyhs-eyebrow">Privacy Policy</p>
        <h1 className="wnyhs-heading">Privacy for the scheduling assistant</h1>
        <p className="wnyhs-description">
          This policy explains how call and text data is handled for the estimate scheduling assistant.
        </p>
      </section>

      <section className="wnyhs-section">
        <h2 className="wnyhs-heading">Call recordings</h2>
        <p className="wnyhs-description">
          Calls may be recorded for quality, scheduling accuracy, and audit trail purposes. Access is limited to
          authorized users.
        </p>
      </section>

      <section className="wnyhs-section">
        <h2 className="wnyhs-heading">SMS usage</h2>
        <p className="wnyhs-description">
          SMS is used for appointment confirmations, reminders, and opt-in scheduling updates. Message rates may
          apply based on your carrier.
        </p>
      </section>

      <section className="wnyhs-section">
        <h2 className="wnyhs-heading">Data retention</h2>
        <p className="wnyhs-description">
          Scheduling interactions are retained only as long as needed for audit trails, scheduling accuracy, and
          compliance. Retention windows are shared during onboarding.
        </p>
      </section>

      <section className="wnyhs-section">
        <h2 className="wnyhs-heading">Opt-out handling</h2>
        <p className="wnyhs-description">
          Customers can opt out of SMS updates at any time. Opt-out requests are honored promptly and recorded in
          the scheduling log.
        </p>
      </section>
    </div>
  );

  if (isHomeSecurity) {
    return (
      <WnyhsMarketingLayout ctaLink="/discovery?vertical=home-security">
        {content}
      </WnyhsMarketingLayout>
    );
  }

  return <div className="container section">{content}</div>;
};

export default Privacy;
