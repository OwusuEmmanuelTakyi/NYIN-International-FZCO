import { Link } from "react-router";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[600px] flex items-center justify-center bg-gradient-to-b from-background to-card">
      <div className="text-center px-4">
        <h1 className="text-6xl mb-4 text-primary">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-8 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
        >
          <Home size={20} />
          Return Home
        </Link>
      </div>
    </div>
  );
}
