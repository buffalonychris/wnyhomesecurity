import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
import { useLayoutConfig } from '../components/LayoutConfig';
import { ourWorkGallery } from '../data/ourWorkGallery';

const OurWork = () => {
  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: true,
    breadcrumb: [{ label: 'Home Security', href: '/home-security' }, { label: 'Our Work' }],
  });

  return (
    <WnyhsMarketingLayout ctaLink="/discovery?vertical=home-security">
      <div className="wnyhs-marketing-stack">
        <section className="card" style={{ display: 'grid', gap: '1rem' }}>
          <div className="badge">Our Work</div>
          <h1 style={{ margin: 0 }}>Recent Home Security Install Highlights</h1>
          <p style={{ margin: 0, color: 'var(--color-text-secondary)', maxWidth: '72ch' }}>
            A look at practical, clean installs and nighttime visibility scenarios that reflect the quality and style we target across Western New York homes.
          </p>
        </section>

        <section
          aria-label="Our work gallery"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
          }}
        >
          {ourWorkGallery.map((item) => (
            <figure key={item.src} className="card" style={{ margin: 0, padding: '0.75rem', display: 'grid', gap: '0.65rem' }}>
              <img src={item.src} alt={item.alt} loading="lazy" style={{ width: '100%', borderRadius: '0.75rem', objectFit: 'cover' }} />
              <figcaption>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{item.title}</strong>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem' }}>{item.alt}</span>
              </figcaption>
            </figure>
          ))}
        </section>
      </div>
    </WnyhsMarketingLayout>
  );
};

export default OurWork;
