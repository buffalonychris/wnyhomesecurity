import { Link } from 'react-router-dom';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
import { useLayoutConfig } from '../components/LayoutConfig';
import { ourWorkGallery, type OurWorkGalleryCategory, type OurWorkGalleryItem } from '../data/ourWorkGallery';
import { recommendedBrandAssets } from '../data/brandAssets';

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
    showBreadcrumbs: false,
    breadcrumb: [],
  });

  return (
    <WnyhsMarketingLayout ctaLink="/contact?vertical=home-security">
      <div className="wnyhs-marketing-stack">
        <section className="card wnyhs-gallery-intro">
          <p className="eyebrow wnyhs-gallery-text-reset">Our Work</p>
          <h1 className="wnyhs-gallery-text-reset">Real Protection. Real Homes. Real Local Work.</h1>
          <p className="wnyhs-gallery-body wnyhs-gallery-body--wide">
            WNY Home Security designs practical camera, alarm, automation, and protection systems for homes and
            small businesses across Western New York. Every setup is professionally designed around daily routines,
            visibility goals, and practical protection that works in real conditions.
          </p>
          <div className="wnyhs-gallery-actions">
            <Link className="btn btn-primary" to="/contact?vertical=home-security">
              Request a Free Estimate
            </Link>
            <Link className="btn btn-secondary" to="/packages?vertical=home-security">
              View Security Packages
            </Link>
          </div>
        </section>

        <section className="card wnyhs-gallery-section" aria-labelledby="featured-gallery-heading">
          <div>
            <p className="eyebrow wnyhs-gallery-text-reset">Featured Projects</p>
            <h2 id="featured-gallery-heading" className="wnyhs-gallery-heading-spaced">High-Impact Local Install Highlights</h2>
          </div>
          <div className="wnyhs-gallery-featured-grid">
            {featuredItems.map((item) => (
              <article key={item.slug} className="card wnyhs-gallery-card">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="wnyhs-gallery-image"
                />
                <div className="wnyhs-gallery-card-body">
                  <span className={categoryStyles[item.category].className}>{categoryStyles[item.category].label}</span>
                  <h3 className="wnyhs-gallery-text-reset">{item.title}</h3>
                  <p className="wnyhs-gallery-body">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {categorySections.slice(0, 4).map((section) => {
          const sectionItems = ourWorkGallery.filter((item) => section.categories.includes(item.category)).sort(sortByPriority);

          return (
            <section key={section.heading} className="card wnyhs-gallery-section">
              <h2 className="wnyhs-gallery-text-reset">{section.heading}</h2>
              <div className="wnyhs-gallery-grid">
                {sectionItems.map((item) => (
                  <article key={item.slug} className="card wnyhs-gallery-card wnyhs-gallery-card--compact">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="wnyhs-gallery-image"
                    />
                    <div className="wnyhs-gallery-card-body wnyhs-gallery-card-body--compact">
                      <span className={categoryStyles[item.category].className}>{categoryStyles[item.category].label}</span>
                      <h3 className="wnyhs-gallery-card-title--compact">{item.title}</h3>
                      <p className="wnyhs-gallery-body wnyhs-gallery-body--compact">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        <section className="card wnyhs-gallery-intro wnyhs-gallery-intro--tight">
          <h2 className="wnyhs-gallery-text-reset">Built for Western New York. Built for Real Life.</h2>
          <p className="wnyhs-gallery-body wnyhs-gallery-body--wide">
            We are locally focused and local-first, with custom security systems designed around how people actually
            live and work. We offer no mandatory monthly contracts and practical protection with camera, alarm, and
            automation systems, local recording options, smart alerts, and water/leak awareness where it matters.
          </p>
        </section>

        <section className="card wnyhs-gallery-cta-panel">
          <div className="wnyhs-gallery-card-body wnyhs-gallery-card-body--compact">
            <h2 className="wnyhs-gallery-text-reset">Prefer a quick scan walkthrough?</h2>
            <p className="wnyhs-gallery-body">
              We can use branded QR cards and placards for quick on-site handoff and next-step estimate access.
            </p>
          </div>
          <img
            src={recommendedBrandAssets.qrPlacardReference}
            alt="WNY Home Security QR placard sample"
            loading="lazy"
            className="wnyhs-gallery-image wnyhs-gallery-image--placard"
          />
        </section>

        <section className="card wnyhs-gallery-final-cta">
          <h2 className="wnyhs-gallery-text-reset">Want your home or business protected like this?</h2>
          <p className="wnyhs-gallery-body">
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
