import React from "react";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
