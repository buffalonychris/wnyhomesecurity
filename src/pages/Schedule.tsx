import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAddOns, getPackagePricing } from '../data/pricing';
import { loadRetailFlow, markFlowStep, ScheduleRequest, updateRetailFlow } from '../lib/retailFlow';
import FlowGuidePanel from '../components/FlowGuidePanel';
import PaymentInstallDayAccordion from '../components/PaymentInstallDayAccordion';
import TierBadge from '../components/TierBadge';
import HomeSecurityFunnelSteps from '../components/HomeSecurityFunnelSteps';
import { useLayoutConfig } from '../components/LayoutConfig';
import SelfMonitoringDisclosure from '../components/disclosures/SelfMonitoringDisclosure';

const formatCurrency = (amount: number) => `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

const Schedule = () => {
  const navigate = useNavigate();
  const [flowState, setFlowState] = useState(loadRetailFlow());
  const existingRequest = flowState.scheduleRequest;
  const [submitted, setSubmitted] = useState(Boolean(existingRequest));
  const [customerName, setCustomerName] = useState(existingRequest?.customerName ?? '');
  const [customerPhone, setCustomerPhone] = useState(existingRequest?.customerPhone ?? '');
  const [customerEmail, setCustomerEmail] = useState(existingRequest?.customerEmail ?? '');
  const [installStreet1, setInstallStreet1] = useState(existingRequest?.installStreet1 ?? '');
  const [installStreet2, setInstallStreet2] = useState(existingRequest?.installStreet2 ?? '');
  const [installCity, setInstallCity] = useState(existingRequest?.installCity ?? '');
  const [installState, setInstallState] = useState(existingRequest?.installState ?? 'NY');
  const [installZip, setInstallZip] = useState(existingRequest?.installZip ?? '');
  const [preferredDate1, setPreferredDate1] = useState(existingRequest?.preferredDate1 ?? '');
  const [preferredTimeWindow1, setPreferredTimeWindow1] = useState(existingRequest?.preferredTimeWindow1 ?? '');
  const [preferredDate2, setPreferredDate2] = useState(existingRequest?.preferredDate2 ?? '');
  const [preferredTimeWindow2, setPreferredTimeWindow2] = useState(existingRequest?.preferredTimeWindow2 ?? '');
  const [accessNotes, setAccessNotes] = useState(existingRequest?.accessNotes ?? '');
  const [error, setError] = useState('');

  useEffect(() => {
    const stored = loadRetailFlow();
    setFlowState(stored);
    markFlowStep('schedule');
  }, []);

  const quoteContext = flowState.quote;
  const acceptance = flowState.agreementAcceptance;
  const depositStatus = flowState.payment?.depositStatus ?? 'pending';

  const vertical = quoteContext?.vertical ?? 'elder-tech';
  const isHomeSecurity = vertical === 'home-security';

  useLayoutConfig({
    layoutVariant: isHomeSecurity ? 'funnel' : 'sitewide',
    showBreadcrumbs: isHomeSecurity,
    breadcrumb: isHomeSecurity
      ? [
          { label: 'Home Security', href: '/home-security' },
          { label: 'Schedule' },
        ]
      : [],
  });
  const selectedPackage = useMemo(
    () => getPackagePricing(vertical).find((pkg) => pkg.id === quoteContext?.packageId) ?? getPackagePricing(vertical)[0],
    [quoteContext?.packageId, vertical]
  );

  const selectedAddOns = useMemo(() => {
    if (!quoteContext) return [] as string[];
    return quoteContext.selectedAddOns;
  }, [quoteContext]);

  const addOnLabels = useMemo(
    () => getAddOns(vertical).filter((addOn) => selectedAddOns.includes(addOn.id)).map((addOn) => addOn.label),
    [selectedAddOns, vertical]
  );

  const schedulingAllowed = Boolean(quoteContext && acceptance?.accepted && depositStatus === 'completed');

  const requiredMissing = () => {
    return (
      !customerName.trim() ||
      !customerPhone.trim() ||
      !installStreet1.trim() ||
      !installCity.trim() ||
      !installState.trim() ||
      !installZip.trim() ||
      !preferredDate1.trim() ||
      !preferredTimeWindow1.trim()
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!quoteContext) {
      setError('Quote context missing. Please start from the quote page.');
      return;
    }

    if (!acceptance?.accepted) {
      setError('Agreement acceptance is required before scheduling.');
      return;
    }

    if (depositStatus !== 'completed') {
      setError('Scheduling opens once your deposit is confirmed.');
      return;
    }

    if (requiredMissing()) {
      setError('Please complete all required fields before submitting.');
      return;
    }

    const scheduleRequest: ScheduleRequest = {
      customerName,
      customerPhone,
      customerEmail: customerEmail || undefined,
      installStreet1,
      installStreet2: installStreet2 || undefined,
      installCity,
      installState,
      installZip,
      preferredDate1,
      preferredTimeWindow1,
      preferredDate2: preferredDate2 || undefined,
      preferredTimeWindow2: preferredTimeWindow2 || undefined,
      accessNotes: accessNotes || undefined,
      requestedAt: new Date().toISOString(),
      scheduleStatus: 'requested',
      scheduleSource: 'retail',
    };

    const updated = updateRetailFlow({ scheduleRequest });
    setFlowState(updated);
    setSubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!quoteContext) {
    return (
      <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '1.5rem' }}>
        <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="badge">Scheduling requires a quote</div>
          <h1 style={{ margin: 0, color: '#fff7e6' }}>Start with a deterministic quote</h1>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            We could not find your quote context. Build a quote first so we can attach your installation request.
          </p>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/quote')}>
            Go to Quote
          </button>
        </div>
      </div>
    );
  }

  const timeWindowOptions = ['Morning', 'Afternoon', 'Evening'];

  const gateCards: { condition: boolean; message: string; action?: () => void; actionLabel?: string }[] = [
    {
      condition: !acceptance?.accepted,
      message: 'Acceptance required: Please review and accept the combined agreement before scheduling.',
      action: () => navigate('/agreementReview'),
      actionLabel: 'Review Agreement',
    },
    {
      condition: depositStatus !== 'completed',
      message: 'Scheduling opens once your deposit is confirmed.',
      action: () => navigate('/payment'),
      actionLabel: 'Return to Payment',
    },
  ];

  return (
    <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '2rem' }}>
      {isHomeSecurity && <HomeSecurityFunnelSteps currentStep="schedule" />}
      {isHomeSecurity && (
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link className="btn btn-secondary" to="/payment">
            Change Payment Method
          </Link>
        </div>
      )}
      <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <div className="badge">Installation scheduling</div>
            <h1 style={{ margin: 0, color: '#fff7e6' }}>Request your installation window</h1>
            <p style={{ margin: 0, color: '#c8c0aa' }}>
              Scheduling opens after agreement acceptance and deposit confirmation.
            </p>
          </div>
          {!isHomeSecurity && (
            <button type="button" className="btn btn-primary" onClick={handlePrint}>
              Print / Save PDF
            </button>
          )}
        </div>
        <div style={{ display: 'grid', gap: '0.35rem', color: '#c8c0aa' }}>
          <strong>Quote reference</strong>
          <small>
            Package {quoteContext.packageId} — One-time total {formatCurrency(quoteContext.pricing.total)} (add-ons: {
              addOnLabels.length ? addOnLabels.join(', ') : 'none'
            })
          </small>
          {acceptance?.fullName && (
            <small>
              Agreement accepted by {acceptance.fullName} on {acceptance.acceptanceDate ?? 'date not provided'}
            </small>
          )}
          <small>Deposit status: {depositStatus}</small>
        </div>
      </div>

      <FlowGuidePanel
        currentStep="schedule"
        nextDescription="Our team will confirm the appointment. Keep your resume/verify links handy to re-open details."
        ctaLabel="Resume / Verify"
        onCta={() => navigate('/resume-verify')}
      />

      {isHomeSecurity && <PaymentInstallDayAccordion />}

      {gateCards
        .filter((gate) => gate.condition)
        .map((gate) => (
          <div
            key={gate.message}
            className="card"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', border: '1px solid rgba(245, 192, 66, 0.35)' }}
          >
            <span style={{ color: '#c8c0aa' }}>{gate.message}</span>
            {gate.action && gate.actionLabel && (
              <button type="button" className="btn btn-secondary" onClick={gate.action}>
                {gate.actionLabel}
              </button>
            )}
          </div>
        ))}

      <div className="card" style={{ display: 'grid', gap: '1.25rem' }}>
        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <div className="badge">Installation details</div>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            Provide your preferred windows and access notes. This captures a structured request for the KAEC installer workflow.
          </p>
        </div>

        {error && (
          <div className="card" style={{ border: '1px solid rgba(255, 99, 99, 0.4)', color: '#ffd7d7', background: 'rgba(255, 99, 99, 0.1)' }}>
            {error}
          </div>
        )}

        {submitted && flowState.scheduleRequest ? (
          <div className="card" style={{ display: 'grid', gap: '0.5rem', border: '1px solid rgba(245, 192, 66, 0.35)' }}>
            <div className="badge">Request submitted</div>
            <h3 style={{ margin: 0, color: '#fff7e6' }}>We received your scheduling request</h3>
            <p style={{ margin: 0, color: '#c8c0aa' }}>
              Thanks for submitting. A coordinator will review your windows and reach out to confirm. Reference timestamp:{' '}
              {flowState.scheduleRequest.requestedAt}.
            </p>
            {isHomeSecurity && <SelfMonitoringDisclosure variant="full" className="ka-disclosure--spaced" />}
            <ul className="list" style={{ marginTop: 0 }}>
              <li>
                <span />
                <span>Keep your phone nearby for a confirmation call or email.</span>
              </li>
              <li>
                <span />
                <span>Bring your resume/verify links to reopen quote, agreement, or deposit details.</span>
              </li>
              <li>
                <span />
                <span>No additional payment is collected on this page.</span>
              </li>
            </ul>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link className="btn btn-secondary" to="/resume-verify">
                Resume / Verify
              </Link>
              <Link className="btn btn-secondary" to="/verify">
                Verify documents
              </Link>
            </div>
            <small style={{ color: '#c8c0aa' }}>
              Status: {flowState.scheduleRequest.scheduleStatus} • Source: {flowState.scheduleRequest.scheduleSource}
            </small>
          </div>
        ) : null}

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
          <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            <label style={{ display: 'grid', gap: '0.35rem' }}>
              <span>Customer name *</span>
              <input
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Jane Caregiver"
                required
                style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
              />
            </label>
            <label style={{ display: 'grid', gap: '0.35rem' }}>
              <span>Phone *</span>
              <input
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="(555) 555-1212"
                required
                style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
              />
            </label>
            <label style={{ display: 'grid', gap: '0.35rem' }}>
              <span>Email (optional)</span>
              <input
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="care@kickassfamily.com"
                style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
              />
            </label>
          </div>

          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <div className="badge">Installation address</div>
            <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              <label style={{ display: 'grid', gap: '0.35rem' }}>
                <span>Street address *</span>
                <input
                  value={installStreet1}
                  onChange={(e) => setInstallStreet1(e.target.value)}
                  placeholder="123 Care Street"
                  required
                  style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
                />
              </label>
              <label style={{ display: 'grid', gap: '0.35rem' }}>
                <span>Street 2 (optional)</span>
                <input
                  value={installStreet2}
                  onChange={(e) => setInstallStreet2(e.target.value)}
                  placeholder="Unit / Apt"
                  style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
                />
              </label>
              <label style={{ display: 'grid', gap: '0.35rem' }}>
                <span>City *</span>
                <input
                  value={installCity}
                  onChange={(e) => setInstallCity(e.target.value)}
                  placeholder="Brooklyn"
                  required
                  style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
                />
              </label>
              <label style={{ display: 'grid', gap: '0.35rem' }}>
                <span>State *</span>
                <input
                  value={installState}
                  onChange={(e) => setInstallState(e.target.value)}
                  placeholder="NY"
                  required
                  style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
                />
              </label>
              <label style={{ display: 'grid', gap: '0.35rem' }}>
                <span>ZIP *</span>
                <input
                  value={installZip}
                  onChange={(e) => setInstallZip(e.target.value)}
                  placeholder="10001"
                  required
                  style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
                />
              </label>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <div className="badge">Preferred windows</div>
            <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              <label style={{ display: 'grid', gap: '0.35rem' }}>
                <span>Preferred date 1 *</span>
                <input
                  type="date"
                  value={preferredDate1}
                  onChange={(e) => setPreferredDate1(e.target.value)}
                  required
                  style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
                />
              </label>
              <label style={{ display: 'grid', gap: '0.35rem' }}>
                <span>Preferred time window *</span>
                <select
                  value={preferredTimeWindow1}
                  onChange={(e) => setPreferredTimeWindow1(e.target.value)}
                  required
                  style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
                >
                  <option value="" disabled>
                    Select a window
                  </option>
                  {timeWindowOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label style={{ display: 'grid', gap: '0.35rem' }}>
                <span>Preferred date 2 (optional)</span>
                <input
                  type="date"
                  value={preferredDate2}
                  onChange={(e) => setPreferredDate2(e.target.value)}
                  style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
                />
              </label>
              <label style={{ display: 'grid', gap: '0.35rem' }}>
                <span>Preferred time window 2 (optional)</span>
                <select
                  value={preferredTimeWindow2}
                  onChange={(e) => setPreferredTimeWindow2(e.target.value)}
                  style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
                >
                  <option value="">None</option>
                  {timeWindowOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <div className="badge">Access notes (optional)</div>
            <textarea
              value={accessNotes}
              onChange={(e) => setAccessNotes(e.target.value)}
              placeholder="Parking, entry instructions, stairs, pets, gate codes, caregiver availability"
              rows={4}
              style={{ padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(245,192,66,0.35)', background: '#0f0e0d', color: '#fff7e6' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button type="submit" className="btn btn-primary" disabled={!schedulingAllowed}>
              {isHomeSecurity ? 'Confirm Installation' : 'Schedule Installation'}
            </button>
            {!schedulingAllowed && (
              <small style={{ color: '#c8c0aa' }}>
                Scheduling opens after agreement acceptance and a confirmed deposit.
              </small>
            )}
          </div>
        </form>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">What happens next</div>
        <ul className="list" style={{ marginTop: 0 }}>
          <li>
            <span />
            <span>We will review your preferred windows and confirm by phone or email.</span>
          </li>
          <li>
            <span />
            <span>Installer coordination happens in the KAEC backend—no double booking here.</span>
          </li>
          <li>
            <span />
            <span>No additional payment is collected on this page.</span>
          </li>
        </ul>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem', border: '1px solid rgba(245, 192, 66, 0.35)' }}>
        <div className="badge">Quote, agreement, deposit</div>
        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <strong>Package</strong>
          <small style={{ color: '#c8c0aa' }}>
            <TierBadge tierId={selectedPackage.id} vertical={vertical} /> {selectedPackage.name} — {formatCurrency(selectedPackage.basePrice)}
          </small>
          <small style={{ color: '#c8c0aa' }}>
            Add-ons: {addOnLabels.length ? addOnLabels.join(', ') : 'None selected'}
          </small>
          <small style={{ color: '#c8c0aa' }}>One-time total: {formatCurrency(quoteContext.pricing.total)}</small>
        </div>
        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <strong>Agreement acceptance</strong>
          {acceptance?.accepted ? (
            <small style={{ color: '#c8c0aa' }}>
              Accepted by {acceptance.fullName ?? 'Customer'} on {acceptance.acceptanceDate ?? 'date not provided'}
            </small>
          ) : (
            <small style={{ color: '#c8c0aa' }}>Not yet accepted</small>
          )}
        </div>
        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <strong>Deposit status</strong>
          <small style={{ color: '#c8c0aa' }}>{depositStatus}</small>
        </div>
        {flowState.scheduleRequest && (
          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <strong>Last submitted scheduling request</strong>
            <small style={{ color: '#c8c0aa' }}>
              Requested at {flowState.scheduleRequest.requestedAt} • Status: {flowState.scheduleRequest.scheduleStatus}
            </small>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
