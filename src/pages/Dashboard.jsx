import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Dashboard() {
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Dashboard
        </h1>

        {/* Loading */}
        {loading && (
          <p className="text-blue-600 font-semibold">
            Loading posts...
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="text-red-600 font-semibold">
            Error: {error}
          </p>
        )}

        {/* Posts list */}
        {posts && (
          <ul className="space-y-3">
            {posts.slice(0, 10).map((post) => (
              <li key={post.id}>
                <Link
                  to={`/dashboard/post/${post.id}`}
                  className="block p-4 rounded-lg border hover:bg-blue-50 transition"
                >
                  <h2 className="font-semibold text-gray-800">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Click to view details
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
