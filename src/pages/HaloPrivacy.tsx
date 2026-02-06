import Seo from '../components/Seo';
import { haloContent } from '../lib/haloContent';

const HaloPrivacy = () => {
  const { privacy } = haloContent;
  return (
    <div className="container section">
      <Seo title={privacy.seo.title} description={privacy.seo.description} />
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <section style={{ textAlign: 'center' }}>
          <p className="badge" style={{ marginBottom: '0.5rem' }}>
            {privacy.badge}
          </p>
          <h2 style={{ margin: 0 }}>{privacy.title}</h2>
        </section>

        {privacy.body_blocks.map((block) => (
          <section className="card" key={block.title}>
            <h3 style={{ marginTop: 0, color: '#fff7e6' }}>{block.title}</h3>
            <p>{block.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HaloPrivacy;
