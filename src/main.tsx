import "./scss/index.scss";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./route/router";
import { AnimatePresence } from "framer-motion";
createRoot(document.getElementById("root")!).render(
  <AnimatePresence>
    <RouterProvider router={router} />
  </AnimatePresence>
);
