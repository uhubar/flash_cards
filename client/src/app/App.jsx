import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import PostPage from "../pages/PostPage";
import OnePostPage from "../pages/OnePostPage";
import CategoryPage from "../pages/CategoryPage";

import "./App.css";
import LoginPage from "../pages/LoginPage";
import RegPage from "../pages/RegPage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} />,
      children: [
        {
          path: "/posts",
          element: <PostPage />,
        },
        {
          path: "/categories",
          element: <CategoryPage />,
        },
        {
          path: "/post/:id",
          element: <OnePostPage />,
        },
        {
          path: "/login",
          element: <LoginPage setUser={setUser} />,
        },
        {
          path: "/reg",
          element: <RegPage setUser={setUser} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
