import { NavLink, useLocation } from 'react-router-dom';

const steps = [
  { label: 'Vendor Landing', path: '/vendors' },
  { label: 'Standards', path: '/vendors/standards' },
  { label: 'Evaluation Toolkit', path: '/vendors/evaluation-toolkit' },
  { label: 'Questionnaire', path: '/vendors/questionnaire' },
];

const normalizePath = (pathname: string) => {
  if (pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
};

const VendorJourneyNav = () => {
  const location = useLocation();
  const currentPath = normalizePath(location.pathname);

  return (
    <section className="card flow-guide" aria-label="Vendor journey navigation">
      <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Vendor journey</h3>
      <div className="flow-guide-steps">
        {steps.map((step) =>
          currentPath === step.path ? (
            <span key={step.path} className="flow-guide-step current" aria-current="page">
              {step.label}
            </span>
          ) : (
            <NavLink key={step.path} to={step.path} className="flow-guide-step">
              {step.label}
            </NavLink>
          ),
        )}
      </div>
    </section>
  );
};

export default VendorJourneyNav;
