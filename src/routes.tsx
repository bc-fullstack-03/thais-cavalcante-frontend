import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";
import PostPage from "./pages/PostPage";
import RequiredAuth from "./components/RequiredAuth";
import Following from "./pages/Following";
import Followers from "./pages/Followers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: (
      <RequiredAuth>
        <Home />
      </RequiredAuth>
    ),
  },
  {
    path: "/profile",
    element: (
      <RequiredAuth>
        <Profile />
      </RequiredAuth>
    ),
  },
  {
    path: "/friends",
    element: (
      <RequiredAuth>
        <Friends />
      </RequiredAuth>
    ),
  },
  {
    path: "/post/:id",
    element: (
      <RequiredAuth>
        <PostPage />
      </RequiredAuth>
    ),
  },
  {
    path: "/following/:id",
    element: (
      <RequiredAuth>
        <Following />
      </RequiredAuth>
    ),
  },
  {
    path: "/followers/:id",
    element: (
      <RequiredAuth>
        <Followers />
      </RequiredAuth>
    ),
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
