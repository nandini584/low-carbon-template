import Image from 'next/image';
import BlogCard from './BlogCard';
import Categories from './Categories';

export default function BlogIndexPage() {
  return (
    <main className="bg-light_gray lg:px-36 px-6 lg:py-20 py-5">
      <h1 className="lg:text-6xl text-2xl text-black">
        Sustainability Web Designs <br />{' '}
        <span className="text-blue_violet font-semibold">
          Accessible & best SEO <br /> practices
        </span>
      </h1>
      <div className="flex md:flex-row flex-col justify-between lg:mt-24 mt-10">
        <Categories />
        <section className="flex flex-row flex-wrap gap-8 md:w-[45vw]">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </section>
      </div>
    </main>
  );
}
