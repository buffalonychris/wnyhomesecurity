import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AuthorityBlock from '../components/AuthorityBlock';
import { buildSicarAuthorityMeta, DocAuthorityMeta, parseSicarToken } from '../lib/docAuthority';
import { brandLegal, brandShort } from '../lib/brand';
import {
  AcceptanceSnapshot,
  addDevice,
  addInstaller,
  advanceStage,
  appendPhoto,
  canAdvanceStage,
  CertificateRecord,
  createDefaultCertificate,
  DeviceRecord,
  FieldKey,
  isFieldEditable,
  LIFECYCLE_STAGES,
  loadCertificate,
  recordAcceptance,
  recordHealthCheck,
  Role,
  saveCertificate,
  updateDevice,
  updateField,
} from '../lib/sicar';

const roleLabels: Record<Role, string> = {
  customer: 'Customer / Sales',
  sales: 'Sales',
  'quoting-system': 'Quoting System',
  'contract-system': 'Contract System',
  operations: 'Operations',
  installer: 'Installer of Record',
  system: 'System',
};

const lifecycleLabels: Record<string, string> = {
  lead: 'Lead & Customer Inception',
  quote: 'Quote Construction & Approval',
  agreement: 'Agreement Execution',
  preinstall: 'Pre-Install Planning & Staging',
  installation: 'Physical Installation',
  postinstall: 'Post-Install Verification & Health Check',
  acceptance: 'Customer Walkthrough & Acceptance',
};

type Banner = { tone: 'success' | 'error' | 'info'; message: string } | null;

const deviceDefaults: Omit<DeviceRecord, 'id' | 'health' | 'photos'> = {
  systemName: '',
  manufacturer: '',
  make: '',
  model: '',
  partNumber: '',
  serialNumber: '',
  plannedLocation: '',
  installedLocation: '',
  purpose: '',
  installerAttestation: '',
};

const Certificate = () => {
  const location = useLocation();
  const [certificate, setCertificate] = useState<CertificateRecord>(createDefaultCertificate());
  const [role, setRole] = useState<Role>('customer');
  const [banner, setBanner] = useState<Banner>(null);
  const [newDevice, setNewDevice] = useState(deviceDefaults);
  const [newInstallerName, setNewInstallerName] = useState('');
  const [acceptance, setAcceptance] = useState<AcceptanceSnapshot>({
    customerName: '',
    signature: '',
    signedAt: '',
    representativeTitle: '',
  });
  const [authority, setAuthority] = useState<DocAuthorityMeta | null>(null);
  const [viewOnly, setViewOnly] = useState(false);
  const [tokenHash, setTokenHash] = useState<string | undefined>(undefined);

  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const tokenParam = searchParams.get('t');

  useEffect(() => {
    if (tokenParam) {
      const parsed = parseSicarToken(tokenParam);
      if (parsed?.certificate) {
        setCertificate(parsed.certificate);
        setAcceptance(parsed.certificate.acceptance ?? {
          customerName: '',
          signature: '',
          signedAt: '',
          representativeTitle: '',
        });
        setViewOnly(true);
        setTokenHash(parsed.hash);
        return;
      }
    }

    const stored = loadCertificate();
    setCertificate(stored);
    setAcceptance(stored.acceptance ?? {
      customerName: '',
      signature: '',
      signedAt: '',
      representativeTitle: '',
    });
    setViewOnly(false);
    setTokenHash(undefined);
  }, [tokenParam]);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      const meta = await buildSicarAuthorityMeta(certificate, tokenParam ?? undefined, tokenHash);
      if (!cancelled) setAuthority(meta);
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [certificate, tokenHash, tokenParam]);

  const stageIndex = useMemo(
    () => LIFECYCLE_STAGES.findIndex((stage) => stage === certificate.lifecycleStage),
    [certificate.lifecycleStage],
  );

  const canRecordAcceptance =
    certificate.lifecycleStage === 'acceptance' &&
    certificate.devices.length > 0 &&
    !certificate.immutable &&
    !viewOnly;

  const blockOnViewOnly = () => {
    if (!viewOnly) return false;
    setBanner({ tone: 'error', message: 'View-only verification token; edits are disabled.' });
    return true;
  };

  const setAndToast = (update: CertificateRecord, message?: Banner) => {
    setCertificate(update);
    setBanner(message ?? null);
  };

  const handleFieldChange = (key: FieldKey, value: string) => {
    if (blockOnViewOnly()) return;
    const result = updateField(certificate, key, value, role);
    if (result.error) {
      setBanner({ tone: 'error', message: result.error });
    } else {
      setAndToast(result.certificate, { tone: 'success', message: 'Field saved to immutable log.' });
    }
  };

  const handleAddInstaller = () => {
    if (blockOnViewOnly()) return;
    const trimmed = newInstallerName.trim();
    if (!trimmed) return;
    const result = addInstaller(certificate, trimmed, role);
    if (result.error) {
      setBanner({ tone: 'error', message: result.error });
    } else {
      setAndToast(result.certificate, { tone: 'success', message: 'Installer recorded.' });
      setNewInstallerName('');
    }
  };

  const handleAddDevice = () => {
    if (blockOnViewOnly()) return;
    if (!newDevice.systemName || !newDevice.manufacturer || !newDevice.purpose) {
      setBanner({ tone: 'error', message: 'System name, manufacturer, and purpose are required.' });
      return;
    }
    const result = addDevice(certificate, newDevice, role);
    if (result.error) {
      setBanner({ tone: 'error', message: result.error });
    } else {
      setAndToast(result.certificate, { tone: 'success', message: 'Device created with attestation placeholder.' });
      setNewDevice(deviceDefaults);
    }
  };

  const handleAdvanceStage = (nextStage: CertificateRecord['lifecycleStage']) => {
    if (blockOnViewOnly()) return;
    const result = advanceStage(certificate, nextStage, role);
    if (result.error) {
      setBanner({ tone: 'error', message: result.error });
    } else {
      setAndToast(result.certificate, { tone: 'info', message: `Advanced to ${lifecycleLabels[nextStage]}.` });
    }
  };

  const handleHealthSnapshot = (deviceId: string) => {
    if (blockOnViewOnly()) return;
    const result = recordHealthCheck(
      certificate,
      deviceId,
      {
        power: 'ok',
        connectivity: 'ok',
        battery: 'ok',
        functional: 'ok',
      },
      'system',
    );
    if (result.error) {
      setBanner({ tone: 'error', message: result.error });
    } else {
      setCertificate(result.certificate);
      setBanner({ tone: 'success', message: 'Health snapshot pulled from telemetry.' });
    }
  };

  const handleHealthOverride = (deviceId: string, note: string) => {
    if (blockOnViewOnly()) return;
    const result = recordHealthCheck(
      certificate,
      deviceId,
      { functional: 'fail', manualOverride: true, overrideJustification: note },
      role,
    );
    if (result.error) {
      setBanner({ tone: 'error', message: result.error });
    } else {
      setBanner({ tone: 'info', message: 'Override recorded with justification.' });
      setCertificate(result.certificate);
    }
  };

  const handlePhotoUpload = async (deviceId: string, file?: File | null) => {
    if (!file) return;
    if (blockOnViewOnly()) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = appendPhoto(certificate, deviceId, String(reader.result), role);
      if (result.error) {
        setBanner({ tone: 'error', message: result.error });
      } else {
        setCertificate(result.certificate);
        setBanner({ tone: 'success', message: 'Install photo captured.' });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDeviceField = (deviceId: string, patch: Partial<DeviceRecord>) => {
    if (blockOnViewOnly()) return;
    const result = updateDevice(certificate, deviceId, patch, role);
    if (result.error) {
      setBanner({ tone: 'error', message: result.error });
    } else {
      setCertificate(result.certificate);
    }
  };

  const handleAcceptance = () => {
    if (blockOnViewOnly()) return;
    if (!acceptance.customerName.trim() || !acceptance.signature.trim()) {
      setBanner({ tone: 'error', message: 'Signature and name are required.' });
      return;
    }
    const payload: AcceptanceSnapshot = {
      ...acceptance,
      signedAt: new Date().toISOString(),
    };
    const result = recordAcceptance(certificate, payload, role);
    if (result.error) {
      setBanner({ tone: 'error', message: result.error });
    } else {
      setAndToast(result.certificate, { tone: 'success', message: 'Customer acceptance locked.' });
    }
  };

  const resetAll = () => {
    if (blockOnViewOnly()) return;
    const reset = createDefaultCertificate();
    saveCertificate(reset);
    setCertificate(reset);
    setAcceptance({ customerName: '', signature: '', signedAt: '', representativeTitle: '' });
    setBanner({ tone: 'info', message: 'Certificate reset for testing.' });
  };

  return (
    <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '1.5rem' }}>
      <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">SICAR acceptance</div>
        <h1 style={{ margin: 0, color: '#fff7e6' }}>Installation Verification & Customer Acceptance</h1>
        <p style={{ margin: 0, color: '#e6ddc7' }}>
          Enforces the canonical lifecycle, role ownership, installer attestations, health snapshots, and
          customer lock-down required for the System Installation Completion & Acceptance Record (SICAR).
        </p>
        {viewOnly && (
          <small style={{ color: '#f5c042' }}>
            Loaded from a verification token. Editing and lifecycle advances are disabled in this mode.
          </small>
        )}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button type="button" className="btn btn-secondary" onClick={resetAll}>
            Reset demo certificate
          </button>
        </div>
      </div>

      <AuthorityBlock meta={authority} resumeLabel="View certificate" />

      <div className="card" style={{ display: 'grid', gap: '0.5rem' }}>
        <div className="badge">Active role</div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            style={{ padding: '0.5rem', borderRadius: '10px', border: '1px solid var(--kaec-ink)' }}
          >
            {Object.entries(roleLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <small style={{ color: '#c8c0aa' }}>
            Each field validates the owning role and locks when its lifecycle stage is completed. Current stage:{' '}
            <strong>{lifecycleLabels[certificate.lifecycleStage]}</strong>
          </small>
        </div>
        {banner && (
          <div
            className="card"
            style={{
              background:
                banner.tone === 'error'
                  ? 'rgba(211, 47, 47, 0.25)'
                  : banner.tone === 'success'
                  ? 'rgba(56, 142, 60, 0.2)'
                  : 'rgba(245, 192, 66, 0.15)',
              border: '1px solid var(--kaec-ink)',
            }}
          >
            {banner.message}
          </div>
        )}
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">Canonical lifecycle</div>
        <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {LIFECYCLE_STAGES.map((stage, index) => {
            const active = certificate.lifecycleStage === stage;
            const complete = index < stageIndex;
            const next = index === stageIndex + 1;
            return (
              <div key={stage} className="card" style={{ border: '1px solid var(--kaec-ink)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong>{lifecycleLabels[stage]}</strong>
                  {active && <span className="badge" style={{ background: 'var(--kaec-green)', color: '#0c0b0b' }}>Active</span>}
                  {complete && !active && <span className="badge">Complete</span>}
                </div>
                <small style={{ color: '#c8c0aa' }}>
                  {complete
                    ? 'Locked for edits.'
                    : active
                    ? 'Fields owned by this stage remain editable by their role.'
                    : 'Advance sequentially only.'}
                </small>
                {next && canAdvanceStage(certificate, stage) && !viewOnly && (
                  <button type="button" className="btn btn-primary" onClick={() => handleAdvanceStage(stage)}>
                    Advance to {lifecycleLabels[stage]}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.5rem' }}>
        <div className="badge">Customer and contract lineage</div>
        <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {(
            [
              ['customerName', 'Customer name'],
              ['contactEmail', 'Contact email'],
              ['contactPhone', 'Contact phone'],
              ['serviceStreet1', 'Service street 1'],
              ['serviceStreet2', 'Service street 2'],
              ['serviceCity', 'City'],
              ['serviceState', 'State'],
              ['serviceZip', 'Zip'],
              ['quoteId', 'Quote ID (immutable)'],
              ['agreementId', 'Agreement ID (immutable)'],
              ['installationJobId', 'Installation Job ID'],
            ] as [FieldKey, string][]
          ).map(([key, label]) => {
            const editable = isFieldEditable(certificate, key, role) && !viewOnly;
            const value =
              key in certificate.customer
                ? (certificate.customer as Record<string, string>)[key]
                : key === 'quoteId'
                ? certificate.quoteId ?? ''
                : key === 'agreementId'
                ? certificate.agreementId ?? ''
                : certificate.installationJobId ?? '';
            return (
              <label key={key} className="card" style={{ display: 'grid', gap: '0.35rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{label}</span>
                  <small style={{ color: '#c8c0aa' }}>{editable ? 'Owned by this role' : 'Locked'}</small>
                </div>
                <input
                  type="text"
                  value={value}
                  disabled={!editable}
                  onChange={(e) => handleFieldChange(key, e.target.value)}
                  style={{ padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--kaec-ink)' }}
                />
              </label>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">Installer of record</div>
        <ul className="list">
          {certificate.installers.map((installer) => (
            <li key={installer}>
              <span />
              <span>{installer}</span>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Add installer"
            value={newInstallerName}
            onChange={(e) => setNewInstallerName(e.target.value)}
            disabled={
              certificate.lifecycleStage !== 'preinstall' || role !== 'operations' || certificate.immutable || viewOnly
            }
            style={{ padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--kaec-ink)' }}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddInstaller}
            disabled={
              certificate.lifecycleStage !== 'preinstall' || role !== 'operations' || certificate.immutable || viewOnly
            }
          >
            Record installer
          </button>
        </div>
        <small style={{ color: '#c8c0aa' }}>
          Operations controls this roster during pre-install staging. Installer identity is immutable after this stage.
        </small>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">Device-by-device installation log</div>
        <div className="card" style={{ border: '1px dashed var(--kaec-ink)', display: 'grid', gap: '0.5rem' }}>
          <strong>New device (Installer-only during Physical Installation)</strong>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {(
              [
                ['systemName', 'System/dashboard name'],
                ['manufacturer', 'Manufacturer'],
                ['make', 'Make'],
                ['model', 'Model'],
                ['partNumber', 'Part number'],
                ['serialNumber', 'Serial number'],
                ['plannedLocation', 'Planned location'],
                ['installedLocation', 'Installed location'],
                ['purpose', 'Plain-language purpose'],
                ['installerAttestation', 'Installer attestation'],
              ] as [keyof typeof deviceDefaults, string][]
            ).map(([key, label]) => (
              <label key={key} className="card" style={{ display: 'grid', gap: '0.35rem' }}>
                <span>{label}</span>
                <input
                  type="text"
                  value={(newDevice as Record<string, string>)[key]}
                  onChange={(e) => setNewDevice({ ...newDevice, [key]: e.target.value })}
                  disabled={
                    certificate.lifecycleStage !== 'installation' || role !== 'installer' || certificate.immutable || viewOnly
                  }
                  style={{ padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--kaec-ink)' }}
                />
              </label>
            ))}
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddDevice}
            disabled={
              certificate.lifecycleStage !== 'installation' || role !== 'installer' || certificate.immutable || viewOnly
            }
          >
            Add device to certificate
          </button>
        </div>

        {certificate.devices.length === 0 ? (
          <div className="card" style={{ border: '1px solid var(--kaec-ink)' }}>
            <strong>No devices recorded yet.</strong>
            <small style={{ color: '#c8c0aa' }}>
              Installer must enumerate every device and attach proof-of-install photos before completion is allowed.
            </small>
          </div>
        ) : (
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {certificate.devices.map((device) => (
              <div key={device.id} className="card" style={{ display: 'grid', gap: '0.5rem', border: '1px solid var(--kaec-ink)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong>{device.systemName || 'Device'}</strong>
                  <span className="badge" title={device.health.lastCheckedAt || 'Not yet checked'}>
                    Health: {device.health.functional}
                  </span>
                </div>
                <small style={{ color: '#c8c0aa' }}>
                  Purpose: {device.purpose || 'pending'} | Installed: {device.installedLocation || 'pending'}
                </small>
                <div className="card" style={{ background: '#0f0f0f', border: '1px solid var(--kaec-ink)' }}>
                  <strong>Health snapshot</strong>
                  <ul className="list" style={{ color: '#e6ddc7' }}>
                    <li>
                      <span />
                      <span>Power: {device.health.power}</span>
                    </li>
                    <li>
                      <span />
                      <span>Connectivity: {device.health.connectivity}</span>
                    </li>
                    <li>
                      <span />
                      <span>Battery: {device.health.battery}</span>
                    </li>
                    <li>
                      <span />
                      <span>Functional: {device.health.functional}</span>
                    </li>
                    <li>
                      <span />
                      <span>Last checked: {device.health.lastCheckedAt || 'pending'}</span>
                    </li>
                  </ul>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => handleHealthSnapshot(device.id)}
                      disabled={certificate.lifecycleStage === 'acceptance' || certificate.immutable || viewOnly}
                    >
                      Pull telemetry snapshot
                    </button>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => handleHealthOverride(device.id, 'Installer noted manual override')}
                      disabled={
                        !['installer', 'system'].includes(role) ||
                        certificate.lifecycleStage === 'acceptance' ||
                        certificate.immutable ||
                        viewOnly
                      }
                    >
                      Manual override (requires note)
                    </button>
                  </div>
                </div>

                <div className="card" style={{ display: 'grid', gap: '0.35rem' }}>
                  <strong>Installer statements</strong>
                  <textarea
                    value={device.installerAttestation}
                    onChange={(e) => handleDeviceField(device.id, { installerAttestation: e.target.value })}
                    disabled={certificate.lifecycleStage === 'acceptance' || certificate.immutable || viewOnly}
                    style={{
                      background: '#0f0f0f',
                      color: '#e6ddc7',
                      borderRadius: '10px',
                      border: '1px solid var(--kaec-ink)',
                      padding: '0.65rem',
                      minHeight: '80px',
                    }}
                  />
                </div>

                <div className="card" style={{ display: 'grid', gap: '0.35rem' }}>
                  <strong>Photos (installer only)</strong>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlePhotoUpload(device.id, e.target.files?.[0])}
                    disabled={
                      certificate.lifecycleStage !== 'installation' || role !== 'installer' || certificate.immutable || viewOnly
                    }
                  />
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {device.photos.map((photo, idx) => (
                      <img
                        key={idx}
                        src={photo}
                        alt={`Install proof ${idx + 1}`}
                        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', border: '1px solid var(--kaec-ink)' }}
                      />
                    ))}
                    {device.photos.length === 0 && <small style={{ color: '#c8c0aa' }}>No photos yet.</small>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">Customer walkthrough & acceptance</div>
        <p style={{ margin: 0, color: '#c8c0aa' }}>
          Tablet-friendly view of the entire SICAR payload including photos, device purposes, timestamps, and health
          snapshots. Acceptance locks all records and requires re-issuance for future edits.
        </p>
        <div className="card" style={{ display: 'grid', gap: '0.5rem', border: '1px solid var(--kaec-ink)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <label style={{ display: 'grid', gap: '0.25rem' }}>
              Customer / representative name
              <input
                type="text"
                value={acceptance.customerName}
                onChange={(e) => setAcceptance({ ...acceptance, customerName: e.target.value })}
                disabled={!canRecordAcceptance || role !== 'customer'}
                style={{ padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--kaec-ink)' }}
              />
            </label>
            <label style={{ display: 'grid', gap: '0.25rem' }}>
              Signature (type-to-sign for demo)
              <input
                type="text"
                value={acceptance.signature}
                onChange={(e) => setAcceptance({ ...acceptance, signature: e.target.value })}
                disabled={!canRecordAcceptance || role !== 'customer'}
                style={{ padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--kaec-ink)' }}
              />
            </label>
            <label style={{ display: 'grid', gap: '0.25rem' }}>
              Representative title (optional)
              <input
                type="text"
                value={acceptance.representativeTitle}
                onChange={(e) => setAcceptance({ ...acceptance, representativeTitle: e.target.value })}
                disabled={!canRecordAcceptance || role !== 'customer'}
                style={{ padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--kaec-ink)' }}
              />
            </label>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAcceptance}
              disabled={!canRecordAcceptance || role !== 'customer'}
            >
              Sign & lock certificate
            </button>
          </div>
          <small style={{ color: '#c8c0aa' }}>
            Once signed, the System Installation Verification & Customer Acceptance Certificate becomes read-only. New work
            requires a new job or addendum.
          </small>
        </div>
        <div className="card" style={{ border: '1px solid var(--kaec-ink)' }}>
          <strong>Customer-facing PDF payload (print-friendly)</strong>
          <p style={{ margin: 0, color: '#c8c0aa' }}>
            This view renders the legally enforceable System Installation Completion & Acceptance Record (SICAR) content. Use
            your browser print-to-PDF to include embedded photos and attestations.
          </p>
          <ul className="list">
            <li>
              <span />
              <span>Customer: {certificate.customer.customerName || 'pending'} | Address: {certificate.customer.serviceStreet1}</span>
            </li>
            <li>
              <span />
              <span>
                Quote: {certificate.quoteId || 'pending'} | Agreement: {certificate.agreementId || 'pending'} | Job: {certificate.installationJobId || 'pending'}
              </span>
            </li>
            <li>
              <span />
              <span>Installer(s): {certificate.installers.join(', ')}</span>
            </li>
            <li>
              <span />
              <span>Devices recorded: {certificate.devices.length}</span>
            </li>
            {certificate.acceptance && (
              <li>
                <span />
                <span>
                  Accepted by {certificate.acceptance.customerName} on {new Date(certificate.acceptance.signedAt).toLocaleString()} (signature stored)
                </span>
              </li>
            )}
          </ul>
          <small style={{ color: '#c8c0aa' }}>
            © 2025 {brandLegal} All Rights Reserved. Unauthorized use is prohibited. May all of your journeys be
            supported by {brandShort}.
          </small>
        </div>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.5rem' }}>
        <div className="badge">Audit trail</div>
        {certificate.auditLog.length === 0 ? (
          <small style={{ color: '#c8c0aa' }}>No actions recorded yet.</small>
        ) : (
          <div className="card" style={{ background: '#0f0f0f', border: '1px solid var(--kaec-ink)' }}>
            <ul className="list" style={{ color: '#e6ddc7' }}>
              {certificate.auditLog.map((entry) => (
                <li key={entry.id}>
                  <span />
                  <span>
                    {entry.timestamp}: {entry.actor} — {entry.action} {entry.details ? `(${entry.details})` : ''}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
