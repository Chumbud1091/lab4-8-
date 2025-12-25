import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PostDetail from "./pages/PostDetail";
import ProtectedRoute from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/post/:postId",
        element: <PostDetail />,
      },
    ],
  },
]);
