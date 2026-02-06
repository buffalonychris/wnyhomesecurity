export type LifecycleStage =
  | 'lead'
  | 'quote'
  | 'agreement'
  | 'preinstall'
  | 'installation'
  | 'postinstall'
  | 'acceptance';

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  'lead',
  'quote',
  'agreement',
  'preinstall',
  'installation',
  'postinstall',
  'acceptance',
];

export type Role =
  | 'customer'
  | 'sales'
  | 'quoting-system'
  | 'contract-system'
  | 'operations'
  | 'installer'
  | 'system';

export type FieldKey =
  | 'customerName'
  | 'contactEmail'
  | 'contactPhone'
  | 'serviceStreet1'
  | 'serviceStreet2'
  | 'serviceCity'
  | 'serviceState'
  | 'serviceZip'
  | 'quoteId'
  | 'agreementId'
  | 'installationJobId';

export type DeviceHealth = {
  power: 'unknown' | 'ok' | 'fail';
  connectivity: 'unknown' | 'ok' | 'fail';
  battery: 'unknown' | 'ok' | 'fail';
  functional: 'unknown' | 'ok' | 'fail';
  lastCheckedAt?: string;
  manualOverride?: boolean;
  overrideJustification?: string;
};

export type DeviceRecord = {
  id: string;
  systemName: string;
  manufacturer: string;
  make: string;
  model: string;
  partNumber: string;
  serialNumber?: string;
  plannedLocation: string;
  installedLocation: string;
  purpose: string;
  photos: string[];
  health: DeviceHealth;
  installerAttestation?: string;
};

export type AcceptanceSnapshot = {
  customerName: string;
  signature: string;
  signedAt: string;
  representativeTitle?: string;
};

export type AuditEntry = {
  id: string;
  timestamp: string;
  actor: Role;
  action: string;
  details?: string;
};

export type CertificateRecord = {
  lifecycleStage: LifecycleStage;
  immutable: boolean;
  customer: {
    customerName: string;
    contactEmail: string;
    contactPhone: string;
    serviceStreet1: string;
    serviceStreet2?: string;
    serviceCity: string;
    serviceState: string;
    serviceZip: string;
  };
  quoteId?: string;
  agreementId?: string;
  installationJobId?: string;
  installers: string[];
  devices: DeviceRecord[];
  acceptance?: AcceptanceSnapshot;
  auditLog: AuditEntry[];
};

type FieldOwnership = {
  role: Role;
  stage: LifecycleStage;
};

const FIELD_OWNERSHIP: Record<FieldKey, FieldOwnership> = {
  customerName: { role: 'customer', stage: 'lead' },
  contactEmail: { role: 'customer', stage: 'lead' },
  contactPhone: { role: 'customer', stage: 'lead' },
  serviceStreet1: { role: 'customer', stage: 'lead' },
  serviceStreet2: { role: 'customer', stage: 'lead' },
  serviceCity: { role: 'customer', stage: 'lead' },
  serviceState: { role: 'customer', stage: 'lead' },
  serviceZip: { role: 'customer', stage: 'lead' },
  quoteId: { role: 'quoting-system', stage: 'quote' },
  agreementId: { role: 'contract-system', stage: 'agreement' },
  installationJobId: { role: 'operations', stage: 'preinstall' },
};

const STORAGE_KEY = 'kaecSicarCertificate';

const stageIndex = (stage: LifecycleStage) => LIFECYCLE_STAGES.indexOf(stage);

const recordAudit = (certificate: CertificateRecord, actor: Role, action: string, details?: string) => {
  const entry: AuditEntry = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    actor,
    action,
    details,
  };
  certificate.auditLog = [entry, ...certificate.auditLog].slice(0, 150);
};

export const createDefaultCertificate = (): CertificateRecord => ({
  lifecycleStage: 'lead',
  immutable: false,
  customer: {
    customerName: '',
    contactEmail: '',
    contactPhone: '',
    serviceStreet1: '',
    serviceStreet2: '',
    serviceCity: '',
    serviceState: '',
    serviceZip: '',
  },
  quoteId: '',
  agreementId: '',
  installationJobId: '',
  installers: ['Installer of Record'],
  devices: [],
  auditLog: [],
});

export const loadCertificate = (): CertificateRecord => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return createDefaultCertificate();
  try {
    const parsed = JSON.parse(stored) as CertificateRecord;
    return {
      ...createDefaultCertificate(),
      ...parsed,
      customer: { ...createDefaultCertificate().customer, ...parsed.customer },
    };
  } catch (error) {
    console.error('Error loading certificate', error);
    return createDefaultCertificate();
  }
};

export const saveCertificate = (certificate: CertificateRecord) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(certificate));
  return certificate;
};

export const canAdvanceStage = (certificate: CertificateRecord, next: LifecycleStage) => {
  if (certificate.immutable) return false;
  const currentIndex = stageIndex(certificate.lifecycleStage);
  const nextIndex = stageIndex(next);
  return nextIndex === currentIndex + 1;
};

export const advanceStage = (
  certificate: CertificateRecord,
  next: LifecycleStage,
  actor: Role,
): { certificate: CertificateRecord; error?: string } => {
  if (!canAdvanceStage(certificate, next)) {
    return { certificate, error: 'Stages must progress in order and cannot be skipped.' };
  }

  certificate.lifecycleStage = next;
  recordAudit(certificate, actor, 'Advanced lifecycle stage', `Moved to ${next}`);
  return { certificate: saveCertificate({ ...certificate }) };
};

export const isFieldEditable = (certificate: CertificateRecord, key: FieldKey, role: Role) => {
  if (certificate.immutable) return false;
  const ownership = FIELD_OWNERSHIP[key];
  if (!ownership || ownership.role !== role) return false;
  return stageIndex(certificate.lifecycleStage) <= stageIndex(ownership.stage);
};

export const updateField = (
  certificate: CertificateRecord,
  key: FieldKey,
  value: string,
  actor: Role,
): { certificate: CertificateRecord; error?: string } => {
  if (!isFieldEditable(certificate, key, actor)) {
    return { certificate, error: 'Field is locked for this role or lifecycle stage.' };
  }

  const next = { ...certificate };
  next.customer = { ...certificate.customer };

  if (key in next.customer) {
    (next.customer as Record<string, string>)[key] = value;
  }

  if (key === 'quoteId') next.quoteId = value;
  if (key === 'agreementId') next.agreementId = value;
  if (key === 'installationJobId') next.installationJobId = value;
  recordAudit(next, actor, 'Updated field', `${key} set`);
  return { certificate: saveCertificate(next) };
};

export const addInstaller = (
  certificate: CertificateRecord,
  installerName: string,
  actor: Role,
): { certificate: CertificateRecord; error?: string } => {
  if (certificate.lifecycleStage !== 'preinstall' || actor !== 'operations' || certificate.immutable) {
    return { certificate, error: 'Installer assignments are only editable by Operations during pre-install.' };
  }
  const next = { ...certificate, installers: [...certificate.installers, installerName] };
  recordAudit(next, actor, 'Added installer', installerName);
  return { certificate: saveCertificate(next) };
};

export const addDevice = (
  certificate: CertificateRecord,
  device: Omit<DeviceRecord, 'id' | 'health' | 'photos'> & { health?: DeviceHealth; photos?: string[] },
  actor: Role,
): { certificate: CertificateRecord; error?: string } => {
  if (certificate.lifecycleStage !== 'installation' || actor !== 'installer' || certificate.immutable) {
    return { certificate, error: 'Devices can only be created by the Installer of Record during installation.' };
  }

  const nextDevice: DeviceRecord = {
    ...device,
    id: crypto.randomUUID(),
    photos: device.photos ?? [],
    health: device.health ?? {
      power: 'unknown',
      connectivity: 'unknown',
      battery: 'unknown',
      functional: 'unknown',
    },
  };

  const next = { ...certificate, devices: [...certificate.devices, nextDevice] };
  recordAudit(next, actor, 'Added device', nextDevice.systemName);
  return { certificate: saveCertificate(next) };
};

export const updateDevice = (
  certificate: CertificateRecord,
  deviceId: string,
  patch: Partial<DeviceRecord>,
  actor: Role,
): { certificate: CertificateRecord; error?: string } => {
  const stageAllowed = ['installation', 'postinstall'].includes(certificate.lifecycleStage);
  if (!stageAllowed || (actor !== 'installer' && actor !== 'system') || certificate.immutable) {
    return { certificate, error: 'Device updates require installer/system role during installation or post-install.' };
  }

  const devices = certificate.devices.map((device) =>
    device.id === deviceId ? { ...device, ...patch, health: { ...device.health, ...patch.health } } : device,
  );

  const next = { ...certificate, devices };
  recordAudit(next, actor, 'Updated device', deviceId);
  return { certificate: saveCertificate(next) };
};

export const appendPhoto = (
  certificate: CertificateRecord,
  deviceId: string,
  photoData: string,
  actor: Role,
): { certificate: CertificateRecord; error?: string } => {
  const allowedStage = certificate.lifecycleStage === 'installation' && actor === 'installer' && !certificate.immutable;
  if (!allowedStage) return { certificate, error: 'Photos can only be added by the installer during installation.' };

  const devices = certificate.devices.map((device) =>
    device.id === deviceId ? { ...device, photos: [...device.photos, photoData] } : device,
  );
  const next = { ...certificate, devices };
  recordAudit(next, actor, 'Captured install photo', deviceId);
  return { certificate: saveCertificate(next) };
};

export const recordHealthCheck = (
  certificate: CertificateRecord,
  deviceId: string,
  health: Partial<DeviceHealth>,
  actor: Role,
): { certificate: CertificateRecord; error?: string } => {
  const allowed = ['installation', 'postinstall'].includes(certificate.lifecycleStage) && !certificate.immutable;
  if (!allowed || (actor !== 'system' && actor !== 'installer')) {
    return { certificate, error: 'Health checks require installer or system role during install/post-install.' };
  }

  const devices = certificate.devices.map((device) => {
    if (device.id !== deviceId) return device;
    return {
      ...device,
      health: {
        ...device.health,
        ...health,
        lastCheckedAt: new Date().toISOString(),
      },
    };
  });
  const next = { ...certificate, devices };
  recordAudit(next, actor, 'Recorded health check', deviceId);
  return { certificate: saveCertificate(next) };
};

export const recordAcceptance = (
  certificate: CertificateRecord,
  acceptance: AcceptanceSnapshot,
  actor: Role,
): { certificate: CertificateRecord; error?: string } => {
  if (certificate.lifecycleStage !== 'acceptance' || actor !== 'customer' || certificate.immutable) {
    return { certificate, error: 'Acceptance requires customer role during the acceptance stage.' };
  }

  const next = { ...certificate, acceptance, immutable: true };
  recordAudit(next, actor, 'Customer acceptance captured');
  return { certificate: saveCertificate(next) };
};

export const resetCertificate = () => saveCertificate(createDefaultCertificate());
