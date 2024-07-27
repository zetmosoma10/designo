import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Layout from "./pages/Layout";
import AboutPage from "./pages/about/AboutPage";
import LocationPage from "./pages/locations/LocationPage";
import ContactPage from "./pages/contact/ContactPage";
import AppDesignPage from "./pages/app-design/AppDesignPage";
import WebDesignPage from "./pages/web-design/WebDesignPage";
import GraphicDesignPage from "./pages/graphic-design/GraphicDesignPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "locations", element: <LocationPage /> },
      { path: "contacts", element: <ContactPage /> },
      { path: "app-designs", element: <AppDesignPage /> },
      { path: "web-designs", element: <WebDesignPage /> },
      { path: "graphic-designs", element: <GraphicDesignPage /> },
    ],
  },
]);

export default router;
