import { useEffect, useMemo, useState } from 'react';
import { FLOW_STORAGE_KEY, loadRetailFlow, RetailFlowState } from '../lib/retailFlow';
import { loadCertificate } from '../lib/sicar';

const PUNCH_LIST_KEY = 'launchUatPunchList';
const GO_NO_GO_KEY = 'launchUatGoNoGo';

type GoDecision = {
  decision: 'go' | 'no-go' | '';
  timestamp?: string;
  initials?: string;
};

const LaunchUAT = () => {
  const [flow, setFlow] = useState<RetailFlowState>({});
  const [punchList, setPunchList] = useState('');
  const [goState, setGoState] = useState<GoDecision>({ decision: '' });
  const [initials, setInitials] = useState('');
  const [certificateAvailable, setCertificateAvailable] = useState(false);

  useEffect(() => {
    setFlow(loadRetailFlow());
    const storedPunch = localStorage.getItem(PUNCH_LIST_KEY) ?? '';
    setPunchList(storedPunch);
    const storedGo = localStorage.getItem(GO_NO_GO_KEY);
    if (storedGo) {
      try {
        const parsed = JSON.parse(storedGo) as GoDecision;
        setGoState(parsed);
        setInitials(parsed.initials ?? '');
      } catch (error) {
        console.error('Unable to parse go/no-go', error);
      }
    }
    const certificate = loadCertificate();
    setCertificateAvailable(Boolean(certificate.quoteId || certificate.agreementId || certificate.devices.length));
  }, []);

  useEffect(() => {
    localStorage.setItem(PUNCH_LIST_KEY, punchList);
  }, [punchList]);

  const quoteTokenAvailable = Boolean(flow.quote?.quoteHash || flow.quote?.priorQuoteHash);
  const agreementTokenAvailable = Boolean(flow.agreementAcceptance?.agreementHash || flow.agreementAcceptance?.accepted);
  const scheduleStatus = flow.scheduleRequest?.scheduleStatus === 'requested' ? 'submitted' : 'not started';
  const depositStatus = flow.payment?.depositStatus ?? 'pending';

  const goRequirements = useMemo(
    () => ({
      quotePrint: Boolean(flow.quote),
      quoteVerify: quoteTokenAvailable,
      quoteEmail: Boolean(flow.quote?.emailIssuedAt),
      agreementPrint: Boolean(flow.agreementAcceptance),
      agreementVerify: agreementTokenAvailable,
      agreementEmail: Boolean(flow.agreementAcceptance?.emailIssuedAt),
      paymentDeterministic: Boolean(flow.quote?.pricing?.total),
      scheduleConfirmed: scheduleStatus === 'submitted',
    }),
    [agreementTokenAvailable, flow.agreementAcceptance, flow.quote, quoteTokenAvailable, scheduleStatus],
  );

  const requiredComplete =
    goRequirements.quotePrint &&
    goRequirements.quoteVerify &&
    goRequirements.quoteEmail &&
    goRequirements.agreementPrint &&
    goRequirements.agreementVerify &&
    goRequirements.agreementEmail &&
    goRequirements.paymentDeterministic &&
    goRequirements.scheduleConfirmed;

  const resetFlow = () => {
    localStorage.removeItem(FLOW_STORAGE_KEY);
    localStorage.removeItem(PUNCH_LIST_KEY);
    localStorage.removeItem(GO_NO_GO_KEY);
    window.location.reload();
  };

  const openPath = (path: string) => {
    window.open(path, '_blank', 'noopener');
  };

  const copyPunchList = async () => {
    await navigator.clipboard.writeText(punchList);
  };

  const markDecision = (decision: 'go' | 'no-go') => {
    const timestamp = new Date().toISOString();
    const next: GoDecision = { decision, timestamp, initials: initials.trim() };
    setGoState(next);
    localStorage.setItem(GO_NO_GO_KEY, JSON.stringify(next));
  };

  const renderAvailability = () => (
    <div className="card" style={{ background: '#0f172a', color: '#fff', padding: '1rem', borderRadius: '8px' }}>
      <h3 style={{ marginTop: 0 }}>Availability</h3>
      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.35rem' }}>
        <li>
          <strong>Quote token:</strong> {quoteTokenAvailable ? 'Ready' : 'Complete prior step to enable.'}
        </li>
        <li>
          <strong>Agreement token:</strong> {agreementTokenAvailable ? 'Ready' : 'Complete prior step to enable.'}
        </li>
        <li>
          <strong>Deposit status:</strong> {depositStatus}
        </li>
        <li>
          <strong>Schedule:</strong> {scheduleStatus === 'submitted' ? 'Submitted' : 'Complete prior step to enable.'}
        </li>
        <li>
          <strong>SICAR:</strong> {certificateAvailable ? 'Locked' : 'Not available yet'}
        </li>
      </ul>
    </div>
  );

  const renderChecklistItem = (label: string) => <li style={{ marginBottom: '0.25rem' }}>□ {label}</li>;

  return (
    <div className="container" style={{ padding: '2rem 1rem', display: 'grid', gap: '1.5rem' }}>
      <header style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h1 style={{ margin: 0 }}>Launch Readiness UAT</h1>
        <p style={{ margin: 0 }}>Internal-only harness for Gold Standard readiness checks.</p>
      </header>

      <section className="card" style={{ padding: '1rem', borderRadius: '8px', display: 'grid', gap: '0.5rem' }}>
        <h2 style={{ margin: 0 }}>UAT-0: Reset</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          <button className="btn" onClick={resetFlow}>
            Reset retail flow
          </button>
          <button className="btn" onClick={() => openPath('/')}>Open Home in new tab</button>
        </div>
      </section>

      <section className="card" style={{ padding: '1rem', borderRadius: '8px', display: 'grid', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <h2 style={{ margin: 0 }}>Gold Standard Script</h2>
          {renderAvailability()}
        </div>

        <div className="card" style={{ padding: '1rem', borderRadius: '8px', background: '#0b1224', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <h3 style={{ margin: 0 }}>UAT-1: Start Guided Setup</h3>
            <button className="btn" onClick={() => openPath('/')}>Open / and click Start Guided Setup</button>
          </div>
          <small>Badge: note pass/fail during run.</small>
        </div>

        <div className="card" style={{ padding: '1rem', borderRadius: '8px', background: '#0b1224', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <h3 style={{ margin: 0 }}>UAT-2: Recommendation</h3>
            <button className="btn" onClick={() => openPath('/recommendation')}>Open /recommendation</button>
          </div>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1rem' }}>
            {renderChecklistItem('Recommendation renders')}
            {renderChecklistItem('Comparison ladder renders after results')}
            {renderChecklistItem('Primary CTA routes to /quote with tier preselect')}
          </ul>
        </div>

        <div className="card" style={{ padding: '1rem', borderRadius: '8px', background: '#0b1224', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <h3 style={{ margin: 0 }}>UAT-3: Quote</h3>
            <button className="btn" onClick={() => openPath('/quote')}>Open /quote</button>
          </div>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1rem' }}>
            {renderChecklistItem('Preselected tier is correct (if applicable)')}
            {renderChecklistItem('Generate Quote routes to QuoteReview at top of page (no scroll confusion)')}
            {renderChecklistItem('QuoteReview shows Authority block')}
            {renderChecklistItem('Print works (QuotePrint)')}
            {renderChecklistItem('Verify works (/verify?doc=quote&t=...)')}
            {renderChecklistItem('Save Progress email works (send test)')}
          </ul>
        </div>

        <div className="card" style={{ padding: '1rem', borderRadius: '8px', background: '#0b1224', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <h3 style={{ margin: 0 }}>UAT-4: Agreement</h3>
            <button className="btn" onClick={() => openPath('/agreementReview')}>Open AgreementReview</button>
          </div>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1rem' }}>
            {renderChecklistItem('Friendly Agreement Overview present')}
            {renderChecklistItem('Acceptance gate works')}
            {renderChecklistItem('Print works (AgreementPrint)')}
            {renderChecklistItem('Verify works (/verify?doc=agreement&t=...)')}
            {renderChecklistItem('Save Progress email works (send test)')}
          </ul>
        </div>

        <div className="card" style={{ padding: '1rem', borderRadius: '8px', background: '#0b1224', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <h3 style={{ margin: 0 }}>UAT-5: Payment</h3>
            <button className="btn" onClick={() => openPath('/payment')}>Open /payment</button>
          </div>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1rem' }}>
            {renderChecklistItem('Deposit/balance display correct deterministically')}
            {renderChecklistItem('Proceed messaging is calm and clear')}
            {renderChecklistItem('Save Progress email works')}
          </ul>
        </div>

        <div className="card" style={{ padding: '1rem', borderRadius: '8px', background: '#0b1224', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <h3 style={{ margin: 0 }}>UAT-6: Scheduling</h3>
            <button className="btn" onClick={() => openPath('/schedule')}>Open /schedule</button>
          </div>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1rem' }}>
            {renderChecklistItem('Gating respects prior steps')}
            {renderChecklistItem('Submission confirmation messaging present')}
            {renderChecklistItem('Resume/verify links present')}
          </ul>
        </div>

        <div className="card" style={{ padding: '1rem', borderRadius: '8px', background: '#0b1224', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <h3 style={{ margin: 0 }}>UAT-7: SICAR / Certificate (Internal)</h3>
            <button className="btn" onClick={() => openPath('/certificate')}>Open /certificate</button>
          </div>
          <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1rem' }}>
            {renderChecklistItem('Certificate renders')}
            {renderChecklistItem('Authority block present')}
            {renderChecklistItem('Verify works (/verify?doc=sicar&t=...) if token exists (otherwise show "not available yet" cleanly)')}
          </ul>
        </div>
      </section>

      <section className="card" style={{ padding: '1rem', borderRadius: '8px', display: 'grid', gap: '0.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <h2 style={{ margin: 0 }}>Punch List</h2>
          <button className="btn" onClick={copyPunchList} disabled={!punchList}>
            Copy to clipboard
          </button>
        </div>
        <textarea
          value={punchList}
          onChange={(event) => setPunchList(event.target.value)}
          rows={6}
          style={{ width: '100%', padding: '0.75rem' }}
          placeholder="Capture internal notes and punch items here"
        />
      </section>

      <section className="card" style={{ padding: '1rem', borderRadius: '8px', display: 'grid', gap: '0.75rem' }}>
        <h2 style={{ margin: 0 }}>Go / No-Go Checklist</h2>
        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <label>Quote: print + verify + email send — {goRequirements.quotePrint && goRequirements.quoteVerify && goRequirements.quoteEmail ? 'Ready' : 'Pending'}</label>
          <label>Agreement: print + verify + email send — {goRequirements.agreementPrint && goRequirements.agreementVerify && goRequirements.agreementEmail ? 'Ready' : 'Pending'}</label>
          <label>Payment: viewable + deterministic totals — {goRequirements.paymentDeterministic ? 'Ready' : 'Pending'}</label>
          <label>Schedule: submission confirmation visible — {goRequirements.scheduleConfirmed ? 'Ready' : 'Pending'}</label>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Initials"
            value={initials}
            onChange={(event) => setInitials(event.target.value)}
            style={{ padding: '0.5rem' }}
          />
          <button className="btn btn-primary" disabled={!requiredComplete} onClick={() => markDecision('go')}>
            Mark Go
          </button>
          <button className="btn" onClick={() => markDecision('no-go')}>
            Mark No-Go
          </button>
          {goState.decision && (
            <small>
              {goState.decision === 'go' ? 'GO' : 'NO-GO'} set {goState.timestamp ? `at ${goState.timestamp}` : ''}{' '}
              {goState.initials ? `by ${goState.initials}` : ''}
            </small>
          )}
        </div>
      </section>
    </div>
  );
};

export default LaunchUAT;
