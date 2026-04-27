import { Outlet } from "react-router";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Root() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
