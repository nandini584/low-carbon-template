import BlogPage from '@/app/Components/BlogPage/BlogPage';

const page = async ({ params: { slug } }) => {
  const metadata = await fetch(
    `http://localhost:8000/api/v2/pages/?${new URLSearchParams({
      type: 'blog.BlogPage',
      slug,
    })}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  ).then((response) => response.json());
  const data = await fetch(
    `http://localhost:8000/api/v2/pages/${metadata.items[0].id}/`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  ).then((response) => response.json());

  return <BlogPage page={data} />;
};

export default page;
