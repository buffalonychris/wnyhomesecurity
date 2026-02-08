import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthorityBlock from '../components/AuthorityBlock';
import { getHardwareGroups } from '../data/hardware';
import { getFeatureGroups } from '../data/features';
import { generateNarrative, NarrativeResponse } from '../lib/narrative';
import { generateAgreement, QuoteContext } from '../lib/agreement';
import { AcceptanceRecord, loadRetailFlow } from '../lib/retailFlow';
import { buildAgreementReference } from '../lib/agreementHash';
import { buildResumeUrl } from '../lib/resumeToken';
import { siteConfig } from '../config/site';
import { formatQuoteDate } from '../lib/quoteUtils';
import { buildAgreementAuthorityMeta, DocAuthorityMeta, parseAgreementToken } from '../lib/docAuthority';
import TierBadge from '../components/TierBadge';
import { brandSite } from '../lib/brand';
import { calculateDepositDue } from '../lib/paymentTerms';
import { getHomeSecurityHardwareList } from '../content/homeSecurityPackageData';

const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`;

const AgreementPrint = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const token = searchParams.get('t') || '';
  const [quote, setQuote] = useState<QuoteContext | null>(null);
  const [acceptance, setAcceptance] = useState<AcceptanceRecord | null>(null);
  const [narrative, setNarrative] = useState<NarrativeResponse | null>(null);
  const [authorityMeta, setAuthorityMeta] = useState<DocAuthorityMeta | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (token) {
      const payload = parseAgreementToken(token);
      if (payload?.quote) {
        setQuote(payload.quote);
        setAcceptance((payload.acceptance as AcceptanceRecord | undefined) ?? null);
        return;
      }
    }
    const stored = loadRetailFlow();
    if (stored.quote) {
      setQuote(stored.quote);
    }
    if (stored.agreementAcceptance) {
      setAcceptance(stored.agreementAcceptance);
    }
  }, [token]);

  useEffect(() => {
    if (!quote) return;
    const originalTitle = document.title;
    const shouldAutoPrint = (location.state as { autoPrint?: boolean } | null)?.autoPrint ?? true;
    const name = quote.customerName?.trim() || 'Customer';
    const date = formatQuoteDate(quote.generatedAt);
    const reference = quote.agreementReference ?? buildAgreementReference(quote);

    if (!shouldAutoPrint) return undefined;

    const timer = setTimeout(() => {
      document.title = `KAEC Agreement ${date} - ${name} - ${reference}`;
      window.print();
      document.title = originalTitle;
    }, 600);

    return () => {
      clearTimeout(timer);
      document.title = originalTitle;
    };
  }, [location.state, quote]);

  const vertical = quote?.vertical ?? 'elder-tech';

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

  const agreement = useMemo(() => generateAgreement(quote ?? undefined), [quote]);
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
      const meta = await buildAgreementAuthorityMeta(
        { quote, agreementAcceptance: acceptance ?? undefined },
        token || undefined,
      );
      if (isMounted) setAuthorityMeta(meta);
    };

    run();
    return () => {
      isMounted = false;
    };
  }, [acceptance, quote, token]);

  if (!quote) {
    return (
      <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '1.5rem' }}>
        <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="badge">Agreement print</div>
          <h1 style={{ margin: 0, color: '#fff7e6' }}>No stored agreement found</h1>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            Build a deterministic quote and agreement first, then return here to print a professional copy.
          </p>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/quote')}>
            Back to quote builder
          </button>
        </div>
      </div>
    );
  }

  const agreementReference = quote.agreementReference ?? buildAgreementReference(quote);
  const resumeUrl = acceptance?.accepted ? buildResumeUrl(quote, 'payment') : buildResumeUrl(quote, 'agreement');
  const docDate = formatQuoteDate(quote.generatedAt ?? agreement.header.generatedDate);
  const customerName = quote.customerName?.trim() || 'Customer';
  const agreementVersion = siteConfig.agreementDocVersion;
  const isHomeSecurity = quote.vertical === 'home-security';
  const depositDue = calculateDepositDue(quote.pricing.total, siteConfig.depositPolicy);
  const balanceDue = Math.max(quote.pricing.total - depositDue, 0);

  return (
    <div className="print-page" style={{ padding: '3rem 0' }}>
      <div className="print-document kaec-doc" role="document">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.4rem' }}>{brandSite} (KAEC)</div>
            <div style={{ fontSize: '0.95rem', color: '#333' }}>Local-first safety, security, and monitoring.</div>
            <div style={{ marginTop: '0.4rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
                Back
              </button>
              <button type="button" className="btn btn-primary" style={{ marginLeft: '0.25rem' }} onClick={() => window.print()}>
                Print / Save PDF
              </button>
            </div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.95rem', display: 'grid', gap: '0.35rem' }}>
            <div>Date: {docDate}</div>
            <div>Agreement Ref: {agreementReference}</div>
            {!isHomeSecurity && <div>Agreement Version: {agreementVersion}</div>}
            <div>This agreement supersedes prior agreements for the same customer/property context.</div>
            <div>Quote Ref: {agreement.quoteBinding.reference}</div>
            <div style={{ fontWeight: 700, color: '#000', marginTop: '0.5rem', display: 'grid', gap: '0.25rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-end' }}>
                <span>Continue your order:</span>
                <a href={resumeUrl} style={{ fontWeight: 800 }}>
                  Continue your order
                </a>
              </div>
          </div>
        </div>
      </header>

        <AuthorityBlock meta={authorityMeta} showInternal={false} />

        <section className="print-section" style={{ marginTop: '1.25rem' }}>
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
          <h2>Package & Pricing</h2>
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
                <TierBadge tierId={quote.packageId} vertical={vertical} />
                <div style={{ fontWeight: 700 }}>{agreement.quoteSummary.packageName}</div>
              </div>
              <div style={{ color: '#444' }}>Add-ons: {agreement.quoteSummary.addOnLabels.join(', ')}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#444' }}>One-time total</div>
              <div style={{ fontSize: '2rem', fontWeight: 800 }}>{formatCurrency(quote.pricing.total)}</div>
              <div style={{ color: '#444' }}>
                {vertical === 'home-security'
                  ? 'Add-ons are quoted separately; no subscriptions sold.'
                  : 'No monthly subscriptions required.'}
              </div>
              <div style={{ color: '#444', marginTop: '0.5rem' }}>
                Deposit due today: {formatCurrency(depositDue)} • Remaining balance on install day: {formatCurrency(balanceDue)}
              </div>
            </div>
          </div>
        </section>

        {vertical === 'home-security' && (
          <section className="print-section" style={{ marginTop: '1.25rem' }}>
            <h2>Included hardware summary</h2>
            <ul className="print-list">
              {getHomeSecurityHardwareList(quote.packageId.toLowerCase() as 'a1' | 'a2' | 'a3').map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {vertical !== 'home-security' && (
          <section className="print-section" style={{ marginTop: '1.25rem' }}>
            <h2>Hardware list</h2>
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
            <h2>Features</h2>
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
          <h2>Scope & Deliverables</h2>
          <ul className="print-list">
            {agreement.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div style={{ marginTop: '0.75rem' }}>
            <strong>Installation & validation commitments</strong>
            <ul className="print-list" style={{ marginTop: '0.35rem' }}>
              {agreement.installationCommitments.map((item) => (
                <li key={item}>{item}</li>
              ))}
              {agreement.validationSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div style={{ marginTop: '0.75rem' }}>
            <strong>Assumptions & Exclusions</strong>
            <ul className="print-list" style={{ marginTop: '0.35rem' }}>
              {agreement.assumptions.map((item) => (
                <li key={item}>{item}</li>
              ))}
              {agreement.exclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div style={{ marginTop: '0.75rem' }}>
            <strong>Offline behavior</strong>
            <p style={{ margin: 0, color: '#111' }}>{agreement.offlineBehavior}</p>
          </div>
          <div style={{ marginTop: '0.75rem' }}>
            <strong>Warranty / service boundaries</strong>
            <ul className="print-list" style={{ marginTop: '0.35rem' }}>
              {agreement.warrantyPlaceholders.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="print-section" style={{ marginTop: '1.25rem' }}>
          <h2>Acceptance</h2>
          <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '0.85rem' }}>
            <div>
              <strong>Typed name</strong>
              <div>{acceptance?.fullName || 'Not provided'}</div>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <strong>Date</strong>
              <div>{acceptance?.acceptanceDate || 'Not provided'}</div>
            </div>
            <div style={{ marginTop: '0.75rem', color: '#333' }}>
              Not fully executed until e-signature is completed in the KAEC backend package. Retail acceptance is sufficient to
              proceed to payment in this mock flow.
            </div>
          </div>
        </section>

        <section className="print-section page-break" style={{ marginTop: '1.25rem' }}>
          <h2>Agreement Narrative</h2>
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
      </div>
    </div>
  );
};

export default AgreementPrint;
