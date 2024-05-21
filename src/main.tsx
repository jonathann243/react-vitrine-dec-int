import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./Container/NotFoundPage";
import PageX from "./Container/PageX.tsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/profiles",
    element: <PageX />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
