import React from 'react';
import BlogCard from '../BlogIndexPage/BlogCard';

const LatestBlogs = () => {
  return (
    <div className="bg-[#E2DCF2] md:pl-36 px-6 md:px-0 md:py-16 py-6 md:pt-16 pt-6">
      <h2 className="text-black md:text-3xl text-2xl font-semibold md:mb-16 mb-6">
        Our Latest Blogs
      </h2>
      <div className="flex md:flex-row flex-col flex-wrap md:gap-12 gap-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default LatestBlogs;
