import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;
