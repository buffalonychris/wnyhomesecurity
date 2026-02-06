import { Link } from 'react-router-dom';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import ChartCard from '../components/operator/ChartCard';
import KpiTile from '../components/operator/KpiTile';
import Pill from '../components/operator/Pill';
import SectionHeader from '../components/operator/SectionHeader';
import SpaceFrame from '../components/operator/SpaceFrame';

const outcomeData = [
  { day: 'Mon', scheduled: 14, missed: 2, escalated: 1 },
  { day: 'Tue', scheduled: 18, missed: 3, escalated: 2 },
  { day: 'Wed', scheduled: 16, missed: 2, escalated: 1 },
  { day: 'Thu', scheduled: 21, missed: 3, escalated: 2 },
  { day: 'Fri', scheduled: 19, missed: 2, escalated: 2 },
];

const revenueData = [
  { week: 'W1', value: 18000 },
  { week: 'W2', value: 22500 },
  { week: 'W3', value: 21000 },
  { week: 'W4', value: 26000 },
  { week: 'W5', value: 24000 },
];

const Operator = () => {
  return (
    <div className="space-shell">
      <div className="container section space-grid">
        <SectionHeader
          kicker="Solution"
          title="Operator Console"
          subtitle="A space-tablet command center that tracks every estimate request, follow-up, and booking across your team."
          actions={
            <Link className="btn btn-primary" to="/demo">
              See a Live Demo
            </Link>
          }
        />

        <div className="space-grid three-column">
          <KpiTile label="Live conversations" value="18" trend="Example / demo data" />
          <KpiTile label="Bookings confirmed" value="42" trend="Example / demo data" />
          <KpiTile label="Escalations" value="6" trend="Example / demo data" />
        </div>

        <div className="space-grid two-column">
          <ChartCard title="Outcome mix" subtitle="Scheduled vs. missed vs. escalated">
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={outcomeData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
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
                <Legend />
                <Bar dataKey="scheduled" stackId="a" fill="#38bdf8" />
                <Bar dataKey="missed" stackId="a" fill="#f97316" />
                <Bar dataKey="escalated" stackId="a" fill="#a3e635" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Estimated earnings trend" subtitle="Illustrative booking value">
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={revenueData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
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
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#38bdf8"
                  fill="rgba(56, 189, 248, 0.25)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <SpaceFrame>
          <h2>Operator highlights</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Pill>Chrome-inspired UI</Pill>
            <Pill>Real-time audit trail</Pill>
            <Pill>Team escalations</Pill>
            <Pill>Calendar routing</Pill>
          </div>
          <ul className="operator-list" style={{ marginTop: '1rem' }}>
            <li>Review every call, transcript, and booking from one console.</li>
            <li>Adjust scheduling rules without changing your phone system.</li>
            <li>Stay compliant with clear “no pricing or guarantees” guardrails.</li>
          </ul>
        </SpaceFrame>
      </div>
    </div>
  );
};

export default Operator;
