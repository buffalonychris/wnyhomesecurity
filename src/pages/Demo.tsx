import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import ChartCard from '../components/operator/ChartCard';
import KpiTile from '../components/operator/KpiTile';
import SectionHeader from '../components/operator/SectionHeader';
import SpaceFrame from '../components/operator/SpaceFrame';

type QuizState = {
  trade: string;
  calendar: string;
  crm: string;
  missedCalls: string;
  estimatesPerMonth: string;
  averageJobValue: string;
};

const missedCallFactor: Record<string, number> = {
  '0-5': 0.05,
  '6-15': 0.1,
  '16-30': 0.2,
  '31+': 0.3,
};

const Demo = () => {
  const [quiz, setQuiz] = useState<QuizState>({
    trade: '',
    calendar: '',
    crm: '',
    missedCalls: '',
    estimatesPerMonth: '',
    averageJobValue: '',
  });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState<'quiz' | 'dashboard'>('quiz');

  const isQuizComplete = Boolean(
    quiz.trade &&
      quiz.calendar &&
      quiz.missedCalls &&
      quiz.estimatesPerMonth &&
      quiz.averageJobValue,
  );

  const estimateMetrics = useMemo(() => {
    const estimates = Number(quiz.estimatesPerMonth || 0);
    const avgValue = Number(quiz.averageJobValue || 0);
    const factor = missedCallFactor[quiz.missedCalls] ?? 0.1;
    const roi = estimates * avgValue * factor;
    const roiRange =
      roi > 0
        ? `$${Math.round(roi * 0.8).toLocaleString()} - $${Math.round(roi * 1.2).toLocaleString()}`
        : 'Complete the quiz to see an example range.';
    const level = roi >= 5000 ? 'high' : 'low';
    return {
      roiRange,
      level,
      bookedToday: estimates > 0 ? Math.max(1, Math.round(estimates / 30)) : 0,
      bookedYesterday: estimates > 0 ? Math.max(1, Math.round(estimates / 28)) : 0,
      afterHoursCaptured: estimates > 0 ? Math.max(1, Math.round(estimates * factor)) : 0,
      escalations: estimates > 0 ? Math.max(1, Math.round(estimates * 0.05)) : 0,
    };
  }, [quiz]);

  const demoTrend = useMemo(() => {
    const baseTrend = [8, 12, 11, 15, 14];
    const factor = missedCallFactor[quiz.missedCalls] ?? 0.1;
    const estimates = Number(quiz.estimatesPerMonth || 0);
    const scale = estimates > 0 ? Math.max(1, Math.round((estimates * factor) / 10)) : 1;
    return baseTrend.map((value, index) => ({
      week: `W${index + 1}`,
      captured: Math.max(1, Math.round(value * scale)),
    }));
  }, [quiz.estimatesPerMonth, quiz.missedCalls]);

  const tradeLabel = quiz.trade ? quiz.trade.charAt(0).toUpperCase() + quiz.trade.slice(1) : 'General contractor';
  const calendarLabel =
    quiz.calendar === 'google'
      ? 'Google Calendar'
      : quiz.calendar === 'apple'
        ? 'Apple Calendar'
        : quiz.calendar === 'outlook'
          ? 'Outlook / Office 365'
          : quiz.calendar || 'Calendar pending';
  const crmLabel =
    quiz.crm === 'jobber'
      ? 'Jobber'
      : quiz.crm === 'servicetitan'
        ? 'ServiceTitan'
        : quiz.crm === 'salesforce'
          ? 'Salesforce'
          : quiz.crm === 'hubspot'
            ? 'HubSpot'
            : quiz.crm || 'None selected';

  const profile = {
    trade: tradeLabel,
    calendar: calendarLabel,
    crm: crmLabel,
    missedCalls: quiz.missedCalls || 'Range not selected',
    estimatesPerMonth: quiz.estimatesPerMonth || '—',
    averageJobValue: quiz.averageJobValue || '—',
  };

  const handleChange = (field: keyof QuizState) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setQuiz((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleMailingListSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const handleViewDemo = () => {
    setStep('dashboard');
    requestAnimationFrame(() => {
      document.getElementById('demo-dashboard')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <div className="space-shell">
      <div className="container section space-grid">
        <SectionHeader
          kicker="Interactive Demo"
          title="QuickFit Quiz (30–60 seconds)"
          subtitle="Tell us a little about your estimate flow and see a personalized preview of the assistant in action."
        />

        <SpaceFrame>
          <div className="form">
            <label>
              Trade
              <select value={quiz.trade} onChange={handleChange('trade')}>
                <option value="">Select your trade</option>
                <option value="plumbing">Plumbing</option>
                <option value="hvac">HVAC</option>
                <option value="electrical">Electrical</option>
                <option value="remodeling">Remodeling</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              Calendar type
              <select value={quiz.calendar} onChange={handleChange('calendar')}>
                <option value="">Select a calendar</option>
                <option value="google">Google Calendar</option>
                <option value="apple">Apple Calendar</option>
                <option value="outlook">Outlook / Office 365</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              CRM (optional)
              <select value={quiz.crm} onChange={handleChange('crm')}>
                <option value="">None / Not sure</option>
                <option value="jobber">Jobber</option>
                <option value="servicetitan">ServiceTitan</option>
                <option value="salesforce">Salesforce</option>
                <option value="hubspot">HubSpot</option>
              </select>
            </label>
            <label>
              Missed call frequency
              <select value={quiz.missedCalls} onChange={handleChange('missedCalls')}>
                <option value="">Select range</option>
                <option value="0-5">0-5 per week</option>
                <option value="6-15">6-15 per week</option>
                <option value="16-30">16-30 per week</option>
                <option value="31+">31+ per week</option>
              </select>
            </label>
            <label>
              Estimates per month
              <input
                type="number"
                min="0"
                value={quiz.estimatesPerMonth}
                onChange={handleChange('estimatesPerMonth')}
                placeholder="e.g. 40"
              />
            </label>
            <label>
              Average job value
              <input
                type="number"
                min="0"
                value={quiz.averageJobValue}
                onChange={handleChange('averageJobValue')}
                placeholder="e.g. 2500"
              />
            </label>
          </div>
        </SpaceFrame>

        <div className="space-grid two-column">
          <SpaceFrame>
            <h2>Profile summary</h2>
            <ul className="operator-list">
              <li>Trade focus: {profile.trade}</li>
              <li>Calendar: {profile.calendar}</li>
              <li>CRM: {profile.crm}</li>
              <li>Missed calls: {profile.missedCalls}</li>
              <li>Estimates per month: {profile.estimatesPerMonth}</li>
              <li>Average job value: {profile.averageJobValue}</li>
            </ul>
            <small className="chart-helper">Example / demo data for illustration only.</small>
          </SpaceFrame>

          <ChartCard title="After-hours capture trend" subtitle="Example trend based on similar profiles">
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={demoTrend} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="rgba(148, 163, 184, 0.15)" strokeDasharray="3 3" />
                <XAxis dataKey="week" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(15, 23, 42, 0.95)',
                    borderColor: 'rgba(125, 211, 252, 0.35)',
                    color: '#e2e8f0',
                  }}
                />
                <Area type="monotone" dataKey="captured" stroke="#38bdf8" fill="rgba(56, 189, 248, 0.25)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <SpaceFrame>
          <h2>Ready to reveal your demo dashboard?</h2>
          <p>
            Complete the required fields to unlock a personalized preview. This dashboard is illustrative and
            uses example data only.
          </p>
          <div className="space-section-actions">
            {isQuizComplete ? (
              <button className="btn btn-primary" type="button" onClick={handleViewDemo}>
                View Demo
              </button>
            ) : (
              <span className="chart-helper">Finish the required questions to unlock the demo dashboard.</span>
            )}
          </div>
        </SpaceFrame>

        {step === 'dashboard' && (
          <SpaceFrame id="demo-dashboard">
            <h2>Personalized Owner Dashboard Preview</h2>
            <p className="chart-helper" style={{ marginTop: '0.35rem' }}>
              Example / demo data based on your inputs. No guarantees or promises implied.
            </p>
            <div className="space-grid three-column" style={{ marginTop: '1rem' }}>
              <KpiTile label="Estimates booked (today)" value={estimateMetrics.bookedToday} footer="Example / demo data" />
              <KpiTile
                label="Estimates booked (yesterday)"
                value={estimateMetrics.bookedYesterday}
                footer="Example / demo data"
              />
              <KpiTile
                label="After-hours calls captured"
                value={estimateMetrics.afterHoursCaptured}
                footer="Example / demo data"
              />
              <KpiTile label="Escalations" value={estimateMetrics.escalations} footer="Example / demo data" />
              <KpiTile
                label="Estimated ROI range (example)"
                value={estimateMetrics.roiRange}
                footer="Example / demo data"
              />
            </div>
            <div className="space-grid two-column" style={{ marginTop: '1.5rem' }}>
              <SpaceFrame>
                <h3>Profile inputs applied</h3>
                <ul className="operator-list">
                  <li>Trade focus: {profile.trade}</li>
                  <li>Calendar sync: {profile.calendar}</li>
                  <li>CRM: {profile.crm}</li>
                </ul>
                <small className="chart-helper">Example / demo data for illustration only.</small>
              </SpaceFrame>
              <ChartCard title="Captured request trend" subtitle={`${profile.trade} example volume`}>
                <ResponsiveContainer width="100%" height={240}>
                  <AreaChart data={demoTrend} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="rgba(148, 163, 184, 0.15)" strokeDasharray="3 3" />
                    <XAxis dataKey="week" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        background: 'rgba(15, 23, 42, 0.95)',
                        borderColor: 'rgba(125, 211, 252, 0.35)',
                        color: '#e2e8f0',
                      }}
                    />
                    <Area type="monotone" dataKey="captured" stroke="#38bdf8" fill="rgba(56, 189, 248, 0.25)" />
                  </AreaChart>
                </ResponsiveContainer>
                <small className="chart-helper">Example / demo data</small>
              </ChartCard>
            </div>
          </SpaceFrame>
        )}

        <SpaceFrame>
          <h2>Next steps</h2>
          {estimateMetrics.level === 'high' ? (
            <div className="space-grid">
              <p>
                Your inputs indicate a strong fit. Book a demo or start a pilot to see the assistant live.
              </p>
              <div className="space-section-actions">
                <Link className="btn btn-primary" to="/5-day-demo">
                  Book Demo / Start Pilot
                </Link>
                <Link className="btn btn-secondary" to="/pricing">
                  View Pricing
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-grid">
              <p>
                Your inputs suggest a lighter ROI right now. Review pricing or stay in the loop as you grow.
              </p>
              <div className="space-section-actions">
                <Link className="btn btn-primary" to="/pricing">
                  See Pricing
                </Link>
                <a className="btn btn-secondary" href="#mailing-list">
                  Join Mailing List
                </a>
              </div>
            </div>
          )}
        </SpaceFrame>

        <SpaceFrame as="section" id="mailing-list">
          <h2>Join the mailing list</h2>
          <p>Get product updates, demo availability, and launch notes. No spam, and you can opt out anytime.</p>
          <form onSubmit={handleMailingListSubmit} className="form" style={{ maxWidth: '420px' }}>
            <label>
              Email address
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubmitted(false);
                }}
                placeholder="you@company.com"
                required
              />
            </label>
            <small style={{ color: '#c8c0aa' }}>
              By submitting, you agree to receive emails about the estimate scheduling assistant. We do not auto-
              enroll you in paid plans.
            </small>
            <button className="btn btn-primary" type="submit">
              Join Mailing List
            </button>
            {submitted && <small style={{ color: '#7dd3fc' }}>Thanks — you are on the list.</small>}
          </form>
        </SpaceFrame>
      </div>
    </div>
  );
};

export default Demo;
