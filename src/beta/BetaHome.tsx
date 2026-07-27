import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_BUILD_LABEL } from '../lib/siteVersion';
import './BetaHome.css';

type Theme = 'light' | 'dark';
const assessmentHref = '/discovery?vertical=home-security';

const pillars = [
  ['Home Security', 'See doors, entries, cameras, locks, and selected alerts in one clearer view.', '/categories/home-security'],
  ['Aging in Place', 'Make everyday routines easier while helping selected people stay informed.', '/categories/aging-in-place'],
  ['Home Safety', 'Get practical alerts for water, temperature, humidity, and other selected conditions.', '/categories/home-safety'],
  ['Home Automation', 'Bring useful routines, modes, and supported controls together.', '/categories/home-automation'],
  ['Home Lighting', 'Create useful lighting scenes, paths, schedules, and property modes.', '/categories/home-lighting'],
  ['Property Management', 'Check and manage more of the property from one primary interface.', ''],
] as const;

const proof = [
  ['Designed for the property', 'A reviewed plan begins with your priorities, the space, and what the system can responsibly support.'],
  ['Customer-owned', 'You own the purchased equipment and receive a clear handoff so the finished system makes sense.'],
  ['Locally considered', 'Supported core control is designed to stay close to the property, with dependencies explained clearly.'],
  ['Built to expand', 'A thoughtful foundation can make compatible additions easier without replacing the whole system.'],
] as const;

const steps = [
  ['01', 'Property Assessment', 'We learn what matters and review the property conditions that shape a responsible design.'],
  ['02', 'System Design', 'You receive a supported recommendation and review the proposed scope before installation begins.'],
  ['03', 'Installation and Configuration', 'We install, configure, test, and walk you through the approved system.'],
] as const;

const outcomes = [
  'Check whether a selected door is open.',
  'See supported front-door activity.',
  'Make nighttime lighting easier.',
  'Get earlier awareness of water in selected areas.',
  'Prepare the property for Night or Away mode.',
  'Help selected family members stay informed through non-medical home awareness.',
] as const;

function BetaHome() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = window.localStorage.getItem('wnyhs-beta-theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => window.localStorage.setItem('wnyhs-beta-theme', theme), [theme]);

  return (
    <div className="beta-home" data-theme={theme}>
      <a className="beta-skip-link" href="#beta-main">Skip to main content</a>
      <header className="beta-header">
        <div className="beta-shell beta-header__inner">
          <Link className="beta-brand" to="/beta" aria-label="W. N. Y. Home Security beta home">
            <img src="/brand/IconFinalHQ.jpg" width="52" height="53" alt="" />
            <span><strong>W. N. Y. Home Security</strong><small>One property. One designed system.</small></span>
          </Link>
          <button className="beta-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="beta-navigation" onClick={() => setMenuOpen((value) => !value)}>Menu</button>
          <nav id="beta-navigation" className={`beta-navigation${menuOpen ? ' beta-navigation--open' : ''}`} aria-label="Beta homepage navigation">
            <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
            <a href="#why-wny" onClick={() => setMenuOpen(false)}>Why W. N. Y.</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
            <Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link>
          </nav>
          <div className="beta-header__actions">
            <button className="beta-theme-toggle" type="button" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} onClick={() => setTheme((value) => value === 'light' ? 'dark' : 'light')}>
              <span aria-hidden="true">{theme === 'light' ? '◐' : '◑'}</span><span>{theme === 'light' ? 'Dark' : 'Light'}</span>
            </button>
            <Link className="beta-action beta-action--compact" to={assessmentHref}>Request an Assessment</Link>
          </div>
        </div>
      </header>

      <main id="beta-main">
        <section id="home-001" className="beta-hero" aria-labelledby="hero-title">
          <div className="beta-hero__image" aria-hidden="true"><img src="/brand/heros/HomePageHero.png" width="1672" height="941" alt="" loading="eager" /></div>
          <div className="beta-hero__veil" aria-hidden="true" />
          <div className="beta-shell beta-hero__layout">
            <div className="beta-hero__copy">
              <p className="beta-eyebrow">W. N. Y. Home Security</p>
              <h1 id="hero-title">Your Property. One Designed System.</h1>
              <p className="beta-hero__support">Security, automation, safety, lighting, aging support, and property management—professionally designed around your priorities and brought together in one clear Property Dashboard.</p>
              <div className="beta-actions"><Link className="beta-action" to={assessmentHref}>Request a Property Assessment</Link><a className="beta-action beta-action--secondary" href="#solutions">Explore Solutions</a></div>
              <p className="beta-trust-line">Customer-owned. Locally controlled where supported. No required monthly fee from W. N. Y. Home Security for supported core local control.</p>
            </div>
            <aside className="beta-dashboard" aria-label="Illustrative Property Dashboard preview">
              <div className="beta-dashboard__top"><span>Property Dashboard</span><span>Illustrative view</span></div>
              <strong>Good evening</strong><p>A calmer view of selected property conditions.</p>
              <div className="beta-dashboard__grid"><span>Entry<strong>Closed</strong></span><span>Lighting<strong>Evening</strong></span><span>Water areas<strong>Clear</strong></span></div>
              <small>Actual controls depend on the reviewed design and supported integrations.</small>
            </aside>
          </div>
        </section>

        <section id="home-002" className="beta-section beta-section--promise" aria-labelledby="promise-title">
          <div className="beta-shell beta-split">
            <div><p className="beta-eyebrow">One coherent property experience</p><h2 id="promise-title">One clear place to understand your property.</h2></div>
            <div><p>We design supported security, access, lighting, routines, safety signals, and property controls to work together around the way you live or operate. The result is a coherent system you can understand, use, and expand.</p><a className="beta-text-link" href="#how-it-works">See How It Works →</a><p className="beta-trust-line">We explain what works locally, what depends on internet or third parties, and what remains in your control.</p></div>
          </div>
        </section>

        <section id="home-003" className="beta-section" aria-labelledby="solutions-title">
          <div id="solutions" className="beta-shell">
            <header className="beta-section-heading"><p className="beta-eyebrow">Six connected pillars</p><h2 id="solutions-title">Explore what your property can do.</h2><p>Start with one priority or connect several. Each pillar can stand on its own, work with related solutions, and become part of a wider system where the design supports it.</p></header>
            <div className="beta-pillar-grid">
              {pillars.map(([name, copy, href], index) => {
                const body = <><span className="beta-pillar__number">0{index + 1}</span><h3>{name}</h3><p>{copy}</p><span className="beta-pillar__action">{href ? 'Explore pillar →' : 'Destination in development'}</span></>;
                return href ? <Link className="beta-pillar" to={href} key={name}>{body}</Link> : <article className="beta-pillar beta-pillar--provisional" key={name}>{body}</article>;
              })}
            </div>
            <p className="beta-trust-line">Recommendations depend on property conditions, compatibility, and the outcomes you choose.</p>
          </div>
        </section>

        <section id="home-004" className="beta-section beta-section--alternate" aria-labelledby="why-title">
          <div id="why-wny" className="beta-shell"><header className="beta-section-heading"><p className="beta-eyebrow">Why W. N. Y.</p><h2 id="why-title">Designed around you. Not around a box.</h2><p>You get a property-specific plan, professional installation and configuration, a clear handoff, and a foundation that can grow. You own the purchased equipment, and supported core control is designed to stay close to the property.</p></header>
            <div className="beta-proof-grid">{proof.map(([title, copy]) => <article key={title}><span aria-hidden="true">◆</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
            <p className="beta-trust-line">Clear recommendations. Honest limitations. No hidden claim that every property needs the same system.</p>
          </div>
        </section>

        <section id="home-005" className="beta-section" aria-labelledby="process-title">
          <div id="how-it-works" className="beta-shell"><header className="beta-section-heading"><p className="beta-eyebrow">How customization works</p><h2 id="process-title">A system built from the property outward.</h2><p>We learn what matters, review the property, recommend a supported design, install and configure the approved work, test it, and walk you through the finished system.</p></header>
            <ol className="beta-process">{steps.map(([number, title, copy]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
            <div className="beta-actions beta-actions--centered"><Link className="beta-action" to={assessmentHref}>Request a Property Assessment</Link></div><p className="beta-trust-line beta-centered">You review the proposed scope before installation work begins.</p>
          </div>
        </section>

        <section id="home-006" className="beta-section beta-section--dark" aria-labelledby="outcomes-title">
          <div className="beta-shell beta-split"><div><p className="beta-eyebrow">Real-life outcomes</p><h2 id="outcomes-title">Built for the moments that happen every day.</h2><p>Connected solutions make everyday property awareness and control more useful—without turning the experience into a hardware catalog.</p></div><ul className="beta-outcomes">{outcomes.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></div>
          <div className="beta-shell"><p className="beta-trust-line">Available outcomes depend on the selected design, supported hardware, placement, connectivity, and property conditions.</p></div>
        </section>

        <section id="home-007" className="beta-section" aria-labelledby="expand-title">
          <div className="beta-shell beta-expand"><div className="beta-expand__visual" aria-hidden="true"><span className="beta-expand__core">Designed foundation</span><span>Security</span><span>Lighting</span><span>Safety</span></div><div><p className="beta-eyebrow">Expandable by design</p><h2 id="expand-title">Add what you need, when you need it.</h2><p>Begin with the priorities that matter now. A well-planned foundation can support compatible additions later while preserving the main control experience and avoiding unnecessary replacement of the whole system.</p><Link className="beta-text-link" to={assessmentHref}>Talk Through Your Priorities →</Link><p className="beta-trust-line">Future additions remain subject to compatibility, capacity, product lifecycle, and site review.</p></div></div>
        </section>

        <section id="home-008" className="beta-section beta-section--alternate" aria-labelledby="education-title">
          <div className="beta-shell beta-split"><div><p className="beta-eyebrow">Education before pressure</p><h2 id="education-title">Explore. Understand. Decide with confidence.</h2><p>Learn how ownership, privacy, local control, solution planning, and common property needs fit together—without turning your research into a technical manual.</p><p className="beta-trust-line">Education explains choices and limitations; it does not replace a property-specific assessment.</p></div><div className="beta-topics"><span>Ownership and control</span><span>Privacy and local operation</span><span>Planning connected solutions</span></div></div>
        </section>

        <section id="home-009" className="beta-section" aria-labelledby="support-title">
          <div className="beta-shell beta-customer-path"><div><p className="beta-eyebrow">Customer care</p><h2 id="support-title">Already a customer? Start here.</h2><p>Get help with setup, your app or Property Dashboard, a service request, or an idea for expanding your system.</p><p className="beta-trust-line">This is not an emergency-monitoring or dispatch service.</p></div><div className="beta-actions"><Link className="beta-action beta-action--secondary" to="/support">Get Customer Support</Link><Link className="beta-text-link" to={assessmentHref}>Explore Expansion Options →</Link></div></div>
        </section>

        <section id="home-010" className="beta-final-cta" aria-labelledby="final-title"><div className="beta-shell beta-final-cta__inner"><p className="beta-eyebrow">Start with the property</p><h2 id="final-title">Let’s design around what matters to you.</h2><p>Tell us what you want the property to do. A Property Assessment gives us the context to recommend supported solutions and a sensible next step.</p><div className="beta-actions beta-actions--centered"><Link className="beta-action" to={assessmentHref}>Request a Property Assessment</Link><a className="beta-action beta-action--secondary" href="#solutions">Not Ready? Explore Solutions</a></div><p className="beta-trust-line beta-centered">Requesting an assessment is not a purchase agreement.</p></div></section>
      </main>

      <footer className="beta-footer"><div className="beta-shell beta-footer__inner"><div><strong>W. N. Y. Home Security</strong><p>A locally accountable approach to a clearer, more capable property.</p></div><nav aria-label="Beta footer navigation"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/support">Support</Link><Link to="/contact">Contact</Link></nav><small>{SITE_BUILD_LABEL} · Beta review route · Not the production homepage</small></div></footer>
    </div>
  );
}

export default BetaHome;
