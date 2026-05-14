import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "./routes/__root";
import Home from "./routes/index";
import About from "./routes/about";
import Services from "./routes/services";
import Gallery from "./routes/gallery";
import Contact from "./routes/contact";
import Privacy from "./routes/privacy";

const AreasSlug = lazy(() => import("./routes/areas.$slug").then(m => ({ default: m.AreasComponent })));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <RootLayout isError />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "gallery",
          element: <Gallery />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "privacy",
          element: <Privacy />,
        },
        {
          path: "areas/:slug",
          element: (
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
              <AreasSlug />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <RootLayout isNotFound />,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);

export { router, RouterProvider };
