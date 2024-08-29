import Image from 'next/image';
import BlogCard from './BlogCard';
import Categories from './Categories';

export default function BlogIndexPage() {
  return (
    <main className="bg-light_gray px-36 py-20">
      <h2 className="text-6xl text-black">
        Sustainability Web Designs <br />{' '}
        <span className="text-blue_violet font-semibold">
          Accessible & best SEO <br /> practices
        </span>
      </h2>
      <div className="flex flex-row justify-between mt-24">
        <Categories />
        <section className="flex flex-row flex-wrap gap-8 w-[45vw]">
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
