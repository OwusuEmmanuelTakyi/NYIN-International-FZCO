import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "../app/components/ThemeProvider";
import ScrollToTop from "../app/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />

      {/* Floating scroll button */}
      <ScrollToTop />

      {/* Vercel Analytics for Vite/React */}
      <Analytics />
    </ThemeProvider>
  );
}