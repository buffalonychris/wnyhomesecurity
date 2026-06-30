import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteTransitionManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.search]);

  return null;
};

export default RouteTransitionManager;
