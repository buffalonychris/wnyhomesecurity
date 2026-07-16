import { useState } from 'react';
import { Link } from 'react-router-dom';
import { experienceCategories } from '../../../content/experience/baseline';
import CategoryExplorerItem from './CategoryExplorerItem';

const detailId = 'category-explorer-detail';

const CategoryExplorer = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCategory = experienceCategories[selectedIndex];

  return (
    <section
      id="categories"
      className="experience-section category-explorer"
      aria-labelledby="experience-categories-title"
    >
      <div className="category-explorer__introduction">
        <div>
          <p className="experience-eyebrow">Six concerns · one coordinated property</p>
          <h2 id="experience-categories-title">How can this property help with what matters to me?</h2>
        </div>
        <p>
          Each category is a different way into the same Smart Property Experience. Choose one to
          connect a concern with practical outcomes and representative property zones.
        </p>
      </div>

      <div className="category-explorer__layout">
        <ol className="category-explorer__list" aria-label="Smart property categories">
          {experienceCategories.map((category, index) => (
            <CategoryExplorerItem
              key={category.slug}
              category={category}
              index={index}
              isSelected={selectedIndex === index}
              onSelect={() => setSelectedIndex(index)}
              controlsId={detailId}
            />
          ))}
        </ol>

        <article
          id={detailId}
          className="category-explorer__detail"
          aria-live="polite"
          aria-labelledby={`${selectedCategory.slug}-detail-title`}
        >
          <div className="category-explorer__detail-heading">
            <p>Selected category</p>
            <h3 id={`${selectedCategory.slug}-detail-title`}>{selectedCategory.name}</h3>
          </div>

          <dl className="category-explorer__story">
            <div>
              <dt>What may matter</dt>
              <dd>{selectedCategory.concern}</dd>
            </div>
            <div>
              <dt>Practical property outcome</dt>
              <dd>{selectedCategory.outcome}</dd>
            </div>
          </dl>

          <div className="category-explorer__zones">
            <p>Representative property zones</p>
            <ul>
              {selectedCategory.zones.map((zone) => (
                <li key={zone}>{zone}</li>
              ))}
            </ul>
          </div>

          <Link className="category-explorer__link" to={selectedCategory.route}>
            Explore {selectedCategory.name}
          </Link>
        </article>
      </div>
    </section>
  );
};

export default CategoryExplorer;
