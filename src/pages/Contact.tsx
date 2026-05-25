import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useLayoutConfig } from '../components/LayoutConfig';
import { brandHomeSecurity, brandSite } from '../lib/brand';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
import { resolveVertical } from '../lib/verticals';
import { buildSms, buildTel, wnyhsContact } from '../content/wnyhsContact';
import CanonicalEstimateRequestForm from '../components/CanonicalEstimateRequestForm';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const vertical = resolveVertical(searchParams.get('vertical'));
  const isHomeSecurityHost = typeof window !== 'undefined' && window.location.hostname.includes('wnyhomesecurity.com');
  const isHomeSecurity = vertical === 'home-security' || isHomeSecurityHost;
  const tierParam = searchParams.get('tier')?.toLowerCase() ?? '';
  const packageTier = tierParam === 'bronze' || tierParam === 'silver' || tierParam === 'gold' ? tierParam : undefined;
  const recommended = searchParams.get('recommended')?.toLowerCase() ?? '';
  const fit = searchParams.get('fit') ?? '';

  useLayoutConfig({ layoutVariant: isHomeSecurity ? 'funnel' : 'sitewide', showBreadcrumbs: false, breadcrumb: [] });

  const params = new URLSearchParams(location.search);
  params.set('vertical', 'home-security');
  if (packageTier) params.set('tier', packageTier);
  if (recommended) params.set('recommended', recommended);
  if (fit) params.set('fit', fit);

  const content = <>
    <h2 style={{ marginTop: 0 }}>Talk with {isHomeSecurity ? brandHomeSecurity : brandSite}</h2>
    <p style={{ maxWidth: 640 }}>Request your estimate here. Share a few details so we can recommend the right next step.</p>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <a className="btn btn-link" href={buildTel()}>Call {wnyhsContact.phone.display}</a>
      <a className="btn btn-link" href={buildSms('Hi! I’d like to talk about Home Security. Please call me back.')}>Text {wnyhsContact.phone.display}</a>
      <Link className="btn btn-secondary" to={`/quoteReview?${params.toString()}`}>Review Estimate Summary</Link>
    </div>
    <section className="qr-panel" id="estimate-form">
      <h3>Request My Estimate</h3>
      <CanonicalEstimateRequestForm sourceFamily="MAIN_SITE" source="contact_page" landingRoute={`${location.pathname}${location.search}`} context={{ vertical, deal: packageTier ? { packageTier } : undefined }} />
    </section>
  </>;

  return isHomeSecurity ? <WnyhsMarketingLayout ctaLink="/discovery?vertical=home-security"><div className="wnyhs-marketing-stack">{content}</div></WnyhsMarketingLayout> : <div className="container section">{content}</div>;
};

export default Contact;
