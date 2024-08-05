import React from 'react';
import BlogCard from '../BlogIndexPage/BlogCard';

const RelatedBlogs = () => {
  return (
    <div className="bg-[#EEEDEF] pl-36 py-16 mt-10">
      <h2 className="text-black text-3xl font-semibold mb-10">Related Blogs</h2>
      <div className="flex flex-row flex-wrap gap-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default RelatedBlogs;
