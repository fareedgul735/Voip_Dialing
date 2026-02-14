import { useParams } from "react-router-dom";
import { blogDeatiledPosts } from "../lib/Constant";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogDeatiledPosts.find((post) => post.id === id);

  if (!blog) return <p>Blog not found</p>;

  return (
   <div className="w-full bg-gradient-to-b from-red-50 via-white to-white p-3 sm:p-12">
  <div className="max-w-[1400px] mx-auto space-y-16">
    {/* Featured Blog Card */}
    <div className="flex flex-col lg:flex-row justify-between bg-white rounded-xl shadow-md shadow-gray-300 p-6 gap-6">
      {/* Text Content */}
      <div className="flex-1">
        {blog && (
          <div className="inline-flex gap-3 items-center bg-red-50 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <span className="font-bold">Featured</span>
            <span>June 24, 2025</span>
          </div>
        )}

        <h1 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
          {blog.title}
        </h1>

        <p className="text-gray-600 mb-3 text-sm sm:text-base">
          {blog.shortDesc}
        </p>

        <p className="text-gray-600 text-sm sm:text-base">
          {blog.fullDesc}
        </p>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 w-full sm:w-[574px] lg:w-[574px] h-60 sm:h-80 lg:h-[400px]">
        <img
          src={blog.image_1}
          alt="blog"
          className="rounded-xl w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Sections */}
    {[1, 2, 3, 4, 5].map((i) => (
      <section key={i} className="space-y-4">
        <h2
          className={`text-2xl sm:text-3xl font-semibold text-blue-900 ${
            i === 2 ? "uppercase tracking-wide" : ""
          }`}
        >
          {blog[`head_${i}`]}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {blog[`desc_${i}`]}
        </p>

        {/* Optional images */}
        {i === 3 && blog.image_2 && (
          <div className="mt-6 flex justify-center">
            <img
              src={blog.image_2}
              alt="voip"
              className="w-full max-w-[747px] h-auto rounded-md"
            />
          </div>
        )}
      </section>
    ))}
  </div>
</div>
  );
};

export default BlogDetail;
