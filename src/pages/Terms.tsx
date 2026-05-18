import { useSearchParams } from 'react-router-dom';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';

type TermsSection = {
  title: string;
  body: string[];
};

const termsSections: TermsSection[] = [
  {
    title: 'Estimate requests',
    body: [
      'Online form submissions are requests for review and are not guaranteed appointments or guaranteed service commitments.',
      'WNY Home Security may contact you to clarify your property needs, timing, access, and project scope.',
      'Final pricing, equipment selections, and installation scope must be confirmed in writing.',
    ],
  },
  {
    title: 'System design and recommendations',
    body: [
      'Recommendations are based on the information you provide and available property details we can review.',
      'Package options are starting points and may need adjustment for your layout, priorities, and budget.',
      'Final system design may change after walkthrough review or installation planning.',
    ],
  },
  {
    title: 'Installation and property access',
    body: [
      'You are responsible for providing safe and legal access to the areas where installation work is needed.',
      'Installation timing may depend on equipment availability, site conditions, weather, electrical/network readiness, and customer availability.',
      'Some work items may require your approval before we proceed.',
    ],
  },
  {
    title: 'Equipment and third-party services',
    body: [
      'Some solutions may involve third-party hardware, software, apps, cloud services, internet access, or manufacturer platforms.',
      'Third-party availability, updates, subscriptions, outages, and app behavior are outside the direct control of WNY Home Security.',
      'Even locally controlled systems can be affected by power, network conditions, and device health.',
    ],
  },
  {
    title: 'No guarantee of prevention or response',
    body: [
      'Security systems can reduce risk, improve visibility, and support practical protection planning.',
      'No system can prevent every theft, intrusion, loss, damage, response delay, or service interruption.',
      'WNY Home Security does not make guaranteed protection claims.',
    ],
  },
  {
    title: 'Customer responsibilities',
    body: [
      'You are responsible for providing accurate property and contact information.',
      'Where applicable, maintain power, internet/network access, app/account access, passwords, and basic device care.',
      'Test and maintain your system as recommended, and follow local rules, privacy expectations, and camera placement requirements.',
    ],
  },
  {
    title: 'Communications consent',
    body: [
      'By submitting a request form, you authorize WNY Home Security to contact you about your request using the contact details you provided.',
      'Communication may include phone, email, or text when supplied and authorized.',
      'You may ask us to stop communications, except for transactional or service-related communications where applicable.',
    ],
  },
  {
    title: 'Payments and deposits',
    body: [
      'Payments, deposits, invoices, and payment links are governed by the terms shown at checkout, on invoices, or in your written agreement.',
    ],
  },
  {
    title: 'Cancellations and rescheduling',
    body: [
      'Please provide reasonable notice if you need to cancel or reschedule.',
      'WNY Home Security may reschedule based on weather, property access issues, safety concerns, equipment availability, or other operational constraints.',
    ],
  },
  {
    title: 'Limitation of liability',
    body: [
      'To the extent permitted by law, WNY Home Security is not responsible for indirect, incidental, or consequential damages.',
      'Customers should maintain appropriate insurance and practical safety practices.',
      'These terms do not limit responsibilities that cannot legally be limited.',
    ],
  },
  {
    title: 'Website use',
    body: [
      'Do not misuse the website, forms, or systems.',
      'Do not submit false or misleading information.',
      'Do not attempt unauthorized access to website systems or data.',
    ],
  },
  {
    title: 'Updates to terms',
    body: [
      'These terms may be updated periodically.',
      'Continued website use after updates means you accept the updated terms.',
    ],
  },
  {
    title: 'Contact',
    body: ['WNY Home Security', 'Western New York', 'Phone: 716.391.2405', 'Email: hello@wnyhomesecurity.com'],
  },
];

const Terms = () => {
  const [searchParams] = useSearchParams();
  const isHomeSecurityHost = typeof window !== 'undefined' && window.location.hostname.includes('wnyhomesecurity.com');
  const isHomeSecurity = searchParams.get('vertical') === 'home-security' || isHomeSecurityHost;

  const content = (
    <div className="wnyhs-marketing-stack" style={{ display: 'grid', gap: '1.5rem' }}>
      <section style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">Terms &amp; Conditions</div>
        <h1 style={{ marginTop: 0 }}>Terms &amp; Conditions</h1>
        <p style={{ margin: 0 }}>
          Terms for using the WNY Home Security website, requesting estimates, and working with us on home security
          planning, installation, and support.
        </p>
      </section>

      <section className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <h2 style={{ marginTop: 0 }}>General note</h2>
        <p style={{ margin: 0 }}>
          These terms are provided for general website and service-use clarity and do not replace a signed estimate,
          agreement, invoice, or service contract.
        </p>
      </section>

      {termsSections.map((section) => (
        <section key={section.title} className="card" style={{ display: 'grid', gap: '0.75rem' }}>
          <h2 style={{ marginTop: 0 }}>{section.title}</h2>
          <div style={{ display: 'grid', gap: '0.625rem' }}>
            {section.body.map((line) => (
              <p key={line} style={{ margin: 0 }}>
                {line}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );

  if (isHomeSecurity) {
    return <WnyhsMarketingLayout ctaLink="/discovery?vertical=home-security">{content}</WnyhsMarketingLayout>;
  }

  return <div className="container section">{content}</div>;
};

export default Terms;
