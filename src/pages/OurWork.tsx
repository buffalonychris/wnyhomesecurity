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
  'Residential Security': { label: 'Residential Security', className: 'wnyhs-price-chip' },
  'Outdoor Protection': { label: 'Outdoor Protection', className: 'wnyhs-price-chip' },
  'Smart Home Control': { label: 'Smart Home Control', className: 'wnyhs-price-chip' },
  'Water & Leak Protection': { label: 'Water & Leak Protection', className: 'wnyhs-price-chip' },
  'Commercial Security': { label: 'Commercial Security', className: 'wnyhs-price-chip' },
  'Family Safety': { label: 'Family Safety', className: 'wnyhs-price-chip' },
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
      <div className="wnyhs-shell wnyhs-marketing-stack">
        <section className="wnyhs-section wnyhs-gallery-intro">
          <p className="eyebrow wnyhs-gallery-text-reset">Our Work</p>
          <h1 className="wnyhs-gallery-text-reset">Smart Property Solutions Built Around Real Problems</h1>
          <p className="wnyhs-gallery-body wnyhs-gallery-body--wide">
            WNY Home Security plans customer-owned camera, alert, automation, access, and property-awareness systems
            around how Western New York homes actually work. The examples below show common project concepts and
            solution patterns, not verified customer testimonials or claimed completed installs.
          </p>
          <div className="wnyhs-gallery-actions">
            <Link className="wnyhs-button wnyhs-button--primary" to="/contact?vertical=home-security">
              Request a Similar Setup
            </Link>
            <Link className="wnyhs-button wnyhs-button--secondary" to="/packages?vertical=home-security">
              View Smart Property Solutions
            </Link>
          </div>
        </section>

        <section className="wnyhs-section wnyhs-gallery-section" aria-labelledby="featured-gallery-heading">
          <div>
            <p className="eyebrow wnyhs-gallery-text-reset">Featured Solution Examples</p>
            <h2 id="featured-gallery-heading" className="wnyhs-gallery-heading-spaced">Problem, Solution, Outcome</h2>
            <p className="wnyhs-gallery-body wnyhs-gallery-body--wide">
              These cards translate common WNY homeowner and property-owner concerns into practical system planning
              examples. Verified customer quotes are not available in the repo, so no quotes or customer-story claims
              are shown here.
            </p>
          </div>
          <div className="wnyhs-gallery-featured-grid">
            {featuredItems.map((item) => (
              <article key={item.slug} className="wnyhs-card wnyhs-gallery-card">
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
                  <dl className="wnyhs-gallery-story-list">
                    <div>
                      <dt>Problem</dt>
                      <dd>{item.problem}</dd>
                    </div>
                    <div>
                      <dt>Solution</dt>
                      <dd>{item.solution}</dd>
                    </div>
                    <div>
                      <dt>Outcome</dt>
                      <dd>{item.outcome}</dd>
                    </div>
                  </dl>
                  <Link className="wnyhs-button wnyhs-button--secondary" to="/contact?vertical=home-security">
                    {item.ctaLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {categorySections.slice(0, 4).map((section) => {
          const sectionItems = ourWorkGallery.filter((item) => section.categories.includes(item.category)).sort(sortByPriority);

          return (
            <section key={section.heading} className="wnyhs-section wnyhs-gallery-section">
              <h2 className="wnyhs-gallery-text-reset">{section.heading}</h2>
              <div className="wnyhs-gallery-grid">
                {sectionItems.map((item) => (
                  <article key={item.slug} className="wnyhs-card wnyhs-gallery-card wnyhs-gallery-card--compact">
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
                      <p className="wnyhs-gallery-body wnyhs-gallery-body--compact">
                        <strong>Problem:</strong> {item.problem}
                      </p>
                      <p className="wnyhs-gallery-body wnyhs-gallery-body--compact">
                        <strong>Outcome:</strong> {item.outcome}
                      </p>
                      <Link className="wnyhs-button wnyhs-button--secondary" to="/contact?vertical=home-security">
                        {item.ctaLabel}
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        <section className="wnyhs-section wnyhs-gallery-intro wnyhs-gallery-intro--tight">
          <h2 className="wnyhs-gallery-text-reset">Built for Western New York. Built for Real Life.</h2>
          <p className="wnyhs-gallery-body wnyhs-gallery-body--wide">
            Smart Property Solutions can include cameras, smart entry, water and leak alerts, garage awareness,
            driveway visibility, lighting, and simple controls. WNY Home Security keeps the planning local, the
            equipment customer-owned, and the system built around the property instead of forcing a generic bundle.
          </p>
        </section>

        <section className="wnyhs-section wnyhs-gallery-final-cta">
          <h2 className="wnyhs-gallery-text-reset">Want to talk through a similar property problem?</h2>
          <p className="wnyhs-gallery-body">
            Share what you are trying to see, control, or protect, and we will help map the right starting point.
          </p>
          <div>
            <Link className="wnyhs-button wnyhs-button--primary" to="/contact?vertical=home-security">
              Request a Similar Setup
            </Link>
          </div>
        </section>
      </div>
    </WnyhsMarketingLayout>
  );
};

export default OurWork;
