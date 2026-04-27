import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Streaming from "./pages/Streaming";
import Trading from "./pages/Trading";
import Mining from "./pages/Mining";
import Contact from "./pages/Contact";
import Leadership from "./pages/Leadership";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "streaming", Component: Streaming },
      { path: "trading", Component: Trading },
      { path: "mining", Component: Mining },
      { path: "contact", Component: Contact },
      { path: "leadership", Component: Leadership },
      { path: "*", Component: NotFound },
    ],
  },
]);
