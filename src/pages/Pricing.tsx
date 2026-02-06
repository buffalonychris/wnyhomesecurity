import { Link } from 'react-router-dom';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import ChartCard from '../components/operator/ChartCard';
import SectionHeader from '../components/operator/SectionHeader';
import SpaceFrame from '../components/operator/SpaceFrame';

const volumeFit = [
  { range: '0-200', starter: 1, pro: 0 },
  { range: '201-500', starter: 0.6, pro: 0.4 },
  { range: '501-900', starter: 0.3, pro: 0.7 },
  { range: '900+', starter: 0.1, pro: 0.9 },
];

const Pricing = () => (
  <div className="space-shell">
    <div className="container section space-grid">
      <SectionHeader
        kicker="Pricing"
        title="Simple plans for estimate scheduling"
        subtitle="Pick the tier that matches your call volume and team structure. No auto-billing without explicit consent."
      />

      <ChartCard title="Which plan fits your volume" subtitle="Illustrative fit by monthly call minutes">
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={volumeFit} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
            <CartesianGrid stroke="rgba(148, 163, 184, 0.15)" strokeDasharray="3 3" />
            <XAxis dataKey="range" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                background: 'rgba(15, 23, 42, 0.95)',
                borderColor: 'rgba(125, 211, 252, 0.35)',
                color: '#e2e8f0',
              }}
            />
            <Bar dataKey="starter" fill="#38bdf8" radius={[6, 6, 0, 0]} />
            <Bar dataKey="pro" fill="#a3e635" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <section className="space-grid three-column" aria-label="Pricing tiers">
        <SpaceFrame>
          <h2>Starter Plan</h2>
          <p>$299 / month</p>
          <ul className="operator-list">
            <li>Up to 300 voice minutes</li>
            <li>24/7 call + text answering</li>
            <li>Calendar booking</li>
            <li>Confirmations &amp; reminders</li>
            <li>Operator console + audit trail</li>
          </ul>
          <Link className="btn btn-primary" to="/5-day-demo">
            Purchase / Start Plan
          </Link>
        </SpaceFrame>

        <SpaceFrame>
          <h2>Pro Plan</h2>
          <p>Price: Request</p>
          <ul className="operator-list">
            <li>Multiple calendars / techs</li>
            <li>Advanced rules</li>
            <li>Higher minute bundles</li>
            <li>Priority onboarding</li>
          </ul>
          <a className="btn btn-secondary" href="#pro-request">
            Request Pro Pricing
          </a>
        </SpaceFrame>

        <SpaceFrame>
          <h2>Partner / White-Label</h2>
          <p>CTA: Become a Partner</p>
          <p>Offer the assistant under your brand with co-branded materials and recurring margin.</p>
          <Link className="btn btn-primary" to="/partners">
            Become a Partner
          </Link>
        </SpaceFrame>
      </section>

      <SpaceFrame as="section" id="pro-request">
        <h2>Request Pro Pricing</h2>
        <p>Tell us about your team and scheduling volume and we will follow up with a tailored plan.</p>
        <form className="form" style={{ maxWidth: '520px' }}>
          <label>
            Name
            <input type="text" placeholder="Your name" required />
          </label>
          <label>
            Company
            <input type="text" placeholder="Company name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@company.com" required />
          </label>
          <label>
            Scheduling needs
            <textarea placeholder="Calendars, techs, and volume details" rows={4} />
          </label>
          <small style={{ color: '#c8c0aa' }}>
            We will contact you with pricing options. No auto-billing or implied purchase.
          </small>
          <button className="btn btn-primary" type="button">
            Request Pro Pricing
          </button>
        </form>
        <div style={{ marginTop: '1rem' }}>
          <Link className="btn btn-secondary" to="/support">
            Contact Support
          </Link>
        </div>
      </SpaceFrame>
    </div>
  </div>
);

export default Pricing;
