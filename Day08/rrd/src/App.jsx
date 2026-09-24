import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Error from "./Components/Error";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

// steps to do these

// 1. npm i react-router-dom
// 2. wrapup the <App/> with <BrowserRouter></BrowserRouter> in main.jsx
// 3. <Routes></Routes> to make routes.
// 4. <Route path="" element={component call} />
// 5. <Link to="path">Page name<Link/> // ye anchor tag ke jaisa hai. React me <Link></Link> tag use karte hai.
