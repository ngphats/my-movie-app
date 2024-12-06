import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import { lazy } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const MovieDetail = lazy(() => {
  import("./pages/MovieDetail.jsx");
});

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
