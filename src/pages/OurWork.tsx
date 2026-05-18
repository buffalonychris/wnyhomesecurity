import { Link } from 'react-router-dom';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
import { useLayoutConfig } from '../components/LayoutConfig';
import { ourWorkGallery, type OurWorkGalleryCategory, type OurWorkGalleryItem } from '../data/ourWorkGallery';

const categorySections: { heading: string; categories: OurWorkGalleryCategory[] }[] = [
  { heading: 'Home Perimeter Protection', categories: ['Residential Security', 'Outdoor Protection'] },
  { heading: 'Smart Home Control', categories: ['Smart Home Control'] },
  { heading: 'Family Safety', categories: ['Family Safety'] },
  { heading: 'Water / Leak Protection', categories: ['Water & Leak Protection'] },
  { heading: 'Commercial Protection', categories: ['Commercial Security'] },
];

const categoryStyles: Record<OurWorkGalleryCategory, { label: string; className: string }> = {
  'Residential Security': { label: 'Residential Security', className: 'badge' },
  'Outdoor Protection': { label: 'Outdoor Protection', className: 'badge badge--subtle' },
  'Smart Home Control': { label: 'Smart Home Control', className: 'badge' },
  'Water & Leak Protection': { label: 'Water & Leak Protection', className: 'badge badge--subtle' },
  'Commercial Security': { label: 'Commercial Security', className: 'badge' },
  'Family Safety': { label: 'Family Safety', className: 'badge badge--subtle' },
};

const sortByPriority = (a: OurWorkGalleryItem, b: OurWorkGalleryItem) => a.priority - b.priority;

const featuredItems = ourWorkGallery.filter((item) => item.featured).sort(sortByPriority);

const OurWork = () => {
  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: true,
    breadcrumb: [{ label: 'Home Security', href: '/home-security' }, { label: 'Our Work' }],
  });

  return (
    <WnyhsMarketingLayout ctaLink="/contact?vertical=home-security">
      <div className="wnyhs-marketing-stack">
        <section className="card" style={{ display: 'grid', gap: '1rem' }}>
          <p className="eyebrow" style={{ margin: 0 }}>Our Work</p>
          <h1 style={{ margin: 0 }}>Real Protection. Real Homes. Real Local Work.</h1>
          <p style={{ margin: 0, color: 'var(--color-text-secondary)', maxWidth: '70ch' }}>
            WNY Home Security designs practical camera, alarm, automation, and protection systems for homes and
            small businesses across Western New York. Every setup is professionally designed around daily routines,
            visibility goals, and practical protection that works in real conditions.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Link className="btn btn-primary" to="/contact?vertical=home-security">
              Request a Free Estimate
            </Link>
            <Link className="btn btn-secondary" to="/packages?vertical=home-security">
              View Security Packages
            </Link>
          </div>
        </section>

        <section className="card" aria-labelledby="featured-gallery-heading" style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <p className="eyebrow" style={{ margin: 0 }}>Featured Projects</p>
            <h2 id="featured-gallery-heading" style={{ margin: '0.4rem 0 0' }}>High-Impact Local Install Highlights</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {featuredItems.map((item) => (
              <article key={item.slug} className="card" style={{ margin: 0, padding: '0.75rem', display: 'grid', gap: '0.65rem' }}>
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  style={{ width: '100%', borderRadius: '0.75rem', aspectRatio: '4 / 3', objectFit: 'cover' }}
                />
                <div style={{ display: 'grid', gap: '0.45rem' }}>
                  <span className={categoryStyles[item.category].className}>{categoryStyles[item.category].label}</span>
                  <h3 style={{ margin: 0 }}>{item.title}</h3>
                  <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {categorySections.map((section) => {
          const sectionItems = ourWorkGallery.filter((item) => section.categories.includes(item.category)).sort(sortByPriority);

          return (
            <section key={section.heading} className="card" style={{ display: 'grid', gap: '1rem' }}>
              <h2 style={{ margin: 0 }}>{section.heading}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.9rem' }}>
                {sectionItems.map((item) => (
                  <article key={item.slug} className="card" style={{ margin: 0, padding: '0.7rem', display: 'grid', gap: '0.6rem' }}>
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      style={{ width: '100%', borderRadius: '0.75rem', aspectRatio: '4 / 3', objectFit: 'cover' }}
                    />
                    <div style={{ display: 'grid', gap: '0.35rem' }}>
                      <span className={categoryStyles[item.category].className}>{categoryStyles[item.category].label}</span>
                      <h3 style={{ margin: 0, fontSize: '1.02rem' }}>{item.title}</h3>
                      <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        <section className="card" style={{ display: 'grid', gap: '0.8rem' }}>
          <h2 style={{ margin: 0 }}>Built for Western New York. Built for Real Life.</h2>
          <p style={{ margin: 0, color: 'var(--color-text-secondary)', maxWidth: '70ch' }}>
            We are locally focused and local-first, with custom security systems designed around how people actually
            live and work. We offer no mandatory monthly contracts and practical protection with camera, alarm, and
            automation systems, local recording options, smart alerts, and water/leak awareness where it matters.
          </p>
        </section>

        <section className="card" style={{ display: 'grid', gap: '0.75rem', textAlign: 'center' }}>
          <h2 style={{ margin: 0 }}>Want your home or business protected like this?</h2>
          <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
            Let&apos;s design a practical, professionally designed system for your property.
          </p>
          <div>
            <Link className="btn btn-primary" to="/contact?vertical=home-security">
              Start Your Free Estimate
            </Link>
          </div>
        </section>
      </div>
    </WnyhsMarketingLayout>
  );
};

export default OurWork;
