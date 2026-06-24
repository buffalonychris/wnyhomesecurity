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

const setMetaTag = (selector: string, attribute: 'name' | 'property', key: string, content?: string) => {
  const existing = document.head.querySelector<HTMLMetaElement>(selector);

  if (!content) {
    existing?.remove();
    return;
  }

  const tag =
    existing ??
    (() => {
      const element = document.createElement('meta');
      element.setAttribute(attribute, key);
      document.head.appendChild(element);
      return element;
    })();

  tag.setAttribute('content', content);
};

const Seo = ({ title, description }: SeoProps) => {
  const location = useLocation();

  useEffect(() => {
    const policy = getSeoPolicy(location.pathname, location.search);
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
    const canonicalUrl = buildCanonicalUrl(policy.canonicalPath);
    canonicalLink.setAttribute('href', canonicalUrl);

    const finalTitle = title ?? policy.title ?? brandSite;
    if (finalTitle) {
      document.title = finalTitle;
    }

    const finalDescription = description ?? policy.description;
    setMetaTag('meta[name="description"]', 'name', 'description', finalDescription);

    setMetaTag('meta[property="og:title"]', 'property', 'og:title', policy.openGraph?.title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', policy.openGraph?.description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', policy.openGraph ? canonicalUrl : undefined);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', policy.openGraph?.image);

    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', policy.twitter?.card);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', policy.twitter?.title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', policy.twitter?.description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', policy.twitter?.image);
  }, [location.pathname, location.search, title, description]);

  return null;
};

export default Seo;
