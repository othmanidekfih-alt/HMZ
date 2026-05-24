import { SpotCategory } from '../types';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  spotCounts: { [key: string]: number };
}

export default function CategoryFilter({ selectedCategory, onCategoryChange, spotCounts }: CategoryFilterProps) {
  const categories = [
    { id: 'all', label: 'All Spots', icon: '🗺️', color: 'bg-gray-100 hover:bg-gray-200 text-gray-800' },
    { id: 'nature', label: 'Nature', icon: '🌳', color: 'bg-green-100 hover:bg-green-200 text-green-800' },
    { id: 'viewpoint', label: 'Views', icon: '🏔️', color: 'bg-blue-100 hover:bg-blue-200 text-blue-800' },
    { id: 'sports', label: 'Sports', icon: '⚽', color: 'bg-orange-100 hover:bg-orange-200 text-orange-800' },
    { id: 'activities', label: 'Activities', icon: '🎯', color: 'bg-purple-100 hover:bg-purple-200 text-purple-800' },
  ];

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 mb-4">
      <h2 className="text-sm font-semibold text-gray-600 mb-3 px-2">Filter by Category</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`
              px-4 py-2 rounded-xl font-medium text-sm transition-all
              flex items-center gap-2
              ${selectedCategory === category.id 
                ? `${category.color} ring-2 ring-offset-2 ring-gray-400 scale-105` 
                : `${category.color} opacity-70`
              }
            `}
          >
            <span className="text-lg">{category.icon}</span>
            <span>{category.label}</span>
            <span className="bg-white bg-opacity-50 px-2 py-0.5 rounded-full text-xs font-bold">
              {spotCounts[category.id] || 0}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
