'use client';

import BlogCard from './BlogCard';
import Categories from './Categories';

async function fetchCategories() {
  try {
    const response = await fetch('http://localhost:8000/api/v2/categories/', {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }

    const data = await response.json();
    return data.items; // Adjust based on your API response structure
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function BlogIndexPage({ index, posts }) {
  const categories = await fetchCategories();
  return (
    <main className="bg-light_gray px-36 py-20">
      {index && (
        <div className="mb-8">
          <h1 className="text-6xl text-black">
            {index.title} <br />{' '}
            <span className="text-blue_violet font-semibold">
              Accessible & best SEO <br /> practices
            </span>
          </h1>
          <div dangerouslySetInnerHTML={{ __html: index.introduction }}></div>
        </div>
      )}
      <div className="flex flex-row justify-between mt-24">
        <Categories categories={categories} />
        <div className="flex flex-row flex-wrap gap-8 w-[45vw]">
          {posts.length > 0 ? (
            posts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                publication_date={post.publication_date}
                introduction={post.introduction}
                category={post.category?.name}
                authors={post.authors}
              />
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>
    </main>
  );
}
