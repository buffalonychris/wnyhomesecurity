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
import SectionHeader from '../components/operator/SectionHeader';
import SpaceFrame from '../components/operator/SpaceFrame';

const pipelineData = [
  { month: 'Jan', accounts: 6 },
  { month: 'Feb', accounts: 9 },
  { month: 'Mar', accounts: 12 },
  { month: 'Apr', accounts: 14 },
  { month: 'May', accounts: 18 },
];

const Partners = () => (
  <div className="space-shell">
    <div className="container section space-grid">
      <SectionHeader
        kicker="Partner Program"
        title="Partner with the estimate scheduling assistant"
        subtitle="Grow recurring revenue by offering a scheduling-only assistant that captures estimate requests 24/7."
      />

      <ChartCard title="Example partner pipeline" subtitle="Illustrative recurring accounts">
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={pipelineData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="rgba(148, 163, 184, 0.15)" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                background: 'rgba(15, 23, 42, 0.95)',
                borderColor: 'rgba(125, 211, 252, 0.35)',
                color: '#e2e8f0',
              }}
            />
            <Area type="monotone" dataKey="accounts" stroke="#a3e635" fill="rgba(163, 230, 53, 0.2)" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <SpaceFrame>
        <h2>Who it&apos;s for</h2>
        <p>IT providers, MSPs, agencies, and telecom partners.</p>
      </SpaceFrame>

      <SpaceFrame>
        <h2>What partners get</h2>
        <ul className="operator-list">
          <li>Recurring margin</li>
          <li>Co-branded materials</li>
          <li>Demo scripts</li>
          <li>Onboarding checklist</li>
        </ul>
      </SpaceFrame>

      <SpaceFrame>
        <h2>Apply to Partner Program</h2>
        <form className="form" style={{ maxWidth: '520px' }}>
          <label>
            Name
            <input type="text" placeholder="Your name" required />
          </label>
          <label>
            Company
            <input type="text" placeholder="Company" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@company.com" required />
          </label>
          <label>
            Partner type
            <select required>
              <option value="">Select</option>
              <option value="it">IT Provider</option>
              <option value="msp">MSP</option>
              <option value="agency">Agency</option>
              <option value="telecom">Telecom</option>
            </select>
          </label>
          <label>
            Message
            <textarea placeholder="Tell us about your clients and goals" rows={4} />
          </label>
          <button className="btn btn-primary" type="submit">
            Apply to Partner Program
          </button>
        </form>
      </SpaceFrame>
    </div>
  </div>
);

export default Partners;
