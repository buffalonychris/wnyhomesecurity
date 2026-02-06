import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthorityBlock from '../components/AuthorityBlock';
import { getAddOns, getPackagePricing } from '../data/pricing';
import { generateNarrative, NarrativeResponse } from '../lib/narrative';
import { QuoteContext } from '../lib/agreement';
import { loadRetailFlow } from '../lib/retailFlow';
import { getHardwareGroups } from '../data/hardware';
import { getFeatureGroups } from '../data/features';
import { buildQuoteReference, formatQuoteDate } from '../lib/quoteUtils';
import { quoteAssumptions, quoteDeliverables, quoteExclusions } from '../lib/quoteHash';
import { buildResumeUrl, buildQuoteFromResumePayload, parseResumeToken } from '../lib/resumeToken';
import { siteConfig } from '../config/site';
import { copyToClipboard, shortenMiddle } from '../lib/displayUtils';
import { buildQuoteAuthorityMeta, DocAuthorityMeta } from '../lib/docAuthority';
import TierBadge from '../components/TierBadge';
import { brandSite } from '../lib/brand';
import { calculateDepositDue } from '../lib/paymentTerms';
import { HOME_SECURITY_CLARITY_FOOTER, getHomeSecurityHardwareList } from '../content/homeSecurityPackageData';

const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`;

const QuotePrint = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const token = searchParams.get('t') || '';
  const isInternalView = searchParams.get('internal') === '1';
  const [quote, setQuote] = useState<QuoteContext | null>(null);
  const [narrative, setNarrative] = useState<NarrativeResponse | null>(null);
  const [hashCopied, setHashCopied] = useState(false);
  const [priorHashCopied, setPriorHashCopied] = useState(false);
  const [resumeCopied, setResumeCopied] = useState(false);
  const [authorityMeta, setAuthorityMeta] = useState<DocAuthorityMeta | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (token) {
      const payload = parseResumeToken(token);
      if (payload) {
        setQuote(buildQuoteFromResumePayload(payload));
        return;
      }
    }
    const stored = loadRetailFlow();
    if (stored.quote) {
      setQuote(stored.quote);
    }
  }, [token]);

  const vertical = quote?.vertical ?? 'elder-tech';
  const selectedPackage = useMemo(
    () =>
      quote
        ? getPackagePricing(vertical).find((pkg) => pkg.id === quote.packageId) ?? getPackagePricing(vertical)[0]
        : getPackagePricing(vertical)[0],
    [quote, vertical]
  );

  const selectedAddOns = useMemo(
    () => getAddOns(vertical).filter((addOn) => quote?.selectedAddOns.includes(addOn.id)),
    [quote, vertical]
  );

  const hardwareGroups = useMemo(
    () => (quote && vertical !== 'home-security' ? getHardwareGroups(quote.packageId, quote.selectedAddOns) : []),
    [quote, vertical]
  );

  const featureGroups = useMemo(
    () => (quote && vertical !== 'home-security' ? getFeatureGroups(quote.packageId, quote.selectedAddOns) : []),
    [quote, vertical]
  );

  useEffect(() => {
    let isMounted = true;
    const run = async () => {
      if (!quote) {
        if (isMounted) setAuthorityMeta(null);
        return;
      }
      const meta = await buildQuoteAuthorityMeta({ quote }, token || undefined);
      if (isMounted) setAuthorityMeta(meta);
    };

    run();
    return () => {
      isMounted = false;
    };
  }, [quote, token]);

  useEffect(() => {
    if (!quote) return;
    const fetchNarrative = async () => {
      const result = await generateNarrative({
        source: 'quote',
        vertical,
        quoteContext: {
          packageId: quote.packageId,
          selectedAddOnIds: quote.selectedAddOns,
          propertyDetails: {
            homeType: quote.homeType,
            homeSize: quote.homeSize,
            internetReliability: quote.internetReliability,
            city: quote.city,
          },
          pricing: quote.pricing,
        },
      });
      setNarrative(result);
    };

    fetchNarrative();
  }, [quote, vertical]);

  useEffect(() => {
    if (!quote) return;
    const originalTitle = document.title;
    const name = quote.customerName?.trim() || 'Customer';
    const date = formatQuoteDate(quote.generatedAt);
    const shouldAutoPrint = (location.state as { autoPrint?: boolean } | null)?.autoPrint ?? true;
    if (!shouldAutoPrint) return undefined;

    const timer = setTimeout(() => {
      const quoteLabel = vertical === 'home-security' ? 'Home Security' : 'ElderCare';
      document.title = `${quoteLabel} Quote From KAEC ${date} for ${name}`;
      window.print();
      document.title = originalTitle;
    }, 600);

    return () => {
      clearTimeout(timer);
      document.title = originalTitle;
    };
  }, [location.state, quote, vertical]);

  if (!quote) {
    return (
      <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '1.5rem' }}>
        <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="badge">Quote print</div>
          <h1 style={{ margin: 0, color: '#fff7e6' }}>No stored quote found</h1>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            Build a deterministic quote first, then return here to print a professional copy.
          </p>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/quote')}>
            Back to quote builder
          </button>
        </div>
      </div>
    );
  }

  const reference = buildQuoteReference(quote);
  const quoteDate = formatQuoteDate(quote.generatedAt);
  const customerName = quote.customerName?.trim() || 'Customer';
  const quoteVersion = quote.quoteDocVersion ?? siteConfig.quoteDocVersion;
  const displayedHash = shortenMiddle(quote.quoteHash);
  const supersedes = shortenMiddle(quote.priorQuoteHash);
  const resumeUrl = buildResumeUrl(quote, 'agreement');
  const depositDue = calculateDepositDue(quote.pricing.total, siteConfig.depositPolicy);
  const balanceDue = Math.max(quote.pricing.total - depositDue, 0);

  const handleCopyHash = async () => {
    if (!quote?.quoteHash) return;
    await copyToClipboard(quote.quoteHash);
    setHashCopied(true);
    setTimeout(() => setHashCopied(false), 2000);
  };

  const handleCopyPriorHash = async () => {
    if (!quote?.priorQuoteHash) return;
    await copyToClipboard(quote.priorQuoteHash);
    setPriorHashCopied(true);
    setTimeout(() => setPriorHashCopied(false), 2000);
  };

  const handleCopyResume = async () => {
    await copyToClipboard(resumeUrl);
    setResumeCopied(true);
    setTimeout(() => setResumeCopied(false), 2000);
  };

  return (
    <div className="print-page" style={{ padding: '3rem 0' }}>
      <div className="print-document kaec-doc" role="document">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.4rem' }}>{brandSite} (KAEC)</div>
            <div style={{ fontSize: '0.95rem', color: '#333' }}>Local-first safety, security, and monitoring.</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.95rem' }}>
            <div>Date: {quoteDate}</div>
            <div>Quote Ref: {reference}</div>
            <div>Quote Version: {quoteVersion}</div>
          </div>
        </header>

        <div style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#222' }}>
          <div>This quote supersedes all prior quotes for the same customer/property context.</div>
          <div style={{ fontWeight: 700, color: '#000', marginTop: '0.5rem', display: 'grid', gap: '0.25rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Continue your order:</span>
              <a href={resumeUrl} style={{ fontWeight: 800 }}>
                Continue your order
              </a>
              <button type="button" className="btn btn-secondary" onClick={handleCopyResume}>
                {resumeCopied ? 'Copied resume link' : 'Copy resume link'}
              </button>
            </div>
            <small className="break-all" style={{ color: '#222' }}>{resumeUrl}</small>
          </div>
          <div style={{ color: '#111' }}>
            If you are viewing a saved PDF or email version, click the “Continue your order” link above to resume exactly where
            you left off.
          </div>
        </div>

        <section className="print-section" style={{ marginTop: '1.5rem' }}>
          <h2>Customer & Property</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
            <div>
              <strong>Name</strong>
              <div>{customerName}</div>
            </div>
            <div>
              <strong>Contact</strong>
              <div>{quote.contact || 'Not provided'}</div>
            </div>
            <div>
              <strong>City</strong>
              <div>{quote.city || 'Not provided'}</div>
            </div>
            <div>
              <strong>Home</strong>
              <div>
                {quote.homeType?.replace('-', ' ') || 'Not provided'} • {quote.homeSize || 'Not provided'} • Internet:{' '}
                {quote.internetReliability || 'Not provided'}
              </div>
            </div>
          </div>
        </section>

        <section className="print-section" style={{ marginTop: '1.25rem' }}>
          <h2>Selection</h2>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
              border: '1px solid #d9d9d9',
              borderRadius: '12px',
              padding: '1rem',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <TierBadge tierId={selectedPackage.id} vertical={vertical} />
                <div style={{ fontWeight: 700 }}>{selectedPackage.name}</div>
              </div>
              <div style={{ color: '#444' }}>{selectedPackage.summary}</div>
              <div style={{ marginTop: '0.35rem' }}>
                <strong>Package:</strong> {formatCurrency(selectedPackage.basePrice)}
              </div>
              <div style={{ marginTop: '0.35rem' }}>
                <strong>Add-ons:</strong>{' '}
                {selectedAddOns.length === 0
                  ? 'None'
                  : selectedAddOns
                      .map((addOn) => `${addOn.label} (${addOn.priceLabel ?? formatCurrency(addOn.price)})`)
                      .join(', ')}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#444' }}>One-time total</div>
              <div style={{ fontSize: '2rem', fontWeight: 800 }}>{formatCurrency(quote.pricing.total)}</div>
              <div style={{ color: '#444' }}>
                {vertical === 'home-security'
                  ? 'Add-ons are quoted separately; no subscriptions sold.'
                  : 'No monthly subscriptions required.'}
              </div>
              <div style={{ marginTop: '0.5rem', color: '#444' }}>
                <div>Deposit due today: {formatCurrency(depositDue)}</div>
                <div>Remaining balance on arrival: {formatCurrency(balanceDue)}</div>
                <div>Deposit due today: 50% of the system cost. Remaining balance due on installation day.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="print-section" style={{ marginTop: '1.25rem' }}>
          <h2>Payment terms</h2>
          <p style={{ color: '#444' }}>
            Deposit due today: 50% of the system cost. Remaining balance due on installation day.
          </p>
        </section>

        <section className="print-section" style={{ marginTop: '1.25rem' }}>
          <h2>What’s Included</h2>
          <ul className="print-list">
            {quoteDeliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {vertical === 'home-security' && (
          <section className="print-section" style={{ marginTop: '1.25rem' }}>
            <h2>Included hardware</h2>
            <ul className="print-list">
              {getHomeSecurityHardwareList(quote.packageId.toLowerCase() as 'a1' | 'a2' | 'a3').map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ color: '#444' }}>{HOME_SECURITY_CLARITY_FOOTER}</p>
          </section>
        )}

        {vertical !== 'home-security' && (
          <section className="print-section" style={{ marginTop: '1.25rem' }}>
            <h2>Hardware (deterministic)</h2>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {hardwareGroups.map((group) => (
                <div key={group.heading} style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '0.85rem', display: 'grid', gap: '0.5rem' }}>
                  <strong>{group.heading}</strong>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    {group.categories.map((category) => (
                      <div key={category.title} style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '0.85rem' }}>
                        <strong>{category.title}</strong>
                        <ul className="print-list" style={{ marginTop: '0.35rem' }}>
                          {category.items.map((item) => (
                            <li key={item.name}>
                              {item.name} — qty {item.quantity}
                              {item.note ? ` (${item.note})` : ''}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {vertical !== 'home-security' && (
          <section className="print-section" style={{ marginTop: '1.25rem' }}>
            <h2>Feature coverage</h2>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {featureGroups.map((group) => (
                <div key={group.heading} style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '0.85rem', display: 'grid', gap: '0.5rem' }}>
                  <strong>{group.heading}</strong>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    {group.categories.map((category) => (
                      <div key={category.title} style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '0.85rem' }}>
                        <strong>{category.title}</strong>
                        <ul className="print-list" style={{ marginTop: '0.35rem' }}>
                          {category.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="print-section" style={{ marginTop: '1.25rem' }}>
          <h2>Assumptions & exclusions</h2>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <div>
              <strong>Assumptions</strong>
              <ul className="print-list" style={{ marginTop: '0.35rem' }}>
                {quoteAssumptions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Exclusions</strong>
              <ul className="print-list" style={{ marginTop: '0.35rem' }}>
                {quoteExclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="print-section page-break" style={{ marginTop: '1.5rem' }}>
          <h2>Explanation & narrative</h2>
          <p style={{ color: '#444' }}>
            Deterministic narrative describing why this configuration fits and what to expect during outages and day-to-day use.
          </p>
          <div style={{ display: 'grid', gap: '0.85rem' }}>
            {(narrative?.sections ?? []).map((section) => (
              <div key={section.title}>
                <strong>{section.title}</strong>
                <p style={{ margin: '0.35rem 0', color: '#333' }}>{section.body}</p>
              </div>
            ))}
            {!narrative && <div style={{ color: '#555' }}>Narrative loading…</div>}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <strong>Disclaimers</strong>
            <ul className="print-list" style={{ marginTop: '0.35rem' }}>
              {(narrative?.disclaimer ?? [
                'Informational only. Not medical advice or a diagnosis.',
                'If you have an urgent safety concern, call 911.',
                'Final configuration depends on on-site conditions and local code.',
              ]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {isInternalView && (
          <section className="print-section page-break" style={{ marginTop: '1.5rem' }}>
            <h2>Internal support log (not customer-facing)</h2>
            <div style={{ display: 'grid', gap: '0.75rem', fontSize: '0.95rem' }}>
              <div style={{ display: 'grid', gap: '0.35rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span className="mono-text" title={quote.quoteHash || undefined}>Quote Hash: {displayedHash}</span>
                  {quote.quoteHash && (
                    <button type="button" className="btn btn-secondary" onClick={handleCopyHash}>
                      {hashCopied ? 'Copied full hash' : 'Copy full hash'}
                    </button>
                  )}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span className="mono-text" title={quote.priorQuoteHash || undefined}>Supersedes prior quote hash: {supersedes}</span>
                  {quote.priorQuoteHash && (
                    <button type="button" className="btn btn-secondary" onClick={handleCopyPriorHash}>
                      {priorHashCopied ? 'Copied prior hash' : 'Copy prior hash'}
                    </button>
                  )}
                </div>
                {quote.issuedAtISO && <div>Issued: {quote.issuedAtISO}</div>}
              </div>
              <AuthorityBlock meta={authorityMeta} />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default QuotePrint;
