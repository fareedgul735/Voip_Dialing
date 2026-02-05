import { useParams } from "react-router-dom";
import { blogDeatiledPosts } from "../lib/Constant";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogDeatiledPosts.find((post) => post.id === id);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="w-full bg-gradient-to-b from-red-50 via-white to-white p-[12px] py-12">
      <div className="mx-12">
        <div className="max-w-[1400px] flex justify-between bg-white rounded-xl shadow-md shadow-gray-300 p-6 flex gap-8 mb-16">
          <div className="w-[715px]">
            {blog && (
              <div className="inline-flex gap-3 items-center bg-red-50 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <span className="font-bold">Featured</span>
                <span>June 24, 2025</span>
              </div>
            )}

            <h1 className="text-2xl font-bold mb-4 leading-snug">
              {blog.title}
            </h1>

            <p className="text-gray-600 mb-3 text-[14px]">{blog.shortDesc}</p>

            <p className="text-gray-600 text-[14px]">{blog.fullDesc}</p>
          </div>

          <div className="w-[574px] shrink-0">
            <img
              src={blog.image_1}
              alt="blog"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </div>

        <section className="mb-14">
          <h2 className="text-3xl font-semibold mb-4 text-blue-900">
            {blog.head_1}
          </h2>
          <p className="text-gray-700 leading-relaxed">{blog.desc_1}</p>
        </section>

        <section className="mb-14">
          <h2 className="text-3xl text-blue-900 font-semibold mb-4 uppercase tracking-wide">
            {blog.head_2}
          </h2>
          <p className="text-gray-700 leading-relaxed">{blog.desc_2}</p>
        </section>

        <div className="flex justify-start mb-16 rounded">
          <img
            src={blog.image_2}
            alt="voip"
            className="w-[747px] h-[287px] rounded-md"
          />
        </div>

        <section className="mb-14">
          <h2 className="text-3xl text-blue-900  font-semibold mb-4">
            {blog.head_3}
          </h2>
          <p className="text-gray-700 leading-relaxed">{blog.desc_3}</p>
        </section>

        <section className="mb-14">
          <h2 className="text-3xl text-blue-900  font-semibold mb-4">
            {blog.head_4}
          </h2>
          <p className="text-gray-700 leading-relaxed">{blog.desc_4}</p>
        </section>

        <section>
          <h2 className="text-3xl text-blue-900  font-semibold mb-4">
            {blog.head_5}
          </h2>
          <p className="text-gray-700 leading-relaxed">{blog.desc_6}</p>
        </section>
      </div>
    </div>
  );
};

export default BlogDetail;
