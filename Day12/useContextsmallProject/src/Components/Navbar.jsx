import React from "react";
import { themeContext } from "../App";
import { useContext } from "react";

const Navbar = () => {
  const { theme, setTheme } = useContext(themeContext);
  return (
    <div className="bg-red-300 p-4 ">
      <div className="flex gap-3">
        <button
          onClick={() => {
            setTheme("dark");
          }}
          className="border p-1"
        >
          Dark
        </button>
        <button
          onClick={() => {
            setTheme("light");
          }}
          className="border p-1"
        >
          Light
        </button>
      </div>
    </div>
  );
};

export default Navbar;
