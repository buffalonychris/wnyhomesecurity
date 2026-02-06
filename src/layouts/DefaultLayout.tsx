import { Link, Outlet, useLocation } from 'react-router-dom';
import { useLayoutConfigContext } from '../components/LayoutConfig';

const DefaultLayout = () => {
  const location = useLocation();
  const { layoutConfig } = useLayoutConfigContext();
  const isHub = location.pathname === '/';
  const shouldShowBreadcrumbs = layoutConfig.layoutVariant === 'funnel' && layoutConfig.showBreadcrumbs;

  return (
    <>
      {!isHub && layoutConfig.layoutVariant !== 'funnel' && (
        <div className="sitewide-notice" role="status">
          No pricing, guarantees, or promises are given by the assistant.
        </div>
      )}
      <main>
        {shouldShowBreadcrumbs && layoutConfig.breadcrumb && layoutConfig.breadcrumb.length > 0 && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <div className="container">
              <ol>
                {layoutConfig.breadcrumb.map((item, index) => (
                  <li key={`${item.label}-${index}`}>
                    {item.href ? (
                      <Link to={item.href}>{item.label}</Link>
                    ) : (
                      <span aria-current="page">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </nav>
        )}
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
