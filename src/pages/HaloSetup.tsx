import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { getHaloFeatureFlags } from '../lib/haloFlags';
import { haloContent } from '../lib/haloContent';
import {
  AddOnSelections,
  CarrierOption,
  ContactEntry,
  ContactRole,
  NotificationPreferences,
  NotificationProfile,
  TestResults,
  TestStatus,
} from '../lib/haloSetupWizard';

type HaloFlags = ReturnType<typeof getHaloFeatureFlags>;

const createContact = (): ContactEntry => ({
  id: typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
  name: '',
  phone: '',
  email: '',
  isMobile: false,
  role: 'Family',
  notificationProfile: 'Detailed',
  carrier: 'Unknown',
});

const createEmptyTestResults = (): TestResults => ({
  baseUnitHelp: { status: 'unchecked' },
  pendantHelp: { status: 'unchecked' },
  smsDelivery: { status: 'unchecked' },
  emailDelivery: { status: 'unchecked' },
  pushDelivery: { status: 'unchecked' },
  wristTrigger: { status: 'unchecked' },
  wallButton: { status: 'unchecked' },
  twoWayVoice: { status: 'unchecked' },
});

type TestKey = keyof TestResults;

type TestItem = {
  key: TestKey;
  label: string;
  // eslint-disable-next-line no-unused-vars
  visibleWhen: (flags: HaloFlags, addons: AddOnSelections) => boolean;
};

const getVisibleTests = (tests: readonly TestItem[], flags: HaloFlags, addons: AddOnSelections) =>
  tests.filter((item) => item.visibleWhen(flags, addons));

const formatTimestamp = (timestamp?: string) => {
  if (!timestamp) {
    return '—';
  }
  return new Date(timestamp).toLocaleString();
};

const sanitizeContacts = (entries: ContactEntry[]) =>
  entries
    .filter((contact) => contact.phone.trim() || contact.email.trim())
    .map((contact) => ({
      ...contact,
      name: contact.name.trim() || 'Contact',
      carrier: contact.isMobile ? contact.carrier : 'Unknown',
    }));

const getDefaultProfileForRole = (role: ContactRole): NotificationProfile => {
  if (role === 'Medical Assistant') {
    return 'Informative';
  }
  if (role === 'Family') {
    return 'Detailed';
  }
  return 'Detailed';
};

const HaloSetup = () => {
  const { setup } = haloContent;
  const { wizard } = setup;
  const flags = useMemo(() => getHaloFeatureFlags(), []);

  const [currentStep, setCurrentStep] = useState(0);
  const [wifi, setWifi] = useState({ ssid: '', password: '', skip: false });
  const [showPassword, setShowPassword] = useState(false);
  const [contacts, setContacts] = useState<ContactEntry[]>([createContact()]);
  const [addons, setAddons] = useState<AddOnSelections>({ wristWearable: false, wallButton: false });
  const [notificationPrefs, setNotificationPrefs] = useState<NotificationPreferences>({
    sms: flags.enableSms,
    email: flags.enableEmail,
    push: flags.enablePush,
  });
  const [testResults, setTestResults] = useState<TestResults>(() => createEmptyTestResults());

  const testItems = useMemo(
    () =>
      [
        {
          key: 'baseUnitHelp',
          label: wizard.steps.test_verified.checks.base_unit,
          visibleWhen: () => true,
        },
        {
          key: 'pendantHelp',
          label: wizard.steps.test_verified.checks.pendant,
          visibleWhen: () => true,
        },
        {
          key: 'smsDelivery',
          label: wizard.steps.test_verified.checks.sms_delivery,
          visibleWhen: (activeFlags: HaloFlags) => activeFlags.enableSms,
        },
        {
          key: 'emailDelivery',
          label: wizard.steps.test_verified.checks.email_delivery,
          visibleWhen: (activeFlags: HaloFlags) => activeFlags.enableEmail,
        },
        {
          key: 'pushDelivery',
          label: wizard.steps.test_verified.checks.push_delivery,
          visibleWhen: (activeFlags: HaloFlags) => activeFlags.enablePush,
        },
        {
          key: 'wristTrigger',
          label: wizard.steps.test_verified.checks.wrist_trigger,
          visibleWhen: (_activeFlags: HaloFlags, activeAddons: AddOnSelections) => activeAddons.wristWearable,
        },
        {
          key: 'wallButton',
          label: wizard.steps.test_verified.checks.wall_button,
          visibleWhen: (_activeFlags: HaloFlags, activeAddons: AddOnSelections) => activeAddons.wallButton,
        },
        {
          key: 'twoWayVoice',
          label: wizard.steps.test_verified.checks.two_way_voice,
          visibleWhen: (activeFlags: HaloFlags) => activeFlags.enableTwoWayVoiceClaim,
        },
      ] as const satisfies readonly TestItem[],
    [
      wizard.steps.test_verified.checks.base_unit,
      wizard.steps.test_verified.checks.email_delivery,
      wizard.steps.test_verified.checks.pendant,
      wizard.steps.test_verified.checks.push_delivery,
      wizard.steps.test_verified.checks.sms_delivery,
      wizard.steps.test_verified.checks.two_way_voice,
      wizard.steps.test_verified.checks.wall_button,
      wizard.steps.test_verified.checks.wrist_trigger,
    ],
  );

  const visibleTests = useMemo(() => getVisibleTests(testItems, flags, addons), [addons, flags, testItems]);
  const [summaryGeneratedAt, setSummaryGeneratedAt] = useState(() => new Date().toLocaleString());

  useEffect(() => {
    setSummaryGeneratedAt(new Date().toLocaleString());
  }, [testResults, visibleTests.length]);

  const sanitizedContacts = useMemo(() => sanitizeContacts(contacts), [contacts]);
  const hasUsableContact = sanitizedContacts.length > 0;
  const anyNotificationMethodEnabled = flags.enableSms || flags.enableEmail || flags.enablePush;
  const statusLabels = wizard.steps.summary.status_labels as Record<TestStatus, string>;

  const wifiAssistHint = useMemo(() => {
    if (typeof navigator === 'undefined' || !('connection' in navigator)) {
      return null;
    }

    const connection = navigator.connection as { type?: string } | undefined;
    if (connection?.type === 'cellular') {
      return wizard.steps.connection.wifi_assist_cellular_hint;
    }

    return wizard.steps.connection.wifi_assist_wifi_hint;
  }, [
    wizard.steps.connection.wifi_assist_cellular_hint,
    wizard.steps.connection.wifi_assist_wifi_hint,
  ]);

  const updateContact = (id: string, updates: Partial<ContactEntry>) => {
    setContacts((prev) => prev.map((contact) => (contact.id === id ? { ...contact, ...updates } : contact)));
  };

  const handleRoleChange = (id: string, role: ContactRole) => {
    setContacts((prev) =>
      prev.map((contact) => {
        if (contact.id !== id) {
          return contact;
        }
        const defaultProfile = getDefaultProfileForRole(role);
        return {
          ...contact,
          role,
          notificationProfile: defaultProfile,
        };
      }),
    );
  };

  const handleMobileToggle = (id: string, isMobile: boolean) => {
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === id
          ? {
              ...contact,
              isMobile,
              carrier: isMobile ? contact.carrier : 'Unknown',
            }
          : contact,
      ),
    );
  };

  const removeContact = (id: string) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const updateTestStatus = (key: TestKey, status: TestStatus) => {
    setTestResults((prev) => {
      const timestamp = status === 'unchecked' ? undefined : new Date().toISOString();
      return {
        ...prev,
        [key]: {
          status,
          timestamp,
        },
      };
    });
  };

  const stepCount = 6;
  const canMoveNext = () => {
    if (currentStep === 1) {
      return hasUsableContact;
    }
    return true;
  };

  const getNotificationSummary = () => {
    if (!anyNotificationMethodEnabled) {
      return wizard.steps.notifications.none_enabled_note;
    }

    const selections = [
      flags.enableSms && notificationPrefs.sms ? wizard.steps.notifications.sms_label : null,
      flags.enableEmail && notificationPrefs.email ? wizard.steps.notifications.email_label : null,
      flags.enablePush && notificationPrefs.push ? wizard.steps.notifications.push_label : null,
    ].filter(Boolean);

    return selections.length ? selections.join(', ') : 'None selected yet';
  };

  const buildSummaryText = () => {
    const lines = [
      `${wizard.steps.summary.generated_label}: ${summaryGeneratedAt}`,
      '',
      'Test & Verified Results:',
      ...visibleTests.map((test) => {
        const result = testResults[test.key];
        return `- ${test.label}: ${statusLabels[result.status]} (${formatTimestamp(result.timestamp)})`;
      }),
    ];

    return lines.join('\n');
  };

  const buildCertificationEmail = () => {
    const lines = [
      'HALO Setup — System Test & Install Certification',
      '',
      `${wizard.steps.summary.generated_label}: ${new Date().toLocaleString()}`,
      '',
      'Contacts:',
      ...sanitizedContacts.map((contact) => {
        const base = [
          contact.name,
          `Phone: ${contact.phone || 'No phone'}`,
          `Email: ${contact.email || 'No email'}`,
          `Role: ${contact.role}`,
          `Profile: ${contact.notificationProfile}`,
          `Mobile: ${contact.isMobile ? 'Yes' : 'No'}`,
        ];
        if (contact.isMobile) {
          base.push(`Carrier: ${contact.carrier}`);
        }
        return `- ${base.join(' | ')}`;
      }),
      '',
      'Test & Verified Results:',
      ...visibleTests.map((test) => {
        const result = testResults[test.key];
        return `- ${test.label}: ${statusLabels[result.status]} (${formatTimestamp(result.timestamp)})`;
      }),
      '',
      'This certification is informational and reflects user-confirmed Test & Verified steps.',
    ];

    return {
      subject: 'HALO Setup — System Test & Install Certification',
      body: lines.join('\n'),
    };
  };

  const copySummary = async () => {
    await navigator.clipboard.writeText(buildSummaryText());
  };

  const downloadSummaryJson = () => {
    const payload = {
      generatedAt: new Date().toISOString(),
      contacts: sanitizedContacts.map((contact) => ({
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        isMobile: contact.isMobile,
        role: contact.role,
        notificationProfile: contact.notificationProfile,
        carrier: contact.carrier,
      })),
      tests: visibleTests.map((test) => ({
        key: test.key,
        label: test.label,
        status: testResults[test.key].status,
        timestamp: testResults[test.key].timestamp ?? null,
      })),
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'halo-test-summary.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const emailCertification = () => {
    const { subject, body } = buildCertificationEmail();
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    if (currentStep !== 0) {
      setShowPassword(false);
    }
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep === 1) {
      const nextContacts = sanitizeContacts(contacts);
      if (!nextContacts.length) {
        return;
      }
      setContacts(nextContacts);
    }
    setCurrentStep((prev) => Math.min(prev + 1, stepCount - 1));
  };

  return (
    <div className="container section">
      <Seo title={setup.seo.title} description={setup.seo.description} />
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <section style={{ textAlign: 'center' }}>
          <p className="badge" style={{ marginBottom: '0.5rem' }}>
            {setup.badge}
          </p>
          <h2 style={{ margin: 0 }}>{setup.title}</h2>
          <p style={{ maxWidth: 760, margin: '0.75rem auto 0' }}>{setup.intro}</p>
        </section>

        <section className="card" id="start" style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <h3 style={{ marginTop: 0, color: '#fff7e6' }}>{wizard.title}</h3>
            <p style={{ margin: '0.35rem 0 0' }}>{wizard.intro}</p>
          </div>

          <ol style={{ display: 'grid', gap: '0.5rem', paddingLeft: '1.25rem', margin: 0 }}>
            {Object.values(wizard.steps).map((step, index) => (
              <li key={step.title} style={{ fontWeight: currentStep === index ? 600 : 400 }}>
                {step.title}
              </li>
            ))}
          </ol>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
            {currentStep === 0 && (
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <div>
                  <h4 style={{ margin: 0 }}>{wizard.steps.connection.title}</h4>
                  <p style={{ margin: '0.35rem 0 0' }}>{wizard.steps.connection.body}</p>
                  <p style={{ margin: '0.5rem 0 0' }}>{wizard.steps.connection.confirmation_note}</p>
                </div>
                <label style={{ display: 'grid', gap: '0.35rem' }}>
                  <span>{wizard.steps.connection.ssid_label}</span>
                  <input
                    className="input"
                    type="text"
                    value={wifi.ssid}
                    onChange={(event) => setWifi((prev) => ({ ...prev, ssid: event.target.value }))}
                    disabled={wifi.skip}
                  />
                </label>
                <label style={{ display: 'grid', gap: '0.35rem' }}>
                  <span>{wizard.steps.connection.password_label}</span>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input
                      className="input"
                      type={showPassword ? 'text' : 'password'}
                      value={wifi.password}
                      onChange={(event) => setWifi((prev) => ({ ...prev, password: event.target.value }))}
                      disabled={wifi.skip}
                    />
                    <button
                      className="btn"
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      disabled={wifi.skip}
                      aria-pressed={showPassword}
                    >
                      {showPassword ? '🙈' : '👁'}{' '}
                      {showPassword
                        ? wizard.steps.connection.hide_password_label
                        : wizard.steps.connection.show_password_label}
                    </button>
                  </div>
                </label>
                <div
                  style={{
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(15, 23, 42, 0.6)',
                  }}
                >
                  <strong>{wizard.steps.connection.wifi_assist_title}</strong>
                  <p style={{ margin: '0.35rem 0 0' }}>{wizard.steps.connection.wifi_assist_body}</p>
                  {wifiAssistHint && <p style={{ margin: '0.35rem 0 0' }}>{wifiAssistHint}</p>}
                </div>
                <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={wifi.skip}
                    onChange={(event) =>
                      setWifi((prev) => ({
                        ...prev,
                        skip: event.target.checked,
                      }))
                    }
                  />
                  <span>{wizard.steps.connection.skip_label}</span>
                </label>
              </div>
            )}

            {currentStep === 1 && (
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div>
                  <h4 style={{ margin: 0 }}>{wizard.steps.contacts.title}</h4>
                  <p style={{ margin: '0.35rem 0 0' }}>{wizard.steps.contacts.body}</p>
                </div>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {contacts.map((contact) => (
                    <div
                      key={contact.id}
                      style={{
                        display: 'grid',
                        gap: '0.5rem',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <label style={{ display: 'grid', gap: '0.35rem' }}>
                        <span>{wizard.steps.contacts.name_label}</span>
                        <input
                          className="input"
                          type="text"
                          value={contact.name}
                          onChange={(event) => updateContact(contact.id, { name: event.target.value })}
                        />
                      </label>
                      <label style={{ display: 'grid', gap: '0.35rem' }}>
                        <span>{wizard.steps.contacts.phone_label}</span>
                        <input
                          className="input"
                          type="tel"
                          value={contact.phone}
                          onChange={(event) => updateContact(contact.id, { phone: event.target.value })}
                        />
                      </label>
                      <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <input
                          type="checkbox"
                          checked={contact.isMobile}
                          onChange={(event) => handleMobileToggle(contact.id, event.target.checked)}
                        />
                        <span>{wizard.steps.contacts.mobile_label}</span>
                      </label>
                      {contact.isMobile && (
                        <label style={{ display: 'grid', gap: '0.35rem' }}>
                          <span>{wizard.steps.contacts.carrier_label}</span>
                          <select
                            className="input"
                            value={contact.carrier}
                            onChange={(event) =>
                              updateContact(contact.id, { carrier: event.target.value as CarrierOption })
                            }
                          >
                            {wizard.steps.contacts.carrier_options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </label>
                      )}
                      <label style={{ display: 'grid', gap: '0.35rem' }}>
                        <span>{wizard.steps.contacts.email_label}</span>
                        <input
                          className="input"
                          type="email"
                          value={contact.email}
                          onChange={(event) => updateContact(contact.id, { email: event.target.value })}
                        />
                      </label>
                      <label style={{ display: 'grid', gap: '0.35rem' }}>
                        <span>{wizard.steps.contacts.role_label}</span>
                        <select
                          className="input"
                          value={contact.role}
                          onChange={(event) => handleRoleChange(contact.id, event.target.value as ContactRole)}
                        >
                          {wizard.steps.contacts.role_options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label style={{ display: 'grid', gap: '0.35rem' }}>
                        <span>{wizard.steps.contacts.profile_label}</span>
                        <select
                          className="input"
                          value={contact.notificationProfile}
                          onChange={(event) =>
                            updateContact(contact.id, {
                              notificationProfile: event.target.value as NotificationProfile,
                            })
                          }
                        >
                          {wizard.steps.contacts.profile_options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </label>
                      {contacts.length > 1 && (
                        <button className="btn" type="button" onClick={() => removeContact(contact.id)}>
                          {wizard.steps.contacts.remove_button}
                        </button>
                      )}
                    </div>
                  ))}
                  <button className="btn" type="button" onClick={() => setContacts((prev) => [...prev, createContact()])}>
                    {wizard.steps.contacts.add_button}
                  </button>
                  {!hasUsableContact && (
                    <p style={{ margin: 0, color: '#fca5a5' }}>{wizard.steps.contacts.helper}</p>
                  )}
                </div>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  <h5 style={{ margin: 0 }}>{wizard.steps.contacts.addons_title}</h5>
                  <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input
                      type="checkbox"
                      checked={addons.wristWearable}
                      onChange={(event) => setAddons((prev) => ({ ...prev, wristWearable: event.target.checked }))}
                    />
                    <span>{wizard.steps.contacts.wrist_label}</span>
                  </label>
                  <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input
                      type="checkbox"
                      checked={addons.wallButton}
                      onChange={(event) => setAddons((prev) => ({ ...prev, wallButton: event.target.checked }))}
                    />
                    <span>{wizard.steps.contacts.wall_label}</span>
                  </label>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div>
                  <h4 style={{ margin: 0 }}>{wizard.steps.notifications.title}</h4>
                  <p style={{ margin: '0.35rem 0 0' }}>{wizard.steps.notifications.body}</p>
                </div>
                {flags.enableSms && (
                  <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input
                      type="checkbox"
                      checked={notificationPrefs.sms}
                      onChange={(event) =>
                        setNotificationPrefs((prev) => ({
                          ...prev,
                          sms: event.target.checked,
                        }))
                      }
                    />
                    <span>{wizard.steps.notifications.sms_label}</span>
                  </label>
                )}
                {flags.enableEmail && (
                  <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input
                      type="checkbox"
                      checked={notificationPrefs.email}
                      onChange={(event) =>
                        setNotificationPrefs((prev) => ({
                          ...prev,
                          email: event.target.checked,
                        }))
                      }
                    />
                    <span>{wizard.steps.notifications.email_label}</span>
                  </label>
                )}
                {flags.enablePush && (
                  <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input
                      type="checkbox"
                      checked={notificationPrefs.push}
                      onChange={(event) =>
                        setNotificationPrefs((prev) => ({
                          ...prev,
                          push: event.target.checked,
                        }))
                      }
                    />
                    <span>{wizard.steps.notifications.push_label}</span>
                  </label>
                )}
                {!anyNotificationMethodEnabled && (
                  <p style={{ margin: 0 }}>{wizard.steps.notifications.none_enabled_note}</p>
                )}
              </div>
            )}

            {currentStep === 3 && (
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div>
                  <h4 style={{ margin: 0 }}>{wizard.steps.review.title}</h4>
                  <p style={{ margin: '0.35rem 0 0' }}>{wizard.steps.review.body}</p>
                  <p style={{ margin: '0.5rem 0 0' }}>{wizard.steps.review.edit_note}</p>
                </div>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  <div>
                    <strong>{wizard.steps.connection.title}</strong>
                    <p style={{ margin: '0.35rem 0 0' }}>
                      {wifi.skip
                        ? 'Wi-Fi skipped for now.'
                        : `SSID: ${wifi.ssid || 'Not provided'} | Password: ${wifi.password ? 'Provided' : 'Not provided'}`}
                    </p>
                  </div>
                  <div>
                    <strong>{wizard.steps.contacts.title}</strong>
                    <ul style={{ margin: '0.35rem 0 0', paddingLeft: '1rem' }}>
                      {sanitizedContacts.map((contact) => (
                        <li key={contact.id}>
                          <div style={{ display: 'grid', gap: '0.25rem' }}>
                            <span>
                              {contact.name} — {contact.phone || 'No phone'} / {contact.email || 'No email'}
                            </span>
                            <span>
                              {wizard.steps.contacts.role_label}: {contact.role} · {wizard.steps.contacts.profile_label}:{' '}
                              {contact.notificationProfile}
                            </span>
                            <span>
                              {wizard.steps.contacts.mobile_label}: {contact.isMobile ? 'Yes' : 'No'}
                              {contact.isMobile ? ` · ${wizard.steps.contacts.carrier_label}: ${contact.carrier}` : ''}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong>{wizard.steps.notifications.title}</strong>
                    <p style={{ margin: '0.35rem 0 0' }}>{getNotificationSummary()}</p>
                  </div>
                  <div>
                    <strong>{wizard.steps.contacts.addons_title}</strong>
                    <p style={{ margin: '0.35rem 0 0' }}>
                      {addons.wristWearable || addons.wallButton
                        ? [
                            addons.wristWearable ? wizard.steps.contacts.wrist_label : null,
                            addons.wallButton ? wizard.steps.contacts.wall_label : null,
                          ]
                            .filter(Boolean)
                            .join(', ')
                        : 'No add-ons selected'}
                    </p>
                  </div>
                </div>
                <button className="btn btn-primary" type="button" onClick={() => setCurrentStep(4)}>
                  {wizard.steps.review.cta_label}
                </button>
              </div>
            )}

            {currentStep === 4 && (
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div>
                  <h4 style={{ margin: 0 }}>{wizard.steps.test_verified.title}</h4>
                  <p style={{ margin: '0.35rem 0 0' }}>{wizard.steps.test_verified.body}</p>
                  <p style={{ margin: '0.5rem 0 0', color: '#fef9c3' }}>
                    {wizard.steps.test_verified.safety_note}
                  </p>
                </div>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {visibleTests.map((test) => (
                    <div
                      key={test.key}
                      style={{
                        display: 'grid',
                        gap: '0.35rem',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <strong>{test.label}</strong>
                      <label style={{ display: 'grid', gap: '0.35rem' }}>
                        <span>{wizard.steps.test_verified.status_label}</span>
                        <select
                          className="input"
                          value={testResults[test.key].status}
                          onChange={(event) => updateTestStatus(test.key, event.target.value as TestStatus)}
                        >
                          <option value="unchecked">{statusLabels.unchecked}</option>
                          <option value="pass">{statusLabels.pass}</option>
                          <option value="fail">{statusLabels.fail}</option>
                        </select>
                      </label>
                      <div style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>
                        {wizard.steps.test_verified.timestamp_label}: {formatTimestamp(testResults[test.key].timestamp)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div>
                  <h4 style={{ margin: 0 }}>{wizard.steps.summary.title}</h4>
                  <p style={{ margin: '0.35rem 0 0' }}>{wizard.steps.summary.body}</p>
                </div>
                <div style={{ display: 'grid', gap: '0.35rem' }}>
                  <strong>{wizard.steps.summary.generated_label}:</strong>
                  <span>{summaryGeneratedAt}</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1rem', display: 'grid', gap: '0.35rem' }}>
                  {visibleTests.map((test) => (
                    <li key={test.key}>
                      <strong>{test.label}</strong> — {statusLabels[testResults[test.key].status]} ({
                      formatTimestamp(testResults[test.key].timestamp)})
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <button className="btn" type="button" onClick={copySummary}>
                    {wizard.steps.summary.copy_button}
                  </button>
                  <button className="btn" type="button" onClick={downloadSummaryJson}>
                    {wizard.steps.summary.download_button}
                  </button>
                  <button className="btn" type="button" onClick={emailCertification}>
                    {wizard.steps.summary.email_button}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '0.75rem',
              flexWrap: 'wrap',
            }}
          >
            <button
              className="btn"
              type="button"
              onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
              disabled={currentStep === 0}
            >
              {wizard.navigation.back}
            </button>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <span>Step {currentStep + 1} of {stepCount}</span>
            </div>
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleNext}
              disabled={currentStep >= stepCount - 1 || !canMoveNext()}
            >
              {wizard.navigation.next}
            </button>
          </div>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>{setup.after_setup.title}</h3>
          <p>{setup.after_setup.body}</p>
          <Link className="btn btn-primary" to={setup.after_setup.cta.href}>
            {setup.after_setup.cta.label}
          </Link>
        </section>
      </div>
    </div>
  );
};

export default HaloSetup;
