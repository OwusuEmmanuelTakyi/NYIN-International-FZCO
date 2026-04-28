import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Automatically scrolls to the top of the page on every route change,
 * UNLESS the URL contains a hash (#section-id) — in which case it scrolls
 * to that specific section instead.
 *
 * Drop this component once inside your <RouterProvider> tree (e.g. in your
 * root layout). It renders nothing, just listens for navigation changes.
 *
 * Behavior:
 *   /about            → scrolls to top
 *   /streaming        → scrolls to top
 *   /about#leadership → scrolls to the element with id="leadership"
 *   /streaming#how-it-works → scrolls to that section
 */
export default function ScrollToTopOnRouteChange() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Has a hash? Scroll to that section instead of the top
    if (hash) {
      // Wait one tick so the new page has actually rendered the element
      // (otherwise getElementById will return null on first paint)
      const timer = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // Fallback: hash points to nothing real, just go to top
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }

    // No hash — scroll instantly to top on every route change
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}