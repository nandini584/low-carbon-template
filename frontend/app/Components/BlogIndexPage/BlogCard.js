const BlogCard = ({ title, publication_date, category, authors }) => {
  return (
    <section
      className="md:w-[20vw] border-dashed border-2 border-gray-800 p-4 bg-gray-100 rounded-br-lg"
      aria-labelledby="blog-heading"
    >
      <h2 className="text-xl font-semibold mb-2 text-black" id="blog-heading">
        {title}
      </h2>
      <div className="flex justify-between text-gray-500 mb-6">
        <span className="text-sm">{category}</span>
        <time className="text-sm">{publication_date}</time>
      </div>
      <p className="text-gray-700 md:text-base text-sm">{authors}</p>
    </section>
  );
};

export default BlogCard;
