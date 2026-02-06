import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthorityBlock from '../components/AuthorityBlock';
import { getAddOns, getPackagePricing } from '../data/pricing';
import { getHardwareGroups } from '../data/hardware';
import { getFeatureGroups } from '../data/features';
import { generateAgreement, QuoteContext } from '../lib/agreement';
import { buildAgreementReference, computeAgreementHash } from '../lib/agreementHash';
import { copyToClipboard, shortenMiddle } from '../lib/displayUtils';
import { loadRetailFlow, markFlowStep, updateRetailFlow, AcceptanceRecord } from '../lib/retailFlow';
import { buildResumeUrl } from '../lib/resumeToken';
import { siteConfig } from '../config/site';
import { buildAgreementEmailPayload, isValidEmail } from '../lib/emailPayload';
import { sendAgreementEmail } from '../lib/emailSend';
import { buildAgreementAuthorityMeta, DocAuthorityMeta, parseAgreementToken } from '../lib/docAuthority';
import FlowGuidePanel from '../components/FlowGuidePanel';
import TierBadge from '../components/TierBadge';
import { brandSite } from '../lib/brand';
import { calculateDepositDue } from '../lib/paymentTerms';
import HomeSecurityFunnelSteps from '../components/HomeSecurityFunnelSteps';
import { useLayoutConfig } from '../components/LayoutConfig';
import SelfMonitoringDisclosure from '../components/disclosures/SelfMonitoringDisclosure';

const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`;
const formatEmailStatus = (status?: string) => {
  if (!status) return 'Not sent';
  if (status === 'mock') return 'Queued';
  return status.toUpperCase();
};

const AgreementReview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const token = searchParams.get('t') || '';
  const locationQuote = (location.state as { quoteContext?: QuoteContext } | undefined)?.quoteContext;
  const initialFlow = useMemo(() => loadRetailFlow(), []);
  const [quote, setQuote] = useState<QuoteContext | null>(() => initialFlow.quote ?? null);
  const [agreementHash, setAgreementHash] = useState('');
  const [acceptChecked, setAcceptChecked] = useState(false);
  const [selfMonitoringAcknowledged, setSelfMonitoringAcknowledged] = useState(false);
  const [fullName, setFullName] = useState('');
  const [acceptanceDate, setAcceptanceDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [storedAcceptance, setStoredAcceptance] = useState<AcceptanceRecord | null>(
    () => initialFlow.agreementAcceptance ?? null,
  );
  const [bannerMessage, setBannerMessage] = useState('');
  const [email, setEmail] = useState(() => initialFlow.quote?.contact ?? '');
  const [emailBanner, setEmailBanner] = useState('');
  const [manualRecipient, setManualRecipient] = useState('');
  const [emailError, setEmailError] = useState('');
  const [sending, setSending] = useState(false);
  const [guidedMode, setGuidedMode] = useState<boolean>(() => initialFlow.guidedMode ?? false);
  const [agreementEmailPayload, setAgreementEmailPayload] =
    useState<Awaited<ReturnType<typeof buildAgreementEmailPayload>> | null>(null);
  const [hashCopied, setHashCopied] = useState(false);
  const [priorHashCopied, setPriorHashCopied] = useState(false);
  const [quoteHashCopied, setQuoteHashCopied] = useState(false);
  const [resumeCopied, setResumeCopied] = useState(false);
  const [authorityMeta, setAuthorityMeta] = useState<DocAuthorityMeta | null>(null);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [hydrationAttempted, setHydrationAttempted] = useState(false);
  const redirectMessage = (location.state as { message?: string } | undefined)?.message;
  const acceptanceSectionRef = useRef<HTMLDivElement | null>(null);
  const shareSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    markFlowStep('agreement');
    let hydratedFromToken = false;
    if (token) {
      try {
        const payload = parseAgreementToken(token);
        if (payload?.quote) {
          hydratedFromToken = true;
          setQuote(payload.quote);
          setEmail(payload.quote.contact ?? '');
          if (payload.acceptance) {
            setStoredAcceptance(payload.acceptance);
            setAcceptChecked(Boolean(payload.acceptance.accepted));
            if (payload.acceptance.fullName) setFullName(payload.acceptance.fullName);
            if (payload.acceptance.acceptanceDate) setAcceptanceDate(payload.acceptance.acceptanceDate);
          }
        }
      } catch (err) {
        console.error('KAEC AgreementReview: token parse failed', err);
      }
    }

    if (!hydratedFromToken && locationQuote) {
      setQuote(locationQuote);
      setEmail(locationQuote.contact ?? '');
      updateRetailFlow({ quote: locationQuote });
    }

    if (!hydratedFromToken && initialFlow.quote) {
      setQuote((current) => current ?? initialFlow.quote!);
      setEmail((current) => current || initialFlow.quote?.contact || '');
    }

    if (typeof initialFlow.guidedMode !== 'undefined') setGuidedMode(Boolean(initialFlow.guidedMode));
    if (initialFlow.agreementAcceptance) {
      setStoredAcceptance(initialFlow.agreementAcceptance);
      setAcceptChecked(Boolean(initialFlow.agreementAcceptance.accepted));
      if (initialFlow.agreementAcceptance.fullName) setFullName(initialFlow.agreementAcceptance.fullName);
      if (initialFlow.agreementAcceptance.acceptanceDate)
        setAcceptanceDate(initialFlow.agreementAcceptance.acceptanceDate);
    }

    setHydrationAttempted(true);
  }, [initialFlow, locationQuote, token]);

  useEffect(() => {
    if (!hydrationAttempted || quote) return;
    console.error('KAEC AgreementReview: missing agreement state');
  }, [hydrationAttempted, quote]);

  const acceptanceState = acceptChecked || Boolean(storedAcceptance?.accepted);

  const acceptedRecord = storedAcceptance?.accepted ? storedAcceptance : null;

  useEffect(() => {
    let isMounted = true;
    const run = async () => {
      if (!quote) {
        if (isMounted) setAuthorityMeta(null);
        return;
      }
      const meta = await buildAgreementAuthorityMeta(
        { quote, agreementAcceptance: storedAcceptance ?? undefined },
        token || undefined,
      );
      if (isMounted) setAuthorityMeta(meta);
    };

    run();
    return () => {
      isMounted = false;
    };
  }, [quote, storedAcceptance, token]);

  useEffect(() => {
    let isMounted = true;
    const run = async () => {
      const hash = await computeAgreementHash(quote, {
        accepted: acceptanceState,
        fullName,
        acceptanceDate,
      });
      if (isMounted) setAgreementHash(hash);
    };

    run();
    return () => {
      isMounted = false;
    };
  }, [quote, acceptanceState, fullName, acceptanceDate]);

  useEffect(() => {
    let isMounted = true;
    const run = async () => {
      if (!quote || !acceptedRecord) {
        if (isMounted) setAgreementEmailPayload(null);
        return;
      }
      const payload = await buildAgreementEmailPayload(
        { ...quote, contact: email || quote.contact },
        { ...acceptedRecord, emailTo: email || acceptedRecord.emailTo },
        { resumePath: 'payment' },
      );
      if (isMounted) setAgreementEmailPayload(payload);
    };

    run();
    return () => {
      isMounted = false;
    };
  }, [acceptedRecord, email, quote, token]);

  const agreement = useMemo(() => generateAgreement(quote ?? undefined), [quote]);
  const vertical = quote?.vertical ?? 'elder-tech';
  const isHomeSecurity = vertical === 'home-security';

  useLayoutConfig({
    layoutVariant: isHomeSecurity ? 'funnel' : 'sitewide',
    showBreadcrumbs: isHomeSecurity,
    breadcrumb: isHomeSecurity
      ? [
          { label: 'Home Security', href: '/home-security' },
          { label: 'Agreement' },
        ]
      : [],
  });
  const hardwareGroups = useMemo(
    () => (quote && vertical !== 'home-security' ? getHardwareGroups(quote.packageId, quote.selectedAddOns) : []),
    [quote, vertical]
  );
  const featureGroups = useMemo(
    () => (quote && vertical !== 'home-security' ? getFeatureGroups(quote.packageId, quote.selectedAddOns) : []),
    [quote, vertical]
  );
  const selectedPackage = useMemo(() => {
    const match = quote ? getPackagePricing(vertical).find((pkg) => pkg.id === quote.packageId) : null;
    return match ?? getPackagePricing(vertical)[0];
  }, [quote, vertical]);
  const selectedAddOns = useMemo(
    () => (quote ? getAddOns(vertical).filter((item) => quote.selectedAddOns.includes(item.id)) : []),
    [quote, vertical]
  );
  const agreementReference = quote ? buildAgreementReference(quote) : '';
  const quoteHashDisplay = shortenMiddle(quote?.quoteHash || '');
  const supersedesQuote = shortenMiddle(quote?.priorQuoteHash || '');
  const displayedAgreementHash = shortenMiddle(agreementHash);
  const supersedesAgreement = shortenMiddle(
    storedAcceptance?.supersedesAgreementHash ?? storedAcceptance?.agreementHash
  );
  const resumeUrl = quote
    ? storedAcceptance?.accepted
      ? buildResumeUrl(quote, 'payment')
      : buildResumeUrl(quote, 'agreement')
    : '';
  const shortResume = shortenMiddle(resumeUrl);
  const customerName = quote?.customerName?.trim() || 'Customer';
  const agreementDate = agreement?.header?.generatedDate || '';
  const agreementVersion = siteConfig.agreementDocVersion;
  const acceptedName = fullName || storedAcceptance?.fullName || '';
  const acceptedDate = acceptanceDate || storedAcceptance?.acceptanceDate || '';
  const acceptanceReady = (acceptChecked || storedAcceptance?.accepted) && Boolean(acceptedName.trim()) && isValidEmail(email);
  const acceptanceSnapshot: AcceptanceRecord | null = useMemo(() => {
    if (storedAcceptance?.accepted || acceptanceReady) {
      return {
        accepted: true,
        fullName: storedAcceptance?.fullName ?? acceptedName,
        acceptanceDate: storedAcceptance?.acceptanceDate ?? acceptedDate,
        recordedAt: storedAcceptance?.recordedAt,
        acceptedAt: storedAcceptance?.acceptedAt ?? storedAcceptance?.recordedAt,
        agreementVersion,
        agreementHash: storedAcceptance?.agreementHash ?? agreementHash,
        supersedesAgreementHash: storedAcceptance?.supersedesAgreementHash ?? storedAcceptance?.agreementHash,
        emailIssuedAt: storedAcceptance?.emailIssuedAt,
        emailIssuedAtISO: storedAcceptance?.emailIssuedAtISO,
        emailTo: storedAcceptance?.emailTo ?? email,
        emailProvider: storedAcceptance?.emailProvider,
        emailMessageId: storedAcceptance?.emailMessageId,
        emailRecipients: storedAcceptance?.emailRecipients,
        emailLastStatus: storedAcceptance?.emailLastStatus,
        emailLastError: storedAcceptance?.emailLastError,
        emailSubject: storedAcceptance?.emailSubject,
        emailBody: storedAcceptance?.emailBody,
        emailStatus: storedAcceptance?.emailStatus ?? 'not_sent',
      };
    }
    return null;
  }, [acceptanceReady, acceptedDate, acceptedName, agreementHash, agreementVersion, email, storedAcceptance]);

  const agreementEmailStatus = acceptanceSnapshot?.emailLastStatus ?? acceptanceSnapshot?.emailStatus ?? 'not_sent';
  const rebuildSourceQuote = locationQuote ?? initialFlow.quote ?? null;
  const canRebuildFromQuote = Boolean(rebuildSourceQuote);

  const handleCopyAgreementHash = async () => {
    if (!agreementHash) return;
    await copyToClipboard(agreementHash);
    setHashCopied(true);
    setTimeout(() => setHashCopied(false), 2000);
  };

  const handleCopyPriorAgreementHash = async () => {
    const prior = storedAcceptance?.supersedesAgreementHash ?? storedAcceptance?.agreementHash;
    if (!prior) return;
    await copyToClipboard(prior);
    setPriorHashCopied(true);
    setTimeout(() => setPriorHashCopied(false), 2000);
  };

  const handleCopyQuoteHash = async () => {
    if (!quote?.quoteHash) return;
    await copyToClipboard(quote.quoteHash);
    setQuoteHashCopied(true);
    setTimeout(() => setQuoteHashCopied(false), 2000);
  };

  const handleCopyResume = async () => {
    if (!resumeUrl) return;
    await copyToClipboard(resumeUrl);
    setResumeCopied(true);
    setTimeout(() => setResumeCopied(false), 2000);
  };

  const handleUpdateEmail = (value: string) => {
    setEmail(value);
    if (!quote) return;
    const nextQuote = { ...quote, contact: value };
    setQuote(nextQuote);
    updateRetailFlow({ quote: nextQuote });
  };

  const recordAgreementEmailResult = useCallback(
    (recipient: string, result: Awaited<ReturnType<typeof sendAgreementEmail>>) => {
      if (!quote) return;
      const baseAcceptance = storedAcceptance?.accepted ? storedAcceptance : null;
      if (!baseAcceptance) return;
      const issuedAt = new Date().toISOString();
      const recipients = [recipient, ...(baseAcceptance.emailRecipients ?? [])].filter(Boolean);
      const uniqueRecipients = Array.from(new Set(recipients)).slice(0, 3);
      const status = result.ok ? (result.provider === 'mock' ? 'mock' : 'sent') : 'failed';
      const updated: AcceptanceRecord = {
        ...baseAcceptance,
        emailIssuedAt: baseAcceptance.emailIssuedAt ?? issuedAt,
        emailIssuedAtISO: issuedAt,
        emailTo: recipient,
        emailProvider: result.provider,
        emailMessageId: result.id,
        emailLastStatus: status,
        emailLastError: result.ok ? undefined : result.error,
        emailRecipients: uniqueRecipients,
      };
      setStoredAcceptance(updated);
      updateRetailFlow({ agreementAcceptance: updated });
      const banner =
        status === 'sent'
          ? `A copy has been emailed to ${recipient}.`
          : status === 'mock'
          ? `Email queued for ${recipient}.`
          : 'We could not send the email. Please try again.';
      setEmailBanner(banner);
      setEmailError(result.ok ? '' : result.error || 'Unable to send email');
    },
    [quote, storedAcceptance],
  );

  const sendAgreementEmailToRecipient = useCallback(
    async (recipient: string) => {
      if (!agreementEmailPayload || !isValidEmail(recipient)) return null;
      const baseAcceptance = storedAcceptance?.accepted ? storedAcceptance : null;
      if (!baseAcceptance) return null;
      setSending(true);
      setEmailError('');
      const response = await sendAgreementEmail({ ...agreementEmailPayload, to: recipient });
      recordAgreementEmailResult(recipient, response);
      setSending(false);
      return response;
    },
    [agreementEmailPayload, recordAgreementEmailResult, storedAcceptance],
  );

  const handleSendAgreementEmail = useCallback(
    async (recipient: string, source: 'auto' | 'manual') => {
      const response = await sendAgreementEmailToRecipient(recipient);
      if (!response) return;
      if (source === 'manual') setManualRecipient('');
    },
    [sendAgreementEmailToRecipient],
  );

  useEffect(() => {
    if (!acceptedRecord || !agreementEmailPayload || sending) return;
    const recipient = email || acceptedRecord.emailTo || quote?.contact || '';
    if (!isValidEmail(recipient)) return;
    if (acceptedRecord.emailIssuedAtISO) return;
    handleSendAgreementEmail(recipient, 'auto');
  }, [acceptedRecord, agreementEmailPayload, email, quote, sending, handleSendAgreementEmail]);

  const persistAcceptance = async (): Promise<AcceptanceRecord> => {
    const hash =
      agreementHash ||
      (await computeAgreementHash(quote, {
        accepted: true,
        fullName,
        acceptanceDate,
      }));
    const timestamp = new Date().toISOString();
    const record: AcceptanceRecord = {
      accepted: true,
      fullName,
      acceptanceDate,
      recordedAt: storedAcceptance?.recordedAt ?? timestamp,
      acceptedAt: storedAcceptance?.acceptedAt ?? storedAcceptance?.recordedAt ?? timestamp,
      agreementVersion,
      agreementHash: hash,
      supersedesAgreementHash: storedAcceptance?.agreementHash ?? storedAcceptance?.supersedesAgreementHash,
      emailIssuedAt: storedAcceptance?.emailIssuedAt,
      emailIssuedAtISO: storedAcceptance?.emailIssuedAtISO,
      emailTo: storedAcceptance?.emailTo ?? email,
      emailSubject: storedAcceptance?.emailSubject,
      emailBody: storedAcceptance?.emailBody,
      emailStatus: storedAcceptance?.emailStatus ?? 'not_sent',
      emailProvider: storedAcceptance?.emailProvider,
      emailMessageId: storedAcceptance?.emailMessageId,
      emailRecipients: storedAcceptance?.emailRecipients,
      emailLastStatus: storedAcceptance?.emailLastStatus,
      emailLastError: storedAcceptance?.emailLastError,
    };
    setStoredAcceptance(record);
    updateRetailFlow({ agreementAcceptance: record });
    setBannerMessage('Agreement accepted. Proceed to payment when ready.');
    return record;
  };

  const handleAccept = async () => {
    if (!acceptChecked || !fullName.trim() || !isValidEmail(email)) return;
    await persistAcceptance();
  };

  const handleProceedToPayment = async () => {
    if (!storedAcceptance?.accepted || !quote) return;
    navigate('/payment', { state: { quoteContext: quote } });
  };

  const handlePrint = () => {
    navigate('/agreementPrint', { state: { autoPrint: true } });
  };

  const handleRebuildFromQuote = () => {
    if (!rebuildSourceQuote) return;
    setQuote(rebuildSourceQuote);
    setEmail(rebuildSourceQuote.contact ?? '');
    updateRetailFlow({ quote: rebuildSourceQuote });
    setBannerMessage('Agreement rebuilt from saved quote.');
  };

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleScrollToSection = (ref: { current: HTMLDivElement | null }) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const addOnTotal = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);
  const estimatedTotal = quote?.pricing?.total ?? selectedPackage.basePrice + addOnTotal;
  const depositDue = calculateDepositDue(estimatedTotal, siteConfig.depositPolicy);
  const balanceDue = Math.max(estimatedTotal - depositDue, 0);

  return (
    <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '2rem' }}>
      {vertical === 'home-security' && <HomeSecurityFunnelSteps currentStep="deposit" />}
      {vertical === 'home-security' && (
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link className="btn btn-secondary" to="/quoteReview">
            Review Your Quote
          </Link>
        </div>
      )}
      {redirectMessage && (
        <div className="card" style={{ border: '1px solid rgba(245, 192, 66, 0.35)', color: '#c8c0aa' }}>
          {redirectMessage}
        </div>
      )}
      {bannerMessage && (
        <div className="card" style={{ border: '1px solid rgba(84, 160, 82, 0.5)', color: '#c8c0aa' }}>
          {bannerMessage}
        </div>
      )}

      {quote ? (
        <>
          <div className="hero-card" style={{ display: 'grid', gap: '1.25rem' }}>
            <div
              style={{
                display: 'grid',
                gap: '1.25rem',
                gridTemplateColumns: '1.1fr 0.9fr',
                alignItems: 'start',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <div>
                  <div className="badge">Step 2 — Agreement Review</div>
                  <h1 style={{ margin: '0.25rem 0', color: '#fff7e6' }}>Decision-ready agreement</h1>
                  <p style={{ margin: 0, color: '#c8c0aa' }}>
                    Calm, plain-language overview first. This locks in your quote so we can collect the deposit and schedule
                    installation.
                  </p>
                </div>
                <div>
                  <strong>What this covers</strong>
                  <ul className="list" style={{ marginTop: '0.35rem' }}>
                    <li>
                      <span />
                      <span>Turns your deterministic quote into the signed agreement so hardware and installation can be reserved.</span>
                    </li>
                    <li>
                      <span />
                      <span>One-time purchase. No monthly subscriptions required.</span>
                    </li>
                    <li>
                      <span />
                      <span>Emergency response remains 911; this is not medical monitoring.</span>
                    </li>
                    <li>
                      <span />
                      <span>Next step after acceptance: deposit, then scheduling.</span>
                    </li>
                    <li>
                      <span />
                      <span>Full legal and audit details remain available below.</span>
                    </li>
                  </ul>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleScrollToSection(acceptanceSectionRef)}
                  >
                    {vertical === 'home-security' ? 'Agree & Continue' : 'Continue to acceptance'}
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={handlePrint}>
                    Print / Save Agreement
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleSendAgreementEmail(email, 'manual')}
                    disabled={!acceptedRecord || !agreementEmailPayload || !isValidEmail(email) || sending}
                  >
                    {sending ? 'Sending…' : 'Email to primary contact'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleScrollToSection(shareSectionRef)}
                  >
                    Send to another email
                  </button>
                </div>
              </div>

              <div className="card" style={{ display: 'grid', gap: '0.75rem', border: '1px solid rgba(245, 192, 66, 0.35)' }}>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}
                >
                  <div className="badge">Agreement summary</div>
                  <TierBadge tierId={selectedPackage.id} labelOverride={selectedPackage.name} vertical={vertical} />
                </div>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  <strong style={{ fontSize: '1.1rem' }}>One-time total: {formatCurrency(estimatedTotal)}</strong>
                  <small style={{ color: '#c8c0aa' }}>Based on your selected tier and add-ons.</small>
                </div>
                <div style={{ display: 'grid', gap: '0.25rem', color: '#c8c0aa' }}>
                  <small>Deposit due today: {formatCurrency(depositDue)}</small>
                  <small>Remaining balance on arrival: {formatCurrency(balanceDue)}</small>
                </div>
                <div style={{ display: 'grid', gap: '0.35rem' }}>
                  <strong>Customer & property</strong>
                  <ul className="list" style={{ marginTop: 0 }}>
                    <li>
                      <span />
                      <span>{customerName} • {quote.contact || 'contact pending'}</span>
                    </li>
                    {quote.city && (
                      <li>
                        <span />
                        <span>{quote.city}</span>
                      </li>
                    )}
                    {quote.homeType && (
                      <li>
                        <span />
                        <span>{quote.homeType}{quote.homeSize ? ` • ${quote.homeSize}` : ''}</span>
                      </li>
                    )}
                    {quote.internetReliability && (
                      <li>
                        <span />
                        <span>Internet reliability: {quote.internetReliability}</span>
                      </li>
                    )}
                  </ul>
                </div>
                <div style={{ display: 'grid', gap: '0.35rem' }}>
                  <strong>Selected add-ons</strong>
                  {selectedAddOns.length ? (
                    <ul className="list" style={{ marginTop: 0 }}>
                      {selectedAddOns.map((addOn) => (
                        <li key={addOn.id}>
                          <span />
                          <span>
                            {addOn.label} ({addOn.priceLabel ?? formatCurrency(addOn.price)})
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <small style={{ color: '#c8c0aa' }}>No add-ons selected.</small>
                  )}
                </div>
              </div>
            </div>
          </div>

      <div className="card" style={{ display: 'grid', gap: '0.5rem' }}>
        <div className="badge">Deposit &amp; payment terms</div>
        <p style={{ margin: 0, color: '#c8c0aa' }}>
          Deposit due today: 50% of the system cost. Remaining balance due on installation day.
        </p>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.5rem' }}>
        <div className="badge">What happens next</div>
        <ul className="list" style={{ marginTop: 0 }}>
          <li>
            <span />
            <span>Installation is not scheduled until you select a date.</span>
          </li>
          <li>
            <span />
            <span>Final placement is confirmed before installation begins.</span>
          </li>
          <li>
            <span />
            <span>Remaining balance is due on the day of installation.</span>
          </li>
        </ul>
      </div>

      <div
        ref={acceptanceSectionRef}
        className="card"
        style={{ display: 'grid', gap: '1rem', border: '1px solid rgba(245, 192, 66, 0.35)' }}
      >
        <div>
          <div className="badge">Acceptance</div>
          <h2 style={{ margin: '0.25rem 0' }}>Confirm and proceed</h2>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            This confirmation is required so we can collect the deposit and schedule your install. Legal wording remains unchanged.
          </p>
        </div>
        {vertical === 'home-security' && (
          <SelfMonitoringDisclosure variant="full" className="ka-disclosure--spaced" />
        )}
        {vertical === 'home-security' && (
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              checked={selfMonitoringAcknowledged}
              onChange={(e) => setSelfMonitoringAcknowledged(e.target.checked)}
              style={{ width: '18px', height: '18px' }}
            />
            <span>I understand this system is self-monitored with no remote monitoring.</span>
          </label>
        )}
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <input
            type="checkbox"
            checked={acceptChecked}
            onChange={(e) => setAcceptChecked(e.target.checked)}
            style={{ width: '18px', height: '18px' }}
          />
          <span>I have reviewed and agree to the {brandSite} agreement</span>
        </label>
        <small style={{ color: '#c8c0aa' }}>This is required so we can take your deposit and schedule your install.</small>
        <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          <label style={{ display: 'grid', gap: '0.35rem' }}>
            <span>Typed full name</span>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full legal name"
              style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
            />
          </label>
          <label style={{ display: 'grid', gap: '0.35rem' }}>
            <span>Date</span>
            <input
              type="date"
              value={acceptanceDate}
              onChange={(e) => setAcceptanceDate(e.target.value)}
              style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
            />
          </label>
          <label style={{ display: 'grid', gap: '0.35rem' }}>
            <span>Email for delivery (required)</span>
            <input
              value={email}
              onChange={(e) => handleUpdateEmail(e.target.value)}
              placeholder="care@kickassfamily.com"
              style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
            />
            {!isValidEmail(email) && email && <small style={{ color: '#f0b267' }}>Enter a valid email to issue.</small>}
          </label>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <button type="button" className="btn btn-primary" onClick={handleAccept} disabled={!acceptanceReady}>
            {vertical === 'home-security' ? 'Agree & Continue' : 'Approve Agreement & Pay Deposit'}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleProceedToPayment}
            disabled={!storedAcceptance?.accepted}
          >
            Continue to Deposit
          </button>
          {storedAcceptance?.accepted && (
            <small style={{ color: '#c8c0aa' }}>
              Accepted by {storedAcceptance.fullName} on {storedAcceptance.acceptanceDate || 'date not provided'}.
            </small>
          )}
        </div>
      </div>

      <div
        ref={shareSectionRef}
        className="card"
        style={{ display: 'grid', gap: '0.85rem', border: '1px solid rgba(245, 192, 66, 0.35)' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ display: 'grid', gap: '0.25rem' }}>
            <div className="badge">Share & Save</div>
            <strong style={{ color: '#fff7e6' }}>Email, print, or resume anytime</strong>
            <small style={{ color: '#c8c0aa' }}>
              Send the binding copy to yourself or another trusted contact. Resume link stays active.
            </small>
          </div>
          <div style={{ display: 'grid', gap: '0.35rem', textAlign: 'right' }}>
            <small style={{ color: '#c8c0aa' }}>Resume link</small>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <a href={resumeUrl} style={{ fontWeight: 800 }}>
                Continue your order
              </a>
              <button type="button" className="btn btn-secondary" onClick={handleCopyResume} disabled={!resumeUrl}>
                {resumeCopied ? 'Copied link' : 'Copy link'}
              </button>
            </div>
            <small style={{ color: '#c8c0aa' }}>{shortResume}</small>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <strong>Send to primary email</strong>
            <label style={{ display: 'grid', gap: '0.35rem' }}>
              <span>Customer email</span>
              <input
                value={email}
                onChange={(e) => handleUpdateEmail(e.target.value)}
                placeholder="name@example.com"
                style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
              />
            </label>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleSendAgreementEmail(email, 'manual')}
                disabled={!acceptedRecord || !agreementEmailPayload || !isValidEmail(email) || sending}
              >
                {sending ? 'Sending…' : 'Email signed agreement'}
              </button>
              {!acceptedRecord && <small style={{ color: '#c8c0aa' }}>Accept first to enable sending.</small>}
            </div>
          </div>

          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <strong>Send to another email</strong>
            <label style={{ display: 'grid', gap: '0.35rem' }}>
              <span>Caregiver, family, or caseworker</span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <input
                  value={manualRecipient}
                  onChange={(e) => setManualRecipient(e.target.value)}
                  placeholder="caregiver@example.com"
                  style={{
                    flex: 1,
                    minWidth: '220px',
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
                  onClick={() => handleSendAgreementEmail(manualRecipient, 'manual')}
                  disabled={!acceptedRecord || !agreementEmailPayload || !isValidEmail(manualRecipient) || sending}
                >
                  {sending ? 'Sending…' : 'Send copy'}
                </button>
              </div>
              {!isValidEmail(manualRecipient) && manualRecipient && (
                <small style={{ color: '#f0b267' }}>Enter a valid email to send a copy.</small>
              )}
            </label>
            {acceptedRecord?.emailRecipients?.length ? (
              <small style={{ color: '#c8c0aa' }}>
                Sent to: {acceptedRecord.emailRecipients.slice(0, 3).join(', ')}
              </small>
            ) : null}
          </div>
        </div>

        {acceptedRecord ? (
          <div className="card" style={{ display: 'grid', gap: '0.75rem', background: '#0f0e0d', border: '1px solid rgba(245, 192, 66, 0.35)' }}>
            {emailBanner || agreementEmailStatus !== 'not_sent' ? (
              <div
                className="card"
                style={{
                  border:
                    agreementEmailStatus === 'failed'
                      ? '1px solid rgba(255, 98, 98, 0.6)'
                      : agreementEmailStatus === 'mock'
                      ? '1px solid rgba(245, 192, 66, 0.35)'
                      : '1px solid rgba(84, 160, 82, 0.5)',
                  color: '#c8c0aa',
                }}
              >
                <strong>
                  {emailBanner ||
                    (agreementEmailStatus === 'sent'
                      ? `A copy has been emailed to ${acceptedRecord.emailRecipients?.[0] ?? acceptedRecord.emailTo ?? email}.`
                      : agreementEmailStatus === 'mock'
                      ? `Email queued for ${acceptedRecord.emailRecipients?.[0] ?? acceptedRecord.emailTo ?? email}.`
                      : 'We could not send the email. Please try again.')}
                </strong>
                {acceptedRecord.emailProvider && (
                  <div style={{ marginTop: '0.25rem' }}>
                    <small>
                      Provider: {acceptedRecord.emailProvider}
                      {acceptedRecord.emailMessageId ? ` • Message ID: ${acceptedRecord.emailMessageId}` : ''}
                    </small>
                  </div>
                )}
                {(emailError || acceptedRecord.emailLastError) && (
                  <div style={{ marginTop: '0.25rem', color: '#f0b267' }}>
                    <small>Error: {emailError || acceptedRecord.emailLastError}</small>
                  </div>
                )}
              </div>
            ) : (
              <small style={{ color: '#c8c0aa' }}>Signed copy can be sent after acceptance.</small>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <strong>Email status</strong>
              <small style={{ color: '#c8c0aa' }}>
                {acceptedRecord.emailLastStatus
                  ? `${formatEmailStatus(acceptedRecord.emailLastStatus)} ${acceptedRecord.emailIssuedAtISO ? `at ${acceptedRecord.emailIssuedAtISO}` : ''}`
                  : 'Not sent'}
              </small>
            </div>

            {!isHomeSecurity && agreementEmailPayload?.links && (
              <details style={{ color: '#c8c0aa' }}>
                <summary style={{ cursor: 'pointer', color: '#fff7e6' }}>Email payload links</summary>
                <ul className="list" style={{ marginTop: '0.5rem' }}>
                  <li>
                    <span />
                    <span className="break-all">Print: {agreementEmailPayload.links.printUrl}</span>
                  </li>
                  <li>
                    <span />
                    <span className="break-all">Verify: {agreementEmailPayload.links.verifyUrl}</span>
                  </li>
                  <li>
                    <span />
                    <span className="break-all">Resume: {agreementEmailPayload.links.resumeUrl}</span>
                  </li>
                  {agreementEmailPayload.links.reviewUrl && (
                    <li>
                      <span />
                      <span className="break-all">Review: {agreementEmailPayload.links.reviewUrl}</span>
                    </li>
                  )}
                </ul>
              </details>
            )}
          </div>
        ) : null}

        <small style={{ color: '#c8c0aa' }}>
          Payment unlocks after acceptance. Reach out anytime if you need help with the next step.
        </small>
      </div>

      {!isHomeSecurity && (
        <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
          <button type="button" className="accordion-toggle" onClick={() => toggleSection('agreement-details')}>
            <span>Agreement details & hashes</span>
            <span>{openSections['agreement-details'] ? '−' : '+'}</span>
          </button>
          <div className={`accordion-content ${openSections['agreement-details'] ? 'open' : ''}`} style={{ display: 'grid', gap: '0.75rem' }}>
            <div style={{ display: 'grid', gap: '0.35rem' }}>
              <strong>Reference</strong>
              <ul className="list" style={{ marginTop: 0 }}>
                <li>
                  <span />
                  <span>Date: {agreementDate}</span>
                </li>
                <li>
                  <span />
                  <span>Agreement Version: {agreementVersion}</span>
                </li>
                <li>
                  <span />
                  <span>Agreement Ref: {agreementReference}</span>
                </li>
                <li>
                  <span />
                  <span>
                    Agreement Hash: <span className="mono-text">{displayedAgreementHash}</span>{' '}
                    {agreementHash && (
                      <button type="button" className="btn btn-secondary" onClick={handleCopyAgreementHash}>
                        {hashCopied ? 'Copied full hash' : 'Copy full hash'}
                      </button>
                    )}
                  </span>
                </li>
                <li>
                  <span />
                  <span>
                    Supersedes prior agreement hash: <span className="mono-text">{supersedesAgreement}</span>{' '}
                    {supersedesAgreement !== 'None' && (
                      <button type="button" className="btn btn-secondary" onClick={handleCopyPriorAgreementHash}>
                        {priorHashCopied ? 'Copied prior hash' : 'Copy prior hash'}
                      </button>
                    )}
                  </span>
                </li>
                <li>
                  <span />
                  <span>
                    Linked quote reference: {agreement.quoteBinding.reference} (hash {quoteHashDisplay}){' '}
                    {quote.quoteHash && (
                      <button type="button" className="btn btn-secondary" onClick={handleCopyQuoteHash}>
                        {quoteHashCopied ? 'Copied full hash' : 'Copy full hash'}
                      </button>
                    )}
                  </span>
                </li>
                <li>
                  <span />
                  <span>Supersedes prior quote hash: <span className="mono-text">{supersedesQuote}</span></span>
                </li>
              </ul>
              <small style={{ color: '#c8c0aa' }}>
                This agreement supersedes prior agreements for the same customer/property context.
              </small>
            </div>

            <AuthorityBlock meta={authorityMeta} />
          </div>
        </div>
      )}

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <button type="button" className="accordion-toggle" onClick={() => toggleSection('scope')}>
          <span>Included services, hardware, and features</span>
          <span>{openSections.scope ? '−' : '+'}</span>
        </button>
        <div className={`accordion-content ${openSections.scope ? 'open' : ''}`} style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <div className="badge">Scope & Deliverables</div>
            <h2 style={{ margin: '0.25rem 0' }}>Included services</h2>
            <p style={{ margin: 0, color: '#c8c0aa' }}>
              Deterministic commitments based on your selected package and add-ons. No monthly subscriptions are required.
            </p>
          </div>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <div className="card" style={{ border: '1px solid rgba(245, 192, 66, 0.35)' }}>
              <strong>Scope & Deliverables</strong>
              <ul className="list" style={{ marginTop: '0.35rem' }}>
                {agreement.scope.map((item) => (
                  <li key={item}>
                    <span />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ border: '1px solid rgba(245, 192, 66, 0.35)' }}>
              <strong>Installation & validation</strong>
              <ul className="list" style={{ marginTop: '0.35rem' }}>
                {agreement.installationCommitments.map((item) => (
                  <li key={item}>
                    <span />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ border: '1px solid rgba(245, 192, 66, 0.35)' }}>
              <strong>Assumptions & exclusions</strong>
              <ul className="list" style={{ marginTop: '0.35rem' }}>
                {[...agreement.assumptions, ...agreement.exclusions].map((item) => (
                  <li key={item}>
                    <span />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {vertical !== 'home-security' && (
            <>
              <div className="card" style={{ border: '1px solid rgba(245, 192, 66, 0.35)' }}>
                <strong>Hardware included</strong>
                <div style={{ display: 'grid', gap: '0.75rem', marginTop: '0.35rem' }}>
                  {hardwareGroups.map((group) => (
                    <div key={group.heading} style={{ display: 'grid', gap: '0.5rem' }}>
                      <small style={{ color: '#c8c0aa' }}>{group.heading}</small>
                      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                        {group.categories.map((category) => (
                          <div key={category.title} className="card" style={{ border: '1px solid rgba(245, 192, 66, 0.35)' }}>
                            <strong>{category.title}</strong>
                            <ul className="list" style={{ marginTop: '0.35rem' }}>
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <span />
                                  <span>
                                    {item.name}: x{item.quantity}
                                    {item.note ? ` (${item.note})` : ''}
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
              </div>
              <div className="card" style={{ border: '1px solid rgba(245, 192, 66, 0.35)' }}>
                <strong>Feature summary</strong>
                <div style={{ display: 'grid', gap: '0.5rem', marginTop: '0.35rem' }}>
                  {featureGroups.map((group) => (
                    <div key={group.heading} style={{ display: 'grid', gap: '0.25rem' }}>
                      <small style={{ color: '#c8c0aa' }}>{group.heading}</small>
                      <ul className="list" style={{ marginTop: 0 }}>
                        {group.categories.map((category) => (
                          <li key={category.title}>
                            <span />
                            <span>
                              {category.title}: {category.items.join(', ')}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {guidedMode && (
        <FlowGuidePanel
          currentStep="agreement"
          nextDescription="Accept the agreement to unlock deposit/payment, then we schedule installation."
          ctaLabel={storedAcceptance?.accepted ? 'Continue to Deposit' : 'Approve Agreement & Pay Deposit'}
          onCta={storedAcceptance?.accepted ? handleProceedToPayment : () => handleScrollToSection(acceptanceSectionRef)}
        />
      )}
      </>
    ) : (
      <div className="hero-card" style={{ display: 'grid', gap: '0.9rem' }}>
        <div className="badge">Agreement review</div>
        <h1 style={{ margin: 0, color: '#fff7e6' }}>We need a quote to build your agreement</h1>
        <p style={{ margin: 0, color: '#c8c0aa' }}>
          The agreement view never stays blank. If you already built a quote, rebuild it below. Otherwise, start a fresh quote so we
          can generate the agreement and proceed to acceptance.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/quote')}>
            Back to quote builder
          </button>
          {canRebuildFromQuote && (
            <button type="button" className="btn btn-secondary" onClick={handleRebuildFromQuote}>
              Rebuild agreement from last quote
            </button>
          )}
        </div>
      </div>
    )}
    </div>
  );
};

export default AgreementReview;
