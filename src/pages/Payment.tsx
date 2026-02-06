import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { QuoteContext } from '../lib/agreement';
import { loadRetailFlow, PaymentStatus, updateRetailFlow, AcceptanceRecord, markFlowStep } from '../lib/retailFlow';
import FlowGuidePanel from '../components/FlowGuidePanel';
import SaveProgressCard from '../components/SaveProgressCard';
import { buildAgreementEmailPayload, isValidEmail } from '../lib/emailPayload';
import { sendAgreementEmail } from '../lib/emailSend';
import { buildResumeUrl } from '../lib/resumeToken';
import { buildQuoteReference } from '../lib/quoteUtils';
import { brandShort } from '../lib/brand';
import { calculateDepositDue } from '../lib/paymentTerms';
import HomeSecurityFunnelSteps from '../components/HomeSecurityFunnelSteps';
import { useLayoutConfig } from '../components/LayoutConfig';
import { getPackagePricing } from '../data/pricing';
import { getHomeSecurityPackageSpec } from '../content/homeSecurityPackageData';
import SelfMonitoringDisclosure from '../components/disclosures/SelfMonitoringDisclosure';

const formatCurrency = (amount: number) => `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [quoteContext, setQuoteContext] = useState<QuoteContext | null>(null);
  const [depositStatus, setDepositStatus] = useState<PaymentStatus>('pending');
  const [acceptanceRecord, setAcceptanceRecord] = useState<AcceptanceRecord | null>(null);
  const [accessGranted, setAccessGranted] = useState(false);
  const [saveEmail, setSaveEmail] = useState('');
  const [savePayload, setSavePayload] =
    useState<Awaited<ReturnType<typeof buildAgreementEmailPayload>> | null>(null);
  const [saveSending, setSaveSending] = useState(false);
  const [leadRequestStatus, setLeadRequestStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [stripeMessage, setStripeMessage] = useState('');
  const [stripeLoading, setStripeLoading] = useState(false);

  useEffect(() => {
    markFlowStep('payment');
  }, []);

  useEffect(() => {
    try {
      const flow = loadRetailFlow();
      const parsed = flow.agreementAcceptance;
      if (!parsed?.accepted) {
        navigate('/agreementReview', {
          state: {
            message: 'Please accept the combined agreement before payment.',
            quoteContext: (location.state as { quoteContext?: QuoteContext } | undefined)?.quoteContext,
          },
        });
        return;
      }
      setAcceptanceRecord(parsed);
      setAccessGranted(true);
    } catch (error) {
      console.error('Error loading acceptance state', error);
      navigate('/agreementReview', { state: { message: 'Please accept the combined agreement before payment.' } });
    }
  }, [location.state, navigate]);

  useEffect(() => {
    if (!accessGranted) return;
    const flow = loadRetailFlow();
    if (flow.quote) {
      setQuoteContext(flow.quote);
    }

    if (flow.payment?.depositStatus) {
      setDepositStatus(flow.payment.depositStatus);
    }
  }, [accessGranted]);

  useEffect(() => {
    const nextEmail = acceptanceRecord?.emailTo ?? quoteContext?.contact ?? '';
    setSaveEmail(nextEmail);
  }, [acceptanceRecord?.emailTo, quoteContext?.contact]);

  useEffect(() => {
    let isMounted = true;
    const run = async () => {
      if (!quoteContext || !acceptanceRecord) {
        if (isMounted) setSavePayload(null);
        return;
      }
      const payload = await buildAgreementEmailPayload(
        { ...quoteContext, contact: saveEmail || quoteContext.contact },
        { ...acceptanceRecord, emailTo: saveEmail || acceptanceRecord.emailTo },
        { resumePath: 'payment' },
      );
      if (isMounted) setSavePayload(payload);
    };

    run();
    return () => {
      isMounted = false;
    };
  }, [acceptanceRecord, quoteContext, saveEmail]);

  const total = quoteContext?.pricing.total ?? 0;
  const depositDue = useMemo(() => calculateDepositDue(total, siteConfig.depositPolicy), [total]);
  const balanceDue = useMemo(() => Math.max(total - depositDue, 0), [depositDue, total]);
  const resumeUrl = useMemo(() => (quoteContext ? buildResumeUrl(quoteContext, 'payment') : ''), [quoteContext]);

  const handleSimulate = (status: PaymentStatus) => {
    setDepositStatus(status);
    updateRetailFlow({ payment: { depositStatus: status } });
  };

  const recordPaymentEmailResult = (
    recipient: string,
    result: Awaited<ReturnType<typeof sendAgreementEmail>>,
  ) => {
    if (!acceptanceRecord) return;
    const issuedAt = new Date().toISOString();
    const recipients = [recipient, ...(acceptanceRecord.emailRecipients ?? [])].filter(Boolean);
    const uniqueRecipients = Array.from(new Set(recipients)).slice(0, 3);
    const status = result.ok ? (result.provider === 'mock' ? 'mock' : 'sent') : 'failed';
    const updated: AcceptanceRecord = {
      ...acceptanceRecord,
      emailIssuedAt: acceptanceRecord.emailIssuedAt ?? issuedAt,
      emailIssuedAtISO: issuedAt,
      emailTo: recipient,
      emailProvider: result.provider,
      emailMessageId: result.id,
      emailLastStatus: status,
      emailLastError: result.ok ? undefined : result.error,
      emailRecipients: uniqueRecipients,
    };
    setAcceptanceRecord(updated);
    updateRetailFlow({ agreementAcceptance: updated });
  };

  const sendSaveProgressEmail = async (recipient: string) => {
    if (!savePayload || !isValidEmail(recipient) || !acceptanceRecord) return null;
    setSaveSending(true);
    const response = await sendAgreementEmail({ ...savePayload, to: recipient });
    recordPaymentEmailResult(recipient, response);
    setSaveSending(false);
    return response;
  };

  const handleRequestNextSteps = async () => {
    if (leadRequestStatus === 'sending') return;
    setLeadRequestStatus('sending');
    const customerEmail = saveEmail || acceptanceRecord?.emailTo || quoteContext?.contact;
    const referenceId = quoteContext ? buildQuoteReference(quoteContext) : acceptanceRecord?.agreementHash;
    const payload = {
      event: 'Lead Signal: Payment Next Steps Requested',
      customerEmail,
      referenceId,
      resumeUrl,
      verifyUrl: savePayload?.links.verifyUrl,
      route: 'payment/request-next-steps',
    };

    try {
      const response = await fetch('/api/lead-signal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await response.json().catch(() => null)) as { ok?: boolean } | null;
      if (response.ok && data?.ok) {
        setLeadRequestStatus('success');
      } else {
        setLeadRequestStatus('error');
      }
    } catch (error) {
      setLeadRequestStatus('error');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const printStyles = `
    @media print {
      :root { background: #fff !important; color: #000 !important; }
      body { background: #fff !important; color: #000 !important; }
      .card, .hero-card { background: #fff !important; color: #000 !important; border-color: #000 !important; box-shadow: none !important; }
      .badge { background: #fff !important; color: #000 !important; border: 1px solid #000 !important; }
      .btn { color: #000 !important; border: 1px solid #000 !important; background: #fff !important; box-shadow: none !important; }
    }
  `;

  const isHomeSecurity = quoteContext?.vertical === 'home-security';

  useLayoutConfig({
    layoutVariant: isHomeSecurity ? 'funnel' : 'sitewide',
    showBreadcrumbs: isHomeSecurity,
    breadcrumb: isHomeSecurity
      ? [
          { label: 'Home Security', href: '/home-security' },
          { label: 'Deposit' },
        ]
      : [],
  });

  if (!accessGranted) {
    return null;
  }

  const startStripeCheckout = async () => {
    if (stripeLoading) return;
    setStripeMessage('');

    if (!quoteContext) {
      setStripeMessage('Quote details are missing. Please return to the quote step to regenerate your totals.');
      return;
    }

    setStripeLoading(true);

    const quoteId = quoteContext.quoteHash ?? buildQuoteReference(quoteContext);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quoteId,
          vertical: 'home-security',
          packageId: quoteContext.packageId,
          selectedAddOns: quoteContext.selectedAddOns,
        }),
      });

      const data = (await response.json().catch(() => null)) as { url?: string; error?: string } | null;
      if (!response.ok || !data?.url) {
        throw new Error(data?.error || 'Unable to start checkout session.');
      }

      window.location.assign(data.url);
    } catch (error) {
      console.error('Stripe checkout failed', error);
      setStripeMessage('We could not start the secure checkout. Please try again or contact support.');
      setStripeLoading(false);
    }
  };

  if (isHomeSecurity) {
    const packagePricing = getPackagePricing('home-security');
    const selectedPackage =
      packagePricing.find((pkg) => pkg.id === quoteContext?.packageId) ?? packagePricing[0];
    const spec = getHomeSecurityPackageSpec(selectedPackage.id.toLowerCase() as 'a1' | 'a2' | 'a3');

    return (
      <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '1.5rem' }}>
        <HomeSecurityFunnelSteps currentStep="deposit" />
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link className="btn btn-link" to="/agreementReview">
            Back
          </Link>
        </div>

        <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="badge">Deposit</div>
          <h1 style={{ margin: 0, color: '#fff7e6' }}>Pay your deposit to reserve installation</h1>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            Deposit due today: 50% of the system cost. Remaining balance due on installation day.
          </p>
        </div>
        <SelfMonitoringDisclosure variant="full" className="ka-disclosure--spaced" />

        <div className="card" style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <div className="badge">Selected package</div>
              <h2 style={{ margin: '0.35rem 0' }}>{selectedPackage.name}</h2>
              <p style={{ margin: 0, color: '#c8c0aa' }}>{selectedPackage.summary}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#c8c0aa' }}>Base price</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--kaec-gold)' }}>
                {formatCurrency(selectedPackage.basePrice)}
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <div>
              <strong>Coverage range</strong>
              <p style={{ margin: '0.35rem 0', color: '#c8c0aa' }}>{spec.coverage}</p>
            </div>
            <div>
              <strong>Included hardware summary</strong>
              <ul className="list" style={{ marginTop: '0.35rem' }}>
                <li>
                  <span />
                  <span>Video doorbell: {spec.hardware.videoDoorbell}</span>
                </li>
                <li>
                  <span />
                  <span>Indoor cameras: {spec.hardware.indoorCameras}</span>
                </li>
                <li>
                  <span />
                  <span>Outdoor PoE cameras: {spec.hardware.outdoorPoECameras}</span>
                </li>
                <li>
                  <span />
                  <span>Door/window sensors: {spec.hardware.doorWindowSensors}</span>
                </li>
                <li>
                  <span />
                  <span>Motion sensors: {spec.hardware.motionSensors}</span>
                </li>
                <li>
                  <span />
                  <span>Leak/smoke sensors: {spec.hardware.leakSmokeSensors}</span>
                </li>
                <li>
                  <span />
                  <span>{spec.hardware.nvrIncluded ? 'NVR included' : 'No NVR included'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="badge">Deposit summary</div>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <strong>Deposit due today</strong>
              <strong style={{ color: 'var(--kaec-gold)' }}>{formatCurrency(depositDue)}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ color: '#c8c0aa' }}>Remaining balance on installation day</span>
              <span style={{ color: '#c8c0aa' }}>{formatCurrency(balanceDue)}</span>
            </div>
          </div>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <button type="button" className="btn btn-primary" onClick={startStripeCheckout} disabled={stripeLoading}>
              {stripeLoading ? 'Starting checkout…' : 'Pay Deposit (50%)'}
            </button>
            {stripeMessage && <small style={{ color: '#c8c0aa' }}>{stripeMessage}</small>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '2rem' }}>
      {isHomeSecurity && <HomeSecurityFunnelSteps currentStep="deposit" />}
      {isHomeSecurity && (
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link className="btn btn-secondary" to="/agreementReview">
            Review Agreement
          </Link>
        </div>
      )}
      <style>{printStyles}</style>
      <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <div className="badge">Retail payment gate</div>
            <h1 style={{ margin: 0, color: '#fff7e6' }}>Reserve with a deterministic deposit</h1>
            <p style={{ margin: 0, color: '#c8c0aa' }}>
              No monthly subscriptions required. This UI does not process payments; it shows how the deposit and balance would be captured after agreement.
            </p>
            <small style={{ color: '#c8c0aa' }}>
              Card data is never stored by {brandShort}; secure provider fields will be used once enabled.
            </small>
          </div>
          {!isHomeSecurity && (
            <button type="button" className="btn btn-primary" onClick={handlePrint}>
              Print / Save PDF
            </button>
          )}
        </div>
        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <strong>Quote reference</strong>
          {quoteContext ? (
            <p style={{ margin: 0, color: '#c8c0aa' }}>
              Package {quoteContext.packageId} — Total {formatCurrency(total)} (add-ons: {quoteContext.selectedAddOns.length || 'none'})
            </p>
          ) : (
            <p style={{ margin: 0, color: '#c8c0aa' }}>
              Quote context not found. Return to the quote or agreement review to regenerate.
            </p>
          )}
          {acceptanceRecord?.fullName && (
            <small style={{ color: '#c8c0aa' }}>
              Accepted by {acceptanceRecord.fullName} on {acceptanceRecord.acceptanceDate ?? 'date not provided'}
            </small>
          )}
        </div>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">Payment status</div>
        <p style={{ margin: 0, color: '#c8c0aa' }}>
          Payment is not enabled yet. You can still request next steps, and we will follow up by email.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <button type="button" className="btn btn-primary" onClick={handleRequestNextSteps} disabled={leadRequestStatus === 'sending'}>
            {leadRequestStatus === 'sending' ? 'Requesting…' : isHomeSecurity ? 'Submit Deposit' : 'Request next steps'}
          </button>
          {leadRequestStatus === 'success' && (
            <small style={{ color: '#c8c0aa' }}>Thanks. We received your request and will follow up by email.</small>
          )}
          {leadRequestStatus === 'error' && (
            <small style={{ color: '#c8c0aa' }}>
              We couldn&apos;t send that right now. Please email{' '}
              <a
                href="mailto:admin@reliableeldercare.com?subject=HALO%20Next%20Steps%20Request"
                style={{ color: '#f5c042' }}
              >
                admin@reliableeldercare.com
              </a>
              .
            </small>
          )}
        </div>
      </div>

      <SaveProgressCard
        defaultEmail={saveEmail}
        resumeUrl={resumeUrl}
        available={Boolean(savePayload)}
        sending={saveSending}
        onEmailChange={setSaveEmail}
        onSend={(recipient) => sendSaveProgressEmail(recipient)}
      />

      <FlowGuidePanel
        currentStep="payment"
        nextDescription="Scheduling is next. Once the deposit is recorded, move forward to propose installation windows."
        ctaLabel="Continue to Scheduling"
        onCta={() => navigate('/schedule')}
      />

      <div className="card" style={{ display: 'grid', gap: '1rem' }}>
        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <div className="badge">Payment breakdown</div>
          <h2 style={{ margin: '0.25rem 0' }}>Deposit and balance</h2>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            Deterministic calculation only—no live charging. Deposit policy: {siteConfig.depositPolicy.type === 'flat' ? `Flat ${formatCurrency(siteConfig.depositPolicy.value)}` : `${siteConfig.depositPolicy.value * 100}% of total`}.
          </p>
        </div>
        <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          <div className="card" style={{ border: '1px solid rgba(245,192,66,0.35)' }}>
            <strong>Total</strong>
            <p style={{ margin: '0.35rem 0', fontSize: '1.35rem' }}>{formatCurrency(total)}</p>
            <small style={{ color: '#c8c0aa' }}>One-time total based on deterministic quote.</small>
          </div>
          <div className="card" style={{ border: '1px solid rgba(245,192,66,0.35)' }}>
            <strong>Deposit due</strong>
            <p style={{ margin: '0.35rem 0', fontSize: '1.35rem' }}>{formatCurrency(depositDue)}</p>
            <small style={{ color: '#c8c0aa' }}>Status: {depositStatus}</small>
          </div>
          <div className="card" style={{ border: '1px solid rgba(245,192,66,0.35)' }}>
            <strong>Balance due</strong>
            <p style={{ margin: '0.35rem 0', fontSize: '1.35rem' }}>{formatCurrency(balanceDue)}</p>
            <small style={{ color: '#c8c0aa' }}>Status options: pending | completed | failed | refunded</small>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a className="btn btn-secondary" href="/payment-processing">
            Proceed to secure payment (placeholder)
          </a>
          {siteConfig.enableMockPayments && (
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <strong style={{ color: '#c8c0aa' }}>Simulate payment success/failure:</strong>
              <button type="button" className="btn btn-primary" onClick={() => handleSimulate('completed')}>
                Simulate success
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => handleSimulate('failed')}>
                Simulate failure
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => handleSimulate('refunded')}>
                Mark refunded
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => handleSimulate('pending')}>
                Reset to pending
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.5rem' }}>
        <div className="badge">Payment terms</div>
        <p style={{ margin: 0, color: '#c8c0aa' }}>
          Deposit reserves system pricing and equipment availability for 30 days. The remaining balance is due when we arrive, before installation begins.
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

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">Next steps</div>
        <p style={{ margin: 0, color: '#c8c0aa' }}>
          Deposit completion unlocks scheduling. No payment is collected in this mock flow, and no card details are handled here.
        </p>
        {depositStatus === 'completed' ? (
          <button type="button" className="btn btn-primary" onClick={() => navigate('/schedule')}>
            Proceed to Scheduling
          </button>
        ) : (
          <small style={{ color: '#c8c0aa' }}>
            Complete the deposit (simulated) to enable scheduling. Payment status is currently {depositStatus}.
          </small>
        )}
        <small style={{ color: '#c8c0aa' }}>
          We will show secure provider fields once the live processor is connected; this page keeps things retail-only and offline-friendly.
        </small>
      </div>
    </div>
  );
};

export default Payment;
