import { createRoot } from "react-dom/client";
import "./index.css";

//default import
// import App from "./App.jsx"

// name import
import { App } from "./App.jsx";
// import { MyFunction } from "./App.jsx";
import Navbar from "./Components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    {/* <MyFunction/> */}
  </>,
);
