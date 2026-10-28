import { useMemo } from 'react';
import WnyhsSiteFooter from '../components/homeSecurity/WnyhsSiteFooter';
import WnyhsTopNav from '../components/homeSecurity/WnyhsTopNav';
import { buildMailto, wnyhsContact } from '../content/wnyhsContact';
import '../styles/lightingInstallation.css';

const previewDisclosure =
  'AI previews are illustrative concepts, not photometric, engineering, electrical, compatibility, or installation plans. Actual brightness, color, light distribution, module count, spacing and position, scene availability, mounting, power, controller and cable routing, and finished appearance may differ.';

const LightingInstallation = () => {
  const mailto = useMemo(
    () =>
      buildMailto(
        wnyhsContact.emails.hello,
        'Permanent outdoor lighting — property preview or installation',
        [
          'I am interested in permanent outdoor lighting for my property.',
          '',
          'Property location:',
          'Areas I would like to illuminate:',
          'Lighting ideas or occasions I have in mind:',
          'Photos are available: Yes / No',
        ].join('\n'),
      ),
    [],
  );

  return (
    <div className="wnyhs-page wnyhs-lighting-page">
      <WnyhsTopNav ctaLink={mailto} ctaLabel="Email WNYHS" />
      <div className="wnyhs-page-layout-body">
        <div className="container wnyhs-page-layout-container">
          <div className="wnyhs-shell wnyhs-lighting-shell">
            <section className="wnyhs-section wnyhs-section--dark wnyhs-lighting-hero" aria-labelledby="lighting-heading">
              <div className="wnyhs-lighting-hero-copy">
                <p className="wnyhs-eyebrow">Permanent outdoor lighting · Western New York</p>
                <h1 id="lighting-heading" className="wnyhs-heading">
                  Permanent Outdoor Lighting, Designed Around Your Property
                </h1>
                <p className="wnyhs-lighting-hero-lede">
                  Everyday architectural accents, holiday color, game-day displays, and special occasions—planned and
                  professionally installed around your home or business.
                </p>
                <a className="wnyhs-button wnyhs-button--primary" href={mailto}>
                  Email About Your Property
                </a>
              </div>
              <aside className="wnyhs-lighting-hero-panel" aria-label="Property-specific lighting planning">
                <p className="wnyhs-eyebrow">Planned for the real property</p>
                <h2>From a property photo to a field-qualified plan.</h2>
                <ul>
                  <li>Actual property photographs</li>
                  <li>Available roofline measurements</li>
                  <li>Selected model specifications</li>
                  <li>Onsite compatibility and routing review</li>
                </ul>
              </aside>
            </section>

            <section className="wnyhs-section wnyhs-lighting-preview" aria-labelledby="preview-heading">
              <div className="wnyhs-section-header">
                <p className="wnyhs-eyebrow">See your home before installation</p>
                <h2 id="preview-heading" className="wnyhs-heading">
                  See How Your Home May Look with the Lighting You Choose.
                </h2>
                <p className="wnyhs-description">
                  Send photos of your property and tell us which lighting solution you are considering. We can prepare an
                  AI-generated visual preview using the actual property photographs, available measurements, and the best
                  verified published manufacturer specifications available for the selected system.
                </p>
              </div>
              <div className="wnyhs-lighting-disclosure" role="note" aria-labelledby="preview-disclosure-heading">
                <h3 id="preview-disclosure-heading">Important concept-image disclosure</h3>
                <p>{previewDisclosure}</p>
                <p>
                  Final work requires onsite measurement, access and substrate review, electrical and controller planning,
                  exact model verification, and field qualification. A preview is not a completed WNYHS installation and
                  does not guarantee an exact visual match.
                </p>
              </div>
            </section>

            <section className="wnyhs-section" aria-labelledby="possibilities-heading">
              <div className="wnyhs-section-header">
                <p className="wnyhs-eyebrow">Lighting possibilities</p>
                <h2 id="possibilities-heading" className="wnyhs-heading">
                  One installation, many model-supported looks
                </h2>
                <p className="wnyhs-description">
                  Available colors, scenes, effects, segment behavior, and controls vary by the exact model and
                  configuration. Representative palettes may be customer-created rather than named manufacturer presets.
                </p>
              </div>
              <div className="wnyhs-lighting-card-grid">
                <article className="wnyhs-card">
                  <p className="wnyhs-eyebrow">Everyday</p>
                  <h3 className="wnyhs-card-title">Architectural accents</h3>
                  <p className="wnyhs-card-copy">Understated white-looking or other supported color arrangements for regular use.</p>
                </article>
                <article className="wnyhs-card">
                  <p className="wnyhs-eyebrow">Seasonal</p>
                  <h3 className="wnyhs-card-title">Holiday palettes</h3>
                  <p className="wnyhs-card-copy">Examples may include Halloween, winter holiday, or patriotic color combinations.</p>
                </article>
                <article className="wnyhs-card">
                  <p className="wnyhs-eyebrow">Western New York</p>
                  <h3 className="wnyhs-card-title">Sports-inspired color</h3>
                  <p className="wnyhs-card-copy">Team-inspired customizable colors when supported by the selected model.</p>
                </article>
                <article className="wnyhs-card">
                  <p className="wnyhs-eyebrow">Special events</p>
                  <h3 className="wnyhs-card-title">Gatherings and celebrations</h3>
                  <p className="wnyhs-card-copy">Choose from the scenes and effects available on the specific hardware.</p>
                </article>
              </div>
            </section>

            <section className="wnyhs-section wnyhs-section--category" aria-labelledby="planning-heading">
              <div className="wnyhs-section-header">
                <p className="wnyhs-eyebrow">Property-specific installation planning</p>
                <h2 id="planning-heading" className="wnyhs-heading">
                  The finished look starts with careful field details
                </h2>
                <p className="wnyhs-description">
                  Product selection and installation scope are reviewed against the property rather than assumed from a
                  generic package.
                </p>
              </div>
              <ol className="wnyhs-lighting-planning-list">
                <li>
                  <strong>Measure the rooflines.</strong>
                  <span>Review intended runs, corners, transitions, powered spans, and accessible work areas.</span>
                </li>
                <li>
                  <strong>Place power and controls.</strong>
                  <span>Evaluate outlets, power supplies, controllers, connections, and model-specific segment limits.</span>
                </li>
                <li>
                  <strong>Review mounting surfaces.</strong>
                  <span>Confirm soffit, eave, substrate, weather exposure, access, and approved attachment methods.</span>
                </li>
                <li>
                  <strong>Plan cable routing.</strong>
                  <span>Map transitions and concealed-routing goals without promising that every property can hide every cable.</span>
                </li>
              </ol>
            </section>

            <section className="wnyhs-section" aria-labelledby="options-heading">
              <div className="wnyhs-lighting-options-grid">
                <div>
                  <p className="wnyhs-eyebrow">Product choice</p>
                  <h2 id="options-heading" className="wnyhs-heading">Selected for the property and intended appearance</h2>
                  <p>
                    WNY Home Security offers site-reviewed outdoor lighting solutions across Govee outdoor-lighting
                    families. Capabilities, configuration, current availability, and suitability vary by model and property.
                    Other lighting systems may be assessed by request; no unverified compatibility is promised.
                  </p>
                </div>
                <div className="wnyhs-card wnyhs-lighting-track-card">
                  <p className="wnyhs-eyebrow">Optional finish</p>
                  <h3 className="wnyhs-card-title">Compatible permanent track or channel</h3>
                  <p className="wnyhs-card-copy">
                    Permanent mounting tracks or channels, including color-keyed finishes where suitable and available, can
                    be evaluated for a more integrated daytime appearance. No mounting vendor is required or exclusive, and
                    WNYHS does not claim manufacturer accreditation or installer certification.
                  </p>
                </div>
              </div>
            </section>

            <section className="wnyhs-section wnyhs-section--dark wnyhs-lighting-contact" aria-labelledby="contact-heading">
              <div>
                <p className="wnyhs-eyebrow">Start with an email</p>
                <h2 id="contact-heading" className="wnyhs-heading">Interested in a lighting preview or installation?</h2>
                <p>
                  Email WNY Home Security with your property location, photographs if available, and the areas you want to
                  illuminate. We will use the details to begin a site-specific conversation.
                </p>
              </div>
              <a className="wnyhs-button wnyhs-button--primary" href={mailto}>
                Email {wnyhsContact.emails.hello}
              </a>
            </section>

            <p className="wnyhs-lighting-final-disclosure">
              Product appearance and capabilities vary by model. AI-generated illustrations are concepts; actual
              installations require site measurements and verification. WNYHS does not guarantee an exact visual match.
            </p>
          </div>
        </div>
      </div>
      <WnyhsSiteFooter />
    </div>
  );
};

export default LightingInstallation;
