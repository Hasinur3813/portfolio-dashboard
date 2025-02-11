import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootLayout from "./Layout/RootLayout.jsx";
import Login from "./pages/login/Login.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import AddProject from "./pages/AddProject/AddProject.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Projects />,
      },
      {
        path: "/dashboard/add-project",
        element: <AddProject />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
