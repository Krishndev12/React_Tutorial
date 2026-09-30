import React from "react";
import { useContext } from "react";
import { themeContext } from "../App";

const Right = () => {
  const { theme, text } = useContext(themeContext);
  return (
    <div
      className={`border border-green-400 w-1/2 h-[100vh] ${
        theme == "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div>{text}</div>
    </div>
  );
};

export default Right;
