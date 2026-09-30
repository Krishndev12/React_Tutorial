import React from "react";
import { themeContext } from "../App";
import { useContext } from "react";

const Left = () => {
  const { theme, setText } = useContext(themeContext);
  return (
    <div
      className={`border border-green-400 w-1/2 h-[100vh] ${
        theme == "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <input
        onInput={(e) => {
          setText(e.target.value);
        }}
        className="border"
        type="text"
        placeholder="text here"
      />
    </div>
  );
};

export default Left;
