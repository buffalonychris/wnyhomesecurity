import { Link } from 'react-router-dom';

type Props = {
  ctaLink: string;
};

const HomeSecurityTopNav = ({ ctaLink }: Props) => {
  return (
    <div className="hs-premium-top-nav">
      <div className="hs-premium-brand">
        <span className="hs-premium-brand-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img" focusable="false">
            <path
              d="M12 2l7 3v6c0 5-3.2 9.3-7 11-3.8-1.7-7-6-7-11V5l7-3z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path d="M9.2 12.5l2 2.1 3.7-4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
        <span>Reliable Home Security</span>
      </div>
      <nav className="hs-premium-nav-links" aria-label="Home security navigation">
        <a href="#how-it-works">How it Works</a>
        <a href="#plans">Plans</a>
        <Link to="/faq?vertical=home-security">FAQs</Link>
      </nav>
      <div className="hs-premium-nav-cta">
        <Link className="btn btn-primary" to={ctaLink}>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomeSecurityTopNav;
