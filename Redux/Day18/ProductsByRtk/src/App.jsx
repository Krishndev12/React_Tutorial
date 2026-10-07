import React from "react";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";
import "./Utils/ProductSlice";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
