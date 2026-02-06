import { useState, type Dispatch, type SetStateAction } from 'react';
import { DocAuthorityMeta } from '../lib/docAuthority';
import { copyToClipboard } from '../lib/displayUtils';

type AuthorityBlockProps = {
  meta: DocAuthorityMeta | null;
  resumeLabel?: string;
};

const AuthorityBlock = ({ meta, resumeLabel }: AuthorityBlockProps) => {
  const [hashCopied, setHashCopied] = useState(false);
  const [supersedesCopied, setSupersedesCopied] = useState(false);
  const [resumeCopied, setResumeCopied] = useState(false);
  const [verifyCopied, setVerifyCopied] = useState(false);
  const [quoteHashCopied, setQuoteHashCopied] = useState(false);

  if (!meta) return null;

  const handleCopy = async (value?: string | null, setter?: Dispatch<SetStateAction<boolean>>) => {
    if (!value || !setter) return;
    await copyToClipboard(value);
    setter(true);
    setTimeout(() => setter(false), 1800);
  };

  return (
    <div className="card" style={{ display: 'grid', gap: '0.75rem', border: '1px solid rgba(245, 192, 66, 0.35)' }}>
      <div className="badge">Authority</div>
      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
        <div>
          <small>Document Type</small>
          <div className="mono-text">{meta.docType}</div>
        </div>
        <div>
          <small>Version</small>
          <div className="mono-text">{meta.version}</div>
        </div>
        <div>
          <small>Reference</small>
          <div className="mono-text break-all">{meta.reference}</div>
        </div>
        <div>
          <small>Issued at</small>
          <div className="mono-text break-all">{meta.issuedAtISO}</div>
        </div>
        <div style={{ display: 'grid', gap: '0.25rem' }}>
          <div className="mono-text break-all">Hash: {meta.hashShort}</div>
          <button type="button" className="btn btn-secondary" onClick={() => handleCopy(meta.hashFull, setHashCopied)}>
            {hashCopied ? 'Copied full hash' : 'Copy full hash'}
          </button>
        </div>
        <div style={{ display: 'grid', gap: '0.25rem' }}>
          <div className="mono-text break-all">Supersedes: {meta.supersedesHashShort ?? 'None'}</div>
          {meta.supersedesHashFull && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleCopy(meta.supersedesHashFull, setSupersedesCopied)}
            >
              {supersedesCopied ? 'Copied prior hash' : 'Copy prior hash'}
            </button>
          )}
        </div>
        {meta.quoteBinding && (
          <div style={{ display: 'grid', gap: '0.25rem' }}>
            <div className="mono-text break-all">Quote binding: {meta.quoteBinding.ref}</div>
            <div className="mono-text break-all">Quote hash: {meta.quoteBinding.hashShort}</div>
            {meta.quoteBinding.hashFull && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleCopy(meta.quoteBinding?.hashFull, setQuoteHashCopied)}
              >
                {quoteHashCopied ? 'Copied quote hash' : 'Copy quote hash'}
              </button>
            )}
          </div>
        )}
      </div>
      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <strong>{resumeLabel || 'Resume order'}</strong>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href={meta.resumeUrl} style={{ color: 'var(--kaec-gold)', fontWeight: 700 }}>
              Continue your order
            </a>
            <button type="button" className="btn btn-secondary" onClick={() => handleCopy(meta.resumeUrl, setResumeCopied)}>
              {resumeCopied ? 'Copied resume link' : 'Copy resume link'}
            </button>
          </div>
          <small className="break-all" style={{ color: '#c8c0aa' }}>{meta.resumeUrl}</small>
        </div>
        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <strong>Verification</strong>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href={meta.verificationUrl} style={{ color: 'var(--kaec-gold)', fontWeight: 700 }}>
              Open verification
            </a>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleCopy(meta.verificationUrl, setVerifyCopied)}
            >
              {verifyCopied ? 'Copied verify link' : 'Copy verify link'}
            </button>
          </div>
          <small className="break-all" style={{ color: '#c8c0aa' }}>{meta.verificationUrl}</small>
        </div>
      </div>
    </div>
  );
};

export default AuthorityBlock;
