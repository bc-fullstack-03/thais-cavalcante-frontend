import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";
import PostPage from "./pages/PostPage";
import RequiredAuth from "./components/RequiredAuth";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequiredAuth>
              <Profile />
            </RequiredAuth>
          }
        />
        <Route
          path="/friends"
          element={
            <RequiredAuth>
              <Friends />
            </RequiredAuth>
          }
        />
        <Route
          path="/post/:id"
          element={
            <RequiredAuth>
              <PostPage />
            </RequiredAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
