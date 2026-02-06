import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { buildQuoteFromResumePayload, parseResumeToken } from '../lib/resumeToken';
import { validateResumePayload } from '../lib/quoteHash';
import { saveRetailFlow } from '../lib/retailFlow';

type ResumeStatus = 'loading' | 'invalid' | 'missing' | 'restoring';

const stepToPath: Record<string, string> = {
  agreement: '/agreementReview',
  payment: '/payment',
  schedule: '/schedule',
};

const Resume = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState<ResumeStatus>('loading');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('t');
    const step = params.get('step') ?? 'agreement';

    if (!token) {
      setStatus('missing');
      return;
    }

    const payload = parseResumeToken(token);
    if (!payload) {
      setStatus('invalid');
      return;
    }

    const restore = async () => {
      setStatus('restoring');
      const valid = await validateResumePayload(payload);
      if (!valid) {
        setStatus('invalid');
        return;
      }

      const quote = buildQuoteFromResumePayload(payload);
      saveRetailFlow({ quote });
      const destination = stepToPath[step] ?? '/agreementReview';
      navigate(destination, { replace: true });
    };

    restore();
  }, [location.search, navigate]);

  if (status === 'loading' || status === 'restoring') {
    return (
      <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '1.5rem' }}>
        <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="badge">Resume</div>
          <h1 style={{ margin: 0, color: '#fff7e6' }}>Restoring your quote</h1>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            Loading your saved selection and preparing to continue where you left off.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '1.5rem' }}>
      <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">Resume</div>
        <h1 style={{ margin: 0, color: '#fff7e6' }}>
          {status === 'missing' ? 'Resume link missing' : 'Resume link invalid'}
        </h1>
        <p style={{ margin: 0, color: '#c8c0aa' }}>
          {status === 'missing'
            ? 'A resume token is required to restore your quote. Start a fresh quote to continue.'
            : 'We could not verify the resume token. Start a fresh quote to continue.'}
        </p>
        <button type="button" className="btn btn-primary" onClick={() => navigate('/quote')}>
          Back to quote builder
        </button>
      </div>
    </div>
  );
};

export default Resume;
