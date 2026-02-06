import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { buildCanonicalUrl, getSeoPolicy } from '../lib/seoPolicy';
import { brandSite } from '../lib/brand';

type SeoProps = {
  title?: string;
  description?: string;
};

const ensureTag = <T extends HTMLElement>(selector: string, create: () => T): T => {
  const existing = document.head.querySelector<T>(selector);
  if (existing) return existing;
  const element = create();
  document.head.appendChild(element);
  return element;
};

const Seo = ({ title, description }: SeoProps) => {
  const location = useLocation();

  useEffect(() => {
    const policy = getSeoPolicy(location.pathname);
    const robotsTag = ensureTag('meta[name="robots"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('name', 'robots');
      return tag;
    });
    robotsTag.setAttribute('content', policy.robots);

    const canonicalLink = ensureTag('link[rel="canonical"]', () => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      return link;
    });
    canonicalLink.setAttribute('href', buildCanonicalUrl(policy.canonicalPath));

    const finalTitle = title ?? document.title ?? brandSite;
    if (finalTitle) {
      document.title = finalTitle;
    }

    if (description) {
      const descriptionTag = ensureTag('meta[name="description"]', () => {
        const tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        return tag;
      });
      descriptionTag.setAttribute('content', description);
    }
  }, [location.pathname, title, description]);

  return null;
};

export default Seo;
