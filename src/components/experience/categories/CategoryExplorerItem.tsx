import type { ExperienceCategory } from '../../../content/experience/baseline';

type CategoryExplorerItemProps = {
  category: ExperienceCategory;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
  controlsId: string;
};

const CategoryExplorerItem = ({
  category,
  index,
  isSelected,
  onSelect,
  controlsId,
}: CategoryExplorerItemProps) => (
  <li className="category-explorer-item">
    <button
      className="category-explorer-item__control"
      type="button"
      aria-pressed={isSelected}
      aria-controls={controlsId}
      onClick={onSelect}
      onFocus={onSelect}
    >
      <span className="category-explorer-item__index" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="category-explorer-item__name">{category.name}</span>
      <span className="category-explorer-item__state">
        {isSelected ? 'Selected' : 'Explore'}
      </span>
    </button>
  </li>
);

export default CategoryExplorerItem;
