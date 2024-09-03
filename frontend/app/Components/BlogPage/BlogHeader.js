const BlogHeader = ({ page }) => {
  return (
    <div className="bg-light_gray md:pl-36 pl-6 md:pr-96 md:pt-20 pt-4">
      <h1 className="md:text-5xl text-2xl text-black font-bold">
        {page.title}
      </h1>
      <div className="flex flex-row items-center justify-between md:py-10 py-5 pr-6">
        {page.author ? (
          <p className="text-black md:text-lg text-base">{page.author.name}</p>
        ) : null}
        <time className="md:text-lg text-black text-base">
          {page.publication_date}
        </time>
      </div>
      <hr className="border border-gray-200 mb-10" />
    </div>
  );
};

export default BlogHeader;
