import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/pages/Home";
import Company from "./components/pages/company";
import NewProject from "./components/pages/NewProject";
import Project from "./components/pages/Project";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import ErrorPage from "./components/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/newproject",
        element: <NewProject />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
