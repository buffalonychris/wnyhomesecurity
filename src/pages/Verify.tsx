import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthorityBlock from '../components/AuthorityBlock';
import {
  AgreementTokenPayload,
  buildAgreementAuthorityMeta,
  buildQuoteAuthorityMeta,
  DocAuthorityMeta,
  parseAgreementToken,
  buildSicarAuthorityMeta,
  parseSicarToken,
  computeSicarHash,
} from '../lib/docAuthority';
import { shortenMiddle } from '../lib/displayUtils';
import { buildQuoteFromResumePayload, parseResumeToken } from '../lib/resumeToken';
import { computeQuoteHash } from '../lib/quoteHash';
import { computeAgreementHash } from '../lib/agreementHash';
import { AcceptanceRecord, updateRetailFlow } from '../lib/retailFlow';

const Verify = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'pending' | 'verified' | 'invalid'>('pending');
  const [authority, setAuthority] = useState<DocAuthorityMeta | null>(null);
  const [reason, setReason] = useState('');

  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const docParam = (searchParams.get('doc') || '').toUpperCase();
  const token = searchParams.get('t') || '';
  const restore = searchParams.get('restore') === '1';

  useEffect(() => {
    window.scrollTo(0, 0);
    const run = async () => {
      if (!token || (docParam !== 'QUOTE' && docParam !== 'AGREEMENT' && docParam !== 'SICAR')) {
        setStatus('invalid');
        setReason('Missing or invalid verification parameters.');
        return;
      }

      if (docParam === 'QUOTE') {
        const payload = parseResumeToken(token ?? undefined);
        if (!payload) {
          setStatus('invalid');
          setReason('Invalid quote token.');
          return;
        }
        const quote = buildQuoteFromResumePayload(payload);
        const expectedHash = payload.quoteHash;
        const computedHash = await computeQuoteHash(quote);
        const matches = expectedHash && computedHash === expectedHash;
        setStatus(matches ? 'verified' : 'invalid');
        setReason(matches ? '' : 'Hash mismatch.');
        const meta = await buildQuoteAuthorityMeta({ quote }, token);
        setAuthority(meta);
        if (restore) {
          updateRetailFlow({ quote });
          navigate('/quoteReview', { replace: true });
        }
        return;
      }

      if (docParam === 'AGREEMENT') {
        const agreementPayload: AgreementTokenPayload | null = parseAgreementToken(token ?? undefined);
        if (!agreementPayload || !agreementPayload.quote) {
          setStatus('invalid');
          setReason('Invalid agreement token.');
          return;
        }
        const { quote, acceptance, hash } = agreementPayload;
        const computedHash = await computeAgreementHash(quote, acceptance as AcceptanceRecord | undefined);
        const expectedHash = hash || acceptance?.agreementHash || '';
        const matches = expectedHash && computedHash === expectedHash;
        setStatus(matches ? 'verified' : 'invalid');
        setReason(matches ? '' : 'Hash mismatch.');
        const meta = await buildAgreementAuthorityMeta({ quote, agreementAcceptance: acceptance ?? undefined }, token);
        setAuthority(meta);
        if (restore) {
          updateRetailFlow({ quote, agreementAcceptance: acceptance ?? undefined });
          navigate('/agreementReview', { replace: true });
        }
        return;
      }

      if (docParam === 'SICAR') {
        const payload = parseSicarToken(token ?? undefined);
        if (!payload?.certificate) {
          setStatus('invalid');
          setReason('Invalid SICAR token.');
          return;
        }
        const { certificate, hash } = payload;
        const computedHash = await computeSicarHash(certificate);
        const expectedHash = hash || computedHash;
        const matches = expectedHash === computedHash;
        setStatus(matches ? 'verified' : 'invalid');
        setReason(matches ? '' : 'Hash mismatch.');
        const meta = await buildSicarAuthorityMeta(certificate, token, expectedHash);
        setAuthority(meta);
        return;
      }
    };

    run();
  }, [docParam, navigate, restore, token]);

  const badgeStyle =
    status === 'verified'
      ? { background: 'rgba(84,160,82,0.2)', color: '#dff4de', border: '1px solid rgba(84,160,82,0.5)' }
      : status === 'invalid'
      ? { background: 'rgba(201, 72, 64, 0.2)', color: '#ffd2ce', border: '1px solid rgba(201,72,64,0.5)' }
      : { background: 'rgba(245, 192, 66, 0.2)', color: '#ffe9b8', border: '1px solid rgba(245,192,66,0.35)' };

  return (
    <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '1.5rem' }}>
      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">Document verification</div>
        <h1 style={{ margin: 0, color: '#fff7e6' }}>Verification status</h1>
        <div
          className="badge"
          style={{
            ...badgeStyle,
            fontSize: '1.1rem',
            padding: '0.65rem 0.85rem',
            alignSelf: 'flex-start',
          }}
        >
          {status === 'verified' ? 'Verified' : status === 'invalid' ? 'Invalid' : 'Checking…'}
        </div>
        {reason && <div style={{ color: '#c8c0aa' }}>{reason}</div>}
        {token && (
          <small className="break-all" style={{ color: '#c8c0aa' }}>
            Token: {shortenMiddle(token, 10, 6)}
          </small>
        )}
        {authority && (
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              className="btn btn-primary"
              href={
                authority.docType === 'AGREEMENT'
                  ? `/agreementPrint?t=${encodeURIComponent(token)}`
                  : authority.docType === 'QUOTE'
                  ? `/quotePrint?t=${encodeURIComponent(token)}`
                  : `/certificate?t=${encodeURIComponent(token)}`
              }
            >
              View print document
            </a>
            {authority.docType !== 'SICAR' && (
              <a className="btn btn-secondary" href={`/resume?t=${encodeURIComponent(token)}`}>
                Resume order
              </a>
            )}
          </div>
        )}
      </div>

      <AuthorityBlock meta={authority} />
    </div>
  );
};

export default Verify;
