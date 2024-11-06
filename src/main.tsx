import "./scss/index.scss";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./route/router";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
