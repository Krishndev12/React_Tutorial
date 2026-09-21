import { useState } from "react";

const Navbar = ({  setTheme }) => {
  return (
    <div style={{ backgroundColor: "blue", color: "white" }}>
      <div>LOGO</div>
      <div>
        <button
          onClick={() => {
            setTheme(true);
          }}
        >
          Light
        </button>
        <button
          onClick={() => {
            setTheme(false);
          }}
        >
          Dark
        </button>
      </div>
    </div>
  );
};

export default Navbar;
