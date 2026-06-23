import { FormEvent, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
import { useLayoutConfig } from '../components/LayoutConfig';
import { publicSearchIndex, type PublicSearchItemType } from '../content/publicSearchIndex';
import { publicSearchTypeLabels, publicSearchTypeOrder, searchPublicIndex } from '../lib/publicSearch';

const startingSuggestions = ['water', 'lighting', 'automation', 'doorbell camera', 'family awareness'];

const getGroupedResults = (query: string) => {
  const results = searchPublicIndex(publicSearchIndex, query);

  return publicSearchTypeOrder
    .map((type) => ({
      type,
      label: publicSearchTypeLabels[type],
      results: results.filter((result) => result.item.type === type),
    }))
    .filter((group) => group.results.length > 0);
};

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.trim() ?? '';
  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: false,
    breadcrumb: [],
  });

  const groupedResults = useMemo(() => getGroupedResults(query), [query]);
  const resultCount = groupedResults.reduce((total, group) => total + group.results.length, 0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextQuery = inputValue.trim();
    navigate(nextQuery ? `/search?q=${encodeURIComponent(nextQuery)}` : '/search');
  };

  return (
    <WnyhsMarketingLayout ctaLink="/contact?vertical=home-security">
      <main className="wnyhs-shell wnyhs-search-shell">
        <section className="wnyhs-section wnyhs-search-hero">
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">Search</p>
            <h1 className="wnyhs-heading">Search WNY Home Security</h1>
            <p className="wnyhs-description">
              Find category, solution, support, and local project information from approved public WNYHS pages.
            </p>
          </div>
          <form className="wnyhs-search-form" role="search" onSubmit={handleSubmit}>
            <label className="wnyhs-search-label" htmlFor="public-search-input">
              Search term
            </label>
            <div className="wnyhs-search-input-row">
              <input
                id="public-search-input"
                type="search"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Try water, lighting, automation, or doorbell camera"
              />
              <button className="wnyhs-button wnyhs-button--primary" type="submit">
                Search
              </button>
            </div>
          </form>
        </section>

        {!query && (
          <section className="wnyhs-section">
            <div className="wnyhs-section-header">
              <p className="wnyhs-eyebrow">Starting points</p>
              <h2 className="wnyhs-heading">Try a common search</h2>
              <p className="wnyhs-description">
                Start with a property concern, a room or area, or a broad smart-home need.
              </p>
            </div>
            <div className="wnyhs-search-suggestions">
              {startingSuggestions.map((suggestion) => (
                <Link key={suggestion} className="wnyhs-price-chip" to={`/search?q=${encodeURIComponent(suggestion)}`}>
                  {suggestion}
                </Link>
              ))}
            </div>
          </section>
        )}

        {query && (
          <section className="wnyhs-section" aria-live="polite">
            <div className="wnyhs-search-results-head">
              <div>
                <p className="wnyhs-eyebrow">Results</p>
                <h2 className="wnyhs-heading">
                  {resultCount} {resultCount === 1 ? 'result' : 'results'} for "{query}"
                </h2>
              </div>
              <Link className="wnyhs-button wnyhs-button--secondary" to="/contact?vertical=home-security">
                Contact / Estimate
              </Link>
            </div>

            {resultCount > 0 ? (
              <div className="wnyhs-search-result-groups">
                {groupedResults.map((group) => (
                  <SearchResultGroup key={group.type} type={group.type} label={group.label} results={group.results} />
                ))}
              </div>
            ) : (
              <div className="wnyhs-search-empty">
                <h3>No public search results found.</h3>
                <p>
                  Try a broader term like water, lighting, automation, camera, family, support, or estimate. You can
                  also send the question directly through Contact.
                </p>
                <div className="wnyhs-search-actions">
                  <Link className="wnyhs-button wnyhs-button--primary" to="/contact?vertical=home-security">
                    Contact / Estimate
                  </Link>
                  <Link className="wnyhs-button wnyhs-button--secondary" to="/support?vertical=home-security">
                    Support
                  </Link>
                </div>
              </div>
            )}
          </section>
        )}
      </main>
    </WnyhsMarketingLayout>
  );
};

type SearchResultGroupProps = {
  type: PublicSearchItemType;
  label: string;
  results: ReturnType<typeof searchPublicIndex>;
};

const SearchResultGroup = ({ type, label, results }: SearchResultGroupProps) => (
  <section className="wnyhs-search-result-group" aria-labelledby={`search-group-${type}`}>
    <h3 id={`search-group-${type}`} className="wnyhs-search-group-title">
      {label}
    </h3>
    <div className="wnyhs-search-result-list">
      {results.map(({ item }) => (
        <article key={item.id} className="wnyhs-card wnyhs-search-result-card">
          <span className="wnyhs-price-chip">{publicSearchTypeLabels[item.type]}</span>
          <h4 className="wnyhs-card-title">{item.title}</h4>
          {item.category && <p className="wnyhs-search-category">{item.category}</p>}
          <p className="wnyhs-card-copy">{item.summary}</p>
          <Link className="wnyhs-button wnyhs-button--secondary" to={item.route}>
            {item.ctaLabel}
          </Link>
        </article>
      ))}
    </div>
  </section>
);

export default Search;
