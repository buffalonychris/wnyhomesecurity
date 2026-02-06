import { useCallback, useEffect, useId, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthorityBlock from '../components/AuthorityBlock';
import FlowGuidePanel from '../components/FlowGuidePanel';
import HelpContactPanel from '../components/HelpContactPanel';
import PaymentInstallDayAccordion from '../components/PaymentInstallDayAccordion';
import { getAddOns, getPackagePricing } from '../data/pricing';
import { generateNarrative, NarrativeResponse } from '../lib/narrative';
import { QuoteContext } from '../lib/agreement';
import { loadRetailFlow, markFlowStep, updateRetailFlow } from '../lib/retailFlow';
import { getHardwareGroups } from '../data/hardware';
import { getFeatureGroups } from '../data/features';
import { buildQuoteReference, formatQuoteDate } from '../lib/quoteUtils';
import { quoteAssumptions, quoteDeliverables, quoteExclusions } from '../lib/quoteHash';
import { buildResumeUrl, buildQuoteFromResumePayload, parseResumeToken } from '../lib/resumeToken';
import { siteConfig } from '../config/site';
import { copyToClipboard, shortenMiddle } from '../lib/displayUtils';
import { buildQuoteEmailPayload, isValidEmail } from '../lib/emailPayload';
import { sendQuoteEmail } from '../lib/emailSend';
import { buildQuoteAuthorityMeta, DocAuthorityMeta } from '../lib/docAuthority';
import TierBadge from '../components/TierBadge';
import DemoDashboardLink from '../components/DemoDashboardLink';
import { calculateDepositDue } from '../lib/paymentTerms';
import HomeSecurityFunnelSteps from '../components/HomeSecurityFunnelSteps';
import { buildAssumedCoverage } from '../lib/homeSecurityFunnel';
import {
  HOME_SECURITY_CLARITY_FOOTER,
  getHomeSecurityHardwareList,
} from '../content/homeSecurityPackageData';
import { useLayoutConfig } from '../components/LayoutConfig';
import SelfMonitoringDisclosure from '../components/disclosures/SelfMonitoringDisclosure';
// SaveProgressCard intentionally removed from this flow to consolidate share & save actions.

type AccordionSectionProps = {
  title: string;
  description?: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

const AccordionSection = ({ title, description, defaultOpen = false, children }: AccordionSectionProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div className="card accordion-section" style={{ display: 'grid', gap: '0.5rem' }}>
      <button
        type="button"
        className="accordion-toggle"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <span aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {description && (
        <small id={`${contentId}-desc`} style={{ color: '#c8c0aa' }}>
          {description}
        </small>
      )}
      <div
        id={contentId}
        className={`accordion-content ${open ? 'open' : 'collapsed'}`}
        aria-labelledby={description ? `${contentId}-desc` : undefined}
        style={{ gap: '0.75rem' }}
      >
        {children}
      </div>
    </div>
  );
};

const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`;

const QuoteReview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const token = searchParams.get('t') || '';
  const isInternalView = searchParams.get('internal') === '1';
  const [quote, setQuote] = useState<QuoteContext | null>(null);
  const [narrative, setNarrative] = useState<NarrativeResponse | null>(null);
  const [narrativeLoading, setNarrativeLoading] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [hashCopied, setHashCopied] = useState(false);
  const [priorHashCopied, setPriorHashCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [shareRecipient, setShareRecipient] = useState('');
  const [emailBanner, setEmailBanner] = useState('');
  const [emailError, setEmailError] = useState('');
  const [sending, setSending] = useState(false);
  const [emailPayload, setEmailPayload] = useState<Awaited<ReturnType<typeof buildQuoteEmailPayload>> | null>(null);
  const [authorityMeta, setAuthorityMeta] = useState<DocAuthorityMeta | null>(null);
  const funnelState = useMemo(() => loadRetailFlow().homeSecurity, []);
  const assumedCoverage = useMemo(() => {
    if (funnelState?.fitCheckResult?.assumedCoverage?.length) {
      return funnelState.fitCheckResult.assumedCoverage;
    }
    if (funnelState?.fitCheckAnswers) {
      return buildAssumedCoverage(funnelState.fitCheckAnswers);
    }
    return [];
  }, [funnelState]);

  useEffect(() => {
    window.scrollTo(0, 0);
    markFlowStep('quote');
    if (token) {
      const payload = parseResumeToken(token);
      if (payload) {
        const restored = buildQuoteFromResumePayload(payload);
        setQuote(restored);
        setEmail(restored.contact ?? '');
        return;
      }
    }

    const stored = loadRetailFlow();
    if (stored.quote) {
      setQuote(stored.quote);
      setEmail(stored.quote.contact ?? '');
    }
  }, [token]);

  const vertical = quote?.vertical ?? 'elder-tech';
  const isHomeSecurity = vertical === 'home-security';

  useLayoutConfig({
    layoutVariant: isHomeSecurity ? 'funnel' : 'sitewide',
    showBreadcrumbs: isHomeSecurity,
    breadcrumb: isHomeSecurity
      ? [
          { label: 'Home Security', href: '/home-security' },
          { label: 'Quote Review' },
        ]
      : [],
  });
  const selectedPackage = useMemo(
    () => getPackagePricing(vertical).find((pkg) => pkg.id === quote?.packageId) ?? getPackagePricing(vertical)[0],
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

  const resumeUrl = useMemo(() => (quote ? buildResumeUrl(quote, 'agreement') : ''), [quote]);
  const depositDue = useMemo(
    () => calculateDepositDue(quote?.pricing.total ?? 0, siteConfig.depositPolicy),
    [quote?.pricing.total],
  );
  const balanceDue = useMemo(() => Math.max((quote?.pricing.total ?? 0) - depositDue, 0), [depositDue, quote?.pricing.total]);

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
    let isMounted = true;
    const run = async () => {
      if (!quote) {
        if (isMounted) setEmailPayload(null);
        return;
      }
      const payload = await buildQuoteEmailPayload({ ...quote, contact: email || quote.contact }, token || undefined);
      if (isMounted) setEmailPayload(payload);
    };

    run();
    return () => {
      isMounted = false;
    };
  }, [email, quote, token]);

  useEffect(() => {
    setShareRecipient(email);
  }, [email]);

  const handleExplainQuote = async () => {
    if (!quote) return;
    setNarrativeLoading(true);
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
    setNarrativeLoading(false);
  };

  const handleContinueToAgreement = () => {
    if (!quote) return;
    updateRetailFlow({ quote });
    navigate('/agreementReview', { state: { quoteContext: quote } });
  };

  const handlePrint = () => {
    if (!quote) return;
    updateRetailFlow({ quote });
    const printWindow = window.open('/quotePrint', '_blank', 'noopener,noreferrer');
    if (printWindow) {
      printWindow.focus();
    }
  };

  const quoteDate = quote ? formatQuoteDate(quote.generatedAt) : formatQuoteDate();
  const emailStatus = quote?.emailLastStatus ?? quote?.emailStatus ?? 'not_sent';

  const handleUpdateEmail = (value: string) => {
    setEmail(value);
    if (!quote) return;
    const nextQuote = { ...quote, contact: value };
    setQuote(nextQuote);
    updateRetailFlow({ quote: nextQuote });
  };

  const recordEmailResult = useCallback(
    (recipient: string, result: Awaited<ReturnType<typeof sendQuoteEmail>>) => {
      if (!quote) return;
      const issuedAt = new Date().toISOString();
      const recipients = [recipient, ...(quote.emailRecipients ?? [])].filter(Boolean);
      const uniqueRecipients = Array.from(new Set(recipients)).slice(0, 3);
      const status = result.ok ? (result.provider === 'mock' ? 'mock' : 'sent') : 'failed';
      const nextQuote: QuoteContext = {
        ...quote,
        contact: quote.contact ?? recipient,
        issuedAt: quote.issuedAt ?? issuedAt,
        issuedAtISO: quote.issuedAtISO ?? issuedAt,
        emailIssuedAt: quote.emailIssuedAt ?? issuedAt,
        emailIssuedAtISO: issuedAt,
        emailTo: recipient,
        emailProvider: result.provider,
        emailMessageId: result.id,
        emailLastStatus: status,
        emailLastError: result.ok ? undefined : result.error,
        emailRecipients: uniqueRecipients,
      };
      setQuote(nextQuote);
      updateRetailFlow({ quote: nextQuote });

      const banner =
        status === 'sent'
          ? `A copy has been emailed to ${recipient}.`
          : status === 'mock'
          ? `Email queued (mock mode) for ${recipient}.`
          : 'We could not send the email. Please try again.';
      setEmailBanner(banner);
      setEmailError(result.ok ? '' : result.error || 'Unable to send email');
    },
    [quote],
  );

  const sendQuoteEmailToRecipient = useCallback(
    async (recipient: string) => {
      if (!quote || !emailPayload || !isValidEmail(recipient)) return null;
      setSending(true);
      setEmailError('');
      const response = await sendQuoteEmail({ ...emailPayload, to: recipient });
      recordEmailResult(recipient, response);
      setSending(false);
      return response;
    },
    [emailPayload, quote, recordEmailResult],
  );

  const handleSendEmail = useCallback(
    async (recipient: string, source: 'auto' | 'manual') => {
      await sendQuoteEmailToRecipient(recipient);
      if (source === 'manual') {
        setEmailBanner((prev) => prev || `Sent to ${recipient}.`);
      }
    },
    [sendQuoteEmailToRecipient],
  );

  useEffect(() => {
    if (!quote || !emailPayload || sending) return;
    if (!quote.contact || !isValidEmail(quote.contact)) return;
    if (quote.emailIssuedAtISO) return;
    handleSendEmail(quote.contact, 'auto');
  }, [emailPayload, quote, sending, handleSendEmail]);

  const handleCopyResumeLink = async () => {
    if (!resumeUrl) return;
    await copyToClipboard(resumeUrl);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

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

  if (!quote) {
    return (
      <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '1.5rem' }}>
        <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="badge">Quote review</div>
          <h1 style={{ margin: 0, color: '#fff7e6' }}>No stored quote found</h1>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            Build a deterministic quote first, then return here to review and continue to the agreement.
          </p>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/quote')}>
            Back to quote builder
          </button>
        </div>
      </div>
    );
  }

  const reference = buildQuoteReference(quote);
  const quoteVersion = quote.quoteDocVersion ?? siteConfig.quoteDocVersion;
  const displayedHash = shortenMiddle(quote.quoteHash);
  const supersedes = shortenMiddle(quote.priorQuoteHash);

  return (
    <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '1.5rem' }}>
      {isHomeSecurity && <HomeSecurityFunnelSteps currentStep="quote" />}
      {isHomeSecurity && (
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link className="btn btn-link" to="/quote?vertical=home-security">
            Edit answers
          </Link>
        </div>
      )}
      <div className="card-grid" style={{ alignItems: 'start' }}>
        <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {!isHomeSecurity && <div className="badge">Decision support</div>}
            <h1 style={{ margin: '0.25rem 0', color: '#fff7e6' }}>Quote ready for review</h1>
            <p style={{ margin: 0, color: '#c8c0aa' }}>
              Deterministic one-time estimate. No subscriptions. Save or share with family, then continue to agreement.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
              <button type="button" className="btn btn-primary" onClick={handleContinueToAgreement}>
                {isHomeSecurity ? 'Accept & Continue' : 'Continue to Agreement'}
              </button>
              <button type="button" className="btn btn-secondary" onClick={handlePrint}>
                Print / Save Quote
              </button>
              {!isHomeSecurity && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => handleSendEmail(shareRecipient || email, 'manual')}
                  disabled={!isValidEmail(shareRecipient || email) || sending || !emailPayload}
                >
                  {sending ? 'Sending…' : 'Email this quote'}
                </button>
              )}
            </div>
            {isHomeSecurity && (
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ color: '#c8c0aa' }}>Want to see the dashboard?</span>
                <DemoDashboardLink variant="link" />
              </div>
            )}
          </div>
          {isHomeSecurity && <SelfMonitoringDisclosure variant="full" className="ka-disclosure--spaced" />}
        </div>
        {isHomeSecurity && <HelpContactPanel />}
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem', border: '1px solid rgba(245, 192, 66, 0.35)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <div className="badge">Quote summary</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <TierBadge tierId={selectedPackage.id} vertical={vertical} />
              <h2 style={{ margin: 0 }}>{selectedPackage.name}</h2>
            </div>
            <p style={{ margin: 0, color: '#c8c0aa' }}>Ref: {reference} • Date: {quoteDate}</p>
            <small style={{ color: '#c8c0aa' }}>Quote Version: {quoteVersion}</small>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#c8c0aa', fontSize: '0.95rem' }}>One-time estimate</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--kaec-gold)' }}>
              {formatCurrency(quote.pricing.total)}
            </div>
            <small style={{ color: '#c8c0aa' }}>
              {vertical === 'home-security'
                ? 'Add-ons are quoted separately; no subscriptions sold.'
                : 'No monthly subscriptions required.'}
            </small>
            <div style={{ display: 'grid', gap: '0.25rem', marginTop: '0.5rem', color: '#c8c0aa' }}>
              <small>Deposit due today: {formatCurrency(depositDue)}</small>
              <small>Remaining balance on arrival: {formatCurrency(balanceDue)}</small>
              <small>Deposit due today: 50% of the system cost. Remaining balance due on installation day.</small>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '0.35rem', color: '#e6ddc7' }}>
          <strong>Property context</strong>
          <small>
            Home type: {quote.homeType?.replace('-', ' ') || 'Not provided'} • Size: {quote.homeSize || 'Not provided'} • Internet
            reliability: {quote.internetReliability || 'Not provided'}
          </small>
          {(quote.customerName || quote.contact || quote.city) && (
            <small>
              {quote.customerName && <span>Contact: {quote.customerName}. </span>}
              {quote.contact && <span>Reach: {quote.contact}. </span>}
              {quote.city && <span>City: {quote.city}.</span>}
            </small>
          )}
        </div>

        <div className="card" style={{ display: 'grid', gap: '0.5rem', background: '#0f0e0d' }}>
          <strong>What’s included</strong>
          <ul className="list" style={{ marginTop: 0 }}>
            {quoteDeliverables.map((item) => (
              <li key={item}>
                <span />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {isHomeSecurity && (
          <div className="card" style={{ display: 'grid', gap: '0.5rem', background: '#0f0e0d' }}>
            <strong>Included hardware</strong>
            <ul className="list" style={{ marginTop: 0 }}>
              {getHomeSecurityHardwareList(quote.packageId.toLowerCase() as 'a1' | 'a2' | 'a3').map((item) => (
                <li key={item}>
                  <span />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <small style={{ color: '#c8c0aa' }}>{HOME_SECURITY_CLARITY_FOOTER}</small>
          </div>
        )}

        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <strong>Included in selection</strong>
          <ul className="list" style={{ marginTop: 0 }}>
            <li>
              <span />
              <span>
                Package: {selectedPackage.name} ({formatCurrency(selectedPackage.basePrice)})
              </span>
            </li>
            {selectedAddOns.length === 0 && (
              <li>
                <span />
                <span>No add-ons selected.</span>
              </li>
            )}
            {selectedAddOns.map((addOn) => {
              const priceDisplay = addOn.priceLabel ?? formatCurrency(addOn.price);
              return (
                <li key={addOn.id}>
                  <span />
                  <span>
                    {addOn.label} ({priceDisplay})
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        {isHomeSecurity && assumedCoverage.length > 0 && (
          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <strong>Assumed quantities</strong>
            <ul className="list" style={{ marginTop: 0 }}>
              {assumedCoverage.map((item) => (
                <li key={item}>
                  <span />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <small style={{ color: '#c8c0aa' }}>Final quantities may adjust after on-site confirmation.</small>
          </div>
        )}
      </div>

      {isHomeSecurity ? (
        <PaymentInstallDayAccordion />
      ) : (
        <div className="card" style={{ display: 'grid', gap: '0.5rem' }}>
          <div className="badge">Payment terms</div>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            A deposit reserves your install date. The remaining balance is due when we arrive, before installation begins. This
            avoids payment issues after work is complete and keeps your install day on schedule.
          </p>
        </div>
      )}

      {!isHomeSecurity && (
        <FlowGuidePanel
          currentStep="quote"
          nextDescription="Agreement review is next. Save or email this quote, then continue to formal acceptance."
          ctaLabel="Continue to Agreement"
          onCta={handleContinueToAgreement}
        />
      )}

      {!isHomeSecurity && (
        <div className="card" style={{ display: 'grid', gap: '0.75rem', border: '1px solid rgba(245, 192, 66, 0.35)' }}>
          <div>
            <div className="badge">Share &amp; Save</div>
            <h3 style={{ margin: '0.25rem 0', color: '#fff7e6' }}>Share this quote</h3>
            <p style={{ margin: 0, color: '#c8c0aa' }}>
              Send the quote to yourself or trusted family members. The resume link keeps progress for caregivers or caseworkers.
            </p>
          </div>

          <label style={{ display: 'grid', gap: '0.35rem', maxWidth: '520px' }}>
            <span>Email to send</span>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <input
                value={shareRecipient}
                onChange={(e) => {
                  setShareRecipient(e.target.value);
                  handleUpdateEmail(e.target.value);
                }}
                placeholder="care@kickassfamily.com"
                style={{
                  flex: 1,
                  minWidth: '240px',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(245,192,66,0.35)',
                  background: '#0f0e0d',
                  color: '#fff7e6',
                }}
              />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleSendEmail(shareRecipient, 'manual')}
                disabled={!isValidEmail(shareRecipient) || sending || !emailPayload}
              >
                {sending ? 'Sending…' : 'Send quote'}
              </button>
            </div>
            {!isValidEmail(shareRecipient) && shareRecipient && (
              <small style={{ color: '#f0b267' }}>Enter a valid email.</small>
            )}
            <small style={{ color: '#c8c0aa' }}>
              We email the legally binding tokenized copy through KAEC servers without changing pricing or package content.
            </small>
          </label>

          {(emailBanner || quote.emailLastStatus) && (
            <div style={{ color: emailStatus === 'failed' ? '#f0b267' : '#c8c0aa' }}>
              <strong>
                {emailBanner ||
                  (emailStatus === 'sent'
                    ? `Sent to ${quote.emailRecipients?.[0] ?? quote.emailTo ?? shareRecipient}.`
                    : emailStatus === 'mock'
                    ? `Email queued (mock mode) for ${quote.emailRecipients?.[0] ?? quote.emailTo ?? shareRecipient}.`
                    : 'We could not send the email. Please try again.')}
              </strong>
              {(emailError || quote.emailLastError) && (
                <div style={{ marginTop: '0.25rem' }}>
                  <small>{emailError || quote.emailLastError}</small>
                </div>
              )}
              {quote.emailRecipients?.length ? (
                <div style={{ marginTop: '0.25rem' }}>
                  <small>Recently sent to: {quote.emailRecipients.slice(0, 3).join(', ')}</small>
                </div>
              ) : null}
            </div>
          )}

          {resumeUrl && (
            <div style={{ display: 'grid', gap: '0.35rem' }}>
              <strong>Resume link</strong>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <a href={resumeUrl} style={{ color: 'var(--kaec-gold)', fontWeight: 700 }}>
                  Continue your order
                </a>
                <button type="button" className="btn btn-secondary" onClick={handleCopyResumeLink}>
                  {linkCopied ? 'Copied resume link' : 'Copy resume link'}
                </button>
              </div>
              <small className="break-all" style={{ color: '#c8c0aa' }}>{resumeUrl}</small>
            </div>
          )}
        </div>
      )}

      <div style={{ display: 'grid', gap: '1rem' }}>
        {!isHomeSecurity && (
          <div className="card" style={{ display: 'grid', gap: '0.35rem' }}>
            <div className="badge">Validation &amp; Details</div>
            <p style={{ margin: 0, color: '#c8c0aa' }}>
              Expand for hardware, coverage, and advisory narrative details. Internal-only logs stay hidden from customers.
            </p>
          </div>
        )}

        {vertical !== 'home-security' && (
          <AccordionSection title="Hardware included" description="Device counts grouped by location." defaultOpen={false}>
            <div className="card" style={{ display: 'grid', gap: '1rem' }}>
              <div className="badge">Hardware</div>
              {hardwareGroups.map((group) => (
                <div
                  key={group.heading}
                  className="card"
                  style={{ border: '1px solid rgba(245, 192, 66, 0.35)', display: 'grid', gap: '0.5rem' }}
                >
                  <strong>{group.heading}</strong>
                  <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
                    {group.categories.map((category) => (
                      <div key={category.title} className="card" style={{ border: '1px solid rgba(245, 192, 66, 0.35)' }}>
                        <strong>{category.title}</strong>
                        <ul className="list" style={{ marginTop: '0.35rem' }}>
                          {category.items.map((item) => (
                            <li key={item.name}>
                              <span />
                              <span>
                                {item.name} — qty {item.quantity}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>
        )}

        {vertical !== 'home-security' && (
          <AccordionSection title="Feature coverage" description="Feature categories included in this selection." defaultOpen={false}>
            <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
              <div className="badge">Feature coverage</div>
              {featureGroups.map((group) => (
                <div
                  key={group.heading}
                  className="card"
                  style={{ border: '1px solid rgba(245, 192, 66, 0.35)', display: 'grid', gap: '0.5rem' }}
                >
                  <strong>{group.heading}</strong>
                  <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                    {group.categories.map((category) => (
                      <div key={category.title} className="card" style={{ border: '1px solid rgba(245, 192, 66, 0.35)' }}>
                        <strong>{category.title}</strong>
                        <ul className="list" style={{ marginTop: '0.35rem' }}>
                          {category.items.map((item) => (
                            <li key={item}>
                              <span />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>
        )}

        {!isHomeSecurity && (
          <AccordionSection title="Narrative / Explanation" description="Advisory explanation and disclaimers." defaultOpen={false}>
            <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <div className="badge">AI Explanation (Advisory)</div>
                  <h3 style={{ margin: '0.25rem 0', color: '#fff7e6' }}>Deterministic narrative</h3>
                  <p style={{ margin: 0, color: '#c8c0aa' }}>
                    Explains why this package and add-ons fit, what offline behavior to expect, and the next best step. No medical
                    advice; if there is an urgent safety issue, call 911.
                  </p>
                </div>
                <button type="button" className="btn btn-secondary" onClick={handleExplainQuote}>
                  {narrativeLoading ? 'Building explanation…' : 'Explain this quote'}
                </button>
              </div>
              <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
                {(narrativeLoading || !narrative) && (
                  <div className="card" style={{ border: '1px solid rgba(245, 192, 66, 0.35)' }}>
                    <strong>{narrativeLoading ? 'Building explanation…' : 'Click “Explain this quote” to view the narrative.'}</strong>
                    <small style={{ color: '#c8c0aa' }}>
                      Deterministic templates are used by default; no external AI is required.
                    </small>
                  </div>
                )}
                {narrative?.sections.map((section) => (
                  <div
                    key={section.title}
                    className="card"
                    style={{ display: 'grid', gap: '0.4rem', border: '1px solid rgba(245, 192, 66, 0.35)' }}
                  >
                    <strong>{section.title}</strong>
                    <p style={{ margin: 0, color: '#c8c0aa' }}>{section.body}</p>
                  </div>
                ))}
              </div>
              <div className="card" style={{ border: '1px solid rgba(245, 192, 66, 0.35)' }}>
                <strong>Disclaimers</strong>
                <ul className="list" style={{ marginTop: '0.35rem' }}>
                  {(narrative?.disclaimer ?? [
                    'Informational only. Not medical advice or a diagnosis.',
                    'If you have an urgent safety concern, call 911.',
                    'Final configuration depends on on-site conditions and local code.',
                  ]).map((item) => (
                    <li key={item}>
                      <span />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AccordionSection>
        )}

        <AccordionSection title="Assumptions & Exclusions" description="Context for what is and is not covered." defaultOpen={false}>
          <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
            <div className="card" style={{ display: 'grid', gap: '0.35rem', border: '1px solid rgba(245, 192, 66, 0.35)' }}>
              <strong>Assumptions</strong>
              <ul className="list" style={{ marginTop: 0 }}>
                {quoteAssumptions.map((item) => (
                  <li key={item}>
                    <span />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ display: 'grid', gap: '0.35rem', border: '1px solid rgba(245, 192, 66, 0.35)' }}>
              <strong>Exclusions</strong>
              <ul className="list" style={{ marginTop: 0 }}>
                {quoteExclusions.map((item) => (
                  <li key={item}>
                    <span />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AccordionSection>

        {isInternalView && !isHomeSecurity && (
          <AccordionSection title="Internal support log" description="Internal-only identifiers and delivery metadata." defaultOpen={false}>
            <div className="card" style={{ display: 'grid', gap: '0.35rem', border: '1px solid rgba(245, 192, 66, 0.35)' }}>
              <div style={{ display: 'grid', gap: '0.25rem', color: '#c8c0aa' }}>
                <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span className="mono-text" title={quote.quoteHash || undefined}>Quote Hash: {displayedHash}</span>
                  {quote.quoteHash && (
                    <button type="button" className="btn btn-secondary" onClick={handleCopyHash}>
                      {hashCopied ? 'Copied full hash' : 'Copy full hash'}
                    </button>
                  )}
                </div>
                <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span className="mono-text" title={quote.priorQuoteHash || undefined}>Supersedes prior: {supersedes}</span>
                  {quote.priorQuoteHash && (
                    <button type="button" className="btn btn-secondary" onClick={handleCopyPriorHash}>
                      {priorHashCopied ? 'Copied prior hash' : 'Copy prior hash'}
                    </button>
                  )}
                </div>
                {quote.issuedAtISO && <small>Issued: {quote.issuedAtISO}</small>}
                {quote.quoteDocVersion && <small>Document version: {quote.quoteDocVersion}</small>}
              </div>
            </div>
            <AuthorityBlock meta={authorityMeta} />
            <div className="card" style={{ display: 'grid', gap: '0.35rem', background: '#0f0e0d' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <strong>Email delivery</strong>
                <small style={{ color: '#c8c0aa' }}>
                  {quote.emailLastStatus
                    ? `${quote.emailLastStatus.toUpperCase()} ${quote.emailIssuedAtISO ? `at ${quote.emailIssuedAtISO}` : ''}`
                    : 'Not sent'}
                </small>
              </div>
              <ul className="list" style={{ marginTop: 0 }}>
                <li>
                  <span />
                  <span>Provider: {quote.emailProvider ?? 'not configured (mock mode)'}</span>
                </li>
                <li>
                  <span />
                  <span>Message ID: {quote.emailMessageId ?? 'n/a'}</span>
                </li>
                <li>
                  <span />
                  <span>Recipients: {quote.emailRecipients?.slice(0, 3).join(', ') || quote.contact || 'n/a'}</span>
                </li>
              </ul>
              {emailPayload?.links && (
                <div style={{ display: 'grid', gap: '0.35rem' }}>
                  <small style={{ color: '#c8c0aa' }}>Links included in the email payload:</small>
                  <ul className="list" style={{ marginTop: 0 }}>
                    <li>
                      <span />
                      <span className="break-all">Print: {emailPayload.links.printUrl}</span>
                    </li>
                    <li>
                      <span />
                      <span className="break-all">Verify: {emailPayload.links.verifyUrl}</span>
                    </li>
                    <li>
                      <span />
                      <span className="break-all">Resume: {emailPayload.links.resumeUrl}</span>
                    </li>
                    {emailPayload.links.reviewUrl && (
                      <li>
                        <span />
                        <span className="break-all">Review: {emailPayload.links.reviewUrl}</span>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </AccordionSection>
        )}
      </div>
    </div>
  );
};

export default QuoteReview;
