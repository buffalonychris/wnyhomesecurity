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
import KpiTile from '../components/operator/KpiTile';
import SectionHeader from '../components/operator/SectionHeader';
import SpaceFrame from '../components/operator/SpaceFrame';

const captureData = [
  { week: 'W1', captured: 44, missed: 8 },
  { week: 'W2', captured: 52, missed: 6 },
  { week: 'W3', captured: 48, missed: 7 },
  { week: 'W4', captured: 57, missed: 5 },
];

const NeverMissAnotherEstimate = () => (
  <div className="space-shell">
    <div className="container section space-grid">
      <SectionHeader
        kicker="Never Miss Another Estimate"
        title="Never Miss Another Estimate — 24/7 Estimate Scheduling Assistant"
        subtitle="A scheduling-only assistant that captures estimate requests, collects the essentials, and books the appointment directly on your calendar."
        actions={
          <>
            <Link className="btn btn-primary" to="/demo">
              See a Live Demo
            </Link>
            <Link className="btn btn-secondary" to="/pricing">
              View Pricing
            </Link>
            <Link className="btn" to="/5-day-demo">
              Start Free 5-Day Demo
            </Link>
            <Link className="btn" to="/partners">
              Become a Partner
            </Link>
          </>
        }
      />

      <div className="space-grid three-column">
        <KpiTile label="Example weekly requests" value="57" footer="Example / demo data" />
        <KpiTile label="Booked estimates" value="41" footer="Example / demo data" />
        <KpiTile label="After-hours captured" value="12" footer="Example / demo data" />
      </div>

      <ChartCard title="Request capture overview" subtitle="Captured vs. missed requests">
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={captureData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
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
            <Bar dataKey="captured" fill="#38bdf8" radius={[6, 6, 0, 0]} />
            <Bar dataKey="missed" fill="#f97316" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <SpaceFrame>
        <h2>Trust &amp; safety expectations</h2>
        <p>
          This assistant is scheduling-only. It does not provide pricing, guarantees, promises, emergency handling,
          or staff replacement.
        </p>
        <ul className="operator-list">
          <li>No pricing, guarantees, or promises are given by the assistant.</li>
          <li>No emergency diagnosis or emergency response.</li>
          <li>No staff replacement — it supports your team by capturing and scheduling.</li>
          <li>Scheduling-only role with clear audit trails for every interaction.</li>
        </ul>
      </SpaceFrame>

      <div className="space-grid two-column">
        <SpaceFrame>
          <h2>What it does</h2>
          <ul className="operator-list">
            <li>Answers calls and texts 24/7 to capture estimate requests.</li>
            <li>Asks only the required questions to schedule an estimate.</li>
            <li>Books the appointment on your calendar and confirms with the customer.</li>
            <li>Logs the interaction in an operator console for review.</li>
          </ul>
        </SpaceFrame>
        <SpaceFrame>
          <h2>What it will NOT do</h2>
          <ul className="operator-list">
            <li>No pricing</li>
            <li>No guarantees</li>
            <li>No emergency diagnosis</li>
            <li>No staff replacement</li>
          </ul>
        </SpaceFrame>
      </div>

      <SpaceFrame>
        <h2>Compatibility</h2>
        <p>
          Works with iPhone &amp; Android, Google Calendar, Apple Calendar, Outlook / Office 365, and is
          CRM-friendly (Jobber, ServiceTitan, Salesforce, HubSpot).
        </p>
      </SpaceFrame>
    </div>
  </div>
);

export default NeverMissAnotherEstimate;
