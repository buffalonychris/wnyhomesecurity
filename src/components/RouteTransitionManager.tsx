import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const topResetRoutes = [
  '/home-security',
  '/packages',
  '/discovery',
  '/contact',
  '/home-security/planner',
  '/support',
];

const shouldResetToTop = (pathname: string): boolean => {
  return topResetRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
};

const RouteTransitionManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (location.hash) return;
    if (!shouldResetToTop(location.pathname)) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default RouteTransitionManager;
