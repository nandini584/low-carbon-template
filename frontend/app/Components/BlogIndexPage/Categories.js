import React from 'react';
import Category from './Category';

const Categories = () => {
  return (
    <nav className="w-[30vw]" aria-labelledby="categories-heading">
      <h5
        className="text-gray-700 text-lg font-semibold mb-5"
        id="categories-heading"
      >
        Categories
      </h5>
      <div className="flex flex-row gap-4 flex-wrap">
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
      <Category />
    </nav>
  );
};

export default Categories;
