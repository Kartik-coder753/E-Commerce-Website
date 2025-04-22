import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { categories } from '../../data/categories';

interface CategoryFilterProps {
  onSelectCategory: (category: string) => void;
  selectedCategory?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  onSelectCategory, 
  selectedCategory 
}) => {
  const location = useLocation();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Categories</h3>
      
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => onSelectCategory('')}
            className={`w-full text-left px-3 py-2 rounded transition-colors ${
              !selectedCategory ? 'bg-purple-100 text-purple-700 font-medium' : 'hover:bg-gray-100'
            }`}
          >
            All Products
          </button>
        </li>
        
        {categories.map(category => (
          <li key={category.id}>
            <button
              onClick={() => onSelectCategory(category.name)}
              className={`w-full text-left px-3 py-2 rounded transition-colors flex justify-between items-center ${
                selectedCategory === category.name 
                  ? 'bg-purple-100 text-purple-700 font-medium' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <span>{category.name}</span>
              <span className="text-xs bg-gray-200 text-gray-700 rounded-full px-2 py-1">
                {category.count}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;