// app/Components/Categories.tsx (or .js)
'use client'; // Ensure this is a client component

import React from 'react';
import Category from './Category';

const Categories = ({ categories }) => {
  return (
    <nav className="md:w-[30vw]" aria-labelledby="categories-heading">
      <h5
        className="text-gray-700 md:text-lg font-semibold mb-5"
        id="categories-heading"
      >
        Categories
      </h5>
      <div className="flex flex-row md:gap-4 flex-wrap">
        {categories.length > 0 ? (
          categories.map((category) => (
            <Category key={category.id} name={category.name} />
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </nav>
  );
};

export default Categories;
