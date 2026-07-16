import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

type ExperienceNavigationProps = {
  variant?: 'header' | 'footer';
};

const ExperienceNavigation = ({ variant = 'header' }: ExperienceNavigationProps) => {
  const location = useLocation();
  const categoriesActive =
    location.pathname.startsWith('/categories/') || location.hash === '#categories';
  const homeActive = location.pathname === '/' && !categoriesActive;
  const solutionsActive = location.pathname.startsWith('/solutions');

  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#categories') {
      const frame = window.requestAnimationFrame(() => {
        document.getElementById('categories')?.scrollIntoView({ block: 'start' });
      });

      return () => window.cancelAnimationFrame(frame);
    }

    return undefined;
  }, [location.hash, location.pathname]);

  return (
    <nav
      className={`experience-navigation experience-navigation--${variant}`}
      aria-label={variant === 'header' ? 'Private prototype navigation' : 'Prototype footer navigation'}
    >
      <Link className="experience-navigation__link" to="/" aria-current={homeActive ? 'page' : undefined}>
        Home
      </Link>
      <Link
        className="experience-navigation__link"
        to="/#categories"
        aria-current={categoriesActive ? 'page' : undefined}
      >
        Categories
      </Link>
      <Link
        className="experience-navigation__link"
        to="/solutions"
        aria-current={solutionsActive ? 'page' : undefined}
      >
        Solutions
      </Link>
    </nav>
  );
};

export default ExperienceNavigation;
