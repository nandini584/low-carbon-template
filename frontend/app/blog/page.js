import BlogIndexPage from '@/app/Components/BlogIndexPage/BlogIndexPage';

export default async function Home() {
  // Fetch the BlogIndexPage's details
  const indexPages = await fetch(
    `http://localhost:8000/api/v2/pages/?${new URLSearchParams({
      type: 'blog.BlogIndexPage',
      slug: 'blog',
    })}`,
  ).then((response) => response.json());

  const index = indexPages.items[0];

  // Fetch the BlogPages that are children of the BlogIndexPage instance
  const data = await fetch(
    `http://localhost:8000/api/v2/pages/?${new URLSearchParams({
      type: 'blog.BlogPage',
      child_of: index.id.toString(),
      fields: ['publication_date', 'introduction'].join(','),
    })}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  ).then((response) => response.json());

  const posts = data.items;

  return <BlogIndexPage index={index} posts={posts} />;
}
