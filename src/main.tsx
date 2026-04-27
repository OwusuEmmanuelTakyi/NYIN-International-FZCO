import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "../src/styles/index.css";
import "./styles/theme.css";   // ← add this line

createRoot(document.getElementById("root")!).render(<App />);