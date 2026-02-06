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
import SectionHeader from '../components/operator/SectionHeader';
import SpaceFrame from '../components/operator/SpaceFrame';

const demoTimeline = [
  { day: 'Day 1', activity: 2 },
  { day: 'Day 2', activity: 4 },
  { day: 'Day 3', activity: 5 },
  { day: 'Day 4', activity: 6 },
  { day: 'Day 5', activity: 7 },
];

const FiveDayDemo = () => (
  <div className="space-shell">
    <div className="container section space-grid">
      <SectionHeader
        kicker="Free 5-Day Live Demo"
        title="Start a Free 5-Day Live Demo (We Pay for It)"
        subtitle="Experience a live scheduling assistant capturing estimate requests with real calendar booking."
      />

      <ChartCard title="5-day demo timeline" subtitle="Illustrative activity ramp">
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={demoTimeline} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="rgba(148, 163, 184, 0.15)" strokeDasharray="3 3" />
            <XAxis dataKey="day" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                background: 'rgba(15, 23, 42, 0.95)',
                borderColor: 'rgba(125, 211, 252, 0.35)',
                color: '#e2e8f0',
              }}
            />
            <Area type="monotone" dataKey="activity" stroke="#38bdf8" fill="rgba(56, 189, 248, 0.25)" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <SpaceFrame>
        <h2>Offer details</h2>
        <p>
          We cover the cost of the assistant for five days so you can evaluate real call handling and scheduling.
        </p>
        <ul className="operator-list">
          <li>No auto-billing.</li>
          <li>Demo expires after Day 5.</li>
          <li>Read-only dashboard after expiration.</li>
          <li>No pricing, guarantees, or promises are given by the assistant.</li>
        </ul>
        <div className="space-section-actions">
          <Link className="btn btn-primary" to="/demo">
            Start Free 5-Day Demo (Paid for by Us)
          </Link>
        </div>
      </SpaceFrame>

      <SpaceFrame>
        <h2>What happens next</h2>
        <p>
          We confirm your call routing, calendar access, and estimate requirements. You stay in control of every
          appointment.
        </p>
        <div className="space-section-actions">
          <Link className="btn btn-secondary" to="/demo">
            Review Live Demo
          </Link>
          <Link className="btn" to="/pricing">
            View Pricing
          </Link>
        </div>
      </SpaceFrame>
    </div>
  </div>
);

export default FiveDayDemo;
