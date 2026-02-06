import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { haloContent } from '../lib/haloContent';
import { getHaloFeatureFlags } from '../lib/haloFlags';

const HaloSupport = () => {
  const { support } = haloContent;
  const featureFlags = getHaloFeatureFlags();
  const topicFlags = new Map<string, boolean>([
    ['SMS not delivered', featureFlags.enableSms],
    ['Email not delivered', featureFlags.enableEmail],
    ['App notifications not delivered', featureFlags.enablePush],
    ['Voice check failed', featureFlags.enableTwoWayVoiceClaim],
  ]);
  const troubleshootingTopics = support.troubleshooting.topics.filter((topic) => {
    if (!topicFlags.has(topic)) {
      return true;
    }
    return topicFlags.get(topic) === true;
  });
  return (
    <div className="container section">
      <Seo title={support.seo.title} description={support.seo.description} />
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <section style={{ textAlign: 'center' }}>
          <p className="badge" style={{ marginBottom: '0.5rem' }}>
            {support.badge}
          </p>
          <h2 style={{ margin: 0 }}>{support.title}</h2>
          <p style={{ maxWidth: 760, margin: '0.75rem auto 0' }}>
            {support.intro}
          </p>
        </section>

        <section className="card" aria-labelledby="support-tiles">
          <h3 id="support-tiles" style={{ marginTop: 0, color: '#fff7e6' }}>
            {support.tiles_title}
          </h3>
          <div className="card-grid">
            {support.tiles.map((tile) => (
              <div className="card" key={tile.title}>
                <h4 style={{ marginTop: 0, color: '#fff7e6' }}>{tile.title}</h4>
                <p>{tile.body}</p>
                {tile.isExternal ? (
                  <a className="btn btn-primary" href={tile.href}>
                    View steps
                  </a>
                ) : (
                  <Link className="btn btn-primary" to={tile.href}>
                    View steps
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="card" id="troubleshooting">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>{support.troubleshooting.title}</h3>
          <ul className="list">
            {troubleshootingTopics.map((topic) => (
              <li key={topic}>
                <span />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: '1rem' }}>
            {support.troubleshooting.note}
          </p>
        </section>
      </div>
    </div>
  );
};

export default HaloSupport;
