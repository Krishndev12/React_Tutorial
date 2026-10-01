import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TextContentProvider } from "./Utils/TextContext.jsx";

createRoot(document.getElementById("root")).render(
  <TextContentProvider>
    <App />
  </TextContentProvider>,
);
