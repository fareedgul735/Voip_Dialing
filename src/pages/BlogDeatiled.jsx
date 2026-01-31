import { useParams } from "react-router-dom";
import { blogDeatiledPosts } from "../lib/Constant";
import Blog from "../../public/blog.png";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogDeatiledPosts.find((post) => post.id === id);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="max-w-4xl mx-auto py-12">
      <img src={Blog} className="rounded-xl mb-6" />
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600">{blog.fullDesc}</p>
    </div>
  );
};

export default BlogDetail;
