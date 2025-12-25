import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function PostDetail() {
  const { postId } = useParams();

  const {
    data: post,
    loading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg max-w-xl w-full p-6">
        {/* Loading */}
        {loading && (
          <p className="text-blue-600 font-semibold">
            Loading post...
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="text-red-600 font-semibold">
            Error: {error}
          </p>
        )}

        {/* Post content */}
        {post && (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>

            <p className="text-gray-600 mb-6">
              {post.body}
            </p>

            <Link
              to="/dashboard"
              className="text-blue-600 hover:underline"
            >
              ← Back to Dashboard
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
