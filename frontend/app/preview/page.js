import { draftMode } from 'next/headers';
import HomePage from '@/app/Components/HomePage/HomePage';
import BlogPage from '@/app/Components/BlogPage/BlogPage';
import BlogIndexPage from '@/app/Components/BlogIndexPage/BlogIndexPage';

export default async function Preview({
  searchParams: { content_type, token },
}) {
  const { isEnabled } = draftMode();

  const data = await fetch(
    `http://localhost:8000/api/v2/page_preview/?${new URLSearchParams({
      content_type,
      token,
    })}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  ).then((response) => response.json());

  let page;

  switch (content_type) {
    case 'home.homepage':
      page = <HomePage page={data} />;
      break;
    case 'blog.blogindexpage':
      page = <BlogIndexPage page={data} posts={[]} />;
      break;
    case 'blog.blogpage':
      page = <BlogPage page={data} />;
      break;
    default:
      page = <pre>{JSON.stringify(data, null, 2)}</pre>;
      break;
  }

  return page;
}
