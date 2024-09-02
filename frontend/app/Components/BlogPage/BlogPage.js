import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import RelatedBlogs from './RelatedBlogs';

const BlogPage = ({ page }) => {
  return (
    <>
      <BlogHeader page={page} />
      <BlogContent page={page} />
      <RelatedBlogs />
    </>
  );
};

export default BlogPage;
