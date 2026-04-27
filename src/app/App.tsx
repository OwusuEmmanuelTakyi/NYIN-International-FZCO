import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "../app/components/ThemeProvider";
import ScrollToTop from "../app/components/ScrollToTop";  // ← add this

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <ScrollToTop />   {/* ← add this, outside the router so it floats above everything */}
    </ThemeProvider>
  );
}